(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37413f51"],{"6a2f":function(e,s,i){},a003:function(e,s,i){"use strict";var t=i("6a2f"),n=i.n(t);n.a},a99f:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"app-container"},[i("switch-roles",{on:{change:e.handleRolesChange}}),i("div",{staticStyle:{"margin-top":"30px"}},[i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{type:"small"}},[e._v("admin")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("v-permission=\"['admin']\"")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{type:"small"}},[e._v("editor")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("v-permission=\"['editor']\"")])],1),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n        Both\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n      ")],1),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['admin','editor']\"\n      ")])],1)]),i("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"60px"}},[i("aside",[e._v("\n      "+e._s(e.$t("permission.tips"))+"\n      "),i("br"),e._v(" e.g.\n    ")]),i("el-tabs",{attrs:{type:"border-card"}},[e.checkPermission(["admin"])?i("el-tab-pane",{attrs:{label:"Admin"}},[e._v("\n        Admin can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin'])\"\n        ")])],1):e._e(),e.checkPermission(["editor"])?i("el-tab-pane",{attrs:{label:"Editor"}},[e._v("\n        Editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['editor'])\"\n        ")])],1):e._e(),e.checkPermission(["admin","editor"])?i("el-tab-pane",{attrs:{label:"Admin-OR-Editor"}},[e._v("\n        Both admin or editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin','editor'])\"\n        ")])],1):e._e()],1)],1)],1)},n=[],a=(i("6762"),i("2fdb"),i("4360")),r={inserted:function(e,s,i){var t=s.value,n=a["a"].getters&&a["a"].getters.roles;if(!(t&&t instanceof Array&&t.length>0))throw new Error("need roles! Like v-permission=\"['admin', 'editor']\"");var r=t,o=n.some(function(e){return r.includes(e)});o||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission",r)};window.Vue&&(window["permission"]=r,Vue.use(o));var l=r;function c(e){if(e&&e instanceof Array&&e.length>0){var s=a["a"].getters&&a["a"].getters.roles,i=e,t=s.some(function(e){return i.includes(e)});return!!t}return console.log("need roles! Like v-perssion=\"['admin', 'editor']\""),!1}var m=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[e._v("\n  "+e._s(e.$t("permission.switchRoles"))+":\n  "),i("el-radio-group",{model:{value:e.switchRoles,callback:function(s){e.switchRoles=s},expression:"switchRoles"}},[i("el-radio-button",{attrs:{label:"admin"}}),i("el-radio-button",{attrs:{label:"editor"}})],1)],1)},d=[],p={name:"SwitchRoles",computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var s=this;console.log(e),this.$store.dispatch("user/changeRoles",e).then(function(){s.$emit("click")})}}}},v=p,u=i("2877"),h=Object(u["a"])(v,m,d,!1,null,"8fc27bc8",null),f=h.exports,g={name:"DirectivePermission",components:{SwitchRoles:f},directives:{permission:l},data:function(){return{key:1}},methods:{checkPermission:c,handleRolesChange:function(){this.key++}}},_=g,w=(i("a003"),Object(u["a"])(_,t,n,!1,null,"5eae20bc",null));s["default"]=w.exports}}]);