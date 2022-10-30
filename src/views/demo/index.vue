<template>
  <div class="app-container demo">
    <iframe class="iframe-demo-style" :src='src' frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      src: ''
    }
  },
  mounted() {
    this.src = `${location?.origin}/static/demo/animal.html`
  }
}

</script>

<style lang="scss" scoped>
.iframe-demo-style{
  width: 100%;
  height: calc(100vh - 50px);
}
</style>
