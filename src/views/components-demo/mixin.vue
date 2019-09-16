<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>按钮</span>
        </div>
        <div style="margin-bottom: 50px;">
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn blue-btn" to="/documentation/index">
              Documentation
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn light-blue-btn" to="/icon/index">
              icons
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn pink-btn" to="/components/mixin">
              Excel
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn green-btn" to="/components/mixin">
              Table
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn tiffany-btn" to="/components/mixin">
              Form
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="liu-btn yellow-btn" to="/components/mixin">
              Theme
            </router-link>
          </el-col>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div style="height: 100px;">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="title">
                <md-input v-model="demo.title" icon="search" name="title" autocomplete="off" placeholder="请输入事项名称">
                  事项名称
                </md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>图片hover效果</span>
          </div>
          <div class="component-item">
            <liu-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
              vue-element-admin
            </liu-thumb>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>水波纹 waves v-directive</span>
          </div>
          <div class="component-item">
            <el-button v-waves type="primary">
              水波纹效果
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>hover text</span>
          </div>
          <div class="component-item">
            <mallki class-name="mallki-text" text="vue-element-admin" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Sharing</span>
          </div>
          <div class="component-item" style="height: 580px;">
            <dropdown-menu :items="ProjectList" style="margin: 0 auto" title="技术栈" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import MdInput from '@/components/MDinput'
import liuThumb from '@/components/liuThumb'
import waves from '@/directive/waves/index.js' // 水波纹指令
import Mallki from '@/components/TextHoverEffect/Mallki'
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'ComponentMixinDemo',
  components: {
    MdInput,
    liuThumb,
    Mallki,
    DropdownMenu
  },
  directives: {
    waves
  },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入六个字符'))
      } else {
        callback()
      }
    }
    return {
      demo: {
        title: ''
      },
      demoRules: {
        title: [{
          required: true,
          trigger: 'change',
          validator: validate
        }]
      },
      ProjectList: [
        { title: 'HTML5', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'CSS3', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'JavaScript', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'NodeJS', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'Vue.js', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'electron', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '性能优化篇', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '数据结构和算法篇', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '设计模式篇', href: 'https://www.cnblogs.com/myprogramer/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mixin-components-container {
    background-color: #f0f2f5;
    padding: 30px;
    min-height: calc(100vh - 84px);
}

.component-item {
    min-height: 100px;
}
</style>
