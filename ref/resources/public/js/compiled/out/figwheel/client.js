// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23437 = cljs.core._EQ_;
var expr__23438 = (function (){var or__16279__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23437.call(null,"true",expr__23438))){
return true;
} else {
if(cljs.core.truth_(pred__23437.call(null,"false",expr__23438))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23438)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23440__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23441__i = 0, G__23441__a = new Array(arguments.length -  0);
while (G__23441__i < G__23441__a.length) {G__23441__a[G__23441__i] = arguments[G__23441__i + 0]; ++G__23441__i;}
  args = new cljs.core.IndexedSeq(G__23441__a,0);
} 
return G__23440__delegate.call(this,args);};
G__23440.cljs$lang$maxFixedArity = 0;
G__23440.cljs$lang$applyTo = (function (arglist__23442){
var args = cljs.core.seq(arglist__23442);
return G__23440__delegate(args);
});
G__23440.cljs$core$IFn$_invoke$arity$variadic = G__23440__delegate;
return G__23440;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23443){
var map__23446 = p__23443;
var map__23446__$1 = ((((!((map__23446 == null)))?((((map__23446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23446):map__23446);
var message = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16279__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16267__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16267__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16267__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19359__auto___23608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___23608,ch){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___23608,ch){
return (function (state_23577){
var state_val_23578 = (state_23577[(1)]);
if((state_val_23578 === (7))){
var inst_23573 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
var statearr_23579_23609 = state_23577__$1;
(statearr_23579_23609[(2)] = inst_23573);

(statearr_23579_23609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (1))){
var state_23577__$1 = state_23577;
var statearr_23580_23610 = state_23577__$1;
(statearr_23580_23610[(2)] = null);

(statearr_23580_23610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (4))){
var inst_23530 = (state_23577[(7)]);
var inst_23530__$1 = (state_23577[(2)]);
var state_23577__$1 = (function (){var statearr_23581 = state_23577;
(statearr_23581[(7)] = inst_23530__$1);

return statearr_23581;
})();
if(cljs.core.truth_(inst_23530__$1)){
var statearr_23582_23611 = state_23577__$1;
(statearr_23582_23611[(1)] = (5));

} else {
var statearr_23583_23612 = state_23577__$1;
(statearr_23583_23612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (15))){
var inst_23537 = (state_23577[(8)]);
var inst_23552 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23537);
var inst_23553 = cljs.core.first.call(null,inst_23552);
var inst_23554 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23553);
var inst_23555 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23554)].join('');
var inst_23556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23555);
var state_23577__$1 = state_23577;
var statearr_23584_23613 = state_23577__$1;
(statearr_23584_23613[(2)] = inst_23556);

(statearr_23584_23613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (13))){
var inst_23561 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
var statearr_23585_23614 = state_23577__$1;
(statearr_23585_23614[(2)] = inst_23561);

(statearr_23585_23614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (6))){
var state_23577__$1 = state_23577;
var statearr_23586_23615 = state_23577__$1;
(statearr_23586_23615[(2)] = null);

(statearr_23586_23615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (17))){
var inst_23559 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
var statearr_23587_23616 = state_23577__$1;
(statearr_23587_23616[(2)] = inst_23559);

(statearr_23587_23616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (3))){
var inst_23575 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23577__$1,inst_23575);
} else {
if((state_val_23578 === (12))){
var inst_23536 = (state_23577[(9)]);
var inst_23550 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23536,opts);
var state_23577__$1 = state_23577;
if(cljs.core.truth_(inst_23550)){
var statearr_23588_23617 = state_23577__$1;
(statearr_23588_23617[(1)] = (15));

} else {
var statearr_23589_23618 = state_23577__$1;
(statearr_23589_23618[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (2))){
var state_23577__$1 = state_23577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23577__$1,(4),ch);
} else {
if((state_val_23578 === (11))){
var inst_23537 = (state_23577[(8)]);
var inst_23542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23543 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23537);
var inst_23544 = cljs.core.async.timeout.call(null,(1000));
var inst_23545 = [inst_23543,inst_23544];
var inst_23546 = (new cljs.core.PersistentVector(null,2,(5),inst_23542,inst_23545,null));
var state_23577__$1 = state_23577;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23577__$1,(14),inst_23546);
} else {
if((state_val_23578 === (9))){
var inst_23537 = (state_23577[(8)]);
var inst_23563 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23564 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23537);
var inst_23565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23564);
var inst_23566 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23565)].join('');
var inst_23567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23566);
var state_23577__$1 = (function (){var statearr_23590 = state_23577;
(statearr_23590[(10)] = inst_23563);

return statearr_23590;
})();
var statearr_23591_23619 = state_23577__$1;
(statearr_23591_23619[(2)] = inst_23567);

(statearr_23591_23619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (5))){
var inst_23530 = (state_23577[(7)]);
var inst_23532 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23533 = (new cljs.core.PersistentArrayMap(null,2,inst_23532,null));
var inst_23534 = (new cljs.core.PersistentHashSet(null,inst_23533,null));
var inst_23535 = figwheel.client.focus_msgs.call(null,inst_23534,inst_23530);
var inst_23536 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23535);
var inst_23537 = cljs.core.first.call(null,inst_23535);
var inst_23538 = figwheel.client.autoload_QMARK_.call(null);
var state_23577__$1 = (function (){var statearr_23592 = state_23577;
(statearr_23592[(8)] = inst_23537);

(statearr_23592[(9)] = inst_23536);

return statearr_23592;
})();
if(cljs.core.truth_(inst_23538)){
var statearr_23593_23620 = state_23577__$1;
(statearr_23593_23620[(1)] = (8));

} else {
var statearr_23594_23621 = state_23577__$1;
(statearr_23594_23621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (14))){
var inst_23548 = (state_23577[(2)]);
var state_23577__$1 = state_23577;
var statearr_23595_23622 = state_23577__$1;
(statearr_23595_23622[(2)] = inst_23548);

(statearr_23595_23622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (16))){
var state_23577__$1 = state_23577;
var statearr_23596_23623 = state_23577__$1;
(statearr_23596_23623[(2)] = null);

(statearr_23596_23623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (10))){
var inst_23569 = (state_23577[(2)]);
var state_23577__$1 = (function (){var statearr_23597 = state_23577;
(statearr_23597[(11)] = inst_23569);

return statearr_23597;
})();
var statearr_23598_23624 = state_23577__$1;
(statearr_23598_23624[(2)] = null);

(statearr_23598_23624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23578 === (8))){
var inst_23536 = (state_23577[(9)]);
var inst_23540 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23536,opts);
var state_23577__$1 = state_23577;
if(cljs.core.truth_(inst_23540)){
var statearr_23599_23625 = state_23577__$1;
(statearr_23599_23625[(1)] = (11));

} else {
var statearr_23600_23626 = state_23577__$1;
(statearr_23600_23626[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19359__auto___23608,ch))
;
return ((function (switch__19294__auto__,c__19359__auto___23608,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____0 = (function (){
var statearr_23604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23604[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__);

(statearr_23604[(1)] = (1));

return statearr_23604;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____1 = (function (state_23577){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_23577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e23605){if((e23605 instanceof Object)){
var ex__19298__auto__ = e23605;
var statearr_23606_23627 = state_23577;
(statearr_23606_23627[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23628 = state_23577;
state_23577 = G__23628;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__ = function(state_23577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____1.call(this,state_23577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19295__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___23608,ch))
})();
var state__19361__auto__ = (function (){var statearr_23607 = f__19360__auto__.call(null);
(statearr_23607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___23608);

return statearr_23607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___23608,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23629_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23629_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23636 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23636){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23635 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23634,_STAR_print_newline_STAR_23635,base_path_23636){
return (function() { 
var G__23637__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23638__i = 0, G__23638__a = new Array(arguments.length -  0);
while (G__23638__i < G__23638__a.length) {G__23638__a[G__23638__i] = arguments[G__23638__i + 0]; ++G__23638__i;}
  args = new cljs.core.IndexedSeq(G__23638__a,0);
} 
return G__23637__delegate.call(this,args);};
G__23637.cljs$lang$maxFixedArity = 0;
G__23637.cljs$lang$applyTo = (function (arglist__23639){
var args = cljs.core.seq(arglist__23639);
return G__23637__delegate(args);
});
G__23637.cljs$core$IFn$_invoke$arity$variadic = G__23637__delegate;
return G__23637;
})()
;})(_STAR_print_fn_STAR_23634,_STAR_print_newline_STAR_23635,base_path_23636))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23634;
}}catch (e23633){if((e23633 instanceof Error)){
var e = e23633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23636], null));
} else {
var e = e23633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23636))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23640){
var map__23647 = p__23640;
var map__23647__$1 = ((((!((map__23647 == null)))?((((map__23647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);
var opts = map__23647__$1;
var build_id = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23647,map__23647__$1,opts,build_id){
return (function (p__23649){
var vec__23650 = p__23649;
var map__23651 = cljs.core.nth.call(null,vec__23650,(0),null);
var map__23651__$1 = ((((!((map__23651 == null)))?((((map__23651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23651):map__23651);
var msg = map__23651__$1;
var msg_name = cljs.core.get.call(null,map__23651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23650,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23650,map__23651,map__23651__$1,msg,msg_name,_,map__23647,map__23647__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23650,map__23651,map__23651__$1,msg,msg_name,_,map__23647,map__23647__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23647,map__23647__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23657){
var vec__23658 = p__23657;
var map__23659 = cljs.core.nth.call(null,vec__23658,(0),null);
var map__23659__$1 = ((((!((map__23659 == null)))?((((map__23659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23659):map__23659);
var msg = map__23659__$1;
var msg_name = cljs.core.get.call(null,map__23659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23658,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23661){
var map__23671 = p__23661;
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var on_compile_warning = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23671,map__23671__$1,on_compile_warning,on_compile_fail){
return (function (p__23673){
var vec__23674 = p__23673;
var map__23675 = cljs.core.nth.call(null,vec__23674,(0),null);
var map__23675__$1 = ((((!((map__23675 == null)))?((((map__23675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23675):map__23675);
var msg = map__23675__$1;
var msg_name = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23674,(1));
var pred__23677 = cljs.core._EQ_;
var expr__23678 = msg_name;
if(cljs.core.truth_(pred__23677.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23678))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23677.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23678))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23671,map__23671__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__,msg_hist,msg_names,msg){
return (function (state_23894){
var state_val_23895 = (state_23894[(1)]);
if((state_val_23895 === (7))){
var inst_23818 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23818)){
var statearr_23896_23942 = state_23894__$1;
(statearr_23896_23942[(1)] = (8));

} else {
var statearr_23897_23943 = state_23894__$1;
(statearr_23897_23943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (20))){
var inst_23888 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23898_23944 = state_23894__$1;
(statearr_23898_23944[(2)] = inst_23888);

(statearr_23898_23944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (27))){
var inst_23884 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23899_23945 = state_23894__$1;
(statearr_23899_23945[(2)] = inst_23884);

(statearr_23899_23945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (1))){
var inst_23811 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23811)){
var statearr_23900_23946 = state_23894__$1;
(statearr_23900_23946[(1)] = (2));

} else {
var statearr_23901_23947 = state_23894__$1;
(statearr_23901_23947[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (24))){
var inst_23886 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23902_23948 = state_23894__$1;
(statearr_23902_23948[(2)] = inst_23886);

(statearr_23902_23948[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (4))){
var inst_23892 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23894__$1,inst_23892);
} else {
if((state_val_23895 === (15))){
var inst_23890 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23903_23949 = state_23894__$1;
(statearr_23903_23949[(2)] = inst_23890);

(statearr_23903_23949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (21))){
var inst_23849 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23904_23950 = state_23894__$1;
(statearr_23904_23950[(2)] = inst_23849);

(statearr_23904_23950[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (31))){
var inst_23873 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23873)){
var statearr_23905_23951 = state_23894__$1;
(statearr_23905_23951[(1)] = (34));

} else {
var statearr_23906_23952 = state_23894__$1;
(statearr_23906_23952[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (32))){
var inst_23882 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23907_23953 = state_23894__$1;
(statearr_23907_23953[(2)] = inst_23882);

(statearr_23907_23953[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (33))){
var inst_23871 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23908_23954 = state_23894__$1;
(statearr_23908_23954[(2)] = inst_23871);

(statearr_23908_23954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (13))){
var inst_23832 = figwheel.client.heads_up.clear.call(null);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(16),inst_23832);
} else {
if((state_val_23895 === (22))){
var inst_23853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23854 = figwheel.client.heads_up.append_message.call(null,inst_23853);
var state_23894__$1 = state_23894;
var statearr_23909_23955 = state_23894__$1;
(statearr_23909_23955[(2)] = inst_23854);

(statearr_23909_23955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (36))){
var inst_23880 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23910_23956 = state_23894__$1;
(statearr_23910_23956[(2)] = inst_23880);

(statearr_23910_23956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (29))){
var inst_23864 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23911_23957 = state_23894__$1;
(statearr_23911_23957[(2)] = inst_23864);

(statearr_23911_23957[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (6))){
var inst_23813 = (state_23894[(7)]);
var state_23894__$1 = state_23894;
var statearr_23912_23958 = state_23894__$1;
(statearr_23912_23958[(2)] = inst_23813);

(statearr_23912_23958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (28))){
var inst_23860 = (state_23894[(2)]);
var inst_23861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23862 = figwheel.client.heads_up.display_warning.call(null,inst_23861);
var state_23894__$1 = (function (){var statearr_23913 = state_23894;
(statearr_23913[(8)] = inst_23860);

return statearr_23913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(29),inst_23862);
} else {
if((state_val_23895 === (25))){
var inst_23858 = figwheel.client.heads_up.clear.call(null);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(28),inst_23858);
} else {
if((state_val_23895 === (34))){
var inst_23875 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(37),inst_23875);
} else {
if((state_val_23895 === (17))){
var inst_23840 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23914_23959 = state_23894__$1;
(statearr_23914_23959[(2)] = inst_23840);

(statearr_23914_23959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (3))){
var inst_23830 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23830)){
var statearr_23915_23960 = state_23894__$1;
(statearr_23915_23960[(1)] = (13));

} else {
var statearr_23916_23961 = state_23894__$1;
(statearr_23916_23961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (12))){
var inst_23826 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23917_23962 = state_23894__$1;
(statearr_23917_23962[(2)] = inst_23826);

(statearr_23917_23962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (2))){
var inst_23813 = (state_23894[(7)]);
var inst_23813__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23894__$1 = (function (){var statearr_23918 = state_23894;
(statearr_23918[(7)] = inst_23813__$1);

return statearr_23918;
})();
if(cljs.core.truth_(inst_23813__$1)){
var statearr_23919_23963 = state_23894__$1;
(statearr_23919_23963[(1)] = (5));

} else {
var statearr_23920_23964 = state_23894__$1;
(statearr_23920_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (23))){
var inst_23856 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23856)){
var statearr_23921_23965 = state_23894__$1;
(statearr_23921_23965[(1)] = (25));

} else {
var statearr_23922_23966 = state_23894__$1;
(statearr_23922_23966[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (35))){
var state_23894__$1 = state_23894;
var statearr_23923_23967 = state_23894__$1;
(statearr_23923_23967[(2)] = null);

(statearr_23923_23967[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (19))){
var inst_23851 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23851)){
var statearr_23924_23968 = state_23894__$1;
(statearr_23924_23968[(1)] = (22));

} else {
var statearr_23925_23969 = state_23894__$1;
(statearr_23925_23969[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (11))){
var inst_23822 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23926_23970 = state_23894__$1;
(statearr_23926_23970[(2)] = inst_23822);

(statearr_23926_23970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (9))){
var inst_23824 = figwheel.client.heads_up.clear.call(null);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(12),inst_23824);
} else {
if((state_val_23895 === (5))){
var inst_23815 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23894__$1 = state_23894;
var statearr_23927_23971 = state_23894__$1;
(statearr_23927_23971[(2)] = inst_23815);

(statearr_23927_23971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (14))){
var inst_23842 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23842)){
var statearr_23928_23972 = state_23894__$1;
(statearr_23928_23972[(1)] = (18));

} else {
var statearr_23929_23973 = state_23894__$1;
(statearr_23929_23973[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (26))){
var inst_23866 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23894__$1 = state_23894;
if(cljs.core.truth_(inst_23866)){
var statearr_23930_23974 = state_23894__$1;
(statearr_23930_23974[(1)] = (30));

} else {
var statearr_23931_23975 = state_23894__$1;
(statearr_23931_23975[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (16))){
var inst_23834 = (state_23894[(2)]);
var inst_23835 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23836 = figwheel.client.format_messages.call(null,inst_23835);
var inst_23837 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23838 = figwheel.client.heads_up.display_error.call(null,inst_23836,inst_23837);
var state_23894__$1 = (function (){var statearr_23932 = state_23894;
(statearr_23932[(9)] = inst_23834);

return statearr_23932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(17),inst_23838);
} else {
if((state_val_23895 === (30))){
var inst_23868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23869 = figwheel.client.heads_up.display_warning.call(null,inst_23868);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(33),inst_23869);
} else {
if((state_val_23895 === (10))){
var inst_23828 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23933_23976 = state_23894__$1;
(statearr_23933_23976[(2)] = inst_23828);

(statearr_23933_23976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (18))){
var inst_23844 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23845 = figwheel.client.format_messages.call(null,inst_23844);
var inst_23846 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23847 = figwheel.client.heads_up.display_error.call(null,inst_23845,inst_23846);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(21),inst_23847);
} else {
if((state_val_23895 === (37))){
var inst_23877 = (state_23894[(2)]);
var state_23894__$1 = state_23894;
var statearr_23934_23977 = state_23894__$1;
(statearr_23934_23977[(2)] = inst_23877);

(statearr_23934_23977[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23895 === (8))){
var inst_23820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23894__$1 = state_23894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23894__$1,(11),inst_23820);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19359__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19294__auto__,c__19359__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____0 = (function (){
var statearr_23938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23938[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__);

(statearr_23938[(1)] = (1));

return statearr_23938;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____1 = (function (state_23894){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_23894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e23939){if((e23939 instanceof Object)){
var ex__19298__auto__ = e23939;
var statearr_23940_23978 = state_23894;
(statearr_23940_23978[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23979 = state_23894;
state_23894 = G__23979;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__ = function(state_23894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____1.call(this,state_23894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__,msg_hist,msg_names,msg))
})();
var state__19361__auto__ = (function (){var statearr_23941 = f__19360__auto__.call(null);
(statearr_23941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_23941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__,msg_hist,msg_names,msg))
);

return c__19359__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19359__auto___24042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___24042,ch){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___24042,ch){
return (function (state_24025){
var state_val_24026 = (state_24025[(1)]);
if((state_val_24026 === (1))){
var state_24025__$1 = state_24025;
var statearr_24027_24043 = state_24025__$1;
(statearr_24027_24043[(2)] = null);

(statearr_24027_24043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (2))){
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24025__$1,(4),ch);
} else {
if((state_val_24026 === (3))){
var inst_24023 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24025__$1,inst_24023);
} else {
if((state_val_24026 === (4))){
var inst_24013 = (state_24025[(7)]);
var inst_24013__$1 = (state_24025[(2)]);
var state_24025__$1 = (function (){var statearr_24028 = state_24025;
(statearr_24028[(7)] = inst_24013__$1);

return statearr_24028;
})();
if(cljs.core.truth_(inst_24013__$1)){
var statearr_24029_24044 = state_24025__$1;
(statearr_24029_24044[(1)] = (5));

} else {
var statearr_24030_24045 = state_24025__$1;
(statearr_24030_24045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (5))){
var inst_24013 = (state_24025[(7)]);
var inst_24015 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24013);
var state_24025__$1 = state_24025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24025__$1,(8),inst_24015);
} else {
if((state_val_24026 === (6))){
var state_24025__$1 = state_24025;
var statearr_24031_24046 = state_24025__$1;
(statearr_24031_24046[(2)] = null);

(statearr_24031_24046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (7))){
var inst_24021 = (state_24025[(2)]);
var state_24025__$1 = state_24025;
var statearr_24032_24047 = state_24025__$1;
(statearr_24032_24047[(2)] = inst_24021);

(statearr_24032_24047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24026 === (8))){
var inst_24017 = (state_24025[(2)]);
var state_24025__$1 = (function (){var statearr_24033 = state_24025;
(statearr_24033[(8)] = inst_24017);

return statearr_24033;
})();
var statearr_24034_24048 = state_24025__$1;
(statearr_24034_24048[(2)] = null);

(statearr_24034_24048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19359__auto___24042,ch))
;
return ((function (switch__19294__auto__,c__19359__auto___24042,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19295__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19295__auto____0 = (function (){
var statearr_24038 = [null,null,null,null,null,null,null,null,null];
(statearr_24038[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19295__auto__);

(statearr_24038[(1)] = (1));

return statearr_24038;
});
var figwheel$client$heads_up_plugin_$_state_machine__19295__auto____1 = (function (state_24025){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_24025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e24039){if((e24039 instanceof Object)){
var ex__19298__auto__ = e24039;
var statearr_24040_24049 = state_24025;
(statearr_24040_24049[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24050 = state_24025;
state_24025 = G__24050;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19295__auto__ = function(state_24025){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19295__auto____1.call(this,state_24025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19295__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19295__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___24042,ch))
})();
var state__19361__auto__ = (function (){var statearr_24041 = f__19360__auto__.call(null);
(statearr_24041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___24042);

return statearr_24041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___24042,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__){
return (function (state_24071){
var state_val_24072 = (state_24071[(1)]);
if((state_val_24072 === (1))){
var inst_24066 = cljs.core.async.timeout.call(null,(3000));
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24071__$1,(2),inst_24066);
} else {
if((state_val_24072 === (2))){
var inst_24068 = (state_24071[(2)]);
var inst_24069 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24071__$1 = (function (){var statearr_24073 = state_24071;
(statearr_24073[(7)] = inst_24068);

return statearr_24073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24071__$1,inst_24069);
} else {
return null;
}
}
});})(c__19359__auto__))
;
return ((function (switch__19294__auto__,c__19359__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____0 = (function (){
var statearr_24077 = [null,null,null,null,null,null,null,null];
(statearr_24077[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__);

(statearr_24077[(1)] = (1));

return statearr_24077;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____1 = (function (state_24071){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_24071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e24078){if((e24078 instanceof Object)){
var ex__19298__auto__ = e24078;
var statearr_24079_24081 = state_24071;
(statearr_24079_24081[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24082 = state_24071;
state_24071 = G__24082;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__ = function(state_24071){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____1.call(this,state_24071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19295__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__))
})();
var state__19361__auto__ = (function (){var statearr_24080 = f__19360__auto__.call(null);
(statearr_24080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_24080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__))
);

return c__19359__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24083){
var map__24090 = p__24083;
var map__24090__$1 = ((((!((map__24090 == null)))?((((map__24090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24090):map__24090);
var ed = map__24090__$1;
var formatted_exception = cljs.core.get.call(null,map__24090__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24090__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24090__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24092_24096 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24093_24097 = null;
var count__24094_24098 = (0);
var i__24095_24099 = (0);
while(true){
if((i__24095_24099 < count__24094_24098)){
var msg_24100 = cljs.core._nth.call(null,chunk__24093_24097,i__24095_24099);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24100);

var G__24101 = seq__24092_24096;
var G__24102 = chunk__24093_24097;
var G__24103 = count__24094_24098;
var G__24104 = (i__24095_24099 + (1));
seq__24092_24096 = G__24101;
chunk__24093_24097 = G__24102;
count__24094_24098 = G__24103;
i__24095_24099 = G__24104;
continue;
} else {
var temp__4425__auto___24105 = cljs.core.seq.call(null,seq__24092_24096);
if(temp__4425__auto___24105){
var seq__24092_24106__$1 = temp__4425__auto___24105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24092_24106__$1)){
var c__17082__auto___24107 = cljs.core.chunk_first.call(null,seq__24092_24106__$1);
var G__24108 = cljs.core.chunk_rest.call(null,seq__24092_24106__$1);
var G__24109 = c__17082__auto___24107;
var G__24110 = cljs.core.count.call(null,c__17082__auto___24107);
var G__24111 = (0);
seq__24092_24096 = G__24108;
chunk__24093_24097 = G__24109;
count__24094_24098 = G__24110;
i__24095_24099 = G__24111;
continue;
} else {
var msg_24112 = cljs.core.first.call(null,seq__24092_24106__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24112);

var G__24113 = cljs.core.next.call(null,seq__24092_24106__$1);
var G__24114 = null;
var G__24115 = (0);
var G__24116 = (0);
seq__24092_24096 = G__24113;
chunk__24093_24097 = G__24114;
count__24094_24098 = G__24115;
i__24095_24099 = G__24116;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24117){
var map__24120 = p__24117;
var map__24120__$1 = ((((!((map__24120 == null)))?((((map__24120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24120):map__24120);
var w = map__24120__$1;
var message = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16267__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16267__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16267__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24128 = cljs.core.seq.call(null,plugins);
var chunk__24129 = null;
var count__24130 = (0);
var i__24131 = (0);
while(true){
if((i__24131 < count__24130)){
var vec__24132 = cljs.core._nth.call(null,chunk__24129,i__24131);
var k = cljs.core.nth.call(null,vec__24132,(0),null);
var plugin = cljs.core.nth.call(null,vec__24132,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24134 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24128,chunk__24129,count__24130,i__24131,pl_24134,vec__24132,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24134.call(null,msg_hist);
});})(seq__24128,chunk__24129,count__24130,i__24131,pl_24134,vec__24132,k,plugin))
);
} else {
}

var G__24135 = seq__24128;
var G__24136 = chunk__24129;
var G__24137 = count__24130;
var G__24138 = (i__24131 + (1));
seq__24128 = G__24135;
chunk__24129 = G__24136;
count__24130 = G__24137;
i__24131 = G__24138;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24128);
if(temp__4425__auto__){
var seq__24128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24128__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24128__$1);
var G__24139 = cljs.core.chunk_rest.call(null,seq__24128__$1);
var G__24140 = c__17082__auto__;
var G__24141 = cljs.core.count.call(null,c__17082__auto__);
var G__24142 = (0);
seq__24128 = G__24139;
chunk__24129 = G__24140;
count__24130 = G__24141;
i__24131 = G__24142;
continue;
} else {
var vec__24133 = cljs.core.first.call(null,seq__24128__$1);
var k = cljs.core.nth.call(null,vec__24133,(0),null);
var plugin = cljs.core.nth.call(null,vec__24133,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24143 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24128,chunk__24129,count__24130,i__24131,pl_24143,vec__24133,k,plugin,seq__24128__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24143.call(null,msg_hist);
});})(seq__24128,chunk__24129,count__24130,i__24131,pl_24143,vec__24133,k,plugin,seq__24128__$1,temp__4425__auto__))
);
} else {
}

var G__24144 = cljs.core.next.call(null,seq__24128__$1);
var G__24145 = null;
var G__24146 = (0);
var G__24147 = (0);
seq__24128 = G__24144;
chunk__24129 = G__24145;
count__24130 = G__24146;
i__24131 = G__24147;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24148 = [];
var len__17337__auto___24151 = arguments.length;
var i__17338__auto___24152 = (0);
while(true){
if((i__17338__auto___24152 < len__17337__auto___24151)){
args24148.push((arguments[i__17338__auto___24152]));

var G__24153 = (i__17338__auto___24152 + (1));
i__17338__auto___24152 = G__24153;
continue;
} else {
}
break;
}

var G__24150 = args24148.length;
switch (G__24150) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24148.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17344__auto__ = [];
var len__17337__auto___24159 = arguments.length;
var i__17338__auto___24160 = (0);
while(true){
if((i__17338__auto___24160 < len__17337__auto___24159)){
args__17344__auto__.push((arguments[i__17338__auto___24160]));

var G__24161 = (i__17338__auto___24160 + (1));
i__17338__auto___24160 = G__24161;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((0) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17345__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24156){
var map__24157 = p__24156;
var map__24157__$1 = ((((!((map__24157 == null)))?((((map__24157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24157):map__24157);
var opts = map__24157__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24155){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24155));
});

//# sourceMappingURL=client.js.map?rel=1445391155424