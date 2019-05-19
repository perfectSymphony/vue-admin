<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <!-- 只有一级菜单的菜单 -->
        <template>
            <app-link>
                <el-menu-item>
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
    props:{
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data() {
      // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
      this.onlyOnechild = null
      return {

      }
    },
    methods: {
      hasOneShowingChild(children = [], parent){
        const showingChildren = children.filter(item => {
          if(item.hidden){
            return false
          } else {
            this.onlyOnechild = item
            return true
          }
        })

        // When there is only one child router, the child router is displayed by default
        if(showingChildren.length === 1){
          return true
        }
        // Show parent if there are no child router to display
        if(showingChildren.length === 0){
          this.onlyOnechild = {
            ...parent,
            path: '',
            noShowingChildren: true
          }
          return true
        }
        return false
      },
      resolvePath(routePath){
        if(isExternal(routePath)) {
          return routePath
        }
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

