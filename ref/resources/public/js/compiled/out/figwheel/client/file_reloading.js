// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16279__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16279__auto__){
return or__16279__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16279__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24599_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24599_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24604 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24605 = null;
var count__24606 = (0);
var i__24607 = (0);
while(true){
if((i__24607 < count__24606)){
var n = cljs.core._nth.call(null,chunk__24605,i__24607);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24608 = seq__24604;
var G__24609 = chunk__24605;
var G__24610 = count__24606;
var G__24611 = (i__24607 + (1));
seq__24604 = G__24608;
chunk__24605 = G__24609;
count__24606 = G__24610;
i__24607 = G__24611;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24604);
if(temp__4425__auto__){
var seq__24604__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24604__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24604__$1);
var G__24612 = cljs.core.chunk_rest.call(null,seq__24604__$1);
var G__24613 = c__17082__auto__;
var G__24614 = cljs.core.count.call(null,c__17082__auto__);
var G__24615 = (0);
seq__24604 = G__24612;
chunk__24605 = G__24613;
count__24606 = G__24614;
i__24607 = G__24615;
continue;
} else {
var n = cljs.core.first.call(null,seq__24604__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24616 = cljs.core.next.call(null,seq__24604__$1);
var G__24617 = null;
var G__24618 = (0);
var G__24619 = (0);
seq__24604 = G__24616;
chunk__24605 = G__24617;
count__24606 = G__24618;
i__24607 = G__24619;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24658_24665 = cljs.core.seq.call(null,deps);
var chunk__24659_24666 = null;
var count__24660_24667 = (0);
var i__24661_24668 = (0);
while(true){
if((i__24661_24668 < count__24660_24667)){
var dep_24669 = cljs.core._nth.call(null,chunk__24659_24666,i__24661_24668);
topo_sort_helper_STAR_.call(null,dep_24669,(depth + (1)),state);

var G__24670 = seq__24658_24665;
var G__24671 = chunk__24659_24666;
var G__24672 = count__24660_24667;
var G__24673 = (i__24661_24668 + (1));
seq__24658_24665 = G__24670;
chunk__24659_24666 = G__24671;
count__24660_24667 = G__24672;
i__24661_24668 = G__24673;
continue;
} else {
var temp__4425__auto___24674 = cljs.core.seq.call(null,seq__24658_24665);
if(temp__4425__auto___24674){
var seq__24658_24675__$1 = temp__4425__auto___24674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24658_24675__$1)){
var c__17082__auto___24676 = cljs.core.chunk_first.call(null,seq__24658_24675__$1);
var G__24677 = cljs.core.chunk_rest.call(null,seq__24658_24675__$1);
var G__24678 = c__17082__auto___24676;
var G__24679 = cljs.core.count.call(null,c__17082__auto___24676);
var G__24680 = (0);
seq__24658_24665 = G__24677;
chunk__24659_24666 = G__24678;
count__24660_24667 = G__24679;
i__24661_24668 = G__24680;
continue;
} else {
var dep_24681 = cljs.core.first.call(null,seq__24658_24675__$1);
topo_sort_helper_STAR_.call(null,dep_24681,(depth + (1)),state);

var G__24682 = cljs.core.next.call(null,seq__24658_24675__$1);
var G__24683 = null;
var G__24684 = (0);
var G__24685 = (0);
seq__24658_24665 = G__24682;
chunk__24659_24666 = G__24683;
count__24660_24667 = G__24684;
i__24661_24668 = G__24685;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24662){
var vec__24664 = p__24662;
var x = cljs.core.nth.call(null,vec__24664,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24664,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24664,x,xs,get_deps__$1){
return (function (p1__24620_SHARP_){
return clojure.set.difference.call(null,p1__24620_SHARP_,x);
});})(vec__24664,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24698 = cljs.core.seq.call(null,provides);
var chunk__24699 = null;
var count__24700 = (0);
var i__24701 = (0);
while(true){
if((i__24701 < count__24700)){
var prov = cljs.core._nth.call(null,chunk__24699,i__24701);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24702_24710 = cljs.core.seq.call(null,requires);
var chunk__24703_24711 = null;
var count__24704_24712 = (0);
var i__24705_24713 = (0);
while(true){
if((i__24705_24713 < count__24704_24712)){
var req_24714 = cljs.core._nth.call(null,chunk__24703_24711,i__24705_24713);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24714,prov);

var G__24715 = seq__24702_24710;
var G__24716 = chunk__24703_24711;
var G__24717 = count__24704_24712;
var G__24718 = (i__24705_24713 + (1));
seq__24702_24710 = G__24715;
chunk__24703_24711 = G__24716;
count__24704_24712 = G__24717;
i__24705_24713 = G__24718;
continue;
} else {
var temp__4425__auto___24719 = cljs.core.seq.call(null,seq__24702_24710);
if(temp__4425__auto___24719){
var seq__24702_24720__$1 = temp__4425__auto___24719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24702_24720__$1)){
var c__17082__auto___24721 = cljs.core.chunk_first.call(null,seq__24702_24720__$1);
var G__24722 = cljs.core.chunk_rest.call(null,seq__24702_24720__$1);
var G__24723 = c__17082__auto___24721;
var G__24724 = cljs.core.count.call(null,c__17082__auto___24721);
var G__24725 = (0);
seq__24702_24710 = G__24722;
chunk__24703_24711 = G__24723;
count__24704_24712 = G__24724;
i__24705_24713 = G__24725;
continue;
} else {
var req_24726 = cljs.core.first.call(null,seq__24702_24720__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24726,prov);

var G__24727 = cljs.core.next.call(null,seq__24702_24720__$1);
var G__24728 = null;
var G__24729 = (0);
var G__24730 = (0);
seq__24702_24710 = G__24727;
chunk__24703_24711 = G__24728;
count__24704_24712 = G__24729;
i__24705_24713 = G__24730;
continue;
}
} else {
}
}
break;
}

var G__24731 = seq__24698;
var G__24732 = chunk__24699;
var G__24733 = count__24700;
var G__24734 = (i__24701 + (1));
seq__24698 = G__24731;
chunk__24699 = G__24732;
count__24700 = G__24733;
i__24701 = G__24734;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24698);
if(temp__4425__auto__){
var seq__24698__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24698__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24698__$1);
var G__24735 = cljs.core.chunk_rest.call(null,seq__24698__$1);
var G__24736 = c__17082__auto__;
var G__24737 = cljs.core.count.call(null,c__17082__auto__);
var G__24738 = (0);
seq__24698 = G__24735;
chunk__24699 = G__24736;
count__24700 = G__24737;
i__24701 = G__24738;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24698__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24706_24739 = cljs.core.seq.call(null,requires);
var chunk__24707_24740 = null;
var count__24708_24741 = (0);
var i__24709_24742 = (0);
while(true){
if((i__24709_24742 < count__24708_24741)){
var req_24743 = cljs.core._nth.call(null,chunk__24707_24740,i__24709_24742);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24743,prov);

var G__24744 = seq__24706_24739;
var G__24745 = chunk__24707_24740;
var G__24746 = count__24708_24741;
var G__24747 = (i__24709_24742 + (1));
seq__24706_24739 = G__24744;
chunk__24707_24740 = G__24745;
count__24708_24741 = G__24746;
i__24709_24742 = G__24747;
continue;
} else {
var temp__4425__auto___24748__$1 = cljs.core.seq.call(null,seq__24706_24739);
if(temp__4425__auto___24748__$1){
var seq__24706_24749__$1 = temp__4425__auto___24748__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24706_24749__$1)){
var c__17082__auto___24750 = cljs.core.chunk_first.call(null,seq__24706_24749__$1);
var G__24751 = cljs.core.chunk_rest.call(null,seq__24706_24749__$1);
var G__24752 = c__17082__auto___24750;
var G__24753 = cljs.core.count.call(null,c__17082__auto___24750);
var G__24754 = (0);
seq__24706_24739 = G__24751;
chunk__24707_24740 = G__24752;
count__24708_24741 = G__24753;
i__24709_24742 = G__24754;
continue;
} else {
var req_24755 = cljs.core.first.call(null,seq__24706_24749__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24755,prov);

var G__24756 = cljs.core.next.call(null,seq__24706_24749__$1);
var G__24757 = null;
var G__24758 = (0);
var G__24759 = (0);
seq__24706_24739 = G__24756;
chunk__24707_24740 = G__24757;
count__24708_24741 = G__24758;
i__24709_24742 = G__24759;
continue;
}
} else {
}
}
break;
}

var G__24760 = cljs.core.next.call(null,seq__24698__$1);
var G__24761 = null;
var G__24762 = (0);
var G__24763 = (0);
seq__24698 = G__24760;
chunk__24699 = G__24761;
count__24700 = G__24762;
i__24701 = G__24763;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24768_24772 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24769_24773 = null;
var count__24770_24774 = (0);
var i__24771_24775 = (0);
while(true){
if((i__24771_24775 < count__24770_24774)){
var ns_24776 = cljs.core._nth.call(null,chunk__24769_24773,i__24771_24775);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24776);

var G__24777 = seq__24768_24772;
var G__24778 = chunk__24769_24773;
var G__24779 = count__24770_24774;
var G__24780 = (i__24771_24775 + (1));
seq__24768_24772 = G__24777;
chunk__24769_24773 = G__24778;
count__24770_24774 = G__24779;
i__24771_24775 = G__24780;
continue;
} else {
var temp__4425__auto___24781 = cljs.core.seq.call(null,seq__24768_24772);
if(temp__4425__auto___24781){
var seq__24768_24782__$1 = temp__4425__auto___24781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24768_24782__$1)){
var c__17082__auto___24783 = cljs.core.chunk_first.call(null,seq__24768_24782__$1);
var G__24784 = cljs.core.chunk_rest.call(null,seq__24768_24782__$1);
var G__24785 = c__17082__auto___24783;
var G__24786 = cljs.core.count.call(null,c__17082__auto___24783);
var G__24787 = (0);
seq__24768_24772 = G__24784;
chunk__24769_24773 = G__24785;
count__24770_24774 = G__24786;
i__24771_24775 = G__24787;
continue;
} else {
var ns_24788 = cljs.core.first.call(null,seq__24768_24782__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24788);

var G__24789 = cljs.core.next.call(null,seq__24768_24782__$1);
var G__24790 = null;
var G__24791 = (0);
var G__24792 = (0);
seq__24768_24772 = G__24789;
chunk__24769_24773 = G__24790;
count__24770_24774 = G__24791;
i__24771_24775 = G__24792;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16279__auto__ = goog.require__;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24793__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24794__i = 0, G__24794__a = new Array(arguments.length -  0);
while (G__24794__i < G__24794__a.length) {G__24794__a[G__24794__i] = arguments[G__24794__i + 0]; ++G__24794__i;}
  args = new cljs.core.IndexedSeq(G__24794__a,0);
} 
return G__24793__delegate.call(this,args);};
G__24793.cljs$lang$maxFixedArity = 0;
G__24793.cljs$lang$applyTo = (function (arglist__24795){
var args = cljs.core.seq(arglist__24795);
return G__24793__delegate(args);
});
G__24793.cljs$core$IFn$_invoke$arity$variadic = G__24793__delegate;
return G__24793;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24797 = cljs.core._EQ_;
var expr__24798 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24797.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24798))){
var path_parts = ((function (pred__24797,expr__24798){
return (function (p1__24796_SHARP_){
return clojure.string.split.call(null,p1__24796_SHARP_,/[\/\\]/);
});})(pred__24797,expr__24798))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24797,expr__24798){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e24800){if((e24800 instanceof Error)){
var e = e24800;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24800;

}
}})());
});
;})(path_parts,sep,root,pred__24797,expr__24798))
} else {
if(cljs.core.truth_(pred__24797.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24798))){
return ((function (pred__24797,expr__24798){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24797,expr__24798){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24797,expr__24798))
);

return deferred.addErrback(((function (deferred,pred__24797,expr__24798){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24797,expr__24798))
);
});
;})(pred__24797,expr__24798))
} else {
return ((function (pred__24797,expr__24798){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24797,expr__24798))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24801,callback){
var map__24804 = p__24801;
var map__24804__$1 = ((((!((map__24804 == null)))?((((map__24804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24804):map__24804);
var file_msg = map__24804__$1;
var request_url = cljs.core.get.call(null,map__24804__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24804,map__24804__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24804,map__24804__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (7))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24830_24850 = state_24828__$1;
(statearr_24830_24850[(2)] = inst_24824);

(statearr_24830_24850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (1))){
var state_24828__$1 = state_24828;
var statearr_24831_24851 = state_24828__$1;
(statearr_24831_24851[(2)] = null);

(statearr_24831_24851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (4))){
var inst_24808 = (state_24828[(7)]);
var inst_24808__$1 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24832 = state_24828;
(statearr_24832[(7)] = inst_24808__$1);

return statearr_24832;
})();
if(cljs.core.truth_(inst_24808__$1)){
var statearr_24833_24852 = state_24828__$1;
(statearr_24833_24852[(1)] = (5));

} else {
var statearr_24834_24853 = state_24828__$1;
(statearr_24834_24853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var state_24828__$1 = state_24828;
var statearr_24835_24854 = state_24828__$1;
(statearr_24835_24854[(2)] = null);

(statearr_24835_24854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (2))){
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24829 === (11))){
var inst_24820 = (state_24828[(2)]);
var state_24828__$1 = (function (){var statearr_24836 = state_24828;
(statearr_24836[(8)] = inst_24820);

return statearr_24836;
})();
var statearr_24837_24855 = state_24828__$1;
(statearr_24837_24855[(2)] = null);

(statearr_24837_24855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (9))){
var inst_24812 = (state_24828[(9)]);
var inst_24814 = (state_24828[(10)]);
var inst_24816 = inst_24814.call(null,inst_24812);
var state_24828__$1 = state_24828;
var statearr_24838_24856 = state_24828__$1;
(statearr_24838_24856[(2)] = inst_24816);

(statearr_24838_24856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (5))){
var inst_24808 = (state_24828[(7)]);
var inst_24810 = figwheel.client.file_reloading.blocking_load.call(null,inst_24808);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(8),inst_24810);
} else {
if((state_val_24829 === (10))){
var inst_24812 = (state_24828[(9)]);
var inst_24818 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24812);
var state_24828__$1 = state_24828;
var statearr_24839_24857 = state_24828__$1;
(statearr_24839_24857[(2)] = inst_24818);

(statearr_24839_24857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (8))){
var inst_24814 = (state_24828[(10)]);
var inst_24808 = (state_24828[(7)]);
var inst_24812 = (state_24828[(2)]);
var inst_24813 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24814__$1 = cljs.core.get.call(null,inst_24813,inst_24808);
var state_24828__$1 = (function (){var statearr_24840 = state_24828;
(statearr_24840[(9)] = inst_24812);

(statearr_24840[(10)] = inst_24814__$1);

return statearr_24840;
})();
if(cljs.core.truth_(inst_24814__$1)){
var statearr_24841_24858 = state_24828__$1;
(statearr_24841_24858[(1)] = (9));

} else {
var statearr_24842_24859 = state_24828__$1;
(statearr_24842_24859[(1)] = (10));

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
});})(c__19359__auto__))
;
return ((function (switch__19294__auto__,c__19359__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19295__auto__ = null;
var figwheel$client$file_reloading$state_machine__19295__auto____0 = (function (){
var statearr_24846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24846[(0)] = figwheel$client$file_reloading$state_machine__19295__auto__);

(statearr_24846[(1)] = (1));

return statearr_24846;
});
var figwheel$client$file_reloading$state_machine__19295__auto____1 = (function (state_24828){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object)){
var ex__19298__auto__ = e24847;
var statearr_24848_24860 = state_24828;
(statearr_24848_24860[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24861 = state_24828;
state_24828 = G__24861;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19295__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19295__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19295__auto____0;
figwheel$client$file_reloading$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19295__auto____1;
return figwheel$client$file_reloading$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__))
})();
var state__19361__auto__ = (function (){var statearr_24849 = f__19360__auto__.call(null);
(statearr_24849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_24849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__))
);

return c__19359__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24862,callback){
var map__24865 = p__24862;
var map__24865__$1 = ((((!((map__24865 == null)))?((((map__24865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24865):map__24865);
var file_msg = map__24865__$1;
var namespace = cljs.core.get.call(null,map__24865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24865,map__24865__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24865,map__24865__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24867){
var map__24870 = p__24867;
var map__24870__$1 = ((((!((map__24870 == null)))?((((map__24870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24870):map__24870);
var file_msg = map__24870__$1;
var namespace = cljs.core.get.call(null,map__24870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16267__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16267__auto__){
var or__16279__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
var or__16279__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto____$1)){
return or__16279__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16267__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24872,callback){
var map__24875 = p__24872;
var map__24875__$1 = ((((!((map__24875 == null)))?((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24875):map__24875);
var file_msg = map__24875__$1;
var request_url = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19359__auto___24963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___24963,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___24963,out){
return (function (state_24945){
var state_val_24946 = (state_24945[(1)]);
if((state_val_24946 === (1))){
var inst_24923 = cljs.core.nth.call(null,files,(0),null);
var inst_24924 = cljs.core.nthnext.call(null,files,(1));
var inst_24925 = files;
var state_24945__$1 = (function (){var statearr_24947 = state_24945;
(statearr_24947[(7)] = inst_24923);

(statearr_24947[(8)] = inst_24924);

(statearr_24947[(9)] = inst_24925);

return statearr_24947;
})();
var statearr_24948_24964 = state_24945__$1;
(statearr_24948_24964[(2)] = null);

(statearr_24948_24964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (2))){
var inst_24928 = (state_24945[(10)]);
var inst_24925 = (state_24945[(9)]);
var inst_24928__$1 = cljs.core.nth.call(null,inst_24925,(0),null);
var inst_24929 = cljs.core.nthnext.call(null,inst_24925,(1));
var inst_24930 = (inst_24928__$1 == null);
var inst_24931 = cljs.core.not.call(null,inst_24930);
var state_24945__$1 = (function (){var statearr_24949 = state_24945;
(statearr_24949[(11)] = inst_24929);

(statearr_24949[(10)] = inst_24928__$1);

return statearr_24949;
})();
if(inst_24931){
var statearr_24950_24965 = state_24945__$1;
(statearr_24950_24965[(1)] = (4));

} else {
var statearr_24951_24966 = state_24945__$1;
(statearr_24951_24966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (3))){
var inst_24943 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24945__$1,inst_24943);
} else {
if((state_val_24946 === (4))){
var inst_24928 = (state_24945[(10)]);
var inst_24933 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24928);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24945__$1,(7),inst_24933);
} else {
if((state_val_24946 === (5))){
var inst_24939 = cljs.core.async.close_BANG_.call(null,out);
var state_24945__$1 = state_24945;
var statearr_24952_24967 = state_24945__$1;
(statearr_24952_24967[(2)] = inst_24939);

(statearr_24952_24967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (6))){
var inst_24941 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
var statearr_24953_24968 = state_24945__$1;
(statearr_24953_24968[(2)] = inst_24941);

(statearr_24953_24968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24946 === (7))){
var inst_24929 = (state_24945[(11)]);
var inst_24935 = (state_24945[(2)]);
var inst_24936 = cljs.core.async.put_BANG_.call(null,out,inst_24935);
var inst_24925 = inst_24929;
var state_24945__$1 = (function (){var statearr_24954 = state_24945;
(statearr_24954[(12)] = inst_24936);

(statearr_24954[(9)] = inst_24925);

return statearr_24954;
})();
var statearr_24955_24969 = state_24945__$1;
(statearr_24955_24969[(2)] = null);

(statearr_24955_24969[(1)] = (2));


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
});})(c__19359__auto___24963,out))
;
return ((function (switch__19294__auto__,c__19359__auto___24963,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____0 = (function (){
var statearr_24959 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24959[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__);

(statearr_24959[(1)] = (1));

return statearr_24959;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____1 = (function (state_24945){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_24945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e24960){if((e24960 instanceof Object)){
var ex__19298__auto__ = e24960;
var statearr_24961_24970 = state_24945;
(statearr_24961_24970[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24971 = state_24945;
state_24945 = G__24971;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__ = function(state_24945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____1.call(this,state_24945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___24963,out))
})();
var state__19361__auto__ = (function (){var statearr_24962 = f__19360__auto__.call(null);
(statearr_24962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___24963);

return statearr_24962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___24963,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24972,opts){
var map__24976 = p__24972;
var map__24976__$1 = ((((!((map__24976 == null)))?((((map__24976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24976):map__24976);
var eval_body__$1 = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16267__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16267__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16267__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24978){var e = e24978;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24979_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24979_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24984){
var vec__24985 = p__24984;
var k = cljs.core.nth.call(null,vec__24985,(0),null);
var v = cljs.core.nth.call(null,vec__24985,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24986){
var vec__24987 = p__24986;
var k = cljs.core.nth.call(null,vec__24987,(0),null);
var v = cljs.core.nth.call(null,vec__24987,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24991,p__24992){
var map__25239 = p__24991;
var map__25239__$1 = ((((!((map__25239 == null)))?((((map__25239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25239):map__25239);
var opts = map__25239__$1;
var before_jsload = cljs.core.get.call(null,map__25239__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25239__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25239__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25240 = p__24992;
var map__25240__$1 = ((((!((map__25240 == null)))?((((map__25240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25240):map__25240);
var msg = map__25240__$1;
var files = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25240__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25393){
var state_val_25394 = (state_25393[(1)]);
if((state_val_25394 === (7))){
var inst_25257 = (state_25393[(7)]);
var inst_25256 = (state_25393[(8)]);
var inst_25255 = (state_25393[(9)]);
var inst_25254 = (state_25393[(10)]);
var inst_25262 = cljs.core._nth.call(null,inst_25255,inst_25257);
var inst_25263 = figwheel.client.file_reloading.eval_body.call(null,inst_25262,opts);
var inst_25264 = (inst_25257 + (1));
var tmp25395 = inst_25256;
var tmp25396 = inst_25255;
var tmp25397 = inst_25254;
var inst_25254__$1 = tmp25397;
var inst_25255__$1 = tmp25396;
var inst_25256__$1 = tmp25395;
var inst_25257__$1 = inst_25264;
var state_25393__$1 = (function (){var statearr_25398 = state_25393;
(statearr_25398[(7)] = inst_25257__$1);

(statearr_25398[(8)] = inst_25256__$1);

(statearr_25398[(9)] = inst_25255__$1);

(statearr_25398[(11)] = inst_25263);

(statearr_25398[(10)] = inst_25254__$1);

return statearr_25398;
})();
var statearr_25399_25485 = state_25393__$1;
(statearr_25399_25485[(2)] = null);

(statearr_25399_25485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (20))){
var inst_25297 = (state_25393[(12)]);
var inst_25305 = figwheel.client.file_reloading.sort_files.call(null,inst_25297);
var state_25393__$1 = state_25393;
var statearr_25400_25486 = state_25393__$1;
(statearr_25400_25486[(2)] = inst_25305);

(statearr_25400_25486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (27))){
var state_25393__$1 = state_25393;
var statearr_25401_25487 = state_25393__$1;
(statearr_25401_25487[(2)] = null);

(statearr_25401_25487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (1))){
var inst_25246 = (state_25393[(13)]);
var inst_25243 = before_jsload.call(null,files);
var inst_25244 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25245 = (function (){return ((function (inst_25246,inst_25243,inst_25244,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24988_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24988_SHARP_);
});
;})(inst_25246,inst_25243,inst_25244,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25246__$1 = cljs.core.filter.call(null,inst_25245,files);
var inst_25247 = cljs.core.not_empty.call(null,inst_25246__$1);
var state_25393__$1 = (function (){var statearr_25402 = state_25393;
(statearr_25402[(14)] = inst_25243);

(statearr_25402[(15)] = inst_25244);

(statearr_25402[(13)] = inst_25246__$1);

return statearr_25402;
})();
if(cljs.core.truth_(inst_25247)){
var statearr_25403_25488 = state_25393__$1;
(statearr_25403_25488[(1)] = (2));

} else {
var statearr_25404_25489 = state_25393__$1;
(statearr_25404_25489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (24))){
var state_25393__$1 = state_25393;
var statearr_25405_25490 = state_25393__$1;
(statearr_25405_25490[(2)] = null);

(statearr_25405_25490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (39))){
var inst_25347 = (state_25393[(16)]);
var state_25393__$1 = state_25393;
var statearr_25406_25491 = state_25393__$1;
(statearr_25406_25491[(2)] = inst_25347);

(statearr_25406_25491[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (46))){
var inst_25388 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25407_25492 = state_25393__$1;
(statearr_25407_25492[(2)] = inst_25388);

(statearr_25407_25492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (4))){
var inst_25291 = (state_25393[(2)]);
var inst_25292 = cljs.core.List.EMPTY;
var inst_25293 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25292);
var inst_25294 = (function (){return ((function (inst_25291,inst_25292,inst_25293,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24989_SHARP_){
var and__16267__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24989_SHARP_);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24989_SHARP_));
} else {
return and__16267__auto__;
}
});
;})(inst_25291,inst_25292,inst_25293,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25295 = cljs.core.filter.call(null,inst_25294,files);
var inst_25296 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25297 = cljs.core.concat.call(null,inst_25295,inst_25296);
var state_25393__$1 = (function (){var statearr_25408 = state_25393;
(statearr_25408[(12)] = inst_25297);

(statearr_25408[(17)] = inst_25291);

(statearr_25408[(18)] = inst_25293);

return statearr_25408;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25409_25493 = state_25393__$1;
(statearr_25409_25493[(1)] = (16));

} else {
var statearr_25410_25494 = state_25393__$1;
(statearr_25410_25494[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (15))){
var inst_25281 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25411_25495 = state_25393__$1;
(statearr_25411_25495[(2)] = inst_25281);

(statearr_25411_25495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (21))){
var inst_25307 = (state_25393[(19)]);
var inst_25307__$1 = (state_25393[(2)]);
var inst_25308 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25307__$1);
var state_25393__$1 = (function (){var statearr_25412 = state_25393;
(statearr_25412[(19)] = inst_25307__$1);

return statearr_25412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25393__$1,(22),inst_25308);
} else {
if((state_val_25394 === (31))){
var inst_25391 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25393__$1,inst_25391);
} else {
if((state_val_25394 === (32))){
var inst_25347 = (state_25393[(16)]);
var inst_25352 = inst_25347.cljs$lang$protocol_mask$partition0$;
var inst_25353 = (inst_25352 & (64));
var inst_25354 = inst_25347.cljs$core$ISeq$;
var inst_25355 = (inst_25353) || (inst_25354);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25355)){
var statearr_25413_25496 = state_25393__$1;
(statearr_25413_25496[(1)] = (35));

} else {
var statearr_25414_25497 = state_25393__$1;
(statearr_25414_25497[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (40))){
var inst_25368 = (state_25393[(20)]);
var inst_25367 = (state_25393[(2)]);
var inst_25368__$1 = cljs.core.get.call(null,inst_25367,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25369 = cljs.core.get.call(null,inst_25367,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25370 = cljs.core.not_empty.call(null,inst_25368__$1);
var state_25393__$1 = (function (){var statearr_25415 = state_25393;
(statearr_25415[(21)] = inst_25369);

(statearr_25415[(20)] = inst_25368__$1);

return statearr_25415;
})();
if(cljs.core.truth_(inst_25370)){
var statearr_25416_25498 = state_25393__$1;
(statearr_25416_25498[(1)] = (41));

} else {
var statearr_25417_25499 = state_25393__$1;
(statearr_25417_25499[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (33))){
var state_25393__$1 = state_25393;
var statearr_25418_25500 = state_25393__$1;
(statearr_25418_25500[(2)] = false);

(statearr_25418_25500[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (13))){
var inst_25267 = (state_25393[(22)]);
var inst_25271 = cljs.core.chunk_first.call(null,inst_25267);
var inst_25272 = cljs.core.chunk_rest.call(null,inst_25267);
var inst_25273 = cljs.core.count.call(null,inst_25271);
var inst_25254 = inst_25272;
var inst_25255 = inst_25271;
var inst_25256 = inst_25273;
var inst_25257 = (0);
var state_25393__$1 = (function (){var statearr_25419 = state_25393;
(statearr_25419[(7)] = inst_25257);

(statearr_25419[(8)] = inst_25256);

(statearr_25419[(9)] = inst_25255);

(statearr_25419[(10)] = inst_25254);

return statearr_25419;
})();
var statearr_25420_25501 = state_25393__$1;
(statearr_25420_25501[(2)] = null);

(statearr_25420_25501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (22))){
var inst_25307 = (state_25393[(19)]);
var inst_25310 = (state_25393[(23)]);
var inst_25315 = (state_25393[(24)]);
var inst_25311 = (state_25393[(25)]);
var inst_25310__$1 = (state_25393[(2)]);
var inst_25311__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25310__$1);
var inst_25312 = (function (){var all_files = inst_25307;
var res_SINGLEQUOTE_ = inst_25310__$1;
var res = inst_25311__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25307,inst_25310,inst_25315,inst_25311,inst_25310__$1,inst_25311__$1,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24990_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24990_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25307,inst_25310,inst_25315,inst_25311,inst_25310__$1,inst_25311__$1,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25313 = cljs.core.filter.call(null,inst_25312,inst_25310__$1);
var inst_25314 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25315__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25314);
var inst_25316 = cljs.core.not_empty.call(null,inst_25315__$1);
var state_25393__$1 = (function (){var statearr_25421 = state_25393;
(statearr_25421[(23)] = inst_25310__$1);

(statearr_25421[(24)] = inst_25315__$1);

(statearr_25421[(25)] = inst_25311__$1);

(statearr_25421[(26)] = inst_25313);

return statearr_25421;
})();
if(cljs.core.truth_(inst_25316)){
var statearr_25422_25502 = state_25393__$1;
(statearr_25422_25502[(1)] = (23));

} else {
var statearr_25423_25503 = state_25393__$1;
(statearr_25423_25503[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (36))){
var state_25393__$1 = state_25393;
var statearr_25424_25504 = state_25393__$1;
(statearr_25424_25504[(2)] = false);

(statearr_25424_25504[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (41))){
var inst_25368 = (state_25393[(20)]);
var inst_25372 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25373 = cljs.core.map.call(null,inst_25372,inst_25368);
var inst_25374 = cljs.core.pr_str.call(null,inst_25373);
var inst_25375 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25374)].join('');
var inst_25376 = figwheel.client.utils.log.call(null,inst_25375);
var state_25393__$1 = state_25393;
var statearr_25425_25505 = state_25393__$1;
(statearr_25425_25505[(2)] = inst_25376);

(statearr_25425_25505[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (43))){
var inst_25369 = (state_25393[(21)]);
var inst_25379 = (state_25393[(2)]);
var inst_25380 = cljs.core.not_empty.call(null,inst_25369);
var state_25393__$1 = (function (){var statearr_25426 = state_25393;
(statearr_25426[(27)] = inst_25379);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25380)){
var statearr_25427_25506 = state_25393__$1;
(statearr_25427_25506[(1)] = (44));

} else {
var statearr_25428_25507 = state_25393__$1;
(statearr_25428_25507[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (29))){
var inst_25307 = (state_25393[(19)]);
var inst_25310 = (state_25393[(23)]);
var inst_25315 = (state_25393[(24)]);
var inst_25347 = (state_25393[(16)]);
var inst_25311 = (state_25393[(25)]);
var inst_25313 = (state_25393[(26)]);
var inst_25343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25346 = (function (){var all_files = inst_25307;
var res_SINGLEQUOTE_ = inst_25310;
var res = inst_25311;
var files_not_loaded = inst_25313;
var dependencies_that_loaded = inst_25315;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25347,inst_25311,inst_25313,inst_25343,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25345){
var map__25429 = p__25345;
var map__25429__$1 = ((((!((map__25429 == null)))?((((map__25429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25429):map__25429);
var namespace = cljs.core.get.call(null,map__25429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25347,inst_25311,inst_25313,inst_25343,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25347__$1 = cljs.core.group_by.call(null,inst_25346,inst_25313);
var inst_25349 = (inst_25347__$1 == null);
var inst_25350 = cljs.core.not.call(null,inst_25349);
var state_25393__$1 = (function (){var statearr_25431 = state_25393;
(statearr_25431[(28)] = inst_25343);

(statearr_25431[(16)] = inst_25347__$1);

return statearr_25431;
})();
if(inst_25350){
var statearr_25432_25508 = state_25393__$1;
(statearr_25432_25508[(1)] = (32));

} else {
var statearr_25433_25509 = state_25393__$1;
(statearr_25433_25509[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (44))){
var inst_25369 = (state_25393[(21)]);
var inst_25382 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25369);
var inst_25383 = cljs.core.pr_str.call(null,inst_25382);
var inst_25384 = [cljs.core.str("not required: "),cljs.core.str(inst_25383)].join('');
var inst_25385 = figwheel.client.utils.log.call(null,inst_25384);
var state_25393__$1 = state_25393;
var statearr_25434_25510 = state_25393__$1;
(statearr_25434_25510[(2)] = inst_25385);

(statearr_25434_25510[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (6))){
var inst_25288 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25435_25511 = state_25393__$1;
(statearr_25435_25511[(2)] = inst_25288);

(statearr_25435_25511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (28))){
var inst_25313 = (state_25393[(26)]);
var inst_25340 = (state_25393[(2)]);
var inst_25341 = cljs.core.not_empty.call(null,inst_25313);
var state_25393__$1 = (function (){var statearr_25436 = state_25393;
(statearr_25436[(29)] = inst_25340);

return statearr_25436;
})();
if(cljs.core.truth_(inst_25341)){
var statearr_25437_25512 = state_25393__$1;
(statearr_25437_25512[(1)] = (29));

} else {
var statearr_25438_25513 = state_25393__$1;
(statearr_25438_25513[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (25))){
var inst_25311 = (state_25393[(25)]);
var inst_25327 = (state_25393[(2)]);
var inst_25328 = cljs.core.not_empty.call(null,inst_25311);
var state_25393__$1 = (function (){var statearr_25439 = state_25393;
(statearr_25439[(30)] = inst_25327);

return statearr_25439;
})();
if(cljs.core.truth_(inst_25328)){
var statearr_25440_25514 = state_25393__$1;
(statearr_25440_25514[(1)] = (26));

} else {
var statearr_25441_25515 = state_25393__$1;
(statearr_25441_25515[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (34))){
var inst_25362 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25362)){
var statearr_25442_25516 = state_25393__$1;
(statearr_25442_25516[(1)] = (38));

} else {
var statearr_25443_25517 = state_25393__$1;
(statearr_25443_25517[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (17))){
var state_25393__$1 = state_25393;
var statearr_25444_25518 = state_25393__$1;
(statearr_25444_25518[(2)] = recompile_dependents);

(statearr_25444_25518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (3))){
var state_25393__$1 = state_25393;
var statearr_25445_25519 = state_25393__$1;
(statearr_25445_25519[(2)] = null);

(statearr_25445_25519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (12))){
var inst_25284 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25446_25520 = state_25393__$1;
(statearr_25446_25520[(2)] = inst_25284);

(statearr_25446_25520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (2))){
var inst_25246 = (state_25393[(13)]);
var inst_25253 = cljs.core.seq.call(null,inst_25246);
var inst_25254 = inst_25253;
var inst_25255 = null;
var inst_25256 = (0);
var inst_25257 = (0);
var state_25393__$1 = (function (){var statearr_25447 = state_25393;
(statearr_25447[(7)] = inst_25257);

(statearr_25447[(8)] = inst_25256);

(statearr_25447[(9)] = inst_25255);

(statearr_25447[(10)] = inst_25254);

return statearr_25447;
})();
var statearr_25448_25521 = state_25393__$1;
(statearr_25448_25521[(2)] = null);

(statearr_25448_25521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (23))){
var inst_25307 = (state_25393[(19)]);
var inst_25310 = (state_25393[(23)]);
var inst_25315 = (state_25393[(24)]);
var inst_25311 = (state_25393[(25)]);
var inst_25313 = (state_25393[(26)]);
var inst_25318 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25320 = (function (){var all_files = inst_25307;
var res_SINGLEQUOTE_ = inst_25310;
var res = inst_25311;
var files_not_loaded = inst_25313;
var dependencies_that_loaded = inst_25315;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25318,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25319){
var map__25449 = p__25319;
var map__25449__$1 = ((((!((map__25449 == null)))?((((map__25449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25449):map__25449);
var request_url = cljs.core.get.call(null,map__25449__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25318,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25321 = cljs.core.reverse.call(null,inst_25315);
var inst_25322 = cljs.core.map.call(null,inst_25320,inst_25321);
var inst_25323 = cljs.core.pr_str.call(null,inst_25322);
var inst_25324 = figwheel.client.utils.log.call(null,inst_25323);
var state_25393__$1 = (function (){var statearr_25451 = state_25393;
(statearr_25451[(31)] = inst_25318);

return statearr_25451;
})();
var statearr_25452_25522 = state_25393__$1;
(statearr_25452_25522[(2)] = inst_25324);

(statearr_25452_25522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (35))){
var state_25393__$1 = state_25393;
var statearr_25453_25523 = state_25393__$1;
(statearr_25453_25523[(2)] = true);

(statearr_25453_25523[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (19))){
var inst_25297 = (state_25393[(12)]);
var inst_25303 = figwheel.client.file_reloading.expand_files.call(null,inst_25297);
var state_25393__$1 = state_25393;
var statearr_25454_25524 = state_25393__$1;
(statearr_25454_25524[(2)] = inst_25303);

(statearr_25454_25524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (11))){
var state_25393__$1 = state_25393;
var statearr_25455_25525 = state_25393__$1;
(statearr_25455_25525[(2)] = null);

(statearr_25455_25525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (9))){
var inst_25286 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25456_25526 = state_25393__$1;
(statearr_25456_25526[(2)] = inst_25286);

(statearr_25456_25526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (5))){
var inst_25257 = (state_25393[(7)]);
var inst_25256 = (state_25393[(8)]);
var inst_25259 = (inst_25257 < inst_25256);
var inst_25260 = inst_25259;
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25260)){
var statearr_25457_25527 = state_25393__$1;
(statearr_25457_25527[(1)] = (7));

} else {
var statearr_25458_25528 = state_25393__$1;
(statearr_25458_25528[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (14))){
var inst_25267 = (state_25393[(22)]);
var inst_25276 = cljs.core.first.call(null,inst_25267);
var inst_25277 = figwheel.client.file_reloading.eval_body.call(null,inst_25276,opts);
var inst_25278 = cljs.core.next.call(null,inst_25267);
var inst_25254 = inst_25278;
var inst_25255 = null;
var inst_25256 = (0);
var inst_25257 = (0);
var state_25393__$1 = (function (){var statearr_25459 = state_25393;
(statearr_25459[(7)] = inst_25257);

(statearr_25459[(8)] = inst_25256);

(statearr_25459[(9)] = inst_25255);

(statearr_25459[(10)] = inst_25254);

(statearr_25459[(32)] = inst_25277);

return statearr_25459;
})();
var statearr_25460_25529 = state_25393__$1;
(statearr_25460_25529[(2)] = null);

(statearr_25460_25529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (45))){
var state_25393__$1 = state_25393;
var statearr_25461_25530 = state_25393__$1;
(statearr_25461_25530[(2)] = null);

(statearr_25461_25530[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (26))){
var inst_25307 = (state_25393[(19)]);
var inst_25310 = (state_25393[(23)]);
var inst_25315 = (state_25393[(24)]);
var inst_25311 = (state_25393[(25)]);
var inst_25313 = (state_25393[(26)]);
var inst_25330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25332 = (function (){var all_files = inst_25307;
var res_SINGLEQUOTE_ = inst_25310;
var res = inst_25311;
var files_not_loaded = inst_25313;
var dependencies_that_loaded = inst_25315;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25330,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25331){
var map__25462 = p__25331;
var map__25462__$1 = ((((!((map__25462 == null)))?((((map__25462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25462):map__25462);
var namespace = cljs.core.get.call(null,map__25462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25330,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25333 = cljs.core.map.call(null,inst_25332,inst_25311);
var inst_25334 = cljs.core.pr_str.call(null,inst_25333);
var inst_25335 = figwheel.client.utils.log.call(null,inst_25334);
var inst_25336 = (function (){var all_files = inst_25307;
var res_SINGLEQUOTE_ = inst_25310;
var res = inst_25311;
var files_not_loaded = inst_25313;
var dependencies_that_loaded = inst_25315;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25330,inst_25332,inst_25333,inst_25334,inst_25335,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25307,inst_25310,inst_25315,inst_25311,inst_25313,inst_25330,inst_25332,inst_25333,inst_25334,inst_25335,state_val_25394,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25337 = setTimeout(inst_25336,(10));
var state_25393__$1 = (function (){var statearr_25464 = state_25393;
(statearr_25464[(33)] = inst_25330);

(statearr_25464[(34)] = inst_25335);

return statearr_25464;
})();
var statearr_25465_25531 = state_25393__$1;
(statearr_25465_25531[(2)] = inst_25337);

(statearr_25465_25531[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (16))){
var state_25393__$1 = state_25393;
var statearr_25466_25532 = state_25393__$1;
(statearr_25466_25532[(2)] = reload_dependents);

(statearr_25466_25532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (38))){
var inst_25347 = (state_25393[(16)]);
var inst_25364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25347);
var state_25393__$1 = state_25393;
var statearr_25467_25533 = state_25393__$1;
(statearr_25467_25533[(2)] = inst_25364);

(statearr_25467_25533[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (30))){
var state_25393__$1 = state_25393;
var statearr_25468_25534 = state_25393__$1;
(statearr_25468_25534[(2)] = null);

(statearr_25468_25534[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (10))){
var inst_25267 = (state_25393[(22)]);
var inst_25269 = cljs.core.chunked_seq_QMARK_.call(null,inst_25267);
var state_25393__$1 = state_25393;
if(inst_25269){
var statearr_25469_25535 = state_25393__$1;
(statearr_25469_25535[(1)] = (13));

} else {
var statearr_25470_25536 = state_25393__$1;
(statearr_25470_25536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (18))){
var inst_25301 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25301)){
var statearr_25471_25537 = state_25393__$1;
(statearr_25471_25537[(1)] = (19));

} else {
var statearr_25472_25538 = state_25393__$1;
(statearr_25472_25538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (42))){
var state_25393__$1 = state_25393;
var statearr_25473_25539 = state_25393__$1;
(statearr_25473_25539[(2)] = null);

(statearr_25473_25539[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (37))){
var inst_25359 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25474_25540 = state_25393__$1;
(statearr_25474_25540[(2)] = inst_25359);

(statearr_25474_25540[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (8))){
var inst_25267 = (state_25393[(22)]);
var inst_25254 = (state_25393[(10)]);
var inst_25267__$1 = cljs.core.seq.call(null,inst_25254);
var state_25393__$1 = (function (){var statearr_25475 = state_25393;
(statearr_25475[(22)] = inst_25267__$1);

return statearr_25475;
})();
if(inst_25267__$1){
var statearr_25476_25541 = state_25393__$1;
(statearr_25476_25541[(1)] = (10));

} else {
var statearr_25477_25542 = state_25393__$1;
(statearr_25477_25542[(1)] = (11));

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
});})(c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19294__auto__,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25481[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____1 = (function (state_25393){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_25393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object)){
var ex__19298__auto__ = e25482;
var statearr_25483_25543 = state_25393;
(statearr_25483_25543[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25544 = state_25393;
state_25393 = G__25544;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19361__auto__ = (function (){var statearr_25484 = f__19360__auto__.call(null);
(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__,map__25239,map__25239__$1,opts,before_jsload,on_jsload,reload_dependents,map__25240,map__25240__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19359__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25547,link){
var map__25550 = p__25547;
var map__25550__$1 = ((((!((map__25550 == null)))?((((map__25550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25550):map__25550);
var file = cljs.core.get.call(null,map__25550__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25550,map__25550__$1,file){
return (function (p1__25545_SHARP_,p2__25546_SHARP_){
if(cljs.core._EQ_.call(null,p1__25545_SHARP_,p2__25546_SHARP_)){
return p1__25545_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25550,map__25550__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25556){
var map__25557 = p__25556;
var map__25557__$1 = ((((!((map__25557 == null)))?((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25557):map__25557);
var match_length = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25552_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25552_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25559 = [];
var len__17337__auto___25562 = arguments.length;
var i__17338__auto___25563 = (0);
while(true){
if((i__17338__auto___25563 < len__17337__auto___25562)){
args25559.push((arguments[i__17338__auto___25563]));

var G__25564 = (i__17338__auto___25563 + (1));
i__17338__auto___25563 = G__25564;
continue;
} else {
}
break;
}

var G__25561 = args25559.length;
switch (G__25561) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25559.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25566_SHARP_,p2__25567_SHARP_){
return cljs.core.assoc.call(null,p1__25566_SHARP_,cljs.core.get.call(null,p2__25567_SHARP_,key),p2__25567_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25568){
var map__25571 = p__25568;
var map__25571__$1 = ((((!((map__25571 == null)))?((((map__25571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25571):map__25571);
var f_data = map__25571__$1;
var file = cljs.core.get.call(null,map__25571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25573,files_msg){
var map__25580 = p__25573;
var map__25580__$1 = ((((!((map__25580 == null)))?((((map__25580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25580):map__25580);
var opts = map__25580__$1;
var on_cssload = cljs.core.get.call(null,map__25580__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25582_25586 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25583_25587 = null;
var count__25584_25588 = (0);
var i__25585_25589 = (0);
while(true){
if((i__25585_25589 < count__25584_25588)){
var f_25590 = cljs.core._nth.call(null,chunk__25583_25587,i__25585_25589);
figwheel.client.file_reloading.reload_css_file.call(null,f_25590);

var G__25591 = seq__25582_25586;
var G__25592 = chunk__25583_25587;
var G__25593 = count__25584_25588;
var G__25594 = (i__25585_25589 + (1));
seq__25582_25586 = G__25591;
chunk__25583_25587 = G__25592;
count__25584_25588 = G__25593;
i__25585_25589 = G__25594;
continue;
} else {
var temp__4425__auto___25595 = cljs.core.seq.call(null,seq__25582_25586);
if(temp__4425__auto___25595){
var seq__25582_25596__$1 = temp__4425__auto___25595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25582_25596__$1)){
var c__17082__auto___25597 = cljs.core.chunk_first.call(null,seq__25582_25596__$1);
var G__25598 = cljs.core.chunk_rest.call(null,seq__25582_25596__$1);
var G__25599 = c__17082__auto___25597;
var G__25600 = cljs.core.count.call(null,c__17082__auto___25597);
var G__25601 = (0);
seq__25582_25586 = G__25598;
chunk__25583_25587 = G__25599;
count__25584_25588 = G__25600;
i__25585_25589 = G__25601;
continue;
} else {
var f_25602 = cljs.core.first.call(null,seq__25582_25596__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25602);

var G__25603 = cljs.core.next.call(null,seq__25582_25596__$1);
var G__25604 = null;
var G__25605 = (0);
var G__25606 = (0);
seq__25582_25586 = G__25603;
chunk__25583_25587 = G__25604;
count__25584_25588 = G__25605;
i__25585_25589 = G__25606;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25580,map__25580__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25580,map__25580__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1445391156407