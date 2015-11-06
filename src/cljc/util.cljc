(ns rtc.util)

(defmacro dev "Only include body s-exprs in development mode"
  [& body]
  `(when ^boolean goog.DEBUG
     ~@body))

#?(:cljs 
    (defn p "Prints given arguments, and then returns the last one"
      [& values]
      (.log js/console (apply pr-str values))
      (last values)))

#?(:cljs 
    (defn benchmark
      ([f] (benchmark nil f)) 
      ([msg f]
       (let [start (.now js/Date)
             result (f)]
         (p (str (when msg (str msg ": ")) (- (.now js/Date) start) "ms"))
         result))))

(defmacro b
  ([f]
   `(benchmark (fn [] ~f)))

  ([msg f]
   `(benchmark ~msg (fn [] ~f))))

(comment
  (defmacro bind
    [var-name value]
    `(set! ~(symbol (str "js/" (name var-name))) value)))

;; --------------------
(defn- to-sub
  [[binding sub]]
  `[~binding (re-frame.core/subscribe ~sub)])

(defn- to-deref
  [binding]
  `[~binding (deref ~binding)])

(defmacro with-subs
  [bindings & body]
  `(let [~@(apply concat (map to-sub (partition 2 bindings)))]
     (fn []
       (let [~@(apply concat (map to-deref (take-nth 2 bindings)))]
         ~@body))))
