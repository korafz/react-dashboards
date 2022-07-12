(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[33],{698:function(e,t,a){"use strict";a.r(t),a.d(t,"FormWizards",(function(){return b})),a.d(t,"Step1",(function(){return d})),a.d(t,"Step2",(function(){return E})),a.d(t,"Step3",(function(){return f})),a.d(t,"Step4",(function(){return N}));var n=a(12),l=a(13),s=a(15),i=a(14),c=a(0),r=a.n(c),m=a(78);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,l=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(r){l=!0,s=r}finally{try{n||null==c.return||c.return()}finally{if(l)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e,t){for(var a=[],n=0;n<t;n++)n<e?a.push("done"):n===e?a.push("doing"):a.push("todo");return a},v=function(e,t){return e>0&&e<t-1?{showPreviousBtn:!0,showNextBtn:!0}:0===e?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1}};function h(e){var t=o(Object(c.useState)(u(0,e.steps.length)),2),a=t[0],n=t[1],l=o(Object(c.useState)(0),2),s=l[0],i=l[1],m=o(Object(c.useState)(v(0,e.steps.length)),2),h=m[0],p=m[1];function b(t){n(u(t,e.steps.length)),i(t<e.steps.length?t:s),p(v(t,e.steps.length))}var d=function(){return b(s+1)},E=function(t){t.currentTarget.value===e.steps.length-1&&s===e.steps.length-1?b(e.steps.length):b(t.currentTarget.value)};return r.a.createElement("div",{className:"container",onKeyDown:function(t){return 13===t.which?d(e.steps.length):{}}},r.a.createElement("ol",{className:"progtrckr"},e.steps.map((function(t,n){return r.a.createElement("li",{className:"progtrckr-"+a[n],onClick:E,key:n,value:n},r.a.createElement("em",null,n+1),r.a.createElement("span",null,e.steps[n].name))}))),e.steps[s].component,r.a.createElement("div",{style:e.showNavigation?{}:{display:"none"}},r.a.createElement("button",{style:h.showPreviousBtn?{}:{display:"none"},onClick:function(){return b(s>0?s-1:s)}},"Previous"),r.a.createElement("button",{style:h.showNextBtn?{}:{display:"none"},onClick:d},"Next")))}h.defaultProps={showNavigation:!0};var p=h,b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container d-flex p-md-0"},r.a.createElement(m.a,null),r.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},r.a.createElement("div",{className:"az-content-breadcrumb"},r.a.createElement("span",null,"Components"),r.a.createElement("span",null,"Forms"),r.a.createElement("span",null,"Form Wizards")),r.a.createElement("h2",{className:"az-content-title"},"Form Wizards"),r.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Content Wizard"),r.a.createElement("p",{className:"mg-b-20"},"Below is an example of a basic horizontal form wizard."),r.a.createElement("div",{className:"form-wizard"},r.a.createElement(p,{showNavigation:!0,className:"my-class",steps:k})),r.a.createElement("hr",{className:"mg-y-30 mg-lg-y-50 bd-transparent"}),r.a.createElement("div",{className:"az-content-label mg-b-5"},"Vertical Orientation Wizard"),r.a.createElement("p",{className:"mg-b-20"},"A basic content wizard with vertical orientation."),r.a.createElement("div",{className:"form-wizard form-wizard-vertical"},r.a.createElement(p,{showNavigation:!0,className:"my-class",steps:k})),r.a.createElement("div",{className:"ht-40"}))))}}]),a}(c.Component),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h3",{className:"mb-4"},"Account"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm password"})))}}]),a}(c.Component),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h3",{className:"mb-4"},"Profile"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter first name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Profession"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Profession"})))}}]),a}(c.Component),f=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h3",{className:"mb-4"},"Comments"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Comments"),r.a.createElement("textarea",{className:"form-control",rows:"3"})))}}]),a}(c.Component),N=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"content"},r.a.createElement("h3",{className:"mb-4"},"Finish"),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{className:"checkbox",type:"checkbox"}),r.a.createElement("i",{className:"input-helper"}),"I agree with the Terms and Conditions.")))}}]),a}(c.Component),k=[{name:". Account",component:r.a.createElement(d,null)},{name:". Profile",component:r.a.createElement(E,null)},{name:". Comments",component:r.a.createElement(f,null)},{name:". Finish",component:r.a.createElement(N,null)}];t.default=b},78:function(e,t,a){"use strict";var n=a(12),l=a(13),s=a(15),i=a(14),c=a(0),r=a.n(c),m=a(2),o=a(5),u=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"az-content-left az-content-left-components"},r.a.createElement("div",{className:"component-item"},r.a.createElement("label",null,"UI Elements"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),r.a.createElement(m.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),r.a.createElement(m.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),r.a.createElement(m.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),r.a.createElement(m.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),r.a.createElement(m.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),r.a.createElement(m.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),r.a.createElement(m.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),r.a.createElement(m.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),r.a.createElement(m.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),r.a.createElement(m.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),r.a.createElement(m.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),r.a.createElement(m.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),r.a.createElement(m.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),r.a.createElement(m.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),r.a.createElement(m.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),r.a.createElement(m.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),r.a.createElement(m.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),r.a.createElement(m.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),r.a.createElement(m.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),r.a.createElement(m.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),r.a.createElement(m.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),r.a.createElement("label",null,"Forms"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),r.a.createElement(m.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),r.a.createElement(m.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),r.a.createElement(m.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),r.a.createElement(m.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),r.a.createElement("label",null,"Charts"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),r.a.createElement("label",null,"Tables"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),r.a.createElement(m.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),a}(c.Component);t.a=Object(o.g)(u)}}]);
//# sourceMappingURL=33.d59caaf8.chunk.js.map