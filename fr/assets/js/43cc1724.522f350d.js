(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8276],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65961:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),s=["components"],a={title:"La Bo\xeete \xe0 outils d'int\xe9gration"},l={unversionedId:"getting-started/integration-toolkit",id:"getting-started/integration-toolkit",isDocsHomePage:!1,title:"La Bo\xeete \xe0 outils d'int\xe9gration",description:"La bo\xeete \xe0 outils d'int\xe9gration libre et open-source d'OpenFn offre aux gouvernements et aux ONG du monde entier plus de flexibilit\xe9 et de libert\xe9 pour choisir comment elles r\xe9ussissent dans les projets d'interop\xe9rabilit\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/integration-toolkit.md",sourceDirName:"getting-started",slug:"/getting-started/integration-toolkit",permalink:"/fr/documentation/getting-started/integration-toolkit",editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/integration-toolkit.md",version:"current",frontMatter:{title:"La Bo\xeete \xe0 outils d'int\xe9gration"},sidebar:"docs",previous:{title:"Revue de projet",permalink:"/fr/documentation/build/example-build"},next:{title:"Planning your Integration",permalink:"/fr/documentation/design/design-planning-scoping"}},u=[{value:"Pourquoi OFG dirige le d\xe9veloppement de la bo\xeete \xe0 outils d&#39;int\xe9gration",id:"pourquoi-ofg-dirige-le-d\xe9veloppement-de-la-bo\xeete-\xe0-outils-dint\xe9gration",children:[]},{value:"Contenu de la bo\xeete \xe0 outils d&#39;int\xe9gration",id:"contenu-de-la-bo\xeete-\xe0-outils-dint\xe9gration",children:[]},{value:"Comit\xe9 de pilotage Open Source (OSSC)",id:"comit\xe9-de-pilotage-open-source-ossc",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La bo\xeete \xe0 outils d'int\xe9gration libre et open-source d'OpenFn offre aux gouvernements et aux ONG du monde entier plus de flexibilit\xe9 et de libert\xe9 pour choisir comment elles r\xe9ussissent dans les projets d'interop\xe9rabilit\xe9."),(0,i.kt)("p",null,"Au c\u0153ur de la bo\xeete \xe0 outils se trouve le ",(0,i.kt)("inlineCode",{parentName:"p"},"projet"),"\u2014 un ensemble de jobs, triggers et de credentials qui permettent aux organisations de d\xe9finir de mani\xe8re flexible les flux de production et les int\xe9grations \xe0 travers leurs syst\xe8mes."),(0,i.kt)("p",null,"Les projets peuvent \xeatre port\xe9s de ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," vers ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice")," (la principale voie de d\xe9ploiement pour la bo\xeete \xe0 outils d'int\xe9gration) et invers\xe9ment (voir ci-dessous). Mais pour vraiment comprendre la bo\xeete \xe0 outils, vous devez d'abord comprendre Open Function Group et la ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", l'iPaaS d'entreprise ."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"La Bo\xeete \xe0 outils d&#39;int\xe9gration",src:n(89504).Z})),(0,i.kt)("p",null,"Open Function Group a d\xe9velopp\xe9 des logiciels libres et gratuits (FOSS) pour les projets d'int\xe9gration de donn\xe9es dans les domaines de la sant\xe9, de l'humanitaire et du d\xe9veloppement international depuis 2014. Leurs logiciels et leurs services sont d\xe9sormais utilis\xe9s par des gouvernements, des ONG et des entreprises \xe0 fort impact dans plus de 40 pays."),(0,i.kt)("p",null,"La premi\xe8re plateforme d'int\xe9gration d'OFG \xe9tait enti\xe8rement FOSS, mais ils ont rapidement opt\xe9s pour une plateforme ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-core_model"},"\xab\xa0open-core\xa0\xbb")," (pensez \xe0 GitLab) afin de soutenir leur travail d'int\xe9gration ax\xe9 sur l'impact. Leur principale offre h\xe9berg\xe9e, la \xab\xa0plateforme\xa0\xbb OpenFn, est ",(0,i.kt)("em",{parentName:"p"},"propri\xe9taire")," mais utilise largement la bo\xeete \xe0 outils d'int\xe9gration open-source\xa0; en fait, la \xab\xa0plateforme\xa0\xbb peut \xeatre consid\xe9r\xe9e comme une couche entreprise/h\xe9berg\xe9e s'ex\xe9cutant au dessus des blocs de construction open-source de base, fourni par la bo\xeete \xe0 outils d'int\xe9gration."),(0,i.kt)("h3",{id:"pourquoi-ofg-dirige-le-d\xe9veloppement-de-la-bo\xeete-\xe0-outils-dint\xe9gration"},"Pourquoi OFG dirige le d\xe9veloppement de la bo\xeete \xe0 outils d'int\xe9gration"),(0,i.kt)("p",null,"Notre mission est de rendre les interventions sanitaires et humanitaires plus efficaces et nous consid\xe9rons l'investissement dans la bo\xeete \xe0 outils d'int\xe9gration comme strat\xe9gique."),(0,i.kt)("p",null,"Nous nous efforcerons de pr\xe9server la bo\xeete \xe0 outils d'int\xe9gration en tant que projet source sain et de bonne foi et de soutenir ses op\xe9rations par des activit\xe9s commerciales li\xe9es \xe0 \xe0 la bo\xeete \xe0 outils et \xe0 leurs autres offres propri\xe9taires ou de services jusqu'\xe0 ce qu'il devienne autonome et soit pris en charge par la communaut\xe9 au sens large."),(0,i.kt)("p",null,"Nous avons con\xe7u les outils de la bo\xeete \xe0 outils pour \xeatre utiles en tant qu'\xe9l\xe9ments autonomes de logiciels ",(0,i.kt)("em",{parentName:"p"},"et")," en tant que modules, utilis\xe9s par d'autres applications. Parce qu'une partie substantielle des revenus d'OFG provient de contrats li\xe9s \xe0 la plateforme, et parce que la plateforme repose sur OpenFn/core, OpenFn/engine, et les adaptateurs OpenFn, nous souhaitons nous assurer que OFG sera toujours encourag\xe9 \xe0 continuer son investissement dans la bo\xeete \xe0 outils d'int\xe9gration."),(0,i.kt)("p",null,"En d'autres termes, nous essayons de nous assurer qu'au fur et \xe0 mesure que OFG se d\xe9veloppe, il continuera d'am\xe9liorer la bo\xeete \xe0 outils d'int\xe9gration open source, que d'autres bailleurs de fonds ou des parties prenantes suppl\xe9mentaires contribuent ou non au projet."),(0,i.kt)("h2",{id:"contenu-de-la-bo\xeete-\xe0-outils-dint\xe9gration"},"Contenu de la bo\xeete \xe0 outils d'int\xe9gration"),(0,i.kt)("p",null,"S\xe9par\xe9e de \xab\xa0la plateforme\xa0\xbb, la bo\xeete \xe0 outils d'int\xe9gration est la suite d'applications et de modules fournis par OFG et la communaut\xe9 qui permettent l'int\xe9gration de donn\xe9es l'interop\xe9rabilit\xe9 et les solutions d'automatisation par le biais de jobs, de triggers et des credentials conformes \xe0 OpenFn. Les composants cl\xe9s de la bo\xeete \xe0 outils sont\xa0:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OpenFn/docs"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/core"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/engine"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/microservice"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/devtools"),(0,i.kt)("li",{parentName:"ol"},"les adaptateurs OpenFn")),(0,i.kt)("h2",{id:"comit\xe9-de-pilotage-open-source-ossc"},"Comit\xe9 de pilotage Open Source (OSSC)"),(0,i.kt)("p",null,"Nous avons \xe9galement mis en place un comit\xe9 de pilotage Open Source (OSSC) pour repr\xe9senter la communaut\xe9 des utilisateurs finaux et des d\xe9veloppeurs d'OpenFn. Il examine et donne son avis sur les d\xe9cisions majeures de la feuille de route, les nouvelles conceptions, les sp\xe9cifications, les fonctionnalit\xe9s et les modifications de protocole."),(0,i.kt)("p",null,"L'adh\xe9sion et le processus de prise de d\xe9cision de l'OSSC sont d\xe9finis dans ",(0,i.kt)("a",{parentName:"p",href:"https://openfn.github.io/governance/OSSC.html"},"OSSC's internal governance policy"),". Si vous souhaitez nous rejoindre, nous serons ravis de vous conna\xeetre\xa0!"))}d.isMDXComponent=!0},89504:function(e,t,n){"use strict";t.Z=n.p+"assets/images/integration-toolkit-93202d4f9b1c426443a888aa65d904f1.png"}}]);