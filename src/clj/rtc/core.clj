(ns rtc.core
  (:require [net.cgrand.enlive-html :as html]))


(defn fetch-url [url]
  (html/html-resource (java.net.URL. url)))


(defn- process-w3c-spec [url]
  )


(comment
  ;; validate www.w3.org
  (def url "https://www.w3.org/TR/webrtc/")
  (def w3c-spec-string (slurp url))
  (def w3c-html (fetch-url url))
  (println w3c-spec-string)
  (println w3c-html)
  (def text-specs (map html/text (html/select w3c-html [:.def.idl :> html/any-node])))
  (println (first text-specs))
  )
