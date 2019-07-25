<template>
    
</template>

<script>

    // 引入全局实例
    import CodeMirror from 'codemirror'
    import 'codemirror/addon/lint/lint.css'
    import 'codemirror/lib/codemirror.css'

    // 根据设置的主题，引入相应的主题包,主题包存储在theme下
    import 'codemirror/theme/colorforth.css'
    require('./script-loader!jsonlint')

    // 根据设置的编辑器语言，引入相应语言工具包
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/addon/lint/lint'
    import 'codemirror/addon/lint/json-lint'

    export default {
        name: 'JsonEditor',
        props: ['value'],
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

