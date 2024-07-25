"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[80218],{15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),g=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=g(a),u=n,y=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(y,l(l({ref:t},i),{},{components:a})):r.createElement(y,l({ref:t},i))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var g=2;g<o;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const o={title:"googlehealthcare@1.1.0",id:"googlehealthcare-docs",keywords:["adaptor","googlehealthcare","createFhirResource"]},l=void 0,c={unversionedId:"packages/googlehealthcare-docs",id:"packages/googlehealthcare-docs",title:"googlehealthcare@1.1.0",description:"createFhirResource([fhirStore], resource, callback)",source:"@site/adaptors/packages/googlehealthcare-docs.md",sourceDirName:"packages",slug:"/packages/googlehealthcare-docs",permalink:"/adaptors/packages/googlehealthcare-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"googlehealthcare@1.1.0",id:"googlehealthcare-docs",keywords:["adaptor","googlehealthcare","createFhirResource"]},sidebar:"adaptors",previous:{title:"godata developer readme",permalink:"/adaptors/packages/godata-readme"},next:{title:"Config for googlehealthcare",permalink:"/adaptors/packages/googlehealthcare-configuration-schema"}},s={},g=[{value:"Functions",id:"functions",level:2},{value:"createFhirResource",id:"createfhirresource",level:3}],i={toc:g},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#createfhirresource"},"createFhirResource([fhirStore], resource, callback)"))),(0,n.yg)("p",null,"This adaptor exports the following from common:"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("h3",{id:"createfhirresource"},"createFhirResource"),(0,n.yg)("p",null,(0,n.yg)("code",null,"createFhirResource([fhirStore], resource, callback) \u21d2 Operation")),(0,n.yg)("p",null,"Create some resource in Google Cloud Healthcare"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"[fhirStore]"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"Object")),(0,n.yg)("td",{parentName:"tr",align:null},"The FHIR store information.    - ",(0,n.yg)("inlineCode",{parentName:"td"},"cloudRegion")," (string): The cloud region where the FHIR store is located.    - ",(0,n.yg)("inlineCode",{parentName:"td"},"projectId")," (string): The ID of the project that contains the FHIR store.    - ",(0,n.yg)("inlineCode",{parentName:"td"},"datasetId")," (string): The ID of the dataset that contains the FHIR store.    - ",(0,n.yg)("inlineCode",{parentName:"td"},"fhirStoreId")," (string): The ID of the FHIR store.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"The FHIR resource data to be created")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"callback"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"function")),(0,n.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'createFhirResource(\n  {\n    cloudRegion: "us-central1",\n    projectId: "adjective-noun-123",\n    datasetId: "my-dataset",\n    fhirStoreId: "my-fhir-store",\n  },\n  {\n    resourceType: "Patient",\n    name: [{ use: "official", family: "Smith", given: ["Darcy"] }],\n    gender: "female",\n    birthDate: "1970-01-01",\n  }\n);\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'createFhirResource(\n  {\n    cloudRegion: "us-central1",\n    projectId: "adjective-noun-123",\n    datasetId: "my-dataset",\n    fhirStoreId: "my-fhir-store",\n  },\n  (state) => ({\n    resourceType: "Encounter",\n    status: "finished",\n    class: {\n      system: "http://hl7.org/fhir/v3/ActCode",\n      code: "IMP",\n      display: "inpatient encounter",\n    },\n    reasonCode: [\n      {\n        text: "The patient had an abnormal heart rate. She was concerned about this.",\n      },\n    ],\n    subject: {\n      reference: `Patient/${state.data.id}`,\n    },\n  })\n);\n')),(0,n.yg)("hr",null))}p.isMDXComponent=!0}}]);