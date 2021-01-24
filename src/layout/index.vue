<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile'&& sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{ hasTagsView:needTagsView }" class="main-container">
      <Sticky :z-index="10">
        <div :class="{'fixed-header':fixedHeader}">
          <navbar />
          <tags-view v-if="needTagsView" />
        </div>
      </Sticky>
      <app-main />
      <right-panel v-if="showSetting">
        <settings />
      </right-panel>
      <el-tooltip placement="top" content="tooltip">
        <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
      </el-tooltip>
    </div>
  </div>
</template>
<script>

import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Sidebar, TagsView, Settings } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import Sticky from '@/components/Sticky'
import BackToTop from '@/components/BackToTop'

// 页面分布引导
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    Settings,
    RightPanel,
    Sticky,
    BackToTop
  },
  mixins: [ResizeMixin],
  data() {
    return {
      dirver: null,
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '80px',
        height: '80px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: 'transparent'
      }
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      showSetting: state => state.settings.showSetting,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader,
      device: state => state.app.device
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    this.guide()
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    guide() {
      this.dirver = new Driver()
      this.dirver.defineSteps(steps)
      this.dirver.start()
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
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
