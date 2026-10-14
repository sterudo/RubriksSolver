(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ct={},Ts=[],ui=()=>{},Fd=()=>!1,Ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Za=n=>n.startsWith("onUpdate:"),ln=Object.assign,Ru=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ng=Object.prototype.hasOwnProperty,Mt=(n,e)=>ng.call(n,e),Ze=Array.isArray,es=n=>yo(n)==="[object Map]",Oi=n=>yo(n)==="[object Set]",yf=n=>yo(n)==="[object Date]",ot=n=>typeof n=="function",Vt=n=>typeof n=="string",pi=n=>typeof n=="symbol",Et=n=>n!==null&&typeof n=="object",Od=n=>(Et(n)||ot(n))&&ot(n.then)&&ot(n.catch),Bd=Object.prototype.toString,yo=n=>Bd.call(n),ig=n=>yo(n).slice(8,-1),kd=n=>yo(n)==="[object Object]",Pu=n=>Vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},sg=/-\w/g,Yn=Qa(n=>n.replace(sg,e=>e.slice(1).toUpperCase())),rg=/\B([A-Z])/g,us=Qa(n=>n.replace(rg,"-$1").toLowerCase()),zd=Qa(n=>n.charAt(0).toUpperCase()+n.slice(1)),vl=Qa(n=>n?`on${zd(n)}`:""),ai=(n,e)=>!Object.is(n,e),ha=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Mf;const tl=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fi(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Vt(i)?cg(i):fi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Vt(n)||Et(n))return n}const og=/;(?![^(]*\))/g,ag=/:([^]+)/,lg=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function cg(n){const e={};return n.replace(lg,t=>t.startsWith("/*")?"":t).split(og).forEach(t=>{if(t){const i=t.split(ag);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ut(n){let e="";if(Vt(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Ut(n[t]);i&&(e+=i+" ")}else if(Et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ug="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=Cu(ug);function Vd(n){return!!n||n===""}function hg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Jn(n[s],e[s],t);return i}function Sf(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Jn(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function dg(n,e,t){let i=es(n),s=es(e);if(i||s||(i=Oi(n),s=Oi(e),i||s))return i&&s?Sf(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Jn(n[a],e[a],t))return!1}return String(n)===String(e)}function bf(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Jn(n,e,t){if(n===e)return!0;let i=yf(n),s=yf(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=pi(n),s=pi(e),i||s?n===e:(i=Ze(n),s=Ze(e),i||s?i&&s?bf(n,e,t,hg):!1:(i=Et(n),s=Et(e),i||s?!i||!s?!1:bf(n,e,t,dg):String(n)===String(e))))}function Lu(n,e){return n.findIndex(t=>Jn(t,e))}const Gd=n=>!!(n&&n.__v_isRef===!0),Ee=n=>Vt(n)?n:n==null?"":Ze(n)||Et(n)&&(n.toString===Bd||!ot(n.toString))?Gd(n)?Ee(n.value):JSON.stringify(n,Wd,2):String(n),Wd=(n,e)=>Gd(e)?Wd(n,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[_l(i,r)+" =>"]=s,t),{})}:Oi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_l(t))}:pi(e)?_l(e):Et(e)&&!Ze(e)&&!kd(e)?String(e):e,_l=(n,e="")=>{var t;return pi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class pg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Zt&&(Zt.active?(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){if(this._on>0&&--this._on===0){if(Zt===this)Zt=this.prevScope;else{let e=Zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mg(){return Zt}let Pt;const xl=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&(Zt.active?Zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ef(this),Yd(this);const e=Pt,t=Kn;Pt=this,Kn=!0;try{return this.fn()}finally{Kd(this),Pt=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uu(e);this.deps=this.depsTail=void 0,Ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mc(this)&&this.run()}get dirty(){return mc(this)}}let Xd=0,Jr,Zr;function qd(n,e=!1){if(n.flags|=8,e){n.next=Zr,Zr=n;return}n.next=Jr,Jr=n}function Du(){Xd++}function Iu(){if(--Xd>0)return;if(Zr){let e=Zr;for(Zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Yd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Uu(i),gg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function mc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function jd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ro)||(n.globalVersion=ro,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!mc(n))))return;n.flags|=2;const e=n.dep,t=Pt,i=Kn;Pt=n,Kn=!0;try{Yd(n);const s=n.fn(n._value);(e.version===0||ai(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pt=t,Kn=i,Kd(n),n.flags&=-3}}function Uu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Uu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function gg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const Jd=[];function Bi(){Jd.push(Kn),Kn=!1}function ki(){const n=Jd.pop();Kn=n===void 0?!0:n}function Ef(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Pt;Pt=void 0;try{e()}finally{Pt=t}}}let ro=0;class vg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pt||!Kn||Pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Pt)t=this.activeLink=new vg(Pt,this),Pt.deps?(t.prevDep=Pt.depsTail,Pt.depsTail.nextDep=t,Pt.depsTail=t):Pt.deps=Pt.depsTail=t,Zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Pt.depsTail,t.nextDep=void 0,Pt.depsTail.nextDep=t,Pt.depsTail=t,Pt.deps===t&&(Pt.deps=i)}return t}trigger(e){this.version++,ro++,this.notify(e)}notify(e){Du();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Iu()}}}function Zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gc=new WeakMap,Ps=Symbol(""),vc=Symbol(""),oo=Symbol("");function nn(n,e,t){if(Kn&&Pt){let i=gc.get(n);i||gc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Nu),s.map=i,s.key=t),s.track()}}function Ci(n,e,t,i,s,r){const o=gc.get(n);if(!o){ro++;return}const a=l=>{l&&l.trigger()};if(Du(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&Pu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===oo||!pi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(oo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ps)),es(n)&&a(o.get(vc)));break;case"delete":l||(a(o.get(Ps)),es(n)&&a(o.get(vc)));break;case"set":es(n)&&a(o.get(Ps));break}}Iu()}function Hs(n){const e=yt(n);return e===n||(nn(e,"iterate",oo),On(n))?e:mi(n)?ts(n)?e.map(t=>os(Bn(t))):e.map(os):e.map(Bn)}function nl(n){return nn(n=yt(n),"iterate",oo),n}function si(n,e){return mi(n)?os(ts(n)?Bn(e):e):Bn(e)}const _g={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,n=>si(this,n))},concat(...n){return Hs(this).concat(...n.map(e=>Ze(e)?Hs(e):e))},entries(){return yl(this,"entries",n=>(n[1]=si(this,n[1]),n))},every(n,e){return vi(this,"every",n,e,void 0,arguments)},filter(n,e){return vi(this,"filter",n,e,t=>t.map(i=>si(this,i)),arguments)},find(n,e){return vi(this,"find",n,e,t=>si(this,t),arguments)},findIndex(n,e){return vi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return vi(this,"findLast",n,e,t=>si(this,t),arguments)},findLastIndex(n,e){return vi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return vi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ml(this,"includes",n)},indexOf(...n){return Ml(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return Ml(this,"lastIndexOf",n)},map(n,e){return vi(this,"map",n,e,void 0,arguments)},pop(){return Ir(this,"pop")},push(...n){return Ir(this,"push",n)},reduce(n,...e){return wf(this,"reduce",n,e)},reduceRight(n,...e){return wf(this,"reduceRight",n,e)},shift(){return Ir(this,"shift")},some(n,e){return vi(this,"some",n,e,void 0,arguments)},splice(...n){return Ir(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return Ir(this,"unshift",n)},values(){return yl(this,"values",n=>si(this,n))}};function yl(n,e,t){const i=nl(n),s=i[e]();return i!==n&&!On(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const xg=Array.prototype;function vi(n,e,t,i,s,r){const o=nl(n),a=o!==n&&!On(n),l=o[e];if(l!==xg[e]){const f=l.apply(n,r);return a?Bn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,si(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wf(n,e,t,i){const s=nl(n),r=s!==n&&!On(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=si(n,c)),t.call(this,c,si(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](o,...i);return a?si(n,l):l}function Ml(n,e,t){const i=yt(n);nn(i,"iterate",oo);const s=i[e](...t);return(s===-1||s===!1)&&Bu(t[0])?(t[0]=yt(t[0]),i[e](...t)):s}function Ir(n,e,t=[]){Bi(),Du();const i=yt(n)[e].apply(n,t);return Iu(),ki(),i}const yg=Cu("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(pi));function Mg(n){pi(n)||(n=String(n));const e=yt(this);return nn(e,"has",n),e.hasOwnProperty(n)}class ep{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Lg:sp:r?ip:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=_g[t]))return l;if(t==="hasOwnProperty")return Mg}const a=Reflect.get(e,t,on(e)?e:i);if((pi(t)?Qd.has(t):yg(t))||(s||nn(e,"get",t),r))return a;if(on(a)){const l=o&&Pu(t)?a:a.value;return s&&Et(l)?xc(l):l}return Et(a)?s?xc(a):Fn(a):a}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ze(e)&&Pu(t);if(!this._isShallow){const c=mi(r);if(!On(i)&&!mi(i)&&(r=yt(r),i=yt(i)),!o&&on(r)&&!on(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:Mt(e,t),l=Reflect.set(e,t,i,on(e)?e:s);return e===yt(s)&&l&&(a?ai(i,r)&&Ci(e,"set",t,i):Ci(e,"add",t,i)),l}deleteProperty(e,t){const i=Mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!pi(t)||!Qd.has(t))&&nn(e,"has",t),i}ownKeys(e){return nn(e,"iterate",Ze(e)?"length":Ps),Reflect.ownKeys(e)}}class Sg extends ep{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bg=new tp,Eg=new Sg,wg=new tp(!0);const _c=n=>n,Ro=n=>Reflect.getPrototypeOf(n);function Tg(n,e,t){return function(...i){const s=this.__v_raw,r=yt(s),o=es(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?_c:e?os:Bn;return!e&&nn(r,"iterate",l?vc:Ps),ln(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Po(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ag(n,e){const t={get(s){const r=this.__v_raw,o=yt(r),a=yt(s);n||(ai(s,a)&&nn(o,"get",s),nn(o,"get",a));const{has:l}=Ro(o),c=e?_c:n?os:Bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&nn(yt(s),"iterate",Ps),s.size},has(s){const r=this.__v_raw,o=yt(r),a=yt(s);return n||(ai(s,a)&&nn(o,"has",s),nn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=yt(a),c=e?_c:n?os:Bn;return!n&&nn(l,"iterate",Ps),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return ln(t,n?{add:Po("add"),set:Po("set"),delete:Po("delete"),clear:Po("clear")}:{add(s){const r=yt(this),o=Ro(r),a=yt(s),l=!e&&!On(s)&&!mi(s)?a:s;return o.has.call(r,l)||ai(s,l)&&o.has.call(r,s)||ai(a,l)&&o.has.call(r,a)||(r.add(l),Ci(r,"add",l,l)),this},set(s,r){!e&&!On(r)&&!mi(r)&&(r=yt(r));const o=yt(this),{has:a,get:l}=Ro(o);let c=a.call(o,s);c||(s=yt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ai(r,u)&&Ci(o,"set",s,r):Ci(o,"add",s,r),this},delete(s){const r=yt(this),{has:o,get:a}=Ro(r);let l=o.call(r,s);l||(s=yt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ci(r,"delete",s,void 0),c},clear(){const s=yt(this),r=s.size!==0,o=s.clear();return r&&Ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Tg(s,n,e)}),t}function Fu(n,e){const t=Ag(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Mt(t,s)&&s in i?t:i,s,r)}const Cg={get:Fu(!1,!1)},Rg={get:Fu(!1,!0)},Pg={get:Fu(!0,!1)};const np=new WeakMap,ip=new WeakMap,sp=new WeakMap,Lg=new WeakMap;function Dg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fn(n){return mi(n)?n:Ou(n,!1,bg,Cg,np)}function Ig(n){return Ou(n,!1,wg,Rg,ip)}function xc(n){return Ou(n,!0,Eg,Pg,sp)}function Ou(n,e,t,i,s){if(!Et(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Dg(ig(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function ts(n){return mi(n)?ts(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function On(n){return!!(n&&n.__v_isShallow)}function Bu(n){return n?!!n.__v_raw:!1}function yt(n){const e=n&&n.__v_raw;return e?yt(e):n}function Ug(n){return!Mt(n,"__v_skip")&&Object.isExtensible(n)&&Hd(n,"__v_skip",!0),n}const Bn=n=>Et(n)?Fn(n):n,os=n=>Et(n)?xc(n):n;function on(n){return n?n.__v_isRef===!0:!1}function qe(n){return rp(n,!1)}function Ng(n){return rp(n,!0)}function rp(n,e){return on(n)?n:new Fg(n,e)}class Fg{constructor(e,t){this.dep=new Nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:yt(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||On(e)||mi(e);e=i?e:yt(e),ai(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function $(n){return on(n)?n.value:n}const Og={get:(n,e,t)=>e==="__v_raw"?n:$(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return on(s)&&!on(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function op(n){return ts(n)?n:new Proxy(n,Og)}class Bg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return qd(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kg(n,e,t=!1){let i,s;return ot(n)?i=n:(i=n.get,s=n.set),new Bg(i,s,t)}const Lo={},Pa=new WeakMap;let ys;function zg(n,e=!1,t=ys){if(t){let i=Pa.get(t);i||Pa.set(t,i=[]),i.push(n)}}function Hg(n,e,t=Ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:On(x)||s===!1||s===0?Ri(x,1):Ri(x);let u,f,d,p,g=!1,v=!1;if(on(n)?(f=()=>n.value,g=On(n)):ts(n)?(f=()=>c(n),g=!0):Ze(n)?(v=!0,g=n.some(x=>ts(x)||On(x)),f=()=>n.map(x=>{if(on(x))return x.value;if(ts(x))return c(x);if(ot(x))return l?l(x,2):x()})):ot(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Bi();try{d()}finally{ki()}}const x=ys;ys=u;try{return l?l(n,3,[p]):n(p)}finally{ys=x}}:f=ui,e&&s){const x=f,P=s===!0?1/0:s;f=()=>Ri(x(),P)}const m=mg(),h=()=>{u.stop(),m&&m.active&&Ru(m.effects,u)};if(r&&e){const x=e;e=(...P)=>{const A=x(...P);return h(),A}}let y=v?new Array(n.length).fill(Lo):Lo;const _=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(x||s||g||(v?P.some((A,L)=>ai(A,y[L])):ai(P,y))){d&&d();const A=ys;ys=u;try{const L=[P,y===Lo?void 0:v&&y[0]===Lo?[]:y,p];y=P,l?l(e,3,L):e(...L)}finally{ys=A}}}else u.run()};return a&&a(_),u=new $d(f),u.scheduler=o?()=>o(_,!1):_,p=x=>zg(x,!1,u),d=u.onStop=()=>{const x=Pa.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Pa.delete(u)}},e?i?_(!0):y=u.run():o?o(_.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ri(n,e=1/0,t){if(e<=0||!Et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,on(n))Ri(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(Oi(n)||es(n))n.forEach(i=>{Ri(i,e,t)});else if(kd(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(n,e,t,i){try{return i?n(...i):n()}catch(s){il(s,e,t)}}function Zn(n,e,t,i){if(ot(n)){const s=Mo(n,e,t,i);return s&&Od(s)&&s.catch(r=>{il(r,e,t)}),s}if(Ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Zn(n[r],e,t,i));return s}}function il(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Bi(),Mo(r,null,10,[n,l,c]),ki();return}}Vg(n,t,s,i,o)}function Vg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const hn=[];let ii=-1;const pr=[];let Ji=null,lr=0;const ap=Promise.resolve();let La=null;function ku(n){const e=La||ap;return n?e.then(this?n.bind(this):n):e}function Gg(n){let e=ii+1,t=hn.length;for(;e<t;){const i=e+t>>>1,s=hn[i],r=ao(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function zu(n){if(!(n.flags&1)){const e=ao(n),t=hn[hn.length-1];!t||!(n.flags&2)&&e>=ao(t)?hn.push(n):hn.splice(Gg(e),0,n),n.flags|=1,lp()}}function lp(){La||(La=ap.then(up))}function Wg(n){if(!Ze(n))Ji&&n.id===-1?Ji.splice(lr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)pr.push(n[e]);lp()}function Tf(n,e,t=ii+1){for(;t<hn.length;t++){const i=hn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;hn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cp(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>ao(t)-ao(i));if(pr.length=0,Ji){for(let t=0;t<e.length;t++)Ji.push(e[t]);return}for(Ji=e,lr=0;lr<Ji.length;lr++){const t=Ji[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ji=null,lr=0}}const ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function up(n){try{for(ii=0;ii<hn.length;ii++){const e=hn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<hn.length;ii++){const e=hn[ii];e&&(e.flags&=-2)}ii=-1,hn.length=0,cp(),La=null,(hn.length||pr.length)&&up()}}let In=null,fp=null;function Da(n){const e=In;return In=n,fp=n&&n.type.__scopeId||null,e}function $g(n,e=In,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Of(-1);const r=Da(e),o=Ls.length;let a;try{a=n(...s)}finally{for(let l=Ls.length;l>o;l--)Np();Da(r),i._d&&Of(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ft(n,e){if(In===null)return n;const t=ll(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ct]=e[s];r&&(ot(r)&&(r={mounted:r,updated:r}),r.deep&&Ri(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function fs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Bi(),Zn(l,t,8,[n.el,a,n,e]),ki())}}function Xg(n,e){if(dn){let t=dn.provides;const i=dn.parent&&dn.parent.provides;i===t&&(t=dn.provides=Object.create(i)),t[n]=e}}function da(n,e,t=!1){const i=Vv();if(i||mr){let s=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ot(e)?e.call(i&&i.proxy):e}}const qg=Symbol.for("v-scx"),Yg=()=>da(qg);function Ot(n,e,t){return hp(n,e,t)}function hp(n,e,t=Ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=ln({},t),l=e&&i||!e&&r!=="post";let c;if(uo){if(r==="sync"){const p=Yg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ui,p.resume=ui,p.pause=ui,p}}const u=dn;a.call=(p,g,v)=>Zn(p,u,g,v);let f=!1;r==="post"?a.scheduler=p=>{gn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():zu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Hg(n,e,a);return uo&&(c?c.push(d):l&&d()),d}function Kg(n,e,t){const i=this.proxy,s=Vt(n)?n.includes(".")?dp(i,n):()=>i[n]:n.bind(i,i);let r;ot(e)?r=e:(r=e.handler,t=e);const o=bo(this),a=hp(s,r.bind(i),t);return o(),a}function dp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const jg=Symbol("_vte"),sl=n=>n.__isTeleport,Sl=Symbol("_leaveCb");function Jg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==zi){e=t;break}}return e}function pp(n){if(!Vu(n))return sl(n.type)&&n.children?Jg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ot(t.default))return t.default()}}function Hu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Hu(sl(t.type)&&pp(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function mp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Af(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ia=new WeakMap;function Qr(n,e,t,i,s=!1){if(Ze(n)){n.forEach((v,m)=>Qr(v,e&&(Ze(e)?e[m]:e),t,i,s));return}if(eo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ll(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ct?a.refs={}:a.refs,f=a.setupState,d=yt(f),p=f===Ct?Fd:v=>Af(u,v)?!1:Mt(d,v),g=(v,m)=>!(m&&Af(u,m));if(c!=null&&c!==l){if(Cf(e),Vt(c))u[c]=null,p(c)&&(f[c]=null);else if(on(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ot(l))Mo(l,a,12,[o,u]);else{const v=Vt(l),m=on(l);if(v||m){const h=()=>{if(n.f){const y=v?p(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ze(y)&&Ru(y,r);else if(Ze(y))y.includes(r)||y.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const _=[r];g(l,n.k)&&(l.value=_),n.k&&(u[n.k]=_)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{h(),Ia.delete(n)};y.id=-1,Ia.set(n,y),gn(y,t)}else Cf(n),h()}}}function Cf(n){const e=Ia.get(n);e&&(e.flags|=8,Ia.delete(n))}tl().requestIdleCallback;tl().cancelIdleCallback;const eo=n=>!!n.type.__asyncLoader,Vu=n=>n.type.__isKeepAlive;function Zg(n,e){gp(n,"a",e)}function Qg(n,e){gp(n,"da",e)}function gp(n,e,t=dn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(rl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Vu(s.parent.vnode)&&ev(i,e,t,s),s=s.parent}}function ev(n,e,t,i){const s=rl(e,n,i,!0);vp(()=>{Ru(i[e],s)},t)}function rl(n,e,t=dn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Bi();const a=bo(t),l=Zn(e,t,n,o);return a(),ki(),l});return i?s.unshift(r):s.push(r),r}}const Vi=n=>(e,t=dn)=>{(!uo||n==="sp")&&rl(n,(...i)=>e(...i),t)},tv=Vi("bm"),So=Vi("m"),nv=Vi("bu"),iv=Vi("u"),Ds=Vi("bum"),vp=Vi("um"),sv=Vi("sp"),rv=Vi("rtg"),ov=Vi("rtc");function av(n,e=dn){rl("ec",n,e)}const lv=Symbol.for("v-ndc");function kt(n,e,t,i){let s;const r=t,o=Ze(n);if(o||Vt(n)){const a=o&&ts(n);let l=!1,c=!1;a&&(l=!On(n),c=mi(n),n=nl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?os(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Et(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const yc=n=>n?kp(n)?ll(n):yc(n.parent):null,to=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yc(n.parent),$root:n=>yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xp(n),$forceUpdate:n=>n.f||(n.f=()=>{zu(n.update)}),$nextTick:n=>n.n||(n.n=ku.bind(n.proxy)),$watch:n=>Kg.bind(n)}),bl=(n,e)=>n!==Ct&&!n.__isScriptSetup&&Mt(n,e),cv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(bl(i,e))return o[e]=1,i[e];if(s!==Ct&&Mt(s,e))return o[e]=2,s[e];if(Mt(r,e))return o[e]=3,r[e];if(t!==Ct&&Mt(t,e))return o[e]=4,t[e];Mc&&(o[e]=0)}}const c=to[e];let u,f;if(c)return e==="$attrs"&&nn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ct&&Mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return bl(s,e)?(s[e]=t,!0):i!==Ct&&Mt(i,e)?(i[e]=t,!0):Mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ct&&a[0]!=="$"&&Mt(n,a)||bl(e,a)||Mt(r,a)||Mt(i,a)||Mt(to,a)||Mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rf(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Mc=!0;function uv(n){const e=xp(n),t=n.proxy,i=n.ctx;Mc=!1,e.beforeCreate&&Pf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:_,unmounted:x,render:P,renderTracked:A,renderTriggered:L,errorCaptured:F,serverPrefetch:w,expose:M,inheritAttrs:D,components:Q,directives:J,filters:re}=e;if(c&&fv(c,i,null),o)for(const fe in o){const X=o[fe];ot(X)&&(i[fe]=X.bind(t))}if(s){const fe=s.call(t,t);Et(fe)&&(n.data=Fn(fe))}if(Mc=!0,r)for(const fe in r){const X=r[fe],Ae=ot(X)?X.bind(t,t):ot(X.get)?X.get.bind(t,t):ui,Y=!ot(X)&&ot(X.set)?X.set.bind(t):ui,O=It({get:Ae,set:Y});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>O.value,set:N=>O.value=N})}if(a)for(const fe in a)_p(a[fe],i,t,fe);if(l){const fe=ot(l)?l.call(t):l;Reflect.ownKeys(fe).forEach(X=>{Xg(X,fe[X])})}u&&Pf(u,n,"c");function K(fe,X){Ze(X)?X.forEach(Ae=>fe(Ae.bind(t))):X&&fe(X.bind(t))}if(K(tv,f),K(So,d),K(nv,p),K(iv,g),K(Zg,v),K(Qg,m),K(av,F),K(ov,A),K(rv,L),K(Ds,y),K(vp,x),K(sv,w),Ze(M))if(M.length){const fe=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(fe,X,{get:()=>t[X],set:Ae=>t[X]=Ae,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===ui&&(n.render=P),D!=null&&(n.inheritAttrs=D),Q&&(n.components=Q),J&&(n.directives=J),w&&mp(n)}function fv(n,e,t=ui){Ze(n)&&(n=Sc(n));for(const i in n){const s=n[i];let r;Et(s)?"default"in s?r=da(s.from||i,s.default,!0):r=da(s.from||i):r=da(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Pf(n,e,t){Zn(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _p(n,e,t,i){let s=i.includes(".")?dp(t,i):()=>t[i];if(Vt(n)){const r=e[n];ot(r)&&Ot(s,r)}else if(ot(n))Ot(s,n.bind(t));else if(Et(n))if(Ze(n))n.forEach(r=>_p(r,e,t,i));else{const r=ot(n.handler)?n.handler.bind(t):e[n.handler];ot(r)&&Ot(s,r,n)}}function xp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ua(l,c,o,!0)),Ua(l,e,o)),Et(e)&&r.set(e,l),l}function Ua(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ua(n,r,t,!0),s&&s.forEach(o=>Ua(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=hv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const hv={data:Lf,props:Df,emits:Df,methods:$r,computed:$r,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:$r,directives:$r,watch:pv,provide:Lf,inject:dv};function Lf(n,e){return e?n?function(){return ln(ot(n)?n.call(this,this):n,ot(e)?e.call(this,this):e)}:e:n}function dv(n,e){return $r(Sc(n),Sc(e))}function Sc(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function $r(n,e){return n?ln(Object.create(null),n,e):e}function Df(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:ln(Object.create(null),Rf(n),Rf(e??{})):e}function pv(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=un(n[i],e[i]);return t}function yp(){return{app:null,config:{isNativeTag:Fd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function gv(n,e){return function(i,s=null){ot(i)||(i=ln({},i)),s!=null&&!Et(s)&&(s=null);const r=yp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:mv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Yv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ot(u.install)?(o.add(u),u.install(c,...f)):ot(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Wt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ll(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;const vv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yn(e)}Modifiers`]||n[`${us(e)}Modifiers`];function _v(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ct;let s=t;const r=e.startsWith("update:"),o=r&&vv(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Vt(u)?u.trim():u)),o.number&&(s=s.map(el)));let a,l=i[a=vl(e)]||i[a=vl(Yn(e))];!l&&r&&(l=i[a=vl(us(e))]),l&&Zn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Zn(c,n,6,s)}}const xv=new WeakMap;function Mp(n,e,t=!1){const i=t?xv:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ot(n)){const l=c=>{const u=Mp(c,e,!0);u&&(a=!0,ln(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Et(n)&&i.set(n,null),null):(Ze(r)?r.forEach(l=>o[l]=null):ln(o,r),Et(n)&&i.set(n,o),o)}function ol(n,e){return!n||!Ja(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Mt(n,e[0].toLowerCase()+e.slice(1))||Mt(n,us(e))||Mt(n,e))}function If(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,m=Da(n);let h,y;try{if(t.shapeFlag&4){const x=s||i,P=x;h=ri(c.call(P,x,u,f,p,d,g)),y=a}else{const x=e;h=ri(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=e.props?a:yv(a)}}catch(x){Ls.length=0,il(x,n,1),h=Wt(zi)}let _=h;if(y&&v!==!1){const x=Object.keys(y),{shapeFlag:P}=_;x.length&&P&7&&(r&&x.some(Za)&&(y=Mv(y,r)),_=xr(_,y,!1,!0))}if(t.dirs&&(_=xr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition){const x=sl(_.type)&&pp(_)||_;Hu(x,t.transition)}return h=_,Da(m),h}const yv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ja(t))&&((e||(e={}))[t]=n[t]);return e},Mv=(n,e)=>{const t={};for(const i in n)(!Za(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Sv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Sp(o,i,d)&&!ol(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uf(i,o,c):!0:!!o;return!1}function Uf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Sp(e,n,r)&&!ol(t,r))return!0}return!1}function Sp(n,e,t){const i=n[t],s=e[t];return t==="style"&&Et(i)&&Et(s)?!Jn(i,s):i!==s}function bv({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const bp={},Ep=()=>Object.create(bp),wp=n=>Object.getPrototypeOf(n)===bp;function Ev(n,e,t,i=!1){const s={},r=Ep();n.propsDefaults=Object.create(null),Tp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Ig(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function wv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=yt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ol(n.emitsOptions,d))continue;const p=e[d];if(l)if(Mt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Yn(d);s[g]=bc(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Tp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Mt(e,f)&&((u=us(f))===f||!Mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=bc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Mt(e,f))&&(delete r[f],c=!0)}c&&Ci(n.attrs,"set","")}function Tp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;s&&Mt(s,u=Yn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ol(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=yt(t),c=a||Ct;for(let u=0;u<r.length;u++){const f=r[u];t[f]=bc(s,l,f,c[f],n,!Mt(c,f))}}return o}function bc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ot(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=bo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===us(t))&&(i=!0))}return i}const Tv=new WeakMap;function Ap(n,e,t=!1){const i=t?Tv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ot(n)){const u=f=>{l=!0;const[d,p]=Ap(f,e,!0);ln(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Et(n)&&i.set(n,Ts),Ts;if(Ze(r))for(let u=0;u<r.length;u++){const f=Yn(r[u]);Nf(f)&&(o[f]=Ct)}else if(r)for(const u in r){const f=Yn(u);if(Nf(f)){const d=r[u],p=o[f]=Ze(d)||ot(d)?{type:d}:ln({},d),g=p.type;let v=!1,m=!0;if(Ze(g))for(let h=0;h<g.length;++h){const y=g[h],_=ot(y)&&y.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(m=!1)}else v=ot(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||Mt(p,"default"))&&a.push(f)}}const c=[o,a];return Et(n)&&i.set(n,c),c}function Nf(n){return n[0]!=="$"&&!jr(n)}const Gu=n=>n==="_"||n==="_ctx"||n==="$stable",Wu=n=>Ze(n)?n.map(ri):[ri(n)],Av=(n,e,t)=>{if(e._n)return e;const i=$g((...s)=>Wu(e(...s)),t);return i._c=!1,i},Cp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Gu(s))continue;const r=n[s];if(ot(r))e[s]=Av(s,r,i);else if(r!=null){const o=Wu(r);e[s]=()=>o}}},Rp=(n,e)=>{const t=Wu(e);n.slots.default=()=>t},Pp=(n,e,t)=>{for(const i in e)(t||!Gu(i))&&(n[i]=e[i])},Cv=(n,e,t)=>{const i=n.slots=Ep();if(n.vnode.shapeFlag&32){const s=e._;s?(Pp(i,e,t),t&&Hd(i,"_",s,!0)):Cp(e,i)}else e&&Rp(n,e)},Rv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Pp(s,e,t):(r=!e.$stable,Cp(e,s)),o=e}else e&&(Rp(n,e),o={default:1});if(r)for(const a in s)!Gu(a)&&o[a]==null&&delete s[a]},gn=Uv;function Pv(n){return Lv(n)}function Lv(n,e){const t=tl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ui,insertStaticContent:g}=n,v=(C,U,T,ve=null,se=null,oe=null,ce=void 0,_e=null,ae=!!U.dynamicChildren)=>{if(C===U)return;C&&!Ur(C,U)&&(ve=he(C),N(C,se,oe,!0),C=null),U.patchFlag===-2&&(ae=!1,U.dynamicChildren=null),U.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(U.dynamicChildren===Ts&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:b,ref:S,shapeFlag:I}=U;switch(b){case al:m(C,U,T,ve);break;case zi:h(C,U,T,ve);break;case pa:C==null&&y(U,T,ve,ce);break;case ht:Q(C,U,T,ve,se,oe,ce,_e,ae);break;default:I&1?P(C,U,T,ve,se,oe,ce,_e,ae):I&6?J(C,U,T,ve,se,oe,ce,_e,ae):(I&64||I&128)&&b.process(C,U,T,ve,se,oe,ce,_e,ae,je)}S!=null&&se?Qr(S,C&&C.ref,oe,U||C,!U):S==null&&C&&C.ref!=null&&Qr(C.ref,null,oe,C,!0)},m=(C,U,T,ve)=>{if(C==null)i(U.el=a(U.children),T,ve);else{const se=U.el=C.el;U.children!==C.children&&c(se,U.children)}},h=(C,U,T,ve)=>{C==null?i(U.el=l(U.children||""),T,ve):U.el=C.el},y=(C,U,T,ve)=>{[C.el,C.anchor]=g(C.children,U,T,ve,C.el,C.anchor)},_=({el:C,anchor:U},T,ve)=>{let se;for(;C&&C!==U;)se=d(C),i(C,T,ve),C=se;i(U,T,ve)},x=({el:C,anchor:U})=>{let T;for(;C&&C!==U;)T=d(C),s(C),C=T;s(U)},P=(C,U,T,ve,se,oe,ce,_e,ae)=>{if(U.type==="svg"?ce="svg":U.type==="math"&&(ce="mathml"),C==null)A(U,T,ve,se,oe,ce,_e,ae);else{const b=C.el&&C.el._isVueCE?C.el:null;try{b&&b._beginPatch(),w(C,U,se,oe,ce,_e,ae)}finally{b&&b._endPatch()}}},A=(C,U,T,ve,se,oe,ce,_e)=>{let ae,b;const{props:S,shapeFlag:I,transition:q,dirs:te}=C;if(ae=C.el=o(C.type,oe,S&&S.is,S),I&8?u(ae,C.children):I&16&&F(C.children,ae,null,ve,se,El(C,oe),ce,_e),te&&fs(C,null,ve,"created"),L(ae,C,C.scopeId,ce,ve),S){for(const Ce in S)Ce!=="value"&&!jr(Ce)&&r(ae,Ce,null,S[Ce],oe,ve);"value"in S&&r(ae,"value",null,S.value,oe),(b=S.onVnodeBeforeMount)&&ni(b,ve,C)}te&&fs(C,null,ve,"beforeMount");const j=Dv(se,q);j&&q.beforeEnter(ae),i(ae,U,T),((b=S&&S.onVnodeMounted)||j||te)&&gn(()=>{try{b&&ni(b,ve,C),j&&q.enter(ae),te&&fs(C,null,ve,"mounted")}finally{}},se)},L=(C,U,T,ve,se)=>{if(T&&p(C,T),ve)for(let oe=0;oe<ve.length;oe++)p(C,ve[oe]);if(se){let oe=se.subTree;if(U===oe||Up(oe.type)&&(oe.ssContent===U||oe.ssFallback===U)){const ce=se.vnode;L(C,ce,ce.scopeId,ce.slotScopeIds,se.parent)}}},F=(C,U,T,ve,se,oe,ce,_e,ae=0)=>{for(let b=ae;b<C.length;b++){const S=C[b]=_e?wi(C[b]):ri(C[b]);v(null,S,U,T,ve,se,oe,ce,_e)}},w=(C,U,T,ve,se,oe,ce)=>{const _e=U.el=C.el;let{patchFlag:ae,dynamicChildren:b,dirs:S}=U;ae|=C.patchFlag&16;const I=C.props||Ct,q=U.props||Ct;let te;if(T&&hs(T,!1),(te=q.onVnodeBeforeUpdate)&&ni(te,T,U,C),S&&fs(U,C,T,"beforeUpdate"),T&&hs(T,!0),b&&(!C.dynamicChildren||C.dynamicChildren.length!==b.length)&&(ae=0,ce=!1,b=null),(I.innerHTML&&q.innerHTML==null||I.textContent&&q.textContent==null)&&u(_e,""),b?M(C.dynamicChildren,b,_e,T,ve,El(U,se),oe):ce||X(C,U,_e,null,T,ve,El(U,se),oe,!1),ae>0){if(ae&16)D(_e,I,q,T,se);else if(ae&2&&I.class!==q.class&&r(_e,"class",null,q.class,se),ae&4&&r(_e,"style",I.style,q.style,se),ae&8){const j=U.dynamicProps;for(let Ce=0;Ce<j.length;Ce++){const Me=j[Ce],Te=I[Me],Xe=q[Me];(Xe!==Te||Me==="value")&&r(_e,Me,Te,Xe,se,T)}}ae&1&&C.children!==U.children&&u(_e,U.children)}else!ce&&b==null&&D(_e,I,q,T,se);((te=q.onVnodeUpdated)||S)&&gn(()=>{te&&ni(te,T,U,C),S&&fs(U,C,T,"updated")},ve)},M=(C,U,T,ve,se,oe,ce)=>{for(let _e=0;_e<U.length;_e++){const ae=C[_e],b=U[_e],S=ae.el&&(ae.type===ht||!Ur(ae,b)||ae.shapeFlag&198)?f(ae.el):T;v(ae,b,S,null,ve,se,oe,ce,!0)}},D=(C,U,T,ve,se)=>{if(U!==T){if(U!==Ct)for(const oe in U)!jr(oe)&&!(oe in T)&&r(C,oe,U[oe],null,se,ve);for(const oe in T){if(jr(oe))continue;const ce=T[oe],_e=U[oe];ce!==_e&&oe!=="value"&&r(C,oe,_e,ce,se,ve)}"value"in T&&r(C,"value",U.value,T.value,se)}},Q=(C,U,T,ve,se,oe,ce,_e,ae)=>{const b=U.el=C?C.el:a(""),S=U.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:q,slotScopeIds:te}=U;te&&(_e=_e?_e.concat(te):te),C==null?(i(b,T,ve),i(S,T,ve),F(U.children||[],T,S,se,oe,ce,_e,ae)):I>0&&I&64&&q&&C.dynamicChildren&&C.dynamicChildren.length===q.length?(M(C.dynamicChildren,q,T,se,oe,ce,_e),(U.key!=null||se&&U===se.subTree)&&Lp(C,U,!0)):X(C,U,T,S,se,oe,ce,_e,ae)},J=(C,U,T,ve,se,oe,ce,_e,ae)=>{U.slotScopeIds=_e,C==null?U.shapeFlag&512?se.ctx.activate(U,T,ve,ce,ae):re(U,T,ve,se,oe,ce,ae):de(C,U,ae)},re=(C,U,T,ve,se,oe,ce)=>{const _e=C.component=Hv(C,ve,se);if(Vu(C)&&(_e.ctx.renderer=je),Gv(_e,!1,ce),_e.asyncDep){if(se&&se.registerDep(_e,K,ce),!C.el){const ae=_e.subTree=Wt(zi);h(null,ae,U,T),C.placeholder=ae.el}}else K(_e,C,U,T,se,oe,ce)},de=(C,U,T)=>{const ve=U.component=C.component;if(Sv(C,U,T))if(ve.asyncDep&&!ve.asyncResolved){U.el=C.el,fe(ve,U,T);return}else ve.next=U,ve.update();else U.el=C.el,ve.vnode=U},K=(C,U,T,ve,se,oe,ce)=>{const _e=()=>{if(C.isMounted){let{next:I,bu:q,u:te,parent:j,vnode:Ce}=C;{const Le=Dp(C);if(Le){I&&(I.el=Ce.el,fe(C,I,ce)),Le.asyncDep.then(()=>{gn(()=>{C.isUnmounted||b()},se)});return}}let Me=I,Te;hs(C,!1),I?(I.el=Ce.el,fe(C,I,ce)):I=Ce,q&&ha(q),(Te=I.props&&I.props.onVnodeBeforeUpdate)&&ni(Te,j,I,Ce),hs(C,!0);const Xe=If(C),Se=C.subTree;C.subTree=Xe,v(Se,Xe,f(Se.el),he(Se),C,se,oe),I.el=Xe.el,Me===null&&bv(C,Xe.el),te&&gn(te,se),(Te=I.props&&I.props.onVnodeUpdated)&&gn(()=>ni(Te,j,I,Ce),se)}else{let I;const{el:q,props:te}=U,{bm:j,m:Ce,parent:Me,root:Te,type:Xe}=C,Se=eo(U);hs(C,!1),j&&ha(j),!Se&&(I=te&&te.onVnodeBeforeMount)&&ni(I,Me,U),hs(C,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Xe,C.parent?C.parent.type:void 0);const Le=C.subTree=If(C);v(null,Le,T,ve,C,se,oe),U.el=Le.el}if(Ce&&gn(Ce,se),!Se&&(I=te&&te.onVnodeMounted)){const Le=U;gn(()=>ni(I,Me,Le),se)}(U.shapeFlag&256||Me&&eo(Me.vnode)&&Me.vnode.shapeFlag&256)&&C.a&&gn(C.a,se),C.isMounted=!0,U=T=ve=null}};C.scope.on();const ae=C.effect=new $d(_e);C.scope.off();const b=C.update=ae.run.bind(ae),S=C.job=ae.runIfDirty.bind(ae);S.i=C,S.id=C.uid,ae.scheduler=()=>zu(S),hs(C,!0),b()},fe=(C,U,T)=>{U.component=C;const ve=C.vnode.props;C.vnode=U,C.next=null,wv(C,U.props,ve,T),Rv(C,U.children,T),Bi(),Tf(C),ki()},X=(C,U,T,ve,se,oe,ce,_e,ae=!1)=>{const b=C&&C.children,S=C?C.shapeFlag:0,I=U.children,{patchFlag:q,shapeFlag:te}=U;if(q>0){if(q&128){Y(b,I,T,ve,se,oe,ce,_e,ae);return}else if(q&256){Ae(b,I,T,ve,se,oe,ce,_e,ae);return}}te&8?(S&16&&be(b,se,oe),I!==b&&u(T,I)):S&16?te&16?Y(b,I,T,ve,se,oe,ce,_e,ae):be(b,se,oe,!0):(S&8&&u(T,""),te&16&&F(I,T,ve,se,oe,ce,_e,ae))},Ae=(C,U,T,ve,se,oe,ce,_e,ae)=>{C=C||Ts,U=U||Ts;const b=C.length,S=U.length,I=Math.min(b,S);let q;for(q=0;q<I;q++){const te=U[q]=ae?wi(U[q]):ri(U[q]);v(C[q],te,T,null,se,oe,ce,_e,ae)}b>S?be(C,se,oe,!0,!1,I):F(U,T,ve,se,oe,ce,_e,ae,I)},Y=(C,U,T,ve,se,oe,ce,_e,ae)=>{let b=0;const S=U.length;let I=C.length-1,q=S-1;for(;b<=I&&b<=q;){const te=C[b],j=U[b]=ae?wi(U[b]):ri(U[b]);if(Ur(te,j))v(te,j,T,null,se,oe,ce,_e,ae);else break;b++}for(;b<=I&&b<=q;){const te=C[I],j=U[q]=ae?wi(U[q]):ri(U[q]);if(Ur(te,j))v(te,j,T,null,se,oe,ce,_e,ae);else break;I--,q--}if(b>I){if(b<=q){const te=q+1,j=te<S?U[te].el:ve;for(;b<=q;)v(null,U[b]=ae?wi(U[b]):ri(U[b]),T,j,se,oe,ce,_e,ae),b++}}else if(b>q)for(;b<=I;)N(C[b],se,oe,!0),b++;else{const te=b,j=b,Ce=new Map;for(b=j;b<=q;b++){const Re=U[b]=ae?wi(U[b]):ri(U[b]);Re.key!=null&&Ce.set(Re.key,b)}let Me,Te=0;const Xe=q-j+1;let Se=!1,Le=0;const We=new Array(Xe);for(b=0;b<Xe;b++)We[b]=0;for(b=te;b<=I;b++){const Re=C[b];if(Te>=Xe){N(Re,se,oe,!0);continue}let et;if(Re.key!=null)et=Ce.get(Re.key);else for(Me=j;Me<=q;Me++)if(We[Me-j]===0&&Ur(Re,U[Me])){et=Me;break}et===void 0?N(Re,se,oe,!0):(We[et-j]=b+1,et>=Le?Le=et:Se=!0,v(Re,U[et],T,null,se,oe,ce,_e,ae),Te++)}const Je=Se?Iv(We):Ts;for(Me=Je.length-1,b=Xe-1;b>=0;b--){const Re=j+b,et=U[Re],tt=U[Re+1],gt=Re+1<S?tt.el||Ip(tt):ve;We[b]===0?v(null,et,T,gt,se,oe,ce,_e,ae):Se&&(Me<0||b!==Je[Me]?O(et,T,gt,2):Me--)}}},O=(C,U,T,ve,se=null)=>{const{el:oe,type:ce,transition:_e,children:ae,shapeFlag:b}=C;if(b&6){O(C.component.subTree,U,T,ve);return}if(b&128){C.suspense.move(U,T,ve);return}if(b&64){ce.move(C,U,T,je);return}if(ce===ht){i(oe,U,T);for(let I=0;I<ae.length;I++)O(ae[I],U,T,ve);i(C.anchor,U,T);return}if(ce===pa){_(C,U,T);return}if(ve!==2&&b&1&&_e)if(ve===0)_e.persisted&&!oe[Sl]?i(oe,U,T):(_e.beforeEnter(oe),i(oe,U,T),gn(()=>_e.enter(oe),se));else{const{leave:I,delayLeave:q,afterLeave:te}=_e,j=()=>{C.ctx.isUnmounted?s(oe):i(oe,U,T)},Ce=()=>{const Me=oe._isLeaving||!!oe[Sl];oe._isLeaving&&oe[Sl](!0),_e.persisted&&!Me?j():I(oe,()=>{j(),te&&te()})};q?q(oe,j,Ce):Ce()}else i(oe,U,T)},N=(C,U,T,ve=!1,se=!1)=>{const{type:oe,props:ce,ref:_e,children:ae,dynamicChildren:b,shapeFlag:S,patchFlag:I,dirs:q,cacheIndex:te,memo:j}=C;if((I===-2||b&&b.hasOnce)&&(se=!1),_e!=null&&(Bi(),Qr(_e,null,T,C,!0),ki()),te!=null&&(!C.ctx||C.ctx===U)&&(U.renderCache[te]=void 0),S&256){U.ctx.deactivate(C);return}const Ce=S&1&&q,Me=!eo(C);let Te;if(Me&&(Te=ce&&ce.onVnodeBeforeUnmount)&&ni(Te,U,C),S&6)ne(C.component,T,ve);else{if(S&128){C.suspense.unmount(T,ve);return}Ce&&fs(C,null,U,"beforeUnmount"),S&64?C.type.remove(C,U,T,je,ve):b&&!b.hasOnce&&(oe!==ht||I>0&&I&64)?be(b,U,T,!1,!0):(oe===ht&&I&384||!se&&S&16)&&be(ae,U,T),ve&&Z(C)}const Xe=j!=null&&te==null;(Me&&(Te=ce&&ce.onVnodeUnmounted)||Ce||Xe)&&gn(()=>{Te&&ni(Te,U,C),Ce&&fs(C,null,U,"unmounted"),Xe&&(C.el=null)},T)},Z=C=>{const{type:U,el:T,anchor:ve,transition:se}=C;if(U===ht){k(T,ve);return}if(U===pa){x(C),se&&!se.persisted&&se.afterLeave&&se.afterLeave();return}const oe=()=>{s(T),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(C.shapeFlag&1&&se&&!se.persisted){const{leave:ce,delayLeave:_e}=se,ae=()=>ce(T,oe);_e?_e(C.el,oe,ae):ae()}else oe()},k=(C,U)=>{let T;for(;C!==U;)T=d(C),s(C),C=T;s(U)},ne=(C,U,T)=>{const{bum:ve,scope:se,job:oe,subTree:ce,um:_e,m:ae,a:b}=C;Ff(ae),Ff(b),ve&&ha(ve),se.stop(),oe?(oe.flags|=8,N(ce,C,U,T)):C.vnode.el&&ce&&(ce.transition=C.vnode.transition,N(ce,C,U,T)),_e&&gn(_e,U),gn(()=>{C.isUnmounted=!0},U)},be=(C,U,T,ve=!1,se=!1,oe=0)=>{for(let ce=oe;ce<C.length;ce++)N(C[ce],U,T,ve,se)},he=C=>{if(C.shapeFlag&6)return he(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const U=d(C.anchor||C.el),T=U&&U[jg];return T?d(T):U};let Ne=!1;const Be=(C,U,T)=>{let ve;C==null?U._vnode&&(N(U._vnode,null,null,!0),ve=U._vnode.component):v(U._vnode||null,C,U,null,null,null,T),U._vnode=C,Ne||(Ne=!0,Tf(ve),cp(),Ne=!1)},je={p:v,um:N,m:O,r:Z,mt:re,mc:F,pc:X,pbc:M,n:he,o:n};return{render:Be,hydrate:void 0,createApp:gv(Be)}}function El({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Lp(n,e,t=!1){const i=n.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=wi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Lp(o,a)),a.type===al&&(a.patchFlag===-1&&(a=s[r]=wi(a)),a.el=o.el),a.type===zi&&!a.el&&(a.el=o.el)}}function Iv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}function Ff(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ip(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ip(e.subTree):null}const Up=n=>n.__isSuspense;function Uv(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):Wg(n)}const ht=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),zi=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),Ls=[];let Sn=null;function ge(n=!1){Ls.push(Sn=n?null:[])}function Np(){Ls.pop(),Sn=Ls[Ls.length-1]||null}let lo=1;function Of(n,e=!1){lo+=n,n<0&&Sn&&e&&(Sn.hasOnce=!0)}function Fp(n){return n.dynamicChildren=lo>0?Sn||Ts:null,Np(),lo>0&&Sn&&Sn.push(n),n}function ye(n,e,t,i,s,r){return Fp(R(n,e,t,i,s,r,!0))}function Ms(n,e,t,i,s){return Fp(Wt(n,e,t,i,s,!0))}function Op(n){return n?n.__v_isVNode===!0:!1}function Ur(n,e){return n.type===e.type&&n.key===e.key}const Bp=({key:n})=>n??null,ma=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Vt(n)||on(n)||ot(n)?{i:In,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,s=null,r=n===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bp(e),ref:e&&ma(e),scopeId:fp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(Na(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Vt(t)?8:16),lo>0&&!o&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const Wt=Nv;function Nv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===lv)&&(n=zi),Op(n)){const a=xr(n,e,!0);return t&&Na(a,t),lo>0&&!r&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if(qv(n)&&(n=n.__vccOpts),e){e=Fv(e);let{class:a,style:l}=e;a&&!Vt(a)&&(e.class=Ut(a)),Et(l)&&(Bu(l)&&!Ze(l)&&(l=ln({},l)),e.style=fi(l))}const o=Vt(n)?1:Up(n)?128:sl(n)?64:Et(n)?4:ot(n)?2:0;return R(n,e,t,i,s,o,r,!0)}function Fv(n){return n?Bu(n)||wp(n)?ln({},n):n:null}function xr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Bv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bp(c),ref:e&&e.ref?t&&r?Ze(r)?r.concat(ma(e)):[r,ma(e)]:ma(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xr(n.ssContent),ssFallback:n.ssFallback&&xr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Hu(u,l.clone(u)),u}function st(n=" ",e=0){return Wt(al,null,n,e)}function Ov(n,e){const t=Wt(pa,null,n);return t.staticCount=e,t}function ut(n="",e=!1){return e?(ge(),Ms(zi,null,n)):Wt(zi,null,n)}function ri(n){return n==null||typeof n=="boolean"?Wt(zi):Ze(n)?Wt(ht,null,n.slice()):Op(n)?wi(n):Wt(al,null,String(n))}function wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xr(n)}function Na(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Na(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!wp(e)?e._ctx=In:s===3&&In&&(In.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ot(e)){if(i&65){Na(n,{default:e});return}e={default:e,_ctx:In},t=32}else e=String(e),i&64?(t=16,e=[st(e)]):t=8;n.children=e,n.shapeFlag|=t}function Bv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ut([e.class,i.class]));else if(s==="style")e.style=fi([e.style,i.style]);else if(Ja(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Za(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ni(n,e,t,i=null){Zn(n,e,7,[t,i])}const kv=yp();let zv=0;function Hv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||kv,r={uid:zv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(i,s),emitsOptions:Mp(i,s),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_v.bind(null,r),n.ce&&n.ce(r),r}let dn=null;const Vv=()=>dn||In;let Fa,co;{const n=tl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Fa=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),co=e("__VUE_SSR_SETTERS__",t=>uo=t)}const bo=n=>{const e=dn;return Fa(n),n.scope.on(),()=>{n.scope.off(),Fa(e)}},Bf=()=>{dn&&dn.scope.off(),Fa(null)};function kp(n){return n.vnode.shapeFlag&4}let uo=!1;function Gv(n,e=!1,t=!1){e&&co(e);const{props:i,children:s}=n.vnode,r=kp(n);Ev(n,i,r,e),Cv(n,s,t||e);const o=r?Wv(n,e):void 0;return e&&co(!1),o}function Wv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cv);const{setup:i}=t;if(i){Bi();const s=n.setupContext=i.length>1?Xv(n):null,r=bo(n),o=Mo(i,n,0,[n.props,s]),a=Od(o);if(ki(),r(),(a||n.sp)&&!eo(n)&&mp(n),a){if(o.then(Bf,Bf),e)return o.then(l=>{co(!0);try{kf(n,l,e)}finally{co(!1)}}).catch(l=>{il(l,n,0)});n.asyncDep=o}else kf(n,o)}else zp(n)}function kf(n,e,t){ot(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Et(e)&&(n.setupState=op(e)),zp(n)}function zp(n,e,t){const i=n.type;n.render||(n.render=i.render||ui);{const s=bo(n);Bi();try{uv(n)}finally{ki(),s()}}}const $v={get(n,e){return nn(n,"get",""),n[e]}};function Xv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,$v),slots:n.slots,emit:n.emit,expose:e}}function ll(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(op(Ug(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in to)return to[t](n)},has(e,t){return t in e||t in to}})):n.proxy}function qv(n){return ot(n)&&"__vccOpts"in n}const It=(n,e)=>kg(n,e,uo),Yv="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ec;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{Ec=zf.createPolicy("vue",{createHTML:n=>n})}catch{}const Hp=Ec?n=>Ec.createHTML(n):n=>n,Kv="http://www.w3.org/2000/svg",jv="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Hf=Ei&&Ei.createElement("template"),Jv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ei.createElementNS(Kv,n):e==="mathml"?Ei.createElementNS(jv,n):t?Ei.createElement(n,{is:t}):Ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ei.createTextNode(n),createComment:n=>Ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Hf.innerHTML=Hp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zv=Symbol("_vtc");function Qv(n,e,t){const i=n[Zv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vf=Symbol("_vod"),e_=Symbol("_vsh"),t_=Symbol(""),n_=/(?:^|;)\s*display\s*:/;function i_(n,e,t){const i=n.style,s=Vt(t);let r=!1;if(t&&!s){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Xr(i,a,"")}else for(const o in e)t[o]==null&&Xr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?r_(n,o,!Vt(e)&&e?e[o]:void 0,a)||Xr(i,o,a):Xr(i,o,"")}}else if(s){if(e!==t){const o=i[t_];o&&(t+=";"+o),i.cssText=t,r=n_.test(t)}}else e&&n.removeAttribute("style");Vf in n&&(n[Vf]=r?i.display:"",n[e_]&&(i.display="none"))}const Do=/\s*!important$/;function Xr(n,e,t){if(Ze(t))t.forEach(i=>Xr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Do.test(t)?n.setProperty(e,t.replace(Do,""),"important"):n.setProperty(e,t);else{const i=s_(n,e);Do.test(t)?n.setProperty(us(i),t.replace(Do,""),"important"):n[i]=t}}const Gf=["Webkit","Moz","ms"],wl={};function s_(n,e){const t=wl[e];if(t)return t;let i=Yn(e);if(i!=="filter"&&i in n)return wl[e]=i;i=zd(i);for(let s=0;s<Gf.length;s++){const r=Gf[s]+i;if(r in n)return wl[e]=r}return e}function r_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Vt(i)&&t===i}const Wf="http://www.w3.org/1999/xlink";function $f(n,e,t,i,s,r=fg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wf,e.slice(6,e.length)):n.setAttributeNS(Wf,e,t):t==null||r&&!Vd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":pi(t)?String(t):t)}function Xf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Vd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Pi(n,e,t,i){n.addEventListener(e,t,i)}function o_(n,e,t,i){n.removeEventListener(e,t,i)}const qf=Symbol("_vei");function a_(n,e,t,i,s=null){const r=n[qf]||(n[qf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=u_(e);if(i){const c=r[e]=d_(i,s);Pi(n,a,c,l)}else o&&(o_(n,a,o,l),r[e]=void 0)}}const l_=/(Once|Passive|Capture)$/,c_=/^on:?(?:Once|Passive|Capture)$/;function u_(n){let e,t;for(;(t=n.match(l_))&&!c_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):us(n.slice(2)),e]}let Tl=0;const f_=Promise.resolve(),h_=()=>Tl||(f_.then(()=>Tl=0),Tl=Date.now());function d_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Zn(c,e,5,a)}}else Zn(s,e,5,[i])};return t.value=n,t.attached=h_(),t}const Yf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,p_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Qv(n,i,o):e==="style"?i_(n,t,i):Ja(e)?Za(e)||a_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):m_(n,e,i,o))?(Xf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$f(n,e,i,o,r,e!=="value")):n._isVueCE&&(g_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Vt(i)))?Xf(n,Yn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$f(n,e,i,o))};function m_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yf(e)&&ot(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yf(e)&&Vt(t)?!1:e in n}function g_(n,e){const t=n._def.props;if(!t)return!1;const i=Yn(e);return Array.isArray(t)?t.some(s=>Yn(s)===i):Object.keys(t).some(s=>Yn(s)===i)}const as=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ze(e)?t=>ha(e,t):e};function v_(n){n.target.composing=!0}function Kf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bn=Symbol("_assign"),Io=Symbol("_initialValue");function Al(n,e,t){return e&&(n=n.trim()),t&&(n=el(n)),n}const pn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Io]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Io]=n.defaultValue.replace(/\r\n?/g,`
`))),n[bn]=as(s);const r=i||s.props&&s.props.type==="number";Pi(n,e?"change":"input",o=>{o.target.composing||n[bn](Al(n.value,t,r))}),(t||r)&&Pi(n,"change",()=>{n.value=Al(n.value,t,r)}),e||(Pi(n,"compositionstart",v_),Pi(n,"compositionend",Kf),Pi(n,"change",Kf))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Io];delete n[Io],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[bn](Al(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[bn]=as(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ns={deep:!0,created(n,e,t){n[bn]=as(t),Pi(n,"change",()=>{const i=n._modelValue,s=yr(n),r=n.checked,o=n[bn];if(Ze(i)){const a=Lu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Oi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Vp(n,r))})},mounted:jf,beforeUpdate(n,e,t){n[bn]=as(t),jf(n,e,t)}};function jf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ze(e))s=Lu(e,i.props.value)>-1;else if(Oi(e))s=e.has(i.props.value);else{if(e===t)return;s=Jn(e,Vp(n,!0))}n.checked!==s&&(n.checked=s)}const __={created(n,{value:e},t){n.checked=Jn(e,t.props.value),n[bn]=as(t),Pi(n,"change",()=>{n[bn](yr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[bn]=as(i),e!==t&&(n.checked=Jn(e,i.props.value))}},Oa={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?el(yr(l)):yr(l)),r=n.multiple,o=r?Oi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Ze(o)?s.slice():s:o];try{n[bn](o)}finally{ku(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[bn]=as(i)},mounted(n,{value:e}){Jf(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[bn]=as(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!x_(e,t[1],t[0]))&&Jf(n,e)}};function x_(n,e,t){if(!t||Ze(n))return Jn(n,e);if(Oi(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function Jf(n,e){const t=n.multiple,i=Ze(e);if(!(t&&!i&&!Oi(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=yr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Lu(e,a)>-1}else o.selected=e.has(a);else if(Jn(yr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function yr(n){return"_value"in n?n._value:n.value}function Vp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const y_={created(n,e,t){Uo(n,e,t,null,"created")},mounted(n,e,t){Uo(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Uo(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Uo(n,e,t,i,"updated")}};function M_(n,e){switch(n){case"SELECT":return Oa;case"TEXTAREA":return pn;default:switch(e){case"checkbox":return ns;case"radio":return __;default:return pn}}}function Uo(n,e,t,i,s){const o=M_(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}const S_=["ctrl","shift","alt","meta"],b_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>S_.some(t=>n[`${t}Key`]&&!e.includes(t))},Zf=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=b_[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},E_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ba=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=us(s.key);if(e.some(o=>o===r||E_[o]===r))return n(s)}))},w_=ln({patchProp:p_},Jv);let Qf;function T_(){return Qf||(Qf=Pv(w_))}const A_=((...n)=>{const e=T_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=R_(i);if(!s)return;const r=e._component;!ot(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,C_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function C_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function R_(n){return Vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $u="170",P_=0,eh=1,L_=2,Gp=1,D_=2,bi=3,ls=0,vn=1,Li=2,is=0,gr=1,ka=2,th=3,nh=4,I_=5,Es=100,U_=101,N_=102,F_=103,O_=104,B_=200,k_=201,z_=202,H_=203,wc=204,Tc=205,V_=206,G_=207,W_=208,$_=209,X_=210,q_=211,Y_=212,K_=213,j_=214,Ac=0,Cc=1,Rc=2,Mr=3,Pc=4,Lc=5,Dc=6,Ic=7,Wp=0,J_=1,Z_=2,ss=0,Q_=1,e0=2,t0=3,n0=4,i0=5,s0=6,r0=7,$p=300,Sr=301,br=302,Uc=303,Nc=304,cl=306,Fc=1e3,As=1001,Oc=1002,jn=1003,o0=1004,No=1005,ci=1006,Cl=1007,Cs=1008,Hi=1009,Xp=1010,qp=1011,fo=1012,Xu=1013,Is=1014,Di=1015,Eo=1016,qu=1017,Yu=1018,Er=1020,Yp=35902,Kp=1021,jp=1022,Xn=1023,Jp=1024,Zp=1025,vr=1026,wr=1027,Qp=1028,Ku=1029,em=1030,ju=1031,Ju=1033,ga=33776,va=33777,_a=33778,xa=33779,Bc=35840,kc=35841,zc=35842,Hc=35843,Vc=36196,Gc=37492,Wc=37496,$c=37808,Xc=37809,qc=37810,Yc=37811,Kc=37812,jc=37813,Jc=37814,Zc=37815,Qc=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,ya=36492,ru=36494,ou=36495,tm=36283,au=36284,lu=36285,cu=36286,a0=3200,l0=3201,nm=0,c0=1,Zi="",Rn="srgb",Ar="srgb-linear",ul="linear",St="srgb",Vs=7680,ih=519,u0=512,f0=513,h0=514,im=515,d0=516,p0=517,m0=518,g0=519,uu=35044,sh="300 es",Ii=2e3,za=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,fu=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function v0(n,e){return(n%e+e)%e}function Pl(n,e,t){return(1-t)*n+t*e}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,s,r,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],h=s[6],y=s[1],_=s[4],x=s[7],P=s[2],A=s[5],L=s[8];return r[0]=o*v+a*y+l*P,r[3]=o*m+a*_+l*A,r[6]=o*h+a*x+l*L,r[1]=c*v+u*y+f*P,r[4]=c*m+u*_+f*A,r[7]=c*h+u*x+f*L,r[2]=d*v+p*y+g*P,r[5]=d*m+p*_+g*A,r[8]=d*h+p*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new lt;function sm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _0(){const n=Ha("canvas");return n.style.display="block",n}const rh={};function qr(n){n in rh||(rh[n]=!0,console.warn(n))}function x0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function y0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pt={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(n.r=Fi(n.r),n.g=Fi(n.g),n.b=Fi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(n.r=_r(n.r),n.g=_r(n.g),n.b=_r(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zi?ul:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const oh=[.64,.33,.3,.6,.15,.06],ah=[.2126,.7152,.0722],lh=[.3127,.329],ch=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Ar]:{primaries:oh,whitePoint:lh,transfer:ul,toXYZ:ch,fromXYZ:uh,luminanceCoefficients:ah,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:oh,whitePoint:lh,transfer:St,toXYZ:ch,fromXYZ:uh,luminanceCoefficients:ah,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let Gs;class S0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Ha("canvas")),Gs.width=e.width,Gs.height=e.height;const i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b0=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class mn extends Cr{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=As,s=As,r=ci,o=Cs,a=Xn,l=Hi,c=mn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ni(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=$p;mn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,P=(h+1)/2,A=(u+d)/4,L=(f+v)/4,F=(g+m)/4;return _>x&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=A/i,r=L/i):x>P?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=F/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w0 extends Cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends w0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class om extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,h*y);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const x=a*y;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,f=f*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new z,fh=new Ui;class wo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Oo.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),$s.subVectors(e.b,Nr),Xs.subVectors(e.c,Nr),$i.subVectors($s,Ws),Xi.subVectors(Xs,$s),ds.subVectors(Ws,Xs);let t=[0,-$i.z,$i.y,0,-Xi.z,Xi.y,0,-ds.z,ds.y,$i.z,0,-$i.x,Xi.z,0,-Xi.x,ds.z,0,-ds.x,-$i.y,$i.x,0,-Xi.y,Xi.x,0,-ds.y,ds.x,0];return!Ul(t,Ws,$s,Xs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,Ws,$s,Xs,Oo))?!1:(Bo.crossVectors($i,Xi),t=[Bo.x,Bo.y,Bo.z],Ul(t,Ws,$s,Xs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new z,new z,new z,new z,new z,new z,new z,new z],Vn=new z,Fo=new wo,Ws=new z,$s=new z,Xs=new z,$i=new z,Xi=new z,ds=new z,Nr=new z,Oo=new z,Bo=new z,ps=new z;function Ul(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ps.fromArray(n,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const A0=new wo,Fr=new z,Nl=new z;class fl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Nl)),this.expandByPoint(Fr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new z,Fl=new z,ko=new z,qi=new z,Ol=new z,zo=new z,Bl=new z;class Zu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fl.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Fl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=qi.dot(this.direction),l=-qi.dot(ko),c=qi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fl).addScaledVector(ko,d),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){Ol.subVectors(t,e),zo.subVectors(i,e),Bl.crossVectors(Ol,zo);let o=this.direction.dot(Bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(zo.crossVectors(qi,zo));if(l<0)return null;const c=a*this.direction.dot(Ol.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(Bl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,R0)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Yi.crossVectors(i,yn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Yi.crossVectors(i,yn)),Yi.normalize(),Ho.crossVectors(yn,Yi),s[0]=Yi.x,s[4]=Ho.x,s[8]=yn.x,s[1]=Yi.y,s[5]=Ho.y,s[9]=yn.y,s[2]=Yi.z,s[6]=Ho.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],y=i[3],_=i[7],x=i[11],P=i[15],A=s[0],L=s[4],F=s[8],w=s[12],M=s[1],D=s[5],Q=s[9],J=s[13],re=s[2],de=s[6],K=s[10],fe=s[14],X=s[3],Ae=s[7],Y=s[11],O=s[15];return r[0]=o*A+a*M+l*re+c*X,r[4]=o*L+a*D+l*de+c*Ae,r[8]=o*F+a*Q+l*K+c*Y,r[12]=o*w+a*J+l*fe+c*O,r[1]=u*A+f*M+d*re+p*X,r[5]=u*L+f*D+d*de+p*Ae,r[9]=u*F+f*Q+d*K+p*Y,r[13]=u*w+f*J+d*fe+p*O,r[2]=g*A+v*M+m*re+h*X,r[6]=g*L+v*D+m*de+h*Ae,r[10]=g*F+v*Q+m*K+h*Y,r[14]=g*w+v*J+m*fe+h*O,r[3]=y*A+_*M+x*re+P*X,r[7]=y*L+_*D+x*de+P*Ae,r[11]=y*F+_*Q+x*K+P*Y,r[15]=y*w+_*J+x*fe+P*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],y=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,_=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,P=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,A=t*y+i*_+s*x+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*h-i*d*h)*L,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*L,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*L,e[4]=_*L,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*h+t*d*h)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*h-t*l*h)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=x*L,e[9]=(g*f*r-u*v*r-g*i*p+t*v*p+u*i*h-t*f*h)*L,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*h+t*a*h)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=P*L,e[13]=(u*v*s-g*f*s+g*i*d-t*v*d-u*i*m+t*f*m)*L,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,v=o*u,m=o*f,h=a*f,y=l*c,_=l*u,x=l*f,P=i.x,A=i.y,L=i.z;return s[0]=(1-(v+h))*P,s[1]=(p+x)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+h))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*L,s[9]=(m-y)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const c=1/r,u=1/o,f=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ii){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===Ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ii){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,p=(i+s)*u;let g,v;if(a===Ii)g=(o+r)*f,v=-2*f;else if(a===za)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qs=new z,Gn=new Lt,C0=new z(0,0,0),R0=new z(1,1,1),Yi=new z,Ho=new z,yn=new z,hh=new Lt,dh=new Ui;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const ph=new z,Ys=new Ui,yi=new Lt,Vo=new z,Or=new z,L0=new z,D0=new Ui,mh=new z(1,0,0),gh=new z(0,1,0),vh=new z(0,0,1),_h={type:"added"},I0={type:"removed"},Ks={type:"childadded",child:null},kl={type:"childremoved",child:null};class jt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new z,t=new Qn,i=new Ui,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new lt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vo.copy(e):Vo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Or,Vo,this.up):yi.lookAt(Vo,Or,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(yi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new z(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new z,Mi=new z,zl=new z,Si=new z,js=new z,Js=new z,xh=new z,Hl=new z,Vl=new z,Gl=new z,Wl=new Ht,$l=new Ht,Xl=new Ht;class Dn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),Mi.subVectors(i,t),zl.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Mi),l=Wn.dot(zl),c=Mi.dot(Mi),u=Mi.dot(zl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Wl.setScalar(0),$l.setScalar(0),Xl.setScalar(0),Wl.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(Xl,r.z),o}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),Mi.subVectors(e,t),Wn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Wn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Js.subVectors(r,i),Hl.subVectors(e,i);const l=js.dot(Hl),c=Js.dot(Hl);if(l<=0&&c<=0)return t.copy(i);Vl.subVectors(e,s);const u=js.dot(Vl),f=Js.dot(Vl);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);Gl.subVectors(e,r);const p=js.dot(Gl),g=Js.dot(Gl);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Js,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(xh,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(js,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Go={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=v0(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ql(o,r,e+1/3),this.g=ql(o,r,e),this.b=ql(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=am[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return pt.fromWorkingColorSpace(tn.copy(this),e),Math.round(sn(tn.r*255,0,255))*65536+Math.round(sn(tn.g*255,0,255))*256+Math.round(sn(tn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Rn){pt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Go);const i=Pl(Ki.h,Go.h,t),s=Pl(Ki.s,Go.s,t),r=Pl(Ki.l,Go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new mt;mt.NAMES=am;let U0=0;class Bs extends Cr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ni(),this.name="",this.blending=gr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Tc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Va extends Bs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new z,Wo=new He;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class lm extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cm extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hi extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let N0=0;const An=new Lt,Yl=new jt,Zs=new z,Mn=new wo,Br=new wo,Kt=new z;class ei extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?cm:lm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hi(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Mn.min,Br.min),Mn.expandByPoint(Kt),Kt.addVectors(Mn.max,Br.max),Mn.expandByPoint(Kt)):(Mn.expandByPoint(Br.min),Mn.expandByPoint(Br.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Kt.add(Zs)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new z,l[F]=new z;const c=new z,u=new z,f=new z,d=new He,p=new He,g=new He,v=new z,m=new z;function h(F,w,M){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(v),a[w].add(v),a[M].add(v),l[F].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,w=y.length;F<w;++F){const M=y[F],D=M.start,Q=M.count;for(let J=D,re=D+Q;J<re;J+=3)h(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const _=new z,x=new z,P=new z,A=new z;function L(F){P.fromBufferAttribute(s,F),A.copy(P);const w=a[F];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(A,w);const D=x.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,D)}for(let F=0,w=y.length;F<w;++F){const M=y[F],D=M.start,Q=M.count;for(let J=D,re=D+Q;J<re;J+=3)L(e.getX(J+0)),L(e.getX(J+1)),L(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new En(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new Lt,ms=new Zu,$o=new fl,Mh=new z,Xo=new z,qo=new z,Yo=new z,Kl=new z,Ko=new z,Sh=new z,jo=new z;class Un extends jt{constructor(e=new ei,t=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Kl.fromBufferAttribute(f,e),o?Ko.addScaledVector(Kl,u):Ko.addScaledVector(Kl.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!($o.containsPoint(ms.origin)===!1&&(ms.intersectSphere($o,Mh)===null||ms.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),ms.copy(e.ray).applyMatrix4(yh),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=_;x<P;x+=3){const A=a.getX(x),L=a.getX(x+1),F=a.getX(x+2);s=Jo(this,h,e,i,c,u,f,A,L,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=Jo(this,o,e,i,c,u,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,P=_;x<P;x+=3){const A=x,L=x+1,F=x+2;s=Jo(this,h,e,i,c,u,f,A,L,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=m,_=m+1,x=m+2;s=Jo(this,o,e,i,c,u,f,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function F0(n,e,t,i,s,r,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ls,a),l===null)return null;jo.copy(a),jo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:n}}function Jo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Xo),n.getVertexPosition(l,qo),n.getVertexPosition(c,Yo);const u=F0(n,e,t,i,Xo,qo,Yo,Sh);if(u){const f=new z;Dn.getBarycoord(Sh,Xo,qo,Yo,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new He)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new He)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Dn.getNormal(Xo,qo,Yo,d.normal),u.face=d,u.barycoord=f}return u}class Rr extends ei{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(u,3)),this.setAttribute("uv",new hi(f,2));function g(v,m,h,y,_,x,P,A,L,F,w){const M=x/L,D=P/F,Q=x/2,J=P/2,re=A/2,de=L+1,K=F+1;let fe=0,X=0;const Ae=new z;for(let Y=0;Y<K;Y++){const O=Y*D-J;for(let N=0;N<de;N++){const Z=N*M-Q;Ae[v]=Z*y,Ae[m]=O*_,Ae[h]=re,c.push(Ae.x,Ae.y,Ae.z),Ae[v]=0,Ae[m]=0,Ae[h]=A>0?1:-1,u.push(Ae.x,Ae.y,Ae.z),f.push(N/L),f.push(1-Y/F),fe+=1}}for(let Y=0;Y<F;Y++)for(let O=0;O<L;O++){const N=d+O+de*Y,Z=d+O+de*(Y+1),k=d+(O+1)+de*(Y+1),ne=d+(O+1)+de*Y;l.push(N,Z,ne),l.push(Z,k,ne),X+=6}a.addGroup(p,X,w),p+=X,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const s in i)e[s]=i[s]}return e}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function um(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const B0={clone:Tr,merge:fn};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends Bs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fm extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new z,bh=new He,Eh=new He;class Ln extends fm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,bh,Eh),t.subVectors(Eh,bh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class H0 extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Ln(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Ln(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Ln(Qs,er,e,t);a.layers=this.layers,this.add(a);const l=new Ln(Qs,er,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hm extends mn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends Us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new hm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rr(5,5,5),r=new cs({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:is});r.uniforms.tEquirect.value=t;const o=new Un(s,r),a=t.minFilter;return t.minFilter===Cs&&(t.minFilter=ci),new H0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const jl=new z,G0=new z,W0=new lt;class Ss{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=jl.subVectors(i,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W0.getNormalMatrix(e),s=this.coplanarPoint(jl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new fl,Zo=new z;class ef{constructor(e=new Ss,t=new Ss,i=new Ss,s=new Ss,r=new Ss,o=new Ss){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],y=s[13],_=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-p,x-h).normalize(),i[1].setComponents(l+r,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+g,x+y).normalize(),i[3].setComponents(l-o,d-u,m-g,x-y).normalize(),i[4].setComponents(l-a,d-f,m-v,x-_).normalize(),t===Ii)i[5].setComponents(l+a,d+f,m+v,x+_).normalize();else if(t===za)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class To extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*d-o;for(let _=0;_<c;_++){const x=_*f-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const _=y+c*h,x=y+c*(h+1),P=y+1+c*(h+1),A=y+1+c*h;p.push(_,x,A),p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(v,3)),this.setAttribute("uv",new hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
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
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mx=`#define PI 3.141592653589793
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
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
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
#endif`,Wx=`struct PhysicalMaterial {
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
}`,$x=`
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
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ty=`#if defined( USE_POINTS_UV )
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
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
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
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
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
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Py=`float getShadowMask() {
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
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
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
}`,Zy=`#if DEPTH_PACKING == 3200
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
}`,Qy=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,fM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,dM=`#define PHONG
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
}`,pM=`#define PHONG
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,_M=`#define TOON
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
}`,xM=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,SM=`uniform vec3 color;
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
}`,bM=`uniform float rotation;
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
}`,EM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:Y0,alphamap_pars_fragment:K0,alphatest_fragment:j0,alphatest_pars_fragment:J0,aomap_fragment:Z0,aomap_pars_fragment:Q0,batching_pars_vertex:ex,batching_vertex:tx,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:ux,color_fragment:fx,color_pars_fragment:hx,color_pars_vertex:dx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:vx,displacementmap_pars_vertex:_x,displacementmap_vertex:xx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:bx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Bx,envmap_vertex:Cx,fog_vertex:Rx,fog_pars_vertex:Px,fog_fragment:Lx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Ux,lights_lambert_fragment:Nx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:kx,lights_toon_pars_fragment:zx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Wx,lights_fragment_begin:$x,lights_fragment_maps:Xx,lights_fragment_end:qx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Jx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:ey,map_particle_pars_fragment:ty,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:sy,morphcolor_vertex:ry,morphnormal_vertex:oy,morphtarget_pars_vertex:ay,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:uy,normal_pars_fragment:fy,normal_pars_vertex:hy,normal_vertex:dy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:vy,iridescence_pars_fragment:_y,opaque_fragment:xy,packing:yy,premultiplied_alpha_fragment:My,project_vertex:Sy,dithering_fragment:by,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:Py,skinbase_vertex:Ly,skinning_pars_vertex:Dy,skinning_vertex:Iy,skinnormal_vertex:Uy,specularmap_fragment:Ny,specularmap_pars_fragment:Fy,tonemapping_fragment:Oy,tonemapping_pars_fragment:By,transmission_fragment:ky,transmission_pars_fragment:zy,uv_pars_fragment:Hy,uv_pars_vertex:Vy,uv_vertex:Gy,worldpos_vertex:Wy,background_vert:$y,background_frag:Xy,backgroundCube_vert:qy,backgroundCube_frag:Yy,cube_vert:Ky,cube_frag:jy,depth_vert:Jy,depth_frag:Zy,distanceRGBA_vert:Qy,distanceRGBA_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:sM,meshbasic_vert:rM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:fM,meshnormal_frag:hM,meshphong_vert:dM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:vM,meshtoon_frag:_M,points_vert:xM,points_frag:yM,shadow_vert:MM,shadow_frag:SM,sprite_vert:bM,sprite_frag:EM},Ue={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},oi={basic:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:fn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:fn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new mt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:fn([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:fn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:fn([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:fn([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:fn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:fn([Ue.lights,Ue.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Qo={r:0,b:0,g:0},vs=new Qn,wM=new Lt;function TM(n,e,t,i,s,r,o){const a=new mt(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?h(a,l):x&&x.isColor&&(h(x,1),_=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===cl)?(u===void 0&&(u=new Un(new Rr(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Tr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(vs)),u.material.toneMapped=pt.getTransfer(x.colorSpace)!==St,(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Un(new To(2,2),new cs({name:"BackgroundMaterial",uniforms:Tr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,_){y.getRGB(Qo,um(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:m}}function AM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,D,Q,J,re){let de=!1;const K=f(J,Q,D);r!==K&&(r=K,c(r.object)),de=p(M,J,Q,re),de&&g(M,J,Q,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(de||o)&&(o=!1,x(M,D,Q,J),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,Q){const J=Q.wireframe===!0;let re=i[M.id];re===void 0&&(re={},i[M.id]=re);let de=re[D.id];de===void 0&&(de={},re[D.id]=de);let K=de[J];return K===void 0&&(K=d(l()),de[J]=K),K}function d(M){const D=[],Q=[],J=[];for(let re=0;re<t;re++)D[re]=0,Q[re]=0,J[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:J,object:M,attributes:{},index:null}}function p(M,D,Q,J){const re=r.attributes,de=D.attributes;let K=0;const fe=Q.getAttributes();for(const X in fe)if(fe[X].location>=0){const Y=re[X];let O=de[X];if(O===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;K++}return r.attributesNum!==K||r.index!==J}function g(M,D,Q,J){const re={},de=D.attributes;let K=0;const fe=Q.getAttributes();for(const X in fe)if(fe[X].location>=0){let Y=de[X];Y===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),re[X]=O,K++}r.attributes=re,r.attributesNum=K,r.index=J}function v(){const M=r.newAttributes;for(let D=0,Q=M.length;D<Q;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){const Q=r.newAttributes,J=r.enabledAttributes,re=r.attributeDivisors;Q[M]=1,J[M]===0&&(n.enableVertexAttribArray(M),J[M]=1),re[M]!==D&&(n.vertexAttribDivisor(M,D),re[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let Q=0,J=D.length;Q<J;Q++)D[Q]!==M[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function _(M,D,Q,J,re,de,K){K===!0?n.vertexAttribIPointer(M,D,Q,re,de):n.vertexAttribPointer(M,D,Q,J,re,de)}function x(M,D,Q,J){v();const re=J.attributes,de=Q.getAttributes(),K=D.defaultAttributeValues;for(const fe in de){const X=de[fe];if(X.location>=0){let Ae=re[fe];if(Ae===void 0&&(fe==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),fe==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),Ae!==void 0){const Y=Ae.normalized,O=Ae.itemSize,N=e.get(Ae);if(N===void 0)continue;const Z=N.buffer,k=N.type,ne=N.bytesPerElement,be=k===n.INT||k===n.UNSIGNED_INT||Ae.gpuType===Xu;if(Ae.isInterleavedBufferAttribute){const he=Ae.data,Ne=he.stride,Be=Ae.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<X.locationSize;je++)h(X.location+je,he.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<X.locationSize;je++)m(X.location+je);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let je=0;je<X.locationSize;je++)_(X.location+je,O/X.locationSize,k,Y,Ne*ne,(Be+O/X.locationSize*je)*ne,be)}else{if(Ae.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)h(X.location+he,Ae.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let he=0;he<X.locationSize;he++)m(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let he=0;he<X.locationSize;he++)_(X.location+he,O/X.locationSize,k,Y,O*ne,O/X.locationSize*he*ne,be)}}else if(K!==void 0){const Y=K[fe];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(X.location,Y);break;case 3:n.vertexAttrib3fv(X.location,Y);break;case 4:n.vertexAttrib4fv(X.location,Y);break;default:n.vertexAttrib1fv(X.location,Y)}}}}y()}function P(){F();for(const M in i){const D=i[M];for(const Q in D){const J=D[Q];for(const re in J)u(J[re].object),delete J[re];delete D[Q]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const Q in D){const J=D[Q];for(const re in J)u(J[re].object),delete J[re];delete D[Q]}delete i[M.id]}function L(M){for(const D in i){const Q=i[D];if(Q[M.id]===void 0)continue;const J=Q[M.id];for(const re in J)u(J[re].object),delete J[re];delete Q[M.id]}}function F(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function CM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Hi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Di&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function PM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ss,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,_=y*4;let x=h.clippingState||null;l.value=x,x=u(g,d,_,p);for(let P=0;P!==_;++P)x[P]=t[P];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function LM(n){let e=new WeakMap;function t(o,a){return a===Uc?o.mapping=Sr:a===Nc&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===Nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new V0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class pm extends fm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,wh=[.125,.215,.35,.446,.526,.582],ws=20,Jl=new pm,Th=new mt;let Zl=null,Ql=0,ec=0,tc=!1;const bs=(1+Math.sqrt(5))/2,tr=1/bs,Ah=[new z(-bs,tr,0),new z(bs,tr,0),new z(-tr,0,bs),new z(tr,0,bs),new z(0,bs,-tr),new z(0,bs,tr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Zl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Eo,format:Xn,colorSpace:Ar,depthBuffer:!1},s=Rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(r)),this._blurMaterial=IM(r,e,t)}return s}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,i,s){const a=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Th),u.toneMapping=ss,u.autoClear=!1;const p=new Va({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Un(new Rr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Th),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;ea(s,y*_,h>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Sr||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ah[(s-r-1)%Ah.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ws-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const h=[];let y=0;for(let L=0;L<ws;++L){const F=L/v,w=Math.exp(-F*F/2);h.push(w),L===0?y+=w:L<m&&(y+=2*w)}for(let L=0;L<h.length;L++)h[L]=h[L]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[s],P=3*x*(s>_-ur?s-_+ur:0),A=4*(this._cubeSize-x);ea(t,P,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Jl)}}function DM(n){const e=[],t=[],i=[];let s=n;const r=n-ur+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ur?l=wh[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,F=A>2?0:-1,w=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];y.set(w,v*g*A),_.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,h*g*A)}const P=new ei;P.setAttribute("position",new En(y,v)),P.setAttribute("uv",new En(_,m)),P.setAttribute("faceIndex",new En(x,h)),e.push(P),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rh(n,e,t){const i=new Us(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function IM(n,e,t){const i=new Float32Array(ws),s=new z(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Ph(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Lh(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function UM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===Nc,u=l===Sr||l===br;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ch(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ch(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function FM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const P=y[_+0],A=y[_+1],L=y[_+2];d.push(P,A,A,L,L,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const P=_+0,A=_+1,L=_+2;d.push(P,A,A,L,L,P)}}else return;const m=new(sm(d)?cm:lm)(d,1);m.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function OM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let h=0;for(let y=0;y<g;y++)h+=p[y]*v[y];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function BM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kM(n,e,t){const i=new WeakMap,s=new Ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*P*4*f),L=new om(A,x,P,f);L.type=Di,L.needsUpdate=!0;const F=_*4;for(let M=0;M<f;M++){const D=m[M],Q=h[M],J=y[M],re=x*P*4*M;for(let de=0;de<D.count;de++){const K=de*F;p===!0&&(s.fromBufferAttribute(D,de),A[re+K+0]=s.x,A[re+K+1]=s.y,A[re+K+2]=s.z,A[re+K+3]=0),g===!0&&(s.fromBufferAttribute(Q,de),A[re+K+4]=s.x,A[re+K+5]=s.y,A[re+K+6]=s.z,A[re+K+7]=0),v===!0&&(s.fromBufferAttribute(J,de),A[re+K+8]=s.x,A[re+K+9]=s.y,A[re+K+10]=s.z,A[re+K+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new He(x,P)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class mm extends mn{constructor(e,t,i,s,r,o,a,l,c,u=vr){if(u!==vr&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Is),i===void 0&&u===wr&&(i=Er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gm=new mn,Dh=new mm(1,1),vm=new om,_m=new T0,xm=new hm,Ih=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Oh.set(i),n.uniformMatrix2fv(this.addr,!1,Oh),Xt(t,i)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),Xt(t,i)}}function qM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,i))return;Nh.set(i),n.uniformMatrix4fv(this.addr,!1,Nh),Xt(t,i)}}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function ZM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dh.compareFunction=im,r=Dh):r=gm,t.setTexture2D(e||r,s)}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_m,s)}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xm,s)}function rS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vm,s)}function oS(n){switch(n){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return $M;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return KM;case 35668:case 35672:return jM;case 35669:case 35673:return JM;case 5125:return ZM;case 36294:return QM;case 36295:return eS;case 36296:return tS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}function aS(n,e){n.uniform1fv(this.addr,e)}function lS(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function cS(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function uS(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function fS(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hS(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dS(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pS(n,e){n.uniform1iv(this.addr,e)}function mS(n,e){n.uniform2iv(this.addr,e)}function gS(n,e){n.uniform3iv(this.addr,e)}function vS(n,e){n.uniform4iv(this.addr,e)}function _S(n,e){n.uniform1uiv(this.addr,e)}function xS(n,e){n.uniform2uiv(this.addr,e)}function yS(n,e){n.uniform3uiv(this.addr,e)}function MS(n,e){n.uniform4uiv(this.addr,e)}function SS(n,e,t){const i=this.cache,s=e.length,r=hl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gm,r[o])}function bS(n,e,t){const i=this.cache,s=e.length,r=hl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_m,r[o])}function ES(n,e,t){const i=this.cache,s=e.length,r=hl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xm,r[o])}function wS(n,e,t){const i=this.cache,s=e.length,r=hl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vm,r[o])}function TS(n){switch(n){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return fS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return xS;case 36295:return yS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oS(t.type)}}class CS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Bh(n,e){n.seq.push(e),n.map[e.id]=e}function PS(n,e,t){const i=n.name,s=i.length;for(nc.lastIndex=0;;){const r=nc.exec(i),o=nc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bh(t,c===void 0?new AS(a,n,e):new CS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new RS(a),Bh(t,f)),t=f}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);PS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LS=37297;let DS=0;function IS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const zh=new lt;function US(n){pt._getMatrix(zh,pt.workingColorSpace,n);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case ul:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+IS(n.getShaderSource(e),o)}else return s}function NS(n,e){const t=US(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FS(n,e){let t;switch(e){case Q_:t="Linear";break;case e0:t="Reinhard";break;case t0:t="Cineon";break;case n0:t="ACESFilmic";break;case s0:t="AgX";break;case r0:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new z;function OS(){pt.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function kS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HS=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(n){return n.replace(HS,GS)}const VS=new Map;function GS(n,e){let t=ct[e];if(t===void 0){const i=VS.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}const WS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(n){return n.replace(WS,$S)}function $S(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function XS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function qS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case br:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function KS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wp:e="ENVMAP_BLENDING_MULTIPLY";break;case J_:e="ENVMAP_BLENDING_MIX";break;case Z_:e="ENVMAP_BLENDING_ADD";break}return e}function jS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function JS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=XS(t),c=qS(t),u=YS(t),f=KS(t),d=jS(t),p=BS(t),g=kS(r),v=s.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),h.length>0&&(h+=`
`)):(m=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),h=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?ct.tonemapping_pars_fragment:"",t.toneMapping!==ss?FS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,NS("linearToOutputTexel",t.outputColorSpace),OS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=hu(o),o=Vh(o,t),o=Gh(o,t),a=hu(a),a=Vh(a,t),a=Gh(a,t),o=Wh(o),a=Wh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=y+m+o,x=y+h+a,P=kh(s,s.VERTEX_SHADER,_),A=kh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(v).trim(),J=s.getShaderInfoLog(P).trim(),re=s.getShaderInfoLog(A).trim();let de=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,A);else{const fe=Hh(s,P,"vertex"),X=Hh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+fe+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(J===""||re==="")&&(K=!1);K&&(D.diagnostics={runnable:de,programLog:Q,vertexShader:{log:J,prefix:m},fragmentShader:{log:re,prefix:h}})}s.deleteShader(P),s.deleteShader(A),F=new Ma(s,v),w=zS(s,v)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,LS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}let ZS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eb(e),t.set(e,i)),i}}class eb{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function tb(n,e,t,i,s,r,o){const a=new Qu,l=new QS,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,Q,J){const re=Q.fog,de=J.geometry,K=w.isMeshStandardMaterial?Q.environment:null,fe=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),X=fe&&fe.mapping===cl?fe.image.height:null,Ae=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Y=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=Y!==void 0?Y.length:0;let N=0;de.morphAttributes.position!==void 0&&(N=1),de.morphAttributes.normal!==void 0&&(N=2),de.morphAttributes.color!==void 0&&(N=3);let Z,k,ne,be;if(Ae){const _t=oi[Ae];Z=_t.vertexShader,k=_t.fragmentShader}else Z=w.vertexShader,k=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const he=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Be=J.isInstancedMesh===!0,je=J.isBatchedMesh===!0,rt=!!w.map,C=!!w.matcap,U=!!fe,T=!!w.aoMap,ve=!!w.lightMap,se=!!w.bumpMap,oe=!!w.normalMap,ce=!!w.displacementMap,_e=!!w.emissiveMap,ae=!!w.metalnessMap,b=!!w.roughnessMap,S=w.anisotropy>0,I=w.clearcoat>0,q=w.dispersion>0,te=w.iridescence>0,j=w.sheen>0,Ce=w.transmission>0,Me=S&&!!w.anisotropyMap,Te=I&&!!w.clearcoatMap,Xe=I&&!!w.clearcoatNormalMap,Se=I&&!!w.clearcoatRoughnessMap,Le=te&&!!w.iridescenceMap,We=te&&!!w.iridescenceThicknessMap,Je=j&&!!w.sheenColorMap,Re=j&&!!w.sheenRoughnessMap,et=!!w.specularMap,tt=!!w.specularColorMap,gt=!!w.specularIntensityMap,H=Ce&&!!w.transmissionMap,Ie=Ce&&!!w.thicknessMap,ue=!!w.gradientMap,pe=!!w.alphaMap,ke=w.alphaTest>0,Fe=!!w.alphaHash,nt=!!w.extensions;let Nt=ss;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const qt={shaderID:Ae,shaderType:w.type,shaderName:w.name,vertexShader:Z,fragmentShader:k,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:je,batchingColor:je&&J._colorsTexture!==null,instancing:Be,instancingColor:Be&&J.instanceColor!==null,instancingMorph:Be&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:C,envMap:U,envMapMode:U&&fe.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:ve,bumpMap:se,normalMap:oe,displacementMap:d&&ce,emissiveMap:_e,normalMapObjectSpace:oe&&w.normalMapType===c0,normalMapTangentSpace:oe&&w.normalMapType===nm,metalnessMap:ae,roughnessMap:b,anisotropy:S,anisotropyMap:Me,clearcoat:I,clearcoatMap:Te,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Se,dispersion:q,iridescence:te,iridescenceMap:Le,iridescenceThicknessMap:We,sheen:j,sheenColorMap:Je,sheenRoughnessMap:Re,specularMap:et,specularColorMap:tt,specularIntensityMap:gt,transmission:Ce,transmissionMap:H,thicknessMap:Ie,gradientMap:ue,opaque:w.transparent===!1&&w.blending===gr&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:ke,alphaHash:Fe,combine:w.combine,mapUv:rt&&v(w.map.channel),aoMapUv:T&&v(w.aoMap.channel),lightMapUv:ve&&v(w.lightMap.channel),bumpMapUv:se&&v(w.bumpMap.channel),normalMapUv:oe&&v(w.normalMap.channel),displacementMapUv:ce&&v(w.displacementMap.channel),emissiveMapUv:_e&&v(w.emissiveMap.channel),metalnessMapUv:ae&&v(w.metalnessMap.channel),roughnessMapUv:b&&v(w.roughnessMap.channel),anisotropyMapUv:Me&&v(w.anisotropyMap.channel),clearcoatMapUv:Te&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(w.sheenRoughnessMap.channel),specularMapUv:et&&v(w.specularMap.channel),specularColorMapUv:tt&&v(w.specularColorMap.channel),specularIntensityMapUv:gt&&v(w.specularIntensityMap.channel),transmissionMapUv:H&&v(w.transmissionMap.channel),thicknessMapUv:Ie&&v(w.thicknessMap.channel),alphaMapUv:pe&&v(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(oe||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!de.attributes.uv&&(rt||pe),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:J.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:N,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===St,decodeVideoTextureEmissive:_e&&w.emissiveMap.isVideoTexture===!0&&pt.getTransfer(w.emissiveMap.colorSpace)===St,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:nt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&w.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let D;if(M){const Q=oi[M];D=B0.clone(Q.uniforms)}else D=w.uniforms;return D}function P(w,M){let D;for(let Q=0,J=u.length;Q<J;Q++){const re=u[Q];if(re.cacheKey===M){D=re,++D.usedTimes;break}}return D===void 0&&(D=new JS(n,M,w,r),u.push(D)),D}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:F}}function nb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ib(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||ib),i.length>1&&i.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function sb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new qh,n.set(i,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new mt};break;case"SpotLight":t={position:new z,direction:new z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ab=0;function lb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cb(n){const e=new rb,t=ob(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new Lt,o=new Lt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,y=0,_=0,x=0,P=0,A=0,L=0;c.sort(lb);for(let w=0,M=c.length;w<M;w++){const D=c[w],Q=D.color,J=D.intensity,re=D.distance,de=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*J,f+=Q.g*J,d+=Q.b*J;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],J);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,X=t.get(D);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=de,i.directionalShadowMatrix[p]=D.shadow.matrix,y++}i.directional[p]=K,p++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(Q).multiplyScalar(J),K.distance=re,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[v]=K;const fe=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,fe.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=fe.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=de,x++}v++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(Q).multiplyScalar(J),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const fe=D.shadow,X=t.get(D);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,X.shadowCameraNear=fe.camera.near,X.shadowCameraFar=fe.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=de,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(J),K.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[h]=K,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==x||F.numSpotMaps!==P||F.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=x,F.numSpotMaps=P,F.numLightProbes=L,i.version=ab++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const _=c[h];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Yh(n){const e=new cb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ub(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yh(n),e.set(s,[a])):r>=o.length?(a=new Yh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class fb extends Bs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends Bs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
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
}`;function mb(n,e,t){let i=new ef;const s=new He,r=new He,o=new Ht,a=new fb({depthPacking:l0}),l=new hb,c={},u=t.maxTextureSize,f={[ls]:vn,[vn]:ls,[Li]:Li},d=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:db,fragmentShader:pb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Un(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let h=this.type;this.render=function(A,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(is),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=h!==bi&&this.type===bi,re=h===bi&&this.type!==bi;for(let de=0,K=A.length;de<K;de++){const fe=A[de],X=fe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Ae=X.getFrameExtents();if(s.multiply(Ae),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ae.x),s.x=r.x*Ae.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ae.y),s.y=r.y*Ae.y,X.mapSize.y=r.y)),X.map===null||J===!0||re===!0){const O=this.type!==bi?{minFilter:jn,magFilter:jn}:{};X.map!==null&&X.map.dispose(),X.map=new Us(s.x,s.y,O),X.map.texture.name=fe.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Y=X.getViewportCount();for(let O=0;O<Y;O++){const N=X.getViewport(O);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),Q.viewport(o),X.updateMatrices(fe,O),i=X.getFrustum(),x(L,F,X.camera,fe,this.type)}X.isPointLightShadow!==!0&&this.type===bi&&y(X,F),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,D)};function y(A,L){const F=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Us(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,F,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,F,p,v,null)}function _(A,L,F,w){let M=null;const D=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Q=M.uuid,J=L.uuid;let re=c[Q];re===void 0&&(re={},c[Q]=re);let de=re[J];de===void 0&&(de=M.clone(),re[J]=de,L.addEventListener("dispose",P)),M=de}if(M.visible=L.visible,M.wireframe=L.wireframe,w===bi?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=n.properties.get(M);Q.light=F}return M}function x(A,L,F,w,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===bi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const J=e.update(A),re=A.material;if(Array.isArray(re)){const de=J.groups;for(let K=0,fe=de.length;K<fe;K++){const X=de[K],Ae=re[X.materialIndex];if(Ae&&Ae.visible){const Y=_(A,Ae,w,M);A.onBeforeShadow(n,A,L,F,J,Y,X),n.renderBufferDirect(F,null,J,Y,A,X),A.onAfterShadow(n,A,L,F,J,Y,X)}}}else if(re.visible){const de=_(A,re,w,M);A.onBeforeShadow(n,A,L,F,J,de,null),n.renderBufferDirect(F,null,J,de,A,null),A.onAfterShadow(n,A,L,F,J,de,null)}}const Q=A.children;for(let J=0,re=Q.length;J<re;J++)x(Q[J],L,F,w,M)}function P(A){A.target.removeEventListener("dispose",P);for(const F in c){const w=c[F],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const gb={[Ac]:Cc,[Rc]:Dc,[Pc]:Ic,[Mr]:Lc,[Cc]:Ac,[Dc]:Rc,[Ic]:Pc,[Lc]:Mr};function vb(n,e){function t(){let H=!1;const Ie=new Ht;let ue=null;const pe=new Ht(0,0,0,0);return{setMask:function(ke){ue!==ke&&!H&&(n.colorMask(ke,ke,ke,ke),ue=ke)},setLocked:function(ke){H=ke},setClear:function(ke,Fe,nt,Nt,qt){qt===!0&&(ke*=Nt,Fe*=Nt,nt*=Nt),Ie.set(ke,Fe,nt,Nt),pe.equals(Ie)===!1&&(n.clearColor(ke,Fe,nt,Nt),pe.copy(Ie))},reset:function(){H=!1,ue=null,pe.set(-1,0,0,0)}}}function i(){let H=!1,Ie=!1,ue=null,pe=null,ke=null;return{setReversed:function(Fe){if(Ie!==Fe){const nt=e.get("EXT_clip_control");Ie?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const Nt=ke;ke=null,this.setClear(Nt)}Ie=Fe},getReversed:function(){return Ie},setTest:function(Fe){Fe?he(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(Fe){ue!==Fe&&!H&&(n.depthMask(Fe),ue=Fe)},setFunc:function(Fe){if(Ie&&(Fe=gb[Fe]),pe!==Fe){switch(Fe){case Ac:n.depthFunc(n.NEVER);break;case Cc:n.depthFunc(n.ALWAYS);break;case Rc:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Pc:n.depthFunc(n.EQUAL);break;case Lc:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case Ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Fe}},setLocked:function(Fe){H=Fe},setClear:function(Fe){ke!==Fe&&(Ie&&(Fe=1-Fe),n.clearDepth(Fe),ke=Fe)},reset:function(){H=!1,ue=null,pe=null,ke=null,Ie=!1}}}function s(){let H=!1,Ie=null,ue=null,pe=null,ke=null,Fe=null,nt=null,Nt=null,qt=null;return{setTest:function(_t){H||(_t?he(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(_t){Ie!==_t&&!H&&(n.stencilMask(_t),Ie=_t)},setFunc:function(_t,_n,kn){(ue!==_t||pe!==_n||ke!==kn)&&(n.stencilFunc(_t,_n,kn),ue=_t,pe=_n,ke=kn)},setOp:function(_t,_n,kn){(Fe!==_t||nt!==_n||Nt!==kn)&&(n.stencilOp(_t,_n,kn),Fe=_t,nt=_n,Nt=kn)},setLocked:function(_t){H=_t},setClear:function(_t){qt!==_t&&(n.clearStencil(_t),qt=_t)},reset:function(){H=!1,Ie=null,ue=null,pe=null,ke=null,Fe=null,nt=null,Nt=null,qt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,P=null,A=null,L=new mt(0,0,0),F=0,w=!1,M=null,D=null,Q=null,J=null,re=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,fe=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=fe>=1):X.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=fe>=2);let Ae=null,Y={};const O=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),Z=new Ht().fromArray(O),k=new Ht().fromArray(N);function ne(H,Ie,ue,pe){const ke=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(H,Fe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ue;nt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Ie+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Fe}const be={};be[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Mr),se(!1),oe(eh),he(n.CULL_FACE),T(is);function he(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Ne(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Be(H,Ie){return f[H]!==Ie?(n.bindFramebuffer(H,Ie),f[H]=Ie,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ie),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function je(H,Ie){let ue=p,pe=!1;if(H){ue=d.get(Ie),ue===void 0&&(ue=[],d.set(Ie,ue));const ke=H.textures;if(ue.length!==ke.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,nt=ke.length;Fe<nt;Fe++)ue[Fe]=n.COLOR_ATTACHMENT0+Fe;ue.length=ke.length,pe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ue)}function rt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const C={[Es]:n.FUNC_ADD,[U_]:n.FUNC_SUBTRACT,[N_]:n.FUNC_REVERSE_SUBTRACT};C[F_]=n.MIN,C[O_]=n.MAX;const U={[B_]:n.ZERO,[k_]:n.ONE,[z_]:n.SRC_COLOR,[wc]:n.SRC_ALPHA,[X_]:n.SRC_ALPHA_SATURATE,[W_]:n.DST_COLOR,[V_]:n.DST_ALPHA,[H_]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[$_]:n.ONE_MINUS_DST_COLOR,[G_]:n.ONE_MINUS_DST_ALPHA,[q_]:n.CONSTANT_COLOR,[Y_]:n.ONE_MINUS_CONSTANT_COLOR,[K_]:n.CONSTANT_ALPHA,[j_]:n.ONE_MINUS_CONSTANT_ALPHA};function T(H,Ie,ue,pe,ke,Fe,nt,Nt,qt,_t){if(H===is){v===!0&&(Ne(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),H!==I_){if(H!==m||_t!==w){if((h!==Es||x!==Es)&&(n.blendEquation(n.FUNC_ADD),h=Es,x=Es),_t)switch(H){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,_=null,P=null,A=null,L.set(0,0,0),F=0,m=H,w=_t}return}ke=ke||Ie,Fe=Fe||ue,nt=nt||pe,(Ie!==h||ke!==x)&&(n.blendEquationSeparate(C[Ie],C[ke]),h=Ie,x=ke),(ue!==y||pe!==_||Fe!==P||nt!==A)&&(n.blendFuncSeparate(U[ue],U[pe],U[Fe],U[nt]),y=ue,_=pe,P=Fe,A=nt),(Nt.equals(L)===!1||qt!==F)&&(n.blendColor(Nt.r,Nt.g,Nt.b,qt),L.copy(Nt),F=qt),m=H,w=!1}function ve(H,Ie){H.side===Li?Ne(n.CULL_FACE):he(n.CULL_FACE);let ue=H.side===vn;Ie&&(ue=!ue),se(ue),H.blending===gr&&H.transparent===!1?T(is):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const pe=H.stencilWrite;a.setTest(pe),pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),_e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function oe(H){H!==P_?(he(n.CULL_FACE),H!==D&&(H===eh?n.cullFace(n.BACK):H===L_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),D=H}function ce(H){H!==Q&&(K&&n.lineWidth(H),Q=H)}function _e(H,Ie,ue){H?(he(n.POLYGON_OFFSET_FILL),(J!==Ie||re!==ue)&&(n.polygonOffset(Ie,ue),J=Ie,re=ue)):Ne(n.POLYGON_OFFSET_FILL)}function ae(H){H?he(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function b(H){H===void 0&&(H=n.TEXTURE0+de-1),Ae!==H&&(n.activeTexture(H),Ae=H)}function S(H,Ie,ue){ue===void 0&&(Ae===null?ue=n.TEXTURE0+de-1:ue=Ae);let pe=Y[ue];pe===void 0&&(pe={type:void 0,texture:void 0},Y[ue]=pe),(pe.type!==H||pe.texture!==Ie)&&(Ae!==ue&&(n.activeTexture(ue),Ae=ue),n.bindTexture(H,Ie||be[H]),pe.type=H,pe.texture=Ie)}function I(){const H=Y[Ae];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Z.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Z.copy(H))}function Re(H){k.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),k.copy(H))}function et(H,Ie){let ue=c.get(Ie);ue===void 0&&(ue=new WeakMap,c.set(Ie,ue));let pe=ue.get(H);pe===void 0&&(pe=n.getUniformBlockIndex(Ie,H.name),ue.set(H,pe))}function tt(H,Ie){const pe=c.get(Ie).get(H);l.get(Ie)!==pe&&(n.uniformBlockBinding(Ie,pe,H.__bindingPointIndex),l.set(Ie,pe))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Ae=null,Y={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,P=null,A=null,L=new mt(0,0,0),F=0,w=!1,M=null,D=null,Q=null,J=null,re=null,Z.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:Be,drawBuffers:je,useProgram:rt,setBlending:T,setMaterial:ve,setFlipSided:se,setCullFace:oe,setLineWidth:ce,setPolygonOffset:_e,setScissorTest:ae,activeTexture:b,bindTexture:S,unbindTexture:I,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:Le,texImage3D:We,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:Xe,texStorage3D:Se,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:Me,compressedTexSubImage3D:Te,scissor:Je,viewport:Re,reset:gt}}function Kh(n,e,t,i){const s=_b(i);switch(t){case Kp:return n*e;case Jp:return n*e;case Zp:return n*e*2;case Qp:return n*e/s.components*s.byteLength;case Ku:return n*e/s.components*s.byteLength;case em:return n*e*2/s.components*s.byteLength;case ju:return n*e*2/s.components*s.byteLength;case jp:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Ju:return n*e*4/s.components*s.byteLength;case ga:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case Hc:return Math.max(n,16)*Math.max(e,8)/4;case Bc:case zc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ya:case ru:case ou:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tm:case au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lu:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _b(n){switch(n){case Hi:case Xp:return{byteLength:1,components:1};case fo:case qp:case Eo:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Is:case Xu:case Di:return{byteLength:4,components:1};case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):Ha("canvas")}function v(b,S,I){let q=1;const te=ae(b);if((te.width>I||te.height>I)&&(q=I/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(q*te.width),Ce=Math.floor(q*te.height);f===void 0&&(f=g(j,Ce));const Me=S?g(j,Ce):f;return Me.width=j,Me.height=Ce,Me.getContext("2d").drawImage(b,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ce+")."),Me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(b,S,I,q,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=S;if(S===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),S===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),S===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Ce=te?ul:pt.getTransfer(q);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=Ce===St?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(b,S){let I;return b?S===null||S===Is||S===Er?I=n.DEPTH24_STENCIL8:S===Di?I=n.DEPTH32F_STENCIL8:S===fo&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Is||S===Er?I=n.DEPTH_COMPONENT24:S===Di?I=n.DEPTH_COMPONENT32F:S===fo&&(I=n.DEPTH_COMPONENT16),I}function P(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==ci?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),F(S),S.isVideoTexture&&u.delete(S)}function L(b){const S=b.target;S.removeEventListener("dispose",L),M(S)}function F(b){const S=i.get(b);if(S.__webglInit===void 0)return;const I=b.source,q=d.get(I);if(q){const te=q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(b),Object.keys(q).length===0&&d.delete(I)}i.remove(b)}function w(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const I=b.source,q=d.get(I);delete q[S.__cacheKey],o.memory.textures--}function M(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let te=0;te<S.__webglFramebuffer[q].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[q][te]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=b.textures;for(let q=0,te=I.length;q<te;q++){const j=i.get(I[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[q])}i.remove(b)}let D=0;function Q(){D=0}function J(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function re(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function de(b,S){const I=i.get(b);if(b.isVideoTexture&&ce(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(I,b,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function K(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){k(I,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function fe(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){k(I,b,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function X(b,S){const I=i.get(b);if(b.version>0&&I.__version!==b.version){ne(I,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const Ae={[Fc]:n.REPEAT,[As]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},Y={[jn]:n.NEAREST,[o0]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Cs]:n.LINEAR_MIPMAP_LINEAR},O={[u0]:n.NEVER,[g0]:n.ALWAYS,[f0]:n.LESS,[im]:n.LEQUAL,[h0]:n.EQUAL,[m0]:n.GEQUAL,[d0]:n.GREATER,[p0]:n.NOTEQUAL};function N(b,S){if(S.type===Di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ci||S.magFilter===Cl||S.magFilter===No||S.magFilter===Cs||S.minFilter===ci||S.minFilter===Cl||S.minFilter===No||S.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Ae[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Ae[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Ae[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Y[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,O[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==No&&S.minFilter!==Cs||S.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(b,S){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let te=d.get(q);te===void 0&&(te={},d.set(q,te));const j=re(S);if(j!==b.__cacheKey){te[j]===void 0&&(te[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[j].usedTimes++;const Ce=te[b.__cacheKey];Ce!==void 0&&(te[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(S)),b.__cacheKey=j,b.__webglTexture=te[j].texture}return I}function k(b,S,I){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const te=Z(b,S),j=S.source;t.bindTexture(q,b.__webglTexture,n.TEXTURE0+I);const Ce=i.get(j);if(j.version!==Ce.__version||te===!0){t.activeTexture(n.TEXTURE0+I);const Me=pt.getPrimaries(pt.workingColorSpace),Te=S.colorSpace===Zi?null:pt.getPrimaries(S.colorSpace),Xe=S.colorSpace===Zi||Me===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Se=v(S.image,!1,s.maxTextureSize);Se=_e(S,Se);const Le=r.convert(S.format,S.colorSpace),We=r.convert(S.type);let Je=_(S.internalFormat,Le,We,S.colorSpace,S.isVideoTexture);N(q,S);let Re;const et=S.mipmaps,tt=S.isVideoTexture!==!0,gt=Ce.__version===void 0||te===!0,H=j.dataReady,Ie=P(S,Se);if(S.isDepthTexture)Je=x(S.format===wr,S.type),gt&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Je,Se.width,Se.height,0,Le,We,null));else if(S.isDataTexture)if(et.length>0){tt&&gt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,et[0].width,et[0].height);for(let ue=0,pe=et.length;ue<pe;ue++)Re=et[ue],tt?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Re.width,Re.height,Le,We,Re.data):t.texImage2D(n.TEXTURE_2D,ue,Je,Re.width,Re.height,0,Le,We,Re.data);S.generateMipmaps=!1}else tt?(gt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,Se.width,Se.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,Le,We,Se.data)):t.texImage2D(n.TEXTURE_2D,0,Je,Se.width,Se.height,0,Le,We,Se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Je,et[0].width,et[0].height,Se.depth);for(let ue=0,pe=et.length;ue<pe;ue++)if(Re=et[ue],S.format!==Xn)if(Le!==null)if(tt){if(H)if(S.layerUpdates.size>0){const ke=Kh(Re.width,Re.height,S.format,S.type);for(const Fe of S.layerUpdates){const nt=Re.data.subarray(Fe*ke/Re.data.BYTES_PER_ELEMENT,(Fe+1)*ke/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Fe,Re.width,Re.height,1,Le,nt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Re.width,Re.height,Se.depth,Le,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Je,Re.width,Re.height,Se.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Re.width,Re.height,Se.depth,Le,We,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Je,Re.width,Re.height,Se.depth,0,Le,We,Re.data)}else{tt&&gt&&t.texStorage2D(n.TEXTURE_2D,Ie,Je,et[0].width,et[0].height);for(let ue=0,pe=et.length;ue<pe;ue++)Re=et[ue],S.format!==Xn?Le!==null?tt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Je,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Re.width,Re.height,Le,We,Re.data):t.texImage2D(n.TEXTURE_2D,ue,Je,Re.width,Re.height,0,Le,We,Re.data)}else if(S.isDataArrayTexture)if(tt){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Je,Se.width,Se.height,Se.depth),H)if(S.layerUpdates.size>0){const ue=Kh(Se.width,Se.height,S.format,S.type);for(const pe of S.layerUpdates){const ke=Se.data.subarray(pe*ue/Se.data.BYTES_PER_ELEMENT,(pe+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Le,We,ke)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,We,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Le,We,Se.data);else if(S.isData3DTexture)tt?(gt&&t.texStorage3D(n.TEXTURE_3D,Ie,Je,Se.width,Se.height,Se.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,We,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Le,We,Se.data);else if(S.isFramebufferTexture){if(gt)if(tt)t.texStorage2D(n.TEXTURE_2D,Ie,Je,Se.width,Se.height);else{let ue=Se.width,pe=Se.height;for(let ke=0;ke<Ie;ke++)t.texImage2D(n.TEXTURE_2D,ke,Je,ue,pe,0,Le,We,null),ue>>=1,pe>>=1}}else if(et.length>0){if(tt&&gt){const ue=ae(et[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Je,ue.width,ue.height)}for(let ue=0,pe=et.length;ue<pe;ue++)Re=et[ue],tt?H&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Le,We,Re):t.texImage2D(n.TEXTURE_2D,ue,Je,Le,We,Re);S.generateMipmaps=!1}else if(tt){if(gt){const ue=ae(Se);t.texStorage2D(n.TEXTURE_2D,Ie,Je,ue.width,ue.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,We,Se)}else t.texImage2D(n.TEXTURE_2D,0,Je,Le,We,Se);m(S)&&h(q),Ce.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ne(b,S,I){if(S.image.length!==6)return;const q=Z(b,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const j=i.get(te);if(te.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+I);const Ce=pt.getPrimaries(pt.workingColorSpace),Me=S.colorSpace===Zi?null:pt.getPrimaries(S.colorSpace),Te=S.colorSpace===Zi||Ce===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,Le=[];for(let pe=0;pe<6;pe++)!Xe&&!Se?Le[pe]=v(S.image[pe],!0,s.maxCubemapSize):Le[pe]=Se?S.image[pe].image:S.image[pe],Le[pe]=_e(S,Le[pe]);const We=Le[0],Je=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),et=_(S.internalFormat,Je,Re,S.colorSpace),tt=S.isVideoTexture!==!0,gt=j.__version===void 0||q===!0,H=te.dataReady;let Ie=P(S,We);N(n.TEXTURE_CUBE_MAP,S);let ue;if(Xe){tt&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,et,We.width,We.height);for(let pe=0;pe<6;pe++){ue=Le[pe].mipmaps;for(let ke=0;ke<ue.length;ke++){const Fe=ue[ke];S.format!==Xn?Je!==null?tt?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,Fe.width,Fe.height,Je,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,Fe.width,Fe.height,Je,Re,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,et,Fe.width,Fe.height,0,Je,Re,Fe.data)}}}else{if(ue=S.mipmaps,tt&&gt){ue.length>0&&Ie++;const pe=ae(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,et,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Le[pe].width,Le[pe].height,Je,Re,Le[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,et,Le[pe].width,Le[pe].height,0,Je,Re,Le[pe].data);for(let ke=0;ke<ue.length;ke++){const nt=ue[ke].image[pe].image;tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,nt.width,nt.height,Je,Re,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,et,nt.width,nt.height,0,Je,Re,nt.data)}}else{tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Re,Le[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,et,Je,Re,Le[pe]);for(let ke=0;ke<ue.length;ke++){const Fe=ue[ke];tt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,Je,Re,Fe.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,et,Je,Re,Fe.image[pe])}}}m(S)&&h(n.TEXTURE_CUBE_MAP),j.__version=te.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function be(b,S,I,q,te,j){const Ce=r.convert(I.format,I.colorSpace),Me=r.convert(I.type),Te=_(I.internalFormat,Ce,Me,I.colorSpace),Xe=i.get(S),Se=i.get(I);if(Se.__renderTarget=S,!Xe.__hasExternalTextures){const Le=Math.max(1,S.width>>j),We=Math.max(1,S.height>>j);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,j,Te,Le,We,S.depth,0,Ce,Me,null):t.texImage2D(te,j,Te,Le,We,0,Ce,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,te,Se.__webglTexture,0,se(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,te,Se.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){const q=S.depthTexture,te=q&&q.isDepthTexture?q.type:null,j=x(S.stencilBuffer,te),Ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=se(S);oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,j,S.width,S.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,b)}else{const q=S.textures;for(let te=0;te<q.length;te++){const j=q[te],Ce=r.convert(j.format,j.colorSpace),Me=r.convert(j.type),Te=_(j.internalFormat,Ce,Me,j.colorSpace),Xe=se(S);I&&oe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Te,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Te,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Te,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),de(S.depthTexture,0);const te=q.__webglTexture,j=se(S);if(S.depthTexture.format===vr)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(S.depthTexture.format===wr)oe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(b){const S=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=q}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,b)}else if(I){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),he(S.__webglDepthbuffer[q],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),he(S.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(b,S,I){const q=i.get(b);S!==void 0&&be(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Be(b)}function rt(b){const S=b.texture,I=i.get(b),q=i.get(S);b.addEventListener("dispose",L);const te=b.textures,j=b.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[Me]=[];for(let Te=0;Te<S.mipmaps.length;Te++)I.__webglFramebuffer[Me][Te]=n.createFramebuffer()}else I.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)I.__webglFramebuffer[Me]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let Me=0,Te=te.length;Me<Te;Me++){const Xe=i.get(te[Me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&oe(b)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Me=0;Me<te.length;Me++){const Te=te[Me];I.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[Me]);const Xe=r.convert(Te.format,Te.colorSpace),Se=r.convert(Te.type),Le=_(Te.internalFormat,Xe,Se,Te.colorSpace,b.isXRRenderTarget===!0),We=se(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Le,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,I.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),he(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),N(n.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)be(I.__webglFramebuffer[Me][Te],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Te);else be(I.__webglFramebuffer[Me],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Me=0,Te=te.length;Me<Te;Me++){const Xe=te[Me],Se=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),N(n.TEXTURE_2D,Xe),be(I.__webglFramebuffer,b,Xe,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),m(Xe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,q.__webglTexture),N(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)be(I.__webglFramebuffer[Te],b,S,n.COLOR_ATTACHMENT0,Me,Te);else be(I.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,Me,0);m(S)&&h(Me),t.unbindTexture()}b.depthBuffer&&Be(b)}function C(b){const S=b.textures;for(let I=0,q=S.length;I<q;I++){const te=S[I];if(m(te)){const j=y(b),Ce=i.get(te).__webglTexture;t.bindTexture(j,Ce),h(j),t.unbindTexture()}}}const U=[],T=[];function ve(b){if(b.samples>0){if(oe(b)===!1){const S=b.textures,I=b.width,q=b.height;let te=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(b),Me=S.length>1;if(Me)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Xe=i.get(S[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,I,q,0,0,I,q,te,n.NEAREST),l===!0&&(U.length=0,T.length=0,U.push(n.COLOR_ATTACHMENT0+Te),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(j),T.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Xe=i.get(S[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function se(b){return Math.min(s.maxSamples,b.samples)}function oe(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function _e(b,S){const I=b.colorSpace,q=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==Ar&&I!==Zi&&(pt.getTransfer(I)===St?(q!==Xn||te!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.setTexture2D=de,this.setTexture2DArray=K,this.setTexture3D=fe,this.setTextureCube=X,this.rebindTextures=je,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=oe}function yb(n,e){function t(i,s=Zi){let r;const o=pt.getTransfer(s);if(i===Hi)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xp)return n.BYTE;if(i===qp)return n.SHORT;if(i===fo)return n.UNSIGNED_SHORT;if(i===Xu)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Eo)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===jp)return n.RGB;if(i===Xn)return n.RGBA;if(i===Jp)return n.LUMINANCE;if(i===Zp)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Qp)return n.RED;if(i===Ku)return n.RED_INTEGER;if(i===em)return n.RG;if(i===ju)return n.RG_INTEGER;if(i===Ju)return n.RGBA_INTEGER;if(i===ga||i===va||i===_a||i===xa)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===kc||i===zc||i===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Gc||i===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Gc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$c||i===Xc||i===qc||i===Yc||i===Kc||i===jc||i===Jc||i===Zc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$c)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ya||i===ru||i===ou)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ya)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tm||i===au||i===lu||i===cu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Mb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:bb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tb extends Cr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new wb,m=t.getContextAttributes();let h=null,y=null;const _=[],x=[],P=new He;let A=null;const L=new Ln;L.viewport=new Ht;const F=new Ln;F.viewport=new Ht;const w=[L,F],M=new Mb;let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=_[k];return ne===void 0&&(ne=new ic,_[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=_[k];return ne===void 0&&(ne=new ic,_[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=_[k];return ne===void 0&&(ne=new ic,_[k]=ne),ne.getHandSpace()};function J(k){const ne=x.indexOf(k.inputSource);if(ne===-1)return;const be=_[ne];be!==void 0&&(be.update(k.inputSource,k.frame,c||o),be.dispatchEvent({type:k.type,data:k.inputSource}))}function re(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",de);for(let k=0;k<_.length;k++){const ne=x[k];ne!==null&&(x[k]=null,_[k].disconnect(ne))}D=null,Q=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,y=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",re),s.addEventListener("inputsourceschange",de),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Us(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,be=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?wr:vr,be=m.stencil?Er:Is);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Us(d.textureWidth,d.textureHeight,{format:Xn,type:Hi,depthTexture:new mm(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function de(k){for(let ne=0;ne<k.removed.length;ne++){const be=k.removed[ne],he=x.indexOf(be);he>=0&&(x[he]=null,_[he].disconnect(be))}for(let ne=0;ne<k.added.length;ne++){const be=k.added[ne];let he=x.indexOf(be);if(he===-1){for(let Be=0;Be<_.length;Be++)if(Be>=x.length){x.push(be),he=Be;break}else if(x[Be]===null){x[Be]=be,he=Be;break}if(he===-1)break}const Ne=_[he];Ne&&Ne.connect(be)}}const K=new z,fe=new z;function X(k,ne,be){K.setFromMatrixPosition(ne.matrixWorld),fe.setFromMatrixPosition(be.matrixWorld);const he=K.distanceTo(fe),Ne=ne.projectionMatrix.elements,Be=be.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),rt=Ne[14]/(Ne[10]+1),C=(Ne[9]+1)/Ne[5],U=(Ne[9]-1)/Ne[5],T=(Ne[8]-1)/Ne[0],ve=(Be[8]+1)/Be[0],se=je*T,oe=je*ve,ce=he/(-T+ve),_e=ce*-T;if(ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(_e),k.translateZ(ce),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ne[10]===-1)k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ae=je+ce,b=rt+ce,S=se-_e,I=oe+(he-_e),q=C*rt/b*ae,te=U*rt/b*ae;k.projectionMatrix.makePerspective(S,I,q,te,ae,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ae(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let ne=k.near,be=k.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(be=v.depthFar)),M.near=F.near=L.near=ne,M.far=F.far=L.far=be,(D!==M.near||Q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Q=M.far),L.layers.mask=k.layers.mask|2,F.layers.mask=k.layers.mask|4,M.layers.mask=L.layers.mask|F.layers.mask;const he=k.parent,Ne=M.cameras;Ae(M,he);for(let Be=0;Be<Ne.length;Be++)Ae(Ne[Be],he);Ne.length===2?X(M,L,F):M.projectionMatrix.copy(L.projectionMatrix),Y(k,M,he)};function Y(k,ne,be){be===null?k.matrix.copy(ne.matrixWorld):(k.matrix.copy(be.matrixWorld),k.matrix.invert(),k.matrix.multiply(ne.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fu*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let O=null;function N(k,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let he=!1;be.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Be=0;Be<be.length;Be++){const je=be[Be];let rt=null;if(p!==null)rt=p.getViewport(je);else{const U=f.getViewSubImage(d,je);rt=U.viewport,Be===0&&(e.setRenderTargetTextures(y,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(y))}let C=w[Be];C===void 0&&(C=new Ln,C.layers.enable(Be),C.viewport=new Ht,w[Be]=C),C.matrix.fromArray(je.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(je.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(rt.x,rt.y,rt.width,rt.height),Be===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(C)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Be=f.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let be=0;be<_.length;be++){const he=x[be],Ne=_[be];he!==null&&Ne!==void 0&&Ne.update(he,ne,c||o)}O&&O(k,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Z=new dm;Z.setAnimationLoop(N),this.setAnimationLoop=function(k){O=k},this.dispose=function(){}}}const _s=new Qn,Ab=new Lt;function Cb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,um(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,_s.copy(x),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(_s)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(y,P);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const _=f();y.__bindingPointIndex=_;const x=n.createBuffer(),P=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,L=x.length;A<L;A++){const F=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=F.length;w<M;w++){const D=F[w];if(p(D,A,w,P)===!0){const Q=D.__offset,J=Array.isArray(D.value)?D.value:[D.value];let re=0;for(let de=0;de<J.length;de++){const K=J[de],fe=v(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,Q+re,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,re),re+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,_,x,P){const A=y.value,L=_+"_"+x;if(P[L]===void 0)return typeof A=="number"||typeof A=="boolean"?P[L]=A:P[L]=A.clone(),!0;{const F=P[L];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[L]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(y){const _=y.uniforms;let x=0;const P=16;for(let L=0,F=_.length;L<F;L++){const w=Array.isArray(_[L])?_[L]:[_[L]];for(let M=0,D=w.length;M<D;M++){const Q=w[M],J=Array.isArray(Q.value)?Q.value:[Q.value];for(let re=0,de=J.length;re<de;re++){const K=J[re],fe=v(K),X=x%P,Ae=X%fe.boundary,Y=X+Ae;x+=Ae,Y!==0&&P-Y<fe.storage&&(x+=P-Y),Q.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=x,x+=fe.storage}}}const A=x%P;return A>0&&(x+=P-A),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function h(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Pb{constructor(e={}){const{canvas:t=_0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=ss,this.toneMappingExposure=1;const x=this;let P=!1,A=0,L=0,F=null,w=-1,M=null;const D=new Ht,Q=new Ht;let J=null;const re=new mt(0);let de=0,K=t.width,fe=t.height,X=1,Ae=null,Y=null;const O=new Ht(0,0,K,fe),N=new Ht(0,0,K,fe);let Z=!1;const k=new ef;let ne=!1,be=!1;const he=new Lt,Ne=new Lt,Be=new z,je=new Ht,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function U(){return F===null?X:1}let T=i;function ve(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$u}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),T===null){const V="webgl2";if(T=ve(V,E),T===null)throw ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,oe,ce,_e,ae,b,S,I,q,te,j,Ce,Me,Te,Xe,Se,Le,We,Je,Re,et,tt,gt,H;function Ie(){se=new NM(T),se.init(),tt=new yb(T,se),oe=new RM(T,se,e,tt),ce=new vb(T,se),oe.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),_e=new BM(T),ae=new nb,b=new xb(T,se,ce,ae,oe,tt,_e),S=new LM(x),I=new UM(x),q=new $0(T),gt=new AM(T,q),te=new FM(T,q,_e,gt),j=new zM(T,te,q,_e),Je=new kM(T,oe,b),Se=new PM(ae),Ce=new tb(x,S,I,se,oe,gt,Se),Me=new Cb(x,ae),Te=new sb,Xe=new ub(se),We=new TM(x,S,I,ce,j,p,l),Le=new mb(x,j,oe),H=new Rb(T,_e,oe,ce),Re=new CM(T,se,_e),et=new OM(T,se,_e),_e.programs=Ce.programs,x.capabilities=oe,x.extensions=se,x.properties=ae,x.renderLists=Te,x.shadowMap=Le,x.state=ce,x.info=_e}Ie();const ue=new Tb(x,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(K,fe,!1))},this.getSize=function(E){return E.set(K,fe)},this.setSize=function(E,V,ee=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,fe=V,t.width=Math.floor(E*X),t.height=Math.floor(V*X),ee===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(K*X,fe*X).floor()},this.setDrawingBufferSize=function(E,V,ee){K=E,fe=V,X=ee,t.width=Math.floor(E*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,V,ee,ie){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,V,ee,ie),ce.viewport(D.copy(O).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,V,ee,ie){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,V,ee,ie),ce.scissor(Q.copy(N).multiplyScalar(X).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ce.setScissorTest(Z=E)},this.setOpaqueSort=function(E){Ae=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(E=!0,V=!0,ee=!0){let ie=0;if(E){let W=!1;if(F!==null){const we=F.texture.format;W=we===Ju||we===ju||we===Ku}if(W){const we=F.texture.type,Pe=we===Hi||we===Is||we===fo||we===Er||we===qu||we===Yu,Ve=We.getClearColor(),ze=We.getClearAlpha(),Ye=Ve.r,Ke=Ve.g,Oe=Ve.b;Pe?(g[0]=Ye,g[1]=Ke,g[2]=Oe,g[3]=ze,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Ye,v[1]=Ke,v[2]=Oe,v[3]=ze,T.clearBufferiv(T.COLOR,0,v))}else ie|=T.COLOR_BUFFER_BIT}V&&(ie|=T.DEPTH_BUFFER_BIT),ee&&(ie|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Te.dispose(),Xe.dispose(),ae.dispose(),S.dispose(),I.dispose(),j.dispose(),gt.dispose(),H.dispose(),Ce.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Co),ue.removeEventListener("sessionend",G),xe.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=_e.autoReset,V=Le.enabled,ee=Le.autoUpdate,ie=Le.needsUpdate,W=Le.type;Ie(),_e.autoReset=E,Le.enabled=V,Le.autoUpdate=ee,Le.needsUpdate=ie,Le.type=W}function Fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const V=E.target;V.removeEventListener("dispose",nt),Nt(V)}function Nt(E){qt(E),ae.remove(E)}function qt(E){const V=ae.get(E).programs;V!==void 0&&(V.forEach(function(ee){Ce.releaseProgram(ee)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,ee,ie,W,we){V===null&&(V=rt);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Tt(E,V,ee,ie,W);ce.setMaterial(ie,Pe);let ze=ee.index,Ye=1;if(ie.wireframe===!0){if(ze=te.getWireframeAttribute(ee),ze===void 0)return;Ye=2}const Ke=ee.drawRange,Oe=ee.attributes.position;let Ge=Ke.start*Ye,at=(Ke.start+Ke.count)*Ye;we!==null&&(Ge=Math.max(Ge,we.start*Ye),at=Math.min(at,(we.start+we.count)*Ye)),ze!==null?(Ge=Math.max(Ge,0),at=Math.min(at,ze.count)):Oe!=null&&(Ge=Math.max(Ge,0),at=Math.min(at,Oe.count));const xt=at-Ge;if(xt<0||xt===1/0)return;gt.setup(W,ie,Ve,ee,ze);let Yt,dt=Re;if(ze!==null&&(Yt=q.get(ze),dt=et,dt.setIndex(Yt)),W.isMesh)ie.wireframe===!0?(ce.setLineWidth(ie.wireframeLinewidth*U()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(W.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),ce.setLineWidth($e*U()),W.isLineSegments?dt.setMode(T.LINES):W.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else W.isPoints?dt.setMode(T.POINTS):W.isSprite&&dt.setMode(T.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)dt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $e=W._multiDrawStarts,zn=W._multiDrawCounts,vt=W._multiDrawCount,Hn=ze?q.get(ze).bytesPerElement:1,zs=ae.get(ie).currentProgram.getUniforms();for(let xn=0;xn<vt;xn++)zs.setValue(T,"_gl_DrawID",xn),dt.render($e[xn]/Hn,zn[xn])}else if(W.isInstancedMesh)dt.renderInstances(Ge,xt,W.count);else if(ee.isInstancedBufferGeometry){const $e=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,zn=Math.min(ee.instanceCount,$e);dt.renderInstances(Ge,xt,zn)}else dt.render(Ge,xt)};function _t(E,V,ee){E.transparent===!0&&E.side===Li&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,wt(E,V,ee),E.side=ls,E.needsUpdate=!0,wt(E,V,ee),E.side=Li):wt(E,V,ee)}this.compile=function(E,V,ee=null){ee===null&&(ee=E),h=Xe.get(ee),h.init(V),_.push(h),ee.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),E!==ee&&E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights();const ie=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const we=W.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ve=we[Pe];_t(Ve,ee,W),ie.add(Ve)}else _t(we,ee,W),ie.add(we)}),_.pop(),h=null,ie},this.compileAsync=function(E,V,ee=null){const ie=this.compile(E,V,ee);return new Promise(W=>{function we(){if(ie.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){W(E);return}setTimeout(we,10)}se.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let _n=null;function kn(E){_n&&_n(E)}function Co(){xe.stop()}function G(){xe.start()}const xe=new dm;xe.setAnimationLoop(kn),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(E){_n=E,ue.setAnimationLoop(E),E===null?xe.stop():xe.start()},ue.addEventListener("sessionstart",Co),ue.addEventListener("sessionend",G),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(V),V=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,V,F),h=Xe.get(E,_.length),h.init(V),_.push(h),Ne.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),k.setFromProjectionMatrix(Ne),be=this.localClippingEnabled,ne=Se.init(this.clippingPlanes,be),m=Te.get(E,y.length),m.init(),y.push(m),ue.enabled===!0&&ue.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&me(we,V,-1/0,x.sortObjects)}me(E,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Ae,Y),C=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,C&&We.addToRenderList(m,E),this.info.render.frame++,ne===!0&&Se.beginShadows();const ee=h.state.shadowsArray;Le.render(ee,E,V),ne===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,W=m.transmissive;if(h.setupLights(),V.isArrayCamera){const we=V.cameras;if(W.length>0)for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){const ze=we[Pe];Qe(ie,W,E,ze)}C&&We.render(E);for(let Pe=0,Ve=we.length;Pe<Ve;Pe++){const ze=we[Pe];De(m,E,ze,ze.viewport)}}else W.length>0&&Qe(ie,W,E,V),C&&We.render(E),De(m,E,V);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(x,E,V),gt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(h=_[_.length-1],ne===!0&&Se.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function me(E,V,ee,ie){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){ie&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const Pe=j.update(E),Ve=E.material;Ve.visible&&m.push(E,Pe,Ve,ee,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const Pe=j.update(E),Ve=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),je.copy(Pe.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ve)){const ze=Pe.groups;for(let Ye=0,Ke=ze.length;Ye<Ke;Ye++){const Oe=ze[Ye],Ge=Ve[Oe.materialIndex];Ge&&Ge.visible&&m.push(E,Pe,Ge,ee,je.z,Oe)}}else Ve.visible&&m.push(E,Pe,Ve,ee,je.z,null)}}const we=E.children;for(let Pe=0,Ve=we.length;Pe<Ve;Pe++)me(we[Pe],V,ee,ie)}function De(E,V,ee,ie){const W=E.opaque,we=E.transmissive,Pe=E.transparent;h.setupLightsView(ee),ne===!0&&Se.setGlobalState(x.clippingPlanes,ee),ie&&ce.viewport(D.copy(ie)),W.length>0&&ft(W,V,ee),we.length>0&&ft(we,V,ee),Pe.length>0&&ft(Pe,V,ee),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Qe(E,V,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ie.id]===void 0&&(h.state.transmissionRenderTarget[ie.id]=new Us(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Eo:Hi,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const we=h.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||D;we.setSize(Pe.z,Pe.w);const Ve=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(re),de=x.getClearAlpha(),de<1&&x.setClearColor(16777215,.5),x.clear(),C&&We.render(ee);const ze=x.toneMapping;x.toneMapping=ss;const Ye=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),h.setupLightsView(ie),ne===!0&&Se.setGlobalState(x.clippingPlanes,ie),ft(E,ee,ie),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Oe=0,Ge=V.length;Oe<Ge;Oe++){const at=V[Oe],xt=at.object,Yt=at.geometry,dt=at.material,$e=at.group;if(dt.side===Li&&xt.layers.test(ie.layers)){const zn=dt.side;dt.side=vn,dt.needsUpdate=!0,it(xt,ee,ie,Yt,dt,$e),dt.side=zn,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}x.setRenderTarget(Ve),x.setClearColor(re,de),Ye!==void 0&&(ie.viewport=Ye),x.toneMapping=ze}function ft(E,V,ee){const ie=V.isScene===!0?V.overrideMaterial:null;for(let W=0,we=E.length;W<we;W++){const Pe=E[W],Ve=Pe.object,ze=Pe.geometry,Ye=ie===null?Pe.material:ie,Ke=Pe.group;Ve.layers.test(ee.layers)&&it(Ve,V,ee,ze,Ye,Ke)}}function it(E,V,ee,ie,W,we){E.onBeforeRender(x,V,ee,ie,W,we),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,V,ee,ie,E,we),W.transparent===!0&&W.side===Li&&W.forceSinglePass===!1?(W.side=vn,W.needsUpdate=!0,x.renderBufferDirect(ee,V,ie,W,E,we),W.side=ls,W.needsUpdate=!0,x.renderBufferDirect(ee,V,ie,W,E,we),W.side=Li):x.renderBufferDirect(ee,V,ie,W,E,we),E.onAfterRender(x,V,ee,ie,W,we)}function wt(E,V,ee){V.isScene!==!0&&(V=rt);const ie=ae.get(E),W=h.state.lights,we=h.state.shadowsArray,Pe=W.state.version,Ve=Ce.getParameters(E,W.state,we,V,ee),ze=Ce.getProgramCacheKey(Ve);let Ye=ie.programs;ie.environment=E.isMeshStandardMaterial?V.environment:null,ie.fog=V.fog,ie.envMap=(E.isMeshStandardMaterial?I:S).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",nt),Ye=new Map,ie.programs=Ye);let Ke=Ye.get(ze);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===Pe)return zt(E,Ve),Ke}else Ve.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Ve,x),Ke=Ce.acquireProgram(Ve,ze),Ye.set(ze,Ke),ie.uniforms=Ve.uniforms;const Oe=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Se.uniform),zt(E,Ve),ie.needsLights=ks(E),ie.lightsStateVersion=Pe,ie.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function Rt(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function zt(E,V){const ee=ae.get(E);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Tt(E,V,ee,ie,W){V.isScene!==!0&&(V=rt),b.resetTextureUnits();const we=V.fog,Pe=ie.isMeshStandardMaterial?V.environment:null,Ve=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ar,ze=(ie.isMeshStandardMaterial?I:S).get(ie.envMap||Pe),Ye=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Oe=!!ee.morphAttributes.position,Ge=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let xt=ss;ie.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=x.toneMapping);const Yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,dt=Yt!==void 0?Yt.length:0,$e=ae.get(ie),zn=h.state.lights;if(ne===!0&&(be===!0||E!==M)){const Tn=E===M&&ie.id===w;Se.setState(ie,E,Tn)}let vt=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==zn.state.version||$e.outputColorSpace!==Ve||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==ze||ie.fog===!0&&$e.fog!==we||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==Ke||$e.morphTargets!==Oe||$e.morphNormals!==Ge||$e.morphColors!==at||$e.toneMapping!==xt||$e.morphTargetsCount!==dt)&&(vt=!0):(vt=!0,$e.__version=ie.version);let Hn=$e.currentProgram;vt===!0&&(Hn=wt(ie,V,W));let zs=!1,xn=!1,Lr=!1;const Dt=Hn.getUniforms(),ti=$e.uniforms;if(ce.useProgram(Hn.program)&&(zs=!0,xn=!0,Lr=!0),ie.id!==w&&(w=ie.id,xn=!0),zs||M!==E){ce.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),y0(he),M0(he),Dt.setValue(T,"projectionMatrix",he)):Dt.setValue(T,"projectionMatrix",E.projectionMatrix),Dt.setValue(T,"viewMatrix",E.matrixWorldInverse);const Gi=Dt.map.cameraPosition;Gi!==void 0&&Gi.setValue(T,Be.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&Dt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Dt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,xn=!0,Lr=!0)}if(W.isSkinnedMesh){Dt.setOptional(T,W,"bindMatrix"),Dt.setOptional(T,W,"bindMatrixInverse");const Tn=W.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Dt.setValue(T,"boneTexture",Tn.boneTexture,b))}W.isBatchedMesh&&(Dt.setOptional(T,W,"batchingTexture"),Dt.setValue(T,"batchingTexture",W._matricesTexture,b),Dt.setOptional(T,W,"batchingIdTexture"),Dt.setValue(T,"batchingIdTexture",W._indirectTexture,b),Dt.setOptional(T,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(T,"batchingColorTexture",W._colorsTexture,b));const Dr=ee.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Je.update(W,ee,Hn),(xn||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,Dt.setValue(T,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ti.envMap.value=ze,ti.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&V.environment!==null&&(ti.envMapIntensity.value=V.environmentIntensity),xn&&(Dt.setValue(T,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&Qt(ti,Lr),we&&ie.fog===!0&&Me.refreshFogUniforms(ti,we),Me.refreshMaterialUniforms(ti,ie,X,fe,h.state.transmissionRenderTarget[E.id]),Ma.upload(T,Rt($e),ti,b)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ma.upload(T,Rt($e),ti,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Dt.setValue(T,"center",W.center),Dt.setValue(T,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(T,"normalMatrix",W.normalMatrix),Dt.setValue(T,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Tn=ie.uniformsGroups;for(let Gi=0,Wi=Tn.length;Gi<Wi;Gi++){const xf=Tn[Gi];H.update(xf,Hn),H.bind(xf,Hn)}}return Hn}function Qt(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function ks(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,V,ee){ae.get(E.texture).__webglTexture=V,ae.get(E.depthTexture).__webglTexture=ee;const ie=ae.get(E);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ee===void 0,ie.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,V){const ee=ae.get(E);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,ee=0){F=E,A=V,L=ee;let ie=!0,W=null,we=!1,Pe=!1;if(E){const ze=ae.get(E);if(ze.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(T.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(ze.__hasExternalTextures)b.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(ze.__boundDepthTexture!==Oe){if(Oe!==null&&ae.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const Ke=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?W=Ke[V][ee]:W=Ke[V],we=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?W=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[ee]:W=Ke,D.copy(E.viewport),Q.copy(E.scissor),J=E.scissorTest}else D.copy(O).multiplyScalar(X).floor(),Q.copy(N).multiplyScalar(X).floor(),J=Z;if(ce.bindFramebuffer(T.FRAMEBUFFER,W)&&ie&&ce.drawBuffers(E,W),ce.viewport(D),ce.scissor(Q),ce.setScissorTest(J),we){const ze=ae.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,ee)}else if(Pe){const ze=ae.get(E.texture),Ye=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Ye)}w=-1},this.readRenderTargetPixels=function(E,V,ee,ie,W,we,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){ce.bindFramebuffer(T.FRAMEBUFFER,Ve);try{const ze=E.texture,Ye=ze.format,Ke=ze.type;if(!oe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-ie&&ee>=0&&ee<=E.height-W&&T.readPixels(V,ee,ie,W,tt.convert(Ye),tt.convert(Ke),we)}finally{const ze=F!==null?ae.get(F).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,V,ee,ie,W,we,Pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){const ze=E.texture,Ye=ze.format,Ke=ze.type;if(!oe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=E.width-ie&&ee>=0&&ee<=E.height-W){ce.bindFramebuffer(T.FRAMEBUFFER,Ve);const Oe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Oe),T.bufferData(T.PIXEL_PACK_BUFFER,we.byteLength,T.STREAM_READ),T.readPixels(V,ee,ie,W,tt.convert(Ye),tt.convert(Ke),0);const Ge=F!==null?ae.get(F).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,Ge);const at=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await x0(T,at,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Oe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,we),T.deleteBuffer(Oe),T.deleteSync(at),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,ee=0){E.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1]);const ie=Math.pow(2,-ee),W=Math.floor(E.image.width*ie),we=Math.floor(E.image.height*ie),Pe=V!==null?V.x:0,Ve=V!==null?V.y:0;b.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,ee,0,0,Pe,Ve,W,we),ce.unbindTexture()},this.copyTextureToTexture=function(E,V,ee=null,ie=null,W=0){E.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,E=arguments[1],V=arguments[2],W=arguments[3]||0,ee=null);let we,Pe,Ve,ze,Ye,Ke,Oe,Ge,at;const xt=E.isCompressedTexture?E.mipmaps[W]:E.image;ee!==null?(we=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,Ye=ee.min.y,Ke=ee.isBox3?ee.min.z:0):(we=xt.width,Pe=xt.height,Ve=xt.depth||1,ze=0,Ye=0,Ke=0),ie!==null?(Oe=ie.x,Ge=ie.y,at=ie.z):(Oe=0,Ge=0,at=0);const Yt=tt.convert(V.format),dt=tt.convert(V.type);let $e;V.isData3DTexture?(b.setTexture3D(V,0),$e=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),$e=T.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),$e=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const zn=T.getParameter(T.UNPACK_ROW_LENGTH),vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Hn=T.getParameter(T.UNPACK_SKIP_PIXELS),zs=T.getParameter(T.UNPACK_SKIP_ROWS),xn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,xt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ze),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ye),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ke);const Lr=E.isDataArrayTexture||E.isData3DTexture,Dt=V.isDataArrayTexture||V.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ti=ae.get(E),Dr=ae.get(V),Tn=ae.get(ti.__renderTarget),Gi=ae.get(Dr.__renderTarget);ce.bindFramebuffer(T.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Ve;Wi++)Lr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,W,Ke+Wi),E.isDepthTexture?(Dt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(V).__webglTexture,W,at+Wi),T.blitFramebuffer(ze,Ye,we,Pe,Oe,Ge,we,Pe,T.DEPTH_BUFFER_BIT,T.NEAREST)):Dt?T.copyTexSubImage3D($e,W,Oe,Ge,at+Wi,ze,Ye,we,Pe):T.copyTexSubImage2D($e,W,Oe,Ge,at+Wi,ze,Ye,we,Pe);ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Dt?E.isDataTexture||E.isData3DTexture?T.texSubImage3D($e,W,Oe,Ge,at,we,Pe,Ve,Yt,dt,xt.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D($e,W,Oe,Ge,at,we,Pe,Ve,Yt,xt.data):T.texSubImage3D($e,W,Oe,Ge,at,we,Pe,Ve,Yt,dt,xt):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,W,Oe,Ge,we,Pe,Yt,dt,xt.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,W,Oe,Ge,xt.width,xt.height,Yt,xt.data):T.texSubImage2D(T.TEXTURE_2D,W,Oe,Ge,we,Pe,Yt,dt,xt);T.pixelStorei(T.UNPACK_ROW_LENGTH,zn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Hn),T.pixelStorei(T.UNPACK_SKIP_ROWS,zs),T.pixelStorei(T.UNPACK_SKIP_IMAGES,xn),W===0&&V.generateMipmaps&&T.generateMipmap($e),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,V,ee=null,ie=null,W=0){return E.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ie=arguments[1]||null,E=arguments[2],V=arguments[3],W=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,V,ee,ie,W)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){A=0,L=0,F=null,ce.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}class Lb extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Db{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new z;class Ga{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ym extends Bs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const kr=new z,ir=new z,sr=new z,rr=new He,zr=new He,Mm=new Lt,na=new z,Hr=new z,ia=new z,jh=new He,sc=new He,Jh=new He;class Ib extends jt{constructor(e=new ym){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new ei;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Db(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Ga(i,3,0,!1)),nr.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new He(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;sa(na.set(-.5,-.5,0),sr,o,ir,s,r),sa(Hr.set(.5,-.5,0),sr,o,ir,s,r),sa(ia.set(.5,.5,0),sr,o,ir,s,r),jh.set(0,0),sc.set(1,0),Jh.set(1,1);let a=e.ray.intersectTriangle(na,Hr,ia,!1,kr);if(a===null&&(sa(Hr.set(-.5,.5,0),sr,o,ir,s,r),sc.set(0,1),a=e.ray.intersectTriangle(na,ia,Hr,!1,kr),a===null))return;const l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Dn.getInterpolation(kr,na,Hr,ia,jh,sc,Jh,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(n,e,t,i,s,r){rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zr.x=r*rr.x-s*rr.y,zr.y=s*rr.x+r*rr.y):zr.copy(rr),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(Mm)}class Sm extends Bs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new Lt,du=new Zu,ra=new fl,oa=new z;class Ub extends jt{constructor(e=new ei,t=new Sm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Zh.copy(s).invert(),du.copy(e.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);oa.fromBufferAttribute(f,m),Qh(oa,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)oa.fromBufferAttribute(f,g),Qh(oa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qh(n,e,t,i,s,r,o){const a=du.distanceSqToPoint(n);if(a<t){const l=new z;du.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nb extends mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new z,s=[],r=[],o=[],a=new z,l=new Lt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(sn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nf extends gi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new He){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fb extends nf{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const aa=new z,rc=new sf,oc=new sf,ac=new sf;class Ob extends gi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(aa.subVectors(s[0],s[1]).add(s[0]),c=aa);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),rc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),oc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),ac.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),oc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),ac.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(rc.calc(l),oc.calc(l),ac.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ed(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Bb(n,e){const t=1-n;return t*t*e}function kb(n,e){return 2*(1-n)*n*e}function zb(n,e){return n*n*e}function no(n,e,t,i){return Bb(n,e)+kb(n,t)+zb(n,i)}function Hb(n,e){const t=1-n;return t*t*t*e}function Vb(n,e){const t=1-n;return 3*t*t*n*e}function Gb(n,e){return 3*(1-n)*n*n*e}function Wb(n,e){return n*n*n*e}function io(n,e,t,i,s){return Hb(n,e)+Vb(n,t)+Gb(n,i)+Wb(n,s)}class bm extends gi{constructor(e=new He,t=new He,i=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new He){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(io(e,s.x,r.x,o.x,a.x),io(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $b extends gi{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(io(e,s.x,r.x,o.x,a.x),io(e,s.y,r.y,o.y,a.y),io(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Em extends gi{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xb extends gi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wm extends gi{constructor(e=new He,t=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new He){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(no(e,s.x,r.x,o.x),no(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qb extends gi{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(no(e,s.x,r.x,o.x),no(e,s.y,r.y,o.y),no(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tm extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(ed(a,l.x,c.x,u.x,f.x),ed(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new He().fromArray(s))}return this}}var td=Object.freeze({__proto__:null,ArcCurve:Fb,CatmullRomCurve3:Ob,CubicBezierCurve:bm,CubicBezierCurve3:$b,EllipseCurve:nf,LineCurve:Em,LineCurve3:Xb,QuadraticBezierCurve:wm,QuadraticBezierCurve3:qb,SplineCurve:Tm});class Yb extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new td[s.type]().fromJSON(s))}return this}}class nd extends Yb{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Em(this.currentPoint.clone(),new He(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new wm(this.currentPoint.clone(),new He(e,t),new He(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new bm(this.currentPoint.clone(),new He(e,t),new He(i,s),new He(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Tm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new nf(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Am extends nd{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nd().fromJSON(s))}return this}}const Kb={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Cm(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,d,p;if(i&&(r=eE(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)f=n[g],d=n[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ho(r,o,t,a,l,p,0),o}};function Cm(n,e,t,i,s){let r,o;if(s===fE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=id(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=id(r,n[r],n[r+1],o);return o&&dl(o,o.next)&&(mo(o),o=o.next),o}function Ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(dl(t,t.next)||Bt(t.prev,t,t.next)===0)){if(mo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ho(n,e,t,i,s,r,o){if(!n)return;!o&&r&&rE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Jb(n,i,s,r):jb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),mo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Zb(Ns(n),e,t),ho(n,e,t,i,s,r,2)):o===2&&Qb(n,e,t,i,s,r):ho(Ns(n),e,t,i,s,r,1);break}}}function jb(n){const e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&fr(s,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jb(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,v=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=pu(p,g,e,t,i),y=pu(v,m,e,t,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=h&&x&&x.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,u,l,f,c,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fr(a,u,l,f,c,d,x.x,x.y)&&Bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=h;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fr(a,u,l,f,c,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fr(a,u,l,f,c,d,x.x,x.y)&&Bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zb(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!dl(s,r)&&Rm(s,i,i.next,r)&&po(s,r)&&po(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),mo(i),mo(i.next),i=n=r),i=i.next}while(i!==n);return Ns(i)}function Qb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lE(o,a)){let l=Pm(o,a);o=Ns(o,o.next),l=Ns(l,l.next),ho(o,e,t,i,s,r,0),ho(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function eE(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Cm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(aE(c));for(s.sort(tE),r=0;r<s.length;r++)t=nE(s[r],t);return t}function tE(n,e){return n.x-e.x}function nE(n,e){const t=iE(n,e);if(!t)return e;const i=Pm(t,n);return Ns(i,i.next),Ns(t,t.next)}function iE(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&fr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),po(t,n)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&sE(s,t)))&&(s=t,u=f)),t=t.next;while(t!==a);return s}function sE(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function rE(n,e,t,i){let s=n;do s.z===0&&(s.z=pu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,oE(s)}function oE(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function pu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function aE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function lE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!cE(n,e)&&(po(n,e)&&po(e,n)&&uE(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||dl(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function dl(n,e){return n.x===e.x&&n.y===e.y}function Rm(n,e,t,i){const s=ca(Bt(n,e,t)),r=ca(Bt(n,e,i)),o=ca(Bt(t,i,n)),a=ca(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&la(n,t,e)||r===0&&la(n,i,e)||o===0&&la(t,n,i)||a===0&&la(t,e,i))}function la(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ca(n){return n>0?1:n<0?-1:0}function cE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function po(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function uE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pm(n,e){const t=new mu(n.i,n.x,n.y),i=new mu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function id(n,e,t,i){const s=new mu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class so{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return so.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];sd(e),rd(i,e);let o=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rd(i,t[l]);const a=Kb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function sd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class rf extends ei{constructor(e=new Am([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new hi(s,3)),this.setAttribute("normal",new hi(r,3)),this.setAttribute("uv",new hi(o,2));function c(u){const f=s.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;so.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){const y=g[m];so.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=so.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){const y=g[m];p=p.concat(y)}for(let m=0,h=p.length;m<h;m++){const y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,h=v.length;m<h;m++){const y=v[m],_=y[0]+f,x=y[1]+f,P=y[2]+f;i.push(_,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return hE(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new rf(i,e.curveSegments)}}function hE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class od extends Bs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const lc=new Lt,ad=new z,ld=new z;class dE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pE extends dE{constructor(){super(new pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cd extends Lm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new pE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mE extends Lm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ud=new Lt;class gE{constructor(e,t,i=0,s=1/0){this.ray=new Zu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ud),this}intersectObject(e,t=!0,i=[]){return gu(e,this,i,t),i.sort(fd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gu(e[s],this,i,t);return i.sort(fd),i}}function fd(n,e){return n.distance-e.distance}function gu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)gu(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);const Vr=new z;function Cn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Vr.copy(e),Vr[i]=0,Vr.normalize();const c=.5*o/(o+a),u=1-Vr.angleTo(n)/l;return Math.sign(Vr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class vE extends Rr{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new z,l=new z,c=new z(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new z,v=.5/s;for(let m=0,h=0;m<u.length;m+=3,h+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[h+0]=Cn(g,l,"z","y",r,i),d[h+1]=1-Cn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[h+0]=1-Cn(g,l,"z","y",r,i),d[h+1]=1-Cn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[h+0]=1-Cn(g,l,"x","z",r,e),d[h+1]=Cn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[h+0]=1-Cn(g,l,"x","z",r,e),d[h+1]=1-Cn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[h+0]=1-Cn(g,l,"x","y",r,e),d[h+1]=1-Cn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[h+0]=Cn(g,l,"x","y",r,e),d[h+1]=1-Cn(g,l,"y","x",r,t);break}}}const rn=["U","R","F","D","L","B"],Nn=[[0,1,0],[1,0,0],[0,0,1],[0,-1,0],[-1,0,0],[0,0,-1]],Kr=[3,4,5,0,1,2],go=["yellow","orange","green","white","red","blue"],vo=["#ffd500","#ff5800","#009b48","#ffffff","#c41e3a","#0051ba"],Sa=(n,e)=>`${n[0]},${n[1]},${n[2]}|${e[0]},${e[1]},${e[2]}`,Wa=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Dm=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],_E=(n,e,t)=>Wa(n,Dm(e,t));function hd(n,e){const t=Wa(e,n),i=Dm(e,n);return[-i[0]+e[0]*t,-i[1]+e[1]*t,-i[2]+e[2]*t]}function of(n){return n.endsWith("2")?n:n.endsWith("'")?n[0]:`${n}'`}function xs(n){return n.replace(/[()]/g," ").split(/\s+/).filter(Boolean).map(e=>{const t=/^([URFDLB])(2|2'|'|3)?$/.exec(e);if(!t)throw new Error(`Bad move "${e}"`);return t[2]?t[2]==="3"||t[2]==="'"?`${t[1]}'`:`${t[1]}2`:t[1]})}function $a(n){return[...n].reverse().map(of)}const cc=new Map;function Jt(n){return cc.has(n)||cc.set(n,xE(n)),cc.get(n)}function xE(n){if(n!==2&&n!==3)throw new Error("Only 2x2 and 3x3 cubes are supported");const e=n-1,t=n===3?[-2,0,2]:[-1,1],i=[],s=new Map,r=[];for(const a of t)for(const l of t)for(const c of t){const u=[a,l,c],f=[];for(let v=0;v<3;v++){if(Math.abs(u[v])!==e)continue;const m=[0,0,0];m[v]=Math.sign(u[v]);const h=Nn.findIndex(_=>_[0]===m[0]&&_[1]===m[1]&&_[2]===m[2]),y=i.length;i.push({pos:u,normal:m,face:h,cubie:r.length}),s.set(Sa(u,m),y),f.push(y)}if(!f.length)continue;const d=v=>f.find(m=>i[m].normal[v]!==0);let p=f;if(f.length===3){const[v,m,h]=[d(1),d(0),d(2)];p=_E(i[v].normal,i[m].normal,i[h].normal)>0?[v,m,h]:[v,h,m]}else if(f.length===2){const v=d(1)??d(2);p=[v,f.find(m=>m!==v)]}const g=f.length===3?"corner":f.length===2?"edge":"center";r.push({pos:u,slots:p,kind:g})}const o={};return rn.forEach((a,l)=>{const c=Nn[l],u=i.map((p,g)=>Wa(p.pos,c)!==e?g:s.get(Sa(hd(p.pos,c),hd(p.normal,c)))),f=u.map(p=>u[p]),d=u.map(p=>f[p]);o[a]=Int16Array.from(u),o[`${a}2`]=Int16Array.from(f),o[`${a}'`]=Int16Array.from(d)}),{n,m:e,stickers:i,cubies:r,index:s,moves:o,slotCount:i.length,slotAt:(a,l)=>s.get(Sa(a,l)),faceGrid:yE(n,e,s),layerOf:a=>r.map((l,c)=>Wa(l.pos,Nn[a])===e?c:-1).filter(l=>l>=0)}}function yE(n,e,t){const i={},s=(o,a,l,c)=>t.get(Sa([o,a,l],Nn[c])),r=o=>Array.from({length:n},(a,l)=>Array.from({length:n},(c,u)=>o(l,u)));return i.U=r((o,a)=>s(-e+2*a,e,-e+2*o,0)),i.D=r((o,a)=>s(-e+2*a,-e,e-2*o,3)),i.F=r((o,a)=>s(-e+2*a,e-2*o,e,2)),i.B=r((o,a)=>s(e-2*a,e-2*o,-e,5)),i.R=r((o,a)=>s(e,e-2*o,e-2*a,1)),i.L=r((o,a)=>s(-e,e-2*o,-e+2*a,4)),i}function ME(n){return rn.flatMap(t=>[t,`${t}2`,`${t}'`])}function pl(n){return Uint8Array.from(Jt(n).stickers,e=>e.face)}function Ao(n,e){const t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[e[i]]=n[i];return t}function SE(n,e,t){return Ao(n,Jt(e).moves[t])}function bE(n,e,t){const i=Jt(e);let s=n;for(const r of t)s=Ao(s,i.moves[r]);return s}function EE(n,e){const{faceGrid:t}=Jt(e);return rn.every(i=>{const s=t[i].flat();return s.every(r=>n[r]===n[s[0]])})}function wE(n,e=n===2?11:22,t=Math.random){const i=n===2?[0,1,2]:[0,1,2,3,4,5],s=[],r=["","'","2"];let o=-1,a=-1;for(;s.length<e;){const l=i[Math.floor(t()*i.length)];l!==o&&(n===3&&Kr[l]===o&&l===a||(s.push(rn[l]+r[Math.floor(t()*3)]),a=o,o=l))}return s}function dd(n){const e=new Array(n.length).fill(!1);let t=0;for(let i=0;i<n.length;i++){if(e[i])continue;let s=0;for(let r=i;!e[r];r=n[r])e[r]=!0,s++;t+=s-1}return t%2}function pd(n,e){const t=Jt(e),i=[],s=new Map;t.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(f=>t.stickers[f].face);s.set([...u].sort().join(),c)});const r=[],o=[],a=new Set;return t.cubies.forEach((l,c)=>{if(l.kind==="center")return;const u=l.slots.map(v=>n[v]),f=[...u].sort().join(),d=s.get(f),p=u.map(v=>go[v]).join("/");if(d===void 0||new Set(u).size!==u.length){i.push(`Impossible ${l.kind} with colours ${p}`);return}if(a.has(d)){i.push(`The ${t.cubies[d].slots.map(v=>go[t.stickers[v].face]).join("/")} ${l.kind} appears twice`);return}a.add(d);const g=t.cubies[d].slots.map(v=>t.stickers[v].face);if(l.kind==="corner"){let v=-1;for(let m=0;m<3;m++)u.every((h,y)=>u[(m+y)%3]===g[y])&&(v=m);if(v<0){i.push(`The corner with colours ${p} is a mirror image (impossible)`);return}r.push({pos:c,home:d,twist:v})}else o.push({pos:c,home:d,flip:u[0]===g[0]?0:1})}),{corners:r,edges:o,errors:i}}function Im(n){const e=Jt(2),t=new Array(6).fill(0);for(const f of n)t[f]++;if(t.some(f=>f!==4))return{error:"Each colour must appear exactly 4 times"};const i=Array.from({length:6},()=>new Set);for(const f of e.cubies){const d=f.slots.map(p=>n[p]);if(new Set(d).size!==3)return{error:"A corner shows the same colour twice"};for(const p of d)for(const g of d)p!==g&&i[p].add(g)}const s=[];for(let f=0;f<6;f++){const d=[0,1,2,3,4,5].filter(p=>p!==f&&!i[f].has(p));if(d.length!==1)return{error:"The colours are not a valid cube colouring"};s[f]=d[0]}const r=e.cubies.find(f=>f.pos[0]===-1&&f.pos[1]===-1&&f.pos[2]===-1),o=f=>n[r.slots.find(d=>e.stickers[d].face===f)],a=new Array(6),[l,c,u]=[o(3),o(4),o(5)];return a[l]=3,a[c]=4,a[u]=5,a[s[l]]=0,a[s[c]]=1,a[s[u]]=2,new Set(a).size!==6?{error:"The colours are not a valid cube colouring"}:{state:Uint8Array.from(n,f=>a[f]),map:a}}function af(n,e){const t=Jt(e);if(n.length!==t.slotCount)return{ok:!1,errors:["Wrong number of stickers"]};const i=[];if(e===2){const c=Im(n);if(c.error)return{ok:!1,errors:[c.error]};const{corners:u,errors:f}=pd(c.state,2);return i.push(...f),!f.length&&u.reduce((d,p)=>d+p.twist,0)%3!==0&&i.push("One corner is twisted – this position cannot be solved"),{ok:!i.length,errors:i,canonical:c}}const s=new Array(6).fill(0);for(const c of n)s[c]++;if(s.forEach((c,u)=>{c!==9&&i.push(`${go[u]} appears ${c} times (needs 9)`)}),t.cubies.forEach(c=>{c.kind==="center"&&n[c.slots[0]]!==t.stickers[c.slots[0]].face&&i.push("Centre stickers are fixed and must keep their colour")}),i.length)return{ok:!1,errors:[...new Set(i)]};const{corners:r,edges:o,errors:a}=pd(n,3);if(a.length)return{ok:!1,errors:a};r.reduce((c,u)=>c+u.twist,0)%3!==0&&i.push("One corner is twisted in place"),o.reduce((c,u)=>c+u.flip,0)%2!==0&&i.push("One edge is flipped in place");const l=(c,u)=>{const f=t.cubies.map((p,g)=>p.kind===u?g:-1).filter(p=>p>=0),d=new Array(f.length);return c.forEach(p=>{d[f.indexOf(p.pos)]=f.indexOf(p.home)}),d};return dd(l(r,"corner"))!==dd(l(o,"edge"))&&i.push("Two pieces are swapped – this position cannot be solved"),{ok:!i.length,errors:i}}const Um=["A","B","X","Y","LB","RB","LT","RT","View","Menu","LS-B","RS-B","D-Up","D-Down","D-Left","D-Right"],md=[...Um,...["LS","RS"].flatMap(n=>["Up","Down","Left","Right"].map(e=>`${n}-${e}`))],vu=[["zoom-in","Zoom in"],["zoom-out","Zoom out"],["quick-solve","Quick Solve"],["next-step","Next solution move"],["undo","Undo"],["scramble","Scramble"],["reset","Reset to solved"],["cube-up","Rotate cube up"],["cube-down","Rotate cube down"],["cube-left","Rotate cube left"],["cube-right","Rotate cube right"],...["front","back","left","right","top","bottom"].flatMap(n=>[[`${n}-cw`,`${n}: clockwise (unprimed)`],[`${n}-ccw`,`${n}: counter-clockwise (prime)`],[`${n}-double`,`${n}: double (180 degrees)`]])].map(([n,e])=>({id:n,label:e})),Nm=new Set(["zoom-in","zoom-out","cube-up","cube-down","cube-left","cube-right"]);function TE(n,e,t=new Set){const i=new Set;return Um.forEach((s,r)=>{const o=n.buttons[r],a=r===6||r===7?e.triggerThreshold:.5;o&&(o.value>=a||r!==6&&r!==7&&o.pressed)&&i.add(s)}),["LS","RS"].forEach((s,r)=>{[["Left",-(n.axes[r*2]||0)],["Right",n.axes[r*2]||0],["Up",-(n.axes[r*2+1]||0)],["Down",n.axes[r*2+1]||0]].forEach(([o,a])=>{const l=`${s}-${o}`,c=e.deadZone*(t.has(l)?.8:1);a>=c&&i.add(l)})}),i}function AE(n,e){const t=Object.entries(n).filter(([,i])=>i&&e.has(i.input)&&i.modifiers.every(s=>e.has(s)));return t.filter(([,i])=>{const s=[i.input,...i.modifiers];return!t.some(([,r])=>{const o=[r.input,...r.modifiers];return o.length>s.length&&s.every(a=>o.includes(a))})})}function ba(n){return n?[n.input,...n.modifiers].sort().join("+"):""}function _o(n){if(!n||n.version!==1||typeof n.name!="string"||!n.name.trim()||n.name.length>80||!n.bindings||typeof n.bindings!="object"||Array.isArray(n.bindings))throw new Error("Invalid profile: expected version 1, a name, and bindings.");const e=n.settings;if(!e||!Number.isFinite(e.deadZone)||e.deadZone<.15||e.deadZone>.9||!Number.isFinite(e.triggerThreshold)||e.triggerThreshold<.1||e.triggerThreshold>.95)throw new Error("Invalid stick dead zone or trigger threshold.");const t={},i=new Set;for(const[s,r]of Object.entries(n.bindings)){if(!vu.some(l=>l.id===s))throw new Error(`Unknown action: ${s}`);if(r===null){t[s]=null;continue}if(!r||!md.includes(r.input)||!Array.isArray(r.modifiers)||r.modifiers.some(l=>!md.includes(l)||l===r.input)||new Set(r.modifiers).size!==r.modifiers.length)throw new Error(`Invalid binding: ${s}`);const o=[r.input,...r.modifiers];for(const l of["LS","RS","D"])for(const[c,u]of[["Up","Down"],["Left","Right"]])if(o.includes(`${l}-${c}`)&&o.includes(`${l}-${u}`))throw new Error(`Opposite directions cannot be combined: ${s}`);const a=ba(r);if(i.has(a))throw new Error(`Duplicate combination: ${a}`);i.add(a),t[s]={input:r.input,modifiers:[...r.modifiers]}}return{version:1,name:n.name.trim(),settings:{deadZone:e.deadZone,triggerThreshold:e.triggerThreshold},bindings:t}}function CE(n,e){const t=(u,f)=>u.reduce((d,p,g)=>d+p*f[g],0),i=(u,f)=>u.reduce((d,p)=>t(Nn[p],f)>t(Nn[d],f)+1e-10?p:d),s=i([0,1,2,3,4,5],n),r=i([0,1,2,3,4,5].filter(u=>u!==s&&u!==Kr[s]),e),o=Nn[s],a=Nn[r],l=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],c=i([0,1,2,3,4,5],l);return{front:rn[s],back:rn[Kr[s]],right:rn[r],left:rn[Kr[r]],top:rn[c],bottom:rn[Kr[c]]}}const RE=[["L","R"],["D","U"],["B","F"]];function Fm(n,e,t,i){const s=n.cubies[n.stickers[e].cubie].pos[t],[r,o]=RE[t];return s===n.m?o+(i>0?"'":""):s===-n.m?r+(i>0?"":"'"):`${o}${i>0?"":"'"} ${r}${i>0?"'":""}`}function PE(n,e,t,i,s){if(Math.hypot(i,s)<24)return null;let r=null;for(const{axis:o,x:a,y:l}of t){const c=Math.hypot(a,l);if(c<1e-6)continue;const u=(a*i+l*s)/c;(!r||Math.abs(u)>r.score)&&(r={axis:o,direction:Math.sign(u),score:Math.abs(u)})}return!r||r.score<Math.hypot(i,s)*.65?null:Fm(n,e,r.axis,r.direction)}const wn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},uc=4,Gr=14,LE=.55,ua=.8,DE=.025,IE={__name:"CubeView",props:{n:{type:Number,required:!0},state:{type:Object,required:!0},paintable:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},drama:{type:Boolean,default:!1},rumble:{type:Number,default:0},dramaSpeed:{type:Number,default:.32},hoverColors:{type:Boolean,default:!1},touchMode:{type:String,default:"rotate"},touchLocked:{type:Boolean,default:!1}},emits:["paint","layerturn","hovering","zoom"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=qe(null);let o,a,l;const c=new z(0,0,0);let u,f=0,d,p=[],g=[],v,m=!1;const h=vo.map(G=>new od({color:G,roughness:.35,metalness:0})),y=new od({color:1382172,roughness:.6});function _(G,xe){const me=G/2,De=new Am;return De.moveTo(-me+xe,-me),De.lineTo(me-xe,-me),De.quadraticCurveTo(me,-me,me,-me+xe),De.lineTo(me,me-xe),De.quadraticCurveTo(me,me,me-xe,me),De.lineTo(-me+xe,me),De.quadraticCurveTo(-me,me,-me,me-xe),De.lineTo(-me,-me+xe),De.quadraticCurveTo(-me,-me,-me+xe,-me),new rf(De)}const x=_(.84,.12),P=new vE(.98,.98,.98,3,.1);function A(){We(),u&&a.remove(u),v=Jt(i.n),u=new Qi,p=[],g=new Array(v.slotCount);const G=new z(0,0,1);v.cubies.forEach(xe=>{const me=new Qi;me.position.set(xe.pos[0]/2,xe.pos[1]/2,xe.pos[2]/2),me.userData.home=me.position.clone(),me.add(new Un(P,y)),xe.slots.forEach(De=>{const Qe=v.stickers[De],ft=new z(...Qe.normal),it=new Un(x,h[Qe.face]);it.position.copy(ft).multiplyScalar(.492),it.quaternion.setFromUnitVectors(G,ft),it.userData.slot=De,me.add(it),g[De]=it}),p.push(me),u.add(me)}),a.add(u),L(i.state)}function L(G){if(G.length===g.length)for(let xe=0;xe<g.length;xe++)g[xe].material=h[G[xe]]}function F(){const G=i.n===2?4.6:6.2;l.up.set(0,1,0),l.position.set(G*.75,G*.6,G),l.lookAt(c),M.vx=0,M.vy=0,O()}function w(){if(!r.value||!o)return;const{clientWidth:G,clientHeight:xe}=r.value;!G||!xe||(o.setSize(G,xe,!1),l.aspect=G/xe,l.updateProjectionMatrix())}const M={vx:0,vy:0,dragging:!1,lastX:0,lastY:0,lastT:0},D=new Map;let Q=null,J=!1,re=0;const de=new Ui,K=new z,fe=new z,X=new z;function Ae(G,xe){const me=o.domElement.clientHeight||1,De=2*Math.PI/me;l.updateMatrixWorld(),K.setFromMatrixColumn(l.matrixWorld,0),fe.setFromMatrixColumn(l.matrixWorld,1),de.setFromAxisAngle(fe,-G*De),X.copy(l.position).sub(c).applyQuaternion(de),l.up.applyQuaternion(de),de.setFromAxisAngle(K.applyQuaternion(de),-xe*De),X.applyQuaternion(de),l.up.applyQuaternion(de).normalize(),l.position.copy(c).add(X),l.lookAt(c)}function Y(G){X.copy(l.position).sub(c);const xe=Math.min(Gr,Math.max(uc,X.length()*G));l.position.copy(c).add(X.setLength(xe)),O()}function O(){const G=l.position.distanceTo(c);s("zoom",100*(Gr-G)/(Gr-uc))}function N(G){if(!l||!Number.isFinite(G))return;const xe=Gr-Math.min(100,Math.max(0,G))*(Gr-uc)/100;X.copy(l.position).sub(c).setLength(xe),l.position.copy(c).add(X),O()}function Z(G){var xe,me;if(D.set(G.pointerId,{x:G.clientX,y:G.clientY}),(me=(xe=o.domElement).setPointerCapture)==null||me.call(xe,G.pointerId),G.pointerType==="touch"&&i.touchMode==="move"){if(J=!0,M.dragging=!1,M.vx=0,M.vy=0,Q=null,D.size===1&&!i.locked&&!i.touchLocked&&!i.paintable&&!m){l.updateMatrixWorld();const De=ae(G.clientX,G.clientY);if(De){const Qe=De.object.userData.slot,ft=v.stickers[Qe].normal.findIndex(Rt=>Rt!==0),it=De.point.clone().project(l),wt=[0,1,2].filter(Rt=>Rt!==ft).map(Rt=>{const Tt=new z().setComponent(Rt,1).cross(De.point),Qt=De.point.clone().addScaledVector(Tt,.01).project(l);return{axis:Rt,x:(Qt.x-it.x)*o.domElement.clientWidth,y:-(Qt.y-it.y)*o.domElement.clientHeight}});Q={pointerId:G.pointerId,x:G.clientX,y:G.clientY,slot:Qe,candidates:wt}}}return}if(D.size===1)Object.assign(M,{dragging:!0,lastX:G.clientX,lastY:G.clientY,lastT:performance.now(),vx:0,vy:0});else if(D.size===2){const[De,Qe]=[...D.values()];re=Math.hypot(De.x-Qe.x,De.y-Qe.y),M.dragging=!1}}function k(G){if(!D.has(G.pointerId))return;if(D.set(G.pointerId,{x:G.clientX,y:G.clientY}),J){if(Q&&D.size===1&&Q.pointerId===G.pointerId){if(i.locked||i.touchLocked||i.paintable||m){Q=null;return}const ft=PE(v,Q.slot,Q.candidates,G.clientX-Q.x,G.clientY-Q.y);ft&&(Q=null,s("layerturn",ft))}return}if(D.size===2){const[ft,it]=[...D.values()],wt=Math.hypot(ft.x-it.x,ft.y-it.y);re&&wt&&Y(re/wt),re=wt;return}if(!M.dragging)return;const xe=G.clientX-M.lastX,me=G.clientY-M.lastY,De=performance.now(),Qe=Math.max(1,De-M.lastT);Ae(xe,me),M.vx=.6*M.vx+.4*(xe/Qe*16),M.vy=.6*M.vy+.4*(me/Qe*16),Object.assign(M,{lastX:G.clientX,lastY:G.clientY,lastT:De})}function ne(G){var xe,me;D.delete(G.pointerId),(me=(xe=o.domElement).hasPointerCapture)!=null&&me.call(xe,G.pointerId)&&o.domElement.releasePointerCapture(G.pointerId),Q=null,G.type==="pointercancel"&&(pe=null,M.vx=0,M.vy=0),D.size===0&&(J=!1,M.dragging=!1,performance.now()-M.lastT>80&&(M.vx=0,M.vy=0))}function be(G){G.preventDefault(),Y(Math.exp(G.deltaY*6e-4))}const he={level:0,phase:0,last:0};let Ne=0;function Be(G){const xe=Math.min(.1,(G-(he.last||G))/1e3);he.last=G;const me=i.drama&&!M.dragging&&D.size===0&&G>=Ne?1:0,De=xe*.7;if(he.level+=Math.max(-De,Math.min(De,me-he.level)),he.level<.001)return;he.phase+=xe*LE;const Qe=he.level*he.level*(3-2*he.level),ft=o.domElement.clientHeight||1,it=i.dramaSpeed*ft/(2*Math.PI)*xe*Qe;Ae(Math.cos(he.phase)*it,Math.sin(he.phase)*it)}function je(){f=requestAnimationFrame(je),!M.dragging&&(Math.abs(M.vx)>.02||Math.abs(M.vy)>.02)&&(Ae(M.vx,M.vy),M.vx*=.92,M.vy*=.92),Be(performance.now()),ve(performance.now()),o.render(a,l)}const rt=G=>G<.5?4*G*G*G:1-(-2*G+2)**3/2;function C(G,xe,me=1){if(m||me>=10)return L(xe),Promise.resolve();m=!0;const De=G.split(" ").map(it=>{const wt=rn.indexOf(it[0]),Rt=it.endsWith("2")?2:1,zt=new Qi,Tt=v.layerOf(wt).map(Qt=>p[Qt]);return u.add(zt),Tt.forEach(Qt=>zt.add(Qt)),{pivot:zt,layer:Tt,quarters:Rt,axis:new z(...Nn[wt]),angle:(it.endsWith("'")?1:-1)*Rt*(Math.PI/2)}}),Qe=(De.some(it=>it.quarters===2)?420:280)/me,ft=performance.now();return new Promise(it=>{const wt=Rt=>{const zt=Math.min(1,(Rt-ft)/Qe);if(De.forEach(Tt=>Tt.pivot.setRotationFromAxisAngle(Tt.axis,Tt.angle*rt(zt))),zt<1){requestAnimationFrame(wt);return}De.forEach(Tt=>{Tt.layer.forEach(Qt=>u.add(Qt)),u.remove(Tt.pivot)}),L(xe),m=!1,it()};requestAnimationFrame(wt)})}let U=null;function T(){if(!U){const G=document.createElement("canvas");G.width=G.height=64;const xe=G.getContext("2d"),me=xe.createRadialGradient(32,32,0,32,32,32);me.addColorStop(0,"rgba(255,255,255,1)"),me.addColorStop(.25,"rgba(255,255,255,0.6)"),me.addColorStop(1,"rgba(255,255,255,0)"),xe.fillStyle=me,xe.fillRect(0,0,64,64),U=new Nb(G)}return U}function ve(G){if(!u||m)return;const xe=i.rumble*.045;if(xe>0){const me=G/1e3;u.position.set(Math.sin(me*61)*xe,Math.sin(me*73+1)*xe,Math.sin(me*53+2)*xe),u.rotation.z=Math.sin(me*47)*xe*.25}else(u.position.lengthSq()>0||u.rotation.z!==0)&&(u.position.set(0,0,0),u.rotation.z=0)}const se=G=>1+2.70158*(G-1)**3+1.70158*(G-1)**2;function oe(){if(m||!u)return Promise.resolve();m=!0,u.position.set(0,0,0),u.rotation.z=0;const G=(we,Pe)=>we+Math.random()*(Pe-we),xe=p.map(we=>{const Pe=we.userData.home.clone();return Pe.lengthSq()<.01&&Pe.set(G(-1,1),G(-1,1),G(-1,1)),Pe.normalize().add(new z(G(-.4,.4),G(-.4,.4),G(-.4,.4))).normalize(),{g:we,v:Pe.multiplyScalar(G(3.2,7.5)),spin:new z(G(-9,9),G(-9,9),G(-9,9)),vanish:G(1.7,2.2)}}),me=520,De=new Float32Array(me*3),Qe=new Float32Array(me*3),ft=Array.from({length:me},()=>{const we=new z(G(-1,1),G(-1,1),G(-1,1)).normalize();return{p:new z,v:we.multiplyScalar(G(2.5,11)),delay:G(0,.35),life:G(.6,1.7)}}),it=new ei;it.setAttribute("position",new En(De,3)),it.setAttribute("color",new En(Qe,3));const wt=new Sm({size:.26,map:T(),vertexColors:!0,transparent:!0,blending:ka,depthWrite:!1}),Rt=new Ub(it,wt);Rt.frustumCulled=!1,a.add(Rt);const zt=new ym({map:T(),color:16771504,blending:ka,transparent:!0,depthWrite:!1}),Tt=new Ib(zt);a.add(Tt);const Qt=3,ks=xe.map(({g:we})=>we.userData.home.length()*.14+G(0,.06)),E=xe.map(()=>new Ui().setFromEuler(new Qn(G(-2,2),G(-2,2),G(-2,2))));let V=!1;const ee=Qt+1.4,ie=performance.now();let W=ie;return new Promise(we=>{const Pe=Ve=>{const ze=(Ve-ie)/1e3,Ye=Math.min(.05,(Ve-W)/1e3);if(W=Ve,ze<Qt){xe.forEach(Ge=>{if(ze>Ge.vanish){Ge.g.visible=!1;return}Ge.v.multiplyScalar(1-.3*Ye),Ge.v.y-=2.2*Ye,Ge.g.position.addScaledVector(Ge.v,Ye),Ge.g.rotation.x+=Ge.spin.x*Ye,Ge.g.rotation.y+=Ge.spin.y*Ye,Ge.g.rotation.z+=Ge.spin.z*Ye;const at=Math.max(0,Math.min(1,(Ge.vanish-ze)/.4));Ge.g.scale.setScalar(at)}),ft.forEach((Ge,at)=>{const xt=ze-Ge.delay;if(xt<0||xt>Ge.life){Qe[at*3]=Qe[at*3+1]=Qe[at*3+2]=0;return}Ge.v.multiplyScalar(1-.9*Ye),Ge.v.y-=3.5*Ye,Ge.p.addScaledVector(Ge.v,Ye);const Yt=xt/Ge.life,dt=(1-Yt)**1.4,$e=1*dt,zn=Math.max(0,.95-.85*Yt)*dt,vt=Math.max(0,.55-.55*Yt*1.6)*dt;De[at*3]=Ge.p.x,De[at*3+1]=Ge.p.y,De[at*3+2]=Ge.p.z,Qe[at*3]=$e,Qe[at*3+1]=zn,Qe[at*3+2]=vt}),it.attributes.position.needsUpdate=!0,it.attributes.color.needsUpdate=!0;const Ke=Math.min(1,ze/.45);Tt.scale.setScalar(2+14*Ke),zt.opacity=(1-Ke)**1.5;const Oe=ze<.4?.14*(1-ze/.4):0;u.position.set(G(-Oe,Oe),G(-Oe,Oe),G(-Oe,Oe))}else{V||(V=!0,a.remove(Rt),a.remove(Tt),it.dispose(),wt.dispose(),zt.dispose(),u.position.set(0,0,0),xe.forEach(({g:Oe})=>{Oe.position.copy(Oe.userData.home),Oe.scale.setScalar(1e-4),Oe.visible=!0}));const Ke=ze-Qt;xe.forEach(({g:Oe},Ge)=>{const at=Math.max(0,Math.min(1,(Ke-ks[Ge])/.55)),xt=se(at);Oe.scale.setScalar(Math.max(1e-4,xt)),Oe.quaternion.copy(E[Ge]).slerp(ce,Math.min(1,at*1.15))})}if(ze<ee){requestAnimationFrame(Pe);return}xe.forEach(({g:Ke})=>{Ke.position.copy(Ke.userData.home),Ke.rotation.set(0,0,0),Ke.quaternion.identity(),Ke.scale.setScalar(1),Ke.visible=!0}),u.position.set(0,0,0),u.rotation.z=0,L(i.state),m=!1,we()};requestAnimationFrame(Pe)})}const ce=new Ui,_e=new gE;function ae(G,xe){const me=o.domElement.getBoundingClientRect(),De=new He((G-me.left)/me.width*2-1,-((xe-me.top)/me.height)*2+1);return _e.setFromCamera(De,l),_e.intersectObjects(g,!1)[0]}const b=ua/3,S=ua/2,I=new To(1,1),q=new Va({color:0}),te=vo.map(G=>new Va({color:G}));let j=null,Ce="",Me=!1,Te=null;const Xe=new Ui,Se=new z;function Le(G){Me!==G&&(Me=G,s("hovering",G))}function We(){var G;(G=j==null?void 0:j.parent)==null||G.remove(j),j=null,Ce="",o&&Le(!1)}function Je(G){return i.n===3&&v.cubies[v.stickers[G].cubie].kind==="center"}function Re(G){l.updateMatrixWorld(),G.getWorldQuaternion(Xe).invert();const xe=Se.setFromMatrixColumn(l.matrixWorld,0).applyQuaternion(Xe).clone(),me=Se.setFromMatrixColumn(l.matrixWorld,1).applyQuaternion(Xe),De=Qe=>Qe>=0?1:-1;return Math.abs(xe.x)>=Math.abs(xe.y)?{swap:!1,a:De(xe.x),b:De(me.y)}:{swap:!0,a:De(xe.y),b:De(me.x)}}function et(G,xe,me){return G.swap?{x:G.b*me,y:G.a*xe}:{x:G.a*xe,y:G.b*me}}function tt(G,xe,me){const De=G.worldToLocal(xe.clone()),Qe=me.swap?me.a*De.y:me.a*De.x,ft=me.swap?me.b*De.x:me.b*De.y,it=Math.min(2,Math.max(0,Math.floor((Qe+ua/2)/b)));return Math.min(1,Math.max(0,Math.floor((ua/2-ft)/S)))*3+it}function gt(G,xe,me,De,Qe,ft,it,wt){const{x:Rt,y:zt}=et(xe,me,De),Tt=new Un(I,it);Tt.position.set(Rt,zt,wt),Tt.scale.set(xe.swap?ft:Qe,xe.swap?Qe:ft,1),G.add(Tt)}function H(G,xe,me){var De;(De=j==null?void 0:j.parent)==null||De.remove(j),j=new Qi;for(let Qe=0;Qe<6;Qe++){const ft=(Qe%3-1)*b,it=(.5-Math.floor(Qe/3))*S,wt=b-.02,Rt=S-.02,zt=Qe===me;zt&&gt(j,xe,ft,it,wt,Rt,q,.004);const Tt=zt?DE:0;gt(j,xe,ft,it,wt-2*Tt,Rt-2*Tt,te[Qe],.006)}G.add(j)}function Ie(G,xe){if(Te={x:G,y:xe},!i.hoverColors||!i.paintable||i.locked||m)return We();const me=ae(G,xe);if(!me||Je(me.object.userData.slot))return We();const De=me.object,Qe=Re(De),ft=tt(De,me.point,Qe),it=`${De.userData.slot}|${ft}|${Qe.swap}|${Qe.a}|${Qe.b}`;Le(!0),it!==Ce&&(Ce=it,H(De,Qe,ft))}function ue(){Ce="",Te&&o?Ie(Te.x,Te.y):We()}let pe=null;function ke(G){pe={x:G.clientX,y:G.clientY}}function Fe(G){if(G.type==="pointercancel"||i.locked){pe=null;return}if(!i.paintable||!pe)return;const xe=Math.hypot(G.clientX-pe.x,G.clientY-pe.y);if(pe=null,xe>5)return;const me=ae(G.clientX,G.clientY);if(!me)return;const De=me.object.userData.slot;if(i.hoverColors){if(Je(De))return;s("paint",De,tt(me.object,me.point,Re(me.object)))}else s("paint",De)}let nt=0;function Nt(G,xe,me){const De=v.stickers[G],Qe=De.normal.findIndex(ee=>ee!==0),ft=[0,1,2].filter(ee=>ee!==Qe);l.updateMatrixWorld();const it=new z().setFromMatrixColumn(l.matrixWorld,0),wt=new z().setFromMatrixColumn(l.matrixWorld,1),Rt=Math.abs(it.getComponent(ft[0]))>=Math.abs(it.getComponent(ft[1]))?ft[0]:ft[1],zt=me?ft.find(ee=>ee!==Rt):Rt,Tt=new z;Tt.setComponent(zt,1);const Qt=new z(...De.pos).multiplyScalar(.5).add(new z(...De.normal).multiplyScalar(.5)),ks=Tt.clone().cross(Qt),V=((me?ks.dot(it):-ks.dot(wt))>=0?1:-1)*xe;return Fm(v,G,zt,V)}function qt(G){if(i.paintable)return;const xe=ae(G.clientX,G.clientY);if(!xe||(G.preventDefault(),G.stopPropagation(),i.locked||m)||(nt+=G.deltaY||G.deltaX,Math.abs(nt)<40))return;const me=Math.sign(nt);nt=0,s("layerturn",Nt(xe.object.userData.slot,me,G.altKey))}function _t(G){Ie(G.clientX,G.clientY)}function _n(){Te=null,We()}So(()=>{o=new Pb({antialias:!0,alpha:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(o.domElement),a=new Lb,l=new Ln(36,1,.1,100),a.add(new mE(16777215,1.1));const G=new cd(16777215,2);G.position.set(5,8,6),a.add(G);const xe=new cd(16777215,.8);xe.position.set(-6,-3,-5),a.add(xe),o.domElement.addEventListener("pointerdown",Z),o.domElement.addEventListener("pointermove",k),o.domElement.addEventListener("pointermove",_t),o.domElement.addEventListener("pointerleave",_n),o.domElement.addEventListener("pointerup",ne),o.domElement.addEventListener("pointercancel",ne),o.domElement.addEventListener("wheel",be,{passive:!1}),o.domElement.addEventListener("pointerdown",ke),o.domElement.addEventListener("pointerup",Fe),o.domElement.addEventListener("pointercancel",Fe),r.value.addEventListener("wheel",qt,{capture:!0,passive:!1}),A(),F(),w(),d=new ResizeObserver(w),d.observe(r.value),je()}),Ds(()=>{cancelAnimationFrame(f),d==null||d.disconnect(),o==null||o.dispose()}),Ot(()=>i.n,()=>{A(),F()}),Ot(()=>i.state,G=>{m||L(G)}),Ot(()=>[i.hoverColors,i.paintable,i.locked],ue),Ot(()=>i.touchMode,()=>{Q=null,M.dragging=!1,M.vx=0,M.vy=0});function kn(G,xe){if(!(!l||!o))if(Ne=performance.now()+100,M.vx=0,M.vy=0,G==="zoom-in"||G==="zoom-out")Y(Math.exp((G==="zoom-in"?-1:1)*xe));else{const me=o.domElement.clientHeight*xe/6;Ae(G==="cube-left"?-me:G==="cube-right"?me:0,G==="cube-up"?-me:G==="cube-down"?me:0)}}function Co(G,xe){l.updateMatrixWorld();const me=l.position.clone().sub(c).normalize().toArray(),De=new z().setFromMatrixColumn(l.matrixWorld,0).toArray();return CE(me,De)[G]+xe}return e({animate:C,resetView:F,explode:oe,gamepadView:kn,viewRelativeMove:Co,setZoom:N}),(G,xe)=>(ge(),ye("div",{ref_key:"host",ref:r,class:Ut(["cube-host",{painting:n.paintable}])},null,2))}},UE=wn(IE,[["__scopeId","data-v-b90967f0"]]),NE={class:"panel about"},FE="https://github.com/sterudo/RubriksSolver",gd="https://sterudo.github.io/RubriksSolver/",OE={__name:"AboutPanel",setup(n){const e="0.1.1",t="2026-10-14";return(i,s)=>(ge(),ye("section",NE,[s[5]||(s[5]=R("h2",null,"About Rubik's Solver",-1)),s[6]||(s[6]=R("p",{class:"note"},"Learn, teach and solve 2×2 and 3×3 Rubik's cubes right in your browser.",-1)),R("dl",null,[s[0]||(s[0]=R("dt",null,"Author",-1)),s[1]||(s[1]=R("dd",null,"Stephan Rudolph (and GitHub Copilot)",-1)),s[2]||(s[2]=R("dt",null,"Source code",-1)),R("dd",null,[R("a",{href:FE,target:"_blank",rel:"noopener"},"sterudo/RubriksSolver")]),s[3]||(s[3]=R("dt",null,"Live app",-1)),R("dd",null,[R("a",{href:gd,target:"_blank",rel:"noopener"},Ee(gd))]),s[4]||(s[4]=R("dt",null,"Version",-1)),R("dd",null,[st(Ee($(e))+" ",1),R("small",null,"(built "+Ee($(t))+")",1)])]),s[7]||(s[7]=Ov("<h3 data-v-e5e1b492>Tech stack</h3><ul data-v-e5e1b492><li data-v-e5e1b492><strong data-v-e5e1b492>Vue 3</strong> – reactive UI (Composition API, single-file components)</li><li data-v-e5e1b492><strong data-v-e5e1b492>three.js</strong> – interactive 3D cube, animations and explosion effects</li><li data-v-e5e1b492><strong data-v-e5e1b492>Vite</strong> – dev server and static build that runs from any folder</li><li data-v-e5e1b492><strong data-v-e5e1b492>Vitest</strong> – unit tests for the cube model, solver and vision code</li><li data-v-e5e1b492>Plain JavaScript solver, no backend – everything runs locally in the browser</li><li data-v-e5e1b492>Optional AI tutor via Gemini or a local model (LM Studio / Ollama)</li></ul><h3 data-v-e5e1b492>Main features</h3><ul data-v-e5e1b492><li data-v-e5e1b492>2×2 and 3×3 cubes with a free drag-and-spin 3D view, pinch/wheel zoom and a synced zoom slider</li><li data-v-e5e1b492>Layer turns by mouse, wheel or keyboard, and undo for manual turns or solution moves</li><li data-v-e5e1b492>Mobile: edge-to-edge cube, hamburger navigation, header Quick Solve, always-visible Reset/Scramble/Solve controls (Solve advances one computed move), and synced Rotate/Move controls for view rotation or sticker-row turns</li><li data-v-e5e1b492>Xbox-style gamepad controls with modifiers, view-relative face turns, configurable thresholds, named profiles, Save As, browser storage and JSON import/export</li><li data-v-e5e1b492>Set up any position: paint stickers on the cube or the flat net, scramble, or import from two photos</li><li data-v-e5e1b492>Live validity check telling you whether a position is solvable</li><li data-v-e5e1b492>Step-by-step solver that explains every stage, with play/pause, speed and keyboard control</li><li data-v-e5e1b492>Learn lessons and Practice tests, with a built-in or AI tutor</li><li data-v-e5e1b492>Fullscreen mode, Extra drama camera, countdown and cube explosion finale, and one-click Quick Solve</li><li data-v-e5e1b492>Save and load named positions across cube sizes, with JSON import/export and copy/paste position codes; resizable cube frame and draggable panel divider</li></ul>",4))]))}},BE=wn(OE,[["__scopeId","data-v-e5e1b492"]]),Pn={yellowCross:xs("F R U R' U' F'"),sune:xs("R U R' U R U2 R'"),antiSune:xs("R U2 R' U' R U' R'"),cornerCycle:xs("R' F R' B2 R F' R' B2 R2"),edgeCycle:xs("R U' R U R U R U' R' U' R2"),tPerm:xs("R U R' U' R' F R2 U' R' U' R U R' F'"),yPerm:xs("F R U' R' U' R U R' F' R U R' U' R' F R F'")},or=Pn,kE={U:0,R:1,F:2,D:3,L:4,B:5};function Om(n,e){return e.map(t=>{const i=n.moves[t],s=new Int16Array(i.length);return i.forEach((r,o)=>{s[r]=o}),{name:t,perm:i,inv:s,face:kE[t[0]]}})}const zE=["U","U2","U'","R","R2","R'","F","F2","F'","D","D2","D'","L","L2","L'","B","B2","B'"],HE=["U","U2","U'","R","R2","R'","F","F2","F'"];function VE(n,e,t,i){const s=g=>g.join(","),r=s(e),o=s(t);if(r===o)return[];const a=new Map([[r,{prev:null,move:-1,face:-1,depth:0}]]),l=new Map([[o,{next:null,move:-1,face:-1,depth:0}]]);let c=[e],u=[t],f=0,d=0;const p=g=>{const v=[];for(let h=g;a.get(h).prev!==null;h=a.get(h).prev)v.push(a.get(h).move);v.reverse();const m=[];for(let h=g;l.get(h).next!==null;h=l.get(h).next)m.push(l.get(h).move);return[...v,...m].map(h=>n[h].name)};for(;f+d<i&&(c.length||u.length);)if(c.length&&(c.length<=u.length||!u.length)){const v=[];for(const m of c){const h=s(m),y=a.get(h);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const P=m.map(L=>x.perm[L]),A=s(P);if(!a.has(A)){if(a.set(A,{prev:h,move:_,face:x.face}),l.has(A))return p(A);v.push(P)}}}c=v,f++}else{const v=[];for(const m of u){const h=s(m),y=l.get(h);for(let _=0;_<n.length;_++){const x=n[_];if(x.face===y.face)continue;const P=m.map(L=>x.inv[L]),A=s(P);if(!l.has(A)){if(l.set(A,{next:h,move:_,face:x.face}),a.has(A))return p(A);v.push(P)}}}u=v,d++}return null}function GE(n,e,t){const i=n.cubies[t].slots,s=i.map(o=>n.stickers[o].face),r=[...s].sort().join();for(const o of n.cubies){if(o.slots.length!==i.length)continue;const a=o.slots.map(l=>e[l]);if([...a].sort().join()===r)return s.map(l=>o.slots[a.indexOf(l)])}throw new Error("Piece not found")}const lf=(n,e,t)=>n.cubies[t].slots.every(i=>e[i]===n.stickers[i].face);function _u(n,e,t,i,s,r,o,a){const l=[];let c=e,u=[...t],f=[...i];for(;f.length;){let d=null;for(const p of f){if(p.cubies.every(y=>lf(n,c,y))){d={target:p,moves:[]};break}const g=[...u,...p.cubies].flatMap(y=>n.cubies[y].slots),v=[...u.flatMap(y=>n.cubies[y].slots),...p.cubies.flatMap(y=>GE(n,c,y))],m=d?d.moves.length-1:a;if(m<1)continue;const h=VE(r,v,g,m);h&&(!d||h.length<d.moves.length)&&(d={target:p,moves:h})}if(!d)throw new Error("No solution found for a piece – is the cube state valid?");for(const p of d.moves)c=Ao(c,n.moves[p]);l.push({label:o(d.target),moves:d.moves}),u=[...u,...d.target.cubies],f=f.filter(p=>p!==d.target)}return{state:c,steps:l}}function WE(n,e,t,i,s=70){const r=l=>String.fromCharCode(...l),o=[[{state:e,moves:[]}]],a=new Set([r(e)]);if(i(e))return[];for(let l=0;l<=s;l++){const c=o[l];if(c)for(const u of c)for(const f of t){let d=u.state;for(const m of f.moves)d=Ao(d,n.moves[m]);const p=r(d);if(a.has(p))continue;a.add(p);const g=l+f.moves.length,v={state:d,moves:[...u.moves,f.label]};if(i(d))return $E(v.moves,t);(o[g]||(o[g]=[])).push(v)}}return null}function $E(n,e){const t=new Map(e.map(i=>[i.label,i]));return n.map(i=>t.get(i))}const hr=[{label:"U",moves:["U"]},{label:"U'",moves:["U'"]},{label:"U2",moves:["U2"]}],$n=(n,e)=>({label:n,moves:e,isAlg:!0});function XE(n,e){const t=[];let i=[];for(const s of n){if(!s.isAlg){i.push(...s.moves);continue}t.push({label:e(s),moves:[...i,...s.moves],alg:s.label}),i=[]}return i.length&&t.push({label:"Turn the top layer to line it up",moves:i}),t}const Bm=go,xu=n=>n[0].toUpperCase()+n.slice(1);function dr(n,e,t,i,s){const r=WE(n,e,t,i);if(!r)throw new Error("Could not finish the last layer – is the cube state valid?");const o=XE(r,s);let a=e;for(const l of o)for(const c of l.moves)a=Ao(a,n.moves[c]);return{state:a,steps:o}}const km=n=>n.flatMap(e=>e.moves);function zm(n,e,t={}){const i=af(n,e);if(!i.ok)return{ok:!1,error:i.errors.join(". ")};try{return e===2?YE(n,i.canonical,t):qE(n,t)}catch(s){return{ok:!1,error:s.message}}}function Ea(n,e,t){return n.cubies[e].slots.map(i=>t[n.stickers[i].face]).join("-")}function qE(n,e){const t=e.names||Bm,i=Jt(3),s=Om(i,zE),r=(P,A,L)=>i.cubies.findIndex(F=>F.pos[0]===P&&F.pos[1]===A&&F.pos[2]===L),o=[];let a=n;const l=(P,A)=>o.push({id:P,steps:A,moves:km(A)}),c=[[0,-2,2],[2,-2,0],[0,-2,-2],[-2,-2,0]].map(P=>({cubies:[r(...P)]}));let u=_u(i,a,[],c,t,s,P=>`${xu(Ea(i,P.cubies[0],t))} edge`,9);a=u.state,l("cross",u.steps);const f=[[[2,-2,2],[2,0,2]],[[-2,-2,2],[-2,0,2]],[[2,-2,-2],[2,0,-2]],[[-2,-2,-2],[-2,0,-2]]].map(P=>({cubies:P.map(A=>r(...A))})),d=c.flatMap(P=>P.cubies);u=_u(i,a,d,f,t,s,P=>`${xu(Ea(i,P.cubies[0],t))} corner + ${Ea(i,P.cubies[1],t)} edge`,11),a=u.state,l("f2l",u.steps);const p=i.cubies.map((P,A)=>({c:P,i:A})).filter(({c:P})=>P.pos[1]===2),g=p.filter(({c:P})=>P.kind==="edge").map(({c:P})=>P.slots[0]),v=p.filter(({c:P})=>P.kind==="corner").map(({i:P})=>P),m=i.stickers.map((P,A)=>P.face===0?A:-1).filter(P=>P>=0),h=P=>g.every(A=>P[A]===0),y=P=>m.every(A=>P[A]===0),_=P=>v.every(A=>lf(i,P,A)),x=P=>i.stickers.every((A,L)=>P[L]===A.face);return u=dr(i,a,[...hr,$n("yellow cross",Pn.yellowCross)],h,()=>`Make the ${t[0]} cross`),a=u.state,l("ollCross",u.steps),u=dr(i,a,[...hr,$n("sune",Pn.sune),$n("antisune",Pn.antiSune)],y,P=>P.label==="sune"?`Sune: twist corners (${t[0]} face)`:`Anti-Sune: twist corners (${t[0]} face)`),a=u.state,l("ollFace",u.steps),u=dr(i,a,[...hr,$n("corner cycle",Pn.cornerCycle),$n("corner cycle inverse",$a(Pn.cornerCycle))],_,()=>"Cycle three corners into place"),a=u.state,l("pllCorners",u.steps),u=dr(i,a,[...hr,$n("edge cycle",Pn.edgeCycle),$n("edge cycle inverse",$a(Pn.edgeCycle))],x,()=>"Cycle three edges into place"),a=u.state,l("pllEdges",u.steps),{ok:!0,n:3,stages:o,moves:o.flatMap(P=>P.moves)}}function YE(n,e,t){const i=Jt(2),s=Om(i,HE),r=e.state,o=t.names||Bm,a=[];e.map.forEach((h,y)=>{a[h]=o[y]});const l=(h,y,_)=>i.cubies.findIndex(x=>x.pos[0]===h&&x.pos[1]===y&&x.pos[2]===_),c=[];let u=r;const f=(h,y)=>c.push({id:h,steps:y,moves:km(y)}),d=[[1,-1,1],[-1,-1,1],[1,-1,-1]].map(h=>({cubies:[l(...h)]}));let p=_u(i,u,[l(-1,-1,-1)],d,a,s,h=>`${xu(Ea(i,h.cubies[0],a))} corner`,11);u=p.state,f("layer",p.steps);const g=i.stickers.map((h,y)=>h.face===0?y:-1).filter(h=>h>=0),v=h=>g.every(y=>h[y]===0),m=h=>i.stickers.every((y,_)=>h[_]===y.face);return p=dr(i,u,[...hr,$n("sune",Pn.sune),$n("antisune",Pn.antiSune)],v,h=>h.label==="sune"?`Sune: twist top corners (${a[0]} face)`:`Anti-Sune: twist top corners (${a[0]} face)`),u=p.state,f("orient",p.steps),p=dr(i,u,[...hr,$n("swap neighbours",Pn.tPerm),$n("swap diagonal",Pn.yPerm)],m,h=>h.label==="swap neighbours"?"Swap two neighbouring top corners":"Swap two diagonal top corners"),u=p.state,f("permute",p.steps),{ok:!0,n:2,stages:c,moves:c.flatMap(h=>h.moves)}}function KE(n,e){const t=Jt(e),i=af(n,e);if(!i.ok)return[];const s=e===2?i.canonical.state:n,r=u=>lf(t,s,u),o=t.cubies.map((u,f)=>({c:u,i:f})),a=u=>o.filter(({c:f})=>u(f)).map(({i:f})=>f),l=t.stickers.every((u,f)=>u.face!==0||s[f]===0),c=t.stickers.every((u,f)=>s[f]===u.face);return e===2?[{id:"layer",done:a(u=>u.pos[1]===-1).every(r)},{id:"orient",done:l},{id:"permute",done:c}]:[{id:"cross",done:a(u=>u.pos[1]===-2&&u.kind==="edge").every(r)},{id:"f2l",done:a(u=>u.pos[1]<=0&&u.kind!=="center").every(r)},{id:"ollCross",done:a(u=>u.pos[1]===2&&u.kind==="edge").every(u=>s[t.cubies[u].slots[0]]===0)},{id:"ollFace",done:l},{id:"pllCorners",done:a(u=>u.pos[1]===2&&u.kind==="corner").every(r)},{id:"pllEdges",done:c}]}const jE=[{move:"R",text:"Turn the Right face a quarter turn clockwise (as if you were looking straight at that face)."},{move:"R'",text:`An apostrophe (said "prime") means counter-clockwise: R' turns the Right face the other way.`},{move:"R2",text:"A 2 means a half turn (180°). The direction does not matter."},{move:"U",text:"U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom)."},{move:"F",text:'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.'}],JE=[{title:"Anatomy of the cube",body:["A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other – they tell you what colour each face will be.","Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.","A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it."]},{title:"Think in pieces, not stickers",body:["Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).","Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact."]},{title:"Algorithms are tools",body:["An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.",'You do not need to understand them completely at first – learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.']},{title:"Orientation of this app",body:["The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.","If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it."]}],Hm={3:[{id:"cross",title:"White cross",goal:"Four white edges on the bottom, each also matching the centre of the side it touches.",concept:"Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.",tip:'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.'},{id:"f2l",title:"First two layers",goal:"The bottom layer and the middle layer completely solved.",concept:"Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.",tip:"Slot names come from the colours: the white-red-green corner goes between the red and green centres."},{id:"ollCross",title:"Yellow cross",goal:"The four top edges all show yellow on the top face (their side colours are ignored for now).",concept:"Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R' U' F' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.",algorithm:or.yellowCross},{id:"ollFace",title:"Yellow face",goal:"The whole top face is yellow (corners may still be in the wrong place).",concept:'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',algorithm:or.sune},{id:"pllCorners",title:"Place the corners",goal:"All four top corners sit between the correct centres (edges can still be wrong).",concept:"Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.",algorithm:or.cornerCycle},{id:"pllEdges",title:"Place the edges",goal:"The cube is solved.",concept:"The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.",algorithm:or.edgeCycle}],2:[{id:"layer",title:"First layer",goal:"One face (bottom) complete, with the side stickers of each corner matching.",concept:"There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.",tip:"Use only R, U and F turns; they never move the fixed corner."},{id:"orient",title:"Orient the top",goal:"The top face has a single colour.",concept:"Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.",algorithm:or.sune},{id:"permute",title:"Permute the top",goal:"The 2x2 is solved.",concept:"Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.",algorithm:or.tPerm}]};function yu(n,e){return Hm[n].find(t=>t.id===e)}const B=Fn({n:3,mode:"setup",editing:!1,brush:0,speed:1,playing:!1,drama:localStorage.getItem("rubiks-solver.drama")==="1",dramaSpeed:parseFloat(localStorage.getItem("rubiks-solver.dramaSpeed")||"0.32"),finale:localStorage.getItem("rubiks-solver.finale")==="1",fullscreenOnPlay:!1,quickSolveRequest:!1,showAllColorsOnHover:!1,countdown:0,exploding:!1,busy:!1,solving:!1,solution:null,pointer:0,solveError:"",moveCount:0}),an=Ng(pl(3));let Mu=null,wa=null,qn=Promise.resolve();const Su=new Set,rs=[];function ZE(n){Mu=n}function QE(n){wa=n}function e1(n){return Su.add(n),()=>Su.delete(n)}const Ti=It(()=>af(an.value,B.n)),Xa=It(()=>EE(an.value,B.n)),t1=It(()=>KE(an.value,B.n));let Ta=0;const n1=n=>new Promise(e=>setTimeout(e,n));async function i1(){const n=++Ta;for(const e of[3,2,1]){if(n!==Ta)return;B.countdown=e,await n1(1e3)}if(n===Ta){B.countdown=0,B.exploding=!0;try{await(wa==null?void 0:wa())}finally{B.exploding=!1}}}function xo(){Ta++,B.countdown=0}function ml(){xo(),B.solution=null,B.pointer=0,B.solveError=""}function cf(n){return qn=qn.then(()=>{rs.length=0,an.value=n,ml(),B.moveCount=0}),qn}function Vm(n,e){return qn=qn.then(()=>{rs.length=0,an.value=e,B.n=n,B.editing=!1,B.brush=0,ml(),B.moveCount=0}),qn}function vd(n){return Vm(n,pl(n))}function qa(){return cf(pl(B.n))}function Ya(){const n=wE(B.n);return cf(bE(pl(B.n),B.n,n)).then(()=>n)}function bu(n,e=B.brush){const t=Jt(B.n);if(t.cubies[t.stickers[n].cubie].kind==="center"&&B.n===3)return;const i=Uint8Array.from(an.value);i[n]=e,an.value=i,rs.length=0,ml()}function di(n,{animate:e=!0,fromSolution:t=!1,recordHistory:i=!0}={}){return B.exploding||(qn=qn.then(async()=>{const s=n.split(" ").reduce((r,o)=>SE(r,B.n,o),an.value);B.busy=!0;try{e&&Mu&&await Mu(n,s,B.speed)}finally{B.busy=!1}an.value=s,t||(ml(),B.moveCount=Math.max(0,B.moveCount+(i?1:-1)),i&&rs.push(n)),Su.forEach(r=>r(n))})),qn}function _d(n,e){return n.forEach(t=>di(t,e)),qn}async function Eu(){if(B.solving)return null;B.solving=!0,B.solveError="";try{await new Promise(e=>setTimeout(e,20));const n=zm(an.value,B.n);return n.ok?(B.solution=n,B.pointer=0,rs.length=0,n):(B.solution=null,B.solveError=n.error,null)}finally{B.solving=!1}}async function s1(){if(B.busy||B.playing||B.solving||B.exploding)return;if(B.solution)return Aa();const n=rs[rs.length-1];if(!n)return;const e=n.split(" ").reverse().map(of).join(" ");await di(e,{recordHistory:!1}),rs.pop()}function Ka(){const n=B.solution;if(!n)return[];const e=[];return n.stages.forEach((t,i)=>{t.steps.forEach((s,r)=>{s.moves.forEach((o,a)=>e.push({move:o,stage:i,step:r,index:a}))})}),e}async function cr(){xo();const n=Ka();if(B.pointer>=n.length)return;const e=n[B.pointer];B.pointer++,await di(e.move,{fromSolution:!0})}async function Aa(){xo();const n=Ka();B.pointer<=0||(B.pointer--,await di(of(n[B.pointer].move),{fromSolution:!0}))}const r1={class:"panel"},o1={class:"notation"},a1=["onClick"],l1={class:"lessons"},c1={class:"lesson-title"},u1={class:"goal"},f1={key:0,class:"tip"},h1={key:1,class:"alg"},d1=["onClick"],p1=["onClick"],m1={__name:"LearnPanel",setup(n){return(e,t)=>(ge(),ye("section",r1,[t[0]||(t[0]=R("h2",null,"Learn to solve",-1)),t[1]||(t[1]=R("h3",null,"Notation",-1)),R("ul",o1,[(ge(!0),ye(ht,null,kt($(jE),i=>(ge(),ye("li",{key:i.move},[R("button",{onClick:s=>$(di)(i.move)},Ee(i.move),9,a1),R("span",null,Ee(i.text),1)]))),128))]),(ge(!0),ye(ht,null,kt($(JE),i=>(ge(),ye("details",{key:i.title,class:"concept"},[R("summary",null,Ee(i.title),1),(ge(!0),ye(ht,null,kt(i.body,(s,r)=>(ge(),ye("p",{key:r},Ee(s),1))),128))]))),128)),R("h3",null,"The "+Ee($(B).n)+"×"+Ee($(B).n)+" method – layer by layer",1),R("ol",l1,[(ge(!0),ye(ht,null,kt($(Hm)[$(B).n],i=>(ge(),ye("li",{key:i.id},[R("div",c1,Ee(i.title),1),R("div",u1,"Goal: "+Ee(i.goal),1),R("p",null,Ee(i.concept),1),i.tip?(ge(),ye("p",f1,"💡 "+Ee(i.tip),1)):ut("",!0),i.algorithm?(ge(),ye("div",h1,[R("code",null,Ee(i.algorithm.join(" ")),1),R("button",{onClick:s=>$(_d)(i.algorithm)},"Try",8,d1),R("button",{onClick:s=>$(_d)($($a)(i.algorithm))},"Undo",8,p1)])):ut("",!0)]))),128))]),t[2]||(t[2]=R("p",{class:"note"},' "Try" performs the algorithm on the cube shown on the left – scramble it first, or use Solve to see the stages happen on your own position. ',-1))]))}},g1=wn(m1,[["__scopeId","data-v-e1103fca"]]),v1={class:"movepad",open:""},_1={class:"pad"},x1=["disabled","onClick"],y1={__name:"MovePad",setup(n){const e=["U","D","L","R","F","B"];return(t,i)=>(ge(),ye("details",v1,[i[0]||(i[0]=R("summary",null,"Move Pad",-1)),R("div",_1,[(ge(),ye(ht,null,kt(e,s=>R("div",{key:s,class:"group"},[(ge(!0),ye(ht,null,kt([s,`${s}'`,`${s}2`],r=>(ge(),ye("button",{key:r,disabled:$(B).editing,onClick:o=>$(di)(r)},Ee(r),9,x1))),128))])),64))])]))}},M1=wn(y1,[["__scopeId","data-v-1d6dc4ea"]]),S1={class:"panel"},b1={class:"row"},E1=["disabled"],w1=["disabled"],T1={key:0,class:"timer"},A1={key:0,class:"status ok"},C1={key:1,class:"check"},R1={class:"box"},P1={key:2,class:"hint-box"},L1={key:0,class:"hint-move"},D1={class:"move"},I1={class:"note"},U1={class:"row"},N1={key:0},F1={key:3,class:"quiz"},O1={class:"target"},B1={class:"move big"},k1={class:"note"},z1={__name:"PracticePanel",setup(n){const e=qe(!1),t=qe(!1),i=qe(0),s=qe(0),r=qe(null);let o=0;const a=It(()=>`${Math.floor(i.value/60)}:${String(i.value%60).padStart(2,"0")}`);async function l(){A(),await Ya(),e.value=!0,t.value=!1,i.value=0,s.value=0,r.value=null,clearInterval(o),o=setInterval(()=>i.value++,1e3)}function c(){clearInterval(o),e.value=!1}function u(){c(),r.value=null}function f(){const L=zm(an.value,B.n);if(!L.ok){r.value={stage:"Hint unavailable",goal:L.error,concept:"",move:"",label:""};return}const F=L.stages.find(M=>M.moves.length);if(!F)return;s.value++;const w=yu(B.n,F.id);r.value={stage:w.title,goal:w.goal,concept:w.concept,move:F.steps[0].moves[0],label:F.steps[0].label}}Ot(Xa,L=>{L&&e.value&&B.moveCount>0&&(c(),t.value=!0,r.value=null)});const d=qe(!1),p=qe(""),g=qe(0),v=qe(0),m=qe(0),h=qe("Use the move pad or keyboard.");let y=!1,_=null;function x(){const L=ME();p.value=L[Math.floor(Math.random()*L.length)]}function P(){if(d.value){A();return}c(),d.value=!0,g.value=v.value=m.value=0,h.value="Use the move pad or keyboard.",x(),_=e1(async L=>{y||(v.value++,L===p.value?(g.value++,m.value++,h.value="Correct!"):(m.value=0,h.value=`That was ${L}; ${p.value} was asked. Look at which face turns and which way.`),y=!0,await di($a(L.split(" ")).join(" ")),y=!1,x())})}function A(){d.value=!1,_==null||_(),_=null}return Ds(()=>{clearInterval(o),A()}),(L,F)=>(ge(),ye("section",S1,[F[2]||(F[2]=R("h2",null,"Practice & test",-1)),F[3]||(F[3]=R("h3",null,"Solve it yourself",-1)),F[4]||(F[4]=R("p",{class:"note"}," Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise turn). The checklist follows your progress. ",-1)),R("div",b1,[R("button",{class:"primary",onClick:l},Ee(e.value||t.value?"New challenge":"Start challenge"),1),R("button",{disabled:!e.value,onClick:f},"Hint",8,E1),R("button",{disabled:!e.value,onClick:u},"Give up",8,w1),e.value||t.value?(ge(),ye("span",T1,"⏱ "+Ee(a.value)+" · "+Ee($(B).moveCount)+" moves · "+Ee(s.value)+" hints",1)):ut("",!0)]),t.value?(ge(),ye("p",A1," Solved in "+Ee(a.value)+" with "+Ee($(B).moveCount)+" moves and "+Ee(s.value)+" hint"+Ee(s.value===1?"":"s")+". 🎉 ",1)):ut("",!0),e.value||t.value?(ge(),ye("ul",C1,[(ge(!0),ye(ht,null,kt($(t1),w=>(ge(),ye("li",{key:w.id,class:Ut({done:w.done})},[R("span",R1,Ee(w.done?"✓":""),1),st(" "+Ee($(yu)($(B).n,w.id).title),1)],2))),128))])):ut("",!0),r.value?(ge(),ye("div",P1,[R("div",null,[R("b",null,Ee(r.value.stage),1),st(" – "+Ee(r.value.goal),1)]),r.value.move?(ge(),ye("div",L1,[F[0]||(F[0]=st(" Next move: ",-1)),R("span",D1,Ee(r.value.move),1),R("small",null,"("+Ee(r.value.label)+")",1)])):ut("",!0),R("p",I1,Ee(r.value.concept),1)])):ut("",!0),F[5]||(F[5]=R("h3",null,"Notation quiz",-1)),R("div",U1,[R("button",{class:Ut({primary:d.value}),onClick:P},Ee(d.value?"Stop quiz":"Start quiz"),3),d.value?(ge(),ye("span",N1,"Score "+Ee(g.value)+" / "+Ee(v.value)+" · streak "+Ee(m.value),1)):ut("",!0)]),d.value?(ge(),ye("div",F1,[R("div",O1,[F[1]||(F[1]=st("Perform ",-1)),R("span",B1,Ee(p.value),1)]),R("p",k1,Ee(h.value),1)])):ut("",!0)]))}},H1=wn(z1,[["__scopeId","data-v-d9296598"]]),Gm="rubiks-solver.saves";function wu(n,e){const{faceGrid:t}=Jt(e);return rn.map(i=>t[i].flat().map(s=>rn[n[s]]).join("")).join("")}function xd(n){const e=String(n).replace(/\s+/g,"").toUpperCase(),t=e.length===54?3:e.length===24?2:0;if(!t)throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${e.length}.`);const i=[...e].find(a=>!rn.includes(a));if(i)throw new Error(`"${i}" is not a face letter – use only U, R, F, D, L, B.`);const{faceGrid:s}=Jt(t),r=new Uint8Array(Jt(t).slotCount),o=t*t;return rn.forEach((a,l)=>{s[a].flat().forEach((c,u)=>{r[c]=rn.indexOf(e[l*o+u])})}),{n:t,state:r}}function V1({name:n,n:e,state:t}){return JSON.stringify({app:"rubiks-solver",version:1,name:n,n:e,facelets:wu(t,e),savedAt:new Date().toISOString()},null,2)}function fc(n){const e=String(n).trim();if(e.startsWith("{")){let t;try{t=JSON.parse(e)}catch{throw new Error("The file is not valid JSON.")}if(typeof t.facelets!="string")throw new Error("The file has no cube position in it.");const i=xd(t.facelets);if(t.n&&t.n!==i.n)throw new Error("The saved size does not match the stickers in the file.");return{...i,name:typeof t.name=="string"?t.name:""}}return{...xd(e),name:""}}function G1(){try{const n=JSON.parse(localStorage.getItem(Gm)||"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e.facelets=="string"):[]}catch{return[]}}function W1(n){try{return localStorage.setItem(Gm,JSON.stringify(n)),!0}catch{return!1}}const $1={class:"saveload"},X1={class:"row"},q1=["placeholder"],Y1={key:0,class:"saved"},K1=["title"],j1=["onClick"],J1=["onClick"],Z1={key:1,class:"note"},Q1={class:"row"},ew={class:"file-btn"},tw={class:"row"},nw=["disabled"],iw={__name:"SaveLoad",setup(n){const e=Fn(G1()),t=qe(""),i=qe(""),s=qe(""),r=qe(!1);Ot(e,()=>W1([...e]),{deep:!0});const o=It(()=>`${B.n}×${B.n} position ${e.filter(h=>h.n===B.n).length+1}`);function a(h,y=!1){s.value=h,r.value=y}const l=h=>new Date(h).toLocaleString([],{dateStyle:"short",timeStyle:"short"});function c(){const h=t.value.trim()||o.value,y=wu(an.value,B.n),_=e.find(x=>x.name===h&&x.n===B.n);_?(_.facelets=y,_.savedAt=new Date().toISOString()):e.unshift({id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:h,n:B.n,facelets:y,savedAt:new Date().toISOString()}),t.value="",a(`${_?"Updated":"Saved"} "${h}".`)}async function u(h,y){await Vm(h.n,h.state),a(`Loaded ${y}.`)}function f(h){try{u(fc(h.facelets),`"${h.name}"`)}catch(y){a(y.message,!0)}}function d(h){e.splice(e.indexOf(h),1),a(`Deleted "${h.name}".`)}function p(){const h=t.value.trim()||o.value,y=new Blob([V1({name:h,n:B.n,state:an.value})],{type:"application/json"}),_=URL.createObjectURL(y),x=document.createElement("a");x.href=_,x.download=`${h.replace(/[^\w\-. ]+/g,"_")}.cube.json`,x.click(),URL.revokeObjectURL(_),a(`Exported "${h}".`)}async function g(h){var _;const y=(_=h.target.files)==null?void 0:_[0];if(h.target.value="",!!y)try{const x=fc(await y.text());await u(x,x.name?`"${x.name}"`:y.name)}catch(x){a(x.message,!0)}}async function v(){const h=wu(an.value,B.n);try{await navigator.clipboard.writeText(h),a("Position code copied to the clipboard.")}catch{i.value=h,a("Clipboard not available – the code is in the box below, copy it from there.")}}function m(){try{u(fc(i.value),"the pasted code"),i.value=""}catch(h){a(h.message,!0)}}return(h,y)=>(ge(),ye("details",$1,[y[3]||(y[3]=R("summary",null,"Save / load position",-1)),R("div",X1,[Ft(R("input",{"onUpdate:modelValue":y[0]||(y[0]=_=>t.value=_),class:"grow",placeholder:o.value,maxlength:"40",onKeydown:Ba(c,["enter"])},null,40,q1),[[pn,t.value]]),R("button",{class:"primary",onClick:c},"Save")]),e.length?(ge(),ye("ul",Y1,[(ge(!0),ye(ht,null,kt(e,_=>(ge(),ye("li",{key:_.id},[R("span",{class:"title",title:_.name},Ee(_.name),9,K1),R("small",null,Ee(_.n)+"×"+Ee(_.n)+" · "+Ee(l(_.savedAt)),1),R("button",{onClick:x=>f(_)},"Load",8,j1),R("button",{title:"Delete",onClick:x=>d(_)},"✕",8,J1)]))),128))])):(ge(),ye("p",Z1,"No saved positions yet. Saves stay in this browser.")),R("div",Q1,[R("button",{onClick:p},"Export file"),R("label",ew,[y[2]||(y[2]=st(" Import file ",-1)),R("input",{type:"file",accept:".json,.txt,application/json,text/plain",onChange:g},null,32)]),R("button",{onClick:v},"Copy code")]),R("div",tw,[Ft(R("input",{"onUpdate:modelValue":y[1]||(y[1]=_=>i.value=_),class:"grow",placeholder:"Paste a position code (54 or 24 letters)…",onKeydown:Ba(m,["enter"])},null,544),[[pn,i.value]]),R("button",{disabled:!i.value.trim(),onClick:m},"Load code",8,nw)]),s.value?(ge(),ye("p",{key:2,class:Ut(["msg",{bad:r.value}]),role:"status"},Ee(s.value),3)):ut("",!0)]))}},sw=wn(iw,[["__scopeId","data-v-19e6d9ae"]]),rw=["title","onClick"],ow={class:"tag"},aw={__name:"NetEditor",props:{n:Number,state:Object},emits:["paint"],setup(n,{emit:e}){const t=n,i=e,s=[{name:"U",col:2,row:1},{name:"L",col:1,row:2},{name:"F",col:2,row:2},{name:"R",col:3,row:2},{name:"B",col:4,row:2},{name:"D",col:2,row:3}],r=It(()=>Jt(t.n)),o=It(()=>r.value.faceGrid),a=l=>t.n===3&&r.value.cubies[r.value.stickers[l].cubie].kind==="center";return(l,c)=>(ge(),ye("div",{class:Ut(["net",`n${n.n}`])},[(ge(),ye(ht,null,kt(s,u=>R("div",{key:u.name,class:"face",style:fi({gridColumn:u.col,gridRow:u.row})},[(ge(!0),ye(ht,null,kt(o.value[u.name],(f,d)=>(ge(),ye("div",{key:d,class:"nrow"},[(ge(!0),ye(ht,null,kt(f,(p,g)=>(ge(),ye("button",{key:g,class:Ut(["cell",{locked:a(p)}]),style:fi({background:$(vo)[n.state[p]]}),title:`${u.name} ${d+1},${g+1}`,onClick:v=>i("paint",p)},null,14,rw))),128))]))),128)),R("span",ow,Ee(u.name),1)],4)),64))],2))}},lw=wn(aw,[["__scopeId","data-v-0063ed3b"]]),Wm="rubiks-solver.ai",uf=["gemini-2.5-flash","gemini-3.1-flash-lite","gemini-3.5-flash-lite","gemini-3.6-flash"],yd={provider:"builtin",geminiKey:"",geminiModel:uf[0],localUrl:"http://localhost:1234/v1",localModel:"google/gemma-4-e4b"};function cw(){let n={};try{n=JSON.parse(localStorage.getItem(Wm)||"{}")}catch{}const e={...yd,...n};return uf.includes(e.geminiModel)||(e.geminiModel=yd.geminiModel),e}function uw(n){localStorage.setItem(Wm,JSON.stringify(n))}const Md="You are a friendly Rubik's cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. Use standard notation (R, U', F2 ...) only where given. Never invent moves that are not in the provided data.";class Rs extends Error{constructor(e,t,i=0){super(t),this.kind=e,this.status=i}}async function Fs(n,{method:e="GET",headers:t={},body:i,signal:s,timeoutMs:r=2e4}={}){var d;const o=new AbortController;let a=!1;const l=setTimeout(()=>{a=!0,o.abort()},r);s==null||s.addEventListener("abort",()=>o.abort());let c;try{c=await fetch(n,{method:e,headers:i?{"Content-Type":"application/json",...t}:t,body:i?JSON.stringify(i):void 0,signal:o.signal})}catch(p){throw a?new Rs("timeout","The request timed out."):p.name==="AbortError"?new Rs("abort","Cancelled."):new Rs("network",p.message)}finally{clearTimeout(l)}const u=await c.text();let f=null;try{f=JSON.parse(u)}catch{}if(!c.ok){const p=((d=f==null?void 0:f.error)==null?void 0:d.message)||(typeof(f==null?void 0:f.error)=="string"?f.error:"")||u.slice(0,200)||c.statusText;throw new Rs("http",p,c.status)}return f}function ff(n,e){return n.kind==="network"||n.kind==="timeout"?"Cannot reach generativelanguage.googleapis.com – check your internet connection, proxy or ad-blocker.":n.status===400&&/api key|API_KEY/i.test(n.message)?`The API key is not valid. (${n.message})`:n.status===401||n.status===403?`The key was rejected or lacks permission (HTTP ${n.status}): ${n.message}`:n.status===404?`Model "${e}" was not found. Pick another model. (${n.message})`:n.status===429?`Quota or rate limit reached (HTTP 429): ${n.message}`:n.status?`Gemini returned HTTP ${n.status}: ${n.message}`:n.message}async function hf(n){try{await fetch(`${n}/models`,{mode:"no-cors",cache:"no-store"})}catch{return`Cannot reach ${n} – the server is not running or the address/port is wrong.`}return`The server at ${n} is running, but the browser blocked its reply (CORS is disabled on the server). In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.`}function df(n,e){return n.kind==="timeout"?`${e} did not answer in time.`:n.status===404?`The server answered 404: ${n.message}. Check the model name, and that the base URL ends with /v1.`:n.status?`The server returned HTTP ${n.status}: ${n.message}`:n.message}const pf=n=>`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}`,mf=n=>n.localUrl.trim().replace(/\/+$/,"");async function gf(n,e,t){var i,s,r,o,a,l,c;if(n.provider==="gemini"){if(!n.geminiKey.trim())throw new Error("Add a Gemini API key in Settings.");let u;try{u=await Fs(`${pf(n.geminiModel)}:generateContent`,{method:"POST",headers:{"x-goog-api-key":n.geminiKey.trim()},body:{systemInstruction:{parts:[{text:Md}]},contents:[{role:"user",parts:[{text:e}]}]},signal:t})}catch(d){throw new Error(ff(d,n.geminiModel))}const f=((o=(r=(s=(i=u==null?void 0:u.candidates)==null?void 0:i[0])==null?void 0:s.content)==null?void 0:r.parts)==null?void 0:o.map(d=>d.text).join(""))??"";if(!f)throw new Error("Gemini returned no text (the answer may have been blocked).");return f.trim()}if(n.provider==="local"){const u=mf(n);if(!u)throw new Error("Enter the local server URL in Settings.");let f;try{f=await Fs(`${u}/chat/completions`,{method:"POST",body:{model:n.localModel,temperature:.4,stream:!1,messages:[{role:"system",content:Md},{role:"user",content:e}]},signal:t,timeoutMs:12e4})}catch(p){throw new Error(p.kind==="network"?await hf(u):df(p,u))}const d=((c=(l=(a=f==null?void 0:f.choices)==null?void 0:a[0])==null?void 0:l.message)==null?void 0:c.content)??"";if(!d)throw new Error("The local model returned no text.");return d.trim()}throw new Error("No AI provider selected.")}const $m="Reply with the single word OK.";async function fw(n){const e=n.geminiKey.trim();if(!e)return{ok:!1,message:"Enter an API key first."};try{await Fs(pf(n.geminiModel),{headers:{"x-goog-api-key":e},timeoutMs:15e3});const t=await gf({...n,provider:"gemini"},$m);return{ok:!0,message:`API key accepted and model "${n.geminiModel}" answered.`,reply:t}}catch(t){return{ok:!1,message:t instanceof Rs?ff(t,n.geminiModel):t.message}}}async function hw(n){const e=mf(n);if(!e)return{ok:!1,message:"Enter the server URL first (for example http://localhost:1234/v1)."};if(!n.localModel.trim())return{ok:!1,message:"Enter the model name first."};let t=null;try{const i=await Fs(`${e}/models`,{timeoutMs:8e3});t=((i==null?void 0:i.data)??[]).map(s=>s.id).filter(Boolean)}catch(i){if(i.kind==="network")return{ok:!1,message:await hf(e)};if(i.kind==="timeout")return{ok:!1,message:df(i,e)}}if(t!=null&&t.length&&!t.includes(n.localModel)){const i=t.slice(0,10).join(", ")+(t.length>10?", …":"");return{ok:!1,message:`The server is reachable but has no model named "${n.localModel}". Available: ${i}`}}try{const i=await gf({...n,provider:"local"},$m);return{ok:!0,message:`Server reachable and model "${n.localModel}" answered.`,reply:i}}catch(i){return{ok:!1,message:i.message}}}function dw(n){return`Cube: ${n.n}x${n.n}. Stage: "${n.stageTitle}" – goal: ${n.goal}
Lesson text: ${n.concept}
`+(n.stepLabel?`Current step: ${n.stepLabel}. Moves in this step: ${n.moves.join(" ")||"none"}.
`:"")+(n.question?`Learner question: ${n.question}
`:`Explain this step in your own words and say what the learner should look for.
`)}function Xm(n){const e=[`${n.stageTitle}: ${n.goal}`,n.concept];return n.stepLabel&&e.push(`Now: ${n.stepLabel}${n.moves.length?` (${n.moves.join(" ")})`:""}.`),n.question&&e.push("Connect an AI model in the Tutor settings to get free-form answers to questions like this."),e.join(`

`)}async function pw(n,e,t){return n.provider==="builtin"?{text:Xm(e),ai:!1}:{text:await gf(n,dw(e),t),ai:!0}}const At=Fn(cw());Ot(At,n=>uw({...n}),{deep:!0});const qm=[{name:"top",ea:6,eb:2,far:1,face:[0,3],across:["left","right"]},{name:"left",ea:4,eb:6,far:5,face:[2,4],across:["right","top"]},{name:"right",ea:2,eb:4,far:3,face:[1,5],across:["top","left"]}],hc=(n,e)=>qm.find(t=>t.name===e).face[n];function dc(n,e){const t=n/2,i=e/2,s=Math.min(n,e)*.38,r=s*Math.cos(Math.PI/6);return[[t,i],[t,i-s],[t+r,i-s/2],[t+r,i+s/2],[t,i+s],[t-r,i+s/2],[t-r,i-s/2]]}function Sd(n,e,t){const i=Jt(t),s=i.m,r=[],o=e[0];for(const a of qm){const l=e[a.ea],c=e[a.eb],u=e[a.far],f=Nn[hc(n,a.name)],d=Nn[hc(n,a.across[0])],p=Nn[hc(n,a.across[1])];for(let g=0;g<t;g++)for(let v=0;v<t;v++){const m=(g+.5)/t,h=(v+.5)/t,y=o[0]+m*(l[0]-o[0])+h*(c[0]-o[0])+m*h*(u[0]-l[0]-c[0]+o[0]),_=o[1]+m*(l[1]-o[1])+h*(c[1]-o[1])+m*h*(u[1]-l[1]-c[1]+o[1]),x=[0,1,2].map(P=>s*(f[P]+d[P]+p[P])-2*g*p[P]-2*v*d[P]);r.push({slot:i.slotAt(x,f),x:y,y:_})}}return r}function mw(n,e,t,i){const{data:s,width:r,height:o}=n;let a=0,l=0,c=0,u=0;for(let f=Math.max(0,Math.round(t-i));f<=Math.min(o-1,Math.round(t+i));f++)for(let d=Math.max(0,Math.round(e-i));d<=Math.min(r-1,Math.round(e+i));d++){const p=(f*r+d)*4;a+=s[p],l+=s[p+1],c+=s[p+2],u++}return u?[a/u,l/u,c/u]:[0,0,0]}function Ym([n,e,t]){const i=f=>(f/=255,f<=.04045?f/12.92:((f+.055)/1.055)**2.4),[s,r,o]=[i(n),i(e),i(t)],a=(.4124*s+.3576*r+.1805*o)/.95047,l=.2126*s+.7152*r+.0722*o,c=(.0193*s+.1192*r+.9505*o)/1.08883,u=f=>f>.008856?Math.cbrt(f):7.787*f+16/116;return[116*u(l)-16,500*(u(a)-u(l)),200*(u(l)-u(c))]}const ja=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),bd=n=>(n/=255,n<=.04045?n/12.92:((n+.055)/1.055)**2.4),gw=n=>255*(n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055),vw=n=>{const e=[...n].sort((t,i)=>t-i);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2};function _w(n){const e=a=>Math.hypot(a[1],a[2]),t=n.map(a=>({rgb:a,lab:Ym(a)})).filter(({lab:a})=>a[0]>60&&e(a)<50);if(!t.length)return null;const i=Math.min(...t.map(a=>e(a.lab))),s=t.filter(a=>e(a.lab)<=i+12),r=Math.max(...s.map(a=>a.lab[0])),o=s.filter(a=>a.lab[0]>=r-20);return[0,1,2].map(a=>vw(o.map(l=>l.rgb[a])))}function xw(n,e){return n.map((t,i)=>{const s=Math.min(5,1/Math.max(bd(e[i]),.02));return Math.max(0,Math.min(255,gw(Math.min(1,bd(t)*s))))})}function yw([n,e,t]){const[i,s,r]=[n/255,e/255,t/255],o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a;let c=0;return l>0&&(o===i?c=(s-r)/l%6:o===s?c=(r-i)/l+2:c=(i-s)/l+4,c*=60,c<0&&(c+=360)),{h:c>300?c-360:c,s:o===0?0:l/o,v:o}}const Wr=[-30,90],pc=n=>n.s>.4&&n.h>-40&&n.h<80;function Mw(n){const e=[...n].sort((i,s)=>i-s);return e.slice(1).map((i,s)=>({size:i-e[s],mid:(i+e[s])/2})).sort((i,s)=>s.size-i.size).slice(0,2).map(i=>i.mid).sort((i,s)=>i-s)}const Ed=(n,[e,t])=>n<e?0:n<t?1:2;function Sw(n,e,t=null){const i=Jt(n),s=new Uint8Array(i.slotCount),r=[];if(n===3){const u=[],f=[];for(const h of e){const y=i.stickers[h.slot];i.cubies[y.cubie].kind==="center"&&(u[y.face]=h.lab,f[y.face]=h)}for(const h of e){let y=0;for(let _=1;_<6;_++)ja(h.lab,u[_])<ja(h.lab,u[y])&&(y=_);s[h.slot]=y}const d=[0,1,2,3,4,5].filter(h=>pc(f[h])).sort((h,y)=>f[h].h-f[y].h);if(d.length!==3)return{state:s,warnings:r,hue:null};const p=d.map(h=>f[h].h),g=[(p[0]+p[1])/2,(p[1]+p[2])/2],v=t??g,m=[];for(const h of e)!d.includes(s[h.slot])||h.s<.25||(s[h.slot]=d[Ed(h.h,v)],m.push(h.h));return{state:s,warnings:r,hue:{auto:g,cutoffs:v,points:m,anchors:p}}}const o=e.filter(pc);let a=null,l=null;if(o.length===12){const u=Mw(o.map(g=>g.h)),f=t??u,d=e.filter(g=>!pc(g)),p=wd(d.map(g=>g.lab),3);a=new Map,o.forEach(g=>a.set(g.slot,3+Ed(g.h,f))),d.forEach((g,v)=>a.set(g.slot,p[v])),l={auto:u,cutoffs:f,points:o.map(g=>g.h),anchors:[]}}else{const u=wd(e.map(f=>f.lab),6);a=new Map(e.map((f,d)=>[f.slot,u[d]]))}for(const[u,f]of a)s[u]=f;const c=Im(s);return c.error?(r.push(`${c.error}. Check the result and correct stickers by hand.`),{state:s,warnings:r,hue:l}):{state:c.state,warnings:r,hue:l}}function wd(n,e){const t=n.length/e,i=[n[0]];for(;i.length<e;){let r=0,o=-1;n.forEach((a,l)=>{const c=Math.min(...i.map(u=>ja(a,u)));c>o&&(o=c,r=l)}),i.push(n[r])}let s=new Array(n.length).fill(0);for(let r=0;r<25;r++){const o=[];n.forEach((c,u)=>i.forEach((f,d)=>o.push([ja(c,f),u,d]))),o.sort((c,u)=>c[0]-u[0]);const a=new Array(e).fill(t),l=new Array(n.length).fill(-1);for(const[,c,u]of o)l[c]<0&&a[u]>0&&(l[c]=u,a[u]--);s=l;for(let c=0;c<e;c++){const u=n.filter((f,d)=>s[d]===c);u.length&&(i[c]=[0,1,2].map(f=>u.reduce((d,p)=>d+p[f],0)/u.length))}}return s}function bw(n,e,{whiteBalance:t=!1,cutoffs:i=null}={}){const s=[null,null];let r=e;if(t){r=[];for(const a of[0,1]){const l=e.filter(u=>u.photo===a),c=_w(l.map(u=>u.rgb));s[a]=c?"applied":"no-white",r.push(...c?l.map(u=>({...u,rgb:xw(u.rgb,c)})):l)}}const o=r.map(a=>({slot:a.slot,lab:Ym(a.rgb),...yw(a.rgb)}));return{...Sw(n,o,i),whiteBalance:s}}const ar=Math.PI/180,Ew=Array.from({length:8},(n,e)=>[e&1?1:-1,e&2?1:-1,e&4?1:-1]);function ww(n,e,t){const i=Math.max(n,e,t),s=Math.min(n,e,t);return{s:i===0?0:(i-s)/i,v:i/255}}function Tw(n,e=360){const{data:t,width:i,height:s}=n,r=Math.min(1,e/Math.max(i,s)),o=Math.max(8,Math.round(i*r)),a=Math.max(8,Math.round(s*r)),l=new Float32Array(o*a),c=new Float32Array(o*a);for(let u=0;u<a;u++){const f=Math.floor(u*s/a),d=Math.max(f+1,Math.floor((u+1)*s/a));for(let p=0;p<o;p++){const g=Math.floor(p*i/o),v=Math.max(g+1,Math.floor((p+1)*i/o));let m=0,h=0,y=0,_=0;for(let F=f;F<d;F++)for(let w=g;w<v;w++){const M=(F*i+w)*4;m+=t[M],h+=t[M+1],y+=t[M+2],_++}const{s:x,v:P}=ww(m/_,h/_,y/_),A=x>.42&&P>.32?Math.min(1,(x-.32)/.3):0,L=x<.2&&P>.72?.9:0;l[u*o+p]=Math.max(A,L),c[u*o+p]=P<.3?Math.min(1,(.34-P)/.14):0}}return{w:o,h:a,scale:r,stick:Td(l,o,a),dark:Td(c,o,a)}}function Td(n,e,t){const i=new Float32Array(n.length);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let o=0,a=0;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const u=r+c,f=s+l;u<0||f<0||u>=e||f>=t||(o+=n[f*e+u],a++)}i[s*e+r]=o/a}return i}function Tu(n,e,t,i,s){if(i<0||s<0||i>e-1||s>t-1)return-1;const r=Math.floor(i),o=Math.floor(s),a=Math.min(e-1,r+1),l=Math.min(t-1,o+1),c=i-r,u=s-o;return n[o*e+r]*(1-c)*(1-u)+n[o*e+a]*c*(1-u)+n[l*e+r]*(1-c)*u+n[l*e+a]*c*u}function Aw(n,e,t){const[i,s]=[Math.cos(n*ar),Math.sin(n*ar)],[r,o]=[Math.cos(e*ar),Math.sin(e*ar)],[a,l]=[Math.cos(t*ar),Math.sin(t*ar)],c=[[i,0,s],[0,1,0],[-s,0,i]],u=[[1,0,0],[0,r,-o],[0,o,r]],f=[[a,-l,0],[l,a,0],[0,0,1]],d=(p,g)=>p.map(v=>[0,1,2].map(m=>v[0]*g[0][m]+v[1]*g[1][m]+v[2]*g[2][m]));return d(f,d(u,c))}function vf(n,e,t){const i=Aw(n.yaw,n.pitch,n.roll),s=(n.cx-e/2)/n.f*n.z,r=(n.cy-t/2)/n.f*n.z;return Ew.map(o=>[i[0][0]*o[0]+i[0][1]*o[1]+i[0][2]*o[2]+s,i[1][0]*o[0]+i[1][1]*o[1]+i[1][2]*o[2]+r,i[2][0]*o[0]+i[2][1]*o[1]+i[2][2]*o[2]+n.z])}const _f=(n,e,t,i)=>[e/2+i*n[0]/n[2],t/2+i*n[1]/n[2]];function Km(n){let e=0;for(let t=1;t<8;t++)n[t][2]<n[e][2]&&(e=t);return e}const Cw=[[1,2],[1,4],[2,4]],Ad=[.12,.3,.5,.7,.88],Rw=[.02,.05,.08],Cd=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];function jm(n,e,t,i,s){const{w:r,h:o}=n,a=A=>A?Tu(n.stick,r,o,A[0],A[1]):-1,l=A=>A?Tu(n.dark,r,o,A[0],A[1]):-1;let c=0,u=0,f=0,d=0,p=0,g=0,v=0,m=0;const h=[],y=[],_=(A,L)=>{m++,A<0&&(v++,A=0),L===0?(c+=A,u++):L===1?(f+=A,d++):(p+=A,g++)};for(const A of t){const L=[A(0,0),A(1,0),A(1,1),A(0,1)];if(L.some(w=>!w))return-1;y.push(L);let F=0;for(let w=0;w<4;w++){const M=L[w],D=L[(w+1)%4];F+=M[0]*D[1]-D[0]*M[1]}h.push(Math.abs(F)/2);for(let w=0;w<e;w++)for(let M=0;M<e;M++){let D=0,Q=!1;for(const[J,re]of Cd){const de=a(A((w+.5)/e+J*.16/e,(M+.5)/e+re*.16/e));de<0?Q=!0:D+=de}_(Q?-1:D/Cd.length,0)}for(let w=1;w<e;w++)for(const M of Ad)for(const D of[0,1]){const Q=(K,fe)=>D===0?A(K,fe):A(fe,K);let J=-1;for(const K of[-i,0,i])J=Math.max(J,l(Q(w/e+K/e,M)));const re=a(Q(w/e-.33/e,M)),de=a(Q(w/e+.33/e,M));_(J<0||re<0||de<0?-1:J*Math.min(re,de),1)}for(const w of Ad)for(const[M,D,Q,J,re,de]of[[0,w,.33/e,w,1,0],[1,w,1-.33/e,w,-1,0],[w,0,w,.33/e,0,1],[w,1,w,1-.33/e,0,-1]]){let K=-1;for(const X of Rw)K=Math.max(K,l(A(M+re*X/e,D+de*X/e)));const fe=a(A(Q,J));_(K<0||fe<0?-1:K*fe,2)}}if(!u||!d)return-1;if(s)return{cell:c/u,line:f/d,border:p/g,outside:v,total:m};let x=.3*(c/u)+.4*(f/d)+.3*(p/g);x*=1-v/Math.max(1,m);const P=Math.min(...h)/Math.max(...h);return P<.12&&(x*=P/.12),x*(.4+.6*Lw(n,y))}const Pw=(n,e,t)=>{let i=0;for(let s=0;s<4;s++){const r=n[s],o=n[(s+1)%4],a=(o[0]-r[0])*(t-r[1])-(o[1]-r[1])*(e-r[0]);if(a!==0){if(i&&Math.sign(a)!==i)return!1;i=Math.sign(a)}}return!0};function Lw(n,e){const{w:t,h:i}=n,s=e.flat(),r=s.map(m=>m[0]),o=s.map(m=>m[1]),l=.12*Math.max(Math.max(...r)-Math.min(...r),Math.max(...o)-Math.min(...o)),c=Math.max(0,Math.min(...r)-l),u=Math.min(t-1,Math.max(...r)+l),f=Math.max(0,Math.min(...o)-l),d=Math.min(i-1,Math.max(...o)+l);let p=0,g=0;const v=22;for(let m=0;m<v;m++)for(let h=0;h<v;h++){const y=c+(u-c)*(m+.5)/v,_=f+(d-f)*(h+.5)/v,x=Tu(n.stick,t,i,y,_);e.some(P=>Pw(P,y,_))?p+=x:g+=x}return p/Math.max(1e-6,p+g)}function Ca(n,e,t,i=.12,s=!1){const{w:r,h:o}=n,a=vf(t,r,o),l=Km(a);if(a[l][2]<1)return-1;const c=a[l],u=(h,y,_)=>_<.3?null:[r/2+t.f*h/_,o/2+t.f*y/_],f=Cw.map(([h,y])=>{const _=a[l^h],x=a[l^y],P=[_[0]-c[0],_[1]-c[1],_[2]-c[2]],A=[x[0]-c[0],x[1]-c[1],x[2]-c[2]];return(L,F)=>u(c[0]+P[0]*L+A[0]*F,c[1]+P[1]*L+A[1]*F,c[2]+P[2]*L+A[2]*F)});let d=jm(n,e,f,i,s);if(s||d<0)return d;const p=a.map(h=>h[2]>.3?_f(h,r,o,t.f):[0,0]),g=p.map(h=>h[0]),v=p.map(h=>h[1]),m=Math.max(Math.max(...g)-Math.min(...g),Math.max(...v)-Math.min(...v))/Math.min(r,o);return m<.15&&(d*=m/.15),m>1.1&&(d*=1.1/m),d}function Rd(n,e,t,i=.05){const s=(d,p,g,v)=>(m,h)=>[v[0]+m*(d[0]-v[0])+h*(p[0]-v[0])+m*h*(g[0]-d[0]-p[0]+v[0]),v[1]+m*(d[1]-v[1])+h*(p[1]-v[1])+m*h*(g[1]-d[1]-p[1]+v[1])],[r,o,a,l,c,u,f]=t;return jm(n,e,[s(f,a,o,r),s(c,f,u,r),s(a,c,l,r)],i,!1)}function Pd(n,e,t){const i=vf(n,e,t),s=Km(i),r=f=>_f(i[f],e,t,n.f),o=[{p:r(s^1),far:!1},{p:r(s^3),far:!0},{p:r(s^2),far:!1},{p:r(s^6),far:!0},{p:r(s^4),far:!1},{p:r(s^5),far:!0}];let a=0;for(let f=0;f<6;f++){const d=o[f].p,p=o[(f+1)%6].p;a+=d[0]*p[1]-p[0]*d[1]}a<0&&o.reverse();const l=o.map((f,d)=>f.far?d:-1).filter(f=>f>=0),c=l.reduce((f,d)=>o[d].p[1]<o[f].p[1]?d:f,l[0]),u=[0,1,2,3,4,5].map(f=>o[(c+f)%6].p);return[r(s),...u]}function Au(n,e,t){const i=vf(n,e,t).map(o=>_f(o,e,t,n.f)),s=i.map(o=>o[0]),r=i.map(o=>o[1]);return{x1:Math.min(...s),x2:Math.max(...s),y1:Math.min(...r),y2:Math.max(...r)}}function Dw(n,e,t,i,s,r,o){const a={cx:r/2,cy:o/2,z:6,yaw:e,pitch:t,roll:i,f:s},l=(n.x1+n.x2)/2,c=(n.y1+n.y2)/2;for(let u=0;u<3;u++){const f=Au(a,r,o),d=(n.x2-n.x1)/Math.max(1e-6,f.x2-f.x1),p=(n.y2-n.y1)/Math.max(1e-6,f.y2-f.y1);a.z=Math.max(1.5,a.z/Math.sqrt(d*p));const g=Au(a,r,o);a.cx+=l-(g.x1+g.x2)/2,a.cy+=c-(g.y1+g.y2)/2}return a}const Iw=["cx","cy","z","yaw","pitch","roll","lf"];function Uw(n,e,t,i){const s=n.w,r=n.h,o={...t,lf:Math.log(t.f/i)},a=p=>({...p,f:i*Math.exp(p.lf)}),l=Au(a(o),s,r),c=Math.max(l.x2-l.x1,l.y2-l.y1),u={cx:.02*c,cy:.02*c,z:.03*o.z,yaw:3,pitch:3,roll:3,lf:.05},f=[{tol:.16,shrink:[1,.6,.35]},{tol:.09,shrink:[.35,.2,.1]},{tol:.05,shrink:[.1,.05,.025]}];for(const{tol:p,shrink:g}of f){let v=Ca(n,e,a(o),p);for(const m of g)for(let h=0;h<30;h++){let y=!1;for(const _ of Iw)for(const x of[1,-1]){const P={...o,[_]:o[_]+x*u[_]*m};if(_==="pitch"&&Math.abs(P.pitch)>85||_==="lf"&&(P.lf<-.7||P.lf>1.6)||_==="z"&&P.z<1.5)continue;const A=Ca(n,e,a(P),p);A>v+1e-5&&(v=A,Object.assign(o,P),y=!0)}if(!y)break}}const d=a(o);return{pose:d,score:Ca(n,e,d,.06)}}function Nw(n,e,{box:t=null}={}){const i=Tw(n),{w:s,h:r}=i,a=t?[(y=>({x1:y.x1/1e3*s,x2:y.x2/1e3*s,y1:y.y1/1e3*r,y2:y.y2/1e3*r}))(t)]:[.4,.5,.62,.76,.9].map(y=>{const _=y*Math.min(s,r)/2;return{x1:s/2-_,x2:s/2+_,y1:r/2-_,y2:r/2+_}}),l=.8*Math.max(s,r),c=[];for(const y of a)for(let _=0;_<90;_+=10)for(let x=-80;x<=80;x+=10)for(let P=-90;P<=90;P+=15)for(const A of[l,2.8*l]){const L=Dw(y,_,x,P,A,s,r);c.push({pose:L,score:Ca(i,e,L,.16)})}c.sort((y,_)=>_.score-y.score);const u=c[Math.floor(c.length/2)].score,f=[],d=y=>Pd(y,s,r).flat();for(const y of c.slice(0,200)){const _=d(y.pose),x=Math.max(..._.filter((P,A)=>A%2===0))-Math.min(..._.filter((P,A)=>A%2===0));if(f.every(P=>Math.max(...P.k.map((A,L)=>Math.abs(A-_[L])))>.05*x)&&f.push({...y,k:_}),f.length>=16)break}let p=null;const g=[];for(const y of f){const _=Uw(i,e,y.pose,l);g.push(_),(!p||_.score>p.score)&&(p=_)}if(!p||p.score<=0)return null;const v=Pd(p.pose,s,r),m=Fw(i,e,v);return{handles:m.handles.map(([y,_])=>[y/s*1e3,_/r*1e3]),poseHandles:v.map(([y,_])=>[y/s*1e3,_/r*1e3]),score:m.score,poseScore:p.score,margin:m.score-u,pose:p.pose,maps:i,alternatives:g}}function Fw(n,e,t){const i=t.map(c=>c[0]),s=Math.max(...i)-Math.min(...i),r=.06*s,o=t.map(c=>[...c]),a=(c,u)=>Math.max(t[c][u]-r,Math.min(t[c][u]+r,o[c][u]));let l=Rd(n,e,o,.05);for(const c of[.012,.006,.003])for(let u=0;u<20;u++){let f=!1;for(let d=0;d<7;d++)for(let p=0;p<2;p++)for(const g of[1,-1]){const v=o[d][p];if(o[d][p]=v+g*c*s,o[d][p]!==a(d,p)){o[d][p]=v;continue}const m=Rd(n,e,o,.05);m>l+1e-5?(l=m,f=!0):o[d][p]=v}if(!f)break}return{handles:o,score:l}}function Ld(n,e,{box:t=null,signal:i}={}){const s=()=>{const r=Nw(n,e,{box:t});return r&&{handles:r.handles,poseHandles:r.poseHandles,score:r.score,poseScore:r.poseScore,margin:r.margin}};return typeof Worker>"u"?Promise.resolve().then(s):new Promise((r,o)=>{let a;try{a=new Worker(new URL(""+new URL("fitWorker-Bq1gT2Yc.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{r(s());return}const l=()=>{a.terminate(),o(Object.assign(new Error("aborted"),{kind:"abort"}))};if(i!=null&&i.aborted)return l();i==null||i.addEventListener("abort",l,{once:!0}),a.onmessage=c=>{i==null||i.removeEventListener("abort",l),a.terminate(),c.data.error?o(new Error(c.data.error)):r(c.data.result)},a.onerror=c=>{var u;i==null||i.removeEventListener("abort",l),a.terminate();try{r(s())}catch(f){o(f)}(u=c.preventDefault)==null||u.call(c)},a.postMessage({id:1,pixels:{data:n.data,width:n.width,height:n.height},n:e,box:t})})}const Jm=`Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 (x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}`,fa=(n,...e)=>e.map(t=>n==null?void 0:n[t]).find(t=>t!==void 0);function Ow(n){const e=n.indexOf("{"),t=n.lastIndexOf("}");if(e<0||t<=e)throw new Error("The model did not answer with JSON.");let i;try{i=JSON.parse(n.slice(e,t+1))}catch{throw new Error("The model's JSON could not be read.")}const s=i.bbox??i.box??i.bounding_box??i.box_2d??i;let r,o,a,l;Array.isArray(s)&&s.length===4?[r,o,a,l]=s:(r=fa(s,"x1","xmin","left","x_min"),o=fa(s,"y1","ymin","top","y_min"),a=fa(s,"x2","xmax","right","x_max"),l=fa(s,"y2","ymax","bottom","y_max"));const c=[r,o,a,l].map(Number);if(c.some(u=>!Number.isFinite(u)))throw new Error("The model did not give a bounding box.");return{x1:Math.min(c[0],c[2]),y1:Math.min(c[1],c[3]),x2:Math.max(c[0],c[2]),y2:Math.max(c[1],c[3])}}function Zm(n){const{x1:e,y1:t,x2:i,y2:s}=n;if([e,t,i,s].every(d=>d<=1))throw new Error("The coordinates were not on the requested 0-1000 scale.");if(e<-50||t<-50||i>1050||s>1050)throw new Error("The box lies outside the photo.");const r=i-e,o=s-t;if(r<120||o<120)throw new Error("The box is too small to be the cube.");if(r/o<.5||r/o>1.7)throw new Error("The box does not have the shape of a cube seen corner-on.");const a=(e+i)/2,l=(t+s)/2,c=r/2,u=o/2,f=d=>Math.max(0,Math.min(1e3,d));return[[a,l],[a,l-u],[a+c,l-u/2],[a+c,l+u/2],[a,l+u],[a-c,l+u/2],[a-c,l-u/2]].map(([d,p])=>[f(d),f(p)])}const Bw=n=>{const e=[...n].sort((t,i)=>t-i);return e[Math.floor(e.length/2)]};function kw(n,e){const{data:t,width:i,height:s}=n,r=(O,N)=>Math.round(O/1e3*N),o=r(e.x1,i),a=r(e.x2,i),l=r(e.y1,s),c=r(e.y2,s),u=O=>Math.max(0,Math.min(i-1,Math.round(O))),f=O=>Math.max(0,Math.min(s-1,Math.round(O))),d=(a-o)*.25,p=(c-l)*.25,[g,v,m,h]=[u(o-d),u(a+d),f(l-p),f(c+p)],y=v-g+1,_=h-m+1;if(y<40||_<40)return null;const x=Math.max(3,Math.round(Math.min(y,_)*.06)),P=(O,N)=>{const Z=(N*i+O)*4;return[t[Z],t[Z+1],t[Z+2]]},A=[];for(let O=m;O<=h;O++)for(let N=g;N<=v;N++)(N-g<x||v-N<x||O-m<x||h-O<x)&&A.push(P(N,O));const L=[0,1,2].map(O=>Bw(A.map(N=>N[O]))),F=O=>Math.hypot(O[0]-L[0],O[1]-L[1],O[2]-L[2]),w=A.map(F).sort((O,N)=>O-N),M=Math.max(40,w[Math.floor(w.length*.95)]*1.6),D=new Array(y).fill(0),Q=new Array(_).fill(0);for(let O=0;O<_;O++)for(let N=0;N<y;N++)F(P(g+N,m+O))>M&&(D[N]++,Q[O]++);const J=O=>{const N=Math.max(...O)*.04,Z=O.findIndex(ne=>ne>=N),k=O.length-1-[...O].reverse().findIndex(ne=>ne>=N);return Z<0?null:[Z,k]},re=J(D),de=J(Q);if(!re||!de)return null;const K={x1:(g+re[0])/i*1e3,x2:(g+re[1]+1)/i*1e3,y1:(m+de[0])/s*1e3,y2:(m+de[1]+1)/s*1e3},fe=O=>(O.x2-O.x1)*(O.y2-O.y1),X=fe(K)/fe(e),Ae=Math.hypot((K.x1+K.x2-e.x1-e.x2)/2,(K.y1+K.y2-e.y1-e.y2)/2),Y=re[0]===0||de[0]===0||re[1]===y-1||de[1]===_-1;return X<.45||X>2.2||Ae>.25*Math.max(e.x2-e.x1,e.y2-e.y1)||Y?null:K}function zw(n){return Qm(n).length>0}function Qm(n){var t,i,s;const e=[];return(t=n.localUrl)!=null&&t.trim()&&((i=n.localModel)!=null&&i.trim())&&e.push("local"),(s=n.geminiKey)!=null&&s.trim()&&e.push("gemini"),e}async function Hw(n,e,t){var s,r;const i=mf(n);try{await Fs(`${i}/models`,{timeoutMs:4e3,signal:t})}catch(o){if(o.kind==="network")throw new Error(await hf(i));if(o.kind==="timeout")throw new Error(`${i} did not answer in time.`)}try{const o=await Fs(`${i}/chat/completions`,{method:"POST",signal:t,timeoutMs:18e4,body:{model:n.localModel,temperature:0,stream:!1,max_tokens:4096,messages:[{role:"user",content:[{type:"text",text:Jm},{type:"image_url",image_url:{url:e}}]}]}}),a=(r=(s=o==null?void 0:o.choices)==null?void 0:s[0])==null?void 0:r.message;return{text:(a==null?void 0:a.content)||(a==null?void 0:a.reasoning_content)||"",model:n.localModel}}catch(o){if(o instanceof Rs){const a=/image|vision|multimodal|content/i.test(o.message)?" (the model may not support images)":"";throw new Error(df(o,i)+a)}throw o}}async function Vw(n,e,t){var r,o,a,l;const[,i,s]=/^data:([^;]+);base64,(.+)$/.exec(e)??[];if(!s)throw new Error("Could not encode the photo.");try{const c=await Fs(`${pf(n.geminiModel)}:generateContent`,{method:"POST",signal:t,timeoutMs:6e4,headers:{"x-goog-api-key":n.geminiKey.trim()},body:{contents:[{role:"user",parts:[{text:Jm},{inline_data:{mime_type:i,data:s}}]}],generationConfig:{temperature:0,responseMimeType:"application/json"}}});return{text:((l=(a=(o=(r=c==null?void 0:c.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:a.parts)==null?void 0:l.map(u=>u.text).join(""))??"",model:n.geminiModel}}catch(c){throw c instanceof Rs?new Error(ff(c,n.geminiModel)):c}}async function Gw(n,e,t){const i=Qm(n);if(!i.length)throw new Error("No AI model is set up. Add a local model URL or a Gemini key in Settings.");const s=[];for(const r of i)try{const{text:o,model:a}=await(r==="local"?Hw(n,e,t):Vw(n,e,t)),l=Ow(o);return{handles:Zm(l),source:r,model:a,box:l,notes:s}}catch(o){if(t!=null&&t.aborted||o.kind==="abort")throw o;s.push(`${r==="local"?"Local model":"Gemini"}: ${o.message}`)}throw new Error(s.join(" · "))}const Ww={class:"photo-import"},$w={class:"photos"},Xw={class:"file"},qw=["onChange"],Yw=["onPointerdown","onPointermove"],Kw={class:"ai-row"},jw=["disabled","onClick"],Jw={class:"wb"},Zw={class:"wb"},Qw={class:"actions"},eT=["disabled"],tT={key:0,class:"hue-box"},nT={class:"hue-head"},iT=["disabled"],sT={class:"slider"},rT=["min","max"],oT={class:"slider"},aT=["min","max"],lT={key:1,class:"note"},Dd=.3,cT={__name:"PhotoImport",props:{n:Number},emits:["import"],setup(n,{emit:e}){const t=n,i=e,s=[null,null],r=Fn([null,null]),o=Fn([dc(420,420),dc(420,420)]),a=qe(""),l=qe(!1),c=qe(localStorage.getItem("rubiks-solver.autoAlign")!=="0");Ot(c,Y=>localStorage.setItem("rubiks-solver.autoAlign",Y?"1":"0"));const u=Fn([{busy:!1,state:"",text:""},{busy:!1,state:"",text:""}]),f=[null,null],d=qe(localStorage.getItem("rubiks-solver.whiteBalance")==="1"),p=qe(null),g=qe(null),v=qe(!1),m=qe(0),h=qe(0),y=qe(null),_=qe(null),x=It(()=>r[0]&&r[1]);So(()=>[0,1].forEach(M)),Ot(()=>t.n,()=>{[0,1].forEach(M),p.value=null,g.value=null,v.value=!1});function P(Y,O){var k;const N=(k=O.target.files)==null?void 0:k[0];if(!N)return;const Z=new Image;Z.onload=async()=>{r[Y]=Z,o[Y]=dc(420,420),u[Y].state="",u[Y].text="",await ku(),M(Y),c.value&&F(Y)},Z.src=URL.createObjectURL(N)}function A(Y){const O=Math.min(1,768/Math.max(Y.width,Y.height)),N=document.createElement("canvas");N.width=Math.round(Y.width*O),N.height=Math.round(Y.height*O);const Z=N.getContext("2d");return Z.drawImage(Y,0,0,N.width,N.height),{dataUrl:N.toDataURL("image/jpeg",.85),pixels:Z.getImageData(0,0,N.width,N.height)}}function L(Y,O,N){const{s:Z,ox:k,oy:ne}=w(O);N.forEach(([be,he],Ne)=>{o[Y][Ne]=[k+be/1e3*O.width*Z,ne+he/1e3*O.height*Z]}),M(Y)}async function F(Y){var k;const O=r[Y];if(!O)return;(k=f[Y])==null||k.abort();const N=new AbortController;f[Y]=N,u[Y].busy=!0,u[Y].state="",u[Y].text="Analysing the photo…";const Z=()=>r[Y]!==O||N.signal.aborted;try{const{dataUrl:ne,pixels:be}=A(O),he=zw(At),Ne=he?Gw({...At},ne,N.signal).catch(C=>{if(C.kind==="abort"||N.signal.aborted)throw C;return{error:C.message}}):null;let Be=await Ld(be,t.n,{signal:N.signal});if(Z())return;let je="image analysis";Be&&Be.score>=Dd&&(L(Y,O,Be.handles),he&&(u[Y].text="Cube outlined by image analysis – asking the AI to double-check…"));let rt=null;if(Ne){if(rt=await Ne,Z())return;if(rt.box){const C=await Ld(be,t.n,{box:rt.box,signal:N.signal});if(Z())return;C&&(!Be||C.score>Be.score+.02)&&(Be=C,je=`${rt.source==="local"?"local model":"Gemini"} ${rt.model} + image analysis`)}}if(Be&&Be.score>=Dd){L(Y,O,Be.handles),u[Y].state="ok",u[Y].text=`Cube outlined by ${je} (fit ${Math.round(Be.score*100)}%). The outline is a perspective-correct cube model – fine-tune the handles if needed.`;return}if(rt!=null&&rt.box){const C=kw(be,rt.box);L(Y,O,C?Zm(C):rt.handles),u[Y].state="ok",u[Y].text="The cube could not be fitted precisely; the outline is only a rough box from the AI – please adjust the handles.";return}u[Y].state="bad",u[Y].text="Could not find a cube in this photo"+(rt!=null&&rt.error?` (${rt.error})`:"")+" – drag the handles by hand."}catch(ne){if(ne.kind==="abort"||N.signal.aborted)return;u[Y].state="bad",u[Y].text=`${ne.message} – drag the handles by hand.`}finally{f[Y]===N&&(u[Y].busy=!1)}}function w(Y){const O=Math.min(420/Y.width,420/Y.height);return{s:O,ox:(420-Y.width*O)/2,oy:(420-Y.height*O)/2}}function M(Y){const O=s[Y];if(!O)return;const N=O.getContext("2d");N.clearRect(0,0,420,420),N.fillStyle="#0f1116",N.fillRect(0,0,420,420);const Z=r[Y];if(Z){const{s:ne,ox:be,oy:he}=w(Z);N.drawImage(Z,be,he,Z.width*ne,Z.height*ne)}const k=o[Y];N.lineWidth=2,N.strokeStyle="#ffffff",N.beginPath(),[1,2,3,4,5,6].forEach((ne,be)=>be?N.lineTo(k[ne][0],k[ne][1]):N.moveTo(k[ne][0],k[ne][1])),N.closePath(),N.stroke(),N.beginPath(),[2,4,6].forEach(ne=>{N.moveTo(k[0][0],k[0][1]),N.lineTo(k[ne][0],k[ne][1])}),N.stroke(),N.fillStyle="#ff2d55";for(const ne of Sd(Y,k,t.n))N.beginPath(),N.arc(ne.x,ne.y,3,0,Math.PI*2),N.fill();N.fillStyle="#00e5ff",k.forEach(([ne,be])=>{N.beginPath(),N.arc(ne,be,7,0,Math.PI*2),N.fill()})}const D=(Y,O)=>{const N=s[Y].getBoundingClientRect();return[(O.clientX-N.left)/N.width*420,(O.clientY-N.top)/N.height*420]};function Q(Y,O){const[N,Z]=D(Y,O);let k=-1,ne=18;o[Y].forEach(([be,he],Ne)=>{const Be=Math.hypot(be-N,he-Z);Be<ne&&(ne=Be,k=Ne)}),k>=0&&(_.value={i:Y,k})}function J(Y,O){!_.value||_.value.i!==Y||(o[Y][_.value.k]=D(Y,O),M(Y))}const re=()=>_.value=null;function de(){const Y=[];for(let O=0;O<2;O++){const N=document.createElement("canvas");N.width=N.height=420;const Z=N.getContext("2d"),{s:k,ox:ne,oy:be}=w(r[O]);Z.fillStyle="#000",Z.fillRect(0,0,420,420),Z.drawImage(r[O],ne,be,r[O].width*k,r[O].height*k);const he=Z.getImageData(0,0,420,420),Ne=420*.38/t.n/5;for(const Be of Sd(O,o[O],t.n))Y.push({slot:Be.slot,rgb:mw(he,Be.x,Be.y,Ne),photo:O})}p.value=Y,v.value=!1,K()}function K(){const Y=bw(t.n,p.value,{whiteBalance:d.value,cutoffs:v.value?[m.value,h.value]:null});g.value=Y.hue,Y.hue&&!v.value&&(m.value=Math.round(Y.hue.auto[0]),h.value=Math.round(Y.hue.auto[1]));const O=Y.whiteBalance.map((Z,k)=>Z==="no-white"?k+1:0).filter(Boolean),N=[];d.value&&N.push(O.length?`No white tile found in photo ${O.join(" and ")} – colours used as they are there.`:"White balance applied to both photos."),l.value=Y.warnings.length>0||O.length>0,a.value=[Y.warnings[0]||"Colours imported – check them in the cube net and fix any mistakes.",...N].join(" "),i("import",Y.state)}function fe(Y){Y==="a"?m.value=Math.min(m.value,h.value-1):h.value=Math.max(h.value,m.value+1),v.value=!0,K()}function X(){v.value=!1,K()}Ot(d,Y=>{localStorage.setItem("rubiks-solver.whiteBalance",Y?"1":"0"),p.value&&K()});function Ae(){const Y=y.value;if(!Y||!g.value)return;const O=Y.getContext("2d"),[N,Z]=Wr,k=Y.width,ne=Y.height,be=he=>(he-N)/(Z-N)*k;for(let he=0;he<k;he++){const Ne=N+he/k*(Z-N);O.fillStyle=`hsl(${(Ne+360)%360} 70% 38%)`,O.fillRect(he,0,1,ne)}O.font="12px system-ui, sans-serif",O.textAlign="center",O.fillStyle="rgba(255,255,255,0.9)",[["red",N,m.value],["orange",m.value,h.value],["yellow",h.value,Z]].forEach(([he,Ne,Be])=>{O.fillText(he,(be(Ne)+be(Be))/2,13)}),g.value.points.forEach((he,Ne)=>{O.beginPath(),O.arc(be(he),26+Ne*7%30,3.2,0,Math.PI*2),O.fillStyle="#fff",O.fill(),O.strokeStyle="rgba(0,0,0,0.6)",O.stroke()}),g.value.anchors.forEach(he=>{O.beginPath(),O.moveTo(be(he),ne-14),O.lineTo(be(he)-6,ne-2),O.lineTo(be(he)+6,ne-2),O.closePath(),O.fillStyle="#fff",O.fill(),O.stroke()}),O.lineWidth=2,O.strokeStyle="#0b0d12",[m.value,h.value].forEach(he=>{O.beginPath(),O.moveTo(be(he),0),O.lineTo(be(he),ne),O.stroke()}),O.lineWidth=1}return Ot([g,m,h],Ae,{flush:"post"}),(Y,O)=>(ge(),ye("div",Ww,[O[12]||(O[12]=R("p",{class:"hint"},[st(" Photo 1: look straight at one "),R("b",null,"corner"),st(" of the cube. Photo 2: flip the cube over like a pancake (about the photo's horizontal axis) so the "),R("b",null,"opposite corner"),st(" faces the camera. Drag the 7 handles so the lines follow the cube outline – the dots show where colours are read. ")],-1)),R("div",$w,[(ge(),ye(ht,null,kt(2,N=>R("div",{key:N,class:"photo"},[R("label",Xw,[R("span",null,Ee(N===1?"Photo 1 – first corner":"Photo 2 – opposite corner"),1),R("input",{type:"file",accept:"image/*",onChange:Z=>P(N-1,Z)},null,40,qw)]),R("canvas",{ref_for:!0,ref:Z=>s[N-1]=Z,width:"420",height:"420",onPointerdown:Z=>Q(N-1,Z),onPointermove:Z=>J(N-1,Z),onPointerup:re,onPointerleave:re},null,40,Yw),R("div",Kw,[R("button",{type:"button",disabled:!r[N-1]||u[N-1].busy,onClick:Z=>F(N-1)},Ee(u[N-1].busy?"Finding the cube…":"✨ Find the cube"),9,jw),u[N-1].text?(ge(),ye("span",{key:0,class:Ut(["ai-msg",u[N-1].state])},Ee(u[N-1].text),3)):ut("",!0)])])),64))]),R("label",Jw,[Ft(R("input",{"onUpdate:modelValue":O[0]||(O[0]=N=>c.value=N),type:"checkbox"},null,512),[[ns,c.value]]),O[6]||(O[6]=R("span",null,[st(" Outline the cube automatically after upload "),R("small",null,"(fits a perspective-correct cube model to the photo; a local model or Gemini, if set up in Settings, helps to locate it)")],-1))]),R("label",Zw,[Ft(R("input",{"onUpdate:modelValue":O[1]||(O[1]=N=>d.value=N),type:"checkbox"},null,512),[[ns,d.value]]),O[7]||(O[7]=R("span",null,[st(" White balance – if a white tile is found in a photo, use it as that photo's white point "),R("small",null,"(helps with warm/cool lighting and differently lit photos)")],-1))]),R("div",Qw,[R("button",{class:"primary",disabled:!x.value,onClick:de},"Read colours",8,eT),a.value?(ge(),ye("span",{key:0,class:Ut(["msg",{warn:l.value}])},Ee(a.value),3)):ut("",!0)]),g.value?(ge(),ye("div",tT,[R("div",nT,[O[8]||(O[8]=R("b",null,"Red / orange / yellow cutoffs",-1)),R("button",{type:"button",disabled:!v.value,onClick:X},"Auto",8,iT)]),R("canvas",{ref_key:"hueCanvas",ref:y,class:"hue-strip",width:"480",height:"76"},null,512),R("label",sT,[O[9]||(O[9]=R("span",null,"Red | Orange",-1)),Ft(R("input",{"onUpdate:modelValue":O[2]||(O[2]=N=>m.value=N),type:"range",min:$(Wr)[0],max:$(Wr)[1],step:"1",onInput:O[3]||(O[3]=N=>fe("a"))},null,40,rT),[[pn,m.value,void 0,{number:!0}]]),R("output",null,Ee(m.value)+"°",1)]),R("label",oT,[O[10]||(O[10]=R("span",null,"Orange | Yellow",-1)),Ft(R("input",{"onUpdate:modelValue":O[4]||(O[4]=N=>h.value=N),type:"range",min:$(Wr)[0],max:$(Wr)[1],step:"1",onInput:O[5]||(O[5]=N=>fe("b"))},null,40,aT),[[pn,h.value,void 0,{number:!0}]]),R("output",null,Ee(h.value)+"°",1)]),O[11]||(O[11]=R("p",{class:"note"}," Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow. Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag. ",-1))])):p.value?(ge(),ye("p",lT," Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm stickers on a 2×2). ")):ut("",!0)]))}},uT=wn(cT,[["__scopeId","data-v-705f75dc"]]),fT={class:"panel"},hT={class:"row"},dT={class:"seg"},pT={key:0,class:"note"},mT={class:"row"},gT={key:1,class:"row"},vT={style:{display:"flex","align-items":"center",gap:"8px"}},_T={key:2,class:"palette"},xT=["title","onClick"],yT={class:"net-editor",open:""},MT={class:"photos"},ST={__name:"SetupPanel",setup(n){const e=qe("");function t(s){B.brush=s,B.showAllColorsOnHover=!1}async function i(){e.value=(await Ya()).join(" ")}return(s,r)=>(ge(),ye("section",fT,[r[15]||(r[15]=R("h2",null,"Set up the cube",-1)),R("div",hT,[r[8]||(r[8]=R("span",{class:"label"},"Size",-1)),R("div",dT,[R("button",{class:Ut({on:$(B).n===2}),onClick:r[0]||(r[0]=o=>$(vd)(2))},"2×2",2),R("button",{class:Ut({on:$(B).n===3}),onClick:r[1]||(r[1]=o=>$(vd)(3))},"3×3",2)]),R("button",{onClick:r[2]||(r[2]=(...o)=>$(qa)&&$(qa)(...o))},"Reset to solved"),R("button",{onClick:i},"Random scramble")]),e.value?(ge(),ye("p",pT,[r[9]||(r[9]=st("Scramble: ",-1)),R("code",null,Ee(e.value),1)])):ut("",!0),r[16]||(r[16]=R("h3",null,"Enter your own position",-1)),R("div",mT,[R("button",{class:Ut({primary:$(B).editing}),onClick:r[3]||(r[3]=o=>$(B).editing=!$(B).editing)},Ee($(B).editing?"Done painting":"Paint stickers"),3),r[10]||(r[10]=R("span",{class:"note"},"Pick a colour, then click stickers in the 3D cube or the net.",-1))]),$(B).editing?(ge(),ye("div",gT,[R("label",vT,[Ft(R("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=o=>$(B).showAllColorsOnHover=o),onChange:r[5]||(r[5]=o=>$(B).showAllColorsOnHover&&($(B).editing=!0))},null,544),[[ns,$(B).showAllColorsOnHover]]),r[11]||(r[11]=st(" Show all colors on hover ",-1)),r[12]||(r[12]=R("span",{class:"note"},"(click a color on the sticker to paint it)",-1))])])):ut("",!0),$(B).editing?(ge(),ye("div",_T,[(ge(!0),ye(ht,null,kt($(vo),(o,a)=>(ge(),ye("span",{key:a,class:Ut(["swatch-box",{on:!$(B).showAllColorsOnHover&&$(B).brush===a}])},[R("button",{class:"swatch",style:fi({background:o}),title:$(go)[a],onClick:l=>t(a)},null,12,xT)],2))),128))])):ut("",!0),R("details",yT,[r[13]||(r[13]=R("summary",null,"Outline",-1)),Wt(lw,{n:$(B).n,state:$(an),onPaint:r[6]||(r[6]=o=>$(B).editing&&$(bu)(o))},null,8,["n","state"])]),R("details",MT,[r[14]||(r[14]=R("summary",null,"Import from two photos",-1)),Wt(uT,{n:$(B).n,onImport:r[7]||(r[7]=o=>$(cf)(o))},null,8,["n"])]),r[17]||(r[17]=R("p",{class:"note"}," Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour scheme works – the bottom-left-back corner is used as the reference. ",-1))]))}},bT={key:0,class:"result wait"},ET={class:"msg"},wT={key:0,class:"reply"},TT={__name:"TestResult",props:{state:{type:Object,required:!0}},setup(n){return(e,t)=>n.state.busy?(ge(),ye("div",bT,"Contacting the service…")):n.state.result?(ge(),ye("div",{key:1,class:Ut(["result",n.state.result.ok?"ok":"bad"]),role:"status"},[R("div",ET,Ee(n.state.result.ok?"✓":"✗")+" "+Ee(n.state.result.message),1),n.state.result.reply?(ge(),ye("div",wT,[t[0]||(t[0]=R("span",null,"Model response",-1)),st(" "+Ee(n.state.result.reply),1)])):ut("",!0)],2)):ut("",!0)}},Id=wn(TT,[["__scopeId","data-v-b672f672"]]),AT=1,CT="Standard",RT={deadZone:.5,triggerThreshold:.5},PT={"zoom-in":{input:"D-Up",modifiers:[]},"zoom-out":{input:"D-Down",modifiers:[]},"quick-solve":{input:"Menu",modifiers:[]},"next-step":{input:"A",modifiers:[]},undo:{input:"B",modifiers:[]},scramble:{input:"X",modifiers:["View"]},reset:{input:"Y",modifiers:["View"]},"cube-up":{input:"RS-Up",modifiers:[]},"cube-down":{input:"RS-Down",modifiers:[]},"cube-left":{input:"RS-Left",modifiers:[]},"cube-right":{input:"RS-Right",modifiers:[]},"left-cw":{input:"LS-Down",modifiers:[]},"left-ccw":{input:"LS-Up",modifiers:[]},"right-cw":{input:"LS-Up",modifiers:["RT"]},"right-ccw":{input:"LS-Down",modifiers:["RT"]},"front-cw":{input:"LS-Right",modifiers:[]},"front-ccw":{input:"LS-Left",modifiers:[]},"back-cw":{input:"LS-Right",modifiers:["RT"]},"back-ccw":{input:"LS-Left",modifiers:["RT"]},"top-cw":{input:"LB",modifiers:[]},"top-ccw":{input:"LB",modifiers:["LT"]},"bottom-cw":{input:"RB",modifiers:[]},"bottom-ccw":{input:"RB",modifiers:["LT"]},"front-double":{input:"LS-Right",modifiers:["LT"]},"back-double":{input:"LS-Right",modifiers:["LT","RT"]},"left-double":{input:"LS-Up",modifiers:["LT"]},"right-double":{input:"LS-Up",modifiers:["LT","RT"]},"top-double":{input:"Y",modifiers:[]},"bottom-double":{input:"X",modifiers:[]}},LT={version:AT,name:CT,settings:RT,bindings:PT},eg="rubiks-solver.gamepad.v1",Os=n=>JSON.parse(JSON.stringify(n)),Ra=_o(LT),le=Fn({enabled:!0,connected:"",controllerIndex:"",controllers:[],error:"",message:"",profiles:[Os(Ra)],selected:Ra.name,draft:Os(Ra),capture:null,candidate:null,captureReady:!1,held:[]});try{const n=localStorage.getItem(eg);if(n){const e=JSON.parse(n);if(!Array.isArray(e.profiles)||!e.profiles.length)throw new Error("Invalid saved profile list.");const t=e.profiles.map(_o);if(new Set(t.map(i=>i.name)).size!==t.length)throw new Error("Duplicate profile names.");le.profiles=t,le.selected=t.some(i=>i.name===e.selected)?e.selected:t[0].name,le.draft=Os(t.find(i=>i.name===le.selected)),le.enabled=e.enabled!==!1}}catch(n){le.error=`Could not load gamepad profiles: ${n.message}. Saved data has not been overwritten.`}function gl(n=le.profiles,e=le.selected){try{return localStorage.setItem(eg,JSON.stringify({profiles:n,selected:e,enabled:le.enabled})),le.error="",!0}catch(t){return le.error=`Could not save gamepad profiles: ${t.message}`,!1}}function tg(n){const e=le.profiles.find(t=>t.name===n);e&&(Ai(),le.selected=n,le.draft=Os(e),gl(),le.message="")}function DT(n,e=!1){try{const t=_o({...Os(le.draft),name:n});if(e&&le.profiles.some(s=>s.name===t.name))throw new Error("That name already exists.");const i=le.profiles.filter(s=>s.name!==le.selected||e);if(i.some(s=>s.name===t.name))throw new Error("That name already exists.");return i.push(t),gl(i,t.name)?(le.profiles=i,le.selected=t.name,le.draft=Os(t),le.message=`Saved "${t.name}".`,!0):!1}catch(t){return le.error=t.message,!1}}function IT(){if(le.profiles.length<=1){le.error="Keep at least one profile.";return}const n=le.profiles.filter(e=>e.name!==le.selected);gl(n,n[0].name)&&(le.profiles=n,tg(n[0].name))}function Ud(){Ai(),le.draft={...Os(Ra),name:le.selected},le.message="Default bindings restored in the draft. Click Save to keep them."}function Nd(){gl()}function Ai(){le.capture=null,le.candidate=null,le.captureReady=!1}function UT(n){Ai(),le.capture=n,le.error=""}function NT(n){let e=0,t=performance.now(),i=new Set,s="",r=!1,o="",a=null;const l=new Set;function c(u){var L,F,w;e=requestAnimationFrame(c);const f=Math.min((u-t)/1e3,.05);t=u;let d;try{d=((L=navigator.getGamepads)==null?void 0:L.call(navigator))||[]}catch(M){le.error=`Gamepad access failed: ${M.message}`;return}const p=Array.from(d).filter(M=>M&&M.mapping==="standard"),g=p.map(M=>({index:M.index,name:M.id}));JSON.stringify(g)!==JSON.stringify(le.controllers)&&(le.controllers=g);const v=le.controllerIndex===""?p[0]:p.find(M=>M.index===Number(le.controllerIndex));le.connected=(v==null?void 0:v.id)||"",navigator.getGamepads?!v&&Array.from(d).some(Boolean)&&(le.message="Select a connected standard-mapped Xbox-compatible controller."):le.message="This browser does not support the Gamepad API.";const m=v?`${v.index}:${v.id}`:"",h=JSON.stringify(le.draft);if((s!==m||o!==h)&&(s=m,o=h,r=!1,i.clear(),l.clear(),le.captureReady=!1,le.capture&&(le.candidate=null)),!v){le.held.length&&(le.held=[]),le.captureReady=!1;return}const y=TE(v,le.draft.settings,i);le.held.join(",")!==[...y].join(",")&&(le.held=[...y]);const _=!document.hidden&&document.hasFocus();if(le.capture){if((a!==le.capture||!_)&&(le.captureReady=!1,a=le.capture),_&&!y.size&&(le.captureReady=!0),_&&le.captureReady){const M=[...y].filter(D=>!i.has(D));if(M.length){const D=M.find(Q=>!["LT","RT","LB","RB","View","Menu"].includes(Q))||M[M.length-1];le.candidate={input:D,modifiers:[...y].filter(Q=>Q!==D)}}}r=!1,l.clear(),i=y;return}a=null;const x=(F=document.activeElement)==null?void 0:F.tagName;if(!_||!le.enabled||["INPUT","TEXTAREA","SELECT"].includes(x)||(w=document.activeElement)!=null&&w.isContentEditable){r=!1,l.clear(),i=y;return}if(!r){y.size||(r=!0),i=y;return}const P=AE(le.draft.bindings,y),A=new Set(P.map(([M])=>M));for(const M of l)A.has(M)||l.delete(M);for(const[M,D]of P){const Q=!i.has(D.input);Nm.has(M)?(Q&&l.add(M),l.has(M)&&n(M,f)):Q&&n(M,f)}i=y}return e=requestAnimationFrame(c),()=>cancelAnimationFrame(e)}const FT={class:"panel"},OT={class:"row"},BT={class:"field"},kT=["value"],zT={class:"note"},HT={class:"field"},VT=["value"],GT=["value"],WT={class:"field"},$T={class:"row"},XT=["disabled"],qT={class:"note"},YT={class:"field"},KT={class:"field"},jT={key:0,class:"status bad"},JT={class:"bindings"},ZT=["disabled"],QT=["onClick"],eA=["aria-label","onClick"],tA={class:"field"},nA={class:"field"},iA={key:1,class:"status bad",role:"alert"},sA={key:2,class:"note",role:"status"},rA={__name:"GamepadSettings",setup(n){const e=qe(le.draft.name),t=qe("");Ot(()=>le.draft,()=>{e.value=le.draft.name});const i=It(()=>e.value!==le.selected||JSON.stringify(le.draft)!==JSON.stringify(le.profiles.find(v=>v.name===le.selected))),s=It(()=>{const v=Object.values(le.draft.bindings).filter(Boolean).map(ba);return[...new Set(v.filter((m,h)=>v.indexOf(m)!==h))]}),r=v=>v?[...v.modifiers,v.input].join(" + "):"Click to assign";function o(){const v=le.candidate,m=Object.entries(le.draft.bindings).find(([h,y])=>h!==le.capture&&y&&ba(y)===ba(v));if(m){le.error=`That combination is already assigned to ${vu.find(h=>h.id===m[0]).label}. Clear it first.`;return}le.draft.bindings[le.capture]={input:v.input,modifiers:[...v.modifiers]},le.error="",Ai()}function a(v){if(i.value&&!window.confirm("Discard unsaved profile changes?")){v.value=le.selected;return}tg(v.value)}function l(v){Ai(),DT(e.value,v)}function c(){window.confirm(`Delete profile "${le.selected}" and discard its draft?`)&&IT()}function u(){return JSON.stringify(_o({...le.draft,name:e.value}),null,2)}function f(){try{t.value=u(),le.error=""}catch(v){le.error=v.message}}function d(){try{const v=u(),m=URL.createObjectURL(new Blob([v],{type:"application/json"})),h=document.createElement("a");h.href=m,h.download=`${e.value.replace(/[^a-z0-9_-]/gi,"_")}.gamepad.json`,h.click(),setTimeout(()=>URL.revokeObjectURL(m),1e3),le.error=""}catch(v){le.error=v.message}}function p(v){try{const m=_o(JSON.parse(v));if(i.value&&!window.confirm("Discard unsaved changes and load this draft?"))return;Ai(),le.draft=m,le.error="",le.message="Imported draft. Choose Save As with a unique name to keep it as a new profile."}catch(m){le.error=`Could not import profile: ${m.message}`}}async function g(v){const m=v.target.files[0];if(m){try{p(await m.text())}catch(h){le.error=`Could not read profile: ${h.message}`}v.target.value=""}}return Ds(Ai),(v,m)=>(ge(),ye("section",FT,[m[21]||(m[21]=R("h2",null,"Gamepad controls",-1)),m[22]||(m[22]=R("p",{class:"note"},"Xbox / XInput-style controllers using the browser's standard mapping. Press a controller button to connect. Menu = Start; View = Back. The Xbox/Guide button is not supported.",-1)),R("label",OT,[Ft(R("input",{"onUpdate:modelValue":m[0]||(m[0]=h=>$(le).enabled=h),type:"checkbox",onChange:m[1]||(m[1]=(...h)=>$(Nd)&&$(Nd)(...h))},null,544),[[ns,$(le).enabled]]),m[13]||(m[13]=st(" Enable gamepad",-1))]),R("label",BT,[m[15]||(m[15]=st("Controller ",-1)),Ft(R("select",{"onUpdate:modelValue":m[2]||(m[2]=h=>$(le).controllerIndex=h)},[m[14]||(m[14]=R("option",{value:""},"First connected controller",-1)),(ge(!0),ye(ht,null,kt($(le).controllers,h=>(ge(),ye("option",{key:h.index,value:h.index},Ee(h.name)+" (#"+Ee(h.index+1)+")",9,kT))),128))],512),[[Oa,$(le).controllerIndex]])]),R("p",zT,Ee($(le).connected||"No standard-mapped controller connected."),1),R("label",HT,[m[16]||(m[16]=st("Profile ",-1)),R("select",{value:$(le).selected,onChange:m[3]||(m[3]=h=>a(h.target))},[(ge(!0),ye(ht,null,kt($(le).profiles,h=>(ge(),ye("option",{key:h.name,value:h.name},Ee(h.name),9,GT))),128))],40,VT)]),R("label",WT,[m[17]||(m[17]=st("Profile name ",-1)),Ft(R("input",{"onUpdate:modelValue":m[4]||(m[4]=h=>e.value=h),maxlength:"80"},null,512),[[pn,e.value]])]),R("div",$T,[R("button",{onClick:m[5]||(m[5]=h=>l(!1))},"Save / Rename"),R("button",{onClick:m[6]||(m[6]=h=>l(!0))},"Save As"),R("button",{disabled:$(le).profiles.length<2,onClick:c},"Delete",8,XT),R("button",{onClick:m[7]||(m[7]=(...h)=>$(Ud)&&$(Ud)(...h))},"Restore default")]),R("p",qT,Ee(i.value?"Unsaved changes (currently active).":"Profile saved.")+" Save As creates a new profile with the name above.",1),R("label",YT,[st("Stick dead zone: "+Ee($(le).draft.settings.deadZone.toFixed(2))+" ",1),Ft(R("input",{"onUpdate:modelValue":m[8]||(m[8]=h=>$(le).draft.settings.deadZone=h),type:"range",min:"0.15",max:"0.9",step:"0.05"},null,512),[[pn,$(le).draft.settings.deadZone,void 0,{number:!0}]])]),R("label",KT,[st("Trigger threshold: "+Ee($(le).draft.settings.triggerThreshold.toFixed(2))+" ",1),Ft(R("input",{"onUpdate:modelValue":m[9]||(m[9]=h=>$(le).draft.settings.triggerThreshold=h),type:"range",min:"0.1",max:"0.95",step:"0.05"},null,512),[[pn,$(le).draft.settings.triggerThreshold,void 0,{number:!0}]])]),m[23]||(m[23]=R("p",{class:"note"},"Click a binding, release all controls, then hold modifiers and press the main input last. Release the combination and click Confirm. Gameplay is paused while assigning. Camera/zoom repeat while held; moves and commands fire once per press. Longer combinations override shorter ones.",-1)),s.value.length?(ge(),ye("p",jT,"Duplicate combinations: "+Ee(s.value.join(", "))+". Clear or change a conflicting binding before saving.",1)):ut("",!0),R("table",JT,[m[18]||(m[18]=R("thead",null,[R("tr",null,[R("th",null,"Action"),R("th",null,"Combination")])],-1)),R("tbody",null,[(ge(!0),ye(ht,null,kt($(vu),h=>(ge(),ye("tr",{key:h.id},[R("td",null,Ee(h.label),1),R("td",null,[$(le).capture===h.id?(ge(),ye(ht,{key:0},[R("span",null,Ee($(le).candidate?r($(le).candidate):$(le).captureReady?"Press combination…":"Release all controls…"),1),R("button",{disabled:!$(le).candidate||!!$(le).held.length,onClick:o},"Confirm",8,ZT),R("button",{onClick:m[10]||(m[10]=(...y)=>$(Ai)&&$(Ai)(...y))},"Cancel")],64)):(ge(),ye(ht,{key:1},[R("button",{onClick:y=>$(UT)(h.id)},Ee(r($(le).draft.bindings[h.id])),9,QT),$(le).draft.bindings[h.id]?(ge(),ye("button",{key:0,"aria-label":`Clear ${h.label}`,onClick:y=>$(le).draft.bindings[h.id]=null},"Clear",8,eA)):ut("",!0)],64))])]))),128))])]),m[24]||(m[24]=R("h3",null,"Profile JSON",-1)),R("div",{class:"row"},[R("button",{onClick:d},"Export JSON"),R("button",{onClick:f},"Show draft JSON")]),R("label",tA,[m[19]||(m[19]=st("Import JSON file ",-1)),R("input",{type:"file",accept:".json,application/json",onChange:g},null,32)]),R("label",nA,[m[20]||(m[20]=st("Copy / paste profile JSON ",-1)),Ft(R("textarea",{"onUpdate:modelValue":m[11]||(m[11]=h=>t.value=h),rows:"5",spellcheck:"false"},null,512),[[pn,t.value]])]),R("button",{onClick:m[12]||(m[12]=h=>p(t.value))},"Import as draft"),m[25]||(m[25]=R("p",{class:"note"},[st("Imports are validated and do not overwrite a saved profile until you choose Save or Save As. Exported JSON can replace "),R("code",null,"src/gamepad-standard.json"),st(".")],-1)),$(le).error?(ge(),ye("p",iA,Ee($(le).error),1)):ut("",!0),$(le).message?(ge(),ye("p",sA,Ee($(le).message),1)):ut("",!0)]))}},oA=wn(rA,[["__scopeId","data-v-c60b39d0"]]),aA={class:"panel"},lA={class:"field"},cA={key:0,class:"pill"},uA={class:"field"},fA={class:"key-row"},hA=["type"],dA=["disabled"],pA={class:"field"},mA=["value"],gA={class:"row"},vA=["disabled"],_A={key:0,class:"pill"},xA={class:"field"},yA={class:"field"},MA={class:"row"},SA=["disabled"],bA={__name:"SettingsPanel",setup(n){const e=qe(!1),t=Fn({busy:!1,result:null}),i=Fn({busy:!1,result:null}),s={gemini:t,local:i};Ot(()=>[At.geminiKey,At.geminiModel],()=>t.result=null),Ot(()=>[At.localUrl,At.localModel],()=>i.result=null);async function r(o,a){const l=s[o];l.busy=!0,l.result=null;try{l.result=await a({...At})}finally{l.busy=!1}}return(o,a)=>(ge(),ye(ht,null,[R("section",aA,[a[19]||(a[19]=R("h2",null,"Tutor settings",-1)),a[20]||(a[20]=R("p",{class:"note"}," The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your own questions. Everything is stored in this browser's localStorage and saved automatically. ",-1)),R("label",lA,[a[10]||(a[10]=st(" Active provider ",-1)),Ft(R("select",{"onUpdate:modelValue":a[0]||(a[0]=l=>$(At).provider=l)},[...a[9]||(a[9]=[R("option",{value:"builtin"},"Built-in (no AI)",-1),R("option",{value:"gemini"},"Gemini API",-1),R("option",{value:"local"},"Local model (Gemma via LM Studio / Ollama)",-1)])],512),[[Oa,$(At).provider]])]),R("fieldset",null,[R("legend",null,[a[11]||(a[11]=st("Gemini ",-1)),$(At).provider==="gemini"?(ge(),ye("span",cA,"active")):ut("",!0)]),R("label",uA,[a[12]||(a[12]=st(" API key ",-1)),R("span",fA,[Ft(R("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>$(At).geminiKey=l),type:e.value?"text":"password",autocomplete:"off",spellcheck:"false",placeholder:"AIza…"},null,8,hA),[[y_,$(At).geminiKey]]),R("button",{type:"button",onClick:a[2]||(a[2]=l=>e.value=!e.value)},Ee(e.value?"Hide":"Show"),1),R("button",{type:"button",disabled:!$(At).geminiKey,onClick:a[3]||(a[3]=l=>$(At).geminiKey="")},"Clear",8,dA)])]),R("label",pA,[a[13]||(a[13]=st(" Model ",-1)),Ft(R("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>$(At).geminiModel=l)},[(ge(!0),ye(ht,null,kt($(uf),l=>(ge(),ye("option",{key:l,value:l},Ee(l),9,mA))),128))],512),[[Oa,$(At).geminiModel]])]),R("div",gA,[R("button",{class:"primary",disabled:t.busy,onClick:a[5]||(a[5]=l=>r("gemini",$(fw)))},Ee(t.busy?"Testing…":"Test Gemini"),9,vA)]),Wt(Id,{state:t},null,8,["state"]),a[14]||(a[14]=R("p",{class:"note"},"The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.",-1))]),R("fieldset",null,[R("legend",null,[a[15]||(a[15]=st("Local model ",-1)),$(At).provider==="local"?(ge(),ye("span",_A,"active")):ut("",!0)]),R("label",xA,[a[16]||(a[16]=st(" OpenAI-compatible base URL ",-1)),Ft(R("input",{"onUpdate:modelValue":a[6]||(a[6]=l=>$(At).localUrl=l),placeholder:"http://localhost:1234/v1"},null,512),[[pn,$(At).localUrl]])]),R("label",yA,[a[17]||(a[17]=st(" Model name ",-1)),Ft(R("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>$(At).localModel=l),placeholder:"google/gemma-4-e4b"},null,512),[[pn,$(At).localModel]])]),R("div",MA,[R("button",{class:"primary",disabled:i.busy,onClick:a[8]||(a[8]=l=>r("local",$(hw)))},Ee(i.busy?"Testing…":"Test local model"),9,SA)]),Wt(Id,{state:i},null,8,["state"]),a[18]||(a[18]=R("p",{class:"note"},[st(" LM Studio: Developer → Server Settings → turn on "),R("b",null,"Enable CORS"),st(" (browsers refuse replies from servers without it, even though other apps can connect). Ollama: set "),R("code",null,"OLLAMA_ORIGINS=*"),st(". ")],-1))]),a[21]||(a[21]=R("p",{class:"note"},"Saved ✓ — settings are stored automatically.",-1))]),Wt(oA)],64))}},EA=wn(bA,[["__scopeId","data-v-1ac61131"]]),wA={class:"tutor"},TA={class:"tutor-head"},AA={class:"pill"},CA={key:0,class:"status bad"},RA={class:"ask"},PA=["disabled"],LA=["disabled","title"],DA=["disabled"],IA={__name:"TutorBox",props:{context:{type:Object,required:!0}},setup(n){const e=n,t=qe(""),i=qe(!1),s=qe(""),r=qe(""),o=qe(!1),a=It(()=>({builtin:"Built-in",gemini:"Gemini",local:"Local model"})[At.provider]),l=It(()=>o.value&&r.value?r.value:Xm(e.context));Ot(()=>[e.context.stageTitle,e.context.stepLabel],()=>{o.value=!1,r.value="",s.value=""});async function c(u){i.value=!0,s.value="";try{const f=await pw({...At},{...e.context,question:u||""});r.value=f.text,o.value=f.ai,t.value=""}catch(f){s.value=f.message}finally{i.value=!1}}return(u,f)=>(ge(),ye("div",wA,[R("div",TA,[f[5]||(f[5]=R("h3",null,"Tutor",-1)),R("span",AA,Ee(a.value),1),R("button",{class:"link",onClick:f[0]||(f[0]=d=>$(B).mode="settings")},"Settings")]),R("p",{class:Ut(["answer",{ai:o.value}])},Ee(l.value),3),s.value?(ge(),ye("p",CA,Ee(s.value),1)):ut("",!0),R("div",RA,[Ft(R("input",{"onUpdate:modelValue":f[1]||(f[1]=d=>t.value=d),placeholder:"Ask about this step…",disabled:i.value,onKeydown:f[2]||(f[2]=Ba(d=>c(t.value),["enter"]))},null,40,PA),[[pn,t.value]]),R("button",{disabled:i.value||$(At).provider==="builtin",title:$(At).provider==="builtin"?"Choose an AI provider in Settings":"",onClick:f[3]||(f[3]=d=>c(t.value))},Ee(i.value?"…":"Ask"),9,LA),R("button",{disabled:i.value||$(At).provider==="builtin",onClick:f[4]||(f[4]=d=>c(""))},"Explain",8,DA)])]))}},UA=wn(IA,[["__scopeId","data-v-d33fa6a4"]]),NA={class:"panel"},FA={class:"row"},OA=["disabled"],BA={key:0,class:"status ok"},kA={key:0,class:"status bad"},zA={key:1,class:"status bad"},HA={class:"note"},VA={class:"player"},GA=["disabled"],WA=["disabled"],$A=["title","disabled"],XA=["disabled"],qA=["disabled"],YA={class:"speed"},KA={class:"drama",title:"While playing, the camera slowly swirls around the cube"},jA={class:"drama-speed",title:"Rotation speed while Extra drama is enabled"},JA={class:"drama",title:"When the cube is solved: 3-2-1, explosion, and the cube re-forms"},ZA={class:"fullscreen-mode"},QA={class:"bar"},eC={key:0,class:"now"},tC={class:"now-stage"},nC={class:"moves"},iC={key:1,class:"status ok"},sC={class:"stages"},rC={class:"stage-title"},oC={class:"goal"},aC={key:0,class:"steps"},lC={class:"step-label"},cC={__name:"SolvePanel",setup(n){const e=qe(!1),t=qe(!1);So(()=>{function y(_){var P;const x=(P=_.target)==null?void 0:P.tagName;x==="INPUT"||x==="TEXTAREA"||x==="SELECT"||_.ctrlKey||_.metaKey||_.altKey||B.mode==="solve"&&(_.code==="Space"?(_.preventDefault(),cr()):_.key==="Enter"&&(_.preventDefault(),v()))}window.addEventListener("keydown",y),Ds(()=>window.removeEventListener("keydown",y))}),Ot(t,y=>B.playing=y,{immediate:!0}),Ot(()=>B.drama,y=>localStorage.setItem("rubiks-solver.drama",y?"1":"0")),Ot(()=>B.finale,y=>{localStorage.setItem("rubiks-solver.finale",y?"1":"0"),y||xo()});const i=It(()=>B.solution),s=It(()=>{var y;return((y=i.value)==null?void 0:y.moves.length)??0}),r=It(()=>B.pointer>=s.value),o=It(()=>B.busy||B.pointer===0),a=y=>yu(B.n,y),l=It(()=>{if(!i.value||r.value)return null;const y=Ka()[B.pointer],_=i.value.stages[y.stage],x=_.steps[y.step];return{stageIdx:y.stage,stage:_,step:x,stepIdx:y.step}}),c=It(()=>l.value?Ka()[B.pointer].index:0),u=It(()=>l.value?a(l.value.stage.id).title:""),f=It(()=>{var x,P,A;const y=((x=l.value)==null?void 0:x.stage)??i.value.stages[i.value.stages.length-1],_=a(y.id);return{n:B.n,stageTitle:_.title,goal:_.goal,concept:_.concept,stepLabel:((P=l.value)==null?void 0:P.step.label)??"",moves:((A=l.value)==null?void 0:A.step.moves)??[]}});async function d(){e.value=!0,await Eu(),e.value=!1}async function p(){for(t.value=!0;t.value&&B.pointer<s.value;)await cr();const y=t.value&&B.pointer>=s.value&&Xa.value;t.value=!1,y&&B.finale&&i1()}async function g(){if(B.quickSolveRequest=!1,t.value)return;e.value=!0;const y=await Eu();e.value=!1,y&&p()}Ot(()=>B.quickSolveRequest,y=>y&&g(),{immediate:!0});function v(){t.value?t.value=!1:p()}async function m(){const y=B.speed;for(B.speed=10;B.pointer<s.value;)await cr();B.speed=y}async function h(){t.value=!1;const y=B.speed;for(B.speed=10;B.pointer>0;)await Aa();B.speed=y}return Ds(()=>{t.value=!1,B.playing=!1,xo()}),(y,_)=>(ge(),ye("section",NA,[_[16]||(_[16]=R("h2",null,"Solve it step by step",-1)),R("div",FA,[R("button",{class:"primary",disabled:!$(Ti).ok||e.value||$(B).editing,onClick:d},Ee(e.value?"Solving…":"Find solution"),9,OA),$(Xa)&&!i.value?(ge(),ye("span",BA,"Already solved!")):ut("",!0)]),$(Ti).ok?ut("",!0):(ge(),ye("ul",kA,[(ge(!0),ye(ht,null,kt($(Ti).errors,x=>(ge(),ye("li",{key:x},Ee(x),1))),128))])),$(B).solveError?(ge(),ye("p",zA,Ee($(B).solveError),1)):ut("",!0),i.value?(ge(),ye(ht,{key:2},[R("p",HA,Ee(i.value.moves.length)+" moves in "+Ee(i.value.stages.length)+" stages. Use the controls to step through, or press play. ",1),R("div",VA,[R("button",{title:"Back to start",disabled:o.value,onClick:h},"⏮",8,GA),R("button",{title:"Previous move",disabled:o.value,onClick:_[0]||(_[0]=(...x)=>$(Aa)&&$(Aa)(...x))},"◀",8,WA),R("button",{class:"primary",title:t.value?"Pause":"Play",disabled:r.value&&!t.value,onClick:v},Ee(t.value?"⏸":"▶"),9,$A),R("button",{title:"Next move",disabled:r.value||$(B).busy,onClick:_[1]||(_[1]=(...x)=>$(cr)&&$(cr)(...x))},"▶|",8,XA),R("button",{title:"Jump to end",disabled:r.value||$(B).busy,onClick:m},"⏭",8,qA),R("label",YA,[_[7]||(_[7]=st(" Speed ",-1)),Ft(R("input",{"onUpdate:modelValue":_[2]||(_[2]=x=>$(B).speed=x),type:"range",min:"0.5",max:"4",step:"0.5"},null,512),[[pn,$(B).speed,void 0,{number:!0}]])])]),R("label",KA,[Ft(R("input",{"onUpdate:modelValue":_[3]||(_[3]=x=>$(B).drama=x),type:"checkbox"},null,512),[[ns,$(B).drama]]),_[8]||(_[8]=st(" Extra drama ",-1)),_[9]||(_[9]=R("small",null,"– slow, smooth camera rotation during playback",-1))]),R("label",jA,[_[10]||(_[10]=st(" Rotation speed ",-1)),Ft(R("input",{"onUpdate:modelValue":_[4]||(_[4]=x=>$(B).dramaSpeed=x),type:"range",min:"0.05",max:"1.2",step:"0.01"},null,512),[[pn,$(B).dramaSpeed,void 0,{number:!0}]])]),R("label",JA,[Ft(R("input",{"onUpdate:modelValue":_[5]||(_[5]=x=>$(B).finale=x),type:"checkbox"},null,512),[[ns,$(B).finale]]),_[11]||(_[11]=st(" Extra, extra drama ",-1)),_[12]||(_[12]=R("small",null,"– 3-2-1 countdown, then the cube explodes (and re-forms)",-1))]),R("label",ZA,[Ft(R("input",{"onUpdate:modelValue":_[6]||(_[6]=x=>$(B).fullscreenOnPlay=x),type:"checkbox"},null,512),[[ns,$(B).fullscreenOnPlay]]),_[13]||(_[13]=st(" Fullscreen mode ",-1)),_[14]||(_[14]=R("small",null,"When enabled, hitting Play makes the cube go fullscreen",-1))]),R("div",QA,[R("div",{style:fi({width:`${$(B).pointer/Math.max(1,s.value)*100}%`})},null,4)]),l.value?(ge(),ye("div",eC,[R("div",tC,[st(Ee(u.value)+" ",1),R("small",null,"– "+Ee(l.value.step.label),1)]),R("div",nC,[(ge(!0),ye(ht,null,kt(l.value.step.moves,(x,P)=>(ge(),ye("span",{key:P,class:Ut(["move",{done:c.value>P,active:c.value===P}])},Ee(x),3))),128))])])):r.value?(ge(),ye("p",iC,"Finished – the cube is solved.")):ut("",!0),Wt(UA,{context:f.value},null,8,["context"]),_[15]||(_[15]=R("h3",null,"All stages",-1)),R("ol",sC,[(ge(!0),ye(ht,null,kt(i.value.stages,(x,P)=>(ge(),ye("li",{key:x.id,class:Ut({active:l.value&&l.value.stageIdx===P})},[R("div",rC,[st(Ee(a(x.id).title)+" ",1),R("small",null,Ee(x.moves.length?`${x.moves.length} moves`:"already done"),1)]),R("div",oC,Ee(a(x.id).goal),1),x.steps.length?(ge(),ye("ul",aC,[(ge(!0),ye(ht,null,kt(x.steps,(A,L)=>(ge(),ye("li",{key:L},[R("span",lC,Ee(A.label),1),R("code",null,Ee(A.moves.join(" ")),1)]))),128))])):ut("",!0)],2))),128))])],64)):ut("",!0)]))}},uC=wn(cC,[["__scopeId","data-v-dc314576"]]),fC={class:"app"},hC=["disabled"],dC=["aria-expanded"],pC={"aria-label":"Main navigation"},mC=["onClick"],gC={class:"stage"},vC={class:"overlay"},_C={class:"view-controls"},xC=["aria-pressed","aria-label"],yC={class:"zoom-control"},MC=["value"],SC={key:0,class:"badge"},bC={key:1,class:"badge ok"},EC={key:2,class:"brush-chip",title:"Last assigned colour"},wC={key:0,class:"status ok small"},TC={key:1,class:"status bad small"},AC={class:"mobile-controls",role:"toolbar","aria-label":"Cube touch controls"},CC=["disabled"],RC=["disabled"],PC=["disabled"],LC=["aria-pressed"],DC=["aria-pressed"],IC={class:"mobile-hint","aria-live":"polite"},UC={key:0,class:"status bad",role:"alert"},NC={key:0,class:"note"},FC={key:1,class:"status bad",role:"alert"},OC={key:2,class:"note",role:"status"},BC=300,kC=340,zC=14,HC={__name:"App",setup(n){const e=[{id:"setup",label:"Set up"},{id:"solve",label:"Solve"},{id:"learn",label:"Learn"},{id:"practice",label:"Practice"},{id:"settings",label:"Settings"},{id:"about",label:"About"}],t=qe(null),i=qe(50),s=qe(null),r=qe(null),o=qe(!1);function a(N=!1){var Z;o.value&&(o.value=!1,N&&((Z=r.value)==null||Z.focus()))}function l(N){var Z;(Z=s.value)!=null&&Z.contains(N.target)||a()}const c=qe(null),u=qe(Math.max(300,Math.min(window.innerHeight*.62,640))),f=qe(!1),d=qe(!1),p=qe(!1),g=qe(!1),v=qe("rotate"),m=qe(!1),h=qe(""),y=It(()=>m.value||B.busy||B.playing||B.solving||B.exploding||B.quickSolveRequest),_=It(()=>!y.value&&Ti.value.ok&&(!B.solution||B.pointer<B.solution.moves.length)),x=It(()=>B.mode==="setup"&&B.showAllColorsOnHover);function P(N){v.value=N,B.editing=!1}async function A(N){if(!y.value){m.value=!0,h.value="",B.editing=!1;try{await(N==="reset"?qa():Ya())}catch(Z){h.value=`Could not ${N}: ${Z.message}`}finally{m.value=!1}}}async function L(){if(!Ti.value.ok)throw new Error("Cannot solve this cube: check the position in Set up.");if(!B.solution&&!await Eu())throw new Error(B.solveError||"Could not compute a solution.");B.mode="solve",await cr()}async function F(){if(_.value){m.value=!0,h.value="",B.editing=!1;try{await L()}catch(N){h.value=N.message}finally{m.value=!1}}}function w(N,Z){if(B.editing){if(Z===void 0)return bu(N);B.brush=Z,bu(N,Z)}}const M=qe(null),D=qe(0),Q=qe(!1);function J(N){const Z=M.value,k=Z.querySelector(".stage"),ne=N.clientX,be=k.getBoundingClientRect().width,he=getComputedStyle(Z),Ne=Z.clientWidth-parseFloat(he.paddingLeft)-parseFloat(he.paddingRight)-zC-kC;Q.value=!0;function Be(rt){D.value=Math.round(Math.max(BC,Math.min(Ne,be+rt.clientX-ne)))}function je(){Q.value=!1,window.removeEventListener("pointermove",Be),window.removeEventListener("pointerup",je)}window.addEventListener("pointermove",Be),window.addEventListener("pointerup",je)}const re=It(()=>Ti.value.ok&&!B.playing&&!B.busy&&!B.solving&&!B.exploding&&!B.countdown);function de(N=!0){var Z,k;re.value&&(B.editing=!1,B.drama=!0,B.finale=!0,B.speed=.5,B.dramaSpeed=1.2,B.fullscreenOnPlay=N,N&&((k=(Z=c.value)==null?void 0:Z.requestFullscreen)==null||k.call(Z).catch(()=>{})),B.mode="solve",B.quickSolveRequest=!0)}let K,fe=!1;async function X(N,Z){var k;if(Nm.has(N)){B.exploding||(k=t.value)==null||k.gamepadView(N,Z);return}if(!(fe||B.busy||B.playing||B.solving||B.exploding||B.editing||B.quickSolveRequest)){fe=!0;try{if(N==="quick-solve")re.value?(de(!1),le.message="Quick Solve started. For fullscreen, use the mouse Quick Solve button."):le.error="Quick Solve requires a valid cube position.";else if(N==="next-step")await L();else if(N==="undo")await s1();else if(N==="scramble")await Ya();else if(N==="reset")await qa();else{const[ne,be]=N.split("-"),he=be==="ccw"?"'":be==="double"?"2":"";await di(t.value.viewRelativeMove(ne,he))}}catch(ne){le.error=`Gamepad action failed: ${ne.message}`}finally{fe=!1}}}function Ae(N){f.value=!0;const Z=N.clientY,k=u.value;function ne(he){const Ne=he.clientY-Z,Be=Math.max(300,k+Ne);u.value=Be}function be(){f.value=!1,window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",be)}window.addEventListener("pointermove",ne),window.addEventListener("pointerup",be)}function Y(N){var ne;const Z=(ne=N.target)==null?void 0:ne.tagName;if(Z==="INPUT"||Z==="TEXTAREA"||Z==="SELECT"||N.ctrlKey||N.metaKey||N.altKey)return;const k=N.key.toUpperCase();!"UDLRFB".includes(k)||k.length!==1||B.editing||(N.preventDefault(),di(N.shiftKey?`${k}'`:k))}So(()=>{ZE((N,Z,k)=>t.value.animate(N,Z,k)),QE(()=>t.value.explode()),window.addEventListener("keydown",Y),document.addEventListener("pointerdown",l),K=NT(X),document.addEventListener("fullscreenchange",()=>{d.value=!!document.fullscreenElement,d.value||(p.value=!1)})}),Ds(()=>{window.removeEventListener("keydown",Y),document.removeEventListener("pointerdown",l),K==null||K()}),Ot(()=>({playing:B.playing,mode:B.mode}),N=>{var Z;N.mode==="solve"&&N.playing&&B.fullscreenOnPlay&&((Z=c.value)!=null&&Z.requestFullscreen)&&c.value.requestFullscreen().catch(()=>{})},{immediate:!1}),Ot(()=>({ptr:B.pointer,sol:B.solution,exploding:B.exploding,countdown:B.countdown}),N=>{var k;N.sol&&N.ptr>=(((k=N.sol.moves)==null?void 0:k.length)??0)&&!N.exploding&&N.countdown===0&&document.fullscreenElement===c.value&&setTimeout(()=>p.value=!0,2e3)});function O(){document.fullscreenElement&&document.exitFullscreen()}return(N,Z)=>(ge(),ye("div",fC,[R("header",{ref_key:"headerEl",ref:s,onKeydown:Z[2]||(Z[2]=Ba(k=>a(!0),["esc"]))},[Z[16]||(Z[16]=R("h1",null,[R("a",{class:"logo",href:"https://github.com/sterudo/RubriksSolver",target:"_blank",rel:"noopener",title:"Open the repository on GitHub"},"🧊 Rubik's Solver")],-1)),R("button",{class:"quick-solve",disabled:!re.value,title:"Fullscreen, full drama, solve and play",onClick:Z[0]||(Z[0]=k=>{de(),a()})}," ⚡ Quick Solve ",8,hC),R("button",{ref_key:"menuToggle",ref:r,class:"menu-toggle","aria-label":"Toggle navigation","aria-controls":"header-actions","aria-expanded":o.value,onClick:Z[1]||(Z[1]=k=>o.value=!o.value)},[...Z[15]||(Z[15]=[R("span",{"aria-hidden":"true"},"☰",-1)])],8,dC),R("div",{id:"header-actions",class:Ut(["header-actions",{open:o.value}])},[R("nav",pC,[(ge(),ye(ht,null,kt(e,k=>R("button",{key:k.id,class:Ut({on:$(B).mode===k.id}),onClick:ne=>{$(B).mode=k.id,a()}},Ee(k.label),11,mC)),64))])],2)],544),R("main",{ref_key:"mainEl",ref:M,style:fi(D.value?{"--left-w":D.value+"px"}:null)},[R("div",gC,[R("div",{class:"viewport",ref_key:"viewport",ref:c,style:fi({height:u.value+"px"})},[Wt(UE,{ref_key:"cube",ref:t,n:$(B).n,state:$(an),paintable:$(B).editing,locked:$(B).busy||$(B).exploding,drama:$(B).drama&&$(B).playing,dramaSpeed:$(B).dramaSpeed,rumble:$(B).countdown?(4-$(B).countdown)/3:0,hoverColors:x.value,touchMode:v.value,touchLocked:$(B).playing||$(B).solving||$(B).quickSolveRequest||m.value,onPaint:w,onLayerturn:Z[3]||(Z[3]=k=>$(di)(k)),onHovering:Z[4]||(Z[4]=k=>g.value=k),onZoom:Z[5]||(Z[5]=k=>i.value=k)},null,8,["n","state","paintable","locked","drama","dramaSpeed","rumble","hoverColors","touchMode","touchLocked"]),R("div",vC,[R("div",_C,[R("button",{title:"Reset camera",onClick:Z[6]||(Z[6]=k=>{var ne;return(ne=t.value)==null?void 0:ne.resetView()})},"⟲ View"),R("button",{class:"touch-mode-toggle","aria-pressed":v.value==="move","aria-label":`Move swipe mode ${v.value==="move"?"on":"off"}`,onClick:Z[7]||(Z[7]=k=>P(v.value==="rotate"?"move":"rotate"))},Ee(v.value==="rotate"?"Rotate":"Move"),9,xC)]),R("label",yC,[Z[17]||(Z[17]=st(" Zoom ",-1)),R("input",{type:"range",min:"0",max:"100",step:"0.1",value:i.value,"aria-label":"Cube zoom",onInput:Z[8]||(Z[8]=k=>{var ne;return(ne=t.value)==null?void 0:ne.setZoom(Number(k.target.value))})},null,40,MC)]),$(B).editing?(ge(),ye("span",SC,"Painting: click stickers")):$(Xa)?(ge(),ye("span",bC,"Solved ✓")):ut("",!0),x.value&&!g.value?(ge(),ye("span",EC,[R("i",{style:fi({background:$(vo)[$(B).brush]})},null,4)])):ut("",!0),$(B).mode==="setup"?(ge(),ye("div",{key:3,class:Ut(["validity",{ok:$(Ti).ok}])},[$(Ti).ok?(ge(),ye("p",wC,"This position is valid and solvable.")):(ge(),ye("ul",TC,[(ge(!0),ye(ht,null,kt($(Ti).errors,k=>(ge(),ye("li",{key:k},Ee(k),1))),128))]))],2)):ut("",!0),d.value&&p.value?(ge(),ye("button",{key:4,class:"exit-fullscreen",onClick:Z[9]||(Z[9]=k=>O())}," Exit Fullscreen mode ")):ut("",!0)]),$(B).countdown?(ge(),ye("div",{key:$(B).countdown,class:"countdown","aria-live":"assertive"},[R("span",null,Ee($(B).countdown),1)])):ut("",!0),R("div",{class:"resize-handle",onPointerdown:Zf(Ae,["prevent"])},null,32),R("div",AC,[R("button",{disabled:y.value,onClick:Z[10]||(Z[10]=k=>A("reset"))},"Reset",8,CC),R("button",{disabled:y.value,onClick:Z[11]||(Z[11]=k=>A("scramble"))},"Scramble",8,RC),R("button",{disabled:!_.value,title:"Compute a solution if needed and perform its next move",onClick:F},"Solve",8,PC),R("button",{"aria-pressed":v.value==="rotate",class:Ut({on:v.value==="rotate"}),onClick:Z[12]||(Z[12]=k=>P("rotate"))},"Rotate",10,LC),R("button",{"aria-pressed":v.value==="move",class:Ut({on:v.value==="move"}),onClick:Z[13]||(Z[13]=k=>P("move"))},"Move",10,DC),R("span",IC,Ee(v.value==="rotate"?"Swipe to rotate the view; pinch to zoom.":"Swipe a sticker row or column to turn it."),1),h.value?(ge(),ye("span",UC,Ee(h.value),1)):ut("",!0)])],4),Z[18]||(Z[18]=R("p",{class:"keys"}," Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms · keys R L U D F B (Shift = counter-clockwise). ",-1)),Wt(M1),Wt(sw),$(le).connected?(ge(),ye("p",NC,[st(" Gamepad: "+Ee($(le).enabled?$(le).draft.name:"disabled")+" ",1),R("button",{onClick:Z[14]||(Z[14]=k=>$(B).mode="settings")},"Configure")])):ut("",!0),$(le).error?(ge(),ye("p",FC,Ee($(le).error),1)):ut("",!0),$(le).message&&$(le).connected?(ge(),ye("p",OC,Ee($(le).message),1)):ut("",!0)]),R("div",{class:Ut(["col-divider",{dragging:Q.value}]),role:"separator","aria-orientation":"vertical",title:"Drag to resize",onPointerdown:Zf(J,["prevent"])},null,34),R("aside",null,[$(B).mode==="setup"?(ge(),Ms(ST,{key:0})):$(B).mode==="solve"?(ge(),Ms(uC,{key:1})):$(B).mode==="learn"?(ge(),Ms(g1,{key:2})):$(B).mode==="settings"?(ge(),Ms(EA,{key:3})):$(B).mode==="about"?(ge(),Ms(BE,{key:4})):(ge(),Ms(H1,{key:5}))])],4)]))}};A_(HC).mount("#app");
