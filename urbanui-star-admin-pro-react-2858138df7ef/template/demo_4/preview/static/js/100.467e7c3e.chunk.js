(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[100],{1172:function(e,a,t){"use strict";t.r(a),t.d(a,"SortableTable",(function(){return b}));var r=t(13),n=t(14),l=t(16),c=t(15),i=t(0),m=t.n(i),d=t(1143),s=[{id:1,firstName:"Herman Beck",lastName:"John",product:"Photoshop",amount:"$456.00",deadline:"12 May 2017"},{id:2,firstName:"Herman Beck",lastName:"Conway",product:"Flash",amount:"$965.00",deadline:"13 May 2017"},{id:3,firstName:"John Richards",lastName:"Alex",product:"Premeire",amount:"$255.00",deadline:"14 May 2017"},{id:4,firstName:"John Richards",lastName:"Jason",product:"After effects",amount:"$975.00",deadline:"15 May 2017"},{id:5,firstName:"Messsy max",lastName:"Back",product:"Ilustrator",amount:"$298.00",deadline:"16 May 2017"}];function o(e){var a=e.setSortBy,t=e.sortBy,r=e.direction,n=e.toggleDirection,l=[{key:"id",title:"#"},{key:"firstName",title:"First Name"},{key:"lastName",title:"Last Name"},{key:"product",title:"Product"},{key:"amount",title:"Amount"},{key:"deadline",title:"Deadline"}].map((function(e){var l=e.key,c=e.title,i=l===t;return m.a.createElement(u,{key:l,active:i,onClick:function(){i&&n(),a(l)}},c," ",m.a.createElement("i",{className:i?"asc"===r?"mdi mdi-sort-ascending":"mdi mdi-sort-descending":"mdi mdi-sort"}))}));return m.a.createElement("thead",null,m.a.createElement("tr",null,l))}function u(e){var a=e.children,t=(e.active,e.onClick);return m.a.createElement("th",{onClick:t,style:{fontWeight:600,cursor:"pointer"}},a)}function E(e){var a=e.data;return m.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.firstName,r=e.lastName,n=e.product,l=e.amount,c=e.deadline;return m.a.createElement("tr",{key:a},m.a.createElement("td",null,a),m.a.createElement("td",null,t),m.a.createElement("td",null,r),m.a.createElement("td",null,n),m.a.createElement("td",null,l),m.a.createElement("td",null,c))})))}var b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Sortable Table"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Sortable Table")))),m.a.createElement("div",{className:"row grid-margin"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Basic Sortable Table"),m.a.createElement(d.a,{data:s,defaultSortBy:"id",render:function(e){var a=e.data,t=e.setSortBy,r=e.sortBy,n=e.direction,l=e.toggleDirection;return m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table"},m.a.createElement(o,{setSortBy:t,sortBy:r,direction:n,toggleDirection:l}),m.a.createElement(E,{data:a})))}}))))),m.a.createElement("div",{className:"row grid-margin"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Basic Sortable Table"),m.a.createElement(d.a,{data:s,defaultSortBy:"id",render:function(e){var a=e.data,t=e.setSortBy,r=e.sortBy,n=e.direction,l=e.toggleDirection;return m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table table-striped"},m.a.createElement(o,{setSortBy:t,sortBy:r,direction:n,toggleDirection:l}),m.a.createElement(E,{data:a})))}}))))))}}]),t}(i.Component);a.default=b}}]);
//# sourceMappingURL=100.467e7c3e.chunk.js.map