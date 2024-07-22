"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6308],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>s});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var y=n.createContext({}),p=function(e){var a=n.useContext(y),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(y.Provider,{value:a},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,s=c["".concat(y,".").concat(d)]||c[d]||i[d]||r;return t?n.createElement(s,g(g({ref:a},u),{},{components:t})):n.createElement(s,g({ref:a},u))}));function s(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=d;var o={};for(var y in a)hasOwnProperty.call(a,y)&&(o[y]=a[y]);o.originalType=e,o[c]="string"==typeof e?e:l,g[1]=o;for(var p=2;p<r;p++)g[p]=t[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47255:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(58168),l=(t(96540),t(15680));const r={title:"godata@3.5.0",id:"godata-docs",keywords:["adaptor","godata","getCase","getContact","getLocation","getOutbreak","getReferenceData","listCases","listContacts","listLocations","listOutbreaks","listReferenceData","upsertCase","upsertContact","upsertLocation","upsertOutbreak","upsertReferenceData"]},g=void 0,o={unversionedId:"packages/godata-docs",id:"packages/godata-docs",title:"godata@3.5.0",description:"getCase(id, query, callback)",source:"@site/adaptors/packages/godata-docs.md",sourceDirName:"packages",slug:"/packages/godata-docs",permalink:"/adaptors/packages/godata-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"godata@3.5.0",id:"godata-docs",keywords:["adaptor","godata","getCase","getContact","getLocation","getOutbreak","getReferenceData","listCases","listContacts","listLocations","listOutbreaks","listReferenceData","upsertCase","upsertContact","upsertLocation","upsertOutbreak","upsertReferenceData"]},sidebar:"adaptors",previous:{title:"Go.Data",permalink:"/adaptors/godata"},next:{title:"Config for godata",permalink:"/adaptors/packages/godata-configuration-schema"}},y={},p=[{value:"Functions",id:"functions",level:2},{value:"getCase",id:"getcase",level:3},{value:"getContact",id:"getcontact",level:3},{value:"getLocation",id:"getlocation",level:3},{value:"getOutbreak",id:"getoutbreak",level:3},{value:"getReferenceData",id:"getreferencedata",level:3},{value:"listCases",id:"listcases",level:3},{value:"listContacts",id:"listcontacts",level:3},{value:"listLocations",id:"listlocations",level:3},{value:"listOutbreaks",id:"listoutbreaks",level:3},{value:"listReferenceData",id:"listreferencedata",level:3},{value:"upsertCase",id:"upsertcase",level:3},{value:"upsertContact",id:"upsertcontact",level:3},{value:"upsertLocation",id:"upsertlocation",level:3},{value:"upsertOutbreak",id:"upsertoutbreak",level:3},{value:"upsertReferenceData",id:"upsertreferencedata",level:3}],u={toc:p},c="wrapper";function i(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getcase"},"getCase(id, query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getcontact"},"getContact(id, query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getlocation"},"getLocation(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getoutbreak"},"getOutbreak(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getreferencedata"},"getReferenceData(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listcases"},"listCases(id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listcontacts"},"listContacts(id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listlocations"},"listLocations(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listoutbreaks"},"listOutbreaks(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listreferencedata"},"listReferenceData(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertcase"},"upsertCase(id, externalId, goDataCase, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertcontact"},"upsertContact(id, externalId, goDataContact, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertlocation"},"upsertLocation(externalId, goDataLocation, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertoutbreak"},"upsertOutbreak(outbreak, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertreferencedata"},"upsertReferenceData(externalId, goDataReferenceData, callback)"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"getcase"},"getCase"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getCase(id, query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get one or multiple cases within an outbreak from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getCase(\n   '3b55-cdf4',\n   { 'where.relationship': { active: true }, where: { firstName: 'Luca'} },\n   state => {\n     console.log(state);\n     return state;\n   }\n);\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getcontact"},"getContact"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getContact(id, query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get one or multiple contacts within an outbreak from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getContact("343d-dc3e", {"where":{"firstName": "Luca"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getlocation"},"getLocation"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getLocation(query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get one or multiple locations from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getLocation({"where":{"name": "30 DE OCTUBRE"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getoutbreak"},"getOutbreak"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getOutbreak(query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get one or multiple outbreaks from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getOutbreak({"where":{"name": "Outbreak demo"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getreferencedata"},"getReferenceData"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getReferenceData(query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get one or multiple reference data from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getReferenceData({"where":{"categoryId": "LNG_REFERENCE_DATA_CATEGORY_CENTRE_NAME"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"listcases"},"listCases"),(0,l.yg)("p",null,(0,l.yg)("code",null,"listCases(id, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Fetch the list of cases within a particular outbreak using its ID."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'listCases("343d-dc3e", state => {\n   console.log(state);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"listcontacts"},"listContacts"),(0,l.yg)("p",null,(0,l.yg)("code",null,"listContacts(id, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Fetch the list of contacts within a particular outbreak using its ID."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'listContacts("343d-dc3e", // Outbreak Id\n   state => {\n      console.log(state);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"listlocations"},"listLocations"),(0,l.yg)("p",null,(0,l.yg)("code",null,"listLocations(callback) \u21d2 Operation")),(0,l.yg)("p",null,"Fetch the list of locations"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listLocations(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"listoutbreaks"},"listOutbreaks"),(0,l.yg)("p",null,(0,l.yg)("code",null,"listOutbreaks(callback) \u21d2 Operation")),(0,l.yg)("p",null,"Fetch the list of outbreaks"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listOutbreaks(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"listreferencedata"},"listReferenceData"),(0,l.yg)("p",null,(0,l.yg)("code",null,"listReferenceData(callback) \u21d2 Operation")),(0,l.yg)("p",null,"Fetch the list of reference data"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listReferenceData(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertcase"},"upsertCase"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertCase(id, externalId, goDataCase, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert case to godata using an external id to mach a specific record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataCase"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertCase(\"4dce-3eedce3-rd33\", 'visualId',\n   data: state => {\n     const patient = state.data.body;\n      return {\n        firstName: patient.Patient_name.split(' ')[0],\n        lastName: patient.Patient_name.split(' ')[1],\n        visualId: patient.Case_ID,\n        'age:years': patient.Age_in_year,\n        gender: patient.Sex,\n      };\n })\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertcontact"},"upsertContact"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertContact(id, externalId, goDataContact, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert contact to godata using an external id to match a specific record."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataContact"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertContact(\"4dce-3eedce3-rd33\", 'visualId',\n   {\n     firstName: 'Luca',\n     gender: 'male',\n     'age:years': '20'\n     ...\n   }\n )\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertlocation"},"upsertLocation"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertLocation(externalId, goDataLocation, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert location to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataLocation"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some location data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertLocation('name', {...})\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertoutbreak"},"upsertOutbreak"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertOutbreak(outbreak, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert outbreak to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"outbreak"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an externalId and some outbreak data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsertOutbreak({externalId: "3dec33-ede3", data: {...}})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertreferencedata"},"upsertReferenceData"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertReferenceData(externalId, goDataReferenceData, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert reference data to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataReferenceData"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some reference data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertReferenceData('id', {...})\n")),(0,l.yg)("hr",null))}i.isMDXComponent=!0}}]);