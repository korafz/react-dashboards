(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[58],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},340:function(e,t,a){"use strict";a.r(t),a.d(t,"TodoListRtl",(function(){return b})),a.d(t,"TodoListRtlComponent",(function(){return h}));var n=a(51),r=a(127),c=a(19),o=a(6),l=a(7),s=a(8),i=a(9),d=a(10),u=a(0),m=a.n(u),p=a(1),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Todo List"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Apps")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Todo List")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card px-3"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Todo List"),m.a.createElement(h,null))))))}}]),t}(u.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={todos:[{id:1,task:"\u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",isCompleted:!1},{id:2,task:"\u0627\u0644\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643",isCompleted:!0},{id:3,task:"\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",isCompleted:!1},{id:4,task:"\u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631",isCompleted:!1},{id:5,task:"\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u062c\u0648\u0646",isCompleted:!0},{id:6,task:"\u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0639 \u0627\u0644\u064a\u0633\u0627",isCompleted:!1}],inputValue:""},a.statusChangedHandler=a.statusChangedHandler.bind(Object(c.a)(a)),a.addTodo=a.addTodo.bind(Object(c.a)(a)),a.removeTodo=a.removeTodo.bind(Object(c.a)(a)),a.inputChangeHandler=a.inputChangeHandler.bind(Object(c.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"statusChangedHandler",value:function(e,t){var a=Object(r.a)({},this.state.todos[t]);a.isCompleted=e.target.checked;var c=Object(n.a)(this.state.todos);c[t]=a,this.setState({todos:c})}},{key:"addTodo",value:function(e){e.preventDefault();var t=Object(n.a)(this.state.todos);t.unshift({id:t.length?t[t.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:t,inputValue:""})}},{key:"removeTodo",value:function(e){var t=Object(n.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},m.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"\u0645\u0627\u0630\u0627 \u062a\u062d\u062a\u0627\u062c \u0623\u0646 \u062a\u0641\u0639\u0644 \u0627\u0644\u064a\u0648\u0645\u061f",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),m.a.createElement("button",{type:"submit",className:"btn btn-primary"},m.a.createElement(p.a,null,"Add"))),m.a.createElement("div",{className:"list-wrapper"},m.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(t,a){return m.a.createElement(f,{isCompleted:t.isCompleted,changed:function(t){return e.statusChangedHandler(t,a)},key:t.id,remove:function(){return e.removeTodo(a)}},t.task)})))))}}]),t}(u.Component),f=function(e){return m.a.createElement("li",{className:e.isCompleted?"completed":null},m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{htmlFor:"",className:"form-check-label"},m.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",m.a.createElement("i",{className:"input-helper"}))),m.a.createElement("i",{className:"remove mdi mdi-close-box",onClick:e.remove}))};t.default=b}}]);
//# sourceMappingURL=58.d67baa25.chunk.js.map