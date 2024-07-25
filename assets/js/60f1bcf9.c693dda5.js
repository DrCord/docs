"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[85732],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,y=m["".concat(s,".").concat(u)]||m[u]||i[u]||r;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g[m]="string"==typeof e?e:o,l[1]=g;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51653:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>i,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const r={title:"kobotoolbox@2.4.1",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getDeploymentInfo","getForms","getSubmissions"]},l=void 0,g={unversionedId:"packages/kobotoolbox-docs",id:"packages/kobotoolbox-docs",title:"kobotoolbox@2.4.1",description:"getDeploymentInfo(params, callback)",source:"@site/adaptors/packages/kobotoolbox-docs.md",sourceDirName:"packages",slug:"/packages/kobotoolbox-docs",permalink:"/adaptors/packages/kobotoolbox-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"kobotoolbox@2.4.1",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getDeploymentInfo","getForms","getSubmissions"]},sidebar:"adaptors",previous:{title:"Kobo Toolbox",permalink:"/adaptors/kobotoolbox"},next:{title:"Config for kobotoolbox",permalink:"/adaptors/packages/kobotoolbox-configuration-schema"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"getDeploymentInfo",id:"getdeploymentinfo",level:3},{value:"getForms",id:"getforms",level:3},{value:"getSubmissions",id:"getsubmissions",level:3}],c={toc:p},m="wrapper";function i(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("dl",null,(0,o.yg)("dt",null,(0,o.yg)("a",{href:"#getdeploymentinfo"},"getDeploymentInfo(params, callback)")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"#getforms"},"getForms(params, callback)")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"#getsubmissions"},"getSubmissions(params, callback)"))),(0,o.yg)("p",null,"This adaptor exports the following from common:"),(0,o.yg)("dl",null,(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#group"},"group()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,o.yg)("dt",null,(0,o.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,o.yg)("h2",{id:"functions"},"Functions"),(0,o.yg)("h3",{id:"getdeploymentinfo"},"getDeploymentInfo"),(0,o.yg)("p",null,(0,o.yg)("code",null,"getDeploymentInfo(params, callback) \u21d2 Operation")),(0,o.yg)("p",null,"Get deployment information for a specific form"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Param"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"object")),(0,o.yg)("td",{parentName:"tr",align:null},"Form Id and data to make the fetch or filter")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"callback"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"function")),(0,o.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form deployment information")))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"getDeploymentInfo({formId: 'aXecHjmbATuF6iGFmvBLBX'}, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"getforms"},"getForms"),(0,o.yg)("p",null,(0,o.yg)("code",null,"getForms(params, callback) \u21d2 Operation")),(0,o.yg)("p",null,"Make a request to get the list of forms"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Param"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"object")),(0,o.yg)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"callback"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"function")),(0,o.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form list")))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"getForms({}, state => {\n   console.log(state.data);\n   return state;\n});\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"getsubmissions"},"getSubmissions"),(0,o.yg)("p",null,(0,o.yg)("code",null,"getSubmissions(params, callback) \u21d2 Operation")),(0,o.yg)("p",null,"Get submissions for a specific form"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Param"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"object")),(0,o.yg)("td",{parentName:"tr",align:null},"Form Id and data to make the fetch or filter")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"callback"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("code",null,"function")),(0,o.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function to execute after fetching form submissions")))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"getSubmissions({formId: 'aXecHjmbATuF6iGFmvBLBX'}, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,o.yg)("hr",null))}i.isMDXComponent=!0}}]);