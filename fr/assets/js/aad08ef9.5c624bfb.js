(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5793],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84033:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],p={title:"Bo\xeete \xe0 outils pour la sant\xe9 communautaire"},s={unversionedId:"apps/cht",id:"apps/cht",isDocsHomePage:!1,title:"Bo\xeete \xe0 outils pour la sant\xe9 communautaire",description:"1. Pour envoyer les donn\xe9es des applications CHT vers OpenFn, tirez parti de la fonctionnalit\xe9 Outbound Push pour transf\xe9rer les donn\xe9es sp\xe9cifi\xe9es vers votre projet OpenFn.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/cht.md",sourceDirName:"apps",slug:"/apps/cht",permalink:"/fr/documentation/apps/cht",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/cht.md",version:"current",frontMatter:{title:"Bo\xeete \xe0 outils pour la sant\xe9 communautaire"},sidebar:"docs",previous:{title:"Connectez tout",permalink:"/fr/documentation/apps/anything"},next:{title:"Commcare",permalink:"/fr/documentation/apps/commcare"}},c=[],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pour envoyer les donn\xe9es des applications CHT vers OpenFn, tirez parti de la fonctionnalit\xe9 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/"},"Outbound Push")," pour transf\xe9rer les donn\xe9es sp\xe9cifi\xe9es vers votre projet OpenFn."),(0,a.kt)("li",{parentName:"ol"},"Lors de la d\xe9finition de la ",(0,a.kt)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#destination"},(0,a.kt)("inlineCode",{parentName:"a"},"destination")),", sp\xe9cifiez l'URL de votre Inbox OpenFn comme ",(0,a.kt)("inlineCode",{parentName:"li"},"baseURL"),". Aucun param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"li"},"auth")," n'est requis sauf si vous avez configur\xe9 Inbox security sur votre projet OpenFn."),(0,a.kt)("li",{parentName:"ol"},"D\xe9finissez les donn\xe9es \xe0 transmettre \xe0 OpenFn dans la propri\xe9t\xe9 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#mapping"},(0,a.kt)("inlineCode",{parentName:"a"},"mapping"))," . Ceci structurera la charge utile envoy\xe9e \xe0 votre Inbox OpenFn comme un \xab message \xbb.")),(0,a.kt)("p",null,"Pour envoyer des donn\xe9es ",(0,a.kt)("em",{parentName:"p"},"aux")," applications CHT, consultez l'API ",(0,a.kt)("a",{parentName:"p",href:"https://docs.communityhealthtoolkit.org/apps/reference/api/"},"CHT"),"."))}l.isMDXComponent=!0}}]);