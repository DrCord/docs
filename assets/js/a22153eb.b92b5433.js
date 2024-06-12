"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72920],{15680:(e,r,t)=>{t.d(r,{xA:()=>m,yg:()=>u});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(t),g=n,u=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(u,i(i({ref:r},m),{},{components:t})):a.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96783:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(58168),n=(t(96540),t(15680));const o={title:"Primero"},i=void 0,s={unversionedId:"primero",id:"primero",title:"Primero",description:"Overview",source:"@site/adaptors/primero.md",sourceDirName:".",slug:"/primero",permalink:"/adaptors/primero",draft:!1,tags:[],version:"current",frontMatter:{title:"Primero"},sidebar:"adaptors",previous:{title:"Power BI",permalink:"/adaptors/powerbi"},next:{title:"primero@2.12.0",permalink:"/adaptors/packages/primero-docs"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Sample HTTP requests",id:"sample-http-requests",level:3},{value:"Integration tips",id:"integration-tips",level:3},{value:"Common Errors",id:"common-errors",level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],m={toc:l},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.primero.org/"},"Primero")," is an open source software platform that\nhelps social services, humanitarian and development workers manage\nprotection-related data."),(0,n.yg)("h3",{id:"data-model"},"Data Model"),(0,n.yg)("p",null,"Primero data is primarily stored in ",(0,n.yg)("strong",{parentName:"p"},"cases"),", ",(0,n.yg)("strong",{parentName:"p"},"services")," and ",(0,n.yg)("strong",{parentName:"p"},"referrals"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Cases")," - used to track data on people"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Referrals")," - Referring a record is a way of giving a user limited access to\na record without transferring it completely"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Services")," - Cases are referred for specific ",(0,n.yg)("em",{parentName:"li"},"services")," such as\n",(0,n.yg)("inlineCode",{parentName:"li"},"Alternative care")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"Family Reunification"))),(0,n.yg)("p",null,"Learn more about Primero records using the user guides at the Primero\ndocumentation site: ",(0,n.yg)("a",{parentName:"p",href:"https://support.primero.org/documentation"},"https://support.primero.org/documentation")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://support.primero.org/assets/books-v2/1sP6VhT70WHhi5ZPbio6EszX-i4jZsBkO/#h.r1lefowgvf0n"},"See Primero admin guide")," for guidance on unique identifiers.")),(0,n.yg)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"As a UNICEF caseworker, I would like to electronically send a referral for a\ncase to UNHCR. I would also like to receive an update on the referral\ndecision."),(0,n.yg)("li",{parentName:"ol"},"As a UNICEF caseworker, I would like to use a third-party dashboard to\nvisualize integrated child protection-related indicators.")),(0,n.yg)("h2",{id:"integration-options"},"Integration Options"),(0,n.yg)("p",null,"Data integration via the Primero web API:",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api"},"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api")),(0,n.yg)("h3",{id:"sample-http-requests"},"Sample HTTP requests"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Authentication:"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"POST /api/v2/tokens")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'{\n  "user": {\n      "user_name": "primero",\n      "password": "mysecretpassw0rd"\n    }\n}\n')),(0,n.yg)("p",null,"(This authentication step is handled in the OpenFn Primero adaptor.)"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Show a paginated list of all cases that are accessible to this user:"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"GET /api/v2/cases")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"List all referrals that took place for a record:"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"GET /api/v2/cases/:id/referrals")),(0,n.yg)("p",null,"See the examples section more sample Primero jobs."),(0,n.yg)("h3",{id:"integration-tips"},"Integration tips"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data forwarding can be enabled in Primero. There is a webhook that can forward\ncase information to a designated URL endpoint (e.g., OpenFn Inbox). This data\nforwarding can happen automatically on insert of a new case, as well as\non-demand when a user clicks the ",(0,n.yg)("inlineCode",{parentName:"li"},"Sync")," button (which may be added to the page\nlayout if this feature is in use)."),(0,n.yg)("li",{parentName:"ul"},"Each Primero ",(0,n.yg)("inlineCode",{parentName:"li"},"case")," has a ",(0,n.yg)("inlineCode",{parentName:"li"},"case_id")," which can be used as an external\nidentifier in the destination system."),(0,n.yg)("li",{parentName:"ul"},"Each Primero case also has a ",(0,n.yg)("inlineCode",{parentName:"li"},"record_id")," which is the id in the URL for each\ncase"),(0,n.yg)("li",{parentName:"ul"},"It is helpful to set up a job that only fetches a case from Primero like the\none\n",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23/#expression"},"here"),".\nThis job can come in handy when it's time to test and troubleshoot your\nsolution and validate any test data that was setup in Primero.")),(0,n.yg)("h2",{id:"common-errors"},"Common Errors"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Invalid Record JSON"),": This error message means that the request is either\nmissing fields or sending fields differently from how Primero expects them.\nRevisit your mapping specifications document to ensure all fields are being sent\nproperly.",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"500 Server errors"),": This message signals that the server failed to fulfill your\nrequest. Contact the system administrator for assistance."),(0,n.yg)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,n.yg)("p",null,"OpenFn implementations can leverage both the\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},(0,n.yg)("inlineCode",{parentName:"a"},"HTTP"))," and\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-primero"},(0,n.yg)("inlineCode",{parentName:"a"},"Primero"))," adaptors to connect with\nthe Primero API."),(0,n.yg)("p",null,"NOTE: That the Primero Adaptor has versions to support both Primero API V2 and\nPrimero API V1 (to be deprecated)."),(0,n.yg)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Cambodia: MoSVY Primero < > OSCaR NGOs:\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/unicef-cambodia"},"https://github.com/OpenFn/unicef-cambodia")),(0,n.yg)("li",{parentName:"ol"},"Cambodia: UNICEF Primero < > ONA Dashboard sync:\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-ona-dashboard/"},"https://github.com/OpenFn/primero-ona-dashboard/")),(0,n.yg)("li",{parentName:"ol"},"Gambella: UNICEF Primero < > UNHCR Progres:\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-progres"},"https://github.com/OpenFn/primero-progres")),(0,n.yg)("li",{parentName:"ol"},"Thailand: UNICEF Primero < > MoPH HIS:\n",(0,n.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-thailand"},"https://github.com/OpenFn/primero-thailand"))))}d.isMDXComponent=!0}}]);