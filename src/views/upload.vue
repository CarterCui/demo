<template>
    <div @touchstart="down"
         @touchmove="move"
         @touchend="end">
      <div v-for="(item,index) in lists" :key="index">{{item.data}}</div>
      <div v-if="drage">2222222</div>
    </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      lists: [
        {data: '1111111'}
      ],
      clientHeight: null,
      scrollTop: null,
      clock: true,
      drage: false
    }
  },
  mounted () {
    this.clientHeight = document.body.clientHeight
    this.scrolltop()
  },
  methods: {
    scrolltop () {
      window.addEventListener('scroll', () => {
        if (this.clock) {
          clearTimeout(this.clock)
        }
        this.clock = setTimeout(() => {
          this.scrollTop = document.documentElement.clientHeight + document.documentElement.scrollTop
          if (this.scrollTop >= this.clientHeight) {
            this.lists.push(this.list)
            this.scrolltop()
            this.clock = false
          }
        }, 200)
      })
      this.$once('hook:beforeCreate', () => {
        window.removeEventListener('scroll')
      })
    },
    down () {},
    move () {},
    end () {}
  }
}
</script>

<style scoped>

</style>
