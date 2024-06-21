"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24724],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return t?a.createElement(u,r(r({ref:n},c),{},{components:t})):a.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const o={sidebar_label:"Mapping Specifications",title:"Writing Data Element Mapping Specifications"},r="Mapping data elements to define data integration & automation rules",s={unversionedId:"design/mapping-specs",id:"design/mapping-specs",title:"Writing Data Element Mapping Specifications",description:"This article walks through the data element mapping process used to develop",source:"@site/docs/design/mapping-specs.md",sourceDirName:"design",slug:"/design/mapping-specs",permalink:"/documentation/design/mapping-specs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/design/mapping-specs.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mapping Specifications",title:"Writing Data Element Mapping Specifications"},sidebar:"docs",previous:{title:"API Discovery",permalink:"/documentation/design/api-discovery"},next:{title:"Workflow Specifications",permalink:"/documentation/design/workflow-specs"}},p={},l=[{value:"OpenFn Mapping Specification Template",id:"openfn-mapping-specification-template",level:2},{value:"Mapping Considerations",id:"mapping-considerations",level:2},{value:"Maintaining Mapping Specifications",id:"maintaining-mapping-specifications",level:3},{value:"Functional vs. Technical Mapping",id:"functional-vs-technical-mapping",level:3},{value:"Global variables and mapping rules",id:"global-variables-and-mapping-rules",level:3},{value:"Managing global variables &amp; mappings outside of OpenFn",id:"managing-global-variables--mappings-outside-of-openfn",level:4},{value:"Mapping to Individual or Aggregate Entities",id:"mapping-to-individual-or-aggregate-entities",level:3}],c={toc:l},d="wrapper";function g(e){let{components:n,...o}=e;return(0,i.yg)(d,(0,a.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"mapping-data-elements-to-define-data-integration--automation-rules"},"Mapping data elements to define data integration & automation rules"),(0,i.yg)("p",null,'This article walks through the data element mapping process used to develop\nentity- and field-level specifications for how data points should be exchanged,\ncleaned, and/or transformed in a data integration workflow. In basic terms, data\nmapping is the process of connecting a data field from one source to a data\nfield in another source (e.g., System A "patient" = "person" in System B).'),(0,i.yg)("p",null,"A data element mapping specification is a special type of data dictionary that\nserves as (1) documentation on how you are translating meaning between systems,\nand (2) specifications for developers building the workflow automation solution."),(0,i.yg)("p",null,"For each automation step in your workflow, you will document which data elements\n(or metadata) will be referenced, as well as the \u201crules\u201d for how these data\nelements should be mapped, reassigned, cleaned, transformed, and/or calculated."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"mapping",src:t(30868).A,width:"944",height:"566"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"To draft a data element mapping specification, you\u2019ll need to\u2026")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Export the metadata or ask for a list of data elements from the target\nsystems,"),(0,i.yg)("li",{parentName:"ol"},"Procure a sample \u201cinput\u201d record from the source system and procure a sample\noutput record from the destination system. At best, this is an example JSON\npayload or a link to example records. At worst, this is a screenshot or a CSV\nfile with \u201cdummy\u201d data."),(0,i.yg)("li",{parentName:"ol"},"Start \u201cmapping\u201d the data elements and recording transformation rules!")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"center"},(0,i.yg)("img",{alt:"mapping",src:t(10617).A,width:"1334",height:"648"})))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("em",{parentName:"td"},"The data mapping process for data integration solutions."))))),(0,i.yg)("h2",{id:"openfn-mapping-specification-template"},"OpenFn Mapping Specification Template"),(0,i.yg)("p",null,"You can document data elements, mappings, and rules using the OpenFn mapping\nspecification template. This\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608"},"template"),"\nwas created by the OpenFn team as a result of lessons learned from implementing\ndata integration solutions for NGOs and government partners around the world. It\nis used on all OpenFn projects and is maintained by the OpenFn team."),(0,i.yg)("h2",{id:"mapping-considerations"},"Mapping Considerations"),(0,i.yg)("h3",{id:"maintaining-mapping-specifications"},"Maintaining Mapping Specifications"),(0,i.yg)("p",null,"Once your OpenFn project is live, the Mapping Specs document may be the\nbusiness-friendly way your users interact with your solution. If you make any\nchanges, make sure the Mapping Spec always matches your job code. Also consider\nversioning your mapping specs so stakeholders have access to historical\nimplementations of the solution."),(0,i.yg)("h3",{id:"functional-vs-technical-mapping"},"Functional vs. Technical Mapping"),(0,i.yg)("p",null,"After your organization (or \u201cthe business\u201d) determines the functional data\nelement mapping rules for source/target systems, you'll need to consider which\nother technical data elements are required in order for the integration to work.\nThese may include system-specific fields, IDs, and/or API parameters that are\n\u201cunder the hood\" and may not be visible to the end user, but are required by the\ntarget system to share the data."),(0,i.yg)("h3",{id:"global-variables-and-mapping-rules"},"Global variables and mapping rules"),(0,i.yg)("p",null,'Sometimes when mapping lists of values or option sets (e.g., lists of diagnoses,\ngeographic hierarchies, list of services globally offered at the organization),\nthese values are "global" and need to referenced repeated throughout your\nworkflow implementation.'),(0,i.yg)("p",null,"For example, imagine that your source app has a list of coded location IDs\n(e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"01, 02, 03"),") that need to be mapped to a global list of location values\nor administrative units:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"//source location IDs: destination location values\n01: 'Western Cape',\n02: 'Eastern Cape',\n03: 'Gauteng'\n")),(0,i.yg)("p",null,"In your mapping spec, you should capture this list of global values and mapping\nrules in a separate ",(0,i.yg)("inlineCode",{parentName:"p"},"globals")," sheet to then reference throughout your mapping\nspec. See an example of this specification in the\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit"},"template mapping specification"),"."),(0,i.yg)("p",null,"Then, when building your workflow to implement this globals mapping table\nspecification, your job expression might looks something like the below code\nsnippet."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"//Workflow step 1\n//First we use fn() to transform, map & clean our data\nfn(state => {\n\n    //Global mapping rules you want to implement in your workflow\n    const locationMap = {\n        //location_id from source app: location value in destination app\n        01: 'Western Cape',\n        02: 'Eastern Cape',\n        03: 'Gauteng'\n    }\n\n    // Here we build the payload of our http request body...\n    // We assume the input is an array of records\n    const payload = state.data.map(record => ({\n        location: locationMap[record.location_id] //translate location_id to the mapped value\n        external_id: record.case_id\n    }));\n\n    return {...state, payload};\n});\n\n//Workflow step 2\n//Then we post the payload built in the prior operation to create a record\npost('/api/myEndpoint', {\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: (state) => state.payload\n});\n")),(0,i.yg)("h4",{id:"managing-global-variables--mappings-outside-of-openfn"},"Managing global variables & mappings outside of OpenFn"),(0,i.yg)("p",null,"While the OpenFn XLS-based mapping template is helpful for collaborating with\nother stakeholders on defining the mapping requirements, once these\nspecifications are set, you might consider capturing any ",(0,i.yg)("inlineCode",{parentName:"p"},"globals")," mapping rules\nin an outside application, rather than hard-coding these in your job code\ndirectly (as in the example above)."),(0,i.yg)("p",null,"Instead, you might store these global variables and mapping rules in a separate\ndatabase table or in an application like\n",(0,i.yg)("a",{parentName:"p",href:"https://openconceptlab.org/"},"Open Concept Lab"),", which has a user-friendly web\napp for recording data dictionaries & mapping rules, and REST API support. This\nwould then allow you to dynamically query these mapping rules using OpenFn, to\nensure your integration is utilizing the latest and greatest specifications."),(0,i.yg)("p",null,"In this case, your workflow configuration might look like the below, where the\nsecond step in the workflow is dedicated to querying this list of global\nmappings from the app in which they're stored to dynamically fetch the latest\nglobals every time the workflow is run."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ocl-workflow-example",src:t(79974).A,width:"2848",height:"1300"})),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"To see documentation of a workflow implementation that uses\n",(0,i.yg)("a",{parentName:"p",href:"https://openconceptlab.org/"},"Open Concept Lab")," to store mapping specifications\nand global variables,\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1NEhgHD3P9luYYsJFMfGee8eR8xA03MpgcZcGPpzTLjE/edit#slide=id.g1ed42eefbd1_0_0"},"check out this"),"\nM\xe9decins Sans Fronti\xe8res overview of an example OpenFn workflow that maps\nOpenMRS data to DHIS2.")),(0,i.yg)("h3",{id:"mapping-to-individual-or-aggregate-entities"},"Mapping to Individual or Aggregate Entities"),(0,i.yg)("p",null,"Consider if your integration requires a 1-to-1 exchange of individual records,\nor if there is a need for individual records to be summaries or aggregated. Your\nworkflow may require you to map individual entities (i.e., 1-to-1 mapping). For\nexample, you can map a patient from KoboToolBox to a patient in DHIS2. You\nshould use the\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608"},"default OpenFn mapping template"),"\nfor such scenarios."),(0,i.yg)("p",null,"However, if your workflow requires mapping individual entities to an\naggregate/summarized entity (i.e., many-to-1 mapping), then you can use OpenFn\u2019s\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1JVcM7FEkCeezHXONRaAaEPFks9lS8xO_q51jql_hUtc/edit"},"aggregate mapping template"),"\nto start. For example, you might collect individual patient records in\nKoboToolBox, but want to send an aggregated count of patients to DHIS2 for key\nindicator results reporting (e.g. the number of patients under 18 years old)."))}g.isMDXComponent=!0},30868:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/mapping_example-48cc83e975d54863b108a17ec8562b63.png"},10617:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/mapping_process-fc2963ce6b5b234023f202b9e97f96ae.png"},79974:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/workflow-ocl-example-25bae7671782aa970e29e606d1acef73.png"}}]);