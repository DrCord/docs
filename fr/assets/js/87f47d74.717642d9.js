(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3976],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54760:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a={title:"Microservice"},l={unversionedId:"microservice/home",id:"microservice/home",isDocsHomePage:!1,title:"Microservice",description:"But",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/microservice/home.md",sourceDirName:"microservice",slug:"/microservice/home",permalink:"/fr/documentation/microservice/home",editUrl:"https://github.com/openfn/docs/edit/main/docs/microservice/home.md",version:"current",frontMatter:{title:"Microservice"},sidebar:"docs",previous:{title:"Platform",permalink:"/fr/documentation/deploy/platform"},next:{title:"OpenHIE instantan\xe9",permalink:"/fr/documentation/instant-openhie"}},p=[{value:"But",id:"but",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Pr\xe9requis",id:"pr\xe9requis",children:[]},{value:"Docker op\xe9rationnel",id:"docker-op\xe9rationnel",children:[]},{value:"Guide de d\xe9veloppement et de fonctionnement",id:"guide-de-d\xe9veloppement-et-de-fonctionnement",children:[{value:"Fonctionnement dans Docker",id:"fonctionnement-dans-docker",children:[]}]},{value:"Configuration de projet",id:"configuration-de-projet",children:[{value:"Premi\xe8re configuration en utilisant l&#39;exemple de configuration",id:"premi\xe8re-configuration-en-utilisant-lexemple-de-configuration",children:[]},{value:"Setup from your existing OpenFn platform project",id:"setup-from-your-existing-openfn-platform-project",children:[]}]}],c={toc:p};function s(e){var n=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"but"},"But"),(0,o.kt)("p",null,"OpenFn est utilis\xe9 par de nombreuses organisations sanitaires et humanitaires dans le monde entier pour d\xe9velopper leurs programmes gr\xe2ce \xe0 l'interop\xe9rabilit\xe9 en temps r\xe9el, l'int\xe9gration des syst\xe8mes et l'automatisation du flux de travail. ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/microservice")," utilise la technologie open-core d'OpenFn\xa0: ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/core"),", ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine"),", et les diff\xe9rents ",(0,o.kt)("strong",{parentName:"p"},"adaptateurs")," OpenFn. Le but \xe9tant de cr\xe9er des microservices autonomes qui peuvent \xeatre d\xe9ploy\xe9s sur n'importe quel mat\xe9riel."),(0,o.kt)("p",null,"Cette approche de microservice permet de s'assurer que les gouvernements et les ONG ne sont jamais enferm\xe9s dans l'offre SaaS d'OpenFn, et peuvent porter leurs jobs existants, triggers, et leurs credentials de ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org"},"OpenFn.org")," \xe0 leur propre infrastructure facilement."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Similaire \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),", OpenFn/microservice s'ex\xe9cute sur les fichiers ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),". Cela signifie que lorsque des organisations ou des gouvernements ont une exigence de licence open-source, tous leurs jobs, credentials et configurations de projet peuvent \xeatre export\xe9s depuis l'iPaaS d'OpenFn et utilis\xe9s pour cr\xe9er un d\xe9ploiement de microservices."),(0,o.kt)("p",null,"Bien que cette approche ne fournisse pas le front-end la plateforme OpenFn avec ses diverses fonctionnalit\xe9s de gestion et de configuration de projet, elle est parfaite pour les groupes ayant une exp\xe9rience de DevOps et 100% compatible avec la plateforme. Vous pouvez m\xeame construire et tester des projets entiers sur ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," et ensuite exporter le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," \xe0 ex\xe9cuter sur vos propres serveurs en utilisant ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice"),"."),(0,o.kt)("p",null,"Cette approche de microservice fournit de la flexibilit\xe9 aux gouvernements et aux ONG, de sorte qu'ils ne sont jamais enferm\xe9s dans l'offre de plateforme SaaS d'OpenFn. \xc0 tout moment, une organisation peut porter ses jobs, triggers et credentials existants d'OpenFn.org vers notre bo\xeete \xe0 outils d'int\xe9gration FOSS, en utilisant leur propre infrastructure."),(0,o.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,o.kt)("p",null,"La familiarit\xe9 avec d'autres \xe9l\xe9ments de la bo\xeete \xe0 outils d'int\xe9gration open source d'OpenFn est utile lorsqu'on envisage l'approche des microservices."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openfn.org/"},"OpenFn/docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openfn/engine"},"OpenFn/engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openFn/core"},"OpenFn/core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openfn.github.io/devtools/"},"OpenFn/devtools"))),(0,o.kt)("h2",{id:"docker-op\xe9rationnel"},"Docker op\xe9rationnel"),(0,o.kt)("p",null,"En supposant que vous avez ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," et un exemple de projet dans le r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"./sample-project")," avec une sp\xe9cification ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),"\xa0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,o.kt)("p",null,"Vous pouvez configurer soit le fichier compose ou le .env ou ex\xe9cuter le conteneur en utilisant ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -v <path-to-your-project-folder>:/home/microservice/<path-to-your-project-folder> \\\n  --env-file <path-to-your-env-file> \\\n  --network host \\\n  openfn/microservice:v0.3.2\n")),(0,o.kt)("h2",{id:"guide-de-d\xe9veloppement-et-de-fonctionnement"},"Guide de d\xe9veloppement et de fonctionnement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cloner ce d\xe9p\xf4t avec ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenFn/microservice.git")),(0,o.kt)("li",{parentName:"ul"},"Entrez le r\xe9pertoire avec ",(0,o.kt)("inlineCode",{parentName:"li"},"cd microservice")),(0,o.kt)("li",{parentName:"ul"},"Installez les d\xe9pendances avec ",(0,o.kt)("inlineCode",{parentName:"li"},"mix setup")),(0,o.kt)("li",{parentName:"ul"},"Ex\xe9cutez les tests avec ",(0,o.kt)("inlineCode",{parentName:"li"},"mix test")),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un r\xe9pertoire de projet pour conserver les artefacts de votre projet ",(0,o.kt)("inlineCode",{parentName:"li"},"mkdir sample-project")),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez une nouvelle sp\xe9cification de projet avec ",(0,o.kt)("inlineCode",{parentName:"li"},"cp project.yaml.example ./sample-project/project.yaml")),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un fichier ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," avec ",(0,o.kt)("inlineCode",{parentName:"li"},"cp .env.example .env")),(0,o.kt)("li",{parentName:"ul"},"Installez les adaptateurs n\xe9cessaires via ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install @openfn/language-http --prefix priv/openfn/runtime/node_modules --no-save --no-package-lock --global-style")),(0,o.kt)("li",{parentName:"ul"},"D\xe9marrez votre serveur de microservice avec ",(0,o.kt)("inlineCode",{parentName:"li"},'env $(cat .env | grep -v "#" | xargs ) iex -S mix phx.server'))),(0,o.kt)("h3",{id:"fonctionnement-dans-docker"},"Fonctionnement dans Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Construire une image de docker avec ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build -t openfn/microservice:v0.3.0 .")),(0,o.kt)("li",{parentName:"ul"},"Ex\xe9cutez avec ",(0,o.kt)("a",{parentName:"li",href:"#Docker-run"},"docker run command"))),(0,o.kt)("h2",{id:"configuration-de-projet"},"Configuration de projet"),(0,o.kt)("p",null,"Vous pouvez configurer les jobs, triggers, credentials et les packs de langue utilis\xe9s dans votre microservice dans le fichier de configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),"."),(0,o.kt)("h3",{id:"premi\xe8re-configuration-en-utilisant-lexemple-de-configuration"},"Premi\xe8re configuration en utilisant l'exemple de configuration"),(0,o.kt)("p",null,"Le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"sample project configuration file")," d\xe9crit un exemple de configuration de projet pour vous aider \xe0 vous familiariser avec cette structure."),(0,o.kt)("p",null,"Microservice est configur\xe9 par d\xe9faut avec 4 exemples de jobs\xa0:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"job-1")," est d\xe9clench\xe9 lorsqu'un message correspondant arrive \xe0 l'inbox (voir ",(0,o.kt)("inlineCode",{parentName:"li"},"trigger-1"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"recurring-job")," is a timed job scheduled to run every minute and is linked to the ",(0,o.kt)("inlineCode",{parentName:"li"},"every-minute")," cron trigger."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flow-job")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"catch-job")," run after the ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"failure")," of job-1, respectively.")),(0,o.kt)("p",null,"All of the jobs are configured with the language pack ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn/language-common"),"."),(0,o.kt)("p",null,"In the default sample configuration a new message posted to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:4000/inbox")," that matches ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger-1")," (i.e. the message contains ",(0,o.kt)("inlineCode",{parentName:"p"},'"number":2'),") is greeted with an asynchronous acknowledgement receipt (",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 202")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Data accepted and processing has begun"),") and will trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"job-1")," to run."),(0,o.kt)("p",null,"You can try this out with the following snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" \\\n -d \'{\n  "number":2,\n  "surveyId": 37479\n}\' \\\n http://localhost:4000/inbox\n')),(0,o.kt)("p",null,"Posting a message not matching any of the triggers (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cnumber\u201d:3"),") equally prompts an acknowledgement but doesn\u2019t trigger any jobs."),(0,o.kt)("p",null,"Example message post for this non-match scenario:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" \\\n -d \'{\n  "number":3,\n  "surveyId": 37479\n}\' \\\n http://localhost:4000/inbox\n')),(0,o.kt)("p",null,"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," requests made to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4000/inbox"},(0,o.kt)("inlineCode",{parentName:"a"},"localhost:4000/inbox"))," will be processed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receiver"),", according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptor")," defined in the project configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," file."),(0,o.kt)("p",null,"Time-based jobs will be run by ",(0,o.kt)("inlineCode",{parentName:"p"},"Engine")," according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptor")," defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,o.kt)("h3",{id:"setup-from-your-existing-openfn-platform-project"},"Setup from your existing OpenFn platform project"),(0,o.kt)("p",null,"If you have a project configured on OpenFn, you have two ways for exporting your config on the Project Settings page and running your project in microservice."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you export as ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),", you can download your settings in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," format from your platform project Download page or from a link in the auto-generated email sent to your address. You can plug this file into your environment as set up using the ",(0,o.kt)("a",{parentName:"p",href:"#Development-up-and-running-guide"},"Development Up and Running Guide"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you export as ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice.zip"),", you'll get your microservice folder ready to run with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", containing"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," config file"),(0,o.kt)("li",{parentName:"ul"},"a project folder containing ",(0,o.kt)("inlineCode",{parentName:"li"},"project.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the default environment variables for docker"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"Readme")," file")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the folder and run the project with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". If you don't have the docker image, it will be auto-pulled from ",(0,o.kt)("inlineCode",{parentName:"p"},"hub.docker.com"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Export Microservice Zip",src:t(62467).Z})))}s.isMDXComponent=!0},62467:function(e,n,t){"use strict";n.Z=t.p+"assets/images/microservice_zip_export-9ae611d479650754fcb804c827f42f5c.gif"}}]);