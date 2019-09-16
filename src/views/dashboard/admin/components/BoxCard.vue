<template>
  <el-card class="box-card-component" style="margin-left: 8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" class="image">
    </div>
    <div style="position:relative;">
      <liu-thumb :image="avatar" class="liuThumb" />
      <mallki class-name="mallki-text" text="vue-admin" />
      <div style="padding-top:35px;" class="progress-item">
        <span>Vue</span>
        <el-progress :percentage="80" />
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="100" status="success" />
      </div>
      <div class="progress-item">
        <span>Css</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>ESLint</span>
        <el-progress :percentage="28" status="exception" />
      </div>
    </div>
  </el-card>
</template>
<script>
import { mapGetters } from 'vuex'
import liuThumb from '@/components/liuThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  name: 'BoxCard',
  components: {
    liuThumb,
    Mallki
  },
  data() {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  }
}
</script>
<style lang="scss">
  .box-card-component{
      .el-card__header{
          padding: 0px!important;
      }
  }
</style>
<style lang="scss" scoped>
  .box-card-component{
      .box-card-header {
          position: relative;
          height: 215px;
          img {
              width: 100%;
              height: 100%;
              transition: all 0.2s linear;
              &:hover {
                  transform: scale(1.1, 1.1);
                  // filter CSS属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染
                  // contrast => 调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比
                  filter: contrast(150%);
              }
          }
      }
      .mallki-text {
        position: absolute;
        top: 0px;
        right: 30px;
        font-size: 20px;
        font-weight: bold;
      }
      .liuThumb {
        z-index: 100;
        width: 70px!important;
        height: 70px!important;
        position: absolute!important;
        top: -45px;
        left: 0px;
        border: 5px solid #fff;
        background-color: #fff;
        margin: auto;
        box-shadow: none!important;
      }
      .progress-item {
          margin-bottom: 10px;
          font-size: 14px;
      }
    @media only screen and (max-width: 1510px){
        .mallki-text{
        display: none;
        }
    }
  }

</style>
