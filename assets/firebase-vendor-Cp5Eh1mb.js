var t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==a||null==c)throw new s;const u=e<<2|o>>4;if(r.push(u),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(t){return function(t){const s=e(t);return n.encodeByteArray(s,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,o=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(s){return}const e=t&&function(t){try{return n.decodeString(t,!0)}catch(s){}return null}(t[1]);return e&&JSON.parse(e)},a=()=>{try{return i()||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||o()}catch(e){return}},c=t=>{const e=(t=>{var e,n;return null==(n=null==(e=a())?void 0:e.emulatorHosts)?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},u=()=>{var t;return null==(t=a())?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return!function(){var t;const e=null==(t=a())?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class d extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(p,(t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new d(s,o,n)}}const p=/\{\$([^}]+)}/g;function g(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(m(n)&&m(i)){if(!g(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function m(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}class w{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new h;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=(null==t?void 0:t.optional)??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:E})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=E){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=E){return this.instances.has(t)}getOptions(t=E){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(r)&&i.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&t(r,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===E?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var s;return n||null}normalizeInstanceIdentifier(t=E){return this.component?this.component.multipleInstances?t:E:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new b(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T,S;(S=T||(T={}))[S.DEBUG=0]="DEBUG",S[S.VERBOSE=1]="VERBOSE",S[S.INFO=2]="INFO",S[S.WARN=3]="WARN",S[S.ERROR=4]="ERROR",S[S.SILENT=5]="SILENT";const I={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},C=T.INFO,A={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},D=(t,e,...n)=>{if(e<t.logLevel)return;(new Date).toISOString();if(!A[e])throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class N{constructor(t){this.name=t,this._logLevel=C,this._logHandler=D,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in T))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?I[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...t),this._logHandler(this,T.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...t),this._logHandler(this,T.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,T.INFO,...t),this._logHandler(this,T.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,T.WARN,...t),this._logHandler(this,T.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...t),this._logHandler(this,T.ERROR,...t)}}let k,R;const x=new WeakMap,O=new WeakMap,L=new WeakMap,M=new WeakMap,V=new WeakMap;let P={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return O.get(t);if("objectStoreNames"===e)return t.objectStoreNames||L.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return B(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function F(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(R||(R=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(j(this),e),B(x.get(this))}:function(...e){return B(t.apply(j(this),e))}:function(e,...n){const s=t.call(j(this),e,...n);return L.set(s,e.sort?e.sort():[e]),B(s)}}function U(t){return"function"==typeof t?F(t):(t instanceof IDBTransaction&&function(t){if(O.has(t))return;const e=new Promise((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});O.set(t,e)}(t),e=t,(k||(k=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,P):t);var e}function B(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(B(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&x.set(e,t)}).catch(()=>{}),V.set(e,t),e}(t);if(M.has(t))return M.get(t);const e=U(t);return e!==t&&(M.set(t,e),V.set(e,t)),e}const j=t=>V.get(t);const q=["get","getKey","getAll","getAllKeys","count"],$=["put","add","delete","clear"],z=new Map;function K(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(z.get(e))return z.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!q.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return z.set(e,i),i}P=(t=>({...t,get:(e,n,s)=>K(e,n)||t.get(e,n,s),has:(e,n)=>!!K(e,n)||t.has(e,n)}))(P);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const H="@firebase/app",Q="0.14.12",W=new N("@firebase/app"),J="@firebase/app-compat",X="@firebase/analytics-compat",Y="@firebase/analytics",Z="@firebase/app-check-compat",tt="@firebase/app-check",et="@firebase/auth",nt="@firebase/auth-compat",st="@firebase/database",rt="@firebase/data-connect",it="@firebase/database-compat",ot="@firebase/functions",at="@firebase/functions-compat",ct="@firebase/installations",ut="@firebase/installations-compat",ht="@firebase/messaging",lt="@firebase/messaging-compat",dt="@firebase/performance",ft="@firebase/performance-compat",pt="@firebase/remote-config",gt="@firebase/remote-config-compat",mt="@firebase/storage",yt="@firebase/storage-compat",vt="@firebase/firestore",wt="@firebase/ai",Et="@firebase/firestore-compat",bt="firebase",_t="[DEFAULT]",Tt={[H]:"fire-core",[J]:"fire-core-compat",[Y]:"fire-analytics",[X]:"fire-analytics-compat",[tt]:"fire-app-check",[Z]:"fire-app-check-compat",[et]:"fire-auth",[nt]:"fire-auth-compat",[st]:"fire-rtdb",[rt]:"fire-data-connect",[it]:"fire-rtdb-compat",[ot]:"fire-fn",[at]:"fire-fn-compat",[ct]:"fire-iid",[ut]:"fire-iid-compat",[ht]:"fire-fcm",[lt]:"fire-fcm-compat",[dt]:"fire-perf",[ft]:"fire-perf-compat",[pt]:"fire-rc",[gt]:"fire-rc-compat",[mt]:"fire-gcs",[yt]:"fire-gcs-compat",[vt]:"fire-fst",[Et]:"fire-fst-compat",[wt]:"fire-vertex","fire-js":"fire-js",[bt]:"fire-js-all"},St=new Map,It=new Map,Ct=new Map;function At(t,e){try{t.container.addComponent(e)}catch(n){W.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(Ct.has(e))return W.debug(`There were multiple attempts to register component ${e}.`),!1;Ct.set(e,t);for(const n of St.values())At(n,t);for(const n of It.values())At(n,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s={name:_t,automaticDataCollectionEnabled:!0,...e},r=s.name;if("string"!=typeof r||!r)throw Nt.create("bad-app-name",{appName:String(r)});if(n||(n=u()),!n)throw Nt.create("no-options");const i=St.get(r);if(i){if(g(n,i.options)&&g(s,i.config))return i;throw Nt.create("duplicate-app",{appName:r})}const o=new _(r);for(const c of Ct.values())o.addComponent(c);const a=new kt(n,s,o);return St.set(r,a),a}function xt(t,e,n){let s=Tt[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&t.push("and"),i&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void W.warn(t.join(" "))}Dt(new w(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="firebase-heartbeat-store";let Lt=null;function Mt(){return Lt||(Lt=function(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=B(o);return s&&o.addEventListener("upgradeneeded",t=>{s(B(o.result),t.oldVersion,t.newVersion,B(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{i&&t.addEventListener("close",()=>i()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Ot)}catch(n){}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Lt}async function Vt(t,e){try{const n=(await Mt()).transaction(Ot,"readwrite"),s=n.objectStore(Ot);await s.put(e,Pt(t)),await n.done}catch(n){if(n instanceof d)W.warn(n.message);else{const t=Nt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});W.warn(t.message)}}}function Pt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ut();if(null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(t=>t.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){W.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ut(),{heartbeatsToSend:n,unsentEntries:s}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),jt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),i=r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return W.warn(e),""}}}function Ut(){return(new Date).toISOString().substring(0,10)}class Bt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null==(t=r.error)?void 0:t.message)||"")}}catch(n){e(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Mt()).transaction(Ot),n=await e.objectStore(Ot).get(Pt(t));return await e.done,n}catch(e){if(e instanceof d)W.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});W.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Vt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Vt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function jt(t){return r(JSON.stringify({version:2,heartbeats:t})).length}var qt;qt="",Dt(new w("platform-logger",t=>new G(t),"PRIVATE")),Dt(new w("heartbeat",t=>new Ft(t),"PRIVATE")),xt(H,Q,qt),xt(H,Q,"esm2020"),xt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt("firebase","12.13.0","app");var $t,zt,Kt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const s=Array(16);if("string"==typeof e)for(var r=0;r<16;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;r<16;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];let i,o=t.g[3];i=e+(o^n&(r^o))+s[0]+3614090360&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[1]+3905402710&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[2]+606105819&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[3]+3250441966&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[4]+4118548399&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[5]+1200080426&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[6]+2821735955&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[7]+4249261313&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[8]+1770035416&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[9]+2336552879&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[10]+4294925233&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[11]+2304563134&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[12]+1804603682&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[13]+4254626195&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[14]+2792965006&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[15]+1236535329&4294967295,i=e+(r^o&((n=r+(i<<22&4294967295|i>>>10))^r))+s[1]+4129170786&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[6]+3225465664&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[11]+643717713&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[0]+3921069994&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[5]+3593408605&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[10]+38016083&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[15]+3634488961&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[4]+3889429448&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[9]+568446438&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[14]+3275163606&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[3]+4107603335&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[8]+1163531501&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[13]+2850285829&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[2]+4243563512&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[7]+1735328473&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[12]+2368359562&4294967295,i=e+((n=r+(i<<20&4294967295|i>>>12))^r^o)+s[5]+4294588738&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[8]+2272392833&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[11]+1839030562&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[14]+4259657740&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[1]+2763975236&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[4]+1272893353&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[7]+4139469664&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[10]+3200236656&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[13]+681279174&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[0]+3936430074&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[3]+3572445317&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[6]+76029189&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[9]+3654602809&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[12]+3873151461&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[15]+530742520&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[2]+3299628645&4294967295,i=e+(r^((n=r+(i<<23&4294967295|i>>>9))|~o))+s[0]+4096336452&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[7]+1126891415&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[14]+2878612391&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[5]+4237533241&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[12]+1700485571&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[3]+2399980690&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[10]+4293915773&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[1]+2240044497&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[8]+1873313359&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[15]+4264355552&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[6]+2734768916&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[13]+1309151649&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[4]+4149444226&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[11]+3174756917&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[2]+718787259&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+o&4294967295}function s(t,e){this.h=e;const n=[];let s=!0;for(let r=t.length-1;r>=0;r--){const i=0|t[r];s&&i==e||(n[r]=i,s=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const s=e-this.blockSize,r=this.C;let i=this.h,o=0;for(;o<e;){if(0==i)for(;o<=s;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){n(this,r),i=0;break}}this.h=i,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let s=0;s<32;s+=8)t[e++]=this.g[n]>>>s&255;return t};var r={};function i(t){return-128<=t&&t<128?function(t,e){var n=r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new s([0|t],t<0?-1:0)}):new s([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let s=0;t>=n;s++)e[s]=t/n|0,n*=4294967296;return new s(e,0)}var a=i(0),c=i(1),u=i(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let s=0;s<e;s++)n[s]=~t.g[s];return new s(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(l(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,s=e;s.l(t)<=0;)n=y(n),s=y(s);var r=v(n,1),i=v(s,1);for(s=v(s,2),n=v(n,2);!h(s);){var u=i.add(s);u.l(t)<=0&&(r=r.add(n),i=u),s=v(s,1),n=v(n,1)}return e=f(t,r.j(e)),new g(r,e)}for(r=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),s=(s=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,s-48),u=(i=o(n)).j(e);l(u)||u.l(t)>0;)u=(i=o(n-=s)).j(e);h(i)&&(i=c),r=r.add(i),t=f(t,u)}return new g(r,t)}function y(t){const e=t.g.length+1,n=[];for(let s=0;s<e;s++)n[s]=t.i(s)<<1|t.i(s-1)>>>31;return new s(n,t.h)}function v(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new s(i,t.h)}(t=s.prototype).m=function(){if(l(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const s=this.i(n);t+=(s>=0?s:4294967296+s)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let s="";for(;;){const r=m(n,e).g;let i=(((n=f(n,r.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=r))return i+s;for(;i.length<6;)i="0"+i;s=i+s}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let s=0;s<=e;s++){let e=r+(65535&this.i(s))+(65535&t.i(s)),i=(e>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=i>>>16,e&=65535,i&=65535,n[s]=i<<16|e}return new s(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(this.l(u)<0&&t.l(u)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const s=this.i(r)>>>16,i=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=i*a,p(n,2*r+2*e),n[2*r+2*e+1]+=s*a,p(n,2*r+2*e+1),n[2*r+2*e+1]+=i*o,p(n,2*r+2*e+1),n[2*r+2*e+2]+=s*o,p(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new s(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)&t.i(s);return new s(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)|t.i(s);return new s(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)^t.i(s);return new s(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,zt=e,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.B,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=o,s.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const s=o(Math.pow(n,8));let r=a;for(let a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+i),n);i<8?(i=o(Math.pow(n,i)),r=r.j(i).add(o(t))):(r=r.j(s),r=r.add(o(t)))}return r},$t=s}).apply(void 0!==Kt?Kt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Gt,Ht,Qt,Wt,Jt,Xt,Yt,Zt,te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e=Object.defineProperty;var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof te&&te];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function s(t,s){if(s)t:{var r=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in r))break t;r=r[o]}(s=s(i=r[t=t[t.length-1]]))!=i&&null!=s&&e(r,t,{configurable:!0,writable:!0,value:s})}}s("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function f(t,e){for(let s=1;s<arguments.length;s++){const e=arguments[s];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function p(t){i.setTimeout(()=>{throw t},0)}function g(){var t=E;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,E=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},b=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(_)}};function _(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){p(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}w=!1}function T(){this.u=this.u,this.C=this.C}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function A(t,e){S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}h(A,S),A.prototype.init=function(t,e){const n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),N=0;function k(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++N,this.da=this.fa=!1}function R(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function x(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function O(t){const e={};for(const n in t)e[n]=t[n];return e}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function V(t){this.src=t,this.g={},this.h=0}function P(t,e){const n=e.type;if(n in t.g){var s,r=t.g[n],i=Array.prototype.indexOf.call(r,e,void 0);(s=i>=0)&&Array.prototype.splice.call(r,i,1),s&&(R(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function F(t,e,n,s){for(let r=0;r<t.length;++r){const i=t[r];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}V.prototype.add=function(t,e,n,s,r){const i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);const o=F(t,e,s,r);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new k(e,this.src,i,!!s,r)).fa=n,t.push(e)),e};var U="closure_lm_"+(1e6*Math.random()|0),B={};function j(t,e,n,s,r){if(Array.isArray(e)){for(let i=0;i<e.length;i++)j(t,e[i],n,s,r);return null}return n=Q(n),t&&t[D]?t.J(e,n,!!o(s)&&!!s.capture,r):function(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");const a=o(r)?!!r.capture:!!r;let c=G(t);if(c||(t[U]=c=new V(t)),n=c.add(e,n,s,a,i),n.proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=K;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)I||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(z(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}(t,e,n,!1,s,r)}function q(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)q(t,e[i],n,s,r);else s=o(s)?!!s.capture:!!s,n=Q(n),t&&t[D]?(t=t.i,(i=String(e).toString())in t.g&&((n=F(e=t.g[i],n,s,r))>-1&&(R(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[i],t.h--)))):t&&(t=G(t))&&(e=t.g[e.toString()],t=-1,e&&(t=F(e,n,s,r)),(n=t>-1?e[t]:null)&&$(n))}function $(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[D])P(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(z(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=G(e))?(P(n,t),0==n.h&&(n.src=null,e[U]=null)):R(t)}}}function z(t){return t in B?B[t]:B[t]="on"+t}function K(t,e){if(t.da)t=!0;else{e=new A(e,this);const n=t.listener,s=t.ha||t.src;t.fa&&$(t),t=n.call(s,e)}return t}function G(t){return(t=t[U])instanceof V?t:null}var H="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(t){return"function"==typeof t?t:(t[H]||(t[H]=function(e){return t.handleEvent(e)}),t[H])}function W(){T.call(this),this.i=new V(this),this.M=this,this.G=null}function J(t,e){var n,s=t.G;if(s)for(n=[];s;s=s.G)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;M(e=new S(s,t),r)}let i,o;if(r=!0,n)for(o=n.length-1;o>=0;o--)i=e.g=n[o],r=X(i,s,!0,e)&&r;if(i=e.g=t,r=X(i,s,!0,e)&&r,r=X(i,s,!1,e)&&r,n)for(o=0;o<n.length;o++)i=e.g=n[o],r=X(i,s,!1,e)&&r}function X(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let r=!0;for(let i=0;i<e.length;++i){const o=e[i];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&P(t.i,o),r=!1!==e.call(n,s)&&r}}return r&&!s.defaultPrevented}function Y(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:i.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,Y(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(W,T),W.prototype[D]=!0,W.prototype.removeEventListener=function(t,e,n,s){q(this,t,e,n,s)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)R(n[t]);delete t.g[e],t.h--}}this.G=null},W.prototype.J=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},W.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class Z extends T{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){T.call(this),this.h=t,this.g={}}h(tt,T);var et=[];function nt(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&$(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=i.JSON.stringify,rt=i.JSON.parse,it=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function ot(){}function at(){}var ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ut(){S.call(this,"d")}function ht(){S.call(this,"c")}h(ut,S),h(ht,S);var lt={},dt=null;function ft(){return dt=dt||new W}function pt(t){S.call(this,lt.Ia,t)}function gt(t){const e=ft();J(e,new pt(e))}function mt(t,e){S.call(this,lt.STAT_EVENT,t),this.stat=e}function yt(t){const e=ft();J(e,new mt(e,t))}function vt(t,e){S.call(this,lt.Ja,t),this.size=e}function wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){t()},e)}function Et(){this.g=!0}function bt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(n.length<2)){var s=n[1];if(Array.isArray(s)&&!(s.length<1)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(let t=1;t<s.length;t++)s[t]=""}}}return st(i)}catch(i){return e}}(t,n)+(s?" "+s:"")})}lt.Ia="serverreachability",h(pt,S),lt.STAT_EVENT="statevent",h(mt,S),lt.Ja="timingevent",h(vt,S),Et.prototype.ua=function(){this.g=!1},Et.prototype.info=function(){};var _t,Tt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},St={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function It(){}function Ct(t){return encodeURIComponent(String(t))}function At(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t,e,n,s){this.j=t,this.i=e,this.l=n,this.S=s||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}h(It,ot),It.prototype.g=function(){return new XMLHttpRequest},_t=new It;var kt={},Rt={};function xt(t,e,n){t.M=1,t.A=de(ae(e)),t.u=n,t.R=!0,Ot(t,null)}function Ot(t,e){t.F=Date.now(),Vt(t),t.B=ae(t.A);var n=t.B,s=t.S;Array.isArray(s)||(s=[String(s)]),Ce(n.i,"t",s),t.C=0,n=t.j.L,t.h=new Nt,t.g=fn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Z(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,s=t.ba;var r="readystatechange";Array.isArray(r)||(r&&(et[0]=r.toString()),r=et);for(let i=0;i<r.length;i++){const t=j(n,r[i],s||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?O(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),gt(),function(t,e,n,s,r,i){t.info(function(){if(t.g)if(i){var o="",a=i.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function Lt(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function Mt(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Rt:(n=Number(e.substring(n,s)),isNaN(n)?kt:(s+=1)+n>e.length?Rt:(e=e.slice(s,s+n),t.C=s+n,e))}function Vt(t){t.T=Date.now()+t.H,Pt(t,t.H)}function Pt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=wt(c(t.aa,t),e)}function Ft(t){t.D&&(i.clearTimeout(t.D),t.D=null)}function Ut(t){0==t.j.I||t.K||cn(t.j,t)}function Bt(t){Ft(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function jt(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ee(n.h,t)))if(!t.L&&ee(n.h,t)&&3==n.I){try{var s=n.Ba.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;an(n),Je(n)}sn(n),yt(18)}}else n.xa=r[1],0<n.xa-n.K&&r[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=wt(c(n.Va,n),6e3));Kt(n.h)<=1&&n.ta&&(n.ta=void 0)}else hn(n,11)}else if((t.L||n.g==t)&&an(n),!C(e))for(r=n.Ba.g.parse(e),e=0;e<r.length;e++){let c=r[e];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const r=c[4];null!=r&&(n.za=r,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(s=1.5*h,n.O=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ne(i,i.h),i.h=null))}if(s.G){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.wa=t,le(s.J,s.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((s=n).na=dn(s,s.L?s.ba:null,s.W),o.L){se(s.h,o);var a=o,u=s.O;u&&(a.H=u),a.D&&(Ft(a),Vt(a)),s.g=o}else nn(s);n.i.length>0&&Ye(n)}else"stop"!=c[0]&&"close"!=c[0]||hn(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?hn(n,7):We(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}gt()}catch(h){}}Dt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Ke(t)?e.j():this.Y(t)},Dt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Ke(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Ge(this.g)))){this.K||4!=c||7==u||gt(),Ft(this);var e=this.g.ca();this.X=e;var n=function(t){if(!Lt(t))return t.g.la();const e=Ge(t.g);if(""===e)return"";let n="";const s=e.length,r=4==Ke(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return Bt(t),Ut(t),"";t.h.i=new i.TextDecoder}for(let i=0;i<s;i++)t.h.h=!0,n+=t.h.i.decode(e[i],{stream:!(r&&i==s-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var s,r=this.g;if((s=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(s)){var o=s;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,yt(12),Bt(this),Ut(this);break t}bt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jt(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Mt(this,n),e==Rt){4==c&&(this.m=4,yt(14),t=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,yt(15),bt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}bt(this.i,this.l,e,null),jt(this,e)}if(Lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,yt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rn(a),a.P=!0,yt(11))}}else bt(this.i,this.l,n,"[Invalid Chunked Response]"),Bt(this),Ut(this)}else bt(this.i,this.l,n,null),jt(this,n);4==c&&Bt(this),this.o&&!this.K&&(4==c?cn(this.j,this):(this.o=!1,Vt(this)))}else(function(t){const e={};t=(t.g&&Ke(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(C(t[s]))continue;var n=At(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Bt(this),Ut(this)}}}catch(c){}},Dt.prototype.cancel=function(){this.K=!0,Bt(this)},Dt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(gt(),yt(17)),Bt(this),this.m=2,Ut(this)):Pt(this,this.T-t)};var qt=class{constructor(t,e){this.g=t,this.map=e}};function $t(t){this.l=t||10,i.PerformanceNavigationTiming?t=(t=i.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Kt(t){return t.h?1:t.g?t.g.size:0}function ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ne(t,e){t.g?t.g.add(e):t.h=e}function se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function re(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}$t.prototype.cancel=function(){if(this.i=re(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oe(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof oe?(this.l=t.l,ce(this,t.j),this.o=t.o,this.g=t.g,ue(this,t.u),this.h=t.h,he(this,Ae(t.i)),this.m=t.m):t&&(e=String(t).match(ie))?(this.l=!1,ce(this,e[1]||"",!0),this.o=fe(e[2]||""),this.g=fe(e[3]||"",!0),ue(this,e[4]),this.h=fe(e[5]||"",!0),he(this,e[6]||"",!0),this.m=fe(e[7]||"")):(this.l=!1,this.i=new be(null,this.l))}function ae(t){return new oe(t)}function ce(t,e,n){t.j=n?fe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ue(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function he(t,e,n){e instanceof be?(t.i=e,function(t,e){e&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Te(this,e),Ce(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=pe(e,we)),t.i=new be(e,t.l))}function le(t,e,n){t.i.set(e,n)}function de(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ge(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}oe.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(pe(e,me,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(pe(e,me,!0),"@"),t.push(Ct(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(pe(n,"/"==n.charAt(0)?ve:ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",pe(n,Ee)),t.join("")},oe.prototype.resolve=function(t){const e=ae(this);let n=!!t.j;n?ce(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var s=t.h;if(n)ue(e,t.u);else if(n=!!t.h){if("/"!=s.charAt(0))if(this.g&&!this.h)s="/"+s;else{var r=e.h.lastIndexOf("/");-1!=r&&(s=e.h.slice(0,r+1)+s)}if(".."==(r=s)||"."==r)s="";else if(-1!=r.indexOf("./")||-1!=r.indexOf("/.")){s=0==r.lastIndexOf("/",0),r=r.split("/");const t=[];for(let e=0;e<r.length;){const n=r[e++];"."==n?s&&e==r.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),s&&e==r.length&&t.push("")):(t.push(n),s=!0)}s=t.join("/")}else s=r}return n?e.h=s:n=""!==t.i.toString(),n?he(e,Ae(t.i)):n=!!t.m,n&&(e.m=t.m),e};var me=/[#\/\?@]/g,ye=/[#\?:]/g,ve=/[#\?]/g,we=/[#\?@]/g,Ee=/#/g;function be(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const s=t[n].indexOf("=");let r,i=null;s>=0?(r=t[n].substring(0,s),i=t[n].substring(s+1)):r=t[n],e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Te(t,e){_e(t),e=De(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Se(t,e){return _e(t),e=De(t,e),t.g.has(e)}function Ie(t,e){_e(t);let n=[];if("string"==typeof e)Se(t,e)&&(n=n.concat(t.g.get(De(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ce(t,e,n){Te(t,e),n.length>0&&(t.i=null,t.g.set(De(t,e),d(n)),t.h+=n.length)}function Ae(t){const e=new be;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function De(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ne(t,e,n,s,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),s(n)}catch(i){}}function ke(){this.g=new it}function Re(t){this.i=t.Sb||null,this.h=t.ab||!1}function xe(t,e){W.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Oe(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Le(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Me(t)}function Me(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ve(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Pe(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ve(n),"string"==typeof t?null!=n&&Ct(n):le(t,e,n))}function Fe(t){W.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=be.prototype).add=function(t,e){_e(this),this.i=null,t=De(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){_e(this),this.g.forEach(function(n,s){n.forEach(function(n){t.call(e,n,s,this)},this)},this)},t.set=function(t,e){return _e(this),this.i=null,Se(this,t=De(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=Ie(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let s=0;s<e.length;s++){var n=e[s];const r=Ct(n);n=Ie(this,n);for(let e=0;e<n.length;e++){let s=r;""!==n[e]&&(s+="="+Ct(n[e])),t.push(s)}}return this.i=t.join("&")},h(Re,ot),Re.prototype.g=function(){return new xe(this.i,this.h)},h(xe,W),(t=xe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Me(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||i).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Le(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oe(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Le(this):Me(this),3==this.readyState&&Oe(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Le(this))},t.Na=function(t){this.g&&(this.response=t,Le(this))},t.ga=function(){this.g&&Le(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Fe,W);var Ue=/^https?$/i,Be=["POST","PUT"];function je(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,qe(t),ze(t)}function qe(t){t.A||(t.A=!0,J(t,"complete"),J(t,"error"))}function $e(t){if(t.h&&void 0!==r)if(t.v&&4==Ke(t))setTimeout(t.Ca.bind(t),0);else if(J(t,"readystatechange"),4==Ke(t)){t.h=!1;try{const r=t.ca();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){let e=String(t.D).match(ie)[1]||null;!e&&i.self&&i.self.location&&(e=i.self.location.protocol.slice(0,-1)),s=!Ue.test(e?e.toLowerCase():"")}n=s}if(n)J(t,"complete"),J(t,"success");else{t.o=6;try{var o=Ke(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",qe(t)}}finally{ze(t)}}}function ze(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const s=t.g;t.g=null,e||J(t,"ready");try{s.onreadystatechange=null}catch(n){}}}function Ke(t){return t.g?t.g.readyState:0}function Ge(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function He(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qe(t){this.za=0,this.i=[],this.j=new Et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=He("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=He("baseRetryDelayMs",5e3,t),this.Za=He("retryDelaySeedMs",1e4,t),this.Ta=He("forwardChannelMaxRetries",2,t),this.va=He("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new $t(t&&t.concurrentRequestLimit),this.Ba=new ke,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function We(t){if(Xe(t),3==t.I){var e=t.V++,n=ae(t.J);if(le(n,"SID",t.M),le(n,"RID",e),le(n,"TYPE","terminate"),tn(t,n),(e=new Dt(t,t.j,e)).M=2,e.A=de(ae(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.A.toString(),"")}catch(s){}!n&&i.Image&&((new Image).src=e.A,n=!0),n||(e.g=fn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Vt(e)}ln(t)}function Je(t){t.g&&(rn(t),t.g.cancel(),t.g=null)}function Xe(t){Je(t),t.v&&(i.clearTimeout(t.v),t.v=null),an(t),t.h.cancel(),t.m&&("number"==typeof t.m&&i.clearTimeout(t.m),t.m=null)}function Ye(t){if(!zt(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||b(),w||(v(),w=!0),E.add(e,t),t.D=0}}function Ze(t,e){var n;n=e?e.l:t.V++;const s=ae(t.J);le(s,"SID",t.M),le(s,"RID",n),le(s,"AID",t.K),tn(t,s),t.u&&t.o&&Pe(s,t.u,t.o),n=new Dt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=en(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ne(t.h,n),xt(n,s,e)}function tn(t,e){t.H&&x(t.H,function(t,n){le(e,n,t)}),t.l&&x({},function(t,n){le(e,n,t)})}function en(t,e,n){n=Math.min(t.i.length,n);const s=t.l?c(t.l.Ka,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let h=0;h<n;h++){var i=r[h].g;const n=r[h].map;if((i-=e)<0)e=Math.max(0,r[h].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let s=n;o(n)&&(s=st(n)),t.push(i+e+"="+encodeURIComponent(s))}}catch(u){throw t.push(i+"type="+encodeURIComponent("_badmap")),u}}catch(u){s&&s(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function nn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||b(),w||(v(),w=!0),E.add(e,t),t.A=0}}function sn(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=wt(c(t.Da,t),un(t,t.A)),t.A++,!0)}function rn(t){null!=t.B&&(i.clearTimeout(t.B),t.B=null)}function on(t){t.g=new Dt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=ae(t.na);le(e,"RID","rpc"),le(e,"SID",t.M),le(e,"AID",t.K),le(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&le(e,"TO",t.ia),le(e,"TYPE","xmlhttp"),tn(t,e),t.u&&t.o&&Pe(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=de(ae(e)),n.u=null,n.R=!0,Ot(n,t)}function an(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function cn(t,e){var n=null;if(t.g==e){an(t),rn(t),t.g=null;var s=2}else{if(!ee(t.h,e))return;n=e.G,se(t.h,e),s=1}if(0!=t.I)if(e.o)if(1==s){n=e.u?e.u.length:0,e=Date.now()-e.F;var r=t.D;J(s=ft(),new vt(s,n)),Ye(t)}else nn(t);else if(3==(r=e.m)||0==r&&e.X>0||!(1==s&&function(t,e){return!(Kt(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=wt(c(t.Ea,t,e),un(t,t.D)),t.D++,0)))}(t,e)||2==s&&sn(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),r){case 1:hn(t,5);break;case 4:hn(t,10);break;case 3:hn(t,6);break;default:hn(t,2)}}function un(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function hn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),s=t.Ua;const e=!s;s=new oe(s||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ce(s,"https"),de(s),e?function(t,e){const n=new Et;if(i.Image){const s=new Image;s.onload=u(Ne,n,"TestLoadImage: loaded",!0,e,s),s.onerror=u(Ne,n,"TestLoadImage: error",!1,e,s),s.onabort=u(Ne,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=u(Ne,n,"TestLoadImage: timeout",!1,e,s),i.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}(s.toString(),n):function(t,e){new Et;const n=new AbortController,s=setTimeout(()=>{n.abort(),Ne(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(s),t.ok?Ne(0,0,!0,e):Ne(0,0,!1,e)}).catch(()=>{clearTimeout(s),Ne(0,0,!1,e)})}(s.toString(),n)}else yt(2);t.I=0,t.l&&t.l.pa(e),ln(t),Xe(t)}function ln(t){if(t.I=0,t.ja=[],t.l){const e=re(t.h);0==e.length&&0==t.i.length||(f(t.ja,e),f(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function dn(t,e,n){var s=n instanceof oe?ae(n):new oe(n);if(""!=s.g)e&&(s.g=e+"."+s.g),ue(s,s.u);else{var r=i.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;const t=new oe(null);s&&ce(t,s),e&&(t.g=e),r&&ue(t,r),n&&(t.h=n),s=t}return n=t.G,e=t.wa,n&&e&&le(s,n,e),le(s,"VER",t.ka),tn(t,s),s}function fn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Fe(new Re({ab:n})):new Fe(t.ma)).Fa(t.L),e}function pn(){}function gn(){}function mn(t,e){W.call(this),this.g=new Qe(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!C(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new wn(this)}function yn(t){ut.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function vn(){ht.call(this),this.status=1}function wn(t){this.g=t}(t=Fe.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_t.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void je(this,o)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=i.FormData&&t instanceof i.FormData,!(Array.prototype.indexOf.call(Be,e,void 0)>=0)||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){je(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,J(this,"complete"),J(this,"abort"),ze(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ze(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$e(this):this.Xa())},t.Xa=function(){$e(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Ke(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rt(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Qe.prototype).ka=8,t.I=1,t.connect=function(t,e,n,s){yt(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.J=dn(this,null,this.W),Ye(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Dt(this,this.j,t);let i=this.o;if(this.U&&(i?(i=O(i),M(i,this.U)):i=this.U),null!==this.u||this.R||(r.J=i,i=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if((e+=s)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=en(this,r,e),le(n=ae(this.J),"RID",t),le(n,"CVER",22),this.G&&le(n,"X-HTTP-Session-Id",this.G),tn(this,n),i&&(this.R?e="headers="+Ct(Ve(i))+"&"+e:this.u&&Pe(n,this.u,i)),ne(this.h,r),this.Ra&&le(n,"TYPE","init"),this.S?(le(n,"$req",e),le(n,"SID","null"),r.U=!0,xt(r,n,null)):xt(r,n,e),this.I=2}}else 3==this.I&&(t?Ze(this,t):0==this.i.length||zt(this.h)||Ze(this))},t.Da=function(){if(this.v=null,on(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=wt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Je(this),on(this))},t.Va=function(){null!=this.C&&(this.C=null,Je(this),sn(this),yt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=pn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},gn.prototype.g=function(t,e){return new mn(t,e)},h(mn,W),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){We(this.g)},mn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=st(t),t=n);e.i.push(new qt(e.Ya++,t)),3==e.I&&Ye(e)},mn.prototype.N=function(){this.g.l=null,delete this.j,We(this.g),delete this.g,mn.Z.N.call(this)},h(yn,ut),h(vn,ht),h(wn,pn),wn.prototype.ra=function(){J(this.g,"a")},wn.prototype.qa=function(t){J(this.g,new yn(t))},wn.prototype.pa=function(t){J(this.g,new vn)},wn.prototype.oa=function(){J(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Zt=function(){return new gn},Yt=function(){return ft()},Xt=lt,Jt={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,Wt=Tt,St.COMPLETE="complete",Qt=St,at.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",W.prototype.listen=W.prototype.J,Ht=at,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,Gt=Fe}).apply(void 0!==te?te:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ne="12.13.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=new N("@firebase/firestore");function re(){return se.logLevel}function ie(t,...e){if(se.logLevel<=T.DEBUG){const n=e.map(ce);se.debug(`Firestore (${ne}): ${t}`,...n)}}function oe(t,...e){if(se.logLevel<=T.ERROR){const n=e.map(ce);se.error(`Firestore (${ne}): ${t}`,...n)}}function ae(t,...e){if(se.logLevel<=T.WARN){const n=e.map(ce);se.warn(`Firestore (${ne}): ${t}`,...n)}}function ce(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n){let s="Unexpected state";"string"==typeof e?s=e:n=e,he(t,s,n)}function he(t,e,n){let s=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{s+=" CONTEXT: "+JSON.stringify(n)}catch(r){s+=" CONTEXT: "+n}throw oe(s),new Error(s)}function le(t,e,n,s){let r="Unexpected state";"string"==typeof n?r=n:s=n,t||he(e,r,s)}function de(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends d{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ye{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ee.UNAUTHENTICATED))}shutdown(){}}class ve{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class we{constructor(t){this.t=t,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){le(void 0===this.o,42304);let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ge,t.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ge)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(le("string"==typeof e.accessToken,31837,{l:e}),new me(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return le(null===t||"string"==typeof t,2055,{h:t}),new ee(t)}}class Ee{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class be{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Ee(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _e{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Te{constructor(t,e){var n;this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){le(void 0===this.o,3512);const n=t=>{null!=t.error&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,ie("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const s=t=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?s(t):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _e(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(le("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new _e(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=Se(40);for(let s=0;s<n.length;++s)e.length<20&&n[s]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[s]%62))}return e}}function Ce(t,e){return t<e?-1:t>e?1:0}function Ae(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.charAt(s),r=e.charAt(s);if(n!==r)return ke(n)===ke(r)?Ce(n,r):ke(n)?1:-1}return Ce(t.length,e.length)}const De=55296,Ne=57343;function ke(t){const e=t.charCodeAt(0);return e>=De&&e<=Ne}function Re(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="__name__";class Oe{constructor(t,e,n){void 0===e?e=0:e>t.length&&ue(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&ue(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Oe.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=Oe.compareSegments(t.get(s),e.get(s));if(0!==n)return n}return Ce(t.length,e.length)}static compareSegments(t,e){const n=Oe.isNumericId(t),s=Oe.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Oe.extractNumericId(t).compare(Oe.extractNumericId(e)):Ae(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $t.fromString(t.substring(4,t.length-2))}}class Le extends Oe{construct(t,e,n){return new Le(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new pe(fe.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Le(e)}static emptyPath(){return new Le([])}}const Me=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Oe{construct(t,e,n){return new Ve(t,e,n)}static isValidIdentifier(t){return Me.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===xe}static keyField(){return new Ve([xe])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new pe(fe.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new pe(fe.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new pe(fe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new pe(fe.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ve(e)}static emptyPath(){return new Ve([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.path=t}static fromPath(t){return new Pe(Le.fromString(t))}static fromName(t){return new Pe(Le.fromString(t).popFirst(5))}static empty(){return new Pe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Le.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Le.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pe(new Le(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e,n){if(!n)throw new pe(fe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ue(t){if(!Pe.isDocumentKey(t))throw new pe(fe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Be(t){if(Pe.isDocumentKey(t))throw new pe(fe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function je(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function qe(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":ue(12329,{type:typeof t})}function $e(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new pe(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qe(t);throw new pe(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ke(t,e){if(!je(t))throw new pe(fe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new pe(fe.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=-62135596800,He=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(t){return Qe.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*He);return new Qe(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new pe(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new pe(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ge)throw new pe(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pe(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/He}_compareTo(t){return this.seconds===t.seconds?Ce(this.nanoseconds,t.nanoseconds):Ce(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ke(t,Qe._jsonSchema))return new Qe(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ge;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ze("string",Qe._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{static fromTimestamp(t){return new We(t)}static min(){return new We(new Qe(0,0))}static max(){return new We(new Qe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return new Xe(t.readTime,t.key,-1)}class Xe{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Xe(We.min(),Pe.empty(),-1)}static max(){return new Xe(We.max(),Pe.empty(),-1)}}function Ye(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Pe.comparator(t.documentKey,e.documentKey),0!==n?n:Ce(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Ze{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t){if(t.code!==fe.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ie("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new en((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof en?e:en.resolve(e)}catch(e){return en.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):en.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):en.reject(e)}static resolve(t){return new en((e,n)=>{e(t)})}static reject(t){return new en((e,n)=>{n(t)})}static waitFor(t){return new en((e,n)=>{let s=0,r=0,i=!1;t.forEach(t=>{++s,t.next(()=>{++r,i&&r===s&&e()},t=>n(t))}),i=!0,r===s&&e()})}static or(t){let e=en.resolve(!1);for(const n of t)e=e.next(t=>t?en.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}static mapArray(t,e){return new en((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===r&&n(i)},t=>s(t))}})}static doWhile(t,e){return new en((n,s)=>{const r=()=>{!0===t()?e().next(()=>{r()},s):n()};r()})}}function nn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}sn.ce=-1;function rn(t){return null==t}function on(t){return 0===t&&1/t==-1/0}function an(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function cn(t){return t+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ln(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.comparator=t,this.root=e||pn.EMPTY}insert(t,e){return new dn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(t){return new dn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fn(this.root,t,this.comparator,!0)}}class fn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pn{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:pn.RED,this.left=null!=s?s:pn.EMPTY,this.right=null!=r?r:pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new pn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return pn.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ue(27949);return t+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1,pn.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(t,e,n,s,r){return this}insert(t,e,n){return new pn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn{constructor(t){this.comparator=t,this.data=new dn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mn(this.data.getIterator())}getIteratorFrom(t){return new mn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof gn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gn(this.comparator);return e.data=t,e}}class mn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.fields=t,t.sort(Ve.comparator)}static empty(){return new yn([])}unionWith(t){let e=new gn(Ve.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new yn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new vn("Invalid base64 string: "+e):e}}(t);return new wn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new wn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ce(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wn.EMPTY_BYTE_STRING=new wn("");const En=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(le(!!t,39018),"string"==typeof t){let e=0;const n=En.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_n(t.seconds),nanos:_n(t.nanos)}}function _n(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Tn(t){return"string"==typeof t?wn.fromBase64String(t):wn.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="server_timestamp",In="__type__",Cn="__previous_value__",An="__local_write_time__";function Dn(t){var e,n;return(null==(n=((null==(e=null==t?void 0:t.mapValue)?void 0:e.fields)||{})[In])?void 0:n.stringValue)===Sn}function Nn(t){const e=t.mapValue.fields[Cn];return Dn(e)?Nn(e):e}function kn(t){const e=bn(t.mapValue.fields[An].timestampValue);return new Qe(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e,n,s,r,i,o,a,c,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h}}const xn="(default)";class On{constructor(t,e){this.projectId=t,this.database=e||xn}static empty(){return new On("","")}get isDefaultDatabase(){return this.database===xn}isEqual(t){return t instanceof On&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln="__type__",Mn="__max__",Vn={},Pn="__vector__",Fn="value";function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dn(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Mn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:function(t){var e,n;const s=null==(n=((null==(e=null==t?void 0:t.mapValue)?void 0:e.fields)||{})[Ln])?void 0:n.stringValue;return s===Pn}(t)?10:11:ue(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kn(t).isEqual(kn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=bn(t.timestampValue),s=bn(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Tn(t.bytesValue).isEqual(Tn(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _n(t.geoPointValue.latitude)===_n(e.geoPointValue.latitude)&&_n(t.geoPointValue.longitude)===_n(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _n(t.integerValue)===_n(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_n(t.doubleValue),s=_n(e.doubleValue);return n===s?on(n)===on(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Re(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(un(n)!==un(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!Bn(n[r],s[r])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}var s}function jn(t,e){return void 0!==(t.values||[]).find(t=>Bn(t,e))}function qn(t,e){if(t===e)return 0;const n=Un(t),s=Un(e);if(n!==s)return Ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_n(t.integerValue||t.doubleValue),s=_n(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return $n(t.timestampValue,e.timestampValue);case 4:return $n(kn(t),kn(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Tn(t),s=Tn(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=Ce(n[r],s[r]);if(0!==t)return t}return Ce(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ce(_n(t.latitude),_n(e.latitude));return 0!==n?n:Ce(_n(t.longitude),_n(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zn(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,s,r,i;const o=t.fields||{},a=e.fields||{},c=null==(n=o[Fn])?void 0:n.arrayValue,u=null==(s=a[Fn])?void 0:s.arrayValue,h=Ce((null==(r=null==c?void 0:c.values)?void 0:r.length)||0,(null==(i=null==u?void 0:u.values)?void 0:i.length)||0);return 0!==h?h:zn(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Vn&&e===Vn)return 0;if(t===Vn)return 1;if(e===Vn)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=Ae(s[o],i[o]);if(0!==t)return t;const e=qn(n[s[o]],r[i[o]]);if(0!==e)return e}return Ce(s.length,i.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{he:n})}}function $n(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ce(t,e);const n=bn(t),s=bn(e),r=Ce(n.seconds,s.seconds);return 0!==r?r:Ce(n.nanos,s.nanos)}function zn(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=qn(n[r],s[r]);if(t)return t}return Ce(n.length,s.length)}function Kn(t){return Gn(t)}function Gn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=bn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Tn(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Pe.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Gn(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Gn(t.fields[r])}`;return n+"}"}(t.mapValue):ue(61005,{value:t})}function Hn(t){switch(Un(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nn(t);return e?16+Hn(e):16;case 5:return 2*t.stringValue.length;case 6:return Tn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,e)=>t+Hn(e),0);case 10:case 11:return function(t){let e=0;return hn(t.fields,(t,n)=>{e+=t.length+Hn(n)}),e}(t.mapValue);default:throw ue(13486,{value:t})}}function Qn(t){return!!t&&"integerValue"in t}function Wn(t){return!!t&&"arrayValue"in t}function Jn(t){return!!t&&"nullValue"in t}function Xn(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yn(t){return!!t&&"mapValue"in t}function Zn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hn(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Zn(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zn(t.arrayValue.values[n]);return e}return{...t}}class ts{constructor(t){this.value=t}static empty(){return new ts({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zn(e)}setAll(t){let e=Ve.emptyPath(),n={},s=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Zn(t):s.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Yn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){hn(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new ts(Zn(this.value))}}function es(t){const e=[];return hn(t.fields,(t,n)=>{const s=new Ve([t]);if(Yn(n)){const t=es(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)}),new yn(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ns{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new ns(t,0,We.min(),We.min(),We.min(),ts.empty(),0)}static newFoundDocument(t,e,n,s){return new ns(t,1,e,We.min(),n,s,0)}static newNoDocument(t,e){return new ns(t,2,e,We.min(),We.min(),ts.empty(),0)}static newUnknownDocument(t,e){return new ns(t,3,e,We.min(),We.min(),ts.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(We.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ts.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ts.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=We.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ns&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ns(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e){this.position=t,this.inclusive=e}}function rs(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Pe.comparator(Pe.fromName(o.referenceValue),n.key):qn(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function is(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e="asc"){this.field=t,this.dir=e}}function as(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{}class us extends cs{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ms(t,e,n):"array-contains"===e?new Es(t,n):"in"===e?new bs(t,n):"not-in"===e?new _s(t,n):"array-contains-any"===e?new Ts(t,n):new us(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ys(t,n):new vs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(qn(e,this.value)):null!==e&&Un(this.value)===Un(e)&&this.matchesComparison(qn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hs extends cs{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new hs(t,e)}matches(t){return ls(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ls(t){return"and"===t.op}function ds(t){return function(t){for(const e of t.filters)if(e instanceof hs)return!1;return!0}(t)&&ls(t)}function fs(t){if(t instanceof us)return t.field.canonicalString()+t.op.toString()+Kn(t.value);if(ds(t))return t.filters.map(t=>fs(t)).join(",");{const e=t.filters.map(t=>fs(t)).join(",");return`${t.op}(${e})`}}function ps(t,e){return t instanceof us?(n=t,(s=e)instanceof us&&n.op===s.op&&n.field.isEqual(s.field)&&Bn(n.value,s.value)):t instanceof hs?function(t,e){return e instanceof hs&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,s)=>t&&ps(n,e.filters[s]),!0)}(t,e):void ue(19439);var n,s}function gs(t){return t instanceof us?`${(e=t).field.canonicalString()} ${e.op} ${Kn(e.value)}`:t instanceof hs?function(t){return t.op.toString()+" {"+t.getFilters().map(gs).join(" ,")+"}"}(t):"Filter";var e}class ms extends us{constructor(t,e,n){super(t,e,n),this.key=Pe.fromName(n.referenceValue)}matches(t){const e=Pe.comparator(t.key,this.key);return this.matchesComparison(e)}}class ys extends us{constructor(t,e){super(t,"in",e),this.keys=ws("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vs extends us{constructor(t,e){super(t,"not-in",e),this.keys=ws("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ws(t,e){var n;return((null==(n=e.arrayValue)?void 0:n.values)||[]).map(t=>Pe.fromName(t.referenceValue))}class Es extends us{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wn(e)&&jn(e.arrayValue,this.value)}}class bs extends us{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&jn(this.value.arrayValue,e)}}class _s extends us{constructor(t,e){super(t,"not-in",e)}matches(t){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!jn(this.value.arrayValue,e)}}class Ts extends us{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>jn(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.Te=null}}function Is(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ss(t,e,n,s,r,i,o)}function Cs(t){const e=de(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>fs(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>{return(e=t).field.canonicalString()+e.dir;var e}).join(","),rn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Kn(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Kn(t)).join(",")),e.Te=t}return e.Te}function As(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!as(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ps(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!is(t.startAt,e.startAt)&&is(t.endAt,e.endAt)}function Ds(t){return Pe.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ks(t){return new Ns(t)}function Rs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function xs(t){const e=de(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new gn(Ve.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new os(s,n))}),t.has(Ve.keyField().canonicalString())||e.Ie.push(new os(Ve.keyField(),n))}return e.Ie}function Os(t){const e=de(t);return e.Ee||(e.Ee=function(t,e){if("F"===t.limitType)return Is(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new os(t.field,e)});const n=t.endAt?new ss(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ss(t.startAt.position,t.startAt.inclusive):null;return Is(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,xs(t))),e.Ee}function Ls(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ms(t,e){return As(Os(t),Os(e))&&t.limitType===e.limitType}function Vs(t){return`${Cs(Os(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>gs(t)).join(", ")}]`),rn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e}).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Kn(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Kn(t)).join(",")),`Target(${e})`}(Os(t))}; limitType=${t.limitType})`}function Fs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pe.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of xs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=rs(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,xs(n),s)||n.endAt&&!function(t,e,n){const s=rs(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,xs(n),s)));var n,s}function Us(t){return(e,n)=>{let s=!1;for(const r of xs(t)){const t=Bs(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Bs(t,e,n){const s=t.field.isKeyField()?Pe.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?qn(s,r):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ue(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,(e,n)=>{for(const[s,r]of n)t(s,r)})}isEmpty(){return ln(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new dn(Pe.comparator);function $s(){return qs}const zs=new dn(Pe.comparator);function Ks(...t){let e=zs;for(const n of t)e=e.insert(n.key,n);return e}function Gs(t){let e=zs;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Hs(){return Ws()}function Qs(){return Ws()}function Ws(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const Js=new dn(Pe.comparator),Xs=new gn(Pe.comparator);function Ys(...t){let e=Xs;for(const n of t)e=e.add(n);return e}const Zs=new gn(Ce);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:on(e)?"-0":e}}function er(t){return{integerValue:""+t}}function nr(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!on(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?er(e):tr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._=void 0}}function rr(t,e,n){return t instanceof ar?function(t,e){const n={fields:{[In]:{stringValue:Sn},[An]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Dn(e)&&(e=Nn(e)),e&&(n.fields[Cn]=e),{mapValue:n}}(n,e):t instanceof cr?ur(t,e):t instanceof hr?lr(t,e):function(t,e){const n=or(t,e),s=fr(n)+fr(t.Ae);return Qn(n)&&Qn(t.Ae)?er(s):tr(t.serializer,s)}(t,e)}function ir(t,e,n){return t instanceof cr?ur(t,e):t instanceof hr?lr(t,e):n}function or(t,e){return t instanceof dr?Qn(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null;var n,s}class ar extends sr{}class cr extends sr{constructor(t){super(),this.elements=t}}function ur(t,e){const n=pr(e);for(const s of t.elements)n.some(t=>Bn(t,s))||n.push(s);return{arrayValue:{values:n}}}class hr extends sr{constructor(t){super(),this.elements=t}}function lr(t,e){let n=pr(e);for(const s of t.elements)n=n.filter(t=>!Bn(t,s));return{arrayValue:{values:n}}}class dr extends sr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function fr(t){return _n(t.integerValue||t.doubleValue)}function pr(t){return Wn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class gr{constructor(t,e){this.version=t,this.transformResults=e}}class mr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mr}static exists(t){return new mr(void 0,t)}static updateTime(t){return new mr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vr{}function wr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Nr(t.key,mr.none()):new Sr(t.key,t.data,mr.none());{const n=t.data,s=ts.empty();let r=new gn(Ve.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Ir(t.key,s,new yn(r.toArray()),mr.none())}}function Er(t,e,n){var s;t instanceof Sr?function(t,e,n){const s=t.value.clone(),r=Ar(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(t,e,n){if(!yr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ar(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Cr(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function br(t,e,n,s){return t instanceof Sr?function(t,e,n,s){if(!yr(t.precondition,e))return n;const r=t.value.clone(),i=Dr(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ir?function(t,e,n,s){if(!yr(t.precondition,e))return n;const r=Dr(t.fieldTransforms,s,e),i=e.data;return i.setAll(Cr(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,s):(r=e,i=n,yr(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function _r(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=or(s.transform,t||null);null!=r&&(null===n&&(n=ts.empty()),n.set(s.field,r))}return n||null}function Tr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&Re(n,s,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof cr&&s instanceof cr||n instanceof hr&&s instanceof hr?Re(n.elements,s.elements,Bn):n instanceof dr&&s instanceof dr?Bn(n.Ae,s.Ae):n instanceof ar&&s instanceof ar);var n,s}(t,e)))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}class Sr extends vr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends vr{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Cr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ar(t,e,n){const s=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ir(o,a,n[r]))}return s}function Dr(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,rr(t,i,e))}return s}class Nr extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kr extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Er(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=br(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=br(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Qs();return this.mutations.forEach(s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=wr(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(We.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ys())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(t,e)=>Tr(t,e))&&Re(this.baseMutations,t.baseMutations,(t,e)=>Tr(t,e))}}class xr{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){le(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Js}();const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new xr(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr,Vr;function Pr(t){if(void 0===t)return oe("GRPC error has no .code"),fe.UNKNOWN;switch(t){case Mr.OK:return fe.OK;case Mr.CANCELLED:return fe.CANCELLED;case Mr.UNKNOWN:return fe.UNKNOWN;case Mr.DEADLINE_EXCEEDED:return fe.DEADLINE_EXCEEDED;case Mr.RESOURCE_EXHAUSTED:return fe.RESOURCE_EXHAUSTED;case Mr.INTERNAL:return fe.INTERNAL;case Mr.UNAVAILABLE:return fe.UNAVAILABLE;case Mr.UNAUTHENTICATED:return fe.UNAUTHENTICATED;case Mr.INVALID_ARGUMENT:return fe.INVALID_ARGUMENT;case Mr.NOT_FOUND:return fe.NOT_FOUND;case Mr.ALREADY_EXISTS:return fe.ALREADY_EXISTS;case Mr.PERMISSION_DENIED:return fe.PERMISSION_DENIED;case Mr.FAILED_PRECONDITION:return fe.FAILED_PRECONDITION;case Mr.ABORTED:return fe.ABORTED;case Mr.OUT_OF_RANGE:return fe.OUT_OF_RANGE;case Mr.UNIMPLEMENTED:return fe.UNIMPLEMENTED;case Mr.DATA_LOSS:return fe.DATA_LOSS;default:return ue(39323,{code:t})}}(Vr=Mr||(Mr={}))[Vr.OK=0]="OK",Vr[Vr.CANCELLED=1]="CANCELLED",Vr[Vr.UNKNOWN=2]="UNKNOWN",Vr[Vr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vr[Vr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vr[Vr.NOT_FOUND=5]="NOT_FOUND",Vr[Vr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vr[Vr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vr[Vr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vr[Vr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vr[Vr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vr[Vr.ABORTED=10]="ABORTED",Vr[Vr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vr[Vr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vr[Vr.INTERNAL=13]="INTERNAL",Vr[Vr.UNAVAILABLE=14]="UNAVAILABLE",Vr[Vr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fr=new $t([4294967295,4294967295],0);function Ur(t){const e=(new TextEncoder).encode(t),n=new zt;return n.update(e),new Uint8Array(n.digest())}function Br(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([n,s],0),new $t([r,i],0)]}class jr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new qr(`Invalid padding: ${e}`);if(n<0)throw new qr(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new qr(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new qr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=$t.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply($t.fromNumber(n)));return 1===s.compare(Fr)&&(s=new $t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=Ur(t),[n,s]=Br(e);for(let r=0;r<this.hashCount;r++){const t=this.ye(n,s,r);if(!this.we(t))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),i=new jr(r,s,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.ge)return;const e=Ur(t),[n,s]=Br(e);for(let r=0;r<this.hashCount;r++){const t=this.ye(n,s,r);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,zr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new $r(We.min(),s,new dn(Ce),$s(),Ys())}}class zr{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new zr(n,e,Ys(),Ys(),Ys())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Gr{constructor(t,e){this.targetId=t,this.Ce=e}}class Hr{constructor(t,e,n=wn.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Qr{constructor(){this.ve=0,this.Fe=Xr(),this.Me=wn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ys(),e=Ys(),n=Ys();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ue(38017,{changeType:r})}}),new zr(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=Xr()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Wr{constructor(t){this.Ge=t,this.ze=new Map,this.je=$s(),this.Je=Jr(),this.He=Jr(),this.Ze=new dn(Ce)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:ue(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const r=s.target;if(Ds(r))if(0===n){const t=new Pe(r.path);this.et(e,t,ns.newNoDocument(t,We.min()))}else le(1===n,20013,{expectedCount:n});else{const s=this._t(e);if(s!==n){const n=this.ut(t),r=n?this.ct(n,t,s):1;if(0!==r){this.it(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:r=0}=e;let i,o;try{i=Tn(n).toUint8Array()}catch(a){if(a instanceof vn)return ae("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new jr(i,s,r)}catch(a){return ae(a instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(n=>{const r=this.Ge.ht(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.et(e,n,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((n,s)=>{const r=this.ot(s);if(r){if(n.current&&Ds(r.target)){const e=new Pe(r.target.path);this.It(e).has(s)||this.Et(s,e)||this.et(s,e,ns.newNoDocument(e,t))}n.Be&&(e.set(s,n.ke()),n.Ke())}});let n=Ys();this.He.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const s=new $r(t,e,this.Ze,this.je,n);return this.je=$s(),this.Je=Jr(),this.He=Jr(),this.Ze=new dn(Ce),s}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Qr,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new gn(Ce),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new gn(Ce),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||ie("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Qr),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Jr(){return new dn(Pe.comparator)}function Xr(){return new dn(Pe.comparator)}const Yr=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zr=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ti=(()=>({and:"AND",or:"OR"}))();class ei{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(t,e){return t.useProto3Json||rn(e)?e:{value:e}}function si(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ri(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ii(t,e){return si(t,e.toTimestamp())}function oi(t){return le(!!t,49232),We.fromTimestamp(function(t){const e=bn(t);return new Qe(e.seconds,e.nanos)}(t))}function ai(t,e){return ci(t,e).canonicalString()}function ci(t,e){const n=(s=t,new Le(["projects",s.projectId,"databases",s.database])).child("documents");var s;return void 0===e?n:n.child(e)}function ui(t){const e=Le.fromString(t);return le(Ai(e),10190,{key:e.toString()}),e}function hi(t,e){return ai(t.databaseId,e.path)}function li(t,e){const n=ui(e);if(n.get(1)!==t.databaseId.projectId)throw new pe(fe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new pe(fe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pe(pi(n))}function di(t,e){return ai(t.databaseId,e)}function fi(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pi(t){return le(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function gi(t,e,n){return{name:hi(t,e),fields:n.value.mapValue.fields}}function mi(t,e){return{documents:[di(t,e.path)]}}function yi(t,e){const n={structuredQuery:{}},s=e.path;let r;null!==e.collectionGroup?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=di(t,r);const i=function(t){if(0!==t.length)return Ii(hs.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>{return{field:Ti((e=t).field),direction:Ei(e.dir)};var e})}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ni(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:r};var c}function vi(t){let e=function(t){const e=ui(t);return 4===e.length?Le.emptyPath():pi(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){le(1===s,65062);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=wi(t);return e instanceof hs&&ds(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>{return new os(Si((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e}));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,rn(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ss(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ss(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new Ns(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",c,u)}function wi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Si(t.unaryFilter.field);return us.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Si(t.unaryFilter.field);return us.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Si(t.unaryFilter.field);return us.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Si(t.unaryFilter.field);return us.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):void 0!==t.fieldFilter?(e=t,us.create(Si(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return hs.create(t.compositeFilter.filters.map(t=>wi(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(t.compositeFilter.op))}(t):ue(30097,{filter:t});var e}function Ei(t){return Yr[t]}function bi(t){return Zr[t]}function _i(t){return ti[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Si(t){return Ve.fromServerFormat(t.fieldPath)}function Ii(t){return t instanceof us?function(t){if("=="===t.op){if(Xn(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NAN"}};if(Jn(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Xn(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NOT_NAN"}};if(Jn(t.value))return{unaryFilter:{field:Ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(t.field),op:bi(t.op),value:t.value}}}(t):t instanceof hs?function(t){const e=t.getFilters().map(t=>Ii(t));return 1===e.length?e[0]:{compositeFilter:{op:_i(t.op),filters:e}}}(t):ue(54877,{filter:t})}function Ci(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ai(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Di(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e,n,s,r=We.min(),i=We.min(),o=wn.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Ni(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.yt=t}}function Ri(t){const e=vi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ls(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.bn=new Oi}addToCollectionParentIndex(t,e){return this.bn.add(e),en.resolve()}getCollectionParents(t,e){return en.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return en.resolve()}deleteFieldIndex(t,e){return en.resolve()}deleteAllFieldIndexes(t){return en.resolve()}createTargetIndexes(t,e){return en.resolve()}getDocumentsMatchingTarget(t,e){return en.resolve(null)}getIndexType(t,e){return en.resolve(0)}getFieldIndexes(t,e){return en.resolve([])}getNextCollectionGroupToUpdate(t){return en.resolve(null)}getMinOffset(t,e){return en.resolve(Xe.min())}getMinOffsetFromCollectionGroup(t,e){return en.resolve(Xe.min())}updateCollectionGroup(t,e,n){return en.resolve()}updateIndexEntries(t,e){return en.resolve()}}class Oi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new gn(Le.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new gn(Le.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mi=41943040;class Vi{static withCacheSize(t){return new Vi(t,Vi.DEFAULT_COLLECTION_PERCENTILE,Vi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi.DEFAULT_COLLECTION_PERCENTILE=10,Vi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vi.DEFAULT=new Vi(Mi,Vi.DEFAULT_COLLECTION_PERCENTILE,Vi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vi.DISABLED=new Vi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Pi(0)}static ar(){return new Pi(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="LruGarbageCollector";function Ui([t,e],[n,s]){const r=Ce(t,n);return 0===r?Ce(e,s):r}class Bi{constructor(t){this.Pr=t,this.buffer=new gn(Ui),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Ui(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ji{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){ie(Fi,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){nn(t)?ie(Fi,"Ignoring IndexedDB error during garbage collection: ",t):await tn(t)}await this.Ar(3e5)})}}class qi{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return en.resolve(sn.ce);const n=new Bi(e);return this.Vr.forEachTarget(t,t=>n.Er(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Er(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(Li)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Li):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,s,r,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),s=this.params.maximumSequenceNumbersToCollect):s=e,i=Date.now(),this.nthSequenceNumber(t,s))).next(s=>(n=s,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(r=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),re()<=T.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${s} in `+(o-i)+`ms\n\tRemoved ${r} targets in `+(a-o)+`ms\n\tRemoved ${t} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(){this.changes=new js(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ns.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?en.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&br(n.mutation,t,yn.empty(),Qe.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,Ys()).next(()=>e))}getLocalViewOfDocuments(t,e,n=Ys()){const s=Hs();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(t=>{let e=Ks();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Hs();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Ys()))}populateOverlays(t,e,n){const s=[];return n.forEach(t=>{e.has(t)||s.push(t)}),this.documentOverlayCache.getOverlays(t,s).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,s){let r=$s();const i=Ws(),o=Ws();return e.forEach((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ir)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),br(o.mutation,e,o.mutation.getFieldMask(),Qe.now())):i.set(e.key,yn.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>o.set(t,new zi(e,i.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=Ws();let s=new dn((t,e)=>t-e),r=Ys();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const r of t)r.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||yn.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||Ys()).add(t);s=s.insert(r.batchId,a)})}).next(()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Qs();c.forEach(t=>{if(!r.has(t)){const s=wr(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return en.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,s){return function(t){return Pe.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):en.resolve(Hs());let o=-1,a=r;return i.next(e=>en.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?en.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,a,e,Ys())).next(t=>({batchId:o,changes:Gs(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Pe(e)).next(t=>{let e=Ks();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const r=e.collectionGroup;let i=Ks();return this.indexManager.getCollectionParents(t,r).next(o=>en.forEach(o,o=>{const a=(c=e,u=o.child(r),new Ns(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,s))).next(t=>{r.forEach((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,ns.newInvalidDocument(s)))});let n=Ks();return t.forEach((t,s)=>{const i=r.get(t);void 0!==i&&br(i.mutation,s,yn.empty(),Qe.now()),Fs(e,s)&&(n=n.insert(t,s))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return en.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,{id:(n=e).id,version:n.version,createTime:oi(n.createTime)}),en.resolve();var n}getNamedQuery(t,e){return en.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,{name:(n=e).name,query:Ri(n.bundledQuery),readTime:oi(n.readTime)}),en.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.overlays=new dn(Pe.comparator),this.Lr=new Map}getOverlay(t,e){return en.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Hs();return en.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,s)=>{this.St(t,e,s)}),en.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return void 0!==s&&(s.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),en.resolve()}getOverlaysForCollection(t,e,n){const s=Hs(),r=e.length+1,i=new Pe(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return en.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new dn((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Hs(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Hs(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=s)););return en.resolve(o)}St(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Or(e,n));let r=this.Lr.get(e);void 0===r&&(r=Ys(),this.Lr.set(e,r)),this.Lr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.sessionToken=wn.EMPTY_BYTE_STRING}getSessionToken(t){return en.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,en.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.kr=new gn(Ji.Kr),this.qr=new gn(Ji.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new Ji(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new Ji(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new Pe(new Le([])),n=new Ji(e,t),s=new Ji(e,t+1),r=[];return this.qr.forEachInRange([n,s],t=>{this.Wr(t),r.push(t.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Pe(new Le([])),n=new Ji(e,t),s=new Ji(e,t+1);let r=Ys();return this.qr.forEachInRange([n,s],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new Ji(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ji{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return Pe.comparator(t.key,e.key)||Ce(t.Jr,e.Jr)}static Ur(t,e){return Ce(t.Jr,e.Jr)||Pe.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new gn(Ji.Kr)}checkEmpty(t){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Rr(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.Hr=this.Hr.add(new Ji(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return en.resolve(i)}lookupMutationBatch(t,e){return en.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),r=s<0?0:s;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(t){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ji(e,0),s=new Ji(e,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([n,s],t=>{const e=this.Zr(t.Jr);r.push(e)}),en.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new gn(Ce);return e.forEach(t=>{const e=new Ji(t,0),s=new Ji(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,s],t=>{n=n.add(t.Jr)})}),en.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Pe.isDocumentKey(r)||(r=r.child(""));const i=new Ji(new Pe(r),0);let o=new gn(Ce);return this.Hr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.Jr)),!0)},i),en.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){le(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return en.forEach(e.mutations,s=>{const r=new Ji(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new Ji(e,0),s=this.Hr.firstAfterOrEqual(n);return en.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,en.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.ti=t,this.docs=new dn(Pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return en.resolve(n?n.document.mutableCopy():ns.newInvalidDocument(e))}getEntries(t,e){let n=$s();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ns.newInvalidDocument(t))}),en.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=$s();const i=e.path,o=new Pe(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Ye(Je(o),n)<=0||(s.has(o.key)||Fs(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return en.resolve(r)}getAllFromCollectionGroup(t,e,n,s){ue(9500)}ni(t,e){return en.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Zi(this)}getSize(t){return en.resolve(this.size)}}class Zi extends $i{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)}),en.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this.persistence=t,this.ri=new js(t=>Cs(t),As),this.lastRemoteSnapshotVersion=We.min(),this.highestTargetId=0,this.ii=0,this.si=new Wi,this.targetCount=0,this.oi=Pi._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),en.resolve()}getLastRemoteSnapshotVersion(t){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return en.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),en.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Pi(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,en.resolve()}updateTargetData(t,e){return this.lr(e),en.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,en.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.ri.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),en.waitFor(r).next(()=>s)}getTargetCount(t){return en.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return en.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),en.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(e=>{r.push(s.markPotentiallyOrphaned(t,e))}),en.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),en.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return en.resolve(n)}containsKey(t,e){return en.resolve(this.si.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e){this._i={},this.overlays={},this.ai=new sn(0),this.ui=!1,this.ui=!0,this.ci=new Qi,this.referenceDelegate=t(this),this.li=new to(this),this.indexManager=new xi,this.remoteDocumentCache=new Yi(t=>this.referenceDelegate.hi(t)),this.serializer=new ki(e),this.Pi=new Gi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Xi(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){ie("MemoryPersistence","Starting transaction:",t);const s=new no(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(t=>this.referenceDelegate.Ii(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ei(t,e){return en.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class no extends Ze{constructor(t){super(),this.currentSequenceNumber=t}}class so{constructor(t){this.persistence=t,this.Ri=new Wi,this.Ai=null}static Vi(t){return new so(t)}get di(){if(this.Ai)return this.Ai;throw ue(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),en.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),en.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),en.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.di,n=>{const s=Pe.fromPath(n);return this.mi(t,s).next(t=>{t||e.removeEntry(s,We.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return en.or([()=>en.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ro{constructor(t,e){this.persistence=t,this.fi=new js(t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cn(e)),e=an(t.get(n),e);return cn(e)}(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=function(t,e){return new qi(t,e)}(this,e)}static Vi(t,e){return new ro(t,e)}Ti(){}Ii(t){return en.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return en.forEach(this.fi,(n,s)=>this.wr(t,n,s).next(t=>t?en.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,s=>this.wr(t,s,e).next(t=>{t||(n++,r.removeEntry(s,We.min()))})).next(()=>r.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),en.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),en.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),en.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),en.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Hn(t.data.value)),e}wr(t,e,n){return en.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return en.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=s}static Es(t,e){let n=Ys(),s=Ys();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new io(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=l()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const r={result:null};return this.gs(t,e).next(t=>{r.result=t}).next(()=>{if(!r.result)return this.ps(t,e,s,n).next(t=>{r.result=t})}).next(()=>{if(r.result)return;const n=new oo;return this.ys(t,e,n).next(s=>{if(r.result=s,this.As)return this.ws(t,e,n,s.size)})}).next(()=>r.result)}ws(t,e,n,s){return n.documentReadCount<this.Vs?(re()<=T.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ps(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),en.resolve()):(re()<=T.DEBUG&&ie("QueryEngine","Query:",Ps(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(re()<=T.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ps(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Os(e))):en.resolve())}gs(t,e){if(Rs(e))return en.resolve(null);let n=Os(e);return this.indexManager.getIndexType(t,n).next(s=>0===s?null:(null!==e.limit&&1===s&&(e=Ls(e,null,"F"),n=Os(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const r=Ys(...s);return this.fs.getDocuments(t,r).next(s=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Ss(e,s);return this.bs(e,i,r,n.readTime)?this.gs(t,Ls(e,null,"F")):this.Ds(t,i,e,n)}))})))}ps(t,e,n,s){return Rs(e)||s.isEqual(We.min())?en.resolve(null):this.fs.getDocuments(t,n).next(r=>{const i=this.Ss(e,r);return this.bs(e,i,n,s)?en.resolve(null):(re()<=T.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ps(e)),this.Ds(t,i,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=We.fromTimestamp(1e9===s?new Qe(n+1,0):new Qe(n,s));return new Xe(r,Pe.empty(),e)}(s,-1)).next(t=>t))})}Ss(t,e){let n=new gn(Us(t));return e.forEach((e,s)=>{Fs(t,s)&&(n=n.add(s))}),n}bs(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,e,n){return re()<=T.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ps(e)),this.fs.getDocumentsMatchingQuery(t,e,Xe.min(),n)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="LocalStore";class uo{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new dn(Ce),this.Fs=new js(t=>Cs(t),As),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ki(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}async function ho(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next(r=>(s=r,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const r=[],i=[];let o=Ys();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:r,addedBatchIds:i}))})})}function lo(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function fo(t,e){const n=de(t),s=e.snapshotVersion;let r=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});r=n.vs;const o=[];e.targetChanges.forEach((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(wn.EMPTY_BYTE_STRING,We.min()).withLastLimboFreeSnapshotVersion(We.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;if(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.li.updateTargetData(t,u))});let a=$s(),c=Ys();if(e.documentUpdates.forEach(s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(function(t,e,n){let s=Ys(),r=Ys();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=$s();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(We.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):ie(co,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Bs:s,Ls:r}})}(t,i,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!s.isEqual(We.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return en.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=r,t))}function po(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}async function go(t,e,n){const s=de(t),r=s.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,t=>s.persistence.referenceDelegate.removeTarget(t,r))}catch(o){if(!nn(o))throw o;ie(co,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function mo(t,e,n){const s=de(t);let r=We.min(),i=Ys();return s.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const s=de(t),r=s.Fs.get(n);return void 0!==r?en.resolve(s.vs.get(r)):s.li.getTargetData(e,n)}(s,t,Os(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>s.Cs.getDocumentsMatchingQuery(t,e,n?r:We.min(),n?i:Ys())).next(t=>(function(t,e,n){let s=t.Ms.get(e)||We.min();n.forEach((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)}),t.Ms.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ks:i})))}class yo{constructor(){this.activeTargetIds=Zs}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vo{constructor(){this.vo=new yo,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new yo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{Mo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="ConnectivityMonitor";class bo{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ie(Eo,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){ie(Eo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o=null;function To(){return null===_o?_o=268435456+Math.round(2147483648*Math.random()):_o++,"0x"+_o.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const So="RestConnection",Io={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Co{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===xn?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,r){const i=To(),o=this.Qo(t,e.toUriEncodedString());ie(So,`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(a,s,r);const{host:c}=new URL(o),u=v(c);return this.zo(t,o,a,n,u).then(e=>(ie(So,`Received RPC '${t}' ${i}: `,e),e),e=>{throw ae(So,`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,s,r,i){return this.Wo(t,e,n,s,r)}Go(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ne,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=Io[t];let s=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="WebChannelConnection",No=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(e){setTimeout(()=>{throw e},0)}})};class ko extends Co{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ko.c_){const t=Yt();No(t,Xt.STAT_EVENT,t=>{t.stat===Jt.PROXY?ie(Do,"STAT_EVENT: detected buffering proxy"):t.stat===Jt.NOPROXY&&ie(Do,"STAT_EVENT: detected no buffering proxy")}),ko.c_=!0}}zo(t,e,n,s,r){const i=To();return new Promise((r,o)=>{const a=new Gt;a.setWithCredentials(!0),a.listenOnce(Qt.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wt.NO_ERROR:const e=a.getResponseJson();ie(Do,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Wt.TIMEOUT:ie(Do,`RPC '${t}' ${i} timed out`),o(new pe(fe.DEADLINE_EXCEEDED,"Request time out"));break;case Wt.HTTP_ERROR:const n=a.getStatus();if(ie(Do,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(fe).indexOf(e)>=0?e:fe.UNKNOWN}(e.status);o(new pe(t,e.message))}else o(new pe(fe.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new pe(fe.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{l_:t,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{ie(Do,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);ie(Do,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)})}T_(t,e,n){const s=To(),r=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=r.join("");ie(Do,`Creating RPC '${t}' stream ${s}: ${c}`,o);const u=i.createWebChannel(c,o);this.I_(u);let h=!1,l=!1;const d=new Ao({Jo:e=>{l?ie(Do,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(h||(ie(Do,`Opening RPC '${t}' stream ${s} transport.`),u.open(),h=!0),ie(Do,`RPC '${t}' stream ${s} sending:`,e),u.send(e))},Ho:()=>u.close()});return No(u,Ht.EventType.OPEN,()=>{l||(ie(Do,`RPC '${t}' stream ${s} transport opened.`),d.i_())}),No(u,Ht.EventType.CLOSE,()=>{l||(l=!0,ie(Do,`RPC '${t}' stream ${s} transport closed`),d.o_(),this.E_(u))}),No(u,Ht.EventType.ERROR,e=>{l||(l=!0,ae(Do,`RPC '${t}' stream ${s} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new pe(fe.UNAVAILABLE,"The operation could not be completed")))}),No(u,Ht.EventType.MESSAGE,e=>{var n;if(!l){const r=e.data[0];le(!!r,16349);const i=r,o=(null==i?void 0:i.error)||(null==(n=i[0])?void 0:n.error);if(o){ie(Do,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Mr[t];if(void 0!==e)return Pr(e)}(e),r=o.message;"NOT_FOUND"===e&&r.includes("database")&&r.includes("does not exist")&&r.includes(this.databaseId.database)&&ae(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=fe.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),l=!0,d.o_(new pe(n,r)),u.close()}else ie(Do,`RPC '${t}' stream ${s} received:`,r),d.__(r)}}),ko.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zt()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){return new ei(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ko.c_=!1;class Oo{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="PersistentStream";class Mo{constructor(t,e,n,s,r,i,o,a){this.Ci=t,this.S_=n,this.b_=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Oo(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===fe.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===fe.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new pe(fe.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return ie(Lo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(ie(Lo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vo extends Mo{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:ue(39313,{state:s}),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(le(void 0===e||"string"==typeof e,58123),wn.fromBase64String(e||"")):(le(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),wn.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?fe.UNKNOWN:Pr(t.code);return new pe(e,t.message||"")}(a);n=new Hr(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=li(t,s.document.name),i=oi(s.document.updateTime),o=s.document.createTime?oi(s.document.createTime):We.min(),a=new ts({mapValue:{fields:s.document.fields}}),c=ns.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Kr(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=li(t,s.document),i=s.readTime?oi(s.readTime):We.min(),o=ns.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Kr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=li(t,s.document),i=s.removedTargetIds||[];n=new Kr([],i,r,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:r}=t,i=new Lr(s,r),o=t.targetId;n=new Gr(o,i)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return We.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?We.min():e.readTime?oi(e.readTime):We.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=fi(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=Ds(s)?{documents:mi(t,s)}:{query:yi(t,s).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ri(t,e.resumeToken);const s=ni(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(We.min())>0){n.readTime=si(t,e.snapshotVersion.toTimestamp());const s=ni(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=fi(this.serializer),e.removeTarget=t,this.K_(e)}}class Po extends Mo{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return le(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,le(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){le(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=function(t,e){return t&&t.length>0?(le(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?oi(t.updateTime):oi(e);return n.isEqual(We.min())&&(n=oi(e)),new gr(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=oi(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=fi(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>function(t,e){let n;if(e instanceof Sr)n={update:gi(t,e.key,e.value)};else if(e instanceof Nr)n={delete:hi(t,e.key)};else if(e instanceof Ir)n={update:gi(t,e.key,e.data),updateMask:Ci(e.fieldMask)};else{if(!(e instanceof kr))return ue(16599,{dt:e.type});n={verify:hi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ar)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof cr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof hr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof dr)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw ue(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:ii(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:ue(27497))),n;var s,r}(this.serializer,t))};this.K_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{}class Uo extends Fo{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new pe(fe.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Wo(t,ci(e,n),s,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===fe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new pe(fe.UNKNOWN,t.toString())})}jo(t,e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.jo(t,ci(e,n),s,i,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===fe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new pe(fe.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Bo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(oe(e),this.aa=!1):ie("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="RemoteStore";class qo{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Pi(1e3),this.Va=new Pi(1001),this.da=new Set,this.ma=[],this.fa=r,this.fa.Mo(t=>{n.enqueueAndForget(async()=>{Yo(this)&&(ie(jo,"Restarting streams for network reachability change."),await async function(t){const e=de(t);e.da.add(4),await zo(e),e.ga.set("Unknown"),e.da.delete(4),await $o(e)}(this))})}),this.ga=new Bo(n,s)}}async function $o(t){if(Yo(t))for(const e of t.ma)await e(!0)}async function zo(t){for(const e of t.ma)await e(!1)}function Ko(t,e){return t.Ea.get(e)||void 0}function Go(t,e){const n=de(t),s=Ko(n,e.targetId);if(void 0!==s&&n.Ia.has(s))return;const r=function(t,e){const n=Ko(t,e);void 0!==n&&t.Ra.delete(n);const s=(r=t,e%2!=0?r.Va.next():r.Aa.next());var r;return t.Ea.set(e,s),t.Ra.set(s,e),s}(n,e.targetId);ie(jo,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new Ni(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(r,i),Xo(n)?Jo(n):ma(n).O_()&&Qo(n,i)}function Ho(t,e){const n=de(t),s=ma(n),r=Ko(n,e);ie(jo,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),n.Ia.delete(r),n.Ea.delete(e),n.Ra.delete(r),s.O_()&&Wo(n,r),0===n.Ia.size&&(s.O_()?s.L_():Yo(n)&&n.ga.set("Unknown"))}function Qo(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(We.min())>0){const n=t.Ra.get(e.targetId);if(void 0===n)return void ie(jo,"SDK target ID not found for remote ID: "+e.targetId);const s=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(s)}ma(t).Z_(e)}function Wo(t,e){t.pa.$e(e),ma(t).X_(e)}function Jo(t){t.pa=new Wr({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return void 0!==n?t.remoteSyncer.getRemoteKeysForTarget(n):Ys()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.ga.ua()}function Xo(t){return Yo(t)&&!ma(t).x_()&&t.Ia.size>0}function Yo(t){return 0===de(t).da.size}function Zo(t){t.pa=void 0}async function ta(t){t.ga.set("Online")}async function ea(t){t.Ia.forEach((e,n)=>{Qo(t,e)})}async function na(t,e){Zo(t),Xo(t)?(t.ga.ha(e),Jo(t)):t.ga.set("Unknown")}async function sa(t,e,n){if(t.ga.set("Online"),e instanceof Hr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds){if(t.Ia.has(s)){const e=t.Ra.get(s);void 0!==e&&(await t.remoteSyncer.rejectListen(e,n),t.Ea.delete(e),t.Ra.delete(s)),t.Ia.delete(s)}t.pa.removeTarget(s)}}(t,e)}catch(s){ie(jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ra(t,s)}else if(e instanceof Kr?t.pa.Xe(e):e instanceof Gr?t.pa.st(e):t.pa.tt(e),!n.isEqual(We.min()))try{const e=await lo(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pa.Tt(e);n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Ia.get(s);r&&t.Ia.set(s,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const s=t.Ia.get(e);if(!s)return;t.Ia.set(e,s.withResumeToken(wn.EMPTY_BYTE_STRING,s.snapshotVersion)),Wo(t,e);const r=new Ni(s.target,e,n,s.sequenceNumber);Qo(t,r)});const s=function(t,e){const n=new Map;e.targetChanges.forEach((e,s)=>{const r=t.Ra.get(s);void 0!==r&&n.set(r,e)});let s=new dn(Ce);return e.targetMismatches.forEach((e,n)=>{const r=t.Ra.get(e);void 0!==r&&(s=s.insert(r,n))}),new $r(e.snapshotVersion,n,s,e.documentUpdates,e.resolvedLimboDocuments)}(t,n);return t.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(r){ie(jo,"Failed to raise snapshot:",r),await ra(t,r)}}async function ra(t,e,n){if(!nn(e))throw e;t.da.add(1),await zo(t),t.ga.set("Offline"),n||(n=()=>lo(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(jo,"Retrying IndexedDB access"),await n(),t.da.delete(1),await $o(t)})}function ia(t,e){return e().catch(n=>ra(t,n,e))}async function oa(t){const e=de(t),n=ya(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;aa(e);)try{const t=await po(e.localStore,s);if(null===t){0===e.Ta.length&&n.L_();break}s=t.batchId,ca(e,t)}catch(r){await ra(e,r)}ua(e)&&ha(e)}function aa(t){return Yo(t)&&t.Ta.length<10}function ca(t,e){t.Ta.push(e);const n=ya(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function ua(t){return Yo(t)&&!ya(t).x_()&&t.Ta.length>0}function ha(t){ya(t).start()}async function la(t){ya(t).ra()}async function da(t){const e=ya(t);for(const n of t.Ta)e.ea(n.mutations)}async function fa(t,e,n){const s=t.Ta.shift(),r=xr.from(s,e,n);await ia(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await oa(t)}async function pa(t,e){e&&ya(t).Y_&&await async function(t,e){if(function(t){switch(t){case fe.OK:return ue(64938);case fe.CANCELLED:case fe.UNKNOWN:case fe.DEADLINE_EXCEEDED:case fe.RESOURCE_EXHAUSTED:case fe.INTERNAL:case fe.UNAVAILABLE:case fe.UNAUTHENTICATED:return!1;case fe.INVALID_ARGUMENT:case fe.NOT_FOUND:case fe.ALREADY_EXISTS:case fe.PERMISSION_DENIED:case fe.FAILED_PRECONDITION:case fe.ABORTED:case fe.OUT_OF_RANGE:case fe.UNIMPLEMENTED:case fe.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}(n=e.code)&&n!==fe.ABORTED){const n=t.Ta.shift();ya(t).B_(),await ia(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await oa(t)}var n}(t,e),ua(t)&&ha(t)}async function ga(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ie(jo,"RemoteStore received new credentials");const s=Yo(n);n.da.add(3),await zo(n),s&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await $o(n)}function ma(t){return t.ya||(t.ya=function(t,e,n){const s=de(t);return s.sa(),new Vo(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Zo:ta.bind(null,t),Yo:ea.bind(null,t),t_:na.bind(null,t),H_:sa.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Xo(t)?Jo(t):t.ga.set("Unknown")):(await t.ya.stop(),Zo(t))})),t.ya}function ya(t){return t.wa||(t.wa=function(t,e,n){const s=de(t);return s.sa(),new Po(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:la.bind(null,t),t_:pa.bind(null,t),ta:da.bind(null,t),na:fa.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await oa(t)):(await t.wa.stop(),t.Ta.length>0&&(ie(jo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class va{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new va(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new pe(fe.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(t,e){if(oe("AsyncQueue",`${e}: ${t}`),nn(t))return new pe(fe.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{static emptySet(t){return new Ea(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pe.comparator(e.key,n.key):(t,e)=>Pe.comparator(t.key,e.key),this.keyedMap=Ks(),this.sortedSet=new dn(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ea))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ea;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.Sa=new dn(Pe.comparator)}track(t){const e=t.doc.key,n=this.Sa.get(e);n?0!==t.type&&3===n.type?this.Sa=this.Sa.insert(e,t):3===t.type&&1!==n.type?this.Sa=this.Sa.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Sa=this.Sa.remove(e):1===t.type&&2===n.type?this.Sa=this.Sa.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):ue(63341,{Vt:t,ba:n}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,n)=>{t.push(n)}),t}}class _a{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new _a(t,e,Ea.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class Sa{constructor(){this.queries=Ia(),this.onlineState="Unknown",this.xa=new Set}terminate(){!function(t,e){const n=de(t),s=n.queries;n.queries=Ia(),s.forEach((t,n)=>{for(const s of n.va)s.onError(e)})}(this,new pe(fe.ABORTED,"Firestore shutting down"))}}function Ia(){return new js(t=>Vs(t),Ms)}function Ca(t,e){const n=de(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.va)t.Na(r)&&(s=!0);e.Ca=r}}s&&Da(n)}function Aa(t,e,n){const s=de(t),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(n);s.queries.delete(e)}function Da(t){t.xa.forEach(t=>{t.next()})}var Na,ka;(ka=Na||(Na={})).Ba="default",ka.Cache="cache";class Ra{constructor(t,e,n){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=n||{}}Na(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new _a(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache)return!0;if(!this.Ma())return!0;const n="Offline"!==e;return(!this.options.Wa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}$a(t){t=_a.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==Na.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){this.key=t}}class Oa{constructor(t){this.key=t}}class La{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Ys(),this.mutatedKeys=Ys(),this.iu=Us(t),this.su=new Ea(this.iu)}get ou(){return this.tu}_u(t,e){const n=e?e.au:new ba,s=e?e.su:this.su;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const u=s.get(t),h=Fs(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.uu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.iu(h,a)>0||c&&this.iu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{su:i,au:n,bs:o,mutatedKeys:r}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const r=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const i=t.au.Da();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:t})}};return n(t)-n(e)}(t.type,e.type)||this.iu(t.doc,e.doc)),this.cu(n),s=s??!1;const o=e&&!s?this.lu():[],a=0===this.ru.size&&this.current&&!s?1:0,c=a!==this.nu;return this.nu=a,0!==i.length||c?{snapshot:new _a(this.query,t.su,r,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),hu:o}:{hu:o}}Oa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({su:this.su,au:new ba,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=Ys(),this.su.forEach(t=>{this.Pu(t.key)&&(this.ru=this.ru.add(t.key))});const e=[];return t.forEach(t=>{this.ru.has(t)||e.push(new Oa(t))}),this.ru.forEach(n=>{t.has(n)||e.push(new xa(n))}),e}Tu(t){this.tu=t.ks,this.ru=Ys();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return _a.fromInitialDocuments(this.query,this.su,this.mutatedKeys,0===this.nu,this.hasCachedResults)}}const Ma="SyncEngine";class Va{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pa{constructor(t){this.key=t,this.Eu=!1}}class Fa{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Ru={},this.Au=new js(t=>Vs(t),Ms),this.Vu=new Map,this.du=new Set,this.mu=new dn(Pe.comparator),this.fu=new Map,this.gu=new Wi,this.pu={},this.yu=new Map,this.wu=Pi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return!0===this.Su}}async function Ua(t,e,n=!0){const s=oc(t);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await ja(s,e,n,!0),r}async function Ba(t,e){const n=oc(t);await ja(n,e,!0,!1)}async function ja(t,e,n,s){const r=await function(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.li.getTargetData(t,e).next(r=>r?(s=r,en.resolve(s)):n.li.allocateTargetId(t).next(r=>(s=new Ni(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.vs.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}(t.localStore,Os(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await async function(t,e,n,s,r){t.bu=(e,n,s)=>async function(t,e,n,s){let r=e.view._u(n);r.bs&&(r=await mo(t.localStore,e.query,!1).then(({documents:t})=>e.view._u(t,r)));const i=s&&s.targetChanges.get(e.targetId),o=s&&null!=s.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,i,o);return tc(t,e.targetId,a.hu),a.snapshot}(t,e,n,s);const i=await mo(t.localStore,e,!0),o=new La(e,i.ks),a=o._u(i.documents),c=zr.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);tc(t,n,u.hu);const h=new Va(e,n,o);return t.Au.set(e,h),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),u.snapshot}(t,e,i,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&Go(t.remoteStore,r),a}async function qa(t,e,n){const s=de(t),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter(t=>!Ms(t,e))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await go(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Ho(s.remoteStore,r.targetId),Ya(s,r.targetId)}).catch(tn)):(Ya(s,r.targetId),await go(s.localStore,r.targetId,!0))}async function $a(t,e){const n=de(t),s=n.Au.get(e),r=n.Vu.get(s.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ho(n.remoteStore,s.targetId))}async function za(t,e,n){const s=function(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wa.bind(null,e),e}(t);try{const t=await function(t,e){const n=de(t),s=Qe.now(),r=e.reduce((t,e)=>t.add(e.key),Ys());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=$s(),c=Ys();return n.xs.getEntries(t,r).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(r=>{i=r;const o=[];for(const t of e){const e=_r(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ir(t.key,e,es(e.value.mapValue),mr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)}).next(e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)})}).then(()=>({batchId:o.batchId,changes:Gs(i)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.pu[t.currentUser.toKey()];s||(s=new dn(Ce)),s=s.insert(e,n),t.pu[t.currentUser.toKey()]=s}(s,t.batchId,n),await sc(s,t.changes),await oa(s.remoteStore)}catch(r){const t=wa(r,"Failed to persist write");n.reject(t)}}async function Ka(t,e){const n=de(t);try{const t=await fo(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.fu.get(e);s&&(le(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?s.Eu=!0:t.modifiedDocuments.size>0?le(s.Eu,14607):t.removedDocuments.size>0&&(le(s.Eu,42227),s.Eu=!1))}),await sc(n,t,e)}catch(s){await tn(s)}}function Ga(t,e,n){const s=de(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Au.forEach((n,s)=>{const r=s.view.Oa(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=de(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const r of n.va)r.Oa(e)&&(s=!0)}),s&&Da(n)}(s.eventManager,e),t.length&&s.Ru.H_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ha(t,e,n){const s=de(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.fu.get(e),i=r&&r.key;if(i){let t=new dn(Pe.comparator);t=t.insert(i,ns.newNoDocument(i,We.min()));const n=Ys().add(i),r=new $r(We.min(),new Map,new dn(Ce),t,n);await Ka(s,r),s.mu=s.mu.remove(i),s.fu.delete(e),nc(s)}else await go(s.localStore,e,!1).then(()=>Ya(s,e,n)).catch(tn)}async function Qa(t,e){const n=de(t),s=e.batch.batchId;try{const t=await function(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const s=e.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=en.resolve();return i.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);le(null!==i,48541),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ys();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,s))})}(n.localStore,e);Xa(n,s,null),Ja(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sc(n,t)}catch(r){await tn(r)}}async function Wa(t,e,n){const s=de(t);try{const t=await function(t,e){const n=de(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(le(null!==e,37113),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s)).next(()=>n.localDocuments.getDocuments(t,s))})}(s.localStore,e);Xa(s,e,n),Ja(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await sc(s,t)}catch(r){await tn(r)}}function Ja(t,e){(t.yu.get(e)||[]).forEach(t=>{t.resolve()}),t.yu.delete(e)}function Xa(t,e,n){const s=de(t);let r=s.pu[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function Ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Vu.get(e))t.Au.delete(s),n&&t.Ru.Du(s,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(e=>{t.gu.containsKey(e)||Za(t,e)})}function Za(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);null!==n&&(Ho(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),nc(t))}function tc(t,e,n){for(const s of n)s instanceof xa?(t.gu.addReference(s.key,e),ec(t,s)):s instanceof Oa?(ie(Ma,"Document no longer in limbo: "+s.key),t.gu.removeReference(s.key,e),t.gu.containsKey(s.key)||Za(t,s.key)):ue(19791,{Cu:s})}function ec(t,e){const n=e.key,s=n.path.canonicalString();t.mu.get(n)||t.du.has(s)||(ie(Ma,"New document in limbo: "+n),t.du.add(s),nc(t))}function nc(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new Pe(Le.fromString(e)),s=t.wu.next();t.fu.set(s,new Pa(n)),t.mu=t.mu.insert(n,s),Go(t.remoteStore,new Ni(Os(ks(n.path)),s,"TargetPurposeLimboResolution",sn.ce))}}async function sc(t,e,n){const s=de(t),r=[],i=[],o=[];s.Au.isEmpty()||(s.Au.forEach((t,a)=>{o.push(s.bu(a,e,n).then(t=>{var e;if((t||n)&&s.isPrimaryClient){const r=t?!t.fromCache:null==(e=null==n?void 0:n.targetChanges.get(a.targetId))?void 0:e.current;s.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);const e=io.Es(a.targetId,t);i.push(e)}}))}),await Promise.all(o),s.Ru.H_(r),await async function(t,e){const n=de(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>en.forEach(e,e=>en.forEach(e.Ts,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>en.forEach(e.Is,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(s){if(!nn(s))throw s;ie(co,"Failed to update sequence numbers: "+s)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.vs=n.vs.insert(t,r)}}}(s.localStore,i))}async function rc(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ie(Ma,"User change. New user:",e.toKey());const t=await ho(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).yu.forEach(t=>{t.forEach(t=>{t.reject(new pe(fe.CANCELLED,r))})}),s.yu.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await sc(n,t.Ns)}var s,r}function ic(t,e){const n=de(t),s=n.fu.get(e);if(s&&s.Eu)return Ys().add(s.key);{let t=Ys();const s=n.Vu.get(e);if(!s)return t;for(const e of s){const s=n.Au.get(e);t=t.unionWith(s.view.ou)}return t}}function oc(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ka.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ic.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ha.bind(null,e),e.Ru.H_=Ca.bind(null,e.eventManager),e.Ru.Du=Aa.bind(null,e.eventManager),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xo(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return function(t,e,n,s){return new uo(t,e,n,s)}(this.persistence,new ao,t.initialUser,this.serializer)}xu(t){return new eo(so.Vi,this.serializer)}Mu(t){return new vo}async terminate(){var t,e;null==(t=this.gcScheduler)||t.stop(),null==(e=this.indexBackfillerScheduler)||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class cc extends ac{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){le(this.persistence.referenceDelegate instanceof ro,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ji(n,t.asyncQueue,e)}xu(t){const e=void 0!==this.cacheSizeBytes?Vi.withCacheSize(this.cacheSizeBytes):Vi.DEFAULT;return new eo(t=>ro.Vi(t,e),this.serializer)}}class uc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ga(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=rc.bind(null,this.syncEngine),await async function(t,e){const n=de(t);e?(n.da.delete(2),await $o(n)):e||(n.da.add(2),await zo(n),n.ga.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sa}createDatastore(t){const e=xo(t.databaseInfo.databaseId),n=function(t){return new ko(t)}(t.databaseInfo);return function(t,e,n,s){return new Uo(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Ga(this.syncEngine,t,0),i=bo.v()?new bo:new wo,new qo(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Fa(t,e,n,s,r,i);return o&&(a.Su=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=de(t);ie(jo,"RemoteStore shutting down."),e.da.add(5),await zo(e),e.fa.shutdown(),e.ga.set("Unknown")}(this.remoteStore),null==(t=this.datastore)||t.terminate(),null==(e=this.eventManager)||e.terminate()}}uc.provider={build:()=>new uc};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):oe("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="FirestoreClient";class dc{constructor(t,e,n,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=ee.UNAUTHENTICATED,this.clientId=Ie.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async t=>{ie(lc,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(ie(lc,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=wa(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),ie(lc,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await ho(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(lc,"Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!("FirebaseError"===(n=r).name?n.code===fe.FAILED_PRECONDITION||n.code===fe.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw r;ae("Error using user provided cache. Falling back to memory cache: "+r),await fc(t,new ac)}}else ie(lc,"Using default OfflineComponentProvider"),await fc(t,new cc(void 0));var n;return t._offlineComponents}(t);ie(lc,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>ga(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ga(e.remoteStore,n)),t._onlineComponents=e}async function gc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(lc,"Using user provided OnlineComponentProvider"),await pc(t,t._uninitializedComponentsProvider._online)):(ie(lc,"Using default OnlineComponentProvider"),await pc(t,new uc))),t._onlineComponents}async function mc(t){const e=await gc(t),n=e.eventManager;return n.onListen=Ua.bind(null,e.syncEngine),n.onUnlisten=qa.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ba.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$a.bind(null,e.syncEngine),n}function yc(t,e,n,s){const r=new hc(s),i=new Ra(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>async function(t,e){const n=de(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new Ta,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await n.onListen(r,!0);break;case 1:i.Ca=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const t=wa(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(t)}n.queries.set(r,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&Da(n)}(await mc(t),i)),()=>{r.Ku(),t.asyncQueue.enqueueAndForget(async()=>async function(t,e){const n=de(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const t=i.va.indexOf(e);t>=0&&(i.va.splice(t,1),0===i.va.length?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}(await mc(t),i))}}function vc(t,e){const n=new ge;return t.asyncQueue.enqueueAndForget(async()=>za(await function(t){return gc(t).then(t=>t.syncEngine)}(t),e,n)),n.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function wc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ec=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bc="firestore.googleapis.com",_c=!0;class Tc{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new pe(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bc,this.ssl=_c}else this.host=t.host,this.ssl=t.ssl??_c;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Mi;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new pe(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new pe(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wc(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new pe(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Sc{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new pe(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ye;switch(t.type){case"firstParty":return new be(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new pe(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ec.get(t);e&&(ie("ComponentProvider","Removing Datastore"),Ec.delete(t),e.terminate())}(this),Promise.resolve()}}function Ic(t,e,n,s={}){var i;t=$e(t,Sc);const o=v(e),a=t._getSettings(),c={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;o&&async function(t){(await fetch(t,{credentials:"include"})).ok}(`https://${u}`),a.host!==bc&&a.host!==u&&ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:o,emulatorOptions:s};if(!g(h,c)&&(t._setSettings(h),s.mockUserToken)){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ee.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s.mockUserToken,null==(i=t._app)?void 0:i.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new pe(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ee(o)}t._authCredentials=new ve(new me(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cc(this.firestore,t,this._query)}}class Ac{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ac(this.firestore,t,this._key)}toJSON(){return{type:Ac._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Ke(e,Ac._jsonSchema))return new Ac(t,n||null,new Pe(Le.fromString(e.referencePath)))}}Ac._jsonSchemaVersion="firestore/documentReference/1.0",Ac._jsonSchema={type:ze("string",Ac._jsonSchemaVersion),referencePath:ze("string")};class Dc extends Cc{constructor(t,e,n){super(t,e,ks(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ac(this.firestore,null,new Pe(t))}withConverter(t){return new Dc(this.firestore,t,this._path)}}function Nc(t,e,...n){if(t=y(t),Fe("collection","path",e),t instanceof Sc){const s=Le.fromString(e,...n);return Be(s),new Dc(t,null,s)}{if(!(t instanceof Ac||t instanceof Dc))throw new pe(fe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Be(s),new Dc(t.firestore,null,s)}}function kc(t,e,...n){if(t=y(t),1===arguments.length&&(e=Ie.newId()),Fe("doc","path",e),t instanceof Sc){const s=Le.fromString(e,...n);return Ue(s),new Ac(t,null,new Pe(s))}{if(!(t instanceof Ac||t instanceof Dc))throw new pe(fe.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Ue(s),new Ac(t.firestore,t instanceof Dc?t.converter:null,new Pe(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="AsyncQueue";class xc{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Oo(this,"async_queue_retry"),this.lc=()=>{const t=Ro();t&&ie(Rc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.hc=t;const e=Ro();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Ro();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new ge;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(0!==this.rc.length){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!nn(t))throw t;ie(Rc,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(t=>{throw this._c=t,this.ac=!1,oe("INTERNAL UNHANDLED ERROR: ",Oc(t)),t}).then(t=>(this.ac=!1,t))));return this.hc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=va.createAndSchedule(this,t,e,n,t=>this.Ec(t));return this.oc.push(s),s}Pc(){this._c&&ue(47125,{Rc:Oc(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do{t=this.hc,await t}while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Oc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class Lc extends Sc{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new xc,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xc(t),this._firestoreClient=void 0,await t}}}function Mc(t,e){const n="object"==typeof t?t:function(t=_t){const e=St.get(t);if(!e&&t===_t&&u())return Rt();if(!e)throw Nt.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:xn,r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=c("firestore");t&&Ic(r,...t)}return r}function Vc(t){if(t._terminated)throw new pe(fe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,s,r;const i=t._freezeSettings(),o=function(t,e,n,s,r){return new Rn(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,wc(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}(t._databaseId,(null==(e=t._app)?void 0:e.options.appId)||"",t._persistenceKey,null==(n=t._app)?void 0:n.options.apiKey,i);t._componentsProvider||(null==(s=i.localCache)?void 0:s._offlineComponentProvider)&&(null==(r=i.localCache)?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new dc(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t),t._firestoreClient}class Pc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pc(wn.fromBase64String(t))}catch(e){throw new pe(fe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pc(wn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ke(t,Pc._jsonSchema))return Pc.fromBase64String(t.bytes)}}Pc._jsonSchemaVersion="firestore/bytes/1.0",Pc._jsonSchema={type:ze("string",Pc._jsonSchemaVersion),bytes:ze("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new pe(fe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new pe(fe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new pe(fe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ce(this._lat,t._lat)||Ce(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bc._jsonSchemaVersion}}static fromJSON(t){if(Ke(t,Bc._jsonSchema))return new Bc(t.latitude,t.longitude)}}Bc._jsonSchemaVersion="firestore/geoPoint/1.0",Bc._jsonSchema={type:ze("string",Bc._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:jc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ke(t,jc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new jc(t.vectorValues);throw new pe(fe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jc._jsonSchemaVersion="firestore/vectorValue/1.0",jc._jsonSchema={type:ze("string",jc._jsonSchemaVersion),vectorValues:ze("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qc=/^__.*__$/;class $c{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ir(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sr(t,this.data,e,this.fieldTransforms)}}class zc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ir(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Kc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{dataSource:t})}}class Gc{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.fc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Gc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var e;const n=null==(e=this.path)?void 0:e.child(t),s=this.i({path:n,arrayElement:!1});return s.wc(t),s}Sc(t){var e;const n=null==(e=this.path)?void 0:e.child(t),s=this.i({path:n,arrayElement:!1});return s.fc(),s}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return ru(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(0===t.length)throw this.Dc("Document fields must not be empty");if(Kc(this.dataSource)&&qc.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Hc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||xo(t)}V(t,e,n,s=!1){return new Gc({dataSource:t,methodName:e,targetDoc:n,path:Ve.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qc(t){const e=t._freezeSettings(),n=xo(t._databaseId);return new Hc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wc(t,e,n,s,r,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,r);tu("Data must be an object, but it was:",o,s);const a=Yc(s,o);let c,u;if(i.merge)c=new yn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=eu(e,s,n);if(!o.contains(r))throw new pe(fe.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);iu(t,r)||t.push(r)}c=new yn(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new $c(new ts(a),c,u)}class Jc extends Uc{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Jc}}function Xc(t,e){if(Zc(t=y(t)))return tu("Unsupported field value:",e,t),Yc(t,e);if(t instanceof Uc)return function(t,e){if(!Kc(e.dataSource))throw e.Dc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Dc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.Dc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Xc(r,e.bc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=y(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return nr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Qe.fromDate(t);return{timestampValue:si(e.serializer,n)}}if(t instanceof Qe){const n=new Qe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:si(e.serializer,n)}}if(t instanceof Bc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Pc)return{bytesValue:ri(e.serializer,t._byteString)};if(t instanceof Ac){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Dc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ai(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof jc)return function(t,e){const n=t instanceof jc?t.toArray():t;return{mapValue:{fields:{[Ln]:{stringValue:Pn},[Fn]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.Dc("VectorValues must only contain numeric values.");return tr(e.serializer,t)})}}}}}}(t,e);if(Di(t))return t._toProto(e.serializer);throw e.Dc(`Unsupported field value: ${qe(t)}`)}(t,e)}function Yc(t,e){const n={};return ln(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(t,(t,s)=>{const r=Xc(s,e.yc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Zc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Bc||t instanceof Pc||t instanceof Ac||t instanceof Uc||t instanceof jc||Di(t))}function tu(t,e,n){if(!Zc(n)||!je(n)){const s=qe(n);throw"an object"===s?e.Dc(t+" a custom object"):e.Dc(t+" "+s)}}function eu(t,e,n){if((e=y(e))instanceof Fc)return e._internalPath;if("string"==typeof e)return su(t,e);throw ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const nu=new RegExp("[~\\*/\\[\\]]");function su(t,e,n){if(e.search(nu)>=0)throw ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch(s){throw ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ru(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new pe(fe.INVALID_ARGUMENT,a+t+c)}function iu(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{convertValue(t,e="none"){switch(Un(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _n(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw ue(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return hn(t,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,s;const r=null==(s=null==(n=null==(e=t.fields)?void 0:e[Fn].arrayValue)?void 0:n.values)?void 0:s.map(t=>_n(t.doubleValue));return new jc(r)}convertGeoPoint(t){return new Bc(_n(t.latitude),_n(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Nn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kn(t));default:return null}}convertTimestamp(t){const e=bn(t);return new Qe(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Le.fromString(t);le(Ai(n),9688,{name:t});const s=new On(n.get(1),n.get(3)),r=new Pe(n.popFirst(5));return s.isEqual(e)||oe(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends ou{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ac(this.firestore,null,e)}}const cu="@firebase/firestore",uu="4.14.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}(t,["next","error","complete"])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ac(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new du(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return(null==(t=this._document)?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(eu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class du extends lu{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pu extends lu{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(fe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=pu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}pu._jsonSchemaVersion="firestore/documentSnapshot/1.0",pu._jsonSchema={type:ze("string",pu._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class gu extends pu{data(t={}){return super.data(t)}}class mu{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new gu(this._firestore,this._userDataWriter,n.key,n,new fu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new pe(fe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const s=new gu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new gu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:yu(e.type),doc:s,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(fe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=mu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ie.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),s.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function yu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e,n){t=$e(t,Ac);const s=$e(t.firestore,Lc),r=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e);return _u(s,[Wc(Qc(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,mr.none())])}function wu(t,e,n,...s){t=$e(t,Ac);const r=$e(t.firestore,Lc),i=Qc(r);let o;return o="string"==typeof(e=y(e))||e instanceof Fc?function(t,e,n,s,r,i){const o=t.V(1,e,n),a=[eu(e,s,n)],c=[r];if(i.length%2!=0)throw new pe(fe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(eu(e,i[d])),c.push(i[d+1]);const u=[],h=ts.empty();for(let d=a.length-1;d>=0;--d)if(!iu(u,a[d])){const t=a[d];let e=c[d];e=y(e);const n=o.Sc(t);if(e instanceof Jc)u.push(t);else{const s=Xc(e,n);null!=s&&(u.push(t),h.set(t,s))}}const l=new yn(u);return new zc(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,s):function(t,e,n,s){const r=t.V(1,e,n);tu("Data must be an object, but it was:",r,s);const i=[],o=ts.empty();hn(s,(t,s)=>{const a=su(e,t,n);s=y(s);const c=r.Sc(a);if(s instanceof Jc)i.push(a);else{const t=Xc(s,c);null!=t&&(i.push(a),o.set(a,t))}});const a=new yn(i);return new zc(o,a,r.fieldTransforms)}(i,"updateDoc",t._key,e),_u(r,[o.toMutation(t._key,mr.exists(!0))])}function Eu(t){return _u($e(t.firestore,Lc),[new Nr(t._key,mr.none())])}function bu(t,...e){var n,s,r;t=y(t);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||hu(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hu(e[o])){const t=e[o];e[o]=null==(n=t.next)?void 0:n.bind(t),e[o+1]=null==(s=t.error)?void 0:s.bind(t),e[o+2]=null==(r=t.complete)?void 0:r.bind(t)}let c,u,h;if(t instanceof Ac)u=$e(t.firestore,Lc),h=ks(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const s=n.docs.get(e._key),r=new au(t);return new pu(t,r,e._key,s,new fu(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=$e(t,Cc);u=$e(n.firestore,Lc),h=n._query;const s=new au(u);c={next:t=>{e[o]&&e[o](new mu(u,s,n,t))},error:e[o+1],complete:e[o+2]},function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new pe(fe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return yc(Vc(u),h,a,c)}function _u(t,e){return vc(Vc(t),e)}mu._jsonSchemaVersion="firestore/querySnapshot/1.0",mu._jsonSchema={type:ze("string",mu._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")},function(t,e=!0){ne="12.13.0",Dt(new w("firestore",(t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Lc(new we(t.getProvider("auth-internal")),new Te(r,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new pe(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new On(t.options.projectId,e)}(r,n),r);return s={useFetchStreams:e,...s},i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),xt(cu,uu,t),xt(cu,uu,"esm2020")}();export{Eu as a,Nc as c,kc as d,Mc as g,Rt as i,bu as o,vu as s,wu as u};
