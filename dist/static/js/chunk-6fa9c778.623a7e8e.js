(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa9c778"],{"0a6a":function(t,e,n){"use strict";var a=n("cc49"),r=n.n(a);r.a},2423:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"b",function(){return c});var a=n("b775");function r(t){return Object(a["a"])({url:"/article/list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/article/create",method:"post",data:t})}function i(t){return Object(a["a"])({url:"article/pv",method:"get",params:{pv:t}})}function o(t){return Object(a["a"])({url:"/article/update",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/article/detail",method:"get",params:{id:t}})}},"42c7":function(t,e,n){"use strict";var a=n("9ee0"),r=n.n(a);r.a},"9ee0":function(t,e,n){},cc49:function(t,e,n){},ede6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container board"},[n("panel",{key:1,staticClass:"panel todo",attrs:{list:t.todoList,group:t.group,"header-text":"To do"}}),n("panel",{key:2,staticClass:"panel doing",attrs:{list:t.doingList,group:t.group,"header-text":"Doing"}}),n("panel",{key:3,staticClass:"panel done",attrs:{list:t.doneList,group:t.group,"header-text":"Done"}})],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-column"},[n("div",{staticClass:"board-column-header"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),n("draggable",t._b({staticClass:"board-column-content",attrs:{list:t.list,"set-data":t.setData}},"draggable",t.$attrs,!1),t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"board-item"},[t._v("\n      "+t._s(e.id)+"["+t._s(e.author)+"]"+t._s(e.title)+"\n    ")])}),0)],1)},i=[],o=n("310e"),c=n.n(o),u={name:"DragKanbanDemo",components:{draggable:c.a},props:{headerText:{type:String,default:"Header"},list:{type:Array,default:function(){return[]}}},methods:{setData:function(t){t.setData("Text","")}}},d=u,l=(n("0a6a"),n("2877")),p=Object(l["a"])(d,s,i,!1,null,"5aa06345",null),f=p.exports,g=n("2423"),m={name:"DragKanbanDemo",components:{panel:f},data:function(){return{group:"Mission",todoList:[],doingList:[],doneList:[]}},created:function(){this.getMission()},methods:{getMission:function(){var t=this;Object(g["c"])().then(function(e){t.todoList=e.data.items.splice(0,5),t.doingList=e.data.items.splice(0,10),t.doneList=e.data.items.splice(0,20)})}}},b=m,h=(n("42c7"),Object(l["a"])(b,a,r,!1,null,null,null));e["default"]=h.exports}}]);