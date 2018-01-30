(ns rtc.view.chat
    (:require [re-frame.core :as re-frame :refer [dispatch]]
              [rtc.util :as util :include-macros true]))

(defn frame []
  [:div
   [:textarea {:value "troll"}]
   [:textarea {:value ""}]
   [:button {:on-click #(dispatch [:send-data "hello"])} "send"]])

