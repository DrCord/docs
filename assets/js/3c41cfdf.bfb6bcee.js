"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[54785],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=i(a),y=r,u=s["".concat(p,".").concat(y)]||s[y]||m[y]||l;return a?n.createElement(u,g(g({ref:t},d),{},{components:a})):n.createElement(u,g({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,g[1]=o;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},88102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={title:"commcare@2.3.1",id:"commcare-docs",keywords:["adaptor","commcare","execute","fetchReportData","get","post","submit","submitXls"]},g=void 0,o={unversionedId:"packages/commcare-docs",id:"packages/commcare-docs",title:"commcare@2.3.1",description:"fetchReportData(reportId, params, postUrl)",source:"@site/adaptors/packages/commcare-docs.md",sourceDirName:"packages",slug:"/packages/commcare-docs",permalink:"/adaptors/packages/commcare-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"commcare@2.3.1",id:"commcare-docs",keywords:["adaptor","commcare","execute","fetchReportData","get","post","submit","submitXls"]},sidebar:"adaptors",previous:{title:"CommCare",permalink:"/adaptors/commcare"},next:{title:"Config for commcare",permalink:"/adaptors/packages/commcare-configuration-schema"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"fetchReportData",id:"fetchreportdata",level:3},{value:"get",id:"get",level:3},{value:"post",id:"post",level:3},{value:"submit",id:"submit",level:3},{value:"submitXls",id:"submitxls",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"RequestOptions",id:"requestoptions",level:3},{value:"RequestQueries",id:"requestqueries",level:3}],d={toc:i},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#fetchreportdata"},"fetchReportData(reportId, params, postUrl)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, params, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#post"},"post(path, data, params, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#submit"},"submit(formData)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#submitxls"},"submitXls(formData, params)"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"fetchreportdata"},"fetchReportData"),(0,r.yg)("p",null,(0,r.yg)("code",null,"fetchReportData(reportId, params, postUrl) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request to CommCare's Reports API\nand POST the response to somewhere else."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reportId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"API name of the report.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestqueries"},(0,r.yg)("code",null,"RequestQueries"))),(0,r.yg)("td",{parentName:"tr",align:null},"Query params, incl: limit, offset, and any custom report filters.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"postUrl"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Url to which the response object will be posted.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchReportData(reportId, params, postUrl)\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, params, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request to any commcare endpoint. The returned objects will be written to state.data.\nUnless an ",(0,r.yg)("inlineCode",{parentName:"p"},"offset")," is passed, ",(0,r.yg)("inlineCode",{parentName:"p"},"get()")," will automatically pull down all pages of data if the response\nis paginated.\nA ",(0,r.yg)("inlineCode",{parentName:"p"},"response")," key will be added to state with the HTTP response and a ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," key"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestqueries"},(0,r.yg)("code",null,"RequestQueries"))),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request params such as limit and offset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Callback invoked once per page of data retrieved.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get a list of cases"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("case", { limit: 20 })\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get a specific case "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("case/12345")\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"post"},"post"),(0,r.yg)("p",null,(0,r.yg)("code",null,"post(path, data, params, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a post request to commcare"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object or JSON which defines data that will be used to create a given instance of resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional request params.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'post( "user", { "username":"test", "password":"somepassword" })\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"submit"},"submit"),(0,r.yg)("p",null,(0,r.yg)("code",null,"submit(formData) \u21d2 Operation")),(0,r.yg)("p",null,"Submit form data"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"formData"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object including form data.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'submit(\n   fields(\n     field("@", function(state) {\n       return {\n         "xmlns": "http://openrosa.org/formdesigner/form-id-here"\n       };\n     }),\n     field("question1", dataValue("answer1")),\n     field("question2", "Some answer here.")\n   )\n )\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"submitxls"},"submitXls"),(0,r.yg)("p",null,(0,r.yg)("code",null,"submitXls(formData, params) \u21d2 Operation")),(0,r.yg)("p",null,"Convert form data to xls then submit."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"formData"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object including form data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#requestoptions"},(0,r.yg)("code",null,"RequestOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},"Request params including case type.")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"submitXls(\n   [\n     {name: 'Mamadou', phone: '000000'},\n   ],\n   {\n     case_type: 'student',\n     search_field: 'external_id',\n     create_new_cases: 'on',\n   }\n)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,r.yg)("p",null,"Queries provided to the submitXls request"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"case_type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional case type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"search_field"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional search field")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"create_new_cases"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional for allowing to create new cases. Default ",(0,r.yg)("inlineCode",{parentName:"td"},":on"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"requestqueries"},"RequestQueries"),(0,r.yg)("p",null,"Queries provided to the GET request"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"limit"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"number")),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of records to return. Default: 20. Maximum: 5000.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"offset"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"number")),(0,r.yg)("td",{parentName:"tr",align:null},"The number of records to offset in the results. Default: 0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xmlns"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional form XML namespace. See the ",(0,r.yg)("a",{parentName:"td",href:"https://dimagi.atlassian.net/wiki/spaces/commcarepublic/pages/2143979045/Finding+a+Form%27s+XMLNS"},"Commcare Docs"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"indexed_on_start"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional date (and time). Will return only forms that have had data modified since the passed in date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"indexed_on_end"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional date (and time). Will return only forms that have had data modified before the passed in date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"received_on_start"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional date (and time). Will return only forms that were received after the passed in date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"received_on_end"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional date (and time). Will return only forms that were received before the passed in date.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"app_id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The returned records will be limited to the application defined")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"case_id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"A case UUID.  Will only return forms which updated that case.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional user of group UUID used when getting cases")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional UUID for all cases last modified by that user")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional case type to get all matching cases")))),(0,r.yg)("hr",null))}m.isMDXComponent=!0}}]);