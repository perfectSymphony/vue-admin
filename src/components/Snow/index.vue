<template>
  <div class="snow" />
</template>

<script>

import Snow from './snow.js'

export default {
  data() {
    return {
      // snow: new Snow(),
      snowList: []
    }
  },
  created() {
    this.createSnow()
    this.moveSnow()
  },
  methods: {
    createSnow() {
      for (let i = 0; i < 500; i++) {
        const snow = new Snow()
        snow.render()
        this.snowList.push(snow)
      }
    },
    moveSnow() {
      window.requestAnimationFrame(() => {
        this.snowList.forEach(item => {
          item.move()
        })
        this.moveSnow()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
