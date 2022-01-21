"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7681],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],p={title:"Primero"},l=void 0,s={unversionedId:"apps/primero",id:"apps/primero",isDocsHomePage:!1,title:"Primero",description:"Overview",source:"@site/docs/apps/primero.md",sourceDirName:"apps",slug:"/apps/primero",permalink:"/documentation/apps/primero",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/primero.md",tags:[],version:"current",frontMatter:{title:"Primero"},sidebar:"docs",previous:{title:"Power BI",permalink:"/documentation/apps/powerbi"},next:{title:"Salesforce",permalink:"/documentation/apps/salesforce"}},m=[{value:"Overview",id:"overview",children:[{value:"Data Model",id:"data-model",children:[],level:3}],level:2},{value:"Integration Use Cases",id:"integration-use-cases",children:[],level:2},{value:"Integration Options",id:"integration-options",children:[{value:"Sample HTTP requests",id:"sample-http-requests",children:[],level:3},{value:"Integration tips",id:"integration-tips",children:[],level:3}],level:2},{value:"Common Errors",id:"common-errors",children:[],level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[],level:2},{value:"Implementation Examples",id:"implementation-examples",children:[],level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.primero.org/"},"Primero")," is an open source software platform that helps social services, humanitarian and development workers manage protection-related data."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,"Primero data is primarily stored in ",(0,o.kt)("strong",{parentName:"p"},"cases"),", ",(0,o.kt)("strong",{parentName:"p"},"services")," and ",(0,o.kt)("strong",{parentName:"p"},"referrals"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cases")," - used to track data on people"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Referrals")," - Referring a record is a way of giving a user limited access to a record without transferring it completely "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Services")," - Cases are referred for specific ",(0,o.kt)("em",{parentName:"li"},"services")," such as ",(0,o.kt)("inlineCode",{parentName:"li"},"Alternative care")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Family Reunification")," ")),(0,o.kt)("p",null,"Learn more about Primero records using the user guides at the Primero documentation site: ",(0,o.kt)("a",{parentName:"p",href:"https://support.primero.org/documentation"},"https://support.primero.org/documentation")),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As a UNICEF caseworker, I would like to electronically send a referral for a case to UNHCR. I would also like to receive an update on the referral decision."),(0,o.kt)("li",{parentName:"ol"},"As a UNICEF caseworker, I would like to use a third-party dashboard to visualize integrated child protection-related indicators.")),(0,o.kt)("h2",{id:"integration-options"},"Integration Options"),(0,o.kt)("p",null,"Data integration via the Primero web API:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api"},"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api")),(0,o.kt)("h3",{id:"sample-http-requests"},"Sample HTTP requests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authentication:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/v2/tokens")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "user": {\n      "user_name": "primero",\n      "password": "mysecretpassw0rd"\n    }\n}\n')),(0,o.kt)("p",null,"(This authentication step is handled in the OpenFn Primero adaptor.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Show a paginated list of all cases that are accessible to this user:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/cases")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List all referrals that took place for a record:"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/cases/:id/referrals")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/library"},"Job Library")," for sample Primero jobs."),(0,o.kt)("h3",{id:"integration-tips"},"Integration tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data forwarding can be enabled in Primero. There is a webhook that can forward case information to a designated URL endpoint (e.g., OpenFn Inbox). This data forwarding can happen automatically on insert of a new case, as well as on-demand when a user clicks the ",(0,o.kt)("inlineCode",{parentName:"li"},"Sync")," button (which may be added to the page layout if this feature is in use)."),(0,o.kt)("li",{parentName:"ul"},"Each Primero ",(0,o.kt)("inlineCode",{parentName:"li"},"case")," has a ",(0,o.kt)("inlineCode",{parentName:"li"},"case_id")," which can be used as an external identifier in the destination system. "),(0,o.kt)("li",{parentName:"ul"},"Each Primero case also has a ",(0,o.kt)("inlineCode",{parentName:"li"},"record_id")," which is the id in the URL for each case")),(0,o.kt)("h2",{id:"common-errors"},"Common Errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Docs in progress!\n")),(0,o.kt)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.kt)("p",null,"OpenFn implementations can leverage both the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"HTTP"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-primero"},(0,o.kt)("inlineCode",{parentName:"a"},"Primero"))," adaptors to connect\nwith the Primero API."),(0,o.kt)("p",null,"NOTE: That the Primero Adaptor has versions to support both Primero API V2 and Primero API V1 (to be deprecated). "),(0,o.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cambodia: MoSVY Primero < > OSCaR NGOs: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/unicef-cambodia/issues"},"https://github.com/OpenFn/unicef-cambodia/issues")),(0,o.kt)("li",{parentName:"ol"},"Cambodia: UNICEF Primero < > ONA Dashboard sync: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-ona-dashboard/"},"https://github.com/OpenFn/primero-ona-dashboard/")),(0,o.kt)("li",{parentName:"ol"},"Gambella: UNICEF Primero < > UNHCR Progres: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-progres"},"https://github.com/OpenFn/primero-progres")),(0,o.kt)("li",{parentName:"ol"},"Thailand: UNICEF Primero < > MoPH HIS: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-thailand"},"https://github.com/OpenFn/primero-thailand"))))}d.isMDXComponent=!0}}]);