"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1356],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(n),d=a,y=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(y,p(p({ref:t},u),{},{components:n})):r.createElement(y,p({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(58168),a=(n(96540),n(15680));const o={title:"openhim@0.2.1",id:"openhim-docs",keywords:["adaptor","openhim"]},p=void 0,c={unversionedId:"packages/openhim-docs",id:"packages/openhim-docs",title:"openhim@0.2.1",description:"encounter",source:"@site/adaptors/packages/openhim-docs.md",sourceDirName:"packages",slug:"/packages/openhim-docs",permalink:"/adaptors/packages/openhim-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openhim@0.2.1",id:"openhim-docs",keywords:["adaptor","openhim"]},sidebar:"adaptors",previous:{title:"openfn developer readme",permalink:"/adaptors/packages/openfn-readme"},next:{title:"Config for openhim",permalink:"/adaptors/packages/openhim-configuration-schema"}},l={},i=[{value:"encounter",id:"encounter",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"encounter"},"encounter"),(0,a.yg)("p",null,"encounter(encounterData) \u21d2 ",(0,a.yg)("code",null,"Operation")),(0,a.yg)("p",null,"Create an encounter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Param"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"encounterData"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("code",null,"object")),(0,a.yg)("td",{parentName:"tr",align:null},"Payload data for the encounter")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example"),"  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  encounter(data)\n)(state)\n")),(0,a.yg)("hr",null))}m.isMDXComponent=!0}}]);