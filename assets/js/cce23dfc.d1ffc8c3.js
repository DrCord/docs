"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[62224],{15680:(e,n,o)=>{o.d(n,{xA:()=>d,yg:()=>c});var t=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,c=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return o?t.createElement(c,r(r({ref:n},d),{},{components:o})):t.createElement(c,r({ref:n},d))}));function c(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39800:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=o(58168),a=(o(96540),o(15680));const i={sidebar_label:"Kobo to DHIS2",title:"Kobo to DHIS2 Reporting Workflow",slug:"/kobo-to-dhis2"},r="Create a Workflow automating reporting between KoboToolbox & DHIS2",l={unversionedId:"tutorials/kobo-to-dhis2",id:"tutorials/kobo-to-dhis2",title:"Kobo to DHIS2 Reporting Workflow",description:"In this tutorial, we are going to walk through how to create a simple OpenFn",source:"@site/docs/tutorials/kobo-to-dhis2.md",sourceDirName:"tutorials",slug:"/kobo-to-dhis2",permalink:"/documentation/kobo-to-dhis2",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/tutorials/kobo-to-dhis2.md",tags:[],version:"current",frontMatter:{sidebar_label:"Kobo to DHIS2",title:"Kobo to DHIS2 Reporting Workflow",slug:"/kobo-to-dhis2"},sidebar:"docs",previous:{title:"HTTP to GoogleSheets",permalink:"/documentation/tutorials/http-to-googlesheets"},next:{title:"CommCare to PostgreSQL",permalink:"/documentation/tutorials/commcare-to-db"}},s={},p=[{value:"Video Walkthrough",id:"video-walkthrough",level:3},{value:"Workflow Overview:",id:"workflow-overview",level:3},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Step 1: Get Kobo Form Submission",id:"step-1-get-kobo-form-submission",level:3},{value:"Explanation:",id:"explanation",level:4},{value:"Testing:",id:"testing",level:4},{value:"Step 2: Count OPV Dose Given",id:"step-2-count-opv-dose-given",level:3},{value:"Explanation:",id:"explanation-1",level:4},{value:"Testing:",id:"testing-1",level:4},{value:"Step 3: Map and Load to DHIS2",id:"step-3-map-and-load-to-dhis2",level:3},{value:"Explanation:",id:"explanation-2",level:4},{value:"Testing",id:"testing-2",level:4},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p},u="wrapper";function g(e){let{components:n,...o}=e;return(0,a.yg)(u,(0,t.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create-a-workflow-automating-reporting-between-kobotoolbox--dhis2"},"Create a Workflow automating reporting between KoboToolbox & DHIS2"),(0,a.yg)("p",null,"In this tutorial, we are going to walk through how to create a simple OpenFn\nWorkflow that automates reporting from\n",(0,a.yg)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox")," (a mobile data collection app) and\n",(0,a.yg)("a",{parentName:"p",href:"https://dhis2.org"},"DHIS2")," (a health information system commonly used for\naggregate reporting on key indicators) using the the ",(0,a.yg)("inlineCode",{parentName:"p"},"kobotoolbox")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"dhis2"),"\n",(0,a.yg)("a",{parentName:"p",href:"/adaptors"},"Adaptors"),"."),(0,a.yg)("h3",{id:"video-walkthrough"},"Video Walkthrough"),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Coming soon: Video tutorial to guide you through this Workflow configuration.")),(0,a.yg)("h3",{id:"workflow-overview"},"Workflow Overview:"),(0,a.yg)("p",null,"This OpenFn Workflow will have 3 Steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Fetch form submissions from Kobotoolbox"),(0,a.yg)("li",{parentName:"ol"},"Count the number of ",(0,a.yg)("inlineCode",{parentName:"li"},"OPV0_dose_given")," values recorded across submissions to\nreturn an aggregate count of how many beneficiaries have received the OPV0\nimmunication"),(0,a.yg)("li",{parentName:"ol"},"Import the aggregate results to DHIS2 to report on the # of doses recorded\nthat week")),(0,a.yg)("h3",{id:"prerequisites"},"Prerequisites:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You have an OpenFn Project"),(0,a.yg)("li",{parentName:"ul"},"You have a KoboToolbox account and form to sync (see below for demo\ncredentials to use)"),(0,a.yg)("li",{parentName:"ul"},'Login info for a DHIS2 instance (see below for login info for the "play" DHIS2\ninstance)')),(0,a.yg)("h3",{id:"step-1-get-kobo-form-submission"},"Step 1: Get Kobo Form Submission"),(0,a.yg)("p",null,"Create a the first step in Wrkflow convas."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: ",(0,a.yg)("inlineCode",{parentName:"li"},"Get Kobo Form Submission")),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("inlineCode",{parentName:"li"},"kobotoolbox")),(0,a.yg)("li",{parentName:"ul"},"Version: ",(0,a.yg)("inlineCode",{parentName:"li"},"latest")),(0,a.yg)("li",{parentName:"ul"},"Credential: see belo")),(0,a.yg)("p",null,"This step uses the kobotoolbox adaptor and we will use the following credential\nconfiguration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "baseURL": "https://kf.kobotoolbox.org",\n  "username": "openfn_demo",\n  "password": "openfn_demo",\n  "apiVersion": "v2"\n}\n')),(0,a.yg)("p",null,"In this Step we want to be fetch form submissions from this demo form with the\nid ",(0,a.yg)("inlineCode",{parentName:"p"},"aBpweTNdaGJQFb5EBBwUeo"),". To do so, open the\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/step-editor"},"Inspector Editor")," and add the following Job\ncode:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Step 1: Fetch Form Submissions from Kobotoolbox\ngetSubmissions({ formId: 'aBpweTNdaGJQFb5EBBwUeo' });\n")),(0,a.yg)("admonition",{title:"Need help writing job code?",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Check out the docs on the ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/kobotoolbox"},'"kobotoolbox" Adaptor'),",\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/"},"configuring Steps"),", and\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/jobs/job-writing-guide"},"job-writing"),".")),(0,a.yg)("h4",{id:"explanation"},"Explanation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"getSubmissions"),": Fetches form submissions."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'{ formId: "aBpweTNdaGJQFb5EBBwUeo" }'),": Specify the form ID to retrieve\nsubmissions.")),(0,a.yg)("h4",{id:"testing"},"Testing:"),(0,a.yg)("p",null,"Create an empty input ",(0,a.yg)("inlineCode",{parentName:"p"},"{}")," then click ",(0,a.yg)("inlineCode",{parentName:"p"},"Create New Work Order")," button to run the\nworkflow. ",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/workflows"},"See docs")," for more on running Workflows\nmanually."),(0,a.yg)("p",null,"The expected ",(0,a.yg)("inlineCode",{parentName:"p"},"output`` should contain 17 records in "),"state.data.results`"),(0,a.yg)("h3",{id:"step-2-count-opv-dose-given"},"Step 2: Count OPV Dose Given"),(0,a.yg)("p",null,"Create a second Step after ",(0,a.yg)("inlineCode",{parentName:"p"},"Get Kobo Form Submission")," as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: ",(0,a.yg)("inlineCode",{parentName:"li"},"Count OPV Dose Given")),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("inlineCode",{parentName:"li"},"common")," (used whenever we want to add custom JavaScript functions)"),(0,a.yg)("li",{parentName:"ul"},"Version: ",(0,a.yg)("inlineCode",{parentName:"li"},"latest")),(0,a.yg)("li",{parentName:"ul"},"Credential: none needd")),(0,a.yg)("p",null,"In this step we are going to count all records with ",(0,a.yg)("inlineCode",{parentName:"p"},'"OPV0_dose_given": "yes"'),".\nTo add this logic, open the ",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/step-editor"},"Inspector")," and add\nthe following JOb code in the Editor:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Filter and Count OPV Dose Given\nfn(state => {\n  const opvDosesGivenCount = state.data.results.filter(\n    r => r['OPV0_dose_given'] === 'yes'\n  ).length;\n\n  return { ...state, opvDosesGivenCount };\n});\n")),(0,a.yg)("p",null,"::tip Need help writing job code? Or modifying this logic?"),(0,a.yg)("p",null,"Check out the docs on the ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/packages/common-docs"},'"common" Adaptor'),",\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/"},"configuring Steps"),", and\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/jobs/job-writing-guide"},"job-writing"),"."),(0,a.yg)("p",null,":::"),(0,a.yg)("h4",{id:"explanation-1"},"Explanation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fn"),": A function in OpenFn for more flexible job writing. It gives you the\nability to do something to the state and return transformed data to state;"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"opvDosesGivenCount"),": Counts the occurrences of 'yes' in the ",(0,a.yg)("inlineCode",{parentName:"li"},"OPV0_dose_given"),"\nfield.")),(0,a.yg)("h4",{id:"testing-1"},"Testing:"),(0,a.yg)("p",null,"Select the first step ",(0,a.yg)("inlineCode",{parentName:"p"},"Get Kobo Form Submission")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Create New Work Order"),"\nwith an empty input (",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/workflows"},"see Workflow docs")," if you need help\nwith running and testing steps). Both steps should be executed successfully and\nyou should see in the final state ",(0,a.yg)("inlineCode",{parentName:"p"},"opvDosesGivenCount: 3")," added."),(0,a.yg)("h3",{id:"step-3-map-and-load-to-dhis2"},"Step 3: Map and Load to DHIS2"),(0,a.yg)("p",null,"Create a third Step after ",(0,a.yg)("inlineCode",{parentName:"p"},"Count OPV Dose Given")," as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: ",(0,a.yg)("inlineCode",{parentName:"li"},"Map and Load to DHIS2")),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("inlineCode",{parentName:"li"},"dhis2")),(0,a.yg)("li",{parentName:"ul"},"Version: ",(0,a.yg)("inlineCode",{parentName:"li"},"v4.0.3")),(0,a.yg)("li",{parentName:"ul"},"Credential: new ",(0,a.yg)("inlineCode",{parentName:"li"},"dhis2")," credential with the following credential configuration")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "hostUrl": "https://play.dhis2.org/dev",\n  "username": "admin",\n  "password": "district"\n}\n')),(0,a.yg)("p",null,"In this Step, we want to add logic to import ",(0,a.yg)("inlineCode",{parentName:"p"},"dataValues"),' to DHIS2 to "report"\non the aggregated OPV0 immunization does count calculated in Step 2.'),(0,a.yg)("p",null,"To do so, open the ",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/step-editor"},"Inspector"),", add the following\nJob code in the Editor:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// Import to DHIS2\ncreate('dataValueSets', state => ({\n  dataSet: 'BfMAe6Itzgt', // Child Health\n  period: '202402', // Feb 2024\n  orgUnit: 'DiszpKrYNg8', // Ngelehun CHC\n  dataValues: [\n    {\n      categoryOptionCombo: 'Prlt0C1RF0s', //Fixed <1yr\n      dataElement: 'x3Do5e7g4Qo', // OPV0 doses given\n      value: state.opvDosesGivenCount, //# of OPV0 doses given\n    },\n  ],\n}));\n")),(0,a.yg)("p",null,"::tip Need help writing job code? Or modifying this logic?"),(0,a.yg)("p",null,"Check out the docs on the ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/dhis2"},'"dhis2" Adaptor'),",\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/steps/"},"configuring Steps"),", and\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/jobs/job-writing-guide"},"job-writing"),"."),(0,a.yg)("p",null,":::"),(0,a.yg)("h4",{id:"explanation-2"},"Explanation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"create('dataValueSets', {...})"),": This OpenFn function is used to create a new\ndatavalueset in DHIS2."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dataSet"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"completeDate"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"period"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"orgUnit"),": Details of the datavalueset."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dataValues"),": An array containing data elements and their corresponding\nvalues.")),(0,a.yg)("h4",{id:"testing-2"},"Testing"),(0,a.yg)("p",null,"Save your changes then navigate to the first step(Get Kobo Form Submission) and\ncreate an empty input ",(0,a.yg)("inlineCode",{parentName:"p"},"{}")," then click ",(0,a.yg)("inlineCode",{parentName:"p"},"Create New Work Order")," button to run the\nworkflow. All steps should be executed successful and you should see the\n",(0,a.yg)("inlineCode",{parentName:"p"},"OPV0 doses given")," updated in DHIS2. See ",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/workflows"},"Workflow docs"),"\nif you need help running or testing Workflows."),(0,a.yg)("h3",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"Congratulations! You've successfully created an OpenFn workflow to automate the\nprocess of fetching form submissions from Kobotoolbox, calculated the aggregated\ncount of OPV doses given to beneficiaries, and reporting this count as\n",(0,a.yg)("inlineCode",{parentName:"p"},"dataValues")," to DHIS2."),(0,a.yg)("admonition",{title:"Are you blocked? Have questions?",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Reminder to watch the video (",(0,a.yg)("em",{parentName:"p"},"coming soon!"),") or post on the\n",(0,a.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"Community")," to ask for help!")))}g.isMDXComponent=!0}}]);