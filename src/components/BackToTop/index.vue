<template>
  <transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200" style="height:56px;width:56px;">
        <path d="M510.26 266.553c-37.476 0-67.86 30.385-67.86 67.861s30.384 67.862 67.86 67.862 67.861-30.386 67.861-67.862-30.385-67.861-67.86-67.861zm0 101.792c-18.738 0-33.93-15.21-33.93-33.93 0-18.756 15.193-33.931 33.93-33.931 18.739 0 33.932 15.175 33.932 33.93 0 18.722-15.194 33.931-33.931 33.931zM524.359 860.345c4.855 4.04 7.952 10.139 7.952 16.964 0 2.286-.348 4.507-.994 6.595l.348-.034-21.157 44.437-19.103-39.566a21.956 21.956 0 0 1-3.197-11.432c0-6.825 3.097-12.923 7.952-16.964h-33.898c-1.873 5.3-2.9 11-2.9 16.964 0 12.626 4.607 24.19 12.245 33.104l21.901 37.508c1.326 8.053 8.318 14.217 16.75 14.217 8.135 0 14.928-5.732 16.585-13.387h.398l24.62-42.115a50.735 50.735 0 0 0 9.294-29.326 50.791 50.791 0 0 0-2.899-16.964h-33.897z" />
        <path d="M713.68 647.15l-65.239-13.587c18.21-55.2 31.474-117.065 31.474-180.192 0-201.365-103.615-340.569-118.278-357.369C546.991 79.236 510.343 63 510.261 62.9c0 0-37.411 15.772-51.377 33.102-13.967 17.363-118.278 156.004-118.278 357.369 0 63.684 13.506 126.096 31.962 181.666L314.41 647.15c-18.356 3.812-28.695 21.44-23.244 39.4l54.607 179.86c3.115 10.304 10.918 19.084 20.528 24.453l8.036-99.838c1.508-18.655 17.48-36.847 35.836-40.69l9.751-2.023c29.36 58.339 55.626 95.066 55.626 95.066h69.419s26.694-37.326 56.339-96.484l16.609 3.44c18.357 3.843 34.329 22.034 35.837 40.69l8.036 99.838c9.61-5.369 17.396-14.149 20.528-24.453l54.607-179.86c5.45-17.959-4.89-35.587-23.245-39.399zM469.85 158.826c11.68-21.438 40.41-42.48 40.41-42.48l.033 5.17.016-5.136s30.667 22.797 42.347 44.236c2.47 4.54 7.323 11.332 13.42 21.108H455.221c6.695-10.77 12.028-18.092 14.63-22.898zm218.482 571.096c-3.745 18.753-5.7 37.873-8.103 37.873-4.556 0-12.244-40.624-45.429-52.189-5.548-1.916-10.91-3.803-16.036-5.6l.164-.364c-21.887-7.654-38.836-13.619-42.73-15.01-27.949 61.501-56.562 96.89-56.562 96.89H500.85s-27.504-34.064-54.923-93.41c-8.499 2.96-21.402 7.491-36.31 12.708-4.433 1.547-9.034 3.14-13.759 4.787-33.185 11.565-42.53 51.925-47.101 51.925-2.154 0-4.391-20.378-8.07-37.047-4.142-18.688-6.28-33.63-1.723-38.602 4.089-4.428 26.12-11.641 48.25-18.013 17.303-4.944 34.648-9.414 43.519-11.646-21.29-55.268-39.184-125.88-39.184-207.362 0-119.62 23.527-194.044 45.066-239.207h148.05c21.125 44.534 44.352 118.559 44.352 239.207 0 80.188-17.346 149.905-38.223 204.778 6.862 1.7 23.965 6.005 42.285 11.087l-.12.311c26.078 7.257 54.26 15.973 58.734 20.844 4.127 4.473.051 20.908-3.361 38.04z" />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: function() {
        return {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radious': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        }
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      visible: false,
      isMoving: false,
      interval: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    backToTop() {
      if (this.isMoving) return
      const start = window.pageYOffset
      let i = 0
      this.isMoving = true
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
          this.isMoving = false
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16.7)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  }
}
</script>

<style lang='scss' scoped>
.back-to-ceiling {
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: #d5dbe7;
    }
}

.fade-enter,
.fade-leave {
    opacity: 0
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

// 常规的HTML-CSS中，是没有fill属性的。
// fill属性只在XML-SVG格式中存在
// such as: fill:blue; 把文字型颜色填充到当前元素内
.back-to-ceiling .Icon {
  fill: #9aaabf;
  background: none;
}
</style>
