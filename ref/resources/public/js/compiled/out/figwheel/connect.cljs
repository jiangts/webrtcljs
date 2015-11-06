(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [rtc.core]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/rtc.core.on-js-reload (apply js/rtc.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'rtc.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

