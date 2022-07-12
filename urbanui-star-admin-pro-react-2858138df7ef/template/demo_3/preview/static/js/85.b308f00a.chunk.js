(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[85],{1221:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),l=a(14),c=a(13),s=a(0),o=a.n(s);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e,t){for(var a=[],n=0;n<t;n++)n<e?a.push("done"):n===e?a.push("doing"):a.push("todo");return a},u=function(e,t){return e>0&&e<t-1?{showPreviousBtn:!0,showNextBtn:!0}:0===e?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1}};function p(e){var t=m(Object(s.useState)(i(0,e.steps.length)),2),a=t[0],n=t[1],r=m(Object(s.useState)(0),2),l=r[0],c=r[1],p=m(Object(s.useState)(u(0,e.steps.length)),2),d=p[0],f=p[1];function E(t){n(i(t,e.steps.length)),c(t<e.steps.length?t:l),f(u(t,e.steps.length))}var h=function(){return E(l+1)},b=function(t){t.currentTarget.value===e.steps.length-1&&l===e.steps.length-1?E(e.steps.length):E(t.currentTarget.value)};return o.a.createElement("div",{className:"container",onKeyDown:function(t){return 13===t.which?h(e.steps.length):{}}},o.a.createElement("ol",{className:"progtrckr"},e.steps.map((function(t,n){return o.a.createElement("li",{className:"progtrckr-"+a[n],onClick:b,key:n,value:n},o.a.createElement("em",null,n+1),o.a.createElement("span",null,e.steps[n].name))}))),e.steps[l].component,o.a.createElement("div",{style:e.showNavigation?{}:{display:"none"}},o.a.createElement("button",{style:d.showPreviousBtn?{}:{display:"none"},onClick:function(){return E(l>0?l-1:l)}},"Previous"),o.a.createElement("button",{style:d.showNextBtn?{}:{display:"none"},onClick:h},"Next")))}p.defaultProps={showNavigation:!0};var d=p;a.d(t,"Wizard",(function(){return f})),a.d(t,"Step1",(function(){return E})),a.d(t,"Step2",(function(){return h})),a.d(t,"Step3",(function(){return b})),a.d(t,"Step4",(function(){return v}));var f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Form wizard"),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Wizard")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"form-wizard"},o.a.createElement(d,{showNavigation:!0,className:"my-class",steps:N}))))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"form-wizard form-wizard-vertical"},o.a.createElement(d,{showNavigation:!0,className:"my-class",steps:N})))))))}}]),a}(s.Component),E=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"content"},o.a.createElement("h3",{className:"mb-4"},"Account"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email address"),o.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Confirm Password"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm password"})))}}]),a}(s.Component),h=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"content"},o.a.createElement("h3",{className:"mb-4"},"Profile"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"First name"),o.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter first name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Last name"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Last name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Profession"),o.a.createElement("input",{type:"password",className:"form-control",placeholder:"Profession"})))}}]),a}(s.Component),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"content"},o.a.createElement("h3",{className:"mb-4"},"Comments"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Comments"),o.a.createElement("textarea",{className:"form-control",rows:"3"})))}}]),a}(s.Component),v=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"content"},o.a.createElement("h3",{className:"mb-4"},"Finish"),o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{className:"checkbox",type:"checkbox"}),o.a.createElement("i",{className:"input-helper"}),"I agree with the Terms and Conditions.")))}}]),a}(s.Component),N=[{name:". Account",component:o.a.createElement(E,null)},{name:". Profile",component:o.a.createElement(h,null)},{name:". Comments",component:o.a.createElement(b,null)},{name:". Finish",component:o.a.createElement(v,null)}];t.default=f}}]);
//# sourceMappingURL=85.b308f00a.chunk.js.map