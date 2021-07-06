(self.webpackChunkpure=self.webpackChunkpure||[]).push([[195],{1435:function(e,t,a){"use strict";function n(e){var t=e.module,a=e.decimals,n=void 0===a?1:a;return(e.filesizes[t]/1024).toFixed(n)+"KB"}function s(e){var t=e.modules,a=e.module,n=e.filesizes,s=t.reduce((function(e,t){return e+n[t]}),0);return(n[a]/s*100).toFixed(4)+"%"}function r(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}a.d(t,{jb:function(){return n},B9:function(){return s},qk:function(){return r}})},2841:function(e,t,a){"use strict";a.r(t);var n=a(6742),s=a(2263),r=a(4996),l=a(7294),u=a(3947),o=a(7115),m=a(1435);t.default=function(){var e,t,a=(0,s.Z)().siteConfig,c=void 0===a?{}:a,i=c.customFields,p=i.moduleSizes,d=i.PURE_DOWNLOAD_SNIPPET,E=i.repoName,b=c.organizationName,f=(e=p,(t=["base","grids","forms","buttons","tables","menus"]).map((function(a,s){return l.createElement("div",{key:s,className:"size-chart-"+a+" pure-u",style:{width:(0,m.B9)({modules:t,module:a,filesizes:e})}},l.createElement(n.Z,{className:"size-chart-item",to:"/"+a},l.createElement("span",{className:"size-chart-label"},l.createElement("span",{className:"size-chart-mod"},a),l.createElement("span",{className:"size-chart-size"},(0,m.jb)({module:a,filesizes:e})))))})));return l.createElement(u.Z,{description:c.tagline},l.createElement("div",{className:"hero"},l.createElement("div",{className:"hero-titles"},l.createElement("img",{className:"logo",src:(0,r.Z)("img/logo_pure@2x.png"),alt:"Pure"}),l.createElement("h2",{className:"hero-tagline"},"A set of small, responsive CSS modules that you can use in every web project.")),l.createElement("div",{className:"hero-cta"},l.createElement(o.Z,{full:!0,wrap:!0},d),l.createElement("p",null,l.createElement(n.Z,{className:"button-cta pure-button",to:"/start/"},"Get Started"),l.createElement("a",{className:"button-secondary pure-button",href:"https://github.com/"+b+"/"+E+"/"},"View on GitHub")))),l.createElement("div",{className:"marketing"},l.createElement("div",{className:"size-chart pure-g"},f),l.createElement("div",{className:"content"},l.createElement("h3",{className:"marketing-header"},"CSS with a minimal footprint."),l.createElement("p",null,"Pure is ridiculously tiny. The entire set of modules clocks in at ",l.createElement("b",null,(0,m.jb)({module:"pure",filesizes:p}),"* minified and gzipped"),". Crafted with mobile devices in mind, it was important to us to keep our file sizes small, and every line of CSS was carefully considered. If you decide to only use a subset of these modules, you'll save even more bytes."),l.createElement("p",{style:{fontSize:"smaller"}},"* We can add correctly :) the numbers above are individual module sizes; when grouped together they compress (gzip) even more."))),l.createElement("div",{className:"marketing l-wrap pure-g"},l.createElement("div",{className:"content pure-u-1 u-sm-1-2 u-xl-1-3"},l.createElement("h3",{className:"marketing-header"},"Your CSS foundation."),l.createElement("p",null,"Pure builds on ",l.createElement("a",{href:"http://necolas.github.io/normalize.css/"},"Normalize.css")," and provides layout and styling for native HTML elements, plus the most common UI components. It's what you need, without the cruft.")),l.createElement("div",{className:"content pure-u-1 u-sm-1-2 u-xl-1-3"},l.createElement("h3",{className:"marketing-header"},"Made with mobile in mind."),l.createElement("p",null,"Pure is responsive out of the box, so elements look great on all screen sizes.")),l.createElement("div",{className:"content pure-u-1 u-lg-3-4 u-xl-1-3"},l.createElement("h3",{className:"marketing-header"},"Stays out of your way."),l.createElement("p",null,"Pure has minimal styles and encourages you to write your application styles on top of it. It's designed to get out of your way and makes it easy to override styles."))),l.createElement("div",{className:"marketing l-wrap pure-g"},l.createElement("div",{className:"marketing-diagram content pure-u-1 u-sm-2-3 u-md-1-2"},l.createElement(n.Z,{to:"/layouts"},l.createElement("img",{src:(0,r.Z)("img/layout-icon.jpg"),className:"pure-img-responsive",alt:"Diagram of a sample layout."}))),l.createElement("div",{className:"content pure-u-1 u-md-1-2"},l.createElement("h3",{className:"marketing-header"},"Create responsive layouts."),l.createElement("p",null,"By using ",l.createElement("a",{href:"/grids/"},"Grids"),", ",l.createElement("a",{href:"/menus/"},"Menus"),", and more, it's easy to create beautiful responsive layouts for all screen sizes. We've made it easy for you to get started. Take a look at a few different ",l.createElement("a",{href:"/layouts/"},"layouts")," and start your next web project with a rock-solid foundation."),l.createElement("p",null,l.createElement(n.Z,{to:"/layouts/",className:"pure-button"},"View Layouts")))),l.createElement("div",{className:"marketing marketing-customize l-wrap pure-g"},l.createElement("div",{className:"content pure-u-1 u-md-1-2"},l.createElement("h3",{className:"marketing-header"},"Create your own look and feel."),l.createElement("p",null,"Unlike other frameworks, Pure's design is unopinionated, minimal and flat. We believe that it's much easier to add new CSS rules than to overwrite existing rules. By adding a few lines of CSS, you can customize Pure's appearance to work with your web project."),l.createElement("p",null,l.createElement(n.Z,{to:"/extend/",className:"pure-button"},"Extend Pure"))),l.createElement("div",{className:"sample-buttons content pure-u-1 u-md-1-2"},l.createElement("div",{className:"pure-g"},l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"pure-button"},"Default")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-a pure-button"},"Blue")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-b pure-button"},"Yellow")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-c pure-button"},"Black")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-d pure-button"},"Green")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-e pure-button"},"Red")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-f pure-button"},"Purple")),l.createElement("span",{className:"sample-button pure-u-1-2 u-sm-1-3"},l.createElement("button",{className:"button-g pure-button"},"Orange")),l.createElement("span",{className:"sample-button pure-u-1 u-sm-1-3"},l.createElement("button",{className:"button-h pure-button"},"Indigo"))))))}}}]);