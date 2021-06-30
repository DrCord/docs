(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1536],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95818:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),i={title:"Developing Connected Applications",sidebar_label:"Building Compliant APIs"},s={unversionedId:"for-devs",id:"for-devs",isDocsHomePage:!1,title:"Developing Connected Applications",description:"This section is for you if you are hoping to build or extend an existing",source:"@site/docs/for-devs.md",sourceDirName:".",slug:"/for-devs",permalink:"/documentation/for-devs",editUrl:"https://github.com/openfn/docs/edit/main/docs/for-devs.md",version:"current",sidebar_label:"Building Compliant APIs",frontMatter:{title:"Developing Connected Applications",sidebar_label:"Building Compliant APIs"},sidebar:"docs",previous:{title:"Documentation Roadmap",permalink:"/documentation/contributing/roadmap"},next:{title:"Google Summer of Code",permalink:"/documentation/gsoc"}},l=[{value:"Sending data to OpenFn",id:"sending-data-to-openfn",children:[{value:"Payload sizing",id:"payload-sizing",children:[]}]},{value:"Receiving data from OpenFn",id:"receiving-data-from-openfn",children:[]}],p={toc:l};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section is for you if you are hoping to build or extend an existing\napplication that can connect to OpenFn. We follow modern web-standard JSON api\nguidelines."),(0,r.kt)("p",null,'For your application to a be data provider (or "source") for OpenFn\nintegrations, we highly recommend that you create a "notifications service"\n(sometimes called a "webhooks service" or "event-based push API"). This is\npreferable to using a REST api for two reasons: (1) A notifications service will\ngive your clients the ability to set up real-time integrations, and (2) a\nnotifications service is more efficient for both your servers and OpenFn\u2014instead\nof having requests be made and handled every X seconds, your servers and\nOpenFn\'s servers will only work when new data is available.'),(0,r.kt)("p",null,'For your application to be a consumer (or "destination") for OpenFn, you must\neither have a standard, JSON-based rest API or create a language-package that\nmeets your API specifications.'),(0,r.kt)("h2",{id:"sending-data-to-openfn"},"Sending data to OpenFn"),(0,r.kt)("p",null,"To send data to OpenFn, your application must be able to make an HTTPS post to\nan external URL with a valid JSON object as the post body. See the following\nexample using cURL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Cache-Control: no-cache" \\\n  -d \'{"foo":"bar", "baz":"qux"}\' \\\n  "https://staging.openfn.org/inbox/some-secret-api-key"\n')),(0,r.kt)("p",null,"OpenFn will respond with a 200 and an empty JSON object in the event of a\nsuccessful post. 400s mean that the user's external URL is wrong, and 500s means\nthat there is an application error on OpenFn. While 500s are rare, they could be\ndue to invalid JSON in your POST body."),(0,r.kt)("p",null,"If you cannot notify an external URL when some event takes place, you can still\nintegrate with OpenFn if you have a JSON-based REST API. OpenFn users can make\nHTTP GET requests to your application and perform additional actions based on\nyour response. You should allow either basic or token authentication and\nresponse to a valid GET with JSON. There is no specific format for your\nresponse, as users can parse it any way they'd like, extracting relevant data\nand then performing other actions\u2014like loading it into a destination system\u2014with\nthat data. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-http"},"language-http")," for\ndetails on how users make these generic HTTP requests."),(0,r.kt)("h3",{id:"payload-sizing"},"Payload sizing"),(0,r.kt)("p",null,"If you're using the platform, and you're not planning on using an enterprise\nplan you'll have to consider the size of the data you're sending in each\npayload. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is typically limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"10MB")," and you should therefore\nkeep your payloads well below that limit."),(0,r.kt)("h2",{id:"receiving-data-from-openfn"},"Receiving data from OpenFn"),(0,r.kt)("p",null,'To make it easy for users to connect to your application, it\'s highly\nrecommended that you create a language-package with your required authentication\nand a set of simple, allowable actions nicely abstracted into "helper\nfunctions". See ',(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-dhis2"},"language-dhis2"),"\nfor an example of a language-package which creates a simpler interface for a\ntraditional JSON-based REST api. Adaptors are written in Javascript and execute\nin Node. You can convert OpenFn's JSON into XML, or any other format before\nsending it to your application and you may make use of any node modules you'd\nlike. See\n",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-postgresql"},"language-postgresql"),' for an\nexample of an adaptor that connects directly to PostgreSQL databases using a\npopular NPM module called "pg".'),(0,r.kt)("p",null,"To receive data from OpenFn's generic ",(0,r.kt)("inlineCode",{parentName:"p"},"language-http")," adaptor, your application\nmust allow either basic, token, or digest authenticated POST, PUT, or GET\nrequests. (Though it is not advisable to create an API that requires GET\nrequests to create or update data.)"))}c.isMDXComponent=!0}}]);