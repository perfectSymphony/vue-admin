<template>
  <div :id="id" :class="className" :style="{height:height, width: width}">

  </div>
</template>

<script>

import echarts from 'echarts'
import resize from './mixins/resize'

export default {
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        id: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '200px'
        },
        height: {
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
        this.ininChart()
    },
    beforeDestroy(){
        if(!this.chart){
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        ininChart(){
            this.chart = echarts.init(document.getElementById(this.id))

            this.chart.setOption({
                backgroundColor: '#394056',
                title: {
                    text: '折线图堆叠',
                    top: 20,
                    left: '2%',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#F1F1F3'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 5,
                    itemGap: 13,
                    top: 20,
                    right: '4%',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                        fontSize: 14
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                series: [
                    {
                        name:'邮件营销',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        stack: '总量',
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                // https://echarts.baidu.com/option-gl.html#globe.environment
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(213, 58, 53, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(213, 58, 53, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                            borderColor: 'rgba(213, 58, 53,0.27)',
                            borderWidth: 12

                            }
                        },
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(51, 75, 92, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(51, 75, 92, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                            borderColor: 'rgba(51, 75, 92,0.2)',
                            borderWidth: 12

                            }
                        },
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(106, 176, 184, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(106, 176, 184, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                            borderColor: 'rgba(106, 176, 184,0.2)',
                            borderWidth: 12
                            }
                        },
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(233, 143, 111, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(233, 143, 111, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                            borderColor: 'rgba(233, 143, 111,0.2)',
                            borderWidth: 12
                            }
                        },                        
                        data:[720, 932, 801, 634, 690, 930, 1020]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(159, 218, 191, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(159, 218, 191, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                            borderColor: 'rgba(159, 218, 191,0.2)',
                            borderWidth: 12
                            }
                        }, 
                        data:[720, 830, 990, 434, 501, 932, 220]
                    }
                ]                
            })
        }
    }
}
</script>

<style>

</style>