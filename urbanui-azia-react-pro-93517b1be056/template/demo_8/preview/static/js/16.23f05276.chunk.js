(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[16],{112:function(e,t,a){"use strict";var n,s=a(1),i=a(3),l=a(7),r=a.n(l),c=a(92),o=a(0),u=a.n(o),m=a(96),v=a(93),d=((n={})[m.b]="show",n[m.a]="show",n),p=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,l=Object(i.a)(e,["className","children"]),p=Object(o.useCallback)((function(e){Object(v.a)(e),l.onEnter&&l.onEnter(e)}),[l]);return u.a.createElement(m.e,Object(s.a)({ref:t,addEndListener:c.a},l,{onEnter:p}),(function(e,t){return u.a.cloneElement(n,Object(s.a)({},t,{className:r()("fade",a,n.props.className,d[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.a=p},127:function(e,t,a){"use strict";var n=a(1),s=a(0),i=a.n(s),l=a(7),r=a.n(l);t.a=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},171:function(e,t,a){"use strict";var n=a(1),s=a(3),i=a(4),l=a.n(i),r=a(0),c=a.n(r),o=a(7),u=a.n(o),m={label:l.a.string.isRequired,onClick:l.a.func},v=c.a.forwardRef((function(e,t){var a=e.label,i=e.onClick,l=e.className,r=Object(s.a)(e,["label","onClick","className"]);return c.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",l),onClick:i},r),c.a.createElement("span",{"aria-hidden":"true"},"\xd7"),c.a.createElement("span",{className:"sr-only"},a))}));v.displayName="CloseButton",v.propTypes=m,v.defaultProps={label:"Close"},t.a=v},692:function(e,t,a){"use strict";a.r(t),a.d(t,"Alerts",(function(){return w}));var n=a(12),s=a(13),i=a(15),l=a(14),r=a(0),c=a.n(r),o=a(78),u=a(1),m=a(3),v=a(7),d=a.n(v),p=a(22),E=a(11),h=a(9),f=a(112),b=a(171),g=a(127),k=a(21),N=a(23),x=Object(g.a)("h4");x.displayName="DivStyledAsH4";var y=Object(k.a)("alert-heading",{Component:x}),O=Object(k.a)("alert-link",{Component:N.a}),C={show:!0,transition:f.a,closeLabel:"Close alert"},P=c.a.forwardRef((function(e,t){var a=Object(p.a)(e,{show:"onClose"}),n=a.bsPrefix,s=a.show,i=a.closeLabel,l=a.className,r=a.children,o=a.variant,v=a.onClose,g=a.dismissible,k=a.transition,N=Object(m.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),x=Object(h.a)(n,"alert"),y=Object(E.a)((function(e){v&&v(!1,e)})),O=!0===k?f.a:k,C=c.a.createElement("div",Object(u.a)({role:"alert"},O?N:void 0,{ref:t,className:d()(l,x,o&&x+"-"+o,g&&x+"-dismissible")}),g&&c.a.createElement(b.a,{onClick:y,label:i}),r);return O?c.a.createElement(O,Object(u.a)({unmountOnExit:!0},N,{ref:void 0,in:s}),C):s?C:null}));P.displayName="Alert",P.defaultProps=C,P.Link=O,P.Heading=y;var A=P,w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"closeAlert",value:function(){console.log("hiii")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container d-flex p-md-0"},c.a.createElement(o.a,null),c.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},c.a.createElement("div",{className:"az-content-breadcrumb"},c.a.createElement("span",null,"Components"),c.a.createElement("span",null,"UI Elements"),c.a.createElement("span",null,"Alerts")),c.a.createElement("h2",{className:"az-content-title"},"Alerts"),c.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Alerts"),c.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),c.a.createElement(A,{variant:"success"},c.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),c.a.createElement(A,{variant:"info"},c.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),c.a.createElement(A,{variant:"warning"},c.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),c.a.createElement(A,{variant:"danger"},c.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),c.a.createElement("table",{className:"table az-table-reference"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"wd-40p"},"variant Reference"),c.a.createElement("th",{className:"wd-60p"},"Values"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="[value]"')),c.a.createElement("td",null,"success | info | warning | danger")))),c.a.createElement("hr",{className:"mg-y-30"}),c.a.createElement("div",{className:"az-content-label mg-b-5"},"Outline Alerts"),c.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),c.a.createElement(A,{variant:"outline-success"},c.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),c.a.createElement(A,{variant:"outline-info"},c.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),c.a.createElement(A,{variant:"outline-warning"},c.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),c.a.createElement(A,{variant:"outline-danger"},c.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),c.a.createElement("table",{className:"table az-table-reference"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"wd-40p"},"Variant Reference"),c.a.createElement("th",{className:"wd-60p"},"Values"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="outline-[value]"')),c.a.createElement("td",null,"success | info | warning | danger")))),c.a.createElement("hr",{className:"mg-y-30"}),c.a.createElement("div",{className:"az-content-label mg-b-5"},"Solid Colored Alerts"),c.a.createElement("p",{className:"mg-b-20"},"Use one of the four required contextual classes."),c.a.createElement(A,{variant:"solid-success"},c.a.createElement("strong",null,"Well done!")," You successfully read this important alert message."),c.a.createElement(A,{variant:"solid-info"},c.a.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."),c.a.createElement(A,{variant:"solid-warning"},c.a.createElement("strong",null,"Warning!")," Better check yourself, you're not looking too good."),c.a.createElement(A,{variant:"solid-danger"},c.a.createElement("strong",null,"Oh snap!")," Change a few things up and try submitting again."),c.a.createElement("table",{className:"table az-table-reference mg-b-40"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"wd-40p"},"Variant Reference"),c.a.createElement("th",{className:"wd-60p"},"Values"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",{className:"pd-0 bg-transparent"},'variant="solid-[value]"')),c.a.createElement("td",null,"success | info | warning | danger")))))))}}]),a}(r.Component);t.default=w},78:function(e,t,a){"use strict";var n=a(12),s=a(13),i=a(15),l=a(14),r=a(0),c=a.n(r),o=a(2),u=a(5),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"az-content-left az-content-left-components"},c.a.createElement("div",{className:"component-item"},c.a.createElement("label",null,"UI Elements"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(o.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),c.a.createElement(o.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),c.a.createElement(o.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),c.a.createElement(o.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),c.a.createElement(o.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),c.a.createElement(o.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),c.a.createElement(o.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),c.a.createElement(o.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),c.a.createElement(o.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),c.a.createElement(o.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),c.a.createElement(o.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),c.a.createElement(o.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),c.a.createElement(o.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),c.a.createElement(o.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),c.a.createElement(o.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),c.a.createElement(o.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),c.a.createElement(o.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),c.a.createElement(o.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),c.a.createElement(o.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),c.a.createElement(o.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),c.a.createElement(o.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),c.a.createElement(o.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),c.a.createElement("label",null,"Forms"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(o.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),c.a.createElement(o.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),c.a.createElement(o.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),c.a.createElement(o.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),c.a.createElement(o.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),c.a.createElement("label",null,"Charts"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(o.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),c.a.createElement("label",null,"Tables"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(o.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),c.a.createElement(o.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),a}(r.Component);t.a=Object(u.g)(m)},87:function(e,t,a){"use strict";var n=a(30);function s(e,t){return function(e){var t=Object(n.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var l=/^ms-/;function r(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(l,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var a="",n="";if("string"===typeof t)return e.style.getPropertyValue(r(t))||s(e).getPropertyValue(r(t));Object.keys(t).forEach((function(s){var i=t[s];i||0===i?!function(e){return!(!e||!c.test(e))}(s)?a+=r(s)+": "+i+";":n+=s+"("+i+") ":e.style.removeProperty(r(s))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a}},92:function(e,t,a){"use strict";var n=a(31),s=a(87),i=a(18);n.a&&window;function l(e,t,a){void 0===a&&(a=5);var n=!1,s=setTimeout((function(){n||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+a),l=Object(i.a)(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(s),l()}}t.a=function(e,t,a){null==a&&(a=function(e){var t=Object(s.a)(e,"transitionDuration")||"",a=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*a}(e)||0);var n=l(e,a),r=Object(i.a)(e,"transitionend",t);return function(){n(),r()}}},93:function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))},96:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return p}));var n=a(3),s=a(6),i=(a(4),a(0)),l=a.n(i),r=a(20),c=a.n(r),o=!1,u=l.a.createContext(null),m="exited",v="entering",d="entered",p="exiting",E=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var s,i=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?i?(s=m,n.appearStatus=v):s=d:s=t.unmountOnExit||t.mountOnEnter?"unmounted":m,n.state={status:s},n.nextCallback=null,n}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:m}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==v&&a!==d&&(t=v):a!==v&&a!==d||(t=p)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!==typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===v?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===m&&this.setState({status:"unmounted"})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,s=this.props.nodeRef?[n]:[c.a.findDOMNode(this),n],i=s[0],l=s[1],r=this.getTimeouts(),u=n?r.appear:r.enter;!e&&!a||o?this.safeSetState({status:d},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,l),this.safeSetState({status:v},(function(){t.props.onEntering(i,l),t.onTransitionEnd(u,(function(){t.safeSetState({status:d},(function(){t.props.onEntered(i,l)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!o?(this.props.onExit(n),this.safeSetState({status:p},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:m},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:m},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],i=s[0],l=s[1];this.props.addEndListener(i,l)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(n.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(u.Provider,{value:null},"function"===typeof a?a(e,s):l.a.cloneElement(l.a.Children.only(a),s))},t}(l.a.Component);function h(){}E.contextType=u,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED="unmounted",E.EXITED=m,E.ENTERING=v,E.ENTERED=d,E.EXITING=p;t.e=E}}]);
//# sourceMappingURL=16.23f05276.chunk.js.map