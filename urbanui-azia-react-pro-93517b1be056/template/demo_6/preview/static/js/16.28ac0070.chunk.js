(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[16],{102:function(e,t,a){"use strict";var n,l=a(2),s=a(3),i=a(5),r=a.n(i),c=a(86),o=a(0),u=a.n(o),m=a(94),v=a(87),d=((n={})[m.b]="show",n[m.a]="show",n),p=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(s.a)(e,["className","children"]),p=Object(o.useCallback)((function(e){Object(v.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(m.e,Object(l.a)({ref:t,addEndListener:c.a},i,{onEnter:p}),(function(e,t){return u.a.cloneElement(n,Object(l.a)({},t,{className:r()("fade",a,n.props.className,d[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.a=p},125:function(e,t,a){"use strict";var n=a(2),l=a(0),s=a.n(l),i=a(5),r=a.n(i);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},169:function(e,t,a){"use strict";var n=a(2),l=a(3),s=a(4),i=a.n(s),r=a(0),c=a.n(r),o=a(5),u=a.n(o),m={label:i.a.string.isRequired,onClick:i.a.func},v=c.a.forwardRef((function(e,t){var a=e.label,s=e.onClick,i=e.className,r=Object(l.a)(e,["label","onClick","className"]);return c.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",i),onClick:s},r),c.a.createElement("span",{"aria-hidden":"true"},"\xd7"),c.a.createElement("span",{className:"sr-only"},a))}));v.displayName="CloseButton",v.propTypes=m,v.defaultProps={label:"Close"},t.a=v},695:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(12),s=a(13),i=a(14),r=a(15),c=a(0),o=a.n(c),u=a(72),m=a(2),v=a(3),d=a(5),p=a.n(d),E=a(21),h=a(10),f=a(24),b=a(125),g=a(7),k=a(102),N=a(169),x=a(22),y={show:!0,transition:k.a,closeLabel:"Close alert"},O={show:"onClose"},C=o.a.forwardRef((function(e,t){var a=Object(E.b)(e,O),n=a.bsPrefix,l=a.show,s=a.closeLabel,i=a.className,r=a.children,c=a.variant,u=a.onClose,d=a.dismissible,f=a.transition,b=Object(v.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),k=Object(g.b)(n,"alert"),x=Object(h.a)((function(e){u(!1,e)})),y=o.a.createElement("div",Object(m.a)({role:"alert"},f?b:void 0,{className:p()(i,k,c&&k+"-"+c,d&&k+"-dismissible")}),d&&o.a.createElement(N.a,{onClick:x,label:s}),r);return f?o.a.createElement(f,Object(m.a)({unmountOnExit:!0,ref:t},b,{in:l}),y):l?y:null})),P=Object(b.a)("h4");P.displayName="DivStyledAsH4",C.displayName="Alert",C.defaultProps=y,C.Link=Object(f.a)("alert-link",{Component:x.a}),C.Heading=Object(f.a)("alert-heading",{Component:P});var w=C;a.d(t,"Alerts",(function(){return A}));var A=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"closeAlert",value:function(){console.log("hiii")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container d-flex p-md-0"},o.a.createElement(u.a,null),o.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},o.a.createElement("div",{className:"az-content-breadcrumb"},o.a.createElement("span",null,"Components"),o.a.createElement("span",null,"UI Elements"),o.a.createElement("span",null,"Alerts")),o.a.createElement("h2",{className:"az-content-title"},"Alerts"),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Alerts"),o.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),o.a.createElement(w,{variant:"success"},o.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),o.a.createElement(w,{variant:"info"},o.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),o.a.createElement(w,{variant:"warning"},o.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),o.a.createElement(w,{variant:"danger"},o.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),o.a.createElement("table",{className:"table az-table-reference"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"wd-40p"},"variant Reference"),o.a.createElement("th",{className:"wd-60p"},"Values"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="[value]"')),o.a.createElement("td",null,"success | info | warning | danger")))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Outline Alerts"),o.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),o.a.createElement(w,{variant:"outline-success"},o.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),o.a.createElement(w,{variant:"outline-info"},o.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),o.a.createElement(w,{variant:"outline-warning"},o.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),o.a.createElement(w,{variant:"outline-danger"},o.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),o.a.createElement("table",{className:"table az-table-reference"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"wd-40p"},"Variant Reference"),o.a.createElement("th",{className:"wd-60p"},"Values"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="outline-[value]"')),o.a.createElement("td",null,"success | info | warning | danger")))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Solid Colored Alerts"),o.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),o.a.createElement(w,{variant:"solid-success"},o.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),o.a.createElement(w,{variant:"solid-info"},o.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),o.a.createElement(w,{variant:"solid-warning"},o.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),o.a.createElement(w,{variant:"solid-danger"},o.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),o.a.createElement("table",{className:"table az-table-reference mg-b-40"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"wd-40p"},"Variant Reference"),o.a.createElement("th",{className:"wd-60p"},"Values"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="solid-[value]"')),o.a.createElement("td",null,"success | info | warning | danger")))))))}}]),t}(c.Component);t.default=A},72:function(e,t,a){"use strict";var n=a(11),l=a(12),s=a(13),i=a(14),r=a(15),c=a(0),o=a.n(c),u=a(1),m=a(16),v=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"az-content-left az-content-left-components"},o.a.createElement("div",{className:"component-item"},o.a.createElement("label",null,"UI Elements"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(u.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),o.a.createElement(u.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),o.a.createElement(u.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),o.a.createElement(u.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),o.a.createElement(u.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),o.a.createElement(u.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),o.a.createElement(u.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),o.a.createElement(u.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),o.a.createElement(u.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),o.a.createElement(u.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),o.a.createElement(u.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),o.a.createElement(u.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),o.a.createElement(u.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),o.a.createElement(u.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),o.a.createElement(u.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),o.a.createElement(u.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),o.a.createElement(u.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),o.a.createElement(u.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),o.a.createElement(u.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),o.a.createElement(u.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),o.a.createElement(u.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),o.a.createElement(u.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),o.a.createElement("label",null,"Forms"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(u.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),o.a.createElement(u.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),o.a.createElement(u.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),o.a.createElement(u.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),o.a.createElement(u.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),o.a.createElement("label",null,"Charts"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(u.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),o.a.createElement("label",null,"Tables"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(u.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),o.a.createElement(u.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),t}(c.Component);t.a=Object(m.g)(v)},80:function(e,t,a){"use strict";function n(e){return e&&e.ownerDocument||document}a.d(t,"a",(function(){return n}))},81:function(e,t,a){"use strict";var n=a(80);function l(e,t){return function(e){var t=Object(n.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var s=/([A-Z])/g;var i=/^ms-/;function r(e){return function(e){return e.replace(s,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var a="",n="";if("string"===typeof t)return e.style.getPropertyValue(r(t))||l(e).getPropertyValue(r(t));Object.keys(t).forEach((function(l){var s=t[l];s||0===s?!function(e){return!(!e||!c.test(e))}(l)?a+=r(l)+": "+s+";":n+=l+"("+s+") ":e.style.removeProperty(r(l))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a}},86:function(e,t,a){"use strict";var n=a(30),l=a(81),s=a(19),i=n.a&&"ontransitionend"in window;function r(e,t,a){void 0===a&&(a=5);var n=!1,l=setTimeout((function(){n||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+a),i=Object(s.a)(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(l),i()}}t.a=function(e,t,a){return i?(null==a&&(a=function(e){var t=Object(l.a)(e,"transitionDuration")||"",a=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*a}(e)||0),r(e,a),Object(s.a)(e,"transitionend",t)):r(e,0,0)}},87:function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))},94:function(e,t,a){"use strict";var n=a(3),l=a(8),s=(a(4),a(0)),i=a.n(s),r=a(29),c=a.n(r),o=!1,u=i.a.createContext(null);a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return p}));var m="exited",v="entering",d="entered",p="exiting",E=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var l,s=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(l=m,n.appearStatus=v):l=d:l=t.unmountOnExit||t.mountOnEnter?"unmounted":m,n.state={status:l},n.nextCallback=null,n}Object(l.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:m}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==v&&a!==d&&(t=v):a!==v&&a!==d||(t=p)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!==typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var a=c.a.findDOMNode(this);t===v?this.performEnter(a,e):this.performExit(a)}else this.props.unmountOnExit&&this.state.status===m&&this.setState({status:"unmounted"})},a.performEnter=function(e,t){var a=this,n=this.props.enter,l=this.context?this.context.isMounting:t,s=this.getTimeouts(),i=l?s.appear:s.enter;!t&&!n||o?this.safeSetState({status:d},(function(){a.props.onEntered(e)})):(this.props.onEnter(e,l),this.safeSetState({status:v},(function(){a.props.onEntering(e,l),a.onTransitionEnd(e,i,(function(){a.safeSetState({status:d},(function(){a.props.onEntered(e,l)}))}))})))},a.performExit=function(e){var t=this,a=this.props.exit,n=this.getTimeouts();a&&!o?(this.props.onExit(e),this.safeSetState({status:p},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:m},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:m},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t,a){this.setNextCallback(a);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,l=Object(n.a)(t,["children"]);if(delete l.in,delete l.mountOnEnter,delete l.unmountOnExit,delete l.appear,delete l.enter,delete l.exit,delete l.timeout,delete l.addEndListener,delete l.onEnter,delete l.onEntering,delete l.onEntered,delete l.onExit,delete l.onExiting,delete l.onExited,"function"===typeof a)return i.a.createElement(u.Provider,{value:null},a(e,l));var s=i.a.Children.only(a);return(i.a.createElement(u.Provider,{value:null},i.a.cloneElement(s,l)))},t}(i.a.Component);function h(){}E.contextType=u,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=0,E.EXITED=1,E.ENTERING=2,E.ENTERED=3,E.EXITING=4;t.e=E}}]);
//# sourceMappingURL=16.28ac0070.chunk.js.map