"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[54374],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),c=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(g.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),s=r,y=m["".concat(g,".").concat(s)]||m[s]||u[s]||l;return t?n.createElement(y,o(o({ref:a},d),{},{components:t})):n.createElement(y,o({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=s;var p={};for(var g in a)hasOwnProperty.call(a,g)&&(p[g]=a[g]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},41530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const l={title:"maximo@0.5.0",id:"maximo-docs",keywords:["adaptor","maximo"]},o=void 0,p={unversionedId:"packages/maximo-docs",id:"packages/maximo-docs",title:"maximo@0.5.0",description:"fetch(params)",source:"@site/adaptors/packages/maximo-docs.md",sourceDirName:"packages",slug:"/packages/maximo-docs",permalink:"/adaptors/packages/maximo-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"maximo@0.5.0",id:"maximo-docs",keywords:["adaptor","maximo"]},sidebar:"adaptors",previous:{title:"mailgun developer readme",permalink:"/adaptors/packages/mailgun-readme"},next:{title:"Config for maximo",permalink:"/adaptors/packages/maximo-configuration-schema"}},g={},c=[{value:"Functions",id:"functions",level:2},{value:"fetch",id:"fetch",level:3},{value:"update",id:"update",level:3},{value:"update75",id:"update75",level:3}],d={toc:c},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#fetch"},"fetch(params)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#update"},"update(params)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#update75"},"update75(params)"))),(0,r.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"fetch"},"fetch"),(0,r.yg)("p",null,(0,r.yg)("code",null,"fetch(params) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request and POST it somewhere else"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to make the fetch")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetch({\n endpoint: 'maxrest/rest/os/mxinventory',\n query: {\n   ITEMNUM: '01226',\n   _format: 'json',\n },\n postUrl: 'https://www.openfn.org/inbox/not-real',\n});\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("p",null,(0,r.yg)("code",null,"update(params) \u21d2 Operation")),(0,r.yg)("p",null,"Make an update in Maximo 7.6 and beyond"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to make the update")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  update(params)\n)(state)\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"update75"},"update75"),(0,r.yg)("p",null,(0,r.yg)("code",null,"update75(params) \u21d2 Operation")),(0,r.yg)("p",null,"Make an upadte in Maximo 7.5"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"data to make the update")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  update75(params)\n)(state)\n")),(0,r.yg)("hr",null))}u.isMDXComponent=!0}}]);