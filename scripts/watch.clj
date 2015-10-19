(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'rtc.core
   :output-to "out/rtc.js"
   :output-dir "out"})
