(window["webpackJsonppurple-react-pro"]=window["webpackJsonppurple-react-pro"]||[]).push([[37],{1102:function(e,a,t){"use strict";t.r(a),t.d(a,"Dashboard",(function(){return N}));var l=t(33),n=t(61),r=t(11),c=t(12),m=t(14),s=t(13),i=t(32),d=t(15),o=t(0),u=t.n(o),E=t(164),g=t(217),b=t(231),h=t.n(b),p=t(1),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).handleChange=function(e){t.setState({startDate:e})},t.state={startDate:new Date,visitSaleData:{},visitSaleOptions:{scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{drawBorder:!1,color:"rgba(235,237,242,1)",zeroLineColor:"rgba(235,237,242,1)"}}],xAxes:[{gridLines:{display:!1,drawBorder:!1,color:"rgba(0,0,0,1)",zeroLineColor:"rgba(235,237,242,1)"},ticks:{padding:20,fontColor:"#9c9fa6",autoSkip:!0},categoryPercentage:.5,barPercentage:.5}]},legend:{display:!1},elements:{point:{radius:0}}},trafficData:{},trafficOptions:{responsive:!0,animation:{animateScale:!0,animateRotate:!0},legend:!1},todos:[{id:1,task:"\u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",isCompleted:!1},{id:2,task:"\u0627\u0644\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643",isCompleted:!0},{id:3,task:"\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",isCompleted:!1},{id:4,task:"\u0625\u0646\u0634\u0627\u0621 \u0641\u0627\u062a\u0648\u0631\u0629",isCompleted:!1},{id:5,task:"\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u062c\u0648\u0646",isCompleted:!0},{id:6,task:"\u0644\u0642\u0627\u0621 \u0645\u0639 \u0623\u0644\u064a\u0633\u0627",isCompleted:!1}],inputValue:""},t.statusChangedHandler=t.statusChangedHandler.bind(Object(i.a)(t)),t.addTodo=t.addTodo.bind(Object(i.a)(t)),t.removeTodo=t.removeTodo.bind(Object(i.a)(t)),t.inputChangeHandler=t.inputChangeHandler.bind(Object(i.a)(t)),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"statusChangedHandler",value:function(e,a){var t=Object(n.a)({},this.state.todos[a]);t.isCompleted=e.target.checked;var r=Object(l.a)(this.state.todos);r[a]=t,this.setState({todos:r})}},{key:"addTodo",value:function(e){e.preventDefault();var a=Object(l.a)(this.state.todos);a.unshift({id:a.length?a[a.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:a,inputValue:""})}},{key:"removeTodo",value:function(e){var a=Object(l.a)(this.state.todos);a.splice(e,1),this.setState({todos:a})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"componentDidMount",value:function(){var e=document.getElementById("visitSaleChart").getContext("2d"),a=e.createLinearGradient(0,0,0,181);a.addColorStop(0,"rgba(218, 140, 255, 1)"),a.addColorStop(1,"rgba(154, 85, 255, 1)");var t=e.createLinearGradient(0,0,0,360);t.addColorStop(0,"rgba(54, 215, 232, 1)"),t.addColorStop(1,"rgba(177, 148, 250, 1)");var l=e.createLinearGradient(0,0,0,300);l.addColorStop(0,"rgba(255, 191, 150, 1)"),l.addColorStop(1,"rgba(254, 112, 150, 1)");var n=e.createLinearGradient(0,0,0,181);n.addColorStop(0,"rgba(54, 215, 232, 1)"),n.addColorStop(1,"rgba(177, 148, 250, 1)");var r=e.createLinearGradient(0,0,0,50);r.addColorStop(0,"rgba(6, 185, 157, 1)"),r.addColorStop(1,"rgba(132, 217, 210, 1)");var c=e.createLinearGradient(0,0,0,300);c.addColorStop(0,"rgba(254, 124, 150, 1)"),c.addColorStop(1,"rgba(255, 205, 150, 1)");var m={labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG"],datasets:[{label:"CHN",borderColor:a,backgroundColor:a,hoverBackgroundColor:a,legendColor:a,pointRadius:0,fill:!1,borderWidth:1,data:[20,40,15,35,25,50,30,20]},{label:"USA",borderColor:t,backgroundColor:t,hoverBackgroundColor:t,legendColor:t,pointRadius:0,fill:!1,borderWidth:1,data:[40,30,20,10,50,15,35,40]},{label:"UK",borderColor:l,backgroundColor:l,hoverBackgroundColor:l,legendColor:l,pointRadius:0,fill:!1,borderWidth:1,data:[70,10,30,40,25,50,15,30]}]},s={datasets:[{data:[30,30,40],backgroundColor:[n,r,c],hoverBackgroundColor:[n,r,c],borderColor:[n,r,c],legendColor:[n,r,c]}],labels:["Search Engines","Direct Click","Bookmarks Click"]};this.setState({visitSaleData:m,trafficData:s})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{className:"page-header"},u.a.createElement("h3",{className:"page-title"},u.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-white ml-2"},u.a.createElement("i",{className:"mdi mdi-home"}))," ",u.a.createElement(p.a,null,"Dashboard")," "),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ul",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},u.a.createElement("span",null),u.a.createElement(p.a,null,"Overview")," ",u.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-danger card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(168),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},u.a.createElement(p.a,null,"Weekly Sales")," ",u.a.createElement("i",{className:"mdi mdi-chart-line mdi-24px float-right ml-2"})),u.a.createElement("h2",{className:"mb-5"},"$ 15,0000"),u.a.createElement("h6",{className:"card-text"},u.a.createElement(p.a,null,"Increased by")," 60%")))),u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-info card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(168),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},u.a.createElement(p.a,null,"Weekly Orders")," ",u.a.createElement("i",{className:"mdi mdi-bookmark-outline mdi-24px float-right ml-2"})),u.a.createElement("h2",{className:"mb-5"},"45,6334"),u.a.createElement("h6",{className:"card-text"},u.a.createElement(p.a,null,"Decreased by")," 10%")))),u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-success card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(168),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},u.a.createElement(p.a,null,"Visitors Online")," ",u.a.createElement("i",{className:"mdi mdi-diamond mdi-24px float-right ml-2"})),u.a.createElement("h2",{className:"mb-5"},"95,5741"),u.a.createElement("h6",{className:"card-text"},u.a.createElement(p.a,null,"Increased by")," 5%"))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"clearfix mb-4"},u.a.createElement("h4",{className:"card-title float-left"},u.a.createElement(p.a,null,"Visit And Sales Statistics")),u.a.createElement("div",{id:"visit-sale-chart-legend",className:"rounded-legend legend-horizontal legend-top-right float-right"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-primary"}),u.a.createElement(p.a,null,"CHN")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-danger"}),u.a.createElement(p.a,null,"USA")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-info"}),u.a.createElement(p.a,null,"UK"))))),u.a.createElement(g.a,{ref:"chart",className:"chartLegendContainer",data:this.state.visitSaleData,options:this.state.visitSaleOptions,id:"visitSaleChart"})))),u.a.createElement("div",{className:"col-md-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},u.a.createElement(p.a,null,"Traffic Sources")),u.a.createElement(g.b,{data:this.state.trafficData,options:this.state.trafficOptions}),u.a.createElement("div",{id:"traffic-chart-legend",className:"rounded-legend legend-vertical legend-bottom-left pt-4"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-info"}),u.a.createElement(p.a,null,"Search Engines"),u.a.createElement("span",{className:"float-right"},"30%")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-success"}),u.a.createElement(p.a,null,"Direct Click"),u.a.createElement("span",{className:"float-right"},"30%")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-danger"}),u.a.createElement(p.a,null,"Bookmarks Click"),u.a.createElement("span",{className:"float-right"},"40%")))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},u.a.createElement(p.a,null,"Recent Tickets")),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Assignee")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Subject")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Status")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Last Update")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Tracking ID")," "))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(59),className:"ml-2",alt:"face"})," ",u.a.createElement(p.a,null,"David Grey")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Fund is not recieved")," "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-success"},u.a.createElement(p.a,null,"DONE"))),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Dec")," 5, 2017 "),u.a.createElement("td",null," WD-12345 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(69),className:"ml-2",alt:"face"})," ",u.a.createElement(p.a,null,"Stella Johnson")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"High loading time")," "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-warning"},u.a.createElement(p.a,null,"PROGRESS"))),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Dec")," 12, 2017 "),u.a.createElement("td",null," WD-12346 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(68),className:"ml-2",alt:"face"})," ",u.a.createElement(p.a,null,"Marina Michel")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Website down for one week")," "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-info"},u.a.createElement(p.a,null,"ON HOLD"))),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Dec")," 16, 2017 "),u.a.createElement("td",null," WD-12347 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(71),className:"ml-2",alt:"face"})," ",u.a.createElement(p.a,null,"John Doe")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Loosing control on server")," "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-danger"},u.a.createElement(p.a,null,"REJECTED"))),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Dec")," 3, 2017 "),u.a.createElement("td",null," WD-12348 "))))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body p-0 d-flex"},u.a.createElement("div",{className:"dashboard-custom-date-picker"},u.a.createElement(h.a,{inline:!0,selected:this.state.startDate,onChange:this.handleChange}))))),u.a.createElement("div",{className:"col-lg-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},u.a.createElement(p.a,null,"Recent Updates")),u.a.createElement("div",{className:"d-flex"},u.a.createElement("div",{className:"d-flex align-items-center ml-4 text-muted font-weight-light"},u.a.createElement("i",{className:"mdi mdi-account-outline icon-sm ml-2"}),u.a.createElement("span",null,u.a.createElement(p.a,null,"jack Menqu"))),u.a.createElement("div",{className:"d-flex align-items-center text-muted font-weight-light"},u.a.createElement("i",{className:"mdi mdi-clock icon-sm ml-2"}),u.a.createElement("span",null,u.a.createElement(p.a,null,"October")," 3rd, 2018"))),u.a.createElement("div",{className:"row mt-3"},u.a.createElement("div",{className:"col-6 pr-1"},u.a.createElement("img",{src:t(190),className:"mb-2 mw-100 w-100 rounded",alt:"face"}),u.a.createElement("img",{src:t(267),className:"mw-100 w-100 rounded",alt:"face"})),u.a.createElement("div",{className:"col-6 pl-1"},u.a.createElement("img",{src:t(191),className:"mb-2 mw-100 w-100 rounded",alt:"face"}),u.a.createElement("img",{src:t(192),className:"mw-100 w-100 rounded",alt:"face "}))),u.a.createElement("div",{className:"d-flex mt-5 align-items-start"},u.a.createElement("img",{src:t(68),className:"img-sm rounded-circle ml-3",alt:"face"}),u.a.createElement("div",{className:"mb-0 flex-grow"},u.a.createElement("h5",{className:"mr-2 mb-2"},u.a.createElement(p.a,null,"School Website")," - ",u.a.createElement(p.a,null,"Authentication Module"),"."),u.a.createElement("p",{className:"mb-0 font-weight-light"},u.a.createElement(p.a,null,"It is a long established fact that a reader will be distracted by the readable content of a page"),".")),u.a.createElement("div",{className:"ml-auto"},u.a.createElement("i",{className:"mdi mdi-heart-outline text-muted"}))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-xl-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},u.a.createElement(p.a,null,"Project Status")),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null," # "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Name")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Due Date")," "),u.a.createElement("th",null," ",u.a.createElement(p.a,null,"Progress")," "))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null," 1 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Herman Beck")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"May")," 15, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-success",now:25}))),u.a.createElement("tr",null,u.a.createElement("td",null," 2 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Messsy Adam")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Jul")," 01, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-danger",now:75}))),u.a.createElement("tr",null,u.a.createElement("td",null," 3 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"John Richards")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Apr")," 12, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-warning",now:90}))),u.a.createElement("tr",null,u.a.createElement("td",null," 4 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Peter Meggik")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"May")," 15, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-primary",now:50}))),u.a.createElement("tr",null,u.a.createElement("td",null," 5 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Edward")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"May")," 03, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-danger",now:50}))),u.a.createElement("tr",null,u.a.createElement("td",null," 5 "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Ronald")," "),u.a.createElement("td",null," ",u.a.createElement(p.a,null,"Jun")," 05, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-info",now:65}))))))))),u.a.createElement("div",{className:"col-xl-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title text-white"},"Todo List"),u.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},u.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"What do you need to do today?",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),u.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary font-weight-bold px-lg-4 px-3"},u.a.createElement(p.a,null,"Add"))),u.a.createElement("div",{className:"list-wrapper"},u.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(a,t){return u.a.createElement(v,{isCompleted:a.isCompleted,changed:function(a){return e.statusChangedHandler(a,t)},key:a.id,remove:function(){return e.removeTodo(t)}},a.task)})))))))))}}]),a}(o.Component),v=function(e){return u.a.createElement("li",{className:e.isCompleted?"completed":null},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{htmlFor:"",className:"form-check-label"},u.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",u.a.createElement("i",{className:"input-helper"}))),u.a.createElement("i",{className:"remove mdi mdi-close-circle-outline",onClick:e.remove}))};a.default=N},164:function(e,a,t){"use strict";var l=t(3),n=t(4),r=t(5),c=t.n(r),m=t(0),s=t.n(m),i=t(7),d=t(46),o=1e3;function u(e,a,t){var l=(e-a)/(t-a)*100;return Math.round(l*o)/o}function E(e,a){var t,r=e.min,m=e.now,i=e.max,d=e.label,o=e.srOnly,E=e.striped,g=e.animated,b=e.className,h=e.style,p=e.variant,N=e.bsPrefix,v=Object(n.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return s.a.createElement("div",Object(l.a)({ref:a},v,{role:"progressbar",className:c()(b,N+"-bar",(t={},t["bg-"+p]=p,t[N+"-bar-animated"]=g,t[N+"-bar-striped"]=g||E,t)),style:Object(l.a)({width:u(m,r,i)+"%"},h),"aria-valuenow":m,"aria-valuemin":r,"aria-valuemax":i}),o?s.a.createElement("span",{className:"sr-only"},d):d)}var g=s.a.forwardRef((function(e,a){var t=e.isChild,r=Object(n.a)(e,["isChild"]);if(r.bsPrefix=Object(i.b)(r.bsPrefix,"progress"),t)return E(r,a);var o=r.min,u=r.now,g=r.max,b=r.label,h=r.srOnly,p=r.striped,N=r.animated,v=r.bsPrefix,f=r.variant,C=r.className,w=r.children,y=Object(n.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return s.a.createElement("div",Object(l.a)({ref:a},y,{className:c()(C,v)}),w?Object(d.b)(w,(function(e){return Object(m.cloneElement)(e,{isChild:!0})})):E({min:o,now:u,max:g,label:b,srOnly:h,striped:p,animated:N,bsPrefix:v,variant:f},a))}));g.displayName="ProgressBar",g.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=g},168:function(e,a,t){e.exports=t.p+"static/media/circle.1541da91.svg"},190:function(e,a,t){e.exports=t.p+"static/media/img_1.3a82198a.jpg"},191:function(e,a,t){e.exports=t.p+"static/media/img_2.1b4a771c.jpg"},192:function(e,a,t){e.exports=t.p+"static/media/img_3.573908af.jpg"},267:function(e,a,t){e.exports=t.p+"static/media/img_4.ea8a7a45.jpg"}}]);
//# sourceMappingURL=37.d7a5c8bb.chunk.js.map