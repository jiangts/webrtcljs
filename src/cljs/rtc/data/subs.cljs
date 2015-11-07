(ns rtc.data.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame :refer [register-sub]]))

(register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))

;; TODO write middleware for standard register-sub functions
;; I want a path primitive
;; WHY aren't setters and getters written together?
(register-sub
 :user-media-url
 (fn [db _]
   (reaction (get-in @db [:rtc :media :stream-url]))))

(register-sub
 :user-media-stream
 (fn [db _]
   (reaction (get-in @db [:rtc :media :stream]))))

;; peer connections
(register-sub
 :local-peer
 (fn [db _]
   (reaction (get-in @db [:rtc :peer :local :connection]))))

(register-sub
 :remote-peer
 (fn [db _]
   (reaction (get-in @db [:rtc :peer :remote :connection]))))

;; peer media
(register-sub
 :remote-media-url
 (fn [db _]
   (reaction (get-in @db [:rtc :peer :remote :stream-url]))))

;; data channels
(register-sub
  :channel-received-data
  (fn [db _]
    (reaction (get-in @db [:rtc :peer :remote :channel-data]))))

(register-sub
  :send-channel-state
  (fn [db _]
    (reaction (get-in @db [:rtc :peer :local :channel-state]))))
