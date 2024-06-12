"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33656],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(y,i(i({ref:n},d),{},{components:t})):a.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"beyonic developer readme",id:"beyonic-readme",keywords:["adaptor","readme","beyonic"]},i="beyonic Adaptor developer README.md",c={unversionedId:"packages/beyonic-readme",id:"packages/beyonic-readme",title:"beyonic developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/beyonic",source:"@site/adaptors/packages/beyonic-readme.md",sourceDirName:"packages",slug:"/packages/beyonic-readme",permalink:"/adaptors/packages/beyonic-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"beyonic developer readme",id:"beyonic-readme",keywords:["adaptor","readme","beyonic"]},sidebar:"adaptors",previous:{title:"beyonic changelog",permalink:"/adaptors/packages/beyonic-changelog"},next:{title:"bigquery@2.1.0",permalink:"/adaptors/packages/bigquery-docs"}},l={},p=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Payments API",id:"payments-api",level:2},{value:"<code>createPayment(...)</code>",id:"createpayment",level:4},{value:"Collection Requests API",id:"collection-requests-api",level:2},{value:"<code>createCollectionRequest(...)</code>",id:"createcollectionrequest",level:4},{value:"Contacts API",id:"contacts-api",level:2},{value:"<code>createContact(...)</code>",id:"createcontact",level:4},{value:"Development",id:"development",level:2}],d={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"beyonic-adaptor-developer-readmemd"},"beyonic Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/beyonic"},"https://github.com/OpenFn/adaptors/tree/main/packages/beyonic")),(0,r.yg)("h1",{id:"language-beyonic"},"Language Beyonic"),(0,r.yg)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.yg)("a",{parentName:"p",href:"http://apidocs.beyonic.com/"},"beyonic API"),"."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/beyonic-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h2",{id:"payments-api"},"Payments API"),(0,r.yg)("h4",{id:"createpayment"},(0,r.yg)("inlineCode",{parentName:"h4"},"createPayment(...)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"createPayment(\n  fields(\n    field('phonenumber', '+256773712831'),\n    field('first_name', 'Gideon'),\n    field('last_name', 'Zelalem'),\n    field('amount', 100.2),\n    field('currency', 'USD'),\n    field('account', 1),\n    field('description', 'Long-term contract for Arseal'),\n    field('payment_type', 'money'),\n    field('callback_url', 'https://my.website/payments/callback')\n  )\n);\n")),(0,r.yg)("h2",{id:"collection-requests-api"},"Collection Requests API"),(0,r.yg)("h4",{id:"createcollectionrequest"},(0,r.yg)("inlineCode",{parentName:"h4"},"createCollectionRequest(...)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"createCollectionRequest(\n  fields(\n    field('instructions', 'Send me some money, please!'),\n    field('phonenumber', '+256773712831'),\n    field('amount', 5.0),\n    field('currency', 'USD')\n  )\n);\n")),(0,r.yg)("h2",{id:"contacts-api"},"Contacts API"),(0,r.yg)("h4",{id:"createcontact"},(0,r.yg)("inlineCode",{parentName:"h4"},"createContact(...)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"createContact(\n  fields(\n    field('first_name', 'Granit'),\n    field('last_name', 'Xhaka'),\n    field('phone_number', '+256773712831'),\n    field('email', 'granit@arsenal.com')\n  )\n);\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);