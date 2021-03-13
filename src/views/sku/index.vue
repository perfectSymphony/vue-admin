<template>
  <div class="app-container">
    <sku-wrap v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'Sku',
  components: {
    SkuWrap: resolve => {
      return require(['@/components/sku/index.vue'], resolve)
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
