<template>
    <div :class="className" :style="{heght:height, width:width}">

    </div>
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons')  //使用require而不是import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全
import { debounce } from '@/utils'

export default {
    name: 'LineChart',
    props: {
        className: {
            type:String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '100%'
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            chart: null,
            sidebarElm: null
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler(val){
                this.setOptions(val)
            }
        }
    },
    mounted(){
        this.initChart()
    },
    methods: {
       setOptions({expectedData, } = {}){
           this.chart.setOption({
               xAxis:{
                   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                   boundaryGap: false,           // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
                   axisTick: {      //坐标轴刻度相关设置。
                       show: false
                   }
               },
               grid: {
                   left: 10,
                   right: 10,
                   bottom: 20,
                   top:30,
                   containLabel: true
               },
               tooltip: {
                   trigger: 'xAxis',
                   axisPointer: {
                       type: 'shadow'
                   },
                   padding: [5, 10]
               },
               yAxis: {
                   yAxis: {
                       show: false
                   }
               },
               legend: {
                   data: ['expected','actual']
               },
               series: [{
                   name: 'expected',
                   itemStyle: {
                       color: '#FF005A'
                   },
                   lineStyle: {
                       color: '#FF005A',
                       width: 2
                   },
                   smooth: true,
                   type: 'line',
                   data: expectedData,
                   animationDuration: 2800,
                   animationEasing: 'cubicInOut'
               },
               {
                   name: 'actual',
                   smooth: true,
                   type: 'line',
                   itemStyle: {
                       color: '#3888fa',
                   },
                   lineStyle: {
                       color: '#3888fa',
                       width: 2
                   },
                   areaStyle: {
                       color: '#f3f8ff'
                   },
                    data: actualData,
                    animationDuration: 2800,
                    animationEasing: 'backOut'                   
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

