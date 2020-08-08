<template>
    <div class="circle-wrap" >
        <div class="circle" style="display: flex;justify-content: center">
            <svg width="120" height="120" viewBox="-70 -70 140 140" style="transform: rotate(-90deg)">
                <circle cx="0" cy="0" stroke-width="10" fill="none" stroke="rgba(119, 221, 180, 1)" :r="r"/>
                <path :d="d" fill="none" stroke-width="20" stroke="rgba(58, 152, 254, 1)"/>
                <text text-anchor="middle" dominant-baseline="middle" style="transform: rotate(90deg)">{{ ratio }}%</text>
            </svg>
        </div>

        <label class="loading" style="display: flex;justify-content: center">
            Loading：
            <svg with='100' height='100' viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25"  fill="transparent" stroke-width="4" stroke="#0079f5" stroke-dasharray="50 157" stroke-linecap="round" ></circle>
            </svg>
        </label>
    </div>
</template>

<script>
export default {
  name: 'Circle',
  data () {
    return {
      ratio: 80,
      r: 47
    }
  },
  computed: {
    d () {
      const {ratio} = this
      return this.getD(ratio)
    }
  },
  methods: {
    getD (ratio) {
      if (ratio >= 100) {
        ratio = 99.999
      }
      const angle = Math.PI / 50 * ratio
      const r = this.r
      const x = r * Math.cos(angle)
      const y = -r * Math.sin(angle)
      const isBigAngle = Number(ratio > 50)
      return `M 47 0 A 47 47 0 ${isBigAngle} 0 ${x} ${y}`
    }
  }
}
</script>

<style scoped>
    .circle-wrap{
        margin-left: 0 !important;
    }
    .circle svg {
        transform: rotate(-90deg);
    }
    .circle  circle {
        box-shadow: -1px 2px 0 rgba(67, 164, 125, 1);
    }
    .circle  path {
        box-shadow: 0 2px 0 rgba(33, 119, 211, 1);
    }
    /*  .loading{*/
    /*  position: absolute;*/
    /*  left: 50%;*/
    /*  top: 50%;*/
    /*  transform: translate(-50%, -50%);*/
    /*  color: #0079f5;*/
    /*}*/
    label{
        display: flex;
        align-items: center;
    }
    @keyframes loading-active{
        0%{
            stroke-dashoffset: 0;
        }
        100%{
            stroke-dashoffset: -207;
        }
    }
    .loading svg{
        transform: rotate(-150deg);
    }
    .loading circle{
        animation: loading-active 1s 0s ease-out infinite;
    }

</style>

<!--
fill：填充色
stroke：描边色
stroke-width：边框宽度

attributeName：发生动画效果的属性名。
from：单次动画的初始值。
to：单次动画的结束值。
dur：单次动画的持续时间。
repeatCount：动画的循环模式。
fill:可以让动画结束后停留 可选值 freeze：停在最后一帧
remove：回到初始帧

stroke-dasharray = '10' 表示：虚线长10，间距10-->

<!--
r：圆的半径
cy：圆点的 y 坐标
cx：圆点的 x 坐标

viewBox="x, y, width, height" // x:左上角横坐标，y:左上角纵坐标，width:宽度，height:高度

stroke-linecap：画笔结束方式，是圆形结束还是垂直结束
stroke-dasharray：需要点数字，如果只设置一个值，则仅生成一条线的虚线，从而实现画直线
stroke-dashoffset：定义虚线开始的地方，即虚线的位移。从而隐藏一部分虚线，实现显示弧线的效果。动画的原理也是利用该属性，控制隐藏的部分，实现进度条的增长
-->
