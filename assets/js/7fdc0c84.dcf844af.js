"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17464],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"Versions of the Portability Proposal"},i=void 0,s={unversionedId:"deploy/portability-versions",id:"deploy/portability-versions",title:"Versions of the Portability Proposal",description:"OpenFn is currently designing a portable project configuration schema that can",source:"@site/docs/deploy/portability-versions.md",sourceDirName:"deploy",slug:"/deploy/portability-versions",permalink:"/documentation/deploy/portability-versions",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/portability-versions.md",tags:[],version:"current",frontMatter:{title:"Versions of the Portability Proposal"}},l={},c=[{value:"Current",id:"current",level:2},{value:"v2",id:"v2",level:2},{value:"v1",id:"v1",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"OpenFn is currently designing a portable project configuration schema that can\nbe used to import or export projects between OpenFn/platform and OpenFn/engine."),(0,o.yg)("h2",{id:"current"},(0,o.yg)("a",{parentName:"h2",href:"/documentation/deploy/portability#the-project-spec"},"Current")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/documentation/deploy/portability#the-project-spec"},"See the current specification here.")),(0,o.yg)("h2",{id:"v2"},"v2"),(0,o.yg)("p",null,"Used for export from the legacy platform."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: >\n      registerPatient({\n        patient-id: state.data.id,\n        dob: state.data.birth\n      })\n    adaptor: '@openfn/language-openmrs'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      fn(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      fn(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      fn(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\n# Note that credential keys get copied, but values must be manually entered\n# after the export is completed.\ncredentials:\n  my-secret-credential:\n    username: '******'\n    password: '******'\n")),(0,o.yg)("h2",{id:"v1"},"v1"),(0,o.yg)("p",null,"Initial portability proposal"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const project = {\n  async: true,\n  triggers: {\n    uniqueTriggerId: {\n      // trigger properties\n    },\n    otherTrigger: {\n      // other trigger properties\n    },\n  },\n  credentials: {\n    // for now, credentials will not be synced //\n    // secret1: {\n    // username: 'mamadou',\n    // pass: 'shhh',\n  },\n  staticData: {\n    // static objects that can be accessed from any job\n  },\n  jobs: {\n    payHealthWorker: { trigger: 'otherTrigger' },\n    syncToSalesforce: {\n      expression: 'uri://github.com/jobs/expresion.js',\n      trigger: 'uniqueTriggerId',\n      credential: 'secret1',\n    },\n  },\n};\n")))}g.isMDXComponent=!0}}]);