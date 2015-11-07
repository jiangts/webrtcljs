(ns rtc.view.core
    (:require [re-frame.core :as re-frame]
              [rtc.view.video :as video]
              [rtc.view.chat :as chat]
              [rtc.util :as util]))

;; --------------------
(defn home-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div (str "Hello from " @name ". This is the Home Page.")
       [:div [:a {:href "#/about"} "go to About Page"]]
       [video/frame]    
       [video/remote-frame]
       [video/controls]
       [:button {:on-click (fn [] 
                             (re-frame/dispatch [:send-channel-state-change])
                             (re-frame/dispatch [:receive-channel-state-change]))} "test"]
       [chat/frame]])))

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))
