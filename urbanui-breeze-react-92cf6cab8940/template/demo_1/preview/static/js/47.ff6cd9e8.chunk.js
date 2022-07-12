(window["webpackJsonpbreeze-react-pro"]=window["webpackJsonpbreeze-react-pro"]||[]).push([[47],{1232:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(12),o=a(14),c=a(13),l=a(0),i=a.n(l),s=a(2),u=a(4),p=a(9),m=a(75),d=a(74),f=a(350),b=Math.pow(2,31)-1;function v(){var e=Object(d.a)(),t=Object(l.useRef)();return Object(f.a)((function(){return clearTimeout(t.current)})),Object(l.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=b?t.current=setTimeout(r,n):function e(t,a,r){var n=r-Date.now();t.current=n<=b?setTimeout(a,n):setTimeout((function(){return e(t,a,r)}),b)}(t,r,Date.now()+n))},clear:a}}),[])}var E=a(32),O=a.n(E),h=(a(63),a(5)),j=a.n(h),w=a(6),y=a.n(w),N=a(45),g=a(25),C=a(84),P=a(59),T=a(85),k=a(293),x=i.a.forwardRef((function(e,t){var a,r,n=e.flip,o=e.placement,c=e.containerPadding,p=void 0===c?5:c,m=e.popperConfig,d=void 0===m?{}:m,f=e.transition,b=Object(N.a)(),v=b[0],E=b[1],h=Object(N.a)(),j=h[0],w=h[1],y=Object(g.a)(E,t),C=Object(k.a)(e.container),x=Object(k.a)(e.target),R=Object(l.useState)(!e.show),B=R[0],A=R[1],S=Object(P.b)(d.modifiers),D=Object(P.a)(x,v,Object(s.a)({},d,{placement:o||"bottom",modifiers:Object(s.a)({},S,{eventListeners:{enabled:!!e.show},preventOverflow:Object(s.a)({},S.preventOverflow,{options:Object(s.a)({padding:p||5},null==(a=S.preventOverflow)?void 0:a.options)}),arrow:Object(s.a)({},S.arrow,{enabled:!!j,options:Object(s.a)({},null==(r=S.arrow)?void 0:r.options,{element:j})}),flip:Object(s.a)({enabled:!!n},S.flip)})})),_=D.styles,M=D.arrowStyles,q=Object(u.a)(D,["styles","arrowStyles"]);e.show?B&&A(!1):e.transition||B||A(!0);var H=e.show||f&&!B;if(Object(T.a)(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!H)return null;var U=e.children(Object(s.a)({},q,{show:!!e.show,props:{style:_,ref:y},arrowProps:{style:M,ref:w}}));if(f){var F=e.onExit,z=e.onExiting,J=e.onEnter,L=e.onEntering,I=e.onEntered;U=i.a.createElement(f,{in:e.show,appear:!0,onExit:F,onExiting:z,onExited:function(){A(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:J,onEntering:L,onEntered:I},U)}return C?O.a.createPortal(U,C):null}));x.displayName="Overlay",x.propTypes={show:y.a.bool,placement:y.a.oneOf(C.b),target:y.a.any,container:y.a.any,flip:y.a.bool,children:y.a.func.isRequired,containerPadding:y.a.number,popperConfig:y.a.object,rootClose:y.a.bool,rootCloseEvent:y.a.oneOf(["click","mousedown"]),rootCloseDisabled:y.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n;return e.rootClose?(n=y.a.func).isRequired.apply(n,[e].concat(a)):y.a.func.apply(y.a,[e].concat(a))},transition:y.a.elementType,onEnter:y.a.func,onEntering:y.a.func,onEntered:y.a.func,onExit:y.a.func,onExiting:y.a.func,onExited:y.a.func};var R=x,B=a(73),A={transition:B.a,rootClose:!1,show:!1,placement:"top"};function S(e){var t=e.children,a=e.transition,r=Object(u.a)(e,["children","transition"]),n=Object(l.useRef)({});return a=!0===a?B.a:a||null,i.a.createElement(R,Object(s.a)({},r,{transition:a}),(function(e){var r=e.props,o=e.arrowProps,c=e.show,l=e.state,p=e.scheduleUpdate,m=e.placement,d=e.outOfBoundaries,f=Object(u.a)(e,["props","arrowProps","show","state","scheduleUpdate","placement","outOfBoundaries"]);!function(e,t){var a=e.ref,r=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(E.findDOMNode)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(E.findDOMNode)(e))})}(r,o);var b=Object.assign(n.current,{state:l,scheduleUpdate:p,placement:m,outOfBoundaries:d});return"function"===typeof t?t(Object(s.a)({},f,{},r,{placement:m,show:c,popper:b,arrowProps:o})):i.a.cloneElement(t,Object(s.a)({},f,{},r,{placement:m,arrowProps:o,popper:b,className:j()(t.props.className,!a&&c&&"show"),style:Object(s.a)({},t.props.style,{},r.style)}))}))}S.defaultProps=A;var D=S,_=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){return this.props.children},t}(i.a.Component);function M(e,t,a){var r=t.currentTarget,n=t.relatedTarget||t.nativeEvent[a];n&&n===r||Object(m.a)(r,n)||e(t)}function q(e){var t=e.trigger,a=e.overlay,r=e.children,n=e.popperConfig,o=void 0===n?{}:n,c=e.defaultShow,p=e.delay,m=Object(u.a)(e,["trigger","overlay","children","popperConfig","defaultShow","delay"]),d=Object(l.useRef)(null),f=v(),b=Object(l.useRef)(),E=Object(l.useState)(!!c),h=E[0],j=E[1],w=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(p),y=i.a.Children.only(r),N=y.props,g=N.onFocus,C=N.onBlur,P=N.onClick,T=Object(l.useCallback)((function(){return O.a.findDOMNode(d.current)}),[]),k=Object(l.useCallback)((function(){f.clear(),b.current="show",w.show?f.set((function(){"show"===b.current&&j(!0)}),w.show):j(!0)}),[w.show,f]),x=Object(l.useCallback)((function(){f.clear(),b.current="hide",w.hide?f.set((function(){"hide"===b.current&&j(!1)}),w.hide):j(!1)}),[w.hide,f]),R=Object(l.useCallback)((function(e){k(e),g&&g(e)}),[k,g]),B=Object(l.useCallback)((function(e){x(e),C&&C(e)}),[x,C]),A=Object(l.useCallback)((function(e){j((function(e){return!e})),P&&P(e)}),[P]),S=Object(l.useCallback)((function(e){M(k,e,"fromElement")}),[k]),q=Object(l.useCallback)((function(e){M(x,e,"toElement")}),[x]),H={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){t.elements.reference.removeAttribute("aria-describedby")}},fn:function(e){var t=e.state.elements,a=t.popper,r=t.reference;if(h&&r){var n=a.getAttribute("role")||"";a.id&&"tooltip"===n.toLowerCase()&&r.setAttribute("aria-describedby",a.id)}}},U=null==t?[]:[].concat(t),F={};return-1!==U.indexOf("click")&&(F.onClick=A),-1!==U.indexOf("focus")&&(F.onFocus=R,F.onBlur=B),-1!==U.indexOf("hover")&&(F.onMouseOver=S,F.onMouseOut=q),i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{ref:d},Object(l.cloneElement)(y,F)),i.a.createElement(D,Object(s.a)({},m,{popperConfig:Object(s.a)({},o,{modifiers:[H].concat(o.modifiers||[])}),show:h,onHide:x,target:T}),a))}q.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var H=q,U=(a(70),a(7)),F=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,n=e.className,o=e.style,c=e.children,l=e.arrowProps,p=(e.popper,e.show,Object(u.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));return a=Object(U.b)(a,"tooltip"),i.a.createElement("div",Object(s.a)({ref:t,style:o,role:"tooltip","x-placement":r,className:j()(n,a,"bs-tooltip-"+r)},p),i.a.createElement("div",Object(s.a)({className:"arrow"},l)),i.a.createElement("div",{className:a+"-inner"},c))}));F.defaultProps={placement:"right"},F.displayName="Tooltip";var z=F,J=a(90),L=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=Object(u.a)(e,["bsPrefix","className"]),o=Object(U.b)(a,"btn-toolbar");return i.a.createElement("div",Object(s.a)({},n,{ref:t,className:j()(r,o)}))}));L.displayName="ButtonToolbar",L.defaultProps={role:"toolbar"};var I=L,W=i.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,o=e.className,c=e.children,l=Object(u.a)(e,["as","bsPrefix","className","children"]);return n=Object(U.b)(n,"popover-header"),i.a.createElement(r,Object(s.a)({ref:t},l,{className:j()(n,o)}),c)})),G=i.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,o=e.className,c=e.children,l=Object(u.a)(e,["as","bsPrefix","className","children"]);return n=Object(U.b)(n,"popover-body"),i.a.createElement(r,Object(s.a)({ref:t},l,{className:j()(o,n)}),c)})),K=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,n=e.className,o=e.style,c=e.children,l=e.content,p=e.arrowProps,m=(e.popper,e.show,Object(u.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),d=Object(U.b)(a,"popover");return i.a.createElement("div",Object(s.a)({ref:t,role:"tooltip",style:o,"x-placement":r,className:j()(n,d,"bs-popover-"+r)},m),i.a.createElement("div",Object(s.a)({className:"arrow"},p)),l?i.a.createElement(G,null,c):c)}));K.defaultProps={placement:"right"},K.Title=W,K.Content=G;var Q=K;a.d(t,"Tooltips",(function(){return V}));var V=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Tooltips "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Tooltips")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Basic tooltip"),i.a.createElement("p",{className:"card-description"},"Basic tooltip demo that appears on hover"),i.a.createElement("p",null,"Hover the below button for interactive demo"),i.a.createElement(H,{overlay:i.a.createElement(z,{id:"tooltip-disabled"},"Basic Tooltip")},i.a.createElement("span",{className:"d-inline-block"},i.a.createElement(J.a,{variant:"primary",style:{pointerEvents:"none"}},"Hover me")))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Tooltip positions"),i.a.createElement("p",{className:"card-description"},"Add attribute ",i.a.createElement("code",null,"placement={position}")," to the element"),i.a.createElement("div",{className:"tooltip-demo"},i.a.createElement(I,null,["top","right","bottom","left"].map((function(e){return i.a.createElement(H,{key:e,placement:e,overlay:i.a.createElement(z,{id:"tooltip-".concat(e)},"Tooltip on ",i.a.createElement("strong",null,e),".")},i.a.createElement(J.a,{variant:"primary"},"Tooltip on ",e))}))))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Tooltip Colors"),i.a.createElement("p",{className:"card-description"},"Add attribute ",i.a.createElement("code",null,"className={`tooltip-{color}`}")," to the element"),i.a.createElement("div",{className:"tooltip-demo"},i.a.createElement(I,null,["success","info","warning","primary","danger"].map((function(e){return i.a.createElement(H,{overlay:i.a.createElement(z,{className:"tooltip-".concat(e),id:"tooltip-".concat(e)},"Tooltip on ",i.a.createElement("strong",null,e),".")},i.a.createElement(J.a,{variant:"".concat(e)},"Tooltip ",e))}))))))),i.a.createElement("div",{className:"col-md-6 stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Basic popover"),i.a.createElement("p",{className:"card-description"},"Basic popover demo that appears on click"),i.a.createElement("p",null,"Click the below button for interactive demo"),i.a.createElement(H,{trigger:"click",placement:"right",overlay:i.a.createElement(Q,{id:"popover-basic"},i.a.createElement(Q.Title,{as:"h3"},"Popover title"),i.a.createElement(Q.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},i.a.createElement(J.a,{variant:"primary"},"Click me"))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Popover positions"),i.a.createElement("p",{className:"card-description"},"Add attribute ",i.a.createElement("code",null,'placement="{position}"')," to the element"),i.a.createElement("div",{className:"popover-demo"},i.a.createElement(I,null,["top","right","bottom","left"].map((function(e){return i.a.createElement(H,{trigger:"click",key:e,placement:e,overlay:i.a.createElement(Q,{id:"popover-positioned-".concat(e)},i.a.createElement(Q.Title,{as:"h3"},"Popover ".concat(e)),i.a.createElement(Q.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},i.a.createElement(J.a,{variant:"primary"},"Popover on ",e))}))))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Popover Colors"),i.a.createElement("p",{className:"card-description"},"Add attribute ",i.a.createElement("code",null,'placement="{position}"')," to the element"),i.a.createElement("div",{className:"popover-demo"},i.a.createElement(I,null,["success","info","warning","primary","danger"].map((function(e){return i.a.createElement(H,{trigger:"click",overlay:i.a.createElement(Q,{id:"popover-color-".concat(e),className:"popover-".concat(e)},i.a.createElement(Q.Title,{as:"h3"},"Popover ".concat(e)),i.a.createElement(Q.Content,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam."))},i.a.createElement(J.a,{variant:"".concat(e)},"Popover on ",e))})))))))))}}]),a}(l.Component);t.default=V},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(42),n=a(0),o=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function c(e,t){var a=Object(n.useState)((function(){return o(e)})),r=a[0],c=a[1];if(!r){var l=o(e);l&&c(l)}return Object(n.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(n.useEffect)((function(){var t=o(e);t!==r&&c(t)}),[e,r]),r}},350:function(e,t,a){"use strict";var r=a(0);function n(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=47.ff6cd9e8.chunk.js.map