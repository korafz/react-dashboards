(window["webpackJsonpbreeze-react-pro"]=window["webpackJsonpbreeze-react-pro"]||[]).push([[73],{1179:function(e,a,t){"use strict";t.r(a);var c=t(11),r=t(12),l=t(14),n=t(13),s=t(15),m=t(0),d=t.n(m),i=t(3),o=t(4),E=t(7),N=t.n(E),u=t(10),p=t(6),v=t(40),g=d.a.forwardRef((function(e,a){var t=e.active,c=e.disabled,r=e.className,l=e.style,n=e.activeLabel,s=e.children,m=Object(o.a)(e,["active","disabled","className","style","activeLabel","children"]),E=t||c?"span":v.a;return d.a.createElement("li",{ref:a,style:l,className:N()(r,"page-item",{active:t,disabled:c})},d.a.createElement(E,Object(i.a)({className:"page-link",disabled:c},m),s,t&&n&&d.a.createElement("span",{className:"sr-only"},n)))}));g.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},g.displayName="PageItem";var b=g;function f(e,a,t){var c,r;return void 0===t&&(t=e),r=c=function(e){function c(){return e.apply(this,arguments)||this}return Object(p.a)(c,e),c.prototype.render=function(){var e=this.props,c=e.children,r=Object(o.a)(e,["children"]);return delete r.active,d.a.createElement(g,r,d.a.createElement("span",{"aria-hidden":"true"},c||a),d.a.createElement("span",{className:"sr-only"},t))},c}(d.a.Component),c.displayName=e,r}var h=f("First","\xab"),P=f("Prev","\u2039","Previous"),y=f("Ellipsis","\u2026","More"),x=f("Next","\u203a"),j=f("Last","\xbb"),O=d.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,r=e.children,l=e.size,n=Object(o.a)(e,["bsPrefix","className","children","size"]),s=Object(u.b)(t,"pagination");return d.a.createElement("ul",Object(i.a)({ref:a},n,{className:N()(c,s,l&&s+"-"+l)}),r)}));O.First=h,O.Prev=P,O.Ellipsis=y,O.Item=b,O.Next=x,O.Last=j;var w=O;t.d(a,"Paginations",(function(){return L}));var L=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){for(var e=[],a=1;a<=5;a++)e.push(d.a.createElement(w.Item,{key:a,active:2===a},a));return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Pagination"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Pagination")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Basic Paginations"),d.a.createElement("p",{className:"card-description"},"Default bordered pagination"),d.a.createElement(w,null,d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Flat Pagination"),d.a.createElement("p",{className:"card-description"},"Add class ",d.a.createElement("code",null,".flat")),d.a.createElement(w,{className:"flat pagination-success"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Separated  Pagination"),d.a.createElement("p",{className:"card-description"},"Add class ",d.a.createElement("code",null,".separated")),d.a.createElement(w,{className:"separated pagination-danger"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Bordered Rounded"),d.a.createElement("p",{className:"card-description"},"Add class ",d.a.createElement("code",null,".rounded")),d.a.createElement(w,{className:"rounded pagination-primary"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Flat Rounded Pagination"),d.a.createElement("p",{className:"card-description"},"Add class ",d.a.createElement("code",null,".rounded-flat")),d.a.createElement(w,{className:"rounded-flat pagination-success"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Separated Rounded"),d.a.createElement("p",{className:"card-description"},"Add class ",d.a.createElement("code",null,".rounded-separated")),d.a.createElement(w,{className:"rounded-separated pagination-danger"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 grid-margin grid-margin-md-0 stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Left Position"),d.a.createElement("p",{className:"card-description"},"Left Pagination"),d.a.createElement(w,{className:"pagination-primary d-flex justify-content-start"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Center Position"),d.a.createElement("p",{className:"card-description"},"Centered Pagination"),d.a.createElement(w,{className:"pagination-success d-flex justify-content-center"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null))))),d.a.createElement("div",{className:"col-md-4 col-sm-6 stretch-card"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Right Position"),d.a.createElement("p",{className:"card-description"},"Right Pagination"),d.a.createElement(w,{className:"pagination-danger d-flex justify-content-end"},d.a.createElement(w.Prev,null),e,d.a.createElement(w.Next,null)))))))}}]),a}(m.Component);a.default=L}}]);
//# sourceMappingURL=73.6bc9f2e5.chunk.js.map