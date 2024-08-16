"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11084],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>h});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),o=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=o(e.components);return t.createElement(p.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),s=o(n),u=l,h=s["".concat(p,".").concat(u)]||s[u]||c[u]||r;return n?t.createElement(h,i(i({ref:a},d),{},{components:n})):t.createElement(h,i({ref:a},d))}));function h(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var g={};for(var p in a)hasOwnProperty.call(a,p)&&(g[p]=a[p]);g.originalType=e,g[s]="string"==typeof e?e:l,i[1]=g;for(var o=2;o<r;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8235:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var t=n(58168),l=(n(96540),n(15680));const r={title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},i="Changelog for the fhir adaptor",g={unversionedId:"packages/fhir-changelog",id:"packages/fhir-changelog",title:"fhir changelog",description:"5.0.2",source:"@site/adaptors/packages/fhir-changelog.md",sourceDirName:"packages",slug:"/packages/fhir-changelog",permalink:"/adaptors/packages/fhir-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},sidebar:"adaptors",previous:{title:"Config for fhir",permalink:"/adaptors/packages/fhir-configuration-schema"},next:{title:"fhir developer readme",permalink:"/adaptors/packages/fhir-readme"}},p={},o=[{value:"5.0.2",id:"502",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"5.0.1",id:"501",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"5.0.0",id:"500",level:2},{value:"Added",id:"added",level:4},{value:"Changed",id:"changed",level:4},{value:"Removed",id:"removed",level:4},{value:"4.0.0",id:"400",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"3.2.0",id:"320",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"3.1.2",id:"312",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"3.1.1",id:"311",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"3.1.0",id:"310",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"3.0.1",id:"301",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"3.0.0",id:"300",level:2},{value:"Major Changes",id:"major-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"2.0.0",id:"200",level:2},{value:"Major Changes",id:"major-changes-2",level:3},{value:"1.1.5",id:"115",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"1.1.4",id:"114",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"1.1.3",id:"113",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"1.1.2",id:"112",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes-2",level:3},{value:"Patch Changes",id:"patch-changes-12",level:3}],d={toc:o},s="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(s,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"changelog-for-the-fhir-adaptor"},"Changelog for the fhir adaptor"),(0,l.yg)("h1",{id:"openfnlanguage-fhir"},"@openfn/language-fhir"),(0,l.yg)("h2",{id:"502"},"5.0.2"),(0,l.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"8146c23: Fix typings in package.json"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[8146c23]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@2.0.1"},"language-common@2.0.1"))))),(0,l.yg)("h2",{id:"501"},"5.0.1"),(0,l.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"940996b: Use common helper code to handle invalid absolute URLs"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[4fe527c]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@2.0.0"},"language-common@2.0.0"))))),(0,l.yg)("h2",{id:"500"},"5.0.0"),(0,l.yg)("h4",{id:"added"},"Added"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Improved type definitions for ",(0,l.yg)("inlineCode",{parentName:"li"},"request()")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"get()"))),(0,l.yg)("h4",{id:"changed"},"Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"request")," function to the new signature:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const request =\n  async (method, path, options = {}, callback) =>\n  state => ({\n    ...state,\n    data,\n    response,\n  });\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"post")," function to the new signature:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const post = (path, data, options, callback) => state => ({\n  ...state,\n  data,\n  response,\n});\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"get")," function to the new signature:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const get = (path, params, options, callback) => state => ({\n  ...state,\n  data,\n  response,\n});\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"create")," function to the new signature:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const create = (resource, resource, params, callback) => state => ({\n  ...state,\n  data,\n  response,\n});\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"createTransactionBundle")," function:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const createTransactionBundle = (entries, callback) => state => ({\n  ...state,\n  data,\n});\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"getClaim")," function to the new signature:"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export const getClaim =\n  (claimId, params, callback = s => s) =>\n  state => ({\n    ...state,\n    data,\n  });\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Updated ",(0,l.yg)("inlineCode",{parentName:"p"},"configuration-schema.json")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Removed ",(0,l.yg)("inlineCode",{parentName:"li"},"authType")),(0,l.yg)("li",{parentName:"ul"},"Rename ",(0,l.yg)("inlineCode",{parentName:"li"},"token")," to ",(0,l.yg)("inlineCode",{parentName:"li"},"access_token")),(0,l.yg)("li",{parentName:"ul"},"Add ",(0,l.yg)("inlineCode",{parentName:"li"},"username")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"password"))))),(0,l.yg)("h4",{id:"removed"},"Removed"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Removed ",(0,l.yg)("inlineCode",{parentName:"li"},"parseAs")," from the options.")),(0,l.yg)("h2",{id:"400"},"4.0.0"),(0,l.yg)("h3",{id:"major-changes"},"Major Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"a42ffeb9: - All HTTP methods now write ",(0,l.yg)("inlineCode",{parentName:"li"},"{ data, response }")," to state, where\ndata is the response body and response is the raw response",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"All HTTP methods now support a ",(0,l.yg)("inlineCode",{parentName:"li"},"throwOnError")," param, which defaults to true.\nIf false, the adaptor will not throw if the HTTP status is <=400"),(0,l.yg)("li",{parentName:"ul"},"request: return { data, response } directly"),(0,l.yg)("li",{parentName:"ul"},"request: fix an issue where default headers would override user headers"),(0,l.yg)("li",{parentName:"ul"},"request: if the body contains application/json content, parse it as JSON")))),(0,l.yg)("h2",{id:"320"},"3.2.0"),(0,l.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"73433c20: Add ",(0,l.yg)("inlineCode",{parentName:"li"},"fnIf")," operation")),(0,l.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[106ecf6d]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.14.0"},"language-common@1.14.0"))))),(0,l.yg)("h2",{id:"312"},"3.1.2"),(0,l.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"2b283549: - Update ",(0,l.yg)("inlineCode",{parentName:"li"},"create()")," example",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Update required properties in configuration schema")))),(0,l.yg)("h2",{id:"311"},"3.1.1"),(0,l.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Security updates (lodash,undici)"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.13.2"},"language-common@1.13.2"))))),(0,l.yg)("h2",{id:"310"},"3.1.0"),(0,l.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"d94e9ee: Migrate from axios to using ",(0,l.yg)("inlineCode",{parentName:"li"},"fetch")," from ",(0,l.yg)("inlineCode",{parentName:"li"},"undici")," and add uniti tests")),(0,l.yg)("h2",{id:"301"},"3.0.1"),(0,l.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Update lock files"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.yg)("h2",{id:"300"},"3.0.0"),(0,l.yg)("h3",{id:"major-changes-1"},"Major Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.yg)("p",{parentName:"li"},"See ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.yg)("h2",{id:"200"},"2.0.0"),(0,l.yg)("h3",{id:"major-changes-2"},"Major Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"d4b4094: - Update configuration schema,",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Add ",(0,l.yg)("inlineCode",{parentName:"li"},"get()")," function"),(0,l.yg)("li",{parentName:"ul"},"Fix ",(0,l.yg)("inlineCode",{parentName:"li"},"create()")," axios config"),(0,l.yg)("li",{parentName:"ul"},"Remove unused code"),(0,l.yg)("li",{parentName:"ul"},"Improve error handling"),(0,l.yg)("li",{parentName:"ul"},"Improve response handling")))),(0,l.yg)("h2",{id:"115"},"1.1.5"),(0,l.yg)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.yg)("h2",{id:"114"},"1.1.4"),(0,l.yg)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.yg)("h2",{id:"113"},"1.1.3"),(0,l.yg)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.yg)("h2",{id:"112"},"1.1.2"),(0,l.yg)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.yg)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.yg)("h2",{id:"111"},"1.1.1"),(0,l.yg)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,l.yg)("h2",{id:"110"},"1.1.0"),(0,l.yg)("h3",{id:"minor-changes-2"},"Minor Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"fee607e: Migrate FHIR, update package export")),(0,l.yg)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cb5d0ed: Updated to @openfn/simple-ast v0.4.1"),(0,l.yg)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,l.yg)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,l.yg)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))))}c.isMDXComponent=!0}}]);