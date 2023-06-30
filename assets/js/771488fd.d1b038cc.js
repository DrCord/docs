"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76874],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>g});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},h=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),s=o(t),u=l,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return t?n.createElement(g,r(r({ref:a},h),{},{components:t})):n.createElement(g,r({ref:a},h))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c[s]="string"==typeof e?e:l,r[1]=c;for(var o=2;o<i;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69721:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=t(87462),l=(t(67294),t(3905));const i={title:"sftp changelog",id:"sftp-changelog",keywords:["adaptor","changelog","sftp"]},r="Changelog for the sftp adaptor",c={unversionedId:"packages/sftp-changelog",id:"packages/sftp-changelog",title:"sftp changelog",description:"0.8.3",source:"@site/adaptors/packages/sftp-changelog.md",sourceDirName:"packages",slug:"/packages/sftp-changelog",permalink:"/adaptors/packages/sftp-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp changelog",id:"sftp-changelog",keywords:["adaptor","changelog","sftp"]},sidebar:"adaptors",previous:{title:"Config for sftp",permalink:"/adaptors/packages/sftp-configuration-schema"},next:{title:"sftp developer readme",permalink:"/adaptors/packages/sftp-readme"}},p={},o=[{value:"0.8.3",id:"083",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.8.2",id:"082",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.8.1",id:"081",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.8.0",id:"080",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.7.3",id:"073",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.7.2",id:"072",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"0.7.1",id:"071",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"0.7.0",id:"070",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"0.6.9",id:"069",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"0.6.8",id:"068",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"0.6.7",id:"067",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"0.6.6",id:"066",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"0.6.5",id:"065",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"0.6.4",id:"064",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"0.6.3",id:"063",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"0.6.2",id:"062",level:2},{value:"Patch Changes",id:"patch-changes-14",level:3},{value:"0.6.1",id:"061",level:2},{value:"Patch Changes",id:"patch-changes-15",level:3},{value:"0.6.0",id:"060",level:2},{value:"Minor Changes",id:"minor-changes-2",level:3},{value:"0.5.0",id:"050",level:2},{value:"Minor Changes",id:"minor-changes-3",level:3}],h={toc:o},s="wrapper";function d(e){let{components:a,...t}=e;return(0,l.kt)(s,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-sftp-adaptor"},"Changelog for the sftp adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-sftp"},"@openfn/language-sftp"),(0,l.kt)("h2",{id:"083"},"0.8.3"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[aad9549]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.10.0"},"language-common@1.10.0"))))),(0,l.kt)("h2",{id:"082"},"0.8.2"),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"d2c980e: Use ",(0,l.kt)("inlineCode",{parentName:"li"},"parseCsv")," from language-common"),(0,l.kt)("li",{parentName:"ul"},"c5d3ce1: improve connection handling"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[111807f]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.9.0"},"language-common@1.9.0"))))),(0,l.kt)("h2",{id:"081"},"0.8.1"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"080"},"0.8.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"073"},"0.7.3"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"432dd0a: fix sftp connection wqautoclose")),(0,l.kt)("h2",{id:"072"},"0.7.2"),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"205b806: remove asObjects key before parsing")),(0,l.kt)("h2",{id:"071"},"0.7.1"),(0,l.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"827c627: error handling")),(0,l.kt)("h2",{id:"070"},"0.7.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fa58216: Add csvtojson convertion option")),(0,l.kt)("h2",{id:"069"},"0.6.9"),(0,l.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,l.kt)("h2",{id:"068"},"0.6.8"),(0,l.kt)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"067"},"0.6.7"),(0,l.kt)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.kt)("h2",{id:"066"},"0.6.6"),(0,l.kt)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"065"},"0.6.5"),(0,l.kt)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.kt)("h2",{id:"064"},"0.6.4"),(0,l.kt)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,l.kt)("h2",{id:"063"},"0.6.3"),(0,l.kt)("h3",{id:"patch-changes-13"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,l.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,l.kt)("li",{parentName:"ul"},"4126a62: Fix built bundle"),(0,l.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))),(0,l.kt)("h2",{id:"062"},"0.6.2"),(0,l.kt)("h3",{id:"patch-changes-14"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e04aa28: Rename credential-schema to configuration-schema, update descriptions")),(0,l.kt)("h2",{id:"061"},"0.6.1"),(0,l.kt)("h3",{id:"patch-changes-15"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"28dfbfa: add todo, fix build pack")),(0,l.kt)("h2",{id:"060"},"0.6.0"),(0,l.kt)("h3",{id:"minor-changes-2"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f294a62: Added credential-schema.json for new ui")),(0,l.kt)("h2",{id:"050"},"0.5.0"),(0,l.kt)("h3",{id:"minor-changes-3"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2c04894: added sftp package")))}d.isMDXComponent=!0}}]);