"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[55673],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=y(e,["components","mdxType","originalType","parentName"]),d=o(a),s=l,c=d["".concat(p,".").concat(s)]||d[s]||i[s]||r;return a?n.createElement(c,g(g({ref:t},u),{},{components:a})):n.createElement(c,g({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=s;var y={};for(var p in t)hasOwnProperty.call(t,p)&&(y[p]=t[p]);y.originalType=e,y[d]="string"==typeof e?e:l,g[1]=y;for(var o=2;o<r;o++)g[o]=a[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},79812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>i,frontMatter:()=>r,metadata:()=>y,toc:()=>o});var n=a(58168),l=(a(96540),a(15680));const r={title:"salesforce@4.6.5",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","query","reference","relationship","retrieve","toUTF8","update","upsert","upsertIf"]},g=void 0,y={unversionedId:"packages/salesforce-docs",id:"packages/salesforce-docs",title:"salesforce@4.6.5",description:"Functions",source:"@site/adaptors/packages/salesforce-docs.md",sourceDirName:"packages",slug:"/packages/salesforce-docs",permalink:"/adaptors/packages/salesforce-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"salesforce@4.6.5",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","query","reference","relationship","retrieve","toUTF8","update","upsert","upsertIf"]},sidebar:"adaptors",previous:{title:"Salesforce",permalink:"/adaptors/salesforce"},next:{title:"Config for salesforce",permalink:"/adaptors/packages/salesforce-configuration-schema"}},p={},o=[{value:"Functions",id:"functions",level:2},{value:"bulk",id:"bulk",level:2},{value:"bulkQuery",id:"bulkquery",level:2},{value:"cleanupState",id:"cleanupstate",level:2},{value:"create",id:"create",level:2},{value:"createIf",id:"createif",level:2},{value:"describe",id:"describe",level:2},{value:"describeAll",id:"describeall",level:2},{value:"destroy",id:"destroy",level:2},{value:"execute",id:"execute",level:2},{value:"query",id:"query",level:2},{value:"reference",id:"reference",level:2},{value:"relationship",id:"relationship",level:2},{value:"request",id:"request",level:2},{value:"retrieve",id:"retrieve",level:2},{value:"steps",id:"steps",level:2},{value:"toUTF8",id:"toutf8",level:2},{value:"update",id:"update",level:2},{value:"upsert",id:"upsert",level:2},{value:"upsertIf",id:"upsertif",level:2}],u={toc:o},d="wrapper";function i(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#bulk"},"bulk(sObject, operation, options, records)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#bulkquery"},"bulkQuery(qs, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#cleanupstate"},"cleanupState(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#create"},"create(sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createif"},"createIf(logical, sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describe"},"describe(sObject)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describeall"},"describeAll()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#destroy"},"destroy(sObject, attrs, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#execute"},"execute(operations)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#query"},"query(qs, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#reference"},"reference(position)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#relationship"},"relationship(relationshipName, externalId, dataSource)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#request"},"request(url, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#retrieve"},"retrieve(sObject, id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#steps"},"steps()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#toutf8"},"toUTF8(input)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#update"},"update(sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(sObject, externalId, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertif"},"upsertIf(logical, sObject, externalId, attrs)"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#beta"},"beta()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#chunk"},"chunk()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#expandreferences"},"expandReferences()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#humanproper"},"humanProper()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#index"},"index()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#join"},"join()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#jsonvalue"},"jsonValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#map"},"map()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#referencepath"},"referencePath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#scrubemojis"},"scrubEmojis()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#source"},"source()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#toarray"},"toArray()"))),(0,l.yg)("h2",{id:"bulk"},"bulk"),(0,l.yg)("p",null,"bulk(sObject, operation, options, records) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create and execute a bulk job."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"operation"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"The bulk operation to be performed")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"records"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"an array of records, or a function which returns an array.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"bulk('Patient__c', 'insert', { failOnError: true, pollInterval: 3000, pollTimeout: 240000 }, state => {\n  return state.data.someArray.map(x => {\n    return { 'Age__c': x.age, 'Name': x.name }\n  })\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"bulkquery"},"bulkQuery"),(0,l.yg)("p",null,"bulkQuery(qs, options, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Execute an SOQL Bulk Query.\nThis function uses bulk query to efficiently query large data sets and reduce the number of API requests.\n",(0,l.yg)("inlineCode",{parentName:"p"},"bulkQuery()")," uses ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/3y9phlc"},"Bulk API v.2.0")," which is available in API version 41.0 and later.\nThis API is subject to ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/4b6kn6z"},"rate limits"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"qs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A query string.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollTimeout]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"90000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling timeout in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollInterval]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"3000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling interval in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(The results will be available on ","`","state.data","`",")"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"bulkQuery(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"bulkQuery(\n  (state) =>\n    `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`,\n  { pollTimeout: 10000, pollInterval: 6000 }\n);\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"cleanupstate"},"cleanupState"),(0,l.yg)("p",null,"cleanupState(state) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Removes unserializable keys from the state."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State"))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"create"},"create"),(0,l.yg)("p",null,"create(sObject, attrs) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a new object."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'create(\'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createif"},"createIf"),(0,l.yg)("p",null,"createIf(logical, sObject, attrs) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a new object if conditions are met."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createIf(true, \'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"describe"},"describe"),(0,l.yg)("p",null,"describe(sObject) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Outputs basic information about an sObject to ",(0,l.yg)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describe('obj_name')\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"describeall"},"describeAll"),(0,l.yg)("p",null,"describeAll() \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Outputs basic information about available sObjects."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describeAll()\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"destroy"},"destroy"),(0,l.yg)("p",null,"destroy(sObject, attrs, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Delete records of an object."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Array of IDs of records to delete.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Options for the destroy delete operation.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"destroy('obj_name', [\n '0060n00000JQWHYAA5',\n '0090n00000JQEWHYAA5\n], { failOnError: true })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"execute"},"execute"),(0,l.yg)("p",null,"execute(operations) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Executes an operation."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"operations"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Operation")),(0,l.yg)("td",{parentName:"tr",align:null},"Operations")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"query"},"query"),(0,l.yg)("p",null,"query(qs, options, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Execute an SOQL query.\nNote that in an event of a query error,\nerror logs will be printed but the operation will not throw the error."),(0,l.yg)("p",null,"The Salesforce query API is subject to rate limits, ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/3W9zyaQ"},"See for more details"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"qs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A query string. Must be less than ",(0,l.yg)("inlineCode",{parentName:"td"},"4000")," characters in WHERE clause")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.autoFetch]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Fetch next records if available.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"query(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Query more records if next records are available)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"query(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`, { autoFetch: true });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"reference"},"reference"),(0,l.yg)("p",null,"reference(position) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Get a reference ID by an index."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"position"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"number")),(0,l.yg)("td",{parentName:"tr",align:null},"Position for references array.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"reference(0)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"relationship"},"relationship"),(0,l.yg)("p",null,"relationship(relationshipName, externalId, dataSource) \u21d2 ",(0,l.yg)("code",null,"object")),(0,l.yg)("p",null,"Adds a lookup relation or 'dome insert' to a record."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"relationshipName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"__r")," relationship field on the record.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Salesforce ExternalID field.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dataSource"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"resolvable source.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'Data Sourced Value:\n relationship("relationship_name__r", "externalID on related object", dataSource("path"))\nFixed Value:\n relationship("relationship_name__r", "externalID on related object", "hello world")\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"request"},"request"),(0,l.yg)("p",null,"request(url, options, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Send a HTTP request using connected session information."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Relative or absolute URL to request from")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Request options")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.method]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"GET")),(0,l.yg)("td",{parentName:"tr",align:null},"HTTP method to use. Defaults to GET")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.headers]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Object of request headers")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.json]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A JSON Object request body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.body]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"HTTP body (in POST/PUT/PATCH methods)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the request is complete")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"request('/actions/custom/flow/POC_OpenFN_Test_Flow', {\n  method: 'POST',\n  json: { inputs: [{}] },\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"retrieve"},"retrieve"),(0,l.yg)("p",null,"retrieve(sObject, id, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Retrieves a Salesforce sObject(s)."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"The sObject to retrieve")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"The id of the record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"retrieve('ContentVersion', '0684K0000020Au7QAE/VersionData');\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"steps"},"steps"),(0,l.yg)("p",null,"steps() \u21d2 ",(0,l.yg)("code",null,"Array")),(0,l.yg)("p",null,"Flattens an array of operations."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"steps(\n  createIf(params),\n  update(params)\n)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"toutf8"},"toUTF8"),(0,l.yg)("p",null,"toUTF8(input) \u21d2 ",(0,l.yg)("code",null,"String")),(0,l.yg)("p",null,"Transliterates unicode characters to their best ASCII representation"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"String")," - - ASCII representation of input string  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"input"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string with unicode characters")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'fn((state) => {\n  const s = toUTF8("\u03ac\u03bd\u03b8\u03c1\u03c9\u03c0\u03bf\u03b9");\n  console.log(s); // anthropoi\n  return state;\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"update"},"update"),(0,l.yg)("p",null,"update(sObject, attrs) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Update an object."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'update(\'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsert"},"upsert"),(0,l.yg)("p",null,"upsert(sObject, externalId, attrs) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert an object."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsert('obj_name', 'ext_id', {\n  attr1: \"foo\",\n  attr2: \"bar\"\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertif"},"upsertIf"),(0,l.yg)("p",null,"upsertIf(logical, sObject, externalId, attrs) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert if conditions are met."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertIf(true, 'obj_name', 'ext_id', {\n  attr1: \"foo\",\n  attr2: \"bar\"\n})\n")),(0,l.yg)("hr",null))}i.isMDXComponent=!0}}]);