(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[89],{1135:function(e,a,t){"use strict";t.r(a),t.d(a,"AdvancedElements",(function(){return z}));var l=t(58),c=t(341),r=t(221),n=t(12),s=t(13),i=t(15),m=t(14),o=t(16),d=t(0),u=t.n(d),E=t(162),p=t(752),b=t.n(p),g=t(753),v=t.n(g),h=t(487),N=t(756),f=t(870),y=t(155),w=t(125),x=t(401),k=t.n(x),C=t(819),S=t.n(C),O=t(1102),j=t(823),R={display:"inline-block",width:"12px",height:"28px",backgroundColor:"rgba(182, 109, 255, 0.6)",margin:"1px"},D={display:"inline-block",width:"12px",height:"28px",backgroundColor:"rgba(182, 109, 255, 1)",margin:"1px"},V={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},A={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},T={display:"flex",minWidth:0,overflow:"hidden"},M={display:"block",width:"auto",height:"100%"},z=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={files:[]},e.onDrop=function(a){var t=Object(r.a)(e.state.files);e.setState({files:[].concat(Object(r.a)(t),Object(r.a)(a.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))))})},e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.files.map((function(e){return u.a.createElement("div",{style:A,key:e.name},u.a.createElement("div",{style:T},u.a.createElement("img",{src:e.preview,style:M,alt:"File preview"})))}));return u.a.createElement("div",null,u.a.createElement("div",{className:"page-header"},u.a.createElement("h3",{className:"page-title"}," Advanced form elements "),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Forms")),u.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Advanced elements")))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Fontawesome Rating"),u.a.createElement("p",{className:"card-description"}," Simple rating with font-awesome icons"),u.a.createElement(E.a,{initialRating:"1",emptySymbol:u.a.createElement("i",{className:"fa fa-star text-muted",style:{fontSize:"20px",marginRight:"2px"}}),fullSymbol:u.a.createElement("i",{className:"fa fa-star text-primary",style:{fontSize:"20px",marginRight:"2px"}})})))),u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"CSS Rating"),u.a.createElement("p",{className:"card-description"}," CSS star ratig"),u.a.createElement(E.a,{initialRating:"1",emptySymbol:u.a.createElement("i",{className:"mdi mdi-star text-muted mr-1",style:{fontSize:"20px",marginRight:"2px",display:"block"}}),fullSymbol:u.a.createElement("i",{className:"mdi mdi-star text-primary mr-1",style:{fontSize:"20px",marginRight:"2px"}})})))),u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"1/10 Rating"),u.a.createElement("p",{className:"card-description"},"Rating from 1 to 10"),u.a.createElement(E.a,{start:"1",stop:"10",initialRating:"7",emptySymbol:u.a.createElement("span",{style:R}),fullSymbol:u.a.createElement("span",{style:D})}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Fractional Rating"),u.a.createElement("p",{className:"card-description"}," Enable fractional rating such as 2.5"),u.a.createElement(E.a,{initialRating:"2.5",emptySymbol:u.a.createElement("i",{className:"fa fa-star-o text-muted",style:{fontSize:"30px",marginRight:"2px"}}),fullSymbol:u.a.createElement("i",{className:"fa fa-star text-primary",style:{fontSize:"30px",marginRight:"2px"}}),fractions:2})))),u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Custom each symbol"),u.a.createElement("p",{className:"card-description"}," Custom symbol for each value"),u.a.createElement(E.a,{stop:4,emptySymbol:"fa fa-battery-empty fa-2x text-muted mr-1",fullSymbol:["fa fa-battery-1 fa-2x text-primary mr-1","fa fa-battery-2 fa-2x text-primary mr-1","fa fa-battery-3 fa-2x text-primary mr-1","fa fa-battery-4 fa-2x text-primary mr-1"]})))),u.a.createElement("div",{className:"col-md-4 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Reverse Rating"),u.a.createElement("p",{className:"card-description"},"Rating from 9 to 1"),u.a.createElement(E.a,{start:11,stop:1,step:-2,initialRating:7,emptySymbol:u.a.createElement("span",{style:R}),fullSymbol:u.a.createElement("span",{style:D}),onChange:function(e){document.querySelector("#selectedValue").innerHTML=e||""},onHover:function(e){document.querySelector("#hoveredValue").innerHTML=e||""}}),u.a.createElement("label",{className:"d-block"},"Selected Value: ",u.a.createElement("span",{id:"selectedValue"},"7")),u.a.createElement("label",{className:"d-block"},"Hovered Value: ",u.a.createElement("span",{id:"hoveredValue"})))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Editable form"),u.a.createElement("p",{className:"card-description"},"Edit forms inline"),u.a.createElement("div",{className:"template-demo"},u.a.createElement("div",{className:"editable-form"},u.a.createElement("div",{className:"form-group row"},u.a.createElement("label",{className:"col-6 col-lg-4 col-form-label"},"Simple text field"),u.a.createElement("div",{className:"col-6 col-lg-8 d-flex align-items-center"},u.a.createElement(b.a,{initialValue:"awesome",isValueClickable:!0,mode:"inline"}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("label",{className:"col-6 col-lg-4 col-form-label"},"Empty text field, required"),u.a.createElement("div",{className:"col-6 col-lg-8 d-flex align-items-center"},u.a.createElement(b.a,{initialValue:"",isValueClickable:!0,mode:"inline",validate:function(e){return e?null:"This field is required"}}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("label",{className:"col-6 col-lg-4 col-form-label"},"Select, local array, custom display"),u.a.createElement("div",{className:"col-6 col-lg-8 d-flex align-items-center"},u.a.createElement(b.a,{initialValue:"Male",isValueClickable:!0,mode:"inline",type:"select",options:["Male","Female","Other"]}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("label",{className:"col-6 col-lg-4 col-form-label"},"Combodate (date)"),u.a.createElement("div",{className:"col-6 col-lg-8 d-flex align-items-center"},u.a.createElement(b.a,{initialValue:"15 May 1984",isValueClickable:!0,mode:"inline",type:"date"}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("label",{className:"col-6 col-lg-4 col-form-label"},"Textarea, buttons below."),u.a.createElement("div",{className:"col-6 col-lg-8 d-flex align-items-center"},u.a.createElement(b.a,{initialValue:"awesome user!",isValueClickable:!0,mode:"inline",type:"textarea"})))))))),u.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Form Mask"),u.a.createElement("p",{className:"card-description"},"Gives a preview of input format"),u.a.createElement("form",{className:"form-sample"},u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("label",null,"Phone:"),u.a.createElement(v.a,{mask:"+7 99 999 99",className:"form-control"}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("label",null,"Date with default value:"),u.a.createElement(v.a,{mask:"99/99/9999",defaultValue:"06-10-2019",className:"form-control"}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("label",null,"Date with custom placeholder:"),u.a.createElement(v.a,{mask:"99/99/9999",placeholder:"Enter birth date",className:"form-control"}))),u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("label",null,"Credit Card ",u.a.createElement("small",null,"(autochange to Amex format if starts with 34 or 37)"),":"),u.a.createElement(I,null)))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Dropzone"),u.a.createElement(h.a,{accept:"image/*",onDrop:this.onDrop},(function(a){var t=a.getRootProps,l=a.getInputProps;return u.a.createElement("section",null,u.a.createElement("div",Object.assign({},t(),{style:{minHeight:"200px",border:"1px solid #ebedf2"}}),u.a.createElement("input",l()),u.a.createElement("p",{className:"text-center my-5"},"Drag 'n' drop some files here, or click to select files")),u.a.createElement("aside",{style:V},e))}))))),u.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Dropzone"),u.a.createElement(F,null))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4 grid-margin grid-margin-lg-0"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Colorpicker (Sketch)"),u.a.createElement("p",{className:"card-description"},"Click to select color"),u.a.createElement(H,null))),u.a.createElement("div",{className:"col-lg-4 grid-margin grid-margin-lg-0"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Colorpicker (Photoshop)"),u.a.createElement("p",{className:"card-description"},"Click to select color"),u.a.createElement(P,null))),u.a.createElement("div",{className:"col-lg-4 grid-margin grid-margin-lg-0"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Colorpicker (Swatches)"),u.a.createElement("p",{className:"card-description"},"Click to select color"),u.a.createElement(B,null))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6 d-flex flex-column"},u.a.createElement("div",{className:"row flex-grow"},u.a.createElement("div",{className:"col-12 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Datepicker (Default)"),u.a.createElement("p",{className:"card-description"},"Click to open datepicker"),u.a.createElement(U,null))))),u.a.createElement("div",{className:"row flex-grow"},u.a.createElement("div",{className:"col-12 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Clockpicker (Default)"),u.a.createElement("p",{className:"card-description"},"A simple clockpicker"),u.a.createElement(L,null)))))),u.a.createElement("div",{className:"col-lg-6 stretch-card grid-margin"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Inline Datepicker"),u.a.createElement("p",{className:"card-description"},"An inline datepicker"),u.a.createElement(W,null))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Date Range"),u.a.createElement("p",{className:"card-description"},"A simple date range picker"),u.a.createElement(q,null))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Form Repeater"),u.a.createElement("p",{className:"card-description"},"Click the add button to repeat the form"),u.a.createElement(G,null))),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Input Tag"),u.a.createElement("p",{className:"card-description"},"Type to add a new tag "),u.a.createElement(J,null))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"React Select"),u.a.createElement("p",{className:"card-description"},"Single select box using react select"),u.a.createElement(O.a,{options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),u.a.createElement("p",{className:"card-description"},"Multiple select using react select"),u.a.createElement(O.a,{isMulti:!0,options:[{value:"violet",label:"Violet"},{value:"indigo",label:"Indigo"},{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"yellow",label:"Yellow"},{value:"orange",label:"Orange"},{value:"red",label:"Red"},{value:"black",label:"Black"},{value:"white",label:"White"}]})))),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Typeahead"),u.a.createElement("p",{className:"card-description"},"Type and select an option from the suggestions"),u.a.createElement(j.Typeahead,{labelKey:"label",id:"typeahead-single",options:[{value:"violet",label:"Violet"},{value:"indigo",label:"Indigo"},{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"yellow",label:"Yellow"},{value:"orange",label:"Orange"},{value:"red",label:"Red"},{value:"black",label:"Black"},{value:"white",label:"White"}],placeholder:"Choose a Color..."}),u.a.createElement("p",{className:"card-description"},"Multi select using typeahead"),u.a.createElement(j.Typeahead,{labelKey:"label",id:"typeahead-multiple",multiple:!0,options:[{value:"violet",label:"Violet"},{value:"indigo",label:"Indigo"},{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"yellow",label:"Yellow"},{value:"orange",label:"Orange"},{value:"red",label:"Red"},{value:"black",label:"Black"},{value:"white",label:"White"}],placeholder:"Choose a Color..."}))))))}}]),a}(d.Component),I=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={value:"",mask:"9999-9999-9999-9999"},t.onChange=function(e){var a=e.target.value,l={mask:"9999-9999-9999-9999",value:a};/^3[47]/.test(a)&&(l.mask="9999-999999-99999"),t.setState(l)},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement(v.a,Object.assign({},this.state,{onChange:this.onChange,className:"form-control"}))}}]),a}(d.Component);function F(e){var a=Object(h.b)({noClick:!0,noKeyboard:!0}),t=a.getRootProps,l=a.getInputProps,c=a.open,r=a.acceptedFiles.map((function(e){return u.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return u.a.createElement("div",null,u.a.createElement("div",Object.assign({},t({className:"dropzone"}),{style:{minHeight:"200px",border:"1px solid #ebedf2",padding:"15px",display:"flex",flexDirection:"column"}}),u.a.createElement("input",l()),u.a.createElement("p",null,"Drag 'n' drop some files here"),u.a.createElement("button",{type:"button",onClick:c,className:"btn btn-primary mt-auto"},"Open File Dialog")),u.a.createElement("aside",null,r.length?u.a.createElement("h5",{className:"my-2"},"Files"):null,u.a.createElement("ul",{className:"list-ticked"},r)))}function H(){var e=Object(d.useState)("#ffe74c"),a=Object(c.a)(e,2),t=a[0],l=a[1];return u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(y.a,{placeholder:"Color Value","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:t,onChange:function(e){return l(e.target.value)}}),u.a.createElement(f.a.Append,null,u.a.createElement(w.a,null,u.a.createElement(w.a.Toggle,{id:"dropdown-basic",className:"px-3",style:{height:"100%",backgroundColor:t,color:t,borderColor:t}}),u.a.createElement(w.a.Menu,null,u.a.createElement(N.SketchPicker,{color:t,onChange:function(e){return l(e.hex)}})))))}function P(){var e=Object(d.useState)("#6bf178"),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(d.useState)(!1),n=Object(c.a)(r,2),s=n[0],i=n[1];return u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(y.a,{placeholder:"Color Value","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:t,onChange:function(e){return l(e.target.value)}}),u.a.createElement(f.a.Append,null,u.a.createElement(w.a,{show:s},u.a.createElement(w.a.Toggle,{id:"dropdown-basic",className:"px-3",style:{height:"100%",backgroundColor:t,color:t,borderColor:t},onClick:function(){i(!s)}}),u.a.createElement(w.a.Menu,null,u.a.createElement(N.PhotoshopPicker,{color:t,onChange:function(e){return l(e.hex)},onAccept:function(){i(!1)},onCancel:function(){i(!1)}})))))}function B(){var e=Object(d.useState)("#ff5964"),a=Object(c.a)(e,2),t=a[0],l=a[1];return u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(y.a,{placeholder:"Color Value","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:t,onChange:function(e){return l(e.target.value)}}),u.a.createElement(f.a.Append,null,u.a.createElement(w.a,null,u.a.createElement(w.a.Toggle,{id:"dropdown-basic",className:"px-3",style:{height:"100%",backgroundColor:t,color:t,borderColor:t}}),u.a.createElement(w.a.Menu,null,u.a.createElement(N.SwatchesPicker,{color:t,onChange:function(e){return l(e.hex)}})))))}var U=function(){var e=Object(d.useState)(new Date),a=Object(c.a)(e,2),t=a[0],l=a[1];return u.a.createElement(k.a,{selected:t,onChange:function(e){return l(e)},className:"form-control",style:{"z-index":3}})},L=function(){var e=Object(d.useState)(new Date),a=Object(c.a)(e,2),t=a[0],l=a[1];return u.a.createElement(k.a,{selected:t,onChange:function(e){return l(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa",className:"form-control"})},W=function(){var e=Object(d.useState)(new Date),a=Object(c.a)(e,2),t=a[0],l=a[1];return u.a.createElement(k.a,{selected:t,onChange:function(e){return l(e)},inline:!0})},q=function(){var e=Object(d.useState)(new Date("2014/02/08")),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(d.useState)(new Date("2014/02/10")),n=Object(c.a)(r,2),s=n[0],i=n[1];return u.a.createElement("div",{className:"daterange-picker"},u.a.createElement(k.a,{selected:t,onChange:function(e){return l(e)},selectsStart:!0,startDate:t,endDate:s,className:"form-control"}),u.a.createElement("span",{className:"range-seperator"}," to "),u.a.createElement(k.a,{selected:s,onChange:function(e){return i(e)},selectsEnd:!0,endDate:s,minDate:t,className:"form-control"}))},G=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).addUserInput=function(){var a=Object(r.a)(e.state.users);a.push({id:e.state.users[e.state.users.length-1].id+1,name:""}),e.setState({users:a})},e.state={users:[{id:1,name:""}]},e.inputChangeHandler=e.inputChangeHandler.bind(Object(l.a)(e)),e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"inputChangeHandler",value:function(e,a){var t=this.state.users;t[a].name=e.target.value,this.setState(t)}},{key:"deleteUser",value:function(e){var a=Object(r.a)(this.state.users);a.splice(e,1),this.setState({users:a})}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault()}},u.a.createElement("div",{className:"d-flex flex-column"},this.state.users.map((function(a,t){return u.a.createElement("div",{key:a.id,className:"d-flex mb-2"},u.a.createElement("div",{className:"input-group mb-2 mr-sm-2 mb-sm-0"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("span",{className:"input-group-text"},"@")),u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add user",value:a.name,onChange:function(a){return e.inputChangeHandler(a,t)}})),t>0?u.a.createElement("button",{className:"btn btn-danger btn-sm icon-btn ml-2",onClick:function(){return e.deleteUser(t)}},u.a.createElement("i",{className:"mdi mdi-delete"})):null)}))),u.a.createElement("button",{className:"btn btn-info btn-sm icon-btn ml-2 mb-2",onClick:this.addUserInput},u.a.createElement("i",{className:"mdi mdi-plus"})))}}]),a}(d.Component),J=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={tags:[{id:1,name:"London"},{id:2,name:"Canada"},{id:3,name:"Australia"},{id:4,name:"Mexico"}],suggestions:[{id:5,name:"India"},{id:6,name:"United States of America"},{id:7,name:"Italy"},{id:8,name:"Japan"},{id:9,name:"China"},{id:10,name:"Russia"}]},t}return Object(o.a)(a,e),Object(s.a)(a,[{key:"handleDelete",value:function(e){var a=this.state.tags.slice(0);a.splice(e,1),this.setState({tags:a})}},{key:"handleAddition",value:function(e){var a=[].concat(this.state.tags,e);this.setState({tags:a})}},{key:"render",value:function(){return u.a.createElement(S.a,{tags:this.state.tags,suggestions:this.state.suggestions,allowNew:!0,handleDelete:this.handleDelete.bind(this),handleAddition:this.handleAddition.bind(this)})}}]),a}(d.Component);a.default=z}}]);
//# sourceMappingURL=89.b6242290.chunk.js.map