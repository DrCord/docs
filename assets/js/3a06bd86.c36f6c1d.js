"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23717],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},84464:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(58168),o=(a(96540),a(15680));const r={title:"Javascript Tips",sidebar_label:"Javascript Tips"},i=void 0,s={unversionedId:"jobs/javascript",id:"jobs/javascript",title:"Javascript Tips",description:"OpenFn supports all modern JavaScript features.",source:"@site/docs/jobs/javascript.md",sourceDirName:"jobs",slug:"/jobs/javascript",permalink:"/documentation/jobs/javascript",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/javascript.md",tags:[],version:"current",frontMatter:{title:"Javascript Tips",sidebar_label:"Javascript Tips"},sidebar:"docs",previous:{title:"Input and output state",permalink:"/documentation/jobs/state"},next:{title:"Job Examples",permalink:"/documentation/jobs/job-examples"}},l={},p=[{value:"Using the <code>fn(...)</code> operation from the common adaptor",id:"using-the-fn-operation-from-the-common-adaptor",level:3},{value:"Variables: var vs let vs const",id:"variables-var-vs-let-vs-const",level:3},{value:"Optional chaining",id:"optional-chaining",level:3},{value:"Arrow functions",id:"arrow-functions",level:3},{value:"Rest and spread operators",id:"rest-and-spread-operators",level:3},{value:"Implementing mapping rules and global variables",id:"implementing-mapping-rules-and-global-variables",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"OpenFn supports all modern JavaScript features."),(0,o.yg)("p",null,"This section highlights some useful JavaScript features and operators which\nmight help make your code cleaner. This is not meant to be an exhaustive guide,\njust a pointer to some good techniques on some of the newer aspects of the\nlanguage."),(0,o.yg)("h3",{id:"using-the-fn-operation-from-the-common-adaptor"},"Using the ",(0,o.yg)("inlineCode",{parentName:"h3"},"fn(...)")," operation from the common adaptor"),(0,o.yg)("p",null,"We recommend using the ",(0,o.yg)("inlineCode",{parentName:"p"},"fn(...)")," operation to manipulate state and apply custom\nJavaScript to transform, manipulate, and clean data before sending to target\napplications."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  //call state to edit\n  //add your custom javascript here to manipulate state\n  return state; //always return state\n});\n")),(0,o.yg)("h3",{id:"variables-var-vs-let-vs-const"},"Variables: var vs let vs const"),(0,o.yg)("p",null,"JavaScript gives you three different ways to declare variables, and this can be\na bit confusing."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"var")," is a variable that can have its value reassigned. You can re-declare a\n",(0,o.yg)("inlineCode",{parentName:"li"},"var")," multiple times."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"let")," is basically the same as a var, but cannot be redeclared and has subtly\ndifferent scoping rules."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"const")," is used for variable whose values do not change.")),(0,o.yg)("p",null,"It doesn't really matter which style you use (except perhaps if you try to\nassign to a ",(0,o.yg)("inlineCode",{parentName:"p"},"const"),")."),(0,o.yg)("p",null,"Most OpenFn jobs are written in quite a functional style anyway - you may find\nyou don't even need to declare variables."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is functional programming?"),"Functional programming is a style of programming, increasingly popular in modern Javascript.",(0,o.yg)("p",null,"Broadly, the idea is to minimize the usage of control flow statements (like\n",(0,o.yg)("inlineCode",{parentName:"p"},"if/else"),",",(0,o.yg)("inlineCode",{parentName:"p"},"for"),") and instead use chains of functions. In functional programming\nwe pass data through a pipeline to get the result we want sound familiar?)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const items = [10, 109, 55];\n\n// Imperative JS\nconst transformedItems = [];\nfor (const i of items) {\n  if (i < 100) {\n    transformedItems.push(i * 2);\n  }\n}\n\n// Functional js\nconst transformedItems = items.filter(x => x > 100).map(x => x * 2);\n")),(0,o.yg)("p",null,"Functional programming tends to be more terse and condensed than regular,\nimperative programming. This is a good and bad thing - but if you're used to the\nstyle, it tends to be very readable and translates well across languages.")),(0,o.yg)("p",null,"Most modern, idiomatic JavaScript is written with ",(0,o.yg)("inlineCode",{parentName:"p"},"const")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"let"),". This can\nactually make your code more readable and intentional, and the rules are\nactually pretty simple:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Use a ",(0,o.yg)("inlineCode",{parentName:"li"},"const")," if you don't want a variable value to change."),(0,o.yg)("li",{parentName:"ul"},"Use a ",(0,o.yg)("inlineCode",{parentName:"li"},"let")," if you expect variable value to change.")),(0,o.yg)("p",null,"This can get a little tricky with objects and arrays. We can assign an object to\na const, but still change the properties of the object. The same for arrays.\nThis is all to do with pointers and how JavaScript stores variables - the key to\nit is that you're not assigning a new value to the variable, but you are\nmodifying the ",(0,o.yg)("em",{parentName:"p"},"contents")," of the variable."),(0,o.yg)("p",null,"Check these examples:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// Example 1: Objects\nconst data = {};\n\n// We can mutate the object here\n// The data variable is still referencing the same object\ndata.name = 'OpenFn';\n\ndata = { name: 'Lightning' }; // This throws a runtime error because we are re-assigning the variable!\n\n// Example 2: Arrays\nconst ids = [1, 2, 3];\n\n// We can call functions on the ids array, which will mutate the array's contents\nids.push(4);\nids.pop();\n\n// But we cannot re-assign the variable\n\nids = [4, 5, 6]; // This throws a runtime error because we are re-assigning the variable!\n")),(0,o.yg)("h3",{id:"optional-chaining"},"Optional chaining"),(0,o.yg)("p",null,"JavaScript is an untyped language - which is very conveient for OpenFn jobs and\nusually makes life easier."),(0,o.yg)("p",null,"However, a common problem is that when writing long property chains, an\nexception will be thrown if a property is missing. And this happens all the time\nwhen fetching data from remote servers."),(0,o.yg)("p",null,"Optional chaning allows JavaScript to stop evaluating a property chain and\nreturn undefined as the result of that whole expression:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const x = a.b?.c?.d?.e;\n")),(0,o.yg)("p",null,"In this example, if ",(0,o.yg)("inlineCode",{parentName:"p"},"c"),", for example, is not defined, then ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," will be given a\nvalue of ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined"),". No exception will be thrown."),(0,o.yg)("p",null,"You can do this with string properties too, although the syntax is a bit\nfiddlier:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const x = a.b['missing-link']?.d?.e;\n")),(0,o.yg)("p",null,"This can also be used for optional function calls (less useful in job writing\nbut included for completeness):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const x = a.b?.();\n")),(0,o.yg)("p",null,"You can combine optional chaning with the wonderfully named ",(0,o.yg)("strong",{parentName:"p"},'"nullish\ncoalescing"')," operator. This works a bit like a ternary expression or an or - if\nanything to left of the operator returns ",(0,o.yg)("inlineCode",{parentName:"p"},"null")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined"),", the value to the\nright will be returned."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const x = a.b?.c?.d?.e ?? 22;\n")),(0,o.yg)("p",null,"In this example, if any of the values in the chain are not defined, ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," will be\nassigned a value of 22."),(0,o.yg)("h3",{id:"arrow-functions"},"Arrow functions"),(0,o.yg)("p",null,"Arrow functions are used throughout this guide and we expect that most users are\nfamiliar with their usage."),(0,o.yg)("p",null,"An arrow function is an alternative way to write a JavaScript function. There\nare a few reasons why they are popular in modern JavaScript:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"They feel lightweight, with less syntax required"),(0,o.yg)("li",{parentName:"ul"},"They do not have a ",(0,o.yg)("inlineCode",{parentName:"li"},"this")," scope - although this is largely irrelevant to\nOpenFn programming (and indeed most modern JS frameworks)")),(0,o.yg)("p",null,"Arrow functions are always anonymous - they have no name - but they can be\nassigned to variables of course."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"function upperCase(name) {\n  return name.toUpperCase();\n}\n\nconst getName = () => {\n  return name.toUpperCase();\n};\n")),(0,o.yg)("p",null,"An arrow function can contain a single expression and no body, and will return\nthe expression:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"function getX() {\n  return x;\n}\n\nconst getX = () => x;\n")),(0,o.yg)("p",null,"This pattern makes arrow functions lightweight and elegant, and aligns nicely\nwith functional programming paradigms."),(0,o.yg)("admonition",{title:"Problems returning an object?",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Always wrap objects in brackets when returning an object from an arrow\nexpression:"),(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre"},"post('wwww', () => ({ id: 'a', name: 'adam' }))\n")),(0,o.yg)("p",{parentName:"admonition"},"When Javascript sees a brace ",(0,o.yg)("inlineCode",{parentName:"p"},"{")," after an arrow, it expects to see a block of\nstatements, not an object. Wrapping the object in brackets tells Javascript to\nparse an expression instead of a block.")),(0,o.yg)("h3",{id:"rest-and-spread-operators"},"Rest and spread operators"),(0,o.yg)("p",null,"The spread or rest operator ",(0,o.yg)("inlineCode",{parentName:"p"},"...")," can be used for several purposes. It can be\nquite complex to understand, but in OpenFn it has a couple of strong uses."),(0,o.yg)("p",null,"First, you can ",(0,o.yg)("strong",{parentName:"p"},'"spread"')," or ",(0,o.yg)("strong",{parentName:"p"},'"apply"')," the properties and value of one (or\nmore) objects to a new object. This is a really conveient way to shallow clone\nobjects."),(0,o.yg)("p",null,"It works a lot like ",(0,o.yg)("inlineCode",{parentName:"p"},"Object.assign(obj, first, second, third)"),"."),(0,o.yg)("p",null,"Here's how we shallow clone with spread:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const newState = {\n  ...state,\n};\n")),(0,o.yg)("p",null,"Properties are declared in sequence, so you can spread an object and then\ndeclare more properties:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const newState = {\n  ...state\n  data: {} // create a new data object but keep all other keys of state\n}\n")),(0,o.yg)("p",null,"You can spread multiple objects, which again will apply in order. This example\napplies some default values, then overwrites with whatever is on state, then\nfinally overwrites the data key."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const newState = {\n  ...defaults,\n  ...state\n  data: {} // create a new data object but keep all other keys of state\n}\n")),(0,o.yg)("p",null,"Spreading like this does not affect the original object (ie, in the example\nabove, ",(0,o.yg)("inlineCode",{parentName:"p"},"defaults")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," are not changed), although remember that this is\nonly a shallow clone, and non-primitive values use pointers, not copies."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is a shallow clone?"),"To shallow clone an object means to copy all the top-level keys and values of that object onto a new object.",(0,o.yg)("p",null,"But this ONLY applies to top-level keys. And if a value contains an object,\nyou're really just copying a ",(0,o.yg)("em",{parentName:"p"},"pointer")," to that object."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const a = {\n  x: 1,\n  y: {\n    values: [1, 2, 3]\n  }\n};\n\n// declare b as a shallow clone of a\nconst b = {\n  ... a\n}\n\nb.x = 2; // a.x is unchanged\nb.y.values = []; // a.y.values is changed\nb.y = 20' // a.y is unchanged\n")),(0,o.yg)("p",null,"A deep clone means that all properties in the whole object tree are cloned.")),(0,o.yg)("h3",{id:"implementing-mapping-rules-and-global-variables"},"Implementing mapping rules and global variables"),(0,o.yg)("p",null,"For scenarios where you have a global list of variables or mapping rules that\nyou would like to reference throughout your workflows, you can add these to your\njob as a constant that can be referenced repeatedly throughout the job\nexpression. See the documentation on\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/design/mapping-specs"},"mapping specifications")," for more information on\nglobals."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"//Workflow step 1\n//First we use fn() to tranform, map & clean our data\nfn(state => {\n\n    //Global mapping rules you want to implement in your workflow\n    const locationMap = {\n        //location_id from source app: location value in destination app\n        01: 'Western Cape',\n        02: 'Eastern Cape',\n        03: 'Gauteng'\n    }\n\n    // Here we build the payload of our http request body...\n    // We assume the input is an array of records\n    const payload = state.data.map(record => ({\n        location: locationMap[record.location_id] //translate location_id to the mapped value\n        external_id: record.case_id\n    }));\n\n    return {...state, payload};\n});\n\n//Workflow step 2\n//Then we post the payload built in the prior operation to create a record\npost('/api/myEndpoint', {\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: (state) => state.payload\n});\n")))}d.isMDXComponent=!0}}]);