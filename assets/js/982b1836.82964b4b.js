"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[928],{4088:(e,s,o)=>{o.r(s),o.d(s,{default:()=>h});var t=o(6289),a=(o(6540),o(3698)),l=o(1805),r=o(1471),n=o(5668),i=o(5225),d=o(4848);const c="Extend",u="Build on top of Pure.";const h=function(){return(0,d.jsxs)(a.A,{description:u,title:c,children:[(0,d.jsx)(l.A,{description:u,title:c}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("p",{children:"One of our goals when developing Pure was to make it extremely extensible. By including Pure and writing some CSS on top of it, you can ensure that your site or app works across browsers, while looking truly unique. Best of all, your CSS file size will remain tiny, which is a great thing for mobile users and others with slow connections."}),(0,d.jsx)("aside",{children:(0,d.jsxs)("p",{children:["Want a quick start? Take a look at some ",(0,d.jsx)(t.A,{href:"/layouts/",children:"layouts"})," that we've built on top of Pure."]})}),(0,d.jsx)(n.A,{heading:"Style Guide"}),(0,d.jsx)("h3",{children:"Based on SMACSS"}),(0,d.jsxs)("p",{children:["Pure is broken up into a set of responsive modules. From the beginning, we adopted ",(0,d.jsx)("a",{href:"http://smacss.com/",children:"SMACSS"})," as a convention for writing our CSS. For those who are new to SMACSS, you should give it a quick read, especially the section on ",(0,d.jsx)("a",{href:"http://smacss.com/book/type-module",children:"module rules"}),"."]}),(0,d.jsx)("h3",{children:"Class Name Conventions"}),(0,d.jsxs)("p",{children:["One of the conventions in Pure is for every module to have a standard class name for common rules across a module, and then have additional class names for specific presentational rules for a specific sub-module. All classes start with a ",(0,d.jsx)("code",{children:"pure-"})," prefix to prevent collisions. In addition, we try not to have presentational class names. Instead of calling something ",(0,d.jsx)("code",{children:"pure-form-horizontal"}),", we prefer to call it ",(0,d.jsx)("code",{children:"pure-form-aligned"}),". This prevents a tight coupling between class names and styles, which is good for maintainability."]}),(0,d.jsxs)("p",{children:["For example, let's consider the HTML and CSS for a ",(0,d.jsx)(t.A,{href:"/forms/",children:"Stacked Form"}),":"]}),(0,d.jsx)("h4",{children:"Stacked Form: HTML"}),(0,d.jsxs)("p",{children:["A stacked form is created by adding two class names, ",(0,d.jsx)("code",{children:"pure-form"})," and ",(0,d.jsx)("code",{children:"pure-form-stacked"}),"."]}),(0,d.jsx)(r.A,{children:'<form class="pure-form pure-form-stacked"></form>'}),(0,d.jsx)("h4",{children:"Stacked Form: CSS"}),(0,d.jsx)("p",{children:"The two class names serve different purposes. One is used as a general selector to group common rules for all forms, while the other defines specific rules for a stacked form."}),(0,d.jsx)(r.A,{children:i.dx`
                        /*
                            Standard rules that all Pure Forms have. This includes rules for
                            styling .pure-form &lt;inputs&gt;, &lt;fieldsets&gt;, and &lt;legends&gt;, as well as layout
                            rules such as vertical alignments.
                        */
                        .pure-form { ... }

                        /*
                            Specific rules that apply to stacked forms. This includes rules
                            such as taking child &lt;input&gt; elements and making them display: block
                            for the stacked effect.
                        */
                        .pure-form-stacked  { ... }
                    `}),(0,d.jsx)(n.A,{heading:"Extending Pure"}),(0,d.jsx)("p",{children:"When you're extending Pure, we recommend that you follow this convention. For instance, if you wanted to create a new type of form, your HTML and CSS should look something like this:"}),(0,d.jsx)(r.A,{children:'<form class="form-custom pure-form"></form>'}),(0,d.jsx)(r.A,{className:"test",children:i.dx`
                        /* add your custom styles in this selector */
                        .form-custom { ... }
                    `}),(0,d.jsxs)("p",{children:["One common task that you may wish to do is to style buttons so they look different. The ",(0,d.jsx)("a",{href:"/buttons/",children:"Pure Button Documentation"})," has some examples on how you can create buttons with custom sizes and styles by adopting this modular architecture."]}),(0,d.jsx)(n.A,{heading:"Pure + Bootstrap + JavaScript"}),(0,d.jsx)("p",{children:"Pure plays well with other libraries, including Bootstrap. As a developer, you can pull in Pure as a foundational CSS framework, and then include specific Bootstrap modules that your application may require. There are several benefits to doing this:"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsxs)("p",{children:["Your website or webapp's CSS will be a lot smaller \u2014 up to ",(0,d.jsx)("em",{children:"5X smaller"})," in some cases!"]})}),(0,d.jsx)("li",{children:(0,d.jsx)("p",{children:"You get Pure's minimalist look that's easy to build on top of. No need to overwrite styles!"})})]}),(0,d.jsxs)("p",{children:["For example, here's a Bootstrap Modal. It's created by including the Pure CSS Rollup, and just adding Bootstrap's ",(0,d.jsx)("a",{href:"https://getbootstrap.com/docs/5.0/components/modal/",children:"Modal component"})," CSS and JS plugin."]}),(0,d.jsx)(r.A,{children:i.dx`
                    <!-- Button to trigger modal -->
                    <button type="button" class="pure-button-primary pure-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch Pure + Bootstrap Modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                        This modal is launched by including <em>just</em> the <code>modal.css</code> and <code>modal.js</code> file from Bootstrap, and including Pure to drive all low-level styles. The result is a fully-functional Modal using just a fraction of the CSS.
                                    </p>
                                    <form class="pure-form pure-form-stacked">
                                        <legend>A Stacked Form</legend>
                                        <label for="email">Email</label>
                                        <input id="email" type="text" placeholder="Email">
                                        <label for="password">Password</label>
                                        <input id="password" type="password" placeholder="Password">
                                        <label for="state">State</label>
                                        <select id="state">
                                            <option>AL</option>
                                            <option>CA</option>
                                            <option>IL</option>
                                        </select>
                                        <label class="pure-checkbox">
                                        <input type="checkbox"> Remember me
                                        </label>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="pure-button" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="pure-button pure-button-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                    `})]})]})}}}]);