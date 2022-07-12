(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[43],{664:function(e,a,t){"use strict";t.r(a),t.d(a,"Modals",(function(){return b}));var l=t(366),n=t(11),s=t(12),o=t(13),i=t(14),c=t(32),r=t(15),m=t(0),d=t.n(m),u=t(72),h=t(686),v=t(52),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={showBasicModal:!1,showSmallModal:!1,showLargeModal:!1,showAlertModal1:!1,showAlertModal2:!1,animationModal:{show:!1,className:""}},t.closeModal=t.closeModal.bind(Object(c.a)(t)),t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"closeModal",value:function(e){"basic"===e?this.setState({showBasicModal:!1}):"small"===e?this.setState({showSmallModal:!1}):"large"===e?this.setState({showLargeModal:!1}):"alert1"===e?this.setState({showAlertModal1:!1}):"alert2"===e&&this.setState({showAlertModal2:!1})}},{key:"showAnimationModal",value:function(e){console.log("clicked"),this.setState({animationModal:Object(l.a)({},this.state.animationModal,{show:!0})})}},{key:"closeAnimationModal",value:function(){this.setState({animationModal:Object(l.a)({},this.state.animationModal,{show:!1})})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",{className:"container d-flex p-md-0"},d.a.createElement(u.a,null),d.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},d.a.createElement("div",{className:"az-content-breadcrumb"},d.a.createElement("span",null,"Components"),d.a.createElement("span",null,"UI Elements"),d.a.createElement("span",null,"Modals")),d.a.createElement("h2",{className:"az-content-title"},"Modals"),d.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Modal"),d.a.createElement("p",{className:"mg-b-20"},"Below is the static example of the basic modal."),d.a.createElement("div",{className:"pd-20 bg-gray-800"},d.a.createElement(h.a.Dialog,null,d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo"},"Save changes"),d.a.createElement(v.a,{variant:"outline-light"},"Close")))),d.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},d.a.createElement(v.a,{onClick:function(){return e.setState({showBasicModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),d.a.createElement(h.a,{show:this.state.showBasicModal,onHide:function(){return e.closeModal("basic")}},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo",onClick:function(){return e.closeModal("basic")}},"Save changes"),d.a.createElement(v.a,{variant:"outline-light",onClick:function(){return e.closeModal("basic")}},"Close")))),d.a.createElement("hr",{className:"mg-y-30"}),d.a.createElement("div",{className:"az-content-label mg-b-5"},"Small Modal"),d.a.createElement("p",{className:"mg-b-20"},"Below is the static example of small modal."),d.a.createElement("div",{className:"pd-20 bg-gray-800"},d.a.createElement(h.a.Dialog,{size:"sm"},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo"},"Save changes"),d.a.createElement(v.a,{variant:"outline-light"},"Close")))),d.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},d.a.createElement(v.a,{onClick:function(){return e.setState({showSmallModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),d.a.createElement(h.a,{show:this.state.showSmallModal,size:"sm",onHide:function(){return e.closeModal("small")}},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo",onClick:function(){return e.closeModal("small")}},"Save changes"),d.a.createElement(v.a,{variant:"outline-light",onClick:function(){return e.closeModal("small")}},"Close")))),d.a.createElement("hr",{className:"mg-y-30"}),d.a.createElement("div",{className:"az-content-label mg-b-5"},"Large Modal"),d.a.createElement("p",{className:"mg-b-20"},"Below is the static example of large modal."),d.a.createElement("div",{className:"pd-20 bg-gray-800"},d.a.createElement(h.a.Dialog,{size:"lg"},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo"},"Save changes"),d.a.createElement(v.a,{variant:"outline-light"},"Close")))),d.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},d.a.createElement(v.a,{onClick:function(){return e.setState({showLargeModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),d.a.createElement(h.a,{show:this.state.showLargeModal,size:"lg",onHide:function(){return e.closeModal("large")}},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo",onClick:function(){return e.closeModal("large")}},"Save changes"),d.a.createElement(v.a,{variant:"outline-light",onClick:function(){return e.closeModal("large")}},"Close")))),d.a.createElement("hr",{className:"mg-y-30"}),d.a.createElement("div",{className:"az-content-label mg-b-5"},"Modal Alert Messages"),d.a.createElement("p",{className:"mg-b-20"},"Below is the static example of modal alert messages."),d.a.createElement("div",{className:"pd-20 bg-gray-800"},d.a.createElement(h.a.Dialog,null,d.a.createElement(h.a.Body,{className:"tx-center"},d.a.createElement("button",{type:"button",className:"close","aria-label":"Close"},d.a.createElement("span",{"aria-hidden":"true"},"\xd7")),d.a.createElement("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"}),d.a.createElement("h4",{className:"tx-success mg-b-20"},"Congratulations!"),d.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),d.a.createElement("button",{type:"button",className:"btn btn-success pd-x-25"},"Continue")))),d.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},d.a.createElement(v.a,{onClick:function(){return e.setState({showAlertModal1:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),d.a.createElement(h.a,{show:this.state.showAlertModal1,onHide:function(){return e.closeModal("alert1")}},d.a.createElement(h.a.Body,{className:"tx-center"},d.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.closeModal("alert1")}},d.a.createElement("span",{"aria-hidden":"true"},"\xd7")),d.a.createElement("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"}),d.a.createElement("h4",{className:"tx-success mg-b-20"},"Congratulations!"),d.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),d.a.createElement("button",{type:"button",className:"btn btn-success pd-x-25",onClick:function(){return e.closeModal("alert1")}},"Continue")))),d.a.createElement("div",{className:"pd-20 bg-gray-800 mg-t-20"},d.a.createElement(h.a.Dialog,null,d.a.createElement(h.a.Body,{className:"tx-center"},d.a.createElement("button",{type:"button",className:"close","aria-label":"Close"},d.a.createElement("span",{"aria-hidden":"true"},"\xd7")),d.a.createElement("i",{className:"icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"}),d.a.createElement("h4",{className:"tx-danger mg-b-20"},"Error: Cannot process your entry!"),d.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),d.a.createElement("button",{type:"button",className:"btn btn-danger pd-x-25"},"Continue")))),d.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},d.a.createElement(v.a,{onClick:function(){return e.setState({showAlertModal2:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),d.a.createElement(h.a,{show:this.state.showAlertModal2,onHide:function(){return e.closeModal("alert2")}},d.a.createElement(h.a.Body,{className:"tx-center"},d.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.closeModal("alert2")}},d.a.createElement("span",{"aria-hidden":"true"},"\xd7")),d.a.createElement("i",{className:"icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"}),d.a.createElement("h4",{className:"tx-danger mg-b-20"},"Error: Cannot process your entry!"),d.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),d.a.createElement("button",{type:"button",className:"btn btn-danger pd-x-25",onClick:function(){return e.closeModal("alert2")}},"Continue")))),d.a.createElement("hr",{className:"mg-y-30"}),d.a.createElement("div",{className:"az-content-label mg-b-5"},"Modal Animation Effects"),d.a.createElement("p",{className:"mg-b-20"},"Below are different kind of effects to choose from."),d.a.createElement("div",{className:"row row-sm"},d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3"},d.a.createElement(v.a,{onClick:function(){return e.showAnimationModal("effect-scale")},variant:"dark btn-block"},"Scale")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3"},d.a.createElement(v.a,{onClick:function(){return e.showAnimationModal("effect-slide-in-right")},variant:"dark btn-block"},"Slide In Right")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-md-t-0"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-slide-in-bottom")},variant:"dark btn-block"},"Slide In Bottom")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-xl-t-0"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-newspaper")},variant:"dark btn-block"},"Newspaper")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-fall")},variant:"dark btn-block"},"Fall")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-flip-horizontal")},variant:"dark btn-block"},"Flip Horizontal")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-flip-vertical")},variant:"dark btn-block"},"Flip Vertical")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-super-scaled")},variant:"dark btn-block"},"Super Scaled")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-sign")},variant:"dark btn-block"},"Sign")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-rotate-bottom")},variant:"dark btn-block"},"Rotate Bottom")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-rotate-left")},variant:"dark btn-block"},"Rotate Left")),d.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},d.a.createElement(v.a,{onClick:function(){e.showAnimationModal("effect-just-me")},variant:"dark btn-block"},"Just Me"))),d.a.createElement(h.a,{show:this.state.animationModal.show,className:this.state.animationModal.className,onHide:function(){return e.closeAnimationModal()}},d.a.createElement(h.a.Header,{closeButton:!0},d.a.createElement(h.a.Title,null,"Message Preview")),d.a.createElement(h.a.Body,null,d.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),d.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),d.a.createElement(h.a.Footer,null,d.a.createElement(v.a,{variant:"indigo",onClick:function(){return e.closeAnimationModal()}},"Save changes"),d.a.createElement(v.a,{variant:"outline-light",onClick:function(){return e.closeAnimationModal()}},"Close"))),d.a.createElement("table",{className:"table az-table-reference"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{className:"wd-40p"},"Class Reference"),d.a.createElement("th",{className:"wd-60p"},"Value"))),d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("code",{className:"pd-0 bg-transparent"},'className="modal fade effect-[value]"')),d.a.createElement("td",null,"scale | slide-in-right | slide-in-bottom | newspaper | fall | flip-horizontal | flip-vertical | super-scaled | sign | rotate-bottom | rotate-left | just-me")))),d.a.createElement("div",{className:"mg-lg-b-30"}))))}}]),a}(m.Component);a.default=b},72:function(e,a,t){"use strict";var l=t(11),n=t(12),s=t(13),o=t(14),i=t(15),c=t(0),r=t.n(c),m=t(1),d=t(16),u=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"az-content-left az-content-left-components"},r.a.createElement("div",{className:"component-item"},r.a.createElement("label",null,"UI Elements"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),r.a.createElement(m.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),r.a.createElement(m.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),r.a.createElement(m.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),r.a.createElement(m.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),r.a.createElement(m.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),r.a.createElement(m.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),r.a.createElement(m.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),r.a.createElement(m.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),r.a.createElement(m.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),r.a.createElement(m.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),r.a.createElement(m.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),r.a.createElement(m.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),r.a.createElement(m.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),r.a.createElement(m.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),r.a.createElement(m.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),r.a.createElement(m.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),r.a.createElement(m.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),r.a.createElement(m.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),r.a.createElement(m.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),r.a.createElement(m.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),r.a.createElement(m.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),r.a.createElement("label",null,"Forms"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),r.a.createElement(m.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),r.a.createElement(m.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),r.a.createElement(m.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),r.a.createElement(m.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),r.a.createElement("label",null,"Charts"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),r.a.createElement("label",null,"Tables"),r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement(m.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),r.a.createElement(m.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),a}(c.Component);a.a=Object(d.g)(u)}}]);
//# sourceMappingURL=43.ff1f4162.chunk.js.map