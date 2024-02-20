"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49945],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(58168),r=(n(96540),n(15680));const a={title:"Core"},i=void 0,l={unversionedId:"core",id:"version-legacy/core",title:"Core",description:"OpenFn/core is currently still being used by the v1 platform (www.openfn.org)",source:"@site/versioned_docs/version-legacy/core.md",sourceDirName:".",slug:"/core",permalink:"/documentation/legacy/core",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/core.md",tags:[],version:"legacy",frontMatter:{title:"Core"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/documentation/legacy/build/troubleshooting"},next:{title:"Devtools",permalink:"/documentation/legacy/devtools/home"}},s={},c=[{value:"What is core?",id:"what-is-core",level:2},{value:"Where is it used?",id:"where-is-it-used",level:2},{value:"Why might I want to use it now?",id:"why-might-i-want-to-use-it-now",level:2},{value:"How do I use it?",id:"how-do-i-use-it",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Core reaching EOL in 2023.",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"OpenFn/core is currently still being used by the v1 platform (",(0,r.yg)("a",{parentName:"p",href:"http://www.openfn.org"},"www.openfn.org"),")\nbut is reaching end-of-life in 2023.")),(0,r.yg)("h2",{id:"what-is-core"},"What is core?"),(0,r.yg)("p",null,"Core is the central job processing program used in the OpenFn platform. It's\nwhat actually executes ",(0,r.yg)("inlineCode",{parentName:"p"},"jobs")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"state")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"adaptors")," to do work for\ngovernments and NGOs all over the world."),(0,r.yg)("h2",{id:"where-is-it-used"},"Where is it used?"),(0,r.yg)("p",null,"Core is used in OpenFn v1 (the web platform) and by developers who want to test\njob execution on their local machines. It's ",(0,r.yg)("em",{parentName:"p"},"not")," used in Lightning (OpenFn v2)\nwhich instead makes use of the new runtime. For a local developer experience\nusing the new runtime, check out ",(0,r.yg)("a",{parentName:"p",href:"/documentation/legacy/cli"},"CLI"),"."),(0,r.yg)("h2",{id:"why-might-i-want-to-use-it-now"},"Why might I want to use it now?"),(0,r.yg)("p",null,"If you've got jobs running on OpenFn v1 and want to test them locally, core will\ngive you the exact same job running experience as you see on the web. This can\nbe incredibly helpful for debugging."),(0,r.yg)("admonition",{title:"Using the new CLI.",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you're a new OpenFn user and want to build or test jobs for Lighting (v2) and beyond in 2023, use the new ",(0,r.yg)("a",{parentName:"p",href:"/documentation/legacy/cli"},"CLI")," instead!")),(0,r.yg)("h2",{id:"how-do-i-use-it"},"How do I use it?"),(0,r.yg)("p",null,"Check out the official documentation on\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/core"},"Github"),"."),(0,r.yg)("p",null,"The tl;dr: is that you execute jobs from the command line by passing in an\nexpression, state, and the path to an adaptor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install @openfn/core\ncore execute -l ../language-http.Adaptor -e ./some-exprsesion.js -s ./some-state.json\n")),(0,r.yg)("p",null,"The full options are:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"-l, --language    resolvable language/adaptor path                [required]\n-e, --expression  target expression to execute                    [required]\n-s, --state       Path to initial state file.                     [required]\n-o, --output      Path to write result from expression\n-t, --test        Intercepts and logs all HTTP requests to console\n")))}d.isMDXComponent=!0}}]);