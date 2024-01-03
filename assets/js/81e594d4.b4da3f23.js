"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},47574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Add DHIS2 Data Value Sets",sidebar_label:"Add DHIS2 Data Value Sets",id:"Add-DHIS2-Data-Value-Sets-2016-03-28",keywords:["library","job","expression","dhis2","dataPath","dataValue","each","field","fields"]},l=void 0,i={unversionedId:"library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",id:"library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",title:"Add DHIS2 Data Value Sets",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",permalink:"/adaptors/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",draft:!1,tags:[],version:"current",frontMatter:{title:"Add DHIS2 Data Value Sets",sidebar_label:"Add DHIS2 Data Value Sets",id:"Add-DHIS2-Data-Value-Sets-2016-03-28",keywords:["library","job","expression","dhis2","dataPath","dataValue","each","field","fields"]},sidebar:"adaptors",previous:{title:"DHIS2 Events",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-2016-01-27"},next:{title:"dhis2 changelog",permalink:"/adaptors/packages/dhis2-changelog"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Add DHIS2 Data Value Sets"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v0.1.0"},(0,r.kt)("inlineCode",{parentName:"a"},"v0.1.0"))),(0,r.kt)("li",{parentName:"ul"},"Created almost 8 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated about 6 years ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"0")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'each(\n  dataPath("data[*]"),\n  // Use our system specific helper functions...\n  dataValueSet(\n    fields(\n      field("dataSet", "pBOMPrpg1QX"),\n      field("orgUnit", "DiszpKrYNg8"),\n      field("period", "201401"),\n      field("completeData", dataValue("today")),\n      field("dataValues", function(state) {\n        // Or write your own JS...        \n        console.log("Do anything you want in here.");\n        return [\n          dataElement("qrur9Dvnyt5", state.data.site_school_number),\n          dataElement("oZg33kd9taw", state.data.light_source),\n          dataElement("msodh3rEMJa", state.data.number_of_children)\n        ];\n      })\n    )\n  )\n);\n\n')))}c.isMDXComponent=!0}}]);