(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1682],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84588:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a=["components"],s={title:"Versions de la proposition de portabilit\xe9"},p={unversionedId:"portability-versions",id:"portability-versions",isDocsHomePage:!1,title:"Versions de la proposition de portabilit\xe9",description:"OpenFn con\xe7oit actuellement un sch\xe9ma de configuration de projet portable qui peut \xeatre utilis\xe9 pour importer ou exporter des projets entre OpenFn / plateforme et OpenFn / engine.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/portability-versions.md",sourceDirName:".",slug:"/portability-versions",permalink:"/fr/documentation/portability-versions",editUrl:"https://github.com/openfn/docs/edit/main/docs/portability-versions.md",version:"current",frontMatter:{title:"Versions de la proposition de portabilit\xe9"}},c=[{value:"Proposition v3",id:"proposition-v3",children:[]},{value:"Proposition v1",id:"proposition-v1",children:[]}],l={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenFn con\xe7oit actuellement un sch\xe9ma de configuration de projet portable qui peut \xeatre utilis\xe9 pour importer ou exporter des projets entre OpenFn / plateforme et OpenFn / engine."),(0,i.kt)("h2",{id:"proposition-v3"},"Proposition v3"),(0,i.kt)("p",null,"v3 introduit ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"les sch\xe9mas URI")," ",(0,i.kt)("inlineCode",{parentName:"p"},"fichier://"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gcs://")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job-1:\n    expression: 'file://my-job.js' # URIs may be used (e.g., https://raw.githubusercontent.com/org/repo/my-job.js)\n    adaptor: '@openfn/language-common'\n    trigger: trigger-1\n    credential: my-secret-credential\n  recurring-job:\n    expression: >\n      alterState(state => {\n        console.log(\"Hi there!\")\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: every-minute\n  flow-job:\n    expression: >\n      alterState(state => {\n        state.data.number = state.data.number * 3\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: after-j1\n  catch-job:\n    expression: >\n      alterState(state => {\n        state.message = \"handled it.\"\n        return state;\n      })\n    adaptor: '@openfn/language-common'\n    trigger: j1-fails\n\ntriggers:\n  trigger-1:\n    criteria: '{\"number\":2}'\n  every-minute:\n    cron: '* * * * *'\n  after-j1:\n    success: job-1\n  j1-fails:\n    failure: job-1\n\ncredentials:\n  my-secret-credential:\n    username: '******' # Credential keys get exported, but values must be manually reentered\n    password: '******'\n  my-other-credential: 'file://gcp_credential.json' # And URIs may be specified directly for the credential body\n")),(0,i.kt)("h2",{id:"proposition-v1"},"Proposition v1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const project = {\n  async: true,\n  triggers: {\n    uniqueTriggerId: {\n      // trigger properties\n    },\n    otherTrigger: {\n      // other trigger properties\n    },\n  },\n  credentials: {\n    // for now, credentials will not be synced //\n    // secret1: {\n    // username: 'mamadou',\n    // pass: 'shhh',\n  },\n  staticData: {\n    // static objects that can be accessed from any job\n  },\n  jobs: {\n    payHealthWorker: { trigger: 'otherTrigger' },\n    syncToSalesforce: {\n      expression: 'uri://github.com/jobs/expresion.js',\n      trigger: 'uniqueTriggerId',\n      credential: 'secret1',\n    },\n  },\n};\n")))}u.isMDXComponent=!0}}]);