<template>
  <div class="components-container">
    <liu-thumb :image="imgDataUrl" />

    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="toggleShow">
      Change Avatar
    </el-button>
    <image-cropper
      v-model="show"
      field="img"
      :width="300"
      :height="300"
      url="https://httpbin.org/post"
      :no-rotate="false"
      :params="params"
      :headers="headers"
      img-format="png"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
    />
  </div>
</template>
<script>
import 'babel-polyfill'
import ImageCropper from '@/components/ImageCropper'
import liuThumb from '@/components/liuThumb'

export default {
  name: 'AvatarUpload',
  components: {
    ImageCropper,
    liuThumb
  },
  data() {
    return {
      imgDataUrl: 'https://raw.githubusercontent.com/perfectSymphony/vue-admin/vue-cli3.0-Mockjs/src/assets/logo.png',
      show: false,
      // 传附带其他数据，格式"{k:v}"
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      }
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    cropSuccess(imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
    },
    cropUploadSuccess(jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    cropUploadFail(status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

