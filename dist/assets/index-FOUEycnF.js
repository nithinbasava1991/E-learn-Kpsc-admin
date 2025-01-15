import{a as mn,B as ce,P as bn,r as h,j as u,M as K,b as W,G as b,c as yn,u as wn,d as le,T as E,C as de,e as ue,f as fe,g as Ge}from"./index-BHN5gOPI.js";import{f as In,a as vn,b as En,c as Sn,d as An}from"./DashboardApi-CWqEGjuB.js";import{A as _n}from"./Alert-Bdc_UWwK.js";const Tn=async e=>await mn({method:"get",url:`${ce}/advertisement/v1/queryAllAdvertisement`,headers:e}),Et=()=>{const[e,t]=h.useState([]),[n,r]=h.useState(!0),a={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},i=`${ce}/file/downloadFile/?filePath=`,o=async()=>{try{const l=(await Tn(a)).data;if(l){const d=l.map(f=>({advertisementId:f.advertisementId,bannerImage:f.filePath?`${i}${f.filePath}`:null}));t(d)}else t([])}catch(c){console.error("Error fetching data:",c)}finally{r(!1)}};return h.useEffect(()=>{o()},[]),u.jsx(K,{border:!1,content:!1,sx:{mt:1},children:u.jsx(W,{children:u.jsx(b,{container:!0,direction:"column",children:u.jsx(b,{item:!0,xs:12,children:n?u.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading..."}):u.jsx(yn.Carousel,{showThumbs:!1,infiniteLoop:!0,autoPlay:!0,interval:3e3,transitionTime:500,children:e.length>0?e.map(c=>c.bannerImage?u.jsx("div",{style:{height:"100%"},children:u.jsx("img",{src:c.bannerImage,alt:`Banner ${c.advertisementId}`,style:{width:"100%",height:"100%",objectFit:"contain"}})},c.advertisementId):null):u.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"No Data"})})})})})})};Et.propTypes={isLoading:bn.bool};const xn=()=>{const[e,t]=h.useState([]),[n,r]=h.useState(!1);wn();const a={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},i=le(),o=async()=>{try{const d=await In(a),f=d.data.content;console.log(d),f&&t(f)}catch(d){console.error("Error fetching promos:",d)}};h.useEffect(()=>{o()},[]);const c=()=>{i("promo")},l=n?e:e.slice(0,3);return u.jsxs(K,{children:[u.jsx(E,{variant:"h3",gutterBottom:!0,children:"Promo"}),u.jsx(b,{container:!0,spacing:2,children:l.map(d=>u.jsx(b,{item:!0,xs:12,sm:6,md:4,lg:4,children:u.jsx(de,{sx:{border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"scale(1.03)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer"},margin:{sm:2,xs:0},mt:{xs:2,sm:0}},children:u.jsxs(ue,{children:[d.youTube&&u.jsx("iframe",{title:"YouTube Video",src:`https://www.youtube.com/embed/${d.youTube}`,frameBorder:"0",allowFullScreen:!0,style:{width:"100%",height:"190px",marginBottom:"1rem"}}),u.jsx(E,{variant:"h5",sx:{mb:1},children:d.promoName}),u.jsx(E,{variant:"body2",sx:{mt:1},children:d.description})]})})},d.promoId))}),e.length>3&&!n&&u.jsx(W,{sx:{textAlign:{sm:"right",xs:"center"},mt:2,mr:2},children:u.jsx(fe,{variant:"contained",color:"primary",onClick:c,children:"View All"})})]})},Dn=()=>{const[e,t]=h.useState([]),[n,r]=h.useState(!1),a={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},i=le(),o=async()=>{try{const f=await vn(a),p=f.data.content;console.log(f),p&&t(p)}catch(f){console.error("Error fetching news:",f)}};h.useEffect(()=>{o()},[]);const c=()=>{i("news")},l=n?e:e.slice(0,3),d=`${ce}/file/downloadFile/?filePath=`;return u.jsxs(K,{children:[u.jsx(E,{variant:"h3",gutterBottom:!0,children:"News"}),u.jsx(b,{container:!0,spacing:2,children:l.map(f=>u.jsx(b,{item:!0,xs:12,sm:6,md:4,lg:4,children:u.jsx(de,{sx:{border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"scale(1.03)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer"},margin:{sm:2,xs:0},mt:{xs:2,sm:0}},children:u.jsxs(ue,{children:[f.photoPath&&u.jsx("img",{src:`${d}${f.photoPath}`,alt:f.newsName,style:{width:"100%",height:"200px",objectFit:"cover",marginBottom:"1rem"}}),u.jsx(E,{variant:"h4",sx:{mb:2},children:f.newsName}),u.jsx(E,{variant:"body2",children:f.description})]})})},f.newsId))}),u.jsx(W,{sx:{textAlign:{sm:"right",xs:"center"},mt:2,mr:2},children:!n&&e.length>3&&u.jsx(fe,{variant:"contained",color:"primary",onClick:c,children:"View All"})})]})},Cn=()=>{const[e,t]=h.useState([]),[n,r]=h.useState(!1),a={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},i=le(),o=async()=>{try{const f=await En(a),p=f.data.content;console.log(f),p&&t(p)}catch(f){console.error("Error fetching news:",f)}};h.useEffect(()=>{o()},[]);const c=()=>{i("success")},l=n?e:e.slice(0,3),d=`${ce}/file/downloadFile/?filePath=`;return u.jsxs(K,{children:[u.jsx(E,{variant:"h3",gutterBottom:!0,children:"Success Story"}),u.jsx(b,{container:!0,spacing:2,children:l.map(f=>u.jsx(b,{item:!0,xs:12,sm:6,md:4,lg:4,children:u.jsx(de,{sx:{border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"scale(1.03)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer"},margin:{sm:2,xs:0},mt:{xs:2,sm:0}},children:u.jsxs(ue,{children:[f.photoPath&&u.jsx("img",{src:`${d}${f.photoPath}`,alt:f.successstoryName,style:{width:"100%",height:"200px",objectFit:"cover",marginBottom:"1rem"}}),u.jsx(E,{variant:"h4",sx:{mb:2},children:f.successstoryName}),u.jsx(E,{variant:"body2",children:f.description})]})})},f.newsId))}),u.jsx(W,{sx:{textAlign:{sm:"right",xs:"center"},mt:2,mr:2},children:!n&&e.length>3&&u.jsx(fe,{variant:"contained",color:"primary",onClick:c,children:"View All"})})]})};var Je={};/**
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
 */const St=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},kn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=e[n++],i=e[n++],o=e[n++],c=((s&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const a=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return t.join("")},At={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const a=e[s],i=s+1<e.length,o=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,d=a>>2,f=(a&3)<<4|o>>4;let p=(o&15)<<2|l>>6,g=l&63;c||(g=64,i||(p=64)),r.push(n[d],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(St(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const a=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,a==null||o==null||l==null||f==null)throw new On;const p=a<<2|o>>4;if(r.push(p),l!==64){const g=o<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class On extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(e){const t=St(e);return At.encodeByteArray(t,!0)},_t=function(e){return jn(e).replace(/\./g,"")},Nn=function(e){try{return At.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mn(){if(typeof self<"u")return self;if(typeof window<"u"||typeof window<"u")return window;throw new Error("Unable to locate global object.")}/**
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
 */const Pn=()=>Mn().__FIREBASE_DEFAULTS__,$n=()=>{if(typeof process>"u"||typeof Je>"u")return;const e=Je.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nn(e[1]);return t&&JSON.parse(t)},Rn=()=>{try{return Pn()||$n()||Bn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Tt=()=>{var e;return(e=Rn())===null||e===void 0?void 0:e.config};/**
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
 */class Fn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Ln(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Be(){try{return typeof indexedDB=="object"}catch{return!1}}function Re(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function xt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hn="FirebaseError";class F extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hn,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q.prototype.create)}}class q{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],i=a?Vn(a,r):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new F(s,o,r)}}function Vn(e,t){return e.replace(Un,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Un=/\{\$([^}]+)}/g;function re(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const a=e[s],i=t[s];if(Ye(a)&&Ye(i)){if(!re(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ye(e){return e!==null&&typeof e=="object"}/**
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
 */const zn=1e3,Kn=2,Wn=4*60*60*1e3,qn=.5;function Xe(e,t=zn,n=Kn){const r=t*Math.pow(n,e),s=Math.round(qn*r*(Math.random()-.5)*2);return Math.min(Wn,r+s)}/**
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
 */function G(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const P="[DEFAULT]";/**
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
 */class Gn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Fn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yn(t))try{this.getOrInitializeService({instanceIdentifier:P})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=P){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=P){return this.instances.has(t)}getOptions(t=P){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&t(i,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=P){return this.component?this.component.multipleInstances?t:P:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jn(e){return e===P?void 0:e}function Yn(e){return e.instantiationMode==="EAGER"}/**
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
 */class Xn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var m;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(m||(m={}));const Qn={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},Zn=m.INFO,er={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},tr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=er[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dt{constructor(t){this.name=t,this._logLevel=Zn,this._logHandler=tr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in m))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...t),this._logHandler(this,m.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...t),this._logHandler(this,m.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,m.INFO,...t),this._logHandler(this,m.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,m.WARN,...t),this._logHandler(this,m.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...t),this._logHandler(this,m.ERROR,...t)}}const nr=(e,t)=>t.some(n=>e instanceof n);let Qe,Ze;function rr(){return Qe||(Qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sr(){return Ze||(Ze=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ct=new WeakMap,De=new WeakMap,kt=new WeakMap,be=new WeakMap,Fe=new WeakMap;function ar(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{n(D(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Ct.set(n,e)}).catch(()=>{}),Fe.set(t,e),t}function ir(e){if(De.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});De.set(e,t)}let Ce={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return De.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function or(e){Ce=e(Ce)}function cr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ye(this),t,...n);return kt.set(r,t.sort?t.sort():[t]),D(r)}:sr().includes(e)?function(...t){return e.apply(ye(this),t),D(Ct.get(this))}:function(...t){return D(e.apply(ye(this),t))}}function lr(e){return typeof e=="function"?cr(e):(e instanceof IDBTransaction&&ir(e),nr(e,rr())?new Proxy(e,Ce):e)}function D(e){if(e instanceof IDBRequest)return ar(e);if(be.has(e))return be.get(e);const t=lr(e);return t!==e&&(be.set(e,t),Fe.set(t,e)),t}const ye=e=>Fe.get(e);function he(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(e,t),o=D(i);return r&&i.addEventListener("upgradeneeded",c=>{r(D(i.result),c.oldVersion,c.newVersion,D(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}function we(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),D(n).then(()=>{})}const dr=["get","getKey","getAll","getAllKeys","count"],ur=["put","add","delete","clear"],Ie=new Map;function et(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ie.get(t))return Ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ur.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dr.includes(n)))return;const a=async function(i,...o){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return Ie.set(t,a),a}or(e=>({...e,get:(t,n,r)=>et(t,n)||e.get(t,n,r),has:(t,n)=>!!et(t,n)||e.has(t,n)}));/**
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
 */class fr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ke="@firebase/app",tt="0.10.15";/**
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
 */const C=new Dt("@firebase/app"),pr="@firebase/app-compat",gr="@firebase/analytics-compat",mr="@firebase/analytics",br="@firebase/app-check-compat",yr="@firebase/app-check",wr="@firebase/auth",Ir="@firebase/auth-compat",vr="@firebase/database",Er="@firebase/data-connect",Sr="@firebase/database-compat",Ar="@firebase/functions",_r="@firebase/functions-compat",Tr="@firebase/installations",xr="@firebase/installations-compat",Dr="@firebase/messaging",Cr="@firebase/messaging-compat",kr="@firebase/performance",Or="@firebase/performance-compat",jr="@firebase/remote-config",Nr="@firebase/remote-config-compat",Mr="@firebase/storage",Pr="@firebase/storage-compat",$r="@firebase/firestore",Br="@firebase/vertexai",Rr="@firebase/firestore-compat",Fr="firebase";/**
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
 */const Oe="[DEFAULT]",Lr={[ke]:"fire-core",[pr]:"fire-core-compat",[mr]:"fire-analytics",[gr]:"fire-analytics-compat",[yr]:"fire-app-check",[br]:"fire-app-check-compat",[wr]:"fire-auth",[Ir]:"fire-auth-compat",[vr]:"fire-rtdb",[Er]:"fire-data-connect",[Sr]:"fire-rtdb-compat",[Ar]:"fire-fn",[_r]:"fire-fn-compat",[Tr]:"fire-iid",[xr]:"fire-iid-compat",[Dr]:"fire-fcm",[Cr]:"fire-fcm-compat",[kr]:"fire-perf",[Or]:"fire-perf-compat",[jr]:"fire-rc",[Nr]:"fire-rc-compat",[Mr]:"fire-gcs",[Pr]:"fire-gcs-compat",[$r]:"fire-fst",[Rr]:"fire-fst-compat",[Br]:"fire-vertex","fire-js":"fire-js",[Fr]:"fire-js-all"};/**
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
 */const se=new Map,Hr=new Map,je=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function k(e){const t=e.name;if(je.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;je.set(t,e);for(const n of se.values())nt(n,e);for(const n of Hr.values())nt(n,e);return!0}function J(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Vr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},N=new q("app","Firebase",Vr);/**
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
 */class Ur{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new A("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}function Ot(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oe,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw N.create("bad-app-name",{appName:String(s)});if(n||(n=Tt()),!n)throw N.create("no-options");const a=se.get(s);if(a){if(re(n,a.options)&&re(r,a.config))return a;throw N.create("duplicate-app",{appName:s})}const i=new Xn(s);for(const c of je.values())i.addComponent(c);const o=new Ur(n,r,i);return se.set(s,o),o}function jt(e=Oe){const t=se.get(e);if(!t&&e===Oe&&Tt())return Ot();if(!t)throw N.create("no-app",{appName:e});return t}function S(e,t,n){var r;let s=(r=Lr[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const o=[`Unable to register library "${s}" with version "${t}":`];a&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(o.join(" "));return}k(new A(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const zr="firebase-heartbeat-database",Kr=1,V="firebase-heartbeat-store";let ve=null;function Nt(){return ve||(ve=he(zr,Kr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(V)}catch(n){console.warn(n)}}}}).catch(e=>{throw N.create("idb-open",{originalErrorMessage:e.message})})),ve}async function Wr(e){try{const n=(await Nt()).transaction(V),r=await n.objectStore(V).get(Mt(e));return await n.done,r}catch(t){if(t instanceof F)C.warn(t.message);else{const n=N.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});C.warn(n.message)}}}async function rt(e,t){try{const r=(await Nt()).transaction(V,"readwrite");await r.objectStore(V).put(t,Mt(e)),await r.done}catch(n){if(n instanceof F)C.warn(n.message);else{const r=N.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});C.warn(r.message)}}}function Mt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const qr=1024,Gr=30*24*60*60*1e3;class Jr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=st();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Gr}),this._storage.overwrite(this._heartbeatsCache))}catch(r){C.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=st(),{heartbeatsToSend:r,unsentEntries:s}=Yr(this._heartbeatsCache.heartbeats),a=_t(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return C.warn(n),""}}}function st(){return new Date().toISOString().substring(0,10)}function Yr(e,t=qr){const n=[];let r=e.slice();for(const s of e){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),at(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),at(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Be()?Re().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function at(e){return _t(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Qr(e){k(new A("platform-logger",t=>new fr(t),"PRIVATE")),k(new A("heartbeat",t=>new Jr(t),"PRIVATE")),S(ke,tt,e),S(ke,tt,"esm2017"),S("fire-js","")}Qr("");var Zr="firebase",es="11.0.1";/**
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
 */S(Zr,es,"app");const Pt="@firebase/installations",Le="0.6.10";/**
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
 */const $t=1e4,Bt=`w:${Le}`,Rt="FIS_v2",ts="https://firebaseinstallations.googleapis.com/v1",ns=60*60*1e3,rs="installations",ss="Installations";/**
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
 */const as={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},B=new q(rs,ss,as);function Ft(e){return e instanceof F&&e.code.includes("request-failed")}/**
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
 */function Lt({projectId:e}){return`${ts}/projects/${e}/installations`}function Ht(e){return{token:e.token,requestStatus:2,expiresIn:os(e.expiresIn),creationTime:Date.now()}}async function Vt(e,t){const r=(await t.json()).error;return B.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ut({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function is(e,{refreshToken:t}){const n=Ut(e);return n.append("Authorization",cs(t)),n}async function zt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function os(e){return Number(e.replace("s","000"))}function cs(e){return`${Rt} ${e}`}/**
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
 */async function ls({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Lt(e),s=Ut(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:Rt,appId:e.appId,sdkVersion:Bt},o={method:"POST",headers:s,body:JSON.stringify(i)},c=await zt(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ht(l.authToken)}}else throw await Vt("Create Installation",c)}/**
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
 */function Kt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ds(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const us=/^[cdef][\w-]{21}$/,Ne="";function fs(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hs(e);return us.test(n)?n:Ne}catch{return Ne}}function hs(e){return ds(e).substr(0,22)}/**
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
 */function pe(e){return`${e.appName}!${e.appId}`}/**
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
 */const Wt=new Map;function qt(e,t){const n=pe(e);Gt(n,t),ps(n,t)}function Gt(e,t){const n=Wt.get(e);if(n)for(const r of n)r(t)}function ps(e,t){const n=gs();n&&n.postMessage({key:e,fid:t}),ms()}let $=null;function gs(){return!$&&"BroadcastChannel"in self&&($=new BroadcastChannel("[Firebase] FID Change"),$.onmessage=e=>{Gt(e.data.key,e.data.fid)}),$}function ms(){Wt.size===0&&$&&($.close(),$=null)}/**
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
 */const bs="firebase-installations-database",ys=1,R="firebase-installations-store";let Ee=null;function He(){return Ee||(Ee=he(bs,ys,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(R)}}})),Ee}async function ae(e,t){const n=pe(e),s=(await He()).transaction(R,"readwrite"),a=s.objectStore(R),i=await a.get(n);return await a.put(t,n),await s.done,(!i||i.fid!==t.fid)&&qt(e,t.fid),t}async function Jt(e){const t=pe(e),r=(await He()).transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function ge(e,t){const n=pe(e),s=(await He()).transaction(R,"readwrite"),a=s.objectStore(R),i=await a.get(n),o=t(i);return o===void 0?await a.delete(n):await a.put(o,n),await s.done,o&&(!i||i.fid!==o.fid)&&qt(e,o.fid),o}/**
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
 */async function Ve(e){let t;const n=await ge(e.appConfig,r=>{const s=ws(r),a=Is(e,s);return t=a.registrationPromise,a.installationEntry});return n.fid===Ne?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ws(e){const t=e||{fid:fs(),registrationStatus:0};return Yt(t)}function Is(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(B.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vs(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Es(e)}:{installationEntry:t}}async function vs(e,t){try{const n=await ls(e,t);return ae(e.appConfig,n)}catch(n){throw Ft(n)&&n.customData.serverCode===409?await Jt(e.appConfig):await ae(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Es(e){let t=await it(e.appConfig);for(;t.registrationStatus===1;)await Kt(100),t=await it(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ve(e);return r||n}return t}function it(e){return ge(e,t=>{if(!t)throw B.create("installation-not-found");return Yt(t)})}function Yt(e){return Ss(e)?{fid:e.fid,registrationStatus:0}:e}function Ss(e){return e.registrationStatus===1&&e.registrationTime+$t<Date.now()}/**
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
 */async function As({appConfig:e,heartbeatServiceProvider:t},n){const r=_s(e,n),s=is(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:Bt,appId:e.appId}},o={method:"POST",headers:s,body:JSON.stringify(i)},c=await zt(()=>fetch(r,o));if(c.ok){const l=await c.json();return Ht(l)}else throw await Vt("Generate Auth Token",c)}function _s(e,{fid:t}){return`${Lt(e)}/${t}/authTokens:generate`}/**
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
 */async function Ue(e,t=!1){let n;const r=await ge(e.appConfig,a=>{if(!Xt(a))throw B.create("not-registered");const i=a.authToken;if(!t&&Ds(i))return a;if(i.requestStatus===1)return n=Ts(e,t),a;{if(!navigator.onLine)throw B.create("app-offline");const o=ks(a);return n=xs(e,o),o}});return n?await n:r.authToken}async function Ts(e,t){let n=await ot(e.appConfig);for(;n.authToken.requestStatus===1;)await Kt(100),n=await ot(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ue(e,t):r}function ot(e){return ge(e,t=>{if(!Xt(t))throw B.create("not-registered");const n=t.authToken;return Os(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function xs(e,t){try{const n=await As(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ae(e.appConfig,r),n}catch(n){if(Ft(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ae(e.appConfig,r)}throw n}}function Xt(e){return e!==void 0&&e.registrationStatus===2}function Ds(e){return e.requestStatus===2&&!Cs(e)}function Cs(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ns}function ks(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Os(e){return e.requestStatus===1&&e.requestTime+$t<Date.now()}/**
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
 */async function js(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ve(t);return r?r.catch(console.error):Ue(t).catch(console.error),n.fid}/**
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
 */async function Ns(e,t=!1){const n=e;return await Ms(n),(await Ue(n,t)).token}async function Ms(e){const{registrationPromise:t}=await Ve(e);t&&await t}/**
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
 */function Ps(e){if(!e||!e.options)throw Se("App Configuration");if(!e.name)throw Se("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Se(e){return B.create("missing-app-config-values",{valueName:e})}/**
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
 */const Qt="installations",$s="installations-internal",Bs=e=>{const t=e.getProvider("app").getImmediate(),n=Ps(t),r=J(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Rs=e=>{const t=e.getProvider("app").getImmediate(),n=J(t,Qt).getImmediate();return{getId:()=>js(n),getToken:s=>Ns(n,s)}};function Fs(){k(new A(Qt,Bs,"PUBLIC")),k(new A($s,Rs,"PRIVATE"))}Fs();S(Pt,Le);S(Pt,Le,"esm2017");/**
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
 */const ie="analytics",Ls="firebase_id",Hs="origin",Vs=60*1e3,Us="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ze="https://www.googletagmanager.com/gtag/js";/**
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
 */const w=new Dt("@firebase/analytics");/**
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
 */const zs={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},v=new q("analytics","Analytics",zs);/**
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
 */function Ks(e){if(!e.startsWith(ze)){const t=v.create("invalid-gtag-resource",{gtagURL:e});return w.warn(t.message),""}return e}function Zt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ws(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qs(e,t){const n=Ws("firebase-js-sdk-policy",{createScriptURL:Ks}),r=document.createElement("script"),s=`${ze}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Gs(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Js(e,t,n,r,s,a){const i=r[s];try{if(i)await t[i];else{const c=(await Zt(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(o){w.error(o)}e("config",s,a)}async function Ys(e,t,n,r,s){try{let a=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const o=await Zt(n);for(const c of i){const l=o.find(f=>f.measurementId===c),d=l&&t[l.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,s||{})}catch(a){w.error(a)}}function Xs(e,t,n,r){async function s(a,...i){try{if(a==="event"){const[o,c]=i;await Ys(e,t,n,o,c)}else if(a==="config"){const[o,c]=i;await Js(e,t,n,r,o,c)}else if(a==="consent"){const[o,c]=i;e("consent",o,c)}else if(a==="get"){const[o,c,l]=i;e("get",o,c,l)}else if(a==="set"){const[o]=i;e("set",o)}else e(a,...i)}catch(o){w.error(o)}}return s}function Qs(e,t,n,r,s){let a=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=Xs(a,e,t,n),{gtagCore:a,wrappedGtag:window[s]}}function Zs(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ze)&&n.src.includes(e))return n;return null}/**
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
 */const ea=30,ta=1e3;class na{constructor(t={},n=ta){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const en=new na;function ra(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sa(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:ra(r)},a=Us.replace("{app-id}",n),i=await fetch(a,s);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw v.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function aa(e,t=en,n){const{appId:r,apiKey:s,measurementId:a}=e.options;if(!r)throw v.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw v.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ca;return setTimeout(async()=>{o.abort()},Vs),tn({appId:r,apiKey:s,measurementId:a},i,o,t)}async function tn(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=en){var a;const{appId:i,measurementId:o}=e;try{await ia(r,t)}catch(c){if(o)return w.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await sa(e);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!oa(l)){if(s.deleteThrottleMetadata(i),o)return w.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw c}const d=Number((a=l==null?void 0:l.customData)===null||a===void 0?void 0:a.httpStatus)===503?Xe(n,s.intervalMillis,ea):Xe(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,f),w.debug(`Calling attemptFetch again in ${d} millis`),tn(e,f,r,s)}}function ia(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),a=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(a),r(v.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function oa(e){if(!(e instanceof F)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ca{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function la(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const a=await t,i=Object.assign(Object.assign({},r),{send_to:a});e("event",n,i)}}/**
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
 */async function da(){if(Be())try{await Re()}catch(e){return w.warn(v.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return w.warn(v.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ua(e,t,n,r,s,a,i){var o;const c=aa(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&w.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>w.error(g)),t.push(c);const l=da().then(g=>{if(g)return r.getId()}),[d,f]=await Promise.all([c,l]);Zs(a)||qs(a,d.measurementId),s("js",new Date);const p=(o=i==null?void 0:i.config)!==null&&o!==void 0?o:{};return p[Hs]="firebase",p.update=!0,f!=null&&(p[Ls]=f),s("config",d.measurementId,p),d.measurementId}/**
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
 */class fa{constructor(t){this.app=t}_delete(){return delete H[this.app.options.appId],Promise.resolve()}}let H={},ct=[];const lt={};let Ae="dataLayer",ha="gtag",dt,nn,ut=!1;function pa(){const e=[];if(Ln()&&e.push("This is a browser extension environment."),xt()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=v.create("invalid-analytics-context",{errorInfo:t});w.warn(n.message)}}function ga(e,t,n){pa();const r=e.options.appId;if(!r)throw v.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)w.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw v.create("no-api-key");if(H[r]!=null)throw v.create("already-exists",{id:r});if(!ut){Gs(Ae);const{wrappedGtag:a,gtagCore:i}=Qs(H,ct,lt,Ae,ha);nn=a,dt=i,ut=!0}return H[r]=ua(e,ct,lt,t,dt,Ae,n),new fa(e)}function ma(e=jt()){e=G(e);const t=J(e,ie);return t.isInitialized()?t.getImmediate():ba(e)}function ba(e,t={}){const n=J(e,ie);if(n.isInitialized()){const s=n.getImmediate();if(re(t,n.getOptions()))return s;throw v.create("already-initialized")}return n.initialize({options:t})}function ya(e,t,n,r){e=G(e),la(nn,H[e.app.options.appId],t,n,r).catch(s=>w.error(s))}const ft="@firebase/analytics",ht="0.10.9";function wa(){k(new A(ie,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return ga(r,s,n)},"PUBLIC")),k(new A("analytics-internal",e,"PRIVATE")),S(ft,ht),S(ft,ht,"esm2017");function e(t){try{const n=t.getProvider(ie).getImmediate();return{logEvent:(r,s,a)=>ya(n,r,s,a)}}catch(n){throw v.create("interop-component-reg-failed",{reason:n})}}}wa();/**
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
 */const Ia="/firebase-messaging-sw.js",va="/firebase-cloud-messaging-push-scope",rn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ea="https://fcmregistrations.googleapis.com/v1",sn="google.c.a.c_id",Sa="google.c.a.c_l",Aa="google.c.a.ts",_a="google.c.a.e";var pt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(pt||(pt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var U;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(U||(U={}));/**
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
 */function x(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ta(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
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
 */const _e="fcm_token_details_db",xa=5,gt="fcm_token_object_Store";async function Da(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(_e))return null;let t=null;return(await he(_e,xa,{upgrade:async(r,s,a,i)=>{var o;if(s<2||!r.objectStoreNames.contains(gt))return;const c=i.objectStore(gt),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(o=d.createTime)!==null&&o!==void 0?o:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:x(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:x(d.auth),p256dh:x(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:x(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:x(d.auth),p256dh:x(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:x(d.vapidKey)}}}}}})).close(),await we(_e),await we("fcm_vapid_details_db"),await we("undefined"),Ca(t)?t:null}function Ca(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ka="firebase-messaging-database",Oa=1,z="firebase-messaging-store";let Te=null;function an(){return Te||(Te=he(ka,Oa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(z)}}})),Te}async function ja(e){const t=on(e),r=await(await an()).transaction(z).objectStore(z).get(t);if(r)return r;{const s=await Da(e.appConfig.senderId);if(s)return await Ke(e,s),s}}async function Ke(e,t){const n=on(e),s=(await an()).transaction(z,"readwrite");return await s.objectStore(z).put(t,n),await s.done,t}function on({appConfig:e}){return e.appId}/**
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
 */const Na={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},y=new q("messaging","Messaging",Na);/**
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
 */async function Ma(e,t){const n=await qe(e),r=cn(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(We(e.appConfig),s)).json()}catch(i){throw y.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(a.error){const i=a.error.message;throw y.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw y.create("token-subscribe-no-token");return a.token}async function Pa(e,t){const n=await qe(e),r=cn(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${We(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw y.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(a.error){const i=a.error.message;throw y.create("token-update-failed",{errorInfo:i})}if(!a.token)throw y.create("token-update-no-token");return a.token}async function $a(e,t){const r={method:"DELETE",headers:await qe(e)};try{const a=await(await fetch(`${We(e.appConfig)}/${t}`,r)).json();if(a.error){const i=a.error.message;throw y.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw y.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function We({projectId:e}){return`${Ea}/projects/${e}/registrations`}async function qe({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function cn({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==rn&&(s.web.applicationPubKey=r),s}/**
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
 */const Ba=7*24*60*60*1e3;async function Ra(e){const t=await La(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:x(t.getKey("auth")),p256dh:x(t.getKey("p256dh"))},r=await ja(e.firebaseDependencies);if(r){if(Ha(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ba?Fa(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await $a(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return mt(e.firebaseDependencies,n)}else return mt(e.firebaseDependencies,n)}async function Fa(e,t){try{const n=await Pa(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ke(e.firebaseDependencies,r),n}catch(n){throw n}}async function mt(e,t){const r={token:await Ma(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ke(e,r),r.token}async function La(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ta(t)})}function Ha(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&s&&a}/**
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
 */function bt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Va(t,e),Ua(t,e),za(t,e),t}function Va(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const a=t.notification.icon;a&&(e.notification.icon=a)}function Ua(e,t){t.data&&(e.data=t.data)}function za(e,t){var n,r,s,a,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const o=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=t.notification)===null||a===void 0?void 0:a.click_action;o&&(e.fcmOptions.link=o);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function Ka(e){return typeof e=="object"&&!!e&&sn in e}/**
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
 */function Wa(e){if(!e||!e.options)throw xe("App Configuration Object");if(!e.name)throw xe("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw xe(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xe(e){return y.create("missing-app-config-values",{valueName:e})}/**
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
 */class qa{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Wa(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Ga(e){try{e.swRegistration=await navigator.serviceWorker.register(Ia,{scope:va}),e.swRegistration.update().catch(()=>{})}catch(t){throw y.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Ja(e,t){if(!t&&!e.swRegistration&&await Ga(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw y.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Ya(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=rn)}/**
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
 */async function ln(e,t){if(!navigator)throw y.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw y.create("permission-blocked");return await Ya(e,t==null?void 0:t.vapidKey),await Ja(e,t==null?void 0:t.serviceWorkerRegistration),Ra(e)}/**
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
 */async function Xa(e,t,n){const r=Qa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[sn],message_name:n[Sa],message_time:n[Aa],message_device_time:Math.floor(Date.now()/1e3)})}function Qa(e){switch(e){case U.NOTIFICATION_CLICKED:return"notification_open";case U.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Za(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===U.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(bt(n)):e.onMessageHandler.next(bt(n)));const r=n.data;Ka(r)&&r[_a]==="1"&&await Xa(e,n.messageType,r)}const yt="@firebase/messaging",wt="0.12.13";/**
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
 */const ei=e=>{const t=new qa(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Za(t,n)),t},ti=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>ln(t,r)}};function ni(){k(new A("messaging",ei,"PUBLIC")),k(new A("messaging-internal",ti,"PRIVATE")),S(yt,wt),S(yt,wt,"esm2017")}/**
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
 */async function ri(){try{await Re()}catch{return!1}return typeof window<"u"&&Be()&&xt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function si(e,t){if(!navigator)throw y.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function ai(e=jt()){return ri().then(t=>{if(!t)throw y.create("unsupported-browser")},t=>{throw y.create("indexed-db-unsupported")}),J(G(e),"messaging").getImmediate()}async function ii(e,t){return e=G(e),ln(e,t)}function oi(e,t){return e=G(e),si(e,t)}ni();const ci={apiKey:"AIzaSyAQAsPlef1PHqyx70vaOh0dfY5WxYpkPI0",authDomain:"push-notifications-3528e.firebaseapp.com",projectId:"push-notifications-3528e",storageBucket:"push-notifications-3528e.firebasestorage.app",messagingSenderId:"483649159324",appId:"1:483649159324:web:0bfebc40d557dc79faad59",measurementId:"G-D1BEHYK3E1"},dn=Ot(ci);ma(dn);const un=ai(dn),li=async()=>{const e=await Notification.requestPermission();if(console.log(e),e==="granted"){const t=await ii(un,{vapidKey:"BJDMOFu1oVtvycmYsMLjgQqA3J231TGSfFh4uRSHyRwLNLV6EznmJ2N4G6a9pcbPU2EF1ZHyA8T3_8tnj0I-e3M"});console.log(t)}};let di={data:""},ui=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||di,fi=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hi=/\/\*[^]*?\*\/|  +/g,It=/\n+/g,j=(e,t)=>{let n="",r="",s="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?n=a+" "+i+";":r+=a[1]=="f"?j(i,a):a+"{"+j(i,a[1]=="k"?"":t)+"}":typeof i=="object"?r+=j(i,t?t.replace(/([^,])+/g,o=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=j.p?j.p(a,i):a+":"+i+";")}return n+(t&&s?t+"{"+s+"}":s)+r},T={},fn=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+fn(e[n]);return t}return e},pi=(e,t,n,r,s)=>{let a=fn(e),i=T[a]||(T[a]=(c=>{let l=0,d=11;for(;l<c.length;)d=101*d+c.charCodeAt(l++)>>>0;return"go"+d})(a));if(!T[i]){let c=a!==e?e:(l=>{let d,f,p=[{}];for(;d=fi.exec(l.replace(hi,""));)d[4]?p.shift():d[3]?(f=d[3].replace(It," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][d[1]]=d[2].replace(It," ").trim();return p[0]})(e);T[i]=j(s?{["@keyframes "+i]:c}:c,n?"":"."+i)}let o=n&&T.g?T.g:null;return n&&(T.g=T[i]),((c,l,d,f)=>{f?l.data=l.data.replace(f,c):l.data.indexOf(c)===-1&&(l.data=d?c+l.data:l.data+c)})(T[i],t,r,o),i},gi=(e,t,n)=>e.reduce((r,s,a)=>{let i=t[a];if(i&&i.call){let o=i(n),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=c?"."+c:o&&typeof o=="object"?o.props?"":j(o,""):o===!1?"":o}return r+s+(i??"")},"");function me(e){let t=this||{},n=e.call?e(t.p):e;return pi(n.unshift?n.raw?gi(n,[].slice.call(arguments,1),t.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(t.p):s),{}):n,ui(t.target),t.g,t.o,t.k)}let hn,Me,Pe;me.bind({g:1});let O=me.bind({k:1});function mi(e,t,n,r){j.p=t,hn=e,Me=n,Pe=r}function M(e,t){let n=this||{};return function(){let r=arguments;function s(a,i){let o=Object.assign({},a),c=o.className||s.className;n.p=Object.assign({theme:Me&&Me()},o),n.o=/ *go\d+/.test(c),o.className=me.apply(n,r)+(c?" "+c:"");let l=e;return e[0]&&(l=o.as||e,delete o.as),Pe&&l[0]&&Pe(o),hn(l,o)}return s}}var bi=e=>typeof e=="function",oe=(e,t)=>bi(e)?e(t):e,yi=(()=>{let e=0;return()=>(++e).toString()})(),pn=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),wi=20,ee=new Map,Ii=1e3,vt=e=>{if(ee.has(e))return;let t=setTimeout(()=>{ee.delete(e),L({type:4,toastId:e})},Ii);ee.set(e,t)},vi=e=>{let t=ee.get(e);t&&clearTimeout(t)},$e=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,wi)};case 1:return t.toast.id&&vi(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:n}=t;return e.toasts.find(a=>a.id===n.id)?$e(e,{type:1,toast:n}):$e(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?vt(r):e.toasts.forEach(a=>{vt(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},te=[],ne={toasts:[],pausedAt:void 0},L=e=>{ne=$e(ne,e),te.forEach(t=>{t(ne)})},Ei={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Si=(e={})=>{let[t,n]=h.useState(ne);h.useEffect(()=>(te.push(n),()=>{let s=te.indexOf(n);s>-1&&te.splice(s,1)}),[t]);let r=t.toasts.map(s=>{var a,i;return{...e,...e[s.type],...s,duration:s.duration||((a=e[s.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Ei[s.type],style:{...e.style,...(i=e[s.type])==null?void 0:i.style,...s.style}}});return{...t,toasts:r}},Ai=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||yi()}),Y=e=>(t,n)=>{let r=Ai(t,e,n);return L({type:2,toast:r}),r.id},I=(e,t)=>Y("blank")(e,t);I.error=Y("error");I.success=Y("success");I.loading=Y("loading");I.custom=Y("custom");I.dismiss=e=>{L({type:3,toastId:e})};I.remove=e=>L({type:4,toastId:e});I.promise=(e,t,n)=>{let r=I.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(s=>(I.success(oe(t.success,s),{id:r,...n,...n==null?void 0:n.success}),s)).catch(s=>{I.error(oe(t.error,s),{id:r,...n,...n==null?void 0:n.error})}),e};var _i=(e,t)=>{L({type:1,toast:{id:e,height:t}})},Ti=()=>{L({type:5,time:Date.now()})},xi=e=>{let{toasts:t,pausedAt:n}=Si(e);h.useEffect(()=>{if(n)return;let a=Date.now(),i=t.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(a-o.createdAt);if(c<0){o.visible&&I.dismiss(o.id);return}return setTimeout(()=>I.dismiss(o.id),c)});return()=>{i.forEach(o=>o&&clearTimeout(o))}},[t,n]);let r=h.useCallback(()=>{n&&L({type:6,time:Date.now()})},[n]),s=h.useCallback((a,i)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:l}=i||{},d=t.filter(g=>(g.position||l)===(a.position||l)&&g.height),f=d.findIndex(g=>g.id===a.id),p=d.filter((g,_)=>_<f&&g.visible).length;return d.filter(g=>g.visible).slice(...o?[p+1]:[0,p]).reduce((g,_)=>g+(_.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:_i,startPause:Ti,endPause:r,calculateOffset:s}}},Di=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ci=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ki=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oi=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Di} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ci} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ki} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ji=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ni=M("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ji} 1s linear infinite;
`,Mi=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pi=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,$i=M("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mi} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pi} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Bi=M("div")`
  position: absolute;
`,Ri=M("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fi=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Li=M("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fi} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Hi=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?h.createElement(Li,null,t):t:n==="blank"?null:h.createElement(Ri,null,h.createElement(Ni,{...r}),n!=="loading"&&h.createElement(Bi,null,n==="error"?h.createElement(Oi,{...r}):h.createElement($i,{...r})))},Vi=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ui=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,zi="0%{opacity:0;} 100%{opacity:1;}",Ki="0%{opacity:1;} 100%{opacity:0;}",Wi=M("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,qi=M("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Gi=(e,t)=>{let n=e.includes("top")?1:-1,[r,s]=pn()?[zi,Ki]:[Vi(n),Ui(n)];return{animation:t?`${O(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ji=h.memo(({toast:e,position:t,style:n,children:r})=>{let s=e.height?Gi(e.position||t||"top-center",e.visible):{opacity:0},a=h.createElement(Hi,{toast:e}),i=h.createElement(qi,{...e.ariaProps},oe(e.message,e));return h.createElement(Wi,{className:e.className,style:{...s,...n,...e.style}},typeof r=="function"?r({icon:a,message:i}):h.createElement(h.Fragment,null,a,i))});mi(h.createElement);var Yi=({id:e,className:t,style:n,onHeightUpdate:r,children:s})=>{let a=h.useCallback(i=>{if(i){let o=()=>{let c=i.getBoundingClientRect().height;r(e,c)};o(),new MutationObserver(o).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return h.createElement("div",{ref:a,className:t,style:n},s)},Xi=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:pn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...s}},Qi=me`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=16,Zi=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:s,containerStyle:a,containerClassName:i})=>{let{toasts:o,handlers:c}=xi(n);return h.createElement("div",{style:{position:"fixed",zIndex:9999,top:Z,left:Z,right:Z,bottom:Z,pointerEvents:"none",...a},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(l=>{let d=l.position||t,f=c.calculateOffset(l,{reverseOrder:e,gutter:r,defaultPosition:t}),p=Xi(d,f);return h.createElement(Yi,{id:l.id,key:l.id,onHeightUpdate:c.updateHeight,className:l.visible?Qi:"",style:p},l.type==="custom"?oe(l.message,l):s?s(l):h.createElement(Ji,{toast:l,position:d}))}))},eo=I;const to=()=>{const[e,t]=h.useState(!1),[n,r]=h.useState([]),[s,a]=h.useState(null),i=le(),c={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},l=()=>{t(!0)},d=async()=>{try{const g=(await Sn(c)).data;if(g){const X=g.sort((Q,gn)=>Q.jobPostName.localeCompare(gn.jobPostName)).map(Q=>({jobPostId:Q.jobPostId,jobPostName:Q.jobPostName}));r(X)}}catch(p){console.error("Error fetching jobposts:",p),a("Failed to fetch jobposts.")}};h.useEffect(()=>{d()},[]);const f=async(p,g)=>{try{const X=(await An(c,p)).data;console.log(X),i("/dashboard/subjects",{state:{jobPostId:p,jobPostName:g,details:X}})}catch(_){console.error("Error fetching modules:",_),a("Failed to fetch modules.")}};return u.jsx(u.Fragment,{children:u.jsxs(K,{children:[u.jsx(E,{variant:"h3",gutterBottom:!0,children:"Job Posts"}),s&&u.jsx(_n,{severity:"error",children:s}),u.jsx(b,{container:!0,spacing:2,children:(e?n:n.slice(0,8)).map(p=>u.jsx(b,{item:!0,xs:12,sm:6,md:4,children:u.jsx(de,{sx:{border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"scale(1.03)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer"},margin:{sm:2,xs:0},mt:{xs:2,sm:0}},onClick:()=>f(p.jobPostId,p.jobPostName),children:u.jsx(ue,{children:u.jsx(E,{variant:"h5",sx:{mb:1},children:p.jobPostName})})})},p.jobPostId))}),n.length>8&&!e&&u.jsx(W,{sx:{textAlign:{sm:"right",xs:"center"},mt:2,mr:2},children:u.jsx(fe,{variant:"contained",color:"primary",onClick:l,children:"View All"})})]})})},ao=()=>{const[e,t]=h.useState(!0);return h.useEffect(()=>{t(!1),li(),oi(un,n=>{console.log(n),eo(n.notification.body)})},[]),u.jsx(u.Fragment,{children:u.jsx(b,{container:!0,spacing:Ge,children:u.jsxs(b,{item:!0,xs:12,children:[u.jsx(Zi,{position:"top-right",reverseOrder:!1}),u.jsxs(b,{container:!0,spacing:Ge,children:[u.jsx(b,{item:!0,xs:12,children:u.jsx(Et,{isLoading:e})}),u.jsx(b,{item:!0,xs:12,children:u.jsx(to,{isLoading:e})}),u.jsx(b,{item:!0,xs:12,children:u.jsx(xn,{isLoading:e})}),u.jsx(b,{item:!0,xs:12,children:u.jsx(Dn,{isLoading:e})}),u.jsx(b,{item:!0,xs:12,children:u.jsx(Cn,{isLoading:e})})]})]})})})};export{ao as default};
