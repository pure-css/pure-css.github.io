(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{138:function(e,t,a){"use strict";a.r(t);var l=a(148),n=a(147),r=a(0),u=a.n(r),c=a(140),m=a(141),s=a(142),i=a(143),d=a(151);a(139);function E(){var e=Object(l.a)(['\n                    <div class="pure-g">\n                        <div class="pure-u-1-3"><p>Thirds</p></div>\n                        <div class="pure-u-1-3"><p>Thirds</p></div>\n                        <div class="pure-u-1-3"><p>Thirds</p></div>\n                    </div>\n                ']);return E=function(){return e},e}var p="Start your next web project with Pure.";t.default=function(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields,a=t.PURE_DOWNLOAD_SNIPPET,l=t.pureVersion;return u.a.createElement(c.a,{description:p,title:"Get Started"},u.a.createElement(m.a,{description:p,title:"Get Started"}),u.a.createElement("div",{className:"content"},u.a.createElement(s.a,{heading:"Add Pure to Your Page"}),u.a.createElement("p",null,"You can add Pure to your page via the ",u.a.createElement("b",null,"free unpkg CDN"),". Just add the following ",u.a.createElement("code",null,"<link>")," element into your page's ",u.a.createElement("code",null,"<head>"),", before your project's stylesheets.")),u.a.createElement(i.a,{full:!0,wrap:!0},a),u.a.createElement("div",{className:"content"},u.a.createElement("aside",null,u.a.createElement("p",null,"Alternatively, you can ",u.a.createElement("a",{href:"https://github.com/pure-css/pure/archive/v"+l+".zip"},"download Pure"),", or ",u.a.createElement("a",{href:"/customize/"},"check out other CDNs")," that host Pure.")),u.a.createElement(s.a,{heading:"Add the Viewport Meta Element"}),u.a.createElement("p",null,"The viewport ",u.a.createElement("code",null,"meta")," element lets you control the the width and scale of the viewport on mobile browsers. Since you're building a responsive website, you want the width to be equal to the device's native width. Add this into your page's ",u.a.createElement("code",null,"<head>"),".")),u.a.createElement(i.a,{full:!0,wrap:!0},'<meta name="viewport" content="width=device-width, initial-scale=1">'),u.a.createElement("div",{className:"content"},u.a.createElement(s.a,{heading:"Understand Pure Grids"}),u.a.createElement("p",null,"Pure's grid system is very simple. You create a row by using the ",u.a.createElement("code",null,".pure-g")," class, and create columns within that row by using the ",u.a.createElement("code",null,"pure-u-*")," classes."),u.a.createElement("p",null,"Here's a grid with three columns:"),u.a.createElement(i.a,{wrap:!0},Object(d.a)(E()))),u.a.createElement("div",{className:"grids-example"},u.a.createElement("div",{className:"pure-g"},u.a.createElement("div",{className:"pure-u-1-3"},u.a.createElement("p",null,"Thirds")),u.a.createElement("div",{className:"pure-u-1-3"},u.a.createElement("p",null,"Thirds")),u.a.createElement("div",{className:"pure-u-1-3"},u.a.createElement("p",null,"Thirds")))),u.a.createElement("div",{className:"content"},u.a.createElement(s.a,{heading:"Responsive Grids"}),u.a.createElement("p",null,"Pure's grid system is also ",u.a.createElement("b",null,"mobile-first")," and ",u.a.createElement("b",null,"responsive"),", and you're able to customize the grid by specifying CSS Media Query breakpoints and grid classnames."),u.a.createElement("p",null,"You'll need to ",u.a.createElement("em",null,"also")," include Pure's ",u.a.createElement("code",null,"grids-responsive.css")," onto your page:"),u.a.createElement(i.a,{wrap:!0},'<link rel="stylesheet" href="https://unpkg.com/purecss@'+l+'/build/grids-responsive-min.css">'),u.a.createElement("p",null,"Here's the default responsive breakpoints included in ",u.a.createElement("code",null,"grids-responsive.css"),":"),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"mq-table pure-table-bordered pure-table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"highlight"},"Key"),u.a.createElement("th",{className:"highlight"},"CSS Media Query"),u.a.createElement("th",null,"Applies"),u.a.createElement("th",null,"Classname"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"highlight"},u.a.createElement("i",null,"None")),u.a.createElement("td",{className:"highlight"},u.a.createElement("i",null,"None")),u.a.createElement("td",null,u.a.createElement("i",null,"Always")),u.a.createElement("td",null,u.a.createElement("code",null,".pure-u-*"))),u.a.createElement("tr",null,u.a.createElement("td",{className:"highlight"},u.a.createElement("b",null,u.a.createElement("code",null,"sm"))),u.a.createElement("td",{className:"mq-table-mq highlight"},u.a.createElement("code",null,"@media screen and (min-width: 35.5em)")),u.a.createElement("td",null,"\u2265 ",u.a.createElement("b",null,"568px")),u.a.createElement("td",null,u.a.createElement("code",null,".pure-u-",u.a.createElement("b",null,"sm"),"-*"))),u.a.createElement("tr",null,u.a.createElement("td",{className:"highlight"},u.a.createElement("b",null,u.a.createElement("code",null,"md"))),u.a.createElement("td",{className:"mq-table-mq highlight"},u.a.createElement("code",null,"@media screen and (min-width: 48em)")),u.a.createElement("td",null,"\u2265 ",u.a.createElement("b",null,"768px")),u.a.createElement("td",null,u.a.createElement("code",null,".pure-u-",u.a.createElement("b",null,"md"),"-*"))),u.a.createElement("tr",null,u.a.createElement("td",{className:"highlight"},u.a.createElement("b",null,u.a.createElement("code",null,"lg"))),u.a.createElement("td",{className:"mq-table-mq highlight"},u.a.createElement("code",null,"@media screen and (min-width: 64em)")),u.a.createElement("td",null,"\u2265 ",u.a.createElement("b",null,"1024px")),u.a.createElement("td",null,u.a.createElement("code",null,".pure-u-",u.a.createElement("b",null,"lg"),"-*"))),u.a.createElement("tr",null,u.a.createElement("td",{className:"highlight"},u.a.createElement("b",null,u.a.createElement("code",null,"xl"))),u.a.createElement("td",{className:"mq-table-mq highlight"},u.a.createElement("code",null,"@media screen and (min-width: 80em)")),u.a.createElement("td",null,"\u2265 ",u.a.createElement("b",null,"1280px")),u.a.createElement("td",null,u.a.createElement("code",null,".pure-u-",u.a.createElement("b",null,"xl"),"-*")))))),u.a.createElement("p",null,"Here's an example of what you'd be able to do. ",u.a.createElement("i",null,"Try resizing your screen to see how the grid responds."))),u.a.createElement("div",{className:"grids-example"},u.a.createElement("div",{className:"pure-g"},u.a.createElement("div",{className:"pure-u-1"},".pure-u-1"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-1-2",u.a.createElement("br",null),".pure-u-lg-1-4"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-1-2",u.a.createElement("br",null),".pure-u-lg-1-4"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-1-2",u.a.createElement("br",null),".pure-u-lg-1-4"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-1-2",u.a.createElement("br",null),".pure-u-lg-1-4"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-3-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-3-4"),u.a.createElement("div",{className:"pure-u-1 pure-u-md-1-4"},".pure-u-1",u.a.createElement("br",null),".pure-u-md-1-4"))))}}}]);