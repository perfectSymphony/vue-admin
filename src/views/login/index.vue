<template>
  <div class="login-container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="login-form" auto-complete="on" label-position="left">
      
      <div class="title-container">
        <h3 class="title">
          perfectSymphony
        </h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input 
            ref="username"
            type="text"
            name="username"
            tabindex="1"
            placeholder="账号" 
            v-model="loginForm.username" 
            auto-complete="on" 
        />
      </el-form-item>

      <el-tooltip content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input 
             ref="password"
             type="password"
             name="paddword"
             tabindex="2"
             placeholder="密码"
             v-model.number="loginForm.password"
             auto-complete="on"
          />
          <span class="show-pwd" onselectstart="return false;" unselectable="on">
            <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button type="primary" style="width: 100%; margin-bottom: 30px;" @click="submitForm('loginForm')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入密码'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.loginForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        loginForm: {
          username: 'admin',
          password: 'perfectSymphony'
        },
        rules: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
  /* 更改input 背景不协调 和光标变色 */
  // https://github.com/PanJiaChen/vue-element-admin/pull/927


  $bg:#283443;
  $light_gray:#fff;
  $cursor: #fff;

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
  $bg: #2d3a4b;
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
      padding:160px 35px 0;
      margin: 0 auto;
      overflow: hidden; 
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

  }
</style>
