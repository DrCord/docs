"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[61153],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=i(a),s=l,c=y["".concat(p,".").concat(s)]||y[s]||u[s]||r;return a?n.createElement(c,g(g({ref:t},d),{},{components:a})):n.createElement(c,g({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:l,g[1]=o;for(var i=2;i<r;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},17541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(58168),l=(a(96540),a(15680));const r={title:"msgraph@0.7.1",id:"msgraph-docs",keywords:["adaptor","msgraph","create","get","getDrive","getFile","getFolder","uploadFile"]},g=void 0,o={unversionedId:"packages/msgraph-docs",id:"packages/msgraph-docs",title:"msgraph@0.7.1",description:"create(resource, data, callback)",source:"@site/adaptors/packages/msgraph-docs.md",sourceDirName:"packages",slug:"/packages/msgraph-docs",permalink:"/adaptors/packages/msgraph-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"msgraph@0.7.1",id:"msgraph-docs",keywords:["adaptor","msgraph","create","get","getDrive","getFile","getFolder","uploadFile"]},sidebar:"adaptors",previous:{title:"Moodle",permalink:"/adaptors/moodle"},next:{title:"Config for msgraph",permalink:"/adaptors/packages/msgraph-configuration-schema"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:3},{value:"get",id:"get",level:3},{value:"getDrive",id:"getdrive",level:3},{value:"getFile",id:"getfile",level:3},{value:"getFolder",id:"getfolder",level:3},{value:"uploadFile",id:"uploadfile",level:3},{value:"Utils",id:"utils",level:2},{value:"Utils.sheetToBuffer",id:"Utils_sheetToBuffer",level:3}],d={toc:i},y="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(y,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#create"},"create(resource, data, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#get"},"get(path, query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getdrive"},"getDrive(specifier, name, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getfile"},"getFile(pathOrId, options, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getfolder"},"getFolder(pathOrId, options, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#uploadfile"},"uploadFile(resource, data, callback)"))),(0,l.yg)("p",null,"This adaptor exports the following namespaced functions:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#Utils_sheetToBuffer"},"Utils.sheetToBuffer(rows, options)"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#parsecsv"},"parseCsv()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"create"},"create"),(0,l.yg)("p",null,(0,l.yg)("code",null,"create(resource, data, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Create some resource in msgraph"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resource"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of entity that will be created")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"The data to create the new resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'create("applications", {"displayName": "My App"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"get"},"get"),(0,l.yg)("p",null,(0,l.yg)("code",null,"get(path, query, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Make a GET request to msgraph resource"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"get('sites/root/lists')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getdrive"},"getDrive"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getDrive(specifier, name, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Get a Drive or SharePoint document library. The drive metadata will be written\nto state.drives, where it can be used by other adaptor functions.\nPass { id } to get a drive by id or { id, owner } to get default drive for\nsome parent resource, like a group"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"specifier"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A definition of the drive to retrieve    - id {string} - The ID of the resource or owner.    - owner {string} - The type of drive owner (e.g. sites, groups).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"name"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The local name of the drive used to write to state.drives, ie, state.drives","[name]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"s ","=",">"," s")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get a drive by ID"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getDrive({ id: "YXzpkoLwR06bxC8tNdg71m" })\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get the default drive for a site"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getDrive({ id: "openfn.sharepoint.com", owner: "sites" })\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getfile"},"getFile"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getFile(pathOrId, options, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Get file metadata or file content."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"pathOrId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A path to a file or file id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Query parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"s ","=",">"," s")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get a file by ID"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getFile('01LUM6XOGRONYNTZ26DBBJPTN5IFTQPBIW')\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get a file for a named drive by id"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getFile("01LUM6XOGRONYNTZ26DBBJPTN5IFTQPBIW",{ driveName: "mydrive"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getfolder"},"getFolder"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getFolder(pathOrId, options, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Get the contents or metadata of a folder."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"pathOrId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A path to a folder or folder id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Query parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"s ","=",">"," s")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get a folder by ID"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getFolder('01LUM6XOCKDTZKQC7AVZF2VMHE2I3O6OY3')\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get a folder for a named drive by id"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getFolder("01LUM6XOCKDTZKQC7AVZF2VMHE2I3O6OY3",{ driveName: "mydrive"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"uploadfile"},"uploadFile"),(0,l.yg)("p",null,(0,l.yg)("code",null,"uploadFile(resource, data, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Upload a file to a drive"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resource"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Resource Object")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[resource.driveId]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"Drive Id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[resource.driveId]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"Site Id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[resource.folderId]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"Parent folder id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[resource.contentType]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"Resource content-type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[resource.onConflict]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},'Specify conflict behavior if file with the same name exists. Can be "rename')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"A buffer containing the file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Upload Excel file to a drive using ","`","driveId","`"," and ","`","parantItemId","`"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"uploadFile(\n  state => ({\n    driveId: state.driveId,\n    folderId: state.folderId,\n    fileName: `Tracker.xlsx`,\n  }),\n  state => state.buffer\n);\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Upload Excel file to a SharePoint drive using ","`","siteId","`"," and ","`","parantItemId","`"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"uploadFile(\n  state => ({\n    siteId: state.siteId,\n    folderId: state.folderId,\n    fileName: `Report.xlsx`,\n  }),\n  state => state.buffer\n);\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"utils"},"Utils"),(0,l.yg)("p",null,"These functions belong to the Utils namespace."),(0,l.yg)("h3",{id:"Utils_sheetToBuffer"},"Utils.sheetToBuffer"),(0,l.yg)("p",null,(0,l.yg)("code",null,"sheetToBuffer(rows, options) \u21d2")),(0,l.yg)("p",null,"The function ",(0,l.yg)("inlineCode",{parentName:"p"},"sheetToBuffer")," takes in rows, options and optional callback, It creates a workbook\nand worksheet using the rows, appends the worksheet to the workbook, and returns the workbook as a\nbuffer."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": a buffer containing the Excel file in ",(0,l.yg)("inlineCode",{parentName:"p"},"state.buffer"),".  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rows"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The ",(0,l.yg)("inlineCode",{parentName:"td"},"rows")," parameter is an array of objects representing the data to be written to the Excel sheet. Each object in the array represents a row in the sheet, and the keys of the object represent the column headers. The values of the object represent the data in each cell of the row.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The ",(0,l.yg)("inlineCode",{parentName:"td"},"options")," parameter is an object that contains additional configuration options")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.wsName]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"Worksheet name i.e 32 Characters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.bookType]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"String")),(0,l.yg)("td",{parentName:"tr",align:null},"File format of the exported file, Default is 'xlsx'. See ",(0,l.yg)("a",{parentName:"td",href:"https://docs.sheetjs.com/docs/api/write-options/#supported-output-formats"},"here")," for the function. It can have the following properties:")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Create a buffer containing excel file with ","`","xlsx","`"," output format  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"sheetToBuffer('$.data[*]', {\n wsName: 'Invalid Grant Codes',\n bookType: 'xlsx',\n});\n")),(0,l.yg)("hr",null))}u.isMDXComponent=!0}}]);