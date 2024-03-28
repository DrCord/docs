"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77800],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),y=a,d=g["".concat(l,".").concat(y)]||g[y]||c[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"Register Patient",sidebar_label:"Register Patient",id:"Register-Patient-2021-03-02",keywords:["library","job","expression","googlesheets","appendValues","JSON"]},i=void 0,s={unversionedId:"library/jobs/auto/Register-Patient-2021-03-02",id:"library/jobs/auto/Register-Patient-2021-03-02",title:"Register Patient",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Register-Patient-2021-03-02.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Register-Patient-2021-03-02",permalink:"/adaptors/library/jobs/auto/Register-Patient-2021-03-02",draft:!1,tags:[],version:"current",frontMatter:{title:"Register Patient",sidebar_label:"Register Patient",id:"Register-Patient-2021-03-02",keywords:["library","job","expression","googlesheets","appendValues","JSON"]},sidebar:"adaptors",previous:{title:"Kobo to sheets",permalink:"/adaptors/library/jobs/auto/Kobo-to-sheets-2023-10-13"},next:{title:"googlesheets changelog",permalink:"/adaptors/packages/googlesheets-changelog"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Register Patient"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-googlesheets"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets/releases/tag/v2.0.0"},(0,a.yg)("inlineCode",{parentName:"a"},"v2.0.0"))),(0,a.yg)("li",{parentName:"ul"},"Created about 3 years ago"),(0,a.yg)("li",{parentName:"ul"},"Updated 10 months ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"18")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"appendValues"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"JSON")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',\n  range: 'COVID-19 Cases!A2',\n  values: state => {\n    const kobo = state.data.body;\n    \n    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));\n    \n    return [\n      [\n        kobo['National_ID'],\n        kobo['Patient_name'],\n        kobo['Last_Name_of_Patient'],\n        kobo['Sex'],\n        kobo['Age'],\n        kobo['Comments'],\n        Date(),\n      ],\n    ];\n  },\n});\n")))}c.isMDXComponent=!0}}]);