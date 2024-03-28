"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[36496],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>u});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function g(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?g(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},g=Object.keys(e);for(t=0;t<g.length;t++)n=g[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(t=0;t<g.length;t++)n=g[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,g=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,u=p["".concat(i,".").concat(d)]||p[d]||h[d]||g;return n?t.createElement(u,r(r({ref:a},c),{},{components:n})):t.createElement(u,r({ref:a},c))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var g=n.length,r=new Array(g);r[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<g;s++)r[s]=n[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62809:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>g,metadata:()=>o,toc:()=>s});var t=n(58168),l=(n(96540),n(15680));const g={title:"googlesheets changelog",id:"googlesheets-changelog",keywords:["adaptor","changelog","googlesheets"]},r="Changelog for the googlesheets adaptor",o={unversionedId:"packages/googlesheets-changelog",id:"packages/googlesheets-changelog",title:"googlesheets changelog",description:"2.2.2",source:"@site/adaptors/packages/googlesheets-changelog.md",sourceDirName:"packages",slug:"/packages/googlesheets-changelog",permalink:"/adaptors/packages/googlesheets-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"googlesheets changelog",id:"googlesheets-changelog",keywords:["adaptor","changelog","googlesheets"]},sidebar:"adaptors",previous:{title:"Register Patient",permalink:"/adaptors/library/jobs/auto/Register-Patient-2021-03-02"},next:{title:"googlesheets developer readme",permalink:"/adaptors/packages/googlesheets-readme"}},i={},s=[{value:"2.2.2",id:"222",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"2.2.1",id:"221",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"2.2.0",id:"220",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"2.1.6",id:"216",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"2.1.5",id:"215",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"2.1.4",id:"214",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"2.1.3",id:"213",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"2.1.2",id:"212",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"2.1.1",id:"211",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"2.1.0",id:"210",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],c={toc:s},p="wrapper";function h(e){let{components:a,...n}=e;return(0,l.yg)(p,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"changelog-for-the-googlesheets-adaptor"},"Changelog for the googlesheets adaptor"),(0,l.yg)("h1",{id:"openfnlanguage-googlesheets"},"@openfn/language-googlesheets"),(0,l.yg)("h2",{id:"222"},"2.2.2"),(0,l.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},'aad9549: Ensure that standard OAuth2 credentials with snake-cased\n"access_token" keys can be used for OAuth2-reliant adaptors'),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[aad9549]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.0"},"language-common@1.10.0"))))),(0,l.yg)("h2",{id:"221"},"2.2.1"),(0,l.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Update lock files"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.yg)("h2",{id:"220"},"2.2.0"),(0,l.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.yg)("p",{parentName:"li"},"See ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.yg)("h2",{id:"216"},"2.1.6"),(0,l.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.yg)("h2",{id:"215"},"2.1.5"),(0,l.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.yg)("h2",{id:"214"},"2.1.4"),(0,l.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.yg)("h2",{id:"213"},"2.1.3"),(0,l.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.yg)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.yg)("h2",{id:"212"},"2.1.2"),(0,l.yg)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,l.yg)("h2",{id:"211"},"2.1.1"),(0,l.yg)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"9a2755e: Update dependency on language-common"),(0,l.yg)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,l.yg)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,l.yg)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,l.yg)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"@openfn/",(0,l.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))),(0,l.yg)("h2",{id:"210"},"2.1.0"),(0,l.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"9e7d458: Migrate googlesheets")))}h.isMDXComponent=!0}}]);