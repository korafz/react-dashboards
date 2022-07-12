(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[38],{1138:function(e,a,t){"use strict";t.r(a),t.d(a,"Validation",(function(){return p}));var r=t(12),l=t(13),n=t(15),i=t(14),c=t(56),o=t(16),s=t(0),d=t.n(s),u=t(218),m=t(151),b=t(876),f=t(80),p=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(n.a)(this,Object(i.a)(a).call(this,e))).state={validated:!1},t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"page-header"},d.a.createElement("h3",{className:"page-title"},"Form Validation"),d.a.createElement("nav",{"aria-label":"breadcrumb"},d.a.createElement("ol",{className:"breadcrumb"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),d.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Validation Chart")))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12 grid-margin"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-body"},d.a.createElement("h4",{className:"card-title"},"Basic Form Validation"),d.a.createElement(u.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},d.a.createElement(u.a.Row,null,d.a.createElement(u.a.Group,{as:m.a,md:"12",controlId:"validationCustom01"},d.a.createElement(u.a.Label,null,"First name"),d.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),d.a.createElement(u.a.Control.Feedback,null,"Looks good!")),d.a.createElement(u.a.Group,{as:m.a,md:"12",controlId:"validationCustom02"},d.a.createElement(u.a.Label,null,"Last name"),d.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),d.a.createElement(u.a.Control.Feedback,null,"Looks good!")),d.a.createElement(u.a.Group,{as:m.a,md:"12",controlId:"validationCustomUsername"},d.a.createElement(u.a.Label,null,"Username"),d.a.createElement(b.a,null,d.a.createElement(b.a.Prepend,null,d.a.createElement(b.a.Text,{id:"inputGroupPrepend"},"@")),d.a.createElement(u.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),d.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please choose a username.")))),d.a.createElement(u.a.Row,null,d.a.createElement(u.a.Group,{as:m.a,md:"12",controlId:"validationCustom03"},d.a.createElement(u.a.Label,null,"City"),d.a.createElement(u.a.Control,{type:"text",placeholder:"City",required:!0}),d.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid city.")),d.a.createElement(u.a.Group,{as:m.a,md:"3",controlId:"validationCustom04"},d.a.createElement(u.a.Label,null,"State"),d.a.createElement(u.a.Control,{type:"text",placeholder:"State",required:!0}),d.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid state.")),d.a.createElement(u.a.Group,{as:m.a,md:"",controlId:"validationCustom05"},d.a.createElement(u.a.Label,null,"Zip"),d.a.createElement(u.a.Control,{type:"text",placeholder:"Zip",required:!0}),d.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid zip."))),d.a.createElement(u.a.Group,null,d.a.createElement(u.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})),d.a.createElement(f.a,{type:"submit"},"Submit form")))))))}}]),a}(s.Component);a.default=p},128:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},135:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,n,i){var c=l||"<<anonymous>>",o=i||r;if(null==t[r])return a?new Error("Required "+n+" `"+o+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,d=Array(s>6?s-6:0),u=6;u<s;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,c,n,o].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},142:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(8),i=t.n(n),c=t(0),o=t.n(c),s=t(20),d=t.n(s),u={type:d.a.string.isRequired,as:d.a.elementType},m=o.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,c=e.className,s=e.type,d=Object(l.a)(e,["as","className","type"]);return o.a.createElement(n,Object(r.a)({},d,{ref:a,className:i()(c,s&&s+"-feedback")}))}));m.displayName="Feedback",m.propTypes=u,m.defaultProps={type:"valid"},a.a=m},147:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,n.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}))};var r,l=t(135),n=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},151:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(8),i=t.n(n),c=t(0),o=t.n(c),s=t(11),d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,u=void 0===c?"div":c,m=Object(l.a)(e,["bsPrefix","className","as"]),b=Object(s.b)(t,"col"),f=[],p=[];return d.forEach((function(e){var a,t,r,l=m[e];if(delete m[e],null!=l&&"object"===typeof l){var n=l.span;a=void 0===n||n,t=l.offset,r=l.order}else a=l;var i="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+b+i:""+b+i+"-"+a),null!=r&&p.push("order"+i+"-"+r),null!=t&&p.push("offset"+i+"-"+t)})),f.length||f.push(b),o.a.createElement(u,Object(r.a)({},m,{ref:a,className:i.a.apply(void 0,[n].concat(f,p))}))}));u.displayName="Col",a.a=u},155:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(8),i=t.n(n),c=t(0),o=t.n(c),s=(t(43),t(142)),d=t(128),u=t(11),m=o.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,m=e.type,b=e.size,f=e.id,p=e.className,v=e.isValid,E=e.isInvalid,y=e.plaintext,O=e.readOnly,h=e.as,j=void 0===h?"input":h,x=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),N=Object(c.useContext)(d.a).controlId;if(s=Object(u.b)(s,"form-control"),y)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===m){var C;(C={})[s+"-file"]=!0,t=C}else{var P;(P={})[s]=!0,P[s+"-"+b]=b,t=P}return o.a.createElement(j,Object(r.a)({},x,{type:m,ref:a,readOnly:O,id:f||N,className:i()(p,t,v&&"is-valid",E&&"is-invalid")}))}));m.displayName="FormControl",m.Feedback=s.a,a.a=m},218:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(8),i=t.n(n),c=t(0),o=t.n(c),s=(t(147),t(142)),d=t(128),u=t(11),m=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,m=e.className,b=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,E=void 0===v?"input":v,y=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(c.useContext)(d.a),h=O.controlId;return n=O.custom?Object(u.b)(s,"custom-control-input"):Object(u.b)(n,"form-check-input"),o.a.createElement(E,Object(r.a)({},y,{ref:a,id:t||h,className:i()(m,n,b&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));m.displayName="FormCheckInput",m.defaultProps={type:"checkbox"};var b=m,f=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,m=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(c.useContext)(d.a),p=f.controlId;return t=f.custom?Object(u.b)(n,"custom-control-label"):Object(u.b)(t,"form-check-label"),o.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:m||p,className:i()(s,t)}))}));f.displayName="FormCheckLabel";var p=f,v=o.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,m=e.bsCustomPrefix,f=e.inline,v=e.disabled,E=e.isValid,y=e.isInvalid,O=e.feedback,h=e.className,j=e.style,x=e.title,N=e.type,C=e.label,P=e.children,k=e.custom,w=e.as,F=void 0===w?"input":w,I=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),g="switch"===N||k;n=g?Object(u.b)(m,"custom-control"):Object(u.b)(n,"form-check");var R=Object(c.useContext)(d.a).controlId,L=Object(c.useMemo)((function(){return{controlId:t||R,custom:g}}),[R,g,t]),V=null!=C&&!1!==C&&!P,S=o.a.createElement(b,Object(r.a)({},I,{type:"switch"===N?"checkbox":N,ref:a,isValid:E,isInvalid:y,isStatic:!V,disabled:v,as:F}));return o.a.createElement(d.a.Provider,{value:L},o.a.createElement("div",{style:j,className:i()(h,n,g&&"custom-"+N,f&&n+"-inline")},P||o.a.createElement(o.a.Fragment,null,S,V&&o.a.createElement(p,{title:x},C),(E||y)&&o.a.createElement(s.a,{type:E?"valid":"invalid"},O))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=b,v.Label=p;var E=v,y=t(155),O=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,m=e.controlId,b=e.as,f=void 0===b?"div":b,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:m}}),[m]);return o.a.createElement(d.a.Provider,{value:v},o.a.createElement(f,Object(r.a)({},p,{ref:a,className:i()(n,t)}),s))}));O.displayName="FormGroup";var h=O,j=(t(43),t(151)),x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,s=e.srOnly,m=e.className,b=e.htmlFor,f=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(c.useContext)(d.a).controlId;t=Object(u.b)(t,"form-label");var v=i()(m,t,s&&"sr-only",n&&"col-form-label");return b=b||p,n?o.a.createElement(j.a,Object(r.a)({as:"label",className:v,htmlFor:b},f)):o.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:b},f))}));x.displayName="FormLabel",x.defaultProps={column:!1,srOnly:!1};var N=x,C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,s=void 0===c?"small":c,d=e.muted,m=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.b)(t,"form-text"),o.a.createElement(s,Object(r.a)({},m,{ref:a,className:i()(n,t,d&&"text-muted")}))}));C.displayName="FormText";var P=C,k=o.a.forwardRef((function(e,a){return o.a.createElement(E,Object(r.a)({},e,{ref:a,type:"switch"}))}));k.displayName="Switch",k.Input=E.Input,k.Label=E.Label;var w=k,F=t(44),I=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,c=e.className,s=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.b)(t,"form"),o.a.createElement(m,Object(r.a)({},b,{ref:a,className:i()(c,s&&"was-validated",n&&t+"-inline")}))}));I.displayName="Form",I.defaultProps={inline:!1},I.Row=Object(F.a)("form-row"),I.Group=h,I.Control=y.a,I.Check=E,I.Switch=w,I.Label=N,I.Text=P;a.a=I},876:function(e,a,t){"use strict";var r=t(3),l=t(4),n=t(8),i=t.n(n),c=t(0),o=t.n(c),s=t(44),d=t(11),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,c=e.className,s=e.as,u=void 0===s?"div":s,m=Object(l.a)(e,["bsPrefix","size","className","as"]);return t=Object(d.b)(t,"input-group"),o.a.createElement(u,Object(r.a)({ref:a},m,{className:i()(c,t,n&&t+"-"+n)}))})),m=Object(s.a)("input-group-append"),b=Object(s.a)("input-group-prepend"),f=Object(s.a)("input-group-text",{Component:"span"});u.displayName="InputGroup",u.Text=f,u.Radio=function(e){return o.a.createElement(f,null,o.a.createElement("input",Object(r.a)({type:"radio"},e)))},u.Checkbox=function(e){return o.a.createElement(f,null,o.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},u.Append=m,u.Prepend=b,a.a=u}}]);
//# sourceMappingURL=38.01196acd.chunk.js.map