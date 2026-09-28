"use strict";(globalThis.webpackChunkpure||=[]).push([[94],{3828(e,s,r){r.r(s);var n=r(6225),i=r(3454),t=r(3647),o=r(5353),c=r(708),d=r(4848);const l="Tools",a="Write, manipulate, and do more with CSS.";const u=function(){return(0,d.jsxs)(n.A,{description:a,title:l,children:[(0,d.jsx)(i.A,{description:a,title:l}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(o.A,{heading:"Installing Pure with npm"}),(0,d.jsxs)("p",{children:["You can add Pure to your project through ",(0,d.jsx)("a",{href:"https://www.npmjs.com/",children:"npm"}),". This is our recommended way to to integrate Pure into your project's build process and tool chain."]}),(0,d.jsx)(t.A,{children:"$ npm install purecss --save"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("code",{children:"require('purecss')"})," will load an object with the following methods:"]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)("code",{children:"getFile(name)"})}),"\u2013 Retrieve contents of a Pure module file.",(0,d.jsx)("li",{children:(0,d.jsx)("code",{children:"getFilePath(name)"})}),"\u2013 Return full path to a Pure file."]}),(0,d.jsx)(o.A,{heading:"Installing Pure with Composer"}),(0,d.jsxs)("p",{children:["You can also install Pure with ",(0,d.jsx)("a",{href:"https://getcomposer.org/",children:"Composer"}),"."]}),(0,d.jsx)(t.A,{children:"$ composer require yahoo/purecss"}),(0,d.jsx)(o.A,{heading:"Generating Custom Responsive Grids"}),(0,d.jsx)("p",{children:"Pure was created to help developers build mobile-first responsive web projects. However, since CSS Media Queries cannot be over-written via CSS, you can use Pure's tooling to customize Pure's Responsive Grids for your project."}),(0,d.jsxs)("p",{children:["The ",(0,d.jsx)("code",{children:"purecss"})," npm package includes ",(0,d.jsx)("code",{children:"generateGrids()"}),", the same generator Pure uses to build its own grid files. It has no dependencies and returns the CSS as a string."]}),(0,d.jsx)(t.A,{children:"$ npm install purecss --save-dev"}),(0,d.jsx)(t.A,{children:c.dx`
                    import { generateGrids } from 'purecss';

                    const css = generateGrids({
                        mediaQueries: {
                            sm: 'screen and (min-width: 35.5em)', // 568px
                            md: 'screen and (min-width: 48em)',   // 768px
                            lg: 'screen and (min-width: 64em)',   // 1024px
                            xl: 'screen and (min-width: 80em)',   // 1280px
                            xxl: 'screen and (min-width: 120em)',  // 1920px
                            xxxl: 'screen and (min-width: 160em)', // 2560px
                            x4k: 'screen and (min-width: 240em)'  // 3840px
                        }
                    });

                    // This will log-out the grid CSS.
                    console.log(css);
                `}),(0,d.jsxs)("p",{children:["To use your own unit sizes, pass them first. For example, ",(0,d.jsx)("code",{children:"generateGrids([12], options)"})," creates a 12-column grid, including rules outside of any media query. Other options are ",(0,d.jsx)("code",{children:"selectorPrefix"})," (default ",(0,d.jsx)("code",{children:".pure-u-"}),"), ",(0,d.jsx)("code",{children:"decimals"})," (default ",(0,d.jsx)("code",{children:"4"}),"), ",(0,d.jsx)("code",{children:"includeReducedFractions"}),", ",(0,d.jsx)("code",{children:"includeWholeNumbers"})," and ",(0,d.jsx)("code",{children:"indent"}),"."]}),(0,d.jsx)("aside",{children:(0,d.jsxs)("p",{children:[(0,d.jsx)("code",{children:"generateGrids()"})," replaces the ",(0,d.jsx)("a",{href:"https://www.npmjs.org/package/rework-pure-grids",children:"Pure Grids Rework Plugin"}),". It takes the same arguments as ",(0,d.jsx)("code",{children:"pureGrids.units()"})," and produces the same CSS, so you can drop Rework: ",(0,d.jsx)("code",{children:"rework('').use(pureGrids.units(units, options)).toString()"})," becomes ",(0,d.jsx)("code",{children:"generateGrids(units, options)"}),"."]})}),(0,d.jsx)(o.A,{heading:"Mutating Selectors"}),(0,d.jsxs)("p",{children:["All selectors defined in Pure's source code begin with the ",(0,d.jsx)("code",{children:".pure-"})," prefix. However, you may want to change this, or scope Pure to part of your page."]}),(0,d.jsxs)("p",{children:["To scope Pure's base styles, use the prebuilt ",(0,d.jsx)("code",{children:"base-context.css"}),". It applies them only inside an element with the ",(0,d.jsx)("code",{children:"pure"})," class."]}),(0,d.jsxs)("p",{children:["For anything else, a few lines of ",(0,d.jsx)("a",{href:"https://postcss.org/",children:"PostCSS"})," will rewrite Pure's selectors:"]}),(0,d.jsx)(t.A,{children:"$ npm install postcss --save-dev"}),(0,d.jsx)(t.A,{children:c.dx`
                    import postcss from 'postcss';

                    const mutateSelectors = {
                        postcssPlugin: 'mutate-selectors',
                        Once(root) {
                            root.walkRules((rule) => {
                                // Skip keyframe steps such as \`from\` and \`50%\`.
                                if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) {
                                    return;
                                }

                                rule.selectors = rule.selectors.map((selector) =>
                                    // Rename Pure's classes, then scope them under \`.foo\`.
                                    '.foo ' + selector.replace(/\\.pure-/g, '.bar-'),
                                );
                            });
                        },
                    };

                    const { css } = await postcss([mutateSelectors]).process(inputCSS, { from: undefined });

                    // This will log-out the resulting CSS.
                    console.log(css);
                `})]})]})};r.d(s,["default",0,u])}}]);