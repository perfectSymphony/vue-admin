(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e96498"],{"105d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icons-container"},[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"icons"}},e._l(e.svgIcons,function(t){return n("div",{key:t,on:{click:function(n){e.handleClipboard(e.generateIconCode(t),n)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n            "+e._s(e.generateIconCode(t))+"\n          ")]),n("div",{staticClass:"icon-item"},[n("svg-icon",{attrs:{"icon-class":t,"class-name":"disabled"}}),n("span",[e._v(e._s(t))])],1)])],1)}),0),n("el-tab-pane",{attrs:{label:"Element-UI Icons"}},e._l(e.elementIcons,function(t){return n("div",{key:t,on:{click:function(n){e.handleClipboard(e.generateElementIconCode(t),n)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n            "+e._s(e.generateElementIconCode(t))+"\n          ")]),n("div",{staticClass:"icon-item"},[n("i",{class:"el-icon-"+t}),n("span",[e._v(e._s(t))])])])],1)}),0)],1)],1)},c=[],a=n("f71e"),s=(n("4917"),n("ac6a"),n("51ff")),r=function(e){return e.keys()},i=/\.\/(.*)\.svg/,l=r(s).map(function(e){return e.match(i)[1]}),u=l,d=["info","error","success","warning","question","back","arrow-left","arrow-down","arrow-right","arrow-up","caret-left","caret-bottom","caret-top","caret-right","d-arrow-left","d-arrow-right","minus","plus","remove","circle-plus","remove-outline","circle-plus-outline","close","check","circle-close","circle-check","circle-close-outline","circle-check-outline","zoom-out","zoom-in","d-caret","sort","sort-down","sort-up","tickets","document","goods","sold-out","news","message","date","printer","time","bell","mobile-phone","service","view","menu","more","more-outline","star-on","star-off","location","location-outline","phone","phone-outline","picture","picture-outline","delete","search","edit","edit-outline","rank","refresh","share","setting","upload","upload2","download","loading"],p=d,m={name:"Icons",data:function(){return{svgIcons:u,elementIcons:p}},methods:{generateIconCode:function(e){return'<svg-icon icon-class="'.concat(e,'" />')},generateElementIconCode:function(e){return'<i class="el-icon-'.concat(e,'" />')},handleClipboard:function(e,t){Object(a["a"])(e,t)}}},f=m,v=(n("8b52"),n("2877")),b=Object(v["a"])(f,o,c,!1,null,"eb5ca33e",null);t["default"]=b.exports},"8b52":function(e,t,n){"use strict";var o=n("ae44"),c=n.n(o);c.a},ae44:function(e,t,n){}}]);