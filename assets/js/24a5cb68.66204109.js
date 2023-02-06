"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[18918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},80926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={title:"godata developer readme",id:"godata-readme",keywords:["adaptor","readme","godata"]},r="Developer README for the godata adaptor",s={unversionedId:"packages/godata-readme",id:"packages/godata-readme",title:"godata developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/godata",source:"@site/adaptors/packages/godata-readme.md",sourceDirName:"packages",slug:"/packages/godata-readme",permalink:"/adaptors/packages/godata-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"godata developer readme",id:"godata-readme",keywords:["adaptor","readme","godata"]},sidebar:"adaptors",previous:{title:"godata changelog",permalink:"/adaptors/packages/godata-changelog"},next:{title:"Google Forms/Google Sheets",permalink:"/adaptors/googlesheets"}},c={},l=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"Helper Functions",id:"helper-functions",level:2},{value:"post(...)",id:"post",level:3},{value:"Fetch the list of outbreaks",id:"fetch-the-list-of-outbreaks",level:2},{value:"Get a specific outbreak",id:"get-a-specific-outbreak",level:2},{value:"Insert or Update an outbreak using a unique id as a key",id:"insert-or-update-an-outbreak-using-a-unique-id-as-a-key",level:2},{value:"Fetch the list of cases",id:"fetch-the-list-of-cases",level:2},{value:"Get a specific case",id:"get-a-specific-case",level:2},{value:"Insert or Update a case using a unique id as a key",id:"insert-or-update-a-case-using-a-unique-id-as-a-key",level:2},{value:"Fetch the list of contacts",id:"fetch-the-list-of-contacts",level:2},{value:"Get a specific contact",id:"get-a-specific-contact",level:2},{value:"Insert or Update a contact using a unique id as a key",id:"insert-or-update-a-contact-using-a-unique-id-as-a-key",level:2},{value:"Fetch the list of locations",id:"fetch-the-list-of-locations",level:2},{value:"Get a specific location",id:"get-a-specific-location",level:2},{value:"Insert or Update a location using a unique id as a key",id:"insert-or-update-a-location-using-a-unique-id-as-a-key",level:2},{value:"Fetch the list of reference data",id:"fetch-the-list-of-reference-data",level:2},{value:"Get a specific reference data",id:"get-a-specific-reference-data",level:2},{value:"Insert or Update a reference data using a unique id as a key",id:"insert-or-update-a-reference-data-using-a-unique-id-as-a-key",level:2},{value:"Development",id:"development",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-readme-for-the-godata-adaptor"},"Developer README for the godata adaptor"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/godata"},"https://github.com/OpenFn/adaptors/tree/main/packages/godata")),(0,i.kt)("h1",{id:"language-godata"},"language-godata"),(0,i.kt)("p",null,"An OpenFn ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the WHO\nGo.Data API."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.who.int/godata"},"Go.Data")," is an outbreak investigation tool for\nfield data collection during public health emergencies. The tool includes\nfunctionality for case investigation, contact follow-up, visualization of chains\nof transmission including secure data exchange and is designed for flexibility\nin the field, to adapt to the wide range of outbreak scenarios."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View the documentation at ",(0,i.kt)("a",{parentName:"li",href:"https://openfn.github.io/language-godata/"},"https://openfn.github.io/language-godata/")),(0,i.kt)("li",{parentName:"ul"},"To update the documentation site, run:\n",(0,i.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs"))),(0,i.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "mamadou@openfn.org",\n  "password": "supersecret",\n  "apiUrl": "https://www.who-godata.com/api"\n}\n')),(0,i.kt)("h2",{id:"helper-functions"},"Helper Functions"),(0,i.kt)("h3",{id:"post"},"post(...)"),(0,i.kt)("h2",{id:"fetch-the-list-of-outbreaks"},"Fetch the list of outbreaks"),(0,i.kt)("p",null,"This function is used to fetch the whole list of outbreaks in Go.Data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"listOutbreaks(state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"get-a-specific-outbreak"},"Get a specific outbreak"),(0,i.kt)("p",null,"This function can be used to fetch one specific outbreak. A filtering mechanism\nis used to specify a criteria to match. Mutliple outbreaks could be returned if\nmatched by the filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"getOutbreak({ where: { name: 'Outbreak demo' } }, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"insert-or-update-an-outbreak-using-a-unique-id-as-a-key"},"Insert or Update an outbreak using a unique id as a key"),(0,i.kt)("p",null,"This function is used to either update a record in Go.Data if matched or insert\na new one if no record matched the unique id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"upsertOutbreak({\n  externalId: '3dec33-ede3',\n  data: {\n    name: 'string',\n    description: 'string',\n    disease: 'string',\n    countries: [\n      {\n        id: 'SENEGAL',\n      },\n    ],\n    startDate: '2020-12-17T14:54:19.498Z',\n    endDate: '2020-12-17T14:54:19.498Z',\n    longPeriodsBetweenCaseOnset: 0,\n    periodOfFollowup: 0,\n  },\n});\n")),(0,i.kt)("h2",{id:"fetch-the-list-of-cases"},"Fetch the list of cases"),(0,i.kt)("p",null,"This function is used to fetch the whole list of cases for a specific outbreak\nin Go.Data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"listCases('4c444f7-4e11-41d0-c1af-331dd15a892e', state => {\n  console.log(state);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"get-a-specific-case"},"Get a specific case"),(0,i.kt)("p",null,"This function can be used to fetch one specific case for an outbreak. A\nfiltering mechanism can specify a criteria to match. Mutliple cases could be\nreturned if matched by the filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"getCase(\n  '4c444f7-4e11-41d0-c1af-331dd15a892e',\n  { 'where.relationship': { active: true }, where: { firstName: 'Luca' } },\n  state => {\n    console.log(state);\n    return state;\n  }\n);\n")),(0,i.kt)("h2",{id:"insert-or-update-a-case-using-a-unique-id-as-a-key"},"Insert or Update a case using a unique id as a key"),(0,i.kt)("p",null,"This function is used to either update a case in Go.Data if matched or insert a\nnew one if no record matched the unique id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"upsertCase('4dce-3eedce3-rd33', 'visualId',\n  data: state => {\n    const patient = state.data.body;\n    return {\n      firstName: patient.Patient_name.split(' ')[0],\n      lastName: patient.Patient_name.split(' ')[1],\n      visualId: patient.Case_ID,\n      'age:years': patient.Age_in_year,\n      gender: patient.Sex,\n    };\n  });\n")),(0,i.kt)("h2",{id:"fetch-the-list-of-contacts"},"Fetch the list of contacts"),(0,i.kt)("p",null,"This function is used to fetch the whole list of contacts for a specific\noutbreak in Go.Data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"listContacts('4c444f7-4e11-41d0-c1af-331dd15a892e', state => {\n  console.log(state);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"get-a-specific-contact"},"Get a specific contact"),(0,i.kt)("p",null,"This function can be used to get one specific contact for an outbreak. A\nfiltering mechanism can specify a criteria to match. Mutliple contacts could be\nreturned if matched by the filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"getContact('343d-dc3e', { where: { firstName: 'Luca' } }, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"insert-or-update-a-contact-using-a-unique-id-as-a-key"},"Insert or Update a contact using a unique id as a key"),(0,i.kt)("p",null,"This function is used to either update a contact in Go.Data if matched or insert\na new one if no record matched the unique id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"upsertContact('4dce-3eedce3-rd33', 'visualId', {\n  firstName: 'Luca',\n  gender: 'male',\n  'age:years': '20',\n});\n")),(0,i.kt)("h2",{id:"fetch-the-list-of-locations"},"Fetch the list of locations"),(0,i.kt)("p",null,"This function is used to fetch the list of locations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"listLocations(state => {\n  console.log(state);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"get-a-specific-location"},"Get a specific location"),(0,i.kt)("p",null,"This function can be used to get one specific location. A filtering mechanism\ncan specify a criteria to match. Mutliple locations could be returned if matched\nby the filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"getLocation({ where: { name: '30 DE MAYO' } }, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"insert-or-update-a-location-using-a-unique-id-as-a-key"},"Insert or Update a location using a unique id as a key"),(0,i.kt)("p",null,"This function is used to either update a location if matched or insert a new. A\ncustom ",(0,i.kt)("inlineCode",{parentName:"p"},"externalId")," can be provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"upsertLocation('name', {\n  name: '30 DE DECIEMBRE',\n  synonyms: [],\n  identifiers: [],\n  active: true,\n  populationDensity: 0,\n  geoLocation: {\n    lat: -45.343244,\n    lng: -67.193873,\n  },\n});\n")),(0,i.kt)("h2",{id:"fetch-the-list-of-reference-data"},"Fetch the list of reference data"),(0,i.kt)("p",null,"This function is used to fetch the list of reference data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"listReferenceData(state => {\n  console.log(state);\n  return state;\n});\n")),(0,i.kt)("h2",{id:"get-a-specific-reference-data"},"Get a specific reference data"),(0,i.kt)("p",null,"This function can be used to get one specific reference data. A filtering\nmechanism can specify a criteria to match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"getReferenceData(\n  { where: { categoryId: 'LNG_REFERENCE_DATA_CATEGORY_CENTRE_NAME' } },\n  state => {\n    console.log(state.data);\n    return state;\n  }\n);\n")),(0,i.kt)("h2",{id:"insert-or-update-a-reference-data-using-a-unique-id-as-a-key"},"Insert or Update a reference data using a unique id as a key"),(0,i.kt)("p",null,"This function is used to either update a location if matched or insert a new. A\ncustom ",(0,i.kt)("inlineCode",{parentName:"p"},"externalId")," can be provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"upsertReferenceData('id', {\n  categoryId: 'CATEGORY',\n  value: 'VALUE',\n  readOnly: false,\n  active: true,\n  id: 'ID',\n  createdAt: '2020-10-01T18:48:31.784Z',\n  createdBy: '95d31ea9',\n  updatedAt: '2020-10-01T18:48:31.784Z',\n  updatedBy: '95d31ea9',\n  createdOn: 'API',\n  deleted: false,\n});\n")),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"Clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,i.kt)("p",null,"Run tests using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,i.kt)("p",null,"Build the project using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,i.kt)("p",null,"To just build the docs run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}p.isMDXComponent=!0}}]);