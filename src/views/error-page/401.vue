<template>
  <div class="errPage-container">
    <el-button icon="arrow-left" class="back-btn" @click="back">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满意请联系你领导</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/dashboard">返回首页</router-link>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible=true">点我看图</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <!-- vue 修饰符.sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。 -->
    <!-- https://element.eleme.cn/#/zh-CN/component/dialog#dialog-dui-hua-kuang -->
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="img">
    </el-dialog>
  </div>
</template>
<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 800px;
  margin: 100px auto;
  .back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
