<template>
  <div :class="className" :style="{height: height, width: width}" />
</template>

<!-- 这块代码是对原作者的代码做了调整，我认为setoption里面的内容应该抽取出来。 原作者代码应该请查看下面连接，如果你有更好的想法，请写出的想法。 -->
<!-- 可以作为独立的公用组件 -->
<!-- https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/dashboard/admin/components/RaddarChart.vue -->

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { debounce } from '@/utils'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    height: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: '100%'
    },
    chartData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      handler(val) {
        this.setOptions(val)
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOptions() {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shawdow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
