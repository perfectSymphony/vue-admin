<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>

// 引入全局实例
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'

// 根据设置的主题，引入相应的主题包,主题包存储在theme下
import 'codemirror/theme/zenburn.css'
require('script-loader!jsonlint')

// 根据设置的编辑器语言，引入相应语言工具包
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'

export default {
  name: 'JsonEditor',
  props: ['value'],
  data() {
    return {
      jsonEditor: false
    }
  },
  watch: {
    value(value) {
      const editorValue = this.jsonEditor.getValue()
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
      }
    }
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      gutters: ['CodeMirror-lint-markers'],
      theme: 'zenburn',
      lint: true
    })

    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
    this.jsonEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
    })
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue()
    }
  }
}
</script>

<style lang="scss" scoped>
    .json-editor{
        height: 100%;
        position: relative;
    }
    .json-editor >>> .CodeMirror {
        height: auto;
        min-height: 300px;
    }
    .json-editor >>> .CodeMirror-scroll {
        min-height: 300px;
    }
    .json-editor >>> .cm-s-rubyblue span.cm-string {
    color: #F08047;
    }
</style>

