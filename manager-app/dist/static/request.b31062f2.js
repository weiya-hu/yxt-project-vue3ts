var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{a,r as u}from"./index.12522c67.js";var c={exports:{}},f=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},l=f,p=Object.prototype.toString;function d(e){return Array.isArray(e)}function h(e){return void 0===e}function m(e){return"[object ArrayBuffer]"===p.call(e)}function g(e){return null!==e&&"object"==typeof e}function y(e){if("[object Object]"!==p.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function v(e){return"[object Function]"===p.call(e)}function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),d(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var w={isArray:d,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===p.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:g,isPlainObject:y,isUndefined:h,isDate:function(e){return"[object Date]"===p.call(e)},isFile:function(e){return"[object File]"===p.call(e)},isBlob:function(e){return"[object Blob]"===p.call(e)},isFunction:v,isStream:function(e){return g(e)&&v(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===p.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){y(t[n])&&y(r)?t[n]=e(t[n],r):y(r)?t[n]=e({},r):d(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,n){e[n]=r&&"function"==typeof t?l(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},E=w;function O(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var S=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(E.isURLSearchParams(t))n=t.toString();else{var o=[];E.forEach(t,(function(e,t){null!=e&&(E.isArray(e)?t+="[]":e=[e],E.forEach(e,(function(e){E.isDate(e)?e=e.toISOString():E.isObject(e)&&(e=JSON.stringify(e)),o.push(O(t)+"="+O(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},j=w;function x(){this.handlers=[]}x.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},x.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},x.prototype.forEach=function(e){j.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var C=x,P=w,T=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},N=T,A=function(e,t,r,n,o){var s=new Error(e);return N(s,t,r,n,o)},R=A,U=w,k=U.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),U.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),U.isString(n)&&i.push("path="+n),U.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},B=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},L=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},q=w,_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],D=w,I=D.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=D.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};function J(e){this.message=e}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},J.prototype.__CANCEL__=!0;var F=J,z=w,H=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(R("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},M=k,V=S,X=function(e,t){return e&&!B(t)?L(e,t):t},W=function(e){var t,r,n,o={};return e?(q.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=q.trim(e.substr(0,n)).toLowerCase(),r=q.trim(e.substr(n+1)),t){if(o[t]&&_.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},$=I,K=A,G=ie,Q=F,Y=function(e){return new Promise((function(t,r){var n,o=e.data,s=e.headers,i=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}z.isFormData(o)&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+f)}var l=X(e.baseURL,e.url);function p(){if(u){var n="getAllResponseHeaders"in u?W(u.getAllResponseHeaders()):null,o={data:i&&"text"!==i&&"json"!==i?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:e,request:u};H((function(e){t(e),a()}),(function(e){r(e),a()}),o),u=null}}if(u.open(e.method.toUpperCase(),V(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(p)},u.onabort=function(){u&&(r(K("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){r(K("Network Error",e,null,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||G.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(K(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},z.isStandardBrowserEnv()){var d=(e.withCredentials||$(l))&&e.xsrfCookieName?M.read(e.xsrfCookieName):void 0;d&&(s[e.xsrfHeaderName]=d)}"setRequestHeader"in u&&z.forEach(s,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:u.setRequestHeader(t,e)})),z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&"json"!==i&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(n=function(e){u&&(r(!e||e&&e.type?new Q("canceled"):e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n))),o||(o=null),u.send(o)}))},Z=w,ee=function(e,t){P.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},te=T,re={"Content-Type":"application/x-www-form-urlencoded"};function ne(e,t){!Z.isUndefined(e)&&Z.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var oe,se={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(oe=Y),oe),transformRequest:[function(e,t){return ee(t,"Accept"),ee(t,"Content-Type"),Z.isFormData(e)||Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)?e:Z.isArrayBufferView(e)?e.buffer:Z.isURLSearchParams(e)?(ne(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Z.isObject(e)||t&&"application/json"===t["Content-Type"]?(ne(t,"application/json"),function(e,t,r){if(Z.isString(e))try{return(t||JSON.parse)(e),Z.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||se.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&Z.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(o){if("SyntaxError"===s.name)throw te(s,this,"E_JSON_PARSE");throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Z.forEach(["delete","get","head"],(function(e){se.headers[e]={}})),Z.forEach(["post","put","patch"],(function(e){se.headers[e]=Z.merge(re)}));var ie=se,ae=w,ue=ie,ce=function(e){return!(!e||!e.__CANCEL__)},fe=w,le=function(e,t,r){var n=this||ue;return ae.forEach(r,(function(r){e=r.call(n,e,t)})),e},pe=ce,de=ie,he=F;function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he("canceled")}var ge=w,ye=function(e,t){t=t||{};var r={};function n(e,t){return ge.isPlainObject(e)&&ge.isPlainObject(t)?ge.merge(e,t):ge.isPlainObject(t)?ge.merge({},t):ge.isArray(t)?t.slice():t}function o(r){return ge.isUndefined(t[r])?ge.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function s(e){if(!ge.isUndefined(t[e]))return n(void 0,t[e])}function i(r){return ge.isUndefined(t[r])?ge.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function a(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return ge.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,n=t(e);ge.isUndefined(n)&&t!==a||(r[e]=n)})),r},ve="0.25.0",be=ve,we={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var Ee={};we.transitional=function(e,t,r){return function(n,o,s){if(!1===e)throw new Error(function(e,t){return"[Axios v"+be+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}(o," has been removed"+(t?" in "+t:"")));return t&&!Ee[o]&&(Ee[o]=!0),!e||e(n,o,s)}};var Oe=w,Se=S,je=C,xe=function(e){return me(e),e.headers=e.headers||{},e.data=le.call(e,e.data,e.headers,e.transformRequest),e.headers=fe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),fe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||de.adapter)(e).then((function(t){return me(e),t.data=le.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return pe(t)||(me(e),t&&t.response&&(t.response.data=le.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ce=ye,Pe={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var s=n[o],i=t[s];if(i){var a=e[s],u=void 0===a||i(a,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+s)}},validators:we},Te=Pe.validators;function Ne(e){this.defaults=e,this.interceptors={request:new je,response:new je}}Ne.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=Ce(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&Pe.assertOptions(r,{silentJSONParsing:Te.transitional(Te.boolean),forcedJSONParsing:Te.transitional(Te.boolean),clarifyTimeoutError:Te.transitional(Te.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var s,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!o){var a=[xe,void 0];for(Array.prototype.unshift.apply(a,n),a=a.concat(i),s=Promise.resolve(t);a.length;)s=s.then(a.shift(),a.shift());return s}for(var u=t;n.length;){var c=n.shift(),f=n.shift();try{u=c(u)}catch(l){f(l);break}}try{s=xe(u)}catch(l){return Promise.reject(l)}for(;i.length;)s=s.then(i.shift(),i.shift());return s},Ne.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=Ce(this.defaults,e),Se(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Oe.forEach(["delete","get","head","options"],(function(e){Ne.prototype[e]=function(t,r){return this.request(Ce(r||{},{method:e,url:t,data:(r||{}).data}))}})),Oe.forEach(["post","put","patch"],(function(e){Ne.prototype[e]=function(t,r,n){return this.request(Ce(n||{},{method:e,url:t,data:r}))}}));var Ae=Ne,Re=F;function Ue(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new Re(e),t(r.reason))}))}Ue.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ue.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Ue.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Ue.source=function(){var e;return{token:new Ue((function(t){e=t})),cancel:e}};var ke=Ue,Be=w,Le=w,qe=f,_e=Ae,De=ye;var Ie=function e(t){var r=new _e(t),n=qe(_e.prototype.request,r);return Le.extend(n,_e.prototype,r),Le.extend(n,r),n.create=function(r){return e(De(t,r))},n}(ie);Ie.Axios=_e,Ie.Cancel=F,Ie.CancelToken=ke,Ie.isCancel=ce,Ie.VERSION=ve,Ie.all=function(e){return Promise.all(e)},Ie.spread=function(e){return function(t){return e.apply(null,t)}},Ie.isAxiosError=function(e){return Be.isObject(e)&&!0===e.isAxiosError},c.exports=Ie,c.exports.default=Ie;var Je=c.exports;function Fe(e,t,r,n){return new Promise(((o,s)=>{Je.get(e?"api"+t:"bgapi"+t,{params:r}).then((e=>{n&&e.data&&1==e.data.status&&a({showClose:!0,message:e.data.message,type:"success",grouping:!0}),o(e.data)})).catch((e=>{s(e)}))}))}function ze(e,t,r,n){return new Promise(((o,s)=>{Je.post(e?"api"+t:"bgapi"+t,r).then((e=>{n&&e.data&&1==e.data.status&&a({showClose:!0,message:e.data.message,type:"success",grouping:!0}),o(e.data)})).catch((e=>{s(e)}))}))}function He(e,t,r,n,o){return new Promise(((s,i)=>{Je.get(e?"api"+t:"bgapi"+t,{params:n,responseType:r}).then((e=>{o&&e.data&&1===e.data.status&&a({showClose:!0,message:e.data.message,type:"success",grouping:!0}),s(e.data)})).catch((e=>{i(e)}))}))}Je.defaults.baseURL="/",Je.interceptors.request.use((e=>{const a=localStorage.getItem("firstToken");var u;return a&&(e.headers=(u=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))s.call(t,r)&&i(e,r,t[r]);return e})({},e.headers),t(u,r({"Content-Type":"application/json",Authorization:a})))),e})),Je.interceptors.response.use((e=>{if(200==e.status){const t=e.data;if(0==t.status&&t.errno&&10200!=t.errno&&(a({showClose:!0,message:t.message,type:"error",grouping:!0}),10620==t.errno)){sessionStorage.getItem("islogin")&&(sessionStorage.removeItem("islogin"),u.replace("/login"))}}return e}),(e=>(a({showClose:!0,message:"接口错误，请联系管理员",type:"error",grouping:!0}),e)));export{Je as _,He as a,Fe as g,ze as p};