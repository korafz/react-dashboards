(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[102],{1139:function(e,a,t){"use strict";t.r(a),t.d(a,"ReactTablePage",(function(){return h}));var r=t(221),n=t(12),s=t(13),c=t(15),d=t(14),l=t(58),o=t(16),i=t(0),u=t.n(i),m=t(1103),h=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).state={data:[{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av",country:"Brazil  "},{name:"Herman Rosa",age:49,address:"718-7162 Molestie Av.",country:"Russia  "},{name:"Jonah Johns",age:28,address:"P.O. Box 939, 9310 A Ave",country:"Brazzil  "},{name:"Otto Clay",age:61,address:"Ap #897-1459 Quam Avenue",country:"China "},{name:"Connor Johnston",age:71,address:"Ap #370-4647 Dis Av.",country:"Russia "},{name:"Lacey Hess",age:29,address:"Ap #365-8835 Integer St.",country:"Russia "},{name:"Timothy Henson",age:78,address:"911-5143 Luctus Ave",country:"US "},{name:"Ramona Benton",age:44,address:"Ap #614-689 Vehicula Street",country:"Brazil "},{name:"Ezra Tillman",age:51,address:"P.O. Box 738, 7583 Quisque St.",country:"Us "},{name:"Dante Carter",age:59,address:"P.O. Box 976, 6316 Lorem, St.",country:"US "},{name:"Christopher Mcclure",age:58,address:"847-4303 Dictum Av.",country:"China "},{name:"Ruby Rocha",age:62,address:"5212 Sagittis Ave",country:"Canada "},{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av.",country:"Brazil"},{name:"Jonah Johns",age:26,address:"P.O. Box 939, 9310 A Ave",country:"Brazil "},{name:"Herman Rosa",age:49,address:"718-7162 Molestie Av.",country:"Russia  "},{name:"Jonah Johns",age:28,address:"P.O. Box 939, 9310 A Ave",country:"Brazzil  "},{name:"Otto Clay",age:61,address:"Ap #897-1459 Quam Avenue",country:"China "},{name:"Connor Johnston",age:71,address:"Ap #370-4647 Dis Av.",country:"Russia "},{name:"Lacey Hess",age:29,address:"Ap #365-8835 Integer St.",country:"Russia "},{name:"Timothy Henson",age:78,address:"911-5143 Luctus Ave",country:"US "},{name:"Ramona Benton",age:44,address:"Ap #614-689 Vehicula Street",country:"Brazil "},{name:"Ezra Tillman",age:51,address:"P.O. Box 738, 7583 Quisque St.",country:"Us "},{name:"Dante Carter",age:59,address:"P.O. Box 976, 6316 Lorem, St.",country:"US "},{name:"Christopher Mcclure",age:58,address:"847-4303 Dictum Av.",country:"China "},{name:"Ruby Rocha",age:62,address:"5212 Sagittis Ave",country:"Canada "},{name:"Imelda Hardin",age:39,address:"719-7009 Auctor Av.",country:"Brazil"},{name:"Jonah Johns",age:26,address:"P.O. Box 939, 9310 A Ave",country:"Brazil "}]},e.renderEditable=e.renderEditable.bind(Object(l.a)(e)),e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"renderEditable",value:function(e){var a=this;return u.a.createElement("div",{style:{backgroundColor:"rgba(rgba(0, 0, 0, 0.03))"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(t){var n=Object(r.a)(a.state.data);n[e.index][e.column.id]=t.target.innerHTML,a.setState({data:n})},dangerouslySetInnerHTML:{__html:this.state.data[e.index][e.column.id]}})}},{key:"render",value:function(){var e=this.state.data;return u.a.createElement("div",null,u.a.createElement("div",{className:"page-header"},u.a.createElement("h3",{className:"page-title"}," React Tables "),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),u.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"React tables")))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"React Table"),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",null,u.a.createElement(m.a,{data:e,filterable:!0,defaultPageSize:10,columns:[{Header:"Name",accessor:"name",Cell:this.renderEditable},{Header:"Age",accessor:"age",Cell:this.renderEditable},{Header:"Address",accessor:"address",Cell:this.renderEditable},{Header:"Is Married",accessor:"married",Cell:function(e){return u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label text-muted"},u.a.createElement("input",{type:"checkbox",className:"form-check-input"}),u.a.createElement("i",{className:"input-helper"})))}},{Header:"Country",accessor:"country",Cell:this.renderEditable}]})))))))))}}]),a}(i.Component);a.default=h}}]);
//# sourceMappingURL=102.87e77faa.chunk.js.map