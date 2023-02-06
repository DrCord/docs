"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Integration Design"},r="Getting Started on Integration Design",s={unversionedId:"design/design-quickstart",id:"design/design-quickstart",title:"Integration Design",description:"Integration design begins with the functional or business requirements (not the technical bits). Therefore, you do not need to be an IT consultant or software engineer to start designing an integration solution! (Although having those resources certainly helps when we get to the technical specifications... but more on that later).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/design/design-quickstart.md",sourceDirName:"design",slug:"/design/design-quickstart",permalink:"/fr/documentation/design/design-quickstart",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/design/design-quickstart.md",tags:[],version:"current",frontMatter:{title:"Integration Design"},sidebar:"docs",previous:{title:"Security",permalink:"/fr/documentation/getting-started/security"},next:{title:"Glossary for Integration",permalink:"/fr/documentation/getting-started/glossary"}},l={},p=[{value:"1. Capture requirements as user stories",id:"1-capture-requirements-as-user-stories",level:2},{value:"Example user stories:",id:"example-user-stories",level:3},{value:"2. Diagram the business process",id:"2-diagram-the-business-process",level:2},{value:"Use BPMN for standardized documentation",id:"use-bpmn-for-standardized-documentation",level:3},{value:"OpenFn Examples of BPMN Diagrams",id:"openfn-examples-of-bpmn-diagrams",level:3},{value:"3. Map data elements to be exchanged",id:"3-map-data-elements-to-be-exchanged",level:2},{value:"Mapping Specification Template",id:"mapping-specification-template",level:3},{value:"To build a complete mapping specification, you\u2019ll need to...",id:"to-build-a-complete-mapping-specification-youll-need-to",level:3},{value:"Tips for drafting mapping specifications",id:"tips-for-drafting-mapping-specifications",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-on-integration-design"},"Getting Started on Integration Design"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Integration design begins with the functional or business requirements (not the technical bits).")," Therefore, you do not need to be an IT consultant or software engineer to start designing an integration solution! (Although having those resources certainly helps when we get to the technical specifications... but more on that later)."),(0,i.kt)("p",null,"A clear understanding and ",(0,i.kt)("em",{parentName:"p"},"documentation")," of the business processes, functional requirements, and people interacting with your desired integration are the first critical step in integration design. As you're planning for your next integration project, start developing the following documentation to get started with solution."),(0,i.kt)("h2",{id:"1-capture-requirements-as-user-stories"},"1. Capture requirements as user stories"),(0,i.kt)("p",null,"Documenting ",(0,i.kt)("em",{parentName:"p"},"why")," the integration is needed and the driving requirements is important to making sure the priority needs are identified and that everyone is aligned on project expectations."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"User stories")," are short, simple descriptions of a requirement told from the perspective of the person who desires the new functionality."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As a ",(0,i.kt)("inlineCode",{parentName:"p"},"<type of user>"),", I want ",(0,i.kt)("inlineCode",{parentName:"p"},"<some functionality>")," so that ",(0,i.kt)("inlineCode",{parentName:"p"},"<desired business outcome>"),".")),(0,i.kt)("p",null,"Good user stories will capture 3 parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Who")," - who is using the solution?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"What")," - what do they hope to achieve via the solution?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Why")," - why is this desire important? What are the business implications?")),(0,i.kt)("p",null,"If you capture these 3 elements, user stories can b ean effective way of detailing integration requirements and starting discussions at your organization about which requirements are priority."),(0,i.kt)("h3",{id:"example-user-stories"},"Example user stories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Case Referrals:")," As a caseworker, I want to automatically send referral requests to my partner agency using another case management system, so that I can securely share case information and quickly notify them when their services are needed in a crisis situation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EMR - HIS:")," As a clinic manager, I would like to integrate patient data from the district clinic electronic medical record system with the national DHIS2 health information system, so that I can securely and automatically report on health outcomes for key indicators in my district."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kobo Toolbox - MSSQL Database:")," As a M&E manager, I want to monitor Kobo Toolbox survey responses in a central database in real-time, so that I can better understand data collection activities and program performance across my research partner sites.")),(0,i.kt)("h2",{id:"2-diagram-the-business-process"},"2. Diagram the business process"),(0,i.kt)("p",null,"Once the user stories have been identified, start to document the functional processes that are in place (or will need to be implemented) in order to achieve the desired requirments. These might be automated or human/manually-driven processes. This is the precursor step to mapping out the data flow (which details the technical steps for how connections will be made and data exchanged between systems). Again, process mapping is ",(0,i.kt)("em",{parentName:"p"},"business analysis"),"\u2013not a technical exercise."),(0,i.kt)("p",null,"For example, if you want to exchange information between your organization and another... how might this exchange work from a functional point of view? ",(0,i.kt)("em",{parentName:"p"},"What")," information will be exchanged? With ",(0,i.kt)("em",{parentName:"p"},"whom")," (between which systems or users)? ",(0,i.kt)("em",{parentName:"p"},"When")," will the information be exchanged? And what are the human or automation steps that should facilitate and trigger this exchange? These business process questions are discussed in more detail on the ",(0,i.kt)("a",{parentName:"p",href:"/documentation/getting-started/so-you-want-to-integrate/"},"So, what is an integration?")," page."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Capture the current & desired process Document ",(0,i.kt)("em",{parentName:"p"},"current and desired")," business processes in order to determine how information should be exchanged between your organization/system/users and others, and to ensure alignment of expectations and assumptions across partners.")),(0,i.kt)("h3",{id:"use-bpmn-for-standardized-documentation"},"Use BPMN for standardized documentation"),(0,i.kt)("p",null,"When documenting internal business procedures, consider using standard Business Process Model and Notation (BPMN) as a standard way to graphically document key business processes. BPMN (learn more about standard ",(0,i.kt)("a",{parentName:"p",href:"https://www.omg.org/spec/BPMN/2.0/"},"BPMN 2.0"),") has flowchart-like symbols and precise notation that can be translated to software process components."),(0,i.kt)("p",null,"Check out these resources for learning & building your own BPMN diagrams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BPMN.io")," open-source modeler: ",(0,i.kt)("a",{parentName:"li",href:"https://bpmn.io/"},"https://bpmn.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Camunda BPMN Tool")," includes a free tool and tutorial: ",(0,i.kt)("a",{parentName:"li",href:"https://camunda.com/bpmn/"},"https://camunda.com/bpmn/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LucidChart")," provides a very user-friendly diagramming interface: ",(0,i.kt)("a",{parentName:"li",href:"https://www.lucidchart.com/pages/bpmn"},"https://www.lucidchart.com/pages/bpmn"))),(0,i.kt)("p",null,"Looking for a crash course? This video provides a quick overview of BPMN and how to use it: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BwkNceoybvA"},"https://www.youtube.com/watch?v=BwkNceoybvA")),(0,i.kt)("h3",{id:"openfn-examples-of-bpmn-diagrams"},"OpenFn Examples of BPMN Diagrams"),(0,i.kt)("p",null,"See the below example BPMN diagram for the user story:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'As a program manager, I want to extract beneficiary details ("tracked entity instances") from my country\'s DHIS2 system, so that I can enroll them as contacts in my SMS campaign configured on RapidPro to send them automated alerts and program updates.')),(0,i.kt)("img",{src:"/img/sample-bpmn.png",url:!0}),(0,i.kt)("h2",{id:"3-map-data-elements-to-be-exchanged"},"3. Map data elements to be exchanged"),(0,i.kt)("p",null,'Once the business processes are documented, start to document the specific data elements to be exchanged. This exercise requires a lot of specificity to detail the individual "fields" or "attributes" to be exchanged.'),(0,i.kt)("p",null,"The output of this exerice is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Element Mapping Specification"),", which will serve as (1) documentation of the specific data elements agreed to be exchanges, as well as (2) a guide for how to translate meaning between partners and systems (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," in one system might mean ",(0,i.kt)("inlineCode",{parentName:"p"},"patient")," in another)."),(0,i.kt)("p",null,"If your organization already has a data management or sharing agreement, this might be the perfect starting point for identifying the specific data points to be exchanged."),(0,i.kt)("h3",{id:"mapping-specification-template"},"Mapping Specification Template"),(0,i.kt)("p",null,"Collaborating on mapping specifications with implementing partners is an important exercise for documenting very specific requirements and building consensus on what data exactly will be exchanged, and how."),(0,i.kt)("admonition",{title:"Template for getting started",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1IqTIgOzyOztEevXbgY_4uE8Y8tiHXufZXx-IyJZase0/edit?usp=sharing"},"Use this template")," for drafting your own data element mapping specification.")),(0,i.kt)("p",null,"This template includes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Details on the source metadata such as field API name, data type, sample data values and comments: ",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/130796010-fe900c03-1bff-40c0-9263-c29e22d9191f.png",alt:"image"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Similar details on the destination metadata: ",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/130796087-67b0359d-207a-4169-aa88-6609572b2561.png",alt:"image"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notes on data transformations & cleaning required and comments for tracking changes & questions for technical input:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/130796170-2e29a997-9b41-44f7-ac60-79375d096cc9.png",alt:"image"})))),(0,i.kt)("h3",{id:"to-build-a-complete-mapping-specification-youll-need-to"},"To build a complete mapping specification, you\u2019ll need to..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the data elements to be exchanged by connected systems (you may need to export target system metadata to identify exact names)"),(0,i.kt)("li",{parentName:"ol"},"Determine which data elements belong to the data source, and which belong to the destination system"),(0,i.kt)("li",{parentName:"ol"},"Agree on how the data elements should map between target systems"),(0,i.kt)("li",{parentName:"ol"},"Analyze the structure and quality of the data to consider if data values will need to be transformed, cleaned, or re-labeled in order to map")),(0,i.kt)("p",null,"This mapping will serve as a blueprint for the technical integration setup, and will be an important artefact of the data sharing agreement between partners."),(0,i.kt)("h3",{id:"tips-for-drafting-mapping-specifications"},"Tips for drafting mapping specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Version mappings")," to keep track of mapping change requests over time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Color coding:")," Highlight any fields that require further discussion one color and any newly added fields another color"),(0,i.kt)("li",{parentName:"ul"},"Use Google Sheets or shared document comments and email to notify appropriate users when changes have been made to the mappings"),(0,i.kt)("li",{parentName:"ul"},"Include a ",(0,i.kt)("strong",{parentName:"li"},"legend/README")," that explains how to use the mappings template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unique identifiers:")," spend time evaluating available unique identifier schemes and what options may already be implemented by related information systems"),(0,i.kt)("li",{parentName:"ul"},"When mapping multiple choice questions, make sure to consider how the answer choices should map to the source/destination system."),(0,i.kt)("li",{parentName:"ul"},"Check out system-specific mapping tips by visiting the ",(0,i.kt)("inlineCode",{parentName:"li"},"Apps")," section of the Docs site (see sidebar).")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Once you have your (1) ",(0,i.kt)("inlineCode",{parentName:"p"},"user stories"),", (2) ",(0,i.kt)("inlineCode",{parentName:"p"},"business process diagrams"),", and (3) ",(0,i.kt)("inlineCode",{parentName:"p"},"data element specifications")," defined, you have produced a suite of functional design documentation that will drive the technical design of your integration solution, as well as memorialize the business decisions and agreements made by implementing partners."),(0,i.kt)("p",null,"Share this documentation with any technical implementation team, or check out the ",(0,i.kt)("a",{parentName:"p",href:"/documentation/build/jobs"},"Build")," documentation section to learn how to implement these design specifications using OpenFn."))}d.isMDXComponent=!0}}]);