(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[31],{675:function(e,a,t){"use strict";t.r(a),t.d(a,"ChartJs",(function(){return b}));var s=t(11),l=t(12),n=t(13),i=t(14),r=t(15),c=t(0),o=t.n(c),m=t(72),d=t(153),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(t=Object(n.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).barChartData={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:"#560bd0",borderColor:"#560bd0",borderWidth:1,fill:!1}]},t.barChartOptions={maintainAspectRatio:!1,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{barPercentage:.6,ticks:{beginAtZero:!0,fontSize:11}}]}},t.horizontalBarChartData={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"# of Votes",data:[12,39,20,10,25,18],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00","#f10075"],borderColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00","#f10075"],borderWidth:1,fill:!1}]},t.horizontalBarChartOptions={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11,max:80}}]}},t.horizontalBarChartData2={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[12,39,20,10,25,18],backgroundColor:["#560bd0","#007bff","#74de00","#f10075","#74de00","#f10075"]},{data:[22,30,25,30,20,40],backgroundColor:"#cad0e8"}]},t.horizontalBarChartOptions2={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:11}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11,max:80}}]}},t.stackedBarChartData={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"#314d83",borderWidth:1,fill:!0},{data:[10,24,20,25,35,50],backgroundColor:"#007bff",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"#cad0e8",borderWidth:1,fill:!0}]},t.stackedBarChartOptions={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0,fontSize:11}}],xAxes:[{barPercentage:.5,stacked:!0,ticks:{fontSize:11}}]}},t.horizontalStackedBarChartData={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{data:[10,24,20,25,35,50],backgroundColor:"#314d83",borderWidth:1,fill:!0},{data:[10,24,20,25,35,50],backgroundColor:"#007bff",borderWidth:1,fill:!0},{data:[20,30,28,33,45,65],backgroundColor:"#cad0e8",borderWidth:1,fill:!0}]},t.horizontalStackedBarChartOptions={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0,fontSize:11}}]}},t.lineChartData={labels:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[12,15,18,40,35,38,32,20,25,15,25,30],borderColor:"#f10075",borderWidth:1,fill:!1},{data:[10,20,25,55,50,45,35,30,45,35,55,40],borderColor:"#007bff",borderWidth:1,fill:!1}]},t.lineChartOptions={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}},t.areaChartData={labels:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[12,15,18,40,35,38,32,20,25,15,25,30],borderColor:"#f10075",borderWidth:1,backgroundColor:"rgba(241,0,117,.3)"},{data:[10,20,25,55,50,45,35,37,45,35,55,40],borderColor:"#007bff",borderWidth:1,backgroundColor:"rgba(0,123,255,.3)"}]},t.areaChartOptions={maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,max:80}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:11}}]}},t.doughnutPieData={labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}]},t.doughnutPieOptions={maintainAspectRatio:!1,responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}},t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container d-flex p-md-0"},o.a.createElement(m.a,null),o.a.createElement("div",{className:"az-content-body pd-lg-l-40 d-flex flex-column"},o.a.createElement("div",{className:"az-content-breadcrumb"},o.a.createElement("span",null,"Components"),o.a.createElement("span",null,"Charts"),o.a.createElement("span",null,"ChartJS Charts")),o.a.createElement("h2",{className:"az-content-title"},"ChartJS Charts"),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Bar Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below is the basic bar chart example."),o.a.createElement("div",{className:"row row-sm"},o.a.createElement("div",{className:"col-sm-8 col-md-6 col-xl-4"},o.a.createElement("div",{className:"ht-200 ht-lg-250"},o.a.createElement(d.a,{data:this.barChartData,options:this.barChartOptions})))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Horizontal Bar Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below is the horizontal bar chart example."),o.a.createElement("div",{className:"row row-sm"},o.a.createElement("div",{className:"col-sm-8 col-md-6"},o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.c,{data:this.horizontalBarChartData,options:this.barChartOptions}))),o.a.createElement("div",{className:"col-sm-8 col-md-6 mg-t-20 mg-md-t-0"},o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.c,{data:this.horizontalBarChartData2,options:this.horizontalBarChartOptions2})))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Stacked Bar Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below are the vertical and horizontal bar chart example."),o.a.createElement("div",{className:"row row-sm"},o.a.createElement("div",{className:"col-sm-8 col-md-6"},o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.a,{data:this.stackedBarChartData,options:this.stackedBarChartOptions}))),o.a.createElement("div",{className:"col-sm-8 col-md-6 mg-t-20 mg-md-t-0"},o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.c,{data:this.horizontalStackedBarChartData,options:this.horizontalStackedBarChartOptions})))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"row row-sm"},o.a.createElement("div",{className:"col-sm-8 col-md-6"},o.a.createElement("div",{className:"az-content-label mg-b-5"},"Line Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below is the basic line chart example."),o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.d,{data:this.lineChartData,options:this.lineChartOptions}))),o.a.createElement("div",{className:"col-sm-8 col-md-6 mg-t-20 mg-md-t-0"},o.a.createElement("div",{className:"az-content-label mg-b-5"},"Area Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below is the basic area chart example."),o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.d,{data:this.areaChartData,options:this.areaChartOptions})))),o.a.createElement("hr",{className:"mg-y-30"}),o.a.createElement("div",{className:"az-content-label mg-b-5"},"Pie & Donut Chart"),o.a.createElement("p",{className:"mg-b-20"},"Below are an example of data in a pie and donut chart."),o.a.createElement("div",{className:"d-md-flex"},o.a.createElement("div",{className:"chartjs-wrapper-demo mg-b-20 mg-md-b-0 mg-md-r-30 mg-xl-r-40"},o.a.createElement(d.b,{data:this.doughnutPieData,options:this.doughnutPieOptions})),o.a.createElement("div",{className:"chartjs-wrapper-demo"},o.a.createElement(d.e,{data:this.doughnutPieData,options:this.doughnutPieOptions}))),o.a.createElement("div",{className:"ht-40"}))))}}]),a}(c.Component);a.default=b},72:function(e,a,t){"use strict";var s=t(11),l=t(12),n=t(13),i=t(14),r=t(15),c=t(0),o=t.n(c),m=t(1),d=t(16),b=function(e){function a(){return Object(s.a)(this,a),Object(n.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"az-content-left az-content-left-components"},o.a.createElement("div",{className:"component-item"},o.a.createElement("label",null,"UI Elements"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(m.b,{to:"/ui-elements/accordions",className:this.isPathActive("/ui-elements/accordions")?"nav-link active":"nav-link"},"Accordion"),o.a.createElement(m.b,{to:"/ui-elements/alerts",className:this.isPathActive("/ui-elements/alerts")?"nav-link active":"nav-link"},"Alerts"),o.a.createElement(m.b,{to:"/ui-elements/avatar",className:this.isPathActive("/ui-elements/avatar")?"nav-link active":"nav-link"},"Avatar"),o.a.createElement(m.b,{to:"/ui-elements/badges",className:this.isPathActive("/ui-elements/badges")?"nav-link active":"nav-link"},"Badge"),o.a.createElement(m.b,{to:"/ui-elements/breadcrumbs",className:this.isPathActive("/ui-elements/breadcrumbs")?"nav-link active":"nav-link"},"Breadcrumbs"),o.a.createElement(m.b,{to:"/ui-elements/buttons",className:this.isPathActive("/ui-elements/buttons")?"nav-link active":"nav-link"},"Buttons"),o.a.createElement(m.b,{to:"/ui-elements/cards",className:this.isPathActive("/ui-elements/cards")?"nav-link active":"nav-link"},"Cards"),o.a.createElement(m.b,{to:"/ui-elements/carousel",className:this.isPathActive("/ui-elements/carousel")?"nav-link active":"nav-link"},"Carousel"),o.a.createElement(m.b,{to:"/ui-elements/collapse",className:this.isPathActive("/ui-elements/collapse")?"nav-link active":"nav-link"},"Collapse"),o.a.createElement(m.b,{to:"/ui-elements/dropdowns",className:this.isPathActive("/ui-elements/dropdowns")?"nav-link active":"nav-link"},"Dropdown"),o.a.createElement(m.b,{to:"/ui-elements/icons",className:this.isPathActive("/ui-elements/icons")?"nav-link active":"nav-link"},"Icons"),o.a.createElement(m.b,{to:"/ui-elements/images",className:this.isPathActive("/ui-elements/images")?"nav-link active":"nav-link"},"Images"),o.a.createElement(m.b,{to:"/ui-elements/list-group",className:this.isPathActive("/ui-elements/list-group")?"nav-link active":"nav-link"},"List Group"),o.a.createElement(m.b,{to:"/ui-elements/media-object",className:this.isPathActive("/ui-elements/media-object")?"nav-link active":"nav-link"},"Media Object"),o.a.createElement(m.b,{to:"/ui-elements/modals",className:this.isPathActive("/ui-elements/modals")?"nav-link active":"nav-link"},"Modals"),o.a.createElement(m.b,{to:"/ui-elements/navigation",className:this.isPathActive("/ui-elements/navigation")?"nav-link active":"nav-link"},"Navigation"),o.a.createElement(m.b,{to:"/ui-elements/pagination",className:this.isPathActive("/ui-elements/pagination")?"nav-link active":"nav-link"},"Pagination"),o.a.createElement(m.b,{to:"/ui-elements/popover",className:this.isPathActive("/ui-elements/popover")?"nav-link active":"nav-link"},"Popover"),o.a.createElement(m.b,{to:"/ui-elements/progress",className:this.isPathActive("/ui-elements/progress")?"nav-link active":"nav-link"},"Progress"),o.a.createElement(m.b,{to:"/ui-elements/spinners",className:this.isPathActive("/ui-elements/spinners")?"nav-link active":"nav-link"},"Spinners"),o.a.createElement(m.b,{to:"/ui-elements/toast",className:this.isPathActive("/ui-elements/toast")?"nav-link active":"nav-link"},"Toast"),o.a.createElement(m.b,{to:"/ui-elements/tooltip",className:this.isPathActive("/ui-elements/tooltip")?"nav-link active":"nav-link"},"Tooltip")),o.a.createElement("label",null,"Forms"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(m.b,{to:"/form/form-elements",className:this.isPathActive("/form/form-elements")?"nav-link active":"nav-link"},"Form Elements"),o.a.createElement(m.b,{to:"/form/form-layouts",className:this.isPathActive("/form/form-layouts")?"nav-link active":"nav-link"},"Form Layouts"),o.a.createElement(m.b,{to:"/form/form-validation",className:this.isPathActive("/form/form-validation")?"nav-link active":"nav-link"},"Form Validation"),o.a.createElement(m.b,{to:"/form/form-wizards",className:this.isPathActive("/form/form-wizards")?"nav-link active":"nav-link"},"Form Wizards"),o.a.createElement(m.b,{to:"/form/wysiwyg-editor",className:this.isPathActive("/form/wysiwyg-editor")?"nav-link active":"nav-link"},"WYSIWYG Editor")),o.a.createElement("label",null,"Charts"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(m.b,{to:"/charts/chartjs",className:this.isPathActive("/charts/chartjs")?"nav-link active":"nav-link"},"ChartJS")),o.a.createElement("label",null,"Tables"),o.a.createElement("nav",{className:"nav flex-column"},o.a.createElement(m.b,{to:"/tables/basic-table",className:this.isPathActive("/tables/basic-table")?"nav-link active":"nav-link"},"Basic Tables"),o.a.createElement(m.b,{to:"/tables/data-tables",className:this.isPathActive("/tables/data-tables")?"nav-link active":"nav-link"},"Data Tables")))))}},{key:"isPathActive",value:function(e){return this.props.location.pathname.startsWith(e)}}]),a}(c.Component);a.a=Object(d.g)(b)}}]);
//# sourceMappingURL=31.4639e453.chunk.js.map