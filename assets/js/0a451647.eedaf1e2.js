"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99017],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(y,i(i({ref:n},g),{},{components:t})):a.createElement(y,i({ref:n},g))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(58168),o=(t(96540),t(15680));const r={title:"Open Data Kit (ODK)"},i=void 0,l={unversionedId:"odk",id:"odk",title:"Open Data Kit (ODK)",description:"Open Data Kit (ODK) Collect",source:"@site/adaptors/odk.md",sourceDirName:".",slug:"/odk",permalink:"/adaptors/odk",draft:!1,tags:[],version:"current",frontMatter:{title:"Open Data Kit (ODK)"},sidebar:"adaptors",previous:{title:"ocl developer readme",permalink:"/adaptors/packages/ocl-readme"},next:{title:"odk@1.0.0",permalink:"/adaptors/packages/odk-docs"}},p={},s=[{value:"Open Data Kit (ODK) Collect",id:"open-data-kit-odk-collect",level:2},{value:"Open Data Kit (ODK) Aggregate",id:"open-data-kit-odk-aggregate",level:2}],g={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"open-data-kit-odk-collect"},"Open Data Kit (ODK) Collect"),(0,o.yg)("p",null,"To bypass ODK Aggregate and submit forms directly to OpenFn make the following\nchanges in your ODK Collect app."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"Type"),", select ",(0,o.yg)("inlineCode",{parentName:"li"},"Other"),"."),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"URL"),", enter `",(0,o.yg)("a",{parentName:"li",href:"https://www.openfn.org"},"https://www.openfn.org")),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"Submission path"),", enter ",(0,o.yg)("inlineCode",{parentName:"li"},"/inbox/your-unique-inbox-url")," (you can copy\nthis from your OpenFn Inbox)."),(0,o.yg)("li",{parentName:"ol"},"Optional: If you have enabled auth methods on your inbox, enter your\n",(0,o.yg)("inlineCode",{parentName:"li"},"username")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"password")," on this same screen.")),(0,o.yg)("p",null,"Note that you cannot load forms from OpenFn. Forms must be loaded directly via\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.opendatakit.org/collect-forms/#loading-forms-directly"},"ODK's direct method"),",\nwhich allows you to send forms as files via email/Whatsapp. Users can then\nchoose to download the files and save them in the ",(0,o.yg)("inlineCode",{parentName:"p"},"odk/ forms")," folder on their\nmobile."),(0,o.yg)("p",null,"Note that if you want to reverse this setup and configure ODK Collect to\nre-connect to your Aggregate instance again:`"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go back to ",(0,o.yg)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Select ",(0,o.yg)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"Type"),", select ",(0,o.yg)("inlineCode",{parentName:"li"},"ODK Aggregate"),"."),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"URL"),", enter ",(0,o.yg)("inlineCode",{parentName:"li"},"Your Aggregate URL")),(0,o.yg)("li",{parentName:"ol"},"Under ",(0,o.yg)("inlineCode",{parentName:"li"},"Submission path"),", enter ",(0,o.yg)("inlineCode",{parentName:"li"},"/submissions"),"."),(0,o.yg)("li",{parentName:"ol"},"Enter your ODK Aggregate ",(0,o.yg)("inlineCode",{parentName:"li"},"username")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"password")," on this same screen.")),(0,o.yg)("h2",{id:"open-data-kit-odk-aggregate"},"Open Data Kit (ODK) Aggregate"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'To new submissions from ODK in real-time, click the "Form Management" tab at\nthe top of your Aggregate interface.'),(0,o.yg)("li",{parentName:"ol"},'Click "Publish" next to the form you\'d like to publish to OpenFn.'),(0,o.yg)("li",{parentName:"ol"},"A dialogue box will open."),(0,o.yg)("li",{parentName:"ol"},'In the "Publish To:" picklist, select ',(0,o.yg)("inlineCode",{parentName:"li"},"Z-ALPHA JSON Server"),"."),(0,o.yg)("li",{parentName:"ol"},'Choose which data to publish in the "Data to Publish:" picklist. You may:\n',(0,o.yg)("strong",{parentName:"li"},'"Upload Existing Data ONLY"')," (ideal for migrations of finished data sets),\n",(0,o.yg)("strong",{parentName:"li"},'"Stream New Submission Data ONLY"')," (ideal for new projects), or ",(0,o.yg)("strong",{parentName:"li"},'"BOTH\nUpload Existing & Stream New Submission Data"')," (ideal for connecting ongoing\nprojects which are already running)."),(0,o.yg)("li",{parentName:"ol"},'In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g.,\n',(0,o.yg)("inlineCode",{parentName:"li"},"https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW"),")"),(0,o.yg)("li",{parentName:"ol"},'Leave "Authorization token:" blank.'),(0,o.yg)("li",{parentName:"ol"},'Leave "Include Media as:" set to "Links(URLs) to Media".'),(0,o.yg)("li",{parentName:"ol"},'Click "Publish" and enter your email address in the dialogue box.'),(0,o.yg)("li",{parentName:"ol"},'Click the "Published Data" tab under "Form Management" and select your form\nto view the status of your publisher. You can also now check your OpenFn\ninbox to see ODK submissions arrive.')))}d.isMDXComponent=!0}}]);