(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5001],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"COVID-19 TEI (dhis2)",sidebar_label:"\u2728 COVID-19 TEI (dhis2)",id:"COVID-19-TEI-dhis2-2021-03-22",keywords:["library","job","expression","dhis2","createTEI","dataValue"]},l={unversionedId:"jobs/auto/COVID-19-TEI-dhis2-2021-03-22",id:"jobs/auto/COVID-19-TEI-dhis2-2021-03-22",isDocsHomePage:!1,title:"COVID-19 TEI (dhis2)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/COVID-19-TEI-dhis2-2021-03-22.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/COVID-19-TEI-dhis2-2021-03-22",permalink:"/fr/library/jobs/auto/COVID-19-TEI-dhis2-2021-03-22",version:"current",sidebar_label:"\u2728 COVID-19 TEI (dhis2)",frontMatter:{title:"COVID-19 TEI (dhis2)",sidebar_label:"\u2728 COVID-19 TEI (dhis2)",id:"COVID-19-TEI-dhis2-2021-03-22",keywords:["library","job","expression","dhis2","createTEI","dataValue"]},sidebar:"library",previous:{title:"Add events",permalink:"/fr/library/jobs/auto/DHIS2-Events-API"},next:{title:"COVID Case Registration (gs)",permalink:"/fr/library/jobs/auto/COVID-Case-Registration-gs-2021-03-02"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: COVID-19 TEI (dhis2)"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created 2 months ago"),(0,i.kt)("li",{parentName:"ul"},"Updated about 19 hours ago"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"86")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createTEI"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// See list of cases here: https://covid19.dhis2.org/demo/dhis-web-tracker-capture/index.html#/?program=DM9n1bUw8W8\ncreateTEI({\n  orgUnit: 'GD7TowwI46c',\n  trackedEntityType: 'MCPQUTHX1Ze',\n  attributes: [\n    {\n      attribute: 'he05i8FUwu3', // case id\n      value: dataValue('body._id'),\n    },\n    {\n      attribute: 'sB1IHYu2xQT', // first name\n      value: dataValue('body.Patient_name'),\n    },\n    {\n      attribute: 'ENRjVGxVL6l', // last name\n      value: dataValue('body.Last_Name_of_Patient'),\n    },\n    {\n      attribute: 'Rv8WM2mTuS5', // age\n      value: dataValue('body.Age'),\n    },\n  ],\n  enrollments: [\n    {\n      orgUnit: 'GD7TowwI46c',\n      program: 'DM9n1bUw8W8',\n      programState: 'sAV9jAajr8x',\n      enrollmentDate: dataValue('body.Date'),\n      incidentDate: dataValue('body.Covid_19_suspected_criteria/Speciman_Collection_date')\n    },\n  ],\n});\n")))}c.isMDXComponent=!0}}]);