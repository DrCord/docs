"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={title:"sftp developer readme",id:"sftp-readme",keywords:["adaptor","readme","sftp"]},s="Developer README for the sftp adaptor",p={unversionedId:"packages/sftp-readme",id:"packages/sftp-readme",title:"sftp developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/sftp",source:"@site/adaptors/packages/sftp-readme.md",sourceDirName:"packages",slug:"/packages/sftp-readme",permalink:"/fr/adaptors/packages/sftp-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp developer readme",id:"sftp-readme",keywords:["adaptor","readme","sftp"]},sidebar:"adaptors",previous:{title:"sftp changelog",permalink:"/fr/adaptors/packages/sftp-changelog"},next:{title:"smpp@1.2.0",permalink:"/fr/adaptors/packages/smpp-docs"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"List the content of a directory",id:"list-the-content-of-a-directory",level:2},{value:"sample getCSV expression",id:"sample-getcsv-expression",level:2},{value:"sample putCSV expression",id:"sample-putcsv-expression",level:2},{value:"Get JSON from FTP server",id:"get-json-from-ftp-server",level:3},{value:"Custom request to an http endpoint",id:"custom-request-to-an-http-endpoint",level:3},{value:"Development",id:"development",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-sftp-adaptor"},"Developer README for the sftp adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/sftp"},"https://github.com/OpenFn/adaptors/tree/main/packages/sftp")),(0,r.kt)("h1",{id:"language-sftp"},"Language SFTP"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to work with SFTP servers."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "username": "sftp_user",\n  "password": "sftp_pass",\n  "host": "191.173.xxx.yy",\n  "port": PORT\n}\n')),(0,r.kt)("h2",{id:"list-the-content-of-a-directory"},"List the content of a directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  return list('/path/To/Directory')(state).then(response => {\n    console.log(`There are ${response.data.length} files.`);\n    return response;\n  });\n});\n")),(0,r.kt)("h2",{id:"sample-getcsv-expression"},"sample getCSV expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getCSV('path/to/file.csv', 'utf8', {\n  quote: 'off',\n  delimiter: ';',\n  noheader: true,\n  filter: {\n    type: 'startsWith',\n    key: 'field1',\n    value: 'JO',\n  },\n});\n")),(0,r.kt)("p",null,"A more complex example that breaks up the CSV file into multiple payloads for\nquicker processing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  return list('/')(state).then(state => {\n    const targetNames = [\n      'exportContacts', //example fileName\n    ];\n    console.log(`Fetching files: ${targetNames}`);\n    const files = state.data\n      .filter(file => file.name.split('.')[1] === 'csv')\n      .filter(file =>\n        targetNames.some(targetName =>\n          file.name.toLowerCase().includes(targetName)\n        )\n      );\n\n    if (files.length === 0) console.log('No new CSV files found.');\n    return { ...state, data: {}, files };\n  });\n});\n\neach(\n  '$.files[*]',\n  fn(state => {\n    const { configuration, data } = state;\n\n    return getCSV(`/${data.name}`)(state).then(async state => {\n      const headers = state.data\n        .shift()\n        .split(';')\n        .map(h => (h = h.replace(/\"/g, '')));\n\n      function toObject(item) {\n        const values = item.split(';');\n\n        return Object.fromEntries(\n          headers.map((k, i) => {\n            return values[i]\n              ? [k, values[i].replace(/\"/g, '')]\n              : [k, values[i]];\n          })\n        );\n      }\n\n      let countInbox = 0;\n\n      //to post CSV data as individual Messages to OpenFn Inbox\n      const postToInbox = async data => {\n        countInbox++;\n\n        console.log(`Sending request ${countInbox} to inbox`);\n\n        await new Promise(resolve => setTimeout(resolve, 200));\n\n        await http.post({\n          url: configuration.openfnInboxUrl,\n          data: data,\n          maxContentLength: Infinity,\n          maxBodyLength: Infinity,\n        })(state);\n      };\n\n      //To split up into multiple, smaller payloads before send to OpenFn Inbox\n      const chunkSize = 500;\n\n      console.log(\n        state.data.length,\n        'rows will be sent in',\n        Math.ceil(state.data.length / chunkSize),\n        'requests of',\n        chunkSize,\n        'rows each.'\n      );\n\n      while (state.data.length > 0) {\n        console.log('data.length', state.data.length);\n        await postToInbox({\n          fileName: data.name,\n          fileType: data.name.split('-')[0],\n          uploadDate: new Date(data.modifyTime).toISOString(),\n          json: state.data.splice(0, chunkSize).map(toObject),\n        });\n      }\n\n      return { configuration, references: [], data: {} };\n    });\n  })\n);\n")),(0,r.kt)("h2",{id:"sample-putcsv-expression"},"sample putCSV expression"),(0,r.kt)("p",null,"This function converts JSON to CSV and post to a server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"putCSV('/some/path/to_file.csv', 'utf8', { delimiter: ';', noheader: true });\n")),(0,r.kt)("h3",{id:"get-json-from-ftp-server"},"Get JSON from FTP server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getJSON('path/to/file.json', 'utf8');\n")),(0,r.kt)("h3",{id:"custom-request-to-an-http-endpoint"},"Custom request to an http endpoint"),(0,r.kt)("p",null,"This adaptor exports ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common"),". Here, we outline the usage\nin order to make custom requests to an endpoint. It returns a promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  return http\n    .post({ url: 'yourURL', data: { name: 'Mamadou' } })(state)\n    .then(response => {\n      // do something with response;\n      return response;\n    });\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the repo, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To build the docs for this repo, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);