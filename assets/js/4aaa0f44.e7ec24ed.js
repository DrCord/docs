"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32946],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={title:"twilio@0.4.2",id:"twilio-docs",keywords:["adaptor","twilio","sendSMS"]},l=void 0,i={unversionedId:"packages/twilio-docs",id:"packages/twilio-docs",title:"twilio@0.4.2",description:"sendSMS",source:"@site/adaptors/packages/twilio-docs.md",sourceDirName:"packages",slug:"/packages/twilio-docs",permalink:"/adaptors/packages/twilio-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"twilio@0.4.2",id:"twilio-docs",keywords:["adaptor","twilio","sendSMS"]},sidebar:"adaptors",previous:{title:"template developer readme",permalink:"/adaptors/packages/template-readme"},next:{title:"Config for twilio",permalink:"/adaptors/packages/twilio-configuration-schema"}},p={},c=[{value:"sendSMS",id:"sendsms",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"sendsms"},"sendSMS"),(0,a.yg)("p",null,"sendSMS(params) \u21d2 ",(0,a.yg)("code",null,"Operation")),(0,a.yg)("p",null,"Sends an SMS message to a specific phone number"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Param"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"params"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("code",null,"Object")),(0,a.yg)("td",{parentName:"tr",align:null},"an object containing 'body', 'from', and 'to' keys.")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example"),"  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"sendSMS({\n body: dataValue('sampleText'),\n from: dataValue('myFromNumber'),\n to: dataValue('ukMobile'),\n});\n")),(0,a.yg)("hr",null))}u.isMDXComponent=!0}}]);