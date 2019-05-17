<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo">      
          <sidebar-item />
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
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

