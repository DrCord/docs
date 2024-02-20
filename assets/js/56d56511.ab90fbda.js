"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46878],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(a),c=o,u=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var n=a(58168),o=(a(96540),a(15680));const r={sidebar_label:"CommCare to PostgreSQL",title:"Syncing your CommCare form submissions to a PostgreSQL database"},i=void 0,s={unversionedId:"tutorials/commcare-to-db",id:"tutorials/commcare-to-db",title:"Syncing your CommCare form submissions to a PostgreSQL database",description:"Before starting this tutorial please make sure:",source:"@site/docs/tutorials/commcare-to-db.md",sourceDirName:"tutorials",slug:"/tutorials/commcare-to-db",permalink:"/documentation/tutorials/commcare-to-db",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/tutorials/commcare-to-db.md",tags:[],version:"current",frontMatter:{sidebar_label:"CommCare to PostgreSQL",title:"Syncing your CommCare form submissions to a PostgreSQL database"},sidebar:"docs",previous:{title:"Kobo to DHIS2",permalink:"/documentation/kobo-to-dhis2"},next:{title:"Workflows",permalink:"/documentation/build/workflows"}},l={},g=[{value:"Getting started",id:"getting-started",level:2},{value:"Getting data from CommCare",id:"getting-data-from-commcare",level:2},{value:"Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service",id:"option-1-webhook-to-forward-cases-andor-forms-in-real-time-from-commcare-to-openfn-using-rest-service",level:3},{value:"Option 2: Extracting Commcare data via the REST API",id:"option-2-extracting-commcare-data-via-the-rest-api",level:3},{value:"Set up a workflow using Option 1",id:"set-up-a-workflow-using-option-1",level:3},{value:"Transforming and loading CommCare data to a PostgreSQL database",id:"transforming-and-loading-commcare-data-to-a-postgresql-database",level:2},{value:"Time to test!",id:"time-to-test",level:2}],p={toc:g},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Before starting this tutorial please make sure:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You have signed up for ",(0,o.yg)("a",{parentName:"li",href:"http://openfn.org"},"OpenFn.org")," (it takes less than a\nminute!)"),(0,o.yg)("li",{parentName:"ul"},"You have checked out our glossary and have an understanding of basic OpenFn\nand API terminology. Check out the pages below to get started",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/documentation/get-started/terminology"},"OpenFn Concepts")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/documentation/get-started/glossary"},"A glossary for data integration")))),(0,o.yg)("li",{parentName:"ul"},"You have a CommCare application with at least one form configured. This is\nyour source system."),(0,o.yg)("li",{parentName:"ul"},"You have a PostgreSQL database configured. This is your destination system.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"If you don\u2019t have a CommCare application or PostgreSQL database setup, you can\nalso follow along with the prebuilt solution. Follow along at the links below:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing"},"Mapping specifications document")),(0,o.yg)("li",{parentName:"ol"},"Commcare application to download:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Username: testuser"),(0,o.yg)("li",{parentName:"ul"},"Password: 123")))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"install_cc_app",src:a(46087).A,width:"852",height:"466"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://analytics.openfn.org/public/question/095449a9-5696-463c-a4fb-24614c9f08a5"},"Public report that shows records in the PostgreSQL database"))),(0,o.yg)("h2",{id:"getting-started"},"Getting started"),(0,o.yg)("p",null,"In this walkthrough, we will be setting up an ",(0,o.yg)("strong",{parentName:"p"},"automatic data sync between\nCommCare and a PostgreSQL database"),". We will be syncing submissions coming from\na CommCare ",(0,o.yg)("inlineCode",{parentName:"p"},"Maternal and Newborn Health")," application that has a\n",(0,o.yg)("inlineCode",{parentName:"p"},"Register a New Patient")," form."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Whenever a CommCare user registers a new patient, the patient details will\nautomatically be synced to an already configured PostgreSQL database to enable\nreal-time monitoring and analytics on data collected in the field. For example,\nthis database can quickly be connected to a dashboard that collects aggregate\ndata on patients registered!")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"cc-postgres",src:a(68135).A,width:"1144",height:"246"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"This integration can be broken up into two parts:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Getting data from your source system into OpenFn to trigger your workflow "),(0,o.yg)("li",{parentName:"ol"},"Transforming and loading this data to your destination system")),(0,o.yg)("p",null,"\u2026 let\u2019s get started!"),(0,o.yg)("h2",{id:"getting-data-from-commcare"},"Getting data from CommCare"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"There are two ways to get your CommCare form submissions in OpenFn.")),(0,o.yg)("h3",{id:"option-1-webhook-to-forward-cases-andor-forms-in-real-time-from-commcare-to-openfn-using-rest-service"},"Option 1: Webhook to forward cases and/or forms in real-time from CommCare to OpenFn using REST service"),(0,o.yg)("p",null,"CommCareHQ has a native data forwarding feature that provides a webhook/REST\nservice that can be pointed to the destination of your choice (i.e., your OpenFn\nworkflow). When a webhook is configured, any Commcare forms submitted are\n",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"automatically forwarded"))," to the designated endpoint, such as your OpenFn\nworkflow. After data forwarding is set up, it happens automatically, ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"in\nreal-time for all forms and cases")),". Learn more about configuring a webhook\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/commcare#webhook-forward-cases-andor-forms-from-commcare-to-openfn-using-rest-service"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"option1",src:a(39917).A,width:"1132",height:"572"})),(0,o.yg)("h3",{id:"option-2-extracting-commcare-data-via-the-rest-api"},"Option 2: Extracting Commcare data via the REST API"),(0,o.yg)("p",null,"CommCare provides a robust\n",(0,o.yg)("a",{parentName:"p",href:"https://confluence.dimagi.com/display/commcarepublic/List+Forms"},"REST API")," for\nextracting and loading data. This second option involves configuring a step in\nOpenFn to fetch CommCare submissions via a ",(0,o.yg)("inlineCode",{parentName:"p"},"GET")," HTTP request with parameters to\nfilter your data query. CommCare API access requires a paid CommCare plan."),(0,o.yg)("p",null,"   The main advantage of using the webhook is that your data is forwarded to the\ndestination system in real-time. However, the List Forms API is also\nadvantageous because it enables users to extract data in bulk on a scheduled\nbasis, for syncing historical data every month on the 30th, for example.\nDeciding on which option to go with depends on your business requirements."),(0,o.yg)("h3",{id:"set-up-a-workflow-using-option-1"},"Set up a workflow using Option 1"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Open up an existing project and create a new workflow"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create_new_workflow",src:a(86555).A,width:"1434",height:"672"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new \u201cWebhook\u201d trigger to schedule this extract job."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create_trigger",src:a(88651).A,width:"1432",height:"672"})),(0,o.yg)("p",null,"Make sure you have copied the webhook URL from your OpenFn workflow into CommCare. Each form submitted in CommCare will be automatically sent to OpenFn and will trigger your new workflow."),(0,o.yg)("h2",{id:"transforming-and-loading-commcare-data-to-a-postgresql-database"},"Transforming and loading CommCare data to a PostgreSQL database"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"You should have a database configured and a username provided for OpenFn to\nread and write data in your target DB tables.")," For this demo, we have\nconfigured the database\n",(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1pi_oxImakhtaCCCIENkjTPZeuyWhpFEcNmH7hfvTBgo/edit?usp=sharing"},"like this"),"\nto capture the CommCare form data. Check out the\n",(0,o.yg)("a",{parentName:"li",href:"../design/mapping-specs"},"this page"),"\nfor how to create your own ",(0,o.yg)("inlineCode",{parentName:"li"},"mapping specification document")," to map data\nelements to be exchanged.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"db_config",src:a(48566).A,width:"1122",height:"564"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a new step with the ",(0,o.yg)("inlineCode",{parentName:"strong"},"postgresql")," adaptor for loading the CommCare\ndata into your destination database."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"configure_job_postgres",src:a(94904).A,width:"1434",height:"672"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Create a PostgreSQL credential which will be used by the step to\nauthenticate with the database."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"add_credential_postgres",src:a(93961).A,width:"1440",height:"672"})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Writing the step:")," For this step we will use the upsert operation to\ninsert/update records in the destination ",(0,o.yg)("inlineCode",{parentName:"li"},"patient")," table and use ",(0,o.yg)("inlineCode",{parentName:"li"},"patient_id")," as\nthe primary key. An ",(0,o.yg)("inlineCode",{parentName:"li"},"upsert")," will update an existing row if a specified value\nalready exists in a table, and insert a new row if the specified value doesn't\nalready exist.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"upsert('patient', 'ON CONSTRAINT patient_pk', {\n  patient_id: dataValue('data.patient_name'),\n  patient_name: dataValue('data.patient_name'),\n  village_name: dataValue('data.village_name'),\n  last_menstrual_period: dataValue('data.last_menstrual_period'),\n  expected_delivery_date: dataValue('data.expected_delivery_date'),\n  children_alive: dataValue('data.children_alive'),\n  living_children: dataValue('data.living_children'),\n  feeling_sick: dataValue('data.feeling_sick'),\n  total_children: dataValue('data.Total_children'),\n  risk_level: dataValue('data.Risk_level'),\n});\n")),(0,o.yg)("p",null,"Feel free to modify the code above to reflect your CommCare and database\nconfiguration according to your mapping specifications. "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"create-job",src:a(64231).A,width:"1440",height:"672"})),(0,o.yg)("h2",{id:"time-to-test"},"Time to test!"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Submit a form in CommCare"),(0,o.yg)("li",{parentName:"ol"},"If you have enabled data forwarding, your workflow should should be triggered automatically."),(0,o.yg)("li",{parentName:"ol"},"If you have not enabled data forwarding and set up a FETCH step instead, run\nthe step (ensure the ",(0,o.yg)("inlineCode",{parentName:"li"},"received_on_start")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"received_on_start")," dates in the\nFETCH are appropriate)."),(0,o.yg)("li",{parentName:"ol"},"Run the FETCH step. If the fetch step passes, the \u201cLoad to DB\u201d step should\nautomatically run."),(0,o.yg)("li",{parentName:"ol"},"Check out the ",(0,o.yg)("inlineCode",{parentName:"li"},"History")," and ensure that the work order was successful.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"activity_history_final",src:a(30147).A,width:"2878",height:"1000"})),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"What do do if your run fails:")),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"Open the run to inspect the error log"),(0,o.yg)("li",{parentName:"ol"},'Adjust the step to resolve the issue and re-run the step as needed by clicking the\n"rerun" button in ',(0,o.yg)("inlineCode",{parentName:"li"},"History"),' or the "Re-run from here" button on the ',(0,o.yg)("inlineCode",{parentName:"li"},"Inspector")),(0,o.yg)("li",{parentName:"ol"},"Check out the ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/postgresql/#common-errors"},"PostgreSQL common errors"),"\npage for more details!"))),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Finally, refresh your database and check out the new submission data!"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"metabase",src:a(73109).A,width:"2826",height:"260"})),(0,o.yg)("p",null,"While this guide is specifically for PostgreSQL databases, you can generally\nfollow these same steps for other database types (e.g., MS SQL or MySQL)\u2014simply\nleverage a different adaptor in your step configuration."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Other resources to check out:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"OpenFn Job Library"),(0,o.yg)("li",{parentName:"ol"},"OpenFn Docs \u2018App\u2019 pages for CommCare and Postgres")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Any questions? Comments? New configuration ideas? Please reach out to us with\na post on the ",(0,o.yg)("a",{parentName:"strong",href:"https://community.openfn.org/"},"OpenFn Community")," forum.")))}m.isMDXComponent=!0},30147:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/activity_history_success-4bf88be6755cf5971a22c184fb9851de.png"},68135:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cc-postgres-0e43a3ec2fd55882ec72a4c7103bb700.png"},94904:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-job-1802166d34fd4c970f131953ec9cdc7a.gif"},86555:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create-new-workflow-fcc48e631f8d54dd06e72545ba5a9d34.gif"},64231:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_job_db-28c806e45bdfcaca64fe9205bd4d87a4.gif"},88651:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_trigger-72300266a5f05029845bfaa1c77772f8.gif"},48566:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/db_config-b22df6f0bbefc59968ed1f89559088b2.png"},46087:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/install_cc_app-a0db259c1350b908fcce5c2ab00d575a.png"},73109:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/metabase-d197691432643693b52d5e5bb0b288db.png"},39917:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/option1-fce1d1c17260348267c6d93c42e93905.png"},93961:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/postgresql-cred-b343dbf799802b766f489fcc213350af.gif"}}]);