"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[98230],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,c=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(c,s(s({ref:t},g),{},{components:n})):o.createElement(c,s({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(58168),a=(n(96540),n(15680));const r={title:"Google Forms/Google Sheets"},s=void 0,i={unversionedId:"googlesheets",id:"googlesheets",title:"Google Forms/Google Sheets",description:"Google Sheets Adaptor Overview",source:"@site/adaptors/googlesheets.md",sourceDirName:".",slug:"/googlesheets",permalink:"/adaptors/googlesheets",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Forms/Google Sheets"},sidebar:"adaptors",previous:{title:"googlehealthcare developer readme",permalink:"/adaptors/packages/googlehealthcare-readme"},next:{title:"googlesheets@2.4.0",permalink:"/adaptors/packages/googlesheets-docs"}},l={},p=[{value:"Google Sheets Adaptor Overview",id:"google-sheets-adaptor-overview",level:2},{value:"1. Pushing Data to OpenFn",id:"1-pushing-data-to-openfn",level:3},{value:"2. Pulling Data from Google Sheets",id:"2-pulling-data-from-google-sheets",level:3},{value:"3. Pushing Data to Google Sheets",id:"3-pushing-data-to-google-sheets",level:3}],g={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"google-sheets-adaptor-overview"},"Google Sheets Adaptor Overview"),(0,a.yg)("p",null,"Google Sheets adaptor provides seamless integration between Google Forms, Google\nSheets, and the OpenFn platform, enabling robust data flow management. There are\ntwo primary ways to utilize this adaptor, each catering to specific use cases:"),(0,a.yg)("h3",{id:"1-pushing-data-to-openfn"},"1. Pushing Data to OpenFn"),(0,a.yg)("p",null,"With this method, data from Google Forms or Google Sheets is automatically\npushed to an OpenFn webhook trigger workflow whenever new entries are made. This\nreal-time approach ensures that your data processing pipelines are continuously\nfed with the latest information."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Monitoring survey responses in real-time. - Triggering\nimmediate actions based on form submissions. - Enabling timely data\nsynchronization between Google Forms/Sheets and external systems."),(0,a.yg)("p",null,"To push data to OpenFn in real-time we will have to configure a ",(0,a.yg)("em",{parentName:"p"},"trigger")," on a\nGoogle App Script as demonstrated in the example below.\n",(0,a.yg)("img",{parentName:"p",src:"https://github.com/OpenFn/docs/assets/167166847/4680c12b-ad57-497e-9073-37e287624f42",alt:"image"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function sendToOpenFn(data) {\n  var payload = JSON.stringify(data);\n  var url = 'https://app.openfn.org/i/your-workorder-id';\n  var options = {\n    method: 'post',\n    contentType: 'application/json',\n    payload: payload,\n  };\n  var response = UrlFetchApp.fetch(url, options);\n  Logger.log(response);\n}\n\nfunction onFormSubmit(e) {\n  var headers = Object.keys(e.namedValues); // Get column headers from form responses\n\n  // Create the survey form entry object dynamically\n  var surveyFormEntry = { formId: 'surveyForm', data: {} };\n\n  // Iterate over each row of form responses\n  for (var i = 1; i < e.values.length; i++) {\n    // Start from index 1 to skip header row\n    var formData = {};\n\n    // Iterate over each column header and assign corresponding value from form response\n    for (var j = 0; j < headers.length; j++) {\n      var value = e.namedValues[headers[j]][i - 1]\n        ? e.namedValues[headers[j]][i - 1].toString()\n        : ''; // Convert value to string, handle empty values\n      if (value.trim() !== '') {\n        // Check if the value is not empty\n        formData[headers[j]] = value;\n      }\n    }\n    if (Object.keys(formData).length > 0) {\n      surveyFormEntry.data = formData;\n      // Send the survey form entry to OpenFn and log the workorder id back on Google sheet\n      sendToOpenFn(surveyFormEntry); // Sending data to OpenFn and getting the response\n    }\n  }\n}\n")),(0,a.yg)("h3",{id:"2-pulling-data-from-google-sheets"},"2. Pulling Data from Google Sheets"),(0,a.yg)("p",null,"Alternatively, you can pull data from Google Sheets at specific intervals or\non-demand using a ",(0,a.yg)("inlineCode",{parentName:"p"},"cron")," workflow in OpenFn, allowing for more controlled data\nretrieval processes. This method is particularly useful when you need to fetch\nhistorical data or perform periodic data updates."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Aggregating data for periodic reporting or analysis. -\nImplementing batch processing for efficiency and resource optimization."),(0,a.yg)("p",null,"The example below shows how to configure a trigger on Google sheets that sends\ndata to OpenFn on the first day of the month as well as a code snippet showing\nhow to retrieve report data from a Google Sheets spreadsheet and send it to\nOpenFn. By customizing these functions to suit your specific requirements, you\ncan effectively manage data flow between Google Sheets and OpenFn.\n",(0,a.yg)("img",{parentName:"p",src:"https://github.com/OpenFn/docs/assets/167166847/61ccd374-44bb-4634-b66a-556396914e87",alt:"Screenshot 2024-05-20 at 20 34 52"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// Function to send the data to OpenFn using a POST request\nfunction sendToOpenFn(e) {\n  // Convert the event object to a JSON string\n  var payload = JSON.stringify(e);\n  // The URL of the OpenFn Webhook where data will be sent\n  var url = 'https://www.openfn.org/i/webhook-id-here';\n  // Options for the UrlFetchApp.fetch method\n  var options = {\n    method: 'post',\n    contentType: 'application/json',\n    payload: payload,\n  };\n  // Send the POST request with the payload to the specified URL\n  var response = UrlFetchApp.fetch(url, options);\n}\n\n// Function to check if a value is a valid Date object\nfunction isDate(v) {\n  // Check if the value is a Date object\n  if (Object.prototype.toString.call(v) === '[object Date]') {\n    // Check if the Date object is valid\n    if (isNaN(v.getTime())) {\n      return false; // Invalid date\n    } else {\n      return true; // Valid date\n    }\n  } else {\n    return false; // Not a Date object\n  }\n}\n\n// Function to check if a value is a Number\nfunction isNumber(v) {\n  // Check if the value is a Number object\n  if (Object.prototype.toString.call(v) === '[object Number]') {\n    return true; // It's a number\n  } else {\n    return false; // It's not a number\n  }\n}\n\n// Function to get report data from the active Google Sheet and send it to OpenFn\nfunction getReportData() {\n  // Initialize an object to hold the form ID and data\n  var bookReportData = { formId: 'bookReport', data: [] };\n  // Get all data from the active sheet as a 2D array\n  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();\n\n  // Initialize variables to store page count and book rating\n  var pageCount = 0;\n  var bookRating = 0;\n\n  // Loop through each row in the data\n  for (i in data) {\n    // Check if the first cell in the row is a valid date (to ignore the header line)\n    if (isDate(data[i][0])) {\n      // If the page count column (index 3) is a number, store its value\n      if (isNumber(data[i][3])) {\n        pageCount = data[i][3];\n      }\n\n      // If the rating column (index 6) is a number, store its value\n      if (isNumber(data[i][6])) {\n        bookRating = data[i][6];\n      }\n\n      // Push the row data as an object to the bookReportData array\n      bookReportData.data.push({\n        Timestamp: data[i][0], // Timestamp of the report\n        Title: data[i][1], // Title of the book\n        Author: data[i][2], // Author of the book\n        NumberOfPages: pageCount, // Number of pages in the book\n        Summary: data[i][4], // Summary of the book\n        Protagonist: data[i][5], // Protagonist of the book\n        Rating: bookRating, // Rating given to the book\n        EmailTeacher: data[i][7], // Teacher's email\n        EmailStudent: data[i][8], // Student's email\n        SendStatus: data[i][9], // Status of the data sending\n      });\n    }\n  }\n\n  // Log the bookReportData object for debugging (optional)\n  // Logger.log(bookReportData);\n\n  // Send the collected data to OpenFn\n  sendToOpenFn(bookReportData);\n}\n")),(0,a.yg)("h3",{id:"3-pushing-data-to-google-sheets"},"3. Pushing Data to Google Sheets"),(0,a.yg)("p",null,"The Google Sheets adaptor can also be used to push data to Google Sheets from\nother systems via OpenFn. This allows for seamless integration between external\napplications and Google Sheets, leveraging OpenFn as the integrator."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Importing data from CRM systems into Google Sheets for sales\nanalysis. - Updating inventory levels in a Google Sheets spreadsheet from an\ne-commerce platform. - Automatically populating project management data from\ntask tracking systems into Google Sheets for reporting purposes."),(0,a.yg)("p",null,"A step by step guide is found\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/tutorials/http-to-googlesheets"},"in this tutorial"),"\nthat shows us how to get data via a REST API and push it to Google Sheet."))}h.isMDXComponent=!0}}]);