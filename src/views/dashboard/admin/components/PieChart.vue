<template>
  <div :class="className" :style="{height:height, width: width}" />
</template>

<!-- 这块代码是对原作者的代码做了调整，我认为setoption里面的内容应该抽取出来。 原作者代码应该请查看下面连接，如果你有更好的想法，请写出的想法。 -->
<!-- 可以作为独立的公用组件 -->
<!-- https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/dashboard/admin/components/RaddarChart.vue -->

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { debounce } from '@/utils'

export default {
  name: 'PieChart',
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
          trigger: 'item',
          formatter: '{a} < br /> {b} : {c} ({d}%) '
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        calculable: true,
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
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
