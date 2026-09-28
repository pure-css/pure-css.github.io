"use strict";(globalThis.webpackChunkpure||=[]).push([[94],{3828(e,r,s){s.r(r);var i=s(6225),o=s(3454),t=s(3647),n=s(5353),l=s(708),c=s(4848);const h="Tools",u="Write, manipulate, and do more with CSS.";const d=function(){return(0,c.jsxs)(i.A,{description:u,title:h,children:[(0,c.jsx)(o.A,{description:u,title:h}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsx)(n.A,{heading:"Installing Pure with npm"}),(0,c.jsxs)("p",{children:["You can add Pure to your project through ",(0,c.jsx)("a",{href:"https://www.npmjs.com/",children:"npm"}),". This is our recommended way to to integrate Pure into your project's build process and tool chain."]}),(0,c.jsx)(t.A,{children:"$ npm install purecss --save"}),(0,c.jsxs)("p",{children:[(0,c.jsx)("code",{children:"require('purecss')"})," will load an object with the following methods:"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("code",{children:"getFile(name)"})}),"\u2013 Retrieve contents of a Pure module file.",(0,c.jsx)("li",{children:(0,c.jsx)("code",{children:"getFilePath(name)"})}),"\u2013 Return full path to a Pure file."]}),(0,c.jsx)(n.A,{heading:"Installing Pure with Composer"}),(0,c.jsxs)("p",{children:["You can also install Pure with ",(0,c.jsx)("a",{href:"https://getcomposer.org/",children:"Composer"}),"."]}),(0,c.jsx)(t.A,{children:"$ composer require yahoo/purecss"}),(0,c.jsx)(n.A,{heading:"Extending Pure with Rework"}),(0,c.jsxs)("p",{children:["We've written several tools that help you extend Pure and integrate it with your project's CSS. These tools are built as ",(0,c.jsx)("b",{children:(0,c.jsx)("a",{href:"https://github.com/reworkcss/rework",children:"Rework"})})," plugins, which allows you to compose Pure's Rework plugins together with other Rework plugins."]}),(0,c.jsx)(n.A,{heading:"Generating Custom Responsive Grids"}),(0,c.jsx)("p",{children:"Pure was created to help developer's build mobile-first responsive web projects. However, since CSS Media Queries cannot be over-written via CSS, you can use Pure's tooling to customize Pure's Responsive Grids for your project."}),(0,c.jsxs)("p",{children:["You can generate your custom responsive grids using the ",(0,c.jsx)("a",{href:"https://www.npmjs.org/package/rework-pure-grids",children:"Pure Grids Rework Plugin"}),"."]}),(0,c.jsx)("p",{children:"You can install the Rework plugin through npm."}),(0,c.jsx)(t.A,{children:"$ npm install rework rework-pure-grids"}),(0,c.jsx)("p",{children:"And it can be used on it's own like this, or along side other Rework plugins you might be using."}),(0,c.jsx)(t.A,{children:l.dx`
                    import rework from 'rework';
                    import pureGrids from 'rework-pure-grids';

                    const css = rework('').use(pureGrids.units({
                        mediaQueries: {
                            sm: 'screen and (min-width: 35.5em)', // 568px
                            md: 'screen and (min-width: 48em)',   // 768px
                            lg: 'screen and (min-width: 64em)',   // 1024px
                            xl: 'screen and (min-width: 80em)',   // 1280px
                            xxl: 'screen and (min-width: 120em)',  // 1920px
                            xxxl: 'screen and (min-width: 160em)', // 2560px
                            x4k: 'screen and (min-width: 240em)'  // 3840px
                        }
                    })).toString();

                    // This will log-out the grid CSS.
                    console.log(css);
                `}),(0,c.jsx)(n.A,{heading:"Mutating Selectors"}),(0,c.jsxs)("p",{children:["All selectors defined in Pure's source code begin with the ",(0,c.jsx)("code",{children:".pure-"})," prefix. However, you may want to change this. To accomplish this task, you can use Pure's tooling to mutate CSS selectors."]}),(0,c.jsxs)("p",{children:["You can mutate CSS selectors using the ",(0,c.jsx)("a",{href:"https://www.npmjs.org/package/rework-mutate-selectors",children:"Mutate Selectors Rework Plugin"}),"."]}),(0,c.jsx)("p",{children:"You can install the Rework plugin through npm."}),(0,c.jsx)(t.A,{children:"$ npm install rework rework-mutate-selectors"}),(0,c.jsx)("p",{children:"And it can be used on it's own like this, or along side other Rework plugins you might be using."}),(0,c.jsx)(t.A,{children:l.dx`
                    import rework from 'rework';
                    import selectors from 'rework-mutate-selectors';

                    const css = rework(inputCSS)
                        .use(selectors.prefix('.foo'))
                        .use(selectors.replace(/^\.pure/g, '.bar'))
                        .toString();

                    // This will log-out the resulting CSS.
                    console.log(css);
                `}),(0,c.jsx)("aside",{children:(0,c.jsx)("p",{children:"If you have questions or run into issues while these tools, please file them on their respective GitHub repositories."})})]})]})};s.d(r,["default",0,d])}}]);