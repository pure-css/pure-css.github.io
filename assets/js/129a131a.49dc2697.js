(self.webpackChunkpure=self.webpackChunkpure||[]).push([[741],{1738:function(e,t,a){"use strict";a.r(t);var l,r,i,s,n,u,c,d=a(5761),m=a(6742),p=a(2263),o=a(7294),g=a(3947),E=a(1899),v=a(7115),h=a(6393),N=a(5296),b="Grids",w="Fully customizable and responsive CSS grids.";t.default=function(){var e=(0,p.Z)().siteConfig,t=(void 0===e?{}:e).customFields.pureVersion;return o.createElement(g.Z,{description:w,title:b},o.createElement(E.Z,{description:w,title:b}),o.createElement("div",{className:"content"},o.createElement(h.Z,{heading:"Introduction to Pure Grids"}),o.createElement("p",null,"Pure Grids are easy to work with, and very powerful. There are a few simple concepts to keep in mind:"),o.createElement("dl",null,o.createElement("dt",null,"Grid classes vs. unit classes"),o.createElement("dd",null,"Pure Grids consist of two types of classes: the grid class (",o.createElement("code",null,"pure-g"),") and unit classes (",o.createElement("code",null,"pure-u")," or ",o.createElement("code",null,"pure-u-*"),")"),o.createElement("dt",null,"The widths of the units are fractions"),o.createElement("dd",null,"Units have various class names that represent their widths. For example, ",o.createElement("code",null,"pure-u-1-2")," has a width of 50%, whereas ",o.createElement("code",null,"pure-u-1-5")," would have a width of 20%."),o.createElement("dt",null,"All child elements of a grid must be units"),o.createElement("dd",null,"Child elements contained within an element with a ",o.createElement("code",null,"pure-g")," classname ",o.createElement("em",null,"must")," be a grid unit with a ",o.createElement("code",null,"pure-u")," or ",o.createElement("code",null,"pure-u-*")," classname."),o.createElement("dt",null,"Content goes inside grid units"),o.createElement("dd",null,"All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly.")),o.createElement("aside",null,o.createElement("p",null,"When setting a ",o.createElement("code",null,"font-family")," in your project, be sure to check out the section on ",o.createElement(m.Z,{to:"#using-grids-with-your-font-family"},"using Grids with your font-family"),".")),o.createElement("p",null,"Let's start with a simple example. Here's a grid with three columns:"),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(l||(l=(0,d.Z)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                        </div>\n                    '])))),o.createElement(h.Z,{heading:"Grids Units Sizes"}),o.createElement("p",null,"Pure ships with both a ",o.createElement("b",null,"5ths")," and ",o.createElement("b",null,"24ths")," based grid. Depicted below are the available units that can be appended to the ",o.createElement("b",null,o.createElement("code",null,"pure-u-*"))," classname where ",o.createElement("code",null,"*")," is one of the unit fractions listed below. For example the unit classname for 50% width is: ",o.createElement("code",null,"pure-u-1-2"),"."),o.createElement("h3",null,"5ths-Based Units"),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-5"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-5"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"2-5"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-2-5"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"3-5"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-3-5"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"4-5"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-4-5"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-1"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-1"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"5-5"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-5-5"})))),o.createElement("h3",null,"24ths-Based Units"),o.createElement("div",{className:"grids-unit pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-12"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-12"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"2-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-2-24"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"3-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-3-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-8"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-8"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"4-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-4-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-6"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-6"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"5-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-5-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-4"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-4"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"6-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-6-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"7-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-7-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-3"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-3"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"8-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-8-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"3-8"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-3-8"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"9-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-9-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"5-12"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-5-12"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"10-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-10-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"11-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-11-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-2"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-2"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"12-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-12-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"13-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-13-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"7-12"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-7-12"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"14-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-14-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"5-8"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-5-8"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"15-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-15-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"2-3"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-2-3"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"16-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-16-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"17-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-17-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"3-4"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-3-4"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"18-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-18-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"19-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-19-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"5-6"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-5-6"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"20-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-20-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"7-8"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-7-8"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"21-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-21-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"11-12"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-11-12"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"22-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-22-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"23-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-23-24"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1"})))),o.createElement("div",{className:"grids-unit  pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"1-1"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-1-1"})))),o.createElement("div",{className:"grids-unit grids-unit-not-reduced pure-g"},o.createElement("div",{className:"grids-unit-width pure-u"},"24-24"),o.createElement("div",{className:"grids-unit-details pure-u-1"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"grids-unit-bar pure-u-24-24"})))),o.createElement("h3",null,"Custom Unit Sizes"),o.createElement("p",null,"We are working on building tools to allow people to customize Pure Grids. The first low-level tools, the ",o.createElement("b",null,o.createElement("a",{href:"https://github.com/ericf/rework-pure-grids"},"Pure Grids Rework Plugin")),", is available to use today\u2014we use this tool to generate Pure's built-in unit sizes."),o.createElement(h.Z,{heading:"Pure Responsive Grids"}),o.createElement("p",null,"Pure has a mobile-first responsive grid system that can be used declaratively through CSS class names. It's a robust and flexible grid  that builds on top of the default grid."),o.createElement("h3",null,"Including on Your Page"),o.createElement("p",null,"Since media queries cannot be over-written, we ",o.createElement("u",null,"do not")," include the grid system as part of ",o.createElement("code",null,"pure.css"),". You'll have to pull it in as a separate CSS file. You can do this by adding the following ",o.createElement("code",null,"<link>")," tag to your page."),o.createElement(v.Z,null,'<link rel="stylesheet" href="https://unpkg.com/purecss@'+t+'/build/grids-responsive-min.css" />'),o.createElement("h3",null,"Pure's Regular Grid vs. Responsive Grid"),o.createElement("p",null,"The best way to understand the difference between Pure's regular grid and a responsive grid is through an example.The snippet below shows how regular Pure Grids are written. These grids are unresponsive. They'll always be ",o.createElement("code",null,"width: 33.33%"),", irrespective of the width of the screen."),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(r||(r=(0,d.Z)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1-3"> ... </div>\n                            <div class="pure-u-1-3"> ... </div>\n                            <div class="pure-u-1-3"> ... </div>\n                        </div>\n                    '])))),o.createElement("p",null,"Next, let's look at a responsive grid. Elements within this grid will be ",o.createElement("code",null,"width: 100%")," on small screens, but will shrink to become ",o.createElement("code",null,"width: 33.33%")," on medium-sized screens and above."),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(i||(i=(0,d.Z)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                        </div>\n                    '])))),o.createElement("h3",null,"Default Media Queries"),o.createElement("p",null,"When using Responsive Grids, you can control how the grid behaves at specific breakpoints by adding class names. Pure's default responsive grids comes with the following class names and media query breakpoints."),o.createElement("div",{className:"table-responsive"},o.createElement("table",{className:"mq-table pure-table-bordered pure-table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"highlight"},"Key"),o.createElement("th",{className:"highlight"},"CSS Media Query"),o.createElement("th",null,"Applies"),o.createElement("th",null,"Classname"))),o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",{className:"highlight"},o.createElement("i",null,"None")),o.createElement("td",{className:"highlight"},o.createElement("i",null,"None")),o.createElement("td",null,o.createElement("i",null,"Always")),o.createElement("td",null,o.createElement("code",null,".pure-u-*"))),o.createElement("tr",null,o.createElement("td",{className:"highlight"},o.createElement("b",null,o.createElement("code",null,"sm"))),o.createElement("td",{className:"mq-table-mq highlight"},o.createElement("code",null,"@media screen and (min-width: 35.5em)")),o.createElement("td",null,"\u2265 ",o.createElement("b",null,"568px")),o.createElement("td",null,o.createElement("code",null,".pure-u-",o.createElement("b",null,"sm"),"-*"))),o.createElement("tr",null,o.createElement("td",{className:"highlight"},o.createElement("b",null,o.createElement("code",null,"md"))),o.createElement("td",{className:"mq-table-mq highlight"},o.createElement("code",null,"@media screen and (min-width: 48em)")),o.createElement("td",null,"\u2265 ",o.createElement("b",null,"768px")),o.createElement("td",null,o.createElement("code",null,".pure-u-",o.createElement("b",null,"md"),"-*"))),o.createElement("tr",null,o.createElement("td",{className:"highlight"},o.createElement("b",null,o.createElement("code",null,"lg"))),o.createElement("td",{className:"mq-table-mq highlight"},o.createElement("code",null,"@media screen and (min-width: 64em)")),o.createElement("td",null,"\u2265 ",o.createElement("b",null,"1024px")),o.createElement("td",null,o.createElement("code",null,".pure-u-",o.createElement("b",null,"lg"),"-*"))),o.createElement("tr",null,o.createElement("td",{className:"highlight"},o.createElement("b",null,o.createElement("code",null,"xl"))),o.createElement("td",{className:"mq-table-mq highlight"},o.createElement("code",null,"@media screen and (min-width: 80em)")),o.createElement("td",null,"\u2265 ",o.createElement("b",null,"1280px")),o.createElement("td",null,o.createElement("code",null,".pure-u-",o.createElement("b",null,"xl"),"-*")))))),o.createElement("h3",null,"Using Relative Units for Widths"),o.createElement("p",null,"You may have noticed that we use ",o.createElement("code",null,"em")," for our default CSS Media Query widths instead of ",o.createElement("code",null,"px"),". This was a conscious decision since it allows the Media Queries to respond appropriately when people zoom the webpage. Check out ",o.createElement("a",{href:"http://bradfrostweb.com/blog/post/7-habits-of-highly-effective-media-queries/#relative"},"this article by Brad Frost")," for some background information on using relative units within Media Queries."),o.createElement("p",null,"If you do want to use units other than ",o.createElement("code",null,"em"),", you can always modify the default Media Queries on the ",o.createElement("a",{href:"/start/#build-your-pure-starter-kit"},"Get Started")," page. Converting from ",o.createElement("code",null,"em")," to ",o.createElement("code",null,"px")," is pretty simple:"),o.createElement(v.Z,{wrap:!0},"1em == 16px *"),o.createElement("p",null,o.createElement("small",null,"* The ",o.createElement("code",null,"em")," to ",o.createElement("code",null,"px")," conversion is based on the browser's default font size, which is generally ",o.createElement("code",null,"16px"),", but can be overridden by a user in their browser settings.")),o.createElement("h3",null,"An Example of Pure Responsive Grids"),o.createElement("p",null,"The example below leverages Pure's Responsive Grid to create a row with four columns. The columns stack on small screens, take up ",o.createElement("code",null,"width: 50%")," on medium-sized screens, and ",o.createElement("code",null,"width: 25%")," on large screens."),o.createElement("p",null,"This is done by adding the ",o.createElement("code",null,".pure-u-1")," class for small screens, ",o.createElement("code",null,".pure-u-md-1-2")," for medium-sized screens, and ",o.createElement("code",null,".pure-u-lg-1-4")," for large screens. ",o.createElement("em",null,"Resize the page to see the grid respond to the screen size."))),o.createElement("div",{className:"grids-example"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Lorem Ipsum"),o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."))),o.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Dolor Sit Amet"),o.createElement("p",null,"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."))),o.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Proident laborum"),o.createElement("p",null,"In culpa qui officia deserunt mollit anim id est laborum. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."))),o.createElement("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Praesent consectetur"),o.createElement("p",null,"Integer vitae lectus accumsan, egestas dui eget, ullamcorper urn. In feugiat tortor at turpis rhoncus tincidunt. Duis sed porttitor ante, eget venenatis lectus."))),o.createElement("div",{className:"pure-u-1"},o.createElement("img",{className:"pure-img",src:"https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg",alt:"By Sylwia Bartyzel from unsplash.com"})),o.createElement("div",{className:"pure-u-2-5"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Two-Fifth Column"),o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum dui turpis."))),o.createElement("div",{className:"pure-u-3-5"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Three-Fifth Column"),o.createElement("p",null,"Quisque ac magna eget est porta varius ut eget quam. Curabitur tincidunt gravida nisl."),o.createElement("p",null,"Fusce accumsan, sem vitae tempus tempor, nulla lectus interdum felis, eget molestie urna mauris vel elit. Curabitur vel ipsum nulla."))))),o.createElement("div",{className:"content"},o.createElement(h.Z,{heading:"Grids on Mobile"}),o.createElement("p",null,"Pure's default grid system is mobile-first. If you want to have a grid on small screens, just use the ",o.createElement("code",null,"pure-u-*")," classnames on your elements.")),o.createElement("div",{className:"grids-example"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"pure-u-1-3"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Thirds"),o.createElement("p",null,"This cell will be 1/3 width all the time."))),o.createElement("div",{className:"pure-u-1-3"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Thirds"),o.createElement("p",null,"This cell will be 1/3 width all the time."))),o.createElement("div",{className:"pure-u-1-3"},o.createElement("div",{className:"l-box"},o.createElement("h3",null,"Thirds"),o.createElement("p",null,"This cell will be 1/3 width all the time."))))),o.createElement("div",{className:"content"},o.createElement(h.Z,{heading:"Responsive Images"}),o.createElement("p",null,"When using Responsive Grids, you'll want your images to be fluid as well so they grow and shrink with the content, while maintaining the correct ratio. To do this, just add the ",o.createElement("code",null,".pure-img")," class on them. Check out the example below.")),o.createElement("div",{className:"grids-example"},o.createElement("div",{className:"pure-g"},o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg",alt:"Peyto Lake"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg",alt:"Train"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg",alt:"T-Shirt Store"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg",alt:"Mountain"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7478/16185861115_4ed6353a97.jpg",alt:"Miami"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm3.staticflickr.com/4068/4666556755_091acf3253.jpg",alt:"BCE Place, Toronto"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm6.staticflickr.com/7313/13136053333_f04b335933.jpg",alt:"Banff"})),o.createElement("div",{className:"pure-u-1-4 pure-u-lg-1-8"},o.createElement("img",{className:"pure-img",src:"http://farm3.staticflickr.com/7628/16754137141_27dcaabd24.jpg",alt:"Boston North Point Park"})))),o.createElement("div",{className:"content"},o.createElement(h.Z,{heading:"Applying Padding and Borders to Grid Units"}),o.createElement("p",null,"To add borders and padding to Pure Grids, you have two options. The first option is to nest a ",o.createElement("code",null,"<div>")," inside each Grid unit and style the child container:"),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(s||(s=(0,d.Z)(['\n                        <style>\n                            .l-box {\n                                padding: 1em;\n                            }\n                        </style>\n\n                        ...\n\n                        <div class="pure-g">\n                            <div class="pure-u-1-2">\n                                <div class="l-box"> ... </div>\n                            </div>\n                            <div class="pure-u-1-2">\n                                <div class="l-box"> ... </div>\n                            </div>\n                        </div>\n                    '])))),o.createElement("p",null,"The second option is to add borders and padding directly to a grid unit. This would ordinarily risk breaking the layout, but you can easily avoid this problem by augmenting the behavior of the grid itself with a ",o.createElement("code",null,"box-sizing: border-box")," rule:"),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(n||(n=(0,d.Z)(['\n                        <style>\n                            .pure-g > div {\n                                box-sizing: border-box;\n                            }\n                            .l-box {\n                                padding: 1em;\n                            }\n                        </style>\n\n                        ...\n\n                        <div class="pure-g">\n                            <div class="pure-u-1-2 l-box"> ... </div>\n                            <div class="pure-u-1-2 l-box"> ... </div>\n                        </div>\n                    '])))),o.createElement("p",null,"Using ",o.createElement("code",null,"box-sizing: border-box")," keeps your markup cleaner, but has one minor drawback. Setting this property on all grid units makes it harder to override or unset the value later on. As an unopinionated library, Pure lets ",o.createElement("code",null,"box-sizing")," remain at the default value of ",o.createElement("code",null,"content-box")," and leaves the choice up to you."),o.createElement(h.Z,{heading:"Using Grids with Your Font-Family"}),o.createElement("p",null,"Pure Grids use a specific font stack to ensure the greatest OS/browser compatibility, and by default grid units will have ",o.createElement("code",null,"font-family: sans-serif;")," applied \u2014 this is the default font stack Pure's Base (Normalize.css) applies to ",o.createElement("code",null,"<html>"),", ",o.createElement("code",null,"<button>"),", ",o.createElement("code",null,"<input>"),", ",o.createElement("code",null,"<select>"),", and ",o.createElement("code",null,"<textarea>")," elements. Fortunately, it's quite easy to make sure your project's font stack applies to all content when using Pure. Instead of applying your ",o.createElement("code",null,"font-family")," to only the ",o.createElement("code",null,"<body>")," element, apply it like this:"),o.createElement(v.Z,{wrap:!0},(0,N.Pn)(u||(u=(0,d.Z)(['\n                        <style>\n                        /*\n                        When setting the primary font stack, apply it to the Pure grid units along\n                        with "html", "button", "input", "select", and "textarea". Pure Grids use\n                        specific font stacks to ensure the greatest OS/browser compatibility.\n                        */\n                        html, button, input, select, textarea,\n                        .pure-g [class *= "pure-u"] {\n                            /* Set your content font stack here: */\n                            font-family: Georgia, Times, "Times New Roman", serif;\n                        }\n                        </style>\n                    '])))),o.createElement(h.Z,{heading:"Want to just use Grids?"}),o.createElement("p",null,"Grids is part of the Pure CSS file. However, if you just want Grids and not the other modules, you can pull it down separately. Just include these ",o.createElement("code",null,"<link>")," elements in your ",o.createElement("code",null,"<head>"),"."),o.createElement(v.Z,null,(0,N.Pn)(c||(c=(0,d.Z)(['\n                        <link rel="stylesheet" href="https://unpkg.com/purecss@','/build/base-min.css">\n                        <link rel="stylesheet" href="https://unpkg.com/purecss@','/build/grids-min.css">\n                        <link rel="stylesheet" href="https://unpkg.com/purecss@','/build/grids-responsive-min.css">\n                    '])),t,t,t))))}}}]);