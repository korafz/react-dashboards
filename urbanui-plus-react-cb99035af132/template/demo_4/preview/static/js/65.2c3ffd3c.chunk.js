(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[65],{1158:function(e,t,a){"use strict";a.r(t),a.d(t,"TodoList",(function(){return u}));var n=a(28),s=a(52),l=a(13),o=a(14),i=a(27),r=a(16),c=a(15),d=a(0),m=a.n(d),u=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={todos:[{id:1,task:"Pick up kids from school",isCompleted:!1},{id:2,task:"Prepare for presentation",isCompleted:!0},{id:3,task:"Print Statements",isCompleted:!1},{id:4,task:"Create invoice",isCompleted:!1},{id:5,task:"Call John",isCompleted:!0},{id:6,task:"Meeting with Alisa",isCompleted:!1}],inputValue:""},n.statusChangedHandler=n.statusChangedHandler.bind(Object(i.a)(n)),n.addTodo=n.addTodo.bind(Object(i.a)(n)),n.removeTodo=n.removeTodo.bind(Object(i.a)(n)),n.inputChangeHandler=n.inputChangeHandler.bind(Object(i.a)(n)),n}return Object(o.a)(a,[{key:"statusChangedHandler",value:function(e,t){var a=Object(s.a)({},this.state.todos[t]);a.isCompleted=e.target.checked;var l=Object(n.a)(this.state.todos);l[t]=a,this.setState({todos:l})}},{key:"addTodo",value:function(e){e.preventDefault();var t=Object(n.a)(this.state.todos);t.unshift({id:t.length?t[t.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:t,inputValue:""})}},{key:"removeTodo",value:function(e){var t=Object(n.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Todo List"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Apps")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Todo List")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card px-3"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Todo List"),m.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},m.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"What do you need to do today?",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),m.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold"},"Add")),m.a.createElement("div",{className:"list-wrapper"},m.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(t,a){return m.a.createElement(p,{isCompleted:t.isCompleted,changed:function(t){return e.statusChangedHandler(t,a)},key:t.id,remove:function(){return e.removeTodo(a)}},t.task)})))))))))}}]),a}(d.Component),p=function(e){return m.a.createElement("li",{className:e.isCompleted?"completed":null},m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{htmlFor:"",className:"form-check-label"},m.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",m.a.createElement("i",{className:"input-helper"}))),m.a.createElement("i",{className:"remove mdi mdi-close-circle-outline",onClick:e.remove}))};t.default=u}}]);
//# sourceMappingURL=65.2c3ffd3c.chunk.js.map