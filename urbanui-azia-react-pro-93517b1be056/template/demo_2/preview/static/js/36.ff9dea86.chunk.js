(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[36],{673:function(e,a,t){"use strict";t.r(a),t.d(a,"DataTables",(function(){return E}));var s=t(12),i=t(13),n=t(15),c=t(14),l=t(0),r=t.n(l),o=t(78),m=t(567),u=t.n(m),d=t(612),h=t.n(d),v=t(620),p=t.n(v),b=v.Search.SearchBar,P=[{id:"XN-1",purchasedOn:"25/09/2019",customer:"Edinburgh",shipTo:"New York",basePrice:"$1500",purchasedPrice:"$3200",status:"Open",action:""},{id:"XN-2",purchasedOn:"26/09/2019",customer:"Doe",shipTo:"Brazil",basePrice:"$4500",purchasedPrice:"$7500",status:"Pending",action:""},{id:"XN-3",purchasedOn:"26/09/2019",customer:"Sam",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"6300",status:"Closed",action:""},{id:"XN-4",purchasedOn:"27/09/2019",customer:"Joe",shipTo:"Netherland",basePrice:"$1100",purchasedPrice:"$7300",status:"Open",action:""},{id:"XN-5",purchasedOn:"28/09/2019",customer:"Edward",shipTo:"Indonesia",basePrice:"$3600",purchasedPrice:"$4800",status:"Closed",action:""},{id:"XN-6",purchasedOn:"28/09/2019",customer:"Stella",shipTo:"Japan",basePrice:"$5600",purchasedPrice:"$3600",status:"On hold",action:""},{id:"XN-7",purchasedOn:"28/09/2019",customer:"Jaqueline",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-8",purchasedOn:"29/09/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Open",action:""},{id:"XN-9",purchasedOn:"29/09/2019",customer:"John",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Closed",action:""},{id:"XN-10",purchasedOn:"29/09/2019",customer:"Tom",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"Closed",action:""},{id:"XN-11",purchasedOn:"30/09/2019",customer:"Aleena",shipTo:"New York",basePrice:"$1600",purchasedPrice:"$3500",status:"Pending",action:""},{id:"XN-12",purchasedOn:"01/10/2019",customer:"Alphy",shipTo:"Brazil",basePrice:"$5500",purchasedPrice:"$7200",status:"Open",action:""},{id:"XN-13",purchasedOn:"02/10/2019",customer:"Twinkle",shipTo:"Italy",basePrice:"$1560",purchasedPrice:"$2530",status:"Open",action:""},{id:"XN-14",purchasedOn:"02/10/2019",customer:"Catherine",shipTo:"Brazil",basePrice:"$1600",purchasedPrice:"$5600",status:"Closed",action:""},{id:"XN-15",purchasedOn:"05/10/2019",customer:"Daniel",shipTo:"Singapore",basePrice:"$6800",purchasedPrice:"$9800",status:"Pending",action:""},{id:"XN-16",purchasedOn:"07/10/2019",customer:"Tom",shipTo:"Tokyo",basePrice:"$1600",purchasedPrice:"$6500",status:"On hold",action:""},{id:"XN-17",purchasedOn:"07/10/2019",customer:"Cris",shipTo:"Tokyo",basePrice:"$2100",purchasedPrice:"$6300",status:"Open",action:""},{id:"XN-18",purchasedOn:"09/10/2019",customer:"Tim",shipTo:"Italy",basePrice:"$6300",purchasedPrice:"$2100",status:"Closed",action:""},{id:"XN-19",purchasedOn:"11/10/2019",customer:"Jack",shipTo:"Tokyo",basePrice:"$3100",purchasedPrice:"$7300",status:"Pending",action:""},{id:"XN-20",purchasedOn:"14/10/2019",customer:"Tony",shipTo:"Germany",basePrice:"$1100",purchasedPrice:"$2300",status:"On hold",action:""}],N=[{dataField:"id",text:"Order #",sort:!0},{dataField:"purchasedOn",text:"Purchased On",sort:!0},{dataField:"customer",text:"Customer",sort:!0},{dataField:"shipTo",text:"Ship to",sort:!0},{dataField:"basePrice",text:"Base Price",sort:!0},{dataField:"purchasedPrice",text:"Purchased Price",sort:!0},{dataField:"status",text:"Status",sort:!0,formatter:function(e,a){return"On hold"===e?r.a.createElement("label",{className:"badge badge-info"},"On hold"):"Pending"===e?r.a.createElement("label",{className:"badge badge-danger"},"Pending"):"Closed"===e?r.a.createElement("label",{className:"badge badge-success"},"Closed"):"Open"===e?r.a.createElement("label",{className:"badge badge-warning"},"Open"):void 0}},{dataField:"action",text:"Action",sort:!1,formatter:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light"},r.a.createElement("i",{className:"mdi mdi-eye-outline text-primary"}),"View"))}}],k=[{dataField:"id",order:"desc"}],E=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container d-flex p-md-0"},r.a.createElement(o.a,null),r.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},r.a.createElement("div",{className:"az-content-breadcrumb"},r.a.createElement("span",null,"Components"),r.a.createElement("span",null,"Tables"),r.a.createElement("span",null,"DataTable")),r.a.createElement("h2",{className:"az-content-title"},"DataTable"),r.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic DataTable"),r.a.createElement("p",{className:"mg-b-20"},"Searching, ordering and paging goodness will be immediately added to the table, as shown in this example."),r.a.createElement("div",null,r.a.createElement(p.a,{keyField:"id",bootstrap4:!0,data:P,columns:N,search:!0},(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("p",{className:"mb-2 mr-2"},"Search in table:"),r.a.createElement(b,e.searchProps)),r.a.createElement(u.a,Object.assign({defaultSorted:k,pagination:h()()},e.baseProps,{wrapperClasses:"table-responsive"})))}))),r.a.createElement("hr",{className:"mg-y-30"}),r.a.createElement("div",{className:"ht-40"}))))}}]),t}(l.Component);a.default=E},78:function(e,a,t){"use strict";var s=t(12),i=t(13),n=t(15),c=t(14),l=t(0),r=t.n(l),o=t(2),m=t(5),u=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"az-content-left az-content-left-components"},r.a.createElement("div",{className:"component-item"},r.a.createElement("label",null,"UI Elements"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(o.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),r.a.createElement(o.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),r.a.createElement(o.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),r.a.createElement(o.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),r.a.createElement(o.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),r.a.createElement(o.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),r.a.createElement(o.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),r.a.createElement(o.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),r.a.createElement(o.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),r.a.createElement(o.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),r.a.createElement(o.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),r.a.createElement(o.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),r.a.createElement(o.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),r.a.createElement(o.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),r.a.createElement(o.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),r.a.createElement(o.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),r.a.createElement(o.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),r.a.createElement(o.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),r.a.createElement(o.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),r.a.createElement(o.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),r.a.createElement(o.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),r.a.createElement(o.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),r.a.createElement("label",null,"Forms"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(o.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),r.a.createElement(o.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),r.a.createElement(o.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),r.a.createElement(o.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),r.a.createElement(o.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),r.a.createElement("label",null,"Charts"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(o.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),r.a.createElement("label",null,"Tables"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(o.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),r.a.createElement(o.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),t}(l.Component);a.a=Object(m.g)(u)}}]);
//# sourceMappingURL=36.ff9dea86.chunk.js.map