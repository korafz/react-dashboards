(window["webpackJsonpconnect-plus-react"]=window["webpackJsonpconnect-plus-react"]||[]).push([[65],{1134:function(e,a,t){"use strict";t.r(a),t.d(a,"Sliders",(function(){return E}));var n=t(12),r=t(13),s=t(15),c=t(14),l=t(16),m=t(0),i=t.n(m),d=t(632),o=t.n(d),E=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).onUpdateRange=function(e){return function(a,n,r,s,c){var l={};"range_1"===e?(l[e]=Math.round(c[0]),t.setState(l)):"range_2"!==e&&"range_3"!==e&&"range_4"!==e||(l[e]=[Math.round(c[0]),Math.round(c[1])],t.setState(l))}},t.state={range_1:53,range_2:[20,80],range_3:[20,80],range_4:[20,80],range_5:[23.4,54.3],range_6:[29.1,74.1],range_7:[13.4,89.3]},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Slider"),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"UI Elements")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Slider")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Horizontal slider"),i.a.createElement("p",{className:"card-description"},"noUiSlider is a range slider without bloat. It offers a ton off features, and it is as small, lightweight and minimal as possible"),i.a.createElement("div",{className:"template-demo"},i.a.createElement(o.a,{range:{min:0,max:100},start:72,connect:[!0,!1],className:"slider-primary"}),i.a.createElement(o.a,{range:{min:0,max:100},start:92,connect:[!0,!1],className:"slider-danger"}),i.a.createElement(o.a,{range:{min:0,max:100},start:43,connect:[!0,!1],className:"slider-warning"}),i.a.createElement(o.a,{range:{min:0,max:100},start:20,connect:[!0,!1],className:"slider-info"}),i.a.createElement(o.a,{range:{min:0,max:100},start:75,connect:[!0,!1],className:"slider-success"}))))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Vertical slider"),i.a.createElement("p",{className:"card-description"},"The orientation setting can be used to set the slider to ",i.a.createElement("code",null,'"vertical"')," or ",i.a.createElement("code",null,'"horizontal"')),i.a.createElement("div",{className:"template-demo d-flex justify-content-center"},i.a.createElement(o.a,{range:{min:0,max:100},start:72,connect:[!0,!1],orientation:"vertical",className:"slider-primary"}),i.a.createElement(o.a,{range:{min:0,max:100},start:92,connect:[!0,!1],orientation:"vertical",className:"slider-danger"}),i.a.createElement(o.a,{range:{min:0,max:100},start:43,connect:[!0,!1],orientation:"vertical",className:"slider-warning"}),i.a.createElement(o.a,{range:{min:0,max:100},start:20,connect:[!0,!1],orientation:"vertical",className:"slider-info"}),i.a.createElement(o.a,{range:{min:0,max:100},start:75,connect:[!0,!1],orientation:"vertical",className:"slider-success"}))))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Values range"),i.a.createElement("p",{className:"card-description"},"noUiSlider will keep your values within the slider range, which saves you a bunch of validation."),i.a.createElement("div",{className:"template-demo"},i.a.createElement(o.a,{range:{min:0,max:100},start:this.state.range_1,connect:!1,onUpdate:this.onUpdateRange("range_1"),className:"slider-primary"}),i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_1)))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Slider handles"),i.a.createElement("div",{className:"template-demo"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_2[0],this.state.range_2[1]],connect:!1,onUpdate:this.onUpdateRange("range_2"),className:"slider-primary"}),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_2[0])),i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_2[1]))))))),i.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Connected Handles"),i.a.createElement("p",{className:"card-description"},"The connect setting can be used to control the bar between the handles, or the edges of the slider"),i.a.createElement("div",{className:"template-demo"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_3[0],this.state.range_3[1]],connect:!0,onUpdate:this.onUpdateRange("range_3"),className:"slider-warning"}),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_3[0])),i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_3[1]))))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Connected Handles Variation"),i.a.createElement("div",{className:"template-demo"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_4[0],this.state.range_4[1]],connect:!0,onUpdate:this.onUpdateRange("range_4"),className:"slider-danger"}),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_4[0])),i.a.createElement("p",{className:"mt-3"},"Value: ",i.a.createElement("span",null,this.state.range_4[1]))))))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Slider with tooltip"),i.a.createElement("p",{className:"card-description"},"noUiSlider can provide a basic tooltip without using its events system. Set the tooltips option to ",i.a.createElement("code",null,"true")," to enable."),i.a.createElement("div",{className:"mt-5 pt-4 w-75 mx-auto"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_5[0],this.state.range_5[1]],connect:!0,tooltips:!0,className:"slider-primary"}))),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Color Variations"),i.a.createElement("p",{className:"card-description"},"Tooltip slider with different color options, use class ",i.a.createElement("code",null,"slider-*")," to quickly create a styled slider. Uses native boostrap colors scheme classes"),i.a.createElement("div",{className:"mt-5 pt-4 w-75 mx-auto"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_6[0],this.state.range_6[1]],connect:!0,tooltips:!0,className:"slider-success"})),i.a.createElement("div",{className:"mt-5 pt-4 w-75 mx-auto pt-5"},i.a.createElement(o.a,{range:{min:0,max:100},start:[this.state.range_7[0],this.state.range_7[1]],connect:!0,tooltips:!0,className:"slider-danger"})))))))))}}]),a}(m.Component);a.default=E}}]);
//# sourceMappingURL=65.f7e07e89.chunk.js.map