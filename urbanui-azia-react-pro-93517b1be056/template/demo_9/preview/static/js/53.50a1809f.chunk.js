(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[53],{685:function(e,a,t){"use strict";t.r(a),t.d(a,"Popovers",(function(){return y}));var l=t(12),r=t(13),c=t(15),n=t(14),o=t(0),m=t.n(o),s=t(690),i=t(1),p=t(3),d=t(7),v=t.n(d),E=(t(58),t(9)),u=m.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,r=e.bsPrefix,c=e.className,n=e.children,o=Object(p.a)(e,["as","bsPrefix","className","children"]);return r=Object(E.a)(r,"popover-header"),m.a.createElement(l,Object(i.a)({ref:a},o,{className:v()(r,c)}),n)})),b=m.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,r=e.bsPrefix,c=e.className,n=e.children,o=Object(p.a)(e,["as","bsPrefix","className","children"]);return r=Object(E.a)(r,"popover-body"),m.a.createElement(l,Object(i.a)({ref:a},o,{className:v()(c,r)}),n)})),g=m.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.placement,r=e.className,c=e.style,n=e.children,o=e.content,s=e.arrowProps,d=(e.popper,e.show,Object(p.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),u=Object(E.a)(t,"popover"),g=((null==l?void 0:l.split("-"))||[])[0];return m.a.createElement("div",Object(i.a)({ref:a,role:"tooltip",style:c,"x-placement":g,className:v()(r,u,g&&"bs-popover-"+g)},d),m.a.createElement("div",Object(i.a)({className:"arrow"},s)),o?m.a.createElement(b,null,n):n)}));g.defaultProps={placement:"right"},g.Title=u,g.Content=b;var N=g,f=t(53),y=function(e){Object(c.a)(t,e);var a=Object(n.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"container-fluid d-flex p-md-0"},m.a.createElement("div",{className:"az-content-body d-flex flex-column"},m.a.createElement("div",{className:"az-content-breadcrumb"},m.a.createElement("span",null,"Components"),m.a.createElement("span",null,"UI Elements"),m.a.createElement("span",null,"Popover")),m.a.createElement("h2",{className:"az-content-title"},"Popover"),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Default Popover"),m.a.createElement("p",{className:"mg-b-20"},"Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site."),m.a.createElement("div",{className:"az-content-label az-content-label-sm mg-b-10"},"Live Example"),m.a.createElement("div",{className:"pd-20 bg-gray-200"},m.a.createElement("div",{className:"row row-sm tx-center"},m.a.createElement("div",{className:"col-sm-6 col-lg-3"},m.a.createElement(s.a,{trigger:"click",placement:"top",overlay:m.a.createElement(N,{id:"popover-basic"},m.a.createElement(N.Title,{as:"h3"},"Popover Top"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))),m.a.createElement("div",{className:"col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0"},m.a.createElement(s.a,{trigger:"click",placement:"bottom",overlay:m.a.createElement(N,{id:"popover-basic"},m.a.createElement(N.Title,{as:"h3"},"Popover Bottom"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))),m.a.createElement("div",{className:"col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0"},m.a.createElement(s.a,{trigger:"click",placement:"left",overlay:m.a.createElement(N,{id:"popover-basic"},m.a.createElement(N.Title,{as:"h3"},"Popover Left"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))),m.a.createElement("div",{className:"col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0"},m.a.createElement(s.a,{trigger:"click",placement:"right",overlay:m.a.createElement(N,{id:"popover-basic"},m.a.createElement(N.Title,{as:"h3"},"Popover Right"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Colored Head Popover"),m.a.createElement("p",{className:"mg-b-20"},"A demonstration of colored title background of popover available in all four directions."),m.a.createElement("div",{className:"az-content-label az-content-label-sm mg-b-10"},"Live Example"),m.a.createElement("div",{className:"pd-20 bg-gray-200"},m.a.createElement("div",{className:"row row-sm tx-center"},m.a.createElement("div",{className:"col-sm-6 col-lg-3"},m.a.createElement(s.a,{trigger:"click",placement:"top",overlay:m.a.createElement(N,{id:"popover-basic",className:"popover-head-primary"},m.a.createElement(N.Title,{as:"h3"},"Popover"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))),m.a.createElement("div",{className:"col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0"},m.a.createElement(s.a,{trigger:"click",placement:"top",overlay:m.a.createElement(N,{id:"popover-basic",className:"popover-head-secondary"},m.a.createElement(N.Title,{as:"h3"},"Popover"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Full Colored Popover"),m.a.createElement("p",{className:"mg-b-20"},"A demonstration of colored body background of popover available in all four directions."),m.a.createElement("div",{className:"az-content-label az-content-label-sm mg-b-10"},"Live Example"),m.a.createElement("div",{className:"pd-20 bg-gray-200"},m.a.createElement("div",{className:"row row-sm tx-center"},m.a.createElement("div",{className:"col-sm-6 col-lg-3"},m.a.createElement(s.a,{trigger:"click",placement:"top",overlay:m.a.createElement(N,{id:"popover-basic",className:"popover-primary"},m.a.createElement(N.Title,{as:"h3"},"Popover"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))),m.a.createElement("div",{className:"col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0"},m.a.createElement(s.a,{trigger:"click",placement:"top",overlay:m.a.createElement(N,{id:"popover-basic",className:"popover-secondary"},m.a.createElement(N.Title,{as:"h3"},"Popover"),m.a.createElement(N.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},m.a.createElement(f.a,{variant:"secondary"},"Click me"))))),m.a.createElement("div",{className:"mg-lg-b-30"}))))}}]),t}(o.Component);a.default=y}}]);
//# sourceMappingURL=53.50a1809f.chunk.js.map