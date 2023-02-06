"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={title:"Frequently Asked Questions",sidebar_label:"FAQs"},i=void 0,s={unversionedId:"faqs",id:"faqs",title:"Frequently Asked Questions",description:"Data integration, interoperability, and workflow automation can be confusing",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/documentation/faqs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/faqs.md",tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions",sidebar_label:"FAQs"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/documentation/release-notes"},next:{title:"Documentation Roadmap",permalink:"/documentation/roadmap"}},p={},l=[{value:"What is OpenFn?",id:"what-is-openfn",level:2},{value:"Who uses OpenFn?",id:"who-uses-openfn",level:2},{value:"What is a <code>job</code>?",id:"what-is-a-job",level:2},{value:"What is a <code>run</code>?",id:"what-is-a-run",level:2},{value:"Is OpenFn open-source?",id:"is-openfn-open-source",level:2},{value:"How much does OpenFn cost?",id:"how-much-does-openfn-cost",level:2},{value:"Design &amp; implementation costs",id:"design--implementation-costs",level:3},{value:"Ongoing costs",id:"ongoing-costs",level:3},{value:"Can I trial the platform?",id:"can-i-trial-the-platform",level:2},{value:"How reliable is the hosted service?",id:"how-reliable-is-the-hosted-service",level:2},{value:"Can OpenFn integrate with my custom app?",id:"can-openfn-integrate-with-my-custom-app",level:2},{value:"Does OpenFn support two-way syncing?",id:"does-openfn-support-two-way-syncing",level:2},{value:"Do I need to know how to code?",id:"do-i-need-to-know-how-to-code",level:2},{value:"Where is my data stored?",id:"where-is-my-data-stored",level:2},{value:"Is my data secure?",id:"is-my-data-secure",level:2},{value:"What if I have more questions?",id:"what-if-i-have-more-questions",level:2}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data integration, interoperability, and workflow automation can be confusing\nsubjects. Not to mention the fact that there are lots of different terms and\nways of talking about the same concepts. We get it. Here are a few questions\nthat come up a lot."),(0,o.kt)("h2",{id:"what-is-openfn"},"What is OpenFn?"),(0,o.kt)("p",null,"OpenFn is an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"integration platform as a service")),". This means our prime\ndirective is to move data quickly and securely between different software\nsystems. In most cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A source application sends ",(0,o.kt)("strong",{parentName:"p"},"messages")," to your project\u2019s ",(0,o.kt)("strong",{parentName:"p"},"inbox")," when\nsomething happens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Jobs")," will be triggered, based on your ",(0,o.kt)("strong",{parentName:"p"},"filters"),", and use the data in\nthose messages to attempt specific actions in destination systems.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"logs")," are recorded so you can see precisely what happened and when and\nwhere it happened to take action in the event of a failed attempt\u2014like\nediting the job or even the source message and trying it again."))),(0,o.kt)("h2",{id:"who-uses-openfn"},"Who uses OpenFn?"),(0,o.kt)("p",null,"OpenFn is used by organizations big and small, but the individuals interacting\nwith the platform range from system administrators to Javascript developers.\nWith a basic understanding of Javascript, the flexibility of the platform is\nalmost limitless."),(0,o.kt)("h2",{id:"what-is-a-job"},"What is a ",(0,o.kt)("inlineCode",{parentName:"h2"},"job"),"?"),(0,o.kt)("p",null,"OpenFn automation centers around jobs, which define the specific series of tasks\nor database actions OpenFn should perform. They can be set to be activated\n(triggered) at certain time intervals or when data matching specified criteria\nis received. You can think of jobs as a set of instructions you might give a\ndata entry staff member (e.g., create a new Patient record in OpenMRS when a\nform containing a newly registered client is received from CommCare, export data\nto DHIS2 every week on Friday 11pm, send SMS with payment confirmation number\nwhen payment confirmation message is received etc.)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jobs are fully configurable and reusable. They can also be chained together to\ncreate ",(0,o.kt)("a",{parentName:"p",href:"jobs/multiple-operations"},"multi-step automation")," flows, two-way syncs.\nand to keep data consistent between multiple applications (using multi-app Saga\npatterns). You can read more on two-way synching below.")),(0,o.kt)("h2",{id:"what-is-a-run"},"What is a ",(0,o.kt)("inlineCode",{parentName:"h2"},"run"),"?"),(0,o.kt)("p",null,"A run is each individual execution of a job. Imagine that a job is configured to\ncreate a new patient in OpenMRS whenever a case is opened in CommCare. Over the\nnext week, if 5 cases are opened in CommCare, you\u2019ll see 5 different runs of\nthis one job in OpenFn. If 4 runs are successful and one has failed, you\u2019ll see\n4 new patients in OpenMRS, and your system administrator will have been notified\nthat one of those patients couldn\u2019t be created (or whatever more robust\nerror-handling you\u2019ve set up will take place.)"),(0,o.kt)("p",null,"Note that there\u2019s not always a 1-to-1 mapping between runs and the real-world\nthings you\u2019re working with. I might define a job that gets all updated event\ndata from DHIS2 for the last 2 weeks and publishes it to a public map using\nCartoDB. This job will be triggered at specified time intervals, every 2 weeks\nin this case, and after a month, we\u2019ll only see 2 runs in OpenFn (that\u2019s one run\nevery two weeks). Each run will have succeeded or failed, and each one might\nhave processed thousands of events from DHIS2."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For one last example, a single form submission in Open Data Kit might trigger a\njob that creates new contacts and attendance records in Salesforce. In this\ncase, you\u2019ll find a run for each ODK form submission, but each run will create\nlots of different records in Salesforce\u2014specifically, at least one contact and N\nnumber of attendance records, corresponding to the number of items in your ODK\nform\u2019s \u201cattendance repeat group\u201d.")),(0,o.kt)("h2",{id:"is-openfn-open-source"},"Is OpenFn open-source?"),(0,o.kt)("p",null,"OpenFn is a suite of different technologies with different licenses. We have\nbuilt and maintain dozens of open-source data transformation and API wrapper\nsoftware packages. Those are, for the most part, licensed under the ",(0,o.kt)("strong",{parentName:"p"},"LGPL")," and\ncan be used freely to extract, transform, and load data from a command line, or\nas part of another software application."),(0,o.kt)("p",null,"OpenFn also hosts a proprietary web-application that ties these tools together\n(",(0,o.kt)("a",{parentName:"p",href:"http://www.openfn.org"},"www.openfn.org"),") into an out-of-the-box integration management platform. This\nplatform is open-core, providing the powerful ETL tools that sit at the heart of\nthe proprietary OpenFn.org iPaaS as free and open-source software (FOSS). All of\nthe jobs running on OpenFn.org, as well as all of the underlying adaptors, can\nbe run offline using our FOSS tools."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"OpenFn will also soon offer an enhanced FOSS implementation option called\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/"},"OpenFn/microservice"),". This FOSS\nmicroservice approach is currently in development with funding from the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.osc.dial.community/"},"DIAL Open Source Center"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square"),", and the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"},"FCDO"),"\n(formerly DFID)."),(0,o.kt)("p",{parentName:"admonition"},"Please note that this pathway does not provide the entire OpenFn platform as\nfree and open source software (FOSS). In situations where a particular partner\nor government is unable to use the proprietary platform (though it can be\ndeployed on local servers with an unlimited use license), this approach ensures\nthat all jobs, triggers, and project configuration can be exported from\nOpenFn.org and used, in conjunction with OpenFn's FOSS ETL tools to deploy a\nmicroservices-style implementation which incurs zero licence costs and provides\nthe basic data processing that OpenFn's platform does. While at the outset there\nwill be no web interface and no ability to reprocess messages, etc., these\nfeatures could be built by partners in time to replace the features of the\nOpenFn platform. I.E., none of the initial investment in OpenFn will be lost if\nthe partners choose to build their own, fully open-source integration platform\nbased on our powerful open-source ETL tools.")),(0,o.kt)("h2",{id:"how-much-does-openfn-cost"},"How much does OpenFn cost?"),(0,o.kt)("h3",{id:"design--implementation-costs"},"Design & implementation costs"),(0,o.kt)("p",null,"OFG offers a range of packages to ensure successful first-time implementations,\nwhich include integration consulting, design, configuration, and\ncapacity-building. Typical engagements take 1-5 days to complete, and our most\npopular package is the Integration QuickStart, in which we spend 1 week to\ndesign and configure ~5 integration flows end-to-end and provide administrative\ntraining to your staff for $5,000."),(0,o.kt)("h3",{id:"ongoing-costs"},"Ongoing costs"),(0,o.kt)("p",null,"OpenFn.org offers a free plan for users seeking to trial the platform or\nimplement projects handling low data volumes (up to 100 runs/month). Usage of\nOpenFn.org, the proprietary integration-platform-as-a-service (iPaaS), incurs\nongoing costs, which are largely dependent on the expected data volumes to be\nprocessed. OpenFn offers monthly subscriptions, enterprise licenses for annual\nand multi-year agreements, as well as unlimited and local deployment options.\nContact ",(0,o.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," to learn more and for a tailored cost estimate."),(0,o.kt)("p",null,"There are also available DIY options, as well as bespoke training services to\ndevelop your capacity to implement and manage OpenFn independently."),(0,o.kt)("h2",{id:"can-i-trial-the-platform"},"Can I trial the platform?"),(0,o.kt)("p",null,"Yes. As a matter of fact, you can use it for free, forever."),(0,o.kt)("p",null,"OpenFn.org offers a free plan to all users\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"sign up here"),"). Try it out using OpenFn Docs,\nor contact our team for a free consultation and help getting started. Change\nyour OpenFn plan at any time (no lock-in!), or contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," to\nlearn more about annual, enterprise, and unlimited licenses."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"At low volumes, or for prototyping, you can use the hosted platform for free\nforever.")),(0,o.kt)("h2",{id:"how-reliable-is-the-hosted-service"},"How reliable is the hosted service?"),(0,o.kt)("p",null,"OpenFn has harnessed the extreme stability and scalability of Erlang to\ncoordinate these actions and provide users with email alerts, project management\ntools, and an online job writing IDE."),(0,o.kt)("p",null,"We constantly monitor our own status with independent infrastructure at\n",(0,o.kt)("a",{parentName:"p",href:"https://status.openfn.org"},"status.openfn.org"),". You can subscribe to\nnotifications there or follow ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/openfnstatus"},"@openfnstatus"),"."),(0,o.kt)("p",null,"We've been delivering this service continuously since 2014."),(0,o.kt)("h2",{id:"can-openfn-integrate-with-my-custom-app"},"Can OpenFn integrate with my custom app?"),(0,o.kt)("p",null,"Yes, OpenFn can integrate with ",(0,o.kt)("em",{parentName:"p"},"any")," application."),(0,o.kt)("p",null,"If your technology has a REST endpoint or webhooks service, it will likely work\nright out of the box. This covers most web applications (e.g., CommCare, Kobo,\nODK, DHIS2, Salesforce, MS Dynamics, MPesa, etc.). OpenFn can also integrate\nwith most databases, like Postgres, MySql, and Mongo, custom applications,\nlegacy government systems, and can even parse CSV files\u2013so long as these can be\naccessed from an online location. Read more about\n",(0,o.kt)("a",{parentName:"p",href:"source-apps"},"connecting source applications"),", or check out the Apps page for\napplications widely implemented."),(0,o.kt)("p",null,'We offer pre-built connectors (called "adaptors") for our users\' most popular\napps to make the integration setup quicker and more user-friendly when\nconnecting with these tools. For example, users can implement language-http to\nsend basic HTTP requests to any web application, or implement language-dhis2 to\nautomatically handle DHIS2 authentication and access helper functions like\nfetchData()to export DHIS2 datasets.'),(0,o.kt)("h2",{id:"does-openfn-support-two-way-syncing"},"Does OpenFn support two-way syncing?"),(0,o.kt)("p",null,"Yes, OpenFn can support two-way syncing of applications. Utilizing\n",(0,o.kt)("a",{parentName:"p",href:"build/triggers#flow-triggers"},"Flow Triggers"),", OpenFn jobs can be chained\ntogether to facilitate real-time two-way data sync,\n",(0,o.kt)("a",{parentName:"p",href:"jobs/multiple-operations"},"multi-step automation")," and data cleaning processes,\nand complex branching logic. Users can also implement bi-directional data syncs,\nas well as complex Saga Patterns to implement a transaction that spans multiple\napplications by configuring webhooks in their endpoint applications and\nperforming updates in both systems when events take place in either."),(0,o.kt)("h2",{id:"do-i-need-to-know-how-to-code"},"Do I need to know how to code?"),(0,o.kt)("p",null,"No, but it helps to have written a formula in MS Excel! Many OpenFn users are\nfamiliar with data, not development, and quickly get comfortable with OpenFn\njobs."),(0,o.kt)("p",null,"If your project is leveraging an OpenFn adaptor (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"language-dhis2"),"), you\nhave access to pre-built helper functions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"getPatient"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),") so that\nyou don\u2019t need to write custom code, and rather can use OpenFn documentation or\nexisting job scripts to write your own job. See OpenFn Github for inspiration\nand open-source job code shared by OpenFn users. You\u2019ll notice that these\nfunctions work in the same way that functions do in Excel\u2026 ",(0,o.kt)("inlineCode",{parentName:"p"},"sum(A1, A2, A3)")),(0,o.kt)("p",null,"Jobs can be written and extended using raw Javascript for advanced data cleaning\nand manipulation. Therefore, you may want to implement Javascript to achieve\nspecific requirements or to extend existing OpenFn adaptors, which are\nopen-source!"),(0,o.kt)("h2",{id:"where-is-my-data-stored"},"Where is my data stored?"),(0,o.kt)("p",null,"OpenFn is a middleware provider rather than a data storage system. We move\ninformation from system A to system B, and integrations can be set up to be\ncompliant with GDPR, HIPAA, and other policies. To make auditing and\nreprocessing easy, OpenFn temporarily stores message data and job run history,\nbut we're not the single source of truth nor the final resting point for these\ndata. When organizations choose to use our hosted OpenFn platform at OpenFn.org,\nno data processed by OpenFn is stored locally and our platform runs on the\nGoogle Cloud Platform (GCP). Read more on our\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"Compliance")," page."),(0,o.kt)("p",null,"OpenFn.org currently offers hosting on U.S. and Swiss-based cloud servers.\nOpenFn local and in-country cloud deployments are also available upon request.\nContact ",(0,o.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," to learn more."),(0,o.kt)("h2",{id:"is-my-data-secure"},"Is my data secure?"),(0,o.kt)("p",null,"Yes, OpenFn prioritizes security, stability, and scalability (what we call\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust#s3"},"S\xb3"),") above all else, and many of our users\nimplement OpenFn to comply with GDPR, HIPAA, and other policies. Read more on\nour ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust"},"Trust"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"Compliance"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/privacy"},"Privacy")," pages."),(0,o.kt)("p",null,"OpenFn.org runs on the Google Cloud Platform, an infrastructure protected by\nmore than 500 top experts in information, application, and network security. For\norganizations with specific compliance and data governance requirements, OpenFn\ncan also be deployed on designated local- or cloud-infrastructure."),(0,o.kt)("h2",{id:"what-if-i-have-more-questions"},"What if I have more questions?"),(0,o.kt)("p",null,"Open Function Group is a team of ICT4D and integration specialists, waiting to\nhelp you get started. Click the chat icon in the bottom right hand corner of\nthis page to talk now. Or Email our team at ",(0,o.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"admin@openfn.org"),", chat us on\nOpenFn.org, or post a question in our\n",(0,o.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"Community Forum"),"."))}d.isMDXComponent=!0}}]);