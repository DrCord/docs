"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[13446],{15680:(e,t,M)=>{M.d(t,{xA:()=>g,yg:()=>D});var i=M(96540);function a(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function n(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,i)}return M}function N(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?n(Object(M),!0).forEach((function(t){a(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):n(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function s(e,t){if(null==e)return{};var M,i,a=function(e,t){if(null==e)return{};var M,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)M=n[i],t.indexOf(M)>=0||(a[M]=e[M]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)M=n[i],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(a[M]=e[M])}return a}var l=i.createContext({}),y=function(e){var t=i.useContext(l),M=t;return e&&(M="function"==typeof e?e(t):N(N({},t),e)),M},g=function(e){var t=y(e.components);return i.createElement(l.Provider,{value:t},e.children)},r="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},o=i.forwardRef((function(e,t){var M=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),r=y(M),o=a,D=r["".concat(l,".").concat(o)]||r[o]||u[o]||n;return M?i.createElement(D,N(N({ref:t},g),{},{components:M})):i.createElement(D,N({ref:t},g))}));function D(e,t){var M=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=M.length,N=new Array(n);N[0]=o;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[r]="string"==typeof e?e:a,N[1]=s;for(var y=2;y<n;y++)N[y]=M[y];return i.createElement.apply(null,N)}return i.createElement.apply(null,M)}o.displayName="MDXCreateElement"},40472:(e,t,M)=>{M.r(t),M.d(t,{assets:()=>l,contentTitle:()=>N,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>y});var i=M(58168),a=(M(96540),M(15680));const n={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},N=void 0,s={unversionedId:"contribute/style-guide",id:"contribute/style-guide",title:"Style Guide",description:"You can write content using",source:"@site/docs/contribute/style-guide.md",sourceDirName:"contribute",slug:"/style-guide",permalink:"/documentation/style-guide",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/contribute/style-guide.md",tags:[],version:"current",frontMatter:{id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},sidebar:"docs",previous:{title:"Writing Docs",permalink:"/documentation/contribute/writing-docs"},next:{title:"Get Help",permalink:"/documentation/get-help/support"}},l={},y=[{value:"Markdown Syntax",id:"markdown-syntax",level:2},{value:"Headers",id:"headers",level:2},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",level:2},{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",level:3},{value:"H4 - Create the best documentation",id:"h4---create-the-best-documentation",level:4},{value:"H5 - Create the best documentation",id:"h5---create-the-best-documentation",level:5},{value:"H6 - Create the best documentation",id:"h6---create-the-best-documentation",level:6},{value:"Emphasis",id:"emphasis",level:2},{value:"Lists",id:"lists",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Image sizing/styling",id:"image-sizingstyling",level:3},{value:"Gifs",id:"gifs",level:2},{value:"Code",id:"code",level:2},{value:"Tables",id:"tables",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Inline HTML",id:"inline-html",level:2},{value:"Line Breaks",id:"line-breaks",level:2},{value:"Admonitions",id:"admonitions",level:2}],g={toc:y},r="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(r,(0,i.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can write content using\n",(0,a.yg)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"We use a ",(0,a.yg)("inlineCode",{parentName:"p"},".prettierrc"),' file to enforce standard styles via the "Prettier" code\nformatter. If you are using VsCode, you can install prettier via\n',(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode")),(0,a.yg)("p",{parentName:"admonition"},"Make sure to format you work before opening a PR.")),(0,a.yg)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,a.yg)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),(0,a.yg)("h2",{id:"headers"},"Headers"),(0,a.yg)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),(0,a.yg)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),(0,a.yg)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),(0,a.yg)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),(0,a.yg)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),(0,a.yg)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"emphasis"},"Emphasis"),(0,a.yg)("p",null,"Emphasis, aka italics, with ",(0,a.yg)("em",{parentName:"p"},"asterisks")," or ",(0,a.yg)("em",{parentName:"p"},"underscores"),"."),(0,a.yg)("p",null,"Strong emphasis, aka bold, with ",(0,a.yg)("strong",{parentName:"p"},"asterisks")," or ",(0,a.yg)("strong",{parentName:"p"},"underscores"),"."),(0,a.yg)("p",null,"Combined emphasis with ",(0,a.yg)("strong",{parentName:"p"},"asterisks and ",(0,a.yg)("em",{parentName:"strong"},"underscores")),"."),(0,a.yg)("p",null,"Strikethrough uses two tildes. ",(0,a.yg)("del",{parentName:"p"},"Scratch this.")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"lists"},"Lists"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"First ordered list item"),(0,a.yg)("li",{parentName:"ol"},"Another item",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Unordered sub-list."))),(0,a.yg)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"Ordered sub-list"))),(0,a.yg)("li",{parentName:"ol"},"And another item.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Unordered list can use asterisks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Or minuses")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Or pluses")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"links"},"Links"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.google.com/"},"I'm an inline-style link")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"I'm an inline-style link with title")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.mozilla.org/"},"I'm a reference-style link")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"http://slashdot.org/"},"You can use numbers for reference-style link definitions")),(0,a.yg)("p",null,"Or leave it empty and use the ",(0,a.yg)("a",{parentName:"p",href:"http://www.reddit.com/"},"link text itself"),"."),(0,a.yg)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",(0,a.yg)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," or ",(0,a.yg)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," and sometimes example.com\n(but not on GitHub, for example)."),(0,a.yg)("p",null,"Some text to show that the reference links can follow later."),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"images"},"Images"),(0,a.yg)("p",null,"Here's our logo (hover to see the title text):"),(0,a.yg)("p",null,"Inline-style:\n",(0,a.yg)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),(0,a.yg)("p",null,"Reference-style: ",(0,a.yg)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),(0,a.yg)("p",null,"Images from any folder can be used by providing path to file. Path should be\nrelative to markdown file."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"img",src:M(16214).A,width:"794",height:"505"})),(0,a.yg)("h3",{id:"image-sizingstyling"},"Image sizing/styling"),(0,a.yg)("p",null,"Images can be sized using inline HTML."),(0,a.yg)("img",{src:"/img/undraw_Portfolio_update_re_jqnp.svg",width:"200"}),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"gifs"},"Gifs"),(0,a.yg)("p",null,"Gifs are helpful for demonstrating short sequences of user behaviour."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"img",src:M(72083).A,width:"1191",height:"727"})),(0,a.yg)("p",null,"There are many tools that will help you create GIFs:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/phw/peek"},"Peek")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh"},"Capture to a Gif")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe"},"Chrome Capture"))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},'Please note that if you\'re using an animated "cursor dot" and "show/click\nanimation", the hex code we use is ',(0,a.yg)("strong",{parentName:"p"},"#B53F48"),".")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"code"},"Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint(s)\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"tables"},"Tables"),(0,a.yg)("p",null,"Colons can be used to align columns."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Tables"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Are"),(0,a.yg)("th",{parentName:"tr",align:"right"},"Cool"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"col 3 is"),(0,a.yg)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,a.yg)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"col 2 is"),(0,a.yg)("td",{parentName:"tr",align:"center"},"centered"),(0,a.yg)("td",{parentName:"tr",align:"right"},"\\$12")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"zebra stripes"),(0,a.yg)("td",{parentName:"tr",align:"center"},"are neat"),(0,a.yg)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,a.yg)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don't need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Markdown"),(0,a.yg)("th",{parentName:"tr",align:null},"Less"),(0,a.yg)("th",{parentName:"tr",align:null},"Pretty"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("em",{parentName:"td"},"Still")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"renders")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"nicely"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"3")))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"blockquotes"},"Blockquotes"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part\nof the same quote.")),(0,a.yg)("p",null,"Quote break."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh\nboy let's keep writing to make sure this is long enough to actually wrap for\neveryone. Oh, you can ",(0,a.yg)("em",{parentName:"p"},"put")," ",(0,a.yg)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"inline-html"},"Inline HTML"),(0,a.yg)("dl",null,(0,a.yg)("dt",null,"Definition list"),(0,a.yg)("dd",null,"Is something people use sometimes."),(0,a.yg)("dt",null,"Markdown in HTML"),(0,a.yg)("dd",null,"Does *not* work **very** well. Use HTML ",(0,a.yg)("em",null,"tags"),".")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"line-breaks"},"Line Breaks"),(0,a.yg)("p",null,"Here's a line for us to start with."),(0,a.yg)("p",null,"This line is separated from the one above by two newlines, so it will be a\n",(0,a.yg)("em",{parentName:"p"},"separate paragraph"),"."),(0,a.yg)("p",null,"This line is also a separate paragraph, but... This line is only separated by a\nsingle newline, so it's a separate line in the ",(0,a.yg)("em",{parentName:"p"},"same paragraph"),"."),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"admonitions"},"Admonitions"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This is a note")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This is a tip")),(0,a.yg)("admonition",{type:"important"},(0,a.yg)("p",{parentName:"admonition"},"This is important")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This is a caution")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"This is a warning")))}u.isMDXComponent=!0},72083:(e,t,M)=>{M.d(t,{A:()=>i});const i=M.p+"assets/images/how-to-gif-727dedc47b0df45976bba4da21fce3d9.gif"},16214:(e,t,M)=>{M.d(t,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyBpZD0iYmI0M2IzMDMtNzc4My00YjIwLTg0YWMtODk4OTg4MzZlOWRjIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc5NC4xMjE4IiBoZWlnaHQ9IjUwNS4zNDUxNCIgdmlld0JveD0iMCAwIDc5NC4xMjE4IDUwNS4zNDUxNCI+PHBhdGggZD0iTTI0Ny40NTc5LDcwMS4xOTg0MmMtMTIuMjUwOTUtMS4wMDc4Ny0yMy4wNjctOS44NzExNy0yOS4yMTgtMjAuNTEzODQtMi4wNjI3NS0zLjU2OS0zLjQ3NjA5LTguMjUwNjMtMS4xNDAxOC0xMS42NDcxN2E2LjQwOTI4LDYuNDA5MjgsMCwwLDEsMTEuMzE1LDEuNDcxMTksNjIuMDQ1MzksNjIuMDQ1MzksMCwwLDEtLjk2NDg1LTEyLjY0MDg2Yy4wOTQxNi0zLjU4Ni43NzE3Ni03LjY0MDUyLDMuNzUzNTgtOS42MzQ3LDMuNDU5MjgtMi4zMTM0OSw4LjQ0NTQ5LS40NzY2MywxMC45NjE2NywyLjgzODE1czMuMTk4OTQsNy42MjY3MSwzLjgwMjgzLDExLjc0NDI2YTEwLjgzMDQxLDEwLjgzMDQxLDAsMCwxLDEyLjAzODY1LTEzLjY1NzEzYzUuMDY2NzIuNzY1MTUsOS4wMzU4MSw1LjE1MTksMTAuNTg0NTcsMTAuMDM2NDFzMS4wNjUyMiwxMC4xODA3MS4wNjg0MiwxNS4yMDdjLTEuMTY4ODMsNS44OTM3My0zLjA2NTgyLDExLjc0MDYyLTYuNDgxLDE2LjY4NDE3cy04LjQ4OCw4LjkyOS0xNC4zNzM1MywxMC4xMzgyMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik05OTcuMDYwOSwzMDMuMzI3NDNhMTA2LjAzMzkxLDEwNi4wMzM5MSwwLDAsMS03MSwxMDAuMDhjLS42NjAxNi4yMy0xLjMzMDA4LjQ2LTIsLjY3di0xMDcuNzFoLTEzOC43N2MuMDQtLjY3LjA4OTg0LTEuMzQuMTQ5OS0ySDkyNC4wNjA5di0yMS4wNGE1LjAwMiw1LjAwMiwwLDAsMC01LTVINzkwLjk4MDgyYy4yMy0uNjcuNDcwMjEtMS4zNC43My0yYTEwNi4wMTAyMiwxMDYuMDEwMjIsMCwwLDEsMjA1LjM1MDEsMzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJNOTE5LjA2MDksMjY2LjMyNzQzaC00ODdhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLTcsN3YzMzBhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDcsN2g0ODdhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtMzMwQTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw5MTkuMDYwOSwyNjYuMzI3NDNabTUsMzM3YTUuMDAyLDUuMDAyLDAsMCwxLTUsNWgtNDg3YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtMzMwYTUuMDAyLDUuMDAyLDAsMCwxLDUtNWg0ODdhNS4wMDIsNS4wMDIsMCwwLDEsNSw1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjIzLjEyMTgiIHk9Ijk3LjAzOTk4IiB3aWR0aD0iNDk5IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIyNDAuMTIxOCIgY3k9Ijg0IiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMjU3LjM3MTgiIGN5PSI4NCIgcj0iNiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9IjI3NC42MjE4IiBjeT0iODQiIHI9IjYiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTYyLjA2MDksMzM1LjMyNzQzaC04OGE3LjAwNzc4LDcuMDA3NzgsMCwwLDAtNyw3djg4YTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw3LDdoODhhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtODhBNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDU2Mi4wNjA5LDMzNS4zMjc0M1ptNSw5NWE1LjAwMiw1LjAwMiwwLDAsMS01LDVoLTg4YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtODhhNS4wMDIsNS4wMDIsMCwwLDEsNS01aDg4YTUuMDAyLDUuMDAyLDAsMCwxLDUsNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSwzMzUuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksMzM1LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDMzNS44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSwzMzUuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTYyLjA2MDksNDY3LjgyNzQzaC04OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAtNi41LDYuNXY4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LDYuNWg4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LTYuNXYtODhBNi41MTI1OSw2LjUxMjU5LDAsMCwwLDU2Mi4wNjA5LDQ2Ny44Mjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSw0NjcuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksNDY3LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDQ2Ny44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSw0NjcuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTQwLjU2MDksNDgyLjMyNzQzaC04OGE2LjUwNzQ1LDYuNTA3NDUsMCwwLDEtNi41LTYuNXYtODhhNi41MDc0NCw2LjUwNzQ0LDAsMCwxLDYuNS02LjVoODhhNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDYuNSw2LjV2ODhBNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDU0MC41NjA5LDQ4Mi4zMjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzZjNjNmZiIvPjxwb2x5Z29uIHBvaW50cz0iMjAyLjc0NiA0OTIuMDg4IDIxNC40NjYgNDg4LjQ5MSAyMDYuMTcgNDQxLjU3MyAxODguODcyIDQ0Ni44ODEgMjAyLjc0NiA0OTIuMDg4IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQwMy40ODIsNjgwLjg1Nzg5aDM4LjUzMDczYTAsMCwwLDAsMSwwLDB2MTQuODg2ODdhMCwwLDAsMCwxLDAsMEg0MTguMzY4ODdBMTQuODg2ODYsMTQuODg2ODYsMCwwLDEsNDAzLjQ4Miw2ODAuODU3OXYwQTAsMCwwLDAsMSw0MDMuNDgyLDY4MC44NTc4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNS44OTExMiAxMDI0Ljk1NjY5KSByb3RhdGUoMTYyLjkzOTEyKSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMTAyLjc0OCA0OTIuMzU4IDExNS4wMDggNDkyLjM1NyAxMjAuODQgNDQ1LjA2OSAxMDIuNzQ2IDQ0NS4wNyAxMDIuNzQ4IDQ5Mi4zNTgiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzAzLjA2LDY4Ni4xODE2N2gzOC41MzA3M2EwLDAsMCwwLDEsMCwwdjE0Ljg4Njg3YTAsMCwwLDAsMSwwLDBIMzE3Ljk0Njg5QTE0Ljg4Njg2LDE0Ljg4Njg2LDAsMCwxLDMwMy4wNiw2ODYuMTgxNjh2MGEwLDAsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQxLjc0MzM1IDExODkuOTA4MDcpIHJvdGF0ZSgxNzkuOTk3MzgpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTMwNC44MDc0Myw1NTIuNjA3ODhhOS4xNjIyNCw5LjE2MjI0LDAsMCwxLC4zMTgtMTQuMDQ1NThsOS41MDUzNi0xMTkuNjk0NTksMTkuMzMwODYsNC44Mjk3TDMxOC40ODQwNyw1NDAuNDU1OTRhOS4yMTE4OCw5LjIxMTg4LDAsMCwxLTEzLjY3NjY0LDEyLjE1MTk0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjYTA2MTZhIi8+PGNpcmNsZSBjeD0iMTQwLjU3OTIxIiBjeT0iMTUwLjU1NTIzIiByPSIyNC41NjEwMyIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zMjIuMTYxNjYsNDE1LjE4NjA1Yy01LjU0MTk0LTcuNjA4MTUtNS43MTI2OS0xOC4wODY4My4yNTcwOC0yNS4zNjQxMiwzLjg5NTg3LTQuNzQ5MTQsMTAuNDEyNDgtOC41NDk1MSwyMS4yOTI0OC04LjU0OTUxLDI5LDAsNDAsMjMsNDAsMjNzMTIsMjIsNSw0Mi03LDIyLTcsMjJsLTQ2LTRTMzQzLjQ3MTQyLDQ0NC40NDA3OSwzMjIuMTYxNjYsNDE1LjE4NjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTMwNy45NzY2LDQzNS4wOTQ2OWw5LjkwOTY3LTMyLjQyMDlhMTUuNTAxODksMTUuNTAxODksMCwwLDEsMjEuOTMwMTgtOS4yNDUxMmgwYTE1LjUzLDE1LjUzLDAsMCwxLDcuMDg3ODksMjAuMDA5NzdMMzM0LjMwNiw0NDIuMTI5ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNMzgwLjcxMTIyLDQ2My4yNzI0MmwzOSwyMDItMjEsNi01MS0xMzMtMjMsMTM2LTIyLDNzLTkuNjUwMzItMTc5Ljk0NSwzMy0yMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNDM2Ljg0MjQ2LDQ1My44MDQ4NWExMC41MjcxMiwxMC41MjcxMiwwLDAsMC0uOTYyNjUsMS4zNDkzbC00OS41MzUwNSwyLjQwMTY2LTkuNTM4MzQtMjkuMTE5NTEtMTYuNTYxODUsNy44NzE0MywxNS41ODc3Niw0My4zNzEzLDYxLjI2MjA2LTExLjk4MDc2YTEwLjQ5NTc5LDEwLjQ5NTc5LDAsMSwwLS4yNTE5My0xMy44OTM0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zNTMuMzE0MjUsNDA3LjE3NjcyYTE1LjUwMDg1LDE1LjUwMDg1LDAsMCwxLDE2LjM2MjMtMTcuMjgyMjNoMGExNS41Mjk1NCwxNS41Mjk1NCwwLDAsMSwxNC41MzQ2NywxNS40NzE2OHYzMS4zMzVsLTI2LjkzNiw0LjE0NDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTM0OC45MTk3NSwzNzIuNjY2NDVjLTMuNjg2MzctLjAxNjA1LTYuNTMwMTctMy44OTcyMS02LjM2NDk0LTcuNTc5OTFzMi42Mzg2Ny02LjkyMjg1LDUuNjE4NjYtOS4wOTI5Myw2LjQ3NDc5LTMuNDkxOTEsOS43OTgtNS4wODczOSw2LjYxNzQzLTMuNTg1NjEsOC42NjkyNC02LjY0ODIyYTE0LjcxNTU3LDE0LjcxNTU3LDAsMCwwLDEuMDIzMzItMTMuNTA0MzgsMjEuNjY4NjUsMjEuNjY4NjUsMCwwLDAtOS4zMzMyLTEwLjIyNDE4LDI4LjM3Nzc3LDI4LjM3Nzc3LDAsMCwwLTM3LjYwNzA3LDguMjUwMzhsLTQuMjA4MDgsMTEuNDU3ODdjLTQuMjg3ODYsNS4xNTYxMy00Ljk2OCwxMi44MTMzMy0yLjMzMjE3LDE4Ljk3OTY4czguMjQ4MTQsMTAuODA1NzksMTQuNTgxMTIsMTMuMDExNGEzNS43OTM5MiwzNS43OTM5MiwwLDAsMCwxOS44NDExLjU5NDg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzI2LjQ3MzE3LDMzNC41MDYxM2MtMS44MDg5NC0yLjg5OTMxLTQuOTQ0MzktNC43NDMyNS04LjE4NTg3LTUuODI1NDNhMjUuNzI0MzEsMjUuNzI0MzEsMCwwLDAtMzMuODMyNDQsMjMuMDAyODNjLS4zNDM1Nyw2LjMxNDM3LDEuNjMzNjUsMTIuNDg5MTIsMi43OTU0NSwxOC43MDUxOHMxLjM5MjkxLDEzLjA4MTYxLTIuMDM0NDYsMTguMzk2Yy0yLjYxMDUzLDQuMDQ3OC02Ljk2Mzg3LDYuNTk2MzQtMTEuMjYwODMsOC43NzI1MS0zLjU4MTI4LDEuODEzNzEtNy40NTUwNywzLjUxNTc4LTExLjQ1MzE0LDMuMTU0NHMtOC4wMTY0Mi0zLjUyODEyLTcuOTEwMzMtNy41NDEwOGEzMi4wNTQ0LDMyLjA1NDQsMCwwLDAtMi42ODE2Myw5LjA4MDMzYy0uMjgxMjcsMy4xNTU5My40OTY1OSw2LjU2MTI1LDIuNzc2MDYsOC43NjE5MywzLjMxMzEsMy4xOTg1OSw4LjU2MjU1LDIuOTY0NiwxMy4xMTU3LDIuMjc0NDEsOS44NTY5NC0xLjQ5NDE3LDE5LjgzODE4LTQuMjk1NDMsMjcuNjI1NTItMTAuNTIwMzFzMTIuOTU0NjUtMTYuNDc0OTQsMTAuOTAzODgtMjYuMjMxMjdjLS44NTY2Ni00LjA3NTQ3LTIuODY5OTMtNy43OTYtNC40OTY3Ny0xMS42Mjk2OHMtMi44OTY5Mi04LjAyNy0yLjE0OTU5LTEyLjEyNGExNC43MzUxMywxNC43MzUxMywwLDAsMSw3LjQ5MjU1LTkuOTgxNzYsMTkuNjAxNDIsMTkuNjAxNDIsMCwwLDEsMTIuNTIyNjYtMS44OTljMi43OTkwNi40NTkzMiw2LjI5NDA2LDEuMTcyNTEsNy45NTQxOS0xLjEyNzQyYTQuNTA3NTIsNC41MDc1MiwwLDAsMC0uMDkzNjctNC44MDg1OCwxMy4yNDc1NCwxMy4yNDc1NCwwLDAsMC0zLjU5MjU5LTMuNTU5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTUxMS40MjM4LDcwMi42NzI1N2gtMzA3LjI5NGExLjE5MDY5LDEuMTkwNjksMCwxLDEsMC0yLjM4MTM3aDMwNy4yOTRhMS4xOTA2OSwxLjE5MDY5LDAsMSwxLDAsMi4zODEzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="}}]);