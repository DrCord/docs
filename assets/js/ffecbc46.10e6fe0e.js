"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[36904],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>b});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,b=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={title:"Create TEI (dhis2)",sidebar_label:"Create TEI (dhis2)",id:"Create-TEI-dhis2-2021-03-22",keywords:["library","job","expression","dhis2","create","dataValue"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-TEI-dhis2-2021-03-22",id:"library/jobs/auto/Create-TEI-dhis2-2021-03-22",title:"Create TEI (dhis2)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-TEI-dhis2-2021-03-22.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-TEI-dhis2-2021-03-22",permalink:"/adaptors/library/jobs/auto/Create-TEI-dhis2-2021-03-22",draft:!1,tags:[],version:"current",frontMatter:{title:"Create TEI (dhis2)",sidebar_label:"Create TEI (dhis2)",id:"Create-TEI-dhis2-2021-03-22",keywords:["library","job","expression","dhis2","create","dataValue"]},sidebar:"adaptors",previous:{title:"Load to DHIS2",permalink:"/adaptors/library/jobs/auto/Load-to-DHIS2-2023-07-17"},next:{title:"CHW case to DHIS2",permalink:"/adaptors/library/jobs/auto/CHW-case-to-DHIS2-2023-04-27"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Create TEI (dhis2)"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v3.2.11"},(0,n.yg)("inlineCode",{parentName:"a"},"v3.2.11"))),(0,n.yg)("li",{parentName:"ul"},"Created almost 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated 8 months ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"43")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"create('trackedEntityInstances', {\n  orgUnit: 'g8upMTyEZGZ',\n  trackedEntityType: 'nEenWmSyUEp',\n  program: 'IpHINAT79UW',\n  attributes: [\n    { attribute: 'zDhUuAYrxNC', value: dataValue('body.Patient_name') },\n    { attribute: 'w75KJ2mc4zz', value: dataValue('body.Last_Name_of_Patient') },\n  ],\n  enrollments: [\n    {\n      orgUnit: 'g8upMTyEZGZ',\n      program: 'IpHINAT79UW',\n      programState: 'oRySG82BKE6', // active\n      enrollmentDate: dataValue('body.Date'),\n      incidentDate: dataValue('body.Date'),\n    },\n  ],\n});\n")))}c.isMDXComponent=!0}}]);