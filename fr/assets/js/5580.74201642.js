"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5580],{24973:function(e,n,t){t.d(n,{Z:function(){return s},I:function(){return l}});var r=t(67294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(57529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return i(c({message:e.message,id:e.id}),n)}function s(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:n,id:t}),r)}},28143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(73727)},28084:function(e,n,t){t.r(n),t.d(n,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=t(52263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=o()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function i(e,n){void 0===n&&(n="default");var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},72389:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),o=t(9913);function u(){return(0,r.useContext)(o._)}},48408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(28143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},96730:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(70655),o=t(28143),u=(0,r.__importStar)(t(28084)),i=t(48408),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,i.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},99558:function(e,n,t){t.d(n,{pl:function(){return we},zF:function(){return z},HX:function(){return m},PO:function(){return G},L5:function(){return ae},Cv:function(){return ne},Cn:function(){return Q},OC:function(){return Me},kM:function(){return ve},WA:function(){return l},os:function(){return p},lx:function(){return de},Mg:function(){return w},_f:function(){return s},PZ:function(){return Ce},bc:function(){return g},MA:function(){return Pe},l5:function(){return d},nT:function(){return Ee},uR:function(){return M},J:function(){return se},Oh:function(){return fe},Rb:function(){return Se},be:function(){return ye},SL:function(){return D},g8:function(){return ee},c2:function(){return R},D9:function(){return x},RF:function(){return He},o5:function(){return Ne},DA:function(){return Ve},Si:function(){return ke},LU:function(){return o},pe:function(){return E}});var r=t(52263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,l=a===i?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function p(e,n){return"docs-"+e+"-"+n}var h=t(96730),b=!!h._r,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},E=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},y=t(67294),L=["zero","one","two","few","many","other"];function P(e){return L.filter((function(n){return e.includes(n)}))}var C={locale:"en",pluralForms:P(["one","other"]),select:function(e){return 1===e?"one":"other"}};function S(){var e=(0,r.Z)().i18n.currentLocale;return(0,y.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),C;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:P(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),C}var n,t}),[e])}function R(){var e=S();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}function x(e){var n=(0,y.useRef)();return(0,y.useEffect)((function(){n.current=e})),n.current}function D(e){var n=(0,f.TH)(),t=x(n);(0,y.useEffect)((function(){e({location:n,previousLocation:t})}),[n])}var k=t(80102),A=t(10412),V=["collapsed"],O=["lazy"];function M(e){var n=e.initialState,t=(0,y.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,y.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var I={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function H(e,n){var t=n?I:T;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function N(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,y.useRef)(!1);(0,y.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return H(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=I.height,u.style.overflow=I.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function j(e){if(!A.default.canUseDOM)return e?I:T}function F(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,y.useRef)(null);return N({collapsibleRef:l,collapsed:r,animation:u}),y.createElement(t,{ref:l,style:c?void 0:j(r),onTransitionEnd:function(e){"height"===e.propertyName&&(H(l.current,r),null==i||i(r))},className:a},o)}function _(e){var n=e.collapsed,t=(0,k.Z)(e,V),r=(0,y.useState)(!n),o=r[0],u=r[1];(0,y.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,y.useState)(n),a=i[0],c=i[1];return(0,y.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?y.createElement(F,Object.assign({},t,{collapsed:a})):null}function z(e){var n=e.lazy,t=(0,k.Z)(e,O),r=n?_:F;return y.createElement(r,Object.assign({},t))}var B=t(72389),Z=t(86010),U="details_2Ziz",W="isBrowser_2j9b",q="collapsibleContent_3OHp",X=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function Y(e,n){return!!e&&(e===n||Y(e.parentElement,n))}var G=function(e){var n,t=e.summary,r=e.children,o=(0,k.Z)(e,X),u=(0,B.Z)(),i=(0,y.useRef)(null),a=M({initialState:!o.open}),c=a.collapsed,l=a.setCollapsed,s=(0,y.useState)(o.open),f=s[0],d=s[1];return y.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,Z.Z)(U,(n={},n[W]=u,n),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;J(n)&&Y(n,i.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,y.createElement(z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},y.createElement("div",{className:q},r)))};var K=(0,y.createContext)(null);function Q(e){var n=e.children;return y.createElement(K.Provider,{value:(0,y.useState)(null)},n)}function $(){var e=(0,y.useContext)(K);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function ee(){var e=$()[0];if(e){var n=e.component;return function(t){return y.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ne(e){var n,t=e.component,r=e.props,o=$()[1],u=(n=r,(0,y.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,y.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,y.useEffect)((function(){return function(){return o(null)}}),[o]),null}var te=function(e){return"docs-preferred-version-"+e},re={save:function(e,n,t){l(te(e),{persistence:n}).set(t)},read:function(e,n){return l(te(e),{persistence:n}).get()},clear:function(e,n){l(te(e),{persistence:n}).del()}};function oe(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=re.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(re.clear(e,t),{preferredVersionName:null})}(e)})),o}function ue(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,y.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,y.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,y.useEffect)((function(){i(oe({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,y.useMemo)((function(){return{savePreferredVersion:function(e,t){re.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[i])]}var ie=(0,y.createContext)(null);function ae(e){var n=e.children;return b?y.createElement(ce,null,n):y.createElement(y.Fragment,null,n)}function ce(e){var n=e.children,t=ue();return y.createElement(ie.Provider,{value:t},n)}function le(){var e=(0,y.useContext)(ie);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function se(e){void 0===e&&(e="default");var n=(0,h.zh)(e),t=le(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,y.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}function fe(){var e=(0,h._r)(),n=le()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}function de(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var ve={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},ge=l("docusaurus.announcement.dismiss"),me=l("docusaurus.announcement.id"),pe=function(){return"true"===ge.get()},he=function(e){return ge.set(String(e))},be=(0,y.createContext)(null),we=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,B.Z)(),t=(0,y.useState)((function(){return!!n&&pe()})),r=t[0],u=t[1];(0,y.useEffect)((function(){u(pe())}),[]);var i=(0,y.useCallback)((function(){he(!0),u(!0)}),[]);return(0,y.useEffect)((function(){if(e){var n=e.id,t=me.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;me.set(n),r&&he(!1),!r&&pe()||u(!1)}}),[]),(0,y.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[r])}();return y.createElement(be.Provider,{value:t},n)},Ee=function(){var e=(0,y.useContext)(be);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ye(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Le=t(24973),Pe=function(){return(0,Le.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Ce(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function Se(e){!function(e){var n=(0,f.k6)().block,t=(0,y.useRef)(e);(0,y.useEffect)((function(){t.current=e}),[e]),(0,y.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Re(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Re(e.parentNode):n}function xe(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Re(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Re(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function De(){var e=(0,y.useRef)(0),n=o().navbar.hideOnScroll;return(0,y.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var ke=function(e){var n=(0,y.useRef)(void 0),t=De();(0,y.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=xe(a,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Ae(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Ae({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Ve(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,y.useMemo)((function(){return Ae({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Oe=(0,y.createContext)(void 0);function Me(e){var n,t=e.children;return y.createElement(Oe.Provider,{value:(n=(0,y.useRef)(!0),(0,y.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ie(){var e=(0,y.useContext)(Oe);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Te=function(){return A.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function He(e,n){void 0===n&&(n=[]);var t=Ie().scrollEventsEnabledRef,r=(0,y.useRef)(Te()),o=function(){if(t.current){var n=Te();e&&e(n,r.current),r.current=n}};(0,y.useEffect)((function(){var e={passive:!0};return o(),window.addEventListener("scroll",o,e),function(){return window.removeEventListener("scroll",o,e)}}),n)}function Ne(){var e,n,t,r=Ie(),o=(e=(0,y.useRef)({elem:null,top:0}),n=(0,y.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,y.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,y.useMemo)((function(){return{save:n,restore:t}}),[])),u=(0,y.useRef)(void 0),i=(0,y.useCallback)((function(e){o.save(e),r.disableScrollEvents(),u.current=function(){var e=o.restore().restored;if(u.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r]);return(0,y.useLayoutEffect)((function(){var e;null===(e=u.current)||void 0===e||e.call(u)})),{blockElementScrollPositionUntilNextRender:i}}},86010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);