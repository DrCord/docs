"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[81938],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"http developer readme",id:"http-readme",keywords:["adaptor","readme","http"]},p="Developer README for the http adaptor",s={unversionedId:"packages/http-readme",id:"packages/http-readme",title:"http developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/http",source:"@site/adaptors/packages/http-readme.md",sourceDirName:"packages",slug:"/packages/http-readme",permalink:"/adaptors/packages/http-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"http developer readme",id:"http-readme",keywords:["adaptor","readme","http"]},sidebar:"adaptors",previous:{title:"http changelog",permalink:"/adaptors/packages/http-changelog"},next:{title:"khanacademy@0.3.1",permalink:"/adaptors/packages/khanacademy-docs"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"Get data",id:"get-data",level:3},{value:"Post existing data",id:"post-existing-data",level:3},{value:"Update existing data with PUT or PATCH",id:"update-existing-data-with-put-or-patch",level:3},{value:"Delete data",id:"delete-data",level:3},{value:"Parse XML",id:"parse-xml",level:3},{value:"Parse CSV",id:"parse-csv",level:3},{value:"Sample parse local CSV file",id:"sample-parse-local-csv-file",level:3},{value:"Development",id:"development",level:2}],d={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-http-adaptor"},"Developer README for the http adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/http"},"https://github.com/OpenFn/adaptors/tree/main/packages/http")),(0,r.kt)("h1",{id:"language-http"},"Language HTTP"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to make HTTP calls."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "username": "<name@email>",\n  "password": "<supersecret>",\n  "baseUrl": "https://instance_name.surveycto.com",\n}\n')),(0,r.kt)("h3",{id:"get-data"},"Get data"),(0,r.kt)("p",null,"This helper function allows the use of a get method to fetch data. You can\nspecify a query string for filter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get(\n  '/myendpoint',\n  {\n    query: { foo: 'bar', a: 1 },\n    headers: { 'content-type': 'application/json' },\n    authentication: { username: 'taylor', password: 'somethingsecret' },\n  },\n  state => {\n    return state;\n  }\n);\n")),(0,r.kt)("h3",{id:"post-existing-data"},"Post existing data"),(0,r.kt)("p",null,"Send some data to an existing endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"post('/endpoint', {\n  body: state => {\n    return {\n      field_1: 'some_data',\n      field_2: 'some_more_data',\n      field_id: dataValue('Some.Json.Object.Id')(state),\n    };\n  },\n  headers: {\n    Authorization: 'AUTH_KEY',\n    'Content-Type': 'application/json',\n  },\n});\n")),(0,r.kt)("h3",{id:"update-existing-data-with-put-or-patch"},"Update existing data with PUT or PATCH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"put(\n  '/myendpoint',\n  {\n    body: { firstname: 'taylor', lastname: 'downs' },\n    headers: { 'content-type': 'application/json' },\n    authentication: { username: 'user', password: 'pass' },\n  },\n  state => {\n    return state;\n  }\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"patch(\n  '/myendpoint',\n  {\n    body: { firstname: 'taylor', lastname: 'downs' },\n    headers: { 'content-type': 'application/json' },\n    authentication: { username: 'user', password: 'pass' },\n  },\n  state => {\n    return state;\n  }\n);\n")),(0,r.kt)("h3",{id:"delete-data"},"Delete data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"del(\n  '/myendpoint',\n  {\n    query: { id: 'someId' },\n    headers: { 'content-type': 'application/json' },\n    authentication: { username: 'user', password: 'pass' },\n  },\n  state => {\n    return state;\n  }\n);\n")),(0,r.kt)("h3",{id:"parse-xml"},"Parse XML"),(0,r.kt)("p",null,"This function allows you to parse some xml data. A callback function can be use\nto store in a table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"parseXML(body, function ($) {\n  return $('table[class=your_table]').parsetable(true, true, true);\n});\n")),(0,r.kt)("h3",{id:"parse-csv"},"Parse CSV"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"parseCSV('someData.csv', {\n  quoteChar: '\"',\n  header: false,\n});\n")),(0,r.kt)("h3",{id:"sample-parse-local-csv-file"},"Sample parse local CSV file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"parseCSV('PatientsJan2009.csv', {\n  quoteChar: '\"',\n  header: false,\n  columns: true,\n  skip_empty_lines: true,\n  trim: true,\n  bom: true,\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the repo, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch"),"."),(0,r.kt)("p",null,"To build the docs for this repo, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build:docs"),"."))}u.isMDXComponent=!0}}]);