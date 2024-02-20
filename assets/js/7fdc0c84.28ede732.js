"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17464],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||a;return t?o.createElement(m,s(s({ref:n},c),{},{components:t})):o.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(58168),r=(t(96540),t(15680));const a={title:"Versions of the Portability Proposal"},s=void 0,i={unversionedId:"deploy/portability-versions",id:"deploy/portability-versions",title:"Versions of the Portability Proposal",description:"OpenFn is currently designing a portable project configuration schema that can",source:"@site/docs/deploy/portability-versions.md",sourceDirName:"deploy",slug:"/deploy/portability-versions",permalink:"/documentation/deploy/portability-versions",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/portability-versions.md",tags:[],version:"current",frontMatter:{title:"Versions of the Portability Proposal"},sidebar:"docs",previous:{title:"Portability",permalink:"/documentation/deploy/portability"},next:{title:"History",permalink:"/documentation/monitor-history/activity-history"}},l={},p=[{value:"Proposal v4",id:"proposal-v4",level:2},{value:"Proposal v3",id:"proposal-v3",level:2},{value:"Proposal v2",id:"proposal-v2",level:2},{value:"Proposal v1",id:"proposal-v1",level:2}],c={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"OpenFn is currently designing a portable project configuration schema that can\nbe used to import or export projects between OpenFn/platform and OpenFn/engine."),(0,r.yg)("h2",{id:"proposal-v4"},"Proposal v4"),(0,r.yg)("p",null,"The portability specification v4 defines how entire projects (groups of\nworkflows with their associated triggers, credentials and jobs) can be\nrepresented as code. This specification has been written for\n",(0,r.yg)("a",{parentName:"p",href:"/documentation#our-products/#lightning-coming-soon"},"Lightning"),",\nthe fully open source webb app which extends the OpenFn DPG. It aims to (a)\nimprove developer experience, allowing them to build and test workflows locally;\n(b) enable version control and an audit trail of project changes; and (c) enable\nusers to port existing workflows from the OpenFn platform to Lightning."),(0,r.yg)("p",null,"This new specification has been designed and documented thanks to support from a\nDigital Square Global Goods grant."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"project.zip")," structure and files:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/globals\n   sample-clinic-map.json\n   sample-translations.json\n/workflow-a\n   job-1.js\n   job-2.js\n   job-3.js\n/workflow-b\n   job-4.js\nproject.yaml\nproject.state.yaml\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"project.yaml"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'name: "My Project" # The project name\n\nglobals: # All global constants accessible to this project\n  clinic-map: file://./globals/clinic-map.json\n  project-expense-codes: file://./globals/project-expense-codes.json\n  service-codes:\n    body:\n      m126: Medical Referral\n      g01: General Checkup\n      ps: Psycho-social Support\n\nworkflows: # All workflows in a project\n  CommCare-to-OpenMRS: #The workflow name. Workflow names won\'t have spaces\n    jobs: # All jobs/steps in a workflow\n      Coerce-to-FHIR: # The job/step name\n        trigger: webhook #webhook urls are uids so are not included\n        adaptor: language-fhir\n        enabled: true\n        credential: my-fihr-credential #looks up credential in state by its name\n        # when running locally, the credentials values are taken from the overrides file\n        # cli run workflow "CommCare-to-OpenMRS" --overrides ./keys-and-values.yaml\n        body: "file://./CommCare-to-OpenMRS/Coerce-to-FHIR.js" # each job job-body is stored in a separate file, within a folder for the whole workflow\n\n      Load-to-openmrs:\n        trigger:\n          on-success: Coerce-to-FHIR\n        adaptor: language-openmrs\n        credential: my-other-credential\n        enabled: true\n        body:\n          # no "include", but pathlike doesn\'t work: if you\'re doing a uri you need to be explicit about it\n          # default to local fs -- no numbering because too complicated if users change the order\n          "file://./CommCare-to-OpenMRS/Load-to-openmrs.js"\n\n      Send-Wrap-Up-Reports:\n        trigger:\n          on-success: Load-to-openmrs\n        enabled: true\n        adaptor: language-mailgun\n        globals:\n          - service-codes\n          - clinic-map\n        body: >\n          # this triggers a new workflow\n          fn(state => state)\n          sendEmail(state => state.emailContent)\n\n  Kobo-to-DHIS2: #This is a second workflow\n    Fetch-Kobo-Submissions:\n      trigger:\n        cron: * 5 * * *\n      enabled: true\n      adaptor: language-kobotoolbox\n      body: "file://./Kobo-to-DHIS2/Fetch-Kobo-Submissions.js"\n\n    Upload-to-DHIS2:\n      trigger:\n        on-success: Fetch-Kobo-Submissions\n      adaptor: language-kobotoolbox\n      enabled: false\n      body: "file://./Kobo-to-DHIS2/Upload-to-DHIS2.js"\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"project.state.yaml"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"project:\n  - id: '45bffee'\n    key: 'My Project'\n\nglobals:\n  - id: 'sj23n36'\n    key: 'clinic-map'\n  - id: 'bss522g'\n    key: 'project-expense-codes'\n  - id: '22aa4st'\n    key: 'service-codes'\n\nworkflows:\n  - id: 'cfd7c68'\n    key: 'CommCare-to-OpenMRS' # this is the NAME and the KEY\n  - id: 'd1ecc4f'\n    key: 'Kobo-to-DHIS2'\n\njobs:\n  - id: 'ns6yw54'\n    key: 'Coerce-to-FHIR'\n  - id: '12bs52j'\n    key: 'Load-to-openmrs'\n  - id: 'lk81hs6'\n    key: 'Send-Wrap-Up-Reports'\n\n  - id: 'sn26sh2'\n    key: 'Fetch-Kobo-Submissions'\n  - id: 'sk1722h'\n    key: 'Upload-to-DHIS2'\n\ncredentials:\n  - id: '12ms62y'\n    key: 'My FHIR Credential'\n")),(0,r.yg)("h2",{id:"proposal-v3"},"Proposal v3"),(0,r.yg)("p",null,"v3 introduces\n",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI schemes"),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"file://"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"https://"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"gcs://")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: 'file://my-job.js' # URIs may be used (e.g., https://raw.githubusercontent.com/org/repo/my-job.js)\n    adaptor: '@openfn/language-common'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      fn(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      fn(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      fn(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\ncredentials:\n  my-secret-credential:\n    username: '******' # Credential keys get exported, but values must be manually reentered\n    password: '******'\n  my-other-credential: 'file://gcp_credential.json' # And URIs may be specified directly for the credential body\n")),(0,r.yg)("h2",{id:"proposal-v2"},"Proposal v2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: >\n      registerPatient({\n        patient-id: state.data.id,\n        dob: state.data.birth\n      })\n    adaptor: '@openfn/language-openmrs'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      fn(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      fn(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      fn(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\n# Note that credential keys get copied, but values must be manually entered\n# after the export is completed.\ncredentials:\n  my-secret-credential:\n    username: '******'\n    password: '******'\n")),(0,r.yg)("h2",{id:"proposal-v1"},"Proposal v1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const project = {\n  async: true,\n  triggers: {\n    uniqueTriggerId: {\n      // trigger properties\n    },\n    otherTrigger: {\n      // other trigger properties\n    },\n  },\n  credentials: {\n    // for now, credentials will not be synced //\n    // secret1: {\n    // username: 'mamadou',\n    // pass: 'shhh',\n  },\n  staticData: {\n    // static objects that can be accessed from any job\n  },\n  jobs: {\n    payHealthWorker: { trigger: 'otherTrigger' },\n    syncToSalesforce: {\n      expression: 'uri://github.com/jobs/expresion.js',\n      trigger: 'uniqueTriggerId',\n      credential: 'secret1',\n    },\n  },\n};\n")))}g.isMDXComponent=!0}}]);