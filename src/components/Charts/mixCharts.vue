<template>
  <div :id="id" :class="className" :style="{height: height, width: width}">

  </div>
</template>

<script>

import echarts from 'echarts'
import resize from './mixins/resize'

export default {
    mixins: [resize],
    props: {
        id: {
            type: String,
            default: 'chart'
        },
        className: {
            type: String,
            default: 'chart'
        },
        height: {
            type: String,
            default: '200px'
        },
        width: {
            type: String,
            default: '200px'
        }
    },
    data(){
        return {
            chart: null
        }
    },
    mounted(){
        this.initChart()
    },
    beforeDestroy(){
        if(!this.chart){
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
        this.chart = echarts.init(document.getElementById(this.id))

        this.chart.setOption({
            backgroundColor: '#344b58',
            title: {
                text: '混合图表',
                top: 20,
                left: '2%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#F1F1F3'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    textStyle: {
                    color: '#fff'
                    }
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                top: '25%',
                bottom: '14%',
                textStyle: {
                    color: '#fff'
                }
            },
            toolbox: {
                top: 10,
                right: 20,
                feature: {
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                top: 50,
                left: '10%',                    
                data:['图文收入', '视频收入', '总收入'],
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            },
            calculable: true,
            xAxis: {
                type: 'category',
                boundaryGap: true,
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                splitArea: {
                    show: false
                },
                axisLabel: {
                    interval: 0
                },
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            dataZoom: [
                {
                    show: true,
                    height: 30,
                    start: 10,
                    end: 80,
                    xAxisIndex: [0],
                    bottom: 30,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '110%',
                    handleStyle: {
                        color: '#d3dee5'
                    },  
                    textStyle: {
                        color: '#fff' 
                    },
                    borderColor: '#90979c'              
                },                    
                {
                    type: 'inside',
                    show: true,
                    height: 15,
                    start: 1,
                    end: 35
                }
            ],
            series: [{
            name: '图文收入',
            type: 'bar',
            stack: 'total',
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
                normal: {
                color: 'rgba(255,144,128,1)',
                label: {
                    show: true,
                    textStyle: {
                    color: '#fff'
                    },
                    position: 'insideTop',
                    formatter(p) {
                    return p.value > 0 ? p.value : ''
                    }
                }
                }
            },
            data: [50, 42, 200, 34, 150, 270, 200]
            },

            {
            name: '视频收入',
            type: 'bar',
            stack: 'total',
            itemStyle: {
                normal: {
                color: 'rgba(0,191,183,1)',
                barBorderRadius: 0,
                label: {
                    show: true,
                    position: 'top',
                    formatter(p) {
                    return p.value > 0 ? p.value : ''
                    }
                }
                }
            },
            data: [100,190, 61, 120, 40, 60, 210 ]
            }, {
            name: '总收入',
            type: 'line',
            stack: 'total',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                color: 'rgba(252,230,48,1)',
                barBorderRadius: 0,
                label: {
                    show: true,
                    position: 'top',
                    formatter(p) {
                    return p.value > 0 ? p.value : ''
                    }
                }
                }
            },
            data: [150, 232, 261, 154, 190, 330, 410]
            }
            ]
        })
        }
    }
}
</script>

<style>

</style>