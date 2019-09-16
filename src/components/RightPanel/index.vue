<template>
  <div ref="rightPanel" :class="{show: show}" class="rightPanel-container">
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div class="handle-button" :style="{'top': buttonTop+'px', 'background-color': theme}" @click="show = !show">
        <i :class="show ? 'el-icon-close' : 'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// showRightPanel
import { addClass, removeClass } from '@/utils'

export default {
  name: 'RightPanel',
  props: {
    clickNotClose: {
      type: Boolean,
      default: false
    },
    buttonTop: {
      type: Number,
      default: 250
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme
    }
  },
  watch: {
    show(value) {
      console.log(value)
      if (value && !this.clickNotClose) {
        this.addEventClick()
      }
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },
  mounted() {
    this.insertToBody()
  },
  methods: {
    addEventClick() {
      window.addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
      const parent = evt.target.closest('.rightPanel')
      if (!parent) {
        this.show = false
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    }
  }
}
</script>

<style>
.showRightPanel {
    overflow: hidden;
    position: relative;
    width: calc(100% - 15px)
}
</style>

<style lang="scss" scoped>

// transition: all 1s cubic-bezier(0,0,1,1);
//                                     (x,y)(x,y)
//                                     第一个控制点 第二个控制点
//                                     y值可正可负，为负时，速度先为负后为正，y为负，斜率也就为负值，所以小球先退后一点再加速前进。
//                                     x轴只能为正[0,1]之间。
//                                     峰值曲线，越尖，速度越快；越平缓，速度越慢。
//                                     （x,y,x,y）
//                                     y轴差值越少，越短促有力一点；
//                                     y轴可正可负，负回退正前进；

.rightPanel-background {
    opacity: 0;
    transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
    background: rgba(0, 0, 0, .2);
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    position: fixed;
    z-index: -1;
}

.rightPanel {
    background: #fff;
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 260px;
    top: 0px;
    left: 0px;
    box-shadow: 0 0 15px 0px rgba(0, 0, 0, .05);
    transition: all .25s cubic-bezier(.7, .3, .1, 1);
    transform: translate(100%);
    z-index: 40000;
    left: auto;
    right: 0;
}

.show {
    transition: all .3s cubic-bezier(.7, .3, .1, 1);

    .rightPanel-background {
        z-index: 20000;
        opacity: 1;
        width: 100%;
        height: 100%;
    }

    .rightPanel {
        transform: translate(0);
    }
}

.handle-button {
    position: absolute;
    left: -48px;
    border-radius: 6px 0 0 6px !important;
    width: 48px;
    height: 48px;
    pointer-events: auto;
    z-index: 0;
    cursor: pointer;
    font-size: 24px;
    text-align: center;
    color: #fff;
    line-height: 48px;

    i {
        font-size: 24px;
        line-height: 48px;
    }
}
</style>
