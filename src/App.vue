<template>
  <div id="app">
    <!-- 根据路由匹配到的组件将显示在这里 SPA -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
 #nprogress .bar {
   background: #F85959 !important;
 }
</style>
