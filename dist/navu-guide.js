(function () {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3=window,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$5{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$3),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$3)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$4=window,r$1=e$4.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$4.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$1}),(null!==(s$2=e$4.reactiveElementVersions)&&void 0!==s$2?s$2:e$4.reactiveElementVersions=[]).push("1.6.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t$2;const i$3=window,s$1=i$3.trustedTypes,e$3=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$3+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$3.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$3.litHtmlVersions)&&void 0!==t$2?t$2:i$3.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o$2;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.3.3");

  const FLEX_STYLE = i$4 `
  .horiz {display: flex; flex-direction: row;}
  .vert {display: flex; flex-direction: column;}
  .center {align-items: center;}
  .center2 {justify-content: center; align-items: center;}
  .flex {flex: 1;}
  .wrap {flex-wrap: wrap;}
`;
  const FONT_STYLE = i$4 `
  :host {
    --c4-font-family-default: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
    font-family: var(--c4-font-family, var(--c4-font-family-default));
  }
`;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$2=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$1=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e$1(n,t,o):i$2(n,t)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function t$1(t){return n$1({...t,state:!0})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function i$1(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

  class Component extends s {
      fire(name, detail) {
          const opts = { bubbles: true, composed: true, detail };
          this.dispatchEvent(detail ? (new CustomEvent(name, opts)) : (new Event(name, opts)));
      }
  }
  Component.styles = [
      i$4 `
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
  `,
      FLEX_STYLE
  ];

  class IconMap {
      constructor() {
          this._map = new Map();
      }
      get(icon) {
          return this._map.get(icon) || null;
      }
      define(icons) {
          for (const icon in icons) {
              this._map.set(icon, icons[icon]);
          }
      }
      clear() {
          this._map.clear();
      }
  }
  const iconMap = new IconMap();

  iconMap.define({
      close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
      search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
      'shortcut+': 'M7.06,8.94L5,8l2.06-0.94L8,5l0.94,2.06L11,8L8.94,8.94L8,11L7.06,8.94z M8,21l0.94-2.06L11,18l-2.06-0.94L8,15l-0.94,2.06 L5,18l2.06,0.94L8,21z M4.37,12.37L3,13l1.37,0.63L5,15l0.63-1.37L7,13l-1.37-0.63L5,11L4.37,12.37z M19,20.41 c0,0.78-0.84,1.25-1.51,0.86C14.21,19.36,12,15.79,12,12c0-2.73,1.08-5.27,2.75-7.25l-1.9-1.9C12.54,2.54,12.76,2,13.21,2h5.29 C18.78,2,19,2.22,19,2.5v5.29c0,0.45-0.54,0.67-0.85,0.35l-1.97-1.97C14.84,7.82,14,9.88,14,12c0,3.13,1.86,6.01,4.51,7.55 C18.81,19.73,19,20.06,19,20.41z',
      shortcut: 'M20.29,10.29l-3.59-3.59C16.08,6.08,15,6.52,15,7.41V10H8c-2.76,0-5,2.24-5,5v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3 c0-1.65,1.35-3,3-3h7v2.59c0,0.89,1.08,1.34,1.71,0.71l3.59-3.59C20.68,11.32,20.68,10.68,20.29,10.29z'
  });

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

  var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  let C4Icon = class C4Icon extends Component {
      render() {
          if (this.icon) {
              const path = iconMap.get(this.icon) || this.icon;
              return x `
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
          <g>
            <path d=${path}></path>
          </g>
        </svg>
      `;
          }
          return x `<slot></slot>`;
      }
  };
  C4Icon.styles = [
      Component.styles,
      i$4 `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentColor;
        stroke: none;
        width: 24px;
        height: 24px;
      }
      svg {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
      }
      ::slotted(svg) {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        fill: currentColor;
        stroke: none;
      }
    `
  ];
  __decorate$4([
      n$1(),
      __metadata$4("design:type", String)
  ], C4Icon.prototype, "icon", void 0);
  C4Icon = __decorate$4([
      e$2('cf-icon')
  ], C4Icon);

  var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  let NavuFab = class NavuFab extends Component {
      constructor() {
          super(...arguments);
          this.disabled = false;
          this.mini = false;
          this.trailingIcon = false;
          this.on = false;
          this.noAimation = false;
      }
      render() {
          const cc = {
              hasicon: !!this.offIcon,
              haslabel: !!this.label,
              trailingicon: !!(this.offIcon && this.trailingIcon)
          };
          return x `
    <button 
      aria-label="${this.label || (this.on ? this.onIcon : this.offIcon) || ''}" 
      aria-pressed="${this.on}"
      ?disabled="${this.disabled}" 
      class="horiz center2 ${o(cc)}">
      <div id="iconPanel" class="${this.noAimation ? 'noanimation' : ''}">
        <cf-icon id="officon" .icon="${this.offIcon}"></cf-icon>
        <cf-icon id="onicon" .icon="${this.onIcon}"></cf-icon>
      </div>
      <span>${this.label}</span>
    </button>
    `;
      }
  };
  NavuFab.styles = [
      Component.styles,
      FLEX_STYLE,
      FONT_STYLE,
      i$4 `
      :host {
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        font-size: 14px;
        color: var(--c4-theme-secondary, var(--c4-theme-primary, #6200ee));
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: 28px;
        overflow: hidden;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
        letter-spacing: 1.25px;
        line-height: 1;
        padding: var(--c4-padding, 16px);
        text-transform: inherit;
        width: 100%;
        background: currentColor;
        border: none;
        color: inherit;
        box-shadow: var(--c4-shadow, 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%));
        transition: box-shadow 0.28s ease;
      }
      button > * {
        color: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button:active::after {
        opacity: 0.2;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #iconPanel {
        position: relative;
        width: var(--c4-icon-size, 24px);
        height: var(--c4-icon-size, 24px);
        display: none;
      }
      cf-icon {
        width: var(--c4-icon-size, 24px);
        height: var(--c4-icon-size, 24px);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        pointer-events: none;
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #iconPanel.noanimation cf-icon {
        transition: initial;
      }
      #onicon {
        opacity: 0;
        transform: rotateZ(-180deg);
      }
      button span {
        display: none;
      }

      button.hasicon #iconPanel {
        display: block;
      }
      button.haslabel {
        padding: var(--c4-padding, 0 20px);
        height: 48px;
      }
      button.haslabel span {
        display: block;
      }
      button.haslabel::after {
        border-radius: 28px;
      }

      :host([mini]) button.hasicon.haslabel,
      button.hasicon.haslabel {
        padding-inline-start: 12px;
      }
      button.hasicon.haslabel #iconPanel {
        margin-inline-end: 12px;
      }
      
      :host([mini]) button.hasicon.haslabel.trailingicon,
      button.hasicon.haslabel.trailingicon {
        padding-inline-start: 20px;
        padding-inline-end: 12px;
      }
      button.hasicon.haslabel.trailingicon #iconPanel {
        margin-inline-end: 0;
        margin-inline-start: 12px;
      }
      button.horiz.trailingicon {
        flex-direction: row-reverse;
      }

      :host([mini]) button {
        padding: var(--c4-padding, 8px);
      }
      :host([mini]) button.haslabel {
        padding: var(--c4-padding, 0 16px);
        height: 40px;
      }

      :host([disabled]) button {
        background-color: var(--c4-disabled-color, rgba(0, 0, 0, 0.12));
        cursor: initial;
        pointer-events: none;
        box-shadow: none;
      }
      :host([disabled]) button > * {
        color: var(--c4-disabled-text-color, rgba(0, 0, 0, 0.38));
      }

      :host([on]) #officon {
        opacity: 0;
        transform: rotateZ(180deg);
      }
      :host([on]) #onicon {
        opacity: 1;
        transform: rotateZ(0deg);
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus:hover::before {
          opacity: 0.1;
        }
      }
    `,
  ];
  __decorate$3([
      n$1({ type: Boolean, reflect: true }),
      __metadata$3("design:type", Object)
  ], NavuFab.prototype, "disabled", void 0);
  __decorate$3([
      n$1({ type: Boolean, reflect: true }),
      __metadata$3("design:type", Object)
  ], NavuFab.prototype, "mini", void 0);
  __decorate$3([
      n$1({ type: Boolean, attribute: 'trailing-icon' }),
      __metadata$3("design:type", Object)
  ], NavuFab.prototype, "trailingIcon", void 0);
  __decorate$3([
      n$1({ type: Boolean, reflect: true }),
      __metadata$3("design:type", Object)
  ], NavuFab.prototype, "on", void 0);
  __decorate$3([
      n$1({ type: String, attribute: 'on-icon' }),
      __metadata$3("design:type", String)
  ], NavuFab.prototype, "onIcon", void 0);
  __decorate$3([
      n$1({ type: String, attribute: 'off-icon' }),
      __metadata$3("design:type", String)
  ], NavuFab.prototype, "offIcon", void 0);
  __decorate$3([
      n$1({ type: Boolean, attribute: 'no-animation' }),
      __metadata$3("design:type", Object)
  ], NavuFab.prototype, "noAimation", void 0);
  __decorate$3([
      n$1(),
      __metadata$3("design:type", String)
  ], NavuFab.prototype, "label", void 0);
  NavuFab = __decorate$3([
      e$2('navu-fab')
  ], NavuFab);

  var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  let C4Button = class C4Button extends Component {
      constructor() {
          super(...arguments);
          this.type = 'text';
          this.disabled = false;
          this.dense = false;
          this.trailingIcon = false;
      }
      render() {
          const cc = {
              solid: (this.type === 'raised' || this.type === 'flat'),
              icon: !!this.icon,
              trailingicon: !!(this.icon && this.trailingIcon)
          };
          return x `
    <button ?disabled="${this.disabled}" class="horiz center2 ${o(cc)}">
      ${this.icon ? x `<cf-icon .icon="${this.icon}"></cf-icon>` : null}
      <slot></slot>
    </button>
    `;
      }
      focus() {
          var _a;
          (_a = this._b) === null || _a === void 0 ? void 0 : _a.focus();
      }
  };
  C4Button.styles = [
      Component.styles,
      FLEX_STYLE,
      FONT_STYLE,
      i$4 `
      :host {
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        font-size: 14px;
        min-width: 64px;
        color: var(--c4-theme-primary, #6200ee);
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: var(--c4-border-radius, 4px);
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
        letter-spacing: 1.25px;
        line-height: 1;
        padding: var(--c4-padding, 0 8px);
        min-height: 36px;
        text-transform: inherit;
        width: 100%;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button:active::after {
        opacity: 0.1;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      cf-icon {
        width: var(--c4-icon-size, 18px);
        height: var(--c4-icon-size, 18px);
        margin-inline-end: var(--c4-button-icon-end-margin, 8px);
        flex-shrink: 0;
      }
      button.horiz.trailingicon {
        flex-direction: row-reverse;
      }
      button.trailingicon cf-icon {
        margin-inline-end: 0;
        margin-inline-start: 8px;
      }

      :host([dense]) button {
        min-height: 28px;
      }
      :host([disabled]) button {
        color: var(--c4-disabled-color, rgba(0, 0, 0, 0.38));
        cursor: initial;
        pointer-events: none;
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus:hover::before {
          opacity: 0.1;
        }
      }
    `,
      // text
      i$4 `
    :host([type="text"]) button {
      background: none;
      border: none;
    }
    `,
      // outlined
      i$4 `
    :host([type="outlined"]) button {
      background: none;
      border: 1px solid;
      padding: var(--c4-padding, 0 16px);
      border-color: var(--c4-outline-color, rgba(0, 0, 0, 0.12));
    }
    :host([type="outlined"]) button.icon {
      padding-inline-start: 12px;
    }
    :host([type="outlined"]) button.icon.trailingicon {
      padding-inline-start: 16px;
      padding-inline-end: 12px;
    }
    :host([type="outlined"]) button:focus {
      border-color: var(--c4-outline-focussed-color, currentColor);
    }
    `,
      // solid
      i$4 `
    button.solid {
      background: currentColor;
      border: none;
      padding: var(--c4-padding, 0 16px);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      transition: box-shadow 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    button.solid.icon {
      padding-inline-start: var(--c4-button-icon-start-padding, 12px);
    }
    button.solid.icon.trailingicon {
      padding-inline-start: 16px;
      padding-inline-end: 12px;
    }
    button.solid > * {
      color: var(--c4-theme-on-primary, white);
    }
    button.solid::before {
      background: var(--c4-theme-on-primary, white);
    }
    button.solid::after {
      background: var(--c4-theme-on-primary, white);
    }
    button.solid:focus::before {
      opacity: 0.2;
    }
    button.solid:active::after {
      opacity: 0.2;
    }
    button.solid:active {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }
    :host([disabled]) button.solid {
      background-color: var(--c4-disabled-color, rgba(0, 0, 0, 0.12));
      box-shadow: none;
    }
    :host([disabled]) button.solid > *{
      color: var(--c4-disabled-text-color, rgba(0, 0, 0, 0.38));
    }

    @media (hover: hover) {
      button.solid:hover::before {
        opacity: 0.1;
      }
      button.solid:focus:hover::before {
        opacity: 0.2;
      }
    }
    `,
      // Flat
      i$4 `
    :host([type="flat"]) button.solid {
      box-shadow: none;
    }
    :host([type="flat"]) button.solid:active {
      box-shadow: none;
    }
    `,
  ];
  __decorate$2([
      n$1({ reflect: true }),
      __metadata$2("design:type", String)
  ], C4Button.prototype, "type", void 0);
  __decorate$2([
      n$1({ type: Boolean, reflect: true }),
      __metadata$2("design:type", Object)
  ], C4Button.prototype, "disabled", void 0);
  __decorate$2([
      n$1({ type: Boolean, reflect: true }),
      __metadata$2("design:type", Object)
  ], C4Button.prototype, "dense", void 0);
  __decorate$2([
      n$1(),
      __metadata$2("design:type", String)
  ], C4Button.prototype, "icon", void 0);
  __decorate$2([
      n$1({ type: Boolean, attribute: 'trailing-icon' }),
      __metadata$2("design:type", Object)
  ], C4Button.prototype, "trailingIcon", void 0);
  __decorate$2([
      i$1('button'),
      __metadata$2("design:type", HTMLButtonElement)
  ], C4Button.prototype, "_b", void 0);
  C4Button = __decorate$2([
      e$2('cf-button')
  ], C4Button);

  var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  let C4IconButton = class C4IconButton extends Component {
      constructor() {
          super(...arguments);
          this.disabled = false;
          this.mini = false;
      }
      render() {
          return x `
    <button aria-label="${this.label || this.icon || ''}" ?disabled="${this.disabled}">
      <cf-icon .icon="${this.icon}"></cf-icon>
    </button>
    `;
      }
  };
  C4IconButton.styles = [
      Component.styles,
      i$4 `
      :host {
        display: inline-block;
        vertical-align: top;
      }
      button {
        background: none;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
        overflow: hidden;
        padding: var(--c4-padding, 12px);
        color: inherit;
        user-select: none;
        position: relative;
        display: block;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.2;
      }
      button:active::after {
        opacity: 0.2;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      cf-icon {
        width: var(--c4-icon-size, 24px);
        height: var(--c4-icon-size, 24px);
      }

      :host([mini]) button {
        padding: var(--c4-padding, 8px);
      }

      :host([disabled]) button {
        color: var(--c4-disabled-color, rgba(0, 0, 0, 0.38));
        cursor: initial;
        pointer-events: none;
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.1;
        }
        button:focus:hover::before {
          opacity: 0.2;
        }
      }
    `,
  ];
  __decorate$1([
      n$1({ type: Boolean, reflect: true }),
      __metadata$1("design:type", Object)
  ], C4IconButton.prototype, "disabled", void 0);
  __decorate$1([
      n$1({ type: Boolean, reflect: true }),
      __metadata$1("design:type", Object)
  ], C4IconButton.prototype, "mini", void 0);
  __decorate$1([
      n$1(),
      __metadata$1("design:type", String)
  ], C4IconButton.prototype, "icon", void 0);
  __decorate$1([
      n$1(),
      __metadata$1("design:type", String)
  ], C4IconButton.prototype, "label", void 0);
  C4IconButton = __decorate$1([
      e$2('cf-icon-button')
  ], C4IconButton);

  var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (undefined && undefined.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
  const suggestions = [
      { label: 'Review our pricing' },
      { caption: 'Also see', label: 'How WAN Optimization really works' },
      { caption: 'Recommended', label: 'Sign up for our webinar on WAN Optimization' },
      { label: 'More...', icon: 'search' }
  ];
  let NavuGuide = class NavuGuide extends Component {
      constructor() {
          super(...arguments);
          this.recommending = false;
          this._hovering = false;
          this._searchMode = false;
          this._mouseOver = false;
          this._hoverOutTimer = 0;
          this._recommendedOnce = false;
      }
      render() {
          return x `
    <div id="floatingSection" 
      ?hidden="${this._searchMode}" 
      class="${this.recommending ? 'recommending' : ''} ${this._hovering ? 'hovering' : ''}">
      <div id="fabPanel" @mouseenter="${this._onFabMouseEnter}">
        <navu-fab .on="${this.recommending}" off-icon="shortcut" on-icon="shortcut" @click="${this._onFabClick}"></navu-fab>
      </div>
      <div id="cardPanel" @mouseenter="${this._onMouseOver}" @mouseleave="${this._onMouseOut}">
        ${suggestions.map((d, i) => x `
          <div id="card${i}" class="card" style="--navu-guide-cell-transition-delay: ${i * 0.15}s">
            <cf-button type="raised" .icon="${d.icon}">
              <div class="vert button-innner">
                ${d.caption ? x `<div class="cardCaption">${d.caption}</div>` : null}
                <div class="cardLabel">${d.label}</div>
              </div>
            </cf-button>
          </div>
        `)}
      </div>
    </div>
    
    <div id="searchSection" class="${this._searchMode ? 'search-mode' : ''}">
      <main>
        <p>search content goes here</p>
      </main>
      <header class="horiz center">
        <div class="flex" style="position: relative;">
          <input id="txtSearch" placeholder="What are you looking for?">
        </div>
        <cf-icon-button icon="close" style="margin-left: 8px;" @click="${this._closeSearch}"></cf-icon-button>
      </header>
    </div>
    `;
      }
      updated(changes) {
          if (changes.has('recommending') && this.recommending) {
              this._recommendedOnce = true;
          }
      }
      _onFabClick() {
          // TODO: open full search
          this._searchMode = true;
          this.recommending = false;
          this._searchTextbox.focus();
      }
      _closeSearch() {
          this._searchMode = false;
      }
      _cancelHoverOutTimer() {
          if (this._hoverOutTimer) {
              window.clearTimeout(this._hoverOutTimer);
              this._hoverOutTimer = 0;
          }
      }
      _onFabMouseEnter() {
          if (this._recommendedOnce && (!this.recommending)) {
              this.recommending = true;
              setTimeout(() => {
                  if (this.recommending && (!this._hovering)) {
                      this.recommending = false;
                  }
              }, 2000);
          }
      }
      _onMouseOver() {
          this._cancelHoverOutTimer();
          this._hovering = true;
          this._mouseOver = true;
      }
      _onMouseOut() {
          this._cancelHoverOutTimer();
          this._mouseOver = false;
          if (this._hovering) {
              this._hoverOutTimer = window.setTimeout(() => {
                  if (!this._mouseOver) {
                      this._hovering = false;
                  }
                  this._hoverOutTimer = 0;
              }, 2000);
          }
      }
  };
  NavuGuide.styles = [
      Component.styles,
      FONT_STYLE,
      i$4 `
    :host {
      display: block;
      position: fixed;
      bottom: 4px;
      left: 4px;
    }

    #fabPanel {
      padding: 12px;
      border-radius: 50%;
    }
    navu-fab {
      --c4-padding: 10px;
      --c4-shadow: none;
      --c4-theme-on-secondary: #0277BD;
      --c4-theme-secondary: rgba(255,255,255,0.7);
      transform: scale(0.7);
      transition: transform 0.18s ease;
    }
    .recommending navu-fab,
    #fabPanel:hover navu-fab {
      transform: scale(1);
      --c4-theme-secondary: #0277BD;
      --c4-theme-on-secondary: #fff;
      --c4-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    }

    #cardPanel {
      position: absolute;
      left: 100%;
      left: calc(100% + 8px);
      bottom: 16px;
      width: 280px;
      pointer-events: none;
      opacity: 0;
      align-items: start;
      gap: 10px;
      display: flex;
      flex-direction: column-reverse
    }
    .recommending #cardPanel {
      pointer-events: auto;
      opacity: 1;
    }
    .card {
      background: white;
      cursor: pointer;
      border-radius: 4px;
      user-select: none;
      text-align: left;
      letter-spacing: 0.5px;
      white-space: nowrap;
      pointer-events: none;
      transform: translateY(100%);
      opacity: 0;
      position: relative;
      --c4-theme-primary: #0277BD;
      --c4-padding: 12px 16px;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
    }
    #card0::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 6px;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #a2c7e0;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
      transition: opacity 0.2s ease;
      opacity: 1;
    }
    #card0.card {
      transform-origin: left center;
      z-index: 1;
      transform: translateX(-32px) scale(0);
    }
    .recommending.hovering #card0.card,
    .recommending #card0.card {
      transform: translateX(0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .recommending.hovering #card0::before {
      opacity: 0;
    }
    .recommending.hovering .card {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      transition-delay: var(--navu-guide-cell-transition-delay, 0);
    }

    .button-innner {
      text-align: left;
      text-transform: initial;
      letter-spacing: 0.5px;
      white-space: initial;
    }
    .cardCaption {
      text-transform: uppercase;
      font-size: 12px;
      opacity: 0.7;
      padding-bottom: 8px;
      letter-spacing: 1px;
      font-weight: 300;
    }
    .cardLabel {
      line-height: 1.5;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 1000;
      padding: 0 16px;
      background-color: #0277BD;
      color: white;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
      pointer-events: none;
      opacity: 0;
      transform: translateY(-120%);
    }
    main {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      bottom: 0;
      z-index: 1000;
      padding: 0 16px;
      background-color: #ffffff;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
      pointer-events: none;
      opacity: 0;
      transform: translateY(110%);
    }
    #txtSearch {
      display: block;
      width: 100%;
      outline: none;
      border: none;
      background: rgba(255,255,255,0.95);
      font-size: 14px;
      font-family: inherit;
      height: 40px;
      border-radius: 20px;
      padding: 0 20px;
    }
    .search-mode header {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
    .search-mode main {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }


    `
  ];
  __decorate([
      n$1({ type: Boolean }),
      __metadata("design:type", Object)
  ], NavuGuide.prototype, "recommending", void 0);
  __decorate([
      t$1(),
      __metadata("design:type", Object)
  ], NavuGuide.prototype, "_hovering", void 0);
  __decorate([
      t$1(),
      __metadata("design:type", Object)
  ], NavuGuide.prototype, "_searchMode", void 0);
  __decorate([
      i$1('#txtSearch'),
      __metadata("design:type", HTMLInputElement)
  ], NavuGuide.prototype, "_searchTextbox", void 0);
  NavuGuide = __decorate([
      e$2('navu-guide')
  ], NavuGuide);

})();
