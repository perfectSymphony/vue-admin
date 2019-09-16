<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>
<script>
const tagAndTagSpacing = 4 // 标签与标签之间的间距

export default {
  name: 'ScrollPane',
  data() {
    return {

    }
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap
    }
  },
  methods: {
    handleScroll(e) {
      // wheelDelta -> 判断滚轮向上或向下
      // 参数delta可以获取鼠标滚轮的方向和速度。如果delta的值是负的，那么滚轮就是向下滚动，正的就是向上。
      // deltaX, deltaY分别是滚轮滚动的坐标值
      const eventDelta = e.wheelDeta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    moveToTarget(currentTag) {
      const $container = this.$refs.scrollContainer.$el
      // offsetWidth 获取对象自身的宽度 (自身包括padding 、 边框、内容区的宽度)
      const $containerWidth = $container.offsetWidth
      const $scrollWrapper = this.scrollWrapper
      const tagList = this.$parent.$refs.tag

      let firstTag = null
      let lastTag = null

      // 发现第一个和最后一个标签
      if (tagList.length > 0) {
        firstTag = tagList[0]
        lastTag = tagList[tagList.length - 1]
      }

      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth
      } else {
        // 发现前一个标签和下一个标签
        const currentIndex = tagList.findIndex(item => item === currentTag)
        const prevTag = tagList[currentIndex - 1]
        const nextTag = tagList[currentIndex + 1]

        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing

        // the tag's offsetLeft before of prevTag
        const beforePreTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing

        if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
        } else if (beforePreTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePreTagOffsetLeft
        }
      }
    }
  }
}

</script>
<style lang="scss" scoped>
	.scroll-container{
		white-space: nowrap;
		position: relative;
		overflow: hidden;
		width: 100%;
		/deep/ {
			.el-scrollbar__bar {
				bottom: 0px;
			}
			.el-scrollbar__wrap {
				height:49px;
			}
		}
	}
</style>
