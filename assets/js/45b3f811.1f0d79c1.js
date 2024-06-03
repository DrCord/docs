"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[29891],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config for salesforce",id:"salesforce-configuration-schema",keywords:["adaptor","configuration-schema","salesforce"]},s=void 0,i={unversionedId:"packages/salesforce-configuration-schema",id:"packages/salesforce-configuration-schema",title:"Config for salesforce",description:"Jobs that use the salesforce adaptor may require authentication. A",source:"@site/adaptors/packages/salesforce-configuration-schema.md",sourceDirName:"packages",slug:"/packages/salesforce-configuration-schema",permalink:"/adaptors/packages/salesforce-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for salesforce",id:"salesforce-configuration-schema",keywords:["adaptor","configuration-schema","salesforce"]},sidebar:"adaptors",previous:{title:"salesforce@4.6.10",permalink:"/adaptors/packages/salesforce-docs"},next:{title:"\ud83d\udcdc Pre-processing data",permalink:"/adaptors/library/jobs/auto/alter-state-before-operations"}},c={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"salesforce"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"salesforce")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "loginUrl": "https://somesalesforcelogin.url",\n  "username": "someusername",\n  "password": "@super(!)SecretPass"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "loginUrl": {\n          "title": "Login URL",\n          "type": "string",\n          "description": "The Salesforce instance login URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://somesalesforcelogin.url"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "The username to log in the Salesforce instance",\n          "minLength": 1,\n          "examples": [\n              "someusername"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "The password to log in the Salesforce instance",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)SecretPass"\n          ]\n      },\n      "securityToken": {\n          "title": "Security Token",\n          "type": "string",\n          "description": "The security token to access the Salesforce instance",\n          "minLength": 1,\n          "examples": [\n              "salesforcesecuritytoken"\n          ]\n      },\n      "apiVersion": {\n          "title": "API Version",\n          "type": "string",\n          "placeholder": "52.0",\n          "description": "Salesforce API Version",\n          "minLength": 1,\n          "examples": [\n              "59.0"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "loginUrl",\n      "username",\n      "password"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);