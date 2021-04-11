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
      a: 1,
      b: 1
    }
  },
  watch: {
    a() {
      console.log('执行了')
      this.b = 2
    }
  },
  mounted() {
    this.a = 2
    console.log(this.a)
    console.log(this.b)
  }
}
</script>

<style lang="scss">

</style>
