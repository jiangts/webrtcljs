// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async25673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25673 = (function (fn_handler,f,meta25674){
this.fn_handler = fn_handler;
this.f = f;
this.meta25674 = meta25674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25675,meta25674__$1){
var self__ = this;
var _25675__$1 = this;
return (new cljs.core.async.t_cljs$core$async25673(self__.fn_handler,self__.f,meta25674__$1));
});

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25675){
var self__ = this;
var _25675__$1 = this;
return self__.meta25674;
});

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25674","meta25674",1364409851,null)], null);
});

cljs.core.async.t_cljs$core$async25673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25673";

cljs.core.async.t_cljs$core$async25673.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async25673");
});

cljs.core.async.__GT_t_cljs$core$async25673 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25673(fn_handler__$1,f__$1,meta25674){
return (new cljs.core.async.t_cljs$core$async25673(fn_handler__$1,f__$1,meta25674));
});

}

return (new cljs.core.async.t_cljs$core$async25673(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25678 = [];
var len__17337__auto___25681 = arguments.length;
var i__17338__auto___25682 = (0);
while(true){
if((i__17338__auto___25682 < len__17337__auto___25681)){
args25678.push((arguments[i__17338__auto___25682]));

var G__25683 = (i__17338__auto___25682 + (1));
i__17338__auto___25682 = G__25683;
continue;
} else {
}
break;
}

var G__25680 = args25678.length;
switch (G__25680) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25678.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25685 = [];
var len__17337__auto___25688 = arguments.length;
var i__17338__auto___25689 = (0);
while(true){
if((i__17338__auto___25689 < len__17337__auto___25688)){
args25685.push((arguments[i__17338__auto___25689]));

var G__25690 = (i__17338__auto___25689 + (1));
i__17338__auto___25689 = G__25690;
continue;
} else {
}
break;
}

var G__25687 = args25685.length;
switch (G__25687) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25685.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25692 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25692);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25692,ret){
return (function (){
return fn1.call(null,val_25692);
});})(val_25692,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25693 = [];
var len__17337__auto___25696 = arguments.length;
var i__17338__auto___25697 = (0);
while(true){
if((i__17338__auto___25697 < len__17337__auto___25696)){
args25693.push((arguments[i__17338__auto___25697]));

var G__25698 = (i__17338__auto___25697 + (1));
i__17338__auto___25697 = G__25698;
continue;
} else {
}
break;
}

var G__25695 = args25693.length;
switch (G__25695) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25693.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17182__auto___25700 = n;
var x_25701 = (0);
while(true){
if((x_25701 < n__17182__auto___25700)){
(a[x_25701] = (0));

var G__25702 = (x_25701 + (1));
x_25701 = G__25702;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25703 = (i + (1));
i = G__25703;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25707 = (function (alt_flag,flag,meta25708){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25708 = meta25708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25709,meta25708__$1){
var self__ = this;
var _25709__$1 = this;
return (new cljs.core.async.t_cljs$core$async25707(self__.alt_flag,self__.flag,meta25708__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25709){
var self__ = this;
var _25709__$1 = this;
return self__.meta25708;
});})(flag))
;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25707.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25708","meta25708",126157446,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25707";

cljs.core.async.t_cljs$core$async25707.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async25707");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25707 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25707(alt_flag__$1,flag__$1,meta25708){
return (new cljs.core.async.t_cljs$core$async25707(alt_flag__$1,flag__$1,meta25708));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25707(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25713 = (function (alt_handler,flag,cb,meta25714){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25714 = meta25714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25715,meta25714__$1){
var self__ = this;
var _25715__$1 = this;
return (new cljs.core.async.t_cljs$core$async25713(self__.alt_handler,self__.flag,self__.cb,meta25714__$1));
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25715){
var self__ = this;
var _25715__$1 = this;
return self__.meta25714;
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25714","meta25714",-627992434,null)], null);
});

cljs.core.async.t_cljs$core$async25713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25713";

cljs.core.async.t_cljs$core$async25713.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async25713");
});

cljs.core.async.__GT_t_cljs$core$async25713 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25713(alt_handler__$1,flag__$1,cb__$1,meta25714){
return (new cljs.core.async.t_cljs$core$async25713(alt_handler__$1,flag__$1,cb__$1,meta25714));
});

}

return (new cljs.core.async.t_cljs$core$async25713(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25716_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25716_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25717_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25717_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16279__auto__ = wport;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25718 = (i + (1));
i = G__25718;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16279__auto__ = ret;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16267__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16267__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___25724 = arguments.length;
var i__17338__auto___25725 = (0);
while(true){
if((i__17338__auto___25725 < len__17337__auto___25724)){
args__17344__auto__.push((arguments[i__17338__auto___25725]));

var G__25726 = (i__17338__auto___25725 + (1));
i__17338__auto___25725 = G__25726;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((1) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17345__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25721){
var map__25722 = p__25721;
var map__25722__$1 = ((((!((map__25722 == null)))?((((map__25722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25722):map__25722);
var opts = map__25722__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25719){
var G__25720 = cljs.core.first.call(null,seq25719);
var seq25719__$1 = cljs.core.next.call(null,seq25719);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25720,seq25719__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25727 = [];
var len__17337__auto___25777 = arguments.length;
var i__17338__auto___25778 = (0);
while(true){
if((i__17338__auto___25778 < len__17337__auto___25777)){
args25727.push((arguments[i__17338__auto___25778]));

var G__25779 = (i__17338__auto___25778 + (1));
i__17338__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var G__25729 = args25727.length;
switch (G__25729) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25727.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19359__auto___25781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___25781){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___25781){
return (function (state_25753){
var state_val_25754 = (state_25753[(1)]);
if((state_val_25754 === (7))){
var inst_25749 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25755_25782 = state_25753__$1;
(statearr_25755_25782[(2)] = inst_25749);

(statearr_25755_25782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (1))){
var state_25753__$1 = state_25753;
var statearr_25756_25783 = state_25753__$1;
(statearr_25756_25783[(2)] = null);

(statearr_25756_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (4))){
var inst_25732 = (state_25753[(7)]);
var inst_25732__$1 = (state_25753[(2)]);
var inst_25733 = (inst_25732__$1 == null);
var state_25753__$1 = (function (){var statearr_25757 = state_25753;
(statearr_25757[(7)] = inst_25732__$1);

return statearr_25757;
})();
if(cljs.core.truth_(inst_25733)){
var statearr_25758_25784 = state_25753__$1;
(statearr_25758_25784[(1)] = (5));

} else {
var statearr_25759_25785 = state_25753__$1;
(statearr_25759_25785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (13))){
var state_25753__$1 = state_25753;
var statearr_25760_25786 = state_25753__$1;
(statearr_25760_25786[(2)] = null);

(statearr_25760_25786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (6))){
var inst_25732 = (state_25753[(7)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(11),to,inst_25732);
} else {
if((state_val_25754 === (3))){
var inst_25751 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25753__$1,inst_25751);
} else {
if((state_val_25754 === (12))){
var state_25753__$1 = state_25753;
var statearr_25761_25787 = state_25753__$1;
(statearr_25761_25787[(2)] = null);

(statearr_25761_25787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (2))){
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(4),from);
} else {
if((state_val_25754 === (11))){
var inst_25742 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
if(cljs.core.truth_(inst_25742)){
var statearr_25762_25788 = state_25753__$1;
(statearr_25762_25788[(1)] = (12));

} else {
var statearr_25763_25789 = state_25753__$1;
(statearr_25763_25789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (9))){
var state_25753__$1 = state_25753;
var statearr_25764_25790 = state_25753__$1;
(statearr_25764_25790[(2)] = null);

(statearr_25764_25790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (5))){
var state_25753__$1 = state_25753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25765_25791 = state_25753__$1;
(statearr_25765_25791[(1)] = (8));

} else {
var statearr_25766_25792 = state_25753__$1;
(statearr_25766_25792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (14))){
var inst_25747 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25767_25793 = state_25753__$1;
(statearr_25767_25793[(2)] = inst_25747);

(statearr_25767_25793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (10))){
var inst_25739 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25768_25794 = state_25753__$1;
(statearr_25768_25794[(2)] = inst_25739);

(statearr_25768_25794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (8))){
var inst_25736 = cljs.core.async.close_BANG_.call(null,to);
var state_25753__$1 = state_25753;
var statearr_25769_25795 = state_25753__$1;
(statearr_25769_25795[(2)] = inst_25736);

(statearr_25769_25795[(1)] = (10));


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
});})(c__19359__auto___25781))
;
return ((function (switch__19294__auto__,c__19359__auto___25781){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_25773 = [null,null,null,null,null,null,null,null];
(statearr_25773[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_25773[(1)] = (1));

return statearr_25773;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_25753){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_25753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e25774){if((e25774 instanceof Object)){
var ex__19298__auto__ = e25774;
var statearr_25775_25796 = state_25753;
(statearr_25775_25796[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25797 = state_25753;
state_25753 = G__25797;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___25781))
})();
var state__19361__auto__ = (function (){var statearr_25776 = f__19360__auto__.call(null);
(statearr_25776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___25781);

return statearr_25776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___25781))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25981){
var vec__25982 = p__25981;
var v = cljs.core.nth.call(null,vec__25982,(0),null);
var p = cljs.core.nth.call(null,vec__25982,(1),null);
var job = vec__25982;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19359__auto___26164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results){
return (function (state_25987){
var state_val_25988 = (state_25987[(1)]);
if((state_val_25988 === (1))){
var state_25987__$1 = state_25987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25987__$1,(2),res,v);
} else {
if((state_val_25988 === (2))){
var inst_25984 = (state_25987[(2)]);
var inst_25985 = cljs.core.async.close_BANG_.call(null,res);
var state_25987__$1 = (function (){var statearr_25989 = state_25987;
(statearr_25989[(7)] = inst_25984);

return statearr_25989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25987__$1,inst_25985);
} else {
return null;
}
}
});})(c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results))
;
return ((function (switch__19294__auto__,c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_25993 = [null,null,null,null,null,null,null,null];
(statearr_25993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__);

(statearr_25993[(1)] = (1));

return statearr_25993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1 = (function (state_25987){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_25987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e25994){if((e25994 instanceof Object)){
var ex__19298__auto__ = e25994;
var statearr_25995_26165 = state_25987;
(statearr_25995_26165[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_25987;
state_25987 = G__26166;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = function(state_25987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1.call(this,state_25987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results))
})();
var state__19361__auto__ = (function (){var statearr_25996 = f__19360__auto__.call(null);
(statearr_25996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26164);

return statearr_25996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___26164,res,vec__25982,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25997){
var vec__25998 = p__25997;
var v = cljs.core.nth.call(null,vec__25998,(0),null);
var p = cljs.core.nth.call(null,vec__25998,(1),null);
var job = vec__25998;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17182__auto___26167 = n;
var __26168 = (0);
while(true){
if((__26168 < n__17182__auto___26167)){
var G__25999_26169 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25999_26169) {
case "compute":
var c__19359__auto___26171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26168,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (__26168,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function (state_26012){
var state_val_26013 = (state_26012[(1)]);
if((state_val_26013 === (1))){
var state_26012__$1 = state_26012;
var statearr_26014_26172 = state_26012__$1;
(statearr_26014_26172[(2)] = null);

(statearr_26014_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (2))){
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26012__$1,(4),jobs);
} else {
if((state_val_26013 === (3))){
var inst_26010 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26012__$1,inst_26010);
} else {
if((state_val_26013 === (4))){
var inst_26002 = (state_26012[(2)]);
var inst_26003 = process.call(null,inst_26002);
var state_26012__$1 = state_26012;
if(cljs.core.truth_(inst_26003)){
var statearr_26015_26173 = state_26012__$1;
(statearr_26015_26173[(1)] = (5));

} else {
var statearr_26016_26174 = state_26012__$1;
(statearr_26016_26174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (5))){
var state_26012__$1 = state_26012;
var statearr_26017_26175 = state_26012__$1;
(statearr_26017_26175[(2)] = null);

(statearr_26017_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (6))){
var state_26012__$1 = state_26012;
var statearr_26018_26176 = state_26012__$1;
(statearr_26018_26176[(2)] = null);

(statearr_26018_26176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (7))){
var inst_26008 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26019_26177 = state_26012__$1;
(statearr_26019_26177[(2)] = inst_26008);

(statearr_26019_26177[(1)] = (3));


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
});})(__26168,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
;
return ((function (__26168,switch__19294__auto__,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_26023 = [null,null,null,null,null,null,null];
(statearr_26023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__);

(statearr_26023[(1)] = (1));

return statearr_26023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1 = (function (state_26012){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26024){if((e26024 instanceof Object)){
var ex__19298__auto__ = e26024;
var statearr_26025_26178 = state_26012;
(statearr_26025_26178[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26179 = state_26012;
state_26012 = G__26179;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = function(state_26012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1.call(this,state_26012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__;
})()
;})(__26168,switch__19294__auto__,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
})();
var state__19361__auto__ = (function (){var statearr_26026 = f__19360__auto__.call(null);
(statearr_26026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26171);

return statearr_26026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(__26168,c__19359__auto___26171,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
);


break;
case "async":
var c__19359__auto___26180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26168,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (__26168,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function (state_26039){
var state_val_26040 = (state_26039[(1)]);
if((state_val_26040 === (1))){
var state_26039__$1 = state_26039;
var statearr_26041_26181 = state_26039__$1;
(statearr_26041_26181[(2)] = null);

(statearr_26041_26181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (2))){
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,(4),jobs);
} else {
if((state_val_26040 === (3))){
var inst_26037 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26039__$1,inst_26037);
} else {
if((state_val_26040 === (4))){
var inst_26029 = (state_26039[(2)]);
var inst_26030 = async.call(null,inst_26029);
var state_26039__$1 = state_26039;
if(cljs.core.truth_(inst_26030)){
var statearr_26042_26182 = state_26039__$1;
(statearr_26042_26182[(1)] = (5));

} else {
var statearr_26043_26183 = state_26039__$1;
(statearr_26043_26183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (5))){
var state_26039__$1 = state_26039;
var statearr_26044_26184 = state_26039__$1;
(statearr_26044_26184[(2)] = null);

(statearr_26044_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (6))){
var state_26039__$1 = state_26039;
var statearr_26045_26185 = state_26039__$1;
(statearr_26045_26185[(2)] = null);

(statearr_26045_26185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26040 === (7))){
var inst_26035 = (state_26039[(2)]);
var state_26039__$1 = state_26039;
var statearr_26046_26186 = state_26039__$1;
(statearr_26046_26186[(2)] = inst_26035);

(statearr_26046_26186[(1)] = (3));


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
});})(__26168,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
;
return ((function (__26168,switch__19294__auto__,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_26050 = [null,null,null,null,null,null,null];
(statearr_26050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__);

(statearr_26050[(1)] = (1));

return statearr_26050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1 = (function (state_26039){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26051){if((e26051 instanceof Object)){
var ex__19298__auto__ = e26051;
var statearr_26052_26187 = state_26039;
(statearr_26052_26187[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26188 = state_26039;
state_26039 = G__26188;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__;
})()
;})(__26168,switch__19294__auto__,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
})();
var state__19361__auto__ = (function (){var statearr_26053 = f__19360__auto__.call(null);
(statearr_26053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26180);

return statearr_26053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(__26168,c__19359__auto___26180,G__25999_26169,n__17182__auto___26167,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26189 = (__26168 + (1));
__26168 = G__26189;
continue;
} else {
}
break;
}

var c__19359__auto___26190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___26190,jobs,results,process,async){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___26190,jobs,results,process,async){
return (function (state_26075){
var state_val_26076 = (state_26075[(1)]);
if((state_val_26076 === (1))){
var state_26075__$1 = state_26075;
var statearr_26077_26191 = state_26075__$1;
(statearr_26077_26191[(2)] = null);

(statearr_26077_26191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (2))){
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26075__$1,(4),from);
} else {
if((state_val_26076 === (3))){
var inst_26073 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26075__$1,inst_26073);
} else {
if((state_val_26076 === (4))){
var inst_26056 = (state_26075[(7)]);
var inst_26056__$1 = (state_26075[(2)]);
var inst_26057 = (inst_26056__$1 == null);
var state_26075__$1 = (function (){var statearr_26078 = state_26075;
(statearr_26078[(7)] = inst_26056__$1);

return statearr_26078;
})();
if(cljs.core.truth_(inst_26057)){
var statearr_26079_26192 = state_26075__$1;
(statearr_26079_26192[(1)] = (5));

} else {
var statearr_26080_26193 = state_26075__$1;
(statearr_26080_26193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (5))){
var inst_26059 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26075__$1 = state_26075;
var statearr_26081_26194 = state_26075__$1;
(statearr_26081_26194[(2)] = inst_26059);

(statearr_26081_26194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (6))){
var inst_26061 = (state_26075[(8)]);
var inst_26056 = (state_26075[(7)]);
var inst_26061__$1 = cljs.core.async.chan.call(null,(1));
var inst_26062 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26063 = [inst_26056,inst_26061__$1];
var inst_26064 = (new cljs.core.PersistentVector(null,2,(5),inst_26062,inst_26063,null));
var state_26075__$1 = (function (){var statearr_26082 = state_26075;
(statearr_26082[(8)] = inst_26061__$1);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26075__$1,(8),jobs,inst_26064);
} else {
if((state_val_26076 === (7))){
var inst_26071 = (state_26075[(2)]);
var state_26075__$1 = state_26075;
var statearr_26083_26195 = state_26075__$1;
(statearr_26083_26195[(2)] = inst_26071);

(statearr_26083_26195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26076 === (8))){
var inst_26061 = (state_26075[(8)]);
var inst_26066 = (state_26075[(2)]);
var state_26075__$1 = (function (){var statearr_26084 = state_26075;
(statearr_26084[(9)] = inst_26066);

return statearr_26084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26075__$1,(9),results,inst_26061);
} else {
if((state_val_26076 === (9))){
var inst_26068 = (state_26075[(2)]);
var state_26075__$1 = (function (){var statearr_26085 = state_26075;
(statearr_26085[(10)] = inst_26068);

return statearr_26085;
})();
var statearr_26086_26196 = state_26075__$1;
(statearr_26086_26196[(2)] = null);

(statearr_26086_26196[(1)] = (2));


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
});})(c__19359__auto___26190,jobs,results,process,async))
;
return ((function (switch__19294__auto__,c__19359__auto___26190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1 = (function (state_26075){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__19298__auto__ = e26091;
var statearr_26092_26197 = state_26075;
(statearr_26092_26197[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26198 = state_26075;
state_26075 = G__26198;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = function(state_26075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1.call(this,state_26075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___26190,jobs,results,process,async))
})();
var state__19361__auto__ = (function (){var statearr_26093 = f__19360__auto__.call(null);
(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26190);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___26190,jobs,results,process,async))
);


var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__,jobs,results,process,async){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__,jobs,results,process,async){
return (function (state_26131){
var state_val_26132 = (state_26131[(1)]);
if((state_val_26132 === (7))){
var inst_26127 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26133_26199 = state_26131__$1;
(statearr_26133_26199[(2)] = inst_26127);

(statearr_26133_26199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (20))){
var state_26131__$1 = state_26131;
var statearr_26134_26200 = state_26131__$1;
(statearr_26134_26200[(2)] = null);

(statearr_26134_26200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (1))){
var state_26131__$1 = state_26131;
var statearr_26135_26201 = state_26131__$1;
(statearr_26135_26201[(2)] = null);

(statearr_26135_26201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (4))){
var inst_26096 = (state_26131[(7)]);
var inst_26096__$1 = (state_26131[(2)]);
var inst_26097 = (inst_26096__$1 == null);
var state_26131__$1 = (function (){var statearr_26136 = state_26131;
(statearr_26136[(7)] = inst_26096__$1);

return statearr_26136;
})();
if(cljs.core.truth_(inst_26097)){
var statearr_26137_26202 = state_26131__$1;
(statearr_26137_26202[(1)] = (5));

} else {
var statearr_26138_26203 = state_26131__$1;
(statearr_26138_26203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (15))){
var inst_26109 = (state_26131[(8)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26131__$1,(18),to,inst_26109);
} else {
if((state_val_26132 === (21))){
var inst_26122 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26139_26204 = state_26131__$1;
(statearr_26139_26204[(2)] = inst_26122);

(statearr_26139_26204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (13))){
var inst_26124 = (state_26131[(2)]);
var state_26131__$1 = (function (){var statearr_26140 = state_26131;
(statearr_26140[(9)] = inst_26124);

return statearr_26140;
})();
var statearr_26141_26205 = state_26131__$1;
(statearr_26141_26205[(2)] = null);

(statearr_26141_26205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (6))){
var inst_26096 = (state_26131[(7)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(11),inst_26096);
} else {
if((state_val_26132 === (17))){
var inst_26117 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
if(cljs.core.truth_(inst_26117)){
var statearr_26142_26206 = state_26131__$1;
(statearr_26142_26206[(1)] = (19));

} else {
var statearr_26143_26207 = state_26131__$1;
(statearr_26143_26207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (3))){
var inst_26129 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26131__$1,inst_26129);
} else {
if((state_val_26132 === (12))){
var inst_26106 = (state_26131[(10)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(14),inst_26106);
} else {
if((state_val_26132 === (2))){
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(4),results);
} else {
if((state_val_26132 === (19))){
var state_26131__$1 = state_26131;
var statearr_26144_26208 = state_26131__$1;
(statearr_26144_26208[(2)] = null);

(statearr_26144_26208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (11))){
var inst_26106 = (state_26131[(2)]);
var state_26131__$1 = (function (){var statearr_26145 = state_26131;
(statearr_26145[(10)] = inst_26106);

return statearr_26145;
})();
var statearr_26146_26209 = state_26131__$1;
(statearr_26146_26209[(2)] = null);

(statearr_26146_26209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (9))){
var state_26131__$1 = state_26131;
var statearr_26147_26210 = state_26131__$1;
(statearr_26147_26210[(2)] = null);

(statearr_26147_26210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (5))){
var state_26131__$1 = state_26131;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26148_26211 = state_26131__$1;
(statearr_26148_26211[(1)] = (8));

} else {
var statearr_26149_26212 = state_26131__$1;
(statearr_26149_26212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (14))){
var inst_26111 = (state_26131[(11)]);
var inst_26109 = (state_26131[(8)]);
var inst_26109__$1 = (state_26131[(2)]);
var inst_26110 = (inst_26109__$1 == null);
var inst_26111__$1 = cljs.core.not.call(null,inst_26110);
var state_26131__$1 = (function (){var statearr_26150 = state_26131;
(statearr_26150[(11)] = inst_26111__$1);

(statearr_26150[(8)] = inst_26109__$1);

return statearr_26150;
})();
if(inst_26111__$1){
var statearr_26151_26213 = state_26131__$1;
(statearr_26151_26213[(1)] = (15));

} else {
var statearr_26152_26214 = state_26131__$1;
(statearr_26152_26214[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (16))){
var inst_26111 = (state_26131[(11)]);
var state_26131__$1 = state_26131;
var statearr_26153_26215 = state_26131__$1;
(statearr_26153_26215[(2)] = inst_26111);

(statearr_26153_26215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (10))){
var inst_26103 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26154_26216 = state_26131__$1;
(statearr_26154_26216[(2)] = inst_26103);

(statearr_26154_26216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (18))){
var inst_26114 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26155_26217 = state_26131__$1;
(statearr_26155_26217[(2)] = inst_26114);

(statearr_26155_26217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (8))){
var inst_26100 = cljs.core.async.close_BANG_.call(null,to);
var state_26131__$1 = state_26131;
var statearr_26156_26218 = state_26131__$1;
(statearr_26156_26218[(2)] = inst_26100);

(statearr_26156_26218[(1)] = (10));


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
});})(c__19359__auto__,jobs,results,process,async))
;
return ((function (switch__19294__auto__,c__19359__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_26160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__);

(statearr_26160[(1)] = (1));

return statearr_26160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1 = (function (state_26131){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26161){if((e26161 instanceof Object)){
var ex__19298__auto__ = e26161;
var statearr_26162_26219 = state_26131;
(statearr_26162_26219[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26220 = state_26131;
state_26131 = G__26220;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__ = function(state_26131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1.call(this,state_26131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__,jobs,results,process,async))
})();
var state__19361__auto__ = (function (){var statearr_26163 = f__19360__auto__.call(null);
(statearr_26163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_26163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__,jobs,results,process,async))
);

return c__19359__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26221 = [];
var len__17337__auto___26224 = arguments.length;
var i__17338__auto___26225 = (0);
while(true){
if((i__17338__auto___26225 < len__17337__auto___26224)){
args26221.push((arguments[i__17338__auto___26225]));

var G__26226 = (i__17338__auto___26225 + (1));
i__17338__auto___26225 = G__26226;
continue;
} else {
}
break;
}

var G__26223 = args26221.length;
switch (G__26223) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26221.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26228 = [];
var len__17337__auto___26231 = arguments.length;
var i__17338__auto___26232 = (0);
while(true){
if((i__17338__auto___26232 < len__17337__auto___26231)){
args26228.push((arguments[i__17338__auto___26232]));

var G__26233 = (i__17338__auto___26232 + (1));
i__17338__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var G__26230 = args26228.length;
switch (G__26230) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26228.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26235 = [];
var len__17337__auto___26288 = arguments.length;
var i__17338__auto___26289 = (0);
while(true){
if((i__17338__auto___26289 < len__17337__auto___26288)){
args26235.push((arguments[i__17338__auto___26289]));

var G__26290 = (i__17338__auto___26289 + (1));
i__17338__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26237 = args26235.length;
switch (G__26237) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26235.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19359__auto___26292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___26292,tc,fc){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___26292,tc,fc){
return (function (state_26263){
var state_val_26264 = (state_26263[(1)]);
if((state_val_26264 === (7))){
var inst_26259 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26265_26293 = state_26263__$1;
(statearr_26265_26293[(2)] = inst_26259);

(statearr_26265_26293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (1))){
var state_26263__$1 = state_26263;
var statearr_26266_26294 = state_26263__$1;
(statearr_26266_26294[(2)] = null);

(statearr_26266_26294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (4))){
var inst_26240 = (state_26263[(7)]);
var inst_26240__$1 = (state_26263[(2)]);
var inst_26241 = (inst_26240__$1 == null);
var state_26263__$1 = (function (){var statearr_26267 = state_26263;
(statearr_26267[(7)] = inst_26240__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26241)){
var statearr_26268_26295 = state_26263__$1;
(statearr_26268_26295[(1)] = (5));

} else {
var statearr_26269_26296 = state_26263__$1;
(statearr_26269_26296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (13))){
var state_26263__$1 = state_26263;
var statearr_26270_26297 = state_26263__$1;
(statearr_26270_26297[(2)] = null);

(statearr_26270_26297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (6))){
var inst_26240 = (state_26263[(7)]);
var inst_26246 = p.call(null,inst_26240);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26246)){
var statearr_26271_26298 = state_26263__$1;
(statearr_26271_26298[(1)] = (9));

} else {
var statearr_26272_26299 = state_26263__$1;
(statearr_26272_26299[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (3))){
var inst_26261 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else {
if((state_val_26264 === (12))){
var state_26263__$1 = state_26263;
var statearr_26273_26300 = state_26263__$1;
(statearr_26273_26300[(2)] = null);

(statearr_26273_26300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (2))){
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(4),ch);
} else {
if((state_val_26264 === (11))){
var inst_26240 = (state_26263[(7)]);
var inst_26250 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26263__$1,(8),inst_26250,inst_26240);
} else {
if((state_val_26264 === (9))){
var state_26263__$1 = state_26263;
var statearr_26274_26301 = state_26263__$1;
(statearr_26274_26301[(2)] = tc);

(statearr_26274_26301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (5))){
var inst_26243 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26244 = cljs.core.async.close_BANG_.call(null,fc);
var state_26263__$1 = (function (){var statearr_26275 = state_26263;
(statearr_26275[(8)] = inst_26243);

return statearr_26275;
})();
var statearr_26276_26302 = state_26263__$1;
(statearr_26276_26302[(2)] = inst_26244);

(statearr_26276_26302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (14))){
var inst_26257 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26277_26303 = state_26263__$1;
(statearr_26277_26303[(2)] = inst_26257);

(statearr_26277_26303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (10))){
var state_26263__$1 = state_26263;
var statearr_26278_26304 = state_26263__$1;
(statearr_26278_26304[(2)] = fc);

(statearr_26278_26304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (8))){
var inst_26252 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26252)){
var statearr_26279_26305 = state_26263__$1;
(statearr_26279_26305[(1)] = (12));

} else {
var statearr_26280_26306 = state_26263__$1;
(statearr_26280_26306[(1)] = (13));

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
});})(c__19359__auto___26292,tc,fc))
;
return ((function (switch__19294__auto__,c__19359__auto___26292,tc,fc){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_26284 = [null,null,null,null,null,null,null,null,null];
(statearr_26284[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_26284[(1)] = (1));

return statearr_26284;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_26263){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26285){if((e26285 instanceof Object)){
var ex__19298__auto__ = e26285;
var statearr_26286_26307 = state_26263;
(statearr_26286_26307[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26308 = state_26263;
state_26263 = G__26308;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___26292,tc,fc))
})();
var state__19361__auto__ = (function (){var statearr_26287 = f__19360__auto__.call(null);
(statearr_26287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26292);

return statearr_26287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___26292,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__){
return (function (state_26355){
var state_val_26356 = (state_26355[(1)]);
if((state_val_26356 === (1))){
var inst_26341 = init;
var state_26355__$1 = (function (){var statearr_26357 = state_26355;
(statearr_26357[(7)] = inst_26341);

return statearr_26357;
})();
var statearr_26358_26373 = state_26355__$1;
(statearr_26358_26373[(2)] = null);

(statearr_26358_26373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26356 === (2))){
var state_26355__$1 = state_26355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26355__$1,(4),ch);
} else {
if((state_val_26356 === (3))){
var inst_26353 = (state_26355[(2)]);
var state_26355__$1 = state_26355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26355__$1,inst_26353);
} else {
if((state_val_26356 === (4))){
var inst_26344 = (state_26355[(8)]);
var inst_26344__$1 = (state_26355[(2)]);
var inst_26345 = (inst_26344__$1 == null);
var state_26355__$1 = (function (){var statearr_26359 = state_26355;
(statearr_26359[(8)] = inst_26344__$1);

return statearr_26359;
})();
if(cljs.core.truth_(inst_26345)){
var statearr_26360_26374 = state_26355__$1;
(statearr_26360_26374[(1)] = (5));

} else {
var statearr_26361_26375 = state_26355__$1;
(statearr_26361_26375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26356 === (5))){
var inst_26341 = (state_26355[(7)]);
var state_26355__$1 = state_26355;
var statearr_26362_26376 = state_26355__$1;
(statearr_26362_26376[(2)] = inst_26341);

(statearr_26362_26376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26356 === (6))){
var inst_26344 = (state_26355[(8)]);
var inst_26341 = (state_26355[(7)]);
var inst_26348 = f.call(null,inst_26341,inst_26344);
var inst_26341__$1 = inst_26348;
var state_26355__$1 = (function (){var statearr_26363 = state_26355;
(statearr_26363[(7)] = inst_26341__$1);

return statearr_26363;
})();
var statearr_26364_26377 = state_26355__$1;
(statearr_26364_26377[(2)] = null);

(statearr_26364_26377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26356 === (7))){
var inst_26351 = (state_26355[(2)]);
var state_26355__$1 = state_26355;
var statearr_26365_26378 = state_26355__$1;
(statearr_26365_26378[(2)] = inst_26351);

(statearr_26365_26378[(1)] = (3));


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
});})(c__19359__auto__))
;
return ((function (switch__19294__auto__,c__19359__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19295__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19295__auto____0 = (function (){
var statearr_26369 = [null,null,null,null,null,null,null,null,null];
(statearr_26369[(0)] = cljs$core$async$reduce_$_state_machine__19295__auto__);

(statearr_26369[(1)] = (1));

return statearr_26369;
});
var cljs$core$async$reduce_$_state_machine__19295__auto____1 = (function (state_26355){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26370){if((e26370 instanceof Object)){
var ex__19298__auto__ = e26370;
var statearr_26371_26379 = state_26355;
(statearr_26371_26379[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26380 = state_26355;
state_26355 = G__26380;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19295__auto__ = function(state_26355){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19295__auto____1.call(this,state_26355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19295__auto____0;
cljs$core$async$reduce_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19295__auto____1;
return cljs$core$async$reduce_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__))
})();
var state__19361__auto__ = (function (){var statearr_26372 = f__19360__auto__.call(null);
(statearr_26372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_26372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__))
);

return c__19359__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26381 = [];
var len__17337__auto___26433 = arguments.length;
var i__17338__auto___26434 = (0);
while(true){
if((i__17338__auto___26434 < len__17337__auto___26433)){
args26381.push((arguments[i__17338__auto___26434]));

var G__26435 = (i__17338__auto___26434 + (1));
i__17338__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var G__26383 = args26381.length;
switch (G__26383) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26381.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__){
return (function (state_26408){
var state_val_26409 = (state_26408[(1)]);
if((state_val_26409 === (7))){
var inst_26390 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
var statearr_26410_26437 = state_26408__$1;
(statearr_26410_26437[(2)] = inst_26390);

(statearr_26410_26437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (1))){
var inst_26384 = cljs.core.seq.call(null,coll);
var inst_26385 = inst_26384;
var state_26408__$1 = (function (){var statearr_26411 = state_26408;
(statearr_26411[(7)] = inst_26385);

return statearr_26411;
})();
var statearr_26412_26438 = state_26408__$1;
(statearr_26412_26438[(2)] = null);

(statearr_26412_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (4))){
var inst_26385 = (state_26408[(7)]);
var inst_26388 = cljs.core.first.call(null,inst_26385);
var state_26408__$1 = state_26408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26408__$1,(7),ch,inst_26388);
} else {
if((state_val_26409 === (13))){
var inst_26402 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
var statearr_26413_26439 = state_26408__$1;
(statearr_26413_26439[(2)] = inst_26402);

(statearr_26413_26439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (6))){
var inst_26393 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
if(cljs.core.truth_(inst_26393)){
var statearr_26414_26440 = state_26408__$1;
(statearr_26414_26440[(1)] = (8));

} else {
var statearr_26415_26441 = state_26408__$1;
(statearr_26415_26441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (3))){
var inst_26406 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26408__$1,inst_26406);
} else {
if((state_val_26409 === (12))){
var state_26408__$1 = state_26408;
var statearr_26416_26442 = state_26408__$1;
(statearr_26416_26442[(2)] = null);

(statearr_26416_26442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (2))){
var inst_26385 = (state_26408[(7)]);
var state_26408__$1 = state_26408;
if(cljs.core.truth_(inst_26385)){
var statearr_26417_26443 = state_26408__$1;
(statearr_26417_26443[(1)] = (4));

} else {
var statearr_26418_26444 = state_26408__$1;
(statearr_26418_26444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (11))){
var inst_26399 = cljs.core.async.close_BANG_.call(null,ch);
var state_26408__$1 = state_26408;
var statearr_26419_26445 = state_26408__$1;
(statearr_26419_26445[(2)] = inst_26399);

(statearr_26419_26445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (9))){
var state_26408__$1 = state_26408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26420_26446 = state_26408__$1;
(statearr_26420_26446[(1)] = (11));

} else {
var statearr_26421_26447 = state_26408__$1;
(statearr_26421_26447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (5))){
var inst_26385 = (state_26408[(7)]);
var state_26408__$1 = state_26408;
var statearr_26422_26448 = state_26408__$1;
(statearr_26422_26448[(2)] = inst_26385);

(statearr_26422_26448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (10))){
var inst_26404 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
var statearr_26423_26449 = state_26408__$1;
(statearr_26423_26449[(2)] = inst_26404);

(statearr_26423_26449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (8))){
var inst_26385 = (state_26408[(7)]);
var inst_26395 = cljs.core.next.call(null,inst_26385);
var inst_26385__$1 = inst_26395;
var state_26408__$1 = (function (){var statearr_26424 = state_26408;
(statearr_26424[(7)] = inst_26385__$1);

return statearr_26424;
})();
var statearr_26425_26450 = state_26408__$1;
(statearr_26425_26450[(2)] = null);

(statearr_26425_26450[(1)] = (2));


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
});})(c__19359__auto__))
;
return ((function (switch__19294__auto__,c__19359__auto__){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_26429 = [null,null,null,null,null,null,null,null];
(statearr_26429[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_26429[(1)] = (1));

return statearr_26429;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_26408){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object)){
var ex__19298__auto__ = e26430;
var statearr_26431_26451 = state_26408;
(statearr_26431_26451[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26452 = state_26408;
state_26408 = G__26452;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_26408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_26408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__))
})();
var state__19361__auto__ = (function (){var statearr_26432 = f__19360__auto__.call(null);
(statearr_26432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__))
);

return c__19359__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16934__auto__ = (((_ == null))?null:_);
var m__16935__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,_);
} else {
var m__16935__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26674 = (function (mult,ch,cs,meta26675){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26675 = meta26675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26676,meta26675__$1){
var self__ = this;
var _26676__$1 = this;
return (new cljs.core.async.t_cljs$core$async26674(self__.mult,self__.ch,self__.cs,meta26675__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26676){
var self__ = this;
var _26676__$1 = this;
return self__.meta26675;
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26675","meta26675",1913046441,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26674";

cljs.core.async.t_cljs$core$async26674.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26674");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26674 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26674(mult__$1,ch__$1,cs__$1,meta26675){
return (new cljs.core.async.t_cljs$core$async26674(mult__$1,ch__$1,cs__$1,meta26675));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26674(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19359__auto___26895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___26895,cs,m,dchan,dctr,done){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___26895,cs,m,dchan,dctr,done){
return (function (state_26807){
var state_val_26808 = (state_26807[(1)]);
if((state_val_26808 === (7))){
var inst_26803 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26809_26896 = state_26807__$1;
(statearr_26809_26896[(2)] = inst_26803);

(statearr_26809_26896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (20))){
var inst_26708 = (state_26807[(7)]);
var inst_26718 = cljs.core.first.call(null,inst_26708);
var inst_26719 = cljs.core.nth.call(null,inst_26718,(0),null);
var inst_26720 = cljs.core.nth.call(null,inst_26718,(1),null);
var state_26807__$1 = (function (){var statearr_26810 = state_26807;
(statearr_26810[(8)] = inst_26719);

return statearr_26810;
})();
if(cljs.core.truth_(inst_26720)){
var statearr_26811_26897 = state_26807__$1;
(statearr_26811_26897[(1)] = (22));

} else {
var statearr_26812_26898 = state_26807__$1;
(statearr_26812_26898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (27))){
var inst_26750 = (state_26807[(9)]);
var inst_26755 = (state_26807[(10)]);
var inst_26748 = (state_26807[(11)]);
var inst_26679 = (state_26807[(12)]);
var inst_26755__$1 = cljs.core._nth.call(null,inst_26748,inst_26750);
var inst_26756 = cljs.core.async.put_BANG_.call(null,inst_26755__$1,inst_26679,done);
var state_26807__$1 = (function (){var statearr_26813 = state_26807;
(statearr_26813[(10)] = inst_26755__$1);

return statearr_26813;
})();
if(cljs.core.truth_(inst_26756)){
var statearr_26814_26899 = state_26807__$1;
(statearr_26814_26899[(1)] = (30));

} else {
var statearr_26815_26900 = state_26807__$1;
(statearr_26815_26900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (1))){
var state_26807__$1 = state_26807;
var statearr_26816_26901 = state_26807__$1;
(statearr_26816_26901[(2)] = null);

(statearr_26816_26901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (24))){
var inst_26708 = (state_26807[(7)]);
var inst_26725 = (state_26807[(2)]);
var inst_26726 = cljs.core.next.call(null,inst_26708);
var inst_26688 = inst_26726;
var inst_26689 = null;
var inst_26690 = (0);
var inst_26691 = (0);
var state_26807__$1 = (function (){var statearr_26817 = state_26807;
(statearr_26817[(13)] = inst_26691);

(statearr_26817[(14)] = inst_26690);

(statearr_26817[(15)] = inst_26725);

(statearr_26817[(16)] = inst_26689);

(statearr_26817[(17)] = inst_26688);

return statearr_26817;
})();
var statearr_26818_26902 = state_26807__$1;
(statearr_26818_26902[(2)] = null);

(statearr_26818_26902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (39))){
var state_26807__$1 = state_26807;
var statearr_26822_26903 = state_26807__$1;
(statearr_26822_26903[(2)] = null);

(statearr_26822_26903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (4))){
var inst_26679 = (state_26807[(12)]);
var inst_26679__$1 = (state_26807[(2)]);
var inst_26680 = (inst_26679__$1 == null);
var state_26807__$1 = (function (){var statearr_26823 = state_26807;
(statearr_26823[(12)] = inst_26679__$1);

return statearr_26823;
})();
if(cljs.core.truth_(inst_26680)){
var statearr_26824_26904 = state_26807__$1;
(statearr_26824_26904[(1)] = (5));

} else {
var statearr_26825_26905 = state_26807__$1;
(statearr_26825_26905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (15))){
var inst_26691 = (state_26807[(13)]);
var inst_26690 = (state_26807[(14)]);
var inst_26689 = (state_26807[(16)]);
var inst_26688 = (state_26807[(17)]);
var inst_26704 = (state_26807[(2)]);
var inst_26705 = (inst_26691 + (1));
var tmp26819 = inst_26690;
var tmp26820 = inst_26689;
var tmp26821 = inst_26688;
var inst_26688__$1 = tmp26821;
var inst_26689__$1 = tmp26820;
var inst_26690__$1 = tmp26819;
var inst_26691__$1 = inst_26705;
var state_26807__$1 = (function (){var statearr_26826 = state_26807;
(statearr_26826[(13)] = inst_26691__$1);

(statearr_26826[(14)] = inst_26690__$1);

(statearr_26826[(16)] = inst_26689__$1);

(statearr_26826[(17)] = inst_26688__$1);

(statearr_26826[(18)] = inst_26704);

return statearr_26826;
})();
var statearr_26827_26906 = state_26807__$1;
(statearr_26827_26906[(2)] = null);

(statearr_26827_26906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (21))){
var inst_26729 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26831_26907 = state_26807__$1;
(statearr_26831_26907[(2)] = inst_26729);

(statearr_26831_26907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (31))){
var inst_26755 = (state_26807[(10)]);
var inst_26759 = done.call(null,null);
var inst_26760 = cljs.core.async.untap_STAR_.call(null,m,inst_26755);
var state_26807__$1 = (function (){var statearr_26832 = state_26807;
(statearr_26832[(19)] = inst_26759);

return statearr_26832;
})();
var statearr_26833_26908 = state_26807__$1;
(statearr_26833_26908[(2)] = inst_26760);

(statearr_26833_26908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (32))){
var inst_26750 = (state_26807[(9)]);
var inst_26748 = (state_26807[(11)]);
var inst_26747 = (state_26807[(20)]);
var inst_26749 = (state_26807[(21)]);
var inst_26762 = (state_26807[(2)]);
var inst_26763 = (inst_26750 + (1));
var tmp26828 = inst_26748;
var tmp26829 = inst_26747;
var tmp26830 = inst_26749;
var inst_26747__$1 = tmp26829;
var inst_26748__$1 = tmp26828;
var inst_26749__$1 = tmp26830;
var inst_26750__$1 = inst_26763;
var state_26807__$1 = (function (){var statearr_26834 = state_26807;
(statearr_26834[(9)] = inst_26750__$1);

(statearr_26834[(22)] = inst_26762);

(statearr_26834[(11)] = inst_26748__$1);

(statearr_26834[(20)] = inst_26747__$1);

(statearr_26834[(21)] = inst_26749__$1);

return statearr_26834;
})();
var statearr_26835_26909 = state_26807__$1;
(statearr_26835_26909[(2)] = null);

(statearr_26835_26909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (40))){
var inst_26775 = (state_26807[(23)]);
var inst_26779 = done.call(null,null);
var inst_26780 = cljs.core.async.untap_STAR_.call(null,m,inst_26775);
var state_26807__$1 = (function (){var statearr_26836 = state_26807;
(statearr_26836[(24)] = inst_26779);

return statearr_26836;
})();
var statearr_26837_26910 = state_26807__$1;
(statearr_26837_26910[(2)] = inst_26780);

(statearr_26837_26910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (33))){
var inst_26766 = (state_26807[(25)]);
var inst_26768 = cljs.core.chunked_seq_QMARK_.call(null,inst_26766);
var state_26807__$1 = state_26807;
if(inst_26768){
var statearr_26838_26911 = state_26807__$1;
(statearr_26838_26911[(1)] = (36));

} else {
var statearr_26839_26912 = state_26807__$1;
(statearr_26839_26912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (13))){
var inst_26698 = (state_26807[(26)]);
var inst_26701 = cljs.core.async.close_BANG_.call(null,inst_26698);
var state_26807__$1 = state_26807;
var statearr_26840_26913 = state_26807__$1;
(statearr_26840_26913[(2)] = inst_26701);

(statearr_26840_26913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (22))){
var inst_26719 = (state_26807[(8)]);
var inst_26722 = cljs.core.async.close_BANG_.call(null,inst_26719);
var state_26807__$1 = state_26807;
var statearr_26841_26914 = state_26807__$1;
(statearr_26841_26914[(2)] = inst_26722);

(statearr_26841_26914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (36))){
var inst_26766 = (state_26807[(25)]);
var inst_26770 = cljs.core.chunk_first.call(null,inst_26766);
var inst_26771 = cljs.core.chunk_rest.call(null,inst_26766);
var inst_26772 = cljs.core.count.call(null,inst_26770);
var inst_26747 = inst_26771;
var inst_26748 = inst_26770;
var inst_26749 = inst_26772;
var inst_26750 = (0);
var state_26807__$1 = (function (){var statearr_26842 = state_26807;
(statearr_26842[(9)] = inst_26750);

(statearr_26842[(11)] = inst_26748);

(statearr_26842[(20)] = inst_26747);

(statearr_26842[(21)] = inst_26749);

return statearr_26842;
})();
var statearr_26843_26915 = state_26807__$1;
(statearr_26843_26915[(2)] = null);

(statearr_26843_26915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (41))){
var inst_26766 = (state_26807[(25)]);
var inst_26782 = (state_26807[(2)]);
var inst_26783 = cljs.core.next.call(null,inst_26766);
var inst_26747 = inst_26783;
var inst_26748 = null;
var inst_26749 = (0);
var inst_26750 = (0);
var state_26807__$1 = (function (){var statearr_26844 = state_26807;
(statearr_26844[(9)] = inst_26750);

(statearr_26844[(27)] = inst_26782);

(statearr_26844[(11)] = inst_26748);

(statearr_26844[(20)] = inst_26747);

(statearr_26844[(21)] = inst_26749);

return statearr_26844;
})();
var statearr_26845_26916 = state_26807__$1;
(statearr_26845_26916[(2)] = null);

(statearr_26845_26916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (43))){
var state_26807__$1 = state_26807;
var statearr_26846_26917 = state_26807__$1;
(statearr_26846_26917[(2)] = null);

(statearr_26846_26917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (29))){
var inst_26791 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26847_26918 = state_26807__$1;
(statearr_26847_26918[(2)] = inst_26791);

(statearr_26847_26918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (44))){
var inst_26800 = (state_26807[(2)]);
var state_26807__$1 = (function (){var statearr_26848 = state_26807;
(statearr_26848[(28)] = inst_26800);

return statearr_26848;
})();
var statearr_26849_26919 = state_26807__$1;
(statearr_26849_26919[(2)] = null);

(statearr_26849_26919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (6))){
var inst_26739 = (state_26807[(29)]);
var inst_26738 = cljs.core.deref.call(null,cs);
var inst_26739__$1 = cljs.core.keys.call(null,inst_26738);
var inst_26740 = cljs.core.count.call(null,inst_26739__$1);
var inst_26741 = cljs.core.reset_BANG_.call(null,dctr,inst_26740);
var inst_26746 = cljs.core.seq.call(null,inst_26739__$1);
var inst_26747 = inst_26746;
var inst_26748 = null;
var inst_26749 = (0);
var inst_26750 = (0);
var state_26807__$1 = (function (){var statearr_26850 = state_26807;
(statearr_26850[(9)] = inst_26750);

(statearr_26850[(30)] = inst_26741);

(statearr_26850[(11)] = inst_26748);

(statearr_26850[(29)] = inst_26739__$1);

(statearr_26850[(20)] = inst_26747);

(statearr_26850[(21)] = inst_26749);

return statearr_26850;
})();
var statearr_26851_26920 = state_26807__$1;
(statearr_26851_26920[(2)] = null);

(statearr_26851_26920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (28))){
var inst_26766 = (state_26807[(25)]);
var inst_26747 = (state_26807[(20)]);
var inst_26766__$1 = cljs.core.seq.call(null,inst_26747);
var state_26807__$1 = (function (){var statearr_26852 = state_26807;
(statearr_26852[(25)] = inst_26766__$1);

return statearr_26852;
})();
if(inst_26766__$1){
var statearr_26853_26921 = state_26807__$1;
(statearr_26853_26921[(1)] = (33));

} else {
var statearr_26854_26922 = state_26807__$1;
(statearr_26854_26922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (25))){
var inst_26750 = (state_26807[(9)]);
var inst_26749 = (state_26807[(21)]);
var inst_26752 = (inst_26750 < inst_26749);
var inst_26753 = inst_26752;
var state_26807__$1 = state_26807;
if(cljs.core.truth_(inst_26753)){
var statearr_26855_26923 = state_26807__$1;
(statearr_26855_26923[(1)] = (27));

} else {
var statearr_26856_26924 = state_26807__$1;
(statearr_26856_26924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (34))){
var state_26807__$1 = state_26807;
var statearr_26857_26925 = state_26807__$1;
(statearr_26857_26925[(2)] = null);

(statearr_26857_26925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (17))){
var state_26807__$1 = state_26807;
var statearr_26858_26926 = state_26807__$1;
(statearr_26858_26926[(2)] = null);

(statearr_26858_26926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (3))){
var inst_26805 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26807__$1,inst_26805);
} else {
if((state_val_26808 === (12))){
var inst_26734 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26859_26927 = state_26807__$1;
(statearr_26859_26927[(2)] = inst_26734);

(statearr_26859_26927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (2))){
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(4),ch);
} else {
if((state_val_26808 === (23))){
var state_26807__$1 = state_26807;
var statearr_26860_26928 = state_26807__$1;
(statearr_26860_26928[(2)] = null);

(statearr_26860_26928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (35))){
var inst_26789 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26861_26929 = state_26807__$1;
(statearr_26861_26929[(2)] = inst_26789);

(statearr_26861_26929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (19))){
var inst_26708 = (state_26807[(7)]);
var inst_26712 = cljs.core.chunk_first.call(null,inst_26708);
var inst_26713 = cljs.core.chunk_rest.call(null,inst_26708);
var inst_26714 = cljs.core.count.call(null,inst_26712);
var inst_26688 = inst_26713;
var inst_26689 = inst_26712;
var inst_26690 = inst_26714;
var inst_26691 = (0);
var state_26807__$1 = (function (){var statearr_26862 = state_26807;
(statearr_26862[(13)] = inst_26691);

(statearr_26862[(14)] = inst_26690);

(statearr_26862[(16)] = inst_26689);

(statearr_26862[(17)] = inst_26688);

return statearr_26862;
})();
var statearr_26863_26930 = state_26807__$1;
(statearr_26863_26930[(2)] = null);

(statearr_26863_26930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (11))){
var inst_26708 = (state_26807[(7)]);
var inst_26688 = (state_26807[(17)]);
var inst_26708__$1 = cljs.core.seq.call(null,inst_26688);
var state_26807__$1 = (function (){var statearr_26864 = state_26807;
(statearr_26864[(7)] = inst_26708__$1);

return statearr_26864;
})();
if(inst_26708__$1){
var statearr_26865_26931 = state_26807__$1;
(statearr_26865_26931[(1)] = (16));

} else {
var statearr_26866_26932 = state_26807__$1;
(statearr_26866_26932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (9))){
var inst_26736 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26867_26933 = state_26807__$1;
(statearr_26867_26933[(2)] = inst_26736);

(statearr_26867_26933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (5))){
var inst_26686 = cljs.core.deref.call(null,cs);
var inst_26687 = cljs.core.seq.call(null,inst_26686);
var inst_26688 = inst_26687;
var inst_26689 = null;
var inst_26690 = (0);
var inst_26691 = (0);
var state_26807__$1 = (function (){var statearr_26868 = state_26807;
(statearr_26868[(13)] = inst_26691);

(statearr_26868[(14)] = inst_26690);

(statearr_26868[(16)] = inst_26689);

(statearr_26868[(17)] = inst_26688);

return statearr_26868;
})();
var statearr_26869_26934 = state_26807__$1;
(statearr_26869_26934[(2)] = null);

(statearr_26869_26934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (14))){
var state_26807__$1 = state_26807;
var statearr_26870_26935 = state_26807__$1;
(statearr_26870_26935[(2)] = null);

(statearr_26870_26935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (45))){
var inst_26797 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26871_26936 = state_26807__$1;
(statearr_26871_26936[(2)] = inst_26797);

(statearr_26871_26936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (26))){
var inst_26739 = (state_26807[(29)]);
var inst_26793 = (state_26807[(2)]);
var inst_26794 = cljs.core.seq.call(null,inst_26739);
var state_26807__$1 = (function (){var statearr_26872 = state_26807;
(statearr_26872[(31)] = inst_26793);

return statearr_26872;
})();
if(inst_26794){
var statearr_26873_26937 = state_26807__$1;
(statearr_26873_26937[(1)] = (42));

} else {
var statearr_26874_26938 = state_26807__$1;
(statearr_26874_26938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (16))){
var inst_26708 = (state_26807[(7)]);
var inst_26710 = cljs.core.chunked_seq_QMARK_.call(null,inst_26708);
var state_26807__$1 = state_26807;
if(inst_26710){
var statearr_26875_26939 = state_26807__$1;
(statearr_26875_26939[(1)] = (19));

} else {
var statearr_26876_26940 = state_26807__$1;
(statearr_26876_26940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (38))){
var inst_26786 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26877_26941 = state_26807__$1;
(statearr_26877_26941[(2)] = inst_26786);

(statearr_26877_26941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (30))){
var state_26807__$1 = state_26807;
var statearr_26878_26942 = state_26807__$1;
(statearr_26878_26942[(2)] = null);

(statearr_26878_26942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (10))){
var inst_26691 = (state_26807[(13)]);
var inst_26689 = (state_26807[(16)]);
var inst_26697 = cljs.core._nth.call(null,inst_26689,inst_26691);
var inst_26698 = cljs.core.nth.call(null,inst_26697,(0),null);
var inst_26699 = cljs.core.nth.call(null,inst_26697,(1),null);
var state_26807__$1 = (function (){var statearr_26879 = state_26807;
(statearr_26879[(26)] = inst_26698);

return statearr_26879;
})();
if(cljs.core.truth_(inst_26699)){
var statearr_26880_26943 = state_26807__$1;
(statearr_26880_26943[(1)] = (13));

} else {
var statearr_26881_26944 = state_26807__$1;
(statearr_26881_26944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (18))){
var inst_26732 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26882_26945 = state_26807__$1;
(statearr_26882_26945[(2)] = inst_26732);

(statearr_26882_26945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (42))){
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(45),dchan);
} else {
if((state_val_26808 === (37))){
var inst_26766 = (state_26807[(25)]);
var inst_26775 = (state_26807[(23)]);
var inst_26679 = (state_26807[(12)]);
var inst_26775__$1 = cljs.core.first.call(null,inst_26766);
var inst_26776 = cljs.core.async.put_BANG_.call(null,inst_26775__$1,inst_26679,done);
var state_26807__$1 = (function (){var statearr_26883 = state_26807;
(statearr_26883[(23)] = inst_26775__$1);

return statearr_26883;
})();
if(cljs.core.truth_(inst_26776)){
var statearr_26884_26946 = state_26807__$1;
(statearr_26884_26946[(1)] = (39));

} else {
var statearr_26885_26947 = state_26807__$1;
(statearr_26885_26947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (8))){
var inst_26691 = (state_26807[(13)]);
var inst_26690 = (state_26807[(14)]);
var inst_26693 = (inst_26691 < inst_26690);
var inst_26694 = inst_26693;
var state_26807__$1 = state_26807;
if(cljs.core.truth_(inst_26694)){
var statearr_26886_26948 = state_26807__$1;
(statearr_26886_26948[(1)] = (10));

} else {
var statearr_26887_26949 = state_26807__$1;
(statearr_26887_26949[(1)] = (11));

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
});})(c__19359__auto___26895,cs,m,dchan,dctr,done))
;
return ((function (switch__19294__auto__,c__19359__auto___26895,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19295__auto__ = null;
var cljs$core$async$mult_$_state_machine__19295__auto____0 = (function (){
var statearr_26891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26891[(0)] = cljs$core$async$mult_$_state_machine__19295__auto__);

(statearr_26891[(1)] = (1));

return statearr_26891;
});
var cljs$core$async$mult_$_state_machine__19295__auto____1 = (function (state_26807){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_26807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object)){
var ex__19298__auto__ = e26892;
var statearr_26893_26950 = state_26807;
(statearr_26893_26950[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26951 = state_26807;
state_26807 = G__26951;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19295__auto__ = function(state_26807){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19295__auto____1.call(this,state_26807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19295__auto____0;
cljs$core$async$mult_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19295__auto____1;
return cljs$core$async$mult_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___26895,cs,m,dchan,dctr,done))
})();
var state__19361__auto__ = (function (){var statearr_26894 = f__19360__auto__.call(null);
(statearr_26894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___26895);

return statearr_26894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___26895,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26952 = [];
var len__17337__auto___26955 = arguments.length;
var i__17338__auto___26956 = (0);
while(true){
if((i__17338__auto___26956 < len__17337__auto___26955)){
args26952.push((arguments[i__17338__auto___26956]));

var G__26957 = (i__17338__auto___26956 + (1));
i__17338__auto___26956 = G__26957;
continue;
} else {
}
break;
}

var G__26954 = args26952.length;
switch (G__26954) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26952.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,state_map);
} else {
var m__16935__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,mode);
} else {
var m__16935__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___26969 = arguments.length;
var i__17338__auto___26970 = (0);
while(true){
if((i__17338__auto___26970 < len__17337__auto___26969)){
args__17344__auto__.push((arguments[i__17338__auto___26970]));

var G__26971 = (i__17338__auto___26970 + (1));
i__17338__auto___26970 = G__26971;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((3) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17345__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26963){
var map__26964 = p__26963;
var map__26964__$1 = ((((!((map__26964 == null)))?((((map__26964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var opts = map__26964__$1;
var statearr_26966_26972 = state;
(statearr_26966_26972[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26964,map__26964__$1,opts){
return (function (val){
var statearr_26967_26973 = state;
(statearr_26967_26973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26964,map__26964__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26968_26974 = state;
(statearr_26968_26974[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26959){
var G__26960 = cljs.core.first.call(null,seq26959);
var seq26959__$1 = cljs.core.next.call(null,seq26959);
var G__26961 = cljs.core.first.call(null,seq26959__$1);
var seq26959__$2 = cljs.core.next.call(null,seq26959__$1);
var G__26962 = cljs.core.first.call(null,seq26959__$2);
var seq26959__$3 = cljs.core.next.call(null,seq26959__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26960,G__26961,G__26962,seq26959__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27138 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27139){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27139 = meta27139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27140,meta27139__$1){
var self__ = this;
var _27140__$1 = this;
return (new cljs.core.async.t_cljs$core$async27138(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27139__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27140){
var self__ = this;
var _27140__$1 = this;
return self__.meta27139;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27139","meta27139",-1001149832,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27138";

cljs.core.async.t_cljs$core$async27138.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27138");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27138 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27138(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27139){
return (new cljs.core.async.t_cljs$core$async27138(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27139));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27138(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19359__auto___27301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27238){
var state_val_27239 = (state_27238[(1)]);
if((state_val_27239 === (7))){
var inst_27156 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27240_27302 = state_27238__$1;
(statearr_27240_27302[(2)] = inst_27156);

(statearr_27240_27302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (20))){
var inst_27168 = (state_27238[(7)]);
var state_27238__$1 = state_27238;
var statearr_27241_27303 = state_27238__$1;
(statearr_27241_27303[(2)] = inst_27168);

(statearr_27241_27303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (27))){
var state_27238__$1 = state_27238;
var statearr_27242_27304 = state_27238__$1;
(statearr_27242_27304[(2)] = null);

(statearr_27242_27304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (1))){
var inst_27144 = (state_27238[(8)]);
var inst_27144__$1 = calc_state.call(null);
var inst_27146 = (inst_27144__$1 == null);
var inst_27147 = cljs.core.not.call(null,inst_27146);
var state_27238__$1 = (function (){var statearr_27243 = state_27238;
(statearr_27243[(8)] = inst_27144__$1);

return statearr_27243;
})();
if(inst_27147){
var statearr_27244_27305 = state_27238__$1;
(statearr_27244_27305[(1)] = (2));

} else {
var statearr_27245_27306 = state_27238__$1;
(statearr_27245_27306[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (24))){
var inst_27212 = (state_27238[(9)]);
var inst_27191 = (state_27238[(10)]);
var inst_27198 = (state_27238[(11)]);
var inst_27212__$1 = inst_27191.call(null,inst_27198);
var state_27238__$1 = (function (){var statearr_27246 = state_27238;
(statearr_27246[(9)] = inst_27212__$1);

return statearr_27246;
})();
if(cljs.core.truth_(inst_27212__$1)){
var statearr_27247_27307 = state_27238__$1;
(statearr_27247_27307[(1)] = (29));

} else {
var statearr_27248_27308 = state_27238__$1;
(statearr_27248_27308[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (4))){
var inst_27159 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27159)){
var statearr_27249_27309 = state_27238__$1;
(statearr_27249_27309[(1)] = (8));

} else {
var statearr_27250_27310 = state_27238__$1;
(statearr_27250_27310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (15))){
var inst_27185 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27185)){
var statearr_27251_27311 = state_27238__$1;
(statearr_27251_27311[(1)] = (19));

} else {
var statearr_27252_27312 = state_27238__$1;
(statearr_27252_27312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (21))){
var inst_27190 = (state_27238[(12)]);
var inst_27190__$1 = (state_27238[(2)]);
var inst_27191 = cljs.core.get.call(null,inst_27190__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27192 = cljs.core.get.call(null,inst_27190__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27193 = cljs.core.get.call(null,inst_27190__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27238__$1 = (function (){var statearr_27253 = state_27238;
(statearr_27253[(13)] = inst_27192);

(statearr_27253[(10)] = inst_27191);

(statearr_27253[(12)] = inst_27190__$1);

return statearr_27253;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27238__$1,(22),inst_27193);
} else {
if((state_val_27239 === (31))){
var inst_27220 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27220)){
var statearr_27254_27313 = state_27238__$1;
(statearr_27254_27313[(1)] = (32));

} else {
var statearr_27255_27314 = state_27238__$1;
(statearr_27255_27314[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (32))){
var inst_27197 = (state_27238[(14)]);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27238__$1,(35),out,inst_27197);
} else {
if((state_val_27239 === (33))){
var inst_27190 = (state_27238[(12)]);
var inst_27168 = inst_27190;
var state_27238__$1 = (function (){var statearr_27256 = state_27238;
(statearr_27256[(7)] = inst_27168);

return statearr_27256;
})();
var statearr_27257_27315 = state_27238__$1;
(statearr_27257_27315[(2)] = null);

(statearr_27257_27315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (13))){
var inst_27168 = (state_27238[(7)]);
var inst_27175 = inst_27168.cljs$lang$protocol_mask$partition0$;
var inst_27176 = (inst_27175 & (64));
var inst_27177 = inst_27168.cljs$core$ISeq$;
var inst_27178 = (inst_27176) || (inst_27177);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27178)){
var statearr_27258_27316 = state_27238__$1;
(statearr_27258_27316[(1)] = (16));

} else {
var statearr_27259_27317 = state_27238__$1;
(statearr_27259_27317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (22))){
var inst_27197 = (state_27238[(14)]);
var inst_27198 = (state_27238[(11)]);
var inst_27196 = (state_27238[(2)]);
var inst_27197__$1 = cljs.core.nth.call(null,inst_27196,(0),null);
var inst_27198__$1 = cljs.core.nth.call(null,inst_27196,(1),null);
var inst_27199 = (inst_27197__$1 == null);
var inst_27200 = cljs.core._EQ_.call(null,inst_27198__$1,change);
var inst_27201 = (inst_27199) || (inst_27200);
var state_27238__$1 = (function (){var statearr_27260 = state_27238;
(statearr_27260[(14)] = inst_27197__$1);

(statearr_27260[(11)] = inst_27198__$1);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27201)){
var statearr_27261_27318 = state_27238__$1;
(statearr_27261_27318[(1)] = (23));

} else {
var statearr_27262_27319 = state_27238__$1;
(statearr_27262_27319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (36))){
var inst_27190 = (state_27238[(12)]);
var inst_27168 = inst_27190;
var state_27238__$1 = (function (){var statearr_27263 = state_27238;
(statearr_27263[(7)] = inst_27168);

return statearr_27263;
})();
var statearr_27264_27320 = state_27238__$1;
(statearr_27264_27320[(2)] = null);

(statearr_27264_27320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (29))){
var inst_27212 = (state_27238[(9)]);
var state_27238__$1 = state_27238;
var statearr_27265_27321 = state_27238__$1;
(statearr_27265_27321[(2)] = inst_27212);

(statearr_27265_27321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (6))){
var state_27238__$1 = state_27238;
var statearr_27266_27322 = state_27238__$1;
(statearr_27266_27322[(2)] = false);

(statearr_27266_27322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (28))){
var inst_27208 = (state_27238[(2)]);
var inst_27209 = calc_state.call(null);
var inst_27168 = inst_27209;
var state_27238__$1 = (function (){var statearr_27267 = state_27238;
(statearr_27267[(7)] = inst_27168);

(statearr_27267[(15)] = inst_27208);

return statearr_27267;
})();
var statearr_27268_27323 = state_27238__$1;
(statearr_27268_27323[(2)] = null);

(statearr_27268_27323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (25))){
var inst_27234 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27269_27324 = state_27238__$1;
(statearr_27269_27324[(2)] = inst_27234);

(statearr_27269_27324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (34))){
var inst_27232 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27270_27325 = state_27238__$1;
(statearr_27270_27325[(2)] = inst_27232);

(statearr_27270_27325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (17))){
var state_27238__$1 = state_27238;
var statearr_27271_27326 = state_27238__$1;
(statearr_27271_27326[(2)] = false);

(statearr_27271_27326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (3))){
var state_27238__$1 = state_27238;
var statearr_27272_27327 = state_27238__$1;
(statearr_27272_27327[(2)] = false);

(statearr_27272_27327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (12))){
var inst_27236 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27238__$1,inst_27236);
} else {
if((state_val_27239 === (2))){
var inst_27144 = (state_27238[(8)]);
var inst_27149 = inst_27144.cljs$lang$protocol_mask$partition0$;
var inst_27150 = (inst_27149 & (64));
var inst_27151 = inst_27144.cljs$core$ISeq$;
var inst_27152 = (inst_27150) || (inst_27151);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27152)){
var statearr_27273_27328 = state_27238__$1;
(statearr_27273_27328[(1)] = (5));

} else {
var statearr_27274_27329 = state_27238__$1;
(statearr_27274_27329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (23))){
var inst_27197 = (state_27238[(14)]);
var inst_27203 = (inst_27197 == null);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27203)){
var statearr_27275_27330 = state_27238__$1;
(statearr_27275_27330[(1)] = (26));

} else {
var statearr_27276_27331 = state_27238__$1;
(statearr_27276_27331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (35))){
var inst_27223 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27223)){
var statearr_27277_27332 = state_27238__$1;
(statearr_27277_27332[(1)] = (36));

} else {
var statearr_27278_27333 = state_27238__$1;
(statearr_27278_27333[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (19))){
var inst_27168 = (state_27238[(7)]);
var inst_27187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27168);
var state_27238__$1 = state_27238;
var statearr_27279_27334 = state_27238__$1;
(statearr_27279_27334[(2)] = inst_27187);

(statearr_27279_27334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (11))){
var inst_27168 = (state_27238[(7)]);
var inst_27172 = (inst_27168 == null);
var inst_27173 = cljs.core.not.call(null,inst_27172);
var state_27238__$1 = state_27238;
if(inst_27173){
var statearr_27280_27335 = state_27238__$1;
(statearr_27280_27335[(1)] = (13));

} else {
var statearr_27281_27336 = state_27238__$1;
(statearr_27281_27336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (9))){
var inst_27144 = (state_27238[(8)]);
var state_27238__$1 = state_27238;
var statearr_27282_27337 = state_27238__$1;
(statearr_27282_27337[(2)] = inst_27144);

(statearr_27282_27337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (5))){
var state_27238__$1 = state_27238;
var statearr_27283_27338 = state_27238__$1;
(statearr_27283_27338[(2)] = true);

(statearr_27283_27338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (14))){
var state_27238__$1 = state_27238;
var statearr_27284_27339 = state_27238__$1;
(statearr_27284_27339[(2)] = false);

(statearr_27284_27339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (26))){
var inst_27198 = (state_27238[(11)]);
var inst_27205 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27198);
var state_27238__$1 = state_27238;
var statearr_27285_27340 = state_27238__$1;
(statearr_27285_27340[(2)] = inst_27205);

(statearr_27285_27340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (16))){
var state_27238__$1 = state_27238;
var statearr_27286_27341 = state_27238__$1;
(statearr_27286_27341[(2)] = true);

(statearr_27286_27341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (38))){
var inst_27228 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27287_27342 = state_27238__$1;
(statearr_27287_27342[(2)] = inst_27228);

(statearr_27287_27342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (30))){
var inst_27192 = (state_27238[(13)]);
var inst_27191 = (state_27238[(10)]);
var inst_27198 = (state_27238[(11)]);
var inst_27215 = cljs.core.empty_QMARK_.call(null,inst_27191);
var inst_27216 = inst_27192.call(null,inst_27198);
var inst_27217 = cljs.core.not.call(null,inst_27216);
var inst_27218 = (inst_27215) && (inst_27217);
var state_27238__$1 = state_27238;
var statearr_27288_27343 = state_27238__$1;
(statearr_27288_27343[(2)] = inst_27218);

(statearr_27288_27343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (10))){
var inst_27144 = (state_27238[(8)]);
var inst_27164 = (state_27238[(2)]);
var inst_27165 = cljs.core.get.call(null,inst_27164,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27166 = cljs.core.get.call(null,inst_27164,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27167 = cljs.core.get.call(null,inst_27164,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27168 = inst_27144;
var state_27238__$1 = (function (){var statearr_27289 = state_27238;
(statearr_27289[(16)] = inst_27167);

(statearr_27289[(7)] = inst_27168);

(statearr_27289[(17)] = inst_27166);

(statearr_27289[(18)] = inst_27165);

return statearr_27289;
})();
var statearr_27290_27344 = state_27238__$1;
(statearr_27290_27344[(2)] = null);

(statearr_27290_27344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (18))){
var inst_27182 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27291_27345 = state_27238__$1;
(statearr_27291_27345[(2)] = inst_27182);

(statearr_27291_27345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (37))){
var state_27238__$1 = state_27238;
var statearr_27292_27346 = state_27238__$1;
(statearr_27292_27346[(2)] = null);

(statearr_27292_27346[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (8))){
var inst_27144 = (state_27238[(8)]);
var inst_27161 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27144);
var state_27238__$1 = state_27238;
var statearr_27293_27347 = state_27238__$1;
(statearr_27293_27347[(2)] = inst_27161);

(statearr_27293_27347[(1)] = (10));


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
});})(c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19294__auto__,c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19295__auto__ = null;
var cljs$core$async$mix_$_state_machine__19295__auto____0 = (function (){
var statearr_27297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27297[(0)] = cljs$core$async$mix_$_state_machine__19295__auto__);

(statearr_27297[(1)] = (1));

return statearr_27297;
});
var cljs$core$async$mix_$_state_machine__19295__auto____1 = (function (state_27238){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27298){if((e27298 instanceof Object)){
var ex__19298__auto__ = e27298;
var statearr_27299_27348 = state_27238;
(statearr_27299_27348[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27349 = state_27238;
state_27238 = G__27349;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19295__auto__ = function(state_27238){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19295__auto____1.call(this,state_27238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19295__auto____0;
cljs$core$async$mix_$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19295__auto____1;
return cljs$core$async$mix_$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19361__auto__ = (function (){var statearr_27300 = f__19360__auto__.call(null);
(statearr_27300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27301);

return statearr_27300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27350 = [];
var len__17337__auto___27353 = arguments.length;
var i__17338__auto___27354 = (0);
while(true){
if((i__17338__auto___27354 < len__17337__auto___27353)){
args27350.push((arguments[i__17338__auto___27354]));

var G__27355 = (i__17338__auto___27354 + (1));
i__17338__auto___27354 = G__27355;
continue;
} else {
}
break;
}

var G__27352 = args27350.length;
switch (G__27352) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27350.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27358 = [];
var len__17337__auto___27483 = arguments.length;
var i__17338__auto___27484 = (0);
while(true){
if((i__17338__auto___27484 < len__17337__auto___27483)){
args27358.push((arguments[i__17338__auto___27484]));

var G__27485 = (i__17338__auto___27484 + (1));
i__17338__auto___27484 = G__27485;
continue;
} else {
}
break;
}

var G__27360 = args27358.length;
switch (G__27360) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27358.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16279__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16279__auto__,mults){
return (function (p1__27357_SHARP_){
if(cljs.core.truth_(p1__27357_SHARP_.call(null,topic))){
return p1__27357_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27357_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16279__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27361 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27362){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27362 = meta27362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27363,meta27362__$1){
var self__ = this;
var _27363__$1 = this;
return (new cljs.core.async.t_cljs$core$async27361(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27362__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27363){
var self__ = this;
var _27363__$1 = this;
return self__.meta27362;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27362","meta27362",1465436443,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27361";

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27361");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27361 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27362){
return (new cljs.core.async.t_cljs$core$async27361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27362));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27361(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19359__auto___27487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27487,mults,ensure_mult,p){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27487,mults,ensure_mult,p){
return (function (state_27435){
var state_val_27436 = (state_27435[(1)]);
if((state_val_27436 === (7))){
var inst_27431 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27437_27488 = state_27435__$1;
(statearr_27437_27488[(2)] = inst_27431);

(statearr_27437_27488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (20))){
var state_27435__$1 = state_27435;
var statearr_27438_27489 = state_27435__$1;
(statearr_27438_27489[(2)] = null);

(statearr_27438_27489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (1))){
var state_27435__$1 = state_27435;
var statearr_27439_27490 = state_27435__$1;
(statearr_27439_27490[(2)] = null);

(statearr_27439_27490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (24))){
var inst_27414 = (state_27435[(7)]);
var inst_27423 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27414);
var state_27435__$1 = state_27435;
var statearr_27440_27491 = state_27435__$1;
(statearr_27440_27491[(2)] = inst_27423);

(statearr_27440_27491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (4))){
var inst_27366 = (state_27435[(8)]);
var inst_27366__$1 = (state_27435[(2)]);
var inst_27367 = (inst_27366__$1 == null);
var state_27435__$1 = (function (){var statearr_27441 = state_27435;
(statearr_27441[(8)] = inst_27366__$1);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27367)){
var statearr_27442_27492 = state_27435__$1;
(statearr_27442_27492[(1)] = (5));

} else {
var statearr_27443_27493 = state_27435__$1;
(statearr_27443_27493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (15))){
var inst_27408 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27444_27494 = state_27435__$1;
(statearr_27444_27494[(2)] = inst_27408);

(statearr_27444_27494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (21))){
var inst_27428 = (state_27435[(2)]);
var state_27435__$1 = (function (){var statearr_27445 = state_27435;
(statearr_27445[(9)] = inst_27428);

return statearr_27445;
})();
var statearr_27446_27495 = state_27435__$1;
(statearr_27446_27495[(2)] = null);

(statearr_27446_27495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (13))){
var inst_27390 = (state_27435[(10)]);
var inst_27392 = cljs.core.chunked_seq_QMARK_.call(null,inst_27390);
var state_27435__$1 = state_27435;
if(inst_27392){
var statearr_27447_27496 = state_27435__$1;
(statearr_27447_27496[(1)] = (16));

} else {
var statearr_27448_27497 = state_27435__$1;
(statearr_27448_27497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (22))){
var inst_27420 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
if(cljs.core.truth_(inst_27420)){
var statearr_27449_27498 = state_27435__$1;
(statearr_27449_27498[(1)] = (23));

} else {
var statearr_27450_27499 = state_27435__$1;
(statearr_27450_27499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (6))){
var inst_27414 = (state_27435[(7)]);
var inst_27416 = (state_27435[(11)]);
var inst_27366 = (state_27435[(8)]);
var inst_27414__$1 = topic_fn.call(null,inst_27366);
var inst_27415 = cljs.core.deref.call(null,mults);
var inst_27416__$1 = cljs.core.get.call(null,inst_27415,inst_27414__$1);
var state_27435__$1 = (function (){var statearr_27451 = state_27435;
(statearr_27451[(7)] = inst_27414__$1);

(statearr_27451[(11)] = inst_27416__$1);

return statearr_27451;
})();
if(cljs.core.truth_(inst_27416__$1)){
var statearr_27452_27500 = state_27435__$1;
(statearr_27452_27500[(1)] = (19));

} else {
var statearr_27453_27501 = state_27435__$1;
(statearr_27453_27501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (25))){
var inst_27425 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27454_27502 = state_27435__$1;
(statearr_27454_27502[(2)] = inst_27425);

(statearr_27454_27502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (17))){
var inst_27390 = (state_27435[(10)]);
var inst_27399 = cljs.core.first.call(null,inst_27390);
var inst_27400 = cljs.core.async.muxch_STAR_.call(null,inst_27399);
var inst_27401 = cljs.core.async.close_BANG_.call(null,inst_27400);
var inst_27402 = cljs.core.next.call(null,inst_27390);
var inst_27376 = inst_27402;
var inst_27377 = null;
var inst_27378 = (0);
var inst_27379 = (0);
var state_27435__$1 = (function (){var statearr_27455 = state_27435;
(statearr_27455[(12)] = inst_27376);

(statearr_27455[(13)] = inst_27379);

(statearr_27455[(14)] = inst_27378);

(statearr_27455[(15)] = inst_27401);

(statearr_27455[(16)] = inst_27377);

return statearr_27455;
})();
var statearr_27456_27503 = state_27435__$1;
(statearr_27456_27503[(2)] = null);

(statearr_27456_27503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (3))){
var inst_27433 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27435__$1,inst_27433);
} else {
if((state_val_27436 === (12))){
var inst_27410 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27457_27504 = state_27435__$1;
(statearr_27457_27504[(2)] = inst_27410);

(statearr_27457_27504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (2))){
var state_27435__$1 = state_27435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27435__$1,(4),ch);
} else {
if((state_val_27436 === (23))){
var state_27435__$1 = state_27435;
var statearr_27458_27505 = state_27435__$1;
(statearr_27458_27505[(2)] = null);

(statearr_27458_27505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (19))){
var inst_27416 = (state_27435[(11)]);
var inst_27366 = (state_27435[(8)]);
var inst_27418 = cljs.core.async.muxch_STAR_.call(null,inst_27416);
var state_27435__$1 = state_27435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27435__$1,(22),inst_27418,inst_27366);
} else {
if((state_val_27436 === (11))){
var inst_27376 = (state_27435[(12)]);
var inst_27390 = (state_27435[(10)]);
var inst_27390__$1 = cljs.core.seq.call(null,inst_27376);
var state_27435__$1 = (function (){var statearr_27459 = state_27435;
(statearr_27459[(10)] = inst_27390__$1);

return statearr_27459;
})();
if(inst_27390__$1){
var statearr_27460_27506 = state_27435__$1;
(statearr_27460_27506[(1)] = (13));

} else {
var statearr_27461_27507 = state_27435__$1;
(statearr_27461_27507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (9))){
var inst_27412 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27462_27508 = state_27435__$1;
(statearr_27462_27508[(2)] = inst_27412);

(statearr_27462_27508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (5))){
var inst_27373 = cljs.core.deref.call(null,mults);
var inst_27374 = cljs.core.vals.call(null,inst_27373);
var inst_27375 = cljs.core.seq.call(null,inst_27374);
var inst_27376 = inst_27375;
var inst_27377 = null;
var inst_27378 = (0);
var inst_27379 = (0);
var state_27435__$1 = (function (){var statearr_27463 = state_27435;
(statearr_27463[(12)] = inst_27376);

(statearr_27463[(13)] = inst_27379);

(statearr_27463[(14)] = inst_27378);

(statearr_27463[(16)] = inst_27377);

return statearr_27463;
})();
var statearr_27464_27509 = state_27435__$1;
(statearr_27464_27509[(2)] = null);

(statearr_27464_27509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (14))){
var state_27435__$1 = state_27435;
var statearr_27468_27510 = state_27435__$1;
(statearr_27468_27510[(2)] = null);

(statearr_27468_27510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (16))){
var inst_27390 = (state_27435[(10)]);
var inst_27394 = cljs.core.chunk_first.call(null,inst_27390);
var inst_27395 = cljs.core.chunk_rest.call(null,inst_27390);
var inst_27396 = cljs.core.count.call(null,inst_27394);
var inst_27376 = inst_27395;
var inst_27377 = inst_27394;
var inst_27378 = inst_27396;
var inst_27379 = (0);
var state_27435__$1 = (function (){var statearr_27469 = state_27435;
(statearr_27469[(12)] = inst_27376);

(statearr_27469[(13)] = inst_27379);

(statearr_27469[(14)] = inst_27378);

(statearr_27469[(16)] = inst_27377);

return statearr_27469;
})();
var statearr_27470_27511 = state_27435__$1;
(statearr_27470_27511[(2)] = null);

(statearr_27470_27511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (10))){
var inst_27376 = (state_27435[(12)]);
var inst_27379 = (state_27435[(13)]);
var inst_27378 = (state_27435[(14)]);
var inst_27377 = (state_27435[(16)]);
var inst_27384 = cljs.core._nth.call(null,inst_27377,inst_27379);
var inst_27385 = cljs.core.async.muxch_STAR_.call(null,inst_27384);
var inst_27386 = cljs.core.async.close_BANG_.call(null,inst_27385);
var inst_27387 = (inst_27379 + (1));
var tmp27465 = inst_27376;
var tmp27466 = inst_27378;
var tmp27467 = inst_27377;
var inst_27376__$1 = tmp27465;
var inst_27377__$1 = tmp27467;
var inst_27378__$1 = tmp27466;
var inst_27379__$1 = inst_27387;
var state_27435__$1 = (function (){var statearr_27471 = state_27435;
(statearr_27471[(17)] = inst_27386);

(statearr_27471[(12)] = inst_27376__$1);

(statearr_27471[(13)] = inst_27379__$1);

(statearr_27471[(14)] = inst_27378__$1);

(statearr_27471[(16)] = inst_27377__$1);

return statearr_27471;
})();
var statearr_27472_27512 = state_27435__$1;
(statearr_27472_27512[(2)] = null);

(statearr_27472_27512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (18))){
var inst_27405 = (state_27435[(2)]);
var state_27435__$1 = state_27435;
var statearr_27473_27513 = state_27435__$1;
(statearr_27473_27513[(2)] = inst_27405);

(statearr_27473_27513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27436 === (8))){
var inst_27379 = (state_27435[(13)]);
var inst_27378 = (state_27435[(14)]);
var inst_27381 = (inst_27379 < inst_27378);
var inst_27382 = inst_27381;
var state_27435__$1 = state_27435;
if(cljs.core.truth_(inst_27382)){
var statearr_27474_27514 = state_27435__$1;
(statearr_27474_27514[(1)] = (10));

} else {
var statearr_27475_27515 = state_27435__$1;
(statearr_27475_27515[(1)] = (11));

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
});})(c__19359__auto___27487,mults,ensure_mult,p))
;
return ((function (switch__19294__auto__,c__19359__auto___27487,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27479[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_27435){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__19298__auto__ = e27480;
var statearr_27481_27516 = state_27435;
(statearr_27481_27516[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27517 = state_27435;
state_27435 = G__27517;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_27435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_27435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27487,mults,ensure_mult,p))
})();
var state__19361__auto__ = (function (){var statearr_27482 = f__19360__auto__.call(null);
(statearr_27482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27487);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27487,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27518 = [];
var len__17337__auto___27521 = arguments.length;
var i__17338__auto___27522 = (0);
while(true){
if((i__17338__auto___27522 < len__17337__auto___27521)){
args27518.push((arguments[i__17338__auto___27522]));

var G__27523 = (i__17338__auto___27522 + (1));
i__17338__auto___27522 = G__27523;
continue;
} else {
}
break;
}

var G__27520 = args27518.length;
switch (G__27520) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27518.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27525 = [];
var len__17337__auto___27528 = arguments.length;
var i__17338__auto___27529 = (0);
while(true){
if((i__17338__auto___27529 < len__17337__auto___27528)){
args27525.push((arguments[i__17338__auto___27529]));

var G__27530 = (i__17338__auto___27529 + (1));
i__17338__auto___27529 = G__27530;
continue;
} else {
}
break;
}

var G__27527 = args27525.length;
switch (G__27527) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27525.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27532 = [];
var len__17337__auto___27603 = arguments.length;
var i__17338__auto___27604 = (0);
while(true){
if((i__17338__auto___27604 < len__17337__auto___27603)){
args27532.push((arguments[i__17338__auto___27604]));

var G__27605 = (i__17338__auto___27604 + (1));
i__17338__auto___27604 = G__27605;
continue;
} else {
}
break;
}

var G__27534 = args27532.length;
switch (G__27534) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27532.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19359__auto___27607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27573){
var state_val_27574 = (state_27573[(1)]);
if((state_val_27574 === (7))){
var state_27573__$1 = state_27573;
var statearr_27575_27608 = state_27573__$1;
(statearr_27575_27608[(2)] = null);

(statearr_27575_27608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (1))){
var state_27573__$1 = state_27573;
var statearr_27576_27609 = state_27573__$1;
(statearr_27576_27609[(2)] = null);

(statearr_27576_27609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (4))){
var inst_27537 = (state_27573[(7)]);
var inst_27539 = (inst_27537 < cnt);
var state_27573__$1 = state_27573;
if(cljs.core.truth_(inst_27539)){
var statearr_27577_27610 = state_27573__$1;
(statearr_27577_27610[(1)] = (6));

} else {
var statearr_27578_27611 = state_27573__$1;
(statearr_27578_27611[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (15))){
var inst_27569 = (state_27573[(2)]);
var state_27573__$1 = state_27573;
var statearr_27579_27612 = state_27573__$1;
(statearr_27579_27612[(2)] = inst_27569);

(statearr_27579_27612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (13))){
var inst_27562 = cljs.core.async.close_BANG_.call(null,out);
var state_27573__$1 = state_27573;
var statearr_27580_27613 = state_27573__$1;
(statearr_27580_27613[(2)] = inst_27562);

(statearr_27580_27613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (6))){
var state_27573__$1 = state_27573;
var statearr_27581_27614 = state_27573__$1;
(statearr_27581_27614[(2)] = null);

(statearr_27581_27614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (3))){
var inst_27571 = (state_27573[(2)]);
var state_27573__$1 = state_27573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27573__$1,inst_27571);
} else {
if((state_val_27574 === (12))){
var inst_27559 = (state_27573[(8)]);
var inst_27559__$1 = (state_27573[(2)]);
var inst_27560 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27559__$1);
var state_27573__$1 = (function (){var statearr_27582 = state_27573;
(statearr_27582[(8)] = inst_27559__$1);

return statearr_27582;
})();
if(cljs.core.truth_(inst_27560)){
var statearr_27583_27615 = state_27573__$1;
(statearr_27583_27615[(1)] = (13));

} else {
var statearr_27584_27616 = state_27573__$1;
(statearr_27584_27616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (2))){
var inst_27536 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27537 = (0);
var state_27573__$1 = (function (){var statearr_27585 = state_27573;
(statearr_27585[(7)] = inst_27537);

(statearr_27585[(9)] = inst_27536);

return statearr_27585;
})();
var statearr_27586_27617 = state_27573__$1;
(statearr_27586_27617[(2)] = null);

(statearr_27586_27617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (11))){
var inst_27537 = (state_27573[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27573,(10),Object,null,(9));
var inst_27546 = chs__$1.call(null,inst_27537);
var inst_27547 = done.call(null,inst_27537);
var inst_27548 = cljs.core.async.take_BANG_.call(null,inst_27546,inst_27547);
var state_27573__$1 = state_27573;
var statearr_27587_27618 = state_27573__$1;
(statearr_27587_27618[(2)] = inst_27548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (9))){
var inst_27537 = (state_27573[(7)]);
var inst_27550 = (state_27573[(2)]);
var inst_27551 = (inst_27537 + (1));
var inst_27537__$1 = inst_27551;
var state_27573__$1 = (function (){var statearr_27588 = state_27573;
(statearr_27588[(7)] = inst_27537__$1);

(statearr_27588[(10)] = inst_27550);

return statearr_27588;
})();
var statearr_27589_27619 = state_27573__$1;
(statearr_27589_27619[(2)] = null);

(statearr_27589_27619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (5))){
var inst_27557 = (state_27573[(2)]);
var state_27573__$1 = (function (){var statearr_27590 = state_27573;
(statearr_27590[(11)] = inst_27557);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27573__$1,(12),dchan);
} else {
if((state_val_27574 === (14))){
var inst_27559 = (state_27573[(8)]);
var inst_27564 = cljs.core.apply.call(null,f,inst_27559);
var state_27573__$1 = state_27573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27573__$1,(16),out,inst_27564);
} else {
if((state_val_27574 === (16))){
var inst_27566 = (state_27573[(2)]);
var state_27573__$1 = (function (){var statearr_27591 = state_27573;
(statearr_27591[(12)] = inst_27566);

return statearr_27591;
})();
var statearr_27592_27620 = state_27573__$1;
(statearr_27592_27620[(2)] = null);

(statearr_27592_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (10))){
var inst_27541 = (state_27573[(2)]);
var inst_27542 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27573__$1 = (function (){var statearr_27593 = state_27573;
(statearr_27593[(13)] = inst_27541);

return statearr_27593;
})();
var statearr_27594_27621 = state_27573__$1;
(statearr_27594_27621[(2)] = inst_27542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27574 === (8))){
var inst_27555 = (state_27573[(2)]);
var state_27573__$1 = state_27573;
var statearr_27595_27622 = state_27573__$1;
(statearr_27595_27622[(2)] = inst_27555);

(statearr_27595_27622[(1)] = (5));


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
});})(c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19294__auto__,c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_27573){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__19298__auto__ = e27600;
var statearr_27601_27623 = state_27573;
(statearr_27601_27623[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27624 = state_27573;
state_27573 = G__27624;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_27573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_27573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19361__auto__ = (function (){var statearr_27602 = f__19360__auto__.call(null);
(statearr_27602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27607);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27607,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27626 = [];
var len__17337__auto___27682 = arguments.length;
var i__17338__auto___27683 = (0);
while(true){
if((i__17338__auto___27683 < len__17337__auto___27682)){
args27626.push((arguments[i__17338__auto___27683]));

var G__27684 = (i__17338__auto___27683 + (1));
i__17338__auto___27683 = G__27684;
continue;
} else {
}
break;
}

var G__27628 = args27626.length;
switch (G__27628) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27626.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___27686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27686,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27686,out){
return (function (state_27658){
var state_val_27659 = (state_27658[(1)]);
if((state_val_27659 === (7))){
var inst_27638 = (state_27658[(7)]);
var inst_27637 = (state_27658[(8)]);
var inst_27637__$1 = (state_27658[(2)]);
var inst_27638__$1 = cljs.core.nth.call(null,inst_27637__$1,(0),null);
var inst_27639 = cljs.core.nth.call(null,inst_27637__$1,(1),null);
var inst_27640 = (inst_27638__$1 == null);
var state_27658__$1 = (function (){var statearr_27660 = state_27658;
(statearr_27660[(9)] = inst_27639);

(statearr_27660[(7)] = inst_27638__$1);

(statearr_27660[(8)] = inst_27637__$1);

return statearr_27660;
})();
if(cljs.core.truth_(inst_27640)){
var statearr_27661_27687 = state_27658__$1;
(statearr_27661_27687[(1)] = (8));

} else {
var statearr_27662_27688 = state_27658__$1;
(statearr_27662_27688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (1))){
var inst_27629 = cljs.core.vec.call(null,chs);
var inst_27630 = inst_27629;
var state_27658__$1 = (function (){var statearr_27663 = state_27658;
(statearr_27663[(10)] = inst_27630);

return statearr_27663;
})();
var statearr_27664_27689 = state_27658__$1;
(statearr_27664_27689[(2)] = null);

(statearr_27664_27689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (4))){
var inst_27630 = (state_27658[(10)]);
var state_27658__$1 = state_27658;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27658__$1,(7),inst_27630);
} else {
if((state_val_27659 === (6))){
var inst_27654 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27665_27690 = state_27658__$1;
(statearr_27665_27690[(2)] = inst_27654);

(statearr_27665_27690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (3))){
var inst_27656 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27658__$1,inst_27656);
} else {
if((state_val_27659 === (2))){
var inst_27630 = (state_27658[(10)]);
var inst_27632 = cljs.core.count.call(null,inst_27630);
var inst_27633 = (inst_27632 > (0));
var state_27658__$1 = state_27658;
if(cljs.core.truth_(inst_27633)){
var statearr_27667_27691 = state_27658__$1;
(statearr_27667_27691[(1)] = (4));

} else {
var statearr_27668_27692 = state_27658__$1;
(statearr_27668_27692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (11))){
var inst_27630 = (state_27658[(10)]);
var inst_27647 = (state_27658[(2)]);
var tmp27666 = inst_27630;
var inst_27630__$1 = tmp27666;
var state_27658__$1 = (function (){var statearr_27669 = state_27658;
(statearr_27669[(11)] = inst_27647);

(statearr_27669[(10)] = inst_27630__$1);

return statearr_27669;
})();
var statearr_27670_27693 = state_27658__$1;
(statearr_27670_27693[(2)] = null);

(statearr_27670_27693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (9))){
var inst_27638 = (state_27658[(7)]);
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27658__$1,(11),out,inst_27638);
} else {
if((state_val_27659 === (5))){
var inst_27652 = cljs.core.async.close_BANG_.call(null,out);
var state_27658__$1 = state_27658;
var statearr_27671_27694 = state_27658__$1;
(statearr_27671_27694[(2)] = inst_27652);

(statearr_27671_27694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (10))){
var inst_27650 = (state_27658[(2)]);
var state_27658__$1 = state_27658;
var statearr_27672_27695 = state_27658__$1;
(statearr_27672_27695[(2)] = inst_27650);

(statearr_27672_27695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27659 === (8))){
var inst_27639 = (state_27658[(9)]);
var inst_27630 = (state_27658[(10)]);
var inst_27638 = (state_27658[(7)]);
var inst_27637 = (state_27658[(8)]);
var inst_27642 = (function (){var cs = inst_27630;
var vec__27635 = inst_27637;
var v = inst_27638;
var c = inst_27639;
return ((function (cs,vec__27635,v,c,inst_27639,inst_27630,inst_27638,inst_27637,state_val_27659,c__19359__auto___27686,out){
return (function (p1__27625_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27625_SHARP_);
});
;})(cs,vec__27635,v,c,inst_27639,inst_27630,inst_27638,inst_27637,state_val_27659,c__19359__auto___27686,out))
})();
var inst_27643 = cljs.core.filterv.call(null,inst_27642,inst_27630);
var inst_27630__$1 = inst_27643;
var state_27658__$1 = (function (){var statearr_27673 = state_27658;
(statearr_27673[(10)] = inst_27630__$1);

return statearr_27673;
})();
var statearr_27674_27696 = state_27658__$1;
(statearr_27674_27696[(2)] = null);

(statearr_27674_27696[(1)] = (2));


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
});})(c__19359__auto___27686,out))
;
return ((function (switch__19294__auto__,c__19359__auto___27686,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_27678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27678[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_27678[(1)] = (1));

return statearr_27678;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_27658){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27679){if((e27679 instanceof Object)){
var ex__19298__auto__ = e27679;
var statearr_27680_27697 = state_27658;
(statearr_27680_27697[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27698 = state_27658;
state_27658 = G__27698;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_27658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_27658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27686,out))
})();
var state__19361__auto__ = (function (){var statearr_27681 = f__19360__auto__.call(null);
(statearr_27681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27686);

return statearr_27681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27686,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27699 = [];
var len__17337__auto___27748 = arguments.length;
var i__17338__auto___27749 = (0);
while(true){
if((i__17338__auto___27749 < len__17337__auto___27748)){
args27699.push((arguments[i__17338__auto___27749]));

var G__27750 = (i__17338__auto___27749 + (1));
i__17338__auto___27749 = G__27750;
continue;
} else {
}
break;
}

var G__27701 = args27699.length;
switch (G__27701) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27699.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___27752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27752,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27752,out){
return (function (state_27725){
var state_val_27726 = (state_27725[(1)]);
if((state_val_27726 === (7))){
var inst_27707 = (state_27725[(7)]);
var inst_27707__$1 = (state_27725[(2)]);
var inst_27708 = (inst_27707__$1 == null);
var inst_27709 = cljs.core.not.call(null,inst_27708);
var state_27725__$1 = (function (){var statearr_27727 = state_27725;
(statearr_27727[(7)] = inst_27707__$1);

return statearr_27727;
})();
if(inst_27709){
var statearr_27728_27753 = state_27725__$1;
(statearr_27728_27753[(1)] = (8));

} else {
var statearr_27729_27754 = state_27725__$1;
(statearr_27729_27754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (1))){
var inst_27702 = (0);
var state_27725__$1 = (function (){var statearr_27730 = state_27725;
(statearr_27730[(8)] = inst_27702);

return statearr_27730;
})();
var statearr_27731_27755 = state_27725__$1;
(statearr_27731_27755[(2)] = null);

(statearr_27731_27755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (4))){
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(7),ch);
} else {
if((state_val_27726 === (6))){
var inst_27720 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27732_27756 = state_27725__$1;
(statearr_27732_27756[(2)] = inst_27720);

(statearr_27732_27756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (3))){
var inst_27722 = (state_27725[(2)]);
var inst_27723 = cljs.core.async.close_BANG_.call(null,out);
var state_27725__$1 = (function (){var statearr_27733 = state_27725;
(statearr_27733[(9)] = inst_27722);

return statearr_27733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27725__$1,inst_27723);
} else {
if((state_val_27726 === (2))){
var inst_27702 = (state_27725[(8)]);
var inst_27704 = (inst_27702 < n);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27704)){
var statearr_27734_27757 = state_27725__$1;
(statearr_27734_27757[(1)] = (4));

} else {
var statearr_27735_27758 = state_27725__$1;
(statearr_27735_27758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (11))){
var inst_27702 = (state_27725[(8)]);
var inst_27712 = (state_27725[(2)]);
var inst_27713 = (inst_27702 + (1));
var inst_27702__$1 = inst_27713;
var state_27725__$1 = (function (){var statearr_27736 = state_27725;
(statearr_27736[(8)] = inst_27702__$1);

(statearr_27736[(10)] = inst_27712);

return statearr_27736;
})();
var statearr_27737_27759 = state_27725__$1;
(statearr_27737_27759[(2)] = null);

(statearr_27737_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (9))){
var state_27725__$1 = state_27725;
var statearr_27738_27760 = state_27725__$1;
(statearr_27738_27760[(2)] = null);

(statearr_27738_27760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (5))){
var state_27725__$1 = state_27725;
var statearr_27739_27761 = state_27725__$1;
(statearr_27739_27761[(2)] = null);

(statearr_27739_27761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (10))){
var inst_27717 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27740_27762 = state_27725__$1;
(statearr_27740_27762[(2)] = inst_27717);

(statearr_27740_27762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (8))){
var inst_27707 = (state_27725[(7)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27725__$1,(11),out,inst_27707);
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
});})(c__19359__auto___27752,out))
;
return ((function (switch__19294__auto__,c__19359__auto___27752,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_27744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27744[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_27744[(1)] = (1));

return statearr_27744;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_27725){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27745){if((e27745 instanceof Object)){
var ex__19298__auto__ = e27745;
var statearr_27746_27763 = state_27725;
(statearr_27746_27763[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27725;
state_27725 = G__27764;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_27725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_27725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27752,out))
})();
var state__19361__auto__ = (function (){var statearr_27747 = f__19360__auto__.call(null);
(statearr_27747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27752);

return statearr_27747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27752,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27772 = (function (map_LT_,f,ch,meta27773){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27773 = meta27773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27774,meta27773__$1){
var self__ = this;
var _27774__$1 = this;
return (new cljs.core.async.t_cljs$core$async27772(self__.map_LT_,self__.f,self__.ch,meta27773__$1));
});

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27774){
var self__ = this;
var _27774__$1 = this;
return self__.meta27773;
});

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27775 = (function (map_LT_,f,ch,meta27773,_,fn1,meta27776){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27773 = meta27773;
this._ = _;
this.fn1 = fn1;
this.meta27776 = meta27776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27777,meta27776__$1){
var self__ = this;
var _27777__$1 = this;
return (new cljs.core.async.t_cljs$core$async27775(self__.map_LT_,self__.f,self__.ch,self__.meta27773,self__._,self__.fn1,meta27776__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27777){
var self__ = this;
var _27777__$1 = this;
return self__.meta27776;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27765_SHARP_){
return f1.call(null,(((p1__27765_SHARP_ == null))?null:self__.f.call(null,p1__27765_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27775.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27773","meta27773",2042291929,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27772","cljs.core.async/t_cljs$core$async27772",-393379563,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27776","meta27776",-1547748407,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27775";

cljs.core.async.t_cljs$core$async27775.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27775");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27775 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27775(map_LT___$1,f__$1,ch__$1,meta27773__$1,___$2,fn1__$1,meta27776){
return (new cljs.core.async.t_cljs$core$async27775(map_LT___$1,f__$1,ch__$1,meta27773__$1,___$2,fn1__$1,meta27776));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27775(self__.map_LT_,self__.f,self__.ch,self__.meta27773,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16267__auto__ = ret;
if(cljs.core.truth_(and__16267__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16267__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27773","meta27773",2042291929,null)], null);
});

cljs.core.async.t_cljs$core$async27772.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27772";

cljs.core.async.t_cljs$core$async27772.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27772");
});

cljs.core.async.__GT_t_cljs$core$async27772 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27772(map_LT___$1,f__$1,ch__$1,meta27773){
return (new cljs.core.async.t_cljs$core$async27772(map_LT___$1,f__$1,ch__$1,meta27773));
});

}

return (new cljs.core.async.t_cljs$core$async27772(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27781 = (function (map_GT_,f,ch,meta27782){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27782 = meta27782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27783,meta27782__$1){
var self__ = this;
var _27783__$1 = this;
return (new cljs.core.async.t_cljs$core$async27781(self__.map_GT_,self__.f,self__.ch,meta27782__$1));
});

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27783){
var self__ = this;
var _27783__$1 = this;
return self__.meta27782;
});

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27782","meta27782",2103760842,null)], null);
});

cljs.core.async.t_cljs$core$async27781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27781";

cljs.core.async.t_cljs$core$async27781.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27781");
});

cljs.core.async.__GT_t_cljs$core$async27781 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27781(map_GT___$1,f__$1,ch__$1,meta27782){
return (new cljs.core.async.t_cljs$core$async27781(map_GT___$1,f__$1,ch__$1,meta27782));
});

}

return (new cljs.core.async.t_cljs$core$async27781(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27787 = (function (filter_GT_,p,ch,meta27788){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27788 = meta27788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27789,meta27788__$1){
var self__ = this;
var _27789__$1 = this;
return (new cljs.core.async.t_cljs$core$async27787(self__.filter_GT_,self__.p,self__.ch,meta27788__$1));
});

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27789){
var self__ = this;
var _27789__$1 = this;
return self__.meta27788;
});

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27788","meta27788",445825032,null)], null);
});

cljs.core.async.t_cljs$core$async27787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27787";

cljs.core.async.t_cljs$core$async27787.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27787");
});

cljs.core.async.__GT_t_cljs$core$async27787 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27787(filter_GT___$1,p__$1,ch__$1,meta27788){
return (new cljs.core.async.t_cljs$core$async27787(filter_GT___$1,p__$1,ch__$1,meta27788));
});

}

return (new cljs.core.async.t_cljs$core$async27787(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27790 = [];
var len__17337__auto___27834 = arguments.length;
var i__17338__auto___27835 = (0);
while(true){
if((i__17338__auto___27835 < len__17337__auto___27834)){
args27790.push((arguments[i__17338__auto___27835]));

var G__27836 = (i__17338__auto___27835 + (1));
i__17338__auto___27835 = G__27836;
continue;
} else {
}
break;
}

var G__27792 = args27790.length;
switch (G__27792) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27790.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___27838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___27838,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___27838,out){
return (function (state_27813){
var state_val_27814 = (state_27813[(1)]);
if((state_val_27814 === (7))){
var inst_27809 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27815_27839 = state_27813__$1;
(statearr_27815_27839[(2)] = inst_27809);

(statearr_27815_27839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (1))){
var state_27813__$1 = state_27813;
var statearr_27816_27840 = state_27813__$1;
(statearr_27816_27840[(2)] = null);

(statearr_27816_27840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (4))){
var inst_27795 = (state_27813[(7)]);
var inst_27795__$1 = (state_27813[(2)]);
var inst_27796 = (inst_27795__$1 == null);
var state_27813__$1 = (function (){var statearr_27817 = state_27813;
(statearr_27817[(7)] = inst_27795__$1);

return statearr_27817;
})();
if(cljs.core.truth_(inst_27796)){
var statearr_27818_27841 = state_27813__$1;
(statearr_27818_27841[(1)] = (5));

} else {
var statearr_27819_27842 = state_27813__$1;
(statearr_27819_27842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (6))){
var inst_27795 = (state_27813[(7)]);
var inst_27800 = p.call(null,inst_27795);
var state_27813__$1 = state_27813;
if(cljs.core.truth_(inst_27800)){
var statearr_27820_27843 = state_27813__$1;
(statearr_27820_27843[(1)] = (8));

} else {
var statearr_27821_27844 = state_27813__$1;
(statearr_27821_27844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (3))){
var inst_27811 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27813__$1,inst_27811);
} else {
if((state_val_27814 === (2))){
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27813__$1,(4),ch);
} else {
if((state_val_27814 === (11))){
var inst_27803 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27822_27845 = state_27813__$1;
(statearr_27822_27845[(2)] = inst_27803);

(statearr_27822_27845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (9))){
var state_27813__$1 = state_27813;
var statearr_27823_27846 = state_27813__$1;
(statearr_27823_27846[(2)] = null);

(statearr_27823_27846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (5))){
var inst_27798 = cljs.core.async.close_BANG_.call(null,out);
var state_27813__$1 = state_27813;
var statearr_27824_27847 = state_27813__$1;
(statearr_27824_27847[(2)] = inst_27798);

(statearr_27824_27847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (10))){
var inst_27806 = (state_27813[(2)]);
var state_27813__$1 = (function (){var statearr_27825 = state_27813;
(statearr_27825[(8)] = inst_27806);

return statearr_27825;
})();
var statearr_27826_27848 = state_27813__$1;
(statearr_27826_27848[(2)] = null);

(statearr_27826_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (8))){
var inst_27795 = (state_27813[(7)]);
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27813__$1,(11),out,inst_27795);
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
});})(c__19359__auto___27838,out))
;
return ((function (switch__19294__auto__,c__19359__auto___27838,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_27830 = [null,null,null,null,null,null,null,null,null];
(statearr_27830[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_27830[(1)] = (1));

return statearr_27830;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_27813){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_27813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object)){
var ex__19298__auto__ = e27831;
var statearr_27832_27849 = state_27813;
(statearr_27832_27849[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27850 = state_27813;
state_27813 = G__27850;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_27813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_27813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___27838,out))
})();
var state__19361__auto__ = (function (){var statearr_27833 = f__19360__auto__.call(null);
(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___27838);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___27838,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27851 = [];
var len__17337__auto___27854 = arguments.length;
var i__17338__auto___27855 = (0);
while(true){
if((i__17338__auto___27855 < len__17337__auto___27854)){
args27851.push((arguments[i__17338__auto___27855]));

var G__27856 = (i__17338__auto___27855 + (1));
i__17338__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19359__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto__){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto__){
return (function (state_28023){
var state_val_28024 = (state_28023[(1)]);
if((state_val_28024 === (7))){
var inst_28019 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28025_28066 = state_28023__$1;
(statearr_28025_28066[(2)] = inst_28019);

(statearr_28025_28066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (20))){
var inst_27989 = (state_28023[(7)]);
var inst_28000 = (state_28023[(2)]);
var inst_28001 = cljs.core.next.call(null,inst_27989);
var inst_27975 = inst_28001;
var inst_27976 = null;
var inst_27977 = (0);
var inst_27978 = (0);
var state_28023__$1 = (function (){var statearr_28026 = state_28023;
(statearr_28026[(8)] = inst_28000);

(statearr_28026[(9)] = inst_27978);

(statearr_28026[(10)] = inst_27976);

(statearr_28026[(11)] = inst_27977);

(statearr_28026[(12)] = inst_27975);

return statearr_28026;
})();
var statearr_28027_28067 = state_28023__$1;
(statearr_28027_28067[(2)] = null);

(statearr_28027_28067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (1))){
var state_28023__$1 = state_28023;
var statearr_28028_28068 = state_28023__$1;
(statearr_28028_28068[(2)] = null);

(statearr_28028_28068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (4))){
var inst_27964 = (state_28023[(13)]);
var inst_27964__$1 = (state_28023[(2)]);
var inst_27965 = (inst_27964__$1 == null);
var state_28023__$1 = (function (){var statearr_28029 = state_28023;
(statearr_28029[(13)] = inst_27964__$1);

return statearr_28029;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28030_28069 = state_28023__$1;
(statearr_28030_28069[(1)] = (5));

} else {
var statearr_28031_28070 = state_28023__$1;
(statearr_28031_28070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (15))){
var state_28023__$1 = state_28023;
var statearr_28035_28071 = state_28023__$1;
(statearr_28035_28071[(2)] = null);

(statearr_28035_28071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (21))){
var state_28023__$1 = state_28023;
var statearr_28036_28072 = state_28023__$1;
(statearr_28036_28072[(2)] = null);

(statearr_28036_28072[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (13))){
var inst_27978 = (state_28023[(9)]);
var inst_27976 = (state_28023[(10)]);
var inst_27977 = (state_28023[(11)]);
var inst_27975 = (state_28023[(12)]);
var inst_27985 = (state_28023[(2)]);
var inst_27986 = (inst_27978 + (1));
var tmp28032 = inst_27976;
var tmp28033 = inst_27977;
var tmp28034 = inst_27975;
var inst_27975__$1 = tmp28034;
var inst_27976__$1 = tmp28032;
var inst_27977__$1 = tmp28033;
var inst_27978__$1 = inst_27986;
var state_28023__$1 = (function (){var statearr_28037 = state_28023;
(statearr_28037[(9)] = inst_27978__$1);

(statearr_28037[(10)] = inst_27976__$1);

(statearr_28037[(14)] = inst_27985);

(statearr_28037[(11)] = inst_27977__$1);

(statearr_28037[(12)] = inst_27975__$1);

return statearr_28037;
})();
var statearr_28038_28073 = state_28023__$1;
(statearr_28038_28073[(2)] = null);

(statearr_28038_28073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (22))){
var state_28023__$1 = state_28023;
var statearr_28039_28074 = state_28023__$1;
(statearr_28039_28074[(2)] = null);

(statearr_28039_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (6))){
var inst_27964 = (state_28023[(13)]);
var inst_27973 = f.call(null,inst_27964);
var inst_27974 = cljs.core.seq.call(null,inst_27973);
var inst_27975 = inst_27974;
var inst_27976 = null;
var inst_27977 = (0);
var inst_27978 = (0);
var state_28023__$1 = (function (){var statearr_28040 = state_28023;
(statearr_28040[(9)] = inst_27978);

(statearr_28040[(10)] = inst_27976);

(statearr_28040[(11)] = inst_27977);

(statearr_28040[(12)] = inst_27975);

return statearr_28040;
})();
var statearr_28041_28075 = state_28023__$1;
(statearr_28041_28075[(2)] = null);

(statearr_28041_28075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (17))){
var inst_27989 = (state_28023[(7)]);
var inst_27993 = cljs.core.chunk_first.call(null,inst_27989);
var inst_27994 = cljs.core.chunk_rest.call(null,inst_27989);
var inst_27995 = cljs.core.count.call(null,inst_27993);
var inst_27975 = inst_27994;
var inst_27976 = inst_27993;
var inst_27977 = inst_27995;
var inst_27978 = (0);
var state_28023__$1 = (function (){var statearr_28042 = state_28023;
(statearr_28042[(9)] = inst_27978);

(statearr_28042[(10)] = inst_27976);

(statearr_28042[(11)] = inst_27977);

(statearr_28042[(12)] = inst_27975);

return statearr_28042;
})();
var statearr_28043_28076 = state_28023__$1;
(statearr_28043_28076[(2)] = null);

(statearr_28043_28076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (3))){
var inst_28021 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28023__$1,inst_28021);
} else {
if((state_val_28024 === (12))){
var inst_28009 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28044_28077 = state_28023__$1;
(statearr_28044_28077[(2)] = inst_28009);

(statearr_28044_28077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (2))){
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28023__$1,(4),in$);
} else {
if((state_val_28024 === (23))){
var inst_28017 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28045_28078 = state_28023__$1;
(statearr_28045_28078[(2)] = inst_28017);

(statearr_28045_28078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (19))){
var inst_28004 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28046_28079 = state_28023__$1;
(statearr_28046_28079[(2)] = inst_28004);

(statearr_28046_28079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (11))){
var inst_27989 = (state_28023[(7)]);
var inst_27975 = (state_28023[(12)]);
var inst_27989__$1 = cljs.core.seq.call(null,inst_27975);
var state_28023__$1 = (function (){var statearr_28047 = state_28023;
(statearr_28047[(7)] = inst_27989__$1);

return statearr_28047;
})();
if(inst_27989__$1){
var statearr_28048_28080 = state_28023__$1;
(statearr_28048_28080[(1)] = (14));

} else {
var statearr_28049_28081 = state_28023__$1;
(statearr_28049_28081[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (9))){
var inst_28011 = (state_28023[(2)]);
var inst_28012 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28023__$1 = (function (){var statearr_28050 = state_28023;
(statearr_28050[(15)] = inst_28011);

return statearr_28050;
})();
if(cljs.core.truth_(inst_28012)){
var statearr_28051_28082 = state_28023__$1;
(statearr_28051_28082[(1)] = (21));

} else {
var statearr_28052_28083 = state_28023__$1;
(statearr_28052_28083[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (5))){
var inst_27967 = cljs.core.async.close_BANG_.call(null,out);
var state_28023__$1 = state_28023;
var statearr_28053_28084 = state_28023__$1;
(statearr_28053_28084[(2)] = inst_27967);

(statearr_28053_28084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (14))){
var inst_27989 = (state_28023[(7)]);
var inst_27991 = cljs.core.chunked_seq_QMARK_.call(null,inst_27989);
var state_28023__$1 = state_28023;
if(inst_27991){
var statearr_28054_28085 = state_28023__$1;
(statearr_28054_28085[(1)] = (17));

} else {
var statearr_28055_28086 = state_28023__$1;
(statearr_28055_28086[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (16))){
var inst_28007 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28056_28087 = state_28023__$1;
(statearr_28056_28087[(2)] = inst_28007);

(statearr_28056_28087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (10))){
var inst_27978 = (state_28023[(9)]);
var inst_27976 = (state_28023[(10)]);
var inst_27983 = cljs.core._nth.call(null,inst_27976,inst_27978);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(13),out,inst_27983);
} else {
if((state_val_28024 === (18))){
var inst_27989 = (state_28023[(7)]);
var inst_27998 = cljs.core.first.call(null,inst_27989);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(20),out,inst_27998);
} else {
if((state_val_28024 === (8))){
var inst_27978 = (state_28023[(9)]);
var inst_27977 = (state_28023[(11)]);
var inst_27980 = (inst_27978 < inst_27977);
var inst_27981 = inst_27980;
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_27981)){
var statearr_28057_28088 = state_28023__$1;
(statearr_28057_28088[(1)] = (10));

} else {
var statearr_28058_28089 = state_28023__$1;
(statearr_28058_28089[(1)] = (11));

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
});})(c__19359__auto__))
;
return ((function (switch__19294__auto__,c__19359__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____0 = (function (){
var statearr_28062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28062[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__);

(statearr_28062[(1)] = (1));

return statearr_28062;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____1 = (function (state_28023){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_28023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e28063){if((e28063 instanceof Object)){
var ex__19298__auto__ = e28063;
var statearr_28064_28090 = state_28023;
(statearr_28064_28090[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28091 = state_28023;
state_28023 = G__28091;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__ = function(state_28023){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____1.call(this,state_28023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19295__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto__))
})();
var state__19361__auto__ = (function (){var statearr_28065 = f__19360__auto__.call(null);
(statearr_28065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto__);

return statearr_28065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto__))
);

return c__19359__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28092 = [];
var len__17337__auto___28095 = arguments.length;
var i__17338__auto___28096 = (0);
while(true){
if((i__17338__auto___28096 < len__17337__auto___28095)){
args28092.push((arguments[i__17338__auto___28096]));

var G__28097 = (i__17338__auto___28096 + (1));
i__17338__auto___28096 = G__28097;
continue;
} else {
}
break;
}

var G__28094 = args28092.length;
switch (G__28094) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28092.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28099 = [];
var len__17337__auto___28102 = arguments.length;
var i__17338__auto___28103 = (0);
while(true){
if((i__17338__auto___28103 < len__17337__auto___28102)){
args28099.push((arguments[i__17338__auto___28103]));

var G__28104 = (i__17338__auto___28103 + (1));
i__17338__auto___28103 = G__28104;
continue;
} else {
}
break;
}

var G__28101 = args28099.length;
switch (G__28101) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28099.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28106 = [];
var len__17337__auto___28157 = arguments.length;
var i__17338__auto___28158 = (0);
while(true){
if((i__17338__auto___28158 < len__17337__auto___28157)){
args28106.push((arguments[i__17338__auto___28158]));

var G__28159 = (i__17338__auto___28158 + (1));
i__17338__auto___28158 = G__28159;
continue;
} else {
}
break;
}

var G__28108 = args28106.length;
switch (G__28108) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28106.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___28161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___28161,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___28161,out){
return (function (state_28132){
var state_val_28133 = (state_28132[(1)]);
if((state_val_28133 === (7))){
var inst_28127 = (state_28132[(2)]);
var state_28132__$1 = state_28132;
var statearr_28134_28162 = state_28132__$1;
(statearr_28134_28162[(2)] = inst_28127);

(statearr_28134_28162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (1))){
var inst_28109 = null;
var state_28132__$1 = (function (){var statearr_28135 = state_28132;
(statearr_28135[(7)] = inst_28109);

return statearr_28135;
})();
var statearr_28136_28163 = state_28132__$1;
(statearr_28136_28163[(2)] = null);

(statearr_28136_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (4))){
var inst_28112 = (state_28132[(8)]);
var inst_28112__$1 = (state_28132[(2)]);
var inst_28113 = (inst_28112__$1 == null);
var inst_28114 = cljs.core.not.call(null,inst_28113);
var state_28132__$1 = (function (){var statearr_28137 = state_28132;
(statearr_28137[(8)] = inst_28112__$1);

return statearr_28137;
})();
if(inst_28114){
var statearr_28138_28164 = state_28132__$1;
(statearr_28138_28164[(1)] = (5));

} else {
var statearr_28139_28165 = state_28132__$1;
(statearr_28139_28165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (6))){
var state_28132__$1 = state_28132;
var statearr_28140_28166 = state_28132__$1;
(statearr_28140_28166[(2)] = null);

(statearr_28140_28166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (3))){
var inst_28129 = (state_28132[(2)]);
var inst_28130 = cljs.core.async.close_BANG_.call(null,out);
var state_28132__$1 = (function (){var statearr_28141 = state_28132;
(statearr_28141[(9)] = inst_28129);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28132__$1,inst_28130);
} else {
if((state_val_28133 === (2))){
var state_28132__$1 = state_28132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28132__$1,(4),ch);
} else {
if((state_val_28133 === (11))){
var inst_28112 = (state_28132[(8)]);
var inst_28121 = (state_28132[(2)]);
var inst_28109 = inst_28112;
var state_28132__$1 = (function (){var statearr_28142 = state_28132;
(statearr_28142[(10)] = inst_28121);

(statearr_28142[(7)] = inst_28109);

return statearr_28142;
})();
var statearr_28143_28167 = state_28132__$1;
(statearr_28143_28167[(2)] = null);

(statearr_28143_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (9))){
var inst_28112 = (state_28132[(8)]);
var state_28132__$1 = state_28132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28132__$1,(11),out,inst_28112);
} else {
if((state_val_28133 === (5))){
var inst_28112 = (state_28132[(8)]);
var inst_28109 = (state_28132[(7)]);
var inst_28116 = cljs.core._EQ_.call(null,inst_28112,inst_28109);
var state_28132__$1 = state_28132;
if(inst_28116){
var statearr_28145_28168 = state_28132__$1;
(statearr_28145_28168[(1)] = (8));

} else {
var statearr_28146_28169 = state_28132__$1;
(statearr_28146_28169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (10))){
var inst_28124 = (state_28132[(2)]);
var state_28132__$1 = state_28132;
var statearr_28147_28170 = state_28132__$1;
(statearr_28147_28170[(2)] = inst_28124);

(statearr_28147_28170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28133 === (8))){
var inst_28109 = (state_28132[(7)]);
var tmp28144 = inst_28109;
var inst_28109__$1 = tmp28144;
var state_28132__$1 = (function (){var statearr_28148 = state_28132;
(statearr_28148[(7)] = inst_28109__$1);

return statearr_28148;
})();
var statearr_28149_28171 = state_28132__$1;
(statearr_28149_28171[(2)] = null);

(statearr_28149_28171[(1)] = (2));


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
});})(c__19359__auto___28161,out))
;
return ((function (switch__19294__auto__,c__19359__auto___28161,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_28132){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_28132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__19298__auto__ = e28154;
var statearr_28155_28172 = state_28132;
(statearr_28155_28172[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28173 = state_28132;
state_28132 = G__28173;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_28132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_28132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___28161,out))
})();
var state__19361__auto__ = (function (){var statearr_28156 = f__19360__auto__.call(null);
(statearr_28156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___28161);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___28161,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28174 = [];
var len__17337__auto___28244 = arguments.length;
var i__17338__auto___28245 = (0);
while(true){
if((i__17338__auto___28245 < len__17337__auto___28244)){
args28174.push((arguments[i__17338__auto___28245]));

var G__28246 = (i__17338__auto___28245 + (1));
i__17338__auto___28245 = G__28246;
continue;
} else {
}
break;
}

var G__28176 = args28174.length;
switch (G__28176) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28174.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___28248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___28248,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___28248,out){
return (function (state_28214){
var state_val_28215 = (state_28214[(1)]);
if((state_val_28215 === (7))){
var inst_28210 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28216_28249 = state_28214__$1;
(statearr_28216_28249[(2)] = inst_28210);

(statearr_28216_28249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (1))){
var inst_28177 = (new Array(n));
var inst_28178 = inst_28177;
var inst_28179 = (0);
var state_28214__$1 = (function (){var statearr_28217 = state_28214;
(statearr_28217[(7)] = inst_28178);

(statearr_28217[(8)] = inst_28179);

return statearr_28217;
})();
var statearr_28218_28250 = state_28214__$1;
(statearr_28218_28250[(2)] = null);

(statearr_28218_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (4))){
var inst_28182 = (state_28214[(9)]);
var inst_28182__$1 = (state_28214[(2)]);
var inst_28183 = (inst_28182__$1 == null);
var inst_28184 = cljs.core.not.call(null,inst_28183);
var state_28214__$1 = (function (){var statearr_28219 = state_28214;
(statearr_28219[(9)] = inst_28182__$1);

return statearr_28219;
})();
if(inst_28184){
var statearr_28220_28251 = state_28214__$1;
(statearr_28220_28251[(1)] = (5));

} else {
var statearr_28221_28252 = state_28214__$1;
(statearr_28221_28252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (15))){
var inst_28204 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28222_28253 = state_28214__$1;
(statearr_28222_28253[(2)] = inst_28204);

(statearr_28222_28253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (13))){
var state_28214__$1 = state_28214;
var statearr_28223_28254 = state_28214__$1;
(statearr_28223_28254[(2)] = null);

(statearr_28223_28254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (6))){
var inst_28179 = (state_28214[(8)]);
var inst_28200 = (inst_28179 > (0));
var state_28214__$1 = state_28214;
if(cljs.core.truth_(inst_28200)){
var statearr_28224_28255 = state_28214__$1;
(statearr_28224_28255[(1)] = (12));

} else {
var statearr_28225_28256 = state_28214__$1;
(statearr_28225_28256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (3))){
var inst_28212 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28214__$1,inst_28212);
} else {
if((state_val_28215 === (12))){
var inst_28178 = (state_28214[(7)]);
var inst_28202 = cljs.core.vec.call(null,inst_28178);
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28214__$1,(15),out,inst_28202);
} else {
if((state_val_28215 === (2))){
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28214__$1,(4),ch);
} else {
if((state_val_28215 === (11))){
var inst_28194 = (state_28214[(2)]);
var inst_28195 = (new Array(n));
var inst_28178 = inst_28195;
var inst_28179 = (0);
var state_28214__$1 = (function (){var statearr_28226 = state_28214;
(statearr_28226[(7)] = inst_28178);

(statearr_28226[(8)] = inst_28179);

(statearr_28226[(10)] = inst_28194);

return statearr_28226;
})();
var statearr_28227_28257 = state_28214__$1;
(statearr_28227_28257[(2)] = null);

(statearr_28227_28257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (9))){
var inst_28178 = (state_28214[(7)]);
var inst_28192 = cljs.core.vec.call(null,inst_28178);
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28214__$1,(11),out,inst_28192);
} else {
if((state_val_28215 === (5))){
var inst_28178 = (state_28214[(7)]);
var inst_28179 = (state_28214[(8)]);
var inst_28187 = (state_28214[(11)]);
var inst_28182 = (state_28214[(9)]);
var inst_28186 = (inst_28178[inst_28179] = inst_28182);
var inst_28187__$1 = (inst_28179 + (1));
var inst_28188 = (inst_28187__$1 < n);
var state_28214__$1 = (function (){var statearr_28228 = state_28214;
(statearr_28228[(12)] = inst_28186);

(statearr_28228[(11)] = inst_28187__$1);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28188)){
var statearr_28229_28258 = state_28214__$1;
(statearr_28229_28258[(1)] = (8));

} else {
var statearr_28230_28259 = state_28214__$1;
(statearr_28230_28259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (14))){
var inst_28207 = (state_28214[(2)]);
var inst_28208 = cljs.core.async.close_BANG_.call(null,out);
var state_28214__$1 = (function (){var statearr_28232 = state_28214;
(statearr_28232[(13)] = inst_28207);

return statearr_28232;
})();
var statearr_28233_28260 = state_28214__$1;
(statearr_28233_28260[(2)] = inst_28208);

(statearr_28233_28260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (10))){
var inst_28198 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28234_28261 = state_28214__$1;
(statearr_28234_28261[(2)] = inst_28198);

(statearr_28234_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (8))){
var inst_28178 = (state_28214[(7)]);
var inst_28187 = (state_28214[(11)]);
var tmp28231 = inst_28178;
var inst_28178__$1 = tmp28231;
var inst_28179 = inst_28187;
var state_28214__$1 = (function (){var statearr_28235 = state_28214;
(statearr_28235[(7)] = inst_28178__$1);

(statearr_28235[(8)] = inst_28179);

return statearr_28235;
})();
var statearr_28236_28262 = state_28214__$1;
(statearr_28236_28262[(2)] = null);

(statearr_28236_28262[(1)] = (2));


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
});})(c__19359__auto___28248,out))
;
return ((function (switch__19294__auto__,c__19359__auto___28248,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_28214){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_28214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__19298__auto__ = e28241;
var statearr_28242_28263 = state_28214;
(statearr_28242_28263[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28264 = state_28214;
state_28214 = G__28264;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_28214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_28214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___28248,out))
})();
var state__19361__auto__ = (function (){var statearr_28243 = f__19360__auto__.call(null);
(statearr_28243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___28248);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___28248,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28265 = [];
var len__17337__auto___28339 = arguments.length;
var i__17338__auto___28340 = (0);
while(true){
if((i__17338__auto___28340 < len__17337__auto___28339)){
args28265.push((arguments[i__17338__auto___28340]));

var G__28341 = (i__17338__auto___28340 + (1));
i__17338__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28267 = args28265.length;
switch (G__28267) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28265.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19359__auto___28343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19359__auto___28343,out){
return (function (){
var f__19360__auto__ = (function (){var switch__19294__auto__ = ((function (c__19359__auto___28343,out){
return (function (state_28309){
var state_val_28310 = (state_28309[(1)]);
if((state_val_28310 === (7))){
var inst_28305 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28311_28344 = state_28309__$1;
(statearr_28311_28344[(2)] = inst_28305);

(statearr_28311_28344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (1))){
var inst_28268 = [];
var inst_28269 = inst_28268;
var inst_28270 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28309__$1 = (function (){var statearr_28312 = state_28309;
(statearr_28312[(7)] = inst_28269);

(statearr_28312[(8)] = inst_28270);

return statearr_28312;
})();
var statearr_28313_28345 = state_28309__$1;
(statearr_28313_28345[(2)] = null);

(statearr_28313_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (4))){
var inst_28273 = (state_28309[(9)]);
var inst_28273__$1 = (state_28309[(2)]);
var inst_28274 = (inst_28273__$1 == null);
var inst_28275 = cljs.core.not.call(null,inst_28274);
var state_28309__$1 = (function (){var statearr_28314 = state_28309;
(statearr_28314[(9)] = inst_28273__$1);

return statearr_28314;
})();
if(inst_28275){
var statearr_28315_28346 = state_28309__$1;
(statearr_28315_28346[(1)] = (5));

} else {
var statearr_28316_28347 = state_28309__$1;
(statearr_28316_28347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (15))){
var inst_28299 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28317_28348 = state_28309__$1;
(statearr_28317_28348[(2)] = inst_28299);

(statearr_28317_28348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (13))){
var state_28309__$1 = state_28309;
var statearr_28318_28349 = state_28309__$1;
(statearr_28318_28349[(2)] = null);

(statearr_28318_28349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (6))){
var inst_28269 = (state_28309[(7)]);
var inst_28294 = inst_28269.length;
var inst_28295 = (inst_28294 > (0));
var state_28309__$1 = state_28309;
if(cljs.core.truth_(inst_28295)){
var statearr_28319_28350 = state_28309__$1;
(statearr_28319_28350[(1)] = (12));

} else {
var statearr_28320_28351 = state_28309__$1;
(statearr_28320_28351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (3))){
var inst_28307 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else {
if((state_val_28310 === (12))){
var inst_28269 = (state_28309[(7)]);
var inst_28297 = cljs.core.vec.call(null,inst_28269);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(15),out,inst_28297);
} else {
if((state_val_28310 === (2))){
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(4),ch);
} else {
if((state_val_28310 === (11))){
var inst_28273 = (state_28309[(9)]);
var inst_28277 = (state_28309[(10)]);
var inst_28287 = (state_28309[(2)]);
var inst_28288 = [];
var inst_28289 = inst_28288.push(inst_28273);
var inst_28269 = inst_28288;
var inst_28270 = inst_28277;
var state_28309__$1 = (function (){var statearr_28321 = state_28309;
(statearr_28321[(7)] = inst_28269);

(statearr_28321[(11)] = inst_28287);

(statearr_28321[(12)] = inst_28289);

(statearr_28321[(8)] = inst_28270);

return statearr_28321;
})();
var statearr_28322_28352 = state_28309__$1;
(statearr_28322_28352[(2)] = null);

(statearr_28322_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (9))){
var inst_28269 = (state_28309[(7)]);
var inst_28285 = cljs.core.vec.call(null,inst_28269);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(11),out,inst_28285);
} else {
if((state_val_28310 === (5))){
var inst_28273 = (state_28309[(9)]);
var inst_28270 = (state_28309[(8)]);
var inst_28277 = (state_28309[(10)]);
var inst_28277__$1 = f.call(null,inst_28273);
var inst_28278 = cljs.core._EQ_.call(null,inst_28277__$1,inst_28270);
var inst_28279 = cljs.core.keyword_identical_QMARK_.call(null,inst_28270,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28280 = (inst_28278) || (inst_28279);
var state_28309__$1 = (function (){var statearr_28323 = state_28309;
(statearr_28323[(10)] = inst_28277__$1);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28280)){
var statearr_28324_28353 = state_28309__$1;
(statearr_28324_28353[(1)] = (8));

} else {
var statearr_28325_28354 = state_28309__$1;
(statearr_28325_28354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (14))){
var inst_28302 = (state_28309[(2)]);
var inst_28303 = cljs.core.async.close_BANG_.call(null,out);
var state_28309__$1 = (function (){var statearr_28327 = state_28309;
(statearr_28327[(13)] = inst_28302);

return statearr_28327;
})();
var statearr_28328_28355 = state_28309__$1;
(statearr_28328_28355[(2)] = inst_28303);

(statearr_28328_28355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (10))){
var inst_28292 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28329_28356 = state_28309__$1;
(statearr_28329_28356[(2)] = inst_28292);

(statearr_28329_28356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (8))){
var inst_28269 = (state_28309[(7)]);
var inst_28273 = (state_28309[(9)]);
var inst_28277 = (state_28309[(10)]);
var inst_28282 = inst_28269.push(inst_28273);
var tmp28326 = inst_28269;
var inst_28269__$1 = tmp28326;
var inst_28270 = inst_28277;
var state_28309__$1 = (function (){var statearr_28330 = state_28309;
(statearr_28330[(7)] = inst_28269__$1);

(statearr_28330[(8)] = inst_28270);

(statearr_28330[(14)] = inst_28282);

return statearr_28330;
})();
var statearr_28331_28357 = state_28309__$1;
(statearr_28331_28357[(2)] = null);

(statearr_28331_28357[(1)] = (2));


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
});})(c__19359__auto___28343,out))
;
return ((function (switch__19294__auto__,c__19359__auto___28343,out){
return (function() {
var cljs$core$async$state_machine__19295__auto__ = null;
var cljs$core$async$state_machine__19295__auto____0 = (function (){
var statearr_28335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28335[(0)] = cljs$core$async$state_machine__19295__auto__);

(statearr_28335[(1)] = (1));

return statearr_28335;
});
var cljs$core$async$state_machine__19295__auto____1 = (function (state_28309){
while(true){
var ret_value__19296__auto__ = (function (){try{while(true){
var result__19297__auto__ = switch__19294__auto__.call(null,state_28309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19297__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object)){
var ex__19298__auto__ = e28336;
var statearr_28337_28358 = state_28309;
(statearr_28337_28358[(5)] = ex__19298__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28359 = state_28309;
state_28309 = G__28359;
continue;
} else {
return ret_value__19296__auto__;
}
break;
}
});
cljs$core$async$state_machine__19295__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19295__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19295__auto____0;
cljs$core$async$state_machine__19295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19295__auto____1;
return cljs$core$async$state_machine__19295__auto__;
})()
;})(switch__19294__auto__,c__19359__auto___28343,out))
})();
var state__19361__auto__ = (function (){var statearr_28338 = f__19360__auto__.call(null);
(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19359__auto___28343);

return statearr_28338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19361__auto__);
});})(c__19359__auto___28343,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1445391157795