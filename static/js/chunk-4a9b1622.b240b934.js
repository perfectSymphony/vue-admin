(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a9b1622"],{2423:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c}));var a=n("b775");function i(t){return Object(a["a"])({url:"/vue-admin/article/list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/vue-admin/article/create",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/vue-adminarticle/pv",method:"get",params:{pv:t}})}function o(t){return Object(a["a"])({url:"/vue-admin/article/update",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/vue-admin/article/detail",method:"get",params:{id:t}})}},"2c90":function(t,e,n){},"42c7":function(t,e,n){"use strict";n("da6b")},c550:function(t,e,n){"use strict";n("2c90")},da6b:function(t,e,n){},ede6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container board"},[n("panel",{key:1,staticClass:"panel todo",attrs:{list:t.todoList,group:t.group,"header-text":"To do"}}),n("panel",{key:2,staticClass:"panel doing",attrs:{list:t.doingList,group:t.group,"header-text":"Doing"}}),n("panel",{key:3,staticClass:"panel done",attrs:{list:t.doneList,group:t.group,"header-text":"Done"}})],1)},i=[],s=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-column"},[n("div",{staticClass:"board-column-header"},[t._v(" "+t._s(t.headerText)+" ")]),n("draggable",t._b({staticClass:"board-column-content",attrs:{list:t.list,"set-data":t.setData}},"draggable",t.$attrs,!1),t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"board-item"},[t._v(" "+t._s(e.id)+"["+t._s(e.author)+"]"+t._s(e.title)+" ")])})),0)],1)}),r=[],o=n("1980"),c=n.n(o),u={name:"DragKanbanDemo",components:{draggable:c.a},props:{headerText:{type:String,default:"Header"},list:{type:Array,default:function(){return[]}}},methods:{setData:function(t){t.setData("Text","")}}},d=u,l=(n("c550"),n("2877")),p=Object(l["a"])(d,s,r,!1,null,"7f6e8a13",null),f=p.exports,m=n("2423"),b={name:"DragKanbanDemo",components:{panel:f},data:function(){return{group:"Mission",todoList:[],doingList:[],doneList:[]}},created:function(){this.getMission()},methods:{getMission:function(){var t=this;Object(m["c"])().then((function(e){t.todoList=e.data.items.splice(0,5),t.doingList=e.data.items.splice(0,10),t.doneList=e.data.items.splice(0,20)}))}}},g=b,h=(n("42c7"),Object(l["a"])(g,a,i,!1,null,null,null));e["default"]=h.exports}}]);