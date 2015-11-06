// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('rtc.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19383__delegate = function (x){
if(cljs.core.truth_(rtc.core.on_js_reload)){
return cljs.core.apply.call(null,rtc.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'rtc.core/on-js-reload' is missing");
}
};
var G__19383 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19384__i = 0, G__19384__a = new Array(arguments.length -  0);
while (G__19384__i < G__19384__a.length) {G__19384__a[G__19384__i] = arguments[G__19384__i + 0]; ++G__19384__i;}
  x = new cljs.core.IndexedSeq(G__19384__a,0);
} 
return G__19383__delegate.call(this,x);};
G__19383.cljs$lang$maxFixedArity = 0;
G__19383.cljs$lang$applyTo = (function (arglist__19385){
var x = cljs.core.seq(arglist__19385);
return G__19383__delegate(x);
});
G__19383.cljs$core$IFn$_invoke$arity$variadic = G__19383__delegate;
return G__19383;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1446785410407