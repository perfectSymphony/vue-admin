<template>
    <div class="menu-wrapper">
        <!-- 只有一级菜单的菜单 -->
        <template>
            <app-link>
                <el-menu-item index="1-2">
                    <item />    
                </el-menu-item>   
            </app-link>
        </template>
         <!--拥有二级菜单的菜单  -->
        <el-submenu>
            <!-- 拥有二级子菜单的一级菜单的标题和icon -->
            <template slot="title">
                <item />    
            </template>
            <!-- 二级子菜单 -->
            <sidebar-item />
        </el-submenu>      
    </div>
</template>
<script>
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'

export default {
    name: 'SidebarItem',
    components: {
       Item,
       AppLink 
    },
    data() {
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }    
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

