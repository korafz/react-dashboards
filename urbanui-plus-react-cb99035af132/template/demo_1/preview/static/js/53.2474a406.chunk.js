(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[53],{1115:function(e,t,a){"use strict";a.r(t),a.d(t,"TodoList",(function(){return h}));var r=a(221),n=a(31),o=a(12),i=a(13),c=a(15),s=a(14),l=a(58),d=a(16),u=a(0),m=a.n(u);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={todos:[{id:1,task:"Pick up kids from school",isCompleted:!1},{id:2,task:"Prepare for presentation",isCompleted:!0},{id:3,task:"Print Statements",isCompleted:!1},{id:4,task:"Create invoice",isCompleted:!1},{id:5,task:"Call John",isCompleted:!0},{id:6,task:"Meeting with Alisa",isCompleted:!1}],inputValue:""},a.statusChangedHandler=a.statusChangedHandler.bind(Object(l.a)(a)),a.addTodo=a.addTodo.bind(Object(l.a)(a)),a.removeTodo=a.removeTodo.bind(Object(l.a)(a)),a.inputChangeHandler=a.inputChangeHandler.bind(Object(l.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"statusChangedHandler",value:function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state.todos[t]);a.isCompleted=e.target.checked;var o=Object(r.a)(this.state.todos);o[t]=a,this.setState({todos:o})}},{key:"addTodo",value:function(e){e.preventDefault();var t=Object(r.a)(this.state.todos);t.unshift({id:t.length?t[t.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:t,inputValue:""})}},{key:"removeTodo",value:function(e){var t=Object(r.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},"Todo List"),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Apps")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Todo List")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card px-3"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Todo List"),m.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},m.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"What do you need to do today?",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),m.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold"},"Add")),m.a.createElement("div",{className:"list-wrapper"},m.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(t,a){return m.a.createElement(b,{isCompleted:t.isCompleted,changed:function(t){return e.statusChangedHandler(t,a)},key:t.id,remove:function(){return e.removeTodo(a)}},t.task)})))))))))}}]),t}(u.Component),b=function(e){return m.a.createElement("li",{className:e.isCompleted?"completed":null},m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{htmlFor:"",className:"form-check-label"},m.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",m.a.createElement("i",{className:"input-helper"}))),m.a.createElement("i",{className:"remove mdi mdi-close-circle-outline",onClick:e.remove}))};t.default=h},221:function(e,t,a){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=53.2474a406.chunk.js.map