(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a6d1604"],{"237a":function(e,t,s){},"2e51":function(e,t,s){"use strict";var a=s("a3b5"),i=s.n(a);i.a},"791c":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"liu-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[s("div",{staticClass:"liu-info"},[s("div",{staticClass:"liu-info-roles-container"},[e._t("default")],2)]),s("img",{staticClass:"liu-thumb",attrs:{src:e.image}})])},i=[],r=(s("c5f6"),{name:"LiuThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),l=r,n=(s("dd5e"),s("2877")),c=Object(n["a"])(l,a,i,!1,null,"2beeaf9f",null);t["a"]=c.exports},a3b5:function(e,t,s){},a9c9:function(e,t,s){"use strict";var a=s("ba86"),i=s.n(a);i.a},ba86:function(e,t,s){},dd5e:function(e,t,s){"use strict";var a=s("237a"),i=s.n(a);i.a},ecac:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[e.user?s("div",[s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:6}},[s("user-card",{attrs:{user:e.user}})],1),s("el-col",{attrs:{span:18}},[s("el-card",[s("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"Activity",name:"activity"}},[s("activity")],1),s("el-tab-pane",{attrs:{label:"Timeline",name:"timeline"}},[s("timeline")],1),s("el-tab-pane",{attrs:{label:"Account",name:"account"}},[s("account",{attrs:{user:e.user}})],1)],1)],1)],1)],1)],1):e._e()])},i=[],r=(s("7f7f"),s("cebc")),l=s("2f62"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("About me")])]),s("div",{staticClass:"user-profile"},[s("div",{staticClass:"box-center"},[s("liu-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px"}},[s("div",[e._v("Hello")]),e._v("\n        "+e._s(e.user.role)+"\n      ")])],1),s("div",{staticClass:"box-center"},[s("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"user-role text-center text-muted"},[e._v(e._s(e._f("uppercaseFirst")(e.user.role)))])])]),s("div",{staticClass:"user-bio"},[s("div",{staticClass:"user-education user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("svg-icon",{attrs:{"icon-class":"education"}}),s("span",[e._v("Education")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"text-muted"},[e._v("\n          JS in Computer Science from the University of Technology\n        ")])])]),s("div",{staticClass:"user-skills user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("svg-icon",{attrs:{"icon-class":"skill"}}),s("span",[e._v("skills")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"progress-item"},[s("span",[e._v("Vue")]),s("el-progress",{attrs:{percentage:70}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("JavaScript")]),s("el-progress",{attrs:{percentage:18}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("Css")]),s("el-progress",{attrs:{percentage:12}})],1),s("div",{staticClass:"progress-item"},[s("span",[e._v("ESLint")]),s("el-progress",{attrs:{percentage:100,status:"success"}})],1)])])])])},c=[],o=s("791c"),u={name:"UserCard",components:{liuThumb:o["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",roles:""}}}}},m=u,p=(s("a9c9"),s("2877")),d=Object(p["a"])(m,n,c,!1,null,"2b946f46",null),v=d.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-activity"},[s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg"+e.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[e._v("The Expendables")]),s("span",{staticClass:"description"},[e._v("Shared publicly - 7:30 PM today")])]),s("p",[e._v("\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n      Velit harum libero quisquam blanditiis aliquam deserunt ipsa\n      doloribus officiis maiores minima, quis delectus natus,\n      quo explicabo facere quam aut autem repudiandae reiciendis quasi\n      labore est ad repellendus qui! Praesentium tempora quasi nobis aliquid\n      magnam optio dolorum commodi? Harum iure dolor repellat minus maiores,\n      enim quisquam eos optio labore nemo fugiat cumque porro eum officiis exercitationem.\n    ")]),e._m(0)]),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg"+e.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[e._v("Spider Man")]),s("span",{staticClass:"description"},[e._v("Posted 4 photos - 2 days ago")])]),s("div",{staticClass:"user-images"},[s("el-carousel",{attrs:{interval:4e3,type:"card",height:"220px"}},e._l(e.carouselImages,function(t){return s("el-carousel-item",{key:t},[s("img",{staticClass:"image",attrs:{src:t+e.carouselPrefix}})])}),1)],1),e._m(1)])])},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"list-inline"},[s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v("\n          Share\n        ")])]),s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-medal"}),e._v("\n          Like\n        ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"list-inline"},[s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v("\n          Share\n        ")])]),s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-medal"}),e._v("\n          Like\n        ")])])])}],h="?imageView2/1/w/80/h/80",g="?imageView2/2/h/440",_={name:"Activity",data:function(){return{carouselImages:["https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg","https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg","https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg","https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg"],avatarPrefix:h,carouselPrefix:g}}},C=_,x=(s("2e51"),Object(p["a"])(C,f,b,!1,null,"893689b0",null)),y=x.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"block"},[s("el-timeline",[s("el-timeline-item",{attrs:{timestamp:"2019/6/19",placement:"top"}},[s("el-card",[s("h4",[e._v("Update Github template")]),s("p",[e._v("perfectSymphony committed 2019/6/19 13:46")])])],1),s("el-timeline-item",{attrs:{timestamp:"2018/4/3",placement:"top"}},[s("el-card",[s("h4",[e._v("Update Github template")]),s("p",[e._v("perfectSymphony committed 2018/4/3 20:46")])])],1),s("el-timeline-item",{attrs:{timestamp:"2018/4/2",placement:"top"}},[s("el-card",[s("h4",[e._v("Update Github template")]),s("p",[e._v("perfectSymphony committed 2018/4/2 20:46")])])],1)],1)],1)},k=[],j={name:"Timeline",data:function(){return{}}},q=j,S=Object(p["a"])(q,w,k,!1,null,"7baee508",null),E=S.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),s("el-form-item",{attrs:{label:"Email"}},[s("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)},$=[],O={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},U=O,P=Object(p["a"])(U,T,$,!1,null,"fac57088",null),A=P.exports,I={name:"Profile",components:{UserCard:v,Activity:y,Timeline:E,Account:A},data:function(){return{user:{},activeTab:"activity"}},computed:Object(r["a"])({},Object(l["b"])(["name","avatar","roles"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,avatar:this.avatar,role:this.roles.join(" | "),email:"admin@test.com"}}}},L=I,J=Object(p["a"])(L,a,i,!1,null,"565574d6",null);t["default"]=J.exports}}]);