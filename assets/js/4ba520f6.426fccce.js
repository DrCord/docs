"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8945],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>p});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),h=o,p=l["".concat(u,".").concat(h)]||l[h]||g[h]||a;return n?i.createElement(p,r(r({ref:t},d),{},{components:n})):i.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(58168),o=(n(96540),n(15680));const a={title:"Webhook Security",sidebar_label:"Webhook Security",slug:"/webhook-security"},r=void 0,c={unversionedId:"manage-projects/webhook-auth",id:"manage-projects/webhook-auth",title:"Webhook Security",description:"This page guides you through the steps of adding an additional layer of security",source:"@site/docs/manage-projects/webhook-auth.md",sourceDirName:"manage-projects",slug:"/webhook-security",permalink:"/documentation/webhook-security",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/webhook-auth.md",tags:[],version:"current",frontMatter:{title:"Webhook Security",sidebar_label:"Webhook Security",slug:"/webhook-security"},sidebar:"docs",previous:{title:"Linking Your Project to GitHub",permalink:"/documentation/link-to-github"},next:{title:"User Profile",permalink:"/documentation/user-profile"}},u={},s=[{value:"Adding a Webhook Authentication Method",id:"adding-a-webhook-authentication-method",level:2},{value:"Adding Authentication Via <code>Project Settings</code>",id:"adding-authentication-via-project-settings",level:3},{value:"Basic Auth",id:"basic-auth",level:4},{value:"API Key",id:"api-key",level:4},{value:"Adding Authentication Via a Workflow",id:"adding-authentication-via-a-workflow",level:3}],d={toc:s},l="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(l,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This page guides you through the steps of adding an additional layer of security\nto your webhook."),(0,o.yg)("h2",{id:"adding-a-webhook-authentication-method"},"Adding a Webhook Authentication Method"),(0,o.yg)("p",null,"In your OpenFn projects, you can utilize webhooks to receive data from external\napplications using a\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/build/triggers"},"Webhook Trigger"),". When using a\nwebhook, you can require external applications to authenticate before sending\nyour project data for more security."),(0,o.yg)("p",null,"OpenFn supports Basic HTTP Authentication using username and password, and API\nKey Authentication using the ",(0,o.yg)("inlineCode",{parentName:"p"},"x-api-key")," request header."),(0,o.yg)("h3",{id:"adding-authentication-via-project-settings"},"Adding Authentication Via ",(0,o.yg)("inlineCode",{parentName:"h3"},"Project Settings")),(0,o.yg)("p",null,"You can add a new Authentication Method under ",(0,o.yg)("inlineCode",{parentName:"p"},"Webhook Security")," of your\n",(0,o.yg)("inlineCode",{parentName:"p"},"Project Settings"),". The authentication you set up here can then be used in any\nof your Workflows within this Project."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Project Settings Webhook Security",src:n(91618).A,width:"1510",height:"617"})),(0,o.yg)("p",null,"After clicking ",(0,o.yg)("inlineCode",{parentName:"p"},"New auth method"),", choose the type - Basic HTTP or API Key\nAuthentication."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"New Auth Method",src:n(54528).A,width:"682",height:"415"})),(0,o.yg)("h4",{id:"basic-auth"},"Basic Auth"),(0,o.yg)("p",null,"For Basic Auth, give it a name, choose a username and password, and hit\n",(0,o.yg)("inlineCode",{parentName:"p"},"Create Auth Method"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Basic Auth",src:n(17391).A,width:"695",height:"606"})),(0,o.yg)("h4",{id:"api-key"},"API Key"),(0,o.yg)("p",null,"For API Key, just choose a name, and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Create Auth Method"),". An API key is\ngenerated for you."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"API auth",src:n(68129).A,width:"682",height:"511"})),(0,o.yg)("p",null,"You can edit or delete your auth methods on this page as well."),(0,o.yg)("p",null,"// screenshot"),(0,o.yg)("p",null,"Once you added an auth method to a webhook, it will show up under\n",(0,o.yg)("inlineCode",{parentName:"p"},"Linked Triggers"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Linked Triggers",src:n(60099).A,width:"737",height:"175"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Linked Triggers",src:n(48537).A,width:"587",height:"287"})),(0,o.yg)("h3",{id:"adding-authentication-via-a-workflow"},"Adding Authentication Via a Workflow"),(0,o.yg)("p",null,"On your Workflows you can use the auth methods you created under\n",(0,o.yg)("inlineCode",{parentName:"p"},"Project Settings"),", or you can create a new one."),(0,o.yg)("p",null,"When you click on ",(0,o.yg)("inlineCode",{parentName:"p"},"Add authentication")," under ",(0,o.yg)("inlineCode",{parentName:"p"},"Webhook Authentication"),", select a\n(or multiple) existing method(s), or hit ",(0,o.yg)("inlineCode",{parentName:"p"},"Create a new webhook auth method"),".\nRefer to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Basic Auth")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"API Key")," sections above for details on adding\nthese."),(0,o.yg)("p",null,"Once you've added an auth method, it will show up in your Webhook Trigger\nconfiguration."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Linked Triggers",src:n(83889).A,width:"465",height:"521"})),(0,o.yg)("p",null,"Only requests using these required auth details will be able to send data to\nyour Workflow."))}g.isMDXComponent=!0},68129:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_api_auth-efdebcbfa3dfc8ee20e2c8c32ebc6afe.png"},91618:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_auth_project_settings-074873543a6d47ce0d6fd5909eae0a46.png"},17391:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_basic_auth-3d8a02592da4f44520a0ca9c8c390f1e.png"},54528:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_choose_auth_method-2a39d2f6f1dcef15303bcf811af91cd5.png"},60099:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_linked_triggers-cb1679b831918ba1415f37c07dceefa1.png"},48537:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_linked_triggers2-883cdb5476ccde57ae9c668cb22e52ef.png"},83889:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lightning_workflow_trigger_added-5cb69f57fda516d19fbda1389ae5fb89.png"}}]);