"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77431],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=o(a),g=l,c=k["".concat(u,".").concat(g)]||k[g]||m[g]||r;return a?n.createElement(c,p(p({ref:e},d),{},{components:a})):n.createElement(c,p({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[k]="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1683:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={title:"openspp@1.1.0",id:"openspp-docs",keywords:["adaptor","openspp","addToGroup","createGroup","createIndividual","enroll","getEnrolledPrograms","getGroup","getGroupMembers","getIndividual","getProgram","getPrograms","getServicePoint","removeFromGroup","searchGroup","searchIndividual","unenroll","updateGroup","updateIndividual"]},p=void 0,i={unversionedId:"packages/openspp-docs",id:"packages/openspp-docs",title:"openspp@1.1.0",description:"Functions",source:"@site/adaptors/packages/openspp-docs.md",sourceDirName:"packages",slug:"/packages/openspp-docs",permalink:"/fr/adaptors/packages/openspp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openspp@1.1.0",id:"openspp-docs",keywords:["adaptor","openspp","addToGroup","createGroup","createIndividual","enroll","getEnrolledPrograms","getGroup","getGroupMembers","getIndividual","getProgram","getPrograms","getServicePoint","removeFromGroup","searchGroup","searchIndividual","unenroll","updateGroup","updateIndividual"]},sidebar:"adaptors",previous:{title:"openmrs developer readme",permalink:"/fr/adaptors/packages/openmrs-readme"},next:{title:"Config for openspp",permalink:"/fr/adaptors/packages/openspp-configuration-schema"}},u={},o=[{value:"Functions",id:"functions",level:2},{value:"addToGroup",id:"addtogroup",level:2},{value:"createGroup",id:"creategroup",level:2},{value:"createIndividual",id:"createindividual",level:2},{value:"enroll",id:"enroll",level:2},{value:"getEnrolledPrograms",id:"getenrolledprograms",level:2},{value:"getGroup",id:"getgroup",level:2},{value:"getGroupMembers",id:"getgroupmembers",level:2},{value:"getIndividual",id:"getindividual",level:2},{value:"getProgram",id:"getprogram",level:2},{value:"getPrograms",id:"getprograms",level:2},{value:"getServicePoint",id:"getservicepoint",level:2},{value:"removeFromGroup",id:"removefromgroup",level:2},{value:"searchGroup",id:"searchgroup",level:2},{value:"searchIndividual",id:"searchindividual",level:2},{value:"unenroll",id:"unenroll",level:2},{value:"updateGroup",id:"updategroup",level:2},{value:"updateIndividual",id:"updateindividual",level:2}],d={toc:o},k="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#addToGroup"},"addToGroup(group_id, individual_id, role)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createGroup"},"createGroup(data, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createIndividual"},"createIndividual(data, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#enroll"},"enroll(registrant_id, program_id)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getEnrolledPrograms"},"getEnrolledPrograms(registrant_id, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getGroup"},"getGroup(registrant_id, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getGroupMembers"},"getGroupMembers(registrant_id, [offset], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getIndividual"},"getIndividual(registrant_id, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getProgram"},"getProgram(program_id, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getPrograms"},"getPrograms([offset], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getServicePoint"},"getServicePoint(name, [offset], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#removeFromGroup"},"removeFromGroup(group_id, individual_id)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#searchGroup"},"searchGroup(domain, [offset], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#searchIndividual"},"searchIndividual(domain, [offset], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#unenroll"},"unenroll(registrant_id, program_id)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#updateGroup"},"updateGroup(group_id, data)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#updateIndividual"},"updateIndividual(individual_id, data)"))),(0,l.kt)("h2",{id:"addtogroup"},"addToGroup"),(0,l.kt)("p",null,"addToGroup(group_id, individual_id, role) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nadd individual to group in OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"group registrant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"individual_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"individual registrant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"individual role in group")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'addToGroup("GRP_B2BRHJN2", "IND_8DUQL4M4", "Head")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"creategroup"},"createGroup"),(0,l.kt)("p",null,"createGroup(data, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\ncreate new group for OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant create data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'createGroup({ name: "Group 1" })\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"createindividual"},"createIndividual"),(0,l.kt)("p",null,"createIndividual(data, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\ncreate new individual for OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant create data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'createIndividual({ name: "Individual 1" })\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"enroll"},"enroll"),(0,l.kt)("p",null,"enroll(registrant_id, program_id)\nenroll registrant to program in OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id of group / individual wanted to enroll")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"program_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"program_id of program")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'enroll("IND_Q4VGGZPF", "PROG_2023_00000001")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getenrolledprograms"},"getEnrolledPrograms"),(0,l.kt)("p",null,"getEnrolledPrograms(registrant_id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget programs list for specific registrant from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id of group / individual wanted to search")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getEnrolledPrograms("IND_Q4VGGZPF")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getgroup"},"getGroup"),(0,l.kt)("p",null,"getGroup(registrant_id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget group information from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The registrant_id of the group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getGroup("GRP_Q4VGGZPF")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getgroupmembers"},"getGroupMembers"),(0,l.kt)("p",null,"getGroupMembers(registrant_id, ","[offset]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget group members information from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset searching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getGroupMembers("GRP_Q4VGGZPF")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getindividual"},"getIndividual"),(0,l.kt)("p",null,"getIndividual(registrant_id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget individual information from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The registrant_id of the individual")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getIndividual("IND_Q4VGGZPF")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getprogram"},"getProgram"),(0,l.kt)("p",null,"getProgram(program_id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget program information from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"program_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"searching domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getProgram("PROG_2023_00000001")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getprograms"},"getPrograms"),(0,l.kt)("p",null,"getPrograms(","[offset]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget programs list from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"offset from start")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getPrograms(100)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getservicepoint"},"getServicePoint"),(0,l.kt)("p",null,"getServicePoint(name, ","[offset]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget service points information from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The number of the agent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset searching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getServicePoint("000117")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"removefromgroup"},"removeFromGroup"),(0,l.kt)("p",null,"removeFromGroup(group_id, individual_id) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nremove individual from group in OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"group registrant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"individual_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"individual registrant id")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'removeFromGroup("GRP_B2BRHJN2", "IND_8DUQL4M4")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"searchgroup"},"searchGroup"),(0,l.kt)("p",null,"searchGroup(domain, ","[offset]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget groups from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"searching domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset searching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'searchGroup([["registrant_id", "=", "GRP_Q4VGGZPF"]])\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"searchindividual"},"searchIndividual"),(0,l.kt)("p",null,"searchIndividual(domain, ","[offset]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nget individuals from OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"searching domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset searching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'searchIndividual([["registrant_id", "=", "IND_Q4VGGZPF"]])\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"unenroll"},"unenroll"),(0,l.kt)("p",null,"unenroll(registrant_id, program_id)\nunenroll registrant from program in OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant_id of group / individual wanted to unenroll")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"program_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"program_id of program")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'unenroll("IND_Q4VGGZPF", "PROG_2023_00000001")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"updategroup"},"updateGroup"),(0,l.kt)("p",null,"updateGroup(group_id, data) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nupdate group for OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"group registrant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant update data")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'updateGroup("GRP_B2BRHJN2", { name: "Group 1" })\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"updateindividual"},"updateIndividual"),(0,l.kt)("p",null,"updateIndividual(individual_id, data) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nupdate individual for OpenSPP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"individual_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"individual registrant id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"registrant update data")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'updateIndividual("IND_8DUQL4M4", { name: "Individual 1" })\n')),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);