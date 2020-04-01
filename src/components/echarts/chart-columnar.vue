<template>
  <div id="chart-columnar"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart-columnar',
  props: {
    value: Object
  },
  data () {
    return {
      obj: this.value
    }
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart-columnar'))
      let xAxisData = Object.keys(this.obj)
      let seriesData = Object.values(this.obj)
      // 指定图表的配置项和数据
      var option = {
        backgroundColor :'#d3f0fd',
        tooltip: {
          trigger: 'axis',
          backgroundColor :'#d3f0fd',
          formatter: function(params) {
            var result = params[0].name+'月<br/>'
            params.forEach(function (item) {
              var value = 0
              if(item.value==undefined || item.value==""){
                value = 0
              }else{
                value=item.value;
              }
                result += item.marker + " " + item.seriesName + " : " + value+"%</br>";
            })
            return result
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data:['完成量']
        },
        xAxis: [
          {
            type: 'category',
            name:"月",
            data: xAxisData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: {
          name:'百分比',
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          }
        },
        connectNulls: true,
        series: [
          {
            name: '完成量',
            type: 'bar',
            barWidth : 30,
            data: eval(seriesData),
            itemStyle:{
              normal:{
                color:'#1d7dc4'
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang='less' scoped>
#chart-columnar {
  width: 100%;
}
</style>