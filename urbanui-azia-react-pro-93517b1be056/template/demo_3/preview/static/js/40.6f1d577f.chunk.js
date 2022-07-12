(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[40],{690:function(e,a,t){"use strict";t.r(a),t.d(a,"Breadcrumbs",(function(){return N}));var n=t(12),l=t(13),s=t(15),i=t(14),c=t(0),m=t.n(c),r=t(78),o=t(1),v=t(3),b=t(7),u=t.n(b),h=t(9),d=t(23),E=m.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,l=e.children,s=e.className,i=e.as,c=void 0===i?"li":i,r=e.linkAs,b=void 0===r?d.a:r,E=e.linkProps,p=e.href,k=e.title,f=e.target,N=Object(v.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),P=Object(h.a)(t,"breadcrumb-item");return m.a.createElement(c,Object(o.a)({ref:a},N,{className:u()(P,s,{active:n}),"aria-current":n?"page":void 0}),n?l:m.a.createElement(b,Object(o.a)({},E,{href:p,title:k,target:f}),l))}));E.displayName="BreadcrumbItem",E.defaultProps={active:!1,linkProps:{}};var p=E,k=m.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.listProps,s=e.children,i=e.label,c=e.as,r=void 0===c?"nav":c,b=Object(v.a)(e,["bsPrefix","className","listProps","children","label","as"]),d=Object(h.a)(t,"breadcrumb");return m.a.createElement(r,Object(o.a)({"aria-label":i,className:n,ref:a},b),m.a.createElement("ol",Object(o.a)({},l,{className:u()(d,null==l?void 0:l.className)}),s))}));k.displayName="Breadcrumb",k.defaultProps={label:"breadcrumb",listProps:{}},k.Item=p;var f=k,N=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"container d-flex p-md-0"},m.a.createElement(r.a,null),m.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},m.a.createElement("div",{className:"az-content-breadcrumb"},m.a.createElement("span",null,"Components"),m.a.createElement("span",null,"UI Elements"),m.a.createElement("span",null,"Breadcrumbs")),m.a.createElement("h2",{className:"az-content-title"},"Breadcrumbs"),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Styling"),m.a.createElement("p",{className:"mg-b-20"},"The example below is the basic styling of the breadcrumb from Bootstrap."),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb mg-b-0"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"#/"},"Home")),m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"#/"},"Library")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Data"))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Custom Styling"),m.a.createElement("p",{className:"mg-b-20"},"The example below is the custom styling of the breadcrumb used by this template."),m.a.createElement(f,{className:"breadcrumb-style1"},m.a.createElement(f.Item,{href:"#/"},"Home"),m.a.createElement(f.Item,{href:"https://getbootstrap.com/docs/4.0/components/breadcrumb/"},"Library"),m.a.createElement(f.Item,{active:!0},"Data")),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Custom Divider"),m.a.createElement("p",{className:"mg-b-20"},"The example below is the custom styling of the breadcrumb using different divider."),m.a.createElement(f,{className:"breadcrumb-style2"},m.a.createElement(f.Item,{href:"#/"},"Home"),m.a.createElement(f.Item,{href:"https://getbootstrap.com/docs/4.0/components/breadcrumb/"},"Library"),m.a.createElement(f.Item,{active:!0},"Data")))))}}]),t}(c.Component);a.default=N},78:function(e,a,t){"use strict";var n=t(12),l=t(13),s=t(15),i=t(14),c=t(0),m=t.n(c),r=t(2),o=t(5),v=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"az-content-left az-content-left-components"},m.a.createElement("div",{className:"component-item"},m.a.createElement("label",null,"UI Elements"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),m.a.createElement(r.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),m.a.createElement(r.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),m.a.createElement(r.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),m.a.createElement(r.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),m.a.createElement(r.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),m.a.createElement(r.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),m.a.createElement(r.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),m.a.createElement(r.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),m.a.createElement(r.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),m.a.createElement(r.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),m.a.createElement(r.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),m.a.createElement(r.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),m.a.createElement(r.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),m.a.createElement(r.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),m.a.createElement(r.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),m.a.createElement(r.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),m.a.createElement(r.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),m.a.createElement(r.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),m.a.createElement(r.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),m.a.createElement(r.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),m.a.createElement(r.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),m.a.createElement("label",null,"Forms"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),m.a.createElement(r.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),m.a.createElement(r.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),m.a.createElement(r.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),m.a.createElement(r.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),m.a.createElement("label",null,"Charts"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),m.a.createElement("label",null,"Tables"),m.a.createElement("nav",{className:"nav flex-column"},m.a.createElement(r.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),m.a.createElement(r.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),t}(c.Component);a.a=Object(o.g)(v)}}]);
//# sourceMappingURL=40.6f1d577f.chunk.js.map