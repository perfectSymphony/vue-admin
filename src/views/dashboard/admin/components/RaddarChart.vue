<template>
	<div :class="className" :style="{height:height, width: width}"></div>
</template>

<!-- 这块代码是对原作者的代码做了调整，我认为setoption里面的内容应该抽取出来。 原作者代码应该请查看下面连接，如果你有更好的想法，请写出的想法。 -->
<!-- 可以作为独立的公用组件 -->
<!-- https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/dashboard/admin/components/RaddarChart.vue -->

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import { debounce } from '@/utils' 

// 初始动画的时长
const animationDuration = 3000

export default {
	name: 'RaddarChart',
	props: {
		className: {
			type: String,
			default: 'chart'
		},
		height:{
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
	data(){
		return {
			chart: null
		}
	},
  watch: {
    chartData: {
      handler(val){
        this.setOptions(val)
      },
      deep: true
    }
  },
	mounted(){
		this.initChart()
		this.__resizeHandler = debounce(() => {
			if(this.chart){
				this.chart.resize()
			}
		}, 100)
		window.addEventListener('resize', this.__resizeHandler)
	},
	beforeDestroy(){
		if(!this.chart){
			return 
		}
		window.removeEventListener('resize', this.__resizeHandler)
		this.chart.dispose()
		this.chart = null
	},
	methods: {
      setOptions(){
        this.chart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointe: {   //坐标指示器，坐标轴出发有效
                type: 'shadow',    //默认为直线， 可选为： ‘line’ | ‘shadow’
              }
            },
            radar: {
              radius: '66%',
              center: ['50%', '42%'],
              splitNumber: 12,              // 指示器轴的分割段数。
              splitArea: {
                areaStyle: {
                  color: 'rgba(127,95,132,.4)',
                  opacity: 0.8,
                  shadowBlur: 10,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15
                }
              },
              indicator: [
                      { name: 'Sales', max: 10000 },
                      { name: 'Administration', max: 20000 },
                      { name: 'Information Techology', max: 20000 },
                      { name: 'Customer Support', max: 20000 },
                      { name: 'Development', max: 20000 },
                      { name: 'Marketing', max: 20000 }
              ]
            },
            legend: {
              left: 'center',
              bottom: '10',
              data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
            },
            series: [{
              type: 'radar',
              symbolSize: 0,
              areaStyle: {
                normal: {
                  shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        opacity: 1              
                }
              },
              data: [
                      {
                        value: [5000, 7000, 12000, 11000, 15000, 14000],
                        name: 'Allocated Budget'
                      },
                      {
                        value: [4000, 9000, 15000, 15000, 13000, 11000],
                        name: 'Expected Spending'
                      },
                      {
                        value: [5500, 11000, 12000, 15000, 12000, 12000],
                        name: 'Actual Spending'
                      }
                    ],
                  animationDuration: animationDuration  
            }]
        })
      },
		initChart(){
			this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
		}
	}
}
</script>
<style lang="scss" scoped>
	
</style>