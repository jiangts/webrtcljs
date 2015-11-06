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

;; user media
;; ==========
(def media-path (path [:rtc :media]))

(register-handler
  :get-user-media
  [trim-v debug]
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
  [media-path trim-v debug]
  (fn [db [stream]]
    (-> db
      (assoc :stream stream)
      (assoc :stream-url (stream->url stream)))))

(register-handler
  :user-media-error
  (fn [db [error]]
    (js/alert (str "Error: " error))
    db))

;; peer connection
;; ===============
(def peer-path (path [:rtc :peer]))

(defn get-tracks [stream media-type]
  (when (= (name media-type) "audio")
    (.getAudioTracks stream))
  (when (= (name media-type) "video")
    (.getVideoTracks stream)))

(register-handler
  :call-peer
  [peer-path debug]
  (fn [db _]
    (let [stream (subscribe [:user-media-stream])
          servers nil
          local-peer-connection (js/RTCPeerConnection. servers)
          remote-peer-connection (js/RTCPeerConnection. servers)
          ]
        (set! (.-onicecandidate local-peer-connection) #(dispatch [:got-local-ice-candidate %]))
        (set! (.-onicecandidate remote-peer-connection) #(dispatch [:got-remote-ice-candidate %]))
        (set! (.-onaddstream remote-peer-connection) #(dispatch [:got-remote-stream %]))
        (.addStream local-peer-connection @stream)
        (.createOffer local-peer-connection #(dispatch [:got-local-description %]) #())
        (-> db
            (assoc-in [:local :connection] local-peer-connection)    
            (assoc-in [:remote :connection] remote-peer-connection)))))

(register-handler
  :hangup-peer
  (fn [db _]
    (util/p "HANGING UP BUD")
    db))

(register-handler
  :got-local-ice-candidate
  [trim-v]
  (fn [db [event]]
    (let [remote-peer (subscribe [:remote-peer])
          candidate (.-candidate event)]
      (when candidate
        (.addIceCandidate @remote-peer (js/RTCIceCandidate. candidate))
        (util/p "Local ICE candidate: \n" (.-candidate candidate)))
      db)))

(register-handler
  :got-remote-ice-candidate
  [trim-v]
  (fn [db [event]]
    (let [local-peer (subscribe [:local-peer])
          candidate (.-candidate event)]
      (when candidate
        (.addIceCandidate @local-peer (js/RTCIceCandidate. candidate))
        (util/p "Remote ICE candidate:" (.-candidate candidate)))
      db)))

;; XXX this is inconsistent storage location with remote stream/stream url
(register-handler
  :got-remote-stream
  [peer-path trim-v]
  (fn [db [event]]
    (let [stream (.-stream event)]
      (-> db
        (assoc-in [:remote :stream] stream)   
        (assoc-in [:remote :stream-url] (stream->url stream))))))

(register-handler
  :got-local-description
  [trim-v]
  (fn [db [desc]]
    (let [local-peer (subscribe [:local-peer])
          remote-peer (subscribe [:remote-peer])]
      (.setLocalDescription @local-peer desc)
      (.setRemoteDescription @remote-peer desc)
      (.createAnswer @remote-peer #(dispatch [:got-remote-description %]) #())
      db)))

(register-handler
  :got-remote-description
  [trim-v]
  (fn [db [desc]]
    (let [local-peer (subscribe [:local-peer])
          remote-peer (subscribe [:remote-peer])]
      (.setLocalDescription @remote-peer desc)
      (.setRemoteDescription @local-peer desc)
      db)))

