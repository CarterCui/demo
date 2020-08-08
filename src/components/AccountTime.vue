<template>
    <div>
        <div style="margin-top: 100px;margin-bottom:100px;padding-left: 100px;box-sizing:border-box;width: 100%">
            <div v-if="show000">
                {{time + 's'}}
            </div>
            <div v-else @click="clickTime">
                点击计时(节流)
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountTime',
  data () {
    return {
      show000: false,
      delay: false,
      time: 60
    }
  },
  methods: {
    clickTime () {
      if (this.delay === false) {
        this.delay = true
        console.log(this.delay, 11111111111111111111111)
        this.show000 = true
        console.log(this.show000, 22222222222222222222222)

        var reduceTime = setInterval(() => {
          this.time -= 1
          // console.log(this.time)
        }, 1000)

        var delayTime = setInterval(() => {
          clearInterval(delayTime)
          this.delay = false
          this.show000 = false
          this.time = 60
          clearInterval(reduceTime)
        }, 60000)
      }
    }
  }
}
</script>

<style scoped>

</style>
