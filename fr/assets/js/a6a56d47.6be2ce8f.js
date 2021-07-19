(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1615],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(b,i(i({ref:t},u),{},{components:o})):n.createElement(b,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51954:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i={title:"Kobo Toolbox"},s={unversionedId:"apps/kobo-toolbox",id:"apps/kobo-toolbox",isDocsHomePage:!1,title:"Kobo Toolbox",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/kobo-toolbox.md",sourceDirName:"apps",slug:"/apps/kobo-toolbox",permalink:"/fr/documentation/apps/kobo-toolbox",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/kobo-toolbox.md",version:"current",frontMatter:{title:"Kobo Toolbox"},sidebar:"docs",previous:{title:"Google Forms/Google Sheets",permalink:"/fr/documentation/apps/google-sheets"},next:{title:"Magpi",permalink:"/fr/documentation/apps/magpi"}},l=[{value:"Aper\xe7u",id:"aper\xe7u",children:[]},{value:"Cas d&#39;utilisation d&#39;int\xe9gration",id:"cas-dutilisation-dint\xe9gration",children:[]},{value:"Options d&#39;int\xe9gration",id:"options-dint\xe9gration",children:[{value:"API Web Kobo",id:"api-web-kobo",children:[]},{value:"Service Webhook pour transf\xe9rer les donn\xe9es de soumission au point de terminaison OpenFn (ou une autre application)",id:"service-webhook-pour-transf\xe9rer-les-donn\xe9es-de-soumission-au-point-de-terminaison-openfn-ou-une-autre-application",children:[]}]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo Toolbox")," est une suite d'outils open source pour la collecte de donn\xe9es sur le terrain dans des environnements difficiles. Si vous avez travaill\xe9 sur ODK ou ONA, la technologie sous-jacente est tr\xe8s similaire. Ils proposent des comptes et un h\xe9bergement gratuits pour les projets humanitaires, et l'application offre une interface agr\xe9able pour g\xe9rer (et nettoyer\xa0!) les soumissions de formulaires."),(0,a.kt)("p",null,":::remarque"),(0,a.kt)("p",null,"Les documentations d'outils sont con\xe7ues (1) pour s'assurer que tout OpenFn peut s'int\xe9grer plus rapidement et plus facilement avec des outils communs, et (2) pour \xe9duquer tout utilisateur d'OpenFn ou de tout autre secteur."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"cas-dutilisation-dint\xe9gration"},"Cas d'utilisation d'int\xe9gration"),(0,a.kt)("p",null,"Exemple de r\xe9cits d'utilisateur\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En tant que responsable S&E, je souhaite suivre les r\xe9ponses de l'enqu\xeate Kobo Toolbox en temps r\xe9el dans une base de donn\xe9es centrale, afin de mieux comprendre les activit\xe9s de collecte de donn\xe9es et les performances du programme sur l'ensemble de mes sites partenaires."),(0,a.kt)("li",{parentName:"ul"},"... .")),(0,a.kt)("h2",{id:"options-dint\xe9gration"},"Options d'int\xe9gration"),(0,a.kt)("h3",{id:"api-web-kobo"},"API Web Kobo"),(0,a.kt)("p",null,"Kobo APIs support both data and metadata integration. Check out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documentation de l'API Kobo\xa0: ",(0,a.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/api.html"},"https://support.kobotoolbox.org/api.html")),(0,a.kt)("li",{parentName:"ul"},"Communaut\xe9 Kobo\xa0: ",(0,a.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/rest_services.html"},"https://support.kobotoolbox.org/rest_services.html")),(0,a.kt)("li",{parentName:"ul"},"Kobo API v2 explorer: ",(0,a.kt)("a",{parentName:"li",href:"https://kf.kobotoolbox.org/api/v2/assets/"},"https://kf.kobotoolbox.org/api/v2/assets/"))),(0,a.kt)("h3",{id:"service-webhook-pour-transf\xe9rer-les-donn\xe9es-de-soumission-au-point-de-terminaison-openfn-ou-une-autre-application"},"Service Webhook pour transf\xe9rer les donn\xe9es de soumission au point de terminaison OpenFn (ou une autre application)"),(0,a.kt)("p",null,"See the official docs here: ",(0,a.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/rest_services.html"},"https://support.kobotoolbox.org/rest_services.html")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To push data from Kobo, users must click the projects icon on their left-side nav bar. It's in the shape of a globe."),(0,a.kt)("li",{parentName:"ol"},"Once selecting a project, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Settings")," link will appear at the top left side of the screen. Click it to open the Project Settings page."),(0,a.kt)("li",{parentName:"ol"},"In the bottom left pane of the project settings page, users must paste their inbox URL from OpenFn into the ",(0,a.kt)("inlineCode",{parentName:"li"},"Rest Services")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Service URL")," input area and select ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON Post")," as the ",(0,a.kt)("inlineCode",{parentName:"li"},"Service Name"),"."),(0,a.kt)("li",{parentName:"ol"},"It's helpful to add a wrapper to your form data if you will be publishing multiple forms to OpenFn. You could use ",(0,a.kt)("inlineCode",{parentName:"li"},'{"form":"my_form", "body": %SUBMISSION%}'),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Service")," to start forwarding new Kobo submissions to OpenFn.org.")),(0,a.kt)("p",null,"To test to integration, add a submission manually using the ",(0,a.kt)("inlineCode",{parentName:"p"},"enter data in browser")," button. Head back to your history page at OpenFn to view the newly submitted data and write a new ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," to map your Kobo data to any destination system on OpenFn."),(0,a.kt)("p",null,"Here's a sample post from Kobo REST service. Note that questions inside groups are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"groupname/")," rather than sitting inside a group object like ODK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "group1/name": "twenty",\n  "group1/age": "19",\n  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",\n  "first_q": "hello",\n  "final_q": "why not?",\n  "_xform_id_string": "groups",\n  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "_userform_id": "taylordowns2000_groups",\n  "_tags": [],\n  "_submitted_by": null,\n  "_submission_time": "2016-04-22T06:38:20",\n  "_status": "submitted_via_web",\n  "_notes": [],\n  "_id": 889409,\n  "_geolocation": [null, null],\n  "_bamboo_dataset_id": "",\n  "_attachments": []\n}\n')),(0,a.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-kobotoolbox"},"OpenFn/language-kobotoolbox"),' for some helper functions for extracting or "getting" data in bulk from Kobo Toolbox.'),(0,a.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConSoSci")," Github repo for several example Kobo-to-database jobs: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/consosci"},"https://github.com/OpenFn/consosci")))}u.isMDXComponent=!0}}]);