(ns ^:figwheel-always rtc.core
    (:require [rtc.signaling :as signal]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload [])
