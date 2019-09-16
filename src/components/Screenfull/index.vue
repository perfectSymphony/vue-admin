<template>
  <div>
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen':'fullscreen'" @click="click" />
  </div>
</template>
<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.destroyed()
  },
  methods: {
    click() {
      // 全屏事件
      // enabled  --> 返回一个布尔值，是否允许您进入全屏。如果您的页面位于内部
      if (!screenfull.enabled) {
        this.$message({
          message: '你的浏览器不支持全屏工作',
          type: 'warning'
        })
        return false
      }
      // 如果当前全屏模式未激活则请求全屏，否则退出全屏。
      screenfull.toggle()
    },
    change() {
      // .isFullscreen  --->  返回布尔值，表示当前是否处于全屏模式。
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        // console.log(screenfull)
        // 添加侦听器，以便在浏览器进出全屏或出现错误时执行相应的事件
        screenfull.on('change', this.change)
      }
    },
    destroyed() {
      if (screenfull.enabled) {
        // 删除以前注册的事件侦听器
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
<style scoped>

</style>

