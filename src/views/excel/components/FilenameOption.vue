<template>
  <div style="display:inline-block;">
    <!-- $t is vue-i18n global function to translate lang -->
    <label class="radio-label" style="padding-left: 0px;">请输入文件名称: </label>
    <el-input v-model="filename" :placeholder="$t('excel.placeholder')" style="width: 350px;" prefix-icon="el-icon-document" />
  </div>
</template>

<script>
export default {
  name: 'FilenameOption',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style>

</style>
