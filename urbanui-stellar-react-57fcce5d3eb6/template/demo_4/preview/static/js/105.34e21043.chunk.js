(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[105],{1187:function(e,a,t){"use strict";t.r(a),t.d(a,"SortableTable",(function(){return N}));var r=t(17),l=t(18),n=t(20),c=t(19),i=t(21),m=t(0),o=t.n(m),s=t(1156),d=[{id:1,firstName:"Herman Beck",lastName:"John",product:"Photoshop",amount:"$456.00",deadline:"12 May 2017"},{id:2,firstName:"Herman Beck",lastName:"Conway",product:"Flash",amount:"$965.00",deadline:"13 May 2017"},{id:3,firstName:"John Richards",lastName:"Alex",product:"Premeire",amount:"$255.00",deadline:"14 May 2017"},{id:4,firstName:"John Richards",lastName:"Jason",product:"After effects",amount:"$975.00",deadline:"15 May 2017"},{id:5,firstName:"Messsy max",lastName:"Back",product:"Ilustrator",amount:"$298.00",deadline:"16 May 2017"}];function u(e){var a=e.setSortBy,t=e.sortBy,r=(e.direction,e.toggleDirection),l=[{key:"id",title:"#"},{key:"firstName",title:"First Name"},{key:"lastName",title:"Last Name"},{key:"product",title:"Product"},{key:"amount",title:"Amount"},{key:"deadline",title:"Deadline"}].map((function(e){var l=e.key,n=e.title,c=l===t;return o.a.createElement(E,{key:l,active:c,onClick:function(){c&&r(),a(l)}},n," ",o.a.createElement("i",{className:"icon-arrow-down"}))}));return o.a.createElement("thead",null,o.a.createElement("tr",null,l))}function E(e){var a=e.children,t=(e.active,e.onClick);return o.a.createElement("th",{onClick:t,style:{fontWeight:600,cursor:"pointer"}},a)}function b(e){var a=e.data;return o.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.firstName,r=e.lastName,l=e.product,n=e.amount,c=e.deadline;return o.a.createElement("tr",{key:a},o.a.createElement("td",null,a),o.a.createElement("td",null,t),o.a.createElement("td",null,r),o.a.createElement("td",null,l),o.a.createElement("td",null,n),o.a.createElement("td",null,c))})))}var N=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Sortable Table"),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Sortable Table")))),o.a.createElement("div",{className:"row grid-margin"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Basic Sortable Table"),o.a.createElement(s.a,{data:d,defaultSortBy:"id",render:function(e){var a=e.data,t=e.setSortBy,r=e.sortBy,l=e.direction,n=e.toggleDirection;return o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table"},o.a.createElement(u,{setSortBy:t,sortBy:r,direction:l,toggleDirection:n}),o.a.createElement(b,{data:a})))}}))))),o.a.createElement("div",{className:"row grid-margin"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Basic Sortable Table"),o.a.createElement(s.a,{data:d,defaultSortBy:"id",render:function(e){var a=e.data,t=e.setSortBy,r=e.sortBy,l=e.direction,n=e.toggleDirection;return o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement(u,{setSortBy:t,sortBy:r,direction:l,toggleDirection:n}),o.a.createElement(b,{data:a})))}}))))))}}]),a}(m.Component);a.default=N}}]);
//# sourceMappingURL=105.34e21043.chunk.js.map