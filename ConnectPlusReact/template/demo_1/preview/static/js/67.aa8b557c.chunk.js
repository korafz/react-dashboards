(window["webpackJsonpconnect-plus-react"]=window["webpackJsonpconnect-plus-react"]||[]).push([[67],{1184:function(e,a,t){"use strict";t.r(a),t.d(a,"Calendar",(function(){return h}));var c=t(12),l=t(13),n=t(15),r=t(14),m=t(16),s=t(0),i=t.n(s),d=t(1022),o=t(477),u=t(1024),E=t(1025),h=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(n.a)(this,Object(r.a)(a).call(this))).calendarComponentRef=i.a.createRef(),e.handleDateClick=function(a){window.confirm("Would you like to add an event to "+a.dateStr+" ?")&&e.setState({calendarEvents:e.state.calendarEvents.concat({title:"New Event",start:a.date,allDay:a.allDay})})},e.state={calendarWeekends:!0,calendarEvents:[{title:"Event Now",start:new Date}]},e}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Calendar"),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Apps")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Calendar")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"fc-external-events"},i.a.createElement("div",{className:"fc-event"},i.a.createElement("p",null,"Deciphering Marketing Lingo For Small Business Owners"),i.a.createElement("p",{className:"small-text"}),i.a.createElement("p",{className:"text-muted mb-0"},"Georgia")),i.a.createElement("div",{className:"fc-event"},i.a.createElement("p",null,"Influencing The Influencer"),i.a.createElement("p",{className:"small-text"}),i.a.createElement("p",{className:"text-muted mb-0"},"Netherlands")),i.a.createElement("div",{className:"fc-event"},i.a.createElement("p",null,"Profiles Of The Powerful Advertising Exec Steve Grasse"),i.a.createElement("p",{className:"small-text"}),i.a.createElement("p",{className:"text-muted mb-0"},"Canada"))),i.a.createElement("div",{className:"mt-4"},i.a.createElement("p",null,"Filter board"),i.a.createElement("div",{className:"form-check form-check-primary"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0}),i.a.createElement("i",{className:"input-helper"}),"Project Board")),i.a.createElement("div",{className:"form-check form-check-danger"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0}),i.a.createElement("i",{className:"input-helper"}),"Kanban Board")),i.a.createElement("div",{className:"form-check form-check-info"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0}),i.a.createElement("i",{className:"input-helper"}),"Summary Board")),i.a.createElement("div",{className:"form-check form-check-success"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"checkbox",className:"form-check-input",defaultChecked:!0}),i.a.createElement("i",{className:"input-helper"}),"Planner Board")))),i.a.createElement("div",{className:"col-md-9"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Fullcalendar"),i.a.createElement(d.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[o.d,u.a,E.a],ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:this.state.calendarEvents,dateClick:this.handleDateClick}))))))}}]),a}(s.Component);a.default=h}}]);
//# sourceMappingURL=67.aa8b557c.chunk.js.map