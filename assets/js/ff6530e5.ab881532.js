(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6679],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9128:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],s={title:"Versions of the Portability Proposal"},c={unversionedId:"portability-versions",id:"portability-versions",isDocsHomePage:!1,title:"Versions of the Portability Proposal",description:"OpenFn is currently designing a portable project configuration schema that can",source:"@site/docs/portability-versions.md",sourceDirName:".",slug:"/portability-versions",permalink:"/documentation/portability-versions",editUrl:"https://github.com/openfn/docs/edit/main/docs/portability-versions.md",version:"current",frontMatter:{title:"Versions of the Portability Proposal"}},p=[{value:"Proposal v3",id:"proposal-v3",children:[]},{value:"Proposal v1",id:"proposal-v1",children:[]}],l={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenFn is currently designing a portable project configuration schema that can\nbe used to import or export projects between OpenFn/platform and OpenFn/engine."),(0,a.kt)("h2",{id:"proposal-v3"},"Proposal v3"),(0,a.kt)("p",null,"v3 introduces\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"URI schemes"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"file://"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gcs://")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: 'file://my-job.js' # URIs may be used (e.g., https://raw.githubusercontent.com/org/repo/my-job.js)\n    adaptor: '@openfn/language-common'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      alterState(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      alterState(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      alterState(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\ncredentials:\n  my-secret-credential:\n    username: '******' # Credential keys get exported, but values must be manually reentered\n    password: '******'\n  my-other-credential: 'file://gcp_credential.json' # And URIs may be specified directly for the credential body\n")),(0,a.kt)("h2",{id:"proposal-v1"},"Proposal v1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const project = {\n  async: true,\n  triggers: {\n    uniqueTriggerId: {\n      // trigger properties\n    },\n    otherTrigger: {\n      // other trigger properties\n    },\n  },\n  credentials: {\n    // for now, credentials will not be synced //\n    // secret1: {\n    // username: 'mamadou',\n    // pass: 'shhh',\n  },\n  staticData: {\n    // static objects that can be accessed from any job\n  },\n  jobs: {\n    payHealthWorker: { trigger: 'otherTrigger' },\n    syncToSalesforce: {\n      expression: 'uri://github.com/jobs/expresion.js',\n      trigger: 'uniqueTriggerId',\n      credential: 'secret1',\n    },\n  },\n};\n")))}u.isMDXComponent=!0}}]);