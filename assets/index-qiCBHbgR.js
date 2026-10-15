(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ct={},Ts=[],fi=()=>{},Gh=()=>!1,nl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),il=n=>n.startsWith("onUpdate:"),an=Object.assign,Fu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},cg=Object.prototype.hasOwnProperty,St=(n,e)=>cg.call(n,e),Qe=Array.isArray,ns=n=>Mo(n)==="[object Map]",Bi=n=>Mo(n)==="[object Set]",Tf=n=>Mo(n)==="[object Date]",ct=n=>typeof n=="function",Vt=n=>typeof n=="string",mi=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",Wh=n=>(Tt(n)||ct(n))&&ct(n.then)&&ct(n.catch),$h=Object.prototype.toString,Mo=n=>$h.call(n),ug=n=>Mo(n).slice(8,-1),Xh=n=>Mo(n)==="[object Object]",Ou=n=>Vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zr=Nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},fg=/-\w/g,Yn=sl(n=>n.replace(fg,e=>e.slice(1).toUpperCase())),dg=/\B([A-Z])/g,us=sl(n=>n.replace(dg,"-$1").toLowerCase()),qh=sl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sl=sl(n=>n?`on${qh(n)}`:""),li=(n,e)=>!Object.is(n,e),ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Af;const ol=()=>Af||(Af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Vt(i)?gg(i):di(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Vt(n)||Tt(n))return n}const hg=/;(?![^(]*\))/g,pg=/:([^]+)/,mg=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function gg(n){const e={};return n.replace(mg,t=>t.startsWith("/*")?"":t).split(hg).forEach(t=>{if(t){const i=t.split(pg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pt(n){let e="";if(Vt(n))e=n;else if(Qe(n))for(let t=0;t<n.length;t++){const i=Pt(n[t]);i&&(e+=i+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_g=Nu(vg);function Kh(n){return!!n||n===""}function xg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Jn(n[s],e[s],t);return i}function Cf(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Jn(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function yg(n,e,t){let i=ns(n),s=ns(e);if(i||s||(i=Bi(n),s=Bi(e),i||s))return i&&s?Cf(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(l&&!u||!l&&u||!Jn(n[a],e[a],t))return!1}return String(n)===String(e)}function Rf(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Jn(n,e,t){if(n===e)return!0;let i=Tf(n),s=Tf(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=mi(n),s=mi(e),i||s?n===e:(i=Qe(n),s=Qe(e),i||s?i&&s?Rf(n,e,t,xg):!1:(i=Tt(n),s=Tt(e),i||s?!i||!s?!1:Rf(n,e,t,yg):String(n)===String(e))))}function ku(n,e){return n.findIndex(t=>Jn(t,e))}const jh=n=>!!(n&&n.__v_isRef===!0),Se=n=>Vt(n)?n:n==null?"":Qe(n)||Tt(n)&&(n.toString===$h||!ct(n.toString))?jh(n)?Se(n.value):JSON.stringify(n,Jh,2):String(n),Jh=(n,e)=>jh(e)?Jh(n,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[bl(i,r)+" =>"]=s,t),{})}:Bi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>bl(t))}:mi(e)?bl(e):Tt(e)&&!Qe(e)&&!Xh(e)?String(e):e,bl=(n,e="")=>{var t;return mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Qt&&(Qt.active?(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){if(this._on>0&&--this._on===0){if(Qt===this)Qt=this.prevScope;else{let e=Qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sg(){return Qt}let Rt;const El=new WeakSet;class Zh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&(Qt.active?Qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,El.has(this)&&(El.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pf(this),tp(this);const e=Rt,t=Kn;Rt=this,Kn=!0;try{return this.fn()}finally{np(this),Rt=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,Pf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?El.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mc(this)&&this.run()}get dirty(){return Mc(this)}}let Qh=0,Qr,eo;function ep(n,e=!1){if(n.flags|=8,e){n.next=eo,eo=n;return}n.next=Qr,Qr=n}function Bu(){Qh++}function zu(){if(--Qh>0)return;if(eo){let e=eo;for(eo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qr;){let e=Qr;for(Qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function tp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Hu(i),bg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Mc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ip(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ao)||(n.globalVersion=ao,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Mc(n))))return;n.flags|=2;const e=n.dep,t=Rt,i=Kn;Rt=n,Kn=!0;try{tp(n);const s=n.fn(n._value);(e.version===0||li(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Rt=t,Kn=i,np(n),n.flags&=-3}}function Hu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Hu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const sp=[];function zi(){sp.push(Kn),Kn=!1}function Hi(){const n=sp.pop();Kn=n===void 0?!0:n}function Pf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Rt;Rt=void 0;try{e()}finally{Rt=t}}}let ao=0;class Eg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Kn||Rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Rt)t=this.activeLink=new Eg(Rt,this),Rt.deps?(t.prevDep=Rt.depsTail,Rt.depsTail.nextDep=t,Rt.depsTail=t):Rt.deps=Rt.depsTail=t,rp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Rt.depsTail,t.nextDep=void 0,Rt.depsTail.nextDep=t,Rt.depsTail=t,Rt.deps===t&&(Rt.deps=i)}return t}trigger(e){this.version++,ao++,this.notify(e)}notify(e){Bu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zu()}}}function rp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Sc=new WeakMap,Ps=Symbol(""),bc=Symbol(""),lo=Symbol("");function nn(n,e,t){if(Kn&&Rt){let i=Sc.get(n);i||Sc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Vu),s.map=i,s.key=t),s.track()}}function Ci(n,e,t,i,s,r){const o=Sc.get(n);if(!o){ao++;return}const a=l=>{l&&l.trigger()};if(Bu(),e==="clear")o.forEach(a);else{const l=Qe(n),u=l&&Ou(t);if(l&&t==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===lo||!mi(h)&&h>=c)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(lo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ps)),ns(n)&&a(o.get(bc)));break;case"delete":l||(a(o.get(Ps)),ns(n)&&a(o.get(bc)));break;case"set":ns(n)&&a(o.get(Ps));break}}zu()}function Hs(n){const e=Mt(n);return e===n||(nn(e,"iterate",lo),Bn(n))?e:gi(n)?is(n)?e.map(t=>os(zn(t))):e.map(os):e.map(zn)}function al(n){return nn(n=Mt(n),"iterate",lo),n}function si(n,e){return gi(n)?os(is(n)?zn(e):e):zn(e)}const wg={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,n=>si(this,n))},concat(...n){return Hs(this).concat(...n.map(e=>Qe(e)?Hs(e):e))},entries(){return wl(this,"entries",n=>(n[1]=si(this,n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(i=>si(this,i)),arguments)},find(n,e){return _i(this,"find",n,e,t=>si(this,t),arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,t=>si(this,t),arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return Tl(this,"includes",n)},indexOf(...n){return Tl(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return Tl(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Nr(this,"pop")},push(...n){return Nr(this,"push",n)},reduce(n,...e){return Lf(this,"reduce",n,e)},reduceRight(n,...e){return Lf(this,"reduceRight",n,e)},shift(){return Nr(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Nr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Nr(this,"unshift",n)},values(){return wl(this,"values",n=>si(this,n))}};function wl(n,e,t){const i=al(n),s=i[e]();return i!==n&&!Bn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Tg=Array.prototype;function _i(n,e,t,i,s,r){const o=al(n),a=o!==n&&!Bn(n),l=o[e];if(l!==Tg[e]){const f=l.apply(n,r);return a?zn(f):f}let u=t;o!==n&&(a?u=function(f,h){return t.call(this,si(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Lf(n,e,t,i){const s=al(n),r=s!==n&&!Bn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(u,c,f){return a&&(a=!1,u=si(n,u)),t.call(this,u,si(n,c),f,n)}):t.length>3&&(o=function(u,c,f){return t.call(this,u,c,f,n)}));const l=s[e](o,...i);return a?si(n,l):l}function Tl(n,e,t){const i=Mt(n);nn(i,"iterate",lo);const s=i[e](...t);return(s===-1||s===!1)&&$u(t[0])?(t[0]=Mt(t[0]),i[e](...t)):s}function Nr(n,e,t=[]){zi(),Bu();const i=Mt(n)[e].apply(n,t);return zu(),Hi(),i}const Ag=Nu("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi));function Cg(n){mi(n)||(n=String(n));const e=Mt(this);return nn(e,"has",n),e.hasOwnProperty(n)}class ap{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?kg:fp:r?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Qe(e);if(!s){let l;if(o&&(l=wg[t]))return l;if(t==="hasOwnProperty")return Cg}const a=Reflect.get(e,t,on(e)?e:i);if((mi(t)?op.has(t):Ag(t))||(s||nn(e,"get",t),r))return a;if(on(a)){const l=o&&Ou(t)?a:a.value;return s&&Tt(l)?wc(l):l}return Tt(a)?s?wc(a):vn(a):a}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Qe(e)&&Ou(t);if(!this._isShallow){const u=gi(r);if(!Bn(i)&&!gi(i)&&(r=Mt(r),i=Mt(i)),!o&&on(r)&&!on(i))return u||(r.value=i),!0}const a=o?Number(t)<e.length:St(e,t),l=Reflect.set(e,t,i,on(e)?e:s);return e===Mt(s)&&l&&(a?li(i,r)&&Ci(e,"set",t,i):Ci(e,"add",t,i)),l}deleteProperty(e,t){const i=St(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!mi(t)||!op.has(t))&&nn(e,"has",t),i}ownKeys(e){return nn(e,"iterate",Qe(e)?"length":Ps),Reflect.ownKeys(e)}}class Rg extends ap{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Pg=new lp,Lg=new Rg,Ig=new lp(!0);const Ec=n=>n,Io=n=>Reflect.getPrototypeOf(n);function Dg(n,e,t){return function(...i){const s=this.__v_raw,r=Mt(s),o=ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=t?Ec:e?os:zn;return!e&&nn(r,"iterate",l?bc:Ps),an(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Do(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ug(n,e){const t={get(s){const r=this.__v_raw,o=Mt(r),a=Mt(s);n||(li(s,a)&&nn(o,"get",s),nn(o,"get",a));const{has:l}=Io(o),u=e?Ec:n?os:zn;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&nn(Mt(s),"iterate",Ps),s.size},has(s){const r=this.__v_raw,o=Mt(r),a=Mt(s);return n||(li(s,a)&&nn(o,"has",s),nn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Mt(a),u=e?Ec:n?os:zn;return!n&&nn(l,"iterate",Ps),a.forEach((c,f)=>s.call(r,u(c),u(f),o))}};return an(t,n?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){const r=Mt(this),o=Io(r),a=Mt(s),l=!e&&!Bn(s)&&!gi(s)?a:s;return o.has.call(r,l)||li(s,l)&&o.has.call(r,s)||li(a,l)&&o.has.call(r,a)||(r.add(l),Ci(r,"add",l,l)),this},set(s,r){!e&&!Bn(r)&&!gi(r)&&(r=Mt(r));const o=Mt(this),{has:a,get:l}=Io(o);let u=a.call(o,s);u||(s=Mt(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?li(r,c)&&Ci(o,"set",s,r):Ci(o,"add",s,r),this},delete(s){const r=Mt(this),{has:o,get:a}=Io(r);let l=o.call(r,s);l||(s=Mt(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&Ci(r,"delete",s,void 0),u},clear(){const s=Mt(this),r=s.size!==0,o=s.clear();return r&&Ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Dg(s,n,e)}),t}function Gu(n,e){const t=Ug(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(St(t,s)&&s in i?t:i,s,r)}const Ng={get:Gu(!1,!1)},Fg={get:Gu(!1,!0)},Og={get:Gu(!0,!1)};const cp=new WeakMap,up=new WeakMap,fp=new WeakMap,kg=new WeakMap;function Bg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vn(n){return gi(n)?n:Wu(n,!1,Pg,Ng,cp)}function zg(n){return Wu(n,!1,Ig,Fg,up)}function wc(n){return Wu(n,!0,Lg,Og,fp)}function Wu(n,e,t,i,s){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Bg(ug(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function is(n){return gi(n)?is(n.__v_raw):!!(n&&n.__v_isReactive)}function gi(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function $u(n){return n?!!n.__v_raw:!1}function Mt(n){const e=n&&n.__v_raw;return e?Mt(e):n}function Hg(n){return!St(n,"__v_skip")&&Object.isExtensible(n)&&Yh(n,"__v_skip",!0),n}const zn=n=>Tt(n)?vn(n):n,os=n=>Tt(n)?wc(n):n;function on(n){return n?n.__v_isRef===!0:!1}function He(n){return dp(n,!1)}function Vg(n){return dp(n,!0)}function dp(n,e){return on(n)?n:new Gg(n,e)}class Gg{constructor(e,t){this.dep=new Vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Mt(e),this._value=t?e:zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Bn(e)||gi(e);e=i?e:Mt(e),li(e,t)&&(this._rawValue=e,this._value=i?e:zn(e),this.dep.trigger())}}function H(n){return on(n)?n.value:n}const Wg={get:(n,e,t)=>e==="__v_raw"?n:H(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return on(s)&&!on(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hp(n){return is(n)?n:new Proxy(n,Wg)}class $g{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xg(n,e,t=!1){let i,s;return ct(n)?i=n:(i=n.get,s=n.set),new $g(i,s,t)}const Uo={},Da=new WeakMap;let ys;function qg(n,e=!1,t=ys){if(t){let i=Da.get(t);i||Da.set(t,i=[]),i.push(n)}}function Yg(n,e,t=Ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,u=x=>s?x:Bn(x)||s===!1||s===0?Ri(x,1):Ri(x);let c,f,h,m,g=!1,v=!1;if(on(n)?(f=()=>n.value,g=Bn(n)):is(n)?(f=()=>u(n),g=!0):Qe(n)?(v=!0,g=n.some(x=>is(x)||Bn(x)),f=()=>n.map(x=>{if(on(x))return x.value;if(is(x))return u(x);if(ct(x))return l?l(x,2):x()})):ct(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){zi();try{h()}finally{Hi()}}const x=ys;ys=c;try{return l?l(n,3,[m]):n(m)}finally{ys=x}}:f=fi,e&&s){const x=f,L=s===!0?1/0:s;f=()=>Ri(x(),L)}const p=Sg(),d=()=>{c.stop(),p&&p.active&&Fu(p.effects,c)};if(r&&e){const x=e;e=(...L)=>{const C=x(...L);return d(),C}}let y=v?new Array(n.length).fill(Uo):Uo;const _=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(e){const L=c.run();if(x||s||g||(v?L.some((C,I)=>li(C,y[I])):li(L,y))){h&&h();const C=ys;ys=c;try{const I=[L,y===Uo?void 0:v&&y[0]===Uo?[]:y,m];y=L,l?l(e,3,I):e(...I)}finally{ys=C}}}else c.run()};return a&&a(_),c=new Zh(f),c.scheduler=o?()=>o(_,!1):_,m=x=>qg(x,!1,c),h=c.onStop=()=>{const x=Da.get(c);if(x){if(l)l(x,4);else for(const L of x)L();Da.delete(c)}},e?i?_(!0):y=c.run():o?o(_.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Ri(n,e=1/0,t){if(e<=0||!Tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,on(n))Ri(n.value,e,t);else if(Qe(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(Bi(n)||ns(n))n.forEach(i=>{Ri(i,e,t)});else if(Xh(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(n,e,t,i){try{return i?n(...i):n()}catch(s){ll(s,e,t)}}function Zn(n,e,t,i){if(ct(n)){const s=So(n,e,t,i);return s&&Wh(s)&&s.catch(r=>{ll(r,e,t)}),s}if(Qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Zn(n[r],e,t,i));return s}}function ll(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ct;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(r){zi(),So(r,null,10,[n,l,u]),Hi();return}}Kg(n,t,s,i,o)}function Kg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const fn=[];let ii=-1;const mr=[];let Qi=null,cr=0;const pp=Promise.resolve();let Ua=null;function Xu(n){const e=Ua||pp;return n?e.then(this?n.bind(this):n):e}function jg(n){let e=ii+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=co(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function qu(n){if(!(n.flags&1)){const e=co(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=co(t)?fn.push(n):fn.splice(jg(e),0,n),n.flags|=1,mp()}}function mp(){Ua||(Ua=pp.then(vp))}function Jg(n){if(!Qe(n))Qi&&n.id===-1?Qi.splice(cr+1,0,n):n.flags&1||(mr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)mr.push(n[e]);mp()}function If(n,e,t=ii+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gp(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>co(t)-co(i));if(mr.length=0,Qi){for(let t=0;t<e.length;t++)Qi.push(e[t]);return}for(Qi=e,cr=0;cr<Qi.length;cr++){const t=Qi[cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qi=null,cr=0}}const co=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vp(n){try{for(ii=0;ii<fn.length;ii++){const e=fn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<fn.length;ii++){const e=fn[ii];e&&(e.flags&=-2)}ii=-1,fn.length=0,gp(),Ua=null,(fn.length||mr.length)&&vp()}}let Nn=null,_p=null;function Na(n){const e=Nn;return Nn=n,_p=n&&n.type.__scopeId||null,e}function Zg(n,e=Nn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Gf(-1);const r=Na(e),o=Ls.length;let a;try{a=n(...s)}finally{for(let l=Ls.length;l>o;l--)Vp();Na(r),i._d&&Gf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Nt(n,e){if(Nn===null)return n;const t=hl(Nn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ct]=e[s];r&&(ct(r)&&(r={mounted:r,updated:r}),r.deep&&Ri(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(zi(),Zn(l,t,8,[n.el,a,n,e]),Hi())}}function Qg(n,e){if(dn){let t=dn.provides;const i=dn.parent&&dn.parent.provides;i===t&&(t=dn.provides=Object.create(i)),t[n]=e}}function ga(n,e,t=!1){const i=Kv();if(i||gr){let s=gr?gr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const ev=Symbol.for("v-scx"),tv=()=>ga(ev);function Lt(n,e,t){return xp(n,e,t)}function xp(n,e,t=Ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=an({},t),l=e&&i||!e&&r!=="post";let u;if(ho){if(r==="sync"){const m=tv();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=fi,m.resume=fi,m.pause=fi,m}}const c=dn;a.call=(m,g,v)=>Zn(m,c,g,v);let f=!1;r==="post"?a.scheduler=m=>{gn(m,c&&c.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():qu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=Yg(n,e,a);return ho&&(u?u.push(h):l&&h()),h}function nv(n,e,t){const i=this.proxy,s=Vt(n)?n.includes(".")?yp(i,n):()=>i[n]:n.bind(i,i);let r;ct(e)?r=e:(r=e.handler,t=e);const o=Eo(this),a=xp(s,r.bind(i),t);return o(),a}function yp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const iv=Symbol("_vte"),cl=n=>n.__isTeleport,Al=Symbol("_leaveCb");function sv(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Vi){e=t;break}}return e}function Mp(n){if(!Ku(n))return cl(n.type)&&n.children?sv(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ct(t.default))return t.default()}}function Yu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Yu(cl(t.type)&&Mp(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Df(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Fa=new WeakMap;function to(n,e,t,i,s=!1){if(Qe(n)){n.forEach((v,p)=>to(v,e&&(Qe(e)?e[p]:e),t,i,s));return}if(no(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&to(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?hl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=e&&e.r,c=a.refs===Ct?a.refs={}:a.refs,f=a.setupState,h=Mt(f),m=f===Ct?Gh:v=>Df(c,v)?!1:St(h,v),g=(v,p)=>!(p&&Df(c,p));if(u!=null&&u!==l){if(Uf(e),Vt(u))c[u]=null,m(u)&&(f[u]=null);else if(on(u)){const v=e;g(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(ct(l))So(l,a,12,[o,c]);else{const v=Vt(l),p=on(l);if(v||p){const d=()=>{if(n.f){const y=v?m(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(s)Qe(y)&&Fu(y,r);else if(Qe(y))y.includes(r)||y.push(r);else if(v)c[l]=[r],m(l)&&(f[l]=c[l]);else{const _=[r];g(l,n.k)&&(l.value=_),n.k&&(c[n.k]=_)}}else v?(c[l]=o,m(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{d(),Fa.delete(n)};y.id=-1,Fa.set(n,y),gn(y,t)}else Uf(n),d()}}}function Uf(n){const e=Fa.get(n);e&&(e.flags|=8,Fa.delete(n))}ol().requestIdleCallback;ol().cancelIdleCallback;const no=n=>!!n.type.__asyncLoader,Ku=n=>n.type.__isKeepAlive;function rv(n,e){bp(n,"a",e)}function ov(n,e){bp(n,"da",e)}function bp(n,e,t=dn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ul(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ku(s.parent.vnode)&&av(i,e,t,s),s=s.parent}}function av(n,e,t,i){const s=ul(e,n,i,!0);Ep(()=>{Fu(i[e],s)},t)}function ul(n,e,t=dn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{zi();const a=Eo(t),l=Zn(e,t,n,o);return a(),Hi(),l});return i?s.unshift(r):s.push(r),r}}const Wi=n=>(e,t=dn)=>{(!ho||n==="sp")&&ul(n,(...i)=>e(...i),t)},lv=Wi("bm"),bo=Wi("m"),cv=Wi("bu"),uv=Wi("u"),Is=Wi("bum"),Ep=Wi("um"),fv=Wi("sp"),dv=Wi("rtg"),hv=Wi("rtc");function pv(n,e=dn){ul("ec",n,e)}const mv=Symbol.for("v-ndc");function Ot(n,e,t,i){let s;const r=t,o=Qe(n);if(o||Vt(n)){const a=o&&is(n);let l=!1,u=!1;a&&(l=!Bn(n),u=gi(n),n=al(n)),s=new Array(n.length);for(let c=0,f=n.length;c<f;c++)s[c]=e(l?u?os(zn(n[c])):zn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Tt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=e(n[c],c,l,r)}}else s=[];return s}const Tc=n=>n?Xp(n)?hl(n):Tc(n.parent):null,io=an(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Tc(n.parent),$root:n=>Tc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Tp(n),$forceUpdate:n=>n.f||(n.f=()=>{qu(n.update)}),$nextTick:n=>n.n||(n.n=Xu.bind(n.proxy)),$watch:n=>nv.bind(n)}),Cl=(n,e)=>n!==Ct&&!n.__isScriptSetup&&St(n,e),gv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Cl(i,e))return o[e]=1,i[e];if(s!==Ct&&St(s,e))return o[e]=2,s[e];if(St(r,e))return o[e]=3,r[e];if(t!==Ct&&St(t,e))return o[e]=4,t[e];Ac&&(o[e]=0)}}const u=io[e];let c,f;if(u)return e==="$attrs"&&nn(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[e]))return c;if(t!==Ct&&St(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,St(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Cl(s,e)?(s[e]=t,!0):i!==Ct&&St(i,e)?(i[e]=t,!0):St(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ct&&a[0]!=="$"&&St(n,a)||Cl(e,a)||St(r,a)||St(i,a)||St(io,a)||St(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:St(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Nf(n){return Qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ac=!0;function vv(n){const e=Tp(n),t=n.proxy,i=n.ctx;Ac=!1,e.beforeCreate&&Ff(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:y,destroyed:_,unmounted:x,render:L,renderTracked:C,renderTriggered:I,errorCaptured:F,serverPrefetch:w,expose:M,inheritAttrs:D,components:Z,directives:Q,filters:oe}=e;if(u&&_v(u,i,null),o)for(const fe in o){const W=o[fe];ct(W)&&(i[fe]=W.bind(t))}if(s){const fe=s.call(t,t);Tt(fe)&&(n.data=vn(fe))}if(Ac=!0,r)for(const fe in r){const W=r[fe],we=ct(W)?W.bind(t,t):ct(W.get)?W.get.bind(t,t):fi,Y=!ct(W)&&ct(W.set)?W.set.bind(t):fi,O=wt({get:we,set:Y});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>O.value,set:$=>O.value=$})}if(a)for(const fe in a)wp(a[fe],i,t,fe);if(l){const fe=ct(l)?l.call(t):l;Reflect.ownKeys(fe).forEach(W=>{Qg(W,fe[W])})}c&&Ff(c,n,"c");function J(fe,W){Qe(W)?W.forEach(we=>fe(we.bind(t))):W&&fe(W.bind(t))}if(J(lv,f),J(bo,h),J(cv,m),J(uv,g),J(rv,v),J(ov,p),J(pv,F),J(hv,C),J(dv,I),J(Is,y),J(Ep,x),J(fv,w),Qe(M))if(M.length){const fe=n.exposed||(n.exposed={});M.forEach(W=>{Object.defineProperty(fe,W,{get:()=>t[W],set:we=>t[W]=we,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===fi&&(n.render=L),D!=null&&(n.inheritAttrs=D),Z&&(n.components=Z),Q&&(n.directives=Q),w&&Sp(n)}function _v(n,e,t=fi){Qe(n)&&(n=Cc(n));for(const i in n){const s=n[i];let r;Tt(s)?"default"in s?r=ga(s.from||i,s.default,!0):r=ga(s.from||i):r=ga(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ff(n,e,t){Zn(Qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function wp(n,e,t,i){let s=i.includes(".")?yp(t,i):()=>t[i];if(Vt(n)){const r=e[n];ct(r)&&Lt(s,r)}else if(ct(n))Lt(s,n.bind(t));else if(Tt(n))if(Qe(n))n.forEach(r=>wp(r,e,t,i));else{const r=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(r)&&Lt(s,r,n)}}function Tp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>Oa(l,u,o,!0)),Oa(l,e,o)),Tt(e)&&r.set(e,l),l}function Oa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Oa(n,r,t,!0),s&&s.forEach(o=>Oa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=xv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xv={data:Of,props:kf,emits:kf,methods:qr,computed:qr,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:qr,directives:qr,watch:Mv,provide:Of,inject:yv};function Of(n,e){return e?n?function(){return an(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function yv(n,e){return qr(Cc(n),Cc(e))}function Cc(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function cn(n,e){return n?[...new Set([].concat(n,e))]:e}function qr(n,e){return n?an(Object.create(null),n,e):e}function kf(n,e){return n?Qe(n)&&Qe(e)?[...new Set([...n,...e])]:an(Object.create(null),Nf(n),Nf(e??{})):e}function Mv(n,e){if(!n)return e;if(!e)return n;const t=an(Object.create(null),n);for(const i in e)t[i]=cn(n[i],e[i]);return t}function Ap(){return{app:null,config:{isNativeTag:Gh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sv=0;function bv(n,e){return function(i,s=null){ct(i)||(i=an({},i)),s!=null&&!Tt(s)&&(s=null);const r=Ap(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Sv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:t0,get config(){return r.config},set config(c){},use(c,...f){return o.has(c)||(c&&ct(c.install)?(o.add(c),c.install(u,...f)):ct(c)&&(o.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||Xt(i,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,hl(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Zn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=gr;gr=u;try{return c()}finally{gr=f}}};return u}}let gr=null;const Ev=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yn(e)}Modifiers`]||n[`${us(e)}Modifiers`];function wv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ct;let s=t;const r=e.startsWith("update:"),o=r&&Ev(i,e.slice(7));o&&(o.trim&&(s=t.map(c=>Vt(c)?c.trim():c)),o.number&&(s=s.map(rl)));let a,l=i[a=Sl(e)]||i[a=Sl(Yn(e))];!l&&r&&(l=i[a=Sl(us(e))]),l&&Zn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Zn(u,n,6,s)}}const Tv=new WeakMap;function Cp(n,e,t=!1){const i=t?Tv:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ct(n)){const l=u=>{const c=Cp(u,e,!0);c&&(a=!0,an(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Tt(n)&&i.set(n,null),null):(Qe(r)?r.forEach(l=>o[l]=null):an(o,r),Tt(n)&&i.set(n,o),o)}function fl(n,e){return!n||!nl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),St(n,e[0].toLowerCase()+e.slice(1))||St(n,us(e))||St(n,e))}function Bf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:g,inheritAttrs:v}=n,p=Na(n);let d,y;try{if(t.shapeFlag&4){const x=s||i,L=x;d=ri(u.call(L,x,c,f,m,h,g)),y=a}else{const x=e;d=ri(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=e.props?a:Av(a)}}catch(x){Ls.length=0,ll(x,n,1),d=Xt(Vi)}let _=d;if(y&&v!==!1){const x=Object.keys(y),{shapeFlag:L}=_;x.length&&L&7&&(r&&x.some(il)&&(y=Cv(y,r)),_=yr(_,y,!1,!0))}if(t.dirs&&(_=yr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition){const x=cl(_.type)&&Mp(_)||_;Yu(x,t.transition)}return d=_,Na(p),d}const Av=n=>{let e;for(const t in n)(t==="class"||t==="style"||nl(t))&&((e||(e={}))[t]=n[t]);return e},Cv=(n,e)=>{const t={};for(const i in n)(!il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Rv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?zf(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Rp(o,i,h)&&!fl(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zf(i,o,u):!0:!!o;return!1}function zf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Rp(e,n,r)&&!fl(t,r))return!0}return!1}function Rp(n,e,t){const i=n[t],s=e[t];return t==="style"&&Tt(i)&&Tt(s)?!Jn(i,s):i!==s}function Pv({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Pp={},Lp=()=>Object.create(Pp),Ip=n=>Object.getPrototypeOf(n)===Pp;function Lv(n,e,t,i=!1){const s={},r=Lp();n.propsDefaults=Object.create(null),Dp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:zg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Iv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Mt(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(fl(n.emitsOptions,h))continue;const m=e[h];if(l)if(St(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const g=Yn(h);s[g]=Rc(l,a,g,m,n,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{Dp(n,e,s,r)&&(u=!0);let c;for(const f in a)(!e||!St(e,f)&&((c=us(f))===f||!St(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(s[f]=Rc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!St(e,f))&&(delete r[f],u=!0)}u&&Ci(n.attrs,"set","")}function Dp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zr(l))continue;const u=e[l];let c;s&&St(s,c=Yn(l))?!r||!r.includes(c)?t[c]=u:(a||(a={}))[c]=u:fl(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=Mt(t),u=a||Ct;for(let c=0;c<r.length;c++){const f=r[c];t[f]=Rc(s,l,f,u[f],n,!St(u,f))}}return o}function Rc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=St(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:u}=s;if(t in u)i=u[t];else{const c=Eo(s);i=u[t]=l.call(null,e),c()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===us(t))&&(i=!0))}return i}const Dv=new WeakMap;function Up(n,e,t=!1){const i=t?Dv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ct(n)){const c=f=>{l=!0;const[h,m]=Up(f,e,!0);an(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return Tt(n)&&i.set(n,Ts),Ts;if(Qe(r))for(let c=0;c<r.length;c++){const f=Yn(r[c]);Hf(f)&&(o[f]=Ct)}else if(r)for(const c in r){const f=Yn(c);if(Hf(f)){const h=r[c],m=o[f]=Qe(h)||ct(h)?{type:h}:an({},h),g=m.type;let v=!1,p=!0;if(Qe(g))for(let d=0;d<g.length;++d){const y=g[d],_=ct(y)&&y.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(p=!1)}else v=ct(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||St(m,"default"))&&a.push(f)}}const u=[o,a];return Tt(n)&&i.set(n,u),u}function Hf(n){return n[0]!=="$"&&!Zr(n)}const ju=n=>n==="_"||n==="_ctx"||n==="$stable",Ju=n=>Qe(n)?n.map(ri):[ri(n)],Uv=(n,e,t)=>{if(e._n)return e;const i=Zg((...s)=>Ju(e(...s)),t);return i._c=!1,i},Np=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ju(s))continue;const r=n[s];if(ct(r))e[s]=Uv(s,r,i);else if(r!=null){const o=Ju(r);e[s]=()=>o}}},Fp=(n,e)=>{const t=Ju(e);n.slots.default=()=>t},Op=(n,e,t)=>{for(const i in e)(t||!ju(i))&&(n[i]=e[i])},Nv=(n,e,t)=>{const i=n.slots=Lp();if(n.vnode.shapeFlag&32){const s=e._;s?(Op(i,e,t),t&&Yh(i,"_",s,!0)):Np(e,i)}else e&&Fp(n,e)},Fv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Op(s,e,t):(r=!e.$stable,Np(e,s)),o=e}else e&&(Fp(n,e),o={default:1});if(r)for(const a in s)!ju(a)&&o[a]==null&&delete s[a]},gn=Hv;function Ov(n){return kv(n)}function kv(n,e){const t=ol();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=fi,insertStaticContent:g}=n,v=(R,P,b,X=null,K=null,te=null,ae=void 0,ge=null,re=!!P.dynamicChildren)=>{if(R===P)return;R&&!Fr(R,P)&&(X=he(R),$(R,K,te,!0),R=null),P.patchFlag===-2&&(re=!1,P.dynamicChildren=null),P.dynamicChildren&&R&&R.dynamicChildren&&R.dynamicChildren.hasOnce&&(P.dynamicChildren===Ts&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:E,ref:S,shapeFlag:N}=P;switch(E){case dl:p(R,P,b,X);break;case Vi:d(R,P,b,X);break;case va:R==null&&y(P,b,X,ae);break;case ht:Z(R,P,b,X,K,te,ae,ge,re);break;default:N&1?L(R,P,b,X,K,te,ae,ge,re):N&6?Q(R,P,b,X,K,te,ae,ge,re):(N&64||N&128)&&E.process(R,P,b,X,K,te,ae,ge,re,je)}S!=null&&K?to(S,R&&R.ref,te,P||R,!P):S==null&&R&&R.ref!=null&&to(R.ref,null,te,R,!0)},p=(R,P,b,X)=>{if(R==null)i(P.el=a(P.children),b,X);else{const K=P.el=R.el;P.children!==R.children&&u(K,P.children)}},d=(R,P,b,X)=>{R==null?i(P.el=l(P.children||""),b,X):P.el=R.el},y=(R,P,b,X)=>{[R.el,R.anchor]=g(R.children,P,b,X,R.el,R.anchor)},_=({el:R,anchor:P},b,X)=>{let K;for(;R&&R!==P;)K=h(R),i(R,b,X),R=K;i(P,b,X)},x=({el:R,anchor:P})=>{let b;for(;R&&R!==P;)b=h(R),s(R),R=b;s(P)},L=(R,P,b,X,K,te,ae,ge,re)=>{if(P.type==="svg"?ae="svg":P.type==="math"&&(ae="mathml"),R==null)C(P,b,X,K,te,ae,ge,re);else{const E=R.el&&R.el._isVueCE?R.el:null;try{E&&E._beginPatch(),w(R,P,K,te,ae,ge,re)}finally{E&&E._endPatch()}}},C=(R,P,b,X,K,te,ae,ge)=>{let re,E;const{props:S,shapeFlag:N,transition:q,dirs:ie}=R;if(re=R.el=o(R.type,te,S&&S.is,S),N&8?c(re,R.children):N&16&&F(R.children,re,null,X,K,Rl(R,te),ae,ge),ie&&fs(R,null,X,"created"),I(re,R,R.scopeId,ae,X),S){for(const Te in S)Te!=="value"&&!Zr(Te)&&r(re,Te,null,S[Te],te,X);"value"in S&&r(re,"value",null,S.value,te),(E=S.onVnodeBeforeMount)&&ni(E,X,R)}ie&&fs(R,null,X,"beforeMount");const j=Bv(K,q);j&&q.beforeEnter(re),i(re,P,b),((E=S&&S.onVnodeMounted)||j||ie)&&gn(()=>{try{E&&ni(E,X,R),j&&q.enter(re),ie&&fs(R,null,X,"mounted")}finally{}},K)},I=(R,P,b,X,K)=>{if(b&&m(R,b),X)for(let te=0;te<X.length;te++)m(R,X[te]);if(K){let te=K.subTree;if(P===te||Hp(te.type)&&(te.ssContent===P||te.ssFallback===P)){const ae=K.vnode;I(R,ae,ae.scopeId,ae.slotScopeIds,K.parent)}}},F=(R,P,b,X,K,te,ae,ge,re=0)=>{for(let E=re;E<R.length;E++){const S=R[E]=ge?Ti(R[E]):ri(R[E]);v(null,S,P,b,X,K,te,ae,ge)}},w=(R,P,b,X,K,te,ae)=>{const ge=P.el=R.el;let{patchFlag:re,dynamicChildren:E,dirs:S}=P;re|=R.patchFlag&16;const N=R.props||Ct,q=P.props||Ct;let ie;if(b&&ds(b,!1),(ie=q.onVnodeBeforeUpdate)&&ni(ie,b,P,R),S&&fs(P,R,b,"beforeUpdate"),b&&ds(b,!0),E&&(!R.dynamicChildren||R.dynamicChildren.length!==E.length)&&(re=0,ae=!1,E=null),(N.innerHTML&&q.innerHTML==null||N.textContent&&q.textContent==null)&&c(ge,""),E?M(R.dynamicChildren,E,ge,b,X,Rl(P,K),te):ae||W(R,P,ge,null,b,X,Rl(P,K),te,!1),re>0){if(re&16)D(ge,N,q,b,K);else if(re&2&&N.class!==q.class&&r(ge,"class",null,q.class,K),re&4&&r(ge,"style",N.style,q.style,K),re&8){const j=P.dynamicProps;for(let Te=0;Te<j.length;Te++){const ye=j[Te],Ee=N[ye],Xe=q[ye];(Xe!==Ee||ye==="value")&&r(ge,ye,Ee,Xe,K,b)}}re&1&&R.children!==P.children&&c(ge,P.children)}else!ae&&E==null&&D(ge,N,q,b,K);((ie=q.onVnodeUpdated)||S)&&gn(()=>{ie&&ni(ie,b,P,R),S&&fs(P,R,b,"updated")},X)},M=(R,P,b,X,K,te,ae)=>{for(let ge=0;ge<P.length;ge++){const re=R[ge],E=P[ge],S=re.el&&(re.type===ht||!Fr(re,E)||re.shapeFlag&198)?f(re.el):b;v(re,E,S,null,X,K,te,ae,!0)}},D=(R,P,b,X,K)=>{if(P!==b){if(P!==Ct)for(const te in P)!Zr(te)&&!(te in b)&&r(R,te,P[te],null,K,X);for(const te in b){if(Zr(te))continue;const ae=b[te],ge=P[te];ae!==ge&&te!=="value"&&r(R,te,ge,ae,K,X)}"value"in b&&r(R,"value",P.value,b.value,K)}},Z=(R,P,b,X,K,te,ae,ge,re)=>{const E=P.el=R?R.el:a(""),S=P.anchor=R?R.anchor:a("");let{patchFlag:N,dynamicChildren:q,slotScopeIds:ie}=P;ie&&(ge=ge?ge.concat(ie):ie),R==null?(i(E,b,X),i(S,b,X),F(P.children||[],b,S,K,te,ae,ge,re)):N>0&&N&64&&q&&R.dynamicChildren&&R.dynamicChildren.length===q.length?(M(R.dynamicChildren,q,b,K,te,ae,ge),(P.key!=null||K&&P===K.subTree)&&kp(R,P,!0)):W(R,P,b,S,K,te,ae,ge,re)},Q=(R,P,b,X,K,te,ae,ge,re)=>{P.slotScopeIds=ge,R==null?P.shapeFlag&512?K.ctx.activate(P,b,X,ae,re):oe(P,b,X,K,te,ae,re):de(R,P,re)},oe=(R,P,b,X,K,te,ae)=>{const ge=R.component=Yv(R,X,K);if(Ku(R)&&(ge.ctx.renderer=je),jv(ge,!1,ae),ge.asyncDep){if(K&&K.registerDep(ge,J,ae),!R.el){const re=ge.subTree=Xt(Vi);d(null,re,P,b),R.placeholder=re.el}}else J(ge,R,P,b,K,te,ae)},de=(R,P,b)=>{const X=P.component=R.component;if(Rv(R,P,b))if(X.asyncDep&&!X.asyncResolved){P.el=R.el,fe(X,P,b);return}else X.next=P,X.update();else P.el=R.el,X.vnode=P},J=(R,P,b,X,K,te,ae)=>{const ge=()=>{if(R.isMounted){let{next:N,bu:q,u:ie,parent:j,vnode:Te}=R;{const Le=Bp(R);if(Le){N&&(N.el=Te.el,fe(R,N,ae)),Le.asyncDep.then(()=>{gn(()=>{R.isUnmounted||E()},K)});return}}let ye=N,Ee;ds(R,!1),N?(N.el=Te.el,fe(R,N,ae)):N=Te,q&&ma(q),(Ee=N.props&&N.props.onVnodeBeforeUpdate)&&ni(Ee,j,N,Te),ds(R,!0);const Xe=Bf(R),Me=R.subTree;R.subTree=Xe,v(Me,Xe,f(Me.el),he(Me),R,K,te),N.el=Xe.el,ye===null&&Pv(R,Xe.el),ie&&gn(ie,K),(Ee=N.props&&N.props.onVnodeUpdated)&&gn(()=>ni(Ee,j,N,Te),K)}else{let N;const{el:q,props:ie}=P,{bm:j,m:Te,parent:ye,root:Ee,type:Xe}=R,Me=no(P);ds(R,!1),j&&ma(j),!Me&&(N=ie&&ie.onVnodeBeforeMount)&&ni(N,ye,P),ds(R,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(Xe,R.parent?R.parent.type:void 0);const Le=R.subTree=Bf(R);v(null,Le,b,X,R,K,te),P.el=Le.el}if(Te&&gn(Te,K),!Me&&(N=ie&&ie.onVnodeMounted)){const Le=P;gn(()=>ni(N,ye,Le),K)}(P.shapeFlag&256||ye&&no(ye.vnode)&&ye.vnode.shapeFlag&256)&&R.a&&gn(R.a,K),R.isMounted=!0,P=b=X=null}};R.scope.on();const re=R.effect=new Zh(ge);R.scope.off();const E=R.update=re.run.bind(re),S=R.job=re.runIfDirty.bind(re);S.i=R,S.id=R.uid,re.scheduler=()=>qu(S),ds(R,!0),E()},fe=(R,P,b)=>{P.component=R;const X=R.vnode.props;R.vnode=P,R.next=null,Iv(R,P.props,X,b),Fv(R,P.children,b),zi(),If(R),Hi()},W=(R,P,b,X,K,te,ae,ge,re=!1)=>{const E=R&&R.children,S=R?R.shapeFlag:0,N=P.children,{patchFlag:q,shapeFlag:ie}=P;if(q>0){if(q&128){Y(E,N,b,X,K,te,ae,ge,re);return}else if(q&256){we(E,N,b,X,K,te,ae,ge,re);return}}ie&8?(S&16&&be(E,K,te),N!==E&&c(b,N)):S&16?ie&16?Y(E,N,b,X,K,te,ae,ge,re):be(E,K,te,!0):(S&8&&c(b,""),ie&16&&F(N,b,X,K,te,ae,ge,re))},we=(R,P,b,X,K,te,ae,ge,re)=>{R=R||Ts,P=P||Ts;const E=R.length,S=P.length,N=Math.min(E,S);let q;for(q=0;q<N;q++){const ie=P[q]=re?Ti(P[q]):ri(P[q]);v(R[q],ie,b,null,K,te,ae,ge,re)}E>S?be(R,K,te,!0,!1,N):F(P,b,X,K,te,ae,ge,re,N)},Y=(R,P,b,X,K,te,ae,ge,re)=>{let E=0;const S=P.length;let N=R.length-1,q=S-1;for(;E<=N&&E<=q;){const ie=R[E],j=P[E]=re?Ti(P[E]):ri(P[E]);if(Fr(ie,j))v(ie,j,b,null,K,te,ae,ge,re);else break;E++}for(;E<=N&&E<=q;){const ie=R[N],j=P[q]=re?Ti(P[q]):ri(P[q]);if(Fr(ie,j))v(ie,j,b,null,K,te,ae,ge,re);else break;N--,q--}if(E>N){if(E<=q){const ie=q+1,j=ie<S?P[ie].el:X;for(;E<=q;)v(null,P[E]=re?Ti(P[E]):ri(P[E]),b,j,K,te,ae,ge,re),E++}}else if(E>q)for(;E<=N;)$(R[E],K,te,!0),E++;else{const ie=E,j=E,Te=new Map;for(E=j;E<=q;E++){const Pe=P[E]=re?Ti(P[E]):ri(P[E]);Pe.key!=null&&Te.set(Pe.key,E)}let ye,Ee=0;const Xe=q-j+1;let Me=!1,Le=0;const We=new Array(Xe);for(E=0;E<Xe;E++)We[E]=0;for(E=ie;E<=N;E++){const Pe=R[E];if(Ee>=Xe){$(Pe,K,te,!0);continue}let tt;if(Pe.key!=null)tt=Te.get(Pe.key);else for(ye=j;ye<=q;ye++)if(We[ye-j]===0&&Fr(Pe,P[ye])){tt=ye;break}tt===void 0?$(Pe,K,te,!0):(We[tt-j]=E+1,tt>=Le?Le=tt:Me=!0,v(Pe,P[tt],b,null,K,te,ae,ge,re),Ee++)}const Je=Me?zv(We):Ts;for(ye=Je.length-1,E=Xe-1;E>=0;E--){const Pe=j+E,tt=P[Pe],st=P[Pe+1],vt=Pe+1<S?st.el||zp(st):X;We[E]===0?v(null,tt,b,vt,K,te,ae,ge,re):Me&&(ye<0||E!==Je[ye]?O(tt,b,vt,2):ye--)}}},O=(R,P,b,X,K=null)=>{const{el:te,type:ae,transition:ge,children:re,shapeFlag:E}=R;if(E&6){O(R.component.subTree,P,b,X);return}if(E&128){R.suspense.move(P,b,X);return}if(E&64){ae.move(R,P,b,je);return}if(ae===ht){i(te,P,b);for(let N=0;N<re.length;N++)O(re[N],P,b,X);i(R.anchor,P,b);return}if(ae===va){_(R,P,b);return}if(X!==2&&E&1&&ge)if(X===0)ge.persisted&&!te[Al]?i(te,P,b):(ge.beforeEnter(te),i(te,P,b),gn(()=>ge.enter(te),K));else{const{leave:N,delayLeave:q,afterLeave:ie}=ge,j=()=>{R.ctx.isUnmounted?s(te):i(te,P,b)},Te=()=>{const ye=te._isLeaving||!!te[Al];te._isLeaving&&te[Al](!0),ge.persisted&&!ye?j():N(te,()=>{j(),ie&&ie()})};q?q(te,j,Te):Te()}else i(te,P,b)},$=(R,P,b,X=!1,K=!1)=>{const{type:te,props:ae,ref:ge,children:re,dynamicChildren:E,shapeFlag:S,patchFlag:N,dirs:q,cacheIndex:ie,memo:j}=R;if((N===-2||E&&E.hasOnce)&&(K=!1),ge!=null&&(zi(),to(ge,null,b,R,!0),Hi()),ie!=null&&(!R.ctx||R.ctx===P)&&(P.renderCache[ie]=void 0),S&256){P.ctx.deactivate(R);return}const Te=S&1&&q,ye=!no(R);let Ee;if(ye&&(Ee=ae&&ae.onVnodeBeforeUnmount)&&ni(Ee,P,R),S&6)ce(R.component,b,X);else{if(S&128){R.suspense.unmount(b,X);return}Te&&fs(R,null,P,"beforeUnmount"),S&64?R.type.remove(R,P,b,je,X):E&&!E.hasOnce&&(te!==ht||N>0&&N&64)?be(E,P,b,!1,!0):(te===ht&&N&384||!K&&S&16)&&be(re,P,b),X&&Ce(R)}const Xe=j!=null&&ie==null;(ye&&(Ee=ae&&ae.onVnodeUnmounted)||Te||Xe)&&gn(()=>{Ee&&ni(Ee,P,R),Te&&fs(R,null,P,"unmounted"),Xe&&(R.el=null)},b)},Ce=R=>{const{type:P,el:b,anchor:X,transition:K}=R;if(P===ht){ee(b,X);return}if(P===va){x(R),K&&!K.persisted&&K.afterLeave&&K.afterLeave();return}const te=()=>{s(b),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:ae,delayLeave:ge}=K,re=()=>ae(b,te);ge?ge(R.el,te,re):re()}else te()},ee=(R,P)=>{let b;for(;R!==P;)b=h(R),s(R),R=b;s(P)},ce=(R,P,b)=>{const{bum:X,scope:K,job:te,subTree:ae,um:ge,m:re,a:E}=R;Vf(re),Vf(E),X&&ma(X),K.stop(),te?(te.flags|=8,$(ae,R,P,b)):R.vnode.el&&ae&&(ae.transition=R.vnode.transition,$(ae,R,P,b)),ge&&gn(ge,P),gn(()=>{R.isUnmounted=!0},P)},be=(R,P,b,X=!1,K=!1,te=0)=>{for(let ae=te;ae<R.length;ae++)$(R[ae],P,b,X,K)},he=R=>{if(R.shapeFlag&6)return he(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const P=h(R.anchor||R.el),b=P&&P[iv];return b?h(b):P};let Ne=!1;const Be=(R,P,b)=>{let X;R==null?P._vnode&&($(P._vnode,null,null,!0),X=P._vnode.component):v(P._vnode||null,R,P,null,null,null,b),P._vnode=R,Ne||(Ne=!0,If(X),gp(),Ne=!1)},je={p:v,um:$,m:O,r:Ce,mt:oe,mc:F,pc:W,pbc:M,n:he,o:n};return{render:Be,hydrate:void 0,createApp:bv(Be)}}function Rl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ds({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Bv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kp(n,e,t=!1){const i=n.children,s=e.children;if(Qe(i)&&Qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ti(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&kp(o,a)),a.type===dl&&(a.patchFlag===-1&&(a=s[r]=Ti(a)),a.el=o.el),a.type===Vi&&!a.el&&(a.el=o.el)}}function zv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<u?r=a+1:o=a;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Bp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}function Vf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function zp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?zp(e.subTree):null}const Hp=n=>n.__isSuspense;function Hv(n,e){e&&e.pendingBranch?Qe(n)?e.effects.push(...n):e.effects.push(n):Jg(n)}const ht=Symbol.for("v-fgt"),dl=Symbol.for("v-txt"),Vi=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),Ls=[];let En=null;function pe(n=!1){Ls.push(En=n?null:[])}function Vp(){Ls.pop(),En=Ls[Ls.length-1]||null}let uo=1;function Gf(n,e=!1){uo+=n,n<0&&En&&e&&(En.hasOnce=!0)}function Gp(n){return n.dynamicChildren=uo>0?En||Ts:null,Vp(),uo>0&&En&&En.push(n),n}function _e(n,e,t,i,s,r){return Gp(A(n,e,t,i,s,r,!0))}function Ms(n,e,t,i,s){return Gp(Xt(n,e,t,i,s,!0))}function Wp(n){return n?n.__v_isVNode===!0:!1}function Fr(n,e){return n.type===e.type&&n.key===e.key}const $p=({key:n})=>n??null,_a=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Vt(n)||on(n)||ct(n)?{i:Nn,r:n,k:e,f:!!t}:n:null);function A(n,e=null,t=null,i=0,s=null,r=n===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$p(e),ref:e&&_a(e),scopeId:_p,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nn};return a?(ka(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Vt(t)?8:16),uo>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Xt=Vv;function Vv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===mv)&&(n=Vi),Wp(n)){const a=yr(n,e,!0);return t&&ka(a,t),uo>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(n)]=a:En.push(a)),a.patchFlag=-2,a}if(e0(n)&&(n=n.__vccOpts),e){e=Gv(e);let{class:a,style:l}=e;a&&!Vt(a)&&(e.class=Pt(a)),Tt(l)&&($u(l)&&!Qe(l)&&(l=an({},l)),e.style=di(l))}const o=Vt(n)?1:Hp(n)?128:cl(n)?64:Tt(n)?4:ct(n)?2:0;return A(n,e,t,i,s,o,r,!0)}function Gv(n){return n?$u(n)||Ip(n)?an({},n):n:null}function yr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=e?$v(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&$p(u),ref:e&&e.ref?t&&r?Qe(r)?r.concat(_a(e)):[r,_a(e)]:_a(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yr(n.ssContent),ssFallback:n.ssFallback&&yr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Yu(c,l.clone(c)),c}function et(n=" ",e=0){return Xt(dl,null,n,e)}function Wv(n,e){const t=Xt(va,null,n);return t.staticCount=e,t}function at(n="",e=!1){return e?(pe(),Ms(Vi,null,n)):Xt(Vi,null,n)}function ri(n){return n==null||typeof n=="boolean"?Xt(Vi):Qe(n)?Xt(ht,null,n.slice()):Wp(n)?Ti(n):Xt(dl,null,String(n))}function Ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yr(n)}function ka(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ka(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ip(e)?e._ctx=Nn:s===3&&Nn&&(Nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ct(e)){if(i&65){ka(n,{default:e});return}e={default:e,_ctx:Nn},t=32}else e=String(e),i&64?(t=16,e=[et(e)]):t=8;n.children=e,n.shapeFlag|=t}function $v(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pt([e.class,i.class]));else if(s==="style")e.style=di([e.style,i.style]);else if(nl(s)){const r=e[s],o=i[s];o&&r!==o&&!(Qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!il(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ni(n,e,t,i=null){Zn(n,e,7,[t,i])}const Xv=Ap();let qv=0;function Yv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Xv,r={uid:qv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(i,s),emitsOptions:Cp(i,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wv.bind(null,r),n.ce&&n.ce(r),r}let dn=null;const Kv=()=>dn||Nn;let Ba,fo;{const n=ol(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),fo=e("__VUE_SSR_SETTERS__",t=>ho=t)}const Eo=n=>{const e=dn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(e)}},Wf=()=>{dn&&dn.scope.off(),Ba(null)};function Xp(n){return n.vnode.shapeFlag&4}let ho=!1;function jv(n,e=!1,t=!1){e&&fo(e);const{props:i,children:s}=n.vnode,r=Xp(n);Lv(n,i,r,e),Nv(n,s,t||e);const o=r?Jv(n,e):void 0;return e&&fo(!1),o}function Jv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gv);const{setup:i}=t;if(i){zi();const s=n.setupContext=i.length>1?Qv(n):null,r=Eo(n),o=So(i,n,0,[n.props,s]),a=Wh(o);if(Hi(),r(),(a||n.sp)&&!no(n)&&Sp(n),a){if(o.then(Wf,Wf),e)return o.then(l=>{fo(!0);try{$f(n,l,e)}finally{fo(!1)}}).catch(l=>{ll(l,n,0)});n.asyncDep=o}else $f(n,o)}else qp(n)}function $f(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=hp(e)),qp(n)}function qp(n,e,t){const i=n.type;n.render||(n.render=i.render||fi);{const s=Eo(n);zi();try{vv(n)}finally{Hi(),s()}}}const Zv={get(n,e){return nn(n,"get",""),n[e]}};function Qv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Zv),slots:n.slots,emit:n.emit,expose:e}}function hl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hp(Hg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in io)return io[t](n)},has(e,t){return t in e||t in io}})):n.proxy}function e0(n){return ct(n)&&"__vccOpts"in n}const wt=(n,e)=>Xg(n,e,ho),t0="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pc;const Xf=typeof window<"u"&&window.trustedTypes;if(Xf)try{Pc=Xf.createPolicy("vue",{createHTML:n=>n})}catch{}const Yp=Pc?n=>Pc.createHTML(n):n=>n,n0="http://www.w3.org/2000/svg",i0="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,qf=wi&&wi.createElement("template"),s0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?wi.createElementNS(n0,n):e==="mathml"?wi.createElementNS(i0,n):t?wi.createElement(n,{is:t}):wi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>wi.createTextNode(n),createComment:n=>wi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qf.innerHTML=Yp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},r0=Symbol("_vtc");function o0(n,e,t){const i=n[r0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yf=Symbol("_vod"),a0=Symbol("_vsh"),l0=Symbol(""),c0=/(?:^|;)\s*display\s*:/;function u0(n,e,t){const i=n.style,s=Vt(t);let r=!1;if(t&&!s){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Yr(i,a,"")}else for(const o in e)t[o]==null&&Yr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?d0(n,o,!Vt(e)&&e?e[o]:void 0,a)||Yr(i,o,a):Yr(i,o,"")}}else if(s){if(e!==t){const o=i[l0];o&&(t+=";"+o),i.cssText=t,r=c0.test(t)}}else e&&n.removeAttribute("style");Yf in n&&(n[Yf]=r?i.display:"",n[a0]&&(i.display="none"))}const No=/\s*!important$/;function Yr(n,e,t){if(Qe(t))t.forEach(i=>Yr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))No.test(t)?n.setProperty(e,t.replace(No,""),"important"):n.setProperty(e,t);else{const i=f0(n,e);No.test(t)?n.setProperty(us(i),t.replace(No,""),"important"):n[i]=t}}const Kf=["Webkit","Moz","ms"],Pl={};function f0(n,e){const t=Pl[e];if(t)return t;let i=Yn(e);if(i!=="filter"&&i in n)return Pl[e]=i;i=qh(i);for(let s=0;s<Kf.length;s++){const r=Kf[s]+i;if(r in n)return Pl[e]=r}return e}function d0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Vt(i)&&t===i}const jf="http://www.w3.org/1999/xlink";function Jf(n,e,t,i,s,r=_g(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jf,e.slice(6,e.length)):n.setAttributeNS(jf,e,t):t==null||r&&!Kh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":mi(t)?String(t):t)}function Zf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Yp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Kh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Pi(n,e,t,i){n.addEventListener(e,t,i)}function h0(n,e,t,i){n.removeEventListener(e,t,i)}const Qf=Symbol("_vei");function p0(n,e,t,i,s=null){const r=n[Qf]||(n[Qf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=v0(e);if(i){const u=r[e]=y0(i,s);Pi(n,a,u,l)}else o&&(h0(n,a,o,l),r[e]=void 0)}}const m0=/(Once|Passive|Capture)$/,g0=/^on:?(?:Once|Passive|Capture)$/;function v0(n){let e,t;for(;(t=n.match(m0))&&!g0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):us(n.slice(2)),e]}let Ll=0;const _0=Promise.resolve(),x0=()=>Ll||(_0.then(()=>Ll=0),Ll=Date.now());function y0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const u=o[l];u&&Zn(u,e,5,a)}}else Zn(s,e,5,[i])};return t.value=n,t.attached=x0(),t}const ed=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,M0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?o0(n,i,o):e==="style"?u0(n,t,i):nl(e)?il(e)||p0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):S0(n,e,i,o))?(Zf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jf(n,e,i,o,r,e!=="value")):n._isVueCE&&(b0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Vt(i)))?Zf(n,Yn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Jf(n,e,i,o))};function S0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ed(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ed(e)&&Vt(t)?!1:e in n}function b0(n,e){const t=n._def.props;if(!t)return!1;const i=Yn(e);return Array.isArray(t)?t.some(s=>Yn(s)===i):Object.keys(t).some(s=>Yn(s)===i)}const as=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Qe(e)?t=>ma(e,t):e};function E0(n){n.target.composing=!0}function td(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wn=Symbol("_assign"),Fo=Symbol("_initialValue");function Il(n,e,t){return e&&(n=n.trim()),t&&(n=rl(n)),n}const hn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Fo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Fo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[wn]=as(s);const r=i||s.props&&s.props.type==="number";Pi(n,e?"change":"input",o=>{o.target.composing||n[wn](Il(n.value,t,r))}),(t||r)&&Pi(n,"change",()=>{n.value=Il(n.value,t,r)}),e||(Pi(n,"compositionstart",E0),Pi(n,"compositionend",td),Pi(n,"change",td))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Fo];delete n[Fo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[wn](Il(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[wn]=as(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?rl(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Ni={deep:!0,created(n,e,t){n[wn]=as(t),Pi(n,"change",()=>{const i=n._modelValue,s=Mr(n),r=n.checked,o=n[wn];if(Qe(i)){const a=ku(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const u=[...i];u.splice(a,1),o(u)}}else if(Bi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Kp(n,r))})},mounted:nd,beforeUpdate(n,e,t){n[wn]=as(t),nd(n,e,t)}};function nd(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Qe(e))s=ku(e,i.props.value)>-1;else if(Bi(e))s=e.has(i.props.value);else{if(e===t)return;s=Jn(e,Kp(n,!0))}n.checked!==s&&(n.checked=s)}const w0={created(n,{value:e},t){n.checked=Jn(e,t.props.value),n[wn]=as(t),Pi(n,"change",()=>{n[wn](Mr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[wn]=as(i),e!==t&&(n.checked=Jn(e,i.props.value))}},za={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?rl(Mr(l)):Mr(l)),r=n.multiple,o=r?Bi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Qe(o)?s.slice():s:o];try{n[wn](o)}finally{Xu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[wn]=as(i)},mounted(n,{value:e}){id(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[wn]=as(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!T0(e,t[1],t[0]))&&id(n,e)}};function T0(n,e,t){if(!t||Qe(n))return Jn(n,e);if(Bi(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function id(n,e){const t=n.multiple,i=Qe(e);if(!(t&&!i&&!Bi(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Mr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=ku(e,a)>-1}else o.selected=e.has(a);else if(Jn(Mr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Mr(n){return"_value"in n?n._value:n.value}function Kp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const A0={created(n,e,t){Oo(n,e,t,null,"created")},mounted(n,e,t){Oo(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Oo(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Oo(n,e,t,i,"updated")}};function C0(n,e){switch(n){case"SELECT":return za;case"TEXTAREA":return hn;default:switch(e){case"checkbox":return Ni;case"radio":return w0;default:return hn}}}function Oo(n,e,t,i,s){const o=C0(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}const R0=["ctrl","shift","alt","meta"],P0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>R0.some(t=>n[`${t}Key`]&&!e.includes(t))},sd=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=P0[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},L0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ha=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=us(s.key);if(e.some(o=>o===r||L0[o]===r))return n(s)}))},I0=an({patchProp:M0},s0);let rd;function D0(){return rd||(rd=Ov(I0))}const U0=((...n)=>{const e=D0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=F0(i);if(!s)return;const r=e._component;!ct(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,N0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function N0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function F0(n){return Vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="170",O0=0,od=1,k0=2,jp=1,B0=2,Ei=3,ls=0,_n=1,Li=2,ss=0,vr=1,Va=2,ad=3,ld=4,z0=5,Es=100,H0=101,V0=102,G0=103,W0=104,$0=200,X0=201,q0=202,Y0=203,Lc=204,Ic=205,K0=206,j0=207,J0=208,Z0=209,Q0=210,e_=211,t_=212,n_=213,i_=214,Dc=0,Uc=1,Nc=2,Sr=3,Fc=4,Oc=5,kc=6,Bc=7,Jp=0,s_=1,r_=2,rs=0,o_=1,a_=2,l_=3,c_=4,u_=5,f_=6,d_=7,Zp=300,br=301,Er=302,zc=303,Hc=304,pl=306,Vc=1e3,As=1001,Gc=1002,jn=1003,h_=1004,ko=1005,ui=1006,Dl=1007,Cs=1008,Gi=1009,Qp=1010,em=1011,po=1012,Qu=1013,Ds=1014,Ii=1015,wo=1016,ef=1017,tf=1018,wr=1020,tm=35902,nm=1021,im=1022,qn=1023,sm=1024,rm=1025,_r=1026,Tr=1027,om=1028,nf=1029,am=1030,sf=1031,rf=1033,xa=33776,ya=33777,Ma=33778,Sa=33779,Wc=35840,$c=35841,Xc=35842,qc=35843,Yc=36196,Kc=37492,jc=37496,Jc=37808,Zc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,ou=37817,au=37818,lu=37819,cu=37820,uu=37821,ba=36492,fu=36494,du=36495,lm=36283,hu=36284,pu=36285,mu=36286,p_=3200,m_=3201,cm=0,g_=1,es="",Ln="srgb",Rr="srgb-linear",ml="linear",bt="srgb",Vs=7680,cd=519,v_=512,__=513,x_=514,um=515,y_=516,M_=517,S_=518,b_=519,gu=35044,ud="300 es",Di=2e3,Ga=2001;class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=Math.PI/180,vu=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function E_(n,e){return(n%e+e)%e}function Nl(n,e,t){return(1-t)*n+t*e}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,i,s,r,o,a,l,u){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u)}set(e,t,i,s,r,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],g=i[8],v=s[0],p=s[3],d=s[6],y=s[1],_=s[4],x=s[7],L=s[2],C=s[5],I=s[8];return r[0]=o*v+a*y+l*L,r[3]=o*p+a*_+l*C,r[6]=o*d+a*x+l*I,r[1]=u*v+c*y+f*L,r[4]=u*p+c*_+f*C,r[7]=u*d+c*x+f*I,r[2]=h*v+m*y+g*L,r[5]=h*p+m*_+g*C,r[8]=h*d+m*x+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*r,m=u*r-o*l,g=t*f+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*u-c*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fl=new ut;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w_(){const n=Wa("canvas");return n.style.display="block",n}const fd={};function Kr(n){n in fd||(fd[n]=!0,console.warn(n))}function T_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function A_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function C_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=Oi(n.r),n.g=Oi(n.g),n.b=Oi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=xr(n.r),n.g=xr(n.g),n.b=xr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===es?ml:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dd=[.64,.33,.3,.6,.15,.06],hd=[.2126,.7152,.0722],pd=[.3127,.329],md=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Rr]:{primaries:dd,whitePoint:pd,transfer:ml,toXYZ:md,fromXYZ:gd,luminanceCoefficients:hd,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:dd,whitePoint:pd,transfer:bt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:hd,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}});let Gs;class R_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Wa("canvas")),Gs.width=e.width,Gs.height=e.height;const i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P_=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ol(s[o].image)):r.push(Ol(s[o]))}else r=Ol(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?R_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L_=0;class pn extends Pr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=As,s=As,r=ui,o=Cs,a=qn,l=Gi,u=pn.DEFAULT_ANISOTROPY,c=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Fi(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Zp;pn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,x=(m+1)/2,L=(d+1)/2,C=(c+h)/4,I=(f+v)/4,F=(g+p)/4;return _>x&&_>L?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=I/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=I/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-v)/y,this.z=(h-c)/y,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends Pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends I_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hm extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||u!==m||c!==g){let p=1-a;const d=l*h+u*m+c*g+f*v,y=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const L=Math.sqrt(_),C=Math.atan2(L,d*y);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const x=a*y;if(l=l*p+h*x,u=u*p+m*x,c=c*p+g*x,f=f*p+v*x,p===1-a){const L=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=L,u*=L,c*=L,f*=L}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+c*f+l*m-u*h,e[t+1]=l*g+c*h+u*f-a*m,e[t+2]=u*g+c*m+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"YXZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"ZXY":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"ZYX":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"YZX":this._x=h*c*f+u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f-h*m*g;break;case"XZY":this._x=h*c*f-u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*i),c=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-r*f,this.z=s+l*f+r*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new k,vd=new Ui;class To{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),zo.subVectors(this.max,Or),Ws.subVectors(e.a,Or),$s.subVectors(e.b,Or),Xs.subVectors(e.c,Or),qi.subVectors($s,Ws),Yi.subVectors(Xs,$s),hs.subVectors(Ws,Xs);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-hs.z,hs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,hs.z,0,-hs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-hs.y,hs.x,0];return!Bl(t,Ws,$s,Xs,zo)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,Ws,$s,Xs,zo))?!1:(Ho.crossVectors(qi,Yi),t=[Ho.x,Ho.y,Ho.z],Bl(t,Ws,$s,Xs,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,Bo=new To,Ws=new k,$s=new k,Xs=new k,qi=new k,Yi=new k,hs=new k,Or=new k,zo=new k,Ho=new k,ps=new k;function Bl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ps.fromArray(n,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),u=t.dot(ps),c=i.dot(ps);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const U_=new To,kr=new k,zl=new k;class gl{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):U_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(zl)),this.expandByPoint(kr.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new k,Hl=new k,Vo=new k,Ki=new k,Vl=new k,Go=new k,Gl=new k;class of{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hl.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Hl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=Ki.dot(this.direction),l=-Ki.dot(Vo),u=Ki.lengthSq(),c=Math.abs(1-o*o);let f,h,m,g;if(c>0)if(f=o*l-a,h=o*a-l,g=r*c,f>=0)if(h>=-g)if(h<=g){const v=1/c;f*=v,h*=v,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+u):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+u);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hl).addScaledVector(Vo,h),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Vl.subVectors(t,e),Go.subVectors(i,e),Gl.crossVectors(Vl,Go);let o=this.direction.dot(Gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Go.crossVectors(Ki,Go));if(l<0)return null;const u=a*this.direction.dot(Vl.cross(Ki));if(u<0||l+u>o)return null;const c=-a*Ki.dot(Gl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,s,r,o,a,l,u,c,f,h,m,g,v,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,u,c,f,h,m,g,v,p)}set(e,t,i,s,r,o,a,l,u,c,f,h,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+g*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,g=u*c,v=u*f;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,g=u*c,v=u*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,g=a*c,v=a*f;t[0]=l*c,t[4]=g*u-m,t[8]=h*u+v,t[1]=l*f,t[5]=v*u+h,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,m=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=o*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,F_)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ji.crossVectors(i,Sn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ji.crossVectors(i,Sn)),ji.normalize(),Wo.crossVectors(Sn,ji),s[0]=ji.x,s[4]=Wo.x,s[8]=Sn.x,s[1]=ji.y,s[5]=Wo.y,s[9]=Sn.y,s[2]=ji.z,s[6]=Wo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],y=i[3],_=i[7],x=i[11],L=i[15],C=s[0],I=s[4],F=s[8],w=s[12],M=s[1],D=s[5],Z=s[9],Q=s[13],oe=s[2],de=s[6],J=s[10],fe=s[14],W=s[3],we=s[7],Y=s[11],O=s[15];return r[0]=o*C+a*M+l*oe+u*W,r[4]=o*I+a*D+l*de+u*we,r[8]=o*F+a*Z+l*J+u*Y,r[12]=o*w+a*Q+l*fe+u*O,r[1]=c*C+f*M+h*oe+m*W,r[5]=c*I+f*D+h*de+m*we,r[9]=c*F+f*Z+h*J+m*Y,r[13]=c*w+f*Q+h*fe+m*O,r[2]=g*C+v*M+p*oe+d*W,r[6]=g*I+v*D+p*de+d*we,r[10]=g*F+v*Z+p*J+d*Y,r[14]=g*w+v*Q+p*fe+d*O,r[3]=y*C+_*M+x*oe+L*W,r[7]=y*I+_*D+x*de+L*we,r[11]=y*F+_*Z+x*J+L*Y,r[15]=y*w+_*Q+x*fe+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+r*l*f-s*u*f-r*a*h+i*u*h+s*a*m-i*l*m)+v*(+t*l*m-t*u*h+r*o*h-s*o*m+s*u*c-r*l*c)+p*(+t*u*f-t*a*m-r*o*f+i*o*m+r*a*c-i*u*c)+d*(-s*a*c-t*l*f+t*a*h+s*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],y=f*p*u-v*h*u+v*l*m-a*p*m-f*l*d+a*h*d,_=g*h*u-c*p*u-g*l*m+o*p*m+c*l*d-o*h*d,x=c*v*u-g*f*u+g*a*m-o*v*m-c*a*d+o*f*d,L=g*f*l-c*v*l-g*a*h+o*v*h+c*a*p-o*f*p,C=t*y+i*_+s*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=y*I,e[1]=(v*h*r-f*p*r-v*s*m+i*p*m+f*s*d-i*h*d)*I,e[2]=(a*p*r-v*l*r+v*s*u-i*p*u-a*s*d+i*l*d)*I,e[3]=(f*l*r-a*h*r-f*s*u+i*h*u+a*s*m-i*l*m)*I,e[4]=_*I,e[5]=(c*p*r-g*h*r+g*s*m-t*p*m-c*s*d+t*h*d)*I,e[6]=(g*l*r-o*p*r-g*s*u+t*p*u+o*s*d-t*l*d)*I,e[7]=(o*h*r-c*l*r+c*s*u-t*h*u-o*s*m+t*l*m)*I,e[8]=x*I,e[9]=(g*f*r-c*v*r-g*i*m+t*v*m+c*i*d-t*f*d)*I,e[10]=(o*v*r-g*a*r+g*i*u-t*v*u-o*i*d+t*a*d)*I,e[11]=(c*a*r-o*f*r-c*i*u+t*f*u+o*i*m-t*a*m)*I,e[12]=L*I,e[13]=(c*v*s-g*f*s+g*i*h-t*v*h-c*i*p+t*f*p)*I,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*I,e[15]=(o*f*s-c*a*s+c*i*l-t*f*l-o*i*h+t*a*h)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,c=o+o,f=a+a,h=r*u,m=r*c,g=r*f,v=o*c,p=o*f,d=a*f,y=l*u,_=l*c,x=l*f,L=i.x,C=i.y,I=i.z;return s[0]=(1-(v+d))*L,s[1]=(m+x)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(m-x)*C,s[5]=(1-(h+d))*C,s[6]=(p+y)*C,s[7]=0,s[8]=(g+_)*I,s[9]=(p-y)*I,s[10]=(1-(h+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);const u=1/r,c=1/o,f=1/a;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Di){const l=this.elements,u=2*r/(t-e),c=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let m,g;if(a===Di)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ga)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Di){const l=this.elements,u=1/(t-e),c=1/(i-s),f=1/(o-r),h=(t+e)*u,m=(i+s)*c;let g,v;if(a===Di)g=(o+r)*f,v=-2*f;else if(a===Ga)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qs=new k,Wn=new It,N_=new k(0,0,0),F_=new k(1,1,1),ji=new k,Wo=new k,Sn=new k,_d=new It,xd=new Ui;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const yd=new k,Ys=new Ui,Mi=new It,$o=new k,Br=new k,k_=new k,B_=new Ui,Md=new k(1,0,0),Sd=new k(0,1,0),bd=new k(0,0,1),Ed={type:"added"},z_={type:"removed"},Ks={type:"childadded",child:null},Wl={type:"childremoved",child:null};class Jt extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new k,t=new Qn,i=new Ui,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new ut}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Md,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Md,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$o.copy(e):$o.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Br,$o,this.up):Mi.lookAt($o,Br,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new k(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new k,Si=new k,$l=new k,bi=new k,js=new k,Js=new k,wd=new k,Xl=new k,ql=new k,Yl=new k,Kl=new Ht,jl=new Ht,Jl=new Ht;class Un{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Si.subVectors(i,t),$l.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Si),l=$n.dot($l),u=Si.dot(Si),c=Si.dot($l),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,g=(o*c-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Kl.setScalar(0),jl.setScalar(0),Jl.setScalar(0),Kl.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Kl,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Si.subVectors(e,t),$n.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Js.subVectors(r,i),Xl.subVectors(e,i);const l=js.dot(Xl),u=Js.dot(Xl);if(l<=0&&u<=0)return t.copy(i);ql.subVectors(e,s);const c=js.dot(ql),f=Js.dot(ql);if(c>=0&&f<=c)return t.copy(s);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(js,o);Yl.subVectors(e,r);const m=js.dot(Yl),g=Js.dot(Yl);if(g>=0&&m<=g)return t.copy(r);const v=m*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Js,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return wd.subVectors(r,s),a=(f-c)/(f-c+(m-g)),t.copy(s).addScaledVector(wd,a);const d=1/(p+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(js,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=E_(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zl(o,r,e+1/3),this.g=Zl(o,r,e),this.b=Zl(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return mt.fromWorkingColorSpace(tn.copy(this),e),Math.round(sn(tn.r*255,0,255))*65536+Math.round(sn(tn.g*255,0,255))*256+Math.round(sn(tn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ln){mt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Xo);const i=Nl(Ji.h,Xo.h,t),s=Nl(Ji.s,Xo.s,t),r=Nl(Ji.l,Xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new gt;gt.NAMES=pm;let H_=0;class ks extends Pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Fi(),this.name="",this.blending=vr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Ic,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ic&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $a extends ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new k,qo=new Ve;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class mm extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gm extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hi extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let V_=0;const Rn=new It,Ql=new Jt,Zs=new k,bn=new To,zr=new To,jt=new k;class ei extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?gm:mm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ut().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hi(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(bn.min,zr.min),bn.expandByPoint(jt),jt.addVectors(bn.max,zr.max),bn.expandByPoint(jt)):(bn.expandByPoint(zr.min),bn.expandByPoint(zr.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)jt.fromBufferAttribute(a,u),l&&(Zs.fromBufferAttribute(e,u),jt.add(Zs)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new k,l[F]=new k;const u=new k,c=new k,f=new k,h=new Ve,m=new Ve,g=new Ve,v=new k,p=new k;function d(F,w,M){u.fromBufferAttribute(i,F),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,F),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),c.sub(u),f.sub(u),m.sub(h),g.sub(h);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(D),a[F].add(v),a[w].add(v),a[M].add(v),l[F].add(p),l[w].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,w=y.length;F<w;++F){const M=y[F],D=M.start,Z=M.count;for(let Q=D,oe=D+Z;Q<oe;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const _=new k,x=new k,L=new k,C=new k;function I(F){L.fromBufferAttribute(s,F),C.copy(L);const w=a[F];_.copy(w),_.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(C,w);const D=x.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,D)}for(let F=0,w=y.length;F<w;++F){const M=y[F],D=M.start,Z=M.count;for(let Q=D,oe=D+Z;Q<oe;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*c;for(let d=0;d<c;d++)h[g++]=u[m++]}return new Tn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,i);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],f=r[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new It,ms=new of,Yo=new gl,Ad=new k,Ko=new k,jo=new k,Jo=new k,ec=new k,Zo=new k,Cd=new k,Qo=new k;class Fn extends Jt{constructor(e=new ei,t=new $a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],f=r[l];c!==0&&(ec.fromBufferAttribute(f,e),o?Zo.addScaledVector(ec,c):Zo.addScaledVector(ec.sub(t),c))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(Yo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Yo,Ad)===null||ms.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(Td.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Td),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,L=_;x<L;x+=3){const C=a.getX(x),I=a.getX(x+1),F=a.getX(x+2);s=ea(this,d,e,i,u,c,f,C,I,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);s=ea(this,o,e,i,u,c,f,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,L=_;x<L;x+=3){const C=x,I=x+1,F=x+2;s=ea(this,d,e,i,u,c,f,C,I,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=p,_=p+1,x=p+2;s=ea(this,o,e,i,u,c,f,y,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function G_(n,e,t,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ls,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Qo);return u<t.near||u>t.far?null:{distance:u,point:Qo.clone(),object:n}}function ea(n,e,t,i,s,r,o,a,l,u){n.getVertexPosition(a,Ko),n.getVertexPosition(l,jo),n.getVertexPosition(u,Jo);const c=G_(n,e,t,i,Ko,jo,Jo,Cd);if(c){const f=new k;Un.getBarycoord(Cd,Ko,jo,Jo,f),s&&(c.uv=Un.getInterpolatedAttribute(s,a,l,u,f,new Ve)),r&&(c.uv1=Un.getInterpolatedAttribute(r,a,l,u,f,new Ve)),o&&(c.normal=Un.getInterpolatedAttribute(o,a,l,u,f,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Un.getNormal(Ko,jo,Jo,h.normal),c.face=h,c.barycoord=f}return c}class Lr extends ei{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(u,3)),this.setAttribute("normal",new hi(c,3)),this.setAttribute("uv",new hi(f,2));function g(v,p,d,y,_,x,L,C,I,F,w){const M=x/I,D=L/F,Z=x/2,Q=L/2,oe=C/2,de=I+1,J=F+1;let fe=0,W=0;const we=new k;for(let Y=0;Y<J;Y++){const O=Y*D-Q;for(let $=0;$<de;$++){const Ce=$*M-Z;we[v]=Ce*y,we[p]=O*_,we[d]=oe,u.push(we.x,we.y,we.z),we[v]=0,we[p]=0,we[d]=C>0?1:-1,c.push(we.x,we.y,we.z),f.push($/I),f.push(1-Y/F),fe+=1}}for(let Y=0;Y<F;Y++)for(let O=0;O<I;O++){const $=h+O+de*Y,Ce=h+O+de*(Y+1),ee=h+(O+1)+de*(Y+1),ce=h+(O+1)+de*Y;l.push($,Ce,ce),l.push(Ce,ee,ce),W+=6}a.addGroup(m,W,w),m+=W,h+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const s in i)e[s]=i[s]}return e}function W_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const $_={clone:Ar,merge:un};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _m extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new k,Rd=new Ve,Pd=new Ve;class Dn extends _m{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Pd),t.subVectors(Pd,Rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ul*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class Y_ extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Dn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Dn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Dn(Qs,er,e,t);a.layers=this.layers,this.add(a);const l=new Dn(Qs,er,e,t);l.layers=this.layers,this.add(l);const u=new Dn(Qs,er,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xm extends pn{constructor(e,t,i,s,r,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends Us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lr(5,5,5),r=new cs({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ss});r.uniforms.tEquirect.value=t;const o=new Fn(s,r),a=t.minFilter;return t.minFilter===Cs&&(t.minFilter=ui),new Y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const tc=new k,j_=new k,J_=new ut;class Ss{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=tc.subVectors(i,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J_.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new gl,ta=new k;class lf{constructor(e=new Ss,t=new Ss,i=new Ss,s=new Ss,r=new Ss,o=new Ss){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],f=s[6],h=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],y=s[13],_=s[14],x=s[15];if(i[0].setComponents(l-r,h-u,p-m,x-d).normalize(),i[1].setComponents(l+r,h+u,p+m,x+d).normalize(),i[2].setComponents(l+o,h+c,p+g,x+y).normalize(),i[3].setComponents(l-o,h-c,p-g,x-y).normalize(),i[4].setComponents(l-a,h-f,p-v,x-_).normalize(),t===Di)i[5].setComponents(l+a,h+f,p+v,x+_).normalize();else if(t===Ga)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ym(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Z_(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class Ao extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,f=e/a,h=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<c;d++){const y=d*h-o;for(let _=0;_<u;_++){const x=_*f-r;g.push(x,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const _=y+u*d,x=y+u*(d+1),L=y+1+u*(d+1),C=y+1+u*d;m.push(_,x,C),m.push(x,L,C)}this.setIndex(m),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(v,3)),this.setAttribute("uv",new hi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,Zx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,oM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define MATCAP
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
}`,vM=`#define MATCAP
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
}`,_M=`#define NORMAL
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
}`,xM=`#define NORMAL
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
}`,yM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,SM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,EM=`#define TOON
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
}`,wM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,LM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Q_,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:fx,iridescence_fragment:dx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:vx,color_fragment:_x,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Mx,common:Sx,cube_uv_reflection_fragment:bx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:wx,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Cx,colorspace_fragment:Rx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Dx,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:$x,envmap_vertex:Nx,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:Kx,lights_physical_fragment:jx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Zx,lights_fragment_maps:Qx,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:vy,normal_pars_fragment:_y,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:ky,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:$y,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:Ky,uv_vertex:jy,worldpos_vertex:Jy,background_vert:Zy,background_frag:Qy,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:sM,depth_frag:rM,distanceRGBA_vert:oM,distanceRGBA_frag:aM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:fM,meshbasic_vert:dM,meshbasic_frag:hM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:vM,meshnormal_vert:_M,meshnormal_frag:xM,meshphong_vert:yM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:bM,meshtoon_vert:EM,meshtoon_frag:wM,points_vert:TM,points_frag:AM,shadow_vert:CM,shadow_frag:RM,sprite_vert:PM,sprite_frag:LM},De={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},oi={basic:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new gt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new gt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:un([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:un([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:un([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:un([De.common,De.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:un([De.lights,De.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};oi.physical={uniforms:un([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const na={r:0,b:0,g:0},vs=new Qn,IM=new It;function DM(n,e,t,i,s,r,o){const a=new gt(0);let l=r===!0?0:1,u,c,f=null,h=0,m=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?d(a,l):x&&x.isColor&&(d(x,1),_=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===pl)?(c===void 0&&(c=new Fn(new Lr(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Ar(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(vs)),c.material.toneMapped=mt.getTransfer(x.colorSpace)!==bt,(f!==x||h!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Fn(new Ao(2,2),new cs({name:"BackgroundMaterial",uniforms:Ar(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=mt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function d(y,_){y.getRGB(na,vm(n)),i.buffers.color.setClear(na.r,na.g,na.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:v,addToRenderList:p}}function UM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(M,D,Z,Q,oe){let de=!1;const J=f(Q,Z,D);r!==J&&(r=J,u(r.object)),de=m(M,Q,Z,oe),de&&g(M,Q,Z,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(de||o)&&(o=!1,x(M,D,Z,Q),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,D,Z){const Q=Z.wireframe===!0;let oe=i[M.id];oe===void 0&&(oe={},i[M.id]=oe);let de=oe[D.id];de===void 0&&(de={},oe[D.id]=de);let J=de[Q];return J===void 0&&(J=h(l()),de[Q]=J),J}function h(M){const D=[],Z=[],Q=[];for(let oe=0;oe<t;oe++)D[oe]=0,Z[oe]=0,Q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:Q,object:M,attributes:{},index:null}}function m(M,D,Z,Q){const oe=r.attributes,de=D.attributes;let J=0;const fe=Z.getAttributes();for(const W in fe)if(fe[W].location>=0){const Y=oe[W];let O=de[W];if(O===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;J++}return r.attributesNum!==J||r.index!==Q}function g(M,D,Z,Q){const oe={},de=D.attributes;let J=0;const fe=Z.getAttributes();for(const W in fe)if(fe[W].location>=0){let Y=de[W];Y===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),oe[W]=O,J++}r.attributes=oe,r.attributesNum=J,r.index=Q}function v(){const M=r.newAttributes;for(let D=0,Z=M.length;D<Z;D++)M[D]=0}function p(M){d(M,0)}function d(M,D){const Z=r.newAttributes,Q=r.enabledAttributes,oe=r.attributeDivisors;Z[M]=1,Q[M]===0&&(n.enableVertexAttribArray(M),Q[M]=1),oe[M]!==D&&(n.vertexAttribDivisor(M,D),oe[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let Z=0,Q=D.length;Z<Q;Z++)D[Z]!==M[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function _(M,D,Z,Q,oe,de,J){J===!0?n.vertexAttribIPointer(M,D,Z,oe,de):n.vertexAttribPointer(M,D,Z,Q,oe,de)}function x(M,D,Z,Q){v();const oe=Q.attributes,de=Z.getAttributes(),J=D.defaultAttributeValues;for(const fe in de){const W=de[fe];if(W.location>=0){let we=oe[fe];if(we===void 0&&(fe==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),fe==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),we!==void 0){const Y=we.normalized,O=we.itemSize,$=e.get(we);if($===void 0)continue;const Ce=$.buffer,ee=$.type,ce=$.bytesPerElement,be=ee===n.INT||ee===n.UNSIGNED_INT||we.gpuType===Qu;if(we.isInterleavedBufferAttribute){const he=we.data,Ne=he.stride,Be=we.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)d(W.location+je,he.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<W.locationSize;je++)p(W.location+je);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let je=0;je<W.locationSize;je++)_(W.location+je,O/W.locationSize,ee,Y,Ne*ce,(Be+O/W.locationSize*je)*ce,be)}else{if(we.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)d(W.location+he,we.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let he=0;he<W.locationSize;he++)p(W.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let he=0;he<W.locationSize;he++)_(W.location+he,O/W.locationSize,ee,Y,O*ce,O/W.locationSize*he*ce,be)}}else if(J!==void 0){const Y=J[fe];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(W.location,Y);break;case 3:n.vertexAttrib3fv(W.location,Y);break;case 4:n.vertexAttrib4fv(W.location,Y);break;default:n.vertexAttrib1fv(W.location,Y)}}}}y()}function L(){F();for(const M in i){const D=i[M];for(const Z in D){const Q=D[Z];for(const oe in Q)c(Q[oe].object),delete Q[oe];delete D[Z]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const Z in D){const Q=D[Z];for(const oe in Q)c(Q[oe].object),delete Q[oe];delete D[Z]}delete i[M.id]}function I(M){for(const D in i){const Z=i[D];if(Z[M.id]===void 0)continue;const Q=Z[M.id];for(const oe in Q)c(Q[oe].object),delete Q[oe];delete Z[M.id]}}function F(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function NM(n,e,t){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];t.update(m,i,1)}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==qn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const F=I===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!F)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function OM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ss,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?c(null):u();else{const y=r?0:i,_=y*4;let x=d.clippingState||null;l.value=x,x=c(g,h,_,m);for(let L=0;L!==_;++L)x[L]=t[L];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,x=m;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function kM(n){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=br:a===Hc&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Hc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new K_(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Mm extends _m{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,Ld=[.125,.215,.35,.446,.526,.582],ws=20,nc=new Mm,Id=new gt;let ic=null,sc=0,rc=0,oc=!1;const bs=(1+Math.sqrt(5))/2,tr=1/bs,Dd=[new k(-bs,tr,0),new k(bs,tr,0),new k(-tr,0,bs),new k(tr,0,bs),new k(0,bs,-tr),new k(0,bs,tr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=oc,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:wo,format:qn,colorSpace:Rr,depthBuffer:!1},s=Nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=zM(r,e,t)}return s}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,i,s){const a=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Id),c.toneMapping=rs,c.autoClear=!1;const m=new $a({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Fn(new Lr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Id),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const _=this._cubeSize;ia(s,y*_,d>2?_:0,_,_),c.setRenderTarget(s),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===br||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(s-r-1)%Dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fn(this._lodPlanes[s],u),h=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ws-1),v=r/g,p=isFinite(r)?1+Math.floor(c*v):ws;p>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ws}`);const d=[];let y=0;for(let I=0;I<ws;++I){const F=I/v,w=Math.exp(-F*F/2);d.push(w),I===0?y+=w:I<p&&(y+=2*w)}for(let I=0;I<d.length;I++)d[I]=d[I]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const x=this._sizeLods[s],L=3*x*(s>_-fr?s-_+fr:0),C=4*(this._cubeSize-x);ia(t,L,C,3*x,2*x),l.setRenderTarget(t),l.render(f,nc)}}function BM(n){const e=[],t=[],i=[];let s=n;const r=n-fr+1+Ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-fr?l=Ld[o-n+fr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,v=3,p=2,d=1,y=new Float32Array(v*g*m),_=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let C=0;C<m;C++){const I=C%3*2/3-1,F=C>2?0:-1,w=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];y.set(w,v*g*C),_.set(h,p*g*C);const M=[C,C,C,C,C,C];x.set(M,d*g*C)}const L=new ei;L.setAttribute("position",new Tn(y,v)),L.setAttribute("uv",new Tn(_,p)),L.setAttribute("faceIndex",new Tn(x,d)),e.push(L),s>fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nd(n,e,t){const i=new Us(n,e,t);return i.texture.mapping=pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zM(n,e,t){const i=new Float32Array(ws),s=new k(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Fd(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Od(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function HM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===zc||l===Hc,c=l===br||l===Er;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ud(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&s(m)?(t===null&&(t=new Ud(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function VM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GM(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let _=0,x=y.length;_<x;_+=3){const L=y[_+0],C=y[_+1],I=y[_+2];h.push(L,C,C,I,I,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const L=_+0,C=_+1,I=_+2;h.push(L,C,C,I,I,L)}}else return;const p=new(fm(h)?gm:mm)(h,1);p.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function c(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function WM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,r,h*o),t.update(m,i,1)}function u(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,h*o,g),t.update(m,i,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function f(h,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=m[y]*v[y];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function $M(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function XM(n,e,t){const i=new WeakMap,s=new Ht;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*L*4*f),I=new hm(C,x,L,f);I.type=Ii,I.needsUpdate=!0;const F=_*4;for(let M=0;M<f;M++){const D=p[M],Z=d[M],Q=y[M],oe=x*L*4*M;for(let de=0;de<D.count;de++){const J=de*F;m===!0&&(s.fromBufferAttribute(D,de),C[oe+J+0]=s.x,C[oe+J+1]=s.y,C[oe+J+2]=s.z,C[oe+J+3]=0),g===!0&&(s.fromBufferAttribute(Z,de),C[oe+J+4]=s.x,C[oe+J+5]=s.y,C[oe+J+6]=s.z,C[oe+J+7]=0),v===!0&&(s.fromBufferAttribute(Q,de),C[oe+J+8]=s.x,C[oe+J+9]=s.y,C[oe+J+10]=s.z,C[oe+J+11]=Q.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new Ve(x,L)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<u.length;v++)m+=u[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function qM(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Sm extends pn{constructor(e,t,i,s,r,o,a,l,u,c=_r){if(c!==_r&&c!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_r&&(i=Ds),i===void 0&&c===Tr&&(i=wr),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bm=new pn,kd=new Sm(1,1),Em=new hm,wm=new D_,Tm=new xm,Bd=[],zd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),Gd=new Float32Array(4);function Ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Bd[s];if(r===void 0&&(r=new Float32Array(s),Bd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=zd[e];t===void 0&&(t=new Int32Array(e),zd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Gd.set(i),n.uniformMatrix2fv(this.addr,!1,Gd),Yt(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Vd.set(i),n.uniformMatrix3fv(this.addr,!1,Vd),Yt(t,i)}}function eS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Yt(t,i)}}function tS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function rS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kd.compareFunction=um,r=kd):r=bm,t.setTexture2D(e||r,s)}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wm,s)}function fS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Tm,s)}function dS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Em,s)}function hS(n){switch(n){case 5126:return YM;case 35664:return KM;case 35665:return jM;case 35666:return JM;case 35674:return ZM;case 35675:return QM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}function pS(n,e){n.uniform1fv(this.addr,e)}function mS(n,e){const t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function gS(n,e){const t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function vS(n,e){const t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function _S(n,e){const t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xS(n,e){const t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yS(n,e){const t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MS(n,e){n.uniform1iv(this.addr,e)}function SS(n,e){n.uniform2iv(this.addr,e)}function bS(n,e){n.uniform3iv(this.addr,e)}function ES(n,e){n.uniform4iv(this.addr,e)}function wS(n,e){n.uniform1uiv(this.addr,e)}function TS(n,e){n.uniform2uiv(this.addr,e)}function AS(n,e){n.uniform3uiv(this.addr,e)}function CS(n,e){n.uniform4uiv(this.addr,e)}function RS(n,e,t){const i=this.cache,s=e.length,r=vl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||bm,r[o])}function PS(n,e,t){const i=this.cache,s=e.length,r=vl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wm,r[o])}function LS(n,e,t){const i=this.cache,s=e.length,r=vl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tm,r[o])}function IS(n,e,t){const i=this.cache,s=e.length,r=vl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Em,r[o])}function DS(n){switch(n){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return vS;case 35674:return _S;case 35675:return xS;case 35676:return yS;case 5124:case 35670:return MS;case 35667:case 35671:return SS;case 35668:case 35672:return bS;case 35669:case 35673:return ES;case 5125:return wS;case 36294:return TS;case 36295:return AS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return IS}}class US{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class NS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}}class FS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function Wd(n,e){n.seq.push(e),n.map[e.id]=e}function OS(n,e,t){const i=n.name,s=i.length;for(ac.lastIndex=0;;){const r=ac.exec(i),o=ac.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Wd(t,u===void 0?new US(a,n,e):new NS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new FS(a),Wd(t,f)),t=f}}}class Ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);OS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function $d(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kS=37297;let BS=0;function zS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Xd=new ut;function HS(n){mt._getMatrix(Xd,mt.workingColorSpace,n);const e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case ml:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zS(n.getShaderSource(e),o)}else return s}function VS(n,e){const t=HS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GS(n,e){let t;switch(e){case o_:t="Linear";break;case a_:t="Reinhard";break;case l_:t="Cineon";break;case c_:t="ACESFilmic";break;case f_:t="AgX";break;case d_:t="Neutral";break;case u_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new k;function WS(){mt.getLuminanceCoefficients(sa);const n=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function XS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jr(n){return n!==""}function Yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(n){return n.replace(YS,jS)}const KS=new Map;function jS(n,e){let t=dt[e];if(t===void 0){const i=KS.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(n){return n.replace(JS,ZS)}function ZS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function QS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function eb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Er:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function nb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jp:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function ib(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QS(t),u=eb(t),c=tb(t),f=nb(t),h=ib(t),m=$S(t),g=XS(r),v=s.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),d.length>0&&(d+=`
`)):(p=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),d=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?dt.tonemapping_pars_fragment:"",t.toneMapping!==rs?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=_u(o),o=Yd(o,t),o=Kd(o,t),a=_u(a),a=Yd(a,t),a=Kd(a,t),o=jd(o),a=jd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=y+p+o,x=y+d+a,L=$d(s,s.VERTEX_SHADER,_),C=$d(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(D){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),Q=s.getShaderInfoLog(L).trim(),oe=s.getShaderInfoLog(C).trim();let de=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,C);else{const fe=qd(s,L,"vertex"),W=qd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+fe+`
`+W)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Q===""||oe==="")&&(J=!1);J&&(D.diagnostics={runnable:de,programLog:Z,vertexShader:{log:Q,prefix:p},fragmentShader:{log:oe,prefix:d}})}s.deleteShader(L),s.deleteShader(C),F=new Ea(s,v),w=qS(s,v)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,kS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let rb=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ab(e),t.set(e,i)),i}}class ab{constructor(e){this.id=rb++,this.code=e,this.usedTimes=0}}function lb(n,e,t,i,s,r,o){const a=new af,l=new ob,u=new Set,c=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,M,D,Z,Q){const oe=Z.fog,de=Q.geometry,J=w.isMeshStandardMaterial?Z.environment:null,fe=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),W=fe&&fe.mapping===pl?fe.image.height:null,we=g[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Y=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=Y!==void 0?Y.length:0;let $=0;de.morphAttributes.position!==void 0&&($=1),de.morphAttributes.normal!==void 0&&($=2),de.morphAttributes.color!==void 0&&($=3);let Ce,ee,ce,be;if(we){const yt=oi[we];Ce=yt.vertexShader,ee=yt.fragmentShader}else Ce=w.vertexShader,ee=w.fragmentShader,l.update(w),ce=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const he=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Be=Q.isInstancedMesh===!0,je=Q.isBatchedMesh===!0,ot=!!w.map,R=!!w.matcap,P=!!fe,b=!!w.aoMap,X=!!w.lightMap,K=!!w.bumpMap,te=!!w.normalMap,ae=!!w.displacementMap,ge=!!w.emissiveMap,re=!!w.metalnessMap,E=!!w.roughnessMap,S=w.anisotropy>0,N=w.clearcoat>0,q=w.dispersion>0,ie=w.iridescence>0,j=w.sheen>0,Te=w.transmission>0,ye=S&&!!w.anisotropyMap,Ee=N&&!!w.clearcoatMap,Xe=N&&!!w.clearcoatNormalMap,Me=N&&!!w.clearcoatRoughnessMap,Le=ie&&!!w.iridescenceMap,We=ie&&!!w.iridescenceThicknessMap,Je=j&&!!w.sheenColorMap,Pe=j&&!!w.sheenRoughnessMap,tt=!!w.specularMap,st=!!w.specularColorMap,vt=!!w.specularIntensityMap,z=Te&&!!w.transmissionMap,Ie=Te&&!!w.thicknessMap,ue=!!w.gradientMap,me=!!w.alphaMap,Fe=w.alphaTest>0,Ue=!!w.alphaHash,rt=!!w.extensions;let Ft=rs;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ft=n.toneMapping);const Kt={shaderID:we,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:ee,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:je,batchingColor:je&&Q._colorsTexture!==null,instancing:Be,instancingColor:Be&&Q.instanceColor!==null,instancingMorph:Be&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:ot,matcap:R,envMap:P,envMapMode:P&&fe.mapping,envMapCubeUVHeight:W,aoMap:b,lightMap:X,bumpMap:K,normalMap:te,displacementMap:h&&ae,emissiveMap:ge,normalMapObjectSpace:te&&w.normalMapType===g_,normalMapTangentSpace:te&&w.normalMapType===cm,metalnessMap:re,roughnessMap:E,anisotropy:S,anisotropyMap:ye,clearcoat:N,clearcoatMap:Ee,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Me,dispersion:q,iridescence:ie,iridescenceMap:Le,iridescenceThicknessMap:We,sheen:j,sheenColorMap:Je,sheenRoughnessMap:Pe,specularMap:tt,specularColorMap:st,specularIntensityMap:vt,transmission:Te,transmissionMap:z,thicknessMap:Ie,gradientMap:ue,opaque:w.transparent===!1&&w.blending===vr&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:Fe,alphaHash:Ue,combine:w.combine,mapUv:ot&&v(w.map.channel),aoMapUv:b&&v(w.aoMap.channel),lightMapUv:X&&v(w.lightMap.channel),bumpMapUv:K&&v(w.bumpMap.channel),normalMapUv:te&&v(w.normalMap.channel),displacementMapUv:ae&&v(w.displacementMap.channel),emissiveMapUv:ge&&v(w.emissiveMap.channel),metalnessMapUv:re&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:ye&&v(w.anisotropyMap.channel),clearcoatMapUv:Ee&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(w.sheenRoughnessMap.channel),specularMapUv:tt&&v(w.specularMap.channel),specularColorMapUv:st&&v(w.specularColorMap.channel),specularIntensityMapUv:vt&&v(w.specularIntensityMap.channel),transmissionMapUv:z&&v(w.transmissionMap.channel),thicknessMapUv:Ie&&v(w.thicknessMap.channel),alphaMapUv:me&&v(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(te||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(ot||me),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ot&&w.map.isVideoTexture===!0&&mt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&mt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:rt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&w.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Kt.vertexUv1s=u.has(1),Kt.vertexUv2s=u.has(2),Kt.vertexUv3s=u.has(3),u.clear(),Kt}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let D;if(M){const Z=oi[M];D=$_.clone(Z.uniforms)}else D=w.uniforms;return D}function L(w,M){let D;for(let Z=0,Q=c.length;Z<Q;Z++){const oe=c[Z];if(oe.cacheKey===M){D=oe,++D.usedTimes;break}}return D===void 0&&(D=new sb(n,M,w,r),c.push(D)),D}function C(w){if(--w.usedTimes===0){const M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function I(w){l.remove(w)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:I,programs:c,dispose:F}}function cb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,m,g,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function a(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,g,v,p){const d=o(f,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||ub),i.length>1&&i.sort(h||Zd),s.length>1&&s.sort(h||Zd)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function fb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Qd,n.set(i,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function db(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new gt};break;case"SpotLight":t={position:new k,direction:new k,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pb=0;function mb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gb(n){const e=new db,t=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,r=new It,o=new It;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,y=0,_=0,x=0,L=0,C=0,I=0;u.sort(mb);for(let w=0,M=u.length;w<M;w++){const D=u[w],Z=D.color,Q=D.intensity,oe=D.distance,de=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=Z.r*Q,f+=Z.g*Q,h+=Z.b*Q;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],Q);I++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,W=t.get(D);W.shadowIntensity=fe.intensity,W.shadowBias=fe.bias,W.shadowNormalBias=fe.normalBias,W.shadowRadius=fe.radius,W.shadowMapSize=fe.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=de,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=J,m++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(Z).multiplyScalar(Q),J.distance=oe,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[v]=J;const fe=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,fe.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=fe.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=fe.intensity,W.shadowBias=fe.bias,W.shadowNormalBias=fe.normalBias,W.shadowRadius=fe.radius,W.shadowMapSize=fe.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=de,x++}v++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(Z).multiplyScalar(Q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=J,p++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const fe=D.shadow,W=t.get(D);W.shadowIntensity=fe.intensity,W.shadowBias=fe.bias,W.shadowNormalBias=fe.normalBias,W.shadowRadius=fe.radius,W.shadowMapSize=fe.mapSize,W.shadowCameraNear=fe.camera.near,W.shadowCameraFar=fe.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=de,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=J,g++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(Q),J.groundColor.copy(D.groundColor).multiplyScalar(Q),i.hemi[d]=J,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==d||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==x||F.numSpotMaps!==L||F.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=d,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=x,F.numSpotMaps=L,F.numLightProbes=I,i.version=pb++)}function l(u,c){let f=0,h=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let d=0,y=u.length;d<y;d++){const _=u[d];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(_.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function eh(n){const e=new gb(n),t=[],i=[];function s(c){u.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new eh(n),e.set(s,[a])):r>=o.length?(a=new eh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class _b extends ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xb extends ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`;function Sb(n,e,t){let i=new lf;const s=new Ve,r=new Ve,o=new Ht,a=new _b({depthPacking:m_}),l=new xb,u={},c=t.maxTextureSize,f={[ls]:_n,[_n]:ls,[Li]:Li},h=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:yb,fragmentShader:Mb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jp;let d=this.type;this.render=function(C,I,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(ss),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Q=d!==Ei&&this.type===Ei,oe=d===Ei&&this.type!==Ei;for(let de=0,J=C.length;de<J;de++){const fe=C[de],W=fe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const we=W.getFrameExtents();if(s.multiply(we),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/we.x),s.x=r.x*we.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/we.y),s.y=r.y*we.y,W.mapSize.y=r.y)),W.map===null||Q===!0||oe===!0){const O=this.type!==Ei?{minFilter:jn,magFilter:jn}:{};W.map!==null&&W.map.dispose(),W.map=new Us(s.x,s.y,O),W.map.texture.name=fe.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Y=W.getViewportCount();for(let O=0;O<Y;O++){const $=W.getViewport(O);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),Z.viewport(o),W.updateMatrices(fe,O),i=W.getFrustum(),x(I,F,W.camera,fe,this.type)}W.isPointLightShadow!==!0&&this.type===Ei&&y(W,F),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,M,D)};function y(C,I){const F=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Us(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,F,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,F,m,v,null)}function _(C,I,F,w){let M=null;const D=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Z=M.uuid,Q=I.uuid;let oe=u[Z];oe===void 0&&(oe={},u[Z]=oe);let de=oe[Q];de===void 0&&(de=M.clone(),oe[Q]=de,I.addEventListener("dispose",L)),M=de}if(M.visible=I.visible,M.wireframe=I.wireframe,w===Ei?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=F}return M}function x(C,I,F,w,M){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ei)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),oe=C.material;if(Array.isArray(oe)){const de=Q.groups;for(let J=0,fe=de.length;J<fe;J++){const W=de[J],we=oe[W.materialIndex];if(we&&we.visible){const Y=_(C,we,w,M);C.onBeforeShadow(n,C,I,F,Q,Y,W),n.renderBufferDirect(F,null,Q,Y,C,W),C.onAfterShadow(n,C,I,F,Q,Y,W)}}}else if(oe.visible){const de=_(C,oe,w,M);C.onBeforeShadow(n,C,I,F,Q,de,null),n.renderBufferDirect(F,null,Q,de,C,null),C.onAfterShadow(n,C,I,F,Q,de,null)}}const Z=C.children;for(let Q=0,oe=Z.length;Q<oe;Q++)x(Z[Q],I,F,w,M)}function L(C){C.target.removeEventListener("dispose",L);for(const F in u){const w=u[F],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const bb={[Dc]:Uc,[Nc]:kc,[Fc]:Bc,[Sr]:Oc,[Uc]:Dc,[kc]:Nc,[Bc]:Fc,[Oc]:Sr};function Eb(n,e){function t(){let z=!1;const Ie=new Ht;let ue=null;const me=new Ht(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!z&&(n.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){z=Fe},setClear:function(Fe,Ue,rt,Ft,Kt){Kt===!0&&(Fe*=Ft,Ue*=Ft,rt*=Ft),Ie.set(Fe,Ue,rt,Ft),me.equals(Ie)===!1&&(n.clearColor(Fe,Ue,rt,Ft),me.copy(Ie))},reset:function(){z=!1,ue=null,me.set(-1,0,0,0)}}}function i(){let z=!1,Ie=!1,ue=null,me=null,Fe=null;return{setReversed:function(Ue){if(Ie!==Ue){const rt=e.get("EXT_clip_control");Ie?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Fe;Fe=null,this.setClear(Ft)}Ie=Ue},getReversed:function(){return Ie},setTest:function(Ue){Ue?he(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(Ue){ue!==Ue&&!z&&(n.depthMask(Ue),ue=Ue)},setFunc:function(Ue){if(Ie&&(Ue=bb[Ue]),me!==Ue){switch(Ue){case Dc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Nc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Fc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case Bc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ue}},setLocked:function(Ue){z=Ue},setClear:function(Ue){Fe!==Ue&&(Ie&&(Ue=1-Ue),n.clearDepth(Ue),Fe=Ue)},reset:function(){z=!1,ue=null,me=null,Fe=null,Ie=!1}}}function s(){let z=!1,Ie=null,ue=null,me=null,Fe=null,Ue=null,rt=null,Ft=null,Kt=null;return{setTest:function(yt){z||(yt?he(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(yt){Ie!==yt&&!z&&(n.stencilMask(yt),Ie=yt)},setFunc:function(yt,xn,Hn){(ue!==yt||me!==xn||Fe!==Hn)&&(n.stencilFunc(yt,xn,Hn),ue=yt,me=xn,Fe=Hn)},setOp:function(yt,xn,Hn){(Ue!==yt||rt!==xn||Ft!==Hn)&&(n.stencilOp(yt,xn,Hn),Ue=yt,rt=xn,Ft=Hn)},setLocked:function(yt){z=yt},setClear:function(yt){Kt!==yt&&(n.clearStencil(yt),Kt=yt)},reset:function(){z=!1,Ie=null,ue=null,me=null,Fe=null,Ue=null,rt=null,Ft=null,Kt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,y=null,_=null,x=null,L=null,C=null,I=new gt(0,0,0),F=0,w=!1,M=null,D=null,Z=null,Q=null,oe=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,fe=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=fe>=1):W.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=fe>=2);let we=null,Y={};const O=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Ce=new Ht().fromArray(O),ee=new Ht().fromArray($);function ce(z,Ie,ue,me){const Fe=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(z,Ue),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<ue;rt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Ie+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Ue}const be={};be[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Sr),K(!1),te(od),he(n.CULL_FACE),b(ss);function he(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function Ne(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function Be(z,Ie){return f[z]!==Ie?(n.bindFramebuffer(z,Ie),f[z]=Ie,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ie),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function je(z,Ie){let ue=m,me=!1;if(z){ue=h.get(Ie),ue===void 0&&(ue=[],h.set(Ie,ue));const Fe=z.textures;if(ue.length!==Fe.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,rt=Fe.length;Ue<rt;Ue++)ue[Ue]=n.COLOR_ATTACHMENT0+Ue;ue.length=Fe.length,me=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,me=!0);me&&n.drawBuffers(ue)}function ot(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const R={[Es]:n.FUNC_ADD,[H0]:n.FUNC_SUBTRACT,[V0]:n.FUNC_REVERSE_SUBTRACT};R[G0]=n.MIN,R[W0]=n.MAX;const P={[$0]:n.ZERO,[X0]:n.ONE,[q0]:n.SRC_COLOR,[Lc]:n.SRC_ALPHA,[Q0]:n.SRC_ALPHA_SATURATE,[J0]:n.DST_COLOR,[K0]:n.DST_ALPHA,[Y0]:n.ONE_MINUS_SRC_COLOR,[Ic]:n.ONE_MINUS_SRC_ALPHA,[Z0]:n.ONE_MINUS_DST_COLOR,[j0]:n.ONE_MINUS_DST_ALPHA,[e_]:n.CONSTANT_COLOR,[t_]:n.ONE_MINUS_CONSTANT_COLOR,[n_]:n.CONSTANT_ALPHA,[i_]:n.ONE_MINUS_CONSTANT_ALPHA};function b(z,Ie,ue,me,Fe,Ue,rt,Ft,Kt,yt){if(z===ss){v===!0&&(Ne(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),z!==z0){if(z!==p||yt!==w){if((d!==Es||x!==Es)&&(n.blendEquation(n.FUNC_ADD),d=Es,x=Es),yt)switch(z){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.ONE,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,_=null,L=null,C=null,I.set(0,0,0),F=0,p=z,w=yt}return}Fe=Fe||Ie,Ue=Ue||ue,rt=rt||me,(Ie!==d||Fe!==x)&&(n.blendEquationSeparate(R[Ie],R[Fe]),d=Ie,x=Fe),(ue!==y||me!==_||Ue!==L||rt!==C)&&(n.blendFuncSeparate(P[ue],P[me],P[Ue],P[rt]),y=ue,_=me,L=Ue,C=rt),(Ft.equals(I)===!1||Kt!==F)&&(n.blendColor(Ft.r,Ft.g,Ft.b,Kt),I.copy(Ft),F=Kt),p=z,w=!1}function X(z,Ie){z.side===Li?Ne(n.CULL_FACE):he(n.CULL_FACE);let ue=z.side===_n;Ie&&(ue=!ue),K(ue),z.blending===vr&&z.transparent===!1?b(ss):b(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const me=z.stencilWrite;a.setTest(me),me&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function te(z){z!==O0?(he(n.CULL_FACE),z!==D&&(z===od?n.cullFace(n.BACK):z===k0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),D=z}function ae(z){z!==Z&&(J&&n.lineWidth(z),Z=z)}function ge(z,Ie,ue){z?(he(n.POLYGON_OFFSET_FILL),(Q!==Ie||oe!==ue)&&(n.polygonOffset(Ie,ue),Q=Ie,oe=ue)):Ne(n.POLYGON_OFFSET_FILL)}function re(z){z?he(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function E(z){z===void 0&&(z=n.TEXTURE0+de-1),we!==z&&(n.activeTexture(z),we=z)}function S(z,Ie,ue){ue===void 0&&(we===null?ue=n.TEXTURE0+de-1:ue=we);let me=Y[ue];me===void 0&&(me={type:void 0,texture:void 0},Y[ue]=me),(me.type!==z||me.texture!==Ie)&&(we!==ue&&(n.activeTexture(ue),we=ue),n.bindTexture(z,Ie||be[z]),me.type=z,me.texture=Ie)}function N(){const z=Y[we];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(z){Ce.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ce.copy(z))}function Pe(z){ee.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ee.copy(z))}function tt(z,Ie){let ue=u.get(Ie);ue===void 0&&(ue=new WeakMap,u.set(Ie,ue));let me=ue.get(z);me===void 0&&(me=n.getUniformBlockIndex(Ie,z.name),ue.set(z,me))}function st(z,Ie){const me=u.get(Ie).get(z);l.get(Ie)!==me&&(n.uniformBlockBinding(Ie,me,z.__bindingPointIndex),l.set(Ie,me))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},we=null,Y={},f={},h=new WeakMap,m=[],g=null,v=!1,p=null,d=null,y=null,_=null,x=null,L=null,C=null,I=new gt(0,0,0),F=0,w=!1,M=null,D=null,Z=null,Q=null,oe=null,Ce.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:Be,drawBuffers:je,useProgram:ot,setBlending:b,setMaterial:X,setFlipSided:K,setCullFace:te,setLineWidth:ae,setPolygonOffset:ge,setScissorTest:re,activeTexture:E,bindTexture:S,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:ie,texImage2D:Le,texImage3D:We,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:Xe,texStorage3D:Me,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ee,scissor:Je,viewport:Pe,reset:vt}}function th(n,e,t,i){const s=wb(i);switch(t){case nm:return n*e;case sm:return n*e;case rm:return n*e*2;case om:return n*e/s.components*s.byteLength;case nf:return n*e/s.components*s.byteLength;case am:return n*e*2/s.components*s.byteLength;case sf:return n*e*2/s.components*s.byteLength;case im:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case rf:return n*e*4/s.components*s.byteLength;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:case qc:return Math.max(n,16)*Math.max(e,8)/4;case Wc:case Xc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ba:case fu:case du:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lm:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pu:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wb(n){switch(n){case Gi:case Qp:return{byteLength:1,components:1};case po:case em:case wo:return{byteLength:2,components:1};case ef:case tf:return{byteLength:2,components:4};case Ds:case Qu:case Ii:return{byteLength:4,components:1};case tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return m?new OffscreenCanvas(E,S):Wa("canvas")}function v(E,S,N){let q=1;const ie=re(E);if((ie.width>N||ie.height>N)&&(q=N/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(q*ie.width),Te=Math.floor(q*ie.height);f===void 0&&(f=g(j,Te));const ye=S?g(j,Te):f;return ye.width=j,ye.height=Te,ye.getContext("2d").drawImage(E,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function p(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(E,S,N,q,ie=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=S;if(S===n.RED&&(N===n.FLOAT&&(j=n.R32F),N===n.HALF_FLOAT&&(j=n.R16F),N===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.R8UI),N===n.UNSIGNED_SHORT&&(j=n.R16UI),N===n.UNSIGNED_INT&&(j=n.R32UI),N===n.BYTE&&(j=n.R8I),N===n.SHORT&&(j=n.R16I),N===n.INT&&(j=n.R32I)),S===n.RG&&(N===n.FLOAT&&(j=n.RG32F),N===n.HALF_FLOAT&&(j=n.RG16F),N===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RG8UI),N===n.UNSIGNED_SHORT&&(j=n.RG16UI),N===n.UNSIGNED_INT&&(j=n.RG32UI),N===n.BYTE&&(j=n.RG8I),N===n.SHORT&&(j=n.RG16I),N===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGB8UI),N===n.UNSIGNED_SHORT&&(j=n.RGB16UI),N===n.UNSIGNED_INT&&(j=n.RGB32UI),N===n.BYTE&&(j=n.RGB8I),N===n.SHORT&&(j=n.RGB16I),N===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),N===n.UNSIGNED_INT&&(j=n.RGBA32UI),N===n.BYTE&&(j=n.RGBA8I),N===n.SHORT&&(j=n.RGBA16I),N===n.INT&&(j=n.RGBA32I)),S===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Te=ie?ml:mt.getTransfer(q);N===n.FLOAT&&(j=n.RGBA32F),N===n.HALF_FLOAT&&(j=n.RGBA16F),N===n.UNSIGNED_BYTE&&(j=Te===bt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(E,S){let N;return E?S===null||S===Ds||S===wr?N=n.DEPTH24_STENCIL8:S===Ii?N=n.DEPTH32F_STENCIL8:S===po&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ds||S===wr?N=n.DEPTH_COMPONENT24:S===Ii?N=n.DEPTH_COMPONENT32F:S===po&&(N=n.DEPTH_COMPONENT16),N}function L(E,S){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==jn&&E.minFilter!==ui?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function C(E){const S=E.target;S.removeEventListener("dispose",C),F(S),S.isVideoTexture&&c.delete(S)}function I(E){const S=E.target;S.removeEventListener("dispose",I),M(S)}function F(E){const S=i.get(E);if(S.__webglInit===void 0)return;const N=E.source,q=h.get(N);if(q){const ie=q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(E),Object.keys(q).length===0&&h.delete(N)}i.remove(E)}function w(E){const S=i.get(E);n.deleteTexture(S.__webglTexture);const N=E.source,q=h.get(N);delete q[S.__cacheKey],o.memory.textures--}function M(E){const S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ie=0;ie<S.__webglFramebuffer[q].length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[q][ie]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=E.textures;for(let q=0,ie=N.length;q<ie;q++){const j=i.get(N[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(N[q])}i.remove(E)}let D=0;function Z(){D=0}function Q(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function oe(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function de(E,S){const N=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,E,S);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+S)}function J(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ee(N,E,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+S)}function fe(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ee(N,E,S);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+S)}function W(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ce(N,E,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+S)}const we={[Vc]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[Gc]:n.MIRRORED_REPEAT},Y={[jn]:n.NEAREST,[h_]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},O={[v_]:n.NEVER,[b_]:n.ALWAYS,[__]:n.LESS,[um]:n.LEQUAL,[x_]:n.EQUAL,[S_]:n.GEQUAL,[y_]:n.GREATER,[M_]:n.NOTEQUAL};function $(E,S){if(S.type===Ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ui||S.magFilter===Dl||S.magFilter===ko||S.magFilter===Cs||S.minFilter===ui||S.minFilter===Dl||S.minFilter===ko||S.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,we[S.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,we[S.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,we[S.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Y[S.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,O[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==ko&&S.minFilter!==Cs||S.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(E,S){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",C));const q=S.source;let ie=h.get(q);ie===void 0&&(ie={},h.set(q,ie));const j=oe(S);if(j!==E.__cacheKey){ie[j]===void 0&&(ie[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ie[j].usedTimes++;const Te=ie[E.__cacheKey];Te!==void 0&&(ie[E.__cacheKey].usedTimes--,Te.usedTimes===0&&w(S)),E.__cacheKey=j,E.__webglTexture=ie[j].texture}return N}function ee(E,S,N){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const ie=Ce(E,S),j=S.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+N);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+N);const ye=mt.getPrimaries(mt.workingColorSpace),Ee=S.colorSpace===es?null:mt.getPrimaries(S.colorSpace),Xe=S.colorSpace===es||ye===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Me=v(S.image,!1,s.maxTextureSize);Me=ge(S,Me);const Le=r.convert(S.format,S.colorSpace),We=r.convert(S.type);let Je=_(S.internalFormat,Le,We,S.colorSpace,S.isVideoTexture);$(q,S);let Pe;const tt=S.mipmaps,st=S.isVideoTexture!==!0,vt=Te.__version===void 0||ie===!0,z=j.dataReady,Ie=L(S,Me);if(S.isDepthTexture)Je=x(S.format===Tr,S.type),vt&&(st?t.texStorage2D(n.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Je,Me.width,Me.height,0,Le,We,null));else if(S.isDataTexture)if(tt.length>0){st&&vt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,tt[0].width,tt[0].height);for(let ue=0,me=tt.length;ue<me;ue++)Pe=tt[ue],st?z&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,Le,We,Pe.data):t.texImage2D(n.TEXTURE_2D,ue,Je,Pe.width,Pe.height,0,Le,We,Pe.data);S.generateMipmaps=!1}else st?(vt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,Me.width,Me.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Le,We,Me.data)):t.texImage2D(n.TEXTURE_2D,0,Je,Me.width,Me.height,0,Le,We,Me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Je,tt[0].width,tt[0].height,Me.depth);for(let ue=0,me=tt.length;ue<me;ue++)if(Pe=tt[ue],S.format!==qn)if(Le!==null)if(st){if(z)if(S.layerUpdates.size>0){const Fe=th(Pe.width,Pe.height,S.format,S.type);for(const Ue of S.layerUpdates){const rt=Pe.data.subarray(Ue*Fe/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Fe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ue,Pe.width,Pe.height,1,Le,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Pe.width,Pe.height,Me.depth,Le,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Je,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Pe.width,Pe.height,Me.depth,Le,We,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Je,Pe.width,Pe.height,Me.depth,0,Le,We,Pe.data)}else{st&&vt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,tt[0].width,tt[0].height);for(let ue=0,me=tt.length;ue<me;ue++)Pe=tt[ue],S.format!==qn?Le!==null?st?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Pe.width,Pe.height,Le,We,Pe.data):t.texImage2D(n.TEXTURE_2D,ue,Je,Pe.width,Pe.height,0,Le,We,Pe.data)}else if(S.isDataArrayTexture)if(st){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Je,Me.width,Me.height,Me.depth),z)if(S.layerUpdates.size>0){const ue=th(Me.width,Me.height,S.format,S.type);for(const me of S.layerUpdates){const Fe=Me.data.subarray(me*ue/Me.data.BYTES_PER_ELEMENT,(me+1)*ue/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,Le,We,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,We,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Le,We,Me.data);else if(S.isData3DTexture)st?(vt&&t.texStorage3D(n.TEXTURE_3D,Ie,Je,Me.width,Me.height,Me.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,We,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Le,We,Me.data);else if(S.isFramebufferTexture){if(vt)if(st)t.texStorage2D(n.TEXTURE_2D,Ie,Je,Me.width,Me.height);else{let ue=Me.width,me=Me.height;for(let Fe=0;Fe<Ie;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Je,ue,me,0,Le,We,null),ue>>=1,me>>=1}}else if(tt.length>0){if(st&&vt){const ue=re(tt[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Je,ue.width,ue.height)}for(let ue=0,me=tt.length;ue<me;ue++)Pe=tt[ue],st?z&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Le,We,Pe):t.texImage2D(n.TEXTURE_2D,ue,Je,Le,We,Pe);S.generateMipmaps=!1}else if(st){if(vt){const ue=re(Me);t.texStorage2D(n.TEXTURE_2D,Ie,Je,ue.width,ue.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,We,Me)}else t.texImage2D(n.TEXTURE_2D,0,Je,Le,We,Me);p(S)&&d(q),Te.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ce(E,S,N){if(S.image.length!==6)return;const q=Ce(E,S),ie=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const j=i.get(ie);if(ie.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const Te=mt.getPrimaries(mt.workingColorSpace),ye=S.colorSpace===es?null:mt.getPrimaries(S.colorSpace),Ee=S.colorSpace===es||Te===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Me=S.image[0]&&S.image[0].isDataTexture,Le=[];for(let me=0;me<6;me++)!Xe&&!Me?Le[me]=v(S.image[me],!0,s.maxCubemapSize):Le[me]=Me?S.image[me].image:S.image[me],Le[me]=ge(S,Le[me]);const We=Le[0],Je=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),tt=_(S.internalFormat,Je,Pe,S.colorSpace),st=S.isVideoTexture!==!0,vt=j.__version===void 0||q===!0,z=ie.dataReady;let Ie=L(S,We);$(n.TEXTURE_CUBE_MAP,S);let ue;if(Xe){st&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,tt,We.width,We.height);for(let me=0;me<6;me++){ue=Le[me].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const Ue=ue[Fe];S.format!==qn?Je!==null?st?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,Je,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,tt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,0,0,Ue.width,Ue.height,Je,Pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe,tt,Ue.width,Ue.height,0,Je,Pe,Ue.data)}}}else{if(ue=S.mipmaps,st&&vt){ue.length>0&&Ie++;const me=re(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,tt,me.width,me.height)}for(let me=0;me<6;me++)if(Me){st?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Le[me].width,Le[me].height,Je,Pe,Le[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,Le[me].width,Le[me].height,0,Je,Pe,Le[me].data);for(let Fe=0;Fe<ue.length;Fe++){const rt=ue[Fe].image[me].image;st?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,rt.width,rt.height,Je,Pe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,tt,rt.width,rt.height,0,Je,Pe,rt.data)}}else{st?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,Pe,Le[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,Je,Pe,Le[me]);for(let Fe=0;Fe<ue.length;Fe++){const Ue=ue[Fe];st?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,0,0,Je,Pe,Ue.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe+1,tt,Je,Pe,Ue.image[me])}}}p(S)&&d(n.TEXTURE_CUBE_MAP),j.__version=ie.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function be(E,S,N,q,ie,j){const Te=r.convert(N.format,N.colorSpace),ye=r.convert(N.type),Ee=_(N.internalFormat,Te,ye,N.colorSpace),Xe=i.get(S),Me=i.get(N);if(Me.__renderTarget=S,!Xe.__hasExternalTextures){const Le=Math.max(1,S.width>>j),We=Math.max(1,S.height>>j);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,Ee,Le,We,S.depth,0,Te,ye,null):t.texImage2D(ie,j,Ee,Le,We,0,Te,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ie,Me.__webglTexture,0,K(S)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ie,Me.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,S,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),S.depthBuffer){const q=S.depthTexture,ie=q&&q.isDepthTexture?q.type:null,j=x(S.stencilBuffer,ie),Te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=K(S);te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,j,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,E)}else{const q=S.textures;for(let ie=0;ie<q.length;ie++){const j=q[ie],Te=r.convert(j.format,j.colorSpace),ye=r.convert(j.type),Ee=_(j.internalFormat,Te,ye,j.colorSpace),Xe=K(S);N&&te(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ee,S.width,S.height):te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),de(S.depthTexture,0);const ie=q.__webglTexture,j=K(S);if(S.depthTexture.format===_r)te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Tr)te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(E){const S=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=q}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,E)}else if(N){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),he(S.__webglDepthbuffer[q],E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),he(S.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,S,N){const q=i.get(E);S!==void 0&&be(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Be(E)}function ot(E){const S=E.texture,N=i.get(E),q=i.get(S);E.addEventListener("dispose",I);const ie=E.textures,j=E.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,o.memory.textures++),j){N.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)N.__webglFramebuffer[ye][Ee]=n.createFramebuffer()}else N.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)N.__webglFramebuffer[ye]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ye=0,Ee=ie.length;ye<Ee;ye++){const Xe=i.get(ie[ye]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&te(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ye=0;ye<ie.length;ye++){const Ee=ie[ye];N.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ye]);const Xe=r.convert(Ee.format,Ee.colorSpace),Me=r.convert(Ee.type),Le=_(Ee.internalFormat,Xe,Me,Ee.colorSpace,E.isXRRenderTarget===!0),We=K(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Le,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,N.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),he(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$(n.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)be(N.__webglFramebuffer[ye][Ee],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else be(N.__webglFramebuffer[ye],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(S)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ye=0,Ee=ie.length;ye<Ee;ye++){const Xe=ie[ye],Me=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),$(n.TEXTURE_2D,Xe),be(N.__webglFramebuffer,E,Xe,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),p(Xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,q.__webglTexture),$(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)be(N.__webglFramebuffer[Ee],E,S,n.COLOR_ATTACHMENT0,ye,Ee);else be(N.__webglFramebuffer,E,S,n.COLOR_ATTACHMENT0,ye,0);p(S)&&d(ye),t.unbindTexture()}E.depthBuffer&&Be(E)}function R(E){const S=E.textures;for(let N=0,q=S.length;N<q;N++){const ie=S[N];if(p(ie)){const j=y(E),Te=i.get(ie).__webglTexture;t.bindTexture(j,Te),d(j),t.unbindTexture()}}}const P=[],b=[];function X(E){if(E.samples>0){if(te(E)===!1){const S=E.textures,N=E.width,q=E.height;let ie=n.COLOR_BUFFER_BIT;const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(E),ye=S.length>1;if(ye)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const Xe=i.get(S[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,ie,n.NEAREST),l===!0&&(P.length=0,b.length=0,P.push(n.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(P.push(j),b.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const Xe=i.get(S[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const S=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function K(E){return Math.min(s.maxSamples,E.samples)}function te(E){const S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(E){const S=o.render.frame;c.get(E)!==S&&(c.set(E,S),E.update())}function ge(E,S){const N=E.colorSpace,q=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Rr&&N!==es&&(mt.getTransfer(N)===bt?(q!==qn||ie!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function re(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=te}function Ab(n,e){function t(i,s=es){let r;const o=mt.getTransfer(s);if(i===Gi)return n.UNSIGNED_BYTE;if(i===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qp)return n.BYTE;if(i===em)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===Qu)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Ii)return n.FLOAT;if(i===wo)return n.HALF_FLOAT;if(i===nm)return n.ALPHA;if(i===im)return n.RGB;if(i===qn)return n.RGBA;if(i===sm)return n.LUMINANCE;if(i===rm)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===om)return n.RED;if(i===nf)return n.RED_INTEGER;if(i===am)return n.RG;if(i===sf)return n.RG_INTEGER;if(i===rf)return n.RGBA_INTEGER;if(i===xa||i===ya||i===Ma||i===Sa)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===$c||i===Xc||i===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===Kc||i===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yc||i===Kc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Zc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===su)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ru)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ou)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===au)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ba||i===fu||i===du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ba)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lm||i===hu||i===pu||i===mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Cb extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(u,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Db extends Pr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,g=null;const v=new Ib,p=t.getContextAttributes();let d=null,y=null;const _=[],x=[],L=new Ve;let C=null;const I=new Dn;I.viewport=new Ht;const F=new Dn;F.viewport=new Ht;const w=[I,F],M=new Cb;let D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=_[ee];return ce===void 0&&(ce=new lc,_[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=_[ee];return ce===void 0&&(ce=new lc,_[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=_[ee];return ce===void 0&&(ce=new lc,_[ee]=ce),ce.getHandSpace()};function Q(ee){const ce=x.indexOf(ee.inputSource);if(ce===-1)return;const be=_[ce];be!==void 0&&(be.update(ee.inputSource,ee.frame,u||o),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function oe(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",de);for(let ee=0;ee<_.length;ee++){const ce=x[ee];ce!==null&&(x[ee]=null,_[ee].disconnect(ce))}D=null,Z=null,v.reset(),e.setRenderTarget(d),m=null,h=null,f=null,s=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",de),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Us(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,be=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?Tr:_r,be=p.stencil?wr:Ds);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Ne),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Us(h.textureWidth,h.textureHeight,{format:qn,type:Gi,depthTexture:new Sm(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function de(ee){for(let ce=0;ce<ee.removed.length;ce++){const be=ee.removed[ce],he=x.indexOf(be);he>=0&&(x[he]=null,_[he].disconnect(be))}for(let ce=0;ce<ee.added.length;ce++){const be=ee.added[ce];let he=x.indexOf(be);if(he===-1){for(let Be=0;Be<_.length;Be++)if(Be>=x.length){x.push(be),he=Be;break}else if(x[Be]===null){x[Be]=be,he=Be;break}if(he===-1)break}const Ne=_[he];Ne&&Ne.connect(be)}}const J=new k,fe=new k;function W(ee,ce,be){J.setFromMatrixPosition(ce.matrixWorld),fe.setFromMatrixPosition(be.matrixWorld);const he=J.distanceTo(fe),Ne=ce.projectionMatrix.elements,Be=be.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),ot=Ne[14]/(Ne[10]+1),R=(Ne[9]+1)/Ne[5],P=(Ne[9]-1)/Ne[5],b=(Ne[8]-1)/Ne[0],X=(Be[8]+1)/Be[0],K=je*b,te=je*X,ae=he/(-b+X),ge=ae*-b;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ge),ee.translateZ(ae),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ne[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const re=je+ae,E=ot+ae,S=K-ge,N=te+(he-ge),q=R*ot/E*re,ie=P*ot/E*re;ee.projectionMatrix.makePerspective(S,N,q,ie,re,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function we(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ce=ee.near,be=ee.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(be=v.depthFar)),M.near=F.near=I.near=ce,M.far=F.far=I.far=be,(D!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Z=M.far),I.layers.mask=ee.layers.mask|2,F.layers.mask=ee.layers.mask|4,M.layers.mask=I.layers.mask|F.layers.mask;const he=ee.parent,Ne=M.cameras;we(M,he);for(let Be=0;Be<Ne.length;Be++)we(Ne[Be],he);Ne.length===2?W(M,I,F):M.projectionMatrix.copy(I.projectionMatrix),Y(ee,M,he)};function Y(ee,ce,be){be===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vu*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let O=null;function $(ee,ce){if(c=ce.getViewerPose(u||o),g=ce,c!==null){const be=c.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let he=!1;be.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Be=0;Be<be.length;Be++){const je=be[Be];let ot=null;if(m!==null)ot=m.getViewport(je);else{const P=f.getViewSubImage(h,je);ot=P.viewport,Be===0&&(e.setRenderTargetTextures(y,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(y))}let R=w[Be];R===void 0&&(R=new Dn,R.layers.enable(Be),R.viewport=new Ht,w[Be]=R),R.matrix.fromArray(je.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(je.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ot.x,ot.y,ot.width,ot.height),Be===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(R)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Be=f.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let be=0;be<_.length;be++){const he=x[be],Ne=_[be];he!==null&&Ne!==void 0&&Ne.update(he,ce,u||o)}O&&O(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ce=new ym;Ce.setAnimationLoop($),this.setAnimationLoop=function(ee){O=ee},this.dispose=function(){}}}const _s=new Qn,Ub=new It;function Nb(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,vm(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,_):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===_n&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===_n&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),_=y.envMap,x=y.envMapRotation;_&&(p.envMap.value=_,_s.copy(x),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),p.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(_s)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function u(y,_){let x=s[y.id];x===void 0&&(g(y),x=c(y),s[y.id]=x,y.addEventListener("dispose",p));const L=_.program;i.updateUBOMapping(y,L);const C=e.render.frame;r[y.id]!==C&&(h(y),r[y.id]=C)}function c(y){const _=f();y.__bindingPointIndex=_;const x=n.createBuffer(),L=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=s[y.id],x=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,I=x.length;C<I;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,M=F.length;w<M;w++){const D=F[w];if(m(D,C,w,L)===!0){const Z=D.__offset,Q=Array.isArray(D.value)?D.value:[D.value];let oe=0;for(let de=0;de<Q.length;de++){const J=Q[de],fe=v(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,Z+oe,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,oe),oe+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,_,x,L){const C=y.value,I=_+"_"+x;if(L[I]===void 0)return typeof C=="number"||typeof C=="boolean"?L[I]=C:L[I]=C.clone(),!0;{const F=L[I];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[I]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(y){const _=y.uniforms;let x=0;const L=16;for(let I=0,F=_.length;I<F;I++){const w=Array.isArray(_[I])?_[I]:[_[I]];for(let M=0,D=w.length;M<D;M++){const Z=w[M],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let oe=0,de=Q.length;oe<de;oe++){const J=Q[oe],fe=v(J),W=x%L,we=W%fe.boundary,Y=W+we;x+=we,Y!==0&&L-Y<fe.storage&&(x+=L-Y),Z.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=x,x+=fe.storage}}}const C=x%L;return C>0&&(x+=L-C),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:u,dispose:d}}class Ob{constructor(e={}){const{canvas:t=w_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=rs,this.toneMappingExposure=1;const x=this;let L=!1,C=0,I=0,F=null,w=-1,M=null;const D=new Ht,Z=new Ht;let Q=null;const oe=new gt(0);let de=0,J=t.width,fe=t.height,W=1,we=null,Y=null;const O=new Ht(0,0,J,fe),$=new Ht(0,0,J,fe);let Ce=!1;const ee=new lf;let ce=!1,be=!1;const he=new It,Ne=new It,Be=new k,je=new Ht,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function P(){return F===null?W:1}let b=i;function X(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),b===null){const V="webgl2";if(b=X(V,T),b===null)throw X(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,te,ae,ge,re,E,S,N,q,ie,j,Te,ye,Ee,Xe,Me,Le,We,Je,Pe,tt,st,vt,z;function Ie(){K=new VM(b),K.init(),st=new Ab(b,K),te=new FM(b,K,e,st),ae=new Eb(b,K),te.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),ge=new $M(b),re=new cb,E=new Tb(b,K,ae,re,te,st,ge),S=new kM(x),N=new HM(x),q=new Z_(b),vt=new UM(b,q),ie=new GM(b,q,ge,vt),j=new qM(b,ie,q,ge),Je=new XM(b,te,E),Me=new OM(re),Te=new lb(x,S,N,K,te,vt,Me),ye=new Nb(x,re),Ee=new fb,Xe=new vb(K),We=new DM(x,S,N,ae,j,m,l),Le=new Sb(x,j,te),z=new Fb(b,ge,te,ae),Pe=new NM(b,K,ge),tt=new WM(b,K,ge),ge.programs=Te.programs,x.capabilities=te,x.extensions=K,x.properties=re,x.renderLists=Ee,x.shadowMap=Le,x.state=ae,x.info=ge}Ie();const ue=new Db(x,b);this.xr=ue,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(J,fe,!1))},this.getSize=function(T){return T.set(J,fe)},this.setSize=function(T,V,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,fe=V,t.width=Math.floor(T*W),t.height=Math.floor(V*W),se===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(J*W,fe*W).floor()},this.setDrawingBufferSize=function(T,V,se){J=T,fe=V,W=se,t.width=Math.floor(T*se),t.height=Math.floor(V*se),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,V,se,ne){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,V,se,ne),ae.viewport(D.copy(O).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,V,se,ne){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,V,se,ne),ae.scissor(Z.copy($).multiplyScalar(W).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){ae.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){we=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(T=!0,V=!0,se=!0){let ne=0;if(T){let G=!1;if(F!==null){const Ae=F.texture.format;G=Ae===rf||Ae===sf||Ae===nf}if(G){const Ae=F.texture.type,Re=Ae===Gi||Ae===Ds||Ae===po||Ae===wr||Ae===ef||Ae===tf,ze=We.getClearColor(),Ge=We.getClearAlpha(),Ye=ze.r,Ze=ze.g,ke=ze.b;Re?(g[0]=Ye,g[1]=Ze,g[2]=ke,g[3]=Ge,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Ye,v[1]=Ze,v[2]=ke,v[3]=Ge,b.clearBufferiv(b.COLOR,0,v))}else ne|=b.COLOR_BUFFER_BIT}V&&(ne|=b.DEPTH_BUFFER_BIT),se&&(ne|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Ee.dispose(),Xe.dispose(),re.dispose(),S.dispose(),N.dispose(),j.dispose(),vt.dispose(),z.dispose(),Te.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Po),ue.removeEventListener("sessionend",Lo),B.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=ge.autoReset,V=Le.enabled,se=Le.autoUpdate,ne=Le.needsUpdate,G=Le.type;Ie(),ge.autoReset=T,Le.enabled=V,Le.autoUpdate=se,Le.needsUpdate=ne,Le.type=G}function Ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const V=T.target;V.removeEventListener("dispose",rt),Ft(V)}function Ft(T){Kt(T),re.remove(T)}function Kt(T){const V=re.get(T).programs;V!==void 0&&(V.forEach(function(se){Te.releaseProgram(se)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,se,ne,G,Ae){V===null&&(V=ot);const Re=G.isMesh&&G.matrixWorld.determinant()<0,ze=zt(T,V,se,ne,G);ae.setMaterial(ne,Re);let Ge=se.index,Ye=1;if(ne.wireframe===!0){if(Ge=ie.getWireframeAttribute(se),Ge===void 0)return;Ye=2}const Ze=se.drawRange,ke=se.attributes.position;let it=Ze.start*Ye,qe=(Ze.start+Ze.count)*Ye;Ae!==null&&(it=Math.max(it,Ae.start*Ye),qe=Math.min(qe,(Ae.start+Ae.count)*Ye)),Ge!==null?(it=Math.max(it,0),qe=Math.min(qe,Ge.count)):ke!=null&&(it=Math.max(it,0),qe=Math.min(qe,ke.count));const ft=qe-it;if(ft<0||ft===1/0)return;vt.setup(G,ne,ze,se,Ge);let Gt,pt=Pe;if(Ge!==null&&(Gt=q.get(Ge),pt=tt,pt.setIndex(Gt)),G.isMesh)ne.wireframe===!0?(ae.setLineWidth(ne.wireframeLinewidth*P()),pt.setMode(b.LINES)):pt.setMode(b.TRIANGLES);else if(G.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),ae.setLineWidth($e*P()),G.isLineSegments?pt.setMode(b.LINES):G.isLineLoop?pt.setMode(b.LINE_LOOP):pt.setMode(b.LINE_STRIP)}else G.isPoints?pt.setMode(b.POINTS):G.isSprite&&pt.setMode(b.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Vn=G._multiDrawCounts,xt=G._multiDrawCount,yn=Ge?q.get(Ge).bytesPerElement:1,zs=re.get(ne).currentProgram.getUniforms();for(let Mn=0;Mn<xt;Mn++)zs.setValue(b,"_gl_DrawID",Mn),pt.render($e[Mn]/yn,Vn[Mn])}else if(G.isInstancedMesh)pt.renderInstances(it,ft,G.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Vn=Math.min(se.instanceCount,$e);pt.renderInstances(it,ft,Vn)}else pt.render(it,ft)};function yt(T,V,se){T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Ke(T,V,se),T.side=ls,T.needsUpdate=!0,Ke(T,V,se),T.side=Li):Ke(T,V,se)}this.compile=function(T,V,se=null){se===null&&(se=T),d=Xe.get(se),d.init(V),_.push(d),se.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),T!==se&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const ne=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ae=G.material;if(Ae)if(Array.isArray(Ae))for(let Re=0;Re<Ae.length;Re++){const ze=Ae[Re];yt(ze,se,G),ne.add(ze)}else yt(Ae,se,G),ne.add(Ae)}),_.pop(),d=null,ne},this.compileAsync=function(T,V,se=null){const ne=this.compile(T,V,se);return new Promise(G=>{function Ae(){if(ne.forEach(function(Re){re.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){G(T);return}setTimeout(Ae,10)}K.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let xn=null;function Hn(T){xn&&xn(T)}function Po(){B.stop()}function Lo(){B.start()}const B=new ym;B.setAnimationLoop(Hn),typeof self<"u"&&B.setContext(self),this.setAnimationLoop=function(T){xn=T,ue.setAnimationLoop(T),T===null?B.stop():B.start()},ue.addEventListener("sessionstart",Po),ue.addEventListener("sessionend",Lo),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(V),V=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,F),d=Xe.get(T,_.length),d.init(V),_.push(d),Ne.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(Ne),be=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,be),p=Ee.get(T,y.length),p.init(),y.push(p),ue.enabled===!0&&ue.isPresenting===!0){const Ae=x.xr.getDepthSensingMesh();Ae!==null&&xe(Ae,V,-1/0,x.sortObjects)}xe(T,V,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(we,Y),R=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,R&&We.addToRenderList(p,T),this.info.render.frame++,ce===!0&&Me.beginShadows();const se=d.state.shadowsArray;Le.render(se,T,V),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=p.opaque,G=p.transmissive;if(d.setupLights(),V.isArrayCamera){const Ae=V.cameras;if(G.length>0)for(let Re=0,ze=Ae.length;Re<ze;Re++){const Ge=Ae[Re];Oe(ne,G,T,Ge)}R&&We.render(T);for(let Re=0,ze=Ae.length;Re<ze;Re++){const Ge=Ae[Re];ve(p,T,Ge,Ge.viewport)}}else G.length>0&&Oe(ne,G,T,V),R&&We.render(T),ve(p,T,V);F!==null&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(x,T,V),vt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(d=_[_.length-1],ce===!0&&Me.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function xe(T,V,se,ne){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){ne&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);const Re=j.update(T),ze=T.material;ze.visible&&p.push(T,Re,ze,se,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Re=j.update(T),ze=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),je.copy(Re.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(ze)){const Ge=Re.groups;for(let Ye=0,Ze=Ge.length;Ye<Ze;Ye++){const ke=Ge[Ye],it=ze[ke.materialIndex];it&&it.visible&&p.push(T,Re,it,se,je.z,ke)}}else ze.visible&&p.push(T,Re,ze,se,je.z,null)}}const Ae=T.children;for(let Re=0,ze=Ae.length;Re<ze;Re++)xe(Ae[Re],V,se,ne)}function ve(T,V,se,ne){const G=T.opaque,Ae=T.transmissive,Re=T.transparent;d.setupLightsView(se),ce===!0&&Me.setGlobalState(x.clippingPlanes,se),ne&&ae.viewport(D.copy(ne)),G.length>0&&nt(G,V,se),Ae.length>0&&nt(Ae,V,se),Re.length>0&&nt(Re,V,se),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Oe(T,V,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ne.id]===void 0&&(d.state.transmissionRenderTarget[ne.id]=new Us(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?wo:Gi,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Ae=d.state.transmissionRenderTarget[ne.id],Re=ne.viewport||D;Ae.setSize(Re.z,Re.w);const ze=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(oe),de=x.getClearAlpha(),de<1&&x.setClearColor(16777215,.5),x.clear(),R&&We.render(se);const Ge=x.toneMapping;x.toneMapping=rs;const Ye=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),d.setupLightsView(ne),ce===!0&&Me.setGlobalState(x.clippingPlanes,ne),nt(T,se,ne),E.updateMultisampleRenderTarget(Ae),E.updateRenderTargetMipmap(Ae),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ke=0,it=V.length;ke<it;ke++){const qe=V[ke],ft=qe.object,Gt=qe.geometry,pt=qe.material,$e=qe.group;if(pt.side===Li&&ft.layers.test(ne.layers)){const Vn=pt.side;pt.side=_n,pt.needsUpdate=!0,lt(ft,se,ne,Gt,pt,$e),pt.side=Vn,pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(E.updateMultisampleRenderTarget(Ae),E.updateRenderTargetMipmap(Ae))}x.setRenderTarget(ze),x.setClearColor(oe,de),Ye!==void 0&&(ne.viewport=Ye),x.toneMapping=Ge}function nt(T,V,se){const ne=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Ae=T.length;G<Ae;G++){const Re=T[G],ze=Re.object,Ge=Re.geometry,Ye=ne===null?Re.material:ne,Ze=Re.group;ze.layers.test(se.layers)&&lt(ze,V,se,Ge,Ye,Ze)}}function lt(T,V,se,ne,G,Ae){T.onBeforeRender(x,V,se,ne,G,Ae),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,V,se,ne,T,Ae),G.transparent===!0&&G.side===Li&&G.forceSinglePass===!1?(G.side=_n,G.needsUpdate=!0,x.renderBufferDirect(se,V,ne,G,T,Ae),G.side=ls,G.needsUpdate=!0,x.renderBufferDirect(se,V,ne,G,T,Ae),G.side=Li):x.renderBufferDirect(se,V,ne,G,T,Ae),T.onAfterRender(x,V,se,ne,G,Ae)}function Ke(T,V,se){V.isScene!==!0&&(V=ot);const ne=re.get(T),G=d.state.lights,Ae=d.state.shadowsArray,Re=G.state.version,ze=Te.getParameters(T,G.state,Ae,V,se),Ge=Te.getProgramCacheKey(ze);let Ye=ne.programs;ne.environment=T.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(T.isMeshStandardMaterial?N:S).get(T.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",rt),Ye=new Map,ne.programs=Ye);let Ze=Ye.get(Ge);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Re)return Bt(T,ze),Ze}else ze.uniforms=Te.getUniforms(T),T.onBeforeCompile(ze,x),Ze=Te.acquireProgram(ze,Ge),Ye.set(Ge,Ze),ne.uniforms=ze.uniforms;const ke=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=Me.uniform),Bt(T,ze),ne.needsLights=mn(T),ne.lightsStateVersion=Re,ne.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Dt(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Ea.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Bt(T,V){const se=re.get(T);se.outputColorSpace=V.outputColorSpace,se.batching=V.batching,se.batchingColor=V.batchingColor,se.instancing=V.instancing,se.instancingColor=V.instancingColor,se.instancingMorph=V.instancingMorph,se.skinning=V.skinning,se.morphTargets=V.morphTargets,se.morphNormals=V.morphNormals,se.morphColors=V.morphColors,se.morphTargetsCount=V.morphTargetsCount,se.numClippingPlanes=V.numClippingPlanes,se.numIntersection=V.numClipIntersection,se.vertexAlphas=V.vertexAlphas,se.vertexTangents=V.vertexTangents,se.toneMapping=V.toneMapping}function zt(T,V,se,ne,G){V.isScene!==!0&&(V=ot),E.resetTextureUnits();const Ae=V.fog,Re=ne.isMeshStandardMaterial?V.environment:null,ze=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rr,Ge=(ne.isMeshStandardMaterial?N:S).get(ne.envMap||Re),Ye=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ze=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ke=!!se.morphAttributes.position,it=!!se.morphAttributes.normal,qe=!!se.morphAttributes.color;let ft=rs;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Gt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pt=Gt!==void 0?Gt.length:0,$e=re.get(ne),Vn=d.state.lights;if(ce===!0&&(be===!0||T!==M)){const Cn=T===M&&ne.id===w;Me.setState(ne,T,Cn)}let xt=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Vn.state.version||$e.outputColorSpace!==ze||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isBatchedMesh&&$e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$e.instancingMorph===!1&&G.morphTexture!==null||$e.envMap!==Ge||ne.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==Ze||$e.morphTargets!==ke||$e.morphNormals!==it||$e.morphColors!==qe||$e.toneMapping!==ft||$e.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,$e.__version=ne.version);let yn=$e.currentProgram;xt===!0&&(yn=Ke(ne,V,G));let zs=!1,Mn=!1,Dr=!1;const Ut=yn.getUniforms(),ti=$e.uniforms;if(ae.useProgram(yn.program)&&(zs=!0,Mn=!0,Dr=!0),ne.id!==w&&(w=ne.id,Mn=!0),zs||M!==T){ae.buffers.depth.getReversed()?(he.copy(T.projectionMatrix),A_(he),C_(he),Ut.setValue(b,"projectionMatrix",he)):Ut.setValue(b,"projectionMatrix",T.projectionMatrix),Ut.setValue(b,"viewMatrix",T.matrixWorldInverse);const $i=Ut.map.cameraPosition;$i!==void 0&&$i.setValue(b,Be.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ut.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Mn=!0,Dr=!0)}if(G.isSkinnedMesh){Ut.setOptional(b,G,"bindMatrix"),Ut.setOptional(b,G,"bindMatrixInverse");const Cn=G.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ut.setValue(b,"boneTexture",Cn.boneTexture,E))}G.isBatchedMesh&&(Ut.setOptional(b,G,"batchingTexture"),Ut.setValue(b,"batchingTexture",G._matricesTexture,E),Ut.setOptional(b,G,"batchingIdTexture"),Ut.setValue(b,"batchingIdTexture",G._indirectTexture,E),Ut.setOptional(b,G,"batchingColorTexture"),G._colorsTexture!==null&&Ut.setValue(b,"batchingColorTexture",G._colorsTexture,E));const Ur=se.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&Je.update(G,se,yn),(Mn||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,Ut.setValue(b,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ti.envMap.value=Ge,ti.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&V.environment!==null&&(ti.envMapIntensity.value=V.environmentIntensity),Mn&&(Ut.setValue(b,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&_t(ti,Dr),Ae&&ne.fog===!0&&ye.refreshFogUniforms(ti,Ae),ye.refreshMaterialUniforms(ti,ne,W,fe,d.state.transmissionRenderTarget[T.id]),Ea.upload(b,Dt($e),ti,E)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ea.upload(b,Dt($e),ti,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(b,"center",G.center),Ut.setValue(b,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(b,"normalMatrix",G.normalMatrix),Ut.setValue(b,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Cn=ne.uniformsGroups;for(let $i=0,Xi=Cn.length;$i<Xi;$i++){const wf=Cn[$i];z.update(wf,yn),z.bind(wf,yn)}}return yn}function _t(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function mn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,V,se){re.get(T.texture).__webglTexture=V,re.get(T.depthTexture).__webglTexture=se;const ne=re.get(T);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=se===void 0,ne.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const se=re.get(T);se.__webglFramebuffer=V,se.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,se=0){F=T,C=V,I=se;let ne=!0,G=null,Ae=!1,Re=!1;if(T){const Ge=re.get(T);if(Ge.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(b.FRAMEBUFFER,null),ne=!1;else if(Ge.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Ge.__hasExternalTextures)E.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(Ge.__boundDepthTexture!==ke){if(ke!==null&&re.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Re=!0);const Ze=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?G=Ze[V][se]:G=Ze[V],Ae=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?G=re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[se]:G=Ze,D.copy(T.viewport),Z.copy(T.scissor),Q=T.scissorTest}else D.copy(O).multiplyScalar(W).floor(),Z.copy($).multiplyScalar(W).floor(),Q=Ce;if(ae.bindFramebuffer(b.FRAMEBUFFER,G)&&ne&&ae.drawBuffers(T,G),ae.viewport(D),ae.scissor(Z),ae.setScissorTest(Q),Ae){const Ge=re.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,se)}else if(Re){const Ge=re.get(T.texture),Ye=V||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ge.__webglTexture,se||0,Ye)}w=-1},this.readRenderTargetPixels=function(T,V,se,ne,G,Ae,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){ae.bindFramebuffer(b.FRAMEBUFFER,ze);try{const Ge=T.texture,Ye=Ge.format,Ze=Ge.type;if(!te.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-ne&&se>=0&&se<=T.height-G&&b.readPixels(V,se,ne,G,st.convert(Ye),st.convert(Ze),Ae)}finally{const Ge=F!==null?re.get(F).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,V,se,ne,G,Ae,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){const Ge=T.texture,Ye=Ge.format,Ze=Ge.type;if(!te.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-ne&&se>=0&&se<=T.height-G){ae.bindFramebuffer(b.FRAMEBUFFER,ze);const ke=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ke),b.bufferData(b.PIXEL_PACK_BUFFER,Ae.byteLength,b.STREAM_READ),b.readPixels(V,se,ne,G,st.convert(Ye),st.convert(Ze),0);const it=F!==null?re.get(F).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,it);const qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await T_(b,qe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ke),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ae),b.deleteBuffer(ke),b.deleteSync(qe),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,se=0){T.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const ne=Math.pow(2,-se),G=Math.floor(T.image.width*ne),Ae=Math.floor(T.image.height*ne),Re=V!==null?V.x:0,ze=V!==null?V.y:0;E.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,se,0,0,Re,ze,G,Ae),ae.unbindTexture()},this.copyTextureToTexture=function(T,V,se=null,ne=null,G=0){T.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,T=arguments[1],V=arguments[2],G=arguments[3]||0,se=null);let Ae,Re,ze,Ge,Ye,Ze,ke,it,qe;const ft=T.isCompressedTexture?T.mipmaps[G]:T.image;se!==null?(Ae=se.max.x-se.min.x,Re=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,Ge=se.min.x,Ye=se.min.y,Ze=se.isBox3?se.min.z:0):(Ae=ft.width,Re=ft.height,ze=ft.depth||1,Ge=0,Ye=0,Ze=0),ne!==null?(ke=ne.x,it=ne.y,qe=ne.z):(ke=0,it=0,qe=0);const Gt=st.convert(V.format),pt=st.convert(V.type);let $e;V.isData3DTexture?(E.setTexture3D(V,0),$e=b.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),$e=b.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),$e=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,V.unpackAlignment);const Vn=b.getParameter(b.UNPACK_ROW_LENGTH),xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),zs=b.getParameter(b.UNPACK_SKIP_ROWS),Mn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ge),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ze);const Dr=T.isDataArrayTexture||T.isData3DTexture,Ut=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ti=re.get(T),Ur=re.get(V),Cn=re.get(ti.__renderTarget),$i=re.get(Ur.__renderTarget);ae.bindFramebuffer(b.READ_FRAMEBUFFER,Cn.__webglFramebuffer),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Xi=0;Xi<ze;Xi++)Dr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,re.get(T).__webglTexture,G,Ze+Xi),T.isDepthTexture?(Ut&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,re.get(V).__webglTexture,G,qe+Xi),b.blitFramebuffer(Ge,Ye,Ae,Re,ke,it,Ae,Re,b.DEPTH_BUFFER_BIT,b.NEAREST)):Ut?b.copyTexSubImage3D($e,G,ke,it,qe+Xi,Ge,Ye,Ae,Re):b.copyTexSubImage2D($e,G,ke,it,qe+Xi,Ge,Ye,Ae,Re);ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?b.texSubImage3D($e,G,ke,it,qe,Ae,Re,ze,Gt,pt,ft.data):V.isCompressedArrayTexture?b.compressedTexSubImage3D($e,G,ke,it,qe,Ae,Re,ze,Gt,ft.data):b.texSubImage3D($e,G,ke,it,qe,Ae,Re,ze,Gt,pt,ft):T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,G,ke,it,Ae,Re,Gt,pt,ft.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,G,ke,it,ft.width,ft.height,Gt,ft.data):b.texSubImage2D(b.TEXTURE_2D,G,ke,it,Ae,Re,Gt,pt,ft);b.pixelStorei(b.UNPACK_ROW_LENGTH,Vn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,zs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Mn),G===0&&V.generateMipmaps&&b.generateMipmap($e),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,V,se=null,ne=null,G=0){return T.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ne=arguments[1]||null,T=arguments[2],V=arguments[3],G=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,se,ne,G)},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){C=0,I=0,F=null,ae.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class kb extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gu,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new k;class Xa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Am extends ks{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Hr=new k,ir=new k,sr=new k,rr=new Ve,Vr=new Ve,Cm=new It,ra=new k,Gr=new k,oa=new k,nh=new Ve,cc=new Ve,ih=new Ve;class zb extends Jt{constructor(e=new Am){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new ei;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bb(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Xa(i,3,0,!1)),nr.setAttribute("uv",new Xa(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new Ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Cm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;aa(ra.set(-.5,-.5,0),sr,o,ir,s,r),aa(Gr.set(.5,-.5,0),sr,o,ir,s,r),aa(oa.set(.5,.5,0),sr,o,ir,s,r),nh.set(0,0),cc.set(1,0),ih.set(1,1);let a=e.ray.intersectTriangle(ra,Gr,oa,!1,Hr);if(a===null&&(aa(Gr.set(-.5,.5,0),sr,o,ir,s,r),cc.set(0,1),a=e.ray.intersectTriangle(ra,oa,Gr,!1,Hr),a===null))return;const l=e.ray.origin.distanceTo(Hr);l<e.near||l>e.far||t.push({distance:l,point:Hr.clone(),uv:Un.getInterpolation(Hr,ra,Gr,oa,nh,cc,ih,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function aa(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*rr.x-s*rr.y,Vr.y=s*rr.x+r*rr.y):Vr.copy(rr),n.copy(e),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(Cm)}class Rm extends ks{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new It,xu=new of,la=new gl,ca=new k;class Hb extends Jt{constructor(e=new ei,t=new Rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;sh.copy(s).invert(),xu.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=h,v=m;g<v;g++){const p=u.getX(g);ca.fromBufferAttribute(f,p),rh(ca,p,l,s,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,v=m;g<v;g++)ca.fromBufferAttribute(f,g),rh(ca,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rh(n,e,t,i,s,r,o){const a=xu.distanceSqToPoint(n);if(a<t){const l=new k;xu.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vb extends pn{constructor(e,t,i,s,r,o,a,l,u){super(e,t,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=i[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const c=i[s],h=i[s+1]-c,m=(o-c)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ve:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new k,s=[],r=[],o=[],a=new k,l=new It;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(sn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(sn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uf extends vi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=u-this.aY;l=h*c-m*f+this.aX,u=h*f+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gb extends uf{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ff(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,f){let h=(o-r)/u-(a-r)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,m*=c,s(o,a,h,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const ua=new k,uc=new ff,fc=new ff,dc=new ff;class Wb extends vi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(ua.subVectors(s[0],s[1]).add(s[0]),u=ua);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(c),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),uc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,v,p),fc.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,v,p),dc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,v,p)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),fc.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),dc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(uc.calc(l),fc.calc(l),dc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function oh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function $b(n,e){const t=1-n;return t*t*e}function Xb(n,e){return 2*(1-n)*n*e}function qb(n,e){return n*n*e}function so(n,e,t,i){return $b(n,e)+Xb(n,t)+qb(n,i)}function Yb(n,e){const t=1-n;return t*t*t*e}function Kb(n,e){const t=1-n;return 3*t*t*n*e}function jb(n,e){return 3*(1-n)*n*n*e}function Jb(n,e){return n*n*n*e}function ro(n,e,t,i,s){return Yb(n,e)+Kb(n,t)+jb(n,i)+Jb(n,s)}class Pm extends vi{constructor(e=new Ve,t=new Ve,i=new Ve,s=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ve){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zb extends vi{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y),ro(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lm extends vi{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qb extends vi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Im extends vi{constructor(e=new Ve,t=new Ve,i=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ve){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eE extends vi{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y),so(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dm extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(oh(a,l.x,u.x,c.x,f.x),oh(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ve().fromArray(s))}return this}}var ah=Object.freeze({__proto__:null,ArcCurve:Gb,CatmullRomCurve3:Wb,CubicBezierCurve:Pm,CubicBezierCurve3:Zb,EllipseCurve:uf,LineCurve:Lm,LineCurve3:Qb,QuadraticBezierCurve:Im,QuadraticBezierCurve3:eE,SplineCurve:Dm});class tE extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ah[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ah[s.type]().fromJSON(s))}return this}}class lh extends tE{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Lm(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Im(this.currentPoint.clone(),new Ve(e,t),new Ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Pm(this.currentPoint.clone(),new Ve(e,t),new Ve(i,s),new Ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Dm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const u=new uf(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Um extends lh{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new lh().fromJSON(s))}return this}}const nE={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Nm(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,u,c,f,h,m;if(i&&(r=aE(n,e,r,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let g=t;g<s;g+=t)f=n[g],h=n[g+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return mo(r,o,t,a,l,m,0),o}};function Nm(n,e,t,i,s){let r,o;if(s===_E(n,e,t,i)>0)for(r=e;r<t;r+=i)o=ch(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=ch(r,n[r],n[r+1],o);return o&&_l(o,o.next)&&(vo(o),o=o.next),o}function Ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_l(t,t.next)||kt(t.prev,t,t.next)===0)){if(vo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function mo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&dE(n,i,s,r);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,r?sE(n,i,s,r):iE(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),vo(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=rE(Ns(n),e,t),mo(n,e,t,i,s,r,2)):o===2&&oE(n,e,t,i,s,r):mo(Ns(n),e,t,i,s,r,1);break}}}function iE(n){const e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=s<r?s<o?s:o:r<o?r:o,f=a<l?a<u?a:u:l<u?l:u,h=s>r?s>o?s:o:r>o?r:o,m=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=h&&g.y>=f&&g.y<=m&&dr(s,a,r,l,o,u,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sE(n,e,t,i){const s=n.prev,r=n,o=n.next;if(kt(s,r,o)>=0)return!1;const a=s.x,l=r.x,u=o.x,c=s.y,f=r.y,h=o.y,m=a<l?a<u?a:u:l<u?l:u,g=c<f?c<h?c:h:f<h?f:h,v=a>l?a>u?a:u:l>u?l:u,p=c>f?c>h?c:h:f>h?f:h,d=yu(m,g,e,t,i),y=yu(v,p,e,t,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=d&&x&&x.z<=y;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&dr(a,c,l,f,u,h,_.x,_.y)&&kt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=m&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&dr(a,c,l,f,u,h,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&dr(a,c,l,f,u,h,_.x,_.y)&&kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&dr(a,c,l,f,u,h,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rE(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!_l(s,r)&&Fm(s,i,i.next,r)&&go(s,r)&&go(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),vo(i),vo(i.next),i=n=r),i=i.next}while(i!==n);return Ns(i)}function oE(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mE(o,a)){let l=Om(o,a);o=Ns(o,o.next),l=Ns(l,l.next),mo(o,e,t,i,s,r,0),mo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function aE(n,e,t,i){const s=[];let r,o,a,l,u;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,u=Nm(n,a,l,i,!1),u===u.next&&(u.steiner=!0),s.push(pE(u));for(s.sort(lE),r=0;r<s.length;r++)t=cE(s[r],t);return t}function lE(n,e){return n.x-e.x}function cE(n,e){const t=uE(n,e);if(!t)return e;const i=Om(t,n);return Ns(i,i.next),Ns(t,t.next)}function uE(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&dr(o<u?r:i,o,l,u,o<u?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),go(t,n)&&(f<c||f===c&&(t.x>s.x||t.x===s.x&&fE(s,t)))&&(s=t,c=f)),t=t.next;while(t!==a);return s}function fE(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function dE(n,e,t,i){let s=n;do s.z===0&&(s.z=yu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,hE(s)}function hE(n){let e,t,i,s,r,o,a,l,u=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,u*=2}while(o>1);return n}function yu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function pE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function mE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!gE(n,e)&&(go(n,e)&&go(e,n)&&vE(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||_l(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _l(n,e){return n.x===e.x&&n.y===e.y}function Fm(n,e,t,i){const s=da(kt(n,e,t)),r=da(kt(n,e,i)),o=da(kt(t,i,n)),a=da(kt(t,i,e));return!!(s!==r&&o!==a||s===0&&fa(n,t,e)||r===0&&fa(n,i,e)||o===0&&fa(t,n,i)||a===0&&fa(t,e,i))}function fa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function da(n){return n>0?1:n<0?-1:0}function gE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Fm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function go(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function vE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Om(n,e){const t=new Mu(n.i,n.x,n.y),i=new Mu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ch(n,e,t,i){const s=new Mu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Mu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _E(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class oo{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return oo.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];uh(e),fh(i,e);let o=e.length;t.forEach(uh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fh(i,t[l]);const a=nE.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function uh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class df extends ei{constructor(e=new Um([new Ve(0,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new hi(s,3)),this.setAttribute("normal",new hi(r,3)),this.setAttribute("uv",new hi(o,2));function u(c){const f=s.length/3,h=c.extractPoints(t);let m=h.shape;const g=h.holes;oo.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){const y=g[p];oo.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=oo.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){const y=g[p];m=m.concat(y)}for(let p=0,d=m.length;p<d;p++){const y=m[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,d=v.length;p<d;p++){const y=v[p],_=y[0]+f,x=y[1]+f,L=y[2]+f;i.push(_,x,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xE(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new df(i,e.curveSegments)}}function xE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class dh extends ks{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cm,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class km extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hc=new It,hh=new k,ph=new k;class yE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ME extends yE{constructor(){super(new Mm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends km{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new ME}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class SE extends km{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const gh=new It;class bE{constructor(e,t,i=0,s=1/0){this.ray=new of(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,t=!0,i=[]){return Su(e,this,i,t),i.sort(vh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Su(e[s],this,i,t);return i.sort(vh),i}}function vh(n,e){return n.distance-e.distance}function Su(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Su(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);const Wr=new k;function Pn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Wr.copy(e),Wr[i]=0,Wr.normalize();const u=.5*o/(o+a),c=1-Wr.angleTo(n)/l;return Math.sign(Wr[t])===1?c*u:a/(o+a)+u+u*(1-c)}class EE extends Lr{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new k,l=new k,u=new k(e,t,i).divideScalar(2).subScalar(r),c=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=c.length/6,g=new k,v=.5/s;for(let p=0,d=0;p<c.length;p+=3,d+=2)switch(a.fromArray(c,p),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),c[p+0]=u.x*Math.sign(a.x)+l.x*r,c[p+1]=u.y*Math.sign(a.y)+l.y*r,c[p+2]=u.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),h[d+0]=Pn(g,l,"z","y",r,i),h[d+1]=1-Pn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),h[d+0]=1-Pn(g,l,"z","y",r,i),h[d+1]=1-Pn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),h[d+0]=1-Pn(g,l,"x","z",r,e),h[d+1]=Pn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),h[d+0]=1-Pn(g,l,"x","z",r,e),h[d+1]=1-Pn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),h[d+0]=1-Pn(g,l,"x","y",r,e),h[d+1]=1-Pn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),h[d+0]=Pn(g,l,"x","y",r,e),h[d+1]=1-Pn(g,l,"y","x",r,t);break}}}const rn=["U","R","F","D","L","B"],On=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Jr=[3,4,5,0,1,2],_o=["yellow","orange","green","white","red","blue"],xo=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],wa=(n,e)=>`${n[0]},${n[1]},${n[2]}|${e[0]},${e[1]},${e[2]}`,qa=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Bm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],wE=(n,e,t)=>qa(n,Bm(e,t));function _h(n,e){const t=qa(e,n),i=Bm(e,n);return[-i[0]+e[0]*t,-i[1]+e[1]*t,-i[2]+e[2]*t]}function hf(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function xs(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(e=>{const t=/^([URFDLB])(2|2'|'|3)?$/.exec(e);if(!t)throw new Error(`Bad move "${e}"`);return t[2]?t[2]==="3"||t[2]==="'"?`${t[1]}'`:`${t[1]}2`:t[1]})}function Ya(n){return[...n].reverse().map(hf)}const pc=new Map;function Zt(n){return pc.has(n)||pc.set(n,TE(n)),pc.get(n)}function TE(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const e=n-1,t=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of t)for(const l of t)for(const u of t){const c=[a,l,u],f=[];for(let v=0;v<3;v++){if(Math.abs(c[v])!==e)continue;const p=[0,0,0];p[v]=Math.sign(c[v]);const d=On.findIndex(_=>_[0]===p[0]&&_[1]===p[1]&&_[2]===p[2]),y=i.length;i.push({pos:c,normal:p,face:d,cubie:r.length}),s.set(wa(c,p),y),f.push(y)}if(!f.length)continue;const h=v=>f.find(p=>i[p].normal[v]!==0);let m=f;if(f.length===3){const[v,p,d]=[h(1),h(0),h(2)];m=wE(i[v].normal,i[p].normal,i[d].normal)>0?[v,p,d]:[v,d,p]}else if(f.length===2){const v=h(1)??h(2);m=[v,f.find(p=>p!==v)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:c,slots:m,kind:g})}const o={};return rn.forEach((a,l)=>{const u=On[l],c=i.map((m,g)=>qa(m.pos,u)!==e?g:s.get(wa(_h(m.pos,u),_h(m.normal,u)))),f=c.map(m=>c[m]),h=c.map(m=>f[m]);o[a]=Int16Array.from(c),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(h)}),{n,m:e,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(wa(a,l)),faceGrid:AE(n,e,s),layerOf:a=>r.map((l,u)=>qa(l.pos,On[a])===e?u:-1).filter(l=>l>=0)}}function AE(n,e,t){const i={},s=(o,a,l,u)=>t.get(wa([o,a,l],On[u])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(u,c)=>o(l,c)));return i.U=r((o,a)=>s(-e+2*a,e,-e+2*o,0)),i.D=r((o,a)=>s(-e+2*a,-e,e-2*o,3)),i.F=r((o,a)=>s(-e+2*a,e-2*o,e,2)),i.B=r((o,a)=>s(e-2*a,e-2*o,-e,5)),i.R=r((o,a)=>s(e,e-2*o,e-2*a,1)),i.L=r((o,a)=>s(-e,e-2*o,-e+2*a,4)),i}function CE(n){return rn.flatMap(t=>[t,`${t}2`,`${t}'`])}function xl(n){return Uint8Array.from(Zt(n).stickers,e=>e.face)}function Co(n,e){const t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[e[i]]=n[i];return t}function RE(n,e,t){return Co(n,Zt(e).moves[t])}function PE(n,e,t){const i=Zt(e);let s=n;for(const r of t)s=Co(s,i.moves[r]);return s}function LE(n,e){const{faceGrid:t}=Zt(e);return rn.every(i=>{const s=t[i].flat();return s.every(r=>n[r]===n[s[0]])})}function IE(n,e=n===2?11:22,t=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<e;){const l=i[Math.floor(t()*i.length)];l!==o&&(n===3&&Jr[l]===o&&l===a||(s.push(rn[l]+r[Math.floor(t()*3)]),a=o,o=l))}return s}function xh(n){const e=new Array(n.length).fill(!1);let t=0;for(let i=0;i<n.length;i++){if(e[i])continue;let s=0;for(let r=i;!e[r];r=n[r])e[r]=!0,s++;t+=s-1}return t%2}function yh(n,e){const t=Zt(e),i=[],s=new Map;t.cubies.forEach((l,u)=>{if(l.kind==="center")return;const c=l.slots.map(f=>t.stickers[f].face);s.set([...c].sort().join(),u)});const r=[],o=[],a=new Set;return t.cubies.forEach((l,u)=>{if(l.kind==="center")return;const c=l.slots.map(v=>n[v]),f=[...c].sort().join(),h=s.get(f),m=c.map(v=>_o[v]).join("/");if(h===void 0||new Set(c).size!==c.length){i.push(`Impossible ${l.kind} with colours ${m}`);return}if(a.has(h)){i.push(`The ${t.cubies[h].slots.map(v=>_o[t.stickers[v].face]).join("/")} ${l.kind} appears twice`);return}a.add(h);const g=t.cubies[h].slots.map(v=>t.stickers[v].face);if(l.kind==="corner"){let v=-1;for(let p=0;p<3;p++)c.every((d,y)=>c[(p+y)%3]===g[y])&&(v=p);if(v<0){i.push(`The corner with colours ${m} is a mirror image (impossible)`);return}r.push({pos:u,home:h,twist:v})}else o.push({pos:u,home:h,flip:c[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function zm(n){const e=Zt(2),t=new Array(6).fill(0);for(const f of n)t[f]++;if(t.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of e.cubies){const h=f.slots.map(m=>n[m]);if(new Set(h).size!==3)return{error:"A corner shows the same colour twice"};for(const m of h)for(const g of h)m!==g&&i[m].add(g)}const s=[];for(let f=0;f<6;f++){const h=[0,1,2,3,4,5].filter(m=>m!==f&&!i[f].has(m));if(h.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=h[0]}const r=e.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(h=>e.stickers[h].face===f)],a=new Array(6),[l,u,c]=[o(3),o(4),o(5)];return a[l]=3,a[u]=4,a[c]=5,a[s[l]]=0,a[s[u]]=1,a[s[c]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function pf(n,e){function t(c){switch(c.toLowerCase()){case"white":return'<span style="color:white;font-weight:bold;">White</span>';case"yellow":return'<span style="color:yellow;font-weight:bold">Yellow</span>';case"red":return'<span style="color:red;font-weight:bold;">Red</span>';case"orange":return'<span style="color:orange;font-weight:bold;">Orange</span>';case"blue":return'<span style="color:blue;font-weight:bold;">Blue</span>';case"green":return'<span style="color:green;font-weight:bold;">Green</span>'}}const i=Zt(e);if(n.length!==i.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const s=[];if(e===2){const c=zm(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:f,errors:h}=yh(c.state,2);return s.push(...h),!h.length&&f.reduce((m,g)=>m+g.twist,0)%3!==0&&s.push("One corner is twisted - this position cannot be solved"),{ok:!s.length,errors:s,canonical:c}}const r=new Array(6).fill(0);for(const c of n)r[c]++;if(r.forEach((c,f)=>{c!==9&&s.push(`${t(_o[f])} appears ${c} times (needs 9)`)}),i.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==i.stickers[c.slots[0]].face&&s.push("Centre stickers are fixed and must keep their colour")}),s.length)return{ok:!1,errors:[...new Set(s)]};const{corners:o,edges:a,errors:l}=yh(n,3);if(l.length)return{ok:!1,errors:l};o.reduce((c,f)=>c+f.twist,0)%3!==0&&s.push("One corner is twisted in place"),a.reduce((c,f)=>c+f.flip,0)%2!==0&&s.push("One edge is flipped in place");const u=(c,f)=>{const h=i.cubies.map((g,v)=>g.kind===f?v:-1).filter(g=>g>=0),m=new Array(h.length);return c.forEach(g=>{m[h.indexOf(g.pos)]=h.indexOf(g.home)}),m};return xh(u(o,"corner"))!==xh(u(a,"edge"))&&s.push("Two pieces are swapped - this position cannot be solved"),{ok:!s.length,errors:s}}const Hm=["A","B","X","Y","LB","RB","LT","RT","View","Menu","LS-B","RS-B","D-Up","D-Down","D-Left","D-Right"],Mh=[...Hm,...["LS","RS"].flatMap(n=>["Up","Down","Left","Right"].map(e=>`${n}-${e}`))],bu=[["zoom-in","Zoom in"],["zoom-out","Zoom out"],["quick-solve","Quick Solve"],["next-step","Next solution move"],["undo","Undo"],["scramble","Scramble"],["reset","Reset to solved"],["cube-up","Rotate cube up"],["cube-down","Rotate cube down"],["cube-left","Rotate cube left"],["cube-right","Rotate cube right"],...["front","back","left","right","top","bottom"].flatMap(n=>[[`${n}-cw`,`${n}: clockwise (unprimed)`],[`${n}-ccw`,`${n}: counter-clockwise (prime)`],[`${n}-double`,`${n}: double (180 degrees)`]])].map(([n,e])=>({id:n,label:e})),Vm=new Set(["zoom-in","zoom-out","cube-up","cube-down","cube-left","cube-right"]);function DE(n,e,t=new Set){const i=new Set;return Hm.forEach((s,r)=>{const o=n.buttons[r],a=r===6||r===7?e.triggerThreshold:.5;o&&(o.value>=a||r!==6&&r!==7&&o.pressed)&&i.add(s)}),["LS","RS"].forEach((s,r)=>{[["Left",-(n.axes[r*2]||0)],["Right",n.axes[r*2]||0],["Up",-(n.axes[r*2+1]||0)],["Down",n.axes[r*2+1]||0]].forEach(([o,a])=>{const l=`${s}-${o}`,u=e.deadZone*(t.has(l)?.8:1);a>=u&&i.add(l)})}),i}function UE(n,e){const t=Object.entries(n).filter(([,i])=>i&&e.has(i.input)&&i.modifiers.every(s=>e.has(s)));return t.filter(([,i])=>{const s=[i.input,...i.modifiers];return!t.some(([,r])=>{const o=[r.input,...r.modifiers];return o.length>s.length&&s.every(a=>o.includes(a))})})}function Ta(n){return n?[n.input,...n.modifiers].sort().join("+"):""}function Cr(n){if(!n||n.version!==1||typeof n.name!="string"||!n.name.trim()||n.name.length>80||!n.bindings||typeof n.bindings!="object"||Array.isArray(n.bindings))throw new Error("Invalid profile: expected version 1, a name, and bindings.");const e=n.settings;if(!e||!Number.isFinite(e.deadZone)||e.deadZone<.15||e.deadZone>.9||!Number.isFinite(e.triggerThreshold)||e.triggerThreshold<.1||e.triggerThreshold>.95)throw new Error("Invalid stick dead zone or trigger threshold.");const t={},i=new Set;for(const[s,r]of Object.entries(n.bindings)){if(!bu.some(l=>l.id===s))throw new Error(`Unknown action: ${s}`);if(r===null){t[s]=null;continue}if(!r||!Mh.includes(r.input)||!Array.isArray(r.modifiers)||r.modifiers.some(l=>!Mh.includes(l)||l===r.input)||new Set(r.modifiers).size!==r.modifiers.length)throw new Error(`Invalid binding: ${s}`);const o=[r.input,...r.modifiers];for(const l of["LS","RS","D"])for(const[u,c]of[["Up","Down"],["Left","Right"]])if(o.includes(`${l}-${u}`)&&o.includes(`${l}-${c}`))throw new Error(`Opposite directions cannot be combined: ${s}`);const a=Ta(r);if(i.has(a))throw new Error(`Duplicate combination: ${a}`);i.add(a),t[s]={input:r.input,modifiers:[...r.modifiers]}}return{version:1,name:n.name.trim(),settings:{deadZone:e.deadZone,triggerThreshold:e.triggerThreshold},bindings:t}}function NE(n,e){const t=(c,f)=>c.reduce((h,m,g)=>h+m*f[g],0),i=(c,f)=>c.reduce((h,m)=>t(On[m],f)>t(On[h],f)+1e-10?m:h),s=i([0,1,2,3,4,5],n),r=i([0,1,2,3,4,5].filter(c=>c!==s&&c!==Jr[s]),e),o=On[s],a=On[r],l=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],u=i([0,1,2,3,4,5],l);return{front:rn[s],back:rn[Jr[s]],right:rn[r],left:rn[Jr[r]],top:rn[u],bottom:rn[Jr[u]]}}const FE=[["L","R"],["D","U"],["B","F"]];function OE(n,e,{desktop:t,swapMouseButtons:i,touchMode:s,paintable:r}){return n==="touch"?s:n!=="mouse"||!t?"rotate":e!==0&&e!==2?null:r?e===0?"rotate":null:e===(i?0:2)?"move":"rotate"}function Gm(n,e,t,i){const s=n.cubies[n.stickers[e].cubie].pos[t],[r,o]=FE[t];return s===n.m?o+(i>0?"'":""):s===-n.m?r+(i>0?"":"'"):`${o}${i>0?"":"'"} ${r}${i>0?"'":""}`}function kE(n,e,t,i,s){if(Math.hypot(i,s)<24)return null;let r=null;for(const{axis:o,x:a,y:l}of t){const u=Math.hypot(a,l);if(u<1e-6)continue;const c=(a*i+l*s)/u;(!r||Math.abs(c)>r.score)&&(r={axis:o,direction:Math.sign(c),score:Math.abs(c)})}return!r||r.score<Math.hypot(i,s)*.65?null:Gm(n,e,r.axis,r.direction)}const An=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},mc=4,$r=14,BE=.55,ha=.8,zE=.025,HE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0},dramaSpeed:{type:Number,default:.32},hoverColors:{type:Boolean,default:!1},touchMode:{type:String,default:"rotate"},touchLocked:{type:Boolean,default:!1},swapMouseButtons:{type:Boolean,default:!1}},emits:["paint","layerturn","hovering","zoom"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=He(null);let o,a,l;const u=new k(0,0,0);let c,f=0,h,m=[],g=[],v,p=!1;const d=xo.map(B=>new dh({color:B,roughness:.35,metalness:0})),y=new dh({color:1382172,roughness:.6});function _(B,xe){const ve=B/2,Oe=new Um;return Oe.moveTo(-ve+xe,-ve),Oe.lineTo(ve-xe,-ve),Oe.quadraticCurveTo(ve,-ve,ve,-ve+xe),Oe.lineTo(ve,ve-xe),Oe.quadraticCurveTo(ve,ve,ve-xe,ve),Oe.lineTo(-ve+xe,ve),Oe.quadraticCurveTo(-ve,ve,-ve,ve-xe),Oe.lineTo(-ve,-ve+xe),Oe.quadraticCurveTo(-ve,-ve,-ve+xe,-ve),new df(Oe)}const x=_(.84,.12),L=new EE(.98,.98,.98,3,.1);function C(){We(),c&&a.remove(c),v=Zt(i.n),c=new ts,m=[],g=new Array(v.slotCount);const B=new k(0,0,1);v.cubies.forEach(xe=>{const ve=new ts;ve.position.set(xe.pos[0]/2,xe.pos[1]/2,xe.pos[2]/2),ve.userData.home=ve.position.clone(),ve.add(new Fn(L,y)),xe.slots.forEach(Oe=>{const nt=v.stickers[Oe],lt=new k(...nt.normal),Ke=new Fn(x,d[nt.face]);Ke.position.copy(lt).multiplyScalar(.492),Ke.quaternion.setFromUnitVectors(B,lt),Ke.userData.slot=Oe,ve.add(Ke),g[Oe]=Ke}),m.push(ve),c.add(ve)}),a.add(c),I(i.state)}function I(B){if(B.length===g.length)for(let xe=0;xe<g.length;xe++)g[xe].material=d[B[xe]]}function F(){const B=window.matchMedia("(hover: none) and (pointer: coarse), (max-width: 600px)").matches,xe=(i.n===2?4.6:6.2)/(B?.8:1);l.up.set(0,1,0),l.position.set(xe*.75,xe*.6,xe),l.lookAt(u),M.vx=0,M.vy=0,O()}function w(){if(!r.value||!o)return;const{clientWidth:B,clientHeight:xe}=r.value;!B||!xe||(o.setSize(B,xe,!1),l.aspect=B/xe,l.updateProjectionMatrix())}const M={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},D=new Map;let Z=null,Q=!1,oe=0;const de=new Ui,J=new k,fe=new k,W=new k;function we(B,xe){const ve=o.domElement.clientHeight||1,Oe=2*Math.PI/ve;l.updateMatrixWorld(),J.setFromMatrixColumn(l.matrixWorld,0),fe.setFromMatrixColumn(l.matrixWorld,1),de.setFromAxisAngle(fe,-B*Oe),W.copy(l.position).sub(u).applyQuaternion(de),l.up.applyQuaternion(de),de.setFromAxisAngle(J.applyQuaternion(de),-xe*Oe),W.applyQuaternion(de),l.up.applyQuaternion(de).normalize(),l.position.copy(u).add(W),l.lookAt(u)}function Y(B){W.copy(l.position).sub(u);const xe=Math.min($r,Math.max(mc,W.length()*B));l.position.copy(u).add(W.setLength(xe)),O()}function O(){const B=l.position.distanceTo(u);s("zoom",100*($r-B)/($r-mc))}function $(B){if(!l||!Number.isFinite(B))return;const xe=$r-Math.min(100,Math.max(0,B))*($r-mc)/100;W.copy(l.position).sub(u).setLength(xe),l.position.copy(u).add(W),O()}function Ce(B){var Oe,nt;const xe=!window.matchMedia("(hover: none) and (pointer: coarse), (max-width: 600px)").matches,ve=OE(B.pointerType,B.button,{desktop:xe,swapMouseButtons:i.swapMouseButtons,touchMode:i.touchMode,paintable:i.paintable});if(ve){if(xe&&B.pointerType==="mouse"&&B.button===2&&B.preventDefault(),D.set(B.pointerId,{x:B.clientX,y:B.clientY}),(nt=(Oe=o.domElement).setPointerCapture)==null||nt.call(Oe,B.pointerId),ve==="move"){if(Q=!0,M.dragging=!1,M.vx=0,M.vy=0,Z=null,D.size===1&&!i.locked&&!i.touchLocked&&!i.paintable&&!p){l.updateMatrixWorld();const lt=re(B.clientX,B.clientY);if(lt){const Ke=lt.object.userData.slot,Dt=v.stickers[Ke].normal.findIndex(_t=>_t!==0),Bt=lt.point.clone().project(l),zt=[0,1,2].filter(_t=>_t!==Dt).map(_t=>{const T=new k().setComponent(_t,1).cross(lt.point),V=lt.point.clone().addScaledVector(T,.01).project(l);return{axis:_t,x:(V.x-Bt.x)*o.domElement.clientWidth,y:-(V.y-Bt.y)*o.domElement.clientHeight}});Z={pointerId:B.pointerId,x:B.clientX,y:B.clientY,slot:Ke,candidates:zt,speedMultiplier:B.pointerType==="touch"?1.5:1}}}return}if(D.size===1)Object.assign(M,{dragging:!0,lastX:B.clientX,lastY:B.clientY,lastT:performance.now(),vx:0,vy:0});else if(D.size===2){const[lt,Ke]=[...D.values()];oe=Math.hypot(lt.x-Ke.x,lt.y-Ke.y),M.dragging=!1}}}function ee(B){if(!D.has(B.pointerId))return;if(D.set(B.pointerId,{x:B.clientX,y:B.clientY}),Q){if(Z&&D.size===1&&Z.pointerId===B.pointerId){if(i.locked||i.touchLocked||i.paintable||p){Z=null;return}const lt=kE(v,Z.slot,Z.candidates,B.clientX-Z.x,B.clientY-Z.y);if(lt){const Ke=Z.speedMultiplier;Z=null,s("layerturn",lt,{speedMultiplier:Ke})}}return}if(D.size===2){const[lt,Ke]=[...D.values()],Dt=Math.hypot(lt.x-Ke.x,lt.y-Ke.y);oe&&Dt&&Y(oe/Dt),oe=Dt;return}if(!M.dragging)return;const xe=B.clientX-M.lastX,ve=B.clientY-M.lastY,Oe=performance.now(),nt=Math.max(1,Oe-M.lastT);we(xe,ve),M.vx=.6*M.vx+.4*(xe/nt*16),M.vy=.6*M.vy+.4*(ve/nt*16),Object.assign(M,{lastX:B.clientX,lastY:B.clientY,lastT:Oe})}function ce(B){var xe,ve;D.delete(B.pointerId),(ve=(xe=o.domElement).hasPointerCapture)!=null&&ve.call(xe,B.pointerId)&&o.domElement.releasePointerCapture(B.pointerId),Z=null,B.type==="pointercancel"&&(me=null,M.vx=0,M.vy=0),D.size===0&&(Q=!1,M.dragging=!1,performance.now()-M.lastT>80&&(M.vx=0,M.vy=0))}function be(B){B.preventDefault(),Y(Math.exp(B.deltaY*6e-4))}const he={level:0,phase:0,last:0};let Ne=0;function Be(B){const xe=Math.min(.1,(B-(he.last||B))/1e3);he.last=B;const ve=i.drama&&!M.dragging&&D.size===0&&B>=Ne?1:0,Oe=xe*.7;if(he.level+=Math.max(-Oe,Math.min(Oe,ve-he.level)),he.level<.001)return;he.phase+=xe*BE;const nt=he.level*he.level*(3-2*he.level),lt=o.domElement.clientHeight||1,Ke=i.dramaSpeed*lt/(2*Math.PI)*xe*nt;we(Math.cos(he.phase)*Ke,Math.sin(he.phase)*Ke)}function je(){f=requestAnimationFrame(je),!M.dragging&&(Math.abs(M.vx)>.02||Math.abs(M.vy)>.02)&&(we(M.vx,M.vy),M.vx*=.92,M.vy*=.92),Be(performance.now()),X(performance.now()),o.render(a,l)}const ot=B=>B<.5?4*B*B*B:1-(-2*B+2)**3/2;function R(B,xe,ve=1){if(p||ve>=10)return I(xe),Promise.resolve();p=!0;const Oe=B.split(" ").map(Ke=>{const Dt=rn.indexOf(Ke[0]),Bt=Ke.endsWith("2")?2:1,zt=new ts,_t=v.layerOf(Dt).map(mn=>m[mn]);return c.add(zt),_t.forEach(mn=>zt.add(mn)),{pivot:zt,layer:_t,quarters:Bt,axis:new k(...On[Dt]),angle:(Ke.endsWith("'")?1:-1)*Bt*(Math.PI/2)}}),nt=(Oe.some(Ke=>Ke.quarters===2)?420:280)/ve,lt=performance.now();return new Promise(Ke=>{const Dt=Bt=>{const zt=Math.min(1,(Bt-lt)/nt);if(Oe.forEach(_t=>_t.pivot.setRotationFromAxisAngle(_t.axis,_t.angle*ot(zt))),zt<1){requestAnimationFrame(Dt);return}Oe.forEach(_t=>{_t.layer.forEach(mn=>c.add(mn)),c.remove(_t.pivot)}),I(xe),p=!1,Ke()};requestAnimationFrame(Dt)})}let P=null;function b(){if(!P){const B=document.createElement("canvas");B.width=B.height=64;const xe=B.getContext("2d"),ve=xe.createRadialGradient(32,32,0,32,32,32);ve.addColorStop(0,"rgba(255,255,255,1)"),ve.addColorStop(.25,"rgba(255,255,255,0.6)"),ve.addColorStop(1,"rgba(255,255,255,0)"),xe.fillStyle=ve,xe.fillRect(0,0,64,64),P=new Vb(B)}return P}function X(B){if(!c||p)return;const xe=i.rumble*.045;if(xe>0){const ve=B/1e3;c.position.set(Math.sin(ve*61)*xe,Math.sin(ve*73+1)*xe,Math.sin(ve*53+2)*xe),c.rotation.z=Math.sin(ve*47)*xe*.25}else(c.position.lengthSq()>0||c.rotation.z!==0)&&(c.position.set(0,0,0),c.rotation.z=0)}const K=B=>1+2.70158*(B-1)**3+1.70158*(B-1)**2;function te(){if(p||!c)return Promise.resolve();p=!0,c.position.set(0,0,0),c.rotation.z=0;const B=(Re,ze)=>Re+Math.random()*(ze-Re),xe=m.map(Re=>{const ze=Re.userData.home.clone();return ze.lengthSq()<.01&&ze.set(B(-1,1),B(-1,1),B(-1,1)),ze.normalize().add(new k(B(-.4,.4),B(-.4,.4),B(-.4,.4))).normalize(),{g:Re,v:ze.multiplyScalar(B(3.2,7.5)),spin:new k(B(-9,9),B(-9,9),B(-9,9)),vanish:B(1.7,2.2)}}),ve=520,Oe=new Float32Array(ve*3),nt=new Float32Array(ve*3),lt=Array.from({length:ve},()=>{const Re=new k(B(-1,1),B(-1,1),B(-1,1)).normalize();return{p:new k,v:Re.multiplyScalar(B(2.5,11)),delay:B(0,.35),life:B(.6,1.7)}}),Ke=new ei;Ke.setAttribute("position",new Tn(Oe,3)),Ke.setAttribute("color",new Tn(nt,3));const Dt=new Rm({size:.26,map:b(),vertexColors:!0,transparent:!0,blending:Va,depthWrite:!1}),Bt=new Hb(Ke,Dt);Bt.frustumCulled=!1,a.add(Bt);const zt=new Am({map:b(),color:16771504,blending:Va,transparent:!0,depthWrite:!1}),_t=new zb(zt);a.add(_t);const mn=3,T=xe.map(({g:Re})=>Re.userData.home.length()*.14+B(0,.06)),V=xe.map(()=>new Ui().setFromEuler(new Qn(B(-2,2),B(-2,2),B(-2,2))));let se=!1;const ne=mn+1.4,G=performance.now();let Ae=G;return new Promise(Re=>{const ze=Ge=>{const Ye=(Ge-G)/1e3,Ze=Math.min(.05,(Ge-Ae)/1e3);if(Ae=Ge,Ye<mn){xe.forEach(qe=>{if(Ye>qe.vanish){qe.g.visible=!1;return}qe.v.multiplyScalar(1-.3*Ze),qe.v.y-=2.2*Ze,qe.g.position.addScaledVector(qe.v,Ze),qe.g.rotation.x+=qe.spin.x*Ze,qe.g.rotation.y+=qe.spin.y*Ze,qe.g.rotation.z+=qe.spin.z*Ze;const ft=Math.max(0,Math.min(1,(qe.vanish-Ye)/.4));qe.g.scale.setScalar(ft)}),lt.forEach((qe,ft)=>{const Gt=Ye-qe.delay;if(Gt<0||Gt>qe.life){nt[ft*3]=nt[ft*3+1]=nt[ft*3+2]=0;return}qe.v.multiplyScalar(1-.9*Ze),qe.v.y-=3.5*Ze,qe.p.addScaledVector(qe.v,Ze);const pt=Gt/qe.life,$e=(1-pt)**1.4,Vn=1*$e,xt=Math.max(0,.95-.85*pt)*$e,yn=Math.max(0,.55-.55*pt*1.6)*$e;Oe[ft*3]=qe.p.x,Oe[ft*3+1]=qe.p.y,Oe[ft*3+2]=qe.p.z,nt[ft*3]=Vn,nt[ft*3+1]=xt,nt[ft*3+2]=yn}),Ke.attributes.position.needsUpdate=!0,Ke.attributes.color.needsUpdate=!0;const ke=Math.min(1,Ye/.45);_t.scale.setScalar(2+14*ke),zt.opacity=(1-ke)**1.5;const it=Ye<.4?.14*(1-Ye/.4):0;c.position.set(B(-it,it),B(-it,it),B(-it,it))}else{se||(se=!0,a.remove(Bt),a.remove(_t),Ke.dispose(),Dt.dispose(),zt.dispose(),c.position.set(0,0,0),xe.forEach(({g:it})=>{it.position.copy(it.userData.home),it.scale.setScalar(1e-4),it.visible=!0}));const ke=Ye-mn;xe.forEach(({g:it},qe)=>{const ft=Math.max(0,Math.min(1,(ke-T[qe])/.55)),Gt=K(ft);it.scale.setScalar(Math.max(1e-4,Gt)),it.quaternion.copy(V[qe]).slerp(ae,Math.min(1,ft*1.15))})}if(Ye<ne){requestAnimationFrame(ze);return}xe.forEach(({g:ke})=>{ke.position.copy(ke.userData.home),ke.rotation.set(0,0,0),ke.quaternion.identity(),ke.scale.setScalar(1),ke.visible=!0}),c.position.set(0,0,0),c.rotation.z=0,I(i.state),p=!1,Re()};requestAnimationFrame(ze)})}const ae=new Ui,ge=new bE;function re(B,xe){const ve=o.domElement.getBoundingClientRect(),Oe=new Ve((B-ve.left)/ve.width*2-1,-((xe-ve.top)/ve.height)*2+1);return ge.setFromCamera(Oe,l),ge.intersectObjects(g,!1)[0]}const E=ha/3,S=ha/2,N=new Ao(1,1),q=new $a({color:0}),ie=xo.map(B=>new $a({color:B}));let j=null,Te="",ye=!1,Ee=null;const Xe=new Ui,Me=new k;function Le(B){ye!==B&&(ye=B,s("hovering",B))}function We(){var B;(B=j==null?void 0:j.parent)==null||B.remove(j),j=null,Te="",o&&Le(!1)}function Je(B){return i.n===3&&v.cubies[v.stickers[B].cubie].kind==="center"}function Pe(B){l.updateMatrixWorld(),B.getWorldQuaternion(Xe).invert();const xe=Me.setFromMatrixColumn(l.matrixWorld,0).applyQuaternion(Xe).clone(),ve=Me.setFromMatrixColumn(l.matrixWorld,1).applyQuaternion(Xe),Oe=nt=>nt>=0?1:-1;return Math.abs(xe.x)>=Math.abs(xe.y)?{swap:!1,a:Oe(xe.x),b:Oe(ve.y)}:{swap:!0,a:Oe(xe.y),b:Oe(ve.x)}}function tt(B,xe,ve){return B.swap?{x:B.b*ve,y:B.a*xe}:{x:B.a*xe,y:B.b*ve}}function st(B,xe,ve){const Oe=B.worldToLocal(xe.clone()),nt=ve.swap?ve.a*Oe.y:ve.a*Oe.x,lt=ve.swap?ve.b*Oe.x:ve.b*Oe.y,Ke=Math.min(2,Math.max(0,Math.floor((nt+ha/2)/E)));return Math.min(1,Math.max(0,Math.floor((ha/2-lt)/S)))*3+Ke}function vt(B,xe,ve,Oe,nt,lt,Ke,Dt){const{x:Bt,y:zt}=tt(xe,ve,Oe),_t=new Fn(N,Ke);_t.position.set(Bt,zt,Dt),_t.scale.set(xe.swap?lt:nt,xe.swap?nt:lt,1),B.add(_t)}function z(B,xe,ve){var Oe;(Oe=j==null?void 0:j.parent)==null||Oe.remove(j),j=new ts;for(let nt=0;nt<6;nt++){const lt=(nt%3-1)*E,Ke=(.5-Math.floor(nt/3))*S,Dt=E-.02,Bt=S-.02,zt=nt===ve;zt&&vt(j,xe,lt,Ke,Dt,Bt,q,.004);const _t=zt?zE:0;vt(j,xe,lt,Ke,Dt-2*_t,Bt-2*_t,ie[nt],.006)}B.add(j)}function Ie(B,xe){if(Ee={x:B,y:xe},!i.hoverColors||!i.paintable||i.locked||p)return We();const ve=re(B,xe);if(!ve||Je(ve.object.userData.slot))return We();const Oe=ve.object,nt=Pe(Oe),lt=st(Oe,ve.point,nt),Ke=`${Oe.userData.slot}|${lt}|${nt.swap}|${nt.a}|${nt.b}`;Le(!0),Ke!==Te&&(Te=Ke,z(Oe,nt,lt))}function ue(){Te="",Ee&&o?Ie(Ee.x,Ee.y):We()}let me=null;function Fe(B){B.pointerType==="mouse"&&B.button!==0||(me={x:B.clientX,y:B.clientY})}function Ue(B){if(B.type==="pointercancel"||i.locked){me=null;return}if(!i.paintable||!me)return;const xe=Math.hypot(B.clientX-me.x,B.clientY-me.y);if(me=null,xe>5)return;const ve=re(B.clientX,B.clientY);if(!ve)return;const Oe=ve.object.userData.slot;if(i.hoverColors){if(Je(Oe))return;s("paint",Oe,st(ve.object,ve.point,Pe(ve.object)))}else s("paint",Oe)}let rt=0;function Ft(B,xe,ve){const Oe=v.stickers[B],nt=Oe.normal.findIndex(ne=>ne!==0),lt=[0,1,2].filter(ne=>ne!==nt);l.updateMatrixWorld();const Ke=new k().setFromMatrixColumn(l.matrixWorld,0),Dt=new k().setFromMatrixColumn(l.matrixWorld,1),Bt=Math.abs(Ke.getComponent(lt[0]))>=Math.abs(Ke.getComponent(lt[1]))?lt[0]:lt[1],zt=ve?lt.find(ne=>ne!==Bt):Bt,_t=new k;_t.setComponent(zt,1);const mn=new k(...Oe.pos).multiplyScalar(.5).add(new k(...Oe.normal).multiplyScalar(.5)),T=_t.clone().cross(mn),se=((ve?T.dot(Ke):-T.dot(Dt))>=0?1:-1)*xe;return Gm(v,B,zt,se)}function Kt(B){if(i.paintable)return;const xe=re(B.clientX,B.clientY);if(!xe||(B.preventDefault(),B.stopPropagation(),i.locked||p)||(rt+=B.deltaY||B.deltaX,Math.abs(rt)<40))return;const ve=Math.sign(rt);rt=0,s("layerturn",Ft(xe.object.userData.slot,ve,B.altKey))}function yt(B){Ie(B.clientX,B.clientY)}function xn(){Ee=null,We()}function Hn(B){window.matchMedia("(hover: none) and (pointer: coarse), (max-width: 600px)").matches||B.preventDefault()}bo(()=>{o=new Ob({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new kb,l=new Dn(36,1,.1,100),a.add(new SE(16777215,1.1));const B=new mh(16777215,2);B.position.set(5,8,6),a.add(B);const xe=new mh(16777215,.8);xe.position.set(-6,-3,-5),a.add(xe),o.domElement.addEventListener("pointerdown",Ce),o.domElement.addEventListener("pointermove",ee),o.domElement.addEventListener("pointermove",yt),o.domElement.addEventListener("pointerleave",xn),o.domElement.addEventListener("pointerup",ce),o.domElement.addEventListener("pointercancel",ce),o.domElement.addEventListener("wheel",be,{passive:!1}),o.domElement.addEventListener("pointerdown",Fe),o.domElement.addEventListener("pointerup",Ue),o.domElement.addEventListener("pointercancel",Ue),o.domElement.addEventListener("contextmenu",Hn),r.value.addEventListener("wheel",Kt,{capture:!0,passive:!1}),C(),F(),w(),h=new ResizeObserver(w),h.observe(r.value),je()}),Is(()=>{cancelAnimationFrame(f),h==null||h.disconnect(),o==null||o.dispose()}),Lt(()=>i.n,()=>{C(),F()}),Lt(()=>i.state,B=>{p||I(B)}),Lt(()=>[i.hoverColors,i.paintable,i.locked],ue),Lt(()=>[i.touchMode,i.swapMouseButtons],()=>{Z=null,M.dragging=!1,M.vx=0,M.vy=0});function Po(B,xe){if(!(!l||!o))if(Ne=performance.now()+100,M.vx=0,M.vy=0,B==="zoom-in"||B==="zoom-out")Y(Math.exp((B==="zoom-in"?-1:1)*xe));else{const ve=o.domElement.clientHeight*xe/6;we(B==="cube-left"?-ve:B==="cube-right"?ve:0,B==="cube-up"?-ve:B==="cube-down"?ve:0)}}function Lo(B,xe){l.updateMatrixWorld();const ve=l.position.clone().sub(u).normalize().toArray(),Oe=new k().setFromMatrixColumn(l.matrixWorld,0).toArray();return NE(ve,Oe)[B]+xe}return e({animate:R,resetView:F,explode:te,gamepadView:Po,viewRelativeMove:Lo,setZoom:$}),(B,xe)=>(pe(),_e("div",{ref_key:"host",ref:r,class:Pt(["cube-host",{painting:n.paintable}])},null,2))}},VE=An(HE,[["__scopeId","data-v-e19fd09e"]]),GE={class:"panel about"},WE="https://github.com/sterudo/RubriksSolver",Sh="https://sterudo.github.io/RubriksSolver/",$E={__name:"AboutPanel",setup(n){const e="0.1.4",t="2026-10-15";return(i,s)=>(pe(),_e("section",GE,[s[5]||(s[5]=A("h2",null,"About Rubik's Solver",-1)),s[6]||(s[6]=A("p",{class:"note"},"Learn, teach and solve 2x2 and 3x3 Rubik's cubes right in your browser.",-1)),A("dl",null,[s[0]||(s[0]=A("dt",null,"Author",-1)),s[1]||(s[1]=A("dd",null,"Stephan Rudolph (and GitHub Copilot)",-1)),s[2]||(s[2]=A("dt",null,"Source code",-1)),A("dd",null,[A("a",{href:WE,target:"_blank",rel:"noopener"},"sterudo/RubriksSolver")]),s[3]||(s[3]=A("dt",null,"Live app",-1)),A("dd",null,[A("a",{href:Sh,target:"_blank",rel:"noopener"},Se(Sh))]),s[4]||(s[4]=A("dt",null,"Version",-1)),A("dd",null,[et(Se(H(e))+" ",1),A("small",null,"(built "+Se(H(t))+")",1)])]),s[7]||(s[7]=Wv("<h3 data-v-e2aa5302>Tech stack</h3><ul data-v-e2aa5302><li data-v-e2aa5302><strong data-v-e2aa5302>Vue 3</strong> - reactive UI (Composition API, single-file components)</li><li data-v-e2aa5302><strong data-v-e2aa5302>three.js</strong> - interactive 3D cube, animations and explosion effects</li><li data-v-e2aa5302><strong data-v-e2aa5302>Vite</strong> - dev server and static build that runs from any folder</li><li data-v-e2aa5302><strong data-v-e2aa5302>Vitest</strong> - unit tests for the cube model, solver and vision code</li><li data-v-e2aa5302>Plain JavaScript solver, no backend - everything runs locally in the browser</li><li data-v-e2aa5302>Optional AI tutor via Gemini or a local model (LM Studio / Ollama)</li></ul><h3 data-v-e2aa5302>Main features</h3><ul data-v-e2aa5302><li data-v-e2aa5302>One-file settings backup and tolerant restore, including API keys, saved positions, gamepad profiles and all saved app preferences, including left/right mouse drag swapping, playback speed and camera rotation speed</li><li data-v-e2aa5302>2x2 and 3x3 cubes with a free drag-and-spin 3D view, pinch/wheel zoom and a synced mobile zoom slider</li><li data-v-e2aa5302>Layer turns by mouse, wheel, gamepad, touch or keyboard, and undo for manual turns, solution moves or individual sticker changes in Paint stickers mode; desktop Undo beside View, or Backspace while the cube frame is focused</li><li data-v-e2aa5302>Desktop right-button sticker swipes turn layers; a checkbox below the cube swaps left/right layer-turn and view-rotation drags without changing touch controls or left-click painting</li><li data-v-e2aa5302>Mobile: full-width cube with an adjustable-height slider and a 20% smaller starting view, hamburger navigation, header Quick Solve, always-visible Reset/Scramble/Solve controls (Solve advances one computed move), and synced Rotate/Move controls for view rotation or 50% faster swipe turns</li><li data-v-e2aa5302>Xbox-style gamepad controls with modifiers, view-relative face turns, configurable thresholds, named profiles, Save As, browser storage and JSON import/export</li><li data-v-e2aa5302>Set up any position: paint stickers on the cube or the flat net, scramble, or import from two photos</li><li data-v-e2aa5302>Live validity check telling you whether a position is solvable</li><li data-v-e2aa5302>Step-by-step solver that explains every stage, with play/pause, speed and keyboard control</li><li data-v-e2aa5302>Switching to Solve finishes sticker painting and automatically finds a solution for a valid position</li><li data-v-e2aa5302>Learn lessons and Practice tests, with a built-in or AI tutor</li><li data-v-e2aa5302>Fullscreen mode, Extra drama camera, countdown and cube explosion finale, and one-click Quick Solve</li><li data-v-e2aa5302>Save and load named positions across cube sizes, with JSON import/export and copy/paste position codes; resizable cube frame and draggable panel divider</li></ul>",4))]))}},XE=An($E,[["__scopeId","data-v-e2aa5302"]]),In={yellowCross:xs("F R U R' U' F'"),sune:xs("R U R' U R U2 R'"),antiSune:xs("R U2 R' U' R U' R'"),cornerCycle:xs("R' F R' B2 R F' R' B2 R2"),edgeCycle:xs("R U' R U R U R U' R' U' R2"),tPerm:xs("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:xs("F R U' R' U' R U R' F' R U R' U' R' F R F'")},or=In,qE={U:0,R:1,F:2,D:3,L:4,B:5};function Wm(n,e){return e.map(t=>{const i=n.moves[t],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:t,perm:i,inv:s,face:qE[t[0]]}})}const YE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],KE=["U","U2","U'","R","R2","R'","F","F2","F'"];function jE(n,e,t,i){const s=g=>g.join(","),r=s(e),o=s(t);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let u=[e],c=[t],f=0,h=0;const m=g=>{const v=[];for(let d=g;a.get(d).prev!==null;d=a.get(d).prev)v.push(a.get(d).move);v.reverse();const p=[];for(let d=g;l.get(d).next!==null;d=l.get(d).next)p.push(l.get(d).move);return[...v,...p].map(d=>n[d].name)};for(;f+h<i&&(u.length||c.length);)if(u.length&&(u.length<=c.length||!c.length)){const v=[];for(const p of u){const d=s(p),y=a.get(d);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const L=p.map(I=>x.perm[I]),C=s(L);if(!a.has(C)){if(a.set(C,{prev:d,move:_,face:x.face}),l.has(C))return m(C);v.push(L)}}}u=v,f++}else{const v=[];for(const p of c){const d=s(p),y=l.get(d);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const L=p.map(I=>x.inv[I]),C=s(L);if(!l.has(C)){if(l.set(C,{next:d,move:_,face:x.face}),a.has(C))return m(C);v.push(L)}}}c=v,h++}return null}function JE(n,e,t){const i=n.cubies[t].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>e[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const mf=(n,e,t)=>n.cubies[t].slots.every(i=>e[i]===n.stickers[i].face);function Eu(n,e,t,i,s,r,o,a){const l=[];let u=e,c=[...t],f=[...i];for(;f.length;){let h=null;for(const m of f){if(m.cubies.every(y=>mf(n,u,y))){h={target:m,moves:[]};break}const g=[...c,...m.cubies].flatMap(y=>n.cubies[y].slots),v=[...c.flatMap(y=>n.cubies[y].slots),...m.cubies.flatMap(y=>JE(n,u,y))],p=h?h.moves.length-1:a;if(p<1)continue;const d=jE(r,v,g,p);d&&(!h||d.length<h.moves.length)&&(h={target:m,moves:d})}if(!h)throw new Error("No solution found for a piece - is the cube state valid?");for(const m of h.moves)u=Co(u,n.moves[m]);l.push({label:o(h.target),moves:h.moves}),c=[...c,...h.target.cubies],f=f.filter(m=>m!==h.target)}return{state:u,steps:l}}function ZE(n,e,t,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:e,moves:[]}]],a=new Set([r(e)]);if(i(e))return[];for(let l=0;l<=s;l++){const u=o[l];if(u)for(const c of u)for(const f of t){let h=c.state;for(const p of f.moves)h=Co(h,n.moves[p]);const m=r(h);if(a.has(m))continue;a.add(m);const g=l+f.moves.length,v={state:h,moves:[...c.moves,f.label]};if(i(h))return QE(v.moves,t);(o[g]||(o[g]=[])).push(v)}}return null}function QE(n,e){const t=new Map(e.map(i=>[i.label,i]));return n.map(i=>t.get(i))}const hr=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],Xn=(n,e)=>({label:n,moves:e,isAlg:!0});function ew(n,e){const t=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}t.push({label:e(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&t.push({label:"Turn the top layer to line it up",moves:i}),t}const $m=_o,wu=n=>n[0].toUpperCase()+n.slice(1);function pr(n,e,t,i,s){const r=ZE(n,e,t,i);if(!r)throw new Error("Could not finish the last layer - is the cube state valid?");const o=ew(r,s);let a=e;for(const l of o)for(const u of l.moves)a=Co(a,n.moves[u]);return{state:a,steps:o}}const Xm=n=>n.flatMap(e=>e.moves);function qm(n,e,t={}){const i=pf(n,e);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return e===2?nw(n,i.canonical,t):tw(n,t)}catch(s){return{ok:!1,error:s.message}}}function Aa(n,e,t){return n.cubies[e].slots.map(i=>t[n.stickers[i].face]).join("-")}function tw(n,e){const t=e.names||$m,i=Zt(3),s=Wm(i,YE),r=(L,C,I)=>i.cubies.findIndex(F=>F.pos[0]===L&&F.pos[1]===C&&F.pos[2]===I),o=[];let a=n;const l=(L,C)=>o.push({id:L,steps:C,moves:Xm(C)}),u=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(L=>({cubies:[r(...L)]}));let c=Eu(i,a,[],u,t,s,L=>`${wu(Aa(i,L.cubies[0],t))} edge`,9);a=c.state,l("cross",c.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(L=>({cubies:L.map(C=>r(...C))})),h=u.flatMap(L=>L.cubies);c=Eu(i,a,h,f,t,s,L=>`${wu(Aa(i,L.cubies[0],t))} corner + ${Aa(i,L.cubies[1],t)} edge`,11),a=c.state,l("f2l",c.steps);const m=i.cubies.map((L,C)=>({c:L,i:C})).filter(({c:L})=>L.pos[1]===2),g=m.filter(({c:L})=>L.kind==="edge").map(({c:L})=>L.slots[0]),v=m.filter(({c:L})=>L.kind==="corner").map(({i:L})=>L),p=i.stickers.map((L,C)=>L.face===0?C:-1).filter(L=>L>=0),d=L=>g.every(C=>L[C]===0),y=L=>p.every(C=>L[C]===0),_=L=>v.every(C=>mf(i,L,C)),x=L=>i.stickers.every((C,I)=>L[I]===C.face);return c=pr(i,a,[...hr,Xn("yellow cross",In.yellowCross)],d,()=>`Make the ${t[0]} cross`),a=c.state,l("ollCross",c.steps),c=pr(i,a,[...hr,Xn("sune",In.sune),Xn("antisune",In.antiSune)],y,L=>L.label==="sune"?`Sune: twist corners (${t[0]} face)`:`Anti-Sune: twist corners (${t[0]} face)`),a=c.state,l("ollFace",c.steps),c=pr(i,a,[...hr,Xn("corner cycle",In.cornerCycle),Xn("corner cycle inverse",Ya(In.cornerCycle))],_,()=>"Cycle three corners into place"),a=c.state,l("pllCorners",c.steps),c=pr(i,a,[...hr,Xn("edge cycle",In.edgeCycle),Xn("edge cycle inverse",Ya(In.edgeCycle))],x,()=>"Cycle three edges into place"),a=c.state,l("pllEdges",c.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(L=>L.moves)}}function nw(n,e,t){const i=Zt(2),s=Wm(i,KE),r=e.state,o=t.names||$m,a=[];e.map.forEach((d,y)=>{a[d]=o[y]});const l=(d,y,_)=>i.cubies.findIndex(x=>x.pos[0]===d&&x.pos[1]===y&&x.pos[2]===_),u=[];let c=r;const f=(d,y)=>u.push({id:d,steps:y,moves:Xm(y)}),h=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(d=>({cubies:[l(...d)]}));let m=Eu(i,c,[l(-1,-1,-1)],h,a,s,d=>`${wu(Aa(i,d.cubies[0],a))} corner`,11);c=m.state,f("layer",m.steps);const g=i.stickers.map((d,y)=>d.face===0?y:-1).filter(d=>d>=0),v=d=>g.every(y=>d[y]===0),p=d=>i.stickers.every((y,_)=>d[_]===y.face);return m=pr(i,c,[...hr,Xn("sune",In.sune),Xn("antisune",In.antiSune)],v,d=>d.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),c=m.state,f("orient",m.steps),m=pr(i,c,[...hr,Xn("swap neighbours",In.tPerm),Xn("swap diagonal",In.yPerm)],p,d=>d.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),c=m.state,f("permute",m.steps),{ok:!0,n:2,stages:u,moves:u.flatMap(d=>d.moves)}}function iw(n,e){const t=Zt(e),i=pf(n,e);if(!i.ok)return[];const s=e===2?i.canonical.state:n,r=c=>mf(t,s,c),o=t.cubies.map((c,f)=>({c,i:f})),a=c=>o.filter(({c:f})=>c(f)).map(({i:f})=>f),l=t.stickers.every((c,f)=>c.face!==0||s[f]===0),u=t.stickers.every((c,f)=>s[f]===c.face);return e===2?[{id:"layer",done:a(c=>c.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:u}]:[{id:"cross",done:a(c=>c.pos[1]===-2&&c.kind==="edge").every(r)},{id:"f2l",done:a(c=>c.pos[1]<=0&&c.kind!=="center").every(r)},{id:"ollCross",done:a(c=>c.pos[1]===2&&c.kind==="edge").every(c=>s[t.cubies[c].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(c=>c.pos[1]===2&&c.kind==="corner").every(r)},{id:"pllEdges",done:u}]}const sw=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],rw=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other - they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first - learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],Ym={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:or.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:or.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:or.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:or.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:or.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:or.tPerm}]};function Tu(n,e){return Ym[n].find(t=>t.id===e)}function bh(n,e,t,i){const s=localStorage.getItem(`rubiks-solver.${n}`),r=s!=null&&s.trim()?Number(s):NaN;return Number.isFinite(r)&&r>=t&&r<=i?r:e}const U=vn({n:3,mode:"setup",editing:!1,brush:0,speed:bh("speed",1,.5,4),swapMouseButtons:localStorage.getItem("rubiks-solver.swapMouseButtons")==="1",settingsError:"",playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",dramaSpeed:bh("dramaSpeed",.32,.05,1.2),finale:localStorage.getItem("rubiks-solver.finale")==="1",fullscreenOnPlay:!1,quickSolveRequest:!1,showAllColorsOnHover:!1,countdown:0,exploding:!1,busy:!1,solving:!1,solution:null,pointer:0,solveError:"",moveCount:0});for(const[n,e,t]of[["speed",.5,4],["dramaSpeed",.05,1.2],["swapMouseButtons"]])Lt(()=>U[n],i=>{if(!(n!=="swapMouseButtons"&&(!Number.isFinite(i)||i<e||i>t)))try{localStorage.setItem(`rubiks-solver.${n}`,n==="swapMouseButtons"?i?"1":"0":String(i)),U.settingsError=""}catch{U.settingsError="Could not save mouse or playback preferences. Browser storage may be unavailable or full."}},{flush:"sync"});const $t=Vg(xl(3));let Au=null,Ca=null,kn=Promise.resolve();const Cu=new Set,ki=vn([]),Bs=vn([]);function ow(n){Au=n}function aw(n){Ca=n}function lw(n){return Cu.add(n),()=>Cu.delete(n)}const ai=wt(()=>pf($t.value,U.n)),Ka=wt(()=>LE($t.value,U.n)),cw=wt(()=>iw($t.value,U.n)),Eh=wt(()=>!U.busy&&!U.playing&&!U.solving&&!U.exploding&&(U.editing?Bs.length>0:U.solution?U.pointer>0:ki.length>0));let Ra=0;const uw=n=>new Promise(e=>setTimeout(e,n));async function fw(){const n=++Ra;for(const e of[3,2,1]){if(n!==Ra)return;U.countdown=e,await uw(1e3)}if(n===Ra){U.countdown=0,U.exploding=!0;try{await(Ca==null?void 0:Ca())}finally{U.exploding=!1}}}function yo(){Ra++,U.countdown=0}function Ro(){yo(),U.solution=null,U.pointer=0,U.solveError=""}function gf(n){return kn=kn.then(()=>{ki.length=0,Bs.length=0,$t.value=n,Ro(),U.moveCount=0}),kn}function Km(n,e){return kn=kn.then(()=>{ki.length=0,Bs.length=0,$t.value=e,U.n=n,U.editing=!1,U.brush=0,Ro(),U.moveCount=0}),kn}function wh(n){return Km(n,xl(n))}function ja(){return gf(xl(U.n))}function Ja(){const n=IE(U.n);return gf(PE(xl(U.n),U.n,n)).then(()=>n)}function Ru(n,e=U.brush){const t=Zt(U.n);if(t.cubies[t.stickers[n].cubie].kind==="center"&&U.n===3||$t.value[n]===e)return;Bs.push({slot:n,color:$t.value[n]});const i=Uint8Array.from($t.value);i[n]=e,$t.value=i,ki.length=0,Ro()}function pi(n,{animate:e=!0,fromSolution:t=!1,recordHistory:i=!0,speedMultiplier:s=1}={}){return U.exploding||(kn=kn.then(async()=>{Bs.length=0;const r=n.split(" ").reduce((o,a)=>RE(o,U.n,a),$t.value);U.busy=!0;try{e&&Au&&await Au(n,r,U.speed*s)}finally{U.busy=!1}$t.value=r,t||(Ro(),U.moveCount=Math.max(0,U.moveCount+(i?1:-1)),i&&ki.push(n)),Cu.forEach(o=>o(n))})),kn}function Th(n,e){return n.forEach(t=>pi(t,e)),kn}async function dw(n){const e=n==="solve"&&U.mode!=="solve";if(e&&(U.editing=!1),U.mode=n,!!e&&(await kn,!(U.mode!=="solve"||U.editing||!ai.value.ok||U.playing||U.solving||U.exploding||U.quickSolveRequest)))return Za()}async function Za(){if(U.solving)return null;U.solving=!0,U.solveError="";try{await new Promise(e=>setTimeout(e,20));const n=qm($t.value,U.n);return n.ok?(U.solution=n,U.pointer=0,ki.length=0,Bs.length=0,n):(U.solution=null,U.solveError=n.error,null)}finally{U.solving=!1}}async function gc(){if(U.busy||U.playing||U.solving||U.exploding)return;if(U.editing){const t=Bs.pop();if(!t)return;const i=Uint8Array.from($t.value);i[t.slot]=t.color,$t.value=i,Ro();return}if(U.solution)return Pa();const n=ki[ki.length-1];if(!n)return;const e=n.split(" ").reverse().map(hf).join(" ");await pi(e,{recordHistory:!1}),ki.pop()}function Qa(){const n=U.solution;if(!n)return[];const e=[];return n.stages.forEach((t,i)=>{t.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>e.push({move:o,stage:i,step:r,index:a}))})}),e}async function ur(){yo();const n=Qa();if(U.pointer>=n.length)return;const e=n[U.pointer];U.pointer++,await pi(e.move,{fromSolution:!0})}async function Pa(){yo();const n=Qa();U.pointer<=0||(U.pointer--,await pi(hf(n[U.pointer].move),{fromSolution:!0}))}const hw={class:"panel"},pw={class:"notation"},mw=["onClick"],gw={class:"lessons"},vw={class:"lesson-title"},_w={class:"goal"},xw={key:0,class:"tip"},yw={key:1,class:"alg"},Mw=["onClick"],Sw=["onClick"],bw={__name:"LearnPanel",setup(n){return(e,t)=>(pe(),_e("section",hw,[t[0]||(t[0]=A("h2",null,"Learn to solve",-1)),t[1]||(t[1]=A("h3",null,"Notation",-1)),A("ul",pw,[(pe(!0),_e(ht,null,Ot(H(sw),i=>(pe(),_e("li",{key:i.move},[A("button",{onClick:s=>H(pi)(i.move)},Se(i.move),9,mw),A("span",null,Se(i.text),1)]))),128))]),(pe(!0),_e(ht,null,Ot(H(rw),i=>(pe(),_e("details",{key:i.title,class:"concept"},[A("summary",null,Se(i.title),1),(pe(!0),_e(ht,null,Ot(i.body,(s,r)=>(pe(),_e("p",{key:r},Se(s),1))),128))]))),128)),A("h3",null,"The "+Se(H(U).n)+"×"+Se(H(U).n)+" method - layer by layer",1),A("ol",gw,[(pe(!0),_e(ht,null,Ot(H(Ym)[H(U).n],i=>(pe(),_e("li",{key:i.id},[A("div",vw,Se(i.title),1),A("div",_w,"Goal: "+Se(i.goal),1),A("p",null,Se(i.concept),1),i.tip?(pe(),_e("p",xw,"💡 "+Se(i.tip),1)):at("",!0),i.algorithm?(pe(),_e("div",yw,[A("code",null,Se(i.algorithm.join(" ")),1),A("button",{onClick:s=>H(Th)(i.algorithm)},"Try",8,Mw),A("button",{onClick:s=>H(Th)(H(Ya)(i.algorithm))},"Undo",8,Sw)])):at("",!0)]))),128))]),t[2]||(t[2]=A("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left - scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},Ew=An(bw,[["__scopeId","data-v-87ccc88b"]]),ww={class:"movepad"},Tw={class:"pad"},Aw=["disabled","onClick"],Cw={__name:"MovePad",setup(n){const e=["U","D","L","R","F","B"];return(t,i)=>(pe(),_e("details",ww,[i[0]||(i[0]=A("summary",null,"Move Pad",-1)),A("div",Tw,[(pe(),_e(ht,null,Ot(e,s=>A("div",{key:s,class:"group"},[(pe(!0),_e(ht,null,Ot([s,`${s}'`,`${s}2`],r=>(pe(),_e("button",{key:r,disabled:H(U).editing,onClick:o=>H(pi)(r)},Se(r),9,Aw))),128))])),64))])]))}},Rw=An(Cw,[["__scopeId","data-v-494e6f75"]]),Pw={class:"panel"},Lw={class:"row"},Iw=["disabled"],Dw=["disabled"],Uw={key:0,class:"timer"},Nw={key:0,class:"status ok"},Fw={key:1,class:"check"},Ow={class:"box"},kw={key:2,class:"hint-box"},Bw={key:0,class:"hint-move"},zw={class:"move"},Hw={class:"note"},Vw={class:"row"},Gw={key:0},Ww={key:3,class:"quiz"},$w={class:"target"},Xw={class:"move big"},qw={class:"note"},Yw={__name:"PracticePanel",setup(n){const e=He(!1),t=He(!1),i=He(0),s=He(0),r=He(null);let o=0;const a=wt(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){C(),await Ja(),e.value=!0,t.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function u(){clearInterval(o),e.value=!1}function c(){u(),r.value=null}function f(){const I=qm($t.value,U.n);if(!I.ok){r.value={stage:"Hint unavailable",goal:I.error,concept:"",move:"",label:""};return}const F=I.stages.find(M=>M.moves.length);if(!F)return;s.value++;const w=Tu(U.n,F.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:F.steps[0].moves[0],label:F.steps[0].label}}Lt(Ka,I=>{I&&e.value&&U.moveCount>0&&(u(),t.value=!0,r.value=null)});const h=He(!1),m=He(""),g=He(0),v=He(0),p=He(0),d=He("Use the move pad or keyboard.");let y=!1,_=null;function x(){const I=CE();m.value=I[Math.floor(Math.random()*I.length)]}function L(){if(h.value){C();return}u(),h.value=!0,g.value=v.value=p.value=0,d.value="Use the move pad or keyboard.",x(),_=lw(async I=>{y||(v.value++,I===m.value?(g.value++,p.value++,d.value="Correct!"):(p.value=0,d.value=`That was ${I}; ${m.value} was asked. Look at which face turns and which way.`),y=!0,await pi(Ya(I.split(" ")).join(" ")),y=!1,x())})}function C(){h.value=!1,_==null||_(),_=null}return Is(()=>{clearInterval(o),C()}),(I,F)=>(pe(),_e("section",Pw,[F[2]||(F[2]=A("h2",null,"Practice & test",-1)),F[3]||(F[3]=A("h3",null,"Solve it yourself",-1)),F[4]||(F[4]=A("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),A("div",Lw,[A("button",{class:"primary",onClick:l},Se(e.value||t.value?"New challenge":"Start challenge"),1),A("button",{disabled:!e.value,onClick:f},"Hint",8,Iw),A("button",{disabled:!e.value,onClick:c},"Give up",8,Dw),e.value||t.value?(pe(),_e("span",Uw,"⏱ "+Se(a.value)+" · "+Se(H(U).moveCount)+" moves · "+Se(s.value)+" hints",1)):at("",!0)]),t.value?(pe(),_e("p",Nw," Solved in "+Se(a.value)+" with "+Se(H(U).moveCount)+" moves and "+Se(s.value)+" hint"+Se(s.value===1?"":"s")+". 🎉 ",1)):at("",!0),e.value||t.value?(pe(),_e("ul",Fw,[(pe(!0),_e(ht,null,Ot(H(cw),w=>(pe(),_e("li",{key:w.id,class:Pt({done:w.done})},[A("span",Ow,Se(w.done?"✓":""),1),et(" "+Se(H(Tu)(H(U).n,w.id).title),1)],2))),128))])):at("",!0),r.value?(pe(),_e("div",kw,[A("div",null,[A("b",null,Se(r.value.stage),1),et(" - "+Se(r.value.goal),1)]),r.value.move?(pe(),_e("div",Bw,[F[0]||(F[0]=et(" Next move: ",-1)),A("span",zw,Se(r.value.move),1),A("small",null,"("+Se(r.value.label)+")",1)])):at("",!0),A("p",Hw,Se(r.value.concept),1)])):at("",!0),F[5]||(F[5]=A("h3",null,"Notation quiz",-1)),A("div",Vw,[A("button",{class:Pt({primary:h.value}),onClick:L},Se(h.value?"Stop quiz":"Start quiz"),3),h.value?(pe(),_e("span",Gw,"Score "+Se(g.value)+" / "+Se(v.value)+" · streak "+Se(p.value),1)):at("",!0)]),h.value?(pe(),_e("div",Ww,[A("div",$w,[F[1]||(F[1]=et("Perform ",-1)),A("span",Xw,Se(m.value),1)]),A("p",qw,Se(d.value),1)])):at("",!0)]))}},Kw=An(Yw,[["__scopeId","data-v-163bdc66"]]),jm="rubiks-solver.saves";function Pu(n,e){const{faceGrid:t}=Zt(e);return rn.map(i=>t[i].flat().map(s=>rn[n[s]]).join("")).join("")}function Lu(n){const e=String(n).replace(/\s+/g,"").toUpperCase(),t=e.length===54?3:e.length===24?2:0;if(!t)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${e.length}.`);const i=[...e].find(a=>!rn.includes(a));if(i)throw new Error(`"${i}" is not a face letter - use only U, R, F, D, L, B.`);const{faceGrid:s}=Zt(t),r=new Uint8Array(Zt(t).slotCount),o=t*t;return rn.forEach((a,l)=>{s[a].flat().forEach((u,c)=>{r[u]=rn.indexOf(e[l*o+c])})}),{n:t,state:r}}function jw({name:n,n:e,state:t}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:e,facelets:Pu(t,e),savedAt:new Date().toISOString()},null,2)}function vc(n){const e=String(n).trim();if(e.startsWith("{")){let t;try{t=JSON.parse(e)}catch{throw new Error("The file is not valid JSON.")}if(typeof t.facelets!="string")throw new Error("The file has no cube position in it.");const i=Lu(t.facelets);if(t.n&&t.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof t.name=="string"?t.name:""}}return{...Lu(e),name:""}}function Jw(){try{const n=JSON.parse(localStorage.getItem(jm)||"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e.facelets=="string"):[]}catch{return[]}}function Zw(n){try{return localStorage.setItem(jm,JSON.stringify(n)),!0}catch{return!1}}const Qw={class:"saveload"},e1={class:"row"},t1=["placeholder"],n1={key:0,class:"saved"},i1=["title"],s1=["onClick"],r1=["onClick"],o1={key:1,class:"note"},a1={class:"row"},l1={class:"file-btn"},c1={class:"row"},u1=["disabled"],f1={__name:"SaveLoad",setup(n){const e=vn(Jw()),t=He(""),i=He(""),s=He(""),r=He(!1);Lt(e,()=>Zw([...e]),{deep:!0});const o=wt(()=>`${U.n}×${U.n} position ${e.filter(d=>d.n===U.n).length+1}`);function a(d,y=!1){s.value=d,r.value=y}const l=d=>new Date(d).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function u(){const d=t.value.trim()||o.value,y=Pu($t.value,U.n),_=e.find(x=>x.name===d&&x.n===U.n);_?(_.facelets=y,_.savedAt=new Date().toISOString()):e.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:d,n:U.n,facelets:y,savedAt:new Date().toISOString()}),t.value="",a(`${_?"Updated":"Saved"} "${d}".`)}async function c(d,y){await Km(d.n,d.state),a(`Loaded ${y}.`)}function f(d){try{c(vc(d.facelets),`"${d.name}"`)}catch(y){a(y.message,!0)}}function h(d){e.splice(e.indexOf(d),1),a(`Deleted "${d.name}".`)}function m(){const d=t.value.trim()||o.value,y=new Blob([jw({name:d,n:U.n,state:$t.value})],{type:"application/json"}),_=URL.createObjectURL(y),x=document.createElement("a");x.href=_,x.download=`${d.replace(/[^\w\-. ]+/g,"_")}.cube.json`,x.click(),URL.revokeObjectURL(_),a(`Exported "${d}".`)}async function g(d){var _;const y=(_=d.target.files)==null?void 0:_[0];if(d.target.value="",!!y)try{const x=vc(await y.text());await c(x,x.name?`"${x.name}"`:y.name)}catch(x){a(x.message,!0)}}async function v(){const d=Pu($t.value,U.n);try{await navigator.clipboard.writeText(d),a("Position code copied to the clipboard.")}catch{i.value=d,a("Clipboard not available - the code is in the box below, copy it from there.")}}function p(){try{c(vc(i.value),"the pasted code"),i.value=""}catch(d){a(d.message,!0)}}return(d,y)=>(pe(),_e("details",Qw,[y[3]||(y[3]=A("summary",null,"Save / load position",-1)),A("div",e1,[Nt(A("input",{"onUpdate:modelValue":y[0]||(y[0]=_=>t.value=_),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:Ha(u,["enter"])},null,40,t1),[[hn,t.value]]),A("button",{class:"primary",onClick:u},"Save")]),e.length?(pe(),_e("ul",n1,[(pe(!0),_e(ht,null,Ot(e,_=>(pe(),_e("li",{key:_.id},[A("span",{class:"title",title:_.name},Se(_.name),9,i1),A("small",null,Se(_.n)+"×"+Se(_.n)+" · "+Se(l(_.savedAt)),1),A("button",{onClick:x=>f(_)},"Load",8,s1),A("button",{title:"Delete",onClick:x=>h(_)},"✕",8,r1)]))),128))])):(pe(),_e("p",o1,"No saved positions yet. Saves stay in this browser.")),A("div",a1,[A("button",{onClick:m},"Export file"),A("label",l1,[y[2]||(y[2]=et(" Import file ",-1)),A("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),A("button",{onClick:v},"Copy code")]),A("div",c1,[Nt(A("input",{"onUpdate:modelValue":y[1]||(y[1]=_=>i.value=_),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:Ha(p,["enter"])},null,544),[[hn,i.value]]),A("button",{disabled:!i.value.trim(),onClick:p},"Load code",8,u1)]),s.value?(pe(),_e("p",{key:2,class:Pt(["msg",{bad:r.value}]),role:"status"},Se(s.value),3)):at("",!0)]))}},d1=An(f1,[["__scopeId","data-v-6818c29d"]]),h1=["title","onClick"],p1={class:"tag"},m1={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:e}){const t=n,i=e,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=wt(()=>Zt(t.n)),o=wt(()=>r.value.faceGrid),a=l=>t.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,u)=>(pe(),_e("div",{class:Pt(["net",`n${n.n}`])},[(pe(),_e(ht,null,Ot(s,c=>A("div",{key:c.name,class:"face",style:di({gridColumn:c.col,gridRow:c.row})},[(pe(!0),_e(ht,null,Ot(o.value[c.name],(f,h)=>(pe(),_e("div",{key:h,class:"nrow"},[(pe(!0),_e(ht,null,Ot(f,(m,g)=>(pe(),_e("button",{key:g,class:Pt(["cell",{locked:a(m)}]),style:di({background:H(xo)[n.state[m]]}),title:`${c.name} ${h+1},${g+1}`,onClick:v=>i("paint",m)},null,14,h1))),128))]))),128)),A("span",p1,Se(c.name),1)],4)),64))],2))}},g1=An(m1,[["__scopeId","data-v-0063ed3b"]]),Jm="rubiks-solver.ai",yl=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],el={provider:"builtin",geminiKey:"",geminiModel:yl[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function v1(){let n={};try{n=JSON.parse(localStorage.getItem(Jm)||"{}")}catch{}const e={...el,...n};return yl.includes(e.geminiModel)||(e.geminiModel=el.geminiModel),e}function _1(n){localStorage.setItem(Jm,JSON.stringify(n))}const Ah="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class Rs extends Error{constructor(e,t,i=0){super(t),this.kind=e,this.status=i}}async function Fs(n,{method:e="GET",headers:t={},body:i,signal:s,timeoutMs:r=2e4}={}){var h;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let u;try{u=await fetch(n,{method:e,headers:i?{"Content-Type":"application/json",...t}:t,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(m){throw a?new Rs("timeout","The request timed out."):m.name==="AbortError"?new Rs("abort","Cancelled."):new Rs("network",m.message)}finally{clearTimeout(l)}const c=await u.text();let f=null;try{f=JSON.parse(c)}catch{}if(!u.ok){const m=((h=f==null?void 0:f.error)==null?void 0:h.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||c.slice(0,200)||u.statusText;throw new Rs("http",m,u.status)}return f}function vf(n,e){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com - check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${e}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function _f(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} - the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function xf(n,e){return n.kind==="timeout"?`${e} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const yf=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,Mf=n=>n.localUrl.trim().replace(/\/+$/,"");async function Sf(n,e,t){var i,s,r,o,a,l,u;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let c;try{c=await Fs(`${yf(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:Ah}]},contents:[{role:"user",parts:[{text:e}]}]},signal:t})}catch(h){throw new Error(vf(h,n.geminiModel))}const f=((o=(r=(s=(i=c==null?void 0:c.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(h=>h.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const c=Mf(n);if(!c)throw new Error("Enter the local server URL in Settings.");let f;try{f=await Fs(`${c}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:Ah},{role:"user",content:e}]},signal:t,timeoutMs:12e4})}catch(m){throw new Error(m.kind==="network"?await _f(c):xf(m,c))}const h=((u=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:u.content)??"";if(!h)throw new Error("The local model returned no text.");return h.trim()}throw new Error("No AI provider selected.")}const Zm="Reply with the single word OK.";async function x1(n){const e=n.geminiKey.trim();if(!e)return{ok:!1,message:"Enter an API key first."};try{await Fs(yf(n.geminiModel),{headers:{"x-goog-api-key":e},timeoutMs:15e3});const t=await Sf({...n,provider:"gemini"},Zm);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:t}}catch(t){return{ok:!1,message:t instanceof Rs?vf(t,n.geminiModel):t.message}}}async function y1(n){const e=Mf(n);if(!e)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let t=null;try{const i=await Fs(`${e}/models`,{timeoutMs:8e3});t=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await _f(e)};if(i.kind==="timeout")return{ok:!1,message:xf(i,e)}}if(t!=null&&t.length&&!t.includes(n.localModel)){const i=t.slice(0,10).join(", ")+(t.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await Sf({...n,provider:"local"},Zm);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function M1(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" - goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function Qm(n){const e=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&e.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&e.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),e.join(`

`)}async function S1(n,e,t){return n.provider==="builtin"?{text:Qm(e),ai:!1}:{text:await Sf(n,M1(e),t),ai:!0}}const At=vn(v1());Lt(At,n=>_1({...n}),{deep:!0});const eg=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],_c=(n,e)=>eg.find(t=>t.name===e).face[n];function xc(n,e){const t=n/2,i=e/2,s=Math.min(n,e)*.38,r=s*Math.cos(Math.PI/6);return[[t,i],[t,i-s],[t+r,i-s/2],[t+r,i+s/2],[t,i+s],[t-r,i+s/2],[t-r,i-s/2]]}function Ch(n,e,t){const i=Zt(t),s=i.m,r=[],o=e[0];for(const a of eg){const l=e[a.ea],u=e[a.eb],c=e[a.far],f=On[_c(n,a.name)],h=On[_c(n,a.across[0])],m=On[_c(n,a.across[1])];for(let g=0;g<t;g++)for(let v=0;v<t;v++){const p=(g+.5)/t,d=(v+.5)/t,y=o[0]+p*(l[0]-o[0])+d*(u[0]-o[0])+p*d*(c[0]-l[0]-u[0]+o[0]),_=o[1]+p*(l[1]-o[1])+d*(u[1]-o[1])+p*d*(c[1]-l[1]-u[1]+o[1]),x=[0,1,2].map(L=>s*(f[L]+h[L]+m[L])-2*g*m[L]-2*v*h[L]);r.push({slot:i.slotAt(x,f),x:y,y:_})}}return r}function b1(n,e,t,i){const{data:s,width:r,height:o}=n;let a=0,l=0,u=0,c=0;for(let f=Math.max(0,Math.round(t-i));f<=Math.min(o-1,Math.round(t+i));f++)for(let h=Math.max(0,Math.round(e-i));h<=Math.min(r-1,Math.round(e+i));h++){const m=(f*r+h)*4;a+=s[m],l+=s[m+1],u+=s[m+2],c++}return c?[a/c,l/c,u/c]:[0,0,0]}function tg([n,e,t]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(e),i(t)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,u=(.0193*s+.1192*r+.9505*o)/1.08883,c=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*c(l)-16,500*(c(a)-c(l)),200*(c(l)-c(u))]}const tl=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Rh=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),E1=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),w1=n=>{const e=[...n].sort((t,i)=>t-i);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2};function T1(n){const e=a=>Math.hypot(a[1],a[2]),t=n.map(a=>({rgb:a,lab:tg(a)})).filter(({lab:a})=>a[0]>60&&e(a)<50);if(!t.length)return null;const i=Math.min(...t.map(a=>e(a.lab))),s=t.filter(a=>e(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>w1(o.map(l=>l.rgb[a])))}function A1(n,e){return n.map((t,i)=>{const s=Math.min(5,1/Math.max(Rh(e[i]),.02));return Math.max(0,Math.min(255,E1(Math.min(1,Rh(t)*s))))})}function C1([n,e,t]){const[i,s,r]=[n/255,e/255,t/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let u=0;return l>0&&(o===i?u=(s-r)/l%6:o===s?u=(r-i)/l+2:u=(i-s)/l+4,u*=60,u<0&&(u+=360)),{h:u>300?u-360:u,s:o===0?0:l/o,v:o}}const Xr=[-30,90],yc=n=>n.s>.4&&n.h>-40&&n.h<80;function R1(n){const e=[...n].sort((i,s)=>i-s);return e.slice(1).map((i,s)=>({size:i-e[s],mid:(i+e[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const Ph=(n,[e,t])=>n<e?0:n<t?1:2;function P1(n,e,t=null){const i=Zt(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const c=[],f=[];for(const d of e){const y=i.stickers[d.slot];i.cubies[y.cubie].kind==="center"&&(c[y.face]=d.lab,f[y.face]=d)}for(const d of e){let y=0;for(let _=1;_<6;_++)tl(d.lab,c[_])<tl(d.lab,c[y])&&(y=_);s[d.slot]=y}const h=[0,1,2,3,4,5].filter(d=>yc(f[d])).sort((d,y)=>f[d].h-f[y].h);if(h.length!==3)return{state:s,warnings:r,hue:null};const m=h.map(d=>f[d].h),g=[(m[0]+m[1])/2,(m[1]+m[2])/2],v=t??g,p=[];for(const d of e)!h.includes(s[d.slot])||d.s<.25||(s[d.slot]=h[Ph(d.h,v)],p.push(d.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:v,points:p,anchors:m}}}const o=e.filter(yc);let a=null,l=null;if(o.length===12){const c=R1(o.map(g=>g.h)),f=t??c,h=e.filter(g=>!yc(g)),m=Lh(h.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+Ph(g.h,f))),h.forEach((g,v)=>a.set(g.slot,m[v])),l={auto:c,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const c=Lh(e.map(f=>f.lab),6);a=new Map(e.map((f,h)=>[f.slot,c[h]]))}for(const[c,f]of a)s[c]=f;const u=zm(s);return u.error?(r.push(`${u.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:u.state,warnings:r,hue:l}}function Lh(n,e){const t=n.length/e,i=[n[0]];for(;i.length<e;){let r=0,o=-1;n.forEach((a,l)=>{const u=Math.min(...i.map(c=>tl(a,c)));u>o&&(o=u,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((u,c)=>i.forEach((f,h)=>o.push([tl(u,f),c,h]))),o.sort((u,c)=>u[0]-c[0]);const a=new Array(e).fill(t),l=new Array(n.length).fill(-1);for(const[,u,c]of o)l[u]<0&&a[c]>0&&(l[u]=c,a[c]--);s=l;for(let u=0;u<e;u++){const c=n.filter((f,h)=>s[h]===u);c.length&&(i[u]=[0,1,2].map(f=>c.reduce((h,m)=>h+m[f],0)/c.length))}}return s}function L1(n,e,{whiteBalance:t=!1,cutoffs:i=null}={}){const s=[null,null];let r=e;if(t){r=[];for(const a of[0,1]){const l=e.filter(c=>c.photo===a),u=T1(l.map(c=>c.rgb));s[a]=u?"applied":"no-white",r.push(...u?l.map(c=>({...c,rgb:A1(c.rgb,u)})):l)}}const o=r.map(a=>({slot:a.slot,lab:tg(a.rgb),...C1(a.rgb)}));return{...P1(n,o,i),whiteBalance:s}}const ar=Math.PI/180,I1=Array.from({length:8},(n,e)=>[e&1?1:-1,e&2?1:-1,e&4?1:-1]);function D1(n,e,t){const i=Math.max(n,e,t),s=Math.min(n,e,t);return{s:i===0?0:(i-s)/i,v:i/255}}function U1(n,e=360){const{data:t,width:i,height:s}=n,r=Math.min(1,e/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),u=new Float32Array(o*a);for(let c=0;c<a;c++){const f=Math.floor(c*s/a),h=Math.max(f+1,Math.floor((c+1)*s/a));for(let m=0;m<o;m++){const g=Math.floor(m*i/o),v=Math.max(g+1,Math.floor((m+1)*i/o));let p=0,d=0,y=0,_=0;for(let F=f;F<h;F++)for(let w=g;w<v;w++){const M=(F*i+w)*4;p+=t[M],d+=t[M+1],y+=t[M+2],_++}const{s:x,v:L}=D1(p/_,d/_,y/_),C=x>.42&&L>.32?Math.min(1,(x-.32)/.3):0,I=x<.2&&L>.72?.9:0;l[c*o+m]=Math.max(C,I),u[c*o+m]=L<.3?Math.min(1,(.34-L)/.14):0}}return{w:o,h:a,scale:r,stick:Ih(l,o,a),dark:Ih(u,o,a)}}function Ih(n,e,t){const i=new Float32Array(n.length);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){const c=r+u,f=s+l;c<0||f<0||c>=e||f>=t||(o+=n[f*e+c],a++)}i[s*e+r]=o/a}return i}function Iu(n,e,t,i,s){if(i<0||s<0||i>e-1||s>t-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(e-1,r+1),l=Math.min(t-1,o+1),u=i-r,c=s-o;return n[o*e+r]*(1-u)*(1-c)+n[o*e+a]*u*(1-c)+n[l*e+r]*(1-u)*c+n[l*e+a]*u*c}function N1(n,e,t){const[i,s]=[Math.cos(n*ar),Math.sin(n*ar)],[r,o]=[Math.cos(e*ar),Math.sin(e*ar)],[a,l]=[Math.cos(t*ar),Math.sin(t*ar)],u=[[i,0,s],[0,1,0],[-s,0,i]],c=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],h=(m,g)=>m.map(v=>[0,1,2].map(p=>v[0]*g[0][p]+v[1]*g[1][p]+v[2]*g[2][p]));return h(f,h(c,u))}function bf(n,e,t){const i=N1(n.yaw,n.pitch,n.roll),s=(n.cx-e/2)/n.f*n.z,r=(n.cy-t/2)/n.f*n.z;return I1.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const Ef=(n,e,t,i)=>[e/2+i*n[0]/n[2],t/2+i*n[1]/n[2]];function ng(n){let e=0;for(let t=1;t<8;t++)n[t][2]<n[e][2]&&(e=t);return e}const F1=[[1,2],[1,4],[2,4]],Dh=[.12,.3,.5,.7,.88],O1=[.02,.05,.08],Uh=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function ig(n,e,t,i,s){const{w:r,h:o}=n,a=C=>C?Iu(n.stick,r,o,C[0],C[1]):-1,l=C=>C?Iu(n.dark,r,o,C[0],C[1]):-1;let u=0,c=0,f=0,h=0,m=0,g=0,v=0,p=0;const d=[],y=[],_=(C,I)=>{p++,C<0&&(v++,C=0),I===0?(u+=C,c++):I===1?(f+=C,h++):(m+=C,g++)};for(const C of t){const I=[C(0,0),C(1,0),C(1,1),C(0,1)];if(I.some(w=>!w))return-1;y.push(I);let F=0;for(let w=0;w<4;w++){const M=I[w],D=I[(w+1)%4];F+=M[0]*D[1]-D[0]*M[1]}d.push(Math.abs(F)/2);for(let w=0;w<e;w++)for(let M=0;M<e;M++){let D=0,Z=!1;for(const[Q,oe]of Uh){const de=a(C((w+.5)/e+Q*.16/e,(M+.5)/e+oe*.16/e));de<0?Z=!0:D+=de}_(Z?-1:D/Uh.length,0)}for(let w=1;w<e;w++)for(const M of Dh)for(const D of[0,1]){const Z=(J,fe)=>D===0?C(J,fe):C(fe,J);let Q=-1;for(const J of[-i,0,i])Q=Math.max(Q,l(Z(w/e+J/e,M)));const oe=a(Z(w/e-.33/e,M)),de=a(Z(w/e+.33/e,M));_(Q<0||oe<0||de<0?-1:Q*Math.min(oe,de),1)}for(const w of Dh)for(const[M,D,Z,Q,oe,de]of[[0,w,.33/e,w,1,0],[1,w,1-.33/e,w,-1,0],[w,0,w,.33/e,0,1],[w,1,w,1-.33/e,0,-1]]){let J=-1;for(const W of O1)J=Math.max(J,l(C(M+oe*W/e,D+de*W/e)));const fe=a(C(Z,Q));_(J<0||fe<0?-1:J*fe,2)}}if(!c||!h)return-1;if(s)return{cell:u/c,line:f/h,border:m/g,outside:v,total:p};let x=.3*(u/c)+.4*(f/h)+.3*(m/g);x*=1-v/Math.max(1,p);const L=Math.min(...d)/Math.max(...d);return L<.12&&(x*=L/.12),x*(.4+.6*B1(n,y))}const k1=(n,e,t)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(t-r[1])-(o[1]-r[1])*(e-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function B1(n,e){const{w:t,h:i}=n,s=e.flat(),r=s.map(p=>p[0]),o=s.map(p=>p[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),u=Math.max(0,Math.min(...r)-l),c=Math.min(t-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),h=Math.min(i-1,Math.max(...o)+l);let m=0,g=0;const v=22;for(let p=0;p<v;p++)for(let d=0;d<v;d++){const y=u+(c-u)*(p+.5)/v,_=f+(h-f)*(d+.5)/v,x=Iu(n.stick,t,i,y,_);e.some(L=>k1(L,y,_))?m+=x:g+=x}return m/Math.max(1e-6,m+g)}function La(n,e,t,i=.12,s=!1){const{w:r,h:o}=n,a=bf(t,r,o),l=ng(a);if(a[l][2]<1)return-1;const u=a[l],c=(d,y,_)=>_<.3?null:[r/2+t.f*d/_,o/2+t.f*y/_],f=F1.map(([d,y])=>{const _=a[l^d],x=a[l^y],L=[_[0]-u[0],_[1]-u[1],_[2]-u[2]],C=[x[0]-u[0],x[1]-u[1],x[2]-u[2]];return(I,F)=>c(u[0]+L[0]*I+C[0]*F,u[1]+L[1]*I+C[1]*F,u[2]+L[2]*I+C[2]*F)});let h=ig(n,e,f,i,s);if(s||h<0)return h;const m=a.map(d=>d[2]>.3?Ef(d,r,o,t.f):[0,0]),g=m.map(d=>d[0]),v=m.map(d=>d[1]),p=Math.max(Math.max(...g)-Math.min(...g),Math.max(...v)-Math.min(...v))/Math.min(r,o);return p<.15&&(h*=p/.15),p>1.1&&(h*=1.1/p),h}function Nh(n,e,t,i=.05){const s=(h,m,g,v)=>(p,d)=>[v[0]+p*(h[0]-v[0])+d*(m[0]-v[0])+p*d*(g[0]-h[0]-m[0]+v[0]),v[1]+p*(h[1]-v[1])+d*(m[1]-v[1])+p*d*(g[1]-h[1]-m[1]+v[1])],[r,o,a,l,u,c,f]=t;return ig(n,e,[s(f,a,o,r),s(u,f,c,r),s(a,u,l,r)],i,!1)}function Fh(n,e,t){const i=bf(n,e,t),s=ng(i),r=f=>Ef(i[f],e,t,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const h=o[f].p,m=o[(f+1)%6].p;a+=h[0]*m[1]-m[0]*h[1]}a<0&&o.reverse();const l=o.map((f,h)=>f.far?h:-1).filter(f=>f>=0),u=l.reduce((f,h)=>o[h].p[1]<o[f].p[1]?h:f,l[0]),c=[0,1,2,3,4,5].map(f=>o[(u+f)%6].p);return[r(s),...c]}function Du(n,e,t){const i=bf(n,e,t).map(o=>Ef(o,e,t,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function z1(n,e,t,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:e,pitch:t,roll:i,f:s},l=(n.x1+n.x2)/2,u=(n.y1+n.y2)/2;for(let c=0;c<3;c++){const f=Du(a,r,o),h=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),m=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(h*m));const g=Du(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=u-(g.y1+g.y2)/2}return a}const H1=["cx","cy","z","yaw","pitch","roll","lf"];function V1(n,e,t,i){const s=n.w,r=n.h,o={...t,lf:Math.log(t.f/i)},a=m=>({...m,f:i*Math.exp(m.lf)}),l=Du(a(o),s,r),u=Math.max(l.x2-l.x1,l.y2-l.y1),c={cx:.02*u,cy:.02*u,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:m,shrink:g}of f){let v=La(n,e,a(o),m);for(const p of g)for(let d=0;d<30;d++){let y=!1;for(const _ of H1)for(const x of[1,-1]){const L={...o,[_]:o[_]+x*c[_]*p};if(_==="pitch"&&Math.abs(L.pitch)>85||_==="lf"&&(L.lf<-.7||L.lf>1.6)||_==="z"&&L.z<1.5)continue;const C=La(n,e,a(L),m);C>v+1e-5&&(v=C,Object.assign(o,L),y=!0)}if(!y)break}}const h=a(o);return{pose:h,score:La(n,e,h,.06)}}function G1(n,e,{box:t=null}={}){const i=U1(n),{w:s,h:r}=i,a=t?[(y=>({x1:y.x1/1e3*s,x2:y.x2/1e3*s,y1:y.y1/1e3*r,y2:y.y2/1e3*r}))(t)]:[.4,.5,.62,.76,.9].map(y=>{const _=y*Math.min(s,r)/2;return{x1:s/2-_,x2:s/2+_,y1:r/2-_,y2:r/2+_}}),l=.8*Math.max(s,r),u=[];for(const y of a)for(let _=0;_<90;_+=10)for(let x=-80;x<=80;x+=10)for(let L=-90;L<=90;L+=15)for(const C of[l,2.8*l]){const I=z1(y,_,x,L,C,s,r);u.push({pose:I,score:La(i,e,I,.16)})}u.sort((y,_)=>_.score-y.score);const c=u[Math.floor(u.length/2)].score,f=[],h=y=>Fh(y,s,r).flat();for(const y of u.slice(0,200)){const _=h(y.pose),x=Math.max(..._.filter((L,C)=>C%2===0))-Math.min(..._.filter((L,C)=>C%2===0));if(f.every(L=>Math.max(...L.k.map((C,I)=>Math.abs(C-_[I])))>.05*x)&&f.push({...y,k:_}),f.length>=16)break}let m=null;const g=[];for(const y of f){const _=V1(i,e,y.pose,l);g.push(_),(!m||_.score>m.score)&&(m=_)}if(!m||m.score<=0)return null;const v=Fh(m.pose,s,r),p=W1(i,e,v);return{handles:p.handles.map(([y,_])=>[y/s*1e3,_/r*1e3]),poseHandles:v.map(([y,_])=>[y/s*1e3,_/r*1e3]),score:p.score,poseScore:m.score,margin:p.score-c,pose:m.pose,maps:i,alternatives:g}}function W1(n,e,t){const i=t.map(u=>u[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=t.map(u=>[...u]),a=(u,c)=>Math.max(t[u][c]-r,Math.min(t[u][c]+r,o[u][c]));let l=Nh(n,e,o,.05);for(const u of[.012,.006,.003])for(let c=0;c<20;c++){let f=!1;for(let h=0;h<7;h++)for(let m=0;m<2;m++)for(const g of[1,-1]){const v=o[h][m];if(o[h][m]=v+g*u*s,o[h][m]!==a(h,m)){o[h][m]=v;continue}const p=Nh(n,e,o,.05);p>l+1e-5?(l=p,f=!0):o[h][m]=v}if(!f)break}return{handles:o,score:l}}function Oh(n,e,{box:t=null,signal:i}={}){const s=()=>{const r=G1(n,e,{box:t});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=u=>{i==null||i.removeEventListener("abort",l),a.terminate(),u.data.error?o(new Error(u.data.error)):r(u.data.result)},a.onerror=u=>{var c;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(c=u.preventDefault)==null||c.call(u)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:e,box:t})})}const sg=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,pa=(n,...e)=>e.map(t=>n==null?void 0:n[t]).find(t=>t!==void 0);function $1(n){const e=n.indexOf("{"),t=n.lastIndexOf("}");if(e<0||t<=e)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(e,t+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=pa(s,"x1","xmin","left","x_min"),o=pa(s,"y1","ymin","top","y_min"),a=pa(s,"x2","xmax","right","x_max"),l=pa(s,"y2","ymax","bottom","y_max"));const u=[r,o,a,l].map(Number);if(u.some(c=>!Number.isFinite(c)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(u[0],u[2]),y1:Math.min(u[1],u[3]),x2:Math.max(u[0],u[2]),y2:Math.max(u[1],u[3])}}function rg(n){const{x1:e,y1:t,x2:i,y2:s}=n;if([e,t,i,s].every(h=>h<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(e<-50||t<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-e,o=s-t;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(e+i)/2,l=(t+s)/2,u=r/2,c=o/2,f=h=>Math.max(0,Math.min(1e3,h));return[[a,l],[a,l-c],[a+u,l-c/2],[a+u,l+c/2],[a,l+c],[a-u,l+c/2],[a-u,l-c/2]].map(([h,m])=>[f(h),f(m)])}const X1=n=>{const e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]};function q1(n,e){const{data:t,width:i,height:s}=n,r=(O,$)=>Math.round(O/1e3*$),o=r(e.x1,i),a=r(e.x2,i),l=r(e.y1,s),u=r(e.y2,s),c=O=>Math.max(0,Math.min(i-1,Math.round(O))),f=O=>Math.max(0,Math.min(s-1,Math.round(O))),h=(a-o)*.25,m=(u-l)*.25,[g,v,p,d]=[c(o-h),c(a+h),f(l-m),f(u+m)],y=v-g+1,_=d-p+1;if(y<40||_<40)return null;const x=Math.max(3,Math.round(Math.min(y,_)*.06)),L=(O,$)=>{const Ce=($*i+O)*4;return[t[Ce],t[Ce+1],t[Ce+2]]},C=[];for(let O=p;O<=d;O++)for(let $=g;$<=v;$++)($-g<x||v-$<x||O-p<x||d-O<x)&&C.push(L($,O));const I=[0,1,2].map(O=>X1(C.map($=>$[O]))),F=O=>Math.hypot(O[0]-I[0],O[1]-I[1],O[2]-I[2]),w=C.map(F).sort((O,$)=>O-$),M=Math.max(40,w[Math.floor(w.length*.95)]*1.6),D=new Array(y).fill(0),Z=new Array(_).fill(0);for(let O=0;O<_;O++)for(let $=0;$<y;$++)F(L(g+$,p+O))>M&&(D[$]++,Z[O]++);const Q=O=>{const $=Math.max(...O)*.04,Ce=O.findIndex(ce=>ce>=$),ee=O.length-1-[...O].reverse().findIndex(ce=>ce>=$);return Ce<0?null:[Ce,ee]},oe=Q(D),de=Q(Z);if(!oe||!de)return null;const J={x1:(g+oe[0])/i*1e3,x2:(g+oe[1]+1)/i*1e3,y1:(p+de[0])/s*1e3,y2:(p+de[1]+1)/s*1e3},fe=O=>(O.x2-O.x1)*(O.y2-O.y1),W=fe(J)/fe(e),we=Math.hypot((J.x1+J.x2-e.x1-e.x2)/2,(J.y1+J.y2-e.y1-e.y2)/2),Y=oe[0]===0||de[0]===0||oe[1]===y-1||de[1]===_-1;return W<.45||W>2.2||we>.25*Math.max(e.x2-e.x1,e.y2-e.y1)||Y?null:J}function Y1(n){return og(n).length>0}function og(n){var t,i,s;const e=[];return(t=n.localUrl)!=null&&t.trim()&&((i=n.localModel)!=null&&i.trim())&&e.push("local"),(s=n.geminiKey)!=null&&s.trim()&&e.push("gemini"),e}async function K1(n,e,t){var s,r;const i=Mf(n);try{await Fs(`${i}/models`,{timeoutMs:4e3,signal:t})}catch(o){if(o.kind==="network")throw new Error(await _f(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await Fs(`${i}/chat/completions`,{method:"POST",signal:t,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:sg},{type:"image_url",image_url:{url:e}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof Rs){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(xf(o,i)+a)}throw o}}async function j1(n,e,t){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(e)??[];if(!s)throw new Error("Could not encode the photo.");try{const u=await Fs(`${yf(n.geminiModel)}:generateContent`,{method:"POST",signal:t,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:sg},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=u==null?void 0:u.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(c=>c.text).join(""))??"",model:n.geminiModel}}catch(u){throw u instanceof Rs?new Error(vf(u,n.geminiModel)):u}}async function J1(n,e,t){const i=og(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?K1(n,e,t):j1(n,e,t)),l=$1(o);return{handles:rg(l),source:r,model:a,box:l,notes:s}}catch(o){if(t!=null&&t.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const Z1={class:"photo-import"},Q1={class:"photos"},eT={class:"file"},tT=["onChange"],nT=["onPointerdown","onPointermove"],iT={class:"ai-row"},sT=["disabled","onClick"],rT={class:"wb"},oT={class:"wb"},aT={class:"actions"},lT=["disabled"],cT={key:0,class:"hue-box"},uT={class:"hue-head"},fT=["disabled"],dT={class:"slider"},hT=["min","max"],pT={class:"slider"},mT=["min","max"],gT={key:1,class:"note"},kh=.3,vT={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:e}){const t=n,i=e,s=[null,null],r=vn([null,null]),o=vn([xc(420,420),xc(420,420)]),a=He(""),l=He(!1),u=He(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Lt(u,Y=>localStorage.setItem("rubiks-solver.autoAlign",Y?"1":"0"));const c=vn([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],h=He(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),m=He(null),g=He(null),v=He(!1),p=He(0),d=He(0),y=He(null),_=He(null),x=wt(()=>r[0]&&r[1]);bo(()=>[0,1].forEach(M)),Lt(()=>t.n,()=>{[0,1].forEach(M),m.value=null,g.value=null,v.value=!1});function L(Y,O){var ee;const $=(ee=O.target.files)==null?void 0:ee[0];if(!$)return;const Ce=new Image;Ce.onload=async()=>{r[Y]=Ce,o[Y]=xc(420,420),c[Y].state="",c[Y].text="",await Xu(),M(Y),u.value&&F(Y)},Ce.src=URL.createObjectURL($)}function C(Y){const O=Math.min(1,768/Math.max(Y.width,Y.height)),$=document.createElement("canvas");$.width=Math.round(Y.width*O),$.height=Math.round(Y.height*O);const Ce=$.getContext("2d");return Ce.drawImage(Y,0,0,$.width,$.height),{dataUrl:$.toDataURL("image/jpeg",.85),pixels:Ce.getImageData(0,0,$.width,$.height)}}function I(Y,O,$){const{s:Ce,ox:ee,oy:ce}=w(O);$.forEach(([be,he],Ne)=>{o[Y][Ne]=[ee+be/1e3*O.width*Ce,ce+he/1e3*O.height*Ce]}),M(Y)}async function F(Y){var ee;const O=r[Y];if(!O)return;(ee=f[Y])==null||ee.abort();const $=new AbortController;f[Y]=$,c[Y].busy=!0,c[Y].state="",c[Y].text="Analysing the photo…";const Ce=()=>r[Y]!==O||$.signal.aborted;try{const{dataUrl:ce,pixels:be}=C(O),he=Y1(At),Ne=he?J1({...At},ce,$.signal).catch(R=>{if(R.kind==="abort"||$.signal.aborted)throw R;return{error:R.message}}):null;let Be=await Oh(be,t.n,{signal:$.signal});if(Ce())return;let je="image analysis";Be&&Be.score>=kh&&(I(Y,O,Be.handles),he&&(c[Y].text="Cube outlined by image analysis - asking the AI to double-check…"));let ot=null;if(Ne){if(ot=await Ne,Ce())return;if(ot.box){const R=await Oh(be,t.n,{box:ot.box,signal:$.signal});if(Ce())return;R&&(!Be||R.score>Be.score+.02)&&(Be=R,je=`${ot.source==="local"?"local model":"Gemini"} ${ot.model} + image analysis`)}}if(Be&&Be.score>=kh){I(Y,O,Be.handles),c[Y].state="ok",c[Y].text=`Cube outlined by ${je} (fit ${Math.round(Be.score*100)}%). The outline is a perspective-correct cube model - fine-tune the handles if needed.`;return}if(ot!=null&&ot.box){const R=q1(be,ot.box);I(Y,O,R?rg(R):ot.handles),c[Y].state="ok",c[Y].text="The cube could not be fitted precisely; the outline is only a rough box from the AI - please adjust the handles.";return}c[Y].state="bad",c[Y].text="Could not find a cube in this photo"+(ot!=null&&ot.error?` (${ot.error})`:"")+" - drag the handles by hand."}catch(ce){if(ce.kind==="abort"||$.signal.aborted)return;c[Y].state="bad",c[Y].text=`${ce.message} - drag the handles by hand.`}finally{f[Y]===$&&(c[Y].busy=!1)}}function w(Y){const O=Math.min(420/Y.width,420/Y.height);return{s:O,ox:(420-Y.width*O)/2,oy:(420-Y.height*O)/2}}function M(Y){const O=s[Y];if(!O)return;const $=O.getContext("2d");$.clearRect(0,0,420,420),$.fillStyle="#0f1116",$.fillRect(0,0,420,420);const Ce=r[Y];if(Ce){const{s:ce,ox:be,oy:he}=w(Ce);$.drawImage(Ce,be,he,Ce.width*ce,Ce.height*ce)}const ee=o[Y];$.lineWidth=2,$.strokeStyle="#ffffff",$.beginPath(),[1,2,3,4,5,6].forEach((ce,be)=>be?$.lineTo(ee[ce][0],ee[ce][1]):$.moveTo(ee[ce][0],ee[ce][1])),$.closePath(),$.stroke(),$.beginPath(),[2,4,6].forEach(ce=>{$.moveTo(ee[0][0],ee[0][1]),$.lineTo(ee[ce][0],ee[ce][1])}),$.stroke(),$.fillStyle="#ff2d55";for(const ce of Ch(Y,ee,t.n))$.beginPath(),$.arc(ce.x,ce.y,3,0,Math.PI*2),$.fill();$.fillStyle="#00e5ff",ee.forEach(([ce,be])=>{$.beginPath(),$.arc(ce,be,7,0,Math.PI*2),$.fill()})}const D=(Y,O)=>{const $=s[Y].getBoundingClientRect();return[(O.clientX-$.left)/$.width*420,(O.clientY-$.top)/$.height*420]};function Z(Y,O){const[$,Ce]=D(Y,O);let ee=-1,ce=18;o[Y].forEach(([be,he],Ne)=>{const Be=Math.hypot(be-$,he-Ce);Be<ce&&(ce=Be,ee=Ne)}),ee>=0&&(_.value={i:Y,k:ee})}function Q(Y,O){!_.value||_.value.i!==Y||(o[Y][_.value.k]=D(Y,O),M(Y))}const oe=()=>_.value=null;function de(){const Y=[];for(let O=0;O<2;O++){const $=document.createElement("canvas");$.width=$.height=420;const Ce=$.getContext("2d"),{s:ee,ox:ce,oy:be}=w(r[O]);Ce.fillStyle="#000",Ce.fillRect(0,0,420,420),Ce.drawImage(r[O],ce,be,r[O].width*ee,r[O].height*ee);const he=Ce.getImageData(0,0,420,420),Ne=420*.38/t.n/5;for(const Be of Ch(O,o[O],t.n))Y.push({slot:Be.slot,rgb:b1(he,Be.x,Be.y,Ne),photo:O})}m.value=Y,v.value=!1,J()}function J(){const Y=L1(t.n,m.value,{whiteBalance:h.value,cutoffs:v.value?[p.value,d.value]:null});g.value=Y.hue,Y.hue&&!v.value&&(p.value=Math.round(Y.hue.auto[0]),d.value=Math.round(Y.hue.auto[1]));const O=Y.whiteBalance.map((Ce,ee)=>Ce==="no-white"?ee+1:0).filter(Boolean),$=[];h.value&&$.push(O.length?`No white tile found in photo ${O.join(" and ")} - colours used as they are there.`:"White balance applied to both photos."),l.value=Y.warnings.length>0||O.length>0,a.value=[Y.warnings[0]||"Colours imported - check them in the cube net and fix any mistakes.",...$].join(" "),i("import",Y.state)}function fe(Y){Y==="a"?p.value=Math.min(p.value,d.value-1):d.value=Math.max(d.value,p.value+1),v.value=!0,J()}function W(){v.value=!1,J()}Lt(h,Y=>{localStorage.setItem("rubiks-solver.whiteBalance",Y?"1":"0"),m.value&&J()});function we(){const Y=y.value;if(!Y||!g.value)return;const O=Y.getContext("2d"),[$,Ce]=Xr,ee=Y.width,ce=Y.height,be=he=>(he-$)/(Ce-$)*ee;for(let he=0;he<ee;he++){const Ne=$+he/ee*(Ce-$);O.fillStyle=`hsl(${(Ne+360)%360} 70% 38%)`,O.fillRect(he,0,1,ce)}O.font="12px system-ui, sans-serif",O.textAlign="center",O.fillStyle="rgba(255,255,255,0.9)",[["red",$,p.value],["orange",p.value,d.value],["yellow",d.value,Ce]].forEach(([he,Ne,Be])=>{O.fillText(he,(be(Ne)+be(Be))/2,13)}),g.value.points.forEach((he,Ne)=>{O.beginPath(),O.arc(be(he),26+Ne*7%30,3.2,0,Math.PI*2),O.fillStyle="#fff",O.fill(),O.strokeStyle="rgba(0,0,0,0.6)",O.stroke()}),g.value.anchors.forEach(he=>{O.beginPath(),O.moveTo(be(he),ce-14),O.lineTo(be(he)-6,ce-2),O.lineTo(be(he)+6,ce-2),O.closePath(),O.fillStyle="#fff",O.fill(),O.stroke()}),O.lineWidth=2,O.strokeStyle="#0b0d12",[p.value,d.value].forEach(he=>{O.beginPath(),O.moveTo(be(he),0),O.lineTo(be(he),ce),O.stroke()}),O.lineWidth=1}return Lt([g,p,d],we,{flush:"post"}),(Y,O)=>(pe(),_e("div",Z1,[O[12]||(O[12]=A("p",{class:"hint"},[et(" Photo 1: look straight at one "),A("b",null,"corner"),et(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),A("b",null,"opposite corner"),et(" faces the camera. Drag the 7 handles so the lines follow the cube outline - the dots show where colours are read. ")],-1)),A("div",Q1,[(pe(),_e(ht,null,Ot(2,$=>A("div",{key:$,class:"photo"},[A("label",eT,[A("span",null,Se($===1?"Photo 1 - first corner":"Photo 2 - opposite corner"),1),A("input",{type:"file",accept:"image/*",onChange:Ce=>L($-1,Ce)},null,40,tT)]),A("canvas",{ref_for:!0,ref:Ce=>s[$-1]=Ce,width:"420",height:"420",onPointerdown:Ce=>Z($-1,Ce),onPointermove:Ce=>Q($-1,Ce),onPointerup:oe,onPointerleave:oe},null,40,nT),A("div",iT,[A("button",{type:"button",disabled:!r[$-1]||c[$-1].busy,onClick:Ce=>F($-1)},Se(c[$-1].busy?"Finding the cube…":"✨ Find the cube"),9,sT),c[$-1].text?(pe(),_e("span",{key:0,class:Pt(["ai-msg",c[$-1].state])},Se(c[$-1].text),3)):at("",!0)])])),64))]),A("label",rT,[Nt(A("input",{"onUpdate:modelValue":O[0]||(O[0]=$=>u.value=$),type:"checkbox"},null,512),[[Ni,u.value]]),O[6]||(O[6]=A("span",null,[et(" Outline the cube automatically after upload "),A("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),A("label",oT,[Nt(A("input",{"onUpdate:modelValue":O[1]||(O[1]=$=>h.value=$),type:"checkbox"},null,512),[[Ni,h.value]]),O[7]||(O[7]=A("span",null,[et(" White balance - if a white tile is found in a photo, use it as that photo's white point "),A("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),A("div",aT,[A("button",{class:"primary",disabled:!x.value,onClick:de},"Read colours",8,lT),a.value?(pe(),_e("span",{key:0,class:Pt(["msg",{warn:l.value}])},Se(a.value),3)):at("",!0)]),g.value?(pe(),_e("div",cT,[A("div",uT,[O[8]||(O[8]=A("b",null,"Red / orange / yellow cutoffs",-1)),A("button",{type:"button",disabled:!v.value,onClick:W},"Auto",8,fT)]),A("canvas",{ref_key:"hueCanvas",ref:y,class:"hue-strip",width:"480",height:"76"},null,512),A("label",dT,[O[9]||(O[9]=A("span",null,"Red | Orange",-1)),Nt(A("input",{"onUpdate:modelValue":O[2]||(O[2]=$=>p.value=$),type:"range",min:H(Xr)[0],max:H(Xr)[1],step:"1",onInput:O[3]||(O[3]=$=>fe("a"))},null,40,hT),[[hn,p.value,void 0,{number:!0}]]),A("output",null,Se(p.value)+"°",1)]),A("label",pT,[O[10]||(O[10]=A("span",null,"Orange | Yellow",-1)),Nt(A("input",{"onUpdate:modelValue":O[4]||(O[4]=$=>d.value=$),type:"range",min:H(Xr)[0],max:H(Xr)[1],step:"1",onInput:O[5]||(O[5]=$=>fe("b"))},null,40,mT),[[hn,d.value,void 0,{number:!0}]]),A("output",null,Se(d.value)+"°",1)]),O[11]||(O[11]=A("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):m.value?(pe(),_e("p",gT," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):at("",!0)]))}},_T=An(vT,[["__scopeId","data-v-e09c020a"]]),xT={class:"panel"},yT={class:"row"},MT={class:"seg"},ST={key:0,class:"note"},bT={class:"row"},ET={key:1,class:"row"},wT={style:{display:"flex","align-items":"center",gap:"8px"}},TT={key:2,class:"palette"},AT=["title","onClick"],CT={class:"net-editor",open:""},RT={class:"photos"},PT={__name:"SetupPanel",setup(n){const e=He("");function t(s){U.brush=s,U.showAllColorsOnHover=!1}async function i(){e.value=(await Ja()).join(" ")}return(s,r)=>(pe(),_e("section",xT,[r[15]||(r[15]=A("h2",null,"Set up the cube",-1)),A("div",yT,[r[8]||(r[8]=A("span",{class:"label"},"Size",-1)),A("div",MT,[A("button",{class:Pt({on:H(U).n===2}),onClick:r[0]||(r[0]=o=>H(wh)(2))},"2×2",2),A("button",{class:Pt({on:H(U).n===3}),onClick:r[1]||(r[1]=o=>H(wh)(3))},"3×3",2)]),A("button",{onClick:r[2]||(r[2]=(...o)=>H(ja)&&H(ja)(...o))},"Reset to solved"),A("button",{onClick:i},"Random scramble")]),e.value?(pe(),_e("p",ST,[r[9]||(r[9]=et("Scramble: ",-1)),A("code",null,Se(e.value),1)])):at("",!0),r[16]||(r[16]=A("h3",null,"Enter your own position",-1)),A("div",bT,[A("button",{class:Pt({primary:H(U).editing}),onClick:r[3]||(r[3]=o=>H(U).editing=!H(U).editing)},Se(H(U).editing?"Done painting":"Paint stickers"),3),r[10]||(r[10]=A("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),H(U).editing?(pe(),_e("div",ET,[A("label",wT,[Nt(A("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=o=>H(U).showAllColorsOnHover=o),onChange:r[5]||(r[5]=o=>H(U).showAllColorsOnHover&&(H(U).editing=!0))},null,544),[[Ni,H(U).showAllColorsOnHover]]),r[11]||(r[11]=et(" Show all colors on hover ",-1)),r[12]||(r[12]=A("span",{class:"note"},"(click a color on the sticker to paint it)",-1))])])):at("",!0),H(U).editing?(pe(),_e("div",TT,[(pe(!0),_e(ht,null,Ot(H(xo),(o,a)=>(pe(),_e("span",{key:a,class:Pt(["swatch-box",{on:!H(U).showAllColorsOnHover&&H(U).brush===a}])},[A("button",{class:"swatch",style:di({background:o}),title:H(_o)[a],onClick:l=>t(a)},null,12,AT)],2))),128))])):at("",!0),A("details",CT,[r[13]||(r[13]=A("summary",null,"Outline",-1)),Xt(g1,{n:H(U).n,state:H($t),onPaint:r[6]||(r[6]=o=>H(U).editing&&H(Ru)(o))},null,8,["n","state"])]),A("details",RT,[r[14]||(r[14]=A("summary",null,"Import from two photos",-1)),Xt(_T,{n:H(U).n,onImport:r[7]||(r[7]=o=>H(gf)(o))},null,8,["n"])]),r[17]||(r[17]=A("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works - the bottom-left-back corner is used as the reference. ",-1))]))}},LT={key:0,class:"result wait"},IT={class:"msg"},DT={key:0,class:"reply"},UT={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(e,t)=>n.state.busy?(pe(),_e("div",LT,"Contacting the service…")):n.state.result?(pe(),_e("div",{key:1,class:Pt(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[A("div",IT,Se(n.state.result.ok?"✓":"✗")+" "+Se(n.state.result.message),1),n.state.result.reply?(pe(),_e("div",DT,[t[0]||(t[0]=A("span",null,"Model response",-1)),et(" "+Se(n.state.result.reply),1)])):at("",!0)],2)):at("",!0)}},Bh=An(UT,[["__scopeId","data-v-b672f672"]]),NT=1,FT="Standard",OT={deadZone:.5,triggerThreshold:.5},kT={"zoom-in":{input:"D-Up",modifiers:[]},"zoom-out":{input:"D-Down",modifiers:[]},"quick-solve":{input:"Menu",modifiers:[]},"next-step":{input:"A",modifiers:[]},undo:{input:"B",modifiers:[]},scramble:{input:"X",modifiers:["View"]},reset:{input:"Y",modifiers:["View"]},"cube-up":{input:"RS-Up",modifiers:[]},"cube-down":{input:"RS-Down",modifiers:[]},"cube-left":{input:"RS-Left",modifiers:[]},"cube-right":{input:"RS-Right",modifiers:[]},"left-cw":{input:"LS-Down",modifiers:[]},"left-ccw":{input:"LS-Up",modifiers:[]},"right-cw":{input:"LS-Up",modifiers:["RT"]},"right-ccw":{input:"LS-Down",modifiers:["RT"]},"front-cw":{input:"LS-Right",modifiers:[]},"front-ccw":{input:"LS-Left",modifiers:[]},"back-cw":{input:"LS-Right",modifiers:["RT"]},"back-ccw":{input:"LS-Left",modifiers:["RT"]},"top-cw":{input:"LB",modifiers:[]},"top-ccw":{input:"LB",modifiers:["LT"]},"bottom-cw":{input:"RB",modifiers:[]},"bottom-ccw":{input:"RB",modifiers:["LT"]},"front-double":{input:"LS-Right",modifiers:["LT"]},"back-double":{input:"LS-Right",modifiers:["LT","RT"]},"left-double":{input:"LS-Up",modifiers:["LT"]},"right-double":{input:"LS-Up",modifiers:["LT","RT"]},"top-double":{input:"Y",modifiers:[]},"bottom-double":{input:"X",modifiers:[]}},BT={version:NT,name:FT,settings:OT,bindings:kT},ag="rubiks-solver.gamepad.v1",Os=n=>JSON.parse(JSON.stringify(n)),Ia=Cr(BT),le=vn({enabled:!0,connected:"",controllerIndex:"",controllers:[],error:"",message:"",profiles:[Os(Ia)],selected:Ia.name,draft:Os(Ia),capture:null,candidate:null,captureReady:!1,held:[]});try{const n=localStorage.getItem(ag);if(n){const e=JSON.parse(n);if(!Array.isArray(e.profiles)||!e.profiles.length)throw new Error("Invalid saved profile list.");const t=e.profiles.map(Cr);if(new Set(t.map(i=>i.name)).size!==t.length)throw new Error("Duplicate profile names.");le.profiles=t,le.selected=t.some(i=>i.name===e.selected)?e.selected:t[0].name,le.draft=Os(t.find(i=>i.name===le.selected)),le.enabled=e.enabled!==!1}}catch(n){le.error=`Could not load gamepad profiles: ${n.message}. Saved data has not been overwritten.`}function Ml(n=le.profiles,e=le.selected){try{return localStorage.setItem(ag,JSON.stringify({profiles:n,selected:e,enabled:le.enabled})),le.error="",!0}catch(t){return le.error=`Could not save gamepad profiles: ${t.message}`,!1}}function lg(n){const e=le.profiles.find(t=>t.name===n);e&&(Ai(),le.selected=n,le.draft=Os(e),Ml(),le.message="")}function zT(n,e=!1){try{const t=Cr({...Os(le.draft),name:n});if(e&&le.profiles.some(s=>s.name===t.name))throw new Error("That name already exists.");const i=le.profiles.filter(s=>s.name!==le.selected||e);if(i.some(s=>s.name===t.name))throw new Error("That name already exists.");return i.push(t),Ml(i,t.name)?(le.profiles=i,le.selected=t.name,le.draft=Os(t),le.message=`Saved "${t.name}".`,!0):!1}catch(t){return le.error=t.message,!1}}function HT(){if(le.profiles.length<=1){le.error="Keep at least one profile.";return}const n=le.profiles.filter(e=>e.name!==le.selected);Ml(n,n[0].name)&&(le.profiles=n,lg(n[0].name))}function zh(){Ai(),le.draft={...Os(Ia),name:le.selected},le.message="Default bindings restored in the draft. Click Save to keep them."}function Hh(){Ml()}function Ai(){le.capture=null,le.candidate=null,le.captureReady=!1}function VT(n){Ai(),le.capture=n,le.error=""}function GT(n){let e=0,t=performance.now(),i=new Set,s="",r=!1,o="",a=null;const l=new Set;function u(c){var I,F,w;e=requestAnimationFrame(u);const f=Math.min((c-t)/1e3,.05);t=c;let h;try{h=((I=navigator.getGamepads)==null?void 0:I.call(navigator))||[]}catch(M){le.error=`Gamepad access failed: ${M.message}`;return}const m=Array.from(h).filter(M=>M&&M.mapping==="standard"),g=m.map(M=>({index:M.index,name:M.id}));JSON.stringify(g)!==JSON.stringify(le.controllers)&&(le.controllers=g);const v=le.controllerIndex===""?m[0]:m.find(M=>M.index===Number(le.controllerIndex));le.connected=(v==null?void 0:v.id)||"",navigator.getGamepads?!v&&Array.from(h).some(Boolean)&&(le.message="Select a connected standard-mapped Xbox-compatible controller."):le.message="This browser does not support the Gamepad API.";const p=v?`${v.index}:${v.id}`:"",d=JSON.stringify(le.draft);if((s!==p||o!==d)&&(s=p,o=d,r=!1,i.clear(),l.clear(),le.captureReady=!1,le.capture&&(le.candidate=null)),!v){le.held.length&&(le.held=[]),le.captureReady=!1;return}const y=DE(v,le.draft.settings,i);le.held.join(",")!==[...y].join(",")&&(le.held=[...y]);const _=!document.hidden&&document.hasFocus();if(le.capture){if((a!==le.capture||!_)&&(le.captureReady=!1,a=le.capture),_&&!y.size&&(le.captureReady=!0),_&&le.captureReady){const M=[...y].filter(D=>!i.has(D));if(M.length){const D=M.find(Z=>!["LT","RT","LB","RB","View","Menu"].includes(Z))||M[M.length-1];le.candidate={input:D,modifiers:[...y].filter(Z=>Z!==D)}}}r=!1,l.clear(),i=y;return}a=null;const x=(F=document.activeElement)==null?void 0:F.tagName;if(!_||!le.enabled||["INPUT","TEXTAREA","SELECT"].includes(x)||(w=document.activeElement)!=null&&w.isContentEditable){r=!1,l.clear(),i=y;return}if(!r){y.size||(r=!0),i=y;return}const L=UE(le.draft.bindings,y),C=new Set(L.map(([M])=>M));for(const M of l)C.has(M)||l.delete(M);for(const[M,D]of L){const Z=!i.has(D.input);Vm.has(M)?(Z&&l.add(M),l.has(M)&&n(M,f)):Z&&n(M,f)}i=y}return e=requestAnimationFrame(u),()=>cancelAnimationFrame(e)}const WT={class:"panel"},$T={class:"row"},XT={class:"field"},qT=["value"],YT={class:"note"},KT={class:"field"},jT=["value"],JT=["value"],ZT={class:"field"},QT={class:"row"},eA=["disabled"],tA={class:"note"},nA={class:"field"},iA={class:"field"},sA={key:0,class:"status bad"},rA={class:"bindings"},oA={style:{"min-width":"150px",display:"inline-block","margin-right":"16px"}},aA=["disabled"],lA=["onClick"],cA=["aria-label","onClick"],uA={class:"field"},fA={class:"field"},dA={key:1,class:"status bad",role:"alert"},hA={key:2,class:"note",role:"status"},pA={__name:"GamepadSettings",setup(n){const e=He(le.draft.name),t=He("");Lt(()=>le.draft,()=>{e.value=le.draft.name});const i=wt(()=>e.value!==le.selected||JSON.stringify(le.draft)!==JSON.stringify(le.profiles.find(v=>v.name===le.selected))),s=wt(()=>{const v=Object.values(le.draft.bindings).filter(Boolean).map(Ta);return[...new Set(v.filter((p,d)=>v.indexOf(p)!==d))]}),r=v=>v?[...v.modifiers,v.input].join(" + "):"Click to assign";function o(){const v=le.candidate,p=Object.entries(le.draft.bindings).find(([d,y])=>d!==le.capture&&y&&Ta(y)===Ta(v));if(p){le.error=`That combination is already assigned to ${bu.find(d=>d.id===p[0]).label}. Clear it first.`;return}le.draft.bindings[le.capture]={input:v.input,modifiers:[...v.modifiers]},le.error="",Ai()}function a(v){if(i.value&&!window.confirm("Discard unsaved profile changes?")){v.value=le.selected;return}lg(v.value)}function l(v){Ai(),zT(e.value,v)}function u(){window.confirm(`Delete profile "${le.selected}" and discard its draft?`)&&HT()}function c(){return JSON.stringify(Cr({...le.draft,name:e.value}),null,2)}function f(){try{t.value=c(),le.error=""}catch(v){le.error=v.message}}function h(){try{const v=c(),p=URL.createObjectURL(new Blob([v],{type:"application/json"})),d=document.createElement("a");d.href=p,d.download=`${e.value.replace(/[^a-z0-9_-]/gi,"_")}.gamepad.json`,d.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3),le.error=""}catch(v){le.error=v.message}}function m(v){try{const p=Cr(JSON.parse(v));if(i.value&&!window.confirm("Discard unsaved changes and load this draft?"))return;Ai(),le.draft=p,le.error="",le.message="Imported draft. Choose Save As with a unique name to keep it as a new profile."}catch(p){le.error=`Could not import profile: ${p.message}`}}async function g(v){const p=v.target.files[0];if(p){try{m(await p.text())}catch(d){le.error=`Could not read profile: ${d.message}`}v.target.value=""}}return Is(Ai),(v,p)=>(pe(),_e("details",WT,[p[21]||(p[21]=A("summary",null,"Gamepad controls",-1)),p[22]||(p[22]=A("p",{class:"note"},"Xbox / XInput-style controllers using the browser's standard mapping. Press a controller button to connect. Menu = Start; View = Back. The Xbox/Guide button is not supported.",-1)),A("label",$T,[Nt(A("input",{"onUpdate:modelValue":p[0]||(p[0]=d=>H(le).enabled=d),type:"checkbox",onChange:p[1]||(p[1]=(...d)=>H(Hh)&&H(Hh)(...d))},null,544),[[Ni,H(le).enabled]]),p[13]||(p[13]=et(" Enable gamepad",-1))]),A("label",XT,[p[15]||(p[15]=et("Controller ",-1)),Nt(A("select",{"onUpdate:modelValue":p[2]||(p[2]=d=>H(le).controllerIndex=d)},[p[14]||(p[14]=A("option",{value:""},"First connected controller",-1)),(pe(!0),_e(ht,null,Ot(H(le).controllers,d=>(pe(),_e("option",{key:d.index,value:d.index},Se(d.name)+" (#"+Se(d.index+1)+")",9,qT))),128))],512),[[za,H(le).controllerIndex]])]),A("p",YT,Se(H(le).connected||"No standard-mapped controller connected."),1),A("label",KT,[p[16]||(p[16]=et("Profile ",-1)),A("select",{value:H(le).selected,onChange:p[3]||(p[3]=d=>a(d.target))},[(pe(!0),_e(ht,null,Ot(H(le).profiles,d=>(pe(),_e("option",{key:d.name,value:d.name},Se(d.name),9,JT))),128))],40,jT)]),A("label",ZT,[p[17]||(p[17]=et("Profile name ",-1)),Nt(A("input",{"onUpdate:modelValue":p[4]||(p[4]=d=>e.value=d),maxlength:"80"},null,512),[[hn,e.value]])]),A("div",QT,[A("button",{onClick:p[5]||(p[5]=d=>l(!1))},"Save / Rename"),A("button",{onClick:p[6]||(p[6]=d=>l(!0))},"Save As"),A("button",{disabled:H(le).profiles.length<2,onClick:u},"Delete",8,eA),A("button",{onClick:p[7]||(p[7]=(...d)=>H(zh)&&H(zh)(...d))},"Restore default")]),A("p",tA,Se(i.value?"Unsaved changes (currently active).":"Profile saved.")+" Save As creates a new profile with the name above.",1),A("label",nA,[et("Stick dead zone: "+Se(H(le).draft.settings.deadZone.toFixed(2))+" ",1),Nt(A("input",{"onUpdate:modelValue":p[8]||(p[8]=d=>H(le).draft.settings.deadZone=d),type:"range",min:"0.15",max:"0.9",step:"0.05"},null,512),[[hn,H(le).draft.settings.deadZone,void 0,{number:!0}]])]),A("label",iA,[et("Trigger threshold: "+Se(H(le).draft.settings.triggerThreshold.toFixed(2))+" ",1),Nt(A("input",{"onUpdate:modelValue":p[9]||(p[9]=d=>H(le).draft.settings.triggerThreshold=d),type:"range",min:"0.1",max:"0.95",step:"0.05"},null,512),[[hn,H(le).draft.settings.triggerThreshold,void 0,{number:!0}]])]),p[23]||(p[23]=A("p",{class:"note"},[et("Click a binding, release all controls, then hold modifiers and press the main input last. Release the combination and click Confirm. Gameplay is paused while assigning. Camera/zoom repeat while held; moves and commands fire once per press. Longer combinations override shorter ones. "),A("br"),et(" RB (Right Bumper), LB (Left Bumper), RT (Right Trigger), LT (Left Trigger), LS (Left Stick), RS (Right Stick), LSB (Left Stick Button), RSB (Right Stick Button) ")],-1)),s.value.length?(pe(),_e("p",sA,"Duplicate combinations: "+Se(s.value.join(", "))+". Clear or change a conflicting binding before saving.",1)):at("",!0),A("table",rA,[p[18]||(p[18]=A("thead",null,[A("tr",null,[A("th",null,"Action"),A("th",null,"Combination")])],-1)),A("tbody",null,[(pe(!0),_e(ht,null,Ot(H(bu),d=>(pe(),_e("tr",{key:d.id},[A("td",null,Se(d.label),1),A("td",null,[H(le).capture===d.id?(pe(),_e(ht,{key:0},[A("span",oA,Se(H(le).candidate?r(H(le).candidate):H(le).captureReady?"Press combination…":"Release all controls…"),1),A("button",{disabled:!H(le).candidate||!!H(le).held.length,onClick:o,style:{color:"lime"}},"Confirm",8,aA),A("button",{onClick:p[10]||(p[10]=(...y)=>H(Ai)&&H(Ai)(...y))},"Cancel")],64)):(pe(),_e(ht,{key:1},[A("button",{onClick:y=>H(VT)(d.id),style:{"min-width":"150px",display:"inline-block","margin-right":"16px"}},Se(r(H(le).draft.bindings[d.id])),9,lA),H(le).draft.bindings[d.id]?(pe(),_e("button",{key:0,"aria-label":`Clear ${d.label}`,style:{color:"red"},onClick:y=>H(le).draft.bindings[d.id]=null,title:"Clear binding for {{ action.label }}"},"X",8,cA)):at("",!0)],64))])]))),128))])]),p[24]||(p[24]=A("h3",null,"Profile JSON",-1)),A("div",{class:"row"},[A("button",{onClick:h},"Export JSON"),A("button",{onClick:f},"Show draft JSON")]),A("label",uA,[p[19]||(p[19]=et("Import JSON file ",-1)),A("input",{type:"file",accept:".json,application/json",onChange:g},null,32)]),A("label",fA,[p[20]||(p[20]=et("Copy / paste profile JSON ",-1)),Nt(A("textarea",{"onUpdate:modelValue":p[11]||(p[11]=d=>t.value=d),rows:"5",spellcheck:"false"},null,512),[[hn,t.value]])]),A("button",{onClick:p[12]||(p[12]=d=>m(t.value))},"Import as draft"),p[25]||(p[25]=A("p",{class:"note"},[et("Imports are validated and do not overwrite a saved profile until you choose Save or Save As. Exported JSON can replace "),A("code",null,"src/gamepad-standard.json"),et(".")],-1)),H(le).error?(pe(),_e("p",dA,Se(H(le).error),1)):at("",!0),H(le).message?(pe(),_e("p",hA,Se(H(le).message),1)):at("",!0)]))}},mA=An(pA,[["__scopeId","data-v-12b272c3"]]),Uu="rubiks-solver.",Vh=new Set(["drama","finale","autoAlign","whiteBalance","swapMouseButtons"]),lr=n=>n!==null&&typeof n=="object"&&!Array.isArray(n);function gA(n=localStorage){const e={};for(let t=0;t<n.length;t++){const i=n.key(t);i!=null&&i.startsWith(Uu)&&(e[i]=n.getItem(i))}return JSON.stringify({app:"rubiks-solver",version:1,exportedAt:new Date().toISOString(),entries:e},null,2)}function vA(n,e=localStorage){let t;try{t=JSON.parse(n)}catch{throw new Error("The file is not valid JSON.")}if(!lr(t))throw new Error("Expected a settings JSON object.");const i=t.entries??t;if(!lr(i))throw new Error("Expected a settings entries object.");const s={imported:0,skipped:0,details:[]};function r(o){s.skipped++,s.details.push(o)}for(const[o,a]of Object.entries(i)){if(!o.startsWith(Uu)){r("Unrecognized storage entry.");continue}const l=o.slice(Uu.length);try{let u;if(Vh.has(l)){if(a!=="0"&&a!=="1")throw new Error("Expected 0 or 1.");u=a}else if(l==="dramaSpeed"||l==="speed"){const c=typeof a=="string"&&a.trim()?Number(a):NaN,[f,h]=l==="speed"?[.5,4]:[.05,1.2];if(!Number.isFinite(c)||c<f||c>h)throw new Error("Invalid speed.");u=a}else if(l==="ai"){const c=typeof a=="string"?JSON.parse(a):a;if(!lr(c))throw new Error("Expected AI settings.");let f={};const h=e.getItem(o);if(h)try{const v=JSON.parse(h);lr(v)&&(f=v)}catch{r("Existing AI settings were unreadable; using defaults for missing fields.")}const m={...el,...f};let g=0;for(const[v,p]of Object.entries(c))Object.hasOwn(el,v)&&typeof p=="string"&&(v!=="provider"||["builtin","gemini","local"].includes(p))&&(v!=="geminiModel"||yl.includes(p))?(m[v]=p,g++):r("Unsupported or invalid AI field.");if(!g)throw new Error("No supported AI fields.");u=JSON.stringify(m)}else if(l==="saves"){const c=typeof a=="string"?JSON.parse(a):a;if(!Array.isArray(c))throw new Error("Expected saved positions.");const f=[];for(const h of c)try{if(!lr(h)||typeof h.facelets!="string"||typeof h.name!="string"||typeof h.id!="string"||!h.id||typeof h.savedAt!="string"||!Number.isFinite(Date.parse(h.savedAt)))throw new Error("Invalid saved position.");const m=Lu(h.facelets);if(h.n!==m.n||f.some(g=>g.id===h.id))throw new Error("Invalid size or duplicate position.");f.push({id:h.id,name:h.name,n:m.n,facelets:h.facelets,savedAt:h.savedAt})}catch{r("Invalid saved position.")}if(c.length&&!f.length)throw new Error("No supported saved positions.");u=JSON.stringify(f)}else if(l==="gamepad.v1"){const c=typeof a=="string"?JSON.parse(a):a;if(!lr(c)||!Array.isArray(c.profiles))throw new Error("Expected gamepad profiles.");const f=[];for(const m of c.profiles)try{const g=Cr(m);if(f.some(v=>v.name===g.name))throw new Error("Duplicate name.");f.push(g)}catch{r("Invalid or duplicate gamepad profile.")}if(!f.length)throw new Error("No supported gamepad profiles.");c.enabled!==void 0&&typeof c.enabled!="boolean"&&r("Invalid gamepad enabled flag.");const h=f.some(m=>m.name===c.selected)?c.selected:f[0].name;u=JSON.stringify({profiles:f,selected:h,enabled:c.enabled!==!1})}else{r("Unsupported app storage entry.");continue}e.setItem(o,u),s.imported++}catch{r(`Could not restore ${["ai","saves","gamepad.v1","dramaSpeed","speed",...Vh].includes(l)?l:"entry"} (invalid data or storage unavailable).`)}}return s}const _A={class:"panel"},xA={class:"field"},yA={key:0,class:"pill"},MA={class:"field"},SA={class:"key-row"},bA=["type"],EA=["disabled"],wA={class:"field"},TA=["value"],AA={class:"row"},CA=["disabled"],RA={key:0,class:"pill"},PA={class:"field"},LA={class:"field"},IA={class:"row"},DA=["disabled"],UA={open:""},NA={class:"row"},FA=["disabled"],OA=["disabled"],kA={key:1},BA={__name:"SettingsPanel",setup(n){const e=He(null),t=He(!1),i=He(!1),s=He(""),r=He(!1),o=He([]);function a(){o.value=[];try{const v=gA(),p=URL.createObjectURL(new Blob([v],{type:"application/json"})),d=document.createElement("a");d.href=p,d.download=`rubiks-solver-settings-${new Date().toISOString().slice(0,10)}.json`,d.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3),s.value="Exported all saved app settings, including API keys. Keep the file private.",r.value=!1}catch(v){s.value=`Could not export settings: ${v.message}`,r.value=!0}}async function l(v){var d;const p=(d=v.target.files)==null?void 0:d[0];if(v.target.value="",!(!p||!window.confirm("Import this settings backup? Matching stored settings and lists will be replaced, including API keys. Reload afterward to apply."))){t.value=!0,o.value=[];try{const y=vA(await p.text());i.value||(i.value=y.imported>0),o.value=y.details,r.value=y.imported===0,s.value=`Restored ${y.imported} storage entries; skipped ${y.skipped} entries or fields.`+(i.value?" Reload to apply before changing other settings; unsaved work will be lost on reload.":"")}catch(y){s.value=`Could not import settings: ${y.message}`,r.value=!0}finally{t.value=!1}}}function u(){window.confirm("Reload to apply imported settings? Unsaved cube changes and gamepad drafts will be lost.")&&window.location.reload()}const c=He(!1),f=vn({busy:!1,result:null}),h=vn({busy:!1,result:null}),m={gemini:f,local:h};Lt(()=>[At.geminiKey,At.geminiModel],()=>f.result=null),Lt(()=>[At.localUrl,At.localModel],()=>h.result=null);async function g(v,p){const d=m[v];d.busy=!0,d.result=null;try{d.result=await p({...At})}finally{d.busy=!1}}return(v,p)=>(pe(),_e(ht,null,[A("details",_A,[p[20]||(p[20]=A("summary",null,"Tutor / AI Configuration",-1)),p[21]||(p[21]=A("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),A("label",xA,[p[11]||(p[11]=et(" Active provider ",-1)),Nt(A("select",{"onUpdate:modelValue":p[0]||(p[0]=d=>H(At).provider=d)},[...p[10]||(p[10]=[A("option",{value:"builtin"},"Built-in (no AI)",-1),A("option",{value:"gemini"},"Gemini API",-1),A("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[za,H(At).provider]])]),A("fieldset",null,[A("legend",null,[p[12]||(p[12]=et("Gemini ",-1)),H(At).provider==="gemini"?(pe(),_e("span",yA,"active")):at("",!0)]),A("label",MA,[p[13]||(p[13]=et(" API key ",-1)),A("span",SA,[Nt(A("input",{"onUpdate:modelValue":p[1]||(p[1]=d=>H(At).geminiKey=d),type:c.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,bA),[[A0,H(At).geminiKey]]),A("button",{type:"button",onClick:p[2]||(p[2]=d=>c.value=!c.value)},Se(c.value?"Hide":"Show"),1),A("button",{type:"button",disabled:!H(At).geminiKey,onClick:p[3]||(p[3]=d=>H(At).geminiKey="")},"Clear",8,EA)])]),A("label",wA,[p[14]||(p[14]=et(" Model ",-1)),Nt(A("select",{"onUpdate:modelValue":p[4]||(p[4]=d=>H(At).geminiModel=d)},[(pe(!0),_e(ht,null,Ot(H(yl),d=>(pe(),_e("option",{key:d,value:d},Se(d),9,TA))),128))],512),[[za,H(At).geminiModel]])]),A("div",AA,[A("button",{class:"primary",disabled:f.busy,onClick:p[5]||(p[5]=d=>g("gemini",H(x1)))},Se(f.busy?"Testing…":"Test Gemini"),9,CA)]),Xt(Bh,{state:f},null,8,["state"]),p[15]||(p[15]=A("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),A("fieldset",null,[A("legend",null,[p[16]||(p[16]=et("Local model ",-1)),H(At).provider==="local"?(pe(),_e("span",RA,"active")):at("",!0)]),A("label",PA,[p[17]||(p[17]=et(" OpenAI-compatible base URL ",-1)),Nt(A("input",{"onUpdate:modelValue":p[6]||(p[6]=d=>H(At).localUrl=d),placeholder:"http://localhost:1234/v1"},null,512),[[hn,H(At).localUrl]])]),A("label",LA,[p[18]||(p[18]=et(" Model name ",-1)),Nt(A("input",{"onUpdate:modelValue":p[7]||(p[7]=d=>H(At).localModel=d),placeholder:"google/gemma-4-e4b"},null,512),[[hn,H(At).localModel]])]),A("div",IA,[A("button",{class:"primary",disabled:h.busy,onClick:p[8]||(p[8]=d=>g("local",H(y1)))},Se(h.busy?"Testing…":"Test local model"),9,DA)]),Xt(Bh,{state:h},null,8,["state"]),p[19]||(p[19]=A("p",{class:"note"},[et(" LM Studio: Developer → Server Settings → turn on "),A("b",null,"Enable CORS"),et(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),A("code",null,"OLLAMA_ORIGINS=*"),et(". ")],-1))]),p[22]||(p[22]=A("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]),p[28]||(p[28]=A("br",null,null,-1)),Xt(mA),p[29]||(p[29]=A("br",null,null,-1)),A("details",UA,[p[24]||(p[24]=A("summary",null,"Settings backup",-1)),p[25]||(p[25]=A("p",{class:"note"},"Export all saved app settings, including AI API keys, saved cube positions, gamepad profiles and preferences, to one JSON file.",-1)),p[26]||(p[26]=A("p",{class:"status bad"},"The file contains API keys in plain text. Keep it private and only import files you trust.",-1)),p[27]||(p[27]=A("p",{class:"note"},"Import replaces matching stored settings and lists, leaves missing settings untouched, and skips unsupported or invalid entries. Reload afterward to apply restored settings. Unsaved gamepad drafts and the current unsaved cube position are not included.",-1)),A("div",NA,[A("button",{disabled:t.value,onClick:a},"Export all settings",8,FA),A("button",{disabled:t.value,onClick:p[9]||(p[9]=d=>e.value.click())},"Import all settings",8,OA),A("input",{ref_key:"backupFile",ref:e,type:"file",accept:".json,application/json",hidden:"",onChange:l},null,544),i.value?(pe(),_e("button",{key:0,onClick:u},"Reload to apply")):at("",!0)]),s.value?(pe(),_e("p",{key:0,class:Pt(["status",r.value?"bad":"ok"]),role:"status"},Se(s.value),3)):at("",!0),o.value.length?(pe(),_e("details",kA,[p[23]||(p[23]=A("summary",null,"Skipped entries and warnings",-1)),A("ul",null,[(pe(!0),_e(ht,null,Ot(o.value,(d,y)=>(pe(),_e("li",{key:y},Se(d),1))),128))])])):at("",!0)]),p[30]||(p[30]=A("br",null,null,-1))],64))}},zA=An(BA,[["__scopeId","data-v-815de11e"]]),HA={class:"tutor"},VA={class:"tutor-head"},GA={class:"pill"},WA={key:0,class:"status bad"},$A={class:"ask"},XA=["disabled"],qA=["disabled","title"],YA=["disabled"],KA={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const e=n,t=He(""),i=He(!1),s=He(""),r=He(""),o=He(!1),a=wt(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[At.provider]),l=wt(()=>o.value&&r.value?r.value:Qm(e.context));Lt(()=>[e.context.stageTitle,e.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function u(c){i.value=!0,s.value="";try{const f=await S1({...At},{...e.context,question:c||""});r.value=f.text,o.value=f.ai,t.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(c,f)=>(pe(),_e("div",HA,[A("div",VA,[f[5]||(f[5]=A("h3",null,"Tutor",-1)),A("span",GA,Se(a.value),1),A("button",{class:"link",onClick:f[0]||(f[0]=h=>H(U).mode="settings")},"Settings")]),A("p",{class:Pt(["answer",{ai:o.value}])},Se(l.value),3),s.value?(pe(),_e("p",WA,Se(s.value),1)):at("",!0),A("div",$A,[Nt(A("input",{"onUpdate:modelValue":f[1]||(f[1]=h=>t.value=h),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=Ha(h=>u(t.value),["enter"]))},null,40,XA),[[hn,t.value]]),A("button",{disabled:i.value||H(At).provider==="builtin",title:H(At).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=h=>u(t.value))},Se(i.value?"…":"Ask"),9,qA),A("button",{disabled:i.value||H(At).provider==="builtin",onClick:f[4]||(f[4]=h=>u(""))},"Explain",8,YA)])]))}},jA=An(KA,[["__scopeId","data-v-d33fa6a4"]]),JA={class:"panel"},ZA={class:"row"},QA=["disabled"],eC={key:0,class:"status ok"},tC={key:0,class:"status bad"},nC=["innerHTML"],iC={key:1,class:"status bad"},sC={class:"note"},rC={class:"player"},oC=["disabled"],aC=["disabled"],lC=["title","disabled"],cC=["disabled"],uC=["disabled"],fC={class:"bar"},dC={class:"speed"},hC={class:"drama",title:"While playing, the camera slowly swirls around the cube"},pC={class:"drama-speed",title:"Rotation speed while Extra drama is enabled"},mC={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},gC={class:"fullscreen-mode"},vC={key:0,class:"now"},_C={class:"now-stage"},xC={class:"moves"},yC={key:1,class:"status ok"},MC={class:"stages"},SC={class:"stage-title"},bC={class:"goal"},EC={key:0,class:"steps"},wC={class:"step-label"},TC={__name:"SolvePanel",setup(n){const e=He(!1),t=He(!1);bo(()=>{function y(_){var L;const x=(L=_.target)==null?void 0:L.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||_.ctrlKey||_.metaKey||_.altKey||U.mode==="solve"&&(_.code==="Space"?(_.preventDefault(),ur()):_.key==="Enter"&&(_.preventDefault(),v()))}window.addEventListener("keydown",y),Is(()=>window.removeEventListener("keydown",y))}),Lt(t,y=>U.playing=y,{immediate:!0}),Lt(()=>U.drama,y=>localStorage.setItem("rubiks-solver.drama",y?"1":"0")),Lt(()=>U.finale,y=>{localStorage.setItem("rubiks-solver.finale",y?"1":"0"),y||yo()});const i=wt(()=>U.solution),s=wt(()=>{var y;return((y=i.value)==null?void 0:y.moves.length)??0}),r=wt(()=>U.pointer>=s.value),o=wt(()=>U.busy||U.pointer===0),a=y=>Tu(U.n,y),l=wt(()=>{if(!i.value||r.value)return null;const y=Qa()[U.pointer],_=i.value.stages[y.stage],x=_.steps[y.step];return{stageIdx:y.stage,stage:_,step:x,stepIdx:y.step}}),u=wt(()=>l.value?Qa()[U.pointer].index:0),c=wt(()=>l.value?a(l.value.stage.id).title:""),f=wt(()=>{var x,L,C;const y=((x=l.value)==null?void 0:x.stage)??i.value.stages[i.value.stages.length-1],_=a(y.id);return{n:U.n,stageTitle:_.title,goal:_.goal,concept:_.concept,stepLabel:((L=l.value)==null?void 0:L.step.label)??"",moves:((C=l.value)==null?void 0:C.step.moves)??[]}});async function h(){e.value=!0,await Za(),e.value=!1}async function m(){for(t.value=!0;t.value&&U.pointer<s.value;)await ur();const y=t.value&&U.pointer>=s.value&&Ka.value;t.value=!1,y&&U.finale&&fw()}async function g(){if(U.quickSolveRequest=!1,t.value)return;e.value=!0;const y=await Za();e.value=!1,y&&m()}Lt(()=>U.quickSolveRequest,y=>y&&g(),{immediate:!0});function v(){t.value?t.value=!1:m()}async function p(){const y=U.speed;for(U.speed=10;U.pointer<s.value;)await ur();U.speed=y}async function d(){t.value=!1;const y=U.speed;for(U.speed=10;U.pointer>0;)await Pa();U.speed=y}return Is(()=>{t.value=!1,U.playing=!1,yo()}),(y,_)=>(pe(),_e("section",JA,[_[18]||(_[18]=A("h2",null,"Solve it step by step",-1)),A("div",ZA,[A("button",{class:"primary",disabled:!H(ai).ok||e.value||H(U).solving||H(U).editing,onClick:h},Se(e.value||H(U).solving?"Solving…":"Find solution"),9,QA),H(Ka)&&!i.value?(pe(),_e("span",eC,"Already solved!")):at("",!0)]),H(ai).ok?at("",!0):(pe(),_e("ul",tC,[(pe(!0),_e(ht,null,Ot(H(ai).errors,x=>(pe(),_e("li",{key:x,innerHTML:x},null,8,nC))),128))])),H(U).solveError?(pe(),_e("p",iC,Se(H(U).solveError),1)):at("",!0),i.value?(pe(),_e(ht,{key:2},[A("p",sC,Se(i.value.moves.length)+" moves in "+Se(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),A("div",rC,[A("button",{title:"Back to start",disabled:o.value,onClick:d},"⏮",8,oC),A("button",{title:"Previous move",disabled:o.value,onClick:_[0]||(_[0]=(...x)=>H(Pa)&&H(Pa)(...x))},"◀",8,aC),A("button",{class:"primary",title:t.value?"Pause":"Play",disabled:r.value&&!t.value,onClick:v},Se(t.value?"⏸":"▶")+" (enter/return) ",9,lC),A("button",{title:"Next move",disabled:r.value||H(U).busy,onClick:_[1]||(_[1]=(...x)=>H(ur)&&H(ur)(...x))},"▶| (spacebar)",8,cC),A("button",{title:"Jump to end",disabled:r.value||H(U).busy,onClick:p},"⏭",8,uC)]),A("div",fC,[A("div",{style:di({width:`${H(U).pointer/Math.max(1,s.value)*100}%`})},null,4)]),A("details",null,[_[15]||(_[15]=A("summary",null,"Playback settings",-1)),A("label",dC,[_[7]||(_[7]=et(" Speed ",-1)),Nt(A("input",{"onUpdate:modelValue":_[2]||(_[2]=x=>H(U).speed=x),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[hn,H(U).speed,void 0,{number:!0}]])]),A("label",hC,[Nt(A("input",{"onUpdate:modelValue":_[3]||(_[3]=x=>H(U).drama=x),type:"checkbox"},null,512),[[Ni,H(U).drama]]),_[8]||(_[8]=et(" Extra drama ",-1)),_[9]||(_[9]=A("small",null,"- slow, smooth camera rotation during playback",-1))]),A("label",pC,[_[10]||(_[10]=et(" Rotation speed ",-1)),Nt(A("input",{"onUpdate:modelValue":_[4]||(_[4]=x=>H(U).dramaSpeed=x),type:"range",min:"0.05",max:"1.2",step:"0.01"},null,512),[[hn,H(U).dramaSpeed,void 0,{number:!0}]])]),A("label",mC,[Nt(A("input",{"onUpdate:modelValue":_[5]||(_[5]=x=>H(U).finale=x),type:"checkbox"},null,512),[[Ni,H(U).finale]]),_[11]||(_[11]=et(" Extra, extra drama ",-1)),_[12]||(_[12]=A("small",null,"- 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),A("label",gC,[Nt(A("input",{"onUpdate:modelValue":_[6]||(_[6]=x=>H(U).fullscreenOnPlay=x),type:"checkbox"},null,512),[[Ni,H(U).fullscreenOnPlay]]),_[13]||(_[13]=et(" Fullscreen mode ",-1)),_[14]||(_[14]=A("small",null,"When enabled, hitting Play makes the cube go fullscreen",-1))])]),l.value?(pe(),_e("div",vC,[A("div",_C,[et(Se(c.value)+" ",1),A("small",null,"- "+Se(l.value.step.label),1)]),A("div",xC,[(pe(!0),_e(ht,null,Ot(l.value.step.moves,(x,L)=>(pe(),_e("span",{key:L,class:Pt(["move",{done:u.value>L,active:u.value===L}])},Se(x),3))),128))])])):r.value?(pe(),_e("p",yC,"Finished - the cube is solved.")):at("",!0),A("details",null,[_[16]||(_[16]=A("summary",null,"Tutor",-1)),Xt(jA,{context:f.value},null,8,["context"]),_[17]||(_[17]=A("h3",null,"All stages",-1)),A("ol",MC,[(pe(!0),_e(ht,null,Ot(i.value.stages,(x,L)=>(pe(),_e("li",{key:x.id,class:Pt({active:l.value&&l.value.stageIdx===L})},[A("div",SC,[et(Se(a(x.id).title)+" ",1),A("small",null,Se(x.moves.length?`${x.moves.length} moves`:"already done"),1)]),A("div",bC,Se(a(x.id).goal),1),x.steps.length?(pe(),_e("ul",EC,[(pe(!0),_e(ht,null,Ot(x.steps,(C,I)=>(pe(),_e("li",{key:I},[A("span",wC,Se(C.label),1),A("code",null,Se(C.moves.join(" ")),1)]))),128))])):at("",!0)],2))),128))])])],64)):at("",!0)]))}},AC=An(TC,[["__scopeId","data-v-5787e9c5"]]);function CC(n,e,t,i){const s=n.target;return n.key!=="Backspace"||n.ctrlKey||n.metaKey||n.altKey||["INPUT","TEXTAREA","SELECT"].includes(s==null?void 0:s.tagName)||s!=null&&s.isContentEditable||!(e!=null&&e.contains(s))?!1:(n.preventDefault(),t&&!n.repeat&&i(),!0)}const RC={class:"app"},PC=["disabled"],LC=["aria-expanded"],IC={"aria-label":"Main navigation"},DC=["onClick"],UC={class:"stage"},NC={class:"overlay"},FC={class:"view-controls"},OC=["title","disabled"],kC=["aria-pressed","aria-label"],BC={class:"zoom-control"},zC=["value"],HC={key:0,class:"badge"},VC={key:1,class:"badge ok"},GC={key:2,class:"brush-chip",title:"Last assigned colour"},WC={key:0,class:"status ok small"},$C={key:1,class:"status bad small"},XC=["innerHTML"],qC={class:"frame-height-control"},YC=["min","max","value"],KC=["disabled"],jC=["disabled"],JC=["disabled"],ZC=["aria-pressed"],QC=["aria-pressed"],eR={class:"mobile-hint","aria-live":"polite"},tR={key:0,class:"status bad",role:"alert"},nR={class:"mouse-drag-control"},iR={key:0,class:"status bad",role:"alert"},sR={key:1,class:"note"},rR={key:2,class:"status bad",role:"alert"},oR={key:3,class:"note",role:"status"},aR=300,lR=340,cR=14,uR={__name:"App",setup(n){const e=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"},{id:"about",label:"About"}],t=He(null),i=He(50),s=He(null),r=He(null),o=He(!1);function a(P=!1){var b;o.value&&(o.value=!1,P&&((b=r.value)==null||b.focus()))}function l(P){var b;(b=s.value)!=null&&b.contains(P.target)||a()}const u=He(null),c=He(Math.max(300,Math.min(window.innerHeight*.62,640))),f=He(null),h=He(65),m=He(90),g=He(null),v=He(window.innerHeight),p=wt(()=>Math.max(1,Math.floor(v.value-h.value-m.value))),d=wt(()=>Math.min(250,p.value));function y(P){g.value=Math.min(p.value,Math.max(d.value,P))}function _(){v.value=window.innerHeight}Lt(p,()=>{g.value!==null&&y(g.value)});let x;const L=He(!1),C=He(!1),I=He(!1),F=He(!1),w=He("rotate"),M=He(!1),D=He(""),Z=wt(()=>M.value||U.busy||U.playing||U.solving||U.exploding||U.quickSolveRequest),Q=wt(()=>!Z.value&&ai.value.ok&&(!U.solution||U.pointer<U.solution.moves.length)),oe=wt(()=>U.mode==="setup"&&U.showAllColorsOnHover);function de(P){w.value=P,U.editing=!1}async function J(P){if(!Z.value){M.value=!0,D.value="",U.editing=!1;try{await(P==="reset"?ja():Ja())}catch(b){D.value=`Could not ${P}: ${b.message}`}finally{M.value=!1}}}async function fe(){if(!ai.value.ok)throw new Error("Cannot solve this cube: check the position in Set up.");if(!U.solution&&!await Za())throw new Error(U.solveError||"Could not compute a solution.");U.mode="solve",await ur()}async function W(){if(Q.value){M.value=!0,D.value="",U.editing=!1;try{await fe()}catch(P){D.value=P.message}finally{M.value=!1}}}function we(P,b){if(U.editing){if(b===void 0)return Ru(P);U.brush=b,Ru(P,b)}}const Y=He(null),O=He(0),$=He(!1);function Ce(P){const b=Y.value,X=b.querySelector(".stage"),K=P.clientX,te=X.getBoundingClientRect().width,ae=getComputedStyle(b),ge=b.clientWidth-parseFloat(ae.paddingLeft)-parseFloat(ae.paddingRight)-cR-lR;$.value=!0;function re(S){O.value=Math.round(Math.max(aR,Math.min(ge,te+S.clientX-K)))}function E(){$.value=!1,window.removeEventListener("pointermove",re),window.removeEventListener("pointerup",E)}window.addEventListener("pointermove",re),window.addEventListener("pointerup",E)}const ee=wt(()=>ai.value.ok&&!U.playing&&!U.busy&&!U.solving&&!U.exploding&&!U.countdown);function ce(P=!0){var b,X;ee.value&&(U.editing=!1,U.drama=!0,U.finale=!0,U.speed=.5,U.dramaSpeed=1.2,U.fullscreenOnPlay=P,P&&((X=(b=u.value)==null?void 0:b.requestFullscreen)==null||X.call(b).catch(()=>{})),U.mode="solve",U.quickSolveRequest=!0)}let be,he=!1;async function Ne(P,b){var X;if(Vm.has(P)){U.exploding||(X=t.value)==null||X.gamepadView(P,b);return}if(!(he||U.busy||U.playing||U.solving||U.exploding||U.editing||U.quickSolveRequest)){he=!0;try{if(P==="quick-solve")ee.value?(ce(!1),le.message="Quick Solve started. For fullscreen, use the mouse Quick Solve button."):le.error="Quick Solve requires a valid cube position.";else if(P==="next-step")await fe();else if(P==="undo")await gc();else if(P==="scramble")await Ja();else if(P==="reset")await ja();else{const[K,te]=P.split("-"),ae=te==="ccw"?"'":te==="double"?"2":"";await pi(t.value.viewRelativeMove(K,ae))}}catch(K){le.error=`Gamepad action failed: ${K.message}`}finally{he=!1}}}function Be(P){L.value=!0;const b=P.clientY,X=u.value.getBoundingClientRect().height,K=window.matchMedia("(hover: none) and (pointer: coarse), (max-width: 600px)").matches;function te(ge){const re=ge.clientY-b;K?y(X+re):c.value=Math.max(300,X+re)}function ae(){L.value=!1,window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",ae)}window.addEventListener("pointermove",te),window.addEventListener("pointerup",ae)}function je(P){var b,X;(P.target===u.value||((b=P.target)==null?void 0:b.tagName)==="CANVAS")&&((X=u.value)==null||X.focus({preventScroll:!0}))}function ot(P){var K,te;if(CC(P,u.value,Eh.value&&!Z.value,gc))return;const b=(K=P.target)==null?void 0:K.tagName;if(b==="INPUT"||b==="TEXTAREA"||b==="SELECT"||(te=P.target)!=null&&te.isContentEditable||P.ctrlKey||P.metaKey||P.altKey)return;const X=P.key.toUpperCase();!"UDLRFB".includes(X)||X.length!==1||U.editing||(P.preventDefault(),pi(P.shiftKey?`${X}'`:X))}bo(()=>{x=new ResizeObserver(()=>{h.value=s.value.getBoundingClientRect().height,m.value=f.value.getBoundingClientRect().height}),x.observe(s.value),x.observe(f.value),window.addEventListener("resize",_),ow((P,b,X)=>t.value.animate(P,b,X)),aw(()=>t.value.explode()),window.addEventListener("keydown",ot),document.addEventListener("pointerdown",l),be=GT(Ne),document.addEventListener("fullscreenchange",()=>{C.value=!!document.fullscreenElement,C.value||(I.value=!1)})}),Is(()=>{window.removeEventListener("keydown",ot),document.removeEventListener("pointerdown",l),be==null||be(),x==null||x.disconnect(),window.removeEventListener("resize",_)}),Lt(()=>({playing:U.playing,mode:U.mode}),P=>{var b;P.mode==="solve"&&P.playing&&U.fullscreenOnPlay&&((b=u.value)!=null&&b.requestFullscreen)&&u.value.requestFullscreen().catch(()=>{})},{immediate:!1}),Lt(()=>({ptr:U.pointer,sol:U.solution,exploding:U.exploding,countdown:U.countdown}),P=>{var X;P.sol&&P.ptr>=(((X=P.sol.moves)==null?void 0:X.length)??0)&&!P.exploding&&P.countdown===0&&document.fullscreenElement===u.value&&setTimeout(()=>I.value=!0,2e3)});function R(){document.fullscreenElement&&document.exitFullscreen()}return(P,b)=>(pe(),_e("div",RC,[A("header",{ref_key:"headerEl",ref:s,onKeydown:b[2]||(b[2]=Ha(X=>a(!0),["esc"]))},[b[19]||(b[19]=A("h1",null,[A("a",{class:"logo",href:"https://github.com/sterudo/RubriksSolver",target:"_blank",rel:"noopener",title:"Open the repository on GitHub"},"🧊 Rubik's Solver")],-1)),A("button",{class:"quick-solve",disabled:!ee.value,title:"Fullscreen, full drama, solve and play",onClick:b[0]||(b[0]=X=>{ce(),a()})}," ⚡ Quick Solve ",8,PC),A("button",{ref_key:"menuToggle",ref:r,class:"menu-toggle","aria-label":"Toggle navigation","aria-controls":"header-actions","aria-expanded":o.value,onClick:b[1]||(b[1]=X=>o.value=!o.value)},[...b[18]||(b[18]=[A("span",{"aria-hidden":"true"},"☰",-1)])],8,LC),A("div",{id:"header-actions",class:Pt(["header-actions",{open:o.value}])},[A("nav",IC,[(pe(),_e(ht,null,Ot(e,X=>A("button",{key:X.id,class:Pt({on:H(U).mode===X.id}),onClick:K=>{H(dw)(X.id),a()}},Se(X.label),11,DC)),64))])],2)],544),A("main",{ref_key:"mainEl",ref:Y,style:di(O.value?{"--left-w":O.value+"px"}:null)},[A("div",UC,[A("div",{class:"viewport",ref_key:"viewport",ref:u,tabindex:"0","aria-label":"Interactive cube",onPointerdown:je,style:di({height:c.value+"px","--mobile-header-height":h.value+"px","--mobile-bar-height":m.value+"px","--touch-frame-height":g.value?g.value+"px":null})},[Xt(VE,{ref_key:"cube",ref:t,n:H(U).n,state:H($t),paintable:H(U).editing,locked:H(U).busy||H(U).exploding,drama:H(U).drama&&H(U).playing,dramaSpeed:H(U).dramaSpeed,rumble:H(U).countdown?(4-H(U).countdown)/3:0,hoverColors:oe.value,touchMode:w.value,swapMouseButtons:H(U).swapMouseButtons,touchLocked:H(U).playing||H(U).solving||H(U).quickSolveRequest||M.value,onPaint:we,onLayerturn:b[3]||(b[3]=(X,K)=>H(pi)(X,K)),onHovering:b[4]||(b[4]=X=>F.value=X),onZoom:b[5]||(b[5]=X=>i.value=X)},null,8,["n","state","paintable","locked","drama","dramaSpeed","rumble","hoverColors","touchMode","swapMouseButtons","touchLocked"]),A("div",NC,[A("div",FC,[A("button",{class:"reset-view",title:"Reset camera",onClick:b[6]||(b[6]=X=>{var K;return(K=t.value)==null?void 0:K.resetView()})},"⟲ View"),A("button",{class:"undo-view",title:`${H(U).editing?"Undo last paint action":"Undo last move"} (Backspace when cube is focused)`,"aria-keyshortcuts":"Backspace",disabled:!H(Eh)||Z.value,onClick:b[7]||(b[7]=X=>H(gc)())},"Undo",8,OC),A("button",{class:"touch-mode-toggle","aria-pressed":w.value==="move","aria-label":`Move swipe mode ${w.value==="move"?"on":"off"}`,onClick:b[8]||(b[8]=X=>de(w.value==="rotate"?"move":"rotate"))},Se(w.value==="rotate"?"Rotate":"Move"),9,kC)]),A("label",BC,[b[20]||(b[20]=et(" Zoom ",-1)),A("input",{type:"range",min:"0",max:"100",step:"0.1",value:i.value,"aria-label":"Cube zoom",onInput:b[9]||(b[9]=X=>{var K;return(K=t.value)==null?void 0:K.setZoom(Number(X.target.value))})},null,40,zC)]),H(U).editing?(pe(),_e("span",HC,"Painting: click stickers")):H(Ka)?(pe(),_e("span",VC,"Solved ✓")):at("",!0),oe.value&&!F.value?(pe(),_e("span",GC,[A("i",{style:di({background:H(xo)[H(U).brush]})},null,4)])):at("",!0),H(U).mode==="setup"?(pe(),_e("div",{key:3,class:Pt(["validity",{ok:H(ai).ok}])},[H(ai).ok?(pe(),_e("p",WC,"Valid and solvable.")):(pe(),_e("ul",$C,[(pe(!0),_e(ht,null,Ot(H(ai).errors,X=>(pe(),_e("li",{key:X,innerHTML:X},null,8,XC))),128))]))],2)):at("",!0),C.value&&I.value?(pe(),_e("button",{key:4,class:"exit-fullscreen",onClick:b[10]||(b[10]=X=>R())}," Exit Fullscreen mode ")):at("",!0)]),H(U).countdown?(pe(),_e("div",{key:H(U).countdown,class:"countdown","aria-live":"assertive"},[A("span",null,Se(H(U).countdown),1)])):at("",!0),A("div",{class:"resize-handle",onPointerdown:sd(Be,["prevent"])},null,32),A("label",qC,[b[21]||(b[21]=et(" Height ",-1)),A("input",{type:"range",min:d.value,max:p.value,step:"1",value:g.value??p.value,"aria-label":"Cube frame height",onInput:b[11]||(b[11]=X=>y(Number(X.target.value)))},null,40,YC)]),A("div",{ref_key:"mobileBar",ref:f,class:"mobile-controls",role:"toolbar","aria-label":"Cube touch controls"},[A("button",{disabled:Z.value,onClick:b[12]||(b[12]=X=>J("reset"))},"Reset",8,KC),A("button",{disabled:Z.value,onClick:b[13]||(b[13]=X=>J("scramble"))},"Scramble",8,jC),A("button",{disabled:!Q.value,title:"Compute a solution if needed and perform its next move",onClick:W},"Solve",8,JC),A("button",{"aria-pressed":w.value==="rotate",class:Pt({on:w.value==="rotate"}),onClick:b[14]||(b[14]=X=>de("rotate"))},"Rotate",10,ZC),A("button",{"aria-pressed":w.value==="move",class:Pt({on:w.value==="move"}),onClick:b[15]||(b[15]=X=>de("move"))},"Move",10,QC),A("span",eR,Se(w.value==="rotate"?"Swipe to rotate the view; pinch to zoom.":"Swipe a sticker row or column to turn it."),1),D.value?(pe(),_e("span",tR,Se(D.value),1)):at("",!0)],512)],36),A("label",nR,[Nt(A("input",{type:"checkbox","onUpdate:modelValue":b[16]||(b[16]=X=>H(U).swapMouseButtons=X)},null,512),[[Ni,H(U).swapMouseButtons]]),b[22]||(b[22]=et(" Swap left and right mouse drags (left turns layers, right rotates view) ",-1))]),H(U).settingsError?(pe(),_e("p",iR,Se(H(U).settingsError),1)):at("",!0),b[23]||(b[23]=A("p",{class:"keys"}," Drag to look around · right-drag a sticker to turn its layer (swapped by checkbox) · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise) · Backspace undoes when the cube is focused. ",-1)),Xt(Rw),Xt(d1),H(le).connected?(pe(),_e("p",sR,[et(" Gamepad: "+Se(H(le).enabled?H(le).draft.name:"disabled")+" ",1),A("button",{onClick:b[17]||(b[17]=X=>H(U).mode="settings")},"Configure")])):at("",!0),H(le).error?(pe(),_e("p",rR,Se(H(le).error),1)):at("",!0),H(le).message&&H(le).connected?(pe(),_e("p",oR,Se(H(le).message),1)):at("",!0)]),A("div",{class:Pt(["col-divider",{dragging:$.value}]),role:"separator","aria-orientation":"vertical",title:"Drag to resize",onPointerdown:sd(Ce,["prevent"])},null,34),A("aside",null,[H(U).mode==="setup"?(pe(),Ms(PT,{key:0})):H(U).mode==="solve"?(pe(),Ms(AC,{key:1})):H(U).mode==="learn"?(pe(),Ms(Ew,{key:2})):H(U).mode==="settings"?(pe(),Ms(zA,{key:3})):H(U).mode==="about"?(pe(),Ms(XE,{key:4})):(pe(),Ms(Kw,{key:5}))])],4)]))}};U0(uR).mount("#app");
