(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[79],{1182:function(e,n,a){"use strict";a.r(n),a.d(n,"CodeEditor",(function(){return h}));var t=a(11),l=a(12),i=a(14),o=a(13),r=a(0),s=a.n(r),c=a(1e3),d=a.n(c),m=(a(1006),a(1007),a(1008),a(1009),a(1011),a(1012),a(1013),{minHeight:"300px"}),h=function(e){Object(i.a)(a,e);var n=Object(o.a)(a);function a(){return Object(t.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"}," Code editors "),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Editors")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Code editors")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 grid-margin"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Ace Editor"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"HTML Mode"),s.a.createElement(d.a,{style:m,mode:"html",theme:"monokai",name:"firstEditor",onChange:this.onChange,editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n<div className="panel panel-default">\n  <div className="panel-heading">\n    <h5 className="panel-title">\n      Panel Title\n      <span className="text-semibold">Default</span>\n      <small>Full featured toolbar</small>\n    </h5>\n    <ul className="panel-heading-icons">\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="collapse"><i className="icon-arrow-down2"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="reload"><i className="icon-reload"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="move"><i className="icon-move"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="close"><i className="icon-close"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div className="panel-body">\n    Panel body\n  </div>\n</div>'})),s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"Javascript Mode"),s.a.createElement(d.a,{style:m,mode:"java",theme:"monokai",name:"javaeditorEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n/**\n  * In fact, you\'re looking at ACE right now. Go ahead and play with it!\n  *\n  * We are currently showing off the JavaScript mode. ACE has support for 45\n  * language modes and 24 color themes!\n*/\n    \n    function add(x, y) {\n      var resultString = "Hello, ACE! The result of your math is: ";\n      var result = x + y;\n      return resultString + result;\n    }\n    \n    var addResult = add(3, 2);\n    console.log(addResult);'}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"CSS Mode"),s.a.createElement(d.a,{style:m,mode:"css",theme:"monokai",name:"cssEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:"\n  .nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  \n  .nav li {\n    display: inline-block;\n  }\n  \n  .nav a {\n    display: block;\n    padding: 6px 12px;\n    text-decoration: none;\n  }\n                      "})),s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"scss Mode"),s.a.createElement(d.a,{style:m,mode:"sass",theme:"monokai",name:"sassEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:"\n  .nav {\n    ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n  \n    li {\n      display: inline-block;\n    }\n  \n    a {\n      display: block;\n      padding: 6px 12px;\n      text-decoration: none;\n    }\n  }"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"Json Mode"),s.a.createElement(d.a,{style:m,mode:"json",theme:"monokai",name:"jsonEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n  {\n    "firstName": "John",\n    "lastName": "Smith",\n    "isAlive": true,\n    "age": 27,\n    "address": {\n    "streetAddress": "21 2nd Street",\n    "city": "New York",\n    "state": "NY",\n    "postalCode": "10021-3100"\n    },\n    "phoneNumbers": [\n      {\n        "type": "home",\n        "number": "212 555-1234"\n      },\n      {\n        "type": "office",\n        "number": "646 555-4567"\n      },\n      {\n        "type": "mobile",\n        "number": "123 456-7890"\n      }\n    ],\n    "children": [],\n    "spouse": null\n  }\n                      '})),s.a.createElement("div",{className:"col-md-6 grid-margin"},s.a.createElement("h5",{className:"card-subtitle"},"PHP Mode"),s.a.createElement(d.a,{style:m,mode:"php",theme:"monokai",name:"phpEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n  <?php\n\n  function nfact($n) {\n    if ($n == 0) {\n      return 1;\n    }\n    else {\n      return $n * nfact($n - 1);\n    }\n  }\n\n  echo "\n\nPlease enter a whole number ... ";\n  $num = trim(fgets(STDIN));\n\n\n  // ===== PROCESS - Determing the factorial of the input number =====\n\n  $output = "\n\nFactorial " . $num . " = " . nfact($num) . "\n\n";\n  echo $output;\n\n?>\n'}))))))))}}]),a}(r.Component);n.default=h}}]);
//# sourceMappingURL=79.00440319.chunk.js.map