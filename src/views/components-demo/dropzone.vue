<template>
  <div class="components-container">
    <aside>自己封装一个图片上传的插件</aside>
    <dropzone id="myVueDropzone" url="https://httpbin.org/post" @dropzone-removedFile="dropzoneR" @dropzone-success="dropzoneS" />
  </div>
</template>
<script>

import Dropzone from '@/components/Dropzone'

export default {
  name: 'DropzoneDemo',
  components: {
    Dropzone
  },
  methods: {
    dropzoneS(file) {
      console.log(file)
      this.$message({
        message: 'Upload success',
        type: 'success'
      })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({
        message: 'Delete success',
        type: 'delete'
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

