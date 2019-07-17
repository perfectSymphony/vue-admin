<template>
    <div class="components-container">
        <aside>Markdown is based on
            <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a> ，simply wrapped with Vue.
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html">
                {{ $t('documentation.documentation') }}
            </a>
        </aside>
        <div class="editor-container">
            <el-tag class="tag-title">
                Basic:
            </el-tag>
            <markdown-editor />
        </div>
    </div>
</template>
<script>
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
    name: 'markdown',
    components: {
        MarkdownEditor
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.editor-container {
    margin-bottom: 30px;
}
.tag-title {
    margin-bottom: 10px;
}
</style>


