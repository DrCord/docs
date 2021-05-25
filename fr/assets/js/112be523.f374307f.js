(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7895],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},931:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o={id:"each",title:"The each(...) operation"},l={unversionedId:"jobs/each",id:"jobs/each",isDocsHomePage:!1,title:"The each(...) operation",description:"The each operation allows you to perform another operation on each item in an",source:"@site/docs/jobs/each.md",sourceDirName:"jobs",slug:"/jobs/each",permalink:"/fr/documentation/jobs/each",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/each.md",version:"current",frontMatter:{id:"each",title:"The each(...) operation"},sidebar:"docs",previous:{title:"Initial and final state for runs",permalink:"/fr/documentation/jobs/state"},next:{title:"The OpenFn Job Studio",permalink:"/fr/documentation/jobs/job-studio"}},p=[{value:"Each takes two arguments",id:"each-takes-two-arguments",children:[{value:"arrayPath",id:"arraypath",children:[]},{value:"the operation",id:"the-operation",children:[]}]},{value:"dataValue(...) <em>inside</em> each(...)",id:"datavalue-inside-each",children:[]},{value:"merge(...) and bringing data &#39;down&#39; into an array:",id:"merge-and-bringing-data-down-into-an-array",children:[]},{value:"beta.each",id:"betaeach",children:[]}],c={toc:p};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"each")," operation allows you to perform another operation on each item in an\narray."),(0,i.kt)("h2",{id:"each-takes-two-arguments"},"Each takes two arguments"),(0,i.kt)("p",null,"In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"each(arrayPath, operation)")," will ",(0,i.kt)("em",{parentName:"p"},"do")," ",(0,i.kt)("inlineCode",{parentName:"p"},"operation")," on each item\nit finds in the ",(0,i.kt)("inlineCode",{parentName:"p"},"arrayPath")," array. It takes just two arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an arrayPath"),(0,i.kt)("li",{parentName:"ol"},"an operation(...)")),(0,i.kt)("h3",{id:"arraypath"},"arrayPath"),(0,i.kt)("p",null,"Let's look at the first argument in ",(0,i.kt)("inlineCode",{parentName:"p"},"each"),"... the path to the array. Consider\nthe following code using the Salesforce adaptor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  dataPath('form.participants[*]'),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n    )\n  )\n);\n")),(0,i.kt)("p",null,"This will upsert a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person__c")," resource in Salesforce for each item found in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"state.data.form.participants")," array. You could specify this path in the\nfollowing ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'$.data.form.participants[*]'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataPath('form.participants[*]')"))),(0,i.kt)("p",null,"Note the JSON path syntax."),(0,i.kt)("h3",{id:"the-operation"},"the operation"),(0,i.kt)("p",null,"If there are 5 participants in there, it will execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," operation on\nall 5 items, in sequence. ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," takes whatever arguments it takes normally\nbut it operates ",(0,i.kt)("em",{parentName:"p"},"inside")," the array. See below for more details on the ",(0,i.kt)("em",{parentName:"p"},"scope")," of\nthis operation."),(0,i.kt)("h2",{id:"datavalue-inside-each"},"dataValue(...) ",(0,i.kt)("em",{parentName:"h2"},"inside")," each(...)"),(0,i.kt)("p",null,"Note that inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)")," operation, using ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue(path)")," will\nevaluate a path inside each item in the array."),(0,i.kt)("h2",{id:"merge-and-bringing-data-down-into-an-array"},"merge(...) and bringing data 'down' into an array:"),(0,i.kt)("p",null,"What if you want to access data in your ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," operation that does ",(0,i.kt)("em",{parentName:"p"},"not")," exist\nin the array itself. You could use a data preparation step (see: ",(0,i.kt)("inlineCode",{parentName:"p"},"alterState"),")\nor make use of ",(0,i.kt)("inlineCode",{parentName:"p"},"merge(path, data)")," which allows you to merge data from the\ninitial scope down into your array and access it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," operation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  merge(\n    dataPath('form.participants[*]'),\n    fields(\n      field('school_id', dataValue('form.school.id')),\n      field('intervention_type', dataValue('form.type'))\n    )\n  ),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n      // new fields...\n      field('School__c', dataValue('school_id')),\n      field('Intervention_Type__c', dataValue('intervention_type'))\n    )\n  )\n);\n")),(0,i.kt)("h2",{id:"betaeach"},"beta.each"),(0,i.kt)("p",null,"After using an ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)")," operation the scope of subsequent operations will be\ninside the array at ",(0,i.kt)("inlineCode",{parentName:"p"},"arrayPath"),". If you want to return to the top-level scope so\nthat you can iterate through another array rather than continuing to work inside\nthe first array called with ",(0,i.kt)("inlineCode",{parentName:"p"},"each()"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"beta.each")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"beta.each(...)")," will scopes an array of data based on a JSONPath but then\n",(0,i.kt)("strong",{parentName:"p"},"return")," to the state it was given upon completion. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-common/blob/master/src/beta.js#L44"},"source"),"\nhere."),(0,i.kt)("p",null,"This is necessary if you string multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)")," functions together in-line\nin the same expression. (E.g., given data which has multiple separate 'repeat\ngroups' in a form which are rendered as arrays, you want to create new records\nfor each item inside the first repeat group, then ",(0,i.kt)("em",{parentName:"p"},"RETURN TO THE TOP LEVEL")," of\nthe data, and then create new records for each item in the second repeat group.\nUsing ",(0,i.kt)("inlineCode",{parentName:"p"},"beta.each(...)")," lets you enter the first array, create your records, then\nreturn to the top level and be able to enter the second array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// create some schools from the state.data.form.schools array...\nbeta.each(\n  dataPath('form.schools[*]'),\n  upsert(\n    'School__c',\n    'School_ID__c',\n    fields(\n      field('School_ID__c', dataValue('schoolId')),\n      field('School_Name__c', dataValue('schoolName')),\n    )\n  )\n);\n\n// back up at the top level, we scope the next array with each...\nbeta.each(\n  dataPath('form.participants[*]'),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n    )\n  )\n);\n")))}s.isMDXComponent=!0}}]);