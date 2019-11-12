<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>
<script>

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.app-main {
    // 60 = navBar 60
    // 34 = tagView
    min-height: calc(100vh - 60px);
    width: 100%;
    position: relative;
    overflow: hidden;
}

.fixed-header + .app-main {
    padding-top: 60px;
}

.hasTagsView {
    .app-main {
        min-height: calc(100vh - 94px);
    }

    .fixed-header + .app-main {
        padding-top: 94px;
    }
}

</style>
