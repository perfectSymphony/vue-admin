<template>
  <div class="app-container">
    <sku-wrap v-bind="$attrs" v-on="$listeners"></sku-wrap>
  </div>
</template>

<script>
export default {
  name: 'sku',
  components: {
    SkuWrap: resolve => {
      return require(['@/components/sku/index.vue'], resolve)
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
