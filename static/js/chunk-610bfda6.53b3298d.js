(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-610bfda6"],{"2c16":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[i("aside",[t._v(" "+t._s(t.$t("components.tinymceTips"))+" "),i("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://www.tiny.cloud/docs/"}},[t._v(" "+t._s(t.$t("components.documentation")))])]),i("div",[i("tinymce",{attrs:{height:300},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},s=[],o=i("8256"),a={name:"TinymceDemo",components:{Tinymce:o["a"]},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>\n                <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n            </ul>'}}},c=a,l=i("2877"),r=Object(l["a"])(c,n,s,!1,null,"20602a00",null);e["default"]=r.exports},7583:function(t,e,i){},8256:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},s=[],o=(i("4160"),i("a9e3"),i("b680"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-upload"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(" upload ")]),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v(" Click upload ")])],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(" Cancel ")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" Confirm ")])],1)],1)],1)}),a=[],c=(i("a623"),i("d81d"),i("b64b"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"EditorSlideUpload",data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var i=e.uid,n=Object.keys(this.listObj),s=0,o=n.length;s<o;s++)if(this.listObj[n[s]].uid===i)return this.listObj[n[s]].url=t.files.file,void(this.listObj[n[s]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=Object.keys(this.listObj),n=0,s=i.length;n<s;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new Promise((function(s,o){var a=new Image;a.src=i.createObjectURL(t),a.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},s(!0)}))}}}),l=c,r=(i("9474"),i("2877")),u=Object(r["a"])(l,o,a,!1,null,"d4115ffa",null),d=u.exports,h=["anchor advlist autolink autosave code codesample colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor visualblocks visualchars wordcount"],m=h,f=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],p=f,g={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360}},data:function(){return{hasInit:!1,hasChange:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]},containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({language:this.language,selector:"#".concat(this.tinymceId),height:this.height,menubar:this.menubar,body_class:"panel-body ",object_resizing:!1,end_container_on_empty_block:!0,toolbar:this.toolbar.length>0?this.toolbar:p,plugins:m,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",i.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},b=g,y=(i("dcf6"),Object(r["a"])(b,n,s,!1,null,"27a6576c",null));e["a"]=y.exports},9474:function(t,e,i){"use strict";i("ecd8")},dcf6:function(t,e,i){"use strict";i("7583")},ecd8:function(t,e,i){}}]);