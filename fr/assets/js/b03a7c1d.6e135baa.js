(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3289],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),g=r,d=f["".concat(u,".").concat(g)]||f[g]||c[g]||a;return t?o.createElement(d,i(i({ref:n},p),{},{components:t})):o.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57717:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i=["components"],s={title:"Google Forms/Google Sheets"},u={unversionedId:"apps/google-sheets",id:"apps/google-sheets",isDocsHomePage:!1,title:"Google Forms/Google Sheets",description:"Google Forms/Google Sheets",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/google-sheets.md",sourceDirName:"apps",slug:"/apps/google-sheets",permalink:"/fr/documentation/apps/google-sheets",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/google-sheets.md",version:"current",frontMatter:{title:"Google Forms/Google Sheets"},sidebar:"docs",previous:{title:"Go.Data",permalink:"/fr/documentation/apps/godata"},next:{title:"Kobo Toolbox",permalink:"/fr/documentation/apps/kobo-toolbox"}},l=[{value:"Google Forms/Google Sheets",id:"google-formsgoogle-sheets",children:[]}],p={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"google-formsgoogle-sheets"},"Google Forms/Google Sheets"),(0,a.kt)("p",null,"Vous pouvez envoyer des donn\xe9es \xe0 OpenFn chaque fois qu'une nouvelle ligne est ajout\xe9e \xe0 une Google Sheet, par exemple lorsqu'une nouvelle soumission est effectu\xe9e dans un formulaire Google. Vous trouverez ci-dessous un exemple de code que vous pouvez ajouter \xe0 votre Google Sheet pour qu'il envoi des donn\xe9es \xe0 OpenFn chaque fois que de nouvelles lignes sont ajout\xe9es."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sendToOpenFn(e) {\n  var payload = JSON.stringify(e);\n  var url = 'https://www.openfn.org/inbox/your-id-here';\n  var options = {\n    method: 'post',\n    contentType: 'application/json',\n    payload: payload,\n  };\n  var response = UrlFetchApp.fetch(url, options);\n}\n\nfunction isDate(v) {\n  if (Object.prototype.toString.call(v) === '[object Date]') {\n    if (isNaN(v.getTime())) {\n      return false;\n    } else {\n      return true;\n    }\n  } else {\n    return false;\n  }\n}\n\nfunction isNumber(v) {\n  if (Object.prototype.toString.call(v) === '[object Number]') {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction getReportData() {\n  var bookReportData = { formId: 'bookReport', data: [] };\n  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();\n\n  var pageCount = 0;\n  var bookRating = 0;\n\n  for (i in data) {\n    if (isDate(data[i][0])) {\n      //  ignore header line\n      if (isNumber(data[i][3])) {\n        pageCount = data[i][3];\n      }\n\n      if (isNumber(data[i][6])) {\n        bookRating = data[i][6];\n      }\n\n      bookReportData.data.push({\n        Timestamp: data[i][0],\n        Title: data[i][1],\n        Author: data[i][2],\n        NumberOfPages: pageCount,\n        Summary: data[i][4],\n        Protagonist: data[i][5],\n        Rating: bookRating,\n        EmailTeacher: data[i][7],\n        EmailStudent: data[i][8],\n        SendStatus: data[i][9],\n      });\n    }\n  }\n\n  //  Logger.log(bookReportData);\n\n  sendToOpenFn(bookReportData);\n}\n")))}c.isMDXComponent=!0}}]);