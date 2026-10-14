(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function du(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ee={},Ss=[],ii=()=>{},gd=()=>!1,Fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oa=n=>n.startsWith("onUpdate:"),nn=Object.assign,pu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Um=Object.prototype.hasOwnProperty,ge=(n,t)=>Um.call(n,t),qt=Array.isArray,$i=n=>po(n)==="[object Map]",Ci=n=>po(n)==="[object Set]",sf=n=>po(n)==="[object Date]",ne=n=>typeof n=="function",Ue=n=>typeof n=="string",oi=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",_d=n=>(Se(n)||ne(n))&&ne(n.then)&&ne(n.catch),vd=Object.prototype.toString,po=n=>vd.call(n),Im=n=>po(n).slice(8,-1),xd=n=>po(n)==="[object Object]",mu=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xr=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Nm=/-\w/g,On=Ba(n=>n.replace(Nm,t=>t.slice(1).toUpperCase())),Fm=/\B([A-Z])/g,ns=Ba(n=>n.replace(Fm,"-$1").toLowerCase()),yd=Ba(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=Ba(n=>n?`on${yd(n)}`:""),ti=(n,t)=>!Object.is(n,t),ra=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Md=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ka=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let rf;const za=()=>rf||(rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ri(n){if(qt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ue(i)?zm(i):Ri(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ue(n)||Se(n))return n}const Om=/;(?![^(]*\))/g,Bm=/:([^]+)/,km=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function zm(n){const t={};return n.replace(km,e=>e.startsWith("/*")?"":e).split(Om).forEach(e=>{if(e){const i=e.split(Bm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ie(n){let t="";if(Ue(n))t=n;else if(qt(n))for(let e=0;e<n.length;e++){const i=Ie(n[e]);i&&(t+=i+" ")}else if(Se(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=du(Hm);function Sd(n){return!!n||n===""}function Gm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Hn(n[s],t[s],e);return i}function of(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Hn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Wm(n,t,e){let i=$i(n),s=$i(t);if(i||s||(i=Ci(n),s=Ci(t),i||s))return i&&s?of(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Hn(n[a],t[a],e))return!1}return String(n)===String(t)}function af(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Hn(n,t,e){if(n===t)return!0;let i=sf(n),s=sf(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=oi(n),s=oi(t),i||s?n===t:(i=qt(n),s=qt(t),i||s?i&&s?af(n,t,e,Gm):!1:(i=Se(n),s=Se(t),i||s?!i||!s?!1:af(n,t,e,Wm):String(n)===String(t))))}function gu(n,t){return n.findIndex(e=>Hn(e,t))}const bd=n=>!!(n&&n.__v_isRef===!0),Lt=n=>Ue(n)?n:n==null?"":qt(n)||Se(n)&&(n.toString===vd||!ne(n.toString))?bd(n)?Lt(n.value):JSON.stringify(n,Ed,2):String(n),Ed=(n,t)=>bd(t)?Ed(n,t.value):$i(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[nl(i,r)+" =>"]=s,e),{})}:Ci(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>nl(e))}:oi(t)?nl(t):Se(t)&&!qt(t)&&!xd(t)?String(t):t,nl=(n,t="")=>{var e;return oi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class Xm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&qe&&(qe.active?(this.parent=qe,this.index=(qe.scopes||(qe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=qe;try{return qe=this,t()}finally{qe=e}}}on(){++this._on===1&&(this.prevScope=qe,qe=this)}off(){if(this._on>0&&--this._on===0){if(qe===this)qe=this.prevScope;else{let t=qe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $m(){return qe}let Te;const il=new WeakSet;class wd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&(qe.active?qe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,il.has(this)&&(il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lf(this),Cd(this);const t=Te,e=Bn;Te=this,Bn=!0;try{return this.fn()}finally{Rd(this),Te=t,Bn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)xu(t);this.deps=this.depsTail=void 0,lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tc(this)&&this.run()}get dirty(){return tc(this)}}let Td=0,$r,qr;function Ad(n,t=!1){if(n.flags|=8,t){n.next=qr,qr=n;return}n.next=$r,$r=n}function _u(){Td++}function vu(){if(--Td>0)return;if(qr){let t=qr;for(qr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;$r;){let t=$r;for($r=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Cd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),xu(i),qm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function tc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Pd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===to)||(n.globalVersion=to,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tc(n))))return;n.flags|=2;const t=n.dep,e=Te,i=Bn;Te=n,Bn=!0;try{Cd(n);const s=n.fn(n._value);(t.version===0||ti(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Te=e,Bn=i,Rd(n),n.flags&=-3}}function xu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)xu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function qm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Bn=!0;const Ld=[];function Pi(){Ld.push(Bn),Bn=!1}function Li(){const n=Ld.pop();Bn=n===void 0?!0:n}function lf(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Te;Te=void 0;try{t()}finally{Te=e}}}let to=0;class Ym{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!Bn||Te===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Te)e=this.activeLink=new Ym(Te,this),Te.deps?(e.prevDep=Te.depsTail,Te.depsTail.nextDep=e,Te.depsTail=e):Te.deps=Te.depsTail=e,Dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Te.depsTail,e.nextDep=void 0,Te.depsTail.nextDep=e,Te.depsTail=e,Te.deps===e&&(Te.deps=i)}return e}trigger(t){this.version++,to++,this.notify(t)}notify(t){_u();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{vu()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Dd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ec=new WeakMap,Ts=Symbol(""),nc=Symbol(""),eo=Symbol("");function Je(n,t,e){if(Bn&&Te){let i=ec.get(n);i||ec.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new yu),s.map=i,s.key=e),s.track()}}function xi(n,t,e,i,s,r){const o=ec.get(n);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(_u(),t==="clear")o.forEach(a);else{const l=qt(n),c=l&&mu(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===eo||!oi(d)&&d>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(eo)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ts)),$i(n)&&a(o.get(nc)));break;case"delete":l||(a(o.get(Ts)),$i(n)&&a(o.get(nc)));break;case"set":$i(n)&&a(o.get(Ts));break}}vu()}function Ns(n){const t=me(n);return t===n||(Je(t,"iterate",eo),Cn(n))?t:ai(n)?qi(n)?t.map(e=>Zi(Rn(e))):t.map(Zi):t.map(Rn)}function Ha(n){return Je(n=me(n),"iterate",eo),n}function Zn(n,t){return ai(n)?Zi(qi(n)?Rn(t):t):Rn(t)}const Km={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Ns(this).concat(...n.map(t=>qt(t)?Ns(t):t))},entries(){return sl(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,t){return ui(this,"every",n,t,void 0,arguments)},filter(n,t){return ui(this,"filter",n,t,e=>e.map(i=>Zn(this,i)),arguments)},find(n,t){return ui(this,"find",n,t,e=>Zn(this,e),arguments)},findIndex(n,t){return ui(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ui(this,"findLast",n,t,e=>Zn(this,e),arguments)},findLastIndex(n,t){return ui(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ui(this,"forEach",n,t,void 0,arguments)},includes(...n){return rl(this,"includes",n)},indexOf(...n){return rl(this,"indexOf",n)},join(n){return Ns(this).join(n)},lastIndexOf(...n){return rl(this,"lastIndexOf",n)},map(n,t){return ui(this,"map",n,t,void 0,arguments)},pop(){return Rr(this,"pop")},push(...n){return Rr(this,"push",n)},reduce(n,...t){return cf(this,"reduce",n,t)},reduceRight(n,...t){return cf(this,"reduceRight",n,t)},shift(){return Rr(this,"shift")},some(n,t){return ui(this,"some",n,t,void 0,arguments)},splice(...n){return Rr(this,"splice",n)},toReversed(){return Ns(this).toReversed()},toSorted(n){return Ns(this).toSorted(n)},toSpliced(...n){return Ns(this).toSpliced(...n)},unshift(...n){return Rr(this,"unshift",n)},values(){return sl(this,"values",n=>Zn(this,n))}};function sl(n,t,e){const i=Ha(n),s=i[t]();return i!==n&&!Cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const jm=Array.prototype;function ui(n,t,e,i,s,r){const o=Ha(n),a=o!==n&&!Cn(n),l=o[t];if(l!==jm[t]){const f=l.apply(n,r);return a?Rn(f):f}let c=e;o!==n&&(a?c=function(f,d){return e.call(this,Zn(n,f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function cf(n,t,e,i){const s=Ha(n),r=s!==n&&!Cn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Zn(n,c)),e.call(this,c,Zn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](o,...i);return a?Zn(n,l):l}function rl(n,t,e){const i=me(n);Je(i,"iterate",eo);const s=i[t](...e);return(s===-1||s===!1)&&bu(e[0])?(e[0]=me(e[0]),i[t](...e)):s}function Rr(n,t,e=[]){Pi(),_u();const i=me(n)[t].apply(n,e);return vu(),Li(),i}const Zm=du("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(oi));function Jm(n){oi(n)||(n=String(n));const t=me(this);return Je(t,"has",n),t.hasOwnProperty(n)}class Id{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?lg:Bd:r?Od:Fd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=qt(t);if(!s){let l;if(o&&(l=Km[e]))return l;if(e==="hasOwnProperty")return Jm}const a=Reflect.get(t,e,tn(t)?t:i);if((oi(e)?Ud.has(e):Zm(e))||(s||Je(t,"get",e),r))return a;if(tn(a)){const l=o&&mu(e)?a:a.value;return s&&Se(l)?sc(l):l}return Se(a)?s?sc(a):kn(a):a}}class Nd extends Id{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=qt(t)&&mu(e);if(!this._isShallow){const c=ai(r);if(!Cn(i)&&!ai(i)&&(r=me(r),i=me(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ge(t,e),l=Reflect.set(t,e,i,tn(t)?t:s);return t===me(s)&&l&&(a?ti(i,r)&&xi(t,"set",e,i):xi(t,"add",e,i)),l}deleteProperty(t,e){const i=ge(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&xi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!oi(e)||!Ud.has(e))&&Je(t,"has",e),i}ownKeys(t){return Je(t,"iterate",qt(t)?"length":Ts),Reflect.ownKeys(t)}}class Qm extends Id{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const tg=new Nd,eg=new Qm,ng=new Nd(!0);const ic=n=>n,So=n=>Reflect.getPrototypeOf(n);function ig(n,t,e){return function(...i){const s=this.__v_raw,r=me(s),o=$i(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ic:t?Zi:Rn;return!t&&Je(r,"iterate",l?nc:Ts),nn(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function bo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function sg(n,t){const e={get(s){const r=this.__v_raw,o=me(r),a=me(s);n||(ti(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=So(o),c=t?ic:n?Zi:Rn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Je(me(s),"iterate",Ts),s.size},has(s){const r=this.__v_raw,o=me(r),a=me(s);return n||(ti(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=me(a),c=t?ic:n?Zi:Rn;return!n&&Je(l,"iterate",Ts),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return nn(e,n?{add:bo("add"),set:bo("set"),delete:bo("delete"),clear:bo("clear")}:{add(s){const r=me(this),o=So(r),a=me(s),l=!t&&!Cn(s)&&!ai(s)?a:s;return o.has.call(r,l)||ti(s,l)&&o.has.call(r,s)||ti(a,l)&&o.has.call(r,a)||(r.add(l),xi(r,"add",l,l)),this},set(s,r){!t&&!Cn(r)&&!ai(r)&&(r=me(r));const o=me(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=me(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ti(r,u)&&xi(o,"set",s,r):xi(o,"add",s,r),this},delete(s){const r=me(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=me(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&xi(r,"delete",s,void 0),c},clear(){const s=me(this),r=s.size!==0,o=s.clear();return r&&xi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ig(s,n,t)}),e}function Mu(n,t){const e=sg(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ge(e,s)&&s in i?e:i,s,r)}const rg={get:Mu(!1,!1)},og={get:Mu(!1,!0)},ag={get:Mu(!0,!1)};const Fd=new WeakMap,Od=new WeakMap,Bd=new WeakMap,lg=new WeakMap;function cg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kn(n){return ai(n)?n:Su(n,!1,tg,rg,Fd)}function ug(n){return Su(n,!1,ng,og,Od)}function sc(n){return Su(n,!0,eg,ag,Bd)}function Su(n,t,e,i,s){if(!Se(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=cg(Im(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function qi(n){return ai(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function Cn(n){return!!(n&&n.__v_isShallow)}function bu(n){return n?!!n.__v_raw:!1}function me(n){const t=n&&n.__v_raw;return t?me(t):n}function fg(n){return!ge(n,"__v_skip")&&Object.isExtensible(n)&&Md(n,"__v_skip",!0),n}const Rn=n=>Se(n)?kn(n):n,Zi=n=>Se(n)?sc(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function ee(n){return kd(n,!1)}function hg(n){return kd(n,!0)}function kd(n,t){return tn(n)?n:new dg(n,t)}class dg{constructor(t,e){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:me(t),this._value=e?t:Rn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Cn(t)||ai(t);t=i?t:me(t),ti(t,e)&&(this._rawValue=t,this._value=i?t:Rn(t),this.dep.trigger())}}function ut(n){return tn(n)?n.value:n}const pg={get:(n,t,e)=>t==="__v_raw"?n:ut(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return tn(s)&&!tn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function zd(n){return qi(n)?n:new Proxy(n,pg)}class mg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Ad(this,!0),!0}get value(){const t=this.dep.track();return Pd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gg(n,t,e=!1){let i,s;return ne(n)?i=n:(i=n.get,s=n.set),new mg(i,s,e)}const Eo={},xa=new WeakMap;let _s;function _g(n,t=!1,e=_s){if(e){let i=xa.get(e);i||xa.set(e,i=[]),i.push(n)}}function vg(n,t,e=Ee){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:Cn(y)||s===!1||s===0?yi(y,1):yi(y);let u,f,d,p,g=!1,_=!1;if(tn(n)?(f=()=>n.value,g=Cn(n)):qi(n)?(f=()=>c(n),g=!0):qt(n)?(_=!0,g=n.some(y=>qi(y)||Cn(y)),f=()=>n.map(y=>{if(tn(y))return y.value;if(qi(y))return c(y);if(ne(y))return l?l(y,2):y()})):ne(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){Pi();try{d()}finally{Li()}}const y=_s;_s=u;try{return l?l(n,3,[p]):n(p)}finally{_s=y}}:f=ii,t&&s){const y=f,R=s===!0?1/0:s;f=()=>yi(y(),R)}const m=$m(),h=()=>{u.stop(),m&&m.active&&pu(m.effects,u)};if(r&&t){const y=t;t=(...R)=>{const C=y(...R);return h(),C}}let x=_?new Array(n.length).fill(Eo):Eo;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const R=u.run();if(y||s||g||(_?R.some((C,P)=>ti(C,x[P])):ti(R,x))){d&&d();const C=_s;_s=u;try{const P=[R,x===Eo?void 0:_&&x[0]===Eo?[]:x,p];x=R,l?l(t,3,P):t(...P)}finally{_s=C}}}else u.run()};return a&&a(v),u=new wd(f),u.scheduler=o?()=>o(v,!1):v,p=y=>_g(y,!1,u),d=u.onStop=()=>{const y=xa.get(u);if(y){if(l)l(y,4);else for(const R of y)R();xa.delete(u)}},t?i?v(!0):x=u.run():o?o(v.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function yi(n,t=1/0,e){if(t<=0||!Se(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,tn(n))yi(n.value,t,e);else if(qt(n))for(let i=0;i<n.length;i++)yi(n[i],t,e);else if(Ci(n)||$i(n))n.forEach(i=>{yi(i,t,e)});else if(xd(n)){for(const i in n)yi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&yi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mo(n,t,e,i){try{return i?n(...i):n()}catch(s){Va(s,t,e)}}function Vn(n,t,e,i){if(ne(n)){const s=mo(n,t,e,i);return s&&_d(s)&&s.catch(r=>{Va(r,t,e)}),s}if(qt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Vn(n[r],t,e,i));return s}}function Va(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ee;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Pi(),mo(r,null,10,[n,l,c]),Li();return}}xg(n,e,s,i,o)}function xg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const an=[];let jn=-1;const lr=[];let Gi=null,nr=0;const Hd=Promise.resolve();let ya=null;function Eu(n){const t=ya||Hd;return n?t.then(this?n.bind(this):n):t}function yg(n){let t=jn+1,e=an.length;for(;t<e;){const i=t+e>>>1,s=an[i],r=no(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function wu(n){if(!(n.flags&1)){const t=no(n),e=an[an.length-1];!e||!(n.flags&2)&&t>=no(e)?an.push(n):an.splice(yg(t),0,n),n.flags|=1,Vd()}}function Vd(){ya||(ya=Hd.then(Wd))}function Mg(n){if(!qt(n))Gi&&n.id===-1?Gi.splice(nr+1,0,n):n.flags&1||(lr.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)lr.push(n[t]);Vd()}function uf(n,t,e=jn+1){for(;e<an.length;e++){const i=an[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gd(n){if(lr.length){const t=[...new Set(lr)].sort((e,i)=>no(e)-no(i));if(lr.length=0,Gi){for(let e=0;e<t.length;e++)Gi.push(t[e]);return}for(Gi=t,nr=0;nr<Gi.length;nr++){const e=Gi[nr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Gi=null,nr=0}}const no=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wd(n){try{for(jn=0;jn<an.length;jn++){const t=an[jn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;jn<an.length;jn++){const t=an[jn];t&&(t.flags&=-2)}jn=-1,an.length=0,Gd(),ya=null,(an.length||lr.length)&&Wd()}}let Tn=null,Xd=null;function Ma(n){const t=Tn;return Tn=n,Xd=n&&n.type.__scopeId||null,t}function Sg(n,t=Tn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Mf(-1);const r=Ma(t),o=As.length;let a;try{a=n(...s)}finally{for(let l=As.length;l>o;l--)mp();Ma(r),i._d&&Mf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function We(n,t){if(Tn===null)return n;const e=qa(Tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Ee]=t[s];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&yi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ls(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Pi(),Vn(l,e,8,[n.el,a,n,t]),Li())}}function bg(n,t){if(ln){let e=ln.provides;const i=ln.parent&&ln.parent.provides;i===e&&(e=ln.provides=Object.create(i)),e[n]=t}}function oa(n,t,e=!1){const i=v_();if(i||cr){let s=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&ne(t)?t.call(i&&i.proxy):t}}const Eg=Symbol.for("v-scx"),wg=()=>oa(Eg);function Ne(n,t,e){return $d(n,t,e)}function $d(n,t,e=Ee){const{immediate:i,deep:s,flush:r,once:o}=e,a=nn({},e),l=t&&i||!t&&r!=="post";let c;if(ro){if(r==="sync"){const p=wg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ii,p.resume=ii,p.pause=ii,p}}const u=ln;a.call=(p,g,_)=>Vn(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{fn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():wu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=vg(n,t,a);return ro&&(c?c.push(d):l&&d()),d}function Tg(n,t,e){const i=this.proxy,s=Ue(n)?n.includes(".")?qd(i,n):()=>i[n]:n.bind(i,i);let r;ne(t)?r=t:(r=t.handler,e=t);const o=_o(this),a=$d(s,r.bind(i),e);return o(),a}function qd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ag=Symbol("_vte"),Ga=n=>n.__isTeleport,ol=Symbol("_leaveCb");function Cg(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Di){t=e;break}}return t}function Yd(n){if(!Au(n))return Ga(n.type)&&n.children?Cg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&ne(e.default))return e.default()}}function Tu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Tu(Ga(e.type)&&Yd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ff(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Sa=new WeakMap;function Yr(n,t,e,i,s=!1){if(qt(n)){n.forEach((_,m)=>Yr(_,t&&(qt(t)?t[m]:t),e,i,s));return}if(Kr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?qa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Ee?a.refs={}:a.refs,f=a.setupState,d=me(f),p=f===Ee?gd:_=>ff(u,_)?!1:ge(d,_),g=(_,m)=>!(m&&ff(u,m));if(c!=null&&c!==l){if(hf(t),Ue(c))u[c]=null,p(c)&&(f[c]=null);else if(tn(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ne(l))mo(l,a,12,[o,u]);else{const _=Ue(l),m=tn(l);if(_||m){const h=()=>{if(n.f){const x=_?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)qt(x)&&pu(x,r);else if(qt(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{h(),Sa.delete(n)};x.id=-1,Sa.set(n,x),fn(x,e)}else hf(n),h()}}}function hf(n){const t=Sa.get(n);t&&(t.flags|=8,Sa.delete(n))}za().requestIdleCallback;za().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,Au=n=>n.type.__isKeepAlive;function Rg(n,t){jd(n,"a",t)}function Pg(n,t){jd(n,"da",t)}function jd(n,t,e=ln){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Wa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Au(s.parent.vnode)&&Lg(i,t,e,s),s=s.parent}}function Lg(n,t,e,i){const s=Wa(t,n,i,!0);Zd(()=>{pu(i[t],s)},e)}function Wa(n,t,e=ln,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Pi();const a=_o(e),l=Vn(t,e,n,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const Ii=n=>(t,e=ln)=>{(!ro||n==="sp")&&Wa(n,(...i)=>t(...i),e)},Dg=Ii("bm"),go=Ii("m"),Ug=Ii("bu"),Ig=Ii("u"),pr=Ii("bum"),Zd=Ii("um"),Ng=Ii("sp"),Fg=Ii("rtg"),Og=Ii("rtc");function Bg(n,t=ln){Wa("ec",n,t)}const kg=Symbol.for("v-ndc");function ke(n,t,e,i){let s;const r=e,o=qt(n);if(o||Ue(n)){const a=o&&qi(n);let l=!1,c=!1;a&&(l=!Cn(n),c=ai(n),n=Ha(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?Zi(Rn(n[u])):Rn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const rc=n=>n?xp(n)?qa(n):rc(n.parent):null,jr=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rc(n.parent),$root:n=>rc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Qd(n),$forceUpdate:n=>n.f||(n.f=()=>{wu(n.update)}),$nextTick:n=>n.n||(n.n=Eu.bind(n.proxy)),$watch:n=>Tg.bind(n)}),al=(n,t)=>n!==Ee&&!n.__isScriptSetup&&ge(n,t),zg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(al(i,t))return o[t]=1,i[t];if(s!==Ee&&ge(s,t))return o[t]=2,s[t];if(ge(r,t))return o[t]=3,r[t];if(e!==Ee&&ge(e,t))return o[t]=4,e[t];oc&&(o[t]=0)}}const c=jr[t];let u,f;if(c)return t==="$attrs"&&Je(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ee&&ge(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ge(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return al(s,t)?(s[t]=e,!0):i!==Ee&&ge(i,t)?(i[t]=e,!0):ge(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==Ee&&a[0]!=="$"&&ge(n,a)||al(t,a)||ge(r,a)||ge(i,a)||ge(jr,a)||ge(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ge(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function df(n){return qt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let oc=!0;function Hg(n){const t=Qd(n),e=n.proxy,i=n.ctx;oc=!1,t.beforeCreate&&pf(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:x,destroyed:v,unmounted:y,render:R,renderTracked:C,renderTriggered:P,errorCaptured:I,serverPrefetch:w,expose:b,inheritAttrs:D,components:it,directives:$,filters:st}=t;if(c&&Vg(c,i,null),o)for(const ct in o){const W=o[ct];ne(W)&&(i[ct]=W.bind(e))}if(s){const ct=s.call(e,e);Se(ct)&&(n.data=kn(ct))}if(oc=!0,r)for(const ct in r){const W=r[ct],At=ne(W)?W.bind(e,e):ne(W.get)?W.get.bind(e,e):ii,q=!ne(W)&&ne(W.set)?W.set.bind(e):ii,F=Be({get:At,set:q});Object.defineProperty(i,ct,{enumerable:!0,configurable:!0,get:()=>F.value,set:G=>F.value=G})}if(a)for(const ct in a)Jd(a[ct],i,e,ct);if(l){const ct=ne(l)?l.call(e):l;Reflect.ownKeys(ct).forEach(W=>{bg(W,ct[W])})}u&&pf(u,n,"c");function X(ct,W){qt(W)?W.forEach(At=>ct(At.bind(e))):W&&ct(W.bind(e))}if(X(Dg,f),X(go,d),X(Ug,p),X(Ig,g),X(Rg,_),X(Pg,m),X(Bg,I),X(Og,C),X(Fg,P),X(pr,x),X(Zd,y),X(Ng,w),qt(b))if(b.length){const ct=n.exposed||(n.exposed={});b.forEach(W=>{Object.defineProperty(ct,W,{get:()=>e[W],set:At=>e[W]=At,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ii&&(n.render=R),D!=null&&(n.inheritAttrs=D),it&&(n.components=it),$&&(n.directives=$),w&&Kd(n)}function Vg(n,t,e=ii){qt(n)&&(n=ac(n));for(const i in n){const s=n[i];let r;Se(s)?"default"in s?r=oa(s.from||i,s.default,!0):r=oa(s.from||i):r=oa(s),tn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function pf(n,t,e){Vn(qt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Jd(n,t,e,i){let s=i.includes(".")?qd(e,i):()=>e[i];if(Ue(n)){const r=t[n];ne(r)&&Ne(s,r)}else if(ne(n))Ne(s,n.bind(e));else if(Se(n))if(qt(n))n.forEach(r=>Jd(r,t,e,i));else{const r=ne(n.handler)?n.handler.bind(e):t[n.handler];ne(r)&&Ne(s,r,n)}}function Qd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ba(l,c,o,!0)),ba(l,t,o)),Se(t)&&r.set(t,l),l}function ba(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ba(n,r,e,!0),s&&s.forEach(o=>ba(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Gg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Gg={data:mf,props:gf,emits:gf,methods:Hr,computed:Hr,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Hr,directives:Hr,watch:Xg,provide:mf,inject:Wg};function mf(n,t){return t?n?function(){return nn(ne(n)?n.call(this,this):n,ne(t)?t.call(this,this):t)}:t:n}function Wg(n,t){return Hr(ac(n),ac(t))}function ac(n){if(qt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function rn(n,t){return n?[...new Set([].concat(n,t))]:t}function Hr(n,t){return n?nn(Object.create(null),n,t):t}function gf(n,t){return n?qt(n)&&qt(t)?[...new Set([...n,...t])]:nn(Object.create(null),df(n),df(t??{})):t}function Xg(n,t){if(!n)return t;if(!t)return n;const e=nn(Object.create(null),n);for(const i in t)e[i]=rn(n[i],t[i]);return e}function tp(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function qg(n,t){return function(i,s=null){ne(i)||(i=nn({},i)),s!=null&&!Se(s)&&(s=null);const r=tp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$g++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:E_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ne(u.install)?(o.add(u),u.install(c,...f)):ne(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ye(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,qa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=cr;cr=c;try{return u()}finally{cr=f}}};return c}}let cr=null;const Yg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${On(t)}Modifiers`]||n[`${ns(t)}Modifiers`];function Kg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ee;let s=e;const r=t.startsWith("update:"),o=r&&Yg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ue(u)?u.trim():u)),o.number&&(s=s.map(ka)));let a,l=i[a=el(t)]||i[a=el(On(t))];!l&&r&&(l=i[a=el(ns(t))]),l&&Vn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(c,n,6,s)}}const jg=new WeakMap;function ep(n,t,e=!1){const i=e?jg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ne(n)){const l=c=>{const u=ep(c,t,!0);u&&(a=!0,nn(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Se(n)&&i.set(n,null),null):(qt(r)?r.forEach(l=>o[l]=null):nn(o,r),Se(n)&&i.set(n,o),o)}function Xa(n,t){return!n||!Fa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ge(n,t[0].toLowerCase()+t.slice(1))||ge(n,ns(t))||ge(n,t))}function _f(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=n,m=Ma(n);let h,x;try{if(e.shapeFlag&4){const y=s||i,R=y;h=Jn(c.call(R,y,u,f,p,d,g)),x=a}else{const y=t;h=Jn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),x=t.props?a:Zg(a)}}catch(y){As.length=0,Va(y,n,1),h=Ye(Di)}let v=h;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:R}=v;y.length&&R&7&&(r&&y.some(Oa)&&(x=Jg(x,r)),v=mr(v,x,!1,!0))}if(e.dirs&&(v=mr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const y=Ga(v.type)&&Yd(v)||v;Tu(y,e.transition)}return h=v,Ma(m),h}const Zg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Fa(e))&&((t||(t={}))[e]=n[e]);return t},Jg=(n,t)=>{const e={};for(const i in n)(!Oa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Qg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?vf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(np(o,i,d)&&!Xa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vf(i,o,c):!0:!!o;return!1}function vf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(np(t,n,r)&&!Xa(e,r))return!0}return!1}function np(n,t,e){const i=n[e],s=t[e];return e==="style"&&Se(i)&&Se(s)?!Hn(i,s):i!==s}function t_({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ip={},sp=()=>Object.create(ip),rp=n=>Object.getPrototypeOf(n)===ip;function e_(n,t,e,i=!1){const s={},r=sp();n.propsDefaults=Object.create(null),op(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ug(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function n_(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=me(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Xa(n.emitsOptions,d))continue;const p=t[d];if(l)if(ge(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=On(d);s[g]=lc(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{op(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ge(t,f)&&((u=ns(f))===f||!ge(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=lc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ge(t,f))&&(delete r[f],c=!0)}c&&xi(n.attrs,"set","")}function op(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Xr(l))continue;const c=t[l];let u;s&&ge(s,u=On(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=me(e),c=a||Ee;for(let u=0;u<r.length;u++){const f=r[u];e[f]=lc(s,l,f,c[f],n,!ge(c,f))}}return o}function lc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=_o(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ns(e))&&(i=!0))}return i}const i_=new WeakMap;function ap(n,t,e=!1){const i=e?i_:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ne(n)){const u=f=>{l=!0;const[d,p]=ap(f,t,!0);nn(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Se(n)&&i.set(n,Ss),Ss;if(qt(r))for(let u=0;u<r.length;u++){const f=On(r[u]);xf(f)&&(o[f]=Ee)}else if(r)for(const u in r){const f=On(u);if(xf(f)){const d=r[u],p=o[f]=qt(d)||ne(d)?{type:d}:nn({},d),g=p.type;let _=!1,m=!0;if(qt(g))for(let h=0;h<g.length;++h){const x=g[h],v=ne(x)&&x.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=ne(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||ge(p,"default"))&&a.push(f)}}const c=[o,a];return Se(n)&&i.set(n,c),c}function xf(n){return n[0]!=="$"&&!Xr(n)}const Cu=n=>n==="_"||n==="_ctx"||n==="$stable",Ru=n=>qt(n)?n.map(Jn):[Jn(n)],s_=(n,t,e)=>{if(t._n)return t;const i=Sg((...s)=>Ru(t(...s)),e);return i._c=!1,i},lp=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Cu(s))continue;const r=n[s];if(ne(r))t[s]=s_(s,r,i);else if(r!=null){const o=Ru(r);t[s]=()=>o}}},cp=(n,t)=>{const e=Ru(t);n.slots.default=()=>e},up=(n,t,e)=>{for(const i in t)(e||!Cu(i))&&(n[i]=t[i])},r_=(n,t,e)=>{const i=n.slots=sp();if(n.vnode.shapeFlag&32){const s=t._;s?(up(i,t,e),e&&Md(i,"_",s,!0)):lp(t,i)}else t&&cp(n,t)},o_=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ee;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:up(s,t,e):(r=!t.$stable,lp(t,s)),o=t}else t&&(cp(n,t),o={default:1});if(r)for(const a in s)!Cu(a)&&o[a]==null&&delete s[a]},fn=f_;function a_(n){return l_(n)}function l_(n,t){const e=za();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ii,insertStaticContent:g}=n,_=(A,U,T,ht=null,tt=null,et=null,at=void 0,gt=null,nt=!!U.dynamicChildren)=>{if(A===U)return;A&&!Pr(A,U)&&(ht=mt(A),G(A,tt,et,!0),A=null),U.patchFlag===-2&&(nt=!1,U.dynamicChildren=null),U.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(U.dynamicChildren===Ss&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:S,ref:M,shapeFlag:L}=U;switch(S){case $a:m(A,U,T,ht);break;case Di:h(A,U,T,ht);break;case cl:A==null&&x(U,T,ht,at);break;case _e:it(A,U,T,ht,tt,et,at,gt,nt);break;default:L&1?R(A,U,T,ht,tt,et,at,gt,nt):L&6?$(A,U,T,ht,tt,et,at,gt,nt):(L&64||L&128)&&S.process(A,U,T,ht,tt,et,at,gt,nt,Kt)}M!=null&&tt?Yr(M,A&&A.ref,et,U||A,!U):M==null&&A&&A.ref!=null&&Yr(A.ref,null,et,A,!0)},m=(A,U,T,ht)=>{if(A==null)i(U.el=a(U.children),T,ht);else{const tt=U.el=A.el;U.children!==A.children&&c(tt,U.children)}},h=(A,U,T,ht)=>{A==null?i(U.el=l(U.children||""),T,ht):U.el=A.el},x=(A,U,T,ht)=>{[A.el,A.anchor]=g(A.children,U,T,ht,A.el,A.anchor)},v=({el:A,anchor:U},T,ht)=>{let tt;for(;A&&A!==U;)tt=d(A),i(A,T,ht),A=tt;i(U,T,ht)},y=({el:A,anchor:U})=>{let T;for(;A&&A!==U;)T=d(A),s(A),A=T;s(U)},R=(A,U,T,ht,tt,et,at,gt,nt)=>{if(U.type==="svg"?at="svg":U.type==="math"&&(at="mathml"),A==null)C(U,T,ht,tt,et,at,gt,nt);else{const S=A.el&&A.el._isVueCE?A.el:null;try{S&&S._beginPatch(),w(A,U,tt,et,at,gt,nt)}finally{S&&S._endPatch()}}},C=(A,U,T,ht,tt,et,at,gt)=>{let nt,S;const{props:M,shapeFlag:L,transition:V,dirs:J}=A;if(nt=A.el=o(A.type,et,M&&M.is,M),L&8?u(nt,A.children):L&16&&I(A.children,nt,null,ht,tt,ll(A,et),at,gt),J&&ls(A,null,ht,"created"),P(nt,A,A.scopeId,at,ht),M){for(const wt in M)wt!=="value"&&!Xr(wt)&&r(nt,wt,null,M[wt],et,ht);"value"in M&&r(nt,"value",null,M.value,et),(S=M.onVnodeBeforeMount)&&Kn(S,ht,A)}J&&ls(A,null,ht,"beforeMount");const Q=c_(tt,V);Q&&V.beforeEnter(nt),i(nt,U,T),((S=M&&M.onVnodeMounted)||Q||J)&&fn(()=>{try{S&&Kn(S,ht,A),Q&&V.enter(nt),J&&ls(A,null,ht,"mounted")}finally{}},tt)},P=(A,U,T,ht,tt)=>{if(T&&p(A,T),ht)for(let et=0;et<ht.length;et++)p(A,ht[et]);if(tt){let et=tt.subTree;if(U===et||pp(et.type)&&(et.ssContent===U||et.ssFallback===U)){const at=tt.vnode;P(A,at,at.scopeId,at.slotScopeIds,tt.parent)}}},I=(A,U,T,ht,tt,et,at,gt,nt=0)=>{for(let S=nt;S<A.length;S++){const M=A[S]=gt?vi(A[S]):Jn(A[S]);_(null,M,U,T,ht,tt,et,at,gt)}},w=(A,U,T,ht,tt,et,at)=>{const gt=U.el=A.el;let{patchFlag:nt,dynamicChildren:S,dirs:M}=U;nt|=A.patchFlag&16;const L=A.props||Ee,V=U.props||Ee;let J;if(T&&cs(T,!1),(J=V.onVnodeBeforeUpdate)&&Kn(J,T,U,A),M&&ls(U,A,T,"beforeUpdate"),T&&cs(T,!0),S&&(!A.dynamicChildren||A.dynamicChildren.length!==S.length)&&(nt=0,at=!1,S=null),(L.innerHTML&&V.innerHTML==null||L.textContent&&V.textContent==null)&&u(gt,""),S?b(A.dynamicChildren,S,gt,T,ht,ll(U,tt),et):at||W(A,U,gt,null,T,ht,ll(U,tt),et,!1),nt>0){if(nt&16)D(gt,L,V,T,tt);else if(nt&2&&L.class!==V.class&&r(gt,"class",null,V.class,tt),nt&4&&r(gt,"style",L.style,V.style,tt),nt&8){const Q=U.dynamicProps;for(let wt=0;wt<Q.length;wt++){const _t=Q[wt],Et=L[_t],Wt=V[_t];(Wt!==Et||_t==="value")&&r(gt,_t,Et,Wt,tt,T)}}nt&1&&A.children!==U.children&&u(gt,U.children)}else!at&&S==null&&D(gt,L,V,T,tt);((J=V.onVnodeUpdated)||M)&&fn(()=>{J&&Kn(J,T,U,A),M&&ls(U,A,T,"updated")},ht)},b=(A,U,T,ht,tt,et,at)=>{for(let gt=0;gt<U.length;gt++){const nt=A[gt],S=U[gt],M=nt.el&&(nt.type===_e||!Pr(nt,S)||nt.shapeFlag&198)?f(nt.el):T;_(nt,S,M,null,ht,tt,et,at,!0)}},D=(A,U,T,ht,tt)=>{if(U!==T){if(U!==Ee)for(const et in U)!Xr(et)&&!(et in T)&&r(A,et,U[et],null,tt,ht);for(const et in T){if(Xr(et))continue;const at=T[et],gt=U[et];at!==gt&&et!=="value"&&r(A,et,gt,at,tt,ht)}"value"in T&&r(A,"value",U.value,T.value,tt)}},it=(A,U,T,ht,tt,et,at,gt,nt)=>{const S=U.el=A?A.el:a(""),M=U.anchor=A?A.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:J}=U;J&&(gt=gt?gt.concat(J):J),A==null?(i(S,T,ht),i(M,T,ht),I(U.children||[],T,M,tt,et,at,gt,nt)):L>0&&L&64&&V&&A.dynamicChildren&&A.dynamicChildren.length===V.length?(b(A.dynamicChildren,V,T,tt,et,at,gt),(U.key!=null||tt&&U===tt.subTree)&&fp(A,U,!0)):W(A,U,T,M,tt,et,at,gt,nt)},$=(A,U,T,ht,tt,et,at,gt,nt)=>{U.slotScopeIds=gt,A==null?U.shapeFlag&512?tt.ctx.activate(U,T,ht,at,nt):st(U,T,ht,tt,et,at,nt):ft(A,U,nt)},st=(A,U,T,ht,tt,et,at)=>{const gt=A.component=__(A,ht,tt);if(Au(A)&&(gt.ctx.renderer=Kt),x_(gt,!1,at),gt.asyncDep){if(tt&&tt.registerDep(gt,X,at),!A.el){const nt=gt.subTree=Ye(Di);h(null,nt,U,T),A.placeholder=nt.el}}else X(gt,A,U,T,tt,et,at)},ft=(A,U,T)=>{const ht=U.component=A.component;if(Qg(A,U,T))if(ht.asyncDep&&!ht.asyncResolved){U.el=A.el,ct(ht,U,T);return}else ht.next=U,ht.update();else U.el=A.el,ht.vnode=U},X=(A,U,T,ht,tt,et,at)=>{const gt=()=>{if(A.isMounted){let{next:L,bu:V,u:J,parent:Q,vnode:wt}=A;{const Pt=hp(A);if(Pt){L&&(L.el=wt.el,ct(A,L,at)),Pt.asyncDep.then(()=>{fn(()=>{A.isUnmounted||S()},tt)});return}}let _t=L,Et;cs(A,!1),L?(L.el=wt.el,ct(A,L,at)):L=wt,V&&ra(V),(Et=L.props&&L.props.onVnodeBeforeUpdate)&&Kn(Et,Q,L,wt),cs(A,!0);const Wt=_f(A),xt=A.subTree;A.subTree=Wt,_(xt,Wt,f(xt.el),mt(xt),A,tt,et),L.el=Wt.el,_t===null&&t_(A,Wt.el),J&&fn(J,tt),(Et=L.props&&L.props.onVnodeUpdated)&&fn(()=>Kn(Et,Q,L,wt),tt)}else{let L;const{el:V,props:J}=U,{bm:Q,m:wt,parent:_t,root:Et,type:Wt}=A,xt=Kr(U);cs(A,!1),Q&&ra(Q),!xt&&(L=J&&J.onVnodeBeforeMount)&&Kn(L,_t,U),cs(A,!0);{Et.ce&&Et.ce._hasShadowRoot()&&Et.ce._injectChildStyle(Wt,A.parent?A.parent.type:void 0);const Pt=A.subTree=_f(A);_(null,Pt,T,ht,A,tt,et),U.el=Pt.el}if(wt&&fn(wt,tt),!xt&&(L=J&&J.onVnodeMounted)){const Pt=U;fn(()=>Kn(L,_t,Pt),tt)}(U.shapeFlag&256||_t&&Kr(_t.vnode)&&_t.vnode.shapeFlag&256)&&A.a&&fn(A.a,tt),A.isMounted=!0,U=T=ht=null}};A.scope.on();const nt=A.effect=new wd(gt);A.scope.off();const S=A.update=nt.run.bind(nt),M=A.job=nt.runIfDirty.bind(nt);M.i=A,M.id=A.uid,nt.scheduler=()=>wu(M),cs(A,!0),S()},ct=(A,U,T)=>{U.component=A;const ht=A.vnode.props;A.vnode=U,A.next=null,n_(A,U.props,ht,T),o_(A,U.children,T),Pi(),uf(A),Li()},W=(A,U,T,ht,tt,et,at,gt,nt=!1)=>{const S=A&&A.children,M=A?A.shapeFlag:0,L=U.children,{patchFlag:V,shapeFlag:J}=U;if(V>0){if(V&128){q(S,L,T,ht,tt,et,at,gt,nt);return}else if(V&256){At(S,L,T,ht,tt,et,at,gt,nt);return}}J&8?(M&16&&bt(S,tt,et),L!==S&&u(T,L)):M&16?J&16?q(S,L,T,ht,tt,et,at,gt,nt):bt(S,tt,et,!0):(M&8&&u(T,""),J&16&&I(L,T,ht,tt,et,at,gt,nt))},At=(A,U,T,ht,tt,et,at,gt,nt)=>{A=A||Ss,U=U||Ss;const S=A.length,M=U.length,L=Math.min(S,M);let V;for(V=0;V<L;V++){const J=U[V]=nt?vi(U[V]):Jn(U[V]);_(A[V],J,T,null,tt,et,at,gt,nt)}S>M?bt(A,tt,et,!0,!1,L):I(U,T,ht,tt,et,at,gt,nt,L)},q=(A,U,T,ht,tt,et,at,gt,nt)=>{let S=0;const M=U.length;let L=A.length-1,V=M-1;for(;S<=L&&S<=V;){const J=A[S],Q=U[S]=nt?vi(U[S]):Jn(U[S]);if(Pr(J,Q))_(J,Q,T,null,tt,et,at,gt,nt);else break;S++}for(;S<=L&&S<=V;){const J=A[L],Q=U[V]=nt?vi(U[V]):Jn(U[V]);if(Pr(J,Q))_(J,Q,T,null,tt,et,at,gt,nt);else break;L--,V--}if(S>L){if(S<=V){const J=V+1,Q=J<M?U[J].el:ht;for(;S<=V;)_(null,U[S]=nt?vi(U[S]):Jn(U[S]),T,Q,tt,et,at,gt,nt),S++}}else if(S>V)for(;S<=L;)G(A[S],tt,et,!0),S++;else{const J=S,Q=S,wt=new Map;for(S=Q;S<=V;S++){const Ct=U[S]=nt?vi(U[S]):Jn(U[S]);Ct.key!=null&&wt.set(Ct.key,S)}let _t,Et=0;const Wt=V-Q+1;let xt=!1,Pt=0;const Vt=new Array(Wt);for(S=0;S<Wt;S++)Vt[S]=0;for(S=J;S<=L;S++){const Ct=A[S];if(Et>=Wt){G(Ct,tt,et,!0);continue}let Zt;if(Ct.key!=null)Zt=wt.get(Ct.key);else for(_t=Q;_t<=V;_t++)if(Vt[_t-Q]===0&&Pr(Ct,U[_t])){Zt=_t;break}Zt===void 0?G(Ct,tt,et,!0):(Vt[Zt-Q]=S+1,Zt>=Pt?Pt=Zt:xt=!0,_(Ct,U[Zt],T,null,tt,et,at,gt,nt),Et++)}const $t=xt?u_(Vt):Ss;for(_t=$t.length-1,S=Wt-1;S>=0;S--){const Ct=Q+S,Zt=U[Ct],Yt=U[Ct+1],ce=Ct+1<M?Yt.el||dp(Yt):ht;Vt[S]===0?_(null,Zt,T,ce,tt,et,at,gt,nt):xt&&(_t<0||S!==$t[_t]?F(Zt,T,ce,2):_t--)}}},F=(A,U,T,ht,tt=null)=>{const{el:et,type:at,transition:gt,children:nt,shapeFlag:S}=A;if(S&6){F(A.component.subTree,U,T,ht);return}if(S&128){A.suspense.move(U,T,ht);return}if(S&64){at.move(A,U,T,Kt);return}if(at===_e){i(et,U,T);for(let L=0;L<nt.length;L++)F(nt[L],U,T,ht);i(A.anchor,U,T);return}if(at===cl){v(A,U,T);return}if(ht!==2&&S&1&&gt)if(ht===0)gt.persisted&&!et[ol]?i(et,U,T):(gt.beforeEnter(et),i(et,U,T),fn(()=>gt.enter(et),tt));else{const{leave:L,delayLeave:V,afterLeave:J}=gt,Q=()=>{A.ctx.isUnmounted?s(et):i(et,U,T)},wt=()=>{const _t=et._isLeaving||!!et[ol];et._isLeaving&&et[ol](!0),gt.persisted&&!_t?Q():L(et,()=>{Q(),J&&J()})};V?V(et,Q,wt):wt()}else i(et,U,T)},G=(A,U,T,ht=!1,tt=!1)=>{const{type:et,props:at,ref:gt,children:nt,dynamicChildren:S,shapeFlag:M,patchFlag:L,dirs:V,cacheIndex:J,memo:Q}=A;if((L===-2||S&&S.hasOnce)&&(tt=!1),gt!=null&&(Pi(),Yr(gt,null,T,A,!0),Li()),J!=null&&(!A.ctx||A.ctx===U)&&(U.renderCache[J]=void 0),M&256){U.ctx.deactivate(A);return}const wt=M&1&&V,_t=!Kr(A);let Et;if(_t&&(Et=at&&at.onVnodeBeforeUnmount)&&Kn(Et,U,A),M&6)lt(A.component,T,ht);else{if(M&128){A.suspense.unmount(T,ht);return}wt&&ls(A,null,U,"beforeUnmount"),M&64?A.type.remove(A,U,T,Kt,ht):S&&!S.hasOnce&&(et!==_e||L>0&&L&64)?bt(S,U,T,!1,!0):(et===_e&&L&384||!tt&&M&16)&&bt(nt,U,T),ht&&St(A)}const Wt=Q!=null&&J==null;(_t&&(Et=at&&at.onVnodeUnmounted)||wt||Wt)&&fn(()=>{Et&&Kn(Et,U,A),wt&&ls(A,null,U,"unmounted"),Wt&&(A.el=null)},T)},St=A=>{const{type:U,el:T,anchor:ht,transition:tt}=A;if(U===_e){Z(T,ht);return}if(U===cl){y(A),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave();return}const et=()=>{s(T),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(A.shapeFlag&1&&tt&&!tt.persisted){const{leave:at,delayLeave:gt}=tt,nt=()=>at(T,et);gt?gt(A.el,et,nt):nt()}else et()},Z=(A,U)=>{let T;for(;A!==U;)T=d(A),s(A),A=T;s(U)},lt=(A,U,T)=>{const{bum:ht,scope:tt,job:et,subTree:at,um:gt,m:nt,a:S}=A;yf(nt),yf(S),ht&&ra(ht),tt.stop(),et?(et.flags|=8,G(at,A,U,T)):A.vnode.el&&at&&(at.transition=A.vnode.transition,G(at,A,U,T)),gt&&fn(gt,U),fn(()=>{A.isUnmounted=!0},U)},bt=(A,U,T,ht=!1,tt=!1,et=0)=>{for(let at=et;at<A.length;at++)G(A[at],U,T,ht,tt)},mt=A=>{if(A.shapeFlag&6)return mt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const U=d(A.anchor||A.el),T=U&&U[Ag];return T?d(T):U};let Ot=!1;const Bt=(A,U,T)=>{let ht;A==null?U._vnode&&(G(U._vnode,null,null,!0),ht=U._vnode.component):_(U._vnode||null,A,U,null,null,null,T),U._vnode=A,Ot||(Ot=!0,uf(ht),Gd(),Ot=!1)},Kt={p:_,um:G,m:F,r:St,mt:st,mc:I,pc:W,pbc:b,n:mt,o:n};return{render:Bt,hydrate:void 0,createApp:qg(Bt)}}function ll({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function cs({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function c_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function fp(n,t,e=!1){const i=n.children,s=t.children;if(qt(i)&&qt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=vi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&fp(o,a)),a.type===$a&&(a.patchFlag===-1&&(a=s[r]=vi(a)),a.el=o.el),a.type===Di&&!a.el&&(a.el=o.el)}}function u_(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function hp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hp(t)}function yf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function dp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?dp(t.subTree):null}const pp=n=>n.__isSuspense;function f_(n,t){t&&t.pendingBranch?qt(n)?t.effects.push(...n):t.effects.push(n):Mg(n)}const _e=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),Di=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),As=[];let gn=null;function Mt(n=!1){As.push(gn=n?null:[])}function mp(){As.pop(),gn=As[As.length-1]||null}let io=1;function Mf(n,t=!1){io+=n,n<0&&gn&&t&&(gn.hasOnce=!0)}function gp(n){return n.dynamicChildren=io>0?gn||Ss:null,mp(),io>0&&gn&&gn.push(n),n}function Tt(n,t,e,i,s,r){return gp(N(n,t,e,i,s,r,!0))}function ir(n,t,e,i,s){return gp(Ye(n,t,e,i,s,!0))}function _p(n){return n?n.__v_isVNode===!0:!1}function Pr(n,t){return n.type===t.type&&n.key===t.key}const vp=({key:n})=>n??null,aa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ue(n)||tn(n)||ne(n)?{i:Tn,r:n,k:t,f:!!e}:n:null);function N(n,t=null,e=null,i=0,s=null,r=n===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&vp(t),ref:t&&aa(t),scopeId:Xd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return a?(Ea(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ue(e)?8:16),io>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ye=h_;function h_(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===kg)&&(n=Di),_p(n)){const a=mr(n,t,!0);return e&&Ea(a,e),io>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(b_(n)&&(n=n.__vccOpts),t){t=d_(t);let{class:a,style:l}=t;a&&!Ue(a)&&(t.class=Ie(a)),Se(l)&&(bu(l)&&!qt(l)&&(l=nn({},l)),t.style=Ri(l))}const o=Ue(n)?1:pp(n)?128:Ga(n)?64:Se(n)?4:ne(n)?2:0;return N(n,t,e,i,s,o,r,!0)}function d_(n){return n?bu(n)||rp(n)?nn({},n):n:null}function mr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?p_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vp(c),ref:t&&t.ref?e&&r?qt(r)?r.concat(aa(t)):[r,aa(t)]:aa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==_e?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mr(n.ssContent),ssFallback:n.ssFallback&&mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Tu(u,l.clone(u)),u}function fe(n=" ",t=0){return Ye($a,null,n,t)}function he(n="",t=!1){return t?(Mt(),ir(Di,null,n)):Ye(Di,null,n)}function Jn(n){return n==null||typeof n=="boolean"?Ye(Di):qt(n)?Ye(_e,null,n.slice()):_p(n)?vi(n):Ye($a,null,String(n))}function vi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mr(n)}function Ea(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(qt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ea(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!rp(t)?t._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(ne(t)){if(i&65){Ea(n,{default:t});return}t={default:t,_ctx:Tn},e=32}else t=String(t),i&64?(e=16,t=[fe(t)]):e=8;n.children=t,n.shapeFlag|=e}function p_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ie([t.class,i.class]));else if(s==="style")t.style=Ri([t.style,i.style]);else if(Fa(s)){const r=t[s],o=i[s];o&&r!==o&&!(qt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Oa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Kn(n,t,e,i=null){Vn(n,t,7,[e,i])}const m_=tp();let g_=0;function __(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||m_,r={uid:g_++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(i,s),emitsOptions:ep(i,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:i.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Kg.bind(null,r),n.ce&&n.ce(r),r}let ln=null;const v_=()=>ln||Tn;let wa,so;{const n=za(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};wa=t("__VUE_INSTANCE_SETTERS__",e=>ln=e),so=t("__VUE_SSR_SETTERS__",e=>ro=e)}const _o=n=>{const t=ln;return wa(n),n.scope.on(),()=>{n.scope.off(),wa(t)}},Sf=()=>{ln&&ln.scope.off(),wa(null)};function xp(n){return n.vnode.shapeFlag&4}let ro=!1;function x_(n,t=!1,e=!1){t&&so(t);const{props:i,children:s}=n.vnode,r=xp(n);e_(n,i,r,t),r_(n,s,e||t);const o=r?y_(n,t):void 0;return t&&so(!1),o}function y_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zg);const{setup:i}=e;if(i){Pi();const s=n.setupContext=i.length>1?S_(n):null,r=_o(n),o=mo(i,n,0,[n.props,s]),a=_d(o);if(Li(),r(),(a||n.sp)&&!Kr(n)&&Kd(n),a){if(o.then(Sf,Sf),t)return o.then(l=>{so(!0);try{bf(n,l,t)}finally{so(!1)}}).catch(l=>{Va(l,n,0)});n.asyncDep=o}else bf(n,o)}else yp(n)}function bf(n,t,e){ne(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Se(t)&&(n.setupState=zd(t)),yp(n)}function yp(n,t,e){const i=n.type;n.render||(n.render=i.render||ii);{const s=_o(n);Pi();try{Hg(n)}finally{Li(),s()}}}const M_={get(n,t){return Je(n,"get",""),n[t]}};function S_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,M_),slots:n.slots,emit:n.emit,expose:t}}function qa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zd(fg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in jr)return jr[e](n)},has(t,e){return e in t||e in jr}})):n.proxy}function b_(n){return ne(n)&&"__vccOpts"in n}const Be=(n,t)=>gg(n,t,ro),E_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const Ef=typeof window<"u"&&window.trustedTypes;if(Ef)try{cc=Ef.createPolicy("vue",{createHTML:n=>n})}catch{}const Mp=cc?n=>cc.createHTML(n):n=>n,w_="http://www.w3.org/2000/svg",T_="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,wf=_i&&_i.createElement("template"),A_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?_i.createElementNS(w_,n):t==="mathml"?_i.createElementNS(T_,n):e?_i.createElement(n,{is:e}):_i.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>_i.createTextNode(n),createComment:n=>_i.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>_i.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{wf.innerHTML=Mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=wf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},C_=Symbol("_vtc");function R_(n,t,e){const i=n[C_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Tf=Symbol("_vod"),P_=Symbol("_vsh"),L_=Symbol(""),D_=/(?:^|;)\s*display\s*:/;function U_(n,t,e){const i=n.style,s=Ue(e);let r=!1;if(e&&!s){if(t)if(Ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Vr(i,a,"")}else for(const o in t)e[o]==null&&Vr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?N_(n,o,!Ue(t)&&t?t[o]:void 0,a)||Vr(i,o,a):Vr(i,o,"")}}else if(s){if(t!==e){const o=i[L_];o&&(e+=";"+o),i.cssText=e,r=D_.test(e)}}else t&&n.removeAttribute("style");Tf in n&&(n[Tf]=r?i.display:"",n[P_]&&(i.display="none"))}const wo=/\s*!important$/;function Vr(n,t,e){if(qt(e))e.forEach(i=>Vr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))wo.test(e)?n.setProperty(t,e.replace(wo,""),"important"):n.setProperty(t,e);else{const i=I_(n,t);wo.test(e)?n.setProperty(ns(i),e.replace(wo,""),"important"):n[i]=e}}const Af=["Webkit","Moz","ms"],ul={};function I_(n,t){const e=ul[t];if(e)return e;let i=On(t);if(i!=="filter"&&i in n)return ul[t]=i;i=yd(i);for(let s=0;s<Af.length;s++){const r=Af[s]+i;if(r in n)return ul[t]=r}return t}function N_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ue(i)&&e===i}const Cf="http://www.w3.org/1999/xlink";function Rf(n,t,e,i,s,r=Vm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Cf,t.slice(6,t.length)):n.setAttributeNS(Cf,t,e):e==null||r&&!Sd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":oi(e)?String(e):e)}function Pf(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Mp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Sd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Mi(n,t,e,i){n.addEventListener(t,e,i)}function F_(n,t,e,i){n.removeEventListener(t,e,i)}const Lf=Symbol("_vei");function O_(n,t,e,i,s=null){const r=n[Lf]||(n[Lf]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=z_(t);if(i){const c=r[t]=G_(i,s);Mi(n,a,c,l)}else o&&(F_(n,a,o,l),r[t]=void 0)}}const B_=/(Once|Passive|Capture)$/,k_=/^on:?(?:Once|Passive|Capture)$/;function z_(n){let t,e;for(;(e=n.match(B_))&&!k_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ns(n.slice(2)),t]}let fl=0;const H_=Promise.resolve(),V_=()=>fl||(H_.then(()=>fl=0),fl=Date.now());function G_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(qt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Vn(c,t,5,a)}}else Vn(s,t,5,[i])};return e.value=n,e.attached=V_(),e}const Df=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,W_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?R_(n,i,o):t==="style"?U_(n,e,i):Fa(t)?Oa(t)||O_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):X_(n,t,i,o))?(Pf(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Rf(n,t,i,o,r,t!=="value")):n._isVueCE&&($_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ue(i)))?Pf(n,On(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Rf(n,t,i,o))};function X_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Df(t)&&ne(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Df(t)&&Ue(e)?!1:t in n}function $_(n,t){const e=n._def.props;if(!e)return!1;const i=On(t);return Array.isArray(e)?e.some(s=>On(s)===i):Object.keys(e).some(s=>On(s)===i)}const Ji=n=>{const t=n.props["onUpdate:modelValue"]||!1;return qt(t)?e=>ra(t,e):t};function q_(n){n.target.composing=!0}function Uf(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),To=Symbol("_initialValue");function hl(n,t,e){return t&&(n=n.trim()),e&&(n=ka(n)),n}const Gn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[To]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[To]=n.defaultValue.replace(/\r\n?/g,`
`))),n[_n]=Ji(s);const r=i||s.props&&s.props.type==="number";Mi(n,t?"change":"input",o=>{o.target.composing||n[_n](hl(n.value,e,r))}),(e||r)&&Mi(n,"change",()=>{n.value=hl(n.value,e,r)}),t||(Mi(n,"compositionstart",q_),Mi(n,"compositionend",Uf),Mi(n,"change",Uf))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[To];delete n[To],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[_n](hl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[_n]=Ji(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ka(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Cs={deep:!0,created(n,t,e){n[_n]=Ji(e),Mi(n,"change",()=>{const i=n._modelValue,s=gr(n),r=n.checked,o=n[_n];if(qt(i)){const a=gu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ci(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Sp(n,r))})},mounted:If,beforeUpdate(n,t,e){n[_n]=Ji(e),If(n,t,e)}};function If(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(qt(t))s=gu(t,i.props.value)>-1;else if(Ci(t))s=t.has(i.props.value);else{if(t===e)return;s=Hn(t,Sp(n,!0))}n.checked!==s&&(n.checked=s)}const Y_={created(n,{value:t},e){n.checked=Hn(t,e.props.value),n[_n]=Ji(e),Mi(n,"change",()=>{n[_n](gr(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[_n]=Ji(i),t!==e&&(n.checked=Hn(t,i.props.value))}},uc={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?ka(gr(l)):gr(l)),r=n.multiple,o=r?Ci(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?qt(o)?s.slice():s:o];try{n[_n](o)}finally{Eu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[_n]=Ji(i)},mounted(n,{value:t}){Nf(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[_n]=Ji(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!K_(t,e[1],e[0]))&&Nf(n,t)}};function K_(n,t,e){if(!e||qt(n))return Hn(n,t);if(Ci(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Nf(n,t){const e=n.multiple,i=qt(t);if(!(e&&!i&&!Ci(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=gr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=gu(t,a)>-1}else o.selected=t.has(a);else if(Hn(gr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function gr(n){return"_value"in n?n._value:n.value}function Sp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const j_={created(n,t,e){Ao(n,t,e,null,"created")},mounted(n,t,e){Ao(n,t,e,null,"mounted")},beforeUpdate(n,t,e,i){Ao(n,t,e,i,"beforeUpdate")},updated(n,t,e,i){Ao(n,t,e,i,"updated")}};function Z_(n,t){switch(n){case"SELECT":return uc;case"TEXTAREA":return Gn;default:switch(t){case"checkbox":return Cs;case"radio":return Y_;default:return Gn}}}function Ao(n,t,e,i,s){const o=Z_(n.tagName,e.props&&e.props.type)[s];o&&o(n,t,e,i)}const J_=["ctrl","shift","alt","meta"],Q_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>J_.some(e=>n[`${e}Key`]&&!t.includes(e))},tv=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=Q_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fc=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=ns(s.key);if(t.some(o=>o===r||ev[o]===r))return n(s)}))},nv=nn({patchProp:W_},A_);let Ff;function iv(){return Ff||(Ff=a_(nv))}const sv=((...n)=>{const t=iv().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=ov(i);if(!s)return;const r=t._component;!ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,rv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function rv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ov(n){return Ue(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="170",av=0,Of=1,lv=2,bp=1,cv=2,gi=3,Qi=0,hn=1,Si=2,Yi=0,ur=1,Ta=2,Bf=3,kf=4,uv=5,ys=100,fv=101,hv=102,dv=103,pv=104,mv=200,gv=201,_v=202,vv=203,hc=204,dc=205,xv=206,yv=207,Mv=208,Sv=209,bv=210,Ev=211,wv=212,Tv=213,Av=214,pc=0,mc=1,gc=2,_r=3,_c=4,vc=5,xc=6,yc=7,Ep=0,Cv=1,Rv=2,Ki=0,Pv=1,Lv=2,Dv=3,Uv=4,Iv=5,Nv=6,Fv=7,wp=300,vr=301,xr=302,Mc=303,Sc=304,Ya=306,bc=1e3,bs=1001,Ec=1002,zn=1003,Ov=1004,Co=1005,ni=1006,dl=1007,Es=1008,Ui=1009,Tp=1010,Ap=1011,oo=1012,Lu=1013,Rs=1014,bi=1015,vo=1016,Du=1017,Uu=1018,yr=1020,Cp=35902,Rp=1021,Pp=1022,Nn=1023,Lp=1024,Dp=1025,fr=1026,Mr=1027,Up=1028,Iu=1029,Ip=1030,Nu=1031,Fu=1033,la=33776,ca=33777,ua=33778,fa=33779,wc=35840,Tc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Lc=37496,Dc=37808,Uc=37809,Ic=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,ha=36492,$c=36494,qc=36495,Np=36283,Yc=36284,Kc=36285,jc=36286,Bv=3200,kv=3201,Fp=0,zv=1,Wi="",Sn="srgb",br="srgb-linear",Ka="linear",ye="srgb",Fs=7680,zf=519,Hv=512,Vv=513,Gv=514,Op=515,Wv=516,Xv=517,$v=518,qv=519,Zc=35044,Hf="300 es",Ei=2e3,Aa=2001;class Er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Jc=180/Math.PI;function Ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function Yv(n,t){return(n%t+t)%t}function ml(n,t,e){return(1-e)*n+e*t}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,i,s,r,o,a,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],h=s[6],x=s[1],v=s[4],y=s[7],R=s[2],C=s[5],P=s[8];return r[0]=o*_+a*x+l*R,r[3]=o*m+a*v+l*C,r[6]=o*h+a*y+l*P,r[1]=c*_+u*x+f*R,r[4]=c*m+u*v+f*C,r[7]=c*h+u*y+f*P,r[2]=d*_+p*x+g*R,r[5]=d*m+p*v+g*C,r[8]=d*h+p*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new se;function Bp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kv(){const n=Ca("canvas");return n.style.display="block",n}const Vf={};function Gr(n){n in Vf||(Vf[n]=!0,console.warn(n))}function jv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Zv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:br,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(n.r=hr(n.r),n.g=hr(n.g),n.b=hr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wi?Ka:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Gf=[.64,.33,.3,.6,.15,.06],Wf=[.2126,.7152,.0722],Xf=[.3127,.329],$f=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[br]:{primaries:Gf,whitePoint:Xf,transfer:Ka,toXYZ:$f,fromXYZ:qf,luminanceCoefficients:Wf,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Gf,whitePoint:Xf,transfer:ye,toXYZ:$f,fromXYZ:qf,luminanceCoefficients:Wf,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let Os;class Qv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=Ca("canvas")),Os.width=t.width,Os.height=t.height;const i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t0=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class cn extends Er{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,i=bs,s=bs,r=ni,o=Es,a=Nn,l=Ui,c=cn.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ti(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=wp;cn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,i=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,R=(h+1)/2,C=(u+d)/4,P=(f+_)/4,I=(g+m)/4;return v>y&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=P/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=I/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Er{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends n0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zp extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,h*x);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const y=a*x;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-a*p,t[e+2]=c*g+u*p+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new O,Yf=new wi;class xo{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Po.subVectors(this.max,Lr),Bs.subVectors(t.a,Lr),ks.subVectors(t.b,Lr),zs.subVectors(t.c,Lr),Oi.subVectors(ks,Bs),Bi.subVectors(zs,ks),us.subVectors(Bs,zs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-us.z,us.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,us.z,0,-us.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-us.y,us.x,0];return!xl(e,Bs,ks,zs,Po)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,Bs,ks,zs,Po))?!1:(Lo.crossVectors(Oi,Bi),e=[Lo.x,Lo.y,Lo.z],xl(e,Bs,ks,zs,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,Ro=new xo,Bs=new O,ks=new O,zs=new O,Oi=new O,Bi=new O,us=new O,Lr=new O,Po=new O,Lo=new O,fs=new O;function xl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const s0=new xo,Dr=new O,yl=new O;class ja{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):s0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(yl)),this.expandByPoint(Dr.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new O,Ml=new O,Do=new O,ki=new O,Sl=new O,Uo=new O,bl=new O;class Ou{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ml.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(Ml);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=ki.dot(this.direction),l=-ki.dot(Do),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ml).addScaledVector(Do,d),p}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){Sl.subVectors(e,t),Uo.subVectors(i,t),bl.crossVectors(Sl,Uo);let o=this.direction.dot(bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);const l=a*this.direction.dot(Uo.crossVectors(ki,Uo));if(l<0)return null;const c=a*this.direction.dot(Sl.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(bl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+_,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r0,t,o0)}lookAt(t,e,i){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),zi.crossVectors(i,pn),zi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),zi.crossVectors(i,pn)),zi.normalize(),Io.crossVectors(pn,zi),s[0]=zi.x,s[4]=Io.x,s[8]=pn.x,s[1]=zi.y,s[5]=Io.y,s[9]=pn.y,s[2]=zi.z,s[6]=Io.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],y=i[11],R=i[15],C=s[0],P=s[4],I=s[8],w=s[12],b=s[1],D=s[5],it=s[9],$=s[13],st=s[2],ft=s[6],X=s[10],ct=s[14],W=s[3],At=s[7],q=s[11],F=s[15];return r[0]=o*C+a*b+l*st+c*W,r[4]=o*P+a*D+l*ft+c*At,r[8]=o*I+a*it+l*X+c*q,r[12]=o*w+a*$+l*ct+c*F,r[1]=u*C+f*b+d*st+p*W,r[5]=u*P+f*D+d*ft+p*At,r[9]=u*I+f*it+d*X+p*q,r[13]=u*w+f*$+d*ct+p*F,r[2]=g*C+_*b+m*st+h*W,r[6]=g*P+_*D+m*ft+h*At,r[10]=g*I+_*it+m*X+h*q,r[14]=g*w+_*$+m*ct+h*F,r[3]=x*C+v*b+y*st+R*W,r[7]=x*P+v*D+y*ft+R*At,r[11]=x*I+v*it+y*X+R*q,r[15]=x*w+v*$+y*ct+R*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*f-e*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*f+e*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],x=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*_*c-g*f*c+g*a*p-o*_*p-u*a*h+o*f*h,R=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=e*x+i*v+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=x*P,t[1]=(_*d*r-f*m*r-_*s*p+i*m*p+f*s*h-i*d*h)*P,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*h+i*l*h)*P,t[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*P,t[4]=v*P,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*h+e*d*h)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*h-e*l*h)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=y*P,t[9]=(g*f*r-u*_*r-g*i*p+e*_*p+u*i*h-e*f*h)*P,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*h+e*a*h)*P,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*p-e*a*p)*P,t[12]=R*P,t[13]=(u*_*s-g*f*s+g*i*d-e*_*d-u*i*m+e*f*m)*P,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*P,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,_=o*u,m=o*f,h=a*f,x=l*c,v=l*u,y=l*f,R=i.x,C=i.y,P=i.z;return s[0]=(1-(_+h))*R,s[1]=(p+y)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(d+h))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+v)*P,s[9]=(m-x)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,u=1/o,f=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ei){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===Ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Aa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ei){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(o-r),d=(e+t)*c,p=(i+s)*u;let g,_;if(a===Ei)g=(o+r)*f,_=-2*f;else if(a===Aa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hs=new O,Dn=new Ae,r0=new O(0,0,0),o0=new O(1,1,1),zi=new O,Io=new O,pn=new O,Kf=new Ae,jf=new wi;class Wn{constructor(t=0,e=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a0=0;const Zf=new O,Vs=new wi,di=new Ae,No=new O,Ur=new O,l0=new O,c0=new wi,Jf=new O(1,0,0),Qf=new O(0,1,0),th=new O(0,0,1),eh={type:"added"},u0={type:"removed"},Gs={type:"childadded",child:null},El={type:"childremoved",child:null};class Xe extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new O,e=new Wn,i=new wi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new se}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(Qf,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Zf.copy(t).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(Qf,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ur,No,this.up):di.lookAt(No,Ur,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(di),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u0),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new O(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new O,pi=new O,wl=new O,mi=new O,Ws=new O,Xs=new O,nh=new O,Tl=new O,Al=new O,Cl=new O,Rl=new De,Pl=new De,Ll=new De;class wn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),pi.subVectors(i,e),wl.subVectors(t,e);const o=Un.dot(Un),a=Un.dot(pi),l=Un.dot(wl),c=pi.dot(pi),u=pi.dot(wl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rl.setScalar(0),Pl.setScalar(0),Ll.setScalar(0),Rl.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,i),Ll.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(Pl,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),pi.subVectors(t,e),Un.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Un.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),Tl.subVectors(t,i);const l=Ws.dot(Tl),c=Xs.dot(Tl);if(l<=0&&c<=0)return e.copy(i);Al.subVectors(t,s);const u=Ws.dot(Al),f=Xs.dot(Al);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ws,o);Cl.subVectors(t,r);const p=Ws.dot(Cl),g=Xs.dot(Cl);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Xs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return nh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(nh,a);const h=1/(m+_+d);return o=_*h,a=d*h,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class le{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Yv(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const i=Hp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ae.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Qe(Ze.r*255,0,255))*65536+Math.round(Qe(Ze.g*255,0,255))*256+Math.round(Qe(Ze.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Sn){ae.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Fo);const i=ml(Hi.h,Fo.h,e),s=ml(Hi.s,Fo.s,e),r=ml(Hi.l,Fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new le;le.NAMES=Hp;let f0=0;class Us extends Er{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ti(),this.name="",this.blending=ur,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ra extends Us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new O,Oo=new kt;class vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}}class Vp extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gp extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class si extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let h0=0;const yn=new Ae,Ul=new Xe,$s=new O,mn=new xo,Ir=new xo,Ge=new O;class Xn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bp(t)?Gp:Vp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new si(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(mn.min,Ir.min),mn.expandByPoint(Ge),Ge.addVectors(mn.max,Ir.max),mn.expandByPoint(Ge)):(mn.expandByPoint(Ir.min),mn.expandByPoint(Ir.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),Ge.add($s)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new O,l[I]=new O;const c=new O,u=new O,f=new O,d=new kt,p=new kt,g=new kt,_=new O,m=new O;function h(I,w,b){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[w].add(_),a[b].add(_),l[I].add(m),l[w].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,w=x.length;I<w;++I){const b=x[I],D=b.start,it=b.count;for(let $=D,st=D+it;$<st;$+=3)h(t.getX($+0),t.getX($+1),t.getX($+2))}const v=new O,y=new O,R=new O,C=new O;function P(I){R.fromBufferAttribute(s,I),C.copy(R);const w=a[I];v.copy(w),v.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(C,w);const D=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,D)}for(let I=0,w=x.length;I<w;++I){const b=x[I],D=b.start,it=b.count;for(let $=D,st=D+it;$<st;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new Ae,hs=new Ou,Bo=new ja,sh=new O,ko=new O,zo=new O,Ho=new O,Il=new O,Vo=new O,rh=new O,Go=new O;class An extends Xe{constructor(t=new Xn,e=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Il.fromBufferAttribute(f,t),o?Vo.addScaledVector(Il,u):Vo.addScaledVector(Il.sub(e),u))}e.add(Vo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(Bo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Bo,sh)===null||hs.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),hs.copy(t.ray).applyMatrix4(ih),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const C=a.getX(y),P=a.getX(y+1),I=a.getX(y+2);s=Wo(this,h,t,i,c,u,f,C,P,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Wo(this,o,t,i,c,u,f,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,R=v;y<R;y+=3){const C=y,P=y+1,I=y+2;s=Wo(this,h,t,i,c,u,f,C,P,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,y=m+2;s=Wo(this,o,t,i,c,u,f,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function d0(n,t,e,i,s,r,o,a){let l;if(t.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Qi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:n}}function Wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ko),n.getVertexPosition(l,zo),n.getVertexPosition(c,Ho);const u=d0(n,t,e,i,ko,zo,Ho,rh);if(u){const f=new O;wn.getBarycoord(rh,ko,zo,Ho,f),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,f,new kt)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,f,new kt)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};wn.getNormal(ko,zo,Ho,d.normal),u.face=d,u.barycoord=f}return u}class wr extends Xn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function g(_,m,h,x,v,y,R,C,P,I,w){const b=y/P,D=R/I,it=y/2,$=R/2,st=C/2,ft=P+1,X=I+1;let ct=0,W=0;const At=new O;for(let q=0;q<X;q++){const F=q*D-$;for(let G=0;G<ft;G++){const St=G*b-it;At[_]=St*x,At[m]=F*v,At[h]=st,c.push(At.x,At.y,At.z),At[_]=0,At[m]=0,At[h]=C>0?1:-1,u.push(At.x,At.y,At.z),f.push(G/P),f.push(1-q/I),ct+=1}}for(let q=0;q<I;q++)for(let F=0;F<P;F++){const G=d+F+ft*q,St=d+F+ft*(q+1),Z=d+(F+1)+ft*(q+1),lt=d+(F+1)+ft*q;l.push(G,St,lt),l.push(St,Z,lt),W+=6}a.addGroup(p,W,w),p+=W,d+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=Sr(n[e]);for(const s in i)t[s]=i[s]}return t}function p0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const m0={clone:Sr,merge:on};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Xp extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new O,oh=new kt,ah=new kt;class En extends Xp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,Ys=1;class v0 extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(qs,Ys,t,e);s.layers=this.layers,this.add(s);const r=new En(qs,Ys,t,e);r.layers=this.layers,this.add(r);const o=new En(qs,Ys,t,e);o.layers=this.layers,this.add(o);const a=new En(qs,Ys,t,e);a.layers=this.layers,this.add(a);const l=new En(qs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new En(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $p extends cn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x0 extends Ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $p(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wr(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Yi});r.uniforms.tEquirect.value=e;const o=new An(s,r),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=ni),new v0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Nl=new O,y0=new O,M0=new se;class vs{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Nl.subVectors(i,e).cross(y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||M0.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new ja,Xo=new O;class ku{constructor(t=new vs,e=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],h=s[12],x=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-p,y-h).normalize(),i[1].setComponents(l+r,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+x).normalize(),i[3].setComponents(l-o,d-u,m-g,y-x).normalize(),i[4].setComponents(l-a,d-f,m-_,y-v).normalize(),e===Ei)i[5].setComponents(l+a,d+f,m+_,y+v).normalize();else if(e===Aa)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function S0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class yo extends Xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,y=x+c*(h+1),R=x+1+c*(h+1),C=x+1+c*h;p.push(v,y,C),p.push(y,R,C)}this.setIndex(p),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:b0,alphahash_pars_fragment:E0,alphamap_fragment:w0,alphamap_pars_fragment:T0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:I0,bsdfs:N0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:$0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:Q0,colorspace_pars_fragment:tx,envmap_fragment:ex,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Sx,lights_fragment_maps:bx,lights_fragment_end:Ex,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Nx,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Kx,opaque_fragment:jx,packing:Zx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:ty,dithering_pars_fragment:ey,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:fy,specularmap_fragment:hy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:My,background_vert:Sy,background_frag:by,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distanceRGBA_vert:Py,distanceRGBA_frag:Ly,equirect_vert:Dy,equirect_frag:Uy,linedashed_vert:Iy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:ky,meshmatcap_vert:zy,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:$y,meshphysical_frag:qy,meshtoon_vert:Yy,meshtoon_frag:Ky,points_vert:jy,points_frag:Zy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:tM,sprite_frag:eM},Dt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Qn={basic:{uniforms:on([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:on([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:on([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:on([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:on([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:on([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:on([Dt.points,Dt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:on([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:on([Dt.common,Dt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:on([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:on([Dt.sprite,Dt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:on([Dt.common,Dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:on([Dt.lights,Dt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Qn.physical={uniforms:on([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const $o={r:0,b:0,g:0},ps=new Wn,nM=new Ae;function iM(n,t,e,i,s,r,o){const a=new le(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?h(a,l):y&&y.isColor&&(h(y,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ya)?(u===void 0&&(u=new An(new wr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Sr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(ps)),u.material.toneMapped=ae.getTransfer(y.colorSpace)!==ye,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new An(new yo(2,2),new ts({name:"BackgroundMaterial",uniforms:Sr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB($o,Wp(n)),i.buffers.color.setClear($o.r,$o.g,$o.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m}}function sM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(b,D,it,$,st){let ft=!1;const X=f($,it,D);r!==X&&(r=X,c(r.object)),ft=p(b,$,it,st),ft&&g(b,$,it,st),st!==null&&t.update(st,n.ELEMENT_ARRAY_BUFFER),(ft||o)&&(o=!1,y(b,D,it,$),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,D,it){const $=it.wireframe===!0;let st=i[b.id];st===void 0&&(st={},i[b.id]=st);let ft=st[D.id];ft===void 0&&(ft={},st[D.id]=ft);let X=ft[$];return X===void 0&&(X=d(l()),ft[$]=X),X}function d(b){const D=[],it=[],$=[];for(let st=0;st<e;st++)D[st]=0,it[st]=0,$[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:it,attributeDivisors:$,object:b,attributes:{},index:null}}function p(b,D,it,$){const st=r.attributes,ft=D.attributes;let X=0;const ct=it.getAttributes();for(const W in ct)if(ct[W].location>=0){const q=st[W];let F=ft[W];if(F===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),q===void 0||q.attribute!==F||F&&q.data!==F.data)return!0;X++}return r.attributesNum!==X||r.index!==$}function g(b,D,it,$){const st={},ft=D.attributes;let X=0;const ct=it.getAttributes();for(const W in ct)if(ct[W].location>=0){let q=ft[W];q===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const F={};F.attribute=q,q&&q.data&&(F.data=q.data),st[W]=F,X++}r.attributes=st,r.attributesNum=X,r.index=$}function _(){const b=r.newAttributes;for(let D=0,it=b.length;D<it;D++)b[D]=0}function m(b){h(b,0)}function h(b,D){const it=r.newAttributes,$=r.enabledAttributes,st=r.attributeDivisors;it[b]=1,$[b]===0&&(n.enableVertexAttribArray(b),$[b]=1),st[b]!==D&&(n.vertexAttribDivisor(b,D),st[b]=D)}function x(){const b=r.newAttributes,D=r.enabledAttributes;for(let it=0,$=D.length;it<$;it++)D[it]!==b[it]&&(n.disableVertexAttribArray(it),D[it]=0)}function v(b,D,it,$,st,ft,X){X===!0?n.vertexAttribIPointer(b,D,it,st,ft):n.vertexAttribPointer(b,D,it,$,st,ft)}function y(b,D,it,$){_();const st=$.attributes,ft=it.getAttributes(),X=D.defaultAttributeValues;for(const ct in ft){const W=ft[ct];if(W.location>=0){let At=st[ct];if(At===void 0&&(ct==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),ct==="instanceColor"&&b.instanceColor&&(At=b.instanceColor)),At!==void 0){const q=At.normalized,F=At.itemSize,G=t.get(At);if(G===void 0)continue;const St=G.buffer,Z=G.type,lt=G.bytesPerElement,bt=Z===n.INT||Z===n.UNSIGNED_INT||At.gpuType===Lu;if(At.isInterleavedBufferAttribute){const mt=At.data,Ot=mt.stride,Bt=At.offset;if(mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<W.locationSize;Kt++)h(W.location+Kt,mt.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)m(W.location+Kt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Kt=0;Kt<W.locationSize;Kt++)v(W.location+Kt,F/W.locationSize,Z,q,Ot*lt,(Bt+F/W.locationSize*Kt)*lt,bt)}else{if(At.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)h(W.location+mt,At.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let mt=0;mt<W.locationSize;mt++)v(W.location+mt,F/W.locationSize,Z,q,F*lt,F/W.locationSize*mt*lt,bt)}}else if(X!==void 0){const q=X[ct];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(W.location,q);break;case 3:n.vertexAttrib3fv(W.location,q);break;case 4:n.vertexAttrib4fv(W.location,q);break;default:n.vertexAttrib1fv(W.location,q)}}}}x()}function R(){I();for(const b in i){const D=i[b];for(const it in D){const $=D[it];for(const st in $)u($[st].object),delete $[st];delete D[it]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const it in D){const $=D[it];for(const st in $)u($[st].object),delete $[st];delete D[it]}delete i[b.id]}function P(b){for(const D in i){const it=i[D];if(it[b.id]===void 0)continue;const $=it[b.id];for(const st in $)u($[st].object),delete $[st];delete it[b.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function rM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Nn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ui&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bi&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function aM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vs,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,v=x*4;let y=h.clippingState||null;l.value=y,y=u(g,d,v,p);for(let R=0;R!==v;++R)y[R]=e[R];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lM(n){let t=new WeakMap;function e(o,a){return a===Mc?o.mapping=vr:a===Sc&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mc||a===Sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new x0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yp extends Xp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,lh=[.125,.215,.35,.446,.526,.582],Ms=20,Fl=new Yp,ch=new le;let Ol=null,Bl=0,kl=0,zl=!1;const xs=(1+Math.sqrt(5))/2,Ks=1/xs,uh=[new O(-xs,Ks,0),new O(xs,Ks,0),new O(-Ks,0,xs),new O(Ks,0,xs),new O(0,xs,-Ks),new O(0,xs,Ks),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,kl),this._renderer.xr.enabled=zl,t.scissorTest=!1,qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:vo,format:Nn,colorSpace:br,depthBuffer:!1},s=hh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cM(r)),this._blurMaterial=uM(r,t,e)}return s}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,Fl)}_sceneToCubeUV(t,e,i,s){const a=new En(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ch),u.toneMapping=Ki,u.autoClear=!1;const p=new Ra({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new An(new wr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ch),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;qo(s,x*v,h>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===vr||t.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Fl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const h=[];let x=0;for(let P=0;P<Ms;++P){const I=P/_,w=Math.exp(-I*I/2);h.push(w),P===0?x+=w:P<m&&(x+=2*w)}for(let P=0;P<h.length;P++)h[P]=h[P]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[s],R=3*y*(s>v-sr?s-v+sr:0),C=4*(this._cubeSize-y);qo(e,R,C,3*y,2*y),l.setRenderTarget(e),l.render(f,Fl)}}function cM(n){const t=[],e=[],i=[];let s=n;const r=n-sr+1+lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-sr?l=lh[o-n+sr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,I=C>2?0:-1,w=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];x.set(w,_*g*C),v.set(d,m*g*C);const b=[C,C,C,C,C,C];y.set(b,h*g*C)}const R=new Xn;R.setAttribute("position",new vn(x,_)),R.setAttribute("uv",new vn(v,m)),R.setAttribute("faceIndex",new vn(y,h)),t.push(R),s>sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hh(n,t,e){const i=new Ps(n,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function uM(n,t,e){const i=new Float32Array(Ms),s=new O(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function dh(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ph(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mc||l===Sc,u=l===vr||l===xr;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new fh(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new fh(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function hM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dM(n,t,e,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const R=x[v+0],C=x[v+1],P=x[v+2];d.push(R,C,C,P,P,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const R=v+0,C=v+1,P=v+2;d.push(R,C,C,P,P,R)}}else return;const m=new(Bp(d)?Gp:Vp)(d,1);m.version=_;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x]*_[x];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gM(n,t,e){const i=new WeakMap,s=new De;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*R*4*f),P=new zp(C,y,R,f);P.type=bi,P.needsUpdate=!0;const I=v*4;for(let b=0;b<f;b++){const D=m[b],it=h[b],$=x[b],st=y*R*4*b;for(let ft=0;ft<D.count;ft++){const X=ft*I;p===!0&&(s.fromBufferAttribute(D,ft),C[st+X+0]=s.x,C[st+X+1]=s.y,C[st+X+2]=s.z,C[st+X+3]=0),g===!0&&(s.fromBufferAttribute(it,ft),C[st+X+4]=s.x,C[st+X+5]=s.y,C[st+X+6]=s.z,C[st+X+7]=0),_===!0&&(s.fromBufferAttribute($,ft),C[st+X+8]=s.x,C[st+X+9]=s.y,C[st+X+10]=s.z,C[st+X+11]=$.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new kt(y,R)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _M(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Kp extends cn{constructor(t,e,i,s,r,o,a,l,c,u=fr){if(u!==fr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fr&&(i=Rs),i===void 0&&u===Mr&&(i=yr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jp=new cn,mh=new Kp(1,1),Zp=new zp,Jp=new i0,Qp=new $p,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function Tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Za(n,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function MM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function SM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;yh.set(i),n.uniformMatrix2fv(this.addr,!1,yh),Ve(e,i)}}function bM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;xh.set(i),n.uniformMatrix3fv(this.addr,!1,xh),Ve(e,i)}}function EM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),Ve(e,i)}}function wM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function RM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function LM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function DM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function UM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mh.compareFunction=Op,r=mh):r=jp,e.setTexture2D(t||r,s)}function IM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jp,s)}function NM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qp,s)}function FM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zp,s)}function OM(n){switch(n){case 5126:return vM;case 35664:return xM;case 35665:return yM;case 35666:return MM;case 35674:return SM;case 35675:return bM;case 35676:return EM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return FM}}function BM(n,t){n.uniform1fv(this.addr,t)}function kM(n,t){const e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function zM(n,t){const e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function HM(n,t){const e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function VM(n,t){const e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function GM(n,t){const e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function WM(n,t){const e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function XM(n,t){n.uniform1iv(this.addr,t)}function $M(n,t){n.uniform2iv(this.addr,t)}function qM(n,t){n.uniform3iv(this.addr,t)}function YM(n,t){n.uniform4iv(this.addr,t)}function KM(n,t){n.uniform1uiv(this.addr,t)}function jM(n,t){n.uniform2uiv(this.addr,t)}function ZM(n,t){n.uniform3uiv(this.addr,t)}function JM(n,t){n.uniform4uiv(this.addr,t)}function QM(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jp,r[o])}function tS(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jp,r[o])}function eS(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qp,r[o])}function nS(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zp,r[o])}function iS(n){switch(n){case 5126:return BM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return $M;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return KM;case 36294:return jM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return nS}}class sS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=OM(e.type)}}class rS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iS(e.type)}}class oS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Mh(n,t){n.seq.push(t),n.map[t.id]=t}function aS(n,t,e){const i=n.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mh(e,c===void 0?new sS(a,n,t):new rS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new oS(a),Mh(e,f)),e=f}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);aS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Sh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const lS=37297;let cS=0;function uS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const bh=new se;function fS(n){ae._getMatrix(bh,ae.workingColorSpace,n);const t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Ka:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+uS(n.getShaderSource(t),o)}else return s}function hS(n,t){const e=fS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dS(n,t){let e;switch(t){case Pv:e="Linear";break;case Lv:e="Reinhard";break;case Dv:e="Cineon";break;case Uv:e="ACESFilmic";break;case Nv:e="AgX";break;case Fv:e="Neutral";break;case Iv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new O;function pS(){ae.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function gS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _S(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wr(n){return n!==""}function wh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(vS,yS)}const xS=new Map;function yS(n,t){let e=re[t];if(e===void 0){const i=xS.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Qc(e)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(n){return n.replace(MS,SS)}function SS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===cv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function ES(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function TS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ep:t="ENVMAP_BLENDING_MULTIPLY";break;case Cv:t="ENVMAP_BLENDING_MIX";break;case Rv:t="ENVMAP_BLENDING_ADD";break}return t}function AS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function CS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bS(e),c=ES(e),u=wS(e),f=TS(e),d=AS(e),p=mS(e),g=gS(r),_=s.createProgram();let m,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),h=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?re.tonemapping_pars_fragment:"",e.toneMapping!==Ki?dS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,hS("linearToOutputTexel",e.outputColorSpace),pS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Qc(o),o=wh(o,e),o=Th(o,e),a=Qc(a),a=wh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,y=x+h+a,R=Sh(s,s.VERTEX_SHADER,v),C=Sh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const it=s.getProgramInfoLog(_).trim(),$=s.getShaderInfoLog(R).trim(),st=s.getShaderInfoLog(C).trim();let ft=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ft=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,C);else{const ct=Eh(s,R,"vertex"),W=Eh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+it+`
`+ct+`
`+W)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):($===""||st==="")&&(X=!1);X&&(D.diagnostics={runnable:ft,programLog:it,vertexShader:{log:$,prefix:m},fragmentShader:{log:st,prefix:h}})}s.deleteShader(R),s.deleteShader(C),I=new da(s,_),w=_S(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,lS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let RS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new LS(t),e.set(t,i)),i}}class LS{constructor(t){this.id=RS++,this.code=t,this.usedTimes=0}}function DS(n,t,e,i,s,r,o){const a=new Bu,l=new PS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,D,it,$){const st=it.fog,ft=$.geometry,X=w.isMeshStandardMaterial?it.environment:null,ct=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),W=ct&&ct.mapping===Ya?ct.image.height:null,At=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const q=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,F=q!==void 0?q.length:0;let G=0;ft.morphAttributes.position!==void 0&&(G=1),ft.morphAttributes.normal!==void 0&&(G=2),ft.morphAttributes.color!==void 0&&(G=3);let St,Z,lt,bt;if(At){const rt=Qn[At];St=rt.vertexShader,Z=rt.fragmentShader}else St=w.vertexShader,Z=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),bt=l.getFragmentShaderID(w);const mt=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),Bt=$.isInstancedMesh===!0,Kt=$.isBatchedMesh===!0,ie=!!w.map,A=!!w.matcap,U=!!ct,T=!!w.aoMap,ht=!!w.lightMap,tt=!!w.bumpMap,et=!!w.normalMap,at=!!w.displacementMap,gt=!!w.emissiveMap,nt=!!w.metalnessMap,S=!!w.roughnessMap,M=w.anisotropy>0,L=w.clearcoat>0,V=w.dispersion>0,J=w.iridescence>0,Q=w.sheen>0,wt=w.transmission>0,_t=M&&!!w.anisotropyMap,Et=L&&!!w.clearcoatMap,Wt=L&&!!w.clearcoatNormalMap,xt=L&&!!w.clearcoatRoughnessMap,Pt=J&&!!w.iridescenceMap,Vt=J&&!!w.iridescenceThicknessMap,$t=Q&&!!w.sheenColorMap,Ct=Q&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Yt=!!w.specularColorMap,ce=!!w.specularIntensityMap,k=wt&&!!w.transmissionMap,Ut=wt&&!!w.thicknessMap,ot=!!w.gradientMap,pt=!!w.alphaMap,Ft=w.alphaTest>0,Nt=!!w.alphaHash,Qt=!!w.extensions;let H=Ki;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(H=n.toneMapping);const dt={shaderID:At,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:Z,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&$._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&$.instanceColor!==null,instancingMorph:Bt&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:br,alphaToCoverage:!!w.alphaToCoverage,map:ie,matcap:A,envMap:U,envMapMode:U&&ct.mapping,envMapCubeUVHeight:W,aoMap:T,lightMap:ht,bumpMap:tt,normalMap:et,displacementMap:d&&at,emissiveMap:gt,normalMapObjectSpace:et&&w.normalMapType===zv,normalMapTangentSpace:et&&w.normalMapType===Fp,metalnessMap:nt,roughnessMap:S,anisotropy:M,anisotropyMap:_t,clearcoat:L,clearcoatMap:Et,clearcoatNormalMap:Wt,clearcoatRoughnessMap:xt,dispersion:V,iridescence:J,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:Q,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:Zt,specularColorMap:Yt,specularIntensityMap:ce,transmission:wt,transmissionMap:k,thicknessMap:Ut,gradientMap:ot,opaque:w.transparent===!1&&w.blending===ur&&w.alphaToCoverage===!1,alphaMap:pt,alphaTest:Ft,alphaHash:Nt,combine:w.combine,mapUv:ie&&_(w.map.channel),aoMapUv:T&&_(w.aoMap.channel),lightMapUv:ht&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:et&&_(w.normalMap.channel),displacementMapUv:at&&_(w.displacementMap.channel),emissiveMapUv:gt&&_(w.emissiveMap.channel),metalnessMapUv:nt&&_(w.metalnessMap.channel),roughnessMapUv:S&&_(w.roughnessMap.channel),anisotropyMapUv:_t&&_(w.anisotropyMap.channel),clearcoatMapUv:Et&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(w.sheenRoughnessMap.channel),specularMapUv:Zt&&_(w.specularMap.channel),specularColorMapUv:Yt&&_(w.specularColorMap.channel),specularIntensityMapUv:ce&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:Ut&&_(w.thicknessMap.channel),alphaMapUv:pt&&_(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(et||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ft.attributes.uv&&(ie||pt),fog:!!st,useFog:w.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ot,skinning:$.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:H,decodeVideoTexture:ie&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:gt&&w.emissiveMap.isVideoTexture===!0&&ae.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&w.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(b,w),v(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const b=g[w.type];let D;if(b){const it=Qn[b];D=m0.clone(it.uniforms)}else D=w.uniforms;return D}function R(w,b){let D;for(let it=0,$=u.length;it<$;it++){const st=u[it];if(st.cacheKey===b){D=st,++D.usedTimes;break}}return D===void 0&&(D=new CS(n,b,w,r),u.push(D)),D}function C(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:I}}function US(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function IS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ph(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,d,p,g,_,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),t++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||IS),i.length>1&&i.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function NS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ph,n.set(i,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function FS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new le};break;case"SpotLight":e={position:new O,direction:new O,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function OS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let BS=0;function kS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zS(n){const t=new FS,e=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Ae,o=new Ae;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,v=0,y=0,R=0,C=0,P=0;c.sort(kS);for(let w=0,b=c.length;w<b;w++){const D=c[w],it=D.color,$=D.intensity,st=D.distance,ft=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=it.r*$,f+=it.g*$,d+=it.b*$;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],$);P++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ct=D.shadow,W=e.get(D);W.shadowIntensity=ct.intensity,W.shadowBias=ct.bias,W.shadowNormalBias=ct.normalBias,W.shadowRadius=ct.radius,W.shadowMapSize=ct.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ft,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(it).multiplyScalar($),X.distance=st,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const ct=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,ct.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=ct.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=ct.intensity,W.shadowBias=ct.bias,W.shadowNormalBias=ct.normalBias,W.shadowRadius=ct.radius,W.shadowMapSize=ct.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=ft,y++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(it).multiplyScalar($),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ct=D.shadow,W=e.get(D);W.shadowIntensity=ct.intensity,W.shadowBias=ct.bias,W.shadowNormalBias=ct.normalBias,W.shadowRadius=ct.radius,W.shadowMapSize=ct.mapSize,W.shadowCameraNear=ct.camera.near,W.shadowCameraFar=ct.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=ft,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar($),X.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[h]=X,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=P,i.version=BS++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Lh(n){const t=new zS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function HS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Lh(n),t.set(s,[a])):r>=o.length?(a=new Lh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class VS extends Us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GS extends Us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $S(n,t,e){let i=new ku;const s=new kt,r=new kt,o=new De,a=new VS({depthPacking:kv}),l=new GS,c={},u=e.maxTextureSize,f={[Qi]:hn,[hn]:Qi,[Si]:Si},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let h=this.type;this.render=function(C,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),it=n.state;it.setBlending(Yi),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const $=h!==gi&&this.type===gi,st=h===gi&&this.type!==gi;for(let ft=0,X=C.length;ft<X;ft++){const ct=C[ft],W=ct.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const At=W.getFrameExtents();if(s.multiply(At),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/At.x),s.x=r.x*At.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/At.y),s.y=r.y*At.y,W.mapSize.y=r.y)),W.map===null||$===!0||st===!0){const F=this.type!==gi?{minFilter:zn,magFilter:zn}:{};W.map!==null&&W.map.dispose(),W.map=new Ps(s.x,s.y,F),W.map.texture.name=ct.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const q=W.getViewportCount();for(let F=0;F<q;F++){const G=W.getViewport(F);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),it.viewport(o),W.updateMatrices(ct,F),i=W.getFrustum(),y(P,I,W.camera,ct,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&x(W,I),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,D)};function x(C,P){const I=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ps(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,I,p,_,null)}function v(C,P,I,w){let b=null;const D=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const it=b.uuid,$=P.uuid;let st=c[it];st===void 0&&(st={},c[it]=st);let ft=st[$];ft===void 0&&(ft=b.clone(),st[$]=ft,P.addEventListener("dispose",R)),b=ft}if(b.visible=P.visible,b.wireframe=P.wireframe,w===gi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const it=n.properties.get(b);it.light=I}return b}function y(C,P,I,w,b){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===gi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const $=t.update(C),st=C.material;if(Array.isArray(st)){const ft=$.groups;for(let X=0,ct=ft.length;X<ct;X++){const W=ft[X],At=st[W.materialIndex];if(At&&At.visible){const q=v(C,At,w,b);C.onBeforeShadow(n,C,P,I,$,q,W),n.renderBufferDirect(I,null,$,q,C,W),C.onAfterShadow(n,C,P,I,$,q,W)}}}else if(st.visible){const ft=v(C,st,w,b);C.onBeforeShadow(n,C,P,I,$,ft,null),n.renderBufferDirect(I,null,$,ft,C,null),C.onAfterShadow(n,C,P,I,$,ft,null)}}const it=C.children;for(let $=0,st=it.length;$<st;$++)y(it[$],P,I,w,b)}function R(C){C.target.removeEventListener("dispose",R);for(const I in c){const w=c[I],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const qS={[pc]:mc,[gc]:xc,[_c]:yc,[_r]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:_r};function YS(n,t){function e(){let k=!1;const Ut=new De;let ot=null;const pt=new De(0,0,0,0);return{setMask:function(Ft){ot!==Ft&&!k&&(n.colorMask(Ft,Ft,Ft,Ft),ot=Ft)},setLocked:function(Ft){k=Ft},setClear:function(Ft,Nt,Qt,H,dt){dt===!0&&(Ft*=H,Nt*=H,Qt*=H),Ut.set(Ft,Nt,Qt,H),pt.equals(Ut)===!1&&(n.clearColor(Ft,Nt,Qt,H),pt.copy(Ut))},reset:function(){k=!1,ot=null,pt.set(-1,0,0,0)}}}function i(){let k=!1,Ut=!1,ot=null,pt=null,Ft=null;return{setReversed:function(Nt){if(Ut!==Nt){const Qt=t.get("EXT_clip_control");Ut?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const H=Ft;Ft=null,this.setClear(H)}Ut=Nt},getReversed:function(){return Ut},setTest:function(Nt){Nt?mt(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(n.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Ut&&(Nt=qS[Nt]),pt!==Nt){switch(Nt){case pc:n.depthFunc(n.NEVER);break;case mc:n.depthFunc(n.ALWAYS);break;case gc:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case xc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Ft!==Nt&&(Ut&&(Nt=1-Nt),n.clearDepth(Nt),Ft=Nt)},reset:function(){k=!1,ot=null,pt=null,Ft=null,Ut=!1}}}function s(){let k=!1,Ut=null,ot=null,pt=null,Ft=null,Nt=null,Qt=null,H=null,dt=null;return{setTest:function(rt){k||(rt?mt(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(rt){Ut!==rt&&!k&&(n.stencilMask(rt),Ut=rt)},setFunc:function(rt,Rt,Xt){(ot!==rt||pt!==Rt||Ft!==Xt)&&(n.stencilFunc(rt,Rt,Xt),ot=rt,pt=Rt,Ft=Xt)},setOp:function(rt,Rt,Xt){(Nt!==rt||Qt!==Rt||H!==Xt)&&(n.stencilOp(rt,Rt,Xt),Nt=rt,Qt=Rt,H=Xt)},setLocked:function(rt){k=rt},setClear:function(rt){dt!==rt&&(n.clearStencil(rt),dt=rt)},reset:function(){k=!1,Ut=null,ot=null,pt=null,Ft=null,Nt=null,Qt=null,H=null,dt=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,y=null,R=null,C=null,P=new le(0,0,0),I=0,w=!1,b=null,D=null,it=null,$=null,st=null;const ft=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ct=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ct>=1):W.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ct>=2);let At=null,q={};const F=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),St=new De().fromArray(F),Z=new De().fromArray(G);function lt(k,Ut,ot,pt){const Ft=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(k,Nt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<ot;Qt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ut,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Ut+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return Nt}const bt={};bt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(_r),tt(!1),et(Of),mt(n.CULL_FACE),T(Yi);function mt(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Ot(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function Bt(k,Ut){return f[k]!==Ut?(n.bindFramebuffer(k,Ut),f[k]=Ut,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ut),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let ot=p,pt=!1;if(k){ot=d.get(Ut),ot===void 0&&(ot=[],d.set(Ut,ot));const Ft=k.textures;if(ot.length!==Ft.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,Qt=Ft.length;Nt<Qt;Nt++)ot[Nt]=n.COLOR_ATTACHMENT0+Nt;ot.length=Ft.length,pt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,pt=!0);pt&&n.drawBuffers(ot)}function ie(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const A={[ys]:n.FUNC_ADD,[fv]:n.FUNC_SUBTRACT,[hv]:n.FUNC_REVERSE_SUBTRACT};A[dv]=n.MIN,A[pv]=n.MAX;const U={[mv]:n.ZERO,[gv]:n.ONE,[_v]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[bv]:n.SRC_ALPHA_SATURATE,[Mv]:n.DST_COLOR,[xv]:n.DST_ALPHA,[vv]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[Sv]:n.ONE_MINUS_DST_COLOR,[yv]:n.ONE_MINUS_DST_ALPHA,[Ev]:n.CONSTANT_COLOR,[wv]:n.ONE_MINUS_CONSTANT_COLOR,[Tv]:n.CONSTANT_ALPHA,[Av]:n.ONE_MINUS_CONSTANT_ALPHA};function T(k,Ut,ot,pt,Ft,Nt,Qt,H,dt,rt){if(k===Yi){_===!0&&(Ot(n.BLEND),_=!1);return}if(_===!1&&(mt(n.BLEND),_=!0),k!==uv){if(k!==m||rt!==w){if((h!==ys||y!==ys)&&(n.blendEquation(n.FUNC_ADD),h=ys,y=ys),rt)switch(k){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ta:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ta:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,v=null,R=null,C=null,P.set(0,0,0),I=0,m=k,w=rt}return}Ft=Ft||Ut,Nt=Nt||ot,Qt=Qt||pt,(Ut!==h||Ft!==y)&&(n.blendEquationSeparate(A[Ut],A[Ft]),h=Ut,y=Ft),(ot!==x||pt!==v||Nt!==R||Qt!==C)&&(n.blendFuncSeparate(U[ot],U[pt],U[Nt],U[Qt]),x=ot,v=pt,R=Nt,C=Qt),(H.equals(P)===!1||dt!==I)&&(n.blendColor(H.r,H.g,H.b,dt),P.copy(H),I=dt),m=k,w=!1}function ht(k,Ut){k.side===Si?Ot(n.CULL_FACE):mt(n.CULL_FACE);let ot=k.side===hn;Ut&&(ot=!ot),tt(ot),k.blending===ur&&k.transparent===!1?T(Yi):T(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const pt=k.stencilWrite;a.setTest(pt),pt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function et(k){k!==av?(mt(n.CULL_FACE),k!==D&&(k===Of?n.cullFace(n.BACK):k===lv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),D=k}function at(k){k!==it&&(X&&n.lineWidth(k),it=k)}function gt(k,Ut,ot){k?(mt(n.POLYGON_OFFSET_FILL),($!==Ut||st!==ot)&&(n.polygonOffset(Ut,ot),$=Ut,st=ot)):Ot(n.POLYGON_OFFSET_FILL)}function nt(k){k?mt(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function S(k){k===void 0&&(k=n.TEXTURE0+ft-1),At!==k&&(n.activeTexture(k),At=k)}function M(k,Ut,ot){ot===void 0&&(At===null?ot=n.TEXTURE0+ft-1:ot=At);let pt=q[ot];pt===void 0&&(pt={type:void 0,texture:void 0},q[ot]=pt),(pt.type!==k||pt.texture!==Ut)&&(At!==ot&&(n.activeTexture(ot),At=ot),n.bindTexture(k,Ut||bt[k]),pt.type=k,pt.texture=Ut)}function L(){const k=q[At];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(k){St.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Ct(k){Z.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function Zt(k,Ut){let ot=c.get(Ut);ot===void 0&&(ot=new WeakMap,c.set(Ut,ot));let pt=ot.get(k);pt===void 0&&(pt=n.getUniformBlockIndex(Ut,k.name),ot.set(k,pt))}function Yt(k,Ut){const pt=c.get(Ut).get(k);l.get(Ut)!==pt&&(n.uniformBlockBinding(Ut,pt,k.__bindingPointIndex),l.set(Ut,pt))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},At=null,q={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,y=null,R=null,C=null,P=new le(0,0,0),I=0,w=!1,b=null,D=null,it=null,$=null,st=null,St.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Ot,bindFramebuffer:Bt,drawBuffers:Kt,useProgram:ie,setBlending:T,setMaterial:ht,setFlipSided:tt,setCullFace:et,setLineWidth:at,setPolygonOffset:gt,setScissorTest:nt,activeTexture:S,bindTexture:M,unbindTexture:L,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:Zt,uniformBlockBinding:Yt,texStorage2D:Wt,texStorage3D:xt,texSubImage2D:Q,texSubImage3D:wt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:$t,viewport:Ct,reset:ce}}function Dh(n,t,e,i){const s=KS(i);switch(e){case Rp:return n*t;case Lp:return n*t;case Dp:return n*t*2;case Up:return n*t/s.components*s.byteLength;case Iu:return n*t/s.components*s.byteLength;case Ip:return n*t*2/s.components*s.byteLength;case Nu:return n*t*2/s.components*s.byteLength;case Pp:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case Fu:return n*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Cc:return Math.max(n,16)*Math.max(t,8)/4;case wc:case Ac:return Math.max(n,8)*Math.max(t,8)/2;case Rc:case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ha:case $c:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Np:case Yc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Kc:case jc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function KS(n){switch(n){case Ui:case Tp:return{byteLength:1,components:1};case oo:case Ap:case vo:return{byteLength:2,components:1};case Du:case Uu:return{byteLength:2,components:4};case Rs:case Lu:case bi:return{byteLength:4,components:1};case Cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return p?new OffscreenCanvas(S,M):Ca("canvas")}function _(S,M,L){let V=1;const J=nt(S);if((J.width>L||J.height>L)&&(V=L/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Q=Math.floor(V*J.width),wt=Math.floor(V*J.height);f===void 0&&(f=g(Q,wt));const _t=M?g(Q,wt):f;return _t.width=Q,_t.height=wt,_t.getContext("2d").drawImage(S,0,0,Q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+wt+")."),_t}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function x(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(S,M,L,V,J=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=M;if(M===n.RED&&(L===n.FLOAT&&(Q=n.R32F),L===n.HALF_FLOAT&&(Q=n.R16F),L===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.R8UI),L===n.UNSIGNED_SHORT&&(Q=n.R16UI),L===n.UNSIGNED_INT&&(Q=n.R32UI),L===n.BYTE&&(Q=n.R8I),L===n.SHORT&&(Q=n.R16I),L===n.INT&&(Q=n.R32I)),M===n.RG&&(L===n.FLOAT&&(Q=n.RG32F),L===n.HALF_FLOAT&&(Q=n.RG16F),L===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RG8UI),L===n.UNSIGNED_SHORT&&(Q=n.RG16UI),L===n.UNSIGNED_INT&&(Q=n.RG32UI),L===n.BYTE&&(Q=n.RG8I),L===n.SHORT&&(Q=n.RG16I),L===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),L===n.UNSIGNED_INT&&(Q=n.RGB32UI),L===n.BYTE&&(Q=n.RGB8I),L===n.SHORT&&(Q=n.RGB16I),L===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),L===n.UNSIGNED_INT&&(Q=n.RGBA32UI),L===n.BYTE&&(Q=n.RGBA8I),L===n.SHORT&&(Q=n.RGBA16I),L===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),M===n.RGBA){const wt=J?Ka:ae.getTransfer(V);L===n.FLOAT&&(Q=n.RGBA32F),L===n.HALF_FLOAT&&(Q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Q=wt===ye?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(S,M){let L;return S?M===null||M===Rs||M===yr?L=n.DEPTH24_STENCIL8:M===bi?L=n.DEPTH32F_STENCIL8:M===oo&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rs||M===yr?L=n.DEPTH_COMPONENT24:M===bi?L=n.DEPTH_COMPONENT32F:M===oo&&(L=n.DEPTH_COMPONENT16),L}function R(S,M){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==zn&&S.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function C(S){const M=S.target;M.removeEventListener("dispose",C),I(M),M.isVideoTexture&&u.delete(M)}function P(S){const M=S.target;M.removeEventListener("dispose",P),b(M)}function I(S){const M=i.get(S);if(M.__webglInit===void 0)return;const L=S.source,V=d.get(L);if(V){const J=V[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(S),Object.keys(V).length===0&&d.delete(L)}i.remove(S)}function w(S){const M=i.get(S);n.deleteTexture(M.__webglTexture);const L=S.source,V=d.get(L);delete V[M.__cacheKey],o.memory.textures--}function b(S){const M=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let J=0;J<M.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[V][J]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const L=S.textures;for(let V=0,J=L.length;V<J;V++){const Q=i.get(L[V]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(S)}let D=0;function it(){D=0}function $(){const S=D;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),D+=1,S}function st(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function ft(S,M){const L=i.get(S);if(S.isVideoTexture&&at(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,S,M);return}}e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+M)}function X(S,M){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Z(L,S,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+M)}function ct(S,M){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Z(L,S,M);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+M)}function W(S,M){const L=i.get(S);if(S.version>0&&L.__version!==S.version){lt(L,S,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+M)}const At={[bc]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},q={[zn]:n.NEAREST,[Ov]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},F={[Hv]:n.NEVER,[qv]:n.ALWAYS,[Vv]:n.LESS,[Op]:n.LEQUAL,[Gv]:n.EQUAL,[$v]:n.GEQUAL,[Wv]:n.GREATER,[Xv]:n.NOTEQUAL};function G(S,M){if(M.type===bi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===dl||M.magFilter===Co||M.magFilter===Es||M.minFilter===ni||M.minFilter===dl||M.minFilter===Co||M.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,At[M.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,At[M.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,At[M.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,q[M.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==Co&&M.minFilter!==Es||M.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function St(S,M){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",C));const V=M.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const Q=st(M);if(Q!==S.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[Q].usedTimes++;const wt=J[S.__cacheKey];wt!==void 0&&(J[S.__cacheKey].usedTimes--,wt.usedTimes===0&&w(M)),S.__cacheKey=Q,S.__webglTexture=J[Q].texture}return L}function Z(S,M,L){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const J=St(S,M),Q=M.source;e.bindTexture(V,S.__webglTexture,n.TEXTURE0+L);const wt=i.get(Q);if(Q.version!==wt.__version||J===!0){e.activeTexture(n.TEXTURE0+L);const _t=ae.getPrimaries(ae.workingColorSpace),Et=M.colorSpace===Wi?null:ae.getPrimaries(M.colorSpace),Wt=M.colorSpace===Wi||_t===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let xt=_(M.image,!1,s.maxTextureSize);xt=gt(M,xt);const Pt=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type);let $t=v(M.internalFormat,Pt,Vt,M.colorSpace,M.isVideoTexture);G(V,M);let Ct;const Zt=M.mipmaps,Yt=M.isVideoTexture!==!0,ce=wt.__version===void 0||J===!0,k=Q.dataReady,Ut=R(M,xt);if(M.isDepthTexture)$t=y(M.format===Mr,M.type),ce&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,$t,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,$t,xt.width,xt.height,0,Pt,Vt,null));else if(M.isDataTexture)if(Zt.length>0){Yt&&ce&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,Zt[0].width,Zt[0].height);for(let ot=0,pt=Zt.length;ot<pt;ot++)Ct=Zt[ot],Yt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,Pt,Vt,Ct.data):e.texImage2D(n.TEXTURE_2D,ot,$t,Ct.width,Ct.height,0,Pt,Vt,Ct.data);M.generateMipmaps=!1}else Yt?(ce&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,xt.width,xt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Vt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,$t,xt.width,xt.height,0,Pt,Vt,xt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,$t,Zt[0].width,Zt[0].height,xt.depth);for(let ot=0,pt=Zt.length;ot<pt;ot++)if(Ct=Zt[ot],M.format!==Nn)if(Pt!==null)if(Yt){if(k)if(M.layerUpdates.size>0){const Ft=Dh(Ct.width,Ct.height,M.format,M.type);for(const Nt of M.layerUpdates){const Qt=Ct.data.subarray(Nt*Ft/Ct.data.BYTES_PER_ELEMENT,(Nt+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,Nt,Ct.width,Ct.height,1,Pt,Qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,xt.depth,Pt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,$t,Ct.width,Ct.height,xt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,xt.depth,Pt,Vt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,$t,Ct.width,Ct.height,xt.depth,0,Pt,Vt,Ct.data)}else{Yt&&ce&&e.texStorage2D(n.TEXTURE_2D,Ut,$t,Zt[0].width,Zt[0].height);for(let ot=0,pt=Zt.length;ot<pt;ot++)Ct=Zt[ot],M.format!==Nn?Pt!==null?Yt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,Pt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,$t,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,Pt,Vt,Ct.data):e.texImage2D(n.TEXTURE_2D,ot,$t,Ct.width,Ct.height,0,Pt,Vt,Ct.data)}else if(M.isDataArrayTexture)if(Yt){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,$t,xt.width,xt.height,xt.depth),k)if(M.layerUpdates.size>0){const ot=Dh(xt.width,xt.height,M.format,M.type);for(const pt of M.layerUpdates){const Ft=xt.data.subarray(pt*ot/xt.data.BYTES_PER_ELEMENT,(pt+1)*ot/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,xt.width,xt.height,1,Pt,Vt,Ft)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(M.isData3DTexture)Yt?(ce&&e.texStorage3D(n.TEXTURE_3D,Ut,$t,xt.width,xt.height,xt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,$t,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(M.isFramebufferTexture){if(ce)if(Yt)e.texStorage2D(n.TEXTURE_2D,Ut,$t,xt.width,xt.height);else{let ot=xt.width,pt=xt.height;for(let Ft=0;Ft<Ut;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,$t,ot,pt,0,Pt,Vt,null),ot>>=1,pt>>=1}}else if(Zt.length>0){if(Yt&&ce){const ot=nt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Ut,$t,ot.width,ot.height)}for(let ot=0,pt=Zt.length;ot<pt;ot++)Ct=Zt[ot],Yt?k&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Pt,Vt,Ct):e.texImage2D(n.TEXTURE_2D,ot,$t,Pt,Vt,Ct);M.generateMipmaps=!1}else if(Yt){if(ce){const ot=nt(xt);e.texStorage2D(n.TEXTURE_2D,Ut,$t,ot.width,ot.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Vt,xt)}else e.texImage2D(n.TEXTURE_2D,0,$t,Pt,Vt,xt);m(M)&&h(V),wt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function lt(S,M,L){if(M.image.length!==6)return;const V=St(S,M),J=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const Q=i.get(J);if(J.version!==Q.__version||V===!0){e.activeTexture(n.TEXTURE0+L);const wt=ae.getPrimaries(ae.workingColorSpace),_t=M.colorSpace===Wi?null:ae.getPrimaries(M.colorSpace),Et=M.colorSpace===Wi||wt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,xt=M.image[0]&&M.image[0].isDataTexture,Pt=[];for(let pt=0;pt<6;pt++)!Wt&&!xt?Pt[pt]=_(M.image[pt],!0,s.maxCubemapSize):Pt[pt]=xt?M.image[pt].image:M.image[pt],Pt[pt]=gt(M,Pt[pt]);const Vt=Pt[0],$t=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type),Zt=v(M.internalFormat,$t,Ct,M.colorSpace),Yt=M.isVideoTexture!==!0,ce=Q.__version===void 0||V===!0,k=J.dataReady;let Ut=R(M,Vt);G(n.TEXTURE_CUBE_MAP,M);let ot;if(Wt){Yt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Zt,Vt.width,Vt.height);for(let pt=0;pt<6;pt++){ot=Pt[pt].mipmaps;for(let Ft=0;Ft<ot.length;Ft++){const Nt=ot[Ft];M.format!==Nn?$t!==null?Yt?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,0,0,Nt.width,Nt.height,$t,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,0,0,Nt.width,Nt.height,$t,Ct,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,Zt,Nt.width,Nt.height,0,$t,Ct,Nt.data)}}}else{if(ot=M.mipmaps,Yt&&ce){ot.length>0&&Ut++;const pt=nt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Zt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(xt){Yt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Pt[pt].width,Pt[pt].height,$t,Ct,Pt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,Pt[pt].width,Pt[pt].height,0,$t,Ct,Pt[pt].data);for(let Ft=0;Ft<ot.length;Ft++){const Qt=ot[Ft].image[pt].image;Yt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,0,0,Qt.width,Qt.height,$t,Ct,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,Zt,Qt.width,Qt.height,0,$t,Ct,Qt.data)}}else{Yt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$t,Ct,Pt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,$t,Ct,Pt[pt]);for(let Ft=0;Ft<ot.length;Ft++){const Nt=ot[Ft];Yt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,0,0,$t,Ct,Nt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,Zt,$t,Ct,Nt.image[pt])}}}m(M)&&h(n.TEXTURE_CUBE_MAP),Q.__version=J.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function bt(S,M,L,V,J,Q){const wt=r.convert(L.format,L.colorSpace),_t=r.convert(L.type),Et=v(L.internalFormat,wt,_t,L.colorSpace),Wt=i.get(M),xt=i.get(L);if(xt.__renderTarget=M,!Wt.__hasExternalTextures){const Pt=Math.max(1,M.width>>Q),Vt=Math.max(1,M.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,Et,Pt,Vt,M.depth,0,wt,_t,null):e.texImage2D(J,Q,Et,Pt,Vt,0,wt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,xt.__webglTexture,0,tt(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,xt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(S,M,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),M.depthBuffer){const V=M.depthTexture,J=V&&V.isDepthTexture?V.type:null,Q=y(M.stencilBuffer,J),wt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=tt(M);et(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,Q,M.width,M.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,S)}else{const V=M.textures;for(let J=0;J<V.length;J++){const Q=V[J],wt=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),Et=v(Q.internalFormat,wt,_t,Q.colorSpace),Wt=tt(M);L&&et(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,Et,M.width,M.height):et(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt,Et,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Et,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(M.depthTexture);V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft(M.depthTexture,0);const J=V.__webglTexture,Q=tt(M);if(M.depthTexture.format===fr)et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===Mr)et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Bt(S){const M=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=V}if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,S)}else if(L){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),mt(M.__webglDepthbuffer[V],S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),mt(M.__webglDepthbuffer,S,!1);else{const V=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(S,M,L){const V=i.get(S);M!==void 0&&bt(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Bt(S)}function ie(S){const M=S.texture,L=i.get(S),V=i.get(M);S.addEventListener("dispose",P);const J=S.textures,Q=S.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),Q){L.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[_t]=[];for(let Et=0;Et<M.mipmaps.length;Et++)L.__webglFramebuffer[_t][Et]=n.createFramebuffer()}else L.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)L.__webglFramebuffer[_t]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(wt)for(let _t=0,Et=J.length;_t<Et;_t++){const Wt=i.get(J[_t]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&et(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let _t=0;_t<J.length;_t++){const Et=J[_t];L.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[_t]);const Wt=r.convert(Et.format,Et.colorSpace),xt=r.convert(Et.type),Pt=v(Et.internalFormat,Wt,xt,Et.colorSpace,S.isXRRenderTarget===!0),Vt=tt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Pt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,L.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),G(n.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)bt(L.__webglFramebuffer[_t][Et],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Et);else bt(L.__webglFramebuffer[_t],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(M)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let _t=0,Et=J.length;_t<Et;_t++){const Wt=J[_t],xt=i.get(Wt);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),G(n.TEXTURE_2D,Wt),bt(L.__webglFramebuffer,S,Wt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),m(Wt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(_t=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,V.__webglTexture),G(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)bt(L.__webglFramebuffer[Et],S,M,n.COLOR_ATTACHMENT0,_t,Et);else bt(L.__webglFramebuffer,S,M,n.COLOR_ATTACHMENT0,_t,0);m(M)&&h(_t),e.unbindTexture()}S.depthBuffer&&Bt(S)}function A(S){const M=S.textures;for(let L=0,V=M.length;L<V;L++){const J=M[L];if(m(J)){const Q=x(S),wt=i.get(J).__webglTexture;e.bindTexture(Q,wt),h(Q),e.unbindTexture()}}}const U=[],T=[];function ht(S){if(S.samples>0){if(et(S)===!1){const M=S.textures,L=S.width,V=S.height;let J=n.COLOR_BUFFER_BIT;const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(S),_t=M.length>1;if(_t)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);const Wt=i.get(M[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,J,n.NEAREST),l===!0&&(U.length=0,T.length=0,U.push(n.COLOR_ATTACHMENT0+Et),S.depthBuffer&&S.resolveDepthBuffer===!1&&(U.push(Q),T.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);const Wt=i.get(M[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const M=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function tt(S){return Math.min(s.maxSamples,S.samples)}function et(S){const M=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(S){const M=o.render.frame;u.get(S)!==M&&(u.set(S,M),S.update())}function gt(S,M){const L=S.colorSpace,V=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==br&&L!==Wi&&(ae.getTransfer(L)===ye?(V!==Nn||J!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}function nt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=it,this.setTexture2D=ft,this.setTexture2DArray=X,this.setTexture3D=ct,this.setTextureCube=W,this.rebindTextures=Kt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=et}function ZS(n,t){function e(i,s=Wi){let r;const o=ae.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tp)return n.BYTE;if(i===Ap)return n.SHORT;if(i===oo)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===Rs)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===vo)return n.HALF_FLOAT;if(i===Rp)return n.ALPHA;if(i===Pp)return n.RGB;if(i===Nn)return n.RGBA;if(i===Lp)return n.LUMINANCE;if(i===Dp)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Up)return n.RED;if(i===Iu)return n.RED_INTEGER;if(i===Ip)return n.RG;if(i===Nu)return n.RG_INTEGER;if(i===Fu)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===fa)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Tc||i===Ac||i===Cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Pc||i===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===Pc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Uc||i===Ic||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===$c||i===qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ha)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Np||i===Yc||i===Kc||i===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class JS extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xi extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QS={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ts({vertexShader:tb,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ib extends Er{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=new nb,m=e.getContextAttributes();let h=null,x=null;const v=[],y=[],R=new kt;let C=null;const P=new En;P.viewport=new De;const I=new En;I.viewport=new De;const w=[P,I],b=new JS;let D=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=v[Z];return lt===void 0&&(lt=new Vl,v[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=v[Z];return lt===void 0&&(lt=new Vl,v[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=v[Z];return lt===void 0&&(lt=new Vl,v[Z]=lt),lt.getHandSpace()};function $(Z){const lt=y.indexOf(Z.inputSource);if(lt===-1)return;const bt=v[lt];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||o),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function st(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<v.length;Z++){const lt=y[Z];lt!==null&&(y[Z]=null,v[Z].disconnect(lt))}D=null,it=null,_.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,x=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",st),s.addEventListener("inputsourceschange",ft),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ps(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,bt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?Mr:fr,bt=m.stencil?yr:Rs);const Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ps(d.textureWidth,d.textureHeight,{format:Nn,type:Ui,depthTexture:new Kp(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ft(Z){for(let lt=0;lt<Z.removed.length;lt++){const bt=Z.removed[lt],mt=y.indexOf(bt);mt>=0&&(y[mt]=null,v[mt].disconnect(bt))}for(let lt=0;lt<Z.added.length;lt++){const bt=Z.added[lt];let mt=y.indexOf(bt);if(mt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=y.length){y.push(bt),mt=Bt;break}else if(y[Bt]===null){y[Bt]=bt,mt=Bt;break}if(mt===-1)break}const Ot=v[mt];Ot&&Ot.connect(bt)}}const X=new O,ct=new O;function W(Z,lt,bt){X.setFromMatrixPosition(lt.matrixWorld),ct.setFromMatrixPosition(bt.matrixWorld);const mt=X.distanceTo(ct),Ot=lt.projectionMatrix.elements,Bt=bt.projectionMatrix.elements,Kt=Ot[14]/(Ot[10]-1),ie=Ot[14]/(Ot[10]+1),A=(Ot[9]+1)/Ot[5],U=(Ot[9]-1)/Ot[5],T=(Ot[8]-1)/Ot[0],ht=(Bt[8]+1)/Bt[0],tt=Kt*T,et=Kt*ht,at=mt/(-T+ht),gt=at*-T;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ot[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const nt=Kt+at,S=ie+at,M=tt-gt,L=et+(mt-gt),V=A*ie/S*nt,J=U*ie/S*nt;Z.projectionMatrix.makePerspective(M,L,V,J,nt,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function At(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let lt=Z.near,bt=Z.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),b.near=I.near=P.near=lt,b.far=I.far=P.far=bt,(D!==b.near||it!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,it=b.far),P.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,b.layers.mask=P.layers.mask|I.layers.mask;const mt=Z.parent,Ot=b.cameras;At(b,mt);for(let Bt=0;Bt<Ot.length;Bt++)At(Ot[Bt],mt);Ot.length===2?W(b,P,I):b.projectionMatrix.copy(P.projectionMatrix),q(Z,b,mt)};function q(Z,lt,bt){bt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let F=null;function G(Z,lt){if(u=lt.getViewerPose(c||o),g=lt,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let mt=!1;bt.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let Bt=0;Bt<bt.length;Bt++){const Kt=bt[Bt];let ie=null;if(p!==null)ie=p.getViewport(Kt);else{const U=f.getViewSubImage(d,Kt);ie=U.viewport,Bt===0&&(t.setRenderTargetTextures(x,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(x))}let A=w[Bt];A===void 0&&(A=new En,A.layers.enable(Bt),A.viewport=new De,w[Bt]=A),A.matrix.fromArray(Kt.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Kt.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(ie.x,ie.y,ie.width,ie.height),Bt===0&&(b.matrix.copy(A.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(A)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Bt=f.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let bt=0;bt<v.length;bt++){const mt=y[bt],Ot=v[bt];mt!==null&&Ot!==void 0&&Ot.update(mt,lt,c||o)}F&&F(Z,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const St=new qp;St.setAnimationLoop(G),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const ms=new Wn,sb=new Ae;function rb(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Wp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,x,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ob(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const C=t.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function u(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),R=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],y=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,P=y.length;C<P;C++){const I=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,b=I.length;w<b;w++){const D=I[w];if(p(D,C,w,R)===!0){const it=D.__offset,$=Array.isArray(D.value)?D.value:[D.value];let st=0;for(let ft=0;ft<$.length;ft++){const X=$[ft],ct=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,it+st,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,st),st+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,it,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,R){const C=x.value,P=v+"_"+y;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const I=R[P];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return R[P]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(x){const v=x.uniforms;let y=0;const R=16;for(let P=0,I=v.length;P<I;P++){const w=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,D=w.length;b<D;b++){const it=w[b],$=Array.isArray(it.value)?it.value:[it.value];for(let st=0,ft=$.length;st<ft;st++){const X=$[st],ct=_(X),W=y%R,At=W%ct.boundary,q=W+At;y+=At,q!==0&&R-q<ct.storage&&(y+=R-q),it.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=y,y+=ct.storage}}}const C=y%R;return C>0&&(y+=R-C),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ab{constructor(t={}){const{canvas:e=Kv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=Ki,this.toneMappingExposure=1;const y=this;let R=!1,C=0,P=0,I=null,w=-1,b=null;const D=new De,it=new De;let $=null;const st=new le(0);let ft=0,X=e.width,ct=e.height,W=1,At=null,q=null;const F=new De(0,0,X,ct),G=new De(0,0,X,ct);let St=!1;const Z=new ku;let lt=!1,bt=!1;const mt=new Ae,Ot=new Ae,Bt=new O,Kt=new De,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function U(){return I===null?W:1}let T=i;function ht(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pu}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),T===null){const z="webgl2";if(T=ht(z,E),T===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let tt,et,at,gt,nt,S,M,L,V,J,Q,wt,_t,Et,Wt,xt,Pt,Vt,$t,Ct,Zt,Yt,ce,k;function Ut(){tt=new hM(T),tt.init(),Yt=new ZS(T,tt),et=new oM(T,tt,t,Yt),at=new YS(T,tt),et.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),gt=new mM(T),nt=new US,S=new jS(T,tt,at,nt,et,Yt,gt),M=new lM(y),L=new fM(y),V=new S0(T),ce=new sM(T,V),J=new dM(T,V,gt,ce),Q=new _M(T,J,V,gt),$t=new gM(T,et,S),xt=new aM(nt),wt=new DS(y,M,L,tt,et,ce,xt),_t=new rb(y,nt),Et=new NS,Wt=new HS(tt),Vt=new iM(y,M,L,at,Q,p,l),Pt=new $S(y,Q,et),k=new ob(T,gt,et,at),Ct=new rM(T,tt,gt),Zt=new pM(T,tt,gt),gt.programs=wt.programs,y.capabilities=et,y.extensions=tt,y.properties=nt,y.renderLists=Et,y.shadowMap=Pt,y.state=at,y.info=gt}Ut();const ot=new ib(y,T);this.xr=ot,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(X,ct,!1))},this.getSize=function(E){return E.set(X,ct)},this.setSize=function(E,z,Y=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,ct=z,e.width=Math.floor(E*W),e.height=Math.floor(z*W),Y===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(X*W,ct*W).floor()},this.setDrawingBufferSize=function(E,z,Y){X=E,ct=z,W=Y,e.width=Math.floor(E*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,z,Y,j){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,z,Y,j),at.viewport(D.copy(F).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,z,Y,j){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,z,Y,j),at.scissor(it.copy(G).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(E){at.setScissorTest(St=E)},this.setOpaqueSort=function(E){At=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,z=!0,Y=!0){let j=0;if(E){let B=!1;if(I!==null){const vt=I.texture.format;B=vt===Fu||vt===Nu||vt===Iu}if(B){const vt=I.texture.type,yt=vt===Ui||vt===Rs||vt===oo||vt===yr||vt===Du||vt===Uu,It=Vt.getClearColor(),zt=Vt.getClearAlpha(),jt=It.r,Jt=It.g,Ht=It.b;yt?(g[0]=jt,g[1]=Jt,g[2]=Ht,g[3]=zt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=jt,_[1]=Jt,_[2]=Ht,_[3]=zt,T.clearBufferiv(T.COLOR,0,_))}else j|=T.COLOR_BUFFER_BIT}z&&(j|=T.DEPTH_BUFFER_BIT),Y&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Et.dispose(),Wt.dispose(),nt.dispose(),M.dispose(),L.dispose(),Q.dispose(),ce.dispose(),k.dispose(),wt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ue),ot.removeEventListener("sessionend",te),ve.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=gt.autoReset,z=Pt.enabled,Y=Pt.autoUpdate,j=Pt.needsUpdate,B=Pt.type;Ut(),gt.autoReset=E,Pt.enabled=z,Pt.autoUpdate=Y,Pt.needsUpdate=j,Pt.type=B}function Nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qt(E){const z=E.target;z.removeEventListener("dispose",Qt),H(z)}function H(E){dt(E),nt.remove(E)}function dt(E){const z=nt.get(E).programs;z!==void 0&&(z.forEach(function(Y){wt.releaseProgram(Y)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,j,B,vt){z===null&&(z=ie);const yt=B.isMesh&&B.matrixWorld.determinant()<0,It=os(E,z,Y,j,B);at.setMaterial(j,yt);let zt=Y.index,jt=1;if(j.wireframe===!0){if(zt=J.getWireframeAttribute(Y),zt===void 0)return;jt=2}const Jt=Y.drawRange,Ht=Y.attributes.position;let oe=Jt.start*jt,xe=(Jt.start+Jt.count)*jt;vt!==null&&(oe=Math.max(oe,vt.start*jt),xe=Math.min(xe,(vt.start+vt.count)*jt)),zt!==null?(oe=Math.max(oe,0),xe=Math.min(xe,zt.count)):Ht!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,Ht.count));const Ce=xe-oe;if(Ce<0||Ce===1/0)return;ce.setup(B,j,It,Y,zt);let un,de=Ct;if(zt!==null&&(un=V.get(zt),de=Zt,de.setIndex(un)),B.isMesh)j.wireframe===!0?(at.setLineWidth(j.wireframeLinewidth*U()),de.setMode(T.LINES)):de.setMode(T.TRIANGLES);else if(B.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),at.setLineWidth(Gt*U()),B.isLineSegments?de.setMode(T.LINES):B.isLineLoop?de.setMode(T.LINE_LOOP):de.setMode(T.LINE_STRIP)}else B.isPoints?de.setMode(T.POINTS):B.isSprite&&de.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)de.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Gt=B._multiDrawStarts,ci=B._multiDrawCounts,pe=B._multiDrawCount,Pn=zt?V.get(zt).bytesPerElement:1,Is=nt.get(j).currentProgram.getUniforms();for(let dn=0;dn<pe;dn++)Is.setValue(T,"_gl_DrawID",dn),de.render(Gt[dn]/Pn,ci[dn])}else if(B.isInstancedMesh)de.renderInstances(oe,Ce,B.count);else if(Y.isInstancedBufferGeometry){const Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ci=Math.min(Y.instanceCount,Gt);de.renderInstances(oe,Ce,ci)}else de.render(oe,Ce)};function rt(E,z,Y){E.transparent===!0&&E.side===Si&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,ss(E,z,Y),E.side=Qi,E.needsUpdate=!0,ss(E,z,Y),E.side=Si):ss(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),h=Wt.get(Y),h.init(z),v.push(h),Y.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),E!==Y&&E.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const j=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const vt=B.material;if(vt)if(Array.isArray(vt))for(let yt=0;yt<vt.length;yt++){const It=vt[yt];rt(It,Y,B),j.add(It)}else rt(vt,Y,B),j.add(vt)}),v.pop(),h=null,j},this.compileAsync=function(E,z,Y=null){const j=this.compile(E,z,Y);return new Promise(B=>{function vt(){if(j.forEach(function(yt){nt.get(yt).currentProgram.isReady()&&j.delete(yt)}),j.size===0){B(E);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Rt=null;function Xt(E){Rt&&Rt(E)}function ue(){ve.stop()}function te(){ve.start()}const ve=new qp;ve.setAnimationLoop(Xt),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(E){Rt=E,ot.setAnimationLoop(E),E===null?ve.stop():ve.start()},ot.addEventListener("sessionstart",ue),ot.addEventListener("sessionend",te),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,I),h=Wt.get(E,v.length),h.init(z),v.push(h),Ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Ot),bt=this.localClippingEnabled,lt=xt.init(this.clippingPlanes,bt),m=Et.get(E,x.length),m.init(),x.push(m),ot.enabled===!0&&ot.isPresenting===!0){const vt=y.xr.getDepthSensingMesh();vt!==null&&Fe(vt,z,-1/0,y.sortObjects)}Fe(E,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(At,q),A=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,A&&Vt.addToRenderList(m,E),this.info.render.frame++,lt===!0&&xt.beginShadows();const Y=h.state.shadowsArray;Pt.render(Y,E,z),lt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(h.setupLights(),z.isArrayCamera){const vt=z.cameras;if(B.length>0)for(let yt=0,It=vt.length;yt<It;yt++){const zt=vt[yt];we(j,B,E,zt)}A&&Vt.render(E);for(let yt=0,It=vt.length;yt<It;yt++){const zt=vt[yt];Le(m,E,zt,zt.viewport)}}else B.length>0&&we(j,B,E,z),A&&Vt.render(E),Le(m,E,z);I!==null&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,z),ce.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(h=v[v.length-1],lt===!0&&xt.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Fe(E,z,Y,j){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){j&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);const yt=Q.update(E),It=E.material;It.visible&&m.push(E,yt,It,Y,Kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const yt=Q.update(E),It=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Kt.copy(yt.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(It)){const zt=yt.groups;for(let jt=0,Jt=zt.length;jt<Jt;jt++){const Ht=zt[jt],oe=It[Ht.materialIndex];oe&&oe.visible&&m.push(E,yt,oe,Y,Kt.z,Ht)}}else It.visible&&m.push(E,yt,It,Y,Kt.z,null)}}const vt=E.children;for(let yt=0,It=vt.length;yt<It;yt++)Fe(vt[yt],z,Y,j)}function Le(E,z,Y,j){const B=E.opaque,vt=E.transmissive,yt=E.transparent;h.setupLightsView(Y),lt===!0&&xt.setGlobalState(y.clippingPlanes,Y),j&&at.viewport(D.copy(j)),B.length>0&&Ke(B,z,Y),vt.length>0&&Ke(vt,z,Y),yt.length>0&&Ke(yt,z,Y),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function we(E,z,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[j.id]===void 0&&(h.state.transmissionRenderTarget[j.id]=new Ps(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?vo:Ui,minFilter:Es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const vt=h.state.transmissionRenderTarget[j.id],yt=j.viewport||D;vt.setSize(yt.z,yt.w);const It=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(st),ft=y.getClearAlpha(),ft<1&&y.setClearColor(16777215,.5),y.clear(),A&&Vt.render(Y);const zt=y.toneMapping;y.toneMapping=Ki;const jt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),h.setupLightsView(j),lt===!0&&xt.setGlobalState(y.clippingPlanes,j),Ke(E,Y,j),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ht=0,oe=z.length;Ht<oe;Ht++){const xe=z[Ht],Ce=xe.object,un=xe.geometry,de=xe.material,Gt=xe.group;if(de.side===Si&&Ce.layers.test(j.layers)){const ci=de.side;de.side=hn,de.needsUpdate=!0,is(Ce,Y,j,un,de,Gt),de.side=ci,de.needsUpdate=!0,Jt=!0}}Jt===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt))}y.setRenderTarget(It),y.setClearColor(st,ft),jt!==void 0&&(j.viewport=jt),y.toneMapping=zt}function Ke(E,z,Y){const j=z.isScene===!0?z.overrideMaterial:null;for(let B=0,vt=E.length;B<vt;B++){const yt=E[B],It=yt.object,zt=yt.geometry,jt=j===null?yt.material:j,Jt=yt.group;It.layers.test(Y.layers)&&is(It,z,Y,zt,jt,Jt)}}function is(E,z,Y,j,B,vt){E.onBeforeRender(y,z,Y,j,B,vt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,z,Y,j,E,vt),B.transparent===!0&&B.side===Si&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,y.renderBufferDirect(Y,z,j,B,E,vt),B.side=Qi,B.needsUpdate=!0,y.renderBufferDirect(Y,z,j,B,E,vt),B.side=Si):y.renderBufferDirect(Y,z,j,B,E,vt),E.onAfterRender(y,z,Y,j,B,vt)}function ss(E,z,Y){z.isScene!==!0&&(z=ie);const j=nt.get(E),B=h.state.lights,vt=h.state.shadowsArray,yt=B.state.version,It=wt.getParameters(E,B.state,vt,z,Y),zt=wt.getProgramCacheKey(It);let jt=j.programs;j.environment=E.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(E.isMeshStandardMaterial?L:M).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,jt===void 0&&(E.addEventListener("dispose",Qt),jt=new Map,j.programs=jt);let Jt=jt.get(zt);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===yt)return rs(E,It),Jt}else It.uniforms=wt.getUniforms(E),E.onBeforeCompile(It,y),Jt=wt.acquireProgram(It,zt),jt.set(zt,Jt),j.uniforms=It.uniforms;const Ht=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=xt.uniform),rs(E,It),j.needsLights=ze(E),j.lightsStateVersion=yt,j.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function qn(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=da.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function rs(E,z){const Y=nt.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function os(E,z,Y,j,B){z.isScene!==!0&&(z=ie),S.resetTextureUnits();const vt=z.fog,yt=j.isMeshStandardMaterial?z.environment:null,It=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:br,zt=(j.isMeshStandardMaterial?L:M).get(j.envMap||yt),jt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Jt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ht=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color;let Ce=Ki;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ce=y.toneMapping);const un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=un!==void 0?un.length:0,Gt=nt.get(j),ci=h.state.lights;if(lt===!0&&(bt===!0||E!==b)){const xn=E===b&&j.id===w;xt.setState(j,E,xn)}let pe=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ci.state.version||Gt.outputColorSpace!==It||B.isBatchedMesh&&Gt.batching===!1||!B.isBatchedMesh&&Gt.batching===!0||B.isBatchedMesh&&Gt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Gt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Gt.instancing===!1||!B.isInstancedMesh&&Gt.instancing===!0||B.isSkinnedMesh&&Gt.skinning===!1||!B.isSkinnedMesh&&Gt.skinning===!0||B.isInstancedMesh&&Gt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Gt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Gt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Gt.instancingMorph===!1&&B.morphTexture!==null||Gt.envMap!==zt||j.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==xt.numPlanes||Gt.numIntersection!==xt.numIntersection)||Gt.vertexAlphas!==jt||Gt.vertexTangents!==Jt||Gt.morphTargets!==Ht||Gt.morphNormals!==oe||Gt.morphColors!==xe||Gt.toneMapping!==Ce||Gt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Gt.__version=j.version);let Pn=Gt.currentProgram;pe===!0&&(Pn=ss(j,z,B));let Is=!1,dn=!1,Ar=!1;const Re=Pn.getUniforms(),Yn=Gt.uniforms;if(at.useProgram(Pn.program)&&(Is=!0,dn=!0,Ar=!0),j.id!==w&&(w=j.id,dn=!0),Is||b!==E){at.buffers.depth.getReversed()?(mt.copy(E.projectionMatrix),Zv(mt),Jv(mt),Re.setValue(T,"projectionMatrix",mt)):Re.setValue(T,"projectionMatrix",E.projectionMatrix),Re.setValue(T,"viewMatrix",E.matrixWorldInverse);const Ni=Re.map.cameraPosition;Ni!==void 0&&Ni.setValue(T,Bt.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&Re.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Re.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,dn=!0,Ar=!0)}if(B.isSkinnedMesh){Re.setOptional(T,B,"bindMatrix"),Re.setOptional(T,B,"bindMatrixInverse");const xn=B.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Re.setValue(T,"boneTexture",xn.boneTexture,S))}B.isBatchedMesh&&(Re.setOptional(T,B,"batchingTexture"),Re.setValue(T,"batchingTexture",B._matricesTexture,S),Re.setOptional(T,B,"batchingIdTexture"),Re.setValue(T,"batchingIdTexture",B._indirectTexture,S),Re.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&Re.setValue(T,"batchingColorTexture",B._colorsTexture,S));const Cr=Y.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&$t.update(B,Y,Pn),(dn||Gt.receiveShadow!==B.receiveShadow)&&(Gt.receiveShadow=B.receiveShadow,Re.setValue(T,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yn.envMap.value=zt,Yn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(Yn.envMapIntensity.value=z.environmentIntensity),dn&&(Re.setValue(T,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&as(Yn,Ar),vt&&j.fog===!0&&_t.refreshFogUniforms(Yn,vt),_t.refreshMaterialUniforms(Yn,j,W,ct,h.state.transmissionRenderTarget[E.id]),da.upload(T,qn(Gt),Yn,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(da.upload(T,qn(Gt),Yn,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Re.setValue(T,"center",B.center),Re.setValue(T,"modelViewMatrix",B.modelViewMatrix),Re.setValue(T,"normalMatrix",B.normalMatrix),Re.setValue(T,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xn=j.uniformsGroups;for(let Ni=0,Fi=xn.length;Ni<Fi;Ni++){const nf=xn[Ni];k.update(nf,Pn),k.bind(nf,Pn)}}return Pn}function as(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function ze(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,Y){nt.get(E.texture).__webglTexture=z,nt.get(E.depthTexture).__webglTexture=Y;const j=nt.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const Y=nt.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Y=0){I=E,C=z,P=Y;let j=!0,B=null,vt=!1,yt=!1;if(E){const zt=nt.get(E);if(zt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(T.FRAMEBUFFER,null),j=!1;else if(zt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(zt.__hasExternalTextures)S.rebindTextures(E,nt.get(E.texture).__webglTexture,nt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(zt.__boundDepthTexture!==Ht){if(Ht!==null&&nt.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const jt=E.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(yt=!0);const Jt=nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[z])?B=Jt[z][Y]:B=Jt[z],vt=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?B=nt.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?B=Jt[Y]:B=Jt,D.copy(E.viewport),it.copy(E.scissor),$=E.scissorTest}else D.copy(F).multiplyScalar(W).floor(),it.copy(G).multiplyScalar(W).floor(),$=St;if(at.bindFramebuffer(T.FRAMEBUFFER,B)&&j&&at.drawBuffers(E,B),at.viewport(D),at.scissor(it),at.setScissorTest($),vt){const zt=nt.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+z,zt.__webglTexture,Y)}else if(yt){const zt=nt.get(E.texture),jt=z||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,zt.__webglTexture,Y||0,jt)}w=-1},this.readRenderTargetPixels=function(E,z,Y,j,B,vt,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(It=It[yt]),It){at.bindFramebuffer(T.FRAMEBUFFER,It);try{const zt=E.texture,jt=zt.format,Jt=zt.type;if(!et.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-j&&Y>=0&&Y<=E.height-B&&T.readPixels(z,Y,j,B,Yt.convert(jt),Yt.convert(Jt),vt)}finally{const zt=I!==null?nt.get(I).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,j,B,vt,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(It=It[yt]),It){const zt=E.texture,jt=zt.format,Jt=zt.type;if(!et.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-j&&Y>=0&&Y<=E.height-B){at.bindFramebuffer(T.FRAMEBUFFER,It);const Ht=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ht),T.bufferData(T.PIXEL_PACK_BUFFER,vt.byteLength,T.STREAM_READ),T.readPixels(z,Y,j,B,Yt.convert(jt),Yt.convert(Jt),0);const oe=I!==null?nt.get(I).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,oe);const xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await jv(T,xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ht),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,vt),T.deleteBuffer(Ht),T.deleteSync(xe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,Y=0){E.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-Y),B=Math.floor(E.image.width*j),vt=Math.floor(E.image.height*j),yt=z!==null?z.x:0,It=z!==null?z.y:0;S.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,yt,It,B,vt),at.unbindTexture()},this.copyTextureToTexture=function(E,z,Y=null,j=null,B=0){E.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],z=arguments[2],B=arguments[3]||0,Y=null);let vt,yt,It,zt,jt,Jt,Ht,oe,xe;const Ce=E.isCompressedTexture?E.mipmaps[B]:E.image;Y!==null?(vt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,jt=Y.min.y,Jt=Y.isBox3?Y.min.z:0):(vt=Ce.width,yt=Ce.height,It=Ce.depth||1,zt=0,jt=0,Jt=0),j!==null?(Ht=j.x,oe=j.y,xe=j.z):(Ht=0,oe=0,xe=0);const un=Yt.convert(z.format),de=Yt.convert(z.type);let Gt;z.isData3DTexture?(S.setTexture3D(z,0),Gt=T.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(S.setTexture2DArray(z,0),Gt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(z,0),Gt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const ci=T.getParameter(T.UNPACK_ROW_LENGTH),pe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Pn=T.getParameter(T.UNPACK_SKIP_PIXELS),Is=T.getParameter(T.UNPACK_SKIP_ROWS),dn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,zt),T.pixelStorei(T.UNPACK_SKIP_ROWS,jt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Jt);const Ar=E.isDataArrayTexture||E.isData3DTexture,Re=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Yn=nt.get(E),Cr=nt.get(z),xn=nt.get(Yn.__renderTarget),Ni=nt.get(Cr.__renderTarget);at.bindFramebuffer(T.READ_FRAMEBUFFER,xn.__webglFramebuffer),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<It;Fi++)Ar&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,nt.get(E).__webglTexture,B,Jt+Fi),E.isDepthTexture?(Re&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,nt.get(z).__webglTexture,B,xe+Fi),T.blitFramebuffer(zt,jt,vt,yt,Ht,oe,vt,yt,T.DEPTH_BUFFER_BIT,T.NEAREST)):Re?T.copyTexSubImage3D(Gt,B,Ht,oe,xe+Fi,zt,jt,vt,yt):T.copyTexSubImage2D(Gt,B,Ht,oe,xe+Fi,zt,jt,vt,yt);at.bindFramebuffer(T.READ_FRAMEBUFFER,null),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Gt,B,Ht,oe,xe,vt,yt,It,un,de,Ce.data):z.isCompressedArrayTexture?T.compressedTexSubImage3D(Gt,B,Ht,oe,xe,vt,yt,It,un,Ce.data):T.texSubImage3D(Gt,B,Ht,oe,xe,vt,yt,It,un,de,Ce):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,B,Ht,oe,vt,yt,un,de,Ce.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,B,Ht,oe,Ce.width,Ce.height,un,Ce.data):T.texSubImage2D(T.TEXTURE_2D,B,Ht,oe,vt,yt,un,de,Ce);T.pixelStorei(T.UNPACK_ROW_LENGTH,ci),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Is),T.pixelStorei(T.UNPACK_SKIP_IMAGES,dn),B===0&&z.generateMipmaps&&T.generateMipmap(Gt),at.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Y=null,j=null,B=0){return E.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,E=arguments[2],z=arguments[3],B=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,Y,j,B)},this.initRenderTarget=function(E){nt.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),at.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,at.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class lb extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new O;class Pa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tm extends Us{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let js;const Nr=new O,Zs=new O,Js=new O,Qs=new kt,Fr=new kt,em=new Ae,Ko=new O,Or=new O,jo=new O,Uh=new kt,Gl=new kt,Ih=new kt;class ub extends Xe{constructor(t=new tm){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Xn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cb(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Pa(i,3,0,!1)),js.setAttribute("uv",new Pa(i,2,3,!1))}this.geometry=js,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),em.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Zo(Ko.set(-.5,-.5,0),Js,o,Zs,s,r),Zo(Or.set(.5,-.5,0),Js,o,Zs,s,r),Zo(jo.set(.5,.5,0),Js,o,Zs,s,r),Uh.set(0,0),Gl.set(1,0),Ih.set(1,1);let a=t.ray.intersectTriangle(Ko,Or,jo,!1,Nr);if(a===null&&(Zo(Or.set(-.5,.5,0),Js,o,Zs,s,r),Gl.set(0,1),a=t.ray.intersectTriangle(Ko,jo,Or,!1,Nr),a===null))return;const l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:wn.getInterpolation(Nr,Ko,Or,jo,Uh,Gl,Ih,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zo(n,t,e,i,s,r){Qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Fr.x=r*Qs.x-s*Qs.y,Fr.y=s*Qs.x+r*Qs.y):Fr.copy(Qs),n.copy(t),n.x+=Fr.x,n.y+=Fr.y,n.applyMatrix4(em)}class nm extends Us{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nh=new Ae,tu=new Ou,Jo=new ja,Qo=new O;class fb extends Xe{constructor(t=new Xn,e=new nm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;Nh.copy(s).invert(),tu.copy(t.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Qo.fromBufferAttribute(f,m),Fh(Qo,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Qo.fromBufferAttribute(f,g),Fh(Qo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fh(n,t,e,i,s,r,o){const a=tu.distanceSqToPoint(n);if(a<e){const l=new O;tu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hb extends cn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new kt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,s=[],r=[],o=[],a=new O,l=new Ae;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Qe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hu extends li{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new kt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class db extends Hu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const ta=new O,Wl=new Vu,Xl=new Vu,$l=new Vu;class pb extends li{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wl.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,_,m),Xl.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,_,m),$l.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wl.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Xl.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),$l.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Wl.calc(l),Xl.calc(l),$l.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function mb(n,t){const e=1-n;return e*e*t}function gb(n,t){return 2*(1-n)*n*t}function _b(n,t){return n*n*t}function Zr(n,t,e,i){return mb(n,t)+gb(n,e)+_b(n,i)}function vb(n,t){const e=1-n;return e*e*e*t}function xb(n,t){const e=1-n;return 3*e*e*n*t}function yb(n,t){return 3*(1-n)*n*n*t}function Mb(n,t){return n*n*n*t}function Jr(n,t,e,i,s){return vb(n,t)+xb(n,e)+yb(n,i)+Mb(n,s)}class im extends li{constructor(t=new kt,e=new kt,i=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new kt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sb extends li{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sm extends li{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bb extends li{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rm extends li{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eb extends li{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Oh(a,l.x,c.x,u.x,f.x),Oh(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new kt().fromArray(s))}return this}}var Bh=Object.freeze({__proto__:null,ArcCurve:db,CatmullRomCurve3:pb,CubicBezierCurve:im,CubicBezierCurve3:Sb,EllipseCurve:Hu,LineCurve:sm,LineCurve3:bb,QuadraticBezierCurve:rm,QuadraticBezierCurve3:Eb,SplineCurve:om});class wb extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Bh[s.type]().fromJSON(s))}return this}}class kh extends wb{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new sm(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new rm(this.currentPoint.clone(),new kt(t,e),new kt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new im(this.currentPoint.clone(),new kt(t,e),new kt(i,s),new kt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new om(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Hu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class am extends kh{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new kh().fromJSON(s))}return this}}const Tb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=lm(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(i&&(r=Lb(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)f=n[g],d=n[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ao(r,o,e,a,l,p,0),o}};function lm(n,t,e,i,s){let r,o;if(s===Vb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=zh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=zh(r,n[r],n[r+1],o);return o&&Ja(o,o.next)&&(co(o),o=o.next),o}function Ls(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ja(e,e.next)||Pe(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ao(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Fb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Cb(n,i,s,r):Ab(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),co(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Rb(Ls(n),t,e),ao(n,t,e,i,s,r,2)):o===2&&Pb(n,t,e,i,s,r):ao(Ls(n),t,e,i,s,r,1);break}}}function Ab(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&rr(s,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=eu(p,g,t,e,i),x=eu(_,m,t,e,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=h&&y&&y.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,u,l,f,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,l,f,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,u,l,f,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,u,l,f,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rb(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ja(s,r)&&cm(s,i,i.next,r)&&lo(s,r)&&lo(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),co(i),co(i.next),i=n=r),i=i.next}while(i!==n);return Ls(i)}function Pb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kb(o,a)){let l=um(o,a);o=Ls(o,o.next),l=Ls(l,l.next),ao(o,t,e,i,s,r,0),ao(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Lb(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=lm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Bb(c));for(s.sort(Db),r=0;r<s.length;r++)e=Ub(s[r],e);return e}function Db(n,t){return n.x-t.x}function Ub(n,t){const e=Ib(n,t);if(!e)return t;const i=um(e,n);return Ls(i,i.next),Ls(e,e.next)}function Ib(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),lo(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Nb(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function Nb(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function Fb(n,t,e,i){let s=n;do s.z===0&&(s.z=eu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ob(s)}function Ob(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function eu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function kb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!zb(n,t)&&(lo(n,t)&&lo(t,n)&&Hb(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||Ja(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ja(n,t){return n.x===t.x&&n.y===t.y}function cm(n,t,e,i){const s=na(Pe(n,t,e)),r=na(Pe(n,t,i)),o=na(Pe(e,i,n)),a=na(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&ea(n,e,t)||r===0&&ea(n,i,t)||o===0&&ea(e,n,i)||a===0&&ea(e,t,i))}function ea(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function na(n){return n>0?1:n<0?-1:0}function zb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&cm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function lo(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function Hb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function um(n,t){const e=new nu(n.i,n.x,n.y),i=new nu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zh(n,t,e,i){const s=new nu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nu(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Qr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Qr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Hh(t),Vh(i,t);let o=t.length;e.forEach(Hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vh(i,e[l]);const a=Tb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Gu extends Xn{constructor(t=new am([new kt(0,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new si(s,3)),this.setAttribute("normal",new si(r,3)),this.setAttribute("uv",new si(o,2));function c(u){const f=s.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Qr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const x=g[m];Qr.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Qr.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const x=g[m];p=p.concat(x)}for(let m=0,h=p.length;m<h;m++){const x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,h=_.length;m<h;m++){const x=_[m],v=x[0]+f,y=x[1]+f,R=x[2]+f;i.push(v,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Gb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Gu(i,t.curveSegments)}}function Gb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Gh extends Us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fm extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ql=new Ae,Wh=new O,Xh=new O;class Wb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ku,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xb extends Wb{constructor(){super(new Yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends fm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $b extends fm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qh=new Ae;class qb{constructor(t,e,i=0,s=1/0){this.ray=new Ou(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,i=[]){return iu(t,this,i,e),i.sort(Yh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)iu(t[s],this,i,e);return i.sort(Yh),i}}function Yh(n,t){return n.distance-t.distance}function iu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)iu(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);const Br=new O;function Mn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Br.copy(t),Br[i]=0,Br.normalize();const c=.5*o/(o+a),u=1-Br.angleTo(n)/l;return Math.sign(Br[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Yb extends wr{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new O,l=new O,c=new O(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new O,_=.5/s;for(let m=0,h=0;m<u.length;m+=3,h+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[h+0]=Mn(g,l,"z","y",r,i),d[h+1]=1-Mn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[h+0]=1-Mn(g,l,"z","y",r,i),d[h+1]=1-Mn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[h+0]=1-Mn(g,l,"x","z",r,t),d[h+1]=Mn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[h+0]=1-Mn(g,l,"x","z",r,t),d[h+1]=1-Mn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[h+0]=1-Mn(g,l,"x","y",r,t),d[h+1]=1-Mn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[h+0]=Mn(g,l,"x","y",r,t),d[h+1]=1-Mn(g,l,"y","x",r,e);break}}}const ri=["U","R","F","D","L","B"],ji=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Kb=[3,4,5,0,1,2],uo=["yellow","orange","green","white","red","blue"],fo=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],pa=(n,t)=>`${n[0]},${n[1]},${n[2]}|${t[0]},${t[1]},${t[2]}`,La=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],hm=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],jb=(n,t,e)=>La(n,hm(t,e));function Kh(n,t){const e=La(t,n),i=hm(t,n);return[-i[0]+t[0]*e,-i[1]+t[1]*e,-i[2]+t[2]*e]}function dm(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function gs(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(t=>{const e=/^([URFDLB])(2|2'|'|3)?$/.exec(t);if(!e)throw new Error(`Bad move "${t}"`);return e[2]?e[2]==="3"||e[2]==="'"?`${e[1]}'`:`${e[1]}2`:e[1]})}function Da(n){return[...n].reverse().map(dm)}const Yl=new Map;function $e(n){return Yl.has(n)||Yl.set(n,Zb(n)),Yl.get(n)}function Zb(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const t=n-1,e=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of e)for(const l of e)for(const c of e){const u=[a,l,c],f=[];for(let _=0;_<3;_++){if(Math.abs(u[_])!==t)continue;const m=[0,0,0];m[_]=Math.sign(u[_]);const h=ji.findIndex(v=>v[0]===m[0]&&v[1]===m[1]&&v[2]===m[2]),x=i.length;i.push({pos:u,normal:m,face:h,cubie:r.length}),s.set(pa(u,m),x),f.push(x)}if(!f.length)continue;const d=_=>f.find(m=>i[m].normal[_]!==0);let p=f;if(f.length===3){const[_,m,h]=[d(1),d(0),d(2)];p=jb(i[_].normal,i[m].normal,i[h].normal)>0?[_,m,h]:[_,h,m]}else if(f.length===2){const _=d(1)??d(2);p=[_,f.find(m=>m!==_)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:u,slots:p,kind:g})}const o={};return ri.forEach((a,l)=>{const c=ji[l],u=i.map((p,g)=>La(p.pos,c)!==t?g:s.get(pa(Kh(p.pos,c),Kh(p.normal,c)))),f=u.map(p=>u[p]),d=u.map(p=>f[p]);o[a]=Int16Array.from(u),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(d)}),{n,m:t,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(pa(a,l)),faceGrid:Jb(n,t,s),layerOf:a=>r.map((l,c)=>La(l.pos,ji[a])===t?c:-1).filter(l=>l>=0)}}function Jb(n,t,e){const i={},s=(o,a,l,c)=>e.get(pa([o,a,l],ji[c])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(c,u)=>o(l,u)));return i.U=r((o,a)=>s(-t+2*a,t,-t+2*o,0)),i.D=r((o,a)=>s(-t+2*a,-t,t-2*o,3)),i.F=r((o,a)=>s(-t+2*a,t-2*o,t,2)),i.B=r((o,a)=>s(t-2*a,t-2*o,-t,5)),i.R=r((o,a)=>s(t,t-2*o,t-2*a,1)),i.L=r((o,a)=>s(-t,t-2*o,-t+2*a,4)),i}function Qb(n){return ri.flatMap(e=>[e,`${e}2`,`${e}'`])}function Qa(n){return Uint8Array.from($e(n).stickers,t=>t.face)}function Mo(n,t){const e=new Uint8Array(n.length);for(let i=0;i<n.length;i++)e[t[i]]=n[i];return e}function tE(n,t,e){return Mo(n,$e(t).moves[e])}function eE(n,t,e){const i=$e(t);let s=n;for(const r of e)s=Mo(s,i.moves[r]);return s}function nE(n,t){const{faceGrid:e}=$e(t);return ri.every(i=>{const s=e[i].flat();return s.every(r=>n[r]===n[s[0]])})}function iE(n,t=n===2?11:22,e=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<t;){const l=i[Math.floor(e()*i.length)];l!==o&&(n===3&&Kb[l]===o&&l===a||(s.push(ri[l]+r[Math.floor(e()*3)]),a=o,o=l))}return s}function jh(n){const t=new Array(n.length).fill(!1);let e=0;for(let i=0;i<n.length;i++){if(t[i])continue;let s=0;for(let r=i;!t[r];r=n[r])t[r]=!0,s++;e+=s-1}return e%2}function Zh(n,t){const e=$e(t),i=[],s=new Map;e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(f=>e.stickers[f].face);s.set([...u].sort().join(),c)});const r=[],o=[],a=new Set;return e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(_=>n[_]),f=[...u].sort().join(),d=s.get(f),p=u.map(_=>uo[_]).join("/");if(d===void 0||new Set(u).size!==u.length){i.push(`Impossible ${l.kind} with colours ${p}`);return}if(a.has(d)){i.push(`The ${e.cubies[d].slots.map(_=>uo[e.stickers[_].face]).join("/")} ${l.kind} appears twice`);return}a.add(d);const g=e.cubies[d].slots.map(_=>e.stickers[_].face);if(l.kind==="corner"){let _=-1;for(let m=0;m<3;m++)u.every((h,x)=>u[(m+x)%3]===g[x])&&(_=m);if(_<0){i.push(`The corner with colours ${p} is a mirror image (impossible)`);return}r.push({pos:c,home:d,twist:_})}else o.push({pos:c,home:d,flip:u[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function pm(n){const t=$e(2),e=new Array(6).fill(0);for(const f of n)e[f]++;if(e.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of t.cubies){const d=f.slots.map(p=>n[p]);if(new Set(d).size!==3)return{error:"A corner shows the same colour twice"};for(const p of d)for(const g of d)p!==g&&i[p].add(g)}const s=[];for(let f=0;f<6;f++){const d=[0,1,2,3,4,5].filter(p=>p!==f&&!i[f].has(p));if(d.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=d[0]}const r=t.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(d=>t.stickers[d].face===f)],a=new Array(6),[l,c,u]=[o(3),o(4),o(5)];return a[l]=3,a[c]=4,a[u]=5,a[s[l]]=0,a[s[c]]=1,a[s[u]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function Wu(n,t){const e=$e(t);if(n.length!==e.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const i=[];if(t===2){const c=pm(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:u,errors:f}=Zh(c.state,2);return i.push(...f),!f.length&&u.reduce((d,p)=>d+p.twist,0)%3!==0&&i.push("One corner is twisted – this position cannot be solved"),{ok:!i.length,errors:i,canonical:c}}const s=new Array(6).fill(0);for(const c of n)s[c]++;if(s.forEach((c,u)=>{c!==9&&i.push(`${uo[u]} appears ${c} times (needs 9)`)}),e.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==e.stickers[c.slots[0]].face&&i.push("Centre stickers are fixed and must keep their colour")}),i.length)return{ok:!1,errors:[...new Set(i)]};const{corners:r,edges:o,errors:a}=Zh(n,3);if(a.length)return{ok:!1,errors:a};r.reduce((c,u)=>c+u.twist,0)%3!==0&&i.push("One corner is twisted in place"),o.reduce((c,u)=>c+u.flip,0)%2!==0&&i.push("One edge is flipped in place");const l=(c,u)=>{const f=e.cubies.map((p,g)=>p.kind===u?g:-1).filter(p=>p>=0),d=new Array(f.length);return c.forEach(p=>{d[f.indexOf(p.pos)]=f.indexOf(p.home)}),d};return jh(l(r,"corner"))!==jh(l(o,"edge"))&&i.push("Two pieces are swapped – this position cannot be solved"),{ok:!i.length,errors:i}}const $n=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},sE=4,rE=14,oE=.55,ia=.8,aE=.025,lE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0},dramaSpeed:{type:Number,default:.32},hoverColors:{type:Boolean,default:!1}},emits:["paint","layerturn","hovering"],setup(n,{expose:t,emit:e}){const i=n,s=e,r=ee(null);let o,a,l;const c=new O(0,0,0);let u,f=0,d,p=[],g=[],_,m=!1;const h=fo.map(H=>new Gh({color:H,roughness:.35,metalness:0})),x=new Gh({color:1382172,roughness:.6});function v(H,dt){const rt=H/2,Rt=new am;return Rt.moveTo(-rt+dt,-rt),Rt.lineTo(rt-dt,-rt),Rt.quadraticCurveTo(rt,-rt,rt,-rt+dt),Rt.lineTo(rt,rt-dt),Rt.quadraticCurveTo(rt,rt,rt-dt,rt),Rt.lineTo(-rt+dt,rt),Rt.quadraticCurveTo(-rt,rt,-rt,rt-dt),Rt.lineTo(-rt,-rt+dt),Rt.quadraticCurveTo(-rt,-rt,-rt+dt,-rt),new Gu(Rt)}const y=v(.84,.12),R=new Yb(.98,.98,.98,3,.1);function C(){_t(),u&&a.remove(u),_=$e(i.n),u=new Xi,p=[],g=new Array(_.slotCount);const H=new O(0,0,1);_.cubies.forEach(dt=>{const rt=new Xi;rt.position.set(dt.pos[0]/2,dt.pos[1]/2,dt.pos[2]/2),rt.userData.home=rt.position.clone(),rt.add(new An(R,x)),dt.slots.forEach(Rt=>{const Xt=_.stickers[Rt],ue=new O(...Xt.normal),te=new An(y,h[Xt.face]);te.position.copy(ue).multiplyScalar(.492),te.quaternion.setFromUnitVectors(H,ue),te.userData.slot=Rt,rt.add(te),g[Rt]=te}),p.push(rt),u.add(rt)}),a.add(u),P(i.state)}function P(H){if(H.length===g.length)for(let dt=0;dt<g.length;dt++)g[dt].material=h[H[dt]]}function I(){const H=i.n===2?4.6:6.2;l.up.set(0,1,0),l.position.set(H*.75,H*.6,H),l.lookAt(c),b.vx=0,b.vy=0}function w(){if(!r.value||!o)return;const{clientWidth:H,clientHeight:dt}=r.value;!H||!dt||(o.setSize(H,dt,!1),l.aspect=H/dt,l.updateProjectionMatrix())}const b={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},D=new Map;let it=0;const $=new wi,st=new O,ft=new O,X=new O;function ct(H,dt){const rt=o.domElement.clientHeight||1,Rt=2*Math.PI/rt;l.updateMatrixWorld(),st.setFromMatrixColumn(l.matrixWorld,0),ft.setFromMatrixColumn(l.matrixWorld,1),$.setFromAxisAngle(ft,-H*Rt),X.copy(l.position).sub(c).applyQuaternion($),l.up.applyQuaternion($),$.setFromAxisAngle(st.applyQuaternion($),-dt*Rt),X.applyQuaternion($),l.up.applyQuaternion($).normalize(),l.position.copy(c).add(X),l.lookAt(c)}function W(H){X.copy(l.position).sub(c);const dt=Math.min(rE,Math.max(sE,X.length()*H));l.position.copy(c).add(X.setLength(dt))}function At(H){var dt,rt;if(D.set(H.pointerId,{x:H.clientX,y:H.clientY}),(rt=(dt=o.domElement).setPointerCapture)==null||rt.call(dt,H.pointerId),D.size===1)Object.assign(b,{dragging:!0,lastX:H.clientX,lastY:H.clientY,lastT:performance.now(),vx:0,vy:0});else if(D.size===2){const[Rt,Xt]=[...D.values()];it=Math.hypot(Rt.x-Xt.x,Rt.y-Xt.y),b.dragging=!1}}function q(H){if(!D.has(H.pointerId))return;if(D.set(H.pointerId,{x:H.clientX,y:H.clientY}),D.size===2){const[ue,te]=[...D.values()],ve=Math.hypot(ue.x-te.x,ue.y-te.y);it&&ve&&W(it/ve),it=ve;return}if(!b.dragging)return;const dt=H.clientX-b.lastX,rt=H.clientY-b.lastY,Rt=performance.now(),Xt=Math.max(1,Rt-b.lastT);ct(dt,rt),b.vx=.6*b.vx+.4*(dt/Xt*16),b.vy=.6*b.vy+.4*(rt/Xt*16),Object.assign(b,{lastX:H.clientX,lastY:H.clientY,lastT:Rt})}function F(H){var dt,rt;D.delete(H.pointerId),(rt=(dt=o.domElement).releasePointerCapture)==null||rt.call(dt,H.pointerId),D.size===0&&(b.dragging=!1,performance.now()-b.lastT>80&&(b.vx=0,b.vy=0))}function G(H){H.preventDefault(),W(Math.exp(H.deltaY*6e-4))}const St={level:0,phase:0,last:0};function Z(H){const dt=Math.min(.1,(H-(St.last||H))/1e3);St.last=H;const rt=i.drama&&!b.dragging&&D.size===0?1:0,Rt=dt*.7;if(St.level+=Math.max(-Rt,Math.min(Rt,rt-St.level)),St.level<.001)return;St.phase+=dt*oE;const Xt=St.level*St.level*(3-2*St.level),ue=o.domElement.clientHeight||1,te=i.dramaSpeed*ue/(2*Math.PI)*dt*Xt;ct(Math.cos(St.phase)*te,Math.sin(St.phase)*te)}function lt(){f=requestAnimationFrame(lt),!b.dragging&&(Math.abs(b.vx)>.02||Math.abs(b.vy)>.02)&&(ct(b.vx,b.vy),b.vx*=.92,b.vy*=.92),Z(performance.now()),Kt(performance.now()),o.render(a,l)}const bt=H=>H<.5?4*H*H*H:1-(-2*H+2)**3/2;function mt(H,dt,rt=1){if(m||rt>=10)return P(dt),Promise.resolve();m=!0;const Rt=H.split(" ").map(te=>{const ve=ri.indexOf(te[0]),Fe=te.endsWith("2")?2:1,Le=new Xi,we=_.layerOf(ve).map(Ke=>p[Ke]);return u.add(Le),we.forEach(Ke=>Le.add(Ke)),{pivot:Le,layer:we,quarters:Fe,axis:new O(...ji[ve]),angle:(te.endsWith("'")?1:-1)*Fe*(Math.PI/2)}}),Xt=(Rt.some(te=>te.quarters===2)?420:280)/rt,ue=performance.now();return new Promise(te=>{const ve=Fe=>{const Le=Math.min(1,(Fe-ue)/Xt);if(Rt.forEach(we=>we.pivot.setRotationFromAxisAngle(we.axis,we.angle*bt(Le))),Le<1){requestAnimationFrame(ve);return}Rt.forEach(we=>{we.layer.forEach(Ke=>u.add(Ke)),u.remove(we.pivot)}),P(dt),m=!1,te()};requestAnimationFrame(ve)})}let Ot=null;function Bt(){if(!Ot){const H=document.createElement("canvas");H.width=H.height=64;const dt=H.getContext("2d"),rt=dt.createRadialGradient(32,32,0,32,32,32);rt.addColorStop(0,"rgba(255,255,255,1)"),rt.addColorStop(.25,"rgba(255,255,255,0.6)"),rt.addColorStop(1,"rgba(255,255,255,0)"),dt.fillStyle=rt,dt.fillRect(0,0,64,64),Ot=new hb(H)}return Ot}function Kt(H){if(!u||m)return;const dt=i.rumble*.045;if(dt>0){const rt=H/1e3;u.position.set(Math.sin(rt*61)*dt,Math.sin(rt*73+1)*dt,Math.sin(rt*53+2)*dt),u.rotation.z=Math.sin(rt*47)*dt*.25}else(u.position.lengthSq()>0||u.rotation.z!==0)&&(u.position.set(0,0,0),u.rotation.z=0)}const ie=H=>1+2.70158*(H-1)**3+1.70158*(H-1)**2;function A(){if(m||!u)return Promise.resolve();m=!0,u.position.set(0,0,0),u.rotation.z=0;const H=(ze,E)=>ze+Math.random()*(E-ze),dt=p.map(ze=>{const E=ze.userData.home.clone();return E.lengthSq()<.01&&E.set(H(-1,1),H(-1,1),H(-1,1)),E.normalize().add(new O(H(-.4,.4),H(-.4,.4),H(-.4,.4))).normalize(),{g:ze,v:E.multiplyScalar(H(3.2,7.5)),spin:new O(H(-9,9),H(-9,9),H(-9,9)),vanish:H(1.7,2.2)}}),rt=520,Rt=new Float32Array(rt*3),Xt=new Float32Array(rt*3),ue=Array.from({length:rt},()=>{const ze=new O(H(-1,1),H(-1,1),H(-1,1)).normalize();return{p:new O,v:ze.multiplyScalar(H(2.5,11)),delay:H(0,.35),life:H(.6,1.7)}}),te=new Xn;te.setAttribute("position",new vn(Rt,3)),te.setAttribute("color",new vn(Xt,3));const ve=new nm({size:.26,map:Bt(),vertexColors:!0,transparent:!0,blending:Ta,depthWrite:!1}),Fe=new fb(te,ve);Fe.frustumCulled=!1,a.add(Fe);const Le=new tm({map:Bt(),color:16771504,blending:Ta,transparent:!0,depthWrite:!1}),we=new ub(Le);a.add(we);const Ke=3,is=dt.map(({g:ze})=>ze.userData.home.length()*.14+H(0,.06)),ss=dt.map(()=>new wi().setFromEuler(new Wn(H(-2,2),H(-2,2),H(-2,2))));let qn=!1;const rs=Ke+1.4,os=performance.now();let as=os;return new Promise(ze=>{const E=z=>{const Y=(z-os)/1e3,j=Math.min(.05,(z-as)/1e3);if(as=z,Y<Ke){dt.forEach(yt=>{if(Y>yt.vanish){yt.g.visible=!1;return}yt.v.multiplyScalar(1-.3*j),yt.v.y-=2.2*j,yt.g.position.addScaledVector(yt.v,j),yt.g.rotation.x+=yt.spin.x*j,yt.g.rotation.y+=yt.spin.y*j,yt.g.rotation.z+=yt.spin.z*j;const It=Math.max(0,Math.min(1,(yt.vanish-Y)/.4));yt.g.scale.setScalar(It)}),ue.forEach((yt,It)=>{const zt=Y-yt.delay;if(zt<0||zt>yt.life){Xt[It*3]=Xt[It*3+1]=Xt[It*3+2]=0;return}yt.v.multiplyScalar(1-.9*j),yt.v.y-=3.5*j,yt.p.addScaledVector(yt.v,j);const jt=zt/yt.life,Jt=(1-jt)**1.4,Ht=1*Jt,oe=Math.max(0,.95-.85*jt)*Jt,xe=Math.max(0,.55-.55*jt*1.6)*Jt;Rt[It*3]=yt.p.x,Rt[It*3+1]=yt.p.y,Rt[It*3+2]=yt.p.z,Xt[It*3]=Ht,Xt[It*3+1]=oe,Xt[It*3+2]=xe}),te.attributes.position.needsUpdate=!0,te.attributes.color.needsUpdate=!0;const B=Math.min(1,Y/.45);we.scale.setScalar(2+14*B),Le.opacity=(1-B)**1.5;const vt=Y<.4?.14*(1-Y/.4):0;u.position.set(H(-vt,vt),H(-vt,vt),H(-vt,vt))}else{qn||(qn=!0,a.remove(Fe),a.remove(we),te.dispose(),ve.dispose(),Le.dispose(),u.position.set(0,0,0),dt.forEach(({g:vt})=>{vt.position.copy(vt.userData.home),vt.scale.setScalar(1e-4),vt.visible=!0}));const B=Y-Ke;dt.forEach(({g:vt},yt)=>{const It=Math.max(0,Math.min(1,(B-is[yt])/.55)),zt=ie(It);vt.scale.setScalar(Math.max(1e-4,zt)),vt.quaternion.copy(ss[yt]).slerp(U,Math.min(1,It*1.15))})}if(Y<rs){requestAnimationFrame(E);return}dt.forEach(({g:B})=>{B.position.copy(B.userData.home),B.rotation.set(0,0,0),B.quaternion.identity(),B.scale.setScalar(1),B.visible=!0}),u.position.set(0,0,0),u.rotation.z=0,P(i.state),m=!1,ze()};requestAnimationFrame(E)})}const U=new wi,T=new qb;function ht(H,dt){const rt=o.domElement.getBoundingClientRect(),Rt=new kt((H-rt.left)/rt.width*2-1,-((dt-rt.top)/rt.height)*2+1);return T.setFromCamera(Rt,l),T.intersectObjects(g,!1)[0]}const tt=ia/3,et=ia/2,at=new yo(1,1),gt=new Ra({color:0}),nt=fo.map(H=>new Ra({color:H}));let S=null,M="",L=!1,V=null;const J=new wi,Q=new O;function wt(H){L!==H&&(L=H,s("hovering",H))}function _t(){var H;(H=S==null?void 0:S.parent)==null||H.remove(S),S=null,M="",o&&wt(!1)}function Et(H){return i.n===3&&_.cubies[_.stickers[H].cubie].kind==="center"}function Wt(H){l.updateMatrixWorld(),H.getWorldQuaternion(J).invert();const dt=Q.setFromMatrixColumn(l.matrixWorld,0).applyQuaternion(J).clone(),rt=Q.setFromMatrixColumn(l.matrixWorld,1).applyQuaternion(J),Rt=Xt=>Xt>=0?1:-1;return Math.abs(dt.x)>=Math.abs(dt.y)?{swap:!1,a:Rt(dt.x),b:Rt(rt.y)}:{swap:!0,a:Rt(dt.y),b:Rt(rt.x)}}function xt(H,dt,rt){return H.swap?{x:H.b*rt,y:H.a*dt}:{x:H.a*dt,y:H.b*rt}}function Pt(H,dt,rt){const Rt=H.worldToLocal(dt.clone()),Xt=rt.swap?rt.a*Rt.y:rt.a*Rt.x,ue=rt.swap?rt.b*Rt.x:rt.b*Rt.y,te=Math.min(2,Math.max(0,Math.floor((Xt+ia/2)/tt)));return Math.min(1,Math.max(0,Math.floor((ia/2-ue)/et)))*3+te}function Vt(H,dt,rt,Rt,Xt,ue,te,ve){const{x:Fe,y:Le}=xt(dt,rt,Rt),we=new An(at,te);we.position.set(Fe,Le,ve),we.scale.set(dt.swap?ue:Xt,dt.swap?Xt:ue,1),H.add(we)}function $t(H,dt,rt){var Rt;(Rt=S==null?void 0:S.parent)==null||Rt.remove(S),S=new Xi;for(let Xt=0;Xt<6;Xt++){const ue=(Xt%3-1)*tt,te=(.5-Math.floor(Xt/3))*et,ve=tt-.02,Fe=et-.02,Le=Xt===rt;Le&&Vt(S,dt,ue,te,ve,Fe,gt,.004);const we=Le?aE:0;Vt(S,dt,ue,te,ve-2*we,Fe-2*we,nt[Xt],.006)}H.add(S)}function Ct(H,dt){if(V={x:H,y:dt},!i.hoverColors||!i.paintable||i.locked||m)return _t();const rt=ht(H,dt);if(!rt||Et(rt.object.userData.slot))return _t();const Rt=rt.object,Xt=Wt(Rt),ue=Pt(Rt,rt.point,Xt),te=`${Rt.userData.slot}|${ue}|${Xt.swap}|${Xt.a}|${Xt.b}`;wt(!0),te!==M&&(M=te,$t(Rt,Xt,ue))}function Zt(){M="",V&&o?Ct(V.x,V.y):_t()}let Yt=null;function ce(H){Yt={x:H.clientX,y:H.clientY}}function k(H){if(!i.paintable||!Yt)return;const dt=Math.hypot(H.clientX-Yt.x,H.clientY-Yt.y);if(Yt=null,dt>5)return;const rt=ht(H.clientX,H.clientY);if(!rt)return;const Rt=rt.object.userData.slot;if(i.hoverColors){if(Et(Rt))return;s("paint",Rt,Pt(rt.object,rt.point,Wt(rt.object)))}else s("paint",Rt)}const Ut=[["L","R"],["D","U"],["B","F"]];let ot=0;function pt(H,dt,rt){const Rt=_.stickers[H],Xt=Rt.normal.findIndex(ze=>ze!==0),ue=[0,1,2].filter(ze=>ze!==Xt);l.updateMatrixWorld();const te=new O().setFromMatrixColumn(l.matrixWorld,0),ve=new O().setFromMatrixColumn(l.matrixWorld,1),Fe=Math.abs(te.getComponent(ue[0]))>=Math.abs(te.getComponent(ue[1]))?ue[0]:ue[1],Le=rt?ue.find(ze=>ze!==Fe):Fe,we=new O;we.setComponent(Le,1);const Ke=new O(...Rt.pos).multiplyScalar(.5).add(new O(...Rt.normal).multiplyScalar(.5)),is=we.clone().cross(Ke),qn=((rt?is.dot(te):-is.dot(ve))>=0?1:-1)*dt,rs=_.cubies[Rt.cubie].pos[Le],[os,as]=Ut[Le];return rs===_.m?as+(qn>0?"'":""):rs===-_.m?os+(qn>0?"":"'"):`${as}${qn>0?"":"'"} ${os}${qn>0?"'":""}`}function Ft(H){if(i.paintable)return;const dt=ht(H.clientX,H.clientY);if(!dt||(H.preventDefault(),H.stopPropagation(),i.locked||m)||(ot+=H.deltaY||H.deltaX,Math.abs(ot)<40))return;const rt=Math.sign(ot);ot=0,s("layerturn",pt(dt.object.userData.slot,rt,H.altKey))}function Nt(H){Ct(H.clientX,H.clientY)}function Qt(){V=null,_t()}return go(()=>{o=new ab({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new lb,l=new En(36,1,.1,100),a.add(new $b(16777215,1.1));const H=new $h(16777215,2);H.position.set(5,8,6),a.add(H);const dt=new $h(16777215,.8);dt.position.set(-6,-3,-5),a.add(dt),o.domElement.addEventListener("pointerdown",At),o.domElement.addEventListener("pointermove",q),o.domElement.addEventListener("pointermove",Nt),o.domElement.addEventListener("pointerleave",Qt),o.domElement.addEventListener("pointerup",F),o.domElement.addEventListener("pointercancel",F),o.domElement.addEventListener("wheel",G,{passive:!1}),o.domElement.addEventListener("pointerdown",ce),o.domElement.addEventListener("pointerup",k),r.value.addEventListener("wheel",Ft,{capture:!0,passive:!1}),C(),I(),w(),d=new ResizeObserver(w),d.observe(r.value),lt()}),pr(()=>{cancelAnimationFrame(f),d==null||d.disconnect(),o==null||o.dispose()}),Ne(()=>i.n,()=>{C(),I()}),Ne(()=>i.state,H=>{m||P(H)}),Ne(()=>[i.hoverColors,i.paintable,i.locked],Zt),t({animate:mt,resetView:I,explode:A}),(H,dt)=>(Mt(),Tt("div",{ref_key:"host",ref:r,class:Ie(["cube-host",{painting:n.paintable}])},null,2))}},cE=$n(lE,[["__scopeId","data-v-cbd7886a"]]),bn={yellowCross:gs("F R U R' U' F'"),sune:gs("R U R' U R U2 R'"),antiSune:gs("R U2 R' U' R U' R'"),cornerCycle:gs("R' F R' B2 R F' R' B2 R2"),edgeCycle:gs("R U' R U R U R U' R' U' R2"),tPerm:gs("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:gs("F R U' R' U' R U R' F' R U R' U' R' F R F'")},tr=bn,uE={U:0,R:1,F:2,D:3,L:4,B:5};function mm(n,t){return t.map(e=>{const i=n.moves[e],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:e,perm:i,inv:s,face:uE[e[0]]}})}const fE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],hE=["U","U2","U'","R","R2","R'","F","F2","F'"];function dE(n,t,e,i){const s=g=>g.join(","),r=s(t),o=s(e);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let c=[t],u=[e],f=0,d=0;const p=g=>{const _=[];for(let h=g;a.get(h).prev!==null;h=a.get(h).prev)_.push(a.get(h).move);_.reverse();const m=[];for(let h=g;l.get(h).next!==null;h=l.get(h).next)m.push(l.get(h).move);return[..._,...m].map(h=>n[h].name)};for(;f+d<i&&(c.length||u.length);)if(c.length&&(c.length<=u.length||!u.length)){const _=[];for(const m of c){const h=s(m),x=a.get(h);for(let v=0;v<n.length;v++){const y=n[v];if(y.face===x.face)continue;const R=m.map(P=>y.perm[P]),C=s(R);if(!a.has(C)){if(a.set(C,{prev:h,move:v,face:y.face}),l.has(C))return p(C);_.push(R)}}}c=_,f++}else{const _=[];for(const m of u){const h=s(m),x=l.get(h);for(let v=0;v<n.length;v++){const y=n[v];if(y.face===x.face)continue;const R=m.map(P=>y.inv[P]),C=s(R);if(!l.has(C)){if(l.set(C,{next:h,move:v,face:y.face}),a.has(C))return p(C);_.push(R)}}}u=_,d++}return null}function pE(n,t,e){const i=n.cubies[e].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>t[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const Xu=(n,t,e)=>n.cubies[e].slots.every(i=>t[i]===n.stickers[i].face);function su(n,t,e,i,s,r,o,a){const l=[];let c=t,u=[...e],f=[...i];for(;f.length;){let d=null;for(const p of f){if(p.cubies.every(x=>Xu(n,c,x))){d={target:p,moves:[]};break}const g=[...u,...p.cubies].flatMap(x=>n.cubies[x].slots),_=[...u.flatMap(x=>n.cubies[x].slots),...p.cubies.flatMap(x=>pE(n,c,x))],m=d?d.moves.length-1:a;if(m<1)continue;const h=dE(r,_,g,m);h&&(!d||h.length<d.moves.length)&&(d={target:p,moves:h})}if(!d)throw new Error("No solution found for a piece – is the cube state valid?");for(const p of d.moves)c=Mo(c,n.moves[p]);l.push({label:o(d.target),moves:d.moves}),u=[...u,...d.target.cubies],f=f.filter(p=>p!==d.target)}return{state:c,steps:l}}function mE(n,t,e,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:t,moves:[]}]],a=new Set([r(t)]);if(i(t))return[];for(let l=0;l<=s;l++){const c=o[l];if(c)for(const u of c)for(const f of e){let d=u.state;for(const m of f.moves)d=Mo(d,n.moves[m]);const p=r(d);if(a.has(p))continue;a.add(p);const g=l+f.moves.length,_={state:d,moves:[...u.moves,f.label]};if(i(d))return gE(_.moves,e);(o[g]||(o[g]=[])).push(_)}}return null}function gE(n,t){const e=new Map(t.map(i=>[i.label,i]));return n.map(i=>e.get(i))}const or=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],In=(n,t)=>({label:n,moves:t,isAlg:!0});function _E(n,t){const e=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}e.push({label:t(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&e.push({label:"Turn the top layer to line it up",moves:i}),e}const gm=uo,ru=n=>n[0].toUpperCase()+n.slice(1);function ar(n,t,e,i,s){const r=mE(n,t,e,i);if(!r)throw new Error("Could not finish the last layer – is the cube state valid?");const o=_E(r,s);let a=t;for(const l of o)for(const c of l.moves)a=Mo(a,n.moves[c]);return{state:a,steps:o}}const _m=n=>n.flatMap(t=>t.moves);function vm(n,t,e={}){const i=Wu(n,t);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return t===2?xE(n,i.canonical,e):vE(n,e)}catch(s){return{ok:!1,error:s.message}}}function ma(n,t,e){return n.cubies[t].slots.map(i=>e[n.stickers[i].face]).join("-")}function vE(n,t){const e=t.names||gm,i=$e(3),s=mm(i,fE),r=(R,C,P)=>i.cubies.findIndex(I=>I.pos[0]===R&&I.pos[1]===C&&I.pos[2]===P),o=[];let a=n;const l=(R,C)=>o.push({id:R,steps:C,moves:_m(C)}),c=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(R=>({cubies:[r(...R)]}));let u=su(i,a,[],c,e,s,R=>`${ru(ma(i,R.cubies[0],e))} edge`,9);a=u.state,l("cross",u.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(R=>({cubies:R.map(C=>r(...C))})),d=c.flatMap(R=>R.cubies);u=su(i,a,d,f,e,s,R=>`${ru(ma(i,R.cubies[0],e))} corner + ${ma(i,R.cubies[1],e)} edge`,11),a=u.state,l("f2l",u.steps);const p=i.cubies.map((R,C)=>({c:R,i:C})).filter(({c:R})=>R.pos[1]===2),g=p.filter(({c:R})=>R.kind==="edge").map(({c:R})=>R.slots[0]),_=p.filter(({c:R})=>R.kind==="corner").map(({i:R})=>R),m=i.stickers.map((R,C)=>R.face===0?C:-1).filter(R=>R>=0),h=R=>g.every(C=>R[C]===0),x=R=>m.every(C=>R[C]===0),v=R=>_.every(C=>Xu(i,R,C)),y=R=>i.stickers.every((C,P)=>R[P]===C.face);return u=ar(i,a,[...or,In("yellow cross",bn.yellowCross)],h,()=>`Make the ${e[0]} cross`),a=u.state,l("ollCross",u.steps),u=ar(i,a,[...or,In("sune",bn.sune),In("antisune",bn.antiSune)],x,R=>R.label==="sune"?`Sune: twist corners (${e[0]} face)`:`Anti-Sune: twist corners (${e[0]} face)`),a=u.state,l("ollFace",u.steps),u=ar(i,a,[...or,In("corner cycle",bn.cornerCycle),In("corner cycle inverse",Da(bn.cornerCycle))],v,()=>"Cycle three corners into place"),a=u.state,l("pllCorners",u.steps),u=ar(i,a,[...or,In("edge cycle",bn.edgeCycle),In("edge cycle inverse",Da(bn.edgeCycle))],y,()=>"Cycle three edges into place"),a=u.state,l("pllEdges",u.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(R=>R.moves)}}function xE(n,t,e){const i=$e(2),s=mm(i,hE),r=t.state,o=e.names||gm,a=[];t.map.forEach((h,x)=>{a[h]=o[x]});const l=(h,x,v)=>i.cubies.findIndex(y=>y.pos[0]===h&&y.pos[1]===x&&y.pos[2]===v),c=[];let u=r;const f=(h,x)=>c.push({id:h,steps:x,moves:_m(x)}),d=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(h=>({cubies:[l(...h)]}));let p=su(i,u,[l(-1,-1,-1)],d,a,s,h=>`${ru(ma(i,h.cubies[0],a))} corner`,11);u=p.state,f("layer",p.steps);const g=i.stickers.map((h,x)=>h.face===0?x:-1).filter(h=>h>=0),_=h=>g.every(x=>h[x]===0),m=h=>i.stickers.every((x,v)=>h[v]===x.face);return p=ar(i,u,[...or,In("sune",bn.sune),In("antisune",bn.antiSune)],_,h=>h.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),u=p.state,f("orient",p.steps),p=ar(i,u,[...or,In("swap neighbours",bn.tPerm),In("swap diagonal",bn.yPerm)],m,h=>h.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),u=p.state,f("permute",p.steps),{ok:!0,n:2,stages:c,moves:c.flatMap(h=>h.moves)}}function yE(n,t){const e=$e(t),i=Wu(n,t);if(!i.ok)return[];const s=t===2?i.canonical.state:n,r=u=>Xu(e,s,u),o=e.cubies.map((u,f)=>({c:u,i:f})),a=u=>o.filter(({c:f})=>u(f)).map(({i:f})=>f),l=e.stickers.every((u,f)=>u.face!==0||s[f]===0),c=e.stickers.every((u,f)=>s[f]===u.face);return t===2?[{id:"layer",done:a(u=>u.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:c}]:[{id:"cross",done:a(u=>u.pos[1]===-2&&u.kind==="edge").every(r)},{id:"f2l",done:a(u=>u.pos[1]<=0&&u.kind!=="center").every(r)},{id:"ollCross",done:a(u=>u.pos[1]===2&&u.kind==="edge").every(u=>s[e.cubies[u].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(u=>u.pos[1]===2&&u.kind==="corner").every(r)},{id:"pllEdges",done:c}]}const ME=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],SE=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other – they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first – learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],xm={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:tr.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:tr.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:tr.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:tr.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:tr.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:tr.tPerm}]};function ou(n,t){return xm[n].find(e=>e.id===t)}const K=kn({n:3,mode:"setup",editing:!1,brush:0,speed:1,playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",dramaSpeed:parseFloat(localStorage.getItem("rubiks-solver.dramaSpeed")||"0.32"),finale:localStorage.getItem("rubiks-solver.finale")==="1",fullscreenOnPlay:!1,showAllColorsOnHover:!1,countdown:0,exploding:!1,busy:!1,solution:null,pointer:0,solveError:"",moveCount:0}),en=hg(Qa(3));let au=null,ga=null,Fn=Promise.resolve();const lu=new Set;function bE(n){au=n}function EE(n){ga=n}function wE(n){return lu.add(n),()=>lu.delete(n)}const dr=Be(()=>Wu(en.value,K.n)),Ua=Be(()=>nE(en.value,K.n)),TE=Be(()=>yE(en.value,K.n));let _a=0;const AE=n=>new Promise(t=>setTimeout(t,n));async function CE(){const n=++_a;for(const t of[3,2,1]){if(n!==_a)return;K.countdown=t,await AE(1e3)}if(n===_a){K.countdown=0,K.exploding=!0;try{await(ga==null?void 0:ga())}finally{K.exploding=!1}}}function ho(){_a++,K.countdown=0}function tl(){ho(),K.solution=null,K.pointer=0,K.solveError=""}function $u(n){return Fn=Fn.then(()=>{en.value=n,tl(),K.moveCount=0}),Fn}function ym(n,t){return Fn=Fn.then(()=>{en.value=t,K.n=n,K.editing=!1,K.brush=0,tl(),K.moveCount=0}),Fn}function Jh(n){return ym(n,Qa(n))}function Qh(){return $u(Qa(K.n))}function Mm(){const n=iE(K.n);return $u(eE(Qa(K.n),K.n,n)).then(()=>n)}function cu(n,t=K.brush){const e=$e(K.n);if(e.cubies[e.stickers[n].cubie].kind==="center"&&K.n===3)return;const i=Uint8Array.from(en.value);i[n]=t,en.value=i,tl()}function es(n,{animate:t=!0,fromSolution:e=!1}={}){return K.exploding||(Fn=Fn.then(async()=>{const i=n.split(" ").reduce((s,r)=>tE(s,K.n,r),en.value);K.busy=!0;try{t&&au&&await au(n,i,K.speed)}finally{K.busy=!1}en.value=i,e||(tl(),K.moveCount++),lu.forEach(s=>s(n))})),Fn}function td(n,t){return n.forEach(e=>es(e,t)),Fn}async function RE(){K.solveError="",await new Promise(t=>setTimeout(t,20));const n=vm(en.value,K.n);return n.ok?(K.solution=n,K.pointer=0,n):(K.solution=null,K.solveError=n.error,null)}function Ia(){const n=K.solution;if(!n)return[];const t=[];return n.stages.forEach((e,i)=>{e.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>t.push({move:o,stage:i,step:r,index:a}))})}),t}async function kr(){ho();const n=Ia();if(K.pointer>=n.length)return;const t=n[K.pointer];K.pointer++,await es(t.move,{fromSolution:!0})}async function Kl(){ho();const n=Ia();K.pointer<=0||(K.pointer--,await es(dm(n[K.pointer].move),{fromSolution:!0}))}const PE={class:"panel"},LE={class:"notation"},DE=["onClick"],UE={class:"lessons"},IE={class:"lesson-title"},NE={class:"goal"},FE={key:0,class:"tip"},OE={key:1,class:"alg"},BE=["onClick"],kE=["onClick"],zE={__name:"LearnPanel",setup(n){return(t,e)=>(Mt(),Tt("section",PE,[e[0]||(e[0]=N("h2",null,"Learn to solve",-1)),e[1]||(e[1]=N("h3",null,"Notation",-1)),N("ul",LE,[(Mt(!0),Tt(_e,null,ke(ut(ME),i=>(Mt(),Tt("li",{key:i.move},[N("button",{onClick:s=>ut(es)(i.move)},Lt(i.move),9,DE),N("span",null,Lt(i.text),1)]))),128))]),(Mt(!0),Tt(_e,null,ke(ut(SE),i=>(Mt(),Tt("details",{key:i.title,class:"concept"},[N("summary",null,Lt(i.title),1),(Mt(!0),Tt(_e,null,ke(i.body,(s,r)=>(Mt(),Tt("p",{key:r},Lt(s),1))),128))]))),128)),N("h3",null,"The "+Lt(ut(K).n)+"×"+Lt(ut(K).n)+" method – layer by layer",1),N("ol",UE,[(Mt(!0),Tt(_e,null,ke(ut(xm)[ut(K).n],i=>(Mt(),Tt("li",{key:i.id},[N("div",IE,Lt(i.title),1),N("div",NE,"Goal: "+Lt(i.goal),1),N("p",null,Lt(i.concept),1),i.tip?(Mt(),Tt("p",FE,"💡 "+Lt(i.tip),1)):he("",!0),i.algorithm?(Mt(),Tt("div",OE,[N("code",null,Lt(i.algorithm.join(" ")),1),N("button",{onClick:s=>ut(td)(i.algorithm)},"Try",8,BE),N("button",{onClick:s=>ut(td)(ut(Da)(i.algorithm))},"Undo",8,kE)])):he("",!0)]))),128))]),e[2]||(e[2]=N("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left – scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},HE=$n(zE,[["__scopeId","data-v-22fd2ee3"]]),VE={class:"pad"},GE=["disabled","onClick"],WE={__name:"MovePad",setup(n){const t=["U","D","L","R","F","B"];return(e,i)=>(Mt(),Tt("div",VE,[(Mt(),Tt(_e,null,ke(t,s=>N("div",{key:s,class:"group"},[(Mt(!0),Tt(_e,null,ke([s,`${s}'`,`${s}2`],r=>(Mt(),Tt("button",{key:r,disabled:ut(K).editing,onClick:o=>ut(es)(r)},Lt(r),9,GE))),128))])),64))]))}},XE=$n(WE,[["__scopeId","data-v-8944ff15"]]),$E={class:"panel"},qE={class:"row"},YE=["disabled"],KE=["disabled"],jE={key:0,class:"timer"},ZE={key:0,class:"status ok"},JE={key:1,class:"check"},QE={class:"box"},t1={key:2,class:"hint-box"},e1={key:0,class:"hint-move"},n1={class:"move"},i1={class:"note"},s1={class:"row"},r1={key:0},o1={key:3,class:"quiz"},a1={class:"target"},l1={class:"move big"},c1={class:"note"},u1={__name:"PracticePanel",setup(n){const t=ee(!1),e=ee(!1),i=ee(0),s=ee(0),r=ee(null);let o=0;const a=Be(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){C(),await Mm(),t.value=!0,e.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function c(){clearInterval(o),t.value=!1}function u(){c(),r.value=null}function f(){const P=vm(en.value,K.n);if(!P.ok){r.value={stage:"Hint unavailable",goal:P.error,concept:"",move:"",label:""};return}const I=P.stages.find(b=>b.moves.length);if(!I)return;s.value++;const w=ou(K.n,I.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:I.steps[0].moves[0],label:I.steps[0].label}}Ne(Ua,P=>{P&&t.value&&K.moveCount>0&&(c(),e.value=!0,r.value=null)});const d=ee(!1),p=ee(""),g=ee(0),_=ee(0),m=ee(0),h=ee("Use the move pad or keyboard.");let x=!1,v=null;function y(){const P=Qb();p.value=P[Math.floor(Math.random()*P.length)]}function R(){if(d.value){C();return}c(),d.value=!0,g.value=_.value=m.value=0,h.value="Use the move pad or keyboard.",y(),v=wE(async P=>{x||(_.value++,P===p.value?(g.value++,m.value++,h.value="Correct!"):(m.value=0,h.value=`That was ${P}; ${p.value} was asked. Look at which face turns and which way.`),x=!0,await es(Da(P.split(" ")).join(" ")),x=!1,y())})}function C(){d.value=!1,v==null||v(),v=null}return pr(()=>{clearInterval(o),C()}),(P,I)=>(Mt(),Tt("section",$E,[I[2]||(I[2]=N("h2",null,"Practice & test",-1)),I[3]||(I[3]=N("h3",null,"Solve it yourself",-1)),I[4]||(I[4]=N("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),N("div",qE,[N("button",{class:"primary",onClick:l},Lt(t.value||e.value?"New challenge":"Start challenge"),1),N("button",{disabled:!t.value,onClick:f},"Hint",8,YE),N("button",{disabled:!t.value,onClick:u},"Give up",8,KE),t.value||e.value?(Mt(),Tt("span",jE,"⏱ "+Lt(a.value)+" · "+Lt(ut(K).moveCount)+" moves · "+Lt(s.value)+" hints",1)):he("",!0)]),e.value?(Mt(),Tt("p",ZE," Solved in "+Lt(a.value)+" with "+Lt(ut(K).moveCount)+" moves and "+Lt(s.value)+" hint"+Lt(s.value===1?"":"s")+". 🎉 ",1)):he("",!0),t.value||e.value?(Mt(),Tt("ul",JE,[(Mt(!0),Tt(_e,null,ke(ut(TE),w=>(Mt(),Tt("li",{key:w.id,class:Ie({done:w.done})},[N("span",QE,Lt(w.done?"✓":""),1),fe(" "+Lt(ut(ou)(ut(K).n,w.id).title),1)],2))),128))])):he("",!0),r.value?(Mt(),Tt("div",t1,[N("div",null,[N("b",null,Lt(r.value.stage),1),fe(" – "+Lt(r.value.goal),1)]),r.value.move?(Mt(),Tt("div",e1,[I[0]||(I[0]=fe(" Next move: ",-1)),N("span",n1,Lt(r.value.move),1),N("small",null,"("+Lt(r.value.label)+")",1)])):he("",!0),N("p",i1,Lt(r.value.concept),1)])):he("",!0),I[5]||(I[5]=N("h3",null,"Notation quiz",-1)),N("div",s1,[N("button",{class:Ie({primary:d.value}),onClick:R},Lt(d.value?"Stop quiz":"Start quiz"),3),d.value?(Mt(),Tt("span",r1,"Score "+Lt(g.value)+" / "+Lt(_.value)+" · streak "+Lt(m.value),1)):he("",!0)]),d.value?(Mt(),Tt("div",o1,[N("div",a1,[I[1]||(I[1]=fe("Perform ",-1)),N("span",l1,Lt(p.value),1)]),N("p",c1,Lt(h.value),1)])):he("",!0)]))}},f1=$n(u1,[["__scopeId","data-v-42bd0525"]]),Sm="rubiks-solver.saves";function uu(n,t){const{faceGrid:e}=$e(t);return ri.map(i=>e[i].flat().map(s=>ri[n[s]]).join("")).join("")}function ed(n){const t=String(n).replace(/\s+/g,"").toUpperCase(),e=t.length===54?3:t.length===24?2:0;if(!e)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${t.length}.`);const i=[...t].find(a=>!ri.includes(a));if(i)throw new Error(`"${i}" is not a face letter – use only U, R, F, D, L, B.`);const{faceGrid:s}=$e(e),r=new Uint8Array($e(e).slotCount),o=e*e;return ri.forEach((a,l)=>{s[a].flat().forEach((c,u)=>{r[c]=ri.indexOf(t[l*o+u])})}),{n:e,state:r}}function h1({name:n,n:t,state:e}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:t,facelets:uu(e,t),savedAt:new Date().toISOString()},null,2)}function jl(n){const t=String(n).trim();if(t.startsWith("{")){let e;try{e=JSON.parse(t)}catch{throw new Error("The file is not valid JSON.")}if(typeof e.facelets!="string")throw new Error("The file has no cube position in it.");const i=ed(e.facelets);if(e.n&&e.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof e.name=="string"?e.name:""}}return{...ed(t),name:""}}function d1(){try{const n=JSON.parse(localStorage.getItem(Sm)||"[]");return Array.isArray(n)?n.filter(t=>t&&typeof t.facelets=="string"):[]}catch{return[]}}function p1(n){try{return localStorage.setItem(Sm,JSON.stringify(n)),!0}catch{return!1}}const m1={class:"saveload"},g1={class:"row"},_1=["placeholder"],v1={key:0,class:"saved"},x1=["title"],y1=["onClick"],M1=["onClick"],S1={key:1,class:"note"},b1={class:"row"},E1={class:"file-btn"},w1={class:"row"},T1=["disabled"],A1={__name:"SaveLoad",setup(n){const t=kn(d1()),e=ee(""),i=ee(""),s=ee(""),r=ee(!1);Ne(t,()=>p1([...t]),{deep:!0});const o=Be(()=>`${K.n}×${K.n} position ${t.filter(h=>h.n===K.n).length+1}`);function a(h,x=!1){s.value=h,r.value=x}const l=h=>new Date(h).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function c(){const h=e.value.trim()||o.value,x=uu(en.value,K.n),v=t.find(y=>y.name===h&&y.n===K.n);v?(v.facelets=x,v.savedAt=new Date().toISOString()):t.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:h,n:K.n,facelets:x,savedAt:new Date().toISOString()}),e.value="",a(`${v?"Updated":"Saved"} "${h}".`)}async function u(h,x){await ym(h.n,h.state),a(`Loaded ${x}.`)}function f(h){try{u(jl(h.facelets),`"${h.name}"`)}catch(x){a(x.message,!0)}}function d(h){t.splice(t.indexOf(h),1),a(`Deleted "${h.name}".`)}function p(){const h=e.value.trim()||o.value,x=new Blob([h1({name:h,n:K.n,state:en.value})],{type:"application/json"}),v=URL.createObjectURL(x),y=document.createElement("a");y.href=v,y.download=`${h.replace(/[^\w\-. ]+/g,"_")}.cube.json`,y.click(),URL.revokeObjectURL(v),a(`Exported "${h}".`)}async function g(h){var v;const x=(v=h.target.files)==null?void 0:v[0];if(h.target.value="",!!x)try{const y=jl(await x.text());await u(y,y.name?`"${y.name}"`:x.name)}catch(y){a(y.message,!0)}}async function _(){const h=uu(en.value,K.n);try{await navigator.clipboard.writeText(h),a("Position code copied to the clipboard.")}catch{i.value=h,a("Clipboard not available – the code is in the box below, copy it from there.")}}function m(){try{u(jl(i.value),"the pasted code"),i.value=""}catch(h){a(h.message,!0)}}return(h,x)=>(Mt(),Tt("details",m1,[x[3]||(x[3]=N("summary",null,"Save / load position",-1)),N("div",g1,[We(N("input",{"onUpdate:modelValue":x[0]||(x[0]=v=>e.value=v),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:fc(c,["enter"])},null,40,_1),[[Gn,e.value]]),N("button",{class:"primary",onClick:c},"Save")]),t.length?(Mt(),Tt("ul",v1,[(Mt(!0),Tt(_e,null,ke(t,v=>(Mt(),Tt("li",{key:v.id},[N("span",{class:"title",title:v.name},Lt(v.name),9,x1),N("small",null,Lt(v.n)+"×"+Lt(v.n)+" · "+Lt(l(v.savedAt)),1),N("button",{onClick:y=>f(v)},"Load",8,y1),N("button",{title:"Delete",onClick:y=>d(v)},"✕",8,M1)]))),128))])):(Mt(),Tt("p",S1,"No saved positions yet. Saves stay in this browser.")),N("div",b1,[N("button",{onClick:p},"Export file"),N("label",E1,[x[2]||(x[2]=fe(" Import file ",-1)),N("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),N("button",{onClick:_},"Copy code")]),N("div",w1,[We(N("input",{"onUpdate:modelValue":x[1]||(x[1]=v=>i.value=v),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:fc(m,["enter"])},null,544),[[Gn,i.value]]),N("button",{disabled:!i.value.trim(),onClick:m},"Load code",8,T1)]),s.value?(Mt(),Tt("p",{key:2,class:Ie(["msg",{bad:r.value}]),role:"status"},Lt(s.value),3)):he("",!0)]))}},C1=$n(A1,[["__scopeId","data-v-be1521d1"]]),R1=["title","onClick"],P1={class:"tag"},L1={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:t}){const e=n,i=t,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=Be(()=>$e(e.n)),o=Be(()=>r.value.faceGrid),a=l=>e.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,c)=>(Mt(),Tt("div",{class:Ie(["net",`n${n.n}`])},[(Mt(),Tt(_e,null,ke(s,u=>N("div",{key:u.name,class:"face",style:Ri({gridColumn:u.col,gridRow:u.row})},[(Mt(!0),Tt(_e,null,ke(o.value[u.name],(f,d)=>(Mt(),Tt("div",{key:d,class:"nrow"},[(Mt(!0),Tt(_e,null,ke(f,(p,g)=>(Mt(),Tt("button",{key:g,class:Ie(["cell",{locked:a(p)}]),style:Ri({background:ut(fo)[n.state[p]]}),title:`${u.name} ${d+1},${g+1}`,onClick:_=>i("paint",p)},null,14,R1))),128))]))),128)),N("span",P1,Lt(u.name),1)],4)),64))],2))}},D1=$n(L1,[["__scopeId","data-v-a0e6c1b2"]]),bm="rubiks-solver.ai",qu=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],nd={provider:"builtin",geminiKey:"",geminiModel:qu[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function U1(){let n={};try{n=JSON.parse(localStorage.getItem(bm)||"{}")}catch{}const t={...nd,...n};return qu.includes(t.geminiModel)||(t.geminiModel=nd.geminiModel),t}function I1(n){localStorage.setItem(bm,JSON.stringify(n))}const id="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class ws extends Error{constructor(t,e,i=0){super(e),this.kind=t,this.status=i}}async function Ds(n,{method:t="GET",headers:e={},body:i,signal:s,timeoutMs:r=2e4}={}){var d;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let c;try{c=await fetch(n,{method:t,headers:i?{"Content-Type":"application/json",...e}:e,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(p){throw a?new ws("timeout","The request timed out."):p.name==="AbortError"?new ws("abort","Cancelled."):new ws("network",p.message)}finally{clearTimeout(l)}const u=await c.text();let f=null;try{f=JSON.parse(u)}catch{}if(!c.ok){const p=((d=f==null?void 0:f.error)==null?void 0:d.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||u.slice(0,200)||c.statusText;throw new ws("http",p,c.status)}return f}function Yu(n,t){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com – check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${t}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function Ku(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} – the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function ju(n,t){return n.kind==="timeout"?`${t} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const Zu=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,Ju=n=>n.localUrl.trim().replace(/\/+$/,"");async function Qu(n,t,e){var i,s,r,o,a,l,c;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let u;try{u=await Ds(`${Zu(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:id}]},contents:[{role:"user",parts:[{text:t}]}]},signal:e})}catch(d){throw new Error(Yu(d,n.geminiModel))}const f=((o=(r=(s=(i=u==null?void 0:u.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(d=>d.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const u=Ju(n);if(!u)throw new Error("Enter the local server URL in Settings.");let f;try{f=await Ds(`${u}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:id},{role:"user",content:t}]},signal:e,timeoutMs:12e4})}catch(p){throw new Error(p.kind==="network"?await Ku(u):ju(p,u))}const d=((c=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:c.content)??"";if(!d)throw new Error("The local model returned no text.");return d.trim()}throw new Error("No AI provider selected.")}const Em="Reply with the single word OK.";async function N1(n){const t=n.geminiKey.trim();if(!t)return{ok:!1,message:"Enter an API key first."};try{await Ds(Zu(n.geminiModel),{headers:{"x-goog-api-key":t},timeoutMs:15e3});const e=await Qu({...n,provider:"gemini"},Em);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:e}}catch(e){return{ok:!1,message:e instanceof ws?Yu(e,n.geminiModel):e.message}}}async function F1(n){const t=Ju(n);if(!t)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let e=null;try{const i=await Ds(`${t}/models`,{timeoutMs:8e3});e=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await Ku(t)};if(i.kind==="timeout")return{ok:!1,message:ju(i,t)}}if(e!=null&&e.length&&!e.includes(n.localModel)){const i=e.slice(0,10).join(", ")+(e.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await Qu({...n,provider:"local"},Em);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function O1(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" – goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function wm(n){const t=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&t.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&t.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),t.join(`

`)}async function B1(n,t,e){return n.provider==="builtin"?{text:wm(t),ai:!1}:{text:await Qu(n,O1(t),e),ai:!0}}const be=kn(U1());Ne(be,n=>I1({...n}),{deep:!0});const Tm=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],Zl=(n,t)=>Tm.find(e=>e.name===t).face[n];function Jl(n,t){const e=n/2,i=t/2,s=Math.min(n,t)*.38,r=s*Math.cos(Math.PI/6);return[[e,i],[e,i-s],[e+r,i-s/2],[e+r,i+s/2],[e,i+s],[e-r,i+s/2],[e-r,i-s/2]]}function sd(n,t,e){const i=$e(e),s=i.m,r=[],o=t[0];for(const a of Tm){const l=t[a.ea],c=t[a.eb],u=t[a.far],f=ji[Zl(n,a.name)],d=ji[Zl(n,a.across[0])],p=ji[Zl(n,a.across[1])];for(let g=0;g<e;g++)for(let _=0;_<e;_++){const m=(g+.5)/e,h=(_+.5)/e,x=o[0]+m*(l[0]-o[0])+h*(c[0]-o[0])+m*h*(u[0]-l[0]-c[0]+o[0]),v=o[1]+m*(l[1]-o[1])+h*(c[1]-o[1])+m*h*(u[1]-l[1]-c[1]+o[1]),y=[0,1,2].map(R=>s*(f[R]+d[R]+p[R])-2*g*p[R]-2*_*d[R]);r.push({slot:i.slotAt(y,f),x,y:v})}}return r}function k1(n,t,e,i){const{data:s,width:r,height:o}=n;let a=0,l=0,c=0,u=0;for(let f=Math.max(0,Math.round(e-i));f<=Math.min(o-1,Math.round(e+i));f++)for(let d=Math.max(0,Math.round(t-i));d<=Math.min(r-1,Math.round(t+i));d++){const p=(f*r+d)*4;a+=s[p],l+=s[p+1],c+=s[p+2],u++}return u?[a/u,l/u,c/u]:[0,0,0]}function Am([n,t,e]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(t),i(e)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,c=(.0193*s+.1192*r+.9505*o)/1.08883,u=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*u(l)-16,500*(u(a)-u(l)),200*(u(l)-u(c))]}const Na=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),rd=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),z1=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),H1=n=>{const t=[...n].sort((e,i)=>e-i);return t.length%2?t[(t.length-1)/2]:(t[t.length/2-1]+t[t.length/2])/2};function V1(n){const t=a=>Math.hypot(a[1],a[2]),e=n.map(a=>({rgb:a,lab:Am(a)})).filter(({lab:a})=>a[0]>60&&t(a)<50);if(!e.length)return null;const i=Math.min(...e.map(a=>t(a.lab))),s=e.filter(a=>t(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>H1(o.map(l=>l.rgb[a])))}function G1(n,t){return n.map((e,i)=>{const s=Math.min(5,1/Math.max(rd(t[i]),.02));return Math.max(0,Math.min(255,z1(Math.min(1,rd(e)*s))))})}function W1([n,t,e]){const[i,s,r]=[n/255,t/255,e/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let c=0;return l>0&&(o===i?c=(s-r)/l%6:o===s?c=(r-i)/l+2:c=(i-s)/l+4,c*=60,c<0&&(c+=360)),{h:c>300?c-360:c,s:o===0?0:l/o,v:o}}const zr=[-30,90],Ql=n=>n.s>.4&&n.h>-40&&n.h<80;function X1(n){const t=[...n].sort((i,s)=>i-s);return t.slice(1).map((i,s)=>({size:i-t[s],mid:(i+t[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const od=(n,[t,e])=>n<t?0:n<e?1:2;function $1(n,t,e=null){const i=$e(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const u=[],f=[];for(const h of t){const x=i.stickers[h.slot];i.cubies[x.cubie].kind==="center"&&(u[x.face]=h.lab,f[x.face]=h)}for(const h of t){let x=0;for(let v=1;v<6;v++)Na(h.lab,u[v])<Na(h.lab,u[x])&&(x=v);s[h.slot]=x}const d=[0,1,2,3,4,5].filter(h=>Ql(f[h])).sort((h,x)=>f[h].h-f[x].h);if(d.length!==3)return{state:s,warnings:r,hue:null};const p=d.map(h=>f[h].h),g=[(p[0]+p[1])/2,(p[1]+p[2])/2],_=e??g,m=[];for(const h of t)!d.includes(s[h.slot])||h.s<.25||(s[h.slot]=d[od(h.h,_)],m.push(h.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:_,points:m,anchors:p}}}const o=t.filter(Ql);let a=null,l=null;if(o.length===12){const u=X1(o.map(g=>g.h)),f=e??u,d=t.filter(g=>!Ql(g)),p=ad(d.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+od(g.h,f))),d.forEach((g,_)=>a.set(g.slot,p[_])),l={auto:u,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const u=ad(t.map(f=>f.lab),6);a=new Map(t.map((f,d)=>[f.slot,u[d]]))}for(const[u,f]of a)s[u]=f;const c=pm(s);return c.error?(r.push(`${c.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:c.state,warnings:r,hue:l}}function ad(n,t){const e=n.length/t,i=[n[0]];for(;i.length<t;){let r=0,o=-1;n.forEach((a,l)=>{const c=Math.min(...i.map(u=>Na(a,u)));c>o&&(o=c,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((c,u)=>i.forEach((f,d)=>o.push([Na(c,f),u,d]))),o.sort((c,u)=>c[0]-u[0]);const a=new Array(t).fill(e),l=new Array(n.length).fill(-1);for(const[,c,u]of o)l[c]<0&&a[u]>0&&(l[c]=u,a[u]--);s=l;for(let c=0;c<t;c++){const u=n.filter((f,d)=>s[d]===c);u.length&&(i[c]=[0,1,2].map(f=>u.reduce((d,p)=>d+p[f],0)/u.length))}}return s}function q1(n,t,{whiteBalance:e=!1,cutoffs:i=null}={}){const s=[null,null];let r=t;if(e){r=[];for(const a of[0,1]){const l=t.filter(u=>u.photo===a),c=V1(l.map(u=>u.rgb));s[a]=c?"applied":"no-white",r.push(...c?l.map(u=>({...u,rgb:G1(u.rgb,c)})):l)}}const o=r.map(a=>({slot:a.slot,lab:Am(a.rgb),...W1(a.rgb)}));return{...$1(n,o,i),whiteBalance:s}}const er=Math.PI/180,Y1=Array.from({length:8},(n,t)=>[t&1?1:-1,t&2?1:-1,t&4?1:-1]);function K1(n,t,e){const i=Math.max(n,t,e),s=Math.min(n,t,e);return{s:i===0?0:(i-s)/i,v:i/255}}function j1(n,t=360){const{data:e,width:i,height:s}=n,r=Math.min(1,t/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),c=new Float32Array(o*a);for(let u=0;u<a;u++){const f=Math.floor(u*s/a),d=Math.max(f+1,Math.floor((u+1)*s/a));for(let p=0;p<o;p++){const g=Math.floor(p*i/o),_=Math.max(g+1,Math.floor((p+1)*i/o));let m=0,h=0,x=0,v=0;for(let I=f;I<d;I++)for(let w=g;w<_;w++){const b=(I*i+w)*4;m+=e[b],h+=e[b+1],x+=e[b+2],v++}const{s:y,v:R}=K1(m/v,h/v,x/v),C=y>.42&&R>.32?Math.min(1,(y-.32)/.3):0,P=y<.2&&R>.72?.9:0;l[u*o+p]=Math.max(C,P),c[u*o+p]=R<.3?Math.min(1,(.34-R)/.14):0}}return{w:o,h:a,scale:r,stick:ld(l,o,a),dark:ld(c,o,a)}}function ld(n,t,e){const i=new Float32Array(n.length);for(let s=0;s<e;s++)for(let r=0;r<t;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const u=r+c,f=s+l;u<0||f<0||u>=t||f>=e||(o+=n[f*t+u],a++)}i[s*t+r]=o/a}return i}function fu(n,t,e,i,s){if(i<0||s<0||i>t-1||s>e-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(t-1,r+1),l=Math.min(e-1,o+1),c=i-r,u=s-o;return n[o*t+r]*(1-c)*(1-u)+n[o*t+a]*c*(1-u)+n[l*t+r]*(1-c)*u+n[l*t+a]*c*u}function Z1(n,t,e){const[i,s]=[Math.cos(n*er),Math.sin(n*er)],[r,o]=[Math.cos(t*er),Math.sin(t*er)],[a,l]=[Math.cos(e*er),Math.sin(e*er)],c=[[i,0,s],[0,1,0],[-s,0,i]],u=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],d=(p,g)=>p.map(_=>[0,1,2].map(m=>_[0]*g[0][m]+_[1]*g[1][m]+_[2]*g[2][m]));return d(f,d(u,c))}function tf(n,t,e){const i=Z1(n.yaw,n.pitch,n.roll),s=(n.cx-t/2)/n.f*n.z,r=(n.cy-e/2)/n.f*n.z;return Y1.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const ef=(n,t,e,i)=>[t/2+i*n[0]/n[2],e/2+i*n[1]/n[2]];function Cm(n){let t=0;for(let e=1;e<8;e++)n[e][2]<n[t][2]&&(t=e);return t}const J1=[[1,2],[1,4],[2,4]],cd=[.12,.3,.5,.7,.88],Q1=[.02,.05,.08],ud=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function Rm(n,t,e,i,s){const{w:r,h:o}=n,a=C=>C?fu(n.stick,r,o,C[0],C[1]):-1,l=C=>C?fu(n.dark,r,o,C[0],C[1]):-1;let c=0,u=0,f=0,d=0,p=0,g=0,_=0,m=0;const h=[],x=[],v=(C,P)=>{m++,C<0&&(_++,C=0),P===0?(c+=C,u++):P===1?(f+=C,d++):(p+=C,g++)};for(const C of e){const P=[C(0,0),C(1,0),C(1,1),C(0,1)];if(P.some(w=>!w))return-1;x.push(P);let I=0;for(let w=0;w<4;w++){const b=P[w],D=P[(w+1)%4];I+=b[0]*D[1]-D[0]*b[1]}h.push(Math.abs(I)/2);for(let w=0;w<t;w++)for(let b=0;b<t;b++){let D=0,it=!1;for(const[$,st]of ud){const ft=a(C((w+.5)/t+$*.16/t,(b+.5)/t+st*.16/t));ft<0?it=!0:D+=ft}v(it?-1:D/ud.length,0)}for(let w=1;w<t;w++)for(const b of cd)for(const D of[0,1]){const it=(X,ct)=>D===0?C(X,ct):C(ct,X);let $=-1;for(const X of[-i,0,i])$=Math.max($,l(it(w/t+X/t,b)));const st=a(it(w/t-.33/t,b)),ft=a(it(w/t+.33/t,b));v($<0||st<0||ft<0?-1:$*Math.min(st,ft),1)}for(const w of cd)for(const[b,D,it,$,st,ft]of[[0,w,.33/t,w,1,0],[1,w,1-.33/t,w,-1,0],[w,0,w,.33/t,0,1],[w,1,w,1-.33/t,0,-1]]){let X=-1;for(const W of Q1)X=Math.max(X,l(C(b+st*W/t,D+ft*W/t)));const ct=a(C(it,$));v(X<0||ct<0?-1:X*ct,2)}}if(!u||!d)return-1;if(s)return{cell:c/u,line:f/d,border:p/g,outside:_,total:m};let y=.3*(c/u)+.4*(f/d)+.3*(p/g);y*=1-_/Math.max(1,m);const R=Math.min(...h)/Math.max(...h);return R<.12&&(y*=R/.12),y*(.4+.6*ew(n,x))}const tw=(n,t,e)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function ew(n,t){const{w:e,h:i}=n,s=t.flat(),r=s.map(m=>m[0]),o=s.map(m=>m[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),c=Math.max(0,Math.min(...r)-l),u=Math.min(e-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),d=Math.min(i-1,Math.max(...o)+l);let p=0,g=0;const _=22;for(let m=0;m<_;m++)for(let h=0;h<_;h++){const x=c+(u-c)*(m+.5)/_,v=f+(d-f)*(h+.5)/_,y=fu(n.stick,e,i,x,v);t.some(R=>tw(R,x,v))?p+=y:g+=y}return p/Math.max(1e-6,p+g)}function va(n,t,e,i=.12,s=!1){const{w:r,h:o}=n,a=tf(e,r,o),l=Cm(a);if(a[l][2]<1)return-1;const c=a[l],u=(h,x,v)=>v<.3?null:[r/2+e.f*h/v,o/2+e.f*x/v],f=J1.map(([h,x])=>{const v=a[l^h],y=a[l^x],R=[v[0]-c[0],v[1]-c[1],v[2]-c[2]],C=[y[0]-c[0],y[1]-c[1],y[2]-c[2]];return(P,I)=>u(c[0]+R[0]*P+C[0]*I,c[1]+R[1]*P+C[1]*I,c[2]+R[2]*P+C[2]*I)});let d=Rm(n,t,f,i,s);if(s||d<0)return d;const p=a.map(h=>h[2]>.3?ef(h,r,o,e.f):[0,0]),g=p.map(h=>h[0]),_=p.map(h=>h[1]),m=Math.max(Math.max(...g)-Math.min(...g),Math.max(..._)-Math.min(..._))/Math.min(r,o);return m<.15&&(d*=m/.15),m>1.1&&(d*=1.1/m),d}function fd(n,t,e,i=.05){const s=(d,p,g,_)=>(m,h)=>[_[0]+m*(d[0]-_[0])+h*(p[0]-_[0])+m*h*(g[0]-d[0]-p[0]+_[0]),_[1]+m*(d[1]-_[1])+h*(p[1]-_[1])+m*h*(g[1]-d[1]-p[1]+_[1])],[r,o,a,l,c,u,f]=e;return Rm(n,t,[s(f,a,o,r),s(c,f,u,r),s(a,c,l,r)],i,!1)}function hd(n,t,e){const i=tf(n,t,e),s=Cm(i),r=f=>ef(i[f],t,e,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const d=o[f].p,p=o[(f+1)%6].p;a+=d[0]*p[1]-p[0]*d[1]}a<0&&o.reverse();const l=o.map((f,d)=>f.far?d:-1).filter(f=>f>=0),c=l.reduce((f,d)=>o[d].p[1]<o[f].p[1]?d:f,l[0]),u=[0,1,2,3,4,5].map(f=>o[(c+f)%6].p);return[r(s),...u]}function hu(n,t,e){const i=tf(n,t,e).map(o=>ef(o,t,e,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function nw(n,t,e,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:t,pitch:e,roll:i,f:s},l=(n.x1+n.x2)/2,c=(n.y1+n.y2)/2;for(let u=0;u<3;u++){const f=hu(a,r,o),d=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),p=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(d*p));const g=hu(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=c-(g.y1+g.y2)/2}return a}const iw=["cx","cy","z","yaw","pitch","roll","lf"];function sw(n,t,e,i){const s=n.w,r=n.h,o={...e,lf:Math.log(e.f/i)},a=p=>({...p,f:i*Math.exp(p.lf)}),l=hu(a(o),s,r),c=Math.max(l.x2-l.x1,l.y2-l.y1),u={cx:.02*c,cy:.02*c,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:p,shrink:g}of f){let _=va(n,t,a(o),p);for(const m of g)for(let h=0;h<30;h++){let x=!1;for(const v of iw)for(const y of[1,-1]){const R={...o,[v]:o[v]+y*u[v]*m};if(v==="pitch"&&Math.abs(R.pitch)>85||v==="lf"&&(R.lf<-.7||R.lf>1.6)||v==="z"&&R.z<1.5)continue;const C=va(n,t,a(R),p);C>_+1e-5&&(_=C,Object.assign(o,R),x=!0)}if(!x)break}}const d=a(o);return{pose:d,score:va(n,t,d,.06)}}function rw(n,t,{box:e=null}={}){const i=j1(n),{w:s,h:r}=i,a=e?[(x=>({x1:x.x1/1e3*s,x2:x.x2/1e3*s,y1:x.y1/1e3*r,y2:x.y2/1e3*r}))(e)]:[.4,.5,.62,.76,.9].map(x=>{const v=x*Math.min(s,r)/2;return{x1:s/2-v,x2:s/2+v,y1:r/2-v,y2:r/2+v}}),l=.8*Math.max(s,r),c=[];for(const x of a)for(let v=0;v<90;v+=10)for(let y=-80;y<=80;y+=10)for(let R=-90;R<=90;R+=15)for(const C of[l,2.8*l]){const P=nw(x,v,y,R,C,s,r);c.push({pose:P,score:va(i,t,P,.16)})}c.sort((x,v)=>v.score-x.score);const u=c[Math.floor(c.length/2)].score,f=[],d=x=>hd(x,s,r).flat();for(const x of c.slice(0,200)){const v=d(x.pose),y=Math.max(...v.filter((R,C)=>C%2===0))-Math.min(...v.filter((R,C)=>C%2===0));if(f.every(R=>Math.max(...R.k.map((C,P)=>Math.abs(C-v[P])))>.05*y)&&f.push({...x,k:v}),f.length>=16)break}let p=null;const g=[];for(const x of f){const v=sw(i,t,x.pose,l);g.push(v),(!p||v.score>p.score)&&(p=v)}if(!p||p.score<=0)return null;const _=hd(p.pose,s,r),m=ow(i,t,_);return{handles:m.handles.map(([x,v])=>[x/s*1e3,v/r*1e3]),poseHandles:_.map(([x,v])=>[x/s*1e3,v/r*1e3]),score:m.score,poseScore:p.score,margin:m.score-u,pose:p.pose,maps:i,alternatives:g}}function ow(n,t,e){const i=e.map(c=>c[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=e.map(c=>[...c]),a=(c,u)=>Math.max(e[c][u]-r,Math.min(e[c][u]+r,o[c][u]));let l=fd(n,t,o,.05);for(const c of[.012,.006,.003])for(let u=0;u<20;u++){let f=!1;for(let d=0;d<7;d++)for(let p=0;p<2;p++)for(const g of[1,-1]){const _=o[d][p];if(o[d][p]=_+g*c*s,o[d][p]!==a(d,p)){o[d][p]=_;continue}const m=fd(n,t,o,.05);m>l+1e-5?(l=m,f=!0):o[d][p]=_}if(!f)break}return{handles:o,score:l}}function dd(n,t,{box:e=null,signal:i}={}){const s=()=>{const r=rw(n,t,{box:e});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=c=>{i==null||i.removeEventListener("abort",l),a.terminate(),c.data.error?o(new Error(c.data.error)):r(c.data.result)},a.onerror=c=>{var u;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(u=c.preventDefault)==null||u.call(c)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:t,box:e})})}const Pm=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,sa=(n,...t)=>t.map(e=>n==null?void 0:n[e]).find(e=>e!==void 0);function aw(n){const t=n.indexOf("{"),e=n.lastIndexOf("}");if(t<0||e<=t)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(t,e+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=sa(s,"x1","xmin","left","x_min"),o=sa(s,"y1","ymin","top","y_min"),a=sa(s,"x2","xmax","right","x_max"),l=sa(s,"y2","ymax","bottom","y_max"));const c=[r,o,a,l].map(Number);if(c.some(u=>!Number.isFinite(u)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(c[0],c[2]),y1:Math.min(c[1],c[3]),x2:Math.max(c[0],c[2]),y2:Math.max(c[1],c[3])}}function Lm(n){const{x1:t,y1:e,x2:i,y2:s}=n;if([t,e,i,s].every(d=>d<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(t<-50||e<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-t,o=s-e;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(t+i)/2,l=(e+s)/2,c=r/2,u=o/2,f=d=>Math.max(0,Math.min(1e3,d));return[[a,l],[a,l-u],[a+c,l-u/2],[a+c,l+u/2],[a,l+u],[a-c,l+u/2],[a-c,l-u/2]].map(([d,p])=>[f(d),f(p)])}const lw=n=>{const t=[...n].sort((e,i)=>e-i);return t[Math.floor(t.length/2)]};function cw(n,t){const{data:e,width:i,height:s}=n,r=(F,G)=>Math.round(F/1e3*G),o=r(t.x1,i),a=r(t.x2,i),l=r(t.y1,s),c=r(t.y2,s),u=F=>Math.max(0,Math.min(i-1,Math.round(F))),f=F=>Math.max(0,Math.min(s-1,Math.round(F))),d=(a-o)*.25,p=(c-l)*.25,[g,_,m,h]=[u(o-d),u(a+d),f(l-p),f(c+p)],x=_-g+1,v=h-m+1;if(x<40||v<40)return null;const y=Math.max(3,Math.round(Math.min(x,v)*.06)),R=(F,G)=>{const St=(G*i+F)*4;return[e[St],e[St+1],e[St+2]]},C=[];for(let F=m;F<=h;F++)for(let G=g;G<=_;G++)(G-g<y||_-G<y||F-m<y||h-F<y)&&C.push(R(G,F));const P=[0,1,2].map(F=>lw(C.map(G=>G[F]))),I=F=>Math.hypot(F[0]-P[0],F[1]-P[1],F[2]-P[2]),w=C.map(I).sort((F,G)=>F-G),b=Math.max(40,w[Math.floor(w.length*.95)]*1.6),D=new Array(x).fill(0),it=new Array(v).fill(0);for(let F=0;F<v;F++)for(let G=0;G<x;G++)I(R(g+G,m+F))>b&&(D[G]++,it[F]++);const $=F=>{const G=Math.max(...F)*.04,St=F.findIndex(lt=>lt>=G),Z=F.length-1-[...F].reverse().findIndex(lt=>lt>=G);return St<0?null:[St,Z]},st=$(D),ft=$(it);if(!st||!ft)return null;const X={x1:(g+st[0])/i*1e3,x2:(g+st[1]+1)/i*1e3,y1:(m+ft[0])/s*1e3,y2:(m+ft[1]+1)/s*1e3},ct=F=>(F.x2-F.x1)*(F.y2-F.y1),W=ct(X)/ct(t),At=Math.hypot((X.x1+X.x2-t.x1-t.x2)/2,(X.y1+X.y2-t.y1-t.y2)/2),q=st[0]===0||ft[0]===0||st[1]===x-1||ft[1]===v-1;return W<.45||W>2.2||At>.25*Math.max(t.x2-t.x1,t.y2-t.y1)||q?null:X}function uw(n){return Dm(n).length>0}function Dm(n){var e,i,s;const t=[];return(e=n.localUrl)!=null&&e.trim()&&((i=n.localModel)!=null&&i.trim())&&t.push("local"),(s=n.geminiKey)!=null&&s.trim()&&t.push("gemini"),t}async function fw(n,t,e){var s,r;const i=Ju(n);try{await Ds(`${i}/models`,{timeoutMs:4e3,signal:e})}catch(o){if(o.kind==="network")throw new Error(await Ku(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await Ds(`${i}/chat/completions`,{method:"POST",signal:e,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:Pm},{type:"image_url",image_url:{url:t}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof ws){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(ju(o,i)+a)}throw o}}async function hw(n,t,e){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(t)??[];if(!s)throw new Error("Could not encode the photo.");try{const c=await Ds(`${Zu(n.geminiModel)}:generateContent`,{method:"POST",signal:e,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:Pm},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=c==null?void 0:c.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(u=>u.text).join(""))??"",model:n.geminiModel}}catch(c){throw c instanceof ws?new Error(Yu(c,n.geminiModel)):c}}async function dw(n,t,e){const i=Dm(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?fw(n,t,e):hw(n,t,e)),l=aw(o);return{handles:Lm(l),source:r,model:a,box:l,notes:s}}catch(o){if(e!=null&&e.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const pw={class:"photo-import"},mw={class:"photos"},gw={class:"file"},_w=["onChange"],vw=["onPointerdown","onPointermove"],xw={class:"ai-row"},yw=["disabled","onClick"],Mw={class:"wb"},Sw={class:"wb"},bw={class:"actions"},Ew=["disabled"],ww={key:0,class:"hue-box"},Tw={class:"hue-head"},Aw=["disabled"],Cw={class:"slider"},Rw=["min","max"],Pw={class:"slider"},Lw=["min","max"],Dw={key:1,class:"note"},pd=.3,Uw={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:t}){const e=n,i=t,s=[null,null],r=kn([null,null]),o=kn([Jl(420,420),Jl(420,420)]),a=ee(""),l=ee(!1),c=ee(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Ne(c,q=>localStorage.setItem("rubiks-solver.autoAlign",q?"1":"0"));const u=kn([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],d=ee(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),p=ee(null),g=ee(null),_=ee(!1),m=ee(0),h=ee(0),x=ee(null),v=ee(null),y=Be(()=>r[0]&&r[1]);go(()=>[0,1].forEach(b)),Ne(()=>e.n,()=>{[0,1].forEach(b),p.value=null,g.value=null,_.value=!1});function R(q,F){var Z;const G=(Z=F.target.files)==null?void 0:Z[0];if(!G)return;const St=new Image;St.onload=async()=>{r[q]=St,o[q]=Jl(420,420),u[q].state="",u[q].text="",await Eu(),b(q),c.value&&I(q)},St.src=URL.createObjectURL(G)}function C(q){const F=Math.min(1,768/Math.max(q.width,q.height)),G=document.createElement("canvas");G.width=Math.round(q.width*F),G.height=Math.round(q.height*F);const St=G.getContext("2d");return St.drawImage(q,0,0,G.width,G.height),{dataUrl:G.toDataURL("image/jpeg",.85),pixels:St.getImageData(0,0,G.width,G.height)}}function P(q,F,G){const{s:St,ox:Z,oy:lt}=w(F);G.forEach(([bt,mt],Ot)=>{o[q][Ot]=[Z+bt/1e3*F.width*St,lt+mt/1e3*F.height*St]}),b(q)}async function I(q){var Z;const F=r[q];if(!F)return;(Z=f[q])==null||Z.abort();const G=new AbortController;f[q]=G,u[q].busy=!0,u[q].state="",u[q].text="Analysing the photo…";const St=()=>r[q]!==F||G.signal.aborted;try{const{dataUrl:lt,pixels:bt}=C(F),mt=uw(be),Ot=mt?dw({...be},lt,G.signal).catch(A=>{if(A.kind==="abort"||G.signal.aborted)throw A;return{error:A.message}}):null;let Bt=await dd(bt,e.n,{signal:G.signal});if(St())return;let Kt="image analysis";Bt&&Bt.score>=pd&&(P(q,F,Bt.handles),mt&&(u[q].text="Cube outlined by image analysis – asking the AI to double-check…"));let ie=null;if(Ot){if(ie=await Ot,St())return;if(ie.box){const A=await dd(bt,e.n,{box:ie.box,signal:G.signal});if(St())return;A&&(!Bt||A.score>Bt.score+.02)&&(Bt=A,Kt=`${ie.source==="local"?"local model":"Gemini"} ${ie.model} + image analysis`)}}if(Bt&&Bt.score>=pd){P(q,F,Bt.handles),u[q].state="ok",u[q].text=`Cube outlined by ${Kt} (fit ${Math.round(Bt.score*100)}%). The outline is a perspective-correct cube model – fine-tune the handles if needed.`;return}if(ie!=null&&ie.box){const A=cw(bt,ie.box);P(q,F,A?Lm(A):ie.handles),u[q].state="ok",u[q].text="The cube could not be fitted precisely; the outline is only a rough box from the AI – please adjust the handles.";return}u[q].state="bad",u[q].text="Could not find a cube in this photo"+(ie!=null&&ie.error?` (${ie.error})`:"")+" – drag the handles by hand."}catch(lt){if(lt.kind==="abort"||G.signal.aborted)return;u[q].state="bad",u[q].text=`${lt.message} – drag the handles by hand.`}finally{f[q]===G&&(u[q].busy=!1)}}function w(q){const F=Math.min(420/q.width,420/q.height);return{s:F,ox:(420-q.width*F)/2,oy:(420-q.height*F)/2}}function b(q){const F=s[q];if(!F)return;const G=F.getContext("2d");G.clearRect(0,0,420,420),G.fillStyle="#0f1116",G.fillRect(0,0,420,420);const St=r[q];if(St){const{s:lt,ox:bt,oy:mt}=w(St);G.drawImage(St,bt,mt,St.width*lt,St.height*lt)}const Z=o[q];G.lineWidth=2,G.strokeStyle="#ffffff",G.beginPath(),[1,2,3,4,5,6].forEach((lt,bt)=>bt?G.lineTo(Z[lt][0],Z[lt][1]):G.moveTo(Z[lt][0],Z[lt][1])),G.closePath(),G.stroke(),G.beginPath(),[2,4,6].forEach(lt=>{G.moveTo(Z[0][0],Z[0][1]),G.lineTo(Z[lt][0],Z[lt][1])}),G.stroke(),G.fillStyle="#ff2d55";for(const lt of sd(q,Z,e.n))G.beginPath(),G.arc(lt.x,lt.y,3,0,Math.PI*2),G.fill();G.fillStyle="#00e5ff",Z.forEach(([lt,bt])=>{G.beginPath(),G.arc(lt,bt,7,0,Math.PI*2),G.fill()})}const D=(q,F)=>{const G=s[q].getBoundingClientRect();return[(F.clientX-G.left)/G.width*420,(F.clientY-G.top)/G.height*420]};function it(q,F){const[G,St]=D(q,F);let Z=-1,lt=18;o[q].forEach(([bt,mt],Ot)=>{const Bt=Math.hypot(bt-G,mt-St);Bt<lt&&(lt=Bt,Z=Ot)}),Z>=0&&(v.value={i:q,k:Z})}function $(q,F){!v.value||v.value.i!==q||(o[q][v.value.k]=D(q,F),b(q))}const st=()=>v.value=null;function ft(){const q=[];for(let F=0;F<2;F++){const G=document.createElement("canvas");G.width=G.height=420;const St=G.getContext("2d"),{s:Z,ox:lt,oy:bt}=w(r[F]);St.fillStyle="#000",St.fillRect(0,0,420,420),St.drawImage(r[F],lt,bt,r[F].width*Z,r[F].height*Z);const mt=St.getImageData(0,0,420,420),Ot=420*.38/e.n/5;for(const Bt of sd(F,o[F],e.n))q.push({slot:Bt.slot,rgb:k1(mt,Bt.x,Bt.y,Ot),photo:F})}p.value=q,_.value=!1,X()}function X(){const q=q1(e.n,p.value,{whiteBalance:d.value,cutoffs:_.value?[m.value,h.value]:null});g.value=q.hue,q.hue&&!_.value&&(m.value=Math.round(q.hue.auto[0]),h.value=Math.round(q.hue.auto[1]));const F=q.whiteBalance.map((St,Z)=>St==="no-white"?Z+1:0).filter(Boolean),G=[];d.value&&G.push(F.length?`No white tile found in photo ${F.join(" and ")} – colours used as they are there.`:"White balance applied to both photos."),l.value=q.warnings.length>0||F.length>0,a.value=[q.warnings[0]||"Colours imported – check them in the cube net and fix any mistakes.",...G].join(" "),i("import",q.state)}function ct(q){q==="a"?m.value=Math.min(m.value,h.value-1):h.value=Math.max(h.value,m.value+1),_.value=!0,X()}function W(){_.value=!1,X()}Ne(d,q=>{localStorage.setItem("rubiks-solver.whiteBalance",q?"1":"0"),p.value&&X()});function At(){const q=x.value;if(!q||!g.value)return;const F=q.getContext("2d"),[G,St]=zr,Z=q.width,lt=q.height,bt=mt=>(mt-G)/(St-G)*Z;for(let mt=0;mt<Z;mt++){const Ot=G+mt/Z*(St-G);F.fillStyle=`hsl(${(Ot+360)%360} 70% 38%)`,F.fillRect(mt,0,1,lt)}F.font="12px system-ui, sans-serif",F.textAlign="center",F.fillStyle="rgba(255,255,255,0.9)",[["red",G,m.value],["orange",m.value,h.value],["yellow",h.value,St]].forEach(([mt,Ot,Bt])=>{F.fillText(mt,(bt(Ot)+bt(Bt))/2,13)}),g.value.points.forEach((mt,Ot)=>{F.beginPath(),F.arc(bt(mt),26+Ot*7%30,3.2,0,Math.PI*2),F.fillStyle="#fff",F.fill(),F.strokeStyle="rgba(0,0,0,0.6)",F.stroke()}),g.value.anchors.forEach(mt=>{F.beginPath(),F.moveTo(bt(mt),lt-14),F.lineTo(bt(mt)-6,lt-2),F.lineTo(bt(mt)+6,lt-2),F.closePath(),F.fillStyle="#fff",F.fill(),F.stroke()}),F.lineWidth=2,F.strokeStyle="#0b0d12",[m.value,h.value].forEach(mt=>{F.beginPath(),F.moveTo(bt(mt),0),F.lineTo(bt(mt),lt),F.stroke()}),F.lineWidth=1}return Ne([g,m,h],At,{flush:"post"}),(q,F)=>(Mt(),Tt("div",pw,[F[12]||(F[12]=N("p",{class:"hint"},[fe(" Photo 1: look straight at one "),N("b",null,"corner"),fe(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),N("b",null,"opposite corner"),fe(" faces the camera. Drag the 7 handles so the lines follow the cube outline – the dots show where colours are read. ")],-1)),N("div",mw,[(Mt(),Tt(_e,null,ke(2,G=>N("div",{key:G,class:"photo"},[N("label",gw,[N("span",null,Lt(G===1?"Photo 1 – first corner":"Photo 2 – opposite corner"),1),N("input",{type:"file",accept:"image/*",onChange:St=>R(G-1,St)},null,40,_w)]),N("canvas",{ref_for:!0,ref:St=>s[G-1]=St,width:"420",height:"420",onPointerdown:St=>it(G-1,St),onPointermove:St=>$(G-1,St),onPointerup:st,onPointerleave:st},null,40,vw),N("div",xw,[N("button",{type:"button",disabled:!r[G-1]||u[G-1].busy,onClick:St=>I(G-1)},Lt(u[G-1].busy?"Finding the cube…":"✨ Find the cube"),9,yw),u[G-1].text?(Mt(),Tt("span",{key:0,class:Ie(["ai-msg",u[G-1].state])},Lt(u[G-1].text),3)):he("",!0)])])),64))]),N("label",Mw,[We(N("input",{"onUpdate:modelValue":F[0]||(F[0]=G=>c.value=G),type:"checkbox"},null,512),[[Cs,c.value]]),F[6]||(F[6]=N("span",null,[fe(" Outline the cube automatically after upload "),N("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),N("label",Sw,[We(N("input",{"onUpdate:modelValue":F[1]||(F[1]=G=>d.value=G),type:"checkbox"},null,512),[[Cs,d.value]]),F[7]||(F[7]=N("span",null,[fe(" White balance – if a white tile is found in a photo, use it as that photo's white point "),N("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),N("div",bw,[N("button",{class:"primary",disabled:!y.value,onClick:ft},"Read colours",8,Ew),a.value?(Mt(),Tt("span",{key:0,class:Ie(["msg",{warn:l.value}])},Lt(a.value),3)):he("",!0)]),g.value?(Mt(),Tt("div",ww,[N("div",Tw,[F[8]||(F[8]=N("b",null,"Red / orange / yellow cutoffs",-1)),N("button",{type:"button",disabled:!_.value,onClick:W},"Auto",8,Aw)]),N("canvas",{ref_key:"hueCanvas",ref:x,class:"hue-strip",width:"480",height:"76"},null,512),N("label",Cw,[F[9]||(F[9]=N("span",null,"Red | Orange",-1)),We(N("input",{"onUpdate:modelValue":F[2]||(F[2]=G=>m.value=G),type:"range",min:ut(zr)[0],max:ut(zr)[1],step:"1",onInput:F[3]||(F[3]=G=>ct("a"))},null,40,Rw),[[Gn,m.value,void 0,{number:!0}]]),N("output",null,Lt(m.value)+"°",1)]),N("label",Pw,[F[10]||(F[10]=N("span",null,"Orange | Yellow",-1)),We(N("input",{"onUpdate:modelValue":F[4]||(F[4]=G=>h.value=G),type:"range",min:ut(zr)[0],max:ut(zr)[1],step:"1",onInput:F[5]||(F[5]=G=>ct("b"))},null,40,Lw),[[Gn,h.value,void 0,{number:!0}]]),N("output",null,Lt(h.value)+"°",1)]),F[11]||(F[11]=N("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):p.value?(Mt(),Tt("p",Dw," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):he("",!0)]))}},Iw=$n(Uw,[["__scopeId","data-v-ebf0867c"]]),Nw={class:"panel"},Fw={class:"row"},Ow={class:"seg"},Bw={class:"row"},kw={key:0,class:"note"},zw={class:"row"},Hw={class:"row"},Vw={style:{display:"flex","align-items":"center",gap:"8px"}},Gw={key:1,class:"palette"},Ww=["title","onClick"],Xw={class:"photos"},$w={__name:"SetupPanel",setup(n){const t=ee("");function e(s){K.brush=s,K.showAllColorsOnHover=!1}async function i(){t.value=(await Mm()).join(" ")}return(s,r)=>(Mt(),Tt("section",Nw,[r[14]||(r[14]=N("h2",null,"Set up the cube",-1)),N("div",Fw,[r[8]||(r[8]=N("span",{class:"label"},"Size",-1)),N("div",Ow,[N("button",{class:Ie({on:ut(K).n===2}),onClick:r[0]||(r[0]=o=>ut(Jh)(2))},"2×2",2),N("button",{class:Ie({on:ut(K).n===3}),onClick:r[1]||(r[1]=o=>ut(Jh)(3))},"3×3",2)])]),N("div",Bw,[N("button",{onClick:r[2]||(r[2]=(...o)=>ut(Qh)&&ut(Qh)(...o))},"Reset to solved"),N("button",{onClick:i},"Random scramble")]),t.value?(Mt(),Tt("p",kw,[r[9]||(r[9]=fe("Scramble: ",-1)),N("code",null,Lt(t.value),1)])):he("",!0),r[15]||(r[15]=N("h3",null,"Enter your own position",-1)),N("div",zw,[N("button",{class:Ie({primary:ut(K).editing}),onClick:r[3]||(r[3]=o=>ut(K).editing=!ut(K).editing)},Lt(ut(K).editing?"Done painting":"Paint stickers"),3),r[10]||(r[10]=N("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),N("div",Hw,[N("label",Vw,[We(N("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=o=>ut(K).showAllColorsOnHover=o),onChange:r[5]||(r[5]=o=>ut(K).showAllColorsOnHover&&(ut(K).editing=!0))},null,544),[[Cs,ut(K).showAllColorsOnHover]]),r[11]||(r[11]=fe(" Show all colors on hover ",-1)),r[12]||(r[12]=N("span",{class:"note"},"(click a color on the sticker to paint it)",-1))])]),ut(K).editing?(Mt(),Tt("div",Gw,[(Mt(!0),Tt(_e,null,ke(ut(fo),(o,a)=>(Mt(),Tt("span",{key:a,class:Ie(["swatch-box",{on:!ut(K).showAllColorsOnHover&&ut(K).brush===a}])},[N("button",{class:"swatch",style:Ri({background:o}),title:ut(uo)[a],onClick:l=>e(a)},null,12,Ww)],2))),128))])):he("",!0),Ye(D1,{n:ut(K).n,state:ut(en),onPaint:r[6]||(r[6]=o=>ut(K).editing&&ut(cu)(o))},null,8,["n","state"]),N("details",Xw,[r[13]||(r[13]=N("summary",null,"Import from two photos",-1)),Ye(Iw,{n:ut(K).n,onImport:r[7]||(r[7]=o=>ut($u)(o))},null,8,["n"])]),r[16]||(r[16]=N("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works – the bottom-left-back corner is used as the reference. ",-1))]))}},qw={key:0,class:"result wait"},Yw={class:"msg"},Kw={key:0,class:"reply"},jw={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(t,e)=>n.state.busy?(Mt(),Tt("div",qw,"Contacting the service…")):n.state.result?(Mt(),Tt("div",{key:1,class:Ie(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[N("div",Yw,Lt(n.state.result.ok?"✓":"✗")+" "+Lt(n.state.result.message),1),n.state.result.reply?(Mt(),Tt("div",Kw,[e[0]||(e[0]=N("span",null,"Model response",-1)),fe(" "+Lt(n.state.result.reply),1)])):he("",!0)],2)):he("",!0)}},md=$n(jw,[["__scopeId","data-v-bd7ff3bc"]]),Zw={class:"panel"},Jw={class:"field"},Qw={key:0,class:"pill"},tT={class:"field"},eT={class:"key-row"},nT=["type"],iT=["disabled"],sT={class:"field"},rT=["value"],oT={class:"row"},aT=["disabled"],lT={key:0,class:"pill"},cT={class:"field"},uT={class:"field"},fT={class:"row"},hT=["disabled"],dT={__name:"SettingsPanel",setup(n){const t=ee(!1),e=kn({busy:!1,result:null}),i=kn({busy:!1,result:null}),s={gemini:e,local:i};Ne(()=>[be.geminiKey,be.geminiModel],()=>e.result=null),Ne(()=>[be.localUrl,be.localModel],()=>i.result=null);async function r(o,a){const l=s[o];l.busy=!0,l.result=null;try{l.result=await a({...be})}finally{l.busy=!1}}return(o,a)=>(Mt(),Tt("section",Zw,[a[19]||(a[19]=N("h2",null,"Tutor settings",-1)),a[20]||(a[20]=N("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),N("label",Jw,[a[10]||(a[10]=fe(" Active provider ",-1)),We(N("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>ut(be).provider=l)},[...a[9]||(a[9]=[N("option",{value:"builtin"},"Built-in (no AI)",-1),N("option",{value:"gemini"},"Gemini API",-1),N("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[uc,ut(be).provider]])]),N("fieldset",null,[N("legend",null,[a[11]||(a[11]=fe("Gemini ",-1)),ut(be).provider==="gemini"?(Mt(),Tt("span",Qw,"active")):he("",!0)]),N("label",tT,[a[12]||(a[12]=fe(" API key ",-1)),N("span",eT,[We(N("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>ut(be).geminiKey=l),type:t.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,nT),[[j_,ut(be).geminiKey]]),N("button",{type:"button",onClick:a[2]||(a[2]=l=>t.value=!t.value)},Lt(t.value?"Hide":"Show"),1),N("button",{type:"button",disabled:!ut(be).geminiKey,onClick:a[3]||(a[3]=l=>ut(be).geminiKey="")},"Clear",8,iT)])]),N("label",sT,[a[13]||(a[13]=fe(" Model ",-1)),We(N("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>ut(be).geminiModel=l)},[(Mt(!0),Tt(_e,null,ke(ut(qu),l=>(Mt(),Tt("option",{key:l,value:l},Lt(l),9,rT))),128))],512),[[uc,ut(be).geminiModel]])]),N("div",oT,[N("button",{class:"primary",disabled:e.busy,onClick:a[5]||(a[5]=l=>r("gemini",ut(N1)))},Lt(e.busy?"Testing…":"Test Gemini"),9,aT)]),Ye(md,{state:e},null,8,["state"]),a[14]||(a[14]=N("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),N("fieldset",null,[N("legend",null,[a[15]||(a[15]=fe("Local model ",-1)),ut(be).provider==="local"?(Mt(),Tt("span",lT,"active")):he("",!0)]),N("label",cT,[a[16]||(a[16]=fe(" OpenAI-compatible base URL ",-1)),We(N("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>ut(be).localUrl=l),placeholder:"http://localhost:1234/v1"},null,512),[[Gn,ut(be).localUrl]])]),N("label",uT,[a[17]||(a[17]=fe(" Model name ",-1)),We(N("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>ut(be).localModel=l),placeholder:"google/gemma-4-e4b"},null,512),[[Gn,ut(be).localModel]])]),N("div",fT,[N("button",{class:"primary",disabled:i.busy,onClick:a[8]||(a[8]=l=>r("local",ut(F1)))},Lt(i.busy?"Testing…":"Test local model"),9,hT)]),Ye(md,{state:i},null,8,["state"]),a[18]||(a[18]=N("p",{class:"note"},[fe(" LM Studio: Developer → Server Settings → turn on "),N("b",null,"Enable CORS"),fe(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),N("code",null,"OLLAMA_ORIGINS=*"),fe(". ")],-1))]),a[21]||(a[21]=N("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]))}},pT=$n(dT,[["__scopeId","data-v-b50ceee9"]]),mT={class:"tutor"},gT={class:"tutor-head"},_T={class:"pill"},vT={key:0,class:"status bad"},xT={class:"ask"},yT=["disabled"],MT=["disabled","title"],ST=["disabled"],bT={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const t=n,e=ee(""),i=ee(!1),s=ee(""),r=ee(""),o=ee(!1),a=Be(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[be.provider]),l=Be(()=>o.value&&r.value?r.value:wm(t.context));Ne(()=>[t.context.stageTitle,t.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function c(u){i.value=!0,s.value="";try{const f=await B1({...be},{...t.context,question:u||""});r.value=f.text,o.value=f.ai,e.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(u,f)=>(Mt(),Tt("div",mT,[N("div",gT,[f[5]||(f[5]=N("h3",null,"Tutor",-1)),N("span",_T,Lt(a.value),1),N("button",{class:"link",onClick:f[0]||(f[0]=d=>ut(K).mode="settings")},"Settings")]),N("p",{class:Ie(["answer",{ai:o.value}])},Lt(l.value),3),s.value?(Mt(),Tt("p",vT,Lt(s.value),1)):he("",!0),N("div",xT,[We(N("input",{"onUpdate:modelValue":f[1]||(f[1]=d=>e.value=d),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=fc(d=>c(e.value),["enter"]))},null,40,yT),[[Gn,e.value]]),N("button",{disabled:i.value||ut(be).provider==="builtin",title:ut(be).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=d=>c(e.value))},Lt(i.value?"…":"Ask"),9,MT),N("button",{disabled:i.value||ut(be).provider==="builtin",onClick:f[4]||(f[4]=d=>c(""))},"Explain",8,ST)])]))}},ET=$n(bT,[["__scopeId","data-v-a9c39dbe"]]),wT={class:"panel"},TT={class:"row"},AT=["disabled"],CT={key:0,class:"status ok"},RT={key:0,class:"status bad"},PT={key:1,class:"status bad"},LT={class:"note"},DT={class:"player"},UT=["disabled"],IT=["disabled"],NT=["title","disabled"],FT=["disabled"],OT=["disabled"],BT={class:"speed"},kT={class:"drama",title:"While playing, the camera slowly swirls around the cube"},zT={class:"drama-speed",title:"Rotation speed while Extra drama is enabled"},HT={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},VT={class:"fullscreen-mode"},GT={class:"bar"},WT={key:0,class:"now"},XT={class:"now-stage"},$T={class:"moves"},qT={key:1,class:"status ok"},YT={class:"stages"},KT={class:"stage-title"},jT={class:"goal"},ZT={key:0,class:"steps"},JT={class:"step-label"},QT={__name:"SolvePanel",setup(n){const t=ee(!1),e=ee(!1);go(()=>{function h(x){var y;const v=(y=x.target)==null?void 0:y.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||x.ctrlKey||x.metaKey||x.altKey||K.mode==="solve"&&(x.code==="Space"?(x.preventDefault(),kr()):x.key==="Enter"&&(x.preventDefault(),g()))}window.addEventListener("keydown",h),pr(()=>window.removeEventListener("keydown",h))}),Ne(e,h=>K.playing=h,{immediate:!0}),Ne(()=>K.drama,h=>localStorage.setItem("rubiks-solver.drama",h?"1":"0")),Ne(()=>K.finale,h=>{localStorage.setItem("rubiks-solver.finale",h?"1":"0"),h||ho()});const i=Be(()=>K.solution),s=Be(()=>{var h;return((h=i.value)==null?void 0:h.moves.length)??0}),r=Be(()=>K.pointer>=s.value),o=Be(()=>K.busy||K.pointer===0),a=h=>ou(K.n,h),l=Be(()=>{if(!i.value||r.value)return null;const h=Ia()[K.pointer],x=i.value.stages[h.stage],v=x.steps[h.step];return{stageIdx:h.stage,stage:x,step:v,stepIdx:h.step}}),c=Be(()=>l.value?Ia()[K.pointer].index:0),u=Be(()=>l.value?a(l.value.stage.id).title:""),f=Be(()=>{var v,y,R;const h=((v=l.value)==null?void 0:v.stage)??i.value.stages[i.value.stages.length-1],x=a(h.id);return{n:K.n,stageTitle:x.title,goal:x.goal,concept:x.concept,stepLabel:((y=l.value)==null?void 0:y.step.label)??"",moves:((R=l.value)==null?void 0:R.step.moves)??[]}});async function d(){t.value=!0,await RE(),t.value=!1}async function p(){for(e.value=!0;e.value&&K.pointer<s.value;)await kr();const h=e.value&&K.pointer>=s.value&&Ua.value;e.value=!1,h&&K.finale&&CE()}function g(){e.value?e.value=!1:p()}async function _(){const h=K.speed;for(K.speed=10;K.pointer<s.value;)await kr();K.speed=h}async function m(){e.value=!1;const h=K.speed;for(K.speed=10;K.pointer>0;)await Kl();K.speed=h}return pr(()=>{e.value=!1,K.playing=!1,ho()}),(h,x)=>(Mt(),Tt("section",wT,[x[16]||(x[16]=N("h2",null,"Solve it step by step",-1)),N("div",TT,[N("button",{class:"primary",disabled:!ut(dr).ok||t.value||ut(K).editing,onClick:d},Lt(t.value?"Solving…":"Find solution"),9,AT),ut(Ua)&&!i.value?(Mt(),Tt("span",CT,"Already solved!")):he("",!0)]),ut(dr).ok?he("",!0):(Mt(),Tt("ul",RT,[(Mt(!0),Tt(_e,null,ke(ut(dr).errors,v=>(Mt(),Tt("li",{key:v},Lt(v),1))),128))])),ut(K).solveError?(Mt(),Tt("p",PT,Lt(ut(K).solveError),1)):he("",!0),i.value?(Mt(),Tt(_e,{key:2},[N("p",LT,Lt(i.value.moves.length)+" moves in "+Lt(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),N("div",DT,[N("button",{title:"Back to start",disabled:o.value,onClick:m},"⏮",8,UT),N("button",{title:"Previous move",disabled:o.value,onClick:x[0]||(x[0]=(...v)=>ut(Kl)&&ut(Kl)(...v))},"◀",8,IT),N("button",{class:"primary",title:e.value?"Pause":"Play",disabled:r.value&&!e.value,onClick:g},Lt(e.value?"⏸":"▶"),9,NT),N("button",{title:"Next move",disabled:r.value||ut(K).busy,onClick:x[1]||(x[1]=(...v)=>ut(kr)&&ut(kr)(...v))},"▶|",8,FT),N("button",{title:"Jump to end",disabled:r.value||ut(K).busy,onClick:_},"⏭",8,OT),N("label",BT,[x[7]||(x[7]=fe(" Speed ",-1)),We(N("input",{"onUpdate:modelValue":x[2]||(x[2]=v=>ut(K).speed=v),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[Gn,ut(K).speed,void 0,{number:!0}]])])]),N("label",kT,[We(N("input",{"onUpdate:modelValue":x[3]||(x[3]=v=>ut(K).drama=v),type:"checkbox"},null,512),[[Cs,ut(K).drama]]),x[8]||(x[8]=fe(" Extra drama ",-1)),x[9]||(x[9]=N("small",null,"– slow, smooth camera rotation during playback",-1))]),N("label",zT,[x[10]||(x[10]=fe(" Rotation speed ",-1)),We(N("input",{"onUpdate:modelValue":x[4]||(x[4]=v=>ut(K).dramaSpeed=v),type:"range",min:"0.05",max:"1.2",step:"0.01"},null,512),[[Gn,ut(K).dramaSpeed,void 0,{number:!0}]])]),N("label",HT,[We(N("input",{"onUpdate:modelValue":x[5]||(x[5]=v=>ut(K).finale=v),type:"checkbox"},null,512),[[Cs,ut(K).finale]]),x[11]||(x[11]=fe(" Extra, extra drama ",-1)),x[12]||(x[12]=N("small",null,"– 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),N("label",VT,[We(N("input",{"onUpdate:modelValue":x[6]||(x[6]=v=>ut(K).fullscreenOnPlay=v),type:"checkbox"},null,512),[[Cs,ut(K).fullscreenOnPlay]]),x[13]||(x[13]=fe(" Fullscreen mode ",-1)),x[14]||(x[14]=N("small",null,"When enabled, hitting Play makes the cube go fullscreen",-1))]),N("div",GT,[N("div",{style:Ri({width:`${ut(K).pointer/Math.max(1,s.value)*100}%`})},null,4)]),l.value?(Mt(),Tt("div",WT,[N("div",XT,[fe(Lt(u.value)+" ",1),N("small",null,"– "+Lt(l.value.step.label),1)]),N("div",$T,[(Mt(!0),Tt(_e,null,ke(l.value.step.moves,(v,y)=>(Mt(),Tt("span",{key:y,class:Ie(["move",{done:c.value>y,active:c.value===y}])},Lt(v),3))),128))])])):r.value?(Mt(),Tt("p",qT,"Finished – the cube is solved.")):he("",!0),Ye(ET,{context:f.value},null,8,["context"]),x[15]||(x[15]=N("h3",null,"All stages",-1)),N("ol",YT,[(Mt(!0),Tt(_e,null,ke(i.value.stages,(v,y)=>(Mt(),Tt("li",{key:v.id,class:Ie({active:l.value&&l.value.stageIdx===y})},[N("div",KT,[fe(Lt(a(v.id).title)+" ",1),N("small",null,Lt(v.moves.length?`${v.moves.length} moves`:"already done"),1)]),N("div",jT,Lt(a(v.id).goal),1),v.steps.length?(Mt(),Tt("ul",ZT,[(Mt(!0),Tt(_e,null,ke(v.steps,(R,C)=>(Mt(),Tt("li",{key:C},[N("span",JT,Lt(R.label),1),N("code",null,Lt(R.moves.join(" ")),1)]))),128))])):he("",!0)],2))),128))])],64)):he("",!0)]))}},tA=$n(QT,[["__scopeId","data-v-0b0d71c3"]]),eA={class:"app"},nA=["onClick"],iA={class:"stage"},sA={class:"overlay"},rA={key:0,class:"badge"},oA={key:1,class:"badge ok"},aA={key:2,class:"brush-chip",title:"Last assigned colour"},lA={key:0,class:"status ok small"},cA={key:1,class:"status bad small"},uA={__name:"App",setup(n){const t=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"}],e=ee(null),i=ee(null),s=ee(Math.max(300,Math.min(window.innerHeight*.62,640))),r=ee(!1),o=ee(!1),a=ee(!1),l=ee(!1),c=Be(()=>K.mode==="setup"&&K.showAllColorsOnHover);function u(g,_){if(K.editing){if(_===void 0)return cu(g);K.brush=_,cu(g,_)}}function f(g){r.value=!0;const _=g.clientY,m=s.value;function h(v){const y=v.clientY-_,R=Math.max(300,m+y);s.value=R}function x(){r.value=!1,window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",x)}window.addEventListener("pointermove",h),window.addEventListener("pointerup",x)}function d(g){var h;const _=(h=g.target)==null?void 0:h.tagName;if(_==="INPUT"||_==="TEXTAREA"||_==="SELECT"||g.ctrlKey||g.metaKey||g.altKey)return;const m=g.key.toUpperCase();!"UDLRFB".includes(m)||m.length!==1||K.editing||(g.preventDefault(),es(g.shiftKey?`${m}'`:m))}go(()=>{bE((g,_,m)=>e.value.animate(g,_,m)),EE(()=>e.value.explode()),window.addEventListener("keydown",d),document.addEventListener("fullscreenchange",()=>{o.value=!!document.fullscreenElement,o.value||(a.value=!1)})}),pr(()=>window.removeEventListener("keydown",d)),Ne(()=>({playing:K.playing,mode:K.mode}),g=>{var _;g.mode==="solve"&&g.playing&&K.fullscreenOnPlay&&((_=i.value)!=null&&_.requestFullscreen)&&i.value.requestFullscreen().catch(()=>{})},{immediate:!1}),Ne(()=>({ptr:K.pointer,sol:K.solution,exploding:K.exploding,countdown:K.countdown}),g=>{var m;g.sol&&g.ptr>=(((m=g.sol.moves)==null?void 0:m.length)??0)&&!g.exploding&&g.countdown===0&&document.fullscreenElement===i.value&&setTimeout(()=>a.value=!0,2e3)});function p(){document.fullscreenElement&&document.exitFullscreen()}return(g,_)=>(Mt(),Tt("div",eA,[N("header",null,[_[4]||(_[4]=N("h1",null,"🧊 Rubik's Solver",-1)),N("nav",null,[(Mt(),Tt(_e,null,ke(t,m=>N("button",{key:m.id,class:Ie({on:ut(K).mode===m.id}),onClick:h=>ut(K).mode=m.id},Lt(m.label),11,nA)),64))])]),N("main",null,[N("div",iA,[N("div",{class:"viewport",ref_key:"viewport",ref:i,style:Ri({height:s.value+"px"})},[Ye(cE,{ref_key:"cube",ref:e,n:ut(K).n,state:ut(en),paintable:ut(K).editing,locked:ut(K).busy||ut(K).exploding,drama:ut(K).drama&&ut(K).playing,dramaSpeed:ut(K).dramaSpeed,rumble:ut(K).countdown?(4-ut(K).countdown)/3:0,hoverColors:c.value,onPaint:u,onLayerturn:_[0]||(_[0]=m=>ut(es)(m)),onHovering:_[1]||(_[1]=m=>l.value=m)},null,8,["n","state","paintable","locked","drama","dramaSpeed","rumble","hoverColors"]),N("div",sA,[N("button",{title:"Reset camera",onClick:_[2]||(_[2]=m=>{var h;return(h=e.value)==null?void 0:h.resetView()})},"⟲ View"),ut(K).editing?(Mt(),Tt("span",rA,"Painting: click stickers")):ut(Ua)?(Mt(),Tt("span",oA,"Solved ✓")):he("",!0),c.value&&!l.value?(Mt(),Tt("span",aA,[N("i",{style:Ri({background:ut(fo)[ut(K).brush]})},null,4)])):he("",!0),ut(K).mode==="setup"?(Mt(),Tt("div",{key:3,class:Ie(["validity",{ok:ut(dr).ok}])},[ut(dr).ok?(Mt(),Tt("p",lA,"This position is valid and solvable.")):(Mt(),Tt("ul",cA,[(Mt(!0),Tt(_e,null,ke(ut(dr).errors,m=>(Mt(),Tt("li",{key:m},Lt(m),1))),128))]))],2)):he("",!0),o.value&&a.value?(Mt(),Tt("button",{key:4,class:"exit-fullscreen",onClick:_[3]||(_[3]=m=>p())}," Exit Fullscreen mode ")):he("",!0)]),ut(K).countdown?(Mt(),Tt("div",{key:ut(K).countdown,class:"countdown","aria-live":"assertive"},[N("span",null,Lt(ut(K).countdown),1)])):he("",!0),N("div",{class:"resize-handle",onPointerdown:tv(f,["prevent"])},null,32)],4),Ye(XE),Ye(C1),_[5]||(_[5]=N("p",{class:"keys"}," Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise). ",-1))]),N("aside",null,[ut(K).mode==="setup"?(Mt(),ir($w,{key:0})):ut(K).mode==="solve"?(Mt(),ir(tA,{key:1})):ut(K).mode==="learn"?(Mt(),ir(HE,{key:2})):ut(K).mode==="settings"?(Mt(),ir(pT,{key:3})):(Mt(),ir(f1,{key:4}))])])]))}};sv(uA).mount("#app");
