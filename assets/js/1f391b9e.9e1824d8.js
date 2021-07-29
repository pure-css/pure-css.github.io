/*! For license information please see 1f391b9e.9e1824d8.js.LICENSE.txt */
(self.webpackChunkpure=self.webpackChunkpure||[]).push([[85],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,v=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return f},I:function(){return s}});var r=n(7294),o=/{\w+}/g,a="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var c=r.isValidElement(i)?i:String(i);return n.push(c),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function c(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var l=n(4644);function u(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return i(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function f(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=u({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(c,{values:a},i)}},8143:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(3727)},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return a},usePluginData:function(){return i}});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function i(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return a};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,a,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}};t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(655),o=n(8143),a=r.__importStar(n(8084)),i=n(8408),c={};t.useAllDocsData=function(){var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:c};t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=o.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)};t.useActiveVersion=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(n,r)};t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(n,r)};t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},9368:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return De}});var r=n(7294);function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function a(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}var i=n(3947),c=n(3905),l=n(2122),u=n(6742),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},f={Prism:n(7410).Z,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=/\r\n|\r|\n/,g=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=d({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?d({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=d({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?d({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,c=[],l=[c];i>-1;){for(;(a=r[i]++)<o[i];){var u=void 0,s=t[i],f=n[i][a];if("string"==typeof f?(s=i>0?s:["plain"],u=f):(s=h(s,f.type),f.alias&&(s=h(s,f.alias)),u=f.content),"string"==typeof u){var p=u.split(v),d=p.length;c.push({types:s,content:p[0]});for(var y=1;y<d;y++)g(c),l.push(c=[]),c.push({types:s,content:p[y]})}else i++,t.push(s),n.push(u),r.push(0),o.push(u.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return g(c),l}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var w=n(7594),E=n.n(w),_={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=r.createContext(void 0);var P=function(){var e=(0,r.useContext)(k);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e},O=n(2263);function j(){return(0,O.Z)().siteConfig.themeConfig}var D="localStorage";function x(e){if(void 0===e&&(e=D),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,S||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),S=!0),null}var t}var S=!1;var C={get:function(){return null},set:function(){},del:function(){}};var A=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=x(null==t?void 0:t.persistence);return null===n?C:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};var T=/title=(["'])(.*?)\1/;n(6730).useAllDocsData;var N=["zero","one","two","few","many","other"];function L(e){return N.filter((function(t){return e.includes(t)}))}L(["one","other"]);var V=n(9756),I=n(412),R=["collapsed"],Z=["lazy"];var B={display:"none",overflow:"hidden",height:"0px"},M={display:"block",overflow:"visible",height:"auto"};function F(e,t){var n=t?B:M;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function z(e){var t=e.collapsibleRef,n=e.collapsed,o=e.animation,a=(0,r.useRef)(!1);(0,r.useEffect)((function(){var e,r=t.current;function i(){var e,t,n=r.scrollHeight;return{transition:"height "+(null!==(e=null==o?void 0:o.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n))+"ms "+(null!==(t=null==o?void 0:o.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function c(){var e=i();r.style.transition=e.transition,r.style.height=e.height}if(!a.current)return F(r,n),void(a.current=!0);return r.style.willChange="height",e=requestAnimationFrame((function(){n?(c(),requestAnimationFrame((function(){r.style.height=B.height,r.style.overflow=B.overflow}))):(r.style.display="block",requestAnimationFrame((function(){c()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,o])}function H(e){if(!I.Z.canUseDOM)return e?B:M}function U(e){var t=e.as,n=void 0===t?"div":t,o=e.collapsed,a=e.children,i=e.animation,c=e.onCollapseTransitionEnd,l=e.className,u=e.disableSSRStyle,s=(0,r.useRef)(null);return z({collapsibleRef:s,collapsed:o,animation:i}),r.createElement(n,{ref:s,style:u?void 0:H(o),onTransitionEnd:function(e){if("height"===e.propertyName){var t=s.current,n=t.style.height;o||parseInt(n,10)!==t.scrollHeight||(F(t,!1),null==c||c(!1)),n===B.height&&(F(t,!0),null==c||c(!0))}},className:l},a)}function $(e){var t=e.collapsed,n=(0,V.Z)(e,R),o=(0,r.useState)(!t),a=o[0],i=o[1];(0,r.useLayoutEffect)((function(){t||i(!0)}),[t]);var c=(0,r.useState)(t),l=c[0],u=c[1];return(0,r.useLayoutEffect)((function(){a&&u(t)}),[a,t]),a?r.createElement(U,Object.assign({},n,{collapsed:l})):null}function G(e){var t=e.lazy,n=(0,V.Z)(e,Z),o=t?$:U;return r.createElement(o,Object.assign({},n))}var q="details_2Ziz",W="isClient_1Fil",K="collapsibleContent_3OHp",X=["summary","children"];function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}var Q=function(e){var t,n=e.summary,o=e.children,i=(0,V.Z)(e,X),c=(0,O.Z)().isClient,l=(0,r.useRef)(null),u=function(e){var t=e.initialState,n=(0,r.useState)(null!=t&&t),o=n[0],a=n[1],i=(0,r.useCallback)((function(){a((function(e){return!e}))}),[]);return{collapsed:o,setCollapsed:a,toggleCollapsed:i}}({initialState:!i.open}),s=u.collapsed,f=u.setCollapsed,p=(0,r.useState)(i.open),d=p[0],v=p[1];return r.createElement("details",Object.assign({},i,{ref:l,open:d,"data-collapsed":s,className:a(q,(t={},t[W]=c,t),i.className),onMouseDown:function(e){Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;Y(t)&&J(t,l.current)&&(e.preventDefault(),s?(f(!1),v(!0)):f(!0))}}),n,r.createElement(G,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){f(e),v(!e)}},r.createElement("div",{className:K},o)))};var ee={blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},te={main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"};A("docusaurus.announcement.dismiss"),A("docusaurus.announcement.id");var ne=function(){var e=j().prism,t=P().isDarkTheme,n=e.theme||_,r=e.darkTheme||n;return t?r:n},re=n(4973),oe="codeBlockContainer_K1bP",ae="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",ce="codeBlock_23N8",le="copyButton_Ue-o",ue="codeBlockLines_39YC",se=/{([\d,-]+)}/,fe=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function pe(e){var t=e.children,n=e.className,o=e.metastring,i=e.title,c=j().prism,u=(0,r.useState)(!1),s=u[0],p=u[1],d=(0,r.useState)(!1),v=d[0],g=d[1];(0,r.useEffect)((function(){g(!0)}),[]);var h=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(T))||void 0===t?void 0:t[2])&&void 0!==n?n:""}(o)||i,y=(0,r.useRef)(null),m=[],w=ne(),_=Array.isArray(t)?t.join(""):t;if(o&&se.test(o)){var k=o.match(se)[1];m=E()(k).filter((function(e){return e>0}))}var P=n&&n.replace(/language-/,"");!P&&c.defaultLanguage&&(P=c.defaultLanguage);var O=_.replace(/\n$/,"");if(0===m.length&&void 0!==P){for(var D,x="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return fe(["js","jsBlock"]);case"jsx":case"tsx":return fe(["js","jsBlock","jsx"]);case"html":return fe(["js","jsBlock","html"]);case"python":case"py":return fe(["python"]);default:return fe()}}(P),C=_.replace(/\n$/,"").split("\n"),A=0;A<C.length;){var N=A+1,L=C[A].match(S);if(null!==L){switch(L.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":x+=N+",";break;case"highlight-start":D=N;break;case"highlight-end":x+=D+"-"+(N-1)+","}C.splice(A,1)}else A+=1}m=E()(x),O=C.join("\n")}var V=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var i=document.getSelection(),c=!1;i.rangeCount>0&&(c=i.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(u){}o.remove(),c&&(i.removeAllRanges(),i.addRange(c)),a&&a.focus()}(O),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(b,(0,l.Z)({},f,{key:String(v),theme:w,code:O,language:P}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:oe},h&&r.createElement("div",{style:n,className:ie},h),r.createElement("div",{className:a(ae,P)},r.createElement("pre",{tabIndex:0,className:a(t,ce,"thin-scrollbar"),style:n},r.createElement("code",{className:ue},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return m.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,l.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,l.Z)({key:t},c({token:e,key:t})))})))})))),r.createElement("button",{ref:y,type:"button","aria-label":(0,re.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:a(le,"clean-btn"),onClick:V},s?r.createElement(re.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(re.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var de="enhancedAnchor_2LWZ",ve="h1Heading_27L5",ge=["id"],he=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0,className:ve}),t.children))},ye=function(e){return"h1"===e?he:(t=e,function(e){var n,o=e.id,i=(0,V.Z)(e,ge),c=j().navbar.hideOnScroll;return o?r.createElement(t,i,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:a("anchor",(n={},n[de]=!c,n)),id:o}),i.children,r.createElement("a",{className:"hash-link",href:"#"+o,title:(0,re.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,i)});var t},me="details_1VDD";function be(e){var t=Object.assign({},e);return r.createElement(Q,(0,l.Z)({},t,{className:a("alert alert--info",me,t.className)}))}var we={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(pe,e):r.createElement("code",e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(pe,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(be,(0,l.Z)({},e,{summary:n}),o)},h1:ye("h1"),h2:ye("h2"),h3:ye("h3"),h4:ye("h4"),h5:ye("h5"),h6:ye("h6")};var Ee=function(e,t,n){var o=(0,r.useState)(void 0),a=o[0],i=o[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var o=0,c=!1,l=document.getElementsByClassName(e);o<l.length&&!c;){var u=l[o],s=u.href,f=decodeURIComponent(s.substring(s.indexOf("#")+1));r.id===f&&(a&&a.classList.remove(t),u.classList.add(t),i(u),c=!0),o+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},_e="tableOfContents_35-E",ke="table-of-contents__link";function Pe(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:ke,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(Pe,{isChild:!0,toc:e.children}))}))):null}var Oe=function(e){var t=e.toc;return Ee(ke,"table-of-contents__link--active",100),r.createElement("div",{className:a(_e,"thin-scrollbar")},r.createElement(Pe,{toc:t}))},je="mdxPageWrapper_3qD3";var De=function(e){var t=e.content,n=t.frontMatter,o=t.metadata,l=n.title,u=n.description,s=n.wrapperClassName,f=n.hide_table_of_contents,p=o.permalink;return r.createElement(i.Z,{title:l,description:u,permalink:p,wrapperClassName:null!=s?s:te.mdxPages,pageClassName:ee.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:a("row",je)},r.createElement("div",{className:a("col",!f&&"col--8")},r.createElement(c.Zo,{components:we},r.createElement(t,null))),!f&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(Oe,{toc:t.toc})))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},655:function(e,t,n){"use strict";n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return a},__rest:function(){return i},__decorate:function(){return c},__param:function(){return l},__metadata:function(){return u},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return p},__exportStar:function(){return d},__values:function(){return v},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return y},__spreadArray:function(){return m},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return E},__asyncValues:function(){return _},__makeTemplateObject:function(){return k},__importStar:function(){return O},__importDefault:function(){return j},__classPrivateFieldGet:function(){return D},__classPrivateFieldSet:function(){return x}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function l(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}function m(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(l,u):s(a[0][2],n)}catch(r){s(a[0][3],r)}var n}function l(e){c("next",e)}function u(e){c("throw",e)}function s(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return P(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function D(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);