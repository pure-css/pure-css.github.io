"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[94],{4343:(e,s,r)=>{r.r(s),r.d(s,{default:()=>a});r(6540);var t=r(3698),n=r(1805),i=r(1471),o=r(5668),l=r(5225),h=r(4848);const c="Tools",d="Write, manipulate, and do more with CSS.";const a=function(){return(0,h.jsxs)(t.A,{description:d,title:c,children:[(0,h.jsx)(n.A,{description:d,title:c}),(0,h.jsxs)("div",{className:"content",children:[(0,h.jsx)(o.A,{heading:"Installing Pure with npm"}),(0,h.jsxs)("p",{children:["You can add Pure to your project through ",(0,h.jsx)("a",{href:"https://www.npmjs.com/",children:"npm"}),". This is our recommended way to to integrate Pure into your project's build process and tool chain."]}),(0,h.jsx)(i.A,{children:"$ npm install purecss --save"}),(0,h.jsxs)("p",{children:[(0,h.jsx)("code",{children:"require('purecss')"})," will load an object with the following methods:"]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"getFile(name)"})}),"\u2013 Retrieve contents of a Pure module file.",(0,h.jsx)("li",{children:(0,h.jsx)("code",{children:"getFilePath(name)"})}),"\u2013 Return full path to a Pure file."]}),(0,h.jsx)(o.A,{heading:"Installing Pure with Composer"}),(0,h.jsxs)("p",{children:["You can also install Pure with ",(0,h.jsx)("a",{href:"https://getcomposer.org/",children:"Composer"}),"."]}),(0,h.jsx)(i.A,{children:"$ composer require pure-css/pure"}),(0,h.jsx)(o.A,{heading:"Extending Pure with Grunt"}),(0,h.jsxs)("p",{children:["We've written several tools that help you extend Pure and integrate it with your project's CSS. These tools are available as ",(0,h.jsx)("b",{children:(0,h.jsx)("a",{href:"http://gruntjs.com",children:"Grunt"})})," plugins that can easily be integrated into your existing ",(0,h.jsx)("code",{children:"Gruntfile.js"}),"."]}),(0,h.jsx)("aside",{children:(0,h.jsxs)("p",{children:["If you haven't used Grunt before, it's very easy to set up. Just head over to the ",(0,h.jsx)("a",{href:"http://gruntjs.com/getting-started",children:"Getting Started"})," page to learn more."]})}),(0,h.jsx)(o.A,{heading:"Extending Pure with Rework"}),(0,h.jsxs)("p",{children:["We've taken a layered approach to developing Pure's tooling. Most of the tools are first built as ",(0,h.jsx)("b",{children:(0,h.jsx)("a",{href:"https://github.com/reworkcss/rework",children:"Rework"})})," plugins. This allows you to compose Pure's Rework plugins together with other Rework plugins. It also allows the Grunt plugins to be written as ",(0,h.jsx)("em",{children:"very thin"})," wrappers."]}),(0,h.jsx)(o.A,{heading:"Generating Custom Responsive Grids"}),(0,h.jsx)("p",{children:"Pure was created to help developer's build mobile-first responsive web projects. However, since CSS Media Queries cannot be over-written via CSS, you can use Pure's tooling to customize Pure's Responsive Grids for your project."}),(0,h.jsx)("h3",{children:"Via Grunt"}),(0,h.jsxs)("p",{children:["Install the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/grunt-pure-grids",children:"Pure Grids Grunt Plugin"})," through npm."]}),(0,h.jsx)(i.A,{children:"$ npm install grunt-pure-grids --save-dev"}),(0,h.jsxs)("p",{children:["Next, add it to your ",(0,h.jsx)("code",{children:"Gruntfile.js"}),"."]}),(0,h.jsx)(i.A,{children:"grunt.loadNpmTasks('grunt-pure-grids');"}),(0,h.jsxs)("p",{children:["Finally, add the necessary configuration through the ",(0,h.jsx)("code",{children:"pure_grids"})," task. To see a full list of all configurable properties, check out the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/grunt-pure-grids#readme",children:"README documentation"}),"."]}),(0,h.jsx)(i.A,{children:l.dx`
                    grunt.initConfig({
                        pure_grids: {
                            dest : "build/public/css/main-grid.css",
                            options: {
                                units: 12, // 12-column grid
                                mediaQueries: {
                                    sm: 'screen and (min-width: 35.5em)', // 568px
                                    md: 'screen and (min-width: 48em)',   // 768px
                                    lg: 'screen and (min-width: 64em)',   // 1024px
                                    xl: 'screen and (min-width: 80em)',   // 1280px
                                    xxl: 'screen and (min-width: 120em)',  // 1920px
                                    xxxl: 'screen and (min-width: 160em)',  // 2560px                                    
                                    x4k: 'screen and (min-width: 240em)'  // 3840px                                    
                                }
                            }
                        }
                    });
                `}),(0,h.jsx)("h3",{children:"Via Rework"}),(0,h.jsxs)("p",{children:["If you're not using Grunt, you can also generate your custom responsive grids through using the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/rework-pure-grids",children:"Pure Grids Rework Plugin"}),". It has the same configuration options as the Grunt plugin \u2014 in fact, this is what powers the Grunt plugin."]}),(0,h.jsx)("p",{children:"You can install the Rework plugin through npm."}),(0,h.jsx)(i.A,{children:"$ npm install rework rework-pure-grids"}),(0,h.jsx)("p",{children:"And it can be used on it's own like this, or along side other Rework plugins you might be using."}),(0,h.jsx)(i.A,{children:l.dx`
                    import rework from 'rework';
                    import pureGrids from 'rework-pure-grids';

                    const css = rework('').use(pureGrids.units({
                        mediaQueries: {
                            sm: 'screen and (min-width: 35.5em)', // 568px
                            md: 'screen and (min-width: 48em)',   // 768px
                            lg: 'screen and (min-width: 64em)',   // 1024px
                            xl: 'screen and (min-width: 80em)',   // 1280px
                            xxl: 'screen and (min-width: 120em)',  // 1920px
                            xxxl: 'screen and (min-width: 160em)'  // 2560px
                            x4k: 'screen and (min-width: 240em)'  // 3840px
                        }
                    })).toString();

                    // This will log-out the grid CSS.
                    console.log(css);
                `}),(0,h.jsx)(o.A,{heading:"Mutating Selectors"}),(0,h.jsxs)("p",{children:["All selectors defined in Pure's source code begin with the ",(0,h.jsx)("code",{children:".pure-"})," prefix. However, you may want to change this. To accomplish this task, you can use Pure's tooling to mutate CSS selectors."]}),(0,h.jsx)("h3",{children:"Via Grunt"}),(0,h.jsxs)("p",{children:["Install the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/grunt-css-selectors",children:"CSS Selectors Grunt Plugin"})," through npm."]}),(0,h.jsx)(i.A,{children:"$ npm install grunt-css-selectors --save-dev"}),(0,h.jsxs)("p",{children:["Once it's installed, add the task to your ",(0,h.jsx)("code",{children:"Gruntfile.js"})]}),(0,h.jsx)(i.A,{children:"grunt.loadNpmTasks('grunt-css-selectors');"}),(0,h.jsxs)("p",{children:["Finally, add the necessary configuration through the ",(0,h.jsx)("code",{children:"css_selectors"})," task. Check out the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/grunt-css-selectors#readme",children:"README documentation"})," for more details."]}),(0,h.jsx)(i.A,{children:l.dx`
                    grunt.initConfig({
                        css_selectors: {
                            options: {
                                mutations: [
                                    {prefix: '.foo'}
                                ]
                            },
                            files: {
                                'dest/foo-prefixed.css': ['src/foo.css'],
                            }
                        }
                    });
                `}),(0,h.jsx)("h3",{children:"Via Rework"}),(0,h.jsxs)("p",{children:["If you're not using Grunt, you can also mutate CSS selectors using the ",(0,h.jsx)("a",{href:"https://www.npmjs.org/package/rework-mutate-selectors",children:"Mutate Selectors Rework Plugin"}),". It has a similar interface to the Grunt plugin \u2014 in fact, this is what powers the Grunt plugin."]}),(0,h.jsx)("p",{children:"You can install the Rework plugin through npm."}),(0,h.jsx)(i.A,{children:"$ npm install rework rework-mutate-selectors"}),(0,h.jsx)("p",{children:"And it can be used on it's own like this, or along side other Rework plugins you might be using."}),(0,h.jsx)(i.A,{children:l.dx`
                    import rework from 'rework';
                    import selectors from 'rework-mutate-selectors';

                    const css = rework(inputCSS)
                        .use(selectors.prefix('.foo'))
                        .use(selectors.replace(/^\.pure/g, '.bar'))
                        .toString();

                    // This will log-out the resulting CSS.
                    console.log(css);
                `}),(0,h.jsx)("aside",{children:(0,h.jsx)("p",{children:"If you have questions or run into issues while these tools, please file them on their respective GitHub repositories."})})]})]})}}}]);