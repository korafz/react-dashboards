(window["webpackJsonpbreeze-react-pro"]=window["webpackJsonpbreeze-react-pro"]||[]).push([[98],{1138:function(e,a,r){"use strict";r.r(a),r.d(a,"SimpleMap",(function(){return d}));var t=r(13),c=r(14),n=r(16),m=r(15),l=r(17),s=r(0),o=r.n(s),i=r(924),p="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",d=function(e){function a(){return Object(t.a)(this,a),Object(n.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"}," React Simple Maps "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Maps")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Simple Maps")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"ZoomableGroup"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,null,o.a.createElement(i.ZoomableGroup,{zoom:1},o.a.createElement(i.Geographies,{geography:p},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e})}))})))))))),o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Sphere"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,{projectionConfig:{scale:147}},o.a.createElement(i.Sphere,{stroke:"#FF5533",strokeWidth:2}),o.a.createElement(i.Geographies,{geography:p},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e})}))})))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Graticule"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,{projectionConfig:{scale:147}},o.a.createElement(i.Graticule,{stroke:"#F53"}),o.a.createElement(i.Geographies,{geography:p},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e})}))}))))))),o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Geographies"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,null,o.a.createElement(i.Geographies,{geography:p},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e})}))}))),"`"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Marker"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,{projection:"geoAlbers"},o.a.createElement(i.Geographies,{geography:p},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e,fill:"#DDD",stroke:"#FFF"})}))})),o.a.createElement(i.Marker,{coordinates:[-74.006,40.7128]},o.a.createElement("circle",{r:8,fill:"#F53"}))))))),o.a.createElement("div",{className:"col-sm-6 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Line"),o.a.createElement("div",{className:"map-dimension"},o.a.createElement(i.ComposableMap,{projection:"geoEqualEarth",projectionConfig:{scale:420,center:[-40,30]}},o.a.createElement(i.Graticule,{stroke:"#DDD"}),o.a.createElement(i.Geographies,{geography:p,fill:"#D6D6DA",stroke:"#FFFFFF",strokeWidth:.5},(function(e){return e.geographies.map((function(e){return o.a.createElement(i.Geography,{key:e.rsmKey,geography:e})}))})),o.a.createElement(i.Line,{from:[2.3522,48.8566],to:[-74.006,40.7128],stroke:"#FF5533",strokeWidth:4,strokeLinecap:"round"}))))))))}}]),a}(s.Component);a.default=d}}]);
//# sourceMappingURL=98.af658c90.chunk.js.map