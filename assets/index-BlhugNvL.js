(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},fl={},pu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=Symbol.for("react.element"),Nc=Symbol.for("react.portal"),Rc=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Lc=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Yo=Symbol.iterator;function Ic(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hu=Object.assign,vu={};function at(e,n,t){this.props=e,this.context=n,this.refs=vu,this.updater=t||mu}at.prototype.isReactComponent={};at.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};at.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yu(){}yu.prototype=at.prototype;function qi(e,n,t){this.props=e,this.context=n,this.refs=vu,this.updater=t||mu}var bi=qi.prototype=new yu;bi.constructor=qi;hu(bi,at.prototype);bi.isPureReactComponent=!0;var Go=Array.isArray,gu=Object.prototype.hasOwnProperty,eo={current:null},_u={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)gu.call(n,r)&&!_u.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:bt,type:e,key:i,ref:o,props:l,_owner:eo.current}}function Mc(e,n){return{$$typeof:bt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function no(e){return typeof e=="object"&&e!==null&&e.$$typeof===bt}function Fc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Xo=/\/+/g;function Tl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Fc(""+e.key):n.toString(36)}function zr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bt:case Nc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Tl(o,0):r,Go(l)?(t="",e!=null&&(t=e.replace(Xo,"$&/")+"/"),zr(l,n,t,"",function(c){return c})):l!=null&&(no(l)&&(l=Mc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Xo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Go(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Tl(i,s);o+=zr(i,n,t,u,l)}else if(u=Ic(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Tl(i,s++),o+=zr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ar(e,n,t){if(e==null)return e;var r=[],l=0;return zr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Uc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Pr={transition:null},Bc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:eo};function wu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ar,forEach:function(e,n,t){ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ar(e,function(){n++}),n},toArray:function(e){return ar(e,function(n){return n})||[]},only:function(e){if(!no(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=at;L.Fragment=Rc;L.Profiler=Pc;L.PureComponent=qi;L.StrictMode=zc;L.Suspense=Oc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc;L.act=wu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hu({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=eo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)gu.call(n,u)&&!_u.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:bt,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Lc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tc,_context:e},e.Consumer=e};L.createElement=xu;L.createFactory=function(e){var n=xu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Dc,render:e}};L.isValidElement=no;L.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Uc}};L.memo=function(e,n){return{$$typeof:jc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=n}};L.unstable_act=wu;L.useCallback=function(e,n){return ce.current.useCallback(e,n)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,n){return ce.current.useEffect(e,n)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ce.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";pu.exports=L;var q=pu.exports;const $c=Ec(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=q,Hc=Symbol.for("react.element"),Kc=Symbol.for("react.fragment"),Wc=Object.prototype.hasOwnProperty,Qc=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yc={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Wc.call(n,r)&&!Yc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Hc,type:e,key:i,ref:o,props:l,_owner:Qc.current}}fl.Fragment=Kc;fl.jsx=Su;fl.jsxs=Su;du.exports=fl;var S=du.exports,ii={},ku={exports:{}},we={},Cu={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var T=C.length;C.push(P);e:for(;0<T;){var W=T-1>>>1,Z=C[W];if(0<l(Z,P))C[W]=P,C[T]=Z,T=W;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],T=C.pop();if(T!==P){C[0]=T;e:for(var W=0,Z=C.length,sr=Z>>>1;W<sr;){var wn=2*(W+1)-1,Pl=C[wn],Sn=wn+1,ur=C[Sn];if(0>l(Pl,T))Sn<Z&&0>l(ur,Pl)?(C[W]=ur,C[Sn]=T,W=Sn):(C[W]=Pl,C[wn]=T,W=wn);else if(Sn<Z&&0>l(ur,T))C[W]=ur,C[Sn]=T,W=Sn;else break e}}return P}function l(C,P){var T=C.sortIndex-P.sortIndex;return T!==0?T:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],h=1,m=null,p=3,v=!1,_=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var P=t(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(c)}}function y(C){if(w=!1,d(C),!_)if(t(u)!==null)_=!0,Rl(x);else{var P=t(c);P!==null&&zl(y,P.startTime-C)}}function x(C,P){_=!1,w&&(w=!1,f(R),R=-1),v=!0;var T=p;try{for(d(P),m=t(u);m!==null&&(!(m.expirationTime>P)||C&&!B());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var Z=W(m.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(u)&&r(u),d(P)}else r(u);m=t(u)}if(m!==null)var sr=!0;else{var wn=t(c);wn!==null&&zl(y,wn.startTime-P),sr=!1}return sr}finally{m=null,p=T,v=!1}}var E=!1,N=null,R=-1,j=5,z=-1;function B(){return!(e.unstable_now()-z<j)}function Te(){if(N!==null){var C=e.unstable_now();z=C;var P=!0;try{P=N(!0,C)}finally{P?be():(E=!1,N=null)}}else E=!1}var be;if(typeof a=="function")be=function(){a(Te)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,or=dt.port2;dt.port1.onmessage=Te,be=function(){or.postMessage(null)}}else be=function(){D(Te,0)};function Rl(C){N=C,E||(E=!0,be())}function zl(C,P){R=D(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,Rl(x))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return C()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=p;p=C;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(C,P,T){var W=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?W+T:W):T=W,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,C={id:h++,callback:P,priorityLevel:C,startTime:T,expirationTime:Z,sortIndex:-1},T>W?(C.sortIndex=T,n(c,C),t(u)===null&&C===t(c)&&(w?(f(R),R=-1):w=!0,zl(y,T-W))):(C.sortIndex=Z,n(u,C),_||v||(_=!0,Rl(x))),C},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(C){var P=p;return function(){var T=p;p=P;try{return C.apply(this,arguments)}finally{p=T}}}})(Eu);Cu.exports=Eu;var Gc=Cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=q,xe=Gc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nu=new Set,It={};function An(e,n){tt(e,n),tt(e+"Capture",n)}function tt(e,n){for(It[e]=n,e=0;e<n.length;e++)Nu.add(n[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,Zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zo={},Jo={};function Jc(e){return oi.call(Jo,e)?!0:oi.call(Zo,e)?!1:Zc.test(e)?Jo[e]=!0:(Zo[e]=!0,!1)}function qc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bc(e,n,t,r){if(n===null||typeof n>"u"||qc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(to,ro);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(to,ro);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(to,ro);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function lo(e,n,t,r){var l=re.hasOwnProperty(n)?re[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(bc(n,t,l,r)&&(t=null),r||l===null?Jc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qe=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),io=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Ru=Symbol.for("react.provider"),zu=Symbol.for("react.context"),oo=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),so=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Pu=Symbol.for("react.offscreen"),qo=Symbol.iterator;function pt(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ll;function kt(e){if(Ll===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ll=n&&n[1]||""}return`
`+Ll+e}var Dl=!1;function Ol(e,n){if(!e||Dl)return"";Dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kt(e):""}function ef(e){switch(e.tag){case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Fn:return"Portal";case si:return"Profiler";case io:return"StrictMode";case ui:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case Ru:return(e._context.displayName||"Context")+".Provider";case oo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case so:return n=e.displayName||null,n!==null?n:ci(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return ci(e(n))}catch{}}return null}function nf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(n);case 8:return n===io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tf(e){var n=Tu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fr(e){e._valueTracker||(e._valueTracker=tf(e))}function Lu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Tu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function bo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Du(e,n){n=n.checked,n!=null&&lo(e,"checked",n,!1)}function di(e,n){Du(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?pi(e,n.type,t):n.hasOwnProperty("defaultValue")&&pi(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function es(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function pi(e,n,t){(n!=="number"||$r(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ct=Array.isArray;function Zn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function mi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ns(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(Ct(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function Ou(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){rf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function Iu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function Mu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Iu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var lf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,n){if(n){if(lf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function yi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Jn=null,qn=null;function rs(e){if(e=tr(e)){if(typeof _i!="function")throw Error(g(280));var n=e.stateNode;n&&(n=vl(n),_i(e.stateNode,e.type,n))}}function Fu(e){Jn?qn?qn.push(e):qn=[e]:Jn=e}function Uu(){if(Jn){var e=Jn,n=qn;if(qn=Jn=null,rs(e),n)for(e=0;e<n.length;e++)rs(n[e])}}function Bu(e,n){return e(n)}function $u(){}var jl=!1;function Vu(e,n,t){if(jl)return e(n,t);jl=!0;try{return Bu(e,n,t)}finally{jl=!1,(Jn!==null||qn!==null)&&($u(),Uu())}}function Ft(e,n){var t=e.stateNode;if(t===null)return null;var r=vl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var xi=!1;if(Ge)try{var mt={};Object.defineProperty(mt,"passive",{get:function(){xi=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch{xi=!1}function of(e,n,t,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var zt=!1,Vr=null,Hr=!1,wi=null,sf={onError:function(e){zt=!0,Vr=e}};function uf(e,n,t,r,l,i,o,s,u){zt=!1,Vr=null,of.apply(sf,arguments)}function af(e,n,t,r,l,i,o,s,u){if(uf.apply(this,arguments),zt){if(zt){var c=Vr;zt=!1,Vr=null}else throw Error(g(198));Hr||(Hr=!0,wi=c)}}function In(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ls(e){if(In(e)!==e)throw Error(g(188))}function cf(e){var n=e.alternate;if(!n){if(n=In(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return ls(l),e;if(i===r)return ls(l),n;i=i.sibling}throw Error(g(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Ku(e){return e=cf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wu(e);if(n!==null)return n;e=e.sibling}return null}var Qu=xe.unstable_scheduleCallback,is=xe.unstable_cancelCallback,ff=xe.unstable_shouldYield,df=xe.unstable_requestPaint,Q=xe.unstable_now,pf=xe.unstable_getCurrentPriorityLevel,ao=xe.unstable_ImmediatePriority,Yu=xe.unstable_UserBlockingPriority,Kr=xe.unstable_NormalPriority,mf=xe.unstable_LowPriority,Gu=xe.unstable_IdlePriority,dl=null,$e=null;function hf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:gf,vf=Math.log,yf=Math.LN2;function gf(e){return e>>>=0,e===0?32:31-(vf(e)/yf|0)|0}var pr=64,mr=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=Et(s):(i&=o,i!==0&&(r=Et(i)))}else o=t&~l,o!==0?r=Et(o):i!==0&&(r=Et(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),l=1<<t,r|=e[t],n&=~l;return r}function _f(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ae(i),s=1<<o,u=l[o];u===-1?(!(s&t)||s&r)&&(l[o]=_f(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xu(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Al(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function wf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ae(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function co(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var A=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ju,fo,qu,bu,ea,ki=!1,hr=[],un=null,an=null,cn=null,Ut=new Map,Bt=new Map,rn=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function os(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Ut.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(n.pointerId)}}function ht(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=tr(n),n!==null&&fo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function kf(e,n,t,r,l){switch(n){case"focusin":return un=ht(un,e,n,t,r,l),!0;case"dragenter":return an=ht(an,e,n,t,r,l),!0;case"mouseover":return cn=ht(cn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Ut.set(i,ht(Ut.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bt.set(i,ht(Bt.get(i)||null,e,n,t,r,l)),!0}return!1}function na(e){var n=En(e.target);if(n!==null){var t=In(n);if(t!==null){if(n=t.tag,n===13){if(n=Hu(t),n!==null){e.blockedOn=n,ea(e.priority,function(){qu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ci(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gi=r,t.target.dispatchEvent(r),gi=null}else return n=tr(t),n!==null&&fo(n),e.blockedOn=t,!1;n.shift()}return!0}function ss(e,n,t){Tr(e)&&t.delete(n)}function Cf(){ki=!1,un!==null&&Tr(un)&&(un=null),an!==null&&Tr(an)&&(an=null),cn!==null&&Tr(cn)&&(cn=null),Ut.forEach(ss),Bt.forEach(ss)}function vt(e,n){e.blockedOn===n&&(e.blockedOn=null,ki||(ki=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Cf)))}function $t(e){function n(l){return vt(l,e)}if(0<hr.length){vt(hr[0],e);for(var t=1;t<hr.length;t++){var r=hr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&vt(un,e),an!==null&&vt(an,e),cn!==null&&vt(cn,e),Ut.forEach(n),Bt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)na(t),t.blockedOn===null&&rn.shift()}var bn=qe.ReactCurrentBatchConfig,Qr=!0;function Ef(e,n,t,r){var l=A,i=bn.transition;bn.transition=null;try{A=1,po(e,n,t,r)}finally{A=l,bn.transition=i}}function Nf(e,n,t,r){var l=A,i=bn.transition;bn.transition=null;try{A=4,po(e,n,t,r)}finally{A=l,bn.transition=i}}function po(e,n,t,r){if(Qr){var l=Ci(e,n,t,r);if(l===null)Wl(e,n,r,Yr,t),os(e,r);else if(kf(l,e,n,t,r))r.stopPropagation();else if(os(e,r),n&4&&-1<Sf.indexOf(e)){for(;l!==null;){var i=tr(l);if(i!==null&&Ju(i),i=Ci(e,n,t,r),i===null&&Wl(e,n,r,Yr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Wl(e,n,r,null,t)}}var Yr=null;function Ci(e,n,t,r){if(Yr=null,e=uo(r),e=En(e),e!==null)if(n=In(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function ta(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case ao:return 1;case Yu:return 4;case Kr:case mf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var on=null,mo=null,Lr=null;function ra(){if(Lr)return Lr;var e,n=mo,t=n.length,r,l="value"in on?on.value:on.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Lr=l.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function us(){return!1}function Se(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vr:us,this.isPropagationStopped=us,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),n}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Se(ct),nr=H({},ct,{view:0,detail:0}),Rf=Se(nr),Il,Ml,yt,pl=H({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yt&&(yt&&e.type==="mousemove"?(Il=e.screenX-yt.screenX,Ml=e.screenY-yt.screenY):Ml=Il=0,yt=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),as=Se(pl),zf=H({},pl,{dataTransfer:0}),Pf=Se(zf),Tf=H({},nr,{relatedTarget:0}),Fl=Se(Tf),Lf=H({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=Se(Lf),Of=H({},ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=Se(Of),Af=H({},ct,{data:0}),cs=Se(Af),If={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ff[e])?!!n[e]:!1}function vo(){return Uf}var Bf=H({},nr,{key:function(e){if(e.key){var n=If[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$f=Se(Bf),Vf=H({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fs=Se(Vf),Hf=H({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),Kf=Se(Hf),Wf=H({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=Se(Wf),Yf=H({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Se(Yf),Xf=[9,13,27,32],yo=Ge&&"CompositionEvent"in window,Pt=null;Ge&&"documentMode"in document&&(Pt=document.documentMode);var Zf=Ge&&"TextEvent"in window&&!Pt,la=Ge&&(!yo||Pt&&8<Pt&&11>=Pt),ds=" ",ps=!1;function ia(e,n){switch(e){case"keyup":return Xf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function Jf(e,n){switch(e){case"compositionend":return oa(n);case"keypress":return n.which!==32?null:(ps=!0,ds);case"textInput":return e=n.data,e===ds&&ps?null:e;default:return null}}function qf(e,n){if(Bn)return e==="compositionend"||!yo&&ia(e,n)?(e=ra(),Lr=mo=on=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return la&&n.locale!=="ko"?null:n.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bf[e.type]:n==="textarea"}function sa(e,n,t,r){Fu(r),n=Gr(n,"onChange"),0<n.length&&(t=new ho("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Tt=null,Vt=null;function ed(e){ga(e,0)}function ml(e){var n=Hn(e);if(Lu(n))return e}function nd(e,n){if(e==="change")return n}var ua=!1;if(Ge){var Ul;if(Ge){var Bl="oninput"in document;if(!Bl){var hs=document.createElement("div");hs.setAttribute("oninput","return;"),Bl=typeof hs.oninput=="function"}Ul=Bl}else Ul=!1;ua=Ul&&(!document.documentMode||9<document.documentMode)}function vs(){Tt&&(Tt.detachEvent("onpropertychange",aa),Vt=Tt=null)}function aa(e){if(e.propertyName==="value"&&ml(Vt)){var n=[];sa(n,Vt,e,uo(e)),Vu(ed,n)}}function td(e,n,t){e==="focusin"?(vs(),Tt=n,Vt=t,Tt.attachEvent("onpropertychange",aa)):e==="focusout"&&vs()}function rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Vt)}function ld(e,n){if(e==="click")return ml(n)}function id(e,n){if(e==="input"||e==="change")return ml(n)}function od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:od;function Ht(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!oi.call(n,l)||!Me(e[l],n[l]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,n){var t=ys(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ys(t)}}function ca(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ca(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fa(){for(var e=window,n=$r();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$r(e.document)}return n}function go(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sd(e){var n=fa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ca(t.ownerDocument.documentElement,t)){if(r!==null&&go(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=gs(t,i);var o=gs(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ud=Ge&&"documentMode"in document&&11>=document.documentMode,$n=null,Ei=null,Lt=null,Ni=!1;function _s(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ni||$n==null||$n!==$r(r)||(r=$n,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lt&&Ht(Lt,r)||(Lt=r,r=Gr(Ei,"onSelect"),0<r.length&&(n=new ho("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$n)))}function yr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vn={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},$l={},da={};Ge&&(da=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function hl(e){if($l[e])return $l[e];if(!Vn[e])return e;var n=Vn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in da)return $l[e]=n[t];return e}var pa=hl("animationend"),ma=hl("animationiteration"),ha=hl("animationstart"),va=hl("transitionend"),ya=new Map,xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,n){ya.set(e,n),An(n,[e])}for(var Vl=0;Vl<xs.length;Vl++){var Hl=xs[Vl],ad=Hl.toLowerCase(),cd=Hl[0].toUpperCase()+Hl.slice(1);gn(ad,"on"+cd)}gn(pa,"onAnimationEnd");gn(ma,"onAnimationIteration");gn(ha,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(va,"onTransitionEnd");tt("onMouseEnter",["mouseout","mouseover"]);tt("onMouseLeave",["mouseout","mouseover"]);tt("onPointerEnter",["pointerout","pointerover"]);tt("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function ws(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,af(r,n,void 0,e),e.currentTarget=null}function ga(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ws(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ws(l,s,c),i=u}}}if(Hr)throw e=wi,Hr=!1,wi=null,e}function M(e,n){var t=n[Li];t===void 0&&(t=n[Li]=new Set);var r=e+"__bubble";t.has(r)||(_a(n,e,2,!1),t.add(r))}function Kl(e,n,t){var r=0;n&&(r|=4),_a(t,e,r,n)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[gr]){e[gr]=!0,Nu.forEach(function(t){t!=="selectionchange"&&(fd.has(t)||Kl(t,!1,e),Kl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gr]||(n[gr]=!0,Kl("selectionchange",!1,n))}}function _a(e,n,t,r){switch(ta(n)){case 1:var l=Ef;break;case 4:l=Nf;break;default:l=po}t=l.bind(null,n,t,e),l=void 0,!xi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Wl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=En(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Vu(function(){var c=i,h=uo(t),m=[];e:{var p=ya.get(e);if(p!==void 0){var v=ho,_=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":v=$f;break;case"focusin":_="focus",v=Fl;break;case"focusout":_="blur",v=Fl;break;case"beforeblur":case"afterblur":v=Fl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kf;break;case pa:case ma:case ha:v=Df;break;case va:v=Qf;break;case"scroll":v=Rf;break;case"wheel":v=Gf;break;case"copy":case"cut":case"paste":v=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fs}var w=(n&4)!==0,D=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var a=c,d;a!==null;){d=a;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Ft(a,f),y!=null&&w.push(Wt(a,y,d)))),D)break;a=a.return}0<w.length&&(p=new v(p,_,null,t,h),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==gi&&(_=t.relatedTarget||t.fromElement)&&(En(_)||_[Xe]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(_=t.relatedTarget||t.toElement,v=c,_=_?En(_):null,_!==null&&(D=In(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(w=as,y="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=fs,y="onPointerLeave",f="onPointerEnter",a="pointer"),D=v==null?p:Hn(v),d=_==null?p:Hn(_),p=new w(y,a+"leave",v,t,h),p.target=D,p.relatedTarget=d,y=null,En(h)===c&&(w=new w(f,a+"enter",_,t,h),w.target=d,w.relatedTarget=D,y=w),D=y,v&&_)n:{for(w=v,f=_,a=0,d=w;d;d=Mn(d))a++;for(d=0,y=f;y;y=Mn(y))d++;for(;0<a-d;)w=Mn(w),a--;for(;0<d-a;)f=Mn(f),d--;for(;a--;){if(w===f||f!==null&&w===f.alternate)break n;w=Mn(w),f=Mn(f)}w=null}else w=null;v!==null&&Ss(m,p,v,w,!1),_!==null&&D!==null&&Ss(m,D,_,w,!0)}}e:{if(p=c?Hn(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var x=nd;else if(ms(p))if(ua)x=id;else{x=rd;var E=td}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=ld);if(x&&(x=x(e,c))){sa(m,x,t,h);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&pi(p,"number",p.value)}switch(E=c?Hn(c):window,e){case"focusin":(ms(E)||E.contentEditable==="true")&&($n=E,Ei=c,Lt=null);break;case"focusout":Lt=Ei=$n=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,_s(m,t,h);break;case"selectionchange":if(ud)break;case"keydown":case"keyup":_s(m,t,h)}var N;if(yo)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Bn?ia(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(la&&t.locale!=="ko"&&(Bn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Bn&&(N=ra()):(on=h,mo="value"in on?on.value:on.textContent,Bn=!0)),E=Gr(c,R),0<E.length&&(R=new cs(R,e,null,t,h),m.push({event:R,listeners:E}),N?R.data=N:(N=oa(t),N!==null&&(R.data=N)))),(N=Zf?Jf(e,t):qf(e,t))&&(c=Gr(c,"onBeforeInput"),0<c.length&&(h=new cs("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=N))}ga(m,n)})}function Wt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Gr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ft(e,t),i!=null&&r.unshift(Wt(e,i,l)),i=Ft(e,n),i!=null&&r.push(Wt(e,i,l))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Ft(t,i),u!=null&&o.unshift(Wt(t,u,s))):l||(u=Ft(t,i),u!=null&&o.push(Wt(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var dd=/\r\n?/g,pd=/\u0000|\uFFFD/g;function ks(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(pd,"")}function _r(e,n,t){if(n=ks(n),ks(e)!==n&&t)throw Error(g(425))}function Xr(){}var Ri=null,zi=null;function Pi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,md=typeof clearTimeout=="function"?clearTimeout:void 0,Cs=typeof Promise=="function"?Promise:void 0,hd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cs<"u"?function(e){return Cs.resolve(null).then(e).catch(vd)}:Ti;function vd(e){setTimeout(function(){throw e})}function Ql(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);$t(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ft=Math.random().toString(36).slice(2),Be="__reactFiber$"+ft,Qt="__reactProps$"+ft,Xe="__reactContainer$"+ft,Li="__reactEvents$"+ft,yd="__reactListeners$"+ft,gd="__reactHandles$"+ft;function En(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Es(e);e!==null;){if(t=e[Be])return t;e=Es(e)}return n}e=t,t=e.parentNode}return null}function tr(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function vl(e){return e[Qt]||null}var Di=[],Kn=-1;function _n(e){return{current:e}}function F(e){0>Kn||(e.current=Di[Kn],Di[Kn]=null,Kn--)}function I(e,n){Kn++,Di[Kn]=e.current,e.current=n}var yn={},se=_n(yn),me=_n(!1),Tn=yn;function rt(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Zr(){F(me),F(se)}function Ns(e,n,t){if(se.current!==yn)throw Error(g(168));I(se,n),I(me,t)}function xa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(g(108,nf(e)||"Unknown",l));return H({},t,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Tn=se.current,I(se,e),I(me,me.current),!0}function Rs(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=xa(e,n,Tn),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(se),I(se,e)):F(me),I(me,t)}var Ke=null,yl=!1,Yl=!1;function wa(e){Ke===null?Ke=[e]:Ke.push(e)}function _d(e){yl=!0,wa(e)}function xn(){if(!Yl&&Ke!==null){Yl=!0;var e=0,n=A;try{var t=Ke;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ke=null,yl=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),Qu(ao,xn),l}finally{A=n,Yl=!1}}return null}var Wn=[],Qn=0,qr=null,br=0,ke=[],Ce=0,Ln=null,We=1,Qe="";function kn(e,n){Wn[Qn++]=br,Wn[Qn++]=qr,qr=e,br=n}function Sa(e,n,t){ke[Ce++]=We,ke[Ce++]=Qe,ke[Ce++]=Ln,Ln=e;var r=We;e=Qe;var l=32-Ae(r)-1;r&=~(1<<l),t+=1;var i=32-Ae(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Ae(n)+l|t<<l|r,Qe=i+e}else We=1<<i|t<<l|r,Qe=e}function _o(e){e.return!==null&&(kn(e,1),Sa(e,1,0))}function xo(e){for(;e===qr;)qr=Wn[--Qn],Wn[Qn]=null,br=Wn[--Qn],Wn[Qn]=null;for(;e===Ln;)Ln=ke[--Ce],ke[Ce]=null,Qe=ke[--Ce],ke[Ce]=null,We=ke[--Ce],ke[Ce]=null}var _e=null,ge=null,U=!1,je=null;function ka(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,ge=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:We,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,ge=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ji(e){if(U){var n=ge;if(n){var t=n;if(!zs(e,n)){if(Oi(e))throw Error(g(418));n=fn(t.nextSibling);var r=_e;n&&zs(e,n)?ka(r,t):(e.flags=e.flags&-4097|2,U=!1,_e=e)}}else{if(Oi(e))throw Error(g(418));e.flags=e.flags&-4097|2,U=!1,_e=e}}}function Ps(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function xr(e){if(e!==_e)return!1;if(!U)return Ps(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Pi(e.type,e.memoizedProps)),n&&(n=ge)){if(Oi(e))throw Ca(),Error(g(418));for(;n;)ka(e,n),n=fn(n.nextSibling)}if(Ps(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ge=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ge=null}}else ge=_e?fn(e.stateNode.nextSibling):null;return!0}function Ca(){for(var e=ge;e;)e=fn(e.nextSibling)}function lt(){ge=_e=null,U=!1}function wo(e){je===null?je=[e]:je.push(e)}var xd=qe.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function wr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ts(e){var n=e._init;return n(e._payload)}function Ea(e){function n(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function t(f,a){if(!e)return null;for(;a!==null;)n(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=hn(f,a),f.index=0,f.sibling=null,f}function i(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,a,d,y){return a===null||a.tag!==6?(a=ei(d,f.mode,y),a.return=f,a):(a=l(a,d),a.return=f,a)}function u(f,a,d,y){var x=d.type;return x===Un?h(f,a,d.props.children,y,d.key):a!==null&&(a.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nn&&Ts(x)===a.type)?(y=l(a,d.props),y.ref=gt(f,a,d),y.return=f,y):(y=Ur(d.type,d.key,d.props,null,f.mode,y),y.ref=gt(f,a,d),y.return=f,y)}function c(f,a,d,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=ni(d,f.mode,y),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function h(f,a,d,y,x){return a===null||a.tag!==7?(a=Pn(d,f.mode,y,x),a.return=f,a):(a=l(a,d),a.return=f,a)}function m(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=ei(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case cr:return d=Ur(a.type,a.key,a.props,null,f.mode,d),d.ref=gt(f,null,a),d.return=f,d;case Fn:return a=ni(a,f.mode,d),a.return=f,a;case nn:var y=a._init;return m(f,y(a._payload),d)}if(Ct(a)||pt(a))return a=Pn(a,f.mode,d,null),a.return=f,a;wr(f,a)}return null}function p(f,a,d,y){var x=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:s(f,a,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case cr:return d.key===x?u(f,a,d,y):null;case Fn:return d.key===x?c(f,a,d,y):null;case nn:return x=d._init,p(f,a,x(d._payload),y)}if(Ct(d)||pt(d))return x!==null?null:h(f,a,d,y,null);wr(f,d)}return null}function v(f,a,d,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,s(a,f,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cr:return f=f.get(y.key===null?d:y.key)||null,u(a,f,y,x);case Fn:return f=f.get(y.key===null?d:y.key)||null,c(a,f,y,x);case nn:var E=y._init;return v(f,a,d,E(y._payload),x)}if(Ct(y)||pt(y))return f=f.get(d)||null,h(a,f,y,x,null);wr(a,y)}return null}function _(f,a,d,y){for(var x=null,E=null,N=a,R=a=0,j=null;N!==null&&R<d.length;R++){N.index>R?(j=N,N=null):j=N.sibling;var z=p(f,N,d[R],y);if(z===null){N===null&&(N=j);break}e&&N&&z.alternate===null&&n(f,N),a=i(z,a,R),E===null?x=z:E.sibling=z,E=z,N=j}if(R===d.length)return t(f,N),U&&kn(f,R),x;if(N===null){for(;R<d.length;R++)N=m(f,d[R],y),N!==null&&(a=i(N,a,R),E===null?x=N:E.sibling=N,E=N);return U&&kn(f,R),x}for(N=r(f,N);R<d.length;R++)j=v(N,f,R,d[R],y),j!==null&&(e&&j.alternate!==null&&N.delete(j.key===null?R:j.key),a=i(j,a,R),E===null?x=j:E.sibling=j,E=j);return e&&N.forEach(function(B){return n(f,B)}),U&&kn(f,R),x}function w(f,a,d,y){var x=pt(d);if(typeof x!="function")throw Error(g(150));if(d=x.call(d),d==null)throw Error(g(151));for(var E=x=null,N=a,R=a=0,j=null,z=d.next();N!==null&&!z.done;R++,z=d.next()){N.index>R?(j=N,N=null):j=N.sibling;var B=p(f,N,z.value,y);if(B===null){N===null&&(N=j);break}e&&N&&B.alternate===null&&n(f,N),a=i(B,a,R),E===null?x=B:E.sibling=B,E=B,N=j}if(z.done)return t(f,N),U&&kn(f,R),x;if(N===null){for(;!z.done;R++,z=d.next())z=m(f,z.value,y),z!==null&&(a=i(z,a,R),E===null?x=z:E.sibling=z,E=z);return U&&kn(f,R),x}for(N=r(f,N);!z.done;R++,z=d.next())z=v(N,f,R,z.value,y),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?R:z.key),a=i(z,a,R),E===null?x=z:E.sibling=z,E=z);return e&&N.forEach(function(Te){return n(f,Te)}),U&&kn(f,R),x}function D(f,a,d,y){if(typeof d=="object"&&d!==null&&d.type===Un&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case cr:e:{for(var x=d.key,E=a;E!==null;){if(E.key===x){if(x=d.type,x===Un){if(E.tag===7){t(f,E.sibling),a=l(E,d.props.children),a.return=f,f=a;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nn&&Ts(x)===E.type){t(f,E.sibling),a=l(E,d.props),a.ref=gt(f,E,d),a.return=f,f=a;break e}t(f,E);break}else n(f,E);E=E.sibling}d.type===Un?(a=Pn(d.props.children,f.mode,y,d.key),a.return=f,f=a):(y=Ur(d.type,d.key,d.props,null,f.mode,y),y.ref=gt(f,a,d),y.return=f,f=y)}return o(f);case Fn:e:{for(E=d.key;a!==null;){if(a.key===E)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{t(f,a);break}else n(f,a);a=a.sibling}a=ni(d,f.mode,y),a.return=f,f=a}return o(f);case nn:return E=d._init,D(f,a,E(d._payload),y)}if(Ct(d))return _(f,a,d,y);if(pt(d))return w(f,a,d,y);wr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(f,a.sibling),a=l(a,d),a.return=f,f=a):(t(f,a),a=ei(d,f.mode,y),a.return=f,f=a),o(f)):t(f,a)}return D}var it=Ea(!0),Na=Ea(!1),el=_n(null),nl=null,Yn=null,So=null;function ko(){So=Yn=nl=null}function Co(e){var n=el.current;F(el),e._currentValue=n}function Ai(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function et(e,n){nl=e,So=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:n,next:null},Yn===null){if(nl===null)throw Error(g(308));Yn=e,nl.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return n}var Nn=null;function Eo(e){Nn===null?Nn=[e]:Nn.push(e)}function Ra(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Eo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function za(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ze(e,t)}return l=r.interleaved,l===null?(n.next=n,Eo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ze(e,t)}function Or(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,co(e,t)}}function Ls(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function tl(e,n,t,r){var l=e.updateQueue;tn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,h=c=u=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,w=s;switch(p=n,v=t,w.tag){case 1:if(_=w.payload,typeof _=="function"){m=_.call(v,m,p);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,p=typeof _=="function"?_.call(v,m,p):_,p==null)break e;m=H({},m,p);break e;case 2:tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=v,u=m):h=h.next=v,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);On|=o,e.lanes=o,e.memoizedState=m}}function Ds(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var rr={},Ve=_n(rr),Yt=_n(rr),Gt=_n(rr);function Rn(e){if(e===rr)throw Error(g(174));return e}function Ro(e,n){switch(I(Gt,n),I(Yt,e),I(Ve,rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=hi(n,e)}F(Ve),I(Ve,n)}function ot(){F(Ve),F(Yt),F(Gt)}function Pa(e){Rn(Gt.current);var n=Rn(Ve.current),t=hi(n,e.type);n!==t&&(I(Yt,e),I(Ve,t))}function zo(e){Yt.current===e&&(F(Ve),F(Yt))}var $=_n(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gl=[];function Po(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var jr=qe.ReactCurrentDispatcher,Xl=qe.ReactCurrentBatchConfig,Dn=0,V=null,G=null,b=null,ll=!1,Dt=!1,Xt=0,wd=0;function le(){throw Error(g(321))}function To(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Lo(e,n,t,r,l,i){if(Dn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jr.current=e===null||e.memoizedState===null?Ed:Nd,e=t(r,l),Dt){i=0;do{if(Dt=!1,Xt=0,25<=i)throw Error(g(301));i+=1,b=G=null,n.updateQueue=null,jr.current=Rd,e=t(r,l)}while(Dt)}if(jr.current=il,n=G!==null&&G.next!==null,Dn=0,b=G=V=null,ll=!1,n)throw Error(g(300));return e}function Do(){var e=Xt!==0;return Xt=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?V.memoizedState=b=e:b=b.next=e,b}function Pe(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=b===null?V.memoizedState:b.next;if(n!==null)b=n,G=e;else{if(e===null)throw Error(g(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},b===null?V.memoizedState=b=e:b=b.next=e}return b}function Zt(e,n){return typeof n=="function"?n(e):n}function Zl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var h=c.lane;if((Dn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,V.lanes|=h,On|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Me(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,On|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Jl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ta(){}function La(e,n){var t=V,r=Pe(),l=n(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Oo(ja.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,Jt(9,Oa.bind(null,t,r,l,n),void 0,null),ee===null)throw Error(g(349));Dn&30||Da(t,n,l)}return l}function Da(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Oa(e,n,t,r){n.value=t,n.getSnapshot=r,Aa(n)&&Ia(e)}function ja(e,n,t){return t(function(){Aa(n)&&Ia(e)})}function Aa(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Ia(e){var n=Ze(e,1);n!==null&&Ie(n,e,1,-1)}function Os(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},n.queue=e,e=e.dispatch=Cd.bind(null,V,e),[n.memoizedState,e]}function Jt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ma(){return Pe().memoizedState}function Ar(e,n,t,r){var l=Ue();V.flags|=e,l.memoizedState=Jt(1|n,t,void 0,r===void 0?null:r)}function gl(e,n,t,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&To(r,o.deps)){l.memoizedState=Jt(n,t,i,r);return}}V.flags|=e,l.memoizedState=Jt(1|n,t,i,r)}function js(e,n){return Ar(8390656,8,e,n)}function Oo(e,n){return gl(2048,8,e,n)}function Fa(e,n){return gl(4,2,e,n)}function Ua(e,n){return gl(4,4,e,n)}function Ba(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $a(e,n,t){return t=t!=null?t.concat([e]):null,gl(4,4,Ba.bind(null,n,e),t)}function jo(){}function Va(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&To(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ha(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&To(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ka(e,n,t){return Dn&21?(Me(t,n)||(t=Xu(),V.lanes|=t,On|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Sd(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),n()}finally{A=t,Xl.transition=r}}function Wa(){return Pe().memoizedState}function kd(e,n,t){var r=mn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qa(e))Ya(n,t);else if(t=Ra(e,n,t,r),t!==null){var l=ae();Ie(t,e,r,l),Ga(t,n,r)}}function Cd(e,n,t){var r=mn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))Ya(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,Me(s,o)){var u=n.interleaved;u===null?(l.next=l,Eo(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=Ra(e,n,l,r),t!==null&&(l=ae(),Ie(t,e,r,l),Ga(t,n,r))}}function Qa(e){var n=e.alternate;return e===V||n!==null&&n===V}function Ya(e,n){Dt=ll=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ga(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,co(e,t)}}var il={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Ed={readContext:ze,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:js,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ar(4194308,4,Ba.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ar(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ar(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ue();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kd.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:Os,useDebugValue:jo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Os(!1),n=e[0];return e=Sd.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=Ue();if(U){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),ee===null)throw Error(g(349));Dn&30||Da(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,js(ja.bind(null,r,i,e),[e]),r.flags|=2048,Jt(9,Oa.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ue(),n=ee.identifierPrefix;if(U){var t=Qe,r=We;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nd={readContext:ze,useCallback:Va,useContext:ze,useEffect:Oo,useImperativeHandle:$a,useInsertionEffect:Fa,useLayoutEffect:Ua,useMemo:Ha,useReducer:Zl,useRef:Ma,useState:function(){return Zl(Zt)},useDebugValue:jo,useDeferredValue:function(e){var n=Pe();return Ka(n,G.memoizedState,e)},useTransition:function(){var e=Zl(Zt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Ta,useSyncExternalStore:La,useId:Wa,unstable_isNewReconciler:!1},Rd={readContext:ze,useCallback:Va,useContext:ze,useEffect:Oo,useImperativeHandle:$a,useInsertionEffect:Fa,useLayoutEffect:Ua,useMemo:Ha,useReducer:Jl,useRef:Ma,useState:function(){return Jl(Zt)},useDebugValue:jo,useDeferredValue:function(e){var n=Pe();return G===null?n.memoizedState=e:Ka(n,G.memoizedState,e)},useTransition:function(){var e=Jl(Zt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Ta,useSyncExternalStore:La,useId:Wa,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ii(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _l={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),l=mn(e),i=Ye(r,l);i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Ie(n,e,l,r),Or(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),l=mn(e),i=Ye(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=dn(e,i,l),n!==null&&(Ie(n,e,l,r),Or(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=mn(e),l=Ye(t,r);l.tag=2,n!=null&&(l.callback=n),n=dn(e,l,r),n!==null&&(Ie(n,e,r,t),Or(n,e,r))}};function As(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Ht(t,r)||!Ht(l,i):!0}function Xa(e,n,t){var r=!1,l=yn,i=n.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=he(n)?Tn:se.current,r=n.contextTypes,i=(r=r!=null)?rt(e,l):yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_l,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Is(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_l.enqueueReplaceState(n,n.state,null)}function Mi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},No(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=he(n)?Tn:se.current,l.context=rt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ii(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&_l.enqueueReplaceState(l,l.state,null),tl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function st(e,n){try{var t="",r=n;do t+=ef(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function ql(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Fi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var zd=typeof WeakMap=="function"?WeakMap:Map;function Za(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){sl||(sl=!0,Gi=r),Fi(e,n)},t}function Ja(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Fi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Fi(e,n),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ms(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new zd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Vd.bind(null,e,n,t),n.then(e,e))}function Fs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Us(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var Pd=qe.ReactCurrentOwner,pe=!1;function ue(e,n,t,r){n.child=e===null?Na(n,null,t,r):it(n,e.child,t,r)}function Bs(e,n,t,r,l){t=t.render;var i=n.ref;return et(n,l),r=Lo(e,n,t,r,i,l),t=Do(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(U&&t&&_o(n),n.flags|=1,ue(e,n,r,l),n.child)}function $s(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Vo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,qa(e,n,i,r,l)):(e=Ur(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ht,t(o,r)&&e.ref===n.ref)return Je(e,n,l)}return n.flags|=1,e=hn(i,r),e.ref=n.ref,e.return=n,n.child=e}function qa(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Ht(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Je(e,n,l)}return Ui(e,n,t,r,l)}function ba(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Xn,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(Xn,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,I(Xn,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,I(Xn,ye),ye|=r;return ue(e,n,l,t),n.child}function ec(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ui(e,n,t,r,l){var i=he(t)?Tn:se.current;return i=rt(n,i),et(n,l),t=Lo(e,n,t,r,i,l),r=Do(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(U&&r&&_o(n),n.flags|=1,ue(e,n,t,l),n.child)}function Vs(e,n,t,r,l){if(he(t)){var i=!0;Jr(n)}else i=!1;if(et(n,l),n.stateNode===null)Ir(e,n),Xa(n,t,r),Mi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=he(t)?Tn:se.current,c=rt(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Is(n,o,r,c),tn=!1;var p=n.memoizedState;o.state=p,tl(n,r,o,l),u=n.memoizedState,s!==r||p!==u||me.current||tn?(typeof h=="function"&&(Ii(n,t,h,r),u=n.memoizedState),(s=tn||As(n,t,s,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,za(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:De(n.type,s),o.props=c,m=n.pendingProps,p=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=he(t)?Tn:se.current,u=rt(n,u));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||p!==u)&&Is(n,o,r,u),tn=!1,p=n.memoizedState,o.state=p,tl(n,r,o,l);var _=n.memoizedState;s!==m||p!==_||me.current||tn?(typeof v=="function"&&(Ii(n,t,v,r),_=n.memoizedState),(c=tn||As(n,t,c,r,p,_,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),o.props=r,o.state=_,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Bi(e,n,t,r,i,l)}function Bi(e,n,t,r,l,i){ec(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Rs(n,t,!1),Je(e,n,i);r=n.stateNode,Pd.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=it(n,e.child,null,i),n.child=it(n,null,s,i)):ue(e,n,s,i),n.memoizedState=r.state,l&&Rs(n,t,!0),n.child}function nc(e){var n=e.stateNode;n.pendingContext?Ns(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ns(e,n.context,!1),Ro(e,n.containerInfo)}function Hs(e,n,t,r,l){return lt(),wo(l),n.flags|=256,ue(e,n,t,r),n.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,n,t){var r=n.pendingProps,l=$.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I($,l&1),e===null)return ji(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Sl(o,r,0,null),e=Pn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Vi(t),n.memoizedState=$i,e):Ao(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Td(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=hn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=hn(s,i):(i=Pn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Vi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=$i,r}return i=e.child,e=i.sibling,r=hn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ao(e,n){return n=Sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Sr(e,n,t,r){return r!==null&&wo(r),it(n,e.child,null,t),e=Ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Td(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=ql(Error(g(422))),Sr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Sl({mode:"visible",children:r.children},l,0,null),i=Pn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&it(n,e.child,null,o),n.child.memoizedState=Vi(o),n.memoizedState=$i,i);if(!(n.mode&1))return Sr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(g(419)),r=ql(i,r,void 0),Sr(e,n,o,r)}if(s=(o&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),Ie(r,e,l,-1))}return $o(),r=ql(Error(g(421))),Sr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Hd.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,ge=fn(l.nextSibling),_e=n,U=!0,je=null,e!==null&&(ke[Ce++]=We,ke[Ce++]=Qe,ke[Ce++]=Ln,We=e.id,Qe=e.overflow,Ln=n),n=Ao(n,r.children),n.flags|=4096,n)}function Ks(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ai(e.return,n,t)}function bl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function rc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,t,n);else if(e.tag===19)Ks(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I($,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&rl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),bl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&rl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}bl(n,!0,t,null,i);break;case"together":bl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ir(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),On|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ld(e,n,t){switch(n.tag){case 3:nc(n),lt();break;case 5:Pa(n);break;case 1:he(n.type)&&Jr(n);break;case 4:Ro(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;I(el,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I($,$.current&1),n.flags|=128,null):t&n.child.childLanes?tc(e,n,t):(I($,$.current&1),e=Je(e,n,t),e!==null?e.sibling:null);I($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return rc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,ba(e,n,t)}return Je(e,n,t)}var lc,Hi,ic,oc;lc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hi=function(){};ic=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Rn(Ve.current);var i=null;switch(t){case"input":l=fi(e,l),r=fi(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=mi(e,l),r=mi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}vi(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(It.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(It.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&M("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};oc=function(e,n,t,r){t!==r&&(n.flags|=4)};function _t(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Dd(e,n,t){var r=n.pendingProps;switch(xo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Zr(),ie(n),null;case 3:return r=n.stateNode,ot(),F(me),F(se),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(Ji(je),je=null))),Hi(e,n),ie(n),null;case 5:zo(n);var l=Rn(Gt.current);if(t=n.type,e!==null&&n.stateNode!=null)ic(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return ie(n),null}if(e=Rn(Ve.current),xr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Be]=n,r[Qt]=i,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<Nt.length;l++)M(Nt[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":bo(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":ns(r,i),M("invalid",r)}vi(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",""+s]):It.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&M("scroll",r)}switch(t){case"input":fr(r),es(r,i,!0);break;case"textarea":fr(r),ts(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Be]=n,e[Qt]=r,lc(e,n,!1,!1),n.stateNode=e;e:{switch(o=yi(t,r),t){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nt.length;l++)M(Nt[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":bo(e,r),l=fi(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),M("invalid",e);break;case"textarea":ns(e,r),l=mi(e,r),M("invalid",e);break;default:l=r}vi(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Mu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Au(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Mt(e,u):typeof u=="number"&&Mt(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(It.hasOwnProperty(i)?u!=null&&i==="onScroll"&&M("scroll",e):u!=null&&lo(e,i,u,o))}switch(t){case"input":fr(e),es(e,r,!1);break;case"textarea":fr(e),ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Xr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)oc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=Rn(Gt.current),Rn(Ve.current),xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:_r(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return ie(n),null;case 13:if(F($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ge!==null&&n.mode&1&&!(n.flags&128))Ca(),lt(),n.flags|=98560,i=!1;else if(i=xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Be]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else je!==null&&(Ji(je),je=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?X===0&&(X=3):$o())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ot(),Hi(e,n),e===null&&Kt(n.stateNode.containerInfo),ie(n),null;case 10:return Co(n.type._context),ie(n),null;case 17:return he(n.type)&&Zr(),ie(n),null;case 19:if(F($),i=n.memoizedState,i===null)return ie(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)_t(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=rl(e),o!==null){for(n.flags|=128,_t(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I($,$.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>ut&&(n.flags|=128,r=!0,_t(i,!1),n.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ie(n),null}else 2*Q()-i.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,r=!0,_t(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=$.current,I($,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Bo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function Od(e,n){switch(xo(n),n.tag){case 1:return he(n.type)&&Zr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ot(),F(me),F(se),Po(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zo(n),null;case 13:if(F($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F($),null;case 4:return ot(),null;case 10:return Co(n.type._context),null;case 22:case 23:return Bo(),null;case 24:return null;default:return null}}var kr=!1,oe=!1,jd=typeof WeakSet=="function"?WeakSet:Set,k=null;function Gn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function Ki(e,n,t){try{t()}catch(r){K(e,n,r)}}var Ws=!1;function Ad(e,n){if(Ri=Qr,e=fa(),go(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,c=0,h=0,m=e,p=null;n:for(;;){for(var v;m!==t||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break n;if(p===t&&++c===l&&(s=o),p===i&&++h===r&&(u=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(zi={focusedElem:e,selectionRange:t},Qr=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,D=_.memoizedState,f=n.stateNode,a=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:De(n.type,w),D);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){K(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return _=Ws,Ws=!1,_}function Ot(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ki(n,t,i)}l=l.next}while(l!==r)}}function xl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Wi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function sc(e){var n=e.alternate;n!==null&&(e.alternate=null,sc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[Qt],delete n[Li],delete n[yd],delete n[gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function Qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,n,t),e=e.sibling;e!==null;)Qi(e,n,t),e=e.sibling}function Yi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,n,t),e=e.sibling;e!==null;)Yi(e,n,t),e=e.sibling}var ne=null,Oe=!1;function en(e,n,t){for(t=t.child;t!==null;)ac(e,n,t),t=t.sibling}function ac(e,n,t){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(dl,t)}catch{}switch(t.tag){case 5:oe||Gn(t,n);case 6:var r=ne,l=Oe;ne=null,en(e,n,t),ne=r,Oe=l,ne!==null&&(Oe?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(Oe?(e=ne,t=t.stateNode,e.nodeType===8?Ql(e.parentNode,t):e.nodeType===1&&Ql(e,t),$t(e)):Ql(ne,t.stateNode));break;case 4:r=ne,l=Oe,ne=t.stateNode.containerInfo,Oe=!0,en(e,n,t),ne=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ki(t,n,o),l=l.next}while(l!==r)}en(e,n,t);break;case 1:if(!oe&&(Gn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){K(t,n,s)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,en(e,n,t),oe=r):en(e,n,t);break;default:en(e,n,t)}}function Ys(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new jd),n.forEach(function(r){var l=Kd.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Oe=!1;break e;case 3:ne=s.stateNode.containerInfo,Oe=!0;break e;case 4:ne=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ne===null)throw Error(g(160));ac(i,o,l),ne=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){K(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cc(n,e),n=n.sibling}function cc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),Fe(e),r&4){try{Ot(3,e,e.return),xl(3,e)}catch(w){K(e,e.return,w)}try{Ot(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Le(n,e),Fe(e),r&512&&t!==null&&Gn(t,t.return);break;case 5:if(Le(n,e),Fe(e),r&512&&t!==null&&Gn(t,t.return),e.flags&32){var l=e.stateNode;try{Mt(l,"")}catch(w){K(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Du(l,i),yi(s,o);var c=yi(s,i);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?Mu(l,m):h==="dangerouslySetInnerHTML"?Au(l,m):h==="children"?Mt(l,m):lo(l,h,m,c)}switch(s){case"input":di(l,i);break;case"textarea":Ou(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Zn(l,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?Zn(l,!!i.multiple,i.defaultValue,!0):Zn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qt]=i}catch(w){K(e,e.return,w)}}break;case 6:if(Le(n,e),Fe(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){K(e,e.return,w)}}break;case 3:if(Le(n,e),Fe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Le(n,e),Fe(e);break;case 13:Le(n,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=Q())),r&4&&Ys(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Le(n,e),oe=c):Le(n,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(m=k=h;k!==null;){switch(p=k,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ot(4,p,p.return);break;case 1:Gn(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(w){K(r,t,w)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){Xs(m);continue}}v!==null?(v.return=p,k=v):Xs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Iu("display",o))}catch(w){K(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){K(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(n,e),Fe(e),r&4&&Ys(e);break;case 21:break;default:Le(n,e),Fe(e)}}function Fe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(uc(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mt(l,""),r.flags&=-33);var i=Qs(e);Yi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Qs(e);Qi(e,s,o);break;default:throw Error(g(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Id(e,n,t){k=e,fc(e)}function fc(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||kr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=kr;var c=oe;if(kr=o,(oe=u)&&!c)for(k=l;k!==null;)o=k,u=o.child,o.tag===22&&o.memoizedState!==null?Zs(l):u!==null?(u.return=o,k=u):Zs(l);for(;i!==null;)k=i,fc(i),i=i.sibling;k=l,kr=s,oe=c}Gs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Gs(e)}}function Gs(e){for(;k!==null;){var n=k;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||xl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ds(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ds(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&$t(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}oe||n.flags&512&&Wi(n)}catch(p){K(n,n.return,p)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function Xs(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function Zs(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xl(4,n)}catch(u){K(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){K(n,l,u)}}var i=n.return;try{Wi(n)}catch(u){K(n,i,u)}break;case 5:var o=n.return;try{Wi(n)}catch(u){K(n,o,u)}}}catch(u){K(n,n.return,u)}if(n===e){k=null;break}var s=n.sibling;if(s!==null){s.return=n.return,k=s;break}k=n.return}}var Md=Math.ceil,ol=qe.ReactCurrentDispatcher,Io=qe.ReactCurrentOwner,Ne=qe.ReactCurrentBatchConfig,O=0,ee=null,Y=null,te=0,ye=0,Xn=_n(0),X=0,qt=null,On=0,wl=0,Mo=0,jt=null,de=null,Fo=0,ut=1/0,He=null,sl=!1,Gi=null,pn=null,Cr=!1,sn=null,ul=0,At=0,Xi=null,Mr=-1,Fr=0;function ae(){return O&6?Q():Mr!==-1?Mr:Mr=Q()}function mn(e){return e.mode&1?O&2&&te!==0?te&-te:xd.transition!==null?(Fr===0&&(Fr=Xu()),Fr):(e=A,e!==0||(e=window.event,e=e===void 0?16:ta(e.type)),e):1}function Ie(e,n,t,r){if(50<At)throw At=0,Xi=null,Error(g(185));er(e,t,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(wl|=t),X===4&&ln(e,te)),ve(e,r),t===1&&O===0&&!(n.mode&1)&&(ut=Q()+500,yl&&xn()))}function ve(e,n){var t=e.callbackNode;xf(e,n);var r=Wr(e,e===ee?te:0);if(r===0)t!==null&&is(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&is(t),n===1)e.tag===0?_d(Js.bind(null,e)):wa(Js.bind(null,e)),hd(function(){!(O&6)&&xn()}),t=null;else{switch(Zu(r)){case 1:t=ao;break;case 4:t=Yu;break;case 16:t=Kr;break;case 536870912:t=Gu;break;default:t=Kr}t=_c(t,dc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function dc(e,n){if(Mr=-1,Fr=0,O&6)throw Error(g(327));var t=e.callbackNode;if(nt()&&e.callbackNode!==t)return null;var r=Wr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var l=O;O|=2;var i=mc();(ee!==e||te!==n)&&(He=null,ut=Q()+500,zn(e,n));do try{Bd();break}catch(s){pc(e,s)}while(!0);ko(),ol.current=i,O=l,Y!==null?n=0:(ee=null,te=0,n=X)}if(n!==0){if(n===2&&(l=Si(e),l!==0&&(r=l,n=Zi(e,l))),n===1)throw t=qt,zn(e,0),ln(e,r),ve(e,Q()),t;if(n===6)ln(e,r);else{if(l=e.current.alternate,!(r&30)&&!Fd(l)&&(n=al(e,r),n===2&&(i=Si(e),i!==0&&(r=i,n=Zi(e,i))),n===1))throw t=qt,zn(e,0),ln(e,r),ve(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:Cn(e,de,He);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=Fo+500-Q(),10<n)){if(Wr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Cn.bind(null,e,de,He),n);break}Cn(e,de,He);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Ae(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Md(r/1960))-r,10<r){e.timeoutHandle=Ti(Cn.bind(null,e,de,He),r);break}Cn(e,de,He);break;case 5:Cn(e,de,He);break;default:throw Error(g(329))}}}return ve(e,Q()),e.callbackNode===t?dc.bind(null,e):null}function Zi(e,n){var t=jt;return e.current.memoizedState.isDehydrated&&(zn(e,n).flags|=256),e=al(e,n),e!==2&&(n=de,de=t,n!==null&&Ji(n)),e}function Ji(e){de===null?de=e:de.push.apply(de,e)}function Fd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~Mo,n&=~wl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function Js(e){if(O&6)throw Error(g(327));nt();var n=Wr(e,0);if(!(n&1))return ve(e,Q()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=Si(e);r!==0&&(n=r,t=Zi(e,r))}if(t===1)throw t=qt,zn(e,0),ln(e,n),ve(e,Q()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,de,He),ve(e,Q()),null}function Uo(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(ut=Q()+500,yl&&xn())}}function jn(e){sn!==null&&sn.tag===0&&!(O&6)&&nt();var n=O;O|=1;var t=Ne.transition,r=A;try{if(Ne.transition=null,A=1,e)return e()}finally{A=r,Ne.transition=t,O=n,!(O&6)&&xn()}}function Bo(){ye=Xn.current,F(Xn)}function zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,md(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(xo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:ot(),F(me),F(se),Po();break;case 5:zo(r);break;case 4:ot();break;case 13:F($);break;case 19:F($);break;case 10:Co(r.type._context);break;case 22:case 23:Bo()}t=t.return}if(ee=e,Y=e=hn(e.current,null),te=ye=n,X=0,qt=null,Mo=wl=On=0,de=jt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(t=Nn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Nn=null}return e}function pc(e,n){do{var t=Y;try{if(ko(),jr.current=il,ll){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(Dn=0,b=G=V=null,Dt=!1,Xt=0,Io.current=null,t===null||t.return===null){X=1,qt=n,Y=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Fs(o);if(v!==null){v.flags&=-257,Us(v,o,s,i,n),v.mode&1&&Ms(i,c,n),n=v,u=c;var _=n.updateQueue;if(_===null){var w=new Set;w.add(u),n.updateQueue=w}else _.add(u);break e}else{if(!(n&1)){Ms(i,c,n),$o();break e}u=Error(g(426))}}else if(U&&s.mode&1){var D=Fs(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Us(D,o,s,i,n),wo(st(u,s));break e}}i=u=st(u,s),X!==4&&(X=2),jt===null?jt=[i]:jt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=Za(i,u,n);Ls(i,f);break e;case 1:s=u;var a=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pn===null||!pn.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=Ja(i,s,n);Ls(i,y);break e}}i=i.return}while(i!==null)}vc(t)}catch(x){n=x,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function mc(){var e=ol.current;return ol.current=il,e===null?il:e}function $o(){(X===0||X===3||X===2)&&(X=4),ee===null||!(On&268435455)&&!(wl&268435455)||ln(ee,te)}function al(e,n){var t=O;O|=2;var r=mc();(ee!==e||te!==n)&&(He=null,zn(e,n));do try{Ud();break}catch(l){pc(e,l)}while(!0);if(ko(),O=t,ol.current=r,Y!==null)throw Error(g(261));return ee=null,te=0,X}function Ud(){for(;Y!==null;)hc(Y)}function Bd(){for(;Y!==null&&!ff();)hc(Y)}function hc(e){var n=gc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?vc(e):Y=n,Io.current=null}function vc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Od(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(t=Dd(t,n,ye),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);X===0&&(X=5)}function Cn(e,n,t){var r=A,l=Ne.transition;try{Ne.transition=null,A=1,$d(e,n,t,r)}finally{Ne.transition=l,A=r}return null}function $d(e,n,t,r){do nt();while(sn!==null);if(O&6)throw Error(g(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(wf(e,i),e===ee&&(Y=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cr||(Cr=!0,_c(Kr,function(){return nt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=A;A=1;var s=O;O|=4,Io.current=null,Ad(e,t),cc(t,e),sd(zi),Qr=!!Ri,zi=Ri=null,e.current=t,Id(t),df(),O=s,A=o,Ne.transition=i}else e.current=t;if(Cr&&(Cr=!1,sn=e,ul=l),i=e.pendingLanes,i===0&&(pn=null),hf(t.stateNode),ve(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(sl)throw sl=!1,e=Gi,Gi=null,e;return ul&1&&e.tag!==0&&nt(),i=e.pendingLanes,i&1?e===Xi?At++:(At=0,Xi=e):At=0,xn(),null}function nt(){if(sn!==null){var e=Zu(ul),n=Ne.transition,t=A;try{if(Ne.transition=null,A=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,ul=0,O&6)throw Error(g(331));var l=O;for(O|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Ot(8,h,i)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var p=h.sibling,v=h.return;if(sc(h),h===c){k=null;break}if(p!==null){p.return=v,k=p;break}k=v}}}var _=i.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ot(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,k=f;break e}k=i.return}}var a=e.current;for(k=a;k!==null;){o=k;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,k=d;else e:for(o=a;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xl(9,s)}}catch(x){K(s,s.return,x)}if(s===o){k=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,k=y;break e}k=s.return}}if(O=l,xn(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{A=t,Ne.transition=n}}return!1}function qs(e,n,t){n=st(t,n),n=Za(e,n,1),e=dn(e,n,1),n=ae(),e!==null&&(er(e,1,n),ve(e,n))}function K(e,n,t){if(e.tag===3)qs(e,e,t);else for(;n!==null;){if(n.tag===3){qs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=st(t,e),e=Ja(n,e,1),n=dn(n,e,1),e=ae(),n!==null&&(er(n,1,e),ve(n,e));break}}n=n.return}}function Vd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Fo?zn(e,0):Mo|=t),ve(e,n)}function yc(e,n){n===0&&(e.mode&1?(n=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):n=1);var t=ae();e=Ze(e,n),e!==null&&(er(e,n,t),ve(e,t))}function Hd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yc(e,t)}function Kd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),yc(e,t)}var gc;gc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,Ld(e,n,t);pe=!!(e.flags&131072)}else pe=!1,U&&n.flags&1048576&&Sa(n,br,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ir(e,n),e=n.pendingProps;var l=rt(n,se.current);et(n,t),l=Lo(null,n,r,e,l,t);var i=Do();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(i=!0,Jr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,No(n),l.updater=_l,n.stateNode=l,l._reactInternals=n,Mi(n,r,e,t),n=Bi(null,n,r,!0,i,t)):(n.tag=0,U&&i&&_o(n),ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ir(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Qd(r),e=De(r,e),l){case 0:n=Ui(null,n,r,e,t);break e;case 1:n=Vs(null,n,r,e,t);break e;case 11:n=Bs(null,n,r,e,t);break e;case 14:n=$s(null,n,r,De(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:De(r,l),Ui(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:De(r,l),Vs(e,n,r,l,t);case 3:e:{if(nc(n),e===null)throw Error(g(387));r=n.pendingProps,i=n.memoizedState,l=i.element,za(e,n),tl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=st(Error(g(423)),n),n=Hs(e,n,r,t,l);break e}else if(r!==l){l=st(Error(g(424)),n),n=Hs(e,n,r,t,l);break e}else for(ge=fn(n.stateNode.containerInfo.firstChild),_e=n,U=!0,je=null,t=Na(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),r===l){n=Je(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return Pa(n),e===null&&ji(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Pi(r,l)?o=null:i!==null&&Pi(r,i)&&(n.flags|=32),ec(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&ji(n),null;case 13:return tc(e,n,t);case 4:return Ro(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=it(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:De(r,l),Bs(e,n,r,l,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,I(el,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!me.current){n=Je(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Ai(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ai(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,et(n,t),l=ze(l),r=r(l),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,l=De(r,n.pendingProps),l=De(r.type,l),$s(e,n,r,l,t);case 15:return qa(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:De(r,l),Ir(e,n),n.tag=1,he(r)?(e=!0,Jr(n)):e=!1,et(n,t),Xa(n,r,l),Mi(n,r,l,t),Bi(null,n,r,!0,e,t);case 19:return rc(e,n,t);case 22:return ba(e,n,t)}throw Error(g(156,n.tag))};function _c(e,n){return Qu(e,n)}function Wd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new Wd(e,n,t,r)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qd(e){if(typeof e=="function")return Vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oo)return 11;if(e===so)return 14}return 2}function hn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ur(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Un:return Pn(t.children,l,i,n);case io:o=8,l|=8;break;case si:return e=Ee(12,t,n,l|2),e.elementType=si,e.lanes=i,e;case ui:return e=Ee(13,t,n,l),e.elementType=ui,e.lanes=i,e;case ai:return e=Ee(19,t,n,l),e.elementType=ai,e.lanes=i,e;case Pu:return Sl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ru:o=10;break e;case zu:o=9;break e;case oo:o=11;break e;case so:o=14;break e;case nn:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Ee(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Pn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function Sl(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=Pu,e.lanes=t,e.stateNode={isHidden:!1},e}function ei(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function ni(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ho(e,n,t,r,l,i,o,s,u){return e=new Yd(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ee(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(i),e}function Gd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function xc(e){if(!e)return yn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(he(t))return xa(e,t,n)}return n}function wc(e,n,t,r,l,i,o,s,u){return e=Ho(t,r,!0,e,l,i,o,s,u),e.context=xc(null),t=e.current,r=ae(),l=mn(t),i=Ye(r,l),i.callback=n??null,dn(t,i,l),e.current.lanes=l,er(e,l,r),ve(e,r),e}function kl(e,n,t,r){var l=n.current,i=ae(),o=mn(l);return t=xc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(l,n,o),e!==null&&(Ie(e,l,o,i),Or(e,l,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ko(e,n){bs(e,n),(e=e.alternate)&&bs(e,n)}function Xd(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wo(e){this._internalRoot=e}Cl.prototype.render=Wo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));kl(e,n,null,null)};Cl.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){kl(null,e,null,null)}),n[Xe]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=bu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&na(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function Zd(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=cl(o);i.call(c)}}var o=wc(n,r,e,0,null,!1,!1,"",eu);return e._reactRootContainer=o,e[Xe]=o.current,Kt(e.nodeType===8?e.parentNode:e),jn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=cl(u);s.call(c)}}var u=Ho(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=u,e[Xe]=u.current,Kt(e.nodeType===8?e.parentNode:e),jn(function(){kl(n,u,t,r)}),u}function Nl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=cl(o);s.call(u)}}kl(n,o,e,l)}else o=Zd(t,n,e,l,r);return cl(o)}Ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Et(n.pendingLanes);t!==0&&(co(n,t|1),ve(n,Q()),!(O&6)&&(ut=Q()+500,xn()))}break;case 13:jn(function(){var r=Ze(e,1);if(r!==null){var l=ae();Ie(r,e,1,l)}}),Ko(e,1)}};fo=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=ae();Ie(n,e,134217728,t)}Ko(e,134217728)}};qu=function(e){if(e.tag===13){var n=mn(e),t=Ze(e,n);if(t!==null){var r=ae();Ie(t,e,n,r)}Ko(e,n)}};bu=function(){return A};ea=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};_i=function(e,n,t){switch(n){case"input":if(di(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=vl(r);if(!l)throw Error(g(90));Lu(r),di(r,l)}}}break;case"textarea":Ou(e,t);break;case"select":n=t.value,n!=null&&Zn(e,!!t.multiple,n,!1)}};Bu=Uo;$u=jn;var Jd={usingClientEntryPoint:!1,Events:[tr,Hn,vl,Fu,Uu,Uo]},xt={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qd={bundleType:xt.bundleType,version:xt.version,rendererPackageName:xt.rendererPackageName,rendererConfig:xt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ku(e),e===null?null:e.stateNode},findFiberByHostInstance:xt.findFiberByHostInstance||Xd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{dl=Er.inject(qd),$e=Er}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(n))throw Error(g(200));return Gd(e,n,null,t)};we.createRoot=function(e,n){if(!Qo(e))throw Error(g(299));var t=!1,r="",l=Sc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ho(e,1,!1,null,null,t,!1,r,l),e[Xe]=n.current,Kt(e.nodeType===8?e.parentNode:e),new Wo(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ku(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return jn(e)};we.hydrate=function(e,n,t){if(!El(n))throw Error(g(200));return Nl(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!Qo(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Sc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=wc(n,null,e,1,t??null,l,!1,i,o),e[Xe]=n.current,Kt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Cl(n)};we.render=function(e,n,t){if(!El(n))throw Error(g(200));return Nl(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!El(e))throw Error(g(40));return e._reactRootContainer?(jn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};we.unstable_batchedUpdates=Uo;we.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!El(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Nl(e,n,t,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ku.exports=we;var bd=ku.exports,nu=bd;ii.createRoot=nu.createRoot,ii.hydrateRoot=nu.hydrateRoot;const ep=({data:e})=>{const[n,t]=q.useState(e),[r,l]=q.useState("");return q.useEffect(()=>{t(r===""?e:e.filter(i=>i.address.startsWith(r)))},[r,e]),S.jsxs("div",{className:"memory h-[500px] w-full max-w-[360px] flex gap-2 flex-col",children:[S.jsx("h1",{className:"section-header",children:"Memory"}),S.jsx("div",{className:"memory-list overflow-scroll flex flex-1 flex-col gap-[6px] bg-[--background] text-[--on-background] border-2 border-[--outline] rounded-[20px] h-full",children:r===""?S.jsxs(S.Fragment,{children:[S.jsx(ti,{children:"Code Cells"}),S.jsx(ri,{list:n.filter(i=>Number(i.address)<=1024)}),S.jsx(ti,{children:"Memory Cells"}),S.jsx(ri,{list:n.filter(i=>Number(i.address)>1024)})]}):S.jsxs(S.Fragment,{children:[S.jsx(ti,{children:"Search Result"}),S.jsx(ri,{list:n})]})}),S.jsxs("div",{className:"flex items-center justify-end gap-2",children:[S.jsx("input",{type:"text",placeholder:"search for address ...",value:r,onChange:i=>l(i.target.value),className:"text-sm outline-none h-10 w-full rounded-full pl-4 pr-6 bg-[--surface-container-low] border border-[--outline-variant]"}),S.jsx("button",{className:"rounded-full bg-[--primary] px-3 pt-2 pb-1",children:S.jsx("i",{className:"icon-search text-2xl text-[--on-primary]"})})]})]})},ti=({children:e})=>S.jsx("div",{className:"head bg-[--secondary-container] text-[--on-secondary-container] py-3 px-6",children:e}),ri=({list:e})=>S.jsx("div",{className:"list py-4 pl-4 pr-6",children:e.map(n=>S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"memory-cell flex gap-[2px] py-1 items-center",children:[S.jsx("span",{className:"address text-sm text-gray-400",children:n.address}),S.jsx("span",{className:"value flex-1 text-center text-[--on-background]",children:n.value})]}),S.jsx("hr",{className:"w-full border-[--outline-variant]"})]},n.address))});var Cc={},np=Re&&Re.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,l){r.__proto__=l}||function(r,l){for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(r[i]=l[i])},e(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),J=Re&&Re.__assign||function(){return J=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},J.apply(this,arguments)},tp=Re&&Re.__createBinding||(Object.create?function(e,n,t,r){r===void 0&&(r=t);var l=Object.getOwnPropertyDescriptor(n,t);(!l||("get"in l?!n.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,l)}:function(e,n,t,r){r===void 0&&(r=t),e[r]=n[t]}),rp=Re&&Re.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),lp=Re&&Re.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&tp(n,e,t);return rp(n,e),n},ip=Re&&Re.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]]);return t};Object.defineProperty(Cc,"__esModule",{value:!0});var wt=lp(q),op=13,sp=9,up=8,ap=89,Nr=90,cp=77,tu=57,ru=219,lu=222,iu=192,fp=27,ou=100,dp=3e3,pp=typeof window<"u"&&"navigator"in window&&/Win/i.test(navigator.platform),li=typeof window<"u"&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),Br="npm__react-simple-code-editor__textarea",mp=`
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(Br,`:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(Br,` {
    color: transparent !important;
  }

  .`).concat(Br,`::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),hp=function(e){np(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var r=t._input;if(r){var l=r.value,i=r.selectionStart,o=r.selectionEnd;t._recordChange({value:l,selectionStart:i,selectionEnd:o})}},t._getLines=function(r,l){return r.substring(0,l).split(`
`)},t._recordChange=function(r,l){var i,o,s;l===void 0&&(l=!1);var u=t._history,c=u.stack,h=u.offset;if(c.length&&h>-1){t._history.stack=c.slice(0,h+1);var m=t._history.stack.length;if(m>ou){var p=m-ou;t._history.stack=c.slice(p,m),t._history.offset=Math.max(t._history.offset-p,0)}}var v=Date.now();if(l){var _=t._history.stack[t._history.offset];if(_&&v-_.timestamp<dp){var w=/[^a-z0-9]([a-z0-9]+)$/i,D=(i=t._getLines(_.value,_.selectionStart).pop())===null||i===void 0?void 0:i.match(w),f=(o=t._getLines(r.value,r.selectionStart).pop())===null||o===void 0?void 0:o.match(w);if(D!=null&&D[1]&&(!((s=f==null?void 0:f[1])===null||s===void 0)&&s.startsWith(D[1]))){t._history.stack[t._history.offset]=J(J({},r),{timestamp:v});return}}}t._history.stack.push(J(J({},r),{timestamp:v})),t._history.offset++},t._updateInput=function(r){var l=t._input;l&&(l.value=r.value,l.selectionStart=r.selectionStart,l.selectionEnd=r.selectionEnd,t.props.onValueChange(r.value))},t._applyEdits=function(r){var l=t._input,i=t._history.stack[t._history.offset];i&&l&&(t._history.stack[t._history.offset]=J(J({},i),{selectionStart:l.selectionStart,selectionEnd:l.selectionEnd})),t._recordChange(r),t._updateInput(r)},t._undoEdit=function(){var r=t._history,l=r.stack,i=r.offset,o=l[i-1];o&&(t._updateInput(o),t._history.offset=Math.max(i-1,0))},t._redoEdit=function(){var r=t._history,l=r.stack,i=r.offset,o=l[i+1];o&&(t._updateInput(o),t._history.offset=Math.min(i+1,l.length-1))},t._handleKeyDown=function(r){var l=t.props,i=l.tabSize,o=l.insertSpaces,s=l.ignoreTabKey,u=l.onKeyDown;if(!(u&&(u(r),r.defaultPrevented))){r.keyCode===fp&&r.currentTarget.blur();var c=r.currentTarget,h=c.value,m=c.selectionStart,p=c.selectionEnd,v=(o?" ":"	").repeat(i);if(r.keyCode===sp&&!s&&t.state.capture)if(r.preventDefault(),r.shiftKey){var _=t._getLines(h,m),w=_.length-1,D=t._getLines(h,p).length-1,f=h.split(`
`).map(function(Te,be){return be>=w&&be<=D&&Te.startsWith(v)?Te.substring(v.length):Te}).join(`
`);if(h!==f){var a=_[w];t._applyEdits({value:f,selectionStart:a!=null&&a.startsWith(v)?m-v.length:m,selectionEnd:p-(h.length-f.length)})}}else if(m!==p){var _=t._getLines(h,m),d=_.length-1,y=t._getLines(h,p).length-1,a=_[d];t._applyEdits({value:h.split(`
`).map(function(dt,or){return or>=d&&or<=y?v+dt:dt}).join(`
`),selectionStart:a&&/\S/.test(a)?m+v.length:m,selectionEnd:p+v.length*(y-d+1)})}else{var x=m+v.length;t._applyEdits({value:h.substring(0,m)+v+h.substring(p),selectionStart:x,selectionEnd:x})}else if(r.keyCode===up){var E=m!==p,N=h.substring(0,m);if(N.endsWith(v)&&!E){r.preventDefault();var x=m-v.length;t._applyEdits({value:h.substring(0,m-v.length)+h.substring(p),selectionStart:x,selectionEnd:x})}}else if(r.keyCode===op){if(m===p){var R=t._getLines(h,m).pop(),j=R==null?void 0:R.match(/^\s+/);if(j!=null&&j[0]){r.preventDefault();var z=`
`+j[0],x=m+z.length;t._applyEdits({value:h.substring(0,m)+z+h.substring(p),selectionStart:x,selectionEnd:x})}}}else if(r.keyCode===tu||r.keyCode===ru||r.keyCode===lu||r.keyCode===iu){var B=void 0;r.keyCode===tu&&r.shiftKey?B=["(",")"]:r.keyCode===ru?r.shiftKey?B=["{","}"]:B=["[","]"]:r.keyCode===lu?r.shiftKey?B=['"','"']:B=["'","'"]:r.keyCode===iu&&!r.shiftKey&&(B=["`","`"]),m!==p&&B&&(r.preventDefault(),t._applyEdits({value:h.substring(0,m)+B[0]+h.substring(m,p)+B[1]+h.substring(p),selectionStart:m,selectionEnd:p+2}))}else(li?r.metaKey&&r.keyCode===Nr:r.ctrlKey&&r.keyCode===Nr)&&!r.shiftKey&&!r.altKey?(r.preventDefault(),t._undoEdit()):(li?r.metaKey&&r.keyCode===Nr&&r.shiftKey:pp?r.ctrlKey&&r.keyCode===ap:r.ctrlKey&&r.keyCode===Nr&&r.shiftKey)&&!r.altKey?(r.preventDefault(),t._redoEdit()):r.keyCode===cp&&r.ctrlKey&&(!li||r.shiftKey)&&(r.preventDefault(),t.setState(function(Te){return{capture:!Te.capture}}))}},t._handleChange=function(r){var l=r.currentTarget,i=l.value,o=l.selectionStart,s=l.selectionEnd;t._recordChange({value:i,selectionStart:o,selectionEnd:s},!0),t.props.onValueChange(i)},t._history={stack:[],offset:-1},t._input=null,t}return n.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(n.prototype,"session",{get:function(){return{history:this._history}},set:function(t){this._history=t.history},enumerable:!1,configurable:!0}),n.prototype.render=function(){var t=this,r=this.props,l=r.value,i=r.style,o=r.padding,s=r.highlight,u=r.textareaId,c=r.textareaClassName,h=r.autoFocus,m=r.disabled,p=r.form,v=r.maxLength,_=r.minLength,w=r.name,D=r.placeholder,f=r.readOnly,a=r.required,d=r.onClick,y=r.onFocus,x=r.onBlur,E=r.onKeyUp;r.onKeyDown,r.onValueChange,r.tabSize,r.insertSpaces,r.ignoreTabKey;var N=r.preClassName,R=ip(r,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),j={paddingTop:typeof o=="object"?o.top:o,paddingRight:typeof o=="object"?o.right:o,paddingBottom:typeof o=="object"?o.bottom:o,paddingLeft:typeof o=="object"?o.left:o},z=s(l);return wt.createElement("div",J({},R,{style:J(J({},St.container),i)}),wt.createElement("pre",J({className:N,"aria-hidden":"true",style:J(J(J({},St.editor),St.highlight),j)},typeof z=="string"?{dangerouslySetInnerHTML:{__html:z+"<br />"}}:{children:z})),wt.createElement("textarea",{ref:function(B){return t._input=B},style:J(J(J({},St.editor),St.textarea),j),className:Br+(c?" ".concat(c):""),id:u,value:l,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:d,onKeyUp:E,onFocus:y,onBlur:x,disabled:m,form:p,maxLength:v,minLength:_,name:w,placeholder:D,readOnly:f,required:a,autoFocus:h,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),wt.createElement("style",{dangerouslySetInnerHTML:{__html:mp}}))},n.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},n}(wt.Component),vp=Cc.default=hp,St={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}};const su=({instructions:e,setInstrunctions:n})=>{const t=r=>r.split(`
`).map((l,i)=>`<span class='editorLineNumber'>${i+1}</span>${l}`).join(`
`);return S.jsx(vp,{className:"editor text-[--primary-15]",value:e,textareaId:"codeArea",onValueChange:r=>n(r),highlight:r=>t(r),padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:16}})},yp=({name:e,value:n})=>S.jsxs("div",{className:"register flex gap-2 items-center w-[200px] p-2 pr-4 bg-[--secondary-container] rounded-full",children:[S.jsx("span",{className:"name rounded-full py-1 px-[6px] bg-[--tertiary] text-[--on-tertiary]",children:e}),S.jsx("span",{className:"value text-center flex-1 text-lg text-[--on-secondary-container]",children:n})]}),gp=({data:e})=>S.jsxs("div",{className:"col-start-1 col-end-3 flex gap-2 flex-col self-baseline w-full",children:[S.jsx("h1",{className:"text-lg text-[--on-background]",children:"Registers"}),S.jsx("hr",{}),S.jsx("div",{className:"registers-list flex flex-wrap gap-y-3 gap-x-2 items-start",children:Object.keys(e).map(n=>S.jsx(yp,{name:n,value:e[n]},n))})]}),_p="modulepreload",xp=function(e,n){return new URL(e,n).href},uu={},wp=function(n,t,r){let l=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.all(t.map(u=>{if(u=xp(u,r),u in uu)return;uu[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const _=i[v];if(_.href===u&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":_p,c||(p.as="script",p.crossOrigin=""),p.href=u,s&&p.setAttribute("nonce",s),document.head.appendChild(p),c)return new Promise((v,_)=>{p.addEventListener("load",v),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}return l.then(()=>n()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Sp=`from cpu.components.ALU.arithmetic import Arithmetic
from cpu.components.ALU.logic import Logic
from cpu.components.ALU.shift import Shift
from cpu.components.register import Register
from cpu.components.mux import Mux


class ALU:
    def __init__(self, DR: Register, AC: Register, INPR: Register, size=4) -> None:
        self.arithmetic = Arithmetic(size)
        self.logic = Logic(size)
        self.shift = Shift(size)
        self.DR = DR
        self.AC = AC
        self.INPR = INPR
        self.size = size
        self._s: list[int]
        self.mux = [Mux(4) for _ in range(size)]
        self._c = 0
        self.s = [0] * 4

    def update(self):
        self.arithmetic.A = self.DR.out
        self.arithmetic.B = self.AC.out
        self.logic.A = self.AC.out
        self.logic.B = self.DR.out
        self.shift.A = self.AC.out
        for index, mux in enumerate(self.mux):
            mux.i[0] = self.arithmetic.out[index]
            mux.i[1] = self.logic.out[index]
            mux.i[2] = self.shift.out[index]
        for i in range(-1, -len(self.INPR.out) - 1, -1):
            self.mux[i].i[3] = self.INPR.out[i]

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for mux in self.mux:
            mux.s = value[0:2]
        self.logic.s = value[2:4]
        self.arithmetic.s = value[2:4]
        self.shift.s = [value[2]]

    @property
    def c(self):
        return self._c

    @c.setter
    def c(self, value):
        self._c = value
        self.arithmetic.c = value

    @property
    def carry(self):
        return self.arithmetic.carry

    @property
    def out(self):
        self.update()
        return [mux.out for mux in self.mux]


# dr = Register(4, None)
# ac = Register(4, None)
# ir = Register(2, None)

# alu = ALU(dr, ac, ir)

# dr.write([1, 0, 0, 1])
# ac.write([0, 0, 1, 0])
# ir.write([1, 0])

# alu.s = [1, 1, 0, 0]
# alu.c = 0

# print(alu.out)
`,kp="",Cp=`from cpu.components.mux import Mux


class Bus:
    def __init__(self, size=16) -> None:
        self.size = size
        self.elements = []
        self.mux = [Mux(size) for _ in range(size)]
        self._s: list[int]
        self.s = [0] * self.mux[0].pins

    def update(self):
        for i in range(len(self.elements)):
            if self.elements[i] is None:
                continue
            out = self.elements[i].out
            for j in range(-1, -len(out) - 1, -1):
                self.mux[j].i[i] = out[j]

    def add(self, *elements):
        for element in elements:
            self.elements.append(element)

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value):
        self._s = value
        for i in range(len(self.mux)):
            self.mux[i].s = value

    @property
    def out(self):
        self.update()
        return [mux.out for mux in self.mux]


# from cpu.components.register import Register
#
# bus = Bus(8)
# b = Register(4, bus)
# c = Register(4, bus)
# c.write([1, 1, 0, 0])
# b.write([0, 0, 1, 0])
# bus.add(c, b)
# bus.s = [0, 0, 0]
# # c.write([1, 0, 1, 1])
# # b.load()
# # b.inr()
# # bus.s = [0, 0, 1]
# bus.update()
# print(bus.out)
`,Ep=`from cpu.utils.lookup_dicts import (
    storage_lookup_dict,
    io_lookup_dict,
    register_lookup_dict,
)

from cpu.utils.binary import dec_to_binlist


class CompileError(Exception):
    def __init__(self, type, line, msg=None, hint=None) -> None:
        self.type = type
        self.line = line
        self.msg = msg
        self.hint = hint
        super().__init__(type, line, msg, hint)

    def __str__(self) -> str:
        return super().__str__()


class Compiler:
    def __init__(self) -> None:
        self.storage = storage_lookup_dict
        self.register = register_lookup_dict
        self.io = io_lookup_dict

    def compile(self, text):
        lines = (
            text
            if isinstance(text, list)
            else list(map(str.strip, text.strip().split("\\n")))
        )
        instructions = []
        for index, line in enumerate(lines):
            line = line.split(" ")
            if len(line) == 1:
                instruction = self.register.get(line[0], None)
                instruction = (
                    self.io.get(line[0], None) if instruction is None else instruction
                )
                if instruction is None:
                    raise CompileError("syntax", index + 1)
                instructions.append(dec_to_binlist(instruction, size=16))
            elif len(line) == 2:
                i = 0x0000
                if len(line[0]) == 4:
                    if line[0][3].upper() == "I":
                        i = 0x8000
                    else:
                        raise CompileError("value", index + 1, "i is not valid")
                opcode = self.storage.get(line[0][:3], None)
                if opcode is None:
                    raise CompileError("syntax", index + 1)
                address = 0
                try:
                    address = int(line[1], 16)
                except ValueError:
                    raise CompileError(
                        "value", index + 1, "invalid value for address"
                    ) from None
                instructions.append(dec_to_binlist(i + opcode + address, size=16))
            else:
                raise CompileError("syntax", index + 1)
        return instructions


# c = Compiler()
# instructions_str = """
#     ADD 45A
#     CLA
#     LDA 234
#     BSAI 135
#     SZA
#     CME
# """
# for inst in c.compile(instructions_str):
#     print(inst)
`,Np=`class FullAdder:
    def __init__(self) -> None:
        self._a = 0
        self._b = 0
        self._c = 0
        self.h1 = HalfAdder()
        self.h2 = HalfAdder()

    @property
    def a(self):
        return self._a

    @a.setter
    def a(self, value: int):
        self._a = value
        self.h1.a = value
        self.h2.a = self.h1.sum

    @property
    def b(self):
        return self._b

    @b.setter
    def b(self, value: int):
        self._b = value
        self.h1.b = value
        self.h2.a = self.h1.sum

    @property
    def c(self):
        return self._c

    @c.setter
    def c(self, value):
        self._c = value
        self.h2.b = value

    @property
    def sum(self):
        return self.h2.sum

    @property
    def carry(self):
        return self.h1.carry | self.h2.carry


class HalfAdder:
    def __init__(self) -> None:
        self.a = 0
        self.b = 0

    @property
    def sum(self):
        return self.a ^ self.b

    @property
    def carry(self):
        return self.a & self.b
`,Rp=`from cpu.components.ALU.adder import FullAdder
from cpu.components.mux import Mux


class Arithmetic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(4) for _ in range(size)]
        self.adders = [FullAdder() for _ in range(size)]
        self._A: list[int]
        self._B: list[int]
        self._s = [0] * 2
        self.A = [0] * size
        self.B = [0] * size
        self.c = 0

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: list[int]):
        self._A = value
        for i in range(self.size):
            self.adders[i].a = value[i]

    @property
    def B(self):
        return self._B

    @B.setter
    def B(self, value: list[int]):
        self._B = value
        for i in range(self.size):
            self.mux[i].i[0] = 0
            self.mux[i].i[1] = value[i]
            self.mux[i].i[2] = 1 - value[i]
            self.mux[i].i[3] = 1
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value
        for i in range(self.size):
            self.adders[i].b = self.mux[i].out

    @property
    def out(self):
        self.adders[-1].c = self.c
        for i in range(self.size - 2, -1, -1):
            self.adders[i].c = self.adders[i + 1].carry
        return [adder.sum for adder in self.adders]

    @property
    def carry(self):
        return self.adders[-1].carry


# a = Arithmetic(4)
# a.A = [1, 0, 1, 0]
# a.B = [0, 0, 1, 0]
# a.s = [0, 1]
# a.c = 0

# print(a.out, a.carry)
`,zp=`from cpu.components.mux import Mux


class Logic:
    def __init__(self, size: int) -> None:
        self.size = size
        self.mux = [Mux(4) for _ in range(self.size)]

        self._s = [0] * self.mux[0].pins
        self.A = [0] * size
        self.B = [0] * size

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def out(self):
        for i in range(self.size):
            self.mux[i].i[0] = self.A[i] & self.B[i]
            self.mux[i].i[1] = self.A[i] | self.B[i]
            self.mux[i].i[2] = self.A[i] ^ self.B[i]
            self.mux[i].i[3] = 1 - self.A[i]
        return [self.mux[i].out for i in range(self.size)]


# l = Logic(4)
# l.A = [1, 0, 1, 0]
# l.B = [0, 1, 1, 0]
# l.s = [0, 0]
# print(l.out)
`,Pp=`from cpu.components.mux import Mux


class Shift:
    def __init__(self, size: int):
        if size <= 2:
            raise Exception("Size of shift module cannot be less than 2")
        self.size = size
        self.mux = [Mux(2) for _ in range(size)]

        self._A: list[int]
        self._s = [0]
        self._i = 0

        self.i = 0
        self.A = [0] * size

    @property
    def s(self):
        return self._s

    @s.setter
    def s(self, value: list[int]):
        self._s = value
        for i in range(self.size):
            self.mux[i].s = value

    @property
    def i(self):
        return self._i

    @i.setter
    def i(self, value):
        self._i = value
        self.mux[0].i[0] = value
        self.mux[-1].i[1] = value

    @property
    def A(self):
        return self._A

    @A.setter
    def A(self, value: list[int]):
        self._A = value
        self.mux[1].i[0] = value[0]
        self.mux[-2].i[1] = value[-1]
        for i in range(1, self.size - 1):
            self.mux[i + 1].i[0] = value[i]
            self.mux[i - 1].i[1] = value[i]

    @property
    def out(self):
        return [mux.out for mux in self.mux]


# shift = Shift(4)
# shift.i = 0
# shift.A = [0, 0, 1, 0]
# shift.s = [0]  # zero for Right, one for left
# print(shift.out)
`,Tp=`from cpu.utils.binary import bin_list_value


class Decoder:
    def __init__(self, in_size=4) -> None:
        self.in_size = in_size
        self.out_size = 2**in_size
        self.bits: list[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.out_size

    @property
    def out(self):
        output = [0] * self.out_size
        index = bin_list_value(self.bits)
        output[index] = 1
        return output
`,Lp=`from math import log2, ceil
from cpu.utils.binary import dec_to_binlist


class Encoder:
    def __init__(self, size=16) -> None:
        self.i = [0] * size
        self.out_size = ceil(log2(size))
        self.size = size

    @property
    def out(self):
        for j in range(self.size):
            if self.i[j] == 1:
                return dec_to_binlist(j, self.out_size)
        return [0] * self.out_size
`,Dp=`class Flags:
    def __init__(self) -> None:
        self.E = 0
        self.FGI = 0
        self.FGO = 0
        self.IEN = 0
        self.R = 0
`,Op=`from math import ceil, log2
from cpu.utils.binary import bin_list_value


class Mux:
    def __init__(self, size: int) -> None:
        self.pins = ceil(log2(size))
        self.size = size
        self.s = [0] * self.pins
        self.i = [0] * self.size

    @property
    def out(self):
        index = bin_list_value(self.s)
        return self.i[index]
`,jp=`class Register:
    def __init__(self, size: int, bus, out_range=None):
        self.size = size
        self.bus = bus
        self.bits: list[int]
        self.clr()
        if out_range is None:
            out_range = slice(0, len(self.bits))
        self.out_range = out_range

    @property
    def out(self):
        return self.bits[self.out_range]

    def clr(self, condition=True):
        if bool(condition):
            self.bits = [0] * self.size

    def load(self, condition=True):
        if bool(condition):
            bus_output = self.bus.out
            for i in range(-1, -self.size - 1, -1):
                self.bits[i] = bus_output[i]

    def inr(self, condition=True):
        if bool(condition):
            carry = 1
            for i in range(self.size - 1, -1, -1):
                b = self.bits[i]
                self.bits[i] ^= carry
                carry &= b

    def write(self, data: list[int]):
        if self.size < len(data):
            raise OverflowError

        self.bits = data

    def read(self):
        # Explicit reading from register
        return self.bits
`,Ap=`class SequenceCounter:
    def __init__(self, size: int):
        self.size = size
        self.bits: list[int]
        self.clr()

    @property
    def out(self):
        return self.bits

    def clr(self, condition = True):
        if bool(condition):
            self.bits = [0] * self.size

    def inr(self):
        carry = 1
        for i in range(self.size - 1, -1, -1):
            b = self.bits[i]
            self.bits[i] ^= carry
            carry &= b
`,Ip=`from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.utils.binary import bin_list_value
from cpu.components.sc import SequenceCounter
from cpu.components.decoder import Decoder
from cpu.components.encoder import Encoder
from cpu.components.flag import Flags
from cpu.ALU import ALU
from cpu.utils.codes import BC, ALUC


class ControlUnit:
    def __init__(
        self,
        bus: Bus,
        memory: Memory,
        alu: ALU,
        flags: Flags,
        AR: Register,
        AC: Register,
        PC: Register,
        DR: Register,
        IR: Register,
        TR: Register,
        INPR: Register,
        OUTR: Register,
    ) -> None:
        self.sc_size = 4
        self.sc = SequenceCounter(self.sc_size)
        self.t_decoder = Decoder(self.sc_size)
        self.encoder = Encoder()
        self.d_decoder = Decoder(3)
        self.alu_encoder = Encoder()

        self.flags = flags

        self.AR = AR
        self.PC = PC
        self.DR = DR
        self.AC = AC
        self.IR = IR
        self.TR = TR
        self.INPR = INPR
        self.OUTR = OUTR

        self.memory = memory
        self.bus = bus
        self.alu = alu

    @property
    def T(self):
        self.t_decoder.bits = self.sc.out
        t = self.t_decoder.out
        self.sc.inr()
        return t

    def get_registers(self):
        return {
            "PC": hex(bin_list_value(self.PC.out)),
            "AR": hex(bin_list_value(self.AR.out)),
            "IR": hex(bin_list_value(self.IR.out)),
            "DR": hex(bin_list_value(self.DR.out)),
            "AC": hex(bin_list_value(self.AC.out)),
            "INPR": hex(bin_list_value(self.INPR.out)),
            "OUTR": hex(bin_list_value(self.OUTR.out)),
        }

    def print_registers(self):
        print(" Registers")
        print("   PC", self.PC.out)
        print("   AR", self.AR.out)
        print("   IR", self.IR.bits)
        print("   DR", self.DR.out)
        print("   AC", self.AC.out)
        # print("    INPR", self.INPR.out)
        # print("    OUTR", self.OUTR.out)

    def print_mods(self):
        print(" Modules")
        print("   BUS", self.bus.out)
        print("   ALU", self.alu.out)

    def run(self, num):
        while T := self.T:
            self.flags.R = (
                (1 - T[0])
                & (1 - T[1])
                & (1 - T[2])
                & self.flags.IEN
                & (self.flags.FGI | self.flags.FGO)
                | self.flags.R
            ) & (1 - self.flags.R & T[2])
            R = self.flags.R

            instruction = self.IR.bits
            I = instruction[0]
            self.d_decoder.bits = instruction[1:4]
            D = self.d_decoder.out
            B = list(reversed(self.IR.out))

            r = D[7] & (1 - I) & T[3]
            p = D[7] & I & T[3]

            if bin_list_value(self.PC.out) == num + 1 and T[0]:
                break

            self.encoder.i[BC.PC] = T[0] | D[5] & T[4]
            self.encoder.i[BC.RAM] = (
                (1 - R) & T[1]
                | (1 - D[7]) & I & T[3]
                | (D[0] | D[1] | D[2] | D[6]) & T[4]
            )
            self.encoder.i[BC.IR] = (1 - R) & T[2]
            self.encoder.i[BC.AC] = D[3] & T[4] | p & B[10]
            self.encoder.i[BC.AR] = D[4] & T[4] | D[5] & T[5]
            self.encoder.i[BC.DR] = D[6] & T[6]
            self.encoder.i[BC.TR] = R & T[1]

            self.bus.s = self.encoder.out

            self.alu_encoder.i[ALUC.LDA] = D[2] & T[5]
            self.alu_encoder.i[ALUC.ADD] = D[1] & T[5]
            self.alu_encoder.i[ALUC.AND] = D[0] & T[5]
            self.alu_encoder.i[ALUC.CMA] = r & B[9]
            self.alu_encoder.i[ALUC.SHR] = r & B[7]
            self.alu_encoder.i[ALUC.SHL] = r & B[6]
            self.alu_encoder.i[ALUC.INP] = p & B[11]

            self.alu.s = self.alu_encoder.out

            self.AR.load((1 - R) & (T[0] | T[2]) | (1 - D[7]) & I & T[3])
            self.IR.load((1 - R) & T[1])
            self.DR.load((D[0] | D[1] | D[2] | D[6]) & T[4])
            self.AC.load(
                (D[0] | D[1] | D[2]) & T[5] | (B[9] | B[6] | B[7]) & r | p & B[11]
            )
            self.memory.load((D[3] | D[5]) & T[4] | D[6] & T[6] | R & T[1])
            self.PC.load(D[4] & T[4] | D[5] & T[5])
            self.OUTR.load(p & B[10])
            self.TR.load(R & T[0])

            self.flags.E = (
                (1 - (r & B[10] & B[7] & B[6])) & self.flags.E
                | ((r & B[8]) ^ self.flags.E)
                | (r & B[7] & self.AC.out[-1])
                | (r & B[6] & self.AC.out[0])
                | (D[1] & T[5] & self.alu.carry)
                | (1 - (D[1] & T[5])) & self.flags.E
            )
            self.flags.FGI = (1 - (p & B[11])) & self.flags.FGI
            self.flags.FGO = (1 - (p & B[10])) & self.flags.FGO
            self.flags.IEN = (
                (1 - (R & T[2])) & (1 - (p & B[6])) & (p & B[7] | self.flags.IEN)
            )

            isz = D[6] & T[6] & int(all(bit == 0 for bit in self.DR.out))
            spa = r & B[4] & (1 - self.AC.bits[0])
            sna = r & B[3] & self.AC.bits[0]
            sza = r & B[2] & int(all(bit == 0 for bit in self.AC.out))
            sze = r & B[1] & (1 - self.flags.E)
            ski = p & B[9] & self.flags.FGI
            sko = p & B[8] & self.flags.FGO

            self.PC.inr(
                (1 - R) & T[1] | isz | spa | sna | sza | sze | ski | sko | R & T[2]
            )
            self.AR.inr(D[5] & T[4])
            self.DR.inr(D[6] & T[5])
            self.AC.inr(r & B[5])

            self.AC.clr(r & B[11])
            self.AR.clr(R & T[0])
            self.PC.clr(R & T[1])
            self.sc.clr(
                R & T[2]
                | (D[0] | D[1] | D[2] | D[5]) & T[5]
                | (D[3] | D[4]) & T[4]
                | D[6] & T[6]
                | r
                | p
            )

            # print(f"- T{T.index(1)}")
            # self.print_registers()
            # self.print_mods()
            # print()
`,Mp=`from cpu.bus import Bus
from cpu.components.register import Register
from cpu.memory import Memory
from cpu.ALU import ALU
from cpu.components.flag import Flags
from cpu.compiler import Compiler, CompileError
from cpu.cu import ControlUnit
from cpu.utils.binary import dec_to_binlist


class CPU:
    def __init__(self):
        self.instructions = []
        self.compiler = Compiler()

        bus = Bus(size=16)
        self.bus = bus

        self.AR = Register(size=12, bus=bus)
        self.DR = Register(size=16, bus=bus)
        self.INPR = Register(size=8, bus=bus)
        self.memory = Memory(bus=bus, AR=self.AR)
        self.alu = ALU(DR=self.DR, AC=None, INPR=self.INPR, size=16)
        self.AC = Register(size=16, bus=self.alu)
        self.alu.AC = self.AC

        self.PC = Register(size=12, bus=bus)
        self.IR = Register(size=16, bus=bus, out_range=slice(4, 16))
        self.TR = Register(size=16, bus=bus)
        self.OUTR = Register(size=8, bus=bus)

        self.flags = Flags()

        bus.add(None, self.AR, self.PC, self.DR, self.AC, self.IR, self.TR, self.memory)

        self.cu = ControlUnit(
            bus=self.bus,
            memory=self.memory,
            alu=self.alu,
            flags=self.flags,
            AR=self.AR,
            AC=self.AC,
            PC=self.PC,
            DR=self.DR,
            IR=self.IR,
            TR=self.TR,
            INPR=self.INPR,
            OUTR=self.OUTR,
        )

    def compile(self, text):
        """
        Compile, reset code memory, write compiled instructions
        """
        try:
            instructions = self.compiler.compile(text)
            for i, instruction in enumerate(instructions):
                self.memory.write(instruction, i + 1)
            for i in range(len(self.instructions), len(instructions), -1):
                self.memory.write(dec_to_binlist(0, self.memory.cell_size), i)
            self.instructions = instructions
        except CompileError as e:
            print(f"Compile Error: {e}")
            return None

    def execute(self):
        """
        Prepare and run CU.run()
        Prepare means: Clear Registers, SC = 0, PC = 1 because
        PC = 0 points to interrupt instruction
        """
        self.AR.clr()
        self.AC.clr()
        self.DR.clr()
        self.TR.clr()
        self.INPR.clr()
        self.OUTR.clr()
        self.PC.clr()
        self.cu.sc.clr()

        self.flags.E = 0
        self.flags.FGI = 0
        self.flags.FGO = 0

        self.PC.inr()

        self.cu.run(len(self.instructions))


# c = CPU()
# instructions_str = """
#     0 LDA 32
#     0 ADD 33
#     0 STA 35
# """
# c.compile(instructions_str)

# print("Instructoins:")
# for i, instruction in enumerate(c.instructions):
#     print(instruction)
#     c.memory.write(instruction, i + 1)

# c.memory.write(dec_to_binlist(35, size=16), 50)
# c.memory.write(dec_to_binlist(75, size=16), 51)
# c.memory.write(dec_to_binlist(190, size=16), 52)

# print("\\nOccupied memory addresses:")
# c.memory.print()

# print()
# c.execute()
# c.cu.print_mods()
# c.cu.print_registers()
# print()
# c.memory.print()
`,Fp=`from cpu.components.register import Register
from cpu.utils.binary import bin_list_value


class Memory:
    def __init__(self, bus, AR: Register, size=4096, cell_size=16) -> None:
        self.cells = [Cell(cell_size) for _ in range(size)]
        self.size = size
        self.cell_size = cell_size
        self.AR = AR
        self.bus = bus

    @property
    def out(self):
        index = bin_list_value(self.AR.out)
        return self.cells[index].bits

    def load(self, condition=True):
        if bool(condition):
            index = bin_list_value(self.AR.bits)
            self.cells[index].bits = self.bus.out

    def write(self, data: list[int], address: int):
        self.cells[address].bits = data

    def read(self, address):
        return self.cells[address].bits

    def print(self):
        memory_info = self.read_bulk()
        for cell_info in memory_info:
            address = cell_info["address"]
            value = cell_info["value"]
            if int(value, 16) != 0:
                print(address, value)


    def read_bulk(self):
        data = []
        for i in range(len(self.cells)):
            cell = self.cells[i]
            v = bin_list_value(cell.bits)
            if v == 0:
                continue
            data.append({"address": hex(i), "value": hex(v)})

        return data


class Cell:
    def __init__(self, size) -> None:
        self.size = size
        self.bits: list[int]
        self.clr()

    def clr(self):
        self.bits = [0] * self.size
`,Up=`def dec_to_binlist(number: int, size: int = None):
    bits = [int(bit) for bit in bin(number)[2:]]
    bits = [0] * (0 if size is None or len(bits) >= size else size - len(bits)) + bits
    return bits


def bin_list_value(number: list[int]):
    length = len(number)
    v = sum([number[i] * (2 ** (length - i - 1)) for i in range(length)])
    return v
`,Bp=`# Bus Codes
class BC:
    AR = 1
    PC = 2
    DR = 3
    AC = 4
    IR = 5
    TR = 6
    RAM = 7


# ALU Codes
class ALUC:
    LDA = 0
    ADD = 1
    AND = 4
    CMA = 7
    SHR = 8
    SHL = 10
    INP = 12
`,$p=`register_lookup_dict = {
    "CLA": 0x7800,
    "CLE": 0x7400,
    "CMA": 0x7200,
    "CME": 0x7100,
    "CIR": 0x7080,
    "CIL": 0x7040,
    "INC": 0x7020,
    "SPA": 0x7010,
    "SNA": 0x7008,
    "SZA": 0x7004,
    "SZE": 0x7002,
    "HLT": 0x7001,
}
io_lookup_dict = {
    "INP": 0xF800,
    "OUT": 0xF400,
    "SKI": 0xF200,
    "SKO": 0xF100,
    "ION": 0xF080,
    "IOF": 0xF040,
}
storage_lookup_dict = {
    "AND": 0x0000,
    "ADD": 0x1000,
    "LDA": 0x2000,
    "STA": 0x3000,
    "BUN": 0x4000,
    "BSA": 0x5000,
    "ISZ": 0x6000,
}
`,Vp=`"""The same five operations the Django API exposes, called from the browser through Pyodide.

Every handler takes and returns a JSON string, so nothing crosses the Python/JS boundary
except text. The logic mirrors backend/cpu_sim/views/.
"""

import json

from cpu.main import CPU
from cpu.utils.binary import dec_to_binlist

_cpu = CPU()


def memory_read(_payload):
    return json.dumps(_cpu.memory.read_bulk())


def register_read(_payload):
    return json.dumps(_cpu.cu.get_registers())


def compile_program(payload):
    _cpu.compile(json.loads(payload)["instructions"])
    return json.dumps("OK")


def execute(_payload):
    _cpu.execute()
    return json.dumps("OK")


def memory_write(payload):
    for cell in json.loads(payload):
        address = int(cell["address"], 16)
        value = dec_to_binlist(int(cell["value"], 16), _cpu.memory.cell_size)
        _cpu.memory.write(address=address, data=value)
    return json.dumps("OK")


HANDLERS = {
    "memory/read": memory_read,
    "memory/write": memory_write,
    "register/read": register_read,
    "core/compile": compile_program,
    "core/instruction": execute,
}


def call(route, payload="null"):
    return HANDLERS[route](payload)
`,Hp="0.26.4",au=`https://cdn.jsdelivr.net/pyodide/v${Hp}/full/`,Kp=Object.assign({"../../../cpu/ALU.py":Sp,"../../../cpu/__init__.py":kp,"../../../cpu/bus.py":Cp,"../../../cpu/compiler.py":Ep,"../../../cpu/components/ALU/adder.py":Np,"../../../cpu/components/ALU/arithmetic.py":Rp,"../../../cpu/components/ALU/logic.py":zp,"../../../cpu/components/ALU/shift.py":Pp,"../../../cpu/components/decoder.py":Tp,"../../../cpu/components/encoder.py":Lp,"../../../cpu/components/flag.py":Dp,"../../../cpu/components/mux.py":Op,"../../../cpu/components/register.py":jp,"../../../cpu/components/sc.py":Ap,"../../../cpu/cu.py":Ip,"../../../cpu/main.py":Mp,"../../../cpu/memory.py":Fp,"../../../cpu/utils/binary.py":Up,"../../../cpu/utils/codes.py":Bp,"../../../cpu/utils/lookup_dicts.py":$p});let cu=null;const Wp=async()=>{const{loadPyodide:e}=await wp(()=>import(`${au}pyodide.mjs`),[],import.meta.url),n=await e({indexURL:au});for(const[t,r]of Object.entries(Kp)){const l="/app/"+t.replace(/^(\.\.\/)+/,"");n.FS.mkdirTree(l.slice(0,l.lastIndexOf("/"))),n.FS.writeFile(l,r)}return n.runPython("import sys; sys.path.insert(0, '/app')"),n.runPython(Vp),n.globals.get("call")},lr=async(e,n)=>{cu??(cu=Wp());const t=await cu;return JSON.parse(t(e,JSON.stringify(n??null)))},Qp=()=>lr("memory/read"),Yp=()=>lr("register/read"),Gp=e=>{const n=e.split(`
`);return lr("core/compile",{instructions:n,count:n.length})},Xp=()=>lr("core/instruction"),Zp=e=>lr("memory/write",e),Jp=Object.freeze(Object.defineProperty({__proto__:null,compile:Gp,excute:Xp,loadMemory:Qp,loadRegisters:Yp,saveMemory:Zp},Symbol.toStringTag,{value:"Module"})),ir=Jp,Rr=()=>ir.loadMemory(),fu=()=>ir.loadRegisters(),qp=e=>ir.compile(e),bp=()=>ir.excute(),em=e=>ir.saveMemory(e),nm=({message:e,type:n="alert"})=>{const t={alert:"text-yellow-900",success:"text-green-900",error:"text-red-900"},r={alert:"bg-yellow-200",success:"bg-green-200",error:"bg-red-200"};return S.jsx("div",{className:`alert fixed shadow-black p-3 text-center w-full text-[17px]
                        max-w-[400px] rounded-md ${t[n]} ${r[n]}`,children:e})};function tm(){const[e,n]=q.useState(""),[t,r]=q.useState(`{
  
}`),[l,i]=q.useState(0),[o,s]=q.useState([]),[u,c]=q.useState(4),[h,m]=q.useState(),[p,v]=q.useState({PC:"0x0000",TR:"0x0000",AR:"0x0000",IR:"0x0000",DR:"0x0000",AC:"0x0000",E:"0"}),_=()=>{c(1),qp(e).then(Rr).then(s).then(()=>f("compiled succesfully","success")).catch(()=>f("failed to compile instuctions","error"))},w=()=>{bp().then(Rr).then(s).then(fu).then(v).then(()=>f("executed succesfully","success")).catch(()=>f("failed to execute instuctions","error"))},D=()=>{let d={};try{d=JSON.parse(t)}catch(x){f(x.message,"error");return}const y=Object.keys(d).map(x=>({address:x,value:d[x]}));em(y).then(Rr).then(s).then(()=>r(`{
  
}`)).then(()=>f("Saved to memory successfully","success")).catch(()=>f("Failed to save to memory","error"))},f=(d,y)=>{m({message:d,type:y}),setTimeout(()=>{m(null)},3e3)};q.useEffect(()=>{Rr().then(s).then(fu).then(v).then(()=>c(0)).catch(()=>{c(3)})},[]);const a=()=>{i(l==0?1:0)};return u==3?S.jsxs("div",{children:[S.jsx("h1",{className:"text-3xl",children:"Unexpected Error !"}),S.jsx("div",{children:"Failed to load memory and registers"})]}):u==4?S.jsxs("div",{children:[S.jsx("h1",{className:"text-3xl",children:"Starting the simulator…"}),S.jsx("div",{children:"Loading Python in your browser"})]}):S.jsxs("main",{className:"w-full py-4 md:py-1 max-w-[850px] flex flex-col md:grid md:grid-cols-2 gap-y-2 justify-items-center items-center px-2",children:[h&&S.jsx(nm,{message:h.message,type:h.type}),l===0?S.jsxs("div",{className:"instruction-editor w-full max-w-[360px] h-[500px] max-h-[500px] flex gap-2 flex-col",children:[S.jsx("h1",{className:"section-header cursor-pointer select-none",onClick:a,children:"Instruction Editor"}),S.jsx("div",{className:"h-full overflow-scroll flex-1 bg-[--primary-container] rounded-[20px]",children:S.jsx(su,{instructions:e,setInstrunctions:n})}),S.jsxs("div",{className:"buttons flex items-center justify-end gap-2",children:[S.jsxs("button",{className:"bg-[--secondary-container] text-[--on-secondary-container]",onClick:()=>_(),children:[S.jsx("i",{className:"icon-compile text-xl text-[--on-secondary-container]"}),S.jsx("span",{className:"text-[--on-secondary-container]",children:"Compile"})]}),S.jsxs("button",{className:"bg-[--primary] text-[--on-primary]",onClick:()=>w(),children:[S.jsx("i",{className:"icon-execute text-xl text-[--on-primary]"}),S.jsx("span",{className:"text-[--on-primary]",children:"Execute"})]})]})]}):S.jsxs("div",{className:"instruction-editor w-full max-w-[360px] h-[500px] max-h-[500px] flex gap-2 flex-col",children:[S.jsx("h1",{className:"section-header cursor-pointer select-none",onClick:a,children:"Memory Editor"}),S.jsx("div",{className:"h-full overflow-scroll flex-1 bg-[--primary-container] rounded-[20px]",children:S.jsx(su,{instructions:t,setInstrunctions:r})}),S.jsx("div",{className:"buttons flex items-center justify-end gap-2",children:S.jsxs("button",{className:"bg-[--secondary-container] text-[--on-secondary-container]",onClick:D,children:[S.jsx("i",{className:"icon-save text-xl text-[--on-secondary-container]"}),S.jsx("span",{className:"text-[--on-secondary-container]",children:"Save"})]})})]}),S.jsx(ep,{data:o}),S.jsx(gp,{data:p})]})}const rm=({theme:e,setTheme:n})=>S.jsxs("div",{className:"text-[--on-secondary] py-2 md:py-4 px-2 text-center w-full h-full bg-[--secondary] flex md:flex-col items-center justify-center",children:[S.jsx("button",{onClick:()=>n(e=="dark"?"light":"dark"),className:"bg-[--secondary-container] p-2 rounded-full text-[--on-secondary-container] flex items-center",children:S.jsx("i",{className:"icon-theme text-xl px-1 text-[--on-secondary-container]"})}),S.jsx("span",{className:"md:[writing-mode:vertical-lr] md:scale-[-1] text-[--on-secondary] flex-1 font-serif tracking-[8px] md:tracking-[16px]",children:"MICROPROCESSER"})]}),lm=({children:e})=>{const[n,t]=q.useState("dark"),r=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",l=()=>t(r());return q.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}},[n]),q.useEffect(()=>{t(r())},[]),S.jsxs("div",{id:"theme-provider",className:"flex flex-col items-center gap-3 sm:gap-6 bg-[--background] text-[--on-background]","data-theme":n,children:[S.jsx(rm,{theme:n,setTheme:t}),e]})};ii.createRoot(document.getElementById("root")).render(S.jsx($c.StrictMode,{children:S.jsx(lm,{children:S.jsx(tm,{})})}));
