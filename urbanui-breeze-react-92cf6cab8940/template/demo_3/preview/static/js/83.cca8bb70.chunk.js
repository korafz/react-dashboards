(window["webpackJsonpbreeze-react-pro"]=window["webpackJsonpbreeze-react-pro"]||[]).push([[83],{1191:function(e,a,t){"use strict";t.r(a),t.d(a,"Orders",(function(){return g}));var r=t(13),s=t(14),c=t(16),i=t(15),n=t(17),o=t(0),d=t.n(o),l=t(451),m=t.n(l),u=t(460),p=t.n(u),h=t(470),b=t.n(h),P=h.Search.SearchBar,$=[{id:"WD-61",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:"Open",action:""},{id:"WD-62",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:"Pending",action:""},{id:"WD-63",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:"Closed",action:""},{id:"WD-64",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:"Open",action:""},{id:"WD-65",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:"Closed",action:""},{id:"WD-66",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:"On hold",action:""},{id:"WD-67",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"WD-68",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Open",action:""},{id:"WD-69",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"WD-70",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"Closed",action:""},{id:"WD-71",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:"Pending",action:""},{id:"WD-72",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:"Open",action:""},{id:"WD-73",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:"Open",action:""},{id:"WD-74",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:"Closed",action:""},{id:"WD-75",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:"Pending",action:""},{id:"WD-76",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:"On hold",action:""},{id:"WD-77",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Open",action:""},{id:"WD-78",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Closed",action:""},{id:"WD-79",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:"Pending",action:""},{id:"WD-80",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"On hold",action:""}],E=[{dataField:"id",text:"Order #",sort:!0},{dataField:"customer",text:"Customer",sort:!0},{dataField:"shipTo",text:"Ship to",sort:!0},{dataField:"basePrice",text:"Base Price",sort:!0},{dataField:"purchasedPrice",text:"Purchased Price",sort:!0},{dataField:"status",text:"Status",sort:!0,formatter:function(e,a){return"On hold"===e?d.a.createElement("label",{className:"badge badge-info"},"On hold"):"Pending"===e?d.a.createElement("label",{className:"badge badge-danger"},"Pending"):"Closed"===e?d.a.createElement("label",{className:"badge badge-success"},"Closed"):"Open"===e?d.a.createElement("label",{className:"badge badge-warning"},"Open"):void 0}},{dataField:"action",text:"Action",sort:!1,formatter:function(){return d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-light"},d.a.createElement("i",{className:"mdi mdi-eye-outline text-primary"}),"View"),d.a.createElement("button",{className:"btn btn-light"},d.a.createElement("i",{className:"mdi mdi-close text-danger"}),"Remove"))}}],T=[{dataField:"id",order:"desc"}],g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Orders"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Ecommerce")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Orders")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Orders"),d.a.createElement("div",{className:"row mb-4"},d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"alert alert-warning",role:"alert"},d.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement(b.a,{keyField:"id",bootstrap4:!0,data:$,columns:E,search:!0},(function(e){return d.a.createElement("div",null,d.a.createElement("div",{className:"d-flex align-items-center"},d.a.createElement("p",{className:"mb-2 mr-2"},"Search in table:"),d.a.createElement(P,e.searchProps)),d.a.createElement(m.a,Object.assign({defaultSorted:T,pagination:p()()},e.baseProps,{wrapperClasses:"orders-table table-responsive"})))})))))))))}}]),a}(o.Component);a.default=g}}]);
//# sourceMappingURL=83.cca8bb70.chunk.js.map