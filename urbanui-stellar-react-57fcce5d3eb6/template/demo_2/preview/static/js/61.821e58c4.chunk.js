(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[61],{1179:function(e,a,t){"use strict";t.r(a),t.d(a,"ClipboardPage",(function(){return p}));var c=t(12),r=t(13),l=t(15),s=t(14),i=t(16),n=t(0),m=t.n(n),d=t(723),o=t.n(d),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).state={copied:Boolean,clipboardText1:"Hello!",clipboardText2:"Hello!",clipboardText3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",clipboardText4:"dolor sit amet"},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Clipboard"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Clipboard")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"clipboard on text input"),m.a.createElement("p",{className:"card-description"},"Copy from text input"),m.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.clipboardText1,onChange:function(a){return e.setState({clipboardText1:a.target.value})}}),m.a.createElement("div",{className:"mt-3"},m.a.createElement(o.a,{className:"btn btn-info","data-clipboard-text":this.state.clipboardText1}," Copy ")))),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Clipboard on textarea"),m.a.createElement("p",{className:"card-description"},"Cut/copy from textarea"),m.a.createElement("textarea",{className:"form-control",rows:"3",defaultValue:this.state.clipboardText2,onChange:function(a){return e.setState({clipboardText2:a.target.value})}}),m.a.createElement("div",{className:"mt-3"},m.a.createElement(o.a,{className:"btn btn-info","data-clipboard-text":this.state.clipboardText2}," Copy "))))))),m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Clipboard on paragraph"),m.a.createElement("p",{className:"card-description"},"Copy paragraph"),m.a.createElement("div",{className:"card card-inverse-secondary"},m.a.createElement("div",{className:"card-body"},this.state.clipboardText3)),m.a.createElement("div",{className:"mt-3"},m.a.createElement(o.a,{className:"btn btn-info","data-clipboard-text":this.state.clipboardText3}," Copy ")))),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Copy portion from paragraph"),m.a.createElement("p",{className:"card-description"},"Copy the highlighted text from this paragraph"),m.a.createElement("div",{className:"card card-inverse-secondary"},m.a.createElement("div",{className:"card-body"},m.a.createElement("p",{className:"mb-0"},"Lorem ipsum ",m.a.createElement("span",{className:"bg-info text-white"},this.state.clipboardText4),", consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),m.a.createElement("div",{className:"mt-3"},m.a.createElement(o.a,{className:"btn btn-info","data-clipboard-text":this.state.clipboardText4}," Copy ")))))))))}}]),a}(n.Component);a.default=p}}]);
//# sourceMappingURL=61.821e58c4.chunk.js.map