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
      </template>
      <!-- 下拉菜单 -->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <span class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" alt="" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>
              {{ $t('navbar.profile') }}
            </el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/perfectSymphony/vue-admin">
            <el-dropdown-item>
              {{ $t('navbar.github') }}
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
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
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
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
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

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
                    border-radius: 10px;
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
</style>

