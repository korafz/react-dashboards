(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[46],{691:function(e,a,t){"use strict";t.r(a),t.d(a,"Paginations",(function(){return I}));var n=t(12),l=t(13),i=t(15),s=t(14),c=t(0),m=t.n(c),r=t(78),o=t(1),v=t(3),u=t(7),E=t.n(u),b=t(9),d=t(23),h=m.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,l=e.className,i=e.style,s=e.activeLabel,c=e.children,r=Object(v.a)(e,["active","disabled","className","style","activeLabel","children"]),u=t||n?"span":d.a;return m.a.createElement("li",{ref:a,style:i,className:E()(l,"page-item",{active:t,disabled:n})},m.a.createElement(u,Object(o.a)({className:"page-link",disabled:n},r),c,t&&s&&m.a.createElement("span",{className:"sr-only"},s)))}));h.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},h.displayName="PageItem";var N=h;function k(e,a,t){function n(e){var n=e.children,l=Object(v.a)(e,["children"]);return m.a.createElement(h,l,m.a.createElement("span",{"aria-hidden":"true"},n||a),m.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var p=k("First","\xab"),g=k("Prev","\u2039","Previous"),f=k("Ellipsis","\u2026","More"),P=k("Next","\u203a"),w=k("Last","\xbb"),A=m.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.children,i=e.size,s=Object(v.a)(e,["bsPrefix","className","children","size"]),c=Object(b.a)(t,"pagination");return m.a.createElement("ul",Object(o.a)({ref:a},s,{className:E()(n,c,i&&c+"-"+i)}),l)}));A.First=p,A.Prev=g,A.Ellipsis=f,A.Item=N,A.Next=P,A.Last=w;var y=A,I=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"container d-flex p-md-0"},m.a.createElement(r.a,null),m.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},m.a.createElement("div",{className:"az-content-breadcrumb"},m.a.createElement("span",null,"Components"),m.a.createElement("span",null,"UI Elements"),m.a.createElement("span",null,"Pagination")),m.a.createElement("h2",{className:"az-content-title"},"Pagination"),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Pagination"),m.a.createElement("p",{className:"mg-b-20"},"Below are basic pagination navigation."),m.a.createElement(y,null,m.a.createElement(y.Prev,null,m.a.createElement("i",{className:"icon ion-ios-arrow-back"})),m.a.createElement(y.Item,{active:!0},1),m.a.createElement(y.Item,null,2),m.a.createElement(y.Item,null,3),m.a.createElement(y.Next,null,m.a.createElement("i",{className:"icon ion-ios-arrow-forward"}))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Pagination For Dark Background"),m.a.createElement("p",{className:"mg-b-20"},"Below are basic pagination navigation for dark background."),m.a.createElement("div",{className:"pd-20 bg-gray-800"},m.a.createElement(y,{className:"pagination-dark mg-b-0"},m.a.createElement(y.Prev,null,m.a.createElement("i",{className:"icon ion-ios-arrow-back"})),m.a.createElement(y.Item,{active:!0},1),m.a.createElement(y.Item,null,2),m.a.createElement(y.Item,null,3),m.a.createElement(y.Next,null,m.a.createElement("i",{className:"icon ion-ios-arrow-forward"})))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Color Variant Pagination"),m.a.createElement("p",{className:"mg-b-20"},"Below are the available colored pagination variants."),m.a.createElement("div",{className:"row row-sm"},m.a.createElement("div",{className:"col-sm-6 col-lg-4"},m.a.createElement(y,{className:"pagination-primary"},m.a.createElement(y.Prev,null,m.a.createElement("i",{className:"icon ion-ios-arrow-back"})),m.a.createElement(y.Item,{active:!0},1),m.a.createElement(y.Item,null,2),m.a.createElement(y.Item,null,3),m.a.createElement(y.Next,null,m.a.createElement("i",{className:"icon ion-ios-arrow-forward"})))),m.a.createElement("div",{className:"col-sm-6 col-lg-4 mg-sm-t-0"},m.a.createElement(y,{className:"pagination-success"},m.a.createElement(y.Prev,null,m.a.createElement("i",{className:"icon ion-ios-arrow-back"})),m.a.createElement(y.Item,{active:!0},1),m.a.createElement(y.Item,null,2),m.a.createElement(y.Item,null,3),m.a.createElement(y.Next,null,m.a.createElement("i",{className:"icon ion-ios-arrow-forward"}))))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Circled Pagination"),m.a.createElement("p",{className:"mg-b-20"},"Below are basic pagination navigation in circle."),m.a.createElement(y,{className:"pagination-circled"},m.a.createElement(y.Prev,null,m.a.createElement("i",{className:"icon ion-ios-arrow-back"})),m.a.createElement(y.Item,{active:!0},1),m.a.createElement(y.Item,null,2),m.a.createElement(y.Item,null,3),m.a.createElement(y.Next,null,m.a.createElement("i",{className:"icon ion-ios-arrow-forward"}))),m.a.createElement("div",{className:"mg-lg-b-30"}))))}}]),t}(c.Component);a.default=I},78:function(e,a,t){"use strict";var n=t(12),l=t(13),i=t(15),s=t(14),c=t(0),m=t.n(c),r=t(2),o=t(5),v=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"az-content-left az-content-left-components"},m.a.createElement("div",{className:"component-item"},m.a.createElement("label",null,"UI Elements"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),m.a.createElement(r.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),m.a.createElement(r.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),m.a.createElement(r.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),m.a.createElement(r.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),m.a.createElement(r.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),m.a.createElement(r.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),m.a.createElement(r.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),m.a.createElement(r.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),m.a.createElement(r.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),m.a.createElement(r.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),m.a.createElement(r.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),m.a.createElement(r.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),m.a.createElement(r.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),m.a.createElement(r.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),m.a.createElement(r.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),m.a.createElement(r.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),m.a.createElement(r.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),m.a.createElement(r.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),m.a.createElement(r.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),m.a.createElement(r.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),m.a.createElement(r.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),m.a.createElement("label",null,"Forms"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),m.a.createElement(r.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),m.a.createElement(r.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),m.a.createElement(r.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),m.a.createElement(r.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),m.a.createElement("label",null,"Charts"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),m.a.createElement("label",null,"Tables"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),m.a.createElement(r.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),t}(c.Component);a.a=Object(o.g)(v)}}]);
//# sourceMappingURL=46.a40d4166.chunk.js.map