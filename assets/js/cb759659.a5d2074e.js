"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76023],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>i});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=l,i=u["".concat(p,".").concat(c)]||u[c]||y[c]||r;return t?n.createElement(i,g(g({ref:a},d),{},{components:t})):n.createElement(i,g({ref:a},d))}));function i(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:l,g[1]=o;for(var s=2;s<r;s++)g[s]=t[s];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3004:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(58168),l=(t(96540),t(15680));const r={title:"googlesheets@2.5.1",id:"googlesheets-docs",keywords:["adaptor","googlesheets","appendValues","batchUpdateValues","getValues"]},g=void 0,o={unversionedId:"packages/googlesheets-docs",id:"packages/googlesheets-docs",title:"googlesheets@2.5.1",description:"appendValues(params, callback)",source:"@site/adaptors/packages/googlesheets-docs.md",sourceDirName:"packages",slug:"/packages/googlesheets-docs",permalink:"/adaptors/packages/googlesheets-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"googlesheets@2.5.1",id:"googlesheets-docs",keywords:["adaptor","googlesheets","appendValues","batchUpdateValues","getValues"]},sidebar:"adaptors",previous:{title:"Google Forms/Google Sheets",permalink:"/adaptors/googlesheets"},next:{title:"Config for googlesheets",permalink:"/adaptors/packages/googlesheets-configuration-schema"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"appendValues",id:"appendvalues",level:3},{value:"batchUpdateValues",id:"batchupdatevalues",level:3},{value:"getValues",id:"getvalues",level:3}],d={toc:s},u="wrapper";function y(e){let{components:a,...t}=e;return(0,l.yg)(u,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#appendvalues"},"appendValues(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#batchupdatevalues"},"batchUpdateValues(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getvalues"},"getValues(spreadsheetId, range, callback)"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"appendvalues"},"appendValues"),(0,l.yg)("p",null,(0,l.yg)("code",null,"appendValues(params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Add an array of rows to the spreadsheet.\n",(0,l.yg)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/samples/writing#append_values"},"https://developers.google.com/sheets/api/samples/writing#append_values")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data object to add to the spreadsheet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.spreadsheetId]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The spreadsheet ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.range]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The range of values to update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.values]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"A 2d array of values to update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos',\n  range: 'Sheet1!A1:E1',\n  values: [\n    ['From expression', '$15', '2', '3/15/2016'],\n    ['Really now!', '$100', '1', '3/20/2016'],\n  ],\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"batchupdatevalues"},"batchUpdateValues"),(0,l.yg)("p",null,(0,l.yg)("code",null,"batchUpdateValues(params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Batch update values in a Spreadsheet."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"Operation")," - spreadsheet information  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data object to add to the spreadsheet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.spreadsheetId]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The spreadsheet ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.range]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The range of values to update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.valueInputOption]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Value update options. Defaults to 'USER_ENTERED'")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[params.values]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"A 2d array of values to update.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"batchUpdateValues({\n  spreadsheetId: '1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos',\n  range: 'Sheet1!A1:E1',\n  values: [\n    ['From expression', '$15', '2', '3/15/2016'],\n    ['Really now!', '$100', '1', '3/20/2016'],\n  ],\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getvalues"},"getValues"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getValues(spreadsheetId, range, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Gets cell values from a Spreadsheet."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"Operation")," - spreadsheet information  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"spreadsheetId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The spreadsheet ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The sheet range.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getValues('1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos','Sheet1!A1:E1')\n")),(0,l.yg)("hr",null))}y.isMDXComponent=!0}}]);