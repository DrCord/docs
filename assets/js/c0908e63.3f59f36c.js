"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[35477],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"Config for openhim",id:"openhim-configuration-schema",keywords:["adaptor","configuration-schema","openhim"]},i=void 0,p={unversionedId:"packages/openhim-configuration-schema",id:"packages/openhim-configuration-schema",title:"Config for openhim",description:"Jobs that use the openhim adaptor may require authentication. A",source:"@site/adaptors/packages/openhim-configuration-schema.md",sourceDirName:"packages",slug:"/packages/openhim-configuration-schema",permalink:"/adaptors/packages/openhim-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for openhim",id:"openhim-configuration-schema",keywords:["adaptor","configuration-schema","openhim"]},sidebar:"adaptors",previous:{title:"openhim@0.1.3",permalink:"/adaptors/packages/openhim-docs"},next:{title:"\ud83d\udcdc Create encounter in OpenHIM",permalink:"/adaptors/library/jobs/auto/CommCare-FHIR"}},s={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"openhim"),' adaptor may require authentication. A\n"credential" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"openhim")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"  Paste this into the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiUrl": "http://openhim.com/api",\n  "username": "admin@openhim.org",\n  "password": "@super(!)Secretpass"\n}\n')),(0,o.kt)("h2",{id:"full-schema"},"Full Schema"),(0,o.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "apiUrl": {\n          "title": "API URL",\n          "type": "string",\n          "description": "The OpenHIM API url",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "http://openhim.com/api"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "The username to log in to OpenHIM",\n          "minLength": 1,\n          "examples": [\n              "admin@openhim.org"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "The password to log in to OpenHIM",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Secretpass"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "apiUrl"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);