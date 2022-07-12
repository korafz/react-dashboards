(window["webpackJsonpplus-react-pro"]=window["webpackJsonpplus-react-pro"]||[]).push([[83],{1138:function(e,n,a){"use strict";a.r(n),a.d(n,"CodeEditor",(function(){return u}));var t=a(11),l=a(12),i=a(14),o=a(13),r=a(15),s=a(0),c=a.n(s),d=a(950),m=a.n(d),h=(a(956),a(957),a(958),a(959),a(961),a(962),a(963),{minHeight:"300px"}),u=function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," Code editors "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Editors")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Code editors")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Ace Editor"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"HTML Mode"),c.a.createElement(m.a,{style:h,mode:"html",theme:"monokai",name:"firstEditor",onChange:this.onChange,editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n<div className="panel panel-default">\n  <div className="panel-heading">\n    <h5 className="panel-title">\n      Panel Title\n      <span className="text-semibold">Default</span>\n      <small>Full featured toolbar</small>\n    </h5>\n    <ul className="panel-heading-icons">\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="collapse"><i className="icon-arrow-down2"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="reload"><i className="icon-reload"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="move"><i className="icon-move"></i></a>\n      </li>\n      <li>\n        <a href="!#" onClick={event => event.preventDefault()} data-panel="close"><i className="icon-close"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div className="panel-body">\n    Panel body\n  </div>\n</div>'})),c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"Javascript Mode"),c.a.createElement(m.a,{style:h,mode:"java",theme:"monokai",name:"javaeditorEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n/**\n  * In fact, you\'re looking at ACE right now. Go ahead and play with it!\n  *\n  * We are currently showing off the JavaScript mode. ACE has support for 45\n  * language modes and 24 color themes!\n*/\n    \n    function add(x, y) {\n      var resultString = "Hello, ACE! The result of your math is: ";\n      var result = x + y;\n      return resultString + result;\n    }\n    \n    var addResult = add(3, 2);\n    console.log(addResult);'}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"CSS Mode"),c.a.createElement(m.a,{style:h,mode:"css",theme:"monokai",name:"cssEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:"\n  .nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  \n  .nav li {\n    display: inline-block;\n  }\n  \n  .nav a {\n    display: block;\n    padding: 6px 12px;\n    text-decoration: none;\n  }\n                      "})),c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"scss Mode"),c.a.createElement(m.a,{style:h,mode:"sass",theme:"monokai",name:"sassEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:"\n  .nav {\n    ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n  \n    li {\n      display: inline-block;\n    }\n  \n    a {\n      display: block;\n      padding: 6px 12px;\n      text-decoration: none;\n    }\n  }"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"Json Mode"),c.a.createElement(m.a,{style:h,mode:"json",theme:"monokai",name:"jsonEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n  {\n    "firstName": "John",\n    "lastName": "Smith",\n    "isAlive": true,\n    "age": 27,\n    "address": {\n    "streetAddress": "21 2nd Street",\n    "city": "New York",\n    "state": "NY",\n    "postalCode": "10021-3100"\n    },\n    "phoneNumbers": [\n      {\n        "type": "home",\n        "number": "212 555-1234"\n      },\n      {\n        "type": "office",\n        "number": "646 555-4567"\n      },\n      {\n        "type": "mobile",\n        "number": "123 456-7890"\n      }\n    ],\n    "children": [],\n    "spouse": null\n  }\n                      '})),c.a.createElement("div",{className:"col-md-6 grid-margin"},c.a.createElement("h5",{className:"card-subtitle"},"PHP Mode"),c.a.createElement(m.a,{style:h,mode:"php",theme:"monokai",name:"phpEditor",editorProps:{$blockScrolling:!0},placeholder:"Placeholder Text",onLoad:this.onLoad,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,height:"100%",width:"100%",value:'\n  <?php\n\n  function nfact($n) {\n    if ($n == 0) {\n      return 1;\n    }\n    else {\n      return $n * nfact($n - 1);\n    }\n  }\n\n  echo "\n\nPlease enter a whole number ... ";\n  $num = trim(fgets(STDIN));\n\n\n  // ===== PROCESS - Determing the factorial of the input number =====\n\n  $output = "\n\nFactorial " . $num . " = " . nfact($num) . "\n\n";\n  echo $output;\n\n?>\n'}))))))))}}]),n}(s.Component);n.default=u}}]);
//# sourceMappingURL=83.57907442.chunk.js.map