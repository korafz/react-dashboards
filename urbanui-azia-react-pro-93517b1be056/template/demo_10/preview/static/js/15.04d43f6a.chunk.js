(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[15],{101:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function l(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}return(0,n.default)(l)};var l,r=t(127),n=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},107:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(7),i=t.n(n),o=t(0),s=t.n(o),c=t(4),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},u=s.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,u=void 0!==m&&m,f=Object(r.a)(e,["as","className","type","tooltip"]);return s.a.createElement(n,Object(l.a)({},f,{ref:a,className:i()(o,d+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=m,a.a=u},127:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,n,i){var o=r||"<<anonymous>>",s=i||l;if(null==t[l])return a?new Error("Required "+n+" `"+s+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),m=6;m<c;m++)d[m-6]=arguments[m];return e.apply(void 0,[t,l,o,n,s].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},180:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(7),i=t.n(n),o=(t(101),t(0)),s=t.n(o),c=(t(32),t(107)),d=t(84),m=t(9),u=s.a.forwardRef((function(e,a){var t,n,c=e.bsPrefix,u=e.bsCustomPrefix,f=e.type,b=e.size,p=e.htmlSize,v=e.id,x=e.className,y=e.isValid,E=void 0!==y&&y,O=e.isInvalid,j=void 0!==O&&O,h=e.plaintext,N=e.readOnly,P=e.custom,C=e.as,F=void 0===C?"input":C,k=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(o.useContext)(d.a).controlId,w=P?[u,"custom"]:[c,"form-control"],g=w[0],R=w[1];if(c=Object(m.a)(g,R),h)(n={})[c+"-plaintext"]=!0,t=n;else if("file"===f){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===f){var L;(L={})[c+"-range"]=!0,t=L}else if("select"===F&&P){var S;(S={})[c+"-select"]=!0,S[c+"-select-"+b]=b,t=S}else{var G;(G={})[c]=!0,G[c+"-"+b]=b,t=G}return s.a.createElement(F,Object(l.a)({},k,{type:f,size:p,ref:a,readOnly:N,id:v||I,className:i()(x,t,E&&"is-valid",j&&"is-invalid")}))}));u.displayName="FormControl",a.a=Object.assign(u,{Feedback:c.a})},181:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(7),i=t.n(n),o=t(0),s=t.n(o),c=t(9),d=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,m=void 0===o?"div":o,u=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(t,"col"),b=[],p=[];return d.forEach((function(e){var a,t,l,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var n=r.span;a=void 0===n||n,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+i:""+f+i+"-"+a),null!=l&&p.push("order"+i+"-"+l),null!=t&&p.push("offset"+i+"-"+t)})),b.length||b.push(f),s.a.createElement(m,Object(l.a)({},u,{ref:a,className:i.a.apply(void 0,[n].concat(b,p))}))}));m.displayName="Col",a.a=m},465:function(e,a,t){"use strict";var l=t(3),r=t(1),n=t(7),i=t.n(n),o=t(0),s=t.n(o),c=t(21),d=t(9),m=Object(c.a)("input-group-append"),u=Object(c.a)("input-group-prepend"),f=Object(c.a)("input-group-text",{Component:"span"}),b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.className,c=e.as,m=void 0===c?"div":c,u=Object(l.a)(e,["bsPrefix","size","className","as"]);return t=Object(d.a)(t,"input-group"),s.a.createElement(m,Object(r.a)({ref:a},u,{className:i()(o,t,n&&t+"-"+n)}))}));b.displayName="InputGroup";var p=Object(r.a)({},b,{Text:f,Radio:function(e){return s.a.createElement(f,null,s.a.createElement("input",Object(r.a)({type:"radio"},e)))},Checkbox:function(e){return s.a.createElement(f,null,s.a.createElement("input",Object(r.a)({type:"checkbox"},e)))},Append:m,Prepend:u});a.a=p},632:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(7),i=t.n(n),o=t(0),s=t.n(o),c=(t(101),t(107)),d=t(84),m=t(9),u=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,f=e.type,b=void 0===f?"checkbox":f,p=e.isValid,v=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,E=e.isStatic,O=e.as,j=void 0===O?"input":O,h=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),N=Object(o.useContext)(d.a),P=N.controlId,C=N.custom?[c,"custom-control-input"]:[n,"form-check-input"],F=C[0],k=C[1];return n=Object(m.a)(F,k),s.a.createElement(j,Object(l.a)({},h,{ref:a,type:b,id:t||P,className:i()(u,n,v&&"is-valid",y&&"is-invalid",E&&"position-static")}))}));u.displayName="FormCheckInput";var f=u,b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.htmlFor,f=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(d.a),p=b.controlId,v=b.custom?[n,"custom-control-label"]:[t,"form-check-label"],x=v[0],y=v[1];return t=Object(m.a)(x,y),s.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:u||p,className:i()(c,t)}))}));b.displayName="FormCheckLabel";var p=b,v=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,b=e.inline,v=void 0!==b&&b,x=e.disabled,y=void 0!==x&&x,E=e.isValid,O=void 0!==E&&E,j=e.isInvalid,h=void 0!==j&&j,N=e.feedbackTooltip,P=void 0!==N&&N,C=e.feedback,F=e.className,k=e.style,I=e.title,w=void 0===I?"":I,g=e.type,R=void 0===g?"checkbox":g,V=e.label,L=e.children,S=e.custom,G=e.as,z=void 0===G?"input":G,T=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),q="switch"===R||S,A=q?[u,"custom-control"]:[n,"form-check"],M=A[0],_=A[1];n=Object(m.a)(M,_);var U=Object(o.useContext)(d.a).controlId,J=Object(o.useMemo)((function(){return{controlId:t||U,custom:q}}),[U,q,t]),Z=null!=V&&!1!==V&&!L,D=s.a.createElement(f,Object(l.a)({},T,{type:"switch"===R?"checkbox":R,ref:a,isValid:O,isInvalid:h,isStatic:!Z,disabled:y,as:z}));return s.a.createElement(d.a.Provider,{value:J},s.a.createElement("div",{style:k,className:i()(F,n,q&&"custom-"+R,v&&n+"-inline")},L||s.a.createElement(s.a.Fragment,null,D,Z&&s.a.createElement(p,{title:w},V),(O||h)&&s.a.createElement(c.a,{type:O?"valid":"invalid",tooltip:P},C))))}));v.displayName="FormCheck",v.Input=f,v.Label=p;var x=v,y=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,f=e.isValid,b=e.isInvalid,p=e.lang,v=e.as,x=void 0===v?"input":v,y=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(o.useContext)(d.a),O=E.controlId,j=E.custom?[c,"custom-file-input"]:[n,"form-control-file"],h=j[0],N=j[1];return n=Object(m.a)(h,N),s.a.createElement(x,Object(l.a)({},y,{ref:a,id:t||O,type:"file",lang:p,className:i()(u,n,f&&"is-valid",b&&"is-invalid")}))}));y.displayName="FormFileInput";var E=y,O=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,c=e.className,u=e.htmlFor,f=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(d.a),p=b.controlId,v=b.custom?[n,"custom-file-label"]:[t,"form-file-label"],x=v[0],y=v[1];return t=Object(m.a)(x,y),s.a.createElement("label",Object(l.a)({},f,{ref:a,htmlFor:u||p,className:i()(c,t),"data-browse":f["data-browse"]}))}));O.displayName="FormFileLabel";var j=O,h=s.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,f=e.disabled,b=void 0!==f&&f,p=e.isValid,v=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,O=e.feedbackTooltip,h=void 0!==O&&O,N=e.feedback,P=e.className,C=e.style,F=e.label,k=e.children,I=e.custom,w=e.lang,g=e["data-browse"],R=e.as,V=void 0===R?"div":R,L=e.inputAs,S=void 0===L?"input":L,G=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=I?[u,"custom"]:[n,"form-file"],T=z[0],q=z[1];n=Object(m.a)(T,q);var A=Object(o.useContext)(d.a).controlId,M=Object(o.useMemo)((function(){return{controlId:t||A,custom:I}}),[A,I,t]),_=null!=F&&!1!==F&&!k,U=s.a.createElement(E,Object(l.a)({},G,{ref:a,isValid:v,isInvalid:y,disabled:b,as:S,lang:w}));return s.a.createElement(d.a.Provider,{value:M},s.a.createElement(V,{style:C,className:i()(P,n,I&&"custom-file")},k||s.a.createElement(s.a.Fragment,null,I?s.a.createElement(s.a.Fragment,null,U,_&&s.a.createElement(j,{"data-browse":g},F)):s.a.createElement(s.a.Fragment,null,_&&s.a.createElement(j,null,F),U),(v||y)&&s.a.createElement(c.a,{type:v?"valid":"invalid",tooltip:h},N))))}));h.displayName="FormFile",h.Input=E,h.Label=j;var N=h,P=t(180),C=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.children,u=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var v=Object(o.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(d.a.Provider,{value:v},s.a.createElement(b,Object(l.a)({},p,{ref:a,className:i()(n,t)}),c))}));C.displayName="FormGroup";var F=C,k=(t(32),t(181)),I=s.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,c=e.bsPrefix,u=e.column,f=e.srOnly,b=e.className,p=e.htmlFor,v=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(o.useContext)(d.a).controlId;c=Object(m.a)(c,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+"-"+u);var E=i()(b,c,f&&"sr-only",u&&y);return p=p||x,u?s.a.createElement(k.a,Object(l.a)({as:"label",className:E,htmlFor:p},v)):s.a.createElement(n,Object(l.a)({ref:a,className:E,htmlFor:p},v))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var w=I,g=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,u=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),s.a.createElement(c,Object(l.a)({},u,{ref:a,className:i()(n,t,d&&"text-muted")}))}));g.displayName="FormText";var R=g,V=s.a.forwardRef((function(e,a){return s.a.createElement(x,Object(l.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=x.Input,V.Label=x.Label;var L=V,S=t(21),G=Object(S.a)("form-row"),z=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,o=e.className,c=e.validated,d=e.as,u=void 0===d?"form":d,f=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),s.a.createElement(u,Object(l.a)({},f,{ref:a,className:i()(o,c&&"was-validated",n&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=G,z.Group=F,z.Control=P.a,z.Check=x,z.File=N,z.Switch=L,z.Label=w,z.Text=R;a.a=z},667:function(e,a,t){"use strict";t.r(a),t.d(a,"FormValidation",(function(){return b}));var l=t(12),r=t(13),n=t(34),i=t(15),o=t(14),s=t(0),c=t.n(s),d=t(632),m=t(181),u=t(465),f=t(53),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={validated:!1},r.handleSubmit=r.handleSubmit.bind(Object(n.a)(r)),r}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid d-flex p-md-0"},c.a.createElement("div",{className:"az-content-body d-flex flex-column"},c.a.createElement("div",{className:"az-content-breadcrumb"},c.a.createElement("span",null,"Components"),c.a.createElement("span",null,"Forms"),c.a.createElement("span",null,"Form Validation")),c.a.createElement("h2",{className:"az-content-title"},"Form Validation"),c.a.createElement(d.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit},c.a.createElement(d.a.Row,null,c.a.createElement(d.a.Group,{as:m.a,md:"12",controlId:"validationCustom01"},c.a.createElement(d.a.Label,null,"First name"),c.a.createElement(d.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),c.a.createElement(d.a.Control.Feedback,null,"Looks good!")),c.a.createElement(d.a.Group,{as:m.a,md:"12",controlId:"validationCustom02"},c.a.createElement(d.a.Label,null,"Last name"),c.a.createElement(d.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),c.a.createElement(d.a.Control.Feedback,null,"Looks good!")),c.a.createElement(d.a.Group,{as:m.a,md:"12",controlId:"validationCustomUsername"},c.a.createElement(d.a.Label,null,"Username"),c.a.createElement(u.a,null,c.a.createElement(u.a.Prepend,null,c.a.createElement(u.a.Text,{id:"inputGroupPrepend"},"@")),c.a.createElement(d.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),c.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please choose a username.")))),c.a.createElement(d.a.Row,null,c.a.createElement(d.a.Group,{as:m.a,md:"12",controlId:"validationCustom03"},c.a.createElement(d.a.Label,null,"City"),c.a.createElement(d.a.Control,{type:"text",placeholder:"City",required:!0}),c.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid city.")),c.a.createElement(d.a.Group,{as:m.a,md:"3",controlId:"validationCustom04"},c.a.createElement(d.a.Label,null,"State"),c.a.createElement(d.a.Control,{type:"text",placeholder:"State",required:!0}),c.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid state.")),c.a.createElement(d.a.Group,{as:m.a,md:"",controlId:"validationCustom05"},c.a.createElement(d.a.Label,null,"Zip"),c.a.createElement(d.a.Control,{type:"text",placeholder:"Zip",required:!0}),c.a.createElement(d.a.Control.Feedback,{type:"invalid"},"Please provide a valid zip."))),c.a.createElement(d.a.Group,null,c.a.createElement(d.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})),c.a.createElement(f.a,{type:"submit"},"Submit form")))))}}]),t}(s.Component);a.default=b},84:function(e,a,t){"use strict";var l=t(0),r=t.n(l).a.createContext({controlId:void 0});a.a=r}}]);
//# sourceMappingURL=15.04d43f6a.chunk.js.map