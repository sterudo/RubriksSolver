(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ve={},as=[],qn=()=>{},ud=()=>!1,Ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ta=n=>n.startsWith("onUpdate:"),$e=Object.assign,iu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dm=Object.prototype.hasOwnProperty,ue=(n,t)=>Dm.call(n,t),Xt=Array.isArray,Ni=n=>to(n)==="[object Map]",xi=n=>to(n)==="[object Set]",Zu=n=>to(n)==="[object Date]",Kt=n=>typeof n=="function",Ae=n=>typeof n=="string",jn=n=>typeof n=="symbol",ge=n=>n!==null&&typeof n=="object",fd=n=>(ge(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),hd=Object.prototype.toString,to=n=>hd.call(n),Um=n=>to(n).slice(8,-1),dd=n=>to(n)==="[object Object]",su=n=>Ae(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Im=/-\w/g,Rn=wa(n=>n.replace(Im,t=>t.slice(1).toUpperCase())),Nm=/\B([A-Z])/g,$i=wa(n=>n.replace(Nm,"-$1").toLowerCase()),pd=wa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=wa(n=>n?`on${pd(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Yo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},md=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Aa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ju;const Ca=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ae(i)?km(i):ps(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ae(n)||ge(n))return n}const Fm=/;(?![^(]*\))/g,Om=/:([^]+)/,Bm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function km(n){const t={};return n.replace(Bm,e=>e.startsWith("/*")?"":e).split(Fm).forEach(e=>{if(e){const i=e.split(Om);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ce(n){let t="";if(Ae(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=Ce(n[e]);i&&(t+=i+" ")}else if(ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=nu(zm);function gd(n){return!!n||n===""}function Vm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Un(n[s],t[s],e);return i}function Qu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Un(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Gm(n,t,e){let i=Ni(n),s=Ni(t);if(i||s||(i=xi(n),s=xi(t),i||s))return i&&s?Qu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Un(n[a],t[a],e))return!1}return String(n)===String(t)}function tf(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Un(n,t,e){if(n===t)return!0;let i=Zu(n),s=Zu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=jn(n),s=jn(t),i||s?n===t:(i=Xt(n),s=Xt(t),i||s?i&&s?tf(n,t,e,Vm):!1:(i=ge(n),s=ge(t),i||s?!i||!s?!1:tf(n,t,e,Gm):String(n)===String(t))))}function ru(n,t){return n.findIndex(e=>Un(e,t))}const _d=n=>!!(n&&n.__v_isRef===!0),Ct=n=>Ae(n)?n:n==null?"":Xt(n)||ge(n)&&(n.toString===hd||!Kt(n.toString))?_d(n)?Ct(n.value):JSON.stringify(n,vd,2):String(n),vd=(n,t)=>_d(t)?vd(n,t.value):Ni(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[$a(i,r)+" =>"]=s,e),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>$a(e))}:jn(t)?$a(t):ge(t)&&!Xt(t)&&!dd(t)?String(t):t,$a=(n,t="")=>{var e;return jn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class Wm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Be&&(Be.active?(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Be;try{return Be=this,t()}finally{Be=e}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){if(this._on>0&&--this._on===0){if(Be===this)Be=this.prevScope;else{let t=Be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xm(){return Be}let Me;const qa=new WeakSet;class xd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&(Be.active?Be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ef(this),Sd(this);const t=Me,e=Pn;Me=this,Pn=!0;try{return this.fn()}finally{bd(this),Me=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lu(t);this.deps=this.depsTail=void 0,ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let yd=0,Ur,Ir;function Md(n,t=!1){if(n.flags|=8,t){n.next=Ir,Ir=n;return}n.next=Ur,Ur=n}function ou(){yd++}function au(){if(--yd>0)return;if(Ir){let t=Ir;for(Ir=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ur;){let t=Ur;for(Ur=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Sd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function bd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),lu(i),$m(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Wl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ed(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ed(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr)||(n.globalVersion=Hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Wl(n))))return;n.flags|=2;const t=n.dep,e=Me,i=Pn;Me=n,Pn=!0;try{Sd(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Me=e,Pn=i,bd(n),n.flags&=-3}}function lu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)lu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $m(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const Td=[];function yi(){Td.push(Pn),Pn=!1}function Mi(){const n=Td.pop();Pn=n===void 0?!0:n}function ef(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Me;Me=void 0;try{t()}finally{Me=e}}}let Hr=0;class qm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Me||!Pn||Me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Me)e=this.activeLink=new qm(Me,this),Me.deps?(e.prevDep=Me.depsTail,Me.depsTail.nextDep=e,Me.depsTail=e):Me.deps=Me.depsTail=e,wd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Me.depsTail,e.nextDep=void 0,Me.depsTail.nextDep=e,Me.depsTail=e,Me.deps===e&&(Me.deps=i)}return e}trigger(t){this.version++,Hr++,this.notify(t)}notify(t){ou();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{au()}}}function wd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)wd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Xl=new WeakMap,hs=Symbol(""),$l=Symbol(""),Vr=Symbol("");function Ve(n,t,e){if(Pn&&Me){let i=Xl.get(n);i||Xl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new cu),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const o=Xl.get(n);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(ou(),t==="clear")o.forEach(a);else{const l=Xt(n),c=l&&su(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vr||!jn(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Vr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(hs)),Ni(n)&&a(o.get($l)));break;case"delete":l||(a(o.get(hs)),Ni(n)&&a(o.get($l)));break;case"set":Ni(n)&&a(o.get(hs));break}}au()}function bs(n){const t=ce(n);return t===n||(Ve(t,"iterate",Vr),xn(n))?t:Zn(n)?Fi(n)?t.map(e=>Hi(yn(e))):t.map(Hi):t.map(yn)}function Ra(n){return Ve(n=ce(n),"iterate",Vr),n}function Hn(n,t){return Zn(n)?Hi(Fi(n)?yn(t):t):yn(t)}const Ym={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return bs(this).concat(...n.map(t=>Xt(t)?bs(t):t))},entries(){return Ya(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,t){return ni(this,"every",n,t,void 0,arguments)},filter(n,t){return ni(this,"filter",n,t,e=>e.map(i=>Hn(this,i)),arguments)},find(n,t){return ni(this,"find",n,t,e=>Hn(this,e),arguments)},findIndex(n,t){return ni(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ni(this,"findLast",n,t,e=>Hn(this,e),arguments)},findLastIndex(n,t){return ni(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ni(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return bs(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,t){return ni(this,"map",n,t,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...t){return nf(this,"reduce",n,t)},reduceRight(n,...t){return nf(this,"reduceRight",n,t)},shift(){return _r(this,"shift")},some(n,t){return ni(this,"some",n,t,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return bs(this).toReversed()},toSorted(n){return bs(this).toSorted(n)},toSpliced(...n){return bs(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return Ya(this,"values",n=>Hn(this,n))}};function Ya(n,t,e){const i=Ra(n),s=i[t]();return i!==n&&!xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Km=Array.prototype;function ni(n,t,e,i,s,r){const o=Ra(n),a=o!==n&&!xn(n),l=o[t];if(l!==Km[t]){const f=l.apply(n,r);return a?yn(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Hn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function nf(n,t,e,i){const s=Ra(n),r=s!==n&&!xn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Hn(n,c)),e.call(this,c,Hn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](o,...i);return a?Hn(n,l):l}function Ka(n,t,e){const i=ce(n);Ve(i,"iterate",Vr);const s=i[t](...e);return(s===-1||s===!1)&&hu(e[0])?(e[0]=ce(e[0]),i[t](...e)):s}function _r(n,t,e=[]){yi(),ou();const i=ce(n)[t].apply(n,e);return au(),Mi(),i}const jm=nu("__proto__,__v_isRef,__isVue"),Ad=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function Zm(n){jn(n)||(n=String(n));const t=ce(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class Cd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ag:Dd:r?Ld:Pd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Xt(t);if(!s){let l;if(o&&(l=Ym[e]))return l;if(e==="hasOwnProperty")return Zm}const a=Reflect.get(t,e,We(t)?t:i);if((jn(e)?Ad.has(e):jm(e))||(s||Ve(t,"get",e),r))return a;if(We(a)){const l=o&&su(e)?a:a.value;return s&&ge(l)?Yl(l):l}return ge(a)?s?Yl(a):Ln(a):a}}class Rd extends Cd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Xt(t)&&su(e);if(!this._isShallow){const c=Zn(r);if(!xn(i)&&!Zn(i)&&(r=ce(r),i=ce(i)),!o&&We(r)&&!We(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,i,We(t)?t:s);return t===ce(s)&&l&&(a?Wn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!jn(e)||!Ad.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Xt(t)?"length":hs),Reflect.ownKeys(t)}}class Jm extends Cd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qm=new Rd,tg=new Jm,eg=new Rd(!0);const ql=n=>n,uo=n=>Reflect.getPrototypeOf(n);function ng(n,t,e){return function(...i){const s=this.__v_raw,r=ce(s),o=Ni(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ql:t?Hi:yn;return!t&&Ve(r,"iterate",l?$l:hs),$e(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function fo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ig(n,t){const e={get(s){const r=this.__v_raw,o=ce(r),a=ce(s);n||(Wn(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=uo(o),c=t?ql:n?Hi:yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(ce(s),"iterate",hs),s.size},has(s){const r=this.__v_raw,o=ce(r),a=ce(s);return n||(Wn(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ce(a),c=t?ql:n?Hi:yn;return!n&&Ve(l,"iterate",hs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return $e(e,n?{add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear")}:{add(s){const r=ce(this),o=uo(r),a=ce(s),l=!t&&!xn(s)&&!Zn(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!xn(r)&&!Zn(r)&&(r=ce(r));const o=ce(this),{has:a,get:l}=uo(o);let c=a.call(o,s);c||(s=ce(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ce(this),{has:o,get:a}=uo(r);let l=o.call(r,s);l||(s=ce(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ce(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ng(s,n,t)}),e}function uu(n,t){const e=ig(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ue(e,s)&&s in i?e:i,s,r)}const sg={get:uu(!1,!1)},rg={get:uu(!1,!0)},og={get:uu(!0,!1)};const Pd=new WeakMap,Ld=new WeakMap,Dd=new WeakMap,ag=new WeakMap;function lg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ln(n){return Zn(n)?n:fu(n,!1,Qm,sg,Pd)}function cg(n){return fu(n,!1,eg,rg,Ld)}function Yl(n){return fu(n,!0,tg,og,Dd)}function fu(n,t,e,i,s){if(!ge(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=lg(Um(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Fi(n){return Zn(n)?Fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zn(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function hu(n){return n?!!n.__v_raw:!1}function ce(n){const t=n&&n.__v_raw;return t?ce(t):n}function ug(n){return!ue(n,"__v_skip")&&Object.isExtensible(n)&&md(n,"__v_skip",!0),n}const yn=n=>ge(n)?Ln(n):n,Hi=n=>ge(n)?Yl(n):n;function We(n){return n?n.__v_isRef===!0:!1}function te(n){return Ud(n,!1)}function fg(n){return Ud(n,!0)}function Ud(n,t){return We(n)?n:new hg(n,t)}class hg{constructor(t,e){this.dep=new cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ce(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||xn(t)||Zn(t);t=i?t:ce(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function dt(n){return We(n)?n.value:n}const dg={get:(n,t,e)=>t==="__v_raw"?n:dt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return We(s)&&!We(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Id(n){return Fi(n)?n:new Proxy(n,dg)}class pg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Md(this,!0),!0}get value(){const t=this.dep.track();return Ed(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function mg(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new pg(i,s,e)}const ho={},la=new WeakMap;let ns;function gg(n,t=!1,e=ns){if(e){let i=la.get(e);i||la.set(e,i=[]),i.push(n)}}function _g(n,t,e=ve){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:xn(x)||s===!1||s===0?hi(x,1):hi(x);let u,f,h,p,g=!1,_=!1;if(We(n)?(f=()=>n.value,g=xn(n)):Fi(n)?(f=()=>c(n),g=!0):Xt(n)?(_=!0,g=n.some(x=>Fi(x)||xn(x)),f=()=>n.map(x=>{if(We(x))return x.value;if(Fi(x))return c(x);if(Kt(x))return l?l(x,2):x()})):Kt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){yi();try{h()}finally{Mi()}}const x=ns;ns=u;try{return l?l(n,3,[p]):n(p)}finally{ns=x}}:f=qn,t&&s){const x=f,P=s===!0?1/0:s;f=()=>hi(x(),P)}const m=Xm(),d=()=>{u.stop(),m&&m.active&&iu(m.effects,u)};if(r&&t){const x=t;t=(...P)=>{const R=x(...P);return d(),R}}let y=_?new Array(n.length).fill(ho):ho;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const P=u.run();if(x||s||g||(_?P.some((R,L)=>Wn(R,y[L])):Wn(P,y))){h&&h();const R=ns;ns=u;try{const L=[P,y===ho?void 0:_&&y[0]===ho?[]:y,p];y=P,l?l(t,3,L):t(...L)}finally{ns=R}}}else u.run()};return a&&a(v),u=new xd(f),u.scheduler=o?()=>o(v,!1):v,p=x=>gg(x,!1,u),h=u.onStop=()=>{const x=la.get(u);if(x){if(l)l(x,4);else for(const P of x)P();la.delete(u)}},t?i?v(!0):y=u.run():o?o(v.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function hi(n,t=1/0,e){if(t<=0||!ge(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,We(n))hi(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)hi(n[i],t,e);else if(xi(n)||Ni(n))n.forEach(i=>{hi(i,t,e)});else if(dd(n)){for(const i in n)hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(n,t,e,i){try{return i?n(...i):n()}catch(s){Pa(s,t,e)}}function In(n,t,e,i){if(Kt(n)){const s=eo(n,t,e,i);return s&&fd(s)&&s.catch(r=>{Pa(r,t,e)}),s}if(Xt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(In(n[r],t,e,i));return s}}function Pa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ve;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){yi(),eo(r,null,10,[n,l,c]),Mi();return}}vg(n,e,s,i,o)}function vg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ze=[];let zn=-1;const js=[];let Ui=null,Ws=0;const Nd=Promise.resolve();let ca=null;function du(n){const t=ca||Nd;return n?t.then(this?n.bind(this):n):t}function xg(n){let t=zn+1,e=Ze.length;for(;t<e;){const i=t+e>>>1,s=Ze[i],r=Gr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function pu(n){if(!(n.flags&1)){const t=Gr(n),e=Ze[Ze.length-1];!e||!(n.flags&2)&&t>=Gr(e)?Ze.push(n):Ze.splice(xg(t),0,n),n.flags|=1,Fd()}}function Fd(){ca||(ca=Nd.then(Bd))}function yg(n){if(!Xt(n))Ui&&n.id===-1?Ui.splice(Ws+1,0,n):n.flags&1||(js.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)js.push(n[t]);Fd()}function sf(n,t,e=zn+1){for(;e<Ze.length;e++){const i=Ze[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ze.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Od(n){if(js.length){const t=[...new Set(js)].sort((e,i)=>Gr(e)-Gr(i));if(js.length=0,Ui){for(let e=0;e<t.length;e++)Ui.push(t[e]);return}for(Ui=t,Ws=0;Ws<Ui.length;Ws++){const e=Ui[Ws];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ui=null,Ws=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bd(n){try{for(zn=0;zn<Ze.length;zn++){const t=Ze[zn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),eo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;zn<Ze.length;zn++){const t=Ze[zn];t&&(t.flags&=-2)}zn=-1,Ze.length=0,Od(),ca=null,(Ze.length||js.length)&&Bd()}}let vn=null,kd=null;function ua(n){const t=vn;return vn=n,kd=n&&n.type.__scopeId||null,t}function Mg(n,t=vn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&mf(-1);const r=ua(t),o=ds.length;let a;try{a=n(...s)}finally{for(let l=ds.length;l>o;l--)cp();ua(r),i._d&&mf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Je(n,t){if(vn===null)return n;const e=Fa(vn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ve]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),In(l,e,8,[n.el,a,n,t]),Mi())}}function Sg(n,t){if(Qe){let e=Qe.provides;const i=Qe.parent&&Qe.parent.provides;i===e&&(e=Qe.provides=Object.create(i)),e[n]=t}}function Ko(n,t,e=!1){const i=__();if(i||Zs){let s=Zs?Zs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}const bg=Symbol.for("v-scx"),Eg=()=>Ko(bg);function Ne(n,t,e){return zd(n,t,e)}function zd(n,t,e=ve){const{immediate:i,deep:s,flush:r,once:o}=e,a=$e({},e),l=t&&i||!t&&r!=="post";let c;if($r){if(r==="sync"){const p=Eg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=qn,p.resume=qn,p.pause=qn,p}}const u=Qe;a.call=(p,g,_)=>In(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{nn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():pu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=_g(n,t,a);return $r&&(c?c.push(h):l&&h()),h}function Tg(n,t,e){const i=this.proxy,s=Ae(n)?n.includes(".")?Hd(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=io(this),a=zd(s,r.bind(i),e);return o(),a}function Hd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const wg=Symbol("_vte"),La=n=>n.__isTeleport,ja=Symbol("_leaveCb");function Ag(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Si){t=e;break}}return t}function Vd(n){if(!gu(n))return La(n.type)&&n.children?Ag(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function mu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;mu(La(e.type)&&Vd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rf(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const fa=new WeakMap;function Nr(n,t,e,i,s=!1){if(Xt(n)){n.forEach((_,m)=>Nr(_,t&&(Xt(t)?t[m]:t),e,i,s));return}if(Fr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Nr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Fa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ve?a.refs={}:a.refs,f=a.setupState,h=ce(f),p=f===ve?ud:_=>rf(u,_)?!1:ue(h,_),g=(_,m)=>!(m&&rf(u,m));if(c!=null&&c!==l){if(of(t),Ae(c))u[c]=null,p(c)&&(f[c]=null);else if(We(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Kt(l))eo(l,a,12,[o,u]);else{const _=Ae(l),m=We(l);if(_||m){const d=()=>{if(n.f){const y=_?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Xt(y)&&iu(y,r);else if(Xt(y))y.includes(r)||y.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{d(),fa.delete(n)};y.id=-1,fa.set(n,y),nn(y,e)}else of(n),d()}}}function of(n){const t=fa.get(n);t&&(t.flags|=8,fa.delete(n))}Ca().requestIdleCallback;Ca().cancelIdleCallback;const Fr=n=>!!n.type.__asyncLoader,gu=n=>n.type.__isKeepAlive;function Cg(n,t){Wd(n,"a",t)}function Rg(n,t){Wd(n,"da",t)}function Wd(n,t,e=Qe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Da(t,i,e),e){let s=e.parent;for(;s&&s.parent;)gu(s.parent.vnode)&&Pg(i,t,e,s),s=s.parent}}function Pg(n,t,e,i){const s=Da(t,n,i,!0);Xd(()=>{iu(i[t],s)},e)}function Da(n,t,e=Qe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{yi();const a=io(e),l=In(t,e,n,o);return a(),Mi(),l});return i?s.unshift(r):s.push(r),r}}const Ei=n=>(t,e=Qe)=>{(!$r||n==="sp")&&Da(n,(...i)=>t(...i),e)},Lg=Ei("bm"),Ua=Ei("m"),Dg=Ei("bu"),Ug=Ei("u"),no=Ei("bum"),Xd=Ei("um"),Ig=Ei("sp"),Ng=Ei("rtg"),Fg=Ei("rtc");function Og(n,t=Qe){Da("ec",n,t)}const Bg=Symbol.for("v-ndc");function Pe(n,t,e,i){let s;const r=e,o=Xt(n);if(o||Ae(n)){const a=o&&Fi(n);let l=!1,c=!1;a&&(l=!xn(n),c=Zn(n),n=Ra(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?Hi(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ge(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Kl=n=>n?dp(n)?Fa(n):Kl(n.parent):null,Or=$e(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Kl(n.parent),$root:n=>Kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qd(n),$forceUpdate:n=>n.f||(n.f=()=>{pu(n.update)}),$nextTick:n=>n.n||(n.n=du.bind(n.proxy)),$watch:n=>Tg.bind(n)}),Za=(n,t)=>n!==ve&&!n.__isScriptSetup&&ue(n,t),kg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Za(i,t))return o[t]=1,i[t];if(s!==ve&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==ve&&ue(e,t))return o[t]=4,e[t];jl&&(o[t]=0)}}const c=Or[t];let u,f;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ve&&ue(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ue(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Za(s,t)?(s[t]=e,!0):i!==ve&&ue(i,t)?(i[t]=e,!0):ue(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ve&&a[0]!=="$"&&ue(n,a)||Za(t,a)||ue(r,a)||ue(i,a)||ue(Or,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ue(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function af(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let jl=!0;function zg(n){const t=qd(n),e=n.proxy,i=n.ctx;jl=!1,t.beforeCreate&&lf(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:v,unmounted:x,render:P,renderTracked:R,renderTriggered:L,errorCaptured:F,serverPrefetch:w,expose:b,inheritAttrs:I,components:nt,directives:q,filters:it}=t;if(c&&Hg(c,i,null),o)for(const at in o){const X=o[at];Kt(X)&&(i[at]=X.bind(e))}if(s){const at=s.call(e,e);ge(at)&&(n.data=Ln(at))}if(jl=!0,r)for(const at in r){const X=r[at],St=Kt(X)?X.bind(e,e):Kt(X.get)?X.get.bind(e,e):qn,Y=!Kt(X)&&Kt(X.set)?X.set.bind(e):qn,O=Le({get:St,set:Y});Object.defineProperty(i,at,{enumerable:!0,configurable:!0,get:()=>O.value,set:W=>O.value=W})}if(a)for(const at in a)$d(a[at],i,e,at);if(l){const at=Kt(l)?l.call(e):l;Reflect.ownKeys(at).forEach(X=>{Sg(X,at[X])})}u&&lf(u,n,"c");function $(at,X){Xt(X)?X.forEach(St=>at(St.bind(e))):X&&at(X.bind(e))}if($(Lg,f),$(Ua,h),$(Dg,p),$(Ug,g),$(Cg,_),$(Rg,m),$(Og,F),$(Fg,R),$(Ng,L),$(no,y),$(Xd,x),$(Ig,w),Xt(b))if(b.length){const at=n.exposed||(n.exposed={});b.forEach(X=>{Object.defineProperty(at,X,{get:()=>e[X],set:St=>e[X]=St,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===qn&&(n.render=P),I!=null&&(n.inheritAttrs=I),nt&&(n.components=nt),q&&(n.directives=q),w&&Gd(n)}function Hg(n,t,e=qn){Xt(n)&&(n=Zl(n));for(const i in n){const s=n[i];let r;ge(s)?"default"in s?r=Ko(s.from||i,s.default,!0):r=Ko(s.from||i):r=Ko(s),We(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function lf(n,t,e){In(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function $d(n,t,e,i){let s=i.includes(".")?Hd(e,i):()=>e[i];if(Ae(n)){const r=t[n];Kt(r)&&Ne(s,r)}else if(Kt(n))Ne(s,n.bind(e));else if(ge(n))if(Xt(n))n.forEach(r=>$d(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&Ne(s,r,n)}}function qd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ha(l,c,o,!0)),ha(l,t,o)),ge(t)&&r.set(t,l),l}function ha(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ha(n,r,e,!0),s&&s.forEach(o=>ha(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Vg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Vg={data:cf,props:uf,emits:uf,methods:Cr,computed:Cr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Cr,directives:Cr,watch:Wg,provide:cf,inject:Gg};function cf(n,t){return t?n?function(){return $e(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function Gg(n,t){return Cr(Zl(n),Zl(t))}function Zl(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function Cr(n,t){return n?$e(Object.create(null),n,t):t}function uf(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:$e(Object.create(null),af(n),af(t??{})):t}function Wg(n,t){if(!n)return t;if(!t)return n;const e=$e(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function Yd(){return{app:null,config:{isNativeTag:ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function $g(n,t){return function(i,s=null){Kt(i)||(i=$e({},i)),s!=null&&!ge(s)&&(s=null);const r=Yd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:b_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Kt(u.install)?(o.add(u),u.install(c,...f)):Kt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||ke(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Fa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(In(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Zs;Zs=c;try{return u()}finally{Zs=f}}};return c}}let Zs=null;const qg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Rn(t)}Modifiers`]||n[`${$i(t)}Modifiers`];function Yg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ve;let s=e;const r=t.startsWith("update:"),o=r&&qg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ae(u)?u.trim():u)),o.number&&(s=s.map(Aa)));let a,l=i[a=Xa(t)]||i[a=Xa(Rn(t))];!l&&r&&(l=i[a=Xa($i(t))]),l&&In(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,In(c,n,6,s)}}const Kg=new WeakMap;function Kd(n,t,e=!1){const i=e?Kg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=c=>{const u=Kd(c,t,!0);u&&(a=!0,$e(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ge(n)&&i.set(n,null),null):(Xt(r)?r.forEach(l=>o[l]=null):$e(o,r),ge(n)&&i.set(n,o),o)}function Ia(n,t){return!n||!Ea(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ue(n,t[0].toLowerCase()+t.slice(1))||ue(n,$i(t))||ue(n,t))}function ff(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=n,m=ua(n);let d,y;try{if(e.shapeFlag&4){const x=s||i,P=x;d=Vn(c.call(P,x,u,f,p,h,g)),y=a}else{const x=t;d=Vn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=t.props?a:jg(a)}}catch(x){ds.length=0,Pa(x,n,1),d=ke(Si)}let v=d;if(y&&_!==!1){const x=Object.keys(y),{shapeFlag:P}=v;x.length&&P&7&&(r&&x.some(Ta)&&(y=Zg(y,r)),v=nr(v,y,!1,!0))}if(e.dirs&&(v=nr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const x=La(v.type)&&Vd(v)||v;mu(x,e.transition)}return d=v,ua(m),d}const jg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ea(e))&&((t||(t={}))[e]=n[e]);return t},Zg=(n,t)=>{const e={};for(const i in n)(!Ta(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Jg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?hf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(jd(o,i,h)&&!Ia(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hf(i,o,c):!0:!!o;return!1}function hf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(jd(t,n,r)&&!Ia(e,r))return!0}return!1}function jd(n,t,e){const i=n[e],s=t[e];return e==="style"&&ge(i)&&ge(s)?!Un(i,s):i!==s}function Qg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Zd={},Jd=()=>Object.create(Zd),Qd=n=>Object.getPrototypeOf(n)===Zd;function t_(n,t,e,i=!1){const s={},r=Jd();n.propsDefaults=Object.create(null),tp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function e_(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ce(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ia(n.emitsOptions,h))continue;const p=t[h];if(l)if(ue(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=Rn(h);s[g]=Jl(l,a,g,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{tp(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!ue(t,f)&&((u=$i(f))===f||!ue(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Jl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!ue(t,f))&&(delete r[f],c=!0)}c&&fi(n.attrs,"set","")}function tp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Dr(l))continue;const c=t[l];let u;s&&ue(s,u=Rn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ia(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ce(e),c=a||ve;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Jl(s,l,f,c[f],n,!ue(c,f))}}return o}function Jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ue(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=io(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===$i(e))&&(i=!0))}return i}const n_=new WeakMap;function ep(n,t,e=!1){const i=e?n_:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const u=f=>{l=!0;const[h,p]=ep(f,t,!0);$e(o,h),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ge(n)&&i.set(n,as),as;if(Xt(r))for(let u=0;u<r.length;u++){const f=Rn(r[u]);df(f)&&(o[f]=ve)}else if(r)for(const u in r){const f=Rn(u);if(df(f)){const h=r[u],p=o[f]=Xt(h)||Kt(h)?{type:h}:$e({},h),g=p.type;let _=!1,m=!0;if(Xt(g))for(let d=0;d<g.length;++d){const y=g[d],v=Kt(y)&&y.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Kt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||ue(p,"default"))&&a.push(f)}}const c=[o,a];return ge(n)&&i.set(n,c),c}function df(n){return n[0]!=="$"&&!Dr(n)}const _u=n=>n==="_"||n==="_ctx"||n==="$stable",vu=n=>Xt(n)?n.map(Vn):[Vn(n)],i_=(n,t,e)=>{if(t._n)return t;const i=Mg((...s)=>vu(t(...s)),e);return i._c=!1,i},np=(n,t,e)=>{const i=n._ctx;for(const s in n){if(_u(s))continue;const r=n[s];if(Kt(r))t[s]=i_(s,r,i);else if(r!=null){const o=vu(r);t[s]=()=>o}}},ip=(n,t)=>{const e=vu(t);n.slots.default=()=>e},sp=(n,t,e)=>{for(const i in t)(e||!_u(i))&&(n[i]=t[i])},s_=(n,t,e)=>{const i=n.slots=Jd();if(n.vnode.shapeFlag&32){const s=t._;s?(sp(i,t,e),e&&md(i,"_",s,!0)):np(t,i)}else t&&ip(n,t)},r_=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ve;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:sp(s,t,e):(r=!t.$stable,np(t,s)),o=t}else t&&(ip(n,t),o={default:1});if(r)for(const a in s)!_u(a)&&o[a]==null&&delete s[a]},nn=u_;function o_(n){return a_(n)}function a_(n,t){const e=Ca();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=qn,insertStaticContent:g}=n,_=(C,N,A,ht=null,j=null,tt=null,st=void 0,gt=null,et=!!N.dynamicChildren)=>{if(C===N)return;C&&!vr(C,N)&&(ht=mt(C),W(C,j,tt,!0),C=null),N.patchFlag===-2&&(et=!1,N.dynamicChildren=null),N.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(N.dynamicChildren===as&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:S,ref:M,shapeFlag:E}=N;switch(S){case Na:m(C,N,A,ht);break;case Si:d(C,N,A,ht);break;case Qa:C==null&&y(N,A,ht,st);break;case fe:nt(C,N,A,ht,j,tt,st,gt,et);break;default:E&1?P(C,N,A,ht,j,tt,st,gt,et):E&6?q(C,N,A,ht,j,tt,st,gt,et):(E&64||E&128)&&S.process(C,N,A,ht,j,tt,st,gt,et,$t)}M!=null&&j?Nr(M,C&&C.ref,tt,N||C,!N):M==null&&C&&C.ref!=null&&Nr(C.ref,null,tt,C,!0)},m=(C,N,A,ht)=>{if(C==null)i(N.el=a(N.children),A,ht);else{const j=N.el=C.el;N.children!==C.children&&c(j,N.children)}},d=(C,N,A,ht)=>{C==null?i(N.el=l(N.children||""),A,ht):N.el=C.el},y=(C,N,A,ht)=>{[C.el,C.anchor]=g(C.children,N,A,ht,C.el,C.anchor)},v=({el:C,anchor:N},A,ht)=>{let j;for(;C&&C!==N;)j=h(C),i(C,A,ht),C=j;i(N,A,ht)},x=({el:C,anchor:N})=>{let A;for(;C&&C!==N;)A=h(C),s(C),C=A;s(N)},P=(C,N,A,ht,j,tt,st,gt,et)=>{if(N.type==="svg"?st="svg":N.type==="math"&&(st="mathml"),C==null)R(N,A,ht,j,tt,st,gt,et);else{const S=C.el&&C.el._isVueCE?C.el:null;try{S&&S._beginPatch(),w(C,N,j,tt,st,gt,et)}finally{S&&S._endPatch()}}},R=(C,N,A,ht,j,tt,st,gt)=>{let et,S;const{props:M,shapeFlag:E,transition:D,dirs:U}=C;if(et=C.el=o(C.type,tt,M&&M.is,M),E&8?u(et,C.children):E&16&&F(C.children,et,null,ht,j,Ja(C,tt),st,gt),U&&qi(C,null,ht,"created"),L(et,C,C.scopeId,st,ht),M){for(const _t in M)_t!=="value"&&!Dr(_t)&&r(et,_t,null,M[_t],tt,ht);"value"in M&&r(et,"value",null,M.value,tt),(S=M.onVnodeBeforeMount)&&kn(S,ht,C)}U&&qi(C,null,ht,"beforeMount");const z=l_(j,D);z&&D.beforeEnter(et),i(et,N,A),((S=M&&M.onVnodeMounted)||z||U)&&nn(()=>{try{S&&kn(S,ht,C),z&&D.enter(et),U&&qi(C,null,ht,"mounted")}finally{}},j)},L=(C,N,A,ht,j)=>{if(A&&p(C,A),ht)for(let tt=0;tt<ht.length;tt++)p(C,ht[tt]);if(j){let tt=j.subTree;if(N===tt||lp(tt.type)&&(tt.ssContent===N||tt.ssFallback===N)){const st=j.vnode;L(C,st,st.scopeId,st.slotScopeIds,j.parent)}}},F=(C,N,A,ht,j,tt,st,gt,et=0)=>{for(let S=et;S<C.length;S++){const M=C[S]=gt?ui(C[S]):Vn(C[S]);_(null,M,N,A,ht,j,tt,st,gt)}},w=(C,N,A,ht,j,tt,st)=>{const gt=N.el=C.el;let{patchFlag:et,dynamicChildren:S,dirs:M}=N;et|=C.patchFlag&16;const E=C.props||ve,D=N.props||ve;let U;if(A&&Yi(A,!1),(U=D.onVnodeBeforeUpdate)&&kn(U,A,N,C),M&&qi(N,C,A,"beforeUpdate"),A&&Yi(A,!0),S&&(!C.dynamicChildren||C.dynamicChildren.length!==S.length)&&(et=0,st=!1,S=null),(E.innerHTML&&D.innerHTML==null||E.textContent&&D.textContent==null)&&u(gt,""),S?b(C.dynamicChildren,S,gt,A,ht,Ja(N,j),tt):st||X(C,N,gt,null,A,ht,Ja(N,j),tt,!1),et>0){if(et&16)I(gt,E,D,A,j);else if(et&2&&E.class!==D.class&&r(gt,"class",null,D.class,j),et&4&&r(gt,"style",E.style,D.style,j),et&8){const z=N.dynamicProps;for(let _t=0;_t<z.length;_t++){const lt=z[_t],ct=E[lt],Nt=D[lt];(Nt!==ct||lt==="value")&&r(gt,lt,ct,Nt,j,A)}}et&1&&C.children!==N.children&&u(gt,N.children)}else!st&&S==null&&I(gt,E,D,A,j);((U=D.onVnodeUpdated)||M)&&nn(()=>{U&&kn(U,A,N,C),M&&qi(N,C,A,"updated")},ht)},b=(C,N,A,ht,j,tt,st)=>{for(let gt=0;gt<N.length;gt++){const et=C[gt],S=N[gt],M=et.el&&(et.type===fe||!vr(et,S)||et.shapeFlag&198)?f(et.el):A;_(et,S,M,null,ht,j,tt,st,!0)}},I=(C,N,A,ht,j)=>{if(N!==A){if(N!==ve)for(const tt in N)!Dr(tt)&&!(tt in A)&&r(C,tt,N[tt],null,j,ht);for(const tt in A){if(Dr(tt))continue;const st=A[tt],gt=N[tt];st!==gt&&tt!=="value"&&r(C,tt,gt,st,j,ht)}"value"in A&&r(C,"value",N.value,A.value,j)}},nt=(C,N,A,ht,j,tt,st,gt,et)=>{const S=N.el=C?C.el:a(""),M=N.anchor=C?C.anchor:a("");let{patchFlag:E,dynamicChildren:D,slotScopeIds:U}=N;U&&(gt=gt?gt.concat(U):U),C==null?(i(S,A,ht),i(M,A,ht),F(N.children||[],A,M,j,tt,st,gt,et)):E>0&&E&64&&D&&C.dynamicChildren&&C.dynamicChildren.length===D.length?(b(C.dynamicChildren,D,A,j,tt,st,gt),(N.key!=null||j&&N===j.subTree)&&rp(C,N,!0)):X(C,N,A,M,j,tt,st,gt,et)},q=(C,N,A,ht,j,tt,st,gt,et)=>{N.slotScopeIds=gt,C==null?N.shapeFlag&512?j.ctx.activate(N,A,ht,st,et):it(N,A,ht,j,tt,st,et):ft(C,N,et)},it=(C,N,A,ht,j,tt,st)=>{const gt=C.component=g_(C,ht,j);if(gu(C)&&(gt.ctx.renderer=$t),v_(gt,!1,st),gt.asyncDep){if(j&&j.registerDep(gt,$,st),!C.el){const et=gt.subTree=ke(Si);d(null,et,N,A),C.placeholder=et.el}}else $(gt,C,N,A,j,tt,st)},ft=(C,N,A)=>{const ht=N.component=C.component;if(Jg(C,N,A))if(ht.asyncDep&&!ht.asyncResolved){N.el=C.el,at(ht,N,A);return}else ht.next=N,ht.update();else N.el=C.el,ht.vnode=N},$=(C,N,A,ht,j,tt,st)=>{const gt=()=>{if(C.isMounted){let{next:E,bu:D,u:U,parent:z,vnode:_t}=C;{const Mt=op(C);if(Mt){E&&(E.el=_t.el,at(C,E,st)),Mt.asyncDep.then(()=>{nn(()=>{C.isUnmounted||S()},j)});return}}let lt=E,ct;Yi(C,!1),E?(E.el=_t.el,at(C,E,st)):E=_t,D&&Yo(D),(ct=E.props&&E.props.onVnodeBeforeUpdate)&&kn(ct,z,E,_t),Yi(C,!0);const Nt=ff(C),pt=C.subTree;C.subTree=Nt,_(pt,Nt,f(pt.el),mt(pt),C,j,tt),E.el=Nt.el,lt===null&&Qg(C,Nt.el),U&&nn(U,j),(ct=E.props&&E.props.onVnodeUpdated)&&nn(()=>kn(ct,z,E,_t),j)}else{let E;const{el:D,props:U}=N,{bm:z,m:_t,parent:lt,root:ct,type:Nt}=C,pt=Fr(N);Yi(C,!1),z&&Yo(z),!pt&&(E=U&&U.onVnodeBeforeMount)&&kn(E,lt,N),Yi(C,!0);{ct.ce&&ct.ce._hasShadowRoot()&&ct.ce._injectChildStyle(Nt,C.parent?C.parent.type:void 0);const Mt=C.subTree=ff(C);_(null,Mt,A,ht,C,j,tt),N.el=Mt.el}if(_t&&nn(_t,j),!pt&&(E=U&&U.onVnodeMounted)){const Mt=N;nn(()=>kn(E,lt,Mt),j)}(N.shapeFlag&256||lt&&Fr(lt.vnode)&&lt.vnode.shapeFlag&256)&&C.a&&nn(C.a,j),C.isMounted=!0,N=A=ht=null}};C.scope.on();const et=C.effect=new xd(gt);C.scope.off();const S=C.update=et.run.bind(et),M=C.job=et.runIfDirty.bind(et);M.i=C,M.id=C.uid,et.scheduler=()=>pu(M),Yi(C,!0),S()},at=(C,N,A)=>{N.component=C;const ht=C.vnode.props;C.vnode=N,C.next=null,e_(C,N.props,ht,A),r_(C,N.children,A),yi(),sf(C),Mi()},X=(C,N,A,ht,j,tt,st,gt,et=!1)=>{const S=C&&C.children,M=C?C.shapeFlag:0,E=N.children,{patchFlag:D,shapeFlag:U}=N;if(D>0){if(D&128){Y(S,E,A,ht,j,tt,st,gt,et);return}else if(D&256){St(S,E,A,ht,j,tt,st,gt,et);return}}U&8?(M&16&&yt(S,j,tt),E!==S&&u(A,E)):M&16?U&16?Y(S,E,A,ht,j,tt,st,gt,et):yt(S,j,tt,!0):(M&8&&u(A,""),U&16&&F(E,A,ht,j,tt,st,gt,et))},St=(C,N,A,ht,j,tt,st,gt,et)=>{C=C||as,N=N||as;const S=C.length,M=N.length,E=Math.min(S,M);let D;for(D=0;D<E;D++){const U=N[D]=et?ui(N[D]):Vn(N[D]);_(C[D],U,A,null,j,tt,st,gt,et)}S>M?yt(C,j,tt,!0,!1,E):F(N,A,ht,j,tt,st,gt,et,E)},Y=(C,N,A,ht,j,tt,st,gt,et)=>{let S=0;const M=N.length;let E=C.length-1,D=M-1;for(;S<=E&&S<=D;){const U=C[S],z=N[S]=et?ui(N[S]):Vn(N[S]);if(vr(U,z))_(U,z,A,null,j,tt,st,gt,et);else break;S++}for(;S<=E&&S<=D;){const U=C[E],z=N[D]=et?ui(N[D]):Vn(N[D]);if(vr(U,z))_(U,z,A,null,j,tt,st,gt,et);else break;E--,D--}if(S>E){if(S<=D){const U=D+1,z=U<M?N[U].el:ht;for(;S<=D;)_(null,N[S]=et?ui(N[S]):Vn(N[S]),A,z,j,tt,st,gt,et),S++}}else if(S>D)for(;S<=E;)W(C[S],j,tt,!0),S++;else{const U=S,z=S,_t=new Map;for(S=z;S<=D;S++){const Tt=N[S]=et?ui(N[S]):Vn(N[S]);Tt.key!=null&&_t.set(Tt.key,S)}let lt,ct=0;const Nt=D-z+1;let pt=!1,Mt=0;const Lt=new Array(Nt);for(S=0;S<Nt;S++)Lt[S]=0;for(S=U;S<=E;S++){const Tt=C[S];if(ct>=Nt){W(Tt,j,tt,!0);continue}let qt;if(Tt.key!=null)qt=_t.get(Tt.key);else for(lt=z;lt<=D;lt++)if(Lt[lt-z]===0&&vr(Tt,N[lt])){qt=lt;break}qt===void 0?W(Tt,j,tt,!0):(Lt[qt-z]=S+1,qt>=Mt?Mt=qt:pt=!0,_(Tt,N[qt],A,null,j,tt,st,gt,et),ct++)}const Ot=pt?c_(Lt):as;for(lt=Ot.length-1,S=Nt-1;S>=0;S--){const Tt=z+S,qt=N[Tt],Gt=N[Tt+1],ee=Tt+1<M?Gt.el||ap(Gt):ht;Lt[S]===0?_(null,qt,A,ee,j,tt,st,gt,et):pt&&(lt<0||S!==Ot[lt]?O(qt,A,ee,2):lt--)}}},O=(C,N,A,ht,j=null)=>{const{el:tt,type:st,transition:gt,children:et,shapeFlag:S}=C;if(S&6){O(C.component.subTree,N,A,ht);return}if(S&128){C.suspense.move(N,A,ht);return}if(S&64){st.move(C,N,A,$t);return}if(st===fe){i(tt,N,A);for(let E=0;E<et.length;E++)O(et[E],N,A,ht);i(C.anchor,N,A);return}if(st===Qa){v(C,N,A);return}if(ht!==2&&S&1&&gt)if(ht===0)gt.persisted&&!tt[ja]?i(tt,N,A):(gt.beforeEnter(tt),i(tt,N,A),nn(()=>gt.enter(tt),j));else{const{leave:E,delayLeave:D,afterLeave:U}=gt,z=()=>{C.ctx.isUnmounted?s(tt):i(tt,N,A)},_t=()=>{const lt=tt._isLeaving||!!tt[ja];tt._isLeaving&&tt[ja](!0),gt.persisted&&!lt?z():E(tt,()=>{z(),U&&U()})};D?D(tt,z,_t):_t()}else i(tt,N,A)},W=(C,N,A,ht=!1,j=!1)=>{const{type:tt,props:st,ref:gt,children:et,dynamicChildren:S,shapeFlag:M,patchFlag:E,dirs:D,cacheIndex:U,memo:z}=C;if((E===-2||S&&S.hasOnce)&&(j=!1),gt!=null&&(yi(),Nr(gt,null,A,C,!0),Mi()),U!=null&&(!C.ctx||C.ctx===N)&&(N.renderCache[U]=void 0),M&256){N.ctx.deactivate(C);return}const _t=M&1&&D,lt=!Fr(C);let ct;if(lt&&(ct=st&&st.onVnodeBeforeUnmount)&&kn(ct,N,C),M&6)ot(C.component,A,ht);else{if(M&128){C.suspense.unmount(A,ht);return}_t&&qi(C,null,N,"beforeUnmount"),M&64?C.type.remove(C,N,A,$t,ht):S&&!S.hasOnce&&(tt!==fe||E>0&&E&64)?yt(S,N,A,!1,!0):(tt===fe&&E&384||!j&&M&16)&&yt(et,N,A),ht&&vt(C)}const Nt=z!=null&&U==null;(lt&&(ct=st&&st.onVnodeUnmounted)||_t||Nt)&&nn(()=>{ct&&kn(ct,N,C),_t&&qi(C,null,N,"unmounted"),Nt&&(C.el=null)},A)},vt=C=>{const{type:N,el:A,anchor:ht,transition:j}=C;if(N===fe){K(A,ht);return}if(N===Qa){x(C),j&&!j.persisted&&j.afterLeave&&j.afterLeave();return}const tt=()=>{s(A),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:st,delayLeave:gt}=j,et=()=>st(A,tt);gt?gt(C.el,tt,et):et()}else tt()},K=(C,N)=>{let A;for(;C!==N;)A=h(C),s(C),C=A;s(N)},ot=(C,N,A)=>{const{bum:ht,scope:j,job:tt,subTree:st,um:gt,m:et,a:S}=C;pf(et),pf(S),ht&&Yo(ht),j.stop(),tt?(tt.flags|=8,W(st,C,N,A)):C.vnode.el&&st&&(st.transition=C.vnode.transition,W(st,C,N,A)),gt&&nn(gt,N),nn(()=>{C.isUnmounted=!0},N)},yt=(C,N,A,ht=!1,j=!1,tt=0)=>{for(let st=tt;st<C.length;st++)W(C[st],N,A,ht,j)},mt=C=>{if(C.shapeFlag&6)return mt(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=h(C.anchor||C.el),A=N&&N[wg];return A?h(A):N};let Dt=!1;const It=(C,N,A)=>{let ht;C==null?N._vnode&&(W(N._vnode,null,null,!0),ht=N._vnode.component):_(N._vnode||null,C,N,null,null,null,A),N._vnode=C,Dt||(Dt=!0,sf(ht),Od(),Dt=!1)},$t={p:_,um:W,m:O,r:vt,mt:it,mc:F,pc:X,pbc:b,n:mt,o:n};return{render:It,hydrate:void 0,createApp:$g(It)}}function Ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Yi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function l_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rp(n,t,e=!1){const i=n.children,s=t.children;if(Xt(i)&&Xt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&rp(o,a)),a.type===Na&&(a.patchFlag===-1&&(a=s[r]=ui(a)),a.el=o.el),a.type===Si&&!a.el&&(a.el=o.el)}}function c_(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function op(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:op(t)}function pf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ap(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ap(t.subTree):null}const lp=n=>n.__isSuspense;function u_(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):yg(n)}const fe=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),ds=[];let ln=null;function xt(n=!1){ds.push(ln=n?null:[])}function cp(){ds.pop(),ln=ds[ds.length-1]||null}let Wr=1;function mf(n,t=!1){Wr+=n,n<0&&ln&&t&&(ln.hasOnce=!0)}function up(n){return n.dynamicChildren=Wr>0?ln||as:null,cp(),Wr>0&&ln&&ln.push(n),n}function Et(n,t,e,i,s,r){return up(k(n,t,e,i,s,r,!0))}function Xs(n,t,e,i,s){return up(ke(n,t,e,i,s,!0))}function fp(n){return n?n.__v_isVNode===!0:!1}function vr(n,t){return n.type===t.type&&n.key===t.key}const hp=({key:n})=>n??null,jo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ae(n)||We(n)||Kt(n)?{i:vn,r:n,k:t,f:!!e}:n:null);function k(n,t=null,e=null,i=0,s=null,r=n===fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&hp(t),ref:t&&jo(t),scopeId:kd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return a?(da(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ae(e)?8:16),Wr>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const ke=f_;function f_(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Bg)&&(n=Si),fp(n)){const a=nr(n,t,!0);return e&&da(a,e),Wr>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(S_(n)&&(n=n.__vccOpts),t){t=h_(t);let{class:a,style:l}=t;a&&!Ae(a)&&(t.class=Ce(a)),ge(l)&&(hu(l)&&!Xt(l)&&(l=$e({},l)),t.style=ps(l))}const o=Ae(n)?1:lp(n)?128:La(n)?64:ge(n)?4:Kt(n)?2:0;return k(n,t,e,i,s,o,r,!0)}function h_(n){return n?hu(n)||Qd(n)?$e({},n):n:null}function nr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?d_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&hp(c),ref:t&&t.ref?e&&r?Xt(r)?r.concat(jo(t)):[r,jo(t)]:jo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==fe?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&mu(u,l.clone(u)),u}function me(n=" ",t=0){return ke(Na,null,n,t)}function he(n="",t=!1){return t?(xt(),Xs(Si,null,n)):ke(Si,null,n)}function Vn(n){return n==null||typeof n=="boolean"?ke(Si):Xt(n)?ke(fe,null,n.slice()):fp(n)?ui(n):ke(Na,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function da(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),da(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qd(t)?t._ctx=vn:s===3&&vn&&(vn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Kt(t)){if(i&65){da(n,{default:t});return}t={default:t,_ctx:vn},e=32}else t=String(t),i&64?(e=16,t=[me(t)]):e=8;n.children=t,n.shapeFlag|=e}function d_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ce([t.class,i.class]));else if(s==="style")t.style=ps([t.style,i.style]);else if(Ea(s)){const r=t[s],o=i[s];o&&r!==o&&!(Xt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ta(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function kn(n,t,e,i=null){In(n,t,7,[e,i])}const p_=Yd();let m_=0;function g_(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||p_,r={uid:m_++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(i,s),emitsOptions:Kd(i,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:i.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Yg.bind(null,r),n.ce&&n.ce(r),r}let Qe=null;const __=()=>Qe||vn;let pa,Xr;{const n=Ca(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};pa=t("__VUE_INSTANCE_SETTERS__",e=>Qe=e),Xr=t("__VUE_SSR_SETTERS__",e=>$r=e)}const io=n=>{const t=Qe;return pa(n),n.scope.on(),()=>{n.scope.off(),pa(t)}},gf=()=>{Qe&&Qe.scope.off(),pa(null)};function dp(n){return n.vnode.shapeFlag&4}let $r=!1;function v_(n,t=!1,e=!1){t&&Xr(t);const{props:i,children:s}=n.vnode,r=dp(n);t_(n,i,r,t),s_(n,s,e||t);const o=r?x_(n,t):void 0;return t&&Xr(!1),o}function x_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kg);const{setup:i}=e;if(i){yi();const s=n.setupContext=i.length>1?M_(n):null,r=io(n),o=eo(i,n,0,[n.props,s]),a=fd(o);if(Mi(),r(),(a||n.sp)&&!Fr(n)&&Gd(n),a){if(o.then(gf,gf),t)return o.then(l=>{Xr(!0);try{_f(n,l,t)}finally{Xr(!1)}}).catch(l=>{Pa(l,n,0)});n.asyncDep=o}else _f(n,o)}else pp(n)}function _f(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ge(t)&&(n.setupState=Id(t)),pp(n)}function pp(n,t,e){const i=n.type;n.render||(n.render=i.render||qn);{const s=io(n);yi();try{zg(n)}finally{Mi(),s()}}}const y_={get(n,t){return Ve(n,"get",""),n[t]}};function M_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,y_),slots:n.slots,emit:n.emit,expose:t}}function Fa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Id(ug(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Or)return Or[e](n)},has(t,e){return e in t||e in Or}})):n.proxy}function S_(n){return Kt(n)&&"__vccOpts"in n}const Le=(n,t)=>mg(n,t,$r),b_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const vf=typeof window<"u"&&window.trustedTypes;if(vf)try{Ql=vf.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Ql?n=>Ql.createHTML(n):n=>n,E_="http://www.w3.org/2000/svg",T_="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,xf=ci&&ci.createElement("template"),w_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ci.createElementNS(E_,n):t==="mathml"?ci.createElementNS(T_,n):e?ci.createElement(n,{is:e}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{xf.innerHTML=mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},A_=Symbol("_vtc");function C_(n,t,e){const i=n[A_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const yf=Symbol("_vod"),R_=Symbol("_vsh"),P_=Symbol(""),L_=/(?:^|;)\s*display\s*:/;function D_(n,t,e){const i=n.style,s=Ae(e);let r=!1;if(e&&!s){if(t)if(Ae(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Rr(i,a,"")}else for(const o in t)e[o]==null&&Rr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?I_(n,o,!Ae(t)&&t?t[o]:void 0,a)||Rr(i,o,a):Rr(i,o,"")}}else if(s){if(t!==e){const o=i[P_];o&&(e+=";"+o),i.cssText=e,r=L_.test(e)}}else t&&n.removeAttribute("style");yf in n&&(n[yf]=r?i.display:"",n[R_]&&(i.display="none"))}const po=/\s*!important$/;function Rr(n,t,e){if(Xt(e))e.forEach(i=>Rr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))po.test(e)?n.setProperty(t,e.replace(po,""),"important"):n.setProperty(t,e);else{const i=U_(n,t);po.test(e)?n.setProperty($i(i),e.replace(po,""),"important"):n[i]=e}}const Mf=["Webkit","Moz","ms"],tl={};function U_(n,t){const e=tl[t];if(e)return e;let i=Rn(t);if(i!=="filter"&&i in n)return tl[t]=i;i=pd(i);for(let s=0;s<Mf.length;s++){const r=Mf[s]+i;if(r in n)return tl[t]=r}return t}function I_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ae(i)&&e===i}const Sf="http://www.w3.org/1999/xlink";function bf(n,t,e,i,s,r=Hm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Sf,t.slice(6,t.length)):n.setAttributeNS(Sf,t,e):e==null||r&&!gd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":jn(e)?String(e):e)}function Ef(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?mp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=gd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function di(n,t,e,i){n.addEventListener(t,e,i)}function N_(n,t,e,i){n.removeEventListener(t,e,i)}const Tf=Symbol("_vei");function F_(n,t,e,i,s=null){const r=n[Tf]||(n[Tf]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=k_(t);if(i){const c=r[t]=V_(i,s);di(n,a,c,l)}else o&&(N_(n,a,o,l),r[t]=void 0)}}const O_=/(Once|Passive|Capture)$/,B_=/^on:?(?:Once|Passive|Capture)$/;function k_(n){let t,e;for(;(e=n.match(O_))&&!B_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):$i(n.slice(2)),t]}let el=0;const z_=Promise.resolve(),H_=()=>el||(z_.then(()=>el=0),el=Date.now());function V_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Xt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&In(c,t,5,a)}}else In(s,t,5,[i])};return e.value=n,e.attached=H_(),e}const wf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,G_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?C_(n,i,o):t==="style"?D_(n,e,i):Ea(t)?Ta(t)||F_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W_(n,t,i,o))?(Ef(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bf(n,t,i,o,r,t!=="value")):n._isVueCE&&(X_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ae(i)))?Ef(n,Rn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),bf(n,t,i,o))};function W_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&wf(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(t)&&Ae(e)?!1:t in n}function X_(n,t){const e=n._def.props;if(!e)return!1;const i=Rn(t);return Array.isArray(e)?e.some(s=>Rn(s)===i):Object.keys(e).some(s=>Rn(s)===i)}const Vi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Xt(t)?e=>Yo(t,e):t};function $_(n){n.target.composing=!0}function Af(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cn=Symbol("_assign"),mo=Symbol("_initialValue");function nl(n,t,e){return t&&(n=n.trim()),e&&(n=Aa(n)),n}const Jn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[mo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[mo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[cn]=Vi(s);const r=i||s.props&&s.props.type==="number";di(n,t?"change":"input",o=>{o.target.composing||n[cn](nl(n.value,e,r))}),(e||r)&&di(n,"change",()=>{n.value=nl(n.value,e,r)}),t||(di(n,"compositionstart",$_),di(n,"compositionend",Af),di(n,"change",Af))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[mo];delete n[mo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[cn](nl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[cn]=Vi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Aa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},qr={deep:!0,created(n,t,e){n[cn]=Vi(e),di(n,"change",()=>{const i=n._modelValue,s=ir(n),r=n.checked,o=n[cn];if(Xt(i)){const a=ru(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(xi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(gp(n,r))})},mounted:Cf,beforeUpdate(n,t,e){n[cn]=Vi(e),Cf(n,t,e)}};function Cf(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Xt(t))s=ru(t,i.props.value)>-1;else if(xi(t))s=t.has(i.props.value);else{if(t===e)return;s=Un(t,gp(n,!0))}n.checked!==s&&(n.checked=s)}const q_={created(n,{value:t},e){n.checked=Un(t,e.props.value),n[cn]=Vi(e),di(n,"change",()=>{n[cn](ir(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[cn]=Vi(i),t!==e&&(n.checked=Un(t,i.props.value))}},tc={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,di(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Aa(ir(l)):ir(l)),r=n.multiple,o=r?xi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Xt(o)?s.slice():s:o];try{n[cn](o)}finally{du(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[cn]=Vi(i)},mounted(n,{value:t}){Rf(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[cn]=Vi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!Y_(t,e[1],e[0]))&&Rf(n,t)}};function Y_(n,t,e){if(!e||Xt(n))return Un(n,t);if(xi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Rf(n,t){const e=n.multiple,i=Xt(t);if(!(e&&!i&&!xi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=ir(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=ru(t,a)>-1}else o.selected=t.has(a);else if(Un(ir(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ir(n){return"_value"in n?n._value:n.value}function gp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const K_={created(n,t,e){go(n,t,e,null,"created")},mounted(n,t,e){go(n,t,e,null,"mounted")},beforeUpdate(n,t,e,i){go(n,t,e,i,"beforeUpdate")},updated(n,t,e,i){go(n,t,e,i,"updated")}};function j_(n,t){switch(n){case"SELECT":return tc;case"TEXTAREA":return Jn;default:switch(t){case"checkbox":return qr;case"radio":return q_;default:return Jn}}}function go(n,t,e,i,s){const o=j_(n.tagName,e.props&&e.props.type)[s];o&&o(n,t,e,i)}const Z_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ec=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=$i(s.key);if(t.some(o=>o===r||Z_[o]===r))return n(s)}))},J_=$e({patchProp:G_},w_);let Pf;function Q_(){return Pf||(Pf=o_(J_))}const t0=((...n)=>{const t=Q_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=n0(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,e0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function e0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function n0(n){return Ae(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="170",i0=0,Lf=1,s0=2,_p=1,r0=2,li=3,Gi=0,sn=1,pi=2,Oi=0,Js=1,ma=2,Df=3,Uf=4,o0=5,rs=100,a0=101,l0=102,c0=103,u0=104,f0=200,h0=201,d0=202,p0=203,nc=204,ic=205,m0=206,g0=207,_0=208,v0=209,x0=210,y0=211,M0=212,S0=213,b0=214,sc=0,rc=1,oc=2,sr=3,ac=4,lc=5,cc=6,uc=7,vp=0,E0=1,T0=2,Bi=0,w0=1,A0=2,C0=3,R0=4,P0=5,L0=6,D0=7,xp=300,rr=301,or=302,fc=303,hc=304,Oa=306,dc=1e3,ls=1001,pc=1002,Dn=1003,U0=1004,_o=1005,$n=1006,il=1007,cs=1008,bi=1009,yp=1010,Mp=1011,Yr=1012,yu=1013,ms=1014,mi=1015,so=1016,Mu=1017,Su=1018,ar=1020,Sp=35902,bp=1021,Ep=1022,wn=1023,Tp=1024,wp=1025,Qs=1026,lr=1027,Ap=1028,bu=1029,Cp=1030,Eu=1031,Tu=1033,Zo=33776,Jo=33777,Qo=33778,ta=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Mc=37496,Sc=37808,bc=37809,Ec=37810,Tc=37811,wc=37812,Ac=37813,Cc=37814,Rc=37815,Pc=37816,Lc=37817,Dc=37818,Uc=37819,Ic=37820,Nc=37821,ea=36492,Fc=36494,Oc=36495,Rp=36283,Bc=36284,kc=36285,zc=36286,I0=3200,N0=3201,Pp=0,F0=1,Ii="",pn="srgb",ur="srgb-linear",Ba="linear",de="srgb",Es=7680,If=519,O0=512,B0=513,k0=514,Lp=515,z0=516,H0=517,V0=518,G0=519,Hc=35044,Nf="300 es",gi=2e3,ga=2001;class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Vc=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function W0(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],y=s[1],v=s[4],x=s[7],P=s[2],R=s[5],L=s[8];return r[0]=o*_+a*y+l*P,r[3]=o*m+a*v+l*R,r[6]=o*d+a*x+l*L,r[1]=c*_+u*y+f*P,r[4]=c*m+u*v+f*R,r[7]=c*d+u*x+f*L,r[2]=h*_+p*y+g*P,r[5]=h*m+p*v+g*R,r[8]=h*d+p*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Jt;function Dp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X0(){const n=_a("canvas");return n.style.display="block",n}const Ff={};function Pr(n){n in Ff||(Ff[n]=!0,console.warn(n))}function $0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function q0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Y0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?Ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Of=[.64,.33,.3,.6,.15,.06],Bf=[.2126,.7152,.0722],kf=[.3127,.329],zf=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ur]:{primaries:Of,whitePoint:kf,transfer:Ba,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Bf,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Of,whitePoint:kf,transfer:de,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Bf,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let Ts;class K0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=_a("canvas")),Ts.width=t.width,Ts.height=t.height;const i=Ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j0=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z0=0;class tn extends fr{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=ls,s=ls,r=$n,o=cs,a=wn,l=bi,c=tn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=_i(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=xp;tn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(p+1)/2,P=(d+1)/2,R=(u+h)/4,L=(f+_)/4,F=(g+m)/4;return v>x&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=L/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=F/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=F/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J0 extends fr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends J0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ip extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,d*y);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const x=a*y;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-a*p,t[e+2]=c*g+u*p+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new B,Vf=new ki;class ro{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),xo.subVectors(this.max,xr),ws.subVectors(t.a,xr),As.subVectors(t.b,xr),Cs.subVectors(t.c,xr),Ai.subVectors(As,ws),Ci.subVectors(Cs,As),Ki.subVectors(ws,Cs);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!cl(e,ws,As,Cs,xo)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,ws,As,Cs,xo))?!1:(yo.crossVectors(Ai,Ci),e=[yo.x,yo.y,yo.z],cl(e,ws,As,Cs,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new B,new B,new B,new B,new B,new B,new B,new B],Sn=new B,vo=new ro,ws=new B,As=new B,Cs=new B,Ai=new B,Ci=new B,Ki=new B,xr=new B,xo=new B,yo=new B,ji=new B;function cl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tv=new ro,yr=new B,ul=new B;class ka{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(ul)),this.expandByPoint(yr.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new B,fl=new B,Mo=new B,Ri=new B,hl=new B,So=new B,dl=new B;class wu{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fl.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(fl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=Ri.dot(this.direction),l=-Ri.dot(Mo),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(Mo,h),p}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){hl.subVectors(e,t),So.subVectors(i,t),dl.crossVectors(hl,So);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(So.crossVectors(Ri,So));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,i,s,r,o,a,l,c,u,f,h,p,g,_,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ev,t,nv)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Pi.crossVectors(i,on),Pi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Pi.crossVectors(i,on)),Pi.normalize(),bo.crossVectors(on,Pi),s[0]=Pi.x,s[4]=bo.x,s[8]=on.x,s[1]=Pi.y,s[5]=bo.y,s[9]=on.y,s[2]=Pi.z,s[6]=bo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],y=i[3],v=i[7],x=i[11],P=i[15],R=s[0],L=s[4],F=s[8],w=s[12],b=s[1],I=s[5],nt=s[9],q=s[13],it=s[2],ft=s[6],$=s[10],at=s[14],X=s[3],St=s[7],Y=s[11],O=s[15];return r[0]=o*R+a*b+l*it+c*X,r[4]=o*L+a*I+l*ft+c*St,r[8]=o*F+a*nt+l*$+c*Y,r[12]=o*w+a*q+l*at+c*O,r[1]=u*R+f*b+h*it+p*X,r[5]=u*L+f*I+h*ft+p*St,r[9]=u*F+f*nt+h*$+p*Y,r[13]=u*w+f*q+h*at+p*O,r[2]=g*R+_*b+m*it+d*X,r[6]=g*L+_*I+m*ft+d*St,r[10]=g*F+_*nt+m*$+d*Y,r[14]=g*w+_*q+m*at+d*O,r[3]=y*R+v*b+x*it+P*X,r[7]=y*L+v*I+x*ft+P*St,r[11]=y*F+v*nt+x*$+P*Y,r[15]=y*w+v*q+x*at+P*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+_*(+e*l*p-e*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+e*c*f-e*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-e*l*f+e*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,x=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,P=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=e*y+i*v+s*x+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=y*L,t[1]=(_*h*r-f*m*r-_*s*p+i*m*p+f*s*d-i*h*d)*L,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*L,t[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*L,t[4]=v*L,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*d+e*h*d)*L,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*L,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*p+e*l*p)*L,t[8]=x*L,t[9]=(g*f*r-u*_*r-g*i*p+e*_*p+u*i*d-e*f*d)*L,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*L,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*p-e*a*p)*L,t[12]=P*L,t[13]=(u*_*s-g*f*s+g*i*h-e*_*h-u*i*m+e*f*m)*L,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*L,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*h+e*a*h)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,_=o*u,m=o*f,d=a*f,y=l*c,v=l*u,x=l*f,P=i.x,R=i.y,L=i.z;return s[0]=(1-(_+d))*P,s[1]=(p+x)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(h+d))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+v)*L,s[9]=(m-y)*L,s[10]=(1-(h+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let p,g;if(a===gi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ga)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(o-r),h=(e+t)*c,p=(i+s)*u;let g,_;if(a===gi)g=(o+r)*f,_=-2*f;else if(a===ga)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new B,bn=new Se,ev=new B(0,0,0),nv=new B(1,1,1),Pi=new B,bo=new B,on=new B,Gf=new Se,Wf=new ki;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iv=0;const Xf=new B,Ps=new ki,ri=new Se,Eo=new B,Mr=new B,sv=new B,rv=new ki,$f=new B(1,0,0),qf=new B(0,1,0),Yf=new B(0,0,1),Kf={type:"added"},ov={type:"removed"},Ls={type:"childadded",child:null},pl={type:"childremoved",child:null};class Fe extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new B,e=new Nn,i=new ki,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis($f,t)}rotateY(t){return this.rotateOnAxis(qf,t)}rotateZ(t){return this.rotateOnAxis(Yf,t)}translateOnAxis(t,e){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($f,t)}translateY(t){return this.translateOnAxis(qf,t)}translateZ(t){return this.translateOnAxis(Yf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Mr,Eo,this.up):ri.lookAt(Eo,Mr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ri),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kf),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ov),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kf),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,sv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,rv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new B(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new B,oi=new B,ml=new B,ai=new B,Ds=new B,Us=new B,jf=new B,gl=new B,_l=new B,vl=new B,xl=new we,yl=new we,Ml=new we;class _n{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),oi.subVectors(i,e),ml.subVectors(t,e);const o=En.dot(En),a=En.dot(oi),l=En.dot(ml),c=oi.dot(oi),u=oi.dot(ml),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return xl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),oi.subVectors(t,e),En.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),En.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,i),Us.subVectors(r,i),gl.subVectors(t,i);const l=Ds.dot(gl),c=Us.dot(gl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,s);const u=Ds.dot(_l),f=Us.dot(_l);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ds,o);vl.subVectors(t,r);const p=Ds.dot(vl),g=Us.dot(vl);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Us,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return jf.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(jf,a);const d=1/(m+_+h);return o=_*d,a=h*d,e.copy(i).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},To={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class se{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=W0(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const i=Np[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return ie.fromWorkingColorSpace(He.copy(this),t),Math.round(Ge(He.r*255,0,255))*65536+Math.round(Ge(He.g*255,0,255))*256+Math.round(Ge(He.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=pn){ie.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(To);const i=rl(Li.h,To.h,e),s=rl(Li.s,To.s,e),r=rl(Li.l,To.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new se;se.NAMES=Np;let av=0;class xs extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=_i(),this.name="",this.blending=Js,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fp extends xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new B,wo=new Ft;class un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class Op extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bp extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Yn extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lv=0;const hn=new Se,bl=new Fe,Is=new B,an=new ro,Sr=new ro,Ie=new B;class Fn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?Bp:Op)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(an.min,Sr.min),an.expandByPoint(Ie),Ie.addVectors(an.max,Sr.max),an.expandByPoint(Ie)):(an.expandByPoint(Sr.min),an.expandByPoint(Sr.max))}an.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ie.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(t,c),Ie.add(Is)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new B,l[F]=new B;const c=new B,u=new B,f=new B,h=new Ft,p=new Ft,g=new Ft,_=new B,m=new B;function d(F,w,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,F),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(_),a[w].add(_),a[b].add(_),l[F].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,w=y.length;F<w;++F){const b=y[F],I=b.start,nt=b.count;for(let q=I,it=I+nt;q<it;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const v=new B,x=new B,P=new B,R=new B;function L(F){P.fromBufferAttribute(s,F),R.copy(P);const w=a[F];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(R,w);const I=x.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,w=y.length;F<w;++F){const b=y[F],I=b.start,nt=b.count;for(let q=I,it=I+nt;q<it;q+=3)L(t.getX(q+0)),L(t.getX(q+1)),L(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new un(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zf=new Se,Zi=new wu,Ao=new ka,Jf=new B,Co=new B,Ro=new B,Po=new B,El=new B,Lo=new B,Qf=new B,Do=new B;class An extends Fe{constructor(t=new Fn,e=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(El.fromBufferAttribute(f,t),o?Lo.addScaledVector(El,u):Lo.addScaledVector(El.sub(e),u))}e.add(Lo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(Ao.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ao,Jf)===null||Zi.origin.distanceToSquared(Jf)>(t.far-t.near)**2))&&(Zf.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(Zf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=v;x<P;x+=3){const R=a.getX(x),L=a.getX(x+1),F=a.getX(x+2);s=Uo(this,d,t,i,c,u,f,R,L,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Uo(this,o,t,i,c,u,f,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=v;x<P;x+=3){const R=x,L=x+1,F=x+2;s=Uo(this,d,t,i,c,u,f,R,L,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,v=m+1,x=m+2;s=Uo(this,o,t,i,c,u,f,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cv(n,t,e,i,s,r,o,a){let l;if(t.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:n}}function Uo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Po);const u=cv(n,t,e,i,Co,Ro,Po,Qf);if(u){const f=new B;_n.getBarycoord(Qf,Co,Ro,Po,f),s&&(u.uv=_n.getInterpolatedAttribute(s,a,l,c,f,new Ft)),r&&(u.uv1=_n.getInterpolatedAttribute(r,a,l,c,f,new Ft)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};_n.getNormal(Co,Ro,Po,h.normal),u.face=h,u.barycoord=f}return u}class hr extends Fn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(f,2));function g(_,m,d,y,v,x,P,R,L,F,w){const b=x/L,I=P/F,nt=x/2,q=P/2,it=R/2,ft=L+1,$=F+1;let at=0,X=0;const St=new B;for(let Y=0;Y<$;Y++){const O=Y*I-q;for(let W=0;W<ft;W++){const vt=W*b-nt;St[_]=vt*y,St[m]=O*v,St[d]=it,c.push(St.x,St.y,St.z),St[_]=0,St[m]=0,St[d]=R>0?1:-1,u.push(St.x,St.y,St.z),f.push(W/L),f.push(1-Y/F),at+=1}}for(let Y=0;Y<F;Y++)for(let O=0;O<L;O++){const W=h+O+ft*Y,vt=h+O+ft*(Y+1),K=h+(O+1)+ft*(Y+1),ot=h+(O+1)+ft*Y;l.push(W,vt,ot),l.push(vt,K,ot),X+=6}a.addGroup(p,X,w),p+=X,h+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(n){const t={};for(let e=0;e<n.length;e++){const i=cr(n[e]);for(const s in i)t[s]=i[s]}return t}function uv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const fv={clone:cr,merge:je};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zp extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new B,th=new Ft,eh=new Ft;class gn extends zp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Fs=1;class pv extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Ns,Fs,t,e);s.layers=this.layers,this.add(s);const r=new gn(Ns,Fs,t,e);r.layers=this.layers,this.add(r);const o=new gn(Ns,Fs,t,e);o.layers=this.layers,this.add(o);const a=new gn(Ns,Fs,t,e);a.layers=this.layers,this.add(a);const l=new gn(Ns,Fs,t,e);l.layers=this.layers,this.add(l);const c=new gn(Ns,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hp extends tn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mv extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hr(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Oi});r.uniforms.tEquirect.value=e;const o=new An(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=$n),new pv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Tl=new B,gv=new B,_v=new Jt;class is{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Tl.subVectors(i,e).cross(gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_v.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ka,Io=new B;class Cu{constructor(t=new is,e=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],y=s[13],v=s[14],x=s[15];if(i[0].setComponents(l-r,h-c,m-p,x-d).normalize(),i[1].setComponents(l+r,h+c,m+p,x+d).normalize(),i[2].setComponents(l+o,h+u,m+g,x+y).normalize(),i[3].setComponents(l-o,h-u,m-g,x-y).normalize(),i[4].setComponents(l-a,h-f,m-_,x-v).normalize(),e===gi)i[5].setComponents(l+a,h+f,m+_,x+v).normalize();else if(e===ga)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function vv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class za extends Fn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const y=d*h-o;for(let v=0;v<c;v++){const x=v*f-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,x=y+c*(d+1),P=y+1+c*(d+1),R=y+1+c*d;p.push(v,x,R),p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Uv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ty=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Ny=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,Xy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:Tv,aomap_pars_fragment:wv,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:kv,color_pars_vertex:zv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:$v,emissivemap_fragment:qv,emissivemap_pars_fragment:Yv,colorspace_fragment:Kv,colorspace_pars_fragment:jv,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:tx,envmap_physical_pars_fragment:fx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:hx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:wx,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Ux,morphtarget_pars_vertex:Ix,morphtarget_vertex:Nx,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:$x,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:Kx,dithering_fragment:jx,dithering_pars_fragment:Zx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ey,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:ry,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:uy,tonemapping_pars_fragment:fy,transmission_fragment:hy,transmission_pars_fragment:dy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:wy,distanceRGBA_frag:Ay,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:Py,linedashed_frag:Ly,meshbasic_vert:Dy,meshbasic_frag:Uy,meshlambert_vert:Iy,meshlambert_frag:Ny,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:By,meshnormal_frag:ky,meshphong_vert:zy,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:$y,points_frag:qy,shadow_vert:Yy,shadow_frag:Ky,sprite_vert:jy,sprite_frag:Zy},Rt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Gn={basic:{uniforms:je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:je([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:je([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:je([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:je([Rt.points,Rt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:je([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:je([Rt.common,Rt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:je([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:je([Rt.sprite,Rt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:je([Rt.common,Rt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:je([Rt.lights,Rt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Gn.physical={uniforms:je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const No={r:0,b:0,g:0},Qi=new Nn,Jy=new Se;function Qy(n,t,e,i,s,r,o){const a=new se(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?d(a,l):x&&x.isColor&&(d(x,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Oa)?(u===void 0&&(u=new An(new hr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:cr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(Qi)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new An(new za(2,2),new Wi({name:"BackgroundMaterial",uniforms:cr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(No,kp(n)),i.buffers.color.setClear(No.r,No.g,No.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:m}}function tM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,I,nt,q,it){let ft=!1;const $=f(q,nt,I);r!==$&&(r=$,c(r.object)),ft=p(b,q,nt,it),ft&&g(b,q,nt,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(ft||o)&&(o=!1,x(b,I,nt,q),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,I,nt){const q=nt.wireframe===!0;let it=i[b.id];it===void 0&&(it={},i[b.id]=it);let ft=it[I.id];ft===void 0&&(ft={},it[I.id]=ft);let $=ft[q];return $===void 0&&($=h(l()),ft[q]=$),$}function h(b){const I=[],nt=[],q=[];for(let it=0;it<e;it++)I[it]=0,nt[it]=0,q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:nt,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,I,nt,q){const it=r.attributes,ft=I.attributes;let $=0;const at=nt.getAttributes();for(const X in at)if(at[X].location>=0){const Y=it[X];let O=ft[X];if(O===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;$++}return r.attributesNum!==$||r.index!==q}function g(b,I,nt,q){const it={},ft=I.attributes;let $=0;const at=nt.getAttributes();for(const X in at)if(at[X].location>=0){let Y=ft[X];Y===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),it[X]=O,$++}r.attributes=it,r.attributesNum=$,r.index=q}function _(){const b=r.newAttributes;for(let I=0,nt=b.length;I<nt;I++)b[I]=0}function m(b){d(b,0)}function d(b,I){const nt=r.newAttributes,q=r.enabledAttributes,it=r.attributeDivisors;nt[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),it[b]!==I&&(n.vertexAttribDivisor(b,I),it[b]=I)}function y(){const b=r.newAttributes,I=r.enabledAttributes;for(let nt=0,q=I.length;nt<q;nt++)I[nt]!==b[nt]&&(n.disableVertexAttribArray(nt),I[nt]=0)}function v(b,I,nt,q,it,ft,$){$===!0?n.vertexAttribIPointer(b,I,nt,it,ft):n.vertexAttribPointer(b,I,nt,q,it,ft)}function x(b,I,nt,q){_();const it=q.attributes,ft=nt.getAttributes(),$=I.defaultAttributeValues;for(const at in ft){const X=ft[at];if(X.location>=0){let St=it[at];if(St===void 0&&(at==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),at==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),St!==void 0){const Y=St.normalized,O=St.itemSize,W=t.get(St);if(W===void 0)continue;const vt=W.buffer,K=W.type,ot=W.bytesPerElement,yt=K===n.INT||K===n.UNSIGNED_INT||St.gpuType===yu;if(St.isInterleavedBufferAttribute){const mt=St.data,Dt=mt.stride,It=St.offset;if(mt.isInstancedInterleavedBuffer){for(let $t=0;$t<X.locationSize;$t++)d(X.location+$t,mt.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $t=0;$t<X.locationSize;$t++)m(X.location+$t);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let $t=0;$t<X.locationSize;$t++)v(X.location+$t,O/X.locationSize,K,Y,Dt*ot,(It+O/X.locationSize*$t)*ot,yt)}else{if(St.isInstancedBufferAttribute){for(let mt=0;mt<X.locationSize;mt++)d(X.location+mt,St.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let mt=0;mt<X.locationSize;mt++)v(X.location+mt,O/X.locationSize,K,Y,O*ot,O/X.locationSize*mt*ot,yt)}}else if($!==void 0){const Y=$[at];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(X.location,Y);break;case 3:n.vertexAttrib3fv(X.location,Y);break;case 4:n.vertexAttrib4fv(X.location,Y);break;default:n.vertexAttrib1fv(X.location,Y)}}}}y()}function P(){F();for(const b in i){const I=i[b];for(const nt in I){const q=I[nt];for(const it in q)u(q[it].object),delete q[it];delete I[nt]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const nt in I){const q=I[nt];for(const it in q)u(q[it].object),delete q[it];delete I[nt]}delete i[b.id]}function L(b){for(const I in i){const nt=i[I];if(nt[b.id]===void 0)continue;const q=nt[b.id];for(const it in q)u(q[it].object),delete q[it];delete nt[b.id]}}function F(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function eM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==bi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==mi&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function iM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new is,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,v=y*4;let x=d.clippingState||null;l.value=x,x=u(g,h,v,p);for(let P=0;P!==v;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sM(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=rr:a===hc&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===hc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gp extends zp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $s=4,nh=[.125,.215,.35,.446,.526,.582],os=20,wl=new Gp,ih=new se;let Al=null,Cl=0,Rl=0,Pl=!1;const ss=(1+Math.sqrt(5))/2,Os=1/ss,sh=[new B(-ss,Os,0),new B(ss,Os,0),new B(-Os,0,ss),new B(Os,0,ss),new B(0,ss,-Os),new B(0,ss,Os),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:so,format:wn,colorSpace:ur,depthBuffer:!1},s=oh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(r)),this._blurMaterial=oM(r,t,e)}return s}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,s){const a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ih),u.toneMapping=Bi,u.autoClear=!1;const p=new Fp({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new An(new hr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ih),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Fo(s,y*v,d>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Fo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,wl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sh[(s-r-1)%sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const d=[];let y=0;for(let L=0;L<os;++L){const F=L/_,w=Math.exp(-F*F/2);d.push(w),L===0?y+=w:L<m&&(y+=2*w)}for(let L=0;L<d.length;L++)d[L]=d[L]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const x=this._sizeLods[s],P=3*x*(s>v-$s?s-v+$s:0),R=4*(this._cubeSize-x);Fo(e,P,R,3*x,2*x),l.setRenderTarget(e),l.render(f,wl)}}function rM(n){const t=[],e=[],i=[];let s=n;const r=n-$s+1+nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$s?l=nh[o-n+$s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,F=R>2?0:-1,w=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];y.set(w,_*g*R),v.set(h,m*g*R);const b=[R,R,R,R,R,R];x.set(b,d*g*R)}const P=new Fn;P.setAttribute("position",new un(y,_)),P.setAttribute("uv",new un(v,m)),P.setAttribute("faceIndex",new un(x,d)),t.push(P),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function oh(n,t,e){const i=new gs(n,t,e);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oM(n,t,e){const i=new Float32Array(os),s=new B(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ah(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function lh(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function aM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===hc,u=l===rr||l===or;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new rh(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new rh(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function lM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cM(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){const P=y[v+0],R=y[v+1],L=y[v+2];h.push(P,R,R,L,L,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const P=v+0,R=v+1,L=v+2;h.push(P,R,R,L,L,P)}}else return;const m=new(Dp(h)?Bp:Op)(h,1);m.version=_;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function uM(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),e.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*o,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,_,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*_[y];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hM(n,t,e){const i=new WeakMap,s=new we;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*P*4*f),L=new Ip(R,x,P,f);L.type=mi,L.needsUpdate=!0;const F=v*4;for(let b=0;b<f;b++){const I=m[b],nt=d[b],q=y[b],it=x*P*4*b;for(let ft=0;ft<I.count;ft++){const $=ft*F;p===!0&&(s.fromBufferAttribute(I,ft),R[it+$+0]=s.x,R[it+$+1]=s.y,R[it+$+2]=s.z,R[it+$+3]=0),g===!0&&(s.fromBufferAttribute(nt,ft),R[it+$+4]=s.x,R[it+$+5]=s.y,R[it+$+6]=s.z,R[it+$+7]=0),_===!0&&(s.fromBufferAttribute(q,ft),R[it+$+8]=s.x,R[it+$+9]=s.y,R[it+$+10]=s.z,R[it+$+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Ft(x,P)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function dM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Wp extends tn{constructor(t,e,i,s,r,o,a,l,c,u=Qs){if(u!==Qs&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=ms),i===void 0&&u===lr&&(i=ar),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xp=new tn,ch=new Wp(1,1),$p=new Ip,qp=new Q0,Yp=new Hp,uh=[],fh=[],hh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function gM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function _M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function vM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;ph.set(i),n.uniformMatrix2fv(this.addr,!1,ph),Ue(e,i)}}function xM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Ue(e,i)}}function yM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Ue(e,i)}}function MM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function SM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function bM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function TM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function RM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ch.compareFunction=Lp,r=ch):r=Xp,e.setTexture2D(t||r,s)}function PM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qp,s)}function LM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yp,s)}function DM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$p,s)}function UM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}function IM(n,t){n.uniform1fv(this.addr,t)}function NM(n,t){const e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function FM(n,t){const e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function OM(n,t){const e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function BM(n,t){const e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kM(n,t){const e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zM(n,t){const e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function HM(n,t){n.uniform1iv(this.addr,t)}function VM(n,t){n.uniform2iv(this.addr,t)}function GM(n,t){n.uniform3iv(this.addr,t)}function WM(n,t){n.uniform4iv(this.addr,t)}function XM(n,t){n.uniform1uiv(this.addr,t)}function $M(n,t){n.uniform2uiv(this.addr,t)}function qM(n,t){n.uniform3uiv(this.addr,t)}function YM(n,t){n.uniform4uiv(this.addr,t)}function KM(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xp,r[o])}function jM(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qp,r[o])}function ZM(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yp,r[o])}function JM(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$p,r[o])}function QM(n){switch(n){case 5126:return IM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return kM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return $M;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class tS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=UM(e.type)}}class eS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QM(e.type)}}class nS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function mh(n,t){n.seq.push(t),n.map[t.id]=t}function iS(n,t,e){const i=n.name,s=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mh(e,c===void 0?new tS(a,n,t):new eS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new nS(a),mh(e,f)),e=f}}}class na{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);iS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function gh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sS=37297;let rS=0;function oS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const _h=new Jt;function aS(n){ie._getMatrix(_h,ie.workingColorSpace,n);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+oS(n.getShaderSource(t),o)}else return s}function lS(n,t){const e=aS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cS(n,t){let e;switch(t){case w0:e="Linear";break;case A0:e="Reinhard";break;case C0:e="Cineon";break;case R0:e="ACESFilmic";break;case L0:e="AgX";break;case D0:e="Neutral";break;case P0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new B;function uS(){ie.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function hS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function xh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(n){return n.replace(pS,gS)}const mS=new Map;function gS(n,t){let e=Qt[t];if(e===void 0){const i=mS.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(_S,vS)}function vS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function xS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_p?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===r0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function yS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function SS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case E0:t="ENVMAP_BLENDING_MIX";break;case T0:t="ENVMAP_BLENDING_ADD";break}return t}function bS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ES(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xS(e),c=yS(e),u=MS(e),f=SS(e),h=bS(e),p=fS(e),g=hS(r),_=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?cS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,lS("linearToOutputTexel",e.outputColorSpace),uS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Gc(o),o=xh(o,e),o=yh(o,e),a=Gc(a),a=xh(a,e),a=yh(a,e),o=Mh(o),a=Mh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=y+m+o,x=y+d+a,P=gh(s,s.VERTEX_SHADER,v),R=gh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(I){if(n.debug.checkShaderErrors){const nt=s.getProgramInfoLog(_).trim(),q=s.getShaderInfoLog(P).trim(),it=s.getShaderInfoLog(R).trim();let ft=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ft=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,R);else{const at=vh(s,P,"vertex"),X=vh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+nt+`
`+at+`
`+X)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(q===""||it==="")&&($=!1);$&&(I.diagnostics={runnable:ft,programLog:nt,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:d}})}s.deleteShader(P),s.deleteShader(R),F=new na(s,_),w=dS(s,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,sS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let TS=0;class wS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AS(t),e.set(t,i)),i}}class AS{constructor(t){this.id=TS++,this.code=t,this.usedTimes=0}}function CS(n,t,e,i,s,r,o){const a=new Au,l=new wS,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,nt,q){const it=nt.fog,ft=q.geometry,$=w.isMeshStandardMaterial?nt.environment:null,at=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),X=at&&at.mapping===Oa?at.image.height:null,St=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Y=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=Y!==void 0?Y.length:0;let W=0;ft.morphAttributes.position!==void 0&&(W=1),ft.morphAttributes.normal!==void 0&&(W=2),ft.morphAttributes.color!==void 0&&(W=3);let vt,K,ot,yt;if(St){const Bt=Gn[St];vt=Bt.vertexShader,K=Bt.fragmentShader}else vt=w.vertexShader,K=w.fragmentShader,l.update(w),ot=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const mt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),It=q.isInstancedMesh===!0,$t=q.isBatchedMesh===!0,jt=!!w.map,C=!!w.matcap,N=!!at,A=!!w.aoMap,ht=!!w.lightMap,j=!!w.bumpMap,tt=!!w.normalMap,st=!!w.displacementMap,gt=!!w.emissiveMap,et=!!w.metalnessMap,S=!!w.roughnessMap,M=w.anisotropy>0,E=w.clearcoat>0,D=w.dispersion>0,U=w.iridescence>0,z=w.sheen>0,_t=w.transmission>0,lt=M&&!!w.anisotropyMap,ct=E&&!!w.clearcoatMap,Nt=E&&!!w.clearcoatNormalMap,pt=E&&!!w.clearcoatRoughnessMap,Mt=U&&!!w.iridescenceMap,Lt=U&&!!w.iridescenceThicknessMap,Ot=z&&!!w.sheenColorMap,Tt=z&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Gt=!!w.specularColorMap,ee=!!w.specularIntensityMap,H=_t&&!!w.transmissionMap,At=_t&&!!w.thicknessMap,Z=!!w.gradientMap,ut=!!w.alphaMap,Pt=w.alphaTest>0,wt=!!w.alphaHash,Wt=!!w.extensions;let ne=Bi;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ne=n.toneMapping);const oe={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:vt,fragmentShader:K,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:$t,batchingColor:$t&&q._colorsTexture!==null,instancing:It,instancingColor:It&&q.instanceColor!==null,instancingMorph:It&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ur,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:C,envMap:N,envMapMode:N&&at.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:ht,bumpMap:j,normalMap:tt,displacementMap:h&&st,emissiveMap:gt,normalMapObjectSpace:tt&&w.normalMapType===F0,normalMapTangentSpace:tt&&w.normalMapType===Pp,metalnessMap:et,roughnessMap:S,anisotropy:M,anisotropyMap:lt,clearcoat:E,clearcoatMap:ct,clearcoatNormalMap:Nt,clearcoatRoughnessMap:pt,dispersion:D,iridescence:U,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:z,sheenColorMap:Ot,sheenRoughnessMap:Tt,specularMap:qt,specularColorMap:Gt,specularIntensityMap:ee,transmission:_t,transmissionMap:H,thicknessMap:At,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:ut,alphaTest:Pt,alphaHash:wt,combine:w.combine,mapUv:jt&&_(w.map.channel),aoMapUv:A&&_(w.aoMap.channel),lightMapUv:ht&&_(w.lightMap.channel),bumpMapUv:j&&_(w.bumpMap.channel),normalMapUv:tt&&_(w.normalMap.channel),displacementMapUv:st&&_(w.displacementMap.channel),emissiveMapUv:gt&&_(w.emissiveMap.channel),metalnessMapUv:et&&_(w.metalnessMap.channel),roughnessMapUv:S&&_(w.roughnessMap.channel),anisotropyMapUv:lt&&_(w.anisotropyMap.channel),clearcoatMapUv:ct&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(w.sheenRoughnessMap.channel),specularMapUv:qt&&_(w.specularMap.channel),specularColorMapUv:Gt&&_(w.specularColorMap.channel),specularIntensityMapUv:ee&&_(w.specularIntensityMap.channel),transmissionMapUv:H&&_(w.transmissionMap.channel),thicknessMapUv:At&&_(w.thicknessMap.channel),alphaMapUv:ut&&_(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(tt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ft.attributes.uv&&(jt||ut),fog:!!it,useFog:w.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:q.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:gt&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function d(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(b,w),v(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=g[w.type];let I;if(b){const nt=Gn[b];I=fv.clone(nt.uniforms)}else I=w.uniforms;return I}function P(w,b){let I;for(let nt=0,q=u.length;nt<q;nt++){const it=u[nt];if(it.cacheKey===b){I=it,++I.usedTimes;break}}return I===void 0&&(I=new ES(n,b,w,r),u.push(I)),I}function R(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:F}}function RS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function PS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Eh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,p,g,_,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||PS),i.length>1&&i.sort(h||bh),s.length>1&&s.sort(h||bh)}function u(){for(let f=t,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function LS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Eh,n.set(i,[o])):s>=r.length?(o=new Eh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function DS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new se};break;case"SpotLight":e={position:new B,direction:new B,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function US(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let IS=0;function NS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FS(n){const t=new DS,e=US(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new Se,o=new Se;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,y=0,v=0,x=0,P=0,R=0,L=0;c.sort(NS);for(let w=0,b=c.length;w<b;w++){const I=c[w],nt=I.color,q=I.intensity,it=I.distance,ft=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=nt.r*q,f+=nt.g*q,h+=nt.b*q;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],q);L++}else if(I.isDirectionalLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const at=I.shadow,X=e.get(I);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ft,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=$,p++}else if(I.isSpotLight){const $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(nt).multiplyScalar(q),$.distance=it,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[_]=$;const at=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,at.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=at.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=ft,x++}_++}else if(I.isRectAreaLight){const $=t.get(I);$.color.copy(nt).multiplyScalar(q),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=$,m++}else if(I.isPointLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const at=I.shadow,X=e.get(I);X.shadowIntensity=at.intensity,X.shadowBias=at.bias,X.shadowNormalBias=at.normalBias,X.shadowRadius=at.radius,X.shadowMapSize=at.mapSize,X.shadowCameraNear=at.camera.near,X.shadowCameraFar=at.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ft,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=$,g++}else if(I.isHemisphereLight){const $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(q),$.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==y||F.numPointShadows!==v||F.numSpotShadows!==x||F.numSpotMaps!==P||F.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=y,F.numPointShadows=v,F.numSpotShadows=x,F.numSpotMaps=P,F.numLightProbes=L,i.version=IS++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const v=c[d];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Th(n){const t=new FS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function OS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Th(n),t.set(s,[a])):r>=o.length?(a=new Th(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class BS extends xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=I0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kS extends xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
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
}`;function VS(n,t,e){let i=new Cu;const s=new Ft,r=new Ft,o=new we,a=new BS({depthPacking:N0}),l=new kS,c={},u=e.maxTextureSize,f={[Gi]:sn,[sn]:Gi,[pi]:pi},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:zS,fragmentShader:HS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_p;let d=this.type;this.render=function(R,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(Oi),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const q=d!==li&&this.type===li,it=d===li&&this.type!==li;for(let ft=0,$=R.length;ft<$;ft++){const at=R[ft],X=at.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const St=X.getFrameExtents();if(s.multiply(St),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/St.x),s.x=r.x*St.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/St.y),s.y=r.y*St.y,X.mapSize.y=r.y)),X.map===null||q===!0||it===!0){const O=this.type!==li?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new gs(s.x,s.y,O),X.map.texture.name=at.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Y=X.getViewportCount();for(let O=0;O<Y;O++){const W=X.getViewport(O);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),nt.viewport(o),X.updateMatrices(at,O),i=X.getFrustum(),x(L,F,X.camera,at,this.type)}X.isPointLightShadow!==!0&&this.type===li&&y(X,F),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,I)};function y(R,L){const F=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,F,h,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,F,p,_,null)}function v(R,L,F,w){let b=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)b=I;else if(b=F.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const nt=b.uuid,q=L.uuid;let it=c[nt];it===void 0&&(it={},c[nt]=it);let ft=it[q];ft===void 0&&(ft=b.clone(),it[q]=ft,L.addEventListener("dispose",P)),b=ft}if(b.visible=L.visible,b.wireframe=L.wireframe,w===li?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:f[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const nt=n.properties.get(b);nt.light=F}return b}function x(R,L,F,w,b){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const q=t.update(R),it=R.material;if(Array.isArray(it)){const ft=q.groups;for(let $=0,at=ft.length;$<at;$++){const X=ft[$],St=it[X.materialIndex];if(St&&St.visible){const Y=v(R,St,w,b);R.onBeforeShadow(n,R,L,F,q,Y,X),n.renderBufferDirect(F,null,q,Y,R,X),R.onAfterShadow(n,R,L,F,q,Y,X)}}}else if(it.visible){const ft=v(R,it,w,b);R.onBeforeShadow(n,R,L,F,q,ft,null),n.renderBufferDirect(F,null,q,ft,R,null),R.onAfterShadow(n,R,L,F,q,ft,null)}}const nt=R.children;for(let q=0,it=nt.length;q<it;q++)x(nt[q],L,F,w,b)}function P(R){R.target.removeEventListener("dispose",P);for(const F in c){const w=c[F],b=R.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const GS={[sc]:rc,[oc]:cc,[ac]:uc,[sr]:lc,[rc]:sc,[cc]:oc,[uc]:ac,[lc]:sr};function WS(n,t){function e(){let H=!1;const At=new we;let Z=null;const ut=new we(0,0,0,0);return{setMask:function(Pt){Z!==Pt&&!H&&(n.colorMask(Pt,Pt,Pt,Pt),Z=Pt)},setLocked:function(Pt){H=Pt},setClear:function(Pt,wt,Wt,ne,oe){oe===!0&&(Pt*=ne,wt*=ne,Wt*=ne),At.set(Pt,wt,Wt,ne),ut.equals(At)===!1&&(n.clearColor(Pt,wt,Wt,ne),ut.copy(At))},reset:function(){H=!1,Z=null,ut.set(-1,0,0,0)}}}function i(){let H=!1,At=!1,Z=null,ut=null,Pt=null;return{setReversed:function(wt){if(At!==wt){const Wt=t.get("EXT_clip_control");At?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ne=Pt;Pt=null,this.setClear(ne)}At=wt},getReversed:function(){return At},setTest:function(wt){wt?mt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(wt){Z!==wt&&!H&&(n.depthMask(wt),Z=wt)},setFunc:function(wt){if(At&&(wt=GS[wt]),ut!==wt){switch(wt){case sc:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case lc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){H=wt},setClear:function(wt){Pt!==wt&&(At&&(wt=1-wt),n.clearDepth(wt),Pt=wt)},reset:function(){H=!1,Z=null,ut=null,Pt=null,At=!1}}}function s(){let H=!1,At=null,Z=null,ut=null,Pt=null,wt=null,Wt=null,ne=null,oe=null;return{setTest:function(Bt){H||(Bt?mt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Bt){At!==Bt&&!H&&(n.stencilMask(Bt),At=Bt)},setFunc:function(Bt,xe,qe){(Z!==Bt||ut!==xe||Pt!==qe)&&(n.stencilFunc(Bt,xe,qe),Z=Bt,ut=xe,Pt=qe)},setOp:function(Bt,xe,qe){(wt!==Bt||Wt!==xe||ne!==qe)&&(n.stencilOp(Bt,xe,qe),wt=Bt,Wt=xe,ne=qe)},setLocked:function(Bt){H=Bt},setClear:function(Bt){oe!==Bt&&(n.clearStencil(Bt),oe=Bt)},reset:function(){H=!1,At=null,Z=null,ut=null,Pt=null,wt=null,Wt=null,ne=null,oe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,v=null,x=null,P=null,R=null,L=new se(0,0,0),F=0,w=!1,b=null,I=null,nt=null,q=null,it=null;const ft=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,at=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=at>=1):X.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=at>=2);let St=null,Y={};const O=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),vt=new we().fromArray(O),K=new we().fromArray(W);function ot(H,At,Z,ut){const Pt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(H,wt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<Z;Wt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(At+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return wt}const yt={};yt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(sr),j(!1),tt(Lf),mt(n.CULL_FACE),A(Oi);function mt(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Dt(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function It(H,At){return f[H]!==At?(n.bindFramebuffer(H,At),f[H]=At,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=At),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=At),!0):!1}function $t(H,At){let Z=p,ut=!1;if(H){Z=h.get(At),Z===void 0&&(Z=[],h.set(At,Z));const Pt=H.textures;if(Z.length!==Pt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Wt=Pt.length;wt<Wt;wt++)Z[wt]=n.COLOR_ATTACHMENT0+wt;Z.length=Pt.length,ut=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ut=!0);ut&&n.drawBuffers(Z)}function jt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const C={[rs]:n.FUNC_ADD,[a0]:n.FUNC_SUBTRACT,[l0]:n.FUNC_REVERSE_SUBTRACT};C[c0]=n.MIN,C[u0]=n.MAX;const N={[f0]:n.ZERO,[h0]:n.ONE,[d0]:n.SRC_COLOR,[nc]:n.SRC_ALPHA,[x0]:n.SRC_ALPHA_SATURATE,[_0]:n.DST_COLOR,[m0]:n.DST_ALPHA,[p0]:n.ONE_MINUS_SRC_COLOR,[ic]:n.ONE_MINUS_SRC_ALPHA,[v0]:n.ONE_MINUS_DST_COLOR,[g0]:n.ONE_MINUS_DST_ALPHA,[y0]:n.CONSTANT_COLOR,[M0]:n.ONE_MINUS_CONSTANT_COLOR,[S0]:n.CONSTANT_ALPHA,[b0]:n.ONE_MINUS_CONSTANT_ALPHA};function A(H,At,Z,ut,Pt,wt,Wt,ne,oe,Bt){if(H===Oi){_===!0&&(Dt(n.BLEND),_=!1);return}if(_===!1&&(mt(n.BLEND),_=!0),H!==o0){if(H!==m||Bt!==w){if((d!==rs||x!==rs)&&(n.blendEquation(n.FUNC_ADD),d=rs,x=rs),Bt)switch(H){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,v=null,P=null,R=null,L.set(0,0,0),F=0,m=H,w=Bt}return}Pt=Pt||At,wt=wt||Z,Wt=Wt||ut,(At!==d||Pt!==x)&&(n.blendEquationSeparate(C[At],C[Pt]),d=At,x=Pt),(Z!==y||ut!==v||wt!==P||Wt!==R)&&(n.blendFuncSeparate(N[Z],N[ut],N[wt],N[Wt]),y=Z,v=ut,P=wt,R=Wt),(ne.equals(L)===!1||oe!==F)&&(n.blendColor(ne.r,ne.g,ne.b,oe),L.copy(ne),F=oe),m=H,w=!1}function ht(H,At){H.side===pi?Dt(n.CULL_FACE):mt(n.CULL_FACE);let Z=H.side===sn;At&&(Z=!Z),j(Z),H.blending===Js&&H.transparent===!1?A(Oi):A(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ut=H.stencilWrite;a.setTest(ut),ut&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(H){b!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),b=H)}function tt(H){H!==i0?(mt(n.CULL_FACE),H!==I&&(H===Lf?n.cullFace(n.BACK):H===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),I=H}function st(H){H!==nt&&($&&n.lineWidth(H),nt=H)}function gt(H,At,Z){H?(mt(n.POLYGON_OFFSET_FILL),(q!==At||it!==Z)&&(n.polygonOffset(At,Z),q=At,it=Z)):Dt(n.POLYGON_OFFSET_FILL)}function et(H){H?mt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function S(H){H===void 0&&(H=n.TEXTURE0+ft-1),St!==H&&(n.activeTexture(H),St=H)}function M(H,At,Z){Z===void 0&&(St===null?Z=n.TEXTURE0+ft-1:Z=St);let ut=Y[Z];ut===void 0&&(ut={type:void 0,texture:void 0},Y[Z]=ut),(ut.type!==H||ut.texture!==At)&&(St!==Z&&(n.activeTexture(Z),St=Z),n.bindTexture(H,At||yt[H]),ut.type=H,ut.texture=At)}function E(){const H=Y[St];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(H){vt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),vt.copy(H))}function Tt(H){K.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function qt(H,At){let Z=c.get(At);Z===void 0&&(Z=new WeakMap,c.set(At,Z));let ut=Z.get(H);ut===void 0&&(ut=n.getUniformBlockIndex(At,H.name),Z.set(H,ut))}function Gt(H,At){const ut=c.get(At).get(H);l.get(At)!==ut&&(n.uniformBlockBinding(At,ut,H.__bindingPointIndex),l.set(At,ut))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},St=null,Y={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,v=null,x=null,P=null,R=null,L=new se(0,0,0),F=0,w=!1,b=null,I=null,nt=null,q=null,it=null,vt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Dt,bindFramebuffer:It,drawBuffers:$t,useProgram:jt,setBlending:A,setMaterial:ht,setFlipSided:j,setCullFace:tt,setLineWidth:st,setPolygonOffset:gt,setScissorTest:et,activeTexture:S,bindTexture:M,unbindTexture:E,compressedTexImage2D:D,compressedTexImage3D:U,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Gt,texStorage2D:Nt,texStorage3D:pt,texSubImage2D:z,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:ct,scissor:Ot,viewport:Tt,reset:ee}}function wh(n,t,e,i){const s=XS(i);switch(e){case bp:return n*t;case Tp:return n*t;case wp:return n*t*2;case Ap:return n*t/s.components*s.byteLength;case bu:return n*t/s.components*s.byteLength;case Cp:return n*t*2/s.components*s.byteLength;case Eu:return n*t*2/s.components*s.byteLength;case Ep:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Tu:return n*t*4/s.components*s.byteLength;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:case vc:return Math.max(n,16)*Math.max(t,8)/4;case mc:case _c:return Math.max(n,8)*Math.max(t,8)/2;case xc:case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case Fc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rp:case Bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case kc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function XS(n){switch(n){case bi:case yp:return{byteLength:1,components:1};case Yr:case Mp:case so:return{byteLength:2,components:1};case Mu:case Su:return{byteLength:2,components:4};case ms:case yu:case mi:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $S(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return p?new OffscreenCanvas(S,M):_a("canvas")}function _(S,M,E){let D=1;const U=et(S);if((U.width>E||U.height>E)&&(D=E/Math.max(U.width,U.height)),D<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const z=Math.floor(D*U.width),_t=Math.floor(D*U.height);f===void 0&&(f=g(z,_t));const lt=M?g(z,_t):f;return lt.width=z,lt.height=_t,lt.getContext("2d").drawImage(S,0,0,z,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+z+"x"+_t+")."),lt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(S,M,E,D,U=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=M;if(M===n.RED&&(E===n.FLOAT&&(z=n.R32F),E===n.HALF_FLOAT&&(z=n.R16F),E===n.UNSIGNED_BYTE&&(z=n.R8)),M===n.RED_INTEGER&&(E===n.UNSIGNED_BYTE&&(z=n.R8UI),E===n.UNSIGNED_SHORT&&(z=n.R16UI),E===n.UNSIGNED_INT&&(z=n.R32UI),E===n.BYTE&&(z=n.R8I),E===n.SHORT&&(z=n.R16I),E===n.INT&&(z=n.R32I)),M===n.RG&&(E===n.FLOAT&&(z=n.RG32F),E===n.HALF_FLOAT&&(z=n.RG16F),E===n.UNSIGNED_BYTE&&(z=n.RG8)),M===n.RG_INTEGER&&(E===n.UNSIGNED_BYTE&&(z=n.RG8UI),E===n.UNSIGNED_SHORT&&(z=n.RG16UI),E===n.UNSIGNED_INT&&(z=n.RG32UI),E===n.BYTE&&(z=n.RG8I),E===n.SHORT&&(z=n.RG16I),E===n.INT&&(z=n.RG32I)),M===n.RGB_INTEGER&&(E===n.UNSIGNED_BYTE&&(z=n.RGB8UI),E===n.UNSIGNED_SHORT&&(z=n.RGB16UI),E===n.UNSIGNED_INT&&(z=n.RGB32UI),E===n.BYTE&&(z=n.RGB8I),E===n.SHORT&&(z=n.RGB16I),E===n.INT&&(z=n.RGB32I)),M===n.RGBA_INTEGER&&(E===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),E===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),E===n.UNSIGNED_INT&&(z=n.RGBA32UI),E===n.BYTE&&(z=n.RGBA8I),E===n.SHORT&&(z=n.RGBA16I),E===n.INT&&(z=n.RGBA32I)),M===n.RGB&&E===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),M===n.RGBA){const _t=U?Ba:ie.getTransfer(D);E===n.FLOAT&&(z=n.RGBA32F),E===n.HALF_FLOAT&&(z=n.RGBA16F),E===n.UNSIGNED_BYTE&&(z=_t===de?n.SRGB8_ALPHA8:n.RGBA8),E===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),E===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function x(S,M){let E;return S?M===null||M===ms||M===ar?E=n.DEPTH24_STENCIL8:M===mi?E=n.DEPTH32F_STENCIL8:M===Yr&&(E=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ms||M===ar?E=n.DEPTH_COMPONENT24:M===mi?E=n.DEPTH_COMPONENT32F:M===Yr&&(E=n.DEPTH_COMPONENT16),E}function P(S,M){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==$n?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function R(S){const M=S.target;M.removeEventListener("dispose",R),F(M),M.isVideoTexture&&u.delete(M)}function L(S){const M=S.target;M.removeEventListener("dispose",L),b(M)}function F(S){const M=i.get(S);if(M.__webglInit===void 0)return;const E=S.source,D=h.get(E);if(D){const U=D[M.__cacheKey];U.usedTimes--,U.usedTimes===0&&w(S),Object.keys(D).length===0&&h.delete(E)}i.remove(S)}function w(S){const M=i.get(S);n.deleteTexture(M.__webglTexture);const E=S.source,D=h.get(E);delete D[M.__cacheKey],o.memory.textures--}function b(S){const M=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(M.__webglFramebuffer[D]))for(let U=0;U<M.__webglFramebuffer[D].length;U++)n.deleteFramebuffer(M.__webglFramebuffer[D][U]);else n.deleteFramebuffer(M.__webglFramebuffer[D]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[D])}else{if(Array.isArray(M.__webglFramebuffer))for(let D=0;D<M.__webglFramebuffer.length;D++)n.deleteFramebuffer(M.__webglFramebuffer[D]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let D=0;D<M.__webglColorRenderbuffer.length;D++)M.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[D]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const E=S.textures;for(let D=0,U=E.length;D<U;D++){const z=i.get(E[D]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(E[D])}i.remove(S)}let I=0;function nt(){I=0}function q(){const S=I;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),I+=1,S}function it(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function ft(S,M){const E=i.get(S);if(S.isVideoTexture&&st(S),S.isRenderTargetTexture===!1&&S.version>0&&E.__version!==S.version){const D=S.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(E,S,M);return}}e.bindTexture(n.TEXTURE_2D,E.__webglTexture,n.TEXTURE0+M)}function $(S,M){const E=i.get(S);if(S.version>0&&E.__version!==S.version){K(E,S,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,E.__webglTexture,n.TEXTURE0+M)}function at(S,M){const E=i.get(S);if(S.version>0&&E.__version!==S.version){K(E,S,M);return}e.bindTexture(n.TEXTURE_3D,E.__webglTexture,n.TEXTURE0+M)}function X(S,M){const E=i.get(S);if(S.version>0&&E.__version!==S.version){ot(E,S,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+M)}const St={[dc]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},Y={[Dn]:n.NEAREST,[U0]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[cs]:n.LINEAR_MIPMAP_LINEAR},O={[O0]:n.NEVER,[G0]:n.ALWAYS,[B0]:n.LESS,[Lp]:n.LEQUAL,[k0]:n.EQUAL,[V0]:n.GEQUAL,[z0]:n.GREATER,[H0]:n.NOTEQUAL};function W(S,M){if(M.type===mi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$n||M.magFilter===il||M.magFilter===_o||M.magFilter===cs||M.minFilter===$n||M.minFilter===il||M.minFilter===_o||M.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,St[M.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,St[M.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,St[M.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Y[M.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==_o&&M.minFilter!==cs||M.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const E=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function vt(S,M){let E=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",R));const D=M.source;let U=h.get(D);U===void 0&&(U={},h.set(D,U));const z=it(M);if(z!==S.__cacheKey){U[z]===void 0&&(U[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,E=!0),U[z].usedTimes++;const _t=U[S.__cacheKey];_t!==void 0&&(U[S.__cacheKey].usedTimes--,_t.usedTimes===0&&w(M)),S.__cacheKey=z,S.__webglTexture=U[z].texture}return E}function K(S,M,E){let D=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(D=n.TEXTURE_3D);const U=vt(S,M),z=M.source;e.bindTexture(D,S.__webglTexture,n.TEXTURE0+E);const _t=i.get(z);if(z.version!==_t.__version||U===!0){e.activeTexture(n.TEXTURE0+E);const lt=ie.getPrimaries(ie.workingColorSpace),ct=M.colorSpace===Ii?null:ie.getPrimaries(M.colorSpace),Nt=M.colorSpace===Ii||lt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let pt=_(M.image,!1,s.maxTextureSize);pt=gt(M,pt);const Mt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type);let Ot=v(M.internalFormat,Mt,Lt,M.colorSpace,M.isVideoTexture);W(D,M);let Tt;const qt=M.mipmaps,Gt=M.isVideoTexture!==!0,ee=_t.__version===void 0||U===!0,H=z.dataReady,At=P(M,pt);if(M.isDepthTexture)Ot=x(M.format===lr,M.type),ee&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Mt,Lt,null));else if(M.isDataTexture)if(qt.length>0){Gt&&ee&&e.texStorage2D(n.TEXTURE_2D,At,Ot,qt[0].width,qt[0].height);for(let Z=0,ut=qt.length;Z<ut;Z++)Tt=qt[Z],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,Mt,Lt,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Ot,Tt.width,Tt.height,0,Mt,Lt,Tt.data);M.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(n.TEXTURE_2D,At,Ot,pt.width,pt.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Mt,Lt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Mt,Lt,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ot,qt[0].width,qt[0].height,pt.depth);for(let Z=0,ut=qt.length;Z<ut;Z++)if(Tt=qt[Z],M.format!==wn)if(Mt!==null)if(Gt){if(H)if(M.layerUpdates.size>0){const Pt=wh(Tt.width,Tt.height,M.format,M.type);for(const wt of M.layerUpdates){const Wt=Tt.data.subarray(wt*Pt/Tt.data.BYTES_PER_ELEMENT,(wt+1)*Pt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,wt,Tt.width,Tt.height,1,Mt,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,pt.depth,Mt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ot,Tt.width,Tt.height,pt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Tt.width,Tt.height,pt.depth,Mt,Lt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ot,Tt.width,Tt.height,pt.depth,0,Mt,Lt,Tt.data)}else{Gt&&ee&&e.texStorage2D(n.TEXTURE_2D,At,Ot,qt[0].width,qt[0].height);for(let Z=0,ut=qt.length;Z<ut;Z++)Tt=qt[Z],M.format!==wn?Mt!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,Mt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?H&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Tt.width,Tt.height,Mt,Lt,Tt.data):e.texImage2D(n.TEXTURE_2D,Z,Ot,Tt.width,Tt.height,0,Mt,Lt,Tt.data)}else if(M.isDataArrayTexture)if(Gt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ot,pt.width,pt.height,pt.depth),H)if(M.layerUpdates.size>0){const Z=wh(pt.width,pt.height,M.format,M.type);for(const ut of M.layerUpdates){const Pt=pt.data.subarray(ut*Z/pt.data.BYTES_PER_ELEMENT,(ut+1)*Z/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,pt.width,pt.height,1,Mt,Lt,Pt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Mt,Lt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,Mt,Lt,pt.data);else if(M.isData3DTexture)Gt?(ee&&e.texStorage3D(n.TEXTURE_3D,At,Ot,pt.width,pt.height,pt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Mt,Lt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,Mt,Lt,pt.data);else if(M.isFramebufferTexture){if(ee)if(Gt)e.texStorage2D(n.TEXTURE_2D,At,Ot,pt.width,pt.height);else{let Z=pt.width,ut=pt.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Ot,Z,ut,0,Mt,Lt,null),Z>>=1,ut>>=1}}else if(qt.length>0){if(Gt&&ee){const Z=et(qt[0]);e.texStorage2D(n.TEXTURE_2D,At,Ot,Z.width,Z.height)}for(let Z=0,ut=qt.length;Z<ut;Z++)Tt=qt[Z],Gt?H&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Mt,Lt,Tt):e.texImage2D(n.TEXTURE_2D,Z,Ot,Mt,Lt,Tt);M.generateMipmaps=!1}else if(Gt){if(ee){const Z=et(pt);e.texStorage2D(n.TEXTURE_2D,At,Ot,Z.width,Z.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Lt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Lt,pt);m(M)&&d(D),_t.__version=z.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function ot(S,M,E){if(M.image.length!==6)return;const D=vt(S,M),U=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+E);const z=i.get(U);if(U.version!==z.__version||D===!0){e.activeTexture(n.TEXTURE0+E);const _t=ie.getPrimaries(ie.workingColorSpace),lt=M.colorSpace===Ii?null:ie.getPrimaries(M.colorSpace),ct=M.colorSpace===Ii||_t===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let ut=0;ut<6;ut++)!Nt&&!pt?Mt[ut]=_(M.image[ut],!0,s.maxCubemapSize):Mt[ut]=pt?M.image[ut].image:M.image[ut],Mt[ut]=gt(M,Mt[ut]);const Lt=Mt[0],Ot=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),qt=v(M.internalFormat,Ot,Tt,M.colorSpace),Gt=M.isVideoTexture!==!0,ee=z.__version===void 0||D===!0,H=U.dataReady;let At=P(M,Lt);W(n.TEXTURE_CUBE_MAP,M);let Z;if(Nt){Gt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,qt,Lt.width,Lt.height);for(let ut=0;ut<6;ut++){Z=Mt[ut].mipmaps;for(let Pt=0;Pt<Z.length;Pt++){const wt=Z[Pt];M.format!==wn?Ot!==null?Gt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt,0,0,wt.width,wt.height,Ot,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt,qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt,0,0,wt.width,wt.height,Ot,Tt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt,qt,wt.width,wt.height,0,Ot,Tt,wt.data)}}}else{if(Z=M.mipmaps,Gt&&ee){Z.length>0&&At++;const ut=et(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,qt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(pt){Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Mt[ut].width,Mt[ut].height,Ot,Tt,Mt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,qt,Mt[ut].width,Mt[ut].height,0,Ot,Tt,Mt[ut].data);for(let Pt=0;Pt<Z.length;Pt++){const Wt=Z[Pt].image[ut].image;Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt+1,0,0,Wt.width,Wt.height,Ot,Tt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt+1,qt,Wt.width,Wt.height,0,Ot,Tt,Wt.data)}}else{Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ot,Tt,Mt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,qt,Ot,Tt,Mt[ut]);for(let Pt=0;Pt<Z.length;Pt++){const wt=Z[Pt];Gt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt+1,0,0,Ot,Tt,wt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt+1,qt,Ot,Tt,wt.image[ut])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),z.__version=U.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function yt(S,M,E,D,U,z){const _t=r.convert(E.format,E.colorSpace),lt=r.convert(E.type),ct=v(E.internalFormat,_t,lt,E.colorSpace),Nt=i.get(M),pt=i.get(E);if(pt.__renderTarget=M,!Nt.__hasExternalTextures){const Mt=Math.max(1,M.width>>z),Lt=Math.max(1,M.height>>z);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?e.texImage3D(U,z,ct,Mt,Lt,M.depth,0,_t,lt,null):e.texImage2D(U,z,ct,Mt,Lt,0,_t,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,U,pt.__webglTexture,0,j(M)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,U,pt.__webglTexture,z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(S,M,E){if(n.bindRenderbuffer(n.RENDERBUFFER,S),M.depthBuffer){const D=M.depthTexture,U=D&&D.isDepthTexture?D.type:null,z=x(M.stencilBuffer,U),_t=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=j(M);tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,z,M.width,M.height):E?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,S)}else{const D=M.textures;for(let U=0;U<D.length;U++){const z=D[U],_t=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),ct=v(z.internalFormat,_t,lt,z.colorSpace),Nt=j(M);E&&tt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ct,M.width,M.height):tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,ct,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ct,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(M.depthTexture);D.__renderTarget=M,(!D.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft(M.depthTexture,0);const U=D.__webglTexture,z=j(M);if(M.depthTexture.format===Qs)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(M.depthTexture.format===lr)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function It(S){const M=i.get(S),E=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){const D=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),D){const U=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,D.removeEventListener("dispose",U)};D.addEventListener("dispose",U),M.__depthDisposeCallback=U}M.__boundDepthTexture=D}if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");Dt(M.__webglFramebuffer,S)}else if(E){M.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[D]),M.__webglDepthbuffer[D]===void 0)M.__webglDepthbuffer[D]=n.createRenderbuffer(),mt(M.__webglDepthbuffer[D],S,!1);else{const U=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),mt(M.__webglDepthbuffer,S,!1);else{const D=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,U)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(S,M,E){const D=i.get(S);M!==void 0&&yt(D.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),E!==void 0&&It(S)}function jt(S){const M=S.texture,E=i.get(S),D=i.get(M);S.addEventListener("dispose",L);const U=S.textures,z=S.isWebGLCubeRenderTarget===!0,_t=U.length>1;if(_t||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=M.version,o.memory.textures++),z){E.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){E.__webglFramebuffer[lt]=[];for(let ct=0;ct<M.mipmaps.length;ct++)E.__webglFramebuffer[lt][ct]=n.createFramebuffer()}else E.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){E.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)E.__webglFramebuffer[lt]=n.createFramebuffer()}else E.__webglFramebuffer=n.createFramebuffer();if(_t)for(let lt=0,ct=U.length;lt<ct;lt++){const Nt=i.get(U[lt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&tt(S)===!1){E.__webglMultisampledFramebuffer=n.createFramebuffer(),E.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let lt=0;lt<U.length;lt++){const ct=U[lt];E.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,E.__webglColorRenderbuffer[lt]);const Nt=r.convert(ct.format,ct.colorSpace),pt=r.convert(ct.type),Mt=v(ct.internalFormat,Nt,pt,ct.colorSpace,S.isXRRenderTarget===!0),Lt=j(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Mt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,E.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(E.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(E.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),W(n.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)yt(E.__webglFramebuffer[lt][ct],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ct);else yt(E.__webglFramebuffer[lt],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let lt=0,ct=U.length;lt<ct;lt++){const Nt=U[lt],pt=i.get(Nt);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),W(n.TEXTURE_2D,Nt),yt(E.__webglFramebuffer,S,Nt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Nt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(lt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,D.__webglTexture),W(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)yt(E.__webglFramebuffer[ct],S,M,n.COLOR_ATTACHMENT0,lt,ct);else yt(E.__webglFramebuffer,S,M,n.COLOR_ATTACHMENT0,lt,0);m(M)&&d(lt),e.unbindTexture()}S.depthBuffer&&It(S)}function C(S){const M=S.textures;for(let E=0,D=M.length;E<D;E++){const U=M[E];if(m(U)){const z=y(S),_t=i.get(U).__webglTexture;e.bindTexture(z,_t),d(z),e.unbindTexture()}}}const N=[],A=[];function ht(S){if(S.samples>0){if(tt(S)===!1){const M=S.textures,E=S.width,D=S.height;let U=n.COLOR_BUFFER_BIT;const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(S),lt=M.length>1;if(lt)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ct]);const Nt=i.get(M[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,E,D,0,0,E,D,U,n.NEAREST),l===!0&&(N.length=0,A.length=0,N.push(n.COLOR_ATTACHMENT0+ct),S.depthBuffer&&S.resolveDepthBuffer===!1&&(N.push(z),A.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ct]);const Nt=i.get(M[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const M=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function j(S){return Math.min(s.maxSamples,S.samples)}function tt(S){const M=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(S){const M=o.render.frame;u.get(S)!==M&&(u.set(S,M),S.update())}function gt(S,M){const E=S.colorSpace,D=S.format,U=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||E!==ur&&E!==Ii&&(ie.getTransfer(E)===de?(D!==wn||U!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",E)),M}function et(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=$,this.setTexture3D=at,this.setTextureCube=X,this.rebindTextures=$t,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=tt}function qS(n,t){function e(i,s=Ii){let r;const o=ie.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yp)return n.BYTE;if(i===Mp)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===bp)return n.ALPHA;if(i===Ep)return n.RGB;if(i===wn)return n.RGBA;if(i===Tp)return n.LUMINANCE;if(i===wp)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Ap)return n.RED;if(i===bu)return n.RED_INTEGER;if(i===Cp)return n.RG;if(i===Eu)return n.RG_INTEGER;if(i===Tu)return n.RGBA_INTEGER;if(i===Zo||i===Jo||i===Qo||i===ta)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===Mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===yc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Uc||i===Ic||i===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===Fc||i===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rp||i===Bc||i===kc||i===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class YS extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class us extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZS=`
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

}`;class JS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:jS,fragmentShader:ZS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends fr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new JS,m=e.getContextAttributes();let d=null,y=null;const v=[],x=[],P=new Ft;let R=null;const L=new gn;L.viewport=new we;const F=new gn;F.viewport=new we;const w=[L,F],b=new YS;let I=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=v[K];return ot===void 0&&(ot=new Dl,v[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=v[K];return ot===void 0&&(ot=new Dl,v[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=v[K];return ot===void 0&&(ot=new Dl,v[K]=ot),ot.getHandSpace()};function q(K){const ot=x.indexOf(K.inputSource);if(ot===-1)return;const yt=v[ot];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||o),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function it(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",ft);for(let K=0;K<v.length;K++){const ot=x[K];ot!==null&&(x[K]=null,v[K].disconnect(ot))}I=null,nt=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,s=null,y=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",it),s.addEventListener("inputsourceschange",ft),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gs(p.framebufferWidth,p.framebufferHeight,{format:wn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,yt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?lr:Qs,yt=m.stencil?ar:ms);const Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new gs(h.textureWidth,h.textureHeight,{format:wn,type:bi,depthTexture:new Wp(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ft(K){for(let ot=0;ot<K.removed.length;ot++){const yt=K.removed[ot],mt=x.indexOf(yt);mt>=0&&(x[mt]=null,v[mt].disconnect(yt))}for(let ot=0;ot<K.added.length;ot++){const yt=K.added[ot];let mt=x.indexOf(yt);if(mt===-1){for(let It=0;It<v.length;It++)if(It>=x.length){x.push(yt),mt=It;break}else if(x[It]===null){x[It]=yt,mt=It;break}if(mt===-1)break}const Dt=v[mt];Dt&&Dt.connect(yt)}}const $=new B,at=new B;function X(K,ot,yt){$.setFromMatrixPosition(ot.matrixWorld),at.setFromMatrixPosition(yt.matrixWorld);const mt=$.distanceTo(at),Dt=ot.projectionMatrix.elements,It=yt.projectionMatrix.elements,$t=Dt[14]/(Dt[10]-1),jt=Dt[14]/(Dt[10]+1),C=(Dt[9]+1)/Dt[5],N=(Dt[9]-1)/Dt[5],A=(Dt[8]-1)/Dt[0],ht=(It[8]+1)/It[0],j=$t*A,tt=$t*ht,st=mt/(-A+ht),gt=st*-A;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(st),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const et=$t+st,S=jt+st,M=j-gt,E=tt+(mt-gt),D=C*jt/S*et,U=N*jt/S*et;K.projectionMatrix.makePerspective(M,E,D,U,et,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function St(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,yt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),b.near=F.near=L.near=ot,b.far=F.far=L.far=yt,(I!==b.near||nt!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,nt=b.far),L.layers.mask=K.layers.mask|2,F.layers.mask=K.layers.mask|4,b.layers.mask=L.layers.mask|F.layers.mask;const mt=K.parent,Dt=b.cameras;St(b,mt);for(let It=0;It<Dt.length;It++)St(Dt[It],mt);Dt.length===2?X(b,L,F):b.projectionMatrix.copy(L.projectionMatrix),Y(K,b,mt)};function Y(K,ot,yt){yt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let O=null;function W(K,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let mt=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let It=0;It<yt.length;It++){const $t=yt[It];let jt=null;if(p!==null)jt=p.getViewport($t);else{const N=f.getViewSubImage(h,$t);jt=N.viewport,It===0&&(t.setRenderTargetTextures(y,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(y))}let C=w[It];C===void 0&&(C=new gn,C.layers.enable(It),C.viewport=new we,w[It]=C),C.matrix.fromArray($t.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray($t.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(jt.x,jt.y,jt.width,jt.height),It===0&&(b.matrix.copy(C.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(C)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const It=f.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let yt=0;yt<v.length;yt++){const mt=x[yt],Dt=v[yt];mt!==null&&Dt!==void 0&&Dt.update(mt,ot,c||o)}O&&O(K,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const vt=new Vp;vt.setAnimationLoop(W),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const ts=new Nn,tb=new Se;function eb(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,kp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,ts.copy(x),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(ts)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(y,P);const R=t.render.frame;r[y.id]!==R&&(h(y),r[y.id]=R)}function u(y){const v=f();y.__bindingPointIndex=v;const x=n.createBuffer(),P=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=s[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,L=x.length;R<L;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,b=F.length;w<b;w++){const I=F[w];if(p(I,R,w,P)===!0){const nt=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let it=0;for(let ft=0;ft<q.length;ft++){const $=q[ft],at=_($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,nt+it,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,it),it+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,nt,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,x,P){const R=y.value,L=v+"_"+x;if(P[L]===void 0)return typeof R=="number"||typeof R=="boolean"?P[L]=R:P[L]=R.clone(),!0;{const F=P[L];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[L]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(y){const v=y.uniforms;let x=0;const P=16;for(let L=0,F=v.length;L<F;L++){const w=Array.isArray(v[L])?v[L]:[v[L]];for(let b=0,I=w.length;b<I;b++){const nt=w[b],q=Array.isArray(nt.value)?nt.value:[nt.value];for(let it=0,ft=q.length;it<ft;it++){const $=q[it],at=_($),X=x%P,St=X%at.boundary,Y=X+St;x+=St,Y!==0&&P-Y<at.storage&&(x+=P-Y),nt.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=x,x+=at.storage}}}const R=x%P;return R>0&&(x+=P-R),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class ib{constructor(t={}){const{canvas:e=X0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let P=!1,R=0,L=0,F=null,w=-1,b=null;const I=new we,nt=new we;let q=null;const it=new se(0);let ft=0,$=e.width,at=e.height,X=1,St=null,Y=null;const O=new we(0,0,$,at),W=new we(0,0,$,at);let vt=!1;const K=new Cu;let ot=!1,yt=!1;const mt=new Se,Dt=new Se,It=new B,$t=new we,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function N(){return F===null?X:1}let A=i;function ht(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xu}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),A===null){const V="webgl2";if(A=ht(V,T),A===null)throw ht(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let j,tt,st,gt,et,S,M,E,D,U,z,_t,lt,ct,Nt,pt,Mt,Lt,Ot,Tt,qt,Gt,ee,H;function At(){j=new lM(A),j.init(),Gt=new qS(A,j),tt=new nM(A,j,t,Gt),st=new WS(A,j),tt.reverseDepthBuffer&&h&&st.buffers.depth.setReversed(!0),gt=new fM(A),et=new RS,S=new $S(A,j,st,et,tt,Gt,gt),M=new sM(x),E=new aM(x),D=new vv(A),ee=new tM(A,D),U=new cM(A,D,gt,ee),z=new dM(A,U,D,gt),Ot=new hM(A,tt,S),pt=new iM(et),_t=new CS(x,M,E,j,tt,ee,pt),lt=new eb(x,et),ct=new LS,Nt=new OS(j),Lt=new Qy(x,M,E,st,z,p,l),Mt=new VS(x,z,tt),H=new nb(A,gt,tt,st),Tt=new eM(A,j,gt),qt=new uM(A,j,gt),gt.programs=_t.programs,x.capabilities=tt,x.extensions=j,x.properties=et,x.renderLists=ct,x.shadowMap=Mt,x.state=st,x.info=gt}At();const Z=new QS(x,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize($,at,!1))},this.getSize=function(T){return T.set($,at)},this.setSize=function(T,V,J=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,at=V,e.width=Math.floor(T*X),e.height=Math.floor(V*X),J===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set($*X,at*X).floor()},this.setDrawingBufferSize=function(T,V,J){$=T,at=V,X=J,e.width=Math.floor(T*J),e.height=Math.floor(V*J),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,V,J,Q){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,V,J,Q),st.viewport(I.copy(O).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(W)},this.setScissor=function(T,V,J,Q){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,V,J,Q),st.scissor(nt.copy(W).multiplyScalar(X).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){st.setScissorTest(vt=T)},this.setOpaqueSort=function(T){St=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(T=!0,V=!0,J=!0){let Q=0;if(T){let G=!1;if(F!==null){const bt=F.texture.format;G=bt===Tu||bt===Eu||bt===bu}if(G){const bt=F.texture.type,Ut=bt===bi||bt===ms||bt===Yr||bt===ar||bt===Mu||bt===Su,kt=Lt.getClearColor(),zt=Lt.getClearAlpha(),Yt=kt.r,Zt=kt.g,Ht=kt.b;Ut?(g[0]=Yt,g[1]=Zt,g[2]=Ht,g[3]=zt,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Yt,_[1]=Zt,_[2]=Ht,_[3]=zt,A.clearBufferiv(A.COLOR,0,_))}else Q|=A.COLOR_BUFFER_BIT}V&&(Q|=A.DEPTH_BUFFER_BIT),J&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ct.dispose(),Nt.dispose(),et.dispose(),M.dispose(),E.dispose(),z.dispose(),ee.dispose(),H.dispose(),_t.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ys),Z.removeEventListener("sessionend",Ms),ti.stop()};function ut(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=gt.autoReset,V=Mt.enabled,J=Mt.autoUpdate,Q=Mt.needsUpdate,G=Mt.type;At(),gt.autoReset=T,Mt.enabled=V,Mt.autoUpdate=J,Mt.needsUpdate=Q,Mt.type=G}function wt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const V=T.target;V.removeEventListener("dispose",Wt),ne(V)}function ne(T){oe(T),et.remove(T)}function oe(T){const V=et.get(T).programs;V!==void 0&&(V.forEach(function(J){_t.releaseProgram(J)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,J,Q,G,bt){V===null&&(V=jt);const Ut=G.isMesh&&G.matrixWorld.determinant()<0,kt=Rm(T,V,J,Q,G);st.setMaterial(Q,Ut);let zt=J.index,Yt=1;if(Q.wireframe===!0){if(zt=U.getWireframeAttribute(J),zt===void 0)return;Yt=2}const Zt=J.drawRange,Ht=J.attributes.position;let re=Zt.start*Yt,ye=(Zt.start+Zt.count)*Yt;bt!==null&&(re=Math.max(re,bt.start*Yt),ye=Math.min(ye,(bt.start+bt.count)*Yt)),zt!==null?(re=Math.max(re,0),ye=Math.min(ye,zt.count)):Ht!=null&&(re=Math.max(re,0),ye=Math.min(ye,Ht.count));const be=ye-re;if(be<0||be===1/0)return;ee.setup(G,Q,kt,J,zt);let en,ae=Tt;if(zt!==null&&(en=D.get(zt),ae=qt,ae.setIndex(en)),G.isMesh)Q.wireframe===!0?(st.setLineWidth(Q.wireframeLinewidth*N()),ae.setMode(A.LINES)):ae.setMode(A.TRIANGLES);else if(G.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),st.setLineWidth(Vt*N()),G.isLineSegments?ae.setMode(A.LINES):G.isLineLoop?ae.setMode(A.LINE_LOOP):ae.setMode(A.LINE_STRIP)}else G.isPoints?ae.setMode(A.POINTS):G.isSprite&&ae.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ae.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,ei=G._multiDrawCounts,le=G._multiDrawCount,Mn=zt?D.get(zt).bytesPerElement:1,Ss=et.get(Q).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)Ss.setValue(A,"_gl_DrawID",rn),ae.render(Vt[rn]/Mn,ei[rn])}else if(G.isInstancedMesh)ae.renderInstances(re,be,G.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ei=Math.min(J.instanceCount,Vt);ae.renderInstances(re,be,ei)}else ae.render(re,be)};function Bt(T,V,J){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,co(T,V,J),T.side=Gi,T.needsUpdate=!0,co(T,V,J),T.side=pi):co(T,V,J)}this.compile=function(T,V,J=null){J===null&&(J=T),d=Nt.get(J),d.init(V),v.push(d),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),T!==J&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const Q=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const bt=G.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const kt=bt[Ut];Bt(kt,J,G),Q.add(kt)}else Bt(bt,J,G),Q.add(bt)}),v.pop(),d=null,Q},this.compileAsync=function(T,V,J=null){const Q=this.compile(T,V,J);return new Promise(G=>{function bt(){if(Q.forEach(function(Ut){et.get(Ut).currentProgram.isReady()&&Q.delete(Ut)}),Q.size===0){G(T);return}setTimeout(bt,10)}j.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xe=null;function qe(T){xe&&xe(T)}function ys(){ti.stop()}function Ms(){ti.start()}const ti=new Vp;ti.setAnimationLoop(qe),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(T){xe=T,Z.setAnimationLoop(T),T===null?ti.stop():ti.start()},Z.addEventListener("sessionstart",ys),Z.addEventListener("sessionend",Ms),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(V),V=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,F),d=Nt.get(T,v.length),d.init(V),v.push(d),Dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,ot=pt.init(this.clippingPlanes,yt),m=ct.get(T,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){const bt=x.xr.getDepthSensingMesh();bt!==null&&pr(bt,V,-1/0,x.sortObjects)}pr(T,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(St,Y),C=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,C&&Lt.addToRenderList(m,T),this.info.render.frame++,ot===!0&&pt.beginShadows();const J=d.state.shadowsArray;Mt.render(J,T,V),ot===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,G=m.transmissive;if(d.setupLights(),V.isArrayCamera){const bt=V.cameras;if(G.length>0)for(let Ut=0,kt=bt.length;Ut<kt;Ut++){const zt=bt[Ut];$u(Q,G,T,zt)}C&&Lt.render(T);for(let Ut=0,kt=bt.length;Ut<kt;Ut++){const zt=bt[Ut];ao(m,T,zt,zt.viewport)}}else G.length>0&&$u(Q,G,T,V),C&&Lt.render(T),ao(m,T,V);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(x,T,V),ee.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(d=v[v.length-1],ot===!0&&pt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pr(T,V,J,Q){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){Q&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const Ut=z.update(T),kt=T.material;kt.visible&&m.push(T,Ut,kt,J,$t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Ut=z.update(T),kt=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),$t.copy(Ut.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(kt)){const zt=Ut.groups;for(let Yt=0,Zt=zt.length;Yt<Zt;Yt++){const Ht=zt[Yt],re=kt[Ht.materialIndex];re&&re.visible&&m.push(T,Ut,re,J,$t.z,Ht)}}else kt.visible&&m.push(T,Ut,kt,J,$t.z,null)}}const bt=T.children;for(let Ut=0,kt=bt.length;Ut<kt;Ut++)pr(bt[Ut],V,J,Q)}function ao(T,V,J,Q){const G=T.opaque,bt=T.transmissive,Ut=T.transparent;d.setupLightsView(J),ot===!0&&pt.setGlobalState(x.clippingPlanes,J),Q&&st.viewport(I.copy(Q)),G.length>0&&lo(G,V,J),bt.length>0&&lo(bt,V,J),Ut.length>0&&lo(Ut,V,J),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function $u(T,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new gs(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?so:bi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const bt=d.state.transmissionRenderTarget[Q.id],Ut=Q.viewport||I;bt.setSize(Ut.z,Ut.w);const kt=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(it),ft=x.getClearAlpha(),ft<1&&x.setClearColor(16777215,.5),x.clear(),C&&Lt.render(J);const zt=x.toneMapping;x.toneMapping=Bi;const Yt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),ot===!0&&pt.setGlobalState(x.clippingPlanes,Q),lo(T,J,Q),S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt),j.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ht=0,re=V.length;Ht<re;Ht++){const ye=V[Ht],be=ye.object,en=ye.geometry,ae=ye.material,Vt=ye.group;if(ae.side===pi&&be.layers.test(Q.layers)){const ei=ae.side;ae.side=sn,ae.needsUpdate=!0,qu(be,J,Q,en,ae,Vt),ae.side=ei,ae.needsUpdate=!0,Zt=!0}}Zt===!0&&(S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt))}x.setRenderTarget(kt),x.setClearColor(it,ft),Yt!==void 0&&(Q.viewport=Yt),x.toneMapping=zt}function lo(T,V,J){const Q=V.isScene===!0?V.overrideMaterial:null;for(let G=0,bt=T.length;G<bt;G++){const Ut=T[G],kt=Ut.object,zt=Ut.geometry,Yt=Q===null?Ut.material:Q,Zt=Ut.group;kt.layers.test(J.layers)&&qu(kt,V,J,zt,Yt,Zt)}}function qu(T,V,J,Q,G,bt){T.onBeforeRender(x,V,J,Q,G,bt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,V,J,Q,T,bt),G.transparent===!0&&G.side===pi&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,x.renderBufferDirect(J,V,Q,G,T,bt),G.side=Gi,G.needsUpdate=!0,x.renderBufferDirect(J,V,Q,G,T,bt),G.side=pi):x.renderBufferDirect(J,V,Q,G,T,bt),T.onAfterRender(x,V,J,Q,G,bt)}function co(T,V,J){V.isScene!==!0&&(V=jt);const Q=et.get(T),G=d.state.lights,bt=d.state.shadowsArray,Ut=G.state.version,kt=_t.getParameters(T,G.state,bt,V,J),zt=_t.getProgramCacheKey(kt);let Yt=Q.programs;Q.environment=T.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(T.isMeshStandardMaterial?E:M).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Wt),Yt=new Map,Q.programs=Yt);let Zt=Yt.get(zt);if(Zt!==void 0){if(Q.currentProgram===Zt&&Q.lightsStateVersion===Ut)return Ku(T,kt),Zt}else kt.uniforms=_t.getUniforms(T),T.onBeforeCompile(kt,x),Zt=_t.acquireProgram(kt,zt),Yt.set(zt,Zt),Q.uniforms=kt.uniforms;const Ht=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=pt.uniform),Ku(T,kt),Q.needsLights=Lm(T),Q.lightsStateVersion=Ut,Q.needsLights&&(Ht.ambientLightColor.value=G.state.ambient,Ht.lightProbe.value=G.state.probe,Ht.directionalLights.value=G.state.directional,Ht.directionalLightShadows.value=G.state.directionalShadow,Ht.spotLights.value=G.state.spot,Ht.spotLightShadows.value=G.state.spotShadow,Ht.rectAreaLights.value=G.state.rectArea,Ht.ltc_1.value=G.state.rectAreaLTC1,Ht.ltc_2.value=G.state.rectAreaLTC2,Ht.pointLights.value=G.state.point,Ht.pointLightShadows.value=G.state.pointShadow,Ht.hemisphereLights.value=G.state.hemi,Ht.directionalShadowMap.value=G.state.directionalShadowMap,Ht.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ht.spotShadowMap.value=G.state.spotShadowMap,Ht.spotLightMatrix.value=G.state.spotLightMatrix,Ht.spotLightMap.value=G.state.spotLightMap,Ht.pointShadowMap.value=G.state.pointShadowMap,Ht.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Zt,Q.uniformsList=null,Zt}function Yu(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=na.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ku(T,V){const J=et.get(T);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Rm(T,V,J,Q,G){V.isScene!==!0&&(V=jt),S.resetTextureUnits();const bt=V.fog,Ut=Q.isMeshStandardMaterial?V.environment:null,kt=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ur,zt=(Q.isMeshStandardMaterial?E:M).get(Q.envMap||Ut),Yt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ht=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,ye=!!J.morphAttributes.color;let be=Bi;Q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(be=x.toneMapping);const en=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ae=en!==void 0?en.length:0,Vt=et.get(Q),ei=d.state.lights;if(ot===!0&&(yt===!0||T!==b)){const fn=T===b&&Q.id===w;pt.setState(Q,T,fn)}let le=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ei.state.version||Vt.outputColorSpace!==kt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==zt||Q.fog===!0&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==pt.numPlanes||Vt.numIntersection!==pt.numIntersection)||Vt.vertexAlphas!==Yt||Vt.vertexTangents!==Zt||Vt.morphTargets!==Ht||Vt.morphNormals!==re||Vt.morphColors!==ye||Vt.toneMapping!==be||Vt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Vt.__version=Q.version);let Mn=Vt.currentProgram;le===!0&&(Mn=co(Q,V,G));let Ss=!1,rn=!1,mr=!1;const Ee=Mn.getUniforms(),Bn=Vt.uniforms;if(st.useProgram(Mn.program)&&(Ss=!0,rn=!0,mr=!0),Q.id!==w&&(w=Q.id,rn=!0),Ss||b!==T){st.buffers.depth.getReversed()?(mt.copy(T.projectionMatrix),q0(mt),Y0(mt),Ee.setValue(A,"projectionMatrix",mt)):Ee.setValue(A,"projectionMatrix",T.projectionMatrix),Ee.setValue(A,"viewMatrix",T.matrixWorldInverse);const Ti=Ee.map.cameraPosition;Ti!==void 0&&Ti.setValue(A,It.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Ee.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ee.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,rn=!0,mr=!0)}if(G.isSkinnedMesh){Ee.setOptional(A,G,"bindMatrix"),Ee.setOptional(A,G,"bindMatrixInverse");const fn=G.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ee.setValue(A,"boneTexture",fn.boneTexture,S))}G.isBatchedMesh&&(Ee.setOptional(A,G,"batchingTexture"),Ee.setValue(A,"batchingTexture",G._matricesTexture,S),Ee.setOptional(A,G,"batchingIdTexture"),Ee.setValue(A,"batchingIdTexture",G._indirectTexture,S),Ee.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(A,"batchingColorTexture",G._colorsTexture,S));const gr=J.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&Ot.update(G,J,Mn),(rn||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Ee.setValue(A,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=zt,Bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),rn&&(Ee.setValue(A,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Pm(Bn,mr),bt&&Q.fog===!0&&lt.refreshFogUniforms(Bn,bt),lt.refreshMaterialUniforms(Bn,Q,X,at,d.state.transmissionRenderTarget[T.id]),na.upload(A,Yu(Vt),Bn,S)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(na.upload(A,Yu(Vt),Bn,S),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ee.setValue(A,"center",G.center),Ee.setValue(A,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(A,"normalMatrix",G.normalMatrix),Ee.setValue(A,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const fn=Q.uniformsGroups;for(let Ti=0,wi=fn.length;Ti<wi;Ti++){const ju=fn[Ti];H.update(ju,Mn),H.bind(ju,Mn)}}return Mn}function Pm(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Lm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,V,J){et.get(T.texture).__webglTexture=V,et.get(T.depthTexture).__webglTexture=J;const Q=et.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const J=et.get(T);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,J=0){F=T,R=V,L=J;let Q=!0,G=null,bt=!1,Ut=!1;if(T){const zt=et.get(T);if(zt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(A.FRAMEBUFFER,null),Q=!1;else if(zt.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(zt.__hasExternalTextures)S.rebindTextures(T,et.get(T.texture).__webglTexture,et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ht=T.depthTexture;if(zt.__boundDepthTexture!==Ht){if(Ht!==null&&et.has(Ht)&&(T.width!==Ht.image.width||T.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ut=!0);const Zt=et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[V])?G=Zt[V][J]:G=Zt[V],bt=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?G=et.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?G=Zt[J]:G=Zt,I.copy(T.viewport),nt.copy(T.scissor),q=T.scissorTest}else I.copy(O).multiplyScalar(X).floor(),nt.copy(W).multiplyScalar(X).floor(),q=vt;if(st.bindFramebuffer(A.FRAMEBUFFER,G)&&Q&&st.drawBuffers(T,G),st.viewport(I),st.scissor(nt),st.setScissorTest(q),bt){const zt=et.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,J)}else if(Ut){const zt=et.get(T.texture),Yt=V||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,zt.__webglTexture,J||0,Yt)}w=-1},this.readRenderTargetPixels=function(T,V,J,Q,G,bt,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){st.bindFramebuffer(A.FRAMEBUFFER,kt);try{const zt=T.texture,Yt=zt.format,Zt=zt.type;if(!tt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Q&&J>=0&&J<=T.height-G&&A.readPixels(V,J,Q,G,Gt.convert(Yt),Gt.convert(Zt),bt)}finally{const zt=F!==null?et.get(F).__webglFramebuffer:null;st.bindFramebuffer(A.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,V,J,Q,G,bt,Ut){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){const zt=T.texture,Yt=zt.format,Zt=zt.type;if(!tt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-Q&&J>=0&&J<=T.height-G){st.bindFramebuffer(A.FRAMEBUFFER,kt);const Ht=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ht),A.bufferData(A.PIXEL_PACK_BUFFER,bt.byteLength,A.STREAM_READ),A.readPixels(V,J,Q,G,Gt.convert(Yt),Gt.convert(Zt),0);const re=F!==null?et.get(F).__webglFramebuffer:null;st.bindFramebuffer(A.FRAMEBUFFER,re);const ye=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await $0(A,ye,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ht),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,bt),A.deleteBuffer(Ht),A.deleteSync(ye),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,J=0){T.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-J),G=Math.floor(T.image.width*Q),bt=Math.floor(T.image.height*Q),Ut=V!==null?V.x:0,kt=V!==null?V.y:0;S.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Ut,kt,G,bt),st.unbindTexture()},this.copyTextureToTexture=function(T,V,J=null,Q=null,G=0){T.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],V=arguments[2],G=arguments[3]||0,J=null);let bt,Ut,kt,zt,Yt,Zt,Ht,re,ye;const be=T.isCompressedTexture?T.mipmaps[G]:T.image;J!==null?(bt=J.max.x-J.min.x,Ut=J.max.y-J.min.y,kt=J.isBox3?J.max.z-J.min.z:1,zt=J.min.x,Yt=J.min.y,Zt=J.isBox3?J.min.z:0):(bt=be.width,Ut=be.height,kt=be.depth||1,zt=0,Yt=0,Zt=0),Q!==null?(Ht=Q.x,re=Q.y,ye=Q.z):(Ht=0,re=0,ye=0);const en=Gt.convert(V.format),ae=Gt.convert(V.type);let Vt;V.isData3DTexture?(S.setTexture3D(V,0),Vt=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(S.setTexture2DArray(V,0),Vt=A.TEXTURE_2D_ARRAY):(S.setTexture2D(V,0),Vt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const ei=A.getParameter(A.UNPACK_ROW_LENGTH),le=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ss=A.getParameter(A.UNPACK_SKIP_ROWS),rn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,be.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,be.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,zt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Zt);const mr=T.isDataArrayTexture||T.isData3DTexture,Ee=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Bn=et.get(T),gr=et.get(V),fn=et.get(Bn.__renderTarget),Ti=et.get(gr.__renderTarget);st.bindFramebuffer(A.READ_FRAMEBUFFER,fn.__webglFramebuffer),st.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let wi=0;wi<kt;wi++)mr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,et.get(T).__webglTexture,G,Zt+wi),T.isDepthTexture?(Ee&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,et.get(V).__webglTexture,G,ye+wi),A.blitFramebuffer(zt,Yt,bt,Ut,Ht,re,bt,Ut,A.DEPTH_BUFFER_BIT,A.NEAREST)):Ee?A.copyTexSubImage3D(Vt,G,Ht,re,ye+wi,zt,Yt,bt,Ut):A.copyTexSubImage2D(Vt,G,Ht,re,ye+wi,zt,Yt,bt,Ut);st.bindFramebuffer(A.READ_FRAMEBUFFER,null),st.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ee?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Vt,G,Ht,re,ye,bt,Ut,kt,en,ae,be.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Vt,G,Ht,re,ye,bt,Ut,kt,en,be.data):A.texSubImage3D(Vt,G,Ht,re,ye,bt,Ut,kt,en,ae,be):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,G,Ht,re,bt,Ut,en,ae,be.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,G,Ht,re,be.width,be.height,en,be.data):A.texSubImage2D(A.TEXTURE_2D,G,Ht,re,bt,Ut,en,ae,be);A.pixelStorei(A.UNPACK_ROW_LENGTH,ei),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,le),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ss),A.pixelStorei(A.UNPACK_SKIP_IMAGES,rn),G===0&&V.generateMipmaps&&A.generateMipmap(Vt),st.unbindTexture()},this.copyTextureToTexture3D=function(T,V,J=null,Q=null,G=0){return T.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],V=arguments[3],G=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,J,Q,G)},this.initRenderTarget=function(T){et.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){R=0,L=0,F=null,st.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class sb extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new B;class va{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kp extends xs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bs;const br=new B,ks=new B,zs=new B,Hs=new Ft,Er=new Ft,jp=new Se,Bo=new B,Tr=new B,ko=new B,Ah=new Ft,Ul=new Ft,Ch=new Ft;class ob extends Fe{constructor(t=new Kp){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Fn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rb(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new va(i,3,0,!1)),Bs.setAttribute("uv",new va(i,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),jp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-zs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;zo(Bo.set(-.5,-.5,0),zs,o,ks,s,r),zo(Tr.set(.5,-.5,0),zs,o,ks,s,r),zo(ko.set(.5,.5,0),zs,o,ks,s,r),Ah.set(0,0),Ul.set(1,0),Ch.set(1,1);let a=t.ray.intersectTriangle(Bo,Tr,ko,!1,br);if(a===null&&(zo(Tr.set(-.5,.5,0),zs,o,ks,s,r),Ul.set(0,1),a=t.ray.intersectTriangle(Bo,ko,Tr,!1,br),a===null))return;const l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:_n.getInterpolation(br,Bo,Tr,ko,Ah,Ul,Ch,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zo(n,t,e,i,s,r){Hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Er.x=r*Hs.x-s*Hs.y,Er.y=s*Hs.x+r*Hs.y):Er.copy(Hs),n.copy(t),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(jp)}class Zp extends xs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rh=new Se,Wc=new wu,Ho=new ka,Vo=new B;class ab extends Fe{constructor(t=new Fn,e=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Rh.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);Vo.fromBufferAttribute(f,m),Ph(Vo,m,l,s,t,e,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)Vo.fromBufferAttribute(f,g),Ph(Vo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ph(n,t,e,i,s,r,o){const a=Wc.distanceSqToPoint(n);if(a<e){const l=new B;Wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class lb extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new B,s=[],r=[],o=[],a=new B,l=new Se;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ge(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pu extends Qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cb extends Pu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Go=new B,Il=new Lu,Nl=new Lu,Fl=new Lu;class ub extends Qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new B){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Il.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),Nl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Fl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Nl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Fl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Il.calc(l),Nl.calc(l),Fl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function fb(n,t){const e=1-n;return e*e*t}function hb(n,t){return 2*(1-n)*n*t}function db(n,t){return n*n*t}function Br(n,t,e,i){return fb(n,t)+hb(n,e)+db(n,i)}function pb(n,t){const e=1-n;return e*e*e*t}function mb(n,t){const e=1-n;return 3*e*e*n*t}function gb(n,t){return 3*(1-n)*n*n*t}function _b(n,t){return n*n*n*t}function kr(n,t,e,i,s){return pb(n,t)+mb(n,e)+gb(n,i)+_b(n,s)}class Jp extends Qn{constructor(t=new Ft,e=new Ft,i=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vb extends Qn{constructor(t=new B,e=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new B){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qp extends Qn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xb extends Qn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends Qn{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yb extends Qn{constructor(t=new B,e=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new B){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Lh(a,l.x,c.x,u.x,f.x),Lh(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:cb,CatmullRomCurve3:ub,CubicBezierCurve:Jp,CubicBezierCurve3:vb,EllipseCurve:Pu,LineCurve:Qp,LineCurve3:xb,QuadraticBezierCurve:tm,QuadraticBezierCurve3:yb,SplineCurve:em});class Mb extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}}class Uh extends Mb{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qp(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new tm(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Jp(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new em(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Pu(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nm extends Uh{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Uh().fromJSON(s))}return this}}const Sb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=im(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,h,p;if(i&&(r=Ab(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)f=n[g],h=n[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Kr(r,o,e,a,l,p,0),o}};function im(n,t,e,i,s){let r,o;if(s===Bb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ih(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ih(r,n[r],n[r+1],o);return o&&Va(o,o.next)&&(Zr(o),o=o.next),o}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Va(e,e.next)||Te(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Db(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Eb(n,i,s,r):bb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Tb(_s(n),t,e),Kr(n,t,e,i,s,r,2)):o===2&&wb(n,t,e,i,s,r):Kr(_s(n),t,e,i,s,r,1);break}}}function bb(n){const t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&qs(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Eb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Te(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,d=Xc(p,g,t,e,i),y=Xc(_,m,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=d&&x&&x.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,u,l,f,c,h,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,u,l,f,c,h,x.x,x.y)&&Te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,u,l,f,c,h,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,u,l,f,c,h,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Tb(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Va(s,r)&&sm(s,i,i.next,r)&&jr(s,r)&&jr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Zr(i),Zr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function wb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nb(o,a)){let l=rm(o,a);o=_s(o,o.next),l=_s(l,l.next),Kr(o,t,e,i,s,r,0),Kr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ab(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=im(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ib(c));for(s.sort(Cb),r=0;r<s.length;r++)e=Rb(s[r],e);return e}function Cb(n,t){return n.x-t.x}function Rb(n,t){const e=Pb(n,t);if(!e)return t;const i=rm(e,n);return _s(i,i.next),_s(e,e.next)}function Pb(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&qs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),jr(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Lb(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function Lb(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function Db(n,t,e,i){let s=n;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ub(s)}function Ub(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Xc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ib(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Nb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Fb(n,t)&&(jr(n,t)&&jr(t,n)&&Ob(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||Va(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Va(n,t){return n.x===t.x&&n.y===t.y}function sm(n,t,e,i){const s=Xo(Te(n,t,e)),r=Xo(Te(n,t,i)),o=Xo(Te(e,i,n)),a=Xo(Te(e,i,t));return!!(s!==r&&o!==a||s===0&&Wo(n,e,t)||r===0&&Wo(n,i,t)||o===0&&Wo(e,n,i)||a===0&&Wo(e,t,i))}function Wo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Xo(n){return n>0?1:n<0?-1:0}function Fb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function jr(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function Ob(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rm(n,t){const e=new $c(n.i,n.x,n.y),i=new $c(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ih(n,t,e,i){const s=new $c(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class zr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return zr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Nh(t),Fh(i,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Fh(i,e[l]);const a=Sb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Fh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Du extends Fn{constructor(t=new nm([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yn(s,3)),this.setAttribute("normal",new Yn(r,3)),this.setAttribute("uv",new Yn(o,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let p=h.shape;const g=h.holes;zr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const y=g[m];zr.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=zr.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const y=g[m];p=p.concat(y)}for(let m=0,d=p.length;m<d;m++){const y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,d=_.length;m<d;m++){const y=_[m],v=y[0]+f,x=y[1]+f,P=y[2]+f;i.push(v,x,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Du(i,t.curveSegments)}}function kb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Oh extends xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pp,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class om extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new Se,Bh=new B,kh=new B;class zb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cu,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kh),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hb extends zb{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends om{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vb extends om{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hh=new Se;class Gb{constructor(t,e,i=0,s=1/0){this.ray=new wu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(t,e=!0,i=[]){return qc(t,this,i,e),i.sort(Vh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)qc(t[s],this,i,e);return i.sort(Vh),i}}function Vh(n,t){return n.distance-t.distance}function qc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)qc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const wr=new B;function dn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;wr.copy(t),wr[i]=0,wr.normalize();const c=.5*o/(o+a),u=1-wr.angleTo(n)/l;return Math.sign(wr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Wb extends hr{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new B,l=new B,c=new B(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,g=new B,_=.5/s;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),h[d+0]=dn(g,l,"z","y",r,i),h[d+1]=1-dn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),h[d+0]=1-dn(g,l,"z","y",r,i),h[d+1]=1-dn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),h[d+0]=1-dn(g,l,"x","z",r,t),h[d+1]=dn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),h[d+0]=1-dn(g,l,"x","z",r,t),h[d+1]=1-dn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),h[d+0]=1-dn(g,l,"x","y",r,t),h[d+1]=1-dn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),h[d+0]=dn(g,l,"x","y",r,t),h[d+1]=1-dn(g,l,"y","x",r,e);break}}}const Kn=["U","R","F","D","L","B"],zi=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Xb=[3,4,5,0,1,2],Jr=["yellow","orange","green","white","red","blue"],Uu=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],ia=(n,t)=>`${n[0]},${n[1]},${n[2]}|${t[0]},${t[1]},${t[2]}`,xa=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],am=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],$b=(n,t,e)=>xa(n,am(t,e));function Gh(n,t){const e=xa(t,n),i=am(t,n);return[-i[0]+t[0]*e,-i[1]+t[1]*e,-i[2]+t[2]*e]}function lm(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function es(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(t=>{const e=/^([URFDLB])(2|2'|'|3)?$/.exec(t);if(!e)throw new Error(`Bad move "${t}"`);return e[2]?e[2]==="3"||e[2]==="'"?`${e[1]}'`:`${e[1]}2`:e[1]})}function ya(n){return[...n].reverse().map(lm)}const Bl=new Map;function Oe(n){return Bl.has(n)||Bl.set(n,qb(n)),Bl.get(n)}function qb(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const t=n-1,e=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of e)for(const l of e)for(const c of e){const u=[a,l,c],f=[];for(let _=0;_<3;_++){if(Math.abs(u[_])!==t)continue;const m=[0,0,0];m[_]=Math.sign(u[_]);const d=zi.findIndex(v=>v[0]===m[0]&&v[1]===m[1]&&v[2]===m[2]),y=i.length;i.push({pos:u,normal:m,face:d,cubie:r.length}),s.set(ia(u,m),y),f.push(y)}if(!f.length)continue;const h=_=>f.find(m=>i[m].normal[_]!==0);let p=f;if(f.length===3){const[_,m,d]=[h(1),h(0),h(2)];p=$b(i[_].normal,i[m].normal,i[d].normal)>0?[_,m,d]:[_,d,m]}else if(f.length===2){const _=h(1)??h(2);p=[_,f.find(m=>m!==_)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:u,slots:p,kind:g})}const o={};return Kn.forEach((a,l)=>{const c=zi[l],u=i.map((p,g)=>xa(p.pos,c)!==t?g:s.get(ia(Gh(p.pos,c),Gh(p.normal,c)))),f=u.map(p=>u[p]),h=u.map(p=>f[p]);o[a]=Int16Array.from(u),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(h)}),{n,m:t,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(ia(a,l)),faceGrid:Yb(n,t,s),layerOf:a=>r.map((l,c)=>xa(l.pos,zi[a])===t?c:-1).filter(l=>l>=0)}}function Yb(n,t,e){const i={},s=(o,a,l,c)=>e.get(ia([o,a,l],zi[c])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(c,u)=>o(l,u)));return i.U=r((o,a)=>s(-t+2*a,t,-t+2*o,0)),i.D=r((o,a)=>s(-t+2*a,-t,t-2*o,3)),i.F=r((o,a)=>s(-t+2*a,t-2*o,t,2)),i.B=r((o,a)=>s(t-2*a,t-2*o,-t,5)),i.R=r((o,a)=>s(t,t-2*o,t-2*a,1)),i.L=r((o,a)=>s(-t,t-2*o,-t+2*a,4)),i}function Kb(n){return Kn.flatMap(e=>[e,`${e}2`,`${e}'`])}function Ga(n){return Uint8Array.from(Oe(n).stickers,t=>t.face)}function oo(n,t){const e=new Uint8Array(n.length);for(let i=0;i<n.length;i++)e[t[i]]=n[i];return e}function jb(n,t,e){return oo(n,Oe(t).moves[e])}function Zb(n,t,e){const i=Oe(t);let s=n;for(const r of e)s=oo(s,i.moves[r]);return s}function Jb(n,t){const{faceGrid:e}=Oe(t);return Kn.every(i=>{const s=e[i].flat();return s.every(r=>n[r]===n[s[0]])})}function Qb(n,t=n===2?11:22,e=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<t;){const l=i[Math.floor(e()*i.length)];l!==o&&(n===3&&Xb[l]===o&&l===a||(s.push(Kn[l]+r[Math.floor(e()*3)]),a=o,o=l))}return s}function Wh(n){const t=new Array(n.length).fill(!1);let e=0;for(let i=0;i<n.length;i++){if(t[i])continue;let s=0;for(let r=i;!t[r];r=n[r])t[r]=!0,s++;e+=s-1}return e%2}function Xh(n,t){const e=Oe(t),i=[],s=new Map;e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(f=>e.stickers[f].face);s.set([...u].sort().join(),c)});const r=[],o=[],a=new Set;return e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(_=>n[_]),f=[...u].sort().join(),h=s.get(f),p=u.map(_=>Jr[_]).join("/");if(h===void 0||new Set(u).size!==u.length){i.push(`Impossible ${l.kind} with colours ${p}`);return}if(a.has(h)){i.push(`The ${e.cubies[h].slots.map(_=>Jr[e.stickers[_].face]).join("/")} ${l.kind} appears twice`);return}a.add(h);const g=e.cubies[h].slots.map(_=>e.stickers[_].face);if(l.kind==="corner"){let _=-1;for(let m=0;m<3;m++)u.every((d,y)=>u[(m+y)%3]===g[y])&&(_=m);if(_<0){i.push(`The corner with colours ${p} is a mirror image (impossible)`);return}r.push({pos:c,home:h,twist:_})}else o.push({pos:c,home:h,flip:u[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function cm(n){const t=Oe(2),e=new Array(6).fill(0);for(const f of n)e[f]++;if(e.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of t.cubies){const h=f.slots.map(p=>n[p]);if(new Set(h).size!==3)return{error:"A corner shows the same colour twice"};for(const p of h)for(const g of h)p!==g&&i[p].add(g)}const s=[];for(let f=0;f<6;f++){const h=[0,1,2,3,4,5].filter(p=>p!==f&&!i[f].has(p));if(h.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=h[0]}const r=t.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(h=>t.stickers[h].face===f)],a=new Array(6),[l,c,u]=[o(3),o(4),o(5)];return a[l]=3,a[c]=4,a[u]=5,a[s[l]]=0,a[s[c]]=1,a[s[u]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function Iu(n,t){const e=Oe(t);if(n.length!==e.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const i=[];if(t===2){const c=cm(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:u,errors:f}=Xh(c.state,2);return i.push(...f),!f.length&&u.reduce((h,p)=>h+p.twist,0)%3!==0&&i.push("One corner is twisted – this position cannot be solved"),{ok:!i.length,errors:i,canonical:c}}const s=new Array(6).fill(0);for(const c of n)s[c]++;if(s.forEach((c,u)=>{c!==9&&i.push(`${Jr[u]} appears ${c} times (needs 9)`)}),e.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==e.stickers[c.slots[0]].face&&i.push("Centre stickers are fixed and must keep their colour")}),i.length)return{ok:!1,errors:[...new Set(i)]};const{corners:r,edges:o,errors:a}=Xh(n,3);if(a.length)return{ok:!1,errors:a};r.reduce((c,u)=>c+u.twist,0)%3!==0&&i.push("One corner is twisted in place"),o.reduce((c,u)=>c+u.flip,0)%2!==0&&i.push("One edge is flipped in place");const l=(c,u)=>{const f=e.cubies.map((p,g)=>p.kind===u?g:-1).filter(p=>p>=0),h=new Array(f.length);return c.forEach(p=>{h[f.indexOf(p.pos)]=f.indexOf(p.home)}),h};return Wh(l(r,"corner"))!==Wh(l(o,"edge"))&&i.push("Two pieces are swapped – this position cannot be solved"),{ok:!i.length,errors:i}}const On=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},tE=4,eE=14,nE=.32,iE=.55,sE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0}},emits:["paint","layerturn"],setup(n,{expose:t,emit:e}){const i=n,s=e,r=te(null);let o,a,l;const c=new B(0,0,0);let u,f=0,h,p=[],g=[],_,m=!1;const d=Uu.map(E=>new Oh({color:E,roughness:.35,metalness:0})),y=new Oh({color:1382172,roughness:.6});function v(E,D){const U=E/2,z=new nm;return z.moveTo(-U+D,-U),z.lineTo(U-D,-U),z.quadraticCurveTo(U,-U,U,-U+D),z.lineTo(U,U-D),z.quadraticCurveTo(U,U,U-D,U),z.lineTo(-U+D,U),z.quadraticCurveTo(-U,U,-U,U-D),z.lineTo(-U,-U+D),z.quadraticCurveTo(-U,-U,-U+D,-U),new Du(z)}const x=v(.84,.12),P=new Wb(.98,.98,.98,3,.1);function R(){u&&a.remove(u),_=Oe(i.n),u=new us,p=[],g=new Array(_.slotCount);const E=new B(0,0,1);_.cubies.forEach(D=>{const U=new us;U.position.set(D.pos[0]/2,D.pos[1]/2,D.pos[2]/2),U.userData.home=U.position.clone(),U.add(new An(P,y)),D.slots.forEach(z=>{const _t=_.stickers[z],lt=new B(..._t.normal),ct=new An(x,d[_t.face]);ct.position.copy(lt).multiplyScalar(.492),ct.quaternion.setFromUnitVectors(E,lt),ct.userData.slot=z,U.add(ct),g[z]=ct}),p.push(U),u.add(U)}),a.add(u),L(i.state)}function L(E){if(E.length===g.length)for(let D=0;D<g.length;D++)g[D].material=d[E[D]]}function F(){const E=i.n===2?4.6:6.2;l.up.set(0,1,0),l.position.set(E*.75,E*.6,E),l.lookAt(c),b.vx=0,b.vy=0}function w(){if(!r.value||!o)return;const{clientWidth:E,clientHeight:D}=r.value;!E||!D||(o.setSize(E,D,!1),l.aspect=E/D,l.updateProjectionMatrix())}const b={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},I=new Map;let nt=0;const q=new ki,it=new B,ft=new B,$=new B;function at(E,D){const U=o.domElement.clientHeight||1,z=2*Math.PI/U;l.updateMatrixWorld(),it.setFromMatrixColumn(l.matrixWorld,0),ft.setFromMatrixColumn(l.matrixWorld,1),q.setFromAxisAngle(ft,-E*z),$.copy(l.position).sub(c).applyQuaternion(q),l.up.applyQuaternion(q),q.setFromAxisAngle(it.applyQuaternion(q),-D*z),$.applyQuaternion(q),l.up.applyQuaternion(q).normalize(),l.position.copy(c).add($),l.lookAt(c)}function X(E){$.copy(l.position).sub(c);const D=Math.min(eE,Math.max(tE,$.length()*E));l.position.copy(c).add($.setLength(D))}function St(E){var D,U;if(I.set(E.pointerId,{x:E.clientX,y:E.clientY}),(U=(D=o.domElement).setPointerCapture)==null||U.call(D,E.pointerId),I.size===1)Object.assign(b,{dragging:!0,lastX:E.clientX,lastY:E.clientY,lastT:performance.now(),vx:0,vy:0});else if(I.size===2){const[z,_t]=[...I.values()];nt=Math.hypot(z.x-_t.x,z.y-_t.y),b.dragging=!1}}function Y(E){if(!I.has(E.pointerId))return;if(I.set(E.pointerId,{x:E.clientX,y:E.clientY}),I.size===2){const[lt,ct]=[...I.values()],Nt=Math.hypot(lt.x-ct.x,lt.y-ct.y);nt&&Nt&&X(nt/Nt),nt=Nt;return}if(!b.dragging)return;const D=E.clientX-b.lastX,U=E.clientY-b.lastY,z=performance.now(),_t=Math.max(1,z-b.lastT);at(D,U),b.vx=.6*b.vx+.4*(D/_t*16),b.vy=.6*b.vy+.4*(U/_t*16),Object.assign(b,{lastX:E.clientX,lastY:E.clientY,lastT:z})}function O(E){var D,U;I.delete(E.pointerId),(U=(D=o.domElement).releasePointerCapture)==null||U.call(D,E.pointerId),I.size===0&&(b.dragging=!1,performance.now()-b.lastT>80&&(b.vx=0,b.vy=0))}function W(E){E.preventDefault(),X(Math.exp(E.deltaY*6e-4))}const vt={level:0,phase:0,last:0};function K(E){const D=Math.min(.1,(E-(vt.last||E))/1e3);vt.last=E;const U=i.drama&&!b.dragging&&I.size===0?1:0,z=D*.7;if(vt.level+=Math.max(-z,Math.min(z,U-vt.level)),vt.level<.001)return;vt.phase+=D*iE;const _t=vt.level*vt.level*(3-2*vt.level),lt=o.domElement.clientHeight||1,ct=nE*lt/(2*Math.PI)*D*_t;at(Math.cos(vt.phase)*ct,Math.sin(vt.phase)*ct)}function ot(){f=requestAnimationFrame(ot),!b.dragging&&(Math.abs(b.vx)>.02||Math.abs(b.vy)>.02)&&(at(b.vx,b.vy),b.vx*=.92,b.vy*=.92),K(performance.now()),$t(performance.now()),o.render(a,l)}const yt=E=>E<.5?4*E*E*E:1-(-2*E+2)**3/2;function mt(E,D,U=1){if(m||U>=10)return L(D),Promise.resolve();m=!0;const z=E.split(" ").map(ct=>{const Nt=Kn.indexOf(ct[0]),pt=ct.endsWith("2")?2:1,Mt=new us,Lt=_.layerOf(Nt).map(Ot=>p[Ot]);return u.add(Mt),Lt.forEach(Ot=>Mt.add(Ot)),{pivot:Mt,layer:Lt,quarters:pt,axis:new B(...zi[Nt]),angle:(ct.endsWith("'")?1:-1)*pt*(Math.PI/2)}}),_t=(z.some(ct=>ct.quarters===2)?420:280)/U,lt=performance.now();return new Promise(ct=>{const Nt=pt=>{const Mt=Math.min(1,(pt-lt)/_t);if(z.forEach(Lt=>Lt.pivot.setRotationFromAxisAngle(Lt.axis,Lt.angle*yt(Mt))),Mt<1){requestAnimationFrame(Nt);return}z.forEach(Lt=>{Lt.layer.forEach(Ot=>u.add(Ot)),u.remove(Lt.pivot)}),L(D),m=!1,ct()};requestAnimationFrame(Nt)})}let Dt=null;function It(){if(!Dt){const E=document.createElement("canvas");E.width=E.height=64;const D=E.getContext("2d"),U=D.createRadialGradient(32,32,0,32,32,32);U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.25,"rgba(255,255,255,0.6)"),U.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=U,D.fillRect(0,0,64,64),Dt=new lb(E)}return Dt}function $t(E){if(!u||m)return;const D=i.rumble*.045;if(D>0){const U=E/1e3;u.position.set(Math.sin(U*61)*D,Math.sin(U*73+1)*D,Math.sin(U*53+2)*D),u.rotation.z=Math.sin(U*47)*D*.25}else(u.position.lengthSq()>0||u.rotation.z!==0)&&(u.position.set(0,0,0),u.rotation.z=0)}const jt=E=>1+2.70158*(E-1)**3+1.70158*(E-1)**2;function C(){if(m||!u)return Promise.resolve();m=!0,u.position.set(0,0,0),u.rotation.z=0;const E=(Z,ut)=>Z+Math.random()*(ut-Z),D=p.map(Z=>{const ut=Z.userData.home.clone();return ut.lengthSq()<.01&&ut.set(E(-1,1),E(-1,1),E(-1,1)),ut.normalize().add(new B(E(-.4,.4),E(-.4,.4),E(-.4,.4))).normalize(),{g:Z,v:ut.multiplyScalar(E(3.2,7.5)),spin:new B(E(-9,9),E(-9,9),E(-9,9)),vanish:E(1.7,2.2)}}),U=520,z=new Float32Array(U*3),_t=new Float32Array(U*3),lt=Array.from({length:U},()=>{const Z=new B(E(-1,1),E(-1,1),E(-1,1)).normalize();return{p:new B,v:Z.multiplyScalar(E(2.5,11)),delay:E(0,.35),life:E(.6,1.7)}}),ct=new Fn;ct.setAttribute("position",new un(z,3)),ct.setAttribute("color",new un(_t,3));const Nt=new Zp({size:.26,map:It(),vertexColors:!0,transparent:!0,blending:ma,depthWrite:!1}),pt=new ab(ct,Nt);pt.frustumCulled=!1,a.add(pt);const Mt=new Kp({map:It(),color:16771504,blending:ma,transparent:!0,depthWrite:!1}),Lt=new ob(Mt);a.add(Lt);const Ot=3,Tt=D.map(({g:Z})=>Z.userData.home.length()*.14+E(0,.06)),qt=D.map(()=>new ki().setFromEuler(new Nn(E(-2,2),E(-2,2),E(-2,2))));let Gt=!1;const ee=Ot+1.4,H=performance.now();let At=H;return new Promise(Z=>{const ut=Pt=>{const wt=(Pt-H)/1e3,Wt=Math.min(.05,(Pt-At)/1e3);if(At=Pt,wt<Ot){D.forEach(Bt=>{if(wt>Bt.vanish){Bt.g.visible=!1;return}Bt.v.multiplyScalar(1-.3*Wt),Bt.v.y-=2.2*Wt,Bt.g.position.addScaledVector(Bt.v,Wt),Bt.g.rotation.x+=Bt.spin.x*Wt,Bt.g.rotation.y+=Bt.spin.y*Wt,Bt.g.rotation.z+=Bt.spin.z*Wt;const xe=Math.max(0,Math.min(1,(Bt.vanish-wt)/.4));Bt.g.scale.setScalar(xe)}),lt.forEach((Bt,xe)=>{const qe=wt-Bt.delay;if(qe<0||qe>Bt.life){_t[xe*3]=_t[xe*3+1]=_t[xe*3+2]=0;return}Bt.v.multiplyScalar(1-.9*Wt),Bt.v.y-=3.5*Wt,Bt.p.addScaledVector(Bt.v,Wt);const ys=qe/Bt.life,Ms=(1-ys)**1.4,ti=1*Ms,pr=Math.max(0,.95-.85*ys)*Ms,ao=Math.max(0,.55-.55*ys*1.6)*Ms;z[xe*3]=Bt.p.x,z[xe*3+1]=Bt.p.y,z[xe*3+2]=Bt.p.z,_t[xe*3]=ti,_t[xe*3+1]=pr,_t[xe*3+2]=ao}),ct.attributes.position.needsUpdate=!0,ct.attributes.color.needsUpdate=!0;const ne=Math.min(1,wt/.45);Lt.scale.setScalar(2+14*ne),Mt.opacity=(1-ne)**1.5;const oe=wt<.4?.14*(1-wt/.4):0;u.position.set(E(-oe,oe),E(-oe,oe),E(-oe,oe))}else{Gt||(Gt=!0,a.remove(pt),a.remove(Lt),ct.dispose(),Nt.dispose(),Mt.dispose(),u.position.set(0,0,0),D.forEach(({g:oe})=>{oe.position.copy(oe.userData.home),oe.scale.setScalar(1e-4),oe.visible=!0}));const ne=wt-Ot;D.forEach(({g:oe},Bt)=>{const xe=Math.max(0,Math.min(1,(ne-Tt[Bt])/.55)),qe=jt(xe);oe.scale.setScalar(Math.max(1e-4,qe)),oe.quaternion.copy(qt[Bt]).slerp(N,Math.min(1,xe*1.15))})}if(wt<ee){requestAnimationFrame(ut);return}D.forEach(({g:ne})=>{ne.position.copy(ne.userData.home),ne.rotation.set(0,0,0),ne.quaternion.identity(),ne.scale.setScalar(1),ne.visible=!0}),u.position.set(0,0,0),u.rotation.z=0,L(i.state),m=!1,Z()};requestAnimationFrame(ut)})}const N=new ki,A=new Gb;function ht(E,D){const U=o.domElement.getBoundingClientRect(),z=new Ft((E-U.left)/U.width*2-1,-((D-U.top)/U.height)*2+1);return A.setFromCamera(z,l),A.intersectObjects(g,!1)[0]}let j=null;function tt(E){j={x:E.clientX,y:E.clientY}}function st(E){if(!i.paintable||!j)return;const D=Math.hypot(E.clientX-j.x,E.clientY-j.y);if(j=null,D>5)return;const U=ht(E.clientX,E.clientY);U&&s("paint",U.object.userData.slot)}const gt=[["L","R"],["D","U"],["B","F"]];let et=0;function S(E,D,U){const z=_.stickers[E],_t=z.normal.findIndex(Z=>Z!==0),lt=[0,1,2].filter(Z=>Z!==_t);l.updateMatrixWorld();const ct=new B().setFromMatrixColumn(l.matrixWorld,0),Nt=new B().setFromMatrixColumn(l.matrixWorld,1),pt=Math.abs(ct.getComponent(lt[0]))>=Math.abs(ct.getComponent(lt[1]))?lt[0]:lt[1],Mt=U?lt.find(Z=>Z!==pt):pt,Lt=new B;Lt.setComponent(Mt,1);const Ot=new B(...z.pos).multiplyScalar(.5).add(new B(...z.normal).multiplyScalar(.5)),Tt=Lt.clone().cross(Ot),Gt=((U?Tt.dot(ct):-Tt.dot(Nt))>=0?1:-1)*D,ee=_.cubies[z.cubie].pos[Mt],[H,At]=gt[Mt];return ee===_.m?At+(Gt>0?"'":""):ee===-_.m?H+(Gt>0?"":"'"):`${At}${Gt>0?"":"'"} ${H}${Gt>0?"'":""}`}function M(E){if(i.paintable)return;const D=ht(E.clientX,E.clientY);if(!D||(E.preventDefault(),E.stopPropagation(),i.locked||m)||(et+=E.deltaY||E.deltaX,Math.abs(et)<40))return;const U=Math.sign(et);et=0,s("layerturn",S(D.object.userData.slot,U,E.altKey))}return Ua(()=>{o=new ib({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new sb,l=new gn(36,1,.1,100),a.add(new Vb(16777215,1.1));const E=new zh(16777215,2);E.position.set(5,8,6),a.add(E);const D=new zh(16777215,.8);D.position.set(-6,-3,-5),a.add(D),o.domElement.addEventListener("pointerdown",St),o.domElement.addEventListener("pointermove",Y),o.domElement.addEventListener("pointerup",O),o.domElement.addEventListener("pointercancel",O),o.domElement.addEventListener("wheel",W,{passive:!1}),o.domElement.addEventListener("pointerdown",tt),o.domElement.addEventListener("pointerup",st),r.value.addEventListener("wheel",M,{capture:!0,passive:!1}),R(),F(),w(),h=new ResizeObserver(w),h.observe(r.value),ot()}),no(()=>{cancelAnimationFrame(f),h==null||h.disconnect(),o==null||o.dispose()}),Ne(()=>i.n,()=>{R(),F()}),Ne(()=>i.state,E=>{m||L(E)}),t({animate:mt,resetView:F,explode:C}),(E,D)=>(xt(),Et("div",{ref_key:"host",ref:r,class:Ce(["cube-host",{painting:n.paintable}])},null,2))}},rE=On(sE,[["__scopeId","data-v-8c0f90ab"]]),mn={yellowCross:es("F R U R' U' F'"),sune:es("R U R' U R U2 R'"),antiSune:es("R U2 R' U' R U' R'"),cornerCycle:es("R' F R' B2 R F' R' B2 R2"),edgeCycle:es("R U' R U R U R U' R' U' R2"),tPerm:es("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:es("F R U' R' U' R U R' F' R U R' U' R' F R F'")},Vs=mn,oE={U:0,R:1,F:2,D:3,L:4,B:5};function um(n,t){return t.map(e=>{const i=n.moves[e],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:e,perm:i,inv:s,face:oE[e[0]]}})}const aE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],lE=["U","U2","U'","R","R2","R'","F","F2","F'"];function cE(n,t,e,i){const s=g=>g.join(","),r=s(t),o=s(e);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let c=[t],u=[e],f=0,h=0;const p=g=>{const _=[];for(let d=g;a.get(d).prev!==null;d=a.get(d).prev)_.push(a.get(d).move);_.reverse();const m=[];for(let d=g;l.get(d).next!==null;d=l.get(d).next)m.push(l.get(d).move);return[..._,...m].map(d=>n[d].name)};for(;f+h<i&&(c.length||u.length);)if(c.length&&(c.length<=u.length||!u.length)){const _=[];for(const m of c){const d=s(m),y=a.get(d);for(let v=0;v<n.length;v++){const x=n[v];if(x.face===y.face)continue;const P=m.map(L=>x.perm[L]),R=s(P);if(!a.has(R)){if(a.set(R,{prev:d,move:v,face:x.face}),l.has(R))return p(R);_.push(P)}}}c=_,f++}else{const _=[];for(const m of u){const d=s(m),y=l.get(d);for(let v=0;v<n.length;v++){const x=n[v];if(x.face===y.face)continue;const P=m.map(L=>x.inv[L]),R=s(P);if(!l.has(R)){if(l.set(R,{next:d,move:v,face:x.face}),a.has(R))return p(R);_.push(P)}}}u=_,h++}return null}function uE(n,t,e){const i=n.cubies[e].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>t[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const Nu=(n,t,e)=>n.cubies[e].slots.every(i=>t[i]===n.stickers[i].face);function Yc(n,t,e,i,s,r,o,a){const l=[];let c=t,u=[...e],f=[...i];for(;f.length;){let h=null;for(const p of f){if(p.cubies.every(y=>Nu(n,c,y))){h={target:p,moves:[]};break}const g=[...u,...p.cubies].flatMap(y=>n.cubies[y].slots),_=[...u.flatMap(y=>n.cubies[y].slots),...p.cubies.flatMap(y=>uE(n,c,y))],m=h?h.moves.length-1:a;if(m<1)continue;const d=cE(r,_,g,m);d&&(!h||d.length<h.moves.length)&&(h={target:p,moves:d})}if(!h)throw new Error("No solution found for a piece – is the cube state valid?");for(const p of h.moves)c=oo(c,n.moves[p]);l.push({label:o(h.target),moves:h.moves}),u=[...u,...h.target.cubies],f=f.filter(p=>p!==h.target)}return{state:c,steps:l}}function fE(n,t,e,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:t,moves:[]}]],a=new Set([r(t)]);if(i(t))return[];for(let l=0;l<=s;l++){const c=o[l];if(c)for(const u of c)for(const f of e){let h=u.state;for(const m of f.moves)h=oo(h,n.moves[m]);const p=r(h);if(a.has(p))continue;a.add(p);const g=l+f.moves.length,_={state:h,moves:[...u.moves,f.label]};if(i(h))return hE(_.moves,e);(o[g]||(o[g]=[])).push(_)}}return null}function hE(n,t){const e=new Map(t.map(i=>[i.label,i]));return n.map(i=>e.get(i))}const Ys=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],Tn=(n,t)=>({label:n,moves:t,isAlg:!0});function dE(n,t){const e=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}e.push({label:t(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&e.push({label:"Turn the top layer to line it up",moves:i}),e}const fm=Jr,Kc=n=>n[0].toUpperCase()+n.slice(1);function Ks(n,t,e,i,s){const r=fE(n,t,e,i);if(!r)throw new Error("Could not finish the last layer – is the cube state valid?");const o=dE(r,s);let a=t;for(const l of o)for(const c of l.moves)a=oo(a,n.moves[c]);return{state:a,steps:o}}const hm=n=>n.flatMap(t=>t.moves);function dm(n,t,e={}){const i=Iu(n,t);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return t===2?mE(n,i.canonical,e):pE(n,e)}catch(s){return{ok:!1,error:s.message}}}function sa(n,t,e){return n.cubies[t].slots.map(i=>e[n.stickers[i].face]).join("-")}function pE(n,t){const e=t.names||fm,i=Oe(3),s=um(i,aE),r=(P,R,L)=>i.cubies.findIndex(F=>F.pos[0]===P&&F.pos[1]===R&&F.pos[2]===L),o=[];let a=n;const l=(P,R)=>o.push({id:P,steps:R,moves:hm(R)}),c=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(P=>({cubies:[r(...P)]}));let u=Yc(i,a,[],c,e,s,P=>`${Kc(sa(i,P.cubies[0],e))} edge`,9);a=u.state,l("cross",u.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(P=>({cubies:P.map(R=>r(...R))})),h=c.flatMap(P=>P.cubies);u=Yc(i,a,h,f,e,s,P=>`${Kc(sa(i,P.cubies[0],e))} corner + ${sa(i,P.cubies[1],e)} edge`,11),a=u.state,l("f2l",u.steps);const p=i.cubies.map((P,R)=>({c:P,i:R})).filter(({c:P})=>P.pos[1]===2),g=p.filter(({c:P})=>P.kind==="edge").map(({c:P})=>P.slots[0]),_=p.filter(({c:P})=>P.kind==="corner").map(({i:P})=>P),m=i.stickers.map((P,R)=>P.face===0?R:-1).filter(P=>P>=0),d=P=>g.every(R=>P[R]===0),y=P=>m.every(R=>P[R]===0),v=P=>_.every(R=>Nu(i,P,R)),x=P=>i.stickers.every((R,L)=>P[L]===R.face);return u=Ks(i,a,[...Ys,Tn("yellow cross",mn.yellowCross)],d,()=>`Make the ${e[0]} cross`),a=u.state,l("ollCross",u.steps),u=Ks(i,a,[...Ys,Tn("sune",mn.sune),Tn("antisune",mn.antiSune)],y,P=>P.label==="sune"?`Sune: twist corners (${e[0]} face)`:`Anti-Sune: twist corners (${e[0]} face)`),a=u.state,l("ollFace",u.steps),u=Ks(i,a,[...Ys,Tn("corner cycle",mn.cornerCycle),Tn("corner cycle inverse",ya(mn.cornerCycle))],v,()=>"Cycle three corners into place"),a=u.state,l("pllCorners",u.steps),u=Ks(i,a,[...Ys,Tn("edge cycle",mn.edgeCycle),Tn("edge cycle inverse",ya(mn.edgeCycle))],x,()=>"Cycle three edges into place"),a=u.state,l("pllEdges",u.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(P=>P.moves)}}function mE(n,t,e){const i=Oe(2),s=um(i,lE),r=t.state,o=e.names||fm,a=[];t.map.forEach((d,y)=>{a[d]=o[y]});const l=(d,y,v)=>i.cubies.findIndex(x=>x.pos[0]===d&&x.pos[1]===y&&x.pos[2]===v),c=[];let u=r;const f=(d,y)=>c.push({id:d,steps:y,moves:hm(y)}),h=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(d=>({cubies:[l(...d)]}));let p=Yc(i,u,[l(-1,-1,-1)],h,a,s,d=>`${Kc(sa(i,d.cubies[0],a))} corner`,11);u=p.state,f("layer",p.steps);const g=i.stickers.map((d,y)=>d.face===0?y:-1).filter(d=>d>=0),_=d=>g.every(y=>d[y]===0),m=d=>i.stickers.every((y,v)=>d[v]===y.face);return p=Ks(i,u,[...Ys,Tn("sune",mn.sune),Tn("antisune",mn.antiSune)],_,d=>d.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),u=p.state,f("orient",p.steps),p=Ks(i,u,[...Ys,Tn("swap neighbours",mn.tPerm),Tn("swap diagonal",mn.yPerm)],m,d=>d.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),u=p.state,f("permute",p.steps),{ok:!0,n:2,stages:c,moves:c.flatMap(d=>d.moves)}}function gE(n,t){const e=Oe(t),i=Iu(n,t);if(!i.ok)return[];const s=t===2?i.canonical.state:n,r=u=>Nu(e,s,u),o=e.cubies.map((u,f)=>({c:u,i:f})),a=u=>o.filter(({c:f})=>u(f)).map(({i:f})=>f),l=e.stickers.every((u,f)=>u.face!==0||s[f]===0),c=e.stickers.every((u,f)=>s[f]===u.face);return t===2?[{id:"layer",done:a(u=>u.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:c}]:[{id:"cross",done:a(u=>u.pos[1]===-2&&u.kind==="edge").every(r)},{id:"f2l",done:a(u=>u.pos[1]<=0&&u.kind!=="center").every(r)},{id:"ollCross",done:a(u=>u.pos[1]===2&&u.kind==="edge").every(u=>s[e.cubies[u].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(u=>u.pos[1]===2&&u.kind==="corner").every(r)},{id:"pllEdges",done:c}]}const _E=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],vE=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other – they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first – learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],pm={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:Vs.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:Vs.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:Vs.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:Vs.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:Vs.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:Vs.tPerm}]};function jc(n,t){return pm[n].find(e=>e.id===t)}const rt=Ln({n:3,mode:"setup",editing:!1,brush:0,speed:1,playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",finale:localStorage.getItem("rubiks-solver.finale")==="1",countdown:0,exploding:!1,busy:!1,solution:null,pointer:0,solveError:"",moveCount:0}),Xe=fg(Ga(3));let Zc=null,ra=null,Cn=Promise.resolve();const Jc=new Set;function xE(n){Zc=n}function yE(n){ra=n}function ME(n){return Jc.add(n),()=>Jc.delete(n)}const er=Le(()=>Iu(Xe.value,rt.n)),Ma=Le(()=>Jb(Xe.value,rt.n)),SE=Le(()=>gE(Xe.value,rt.n));let oa=0;const bE=n=>new Promise(t=>setTimeout(t,n));async function EE(){const n=++oa;for(const t of[3,2,1]){if(n!==oa)return;rt.countdown=t,await bE(1e3)}if(n===oa){rt.countdown=0,rt.exploding=!0;try{await(ra==null?void 0:ra())}finally{rt.exploding=!1}}}function Qr(){oa++,rt.countdown=0}function Wa(){Qr(),rt.solution=null,rt.pointer=0,rt.solveError=""}function Fu(n){return Cn=Cn.then(()=>{Xe.value=n,Wa(),rt.moveCount=0}),Cn}function mm(n,t){return Cn=Cn.then(()=>{Xe.value=t,rt.n=n,rt.editing=!1,rt.brush=0,Wa(),rt.moveCount=0}),Cn}function $h(n){return mm(n,Ga(n))}function qh(){return Fu(Ga(rt.n))}function gm(){const n=Qb(rt.n);return Fu(Zb(Ga(rt.n),rt.n,n)).then(()=>n)}function _m(n,t=rt.brush){const e=Oe(rt.n);if(e.cubies[e.stickers[n].cubie].kind==="center"&&rt.n===3)return;const i=Uint8Array.from(Xe.value);i[n]=t,Xe.value=i,Wa()}function Xi(n,{animate:t=!0,fromSolution:e=!1}={}){return rt.exploding||(Cn=Cn.then(async()=>{const i=n.split(" ").reduce((s,r)=>jb(s,rt.n,r),Xe.value);rt.busy=!0;try{t&&Zc&&await Zc(n,i,rt.speed)}finally{rt.busy=!1}Xe.value=i,e||(Wa(),rt.moveCount++),Jc.forEach(s=>s(n))})),Cn}function Yh(n,t){return n.forEach(e=>Xi(e,t)),Cn}async function TE(){rt.solveError="",await new Promise(t=>setTimeout(t,20));const n=dm(Xe.value,rt.n);return n.ok?(rt.solution=n,rt.pointer=0,n):(rt.solution=null,rt.solveError=n.error,null)}function Sa(){const n=rt.solution;if(!n)return[];const t=[];return n.stages.forEach((e,i)=>{e.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>t.push({move:o,stage:i,step:r,index:a}))})}),t}async function $o(){Qr();const n=Sa();if(rt.pointer>=n.length)return;const t=n[rt.pointer];rt.pointer++,await Xi(t.move,{fromSolution:!0})}async function kl(){Qr();const n=Sa();rt.pointer<=0||(rt.pointer--,await Xi(lm(n[rt.pointer].move),{fromSolution:!0}))}const wE={class:"panel"},AE={class:"notation"},CE=["onClick"],RE={class:"lessons"},PE={class:"lesson-title"},LE={class:"goal"},DE={key:0,class:"tip"},UE={key:1,class:"alg"},IE=["onClick"],NE=["onClick"],FE={__name:"LearnPanel",setup(n){return(t,e)=>(xt(),Et("section",wE,[e[0]||(e[0]=k("h2",null,"Learn to solve",-1)),e[1]||(e[1]=k("h3",null,"Notation",-1)),k("ul",AE,[(xt(!0),Et(fe,null,Pe(dt(_E),i=>(xt(),Et("li",{key:i.move},[k("button",{onClick:s=>dt(Xi)(i.move)},Ct(i.move),9,CE),k("span",null,Ct(i.text),1)]))),128))]),(xt(!0),Et(fe,null,Pe(dt(vE),i=>(xt(),Et("details",{key:i.title,class:"concept"},[k("summary",null,Ct(i.title),1),(xt(!0),Et(fe,null,Pe(i.body,(s,r)=>(xt(),Et("p",{key:r},Ct(s),1))),128))]))),128)),k("h3",null,"The "+Ct(dt(rt).n)+"×"+Ct(dt(rt).n)+" method – layer by layer",1),k("ol",RE,[(xt(!0),Et(fe,null,Pe(dt(pm)[dt(rt).n],i=>(xt(),Et("li",{key:i.id},[k("div",PE,Ct(i.title),1),k("div",LE,"Goal: "+Ct(i.goal),1),k("p",null,Ct(i.concept),1),i.tip?(xt(),Et("p",DE,"💡 "+Ct(i.tip),1)):he("",!0),i.algorithm?(xt(),Et("div",UE,[k("code",null,Ct(i.algorithm.join(" ")),1),k("button",{onClick:s=>dt(Yh)(i.algorithm)},"Try",8,IE),k("button",{onClick:s=>dt(Yh)(dt(ya)(i.algorithm))},"Undo",8,NE)])):he("",!0)]))),128))]),e[2]||(e[2]=k("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left – scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},OE=On(FE,[["__scopeId","data-v-22fd2ee3"]]),BE={class:"pad"},kE=["disabled","onClick"],zE={__name:"MovePad",setup(n){const t=["U","D","L","R","F","B"];return(e,i)=>(xt(),Et("div",BE,[(xt(),Et(fe,null,Pe(t,s=>k("div",{key:s,class:"group"},[(xt(!0),Et(fe,null,Pe([s,`${s}'`,`${s}2`],r=>(xt(),Et("button",{key:r,disabled:dt(rt).editing,onClick:o=>dt(Xi)(r)},Ct(r),9,kE))),128))])),64))]))}},HE=On(zE,[["__scopeId","data-v-8944ff15"]]),VE={class:"panel"},GE={class:"row"},WE=["disabled"],XE=["disabled"],$E={key:0,class:"timer"},qE={key:0,class:"status ok"},YE={key:1,class:"check"},KE={class:"box"},jE={key:2,class:"hint-box"},ZE={key:0,class:"hint-move"},JE={class:"move"},QE={class:"note"},t1={class:"row"},e1={key:0},n1={key:3,class:"quiz"},i1={class:"target"},s1={class:"move big"},r1={class:"note"},o1={__name:"PracticePanel",setup(n){const t=te(!1),e=te(!1),i=te(0),s=te(0),r=te(null);let o=0;const a=Le(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){R(),await gm(),t.value=!0,e.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function c(){clearInterval(o),t.value=!1}function u(){c(),r.value=null}function f(){const L=dm(Xe.value,rt.n);if(!L.ok){r.value={stage:"Hint unavailable",goal:L.error,concept:"",move:"",label:""};return}const F=L.stages.find(b=>b.moves.length);if(!F)return;s.value++;const w=jc(rt.n,F.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:F.steps[0].moves[0],label:F.steps[0].label}}Ne(Ma,L=>{L&&t.value&&rt.moveCount>0&&(c(),e.value=!0,r.value=null)});const h=te(!1),p=te(""),g=te(0),_=te(0),m=te(0),d=te("Use the move pad or keyboard.");let y=!1,v=null;function x(){const L=Kb();p.value=L[Math.floor(Math.random()*L.length)]}function P(){if(h.value){R();return}c(),h.value=!0,g.value=_.value=m.value=0,d.value="Use the move pad or keyboard.",x(),v=ME(async L=>{y||(_.value++,L===p.value?(g.value++,m.value++,d.value="Correct!"):(m.value=0,d.value=`That was ${L}; ${p.value} was asked. Look at which face turns and which way.`),y=!0,await Xi(ya(L.split(" ")).join(" ")),y=!1,x())})}function R(){h.value=!1,v==null||v(),v=null}return no(()=>{clearInterval(o),R()}),(L,F)=>(xt(),Et("section",VE,[F[2]||(F[2]=k("h2",null,"Practice & test",-1)),F[3]||(F[3]=k("h3",null,"Solve it yourself",-1)),F[4]||(F[4]=k("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),k("div",GE,[k("button",{class:"primary",onClick:l},Ct(t.value||e.value?"New challenge":"Start challenge"),1),k("button",{disabled:!t.value,onClick:f},"Hint",8,WE),k("button",{disabled:!t.value,onClick:u},"Give up",8,XE),t.value||e.value?(xt(),Et("span",$E,"⏱ "+Ct(a.value)+" · "+Ct(dt(rt).moveCount)+" moves · "+Ct(s.value)+" hints",1)):he("",!0)]),e.value?(xt(),Et("p",qE," Solved in "+Ct(a.value)+" with "+Ct(dt(rt).moveCount)+" moves and "+Ct(s.value)+" hint"+Ct(s.value===1?"":"s")+". 🎉 ",1)):he("",!0),t.value||e.value?(xt(),Et("ul",YE,[(xt(!0),Et(fe,null,Pe(dt(SE),w=>(xt(),Et("li",{key:w.id,class:Ce({done:w.done})},[k("span",KE,Ct(w.done?"✓":""),1),me(" "+Ct(dt(jc)(dt(rt).n,w.id).title),1)],2))),128))])):he("",!0),r.value?(xt(),Et("div",jE,[k("div",null,[k("b",null,Ct(r.value.stage),1),me(" – "+Ct(r.value.goal),1)]),r.value.move?(xt(),Et("div",ZE,[F[0]||(F[0]=me(" Next move: ",-1)),k("span",JE,Ct(r.value.move),1),k("small",null,"("+Ct(r.value.label)+")",1)])):he("",!0),k("p",QE,Ct(r.value.concept),1)])):he("",!0),F[5]||(F[5]=k("h3",null,"Notation quiz",-1)),k("div",t1,[k("button",{class:Ce({primary:h.value}),onClick:P},Ct(h.value?"Stop quiz":"Start quiz"),3),h.value?(xt(),Et("span",e1,"Score "+Ct(g.value)+" / "+Ct(_.value)+" · streak "+Ct(m.value),1)):he("",!0)]),h.value?(xt(),Et("div",n1,[k("div",i1,[F[1]||(F[1]=me("Perform ",-1)),k("span",s1,Ct(p.value),1)]),k("p",r1,Ct(d.value),1)])):he("",!0)]))}},a1=On(o1,[["__scopeId","data-v-42bd0525"]]),vm="rubiks-solver.saves";function Qc(n,t){const{faceGrid:e}=Oe(t);return Kn.map(i=>e[i].flat().map(s=>Kn[n[s]]).join("")).join("")}function Kh(n){const t=String(n).replace(/\s+/g,"").toUpperCase(),e=t.length===54?3:t.length===24?2:0;if(!e)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${t.length}.`);const i=[...t].find(a=>!Kn.includes(a));if(i)throw new Error(`"${i}" is not a face letter – use only U, R, F, D, L, B.`);const{faceGrid:s}=Oe(e),r=new Uint8Array(Oe(e).slotCount),o=e*e;return Kn.forEach((a,l)=>{s[a].flat().forEach((c,u)=>{r[c]=Kn.indexOf(t[l*o+u])})}),{n:e,state:r}}function l1({name:n,n:t,state:e}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:t,facelets:Qc(e,t),savedAt:new Date().toISOString()},null,2)}function zl(n){const t=String(n).trim();if(t.startsWith("{")){let e;try{e=JSON.parse(t)}catch{throw new Error("The file is not valid JSON.")}if(typeof e.facelets!="string")throw new Error("The file has no cube position in it.");const i=Kh(e.facelets);if(e.n&&e.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof e.name=="string"?e.name:""}}return{...Kh(t),name:""}}function c1(){try{const n=JSON.parse(localStorage.getItem(vm)||"[]");return Array.isArray(n)?n.filter(t=>t&&typeof t.facelets=="string"):[]}catch{return[]}}function u1(n){try{return localStorage.setItem(vm,JSON.stringify(n)),!0}catch{return!1}}const f1={class:"saveload"},h1={class:"row"},d1=["placeholder"],p1={key:0,class:"saved"},m1=["title"],g1=["onClick"],_1=["onClick"],v1={key:1,class:"note"},x1={class:"row"},y1={class:"file-btn"},M1={class:"row"},S1=["disabled"],b1={__name:"SaveLoad",setup(n){const t=Ln(c1()),e=te(""),i=te(""),s=te(""),r=te(!1);Ne(t,()=>u1([...t]),{deep:!0});const o=Le(()=>`${rt.n}×${rt.n} position ${t.filter(d=>d.n===rt.n).length+1}`);function a(d,y=!1){s.value=d,r.value=y}const l=d=>new Date(d).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function c(){const d=e.value.trim()||o.value,y=Qc(Xe.value,rt.n),v=t.find(x=>x.name===d&&x.n===rt.n);v?(v.facelets=y,v.savedAt=new Date().toISOString()):t.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:d,n:rt.n,facelets:y,savedAt:new Date().toISOString()}),e.value="",a(`${v?"Updated":"Saved"} "${d}".`)}async function u(d,y){await mm(d.n,d.state),a(`Loaded ${y}.`)}function f(d){try{u(zl(d.facelets),`"${d.name}"`)}catch(y){a(y.message,!0)}}function h(d){t.splice(t.indexOf(d),1),a(`Deleted "${d.name}".`)}function p(){const d=e.value.trim()||o.value,y=new Blob([l1({name:d,n:rt.n,state:Xe.value})],{type:"application/json"}),v=URL.createObjectURL(y),x=document.createElement("a");x.href=v,x.download=`${d.replace(/[^\w\-. ]+/g,"_")}.cube.json`,x.click(),URL.revokeObjectURL(v),a(`Exported "${d}".`)}async function g(d){var v;const y=(v=d.target.files)==null?void 0:v[0];if(d.target.value="",!!y)try{const x=zl(await y.text());await u(x,x.name?`"${x.name}"`:y.name)}catch(x){a(x.message,!0)}}async function _(){const d=Qc(Xe.value,rt.n);try{await navigator.clipboard.writeText(d),a("Position code copied to the clipboard.")}catch{i.value=d,a("Clipboard not available – the code is in the box below, copy it from there.")}}function m(){try{u(zl(i.value),"the pasted code"),i.value=""}catch(d){a(d.message,!0)}}return(d,y)=>(xt(),Et("details",f1,[y[3]||(y[3]=k("summary",null,"Save / load position",-1)),k("div",h1,[Je(k("input",{"onUpdate:modelValue":y[0]||(y[0]=v=>e.value=v),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:ec(c,["enter"])},null,40,d1),[[Jn,e.value]]),k("button",{class:"primary",onClick:c},"Save")]),t.length?(xt(),Et("ul",p1,[(xt(!0),Et(fe,null,Pe(t,v=>(xt(),Et("li",{key:v.id},[k("span",{class:"title",title:v.name},Ct(v.name),9,m1),k("small",null,Ct(v.n)+"×"+Ct(v.n)+" · "+Ct(l(v.savedAt)),1),k("button",{onClick:x=>f(v)},"Load",8,g1),k("button",{title:"Delete",onClick:x=>h(v)},"✕",8,_1)]))),128))])):(xt(),Et("p",v1,"No saved positions yet. Saves stay in this browser.")),k("div",x1,[k("button",{onClick:p},"Export file"),k("label",y1,[y[2]||(y[2]=me(" Import file ",-1)),k("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),k("button",{onClick:_},"Copy code")]),k("div",M1,[Je(k("input",{"onUpdate:modelValue":y[1]||(y[1]=v=>i.value=v),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:ec(m,["enter"])},null,544),[[Jn,i.value]]),k("button",{disabled:!i.value.trim(),onClick:m},"Load code",8,S1)]),s.value?(xt(),Et("p",{key:2,class:Ce(["msg",{bad:r.value}]),role:"status"},Ct(s.value),3)):he("",!0)]))}},E1=On(b1,[["__scopeId","data-v-be1521d1"]]),T1=["title","onClick"],w1={class:"tag"},A1={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:t}){const e=n,i=t,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=Le(()=>Oe(e.n)),o=Le(()=>r.value.faceGrid),a=l=>e.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,c)=>(xt(),Et("div",{class:Ce(["net",`n${n.n}`])},[(xt(),Et(fe,null,Pe(s,u=>k("div",{key:u.name,class:"face",style:ps({gridColumn:u.col,gridRow:u.row})},[(xt(!0),Et(fe,null,Pe(o.value[u.name],(f,h)=>(xt(),Et("div",{key:h,class:"nrow"},[(xt(!0),Et(fe,null,Pe(f,(p,g)=>(xt(),Et("button",{key:g,class:Ce(["cell",{locked:a(p)}]),style:ps({background:dt(Uu)[n.state[p]]}),title:`${u.name} ${h+1},${g+1}`,onClick:_=>i("paint",p)},null,14,T1))),128))]))),128)),k("span",w1,Ct(u.name),1)],4)),64))],2))}},C1=On(A1,[["__scopeId","data-v-a0e6c1b2"]]),xm="rubiks-solver.ai",Ou=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],jh={provider:"builtin",geminiKey:"",geminiModel:Ou[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function R1(){let n={};try{n=JSON.parse(localStorage.getItem(xm)||"{}")}catch{}const t={...jh,...n};return Ou.includes(t.geminiModel)||(t.geminiModel=jh.geminiModel),t}function P1(n){localStorage.setItem(xm,JSON.stringify(n))}const Zh="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class fs extends Error{constructor(t,e,i=0){super(e),this.kind=t,this.status=i}}async function vs(n,{method:t="GET",headers:e={},body:i,signal:s,timeoutMs:r=2e4}={}){var h;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let c;try{c=await fetch(n,{method:t,headers:i?{"Content-Type":"application/json",...e}:e,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(p){throw a?new fs("timeout","The request timed out."):p.name==="AbortError"?new fs("abort","Cancelled."):new fs("network",p.message)}finally{clearTimeout(l)}const u=await c.text();let f=null;try{f=JSON.parse(u)}catch{}if(!c.ok){const p=((h=f==null?void 0:f.error)==null?void 0:h.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||u.slice(0,200)||c.statusText;throw new fs("http",p,c.status)}return f}function Bu(n,t){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com – check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${t}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function ku(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} – the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function zu(n,t){return n.kind==="timeout"?`${t} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const Hu=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,Vu=n=>n.localUrl.trim().replace(/\/+$/,"");async function Gu(n,t,e){var i,s,r,o,a,l,c;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let u;try{u=await vs(`${Hu(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:Zh}]},contents:[{role:"user",parts:[{text:t}]}]},signal:e})}catch(h){throw new Error(Bu(h,n.geminiModel))}const f=((o=(r=(s=(i=u==null?void 0:u.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(h=>h.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const u=Vu(n);if(!u)throw new Error("Enter the local server URL in Settings.");let f;try{f=await vs(`${u}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:Zh},{role:"user",content:t}]},signal:e,timeoutMs:12e4})}catch(p){throw new Error(p.kind==="network"?await ku(u):zu(p,u))}const h=((c=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:c.content)??"";if(!h)throw new Error("The local model returned no text.");return h.trim()}throw new Error("No AI provider selected.")}const ym="Reply with the single word OK.";async function L1(n){const t=n.geminiKey.trim();if(!t)return{ok:!1,message:"Enter an API key first."};try{await vs(Hu(n.geminiModel),{headers:{"x-goog-api-key":t},timeoutMs:15e3});const e=await Gu({...n,provider:"gemini"},ym);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:e}}catch(e){return{ok:!1,message:e instanceof fs?Bu(e,n.geminiModel):e.message}}}async function D1(n){const t=Vu(n);if(!t)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let e=null;try{const i=await vs(`${t}/models`,{timeoutMs:8e3});e=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await ku(t)};if(i.kind==="timeout")return{ok:!1,message:zu(i,t)}}if(e!=null&&e.length&&!e.includes(n.localModel)){const i=e.slice(0,10).join(", ")+(e.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await Gu({...n,provider:"local"},ym);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function U1(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" – goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function Mm(n){const t=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&t.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&t.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),t.join(`

`)}async function I1(n,t,e){return n.provider==="builtin"?{text:Mm(t),ai:!1}:{text:await Gu(n,U1(t),e),ai:!0}}const _e=Ln(R1());Ne(_e,n=>P1({...n}),{deep:!0});const Sm=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],Hl=(n,t)=>Sm.find(e=>e.name===t).face[n];function Vl(n,t){const e=n/2,i=t/2,s=Math.min(n,t)*.38,r=s*Math.cos(Math.PI/6);return[[e,i],[e,i-s],[e+r,i-s/2],[e+r,i+s/2],[e,i+s],[e-r,i+s/2],[e-r,i-s/2]]}function Jh(n,t,e){const i=Oe(e),s=i.m,r=[],o=t[0];for(const a of Sm){const l=t[a.ea],c=t[a.eb],u=t[a.far],f=zi[Hl(n,a.name)],h=zi[Hl(n,a.across[0])],p=zi[Hl(n,a.across[1])];for(let g=0;g<e;g++)for(let _=0;_<e;_++){const m=(g+.5)/e,d=(_+.5)/e,y=o[0]+m*(l[0]-o[0])+d*(c[0]-o[0])+m*d*(u[0]-l[0]-c[0]+o[0]),v=o[1]+m*(l[1]-o[1])+d*(c[1]-o[1])+m*d*(u[1]-l[1]-c[1]+o[1]),x=[0,1,2].map(P=>s*(f[P]+h[P]+p[P])-2*g*p[P]-2*_*h[P]);r.push({slot:i.slotAt(x,f),x:y,y:v})}}return r}function N1(n,t,e,i){const{data:s,width:r,height:o}=n;let a=0,l=0,c=0,u=0;for(let f=Math.max(0,Math.round(e-i));f<=Math.min(o-1,Math.round(e+i));f++)for(let h=Math.max(0,Math.round(t-i));h<=Math.min(r-1,Math.round(t+i));h++){const p=(f*r+h)*4;a+=s[p],l+=s[p+1],c+=s[p+2],u++}return u?[a/u,l/u,c/u]:[0,0,0]}function bm([n,t,e]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(t),i(e)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,c=(.0193*s+.1192*r+.9505*o)/1.08883,u=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*u(l)-16,500*(u(a)-u(l)),200*(u(l)-u(c))]}const ba=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),Qh=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),F1=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),O1=n=>{const t=[...n].sort((e,i)=>e-i);return t.length%2?t[(t.length-1)/2]:(t[t.length/2-1]+t[t.length/2])/2};function B1(n){const t=a=>Math.hypot(a[1],a[2]),e=n.map(a=>({rgb:a,lab:bm(a)})).filter(({lab:a})=>a[0]>60&&t(a)<50);if(!e.length)return null;const i=Math.min(...e.map(a=>t(a.lab))),s=e.filter(a=>t(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>O1(o.map(l=>l.rgb[a])))}function k1(n,t){return n.map((e,i)=>{const s=Math.min(5,1/Math.max(Qh(t[i]),.02));return Math.max(0,Math.min(255,F1(Math.min(1,Qh(e)*s))))})}function z1([n,t,e]){const[i,s,r]=[n/255,t/255,e/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let c=0;return l>0&&(o===i?c=(s-r)/l%6:o===s?c=(r-i)/l+2:c=(i-s)/l+4,c*=60,c<0&&(c+=360)),{h:c>300?c-360:c,s:o===0?0:l/o,v:o}}const Ar=[-30,90],Gl=n=>n.s>.4&&n.h>-40&&n.h<80;function H1(n){const t=[...n].sort((i,s)=>i-s);return t.slice(1).map((i,s)=>({size:i-t[s],mid:(i+t[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const td=(n,[t,e])=>n<t?0:n<e?1:2;function V1(n,t,e=null){const i=Oe(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const u=[],f=[];for(const d of t){const y=i.stickers[d.slot];i.cubies[y.cubie].kind==="center"&&(u[y.face]=d.lab,f[y.face]=d)}for(const d of t){let y=0;for(let v=1;v<6;v++)ba(d.lab,u[v])<ba(d.lab,u[y])&&(y=v);s[d.slot]=y}const h=[0,1,2,3,4,5].filter(d=>Gl(f[d])).sort((d,y)=>f[d].h-f[y].h);if(h.length!==3)return{state:s,warnings:r,hue:null};const p=h.map(d=>f[d].h),g=[(p[0]+p[1])/2,(p[1]+p[2])/2],_=e??g,m=[];for(const d of t)!h.includes(s[d.slot])||d.s<.25||(s[d.slot]=h[td(d.h,_)],m.push(d.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:_,points:m,anchors:p}}}const o=t.filter(Gl);let a=null,l=null;if(o.length===12){const u=H1(o.map(g=>g.h)),f=e??u,h=t.filter(g=>!Gl(g)),p=ed(h.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+td(g.h,f))),h.forEach((g,_)=>a.set(g.slot,p[_])),l={auto:u,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const u=ed(t.map(f=>f.lab),6);a=new Map(t.map((f,h)=>[f.slot,u[h]]))}for(const[u,f]of a)s[u]=f;const c=cm(s);return c.error?(r.push(`${c.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:c.state,warnings:r,hue:l}}function ed(n,t){const e=n.length/t,i=[n[0]];for(;i.length<t;){let r=0,o=-1;n.forEach((a,l)=>{const c=Math.min(...i.map(u=>ba(a,u)));c>o&&(o=c,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((c,u)=>i.forEach((f,h)=>o.push([ba(c,f),u,h]))),o.sort((c,u)=>c[0]-u[0]);const a=new Array(t).fill(e),l=new Array(n.length).fill(-1);for(const[,c,u]of o)l[c]<0&&a[u]>0&&(l[c]=u,a[u]--);s=l;for(let c=0;c<t;c++){const u=n.filter((f,h)=>s[h]===c);u.length&&(i[c]=[0,1,2].map(f=>u.reduce((h,p)=>h+p[f],0)/u.length))}}return s}function G1(n,t,{whiteBalance:e=!1,cutoffs:i=null}={}){const s=[null,null];let r=t;if(e){r=[];for(const a of[0,1]){const l=t.filter(u=>u.photo===a),c=B1(l.map(u=>u.rgb));s[a]=c?"applied":"no-white",r.push(...c?l.map(u=>({...u,rgb:k1(u.rgb,c)})):l)}}const o=r.map(a=>({slot:a.slot,lab:bm(a.rgb),...z1(a.rgb)}));return{...V1(n,o,i),whiteBalance:s}}const Gs=Math.PI/180,W1=Array.from({length:8},(n,t)=>[t&1?1:-1,t&2?1:-1,t&4?1:-1]);function X1(n,t,e){const i=Math.max(n,t,e),s=Math.min(n,t,e);return{s:i===0?0:(i-s)/i,v:i/255}}function $1(n,t=360){const{data:e,width:i,height:s}=n,r=Math.min(1,t/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),c=new Float32Array(o*a);for(let u=0;u<a;u++){const f=Math.floor(u*s/a),h=Math.max(f+1,Math.floor((u+1)*s/a));for(let p=0;p<o;p++){const g=Math.floor(p*i/o),_=Math.max(g+1,Math.floor((p+1)*i/o));let m=0,d=0,y=0,v=0;for(let F=f;F<h;F++)for(let w=g;w<_;w++){const b=(F*i+w)*4;m+=e[b],d+=e[b+1],y+=e[b+2],v++}const{s:x,v:P}=X1(m/v,d/v,y/v),R=x>.42&&P>.32?Math.min(1,(x-.32)/.3):0,L=x<.2&&P>.72?.9:0;l[u*o+p]=Math.max(R,L),c[u*o+p]=P<.3?Math.min(1,(.34-P)/.14):0}}return{w:o,h:a,scale:r,stick:nd(l,o,a),dark:nd(c,o,a)}}function nd(n,t,e){const i=new Float32Array(n.length);for(let s=0;s<e;s++)for(let r=0;r<t;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const u=r+c,f=s+l;u<0||f<0||u>=t||f>=e||(o+=n[f*t+u],a++)}i[s*t+r]=o/a}return i}function tu(n,t,e,i,s){if(i<0||s<0||i>t-1||s>e-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(t-1,r+1),l=Math.min(e-1,o+1),c=i-r,u=s-o;return n[o*t+r]*(1-c)*(1-u)+n[o*t+a]*c*(1-u)+n[l*t+r]*(1-c)*u+n[l*t+a]*c*u}function q1(n,t,e){const[i,s]=[Math.cos(n*Gs),Math.sin(n*Gs)],[r,o]=[Math.cos(t*Gs),Math.sin(t*Gs)],[a,l]=[Math.cos(e*Gs),Math.sin(e*Gs)],c=[[i,0,s],[0,1,0],[-s,0,i]],u=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],h=(p,g)=>p.map(_=>[0,1,2].map(m=>_[0]*g[0][m]+_[1]*g[1][m]+_[2]*g[2][m]));return h(f,h(u,c))}function Wu(n,t,e){const i=q1(n.yaw,n.pitch,n.roll),s=(n.cx-t/2)/n.f*n.z,r=(n.cy-e/2)/n.f*n.z;return W1.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const Xu=(n,t,e,i)=>[t/2+i*n[0]/n[2],e/2+i*n[1]/n[2]];function Em(n){let t=0;for(let e=1;e<8;e++)n[e][2]<n[t][2]&&(t=e);return t}const Y1=[[1,2],[1,4],[2,4]],id=[.12,.3,.5,.7,.88],K1=[.02,.05,.08],sd=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function Tm(n,t,e,i,s){const{w:r,h:o}=n,a=R=>R?tu(n.stick,r,o,R[0],R[1]):-1,l=R=>R?tu(n.dark,r,o,R[0],R[1]):-1;let c=0,u=0,f=0,h=0,p=0,g=0,_=0,m=0;const d=[],y=[],v=(R,L)=>{m++,R<0&&(_++,R=0),L===0?(c+=R,u++):L===1?(f+=R,h++):(p+=R,g++)};for(const R of e){const L=[R(0,0),R(1,0),R(1,1),R(0,1)];if(L.some(w=>!w))return-1;y.push(L);let F=0;for(let w=0;w<4;w++){const b=L[w],I=L[(w+1)%4];F+=b[0]*I[1]-I[0]*b[1]}d.push(Math.abs(F)/2);for(let w=0;w<t;w++)for(let b=0;b<t;b++){let I=0,nt=!1;for(const[q,it]of sd){const ft=a(R((w+.5)/t+q*.16/t,(b+.5)/t+it*.16/t));ft<0?nt=!0:I+=ft}v(nt?-1:I/sd.length,0)}for(let w=1;w<t;w++)for(const b of id)for(const I of[0,1]){const nt=($,at)=>I===0?R($,at):R(at,$);let q=-1;for(const $ of[-i,0,i])q=Math.max(q,l(nt(w/t+$/t,b)));const it=a(nt(w/t-.33/t,b)),ft=a(nt(w/t+.33/t,b));v(q<0||it<0||ft<0?-1:q*Math.min(it,ft),1)}for(const w of id)for(const[b,I,nt,q,it,ft]of[[0,w,.33/t,w,1,0],[1,w,1-.33/t,w,-1,0],[w,0,w,.33/t,0,1],[w,1,w,1-.33/t,0,-1]]){let $=-1;for(const X of K1)$=Math.max($,l(R(b+it*X/t,I+ft*X/t)));const at=a(R(nt,q));v($<0||at<0?-1:$*at,2)}}if(!u||!h)return-1;if(s)return{cell:c/u,line:f/h,border:p/g,outside:_,total:m};let x=.3*(c/u)+.4*(f/h)+.3*(p/g);x*=1-_/Math.max(1,m);const P=Math.min(...d)/Math.max(...d);return P<.12&&(x*=P/.12),x*(.4+.6*Z1(n,y))}const j1=(n,t,e)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function Z1(n,t){const{w:e,h:i}=n,s=t.flat(),r=s.map(m=>m[0]),o=s.map(m=>m[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),c=Math.max(0,Math.min(...r)-l),u=Math.min(e-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),h=Math.min(i-1,Math.max(...o)+l);let p=0,g=0;const _=22;for(let m=0;m<_;m++)for(let d=0;d<_;d++){const y=c+(u-c)*(m+.5)/_,v=f+(h-f)*(d+.5)/_,x=tu(n.stick,e,i,y,v);t.some(P=>j1(P,y,v))?p+=x:g+=x}return p/Math.max(1e-6,p+g)}function aa(n,t,e,i=.12,s=!1){const{w:r,h:o}=n,a=Wu(e,r,o),l=Em(a);if(a[l][2]<1)return-1;const c=a[l],u=(d,y,v)=>v<.3?null:[r/2+e.f*d/v,o/2+e.f*y/v],f=Y1.map(([d,y])=>{const v=a[l^d],x=a[l^y],P=[v[0]-c[0],v[1]-c[1],v[2]-c[2]],R=[x[0]-c[0],x[1]-c[1],x[2]-c[2]];return(L,F)=>u(c[0]+P[0]*L+R[0]*F,c[1]+P[1]*L+R[1]*F,c[2]+P[2]*L+R[2]*F)});let h=Tm(n,t,f,i,s);if(s||h<0)return h;const p=a.map(d=>d[2]>.3?Xu(d,r,o,e.f):[0,0]),g=p.map(d=>d[0]),_=p.map(d=>d[1]),m=Math.max(Math.max(...g)-Math.min(...g),Math.max(..._)-Math.min(..._))/Math.min(r,o);return m<.15&&(h*=m/.15),m>1.1&&(h*=1.1/m),h}function rd(n,t,e,i=.05){const s=(h,p,g,_)=>(m,d)=>[_[0]+m*(h[0]-_[0])+d*(p[0]-_[0])+m*d*(g[0]-h[0]-p[0]+_[0]),_[1]+m*(h[1]-_[1])+d*(p[1]-_[1])+m*d*(g[1]-h[1]-p[1]+_[1])],[r,o,a,l,c,u,f]=e;return Tm(n,t,[s(f,a,o,r),s(c,f,u,r),s(a,c,l,r)],i,!1)}function od(n,t,e){const i=Wu(n,t,e),s=Em(i),r=f=>Xu(i[f],t,e,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const h=o[f].p,p=o[(f+1)%6].p;a+=h[0]*p[1]-p[0]*h[1]}a<0&&o.reverse();const l=o.map((f,h)=>f.far?h:-1).filter(f=>f>=0),c=l.reduce((f,h)=>o[h].p[1]<o[f].p[1]?h:f,l[0]),u=[0,1,2,3,4,5].map(f=>o[(c+f)%6].p);return[r(s),...u]}function eu(n,t,e){const i=Wu(n,t,e).map(o=>Xu(o,t,e,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function J1(n,t,e,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:t,pitch:e,roll:i,f:s},l=(n.x1+n.x2)/2,c=(n.y1+n.y2)/2;for(let u=0;u<3;u++){const f=eu(a,r,o),h=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),p=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(h*p));const g=eu(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=c-(g.y1+g.y2)/2}return a}const Q1=["cx","cy","z","yaw","pitch","roll","lf"];function tT(n,t,e,i){const s=n.w,r=n.h,o={...e,lf:Math.log(e.f/i)},a=p=>({...p,f:i*Math.exp(p.lf)}),l=eu(a(o),s,r),c=Math.max(l.x2-l.x1,l.y2-l.y1),u={cx:.02*c,cy:.02*c,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:p,shrink:g}of f){let _=aa(n,t,a(o),p);for(const m of g)for(let d=0;d<30;d++){let y=!1;for(const v of Q1)for(const x of[1,-1]){const P={...o,[v]:o[v]+x*u[v]*m};if(v==="pitch"&&Math.abs(P.pitch)>85||v==="lf"&&(P.lf<-.7||P.lf>1.6)||v==="z"&&P.z<1.5)continue;const R=aa(n,t,a(P),p);R>_+1e-5&&(_=R,Object.assign(o,P),y=!0)}if(!y)break}}const h=a(o);return{pose:h,score:aa(n,t,h,.06)}}function eT(n,t,{box:e=null}={}){const i=$1(n),{w:s,h:r}=i,a=e?[(y=>({x1:y.x1/1e3*s,x2:y.x2/1e3*s,y1:y.y1/1e3*r,y2:y.y2/1e3*r}))(e)]:[.4,.5,.62,.76,.9].map(y=>{const v=y*Math.min(s,r)/2;return{x1:s/2-v,x2:s/2+v,y1:r/2-v,y2:r/2+v}}),l=.8*Math.max(s,r),c=[];for(const y of a)for(let v=0;v<90;v+=10)for(let x=-80;x<=80;x+=10)for(let P=-90;P<=90;P+=15)for(const R of[l,2.8*l]){const L=J1(y,v,x,P,R,s,r);c.push({pose:L,score:aa(i,t,L,.16)})}c.sort((y,v)=>v.score-y.score);const u=c[Math.floor(c.length/2)].score,f=[],h=y=>od(y,s,r).flat();for(const y of c.slice(0,200)){const v=h(y.pose),x=Math.max(...v.filter((P,R)=>R%2===0))-Math.min(...v.filter((P,R)=>R%2===0));if(f.every(P=>Math.max(...P.k.map((R,L)=>Math.abs(R-v[L])))>.05*x)&&f.push({...y,k:v}),f.length>=16)break}let p=null;const g=[];for(const y of f){const v=tT(i,t,y.pose,l);g.push(v),(!p||v.score>p.score)&&(p=v)}if(!p||p.score<=0)return null;const _=od(p.pose,s,r),m=nT(i,t,_);return{handles:m.handles.map(([y,v])=>[y/s*1e3,v/r*1e3]),poseHandles:_.map(([y,v])=>[y/s*1e3,v/r*1e3]),score:m.score,poseScore:p.score,margin:m.score-u,pose:p.pose,maps:i,alternatives:g}}function nT(n,t,e){const i=e.map(c=>c[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=e.map(c=>[...c]),a=(c,u)=>Math.max(e[c][u]-r,Math.min(e[c][u]+r,o[c][u]));let l=rd(n,t,o,.05);for(const c of[.012,.006,.003])for(let u=0;u<20;u++){let f=!1;for(let h=0;h<7;h++)for(let p=0;p<2;p++)for(const g of[1,-1]){const _=o[h][p];if(o[h][p]=_+g*c*s,o[h][p]!==a(h,p)){o[h][p]=_;continue}const m=rd(n,t,o,.05);m>l+1e-5?(l=m,f=!0):o[h][p]=_}if(!f)break}return{handles:o,score:l}}function ad(n,t,{box:e=null,signal:i}={}){const s=()=>{const r=eT(n,t,{box:e});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=c=>{i==null||i.removeEventListener("abort",l),a.terminate(),c.data.error?o(new Error(c.data.error)):r(c.data.result)},a.onerror=c=>{var u;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(u=c.preventDefault)==null||u.call(c)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:t,box:e})})}const wm=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,qo=(n,...t)=>t.map(e=>n==null?void 0:n[e]).find(e=>e!==void 0);function iT(n){const t=n.indexOf("{"),e=n.lastIndexOf("}");if(t<0||e<=t)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(t,e+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=qo(s,"x1","xmin","left","x_min"),o=qo(s,"y1","ymin","top","y_min"),a=qo(s,"x2","xmax","right","x_max"),l=qo(s,"y2","ymax","bottom","y_max"));const c=[r,o,a,l].map(Number);if(c.some(u=>!Number.isFinite(u)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(c[0],c[2]),y1:Math.min(c[1],c[3]),x2:Math.max(c[0],c[2]),y2:Math.max(c[1],c[3])}}function Am(n){const{x1:t,y1:e,x2:i,y2:s}=n;if([t,e,i,s].every(h=>h<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(t<-50||e<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-t,o=s-e;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(t+i)/2,l=(e+s)/2,c=r/2,u=o/2,f=h=>Math.max(0,Math.min(1e3,h));return[[a,l],[a,l-u],[a+c,l-u/2],[a+c,l+u/2],[a,l+u],[a-c,l+u/2],[a-c,l-u/2]].map(([h,p])=>[f(h),f(p)])}const sT=n=>{const t=[...n].sort((e,i)=>e-i);return t[Math.floor(t.length/2)]};function rT(n,t){const{data:e,width:i,height:s}=n,r=(O,W)=>Math.round(O/1e3*W),o=r(t.x1,i),a=r(t.x2,i),l=r(t.y1,s),c=r(t.y2,s),u=O=>Math.max(0,Math.min(i-1,Math.round(O))),f=O=>Math.max(0,Math.min(s-1,Math.round(O))),h=(a-o)*.25,p=(c-l)*.25,[g,_,m,d]=[u(o-h),u(a+h),f(l-p),f(c+p)],y=_-g+1,v=d-m+1;if(y<40||v<40)return null;const x=Math.max(3,Math.round(Math.min(y,v)*.06)),P=(O,W)=>{const vt=(W*i+O)*4;return[e[vt],e[vt+1],e[vt+2]]},R=[];for(let O=m;O<=d;O++)for(let W=g;W<=_;W++)(W-g<x||_-W<x||O-m<x||d-O<x)&&R.push(P(W,O));const L=[0,1,2].map(O=>sT(R.map(W=>W[O]))),F=O=>Math.hypot(O[0]-L[0],O[1]-L[1],O[2]-L[2]),w=R.map(F).sort((O,W)=>O-W),b=Math.max(40,w[Math.floor(w.length*.95)]*1.6),I=new Array(y).fill(0),nt=new Array(v).fill(0);for(let O=0;O<v;O++)for(let W=0;W<y;W++)F(P(g+W,m+O))>b&&(I[W]++,nt[O]++);const q=O=>{const W=Math.max(...O)*.04,vt=O.findIndex(ot=>ot>=W),K=O.length-1-[...O].reverse().findIndex(ot=>ot>=W);return vt<0?null:[vt,K]},it=q(I),ft=q(nt);if(!it||!ft)return null;const $={x1:(g+it[0])/i*1e3,x2:(g+it[1]+1)/i*1e3,y1:(m+ft[0])/s*1e3,y2:(m+ft[1]+1)/s*1e3},at=O=>(O.x2-O.x1)*(O.y2-O.y1),X=at($)/at(t),St=Math.hypot(($.x1+$.x2-t.x1-t.x2)/2,($.y1+$.y2-t.y1-t.y2)/2),Y=it[0]===0||ft[0]===0||it[1]===y-1||ft[1]===v-1;return X<.45||X>2.2||St>.25*Math.max(t.x2-t.x1,t.y2-t.y1)||Y?null:$}function oT(n){return Cm(n).length>0}function Cm(n){var e,i,s;const t=[];return(e=n.localUrl)!=null&&e.trim()&&((i=n.localModel)!=null&&i.trim())&&t.push("local"),(s=n.geminiKey)!=null&&s.trim()&&t.push("gemini"),t}async function aT(n,t,e){var s,r;const i=Vu(n);try{await vs(`${i}/models`,{timeoutMs:4e3,signal:e})}catch(o){if(o.kind==="network")throw new Error(await ku(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await vs(`${i}/chat/completions`,{method:"POST",signal:e,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:wm},{type:"image_url",image_url:{url:t}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof fs){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(zu(o,i)+a)}throw o}}async function lT(n,t,e){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(t)??[];if(!s)throw new Error("Could not encode the photo.");try{const c=await vs(`${Hu(n.geminiModel)}:generateContent`,{method:"POST",signal:e,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:wm},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=c==null?void 0:c.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(u=>u.text).join(""))??"",model:n.geminiModel}}catch(c){throw c instanceof fs?new Error(Bu(c,n.geminiModel)):c}}async function cT(n,t,e){const i=Cm(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?aT(n,t,e):lT(n,t,e)),l=iT(o);return{handles:Am(l),source:r,model:a,box:l,notes:s}}catch(o){if(e!=null&&e.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const uT={class:"photo-import"},fT={class:"photos"},hT={class:"file"},dT=["onChange"],pT=["onPointerdown","onPointermove"],mT={class:"ai-row"},gT=["disabled","onClick"],_T={class:"wb"},vT={class:"wb"},xT={class:"actions"},yT=["disabled"],MT={key:0,class:"hue-box"},ST={class:"hue-head"},bT=["disabled"],ET={class:"slider"},TT=["min","max"],wT={class:"slider"},AT=["min","max"],CT={key:1,class:"note"},ld=.3,RT={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:t}){const e=n,i=t,s=[null,null],r=Ln([null,null]),o=Ln([Vl(420,420),Vl(420,420)]),a=te(""),l=te(!1),c=te(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Ne(c,Y=>localStorage.setItem("rubiks-solver.autoAlign",Y?"1":"0"));const u=Ln([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],h=te(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),p=te(null),g=te(null),_=te(!1),m=te(0),d=te(0),y=te(null),v=te(null),x=Le(()=>r[0]&&r[1]);Ua(()=>[0,1].forEach(b)),Ne(()=>e.n,()=>{[0,1].forEach(b),p.value=null,g.value=null,_.value=!1});function P(Y,O){var K;const W=(K=O.target.files)==null?void 0:K[0];if(!W)return;const vt=new Image;vt.onload=async()=>{r[Y]=vt,o[Y]=Vl(420,420),u[Y].state="",u[Y].text="",await du(),b(Y),c.value&&F(Y)},vt.src=URL.createObjectURL(W)}function R(Y){const O=Math.min(1,768/Math.max(Y.width,Y.height)),W=document.createElement("canvas");W.width=Math.round(Y.width*O),W.height=Math.round(Y.height*O);const vt=W.getContext("2d");return vt.drawImage(Y,0,0,W.width,W.height),{dataUrl:W.toDataURL("image/jpeg",.85),pixels:vt.getImageData(0,0,W.width,W.height)}}function L(Y,O,W){const{s:vt,ox:K,oy:ot}=w(O);W.forEach(([yt,mt],Dt)=>{o[Y][Dt]=[K+yt/1e3*O.width*vt,ot+mt/1e3*O.height*vt]}),b(Y)}async function F(Y){var K;const O=r[Y];if(!O)return;(K=f[Y])==null||K.abort();const W=new AbortController;f[Y]=W,u[Y].busy=!0,u[Y].state="",u[Y].text="Analysing the photo…";const vt=()=>r[Y]!==O||W.signal.aborted;try{const{dataUrl:ot,pixels:yt}=R(O),mt=oT(_e),Dt=mt?cT({..._e},ot,W.signal).catch(C=>{if(C.kind==="abort"||W.signal.aborted)throw C;return{error:C.message}}):null;let It=await ad(yt,e.n,{signal:W.signal});if(vt())return;let $t="image analysis";It&&It.score>=ld&&(L(Y,O,It.handles),mt&&(u[Y].text="Cube outlined by image analysis – asking the AI to double-check…"));let jt=null;if(Dt){if(jt=await Dt,vt())return;if(jt.box){const C=await ad(yt,e.n,{box:jt.box,signal:W.signal});if(vt())return;C&&(!It||C.score>It.score+.02)&&(It=C,$t=`${jt.source==="local"?"local model":"Gemini"} ${jt.model} + image analysis`)}}if(It&&It.score>=ld){L(Y,O,It.handles),u[Y].state="ok",u[Y].text=`Cube outlined by ${$t} (fit ${Math.round(It.score*100)}%). The outline is a perspective-correct cube model – fine-tune the handles if needed.`;return}if(jt!=null&&jt.box){const C=rT(yt,jt.box);L(Y,O,C?Am(C):jt.handles),u[Y].state="ok",u[Y].text="The cube could not be fitted precisely; the outline is only a rough box from the AI – please adjust the handles.";return}u[Y].state="bad",u[Y].text="Could not find a cube in this photo"+(jt!=null&&jt.error?` (${jt.error})`:"")+" – drag the handles by hand."}catch(ot){if(ot.kind==="abort"||W.signal.aborted)return;u[Y].state="bad",u[Y].text=`${ot.message} – drag the handles by hand.`}finally{f[Y]===W&&(u[Y].busy=!1)}}function w(Y){const O=Math.min(420/Y.width,420/Y.height);return{s:O,ox:(420-Y.width*O)/2,oy:(420-Y.height*O)/2}}function b(Y){const O=s[Y];if(!O)return;const W=O.getContext("2d");W.clearRect(0,0,420,420),W.fillStyle="#0f1116",W.fillRect(0,0,420,420);const vt=r[Y];if(vt){const{s:ot,ox:yt,oy:mt}=w(vt);W.drawImage(vt,yt,mt,vt.width*ot,vt.height*ot)}const K=o[Y];W.lineWidth=2,W.strokeStyle="#ffffff",W.beginPath(),[1,2,3,4,5,6].forEach((ot,yt)=>yt?W.lineTo(K[ot][0],K[ot][1]):W.moveTo(K[ot][0],K[ot][1])),W.closePath(),W.stroke(),W.beginPath(),[2,4,6].forEach(ot=>{W.moveTo(K[0][0],K[0][1]),W.lineTo(K[ot][0],K[ot][1])}),W.stroke(),W.fillStyle="#ff2d55";for(const ot of Jh(Y,K,e.n))W.beginPath(),W.arc(ot.x,ot.y,3,0,Math.PI*2),W.fill();W.fillStyle="#00e5ff",K.forEach(([ot,yt])=>{W.beginPath(),W.arc(ot,yt,7,0,Math.PI*2),W.fill()})}const I=(Y,O)=>{const W=s[Y].getBoundingClientRect();return[(O.clientX-W.left)/W.width*420,(O.clientY-W.top)/W.height*420]};function nt(Y,O){const[W,vt]=I(Y,O);let K=-1,ot=18;o[Y].forEach(([yt,mt],Dt)=>{const It=Math.hypot(yt-W,mt-vt);It<ot&&(ot=It,K=Dt)}),K>=0&&(v.value={i:Y,k:K})}function q(Y,O){!v.value||v.value.i!==Y||(o[Y][v.value.k]=I(Y,O),b(Y))}const it=()=>v.value=null;function ft(){const Y=[];for(let O=0;O<2;O++){const W=document.createElement("canvas");W.width=W.height=420;const vt=W.getContext("2d"),{s:K,ox:ot,oy:yt}=w(r[O]);vt.fillStyle="#000",vt.fillRect(0,0,420,420),vt.drawImage(r[O],ot,yt,r[O].width*K,r[O].height*K);const mt=vt.getImageData(0,0,420,420),Dt=420*.38/e.n/5;for(const It of Jh(O,o[O],e.n))Y.push({slot:It.slot,rgb:N1(mt,It.x,It.y,Dt),photo:O})}p.value=Y,_.value=!1,$()}function $(){const Y=G1(e.n,p.value,{whiteBalance:h.value,cutoffs:_.value?[m.value,d.value]:null});g.value=Y.hue,Y.hue&&!_.value&&(m.value=Math.round(Y.hue.auto[0]),d.value=Math.round(Y.hue.auto[1]));const O=Y.whiteBalance.map((vt,K)=>vt==="no-white"?K+1:0).filter(Boolean),W=[];h.value&&W.push(O.length?`No white tile found in photo ${O.join(" and ")} – colours used as they are there.`:"White balance applied to both photos."),l.value=Y.warnings.length>0||O.length>0,a.value=[Y.warnings[0]||"Colours imported – check them in the cube net and fix any mistakes.",...W].join(" "),i("import",Y.state)}function at(Y){Y==="a"?m.value=Math.min(m.value,d.value-1):d.value=Math.max(d.value,m.value+1),_.value=!0,$()}function X(){_.value=!1,$()}Ne(h,Y=>{localStorage.setItem("rubiks-solver.whiteBalance",Y?"1":"0"),p.value&&$()});function St(){const Y=y.value;if(!Y||!g.value)return;const O=Y.getContext("2d"),[W,vt]=Ar,K=Y.width,ot=Y.height,yt=mt=>(mt-W)/(vt-W)*K;for(let mt=0;mt<K;mt++){const Dt=W+mt/K*(vt-W);O.fillStyle=`hsl(${(Dt+360)%360} 70% 38%)`,O.fillRect(mt,0,1,ot)}O.font="12px system-ui, sans-serif",O.textAlign="center",O.fillStyle="rgba(255,255,255,0.9)",[["red",W,m.value],["orange",m.value,d.value],["yellow",d.value,vt]].forEach(([mt,Dt,It])=>{O.fillText(mt,(yt(Dt)+yt(It))/2,13)}),g.value.points.forEach((mt,Dt)=>{O.beginPath(),O.arc(yt(mt),26+Dt*7%30,3.2,0,Math.PI*2),O.fillStyle="#fff",O.fill(),O.strokeStyle="rgba(0,0,0,0.6)",O.stroke()}),g.value.anchors.forEach(mt=>{O.beginPath(),O.moveTo(yt(mt),ot-14),O.lineTo(yt(mt)-6,ot-2),O.lineTo(yt(mt)+6,ot-2),O.closePath(),O.fillStyle="#fff",O.fill(),O.stroke()}),O.lineWidth=2,O.strokeStyle="#0b0d12",[m.value,d.value].forEach(mt=>{O.beginPath(),O.moveTo(yt(mt),0),O.lineTo(yt(mt),ot),O.stroke()}),O.lineWidth=1}return Ne([g,m,d],St,{flush:"post"}),(Y,O)=>(xt(),Et("div",uT,[O[12]||(O[12]=k("p",{class:"hint"},[me(" Photo 1: look straight at one "),k("b",null,"corner"),me(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),k("b",null,"opposite corner"),me(" faces the camera. Drag the 7 handles so the lines follow the cube outline – the dots show where colours are read. ")],-1)),k("div",fT,[(xt(),Et(fe,null,Pe(2,W=>k("div",{key:W,class:"photo"},[k("label",hT,[k("span",null,Ct(W===1?"Photo 1 – first corner":"Photo 2 – opposite corner"),1),k("input",{type:"file",accept:"image/*",onChange:vt=>P(W-1,vt)},null,40,dT)]),k("canvas",{ref_for:!0,ref:vt=>s[W-1]=vt,width:"420",height:"420",onPointerdown:vt=>nt(W-1,vt),onPointermove:vt=>q(W-1,vt),onPointerup:it,onPointerleave:it},null,40,pT),k("div",mT,[k("button",{type:"button",disabled:!r[W-1]||u[W-1].busy,onClick:vt=>F(W-1)},Ct(u[W-1].busy?"Finding the cube…":"✨ Find the cube"),9,gT),u[W-1].text?(xt(),Et("span",{key:0,class:Ce(["ai-msg",u[W-1].state])},Ct(u[W-1].text),3)):he("",!0)])])),64))]),k("label",_T,[Je(k("input",{"onUpdate:modelValue":O[0]||(O[0]=W=>c.value=W),type:"checkbox"},null,512),[[qr,c.value]]),O[6]||(O[6]=k("span",null,[me(" Outline the cube automatically after upload "),k("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),k("label",vT,[Je(k("input",{"onUpdate:modelValue":O[1]||(O[1]=W=>h.value=W),type:"checkbox"},null,512),[[qr,h.value]]),O[7]||(O[7]=k("span",null,[me(" White balance – if a white tile is found in a photo, use it as that photo's white point "),k("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),k("div",xT,[k("button",{class:"primary",disabled:!x.value,onClick:ft},"Read colours",8,yT),a.value?(xt(),Et("span",{key:0,class:Ce(["msg",{warn:l.value}])},Ct(a.value),3)):he("",!0)]),g.value?(xt(),Et("div",MT,[k("div",ST,[O[8]||(O[8]=k("b",null,"Red / orange / yellow cutoffs",-1)),k("button",{type:"button",disabled:!_.value,onClick:X},"Auto",8,bT)]),k("canvas",{ref_key:"hueCanvas",ref:y,class:"hue-strip",width:"480",height:"76"},null,512),k("label",ET,[O[9]||(O[9]=k("span",null,"Red | Orange",-1)),Je(k("input",{"onUpdate:modelValue":O[2]||(O[2]=W=>m.value=W),type:"range",min:dt(Ar)[0],max:dt(Ar)[1],step:"1",onInput:O[3]||(O[3]=W=>at("a"))},null,40,TT),[[Jn,m.value,void 0,{number:!0}]]),k("output",null,Ct(m.value)+"°",1)]),k("label",wT,[O[10]||(O[10]=k("span",null,"Orange | Yellow",-1)),Je(k("input",{"onUpdate:modelValue":O[4]||(O[4]=W=>d.value=W),type:"range",min:dt(Ar)[0],max:dt(Ar)[1],step:"1",onInput:O[5]||(O[5]=W=>at("b"))},null,40,AT),[[Jn,d.value,void 0,{number:!0}]]),k("output",null,Ct(d.value)+"°",1)]),O[11]||(O[11]=k("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):p.value?(xt(),Et("p",CT," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):he("",!0)]))}},PT=On(RT,[["__scopeId","data-v-ebf0867c"]]),LT={class:"panel"},DT={class:"row"},UT={class:"seg"},IT={class:"row"},NT={key:0,class:"note"},FT={class:"row"},OT={key:1,class:"palette"},BT=["title","onClick"],kT={class:"photos"},zT={__name:"SetupPanel",setup(n){const t=te("");async function e(){t.value=(await gm()).join(" ")}return(i,s)=>(xt(),Et("section",LT,[s[10]||(s[10]=k("h2",null,"Set up the cube",-1)),k("div",DT,[s[6]||(s[6]=k("span",{class:"label"},"Size",-1)),k("div",UT,[k("button",{class:Ce({on:dt(rt).n===2}),onClick:s[0]||(s[0]=r=>dt($h)(2))},"2×2",2),k("button",{class:Ce({on:dt(rt).n===3}),onClick:s[1]||(s[1]=r=>dt($h)(3))},"3×3",2)])]),k("div",IT,[k("button",{onClick:s[2]||(s[2]=(...r)=>dt(qh)&&dt(qh)(...r))},"Reset to solved"),k("button",{onClick:e},"Random scramble")]),t.value?(xt(),Et("p",NT,[s[7]||(s[7]=me("Scramble: ",-1)),k("code",null,Ct(t.value),1)])):he("",!0),s[11]||(s[11]=k("h3",null,"Enter your own position",-1)),k("div",FT,[k("button",{class:Ce({primary:dt(rt).editing}),onClick:s[3]||(s[3]=r=>dt(rt).editing=!dt(rt).editing)},Ct(dt(rt).editing?"Done painting":"Paint stickers"),3),s[8]||(s[8]=k("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),dt(rt).editing?(xt(),Et("div",OT,[(xt(!0),Et(fe,null,Pe(dt(Uu),(r,o)=>(xt(),Et("button",{key:o,class:Ce(["swatch",{on:dt(rt).brush===o}]),style:ps({background:r}),title:dt(Jr)[o],onClick:a=>dt(rt).brush=o},null,14,BT))),128))])):he("",!0),ke(C1,{n:dt(rt).n,state:dt(Xe),onPaint:s[4]||(s[4]=r=>dt(rt).editing&&dt(_m)(r))},null,8,["n","state"]),k("details",kT,[s[9]||(s[9]=k("summary",null,"Import from two photos",-1)),ke(PT,{n:dt(rt).n,onImport:s[5]||(s[5]=r=>dt(Fu)(r))},null,8,["n"])]),s[12]||(s[12]=k("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works – the bottom-left-back corner is used as the reference. ",-1))]))}},HT={key:0,class:"result wait"},VT={class:"msg"},GT={key:0,class:"reply"},WT={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(t,e)=>n.state.busy?(xt(),Et("div",HT,"Contacting the service…")):n.state.result?(xt(),Et("div",{key:1,class:Ce(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[k("div",VT,Ct(n.state.result.ok?"✓":"✗")+" "+Ct(n.state.result.message),1),n.state.result.reply?(xt(),Et("div",GT,[e[0]||(e[0]=k("span",null,"Model response",-1)),me(" "+Ct(n.state.result.reply),1)])):he("",!0)],2)):he("",!0)}},cd=On(WT,[["__scopeId","data-v-bd7ff3bc"]]),XT={class:"panel"},$T={class:"field"},qT={key:0,class:"pill"},YT={class:"field"},KT={class:"key-row"},jT=["type"],ZT=["disabled"],JT={class:"field"},QT=["value"],tw={class:"row"},ew=["disabled"],nw={key:0,class:"pill"},iw={class:"field"},sw={class:"field"},rw={class:"row"},ow=["disabled"],aw={__name:"SettingsPanel",setup(n){const t=te(!1),e=Ln({busy:!1,result:null}),i=Ln({busy:!1,result:null}),s={gemini:e,local:i};Ne(()=>[_e.geminiKey,_e.geminiModel],()=>e.result=null),Ne(()=>[_e.localUrl,_e.localModel],()=>i.result=null);async function r(o,a){const l=s[o];l.busy=!0,l.result=null;try{l.result=await a({..._e})}finally{l.busy=!1}}return(o,a)=>(xt(),Et("section",XT,[a[19]||(a[19]=k("h2",null,"Tutor settings",-1)),a[20]||(a[20]=k("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),k("label",$T,[a[10]||(a[10]=me(" Active provider ",-1)),Je(k("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>dt(_e).provider=l)},[...a[9]||(a[9]=[k("option",{value:"builtin"},"Built-in (no AI)",-1),k("option",{value:"gemini"},"Gemini API",-1),k("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[tc,dt(_e).provider]])]),k("fieldset",null,[k("legend",null,[a[11]||(a[11]=me("Gemini ",-1)),dt(_e).provider==="gemini"?(xt(),Et("span",qT,"active")):he("",!0)]),k("label",YT,[a[12]||(a[12]=me(" API key ",-1)),k("span",KT,[Je(k("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>dt(_e).geminiKey=l),type:t.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,jT),[[K_,dt(_e).geminiKey]]),k("button",{type:"button",onClick:a[2]||(a[2]=l=>t.value=!t.value)},Ct(t.value?"Hide":"Show"),1),k("button",{type:"button",disabled:!dt(_e).geminiKey,onClick:a[3]||(a[3]=l=>dt(_e).geminiKey="")},"Clear",8,ZT)])]),k("label",JT,[a[13]||(a[13]=me(" Model ",-1)),Je(k("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>dt(_e).geminiModel=l)},[(xt(!0),Et(fe,null,Pe(dt(Ou),l=>(xt(),Et("option",{key:l,value:l},Ct(l),9,QT))),128))],512),[[tc,dt(_e).geminiModel]])]),k("div",tw,[k("button",{class:"primary",disabled:e.busy,onClick:a[5]||(a[5]=l=>r("gemini",dt(L1)))},Ct(e.busy?"Testing…":"Test Gemini"),9,ew)]),ke(cd,{state:e},null,8,["state"]),a[14]||(a[14]=k("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),k("fieldset",null,[k("legend",null,[a[15]||(a[15]=me("Local model ",-1)),dt(_e).provider==="local"?(xt(),Et("span",nw,"active")):he("",!0)]),k("label",iw,[a[16]||(a[16]=me(" OpenAI-compatible base URL ",-1)),Je(k("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>dt(_e).localUrl=l),placeholder:"http://localhost:1234/v1"},null,512),[[Jn,dt(_e).localUrl]])]),k("label",sw,[a[17]||(a[17]=me(" Model name ",-1)),Je(k("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>dt(_e).localModel=l),placeholder:"google/gemma-4-e4b"},null,512),[[Jn,dt(_e).localModel]])]),k("div",rw,[k("button",{class:"primary",disabled:i.busy,onClick:a[8]||(a[8]=l=>r("local",dt(D1)))},Ct(i.busy?"Testing…":"Test local model"),9,ow)]),ke(cd,{state:i},null,8,["state"]),a[18]||(a[18]=k("p",{class:"note"},[me(" LM Studio: Developer → Server Settings → turn on "),k("b",null,"Enable CORS"),me(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),k("code",null,"OLLAMA_ORIGINS=*"),me(". ")],-1))]),a[21]||(a[21]=k("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]))}},lw=On(aw,[["__scopeId","data-v-b50ceee9"]]),cw={class:"tutor"},uw={class:"tutor-head"},fw={class:"pill"},hw={key:0,class:"status bad"},dw={class:"ask"},pw=["disabled"],mw=["disabled","title"],gw=["disabled"],_w={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const t=n,e=te(""),i=te(!1),s=te(""),r=te(""),o=te(!1),a=Le(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[_e.provider]),l=Le(()=>o.value&&r.value?r.value:Mm(t.context));Ne(()=>[t.context.stageTitle,t.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function c(u){i.value=!0,s.value="";try{const f=await I1({..._e},{...t.context,question:u||""});r.value=f.text,o.value=f.ai,e.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(u,f)=>(xt(),Et("div",cw,[k("div",uw,[f[5]||(f[5]=k("h3",null,"Tutor",-1)),k("span",fw,Ct(a.value),1),k("button",{class:"link",onClick:f[0]||(f[0]=h=>dt(rt).mode="settings")},"Settings")]),k("p",{class:Ce(["answer",{ai:o.value}])},Ct(l.value),3),s.value?(xt(),Et("p",hw,Ct(s.value),1)):he("",!0),k("div",dw,[Je(k("input",{"onUpdate:modelValue":f[1]||(f[1]=h=>e.value=h),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=ec(h=>c(e.value),["enter"]))},null,40,pw),[[Jn,e.value]]),k("button",{disabled:i.value||dt(_e).provider==="builtin",title:dt(_e).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=h=>c(e.value))},Ct(i.value?"…":"Ask"),9,mw),k("button",{disabled:i.value||dt(_e).provider==="builtin",onClick:f[4]||(f[4]=h=>c(""))},"Explain",8,gw)])]))}},vw=On(_w,[["__scopeId","data-v-a9c39dbe"]]),xw={class:"panel"},yw={class:"row"},Mw=["disabled"],Sw={key:0,class:"status ok"},bw={key:0,class:"status bad"},Ew={key:1,class:"status bad"},Tw={class:"note"},ww={class:"player"},Aw=["disabled"],Cw=["disabled"],Rw=["title","disabled"],Pw=["disabled"],Lw=["disabled"],Dw={class:"speed"},Uw={class:"drama",title:"While playing, the camera slowly swirls around the cube"},Iw={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},Nw={class:"bar"},Fw={key:0,class:"now"},Ow={class:"now-stage"},Bw={class:"moves"},kw={key:1,class:"status ok"},zw={class:"stages"},Hw={class:"stage-title"},Vw={class:"goal"},Gw={key:0,class:"steps"},Ww={class:"step-label"},Xw={__name:"SolvePanel",setup(n){const t=te(!1),e=te(!1);Ne(e,d=>rt.playing=d,{immediate:!0}),Ne(()=>rt.drama,d=>localStorage.setItem("rubiks-solver.drama",d?"1":"0")),Ne(()=>rt.finale,d=>{localStorage.setItem("rubiks-solver.finale",d?"1":"0"),d||Qr()});const i=Le(()=>rt.solution),s=Le(()=>{var d;return((d=i.value)==null?void 0:d.moves.length)??0}),r=Le(()=>rt.pointer>=s.value),o=Le(()=>rt.busy||rt.pointer===0),a=d=>jc(rt.n,d),l=Le(()=>{if(!i.value||r.value)return null;const d=Sa()[rt.pointer],y=i.value.stages[d.stage],v=y.steps[d.step];return{stageIdx:d.stage,stage:y,step:v,stepIdx:d.step}}),c=Le(()=>l.value?Sa()[rt.pointer].index:0),u=Le(()=>l.value?a(l.value.stage.id).title:""),f=Le(()=>{var v,x,P;const d=((v=l.value)==null?void 0:v.stage)??i.value.stages[i.value.stages.length-1],y=a(d.id);return{n:rt.n,stageTitle:y.title,goal:y.goal,concept:y.concept,stepLabel:((x=l.value)==null?void 0:x.step.label)??"",moves:((P=l.value)==null?void 0:P.step.moves)??[]}});async function h(){t.value=!0,await TE(),t.value=!1}async function p(){for(e.value=!0;e.value&&rt.pointer<s.value;)await $o();const d=e.value&&rt.pointer>=s.value&&Ma.value;e.value=!1,d&&rt.finale&&EE()}function g(){e.value?e.value=!1:p()}async function _(){const d=rt.speed;for(rt.speed=10;rt.pointer<s.value;)await $o();rt.speed=d}async function m(){e.value=!1;const d=rt.speed;for(rt.speed=10;rt.pointer>0;)await kl();rt.speed=d}return no(()=>{e.value=!1,rt.playing=!1,Qr()}),(d,y)=>(xt(),Et("section",xw,[y[11]||(y[11]=k("h2",null,"Solve it step by step",-1)),k("div",yw,[k("button",{class:"primary",disabled:!dt(er).ok||t.value||dt(rt).editing,onClick:h},Ct(t.value?"Solving…":"Find solution"),9,Mw),dt(Ma)&&!i.value?(xt(),Et("span",Sw,"Already solved!")):he("",!0)]),dt(er).ok?he("",!0):(xt(),Et("ul",bw,[(xt(!0),Et(fe,null,Pe(dt(er).errors,v=>(xt(),Et("li",{key:v},Ct(v),1))),128))])),dt(rt).solveError?(xt(),Et("p",Ew,Ct(dt(rt).solveError),1)):he("",!0),i.value?(xt(),Et(fe,{key:2},[k("p",Tw,Ct(i.value.moves.length)+" moves in "+Ct(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),k("div",ww,[k("button",{title:"Back to start",disabled:o.value,onClick:m},"⏮",8,Aw),k("button",{title:"Previous move",disabled:o.value,onClick:y[0]||(y[0]=(...v)=>dt(kl)&&dt(kl)(...v))},"◀",8,Cw),k("button",{class:"primary",title:e.value?"Pause":"Play",disabled:r.value&&!e.value,onClick:g},Ct(e.value?"⏸":"▶"),9,Rw),k("button",{title:"Next move",disabled:r.value||dt(rt).busy,onClick:y[1]||(y[1]=(...v)=>dt($o)&&dt($o)(...v))},"▶|",8,Pw),k("button",{title:"Jump to end",disabled:r.value||dt(rt).busy,onClick:_},"⏭",8,Lw),k("label",Dw,[y[5]||(y[5]=me(" Speed ",-1)),Je(k("input",{"onUpdate:modelValue":y[2]||(y[2]=v=>dt(rt).speed=v),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[Jn,dt(rt).speed,void 0,{number:!0}]])])]),k("label",Uw,[Je(k("input",{"onUpdate:modelValue":y[3]||(y[3]=v=>dt(rt).drama=v),type:"checkbox"},null,512),[[qr,dt(rt).drama]]),y[6]||(y[6]=me(" Extra drama ",-1)),y[7]||(y[7]=k("small",null,"– slow, smooth camera rotation during playback",-1))]),k("label",Iw,[Je(k("input",{"onUpdate:modelValue":y[4]||(y[4]=v=>dt(rt).finale=v),type:"checkbox"},null,512),[[qr,dt(rt).finale]]),y[8]||(y[8]=me(" Extra, extra drama ",-1)),y[9]||(y[9]=k("small",null,"– 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),k("div",Nw,[k("div",{style:ps({width:`${dt(rt).pointer/Math.max(1,s.value)*100}%`})},null,4)]),l.value?(xt(),Et("div",Fw,[k("div",Ow,[me(Ct(u.value)+" ",1),k("small",null,"– "+Ct(l.value.step.label),1)]),k("div",Bw,[(xt(!0),Et(fe,null,Pe(l.value.step.moves,(v,x)=>(xt(),Et("span",{key:x,class:Ce(["move",{done:c.value>x,active:c.value===x}])},Ct(v),3))),128))])])):r.value?(xt(),Et("p",kw,"Finished – the cube is solved.")):he("",!0),ke(vw,{context:f.value},null,8,["context"]),y[10]||(y[10]=k("h3",null,"All stages",-1)),k("ol",zw,[(xt(!0),Et(fe,null,Pe(i.value.stages,(v,x)=>(xt(),Et("li",{key:v.id,class:Ce({active:l.value&&l.value.stageIdx===x})},[k("div",Hw,[me(Ct(a(v.id).title)+" ",1),k("small",null,Ct(v.moves.length?`${v.moves.length} moves`:"already done"),1)]),k("div",Vw,Ct(a(v.id).goal),1),v.steps.length?(xt(),Et("ul",Gw,[(xt(!0),Et(fe,null,Pe(v.steps,(P,R)=>(xt(),Et("li",{key:R},[k("span",Ww,Ct(P.label),1),k("code",null,Ct(P.moves.join(" ")),1)]))),128))])):he("",!0)],2))),128))])],64)):he("",!0)]))}},$w=On(Xw,[["__scopeId","data-v-954b1a82"]]),qw={class:"app"},Yw=["onClick"],Kw={class:"stage"},jw={class:"viewport"},Zw={class:"overlay"},Jw={key:0,class:"badge"},Qw={key:1,class:"badge ok"},tA={key:0,class:"status ok small"},eA={key:1,class:"status bad small"},nA={__name:"App",setup(n){const t=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"}],e=te(null);function i(r){rt.editing&&_m(r)}function s(r){var l;const o=(l=r.target)==null?void 0:l.tagName;if(o==="INPUT"||o==="TEXTAREA"||o==="SELECT"||r.ctrlKey||r.metaKey||r.altKey)return;const a=r.key.toUpperCase();!"UDLRFB".includes(a)||a.length!==1||rt.editing||(r.preventDefault(),Xi(r.shiftKey?`${a}'`:a))}return Ua(()=>{xE((r,o,a)=>e.value.animate(r,o,a)),yE(()=>e.value.explode()),window.addEventListener("keydown",s)}),no(()=>window.removeEventListener("keydown",s)),(r,o)=>(xt(),Et("div",qw,[k("header",null,[o[2]||(o[2]=k("h1",null,"🧊 Rubik's Solver",-1)),k("nav",null,[(xt(),Et(fe,null,Pe(t,a=>k("button",{key:a.id,class:Ce({on:dt(rt).mode===a.id}),onClick:l=>dt(rt).mode=a.id},Ct(a.label),11,Yw)),64))])]),k("main",null,[k("div",Kw,[k("div",jw,[ke(rE,{ref_key:"cube",ref:e,n:dt(rt).n,state:dt(Xe),paintable:dt(rt).editing,locked:dt(rt).busy||dt(rt).exploding,drama:dt(rt).drama&&dt(rt).playing,rumble:dt(rt).countdown?(4-dt(rt).countdown)/3:0,onPaint:i,onLayerturn:o[0]||(o[0]=a=>dt(Xi)(a))},null,8,["n","state","paintable","locked","drama","rumble"]),k("div",Zw,[k("button",{title:"Reset camera",onClick:o[1]||(o[1]=a=>{var l;return(l=e.value)==null?void 0:l.resetView()})},"⟲ View"),dt(rt).editing?(xt(),Et("span",Jw,"Painting: click stickers")):dt(Ma)?(xt(),Et("span",Qw,"Solved ✓")):he("",!0),dt(rt).mode==="setup"?(xt(),Et("div",{key:2,class:Ce(["validity",{ok:dt(er).ok}])},[dt(er).ok?(xt(),Et("p",tA,"This position is valid and solvable.")):(xt(),Et("ul",eA,[(xt(!0),Et(fe,null,Pe(dt(er).errors,a=>(xt(),Et("li",{key:a},Ct(a),1))),128))]))],2)):he("",!0)]),dt(rt).countdown?(xt(),Et("div",{key:dt(rt).countdown,class:"countdown","aria-live":"assertive"},[k("span",null,Ct(dt(rt).countdown),1)])):he("",!0)]),ke(HE),ke(E1),o[3]||(o[3]=k("p",{class:"keys"}," Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise). ",-1))]),k("aside",null,[dt(rt).mode==="setup"?(xt(),Xs(zT,{key:0})):dt(rt).mode==="solve"?(xt(),Xs($w,{key:1})):dt(rt).mode==="learn"?(xt(),Xs(OE,{key:2})):dt(rt).mode==="settings"?(xt(),Xs(lw,{key:3})):(xt(),Xs(a1,{key:4}))])])]))}};t0(nA).mount("#app");
