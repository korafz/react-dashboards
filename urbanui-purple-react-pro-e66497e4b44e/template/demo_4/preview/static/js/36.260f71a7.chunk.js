(window["webpackJsonppurple-react-pro"]=window["webpackJsonppurple-react-pro"]||[]).push([[36],{1125:function(e,a,t){"use strict";t.r(a),t.d(a,"Validation",(function(){return f}));var r=t(13),l=t(14),n=t(16),i=t(15),c=t(29),s=t(17),o=t(0),d=t.n(o),m=t(215),u=t(144),b=t(850),p=t(91),f=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(n.a)(this,Object(i.a)(a).call(this,e))).state={validated:!1},t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Form Validation"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Validation Chart")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12 grid-margin"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Basic Form Validation"),d.a.createElement(m.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},d.a.createElement(m.a.Row,null,d.a.createElement(m.a.Group,{as:u.a,md:"12",controlId:"validationCustom01"},d.a.createElement(m.a.Label,null,"First name"),d.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),d.a.createElement(m.a.Control.Feedback,null,"Looks good!")),d.a.createElement(m.a.Group,{as:u.a,md:"12",controlId:"validationCustom02"},d.a.createElement(m.a.Label,null,"Last name"),d.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),d.a.createElement(m.a.Control.Feedback,null,"Looks good!")),d.a.createElement(m.a.Group,{as:u.a,md:"12",controlId:"validationCustomUsername"},d.a.createElement(m.a.Label,null,"Username"),d.a.createElement(b.a,null,d.a.createElement(b.a.Prepend,null,d.a.createElement(b.a.Text,{id:"inputGroupPrepend",className:"bg-dark"},"@")),d.a.createElement(m.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),d.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please choose a username.")))),d.a.createElement(m.a.Row,null,d.a.createElement(m.a.Group,{as:u.a,md:"12",controlId:"validationCustom03"},d.a.createElement(m.a.Label,null,"City"),d.a.createElement(m.a.Control,{type:"text",placeholder:"City",required:!0}),d.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please provide a valid city.")),d.a.createElement(m.a.Group,{as:u.a,md:"3",controlId:"validationCustom04"},d.a.createElement(m.a.Label,null,"State"),d.a.createElement(m.a.Control,{type:"text",placeholder:"State",required:!0}),d.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please provide a valid state.")),d.a.createElement(m.a.Group,{as:u.a,md:"",controlId:"validationCustom05"},d.a.createElement(m.a.Label,null,"Zip"),d.a.createElement(m.a.Control,{type:"text",placeholder:"Zip",required:!0}),d.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please provide a valid zip."))),d.a.createElement(m.a.Group,null,d.a.createElement(m.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})),d.a.createElement(p.a,{type:"submit"},"Submit form")))))))}}]),a}(o.Component);a.default=f},125:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},131:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(5),i=t.n(n),c=t(0),s=t.n(c),o=t(6),d=t.n(o),m={type:d.a.string.isRequired,as:d.a.elementType},u=s.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,c=e.className,o=e.type,d=Object(l.a)(e,["as","className","type"]);return s.a.createElement(n,Object(r.a)({},d,{ref:a,className:i()(c,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=m,u.defaultProps={type:"valid"},a.a=u},143:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(5),i=t.n(n),c=t(0),s=t.n(c),o=(t(60),t(131)),d=t(125),m=t(7),u=s.a.forwardRef((function(e,a){var t,n,o=e.bsPrefix,u=e.type,b=e.size,p=e.id,f=e.className,v=e.isValid,E=e.isInvalid,O=e.plaintext,y=e.readOnly,h=e.as,j=void 0===h?"input":h,N=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(c.useContext)(d.a).controlId;if(o=Object(m.b)(o,"form-control"),O)(n={})[o+"-plaintext"]=!0,t=n;else if("file"===u){var C;(C={})[o+"-file"]=!0,t=C}else{var P;(P={})[o]=!0,P[o+"-"+b]=b,t=P}return s.a.createElement(j,Object(r.a)({},N,{type:u,ref:a,readOnly:y,id:p||x,className:i()(f,t,v&&"is-valid",E&&"is-invalid")}))}));u.displayName="FormControl",u.Feedback=o.a,a.a=u},144:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(5),i=t.n(n),c=t(0),s=t.n(c),o=t(7),d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,m=void 0===c?"div":c,u=Object(l.a)(e,["bsPrefix","className","as"]),b=Object(o.b)(t,"col"),p=[],f=[];return d.forEach((function(e){var a,t,r,l=u[e];if(delete u[e],null!=l&&"object"===typeof l){var n=l.span;a=void 0===n||n,t=l.offset,r=l.order}else a=l;var i="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+b+i:""+b+i+"-"+a),null!=r&&f.push("order"+i+"-"+r),null!=t&&f.push("offset"+i+"-"+t)})),p.length||p.push(b),s.a.createElement(m,Object(r.a)({},u,{ref:a,className:i.a.apply(void 0,[n].concat(p,f))}))}));m.displayName="Col",a.a=m},215:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(5),i=t.n(n),c=t(0),s=t.n(c),o=(t(98),t(131)),d=t(125),m=t(7),u=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,b=e.isValid,p=e.isInvalid,f=e.isStatic,v=e.as,E=void 0===v?"input":v,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(c.useContext)(d.a),h=y.controlId;return n=y.custom?Object(m.b)(o,"custom-control-input"):Object(m.b)(n,"form-check-input"),s.a.createElement(E,Object(r.a)({},O,{ref:a,id:t||h,className:i()(u,n,b&&"is-valid",p&&"is-invalid",f&&"position-static")}))}));u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var b=u,p=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(c.useContext)(d.a),f=p.controlId;return t=p.custom?Object(m.b)(n,"custom-control-label"):Object(m.b)(t,"form-check-label"),s.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||f,className:i()(o,t)}))}));p.displayName="FormCheckLabel";var f=p,v=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,p=e.inline,v=e.disabled,E=e.isValid,O=e.isInvalid,y=e.feedback,h=e.className,j=e.style,N=e.title,x=e.type,C=e.label,P=e.children,k=e.custom,w=e.as,F=void 0===w?"input":w,I=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),g="switch"===x||k;n=g?Object(m.b)(u,"custom-control"):Object(m.b)(n,"form-check");var R=Object(c.useContext)(d.a).controlId,L=Object(c.useMemo)((function(){return{controlId:t||R,custom:g}}),[R,g,t]),V=null!=C&&!1!==C&&!P,S=s.a.createElement(b,Object(r.a)({},I,{type:"switch"===x?"checkbox":x,ref:a,isValid:E,isInvalid:O,isStatic:!V,disabled:v,as:F}));return s.a.createElement(d.a.Provider,{value:L},s.a.createElement("div",{style:j,className:i()(h,n,g&&"custom-"+x,p&&n+"-inline")},P||s.a.createElement(s.a.Fragment,null,S,V&&s.a.createElement(f,{title:N},C),(E||O)&&s.a.createElement(o.a,{type:E?"valid":"invalid"},y))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=b,v.Label=f;var E=v,O=t(143),y=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,u=e.controlId,b=e.as,p=void 0===b?"div":b,f=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(d.a.Provider,{value:v},s.a.createElement(p,Object(r.a)({},f,{ref:a,className:i()(n,t)}),o))}));y.displayName="FormGroup";var h=y,j=(t(60),t(144)),N=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,o=e.srOnly,u=e.className,b=e.htmlFor,p=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(c.useContext)(d.a).controlId;t=Object(m.b)(t,"form-label");var v=i()(u,t,o&&"sr-only",n&&"col-form-label");return b=b||f,n?s.a.createElement(j.a,Object(r.a)({as:"label",className:v,htmlFor:b},p)):s.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:b},p))}));N.displayName="FormLabel",N.defaultProps={column:!1,srOnly:!1};var x=N,C=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,o=void 0===c?"small":c,d=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.b)(t,"form-text"),s.a.createElement(o,Object(r.a)({},u,{ref:a,className:i()(n,t,d&&"text-muted")}))}));C.displayName="FormText";var P=C,k=s.a.forwardRef((function(e,a){return s.a.createElement(E,Object(r.a)({},e,{ref:a,type:"switch"}))}));k.displayName="Switch",k.Input=E.Input,k.Label=E.Label;var w=k,F=t(53),I=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,c=e.className,o=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.b)(t,"form"),s.a.createElement(u,Object(r.a)({},b,{ref:a,className:i()(c,o&&"was-validated",n&&t+"-inline")}))}));I.displayName="Form",I.defaultProps={inline:!1},I.Row=Object(F.a)("form-row"),I.Group=h,I.Control=O.a,I.Check=E,I.Switch=w,I.Label=x,I.Text=P;a.a=I},850:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(5),i=t.n(n),c=t(0),s=t.n(c),o=t(53),d=t(7),m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,c=e.className,o=e.as,m=void 0===o?"div":o,u=Object(l.a)(e,["bsPrefix","size","className","as"]);return t=Object(d.b)(t,"input-group"),s.a.createElement(m,Object(r.a)({ref:a},u,{className:i()(c,t,n&&t+"-"+n)}))})),u=Object(o.a)("input-group-append"),b=Object(o.a)("input-group-prepend"),p=Object(o.a)("input-group-text",{Component:"span"});m.displayName="InputGroup",m.Text=p,m.Radio=function(e){return s.a.createElement(p,null,s.a.createElement("input",Object(r.a)({type:"radio"},e)))},m.Checkbox=function(e){return s.a.createElement(p,null,s.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},m.Append=u,m.Prepend=b,a.a=m}}]);
//# sourceMappingURL=36.260f71a7.chunk.js.map