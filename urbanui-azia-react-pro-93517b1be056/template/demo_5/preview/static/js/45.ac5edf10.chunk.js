(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[45],{662:function(e,a,t){"use strict";t.r(a),t.d(a,"Modals",(function(){return v}));var l=t(641),n=t(12),s=t(13),o=t(34),i=t(15),c=t(14),r=t(0),m=t.n(r),d=t(77),u=t(684),h=t(53),v=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={showBasicModal:!1,showSmallModal:!1,showLargeModal:!1,showAlertModal1:!1,showAlertModal2:!1,animationModal:{show:!1,className:""}},l.closeModal=l.closeModal.bind(Object(o.a)(l)),l}return Object(s.a)(t,[{key:"closeModal",value:function(e){"basic"===e?this.setState({showBasicModal:!1}):"small"===e?this.setState({showSmallModal:!1}):"large"===e?this.setState({showLargeModal:!1}):"alert1"===e?this.setState({showAlertModal1:!1}):"alert2"===e&&this.setState({showAlertModal2:!1})}},{key:"showAnimationModal",value:function(e){console.log("clicked"),this.setState({animationModal:Object(l.a)(Object(l.a)({},this.state.animationModal),{},{show:!0})})}},{key:"closeAnimationModal",value:function(){this.setState({animationModal:Object(l.a)(Object(l.a)({},this.state.animationModal),{},{show:!1})})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"container d-flex p-md-0"},m.a.createElement(d.a,null),m.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},m.a.createElement("div",{className:"az-content-breadcrumb"},m.a.createElement("span",null,"Components"),m.a.createElement("span",null,"UI Elements"),m.a.createElement("span",null,"Modals")),m.a.createElement("h2",{className:"az-content-title"},"Modals"),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Basic Modal"),m.a.createElement("p",{className:"mg-b-20"},"Below is the static example of the basic modal."),m.a.createElement("div",{className:"pd-20 bg-gray-800"},m.a.createElement(u.a.Dialog,null,m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo"},"Save changes"),m.a.createElement(h.a,{variant:"outline-light"},"Close")))),m.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},m.a.createElement(h.a,{onClick:function(){return e.setState({showBasicModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),m.a.createElement(u.a,{show:this.state.showBasicModal,onHide:function(){return e.closeModal("basic")}},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo",onClick:function(){return e.closeModal("basic")}},"Save changes"),m.a.createElement(h.a,{variant:"outline-light",onClick:function(){return e.closeModal("basic")}},"Close")))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Small Modal"),m.a.createElement("p",{className:"mg-b-20"},"Below is the static example of small modal."),m.a.createElement("div",{className:"pd-20 bg-gray-800"},m.a.createElement(u.a.Dialog,{size:"sm"},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo"},"Save changes"),m.a.createElement(h.a,{variant:"outline-light"},"Close")))),m.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},m.a.createElement(h.a,{onClick:function(){return e.setState({showSmallModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),m.a.createElement(u.a,{show:this.state.showSmallModal,size:"sm",onHide:function(){return e.closeModal("small")}},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo",onClick:function(){return e.closeModal("small")}},"Save changes"),m.a.createElement(h.a,{variant:"outline-light",onClick:function(){return e.closeModal("small")}},"Close")))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Large Modal"),m.a.createElement("p",{className:"mg-b-20"},"Below is the static example of large modal."),m.a.createElement("div",{className:"pd-20 bg-gray-800"},m.a.createElement(u.a.Dialog,{size:"lg"},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo"},"Save changes"),m.a.createElement(h.a,{variant:"outline-light"},"Close")))),m.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},m.a.createElement(h.a,{onClick:function(){return e.setState({showLargeModal:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),m.a.createElement(u.a,{show:this.state.showLargeModal,size:"lg",onHide:function(){return e.closeModal("large")}},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo",onClick:function(){return e.closeModal("large")}},"Save changes"),m.a.createElement(h.a,{variant:"outline-light",onClick:function(){return e.closeModal("large")}},"Close")))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Modal Alert Messages"),m.a.createElement("p",{className:"mg-b-20"},"Below is the static example of modal alert messages."),m.a.createElement("div",{className:"pd-20 bg-gray-800"},m.a.createElement(u.a.Dialog,null,m.a.createElement(u.a.Body,{className:"tx-center"},m.a.createElement("button",{type:"button",className:"close","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"}),m.a.createElement("h4",{className:"tx-success mg-b-20"},"Congratulations!"),m.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),m.a.createElement("button",{type:"button",className:"btn btn-success pd-x-25"},"Continue")))),m.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},m.a.createElement(h.a,{onClick:function(){return e.setState({showAlertModal1:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),m.a.createElement(u.a,{show:this.state.showAlertModal1,onHide:function(){return e.closeModal("alert1")}},m.a.createElement(u.a.Body,{className:"tx-center"},m.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.closeModal("alert1")}},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"}),m.a.createElement("h4",{className:"tx-success mg-b-20"},"Congratulations!"),m.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),m.a.createElement("button",{type:"button",className:"btn btn-success pd-x-25",onClick:function(){return e.closeModal("alert1")}},"Continue")))),m.a.createElement("div",{className:"pd-20 bg-gray-800 mg-t-20"},m.a.createElement(u.a.Dialog,null,m.a.createElement(u.a.Body,{className:"tx-center"},m.a.createElement("button",{type:"button",className:"close","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("i",{className:"icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"}),m.a.createElement("h4",{className:"tx-danger mg-b-20"},"Error: Cannot process your entry!"),m.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),m.a.createElement("button",{type:"button",className:"btn btn-danger pd-x-25"},"Continue")))),m.a.createElement("div",{className:"tx-center pd-y-20 bg-gray-200"},m.a.createElement(h.a,{onClick:function(){return e.setState({showAlertModal2:!0})},variant:"primary",className:"btn-sm"},"View Live Demo"),m.a.createElement(u.a,{show:this.state.showAlertModal2,onHide:function(){return e.closeModal("alert2")}},m.a.createElement(u.a.Body,{className:"tx-center"},m.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.closeModal("alert2")}},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("i",{className:"icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"}),m.a.createElement("h4",{className:"tx-danger mg-b-20"},"Error: Cannot process your entry!"),m.a.createElement("p",{className:"mg-b-20 mg-x-20"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."),m.a.createElement("button",{type:"button",className:"btn btn-danger pd-x-25",onClick:function(){return e.closeModal("alert2")}},"Continue")))),m.a.createElement("hr",{className:"mg-y-30"}),m.a.createElement("div",{className:"az-content-label mg-b-5"},"Modal Animation Effects"),m.a.createElement("p",{className:"mg-b-20"},"Below are different kind of effects to choose from."),m.a.createElement("div",{className:"row row-sm"},m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3"},m.a.createElement(h.a,{onClick:function(){return e.showAnimationModal("effect-scale")},variant:"dark btn-block"},"Scale")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3"},m.a.createElement(h.a,{onClick:function(){return e.showAnimationModal("effect-slide-in-right")},variant:"dark btn-block"},"Slide In Right")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-md-t-0"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-slide-in-bottom")},variant:"dark btn-block"},"Slide In Bottom")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20 mg-xl-t-0"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-newspaper")},variant:"dark btn-block"},"Newspaper")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-fall")},variant:"dark btn-block"},"Fall")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-flip-horizontal")},variant:"dark btn-block"},"Flip Horizontal")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-flip-vertical")},variant:"dark btn-block"},"Flip Vertical")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-super-scaled")},variant:"dark btn-block"},"Super Scaled")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-sign")},variant:"dark btn-block"},"Sign")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-rotate-bottom")},variant:"dark btn-block"},"Rotate Bottom")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-rotate-left")},variant:"dark btn-block"},"Rotate Left")),m.a.createElement("div",{className:"col-sm-6 col-md-4 col-xl-3 mg-t-20"},m.a.createElement(h.a,{onClick:function(){e.showAnimationModal("effect-just-me")},variant:"dark btn-block"},"Just Me"))),m.a.createElement(u.a,{show:this.state.animationModal.show,className:this.state.animationModal.className,onHide:function(){return e.closeAnimationModal()}},m.a.createElement(u.a.Header,{closeButton:!0},m.a.createElement(u.a.Title,null,"Message Preview")),m.a.createElement(u.a.Body,null,m.a.createElement("h6",null,"Why We Use Electoral College, Not Popular Vote"),m.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."," ")),m.a.createElement(u.a.Footer,null,m.a.createElement(h.a,{variant:"indigo",onClick:function(){return e.closeAnimationModal()}},"Save changes"),m.a.createElement(h.a,{variant:"outline-light",onClick:function(){return e.closeAnimationModal()}},"Close"))),m.a.createElement("table",{className:"table az-table-reference"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{className:"wd-40p"},"Class Reference"),m.a.createElement("th",{className:"wd-60p"},"Value"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",{className:"pd-0 bg-transparent"},'className="modal fade effect-[value]"')),m.a.createElement("td",null,"scale | slide-in-right | slide-in-bottom | newspaper | fall | flip-horizontal | flip-vertical | super-scaled | sign | rotate-bottom | rotate-left | just-me")))),m.a.createElement("div",{className:"mg-lg-b-30"}))))}}]),t}(r.Component);a.default=v},77:function(e,a,t){"use strict";var l=t(12),n=t(13),s=t(15),o=t(14),i=t(0),c=t.n(i),r=t(2),m=t(5),d=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"az-content-left az-content-left-components"},c.a.createElement("div",{className:"component-item"},c.a.createElement("label",null,"UI Elements"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(r.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),c.a.createElement(r.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),c.a.createElement(r.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),c.a.createElement(r.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),c.a.createElement(r.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),c.a.createElement(r.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),c.a.createElement(r.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),c.a.createElement(r.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),c.a.createElement(r.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),c.a.createElement(r.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),c.a.createElement(r.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),c.a.createElement(r.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),c.a.createElement(r.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),c.a.createElement(r.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),c.a.createElement(r.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),c.a.createElement(r.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),c.a.createElement(r.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),c.a.createElement(r.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),c.a.createElement(r.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),c.a.createElement(r.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),c.a.createElement(r.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),c.a.createElement(r.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),c.a.createElement("label",null,"Forms"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(r.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),c.a.createElement(r.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),c.a.createElement(r.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),c.a.createElement(r.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),c.a.createElement(r.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),c.a.createElement("label",null,"Charts"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(r.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),c.a.createElement("label",null,"Tables"),c.a.createElement("nav",{className:"nav flex-column"},c.a.createElement(r.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),c.a.createElement(r.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),t}(i.Component);a.a=Object(m.g)(d)}}]);
//# sourceMappingURL=45.ac5edf10.chunk.js.map