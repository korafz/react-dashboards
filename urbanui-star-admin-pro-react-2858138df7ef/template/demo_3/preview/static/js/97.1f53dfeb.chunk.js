(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[97],{1170:function(e,a,t){"use strict";t.r(a),t.d(a,"DataTables",(function(){return $}));var s=t(11),r=t(12),c=t(14),i=t(13),n=t(0),d=t.n(n),o=t(450),l=t.n(o),u=t(459),p=t.n(u),m=t(468),h=t.n(m),b=m.Search.SearchBar,P=[{id:"XN-1",purchasedOn:"25/09/2019",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:"Open",action:""},{id:"XN-2",purchasedOn:"26/09/2019",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:"Pending",action:""},{id:"XN-3",purchasedOn:"26/09/2019",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:"Closed",action:""},{id:"XN-4",purchasedOn:"27/09/2019",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:"Open",action:""},{id:"XN-5",purchasedOn:"28/09/2019",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:"Closed",action:""},{id:"XN-6",purchasedOn:"28/09/2019",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:"On hold",action:""},{id:"XN-7",purchasedOn:"28/09/2019",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-8",purchasedOn:"29/09/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Open",action:""},{id:"XN-9",purchasedOn:"29/09/2019",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-10",purchasedOn:"29/09/2019",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"Closed",action:""},{id:"XN-11",purchasedOn:"30/09/2019",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:"Pending",action:""},{id:"XN-12",purchasedOn:"01/10/2019",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:"Open",action:""},{id:"XN-13",purchasedOn:"02/10/2019",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:"Open",action:""},{id:"XN-14",purchasedOn:"02/10/2019",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:"Closed",action:""},{id:"XN-15",purchasedOn:"05/10/2019",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:"Pending",action:""},{id:"XN-16",purchasedOn:"07/10/2019",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:"On hold",action:""},{id:"XN-17",purchasedOn:"07/10/2019",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Open",action:""},{id:"XN-18",purchasedOn:"09/10/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Closed",action:""},{id:"XN-19",purchasedOn:"11/10/2019",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:"Pending",action:""},{id:"XN-20",purchasedOn:"14/10/2019",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"On hold",action:""}],N=[{dataField:"id",text:"Order #",sort:!0},{dataField:"purchasedOn",text:"Purchased On",sort:!0},{dataField:"customer",text:"Customer",sort:!0},{dataField:"shipTo",text:"Ship to",sort:!0},{dataField:"basePrice",text:"Base Price",sort:!0},{dataField:"purchasedPrice",text:"Purchased Price",sort:!0},{dataField:"status",text:"Status",sort:!0,formatter:function(e,a){return"On hold"===e?d.a.createElement("label",{className:"badge badge-info"},"On hold"):"Pending"===e?d.a.createElement("label",{className:"badge badge-danger"},"Pending"):"Closed"===e?d.a.createElement("label",{className:"badge badge-success"},"Closed"):"Open"===e?d.a.createElement("label",{className:"badge badge-warning"},"Open"):void 0}},{dataField:"action",text:"Action",sort:!1,formatter:function(){return d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-outline-primary"},d.a.createElement("i",{className:"mdi mdi-eye-outline text-primary"}),"View"))}}],O=[{dataField:"id",order:"desc"}],$=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Data table"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Data Tables")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Data Table"),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement(h.a,{keyField:"id",bootstrap4:!0,data:P,columns:N,search:!0},(function(e){return d.a.createElement("div",null,d.a.createElement("div",{className:"d-flex align-items-center"},d.a.createElement("p",{className:"mb-2 mr-2"},"Search in table:"),d.a.createElement(b,e.searchProps)),d.a.createElement(l.a,Object.assign({defaultSorted:O,pagination:p()()},e.baseProps,{wrapperClasses:"table-responsive"})))})))))))))}}]),t}(n.Component);a.default=$}}]);
//# sourceMappingURL=97.1f53dfeb.chunk.js.map