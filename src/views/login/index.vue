<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="loginRules" label-width="100px" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title') }}
        </h3>
        <el-button type="primary" icon="el-icon-caret-top" size="mini" circle class="caret-top" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          type="text"
          name="username"
          tabindex="1"
          placeholder="账号"
          auto-complete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            name="password"
            tabindex="2"
            placeholder="密码"
            auto-complete="on"
          />
          <!-- https://blog.csdn.net/kpyue/article/details/80228675 -->
          <span class="show-pwd" onselectstart="return false;" unselectable="on" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open' " />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width: 100%; margin-bottom: 30px;" @click.native.prevent="handleLogin">
        {{ $t('login.logIn') }}
      </el-button>

      <div style="position: relative">
        <div class="tips">
          <span>{{ $t('login.username') }} : admin</span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">
            {{ $t('login.username') }} : editor
          </span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>
        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          {{ $t('login.thirdparty') }}
        </el-button>
      </div>
    </el-form>

    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t('login.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import socialSign from './components/socialSign'

export default {
  // 此处name有以下3点作用：
  // 1、当项目使用keep-alive时，可搭配组件name进行缓存过滤
  // 2、dom树递归使用， 递归组件是指组件自身调用自身
  // 3、当你用vue-tools时，vue-devtools调试工具里显示的组见名称是由vue中组件name决定的
  name: 'Login',
  components: {
    socialSign
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请填写正确的用户名'))
      } else {
        callback()
      }
    }

    var validatePassword = (rule, value, callback) => {
      // Number.isInteger()用来判断一个值是否为整数。(ES6)
      // 在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值
      // if (!Number.isInteger(value)) {
      //   callback(new Error('请输入密码'));
      // } else {
      // }
      if (value.length < 15) {
        callback(new Error('密码不能小于15位'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: 'admin',
        password: 'perfectSymphony'
      },
      loginRules: {
        username: [
          { require: true, validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { require: true, validator: validatePassword, trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      showDialog: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        // console.log(route)
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {

  },
  methods: {
    showPwd: function() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      //  this 自动绑定到调用它的实例上
      this.$nextTick(() => {
        // $refs: 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例
        this.$refs.password.focus()
      })
    },
    handleLogin: function() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">

  $bg:#283443;
  $light_gray:#fff;
  $cursor: #fff;
  /* 更改input 背景不协调 和光标变色 */

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  // 重置element-ui样式
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent !important;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border:1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
</style>

<style lang="scss" scoped>
  $bg: rgba(188, 238, 234, 0.288);
  $form_bg: rgba(0,0,0,0.3);
  $dark_gray:#889aa4;
  $light_gray: #eee;

  .login-container {
    min-height:100%;
    width:100%;
    background-color: $bg;
    overflow:hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 35px;
      margin: 160px auto;
      overflow: hidden;
      border-radius: 15px;
      border-color: $form_bg;
      background-color: $form_bg;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 20px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bolder;
      }

      .caret-top {
        color: #fff;
        position:absolute;
        top:-28px;
        font-size: 18px;
        right: -27px;
        cursor: pointer;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      // 设置或检索是否允许用户选中文本
      // https://www.html.cn/book/css/properties/user-interface/user-select.htm
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      top: 0;
      right: 0;
    }

    @media only screen and (max-width: 470px) {
      .thirdparty-button {
        display: none;
      }
    }

  }
</style>
