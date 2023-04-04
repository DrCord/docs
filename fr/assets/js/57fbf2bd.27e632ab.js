"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Config for twilio",id:"twilio-configuration-schema",keywords:["adaptor","configuration-schema","twilio"]},i=void 0,c={unversionedId:"packages/twilio-configuration-schema",id:"packages/twilio-configuration-schema",title:"Config for twilio",description:"Jobs that use the twilio adaptor may require authentication. A",source:"@site/adaptors/packages/twilio-configuration-schema.md",sourceDirName:"packages",slug:"/packages/twilio-configuration-schema",permalink:"/fr/adaptors/packages/twilio-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for twilio",id:"twilio-configuration-schema",keywords:["adaptor","configuration-schema","twilio"]},sidebar:"adaptors",previous:{title:"twilio@0.3.3",permalink:"/fr/adaptors/packages/twilio-docs"},next:{title:"twilio changelog",permalink:"/fr/adaptors/packages/twilio-changelog"}},l={},u=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"twilio"),' adaptor may require authentication. A\n"credential" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"twilio")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"  Paste this into the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accountSid": "account_id",\n  "authToken": "evenMoreSecret"\n}\n')),(0,o.kt)("h2",{id:"full-schema"},"Full Schema"),(0,o.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "accountSid": {\n          "title": "Account ID",\n          "type": "string",\n          "description": "Your Twilio account id",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "account_id"\n          ]\n      },\n      "authToken": {\n          "title": "Auth Token",\n          "type": "string",\n          "description": "Your Twilio auth token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "evenMoreSecret"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "accountSid",\n      "authToken"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);