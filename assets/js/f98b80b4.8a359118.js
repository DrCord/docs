"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3336],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={title:"Design your Step"},i=void 0,s={unversionedId:"build/steps/step-design-intro",id:"build/steps/step-design-intro",title:"Design your Step",description:"Before you can configure your Step, you'll need to design the Workflow and",source:"@site/docs/build/steps/step-design-intro.md",sourceDirName:"build/steps",slug:"/build/steps/step-design-intro",permalink:"/documentation/build/steps/step-design-intro",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/steps/step-design-intro.md",tags:[],version:"current",frontMatter:{title:"Design your Step"},sidebar:"docs",previous:{title:"Edit & Test Steps",permalink:"/documentation/build/steps/step-editor"},next:{title:"Paths",permalink:"/documentation/build/paths"}},p={},l=[{value:"1: Determine your Inputs/Outputs",id:"1-determine-your-inputsoutputs",level:3},{value:"2: Map your data elements",id:"2-map-your-data-elements",level:3},{value:"3. Define your methods (GET, POST...) and/or operations (insert, update, upsert...)",id:"3-define-your-methods-get-post-andor-operations-insert-update-upsert",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Before you can configure your Step, you'll need to design the Workflow and\nconsider which specific tasks, activities, or business logic will be executed.\nRead on for a brief overview."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Check out the ",(0,r.yg)("a",{parentName:"p",href:"/documentation/design/design-overview"},"Workflow Design")," docs\nfor more details on solution design and links to templates.")),(0,r.yg)("p",null,"In short, to design a Workflow Step, you will need to follow the below actions,\nand consider summarizing your design specifications in a\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/design/design-workflow"},"workflow diagram"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example Workflow",src:n(71553).A,width:"960",height:"540"})),(0,r.yg)("h3",{id:"1-determine-your-inputsoutputs"},"1: Determine your Inputs/Outputs"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"What is the Input for this Workflow Step? Consider what is the initial state\nor data ",(0,r.yg)("em",{parentName:"li"},"before")," the Step begins."),(0,r.yg)("li",{parentName:"ol"},"What is the desired Output (i.e., the final state or data ",(0,r.yg)("em",{parentName:"li"},"after")," the Step is\nexecuted)? Consider what you want to send to the target app and/or pass onto\nthe next Step in the Workflow.")),(0,r.yg)("h3",{id:"2-map-your-data-elements"},"2: Map your data elements"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/documentation/design/mapping-specs"},"See here"),' for detailed guidance on\nmapping data elements or "data dictionaries" between your source and destination\napps. To get started:'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Export the metadata (or "form", "field list", or "data elements") of your\nsource app (input) & destination app (output).'),(0,r.yg)("li",{parentName:"ol"},"Paste the metadata into an Excel spreadsheet to create a mapping sheet:")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Sample mapping sheet",src:n(21155).A,width:"1838",height:"448"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Map the source and destinationdata elements & define rules for data cleaning\nand transformation Consider:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"How should the data collected be translated into your destination system\u2019s\ndata model?"),(0,r.yg)("li",{parentName:"ul"},"Does your destination system have data input & validation requirements?")),(0,r.yg)("h2",{id:"3-define-your-methods-get-post-andor-operations-insert-update-upsert"},"3. Define your methods (GET, POST...) and/or operations (insert, update, upsert...)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Find out or create the unique identifiers you will use to insert and update\ndata (e.g., uuid, form_id, patient_id, etc.)."),(0,r.yg)("li",{parentName:"ol"},"Determine the HTTP methods (e.g., GET, POST, PUT) or database operations\n(e.g. insert, update, delete) you want to perform in the target app"),(0,r.yg)("li",{parentName:"ol"},"Check the Adaptor for helper functions. a. Example from\n",(0,r.yg)("a",{parentName:"li",href:"/adaptors/packages/postgresql-docs"},"language-postgresql"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"insert(...)"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"insertMany(...)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"update(...)"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"updateMany(...)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"upsert(...)"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"upsertMany(...)")," \xa0\u2192 update if record exists or insert if it\ndoesn\u2019t; references an external Id b. Example from\n",(0,r.yg)("a",{parentName:"li",href:"/adaptors/packages/dhis2-docs"},"language-dhis2")," using Tracked Entity\nInstances (TEI)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"updateTEI(...)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"upsertTEI(...)"))))),(0,r.yg)("p",null,"See example ",(0,r.yg)("a",{parentName:"p",href:"/documentation/build/steps/jobs"},"Job expression"),' for a Step\nthat will "upsert" (update or insert) records in a SQL database.'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"upsert('mainDataTable', 'AnswerId', {\n\xa0 AnswerId: dataValue('\\_id'), //external Id for upsert\n\xa0\xa0column: dataValue('firstQuestion)'),\n\xa0\xa0LastUpdate: new Date().toISOString(),\n\xa0\xa0Participant: dataValue('participant'),\n\xa0\xa0Surveyor: dataValue('surveyor'),\n\xa0\xa0...\n});\n")))}c.isMDXComponent=!0},21155:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-element-mapping-3d88dbb0716af7d57c3e19c6c65eb336.png"},71553:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/example-workflow-state-d510389468e0f05f12ed1394629f468b.png"}}]);