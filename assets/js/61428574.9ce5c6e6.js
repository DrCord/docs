"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[45894],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},y=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=i(a),s=l,m=p["".concat(u,".").concat(s)]||p[s]||d[s]||r;return a?n.createElement(m,g(g({ref:t},y),{},{components:a})):n.createElement(m,g({ref:t},y))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,g[1]=o;for(var i=2;i<r;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},23123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=a(58168),l=(a(96540),a(15680));const r={title:"postgresql@4.2.0",id:"postgresql-docs",keywords:["adaptor","postgresql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},g=void 0,o={unversionedId:"packages/postgresql-docs",id:"packages/postgresql-docs",title:"postgresql@4.2.0",description:"Functions",source:"@site/adaptors/packages/postgresql-docs.md",sourceDirName:"packages",slug:"/packages/postgresql-docs",permalink:"/adaptors/packages/postgresql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"postgresql@4.2.0",id:"postgresql-docs",keywords:["adaptor","postgresql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},sidebar:"adaptors",previous:{title:"PostgreSQL",permalink:"/adaptors/postgresql"},next:{title:"Config for postgresql",permalink:"/adaptors/packages/postgresql-configuration-schema"}},u={},i=[{value:"Functions",id:"functions",level:2},{value:"describeTable",id:"describetable",level:2},{value:"findValue",id:"findvalue",level:2},{value:"insert",id:"insert",level:2},{value:"insertMany",id:"insertmany",level:2},{value:"insertTable",id:"inserttable",level:2},{value:"modifyTable",id:"modifytable",level:2},{value:"sql",id:"sql",level:2},{value:"upsert",id:"upsert",level:2},{value:"upsertIf",id:"upsertif",level:2},{value:"upsertMany",id:"upsertmany",level:2}],y={toc:i},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describetable"},"describeTable(tableName, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#findvalue"},"findValue([filter])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#insert"},"insert(table, record, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#insertmany"},"insertMany(table, records, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#inserttable"},"insertTable(tableName, columns, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#modifytable"},"modifyTable(tableName, columns, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#sql"},"sql(sqlQuery, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(table, uuid, record, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertif"},"upsertIf(logical, table, uuid, record, [options], callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertmany"},"upsertMany(table, uuid, data, [options], callback)"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"describetable"},"describeTable"),(0,l.yg)("p",null,"describeTable(tableName, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"List the columns of a table in a database."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"findvalue"},"findValue"),(0,l.yg)("p",null,"findValue(","[filter]",") \u21d2 ",(0,l.yg)("code",null,"value")),(0,l.yg)("p",null,"Fetch a uuid key given a condition"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[filter]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[filter.uuid]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid value to search for in the specified relation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[filter.relation]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the relation to search for the uuid value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[filter.where]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object that contains key-value pairs to filter the search results.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[filter.operator]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object that contains key-value pairs to specify the type of comparison to perform on the where clause.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mamadou' },\n   operator: { first_name: 'like' }\n })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"insert"},"insert"),(0,l.yg)("p",null,"insert(table, record, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert a record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insert('users', { name: 'Elodie', id: 7 }, { setNull: \"'NaN'\", logValues: true });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"insertmany"},"insertMany"),(0,l.yg)("p",null,"insertMany(table, records, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert many records, using the keys of the first as the column template"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"records"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array or a function that takes state and returns an array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insertMany('users', state => state.data.recordArray, { setNull: \"'undefined'\", logValues: true });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"inserttable"},"insertTable"),(0,l.yg)("p",null,"insertTable(tableName, columns, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a table in database when given an array of columns and a table_name."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"columns"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"modifytable"},"modifyTable"),(0,l.yg)("p",null,"modifyTable(tableName, columns, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Alter an existing table in the database."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"columns"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"sql"},"sql"),(0,l.yg)("p",null,"sql(sqlQuery, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Execute an SQL statement"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sqlQuery"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"a function which takes state and returns a string of SQL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"sql(state => `select(*) from ${state.data.tableName};`, { writeSql: true })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsert"},"upsert"),(0,l.yg)("p",null,"upsert(table, uuid, record, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update a record using ON CONFLICT UPDATE"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { setNull: [\"''\", \"'undefined'\"], writeSql:true, execute: true, logValues: true }\n)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertif"},"upsertIf"),(0,l.yg)("p",null,"upsertIf(logical, table, uuid, record, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true }\n)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertmany"},"upsertMany"),(0,l.yg)("p",null,"upsertMany(table, uuid, data, ","[options]",", callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of objects or a function that returns an array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  'email', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  [\n    { name: 'one', email: 'one@openfn.org' },\n    { name: 'two', email: 'two@openfn.org' },\n  ]\n { logValues: true }\n)\n")),(0,l.yg)("hr",null))}d.isMDXComponent=!0}}]);