"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32736],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={title:"progres developer readme",id:"progres-readme",keywords:["adaptor","readme","progres"]},p="progres Adaptor developer README.md",i={unversionedId:"packages/progres-readme",id:"packages/progres-readme",title:"progres developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/progres",source:"@site/adaptors/packages/progres-readme.md",sourceDirName:"packages",slug:"/packages/progres-readme",permalink:"/adaptors/packages/progres-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"progres developer readme",id:"progres-readme",keywords:["adaptor","readme","progres"]},sidebar:"adaptors",previous:{title:"progres changelog",permalink:"/adaptors/packages/progres-changelog"},next:{title:"rapidpro@1.0.10",permalink:"/adaptors/packages/rapidpro-docs"}},s={},l=[{value:"Design notes",id:"design-notes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Posting data to an endpoint with SSL cert authentication",id:"posting-data-to-an-endpoint-with-ssl-cert-authentication",level:3},{value:"Development",id:"development",level:2}],c={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"progres-adaptor-developer-readmemd"},"progres Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/progres"},"https://github.com/OpenFn/adaptors/tree/main/packages/progres")),(0,a.yg)("h1",{id:"language-progres"},"language-progres"),(0,a.yg)("p",null,"An OpenFn ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the UNHCR\nProGres v4 API."),(0,a.yg)("h2",{id:"design-notes"},"Design notes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Integration must run through UNHCR's DTP, a middleware layer that provides a\npublic API for UNHCR internal software."),(0,a.yg)("li",{parentName:"ul"},"An API token ",(0,a.yg)("em",{parentName:"li"},"and")," a self-signed certificate must be provided for\ncommunication with UNHCR's DTP."),(0,a.yg)("li",{parentName:"ul"},"Two-way sync must be possible between Primero and ProGres"),(0,a.yg)("li",{parentName:"ul"},"Teams still in discussion about whether the most common use-case will be a\ntimed sync or real-time/event-based sync.")),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/progres-docs"},"docs site")," for\nfull technical documentation."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View all the required and optional properties for ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/progres-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.yg)("h3",{id:"posting-data-to-an-endpoint-with-ssl-cert-authentication"},"Posting data to an endpoint with SSL cert authentication"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"postData({\n  url: urlDTP,\n  body: { a: 1 },\n  headers: {\n    'Subscription-Key': configuration['token'],\n  },\n  agentOptions: {\n    key,\n    cert,\n  },\n});\n")),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To just build the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}g.isMDXComponent=!0}}]);