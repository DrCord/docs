"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63267],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>d});var l=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function g(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?g(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},g=Object.keys(e);for(l=0;l<g.length;l++)n=g[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(l=0;l<g.length;l++)n=g[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=l.createContext({}),o=function(e){var a=l.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=o(e.components);return l.createElement(c.Provider,{value:a},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,g=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=o(n),s=t,d=h["".concat(c,".").concat(s)]||h[s]||u[s]||g;return n?l.createElement(d,r(r({ref:a},p),{},{components:n})):l.createElement(d,r({ref:a},p))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var g=n.length,r=new Array(g);r[0]=s;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[h]="string"==typeof e?e:t,r[1]=i;for(var o=2;o<g;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20284:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>g,metadata:()=>i,toc:()=>o});var l=n(58168),t=(n(96540),n(15680));const g={title:"mysql changelog",id:"mysql-changelog",keywords:["adaptor","changelog","mysql"]},r="Changelog for the mysql adaptor",i={unversionedId:"packages/mysql-changelog",id:"packages/mysql-changelog",title:"mysql changelog",description:"1.4.9",source:"@site/adaptors/packages/mysql-changelog.md",sourceDirName:"packages",slug:"/packages/mysql-changelog",permalink:"/adaptors/packages/mysql-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mysql changelog",id:"mysql-changelog",keywords:["adaptor","changelog","mysql"]},sidebar:"adaptors",previous:{title:"02a/ Query DB for people to pay",permalink:"/adaptors/library/jobs/auto/02a-Query-DB-for-people-to-pay-2019-12-11"},next:{title:"mysql developer readme",permalink:"/adaptors/packages/mysql-readme"}},c={},o=[{value:"1.4.9",id:"149",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.4.8",id:"148",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.4.7",id:"147",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.4.6",id:"146",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.4.5",id:"145",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.4.4",id:"144",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.4.3",id:"143",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.4.2",id:"142",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"1.4.1",id:"141",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"1.4.0",id:"140",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"1.3.5",id:"135",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"1.3.4",id:"134",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"1.3.3",id:"133",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"1.3.2",id:"132",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"1.3.1",id:"131",level:2},{value:"Patch Changes",id:"patch-changes-14",level:3},{value:"1.3.0",id:"130",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],p={toc:o},h="wrapper";function u(e){let{components:a,...n}=e;return(0,t.yg)(h,(0,l.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"changelog-for-the-mysql-adaptor"},"Changelog for the mysql adaptor"),(0,t.yg)("h1",{id:"openfnlanguage-mysql"},"@openfn/language-mysql"),(0,t.yg)("h2",{id:"149"},"1.4.9"),(0,t.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[1ad86651]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.13.0"},"language-common@1.13.0"))))),(0,t.yg)("h2",{id:"148"},"1.4.8"),(0,t.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[c19efbe]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.11.1"},"language-common@1.11.1"))))),(0,t.yg)("h2",{id:"147"},"1.4.7"),(0,t.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[85c35b8]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.11.0"},"language-common@1.11.0"))))),(0,t.yg)("h2",{id:"146"},"1.4.6"),(0,t.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[df09270]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.3"},"language-common@1.10.3"))))),(0,t.yg)("h2",{id:"145"},"1.4.5"),(0,t.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[26a303e]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.2"},"language-common@1.10.2"))))),(0,t.yg)("h2",{id:"144"},"1.4.4"),(0,t.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[8c32eb3]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.1"},"language-common@1.10.1"))))),(0,t.yg)("h2",{id:"143"},"1.4.3"),(0,t.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[aad9549]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.10.0"},"language-common@1.10.0"))))),(0,t.yg)("h2",{id:"142"},"1.4.2"),(0,t.yg)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[111807f]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.9.0"},"language-common@1.9.0"))))),(0,t.yg)("h2",{id:"141"},"1.4.1"),(0,t.yg)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Update lock files"),(0,t.yg)("li",{parentName:"ul"},"Updated dependencies",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,t.yg)("h2",{id:"140"},"1.4.0"),(0,t.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,t.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,t.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,t.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,t.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,t.yg)("p",{parentName:"li"},"See ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,t.yg)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,t.yg)("h2",{id:"135"},"1.3.5"),(0,t.yg)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,t.yg)("h2",{id:"134"},"1.3.4"),(0,t.yg)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"ef828e7: update old urls in readme"),(0,t.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,t.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"@openfn/",(0,t.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,t.yg)("h2",{id:"133"},"1.3.3"),(0,t.yg)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,t.yg)("h2",{id:"132"},"1.3.2"),(0,t.yg)("h3",{id:"patch-changes-13"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,t.yg)("h2",{id:"131"},"1.3.1"),(0,t.yg)("h3",{id:"patch-changes-14"},"Patch Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,t.yg)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,t.yg)("h2",{id:"130"},"1.3.0"),(0,t.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"9d674c5: Migrate MySQL")))}u.isMDXComponent=!0}}]);