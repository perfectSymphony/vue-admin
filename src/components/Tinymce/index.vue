<template>
    <div :class="{fullscreen: fullscreen}" class="tinymce-container" :style="{width: containerWidth}">
        <textarea :id="tinymceId" class="tinymce-textarea"/>
        <div class="editor-custom-btn-container">
            <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK" />
        </div>
    </div>
</template>
<script>
import editorImage from './components/EditorImage'
import plugins from './plugins'
import toolbar from './toolbar'

export default {
    name: 'Tinymce',
    components: {
        editorImage
    },
    props: {
        id: {
            type: String,
            default: function(){
                return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '') 
            }
        },
        value: {
            type: String,
            default: ''
        },
        toolbar:{
            type: Array,
            required: false,
            default(){
                return []
            }
        },
        menubar: {
            type: String,
            default: 'file edit insert view format table'
        },
        height: {
            type: [Number, String],
            required: false,
            default: 360
        }
    },
    data(){
        return {
           hasInit: false,
           hasChange: false,
           tinymceId: this.id,
           fullscreen: false,
           languageTypeList: {
               'en': 'en',
               'zh': 'zh_CN'
           }
        }
    },
    computed: {
        language(){
            return this.languageTypeList[this.$store.getters.language]
        },
        containerWidth(){
            const width = this.width
            if(/^[\d]+(\.[\d]+)?$/.test(width)){
                //匹配 `100`, `'100'`
                return `${width}px`
            }
            return width
        }
    },
    mounted(){
        this.initTinymce()
    },
    activated(){
        this.initTinymce()
    },
    deactivated(){
        this.destroyTinymce()
    },
    destroyed(){
        this.destroyTinymce()
    },
    methods: {
        initTinymce(){
            const _this = this
            window.tinymce.init({
                language: this.language,
                selector: `#${this.tinymceId}`,
                height: this.height,
                menubar: this.menubar,
                body_class: 'panel-body ',
                object_resizing: false,
                end_container_on_empty_block: true,
                toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
                plugins: plugins,
                powerpaste_word_import: 'clean',
                code_dialog_height: 450,
                code_dialog_width: 1000,
                // advlist_bullet_styles: 'square',
                // advlist_number_styles: 'default',
                imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
                default_link_target: '_blank',
                link_title: false,
                nonbreaking_force_tab: true,
                init_instance_callback: editor => {
                    if(_this.value){
                        editor.setContent(_this.value)
                    }
                    _this.hasInit = true
                    editor.on('NodeChange Change KeyUp SetContent', () => {
                        this.hasChange = true
                        this.$emit('input', editor.getContent())
                    })
                },
                setup(editor){
                    editor.on('FullscreenStateChanged', (e) => {
                        _this.fullscreen = e.state
                    })
                }
            })
        },
        destroyTinymce(){
            const tinymce = window.tinymce.get(this.tinymceId)
            if(this.fullscreen){
                tinymce.execCommand('mceFullScreen')
            }
            if(tinymce){
                tinymce.destroy()
            }
        },
        setContent(value){
            window.tinymce.get(this.tinymceId).setContent(value)
        },
        getContent(){
            window.tinymce.get(this.tinymceId).getContent()
        },
        imageSuccessCBK(arr){
            const _this = this
            arr.forEach(v => {
                window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
            })
        }
    }
}
</script>
<style scoped>
.tinymce-container {
    position: relative;
    line-height: normal;
}
.tinymce-container>>>.mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
    visibility: hidden;
    z-index: -1;
}
.editor-custom-btn-container {
    position: absolute;
    right: 4px;
    top: 4px;
}
.fullscreen .editor-custom-btn-container {
    z-index: 1000;
    position: fixed;
}
.editor-upload-btn {
    display: inline-block;
}
</style>

