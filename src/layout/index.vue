<template>
    <div class="app-wrapper">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <navbar />  
      </div>     
    </div>
</template>
<script>
import { Navbar, Sidebar } from './components'
import { mapState } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar
    },
    data() {
      return {
        isCollapse: true
      };
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

   .app-wrapper {
       @include clearfix;
       position: relative;
       width: 100%;
       height:100%;
   }
</style>
