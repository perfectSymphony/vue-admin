<template>
  <div class="app-container map">
    <iframe class="iframe-map-style" :src='src' frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      src: ''
    }
  },
  mounted() {
    this.src = `${location?.origin}/vue-admin/static/map/map.html`
  }
}

</script>

<style lang="scss" scoped>
.iframe-map-style{
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
