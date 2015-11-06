(ns rtc.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [rtc.data.handlers]
              [rtc.data.subs]
              [rtc.routes :as routes]
              [rtc.view.core :as view-core]
              [rtc.config :as cfg]))

(defn mount-root []
  (reagent/render [view-core/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
