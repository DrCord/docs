"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[30650],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),i=y(a),u=l,m=i["".concat(p,".").concat(u)]||i[u]||s[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[i]="string"==typeof e?e:l,o[1]=g;for(var y=2;y<r;y++)o[y]=a[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>g,toc:()=>y});var n=a(58168),l=(a(96540),a(15680));const r={title:"openlmis@1.0.0",id:"openlmis-docs",keywords:["adaptor","openlmis","get","post","put","request"]},o=void 0,g={unversionedId:"packages/openlmis-docs",id:"packages/openlmis-docs",title:"openlmis@1.0.0",description:"get(path, options, [callback])",source:"@site/adaptors/packages/openlmis-docs.md",sourceDirName:"packages",slug:"/packages/openlmis-docs",permalink:"/adaptors/packages/openlmis-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openlmis@1.0.0",id:"openlmis-docs",keywords:["adaptor","openlmis","get","post","put","request"]},sidebar:"adaptors",previous:{title:"openimis developer readme",permalink:"/adaptors/packages/openimis-readme"},next:{title:"Config for openlmis",permalink:"/adaptors/packages/openlmis-configuration-schema"}},p={},y=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:3},{value:"post",id:"post",level:3},{value:"put",id:"put",level:3},{value:"request",id:"request",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"RequestOptions",id:"requestoptions",level:3}],d={toc:y},i="wrapper";function s(e){let{components:t,...a}=e;return(0,l.yg)(i,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#get"},"get(path, options, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#post"},"post(path, body, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#put"},"put(path, body, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#request"},"request(method, path, body, options, [callback])"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"get"},"get"),(0,l.yg)("p",null,(0,l.yg)("code",null,"get(path, options, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a GET request in OpenLMIS"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource (relative to the base URL defined in configuration)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request options")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get all supplyLines"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'get("/supplyLines");\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"post"},"post"),(0,l.yg)("p",null,(0,l.yg)("code",null,"post(path, body, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a POST request in OpenLMIS"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource (relative to the base URL defined in configuration)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"body"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which will be attached to the POST body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Creates new program"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'post("/programs", { name: "Bukayo", code: "abc" });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"put"},"put"),(0,l.yg)("p",null,(0,l.yg)("code",null,"put(path, body, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a PUT request in OpenLMIS"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource (relative to the base URL defined in configuration)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"body"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which will be attached to the PUT body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Update existing program"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'put("/programs/123", { name: "DigTalent", code: "123" });\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"request"},"request"),(0,l.yg)("p",null,(0,l.yg)("code",null,"request(method, path, body, options, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a general HTTP request in OpenLMIS"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"method"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"HTTP method to use")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource (relative to the base URL defined in configuration)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"body"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which will be attached to the POST body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request options")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'request("POST", "/programs", { name: "WSH", code: "123" });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"interfaces"},"Interfaces"),(0,l.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,l.yg)("p",null,"Options provided to the HTTP request"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"body"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"body data to append to the request.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"headers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object of headers to append to the request.")))),(0,l.yg)("hr",null))}s.isMDXComponent=!0}}]);