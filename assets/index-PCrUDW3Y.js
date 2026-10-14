(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ct={},ws=[],li=()=>{},Ud=()=>!1,Ka=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ja=n=>n.startsWith("onUpdate:"),ln=Object.assign,Au=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},eg=Object.prototype.hasOwnProperty,yt=(n,e)=>eg.call(n,e),je=Array.isArray,Qi=n=>xo(n)==="[object Map]",Ni=n=>xo(n)==="[object Set]",_f=n=>xo(n)==="[object Date]",rt=n=>typeof n=="function",Vt=n=>typeof n=="string",hi=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",Nd=n=>(wt(n)||rt(n))&&rt(n.then)&&rt(n.catch),Fd=Object.prototype.toString,xo=n=>Fd.call(n),tg=n=>xo(n).slice(8,-1),Od=n=>xo(n)==="[object Object]",Cu=n=>Vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Kr=Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ng=/-\w/g,Xn=Ja(n=>n.replace(ng,e=>e.slice(1).toUpperCase())),ig=/\B([A-Z])/g,cs=Ja(n=>n.replace(ig,"-$1").toLowerCase()),Bd=Ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),ml=Ja(n=>n?`on${Bd(n)}`:""),ri=(n,e)=>!Object.is(n,e),fa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},kd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Za=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xf;const Qa=()=>xf||(xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ci(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Vt(i)?ag(i):ci(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Vt(n)||wt(n))return n}const sg=/;(?![^(]*\))/g,rg=/:([^]+)/,og=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ag(n){const e={};return n.replace(og,t=>t.startsWith("/*")?"":t).split(sg).forEach(t=>{if(t){const i=t.split(rg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(n){let e="";if(Vt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=Ot(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cg=Tu(lg);function zd(n){return!!n||n===""}function ug(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Kn(n[s],e[s],t);return i}function yf(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Kn(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function fg(n,e,t){let i=Qi(n),s=Qi(e);if(i||s||(i=Ni(n),s=Ni(e),i||s))return i&&s?yf(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Kn(n[a],e[a],t))return!1}return String(n)===String(e)}function Mf(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Kn(n,e,t){if(n===e)return!0;let i=_f(n),s=_f(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=hi(n),s=hi(e),i||s?n===e:(i=je(n),s=je(e),i||s?i&&s?Mf(n,e,t,ug):!1:(i=wt(n),s=wt(e),i||s?!i||!s?!1:Mf(n,e,t,fg):String(n)===String(e))))}function Ru(n,e){return n.findIndex(t=>Kn(t,e))}const Hd=n=>!!(n&&n.__v_isRef===!0),Se=n=>Vt(n)?n:n==null?"":je(n)||wt(n)&&(n.toString===Fd||!rt(n.toString))?Hd(n)?Se(n.value):JSON.stringify(n,Vd,2):String(n),Vd=(n,e)=>Hd(e)?Vd(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[gl(i,r)+" =>"]=s,t),{})}:Ni(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>gl(t))}:hi(e)?gl(e):wt(e)&&!je(e)&&!Od(e)?String(e):e,gl=(n,e="")=>{var t;return hi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Zt&&(Zt.active?(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){if(this._on>0&&--this._on===0){if(Zt===this)Zt=this.prevScope;else{let e=Zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dg(){return Zt}let Pt;const vl=new WeakSet;class Gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&(Zt.active?Zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vl.has(this)&&(vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sf(this),Xd(this);const e=Pt,t=qn;Pt=this,qn=!0;try{return this.fn()}finally{qd(this),Pt=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Du(e);this.deps=this.depsTail=void 0,Sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hc(this)&&this.run()}get dirty(){return hc(this)}}let Wd=0,jr,Jr;function $d(n,e=!1){if(n.flags|=8,e){n.next=Jr,Jr=n;return}n.next=jr,jr=n}function Pu(){Wd++}function Lu(){if(--Wd>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;jr;){let e=jr;for(jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Xd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Du(i),pg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function hc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Yd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===so)||(n.globalVersion=so,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!hc(n))))return;n.flags|=2;const e=n.dep,t=Pt,i=qn;Pt=n,qn=!0;try{Xd(n);const s=n.fn(n._value);(e.version===0||ri(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pt=t,qn=i,qd(n),n.flags&=-3}}function Du(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Du(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const Kd=[];function Fi(){Kd.push(qn),qn=!1}function Oi(){const n=Kd.pop();qn=n===void 0?!0:n}function Sf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Pt;Pt=void 0;try{e()}finally{Pt=t}}}let so=0;class mg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Iu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pt||!qn||Pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Pt)t=this.activeLink=new mg(Pt,this),Pt.deps?(t.prevDep=Pt.depsTail,Pt.depsTail.nextDep=t,Pt.depsTail=t):Pt.deps=Pt.depsTail=t,jd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Pt.depsTail,t.nextDep=void 0,Pt.depsTail.nextDep=t,Pt.depsTail=t,Pt.deps===t&&(Pt.deps=i)}return t}trigger(e){this.version++,so++,this.notify(e)}notify(e){Pu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lu()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const dc=new WeakMap,Rs=Symbol(""),pc=Symbol(""),ro=Symbol("");function nn(n,e,t){if(qn&&Pt){let i=dc.get(n);i||dc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Iu),s.map=i,s.key=t),s.track()}}function Ti(n,e,t,i,s,r){const o=dc.get(n);if(!o){so++;return}const a=l=>{l&&l.trigger()};if(Pu(),e==="clear")o.forEach(a);else{const l=je(n),c=l&&Cu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ro||!hi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ro)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Rs)),Qi(n)&&a(o.get(pc)));break;case"delete":l||(a(o.get(Rs)),Qi(n)&&a(o.get(pc)));break;case"set":Qi(n)&&a(o.get(Rs));break}}Lu()}function Hs(n){const e=xt(n);return e===n||(nn(e,"iterate",ro),On(n))?e:di(n)?es(n)?e.map(t=>rs(Bn(t))):e.map(rs):e.map(Bn)}function el(n){return nn(n=xt(n),"iterate",ro),n}function ni(n,e){return di(n)?rs(es(n)?Bn(e):e):Bn(e)}const gg={__proto__:null,[Symbol.iterator](){return _l(this,Symbol.iterator,n=>ni(this,n))},concat(...n){return Hs(this).concat(...n.map(e=>je(e)?Hs(e):e))},entries(){return _l(this,"entries",n=>(n[1]=ni(this,n[1]),n))},every(n,e){return gi(this,"every",n,e,void 0,arguments)},filter(n,e){return gi(this,"filter",n,e,t=>t.map(i=>ni(this,i)),arguments)},find(n,e){return gi(this,"find",n,e,t=>ni(this,t),arguments)},findIndex(n,e){return gi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gi(this,"findLast",n,e,t=>ni(this,t),arguments)},findLastIndex(n,e){return gi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gi(this,"forEach",n,e,void 0,arguments)},includes(...n){return xl(this,"includes",n)},indexOf(...n){return xl(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return xl(this,"lastIndexOf",n)},map(n,e){return gi(this,"map",n,e,void 0,arguments)},pop(){return Ir(this,"pop")},push(...n){return Ir(this,"push",n)},reduce(n,...e){return bf(this,"reduce",n,e)},reduceRight(n,...e){return bf(this,"reduceRight",n,e)},shift(){return Ir(this,"shift")},some(n,e){return gi(this,"some",n,e,void 0,arguments)},splice(...n){return Ir(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Ir(this,"unshift",n)},values(){return _l(this,"values",n=>ni(this,n))}};function _l(n,e,t){const i=el(n),s=i[e]();return i!==n&&!On(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const vg=Array.prototype;function gi(n,e,t,i,s,r){const o=el(n),a=o!==n&&!On(n),l=o[e];if(l!==vg[e]){const f=l.apply(n,r);return a?Bn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,ni(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bf(n,e,t,i){const s=el(n),r=s!==n&&!On(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ni(n,c)),t.call(this,c,ni(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?ni(n,l):l}function xl(n,e,t){const i=xt(n);nn(i,"iterate",ro);const s=i[e](...t);return(s===-1||s===!1)&&Fu(t[0])?(t[0]=xt(t[0]),i[e](...t)):s}function Ir(n,e,t=[]){Fi(),Pu();const i=xt(n)[e].apply(n,t);return Lu(),Oi(),i}const _g=Tu("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hi));function xg(n){hi(n)||(n=String(n));const e=xt(this);return nn(e,"has",n),e.hasOwnProperty(n)}class Zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Rg:np:r?tp:ep).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=gg[t]))return l;if(t==="hasOwnProperty")return xg}const a=Reflect.get(e,t,on(e)?e:i);if((hi(t)?Jd.has(t):_g(t))||(s||nn(e,"get",t),r))return a;if(on(a)){const l=o&&Cu(t)?a:a.value;return s&&wt(l)?gc(l):l}return wt(a)?s?gc(a):Fn(a):a}}class Qd extends Zd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=je(e)&&Cu(t);if(!this._isShallow){const c=di(r);if(!On(i)&&!di(i)&&(r=xt(r),i=xt(i)),!o&&on(r)&&!on(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:yt(e,t),l=Reflect.set(e,t,i,on(e)?e:s);return e===xt(s)&&l&&(a?ri(i,r)&&Ti(e,"set",t,i):Ti(e,"add",t,i)),l}deleteProperty(e,t){const i=yt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ti(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!hi(t)||!Jd.has(t))&&nn(e,"has",t),i}ownKeys(e){return nn(e,"iterate",je(e)?"length":Rs),Reflect.ownKeys(e)}}class yg extends Zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Mg=new Qd,Sg=new yg,bg=new Qd(!0);const mc=n=>n,Co=n=>Reflect.getPrototypeOf(n);function Eg(n,e,t){return function(...i){const s=this.__v_raw,r=xt(s),o=Qi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?mc:e?rs:Bn;return!e&&nn(r,"iterate",l?pc:Rs),ln(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wg(n,e){const t={get(s){const r=this.__v_raw,o=xt(r),a=xt(s);n||(ri(s,a)&&nn(o,"get",s),nn(o,"get",a));const{has:l}=Co(o),c=e?mc:n?rs:Bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&nn(xt(s),"iterate",Rs),s.size},has(s){const r=this.__v_raw,o=xt(r),a=xt(s);return n||(ri(s,a)&&nn(o,"has",s),nn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=xt(a),c=e?mc:n?rs:Bn;return!n&&nn(l,"iterate",Rs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return ln(t,n?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(s){const r=xt(this),o=Co(r),a=xt(s),l=!e&&!On(s)&&!di(s)?a:s;return o.has.call(r,l)||ri(s,l)&&o.has.call(r,s)||ri(a,l)&&o.has.call(r,a)||(r.add(l),Ti(r,"add",l,l)),this},set(s,r){!e&&!On(r)&&!di(r)&&(r=xt(r));const o=xt(this),{has:a,get:l}=Co(o);let c=a.call(o,s);c||(s=xt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ri(r,u)&&Ti(o,"set",s,r):Ti(o,"add",s,r),this},delete(s){const r=xt(this),{has:o,get:a}=Co(r);let l=o.call(r,s);l||(s=xt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ti(r,"delete",s,void 0),c},clear(){const s=xt(this),r=s.size!==0,o=s.clear();return r&&Ti(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Eg(s,n,e)}),t}function Uu(n,e){const t=wg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(yt(t,s)&&s in i?t:i,s,r)}const Tg={get:Uu(!1,!1)},Ag={get:Uu(!1,!0)},Cg={get:Uu(!0,!1)};const ep=new WeakMap,tp=new WeakMap,np=new WeakMap,Rg=new WeakMap;function Pg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fn(n){return di(n)?n:Nu(n,!1,Mg,Tg,ep)}function Lg(n){return Nu(n,!1,bg,Ag,tp)}function gc(n){return Nu(n,!0,Sg,Cg,np)}function Nu(n,e,t,i,s){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Pg(tg(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function es(n){return di(n)?es(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function On(n){return!!(n&&n.__v_isShallow)}function Fu(n){return n?!!n.__v_raw:!1}function xt(n){const e=n&&n.__v_raw;return e?xt(e):n}function Dg(n){return!yt(n,"__v_skip")&&Object.isExtensible(n)&&kd(n,"__v_skip",!0),n}const Bn=n=>wt(n)?Fn(n):n,rs=n=>wt(n)?gc(n):n;function on(n){return n?n.__v_isRef===!0:!1}function Ye(n){return ip(n,!1)}function Ig(n){return ip(n,!0)}function ip(n,e){return on(n)?n:new Ug(n,e)}class Ug{constructor(e,t){this.dep=new Iu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:xt(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||On(e)||di(e);e=i?e:xt(e),ri(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function Y(n){return on(n)?n.value:n}const Ng={get:(n,e,t)=>e==="__v_raw"?n:Y(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return on(s)&&!on(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function sp(n){return es(n)?n:new Proxy(n,Ng)}class Fg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Iu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=so-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return $d(this,!0),!0}get value(){const e=this.dep.track();return Yd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Og(n,e,t=!1){let i,s;return rt(n)?i=n:(i=n.get,s=n.set),new Fg(i,s,t)}const Po={},Ra=new WeakMap;let xs;function Bg(n,e=!1,t=xs){if(t){let i=Ra.get(t);i||Ra.set(t,i=[]),i.push(n)}}function kg(n,e,t=Ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:On(x)||s===!1||s===0?Ai(x,1):Ai(x);let u,f,d,p,g=!1,v=!1;if(on(n)?(f=()=>n.value,g=On(n)):es(n)?(f=()=>c(n),g=!0):je(n)?(v=!0,g=n.some(x=>es(x)||On(x)),f=()=>n.map(x=>{if(on(x))return x.value;if(es(x))return c(x);if(rt(x))return l?l(x,2):x()})):rt(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Fi();try{d()}finally{Oi()}}const x=xs;xs=u;try{return l?l(n,3,[p]):n(p)}finally{xs=x}}:f=li,e&&s){const x=f,P=s===!0?1/0:s;f=()=>Ai(x(),P)}const m=dg(),h=()=>{u.stop(),m&&m.active&&Au(m.effects,u)};if(r&&e){const x=e;e=(...P)=>{const A=x(...P);return h(),A}}let y=v?new Array(n.length).fill(Po):Po;const _=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(x||s||g||(v?P.some((A,L)=>ri(A,y[L])):ri(P,y))){d&&d();const A=xs;xs=u;try{const L=[P,y===Po?void 0:v&&y[0]===Po?[]:y,p];y=P,l?l(e,3,L):e(...L)}finally{xs=A}}}else u.run()};return a&&a(_),u=new Gd(f),u.scheduler=o?()=>o(_,!1):_,p=x=>Bg(x,!1,u),d=u.onStop=()=>{const x=Ra.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Ra.delete(u)}},e?i?_(!0):y=u.run():o?o(_.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ai(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,on(n))Ai(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)Ai(n[i],e,t);else if(Ni(n)||Qi(n))n.forEach(i=>{Ai(i,e,t)});else if(Od(n)){for(const i in n)Ai(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ai(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(n,e,t,i){try{return i?n(...i):n()}catch(s){tl(s,e,t)}}function jn(n,e,t,i){if(rt(n)){const s=yo(n,e,t,i);return s&&Nd(s)&&s.catch(r=>{tl(r,e,t)}),s}if(je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(jn(n[r],e,t,i));return s}}function tl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Fi(),yo(r,null,10,[n,l,c]),Oi();return}}zg(n,t,s,i,o)}function zg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const hn=[];let ti=-1;const pr=[];let Ki=null,lr=0;const rp=Promise.resolve();let Pa=null;function Ou(n){const e=Pa||rp;return n?e.then(this?n.bind(this):n):e}function Hg(n){let e=ti+1,t=hn.length;for(;e<t;){const i=e+t>>>1,s=hn[i],r=oo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Bu(n){if(!(n.flags&1)){const e=oo(n),t=hn[hn.length-1];!t||!(n.flags&2)&&e>=oo(t)?hn.push(n):hn.splice(Hg(e),0,n),n.flags|=1,op()}}function op(){Pa||(Pa=rp.then(lp))}function Vg(n){if(!je(n))Ki&&n.id===-1?Ki.splice(lr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)pr.push(n[e]);op()}function Ef(n,e,t=ti+1){for(;t<hn.length;t++){const i=hn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;hn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ap(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>oo(t)-oo(i));if(pr.length=0,Ki){for(let t=0;t<e.length;t++)Ki.push(e[t]);return}for(Ki=e,lr=0;lr<Ki.length;lr++){const t=Ki[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ki=null,lr=0}}const oo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lp(n){try{for(ti=0;ti<hn.length;ti++){const e=hn[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<hn.length;ti++){const e=hn[ti];e&&(e.flags&=-2)}ti=-1,hn.length=0,ap(),Pa=null,(hn.length||pr.length)&&lp()}}let In=null,cp=null;function La(n){const e=In;return In=n,cp=n&&n.type.__scopeId||null,e}function Gg(n,e=In,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nf(-1);const r=La(e),o=Ps.length;let a;try{a=n(...s)}finally{for(let l=Ps.length;l>o;l--)Ip();La(r),i._d&&Nf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ft(n,e){if(In===null)return n;const t=ol(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ct]=e[s];r&&(rt(r)&&(r={mounted:r,updated:r}),r.deep&&Ai(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function us(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Fi(),jn(l,t,8,[n.el,a,n,e]),Oi())}}function Wg(n,e){if(dn){let t=dn.provides;const i=dn.parent&&dn.parent.provides;i===t&&(t=dn.provides=Object.create(i)),t[n]=e}}function ha(n,e,t=!1){const i=zv();if(i||mr){let s=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&rt(e)?e.call(i&&i.proxy):e}}const $g=Symbol.for("v-scx"),Xg=()=>ha($g);function Bt(n,e,t){return up(n,e,t)}function up(n,e,t=Ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=ln({},t),l=e&&i||!e&&r!=="post";let c;if(co){if(r==="sync"){const p=Xg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=li,p.resume=li,p.pause=li,p}}const u=dn;a.call=(p,g,v)=>jn(p,u,g,v);let f=!1;r==="post"?a.scheduler=p=>{gn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Bu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=kg(n,e,a);return co&&(c?c.push(d):l&&d()),d}function qg(n,e,t){const i=this.proxy,s=Vt(n)?n.includes(".")?fp(i,n):()=>i[n]:n.bind(i,i);let r;rt(e)?r=e:(r=e.handler,t=e);const o=So(this),a=up(s,r.bind(i),t);return o(),a}function fp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Yg=Symbol("_vte"),nl=n=>n.__isTeleport,yl=Symbol("_leaveCb");function Kg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bi){e=t;break}}return e}function hp(n){if(!zu(n))return nl(n.type)&&n.children?Kg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&rt(t.default))return t.default()}}function ku(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;ku(nl(t.type)&&hp(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function dp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Da=new WeakMap;function Zr(n,e,t,i,s=!1){if(je(n)){n.forEach((v,m)=>Zr(v,e&&(je(e)?e[m]:e),t,i,s));return}if(Qr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ol(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ct?a.refs={}:a.refs,f=a.setupState,d=xt(f),p=f===Ct?Ud:v=>wf(u,v)?!1:yt(d,v),g=(v,m)=>!(m&&wf(u,m));if(c!=null&&c!==l){if(Tf(e),Vt(c))u[c]=null,p(c)&&(f[c]=null);else if(on(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(rt(l))yo(l,a,12,[o,u]);else{const v=Vt(l),m=on(l);if(v||m){const h=()=>{if(n.f){const y=v?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)je(y)&&Au(y,r);else if(je(y))y.includes(r)||y.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const _=[r];g(l,n.k)&&(l.value=_),n.k&&(u[n.k]=_)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{h(),Da.delete(n)};y.id=-1,Da.set(n,y),gn(y,t)}else Tf(n),h()}}}function Tf(n){const e=Da.get(n);e&&(e.flags|=8,Da.delete(n))}Qa().requestIdleCallback;Qa().cancelIdleCallback;const Qr=n=>!!n.type.__asyncLoader,zu=n=>n.type.__isKeepAlive;function jg(n,e){pp(n,"a",e)}function Jg(n,e){pp(n,"da",e)}function pp(n,e,t=dn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(il(e,i,t),t){let s=t.parent;for(;s&&s.parent;)zu(s.parent.vnode)&&Zg(i,e,t,s),s=s.parent}}function Zg(n,e,t,i){const s=il(e,n,i,!0);mp(()=>{Au(i[e],s)},t)}function il(n,e,t=dn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=So(t),l=jn(e,t,n,o);return a(),Oi(),l});return i?s.unshift(r):s.push(r),r}}const zi=n=>(e,t=dn)=>{(!co||n==="sp")&&il(n,(...i)=>e(...i),t)},Qg=zi("bm"),Mo=zi("m"),ev=zi("bu"),tv=zi("u"),Ls=zi("bum"),mp=zi("um"),nv=zi("sp"),iv=zi("rtg"),sv=zi("rtc");function rv(n,e=dn){il("ec",n,e)}const ov=Symbol.for("v-ndc");function zt(n,e,t,i){let s;const r=t,o=je(n);if(o||Vt(n)){const a=o&&es(n);let l=!1,c=!1;a&&(l=!On(n),c=di(n),n=el(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?rs(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(wt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const vc=n=>n?Op(n)?ol(n):vc(n.parent):null,eo=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vc(n.parent),$root:n=>vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vp(n),$forceUpdate:n=>n.f||(n.f=()=>{Bu(n.update)}),$nextTick:n=>n.n||(n.n=Ou.bind(n.proxy)),$watch:n=>qg.bind(n)}),Ml=(n,e)=>n!==Ct&&!n.__isScriptSetup&&yt(n,e),av={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ml(i,e))return o[e]=1,i[e];if(s!==Ct&&yt(s,e))return o[e]=2,s[e];if(yt(r,e))return o[e]=3,r[e];if(t!==Ct&&yt(t,e))return o[e]=4,t[e];_c&&(o[e]=0)}}const c=eo[e];let u,f;if(c)return e==="$attrs"&&nn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ct&&yt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,yt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ml(s,e)?(s[e]=t,!0):i!==Ct&&yt(i,e)?(i[e]=t,!0):yt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ct&&a[0]!=="$"&&yt(n,a)||Ml(e,a)||yt(r,a)||yt(i,a)||yt(eo,a)||yt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:yt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Af(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _c=!0;function lv(n){const e=vp(n),t=n.proxy,i=n.ctx;_c=!1,e.beforeCreate&&Cf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:_,unmounted:x,render:P,renderTracked:A,renderTriggered:L,errorCaptured:N,serverPrefetch:w,expose:M,inheritAttrs:D,components:Q,directives:J,filters:V}=e;if(c&&cv(c,i,null),o)for(const oe in o){const X=o[oe];rt(X)&&(i[oe]=X.bind(t))}if(s){const oe=s.call(t,t);wt(oe)&&(n.data=Fn(oe))}if(_c=!0,r)for(const oe in r){const X=r[oe],be=rt(X)?X.bind(t,t):rt(X.get)?X.get.bind(t,t):li,j=!rt(X)&&rt(X.set)?X.set.bind(t):li,F=Nt({get:be,set:j});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>F.value,set:K=>F.value=K})}if(a)for(const oe in a)gp(a[oe],i,t,oe);if(l){const oe=rt(l)?l.call(t):l;Reflect.ownKeys(oe).forEach(X=>{Wg(X,oe[X])})}u&&Cf(u,n,"c");function B(oe,X){je(X)?X.forEach(be=>oe(be.bind(t))):X&&oe(X.bind(t))}if(B(Qg,f),B(Mo,d),B(ev,p),B(tv,g),B(jg,v),B(Jg,m),B(rv,N),B(sv,A),B(iv,L),B(Ls,y),B(mp,x),B(nv,w),je(M))if(M.length){const oe=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(oe,X,{get:()=>t[X],set:be=>t[X]=be,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===li&&(n.render=P),D!=null&&(n.inheritAttrs=D),Q&&(n.components=Q),J&&(n.directives=J),w&&dp(n)}function cv(n,e,t=li){je(n)&&(n=xc(n));for(const i in n){const s=n[i];let r;wt(s)?"default"in s?r=ha(s.from||i,s.default,!0):r=ha(s.from||i):r=ha(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Cf(n,e,t){jn(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function gp(n,e,t,i){let s=i.includes(".")?fp(t,i):()=>t[i];if(Vt(n)){const r=e[n];rt(r)&&Bt(s,r)}else if(rt(n))Bt(s,n.bind(t));else if(wt(n))if(je(n))n.forEach(r=>gp(r,e,t,i));else{const r=rt(n.handler)?n.handler.bind(t):e[n.handler];rt(r)&&Bt(s,r,n)}}function vp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ia(l,c,o,!0)),Ia(l,e,o)),wt(e)&&r.set(e,l),l}function Ia(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ia(n,r,t,!0),s&&s.forEach(o=>Ia(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=uv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const uv={data:Rf,props:Pf,emits:Pf,methods:Wr,computed:Wr,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Wr,directives:Wr,watch:hv,provide:Rf,inject:fv};function Rf(n,e){return e?n?function(){return ln(rt(n)?n.call(this,this):n,rt(e)?e.call(this,this):e)}:e:n}function fv(n,e){return Wr(xc(n),xc(e))}function xc(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function Wr(n,e){return n?ln(Object.create(null),n,e):e}function Pf(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:ln(Object.create(null),Af(n),Af(e??{})):e}function hv(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=un(n[i],e[i]);return t}function _p(){return{app:null,config:{isNativeTag:Ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dv=0;function pv(n,e){return function(i,s=null){rt(i)||(i=ln({},i)),s!=null&&!wt(s)&&(s=null);const r=_p(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:dv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&rt(u.install)?(o.add(u),u.install(c,...f)):rt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Wt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ol(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;const mv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xn(e)}Modifiers`]||n[`${cs(e)}Modifiers`];function gv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ct;let s=t;const r=e.startsWith("update:"),o=r&&mv(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Vt(u)?u.trim():u)),o.number&&(s=s.map(Za)));let a,l=i[a=ml(e)]||i[a=ml(Xn(e))];!l&&r&&(l=i[a=ml(cs(e))]),l&&jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jn(c,n,6,s)}}const vv=new WeakMap;function xp(n,e,t=!1){const i=t?vv:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!rt(n)){const l=c=>{const u=xp(c,e,!0);u&&(a=!0,ln(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(wt(n)&&i.set(n,null),null):(je(r)?r.forEach(l=>o[l]=null):ln(o,r),wt(n)&&i.set(n,o),o)}function sl(n,e){return!n||!Ka(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),yt(n,e[0].toLowerCase()+e.slice(1))||yt(n,cs(e))||yt(n,e))}function Lf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=La(n);let h,y;try{if(t.shapeFlag&4){const x=s||i,P=x;h=ii(c.call(P,x,u,f,p,d,g)),y=a}else{const x=e;h=ii(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=e.props?a:_v(a)}}catch(x){Ps.length=0,tl(x,n,1),h=Wt(Bi)}let _=h;if(y&&v!==!1){const x=Object.keys(y),{shapeFlag:P}=_;x.length&&P&7&&(r&&x.some(ja)&&(y=xv(y,r)),_=xr(_,y,!1,!0))}if(t.dirs&&(_=xr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition){const x=nl(_.type)&&hp(_)||_;ku(x,t.transition)}return h=_,La(m),h}const _v=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ka(t))&&((e||(e={}))[t]=n[t]);return e},xv=(n,e)=>{const t={};for(const i in n)(!ja(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function yv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(yp(o,i,d)&&!sl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Df(i,o,c):!0:!!o;return!1}function Df(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(yp(e,n,r)&&!sl(t,r))return!0}return!1}function yp(n,e,t){const i=n[t],s=e[t];return t==="style"&&wt(i)&&wt(s)?!Kn(i,s):i!==s}function Mv({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Mp={},Sp=()=>Object.create(Mp),bp=n=>Object.getPrototypeOf(n)===Mp;function Sv(n,e,t,i=!1){const s={},r=Sp();n.propsDefaults=Object.create(null),Ep(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Lg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=xt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(sl(n.emitsOptions,d))continue;const p=e[d];if(l)if(yt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Xn(d);s[g]=yc(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Ep(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!yt(e,f)&&((u=cs(f))===f||!yt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=yc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!yt(e,f))&&(delete r[f],c=!0)}c&&Ti(n.attrs,"set","")}function Ep(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;s&&yt(s,u=Xn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:sl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=xt(t),c=a||Ct;for(let u=0;u<r.length;u++){const f=r[u];t[f]=yc(s,l,f,c[f],n,!yt(c,f))}}return o}function yc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=yt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=So(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cs(t))&&(i=!0))}return i}const Ev=new WeakMap;function wp(n,e,t=!1){const i=t?Ev:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!rt(n)){const u=f=>{l=!0;const[d,p]=wp(f,e,!0);ln(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return wt(n)&&i.set(n,ws),ws;if(je(r))for(let u=0;u<r.length;u++){const f=Xn(r[u]);If(f)&&(o[f]=Ct)}else if(r)for(const u in r){const f=Xn(u);if(If(f)){const d=r[u],p=o[f]=je(d)||rt(d)?{type:d}:ln({},d),g=p.type;let v=!1,m=!0;if(je(g))for(let h=0;h<g.length;++h){const y=g[h],_=rt(y)&&y.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(m=!1)}else v=rt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||yt(p,"default"))&&a.push(f)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function If(n){return n[0]!=="$"&&!Kr(n)}const Hu=n=>n==="_"||n==="_ctx"||n==="$stable",Vu=n=>je(n)?n.map(ii):[ii(n)],wv=(n,e,t)=>{if(e._n)return e;const i=Gg((...s)=>Vu(e(...s)),t);return i._c=!1,i},Tp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hu(s))continue;const r=n[s];if(rt(r))e[s]=wv(s,r,i);else if(r!=null){const o=Vu(r);e[s]=()=>o}}},Ap=(n,e)=>{const t=Vu(e);n.slots.default=()=>t},Cp=(n,e,t)=>{for(const i in e)(t||!Hu(i))&&(n[i]=e[i])},Tv=(n,e,t)=>{const i=n.slots=Sp();if(n.vnode.shapeFlag&32){const s=e._;s?(Cp(i,e,t),t&&kd(i,"_",s,!0)):Tp(e,i)}else e&&Ap(n,e)},Av=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Cp(s,e,t):(r=!e.$stable,Tp(e,s)),o=e}else e&&(Ap(n,e),o={default:1});if(r)for(const a in s)!Hu(a)&&o[a]==null&&delete s[a]},gn=Dv;function Cv(n){return Rv(n)}function Rv(n,e){const t=Qa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=li,insertStaticContent:g}=n,v=(C,U,T,pe=null,se=null,re=null,ce=void 0,me=null,ae=!!U.dynamicChildren)=>{if(C===U)return;C&&!Ur(C,U)&&(pe=ve(C),K(C,se,re,!0),C=null),U.patchFlag===-2&&(ae=!1,U.dynamicChildren=null),U.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(U.dynamicChildren===ws&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:b,ref:S,shapeFlag:I}=U;switch(b){case rl:m(C,U,T,pe);break;case Bi:h(C,U,T,pe);break;case da:C==null&&y(U,T,pe,ce);break;case ft:Q(C,U,T,pe,se,re,ce,me,ae);break;default:I&1?P(C,U,T,pe,se,re,ce,me,ae):I&6?J(C,U,T,pe,se,re,ce,me,ae):(I&64||I&128)&&b.process(C,U,T,pe,se,re,ce,me,ae,Ze)}S!=null&&se?Zr(S,C&&C.ref,re,U||C,!U):S==null&&C&&C.ref!=null&&Zr(C.ref,null,re,C,!0)},m=(C,U,T,pe)=>{if(C==null)i(U.el=a(U.children),T,pe);else{const se=U.el=C.el;U.children!==C.children&&c(se,U.children)}},h=(C,U,T,pe)=>{C==null?i(U.el=l(U.children||""),T,pe):U.el=C.el},y=(C,U,T,pe)=>{[C.el,C.anchor]=g(C.children,U,T,pe,C.el,C.anchor)},_=({el:C,anchor:U},T,pe)=>{let se;for(;C&&C!==U;)se=d(C),i(C,T,pe),C=se;i(U,T,pe)},x=({el:C,anchor:U})=>{let T;for(;C&&C!==U;)T=d(C),s(C),C=T;s(U)},P=(C,U,T,pe,se,re,ce,me,ae)=>{if(U.type==="svg"?ce="svg":U.type==="math"&&(ce="mathml"),C==null)A(U,T,pe,se,re,ce,me,ae);else{const b=C.el&&C.el._isVueCE?C.el:null;try{b&&b._beginPatch(),w(C,U,se,re,ce,me,ae)}finally{b&&b._endPatch()}}},A=(C,U,T,pe,se,re,ce,me)=>{let ae,b;const{props:S,shapeFlag:I,transition:q,dirs:ee}=C;if(ae=C.el=o(C.type,re,S&&S.is,S),I&8?u(ae,C.children):I&16&&N(C.children,ae,null,pe,se,Sl(C,re),ce,me),ee&&us(C,null,pe,"created"),L(ae,C,C.scopeId,ce,pe),S){for(const we in S)we!=="value"&&!Kr(we)&&r(ae,we,null,S[we],re,pe);"value"in S&&r(ae,"value",null,S.value,re),(b=S.onVnodeBeforeMount)&&ei(b,pe,C)}ee&&us(C,null,pe,"beforeMount");const ne=Pv(se,q);ne&&q.beforeEnter(ae),i(ae,U,T),((b=S&&S.onVnodeMounted)||ne||ee)&&gn(()=>{try{b&&ei(b,pe,C),ne&&q.enter(ae),ee&&us(C,null,pe,"mounted")}finally{}},se)},L=(C,U,T,pe,se)=>{if(T&&p(C,T),pe)for(let re=0;re<pe.length;re++)p(C,pe[re]);if(se){let re=se.subTree;if(U===re||Dp(re.type)&&(re.ssContent===U||re.ssFallback===U)){const ce=se.vnode;L(C,ce,ce.scopeId,ce.slotScopeIds,se.parent)}}},N=(C,U,T,pe,se,re,ce,me,ae=0)=>{for(let b=ae;b<C.length;b++){const S=C[b]=me?Ei(C[b]):ii(C[b]);v(null,S,U,T,pe,se,re,ce,me)}},w=(C,U,T,pe,se,re,ce)=>{const me=U.el=C.el;let{patchFlag:ae,dynamicChildren:b,dirs:S}=U;ae|=C.patchFlag&16;const I=C.props||Ct,q=U.props||Ct;let ee;if(T&&fs(T,!1),(ee=q.onVnodeBeforeUpdate)&&ei(ee,T,U,C),S&&us(U,C,T,"beforeUpdate"),T&&fs(T,!0),b&&(!C.dynamicChildren||C.dynamicChildren.length!==b.length)&&(ae=0,ce=!1,b=null),(I.innerHTML&&q.innerHTML==null||I.textContent&&q.textContent==null)&&u(me,""),b?M(C.dynamicChildren,b,me,T,pe,Sl(U,se),re):ce||X(C,U,me,null,T,pe,Sl(U,se),re,!1),ae>0){if(ae&16)D(me,I,q,T,se);else if(ae&2&&I.class!==q.class&&r(me,"class",null,q.class,se),ae&4&&r(me,"style",I.style,q.style,se),ae&8){const ne=U.dynamicProps;for(let we=0;we<ne.length;we++){const xe=ne[we],Ae=I[xe],qe=q[xe];(qe!==Ae||xe==="value")&&r(me,xe,Ae,qe,se,T)}}ae&1&&C.children!==U.children&&u(me,U.children)}else!ce&&b==null&&D(me,I,q,T,se);((ee=q.onVnodeUpdated)||S)&&gn(()=>{ee&&ei(ee,T,U,C),S&&us(U,C,T,"updated")},pe)},M=(C,U,T,pe,se,re,ce)=>{for(let me=0;me<U.length;me++){const ae=C[me],b=U[me],S=ae.el&&(ae.type===ft||!Ur(ae,b)||ae.shapeFlag&198)?f(ae.el):T;v(ae,b,S,null,pe,se,re,ce,!0)}},D=(C,U,T,pe,se)=>{if(U!==T){if(U!==Ct)for(const re in U)!Kr(re)&&!(re in T)&&r(C,re,U[re],null,se,pe);for(const re in T){if(Kr(re))continue;const ce=T[re],me=U[re];ce!==me&&re!=="value"&&r(C,re,me,ce,se,pe)}"value"in T&&r(C,"value",U.value,T.value,se)}},Q=(C,U,T,pe,se,re,ce,me,ae)=>{const b=U.el=C?C.el:a(""),S=U.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:q,slotScopeIds:ee}=U;ee&&(me=me?me.concat(ee):ee),C==null?(i(b,T,pe),i(S,T,pe),N(U.children||[],T,S,se,re,ce,me,ae)):I>0&&I&64&&q&&C.dynamicChildren&&C.dynamicChildren.length===q.length?(M(C.dynamicChildren,q,T,se,re,ce,me),(U.key!=null||se&&U===se.subTree)&&Rp(C,U,!0)):X(C,U,T,S,se,re,ce,me,ae)},J=(C,U,T,pe,se,re,ce,me,ae)=>{U.slotScopeIds=me,C==null?U.shapeFlag&512?se.ctx.activate(U,T,pe,ce,ae):V(U,T,pe,se,re,ce,ae):$(C,U,ae)},V=(C,U,T,pe,se,re,ce)=>{const me=C.component=kv(C,pe,se);if(zu(C)&&(me.ctx.renderer=Ze),Hv(me,!1,ce),me.asyncDep){if(se&&se.registerDep(me,B,ce),!C.el){const ae=me.subTree=Wt(Bi);h(null,ae,U,T),C.placeholder=ae.el}}else B(me,C,U,T,se,re,ce)},$=(C,U,T)=>{const pe=U.component=C.component;if(yv(C,U,T))if(pe.asyncDep&&!pe.asyncResolved){U.el=C.el,oe(pe,U,T);return}else pe.next=U,pe.update();else U.el=C.el,pe.vnode=U},B=(C,U,T,pe,se,re,ce)=>{const me=()=>{if(C.isMounted){let{next:I,bu:q,u:ee,parent:ne,vnode:we}=C;{const Ie=Pp(C);if(Ie){I&&(I.el=we.el,oe(C,I,ce)),Ie.asyncDep.then(()=>{gn(()=>{C.isUnmounted||b()},se)});return}}let xe=I,Ae;fs(C,!1),I?(I.el=we.el,oe(C,I,ce)):I=we,q&&fa(q),(Ae=I.props&&I.props.onVnodeBeforeUpdate)&&ei(Ae,ne,I,we),fs(C,!0);const qe=Lf(C),ye=C.subTree;C.subTree=qe,v(ye,qe,f(ye.el),ve(ye),C,se,re),I.el=qe.el,xe===null&&Mv(C,qe.el),ee&&gn(ee,se),(Ae=I.props&&I.props.onVnodeUpdated)&&gn(()=>ei(Ae,ne,I,we),se)}else{let I;const{el:q,props:ee}=U,{bm:ne,m:we,parent:xe,root:Ae,type:qe}=C,ye=Qr(U);fs(C,!1),ne&&fa(ne),!ye&&(I=ee&&ee.onVnodeBeforeMount)&&ei(I,xe,U),fs(C,!0);{Ae.ce&&Ae.ce._hasShadowRoot()&&Ae.ce._injectChildStyle(qe,C.parent?C.parent.type:void 0);const Ie=C.subTree=Lf(C);v(null,Ie,T,pe,C,se,re),U.el=Ie.el}if(we&&gn(we,se),!ye&&(I=ee&&ee.onVnodeMounted)){const Ie=U;gn(()=>ei(I,xe,Ie),se)}(U.shapeFlag&256||xe&&Qr(xe.vnode)&&xe.vnode.shapeFlag&256)&&C.a&&gn(C.a,se),C.isMounted=!0,U=T=pe=null}};C.scope.on();const ae=C.effect=new Gd(me);C.scope.off();const b=C.update=ae.run.bind(ae),S=C.job=ae.runIfDirty.bind(ae);S.i=C,S.id=C.uid,ae.scheduler=()=>Bu(S),fs(C,!0),b()},oe=(C,U,T)=>{U.component=C;const pe=C.vnode.props;C.vnode=U,C.next=null,bv(C,U.props,pe,T),Av(C,U.children,T),Fi(),Ef(C),Oi()},X=(C,U,T,pe,se,re,ce,me,ae=!1)=>{const b=C&&C.children,S=C?C.shapeFlag:0,I=U.children,{patchFlag:q,shapeFlag:ee}=U;if(q>0){if(q&128){j(b,I,T,pe,se,re,ce,me,ae);return}else if(q&256){be(b,I,T,pe,se,re,ce,me,ae);return}}ee&8?(S&16&&Ee(b,se,re),I!==b&&u(T,I)):S&16?ee&16?j(b,I,T,pe,se,re,ce,me,ae):Ee(b,se,re,!0):(S&8&&u(T,""),ee&16&&N(I,T,pe,se,re,ce,me,ae))},be=(C,U,T,pe,se,re,ce,me,ae)=>{C=C||ws,U=U||ws;const b=C.length,S=U.length,I=Math.min(b,S);let q;for(q=0;q<I;q++){const ee=U[q]=ae?Ei(U[q]):ii(U[q]);v(C[q],ee,T,null,se,re,ce,me,ae)}b>S?Ee(C,se,re,!0,!1,I):N(U,T,pe,se,re,ce,me,ae,I)},j=(C,U,T,pe,se,re,ce,me,ae)=>{let b=0;const S=U.length;let I=C.length-1,q=S-1;for(;b<=I&&b<=q;){const ee=C[b],ne=U[b]=ae?Ei(U[b]):ii(U[b]);if(Ur(ee,ne))v(ee,ne,T,null,se,re,ce,me,ae);else break;b++}for(;b<=I&&b<=q;){const ee=C[I],ne=U[q]=ae?Ei(U[q]):ii(U[q]);if(Ur(ee,ne))v(ee,ne,T,null,se,re,ce,me,ae);else break;I--,q--}if(b>I){if(b<=q){const ee=q+1,ne=ee<S?U[ee].el:pe;for(;b<=q;)v(null,U[b]=ae?Ei(U[b]):ii(U[b]),T,ne,se,re,ce,me,ae),b++}}else if(b>q)for(;b<=I;)K(C[b],se,re,!0),b++;else{const ee=b,ne=b,we=new Map;for(b=ne;b<=q;b++){const Pe=U[b]=ae?Ei(U[b]):ii(U[b]);Pe.key!=null&&we.set(Pe.key,b)}let xe,Ae=0;const qe=q-ne+1;let ye=!1,Ie=0;const Xe=new Array(qe);for(b=0;b<qe;b++)Xe[b]=0;for(b=ee;b<=I;b++){const Pe=C[b];if(Ae>=qe){K(Pe,se,re,!0);continue}let Qe;if(Pe.key!=null)Qe=we.get(Pe.key);else for(xe=ne;xe<=q;xe++)if(Xe[xe-ne]===0&&Ur(Pe,U[xe])){Qe=xe;break}Qe===void 0?K(Pe,se,re,!0):(Xe[Qe-ne]=b+1,Qe>=Ie?Ie=Qe:ye=!0,v(Pe,U[Qe],T,null,se,re,ce,me,ae),Ae++)}const Ke=ye?Lv(Xe):ws;for(xe=Ke.length-1,b=qe-1;b>=0;b--){const Pe=ne+b,Qe=U[Pe],tt=U[Pe+1],pt=Pe+1<S?tt.el||Lp(tt):pe;Xe[b]===0?v(null,Qe,T,pt,se,re,ce,me,ae):ye&&(xe<0||b!==Ke[xe]?F(Qe,T,pt,2):xe--)}}},F=(C,U,T,pe,se=null)=>{const{el:re,type:ce,transition:me,children:ae,shapeFlag:b}=C;if(b&6){F(C.component.subTree,U,T,pe);return}if(b&128){C.suspense.move(U,T,pe);return}if(b&64){ce.move(C,U,T,Ze);return}if(ce===ft){i(re,U,T);for(let I=0;I<ae.length;I++)F(ae[I],U,T,pe);i(C.anchor,U,T);return}if(ce===da){_(C,U,T);return}if(pe!==2&&b&1&&me)if(pe===0)me.persisted&&!re[yl]?i(re,U,T):(me.beforeEnter(re),i(re,U,T),gn(()=>me.enter(re),se));else{const{leave:I,delayLeave:q,afterLeave:ee}=me,ne=()=>{C.ctx.isUnmounted?s(re):i(re,U,T)},we=()=>{const xe=re._isLeaving||!!re[yl];re._isLeaving&&re[yl](!0),me.persisted&&!xe?ne():I(re,()=>{ne(),ee&&ee()})};q?q(re,ne,we):we()}else i(re,U,T)},K=(C,U,T,pe=!1,se=!1)=>{const{type:re,props:ce,ref:me,children:ae,dynamicChildren:b,shapeFlag:S,patchFlag:I,dirs:q,cacheIndex:ee,memo:ne}=C;if((I===-2||b&&b.hasOnce)&&(se=!1),me!=null&&(Fi(),Zr(me,null,T,C,!0),Oi()),ee!=null&&(!C.ctx||C.ctx===U)&&(U.renderCache[ee]=void 0),S&256){U.ctx.deactivate(C);return}const we=S&1&&q,xe=!Qr(C);let Ae;if(xe&&(Ae=ce&&ce.onVnodeBeforeUnmount)&&ei(Ae,U,C),S&6)le(C.component,T,pe);else{if(S&128){C.suspense.unmount(T,pe);return}we&&us(C,null,U,"beforeUnmount"),S&64?C.type.remove(C,U,T,Ze,pe):b&&!b.hasOnce&&(re!==ft||I>0&&I&64)?Ee(b,U,T,!1,!0):(re===ft&&I&384||!se&&S&16)&&Ee(ae,U,T),pe&&Ce(C)}const qe=ne!=null&&ee==null;(xe&&(Ae=ce&&ce.onVnodeUnmounted)||we||qe)&&gn(()=>{Ae&&ei(Ae,U,C),we&&us(C,null,U,"unmounted"),qe&&(C.el=null)},T)},Ce=C=>{const{type:U,el:T,anchor:pe,transition:se}=C;if(U===ft){te(T,pe);return}if(U===da){x(C),se&&!se.persisted&&se.afterLeave&&se.afterLeave();return}const re=()=>{s(T),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(C.shapeFlag&1&&se&&!se.persisted){const{leave:ce,delayLeave:me}=se,ae=()=>ce(T,re);me?me(C.el,re,ae):ae()}else re()},te=(C,U)=>{let T;for(;C!==U;)T=d(C),s(C),C=T;s(U)},le=(C,U,T)=>{const{bum:pe,scope:se,job:re,subTree:ce,um:me,m:ae,a:b}=C;Uf(ae),Uf(b),pe&&fa(pe),se.stop(),re?(re.flags|=8,K(ce,C,U,T)):C.vnode.el&&ce&&(ce.transition=C.vnode.transition,K(ce,C,U,T)),me&&gn(me,U),gn(()=>{C.isUnmounted=!0},U)},Ee=(C,U,T,pe=!1,se=!1,re=0)=>{for(let ce=re;ce<C.length;ce++)K(C[ce],U,T,pe,se)},ve=C=>{if(C.shapeFlag&6)return ve(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const U=d(C.anchor||C.el),T=U&&U[Yg];return T?d(T):U};let ze=!1;const Ve=(C,U,T)=>{let pe;C==null?U._vnode&&(K(U._vnode,null,null,!0),pe=U._vnode.component):v(U._vnode||null,C,U,null,null,null,T),U._vnode=C,ze||(ze=!0,Ef(pe),ap(),ze=!1)},Ze={p:v,um:K,m:F,r:Ce,mt:V,mc:N,pc:X,pbc:M,n:ve,o:n};return{render:Ve,hydrate:void 0,createApp:pv(Ve)}}function Sl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rp(n,e,t=!1){const i=n.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Rp(o,a)),a.type===rl&&(a.patchFlag===-1&&(a=s[r]=Ei(a)),a.el=o.el),a.type===Bi&&!a.el&&(a.el=o.el)}}function Lv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Pp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pp(e)}function Uf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Lp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Lp(e.subTree):null}const Dp=n=>n.__isSuspense;function Dv(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):Vg(n)}const ft=Symbol.for("v-fgt"),rl=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),Ps=[];let Sn=null;function he(n=!1){Ps.push(Sn=n?null:[])}function Ip(){Ps.pop(),Sn=Ps[Ps.length-1]||null}let ao=1;function Nf(n,e=!1){ao+=n,n<0&&Sn&&e&&(Sn.hasOnce=!0)}function Up(n){return n.dynamicChildren=ao>0?Sn||ws:null,Ip(),ao>0&&Sn&&Sn.push(n),n}function _e(n,e,t,i,s,r){return Up(R(n,e,t,i,s,r,!0))}function ys(n,e,t,i,s){return Up(Wt(n,e,t,i,s,!0))}function Np(n){return n?n.__v_isVNode===!0:!1}function Ur(n,e){return n.type===e.type&&n.key===e.key}const Fp=({key:n})=>n??null,pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Vt(n)||on(n)||rt(n)?{i:In,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,s=null,r=n===ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Fp(e),ref:e&&pa(e),scopeId:cp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(Ua(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Vt(t)?8:16),ao>0&&!o&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const Wt=Iv;function Iv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===ov)&&(n=Bi),Np(n)){const a=xr(n,e,!0);return t&&Ua(a,t),ao>0&&!r&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if($v(n)&&(n=n.__vccOpts),e){e=Uv(e);let{class:a,style:l}=e;a&&!Vt(a)&&(e.class=Ot(a)),wt(l)&&(Fu(l)&&!je(l)&&(l=ln({},l)),e.style=ci(l))}const o=Vt(n)?1:Dp(n)?128:nl(n)?64:wt(n)?4:rt(n)?2:0;return R(n,e,t,i,s,o,r,!0)}function Uv(n){return n?Fu(n)||bp(n)?ln({},n):n:null}function xr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Fv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Fp(c),ref:e&&e.ref?t&&r?je(r)?r.concat(pa(e)):[r,pa(e)]:pa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xr(n.ssContent),ssFallback:n.ssFallback&&xr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ku(u,l.clone(u)),u}function st(n=" ",e=0){return Wt(rl,null,n,e)}function Nv(n,e){const t=Wt(da,null,n);return t.staticCount=e,t}function lt(n="",e=!1){return e?(he(),ys(Bi,null,n)):Wt(Bi,null,n)}function ii(n){return n==null||typeof n=="boolean"?Wt(Bi):je(n)?Wt(ft,null,n.slice()):Np(n)?Ei(n):Wt(rl,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xr(n)}function Ua(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ua(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!bp(e)?e._ctx=In:s===3&&In&&(In.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(rt(e)){if(i&65){Ua(n,{default:e});return}e={default:e,_ctx:In},t=32}else e=String(e),i&64?(t=16,e=[st(e)]):t=8;n.children=e,n.shapeFlag|=t}function Fv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(s==="style")e.style=ci([e.style,i.style]);else if(Ka(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ja(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ei(n,e,t,i=null){jn(n,e,7,[t,i])}const Ov=_p();let Bv=0;function kv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ov,r={uid:Bv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(i,s),emitsOptions:xp(i,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gv.bind(null,r),n.ce&&n.ce(r),r}let dn=null;const zv=()=>dn||In;let Na,lo;{const n=Qa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Na=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),lo=e("__VUE_SSR_SETTERS__",t=>co=t)}const So=n=>{const e=dn;return Na(n),n.scope.on(),()=>{n.scope.off(),Na(e)}},Ff=()=>{dn&&dn.scope.off(),Na(null)};function Op(n){return n.vnode.shapeFlag&4}let co=!1;function Hv(n,e=!1,t=!1){e&&lo(e);const{props:i,children:s}=n.vnode,r=Op(n);Sv(n,i,r,e),Tv(n,s,t||e);const o=r?Vv(n,e):void 0;return e&&lo(!1),o}function Vv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,av);const{setup:i}=t;if(i){Fi();const s=n.setupContext=i.length>1?Wv(n):null,r=So(n),o=yo(i,n,0,[n.props,s]),a=Nd(o);if(Oi(),r(),(a||n.sp)&&!Qr(n)&&dp(n),a){if(o.then(Ff,Ff),e)return o.then(l=>{lo(!0);try{Of(n,l,e)}finally{lo(!1)}}).catch(l=>{tl(l,n,0)});n.asyncDep=o}else Of(n,o)}else Bp(n)}function Of(n,e,t){rt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=sp(e)),Bp(n)}function Bp(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const s=So(n);Fi();try{lv(n)}finally{Oi(),s()}}}const Gv={get(n,e){return nn(n,"get",""),n[e]}};function Wv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gv),slots:n.slots,emit:n.emit,expose:e}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sp(Dg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in eo)return eo[t](n)},has(e,t){return t in e||t in eo}})):n.proxy}function $v(n){return rt(n)&&"__vccOpts"in n}const Nt=(n,e)=>Og(n,e,co),Xv="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mc;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{Mc=Bf.createPolicy("vue",{createHTML:n=>n})}catch{}const kp=Mc?n=>Mc.createHTML(n):n=>n,qv="http://www.w3.org/2000/svg",Yv="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,kf=bi&&bi.createElement("template"),Kv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?bi.createElementNS(qv,n):e==="mathml"?bi.createElementNS(Yv,n):t?bi.createElement(n,{is:t}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{kf.innerHTML=kp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=kf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jv=Symbol("_vtc");function Jv(n,e,t){const i=n[jv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zf=Symbol("_vod"),Zv=Symbol("_vsh"),Qv=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function t_(n,e,t){const i=n.style,s=Vt(t);let r=!1;if(t&&!s){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&$r(i,a,"")}else for(const o in e)t[o]==null&&$r(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?i_(n,o,!Vt(e)&&e?e[o]:void 0,a)||$r(i,o,a):$r(i,o,"")}}else if(s){if(e!==t){const o=i[Qv];o&&(t+=";"+o),i.cssText=t,r=e_.test(t)}}else e&&n.removeAttribute("style");zf in n&&(n[zf]=r?i.display:"",n[Zv]&&(i.display="none"))}const Lo=/\s*!important$/;function $r(n,e,t){if(je(t))t.forEach(i=>$r(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Lo.test(t)?n.setProperty(e,t.replace(Lo,""),"important"):n.setProperty(e,t);else{const i=n_(n,e);Lo.test(t)?n.setProperty(cs(i),t.replace(Lo,""),"important"):n[i]=t}}const Hf=["Webkit","Moz","ms"],bl={};function n_(n,e){const t=bl[e];if(t)return t;let i=Xn(e);if(i!=="filter"&&i in n)return bl[e]=i;i=Bd(i);for(let s=0;s<Hf.length;s++){const r=Hf[s]+i;if(r in n)return bl[e]=r}return e}function i_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Vt(i)&&t===i}const Vf="http://www.w3.org/1999/xlink";function Gf(n,e,t,i,s,r=cg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Vf,e.slice(6,e.length)):n.setAttributeNS(Vf,e,t):t==null||r&&!zd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":hi(t)?String(t):t)}function Wf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=zd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ci(n,e,t,i){n.addEventListener(e,t,i)}function s_(n,e,t,i){n.removeEventListener(e,t,i)}const $f=Symbol("_vei");function r_(n,e,t,i,s=null){const r=n[$f]||(n[$f]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=l_(e);if(i){const c=r[e]=f_(i,s);Ci(n,a,c,l)}else o&&(s_(n,a,o,l),r[e]=void 0)}}const o_=/(Once|Passive|Capture)$/,a_=/^on:?(?:Once|Passive|Capture)$/;function l_(n){let e,t;for(;(t=n.match(o_))&&!a_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):cs(n.slice(2)),e]}let El=0;const c_=Promise.resolve(),u_=()=>El||(c_.then(()=>El=0),El=Date.now());function f_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(je(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&jn(c,e,5,a)}}else jn(s,e,5,[i])};return t.value=n,t.attached=u_(),t}const Xf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Jv(n,i,o):e==="style"?t_(n,t,i):Ka(e)?ja(e)||r_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):d_(n,e,i,o))?(Wf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gf(n,e,i,o,r,e!=="value")):n._isVueCE&&(p_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Vt(i)))?Wf(n,Xn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gf(n,e,i,o))};function d_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xf(e)&&rt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xf(e)&&Vt(t)?!1:e in n}function p_(n,e){const t=n._def.props;if(!t)return!1;const i=Xn(e);return Array.isArray(t)?t.some(s=>Xn(s)===i):Object.keys(t).some(s=>Xn(s)===i)}const os=n=>{const e=n.props["onUpdate:modelValue"]||!1;return je(e)?t=>fa(e,t):e};function m_(n){n.target.composing=!0}function qf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bn=Symbol("_assign"),Do=Symbol("_initialValue");function wl(n,e,t){return e&&(n=n.trim()),t&&(n=Za(n)),n}const pn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Do]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Do]=n.defaultValue.replace(/\r\n?/g,`
`))),n[bn]=os(s);const r=i||s.props&&s.props.type==="number";Ci(n,e?"change":"input",o=>{o.target.composing||n[bn](wl(n.value,t,r))}),(t||r)&&Ci(n,"change",()=>{n.value=wl(n.value,t,r)}),e||(Ci(n,"compositionstart",m_),Ci(n,"compositionend",qf),Ci(n,"change",qf))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Do];delete n[Do],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[bn](wl(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[bn]=os(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Za(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ts={deep:!0,created(n,e,t){n[bn]=os(t),Ci(n,"change",()=>{const i=n._modelValue,s=yr(n),r=n.checked,o=n[bn];if(je(i)){const a=Ru(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ni(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(zp(n,r))})},mounted:Yf,beforeUpdate(n,e,t){n[bn]=os(t),Yf(n,e,t)}};function Yf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(je(e))s=Ru(e,i.props.value)>-1;else if(Ni(e))s=e.has(i.props.value);else{if(e===t)return;s=Kn(e,zp(n,!0))}n.checked!==s&&(n.checked=s)}const g_={created(n,{value:e},t){n.checked=Kn(e,t.props.value),n[bn]=os(t),Ci(n,"change",()=>{n[bn](yr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[bn]=os(i),e!==t&&(n.checked=Kn(e,i.props.value))}},Fa={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Ci(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Za(yr(l)):yr(l)),r=n.multiple,o=r?Ni(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?je(o)?s.slice():s:o];try{n[bn](o)}finally{Ou(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[bn]=os(i)},mounted(n,{value:e}){Kf(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[bn]=os(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!v_(e,t[1],t[0]))&&Kf(n,e)}};function v_(n,e,t){if(!t||je(n))return Kn(n,e);if(Ni(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function Kf(n,e){const t=n.multiple,i=je(e);if(!(t&&!i&&!Ni(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=yr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ru(e,a)>-1}else o.selected=e.has(a);else if(Kn(yr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function yr(n){return"_value"in n?n._value:n.value}function zp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const __={created(n,e,t){Io(n,e,t,null,"created")},mounted(n,e,t){Io(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Io(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Io(n,e,t,i,"updated")}};function x_(n,e){switch(n){case"SELECT":return Fa;case"TEXTAREA":return pn;default:switch(e){case"checkbox":return ts;case"radio":return g_;default:return pn}}}function Io(n,e,t,i,s){const o=x_(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}const y_=["ctrl","shift","alt","meta"],M_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>y_.some(t=>n[`${t}Key`]&&!e.includes(t))},jf=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=M_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},S_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sc=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=cs(s.key);if(e.some(o=>o===r||S_[o]===r))return n(s)}))},b_=ln({patchProp:h_},Kv);let Jf;function E_(){return Jf||(Jf=Cv(b_))}const w_=((...n)=>{const e=E_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=A_(i);if(!s)return;const r=e._component;!rt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,T_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function T_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function A_(n){return Vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gu="170",C_=0,Zf=1,R_=2,Hp=1,P_=2,Si=3,as=0,vn=1,Ri=2,ns=0,gr=1,Oa=2,Qf=3,eh=4,L_=5,bs=100,D_=101,I_=102,U_=103,N_=104,F_=200,O_=201,B_=202,k_=203,bc=204,Ec=205,z_=206,H_=207,V_=208,G_=209,W_=210,$_=211,X_=212,q_=213,Y_=214,wc=0,Tc=1,Ac=2,Mr=3,Cc=4,Rc=5,Pc=6,Lc=7,Vp=0,K_=1,j_=2,is=0,J_=1,Z_=2,Q_=3,e0=4,t0=5,n0=6,i0=7,Gp=300,Sr=301,br=302,Dc=303,Ic=304,al=306,Uc=1e3,Ts=1001,Nc=1002,Yn=1003,s0=1004,Uo=1005,ai=1006,Tl=1007,As=1008,ki=1009,Wp=1010,$p=1011,uo=1012,Wu=1013,Ds=1014,Pi=1015,bo=1016,$u=1017,Xu=1018,Er=1020,Xp=35902,qp=1021,Yp=1022,Wn=1023,Kp=1024,jp=1025,vr=1026,wr=1027,Jp=1028,qu=1029,Zp=1030,Yu=1031,Ku=1033,ma=33776,ga=33777,va=33778,_a=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,$c=37810,Xc=37811,qc=37812,Yc=37813,Kc=37814,jc=37815,Jc=37816,Zc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,xa=36492,iu=36494,su=36495,Qp=36283,ru=36284,ou=36285,au=36286,r0=3200,o0=3201,em=0,a0=1,ji="",Rn="srgb",Ar="srgb-linear",ll="linear",bt="srgb",Vs=7680,th=519,l0=512,c0=513,u0=514,tm=515,f0=516,h0=517,d0=518,p0=519,lu=35044,nh="300 es",Li=2e3,Ba=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,cu=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function m0(n,e){return(n%e+e)%e}function Cl(n,e,t){return(1-t)*n+t*e}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],h=s[6],y=s[1],_=s[4],x=s[7],P=s[2],A=s[5],L=s[8];return r[0]=o*v+a*y+l*P,r[3]=o*m+a*_+l*A,r[6]=o*h+a*x+l*L,r[1]=c*v+u*y+f*P,r[4]=c*m+u*_+f*A,r[7]=c*h+u*x+f*L,r[2]=d*v+p*y+g*P,r[5]=d*m+p*_+g*A,r[8]=d*h+p*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new ot;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function g0(){const n=ka("canvas");return n.style.display="block",n}const ih={};function Xr(n){n in ih||(ih[n]=!0,console.warn(n))}function v0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function _0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=_r(n.r),n.g=_r(n.g),n.b=_r(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ji?ll:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const sh=[.64,.33,.3,.6,.15,.06],rh=[.2126,.7152,.0722],oh=[.3127,.329],ah=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[Ar]:{primaries:sh,whitePoint:oh,transfer:ll,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:rh,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:sh,whitePoint:oh,transfer:bt,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:rh,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let Gs;class y0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=ka("canvas")),Gs.width=e.width,Gs.height=e.height;const i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S0=0;class mn extends Cr{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Ts,s=Ts,r=ai,o=As,a=Wn,l=ki,c=mn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ii(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Gp;mn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,P=(h+1)/2,A=(u+d)/4,L=(f+v)/4,N=(g+m)/4;return _>x&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=A/i,r=L/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=N/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends Cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new im(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends b0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sm extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E0 extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,h*y);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const x=a*y;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,f=f*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new k,ch=new Di;class Eo{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Fo.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),$s.subVectors(e.b,Nr),Xs.subVectors(e.c,Nr),Gi.subVectors($s,Ws),Wi.subVectors(Xs,$s),hs.subVectors(Ws,Xs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-hs.z,hs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,hs.z,0,-hs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-hs.y,hs.x,0];return!Dl(t,Ws,$s,Xs,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,Ws,$s,Xs,Fo))?!1:(Oo.crossVectors(Gi,Wi),t=[Oo.x,Oo.y,Oo.z],Dl(t,Ws,$s,Xs,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new k,new k,new k,new k,new k,new k,new k,new k],zn=new k,No=new Eo,Ws=new k,$s=new k,Xs=new k,Gi=new k,Wi=new k,hs=new k,Nr=new k,Fo=new k,Oo=new k,ds=new k;function Dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ds.fromArray(n,r);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const w0=new Eo,Fr=new k,Il=new k;class cl{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Il)),this.expandByPoint(Fr.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new k,Ul=new k,Bo=new k,$i=new k,Nl=new k,ko=new k,Fl=new k;class ju{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Ul);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bo),a=$i.dot(this.direction),l=-$i.dot(Bo),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ul).addScaledVector(Bo,d),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){Nl.subVectors(t,e),ko.subVectors(i,e),Fl.crossVectors(Nl,ko);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(ko.crossVectors($i,ko));if(l<0)return null;const c=a*this.direction.dot(Nl.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Fl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,A0)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Xi.crossVectors(i,yn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Xi.crossVectors(i,yn)),Xi.normalize(),zo.crossVectors(yn,Xi),s[0]=Xi.x,s[4]=zo.x,s[8]=yn.x,s[1]=Xi.y,s[5]=zo.y,s[9]=yn.y,s[2]=Xi.z,s[6]=zo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],y=i[3],_=i[7],x=i[11],P=i[15],A=s[0],L=s[4],N=s[8],w=s[12],M=s[1],D=s[5],Q=s[9],J=s[13],V=s[2],$=s[6],B=s[10],oe=s[14],X=s[3],be=s[7],j=s[11],F=s[15];return r[0]=o*A+a*M+l*V+c*X,r[4]=o*L+a*D+l*$+c*be,r[8]=o*N+a*Q+l*B+c*j,r[12]=o*w+a*J+l*oe+c*F,r[1]=u*A+f*M+d*V+p*X,r[5]=u*L+f*D+d*$+p*be,r[9]=u*N+f*Q+d*B+p*j,r[13]=u*w+f*J+d*oe+p*F,r[2]=g*A+v*M+m*V+h*X,r[6]=g*L+v*D+m*$+h*be,r[10]=g*N+v*Q+m*B+h*j,r[14]=g*w+v*J+m*oe+h*F,r[3]=y*A+_*M+x*V+P*X,r[7]=y*L+_*D+x*$+P*be,r[11]=y*N+_*Q+x*B+P*j,r[15]=y*w+_*J+x*oe+P*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],y=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,_=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,P=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,A=t*y+i*_+s*x+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*h-i*d*h)*L,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*L,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*L,e[4]=_*L,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*h+t*d*h)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*h-t*l*h)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=x*L,e[9]=(g*f*r-u*v*r-g*i*p+t*v*p+u*i*h-t*f*h)*L,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=P*L,e[13]=(u*v*s-g*f*s+g*i*d-t*v*d-u*i*m+t*f*m)*L,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,v=o*u,m=o*f,h=a*f,y=l*c,_=l*u,x=l*f,P=i.x,A=i.y,L=i.z;return s[0]=(1-(v+h))*P,s[1]=(p+x)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+h))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*L,s[9]=(m-y)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const c=1/r,u=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Li){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===Li)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ba)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Li){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,p=(i+s)*u;let g,v;if(a===Li)g=(o+r)*f,v=-2*f;else if(a===Ba)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qs=new k,Hn=new Lt,T0=new k(0,0,0),A0=new k(1,1,1),Xi=new k,zo=new k,yn=new k,uh=new Lt,fh=new Di;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const hh=new k,Ys=new Di,xi=new Lt,Ho=new k,Or=new k,R0=new k,P0=new Di,dh=new k(1,0,0),ph=new k(0,1,0),mh=new k(0,0,1),gh={type:"added"},L0={type:"removed"},Ks={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Kt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new k,t=new Jn,i=new Di,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Or,Ho,this.up):xi.lookAt(Ho,Or,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(xi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new k,yi=new k,Bl=new k,Mi=new k,js=new k,Js=new k,vh=new k,kl=new k,zl=new k,Hl=new k,Vl=new Ht,Gl=new Ht,Wl=new Ht;class Dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),yi.subVectors(i,t),Bl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(yi),l=Vn.dot(Bl),c=yi.dot(yi),u=yi.dot(Bl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),yi.subVectors(e,t),Vn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Vn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Js.subVectors(r,i),kl.subVectors(e,i);const l=js.dot(kl),c=Js.dot(kl);if(l<=0&&c<=0)return t.copy(i);zl.subVectors(e,s);const u=js.dot(zl),f=Js.dot(zl);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);Hl.subVectors(e,r);const p=js.dot(Hl),g=Js.dot(Hl);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Js,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return vh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(vh,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(js,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function $l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=m0(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$l(o,r,e+1/3),this.g=$l(o,r,e),this.b=$l(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=rm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(sn(tn.r*255,0,255))*65536+Math.round(sn(tn.g*255,0,255))*256+Math.round(sn(tn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Rn){ht.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Vo);const i=Cl(qi.h,Vo.h,t),s=Cl(qi.s,Vo.s,t),r=Cl(qi.l,Vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new dt;dt.NAMES=rm;let D0=0;class Os extends Cr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ii(),this.name="",this.blending=gr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Ec,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class za extends Os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new k,Go=new Ge;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class om extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class am extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ui extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let I0=0;const An=new Lt,Xl=new Kt,Zs=new k,Mn=new Eo,Br=new Eo,Yt=new k;class Zn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?am:om)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ui(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Mn.min,Br.min),Mn.expandByPoint(Yt),Yt.addVectors(Mn.max,Br.max),Mn.expandByPoint(Yt)):(Mn.expandByPoint(Br.min),Mn.expandByPoint(Br.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Yt.add(Zs)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new k,l[N]=new k;const c=new k,u=new k,f=new k,d=new Ge,p=new Ge,g=new Ge,v=new k,m=new k;function h(N,w,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(v),a[w].add(v),a[M].add(v),l[N].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,w=y.length;N<w;++N){const M=y[N],D=M.start,Q=M.count;for(let J=D,V=D+Q;J<V;J+=3)h(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const _=new k,x=new k,P=new k,A=new k;function L(N){P.fromBufferAttribute(s,N),A.copy(P);const w=a[N];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(A,w);const D=x.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,D)}for(let N=0,w=y.length;N<w;++N){const M=y[N],D=M.start,Q=M.count;for(let J=D,V=D+Q;J<V;J+=3)L(e.getX(J+0)),L(e.getX(J+1)),L(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new En(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new Lt,ps=new ju,Wo=new cl,xh=new k,$o=new k,Xo=new k,qo=new k,ql=new k,Yo=new k,yh=new k,Ko=new k;class Un extends Kt{constructor(e=new Zn,t=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ql.fromBufferAttribute(f,e),o?Yo.addScaledVector(ql,u):Yo.addScaledVector(ql.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Wo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Wo,xh)===null||ps.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),ps.copy(e.ray).applyMatrix4(_h),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=_;x<P;x+=3){const A=a.getX(x),L=a.getX(x+1),N=a.getX(x+2);s=jo(this,h,e,i,c,u,f,A,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=jo(this,o,e,i,c,u,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=_;x<P;x+=3){const A=x,L=x+1,N=x+2;s=jo(this,h,e,i,c,u,f,A,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=m,_=m+1,x=m+2;s=jo(this,o,e,i,c,u,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function U0(n,e,t,i,s,r,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===as,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:n}}function jo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,$o),n.getVertexPosition(l,Xo),n.getVertexPosition(c,qo);const u=U0(n,e,t,i,$o,Xo,qo,yh);if(u){const f=new k;Dn.getBarycoord(yh,$o,Xo,qo,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new Ge)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new Ge)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Dn.getNormal($o,Xo,qo,d.normal),u.face=d,u.barycoord=f}return u}class Rr extends Zn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function g(v,m,h,y,_,x,P,A,L,N,w){const M=x/L,D=P/N,Q=x/2,J=P/2,V=A/2,$=L+1,B=N+1;let oe=0,X=0;const be=new k;for(let j=0;j<B;j++){const F=j*D-J;for(let K=0;K<$;K++){const Ce=K*M-Q;be[v]=Ce*y,be[m]=F*_,be[h]=V,c.push(be.x,be.y,be.z),be[v]=0,be[m]=0,be[h]=A>0?1:-1,u.push(be.x,be.y,be.z),f.push(K/L),f.push(1-j/N),oe+=1}}for(let j=0;j<N;j++)for(let F=0;F<L;F++){const K=d+F+$*j,Ce=d+F+$*(j+1),te=d+(F+1)+$*(j+1),le=d+(F+1)+$*j;l.push(K,Ce,le),l.push(Ce,te,le),X+=6}a.addGroup(p,X,w),p+=X,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const s in i)e[s]=i[s]}return e}function N0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const F0={clone:Tr,merge:fn};var O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cm extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new k,Mh=new Ge,Sh=new Ge;class Ln extends cm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cu*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,Sh),t.subVectors(Sh,Mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class k0 extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Ln(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Ln(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Ln(Qs,er,e,t);a.layers=this.layers,this.add(a);const l=new Ln(Qs,er,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class um extends mn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends Is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rr(5,5,5),r=new ls({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ns});r.uniforms.tEquirect.value=t;const o=new Un(s,r),a=t.minFilter;return t.minFilter===As&&(t.minFilter=ai),new k0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Yl=new k,H0=new k,V0=new ot;class Ms{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yl.subVectors(i,t).cross(H0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||V0.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new cl,Jo=new k;class Zu{constructor(e=new Ms,t=new Ms,i=new Ms,s=new Ms,r=new Ms,o=new Ms){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],y=s[13],_=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-p,x-h).normalize(),i[1].setComponents(l+r,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+g,x+y).normalize(),i[3].setComponents(l-o,d-u,m-g,x-y).normalize(),i[4].setComponents(l-a,d-f,m-v,x-_).normalize(),t===Li)i[5].setComponents(l+a,d+f,m+v,x+_).normalize();else if(t===Ba)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Jo.x=s.normal.x>0?e.max.x:e.min.x,Jo.y=s.normal.y>0?e.max.y:e.min.y,Jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function G0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class wo extends Zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*d-o;for(let _=0;_<c;_++){const x=_*f-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+c*h,x=y+c*(h+1),P=y+1+c*(h+1),A=y+1+c*h;p.push(_,x,A),p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ix=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dx=`#define PI 3.141592653589793
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
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mx=`vec3 transformedNormal = objectNormal;
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
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lx=`#ifdef USE_GRADIENTMAP
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
}`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
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
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
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
#endif`,Vx=`struct PhysicalMaterial {
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
}`,Gx=`
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
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qx=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cy=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,jy=`#if DEPTH_PACKING == 3200
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
}`,Jy=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,uM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,dM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,gM=`#define TOON
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
}`,vM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,yM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:W0,alphahash_pars_fragment:$0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:K0,aomap_fragment:j0,aomap_pars_fragment:J0,batching_pars_vertex:Z0,batching_vertex:Q0,begin_vertex:ex,beginnormal_vertex:tx,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:sx,clipping_planes_fragment:rx,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:ax,clipping_planes_vertex:lx,color_fragment:cx,color_pars_fragment:ux,color_pars_vertex:fx,color_vertex:hx,common:dx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:gx,displacementmap_vertex:vx,emissivemap_fragment:_x,emissivemap_pars_fragment:xx,colorspace_fragment:yx,colorspace_pars_fragment:Mx,envmap_fragment:Sx,envmap_common_pars_fragment:bx,envmap_pars_fragment:Ex,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Fx,envmap_vertex:Tx,fog_vertex:Ax,fog_pars_vertex:Cx,fog_fragment:Rx,fog_pars_fragment:Px,gradientmap_pars_fragment:Lx,lightmap_pars_fragment:Dx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Ux,lights_pars_begin:Nx,lights_toon_fragment:Ox,lights_toon_pars_fragment:Bx,lights_phong_fragment:kx,lights_phong_pars_fragment:zx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Gx,lights_fragment_maps:Wx,lights_fragment_end:$x,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Kx,map_fragment:jx,map_pars_fragment:Jx,map_particle_fragment:Zx,map_particle_pars_fragment:Qx,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:sy,morphtarget_pars_vertex:ry,morphtarget_vertex:oy,normal_fragment_begin:ay,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:fy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:vy,packing:_y,premultiplied_alpha_fragment:xy,project_vertex:yy,dithering_fragment:My,dithering_pars_fragment:Sy,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:Cy,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Ly,skinnormal_vertex:Dy,specularmap_fragment:Iy,specularmap_pars_fragment:Uy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Fy,transmission_fragment:Oy,transmission_pars_fragment:By,uv_pars_fragment:ky,uv_pars_vertex:zy,uv_vertex:Hy,worldpos_vertex:Vy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:$y,backgroundCube_frag:Xy,cube_vert:qy,cube_frag:Yy,depth_vert:Ky,depth_frag:jy,distanceRGBA_vert:Jy,distanceRGBA_frag:Zy,equirect_vert:Qy,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:sM,meshlambert_vert:rM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:fM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:vM,points_frag:_M,shadow_vert:xM,shadow_frag:yM,sprite_vert:MM,sprite_frag:SM},Ue={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},si={basic:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([Ue.points,Ue.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([Ue.common,Ue.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([Ue.sprite,Ue.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:fn([Ue.common,Ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:fn([Ue.lights,Ue.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};si.physical={uniforms:fn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Zo={r:0,b:0,g:0},gs=new Jn,bM=new Lt;function EM(n,e,t,i,s,r,o){const a=new dt(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?h(a,l):x&&x.isColor&&(h(x,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===al)?(u===void 0&&(u=new Un(new Rr(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Tr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gs.copy(_.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(gs)),u.material.toneMapped=ht.getTransfer(x.colorSpace)!==bt,(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Un(new wo(2,2),new ls({name:"BackgroundMaterial",uniforms:Tr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,_){y.getRGB(Zo,lm(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:m}}function wM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,D,Q,J,V){let $=!1;const B=f(J,Q,D);r!==B&&(r=B,c(r.object)),$=p(M,J,Q,V),$&&g(M,J,Q,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,D,Q,J),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,Q){const J=Q.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let $=V[D.id];$===void 0&&($={},V[D.id]=$);let B=$[J];return B===void 0&&(B=d(l()),$[J]=B),B}function d(M){const D=[],Q=[],J=[];for(let V=0;V<t;V++)D[V]=0,Q[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:J,object:M,attributes:{},index:null}}function p(M,D,Q,J){const V=r.attributes,$=D.attributes;let B=0;const oe=Q.getAttributes();for(const X in oe)if(oe[X].location>=0){const j=V[X];let F=$[X];if(F===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),j===void 0||j.attribute!==F||F&&j.data!==F.data)return!0;B++}return r.attributesNum!==B||r.index!==J}function g(M,D,Q,J){const V={},$=D.attributes;let B=0;const oe=Q.getAttributes();for(const X in oe)if(oe[X].location>=0){let j=$[X];j===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const F={};F.attribute=j,j&&j.data&&(F.data=j.data),V[X]=F,B++}r.attributes=V,r.attributesNum=B,r.index=J}function v(){const M=r.newAttributes;for(let D=0,Q=M.length;D<Q;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){const Q=r.newAttributes,J=r.enabledAttributes,V=r.attributeDivisors;Q[M]=1,J[M]===0&&(n.enableVertexAttribArray(M),J[M]=1),V[M]!==D&&(n.vertexAttribDivisor(M,D),V[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let Q=0,J=D.length;Q<J;Q++)D[Q]!==M[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function _(M,D,Q,J,V,$,B){B===!0?n.vertexAttribIPointer(M,D,Q,V,$):n.vertexAttribPointer(M,D,Q,J,V,$)}function x(M,D,Q,J){v();const V=J.attributes,$=Q.getAttributes(),B=D.defaultAttributeValues;for(const oe in $){const X=$[oe];if(X.location>=0){let be=V[oe];if(be===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),be!==void 0){const j=be.normalized,F=be.itemSize,K=e.get(be);if(K===void 0)continue;const Ce=K.buffer,te=K.type,le=K.bytesPerElement,Ee=te===n.INT||te===n.UNSIGNED_INT||be.gpuType===Wu;if(be.isInterleavedBufferAttribute){const ve=be.data,ze=ve.stride,Ve=be.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<X.locationSize;Ze++)h(X.location+Ze,ve.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<X.locationSize;Ze++)m(X.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ze=0;Ze<X.locationSize;Ze++)_(X.location+Ze,F/X.locationSize,te,j,ze*le,(Ve+F/X.locationSize*Ze)*le,Ee)}else{if(be.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)h(X.location+ve,be.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ve=0;ve<X.locationSize;ve++)_(X.location+ve,F/X.locationSize,te,j,F*le,F/X.locationSize*ve*le,Ee)}}else if(B!==void 0){const j=B[oe];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(X.location,j);break;case 3:n.vertexAttrib3fv(X.location,j);break;case 4:n.vertexAttrib4fv(X.location,j);break;default:n.vertexAttrib1fv(X.location,j)}}}}y()}function P(){N();for(const M in i){const D=i[M];for(const Q in D){const J=D[Q];for(const V in J)u(J[V].object),delete J[V];delete D[Q]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const Q in D){const J=D[Q];for(const V in J)u(J[V].object),delete J[V];delete D[Q]}delete i[M.id]}function L(M){for(const D in i){const Q=i[D];if(Q[M.id]===void 0)continue;const J=Q[M.id];for(const V in J)u(J[V].object),delete J[V];delete Q[M.id]}}function N(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function TM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ki&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Pi&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function CM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ms,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,_=y*4;let x=h.clippingState||null;l.value=x,x=u(g,d,_,p);for(let P=0;P!==_;++P)x[P]=t[P];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function RM(n){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=Sr:a===Ic&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class hm extends cm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,bh=[.125,.215,.35,.446,.526,.582],Es=20,Kl=new hm,Eh=new dt;let jl=null,Jl=0,Zl=0,Ql=!1;const Ss=(1+Math.sqrt(5))/2,tr=1/Ss,wh=[new k(-Ss,tr,0),new k(Ss,tr,0),new k(-tr,0,Ss),new k(tr,0,Ss),new k(0,Ss,-tr),new k(0,Ss,tr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){jl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Jl,Zl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:bo,format:Wn,colorSpace:Ar,depthBuffer:!1},s=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(r)),this._blurMaterial=LM(r,e,t)}return s}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,i,s){const a=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Eh),u.toneMapping=is,u.autoClear=!1;const p=new za({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Un(new Rr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Eh),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;Qo(s,y*_,h>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Sr||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(s-r-1)%wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Es-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const h=[];let y=0;for(let L=0;L<Es;++L){const N=L/v,w=Math.exp(-N*N/2);h.push(w),L===0?y+=w:L<m&&(y+=2*w)}for(let L=0;L<h.length;L++)h[L]=h[L]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[s],P=3*x*(s>_-ur?s-_+ur:0),A=4*(this._cubeSize-x);Qo(t,P,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Kl)}}function PM(n){const e=[],t=[],i=[];let s=n;const r=n-ur+1+bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ur?l=bh[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,N=A>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];y.set(w,v*g*A),_.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,h*g*A)}const P=new Zn;P.setAttribute("position",new En(y,v)),P.setAttribute("uv",new En(_,m)),P.setAttribute("faceIndex",new En(x,h)),e.push(P),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(n,e,t){const i=new Is(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function LM(n,e,t){const i=new Float32Array(Es),s=new k(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ch(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Rh(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}function DM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Ic,u=l===Sr||l===br;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Th(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Th(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function IM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function UM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const P=y[_+0],A=y[_+1],L=y[_+2];d.push(P,A,A,L,L,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const P=_+0,A=_+1,L=_+2;d.push(P,A,A,L,L,P)}}else return;const m=new(nm(d)?am:om)(d,1);m.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function NM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let h=0;for(let y=0;y<g;y++)h+=p[y]*v[y];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function FM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function OM(n,e,t){const i=new WeakMap,s=new Ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*P*4*f),L=new sm(A,x,P,f);L.type=Pi,L.needsUpdate=!0;const N=_*4;for(let M=0;M<f;M++){const D=m[M],Q=h[M],J=y[M],V=x*P*4*M;for(let $=0;$<D.count;$++){const B=$*N;p===!0&&(s.fromBufferAttribute(D,$),A[V+B+0]=s.x,A[V+B+1]=s.y,A[V+B+2]=s.z,A[V+B+3]=0),g===!0&&(s.fromBufferAttribute(Q,$),A[V+B+4]=s.x,A[V+B+5]=s.y,A[V+B+6]=s.z,A[V+B+7]=0),v===!0&&(s.fromBufferAttribute(J,$),A[V+B+8]=s.x,A[V+B+9]=s.y,A[V+B+10]=s.z,A[V+B+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Ge(x,P)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function BM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class dm extends mn{constructor(e,t,i,s,r,o,a,l,c,u=vr){if(u!==vr&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Ds),i===void 0&&u===wr&&(i=Er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pm=new mn,Ph=new dm(1,1),mm=new sm,gm=new E0,vm=new um,Lh=[],Dh=[],Ih=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ul(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Xt(t,i)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Uh.set(i),n.uniformMatrix3fv(this.addr,!1,Uh),Xt(t,i)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),Xt(t,i)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function eS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ph.compareFunction=tm,r=Ph):r=pm,t.setTexture2D(e||r,s)}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gm,s)}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vm,s)}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mm,s)}function sS(n){switch(n){case 5126:return kM;case 35664:return zM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return $M;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return KM;case 5125:return jM;case 36294:return JM;case 36295:return ZM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function rS(n,e){n.uniform1fv(this.addr,e)}function oS(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function aS(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function lS(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function cS(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uS(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fS(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hS(n,e){n.uniform1iv(this.addr,e)}function dS(n,e){n.uniform2iv(this.addr,e)}function pS(n,e){n.uniform3iv(this.addr,e)}function mS(n,e){n.uniform4iv(this.addr,e)}function gS(n,e){n.uniform1uiv(this.addr,e)}function vS(n,e){n.uniform2uiv(this.addr,e)}function _S(n,e){n.uniform3uiv(this.addr,e)}function xS(n,e){n.uniform4uiv(this.addr,e)}function yS(n,e,t){const i=this.cache,s=e.length,r=ul(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pm,r[o])}function MS(n,e,t){const i=this.cache,s=e.length,r=ul(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gm,r[o])}function SS(n,e,t){const i=this.cache,s=e.length,r=ul(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vm,r[o])}function bS(n,e,t){const i=this.cache,s=e.length,r=ul(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mm,r[o])}function ES(n){switch(n){case 5126:return rS;case 35664:return oS;case 35665:return aS;case 35666:return lS;case 35674:return cS;case 35675:return uS;case 35676:return fS;case 5124:case 35670:return hS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return vS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return bS}}class wS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}}class TS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function CS(n,e,t){const i=n.name,s=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),o=ec.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fh(t,c===void 0?new wS(a,n,e):new TS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new AS(a),Fh(t,f)),t=f}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);CS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RS=37297;let PS=0;function LS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bh=new ot;function DS(n){ht._getMatrix(Bh,ht.workingColorSpace,n);const e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case ll:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+LS(n.getShaderSource(e),o)}else return s}function IS(n,e){const t=DS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function US(n,e){let t;switch(e){case J_:t="Linear";break;case Z_:t="Reinhard";break;case Q_:t="Cineon";break;case e0:t="ACESFilmic";break;case n0:t="AgX";break;case i0:t="Neutral";break;case t0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new k;function NS(){ht.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function OS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qr(n){return n!==""}function zh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kS=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(n){return n.replace(kS,HS)}const zS=new Map;function HS(n,e){let t=at[e];if(t===void 0){const i=zS.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}const VS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(n){return n.replace(VS,GS)}function GS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function $S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case br:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function qS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vp:e="ENVMAP_BLENDING_MULTIPLY";break;case K_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function YS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function KS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WS(t),c=$S(t),u=XS(t),f=qS(t),d=YS(t),p=FS(t),g=OS(r),v=s.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),h.length>0&&(h+=`
`)):(m=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),h=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?at.tonemapping_pars_fragment:"",t.toneMapping!==is?US("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,IS("linearToOutputTexel",t.outputColorSpace),NS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=uu(o),o=zh(o,t),o=Hh(o,t),a=uu(a),a=zh(a,t),a=Hh(a,t),o=Vh(o),a=Vh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=y+m+o,x=y+h+a,P=Oh(s,s.VERTEX_SHADER,_),A=Oh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(v).trim(),J=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(A).trim();let $=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,A);else{const oe=kh(s,P,"vertex"),X=kh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+oe+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(J===""||V==="")&&(B=!1);B&&(D.diagnostics={runnable:$,programLog:Q,vertexShader:{log:J,prefix:m},fragmentShader:{log:V,prefix:h}})}s.deleteShader(P),s.deleteShader(A),N=new ya(s,v),w=BS(s,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,RS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let jS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZS(e),t.set(e,i)),i}}class ZS{constructor(e){this.id=jS++,this.code=e,this.usedTimes=0}}function QS(n,e,t,i,s,r,o){const a=new Ju,l=new JS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,Q,J){const V=Q.fog,$=J.geometry,B=w.isMeshStandardMaterial?Q.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),X=oe&&oe.mapping===al?oe.image.height:null,be=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const j=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,F=j!==void 0?j.length:0;let K=0;$.morphAttributes.position!==void 0&&(K=1),$.morphAttributes.normal!==void 0&&(K=2),$.morphAttributes.color!==void 0&&(K=3);let Ce,te,le,Ee;if(be){const gt=si[be];Ce=gt.vertexShader,te=gt.fragmentShader}else Ce=w.vertexShader,te=w.fragmentShader,l.update(w),le=l.getVertexShaderID(w),Ee=l.getFragmentShaderID(w);const ve=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),Ve=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,nt=!!w.map,C=!!w.matcap,U=!!oe,T=!!w.aoMap,pe=!!w.lightMap,se=!!w.bumpMap,re=!!w.normalMap,ce=!!w.displacementMap,me=!!w.emissiveMap,ae=!!w.metalnessMap,b=!!w.roughnessMap,S=w.anisotropy>0,I=w.clearcoat>0,q=w.dispersion>0,ee=w.iridescence>0,ne=w.sheen>0,we=w.transmission>0,xe=S&&!!w.anisotropyMap,Ae=I&&!!w.clearcoatMap,qe=I&&!!w.clearcoatNormalMap,ye=I&&!!w.clearcoatRoughnessMap,Ie=ee&&!!w.iridescenceMap,Xe=ee&&!!w.iridescenceThicknessMap,Ke=ne&&!!w.sheenColorMap,Pe=ne&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,tt=!!w.specularColorMap,pt=!!w.specularIntensityMap,H=we&&!!w.transmissionMap,Le=we&&!!w.thicknessMap,fe=!!w.gradientMap,ge=!!w.alphaMap,Ne=w.alphaTest>0,Oe=!!w.alphaHash,it=!!w.extensions;let It=is;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=n.toneMapping);const qt={shaderID:be,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:te,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&J.instanceColor!==null,instancingMorph:Ve&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:C,envMap:U,envMapMode:U&&oe.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:pe,bumpMap:se,normalMap:re,displacementMap:d&&ce,emissiveMap:me,normalMapObjectSpace:re&&w.normalMapType===a0,normalMapTangentSpace:re&&w.normalMapType===em,metalnessMap:ae,roughnessMap:b,anisotropy:S,anisotropyMap:xe,clearcoat:I,clearcoatMap:Ae,clearcoatNormalMap:qe,clearcoatRoughnessMap:ye,dispersion:q,iridescence:ee,iridescenceMap:Ie,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:Qe,specularColorMap:tt,specularIntensityMap:pt,transmission:we,transmissionMap:H,thicknessMap:Le,gradientMap:fe,opaque:w.transparent===!1&&w.blending===gr&&w.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:Oe,combine:w.combine,mapUv:nt&&v(w.map.channel),aoMapUv:T&&v(w.aoMap.channel),lightMapUv:pe&&v(w.lightMap.channel),bumpMapUv:se&&v(w.bumpMap.channel),normalMapUv:re&&v(w.normalMap.channel),displacementMapUv:ce&&v(w.displacementMap.channel),emissiveMapUv:me&&v(w.emissiveMap.channel),metalnessMapUv:ae&&v(w.metalnessMap.channel),roughnessMapUv:b&&v(w.roughnessMap.channel),anisotropyMapUv:xe&&v(w.anisotropyMap.channel),clearcoatMapUv:Ae&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(w.sheenRoughnessMap.channel),specularMapUv:Qe&&v(w.specularMap.channel),specularColorMapUv:tt&&v(w.specularColorMap.channel),specularIntensityMapUv:pt&&v(w.specularIntensityMap.channel),transmissionMapUv:H&&v(w.transmissionMap.channel),thicknessMapUv:Le&&v(w.thicknessMap.channel),alphaMapUv:ge&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(re||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(nt||ge),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ze,skinning:J.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&ht.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&ht.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ri,flipSided:w.side===vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:it&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&w.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let D;if(M){const Q=si[M];D=F0.clone(Q.uniforms)}else D=w.uniforms;return D}function P(w,M){let D;for(let Q=0,J=u.length;Q<J;Q++){const V=u[Q];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new KS(n,M,w,r),u.push(D)),D}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:N}}function eb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $h(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||tb),i.length>1&&i.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new $h,n.set(i,[o])):s>=r.length?(o=new $h,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ib(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new dt};break;case"SpotLight":t={position:new k,direction:new k,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function sb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rb=0;function ob(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ab(n){const e=new ib,t=sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Lt,o=new Lt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,y=0,_=0,x=0,P=0,A=0,L=0;c.sort(ob);for(let w=0,M=c.length;w<M;w++){const D=c[w],Q=D.color,J=D.intensity,V=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*J,f+=Q.g*J,d+=Q.b*J;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],J);L++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const oe=D.shadow,X=t.get(D);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=B,p++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(Q).multiplyScalar(J),B.distance=V,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[v]=B;const oe=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,oe.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=oe.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=$,x++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(Q).multiplyScalar(J),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=B,m++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const oe=D.shadow,X=t.get(D);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,X.shadowCameraNear=oe.camera.near,X.shadowCameraFar=oe.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(J),B.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[h]=B,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==y||N.numPointShadows!==_||N.numSpotShadows!==x||N.numSpotMaps!==P||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=y,N.numPointShadows=_,N.numSpotShadows=x,N.numSpotMaps=P,N.numLightProbes=L,i.version=rb++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const _=c[h];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Xh(n){const e=new ab(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xh(n),e.set(s,[a])):r>=o.length?(a=new Xh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class cb extends Os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ub extends Os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function db(n,e,t){let i=new Zu;const s=new Ge,r=new Ge,o=new Ht,a=new cb({depthPacking:o0}),l=new ub,c={},u=t.maxTextureSize,f={[as]:vn,[vn]:as,[Ri]:Ri},d=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:fb,fragmentShader:hb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Un(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hp;let h=this.type;this.render=function(A,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ns),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=h!==Si&&this.type===Si,V=h===Si&&this.type!==Si;for(let $=0,B=A.length;$<B;$++){const oe=A[$],X=oe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const be=X.getFrameExtents();if(s.multiply(be),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/be.x),s.x=r.x*be.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/be.y),s.y=r.y*be.y,X.mapSize.y=r.y)),X.map===null||J===!0||V===!0){const F=this.type!==Si?{minFilter:Yn,magFilter:Yn}:{};X.map!==null&&X.map.dispose(),X.map=new Is(s.x,s.y,F),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const j=X.getViewportCount();for(let F=0;F<j;F++){const K=X.getViewport(F);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),Q.viewport(o),X.updateMatrices(oe,F),i=X.getFrustum(),x(L,N,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===Si&&y(X,N),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,D)};function y(A,L){const N=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Is(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,N,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,N,p,v,null)}function _(A,L,N,w){let M=null;const D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Q=M.uuid,J=L.uuid;let V=c[Q];V===void 0&&(V={},c[Q]=V);let $=V[J];$===void 0&&($=M.clone(),V[J]=$,L.addEventListener("dispose",P)),M=$}if(M.visible=L.visible,M.wireframe=L.wireframe,w===Si?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=n.properties.get(M);Q.light=N}return M}function x(A,L,N,w,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const J=e.update(A),V=A.material;if(Array.isArray(V)){const $=J.groups;for(let B=0,oe=$.length;B<oe;B++){const X=$[B],be=V[X.materialIndex];if(be&&be.visible){const j=_(A,be,w,M);A.onBeforeShadow(n,A,L,N,J,j,X),n.renderBufferDirect(N,null,J,j,A,X),A.onAfterShadow(n,A,L,N,J,j,X)}}}else if(V.visible){const $=_(A,V,w,M);A.onBeforeShadow(n,A,L,N,J,$,null),n.renderBufferDirect(N,null,J,$,A,null),A.onAfterShadow(n,A,L,N,J,$,null)}}const Q=A.children;for(let J=0,V=Q.length;J<V;J++)x(Q[J],L,N,w,M)}function P(A){A.target.removeEventListener("dispose",P);for(const N in c){const w=c[N],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const pb={[wc]:Tc,[Ac]:Pc,[Cc]:Lc,[Mr]:Rc,[Tc]:wc,[Pc]:Ac,[Lc]:Cc,[Rc]:Mr};function mb(n,e){function t(){let H=!1;const Le=new Ht;let fe=null;const ge=new Ht(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!H&&(n.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){H=Ne},setClear:function(Ne,Oe,it,It,qt){qt===!0&&(Ne*=It,Oe*=It,it*=It),Le.set(Ne,Oe,it,It),ge.equals(Le)===!1&&(n.clearColor(Ne,Oe,it,It),ge.copy(Le))},reset:function(){H=!1,fe=null,ge.set(-1,0,0,0)}}}function i(){let H=!1,Le=!1,fe=null,ge=null,Ne=null;return{setReversed:function(Oe){if(Le!==Oe){const it=e.get("EXT_clip_control");Le?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const It=Ne;Ne=null,this.setClear(It)}Le=Oe},getReversed:function(){return Le},setTest:function(Oe){Oe?ve(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Oe){fe!==Oe&&!H&&(n.depthMask(Oe),fe=Oe)},setFunc:function(Oe){if(Le&&(Oe=pb[Oe]),ge!==Oe){switch(Oe){case wc:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Ne!==Oe&&(Le&&(Oe=1-Oe),n.clearDepth(Oe),Ne=Oe)},reset:function(){H=!1,fe=null,ge=null,Ne=null,Le=!1}}}function s(){let H=!1,Le=null,fe=null,ge=null,Ne=null,Oe=null,it=null,It=null,qt=null;return{setTest:function(gt){H||(gt?ve(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(gt){Le!==gt&&!H&&(n.stencilMask(gt),Le=gt)},setFunc:function(gt,_n,G){(fe!==gt||ge!==_n||Ne!==G)&&(n.stencilFunc(gt,_n,G),fe=gt,ge=_n,Ne=G)},setOp:function(gt,_n,G){(Oe!==gt||it!==_n||It!==G)&&(n.stencilOp(gt,_n,G),Oe=gt,it=_n,It=G)},setLocked:function(gt){H=gt},setClear:function(gt){qt!==gt&&(n.clearStencil(gt),qt=gt)},reset:function(){H=!1,Le=null,fe=null,ge=null,Ne=null,Oe=null,it=null,It=null,qt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,P=null,A=null,L=new dt(0,0,0),N=0,w=!1,M=null,D=null,Q=null,J=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,oe=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=oe>=2);let be=null,j={};const F=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),Ce=new Ht().fromArray(F),te=new Ht().fromArray(K);function le(H,Le,fe,ge){const Ne=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(H,Oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<fe;it++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Le+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Oe}const Ee={};Ee[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Mr),se(!1),re(Zf),ve(n.CULL_FACE),T(ns);function ve(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ze(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Ve(H,Le){return f[H]!==Le?(n.bindFramebuffer(H,Le),f[H]=Le,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Le),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ze(H,Le){let fe=p,ge=!1;if(H){fe=d.get(Le),fe===void 0&&(fe=[],d.set(Le,fe));const Ne=H.textures;if(fe.length!==Ne.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,it=Ne.length;Oe<it;Oe++)fe[Oe]=n.COLOR_ATTACHMENT0+Oe;fe.length=Ne.length,ge=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,ge=!0);ge&&n.drawBuffers(fe)}function nt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const C={[bs]:n.FUNC_ADD,[D_]:n.FUNC_SUBTRACT,[I_]:n.FUNC_REVERSE_SUBTRACT};C[U_]=n.MIN,C[N_]=n.MAX;const U={[F_]:n.ZERO,[O_]:n.ONE,[B_]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[W_]:n.SRC_ALPHA_SATURATE,[V_]:n.DST_COLOR,[z_]:n.DST_ALPHA,[k_]:n.ONE_MINUS_SRC_COLOR,[Ec]:n.ONE_MINUS_SRC_ALPHA,[G_]:n.ONE_MINUS_DST_COLOR,[H_]:n.ONE_MINUS_DST_ALPHA,[$_]:n.CONSTANT_COLOR,[X_]:n.ONE_MINUS_CONSTANT_COLOR,[q_]:n.CONSTANT_ALPHA,[Y_]:n.ONE_MINUS_CONSTANT_ALPHA};function T(H,Le,fe,ge,Ne,Oe,it,It,qt,gt){if(H===ns){v===!0&&(ze(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),H!==L_){if(H!==m||gt!==w){if((h!==bs||x!==bs)&&(n.blendEquation(n.FUNC_ADD),h=bs,x=bs),gt)switch(H){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFunc(n.ONE,n.ONE);break;case Qf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,_=null,P=null,A=null,L.set(0,0,0),N=0,m=H,w=gt}return}Ne=Ne||Le,Oe=Oe||fe,it=it||ge,(Le!==h||Ne!==x)&&(n.blendEquationSeparate(C[Le],C[Ne]),h=Le,x=Ne),(fe!==y||ge!==_||Oe!==P||it!==A)&&(n.blendFuncSeparate(U[fe],U[ge],U[Oe],U[it]),y=fe,_=ge,P=Oe,A=it),(It.equals(L)===!1||qt!==N)&&(n.blendColor(It.r,It.g,It.b,qt),L.copy(It),N=qt),m=H,w=!1}function pe(H,Le){H.side===Ri?ze(n.CULL_FACE):ve(n.CULL_FACE);let fe=H.side===vn;Le&&(fe=!fe),se(fe),H.blending===gr&&H.transparent===!1?T(ns):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ge=H.stencilWrite;a.setTest(ge),ge&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function re(H){H!==C_?(ve(n.CULL_FACE),H!==D&&(H===Zf?n.cullFace(n.BACK):H===R_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),D=H}function ce(H){H!==Q&&(B&&n.lineWidth(H),Q=H)}function me(H,Le,fe){H?(ve(n.POLYGON_OFFSET_FILL),(J!==Le||V!==fe)&&(n.polygonOffset(Le,fe),J=Le,V=fe)):ze(n.POLYGON_OFFSET_FILL)}function ae(H){H?ve(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function b(H){H===void 0&&(H=n.TEXTURE0+$-1),be!==H&&(n.activeTexture(H),be=H)}function S(H,Le,fe){fe===void 0&&(be===null?fe=n.TEXTURE0+$-1:fe=be);let ge=j[fe];ge===void 0&&(ge={type:void 0,texture:void 0},j[fe]=ge),(ge.type!==H||ge.texture!==Le)&&(be!==fe&&(n.activeTexture(fe),be=fe),n.bindTexture(H,Le||Ee[H]),ge.type=H,ge.texture=Le)}function I(){const H=j[be];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ke(H){Ce.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function Pe(H){te.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function Qe(H,Le){let fe=c.get(Le);fe===void 0&&(fe=new WeakMap,c.set(Le,fe));let ge=fe.get(H);ge===void 0&&(ge=n.getUniformBlockIndex(Le,H.name),fe.set(H,ge))}function tt(H,Le){const ge=c.get(Le).get(H);l.get(Le)!==ge&&(n.uniformBlockBinding(Le,ge,H.__bindingPointIndex),l.set(Le,ge))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},be=null,j={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,P=null,A=null,L=new dt(0,0,0),N=0,w=!1,M=null,D=null,Q=null,J=null,V=null,Ce.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:ze,bindFramebuffer:Ve,drawBuffers:Ze,useProgram:nt,setBlending:T,setMaterial:pe,setFlipSided:se,setCullFace:re,setLineWidth:ce,setPolygonOffset:me,setScissorTest:ae,activeTexture:b,bindTexture:S,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:Ie,texImage3D:Xe,updateUBOMapping:Qe,uniformBlockBinding:tt,texStorage2D:qe,texStorage3D:ye,texSubImage2D:ne,texSubImage3D:we,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ae,scissor:Ke,viewport:Pe,reset:pt}}function qh(n,e,t,i){const s=gb(i);switch(t){case qp:return n*e;case Kp:return n*e;case jp:return n*e*2;case Jp:return n*e/s.components*s.byteLength;case qu:return n*e/s.components*s.byteLength;case Zp:return n*e*2/s.components*s.byteLength;case Yu:return n*e*2/s.components*s.byteLength;case Yp:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Ku:return n*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Fc:case Bc:return Math.max(n,8)*Math.max(e,8)/2;case zc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xa:case iu:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qp:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gb(n){switch(n){case ki:case Wp:return{byteLength:1,components:1};case uo:case $p:case bo:return{byteLength:2,components:1};case $u:case Xu:return{byteLength:2,components:4};case Ds:case Wu:case Pi:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):ka("canvas")}function v(b,S,I){let q=1;const ee=ae(b);if((ee.width>I||ee.height>I)&&(q=I/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(q*ee.width),we=Math.floor(q*ee.height);f===void 0&&(f=g(ne,we));const xe=S?g(ne,we):f;return xe.width=ne,xe.height=we,xe.getContext("2d").drawImage(b,0,0,ne,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+we+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(b,S,I,q,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=S;if(S===n.RED&&(I===n.FLOAT&&(ne=n.R32F),I===n.HALF_FLOAT&&(ne=n.R16F),I===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(ne=n.R8UI),I===n.UNSIGNED_SHORT&&(ne=n.R16UI),I===n.UNSIGNED_INT&&(ne=n.R32UI),I===n.BYTE&&(ne=n.R8I),I===n.SHORT&&(ne=n.R16I),I===n.INT&&(ne=n.R32I)),S===n.RG&&(I===n.FLOAT&&(ne=n.RG32F),I===n.HALF_FLOAT&&(ne=n.RG16F),I===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(ne=n.RG8UI),I===n.UNSIGNED_SHORT&&(ne=n.RG16UI),I===n.UNSIGNED_INT&&(ne=n.RG32UI),I===n.BYTE&&(ne=n.RG8I),I===n.SHORT&&(ne=n.RG16I),I===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),I===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),I===n.UNSIGNED_INT&&(ne=n.RGB32UI),I===n.BYTE&&(ne=n.RGB8I),I===n.SHORT&&(ne=n.RGB16I),I===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),I===n.UNSIGNED_INT&&(ne=n.RGBA32UI),I===n.BYTE&&(ne=n.RGBA8I),I===n.SHORT&&(ne=n.RGBA16I),I===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),S===n.RGBA){const we=ee?ll:ht.getTransfer(q);I===n.FLOAT&&(ne=n.RGBA32F),I===n.HALF_FLOAT&&(ne=n.RGBA16F),I===n.UNSIGNED_BYTE&&(ne=we===bt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(b,S){let I;return b?S===null||S===Ds||S===Er?I=n.DEPTH24_STENCIL8:S===Pi?I=n.DEPTH32F_STENCIL8:S===uo&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ds||S===Er?I=n.DEPTH_COMPONENT24:S===Pi?I=n.DEPTH_COMPONENT32F:S===uo&&(I=n.DEPTH_COMPONENT16),I}function P(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yn&&b.minFilter!==ai?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),N(S),S.isVideoTexture&&u.delete(S)}function L(b){const S=b.target;S.removeEventListener("dispose",L),M(S)}function N(b){const S=i.get(b);if(S.__webglInit===void 0)return;const I=b.source,q=d.get(I);if(q){const ee=q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(b),Object.keys(q).length===0&&d.delete(I)}i.remove(b)}function w(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const I=b.source,q=d.get(I);delete q[S.__cacheKey],o.memory.textures--}function M(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ee=0;ee<S.__webglFramebuffer[q].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[q][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=b.textures;for(let q=0,ee=I.length;q<ee;q++){const ne=i.get(I[q]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(I[q])}i.remove(b)}let D=0;function Q(){D=0}function J(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function V(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function $(b,S){const I=i.get(b);if(b.isVideoTexture&&ce(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,b,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function B(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){te(I,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function oe(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){te(I,b,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function X(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){le(I,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const be={[Uc]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},j={[Yn]:n.NEAREST,[s0]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},F={[l0]:n.NEVER,[p0]:n.ALWAYS,[c0]:n.LESS,[tm]:n.LEQUAL,[u0]:n.EQUAL,[d0]:n.GEQUAL,[f0]:n.GREATER,[h0]:n.NOTEQUAL};function K(b,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ai||S.magFilter===Tl||S.magFilter===Uo||S.magFilter===As||S.minFilter===ai||S.minFilter===Tl||S.minFilter===Uo||S.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,be[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,be[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,be[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,F[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yn||S.minFilter!==Uo&&S.minFilter!==As||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(b,S){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let ee=d.get(q);ee===void 0&&(ee={},d.set(q,ee));const ne=V(S);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ee[ne].usedTimes++;const we=ee[b.__cacheKey];we!==void 0&&(ee[b.__cacheKey].usedTimes--,we.usedTimes===0&&w(S)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return I}function te(b,S,I){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const ee=Ce(b,S),ne=S.source;t.bindTexture(q,b.__webglTexture,n.TEXTURE0+I);const we=i.get(ne);if(ne.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+I);const xe=ht.getPrimaries(ht.workingColorSpace),Ae=S.colorSpace===ji?null:ht.getPrimaries(S.colorSpace),qe=S.colorSpace===ji||xe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=v(S.image,!1,s.maxTextureSize);ye=me(S,ye);const Ie=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type);let Ke=_(S.internalFormat,Ie,Xe,S.colorSpace,S.isVideoTexture);K(q,S);let Pe;const Qe=S.mipmaps,tt=S.isVideoTexture!==!0,pt=we.__version===void 0||ee===!0,H=ne.dataReady,Le=P(S,ye);if(S.isDepthTexture)Ke=x(S.format===wr,S.type),pt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Ke,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Ie,Xe,null));else if(S.isDataTexture)if(Qe.length>0){tt&&pt&&t.texStorage2D(n.TEXTURE_2D,Le,Ke,Qe[0].width,Qe[0].height);for(let fe=0,ge=Qe.length;fe<ge;fe++)Pe=Qe[fe],tt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Pe.width,Pe.height,Ie,Xe,Pe.data):t.texImage2D(n.TEXTURE_2D,fe,Ke,Pe.width,Pe.height,0,Ie,Xe,Pe.data);S.generateMipmaps=!1}else tt?(pt&&t.texStorage2D(n.TEXTURE_2D,Le,Ke,ye.width,ye.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,Ie,Xe,ye.data)):t.texImage2D(n.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Ie,Xe,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ke,Qe[0].width,Qe[0].height,ye.depth);for(let fe=0,ge=Qe.length;fe<ge;fe++)if(Pe=Qe[fe],S.format!==Wn)if(Ie!==null)if(tt){if(H)if(S.layerUpdates.size>0){const Ne=qh(Pe.width,Pe.height,S.format,S.type);for(const Oe of S.layerUpdates){const it=Pe.data.subarray(Oe*Ne/Pe.data.BYTES_PER_ELEMENT,(Oe+1)*Ne/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Oe,Pe.width,Pe.height,1,Ie,it)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Pe.width,Pe.height,ye.depth,Ie,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ke,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Pe.width,Pe.height,ye.depth,Ie,Xe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ke,Pe.width,Pe.height,ye.depth,0,Ie,Xe,Pe.data)}else{tt&&pt&&t.texStorage2D(n.TEXTURE_2D,Le,Ke,Qe[0].width,Qe[0].height);for(let fe=0,ge=Qe.length;fe<ge;fe++)Pe=Qe[fe],S.format!==Wn?Ie!==null?tt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Pe.width,Pe.height,Ie,Xe,Pe.data):t.texImage2D(n.TEXTURE_2D,fe,Ke,Pe.width,Pe.height,0,Ie,Xe,Pe.data)}else if(S.isDataArrayTexture)if(tt){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ke,ye.width,ye.height,ye.depth),H)if(S.layerUpdates.size>0){const fe=qh(ye.width,ye.height,S.format,S.type);for(const ge of S.layerUpdates){const Ne=ye.data.subarray(ge*fe/ye.data.BYTES_PER_ELEMENT,(ge+1)*fe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Ie,Xe,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ie,Xe,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,ye.width,ye.height,ye.depth,0,Ie,Xe,ye.data);else if(S.isData3DTexture)tt?(pt&&t.texStorage3D(n.TEXTURE_3D,Le,Ke,ye.width,ye.height,ye.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ie,Xe,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,ye.width,ye.height,ye.depth,0,Ie,Xe,ye.data);else if(S.isFramebufferTexture){if(pt)if(tt)t.texStorage2D(n.TEXTURE_2D,Le,Ke,ye.width,ye.height);else{let fe=ye.width,ge=ye.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ke,fe,ge,0,Ie,Xe,null),fe>>=1,ge>>=1}}else if(Qe.length>0){if(tt&&pt){const fe=ae(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ke,fe.width,fe.height)}for(let fe=0,ge=Qe.length;fe<ge;fe++)Pe=Qe[fe],tt?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ie,Xe,Pe):t.texImage2D(n.TEXTURE_2D,fe,Ke,Ie,Xe,Pe);S.generateMipmaps=!1}else if(tt){if(pt){const fe=ae(ye);t.texStorage2D(n.TEXTURE_2D,Le,Ke,fe.width,fe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,Xe,ye)}else t.texImage2D(n.TEXTURE_2D,0,Ke,Ie,Xe,ye);m(S)&&h(q),we.__version=ne.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function le(b,S,I){if(S.image.length!==6)return;const q=Ce(b,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const ne=i.get(ee);if(ee.version!==ne.__version||q===!0){t.activeTexture(n.TEXTURE0+I);const we=ht.getPrimaries(ht.workingColorSpace),xe=S.colorSpace===ji?null:ht.getPrimaries(S.colorSpace),Ae=S.colorSpace===ji||we===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!qe&&!ye?Ie[ge]=v(S.image[ge],!0,s.maxCubemapSize):Ie[ge]=ye?S.image[ge].image:S.image[ge],Ie[ge]=me(S,Ie[ge]);const Xe=Ie[0],Ke=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),Qe=_(S.internalFormat,Ke,Pe,S.colorSpace),tt=S.isVideoTexture!==!0,pt=ne.__version===void 0||q===!0,H=ee.dataReady;let Le=P(S,Xe);K(n.TEXTURE_CUBE_MAP,S);let fe;if(qe){tt&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Qe,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){fe=Ie[ge].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const Oe=fe[Ne];S.format!==Wn?Ke!==null?tt?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,Oe.width,Oe.height,Ke,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,Oe.width,Oe.height,Ke,Pe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Qe,Oe.width,Oe.height,0,Ke,Pe,Oe.data)}}}else{if(fe=S.mipmaps,tt&&pt){fe.length>0&&Le++;const ge=ae(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Qe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,Ke,Pe,Ie[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,Ie[ge].width,Ie[ge].height,0,Ke,Pe,Ie[ge].data);for(let Ne=0;Ne<fe.length;Ne++){const it=fe[Ne].image[ge].image;tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,it.width,it.height,Ke,Pe,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Qe,it.width,it.height,0,Ke,Pe,it.data)}}else{tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Pe,Ie[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,Ke,Pe,Ie[ge]);for(let Ne=0;Ne<fe.length;Ne++){const Oe=fe[Ne];tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,Ke,Pe,Oe.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Qe,Ke,Pe,Oe.image[ge])}}}m(S)&&h(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ee(b,S,I,q,ee,ne){const we=r.convert(I.format,I.colorSpace),xe=r.convert(I.type),Ae=_(I.internalFormat,we,xe,I.colorSpace),qe=i.get(S),ye=i.get(I);if(ye.__renderTarget=S,!qe.__hasExternalTextures){const Ie=Math.max(1,S.width>>ne),Xe=Math.max(1,S.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,Ae,Ie,Xe,S.depth,0,we,xe,null):t.texImage2D(ee,ne,Ae,Ie,Xe,0,we,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ee,ye.__webglTexture,0,se(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ee,ye.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(b,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){const q=S.depthTexture,ee=q&&q.isDepthTexture?q.type:null,ne=x(S.stencilBuffer,ee),we=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=se(S);re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ne,S.width,S.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,b)}else{const q=S.textures;for(let ee=0;ee<q.length;ee++){const ne=q[ee],we=r.convert(ne.format,ne.colorSpace),xe=r.convert(ne.type),Ae=_(ne.internalFormat,we,xe,ne.colorSpace),qe=se(S);I&&re(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ae,S.width,S.height):re(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ee=q.__webglTexture,ne=se(S);if(S.depthTexture.format===vr)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===wr)re(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ve(b){const S=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=q}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ze(S.__webglFramebuffer,b)}else if(I){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[q],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(b,S,I){const q=i.get(b);S!==void 0&&Ee(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ve(b)}function nt(b){const S=b.texture,I=i.get(b),q=i.get(S);b.addEventListener("dispose",L);const ee=b.textures,ne=b.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,o.memory.textures++),ne){I.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)I.__webglFramebuffer[xe][Ae]=n.createFramebuffer()}else I.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)I.__webglFramebuffer[xe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(we)for(let xe=0,Ae=ee.length;xe<Ae;xe++){const qe=i.get(ee[xe]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&re(b)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let xe=0;xe<ee.length;xe++){const Ae=ee[xe];I.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[xe]);const qe=r.convert(Ae.format,Ae.colorSpace),ye=r.convert(Ae.type),Ie=_(Ae.internalFormat,qe,ye,Ae.colorSpace,b.isXRRenderTarget===!0),Xe=se(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ie,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,I.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),K(n.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(I.__webglFramebuffer[xe][Ae],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else Ee(I.__webglFramebuffer[xe],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let xe=0,Ae=ee.length;xe<Ae;xe++){const qe=ee[xe],ye=i.get(qe);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),K(n.TEXTURE_2D,qe),Ee(I.__webglFramebuffer,b,qe,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),m(qe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,q.__webglTexture),K(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(I.__webglFramebuffer[Ae],b,S,n.COLOR_ATTACHMENT0,xe,Ae);else Ee(I.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,xe,0);m(S)&&h(xe),t.unbindTexture()}b.depthBuffer&&Ve(b)}function C(b){const S=b.textures;for(let I=0,q=S.length;I<q;I++){const ee=S[I];if(m(ee)){const ne=y(b),we=i.get(ee).__webglTexture;t.bindTexture(ne,we),h(ne),t.unbindTexture()}}}const U=[],T=[];function pe(b){if(b.samples>0){if(re(b)===!1){const S=b.textures,I=b.width,q=b.height;let ee=n.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(b),xe=S.length>1;if(xe)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const qe=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,I,q,0,0,I,q,ee,n.NEAREST),l===!0&&(U.length=0,T.length=0,U.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(ne),T.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const qe=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function se(b){return Math.min(s.maxSamples,b.samples)}function re(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function me(b,S){const I=b.colorSpace,q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==Ar&&I!==ji&&(ht.getTransfer(I)===bt?(q!==Wn||ee!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=oe,this.setTextureCube=X,this.rebindTextures=Ze,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=re}function _b(n,e){function t(i,s=ji){let r;const o=ht.getTransfer(s);if(i===ki)return n.UNSIGNED_BYTE;if(i===$u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wp)return n.BYTE;if(i===$p)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Wu)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===bo)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===Yp)return n.RGB;if(i===Wn)return n.RGBA;if(i===Kp)return n.LUMINANCE;if(i===jp)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Jp)return n.RED;if(i===qu)return n.RED_INTEGER;if(i===Zp)return n.RG;if(i===Yu)return n.RG_INTEGER;if(i===Ku)return n.RGBA_INTEGER;if(i===ma||i===ga||i===va||i===_a)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gc||i===Wc||i===$c||i===Xc||i===qc||i===Yc||i===Kc||i===jc||i===Jc||i===Zc||i===Qc||i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===iu||i===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xa)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qp||i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
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

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ls({vertexShader:Mb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eb extends Cr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new bb,m=t.getContextAttributes();let h=null,y=null;const _=[],x=[],P=new Ge;let A=null;const L=new Ln;L.viewport=new Ht;const N=new Ln;N.viewport=new Ht;const w=[L,N],M=new xb;let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=_[te];return le===void 0&&(le=new tc,_[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=_[te];return le===void 0&&(le=new tc,_[te]=le),le.getGripSpace()},this.getHand=function(te){let le=_[te];return le===void 0&&(le=new tc,_[te]=le),le.getHandSpace()};function J(te){const le=x.indexOf(te.inputSource);if(le===-1)return;const Ee=_[le];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,c||o),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let te=0;te<_.length;te++){const le=x[te];le!==null&&(x[te]=null,_[te].disconnect(le))}D=null,Q=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Is(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Ee=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?wr:vr,Ee=m.stencil?Er:Ds);const ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Is(d.textureWidth,d.textureHeight,{format:Wn,type:ki,depthTexture:new dm(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(te){for(let le=0;le<te.removed.length;le++){const Ee=te.removed[le],ve=x.indexOf(Ee);ve>=0&&(x[ve]=null,_[ve].disconnect(Ee))}for(let le=0;le<te.added.length;le++){const Ee=te.added[le];let ve=x.indexOf(Ee);if(ve===-1){for(let Ve=0;Ve<_.length;Ve++)if(Ve>=x.length){x.push(Ee),ve=Ve;break}else if(x[Ve]===null){x[Ve]=Ee,ve=Ve;break}if(ve===-1)break}const ze=_[ve];ze&&ze.connect(Ee)}}const B=new k,oe=new k;function X(te,le,Ee){B.setFromMatrixPosition(le.matrixWorld),oe.setFromMatrixPosition(Ee.matrixWorld);const ve=B.distanceTo(oe),ze=le.projectionMatrix.elements,Ve=Ee.projectionMatrix.elements,Ze=ze[14]/(ze[10]-1),nt=ze[14]/(ze[10]+1),C=(ze[9]+1)/ze[5],U=(ze[9]-1)/ze[5],T=(ze[8]-1)/ze[0],pe=(Ve[8]+1)/Ve[0],se=Ze*T,re=Ze*pe,ce=ve/(-T+pe),me=ce*-T;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(me),te.translateZ(ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ae=Ze+ce,b=nt+ce,S=se-me,I=re+(ve-me),q=C*nt/b*ae,ee=U*nt/b*ae;te.projectionMatrix.makePerspective(S,I,q,ee,ae,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function be(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let le=te.near,Ee=te.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),M.near=N.near=L.near=le,M.far=N.far=L.far=Ee,(D!==M.near||Q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Q=M.far),L.layers.mask=te.layers.mask|2,N.layers.mask=te.layers.mask|4,M.layers.mask=L.layers.mask|N.layers.mask;const ve=te.parent,ze=M.cameras;be(M,ve);for(let Ve=0;Ve<ze.length;Ve++)be(ze[Ve],ve);ze.length===2?X(M,L,N):M.projectionMatrix.copy(L.projectionMatrix),j(te,M,ve)};function j(te,le,Ee){Ee===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=cu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let F=null;function K(te,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ve=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let Ve=0;Ve<Ee.length;Ve++){const Ze=Ee[Ve];let nt=null;if(p!==null)nt=p.getViewport(Ze);else{const U=f.getViewSubImage(d,Ze);nt=U.viewport,Ve===0&&(e.setRenderTargetTextures(y,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(y))}let C=w[Ve];C===void 0&&(C=new Ln,C.layers.enable(Ve),C.viewport=new Ht,w[Ve]=C),C.matrix.fromArray(Ze.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ze.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(nt.x,nt.y,nt.width,nt.height),Ve===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(C)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Ve=f.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,s.renderState)}}for(let Ee=0;Ee<_.length;Ee++){const ve=x[Ee],ze=_[Ee];ve!==null&&ze!==void 0&&ze.update(ve,le,c||o)}F&&F(te,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ce=new fm;Ce.setAnimationLoop(K),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const vs=new Jn,wb=new Lt;function Tb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,lm(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,vs.copy(x),vs.x*=-1,vs.y*=-1,vs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(vs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ab(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(y,P);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const _=f();y.__bindingPointIndex=_;const x=n.createBuffer(),P=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,L=x.length;A<L;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=N.length;w<M;w++){const D=N[w];if(p(D,A,w,P)===!0){const Q=D.__offset,J=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let $=0;$<J.length;$++){const B=J[$],oe=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,Q+V,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,V),V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,_,x,P){const A=y.value,L=_+"_"+x;if(P[L]===void 0)return typeof A=="number"||typeof A=="boolean"?P[L]=A:P[L]=A.clone(),!0;{const N=P[L];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[L]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){const _=y.uniforms;let x=0;const P=16;for(let L=0,N=_.length;L<N;L++){const w=Array.isArray(_[L])?_[L]:[_[L]];for(let M=0,D=w.length;M<D;M++){const Q=w[M],J=Array.isArray(Q.value)?Q.value:[Q.value];for(let V=0,$=J.length;V<$;V++){const B=J[V],oe=v(B),X=x%P,be=X%oe.boundary,j=X+be;x+=be,j!==0&&P-j<oe.storage&&(x+=P-j),Q.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=x,x+=oe.storage}}}const A=x%P;return A>0&&(x+=P-A),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function h(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Cb{constructor(e={}){const{canvas:t=g0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=is,this.toneMappingExposure=1;const x=this;let P=!1,A=0,L=0,N=null,w=-1,M=null;const D=new Ht,Q=new Ht;let J=null;const V=new dt(0);let $=0,B=t.width,oe=t.height,X=1,be=null,j=null;const F=new Ht(0,0,B,oe),K=new Ht(0,0,B,oe);let Ce=!1;const te=new Zu;let le=!1,Ee=!1;const ve=new Lt,ze=new Lt,Ve=new k,Ze=new Ht,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function U(){return N===null?X:1}let T=i;function pe(E,W){return t.getContext(E,W)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),T===null){const W="webgl2";if(T=pe(W,E),T===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,re,ce,me,ae,b,S,I,q,ee,ne,we,xe,Ae,qe,ye,Ie,Xe,Ke,Pe,Qe,tt,pt,H;function Le(){se=new IM(T),se.init(),tt=new _b(T,se),re=new AM(T,se,e,tt),ce=new mb(T,se),re.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),me=new FM(T),ae=new eb,b=new vb(T,se,ce,ae,re,tt,me),S=new RM(x),I=new DM(x),q=new G0(T),pt=new wM(T,q),ee=new UM(T,q,me,pt),ne=new BM(T,ee,q,me),Ke=new OM(T,re,b),ye=new CM(ae),we=new QS(x,S,I,se,re,pt,ye),xe=new Tb(x,ae),Ae=new nb,qe=new lb(se),Xe=new EM(x,S,I,ce,ne,p,l),Ie=new db(x,ne,re),H=new Ab(T,me,re,ce),Pe=new TM(T,se,me),Qe=new NM(T,se,me),me.programs=we.programs,x.capabilities=re,x.extensions=se,x.properties=ae,x.renderLists=Ae,x.shadowMap=Ie,x.state=ce,x.info=me}Le();const fe=new Eb(x,T);this.xr=fe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(B,oe,!1))},this.getSize=function(E){return E.set(B,oe)},this.setSize=function(E,W,ie=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,oe=W,t.width=Math.floor(E*X),t.height=Math.floor(W*X),ie===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(B*X,oe*X).floor()},this.setDrawingBufferSize=function(E,W,ie){B=E,oe=W,X=ie,t.width=Math.floor(E*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,W,ie,Z){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,W,ie,Z),ce.viewport(D.copy(F).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,W,ie,Z){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,W,ie,Z),ce.scissor(Q.copy(K).multiplyScalar(X).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){ce.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(E=!0,W=!0,ie=!0){let Z=0;if(E){let z=!1;if(N!==null){const Te=N.texture.format;z=Te===Ku||Te===Yu||Te===qu}if(z){const Te=N.texture.type,De=Te===ki||Te===Ds||Te===uo||Te===Er||Te===$u||Te===Xu,He=Xe.getClearColor(),Be=Xe.getClearAlpha(),We=He.r,ke=He.g,Fe=He.b;De?(g[0]=We,g[1]=ke,g[2]=Fe,g[3]=Be,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=We,v[1]=ke,v[2]=Fe,v[3]=Be,T.clearBufferiv(T.COLOR,0,v))}else Z|=T.COLOR_BUFFER_BIT}W&&(Z|=T.DEPTH_BUFFER_BIT),ie&&(Z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ae.dispose(),qe.dispose(),ae.dispose(),S.dispose(),I.dispose(),ne.dispose(),pt.dispose(),H.dispose(),we.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Me),fe.removeEventListener("sessionend",de),Re.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=me.autoReset,W=Ie.enabled,ie=Ie.autoUpdate,Z=Ie.needsUpdate,z=Ie.type;Le(),me.autoReset=E,Ie.enabled=W,Ie.autoUpdate=ie,Ie.needsUpdate=Z,Ie.type=z}function Oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const W=E.target;W.removeEventListener("dispose",it),It(W)}function It(E){qt(E),ae.remove(E)}function qt(E){const W=ae.get(E).programs;W!==void 0&&(W.forEach(function(ie){we.releaseProgram(ie)}),E.isShaderMaterial&&we.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,ie,Z,z,Te){W===null&&(W=nt);const De=z.isMesh&&z.matrixWorld.determinant()<0,He=Bs(E,W,ie,Z,z);ce.setMaterial(Z,De);let Be=ie.index,We=1;if(Z.wireframe===!0){if(Be=ee.getWireframeAttribute(ie),Be===void 0)return;We=2}const ke=ie.drawRange,Fe=ie.attributes.position;let ct=ke.start*We,vt=(ke.start+ke.count)*We;Te!==null&&(ct=Math.max(ct,Te.start*We),vt=Math.min(vt,(Te.start+Te.count)*We)),Be!==null?(ct=Math.max(ct,0),vt=Math.min(vt,Be.count)):Fe!=null&&(ct=Math.max(ct,0),vt=Math.min(vt,Fe.count));const Mt=vt-ct;if(Mt<0||Mt===1/0)return;pt.setup(z,Z,He,ie,Be);let Qt,mt=Pe;if(Be!==null&&(Qt=q.get(Be),mt=Qe,mt.setIndex(Qt)),z.isMesh)Z.wireframe===!0?(ce.setLineWidth(Z.wireframeLinewidth*U()),mt.setMode(T.LINES)):mt.setMode(T.TRIANGLES);else if(z.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),ce.setLineWidth($e*U()),z.isLineSegments?mt.setMode(T.LINES):z.isLineLoop?mt.setMode(T.LINE_LOOP):mt.setMode(T.LINE_STRIP)}else z.isPoints?mt.setMode(T.POINTS):z.isSprite&&mt.setMode(T.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const $e=z._multiDrawStarts,mi=z._multiDrawCounts,_t=z._multiDrawCount,kn=Be?q.get(Be).bytesPerElement:1,zs=ae.get(Z).currentProgram.getUniforms();for(let xn=0;xn<_t;xn++)zs.setValue(T,"_gl_DrawID",xn),mt.render($e[xn]/kn,mi[xn])}else if(z.isInstancedMesh)mt.renderInstances(ct,Mt,z.count);else if(ie.isInstancedBufferGeometry){const $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,mi=Math.min(ie.instanceCount,$e);mt.renderInstances(ct,Mt,mi)}else mt.render(ct,Mt)};function gt(E,W,ie){E.transparent===!0&&E.side===Ri&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,Ut(E,W,ie),E.side=as,E.needsUpdate=!0,Ut(E,W,ie),E.side=Ri):Ut(E,W,ie)}this.compile=function(E,W,ie=null){ie===null&&(ie=E),h=qe.get(ie),h.init(W),_.push(h),ie.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),E!==ie&&E.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const Z=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Te=z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const He=Te[De];gt(He,ie,z),Z.add(He)}else gt(Te,ie,z),Z.add(Te)}),_.pop(),h=null,Z},this.compileAsync=function(E,W,ie=null){const Z=this.compile(E,W,ie);return new Promise(z=>{function Te(){if(Z.forEach(function(De){ae.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){z(E);return}setTimeout(Te,10)}se.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let _n=null;function G(E){_n&&_n(E)}function Me(){Re.stop()}function de(){Re.start()}const Re=new fm;Re.setAnimationLoop(G),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(E){_n=E,fe.setAnimationLoop(E),E===null?Re.stop():Re.start()},fe.addEventListener("sessionstart",Me),fe.addEventListener("sessionend",de),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(W),W=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,W,N),h=qe.get(E,_.length),h.init(W),_.push(h),ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(ze),Ee=this.localClippingEnabled,le=ye.init(this.clippingPlanes,Ee),m=Ae.get(E,y.length),m.init(),y.push(m),fe.enabled===!0&&fe.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&Je(Te,W,-1/0,x.sortObjects)}Je(E,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(be,j),C=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,C&&Xe.addToRenderList(m,E),this.info.render.frame++,le===!0&&ye.beginShadows();const ie=h.state.shadowsArray;Ie.render(ie,E,W),le===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,z=m.transmissive;if(h.setupLights(),W.isArrayCamera){const Te=W.cameras;if(z.length>0)for(let De=0,He=Te.length;De<He;De++){const Be=Te[De];et(Z,z,E,Be)}C&&Xe.render(E);for(let De=0,He=Te.length;De<He;De++){const Be=Te[De];ut(m,E,Be,Be.viewport)}}else z.length>0&&et(Z,z,E,W),C&&Xe.render(E),ut(m,E,W);N!==null&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(x,E,W),pt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(h=_[_.length-1],le===!0&&ye.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Je(E,W,ie,Z){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)ie=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){Z&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);const De=ne.update(E),He=E.material;He.visible&&m.push(E,De,He,ie,Ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const De=ne.update(E),He=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ze.copy(De.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(He)){const Be=De.groups;for(let We=0,ke=Be.length;We<ke;We++){const Fe=Be[We],ct=He[Fe.materialIndex];ct&&ct.visible&&m.push(E,De,ct,ie,Ze.z,Fe)}}else He.visible&&m.push(E,De,He,ie,Ze.z,null)}}const Te=E.children;for(let De=0,He=Te.length;De<He;De++)Je(Te[De],W,ie,Z)}function ut(E,W,ie,Z){const z=E.opaque,Te=E.transmissive,De=E.transparent;h.setupLightsView(ie),le===!0&&ye.setGlobalState(x.clippingPlanes,ie),Z&&ce.viewport(D.copy(Z)),z.length>0&&Tt(z,W,ie),Te.length>0&&Tt(Te,W,ie),De.length>0&&Tt(De,W,ie),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function et(E,W,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Z.id]===void 0&&(h.state.transmissionRenderTarget[Z.id]=new Is(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?bo:ki,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const Te=h.state.transmissionRenderTarget[Z.id],De=Z.viewport||D;Te.setSize(De.z,De.w);const He=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(V),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),C&&Xe.render(ie);const Be=x.toneMapping;x.toneMapping=is;const We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),h.setupLightsView(Z),le===!0&&ye.setGlobalState(x.clippingPlanes,Z),Tt(E,ie,Z),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),se.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Fe=0,ct=W.length;Fe<ct;Fe++){const vt=W[Fe],Mt=vt.object,Qt=vt.geometry,mt=vt.material,$e=vt.group;if(mt.side===Ri&&Mt.layers.test(Z.layers)){const mi=mt.side;mt.side=vn,mt.needsUpdate=!0,Rt(Mt,ie,Z,Qt,mt,$e),mt.side=mi,mt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}x.setRenderTarget(He),x.setClearColor(V,$),We!==void 0&&(Z.viewport=We),x.toneMapping=Be}function Tt(E,W,ie){const Z=W.isScene===!0?W.overrideMaterial:null;for(let z=0,Te=E.length;z<Te;z++){const De=E[z],He=De.object,Be=De.geometry,We=Z===null?De.material:Z,ke=De.group;He.layers.test(ie.layers)&&Rt(He,W,ie,Be,We,ke)}}function Rt(E,W,ie,Z,z,Te){E.onBeforeRender(x,W,ie,Z,z,Te),E.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,W,ie,Z,E,Te),z.transparent===!0&&z.side===Ri&&z.forceSinglePass===!1?(z.side=vn,z.needsUpdate=!0,x.renderBufferDirect(ie,W,Z,z,E,Te),z.side=as,z.needsUpdate=!0,x.renderBufferDirect(ie,W,Z,z,E,Te),z.side=Ri):x.renderBufferDirect(ie,W,Z,z,E,Te),E.onAfterRender(x,W,ie,Z,z,Te)}function Ut(E,W,ie){W.isScene!==!0&&(W=nt);const Z=ae.get(E),z=h.state.lights,Te=h.state.shadowsArray,De=z.state.version,He=we.getParameters(E,z.state,Te,W,ie),Be=we.getProgramCacheKey(He);let We=Z.programs;Z.environment=E.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(E.isMeshStandardMaterial?I:S).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",it),We=new Map,Z.programs=We);let ke=We.get(Be);if(ke!==void 0){if(Z.currentProgram===ke&&Z.lightsStateVersion===De)return Jt(E,He),ke}else He.uniforms=we.getUniforms(E),E.onBeforeCompile(He,x),ke=we.acquireProgram(He,Be),We.set(Be,ke),Z.uniforms=He.uniforms;const Fe=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),Jt(E,He),Z.needsLights=ks(E),Z.lightsStateVersion=De,Z.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=ke,Z.uniformsList=null,ke}function St(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=ya.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Jt(E,W){const ie=ae.get(E);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Bs(E,W,ie,Z,z){W.isScene!==!0&&(W=nt),b.resetTextureUnits();const Te=W.fog,De=Z.isMeshStandardMaterial?W.environment:null,He=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ar,Be=(Z.isMeshStandardMaterial?I:S).get(Z.envMap||De),We=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ke=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,vt=!!ie.morphAttributes.color;let Mt=is;Z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const Qt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,mt=Qt!==void 0?Qt.length:0,$e=ae.get(Z),mi=h.state.lights;if(le===!0&&(Ee===!0||E!==M)){const Tn=E===M&&Z.id===w;ye.setState(Z,E,Tn)}let _t=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==mi.state.version||$e.outputColorSpace!==He||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isBatchedMesh&&$e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&$e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&$e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&$e.instancingMorph===!1&&z.morphTexture!==null||$e.envMap!==Be||Z.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ye.numPlanes||$e.numIntersection!==ye.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==ke||$e.morphTargets!==Fe||$e.morphNormals!==ct||$e.morphColors!==vt||$e.toneMapping!==Mt||$e.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,$e.__version=Z.version);let kn=$e.currentProgram;_t===!0&&(kn=Ut(Z,W,z));let zs=!1,xn=!1,Lr=!1;const Dt=kn.getUniforms(),Qn=$e.uniforms;if(ce.useProgram(kn.program)&&(zs=!0,xn=!0,Lr=!0),Z.id!==w&&(w=Z.id,xn=!0),zs||M!==E){ce.buffers.depth.getReversed()?(ve.copy(E.projectionMatrix),_0(ve),x0(ve),Dt.setValue(T,"projectionMatrix",ve)):Dt.setValue(T,"projectionMatrix",E.projectionMatrix),Dt.setValue(T,"viewMatrix",E.matrixWorldInverse);const Hi=Dt.map.cameraPosition;Hi!==void 0&&Hi.setValue(T,Ve.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&Dt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Dt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,xn=!0,Lr=!0)}if(z.isSkinnedMesh){Dt.setOptional(T,z,"bindMatrix"),Dt.setOptional(T,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Dt.setValue(T,"boneTexture",Tn.boneTexture,b))}z.isBatchedMesh&&(Dt.setOptional(T,z,"batchingTexture"),Dt.setValue(T,"batchingTexture",z._matricesTexture,b),Dt.setOptional(T,z,"batchingIdTexture"),Dt.setValue(T,"batchingIdTexture",z._indirectTexture,b),Dt.setOptional(T,z,"batchingColorTexture"),z._colorsTexture!==null&&Dt.setValue(T,"batchingColorTexture",z._colorsTexture,b));const Dr=ie.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Ke.update(z,ie,kn),(xn||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,Dt.setValue(T,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Qn.envMap.value=Be,Qn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(Qn.envMapIntensity.value=W.environmentIntensity),xn&&(Dt.setValue(T,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&Ao(Qn,Lr),Te&&Z.fog===!0&&xe.refreshFogUniforms(Qn,Te),xe.refreshMaterialUniforms(Qn,Z,X,oe,h.state.transmissionRenderTarget[E.id]),ya.upload(T,St($e),Qn,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ya.upload(T,St($e),Qn,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Dt.setValue(T,"center",z.center),Dt.setValue(T,"modelViewMatrix",z.modelViewMatrix),Dt.setValue(T,"normalMatrix",z.normalMatrix),Dt.setValue(T,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Tn=Z.uniformsGroups;for(let Hi=0,Vi=Tn.length;Hi<Vi;Hi++){const vf=Tn[Hi];H.update(vf,kn),H.bind(vf,kn)}}return kn}function Ao(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function ks(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,W,ie){ae.get(E.texture).__webglTexture=W,ae.get(E.depthTexture).__webglTexture=ie;const Z=ae.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=ie===void 0,Z.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){const ie=ae.get(E);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,ie=0){N=E,A=W,L=ie;let Z=!0,z=null,Te=!1,De=!1;if(E){const Be=ae.get(E);if(Be.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(T.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Be.__hasExternalTextures)b.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Be.__boundDepthTexture!==Fe){if(Fe!==null&&ae.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const ke=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?z=ke[W][ie]:z=ke[W],Te=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?z=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[ie]:z=ke,D.copy(E.viewport),Q.copy(E.scissor),J=E.scissorTest}else D.copy(F).multiplyScalar(X).floor(),Q.copy(K).multiplyScalar(X).floor(),J=Ce;if(ce.bindFramebuffer(T.FRAMEBUFFER,z)&&Z&&ce.drawBuffers(E,z),ce.viewport(D),ce.scissor(Q),ce.setScissorTest(J),Te){const Be=ae.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ie)}else if(De){const Be=ae.get(E.texture),We=W||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Be.__webglTexture,ie||0,We)}w=-1},this.readRenderTargetPixels=function(E,W,ie,Z,z,Te,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){ce.bindFramebuffer(T.FRAMEBUFFER,He);try{const Be=E.texture,We=Be.format,ke=Be.type;if(!re.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-Z&&ie>=0&&ie<=E.height-z&&T.readPixels(W,ie,Z,z,tt.convert(We),tt.convert(ke),Te)}finally{const Be=N!==null?ae.get(N).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,W,ie,Z,z,Te,De){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){const Be=E.texture,We=Be.format,ke=Be.type;if(!re.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-Z&&ie>=0&&ie<=E.height-z){ce.bindFramebuffer(T.FRAMEBUFFER,He);const Fe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.bufferData(T.PIXEL_PACK_BUFFER,Te.byteLength,T.STREAM_READ),T.readPixels(W,ie,Z,z,tt.convert(We),tt.convert(ke),0);const ct=N!==null?ae.get(N).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,ct);const vt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await v0(T,vt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Fe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Te),T.deleteBuffer(Fe),T.deleteSync(vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,ie=0){E.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-ie),z=Math.floor(E.image.width*Z),Te=Math.floor(E.image.height*Z),De=W!==null?W.x:0,He=W!==null?W.y:0;b.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,ie,0,0,De,He,z,Te),ce.unbindTexture()},this.copyTextureToTexture=function(E,W,ie=null,Z=null,z=0){E.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],W=arguments[2],z=arguments[3]||0,ie=null);let Te,De,He,Be,We,ke,Fe,ct,vt;const Mt=E.isCompressedTexture?E.mipmaps[z]:E.image;ie!==null?(Te=ie.max.x-ie.min.x,De=ie.max.y-ie.min.y,He=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,We=ie.min.y,ke=ie.isBox3?ie.min.z:0):(Te=Mt.width,De=Mt.height,He=Mt.depth||1,Be=0,We=0,ke=0),Z!==null?(Fe=Z.x,ct=Z.y,vt=Z.z):(Fe=0,ct=0,vt=0);const Qt=tt.convert(W.format),mt=tt.convert(W.type);let $e;W.isData3DTexture?(b.setTexture3D(W,0),$e=T.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),$e=T.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),$e=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,W.unpackAlignment);const mi=T.getParameter(T.UNPACK_ROW_LENGTH),_t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),kn=T.getParameter(T.UNPACK_SKIP_PIXELS),zs=T.getParameter(T.UNPACK_SKIP_ROWS),xn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Be),T.pixelStorei(T.UNPACK_SKIP_ROWS,We),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke);const Lr=E.isDataArrayTexture||E.isData3DTexture,Dt=W.isDataArrayTexture||W.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qn=ae.get(E),Dr=ae.get(W),Tn=ae.get(Qn.__renderTarget),Hi=ae.get(Dr.__renderTarget);ce.bindFramebuffer(T.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Vi=0;Vi<He;Vi++)Lr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,z,ke+Vi),E.isDepthTexture?(Dt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(W).__webglTexture,z,vt+Vi),T.blitFramebuffer(Be,We,Te,De,Fe,ct,Te,De,T.DEPTH_BUFFER_BIT,T.NEAREST)):Dt?T.copyTexSubImage3D($e,z,Fe,ct,vt+Vi,Be,We,Te,De):T.copyTexSubImage2D($e,z,Fe,ct,vt+Vi,Be,We,Te,De);ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Dt?E.isDataTexture||E.isData3DTexture?T.texSubImage3D($e,z,Fe,ct,vt,Te,De,He,Qt,mt,Mt.data):W.isCompressedArrayTexture?T.compressedTexSubImage3D($e,z,Fe,ct,vt,Te,De,He,Qt,Mt.data):T.texSubImage3D($e,z,Fe,ct,vt,Te,De,He,Qt,mt,Mt):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,z,Fe,ct,Te,De,Qt,mt,Mt.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,z,Fe,ct,Mt.width,Mt.height,Qt,Mt.data):T.texSubImage2D(T.TEXTURE_2D,z,Fe,ct,Te,De,Qt,mt,Mt);T.pixelStorei(T.UNPACK_ROW_LENGTH,mi),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,kn),T.pixelStorei(T.UNPACK_SKIP_ROWS,zs),T.pixelStorei(T.UNPACK_SKIP_IMAGES,xn),z===0&&W.generateMipmaps&&T.generateMipmap($e),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,W,ie=null,Z=null,z=0){return E.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],W=arguments[3],z=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,ie,Z,z)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){A=0,L=0,N=null,ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class Rb extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new k;class Ha{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ha(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _m extends Os{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const kr=new k,ir=new k,sr=new k,rr=new Ge,zr=new Ge,xm=new Lt,ta=new k,Hr=new k,na=new k,Yh=new Ge,nc=new Ge,Kh=new Ge;class Lb extends Kt{constructor(e=new _m){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pb(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Ha(i,3,0,!1)),nr.setAttribute("uv",new Ha(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ia(ta.set(-.5,-.5,0),sr,o,ir,s,r),ia(Hr.set(.5,-.5,0),sr,o,ir,s,r),ia(na.set(.5,.5,0),sr,o,ir,s,r),Yh.set(0,0),nc.set(1,0),Kh.set(1,1);let a=e.ray.intersectTriangle(ta,Hr,na,!1,kr);if(a===null&&(ia(Hr.set(-.5,.5,0),sr,o,ir,s,r),nc.set(0,1),a=e.ray.intersectTriangle(ta,na,Hr,!1,kr),a===null))return;const l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Dn.getInterpolation(kr,ta,Hr,na,Yh,nc,Kh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zr.x=r*rr.x-s*rr.y,zr.y=s*rr.x+r*rr.y):zr.copy(rr),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(xm)}class ym extends Os{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jh=new Lt,fu=new ju,sa=new cl,ra=new k;class Db extends Kt{constructor(e=new Zn,t=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;jh.copy(s).invert(),fu.copy(e.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);ra.fromBufferAttribute(f,m),Jh(ra,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)ra.fromBufferAttribute(f,g),Jh(ra,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jh(n,e,t,i,s,r,o){const a=fu.distanceSqToPoint(n);if(a<t){const l=new k;fu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ib extends mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ge:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new k,s=[],r=[],o=[],a=new k,l=new Lt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(sn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ef extends pi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ge){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ub extends ef{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const oa=new k,ic=new tf,sc=new tf,rc=new tf;class Nb extends pi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ic.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),sc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),rc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),sc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),rc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(ic.calc(l),sc.calc(l),rc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Fb(n,e){const t=1-n;return t*t*e}function Ob(n,e){return 2*(1-n)*n*e}function Bb(n,e){return n*n*e}function to(n,e,t,i){return Fb(n,e)+Ob(n,t)+Bb(n,i)}function kb(n,e){const t=1-n;return t*t*t*e}function zb(n,e){const t=1-n;return 3*t*t*n*e}function Hb(n,e){return 3*(1-n)*n*n*e}function Vb(n,e){return n*n*n*e}function no(n,e,t,i,s){return kb(n,e)+zb(n,t)+Hb(n,i)+Vb(n,s)}class Mm extends pi{constructor(e=new Ge,t=new Ge,i=new Ge,s=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ge){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(e,s.x,r.x,o.x,a.x),no(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gb extends pi{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(no(e,s.x,r.x,o.x,a.x),no(e,s.y,r.y,o.y,a.y),no(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sm extends pi{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wb extends pi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bm extends pi{constructor(e=new Ge,t=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ge){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(to(e,s.x,r.x,o.x),to(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $b extends pi{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(to(e,s.x,r.x,o.x),to(e,s.y,r.y,o.y),to(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Em extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Zh(a,l.x,c.x,u.x,f.x),Zh(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ge().fromArray(s))}return this}}var Qh=Object.freeze({__proto__:null,ArcCurve:Ub,CatmullRomCurve3:Nb,CubicBezierCurve:Mm,CubicBezierCurve3:Gb,EllipseCurve:ef,LineCurve:Sm,LineCurve3:Wb,QuadraticBezierCurve:bm,QuadraticBezierCurve3:$b,SplineCurve:Em});class Xb extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Qh[s.type]().fromJSON(s))}return this}}class ed extends Xb{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Sm(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new bm(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Mm(this.currentPoint.clone(),new Ge(e,t),new Ge(i,s),new Ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Em(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ef(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wm extends ed{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ed().fromJSON(s))}return this}}const qb={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Tm(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(i&&(r=Zb(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)f=n[g],d=n[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return fo(r,o,t,a,l,p,0),o}};function Tm(n,e,t,i,s){let r,o;if(s===cE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=td(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=td(r,n[r],n[r+1],o);return o&&fl(o,o.next)&&(po(o),o=o.next),o}function Us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fl(t,t.next)||kt(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&iE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Kb(n,i,s,r):Yb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),po(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jb(Us(n),e,t),fo(n,e,t,i,s,r,2)):o===2&&Jb(n,e,t,i,s,r):fo(Us(n),e,t,i,s,r,1);break}}}function Yb(n){const e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&fr(s,a,r,l,o,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kb(n,e,t,i){const s=n.prev,r=n,o=n.next;if(kt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,v=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=hu(p,g,e,t,i),y=hu(v,m,e,t,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=h&&x&&x.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,u,l,f,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fr(a,u,l,f,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=h;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,u,l,f,c,d,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fr(a,u,l,f,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jb(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!fl(s,r)&&Am(s,i,i.next,r)&&ho(s,r)&&ho(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),po(i),po(i.next),i=n=r),i=i.next}while(i!==n);return Us(i)}function Jb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oE(o,a)){let l=Cm(o,a);o=Us(o,o.next),l=Us(l,l.next),fo(o,e,t,i,s,r,0),fo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zb(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Tm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(rE(c));for(s.sort(Qb),r=0;r<s.length;r++)t=eE(s[r],t);return t}function Qb(n,e){return n.x-e.x}function eE(n,e){const t=tE(n,e);if(!t)return e;const i=Cm(t,n);return Us(i,i.next),Us(t,t.next)}function tE(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&fr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),ho(t,n)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&nE(s,t)))&&(s=t,u=f)),t=t.next;while(t!==a);return s}function nE(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function iE(n,e,t,i){let s=n;do s.z===0&&(s.z=hu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sE(s)}function sE(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function hu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function oE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!aE(n,e)&&(ho(n,e)&&ho(e,n)&&lE(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||fl(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fl(n,e){return n.x===e.x&&n.y===e.y}function Am(n,e,t,i){const s=la(kt(n,e,t)),r=la(kt(n,e,i)),o=la(kt(t,i,n)),a=la(kt(t,i,e));return!!(s!==r&&o!==a||s===0&&aa(n,t,e)||r===0&&aa(n,i,e)||o===0&&aa(t,n,i)||a===0&&aa(t,e,i))}function aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function la(n){return n>0?1:n<0?-1:0}function aE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ho(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function lE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){const t=new du(n.i,n.x,n.y),i=new du(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function td(n,e,t,i){const s=new du(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function du(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class io{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return io.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];nd(e),id(i,e);let o=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,id(i,t[l]);const a=qb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function id(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class nf extends Zn{constructor(e=new wm([new Ge(0,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ui(s,3)),this.setAttribute("normal",new ui(r,3)),this.setAttribute("uv",new ui(o,2));function c(u){const f=s.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;io.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const y=g[m];io.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=io.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const y=g[m];p=p.concat(y)}for(let m=0,h=p.length;m<h;m++){const y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,h=v.length;m<h;m++){const y=v[m],_=y[0]+f,x=y[1]+f,P=y[2]+f;i.push(_,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return uE(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new nf(i,e.curveSegments)}}function uE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class sd extends Os{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rm extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const oc=new Lt,rd=new k,od=new k;class fE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zu,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends fE{constructor(){super(new hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends Rm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new hE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dE extends Rm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ld=new Lt;class pE{constructor(e,t,i=0,s=1/0){this.ray=new ju(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,t=!0,i=[]){return pu(e,this,i,t),i.sort(cd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pu(e[s],this,i,t);return i.sort(cd),i}}function cd(n,e){return n.distance-e.distance}function pu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pu(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);const Vr=new k;function Cn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Vr.copy(e),Vr[i]=0,Vr.normalize();const c=.5*o/(o+a),u=1-Vr.angleTo(n)/l;return Math.sign(Vr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class mE extends Rr{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new k,l=new k,c=new k(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new k,v=.5/s;for(let m=0,h=0;m<u.length;m+=3,h+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[h+0]=Cn(g,l,"z","y",r,i),d[h+1]=1-Cn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[h+0]=1-Cn(g,l,"z","y",r,i),d[h+1]=1-Cn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[h+0]=1-Cn(g,l,"x","z",r,e),d[h+1]=Cn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[h+0]=1-Cn(g,l,"x","z",r,e),d[h+1]=1-Cn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[h+0]=1-Cn(g,l,"x","y",r,e),d[h+1]=1-Cn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[h+0]=Cn(g,l,"x","y",r,e),d[h+1]=1-Cn(g,l,"y","x",r,t);break}}}const rn=["U","R","F","D","L","B"],Nn=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Yr=[3,4,5,0,1,2],mo=["yellow","orange","green","white","red","blue"],go=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],Ma=(n,e)=>`${n[0]},${n[1]},${n[2]}|${e[0]},${e[1]},${e[2]}`,Va=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Pm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],gE=(n,e,t)=>Va(n,Pm(e,t));function ud(n,e){const t=Va(e,n),i=Pm(e,n);return[-i[0]+e[0]*t,-i[1]+e[1]*t,-i[2]+e[2]*t]}function sf(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function _s(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(e=>{const t=/^([URFDLB])(2|2'|'|3)?$/.exec(e);if(!t)throw new Error(`Bad move "${e}"`);return t[2]?t[2]==="3"||t[2]==="'"?`${t[1]}'`:`${t[1]}2`:t[1]})}function Ga(n){return[...n].reverse().map(sf)}const ac=new Map;function jt(n){return ac.has(n)||ac.set(n,vE(n)),ac.get(n)}function vE(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const e=n-1,t=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of t)for(const l of t)for(const c of t){const u=[a,l,c],f=[];for(let v=0;v<3;v++){if(Math.abs(u[v])!==e)continue;const m=[0,0,0];m[v]=Math.sign(u[v]);const h=Nn.findIndex(_=>_[0]===m[0]&&_[1]===m[1]&&_[2]===m[2]),y=i.length;i.push({pos:u,normal:m,face:h,cubie:r.length}),s.set(Ma(u,m),y),f.push(y)}if(!f.length)continue;const d=v=>f.find(m=>i[m].normal[v]!==0);let p=f;if(f.length===3){const[v,m,h]=[d(1),d(0),d(2)];p=gE(i[v].normal,i[m].normal,i[h].normal)>0?[v,m,h]:[v,h,m]}else if(f.length===2){const v=d(1)??d(2);p=[v,f.find(m=>m!==v)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:u,slots:p,kind:g})}const o={};return rn.forEach((a,l)=>{const c=Nn[l],u=i.map((p,g)=>Va(p.pos,c)!==e?g:s.get(Ma(ud(p.pos,c),ud(p.normal,c)))),f=u.map(p=>u[p]),d=u.map(p=>f[p]);o[a]=Int16Array.from(u),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(d)}),{n,m:e,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(Ma(a,l)),faceGrid:_E(n,e,s),layerOf:a=>r.map((l,c)=>Va(l.pos,Nn[a])===e?c:-1).filter(l=>l>=0)}}function _E(n,e,t){const i={},s=(o,a,l,c)=>t.get(Ma([o,a,l],Nn[c])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(c,u)=>o(l,u)));return i.U=r((o,a)=>s(-e+2*a,e,-e+2*o,0)),i.D=r((o,a)=>s(-e+2*a,-e,e-2*o,3)),i.F=r((o,a)=>s(-e+2*a,e-2*o,e,2)),i.B=r((o,a)=>s(e-2*a,e-2*o,-e,5)),i.R=r((o,a)=>s(e,e-2*o,e-2*a,1)),i.L=r((o,a)=>s(-e,e-2*o,-e+2*a,4)),i}function xE(n){return rn.flatMap(t=>[t,`${t}2`,`${t}'`])}function hl(n){return Uint8Array.from(jt(n).stickers,e=>e.face)}function To(n,e){const t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[e[i]]=n[i];return t}function yE(n,e,t){return To(n,jt(e).moves[t])}function ME(n,e,t){const i=jt(e);let s=n;for(const r of t)s=To(s,i.moves[r]);return s}function SE(n,e){const{faceGrid:t}=jt(e);return rn.every(i=>{const s=t[i].flat();return s.every(r=>n[r]===n[s[0]])})}function bE(n,e=n===2?11:22,t=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<e;){const l=i[Math.floor(t()*i.length)];l!==o&&(n===3&&Yr[l]===o&&l===a||(s.push(rn[l]+r[Math.floor(t()*3)]),a=o,o=l))}return s}function fd(n){const e=new Array(n.length).fill(!1);let t=0;for(let i=0;i<n.length;i++){if(e[i])continue;let s=0;for(let r=i;!e[r];r=n[r])e[r]=!0,s++;t+=s-1}return t%2}function hd(n,e){const t=jt(e),i=[],s=new Map;t.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(f=>t.stickers[f].face);s.set([...u].sort().join(),c)});const r=[],o=[],a=new Set;return t.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(v=>n[v]),f=[...u].sort().join(),d=s.get(f),p=u.map(v=>mo[v]).join("/");if(d===void 0||new Set(u).size!==u.length){i.push(`Impossible ${l.kind} with colours ${p}`);return}if(a.has(d)){i.push(`The ${t.cubies[d].slots.map(v=>mo[t.stickers[v].face]).join("/")} ${l.kind} appears twice`);return}a.add(d);const g=t.cubies[d].slots.map(v=>t.stickers[v].face);if(l.kind==="corner"){let v=-1;for(let m=0;m<3;m++)u.every((h,y)=>u[(m+y)%3]===g[y])&&(v=m);if(v<0){i.push(`The corner with colours ${p} is a mirror image (impossible)`);return}r.push({pos:c,home:d,twist:v})}else o.push({pos:c,home:d,flip:u[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function Lm(n){const e=jt(2),t=new Array(6).fill(0);for(const f of n)t[f]++;if(t.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of e.cubies){const d=f.slots.map(p=>n[p]);if(new Set(d).size!==3)return{error:"A corner shows the same colour twice"};for(const p of d)for(const g of d)p!==g&&i[p].add(g)}const s=[];for(let f=0;f<6;f++){const d=[0,1,2,3,4,5].filter(p=>p!==f&&!i[f].has(p));if(d.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=d[0]}const r=e.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(d=>e.stickers[d].face===f)],a=new Array(6),[l,c,u]=[o(3),o(4),o(5)];return a[l]=3,a[c]=4,a[u]=5,a[s[l]]=0,a[s[c]]=1,a[s[u]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function rf(n,e){const t=jt(e);if(n.length!==t.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const i=[];if(e===2){const c=Lm(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:u,errors:f}=hd(c.state,2);return i.push(...f),!f.length&&u.reduce((d,p)=>d+p.twist,0)%3!==0&&i.push("One corner is twisted – this position cannot be solved"),{ok:!i.length,errors:i,canonical:c}}const s=new Array(6).fill(0);for(const c of n)s[c]++;if(s.forEach((c,u)=>{c!==9&&i.push(`${mo[u]} appears ${c} times (needs 9)`)}),t.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==t.stickers[c.slots[0]].face&&i.push("Centre stickers are fixed and must keep their colour")}),i.length)return{ok:!1,errors:[...new Set(i)]};const{corners:r,edges:o,errors:a}=hd(n,3);if(a.length)return{ok:!1,errors:a};r.reduce((c,u)=>c+u.twist,0)%3!==0&&i.push("One corner is twisted in place"),o.reduce((c,u)=>c+u.flip,0)%2!==0&&i.push("One edge is flipped in place");const l=(c,u)=>{const f=t.cubies.map((p,g)=>p.kind===u?g:-1).filter(p=>p>=0),d=new Array(f.length);return c.forEach(p=>{d[f.indexOf(p.pos)]=f.indexOf(p.home)}),d};return fd(l(r,"corner"))!==fd(l(o,"edge"))&&i.push("Two pieces are swapped – this position cannot be solved"),{ok:!i.length,errors:i}}const Dm=["A","B","X","Y","LB","RB","LT","RT","View","Menu","LS-B","RS-B","D-Up","D-Down","D-Left","D-Right"],dd=[...Dm,...["LS","RS"].flatMap(n=>["Up","Down","Left","Right"].map(e=>`${n}-${e}`))],mu=[["zoom-in","Zoom in"],["zoom-out","Zoom out"],["quick-solve","Quick Solve"],["next-step","Next solution move"],["undo","Undo"],["scramble","Scramble"],["reset","Reset to solved"],["cube-up","Rotate cube up"],["cube-down","Rotate cube down"],["cube-left","Rotate cube left"],["cube-right","Rotate cube right"],...["front","back","left","right","top","bottom"].flatMap(n=>[[`${n}-cw`,`${n}: clockwise (unprimed)`],[`${n}-ccw`,`${n}: counter-clockwise (prime)`],[`${n}-double`,`${n}: double (180 degrees)`]])].map(([n,e])=>({id:n,label:e})),Im=new Set(["zoom-in","zoom-out","cube-up","cube-down","cube-left","cube-right"]);function EE(n,e,t=new Set){const i=new Set;return Dm.forEach((s,r)=>{const o=n.buttons[r],a=r===6||r===7?e.triggerThreshold:.5;o&&(o.value>=a||r!==6&&r!==7&&o.pressed)&&i.add(s)}),["LS","RS"].forEach((s,r)=>{[["Left",-(n.axes[r*2]||0)],["Right",n.axes[r*2]||0],["Up",-(n.axes[r*2+1]||0)],["Down",n.axes[r*2+1]||0]].forEach(([o,a])=>{const l=`${s}-${o}`,c=e.deadZone*(t.has(l)?.8:1);a>=c&&i.add(l)})}),i}function wE(n,e){const t=Object.entries(n).filter(([,i])=>i&&e.has(i.input)&&i.modifiers.every(s=>e.has(s)));return t.filter(([,i])=>{const s=[i.input,...i.modifiers];return!t.some(([,r])=>{const o=[r.input,...r.modifiers];return o.length>s.length&&s.every(a=>o.includes(a))})})}function Sa(n){return n?[n.input,...n.modifiers].sort().join("+"):""}function vo(n){if(!n||n.version!==1||typeof n.name!="string"||!n.name.trim()||n.name.length>80||!n.bindings||typeof n.bindings!="object"||Array.isArray(n.bindings))throw new Error("Invalid profile: expected version 1, a name, and bindings.");const e=n.settings;if(!e||!Number.isFinite(e.deadZone)||e.deadZone<.15||e.deadZone>.9||!Number.isFinite(e.triggerThreshold)||e.triggerThreshold<.1||e.triggerThreshold>.95)throw new Error("Invalid stick dead zone or trigger threshold.");const t={},i=new Set;for(const[s,r]of Object.entries(n.bindings)){if(!mu.some(l=>l.id===s))throw new Error(`Unknown action: ${s}`);if(r===null){t[s]=null;continue}if(!r||!dd.includes(r.input)||!Array.isArray(r.modifiers)||r.modifiers.some(l=>!dd.includes(l)||l===r.input)||new Set(r.modifiers).size!==r.modifiers.length)throw new Error(`Invalid binding: ${s}`);const o=[r.input,...r.modifiers];for(const l of["LS","RS","D"])for(const[c,u]of[["Up","Down"],["Left","Right"]])if(o.includes(`${l}-${c}`)&&o.includes(`${l}-${u}`))throw new Error(`Opposite directions cannot be combined: ${s}`);const a=Sa(r);if(i.has(a))throw new Error(`Duplicate combination: ${a}`);i.add(a),t[s]={input:r.input,modifiers:[...r.modifiers]}}return{version:1,name:n.name.trim(),settings:{deadZone:e.deadZone,triggerThreshold:e.triggerThreshold},bindings:t}}function TE(n,e){const t=(u,f)=>u.reduce((d,p,g)=>d+p*f[g],0),i=(u,f)=>u.reduce((d,p)=>t(Nn[p],f)>t(Nn[d],f)+1e-10?p:d),s=i([0,1,2,3,4,5],n),r=i([0,1,2,3,4,5].filter(u=>u!==s&&u!==Yr[s]),e),o=Nn[s],a=Nn[r],l=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],c=i([0,1,2,3,4,5],l);return{front:rn[s],back:rn[Yr[s]],right:rn[r],left:rn[Yr[r]],top:rn[c],bottom:rn[Yr[c]]}}const AE=[["L","R"],["D","U"],["B","F"]];function Um(n,e,t,i){const s=n.cubies[n.stickers[e].cubie].pos[t],[r,o]=AE[t];return s===n.m?o+(i>0?"'":""):s===-n.m?r+(i>0?"":"'"):`${o}${i>0?"":"'"} ${r}${i>0?"'":""}`}function CE(n,e,t,i,s){if(Math.hypot(i,s)<24)return null;let r=null;for(const{axis:o,x:a,y:l}of t){const c=Math.hypot(a,l);if(c<1e-6)continue;const u=(a*i+l*s)/c;(!r||Math.abs(u)>r.score)&&(r={axis:o,direction:Math.sign(u),score:Math.abs(u)})}return!r||r.score<Math.hypot(i,s)*.65?null:Um(n,e,r.axis,r.direction)}const wn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},RE=4,PE=14,LE=.55,ca=.8,DE=.025,IE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0},dramaSpeed:{type:Number,default:.32},hoverColors:{type:Boolean,default:!1},touchMode:{type:String,default:"rotate"},touchLocked:{type:Boolean,default:!1}},emits:["paint","layerturn","hovering"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=Ye(null);let o,a,l;const c=new k(0,0,0);let u,f=0,d,p=[],g=[],v,m=!1;const h=go.map(G=>new sd({color:G,roughness:.35,metalness:0})),y=new sd({color:1382172,roughness:.6});function _(G,Me){const de=G/2,Re=new wm;return Re.moveTo(-de+Me,-de),Re.lineTo(de-Me,-de),Re.quadraticCurveTo(de,-de,de,-de+Me),Re.lineTo(de,de-Me),Re.quadraticCurveTo(de,de,de-Me,de),Re.lineTo(-de+Me,de),Re.quadraticCurveTo(-de,de,-de,de-Me),Re.lineTo(-de,-de+Me),Re.quadraticCurveTo(-de,-de,-de+Me,-de),new nf(Re)}const x=_(.84,.12),P=new mE(.98,.98,.98,3,.1);function A(){ye(),u&&a.remove(u),v=jt(i.n),u=new Zi,p=[],g=new Array(v.slotCount);const G=new k(0,0,1);v.cubies.forEach(Me=>{const de=new Zi;de.position.set(Me.pos[0]/2,Me.pos[1]/2,Me.pos[2]/2),de.userData.home=de.position.clone(),de.add(new Un(P,y)),Me.slots.forEach(Re=>{const Je=v.stickers[Re],ut=new k(...Je.normal),et=new Un(x,h[Je.face]);et.position.copy(ut).multiplyScalar(.492),et.quaternion.setFromUnitVectors(G,ut),et.userData.slot=Re,de.add(et),g[Re]=et}),p.push(de),u.add(de)}),a.add(u),L(i.state)}function L(G){if(G.length===g.length)for(let Me=0;Me<g.length;Me++)g[Me].material=h[G[Me]]}function N(){const G=i.n===2?4.6:6.2;l.up.set(0,1,0),l.position.set(G*.75,G*.6,G),l.lookAt(c),M.vx=0,M.vy=0}function w(){if(!r.value||!o)return;const{clientWidth:G,clientHeight:Me}=r.value;!G||!Me||(o.setSize(G,Me,!1),l.aspect=G/Me,l.updateProjectionMatrix())}const M={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},D=new Map;let Q=null,J=!1,V=0;const $=new Di,B=new k,oe=new k,X=new k;function be(G,Me){const de=o.domElement.clientHeight||1,Re=2*Math.PI/de;l.updateMatrixWorld(),B.setFromMatrixColumn(l.matrixWorld,0),oe.setFromMatrixColumn(l.matrixWorld,1),$.setFromAxisAngle(oe,-G*Re),X.copy(l.position).sub(c).applyQuaternion($),l.up.applyQuaternion($),$.setFromAxisAngle(B.applyQuaternion($),-Me*Re),X.applyQuaternion($),l.up.applyQuaternion($).normalize(),l.position.copy(c).add(X),l.lookAt(c)}function j(G){X.copy(l.position).sub(c);const Me=Math.min(PE,Math.max(RE,X.length()*G));l.position.copy(c).add(X.setLength(Me))}function F(G){var Me,de;if(D.set(G.pointerId,{x:G.clientX,y:G.clientY}),(de=(Me=o.domElement).setPointerCapture)==null||de.call(Me,G.pointerId),G.pointerType==="touch"&&i.touchMode==="move"){if(J=!0,M.dragging=!1,M.vx=0,M.vy=0,Q=null,D.size===1&&!i.locked&&!i.touchLocked&&!i.paintable&&!m){l.updateMatrixWorld();const Re=ce(G.clientX,G.clientY);if(Re){const Je=Re.object.userData.slot,ut=v.stickers[Je].normal.findIndex(Rt=>Rt!==0),et=Re.point.clone().project(l),Tt=[0,1,2].filter(Rt=>Rt!==ut).map(Rt=>{const St=new k().setComponent(Rt,1).cross(Re.point),Jt=Re.point.clone().addScaledVector(St,.01).project(l);return{axis:Rt,x:(Jt.x-et.x)*o.domElement.clientWidth,y:-(Jt.y-et.y)*o.domElement.clientHeight}});Q={pointerId:G.pointerId,x:G.clientX,y:G.clientY,slot:Je,candidates:Tt}}}return}if(D.size===1)Object.assign(M,{dragging:!0,lastX:G.clientX,lastY:G.clientY,lastT:performance.now(),vx:0,vy:0});else if(D.size===2){const[Re,Je]=[...D.values()];V=Math.hypot(Re.x-Je.x,Re.y-Je.y),M.dragging=!1}}function K(G){if(!D.has(G.pointerId))return;if(D.set(G.pointerId,{x:G.clientX,y:G.clientY}),J){if(Q&&D.size===1&&Q.pointerId===G.pointerId){if(i.locked||i.touchLocked||i.paintable||m){Q=null;return}const ut=CE(v,Q.slot,Q.candidates,G.clientX-Q.x,G.clientY-Q.y);ut&&(Q=null,s("layerturn",ut))}return}if(D.size===2){const[ut,et]=[...D.values()],Tt=Math.hypot(ut.x-et.x,ut.y-et.y);V&&Tt&&j(V/Tt),V=Tt;return}if(!M.dragging)return;const Me=G.clientX-M.lastX,de=G.clientY-M.lastY,Re=performance.now(),Je=Math.max(1,Re-M.lastT);be(Me,de),M.vx=.6*M.vx+.4*(Me/Je*16),M.vy=.6*M.vy+.4*(de/Je*16),Object.assign(M,{lastX:G.clientX,lastY:G.clientY,lastT:Re})}function Ce(G){var Me,de;D.delete(G.pointerId),(de=(Me=o.domElement).hasPointerCapture)!=null&&de.call(Me,G.pointerId)&&o.domElement.releasePointerCapture(G.pointerId),Q=null,G.type==="pointercancel"&&(Le=null,M.vx=0,M.vy=0),D.size===0&&(J=!1,M.dragging=!1,performance.now()-M.lastT>80&&(M.vx=0,M.vy=0))}function te(G){G.preventDefault(),j(Math.exp(G.deltaY*6e-4))}const le={level:0,phase:0,last:0};let Ee=0;function ve(G){const Me=Math.min(.1,(G-(le.last||G))/1e3);le.last=G;const de=i.drama&&!M.dragging&&D.size===0&&G>=Ee?1:0,Re=Me*.7;if(le.level+=Math.max(-Re,Math.min(Re,de-le.level)),le.level<.001)return;le.phase+=Me*LE;const Je=le.level*le.level*(3-2*le.level),ut=o.domElement.clientHeight||1,et=i.dramaSpeed*ut/(2*Math.PI)*Me*Je;be(Math.cos(le.phase)*et,Math.sin(le.phase)*et)}function ze(){f=requestAnimationFrame(ze),!M.dragging&&(Math.abs(M.vx)>.02||Math.abs(M.vy)>.02)&&(be(M.vx,M.vy),M.vx*=.92,M.vy*=.92),ve(performance.now()),U(performance.now()),o.render(a,l)}const Ve=G=>G<.5?4*G*G*G:1-(-2*G+2)**3/2;function Ze(G,Me,de=1){if(m||de>=10)return L(Me),Promise.resolve();m=!0;const Re=G.split(" ").map(et=>{const Tt=rn.indexOf(et[0]),Rt=et.endsWith("2")?2:1,Ut=new Zi,St=v.layerOf(Tt).map(Jt=>p[Jt]);return u.add(Ut),St.forEach(Jt=>Ut.add(Jt)),{pivot:Ut,layer:St,quarters:Rt,axis:new k(...Nn[Tt]),angle:(et.endsWith("'")?1:-1)*Rt*(Math.PI/2)}}),Je=(Re.some(et=>et.quarters===2)?420:280)/de,ut=performance.now();return new Promise(et=>{const Tt=Rt=>{const Ut=Math.min(1,(Rt-ut)/Je);if(Re.forEach(St=>St.pivot.setRotationFromAxisAngle(St.axis,St.angle*Ve(Ut))),Ut<1){requestAnimationFrame(Tt);return}Re.forEach(St=>{St.layer.forEach(Jt=>u.add(Jt)),u.remove(St.pivot)}),L(Me),m=!1,et()};requestAnimationFrame(Tt)})}let nt=null;function C(){if(!nt){const G=document.createElement("canvas");G.width=G.height=64;const Me=G.getContext("2d"),de=Me.createRadialGradient(32,32,0,32,32,32);de.addColorStop(0,"rgba(255,255,255,1)"),de.addColorStop(.25,"rgba(255,255,255,0.6)"),de.addColorStop(1,"rgba(255,255,255,0)"),Me.fillStyle=de,Me.fillRect(0,0,64,64),nt=new Ib(G)}return nt}function U(G){if(!u||m)return;const Me=i.rumble*.045;if(Me>0){const de=G/1e3;u.position.set(Math.sin(de*61)*Me,Math.sin(de*73+1)*Me,Math.sin(de*53+2)*Me),u.rotation.z=Math.sin(de*47)*Me*.25}else(u.position.lengthSq()>0||u.rotation.z!==0)&&(u.position.set(0,0,0),u.rotation.z=0)}const T=G=>1+2.70158*(G-1)**3+1.70158*(G-1)**2;function pe(){if(m||!u)return Promise.resolve();m=!0,u.position.set(0,0,0),u.rotation.z=0;const G=(Z,z)=>Z+Math.random()*(z-Z),Me=p.map(Z=>{const z=Z.userData.home.clone();return z.lengthSq()<.01&&z.set(G(-1,1),G(-1,1),G(-1,1)),z.normalize().add(new k(G(-.4,.4),G(-.4,.4),G(-.4,.4))).normalize(),{g:Z,v:z.multiplyScalar(G(3.2,7.5)),spin:new k(G(-9,9),G(-9,9),G(-9,9)),vanish:G(1.7,2.2)}}),de=520,Re=new Float32Array(de*3),Je=new Float32Array(de*3),ut=Array.from({length:de},()=>{const Z=new k(G(-1,1),G(-1,1),G(-1,1)).normalize();return{p:new k,v:Z.multiplyScalar(G(2.5,11)),delay:G(0,.35),life:G(.6,1.7)}}),et=new Zn;et.setAttribute("position",new En(Re,3)),et.setAttribute("color",new En(Je,3));const Tt=new ym({size:.26,map:C(),vertexColors:!0,transparent:!0,blending:Oa,depthWrite:!1}),Rt=new Db(et,Tt);Rt.frustumCulled=!1,a.add(Rt);const Ut=new _m({map:C(),color:16771504,blending:Oa,transparent:!0,depthWrite:!1}),St=new Lb(Ut);a.add(St);const Jt=3,Bs=Me.map(({g:Z})=>Z.userData.home.length()*.14+G(0,.06)),Ao=Me.map(()=>new Di().setFromEuler(new Jn(G(-2,2),G(-2,2),G(-2,2))));let ks=!1;const E=Jt+1.4,W=performance.now();let ie=W;return new Promise(Z=>{const z=Te=>{const De=(Te-W)/1e3,He=Math.min(.05,(Te-ie)/1e3);if(ie=Te,De<Jt){Me.forEach(ke=>{if(De>ke.vanish){ke.g.visible=!1;return}ke.v.multiplyScalar(1-.3*He),ke.v.y-=2.2*He,ke.g.position.addScaledVector(ke.v,He),ke.g.rotation.x+=ke.spin.x*He,ke.g.rotation.y+=ke.spin.y*He,ke.g.rotation.z+=ke.spin.z*He;const Fe=Math.max(0,Math.min(1,(ke.vanish-De)/.4));ke.g.scale.setScalar(Fe)}),ut.forEach((ke,Fe)=>{const ct=De-ke.delay;if(ct<0||ct>ke.life){Je[Fe*3]=Je[Fe*3+1]=Je[Fe*3+2]=0;return}ke.v.multiplyScalar(1-.9*He),ke.v.y-=3.5*He,ke.p.addScaledVector(ke.v,He);const vt=ct/ke.life,Mt=(1-vt)**1.4,Qt=1*Mt,mt=Math.max(0,.95-.85*vt)*Mt,$e=Math.max(0,.55-.55*vt*1.6)*Mt;Re[Fe*3]=ke.p.x,Re[Fe*3+1]=ke.p.y,Re[Fe*3+2]=ke.p.z,Je[Fe*3]=Qt,Je[Fe*3+1]=mt,Je[Fe*3+2]=$e}),et.attributes.position.needsUpdate=!0,et.attributes.color.needsUpdate=!0;const Be=Math.min(1,De/.45);St.scale.setScalar(2+14*Be),Ut.opacity=(1-Be)**1.5;const We=De<.4?.14*(1-De/.4):0;u.position.set(G(-We,We),G(-We,We),G(-We,We))}else{ks||(ks=!0,a.remove(Rt),a.remove(St),et.dispose(),Tt.dispose(),Ut.dispose(),u.position.set(0,0,0),Me.forEach(({g:We})=>{We.position.copy(We.userData.home),We.scale.setScalar(1e-4),We.visible=!0}));const Be=De-Jt;Me.forEach(({g:We},ke)=>{const Fe=Math.max(0,Math.min(1,(Be-Bs[ke])/.55)),ct=T(Fe);We.scale.setScalar(Math.max(1e-4,ct)),We.quaternion.copy(Ao[ke]).slerp(se,Math.min(1,Fe*1.15))})}if(De<E){requestAnimationFrame(z);return}Me.forEach(({g:Be})=>{Be.position.copy(Be.userData.home),Be.rotation.set(0,0,0),Be.quaternion.identity(),Be.scale.setScalar(1),Be.visible=!0}),u.position.set(0,0,0),u.rotation.z=0,L(i.state),m=!1,Z()};requestAnimationFrame(z)})}const se=new Di,re=new pE;function ce(G,Me){const de=o.domElement.getBoundingClientRect(),Re=new Ge((G-de.left)/de.width*2-1,-((Me-de.top)/de.height)*2+1);return re.setFromCamera(Re,l),re.intersectObjects(g,!1)[0]}const me=ca/3,ae=ca/2,b=new wo(1,1),S=new za({color:0}),I=go.map(G=>new za({color:G}));let q=null,ee="",ne=!1,we=null;const xe=new Di,Ae=new k;function qe(G){ne!==G&&(ne=G,s("hovering",G))}function ye(){var G;(G=q==null?void 0:q.parent)==null||G.remove(q),q=null,ee="",o&&qe(!1)}function Ie(G){return i.n===3&&v.cubies[v.stickers[G].cubie].kind==="center"}function Xe(G){l.updateMatrixWorld(),G.getWorldQuaternion(xe).invert();const Me=Ae.setFromMatrixColumn(l.matrixWorld,0).applyQuaternion(xe).clone(),de=Ae.setFromMatrixColumn(l.matrixWorld,1).applyQuaternion(xe),Re=Je=>Je>=0?1:-1;return Math.abs(Me.x)>=Math.abs(Me.y)?{swap:!1,a:Re(Me.x),b:Re(de.y)}:{swap:!0,a:Re(Me.y),b:Re(de.x)}}function Ke(G,Me,de){return G.swap?{x:G.b*de,y:G.a*Me}:{x:G.a*Me,y:G.b*de}}function Pe(G,Me,de){const Re=G.worldToLocal(Me.clone()),Je=de.swap?de.a*Re.y:de.a*Re.x,ut=de.swap?de.b*Re.x:de.b*Re.y,et=Math.min(2,Math.max(0,Math.floor((Je+ca/2)/me)));return Math.min(1,Math.max(0,Math.floor((ca/2-ut)/ae)))*3+et}function Qe(G,Me,de,Re,Je,ut,et,Tt){const{x:Rt,y:Ut}=Ke(Me,de,Re),St=new Un(b,et);St.position.set(Rt,Ut,Tt),St.scale.set(Me.swap?ut:Je,Me.swap?Je:ut,1),G.add(St)}function tt(G,Me,de){var Re;(Re=q==null?void 0:q.parent)==null||Re.remove(q),q=new Zi;for(let Je=0;Je<6;Je++){const ut=(Je%3-1)*me,et=(.5-Math.floor(Je/3))*ae,Tt=me-.02,Rt=ae-.02,Ut=Je===de;Ut&&Qe(q,Me,ut,et,Tt,Rt,S,.004);const St=Ut?DE:0;Qe(q,Me,ut,et,Tt-2*St,Rt-2*St,I[Je],.006)}G.add(q)}function pt(G,Me){if(we={x:G,y:Me},!i.hoverColors||!i.paintable||i.locked||m)return ye();const de=ce(G,Me);if(!de||Ie(de.object.userData.slot))return ye();const Re=de.object,Je=Xe(Re),ut=Pe(Re,de.point,Je),et=`${Re.userData.slot}|${ut}|${Je.swap}|${Je.a}|${Je.b}`;qe(!0),et!==ee&&(ee=et,tt(Re,Je,ut))}function H(){ee="",we&&o?pt(we.x,we.y):ye()}let Le=null;function fe(G){Le={x:G.clientX,y:G.clientY}}function ge(G){if(G.type==="pointercancel"||i.locked){Le=null;return}if(!i.paintable||!Le)return;const Me=Math.hypot(G.clientX-Le.x,G.clientY-Le.y);if(Le=null,Me>5)return;const de=ce(G.clientX,G.clientY);if(!de)return;const Re=de.object.userData.slot;if(i.hoverColors){if(Ie(Re))return;s("paint",Re,Pe(de.object,de.point,Xe(de.object)))}else s("paint",Re)}let Ne=0;function Oe(G,Me,de){const Re=v.stickers[G],Je=Re.normal.findIndex(E=>E!==0),ut=[0,1,2].filter(E=>E!==Je);l.updateMatrixWorld();const et=new k().setFromMatrixColumn(l.matrixWorld,0),Tt=new k().setFromMatrixColumn(l.matrixWorld,1),Rt=Math.abs(et.getComponent(ut[0]))>=Math.abs(et.getComponent(ut[1]))?ut[0]:ut[1],Ut=de?ut.find(E=>E!==Rt):Rt,St=new k;St.setComponent(Ut,1);const Jt=new k(...Re.pos).multiplyScalar(.5).add(new k(...Re.normal).multiplyScalar(.5)),Bs=St.clone().cross(Jt),ks=((de?Bs.dot(et):-Bs.dot(Tt))>=0?1:-1)*Me;return Um(v,G,Ut,ks)}function it(G){if(i.paintable)return;const Me=ce(G.clientX,G.clientY);if(!Me||(G.preventDefault(),G.stopPropagation(),i.locked||m)||(Ne+=G.deltaY||G.deltaX,Math.abs(Ne)<40))return;const de=Math.sign(Ne);Ne=0,s("layerturn",Oe(Me.object.userData.slot,de,G.altKey))}function It(G){pt(G.clientX,G.clientY)}function qt(){we=null,ye()}Mo(()=>{o=new Cb({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new Rb,l=new Ln(36,1,.1,100),a.add(new dE(16777215,1.1));const G=new ad(16777215,2);G.position.set(5,8,6),a.add(G);const Me=new ad(16777215,.8);Me.position.set(-6,-3,-5),a.add(Me),o.domElement.addEventListener("pointerdown",F),o.domElement.addEventListener("pointermove",K),o.domElement.addEventListener("pointermove",It),o.domElement.addEventListener("pointerleave",qt),o.domElement.addEventListener("pointerup",Ce),o.domElement.addEventListener("pointercancel",Ce),o.domElement.addEventListener("wheel",te,{passive:!1}),o.domElement.addEventListener("pointerdown",fe),o.domElement.addEventListener("pointerup",ge),o.domElement.addEventListener("pointercancel",ge),r.value.addEventListener("wheel",it,{capture:!0,passive:!1}),A(),N(),w(),d=new ResizeObserver(w),d.observe(r.value),ze()}),Ls(()=>{cancelAnimationFrame(f),d==null||d.disconnect(),o==null||o.dispose()}),Bt(()=>i.n,()=>{A(),N()}),Bt(()=>i.state,G=>{m||L(G)}),Bt(()=>[i.hoverColors,i.paintable,i.locked],H),Bt(()=>i.touchMode,()=>{Q=null,M.dragging=!1,M.vx=0,M.vy=0});function gt(G,Me){if(!(!l||!o))if(Ee=performance.now()+100,M.vx=0,M.vy=0,G==="zoom-in"||G==="zoom-out")j(Math.exp((G==="zoom-in"?-1:1)*Me));else{const de=o.domElement.clientHeight*Me/6;be(G==="cube-left"?-de:G==="cube-right"?de:0,G==="cube-up"?-de:G==="cube-down"?de:0)}}function _n(G,Me){l.updateMatrixWorld();const de=l.position.clone().sub(c).normalize().toArray(),Re=new k().setFromMatrixColumn(l.matrixWorld,0).toArray();return TE(de,Re)[G]+Me}return e({animate:Ze,resetView:N,explode:pe,gamepadView:gt,viewRelativeMove:_n}),(G,Me)=>(he(),_e("div",{ref_key:"host",ref:r,class:Ot(["cube-host",{painting:n.paintable}])},null,2))}},UE=wn(IE,[["__scopeId","data-v-d1c8982d"]]),NE={class:"panel about"},FE="https://github.com/sterudo/RubriksSolver",pd="https://sterudo.github.io/RubriksSolver/",OE={__name:"AboutPanel",setup(n){const e="0.1.0",t="2026-10-14";return(i,s)=>(he(),_e("section",NE,[s[5]||(s[5]=R("h2",null,"About Rubik's Solver",-1)),s[6]||(s[6]=R("p",{class:"note"},"Learn, teach and solve 2×2 and 3×3 Rubik's cubes right in your browser.",-1)),R("dl",null,[s[0]||(s[0]=R("dt",null,"Author",-1)),s[1]||(s[1]=R("dd",null,"Stephan Rudolph (and GitHub Copilot)",-1)),s[2]||(s[2]=R("dt",null,"Source code",-1)),R("dd",null,[R("a",{href:FE,target:"_blank",rel:"noopener"},"sterudo/RubriksSolver")]),s[3]||(s[3]=R("dt",null,"Live app",-1)),R("dd",null,[R("a",{href:pd,target:"_blank",rel:"noopener"},Se(pd))]),s[4]||(s[4]=R("dt",null,"Version",-1)),R("dd",null,[st(Se(Y(e))+" ",1),R("small",null,"(built "+Se(Y(t))+")",1)])]),s[7]||(s[7]=Nv("<h3 data-v-3792b7d1>Tech stack</h3><ul data-v-3792b7d1><li data-v-3792b7d1><strong data-v-3792b7d1>Vue 3</strong> – reactive UI (Composition API, single-file components)</li><li data-v-3792b7d1><strong data-v-3792b7d1>three.js</strong> – interactive 3D cube, animations and explosion effects</li><li data-v-3792b7d1><strong data-v-3792b7d1>Vite</strong> – dev server and static build that runs from any folder</li><li data-v-3792b7d1><strong data-v-3792b7d1>Vitest</strong> – unit tests for the cube model, solver and vision code</li><li data-v-3792b7d1>Plain JavaScript solver, no backend – everything runs locally in the browser</li><li data-v-3792b7d1>Optional AI tutor via Gemini or a local model (LM Studio / Ollama)</li></ul><h3 data-v-3792b7d1>Main features</h3><ul data-v-3792b7d1><li data-v-3792b7d1>2×2 and 3×3 cubes with a drag-to-rotate 3D view, layer turns by mouse, wheel or keyboard</li><li data-v-3792b7d1>Set up any position: paint stickers on the cube or the flat net, scramble, or import from two photos</li><li data-v-3792b7d1>Live validity check telling you whether a position is solvable</li><li data-v-3792b7d1>Step-by-step solver that explains every stage, with play/pause, speed and keyboard control</li><li data-v-3792b7d1>Learn lessons and Practice tests, with a built-in or AI tutor</li><li data-v-3792b7d1>Fullscreen mode, Extra drama camera, countdown and cube explosion finale, and one-click Quick Solve</li><li data-v-3792b7d1>Save and load positions; resizable cube frame and draggable panel divider</li></ul>",4))]))}},BE=wn(OE,[["__scopeId","data-v-3792b7d1"]]),Pn={yellowCross:_s("F R U R' U' F'"),sune:_s("R U R' U R U2 R'"),antiSune:_s("R U2 R' U' R U' R'"),cornerCycle:_s("R' F R' B2 R F' R' B2 R2"),edgeCycle:_s("R U' R U R U R U' R' U' R2"),tPerm:_s("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:_s("F R U' R' U' R U R' F' R U R' U' R' F R F'")},or=Pn,kE={U:0,R:1,F:2,D:3,L:4,B:5};function Nm(n,e){return e.map(t=>{const i=n.moves[t],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:t,perm:i,inv:s,face:kE[t[0]]}})}const zE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],HE=["U","U2","U'","R","R2","R'","F","F2","F'"];function VE(n,e,t,i){const s=g=>g.join(","),r=s(e),o=s(t);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let c=[e],u=[t],f=0,d=0;const p=g=>{const v=[];for(let h=g;a.get(h).prev!==null;h=a.get(h).prev)v.push(a.get(h).move);v.reverse();const m=[];for(let h=g;l.get(h).next!==null;h=l.get(h).next)m.push(l.get(h).move);return[...v,...m].map(h=>n[h].name)};for(;f+d<i&&(c.length||u.length);)if(c.length&&(c.length<=u.length||!u.length)){const v=[];for(const m of c){const h=s(m),y=a.get(h);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const P=m.map(L=>x.perm[L]),A=s(P);if(!a.has(A)){if(a.set(A,{prev:h,move:_,face:x.face}),l.has(A))return p(A);v.push(P)}}}c=v,f++}else{const v=[];for(const m of u){const h=s(m),y=l.get(h);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const P=m.map(L=>x.inv[L]),A=s(P);if(!l.has(A)){if(l.set(A,{next:h,move:_,face:x.face}),a.has(A))return p(A);v.push(P)}}}u=v,d++}return null}function GE(n,e,t){const i=n.cubies[t].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>e[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const of=(n,e,t)=>n.cubies[t].slots.every(i=>e[i]===n.stickers[i].face);function gu(n,e,t,i,s,r,o,a){const l=[];let c=e,u=[...t],f=[...i];for(;f.length;){let d=null;for(const p of f){if(p.cubies.every(y=>of(n,c,y))){d={target:p,moves:[]};break}const g=[...u,...p.cubies].flatMap(y=>n.cubies[y].slots),v=[...u.flatMap(y=>n.cubies[y].slots),...p.cubies.flatMap(y=>GE(n,c,y))],m=d?d.moves.length-1:a;if(m<1)continue;const h=VE(r,v,g,m);h&&(!d||h.length<d.moves.length)&&(d={target:p,moves:h})}if(!d)throw new Error("No solution found for a piece – is the cube state valid?");for(const p of d.moves)c=To(c,n.moves[p]);l.push({label:o(d.target),moves:d.moves}),u=[...u,...d.target.cubies],f=f.filter(p=>p!==d.target)}return{state:c,steps:l}}function WE(n,e,t,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:e,moves:[]}]],a=new Set([r(e)]);if(i(e))return[];for(let l=0;l<=s;l++){const c=o[l];if(c)for(const u of c)for(const f of t){let d=u.state;for(const m of f.moves)d=To(d,n.moves[m]);const p=r(d);if(a.has(p))continue;a.add(p);const g=l+f.moves.length,v={state:d,moves:[...u.moves,f.label]};if(i(d))return $E(v.moves,t);(o[g]||(o[g]=[])).push(v)}}return null}function $E(n,e){const t=new Map(e.map(i=>[i.label,i]));return n.map(i=>t.get(i))}const hr=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],Gn=(n,e)=>({label:n,moves:e,isAlg:!0});function XE(n,e){const t=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}t.push({label:e(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&t.push({label:"Turn the top layer to line it up",moves:i}),t}const Fm=mo,vu=n=>n[0].toUpperCase()+n.slice(1);function dr(n,e,t,i,s){const r=WE(n,e,t,i);if(!r)throw new Error("Could not finish the last layer – is the cube state valid?");const o=XE(r,s);let a=e;for(const l of o)for(const c of l.moves)a=To(a,n.moves[c]);return{state:a,steps:o}}const Om=n=>n.flatMap(e=>e.moves);function Bm(n,e,t={}){const i=rf(n,e);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return e===2?YE(n,i.canonical,t):qE(n,t)}catch(s){return{ok:!1,error:s.message}}}function ba(n,e,t){return n.cubies[e].slots.map(i=>t[n.stickers[i].face]).join("-")}function qE(n,e){const t=e.names||Fm,i=jt(3),s=Nm(i,zE),r=(P,A,L)=>i.cubies.findIndex(N=>N.pos[0]===P&&N.pos[1]===A&&N.pos[2]===L),o=[];let a=n;const l=(P,A)=>o.push({id:P,steps:A,moves:Om(A)}),c=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(P=>({cubies:[r(...P)]}));let u=gu(i,a,[],c,t,s,P=>`${vu(ba(i,P.cubies[0],t))} edge`,9);a=u.state,l("cross",u.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(P=>({cubies:P.map(A=>r(...A))})),d=c.flatMap(P=>P.cubies);u=gu(i,a,d,f,t,s,P=>`${vu(ba(i,P.cubies[0],t))} corner + ${ba(i,P.cubies[1],t)} edge`,11),a=u.state,l("f2l",u.steps);const p=i.cubies.map((P,A)=>({c:P,i:A})).filter(({c:P})=>P.pos[1]===2),g=p.filter(({c:P})=>P.kind==="edge").map(({c:P})=>P.slots[0]),v=p.filter(({c:P})=>P.kind==="corner").map(({i:P})=>P),m=i.stickers.map((P,A)=>P.face===0?A:-1).filter(P=>P>=0),h=P=>g.every(A=>P[A]===0),y=P=>m.every(A=>P[A]===0),_=P=>v.every(A=>of(i,P,A)),x=P=>i.stickers.every((A,L)=>P[L]===A.face);return u=dr(i,a,[...hr,Gn("yellow cross",Pn.yellowCross)],h,()=>`Make the ${t[0]} cross`),a=u.state,l("ollCross",u.steps),u=dr(i,a,[...hr,Gn("sune",Pn.sune),Gn("antisune",Pn.antiSune)],y,P=>P.label==="sune"?`Sune: twist corners (${t[0]} face)`:`Anti-Sune: twist corners (${t[0]} face)`),a=u.state,l("ollFace",u.steps),u=dr(i,a,[...hr,Gn("corner cycle",Pn.cornerCycle),Gn("corner cycle inverse",Ga(Pn.cornerCycle))],_,()=>"Cycle three corners into place"),a=u.state,l("pllCorners",u.steps),u=dr(i,a,[...hr,Gn("edge cycle",Pn.edgeCycle),Gn("edge cycle inverse",Ga(Pn.edgeCycle))],x,()=>"Cycle three edges into place"),a=u.state,l("pllEdges",u.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(P=>P.moves)}}function YE(n,e,t){const i=jt(2),s=Nm(i,HE),r=e.state,o=t.names||Fm,a=[];e.map.forEach((h,y)=>{a[h]=o[y]});const l=(h,y,_)=>i.cubies.findIndex(x=>x.pos[0]===h&&x.pos[1]===y&&x.pos[2]===_),c=[];let u=r;const f=(h,y)=>c.push({id:h,steps:y,moves:Om(y)}),d=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(h=>({cubies:[l(...h)]}));let p=gu(i,u,[l(-1,-1,-1)],d,a,s,h=>`${vu(ba(i,h.cubies[0],a))} corner`,11);u=p.state,f("layer",p.steps);const g=i.stickers.map((h,y)=>h.face===0?y:-1).filter(h=>h>=0),v=h=>g.every(y=>h[y]===0),m=h=>i.stickers.every((y,_)=>h[_]===y.face);return p=dr(i,u,[...hr,Gn("sune",Pn.sune),Gn("antisune",Pn.antiSune)],v,h=>h.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),u=p.state,f("orient",p.steps),p=dr(i,u,[...hr,Gn("swap neighbours",Pn.tPerm),Gn("swap diagonal",Pn.yPerm)],m,h=>h.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),u=p.state,f("permute",p.steps),{ok:!0,n:2,stages:c,moves:c.flatMap(h=>h.moves)}}function KE(n,e){const t=jt(e),i=rf(n,e);if(!i.ok)return[];const s=e===2?i.canonical.state:n,r=u=>of(t,s,u),o=t.cubies.map((u,f)=>({c:u,i:f})),a=u=>o.filter(({c:f})=>u(f)).map(({i:f})=>f),l=t.stickers.every((u,f)=>u.face!==0||s[f]===0),c=t.stickers.every((u,f)=>s[f]===u.face);return e===2?[{id:"layer",done:a(u=>u.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:c}]:[{id:"cross",done:a(u=>u.pos[1]===-2&&u.kind==="edge").every(r)},{id:"f2l",done:a(u=>u.pos[1]<=0&&u.kind!=="center").every(r)},{id:"ollCross",done:a(u=>u.pos[1]===2&&u.kind==="edge").every(u=>s[t.cubies[u].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(u=>u.pos[1]===2&&u.kind==="corner").every(r)},{id:"pllEdges",done:c}]}const jE=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],JE=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other – they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first – learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],km={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:or.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:or.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:or.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:or.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:or.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:or.tPerm}]};function _u(n,e){return km[n].find(t=>t.id===e)}const O=Fn({n:3,mode:"setup",editing:!1,brush:0,speed:1,playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",dramaSpeed:parseFloat(localStorage.getItem("rubiks-solver.dramaSpeed")||"0.32"),finale:localStorage.getItem("rubiks-solver.finale")==="1",fullscreenOnPlay:!1,quickSolveRequest:!1,showAllColorsOnHover:!1,countdown:0,exploding:!1,busy:!1,solving:!1,solution:null,pointer:0,solveError:"",moveCount:0}),an=Ig(hl(3));let xu=null,Ea=null,$n=Promise.resolve();const yu=new Set,ss=[];function ZE(n){xu=n}function QE(n){Ea=n}function e1(n){return yu.add(n),()=>yu.delete(n)}const Ji=Nt(()=>rf(an.value,O.n)),Wa=Nt(()=>SE(an.value,O.n)),t1=Nt(()=>KE(an.value,O.n));let wa=0;const n1=n=>new Promise(e=>setTimeout(e,n));async function i1(){const n=++wa;for(const e of[3,2,1]){if(n!==wa)return;O.countdown=e,await n1(1e3)}if(n===wa){O.countdown=0,O.exploding=!0;try{await(Ea==null?void 0:Ea())}finally{O.exploding=!1}}}function _o(){wa++,O.countdown=0}function dl(){_o(),O.solution=null,O.pointer=0,O.solveError=""}function af(n){return $n=$n.then(()=>{ss.length=0,an.value=n,dl(),O.moveCount=0}),$n}function zm(n,e){return $n=$n.then(()=>{ss.length=0,an.value=e,O.n=n,O.editing=!1,O.brush=0,dl(),O.moveCount=0}),$n}function md(n){return zm(n,hl(n))}function $a(){return af(hl(O.n))}function Xa(){const n=bE(O.n);return af(ME(hl(O.n),O.n,n)).then(()=>n)}function Mu(n,e=O.brush){const t=jt(O.n);if(t.cubies[t.stickers[n].cubie].kind==="center"&&O.n===3)return;const i=Uint8Array.from(an.value);i[n]=e,an.value=i,ss.length=0,dl()}function fi(n,{animate:e=!0,fromSolution:t=!1,recordHistory:i=!0}={}){return O.exploding||($n=$n.then(async()=>{const s=n.split(" ").reduce((r,o)=>yE(r,O.n,o),an.value);O.busy=!0;try{e&&xu&&await xu(n,s,O.speed)}finally{O.busy=!1}an.value=s,t||(dl(),O.moveCount=Math.max(0,O.moveCount+(i?1:-1)),i&&ss.push(n)),yu.forEach(r=>r(n))})),$n}function gd(n,e){return n.forEach(t=>fi(t,e)),$n}async function Su(){if(O.solving)return null;O.solving=!0,O.solveError="";try{await new Promise(e=>setTimeout(e,20));const n=Bm(an.value,O.n);return n.ok?(O.solution=n,O.pointer=0,ss.length=0,n):(O.solution=null,O.solveError=n.error,null)}finally{O.solving=!1}}async function s1(){if(O.busy||O.playing||O.solving||O.exploding)return;if(O.solution)return Ta();const n=ss[ss.length-1];if(!n)return;const e=n.split(" ").reverse().map(sf).join(" ");await fi(e,{recordHistory:!1}),ss.pop()}function qa(){const n=O.solution;if(!n)return[];const e=[];return n.stages.forEach((t,i)=>{t.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>e.push({move:o,stage:i,step:r,index:a}))})}),e}async function cr(){_o();const n=qa();if(O.pointer>=n.length)return;const e=n[O.pointer];O.pointer++,await fi(e.move,{fromSolution:!0})}async function Ta(){_o();const n=qa();O.pointer<=0||(O.pointer--,await fi(sf(n[O.pointer].move),{fromSolution:!0}))}const r1={class:"panel"},o1={class:"notation"},a1=["onClick"],l1={class:"lessons"},c1={class:"lesson-title"},u1={class:"goal"},f1={key:0,class:"tip"},h1={key:1,class:"alg"},d1=["onClick"],p1=["onClick"],m1={__name:"LearnPanel",setup(n){return(e,t)=>(he(),_e("section",r1,[t[0]||(t[0]=R("h2",null,"Learn to solve",-1)),t[1]||(t[1]=R("h3",null,"Notation",-1)),R("ul",o1,[(he(!0),_e(ft,null,zt(Y(jE),i=>(he(),_e("li",{key:i.move},[R("button",{onClick:s=>Y(fi)(i.move)},Se(i.move),9,a1),R("span",null,Se(i.text),1)]))),128))]),(he(!0),_e(ft,null,zt(Y(JE),i=>(he(),_e("details",{key:i.title,class:"concept"},[R("summary",null,Se(i.title),1),(he(!0),_e(ft,null,zt(i.body,(s,r)=>(he(),_e("p",{key:r},Se(s),1))),128))]))),128)),R("h3",null,"The "+Se(Y(O).n)+"×"+Se(Y(O).n)+" method – layer by layer",1),R("ol",l1,[(he(!0),_e(ft,null,zt(Y(km)[Y(O).n],i=>(he(),_e("li",{key:i.id},[R("div",c1,Se(i.title),1),R("div",u1,"Goal: "+Se(i.goal),1),R("p",null,Se(i.concept),1),i.tip?(he(),_e("p",f1,"💡 "+Se(i.tip),1)):lt("",!0),i.algorithm?(he(),_e("div",h1,[R("code",null,Se(i.algorithm.join(" ")),1),R("button",{onClick:s=>Y(gd)(i.algorithm)},"Try",8,d1),R("button",{onClick:s=>Y(gd)(Y(Ga)(i.algorithm))},"Undo",8,p1)])):lt("",!0)]))),128))]),t[2]||(t[2]=R("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left – scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},g1=wn(m1,[["__scopeId","data-v-e1103fca"]]),v1={class:"movepad",open:""},_1={class:"pad"},x1=["disabled","onClick"],y1={__name:"MovePad",setup(n){const e=["U","D","L","R","F","B"];return(t,i)=>(he(),_e("details",v1,[i[0]||(i[0]=R("summary",null,"Move Pad",-1)),R("div",_1,[(he(),_e(ft,null,zt(e,s=>R("div",{key:s,class:"group"},[(he(!0),_e(ft,null,zt([s,`${s}'`,`${s}2`],r=>(he(),_e("button",{key:r,disabled:Y(O).editing,onClick:o=>Y(fi)(r)},Se(r),9,x1))),128))])),64))])]))}},M1=wn(y1,[["__scopeId","data-v-1d6dc4ea"]]),S1={class:"panel"},b1={class:"row"},E1=["disabled"],w1=["disabled"],T1={key:0,class:"timer"},A1={key:0,class:"status ok"},C1={key:1,class:"check"},R1={class:"box"},P1={key:2,class:"hint-box"},L1={key:0,class:"hint-move"},D1={class:"move"},I1={class:"note"},U1={class:"row"},N1={key:0},F1={key:3,class:"quiz"},O1={class:"target"},B1={class:"move big"},k1={class:"note"},z1={__name:"PracticePanel",setup(n){const e=Ye(!1),t=Ye(!1),i=Ye(0),s=Ye(0),r=Ye(null);let o=0;const a=Nt(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){A(),await Xa(),e.value=!0,t.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function c(){clearInterval(o),e.value=!1}function u(){c(),r.value=null}function f(){const L=Bm(an.value,O.n);if(!L.ok){r.value={stage:"Hint unavailable",goal:L.error,concept:"",move:"",label:""};return}const N=L.stages.find(M=>M.moves.length);if(!N)return;s.value++;const w=_u(O.n,N.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:N.steps[0].moves[0],label:N.steps[0].label}}Bt(Wa,L=>{L&&e.value&&O.moveCount>0&&(c(),t.value=!0,r.value=null)});const d=Ye(!1),p=Ye(""),g=Ye(0),v=Ye(0),m=Ye(0),h=Ye("Use the move pad or keyboard.");let y=!1,_=null;function x(){const L=xE();p.value=L[Math.floor(Math.random()*L.length)]}function P(){if(d.value){A();return}c(),d.value=!0,g.value=v.value=m.value=0,h.value="Use the move pad or keyboard.",x(),_=e1(async L=>{y||(v.value++,L===p.value?(g.value++,m.value++,h.value="Correct!"):(m.value=0,h.value=`That was ${L}; ${p.value} was asked. Look at which face turns and which way.`),y=!0,await fi(Ga(L.split(" ")).join(" ")),y=!1,x())})}function A(){d.value=!1,_==null||_(),_=null}return Ls(()=>{clearInterval(o),A()}),(L,N)=>(he(),_e("section",S1,[N[2]||(N[2]=R("h2",null,"Practice & test",-1)),N[3]||(N[3]=R("h3",null,"Solve it yourself",-1)),N[4]||(N[4]=R("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),R("div",b1,[R("button",{class:"primary",onClick:l},Se(e.value||t.value?"New challenge":"Start challenge"),1),R("button",{disabled:!e.value,onClick:f},"Hint",8,E1),R("button",{disabled:!e.value,onClick:u},"Give up",8,w1),e.value||t.value?(he(),_e("span",T1,"⏱ "+Se(a.value)+" · "+Se(Y(O).moveCount)+" moves · "+Se(s.value)+" hints",1)):lt("",!0)]),t.value?(he(),_e("p",A1," Solved in "+Se(a.value)+" with "+Se(Y(O).moveCount)+" moves and "+Se(s.value)+" hint"+Se(s.value===1?"":"s")+". 🎉 ",1)):lt("",!0),e.value||t.value?(he(),_e("ul",C1,[(he(!0),_e(ft,null,zt(Y(t1),w=>(he(),_e("li",{key:w.id,class:Ot({done:w.done})},[R("span",R1,Se(w.done?"✓":""),1),st(" "+Se(Y(_u)(Y(O).n,w.id).title),1)],2))),128))])):lt("",!0),r.value?(he(),_e("div",P1,[R("div",null,[R("b",null,Se(r.value.stage),1),st(" – "+Se(r.value.goal),1)]),r.value.move?(he(),_e("div",L1,[N[0]||(N[0]=st(" Next move: ",-1)),R("span",D1,Se(r.value.move),1),R("small",null,"("+Se(r.value.label)+")",1)])):lt("",!0),R("p",I1,Se(r.value.concept),1)])):lt("",!0),N[5]||(N[5]=R("h3",null,"Notation quiz",-1)),R("div",U1,[R("button",{class:Ot({primary:d.value}),onClick:P},Se(d.value?"Stop quiz":"Start quiz"),3),d.value?(he(),_e("span",N1,"Score "+Se(g.value)+" / "+Se(v.value)+" · streak "+Se(m.value),1)):lt("",!0)]),d.value?(he(),_e("div",F1,[R("div",O1,[N[1]||(N[1]=st("Perform ",-1)),R("span",B1,Se(p.value),1)]),R("p",k1,Se(h.value),1)])):lt("",!0)]))}},H1=wn(z1,[["__scopeId","data-v-d9296598"]]),Hm="rubiks-solver.saves";function bu(n,e){const{faceGrid:t}=jt(e);return rn.map(i=>t[i].flat().map(s=>rn[n[s]]).join("")).join("")}function vd(n){const e=String(n).replace(/\s+/g,"").toUpperCase(),t=e.length===54?3:e.length===24?2:0;if(!t)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${e.length}.`);const i=[...e].find(a=>!rn.includes(a));if(i)throw new Error(`"${i}" is not a face letter – use only U, R, F, D, L, B.`);const{faceGrid:s}=jt(t),r=new Uint8Array(jt(t).slotCount),o=t*t;return rn.forEach((a,l)=>{s[a].flat().forEach((c,u)=>{r[c]=rn.indexOf(e[l*o+u])})}),{n:t,state:r}}function V1({name:n,n:e,state:t}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:e,facelets:bu(t,e),savedAt:new Date().toISOString()},null,2)}function lc(n){const e=String(n).trim();if(e.startsWith("{")){let t;try{t=JSON.parse(e)}catch{throw new Error("The file is not valid JSON.")}if(typeof t.facelets!="string")throw new Error("The file has no cube position in it.");const i=vd(t.facelets);if(t.n&&t.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof t.name=="string"?t.name:""}}return{...vd(e),name:""}}function G1(){try{const n=JSON.parse(localStorage.getItem(Hm)||"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e.facelets=="string"):[]}catch{return[]}}function W1(n){try{return localStorage.setItem(Hm,JSON.stringify(n)),!0}catch{return!1}}const $1={class:"saveload"},X1={class:"row"},q1=["placeholder"],Y1={key:0,class:"saved"},K1=["title"],j1=["onClick"],J1=["onClick"],Z1={key:1,class:"note"},Q1={class:"row"},ew={class:"file-btn"},tw={class:"row"},nw=["disabled"],iw={__name:"SaveLoad",setup(n){const e=Fn(G1()),t=Ye(""),i=Ye(""),s=Ye(""),r=Ye(!1);Bt(e,()=>W1([...e]),{deep:!0});const o=Nt(()=>`${O.n}×${O.n} position ${e.filter(h=>h.n===O.n).length+1}`);function a(h,y=!1){s.value=h,r.value=y}const l=h=>new Date(h).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function c(){const h=t.value.trim()||o.value,y=bu(an.value,O.n),_=e.find(x=>x.name===h&&x.n===O.n);_?(_.facelets=y,_.savedAt=new Date().toISOString()):e.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:h,n:O.n,facelets:y,savedAt:new Date().toISOString()}),t.value="",a(`${_?"Updated":"Saved"} "${h}".`)}async function u(h,y){await zm(h.n,h.state),a(`Loaded ${y}.`)}function f(h){try{u(lc(h.facelets),`"${h.name}"`)}catch(y){a(y.message,!0)}}function d(h){e.splice(e.indexOf(h),1),a(`Deleted "${h.name}".`)}function p(){const h=t.value.trim()||o.value,y=new Blob([V1({name:h,n:O.n,state:an.value})],{type:"application/json"}),_=URL.createObjectURL(y),x=document.createElement("a");x.href=_,x.download=`${h.replace(/[^\w\-. ]+/g,"_")}.cube.json`,x.click(),URL.revokeObjectURL(_),a(`Exported "${h}".`)}async function g(h){var _;const y=(_=h.target.files)==null?void 0:_[0];if(h.target.value="",!!y)try{const x=lc(await y.text());await u(x,x.name?`"${x.name}"`:y.name)}catch(x){a(x.message,!0)}}async function v(){const h=bu(an.value,O.n);try{await navigator.clipboard.writeText(h),a("Position code copied to the clipboard.")}catch{i.value=h,a("Clipboard not available – the code is in the box below, copy it from there.")}}function m(){try{u(lc(i.value),"the pasted code"),i.value=""}catch(h){a(h.message,!0)}}return(h,y)=>(he(),_e("details",$1,[y[3]||(y[3]=R("summary",null,"Save / load position",-1)),R("div",X1,[Ft(R("input",{"onUpdate:modelValue":y[0]||(y[0]=_=>t.value=_),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:Sc(c,["enter"])},null,40,q1),[[pn,t.value]]),R("button",{class:"primary",onClick:c},"Save")]),e.length?(he(),_e("ul",Y1,[(he(!0),_e(ft,null,zt(e,_=>(he(),_e("li",{key:_.id},[R("span",{class:"title",title:_.name},Se(_.name),9,K1),R("small",null,Se(_.n)+"×"+Se(_.n)+" · "+Se(l(_.savedAt)),1),R("button",{onClick:x=>f(_)},"Load",8,j1),R("button",{title:"Delete",onClick:x=>d(_)},"✕",8,J1)]))),128))])):(he(),_e("p",Z1,"No saved positions yet. Saves stay in this browser.")),R("div",Q1,[R("button",{onClick:p},"Export file"),R("label",ew,[y[2]||(y[2]=st(" Import file ",-1)),R("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),R("button",{onClick:v},"Copy code")]),R("div",tw,[Ft(R("input",{"onUpdate:modelValue":y[1]||(y[1]=_=>i.value=_),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:Sc(m,["enter"])},null,544),[[pn,i.value]]),R("button",{disabled:!i.value.trim(),onClick:m},"Load code",8,nw)]),s.value?(he(),_e("p",{key:2,class:Ot(["msg",{bad:r.value}]),role:"status"},Se(s.value),3)):lt("",!0)]))}},sw=wn(iw,[["__scopeId","data-v-19e6d9ae"]]),rw=["title","onClick"],ow={class:"tag"},aw={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:e}){const t=n,i=e,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=Nt(()=>jt(t.n)),o=Nt(()=>r.value.faceGrid),a=l=>t.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,c)=>(he(),_e("div",{class:Ot(["net",`n${n.n}`])},[(he(),_e(ft,null,zt(s,u=>R("div",{key:u.name,class:"face",style:ci({gridColumn:u.col,gridRow:u.row})},[(he(!0),_e(ft,null,zt(o.value[u.name],(f,d)=>(he(),_e("div",{key:d,class:"nrow"},[(he(!0),_e(ft,null,zt(f,(p,g)=>(he(),_e("button",{key:g,class:Ot(["cell",{locked:a(p)}]),style:ci({background:Y(go)[n.state[p]]}),title:`${u.name} ${d+1},${g+1}`,onClick:v=>i("paint",p)},null,14,rw))),128))]))),128)),R("span",ow,Se(u.name),1)],4)),64))],2))}},lw=wn(aw,[["__scopeId","data-v-0063ed3b"]]),Vm="rubiks-solver.ai",lf=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],_d={provider:"builtin",geminiKey:"",geminiModel:lf[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function cw(){let n={};try{n=JSON.parse(localStorage.getItem(Vm)||"{}")}catch{}const e={..._d,...n};return lf.includes(e.geminiModel)||(e.geminiModel=_d.geminiModel),e}function uw(n){localStorage.setItem(Vm,JSON.stringify(n))}const xd="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class Cs extends Error{constructor(e,t,i=0){super(t),this.kind=e,this.status=i}}async function Ns(n,{method:e="GET",headers:t={},body:i,signal:s,timeoutMs:r=2e4}={}){var d;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let c;try{c=await fetch(n,{method:e,headers:i?{"Content-Type":"application/json",...t}:t,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(p){throw a?new Cs("timeout","The request timed out."):p.name==="AbortError"?new Cs("abort","Cancelled."):new Cs("network",p.message)}finally{clearTimeout(l)}const u=await c.text();let f=null;try{f=JSON.parse(u)}catch{}if(!c.ok){const p=((d=f==null?void 0:f.error)==null?void 0:d.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||u.slice(0,200)||c.statusText;throw new Cs("http",p,c.status)}return f}function cf(n,e){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com – check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${e}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function uf(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} – the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function ff(n,e){return n.kind==="timeout"?`${e} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const hf=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,df=n=>n.localUrl.trim().replace(/\/+$/,"");async function pf(n,e,t){var i,s,r,o,a,l,c;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let u;try{u=await Ns(`${hf(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:xd}]},contents:[{role:"user",parts:[{text:e}]}]},signal:t})}catch(d){throw new Error(cf(d,n.geminiModel))}const f=((o=(r=(s=(i=u==null?void 0:u.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(d=>d.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const u=df(n);if(!u)throw new Error("Enter the local server URL in Settings.");let f;try{f=await Ns(`${u}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:xd},{role:"user",content:e}]},signal:t,timeoutMs:12e4})}catch(p){throw new Error(p.kind==="network"?await uf(u):ff(p,u))}const d=((c=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:c.content)??"";if(!d)throw new Error("The local model returned no text.");return d.trim()}throw new Error("No AI provider selected.")}const Gm="Reply with the single word OK.";async function fw(n){const e=n.geminiKey.trim();if(!e)return{ok:!1,message:"Enter an API key first."};try{await Ns(hf(n.geminiModel),{headers:{"x-goog-api-key":e},timeoutMs:15e3});const t=await pf({...n,provider:"gemini"},Gm);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:t}}catch(t){return{ok:!1,message:t instanceof Cs?cf(t,n.geminiModel):t.message}}}async function hw(n){const e=df(n);if(!e)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let t=null;try{const i=await Ns(`${e}/models`,{timeoutMs:8e3});t=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await uf(e)};if(i.kind==="timeout")return{ok:!1,message:ff(i,e)}}if(t!=null&&t.length&&!t.includes(n.localModel)){const i=t.slice(0,10).join(", ")+(t.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await pf({...n,provider:"local"},Gm);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function dw(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" – goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function Wm(n){const e=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&e.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&e.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),e.join(`

`)}async function pw(n,e,t){return n.provider==="builtin"?{text:Wm(e),ai:!1}:{text:await pf(n,dw(e),t),ai:!0}}const At=Fn(cw());Bt(At,n=>uw({...n}),{deep:!0});const $m=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],cc=(n,e)=>$m.find(t=>t.name===e).face[n];function uc(n,e){const t=n/2,i=e/2,s=Math.min(n,e)*.38,r=s*Math.cos(Math.PI/6);return[[t,i],[t,i-s],[t+r,i-s/2],[t+r,i+s/2],[t,i+s],[t-r,i+s/2],[t-r,i-s/2]]}function yd(n,e,t){const i=jt(t),s=i.m,r=[],o=e[0];for(const a of $m){const l=e[a.ea],c=e[a.eb],u=e[a.far],f=Nn[cc(n,a.name)],d=Nn[cc(n,a.across[0])],p=Nn[cc(n,a.across[1])];for(let g=0;g<t;g++)for(let v=0;v<t;v++){const m=(g+.5)/t,h=(v+.5)/t,y=o[0]+m*(l[0]-o[0])+h*(c[0]-o[0])+m*h*(u[0]-l[0]-c[0]+o[0]),_=o[1]+m*(l[1]-o[1])+h*(c[1]-o[1])+m*h*(u[1]-l[1]-c[1]+o[1]),x=[0,1,2].map(P=>s*(f[P]+d[P]+p[P])-2*g*p[P]-2*v*d[P]);r.push({slot:i.slotAt(x,f),x:y,y:_})}}return r}function mw(n,e,t,i){const{data:s,width:r,height:o}=n;let a=0,l=0,c=0,u=0;for(let f=Math.max(0,Math.round(t-i));f<=Math.min(o-1,Math.round(t+i));f++)for(let d=Math.max(0,Math.round(e-i));d<=Math.min(r-1,Math.round(e+i));d++){const p=(f*r+d)*4;a+=s[p],l+=s[p+1],c+=s[p+2],u++}return u?[a/u,l/u,c/u]:[0,0,0]}function Xm([n,e,t]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(e),i(t)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,c=(.0193*s+.1192*r+.9505*o)/1.08883,u=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*u(l)-16,500*(u(a)-u(l)),200*(u(l)-u(c))]}const Ya=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Md=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),gw=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),vw=n=>{const e=[...n].sort((t,i)=>t-i);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2};function _w(n){const e=a=>Math.hypot(a[1],a[2]),t=n.map(a=>({rgb:a,lab:Xm(a)})).filter(({lab:a})=>a[0]>60&&e(a)<50);if(!t.length)return null;const i=Math.min(...t.map(a=>e(a.lab))),s=t.filter(a=>e(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>vw(o.map(l=>l.rgb[a])))}function xw(n,e){return n.map((t,i)=>{const s=Math.min(5,1/Math.max(Md(e[i]),.02));return Math.max(0,Math.min(255,gw(Math.min(1,Md(t)*s))))})}function yw([n,e,t]){const[i,s,r]=[n/255,e/255,t/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let c=0;return l>0&&(o===i?c=(s-r)/l%6:o===s?c=(r-i)/l+2:c=(i-s)/l+4,c*=60,c<0&&(c+=360)),{h:c>300?c-360:c,s:o===0?0:l/o,v:o}}const Gr=[-30,90],fc=n=>n.s>.4&&n.h>-40&&n.h<80;function Mw(n){const e=[...n].sort((i,s)=>i-s);return e.slice(1).map((i,s)=>({size:i-e[s],mid:(i+e[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const Sd=(n,[e,t])=>n<e?0:n<t?1:2;function Sw(n,e,t=null){const i=jt(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const u=[],f=[];for(const h of e){const y=i.stickers[h.slot];i.cubies[y.cubie].kind==="center"&&(u[y.face]=h.lab,f[y.face]=h)}for(const h of e){let y=0;for(let _=1;_<6;_++)Ya(h.lab,u[_])<Ya(h.lab,u[y])&&(y=_);s[h.slot]=y}const d=[0,1,2,3,4,5].filter(h=>fc(f[h])).sort((h,y)=>f[h].h-f[y].h);if(d.length!==3)return{state:s,warnings:r,hue:null};const p=d.map(h=>f[h].h),g=[(p[0]+p[1])/2,(p[1]+p[2])/2],v=t??g,m=[];for(const h of e)!d.includes(s[h.slot])||h.s<.25||(s[h.slot]=d[Sd(h.h,v)],m.push(h.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:v,points:m,anchors:p}}}const o=e.filter(fc);let a=null,l=null;if(o.length===12){const u=Mw(o.map(g=>g.h)),f=t??u,d=e.filter(g=>!fc(g)),p=bd(d.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+Sd(g.h,f))),d.forEach((g,v)=>a.set(g.slot,p[v])),l={auto:u,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const u=bd(e.map(f=>f.lab),6);a=new Map(e.map((f,d)=>[f.slot,u[d]]))}for(const[u,f]of a)s[u]=f;const c=Lm(s);return c.error?(r.push(`${c.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:c.state,warnings:r,hue:l}}function bd(n,e){const t=n.length/e,i=[n[0]];for(;i.length<e;){let r=0,o=-1;n.forEach((a,l)=>{const c=Math.min(...i.map(u=>Ya(a,u)));c>o&&(o=c,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((c,u)=>i.forEach((f,d)=>o.push([Ya(c,f),u,d]))),o.sort((c,u)=>c[0]-u[0]);const a=new Array(e).fill(t),l=new Array(n.length).fill(-1);for(const[,c,u]of o)l[c]<0&&a[u]>0&&(l[c]=u,a[u]--);s=l;for(let c=0;c<e;c++){const u=n.filter((f,d)=>s[d]===c);u.length&&(i[c]=[0,1,2].map(f=>u.reduce((d,p)=>d+p[f],0)/u.length))}}return s}function bw(n,e,{whiteBalance:t=!1,cutoffs:i=null}={}){const s=[null,null];let r=e;if(t){r=[];for(const a of[0,1]){const l=e.filter(u=>u.photo===a),c=_w(l.map(u=>u.rgb));s[a]=c?"applied":"no-white",r.push(...c?l.map(u=>({...u,rgb:xw(u.rgb,c)})):l)}}const o=r.map(a=>({slot:a.slot,lab:Xm(a.rgb),...yw(a.rgb)}));return{...Sw(n,o,i),whiteBalance:s}}const ar=Math.PI/180,Ew=Array.from({length:8},(n,e)=>[e&1?1:-1,e&2?1:-1,e&4?1:-1]);function ww(n,e,t){const i=Math.max(n,e,t),s=Math.min(n,e,t);return{s:i===0?0:(i-s)/i,v:i/255}}function Tw(n,e=360){const{data:t,width:i,height:s}=n,r=Math.min(1,e/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),c=new Float32Array(o*a);for(let u=0;u<a;u++){const f=Math.floor(u*s/a),d=Math.max(f+1,Math.floor((u+1)*s/a));for(let p=0;p<o;p++){const g=Math.floor(p*i/o),v=Math.max(g+1,Math.floor((p+1)*i/o));let m=0,h=0,y=0,_=0;for(let N=f;N<d;N++)for(let w=g;w<v;w++){const M=(N*i+w)*4;m+=t[M],h+=t[M+1],y+=t[M+2],_++}const{s:x,v:P}=ww(m/_,h/_,y/_),A=x>.42&&P>.32?Math.min(1,(x-.32)/.3):0,L=x<.2&&P>.72?.9:0;l[u*o+p]=Math.max(A,L),c[u*o+p]=P<.3?Math.min(1,(.34-P)/.14):0}}return{w:o,h:a,scale:r,stick:Ed(l,o,a),dark:Ed(c,o,a)}}function Ed(n,e,t){const i=new Float32Array(n.length);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const u=r+c,f=s+l;u<0||f<0||u>=e||f>=t||(o+=n[f*e+u],a++)}i[s*e+r]=o/a}return i}function Eu(n,e,t,i,s){if(i<0||s<0||i>e-1||s>t-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(e-1,r+1),l=Math.min(t-1,o+1),c=i-r,u=s-o;return n[o*e+r]*(1-c)*(1-u)+n[o*e+a]*c*(1-u)+n[l*e+r]*(1-c)*u+n[l*e+a]*c*u}function Aw(n,e,t){const[i,s]=[Math.cos(n*ar),Math.sin(n*ar)],[r,o]=[Math.cos(e*ar),Math.sin(e*ar)],[a,l]=[Math.cos(t*ar),Math.sin(t*ar)],c=[[i,0,s],[0,1,0],[-s,0,i]],u=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],d=(p,g)=>p.map(v=>[0,1,2].map(m=>v[0]*g[0][m]+v[1]*g[1][m]+v[2]*g[2][m]));return d(f,d(u,c))}function mf(n,e,t){const i=Aw(n.yaw,n.pitch,n.roll),s=(n.cx-e/2)/n.f*n.z,r=(n.cy-t/2)/n.f*n.z;return Ew.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const gf=(n,e,t,i)=>[e/2+i*n[0]/n[2],t/2+i*n[1]/n[2]];function qm(n){let e=0;for(let t=1;t<8;t++)n[t][2]<n[e][2]&&(e=t);return e}const Cw=[[1,2],[1,4],[2,4]],wd=[.12,.3,.5,.7,.88],Rw=[.02,.05,.08],Td=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function Ym(n,e,t,i,s){const{w:r,h:o}=n,a=A=>A?Eu(n.stick,r,o,A[0],A[1]):-1,l=A=>A?Eu(n.dark,r,o,A[0],A[1]):-1;let c=0,u=0,f=0,d=0,p=0,g=0,v=0,m=0;const h=[],y=[],_=(A,L)=>{m++,A<0&&(v++,A=0),L===0?(c+=A,u++):L===1?(f+=A,d++):(p+=A,g++)};for(const A of t){const L=[A(0,0),A(1,0),A(1,1),A(0,1)];if(L.some(w=>!w))return-1;y.push(L);let N=0;for(let w=0;w<4;w++){const M=L[w],D=L[(w+1)%4];N+=M[0]*D[1]-D[0]*M[1]}h.push(Math.abs(N)/2);for(let w=0;w<e;w++)for(let M=0;M<e;M++){let D=0,Q=!1;for(const[J,V]of Td){const $=a(A((w+.5)/e+J*.16/e,(M+.5)/e+V*.16/e));$<0?Q=!0:D+=$}_(Q?-1:D/Td.length,0)}for(let w=1;w<e;w++)for(const M of wd)for(const D of[0,1]){const Q=(B,oe)=>D===0?A(B,oe):A(oe,B);let J=-1;for(const B of[-i,0,i])J=Math.max(J,l(Q(w/e+B/e,M)));const V=a(Q(w/e-.33/e,M)),$=a(Q(w/e+.33/e,M));_(J<0||V<0||$<0?-1:J*Math.min(V,$),1)}for(const w of wd)for(const[M,D,Q,J,V,$]of[[0,w,.33/e,w,1,0],[1,w,1-.33/e,w,-1,0],[w,0,w,.33/e,0,1],[w,1,w,1-.33/e,0,-1]]){let B=-1;for(const X of Rw)B=Math.max(B,l(A(M+V*X/e,D+$*X/e)));const oe=a(A(Q,J));_(B<0||oe<0?-1:B*oe,2)}}if(!u||!d)return-1;if(s)return{cell:c/u,line:f/d,border:p/g,outside:v,total:m};let x=.3*(c/u)+.4*(f/d)+.3*(p/g);x*=1-v/Math.max(1,m);const P=Math.min(...h)/Math.max(...h);return P<.12&&(x*=P/.12),x*(.4+.6*Lw(n,y))}const Pw=(n,e,t)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(t-r[1])-(o[1]-r[1])*(e-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function Lw(n,e){const{w:t,h:i}=n,s=e.flat(),r=s.map(m=>m[0]),o=s.map(m=>m[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),c=Math.max(0,Math.min(...r)-l),u=Math.min(t-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),d=Math.min(i-1,Math.max(...o)+l);let p=0,g=0;const v=22;for(let m=0;m<v;m++)for(let h=0;h<v;h++){const y=c+(u-c)*(m+.5)/v,_=f+(d-f)*(h+.5)/v,x=Eu(n.stick,t,i,y,_);e.some(P=>Pw(P,y,_))?p+=x:g+=x}return p/Math.max(1e-6,p+g)}function Aa(n,e,t,i=.12,s=!1){const{w:r,h:o}=n,a=mf(t,r,o),l=qm(a);if(a[l][2]<1)return-1;const c=a[l],u=(h,y,_)=>_<.3?null:[r/2+t.f*h/_,o/2+t.f*y/_],f=Cw.map(([h,y])=>{const _=a[l^h],x=a[l^y],P=[_[0]-c[0],_[1]-c[1],_[2]-c[2]],A=[x[0]-c[0],x[1]-c[1],x[2]-c[2]];return(L,N)=>u(c[0]+P[0]*L+A[0]*N,c[1]+P[1]*L+A[1]*N,c[2]+P[2]*L+A[2]*N)});let d=Ym(n,e,f,i,s);if(s||d<0)return d;const p=a.map(h=>h[2]>.3?gf(h,r,o,t.f):[0,0]),g=p.map(h=>h[0]),v=p.map(h=>h[1]),m=Math.max(Math.max(...g)-Math.min(...g),Math.max(...v)-Math.min(...v))/Math.min(r,o);return m<.15&&(d*=m/.15),m>1.1&&(d*=1.1/m),d}function Ad(n,e,t,i=.05){const s=(d,p,g,v)=>(m,h)=>[v[0]+m*(d[0]-v[0])+h*(p[0]-v[0])+m*h*(g[0]-d[0]-p[0]+v[0]),v[1]+m*(d[1]-v[1])+h*(p[1]-v[1])+m*h*(g[1]-d[1]-p[1]+v[1])],[r,o,a,l,c,u,f]=t;return Ym(n,e,[s(f,a,o,r),s(c,f,u,r),s(a,c,l,r)],i,!1)}function Cd(n,e,t){const i=mf(n,e,t),s=qm(i),r=f=>gf(i[f],e,t,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const d=o[f].p,p=o[(f+1)%6].p;a+=d[0]*p[1]-p[0]*d[1]}a<0&&o.reverse();const l=o.map((f,d)=>f.far?d:-1).filter(f=>f>=0),c=l.reduce((f,d)=>o[d].p[1]<o[f].p[1]?d:f,l[0]),u=[0,1,2,3,4,5].map(f=>o[(c+f)%6].p);return[r(s),...u]}function wu(n,e,t){const i=mf(n,e,t).map(o=>gf(o,e,t,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function Dw(n,e,t,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:e,pitch:t,roll:i,f:s},l=(n.x1+n.x2)/2,c=(n.y1+n.y2)/2;for(let u=0;u<3;u++){const f=wu(a,r,o),d=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),p=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(d*p));const g=wu(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=c-(g.y1+g.y2)/2}return a}const Iw=["cx","cy","z","yaw","pitch","roll","lf"];function Uw(n,e,t,i){const s=n.w,r=n.h,o={...t,lf:Math.log(t.f/i)},a=p=>({...p,f:i*Math.exp(p.lf)}),l=wu(a(o),s,r),c=Math.max(l.x2-l.x1,l.y2-l.y1),u={cx:.02*c,cy:.02*c,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:p,shrink:g}of f){let v=Aa(n,e,a(o),p);for(const m of g)for(let h=0;h<30;h++){let y=!1;for(const _ of Iw)for(const x of[1,-1]){const P={...o,[_]:o[_]+x*u[_]*m};if(_==="pitch"&&Math.abs(P.pitch)>85||_==="lf"&&(P.lf<-.7||P.lf>1.6)||_==="z"&&P.z<1.5)continue;const A=Aa(n,e,a(P),p);A>v+1e-5&&(v=A,Object.assign(o,P),y=!0)}if(!y)break}}const d=a(o);return{pose:d,score:Aa(n,e,d,.06)}}function Nw(n,e,{box:t=null}={}){const i=Tw(n),{w:s,h:r}=i,a=t?[(y=>({x1:y.x1/1e3*s,x2:y.x2/1e3*s,y1:y.y1/1e3*r,y2:y.y2/1e3*r}))(t)]:[.4,.5,.62,.76,.9].map(y=>{const _=y*Math.min(s,r)/2;return{x1:s/2-_,x2:s/2+_,y1:r/2-_,y2:r/2+_}}),l=.8*Math.max(s,r),c=[];for(const y of a)for(let _=0;_<90;_+=10)for(let x=-80;x<=80;x+=10)for(let P=-90;P<=90;P+=15)for(const A of[l,2.8*l]){const L=Dw(y,_,x,P,A,s,r);c.push({pose:L,score:Aa(i,e,L,.16)})}c.sort((y,_)=>_.score-y.score);const u=c[Math.floor(c.length/2)].score,f=[],d=y=>Cd(y,s,r).flat();for(const y of c.slice(0,200)){const _=d(y.pose),x=Math.max(..._.filter((P,A)=>A%2===0))-Math.min(..._.filter((P,A)=>A%2===0));if(f.every(P=>Math.max(...P.k.map((A,L)=>Math.abs(A-_[L])))>.05*x)&&f.push({...y,k:_}),f.length>=16)break}let p=null;const g=[];for(const y of f){const _=Uw(i,e,y.pose,l);g.push(_),(!p||_.score>p.score)&&(p=_)}if(!p||p.score<=0)return null;const v=Cd(p.pose,s,r),m=Fw(i,e,v);return{handles:m.handles.map(([y,_])=>[y/s*1e3,_/r*1e3]),poseHandles:v.map(([y,_])=>[y/s*1e3,_/r*1e3]),score:m.score,poseScore:p.score,margin:m.score-u,pose:p.pose,maps:i,alternatives:g}}function Fw(n,e,t){const i=t.map(c=>c[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=t.map(c=>[...c]),a=(c,u)=>Math.max(t[c][u]-r,Math.min(t[c][u]+r,o[c][u]));let l=Ad(n,e,o,.05);for(const c of[.012,.006,.003])for(let u=0;u<20;u++){let f=!1;for(let d=0;d<7;d++)for(let p=0;p<2;p++)for(const g of[1,-1]){const v=o[d][p];if(o[d][p]=v+g*c*s,o[d][p]!==a(d,p)){o[d][p]=v;continue}const m=Ad(n,e,o,.05);m>l+1e-5?(l=m,f=!0):o[d][p]=v}if(!f)break}return{handles:o,score:l}}function Rd(n,e,{box:t=null,signal:i}={}){const s=()=>{const r=Nw(n,e,{box:t});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=c=>{i==null||i.removeEventListener("abort",l),a.terminate(),c.data.error?o(new Error(c.data.error)):r(c.data.result)},a.onerror=c=>{var u;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(u=c.preventDefault)==null||u.call(c)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:e,box:t})})}const Km=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,ua=(n,...e)=>e.map(t=>n==null?void 0:n[t]).find(t=>t!==void 0);function Ow(n){const e=n.indexOf("{"),t=n.lastIndexOf("}");if(e<0||t<=e)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(e,t+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=ua(s,"x1","xmin","left","x_min"),o=ua(s,"y1","ymin","top","y_min"),a=ua(s,"x2","xmax","right","x_max"),l=ua(s,"y2","ymax","bottom","y_max"));const c=[r,o,a,l].map(Number);if(c.some(u=>!Number.isFinite(u)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(c[0],c[2]),y1:Math.min(c[1],c[3]),x2:Math.max(c[0],c[2]),y2:Math.max(c[1],c[3])}}function jm(n){const{x1:e,y1:t,x2:i,y2:s}=n;if([e,t,i,s].every(d=>d<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(e<-50||t<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-e,o=s-t;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(e+i)/2,l=(t+s)/2,c=r/2,u=o/2,f=d=>Math.max(0,Math.min(1e3,d));return[[a,l],[a,l-u],[a+c,l-u/2],[a+c,l+u/2],[a,l+u],[a-c,l+u/2],[a-c,l-u/2]].map(([d,p])=>[f(d),f(p)])}const Bw=n=>{const e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]};function kw(n,e){const{data:t,width:i,height:s}=n,r=(F,K)=>Math.round(F/1e3*K),o=r(e.x1,i),a=r(e.x2,i),l=r(e.y1,s),c=r(e.y2,s),u=F=>Math.max(0,Math.min(i-1,Math.round(F))),f=F=>Math.max(0,Math.min(s-1,Math.round(F))),d=(a-o)*.25,p=(c-l)*.25,[g,v,m,h]=[u(o-d),u(a+d),f(l-p),f(c+p)],y=v-g+1,_=h-m+1;if(y<40||_<40)return null;const x=Math.max(3,Math.round(Math.min(y,_)*.06)),P=(F,K)=>{const Ce=(K*i+F)*4;return[t[Ce],t[Ce+1],t[Ce+2]]},A=[];for(let F=m;F<=h;F++)for(let K=g;K<=v;K++)(K-g<x||v-K<x||F-m<x||h-F<x)&&A.push(P(K,F));const L=[0,1,2].map(F=>Bw(A.map(K=>K[F]))),N=F=>Math.hypot(F[0]-L[0],F[1]-L[1],F[2]-L[2]),w=A.map(N).sort((F,K)=>F-K),M=Math.max(40,w[Math.floor(w.length*.95)]*1.6),D=new Array(y).fill(0),Q=new Array(_).fill(0);for(let F=0;F<_;F++)for(let K=0;K<y;K++)N(P(g+K,m+F))>M&&(D[K]++,Q[F]++);const J=F=>{const K=Math.max(...F)*.04,Ce=F.findIndex(le=>le>=K),te=F.length-1-[...F].reverse().findIndex(le=>le>=K);return Ce<0?null:[Ce,te]},V=J(D),$=J(Q);if(!V||!$)return null;const B={x1:(g+V[0])/i*1e3,x2:(g+V[1]+1)/i*1e3,y1:(m+$[0])/s*1e3,y2:(m+$[1]+1)/s*1e3},oe=F=>(F.x2-F.x1)*(F.y2-F.y1),X=oe(B)/oe(e),be=Math.hypot((B.x1+B.x2-e.x1-e.x2)/2,(B.y1+B.y2-e.y1-e.y2)/2),j=V[0]===0||$[0]===0||V[1]===y-1||$[1]===_-1;return X<.45||X>2.2||be>.25*Math.max(e.x2-e.x1,e.y2-e.y1)||j?null:B}function zw(n){return Jm(n).length>0}function Jm(n){var t,i,s;const e=[];return(t=n.localUrl)!=null&&t.trim()&&((i=n.localModel)!=null&&i.trim())&&e.push("local"),(s=n.geminiKey)!=null&&s.trim()&&e.push("gemini"),e}async function Hw(n,e,t){var s,r;const i=df(n);try{await Ns(`${i}/models`,{timeoutMs:4e3,signal:t})}catch(o){if(o.kind==="network")throw new Error(await uf(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await Ns(`${i}/chat/completions`,{method:"POST",signal:t,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:Km},{type:"image_url",image_url:{url:e}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof Cs){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(ff(o,i)+a)}throw o}}async function Vw(n,e,t){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(e)??[];if(!s)throw new Error("Could not encode the photo.");try{const c=await Ns(`${hf(n.geminiModel)}:generateContent`,{method:"POST",signal:t,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:Km},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=c==null?void 0:c.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(u=>u.text).join(""))??"",model:n.geminiModel}}catch(c){throw c instanceof Cs?new Error(cf(c,n.geminiModel)):c}}async function Gw(n,e,t){const i=Jm(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?Hw(n,e,t):Vw(n,e,t)),l=Ow(o);return{handles:jm(l),source:r,model:a,box:l,notes:s}}catch(o){if(t!=null&&t.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const Ww={class:"photo-import"},$w={class:"photos"},Xw={class:"file"},qw=["onChange"],Yw=["onPointerdown","onPointermove"],Kw={class:"ai-row"},jw=["disabled","onClick"],Jw={class:"wb"},Zw={class:"wb"},Qw={class:"actions"},eT=["disabled"],tT={key:0,class:"hue-box"},nT={class:"hue-head"},iT=["disabled"],sT={class:"slider"},rT=["min","max"],oT={class:"slider"},aT=["min","max"],lT={key:1,class:"note"},Pd=.3,cT={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:e}){const t=n,i=e,s=[null,null],r=Fn([null,null]),o=Fn([uc(420,420),uc(420,420)]),a=Ye(""),l=Ye(!1),c=Ye(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Bt(c,j=>localStorage.setItem("rubiks-solver.autoAlign",j?"1":"0"));const u=Fn([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],d=Ye(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),p=Ye(null),g=Ye(null),v=Ye(!1),m=Ye(0),h=Ye(0),y=Ye(null),_=Ye(null),x=Nt(()=>r[0]&&r[1]);Mo(()=>[0,1].forEach(M)),Bt(()=>t.n,()=>{[0,1].forEach(M),p.value=null,g.value=null,v.value=!1});function P(j,F){var te;const K=(te=F.target.files)==null?void 0:te[0];if(!K)return;const Ce=new Image;Ce.onload=async()=>{r[j]=Ce,o[j]=uc(420,420),u[j].state="",u[j].text="",await Ou(),M(j),c.value&&N(j)},Ce.src=URL.createObjectURL(K)}function A(j){const F=Math.min(1,768/Math.max(j.width,j.height)),K=document.createElement("canvas");K.width=Math.round(j.width*F),K.height=Math.round(j.height*F);const Ce=K.getContext("2d");return Ce.drawImage(j,0,0,K.width,K.height),{dataUrl:K.toDataURL("image/jpeg",.85),pixels:Ce.getImageData(0,0,K.width,K.height)}}function L(j,F,K){const{s:Ce,ox:te,oy:le}=w(F);K.forEach(([Ee,ve],ze)=>{o[j][ze]=[te+Ee/1e3*F.width*Ce,le+ve/1e3*F.height*Ce]}),M(j)}async function N(j){var te;const F=r[j];if(!F)return;(te=f[j])==null||te.abort();const K=new AbortController;f[j]=K,u[j].busy=!0,u[j].state="",u[j].text="Analysing the photo…";const Ce=()=>r[j]!==F||K.signal.aborted;try{const{dataUrl:le,pixels:Ee}=A(F),ve=zw(At),ze=ve?Gw({...At},le,K.signal).catch(C=>{if(C.kind==="abort"||K.signal.aborted)throw C;return{error:C.message}}):null;let Ve=await Rd(Ee,t.n,{signal:K.signal});if(Ce())return;let Ze="image analysis";Ve&&Ve.score>=Pd&&(L(j,F,Ve.handles),ve&&(u[j].text="Cube outlined by image analysis – asking the AI to double-check…"));let nt=null;if(ze){if(nt=await ze,Ce())return;if(nt.box){const C=await Rd(Ee,t.n,{box:nt.box,signal:K.signal});if(Ce())return;C&&(!Ve||C.score>Ve.score+.02)&&(Ve=C,Ze=`${nt.source==="local"?"local model":"Gemini"} ${nt.model} + image analysis`)}}if(Ve&&Ve.score>=Pd){L(j,F,Ve.handles),u[j].state="ok",u[j].text=`Cube outlined by ${Ze} (fit ${Math.round(Ve.score*100)}%). The outline is a perspective-correct cube model – fine-tune the handles if needed.`;return}if(nt!=null&&nt.box){const C=kw(Ee,nt.box);L(j,F,C?jm(C):nt.handles),u[j].state="ok",u[j].text="The cube could not be fitted precisely; the outline is only a rough box from the AI – please adjust the handles.";return}u[j].state="bad",u[j].text="Could not find a cube in this photo"+(nt!=null&&nt.error?` (${nt.error})`:"")+" – drag the handles by hand."}catch(le){if(le.kind==="abort"||K.signal.aborted)return;u[j].state="bad",u[j].text=`${le.message} – drag the handles by hand.`}finally{f[j]===K&&(u[j].busy=!1)}}function w(j){const F=Math.min(420/j.width,420/j.height);return{s:F,ox:(420-j.width*F)/2,oy:(420-j.height*F)/2}}function M(j){const F=s[j];if(!F)return;const K=F.getContext("2d");K.clearRect(0,0,420,420),K.fillStyle="#0f1116",K.fillRect(0,0,420,420);const Ce=r[j];if(Ce){const{s:le,ox:Ee,oy:ve}=w(Ce);K.drawImage(Ce,Ee,ve,Ce.width*le,Ce.height*le)}const te=o[j];K.lineWidth=2,K.strokeStyle="#ffffff",K.beginPath(),[1,2,3,4,5,6].forEach((le,Ee)=>Ee?K.lineTo(te[le][0],te[le][1]):K.moveTo(te[le][0],te[le][1])),K.closePath(),K.stroke(),K.beginPath(),[2,4,6].forEach(le=>{K.moveTo(te[0][0],te[0][1]),K.lineTo(te[le][0],te[le][1])}),K.stroke(),K.fillStyle="#ff2d55";for(const le of yd(j,te,t.n))K.beginPath(),K.arc(le.x,le.y,3,0,Math.PI*2),K.fill();K.fillStyle="#00e5ff",te.forEach(([le,Ee])=>{K.beginPath(),K.arc(le,Ee,7,0,Math.PI*2),K.fill()})}const D=(j,F)=>{const K=s[j].getBoundingClientRect();return[(F.clientX-K.left)/K.width*420,(F.clientY-K.top)/K.height*420]};function Q(j,F){const[K,Ce]=D(j,F);let te=-1,le=18;o[j].forEach(([Ee,ve],ze)=>{const Ve=Math.hypot(Ee-K,ve-Ce);Ve<le&&(le=Ve,te=ze)}),te>=0&&(_.value={i:j,k:te})}function J(j,F){!_.value||_.value.i!==j||(o[j][_.value.k]=D(j,F),M(j))}const V=()=>_.value=null;function $(){const j=[];for(let F=0;F<2;F++){const K=document.createElement("canvas");K.width=K.height=420;const Ce=K.getContext("2d"),{s:te,ox:le,oy:Ee}=w(r[F]);Ce.fillStyle="#000",Ce.fillRect(0,0,420,420),Ce.drawImage(r[F],le,Ee,r[F].width*te,r[F].height*te);const ve=Ce.getImageData(0,0,420,420),ze=420*.38/t.n/5;for(const Ve of yd(F,o[F],t.n))j.push({slot:Ve.slot,rgb:mw(ve,Ve.x,Ve.y,ze),photo:F})}p.value=j,v.value=!1,B()}function B(){const j=bw(t.n,p.value,{whiteBalance:d.value,cutoffs:v.value?[m.value,h.value]:null});g.value=j.hue,j.hue&&!v.value&&(m.value=Math.round(j.hue.auto[0]),h.value=Math.round(j.hue.auto[1]));const F=j.whiteBalance.map((Ce,te)=>Ce==="no-white"?te+1:0).filter(Boolean),K=[];d.value&&K.push(F.length?`No white tile found in photo ${F.join(" and ")} – colours used as they are there.`:"White balance applied to both photos."),l.value=j.warnings.length>0||F.length>0,a.value=[j.warnings[0]||"Colours imported – check them in the cube net and fix any mistakes.",...K].join(" "),i("import",j.state)}function oe(j){j==="a"?m.value=Math.min(m.value,h.value-1):h.value=Math.max(h.value,m.value+1),v.value=!0,B()}function X(){v.value=!1,B()}Bt(d,j=>{localStorage.setItem("rubiks-solver.whiteBalance",j?"1":"0"),p.value&&B()});function be(){const j=y.value;if(!j||!g.value)return;const F=j.getContext("2d"),[K,Ce]=Gr,te=j.width,le=j.height,Ee=ve=>(ve-K)/(Ce-K)*te;for(let ve=0;ve<te;ve++){const ze=K+ve/te*(Ce-K);F.fillStyle=`hsl(${(ze+360)%360} 70% 38%)`,F.fillRect(ve,0,1,le)}F.font="12px system-ui, sans-serif",F.textAlign="center",F.fillStyle="rgba(255,255,255,0.9)",[["red",K,m.value],["orange",m.value,h.value],["yellow",h.value,Ce]].forEach(([ve,ze,Ve])=>{F.fillText(ve,(Ee(ze)+Ee(Ve))/2,13)}),g.value.points.forEach((ve,ze)=>{F.beginPath(),F.arc(Ee(ve),26+ze*7%30,3.2,0,Math.PI*2),F.fillStyle="#fff",F.fill(),F.strokeStyle="rgba(0,0,0,0.6)",F.stroke()}),g.value.anchors.forEach(ve=>{F.beginPath(),F.moveTo(Ee(ve),le-14),F.lineTo(Ee(ve)-6,le-2),F.lineTo(Ee(ve)+6,le-2),F.closePath(),F.fillStyle="#fff",F.fill(),F.stroke()}),F.lineWidth=2,F.strokeStyle="#0b0d12",[m.value,h.value].forEach(ve=>{F.beginPath(),F.moveTo(Ee(ve),0),F.lineTo(Ee(ve),le),F.stroke()}),F.lineWidth=1}return Bt([g,m,h],be,{flush:"post"}),(j,F)=>(he(),_e("div",Ww,[F[12]||(F[12]=R("p",{class:"hint"},[st(" Photo 1: look straight at one "),R("b",null,"corner"),st(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),R("b",null,"opposite corner"),st(" faces the camera. Drag the 7 handles so the lines follow the cube outline – the dots show where colours are read. ")],-1)),R("div",$w,[(he(),_e(ft,null,zt(2,K=>R("div",{key:K,class:"photo"},[R("label",Xw,[R("span",null,Se(K===1?"Photo 1 – first corner":"Photo 2 – opposite corner"),1),R("input",{type:"file",accept:"image/*",onChange:Ce=>P(K-1,Ce)},null,40,qw)]),R("canvas",{ref_for:!0,ref:Ce=>s[K-1]=Ce,width:"420",height:"420",onPointerdown:Ce=>Q(K-1,Ce),onPointermove:Ce=>J(K-1,Ce),onPointerup:V,onPointerleave:V},null,40,Yw),R("div",Kw,[R("button",{type:"button",disabled:!r[K-1]||u[K-1].busy,onClick:Ce=>N(K-1)},Se(u[K-1].busy?"Finding the cube…":"✨ Find the cube"),9,jw),u[K-1].text?(he(),_e("span",{key:0,class:Ot(["ai-msg",u[K-1].state])},Se(u[K-1].text),3)):lt("",!0)])])),64))]),R("label",Jw,[Ft(R("input",{"onUpdate:modelValue":F[0]||(F[0]=K=>c.value=K),type:"checkbox"},null,512),[[ts,c.value]]),F[6]||(F[6]=R("span",null,[st(" Outline the cube automatically after upload "),R("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),R("label",Zw,[Ft(R("input",{"onUpdate:modelValue":F[1]||(F[1]=K=>d.value=K),type:"checkbox"},null,512),[[ts,d.value]]),F[7]||(F[7]=R("span",null,[st(" White balance – if a white tile is found in a photo, use it as that photo's white point "),R("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),R("div",Qw,[R("button",{class:"primary",disabled:!x.value,onClick:$},"Read colours",8,eT),a.value?(he(),_e("span",{key:0,class:Ot(["msg",{warn:l.value}])},Se(a.value),3)):lt("",!0)]),g.value?(he(),_e("div",tT,[R("div",nT,[F[8]||(F[8]=R("b",null,"Red / orange / yellow cutoffs",-1)),R("button",{type:"button",disabled:!v.value,onClick:X},"Auto",8,iT)]),R("canvas",{ref_key:"hueCanvas",ref:y,class:"hue-strip",width:"480",height:"76"},null,512),R("label",sT,[F[9]||(F[9]=R("span",null,"Red | Orange",-1)),Ft(R("input",{"onUpdate:modelValue":F[2]||(F[2]=K=>m.value=K),type:"range",min:Y(Gr)[0],max:Y(Gr)[1],step:"1",onInput:F[3]||(F[3]=K=>oe("a"))},null,40,rT),[[pn,m.value,void 0,{number:!0}]]),R("output",null,Se(m.value)+"°",1)]),R("label",oT,[F[10]||(F[10]=R("span",null,"Orange | Yellow",-1)),Ft(R("input",{"onUpdate:modelValue":F[4]||(F[4]=K=>h.value=K),type:"range",min:Y(Gr)[0],max:Y(Gr)[1],step:"1",onInput:F[5]||(F[5]=K=>oe("b"))},null,40,aT),[[pn,h.value,void 0,{number:!0}]]),R("output",null,Se(h.value)+"°",1)]),F[11]||(F[11]=R("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):p.value?(he(),_e("p",lT," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):lt("",!0)]))}},uT=wn(cT,[["__scopeId","data-v-705f75dc"]]),fT={class:"panel"},hT={class:"row"},dT={class:"seg"},pT={key:0,class:"note"},mT={class:"row"},gT={key:1,class:"row"},vT={style:{display:"flex","align-items":"center",gap:"8px"}},_T={key:2,class:"palette"},xT=["title","onClick"],yT={class:"net-editor",open:""},MT={class:"photos"},ST={__name:"SetupPanel",setup(n){const e=Ye("");function t(s){O.brush=s,O.showAllColorsOnHover=!1}async function i(){e.value=(await Xa()).join(" ")}return(s,r)=>(he(),_e("section",fT,[r[15]||(r[15]=R("h2",null,"Set up the cube",-1)),R("div",hT,[r[8]||(r[8]=R("span",{class:"label"},"Size",-1)),R("div",dT,[R("button",{class:Ot({on:Y(O).n===2}),onClick:r[0]||(r[0]=o=>Y(md)(2))},"2×2",2),R("button",{class:Ot({on:Y(O).n===3}),onClick:r[1]||(r[1]=o=>Y(md)(3))},"3×3",2)]),R("button",{onClick:r[2]||(r[2]=(...o)=>Y($a)&&Y($a)(...o))},"Reset to solved"),R("button",{onClick:i},"Random scramble")]),e.value?(he(),_e("p",pT,[r[9]||(r[9]=st("Scramble: ",-1)),R("code",null,Se(e.value),1)])):lt("",!0),r[16]||(r[16]=R("h3",null,"Enter your own position",-1)),R("div",mT,[R("button",{class:Ot({primary:Y(O).editing}),onClick:r[3]||(r[3]=o=>Y(O).editing=!Y(O).editing)},Se(Y(O).editing?"Done painting":"Paint stickers"),3),r[10]||(r[10]=R("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),Y(O).editing?(he(),_e("div",gT,[R("label",vT,[Ft(R("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=o=>Y(O).showAllColorsOnHover=o),onChange:r[5]||(r[5]=o=>Y(O).showAllColorsOnHover&&(Y(O).editing=!0))},null,544),[[ts,Y(O).showAllColorsOnHover]]),r[11]||(r[11]=st(" Show all colors on hover ",-1)),r[12]||(r[12]=R("span",{class:"note"},"(click a color on the sticker to paint it)",-1))])])):lt("",!0),Y(O).editing?(he(),_e("div",_T,[(he(!0),_e(ft,null,zt(Y(go),(o,a)=>(he(),_e("span",{key:a,class:Ot(["swatch-box",{on:!Y(O).showAllColorsOnHover&&Y(O).brush===a}])},[R("button",{class:"swatch",style:ci({background:o}),title:Y(mo)[a],onClick:l=>t(a)},null,12,xT)],2))),128))])):lt("",!0),R("details",yT,[r[13]||(r[13]=R("summary",null,"Outline",-1)),Wt(lw,{n:Y(O).n,state:Y(an),onPaint:r[6]||(r[6]=o=>Y(O).editing&&Y(Mu)(o))},null,8,["n","state"])]),R("details",MT,[r[14]||(r[14]=R("summary",null,"Import from two photos",-1)),Wt(uT,{n:Y(O).n,onImport:r[7]||(r[7]=o=>Y(af)(o))},null,8,["n"])]),r[17]||(r[17]=R("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works – the bottom-left-back corner is used as the reference. ",-1))]))}},bT={key:0,class:"result wait"},ET={class:"msg"},wT={key:0,class:"reply"},TT={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(e,t)=>n.state.busy?(he(),_e("div",bT,"Contacting the service…")):n.state.result?(he(),_e("div",{key:1,class:Ot(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[R("div",ET,Se(n.state.result.ok?"✓":"✗")+" "+Se(n.state.result.message),1),n.state.result.reply?(he(),_e("div",wT,[t[0]||(t[0]=R("span",null,"Model response",-1)),st(" "+Se(n.state.result.reply),1)])):lt("",!0)],2)):lt("",!0)}},Ld=wn(TT,[["__scopeId","data-v-b672f672"]]),AT=1,CT="Standard",RT={deadZone:.5,triggerThreshold:.5},PT={"zoom-in":{input:"D-Up",modifiers:[]},"zoom-out":{input:"D-Down",modifiers:[]},"quick-solve":{input:"Menu",modifiers:[]},"next-step":{input:"A",modifiers:[]},undo:{input:"B",modifiers:[]},scramble:{input:"X",modifiers:["View"]},reset:{input:"Y",modifiers:["View"]},"cube-up":{input:"RS-Up",modifiers:[]},"cube-down":{input:"RS-Down",modifiers:[]},"cube-left":{input:"RS-Left",modifiers:[]},"cube-right":{input:"RS-Right",modifiers:[]},"left-cw":{input:"LS-Down",modifiers:[]},"left-ccw":{input:"LS-Up",modifiers:[]},"right-cw":{input:"LS-Up",modifiers:["RT"]},"right-ccw":{input:"LS-Down",modifiers:["RT"]},"front-cw":{input:"LS-Right",modifiers:[]},"front-ccw":{input:"LS-Left",modifiers:[]},"back-cw":{input:"LS-Right",modifiers:["RT"]},"back-ccw":{input:"LS-Left",modifiers:["RT"]},"top-cw":{input:"LB",modifiers:[]},"top-ccw":{input:"LB",modifiers:["LT"]},"bottom-cw":{input:"RB",modifiers:[]},"bottom-ccw":{input:"RB",modifiers:["LT"]},"front-double":{input:"LS-Right",modifiers:["LT"]},"back-double":{input:"LS-Right",modifiers:["LT","RT"]},"left-double":{input:"LS-Up",modifiers:["LT"]},"right-double":{input:"LS-Up",modifiers:["LT","RT"]},"top-double":{input:"Y",modifiers:[]},"bottom-double":{input:"X",modifiers:[]}},LT={version:AT,name:CT,settings:RT,bindings:PT},Zm="rubiks-solver.gamepad.v1",Fs=n=>JSON.parse(JSON.stringify(n)),Ca=vo(LT),ue=Fn({enabled:!0,connected:"",controllerIndex:"",controllers:[],error:"",message:"",profiles:[Fs(Ca)],selected:Ca.name,draft:Fs(Ca),capture:null,candidate:null,captureReady:!1,held:[]});try{const n=localStorage.getItem(Zm);if(n){const e=JSON.parse(n);if(!Array.isArray(e.profiles)||!e.profiles.length)throw new Error("Invalid saved profile list.");const t=e.profiles.map(vo);if(new Set(t.map(i=>i.name)).size!==t.length)throw new Error("Duplicate profile names.");ue.profiles=t,ue.selected=t.some(i=>i.name===e.selected)?e.selected:t[0].name,ue.draft=Fs(t.find(i=>i.name===ue.selected)),ue.enabled=e.enabled!==!1}}catch(n){ue.error=`Could not load gamepad profiles: ${n.message}. Saved data has not been overwritten.`}function pl(n=ue.profiles,e=ue.selected){try{return localStorage.setItem(Zm,JSON.stringify({profiles:n,selected:e,enabled:ue.enabled})),ue.error="",!0}catch(t){return ue.error=`Could not save gamepad profiles: ${t.message}`,!1}}function Qm(n){const e=ue.profiles.find(t=>t.name===n);e&&(wi(),ue.selected=n,ue.draft=Fs(e),pl(),ue.message="")}function DT(n,e=!1){try{const t=vo({...Fs(ue.draft),name:n});if(e&&ue.profiles.some(s=>s.name===t.name))throw new Error("That name already exists.");const i=ue.profiles.filter(s=>s.name!==ue.selected||e);if(i.some(s=>s.name===t.name))throw new Error("That name already exists.");return i.push(t),pl(i,t.name)?(ue.profiles=i,ue.selected=t.name,ue.draft=Fs(t),ue.message=`Saved "${t.name}".`,!0):!1}catch(t){return ue.error=t.message,!1}}function IT(){if(ue.profiles.length<=1){ue.error="Keep at least one profile.";return}const n=ue.profiles.filter(e=>e.name!==ue.selected);pl(n,n[0].name)&&(ue.profiles=n,Qm(n[0].name))}function Dd(){wi(),ue.draft={...Fs(Ca),name:ue.selected},ue.message="Default bindings restored in the draft. Click Save to keep them."}function Id(){pl()}function wi(){ue.capture=null,ue.candidate=null,ue.captureReady=!1}function UT(n){wi(),ue.capture=n,ue.error=""}function NT(n){let e=0,t=performance.now(),i=new Set,s="",r=!1,o="",a=null;const l=new Set;function c(u){var L,N,w;e=requestAnimationFrame(c);const f=Math.min((u-t)/1e3,.05);t=u;let d;try{d=((L=navigator.getGamepads)==null?void 0:L.call(navigator))||[]}catch(M){ue.error=`Gamepad access failed: ${M.message}`;return}const p=Array.from(d).filter(M=>M&&M.mapping==="standard"),g=p.map(M=>({index:M.index,name:M.id}));JSON.stringify(g)!==JSON.stringify(ue.controllers)&&(ue.controllers=g);const v=ue.controllerIndex===""?p[0]:p.find(M=>M.index===Number(ue.controllerIndex));ue.connected=(v==null?void 0:v.id)||"",navigator.getGamepads?!v&&Array.from(d).some(Boolean)&&(ue.message="Select a connected standard-mapped Xbox-compatible controller."):ue.message="This browser does not support the Gamepad API.";const m=v?`${v.index}:${v.id}`:"",h=JSON.stringify(ue.draft);if((s!==m||o!==h)&&(s=m,o=h,r=!1,i.clear(),l.clear(),ue.captureReady=!1,ue.capture&&(ue.candidate=null)),!v){ue.held.length&&(ue.held=[]),ue.captureReady=!1;return}const y=EE(v,ue.draft.settings,i);ue.held.join(",")!==[...y].join(",")&&(ue.held=[...y]);const _=!document.hidden&&document.hasFocus();if(ue.capture){if((a!==ue.capture||!_)&&(ue.captureReady=!1,a=ue.capture),_&&!y.size&&(ue.captureReady=!0),_&&ue.captureReady){const M=[...y].filter(D=>!i.has(D));if(M.length){const D=M.find(Q=>!["LT","RT","LB","RB","View","Menu"].includes(Q))||M[M.length-1];ue.candidate={input:D,modifiers:[...y].filter(Q=>Q!==D)}}}r=!1,l.clear(),i=y;return}a=null;const x=(N=document.activeElement)==null?void 0:N.tagName;if(!_||!ue.enabled||["INPUT","TEXTAREA","SELECT"].includes(x)||(w=document.activeElement)!=null&&w.isContentEditable){r=!1,l.clear(),i=y;return}if(!r){y.size||(r=!0),i=y;return}const P=wE(ue.draft.bindings,y),A=new Set(P.map(([M])=>M));for(const M of l)A.has(M)||l.delete(M);for(const[M,D]of P){const Q=!i.has(D.input);Im.has(M)?(Q&&l.add(M),l.has(M)&&n(M,f)):Q&&n(M,f)}i=y}return e=requestAnimationFrame(c),()=>cancelAnimationFrame(e)}const FT={class:"panel"},OT={class:"row"},BT={class:"field"},kT=["value"],zT={class:"note"},HT={class:"field"},VT=["value"],GT=["value"],WT={class:"field"},$T={class:"row"},XT=["disabled"],qT={class:"note"},YT={class:"field"},KT={class:"field"},jT={key:0,class:"status bad"},JT={class:"bindings"},ZT=["disabled"],QT=["onClick"],eA=["aria-label","onClick"],tA={class:"field"},nA={class:"field"},iA={key:1,class:"status bad",role:"alert"},sA={key:2,class:"note",role:"status"},rA={__name:"GamepadSettings",setup(n){const e=Ye(ue.draft.name),t=Ye("");Bt(()=>ue.draft,()=>{e.value=ue.draft.name});const i=Nt(()=>e.value!==ue.selected||JSON.stringify(ue.draft)!==JSON.stringify(ue.profiles.find(v=>v.name===ue.selected))),s=Nt(()=>{const v=Object.values(ue.draft.bindings).filter(Boolean).map(Sa);return[...new Set(v.filter((m,h)=>v.indexOf(m)!==h))]}),r=v=>v?[...v.modifiers,v.input].join(" + "):"Click to assign";function o(){const v=ue.candidate,m=Object.entries(ue.draft.bindings).find(([h,y])=>h!==ue.capture&&y&&Sa(y)===Sa(v));if(m){ue.error=`That combination is already assigned to ${mu.find(h=>h.id===m[0]).label}. Clear it first.`;return}ue.draft.bindings[ue.capture]={input:v.input,modifiers:[...v.modifiers]},ue.error="",wi()}function a(v){if(i.value&&!window.confirm("Discard unsaved profile changes?")){v.value=ue.selected;return}Qm(v.value)}function l(v){wi(),DT(e.value,v)}function c(){window.confirm(`Delete profile "${ue.selected}" and discard its draft?`)&&IT()}function u(){return JSON.stringify(vo({...ue.draft,name:e.value}),null,2)}function f(){try{t.value=u(),ue.error=""}catch(v){ue.error=v.message}}function d(){try{const v=u(),m=URL.createObjectURL(new Blob([v],{type:"application/json"})),h=document.createElement("a");h.href=m,h.download=`${e.value.replace(/[^a-z0-9_-]/gi,"_")}.gamepad.json`,h.click(),setTimeout(()=>URL.revokeObjectURL(m),1e3),ue.error=""}catch(v){ue.error=v.message}}function p(v){try{const m=vo(JSON.parse(v));if(i.value&&!window.confirm("Discard unsaved changes and load this draft?"))return;wi(),ue.draft=m,ue.error="",ue.message="Imported draft. Choose Save As with a unique name to keep it as a new profile."}catch(m){ue.error=`Could not import profile: ${m.message}`}}async function g(v){const m=v.target.files[0];if(m){try{p(await m.text())}catch(h){ue.error=`Could not read profile: ${h.message}`}v.target.value=""}}return Ls(wi),(v,m)=>(he(),_e("section",FT,[m[21]||(m[21]=R("h2",null,"Gamepad controls",-1)),m[22]||(m[22]=R("p",{class:"note"},"Xbox / XInput-style controllers using the browser's standard mapping. Press a controller button to connect. Menu = Start; View = Back. The Xbox/Guide button is not supported.",-1)),R("label",OT,[Ft(R("input",{"onUpdate:modelValue":m[0]||(m[0]=h=>Y(ue).enabled=h),type:"checkbox",onChange:m[1]||(m[1]=(...h)=>Y(Id)&&Y(Id)(...h))},null,544),[[ts,Y(ue).enabled]]),m[13]||(m[13]=st(" Enable gamepad",-1))]),R("label",BT,[m[15]||(m[15]=st("Controller ",-1)),Ft(R("select",{"onUpdate:modelValue":m[2]||(m[2]=h=>Y(ue).controllerIndex=h)},[m[14]||(m[14]=R("option",{value:""},"First connected controller",-1)),(he(!0),_e(ft,null,zt(Y(ue).controllers,h=>(he(),_e("option",{key:h.index,value:h.index},Se(h.name)+" (#"+Se(h.index+1)+")",9,kT))),128))],512),[[Fa,Y(ue).controllerIndex]])]),R("p",zT,Se(Y(ue).connected||"No standard-mapped controller connected."),1),R("label",HT,[m[16]||(m[16]=st("Profile ",-1)),R("select",{value:Y(ue).selected,onChange:m[3]||(m[3]=h=>a(h.target))},[(he(!0),_e(ft,null,zt(Y(ue).profiles,h=>(he(),_e("option",{key:h.name,value:h.name},Se(h.name),9,GT))),128))],40,VT)]),R("label",WT,[m[17]||(m[17]=st("Profile name ",-1)),Ft(R("input",{"onUpdate:modelValue":m[4]||(m[4]=h=>e.value=h),maxlength:"80"},null,512),[[pn,e.value]])]),R("div",$T,[R("button",{onClick:m[5]||(m[5]=h=>l(!1))},"Save / Rename"),R("button",{onClick:m[6]||(m[6]=h=>l(!0))},"Save As"),R("button",{disabled:Y(ue).profiles.length<2,onClick:c},"Delete",8,XT),R("button",{onClick:m[7]||(m[7]=(...h)=>Y(Dd)&&Y(Dd)(...h))},"Restore default")]),R("p",qT,Se(i.value?"Unsaved changes (currently active).":"Profile saved.")+" Save As creates a new profile with the name above.",1),R("label",YT,[st("Stick dead zone: "+Se(Y(ue).draft.settings.deadZone.toFixed(2))+" ",1),Ft(R("input",{"onUpdate:modelValue":m[8]||(m[8]=h=>Y(ue).draft.settings.deadZone=h),type:"range",min:"0.15",max:"0.9",step:"0.05"},null,512),[[pn,Y(ue).draft.settings.deadZone,void 0,{number:!0}]])]),R("label",KT,[st("Trigger threshold: "+Se(Y(ue).draft.settings.triggerThreshold.toFixed(2))+" ",1),Ft(R("input",{"onUpdate:modelValue":m[9]||(m[9]=h=>Y(ue).draft.settings.triggerThreshold=h),type:"range",min:"0.1",max:"0.95",step:"0.05"},null,512),[[pn,Y(ue).draft.settings.triggerThreshold,void 0,{number:!0}]])]),m[23]||(m[23]=R("p",{class:"note"},"Click a binding, release all controls, then hold modifiers and press the main input last. Release the combination and click Confirm. Gameplay is paused while assigning. Camera/zoom repeat while held; moves and commands fire once per press. Longer combinations override shorter ones.",-1)),s.value.length?(he(),_e("p",jT,"Duplicate combinations: "+Se(s.value.join(", "))+". Clear or change a conflicting binding before saving.",1)):lt("",!0),R("table",JT,[m[18]||(m[18]=R("thead",null,[R("tr",null,[R("th",null,"Action"),R("th",null,"Combination")])],-1)),R("tbody",null,[(he(!0),_e(ft,null,zt(Y(mu),h=>(he(),_e("tr",{key:h.id},[R("td",null,Se(h.label),1),R("td",null,[Y(ue).capture===h.id?(he(),_e(ft,{key:0},[R("span",null,Se(Y(ue).candidate?r(Y(ue).candidate):Y(ue).captureReady?"Press combination…":"Release all controls…"),1),R("button",{disabled:!Y(ue).candidate||!!Y(ue).held.length,onClick:o},"Confirm",8,ZT),R("button",{onClick:m[10]||(m[10]=(...y)=>Y(wi)&&Y(wi)(...y))},"Cancel")],64)):(he(),_e(ft,{key:1},[R("button",{onClick:y=>Y(UT)(h.id)},Se(r(Y(ue).draft.bindings[h.id])),9,QT),Y(ue).draft.bindings[h.id]?(he(),_e("button",{key:0,"aria-label":`Clear ${h.label}`,onClick:y=>Y(ue).draft.bindings[h.id]=null},"Clear",8,eA)):lt("",!0)],64))])]))),128))])]),m[24]||(m[24]=R("h3",null,"Profile JSON",-1)),R("div",{class:"row"},[R("button",{onClick:d},"Export JSON"),R("button",{onClick:f},"Show draft JSON")]),R("label",tA,[m[19]||(m[19]=st("Import JSON file ",-1)),R("input",{type:"file",accept:".json,application/json",onChange:g},null,32)]),R("label",nA,[m[20]||(m[20]=st("Copy / paste profile JSON ",-1)),Ft(R("textarea",{"onUpdate:modelValue":m[11]||(m[11]=h=>t.value=h),rows:"5",spellcheck:"false"},null,512),[[pn,t.value]])]),R("button",{onClick:m[12]||(m[12]=h=>p(t.value))},"Import as draft"),m[25]||(m[25]=R("p",{class:"note"},[st("Imports are validated and do not overwrite a saved profile until you choose Save or Save As. Exported JSON can replace "),R("code",null,"src/gamepad-standard.json"),st(".")],-1)),Y(ue).error?(he(),_e("p",iA,Se(Y(ue).error),1)):lt("",!0),Y(ue).message?(he(),_e("p",sA,Se(Y(ue).message),1)):lt("",!0)]))}},oA=wn(rA,[["__scopeId","data-v-c60b39d0"]]),aA={class:"panel"},lA={class:"field"},cA={key:0,class:"pill"},uA={class:"field"},fA={class:"key-row"},hA=["type"],dA=["disabled"],pA={class:"field"},mA=["value"],gA={class:"row"},vA=["disabled"],_A={key:0,class:"pill"},xA={class:"field"},yA={class:"field"},MA={class:"row"},SA=["disabled"],bA={__name:"SettingsPanel",setup(n){const e=Ye(!1),t=Fn({busy:!1,result:null}),i=Fn({busy:!1,result:null}),s={gemini:t,local:i};Bt(()=>[At.geminiKey,At.geminiModel],()=>t.result=null),Bt(()=>[At.localUrl,At.localModel],()=>i.result=null);async function r(o,a){const l=s[o];l.busy=!0,l.result=null;try{l.result=await a({...At})}finally{l.busy=!1}}return(o,a)=>(he(),_e(ft,null,[R("section",aA,[a[19]||(a[19]=R("h2",null,"Tutor settings",-1)),a[20]||(a[20]=R("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),R("label",lA,[a[10]||(a[10]=st(" Active provider ",-1)),Ft(R("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>Y(At).provider=l)},[...a[9]||(a[9]=[R("option",{value:"builtin"},"Built-in (no AI)",-1),R("option",{value:"gemini"},"Gemini API",-1),R("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[Fa,Y(At).provider]])]),R("fieldset",null,[R("legend",null,[a[11]||(a[11]=st("Gemini ",-1)),Y(At).provider==="gemini"?(he(),_e("span",cA,"active")):lt("",!0)]),R("label",uA,[a[12]||(a[12]=st(" API key ",-1)),R("span",fA,[Ft(R("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>Y(At).geminiKey=l),type:e.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,hA),[[__,Y(At).geminiKey]]),R("button",{type:"button",onClick:a[2]||(a[2]=l=>e.value=!e.value)},Se(e.value?"Hide":"Show"),1),R("button",{type:"button",disabled:!Y(At).geminiKey,onClick:a[3]||(a[3]=l=>Y(At).geminiKey="")},"Clear",8,dA)])]),R("label",pA,[a[13]||(a[13]=st(" Model ",-1)),Ft(R("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>Y(At).geminiModel=l)},[(he(!0),_e(ft,null,zt(Y(lf),l=>(he(),_e("option",{key:l,value:l},Se(l),9,mA))),128))],512),[[Fa,Y(At).geminiModel]])]),R("div",gA,[R("button",{class:"primary",disabled:t.busy,onClick:a[5]||(a[5]=l=>r("gemini",Y(fw)))},Se(t.busy?"Testing…":"Test Gemini"),9,vA)]),Wt(Ld,{state:t},null,8,["state"]),a[14]||(a[14]=R("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),R("fieldset",null,[R("legend",null,[a[15]||(a[15]=st("Local model ",-1)),Y(At).provider==="local"?(he(),_e("span",_A,"active")):lt("",!0)]),R("label",xA,[a[16]||(a[16]=st(" OpenAI-compatible base URL ",-1)),Ft(R("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>Y(At).localUrl=l),placeholder:"http://localhost:1234/v1"},null,512),[[pn,Y(At).localUrl]])]),R("label",yA,[a[17]||(a[17]=st(" Model name ",-1)),Ft(R("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>Y(At).localModel=l),placeholder:"google/gemma-4-e4b"},null,512),[[pn,Y(At).localModel]])]),R("div",MA,[R("button",{class:"primary",disabled:i.busy,onClick:a[8]||(a[8]=l=>r("local",Y(hw)))},Se(i.busy?"Testing…":"Test local model"),9,SA)]),Wt(Ld,{state:i},null,8,["state"]),a[18]||(a[18]=R("p",{class:"note"},[st(" LM Studio: Developer → Server Settings → turn on "),R("b",null,"Enable CORS"),st(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),R("code",null,"OLLAMA_ORIGINS=*"),st(". ")],-1))]),a[21]||(a[21]=R("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]),Wt(oA)],64))}},EA=wn(bA,[["__scopeId","data-v-1ac61131"]]),wA={class:"tutor"},TA={class:"tutor-head"},AA={class:"pill"},CA={key:0,class:"status bad"},RA={class:"ask"},PA=["disabled"],LA=["disabled","title"],DA=["disabled"],IA={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const e=n,t=Ye(""),i=Ye(!1),s=Ye(""),r=Ye(""),o=Ye(!1),a=Nt(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[At.provider]),l=Nt(()=>o.value&&r.value?r.value:Wm(e.context));Bt(()=>[e.context.stageTitle,e.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function c(u){i.value=!0,s.value="";try{const f=await pw({...At},{...e.context,question:u||""});r.value=f.text,o.value=f.ai,t.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(u,f)=>(he(),_e("div",wA,[R("div",TA,[f[5]||(f[5]=R("h3",null,"Tutor",-1)),R("span",AA,Se(a.value),1),R("button",{class:"link",onClick:f[0]||(f[0]=d=>Y(O).mode="settings")},"Settings")]),R("p",{class:Ot(["answer",{ai:o.value}])},Se(l.value),3),s.value?(he(),_e("p",CA,Se(s.value),1)):lt("",!0),R("div",RA,[Ft(R("input",{"onUpdate:modelValue":f[1]||(f[1]=d=>t.value=d),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=Sc(d=>c(t.value),["enter"]))},null,40,PA),[[pn,t.value]]),R("button",{disabled:i.value||Y(At).provider==="builtin",title:Y(At).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=d=>c(t.value))},Se(i.value?"…":"Ask"),9,LA),R("button",{disabled:i.value||Y(At).provider==="builtin",onClick:f[4]||(f[4]=d=>c(""))},"Explain",8,DA)])]))}},UA=wn(IA,[["__scopeId","data-v-d33fa6a4"]]),NA={class:"panel"},FA={class:"row"},OA=["disabled"],BA={key:0,class:"status ok"},kA={key:0,class:"status bad"},zA={key:1,class:"status bad"},HA={class:"note"},VA={class:"player"},GA=["disabled"],WA=["disabled"],$A=["title","disabled"],XA=["disabled"],qA=["disabled"],YA={class:"speed"},KA={class:"drama",title:"While playing, the camera slowly swirls around the cube"},jA={class:"drama-speed",title:"Rotation speed while Extra drama is enabled"},JA={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},ZA={class:"fullscreen-mode"},QA={class:"bar"},eC={key:0,class:"now"},tC={class:"now-stage"},nC={class:"moves"},iC={key:1,class:"status ok"},sC={class:"stages"},rC={class:"stage-title"},oC={class:"goal"},aC={key:0,class:"steps"},lC={class:"step-label"},cC={__name:"SolvePanel",setup(n){const e=Ye(!1),t=Ye(!1);Mo(()=>{function y(_){var P;const x=(P=_.target)==null?void 0:P.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||_.ctrlKey||_.metaKey||_.altKey||O.mode==="solve"&&(_.code==="Space"?(_.preventDefault(),cr()):_.key==="Enter"&&(_.preventDefault(),v()))}window.addEventListener("keydown",y),Ls(()=>window.removeEventListener("keydown",y))}),Bt(t,y=>O.playing=y,{immediate:!0}),Bt(()=>O.drama,y=>localStorage.setItem("rubiks-solver.drama",y?"1":"0")),Bt(()=>O.finale,y=>{localStorage.setItem("rubiks-solver.finale",y?"1":"0"),y||_o()});const i=Nt(()=>O.solution),s=Nt(()=>{var y;return((y=i.value)==null?void 0:y.moves.length)??0}),r=Nt(()=>O.pointer>=s.value),o=Nt(()=>O.busy||O.pointer===0),a=y=>_u(O.n,y),l=Nt(()=>{if(!i.value||r.value)return null;const y=qa()[O.pointer],_=i.value.stages[y.stage],x=_.steps[y.step];return{stageIdx:y.stage,stage:_,step:x,stepIdx:y.step}}),c=Nt(()=>l.value?qa()[O.pointer].index:0),u=Nt(()=>l.value?a(l.value.stage.id).title:""),f=Nt(()=>{var x,P,A;const y=((x=l.value)==null?void 0:x.stage)??i.value.stages[i.value.stages.length-1],_=a(y.id);return{n:O.n,stageTitle:_.title,goal:_.goal,concept:_.concept,stepLabel:((P=l.value)==null?void 0:P.step.label)??"",moves:((A=l.value)==null?void 0:A.step.moves)??[]}});async function d(){e.value=!0,await Su(),e.value=!1}async function p(){for(t.value=!0;t.value&&O.pointer<s.value;)await cr();const y=t.value&&O.pointer>=s.value&&Wa.value;t.value=!1,y&&O.finale&&i1()}async function g(){if(O.quickSolveRequest=!1,t.value)return;e.value=!0;const y=await Su();e.value=!1,y&&p()}Bt(()=>O.quickSolveRequest,y=>y&&g(),{immediate:!0});function v(){t.value?t.value=!1:p()}async function m(){const y=O.speed;for(O.speed=10;O.pointer<s.value;)await cr();O.speed=y}async function h(){t.value=!1;const y=O.speed;for(O.speed=10;O.pointer>0;)await Ta();O.speed=y}return Ls(()=>{t.value=!1,O.playing=!1,_o()}),(y,_)=>(he(),_e("section",NA,[_[16]||(_[16]=R("h2",null,"Solve it step by step",-1)),R("div",FA,[R("button",{class:"primary",disabled:!Y(Ji).ok||e.value||Y(O).editing,onClick:d},Se(e.value?"Solving…":"Find solution"),9,OA),Y(Wa)&&!i.value?(he(),_e("span",BA,"Already solved!")):lt("",!0)]),Y(Ji).ok?lt("",!0):(he(),_e("ul",kA,[(he(!0),_e(ft,null,zt(Y(Ji).errors,x=>(he(),_e("li",{key:x},Se(x),1))),128))])),Y(O).solveError?(he(),_e("p",zA,Se(Y(O).solveError),1)):lt("",!0),i.value?(he(),_e(ft,{key:2},[R("p",HA,Se(i.value.moves.length)+" moves in "+Se(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),R("div",VA,[R("button",{title:"Back to start",disabled:o.value,onClick:h},"⏮",8,GA),R("button",{title:"Previous move",disabled:o.value,onClick:_[0]||(_[0]=(...x)=>Y(Ta)&&Y(Ta)(...x))},"◀",8,WA),R("button",{class:"primary",title:t.value?"Pause":"Play",disabled:r.value&&!t.value,onClick:v},Se(t.value?"⏸":"▶"),9,$A),R("button",{title:"Next move",disabled:r.value||Y(O).busy,onClick:_[1]||(_[1]=(...x)=>Y(cr)&&Y(cr)(...x))},"▶|",8,XA),R("button",{title:"Jump to end",disabled:r.value||Y(O).busy,onClick:m},"⏭",8,qA),R("label",YA,[_[7]||(_[7]=st(" Speed ",-1)),Ft(R("input",{"onUpdate:modelValue":_[2]||(_[2]=x=>Y(O).speed=x),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[pn,Y(O).speed,void 0,{number:!0}]])])]),R("label",KA,[Ft(R("input",{"onUpdate:modelValue":_[3]||(_[3]=x=>Y(O).drama=x),type:"checkbox"},null,512),[[ts,Y(O).drama]]),_[8]||(_[8]=st(" Extra drama ",-1)),_[9]||(_[9]=R("small",null,"– slow, smooth camera rotation during playback",-1))]),R("label",jA,[_[10]||(_[10]=st(" Rotation speed ",-1)),Ft(R("input",{"onUpdate:modelValue":_[4]||(_[4]=x=>Y(O).dramaSpeed=x),type:"range",min:"0.05",max:"1.2",step:"0.01"},null,512),[[pn,Y(O).dramaSpeed,void 0,{number:!0}]])]),R("label",JA,[Ft(R("input",{"onUpdate:modelValue":_[5]||(_[5]=x=>Y(O).finale=x),type:"checkbox"},null,512),[[ts,Y(O).finale]]),_[11]||(_[11]=st(" Extra, extra drama ",-1)),_[12]||(_[12]=R("small",null,"– 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),R("label",ZA,[Ft(R("input",{"onUpdate:modelValue":_[6]||(_[6]=x=>Y(O).fullscreenOnPlay=x),type:"checkbox"},null,512),[[ts,Y(O).fullscreenOnPlay]]),_[13]||(_[13]=st(" Fullscreen mode ",-1)),_[14]||(_[14]=R("small",null,"When enabled, hitting Play makes the cube go fullscreen",-1))]),R("div",QA,[R("div",{style:ci({width:`${Y(O).pointer/Math.max(1,s.value)*100}%`})},null,4)]),l.value?(he(),_e("div",eC,[R("div",tC,[st(Se(u.value)+" ",1),R("small",null,"– "+Se(l.value.step.label),1)]),R("div",nC,[(he(!0),_e(ft,null,zt(l.value.step.moves,(x,P)=>(he(),_e("span",{key:P,class:Ot(["move",{done:c.value>P,active:c.value===P}])},Se(x),3))),128))])])):r.value?(he(),_e("p",iC,"Finished – the cube is solved.")):lt("",!0),Wt(UA,{context:f.value},null,8,["context"]),_[15]||(_[15]=R("h3",null,"All stages",-1)),R("ol",sC,[(he(!0),_e(ft,null,zt(i.value.stages,(x,P)=>(he(),_e("li",{key:x.id,class:Ot({active:l.value&&l.value.stageIdx===P})},[R("div",rC,[st(Se(a(x.id).title)+" ",1),R("small",null,Se(x.moves.length?`${x.moves.length} moves`:"already done"),1)]),R("div",oC,Se(a(x.id).goal),1),x.steps.length?(he(),_e("ul",aC,[(he(!0),_e(ft,null,zt(x.steps,(A,L)=>(he(),_e("li",{key:L},[R("span",lC,Se(A.label),1),R("code",null,Se(A.moves.join(" ")),1)]))),128))])):lt("",!0)],2))),128))])],64)):lt("",!0)]))}},uC=wn(cC,[["__scopeId","data-v-dc314576"]]),fC={class:"app"},hC=["onClick"],dC=["disabled"],pC={class:"stage"},mC={class:"overlay"},gC={key:0,class:"badge"},vC={key:1,class:"badge ok"},_C={key:2,class:"brush-chip",title:"Last assigned colour"},xC={key:0,class:"status ok small"},yC={key:1,class:"status bad small"},MC={class:"mobile-controls",role:"toolbar","aria-label":"Cube touch controls"},SC=["disabled"],bC=["disabled"],EC=["disabled"],wC=["aria-pressed"],TC=["aria-pressed"],AC={class:"mobile-hint","aria-live":"polite"},CC={key:0,class:"status bad",role:"alert"},RC={key:0,class:"note"},PC={key:1,class:"status bad",role:"alert"},LC={key:2,class:"note",role:"status"},DC=300,IC=340,UC=14,NC={__name:"App",setup(n){const e=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"},{id:"about",label:"About"}],t=Ye(null),i=Ye(null),s=Ye(Math.max(300,Math.min(window.innerHeight*.62,640))),r=Ye(!1),o=Ye(!1),a=Ye(!1),l=Ye(!1),c=Ye("rotate"),u=Ye(!1),f=Ye(""),d=Nt(()=>u.value||O.busy||O.playing||O.solving||O.exploding||O.quickSolveRequest),p=Nt(()=>O.mode==="setup"&&O.showAllColorsOnHover);function g(V){c.value=V,O.editing=!1}async function v(V){if(!d.value){u.value=!0,f.value="",O.editing=!1;try{await(V==="reset"?$a():Xa())}catch($){f.value=`Could not ${V}: ${$.message}`}finally{u.value=!1}}}function m(){f.value="",L(!1)}function h(V,$){if(O.editing){if($===void 0)return Mu(V);O.brush=$,Mu(V,$)}}const y=Ye(null),_=Ye(0),x=Ye(!1);function P(V){const $=y.value,B=$.querySelector(".stage"),oe=V.clientX,X=B.getBoundingClientRect().width,be=getComputedStyle($),j=$.clientWidth-parseFloat(be.paddingLeft)-parseFloat(be.paddingRight)-UC-IC;x.value=!0;function F(Ce){_.value=Math.round(Math.max(DC,Math.min(j,X+Ce.clientX-oe)))}function K(){x.value=!1,window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",K)}window.addEventListener("pointermove",F),window.addEventListener("pointerup",K)}const A=Nt(()=>Ji.value.ok&&!O.playing&&!O.busy&&!O.solving&&!O.exploding&&!O.countdown);function L(V=!0){var $,B;A.value&&(O.editing=!1,O.drama=!0,O.finale=!0,O.speed=.5,O.dramaSpeed=1.2,O.fullscreenOnPlay=V,V&&((B=($=i.value)==null?void 0:$.requestFullscreen)==null||B.call($).catch(()=>{})),O.mode="solve",O.quickSolveRequest=!0)}let N,w=!1;async function M(V,$){var B;if(Im.has(V)){O.exploding||(B=t.value)==null||B.gamepadView(V,$);return}if(!(w||O.busy||O.playing||O.solving||O.exploding||O.editing||O.quickSolveRequest)){w=!0;try{if(V==="quick-solve")A.value?(L(!1),ue.message="Quick Solve started. For fullscreen, use the mouse Quick Solve button."):ue.error="Quick Solve requires a valid cube position.";else if(V==="next-step"){if(!Ji.value.ok){ue.error="Cannot solve this cube: check the position in Set up.";return}if(!O.solution&&!await Su()){ue.error=O.solveError||"Could not compute a solution.";return}O.mode="solve",await cr()}else if(V==="undo")await s1();else if(V==="scramble")await Xa();else if(V==="reset")await $a();else{const[oe,X]=V.split("-"),be=X==="ccw"?"'":X==="double"?"2":"";await fi(t.value.viewRelativeMove(oe,be))}}catch(oe){ue.error=`Gamepad action failed: ${oe.message}`}finally{w=!1}}}function D(V){r.value=!0;const $=V.clientY,B=s.value;function oe(be){const j=be.clientY-$,F=Math.max(300,B+j);s.value=F}function X(){r.value=!1,window.removeEventListener("pointermove",oe),window.removeEventListener("pointerup",X)}window.addEventListener("pointermove",oe),window.addEventListener("pointerup",X)}function Q(V){var oe;const $=(oe=V.target)==null?void 0:oe.tagName;if($==="INPUT"||$==="TEXTAREA"||$==="SELECT"||V.ctrlKey||V.metaKey||V.altKey)return;const B=V.key.toUpperCase();!"UDLRFB".includes(B)||B.length!==1||O.editing||(V.preventDefault(),fi(V.shiftKey?`${B}'`:B))}Mo(()=>{ZE((V,$,B)=>t.value.animate(V,$,B)),QE(()=>t.value.explode()),window.addEventListener("keydown",Q),N=NT(M),document.addEventListener("fullscreenchange",()=>{o.value=!!document.fullscreenElement,o.value||(a.value=!1)})}),Ls(()=>{window.removeEventListener("keydown",Q),N==null||N()}),Bt(()=>({playing:O.playing,mode:O.mode}),V=>{var $;V.mode==="solve"&&V.playing&&O.fullscreenOnPlay&&(($=i.value)!=null&&$.requestFullscreen)&&i.value.requestFullscreen().catch(()=>{})},{immediate:!1}),Bt(()=>({ptr:O.pointer,sol:O.solution,exploding:O.exploding,countdown:O.countdown}),V=>{var B;V.sol&&V.ptr>=(((B=V.sol.moves)==null?void 0:B.length)??0)&&!V.exploding&&V.countdown===0&&document.fullscreenElement===i.value&&setTimeout(()=>a.value=!0,2e3)});function J(){document.fullscreenElement&&document.exitFullscreen()}return(V,$)=>(he(),_e("div",fC,[R("header",null,[$[10]||($[10]=R("h1",null,[R("a",{class:"logo",href:"https://github.com/sterudo/RubriksSolver",target:"_blank",rel:"noopener",title:"Open the repository on GitHub"},"🧊 Rubik's Solver")],-1)),R("nav",null,[(he(),_e(ft,null,zt(e,B=>R("button",{key:B.id,class:Ot({on:Y(O).mode===B.id}),onClick:oe=>Y(O).mode=B.id},Se(B.label),11,hC)),64))]),R("button",{class:"quick-solve",disabled:!A.value,title:"Fullscreen, full drama, solve and play",onClick:$[0]||($[0]=B=>L())}," ⚡ Quick Solve ",8,dC)]),R("main",{ref_key:"mainEl",ref:y,style:ci(_.value?{"--left-w":_.value+"px"}:null)},[R("div",pC,[R("div",{class:"viewport",ref_key:"viewport",ref:i,style:ci({height:s.value+"px"})},[Wt(UE,{ref_key:"cube",ref:t,n:Y(O).n,state:Y(an),paintable:Y(O).editing,locked:Y(O).busy||Y(O).exploding,drama:Y(O).drama&&Y(O).playing,dramaSpeed:Y(O).dramaSpeed,rumble:Y(O).countdown?(4-Y(O).countdown)/3:0,hoverColors:p.value,touchMode:c.value,touchLocked:Y(O).playing||Y(O).solving||Y(O).quickSolveRequest||u.value,onPaint:h,onLayerturn:$[1]||($[1]=B=>Y(fi)(B)),onHovering:$[2]||($[2]=B=>l.value=B)},null,8,["n","state","paintable","locked","drama","dramaSpeed","rumble","hoverColors","touchMode","touchLocked"]),R("div",mC,[R("button",{title:"Reset camera",onClick:$[3]||($[3]=B=>{var oe;return(oe=t.value)==null?void 0:oe.resetView()})},"⟲ View"),Y(O).editing?(he(),_e("span",gC,"Painting: click stickers")):Y(Wa)?(he(),_e("span",vC,"Solved ✓")):lt("",!0),p.value&&!l.value?(he(),_e("span",_C,[R("i",{style:ci({background:Y(go)[Y(O).brush]})},null,4)])):lt("",!0),Y(O).mode==="setup"?(he(),_e("div",{key:3,class:Ot(["validity",{ok:Y(Ji).ok}])},[Y(Ji).ok?(he(),_e("p",xC,"This position is valid and solvable.")):(he(),_e("ul",yC,[(he(!0),_e(ft,null,zt(Y(Ji).errors,B=>(he(),_e("li",{key:B},Se(B),1))),128))]))],2)):lt("",!0),o.value&&a.value?(he(),_e("button",{key:4,class:"exit-fullscreen",onClick:$[4]||($[4]=B=>J())}," Exit Fullscreen mode ")):lt("",!0)]),Y(O).countdown?(he(),_e("div",{key:Y(O).countdown,class:"countdown","aria-live":"assertive"},[R("span",null,Se(Y(O).countdown),1)])):lt("",!0),R("div",{class:"resize-handle",onPointerdown:jf(D,["prevent"])},null,32),R("div",MC,[R("button",{disabled:d.value,onClick:$[5]||($[5]=B=>v("reset"))},"Reset",8,SC),R("button",{disabled:d.value,onClick:$[6]||($[6]=B=>v("scramble"))},"Scramble",8,bC),R("button",{disabled:!A.value||u.value,onClick:m},"Solve",8,EC),R("button",{"aria-pressed":c.value==="rotate",class:Ot({on:c.value==="rotate"}),onClick:$[7]||($[7]=B=>g("rotate"))},"Rotate",10,wC),R("button",{"aria-pressed":c.value==="move",class:Ot({on:c.value==="move"}),onClick:$[8]||($[8]=B=>g("move"))},"Move",10,TC),R("span",AC,Se(c.value==="rotate"?"Swipe to rotate the view; pinch to zoom.":"Swipe a sticker row or column to turn it."),1),f.value?(he(),_e("span",CC,Se(f.value),1)):lt("",!0)])],4),$[11]||($[11]=R("p",{class:"keys"}," Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise). ",-1)),Wt(M1),Wt(sw),Y(ue).connected?(he(),_e("p",RC,[st(" Gamepad: "+Se(Y(ue).enabled?Y(ue).draft.name:"disabled")+" ",1),R("button",{onClick:$[9]||($[9]=B=>Y(O).mode="settings")},"Configure")])):lt("",!0),Y(ue).error?(he(),_e("p",PC,Se(Y(ue).error),1)):lt("",!0),Y(ue).message&&Y(ue).connected?(he(),_e("p",LC,Se(Y(ue).message),1)):lt("",!0)]),R("div",{class:Ot(["col-divider",{dragging:x.value}]),role:"separator","aria-orientation":"vertical",title:"Drag to resize",onPointerdown:jf(P,["prevent"])},null,34),R("aside",null,[Y(O).mode==="setup"?(he(),ys(ST,{key:0})):Y(O).mode==="solve"?(he(),ys(uC,{key:1})):Y(O).mode==="learn"?(he(),ys(g1,{key:2})):Y(O).mode==="settings"?(he(),ys(EA,{key:3})):Y(O).mode==="about"?(he(),ys(BE,{key:4})):(he(),ys(H1,{key:5}))])],4)]))}};w_(NC).mount("#app");
