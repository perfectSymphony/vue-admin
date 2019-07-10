<template>
    <div :class="{fullscreen: fullscreen}" class="tinymce-container">
        <textarea :id="tinymceId" class="tinymce-textarea"/>
    </div>
</template>
<script>
import plugins from './plugins'

export default {
    name: 'Tinymce',
    components: {

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
        height: {
            type: [Number, String],
            required: false,
            default: 360
        }
    },
    data(){
        return {
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
            console.log(window)
            window.tinymce.init({
                language: this.language,
                selector: `#${this.tinymceId}`,
                height: this.height,
                plugins: plugins,
                setup(editor){
                    editor.on('FullscreenStateChanged', (e) => {
                        _this.fullscreen = e.state
                    })
                }
            })
        },
        destroyTinymce(){

        }
    }
}
</script>
<style scoped>
.tinymce-container {
    position: relative;
    line-height: normal;
}
.tinymce-textarea {
    visibility: hidden;
    z-index: -1;
}
</style>

