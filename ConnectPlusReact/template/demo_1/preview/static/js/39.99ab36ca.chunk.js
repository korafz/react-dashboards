(window["webpackJsonpconnect-plus-react"]=window["webpackJsonpconnect-plus-react"]||[]).push([[39],{1131:function(e,a,t){"use strict";t.r(a),t.d(a,"Column",(function(){return b})),t.d(a,"Task",(function(){return k})),t.d(a,"Dragula",(function(){return f}));var n=t(27),r=t(12),s=t(13),c=t(15),i=t(14),l=t(16),o=t(0),m=t.n(o),d=t(488);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={tasks:{"task-1":{id:"task-1",name:"Rebecca young",designation:"Software engineer",imgURL:t(99)},"task-2":{id:"task-2",name:"Jacob march",designation:"UI developer",imgURL:t(73)},"task-3":{id:"task-3",name:"Catherine",designation:"Digital Marketer",imgURL:t(74)},"task-4":{id:"task-4",name:"Thomas Cook",designation:"Director",imgURL:t(77)},"task-5":{id:"task-5",name:"Keto Philip",designation:"Software Tester",imgURL:t(98)},"task-6":{id:"task-6",name:"Jacob Stephen",designation:"UI Developer",imgURL:t(97)},"task-7":{id:"task-7",name:"March Creg",designation:"Technical Support Engineer",imgURL:t(151)},"task-8":{id:"task-8",name:"Peter Beckham",designation:"UI Developer",imgURL:t(173)},"task-9":{id:"task-9",name:"John Doe",designation:"UI Designer",imgURL:t(159)},"task-10":{id:"task-10",name:"Williamson",designation:"Technical Support Engineer",imgURL:t(152)}},columns:{"column-1":{id:"column-1",tittle:"TEAM A",taskIds:["task-1","task-2","task-3","task-4","task-5"]},"column-2":{id:"column-2",tittle:"TEAM B",taskIds:["task-6","task-7","task-8","task-9","task-10"]}},columnOrder:["column-1","column-2"]},b=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("div",{className:"border bg-secondary p-4"},m.a.createElement("div",null,m.a.createElement("h6",{className:"card-title"},this.props.column.tittle)),m.a.createElement(d.c,{droppableId:this.props.column.id},(function(a){return m.a.createElement("div",Object.assign({className:"kanbanHeight",ref:a.innerRef},a.droppableProps),e.props.tasks.map((function(e,a){return m.a.createElement(k,{key:e.id,task:e,index:a})})),a.placeholder)}))))}}]),a}(o.Component),k=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement(d.b,{draggableId:this.props.task.id,index:this.props.index},(function(a){return m.a.createElement("div",Object.assign({className:"mt-1 board-portlet"},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),m.a.createElement("div",{className:"card-body p-3 bg-white"},m.a.createElement("div",{className:"media"},m.a.createElement("div",{className:"media-body"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("img",{src:e.props.task.imgURL,alt:"profile",className:"img-sm mr-3 rounded-circle"}),m.a.createElement("div",null,m.a.createElement("h6",{className:"mb-1"},e.props.task.name),m.a.createElement("p",{className:"mb-0 text-muted"}," ",e.props.task.designation," ")))))))}))}}]),a}(o.Component),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state=g,t.onDragEnd=function(e){var a,r=e.destination,s=e.source,c=e.draggableId;if(r&&(r.droppableId!==s.droppableId||r.index!==s.index)){var i=t.state.columns[s.droppableId],l=t.state.columns[r.droppableId];if(i!==l){var o=Array.from(i.taskIds);o.splice(s.index,1);var m=u({},i,{taskIds:o}),d=Array.from(l.taskIds);d.splice(r.index,0,c);var p=u({},l,{taskIds:d}),g=u({},t.state,{columns:u({},t.state.columns,(a={},Object(n.a)(a,m.id,m),Object(n.a)(a,p.id,p),a))});t.setState(g)}else{var b=Array.from(i.taskIds);b.splice(s.index,1),b.splice(r.index,0,c);var k=u({},i,{taskIds:b}),f=u({},t.state,{columns:u({},t.state.columns,Object(n.a)({},k.id,k))});t.setState(f)}}},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"}," Dragula "),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb pr-0"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Dragula")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",null,m.a.createElement("h4",{className:"card-title"},"Simple Dragula"),m.a.createElement("p",{className:"card-description"},"Drag and drop between Team A and Team B")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",null,m.a.createElement(d.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart},m.a.createElement("div",{className:"row"},this.state.columnOrder.map((function(a){var t=e.state.columns[a],n=t.taskIds.map((function(a){return e.state.tasks[a]}));return m.a.createElement(b,{key:t.id,column:t,tasks:n})})))))))))))))}}]),a}(o.Component);a.default=f},151:function(e,a,t){e.exports=t.p+"static/media/face7.7af91f95.jpg"},152:function(e,a,t){e.exports=t.p+"static/media/face10.e3a405bd.jpg"},159:function(e,a,t){e.exports=t.p+"static/media/face9.37ede861.jpg"},173:function(e,a,t){e.exports=t.p+"static/media/face8.83f317fa.jpg"}}]);
//# sourceMappingURL=39.99ab36ca.chunk.js.map