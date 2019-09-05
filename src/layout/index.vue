<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <!-- 主体内容部分 -->
      <tags-view/>
      <app-main/>
      <right-panel v-if="showSetting">
        <settings />
      </right-panel>
    </div>
  </div>
</template>
<script>

import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Sidebar, TagsView, Settings } from "./components"
import { mapState } from "vuex"

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    Settings,
    RightPanel
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      showSetting: state => state.settings.showSetting
    }),
    classObj() {
      // console.log(this.sidebar)
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
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
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
</style>
