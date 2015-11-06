// Compiled by ClojureScript 1.7.122 {}
goog.provide('rtc.core');
goog.require('cljs.core');
goog.require('rtc.signaling');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof rtc.core.app_state !== 'undefined'){
} else {
rtc.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
rtc.core.on_js_reload = (function rtc$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1446788947095