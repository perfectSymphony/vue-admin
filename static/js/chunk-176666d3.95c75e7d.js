(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-176666d3"],{2201:function(e,t,a){"use strict";a("4430")},4430:function(e,t,a){},"4a72":function(e,t,a){},7913:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container"},[a("liu-thumb",{attrs:{image:e.imgDataUrl}}),a("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"upload"},on:{click:e.toggleShow}},[e._v(" Change Avatar ")]),a("image-cropper",{attrs:{field:"img",width:300,height:300,url:"https://httpbin.org/post","no-rotate":!1,params:e.params,headers:e.headers,"img-format":"png"},on:{"crop-success":e.cropSuccess,"crop-upload-success":e.cropUploadSuccess,"crop-upload-fail":e.cropUploadFail},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[a("div",{staticClass:"vicp-wrap"},[a("div",{staticClass:"vicp-close",on:{click:e.off}},[a("i",{staticClass:"vicp-icon4"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[a("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[a("i",{staticClass:"vicp-icon1-arrow"}),a("i",{staticClass:"vicp-icon1-body"}),a("i",{staticClass:"vicp-icon1-bottom"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),1==e.step?a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),2==e.step?a("div",{staticClass:"vicp-step2"},[a("div",{staticClass:"vicp-crop"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[a("div",{staticClass:"vicp-img-container"},[a("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),a("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),a("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),a("div",{staticClass:"vicp-range"},[a("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{mousemove:e.zoomChange}}),a("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),a("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e.noRotate?e._e():a("div",{staticClass:"vicp-rotate"},[a("i",{on:{click:e.rotateImg}},[e._v("↻")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[a("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():a("div",{staticClass:"vicp-preview-item"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),a("span",[e._v(e._s(e.lang.preview))])]),e.noCircle?e._e():a("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),a("span",[e._v(e._s(e.lang.preview))])])])])]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),a("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),3==e.step?a("div",{staticClass:"vicp-step3"},[a("div",{staticClass:"vicp-upload"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),a("div",{staticClass:"vicp-progress-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[a("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+" ")])]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),a("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},r=[],n=(a("4160"),a("c975"),a("b0c0"),a("a9e3"),a("b64b"),a("d3b7"),a("159b"),a("53ca")),l={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atrás",save:"Guardar"},error:{onlyImg:"Únicamente imágenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeña. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}},ua:{hint:"Натисніть, або перетягніть файл в це вікно",loading:"Завантажую……",noSupported:"Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",success:"Завантаження виконано успішно",fail:"Помилка завантаження",preview:"Попередній перегляд",btn:{off:"Відмінити",close:"Закрити",back:"Назад",save:"Зберегти"},error:{onlyImg:"Тільки зображення",outOfSize:"Зображення перевищує граничний розмір: ",lowestPx:"Мінімальний розмір зображення: "}},it:{hint:"Clicca o trascina qui il file per caricarlo",loading:"Caricamento del file…",noSupported:"Browser non supportato, per favore usa IE10+ o un altro browser",success:"Caricamento completato",fail:"Caricamento fallito",preview:"Anteprima",btn:{off:"Annulla",close:"Chiudi",back:"Indietro",save:"Salva"},error:{onlyImg:"Sono accettate solo immagini",outOfSize:"L'immagine eccede i limiti di dimensione: ",lowestPx:"L'immagine è troppo piccola. Il requisito minimo è: "}},ar:{hint:"اضغط أو اسحب الملف هنا للتحميل",loading:"جاري التحميل...",noSupported:"المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",success:"تم التحميل بنجاح",fail:"فشل التحميل",preview:"معاينه",btn:{off:"إلغاء",close:"إغلاق",back:"رجوع",save:"حفظ"},error:{onlyImg:"صور فقط",outOfSize:"تتجاوز الصوره الحجم المحدد: ",lowestPx:"حجم الصورة صغير جدا. من المتوقع على الأقل: "}},ug:{hint:"مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",loading:"يوللىنىۋاتىدۇ...",noSupported:"تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",success:"غەلبىلىك بولدى",fail:"مەغلۇب بولدى",preview:"ئۈنۈم رەسىم",btn:{off:"بولدى قىلىش",close:"تاقاش",back:"ئالدىنقى قەدەم",save:"ساقلاش"},error:{onlyImg:"پەقەت رەسىم فورماتىنىلا قوللايدۇ",outOfSize:"رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",lowestPx:"رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"}},th:{hint:"คลิ๊กหรือลากรูปมาที่นี่",loading:"กำลังอัพโหลด…",noSupported:"เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",success:"อัพโหลดสำเร็จ",fail:"อัพโหลดล้มเหลว",preview:"ตัวอย่าง",btn:{off:"ยกเลิก",close:"ปิด",back:"กลับ",save:"บันทึก"},error:{onlyImg:"ไฟล์ภาพเท่านั้น",outOfSize:"ไฟล์ใหญ่เกินกำหนด: ",lowestPx:"ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "}},mm:{hint:"ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",loading:"တင်နေသည်…",noSupported:"ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",success:"ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",fail:"ဖိုင်တင်နေမှု မအောင်မြင်ပါ",preview:"အစမ်းကြည့်",btn:{off:"မလုပ်တော့ပါ",close:"ပိတ်မည်",back:"နောက်သို့",save:"သိမ်းမည်"},error:{onlyImg:"ဓာတ်ပုံ သီးသန့်သာ",outOfSize:"ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",lowestPx:"ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "}},se:{hint:"Klicka eller dra en fil hit för att ladda upp den",loading:"Laddar upp…",noSupported:"Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",success:"Uppladdning lyckades",fail:"Uppladdning misslyckades",preview:"Förhandsgranska",btn:{off:"Avbryt",close:"Stäng",back:"Tillbaka",save:"Spara"},error:{onlyImg:"Endast bilder",outOfSize:"Bilden är större än max-gränsen: ",lowestPx:"Bilden är för liten. Minimum är: "}}},c={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},u=(a("ace4"),a("ac1f"),a("1276"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),function(e,t){e=e.split(",")[1],e=window.atob(e);for(var a=new Uint8Array(e.length),i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return new Blob([a],{type:t})}),p=function(e,t){var a=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),i=a.ele;if(i){var s=i.getBoundingClientRect(),o=i.querySelector(".e-ripple");switch(o?o.className="e-ripple":(o=document.createElement("span"),o.className="e-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",i.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=e.pageY-s.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=e.pageX-s.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=a.bgc,o.className="e-ripple z-active",!1}},d={props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},imgBgc:{type:String,default:"#fff"},withCredentials:{type:Boolean,default:!1},method:{type:String,default:"POST"}},data:function(){var e=this,t=e.imgFormat,a=e.langType,i=e.langExt,s=e.width,o=e.height,r=!0,n=["jpg","png"],u=-1===n.indexOf(t)?"jpg":t,p=l[a]?l[a]:l["en"],d=c[u];return e.imgFormat=u,i&&Object.assign(p,i),"function"!==typeof FormData&&(r=!1),{mime:d,lang:p,isSupported:r,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:s/o,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,a=e.y+t.y+"px",i=e.x+t.x+"px";return{top:a,left:i,width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,t=this.height,a=this.ratio,i=this.sourceImgContainer,s=i,o=s.width/s.height,r=0,n=0,l=s.width,c=s.height,u=1;return a<o&&(u=s.height/t,l=s.height*a,r=(s.width-l)/2),a>o&&(u=s.width/e,c=s.width/a,n=(s.height-c)/2),{scale:u,x:r,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,a=t,i=e,s=i.width===a.width?i.width:(a.width-i.width)/2,o=i.height===a.height?i.height:(a.height-i.height)/2;return{width:s+"px",height:o+"px"}},previewStyle:function(){var e=this.ratio,t=this.previewContainer,a=t,i=a.width,s=a.height,o=i/s;return e<o&&(i=a.height*e),e>o&&(s=a.width/e),{width:i+"px",height:s+"px"}}},watch:{value:function(e){e&&1!==this.loading&&this.reset()}},created:function(){var e=this;document.addEventListener("keyup",(function(t){!e.value||"Escape"!==t.key&&27!==t.keyCode||e.off()}))},methods:{ripple:function(e){p(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),3===e.step&&2===e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,a=t.lang,i=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=a.error.onlyImg,!1):!(e.size/1024>i)||(t.hasError=!0,t.errorMsg=a.error.outOfSize+i+"kb",!1)},reset:function(){var e=this;e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){this.$emit("src-file-set",e.name,e.type,e.size);var t=this,a=new FileReader;a.onload=function(e){t.sourceImgUrl=a.result,t.startCrop()},a.readAsDataURL(e)},startCrop:function(){var e=this,t=e.width,a=e.height,i=e.ratio,s=e.scale,o=e.sourceImgUrl,r=e.sourceImgMasking,n=e.lang,l=r,c=new Image;c.src=o,c.onload=function(){var o=c.naturalWidth,r=c.naturalHeight,u=o/r,p=l.width,d=l.height,h=0,g=0;if(o<t||r<a)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+a,!1;i>u&&(d=p/u,g=(l.height-d)/2),i<u&&(p=d*u,h=(l.width-p)/2),s.range=0,s.x=h,s.y=g,s.width=p,s.height=d,s.minWidth=p,s.minHeight=d,s.maxWidth=o*l.scale,s.maxHeight=r*l.scale,s.naturalWidth=o,s.naturalHeight=r,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=this.scale,s=a;s.mX=t.screenX,s.mY=t.screenY,s.x=i.x,s.y=i.y,s.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=a.on,s=a.mX,o=a.mY,r=a.x,n=a.y,l=this.scale,c=this.sourceImgMasking,u=c,p=t.screenX,d=t.screenY,h=p-s,g=d-o,m=r+h,f=n+g;i&&(m>0&&(m=0),f>0&&(f=0),m<u.width-l.width&&(m=u.width-l.width),f<u.height-l.height&&(f=u.height-l.height),l.x=m,l.y=f)},rotateImg:function(e){var t=this.sourceImg,a=this.scale,i=a.naturalWidth,s=a.naturalHeight,o=s,r=i,n=this.$refs.canvas,l=n.getContext("2d");n.width=o,n.height=r,l.clearRect(0,0,o,r),l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,o,r),l.translate(o,0),l.rotate(90*Math.PI/180),l.drawImage(t,0,0,i,s);var u=n.toDataURL(c["png"]);this.sourceImgUrl=u,this.startCrop()},startZoomAdd:function(e){var t=this,a=t.scale;function i(){if(a.zoomAddOn){var e=a.range>=100?100:++a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomAddOn=!0,i()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,a=t.scale;function i(){if(a.zoomSubOn){var e=a.range<=0?0:--a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomSubOn=!0,i()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,a=this.sourceImgMasking,i=this.scale,s=i.maxWidth,o=i.maxHeight,r=i.minWidth,n=i.minHeight,l=i.width,c=i.height,u=i.x,p=i.y,d=a,h=d.width,g=d.height,m=r+(s-r)*e/100,f=n+(o-n)*e/100,v=h/2-m/l*(h/2-u),w=g/2-f/c*(g/2-p);v>0&&(v=0),w>0&&(w=0),v<h-m&&(v=h-m),w<g-f&&(w=g-f),i.x=v,i.y=w,i.width=m,i.height=f,i.range=e,setTimeout((function(){i.range===e&&t.createImg()}),300)},createImg:function(e){var t=this,a=t.imgFormat,i=t.imgBgc,s=t.mime,o=t.sourceImg,r=t.scale,n=r.x,l=r.y,c=r.width,u=r.height,p=t.sourceImgMasking.scale,d=t.$refs.canvas,h=d.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),d.width=t.width,d.height=t.height,h.clearRect(0,0,t.width,t.height),h.fillStyle="png"===a?"rgba(0,0,0,0)":i,h.fillRect(0,0,t.width,t.height),h.drawImage(o,n/p,l/p,c/p,u/p),t.createImgUrl=d.toDataURL(s)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,a=this.field,i=this.ki;this.$emit("crop-success",t,a,i),"string"===typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,a=this.imgFormat,i=this.mime,s=this.url,o=this.params,r=this.headers,l=this.field,c=this.ki,p=this.createImgUrl,d=this.withCredentials,h=this.method,g=new FormData;g.append(l,u(p,i),l+"."+a),"object"===Object(n["a"])(o)&&o&&Object.keys(o).forEach((function(e){g.append(e,o[e])}));var m=function(t){t.lengthComputable&&(e.progress=100*Math.round(t.loaded)/t.total)};e.reset(),e.loading=1,e.setStep(3),new Promise((function(e,t){var a=new XMLHttpRequest;a.open(h,s,!0),a.withCredentials=d,a.onreadystatechange=function(){4===this.readyState&&(200===this.status||201===this.status?e(JSON.parse(this.responseText)):t(this.status))},a.upload.addEventListener("progress",m,!1),"object"===Object(n["a"])(r)&&r&&Object.keys(r).forEach((function(e){a.setRequestHeader(e,r[e])})),a.send(g)})).then((function(t){e.value&&(e.loading=2,e.$emit("crop-upload-success",t,l,c))}),(function(a){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",a,l,c))}))}}},h=d,g=(a("2201"),a("2877")),m=Object(g["a"])(h,o,r,!1,null,null,null),f=m.exports,v=a("791c"),w={name:"AvatarUpload",components:{ImageCropper:f,liuThumb:v["a"]},data:function(){return{imgDataUrl:"https://raw.githubusercontent.com/perfectSymphony/vue-admin/vue-cli3.0-Mockjs/src/assets/logo.png",show:!1,params:{token:"123456798",name:"avatar"},headers:{smail:"*_~"}}},methods:{toggleShow:function(){this.show=!this.show},cropSuccess:function(e,t){console.log("-------- crop success --------"),this.imgDataUrl=e},cropUploadSuccess:function(e,t){console.log("-------- upload success --------"),console.log(e),console.log("field: "+t)},cropUploadFail:function(e,t){console.log("-------- upload fail --------"),console.log(e),console.log("field: "+t)}}},b=w,S=Object(g["a"])(b,i,s,!1,null,"696e75c0",null);t["default"]=S.exports},"791c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"liu-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[a("div",{staticClass:"liu-info"},[a("div",{staticClass:"liu-info-roles-container"},[e._t("default")],2)]),a("img",{staticClass:"liu-thumb",attrs:{src:e.image}})])},s=[],o=(a("a9e3"),{name:"LiuThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),r=o,n=(a("dd5e"),a("2877")),l=Object(n["a"])(r,i,s,!1,null,"2beeaf9f",null);t["a"]=l.exports},dd5e:function(e,t,a){"use strict";a("4a72")}}]);