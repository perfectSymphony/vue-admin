<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- 面包屑 -->
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <!-- 右侧菜单 -->
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <!-- 全文搜索 -->
        <search id="header-search" class="right-menu-item" />
        <!-- 错误日志 -->
        <error-log class="errLog-container right-menu-item hover-effect" />
        <!-- 设置网站整体字体大小 -->
        <el-tooltip effect="dark" :content="$t('navbar.size')" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
        <!-- 全屏设置 -->
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
        <!-- 国际化 -->
        <lang-select class="right-menu-item hover-effect" />
        <!-- 颜色选择器 -->
        <el-color-picker v-model="themeVal" class="right-menu-item hover-effect" size="mini" show-alpha style="padding: 11px 0;" />
      </template>
      <!-- 下拉菜单 -->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <span class="avatar-wrapper">
          <img :src="avatar" alt="" class="user-avatar">
          <span v-for="role in roles" id="avatar-wrapper" :key="role" class="role">{{ role }}</span>
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>
              <span class="svg-container">
                <svg-icon icon-class="personal" />
              </span>
              {{ $t('navbar.profile') }}
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/perfectSymphony/vue-admin">
            <el-dropdown-item>
              <span class="svg-container">
                <svg-icon icon-class="github" />
              </span>
              {{ $t('navbar.github') }}
            </el-dropdown-item>
          </a>
          <a target="_blank" href="https://github.com/perfectSymphony/vue-admin">
            <el-dropdown-item>
              <span class="svg-container">
                <svg-icon icon-class="resume" />
              </span>
              {{ $t('navbar.resume') }}
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">
              <span class="svg-container">
                <svg-icon icon-class="exit" />
              </span>
              {{ $t('navbar.logOut') }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import ErrorLog from '@/components/ErrorLog'
import Search from '@/components/HeaderSearch'
import theme from '@/layout/mixin/theme'

export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb,
    LangSelect,
    Screenfull,
    SizeSelect,
    ErrorLog,
    Search
  },
  mixins: [theme],
  // data(){
  //   return {
  //     theme: '#f00'
  //   }
  // },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'roles'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      try {
        await this.$store.dispatch('user/logout')
      } catch (err) {
        console.log(err)
      }
      // location.reload()
      this.$router.push(`login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-bottom: 1px solid rgba(0,21,41,.08);

  .hamburger-container {
    height: 100%;
    line-height: 46px;
    float: left;
    cursor: pointer;
    transition: background .3s;
    // 这个属性只用于iOS (iPhone和iPad)。当你点击一个链接或者通过Javascript定义的可点击元素的时候，
    // 它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color为任何颜色。
    // 想要禁用这个高亮，设置颜色的alpha值为0即可。
    -webkit-tap-highlight-color:transparent;
    &:hover {
        background: rgba(0, 0, 0, .025);
    }
  }

  // 面包屑
  .breadcrumb-container {
      float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  // 右侧菜单
  .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &:focus {
          outline: none;
      }

      .right-menu-item {
          display: inline-block;
          padding: 0 8px;
          height: 100%;
          font-size: 18px;
          color: #5a5e66;
          vertical-align: text-bottom;  //把元素的底端与父元素字体的底端对齐。

          &.hover-effect {
              cursor: pointer;
              transition: background .3s;

              &:hover {
                  background: rgba(0, 0, 0, .025);
              }
          }
      }

      .avatar-container {
          margin-right: 30px;

          .avatar-wrapper {
              margin-top: 5px;
              position: relative;

              .user-avatar {
                  cursor: pointer;
                  width: 40px;
                  height: 40px;
                  margin-top: 5px;
                  border-radius: 50%;
              }

              .role {
                cursor: pointer;
                display: inline-block;
                vertical-align: middle;
                margin-top: -30px;
                padding: 0 3px 0 10px;
                font-size: 17px;
              }

              .el-icon-caret-bottom {
                  cursor: pointer;
                  position:absolute;
                  right: -15px;
                  top: -10px;
                  font-size: 12px;
              }
          }
      }
  }
}

.el-dropdown-menu__item {
  &:hover {
    background: #f4f5f6;
    color: #222;
  }
  .svg-container {
    padding-right: 3px;
  }
}

/deep/ .el-color-picker__trigger {
  border: none;
}
</style>

