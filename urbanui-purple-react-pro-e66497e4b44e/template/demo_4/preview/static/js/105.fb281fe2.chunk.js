(window["webpackJsonppurple-react-pro"]=window["webpackJsonppurple-react-pro"]||[]).push([[105],{1091:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(6),s=n.n(i),a=n(5),u=n.n(a),l=n(64),c=n.n(l);function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e&&e.apply(void 0,n)}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var f="react-contextmenu",h="react-contextmenu--visible",b="react-contextmenu-wrapper",v="react-contextmenu-item",m="react-contextmenu-item--active",y="react-contextmenu-item--disabled",g="react-contextmenu-item--divider",M="react-contextmenu-item--selected",w="react-contextmenu-submenu",O={},C=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),E="REACT_CONTEXTMENU_SHOW",T="REACT_CONTEXTMENU_HIDE";function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=void 0;"function"===typeof window.CustomEvent?o=new window.CustomEvent(e,{detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),n&&(n.dispatchEvent(o),c()(O,t))}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];k(E,c()({},e,{type:E}),t)}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];k(T,c()({},e,{type:T}),t)}var P=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleShowEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].show(e)},this.handleHideEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].hide(e)},this.register=function(e,n){var o=Math.random().toString(36).substring(7);return t.callbacks[o]={show:e,hide:n},o},this.unregister=function(e){e&&t.callbacks[e]&&delete t.callbacks[e]},this.callbacks={},C&&(window.addEventListener(E,this.handleShowEvent),window.addEventListener(T,this.handleHideEvent))},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var R=function(e){function t(){var e,n,o;I(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleClick=function(e){0!==e.button&&1!==e.button&&e.preventDefault(),o.props.disabled||o.props.divider||(d(o.props.onClick,e,c()({},o.props.data,O.data),O.target),o.props.preventClose||H())},_(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),x(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.attributes,i=n.children,s=n.className,a=n.disabled,l=n.divider,c=n.selected,d=u()(s,v,o.className,(L(e={},u()(y,o.disabledClassName),a),L(e,u()(g,o.dividerClassName),l),L(e,u()(M,o.selectedClassName),c),e));return r.a.createElement("div",j({},o,{className:d,role:"menuitem",tabIndex:"-1","aria-disabled":a?"true":"false","aria-orientation":l?"horizontal":null,ref:function(e){t.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick}),l?null:i)}}]),t}(o.Component);R.propTypes={attributes:s.a.object,children:s.a.node,className:s.a.string,data:s.a.object,disabled:s.a.bool,divider:s.a.bool,onClick:s.a.func,onMouseLeave:s.a.func,onMouseMove:s.a.func,preventClose:s.a.bool,selected:s.a.bool},R.defaultProps={attributes:{},children:null,className:"",data:{},disabled:!1,divider:!1,onClick:function(){return null},onMouseMove:function(){return null},onMouseLeave:function(){return null},preventClose:!1,selected:!1};var N=R;var D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return K.call(n),n.seletedItemRef=null,n.state={selectedItem:null,forceSubMenuOpen:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.Component);D.propTypes={children:s.a.node.isRequired};var K=function(){var e=this;this.handleKeyNavigation=function(t){if(!1!==e.state.isVisible)switch(t.keyCode){case 37:case 27:t.preventDefault(),e.hideMenu(t);break;case 38:t.preventDefault(),e.selectChildren(!0);break;case 40:t.preventDefault(),e.selectChildren(!1);break;case 39:e.tryToOpenSubMenu(t);break;case 13:t.preventDefault(),e.tryToOpenSubMenu(t);var n=e.seletedItemRef&&e.seletedItemRef.props&&e.seletedItemRef.props.disabled;e.seletedItemRef&&e.seletedItemRef.ref instanceof HTMLElement&&!n?e.seletedItemRef.ref.click():e.hideMenu(t)}},this.handleForceClose=function(){e.setState({forceSubMenuOpen:!1})},this.tryToOpenSubMenu=function(t){e.state.selectedItem&&e.state.selectedItem.type===e.getSubMenuType()&&(t.preventDefault(),e.setState({forceSubMenuOpen:!0}))},this.selectChildren=function(t){var n=e.state.selectedItem,o=[],i=0,s={};if(r.a.Children.forEach(e.props.children,(function t(n,a){n&&([N,e.getSubMenuType()].indexOf(n.type)<0?r.a.Children.forEach(n.props.children,t):n.props.divider||(n.props.disabled&&(++i,s[a]=!0),o.push(n)))})),i!==o.length){var a=function(e){var n=e;do{t?--n:++n,n<0?n=o.length-1:n>=o.length&&(n=0)}while(n!==e&&s[n]);return n===e?null:n}(o.indexOf(n));null!==a&&e.setState({selectedItem:o[a],forceSubMenuOpen:!1})}},this.onChildMouseMove=function(t){e.state.selectedItem!==t&&e.setState({selectedItem:t,forceSubMenuOpen:!1})},this.onChildMouseLeave=function(){e.setState({selectedItem:null,forceSubMenuOpen:!1})},this.renderChildren=function(t){return r.a.Children.map(t,(function(t){var n={};return r.a.isValidElement(t)?[N,e.getSubMenuType()].indexOf(t.type)<0?(n.children=e.renderChildren(t.props.children),r.a.cloneElement(t,n)):(n.onMouseLeave=e.onChildMouseLeave.bind(e),t.type===e.getSubMenuType()&&(n.forceOpen=e.state.forceSubMenuOpen&&e.state.selectedItem===t,n.forceClose=e.handleForceClose,n.parentKeyNavigationHandler=e.handleKeyNavigation),t.props.divider||e.state.selectedItem!==t?(n.onMouseMove=function(){return e.onChildMouseMove(t)},r.a.cloneElement(t,n)):(n.selected=!0,n.ref=function(t){e.seletedItemRef=t},r.a.cloneElement(t,n))):t}))}},A=D,U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getMenuPosition=function(){var e=window,t=e.innerWidth,o=e.innerHeight,r=n.subMenu.getBoundingClientRect(),i={};return r.bottom>o?i.bottom=0:i.top=0,r.right<t?i.left="100%":i.right="100%",i},n.getRTLMenuPosition=function(){var e=window.innerHeight,t=n.subMenu.getBoundingClientRect(),o={};return t.bottom>e?o.bottom=0:o.top=0,t.left<0?o.left="100%":o.right="100%",o},n.hideSubMenu=function(e){e.detail&&e.detail.id&&n.menu&&e.detail.id!==n.menu.id||(n.props.forceOpen&&n.props.forceClose(),n.setState({visible:!1,selectedItem:null}),n.unregisterHandlers())},n.handleClick=function(e){e.preventDefault(),n.props.disabled||(d(n.props.onClick,e,c()({},n.props.data,O.data),O.target),n.props.onClick&&!n.props.preventCloseOnClick&&H())},n.handleMouseEnter=function(){n.closetimer&&clearTimeout(n.closetimer),n.props.disabled||n.state.visible||(n.opentimer=setTimeout((function(){return n.setState({visible:!0,selectedItem:null})}),n.props.hoverDelay))},n.handleMouseLeave=function(){n.opentimer&&clearTimeout(n.opentimer),n.state.visible&&(n.closetimer=setTimeout((function(){return n.setState({visible:!1,selectedItem:null})}),n.props.hoverDelay))},n.menuRef=function(e){n.menu=e},n.subMenuRef=function(e){n.subMenu=e},n.registerHandlers=function(){document.removeEventListener("keydown",n.props.parentKeyNavigationHandler),document.addEventListener("keydown",n.handleKeyNavigation)},n.unregisterHandlers=function(e){document.removeEventListener("keydown",n.handleKeyNavigation),e||document.addEventListener("keydown",n.props.parentKeyNavigationHandler)},n.state=c()({},n.state,{visible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),V(t,[{key:"componentDidMount",value:function(){this.listenId=P.register((function(){}),this.hideSubMenu)}},{key:"getSubMenuType",value:function(){return t}},{key:"shouldComponentUpdate",value:function(e,t){return this.isVisibilityChange=(this.state.visible!==t.visible||this.props.forceOpen!==e.forceOpen)&&!(this.state.visible&&e.forceOpen)&&!(this.props.forceOpen&&t.visible),!0}},{key:"componentDidUpdate",value:function(){var e=this;if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)((function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),p(t,"top")&&(e.subMenu.style.top=t.top),p(t,"left")&&(e.subMenu.style.left=t.left),p(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),p(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(h),e.registerHandlers(),e.setState({selectedItem:null})}))}else{this.subMenu.addEventListener("transitionend",(function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()})),this.subMenu.classList.remove(h)}}},{key:"componentWillUnmount",value:function(){this.listenId&&P.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}},{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.attributes,i=t.disabled,s=t.title,a=t.selected,l=this.state.visible,c={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:u()(v,w,o.listClassName),style:{position:"relative"}},d={className:u()(v,o.className,(e={},q(e,u()(y,o.disabledClassName),i),q(e,u()(m,o.visibleClassName),l),q(e,u()(M,o.selectedClassName),a),e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},p={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:u()(f,this.props.className)};return r.a.createElement("nav",U({},c,{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),r.a.createElement("div",U({},o,d),s),r.a.createElement("nav",U({},p,{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))}}]),t}(A);B.propTypes={children:s.a.node.isRequired,attributes:s.a.object,title:s.a.node.isRequired,className:s.a.string,disabled:s.a.bool,hoverDelay:s.a.number,rtl:s.a.bool,selected:s.a.bool,onMouseMove:s.a.func,onMouseOut:s.a.func,forceOpen:s.a.bool,forceClose:s.a.func,parentKeyNavigationHandler:s.a.func},B.defaultProps={disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}};var X=B,z=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var W=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.registerHandlers=function(){document.addEventListener("mousedown",n.handleOutsideClick),document.addEventListener("touchstart",n.handleOutsideClick),n.props.preventHideOnScroll||document.addEventListener("scroll",n.handleHide),n.props.preventHideOnContextMenu||document.addEventListener("contextmenu",n.handleHide),document.addEventListener("keydown",n.handleKeyNavigation),n.props.preventHideOnResize||window.addEventListener("resize",n.handleHide)},n.unregisterHandlers=function(){document.removeEventListener("mousedown",n.handleOutsideClick),document.removeEventListener("touchstart",n.handleOutsideClick),document.removeEventListener("scroll",n.handleHide),document.removeEventListener("contextmenu",n.handleHide),document.removeEventListener("keydown",n.handleKeyNavigation),window.removeEventListener("resize",n.handleHide)},n.handleShow=function(e){if(e.detail.id===n.props.id&&!n.state.isVisible){var t=e.detail.position,o=t.x,r=t.y;n.setState({isVisible:!0,x:o,y:r}),n.registerHandlers(),d(n.props.onShow,e)}},n.handleHide=function(e){!n.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==n.props.id||(n.unregisterHandlers(),n.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),d(n.props.onHide,e))},n.handleOutsideClick=function(e){n.menu.contains(e.target)||H()},n.handleMouseLeave=function(e){e.preventDefault(),d(n.props.onMouseLeave,e,c()({},n.props.data,O.data),O.target),n.props.hideOnLeave&&H()},n.handleContextMenu=function(e){e.preventDefault(),n.handleHide(e)},n.hideMenu=function(e){27!==e.keyCode&&13!==e.keyCode||H()},n.getMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,s=r.innerHeight,a=n.menu.getBoundingClientRect();return t+a.height>s&&(o.top-=a.height),e+a.width>i&&(o.left-=a.width),o.top<0&&(o.top=a.height<s?(s-a.height)/2:0),o.left<0&&(o.left=a.width<i?(i-a.width)/2:0),o},n.getRTLMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var r=window,i=r.innerWidth,s=r.innerHeight,a=n.menu.getBoundingClientRect();return o.left=e-a.width,t+a.height>s&&(o.top-=a.height),o.left<0&&(o.left+=a.width),o.top<0&&(o.top=a.height<s?(s-a.height)/2:0),o.left+a.width>i&&(o.left=a.width<i?(i-a.width)/2:0),o},n.menuRef=function(e){n.menu=e},n.state=c()({},n.state,{x:0,y:0,isVisible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),z(t,[{key:"getSubMenuType",value:function(){return X}},{key:"componentDidMount",value:function(){this.listenId=P.register(this.handleShow,this.handleHide)}},{key:"componentDidUpdate",value:function(){var e=this,t=window.requestAnimationFrame||setTimeout;this.state.isVisible?t((function(){var n=e.state,o=n.x,r=n.y,i=e.props.rtl?e.getRTLMenuPosition(o,r):e.getMenuPosition(o,r),s=i.top,a=i.left;t((function(){e.menu&&(e.menu.style.top=s+"px",e.menu.style.left=a+"px",e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")}))})):t((function(){e.menu&&(e.menu.style.opacity=0,e.menu.style.pointerEvents="none")}))}},{key:"componentWillUnmount",value:function(){this.listenId&&P.unregister(this.listenId),this.unregisterHandlers()}},{key:"render",value:function(){var e,t,n,o=this.props,i=o.children,s=o.className,a=o.style,l=this.state.isVisible,d=c()({},a,{position:"fixed",opacity:0,pointerEvents:"none"}),p=u()(f,s,(n=l,(t=h)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.a.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:d,className:p,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(i))}}]),t}(A);W.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,data:s.a.object,className:s.a.string,hideOnLeave:s.a.bool,rtl:s.a.bool,onHide:s.a.func,onMouseLeave:s.a.func,onShow:s.a.func,preventHideOnContextMenu:s.a.bool,preventHideOnResize:s.a.bool,preventHideOnScroll:s.a.bool,style:s.a.object},W.defaultProps={className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},preventHideOnContextMenu:!1,preventHideOnResize:!1,preventHideOnScroll:!1,style:{}};var Y=W,F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var Q=function(e){function t(){var e,n,o;J(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=G(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.touchHandled=!1,o.handleMouseDown=function(e){o.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),o.mouseDownTimeoutId=setTimeout((function(){return o.handleContextClick(e)}),o.props.holdToDisplay)),d(o.props.attributes.onMouseDown,e)},o.handleMouseUp=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseUp,e)},o.handleMouseOut=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseOut,e)},o.handleTouchstart=function(e){o.touchHandled=!1,o.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),o.touchstartTimeoutId=setTimeout((function(){o.handleContextClick(e),o.touchHandled=!0}),o.props.holdToDisplay)),d(o.props.attributes.onTouchStart,e)},o.handleTouchEnd=function(e){o.touchHandled&&e.preventDefault(),clearTimeout(o.touchstartTimeoutId),d(o.props.attributes.onTouchEnd,e)},o.handleContextMenu=function(e){e.button===o.props.mouseButton&&o.handleContextClick(e),d(o.props.attributes.onContextMenu,e)},o.handleMouseClick=function(e){e.button===o.props.mouseButton&&o.handleContextClick(e),d(o.props.attributes.onClick,e)},o.handleContextClick=function(e){if(!o.props.disable&&(!o.props.disableIfShiftIsPressed||!e.shiftKey)){e.preventDefault(),e.stopPropagation();var t=e.clientX||e.touches&&e.touches[0].pageX,n=e.clientY||e.touches&&e.touches[0].pageY;o.props.posX&&(t-=o.props.posX),o.props.posY&&(n-=o.props.posY),H();var r=d(o.props.collect,o.props),i={position:{x:t,y:n},target:o.elem,id:o.props.id};r&&"function"===typeof r.then?r.then((function(t){i.data=c()({},t,{target:e.target}),S(i)})):(i.data=c()({},r,{target:e.target}),S(i))}},o.elemRef=function(e){o.elem=e},G(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),F(t,[{key:"render",value:function(){var e=this.props,t=e.renderTag,n=e.attributes,o=e.children,i=c()({},n,{className:u()(b,n.className),onContextMenu:this.handleContextMenu,onClick:this.handleMouseClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return r.a.createElement(t,i,o)}}]),t}(o.Component);Q.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,attributes:s.a.object,collect:s.a.func,disable:s.a.bool,holdToDisplay:s.a.number,posX:s.a.number,posY:s.a.number,renderTag:s.a.oneOfType([s.a.node,s.a.func]),mouseButton:s.a.number,disableIfShiftIsPressed:s.a.bool},Q.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,mouseButton:2,disableIfShiftIsPressed:!1};var Z=Q;Object.assign,function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}}();[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Object.keys(Z.propTypes)),["children"]);n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return Z})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return X}))}}]);
//# sourceMappingURL=105.fb281fe2.chunk.js.map