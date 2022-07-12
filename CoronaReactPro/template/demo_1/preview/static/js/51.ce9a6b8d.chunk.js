(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[51],{1123:function(e,a,r){"use strict";r.r(a),r.d(a,"Progress",(function(){return o}));var t=r(12),n=r(13),c=r(15),l=r(14),s=r(16),i=r(0),m=r.n(i),d=r(186),o=function(e){function a(){return Object(t.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Progress"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Progress")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Colored Progressbar"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"variant={color}")," for theme colors"),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10}),m.a.createElement(d.a,{variant:"primary",now:25}),m.a.createElement(d.a,{variant:"info",now:50}),m.a.createElement(d.a,{variant:"warning",now:75}),m.a.createElement(d.a,{variant:"danger",now:100}))))),m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Progressbar Striped"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"striped"),"."),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10,striped:!0}),m.a.createElement(d.a,{variant:"primary",now:25,striped:!0}),m.a.createElement(d.a,{variant:"info",now:50,striped:!0}),m.a.createElement(d.a,{variant:"warning",now:75,striped:!0}),m.a.createElement(d.a,{variant:"danger",now:100,striped:!0}))))),m.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Striped Animated"),m.a.createElement("p",{className:"page-description"},"Add property ",m.a.createElement("code",null,"animated"),"."),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"success",now:10,animated:!0}),m.a.createElement(d.a,{variant:"primary",now:25,animated:!0}),m.a.createElement(d.a,{variant:"info",now:50,animated:!0}),m.a.createElement(d.a,{variant:"warning",now:75,animated:!0}),m.a.createElement(d.a,{variant:"danger",now:100,animated:!0}))))),m.a.createElement("div",{className:"col-md-6 grid-margin grid-margin-md-0 stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"With Label"),m.a.createElement("p",{className:"page-description"},"Progress bar with labels"),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"danger",className:"progress-lg",now:60,label:"600%"}),m.a.createElement(d.a,{variant:"success",className:"progress-lg",now:90,label:"90%"}),m.a.createElement(d.a,{variant:"warning",className:"progress-lg",now:60,label:"60% complete"}),m.a.createElement(d.a,{variant:"info",className:"progress-lg",now:88,label:"88% complete"}))))),m.a.createElement("div",{className:"col-md-6 stretch-card"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Progressbar Sizes"),m.a.createElement("p",{className:"page-description"},"Use className ",m.a.createElement("code",null,".progress-sm"),", ",m.a.createElement("code",null,".progress-lg"),", ",m.a.createElement("code",null,".progress-xl")),m.a.createElement("div",{className:"template-demo"},m.a.createElement(d.a,{variant:"info",className:"progress-sm",now:25}),m.a.createElement(d.a,{variant:"info",className:"progress",now:50}),m.a.createElement(d.a,{variant:"info",className:"progress-lg",now:75}),m.a.createElement(d.a,{variant:"info",className:"progress-xl",now:100})))))))}}]),a}(i.Component);a.default=o},145:function(e,a,r){"use strict";r.d(a,"b",(function(){return c})),r.d(a,"a",(function(){return l}));var t=r(0),n=r.n(t);function c(e,a){var r=0;return n.a.Children.map(e,(function(e){return n.a.isValidElement(e)?a(e,r++):e}))}function l(e,a){var r=0;n.a.Children.forEach(e,(function(e){n.a.isValidElement(e)&&a(e,r++)}))}},186:function(e,a,r){"use strict";var t=r(3),n=r(4),c=r(8),l=r.n(c),s=r(0),i=r.n(s),m=r(11),d=r(145),o=1e3;function E(e,a,r){var t=(e-a)/(r-a)*100;return Math.round(t*o)/o}function p(e,a){var r,c=e.min,s=e.now,m=e.max,d=e.label,o=e.srOnly,p=e.striped,v=e.animated,b=e.className,u=e.style,g=e.variant,N=e.bsPrefix,f=Object(n.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return i.a.createElement("div",Object(t.a)({ref:a},f,{role:"progressbar",className:l()(b,N+"-bar",(r={},r["bg-"+g]=g,r[N+"-bar-animated"]=v,r[N+"-bar-striped"]=v||p,r)),style:Object(t.a)({width:E(s,c,m)+"%"},u),"aria-valuenow":s,"aria-valuemin":c,"aria-valuemax":m}),o?i.a.createElement("span",{className:"sr-only"},d):d)}var v=i.a.forwardRef((function(e,a){var r=e.isChild,c=Object(n.a)(e,["isChild"]);if(c.bsPrefix=Object(m.b)(c.bsPrefix,"progress"),r)return p(c,a);var o=c.min,E=c.now,v=c.max,b=c.label,u=c.srOnly,g=c.striped,N=c.animated,f=c.bsPrefix,w=c.variant,h=c.className,y=c.children,O=Object(n.a)(c,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return i.a.createElement("div",Object(t.a)({ref:a},O,{className:l()(h,f)}),y?Object(d.b)(y,(function(e){return Object(s.cloneElement)(e,{isChild:!0})})):p({min:o,now:E,max:v,label:b,srOnly:u,striped:g,animated:N,bsPrefix:f,variant:w},a))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=v}}]);
//# sourceMappingURL=51.ce9a6b8d.chunk.js.map