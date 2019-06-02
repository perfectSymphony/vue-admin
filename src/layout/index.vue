<template>
    <div :class="classObj" class="app-wrapper">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <navbar />  
        <!-- 主体内容部分 -->
        <tags-views /> 
        <app-main />
      </div>     
    </div>
</template>
<script>
import { AppMain, Navbar, Sidebar, TagsView } from './components'
import { mapState } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar,
      AppMain,
      TagsView
    },
    computed: {
      ...mapState({
        sidebar: state => state.app.sidebar
      }),
      classObj() {
        // console.log(this.sidebar)
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation
        }
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
<style lang="scss" scoped>
   @import "~@/styles/mixin.scss";
   @import "~@/styles/variables.scss";
   .app-wrapper {
       @include clearfix;
       position: relative;
       width: 100%;
       height:100%;
   }
   .hideSidebar .fixed-header {
     width: calc(100% - 54px)
   }
</style>
