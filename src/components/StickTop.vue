<template>
        <div id="searchBar" :class="topBar == true?'isFixed':''">吸顶吸顶吸顶</div>
</template>

<script>
export default {
  name: 'StickTop',
  data () {
    return {
      topBar: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.$nextTick(() => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        // let offsetTop = document.querySelector('#searchBar').offsetTop
        if (scrollTop < 1198) {
          this.topBar = false
        } else if (scrollTop > 1198) {
          this.topBar = true
        }
      })
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>

<style scoped>
    .isFixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 998;
    }
</style>
