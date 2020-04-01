<template>
  <div id="chart-linear"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart-linear',
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
      var myChart = echarts.init(document.getElementById('chart-linear'))
      let xAxisData = Object.keys(this.obj)
      let seriesData = Object.values(this.obj)
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: ''
        },
        backgroundColor :'#d3f0fd',
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            var result = params[0].name+'<br/>'
            params.forEach(function (item) {
              var value=0
              if(item.value==undefined || item.value==""){
                value=0
              }else{
                value=item.value;
              }
              result += item.marker + " " + item.seriesName + " : " + value+"%</br>";
            })
            return result
          },
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            magicType : {show: true, type: ['line', 'bar']} 
          }
        },
        legend: {
          data:['完成量']
        },
        xAxis: {
          name:"季度",
          data: eval(xAxisData),
          boundaryGap: false
        },
        yAxis: {
          type : 'value',
          axisLabel : {
            formatter: '{value} %'
          }
        },
        connectNulls: true,
        series: [
          {
            name: '完成量',
            type: 'line',
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
#chart-linear {
  width: 100%;
}
</style>