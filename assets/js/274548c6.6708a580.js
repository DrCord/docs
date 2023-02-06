"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[12620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},o=void 0,l={permalink:"/articles/2021/10/08/improving-multistage-docker-builds-using-buildx",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",source:"@site/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",title:"Improving Multistage Docker Builds using Buildx",description:"So you're using docker's multi-stage builds and noticed that your build times",date:"2021-10-08T00:00:00.000Z",formattedDate:"October 8, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"docker",permalink:"/articles/tags/docker"},{label:"ci/cd",permalink:"/articles/tags/ci-cd"}],readingTime:5.985,hasTruncateMarker:!0,authors:[{name:"Stuart Corbishley",url:"https://github.com/stuartc",imageURL:"https://avatars.githubusercontent.com/stuartc"}],frontMatter:{layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},prevItem:{title:"Moving from Webpack to esbuild on Phoenix",permalink:"/articles/2021/10/15/webpack-to-esbuild-part1"},nextItem:{title:"Wrapping my head around jobs",permalink:"/articles/2021/07/05/wrapping-my-head-around-jobs"}},s={authorsImageUrls:[void 0]},u=[{value:"Buildx",id:"buildx",level:2},{value:"Local Cache",id:"local-cache",level:3},{value:"Remote Cache",id:"remote-cache",level:3},{value:"Tips",id:"tips",level:2},{value:"Closing thoughts",id:"closing-thoughts",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So you're using docker's multi-stage builds and noticed that your build times\naren't nearly as quick as you expected?"),(0,i.kt)("p",null,"As many teams who spend more and more time using docker, it's quite common to\nget into multi-stage builds; usually resulting in significantly smaller images."),(0,i.kt)("p",null,"However this comes with a pretty significant dilemma with caching. Even when\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cache-from")," flag when building, docker only caches the last image."),(0,i.kt)("p",null,"One proposed solution",(0,i.kt)("sup",null,(0,i.kt)("a",{parentName:"p",href:"#ref1"},"1")),", is to pull, build and push each\nindividual stage. Coming with tight coupling between the shape of your\nDockerfile and your build process/scripts."),(0,i.kt)("p",null,"The other solution uses Docker Buildx which the document describes as:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Docker Buildx is a CLI plugin that extends the docker command with the full\nsupport of the features provided by Moby BuildKit builder toolkit. It provides\nthe same user experience as docker build with many new features like creating\nscoped builder instances and building against multiple nodes concurrently.")),(0,i.kt)("p",null,"While that sounds pretty cool, it doesn't really touch on caching. This actually\ntook me a while to find out that it would in fact do caching very differently.\nIn fact it's a very different experience using it, and has lots of really cool\nfeatures that further detach you from the local docker state allowing you to\nbuild in environments that are stateless - such as Google CloudBuild without\nhaving to wire up some kind of persistence or file caching scheme."),(0,i.kt)("h2",{id:"buildx"},"Buildx"),(0,i.kt)("p",null,"We're only going to scratch the surface of Buildx, and with that let's get the\nabsolute minimum working; build our image locally."),(0,i.kt)("h3",{id:"local-cache"},"Local Cache"),(0,i.kt)("p",null,"First things first we need to create a builder, and select it for use. This is\nimportant as without creating a buildx builder (and setting it as the default),\nbuildx will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," driver instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-container")," driver\nwhich we want in order to take advantage of cache exporting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker buildx create --name mybuilder --use\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You only need to run this once, except in the case of CloudBuild where each\ninvocation is a new node.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker buildx build \\\n  --cache-from=type=local,src=/tmp/buildx-cache \\\n  --cache-to=type=local,dest=/tmp/buildx-cache \\\n  --load \\\n  .\n")),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cache-*")," options aren't specifically required when running ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),",\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"buildx")," does manage its own local cache (distinct from the regular docker\ncache), it's there to emphasise the options that cache can be provided via the\nCLI options."),(0,i.kt)("p",null,"This is about as close as you get to a regular docker build, with the\nsignificant difference being that you have to specify where to cache from and\nto."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--load")," flag is to tell buildx to set the output to the local docker\ndaemon. Without that you won't actually get a resulting image to run. However,\ndepending on your use case, this could be seen as a convenience - if you're\nwanting to run your tests inside your build; a resulting image isn't\nparticularly useful."),(0,i.kt)("h3",{id:"remote-cache"},"Remote Cache"),(0,i.kt)("p",null,"Now comes to the part I'm most interested in, caching in a stateless/remote\nenvironment. Multipart builds for us at OpenFn are essential, since we use\nElixir and like other compiled languages there is a lot to be gained by only\nshipping the stuff you're going to run; and no language is safe from requiring\nseveral times more 'stuff' in order to build our apps."),(0,i.kt)("p",null,"Buildx supports a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#-export-build-cache-to-an-external-cache-destination---cache-to"},"handful of different types"),"\nof caching sources and destinations. We're going to be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"registry"),"\ntype, where you point the cache at a repository reference (repo/image:tag\nstyle)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"One thing to note is that Google Container Registry does not support the\nmetadata/manifest format that buildx uses, so if you're using Google Cloud you\nwill need to start using Artifact Registry.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inline")),(0,i.kt)("p",null,"Push the image and the cache together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\n--cache-from=type=registry,ref=$IMAGE_NAME \\\n--cache-to=type=inline \\\n...\n")),(0,i.kt)("p",null,"This comes with the constraint that cache mode is always ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", which only\nexports/caches the resulting layers; which is still better than the plain docker\nbuild caching but I think having the intermediary layers is generally a win. We\nwant to avoid a single line change invalidating an entire build step."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Registry")),(0,i.kt)("p",null,"Resulting image and cache are separated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\n--cache-from=type=registry,ref=$IMAGE_NAME-build-cache \\\n--cache-to=type=registry,ref=$IMAGE_NAME-build-cache,mode=max \\\n...\n")),(0,i.kt)("p",null,"Again coming back to the cache mode, here being ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"; all intermediary laters\nare exported to the cache image as well."),(0,i.kt)("p",null,"I have opted to create ",(0,i.kt)("em",{parentName:"p"},"two")," images, one for caching and another for the\nresulting image used to deploy. This gains us a much more granular cache and the\nability to more easily manage the cache image - like deleting the whole thing\nwhen wanting to invalidate the cache. Not to mention I'm fairly sure the size of\nour images that get pulled on kubernetes would get significantly larger with\nmany more layers."),(0,i.kt)("p",null,"It feels like a safer bet to have lean images for kubernetes to pull, and chunky\ncache images specifically for speeding up build."),(0,i.kt)("p",null,"Depending on your setup, pulling large images can get ",(0,i.kt)("em",{parentName:"p"},"seriously")," expensive in a\nreasonably active deployment environment - like on AWS ECS without using\nPrivateLink."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It appears the ",(0,i.kt)("inlineCode",{parentName:"p"},"moby/buildkit")," documentation also demonstrates\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moby/buildkit#registry-push-image-and-cache-separately"},"this"),"\napproach.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IMAGE_NAME=us-east4-docker.pkg.dev/<project-name>/platform/app \\\ndocker buildx build \\\n  -t $IMAGE_NAME:latest \\\n  --cache-from=type=registry,ref=$IMAGE_NAME-build-cache \\\n  --cache-to=type=registry,ref=$IMAGE_NAME-build-cache,mode=max \\\n  --push \\\n  --progress=plain \\\n  .\n")),(0,i.kt)("p",null,"This implies that the cache image is named with the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"-build-cache"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"us-east4-docker.pkg.dev/<project-name>/platform/app[-build-cache]"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--push")," argument tells buildx to push the resulting image to the registry."),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Clearing the local cache")),(0,i.kt)("p",null,"As mentioned before, buildx has its own cache and in order to clear the cache\nwhile debugging and readying a Dockerfile for remote building you'll probably\nneed to reach for ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx prune"),"."),(0,i.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,i.kt)("p",null,"Using buildx has been a really pleasant experience, having personally attempted\nusing it a few times over the last 3 years; the most recent one being the first\ntime I felt confident getting it into production. As with any sufficiently\nflexible build tooling, the errors and issues you can run into range from\ncomplete gibberish, genuinely concerning inconsistencies to architectural\nchoices that you haven't fully caught up on; requiring an ever growing list of\nchanges you need to make to your own build process."),(0,i.kt)("p",null,"Our initial observations have been great, reasonable changes on our build have\ngone from 28 minutes to around 9 minutes."),(0,i.kt)("p",null,"While I have encountered a few confusing cache invalidations, especially when\nbuilding locally, exporting the cache to a repository and then having CloudBuild\nuse the image cache. And occasionally locally having what feels like ",(0,i.kt)("em",{parentName:"p"},"really"),"\naggressive caching on intermediate steps, leading me to pruning the local cache."),(0,i.kt)("p",null,"But overall, these issues aren't necessarily buildx issues and more likely a\ncombination of building docker images in general except with many more steps\naccounted for by the cache."),(0,i.kt)("p",null,"It's kinda hard to see now what the exact issues I had with it in the past, but\nhey!"),(0,i.kt)("p",null,"Buildx has given me what I 'expected' with docker multi-stage builds, and having\nthe cache in a repository completely side-steps having to attach a shared volume\nor copying from a storage bucket."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pythonspeed.com/articles/faster-multi-stage-builds/"},"Multi-stage builds #3: Speeding up your builds"),(0,i.kt)("a",{name:"ref1"},(0,i.kt)("sup",null,"1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/buildx/working-with-buildx/"},"Docker Buildx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/docker/buildx/blob/master/docs/reference/buildx_build.md#buildx-build"},"buildx build reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moby/buildkit#registry-push-image-and-cache-separately"},"mody/buildkey Registry cache exporter"))))}h.isMDXComponent=!0}}]);