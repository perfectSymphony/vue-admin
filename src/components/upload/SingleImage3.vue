<template>
  <div class="upload-container">
    <el-upload
      drag
      :data="dataObj"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      class="image-uploader"
      action="https://httpbin.org/post"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div v-show="imageUrl.length > 1" class="image-preview image-app-preview">
      <img :src="imageUrl">
      <div class="image-preview-wrapper">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
    <div class="image-preview">
      <div v-show="imageUrl.length > 1" class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleImageUpload3',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dataObj: {
        token: '',
        key: ''
      }
    }
  },
  computed: {
    imageUrl() {
      return this.value
    }
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      console.log('走了')
      this.$emit('input', val)
    },
    handleImageSuccess(file) {
      this.emitInput(file.files.file)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.upload-container {
    width: 100%;
    position: relative;
    @include clearfix;
    .image-uploader {
        width: 35%;
        float: left;
    }
    .image-preview {
        width: 200px;
        height: 200px;
        position: relative;
        border: 1px dashed #d9d9d9;
        float: left;
        margin-left: 50px;

        .image-preview-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .image-preview-action {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            text-align: center;
            color: #fff;
            opacity: 0;
            font-size: 20px;
            background-color: rgba(0, 0, 0, .5);
            transition: opacity .3s;
            cursor: pointer;
            line-height: 200px;

            .el-icon-delete {
                font-size: 36px;
            }
        }
        &:hover {
            .image-preview-action {
                opacity: 1;
            }
        }
    }

    .image-app-preview {
        width: 320px;
        height: 180px;
        position: relative;
        border: 1px solid #d9d9d9;
        float: left;
        margin-left: 50px;

        .app-fake-conver {
            width: 100%;
            height: 44px;
            position: absolute;
            text-align: center;
            line-height: 64px;
            color: #fff;
        }
    }
}

</style>
