"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[931],{539:(e,n,t)=>{t.d(n,{A:()=>c,T:()=>o});var i=t(6540),a=t(4848);function r(e,n){const t=e.split(/(\{\w+\})/).map(((e,t)=>{if(t%2==1){const t=null==n?void 0:n[e.slice(1,-1)];if(void 0!==t)return t}return e}));return t.some((e=>(0,i.isValidElement)(e)))?t.map(((e,n)=>(0,i.isValidElement)(e)?i.cloneElement(e,{key:n}):e)).filter((e=>""!==e)):t.join("")}var s=t(2654);function l(e){var n,t;let{id:i,message:a}=e;if(void 0===i&&void 0===a)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!=(n=null!=(t=s[null!=i?i:a])?t:a)?n:i}function o(e,n){let{message:t,id:i}=e;return r(l({message:t,id:i}),n)}function c(e){let{children:n,id:t,values:i}=e;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");const s=l({message:n,id:t});return(0,a.jsx)(a.Fragment,{children:r(s,i)})}},9303:(e,n,t)=>{t.d(n,{A:()=>u});var i=t(8587),a=(t(6540),t(4164)),r=t(539),s=t(3115),l=t(6289),o=t(5246);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var d=t(4848);const h=["as","id"];function u(e){let{as:n,id:t}=e,u=(0,i.A)(e,h);const m=(0,o.A)(),{navbar:{hideOnScroll:f}}=(0,s.p)();if("h1"===n||!t)return(0,d.jsx)(n,Object.assign({},u,{id:void 0}));m.collectAnchor(t);const g=(0,r.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:t});return(0,d.jsxs)(n,Object.assign({},u,{className:(0,a.A)("anchor",f?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar,u.className),id:t,children:[u.children,(0,d.jsx)(l.A,{className:"hash-link",to:"#"+t,"aria-label":g,title:g,children:"\u200b"})]}))}},5312:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});t(6540);var i=t(539),a=t(1769),r=t(3698),s=t(4164),l=t(9303),o=t(4848);function c(e){let{className:n}=e;return(0,o.jsx)("main",{className:(0,s.A)("container margin-vert--xl",n),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:(0,o.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}function d(){const e=(0,i.T)({id:"theme.NotFound.title",message:"Page Not Found"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.be,{title:e}),(0,o.jsx)(r.A,{children:(0,o.jsx)(c,{})})]})}}}]);