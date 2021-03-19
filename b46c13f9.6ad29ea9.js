(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),r=(a(0),a(258)),i={title:"Go.Data"},p={unversionedId:"apps/godata",id:"apps/godata",isDocsHomePage:!1,title:"Go.Data",description:"Overview",source:"@site/docs/apps/godata.md",slug:"/apps/godata",permalink:"/documentation/apps/godata",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/godata.md",version:"current",sidebar:"docs",previous:{title:"CommCare HQ",permalink:"/documentation/apps/commcare"},next:{title:"Google Forms/Google Sheets",permalink:"/documentation/apps/google-sheets"}},c=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Implementation Examples",id:"implementation-examples",children:[]}],l={toc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Go.Data (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.who.int/godata"}),"https://www.who.int/godata")," is an outbreak investigation tool for field data collection during\npublic health emergencies."),Object(r.b)("h3",{id:"integration-use-cases"},"Integration Use Cases"),Object(r.b)("p",null,"Check out the Go.Data ",Object(r.b)("inlineCode",{parentName:"p"},"Interoperability Toolkit")," docs for example OpenFn integrations and related documentation: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://worldhealthorganization.github.io/godata/interoperability/"}),"https://worldhealthorganization.github.io/godata/interoperability/")),Object(r.b)("h3",{id:"further-reading"},"Further Reading"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go.Data API docs\n",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://worldhealthorganization.github.io/godata/api-docs/"}),"https://worldhealthorganization.github.io/godata/api-docs/")),Object(r.b)("li",{parentName:"ol"},"Go.Data Community\n",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://community-godata.who.int/login"}),"https://community-godata.who.int/login")),Object(r.b)("li",{parentName:"ol"},"Go.Data GitHub Repository \u2013 ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/WorldHealthOrganization/godata"}),"https://github.com/WorldHealthOrganization/godata"))),Object(r.b)("h2",{id:"integration-options"},"Integration Options"),Object(r.b)("p",null,"Data integration via the Go.Data web API. Two-way integration can be achieved, but see all options here: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://worldhealthorganization.github.io/godata/options/"}),"https://worldhealthorganization.github.io/godata/options/")),Object(r.b)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(r.b)("p",null,"The open-source ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://openfn.github.io/language-godata/"}),Object(r.b)("inlineCode",{parentName:"a"},"language-godata")),"\nadaptor has been developed with a series of helper functions for common\noperations to expedite integration setup."),Object(r.b)("p",null,"Also, the generic\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenFn/language-http#language-http-"}),Object(r.b)("inlineCode",{parentName:"a"},"language-http"))," can be\nused to make HTTP requests to the Go.Data API and can perform any operations not\nsupported by ",Object(r.b)("inlineCode",{parentName:"p"},"language-godata"),"."),Object(r.b)("h2",{id:"implementation-examples"},"Implementation Examples"),Object(r.b)("p",null,"See Go.Data docs site: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://worldhealthorganization.github.io/godata/integration-scripts/"}),"https://worldhealthorganization.github.io/godata/integration-scripts/")))}s.isMDXComponent=!0},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,g=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(g,p(p({ref:t},l),{},{components:a})):o.a.createElement(g,p({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);