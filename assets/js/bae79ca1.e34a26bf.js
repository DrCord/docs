"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49942],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(o),u=a,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||r;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},36380:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(58168),a=(o(96540),o(15680));const r={title:"Collaboration",sidebar_label:"Collaboration",slug:"/collaboration"},l=void 0,i={unversionedId:"manage-projects/collaboration",id:"manage-projects/collaboration",title:"Collaboration",description:"OpenFn allows technical and non-technical users to effectively collaborate for",source:"@site/docs/manage-projects/collaboration.md",sourceDirName:"manage-projects",slug:"/collaboration",permalink:"/documentation/collaboration",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/collaboration.md",tags:[],version:"current",frontMatter:{title:"Collaboration",sidebar_label:"Collaboration",slug:"/collaboration"},sidebar:"docs",previous:{title:"Monitoring Workflows",permalink:"/documentation/monitoring-workflows"},next:{title:"OAuth Authentication",permalink:"/documentation/oauth"}},c={},s=[{value:"Who are project collaborators?",id:"who-are-project-collaborators",level:3},{value:"Add project collaborator(s)",id:"add-project-collaborators",level:3},{value:"Removing a collaborator",id:"removing-a-collaborator",level:3}],p={toc:s},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"OpenFn allows technical and non-technical users to effectively collaborate for\nalignment in the design and management of workflows within a project. This is\npossible through a visual workflow design canvas and other collaboration\nfeatures such as version control, adding collaborators and sharing credentials\namong others. This guide walks you through how to manage collaborators in a\nprojects."),(0,a.yg)("h3",{id:"who-are-project-collaborators"},"Who are project collaborators?"),(0,a.yg)("p",null,"A ",(0,a.yg)("strong",{parentName:"p"},"project collaborator")," is any one who has been granted administrative\nediting or viewing privileges on a OpenFn Project. Collaborators are granted ONE\nof four key roles in a project they that can access as highlighted in the table\nbelow:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Role"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Owner"),(0,a.yg)("td",{parentName:"tr",align:null},"The user who created the project")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Admin"),(0,a.yg)("td",{parentName:"tr",align:null},"A user who is not the owner of a project but has unrestricted access to the project and the workflows included. Also has permission to add other collaborators to the project.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Editor"),(0,a.yg)("td",{parentName:"tr",align:null},"A user with access to a project and is able to edit workflows and project related settings. An editor role is limited compared to the admin")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Viewer"),(0,a.yg)("td",{parentName:"tr",align:null},"A user with access to a project but only limited to viewing the project settings and artifacts.")))),(0,a.yg)("p",null,"You can learn more about the permissions of each role\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/manage-projects/user-roles-permissions"},"here")),(0,a.yg)("h3",{id:"add-project-collaborators"},"Add project collaborator(s)"),(0,a.yg)("p",null,"A user with one of the owner, admin or editor roles in a project can invite new\ncollaborators to their OpenFn project via the project ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings")," page."),(0,a.yg)("p",null,"To add an existing OpenFn user as a collaborator:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Go to the project ",(0,a.yg)("inlineCode",{parentName:"li"},"Settings")," page, navigate to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Collaboration")," tab"),(0,a.yg)("li",{parentName:"ol"},"Click the button ",(0,a.yg)("inlineCode",{parentName:"li"},"Add Collaborator(s)")),(0,a.yg)("li",{parentName:"ol"},"Enter the email address of the user and select the ",(0,a.yg)("inlineCode",{parentName:"li"},"Role")," (Viewer, Editor or\nAdmin)."),(0,a.yg)("li",{parentName:"ol"},"Add more Collaborators by clicking the ",(0,a.yg)("inlineCode",{parentName:"li"},"Add Additional Collaborator")," button.\nYou can also remove one of the collaborators by clicking on the minus (-)\nbutton."),(0,a.yg)("li",{parentName:"ol"},"Click the ",(0,a.yg)("inlineCode",{parentName:"li"},"Save Collaborator")," button to save your changes.")),(0,a.yg)("p",null,"If any of the email addresses entered does not have an OpenFn account\nassociated, you will be requested to authorize OpenFn to create an account for\nthem and send them an invite to your project. Click ",(0,a.yg)("inlineCode",{parentName:"p"},"Invite new user")," to proceed\nwith the invitation."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Collaboration",src:o(78646).A,width:"1916",height:"625"})),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Add collaborator",src:o(36206).A,width:"1022",height:"478"})),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Invite new users",src:o(73920).A,width:"2716",height:"1480"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"A project can have exactly ",(0,a.yg)("em",{parentName:"p"},"one")," Owner and you will not be able to assign an\nowner role to another collaborator. If you need to change the project Owner,\ncontact your Super Admin or ",(0,a.yg)("a",{parentName:"p",href:"mailto:support@openfn.org"},"support@openfn.org"),".")),(0,a.yg)("h3",{id:"removing-a-collaborator"},"Removing a collaborator"),(0,a.yg)("p",null,"To remove a Collaborator from a project, an owner or admin can click the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Remove Collaborator")," button on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Collaboration")," page and confirm the removal\nthrough the pop up window. The owner of a project cannot be removed."),(0,a.yg)("admonition",{title:"The project collaborators page is also where you can configure failure",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"alerts and digests for your projects. Learn more about it\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/notifications"},"in this guide"),". :::")))}g.isMDXComponent=!0},36206:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/add_collab-614522b058ac0fca18555de5507847f1.png"},78646:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/collaboration-62a242f79b743c257d9a533ac905f4a1.png"},73920:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/invite-new-users-cb296b692eb6f4af4dcafef5a54a9960.png"}}]);