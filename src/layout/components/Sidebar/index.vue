<template>
  <div :class="{'has-logo': showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- :key的主要作用是为了高效的更新虚拟DOM -->
        <!-- 另外vue在使用相同的标签名元素的过度切换时，也会使用到key，其目的也是为了让vue可以区分他们 -->
        <!-- 抽取SidebarItem为单独的路由组件，方便递归调用 -->
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: {
    SidebarItem,
    Logo
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      // console.log(this.$route)
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    variables() {
      return variables
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    }
  }
}
</script>
<style lang="scss" scoped>
 ::v-deep .el-scrollbar__bar {
          .el-scrollbar__thumb {
            background: #ff8282;
            &:hover {
              background: #FE4145;
            }
          }
    }
</style>

