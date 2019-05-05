<template>
  <div class="login-container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="login-form" auto-complete="on" label-position="left">
      
      <div class="title-container">
        <h3 class="title">
          perfectSymphony
        </h3>
      </div>

      <el-form-item prop="username">
        <el-input 
            ref="username"
            type="text"
            name="username"
            tabindex="1" 
            v-model="loginForm.username" 
            auto-complete="on" 
        />
      </el-form-item>

      <el-tooltip content="Caps lock is On" placement="right">
        <el-form-item prop="password">
          <el-input 
             ref="password"
             name="paddword"
             tabindex="2"
             v-model.number="loginForm.password"
             auto-complete="on"
          />
        </el-form-item>
      </el-tooltip>

      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
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
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.loginForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          age: ''
        },
        rules: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
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

<style lang="scss" scoped>
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
      width:85%;

      input {
        background:transparent;
        border:0;
        -webkit-appearance: none;
        border-radius: 0;
        padding:12px 5px 12px 15px;
        color:$light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }       
      }
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
      min-width: 100%;
      padding:160px 35px 0;
      margin: 0 auto;
      overflow: hidden; 
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
    
  }
</style>
