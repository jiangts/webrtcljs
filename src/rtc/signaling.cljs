(ns ^:figwheel-always rtc.signaling
  (:require [cljs.core.async :as async
             :refer [<! >! chan put!]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defonce app-state (atom {:text "Hello world!"}))

; session id (if doesn't exist, create a random one)
(declare session-id)

; channels
(def channels {})

; listeners
(def listeners {:onpeer nil
                :onsessionfull nil})

; Event Source
(def es (EventSource.))

(defn listen [es evt]
  (let [c chan]
    (.addEventListener es (name evt) #(put! c %))
    c))

(comment

  (let [c (listen es :join)]
    (go (let [evt (!< c)]
          (let [peer-uid (.-data evt)]
            )))))
