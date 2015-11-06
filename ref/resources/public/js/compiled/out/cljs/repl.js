// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24547_24561 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24548_24562 = null;
var count__24549_24563 = (0);
var i__24550_24564 = (0);
while(true){
if((i__24550_24564 < count__24549_24563)){
var f_24565 = cljs.core._nth.call(null,chunk__24548_24562,i__24550_24564);
cljs.core.println.call(null,"  ",f_24565);

var G__24566 = seq__24547_24561;
var G__24567 = chunk__24548_24562;
var G__24568 = count__24549_24563;
var G__24569 = (i__24550_24564 + (1));
seq__24547_24561 = G__24566;
chunk__24548_24562 = G__24567;
count__24549_24563 = G__24568;
i__24550_24564 = G__24569;
continue;
} else {
var temp__4425__auto___24570 = cljs.core.seq.call(null,seq__24547_24561);
if(temp__4425__auto___24570){
var seq__24547_24571__$1 = temp__4425__auto___24570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24547_24571__$1)){
var c__17082__auto___24572 = cljs.core.chunk_first.call(null,seq__24547_24571__$1);
var G__24573 = cljs.core.chunk_rest.call(null,seq__24547_24571__$1);
var G__24574 = c__17082__auto___24572;
var G__24575 = cljs.core.count.call(null,c__17082__auto___24572);
var G__24576 = (0);
seq__24547_24561 = G__24573;
chunk__24548_24562 = G__24574;
count__24549_24563 = G__24575;
i__24550_24564 = G__24576;
continue;
} else {
var f_24577 = cljs.core.first.call(null,seq__24547_24571__$1);
cljs.core.println.call(null,"  ",f_24577);

var G__24578 = cljs.core.next.call(null,seq__24547_24571__$1);
var G__24579 = null;
var G__24580 = (0);
var G__24581 = (0);
seq__24547_24561 = G__24578;
chunk__24548_24562 = G__24579;
count__24549_24563 = G__24580;
i__24550_24564 = G__24581;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24582 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24582);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24582)))?cljs.core.second.call(null,arglists_24582):arglists_24582));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24552 = null;
var count__24553 = (0);
var i__24554 = (0);
while(true){
if((i__24554 < count__24553)){
var vec__24555 = cljs.core._nth.call(null,chunk__24552,i__24554);
var name = cljs.core.nth.call(null,vec__24555,(0),null);
var map__24556 = cljs.core.nth.call(null,vec__24555,(1),null);
var map__24556__$1 = ((((!((map__24556 == null)))?((((map__24556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24556):map__24556);
var doc = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24583 = seq__24551;
var G__24584 = chunk__24552;
var G__24585 = count__24553;
var G__24586 = (i__24554 + (1));
seq__24551 = G__24583;
chunk__24552 = G__24584;
count__24553 = G__24585;
i__24554 = G__24586;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24551);
if(temp__4425__auto__){
var seq__24551__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24551__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24551__$1);
var G__24587 = cljs.core.chunk_rest.call(null,seq__24551__$1);
var G__24588 = c__17082__auto__;
var G__24589 = cljs.core.count.call(null,c__17082__auto__);
var G__24590 = (0);
seq__24551 = G__24587;
chunk__24552 = G__24588;
count__24553 = G__24589;
i__24554 = G__24590;
continue;
} else {
var vec__24558 = cljs.core.first.call(null,seq__24551__$1);
var name = cljs.core.nth.call(null,vec__24558,(0),null);
var map__24559 = cljs.core.nth.call(null,vec__24558,(1),null);
var map__24559__$1 = ((((!((map__24559 == null)))?((((map__24559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24559):map__24559);
var doc = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24591 = cljs.core.next.call(null,seq__24551__$1);
var G__24592 = null;
var G__24593 = (0);
var G__24594 = (0);
seq__24551 = G__24591;
chunk__24552 = G__24592;
count__24553 = G__24593;
i__24554 = G__24594;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1445391155946