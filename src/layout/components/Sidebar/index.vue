<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"> 
     <!-- :key的主要作用是为了高效的更新虚拟DOM -->
     <!-- 另外vue中在使用相同的标签名元素的过度切换时，也会使用到key，其目的也是为了让vue可以区分他们 -->
     <!-- 抽取SidebarItem为单独的路由组件，方便递归调用 -->
     <!-- item(route)是(子)路由对象 -->       
          <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="path" />
        </el-menu>        
    </el-scrollbar>
  </div> 
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

  export default {
    //组件注册
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
          'permission_routes',
          'sidebar'
        ])
    },
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

