(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function su(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ve={},fs=[],Zn=()=>{},ud=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ca=n=>n.startsWith("onUpdate:"),Ke=Object.assign,ru=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dm=Object.prototype.hasOwnProperty,de=(n,t)=>Dm.call(n,t),Gt=Array.isArray,Bi=n=>so(n)==="[object Map]",Mi=n=>so(n)==="[object Set]",Zu=n=>so(n)==="[object Date]",Kt=n=>typeof n=="function",Ce=n=>typeof n=="string",ti=n=>typeof n=="symbol",ge=n=>n!==null&&typeof n=="object",fd=n=>(ge(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),hd=Object.prototype.toString,so=n=>hd.call(n),Um=n=>so(n).slice(8,-1),dd=n=>so(n)==="[object Object]",ou=n=>Ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Im=/-\w/g,Dn=Ra(n=>n.replace(Im,t=>t.slice(1).toUpperCase())),Nm=/\B([A-Z])/g,Ki=Ra(n=>n.replace(Nm,"-$1").toLowerCase()),pd=Ra(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=Ra(n=>n?`on${pd(n)}`:""),Yn=(n,t)=>!Object.is(n,t),Zo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},md=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Pa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ju;const La=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cn(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ce(i)?km(i):Cn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ce(n)||ge(n))return n}const Fm=/;(?![^(]*\))/g,Om=/:([^]+)/,Bm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function km(n){const t={};return n.replace(Bm,e=>e.startsWith("/*")?"":e).split(Fm).forEach(e=>{if(e){const i=e.split(Om);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Re(n){let t="";if(Ce(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=Re(n[e]);i&&(t+=i+" ")}else if(ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=su(zm);function gd(n){return!!n||n===""}function Vm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Fn(n[s],t[s],e);return i}function Qu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Fn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Gm(n,t,e){let i=Bi(n),s=Bi(t);if(i||s||(i=Mi(n),s=Mi(t),i||s))return i&&s?Qu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Fn(n[a],t[a],e))return!1}return String(n)===String(t)}function tf(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Fn(n,t,e){if(n===t)return!0;let i=Zu(n),s=Zu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=ti(n),s=ti(t),i||s?n===t:(i=Gt(n),s=Gt(t),i||s?i&&s?tf(n,t,e,Vm):!1:(i=ge(n),s=ge(t),i||s?!i||!s?!1:tf(n,t,e,Gm):String(n)===String(t))))}function au(n,t){return n.findIndex(e=>Fn(e,t))}const _d=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Ce(n)?n:n==null?"":Gt(n)||ge(n)&&(n.toString===hd||!Kt(n.toString))?_d(n)?Rt(n.value):JSON.stringify(n,vd,2):String(n),vd=(n,t)=>_d(t)?vd(n,t.value):Bi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ya(i,r)+" =>"]=s,e),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ya(e))}:ti(t)?Ya(t):ge(t)&&!Gt(t)&&!dd(t)?String(t):t,Ya=(n,t="")=>{var e;return ti(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class Wm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&He&&(He.active?(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){if(this._on>0&&--this._on===0){if(He===this)He=this.prevScope;else{let t=He;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xm(){return He}let Se;const Ka=new WeakSet;class xd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&(He.active?He.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ef(this),Sd(this);const t=Se,e=Un;Se=this,Un=!0;try{return this.fn()}finally{bd(this),Se=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)uu(t);this.deps=this.depsTail=void 0,ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let yd=0,Or,Br;function Md(n,t=!1){if(n.flags|=8,t){n.next=Br,Br=n;return}n.next=Or,Or=n}function lu(){yd++}function cu(){if(--yd>0)return;if(Br){let t=Br;for(Br=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Or;){let t=Or;for(Or=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Sd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function bd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),uu(i),$m(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function $l(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ed(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ed(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xr)||(n.globalVersion=Xr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$l(n))))return;n.flags|=2;const t=n.dep,e=Se,i=Un;Se=n,Un=!0;try{Sd(n);const s=n.fn(n._value);(t.version===0||Yn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Se=e,Un=i,bd(n),n.flags&=-3}}function uu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)uu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $m(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Un=!0;const wd=[];function Si(){wd.push(Un),Un=!1}function bi(){const n=wd.pop();Un=n===void 0?!0:n}function ef(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Se;Se=void 0;try{t()}finally{Se=e}}}let Xr=0;class qm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Se||!Un||Se===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Se)e=this.activeLink=new qm(Se,this),Se.deps?(e.prevDep=Se.depsTail,Se.depsTail.nextDep=e,Se.depsTail=e):Se.deps=Se.depsTail=e,Td(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Se.depsTail,e.nextDep=void 0,Se.depsTail.nextDep=e,Se.depsTail=e,Se.deps===e&&(Se.deps=i)}return e}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){lu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{cu()}}}function Td(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Td(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ql=new WeakMap,gs=Symbol(""),Yl=Symbol(""),$r=Symbol("");function Xe(n,t,e){if(Un&&Se){let i=ql.get(n);i||ql.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new fu),s.map=i,s.key=e),s.track()}}function di(n,t,e,i,s,r){const o=ql.get(n);if(!o){Xr++;return}const a=l=>{l&&l.trigger()};if(lu(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&ou(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===$r||!ti(d)&&d>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get($r)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Bi(n)&&a(o.get(Yl)));break;case"delete":l||(a(o.get(gs)),Bi(n)&&a(o.get(Yl)));break;case"set":Bi(n)&&a(o.get(gs));break}}cu()}function Ts(n){const t=he(n);return t===n||(Xe(t,"iterate",$r),yn(n))?t:ei(n)?ki(n)?t.map(e=>Wi(Mn(e))):t.map(Wi):t.map(Mn)}function Da(n){return Xe(n=he(n),"iterate",$r),n}function Xn(n,t){return ei(n)?Wi(ki(n)?Mn(t):t):Mn(t)}const Ym={__proto__:null,[Symbol.iterator](){return ja(this,Symbol.iterator,n=>Xn(this,n))},concat(...n){return Ts(this).concat(...n.map(t=>Gt(t)?Ts(t):t))},entries(){return ja(this,"entries",n=>(n[1]=Xn(this,n[1]),n))},every(n,t){return si(this,"every",n,t,void 0,arguments)},filter(n,t){return si(this,"filter",n,t,e=>e.map(i=>Xn(this,i)),arguments)},find(n,t){return si(this,"find",n,t,e=>Xn(this,e),arguments)},findIndex(n,t){return si(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return si(this,"findLast",n,t,e=>Xn(this,e),arguments)},findLastIndex(n,t){return si(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return si(this,"forEach",n,t,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return Ts(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,t){return si(this,"map",n,t,void 0,arguments)},pop(){return yr(this,"pop")},push(...n){return yr(this,"push",n)},reduce(n,...t){return nf(this,"reduce",n,t)},reduceRight(n,...t){return nf(this,"reduceRight",n,t)},shift(){return yr(this,"shift")},some(n,t){return si(this,"some",n,t,void 0,arguments)},splice(...n){return yr(this,"splice",n)},toReversed(){return Ts(this).toReversed()},toSorted(n){return Ts(this).toSorted(n)},toSpliced(...n){return Ts(this).toSpliced(...n)},unshift(...n){return yr(this,"unshift",n)},values(){return ja(this,"values",n=>Xn(this,n))}};function ja(n,t,e){const i=Da(n),s=i[t]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Km=Array.prototype;function si(n,t,e,i,s,r){const o=Da(n),a=o!==n&&!yn(n),l=o[t];if(l!==Km[t]){const f=l.apply(n,r);return a?Mn(f):f}let c=e;o!==n&&(a?c=function(f,d){return e.call(this,Xn(n,f),d,n)}:e.length>2&&(c=function(f,d){return e.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function nf(n,t,e,i){const s=Da(n),r=s!==n&&!yn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Xn(n,c)),e.call(this,c,Xn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=s[t](o,...i);return a?Xn(n,l):l}function Za(n,t,e){const i=he(n);Xe(i,"iterate",$r);const s=i[t](...e);return(s===-1||s===!1)&&pu(e[0])?(e[0]=he(e[0]),i[t](...e)):s}function yr(n,t,e=[]){Si(),lu();const i=he(n)[t].apply(n,e);return cu(),bi(),i}const jm=su("__proto__,__v_isRef,__isVue"),Ad=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ti));function Zm(n){ti(n)||(n=String(n));const t=he(this);return Xe(t,"has",n),t.hasOwnProperty(n)}class Cd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ag:Dd:r?Ld:Pd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=Ym[e]))return l;if(e==="hasOwnProperty")return Zm}const a=Reflect.get(t,e,qe(t)?t:i);if((ti(e)?Ad.has(e):jm(e))||(s||Xe(t,"get",e),r))return a;if(qe(a)){const l=o&&ou(e)?a:a.value;return s&&ge(l)?jl(l):l}return ge(a)?s?jl(a):In(a):a}}class Rd extends Cd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Gt(t)&&ou(e);if(!this._isShallow){const c=ei(r);if(!yn(i)&&!ei(i)&&(r=he(r),i=he(i)),!o&&qe(r)&&!qe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:de(t,e),l=Reflect.set(t,e,i,qe(t)?t:s);return t===he(s)&&l&&(a?Yn(i,r)&&di(t,"set",e,i):di(t,"add",e,i)),l}deleteProperty(t,e){const i=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&di(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!ti(e)||!Ad.has(e))&&Xe(t,"has",e),i}ownKeys(t){return Xe(t,"iterate",Gt(t)?"length":gs),Reflect.ownKeys(t)}}class Jm extends Cd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qm=new Rd,tg=new Jm,eg=new Rd(!0);const Kl=n=>n,mo=n=>Reflect.getPrototypeOf(n);function ng(n,t,e){return function(...i){const s=this.__v_raw,r=he(s),o=Bi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Kl:t?Wi:Mn;return!t&&Xe(r,"iterate",l?Yl:gs),Ke(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function go(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ig(n,t){const e={get(s){const r=this.__v_raw,o=he(r),a=he(s);n||(Yn(s,a)&&Xe(o,"get",s),Xe(o,"get",a));const{has:l}=mo(o),c=t?Kl:n?Wi:Mn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xe(he(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=he(r),a=he(s);return n||(Yn(s,a)&&Xe(o,"has",s),Xe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=he(a),c=t?Kl:n?Wi:Mn;return!n&&Xe(l,"iterate",gs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ke(e,n?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(s){const r=he(this),o=mo(r),a=he(s),l=!t&&!yn(s)&&!ei(s)?a:s;return o.has.call(r,l)||Yn(s,l)&&o.has.call(r,s)||Yn(a,l)&&o.has.call(r,a)||(r.add(l),di(r,"add",l,l)),this},set(s,r){!t&&!yn(r)&&!ei(r)&&(r=he(r));const o=he(this),{has:a,get:l}=mo(o);let c=a.call(o,s);c||(s=he(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Yn(r,u)&&di(o,"set",s,r):di(o,"add",s,r),this},delete(s){const r=he(this),{has:o,get:a}=mo(r);let l=o.call(r,s);l||(s=he(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=he(this),r=s.size!==0,o=s.clear();return r&&di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ng(s,n,t)}),e}function hu(n,t){const e=ig(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(de(e,s)&&s in i?e:i,s,r)}const sg={get:hu(!1,!1)},rg={get:hu(!1,!0)},og={get:hu(!0,!1)};const Pd=new WeakMap,Ld=new WeakMap,Dd=new WeakMap,ag=new WeakMap;function lg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function In(n){return ei(n)?n:du(n,!1,Qm,sg,Pd)}function cg(n){return du(n,!1,eg,rg,Ld)}function jl(n){return du(n,!0,tg,og,Dd)}function du(n,t,e,i,s){if(!ge(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=lg(Um(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ki(n){return ei(n)?ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ei(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function pu(n){return n?!!n.__v_raw:!1}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function ug(n){return!de(n,"__v_skip")&&Object.isExtensible(n)&&md(n,"__v_skip",!0),n}const Mn=n=>ge(n)?In(n):n,Wi=n=>ge(n)?jl(n):n;function qe(n){return n?n.__v_isRef===!0:!1}function Yt(n){return Ud(n,!1)}function fg(n){return Ud(n,!0)}function Ud(n,t){return qe(n)?n:new hg(n,t)}class hg{constructor(t,e){this.dep=new fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:he(t),this._value=e?t:Mn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||yn(t)||ei(t);t=i?t:he(t),Yn(t,e)&&(this._rawValue=t,this._value=i?t:Mn(t),this.dep.trigger())}}function ut(n){return qe(n)?n.value:n}const dg={get:(n,t,e)=>t==="__v_raw"?n:ut(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return qe(s)&&!qe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Id(n){return ki(n)?n:new Proxy(n,dg)}class pg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Md(this,!0),!0}get value(){const t=this.dep.track();return Ed(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function mg(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new pg(i,s,e)}const _o={},fa=new WeakMap;let os;function gg(n,t=!1,e=os){if(e){let i=fa.get(e);i||fa.set(e,i=[]),i.push(n)}}function _g(n,t,e=ve){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:yn(y)||s===!1||s===0?pi(y,1):pi(y);let u,f,d,p,g=!1,_=!1;if(qe(n)?(f=()=>n.value,g=yn(n)):ki(n)?(f=()=>c(n),g=!0):Gt(n)?(_=!0,g=n.some(y=>ki(y)||yn(y)),f=()=>n.map(y=>{if(qe(y))return y.value;if(ki(y))return c(y);if(Kt(y))return l?l(y,2):y()})):Kt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(d){Si();try{d()}finally{bi()}}const y=os;os=u;try{return l?l(n,3,[p]):n(p)}finally{os=y}}:f=Zn,t&&s){const y=f,P=s===!0?1/0:s;f=()=>pi(y(),P)}const m=Xm(),h=()=>{u.stop(),m&&m.active&&ru(m.effects,u)};if(r&&t){const y=t;t=(...P)=>{const C=y(...P);return h(),C}}let x=_?new Array(n.length).fill(_o):_o;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const P=u.run();if(y||s||g||(_?P.some((C,L)=>Yn(C,x[L])):Yn(P,x))){d&&d();const C=os;os=u;try{const L=[P,x===_o?void 0:_&&x[0]===_o?[]:x,p];x=P,l?l(t,3,L):t(...L)}finally{os=C}}}else u.run()};return a&&a(v),u=new xd(f),u.scheduler=o?()=>o(v,!1):v,p=y=>gg(y,!1,u),d=u.onStop=()=>{const y=fa.get(u);if(y){if(l)l(y,4);else for(const P of y)P();fa.delete(u)}},t?i?v(!0):x=u.run():o?o(v.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function pi(n,t=1/0,e){if(t<=0||!ge(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,qe(n))pi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)pi(n[i],t,e);else if(Mi(n)||Bi(n))n.forEach(i=>{pi(i,t,e)});else if(dd(n)){for(const i in n)pi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(n,t,e,i){try{return i?n(...i):n()}catch(s){Ua(s,t,e)}}function On(n,t,e,i){if(Kt(n)){const s=ro(n,t,e,i);return s&&fd(s)&&s.catch(r=>{Ua(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],t,e,i));return s}}function Ua(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ve;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Si(),ro(r,null,10,[n,l,c]),bi();return}}vg(n,e,s,i,o)}function vg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Qe=[];let Wn=-1;const Qs=[];let Fi=null,qs=0;const Nd=Promise.resolve();let ha=null;function mu(n){const t=ha||Nd;return n?t.then(this?n.bind(this):n):t}function xg(n){let t=Wn+1,e=Qe.length;for(;t<e;){const i=t+e>>>1,s=Qe[i],r=qr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function gu(n){if(!(n.flags&1)){const t=qr(n),e=Qe[Qe.length-1];!e||!(n.flags&2)&&t>=qr(e)?Qe.push(n):Qe.splice(xg(t),0,n),n.flags|=1,Fd()}}function Fd(){ha||(ha=Nd.then(Bd))}function yg(n){if(!Gt(n))Fi&&n.id===-1?Fi.splice(qs+1,0,n):n.flags&1||(Qs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Qs.push(n[t]);Fd()}function sf(n,t,e=Wn+1){for(;e<Qe.length;e++){const i=Qe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Od(n){if(Qs.length){const t=[...new Set(Qs)].sort((e,i)=>qr(e)-qr(i));if(Qs.length=0,Fi){for(let e=0;e<t.length;e++)Fi.push(t[e]);return}for(Fi=t,qs=0;qs<Fi.length;qs++){const e=Fi[qs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Fi=null,qs=0}}const qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bd(n){try{for(Wn=0;Wn<Qe.length;Wn++){const t=Qe[Wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ro(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Wn<Qe.length;Wn++){const t=Qe[Wn];t&&(t.flags&=-2)}Wn=-1,Qe.length=0,Od(),ha=null,(Qe.length||Qs.length)&&Bd()}}let xn=null,kd=null;function da(n){const t=xn;return xn=n,kd=n&&n.type.__scopeId||null,t}function Mg(n,t=xn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&mf(-1);const r=da(t),o=_s.length;let a;try{a=n(...s)}finally{for(let l=_s.length;l>o;l--)cp();da(r),i._d&&mf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Oe(n,t){if(xn===null)return n;const e=Ba(xn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ve]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Si(),On(l,e,8,[n.el,a,n,t]),bi())}}function Sg(n,t){if(tn){let e=tn.provides;const i=tn.parent&&tn.parent.provides;i===e&&(e=tn.provides=Object.create(i)),e[n]=t}}function Jo(n,t,e=!1){const i=__();if(i||tr){let s=tr?tr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}const bg=Symbol.for("v-scx"),Eg=()=>Jo(bg);function Ue(n,t,e){return zd(n,t,e)}function zd(n,t,e=ve){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ke({},e),l=t&&i||!t&&r!=="post";let c;if(jr){if(r==="sync"){const p=Eg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Zn,p.resume=Zn,p.pause=Zn,p}}const u=tn;a.call=(p,g,_)=>On(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{sn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():gu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=_g(n,t,a);return jr&&(c?c.push(d):l&&d()),d}function wg(n,t,e){const i=this.proxy,s=Ce(n)?n.includes(".")?Hd(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=ao(this),a=zd(s,r.bind(i),e);return o(),a}function Hd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Tg=Symbol("_vte"),Ia=n=>n.__isTeleport,Ja=Symbol("_leaveCb");function Ag(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ei){t=e;break}}return t}function Vd(n){if(!vu(n))return Ia(n.type)&&n.children?Ag(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function _u(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;_u(Ia(e.type)&&Vd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rf(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const pa=new WeakMap;function kr(n,t,e,i,s=!1){if(Gt(n)){n.forEach((_,m)=>kr(_,t&&(Gt(t)?t[m]:t),e,i,s));return}if(zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ba(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ve?a.refs={}:a.refs,f=a.setupState,d=he(f),p=f===ve?ud:_=>rf(u,_)?!1:de(d,_),g=(_,m)=>!(m&&rf(u,m));if(c!=null&&c!==l){if(of(t),Ce(c))u[c]=null,p(c)&&(f[c]=null);else if(qe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Kt(l))ro(l,a,12,[o,u]);else{const _=Ce(l),m=qe(l);if(_||m){const h=()=>{if(n.f){const x=_?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Gt(x)&&ru(x,r);else if(Gt(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{h(),pa.delete(n)};x.id=-1,pa.set(n,x),sn(x,e)}else of(n),h()}}}function of(n){const t=pa.get(n);t&&(t.flags|=8,pa.delete(n))}La().requestIdleCallback;La().cancelIdleCallback;const zr=n=>!!n.type.__asyncLoader,vu=n=>n.type.__isKeepAlive;function Cg(n,t){Wd(n,"a",t)}function Rg(n,t){Wd(n,"da",t)}function Wd(n,t,e=tn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Na(t,i,e),e){let s=e.parent;for(;s&&s.parent;)vu(s.parent.vnode)&&Pg(i,t,e,s),s=s.parent}}function Pg(n,t,e,i){const s=Na(t,n,i,!0);Xd(()=>{ru(i[t],s)},e)}function Na(n,t,e=tn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Si();const a=ao(e),l=On(t,e,n,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const Ti=n=>(t,e=tn)=>{(!jr||n==="sp")&&Na(n,(...i)=>t(...i),e)},Lg=Ti("bm"),oo=Ti("m"),Dg=Ti("bu"),Ug=Ti("u"),rr=Ti("bum"),Xd=Ti("um"),Ig=Ti("sp"),Ng=Ti("rtg"),Fg=Ti("rtc");function Og(n,t=tn){Na("ec",n,t)}const Bg=Symbol.for("v-ndc");function Pe(n,t,e,i){let s;const r=e,o=Gt(n);if(o||Ce(n)){const a=o&&ki(n);let l=!1,c=!1;a&&(l=!yn(n),c=ei(n),n=Da(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?Wi(Mn(n[u])):Mn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ge(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Zl=n=>n?dp(n)?Ba(n):Zl(n.parent):null,Hr=Ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zl(n.parent),$root:n=>Zl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qd(n),$forceUpdate:n=>n.f||(n.f=()=>{gu(n.update)}),$nextTick:n=>n.n||(n.n=mu.bind(n.proxy)),$watch:n=>wg.bind(n)}),Qa=(n,t)=>n!==ve&&!n.__isScriptSetup&&de(n,t),kg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Qa(i,t))return o[t]=1,i[t];if(s!==ve&&de(s,t))return o[t]=2,s[t];if(de(r,t))return o[t]=3,r[t];if(e!==ve&&de(e,t))return o[t]=4,e[t];Jl&&(o[t]=0)}}const c=Hr[t];let u,f;if(c)return t==="$attrs"&&Xe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ve&&de(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,de(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Qa(s,t)?(s[t]=e,!0):i!==ve&&de(i,t)?(i[t]=e,!0):de(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ve&&a[0]!=="$"&&de(n,a)||Qa(t,a)||de(r,a)||de(i,a)||de(Hr,a)||de(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:de(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function af(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Jl=!0;function zg(n){const t=qd(n),e=n.proxy,i=n.ctx;Jl=!1,t.beforeCreate&&lf(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:x,destroyed:v,unmounted:y,render:P,renderTracked:C,renderTriggered:L,errorCaptured:F,serverPrefetch:w,expose:b,inheritAttrs:I,components:st,directives:K,filters:rt}=t;if(c&&Hg(c,i,null),o)for(const ft in o){const X=o[ft];Kt(X)&&(i[ft]=X.bind(e))}if(s){const ft=s.call(e,e);ge(ft)&&(n.data=In(ft))}if(Jl=!0,r)for(const ft in r){const X=r[ft],Et=Kt(X)?X.bind(e,e):Kt(X.get)?X.get.bind(e,e):Zn,j=!Kt(X)&&Kt(X.set)?X.set.bind(e):Zn,O=De({get:Et,set:j});Object.defineProperty(i,ft,{enumerable:!0,configurable:!0,get:()=>O.value,set:W=>O.value=W})}if(a)for(const ft in a)$d(a[ft],i,e,ft);if(l){const ft=Kt(l)?l.call(e):l;Reflect.ownKeys(ft).forEach(X=>{Sg(X,ft[X])})}u&&lf(u,n,"c");function q(ft,X){Gt(X)?X.forEach(Et=>ft(Et.bind(e))):X&&ft(X.bind(e))}if(q(Lg,f),q(oo,d),q(Dg,p),q(Ug,g),q(Cg,_),q(Rg,m),q(Og,F),q(Fg,C),q(Ng,L),q(rr,x),q(Xd,y),q(Ig,w),Gt(b))if(b.length){const ft=n.exposed||(n.exposed={});b.forEach(X=>{Object.defineProperty(ft,X,{get:()=>e[X],set:Et=>e[X]=Et,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Zn&&(n.render=P),I!=null&&(n.inheritAttrs=I),st&&(n.components=st),K&&(n.directives=K),w&&Gd(n)}function Hg(n,t,e=Zn){Gt(n)&&(n=Ql(n));for(const i in n){const s=n[i];let r;ge(s)?"default"in s?r=Jo(s.from||i,s.default,!0):r=Jo(s.from||i):r=Jo(s),qe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function lf(n,t,e){On(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function $d(n,t,e,i){let s=i.includes(".")?Hd(e,i):()=>e[i];if(Ce(n)){const r=t[n];Kt(r)&&Ue(s,r)}else if(Kt(n))Ue(s,n.bind(e));else if(ge(n))if(Gt(n))n.forEach(r=>$d(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&Ue(s,r,n)}}function qd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ma(l,c,o,!0)),ma(l,t,o)),ge(t)&&r.set(t,l),l}function ma(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ma(n,r,e,!0),s&&s.forEach(o=>ma(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Vg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Vg={data:cf,props:uf,emits:uf,methods:Dr,computed:Dr,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Dr,directives:Dr,watch:Wg,provide:cf,inject:Gg};function cf(n,t){return t?n?function(){return Ke(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function Gg(n,t){return Dr(Ql(n),Ql(t))}function Ql(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ze(n,t){return n?[...new Set([].concat(n,t))]:t}function Dr(n,t){return n?Ke(Object.create(null),n,t):t}function uf(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Ke(Object.create(null),af(n),af(t??{})):t}function Wg(n,t){if(!n)return t;if(!t)return n;const e=Ke(Object.create(null),n);for(const i in t)e[i]=Ze(n[i],t[i]);return e}function Yd(){return{app:null,config:{isNativeTag:ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function $g(n,t){return function(i,s=null){Kt(i)||(i=Ke({},i)),s!=null&&!ge(s)&&(s=null);const r=Yd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:b_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Kt(u.install)?(o.add(u),u.install(c,...f)):Kt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ve(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ba(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=tr;tr=c;try{return u()}finally{tr=f}}};return c}}let tr=null;const qg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Dn(t)}Modifiers`]||n[`${Ki(t)}Modifiers`];function Yg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ve;let s=e;const r=t.startsWith("update:"),o=r&&qg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ce(u)?u.trim():u)),o.number&&(s=s.map(Pa)));let a,l=i[a=qa(t)]||i[a=qa(Dn(t))];!l&&r&&(l=i[a=qa(Ki(t))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const Kg=new WeakMap;function Kd(n,t,e=!1){const i=e?Kg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=c=>{const u=Kd(c,t,!0);u&&(a=!0,Ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ge(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Ke(o,r),ge(n)&&i.set(n,o),o)}function Fa(n,t){return!n||!Aa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),de(n,t[0].toLowerCase()+t.slice(1))||de(n,Ki(t))||de(n,t))}function ff(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=n,m=da(n);let h,x;try{if(e.shapeFlag&4){const y=s||i,P=y;h=$n(c.call(P,y,u,f,p,d,g)),x=a}else{const y=t;h=$n(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),x=t.props?a:jg(a)}}catch(y){_s.length=0,Ua(y,n,1),h=Ve(Ei)}let v=h;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:P}=v;y.length&&P&7&&(r&&y.some(Ca)&&(x=Zg(x,r)),v=or(v,x,!1,!0))}if(e.dirs&&(v=or(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const y=Ia(v.type)&&Vd(v)||v;_u(y,e.transition)}return h=v,da(m),h}const jg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},Zg=(n,t)=>{const e={};for(const i in n)(!Ca(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Jg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?hf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(jd(o,i,d)&&!Fa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hf(i,o,c):!0:!!o;return!1}function hf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(jd(t,n,r)&&!Fa(e,r))return!0}return!1}function jd(n,t,e){const i=n[e],s=t[e];return e==="style"&&ge(i)&&ge(s)?!Fn(i,s):i!==s}function Qg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Zd={},Jd=()=>Object.create(Zd),Qd=n=>Object.getPrototypeOf(n)===Zd;function t_(n,t,e,i=!1){const s={},r=Jd();n.propsDefaults=Object.create(null),tp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function e_(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=he(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Fa(n.emitsOptions,d))continue;const p=t[d];if(l)if(de(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Dn(d);s[g]=tc(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{tp(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!de(t,f)&&((u=Ki(f))===f||!de(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=tc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!de(t,f))&&(delete r[f],c=!0)}c&&di(n.attrs,"set","")}function tp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Fr(l))continue;const c=t[l];let u;s&&de(s,u=Dn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=he(e),c=a||ve;for(let u=0;u<r.length;u++){const f=r[u];e[f]=tc(s,l,f,c[f],n,!de(c,f))}}return o}function tc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=ao(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ki(e))&&(i=!0))}return i}const n_=new WeakMap;function ep(n,t,e=!1){const i=e?n_:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const u=f=>{l=!0;const[d,p]=ep(f,t,!0);Ke(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ge(n)&&i.set(n,fs),fs;if(Gt(r))for(let u=0;u<r.length;u++){const f=Dn(r[u]);df(f)&&(o[f]=ve)}else if(r)for(const u in r){const f=Dn(u);if(df(f)){const d=r[u],p=o[f]=Gt(d)||Kt(d)?{type:d}:Ke({},d),g=p.type;let _=!1,m=!0;if(Gt(g))for(let h=0;h<g.length;++h){const x=g[h],v=Kt(x)&&x.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=Kt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||de(p,"default"))&&a.push(f)}}const c=[o,a];return ge(n)&&i.set(n,c),c}function df(n){return n[0]!=="$"&&!Fr(n)}const xu=n=>n==="_"||n==="_ctx"||n==="$stable",yu=n=>Gt(n)?n.map($n):[$n(n)],i_=(n,t,e)=>{if(t._n)return t;const i=Mg((...s)=>yu(t(...s)),e);return i._c=!1,i},np=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xu(s))continue;const r=n[s];if(Kt(r))t[s]=i_(s,r,i);else if(r!=null){const o=yu(r);t[s]=()=>o}}},ip=(n,t)=>{const e=yu(t);n.slots.default=()=>e},sp=(n,t,e)=>{for(const i in t)(e||!xu(i))&&(n[i]=t[i])},s_=(n,t,e)=>{const i=n.slots=Jd();if(n.vnode.shapeFlag&32){const s=t._;s?(sp(i,t,e),e&&md(i,"_",s,!0)):np(t,i)}else t&&ip(n,t)},r_=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ve;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:sp(s,t,e):(r=!t.$stable,np(t,s)),o=t}else t&&(ip(n,t),o={default:1});if(r)for(const a in s)!xu(a)&&o[a]==null&&delete s[a]},sn=u_;function o_(n){return a_(n)}function a_(n,t){const e=La();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Zn,insertStaticContent:g}=n,_=(A,N,T,pt=null,Q=null,tt=null,lt=void 0,_t=null,it=!!N.dynamicChildren)=>{if(A===N)return;A&&!Mr(A,N)&&(pt=gt(A),W(A,Q,tt,!0),A=null),N.patchFlag===-2&&(it=!1,N.dynamicChildren=null),N.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(N.dynamicChildren===fs&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:S,ref:M,shapeFlag:U}=N;switch(S){case Oa:m(A,N,T,pt);break;case Ei:h(A,N,T,pt);break;case el:A==null&&x(N,T,pt,lt);break;case ce:st(A,N,T,pt,Q,tt,lt,_t,it);break;default:U&1?P(A,N,T,pt,Q,tt,lt,_t,it):U&6?K(A,N,T,pt,Q,tt,lt,_t,it):(U&64||U&128)&&S.process(A,N,T,pt,Q,tt,lt,_t,it,Wt)}M!=null&&Q?kr(M,A&&A.ref,tt,N||A,!N):M==null&&A&&A.ref!=null&&kr(A.ref,null,tt,A,!0)},m=(A,N,T,pt)=>{if(A==null)i(N.el=a(N.children),T,pt);else{const Q=N.el=A.el;N.children!==A.children&&c(Q,N.children)}},h=(A,N,T,pt)=>{A==null?i(N.el=l(N.children||""),T,pt):N.el=A.el},x=(A,N,T,pt)=>{[A.el,A.anchor]=g(A.children,N,T,pt,A.el,A.anchor)},v=({el:A,anchor:N},T,pt)=>{let Q;for(;A&&A!==N;)Q=d(A),i(A,T,pt),A=Q;i(N,T,pt)},y=({el:A,anchor:N})=>{let T;for(;A&&A!==N;)T=d(A),s(A),A=T;s(N)},P=(A,N,T,pt,Q,tt,lt,_t,it)=>{if(N.type==="svg"?lt="svg":N.type==="math"&&(lt="mathml"),A==null)C(N,T,pt,Q,tt,lt,_t,it);else{const S=A.el&&A.el._isVueCE?A.el:null;try{S&&S._beginPatch(),w(A,N,Q,tt,lt,_t,it)}finally{S&&S._endPatch()}}},C=(A,N,T,pt,Q,tt,lt,_t)=>{let it,S;const{props:M,shapeFlag:U,transition:$,dirs:R}=A;if(it=A.el=o(A.type,tt,M&&M.is,M),U&8?u(it,A.children):U&16&&F(A.children,it,null,pt,Q,tl(A,tt),lt,_t),R&&Zi(A,null,pt,"created"),L(it,A,A.scopeId,lt,pt),M){for(const G in M)G!=="value"&&!Fr(G)&&r(it,G,null,M[G],tt,pt);"value"in M&&r(it,"value",null,M.value,tt),(S=M.onVnodeBeforeMount)&&Gn(S,pt,A)}R&&Zi(A,null,pt,"beforeMount");const D=l_(Q,$);D&&$.beforeEnter(it),i(it,N,T),((S=M&&M.onVnodeMounted)||D||R)&&sn(()=>{try{S&&Gn(S,pt,A),D&&$.enter(it),R&&Zi(A,null,pt,"mounted")}finally{}},Q)},L=(A,N,T,pt,Q)=>{if(T&&p(A,T),pt)for(let tt=0;tt<pt.length;tt++)p(A,pt[tt]);if(Q){let tt=Q.subTree;if(N===tt||lp(tt.type)&&(tt.ssContent===N||tt.ssFallback===N)){const lt=Q.vnode;L(A,lt,lt.scopeId,lt.slotScopeIds,Q.parent)}}},F=(A,N,T,pt,Q,tt,lt,_t,it=0)=>{for(let S=it;S<A.length;S++){const M=A[S]=_t?hi(A[S]):$n(A[S]);_(null,M,N,T,pt,Q,tt,lt,_t)}},w=(A,N,T,pt,Q,tt,lt)=>{const _t=N.el=A.el;let{patchFlag:it,dynamicChildren:S,dirs:M}=N;it|=A.patchFlag&16;const U=A.props||ve,$=N.props||ve;let R;if(T&&Ji(T,!1),(R=$.onVnodeBeforeUpdate)&&Gn(R,T,N,A),M&&Zi(N,A,T,"beforeUpdate"),T&&Ji(T,!0),S&&(!A.dynamicChildren||A.dynamicChildren.length!==S.length)&&(it=0,lt=!1,S=null),(U.innerHTML&&$.innerHTML==null||U.textContent&&$.textContent==null)&&u(_t,""),S?b(A.dynamicChildren,S,_t,T,pt,tl(N,Q),tt):lt||X(A,N,_t,null,T,pt,tl(N,Q),tt,!1),it>0){if(it&16)I(_t,U,$,T,Q);else if(it&2&&U.class!==$.class&&r(_t,"class",null,$.class,Q),it&4&&r(_t,"style",U.style,$.style,Q),it&8){const D=N.dynamicProps;for(let G=0;G<D.length;G++){const J=D[G],mt=U[J],Lt=$[J];(Lt!==mt||J==="value")&&r(_t,J,mt,Lt,Q,T)}}it&1&&A.children!==N.children&&u(_t,N.children)}else!lt&&S==null&&I(_t,U,$,T,Q);((R=$.onVnodeUpdated)||M)&&sn(()=>{R&&Gn(R,T,N,A),M&&Zi(N,A,T,"updated")},pt)},b=(A,N,T,pt,Q,tt,lt)=>{for(let _t=0;_t<N.length;_t++){const it=A[_t],S=N[_t],M=it.el&&(it.type===ce||!Mr(it,S)||it.shapeFlag&198)?f(it.el):T;_(it,S,M,null,pt,Q,tt,lt,!0)}},I=(A,N,T,pt,Q)=>{if(N!==T){if(N!==ve)for(const tt in N)!Fr(tt)&&!(tt in T)&&r(A,tt,N[tt],null,Q,pt);for(const tt in T){if(Fr(tt))continue;const lt=T[tt],_t=N[tt];lt!==_t&&tt!=="value"&&r(A,tt,_t,lt,Q,pt)}"value"in T&&r(A,"value",N.value,T.value,Q)}},st=(A,N,T,pt,Q,tt,lt,_t,it)=>{const S=N.el=A?A.el:a(""),M=N.anchor=A?A.anchor:a("");let{patchFlag:U,dynamicChildren:$,slotScopeIds:R}=N;R&&(_t=_t?_t.concat(R):R),A==null?(i(S,T,pt),i(M,T,pt),F(N.children||[],T,M,Q,tt,lt,_t,it)):U>0&&U&64&&$&&A.dynamicChildren&&A.dynamicChildren.length===$.length?(b(A.dynamicChildren,$,T,Q,tt,lt,_t),(N.key!=null||Q&&N===Q.subTree)&&rp(A,N,!0)):X(A,N,T,M,Q,tt,lt,_t,it)},K=(A,N,T,pt,Q,tt,lt,_t,it)=>{N.slotScopeIds=_t,A==null?N.shapeFlag&512?Q.ctx.activate(N,T,pt,lt,it):rt(N,T,pt,Q,tt,lt,it):ht(A,N,it)},rt=(A,N,T,pt,Q,tt,lt)=>{const _t=A.component=g_(A,pt,Q);if(vu(A)&&(_t.ctx.renderer=Wt),v_(_t,!1,lt),_t.asyncDep){if(Q&&Q.registerDep(_t,q,lt),!A.el){const it=_t.subTree=Ve(Ei);h(null,it,N,T),A.placeholder=it.el}}else q(_t,A,N,T,Q,tt,lt)},ht=(A,N,T)=>{const pt=N.component=A.component;if(Jg(A,N,T))if(pt.asyncDep&&!pt.asyncResolved){N.el=A.el,ft(pt,N,T);return}else pt.next=N,pt.update();else N.el=A.el,pt.vnode=N},q=(A,N,T,pt,Q,tt,lt)=>{const _t=()=>{if(A.isMounted){let{next:U,bu:$,u:R,parent:D,vnode:G}=A;{const Mt=op(A);if(Mt){U&&(U.el=G.el,ft(A,U,lt)),Mt.asyncDep.then(()=>{sn(()=>{A.isUnmounted||S()},Q)});return}}let J=U,mt;Ji(A,!1),U?(U.el=G.el,ft(A,U,lt)):U=G,$&&Zo($),(mt=U.props&&U.props.onVnodeBeforeUpdate)&&Gn(mt,D,U,G),Ji(A,!0);const Lt=ff(A),at=A.subTree;A.subTree=Lt,_(at,Lt,f(at.el),gt(at),A,Q,tt),U.el=Lt.el,J===null&&Qg(A,Lt.el),R&&sn(R,Q),(mt=U.props&&U.props.onVnodeUpdated)&&sn(()=>Gn(mt,D,U,G),Q)}else{let U;const{el:$,props:R}=N,{bm:D,m:G,parent:J,root:mt,type:Lt}=A,at=zr(N);Ji(A,!1),D&&Zo(D),!at&&(U=R&&R.onVnodeBeforeMount)&&Gn(U,J,N),Ji(A,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(Lt,A.parent?A.parent.type:void 0);const Mt=A.subTree=ff(A);_(null,Mt,T,pt,A,Q,tt),N.el=Mt.el}if(G&&sn(G,Q),!at&&(U=R&&R.onVnodeMounted)){const Mt=N;sn(()=>Gn(U,J,Mt),Q)}(N.shapeFlag&256||J&&zr(J.vnode)&&J.vnode.shapeFlag&256)&&A.a&&sn(A.a,Q),A.isMounted=!0,N=T=pt=null}};A.scope.on();const it=A.effect=new xd(_t);A.scope.off();const S=A.update=it.run.bind(it),M=A.job=it.runIfDirty.bind(it);M.i=A,M.id=A.uid,it.scheduler=()=>gu(M),Ji(A,!0),S()},ft=(A,N,T)=>{N.component=A;const pt=A.vnode.props;A.vnode=N,A.next=null,e_(A,N.props,pt,T),r_(A,N.children,T),Si(),sf(A),bi()},X=(A,N,T,pt,Q,tt,lt,_t,it=!1)=>{const S=A&&A.children,M=A?A.shapeFlag:0,U=N.children,{patchFlag:$,shapeFlag:R}=N;if($>0){if($&128){j(S,U,T,pt,Q,tt,lt,_t,it);return}else if($&256){Et(S,U,T,pt,Q,tt,lt,_t,it);return}}R&8?(M&16&&yt(S,Q,tt),U!==S&&u(T,U)):M&16?R&16?j(S,U,T,pt,Q,tt,lt,_t,it):yt(S,Q,tt,!0):(M&8&&u(T,""),R&16&&F(U,T,pt,Q,tt,lt,_t,it))},Et=(A,N,T,pt,Q,tt,lt,_t,it)=>{A=A||fs,N=N||fs;const S=A.length,M=N.length,U=Math.min(S,M);let $;for($=0;$<U;$++){const R=N[$]=it?hi(N[$]):$n(N[$]);_(A[$],R,T,null,Q,tt,lt,_t,it)}S>M?yt(A,Q,tt,!0,!1,U):F(N,T,pt,Q,tt,lt,_t,it,U)},j=(A,N,T,pt,Q,tt,lt,_t,it)=>{let S=0;const M=N.length;let U=A.length-1,$=M-1;for(;S<=U&&S<=$;){const R=A[S],D=N[S]=it?hi(N[S]):$n(N[S]);if(Mr(R,D))_(R,D,T,null,Q,tt,lt,_t,it);else break;S++}for(;S<=U&&S<=$;){const R=A[U],D=N[$]=it?hi(N[$]):$n(N[$]);if(Mr(R,D))_(R,D,T,null,Q,tt,lt,_t,it);else break;U--,$--}if(S>U){if(S<=$){const R=$+1,D=R<M?N[R].el:pt;for(;S<=$;)_(null,N[S]=it?hi(N[S]):$n(N[S]),T,D,Q,tt,lt,_t,it),S++}}else if(S>$)for(;S<=U;)W(A[S],Q,tt,!0),S++;else{const R=S,D=S,G=new Map;for(S=D;S<=$;S++){const xt=N[S]=it?hi(N[S]):$n(N[S]);xt.key!=null&&G.set(xt.key,S)}let J,mt=0;const Lt=$-D+1;let at=!1,Mt=0;const Nt=new Array(Lt);for(S=0;S<Lt;S++)Nt[S]=0;for(S=R;S<=U;S++){const xt=A[S];if(mt>=Lt){W(xt,Q,tt,!0);continue}let Ht;if(xt.key!=null)Ht=G.get(xt.key);else for(J=D;J<=$;J++)if(Nt[J-D]===0&&Mr(xt,N[J])){Ht=J;break}Ht===void 0?W(xt,Q,tt,!0):(Nt[Ht-D]=S+1,Ht>=Mt?Mt=Ht:at=!0,_(xt,N[Ht],T,null,Q,tt,lt,_t,it),mt++)}const Ot=at?c_(Nt):fs;for(J=Ot.length-1,S=Lt-1;S>=0;S--){const xt=D+S,Ht=N[xt],Xt=N[xt+1],se=xt+1<M?Xt.el||ap(Xt):pt;Nt[S]===0?_(null,Ht,T,se,Q,tt,lt,_t,it):at&&(J<0||S!==Ot[J]?O(Ht,T,se,2):J--)}}},O=(A,N,T,pt,Q=null)=>{const{el:tt,type:lt,transition:_t,children:it,shapeFlag:S}=A;if(S&6){O(A.component.subTree,N,T,pt);return}if(S&128){A.suspense.move(N,T,pt);return}if(S&64){lt.move(A,N,T,Wt);return}if(lt===ce){i(tt,N,T);for(let U=0;U<it.length;U++)O(it[U],N,T,pt);i(A.anchor,N,T);return}if(lt===el){v(A,N,T);return}if(pt!==2&&S&1&&_t)if(pt===0)_t.persisted&&!tt[Ja]?i(tt,N,T):(_t.beforeEnter(tt),i(tt,N,T),sn(()=>_t.enter(tt),Q));else{const{leave:U,delayLeave:$,afterLeave:R}=_t,D=()=>{A.ctx.isUnmounted?s(tt):i(tt,N,T)},G=()=>{const J=tt._isLeaving||!!tt[Ja];tt._isLeaving&&tt[Ja](!0),_t.persisted&&!J?D():U(tt,()=>{D(),R&&R()})};$?$(tt,D,G):G()}else i(tt,N,T)},W=(A,N,T,pt=!1,Q=!1)=>{const{type:tt,props:lt,ref:_t,children:it,dynamicChildren:S,shapeFlag:M,patchFlag:U,dirs:$,cacheIndex:R,memo:D}=A;if((U===-2||S&&S.hasOnce)&&(Q=!1),_t!=null&&(Si(),kr(_t,null,T,A,!0),bi()),R!=null&&(!A.ctx||A.ctx===N)&&(N.renderCache[R]=void 0),M&256){N.ctx.deactivate(A);return}const G=M&1&&$,J=!zr(A);let mt;if(J&&(mt=lt&&lt.onVnodeBeforeUnmount)&&Gn(mt,N,A),M&6)ct(A.component,T,pt);else{if(M&128){A.suspense.unmount(T,pt);return}G&&Zi(A,null,N,"beforeUnmount"),M&64?A.type.remove(A,N,T,Wt,pt):S&&!S.hasOnce&&(tt!==ce||U>0&&U&64)?yt(S,N,T,!1,!0):(tt===ce&&U&384||!Q&&M&16)&&yt(it,N,T),pt&&Tt(A)}const Lt=D!=null&&R==null;(J&&(mt=lt&&lt.onVnodeUnmounted)||G||Lt)&&sn(()=>{mt&&Gn(mt,N,A),G&&Zi(A,null,N,"unmounted"),Lt&&(A.el=null)},T)},Tt=A=>{const{type:N,el:T,anchor:pt,transition:Q}=A;if(N===ce){Y(T,pt);return}if(N===el){y(A),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave();return}const tt=()=>{s(T),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(A.shapeFlag&1&&Q&&!Q.persisted){const{leave:lt,delayLeave:_t}=Q,it=()=>lt(T,tt);_t?_t(A.el,tt,it):it()}else tt()},Y=(A,N)=>{let T;for(;A!==N;)T=d(A),s(A),A=T;s(N)},ct=(A,N,T)=>{const{bum:pt,scope:Q,job:tt,subTree:lt,um:_t,m:it,a:S}=A;pf(it),pf(S),pt&&Zo(pt),Q.stop(),tt?(tt.flags|=8,W(lt,A,N,T)):A.vnode.el&&lt&&(lt.transition=A.vnode.transition,W(lt,A,N,T)),_t&&sn(_t,N),sn(()=>{A.isUnmounted=!0},N)},yt=(A,N,T,pt=!1,Q=!1,tt=0)=>{for(let lt=tt;lt<A.length;lt++)W(A[lt],N,T,pt,Q)},gt=A=>{if(A.shapeFlag&6)return gt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=d(A.anchor||A.el),T=N&&N[Tg];return T?d(T):N};let It=!1;const Ut=(A,N,T)=>{let pt;A==null?N._vnode&&(W(N._vnode,null,null,!0),pt=N._vnode.component):_(N._vnode||null,A,N,null,null,null,T),N._vnode=A,It||(It=!0,sf(pt),Od(),It=!1)},Wt={p:_,um:W,m:O,r:Tt,mt:rt,mc:F,pc:X,pbc:b,n:gt,o:n};return{render:Ut,hydrate:void 0,createApp:$g(Ut)}}function tl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function l_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function rp(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&rp(o,a)),a.type===Oa&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===Ei&&!a.el&&(a.el=o.el)}}function c_(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function op(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:op(t)}function pf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ap(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ap(t.subTree):null}const lp=n=>n.__isSuspense;function u_(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):yg(n)}const ce=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),Ei=Symbol.for("v-cmt"),el=Symbol.for("v-stc"),_s=[];let cn=null;function vt(n=!1){_s.push(cn=n?null:[])}function cp(){_s.pop(),cn=_s[_s.length-1]||null}let Yr=1;function mf(n,t=!1){Yr+=n,n<0&&cn&&t&&(cn.hasOnce=!0)}function up(n){return n.dynamicChildren=Yr>0?cn||fs:null,cp(),Yr>0&&cn&&cn.push(n),n}function St(n,t,e,i,s,r){return up(B(n,t,e,i,s,r,!0))}function Ys(n,t,e,i,s){return up(Ve(n,t,e,i,s,!0))}function fp(n){return n?n.__v_isVNode===!0:!1}function Mr(n,t){return n.type===t.type&&n.key===t.key}const hp=({key:n})=>n??null,Qo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ce(n)||qe(n)||Kt(n)?{i:xn,r:n,k:t,f:!!e}:n:null);function B(n,t=null,e=null,i=0,s=null,r=n===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&hp(t),ref:t&&Qo(t),scopeId:kd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(ga(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ce(e)?8:16),Yr>0&&!o&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const Ve=f_;function f_(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Bg)&&(n=Ei),fp(n)){const a=or(n,t,!0);return e&&ga(a,e),Yr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag=-2,a}if(S_(n)&&(n=n.__vccOpts),t){t=h_(t);let{class:a,style:l}=t;a&&!Ce(a)&&(t.class=Re(a)),ge(l)&&(pu(l)&&!Gt(l)&&(l=Ke({},l)),t.style=Cn(l))}const o=Ce(n)?1:lp(n)?128:Ia(n)?64:ge(n)?4:Kt(n)?2:0;return B(n,t,e,i,s,o,r,!0)}function h_(n){return n?pu(n)||Qd(n)?Ke({},n):n:null}function or(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?d_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&hp(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Qo(t)):[r,Qo(t)]:Qo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ce?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_u(u,l.clone(u)),u}function ae(n=" ",t=0){return Ve(Oa,null,n,t)}function le(n="",t=!1){return t?(vt(),Ys(Ei,null,n)):Ve(Ei,null,n)}function $n(n){return n==null||typeof n=="boolean"?Ve(Ei):Gt(n)?Ve(ce,null,n.slice()):fp(n)?hi(n):Ve(Oa,null,String(n))}function hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function ga(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ga(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qd(t)?t._ctx=xn:s===3&&xn&&(xn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Kt(t)){if(i&65){ga(n,{default:t});return}t={default:t,_ctx:xn},e=32}else t=String(t),i&64?(e=16,t=[ae(t)]):e=8;n.children=t,n.shapeFlag|=e}function d_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Re([t.class,i.class]));else if(s==="style")t.style=Cn([t.style,i.style]);else if(Aa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ca(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){On(n,t,7,[e,i])}const p_=Yd();let m_=0;function g_(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||p_,r={uid:m_++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(i,s),emitsOptions:Kd(i,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:i.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Yg.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const __=()=>tn||xn;let _a,Kr;{const n=La(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};_a=t("__VUE_INSTANCE_SETTERS__",e=>tn=e),Kr=t("__VUE_SSR_SETTERS__",e=>jr=e)}const ao=n=>{const t=tn;return _a(n),n.scope.on(),()=>{n.scope.off(),_a(t)}},gf=()=>{tn&&tn.scope.off(),_a(null)};function dp(n){return n.vnode.shapeFlag&4}let jr=!1;function v_(n,t=!1,e=!1){t&&Kr(t);const{props:i,children:s}=n.vnode,r=dp(n);t_(n,i,r,t),s_(n,s,e||t);const o=r?x_(n,t):void 0;return t&&Kr(!1),o}function x_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kg);const{setup:i}=e;if(i){Si();const s=n.setupContext=i.length>1?M_(n):null,r=ao(n),o=ro(i,n,0,[n.props,s]),a=fd(o);if(bi(),r(),(a||n.sp)&&!zr(n)&&Gd(n),a){if(o.then(gf,gf),t)return o.then(l=>{Kr(!0);try{_f(n,l,t)}finally{Kr(!1)}}).catch(l=>{Ua(l,n,0)});n.asyncDep=o}else _f(n,o)}else pp(n)}function _f(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ge(t)&&(n.setupState=Id(t)),pp(n)}function pp(n,t,e){const i=n.type;n.render||(n.render=i.render||Zn);{const s=ao(n);Si();try{zg(n)}finally{bi(),s()}}}const y_={get(n,t){return Xe(n,"get",""),n[t]}};function M_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,y_),slots:n.slots,emit:n.emit,expose:t}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Id(ug(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Hr)return Hr[e](n)},has(t,e){return e in t||e in Hr}})):n.proxy}function S_(n){return Kt(n)&&"__vccOpts"in n}const De=(n,t)=>mg(n,t,jr),b_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ec;const vf=typeof window<"u"&&window.trustedTypes;if(vf)try{ec=vf.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=ec?n=>ec.createHTML(n):n=>n,E_="http://www.w3.org/2000/svg",w_="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,xf=fi&&fi.createElement("template"),T_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?fi.createElementNS(E_,n):t==="mathml"?fi.createElementNS(w_,n):e?fi.createElement(n,{is:e}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{xf.innerHTML=mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},A_=Symbol("_vtc");function C_(n,t,e){const i=n[A_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const yf=Symbol("_vod"),R_=Symbol("_vsh"),P_=Symbol(""),L_=/(?:^|;)\s*display\s*:/;function D_(n,t,e){const i=n.style,s=Ce(e);let r=!1;if(e&&!s){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Ur(i,a,"")}else for(const o in t)e[o]==null&&Ur(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?I_(n,o,!Ce(t)&&t?t[o]:void 0,a)||Ur(i,o,a):Ur(i,o,"")}}else if(s){if(t!==e){const o=i[P_];o&&(e+=";"+o),i.cssText=e,r=L_.test(e)}}else t&&n.removeAttribute("style");yf in n&&(n[yf]=r?i.display:"",n[R_]&&(i.display="none"))}const vo=/\s*!important$/;function Ur(n,t,e){if(Gt(e))e.forEach(i=>Ur(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))vo.test(e)?n.setProperty(t,e.replace(vo,""),"important"):n.setProperty(t,e);else{const i=U_(n,t);vo.test(e)?n.setProperty(Ki(i),e.replace(vo,""),"important"):n[i]=e}}const Mf=["Webkit","Moz","ms"],nl={};function U_(n,t){const e=nl[t];if(e)return e;let i=Dn(t);if(i!=="filter"&&i in n)return nl[t]=i;i=pd(i);for(let s=0;s<Mf.length;s++){const r=Mf[s]+i;if(r in n)return nl[t]=r}return t}function I_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ce(i)&&e===i}const Sf="http://www.w3.org/1999/xlink";function bf(n,t,e,i,s,r=Hm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Sf,t.slice(6,t.length)):n.setAttributeNS(Sf,t,e):e==null||r&&!gd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":ti(e)?String(e):e)}function Ef(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?mp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=gd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function mi(n,t,e,i){n.addEventListener(t,e,i)}function N_(n,t,e,i){n.removeEventListener(t,e,i)}const wf=Symbol("_vei");function F_(n,t,e,i,s=null){const r=n[wf]||(n[wf]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=k_(t);if(i){const c=r[t]=V_(i,s);mi(n,a,c,l)}else o&&(N_(n,a,o,l),r[t]=void 0)}}const O_=/(Once|Passive|Capture)$/,B_=/^on:?(?:Once|Passive|Capture)$/;function k_(n){let t,e;for(;(e=n.match(O_))&&!B_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ki(n.slice(2)),t]}let il=0;const z_=Promise.resolve(),H_=()=>il||(z_.then(()=>il=0),il=Date.now());function V_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Gt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&On(c,t,5,a)}}else On(s,t,5,[i])};return e.value=n,e.attached=H_(),e}const Tf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,G_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?C_(n,i,o):t==="style"?D_(n,e,i):Aa(t)?Ca(t)||F_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W_(n,t,i,o))?(Ef(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bf(n,t,i,o,r,t!=="value")):n._isVueCE&&(X_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(i)))?Ef(n,Dn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),bf(n,t,i,o))};function W_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Tf(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(t)&&Ce(e)?!1:t in n}function X_(n,t){const e=n._def.props;if(!e)return!1;const i=Dn(t);return Array.isArray(e)?e.some(s=>Dn(s)===i):Object.keys(e).some(s=>Dn(s)===i)}const Xi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Zo(t,e):t};function $_(n){n.target.composing=!0}function Af(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),xo=Symbol("_initialValue");function sl(n,t,e){return t&&(n=n.trim()),e&&(n=Pa(n)),n}const Bn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[xo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[xo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[un]=Xi(s);const r=i||s.props&&s.props.type==="number";mi(n,t?"change":"input",o=>{o.target.composing||n[un](sl(n.value,e,r))}),(e||r)&&mi(n,"change",()=>{n.value=sl(n.value,e,r)}),t||(mi(n,"compositionstart",$_),mi(n,"compositionend",Af),mi(n,"change",Af))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[xo];delete n[xo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[un](sl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[un]=Xi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Pa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},vs={deep:!0,created(n,t,e){n[un]=Xi(e),mi(n,"change",()=>{const i=n._modelValue,s=ar(n),r=n.checked,o=n[un];if(Gt(i)){const a=au(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Mi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(gp(n,r))})},mounted:Cf,beforeUpdate(n,t,e){n[un]=Xi(e),Cf(n,t,e)}};function Cf(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Gt(t))s=au(t,i.props.value)>-1;else if(Mi(t))s=t.has(i.props.value);else{if(t===e)return;s=Fn(t,gp(n,!0))}n.checked!==s&&(n.checked=s)}const q_={created(n,{value:t},e){n.checked=Fn(t,e.props.value),n[un]=Xi(e),mi(n,"change",()=>{n[un](ar(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[un]=Xi(i),t!==e&&(n.checked=Fn(t,i.props.value))}},nc={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Pa(ar(l)):ar(l)),r=n.multiple,o=r?Mi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Gt(o)?s.slice():s:o];try{n[un](o)}finally{mu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[un]=Xi(i)},mounted(n,{value:t}){Rf(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[un]=Xi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!Y_(t,e[1],e[0]))&&Rf(n,t)}};function Y_(n,t,e){if(!e||Gt(n))return Fn(n,t);if(Mi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Rf(n,t){const e=n.multiple,i=Gt(t);if(!(e&&!i&&!Mi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=ar(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=au(t,a)>-1}else o.selected=t.has(a);else if(Fn(ar(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ar(n){return"_value"in n?n._value:n.value}function gp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const K_={created(n,t,e){yo(n,t,e,null,"created")},mounted(n,t,e){yo(n,t,e,null,"mounted")},beforeUpdate(n,t,e,i){yo(n,t,e,i,"beforeUpdate")},updated(n,t,e,i){yo(n,t,e,i,"updated")}};function j_(n,t){switch(n){case"SELECT":return nc;case"TEXTAREA":return Bn;default:switch(t){case"checkbox":return vs;case"radio":return q_;default:return Bn}}}function yo(n,t,e,i,s){const o=j_(n.tagName,e.props&&e.props.type)[s];o&&o(n,t,e,i)}const Z_=["ctrl","shift","alt","meta"],J_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Z_.some(e=>n[`${e}Key`]&&!t.includes(e))},Q_=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=J_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},tv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ic=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=Ki(s.key);if(t.some(o=>o===r||tv[o]===r))return n(s)}))},ev=Ke({patchProp:G_},T_);let Pf;function nv(){return Pf||(Pf=o_(ev))}const iv=((...n)=>{const t=nv().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=rv(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function sv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rv(n){return Ce(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="170",ov=0,Lf=1,av=2,_p=1,lv=2,ui=3,$i=0,rn=1,gi=2,zi=0,er=1,va=2,Df=3,Uf=4,cv=5,cs=100,uv=101,fv=102,hv=103,dv=104,pv=200,mv=201,gv=202,_v=203,sc=204,rc=205,vv=206,xv=207,yv=208,Mv=209,Sv=210,bv=211,Ev=212,wv=213,Tv=214,oc=0,ac=1,lc=2,lr=3,cc=4,uc=5,fc=6,hc=7,vp=0,Av=1,Cv=2,Hi=0,Rv=1,Pv=2,Lv=3,Dv=4,Uv=5,Iv=6,Nv=7,xp=300,cr=301,ur=302,dc=303,pc=304,ka=306,mc=1e3,hs=1001,gc=1002,Nn=1003,Fv=1004,Mo=1005,jn=1006,rl=1007,ds=1008,wi=1009,yp=1010,Mp=1011,Zr=1012,Su=1013,xs=1014,_i=1015,lo=1016,bu=1017,Eu=1018,fr=1020,Sp=35902,bp=1021,Ep=1022,Rn=1023,wp=1024,Tp=1025,nr=1026,hr=1027,Ap=1028,wu=1029,Cp=1030,Tu=1031,Au=1033,ta=33776,ea=33777,na=33778,ia=33779,_c=35840,vc=35841,xc=35842,yc=35843,Mc=36196,Sc=37492,bc=37496,Ec=37808,wc=37809,Tc=37810,Ac=37811,Cc=37812,Rc=37813,Pc=37814,Lc=37815,Dc=37816,Uc=37817,Ic=37818,Nc=37819,Fc=37820,Oc=37821,sa=36492,Bc=36494,kc=36495,Rp=36283,zc=36284,Hc=36285,Vc=36286,Ov=3200,Bv=3201,Pp=0,kv=1,Oi="",mn="srgb",pr="srgb-linear",za="linear",pe="srgb",As=7680,If=519,zv=512,Hv=513,Vv=514,Lp=515,Gv=516,Wv=517,Xv=518,$v=519,Gc=35044,Nf="300 es",vi=2e3,xa=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Wc=180/Math.PI;function xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function qv(n,t){return(n%t+t)%t}function al(n,t,e){return(1-e)*n+e*t}function Kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],h=s[6],x=s[1],v=s[4],y=s[7],P=s[2],C=s[5],L=s[8];return r[0]=o*_+a*x+l*P,r[3]=o*m+a*v+l*C,r[6]=o*h+a*y+l*L,r[1]=c*_+u*x+f*P,r[4]=c*m+u*v+f*C,r[7]=c*h+u*y+f*L,r[2]=d*_+p*x+g*P,r[5]=d*m+p*v+g*C,r[8]=d*h+p*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Qt;function Dp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yv(){const n=ya("canvas");return n.style.display="block",n}const Ff={};function Ir(n){n in Ff||(Ff[n]=!0,console.warn(n))}function Kv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function jv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?za:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Of=[.64,.33,.3,.6,.15,.06],Bf=[.2126,.7152,.0722],kf=[.3127,.329],zf=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[pr]:{primaries:Of,whitePoint:kf,transfer:za,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Bf,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:Of,whitePoint:kf,transfer:pe,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:Bf,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Cs;class Jv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=ya("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qv=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class en extends mr{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=hs,s=hs,r=jn,o=ds,a=Rn,l=wi,c=en.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=xi(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mc:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mc:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=xp;en.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,P=(h+1)/2,C=(u+d)/4,L=(f+_)/4,F=(g+m)/4;return v>y&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=L/i):y>P?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=F/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends e0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ip extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,h*x);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const y=a*x;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-a*p,t[e+2]=c*g+u*p+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new k,Vf=new Vi;class co{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),bo.subVectors(this.max,Sr),Rs.subVectors(t.a,Sr),Ps.subVectors(t.b,Sr),Ls.subVectors(t.c,Sr),Pi.subVectors(Ps,Rs),Li.subVectors(Ls,Ps),Qi.subVectors(Rs,Ls);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Qi.z,Qi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Qi.z,0,-Qi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Qi.y,Qi.x,0];return!fl(e,Rs,Ps,Ls,bo)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Rs,Ps,Ls,bo))?!1:(Eo.crossVectors(Pi,Li),e=[Eo.x,Eo.y,Eo.z],fl(e,Rs,Ps,Ls,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,So=new co,Rs=new k,Ps=new k,Ls=new k,Pi=new k,Li=new k,Qi=new k,Sr=new k,bo=new k,Eo=new k,ts=new k;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const i0=new co,br=new k,hl=new k;class Ha{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):i0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(hl)),this.expandByPoint(br.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new k,dl=new k,wo=new k,Di=new k,pl=new k,To=new k,ml=new k;class Cu{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=Di.dot(this.direction),l=-Di.dot(wo),c=Di.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(wo,d),p}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,r){pl.subVectors(e,t),To.subVectors(i,t),ml.crossVectors(pl,To);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(To.crossVectors(Di,To));if(l<0)return null;const c=a*this.direction.dot(pl.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(ml);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+_,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,r0)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ui.crossVectors(i,an),Ui.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ui.crossVectors(i,an)),Ui.normalize(),Ao.crossVectors(an,Ui),s[0]=Ui.x,s[4]=Ao.x,s[8]=an.x,s[1]=Ui.y,s[5]=Ao.y,s[9]=an.y,s[2]=Ui.z,s[6]=Ao.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],y=i[11],P=i[15],C=s[0],L=s[4],F=s[8],w=s[12],b=s[1],I=s[5],st=s[9],K=s[13],rt=s[2],ht=s[6],q=s[10],ft=s[14],X=s[3],Et=s[7],j=s[11],O=s[15];return r[0]=o*C+a*b+l*rt+c*X,r[4]=o*L+a*I+l*ht+c*Et,r[8]=o*F+a*st+l*q+c*j,r[12]=o*w+a*K+l*ft+c*O,r[1]=u*C+f*b+d*rt+p*X,r[5]=u*L+f*I+d*ht+p*Et,r[9]=u*F+f*st+d*q+p*j,r[13]=u*w+f*K+d*ft+p*O,r[2]=g*C+_*b+m*rt+h*X,r[6]=g*L+_*I+m*ht+h*Et,r[10]=g*F+_*st+m*q+h*j,r[14]=g*w+_*K+m*ft+h*O,r[3]=x*C+v*b+y*rt+P*X,r[7]=x*L+v*I+y*ht+P*Et,r[11]=x*F+v*st+y*q+P*j,r[15]=x*w+v*K+y*ft+P*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*f-e*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*f+e*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],x=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*_*c-g*f*c+g*a*p-o*_*p-u*a*h+o*f*h,P=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=e*x+i*v+s*y+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=x*L,t[1]=(_*d*r-f*m*r-_*s*p+i*m*p+f*s*h-i*d*h)*L,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*h+i*l*h)*L,t[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*L,t[4]=v*L,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*h+e*d*h)*L,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*h-e*l*h)*L,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*L,t[8]=y*L,t[9]=(g*f*r-u*_*r-g*i*p+e*_*p+u*i*h-e*f*h)*L,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*h+e*a*h)*L,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*p-e*a*p)*L,t[12]=P*L,t[13]=(u*_*s-g*f*s+g*i*d-e*_*d-u*i*m+e*f*m)*L,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*L,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*d+e*a*d)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,_=o*u,m=o*f,h=a*f,x=l*c,v=l*u,y=l*f,P=i.x,C=i.y,L=i.z;return s[0]=(1-(_+h))*P,s[1]=(p+y)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(d+h))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+v)*L,s[9]=(m-x)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const c=1/r,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=vi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===vi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=vi){const l=this.elements,c=1/(e-t),u=1/(i-s),f=1/(o-r),d=(e+t)*c,p=(i+s)*u;let g,_;if(a===vi)g=(o+r)*f,_=-2*f;else if(a===xa)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ds=new k,wn=new be,s0=new k(0,0,0),r0=new k(1,1,1),Ui=new k,Ao=new k,an=new k,Gf=new be,Wf=new Vi;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o0=0;const Xf=new k,Us=new Vi,ai=new be,Co=new k,Er=new k,a0=new k,l0=new Vi,$f=new k(1,0,0),qf=new k(0,1,0),Yf=new k(0,0,1),Kf={type:"added"},c0={type:"removed"},Is={type:"childadded",child:null},gl={type:"childremoved",child:null};class Be extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new k,e=new kn,i=new Vi,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis($f,t)}rotateY(t){return this.rotateOnAxis(qf,t)}rotateZ(t){return this.rotateOnAxis(Yf,t)}translateOnAxis(t,e){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($f,t)}translateY(t){return this.translateOnAxis(qf,t)}translateZ(t){return this.translateOnAxis(Yf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Co.copy(t):Co.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Er,Co,this.up):ai.lookAt(Co,Er,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(ai),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kf),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c0),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kf),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,a0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,l0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new k(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new k,li=new k,_l=new k,ci=new k,Ns=new k,Fs=new k,jf=new k,vl=new k,xl=new k,yl=new k,Ml=new Ae,Sl=new Ae,bl=new Ae;class vn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),li.subVectors(i,e),_l.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(li),l=Tn.dot(_l),c=li.dot(li),u=li.dot(_l),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ml.setScalar(0),Sl.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),li.subVectors(t,e),Tn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Tn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Fs.subVectors(r,i),vl.subVectors(t,i);const l=Ns.dot(vl),c=Fs.dot(vl);if(l<=0&&c<=0)return e.copy(i);xl.subVectors(t,s);const u=Ns.dot(xl),f=Fs.dot(xl);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ns,o);yl.subVectors(t,r);const p=Ns.dot(yl),g=Fs.dot(yl);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Fs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return jf.subVectors(r,s),a=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(jf,a);const h=1/(m+_+d);return o=_*h,a=d*h,e.copy(i).addScaledVector(Ns,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function El(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=qv(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=El(o,r,t+1/3),this.g=El(o,r,t),this.b=El(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const i=Np[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ne.fromWorkingColorSpace(We.copy(this),t),Math.round($e(We.r*255,0,255))*65536+Math.round($e(We.g*255,0,255))*256+Math.round($e(We.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=mn){ne.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Ro);const i=al(Ii.h,Ro.h,e),s=al(Ii.s,Ro.s,e),r=al(Ii.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new ie;ie.NAMES=Np;let u0=0;class bs extends mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=xi(),this.name="",this.blending=er,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fp extends bs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new k,Po=new Ft;class fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gc,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}}class Op extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bp extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jn extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let f0=0;const dn=new be,wl=new Be,Os=new k,ln=new co,wr=new co,Fe=new k;class zn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?Bp:Op)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(ln.min,wr.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,wr.max),ln.expandByPoint(Fe)):(ln.expandByPoint(wr.min),ln.expandByPoint(wr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),Fe.add(Os)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new k,l[F]=new k;const c=new k,u=new k,f=new k,d=new Ft,p=new Ft,g=new Ft,_=new k,m=new k;function h(F,w,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(_),a[w].add(_),a[b].add(_),l[F].add(m),l[w].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let F=0,w=x.length;F<w;++F){const b=x[F],I=b.start,st=b.count;for(let K=I,rt=I+st;K<rt;K+=3)h(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const v=new k,y=new k,P=new k,C=new k;function L(F){P.fromBufferAttribute(s,F),C.copy(P);const w=a[F];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(C,w);const I=y.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,w=x.length;F<w;++F){const b=x[F],I=b.start,st=b.count;for(let K=I,rt=I+st;K<rt;K+=3)L(t.getX(K+0)),L(t.getX(K+1)),L(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new fn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zf=new be,es=new Cu,Lo=new Ha,Jf=new k,Do=new k,Uo=new k,Io=new k,Tl=new k,No=new k,Qf=new k,Fo=new k;class Pn extends Be{constructor(t=new zn,e=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Tl.fromBufferAttribute(f,t),o?No.addScaledVector(Tl,u):No.addScaledVector(Tl.sub(e),u))}e.add(No)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(Lo.containsPoint(es.origin)===!1&&(es.intersectSphere(Lo,Jf)===null||es.origin.distanceToSquared(Jf)>(t.far-t.near)**2))&&(Zf.copy(r).invert(),es.copy(t.ray).applyMatrix4(Zf),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,P=v;y<P;y+=3){const C=a.getX(y),L=a.getX(y+1),F=a.getX(y+2);s=Oo(this,h,t,i,c,u,f,C,L,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Oo(this,o,t,i,c,u,f,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,P=v;y<P;y+=3){const C=y,L=y+1,F=y+2;s=Oo(this,h,t,i,c,u,f,C,L,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,y=m+2;s=Oo(this,o,t,i,c,u,f,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function h0(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:n}}function Oo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Do),n.getVertexPosition(l,Uo),n.getVertexPosition(c,Io);const u=h0(n,t,e,i,Do,Uo,Io,Qf);if(u){const f=new k;vn.getBarycoord(Qf,Do,Uo,Io,f),s&&(u.uv=vn.getInterpolatedAttribute(s,a,l,c,f,new Ft)),r&&(u.uv1=vn.getInterpolatedAttribute(r,a,l,c,f,new Ft)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};vn.getNormal(Do,Uo,Io,d.normal),u.face=d,u.barycoord=f}return u}class gr extends zn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(f,2));function g(_,m,h,x,v,y,P,C,L,F,w){const b=y/L,I=P/F,st=y/2,K=P/2,rt=C/2,ht=L+1,q=F+1;let ft=0,X=0;const Et=new k;for(let j=0;j<q;j++){const O=j*I-K;for(let W=0;W<ht;W++){const Tt=W*b-st;Et[_]=Tt*x,Et[m]=O*v,Et[h]=rt,c.push(Et.x,Et.y,Et.z),Et[_]=0,Et[m]=0,Et[h]=C>0?1:-1,u.push(Et.x,Et.y,Et.z),f.push(W/L),f.push(1-j/F),ft+=1}}for(let j=0;j<F;j++)for(let O=0;O<L;O++){const W=d+O+ht*j,Tt=d+O+ht*(j+1),Y=d+(O+1)+ht*(j+1),ct=d+(O+1)+ht*j;l.push(W,Tt,ct),l.push(Tt,Y,ct),X+=6}a.addGroup(p,X,w),p+=X,d+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=dr(n[e]);for(const s in i)t[s]=i[s]}return t}function d0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const p0={clone:dr,merge:Je};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends bs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=d0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zp extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new k,th=new Ft,eh=new Ft;class _n extends zp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wc*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ol*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bs=-90,ks=1;class _0 extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Bs,ks,t,e);s.layers=this.layers,this.add(s);const r=new _n(Bs,ks,t,e);r.layers=this.layers,this.add(r);const o=new _n(Bs,ks,t,e);o.layers=this.layers,this.add(o);const a=new _n(Bs,ks,t,e);a.layers=this.layers,this.add(a);const l=new _n(Bs,ks,t,e);l.layers=this.layers,this.add(l);const c=new _n(Bs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hp extends en{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class v0 extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gr(5,5,5),r=new qi({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:zi});r.uniforms.tEquirect.value=e;const o=new Pn(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=jn),new _0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Al=new k,x0=new k,y0=new Qt;class as{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Al.subVectors(i,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||y0.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ha,Bo=new k;class Pu{constructor(t=new as,e=new as,i=new as,s=new as,r=new as,o=new as){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],h=s[12],x=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-p,y-h).normalize(),i[1].setComponents(l+r,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+x).normalize(),i[3].setComponents(l-o,d-u,m-g,y-x).normalize(),i[4].setComponents(l-a,d-f,m-_,y-v).normalize(),e===vi)i[5].setComponents(l+a,d+f,m+_,y+v).normalize();else if(e===xa)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function M0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Va extends zn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,y=x+c*(h+1),P=x+1+c*(h+1),C=x+1+c*h;p.push(v,y,C),p.push(y,P,C)}this.setIndex(p),this.setAttribute("position",new Jn(g,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.widthSegments,t.heightSegments)}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
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
#endif`,yx=`struct PhysicalMaterial {
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
}`,Mx=`
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Vy=`#define NORMAL
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
}`,Gy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:S0,alphahash_pars_fragment:b0,alphamap_fragment:E0,alphamap_pars_fragment:w0,alphatest_fragment:T0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:I0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:K0,emissivemap_fragment:j0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:ux,lights_lambert_fragment:fx,lights_lambert_pars_fragment:hx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:Sx,lights_fragment_end:bx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Ix,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Hx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:Kx,packing:jx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:ty,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:sy,shadowmap_vertex:ry,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:fy,specularmap_pars_fragment:hy,tonemapping_fragment:dy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:My,background_frag:Sy,backgroundCube_vert:by,backgroundCube_frag:Ey,cube_vert:wy,cube_frag:Ty,depth_vert:Ay,depth_frag:Cy,distanceRGBA_vert:Ry,distanceRGBA_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Iy,meshbasic_vert:Ny,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Vy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:$y,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:Ky,points_frag:jy,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:tM},Pt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},qn={basic:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([Pt.points,Pt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([Pt.common,Pt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([Pt.sprite,Pt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([Pt.lights,Pt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};qn.physical={uniforms:Je([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const ko={r:0,b:0,g:0},is=new kn,eM=new be;function nM(n,t,e,i,s,r,o){const a=new ie(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?h(a,l):y&&y.isColor&&(h(y,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===ka)?(u===void 0&&(u=new Pn(new gr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:dr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(v.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(is)),u.material.toneMapped=ne.getTransfer(y.colorSpace)!==pe,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pn(new Va(2,2),new qi({name:"BackgroundMaterial",uniforms:dr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB(ko,kp(n)),i.buffers.color.setClear(ko.r,ko.g,ko.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m}}function iM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(b,I,st,K,rt){let ht=!1;const q=f(K,st,I);r!==q&&(r=q,c(r.object)),ht=p(b,K,st,rt),ht&&g(b,K,st,rt),rt!==null&&t.update(rt,n.ELEMENT_ARRAY_BUFFER),(ht||o)&&(o=!1,y(b,I,st,K),rt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,I,st){const K=st.wireframe===!0;let rt=i[b.id];rt===void 0&&(rt={},i[b.id]=rt);let ht=rt[I.id];ht===void 0&&(ht={},rt[I.id]=ht);let q=ht[K];return q===void 0&&(q=d(l()),ht[K]=q),q}function d(b){const I=[],st=[],K=[];for(let rt=0;rt<e;rt++)I[rt]=0,st[rt]=0,K[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:K,object:b,attributes:{},index:null}}function p(b,I,st,K){const rt=r.attributes,ht=I.attributes;let q=0;const ft=st.getAttributes();for(const X in ft)if(ft[X].location>=0){const j=rt[X];let O=ht[X];if(O===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),j===void 0||j.attribute!==O||O&&j.data!==O.data)return!0;q++}return r.attributesNum!==q||r.index!==K}function g(b,I,st,K){const rt={},ht=I.attributes;let q=0;const ft=st.getAttributes();for(const X in ft)if(ft[X].location>=0){let j=ht[X];j===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(j=b.instanceColor));const O={};O.attribute=j,j&&j.data&&(O.data=j.data),rt[X]=O,q++}r.attributes=rt,r.attributesNum=q,r.index=K}function _(){const b=r.newAttributes;for(let I=0,st=b.length;I<st;I++)b[I]=0}function m(b){h(b,0)}function h(b,I){const st=r.newAttributes,K=r.enabledAttributes,rt=r.attributeDivisors;st[b]=1,K[b]===0&&(n.enableVertexAttribArray(b),K[b]=1),rt[b]!==I&&(n.vertexAttribDivisor(b,I),rt[b]=I)}function x(){const b=r.newAttributes,I=r.enabledAttributes;for(let st=0,K=I.length;st<K;st++)I[st]!==b[st]&&(n.disableVertexAttribArray(st),I[st]=0)}function v(b,I,st,K,rt,ht,q){q===!0?n.vertexAttribIPointer(b,I,st,rt,ht):n.vertexAttribPointer(b,I,st,K,rt,ht)}function y(b,I,st,K){_();const rt=K.attributes,ht=st.getAttributes(),q=I.defaultAttributeValues;for(const ft in ht){const X=ht[ft];if(X.location>=0){let Et=rt[ft];if(Et===void 0&&(ft==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),ft==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),Et!==void 0){const j=Et.normalized,O=Et.itemSize,W=t.get(Et);if(W===void 0)continue;const Tt=W.buffer,Y=W.type,ct=W.bytesPerElement,yt=Y===n.INT||Y===n.UNSIGNED_INT||Et.gpuType===Su;if(Et.isInterleavedBufferAttribute){const gt=Et.data,It=gt.stride,Ut=Et.offset;if(gt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)h(X.location+Wt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)m(X.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let Wt=0;Wt<X.locationSize;Wt++)v(X.location+Wt,O/X.locationSize,Y,j,It*ct,(Ut+O/X.locationSize*Wt)*ct,yt)}else{if(Et.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)h(X.location+gt,Et.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let gt=0;gt<X.locationSize;gt++)v(X.location+gt,O/X.locationSize,Y,j,O*ct,O/X.locationSize*gt*ct,yt)}}else if(q!==void 0){const j=q[ft];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(X.location,j);break;case 3:n.vertexAttrib3fv(X.location,j);break;case 4:n.vertexAttrib4fv(X.location,j);break;default:n.vertexAttrib1fv(X.location,j)}}}}x()}function P(){F();for(const b in i){const I=i[b];for(const st in I){const K=I[st];for(const rt in K)u(K[rt].object),delete K[rt];delete I[st]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const st in I){const K=I[st];for(const rt in K)u(K[rt].object),delete K[rt];delete I[st]}delete i[b.id]}function L(b){for(const I in i){const st=i[I];if(st[b.id]===void 0)continue;const K=st[b.id];for(const rt in K)u(K[rt].object),delete K[rt];delete st[b.id]}}function F(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function sM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Rn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==wi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_i&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:C}}function oM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new as,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,v=x*4;let y=h.clippingState||null;l.value=y,y=u(g,d,v,p);for(let P=0;P!==v;++P)y[P]=e[P];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function aM(n){let t=new WeakMap;function e(o,a){return a===dc?o.mapping=cr:a===pc&&(o.mapping=ur),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dc||a===pc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gp extends zp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,nh=[.125,.215,.35,.446,.526,.582],us=20,Cl=new Gp,ih=new ie;let Rl=null,Pl=0,Ll=0,Dl=!1;const ls=(1+Math.sqrt(5))/2,zs=1/ls,sh=[new k(-ls,zs,0),new k(ls,zs,0),new k(-zs,0,ls),new k(zs,0,ls),new k(0,ls,-zs),new k(0,ls,zs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Pl,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:lo,format:Rn,colorSpace:pr,depthBuffer:!1},s=oh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lM(r)),this._blurMaterial=cM(r,t,e)}return s}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){const a=new _n(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ih),u.toneMapping=Hi,u.autoClear=!1;const p=new Fp({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Pn(new gr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ih),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;zo(s,x*v,h>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===cr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sh[(s-r-1)%sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const h=[];let x=0;for(let L=0;L<us;++L){const F=L/_,w=Math.exp(-F*F/2);h.push(w),L===0?x+=w:L<m&&(x+=2*w)}for(let L=0;L<h.length;L++)h[L]=h[L]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[s],P=3*y*(s>v-Ks?s-v+Ks:0),C=4*(this._cubeSize-y);zo(e,P,C,3*y,2*y),l.setRenderTarget(e),l.render(f,Cl)}}function lM(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=nh[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,F=C>2?0:-1,w=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];x.set(w,_*g*C),v.set(d,m*g*C);const b=[C,C,C,C,C,C];y.set(b,h*g*C)}const P=new zn;P.setAttribute("position",new fn(x,_)),P.setAttribute("uv",new fn(v,m)),P.setAttribute("faceIndex",new fn(y,h)),t.push(P),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function oh(n,t,e){const i=new ys(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cM(n,t,e){const i=new Float32Array(us),s=new k(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ah(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function lh(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function uM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dc||l===pc,u=l===cr||l===ur;if(c||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rh(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new rh(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function fM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hM(n,t,e,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const P=x[v+0],C=x[v+1],L=x[v+2];d.push(P,C,C,L,L,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const P=v+0,C=v+1,L=v+2;d.push(P,C,C,L,L,P)}}else return;const m=new(Dp(d)?Bp:Op)(d,1);m.version=_;const h=r.get(f);h&&t.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x]*_[x];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function mM(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*P*4*f),L=new Ip(C,y,P,f);L.type=_i,L.needsUpdate=!0;const F=v*4;for(let b=0;b<f;b++){const I=m[b],st=h[b],K=x[b],rt=y*P*4*b;for(let ht=0;ht<I.count;ht++){const q=ht*F;p===!0&&(s.fromBufferAttribute(I,ht),C[rt+q+0]=s.x,C[rt+q+1]=s.y,C[rt+q+2]=s.z,C[rt+q+3]=0),g===!0&&(s.fromBufferAttribute(st,ht),C[rt+q+4]=s.x,C[rt+q+5]=s.y,C[rt+q+6]=s.z,C[rt+q+7]=0),_===!0&&(s.fromBufferAttribute(K,ht),C[rt+q+8]=s.x,C[rt+q+9]=s.y,C[rt+q+10]=s.z,C[rt+q+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Ft(y,P)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function gM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Wp extends en{constructor(t,e,i,s,r,o,a,l,c,u=nr){if(u!==nr&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===nr&&(i=xs),i===void 0&&u===hr&&(i=fr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xp=new en,ch=new Wp(1,1),$p=new Ip,qp=new n0,Yp=new Hp,uh=[],fh=[],hh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function _r(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _M(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function xM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function MM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,i))return;ph.set(i),n.uniformMatrix2fv(this.addr,!1,ph),Ne(e,i)}}function SM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Ne(e,i)}}function bM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Ne(e,i)}}function EM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function CM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function RM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function LM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function DM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ch.compareFunction=Lp,r=ch):r=Xp,e.setTexture2D(t||r,s)}function UM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qp,s)}function IM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Yp,s)}function NM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$p,s)}function FM(n){switch(n){case 5126:return _M;case 35664:return vM;case 35665:return xM;case 35666:return yM;case 35674:return MM;case 35675:return SM;case 35676:return bM;case 5124:case 35670:return EM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return CM;case 36294:return RM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return NM}}function OM(n,t){n.uniform1fv(this.addr,t)}function BM(n,t){const e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function kM(n,t){const e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function zM(n,t){const e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function HM(n,t){const e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function VM(n,t){const e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function GM(n,t){const e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function WM(n,t){n.uniform1iv(this.addr,t)}function XM(n,t){n.uniform2iv(this.addr,t)}function $M(n,t){n.uniform3iv(this.addr,t)}function qM(n,t){n.uniform4iv(this.addr,t)}function YM(n,t){n.uniform1uiv(this.addr,t)}function KM(n,t){n.uniform2uiv(this.addr,t)}function jM(n,t){n.uniform3uiv(this.addr,t)}function ZM(n,t){n.uniform4uiv(this.addr,t)}function JM(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xp,r[o])}function QM(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qp,r[o])}function tS(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yp,r[o])}function eS(n,t,e){const i=this.cache,s=t.length,r=Ga(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$p,r[o])}function nS(n){switch(n){case 5126:return OM;case 35664:return BM;case 35665:return kM;case 35666:return zM;case 35674:return HM;case 35675:return VM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return $M;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return KM;case 36295:return jM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return eS}}class iS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=FM(e.type)}}class sS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nS(e.type)}}class rS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function mh(n,t){n.seq.push(t),n.map[t.id]=t}function oS(n,t,e){const i=n.name,s=i.length;for(Ul.lastIndex=0;;){const r=Ul.exec(i),o=Ul.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mh(e,c===void 0?new iS(a,n,t):new sS(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new rS(a),mh(e,f)),e=f}}}class ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function gh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aS=37297;let lS=0;function cS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const _h=new Qt;function uS(n){ne._getMatrix(_h,ne.workingColorSpace,n);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case za:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cS(n.getShaderSource(t),o)}else return s}function fS(n,t){const e=uS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hS(n,t){let e;switch(t){case Rv:e="Linear";break;case Pv:e="Reinhard";break;case Lv:e="Cineon";break;case Dv:e="ACESFilmic";break;case Iv:e="AgX";break;case Nv:e="Neutral";break;case Uv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new k;function dS(){ne.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function mS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Nr(n){return n!==""}function xh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(n){return n.replace(_S,xS)}const vS=new Map;function xS(n,t){let e=te[t];if(e===void 0){const i=vS.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(yS,MS)}function MS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function SS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_p?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function bS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case ur:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ES(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function wS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case Av:t="ENVMAP_BLENDING_MIX";break;case Cv:t="ENVMAP_BLENDING_ADD";break}return t}function TS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function AS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=SS(e),c=bS(e),u=ES(e),f=wS(e),d=TS(e),p=pS(e),g=mS(r),_=s.createProgram();let m,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),h.length>0&&(h+=`
`)):(m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),h=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?te.tonemapping_pars_fragment:"",e.toneMapping!==Hi?hS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,fS("linearToOutputTexel",e.outputColorSpace),dS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Xc(o),o=xh(o,e),o=yh(o,e),a=Xc(a),a=xh(a,e),a=yh(a,e),o=Mh(o),a=Mh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,y=x+h+a,P=gh(s,s.VERTEX_SHADER,v),C=gh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(I){if(n.debug.checkShaderErrors){const st=s.getProgramInfoLog(_).trim(),K=s.getShaderInfoLog(P).trim(),rt=s.getShaderInfoLog(C).trim();let ht=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,C);else{const ft=vh(s,P,"vertex"),X=vh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+st+`
`+ft+`
`+X)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(K===""||rt==="")&&(q=!1);q&&(I.diagnostics={runnable:ht,programLog:st,vertexShader:{log:K,prefix:m},fragmentShader:{log:rt,prefix:h}})}s.deleteShader(P),s.deleteShader(C),F=new ra(s,_),w=gS(s,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,aS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let CS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new PS(t),e.set(t,i)),i}}class PS{constructor(t){this.id=CS++,this.code=t,this.usedTimes=0}}function LS(n,t,e,i,s,r,o){const a=new Ru,l=new RS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,st,K){const rt=st.fog,ht=K.geometry,q=w.isMeshStandardMaterial?st.environment:null,ft=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),X=ft&&ft.mapping===ka?ft.image.height:null,Et=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const j=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=j!==void 0?j.length:0;let W=0;ht.morphAttributes.position!==void 0&&(W=1),ht.morphAttributes.normal!==void 0&&(W=2),ht.morphAttributes.color!==void 0&&(W=3);let Tt,Y,ct,yt;if(Et){const Zt=qn[Et];Tt=Zt.vertexShader,Y=Zt.fragmentShader}else Tt=w.vertexShader,Y=w.fragmentShader,l.update(w),ct=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const gt=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),Ut=K.isInstancedMesh===!0,Wt=K.isBatchedMesh===!0,jt=!!w.map,A=!!w.matcap,N=!!ft,T=!!w.aoMap,pt=!!w.lightMap,Q=!!w.bumpMap,tt=!!w.normalMap,lt=!!w.displacementMap,_t=!!w.emissiveMap,it=!!w.metalnessMap,S=!!w.roughnessMap,M=w.anisotropy>0,U=w.clearcoat>0,$=w.dispersion>0,R=w.iridescence>0,D=w.sheen>0,G=w.transmission>0,J=M&&!!w.anisotropyMap,mt=U&&!!w.clearcoatMap,Lt=U&&!!w.clearcoatNormalMap,at=U&&!!w.clearcoatRoughnessMap,Mt=R&&!!w.iridescenceMap,Nt=R&&!!w.iridescenceThicknessMap,Ot=D&&!!w.sheenColorMap,xt=D&&!!w.sheenRoughnessMap,Ht=!!w.specularMap,Xt=!!w.specularColorMap,se=!!w.specularIntensityMap,z=G&&!!w.transmissionMap,Ct=G&&!!w.thicknessMap,ot=!!w.gradientMap,dt=!!w.alphaMap,bt=w.alphaTest>0,At=!!w.alphaHash,$t=!!w.extensions;let re=Hi;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(re=n.toneMapping);const xe={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:Tt,fragmentShader:Y,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&K._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&K.instanceColor!==null,instancingMorph:Ut&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:pr,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:A,envMap:N,envMapMode:N&&ft.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:pt,bumpMap:Q,normalMap:tt,displacementMap:d&&lt,emissiveMap:_t,normalMapObjectSpace:tt&&w.normalMapType===kv,normalMapTangentSpace:tt&&w.normalMapType===Pp,metalnessMap:it,roughnessMap:S,anisotropy:M,anisotropyMap:J,clearcoat:U,clearcoatMap:mt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:at,dispersion:$,iridescence:R,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:D,sheenColorMap:Ot,sheenRoughnessMap:xt,specularMap:Ht,specularColorMap:Xt,specularIntensityMap:se,transmission:G,transmissionMap:z,thicknessMap:Ct,gradientMap:ot,opaque:w.transparent===!1&&w.blending===er&&w.alphaToCoverage===!1,alphaMap:dt,alphaTest:bt,alphaHash:At,combine:w.combine,mapUv:jt&&_(w.map.channel),aoMapUv:T&&_(w.aoMap.channel),lightMapUv:pt&&_(w.lightMap.channel),bumpMapUv:Q&&_(w.bumpMap.channel),normalMapUv:tt&&_(w.normalMap.channel),displacementMapUv:lt&&_(w.displacementMap.channel),emissiveMapUv:_t&&_(w.emissiveMap.channel),metalnessMapUv:it&&_(w.metalnessMap.channel),roughnessMapUv:S&&_(w.roughnessMap.channel),anisotropyMapUv:J&&_(w.anisotropyMap.channel),clearcoatMapUv:mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ht&&_(w.specularMap.channel),specularColorMapUv:Xt&&_(w.specularColorMap.channel),specularIntensityMapUv:se&&_(w.specularIntensityMap.channel),transmissionMapUv:z&&_(w.transmissionMap.channel),thicknessMapUv:Ct&&_(w.thicknessMap.channel),alphaMapUv:dt&&_(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(tt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ht.attributes.uv&&(jt||dt),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:It,skinning:K.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===pe,decodeVideoTextureEmissive:_t&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(x(b,w),v(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const b=g[w.type];let I;if(b){const st=qn[b];I=p0.clone(st.uniforms)}else I=w.uniforms;return I}function P(w,b){let I;for(let st=0,K=u.length;st<K;st++){const rt=u[st];if(rt.cacheKey===b){I=rt,++I.usedTimes;break}}return I===void 0&&(I=new AS(n,b,w,r),u.push(I)),I}function C(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:F}}function DS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function US(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Eh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,d,p,g,_,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),t++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||US),i.length>1&&i.sort(d||bh),s.length>1&&s.sort(d||bh)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function IS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Eh,n.set(i,[o])):s>=r.length?(o=new Eh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function NS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ie};break;case"SpotLight":e={position:new k,direction:new k,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function FS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let OS=0;function BS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kS(n){const t=new NS,e=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new be,o=new be;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,v=0,y=0,P=0,C=0,L=0;c.sort(BS);for(let w=0,b=c.length;w<b;w++){const I=c[w],st=I.color,K=I.intensity,rt=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=st.r*K,f+=st.g*K,d+=st.b*K;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],K);L++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ft=I.shadow,X=e.get(I);X.shadowIntensity=ft.intensity,X.shadowBias=ft.bias,X.shadowNormalBias=ft.normalBias,X.shadowRadius=ft.radius,X.shadowMapSize=ft.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ht,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=q,p++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(st).multiplyScalar(K),q.distance=rt,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;const ft=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,ft.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=ft.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=ft.intensity,X.shadowBias=ft.bias,X.shadowNormalBias=ft.normalBias,X.shadowRadius=ft.radius,X.shadowMapSize=ft.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=ht,y++}_++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(st).multiplyScalar(K),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const ft=I.shadow,X=e.get(I);X.shadowIntensity=ft.intensity,X.shadowBias=ft.bias,X.shadowNormalBias=ft.normalBias,X.shadowRadius=ft.radius,X.shadowMapSize=ft.mapSize,X.shadowCameraNear=ft.camera.near,X.shadowCameraFar=ft.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ht,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(K),q.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[h]=q,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==x||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==P||F.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=x,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=P,F.numLightProbes=L,i.version=OS++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function wh(n){const t=new kS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wh(n),t.set(s,[a])):r>=o.length?(a=new wh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class HS extends bs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VS extends bs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
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
}`;function XS(n,t,e){let i=new Pu;const s=new Ft,r=new Ft,o=new Ae,a=new HS({depthPacking:Bv}),l=new VS,c={},u=e.maxTextureSize,f={[$i]:rn,[rn]:$i,[gi]:gi},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_p;let h=this.type;this.render=function(C,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),st=n.state;st.setBlending(zi),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const K=h!==ui&&this.type===ui,rt=h===ui&&this.type!==ui;for(let ht=0,q=C.length;ht<q;ht++){const ft=C[ht],X=ft.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Et=X.getFrameExtents();if(s.multiply(Et),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Et.x),s.x=r.x*Et.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Et.y),s.y=r.y*Et.y,X.mapSize.y=r.y)),X.map===null||K===!0||rt===!0){const O=this.type!==ui?{minFilter:Nn,magFilter:Nn}:{};X.map!==null&&X.map.dispose(),X.map=new ys(s.x,s.y,O),X.map.texture.name=ft.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const j=X.getViewportCount();for(let O=0;O<j;O++){const W=X.getViewport(O);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),st.viewport(o),X.updateMatrices(ft,O),i=X.getFrustum(),y(L,F,X.camera,ft,this.type)}X.isPointLightShadow!==!0&&this.type===ui&&x(X,F),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,I)};function x(C,L){const F=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ys(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,F,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,F,p,_,null)}function v(C,L,F,w){let b=null;const I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=F.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const st=b.uuid,K=L.uuid;let rt=c[st];rt===void 0&&(rt={},c[st]=rt);let ht=rt[K];ht===void 0&&(ht=b.clone(),rt[K]=ht,L.addEventListener("dispose",P)),b=ht}if(b.visible=L.visible,b.wireframe=L.wireframe,w===ui?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:f[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const st=n.properties.get(b);st.light=F}return b}function y(C,L,F,w,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const K=t.update(C),rt=C.material;if(Array.isArray(rt)){const ht=K.groups;for(let q=0,ft=ht.length;q<ft;q++){const X=ht[q],Et=rt[X.materialIndex];if(Et&&Et.visible){const j=v(C,Et,w,b);C.onBeforeShadow(n,C,L,F,K,j,X),n.renderBufferDirect(F,null,K,j,C,X),C.onAfterShadow(n,C,L,F,K,j,X)}}}else if(rt.visible){const ht=v(C,rt,w,b);C.onBeforeShadow(n,C,L,F,K,ht,null),n.renderBufferDirect(F,null,K,ht,C,null),C.onAfterShadow(n,C,L,F,K,ht,null)}}const st=C.children;for(let K=0,rt=st.length;K<rt;K++)y(st[K],L,F,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(const F in c){const w=c[F],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const $S={[oc]:ac,[lc]:fc,[cc]:hc,[lr]:uc,[ac]:oc,[fc]:lc,[hc]:cc,[uc]:lr};function qS(n,t){function e(){let z=!1;const Ct=new Ae;let ot=null;const dt=new Ae(0,0,0,0);return{setMask:function(bt){ot!==bt&&!z&&(n.colorMask(bt,bt,bt,bt),ot=bt)},setLocked:function(bt){z=bt},setClear:function(bt,At,$t,re,xe){xe===!0&&(bt*=re,At*=re,$t*=re),Ct.set(bt,At,$t,re),dt.equals(Ct)===!1&&(n.clearColor(bt,At,$t,re),dt.copy(Ct))},reset:function(){z=!1,ot=null,dt.set(-1,0,0,0)}}}function i(){let z=!1,Ct=!1,ot=null,dt=null,bt=null;return{setReversed:function(At){if(Ct!==At){const $t=t.get("EXT_clip_control");Ct?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const re=bt;bt=null,this.setClear(re)}Ct=At},getReversed:function(){return Ct},setTest:function(At){At?gt(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(At){ot!==At&&!z&&(n.depthMask(At),ot=At)},setFunc:function(At){if(Ct&&(At=$S[At]),dt!==At){switch(At){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case uc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=At}},setLocked:function(At){z=At},setClear:function(At){bt!==At&&(Ct&&(At=1-At),n.clearDepth(At),bt=At)},reset:function(){z=!1,ot=null,dt=null,bt=null,Ct=!1}}}function s(){let z=!1,Ct=null,ot=null,dt=null,bt=null,At=null,$t=null,re=null,xe=null;return{setTest:function(Zt){z||(Zt?gt(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(Zt){Ct!==Zt&&!z&&(n.stencilMask(Zt),Ct=Zt)},setFunc:function(Zt,ye,ee){(ot!==Zt||dt!==ye||bt!==ee)&&(n.stencilFunc(Zt,ye,ee),ot=Zt,dt=ye,bt=ee)},setOp:function(Zt,ye,ee){(At!==Zt||$t!==ye||re!==ee)&&(n.stencilOp(Zt,ye,ee),At=Zt,$t=ye,re=ee)},setLocked:function(Zt){z=Zt},setClear:function(Zt){xe!==Zt&&(n.clearStencil(Zt),xe=Zt)},reset:function(){z=!1,Ct=null,ot=null,dt=null,bt=null,At=null,$t=null,re=null,xe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,y=null,P=null,C=null,L=new ie(0,0,0),F=0,w=!1,b=null,I=null,st=null,K=null,rt=null;const ht=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ft=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=ft>=1):X.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=ft>=2);let Et=null,j={};const O=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),Tt=new Ae().fromArray(O),Y=new Ae().fromArray(W);function ct(z,Ct,ot,dt){const bt=new Uint8Array(4),At=n.createTexture();n.bindTexture(z,At),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<ot;$t++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(Ct+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return At}const yt={};yt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(lr),Q(!1),tt(Lf),gt(n.CULL_FACE),T(zi);function gt(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function It(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Ut(z,Ct){return f[z]!==Ct?(n.bindFramebuffer(z,Ct),f[z]=Ct,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ct),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Wt(z,Ct){let ot=p,dt=!1;if(z){ot=d.get(Ct),ot===void 0&&(ot=[],d.set(Ct,ot));const bt=z.textures;if(ot.length!==bt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let At=0,$t=bt.length;At<$t;At++)ot[At]=n.COLOR_ATTACHMENT0+At;ot.length=bt.length,dt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,dt=!0);dt&&n.drawBuffers(ot)}function jt(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const A={[cs]:n.FUNC_ADD,[uv]:n.FUNC_SUBTRACT,[fv]:n.FUNC_REVERSE_SUBTRACT};A[hv]=n.MIN,A[dv]=n.MAX;const N={[pv]:n.ZERO,[mv]:n.ONE,[gv]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[Sv]:n.SRC_ALPHA_SATURATE,[yv]:n.DST_COLOR,[vv]:n.DST_ALPHA,[_v]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[Mv]:n.ONE_MINUS_DST_COLOR,[xv]:n.ONE_MINUS_DST_ALPHA,[bv]:n.CONSTANT_COLOR,[Ev]:n.ONE_MINUS_CONSTANT_COLOR,[wv]:n.CONSTANT_ALPHA,[Tv]:n.ONE_MINUS_CONSTANT_ALPHA};function T(z,Ct,ot,dt,bt,At,$t,re,xe,Zt){if(z===zi){_===!0&&(It(n.BLEND),_=!1);return}if(_===!1&&(gt(n.BLEND),_=!0),z!==cv){if(z!==m||Zt!==w){if((h!==cs||y!==cs)&&(n.blendEquation(n.FUNC_ADD),h=cs,y=cs),Zt)switch(z){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,v=null,P=null,C=null,L.set(0,0,0),F=0,m=z,w=Zt}return}bt=bt||Ct,At=At||ot,$t=$t||dt,(Ct!==h||bt!==y)&&(n.blendEquationSeparate(A[Ct],A[bt]),h=Ct,y=bt),(ot!==x||dt!==v||At!==P||$t!==C)&&(n.blendFuncSeparate(N[ot],N[dt],N[At],N[$t]),x=ot,v=dt,P=At,C=$t),(re.equals(L)===!1||xe!==F)&&(n.blendColor(re.r,re.g,re.b,xe),L.copy(re),F=xe),m=z,w=!1}function pt(z,Ct){z.side===gi?It(n.CULL_FACE):gt(n.CULL_FACE);let ot=z.side===rn;Ct&&(ot=!ot),Q(ot),z.blending===er&&z.transparent===!1?T(zi):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const dt=z.stencilWrite;a.setTest(dt),dt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),_t(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function tt(z){z!==ov?(gt(n.CULL_FACE),z!==I&&(z===Lf?n.cullFace(n.BACK):z===av?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),I=z}function lt(z){z!==st&&(q&&n.lineWidth(z),st=z)}function _t(z,Ct,ot){z?(gt(n.POLYGON_OFFSET_FILL),(K!==Ct||rt!==ot)&&(n.polygonOffset(Ct,ot),K=Ct,rt=ot)):It(n.POLYGON_OFFSET_FILL)}function it(z){z?gt(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function S(z){z===void 0&&(z=n.TEXTURE0+ht-1),Et!==z&&(n.activeTexture(z),Et=z)}function M(z,Ct,ot){ot===void 0&&(Et===null?ot=n.TEXTURE0+ht-1:ot=Et);let dt=j[ot];dt===void 0&&(dt={type:void 0,texture:void 0},j[ot]=dt),(dt.type!==z||dt.texture!==Ct)&&(Et!==ot&&(n.activeTexture(ot),Et=ot),n.bindTexture(z,Ct||yt[z]),dt.type=z,dt.texture=Ct)}function U(){const z=j[Et];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function R(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(z){Tt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Tt.copy(z))}function xt(z){Y.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Y.copy(z))}function Ht(z,Ct){let ot=c.get(Ct);ot===void 0&&(ot=new WeakMap,c.set(Ct,ot));let dt=ot.get(z);dt===void 0&&(dt=n.getUniformBlockIndex(Ct,z.name),ot.set(z,dt))}function Xt(z,Ct){const dt=c.get(Ct).get(z);l.get(Ct)!==dt&&(n.uniformBlockBinding(Ct,dt,z.__bindingPointIndex),l.set(Ct,dt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Et=null,j={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,y=null,P=null,C=null,L=new ie(0,0,0),F=0,w=!1,b=null,I=null,st=null,K=null,rt=null,Tt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:It,bindFramebuffer:Ut,drawBuffers:Wt,useProgram:jt,setBlending:T,setMaterial:pt,setFlipSided:Q,setCullFace:tt,setLineWidth:lt,setPolygonOffset:_t,setScissorTest:it,activeTexture:S,bindTexture:M,unbindTexture:U,compressedTexImage2D:$,compressedTexImage3D:R,texImage2D:Mt,texImage3D:Nt,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:Lt,texStorage3D:at,texSubImage2D:D,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:mt,scissor:Ot,viewport:xt,reset:se}}function Th(n,t,e,i){const s=YS(i);switch(e){case bp:return n*t;case wp:return n*t;case Tp:return n*t*2;case Ap:return n*t/s.components*s.byteLength;case wu:return n*t/s.components*s.byteLength;case Cp:return n*t*2/s.components*s.byteLength;case Tu:return n*t*2/s.components*s.byteLength;case Ep:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case Au:return n*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case yc:return Math.max(n,16)*Math.max(t,8)/4;case _c:case xc:return Math.max(n,8)*Math.max(t,8)/2;case Mc:case Sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sa:case Bc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rp:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hc:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function YS(n){switch(n){case wi:case yp:return{byteLength:1,components:1};case Zr:case Mp:case lo:return{byteLength:2,components:1};case bu:case Eu:return{byteLength:2,components:4};case xs:case Su:case _i:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function KS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,M){return p?new OffscreenCanvas(S,M):ya("canvas")}function _(S,M,U){let $=1;const R=it(S);if((R.width>U||R.height>U)&&($=U/Math.max(R.width,R.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const D=Math.floor($*R.width),G=Math.floor($*R.height);f===void 0&&(f=g(D,G));const J=M?g(D,G):f;return J.width=D,J.height=G,J.getContext("2d").drawImage(S,0,0,D,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+D+"x"+G+")."),J}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function x(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(S,M,U,$,R=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let D=M;if(M===n.RED&&(U===n.FLOAT&&(D=n.R32F),U===n.HALF_FLOAT&&(D=n.R16F),U===n.UNSIGNED_BYTE&&(D=n.R8)),M===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(D=n.R8UI),U===n.UNSIGNED_SHORT&&(D=n.R16UI),U===n.UNSIGNED_INT&&(D=n.R32UI),U===n.BYTE&&(D=n.R8I),U===n.SHORT&&(D=n.R16I),U===n.INT&&(D=n.R32I)),M===n.RG&&(U===n.FLOAT&&(D=n.RG32F),U===n.HALF_FLOAT&&(D=n.RG16F),U===n.UNSIGNED_BYTE&&(D=n.RG8)),M===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(D=n.RG8UI),U===n.UNSIGNED_SHORT&&(D=n.RG16UI),U===n.UNSIGNED_INT&&(D=n.RG32UI),U===n.BYTE&&(D=n.RG8I),U===n.SHORT&&(D=n.RG16I),U===n.INT&&(D=n.RG32I)),M===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(D=n.RGB8UI),U===n.UNSIGNED_SHORT&&(D=n.RGB16UI),U===n.UNSIGNED_INT&&(D=n.RGB32UI),U===n.BYTE&&(D=n.RGB8I),U===n.SHORT&&(D=n.RGB16I),U===n.INT&&(D=n.RGB32I)),M===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(D=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(D=n.RGBA16UI),U===n.UNSIGNED_INT&&(D=n.RGBA32UI),U===n.BYTE&&(D=n.RGBA8I),U===n.SHORT&&(D=n.RGBA16I),U===n.INT&&(D=n.RGBA32I)),M===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(D=n.RGB9_E5),M===n.RGBA){const G=R?za:ne.getTransfer($);U===n.FLOAT&&(D=n.RGBA32F),U===n.HALF_FLOAT&&(D=n.RGBA16F),U===n.UNSIGNED_BYTE&&(D=G===pe?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(D=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(D=n.RGB5_A1)}return(D===n.R16F||D===n.R32F||D===n.RG16F||D===n.RG32F||D===n.RGBA16F||D===n.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function y(S,M){let U;return S?M===null||M===xs||M===fr?U=n.DEPTH24_STENCIL8:M===_i?U=n.DEPTH32F_STENCIL8:M===Zr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xs||M===fr?U=n.DEPTH_COMPONENT24:M===_i?U=n.DEPTH_COMPONENT32F:M===Zr&&(U=n.DEPTH_COMPONENT16),U}function P(S,M){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Nn&&S.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function C(S){const M=S.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&u.delete(M)}function L(S){const M=S.target;M.removeEventListener("dispose",L),b(M)}function F(S){const M=i.get(S);if(M.__webglInit===void 0)return;const U=S.source,$=d.get(U);if($){const R=$[M.__cacheKey];R.usedTimes--,R.usedTimes===0&&w(S),Object.keys($).length===0&&d.delete(U)}i.remove(S)}function w(S){const M=i.get(S);n.deleteTexture(M.__webglTexture);const U=S.source,$=d.get(U);delete $[M.__cacheKey],o.memory.textures--}function b(S){const M=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let R=0;R<M.__webglFramebuffer[$].length;R++)n.deleteFramebuffer(M.__webglFramebuffer[$][R]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=S.textures;for(let $=0,R=U.length;$<R;$++){const D=i.get(U[$]);D.__webglTexture&&(n.deleteTexture(D.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(S)}let I=0;function st(){I=0}function K(){const S=I;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),I+=1,S}function rt(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function ht(S,M){const U=i.get(S);if(S.isVideoTexture&&lt(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,S,M);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+M)}function q(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Y(U,S,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+M)}function ft(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Y(U,S,M);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+M)}function X(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){ct(U,S,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+M)}const Et={[mc]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[gc]:n.MIRRORED_REPEAT},j={[Nn]:n.NEAREST,[Fv]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},O={[zv]:n.NEVER,[$v]:n.ALWAYS,[Hv]:n.LESS,[Lp]:n.LEQUAL,[Vv]:n.EQUAL,[Xv]:n.GEQUAL,[Gv]:n.GREATER,[Wv]:n.NOTEQUAL};function W(S,M){if(M.type===_i&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===rl||M.magFilter===Mo||M.magFilter===ds||M.minFilter===jn||M.minFilter===rl||M.minFilter===Mo||M.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Et[M.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Et[M.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Et[M.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,j[M.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==Mo&&M.minFilter!==ds||M.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Tt(S,M){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let R=d.get($);R===void 0&&(R={},d.set($,R));const D=rt(M);if(D!==S.__cacheKey){R[D]===void 0&&(R[D]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),R[D].usedTimes++;const G=R[S.__cacheKey];G!==void 0&&(R[S.__cacheKey].usedTimes--,G.usedTimes===0&&w(M)),S.__cacheKey=D,S.__webglTexture=R[D].texture}return U}function Y(S,M,U){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const R=Tt(S,M),D=M.source;e.bindTexture($,S.__webglTexture,n.TEXTURE0+U);const G=i.get(D);if(D.version!==G.__version||R===!0){e.activeTexture(n.TEXTURE0+U);const J=ne.getPrimaries(ne.workingColorSpace),mt=M.colorSpace===Oi?null:ne.getPrimaries(M.colorSpace),Lt=M.colorSpace===Oi||J===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let at=_(M.image,!1,s.maxTextureSize);at=_t(M,at);const Mt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let Ot=v(M.internalFormat,Mt,Nt,M.colorSpace,M.isVideoTexture);W($,M);let xt;const Ht=M.mipmaps,Xt=M.isVideoTexture!==!0,se=G.__version===void 0||R===!0,z=D.dataReady,Ct=P(M,at);if(M.isDepthTexture)Ot=y(M.format===hr,M.type),se&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Ot,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,Nt,null));else if(M.isDataTexture)if(Ht.length>0){Xt&&se&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Ht[0].width,Ht[0].height);for(let ot=0,dt=Ht.length;ot<dt;ot++)xt=Ht[ot],Xt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,Mt,Nt,xt.data):e.texImage2D(n.TEXTURE_2D,ot,Ot,xt.width,xt.height,0,Mt,Nt,xt.data);M.generateMipmaps=!1}else Xt?(se&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,at.width,at.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,Mt,Nt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,at.width,at.height,0,Mt,Nt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,Ht[0].width,Ht[0].height,at.depth);for(let ot=0,dt=Ht.length;ot<dt;ot++)if(xt=Ht[ot],M.format!==Rn)if(Mt!==null)if(Xt){if(z)if(M.layerUpdates.size>0){const bt=Th(xt.width,xt.height,M.format,M.type);for(const At of M.layerUpdates){const $t=xt.data.subarray(At*bt/xt.data.BYTES_PER_ELEMENT,(At+1)*bt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,At,xt.width,xt.height,1,Mt,$t)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,Mt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Ot,xt.width,xt.height,at.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,Mt,Nt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Ot,xt.width,xt.height,at.depth,0,Mt,Nt,xt.data)}else{Xt&&se&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Ht[0].width,Ht[0].height);for(let ot=0,dt=Ht.length;ot<dt;ot++)xt=Ht[ot],M.format!==Rn?Mt!==null?Xt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,Mt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt.width,xt.height,Mt,Nt,xt.data):e.texImage2D(n.TEXTURE_2D,ot,Ot,xt.width,xt.height,0,Mt,Nt,xt.data)}else if(M.isDataArrayTexture)if(Xt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,at.width,at.height,at.depth),z)if(M.layerUpdates.size>0){const ot=Th(at.width,at.height,M.format,M.type);for(const dt of M.layerUpdates){const bt=at.data.subarray(dt*ot/at.data.BYTES_PER_ELEMENT,(dt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,at.width,at.height,1,Mt,Nt,bt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(M.isData3DTexture)Xt?(se&&e.texStorage3D(n.TEXTURE_3D,Ct,Ot,at.width,at.height,at.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(M.isFramebufferTexture){if(se)if(Xt)e.texStorage2D(n.TEXTURE_2D,Ct,Ot,at.width,at.height);else{let ot=at.width,dt=at.height;for(let bt=0;bt<Ct;bt++)e.texImage2D(n.TEXTURE_2D,bt,Ot,ot,dt,0,Mt,Nt,null),ot>>=1,dt>>=1}}else if(Ht.length>0){if(Xt&&se){const ot=it(Ht[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,ot.width,ot.height)}for(let ot=0,dt=Ht.length;ot<dt;ot++)xt=Ht[ot],Xt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Mt,Nt,xt):e.texImage2D(n.TEXTURE_2D,ot,Ot,Mt,Nt,xt);M.generateMipmaps=!1}else if(Xt){if(se){const ot=it(at);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,ot.width,ot.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Nt,at)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Nt,at);m(M)&&h($),G.__version=D.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function ct(S,M,U){if(M.image.length!==6)return;const $=Tt(S,M),R=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const D=i.get(R);if(R.version!==D.__version||$===!0){e.activeTexture(n.TEXTURE0+U);const G=ne.getPrimaries(ne.workingColorSpace),J=M.colorSpace===Oi?null:ne.getPrimaries(M.colorSpace),mt=M.colorSpace===Oi||G===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let dt=0;dt<6;dt++)!Lt&&!at?Mt[dt]=_(M.image[dt],!0,s.maxCubemapSize):Mt[dt]=at?M.image[dt].image:M.image[dt],Mt[dt]=_t(M,Mt[dt]);const Nt=Mt[0],Ot=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Ht=v(M.internalFormat,Ot,xt,M.colorSpace),Xt=M.isVideoTexture!==!0,se=D.__version===void 0||$===!0,z=R.dataReady;let Ct=P(M,Nt);W(n.TEXTURE_CUBE_MAP,M);let ot;if(Lt){Xt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ht,Nt.width,Nt.height);for(let dt=0;dt<6;dt++){ot=Mt[dt].mipmaps;for(let bt=0;bt<ot.length;bt++){const At=ot[bt];M.format!==Rn?Ot!==null?Xt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,At.width,At.height,Ot,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,At.width,At.height,Ot,xt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Ht,At.width,At.height,0,Ot,xt,At.data)}}}else{if(ot=M.mipmaps,Xt&&se){ot.length>0&&Ct++;const dt=it(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Ht,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(at){Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Mt[dt].width,Mt[dt].height,Ot,xt,Mt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Ht,Mt[dt].width,Mt[dt].height,0,Ot,xt,Mt[dt].data);for(let bt=0;bt<ot.length;bt++){const $t=ot[bt].image[dt].image;Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,$t.width,$t.height,Ot,xt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Ht,$t.width,$t.height,0,Ot,xt,$t.data)}}else{Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ot,xt,Mt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Ht,Ot,xt,Mt[dt]);for(let bt=0;bt<ot.length;bt++){const At=ot[bt];Xt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Ot,xt,At.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Ht,Ot,xt,At.image[dt])}}}m(M)&&h(n.TEXTURE_CUBE_MAP),D.__version=R.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function yt(S,M,U,$,R,D){const G=r.convert(U.format,U.colorSpace),J=r.convert(U.type),mt=v(U.internalFormat,G,J,U.colorSpace),Lt=i.get(M),at=i.get(U);if(at.__renderTarget=M,!Lt.__hasExternalTextures){const Mt=Math.max(1,M.width>>D),Nt=Math.max(1,M.height>>D);R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?e.texImage3D(R,D,mt,Mt,Nt,M.depth,0,G,J,null):e.texImage2D(R,D,mt,Mt,Nt,0,G,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,R,at.__webglTexture,0,Q(M)):(R===n.TEXTURE_2D||R>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,R,at.__webglTexture,D),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(S,M,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),M.depthBuffer){const $=M.depthTexture,R=$&&$.isDepthTexture?$.type:null,D=y(M.stencilBuffer,R),G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=Q(M);tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,D,M.width,M.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,D,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,D,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,S)}else{const $=M.textures;for(let R=0;R<$.length;R++){const D=$[R],G=r.convert(D.format,D.colorSpace),J=r.convert(D.type),mt=v(D.internalFormat,G,J,D.colorSpace),Lt=Q(M);U&&tt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,mt,M.width,M.height):tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,mt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,mt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht(M.depthTexture,0);const R=$.__webglTexture,D=Q(M);if(M.depthTexture.format===nr)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,R,0);else if(M.depthTexture.format===hr)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function Ut(S){const M=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){const $=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const R=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",R)};$.addEventListener("dispose",R),M.__depthDisposeCallback=R}M.__boundDepthTexture=$}if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,S)}else if(U){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),gt(M.__webglDepthbuffer[$],S,!1);else{const R=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,D)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),gt(M.__webglDepthbuffer,S,!1);else{const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,R)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(S,M,U){const $=i.get(S);M!==void 0&&yt($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ut(S)}function jt(S){const M=S.texture,U=i.get(S),$=i.get(M);S.addEventListener("dispose",L);const R=S.textures,D=S.isWebGLCubeRenderTarget===!0,G=R.length>1;if(G||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),D){U.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[J]=[];for(let mt=0;mt<M.mipmaps.length;mt++)U.__webglFramebuffer[J][mt]=n.createFramebuffer()}else U.__webglFramebuffer[J]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)U.__webglFramebuffer[J]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(G)for(let J=0,mt=R.length;J<mt;J++){const Lt=i.get(R[J]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&tt(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let J=0;J<R.length;J++){const mt=R[J];U.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[J]);const Lt=r.convert(mt.format,mt.colorSpace),at=r.convert(mt.type),Mt=v(mt.internalFormat,Lt,at,mt.colorSpace,S.isXRRenderTarget===!0),Nt=Q(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Mt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,U.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(U.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(D){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),W(n.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)yt(U.__webglFramebuffer[J][mt],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt);else yt(U.__webglFramebuffer[J],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(M)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(G){for(let J=0,mt=R.length;J<mt;J++){const Lt=R[J],at=i.get(Lt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),W(n.TEXTURE_2D,Lt),yt(U.__webglFramebuffer,S,Lt,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,0),m(Lt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,$.__webglTexture),W(J,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)yt(U.__webglFramebuffer[mt],S,M,n.COLOR_ATTACHMENT0,J,mt);else yt(U.__webglFramebuffer,S,M,n.COLOR_ATTACHMENT0,J,0);m(M)&&h(J),e.unbindTexture()}S.depthBuffer&&Ut(S)}function A(S){const M=S.textures;for(let U=0,$=M.length;U<$;U++){const R=M[U];if(m(R)){const D=x(S),G=i.get(R).__webglTexture;e.bindTexture(D,G),h(D),e.unbindTexture()}}}const N=[],T=[];function pt(S){if(S.samples>0){if(tt(S)===!1){const M=S.textures,U=S.width,$=S.height;let R=n.COLOR_BUFFER_BIT;const D=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=i.get(S),J=M.length>1;if(J)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(R|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(R|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);const Lt=i.get(M[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,R,n.NEAREST),l===!0&&(N.length=0,T.length=0,N.push(n.COLOR_ATTACHMENT0+mt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(N.push(D),T.push(D),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);const Lt=i.get(M[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const M=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Q(S){return Math.min(s.maxSamples,S.samples)}function tt(S){const M=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(S){const M=o.render.frame;u.get(S)!==M&&(u.set(S,M),S.update())}function _t(S,M){const U=S.colorSpace,$=S.format,R=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==pr&&U!==Oi&&(ne.getTransfer(U)===pe?($!==Rn||R!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function it(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=q,this.setTexture3D=ft,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=tt}function jS(n,t){function e(i,s=Oi){let r;const o=ne.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yp)return n.BYTE;if(i===Mp)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===Su)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===bp)return n.ALPHA;if(i===Ep)return n.RGB;if(i===Rn)return n.RGBA;if(i===wp)return n.LUMINANCE;if(i===Tp)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===Ap)return n.RED;if(i===wu)return n.RED_INTEGER;if(i===Cp)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===ta||i===ea||i===na||i===ia)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_c||i===vc||i===xc||i===yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mc||i===Sc||i===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mc||i===Sc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Uc||i===Ic||i===Nc||i===Fc||i===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===Bc||i===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sa)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rp||i===zc||i===Hc||i===Vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ZS extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ps extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new qi({vertexShader:QS,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pn(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends mr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=new eb,m=e.getContextAttributes();let h=null,x=null;const v=[],y=[],P=new Ft;let C=null;const L=new _n;L.viewport=new Ae;const F=new _n;F.viewport=new Ae;const w=[L,F],b=new ZS;let I=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=v[Y];return ct===void 0&&(ct=new Il,v[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=v[Y];return ct===void 0&&(ct=new Il,v[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=v[Y];return ct===void 0&&(ct=new Il,v[Y]=ct),ct.getHandSpace()};function K(Y){const ct=y.indexOf(Y.inputSource);if(ct===-1)return;const yt=v[ct];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function rt(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",ht);for(let Y=0;Y<v.length;Y++){const ct=y[Y];ct!==null&&(y[Y]=null,v[Y].disconnect(ct))}I=null,st=null,_.reset(),t.setRenderTarget(h),p=null,d=null,f=null,s=null,x=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",ht),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ys(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,yt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?hr:nr,yt=m.stencil?fr:xs);const It={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ys(d.textureWidth,d.textureHeight,{format:Rn,type:wi,depthTexture:new Wp(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ht(Y){for(let ct=0;ct<Y.removed.length;ct++){const yt=Y.removed[ct],gt=y.indexOf(yt);gt>=0&&(y[gt]=null,v[gt].disconnect(yt))}for(let ct=0;ct<Y.added.length;ct++){const yt=Y.added[ct];let gt=y.indexOf(yt);if(gt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=y.length){y.push(yt),gt=Ut;break}else if(y[Ut]===null){y[Ut]=yt,gt=Ut;break}if(gt===-1)break}const It=v[gt];It&&It.connect(yt)}}const q=new k,ft=new k;function X(Y,ct,yt){q.setFromMatrixPosition(ct.matrixWorld),ft.setFromMatrixPosition(yt.matrixWorld);const gt=q.distanceTo(ft),It=ct.projectionMatrix.elements,Ut=yt.projectionMatrix.elements,Wt=It[14]/(It[10]-1),jt=It[14]/(It[10]+1),A=(It[9]+1)/It[5],N=(It[9]-1)/It[5],T=(It[8]-1)/It[0],pt=(Ut[8]+1)/Ut[0],Q=Wt*T,tt=Wt*pt,lt=gt/(-T+pt),_t=lt*-T;if(ct.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_t),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const it=Wt+lt,S=jt+lt,M=Q-_t,U=tt+(gt-_t),$=A*jt/S*it,R=N*jt/S*it;Y.projectionMatrix.makePerspective(M,U,$,R,it,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Et(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ct=Y.near,yt=Y.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),b.near=F.near=L.near=ct,b.far=F.far=L.far=yt,(I!==b.near||st!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,st=b.far),L.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,b.layers.mask=L.layers.mask|F.layers.mask;const gt=Y.parent,It=b.cameras;Et(b,gt);for(let Ut=0;Ut<It.length;Ut++)Et(It[Ut],gt);It.length===2?X(b,L,F):b.projectionMatrix.copy(L.projectionMatrix),j(Y,b,gt)};function j(Y,ct,yt){yt===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let O=null;function W(Y,ct){if(u=ct.getViewerPose(c||o),g=ct,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let gt=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,gt=!0);for(let Ut=0;Ut<yt.length;Ut++){const Wt=yt[Ut];let jt=null;if(p!==null)jt=p.getViewport(Wt);else{const N=f.getViewSubImage(d,Wt);jt=N.viewport,Ut===0&&(t.setRenderTargetTextures(x,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(x))}let A=w[Ut];A===void 0&&(A=new _n,A.layers.enable(Ut),A.viewport=new Ae,w[Ut]=A),A.matrix.fromArray(Wt.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Wt.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(jt.x,jt.y,jt.width,jt.height),Ut===0&&(b.matrix.copy(A.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),gt===!0&&b.cameras.push(A)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ut=f.getDepthInformation(yt[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,s.renderState)}}for(let yt=0;yt<v.length;yt++){const gt=y[yt],It=v[yt];gt!==null&&It!==void 0&&It.update(gt,ct,c||o)}O&&O(Y,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Tt=new Vp;Tt.setAnimationLoop(W),this.setAnimationLoop=function(Y){O=Y},this.dispose=function(){}}}const ss=new kn,ib=new be;function sb(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,kp(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,x,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,ss.copy(y),ss.x*=-1,ss.y*=-1,ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(ss)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(x,P);const C=t.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function u(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),P=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],y=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,L=y.length;C<L;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,b=F.length;w<b;w++){const I=F[w];if(p(I,C,w,P)===!0){const st=I.__offset,K=Array.isArray(I.value)?I.value:[I.value];let rt=0;for(let ht=0;ht<K.length;ht++){const q=K[ht],ft=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,st+rt,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,rt),rt+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,P){const C=x.value,L=v+"_"+y;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const F=P[L];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return P[L]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(x){const v=x.uniforms;let y=0;const P=16;for(let L=0,F=v.length;L<F;L++){const w=Array.isArray(v[L])?v[L]:[v[L]];for(let b=0,I=w.length;b<I;b++){const st=w[b],K=Array.isArray(st.value)?st.value:[st.value];for(let rt=0,ht=K.length;rt<ht;rt++){const q=K[rt],ft=_(q),X=y%P,Et=X%ft.boundary,j=X+Et;y+=Et,j!==0&&P-j<ft.storage&&(y+=P-j),st.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=y,y+=ft.storage}}}const C=y%P;return C>0&&(y+=P-C),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ob{constructor(t={}){const{canvas:e=Yv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Hi,this.toneMappingExposure=1;const y=this;let P=!1,C=0,L=0,F=null,w=-1,b=null;const I=new Ae,st=new Ae;let K=null;const rt=new ie(0);let ht=0,q=e.width,ft=e.height,X=1,Et=null,j=null;const O=new Ae(0,0,q,ft),W=new Ae(0,0,q,ft);let Tt=!1;const Y=new Pu;let ct=!1,yt=!1;const gt=new be,It=new be,Ut=new k,Wt=new Ae,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function N(){return F===null?X:1}let T=i;function pt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mu}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",At,!1),T===null){const H="webgl2";if(T=pt(H,E),T===null)throw pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,tt,lt,_t,it,S,M,U,$,R,D,G,J,mt,Lt,at,Mt,Nt,Ot,xt,Ht,Xt,se,z;function Ct(){Q=new fM(T),Q.init(),Xt=new jS(T,Q),tt=new rM(T,Q,t,Xt),lt=new qS(T,Q),tt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),_t=new pM(T),it=new DS,S=new KS(T,Q,lt,it,tt,Xt,_t),M=new aM(y),U=new uM(y),$=new M0(T),se=new iM(T,$),R=new hM(T,$,_t,se),D=new gM(T,R,$,_t),Ot=new mM(T,tt,S),at=new oM(it),G=new LS(y,M,U,Q,tt,se,at),J=new sb(y,it),mt=new IS,Lt=new zS(Q),Nt=new nM(y,M,U,lt,D,p,l),Mt=new XS(y,D,tt),z=new rb(T,_t,tt,lt),xt=new sM(T,Q,_t),Ht=new dM(T,Q,_t),_t.programs=G.programs,y.capabilities=tt,y.extensions=Q,y.properties=it,y.renderLists=mt,y.shadowMap=Mt,y.state=lt,y.info=_t}Ct();const ot=new nb(y,T);this.xr=ot,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(q,ft,!1))},this.getSize=function(E){return E.set(q,ft)},this.setSize=function(E,H,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,ft=H,e.width=Math.floor(E*X),e.height=Math.floor(H*X),et===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(q*X,ft*X).floor()},this.setDrawingBufferSize=function(E,H,et){q=E,ft=H,X=et,e.width=Math.floor(E*et),e.height=Math.floor(H*et),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,H,et,nt){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,H,et,nt),lt.viewport(I.copy(O).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,H,et,nt){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,H,et,nt),lt.scissor(st.copy(W).multiplyScalar(X).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(E){lt.setScissorTest(Tt=E)},this.setOpaqueSort=function(E){Et=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,H=!0,et=!0){let nt=0;if(E){let V=!1;if(F!==null){const wt=F.texture.format;V=wt===Au||wt===Tu||wt===wu}if(V){const wt=F.texture.type,Dt=wt===wi||wt===xs||wt===Zr||wt===fr||wt===bu||wt===Eu,Bt=Nt.getClearColor(),kt=Nt.getClearAlpha(),qt=Bt.r,Jt=Bt.g,zt=Bt.b;Dt?(g[0]=qt,g[1]=Jt,g[2]=zt,g[3]=kt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=qt,_[1]=Jt,_[2]=zt,_[3]=kt,T.clearBufferiv(T.COLOR,0,_))}else nt|=T.COLOR_BUFFER_BIT}H&&(nt|=T.DEPTH_BUFFER_BIT),et&&(nt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),mt.dispose(),Lt.dispose(),it.dispose(),M.dispose(),U.dispose(),D.dispose(),se.dispose(),z.dispose(),G.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ze),ot.removeEventListener("sessionend",Ai),Sn.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=_t.autoReset,H=Mt.enabled,et=Mt.autoUpdate,nt=Mt.needsUpdate,V=Mt.type;Ct(),_t.autoReset=E,Mt.enabled=H,Mt.autoUpdate=et,Mt.needsUpdate=nt,Mt.type=V}function At(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){const H=E.target;H.removeEventListener("dispose",$t),re(H)}function re(E){xe(E),it.remove(E)}function xe(E){const H=it.get(E).programs;H!==void 0&&(H.forEach(function(et){G.releaseProgram(et)}),E.isShaderMaterial&&G.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,et,nt,V,wt){H===null&&(H=jt);const Dt=V.isMesh&&V.matrixWorld.determinant()<0,Bt=Rm(E,H,et,nt,V);lt.setMaterial(nt,Dt);let kt=et.index,qt=1;if(nt.wireframe===!0){if(kt=R.getWireframeAttribute(et),kt===void 0)return;qt=2}const Jt=et.drawRange,zt=et.attributes.position;let oe=Jt.start*qt,Me=(Jt.start+Jt.count)*qt;wt!==null&&(oe=Math.max(oe,wt.start*qt),Me=Math.min(Me,(wt.start+wt.count)*qt)),kt!==null?(oe=Math.max(oe,0),Me=Math.min(Me,kt.count)):zt!=null&&(oe=Math.max(oe,0),Me=Math.min(Me,zt.count));const Ee=Me-oe;if(Ee<0||Ee===1/0)return;se.setup(V,nt,Bt,et,kt);let nn,ue=xt;if(kt!==null&&(nn=$.get(kt),ue=Ht,ue.setIndex(nn)),V.isMesh)nt.wireframe===!0?(lt.setLineWidth(nt.wireframeLinewidth*N()),ue.setMode(T.LINES)):ue.setMode(T.TRIANGLES);else if(V.isLine){let Vt=nt.linewidth;Vt===void 0&&(Vt=1),lt.setLineWidth(Vt*N()),V.isLineSegments?ue.setMode(T.LINES):V.isLineLoop?ue.setMode(T.LINE_LOOP):ue.setMode(T.LINE_STRIP)}else V.isPoints?ue.setMode(T.POINTS):V.isSprite&&ue.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Vt=V._multiDrawStarts,ii=V._multiDrawCounts,fe=V._multiDrawCount,bn=kt?$.get(kt).bytesPerElement:1,ws=it.get(nt).currentProgram.getUniforms();for(let on=0;on<fe;on++)ws.setValue(T,"_gl_DrawID",on),ue.render(Vt[on]/bn,ii[on])}else if(V.isInstancedMesh)ue.renderInstances(oe,Ee,V.count);else if(et.isInstancedBufferGeometry){const Vt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ii=Math.min(et.instanceCount,Vt);ue.renderInstances(oe,Ee,ii)}else ue.render(oe,Ee)};function Zt(E,H,et){E.transparent===!0&&E.side===gi&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,po(E,H,et),E.side=$i,E.needsUpdate=!0,po(E,H,et),E.side=gi):po(E,H,et)}this.compile=function(E,H,et=null){et===null&&(et=E),h=Lt.get(et),h.init(H),v.push(h),et.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),E!==et&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const nt=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const wt=V.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){const Bt=wt[Dt];Zt(Bt,et,V),nt.add(Bt)}else Zt(wt,et,V),nt.add(wt)}),v.pop(),h=null,nt},this.compileAsync=function(E,H,et=null){const nt=this.compile(E,H,et);return new Promise(V=>{function wt(){if(nt.forEach(function(Dt){it.get(Dt).currentProgram.isReady()&&nt.delete(Dt)}),nt.size===0){V(E);return}setTimeout(wt,10)}Q.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let ye=null;function ee(E){ye&&ye(E)}function ze(){Sn.stop()}function Ai(){Sn.start()}const Sn=new Vp;Sn.setAnimationLoop(ee),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(E){ye=E,ot.setAnimationLoop(E),E===null?Sn.stop():Sn.start()},ot.addEventListener("sessionstart",ze),ot.addEventListener("sessionend",Ai),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(H),H=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,H,F),h=Lt.get(E,v.length),h.init(H),v.push(h),It.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ct=at.init(this.clippingPlanes,yt),m=mt.get(E,x.length),m.init(),x.push(m),ot.enabled===!0&&ot.isPresenting===!0){const wt=y.xr.getDepthSensingMesh();wt!==null&&ji(wt,H,-1/0,y.sortObjects)}ji(E,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Et,j),A=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,A&&Nt.addToRenderList(m,E),this.info.render.frame++,ct===!0&&at.beginShadows();const et=h.state.shadowsArray;Mt.render(et,E,H),ct===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,V=m.transmissive;if(h.setupLights(),H.isArrayCamera){const wt=H.cameras;if(V.length>0)for(let Dt=0,Bt=wt.length;Dt<Bt;Dt++){const kt=wt[Dt];ho(nt,V,E,kt)}A&&Nt.render(E);for(let Dt=0,Bt=wt.length;Dt<Bt;Dt++){const kt=wt[Dt];fo(m,E,kt,kt.viewport)}}else V.length>0&&ho(nt,V,E,H),A&&Nt.render(E),fo(m,E,H);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(y,E,H),se.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(h=v[v.length-1],ct===!0&&at.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ji(E,H,et,nt){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)et=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){nt&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const Dt=D.update(E),Bt=E.material;Bt.visible&&m.push(E,Dt,Bt,et,Wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const Dt=D.update(E),Bt=E.material;if(nt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Wt.copy(Dt.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(Bt)){const kt=Dt.groups;for(let qt=0,Jt=kt.length;qt<Jt;qt++){const zt=kt[qt],oe=Bt[zt.materialIndex];oe&&oe.visible&&m.push(E,Dt,oe,et,Wt.z,zt)}}else Bt.visible&&m.push(E,Dt,Bt,et,Wt.z,null)}}const wt=E.children;for(let Dt=0,Bt=wt.length;Dt<Bt;Dt++)ji(wt[Dt],H,et,nt)}function fo(E,H,et,nt){const V=E.opaque,wt=E.transmissive,Dt=E.transparent;h.setupLightsView(et),ct===!0&&at.setGlobalState(y.clippingPlanes,et),nt&&lt.viewport(I.copy(nt)),V.length>0&&Es(V,H,et),wt.length>0&&Es(wt,H,et),Dt.length>0&&Es(Dt,H,et),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ho(E,H,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[nt.id]===void 0&&(h.state.transmissionRenderTarget[nt.id]=new ys(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?lo:wi,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const wt=h.state.transmissionRenderTarget[nt.id],Dt=nt.viewport||I;wt.setSize(Dt.z,Dt.w);const Bt=y.getRenderTarget();y.setRenderTarget(wt),y.getClearColor(rt),ht=y.getClearAlpha(),ht<1&&y.setClearColor(16777215,.5),y.clear(),A&&Nt.render(et);const kt=y.toneMapping;y.toneMapping=Hi;const qt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),h.setupLightsView(nt),ct===!0&&at.setGlobalState(y.clippingPlanes,nt),Es(E,et,nt),S.updateMultisampleRenderTarget(wt),S.updateRenderTargetMipmap(wt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let zt=0,oe=H.length;zt<oe;zt++){const Me=H[zt],Ee=Me.object,nn=Me.geometry,ue=Me.material,Vt=Me.group;if(ue.side===gi&&Ee.layers.test(nt.layers)){const ii=ue.side;ue.side=rn,ue.needsUpdate=!0,qu(Ee,et,nt,nn,ue,Vt),ue.side=ii,ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(S.updateMultisampleRenderTarget(wt),S.updateRenderTargetMipmap(wt))}y.setRenderTarget(Bt),y.setClearColor(rt,ht),qt!==void 0&&(nt.viewport=qt),y.toneMapping=kt}function Es(E,H,et){const nt=H.isScene===!0?H.overrideMaterial:null;for(let V=0,wt=E.length;V<wt;V++){const Dt=E[V],Bt=Dt.object,kt=Dt.geometry,qt=nt===null?Dt.material:nt,Jt=Dt.group;Bt.layers.test(et.layers)&&qu(Bt,H,et,kt,qt,Jt)}}function qu(E,H,et,nt,V,wt){E.onBeforeRender(y,H,et,nt,V,wt),E.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(y,H,et,nt,E,wt),V.transparent===!0&&V.side===gi&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,y.renderBufferDirect(et,H,nt,V,E,wt),V.side=$i,V.needsUpdate=!0,y.renderBufferDirect(et,H,nt,V,E,wt),V.side=gi):y.renderBufferDirect(et,H,nt,V,E,wt),E.onAfterRender(y,H,et,nt,V,wt)}function po(E,H,et){H.isScene!==!0&&(H=jt);const nt=it.get(E),V=h.state.lights,wt=h.state.shadowsArray,Dt=V.state.version,Bt=G.getParameters(E,V.state,wt,H,et),kt=G.getProgramCacheKey(Bt);let qt=nt.programs;nt.environment=E.isMeshStandardMaterial?H.environment:null,nt.fog=H.fog,nt.envMap=(E.isMeshStandardMaterial?U:M).get(E.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",$t),qt=new Map,nt.programs=qt);let Jt=qt.get(kt);if(Jt!==void 0){if(nt.currentProgram===Jt&&nt.lightsStateVersion===Dt)return Ku(E,Bt),Jt}else Bt.uniforms=G.getUniforms(E),E.onBeforeCompile(Bt,y),Jt=G.acquireProgram(Bt,kt),qt.set(kt,Jt),nt.uniforms=Bt.uniforms;const zt=nt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=at.uniform),Ku(E,Bt),nt.needsLights=Lm(E),nt.lightsStateVersion=Dt,nt.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),nt.currentProgram=Jt,nt.uniformsList=null,Jt}function Yu(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=ra.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Ku(E,H){const et=it.get(E);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function Rm(E,H,et,nt,V){H.isScene!==!0&&(H=jt),S.resetTextureUnits();const wt=H.fog,Dt=nt.isMeshStandardMaterial?H.environment:null,Bt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pr,kt=(nt.isMeshStandardMaterial?U:M).get(nt.envMap||Dt),qt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Jt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),zt=!!et.morphAttributes.position,oe=!!et.morphAttributes.normal,Me=!!et.morphAttributes.color;let Ee=Hi;nt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const nn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ue=nn!==void 0?nn.length:0,Vt=it.get(nt),ii=h.state.lights;if(ct===!0&&(yt===!0||E!==b)){const hn=E===b&&nt.id===w;at.setState(nt,E,hn)}let fe=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ii.state.version||Vt.outputColorSpace!==Bt||V.isBatchedMesh&&Vt.batching===!1||!V.isBatchedMesh&&Vt.batching===!0||V.isBatchedMesh&&Vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Vt.instancing===!1||!V.isInstancedMesh&&Vt.instancing===!0||V.isSkinnedMesh&&Vt.skinning===!1||!V.isSkinnedMesh&&Vt.skinning===!0||V.isInstancedMesh&&Vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Vt.instancingMorph===!1&&V.morphTexture!==null||Vt.envMap!==kt||nt.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==at.numPlanes||Vt.numIntersection!==at.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==Jt||Vt.morphTargets!==zt||Vt.morphNormals!==oe||Vt.morphColors!==Me||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Vt.__version=nt.version);let bn=Vt.currentProgram;fe===!0&&(bn=po(nt,H,V));let ws=!1,on=!1,vr=!1;const we=bn.getUniforms(),Vn=Vt.uniforms;if(lt.useProgram(bn.program)&&(ws=!0,on=!0,vr=!0),nt.id!==w&&(w=nt.id,on=!0),ws||b!==E){lt.buffers.depth.getReversed()?(gt.copy(E.projectionMatrix),jv(gt),Zv(gt),we.setValue(T,"projectionMatrix",gt)):we.setValue(T,"projectionMatrix",E.projectionMatrix),we.setValue(T,"viewMatrix",E.matrixWorldInverse);const Ci=we.map.cameraPosition;Ci!==void 0&&Ci.setValue(T,Ut.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&we.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&we.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,on=!0,vr=!0)}if(V.isSkinnedMesh){we.setOptional(T,V,"bindMatrix"),we.setOptional(T,V,"bindMatrixInverse");const hn=V.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),we.setValue(T,"boneTexture",hn.boneTexture,S))}V.isBatchedMesh&&(we.setOptional(T,V,"batchingTexture"),we.setValue(T,"batchingTexture",V._matricesTexture,S),we.setOptional(T,V,"batchingIdTexture"),we.setValue(T,"batchingIdTexture",V._indirectTexture,S),we.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&we.setValue(T,"batchingColorTexture",V._colorsTexture,S));const xr=et.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Ot.update(V,et,bn),(on||Vt.receiveShadow!==V.receiveShadow)&&(Vt.receiveShadow=V.receiveShadow,we.setValue(T,"receiveShadow",V.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Vn.envMap.value=kt,Vn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&H.environment!==null&&(Vn.envMapIntensity.value=H.environmentIntensity),on&&(we.setValue(T,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&Pm(Vn,vr),wt&&nt.fog===!0&&J.refreshFogUniforms(Vn,wt),J.refreshMaterialUniforms(Vn,nt,X,ft,h.state.transmissionRenderTarget[E.id]),ra.upload(T,Yu(Vt),Vn,S)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ra.upload(T,Yu(Vt),Vn,S),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&we.setValue(T,"center",V.center),we.setValue(T,"modelViewMatrix",V.modelViewMatrix),we.setValue(T,"normalMatrix",V.normalMatrix),we.setValue(T,"modelMatrix",V.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const hn=nt.uniformsGroups;for(let Ci=0,Ri=hn.length;Ci<Ri;Ci++){const ju=hn[Ci];z.update(ju,bn),z.bind(ju,bn)}}return bn}function Pm(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Lm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,H,et){it.get(E.texture).__webglTexture=H,it.get(E.depthTexture).__webglTexture=et;const nt=it.get(E);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const et=it.get(E);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,et=0){F=E,C=H,L=et;let nt=!0,V=null,wt=!1,Dt=!1;if(E){const kt=it.get(E);if(kt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(T.FRAMEBUFFER,null),nt=!1;else if(kt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(kt.__hasExternalTextures)S.rebindTextures(E,it.get(E.texture).__webglTexture,it.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(kt.__boundDepthTexture!==zt){if(zt!==null&&it.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Dt=!0);const Jt=it.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[H])?V=Jt[H][et]:V=Jt[H],wt=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=it.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?V=Jt[et]:V=Jt,I.copy(E.viewport),st.copy(E.scissor),K=E.scissorTest}else I.copy(O).multiplyScalar(X).floor(),st.copy(W).multiplyScalar(X).floor(),K=Tt;if(lt.bindFramebuffer(T.FRAMEBUFFER,V)&&nt&&lt.drawBuffers(E,V),lt.viewport(I),lt.scissor(st),lt.setScissorTest(K),wt){const kt=it.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,kt.__webglTexture,et)}else if(Dt){const kt=it.get(E.texture),qt=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,kt.__webglTexture,et||0,qt)}w=-1},this.readRenderTargetPixels=function(E,H,et,nt,V,wt,Dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){lt.bindFramebuffer(T.FRAMEBUFFER,Bt);try{const kt=E.texture,qt=kt.format,Jt=kt.type;if(!tt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-nt&&et>=0&&et<=E.height-V&&T.readPixels(H,et,nt,V,Xt.convert(qt),Xt.convert(Jt),wt)}finally{const kt=F!==null?it.get(F).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,H,et,nt,V,wt,Dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=it.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){const kt=E.texture,qt=kt.format,Jt=kt.type;if(!tt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-nt&&et>=0&&et<=E.height-V){lt.bindFramebuffer(T.FRAMEBUFFER,Bt);const zt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,zt),T.bufferData(T.PIXEL_PACK_BUFFER,wt.byteLength,T.STREAM_READ),T.readPixels(H,et,nt,V,Xt.convert(qt),Xt.convert(Jt),0);const oe=F!==null?it.get(F).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,oe);const Me=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Kv(T,Me,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,zt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,wt),T.deleteBuffer(zt),T.deleteSync(Me),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,et=0){E.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const nt=Math.pow(2,-et),V=Math.floor(E.image.width*nt),wt=Math.floor(E.image.height*nt),Dt=H!==null?H.x:0,Bt=H!==null?H.y:0;S.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,et,0,0,Dt,Bt,V,wt),lt.unbindTexture()},this.copyTextureToTexture=function(E,H,et=null,nt=null,V=0){E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,E=arguments[1],H=arguments[2],V=arguments[3]||0,et=null);let wt,Dt,Bt,kt,qt,Jt,zt,oe,Me;const Ee=E.isCompressedTexture?E.mipmaps[V]:E.image;et!==null?(wt=et.max.x-et.min.x,Dt=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,kt=et.min.x,qt=et.min.y,Jt=et.isBox3?et.min.z:0):(wt=Ee.width,Dt=Ee.height,Bt=Ee.depth||1,kt=0,qt=0,Jt=0),nt!==null?(zt=nt.x,oe=nt.y,Me=nt.z):(zt=0,oe=0,Me=0);const nn=Xt.convert(H.format),ue=Xt.convert(H.type);let Vt;H.isData3DTexture?(S.setTexture3D(H,0),Vt=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(S.setTexture2DArray(H,0),Vt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(H,0),Vt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const ii=T.getParameter(T.UNPACK_ROW_LENGTH),fe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),bn=T.getParameter(T.UNPACK_SKIP_PIXELS),ws=T.getParameter(T.UNPACK_SKIP_ROWS),on=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ee.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ee.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,kt),T.pixelStorei(T.UNPACK_SKIP_ROWS,qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Jt);const vr=E.isDataArrayTexture||E.isData3DTexture,we=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Vn=it.get(E),xr=it.get(H),hn=it.get(Vn.__renderTarget),Ci=it.get(xr.__renderTarget);lt.bindFramebuffer(T.READ_FRAMEBUFFER,hn.__webglFramebuffer),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<Bt;Ri++)vr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,it.get(E).__webglTexture,V,Jt+Ri),E.isDepthTexture?(we&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,it.get(H).__webglTexture,V,Me+Ri),T.blitFramebuffer(kt,qt,wt,Dt,zt,oe,wt,Dt,T.DEPTH_BUFFER_BIT,T.NEAREST)):we?T.copyTexSubImage3D(Vt,V,zt,oe,Me+Ri,kt,qt,wt,Dt):T.copyTexSubImage2D(Vt,V,zt,oe,Me+Ri,kt,qt,wt,Dt);lt.bindFramebuffer(T.READ_FRAMEBUFFER,null),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else we?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Vt,V,zt,oe,Me,wt,Dt,Bt,nn,ue,Ee.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Vt,V,zt,oe,Me,wt,Dt,Bt,nn,Ee.data):T.texSubImage3D(Vt,V,zt,oe,Me,wt,Dt,Bt,nn,ue,Ee):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,zt,oe,wt,Dt,nn,ue,Ee.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,zt,oe,Ee.width,Ee.height,nn,Ee.data):T.texSubImage2D(T.TEXTURE_2D,V,zt,oe,wt,Dt,nn,ue,Ee);T.pixelStorei(T.UNPACK_ROW_LENGTH,ii),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,fe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ws),T.pixelStorei(T.UNPACK_SKIP_IMAGES,on),V===0&&H.generateMipmaps&&T.generateMipmap(Vt),lt.unbindTexture()},this.copyTextureToTexture3D=function(E,H,et=null,nt=null,V=0){return E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,E=arguments[2],H=arguments[3],V=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,et,nt,V)},this.initRenderTarget=function(E){it.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),lt.unbindTexture()},this.resetState=function(){C=0,L=0,F=null,lt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class ab extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new k;class Ma{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ma(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kp extends bs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Tr=new k,Vs=new k,Gs=new k,Ws=new Ft,Ar=new Ft,jp=new be,Vo=new k,Cr=new k,Go=new k,Ah=new Ft,Nl=new Ft,Ch=new Ft;class cb extends Be{constructor(t=new Kp){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new zn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lb(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Ma(i,3,0,!1)),Hs.setAttribute("uv",new Ma(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),jp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Wo(Vo.set(-.5,-.5,0),Gs,o,Vs,s,r),Wo(Cr.set(.5,-.5,0),Gs,o,Vs,s,r),Wo(Go.set(.5,.5,0),Gs,o,Vs,s,r),Ah.set(0,0),Nl.set(1,0),Ch.set(1,1);let a=t.ray.intersectTriangle(Vo,Cr,Go,!1,Tr);if(a===null&&(Wo(Cr.set(-.5,.5,0),Gs,o,Vs,s,r),Nl.set(0,1),a=t.ray.intersectTriangle(Vo,Go,Cr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:vn.getInterpolation(Tr,Vo,Cr,Go,Ah,Nl,Ch,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wo(n,t,e,i,s,r){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ar.x=r*Ws.x-s*Ws.y,Ar.y=s*Ws.x+r*Ws.y):Ar.copy(Ws),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(jp)}class Zp extends bs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rh=new be,$c=new Cu,Xo=new Ha,$o=new k;class ub extends Be{constructor(t=new zn,e=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;Rh.copy(s).invert(),$c.copy(t.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);$o.fromBufferAttribute(f,m),Ph($o,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)$o.fromBufferAttribute(f,g),Ph($o,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ph(n,t,e,i,s,r,o){const a=$c.distanceSqToPoint(n);if(a<e){const l=new k;$c.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fb extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new k,s=[],r=[],o=[],a=new k,l=new be;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos($e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Du extends ni{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hb extends Du{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const qo=new k,Fl=new Uu,Ol=new Uu,Bl=new Uu;class db extends ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new k){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(qo.subVectors(s[0],s[1]).add(s[0]),c=qo);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fl.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,_,m),Ol.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,_,m),Bl.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Ol.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Bl.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Fl.calc(l),Ol.calc(l),Bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function pb(n,t){const e=1-n;return e*e*t}function mb(n,t){return 2*(1-n)*n*t}function gb(n,t){return n*n*t}function Vr(n,t,e,i){return pb(n,t)+mb(n,e)+gb(n,i)}function _b(n,t){const e=1-n;return e*e*e*t}function vb(n,t){const e=1-n;return 3*e*e*n*t}function xb(n,t){return 3*(1-n)*n*n*t}function yb(n,t){return n*n*n*t}function Gr(n,t,e,i,s){return _b(n,t)+vb(n,e)+xb(n,i)+yb(n,s)}class Jp extends ni{constructor(t=new Ft,e=new Ft,i=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ft){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mb extends ni{constructor(t=new k,e=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new k){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y),Gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qp extends ni{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sb extends ni{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends ni{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bb extends ni{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Lh(a,l.x,c.x,u.x,f.x),Lh(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:hb,CatmullRomCurve3:db,CubicBezierCurve:Jp,CubicBezierCurve3:Mb,EllipseCurve:Du,LineCurve:Qp,LineCurve3:Sb,QuadraticBezierCurve:tm,QuadraticBezierCurve3:bb,SplineCurve:em});class Eb extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}}class Uh extends Eb{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qp(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new tm(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Jp(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new em(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Du(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nm extends Uh{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Uh().fromJSON(s))}return this}}const wb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=im(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(i&&(r=Pb(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)f=n[g],d=n[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Jr(r,o,e,a,l,p,0),o}};function im(n,t,e,i,s){let r,o;if(s===Hb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Ih(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Ih(r,n[r],n[r+1],o);return o&&Wa(o,o.next)&&(to(o),o=o.next),o}function Ms(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Wa(e,e.next)||Te(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Jr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Nb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ab(n,i,s,r):Tb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),to(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Cb(Ms(n),t,e),Jr(n,t,e,i,s,r,2)):o===2&&Rb(n,t,e,i,s,r):Jr(Ms(n),t,e,i,s,r,1);break}}}function Tb(n){const t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&js(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ab(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Te(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=qc(p,g,t,e,i),x=qc(_,m,t,e,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=h&&y&&y.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,u,l,f,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,u,l,f,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=h;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,u,l,f,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,u,l,f,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cb(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Wa(s,r)&&sm(s,i,i.next,r)&&Qr(s,r)&&Qr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),to(i),to(i.next),i=n=r),i=i.next}while(i!==n);return Ms(i)}function Rb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bb(o,a)){let l=rm(o,a);o=Ms(o,o.next),l=Ms(l,l.next),Jr(o,t,e,i,s,r,0),Jr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Pb(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=im(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ob(c));for(s.sort(Lb),r=0;r<s.length;r++)e=Db(s[r],e);return e}function Lb(n,t){return n.x-t.x}function Db(n,t){const e=Ub(n,t);if(!e)return t;const i=rm(e,n);return Ms(i,i.next),Ms(e,e.next)}function Ub(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&js(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Qr(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Ib(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function Ib(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function Nb(n,t,e,i){let s=n;do s.z===0&&(s.z=qc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Fb(s)}function Fb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function qc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ob(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function js(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Bb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!kb(n,t)&&(Qr(n,t)&&Qr(t,n)&&zb(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||Wa(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Wa(n,t){return n.x===t.x&&n.y===t.y}function sm(n,t,e,i){const s=Ko(Te(n,t,e)),r=Ko(Te(n,t,i)),o=Ko(Te(e,i,n)),a=Ko(Te(e,i,t));return!!(s!==r&&o!==a||s===0&&Yo(n,e,t)||r===0&&Yo(n,i,t)||o===0&&Yo(e,n,i)||a===0&&Yo(e,t,i))}function Yo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ko(n){return n>0?1:n<0?-1:0}function kb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&sm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qr(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function zb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function rm(n,t){const e=new Yc(n.i,n.x,n.y),i=new Yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ih(n,t,e,i){const s=new Yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function to(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Wr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Wr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Nh(t),Fh(i,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Fh(i,e[l]);const a=wb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Fh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Iu extends zn{constructor(t=new nm([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Jn(s,3)),this.setAttribute("normal",new Jn(r,3)),this.setAttribute("uv",new Jn(o,2));function c(u){const f=s.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Wr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const x=g[m];Wr.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Wr.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const x=g[m];p=p.concat(x)}for(let m=0,h=p.length;m<h;m++){const x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,h=_.length;m<h;m++){const x=_[m],v=x[0]+f,y=x[1]+f,P=x[2]+f;i.push(v,y,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Vb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Iu(i,t.curveSegments)}}function Vb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Oh extends bs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pp,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class om extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const kl=new be,Bh=new k,kh=new k;class Gb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kh),e.updateMatrixWorld(),kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wb extends Gb{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends om{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Wb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xb extends om{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hh=new be;class $b{constructor(t,e,i=0,s=1/0){this.ray=new Cu(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(t,e=!0,i=[]){return Kc(t,this,i,e),i.sort(Vh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kc(t[s],this,i,e);return i.sort(Vh),i}}function Vh(n,t){return n.distance-t.distance}function Kc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);const Rr=new k;function pn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Rr.copy(t),Rr[i]=0,Rr.normalize();const c=.5*o/(o+a),u=1-Rr.angleTo(n)/l;return Math.sign(Rr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class qb extends gr{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new k,l=new k,c=new k(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new k,_=.5/s;for(let m=0,h=0;m<u.length;m+=3,h+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[h+0]=pn(g,l,"z","y",r,i),d[h+1]=1-pn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[h+0]=1-pn(g,l,"z","y",r,i),d[h+1]=1-pn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[h+0]=1-pn(g,l,"x","z",r,t),d[h+1]=pn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[h+0]=1-pn(g,l,"x","z",r,t),d[h+1]=1-pn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[h+0]=1-pn(g,l,"x","y",r,t),d[h+1]=1-pn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[h+0]=pn(g,l,"x","y",r,t),d[h+1]=1-pn(g,l,"y","x",r,e);break}}}const Qn=["U","R","F","D","L","B"],Gi=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Yb=[3,4,5,0,1,2],eo=["yellow","orange","green","white","red","blue"],no=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],oa=(n,t)=>`${n[0]},${n[1]},${n[2]}|${t[0]},${t[1]},${t[2]}`,Sa=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],am=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Kb=(n,t,e)=>Sa(n,am(t,e));function Gh(n,t){const e=Sa(t,n),i=am(t,n);return[-i[0]+t[0]*e,-i[1]+t[1]*e,-i[2]+t[2]*e]}function lm(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function rs(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(t=>{const e=/^([URFDLB])(2|2'|'|3)?$/.exec(t);if(!e)throw new Error(`Bad move "${t}"`);return e[2]?e[2]==="3"||e[2]==="'"?`${e[1]}'`:`${e[1]}2`:e[1]})}function ba(n){return[...n].reverse().map(lm)}const zl=new Map;function ke(n){return zl.has(n)||zl.set(n,jb(n)),zl.get(n)}function jb(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const t=n-1,e=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of e)for(const l of e)for(const c of e){const u=[a,l,c],f=[];for(let _=0;_<3;_++){if(Math.abs(u[_])!==t)continue;const m=[0,0,0];m[_]=Math.sign(u[_]);const h=Gi.findIndex(v=>v[0]===m[0]&&v[1]===m[1]&&v[2]===m[2]),x=i.length;i.push({pos:u,normal:m,face:h,cubie:r.length}),s.set(oa(u,m),x),f.push(x)}if(!f.length)continue;const d=_=>f.find(m=>i[m].normal[_]!==0);let p=f;if(f.length===3){const[_,m,h]=[d(1),d(0),d(2)];p=Kb(i[_].normal,i[m].normal,i[h].normal)>0?[_,m,h]:[_,h,m]}else if(f.length===2){const _=d(1)??d(2);p=[_,f.find(m=>m!==_)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:u,slots:p,kind:g})}const o={};return Qn.forEach((a,l)=>{const c=Gi[l],u=i.map((p,g)=>Sa(p.pos,c)!==t?g:s.get(oa(Gh(p.pos,c),Gh(p.normal,c)))),f=u.map(p=>u[p]),d=u.map(p=>f[p]);o[a]=Int16Array.from(u),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(d)}),{n,m:t,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(oa(a,l)),faceGrid:Zb(n,t,s),layerOf:a=>r.map((l,c)=>Sa(l.pos,Gi[a])===t?c:-1).filter(l=>l>=0)}}function Zb(n,t,e){const i={},s=(o,a,l,c)=>e.get(oa([o,a,l],Gi[c])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(c,u)=>o(l,u)));return i.U=r((o,a)=>s(-t+2*a,t,-t+2*o,0)),i.D=r((o,a)=>s(-t+2*a,-t,t-2*o,3)),i.F=r((o,a)=>s(-t+2*a,t-2*o,t,2)),i.B=r((o,a)=>s(t-2*a,t-2*o,-t,5)),i.R=r((o,a)=>s(t,t-2*o,t-2*a,1)),i.L=r((o,a)=>s(-t,t-2*o,-t+2*a,4)),i}function Jb(n){return Qn.flatMap(e=>[e,`${e}2`,`${e}'`])}function Xa(n){return Uint8Array.from(ke(n).stickers,t=>t.face)}function uo(n,t){const e=new Uint8Array(n.length);for(let i=0;i<n.length;i++)e[t[i]]=n[i];return e}function Qb(n,t,e){return uo(n,ke(t).moves[e])}function tE(n,t,e){const i=ke(t);let s=n;for(const r of e)s=uo(s,i.moves[r]);return s}function eE(n,t){const{faceGrid:e}=ke(t);return Qn.every(i=>{const s=e[i].flat();return s.every(r=>n[r]===n[s[0]])})}function nE(n,t=n===2?11:22,e=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<t;){const l=i[Math.floor(e()*i.length)];l!==o&&(n===3&&Yb[l]===o&&l===a||(s.push(Qn[l]+r[Math.floor(e()*3)]),a=o,o=l))}return s}function Wh(n){const t=new Array(n.length).fill(!1);let e=0;for(let i=0;i<n.length;i++){if(t[i])continue;let s=0;for(let r=i;!t[r];r=n[r])t[r]=!0,s++;e+=s-1}return e%2}function Xh(n,t){const e=ke(t),i=[],s=new Map;e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(f=>e.stickers[f].face);s.set([...u].sort().join(),c)});const r=[],o=[],a=new Set;return e.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(_=>n[_]),f=[...u].sort().join(),d=s.get(f),p=u.map(_=>eo[_]).join("/");if(d===void 0||new Set(u).size!==u.length){i.push(`Impossible ${l.kind} with colours ${p}`);return}if(a.has(d)){i.push(`The ${e.cubies[d].slots.map(_=>eo[e.stickers[_].face]).join("/")} ${l.kind} appears twice`);return}a.add(d);const g=e.cubies[d].slots.map(_=>e.stickers[_].face);if(l.kind==="corner"){let _=-1;for(let m=0;m<3;m++)u.every((h,x)=>u[(m+x)%3]===g[x])&&(_=m);if(_<0){i.push(`The corner with colours ${p} is a mirror image (impossible)`);return}r.push({pos:c,home:d,twist:_})}else o.push({pos:c,home:d,flip:u[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function cm(n){const t=ke(2),e=new Array(6).fill(0);for(const f of n)e[f]++;if(e.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of t.cubies){const d=f.slots.map(p=>n[p]);if(new Set(d).size!==3)return{error:"A corner shows the same colour twice"};for(const p of d)for(const g of d)p!==g&&i[p].add(g)}const s=[];for(let f=0;f<6;f++){const d=[0,1,2,3,4,5].filter(p=>p!==f&&!i[f].has(p));if(d.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=d[0]}const r=t.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(d=>t.stickers[d].face===f)],a=new Array(6),[l,c,u]=[o(3),o(4),o(5)];return a[l]=3,a[c]=4,a[u]=5,a[s[l]]=0,a[s[c]]=1,a[s[u]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function Nu(n,t){const e=ke(t);if(n.length!==e.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const i=[];if(t===2){const c=cm(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:u,errors:f}=Xh(c.state,2);return i.push(...f),!f.length&&u.reduce((d,p)=>d+p.twist,0)%3!==0&&i.push("One corner is twisted – this position cannot be solved"),{ok:!i.length,errors:i,canonical:c}}const s=new Array(6).fill(0);for(const c of n)s[c]++;if(s.forEach((c,u)=>{c!==9&&i.push(`${eo[u]} appears ${c} times (needs 9)`)}),e.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==e.stickers[c.slots[0]].face&&i.push("Centre stickers are fixed and must keep their colour")}),i.length)return{ok:!1,errors:[...new Set(i)]};const{corners:r,edges:o,errors:a}=Xh(n,3);if(a.length)return{ok:!1,errors:a};r.reduce((c,u)=>c+u.twist,0)%3!==0&&i.push("One corner is twisted in place"),o.reduce((c,u)=>c+u.flip,0)%2!==0&&i.push("One edge is flipped in place");const l=(c,u)=>{const f=e.cubies.map((p,g)=>p.kind===u?g:-1).filter(p=>p>=0),d=new Array(f.length);return c.forEach(p=>{d[f.indexOf(p.pos)]=f.indexOf(p.home)}),d};return Wh(l(r,"corner"))!==Wh(l(o,"edge"))&&i.push("Two pieces are swapped – this position cannot be solved"),{ok:!i.length,errors:i}}const Hn=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},iE=4,sE=14,rE=.55,oE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0},dramaSpeed:{type:Number,default:.32}},emits:["paint","layerturn","hover-info"],setup(n,{expose:t,emit:e}){const i=n,s=e,r=Yt(null);let o,a,l;const c=new k(0,0,0);let u,f=0,d,p=[],g=[],_,m=!1;const h=no.map(R=>new Oh({color:R,roughness:.35,metalness:0})),x=new Oh({color:1382172,roughness:.6});function v(R,D){const G=R/2,J=new nm;return J.moveTo(-G+D,-G),J.lineTo(G-D,-G),J.quadraticCurveTo(G,-G,G,-G+D),J.lineTo(G,G-D),J.quadraticCurveTo(G,G,G-D,G),J.lineTo(-G+D,G),J.quadraticCurveTo(-G,G,-G,G-D),J.lineTo(-G,-G+D),J.quadraticCurveTo(-G,-G,-G+D,-G),new Iu(J)}const y=v(.84,.12),P=new qb(.98,.98,.98,3,.1);function C(){u&&a.remove(u),_=ke(i.n),u=new ps,p=[],g=new Array(_.slotCount);const R=new k(0,0,1);_.cubies.forEach(D=>{const G=new ps;G.position.set(D.pos[0]/2,D.pos[1]/2,D.pos[2]/2),G.userData.home=G.position.clone(),G.add(new Pn(P,x)),D.slots.forEach(J=>{const mt=_.stickers[J],Lt=new k(...mt.normal),at=new Pn(y,h[mt.face]);at.position.copy(Lt).multiplyScalar(.492),at.quaternion.setFromUnitVectors(R,Lt),at.userData.slot=J,G.add(at),g[J]=at}),p.push(G),u.add(G)}),a.add(u),L(i.state)}function L(R){if(R.length===g.length)for(let D=0;D<g.length;D++)g[D].material=h[R[D]]}function F(){const R=i.n===2?4.6:6.2;l.up.set(0,1,0),l.position.set(R*.75,R*.6,R),l.lookAt(c),b.vx=0,b.vy=0}function w(){if(!r.value||!o)return;const{clientWidth:R,clientHeight:D}=r.value;!R||!D||(o.setSize(R,D,!1),l.aspect=R/D,l.updateProjectionMatrix())}const b={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},I=new Map;let st=0;const K=new Vi,rt=new k,ht=new k,q=new k;function ft(R,D){const G=o.domElement.clientHeight||1,J=2*Math.PI/G;l.updateMatrixWorld(),rt.setFromMatrixColumn(l.matrixWorld,0),ht.setFromMatrixColumn(l.matrixWorld,1),K.setFromAxisAngle(ht,-R*J),q.copy(l.position).sub(c).applyQuaternion(K),l.up.applyQuaternion(K),K.setFromAxisAngle(rt.applyQuaternion(K),-D*J),q.applyQuaternion(K),l.up.applyQuaternion(K).normalize(),l.position.copy(c).add(q),l.lookAt(c)}function X(R){q.copy(l.position).sub(c);const D=Math.min(sE,Math.max(iE,q.length()*R));l.position.copy(c).add(q.setLength(D))}function Et(R){var D,G;if(I.set(R.pointerId,{x:R.clientX,y:R.clientY}),(G=(D=o.domElement).setPointerCapture)==null||G.call(D,R.pointerId),I.size===1)Object.assign(b,{dragging:!0,lastX:R.clientX,lastY:R.clientY,lastT:performance.now(),vx:0,vy:0});else if(I.size===2){const[J,mt]=[...I.values()];st=Math.hypot(J.x-mt.x,J.y-mt.y),b.dragging=!1}}function j(R){if(!I.has(R.pointerId))return;if(I.set(R.pointerId,{x:R.clientX,y:R.clientY}),I.size===2){const[Lt,at]=[...I.values()],Mt=Math.hypot(Lt.x-at.x,Lt.y-at.y);st&&Mt&&X(st/Mt),st=Mt;return}if(!b.dragging)return;const D=R.clientX-b.lastX,G=R.clientY-b.lastY,J=performance.now(),mt=Math.max(1,J-b.lastT);ft(D,G),b.vx=.6*b.vx+.4*(D/mt*16),b.vy=.6*b.vy+.4*(G/mt*16),Object.assign(b,{lastX:R.clientX,lastY:R.clientY,lastT:J})}function O(R){var D,G;I.delete(R.pointerId),(G=(D=o.domElement).releasePointerCapture)==null||G.call(D,R.pointerId),I.size===0&&(b.dragging=!1,performance.now()-b.lastT>80&&(b.vx=0,b.vy=0))}function W(R){R.preventDefault(),X(Math.exp(R.deltaY*6e-4))}const Tt=i.dramaSpeed,Y={level:0,phase:0,last:0};function ct(R){const D=Math.min(.1,(R-(Y.last||R))/1e3);Y.last=R;const G=i.drama&&!b.dragging&&I.size===0?1:0,J=D*.7;if(Y.level+=Math.max(-J,Math.min(J,G-Y.level)),Y.level<.001)return;Y.phase+=D*rE;const mt=Y.level*Y.level*(3-2*Y.level),Lt=o.domElement.clientHeight||1,at=Tt*Lt/(2*Math.PI)*D*mt;ft(Math.cos(Y.phase)*at,Math.sin(Y.phase)*at)}function yt(){f=requestAnimationFrame(yt),!b.dragging&&(Math.abs(b.vx)>.02||Math.abs(b.vy)>.02)&&(ft(b.vx,b.vy),b.vx*=.92,b.vy*=.92),ct(performance.now()),jt(performance.now()),o.render(a,l)}const gt=R=>R<.5?4*R*R*R:1-(-2*R+2)**3/2;function It(R,D,G=1){if(m||G>=10)return L(D),Promise.resolve();m=!0;const J=R.split(" ").map(at=>{const Mt=Qn.indexOf(at[0]),Nt=at.endsWith("2")?2:1,Ot=new ps,xt=_.layerOf(Mt).map(Ht=>p[Ht]);return u.add(Ot),xt.forEach(Ht=>Ot.add(Ht)),{pivot:Ot,layer:xt,quarters:Nt,axis:new k(...Gi[Mt]),angle:(at.endsWith("'")?1:-1)*Nt*(Math.PI/2)}}),mt=(J.some(at=>at.quarters===2)?420:280)/G,Lt=performance.now();return new Promise(at=>{const Mt=Nt=>{const Ot=Math.min(1,(Nt-Lt)/mt);if(J.forEach(xt=>xt.pivot.setRotationFromAxisAngle(xt.axis,xt.angle*gt(Ot))),Ot<1){requestAnimationFrame(Mt);return}J.forEach(xt=>{xt.layer.forEach(Ht=>u.add(Ht)),u.remove(xt.pivot)}),L(D),m=!1,at()};requestAnimationFrame(Mt)})}let Ut=null;function Wt(){if(!Ut){const R=document.createElement("canvas");R.width=R.height=64;const D=R.getContext("2d"),G=D.createRadialGradient(32,32,0,32,32,32);G.addColorStop(0,"rgba(255,255,255,1)"),G.addColorStop(.25,"rgba(255,255,255,0.6)"),G.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=G,D.fillRect(0,0,64,64),Ut=new fb(R)}return Ut}function jt(R){if(!u||m)return;const D=i.rumble*.045;if(D>0){const G=R/1e3;u.position.set(Math.sin(G*61)*D,Math.sin(G*73+1)*D,Math.sin(G*53+2)*D),u.rotation.z=Math.sin(G*47)*D*.25}else(u.position.lengthSq()>0||u.rotation.z!==0)&&(u.position.set(0,0,0),u.rotation.z=0)}const A=R=>1+2.70158*(R-1)**3+1.70158*(R-1)**2;function N(){if(m||!u)return Promise.resolve();m=!0,u.position.set(0,0,0),u.rotation.z=0;const R=(bt,At)=>bt+Math.random()*(At-bt),D=p.map(bt=>{const At=bt.userData.home.clone();return At.lengthSq()<.01&&At.set(R(-1,1),R(-1,1),R(-1,1)),At.normalize().add(new k(R(-.4,.4),R(-.4,.4),R(-.4,.4))).normalize(),{g:bt,v:At.multiplyScalar(R(3.2,7.5)),spin:new k(R(-9,9),R(-9,9),R(-9,9)),vanish:R(1.7,2.2)}}),G=520,J=new Float32Array(G*3),mt=new Float32Array(G*3),Lt=Array.from({length:G},()=>{const bt=new k(R(-1,1),R(-1,1),R(-1,1)).normalize();return{p:new k,v:bt.multiplyScalar(R(2.5,11)),delay:R(0,.35),life:R(.6,1.7)}}),at=new zn;at.setAttribute("position",new fn(J,3)),at.setAttribute("color",new fn(mt,3));const Mt=new Zp({size:.26,map:Wt(),vertexColors:!0,transparent:!0,blending:va,depthWrite:!1}),Nt=new ub(at,Mt);Nt.frustumCulled=!1,a.add(Nt);const Ot=new Kp({map:Wt(),color:16771504,blending:va,transparent:!0,depthWrite:!1}),xt=new cb(Ot);a.add(xt);const Ht=3,Xt=D.map(({g:bt})=>bt.userData.home.length()*.14+R(0,.06)),se=D.map(()=>new Vi().setFromEuler(new kn(R(-2,2),R(-2,2),R(-2,2))));let z=!1;const Ct=Ht+1.4,ot=performance.now();let dt=ot;return new Promise(bt=>{const At=$t=>{const re=($t-ot)/1e3,xe=Math.min(.05,($t-dt)/1e3);if(dt=$t,re<Ht){D.forEach(ee=>{if(re>ee.vanish){ee.g.visible=!1;return}ee.v.multiplyScalar(1-.3*xe),ee.v.y-=2.2*xe,ee.g.position.addScaledVector(ee.v,xe),ee.g.rotation.x+=ee.spin.x*xe,ee.g.rotation.y+=ee.spin.y*xe,ee.g.rotation.z+=ee.spin.z*xe;const ze=Math.max(0,Math.min(1,(ee.vanish-re)/.4));ee.g.scale.setScalar(ze)}),Lt.forEach((ee,ze)=>{const Ai=re-ee.delay;if(Ai<0||Ai>ee.life){mt[ze*3]=mt[ze*3+1]=mt[ze*3+2]=0;return}ee.v.multiplyScalar(1-.9*xe),ee.v.y-=3.5*xe,ee.p.addScaledVector(ee.v,xe);const Sn=Ai/ee.life,ji=(1-Sn)**1.4,fo=1*ji,ho=Math.max(0,.95-.85*Sn)*ji,Es=Math.max(0,.55-.55*Sn*1.6)*ji;J[ze*3]=ee.p.x,J[ze*3+1]=ee.p.y,J[ze*3+2]=ee.p.z,mt[ze*3]=fo,mt[ze*3+1]=ho,mt[ze*3+2]=Es}),at.attributes.position.needsUpdate=!0,at.attributes.color.needsUpdate=!0;const Zt=Math.min(1,re/.45);xt.scale.setScalar(2+14*Zt),Ot.opacity=(1-Zt)**1.5;const ye=re<.4?.14*(1-re/.4):0;u.position.set(R(-ye,ye),R(-ye,ye),R(-ye,ye))}else{z||(z=!0,a.remove(Nt),a.remove(xt),at.dispose(),Mt.dispose(),Ot.dispose(),u.position.set(0,0,0),D.forEach(({g:ye})=>{ye.position.copy(ye.userData.home),ye.scale.setScalar(1e-4),ye.visible=!0}));const Zt=re-Ht;D.forEach(({g:ye},ee)=>{const ze=Math.max(0,Math.min(1,(Zt-Xt[ee])/.55)),Ai=A(ze);ye.scale.setScalar(Math.max(1e-4,Ai)),ye.quaternion.copy(se[ee]).slerp(T,Math.min(1,ze*1.15))})}if(re<Ct){requestAnimationFrame(At);return}D.forEach(({g:Zt})=>{Zt.position.copy(Zt.userData.home),Zt.rotation.set(0,0,0),Zt.quaternion.identity(),Zt.scale.setScalar(1),Zt.visible=!0}),u.position.set(0,0,0),u.rotation.z=0,L(i.state),m=!1,bt()};requestAnimationFrame(At)})}const T=new Vi,pt=new $b;function Q(R,D){const G=o.domElement.getBoundingClientRect(),J=new Ft((R-G.left)/G.width*2-1,-((D-G.top)/G.height)*2+1);return pt.setFromCamera(J,l),pt.intersectObjects(g,!1)[0]}let tt=null;function lt(R){tt={x:R.clientX,y:R.clientY}}function _t(R){if(!i.paintable||!tt)return;const D=Math.hypot(R.clientX-tt.x,R.clientY-tt.y);if(tt=null,D>5)return;const G=Q(R.clientX,R.clientY);G&&s("paint",G.object.userData.slot)}const it=[["L","R"],["D","U"],["B","F"]];let S=0;function M(R,D,G){const J=_.stickers[R],mt=J.normal.findIndex(bt=>bt!==0),Lt=[0,1,2].filter(bt=>bt!==mt);l.updateMatrixWorld();const at=new k().setFromMatrixColumn(l.matrixWorld,0),Mt=new k().setFromMatrixColumn(l.matrixWorld,1),Nt=Math.abs(at.getComponent(Lt[0]))>=Math.abs(at.getComponent(Lt[1]))?Lt[0]:Lt[1],Ot=G?Lt.find(bt=>bt!==Nt):Nt,xt=new k;xt.setComponent(Ot,1);const Ht=new k(...J.pos).multiplyScalar(.5).add(new k(...J.normal).multiplyScalar(.5)),Xt=xt.clone().cross(Ht),z=((G?Xt.dot(at):-Xt.dot(Mt))>=0?1:-1)*D,Ct=_.cubies[J.cubie].pos[Ot],[ot,dt]=it[Ot];return Ct===_.m?dt+(z>0?"'":""):Ct===-_.m?ot+(z>0?"":"'"):`${dt}${z>0?"":"'"} ${ot}${z>0?"'":""}`}function U(R,D){const G=o.domElement.getBoundingClientRect(),J=Q(R,D);if(J){const mt=new k;J.object.getWorldPosition(mt);const Lt=mt.project(l),at=G.left+(Lt.x*.5+.5)*G.width,Mt=G.top+(-Lt.y*.5+.5)*G.height;s("hover-info",{slot:J.object.userData.slot,x:at,y:Mt})}else s("hover-info",{slot:null,x:R,y:D})}function $(R){if(i.paintable)return;const D=Q(R.clientX,R.clientY);if(!D||(R.preventDefault(),R.stopPropagation(),i.locked||m)||(S+=R.deltaY||R.deltaX,Math.abs(S)<40))return;const G=Math.sign(S);S=0,s("layerturn",M(D.object.userData.slot,G,R.altKey))}return oo(()=>{o=new ob({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new ab,o.domElement.addEventListener("pointermove",G=>{try{U(G.clientX,G.clientY)}catch{}}),o.domElement.addEventListener("pointerleave",()=>s("hover-info",{slot:null,x:0,y:0})),l=new _n(36,1,.1,100),a.add(new Xb(16777215,1.1));const R=new zh(16777215,2);R.position.set(5,8,6),a.add(R);const D=new zh(16777215,.8);D.position.set(-6,-3,-5),a.add(D),o.domElement.addEventListener("pointerdown",Et),o.domElement.addEventListener("pointermove",j),o.domElement.addEventListener("pointerup",O),o.domElement.addEventListener("pointercancel",O),o.domElement.addEventListener("wheel",W,{passive:!1}),o.domElement.addEventListener("pointerdown",lt),o.domElement.addEventListener("pointerup",_t),r.value.addEventListener("wheel",$,{capture:!0,passive:!1}),C(),F(),w(),d=new ResizeObserver(w),d.observe(r.value),yt()}),rr(()=>{cancelAnimationFrame(f),d==null||d.disconnect(),o==null||o.dispose()}),Ue(()=>i.n,()=>{C(),F()}),Ue(()=>i.state,R=>{m||L(R)}),t({animate:It,resetView:F,explode:N}),(R,D)=>(vt(),St("div",{ref_key:"host",ref:r,class:Re(["cube-host",{painting:n.paintable}])},null,2))}},aE=Hn(oE,[["__scopeId","data-v-c62e6690"]]),gn={yellowCross:rs("F R U R' U' F'"),sune:rs("R U R' U R U2 R'"),antiSune:rs("R U2 R' U' R U' R'"),cornerCycle:rs("R' F R' B2 R F' R' B2 R2"),edgeCycle:rs("R U' R U R U R U' R' U' R2"),tPerm:rs("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:rs("F R U' R' U' R U R' F' R U R' U' R' F R F'")},Xs=gn,lE={U:0,R:1,F:2,D:3,L:4,B:5};function um(n,t){return t.map(e=>{const i=n.moves[e],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:e,perm:i,inv:s,face:lE[e[0]]}})}const cE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],uE=["U","U2","U'","R","R2","R'","F","F2","F'"];function fE(n,t,e,i){const s=g=>g.join(","),r=s(t),o=s(e);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let c=[t],u=[e],f=0,d=0;const p=g=>{const _=[];for(let h=g;a.get(h).prev!==null;h=a.get(h).prev)_.push(a.get(h).move);_.reverse();const m=[];for(let h=g;l.get(h).next!==null;h=l.get(h).next)m.push(l.get(h).move);return[..._,...m].map(h=>n[h].name)};for(;f+d<i&&(c.length||u.length);)if(c.length&&(c.length<=u.length||!u.length)){const _=[];for(const m of c){const h=s(m),x=a.get(h);for(let v=0;v<n.length;v++){const y=n[v];if(y.face===x.face)continue;const P=m.map(L=>y.perm[L]),C=s(P);if(!a.has(C)){if(a.set(C,{prev:h,move:v,face:y.face}),l.has(C))return p(C);_.push(P)}}}c=_,f++}else{const _=[];for(const m of u){const h=s(m),x=l.get(h);for(let v=0;v<n.length;v++){const y=n[v];if(y.face===x.face)continue;const P=m.map(L=>y.inv[L]),C=s(P);if(!l.has(C)){if(l.set(C,{next:h,move:v,face:y.face}),a.has(C))return p(C);_.push(P)}}}u=_,d++}return null}function hE(n,t,e){const i=n.cubies[e].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>t[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const Fu=(n,t,e)=>n.cubies[e].slots.every(i=>t[i]===n.stickers[i].face);function jc(n,t,e,i,s,r,o,a){const l=[];let c=t,u=[...e],f=[...i];for(;f.length;){let d=null;for(const p of f){if(p.cubies.every(x=>Fu(n,c,x))){d={target:p,moves:[]};break}const g=[...u,...p.cubies].flatMap(x=>n.cubies[x].slots),_=[...u.flatMap(x=>n.cubies[x].slots),...p.cubies.flatMap(x=>hE(n,c,x))],m=d?d.moves.length-1:a;if(m<1)continue;const h=fE(r,_,g,m);h&&(!d||h.length<d.moves.length)&&(d={target:p,moves:h})}if(!d)throw new Error("No solution found for a piece – is the cube state valid?");for(const p of d.moves)c=uo(c,n.moves[p]);l.push({label:o(d.target),moves:d.moves}),u=[...u,...d.target.cubies],f=f.filter(p=>p!==d.target)}return{state:c,steps:l}}function dE(n,t,e,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:t,moves:[]}]],a=new Set([r(t)]);if(i(t))return[];for(let l=0;l<=s;l++){const c=o[l];if(c)for(const u of c)for(const f of e){let d=u.state;for(const m of f.moves)d=uo(d,n.moves[m]);const p=r(d);if(a.has(p))continue;a.add(p);const g=l+f.moves.length,_={state:d,moves:[...u.moves,f.label]};if(i(d))return pE(_.moves,e);(o[g]||(o[g]=[])).push(_)}}return null}function pE(n,t){const e=new Map(t.map(i=>[i.label,i]));return n.map(i=>e.get(i))}const Zs=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],An=(n,t)=>({label:n,moves:t,isAlg:!0});function mE(n,t){const e=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}e.push({label:t(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&e.push({label:"Turn the top layer to line it up",moves:i}),e}const fm=eo,Zc=n=>n[0].toUpperCase()+n.slice(1);function Js(n,t,e,i,s){const r=dE(n,t,e,i);if(!r)throw new Error("Could not finish the last layer – is the cube state valid?");const o=mE(r,s);let a=t;for(const l of o)for(const c of l.moves)a=uo(a,n.moves[c]);return{state:a,steps:o}}const hm=n=>n.flatMap(t=>t.moves);function dm(n,t,e={}){const i=Nu(n,t);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return t===2?_E(n,i.canonical,e):gE(n,e)}catch(s){return{ok:!1,error:s.message}}}function aa(n,t,e){return n.cubies[t].slots.map(i=>e[n.stickers[i].face]).join("-")}function gE(n,t){const e=t.names||fm,i=ke(3),s=um(i,cE),r=(P,C,L)=>i.cubies.findIndex(F=>F.pos[0]===P&&F.pos[1]===C&&F.pos[2]===L),o=[];let a=n;const l=(P,C)=>o.push({id:P,steps:C,moves:hm(C)}),c=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(P=>({cubies:[r(...P)]}));let u=jc(i,a,[],c,e,s,P=>`${Zc(aa(i,P.cubies[0],e))} edge`,9);a=u.state,l("cross",u.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(P=>({cubies:P.map(C=>r(...C))})),d=c.flatMap(P=>P.cubies);u=jc(i,a,d,f,e,s,P=>`${Zc(aa(i,P.cubies[0],e))} corner + ${aa(i,P.cubies[1],e)} edge`,11),a=u.state,l("f2l",u.steps);const p=i.cubies.map((P,C)=>({c:P,i:C})).filter(({c:P})=>P.pos[1]===2),g=p.filter(({c:P})=>P.kind==="edge").map(({c:P})=>P.slots[0]),_=p.filter(({c:P})=>P.kind==="corner").map(({i:P})=>P),m=i.stickers.map((P,C)=>P.face===0?C:-1).filter(P=>P>=0),h=P=>g.every(C=>P[C]===0),x=P=>m.every(C=>P[C]===0),v=P=>_.every(C=>Fu(i,P,C)),y=P=>i.stickers.every((C,L)=>P[L]===C.face);return u=Js(i,a,[...Zs,An("yellow cross",gn.yellowCross)],h,()=>`Make the ${e[0]} cross`),a=u.state,l("ollCross",u.steps),u=Js(i,a,[...Zs,An("sune",gn.sune),An("antisune",gn.antiSune)],x,P=>P.label==="sune"?`Sune: twist corners (${e[0]} face)`:`Anti-Sune: twist corners (${e[0]} face)`),a=u.state,l("ollFace",u.steps),u=Js(i,a,[...Zs,An("corner cycle",gn.cornerCycle),An("corner cycle inverse",ba(gn.cornerCycle))],v,()=>"Cycle three corners into place"),a=u.state,l("pllCorners",u.steps),u=Js(i,a,[...Zs,An("edge cycle",gn.edgeCycle),An("edge cycle inverse",ba(gn.edgeCycle))],y,()=>"Cycle three edges into place"),a=u.state,l("pllEdges",u.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(P=>P.moves)}}function _E(n,t,e){const i=ke(2),s=um(i,uE),r=t.state,o=e.names||fm,a=[];t.map.forEach((h,x)=>{a[h]=o[x]});const l=(h,x,v)=>i.cubies.findIndex(y=>y.pos[0]===h&&y.pos[1]===x&&y.pos[2]===v),c=[];let u=r;const f=(h,x)=>c.push({id:h,steps:x,moves:hm(x)}),d=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(h=>({cubies:[l(...h)]}));let p=jc(i,u,[l(-1,-1,-1)],d,a,s,h=>`${Zc(aa(i,h.cubies[0],a))} corner`,11);u=p.state,f("layer",p.steps);const g=i.stickers.map((h,x)=>h.face===0?x:-1).filter(h=>h>=0),_=h=>g.every(x=>h[x]===0),m=h=>i.stickers.every((x,v)=>h[v]===x.face);return p=Js(i,u,[...Zs,An("sune",gn.sune),An("antisune",gn.antiSune)],_,h=>h.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),u=p.state,f("orient",p.steps),p=Js(i,u,[...Zs,An("swap neighbours",gn.tPerm),An("swap diagonal",gn.yPerm)],m,h=>h.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),u=p.state,f("permute",p.steps),{ok:!0,n:2,stages:c,moves:c.flatMap(h=>h.moves)}}function vE(n,t){const e=ke(t),i=Nu(n,t);if(!i.ok)return[];const s=t===2?i.canonical.state:n,r=u=>Fu(e,s,u),o=e.cubies.map((u,f)=>({c:u,i:f})),a=u=>o.filter(({c:f})=>u(f)).map(({i:f})=>f),l=e.stickers.every((u,f)=>u.face!==0||s[f]===0),c=e.stickers.every((u,f)=>s[f]===u.face);return t===2?[{id:"layer",done:a(u=>u.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:c}]:[{id:"cross",done:a(u=>u.pos[1]===-2&&u.kind==="edge").every(r)},{id:"f2l",done:a(u=>u.pos[1]<=0&&u.kind!=="center").every(r)},{id:"ollCross",done:a(u=>u.pos[1]===2&&u.kind==="edge").every(u=>s[e.cubies[u].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(u=>u.pos[1]===2&&u.kind==="corner").every(r)},{id:"pllEdges",done:c}]}const xE=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],yE=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other – they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first – learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],pm={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:Xs.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:Xs.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:Xs.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:Xs.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:Xs.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:Xs.tPerm}]};function Jc(n,t){return pm[n].find(e=>e.id===t)}const Z=In({n:3,mode:"setup",editing:!1,brush:0,speed:1,playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",dramaSpeed:parseFloat(localStorage.getItem("rubiks-solver.dramaSpeed")||"0.32"),finale:localStorage.getItem("rubiks-solver.finale")==="1",fullscreenOnPlay:!1,showAllColorsOnHover:!1,countdown:0,exploding:!1,busy:!1,solution:null,pointer:0,solveError:"",moveCount:0}),Ye=fg(Xa(3));let Qc=null,la=null,Ln=Promise.resolve();const tu=new Set;function ME(n){Qc=n}function SE(n){la=n}function bE(n){return tu.add(n),()=>tu.delete(n)}const sr=De(()=>Nu(Ye.value,Z.n)),Ea=De(()=>eE(Ye.value,Z.n)),EE=De(()=>vE(Ye.value,Z.n));let ca=0;const wE=n=>new Promise(t=>setTimeout(t,n));async function TE(){const n=++ca;for(const t of[3,2,1]){if(n!==ca)return;Z.countdown=t,await wE(1e3)}if(n===ca){Z.countdown=0,Z.exploding=!0;try{await(la==null?void 0:la())}finally{Z.exploding=!1}}}function io(){ca++,Z.countdown=0}function $a(){io(),Z.solution=null,Z.pointer=0,Z.solveError=""}function Ou(n){return Ln=Ln.then(()=>{Ye.value=n,$a(),Z.moveCount=0}),Ln}function mm(n,t){return Ln=Ln.then(()=>{Ye.value=t,Z.n=n,Z.editing=!1,Z.brush=0,$a(),Z.moveCount=0}),Ln}function $h(n){return mm(n,Xa(n))}function qh(){return Ou(Xa(Z.n))}function gm(){const n=nE(Z.n);return Ou(tE(Xa(Z.n),Z.n,n)).then(()=>n)}function _m(n,t=Z.brush){const e=ke(Z.n);if(e.cubies[e.stickers[n].cubie].kind==="center"&&Z.n===3)return;const i=Uint8Array.from(Ye.value);i[n]=t,Ye.value=i,$a()}function Yi(n,{animate:t=!0,fromSolution:e=!1}={}){return Z.exploding||(Ln=Ln.then(async()=>{const i=n.split(" ").reduce((s,r)=>Qb(s,Z.n,r),Ye.value);Z.busy=!0;try{t&&Qc&&await Qc(n,i,Z.speed)}finally{Z.busy=!1}Ye.value=i,e||($a(),Z.moveCount++),tu.forEach(s=>s(n))})),Ln}function Yh(n,t){return n.forEach(e=>Yi(e,t)),Ln}async function AE(){Z.solveError="",await new Promise(t=>setTimeout(t,20));const n=dm(Ye.value,Z.n);return n.ok?(Z.solution=n,Z.pointer=0,n):(Z.solution=null,Z.solveError=n.error,null)}function wa(){const n=Z.solution;if(!n)return[];const t=[];return n.stages.forEach((e,i)=>{e.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>t.push({move:o,stage:i,step:r,index:a}))})}),t}async function Pr(){io();const n=wa();if(Z.pointer>=n.length)return;const t=n[Z.pointer];Z.pointer++,await Yi(t.move,{fromSolution:!0})}async function Hl(){io();const n=wa();Z.pointer<=0||(Z.pointer--,await Yi(lm(n[Z.pointer].move),{fromSolution:!0}))}const CE={class:"panel"},RE={class:"notation"},PE=["onClick"],LE={class:"lessons"},DE={class:"lesson-title"},UE={class:"goal"},IE={key:0,class:"tip"},NE={key:1,class:"alg"},FE=["onClick"],OE=["onClick"],BE={__name:"LearnPanel",setup(n){return(t,e)=>(vt(),St("section",CE,[e[0]||(e[0]=B("h2",null,"Learn to solve",-1)),e[1]||(e[1]=B("h3",null,"Notation",-1)),B("ul",RE,[(vt(!0),St(ce,null,Pe(ut(xE),i=>(vt(),St("li",{key:i.move},[B("button",{onClick:s=>ut(Yi)(i.move)},Rt(i.move),9,PE),B("span",null,Rt(i.text),1)]))),128))]),(vt(!0),St(ce,null,Pe(ut(yE),i=>(vt(),St("details",{key:i.title,class:"concept"},[B("summary",null,Rt(i.title),1),(vt(!0),St(ce,null,Pe(i.body,(s,r)=>(vt(),St("p",{key:r},Rt(s),1))),128))]))),128)),B("h3",null,"The "+Rt(ut(Z).n)+"×"+Rt(ut(Z).n)+" method – layer by layer",1),B("ol",LE,[(vt(!0),St(ce,null,Pe(ut(pm)[ut(Z).n],i=>(vt(),St("li",{key:i.id},[B("div",DE,Rt(i.title),1),B("div",UE,"Goal: "+Rt(i.goal),1),B("p",null,Rt(i.concept),1),i.tip?(vt(),St("p",IE,"💡 "+Rt(i.tip),1)):le("",!0),i.algorithm?(vt(),St("div",NE,[B("code",null,Rt(i.algorithm.join(" ")),1),B("button",{onClick:s=>ut(Yh)(i.algorithm)},"Try",8,FE),B("button",{onClick:s=>ut(Yh)(ut(ba)(i.algorithm))},"Undo",8,OE)])):le("",!0)]))),128))]),e[2]||(e[2]=B("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left – scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},kE=Hn(BE,[["__scopeId","data-v-22fd2ee3"]]),zE={class:"pad"},HE=["disabled","onClick"],VE={__name:"MovePad",setup(n){const t=["U","D","L","R","F","B"];return(e,i)=>(vt(),St("div",zE,[(vt(),St(ce,null,Pe(t,s=>B("div",{key:s,class:"group"},[(vt(!0),St(ce,null,Pe([s,`${s}'`,`${s}2`],r=>(vt(),St("button",{key:r,disabled:ut(Z).editing,onClick:o=>ut(Yi)(r)},Rt(r),9,HE))),128))])),64))]))}},GE=Hn(VE,[["__scopeId","data-v-8944ff15"]]),WE={class:"panel"},XE={class:"row"},$E=["disabled"],qE=["disabled"],YE={key:0,class:"timer"},KE={key:0,class:"status ok"},jE={key:1,class:"check"},ZE={class:"box"},JE={key:2,class:"hint-box"},QE={key:0,class:"hint-move"},t1={class:"move"},e1={class:"note"},n1={class:"row"},i1={key:0},s1={key:3,class:"quiz"},r1={class:"target"},o1={class:"move big"},a1={class:"note"},l1={__name:"PracticePanel",setup(n){const t=Yt(!1),e=Yt(!1),i=Yt(0),s=Yt(0),r=Yt(null);let o=0;const a=De(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){C(),await gm(),t.value=!0,e.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function c(){clearInterval(o),t.value=!1}function u(){c(),r.value=null}function f(){const L=dm(Ye.value,Z.n);if(!L.ok){r.value={stage:"Hint unavailable",goal:L.error,concept:"",move:"",label:""};return}const F=L.stages.find(b=>b.moves.length);if(!F)return;s.value++;const w=Jc(Z.n,F.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:F.steps[0].moves[0],label:F.steps[0].label}}Ue(Ea,L=>{L&&t.value&&Z.moveCount>0&&(c(),e.value=!0,r.value=null)});const d=Yt(!1),p=Yt(""),g=Yt(0),_=Yt(0),m=Yt(0),h=Yt("Use the move pad or keyboard.");let x=!1,v=null;function y(){const L=Jb();p.value=L[Math.floor(Math.random()*L.length)]}function P(){if(d.value){C();return}c(),d.value=!0,g.value=_.value=m.value=0,h.value="Use the move pad or keyboard.",y(),v=bE(async L=>{x||(_.value++,L===p.value?(g.value++,m.value++,h.value="Correct!"):(m.value=0,h.value=`That was ${L}; ${p.value} was asked. Look at which face turns and which way.`),x=!0,await Yi(ba(L.split(" ")).join(" ")),x=!1,y())})}function C(){d.value=!1,v==null||v(),v=null}return rr(()=>{clearInterval(o),C()}),(L,F)=>(vt(),St("section",WE,[F[2]||(F[2]=B("h2",null,"Practice & test",-1)),F[3]||(F[3]=B("h3",null,"Solve it yourself",-1)),F[4]||(F[4]=B("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),B("div",XE,[B("button",{class:"primary",onClick:l},Rt(t.value||e.value?"New challenge":"Start challenge"),1),B("button",{disabled:!t.value,onClick:f},"Hint",8,$E),B("button",{disabled:!t.value,onClick:u},"Give up",8,qE),t.value||e.value?(vt(),St("span",YE,"⏱ "+Rt(a.value)+" · "+Rt(ut(Z).moveCount)+" moves · "+Rt(s.value)+" hints",1)):le("",!0)]),e.value?(vt(),St("p",KE," Solved in "+Rt(a.value)+" with "+Rt(ut(Z).moveCount)+" moves and "+Rt(s.value)+" hint"+Rt(s.value===1?"":"s")+". 🎉 ",1)):le("",!0),t.value||e.value?(vt(),St("ul",jE,[(vt(!0),St(ce,null,Pe(ut(EE),w=>(vt(),St("li",{key:w.id,class:Re({done:w.done})},[B("span",ZE,Rt(w.done?"✓":""),1),ae(" "+Rt(ut(Jc)(ut(Z).n,w.id).title),1)],2))),128))])):le("",!0),r.value?(vt(),St("div",JE,[B("div",null,[B("b",null,Rt(r.value.stage),1),ae(" – "+Rt(r.value.goal),1)]),r.value.move?(vt(),St("div",QE,[F[0]||(F[0]=ae(" Next move: ",-1)),B("span",t1,Rt(r.value.move),1),B("small",null,"("+Rt(r.value.label)+")",1)])):le("",!0),B("p",e1,Rt(r.value.concept),1)])):le("",!0),F[5]||(F[5]=B("h3",null,"Notation quiz",-1)),B("div",n1,[B("button",{class:Re({primary:d.value}),onClick:P},Rt(d.value?"Stop quiz":"Start quiz"),3),d.value?(vt(),St("span",i1,"Score "+Rt(g.value)+" / "+Rt(_.value)+" · streak "+Rt(m.value),1)):le("",!0)]),d.value?(vt(),St("div",s1,[B("div",r1,[F[1]||(F[1]=ae("Perform ",-1)),B("span",o1,Rt(p.value),1)]),B("p",a1,Rt(h.value),1)])):le("",!0)]))}},c1=Hn(l1,[["__scopeId","data-v-42bd0525"]]),vm="rubiks-solver.saves";function eu(n,t){const{faceGrid:e}=ke(t);return Qn.map(i=>e[i].flat().map(s=>Qn[n[s]]).join("")).join("")}function Kh(n){const t=String(n).replace(/\s+/g,"").toUpperCase(),e=t.length===54?3:t.length===24?2:0;if(!e)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${t.length}.`);const i=[...t].find(a=>!Qn.includes(a));if(i)throw new Error(`"${i}" is not a face letter – use only U, R, F, D, L, B.`);const{faceGrid:s}=ke(e),r=new Uint8Array(ke(e).slotCount),o=e*e;return Qn.forEach((a,l)=>{s[a].flat().forEach((c,u)=>{r[c]=Qn.indexOf(t[l*o+u])})}),{n:e,state:r}}function u1({name:n,n:t,state:e}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:t,facelets:eu(e,t),savedAt:new Date().toISOString()},null,2)}function Vl(n){const t=String(n).trim();if(t.startsWith("{")){let e;try{e=JSON.parse(t)}catch{throw new Error("The file is not valid JSON.")}if(typeof e.facelets!="string")throw new Error("The file has no cube position in it.");const i=Kh(e.facelets);if(e.n&&e.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof e.name=="string"?e.name:""}}return{...Kh(t),name:""}}function f1(){try{const n=JSON.parse(localStorage.getItem(vm)||"[]");return Array.isArray(n)?n.filter(t=>t&&typeof t.facelets=="string"):[]}catch{return[]}}function h1(n){try{return localStorage.setItem(vm,JSON.stringify(n)),!0}catch{return!1}}const d1={class:"saveload"},p1={class:"row"},m1=["placeholder"],g1={key:0,class:"saved"},_1=["title"],v1=["onClick"],x1=["onClick"],y1={key:1,class:"note"},M1={class:"row"},S1={class:"file-btn"},b1={class:"row"},E1=["disabled"],w1={__name:"SaveLoad",setup(n){const t=In(f1()),e=Yt(""),i=Yt(""),s=Yt(""),r=Yt(!1);Ue(t,()=>h1([...t]),{deep:!0});const o=De(()=>`${Z.n}×${Z.n} position ${t.filter(h=>h.n===Z.n).length+1}`);function a(h,x=!1){s.value=h,r.value=x}const l=h=>new Date(h).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function c(){const h=e.value.trim()||o.value,x=eu(Ye.value,Z.n),v=t.find(y=>y.name===h&&y.n===Z.n);v?(v.facelets=x,v.savedAt=new Date().toISOString()):t.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:h,n:Z.n,facelets:x,savedAt:new Date().toISOString()}),e.value="",a(`${v?"Updated":"Saved"} "${h}".`)}async function u(h,x){await mm(h.n,h.state),a(`Loaded ${x}.`)}function f(h){try{u(Vl(h.facelets),`"${h.name}"`)}catch(x){a(x.message,!0)}}function d(h){t.splice(t.indexOf(h),1),a(`Deleted "${h.name}".`)}function p(){const h=e.value.trim()||o.value,x=new Blob([u1({name:h,n:Z.n,state:Ye.value})],{type:"application/json"}),v=URL.createObjectURL(x),y=document.createElement("a");y.href=v,y.download=`${h.replace(/[^\w\-. ]+/g,"_")}.cube.json`,y.click(),URL.revokeObjectURL(v),a(`Exported "${h}".`)}async function g(h){var v;const x=(v=h.target.files)==null?void 0:v[0];if(h.target.value="",!!x)try{const y=Vl(await x.text());await u(y,y.name?`"${y.name}"`:x.name)}catch(y){a(y.message,!0)}}async function _(){const h=eu(Ye.value,Z.n);try{await navigator.clipboard.writeText(h),a("Position code copied to the clipboard.")}catch{i.value=h,a("Clipboard not available – the code is in the box below, copy it from there.")}}function m(){try{u(Vl(i.value),"the pasted code"),i.value=""}catch(h){a(h.message,!0)}}return(h,x)=>(vt(),St("details",d1,[x[3]||(x[3]=B("summary",null,"Save / load position",-1)),B("div",p1,[Oe(B("input",{"onUpdate:modelValue":x[0]||(x[0]=v=>e.value=v),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:ic(c,["enter"])},null,40,m1),[[Bn,e.value]]),B("button",{class:"primary",onClick:c},"Save")]),t.length?(vt(),St("ul",g1,[(vt(!0),St(ce,null,Pe(t,v=>(vt(),St("li",{key:v.id},[B("span",{class:"title",title:v.name},Rt(v.name),9,_1),B("small",null,Rt(v.n)+"×"+Rt(v.n)+" · "+Rt(l(v.savedAt)),1),B("button",{onClick:y=>f(v)},"Load",8,v1),B("button",{title:"Delete",onClick:y=>d(v)},"✕",8,x1)]))),128))])):(vt(),St("p",y1,"No saved positions yet. Saves stay in this browser.")),B("div",M1,[B("button",{onClick:p},"Export file"),B("label",S1,[x[2]||(x[2]=ae(" Import file ",-1)),B("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),B("button",{onClick:_},"Copy code")]),B("div",b1,[Oe(B("input",{"onUpdate:modelValue":x[1]||(x[1]=v=>i.value=v),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:ic(m,["enter"])},null,544),[[Bn,i.value]]),B("button",{disabled:!i.value.trim(),onClick:m},"Load code",8,E1)]),s.value?(vt(),St("p",{key:2,class:Re(["msg",{bad:r.value}]),role:"status"},Rt(s.value),3)):le("",!0)]))}},T1=Hn(w1,[["__scopeId","data-v-be1521d1"]]),A1=["title","onClick"],C1={class:"tag"},R1={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:t}){const e=n,i=t,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=De(()=>ke(e.n)),o=De(()=>r.value.faceGrid),a=l=>e.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,c)=>(vt(),St("div",{class:Re(["net",`n${n.n}`])},[(vt(),St(ce,null,Pe(s,u=>B("div",{key:u.name,class:"face",style:Cn({gridColumn:u.col,gridRow:u.row})},[(vt(!0),St(ce,null,Pe(o.value[u.name],(f,d)=>(vt(),St("div",{key:d,class:"nrow"},[(vt(!0),St(ce,null,Pe(f,(p,g)=>(vt(),St("button",{key:g,class:Re(["cell",{locked:a(p)}]),style:Cn({background:ut(no)[n.state[p]]}),title:`${u.name} ${d+1},${g+1}`,onClick:_=>i("paint",p)},null,14,A1))),128))]))),128)),B("span",C1,Rt(u.name),1)],4)),64))],2))}},P1=Hn(R1,[["__scopeId","data-v-a0e6c1b2"]]),xm="rubiks-solver.ai",Bu=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],jh={provider:"builtin",geminiKey:"",geminiModel:Bu[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function L1(){let n={};try{n=JSON.parse(localStorage.getItem(xm)||"{}")}catch{}const t={...jh,...n};return Bu.includes(t.geminiModel)||(t.geminiModel=jh.geminiModel),t}function D1(n){localStorage.setItem(xm,JSON.stringify(n))}const Zh="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class ms extends Error{constructor(t,e,i=0){super(e),this.kind=t,this.status=i}}async function Ss(n,{method:t="GET",headers:e={},body:i,signal:s,timeoutMs:r=2e4}={}){var d;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let c;try{c=await fetch(n,{method:t,headers:i?{"Content-Type":"application/json",...e}:e,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(p){throw a?new ms("timeout","The request timed out."):p.name==="AbortError"?new ms("abort","Cancelled."):new ms("network",p.message)}finally{clearTimeout(l)}const u=await c.text();let f=null;try{f=JSON.parse(u)}catch{}if(!c.ok){const p=((d=f==null?void 0:f.error)==null?void 0:d.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||u.slice(0,200)||c.statusText;throw new ms("http",p,c.status)}return f}function ku(n,t){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com – check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${t}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function zu(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} – the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function Hu(n,t){return n.kind==="timeout"?`${t} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const Vu=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,Gu=n=>n.localUrl.trim().replace(/\/+$/,"");async function Wu(n,t,e){var i,s,r,o,a,l,c;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let u;try{u=await Ss(`${Vu(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:Zh}]},contents:[{role:"user",parts:[{text:t}]}]},signal:e})}catch(d){throw new Error(ku(d,n.geminiModel))}const f=((o=(r=(s=(i=u==null?void 0:u.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(d=>d.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const u=Gu(n);if(!u)throw new Error("Enter the local server URL in Settings.");let f;try{f=await Ss(`${u}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:Zh},{role:"user",content:t}]},signal:e,timeoutMs:12e4})}catch(p){throw new Error(p.kind==="network"?await zu(u):Hu(p,u))}const d=((c=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:c.content)??"";if(!d)throw new Error("The local model returned no text.");return d.trim()}throw new Error("No AI provider selected.")}const ym="Reply with the single word OK.";async function U1(n){const t=n.geminiKey.trim();if(!t)return{ok:!1,message:"Enter an API key first."};try{await Ss(Vu(n.geminiModel),{headers:{"x-goog-api-key":t},timeoutMs:15e3});const e=await Wu({...n,provider:"gemini"},ym);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:e}}catch(e){return{ok:!1,message:e instanceof ms?ku(e,n.geminiModel):e.message}}}async function I1(n){const t=Gu(n);if(!t)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let e=null;try{const i=await Ss(`${t}/models`,{timeoutMs:8e3});e=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await zu(t)};if(i.kind==="timeout")return{ok:!1,message:Hu(i,t)}}if(e!=null&&e.length&&!e.includes(n.localModel)){const i=e.slice(0,10).join(", ")+(e.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await Wu({...n,provider:"local"},ym);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function N1(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" – goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function Mm(n){const t=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&t.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&t.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),t.join(`

`)}async function F1(n,t,e){return n.provider==="builtin"?{text:Mm(t),ai:!1}:{text:await Wu(n,N1(t),e),ai:!0}}const _e=In(L1());Ue(_e,n=>D1({...n}),{deep:!0});const Sm=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],Gl=(n,t)=>Sm.find(e=>e.name===t).face[n];function Wl(n,t){const e=n/2,i=t/2,s=Math.min(n,t)*.38,r=s*Math.cos(Math.PI/6);return[[e,i],[e,i-s],[e+r,i-s/2],[e+r,i+s/2],[e,i+s],[e-r,i+s/2],[e-r,i-s/2]]}function Jh(n,t,e){const i=ke(e),s=i.m,r=[],o=t[0];for(const a of Sm){const l=t[a.ea],c=t[a.eb],u=t[a.far],f=Gi[Gl(n,a.name)],d=Gi[Gl(n,a.across[0])],p=Gi[Gl(n,a.across[1])];for(let g=0;g<e;g++)for(let _=0;_<e;_++){const m=(g+.5)/e,h=(_+.5)/e,x=o[0]+m*(l[0]-o[0])+h*(c[0]-o[0])+m*h*(u[0]-l[0]-c[0]+o[0]),v=o[1]+m*(l[1]-o[1])+h*(c[1]-o[1])+m*h*(u[1]-l[1]-c[1]+o[1]),y=[0,1,2].map(P=>s*(f[P]+d[P]+p[P])-2*g*p[P]-2*_*d[P]);r.push({slot:i.slotAt(y,f),x,y:v})}}return r}function O1(n,t,e,i){const{data:s,width:r,height:o}=n;let a=0,l=0,c=0,u=0;for(let f=Math.max(0,Math.round(e-i));f<=Math.min(o-1,Math.round(e+i));f++)for(let d=Math.max(0,Math.round(t-i));d<=Math.min(r-1,Math.round(t+i));d++){const p=(f*r+d)*4;a+=s[p],l+=s[p+1],c+=s[p+2],u++}return u?[a/u,l/u,c/u]:[0,0,0]}function bm([n,t,e]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(t),i(e)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,c=(.0193*s+.1192*r+.9505*o)/1.08883,u=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*u(l)-16,500*(u(a)-u(l)),200*(u(l)-u(c))]}const Ta=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]),Qh=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),B1=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),k1=n=>{const t=[...n].sort((e,i)=>e-i);return t.length%2?t[(t.length-1)/2]:(t[t.length/2-1]+t[t.length/2])/2};function z1(n){const t=a=>Math.hypot(a[1],a[2]),e=n.map(a=>({rgb:a,lab:bm(a)})).filter(({lab:a})=>a[0]>60&&t(a)<50);if(!e.length)return null;const i=Math.min(...e.map(a=>t(a.lab))),s=e.filter(a=>t(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>k1(o.map(l=>l.rgb[a])))}function H1(n,t){return n.map((e,i)=>{const s=Math.min(5,1/Math.max(Qh(t[i]),.02));return Math.max(0,Math.min(255,B1(Math.min(1,Qh(e)*s))))})}function V1([n,t,e]){const[i,s,r]=[n/255,t/255,e/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let c=0;return l>0&&(o===i?c=(s-r)/l%6:o===s?c=(r-i)/l+2:c=(i-s)/l+4,c*=60,c<0&&(c+=360)),{h:c>300?c-360:c,s:o===0?0:l/o,v:o}}const Lr=[-30,90],Xl=n=>n.s>.4&&n.h>-40&&n.h<80;function G1(n){const t=[...n].sort((i,s)=>i-s);return t.slice(1).map((i,s)=>({size:i-t[s],mid:(i+t[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const td=(n,[t,e])=>n<t?0:n<e?1:2;function W1(n,t,e=null){const i=ke(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const u=[],f=[];for(const h of t){const x=i.stickers[h.slot];i.cubies[x.cubie].kind==="center"&&(u[x.face]=h.lab,f[x.face]=h)}for(const h of t){let x=0;for(let v=1;v<6;v++)Ta(h.lab,u[v])<Ta(h.lab,u[x])&&(x=v);s[h.slot]=x}const d=[0,1,2,3,4,5].filter(h=>Xl(f[h])).sort((h,x)=>f[h].h-f[x].h);if(d.length!==3)return{state:s,warnings:r,hue:null};const p=d.map(h=>f[h].h),g=[(p[0]+p[1])/2,(p[1]+p[2])/2],_=e??g,m=[];for(const h of t)!d.includes(s[h.slot])||h.s<.25||(s[h.slot]=d[td(h.h,_)],m.push(h.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:_,points:m,anchors:p}}}const o=t.filter(Xl);let a=null,l=null;if(o.length===12){const u=G1(o.map(g=>g.h)),f=e??u,d=t.filter(g=>!Xl(g)),p=ed(d.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+td(g.h,f))),d.forEach((g,_)=>a.set(g.slot,p[_])),l={auto:u,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const u=ed(t.map(f=>f.lab),6);a=new Map(t.map((f,d)=>[f.slot,u[d]]))}for(const[u,f]of a)s[u]=f;const c=cm(s);return c.error?(r.push(`${c.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:c.state,warnings:r,hue:l}}function ed(n,t){const e=n.length/t,i=[n[0]];for(;i.length<t;){let r=0,o=-1;n.forEach((a,l)=>{const c=Math.min(...i.map(u=>Ta(a,u)));c>o&&(o=c,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((c,u)=>i.forEach((f,d)=>o.push([Ta(c,f),u,d]))),o.sort((c,u)=>c[0]-u[0]);const a=new Array(t).fill(e),l=new Array(n.length).fill(-1);for(const[,c,u]of o)l[c]<0&&a[u]>0&&(l[c]=u,a[u]--);s=l;for(let c=0;c<t;c++){const u=n.filter((f,d)=>s[d]===c);u.length&&(i[c]=[0,1,2].map(f=>u.reduce((d,p)=>d+p[f],0)/u.length))}}return s}function X1(n,t,{whiteBalance:e=!1,cutoffs:i=null}={}){const s=[null,null];let r=t;if(e){r=[];for(const a of[0,1]){const l=t.filter(u=>u.photo===a),c=z1(l.map(u=>u.rgb));s[a]=c?"applied":"no-white",r.push(...c?l.map(u=>({...u,rgb:H1(u.rgb,c)})):l)}}const o=r.map(a=>({slot:a.slot,lab:bm(a.rgb),...V1(a.rgb)}));return{...W1(n,o,i),whiteBalance:s}}const $s=Math.PI/180,$1=Array.from({length:8},(n,t)=>[t&1?1:-1,t&2?1:-1,t&4?1:-1]);function q1(n,t,e){const i=Math.max(n,t,e),s=Math.min(n,t,e);return{s:i===0?0:(i-s)/i,v:i/255}}function Y1(n,t=360){const{data:e,width:i,height:s}=n,r=Math.min(1,t/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),c=new Float32Array(o*a);for(let u=0;u<a;u++){const f=Math.floor(u*s/a),d=Math.max(f+1,Math.floor((u+1)*s/a));for(let p=0;p<o;p++){const g=Math.floor(p*i/o),_=Math.max(g+1,Math.floor((p+1)*i/o));let m=0,h=0,x=0,v=0;for(let F=f;F<d;F++)for(let w=g;w<_;w++){const b=(F*i+w)*4;m+=e[b],h+=e[b+1],x+=e[b+2],v++}const{s:y,v:P}=q1(m/v,h/v,x/v),C=y>.42&&P>.32?Math.min(1,(y-.32)/.3):0,L=y<.2&&P>.72?.9:0;l[u*o+p]=Math.max(C,L),c[u*o+p]=P<.3?Math.min(1,(.34-P)/.14):0}}return{w:o,h:a,scale:r,stick:nd(l,o,a),dark:nd(c,o,a)}}function nd(n,t,e){const i=new Float32Array(n.length);for(let s=0;s<e;s++)for(let r=0;r<t;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const u=r+c,f=s+l;u<0||f<0||u>=t||f>=e||(o+=n[f*t+u],a++)}i[s*t+r]=o/a}return i}function nu(n,t,e,i,s){if(i<0||s<0||i>t-1||s>e-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(t-1,r+1),l=Math.min(e-1,o+1),c=i-r,u=s-o;return n[o*t+r]*(1-c)*(1-u)+n[o*t+a]*c*(1-u)+n[l*t+r]*(1-c)*u+n[l*t+a]*c*u}function K1(n,t,e){const[i,s]=[Math.cos(n*$s),Math.sin(n*$s)],[r,o]=[Math.cos(t*$s),Math.sin(t*$s)],[a,l]=[Math.cos(e*$s),Math.sin(e*$s)],c=[[i,0,s],[0,1,0],[-s,0,i]],u=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],d=(p,g)=>p.map(_=>[0,1,2].map(m=>_[0]*g[0][m]+_[1]*g[1][m]+_[2]*g[2][m]));return d(f,d(u,c))}function Xu(n,t,e){const i=K1(n.yaw,n.pitch,n.roll),s=(n.cx-t/2)/n.f*n.z,r=(n.cy-e/2)/n.f*n.z;return $1.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const $u=(n,t,e,i)=>[t/2+i*n[0]/n[2],e/2+i*n[1]/n[2]];function Em(n){let t=0;for(let e=1;e<8;e++)n[e][2]<n[t][2]&&(t=e);return t}const j1=[[1,2],[1,4],[2,4]],id=[.12,.3,.5,.7,.88],Z1=[.02,.05,.08],sd=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function wm(n,t,e,i,s){const{w:r,h:o}=n,a=C=>C?nu(n.stick,r,o,C[0],C[1]):-1,l=C=>C?nu(n.dark,r,o,C[0],C[1]):-1;let c=0,u=0,f=0,d=0,p=0,g=0,_=0,m=0;const h=[],x=[],v=(C,L)=>{m++,C<0&&(_++,C=0),L===0?(c+=C,u++):L===1?(f+=C,d++):(p+=C,g++)};for(const C of e){const L=[C(0,0),C(1,0),C(1,1),C(0,1)];if(L.some(w=>!w))return-1;x.push(L);let F=0;for(let w=0;w<4;w++){const b=L[w],I=L[(w+1)%4];F+=b[0]*I[1]-I[0]*b[1]}h.push(Math.abs(F)/2);for(let w=0;w<t;w++)for(let b=0;b<t;b++){let I=0,st=!1;for(const[K,rt]of sd){const ht=a(C((w+.5)/t+K*.16/t,(b+.5)/t+rt*.16/t));ht<0?st=!0:I+=ht}v(st?-1:I/sd.length,0)}for(let w=1;w<t;w++)for(const b of id)for(const I of[0,1]){const st=(q,ft)=>I===0?C(q,ft):C(ft,q);let K=-1;for(const q of[-i,0,i])K=Math.max(K,l(st(w/t+q/t,b)));const rt=a(st(w/t-.33/t,b)),ht=a(st(w/t+.33/t,b));v(K<0||rt<0||ht<0?-1:K*Math.min(rt,ht),1)}for(const w of id)for(const[b,I,st,K,rt,ht]of[[0,w,.33/t,w,1,0],[1,w,1-.33/t,w,-1,0],[w,0,w,.33/t,0,1],[w,1,w,1-.33/t,0,-1]]){let q=-1;for(const X of Z1)q=Math.max(q,l(C(b+rt*X/t,I+ht*X/t)));const ft=a(C(st,K));v(q<0||ft<0?-1:q*ft,2)}}if(!u||!d)return-1;if(s)return{cell:c/u,line:f/d,border:p/g,outside:_,total:m};let y=.3*(c/u)+.4*(f/d)+.3*(p/g);y*=1-_/Math.max(1,m);const P=Math.min(...h)/Math.max(...h);return P<.12&&(y*=P/.12),y*(.4+.6*Q1(n,x))}const J1=(n,t,e)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function Q1(n,t){const{w:e,h:i}=n,s=t.flat(),r=s.map(m=>m[0]),o=s.map(m=>m[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),c=Math.max(0,Math.min(...r)-l),u=Math.min(e-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),d=Math.min(i-1,Math.max(...o)+l);let p=0,g=0;const _=22;for(let m=0;m<_;m++)for(let h=0;h<_;h++){const x=c+(u-c)*(m+.5)/_,v=f+(d-f)*(h+.5)/_,y=nu(n.stick,e,i,x,v);t.some(P=>J1(P,x,v))?p+=y:g+=y}return p/Math.max(1e-6,p+g)}function ua(n,t,e,i=.12,s=!1){const{w:r,h:o}=n,a=Xu(e,r,o),l=Em(a);if(a[l][2]<1)return-1;const c=a[l],u=(h,x,v)=>v<.3?null:[r/2+e.f*h/v,o/2+e.f*x/v],f=j1.map(([h,x])=>{const v=a[l^h],y=a[l^x],P=[v[0]-c[0],v[1]-c[1],v[2]-c[2]],C=[y[0]-c[0],y[1]-c[1],y[2]-c[2]];return(L,F)=>u(c[0]+P[0]*L+C[0]*F,c[1]+P[1]*L+C[1]*F,c[2]+P[2]*L+C[2]*F)});let d=wm(n,t,f,i,s);if(s||d<0)return d;const p=a.map(h=>h[2]>.3?$u(h,r,o,e.f):[0,0]),g=p.map(h=>h[0]),_=p.map(h=>h[1]),m=Math.max(Math.max(...g)-Math.min(...g),Math.max(..._)-Math.min(..._))/Math.min(r,o);return m<.15&&(d*=m/.15),m>1.1&&(d*=1.1/m),d}function rd(n,t,e,i=.05){const s=(d,p,g,_)=>(m,h)=>[_[0]+m*(d[0]-_[0])+h*(p[0]-_[0])+m*h*(g[0]-d[0]-p[0]+_[0]),_[1]+m*(d[1]-_[1])+h*(p[1]-_[1])+m*h*(g[1]-d[1]-p[1]+_[1])],[r,o,a,l,c,u,f]=e;return wm(n,t,[s(f,a,o,r),s(c,f,u,r),s(a,c,l,r)],i,!1)}function od(n,t,e){const i=Xu(n,t,e),s=Em(i),r=f=>$u(i[f],t,e,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const d=o[f].p,p=o[(f+1)%6].p;a+=d[0]*p[1]-p[0]*d[1]}a<0&&o.reverse();const l=o.map((f,d)=>f.far?d:-1).filter(f=>f>=0),c=l.reduce((f,d)=>o[d].p[1]<o[f].p[1]?d:f,l[0]),u=[0,1,2,3,4,5].map(f=>o[(c+f)%6].p);return[r(s),...u]}function iu(n,t,e){const i=Xu(n,t,e).map(o=>$u(o,t,e,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function tw(n,t,e,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:t,pitch:e,roll:i,f:s},l=(n.x1+n.x2)/2,c=(n.y1+n.y2)/2;for(let u=0;u<3;u++){const f=iu(a,r,o),d=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),p=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(d*p));const g=iu(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=c-(g.y1+g.y2)/2}return a}const ew=["cx","cy","z","yaw","pitch","roll","lf"];function nw(n,t,e,i){const s=n.w,r=n.h,o={...e,lf:Math.log(e.f/i)},a=p=>({...p,f:i*Math.exp(p.lf)}),l=iu(a(o),s,r),c=Math.max(l.x2-l.x1,l.y2-l.y1),u={cx:.02*c,cy:.02*c,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:p,shrink:g}of f){let _=ua(n,t,a(o),p);for(const m of g)for(let h=0;h<30;h++){let x=!1;for(const v of ew)for(const y of[1,-1]){const P={...o,[v]:o[v]+y*u[v]*m};if(v==="pitch"&&Math.abs(P.pitch)>85||v==="lf"&&(P.lf<-.7||P.lf>1.6)||v==="z"&&P.z<1.5)continue;const C=ua(n,t,a(P),p);C>_+1e-5&&(_=C,Object.assign(o,P),x=!0)}if(!x)break}}const d=a(o);return{pose:d,score:ua(n,t,d,.06)}}function iw(n,t,{box:e=null}={}){const i=Y1(n),{w:s,h:r}=i,a=e?[(x=>({x1:x.x1/1e3*s,x2:x.x2/1e3*s,y1:x.y1/1e3*r,y2:x.y2/1e3*r}))(e)]:[.4,.5,.62,.76,.9].map(x=>{const v=x*Math.min(s,r)/2;return{x1:s/2-v,x2:s/2+v,y1:r/2-v,y2:r/2+v}}),l=.8*Math.max(s,r),c=[];for(const x of a)for(let v=0;v<90;v+=10)for(let y=-80;y<=80;y+=10)for(let P=-90;P<=90;P+=15)for(const C of[l,2.8*l]){const L=tw(x,v,y,P,C,s,r);c.push({pose:L,score:ua(i,t,L,.16)})}c.sort((x,v)=>v.score-x.score);const u=c[Math.floor(c.length/2)].score,f=[],d=x=>od(x,s,r).flat();for(const x of c.slice(0,200)){const v=d(x.pose),y=Math.max(...v.filter((P,C)=>C%2===0))-Math.min(...v.filter((P,C)=>C%2===0));if(f.every(P=>Math.max(...P.k.map((C,L)=>Math.abs(C-v[L])))>.05*y)&&f.push({...x,k:v}),f.length>=16)break}let p=null;const g=[];for(const x of f){const v=nw(i,t,x.pose,l);g.push(v),(!p||v.score>p.score)&&(p=v)}if(!p||p.score<=0)return null;const _=od(p.pose,s,r),m=sw(i,t,_);return{handles:m.handles.map(([x,v])=>[x/s*1e3,v/r*1e3]),poseHandles:_.map(([x,v])=>[x/s*1e3,v/r*1e3]),score:m.score,poseScore:p.score,margin:m.score-u,pose:p.pose,maps:i,alternatives:g}}function sw(n,t,e){const i=e.map(c=>c[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=e.map(c=>[...c]),a=(c,u)=>Math.max(e[c][u]-r,Math.min(e[c][u]+r,o[c][u]));let l=rd(n,t,o,.05);for(const c of[.012,.006,.003])for(let u=0;u<20;u++){let f=!1;for(let d=0;d<7;d++)for(let p=0;p<2;p++)for(const g of[1,-1]){const _=o[d][p];if(o[d][p]=_+g*c*s,o[d][p]!==a(d,p)){o[d][p]=_;continue}const m=rd(n,t,o,.05);m>l+1e-5?(l=m,f=!0):o[d][p]=_}if(!f)break}return{handles:o,score:l}}function ad(n,t,{box:e=null,signal:i}={}){const s=()=>{const r=iw(n,t,{box:e});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=c=>{i==null||i.removeEventListener("abort",l),a.terminate(),c.data.error?o(new Error(c.data.error)):r(c.data.result)},a.onerror=c=>{var u;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(u=c.preventDefault)==null||u.call(c)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:t,box:e})})}const Tm=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,jo=(n,...t)=>t.map(e=>n==null?void 0:n[e]).find(e=>e!==void 0);function rw(n){const t=n.indexOf("{"),e=n.lastIndexOf("}");if(t<0||e<=t)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(t,e+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=jo(s,"x1","xmin","left","x_min"),o=jo(s,"y1","ymin","top","y_min"),a=jo(s,"x2","xmax","right","x_max"),l=jo(s,"y2","ymax","bottom","y_max"));const c=[r,o,a,l].map(Number);if(c.some(u=>!Number.isFinite(u)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(c[0],c[2]),y1:Math.min(c[1],c[3]),x2:Math.max(c[0],c[2]),y2:Math.max(c[1],c[3])}}function Am(n){const{x1:t,y1:e,x2:i,y2:s}=n;if([t,e,i,s].every(d=>d<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(t<-50||e<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-t,o=s-e;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(t+i)/2,l=(e+s)/2,c=r/2,u=o/2,f=d=>Math.max(0,Math.min(1e3,d));return[[a,l],[a,l-u],[a+c,l-u/2],[a+c,l+u/2],[a,l+u],[a-c,l+u/2],[a-c,l-u/2]].map(([d,p])=>[f(d),f(p)])}const ow=n=>{const t=[...n].sort((e,i)=>e-i);return t[Math.floor(t.length/2)]};function aw(n,t){const{data:e,width:i,height:s}=n,r=(O,W)=>Math.round(O/1e3*W),o=r(t.x1,i),a=r(t.x2,i),l=r(t.y1,s),c=r(t.y2,s),u=O=>Math.max(0,Math.min(i-1,Math.round(O))),f=O=>Math.max(0,Math.min(s-1,Math.round(O))),d=(a-o)*.25,p=(c-l)*.25,[g,_,m,h]=[u(o-d),u(a+d),f(l-p),f(c+p)],x=_-g+1,v=h-m+1;if(x<40||v<40)return null;const y=Math.max(3,Math.round(Math.min(x,v)*.06)),P=(O,W)=>{const Tt=(W*i+O)*4;return[e[Tt],e[Tt+1],e[Tt+2]]},C=[];for(let O=m;O<=h;O++)for(let W=g;W<=_;W++)(W-g<y||_-W<y||O-m<y||h-O<y)&&C.push(P(W,O));const L=[0,1,2].map(O=>ow(C.map(W=>W[O]))),F=O=>Math.hypot(O[0]-L[0],O[1]-L[1],O[2]-L[2]),w=C.map(F).sort((O,W)=>O-W),b=Math.max(40,w[Math.floor(w.length*.95)]*1.6),I=new Array(x).fill(0),st=new Array(v).fill(0);for(let O=0;O<v;O++)for(let W=0;W<x;W++)F(P(g+W,m+O))>b&&(I[W]++,st[O]++);const K=O=>{const W=Math.max(...O)*.04,Tt=O.findIndex(ct=>ct>=W),Y=O.length-1-[...O].reverse().findIndex(ct=>ct>=W);return Tt<0?null:[Tt,Y]},rt=K(I),ht=K(st);if(!rt||!ht)return null;const q={x1:(g+rt[0])/i*1e3,x2:(g+rt[1]+1)/i*1e3,y1:(m+ht[0])/s*1e3,y2:(m+ht[1]+1)/s*1e3},ft=O=>(O.x2-O.x1)*(O.y2-O.y1),X=ft(q)/ft(t),Et=Math.hypot((q.x1+q.x2-t.x1-t.x2)/2,(q.y1+q.y2-t.y1-t.y2)/2),j=rt[0]===0||ht[0]===0||rt[1]===x-1||ht[1]===v-1;return X<.45||X>2.2||Et>.25*Math.max(t.x2-t.x1,t.y2-t.y1)||j?null:q}function lw(n){return Cm(n).length>0}function Cm(n){var e,i,s;const t=[];return(e=n.localUrl)!=null&&e.trim()&&((i=n.localModel)!=null&&i.trim())&&t.push("local"),(s=n.geminiKey)!=null&&s.trim()&&t.push("gemini"),t}async function cw(n,t,e){var s,r;const i=Gu(n);try{await Ss(`${i}/models`,{timeoutMs:4e3,signal:e})}catch(o){if(o.kind==="network")throw new Error(await zu(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await Ss(`${i}/chat/completions`,{method:"POST",signal:e,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:Tm},{type:"image_url",image_url:{url:t}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof ms){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(Hu(o,i)+a)}throw o}}async function uw(n,t,e){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(t)??[];if(!s)throw new Error("Could not encode the photo.");try{const c=await Ss(`${Vu(n.geminiModel)}:generateContent`,{method:"POST",signal:e,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:Tm},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=c==null?void 0:c.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(u=>u.text).join(""))??"",model:n.geminiModel}}catch(c){throw c instanceof ms?new Error(ku(c,n.geminiModel)):c}}async function fw(n,t,e){const i=Cm(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?cw(n,t,e):uw(n,t,e)),l=rw(o);return{handles:Am(l),source:r,model:a,box:l,notes:s}}catch(o){if(e!=null&&e.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const hw={class:"photo-import"},dw={class:"photos"},pw={class:"file"},mw=["onChange"],gw=["onPointerdown","onPointermove"],_w={class:"ai-row"},vw=["disabled","onClick"],xw={class:"wb"},yw={class:"wb"},Mw={class:"actions"},Sw=["disabled"],bw={key:0,class:"hue-box"},Ew={class:"hue-head"},ww=["disabled"],Tw={class:"slider"},Aw=["min","max"],Cw={class:"slider"},Rw=["min","max"],Pw={key:1,class:"note"},ld=.3,Lw={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:t}){const e=n,i=t,s=[null,null],r=In([null,null]),o=In([Wl(420,420),Wl(420,420)]),a=Yt(""),l=Yt(!1),c=Yt(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Ue(c,j=>localStorage.setItem("rubiks-solver.autoAlign",j?"1":"0"));const u=In([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],d=Yt(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),p=Yt(null),g=Yt(null),_=Yt(!1),m=Yt(0),h=Yt(0),x=Yt(null),v=Yt(null),y=De(()=>r[0]&&r[1]);oo(()=>[0,1].forEach(b)),Ue(()=>e.n,()=>{[0,1].forEach(b),p.value=null,g.value=null,_.value=!1});function P(j,O){var Y;const W=(Y=O.target.files)==null?void 0:Y[0];if(!W)return;const Tt=new Image;Tt.onload=async()=>{r[j]=Tt,o[j]=Wl(420,420),u[j].state="",u[j].text="",await mu(),b(j),c.value&&F(j)},Tt.src=URL.createObjectURL(W)}function C(j){const O=Math.min(1,768/Math.max(j.width,j.height)),W=document.createElement("canvas");W.width=Math.round(j.width*O),W.height=Math.round(j.height*O);const Tt=W.getContext("2d");return Tt.drawImage(j,0,0,W.width,W.height),{dataUrl:W.toDataURL("image/jpeg",.85),pixels:Tt.getImageData(0,0,W.width,W.height)}}function L(j,O,W){const{s:Tt,ox:Y,oy:ct}=w(O);W.forEach(([yt,gt],It)=>{o[j][It]=[Y+yt/1e3*O.width*Tt,ct+gt/1e3*O.height*Tt]}),b(j)}async function F(j){var Y;const O=r[j];if(!O)return;(Y=f[j])==null||Y.abort();const W=new AbortController;f[j]=W,u[j].busy=!0,u[j].state="",u[j].text="Analysing the photo…";const Tt=()=>r[j]!==O||W.signal.aborted;try{const{dataUrl:ct,pixels:yt}=C(O),gt=lw(_e),It=gt?fw({..._e},ct,W.signal).catch(A=>{if(A.kind==="abort"||W.signal.aborted)throw A;return{error:A.message}}):null;let Ut=await ad(yt,e.n,{signal:W.signal});if(Tt())return;let Wt="image analysis";Ut&&Ut.score>=ld&&(L(j,O,Ut.handles),gt&&(u[j].text="Cube outlined by image analysis – asking the AI to double-check…"));let jt=null;if(It){if(jt=await It,Tt())return;if(jt.box){const A=await ad(yt,e.n,{box:jt.box,signal:W.signal});if(Tt())return;A&&(!Ut||A.score>Ut.score+.02)&&(Ut=A,Wt=`${jt.source==="local"?"local model":"Gemini"} ${jt.model} + image analysis`)}}if(Ut&&Ut.score>=ld){L(j,O,Ut.handles),u[j].state="ok",u[j].text=`Cube outlined by ${Wt} (fit ${Math.round(Ut.score*100)}%). The outline is a perspective-correct cube model – fine-tune the handles if needed.`;return}if(jt!=null&&jt.box){const A=aw(yt,jt.box);L(j,O,A?Am(A):jt.handles),u[j].state="ok",u[j].text="The cube could not be fitted precisely; the outline is only a rough box from the AI – please adjust the handles.";return}u[j].state="bad",u[j].text="Could not find a cube in this photo"+(jt!=null&&jt.error?` (${jt.error})`:"")+" – drag the handles by hand."}catch(ct){if(ct.kind==="abort"||W.signal.aborted)return;u[j].state="bad",u[j].text=`${ct.message} – drag the handles by hand.`}finally{f[j]===W&&(u[j].busy=!1)}}function w(j){const O=Math.min(420/j.width,420/j.height);return{s:O,ox:(420-j.width*O)/2,oy:(420-j.height*O)/2}}function b(j){const O=s[j];if(!O)return;const W=O.getContext("2d");W.clearRect(0,0,420,420),W.fillStyle="#0f1116",W.fillRect(0,0,420,420);const Tt=r[j];if(Tt){const{s:ct,ox:yt,oy:gt}=w(Tt);W.drawImage(Tt,yt,gt,Tt.width*ct,Tt.height*ct)}const Y=o[j];W.lineWidth=2,W.strokeStyle="#ffffff",W.beginPath(),[1,2,3,4,5,6].forEach((ct,yt)=>yt?W.lineTo(Y[ct][0],Y[ct][1]):W.moveTo(Y[ct][0],Y[ct][1])),W.closePath(),W.stroke(),W.beginPath(),[2,4,6].forEach(ct=>{W.moveTo(Y[0][0],Y[0][1]),W.lineTo(Y[ct][0],Y[ct][1])}),W.stroke(),W.fillStyle="#ff2d55";for(const ct of Jh(j,Y,e.n))W.beginPath(),W.arc(ct.x,ct.y,3,0,Math.PI*2),W.fill();W.fillStyle="#00e5ff",Y.forEach(([ct,yt])=>{W.beginPath(),W.arc(ct,yt,7,0,Math.PI*2),W.fill()})}const I=(j,O)=>{const W=s[j].getBoundingClientRect();return[(O.clientX-W.left)/W.width*420,(O.clientY-W.top)/W.height*420]};function st(j,O){const[W,Tt]=I(j,O);let Y=-1,ct=18;o[j].forEach(([yt,gt],It)=>{const Ut=Math.hypot(yt-W,gt-Tt);Ut<ct&&(ct=Ut,Y=It)}),Y>=0&&(v.value={i:j,k:Y})}function K(j,O){!v.value||v.value.i!==j||(o[j][v.value.k]=I(j,O),b(j))}const rt=()=>v.value=null;function ht(){const j=[];for(let O=0;O<2;O++){const W=document.createElement("canvas");W.width=W.height=420;const Tt=W.getContext("2d"),{s:Y,ox:ct,oy:yt}=w(r[O]);Tt.fillStyle="#000",Tt.fillRect(0,0,420,420),Tt.drawImage(r[O],ct,yt,r[O].width*Y,r[O].height*Y);const gt=Tt.getImageData(0,0,420,420),It=420*.38/e.n/5;for(const Ut of Jh(O,o[O],e.n))j.push({slot:Ut.slot,rgb:O1(gt,Ut.x,Ut.y,It),photo:O})}p.value=j,_.value=!1,q()}function q(){const j=X1(e.n,p.value,{whiteBalance:d.value,cutoffs:_.value?[m.value,h.value]:null});g.value=j.hue,j.hue&&!_.value&&(m.value=Math.round(j.hue.auto[0]),h.value=Math.round(j.hue.auto[1]));const O=j.whiteBalance.map((Tt,Y)=>Tt==="no-white"?Y+1:0).filter(Boolean),W=[];d.value&&W.push(O.length?`No white tile found in photo ${O.join(" and ")} – colours used as they are there.`:"White balance applied to both photos."),l.value=j.warnings.length>0||O.length>0,a.value=[j.warnings[0]||"Colours imported – check them in the cube net and fix any mistakes.",...W].join(" "),i("import",j.state)}function ft(j){j==="a"?m.value=Math.min(m.value,h.value-1):h.value=Math.max(h.value,m.value+1),_.value=!0,q()}function X(){_.value=!1,q()}Ue(d,j=>{localStorage.setItem("rubiks-solver.whiteBalance",j?"1":"0"),p.value&&q()});function Et(){const j=x.value;if(!j||!g.value)return;const O=j.getContext("2d"),[W,Tt]=Lr,Y=j.width,ct=j.height,yt=gt=>(gt-W)/(Tt-W)*Y;for(let gt=0;gt<Y;gt++){const It=W+gt/Y*(Tt-W);O.fillStyle=`hsl(${(It+360)%360} 70% 38%)`,O.fillRect(gt,0,1,ct)}O.font="12px system-ui, sans-serif",O.textAlign="center",O.fillStyle="rgba(255,255,255,0.9)",[["red",W,m.value],["orange",m.value,h.value],["yellow",h.value,Tt]].forEach(([gt,It,Ut])=>{O.fillText(gt,(yt(It)+yt(Ut))/2,13)}),g.value.points.forEach((gt,It)=>{O.beginPath(),O.arc(yt(gt),26+It*7%30,3.2,0,Math.PI*2),O.fillStyle="#fff",O.fill(),O.strokeStyle="rgba(0,0,0,0.6)",O.stroke()}),g.value.anchors.forEach(gt=>{O.beginPath(),O.moveTo(yt(gt),ct-14),O.lineTo(yt(gt)-6,ct-2),O.lineTo(yt(gt)+6,ct-2),O.closePath(),O.fillStyle="#fff",O.fill(),O.stroke()}),O.lineWidth=2,O.strokeStyle="#0b0d12",[m.value,h.value].forEach(gt=>{O.beginPath(),O.moveTo(yt(gt),0),O.lineTo(yt(gt),ct),O.stroke()}),O.lineWidth=1}return Ue([g,m,h],Et,{flush:"post"}),(j,O)=>(vt(),St("div",hw,[O[12]||(O[12]=B("p",{class:"hint"},[ae(" Photo 1: look straight at one "),B("b",null,"corner"),ae(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),B("b",null,"opposite corner"),ae(" faces the camera. Drag the 7 handles so the lines follow the cube outline – the dots show where colours are read. ")],-1)),B("div",dw,[(vt(),St(ce,null,Pe(2,W=>B("div",{key:W,class:"photo"},[B("label",pw,[B("span",null,Rt(W===1?"Photo 1 – first corner":"Photo 2 – opposite corner"),1),B("input",{type:"file",accept:"image/*",onChange:Tt=>P(W-1,Tt)},null,40,mw)]),B("canvas",{ref_for:!0,ref:Tt=>s[W-1]=Tt,width:"420",height:"420",onPointerdown:Tt=>st(W-1,Tt),onPointermove:Tt=>K(W-1,Tt),onPointerup:rt,onPointerleave:rt},null,40,gw),B("div",_w,[B("button",{type:"button",disabled:!r[W-1]||u[W-1].busy,onClick:Tt=>F(W-1)},Rt(u[W-1].busy?"Finding the cube…":"✨ Find the cube"),9,vw),u[W-1].text?(vt(),St("span",{key:0,class:Re(["ai-msg",u[W-1].state])},Rt(u[W-1].text),3)):le("",!0)])])),64))]),B("label",xw,[Oe(B("input",{"onUpdate:modelValue":O[0]||(O[0]=W=>c.value=W),type:"checkbox"},null,512),[[vs,c.value]]),O[6]||(O[6]=B("span",null,[ae(" Outline the cube automatically after upload "),B("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),B("label",yw,[Oe(B("input",{"onUpdate:modelValue":O[1]||(O[1]=W=>d.value=W),type:"checkbox"},null,512),[[vs,d.value]]),O[7]||(O[7]=B("span",null,[ae(" White balance – if a white tile is found in a photo, use it as that photo's white point "),B("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),B("div",Mw,[B("button",{class:"primary",disabled:!y.value,onClick:ht},"Read colours",8,Sw),a.value?(vt(),St("span",{key:0,class:Re(["msg",{warn:l.value}])},Rt(a.value),3)):le("",!0)]),g.value?(vt(),St("div",bw,[B("div",Ew,[O[8]||(O[8]=B("b",null,"Red / orange / yellow cutoffs",-1)),B("button",{type:"button",disabled:!_.value,onClick:X},"Auto",8,ww)]),B("canvas",{ref_key:"hueCanvas",ref:x,class:"hue-strip",width:"480",height:"76"},null,512),B("label",Tw,[O[9]||(O[9]=B("span",null,"Red | Orange",-1)),Oe(B("input",{"onUpdate:modelValue":O[2]||(O[2]=W=>m.value=W),type:"range",min:ut(Lr)[0],max:ut(Lr)[1],step:"1",onInput:O[3]||(O[3]=W=>ft("a"))},null,40,Aw),[[Bn,m.value,void 0,{number:!0}]]),B("output",null,Rt(m.value)+"°",1)]),B("label",Cw,[O[10]||(O[10]=B("span",null,"Orange | Yellow",-1)),Oe(B("input",{"onUpdate:modelValue":O[4]||(O[4]=W=>h.value=W),type:"range",min:ut(Lr)[0],max:ut(Lr)[1],step:"1",onInput:O[5]||(O[5]=W=>ft("b"))},null,40,Rw),[[Bn,h.value,void 0,{number:!0}]]),B("output",null,Rt(h.value)+"°",1)]),O[11]||(O[11]=B("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):p.value?(vt(),St("p",Pw," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):le("",!0)]))}},Dw=Hn(Lw,[["__scopeId","data-v-ebf0867c"]]),Uw={class:"panel"},Iw={class:"row"},Nw={class:"seg"},Fw={class:"row"},Ow={key:0,class:"note"},Bw={class:"row"},kw={class:"row"},zw={style:{display:"flex","align-items":"center",gap:"8px"}},Hw={key:1,class:"palette"},Vw=["title","onClick"],Gw={class:"photos"},Ww={__name:"SetupPanel",setup(n){const t=Yt("");async function e(){t.value=(await gm()).join(" ")}return(i,s)=>(vt(),St("section",Uw,[s[12]||(s[12]=B("h2",null,"Set up the cube",-1)),B("div",Iw,[s[7]||(s[7]=B("span",{class:"label"},"Size",-1)),B("div",Nw,[B("button",{class:Re({on:ut(Z).n===2}),onClick:s[0]||(s[0]=r=>ut($h)(2))},"2×2",2),B("button",{class:Re({on:ut(Z).n===3}),onClick:s[1]||(s[1]=r=>ut($h)(3))},"3×3",2)])]),B("div",Fw,[B("button",{onClick:s[2]||(s[2]=(...r)=>ut(qh)&&ut(qh)(...r))},"Reset to solved"),B("button",{onClick:e},"Random scramble")]),t.value?(vt(),St("p",Ow,[s[8]||(s[8]=ae("Scramble: ",-1)),B("code",null,Rt(t.value),1)])):le("",!0),s[13]||(s[13]=B("h3",null,"Enter your own position",-1)),B("div",Bw,[B("button",{class:Re({primary:ut(Z).editing}),onClick:s[3]||(s[3]=r=>ut(Z).editing=!ut(Z).editing)},Rt(ut(Z).editing?"Done painting":"Paint stickers"),3),s[9]||(s[9]=B("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),B("div",kw,[B("label",zw,[Oe(B("input",{type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=r=>ut(Z).showAllColorsOnHover=r)},null,512),[[vs,ut(Z).showAllColorsOnHover]]),s[10]||(s[10]=ae(" Show all colors on hover ",-1))])]),ut(Z).editing?(vt(),St("div",Hw,[(vt(!0),St(ce,null,Pe(ut(no),(r,o)=>(vt(),St("button",{key:o,class:Re(["swatch",{on:ut(Z).brush===o}]),style:Cn({background:r}),title:ut(eo)[o],onClick:a=>ut(Z).brush=o},null,14,Vw))),128))])):le("",!0),Ve(P1,{n:ut(Z).n,state:ut(Ye),onPaint:s[5]||(s[5]=r=>ut(Z).editing&&ut(_m)(r))},null,8,["n","state"]),B("details",Gw,[s[11]||(s[11]=B("summary",null,"Import from two photos",-1)),Ve(Dw,{n:ut(Z).n,onImport:s[6]||(s[6]=r=>ut(Ou)(r))},null,8,["n"])]),s[14]||(s[14]=B("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works – the bottom-left-back corner is used as the reference. ",-1))]))}},Xw={key:0,class:"result wait"},$w={class:"msg"},qw={key:0,class:"reply"},Yw={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(t,e)=>n.state.busy?(vt(),St("div",Xw,"Contacting the service…")):n.state.result?(vt(),St("div",{key:1,class:Re(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[B("div",$w,Rt(n.state.result.ok?"✓":"✗")+" "+Rt(n.state.result.message),1),n.state.result.reply?(vt(),St("div",qw,[e[0]||(e[0]=B("span",null,"Model response",-1)),ae(" "+Rt(n.state.result.reply),1)])):le("",!0)],2)):le("",!0)}},cd=Hn(Yw,[["__scopeId","data-v-bd7ff3bc"]]),Kw={class:"panel"},jw={class:"field"},Zw={key:0,class:"pill"},Jw={class:"field"},Qw={class:"key-row"},tT=["type"],eT=["disabled"],nT={class:"field"},iT=["value"],sT={class:"row"},rT=["disabled"],oT={key:0,class:"pill"},aT={class:"field"},lT={class:"field"},cT={class:"row"},uT=["disabled"],fT={__name:"SettingsPanel",setup(n){const t=Yt(!1),e=In({busy:!1,result:null}),i=In({busy:!1,result:null}),s={gemini:e,local:i};Ue(()=>[_e.geminiKey,_e.geminiModel],()=>e.result=null),Ue(()=>[_e.localUrl,_e.localModel],()=>i.result=null);async function r(o,a){const l=s[o];l.busy=!0,l.result=null;try{l.result=await a({..._e})}finally{l.busy=!1}}return(o,a)=>(vt(),St("section",Kw,[a[19]||(a[19]=B("h2",null,"Tutor settings",-1)),a[20]||(a[20]=B("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),B("label",jw,[a[10]||(a[10]=ae(" Active provider ",-1)),Oe(B("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>ut(_e).provider=l)},[...a[9]||(a[9]=[B("option",{value:"builtin"},"Built-in (no AI)",-1),B("option",{value:"gemini"},"Gemini API",-1),B("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[nc,ut(_e).provider]])]),B("fieldset",null,[B("legend",null,[a[11]||(a[11]=ae("Gemini ",-1)),ut(_e).provider==="gemini"?(vt(),St("span",Zw,"active")):le("",!0)]),B("label",Jw,[a[12]||(a[12]=ae(" API key ",-1)),B("span",Qw,[Oe(B("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>ut(_e).geminiKey=l),type:t.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,tT),[[K_,ut(_e).geminiKey]]),B("button",{type:"button",onClick:a[2]||(a[2]=l=>t.value=!t.value)},Rt(t.value?"Hide":"Show"),1),B("button",{type:"button",disabled:!ut(_e).geminiKey,onClick:a[3]||(a[3]=l=>ut(_e).geminiKey="")},"Clear",8,eT)])]),B("label",nT,[a[13]||(a[13]=ae(" Model ",-1)),Oe(B("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>ut(_e).geminiModel=l)},[(vt(!0),St(ce,null,Pe(ut(Bu),l=>(vt(),St("option",{key:l,value:l},Rt(l),9,iT))),128))],512),[[nc,ut(_e).geminiModel]])]),B("div",sT,[B("button",{class:"primary",disabled:e.busy,onClick:a[5]||(a[5]=l=>r("gemini",ut(U1)))},Rt(e.busy?"Testing…":"Test Gemini"),9,rT)]),Ve(cd,{state:e},null,8,["state"]),a[14]||(a[14]=B("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),B("fieldset",null,[B("legend",null,[a[15]||(a[15]=ae("Local model ",-1)),ut(_e).provider==="local"?(vt(),St("span",oT,"active")):le("",!0)]),B("label",aT,[a[16]||(a[16]=ae(" OpenAI-compatible base URL ",-1)),Oe(B("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>ut(_e).localUrl=l),placeholder:"http://localhost:1234/v1"},null,512),[[Bn,ut(_e).localUrl]])]),B("label",lT,[a[17]||(a[17]=ae(" Model name ",-1)),Oe(B("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>ut(_e).localModel=l),placeholder:"google/gemma-4-e4b"},null,512),[[Bn,ut(_e).localModel]])]),B("div",cT,[B("button",{class:"primary",disabled:i.busy,onClick:a[8]||(a[8]=l=>r("local",ut(I1)))},Rt(i.busy?"Testing…":"Test local model"),9,uT)]),Ve(cd,{state:i},null,8,["state"]),a[18]||(a[18]=B("p",{class:"note"},[ae(" LM Studio: Developer → Server Settings → turn on "),B("b",null,"Enable CORS"),ae(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),B("code",null,"OLLAMA_ORIGINS=*"),ae(". ")],-1))]),a[21]||(a[21]=B("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]))}},hT=Hn(fT,[["__scopeId","data-v-b50ceee9"]]),dT={class:"tutor"},pT={class:"tutor-head"},mT={class:"pill"},gT={key:0,class:"status bad"},_T={class:"ask"},vT=["disabled"],xT=["disabled","title"],yT=["disabled"],MT={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const t=n,e=Yt(""),i=Yt(!1),s=Yt(""),r=Yt(""),o=Yt(!1),a=De(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[_e.provider]),l=De(()=>o.value&&r.value?r.value:Mm(t.context));Ue(()=>[t.context.stageTitle,t.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function c(u){i.value=!0,s.value="";try{const f=await F1({..._e},{...t.context,question:u||""});r.value=f.text,o.value=f.ai,e.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(u,f)=>(vt(),St("div",dT,[B("div",pT,[f[5]||(f[5]=B("h3",null,"Tutor",-1)),B("span",mT,Rt(a.value),1),B("button",{class:"link",onClick:f[0]||(f[0]=d=>ut(Z).mode="settings")},"Settings")]),B("p",{class:Re(["answer",{ai:o.value}])},Rt(l.value),3),s.value?(vt(),St("p",gT,Rt(s.value),1)):le("",!0),B("div",_T,[Oe(B("input",{"onUpdate:modelValue":f[1]||(f[1]=d=>e.value=d),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=ic(d=>c(e.value),["enter"]))},null,40,vT),[[Bn,e.value]]),B("button",{disabled:i.value||ut(_e).provider==="builtin",title:ut(_e).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=d=>c(e.value))},Rt(i.value?"…":"Ask"),9,xT),B("button",{disabled:i.value||ut(_e).provider==="builtin",onClick:f[4]||(f[4]=d=>c(""))},"Explain",8,yT)])]))}},ST=Hn(MT,[["__scopeId","data-v-a9c39dbe"]]),bT={class:"panel"},ET={class:"row"},wT=["disabled"],TT={key:0,class:"status ok"},AT={key:0,class:"status bad"},CT={key:1,class:"status bad"},RT={class:"note"},PT={class:"player"},LT=["disabled"],DT=["disabled"],UT=["title","disabled"],IT=["disabled"],NT=["disabled"],FT={class:"speed"},OT={class:"drama",title:"While playing, the camera slowly swirls around the cube"},BT={class:"drama-speed",title:"Rotation speed while Extra drama is enabled"},kT={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},zT={class:"fullscreen-mode"},HT={class:"bar"},VT={key:0,class:"now"},GT={class:"now-stage"},WT={class:"moves"},XT={key:1,class:"status ok"},$T={class:"stages"},qT={class:"stage-title"},YT={class:"goal"},KT={key:0,class:"steps"},jT={class:"step-label"},ZT={__name:"SolvePanel",setup(n){const t=Yt(!1),e=Yt(!1);oo(()=>{function h(x){var y;const v=(y=x.target)==null?void 0:y.tagName;v==="INPUT"||v==="TEXTAREA"||v==="SELECT"||x.ctrlKey||x.metaKey||x.altKey||Z.mode==="solve"&&(x.code==="Space"?(x.preventDefault(),Pr()):x.key==="Enter"&&(x.preventDefault(),g()))}window.addEventListener("keydown",h),rr(()=>window.removeEventListener("keydown",h))}),Ue(e,h=>Z.playing=h,{immediate:!0}),Ue(()=>Z.drama,h=>localStorage.setItem("rubiks-solver.drama",h?"1":"0")),Ue(()=>Z.finale,h=>{localStorage.setItem("rubiks-solver.finale",h?"1":"0"),h||io()});const i=De(()=>Z.solution),s=De(()=>{var h;return((h=i.value)==null?void 0:h.moves.length)??0}),r=De(()=>Z.pointer>=s.value),o=De(()=>Z.busy||Z.pointer===0),a=h=>Jc(Z.n,h),l=De(()=>{if(!i.value||r.value)return null;const h=wa()[Z.pointer],x=i.value.stages[h.stage],v=x.steps[h.step];return{stageIdx:h.stage,stage:x,step:v,stepIdx:h.step}}),c=De(()=>l.value?wa()[Z.pointer].index:0),u=De(()=>l.value?a(l.value.stage.id).title:""),f=De(()=>{var v,y,P;const h=((v=l.value)==null?void 0:v.stage)??i.value.stages[i.value.stages.length-1],x=a(h.id);return{n:Z.n,stageTitle:x.title,goal:x.goal,concept:x.concept,stepLabel:((y=l.value)==null?void 0:y.step.label)??"",moves:((P=l.value)==null?void 0:P.step.moves)??[]}});async function d(){t.value=!0,await AE(),t.value=!1}async function p(){for(e.value=!0;e.value&&Z.pointer<s.value;)await Pr();const h=e.value&&Z.pointer>=s.value&&Ea.value;e.value=!1,h&&Z.finale&&TE()}function g(){e.value?e.value=!1:p()}async function _(){const h=Z.speed;for(Z.speed=10;Z.pointer<s.value;)await Pr();Z.speed=h}async function m(){e.value=!1;const h=Z.speed;for(Z.speed=10;Z.pointer>0;)await Hl();Z.speed=h}return rr(()=>{e.value=!1,Z.playing=!1,io()}),(h,x)=>(vt(),St("section",bT,[x[16]||(x[16]=B("h2",null,"Solve it step by step",-1)),B("div",ET,[B("button",{class:"primary",disabled:!ut(sr).ok||t.value||ut(Z).editing,onClick:d},Rt(t.value?"Solving…":"Find solution"),9,wT),ut(Ea)&&!i.value?(vt(),St("span",TT,"Already solved!")):le("",!0)]),ut(sr).ok?le("",!0):(vt(),St("ul",AT,[(vt(!0),St(ce,null,Pe(ut(sr).errors,v=>(vt(),St("li",{key:v},Rt(v),1))),128))])),ut(Z).solveError?(vt(),St("p",CT,Rt(ut(Z).solveError),1)):le("",!0),i.value?(vt(),St(ce,{key:2},[B("p",RT,Rt(i.value.moves.length)+" moves in "+Rt(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),B("div",PT,[B("button",{title:"Back to start",disabled:o.value,onClick:m},"⏮",8,LT),B("button",{title:"Previous move",disabled:o.value,onClick:x[0]||(x[0]=(...v)=>ut(Hl)&&ut(Hl)(...v))},"◀",8,DT),B("button",{class:"primary",title:e.value?"Pause":"Play",disabled:r.value&&!e.value,onClick:g},Rt(e.value?"⏸":"▶"),9,UT),B("button",{title:"Next move",disabled:r.value||ut(Z).busy,onClick:x[1]||(x[1]=(...v)=>ut(Pr)&&ut(Pr)(...v))},"▶|",8,IT),B("button",{title:"Jump to end",disabled:r.value||ut(Z).busy,onClick:_},"⏭",8,NT),B("label",FT,[x[7]||(x[7]=ae(" Speed ",-1)),Oe(B("input",{"onUpdate:modelValue":x[2]||(x[2]=v=>ut(Z).speed=v),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[Bn,ut(Z).speed,void 0,{number:!0}]])])]),B("label",OT,[Oe(B("input",{"onUpdate:modelValue":x[3]||(x[3]=v=>ut(Z).drama=v),type:"checkbox"},null,512),[[vs,ut(Z).drama]]),x[8]||(x[8]=ae(" Extra drama ",-1)),x[9]||(x[9]=B("small",null,"– slow, smooth camera rotation during playback",-1))]),B("label",BT,[x[10]||(x[10]=ae(" Rotation speed ",-1)),Oe(B("input",{"onUpdate:modelValue":x[4]||(x[4]=v=>ut(Z).dramaSpeed=v),type:"range",min:"0.05",max:"1.2",step:"0.01"},null,512),[[Bn,ut(Z).dramaSpeed,void 0,{number:!0}]])]),B("label",kT,[Oe(B("input",{"onUpdate:modelValue":x[5]||(x[5]=v=>ut(Z).finale=v),type:"checkbox"},null,512),[[vs,ut(Z).finale]]),x[11]||(x[11]=ae(" Extra, extra drama ",-1)),x[12]||(x[12]=B("small",null,"– 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),B("label",zT,[Oe(B("input",{"onUpdate:modelValue":x[6]||(x[6]=v=>ut(Z).fullscreenOnPlay=v),type:"checkbox"},null,512),[[vs,ut(Z).fullscreenOnPlay]]),x[13]||(x[13]=ae(" Fullscreen mode ",-1)),x[14]||(x[14]=B("small",null,"When enabled, hitting Play makes the cube go fullscreen",-1))]),B("div",HT,[B("div",{style:Cn({width:`${ut(Z).pointer/Math.max(1,s.value)*100}%`})},null,4)]),l.value?(vt(),St("div",VT,[B("div",GT,[ae(Rt(u.value)+" ",1),B("small",null,"– "+Rt(l.value.step.label),1)]),B("div",WT,[(vt(!0),St(ce,null,Pe(l.value.step.moves,(v,y)=>(vt(),St("span",{key:y,class:Re(["move",{done:c.value>y,active:c.value===y}])},Rt(v),3))),128))])])):r.value?(vt(),St("p",XT,"Finished – the cube is solved.")):le("",!0),Ve(ST,{context:f.value},null,8,["context"]),x[15]||(x[15]=B("h3",null,"All stages",-1)),B("ol",$T,[(vt(!0),St(ce,null,Pe(i.value.stages,(v,y)=>(vt(),St("li",{key:v.id,class:Re({active:l.value&&l.value.stageIdx===y})},[B("div",qT,[ae(Rt(a(v.id).title)+" ",1),B("small",null,Rt(v.moves.length?`${v.moves.length} moves`:"already done"),1)]),B("div",YT,Rt(a(v.id).goal),1),v.steps.length?(vt(),St("ul",KT,[(vt(!0),St(ce,null,Pe(v.steps,(P,C)=>(vt(),St("li",{key:C},[B("span",jT,Rt(P.label),1),B("code",null,Rt(P.moves.join(" ")),1)]))),128))])):le("",!0)],2))),128))])],64)):le("",!0)]))}},JT=Hn(ZT,[["__scopeId","data-v-0b0d71c3"]]),QT={class:"app"},tA=["onClick"],eA={class:"stage"},nA={class:"overlay"},iA={key:0,class:"badge"},sA={key:1,class:"badge ok"},rA={key:0,class:"status ok small"},oA={key:1,class:"status bad small"},aA=["onMouseenter","onClick"],lA={__name:"App",setup(n){const t=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"}],e=Yt(null),i=Yt(null),s=Yt(Math.max(300,Math.min(window.innerHeight*.62,640))),r=Yt(!1),o=Yt(!1),a=Yt(!1),l=Yt({slot:null,x:0,y:0}),c=Yt(null),u=De(()=>{if(!i.value)return{};const m=i.value.getBoundingClientRect();if(l.value.slot!==null){const h=l.value.x-m.left,x=l.value.y-m.top;return{position:"absolute",left:`${h}px`,top:`${x}px`,transform:"translate(-50%,-50%)"}}return{position:"absolute",right:"12px",top:"12px"}});function f(m){Z.editing&&_m(m)}function d(m){r.value=!0;const h=m.clientY,x=s.value;function v(P){const C=P.clientY-h,L=Math.max(300,x+C);s.value=L}function y(){r.value=!1,window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",y)}window.addEventListener("pointermove",v),window.addEventListener("pointerup",y)}function p(m){var v;const h=(v=m.target)==null?void 0:v.tagName;if(h==="INPUT"||h==="TEXTAREA"||h==="SELECT"||m.ctrlKey||m.metaKey||m.altKey)return;const x=m.key.toUpperCase();!"UDLRFB".includes(x)||x.length!==1||Z.editing||(m.preventDefault(),Yi(m.shiftKey?`${x}'`:x))}oo(()=>{ME((m,h,x)=>e.value.animate(m,h,x)),SE(()=>e.value.explode()),window.addEventListener("keydown",p),document.addEventListener("fullscreenchange",()=>{o.value=!!document.fullscreenElement,o.value||(a.value=!1)})});function g(m){l.value=m||{slot:null,x:0,y:0}}rr(()=>window.removeEventListener("keydown",p)),Ue(()=>({playing:Z.playing,mode:Z.mode}),m=>{var h;m.mode==="solve"&&m.playing&&Z.fullscreenOnPlay&&((h=i.value)!=null&&h.requestFullscreen)&&i.value.requestFullscreen().catch(()=>{})},{immediate:!1}),Ue(()=>({ptr:Z.pointer,sol:Z.solution,exploding:Z.exploding,countdown:Z.countdown}),m=>{var x;m.sol&&m.ptr>=(((x=m.sol.moves)==null?void 0:x.length)??0)&&!m.exploding&&m.countdown===0&&document.fullscreenElement===i.value&&setTimeout(()=>a.value=!0,2e3)});function _(){document.fullscreenElement&&document.exitFullscreen()}return(m,h)=>(vt(),St("div",QT,[B("header",null,[h[4]||(h[4]=B("h1",null,"🧊 Rubik's Solver",-1)),B("nav",null,[(vt(),St(ce,null,Pe(t,x=>B("button",{key:x.id,class:Re({on:ut(Z).mode===x.id}),onClick:v=>ut(Z).mode=x.id},Rt(x.label),11,tA)),64))])]),B("main",null,[B("div",eA,[B("div",{class:"viewport",ref_key:"viewport",ref:i,style:Cn({height:s.value+"px"})},[Ve(aE,{ref_key:"cube",ref:e,n:ut(Z).n,state:ut(Ye),paintable:ut(Z).editing,locked:ut(Z).busy||ut(Z).exploding,drama:ut(Z).drama&&ut(Z).playing,dramaSpeed:ut(Z).dramaSpeed,rumble:ut(Z).countdown?(4-ut(Z).countdown)/3:0,onPaint:f,onLayerturn:h[0]||(h[0]=x=>ut(Yi)(x)),onHoverInfo:g},null,8,["n","state","paintable","locked","drama","dramaSpeed","rumble"]),B("div",nA,[B("button",{title:"Reset camera",onClick:h[1]||(h[1]=x=>{var v;return(v=e.value)==null?void 0:v.resetView()})},"⟲ View"),ut(Z).editing?(vt(),St("span",iA,"Painting: click stickers")):ut(Ea)?(vt(),St("span",sA,"Solved ✓")):le("",!0),ut(Z).mode==="setup"?(vt(),St("div",{key:2,class:Re(["validity",{ok:ut(sr).ok}])},[ut(sr).ok?(vt(),St("p",rA,"This position is valid and solvable.")):(vt(),St("ul",oA,[(vt(!0),St(ce,null,Pe(ut(sr).errors,x=>(vt(),St("li",{key:x},Rt(x),1))),128))]))],2)):le("",!0),o.value&&a.value?(vt(),St("button",{key:3,class:"exit-fullscreen",onClick:h[2]||(h[2]=x=>_())}," Exit Fullscreen mode ")):le("",!0),ut(Z).mode==="setup"&&ut(Z).showAllColorsOnHover?(vt(),St("div",{key:4,class:"hover-palette",style:Cn(u.value)},[l.value.slot!==null?(vt(!0),St(ce,{key:0},Pe(ut(no),(x,v)=>(vt(),St("button",{key:v,class:"mini-swatch",style:Cn({background:x,border:v===ut(Z).brush?"2px solid #000":v===c.value?"2px solid #39f":"2px solid transparent"}),onMouseenter:y=>c.value=v,onMouseleave:h[3]||(h[3]=y=>c.value=null),onClick:y=>ut(Z).brush=v},null,44,aA))),128)):(vt(),St("div",{key:1,class:"full-swatch",style:Cn({background:ut(no)[ut(Z).brush]})},null,4))],4)):le("",!0)]),ut(Z).countdown?(vt(),St("div",{key:ut(Z).countdown,class:"countdown","aria-live":"assertive"},[B("span",null,Rt(ut(Z).countdown),1)])):le("",!0),B("div",{class:"resize-handle",onPointerdown:Q_(d,["prevent"])},null,32)],4),Ve(GE),Ve(T1),h[5]||(h[5]=B("p",{class:"keys"}," Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise). ",-1))]),B("aside",null,[ut(Z).mode==="setup"?(vt(),Ys(Ww,{key:0})):ut(Z).mode==="solve"?(vt(),Ys(JT,{key:1})):ut(Z).mode==="learn"?(vt(),Ys(kE,{key:2})):ut(Z).mode==="settings"?(vt(),Ys(hT,{key:3})):(vt(),Ys(c1,{key:4}))])])]))}};iv(lA).mount("#app");
