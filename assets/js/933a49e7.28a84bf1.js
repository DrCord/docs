"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[52765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={title:"template@1.7.8",id:"template-docs",keywords:["adaptor","template","create","createPatient"]},o=void 0,p={unversionedId:"packages/template-docs",id:"packages/template-docs",title:"template@1.7.8",description:"create",source:"@site/adaptors/packages/template-docs.md",sourceDirName:"packages",slug:"/packages/template-docs",permalink:"/adaptors/packages/template-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"template@1.7.8",id:"template-docs",keywords:["adaptor","template","create","createPatient"]},sidebar:"adaptors",previous:{title:"telerivet developer readme",permalink:"/adaptors/packages/telerivet-readme"},next:{title:"Config for template",permalink:"/adaptors/packages/template-configuration-schema"}},c={},i=[{value:"create",id:"create",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create"},"create"),(0,n.kt)("p",null,"create(path, params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nCreates a fictional resource in a fictional destination system using a POST request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'create("patient", {"foo": "bar"})\n')),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);