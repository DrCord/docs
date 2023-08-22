"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[89007],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"Config for mongodb",id:"mongodb-configuration-schema",keywords:["adaptor","configuration-schema","mongodb"]},i=void 0,s={unversionedId:"packages/mongodb-configuration-schema",id:"packages/mongodb-configuration-schema",title:"Config for mongodb",description:"Jobs that use the mongodb adaptor may require authentication. A",source:"@site/adaptors/packages/mongodb-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mongodb-configuration-schema",permalink:"/fr/adaptors/packages/mongodb-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for mongodb",id:"mongodb-configuration-schema",keywords:["adaptor","configuration-schema","mongodb"]},sidebar:"adaptors",previous:{title:"mongodb@1.1.1",permalink:"/fr/adaptors/packages/mongodb-docs"},next:{title:"mongodb changelog",permalink:"/fr/adaptors/packages/mongodb-changelog"}},c={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jobs that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb"),' adaptor may require authentication. A\n"credential" for the ',(0,r.kt)("inlineCode",{parentName:"p"},"mongodb")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.kt)("p",null,"  Paste this into the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clusterHostname": "yourCluster-xxxyzzz.mongodb.net",\n  "username": "admin",\n  "password": "@secret(!)Pass"\n}\n')),(0,r.kt)("h2",{id:"full-schema"},"Full Schema"),(0,r.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "clusterHostname": {\n          "title": "Cluster Hostname",\n          "type": "string",\n          "description": "Your MongoDB cluster hostname",\n          "format": "hostname",\n          "minLength": 1,\n          "examples": [\n              "yourCluster-xxxyzzz.mongodb.net"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Your MongoDB instance username",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Your MongoDB instance password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@secret(!)Pass"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "clusterHostname",\n      "username",\n      "password"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);