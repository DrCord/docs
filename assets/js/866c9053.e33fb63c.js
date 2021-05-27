(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4521],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56537:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Chaining synchronous http requests",sidebar_label:"\ud83d\udcdc Chaining synchronous http requests",id:"synchronous-http-request",keywords:["library","job","expression","http","alterState","post","async","await"]},s={unversionedId:"jobs/auto/synchronous-http-request",id:"jobs/auto/synchronous-http-request",isDocsHomePage:!1,title:"Chaining synchronous http requests",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/synchronous-http-request.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/synchronous-http-request",permalink:"/library/jobs/auto/synchronous-http-request",version:"current",sidebar_label:"\ud83d\udcdc Chaining synchronous http requests",frontMatter:{title:"Chaining synchronous http requests",sidebar_label:"\ud83d\udcdc Chaining synchronous http requests",id:"synchronous-http-request",keywords:["library","job","expression","http","alterState","post","async","await"]},sidebar:"library",previous:{title:"Chaining HTTP Requests",permalink:"/library/jobs/auto/complex-http-request-chains"},next:{title:"Failed Payment Notification",permalink:"/library/jobs/auto/Failed-Payment-Notification-2021-04-23"}},u=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],l={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Chaining synchronous http requests"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"await")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"alterState(async state => {\n  const { Patient, Visit } = state.data;\n\n  console.log('Here we break large arrays into smaller chunks.');\n  const chunk = (arr, chunkSize) => {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize) R.push(arr.slice(i, i + chunkSize));\n    return R;\n  };\n\n  const patientSets = chunk(Patient, 10);\n  const visitSets = chunk(Visit, 10);\n\n  console.log('Patient sets:', patientSets.length);\n  console.log('Visit sets:', visitSets.length);\n\n  const visitChunks = [];\n  const patientChunks = [];\n\n  patientSets.forEach(sets => {\n    const data = {\n      Visit: [],\n      Patient: sets,\n    };\n    patientChunks.push(data);\n  });\n\n  visitSets.forEach(sets => {\n    const data = {\n      Visit: sets,\n      Patient: [],\n    };\n    visitChunks.push(data);\n  });\n\n  let countInbox = 0;\n  console.log('Then we define our async function that make multiple posts requests,');\n  console.log('each after a fix period of time.');\n  const postToInbox = async data => {\n    countInbox++;\n    console.log(`${countInbox} request to inbox`);\n\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await post(state.configuration.inboxUrl, { body: data })(state);\n  };\n\n  console.log('For each one of our chunks, we send one by one awaiting response.');\n  for (const patient of patientChunks) {\n    await postToInbox(patient);\n  }\n  for (const visit of visitChunks) {\n    await postToInbox(visit);\n  }\n\n  return { ...state, patientChunks, visitChunks };\n});\n\n")))}c.isMDXComponent=!0}}]);