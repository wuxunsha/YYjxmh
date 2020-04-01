<template>
  <div id="chart-project"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart-project',
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
      var myChart = echarts.init(document.getElementById('chart-project'))
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
            var result = params[0].name+'<br/>';
            params.forEach(function (item) {
              var value=0
              if(item.value==undefined || item.value==""){
                value=0
              }else{
                value=item.value;
              }
              result += value+"</br>";
            })
            return result
          },
        },
        xAxis: {
          data: ['目标值', '完成情况']
        },
        yAxis: {
          type : 'value'
        },
        connectNulls: true,
        series: [
          {
            type: 'bar',
            data: seriesData,
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
#chart-project {
  width: 100%;
}
</style>