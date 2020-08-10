<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div>121111</div>
            <div>131111</div>
            <div>141111</div>
            <div>151111</div>
            <div>161111</div>
            <div>171111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>111111</div>
            <div>171111</div>
            <div>161111</div>
            <div>151111</div>
            <div>141111</div>
            <div>131111</div>
            <div>121111</div>
            <div>111111</div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scrol',
  data () {
    return {
      a: null
    }
  },
  mounted () {
    this.scroll()
  },
  methods: {
    scroll () {
      this.a = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      })
    //   scroll.on('pullingUp', () => {
    //     console.log('上拉加载更多')
    //     // 发送网络请求，请求更多页的数据
    //
    //     // 等数据请求完成，并且将新的数据展示出来后
    //     setTimeout(() => {
    //       scroll.finishPullUp()
    //     }, 2000)
    //   })
    }
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 100px;
    background-color: #2d8cf0;
    overflow-y: scroll;
}
</style>
