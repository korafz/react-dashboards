(window["webpackJsonppurple-react-pro"]=window["webpackJsonppurple-react-pro"]||[]).push([[88],{1189:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),l=a(15),c=a(14),s=a(16),o=a(0),m=a.n(o);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e,t){for(var a=[],n=0;n<t;n++)n<e?a.push("done"):n===e?a.push("doing"):a.push("todo");return a},p=function(e,t){return e>0&&e<t-1?{showPreviousBtn:!0,showNextBtn:!0}:0===e?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1}};function d(e){var t=i(Object(o.useState)(u(0,e.steps.length)),2),a=t[0],n=t[1],r=i(Object(o.useState)(0),2),l=r[0],c=r[1],s=i(Object(o.useState)(p(0,e.steps.length)),2),d=s[0],f=s[1];function h(t){n(u(t,e.steps.length)),c(t<e.steps.length?t:l),f(p(t,e.steps.length))}var E=function(){return h(l+1)},b=function(t){t.currentTarget.value===e.steps.length-1&&l===e.steps.length-1?h(e.steps.length):h(t.currentTarget.value)};return m.a.createElement("div",{className:"container",onKeyDown:function(t){return 13===t.which?E(e.steps.length):{}}},m.a.createElement("ol",{className:"progtrckr"},e.steps.map((function(t,n){return m.a.createElement("li",{className:"progtrckr-"+a[n],onClick:b,key:n,value:n},m.a.createElement("em",null,n+1),m.a.createElement("span",null,e.steps[n].name))}))),e.steps[l].component,m.a.createElement("div",{style:e.showNavigation?{}:{display:"none"}},m.a.createElement("button",{style:d.showPreviousBtn?{}:{display:"none"},onClick:function(){return h(l>0?l-1:l)}},"Previous"),m.a.createElement("button",{style:d.showNextBtn?{}:{display:"none"},onClick:E},"Next")))}d.defaultProps={showNavigation:!0};var f=d;a.d(t,"Wizard",(function(){return h})),a.d(t,"Step1",(function(){return E})),a.d(t,"Step2",(function(){return b})),a.d(t,"Step3",(function(){return v})),a.d(t,"Step4",(function(){return N}));var h=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Form wizard"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Wizard")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"form-wizard"},m.a.createElement(f,{showNavigation:!0,className:"my-class",steps:y}))))),m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"form-wizard form-wizard-vertical"},m.a.createElement(f,{showNavigation:!0,className:"my-class",steps:y})))))))}}]),t}(o.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("section",{className:"content"},m.a.createElement("h3",{className:"mb-4"},"Account"),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Email address"),m.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email"}),m.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Password"),m.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Confirm Password"),m.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm password"})))}}]),t}(o.Component),b=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("section",{className:"content"},m.a.createElement("h3",{className:"mb-4"},"Profile"),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"First name"),m.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter first name"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Last name"),m.a.createElement("input",{type:"password",className:"form-control",placeholder:"Last name"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Profession"),m.a.createElement("input",{type:"password",className:"form-control",placeholder:"Profession"})))}}]),t}(o.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("section",{className:"content"},m.a.createElement("h3",{className:"mb-4"},"Comments"),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Comments"),m.a.createElement("textarea",{className:"form-control",rows:"3"})))}}]),t}(o.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("section",{className:"content"},m.a.createElement("h3",{className:"mb-4"},"Finish"),m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{className:"form-check-label"},m.a.createElement("input",{className:"checkbox",type:"checkbox"}),m.a.createElement("i",{className:"input-helper"}),"I agree with the Terms and Conditions.")))}}]),t}(o.Component),y=[{name:". Account",component:m.a.createElement(E,null)},{name:". Profile",component:m.a.createElement(b,null)},{name:". Comments",component:m.a.createElement(v,null)},{name:". Finish",component:m.a.createElement(N,null)}];t.default=h}}]);
//# sourceMappingURL=88.7c15da31.chunk.js.map