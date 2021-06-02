(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6110],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55427:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],s={title:"Project Walk-through"},l={unversionedId:"build/example-build",id:"build/example-build",isDocsHomePage:!1,title:"Project Walk-through",description:"On this page, we will demonstrate how to build a real world integration using",source:"@site/docs/build/example-build.md",sourceDirName:"build",slug:"/build/example-build",permalink:"/documentation/build/example-build",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/example-build.md",version:"current",frontMatter:{title:"Project Walk-through"},sidebar:"docs",previous:{title:"Quick-start",permalink:"/documentation/getting-started/quick-start"},next:{title:"The Integration Toolkit",permalink:"/documentation/getting-started/integration-toolkit"}},c=[{value:"Step 1 - Login to your project dashboard",id:"step-1---login-to-your-project-dashboard",children:[]},{value:"Step 2 - Add a new project",id:"step-2---add-a-new-project",children:[]},{value:"Step 3 - Enter your new project space",id:"step-3---enter-your-new-project-space",children:[]},{value:"Step 4 - Connect your source application(s)",id:"step-4---connect-your-source-applications",children:[]},{value:"Step 5 - Connect your destination application(s)",id:"step-5---connect-your-destination-applications",children:[]},{value:"Step 6 - Create your job trigger(s)",id:"step-6---create-your-job-triggers",children:[]},{value:"Step 7 - Create your job(s)",id:"step-7---create-your-jobs",children:[]},{value:"Step 8 - Activate &quot;Auto-Process&quot;",id:"step-8---activate-auto-process",children:[]},{value:"Step 9 - Testing your automation",id:"step-9---testing-your-automation",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this page, we will demonstrate how to build a real world integration using\nthe OpenFn platform."),(0,r.kt)("p",null,"In this sample integration project, a KoboToolBox form submission will trigger\nOpenFn jobs which do the following in real-time:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new contact in ",(0,r.kt)("a",{parentName:"li",href:"https://www.salesforce.com"},"Salesforce")),(0,r.kt)("li",{parentName:"ol"},"Add a new tracked entity instance to ",(0,r.kt)("a",{parentName:"li",href:"https://www.dhis2.org"},"dhis2")),(0,r.kt)("li",{parentName:"ol"},"A new row created in ",(0,r.kt)("a",{parentName:"li",href:"https://sheets.google.com"},"Google Sheets"))),(0,r.kt)("h3",{id:"step-1---login-to-your-project-dashboard"},"Step 1 - Login to your project dashboard"),(0,r.kt)("p",null,"Create an account on OpenFn and login to your project dashboard."),(0,r.kt)("p",null,"If this is the first time you are logging into OpenFn, you will notice that a\nsample project has already been created for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Dashboard on 1st Login",src:n(84485).Z})),(0,r.kt)("h3",{id:"step-2---add-a-new-project"},"Step 2 - Add a new project"),(0,r.kt)("p",null,"Add a new project that will contain your desired automations/workflow."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add new project",src:n(79622).Z})),(0,r.kt)("h3",{id:"step-3---enter-your-new-project-space"},"Step 3 - Enter your new project space"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," on your new project to get started."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click view",src:n(86898).Z})),(0,r.kt)("h3",{id:"step-4---connect-your-source-applications"},"Step 4 - Connect your source application(s)"),(0,r.kt)("p",null,"Connect KoboToolbox to your OpenFn inbox, so that every time a survey form is\nsubmitted, OpenFn receives a copy of it."),(0,r.kt)("p",null,"Copy your OpenFn inbox url and then register a new REST service in KoboToolbox."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"inbox url",src:n(2452).Z})),(0,r.kt)("p",null,"For our example, the REST Service information we entered looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kobo rest service",src:n(93061).Z})),(0,r.kt)("h3",{id:"step-5---connect-your-destination-applications"},"Step 5 - Connect your destination application(s)"),(0,r.kt)("p",null,"Add your credentials for the destination services that you would like the\nKoboToolbox data to flow to. Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials")," section in your\nproject space and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," on the bottom right of the screen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add credential",src:n(54078).Z})),(0,r.kt)("h4",{id:"add-salesforce-credentials"},"Add SalesForce credentials"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Salesforce Credentials",src:n(18676).Z})),(0,r.kt)("h4",{id:"add-dhis2-credentials"},"Add dhis2 credentials"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhis2 Credentials",src:n(98944).Z})),(0,r.kt)("h4",{id:"add-google-sheets-credentials"},"Add Google Sheets credentials"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"google sheets credentials",src:n(6203).Z})),(0,r.kt)("h3",{id:"step-6---create-your-job-triggers"},"Step 6 - Create your job trigger(s)"),(0,r.kt)("p",null,"Create your trigger for the automation."),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger")," section in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"navigate to trigger",src:n(46102).Z})),(0,r.kt)("p",null,"Enter your desired trigger's configuration. :::important Note, that your project\nspace can have several different triggers that govern when/if your jobs are\nperformed. ::: In this example, we would like for our jobs to trigger whenever a\nnew Kobo form is submitted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trigger example",src:n(95356).Z})),(0,r.kt)("h3",{id:"step-7---create-your-jobs"},"Step 7 - Create your job(s)"),(0,r.kt)("p",null,"Create your project's jobs."),(0,r.kt)("h4",{id:"salesforce"},"Salesforce"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"salesforce job",src:n(87426).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"create('Contact', {\n  FirstName: dataValue('body.Patient_name'),\n  LastName: dataValue('body.Last_Name_of_Patient'),\n  Age__c: dataValue('body.Age'),\n  Sex__c: dataValue('body.Sex'),\n  Case_ID__c: dataValue('body.National_ID'),\n  Comments__c: dataValue('body.Comments'),\n});\n")),(0,r.kt)("h4",{id:"dhis2"},"dhis2"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhis2 job",src:n(15221).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createTEI({\n  orgUnit: 'GD7TowwI46c',\n  trackedEntityType: 'MCPQUTHX1Ze',\n  attributes: [\n    {\n      attribute: 'he05i8FUwu3', // case id\n      value: dataValue('body._id'),\n    },\n    {\n      attribute: 'sB1IHYu2xQT', // first name\n      value: dataValue('body.Patient_name'),\n    },\n    {\n      attribute: 'ENRjVGxVL6l', // last name\n      value: dataValue('body.Last_Name_of_Patient'),\n    },\n    {\n      attribute: 'Rv8WM2mTuS5', // age\n      value: dataValue('body.Age'),\n    },\n  ],\n  enrollments: [\n    {\n      orgUnit: 'GD7TowwI46c',\n      program: 'DM9n1bUw8W8',\n      programState: 'sAV9jAajr8x',\n      enrollmentDate: dataValue('body.Date'),\n      incidentDate: dataValue(\n        'body.Covid_19_suspected_criteria/Speciman_Collection_date'\n      ),\n    },\n  ],\n});\n")),(0,r.kt)("h4",{id:"google-sheets"},"Google Sheets"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"google sheets job",src:n(70640).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',\n  range: 'COVID-19 Cases!A2',\n  values: state => {\n    const kobo = state.data.body;\n\n    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));\n\n    return [\n      [\n        kobo['National_ID'],\n        kobo['Patient_name'],\n        kobo['Last_Name_of_Patient'],\n        kobo['Sex'],\n        kobo['Age'],\n        kobo['Comments'],\n        kobo['Date'],\n      ],\n    ];\n  },\n});\n")),(0,r.kt)("h3",{id:"step-8---activate-auto-process"},'Step 8 - Activate "Auto-Process"'),(0,r.kt)("p",null,"Turn on auto-process for all of this automation's jobs, so that they\nautomatically run each time a new kobo form is submitted.\n",(0,r.kt)("img",{alt:"dhis2 job",src:n(41727).Z})),(0,r.kt)("h3",{id:"step-9---testing-your-automation"},"Step 9 - Testing your automation"),(0,r.kt)("p",null,"Now it's time to test your integration. (Work in progress...)"))}p.isMDXComponent=!0},84485:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1.1_new_account_dashboard-9b48511aae2b8b63fb7d5d784021ac43.png"},79622:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2.1_add_new_project-340bc81d856ff7d3f1d8cf39776267c9.gif"},86898:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3.1_click_view-a3c861393091d69719fdee5794cf47ce.gif"},2452:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4.1_inbox_url_copy_paste-afc34cedea66ca4327f097260a6689b0.gif"},93061:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4.2_rest_service_kobo-c5c76e674503c6fed8af1281790bae7b.png"},54078:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5.1_add_credential-576a996e08d909f0a33634af3d16a03d.gif"},18676:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5.2_salesforce_credentials-e91c6c22d8d70838b540f9645c5de145.png"},98944:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5.3_dhis2_credentials-4ad6f7b2e1718776c79a058edab0f994.png"},6203:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5.4_google_sheets_credential-aaf879654ac328f66b69cc7e824938eb.gif"},46102:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6.1_navigate_to_trigger-e6ad1cc76c67af439efdfb5743f970de.gif"},95356:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6.2_trigger_example-7959e727a89a5a466623a12c4891fef0.png"},87426:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7.1_salesforce_job-2fba37e30244f4338f6c9637cf972a4e.png"},15221:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7.2_dhis2_job-530a5cdf8af0b72da4834a76f4972af8.png"},70640:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7.3_google_sheet_job-93b4654dc2b916890ef7642a9720d00a.png"},41727:function(e,t,n){"use strict";t.Z=n.p+"assets/images/8.1_autoprocess_on-e51c96f48845ca3cc6e172ba55f49f9c.gif"}}]);