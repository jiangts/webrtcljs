(ns rtc.data.handlers
  (:require [re-frame.core :as re-frame :refer [register-handler dispatch subscribe trim-v path debug]]
            [rtc.data.db :as db]
            [rtc.util :as util :include-macros true]))

(register-handler
  :initialize-db
  (fn  [_ _]
    db/default-db))

(register-handler
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

;; rtc
;; ===

;; User Media
;; ==========
(def media-path (path [:rtc :media]))

(register-handler
  :get-user-media
  [debug trim-v]
  (fn [db [cfg]]
    (js/getUserMedia (clj->js cfg)
                     #(dispatch [:set-user-media %])
                     #(dispatch [:user-media-error %]))
    db))
;; dispatch is analagous to writing to a core.async channel

(defn stream->url [stream]
  (.createObjectURL js/URL stream))

(register-handler
  :set-user-media
  [debug media-path trim-v]
  (fn [db [stream]]
    (-> db
      (assoc :stream stream)
      (assoc :stream-url (stream->url stream)))))

(register-handler
  :user-media-error
  (fn [db [error]]
    (js/alert (str "Error: " error))
    db))

;; Peer Connections
;; ================
;; in general, event names such as "onicecandidate"
;; or "onaddstream" create an event
;; on the other hand, createOffer/createAnswer create descriptions
(def peer-path (path [:rtc :peer]))

(defn get-tracks [stream media-type]
  (when (= (name media-type) "audio")
    (.getAudioTracks stream))
  (when (= (name media-type) "video")
    (.getVideoTracks stream)))

(register-handler
  :call-peer
  [debug peer-path trim-v]
  (fn [db [cfg]]
    (let [stream @(subscribe [:user-media-stream])
          servers nil
          js-cfg (clj->js cfg)
          local-peer-connection (js/RTCPeerConnection. servers js-cfg)
          remote-peer-connection (js/RTCPeerConnection. servers js-cfg)]
      (set! (.-onicecandidate local-peer-connection) #(dispatch [:got-local-ice-candidate %]))
      (set! (.-onicecandidate remote-peer-connection) #(dispatch [:got-remote-ice-candidate %]))
      (set! (.-onaddstream remote-peer-connection) #(dispatch [:got-remote-stream %]))
      (.addStream local-peer-connection stream)                                      ;; add the stream to send
      (.createOffer local-peer-connection #(dispatch [:got-local-description %]) #()) ;; seems like peer connections can do sdp now!?
      (dispatch [:create-channel local-peer-connection remote-peer-connection cfg])
      (-> db
        (assoc-in [:local :connection] local-peer-connection)    
        (assoc-in [:remote :connection] remote-peer-connection)))))

(register-handler
  :hangup-peer
  (fn [db _]
    (let [local-peer @(subscribe [:local-peer])
          remote-peer @(subscribe [:remote-peer])]
      (.close local-peer)
      (.close remote-peer)
      db)))

;; XXX this is inconsistent storage location with remote stream/stream url
(register-handler
  :got-remote-stream
  [peer-path trim-v]
  (fn [db [event]]
    (let [stream (.-stream event)]
      (util/pt "got remote video stream!!")
      (-> db
        (assoc-in [:remote :stream] stream)   
        (assoc-in [:remote :stream-url] (stream->url stream))))))

;; handle session descriptions
(register-handler
  :got-local-description
  [trim-v]
  (fn [db [desc]]
    (let [local-peer @(subscribe [:local-peer])
          remote-peer @(subscribe [:remote-peer])]
      (.setLocalDescription local-peer desc)
      (.setRemoteDescription remote-peer desc)
      (.createAnswer remote-peer #(dispatch [:got-remote-description %]) #())
      (util/pt "Local description: " (.-sdp desc))
      db)))

(register-handler
  :got-remote-description
  [trim-v]
  (fn [db [desc]]
    (let [local-peer @(subscribe [:local-peer])
          remote-peer @(subscribe [:remote-peer])]
      (.setLocalDescription remote-peer desc)
      (.setRemoteDescription local-peer desc)
      (util/pt "Remote description: " (.-sdp desc))
      db)))

;; handle ICE candidates
(register-handler
  :got-local-ice-candidate
  [trim-v]
  (fn [db [event]]
    (let [remote-peer @(subscribe [:remote-peer])
          candidate (.-candidate event)]
      (when candidate
        (.addIceCandidate remote-peer (js/RTCIceCandidate. candidate))
        (util/pt "Local ICE candidate:" (.-candidate candidate)))
      db)))

(register-handler
  :got-remote-ice-candidate
  [trim-v]
  (fn [db [event]]
    (let [local-peer @(subscribe [:local-peer])
          candidate (.-candidate event)]
      (when candidate
        (.addIceCandidate local-peer (js/RTCIceCandidate. candidate))
        (util/pt "Remote ICE candidate:" (.-candidate candidate)))
      db)))

;; Data Channels
;; =============

;; TODO try catch for creating the data channel.
(register-handler
  :create-channel
  [peer-path trim-v]
  (fn [db [local-peer remote-peer cfg]]
    (let [send-channel (.createDataChannel local-peer "send-data-channel" #js {:ordered true})] ;TODO FIXME
      (util/p "data channeling: " send-channel)
      (set! (.-onopen send-channel) #(dispatch [:send-channel-state-change]))
      (set! (.-onclose send-channel) #(dispatch [:send-channel-state-change]))
      (set! (.-ondatachannel remote-peer) #(dispatch [:got-channel %]))
      (util/p "data channel state: " (.-readyState send-channel))
      (assoc-in db [:local :channel] send-channel))))

;; message handling
;; ================
(register-handler
  :send-data
  [peer-path trim-v]
  (fn [db [data]]
    (let [send-channel (get-in db [:local :channel])]
      (.send send-channel data)
      db)))

(register-handler
  :receive-data
  [peer-path trim-v]
  (fn [db [event]]
    (assoc-in db [:remote :channel-data] (.-data event))))

;; got channel
;; ===========
(register-handler
  :got-channel
  [peer-path trim-v]
  (fn [db [event]]
    (util/p "FAM!!! WE GOT A CHANNEL!!!")
    (let [channel (.-channel event)]
      (set! (.-onmessage channel) #(dispatch [:receive-data %]))
      (set! (.-onopen channel) #(dispatch [:receive-channel-state-change]))
      (set! (.-onclose channel) #(dispatch [:receive-channel-state-change]))
      (assoc-in db [:remote :channel] channel))))

;; channel state changes
;; =====================
(register-handler
  :send-channel-state-change
  [peer-path]
  (fn [db _]
    (let [send-channel (get-in db [:local :channel])
          ready-state (.-readyState send-channel)]
      (util/pt "ready state: " ready-state)
      (assoc-in db [:local :channel-state] ready-state))))

(register-handler
  :receive-channel-state-change
  [peer-path]
  (fn [db _]
    (let [receive-channel (get-in db [:remote :channel])
          ready-state (.-readyState receive-channel)]
      (assoc-in db [:remote :channel-state] ready-state))))

