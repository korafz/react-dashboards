(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[82],{1218:function(e,a,t){"use strict";t.r(a),t.d(a,"Orders",(function(){return T}));var r=t(13),s=t(14),c=t(16),i=t(15),n=t(0),o=t.n(n),d=t(444),l=t.n(d),m=t(453),u=t.n(m),p=t(462),h=t.n(p),b=p.Search.SearchBar,P=[{id:"WD-61",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:"Open",action:""},{id:"WD-62",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:"Pending",action:""},{id:"WD-63",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:"Closed",action:""},{id:"WD-64",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:"Open",action:""},{id:"WD-65",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:"Closed",action:""},{id:"WD-66",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:"On hold",action:""},{id:"WD-67",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"WD-68",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Open",action:""},{id:"WD-69",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"WD-70",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"Closed",action:""},{id:"WD-71",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:"Pending",action:""},{id:"WD-72",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:"Open",action:""},{id:"WD-73",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:"Open",action:""},{id:"WD-74",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:"Closed",action:""},{id:"WD-75",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:"Pending",action:""},{id:"WD-76",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:"On hold",action:""},{id:"WD-77",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Open",action:""},{id:"WD-78",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Closed",action:""},{id:"WD-79",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:"Pending",action:""},{id:"WD-80",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"On hold",action:""}],$=[{dataField:"id",text:"Order #",sort:!0},{dataField:"customer",text:"Customer",sort:!0},{dataField:"shipTo",text:"Ship to",sort:!0},{dataField:"basePrice",text:"Base Price",sort:!0},{dataField:"purchasedPrice",text:"Purchased Price",sort:!0},{dataField:"status",text:"Status",sort:!0,formatter:function(e,a){return"On hold"===e?o.a.createElement("label",{className:"badge badge-info"},"On hold"):"Pending"===e?o.a.createElement("label",{className:"badge badge-danger"},"Pending"):"Closed"===e?o.a.createElement("label",{className:"badge badge-success"},"Closed"):"Open"===e?o.a.createElement("label",{className:"badge badge-warning"},"Open"):void 0}},{dataField:"action",text:"Action",sort:!1,formatter:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-dark"},o.a.createElement("i",{className:"mdi mdi-eye-outline text-primary"}),"View"),o.a.createElement("button",{className:"btn btn-dark"},o.a.createElement("i",{className:"mdi mdi-close text-danger"}),"Remove"))}}],E=[{dataField:"id",order:"desc"}],T=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Orders"),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Ecommerce")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Orders")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Orders"),o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"alert alert-warning",role:"alert"},o.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(h.a,{keyField:"id",bootstrap4:!0,data:P,columns:$,search:!0},(function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("p",{className:"mb-2 mr-2"},"Search in table:"),o.a.createElement(b,e.searchProps)),o.a.createElement(l.a,Object.assign({defaultSorted:E,pagination:u()()},e.baseProps,{wrapperClasses:"orders-table table-responsive"})))})))))))))}}]),t}(n.Component);a.default=T}}]);
//# sourceMappingURL=82.ae1fd63b.chunk.js.map