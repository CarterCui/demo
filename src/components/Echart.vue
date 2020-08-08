<template>
  <div class="draw">
    <chart ref="chart1" :options="orgOptions" :auto-resize="true" class="flex-father echart"></chart>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orgOptions: ''
    }
  },
  mounted () {
    this.orgOptions = {
      color: ['#f44'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
          axisTick: {alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '每月花费',
          type: 'bar',
          barWidth: '60%',
          data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .echart{
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .flex-father {
    display: flex;
    align-content: center;
  }
</style>
