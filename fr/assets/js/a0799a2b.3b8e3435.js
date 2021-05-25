(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4685],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48261:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),a={title:"Planning for Deployment"},l={unversionedId:"deploy/options",id:"deploy/options",isDocsHomePage:!1,title:"Planning for Deployment",description:"Introduction",source:"@site/docs/deploy/options.md",sourceDirName:"deploy",slug:"/deploy/options",permalink:"/fr/documentation/deploy/options",editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/options.md",version:"current",frontMatter:{title:"Planning for Deployment"},sidebar:"docs",previous:{title:"Adaptors",permalink:"/fr/documentation/build/adaptors"},next:{title:"Portability",permalink:"/fr/documentation/portability"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Platform",id:"platform",children:[]},{value:"Microservice",id:"microservice",children:[]},{value:"DIY",id:"diy",children:[]}],s={toc:p};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"OpenFn/platform (the iPaaS), OpenFn/microservice, OpenFn/diy and more than 50\nopen-source adaptors maintained by OpenFn can be used locally or on the cloud,\nand as stand-alone solutions or as modules in other applications. Together the\ninteroperability suite provides organizations with the tools they need to\nconnect with any application or database, adhere to any data standards, and\nautomate any rote digital process. The tools themselves range from lightweight\nNodeJS apps to robust and highly-fault-tolerant enterprise applications running\non the ErlangVM. They are typically used in their hosted forms on the cloud or\ndeployed with Docker and/or Kubernetes."),(0,i.kt)("p",null,"See below for a chart of the available implementation pathways."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Implementation Pathways",src:t(14355).Z})),(0,i.kt)("p",null,"When you configure projects (think ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"triggers"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials"),") to run\non OpenFn, you can deploy them in a number of different ways. In fact, a key\nfeature of OpenFn's offerings are the versatility they provide to users. A user\ncan build her project using OpenFn's enterprise platform, or using components of\nthe open source integration toolkit. A user may then choose to deploy the\nproject initially on the platform and later migrate to her own servers when\ndoing so makes sense. The good news is that OpenFn project\n",(0,i.kt)("a",{parentName:"p",href:"/fr/documentation/portability"},"portability")," will make these transitions easy. You will have\nfull control and ownership of your integration project regardless of the\ndeployment pathway you pursue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deployment Options",src:t(58433).Z})),(0,i.kt)("h2",{id:"platform"},"Platform"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"platform"},"platform")),(0,i.kt)("p",null,"The OpenFn integration platform provides a flexible, scalable, and secure\ninfrastructure to connect your existing systems, streamline data sharing, and\nautomate workflows."),(0,i.kt)("p",null,"Platform is right for you if you are very serious about security, stability and\nscalability, or you don't have a strong/well-resourced IT team with devops\nexperience in your organization."),(0,i.kt)("p",null,"The least expensive way to do deploy on platform is using our cloud servers,\ncurrently based in the US and Switzerland but availalbe in many more countries\non-demand."),(0,i.kt)("p",null,"If you've got data-residency requirements to comply with, you might consider a\nlocal-deployment of ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\u2014this will still require a paid license but you\ncan pick and choose exactly how and where OpenFn runs."),(0,i.kt)("h2",{id:"microservice"},"Microservice"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"/documentation/microservice/home"},"microservice")),(0,i.kt)("p",null,"Microservice is right for you if you are already managing high-availability\nsoftware and don't need a web-front end. Microservice gives you lots of\nflexbility, and it's completely FOSS\u2014meaning you use it for free and can even\ndevelop your own new features as needed."),(0,i.kt)("p",null,"While this community-supported variant of OpenFn may lack some of the more\npowerful features of ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", it's 100% cross-compatible, meaning that you\ncan even build and test entire projects on ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," and then export the\n",(0,i.kt)("inlineCode",{parentName:"p"},"project.yaml")," file to run on your own servers using ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice"),"."),(0,i.kt)("h2",{id:"diy"},"DIY"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"diy"},"diy")),(0,i.kt)("p",null,"The OpenFn intgration toolkit is a collection of dozens of completely free and\nopen source integration tools, applications, and modules. If the out-of-the-box\nfunctionality provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice")," doesn't meet your needs, look to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"engine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," and the individual adaptors to build your own enterprise-grade\nintegration and interoperability layer."))}c.isMDXComponent=!0},58433:function(e,n,t){"use strict";n.Z=t.p+"assets/images/deployment_options-f37306a186db8d0e57f46229aa017c11.png"},14355:function(e,n,t){"use strict";n.Z=t.p+"assets/images/implementation_pathways-3af58b71f293cf65ec3c10ad9d4ba45b.png"}}]);