import{d as ze,r as $,w as Je,c as D,a as F,F as ve,b as Ve,e as $e,v as We,u as W,i as Ke,f as Ge,o as N,t as le,n as Xe}from"./index.21d8e824.js";function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:Se}=Object.prototype,{getPrototypeOf:ne}=Object,re=(e=>t=>{const n=Se.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>re(t)===e),z=e=>t=>typeof t===e,{isArray:T}=Array,_=z("undefined");function Qe(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&B(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=R("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const Ye=z("string"),B=z("function"),Re=z("number"),se=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,j=e=>{if(re(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=R("Date"),nt=R("File"),rt=R("Blob"),st=R("FileList"),ot=e=>se(e)&&B(e.pipe),it=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Se.call(e)===t||B(e.toString)&&e.toString()===t)},ut=R("URLSearchParams"),at=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),T(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function ge(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!_(e)&&e!==Be;function Z(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&ge(t,s)||s;j(t[o])&&j(r)?t[o]=Z(t[o],r):j(r)?t[o]=Z({},r):T(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const ct=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&B(s)?e[o]=Ae(s,n):e[o]=s},{allOwnKeys:r}),e),lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ft=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dt=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ht=e=>{if(!e)return null;if(T(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),Et=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},yt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=R("HTMLFormElement"),wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=R("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},At=e=>{xe(e,(t,n)=>{if(B(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!B(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return T(e)?r(e):r(String(e).split(t)),n},Ot=()=>{},Rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",de="0123456789",Te={DIGIT:de,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+de},gt=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&B(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(se(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=T(r)?[]:{};return L(r,(i,a)=>{const f=n(i,s+1);!_(f)&&(o[a]=f)}),t[s]=void 0,o}}return r};return n(e,0)},u={isArray:T,isArrayBuffer:Oe,isBuffer:Qe,isFormData:it,isArrayBufferView:Ze,isString:Ye,isNumber:Re,isBoolean:et,isObject:se,isPlainObject:j,isUndefined:_,isDate:tt,isFile:nt,isBlob:rt,isRegExp:Ft,isFunction:B,isStream:ot,isURLSearchParams:ut,isTypedArray:mt,isFileList:st,forEach:L,merge:Z,extend:ct,trim:at,stripBOM:lt,inherits:ft,toFlatObject:dt,kindOf:re,kindOfTest:R,endsWith:pt,toArray:ht,forEachEntry:Et,matchAll:yt,isHTMLForm:bt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:xe,freezeMethods:At,toObjectSet:St,toCamelCase:wt,noop:Ot,toFiniteNumber:Rt,findKey:ge,global:Be,isContextDefined:Ce,ALPHABET:Te,generateString:gt,isSpecCompliantForm:Bt,toJSONObject:Ct};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}u.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(De,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(De);return u.toFlatObject(e,i,function(f){return f!==Error.prototype},a=>a!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const xt=null;function Y(e){return u.isPlainObject(e)||u.isArray(e)}function Pe(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Pe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Tt(e){return u.isArray(e)&&!e.some(Y)}const Dt=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,S){return!u.isUndefined(S[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(u.isDate(d))return d.toISOString();if(!f&&u.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(d)||u.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,h,S){let w=d;if(d&&!S&&typeof d=="object"){if(u.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(u.isArray(d)&&Tt(d)||(u.isFileList(d)||u.endsWith(h,"[]"))&&(w=u.toArray(d)))return h=Pe(h),w.forEach(function(k,qe){!(u.isUndefined(k)||k===null)&&t.append(i===!0?pe([h],qe,o):i===null?h:h+"[]",c(k))}),!1}return Y(d)?!0:(t.append(pe(S,h,o),c(d)),!1)}const p=[],b=Object.assign(Dt,{defaultVisitor:l,convertValue:c,isVisitable:Y});function E(d,h){if(!u.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),u.forEach(d,function(w,C){(!(u.isUndefined(w)||w===null)&&s.call(t,w,u.isString(C)?C.trim():C,h,b))===!0&&E(w,h?h.concat(C):[C])}),p.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return E(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&J(e,this,t)}const _e=oe.prototype;_e.append=function(t,n){this._pairs.push([t,n])};_e.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Nt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Nt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=u.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Pt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=Pt,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:oe,Lt=typeof FormData<"u"?FormData:null,Ut=typeof Blob<"u"?Blob:null,kt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:_t,FormData:Lt,Blob:Ut},isStandardBrowserEnv:kt,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]};function Ht(e,t){return J(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function It(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ke(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),f=o>=n.length;return i=!i&&u.isArray(s)?s.length:i,f?(u.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!u.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&u.isArray(s[i])&&(s[i]=Mt(s[i])),!a)}if(u.isFormData(e)&&u.isFunction(e.entries)){const n={};return u.forEachEntry(e,(r,s)=>{t(It(r),s,n,0)}),n}return null}const qt={"Content-Type":void 0};function zt(e,t,n){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const v={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=u.isObject(t);if(o&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return s&&s?JSON.stringify(ke(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ht(t,this.formSerializer).toString();if((a=u.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return J(a?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),zt(t)):t}],transformResponse:[function(t){const n=this.transitional||v.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&u.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?m.from(a,m.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};u.forEach(["delete","get","head"],function(t){v.headers[t]={}});u.forEach(["post","put","patch"],function(t){v.headers[t]=u.merge(qt)});const ie=v,Jt=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:u.isArray(e)?e.map(H):String(e)}function Vt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function $t(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function G(e,t,n,r,s){if(u.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!u.isString(t)){if(u.isString(r))return t.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(t)}}function Wt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kt(e,t){const n=u.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,f,c){const l=P(f);if(!l)throw new Error("header name must be a non-empty string");const p=u.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||f]=H(a))}const i=(a,f)=>u.forEach(a,(c,l)=>o(c,l,f));return u.isPlainObject(t)||t instanceof this.constructor?i(t,n):u.isString(t)&&(t=t.trim())&&!$t(t)?i(vt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=P(t),t){const r=u.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Vt(s);if(u.isFunction(n))return n.call(this,s,r);if(u.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=u.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=P(i),i){const a=u.findKey(r,i);a&&(!n||G(r,r[a],a,n))&&(delete r[a],s=!0)}}return u.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return u.forEach(this,(s,o)=>{const i=u.findKey(r,o);if(i){n[i]=H(s),delete n[o];return}const a=t?Wt(o):String(o).trim();a!==o&&delete n[o],n[a]=H(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return u.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=P(i);r[a]||(Kt(s,i),r[a]=!0)}return u.isArray(t)?t.forEach(o):o(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.freezeMethods(V.prototype);u.freezeMethods(V);const O=V;function X(e,t){const n=this||ie,r=t||n,s=O.from(r.headers);let o=r.data;return u.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function je(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}u.inherits(U,m,{__CANCEL__:!0});function Gt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Xt=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const f=[];f.push(n+"="+encodeURIComponent(r)),u.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),u.isString(o)&&f.push("path="+o),u.isString(i)&&f.push("domain="+i),a===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!Qt(t)?Zt(e,t):t}const Yt=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=u.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),l=r[o];i||(i=c),n[s]=f,r[s]=c;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const E=l&&c-l;return E?Math.round(b*1e3/E):void 0}}function ye(e,t){let n=0;const r=tn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,f=r(a),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:f||void 0,estimated:f&&i&&c?(i-o)/f:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let s=e.data;const o=O.from(e.headers).normalize(),i=e.responseType;let a;function f(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}u.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const E=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(E+":"+d))}const l=He(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const E=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:E,config:e,request:c};Gt(function(w){n(w),f()},function(w){r(w),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ue;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const E=(e.withCredentials||Yt(l))&&e.xsrfCookieName&&Xt.read(e.xsrfCookieName);E&&o.set(e.xsrfHeaderName,E)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&u.forEach(o.toJSON(),function(d,h){c.setRequestHeader(h,d)}),u.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=E=>{!c||(r(!E||E.type?new U(null,e,c):E),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const b=en(l);if(b&&A.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:xt,xhr:rn};u.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sn={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=u.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(u.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!u.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function be(e){return Q(e),e.headers=O.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sn.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return je(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof O?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,l,p){return u.isPlainObject(c)&&u.isPlainObject(l)?u.merge.call({caseless:p},c,l):u.isPlainObject(l)?u.merge({},l):u.isArray(l)?l.slice():l}function s(c,l,p){if(u.isUndefined(l)){if(!u.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!u.isUndefined(l))return r(void 0,l)}function i(c,l){if(u.isUndefined(l)){if(!u.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function a(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(c,l)=>s(we(c),we(l),!0)};return u.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=f[l]||s,b=p(e[l],t[l],l);u.isUndefined(b)&&p!==a||(n[l]=b)}),n}const Ie="1.3.4",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Fe={};ue.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ie+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Fe[i]&&(Fe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function on(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],f=a===void 0||i(a,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ee={assertOptions:on,validators:ue},g=ee.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1),s!==void 0&&ee.assertOptions(s,{encode:g.function,serialize:g.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&u.merge(o.common,o[n.method]),i&&u.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=O.concat(i,o);const a=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,a.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,b;if(!f){const d=[be.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,c),b=d.length,l=Promise.resolve(n);p<b;)l=l.then(d[p++],d[p++]);return l}b=a.length;let E=n;for(p=0;p<b;){const d=a[p++],h=a[p++];try{E=d(E)}catch(S){h.call(this,S);break}}try{l=be.call(this,E)}catch(d){return Promise.reject(d)}for(p=0,b=c.length;p<b;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=x(this.defaults,t);const n=He(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(x(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const M=q;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new U(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const un=ae;function an(e){return function(n){return e.apply(null,n)}}function cn(e){return u.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const ln=te;function Me(e){const t=new M(e),n=Ae(M.prototype.request,t);return u.extend(n,M.prototype,t,{allOwnKeys:!0}),u.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(x(e,s))},n}const y=Me(ie);y.Axios=M;y.CanceledError=U;y.CancelToken=un;y.isCancel=je;y.VERSION=Ie;y.toFormData=J;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=an;y.isAxiosError=cn;y.mergeConfig=x;y.AxiosHeaders=O;y.formToJSON=e=>ke(u.isHTMLForm(e)?new FormData(e):e);y.HttpStatusCode=ln;y.default=y;const ce=y,fn="gpt-3.5-turbo",dn="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";ce.defaults.headers.common.Authorization=`Bearer ${dn}`;ce.defaults.headers.post["Content-Type"]="application/json";async function pn(e){try{return{status:"success",data:(await ce({url:"https://api.openai.com/v1/chat/completions",method:"post",data:{model:fn,messages:e}})).data.choices[0].message}}catch(t){return{status:"error",message:t}}}const hn={class:"flex flex-col h-screen"},mn=F("div",{class:"flex sticky top-0 items-baseline px-6 py-4 bg-gray-100"},[F("div",{class:"text-2xl font-bold"},[F("a",{href:"/"},"ChatGPT")]),F("div",{class:"ml-4 text-sm text-gray-500"},"\u57FA\u4E8E OpenAI \u7684 ChatGPT \u81EA\u7136\u8BED\u8A00\u6A21\u578B\u4EBA\u5DE5\u667A\u80FD\u5BF9\u8BDD")],-1),En={class:"flex-1"},yn={class:"mb-6"},bn={class:"font-bold mb-3"},wn={key:0,class:"text-gray-600 text-sm whitespace-pre-wrap"},Fn={key:1,class:"text-gray-400 text-sm"},An={class:"flex sticky bottom-0 w-full p-6 pb-12 bg-gray-100"},Sn=["disabled"],Rn=ze({__name:"home",setup(e){const t=$(),n={user:"ME",assistant:"ChatGPT"};let r=$("");const s=$([{role:"assistant",content:`\u4F60\u597D\uFF0C\u6211\u662FAI\u8BED\u8A00\u6A21\u578B\uFF0C\u6211\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u670D\u52A1\u548C\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

1. \u7FFB\u8BD1\uFF1A\u6211\u53EF\u4EE5\u628A\u4E2D\u6587\u7FFB\u8BD1\u6210\u82F1\u6587\uFF0C\u82F1\u6587\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u8BED\u8A00\u7FFB\u8BD1\uFF0C\u6BD4\u5982\u6CD5\u8BED\u3001\u65E5\u8BED\u3001\u897F\u73ED\u7259\u8BED\u7B49\u3002

2. \u8BED\u97F3\u8BC6\u522B\uFF1A\u5982\u679C\u4F60\u9700\u8981\u8BED\u97F3\u8F6C\u6587\u5B57\uFF0C\u6211\u53EF\u4EE5\u5E2E\u4F60\u5B9E\u73B0\u3002

3. \u54A8\u8BE2\u670D\u52A1\uFF1A\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u95EE\u9898\u9700\u8981\u54A8\u8BE2\uFF0C\u4F8B\u5982\u5065\u5EB7\u3001\u6CD5\u5F8B\u3001\u6295\u8D44\u7B49\u65B9\u9762\uFF0C\u6211\u53EF\u4EE5\u5C3D\u53EF\u80FD\u4E3A\u4F60\u63D0\u4F9B\u5E2E\u52A9\u3002

4. \u95F2\u804A\uFF1A\u5982\u679C\u4F60\u611F\u5230\u5BC2\u5BDE\u6216\u65E0\u804A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u804A\u4E00\u4E9B\u6709\u8DA3\u7684\u8BDD\u9898\uFF0C\u4EE5\u51CF\u8F7B\u4F60\u7684\u538B\u529B\u3002

\u8BF7\u544A\u8BC9\u6211\u4F60\u9700\u8981\u54EA\u65B9\u9762\u7684\u5E2E\u52A9\uFF0C\u6211\u4F1A\u6839\u636E\u4F60\u7684\u9700\u6C42\u7ED9\u4F60\u63D0\u4F9B\u76F8\u5E94\u7684\u4FE1\u606F\u548C\u5EFA\u8BAE\u3002`}]);async function o(i,a){if(!i.length)return;a.length===1&&a.pop(),r.value="",a.push({role:"user",content:i},{role:"assistant",content:""});const{status:f,data:c,message:l}=await pn(a);f==="success"?a[a.length-1].content=c.content:console.log(l)}return Je(s.value,()=>Xe(()=>{!t.value||scrollTo(0,t.value.scrollHeight)})),(i,a)=>(N(),D("div",hn,[mn,F("div",En,[F("div",{ref_key:"chatListDom",ref:t,class:"m-6"},[(N(!0),D(ve,null,Ve(s.value,f=>(N(),D("div",yn,[F("div",bn,le(n[f.role])+"\uFF1A",1),f.content?(N(),D("pre",wn,le(f.content.replace(/^\n\n/,"")),1)):(N(),D("div",Fn,"Loading\u2026\u2026"))]))),256))],512)]),F("div",An,[$e(F("input",{"onUpdate:modelValue":a[0]||(a[0]=f=>Ke(r)?r.value=f:r=f),onKeydown:a[1]||(a[1]=Ge(f=>o(W(r),s.value),["enter"])),class:"px-4 py-2 text-gray-700 bg-white border rounded-md mr-2 sm:mr-4 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 flex-grow",type:"text",placeholder:"\u8BF7\u8F93\u5165"},null,544),[[We,W(r)]]),F("button",{disabled:!s.value[s.value.length-1].content,onClick:a[2]||(a[2]=f=>o(W(r),s.value)),class:"px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 whitespace-nowrap disabled:bg-blue-300"},"\u53D1\u9001",8,Sn)])]))}});export{Rn as default};