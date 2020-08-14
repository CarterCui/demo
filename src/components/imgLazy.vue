<template>
  <div class="container">
      <img v-for="(item,index) in imgSrc" :key="index" class="img" ref="img" src="../assets/logo.png" :data-src="item.src" alt="">
  </div>
</template>

<script>
export default {
  name: 'imgLazy',
  data () {
    return {
      imgSrc: [
        {src: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&fm=26&gp=0.jpg'},
        {src: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&fm=26&gp=0.jpg'},
        {src: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&fm=26&gp=0.jpg'},
        {src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&fm=26&gp=0.jpg'},
        {src: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&fm=26&gp=0.jpg'},
        {src: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&fm=26&gp=0.jpg'},
        {src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&fm=26&gp=0.jpg'},
        {src: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&fm=26&gp=0.jpg'},
        {src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004055534,3969071219&fm=26&gp=0.jpg'}
      ],
      clock: null,
      heigth: 0
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight
    this.start()
    window.addEventListener('scroll', () => {
      if (this.clock) {
        clearTimeout(this.clock)
      }
      this.clock = setTimeout(() => {
        this.height = document.documentElement.clientHeight + document.documentElement.scrollTop
        console.log(this.height)
        this.start()
      }, 200)
    })
  },
  methods: {
    start () {
      document.querySelectorAll('img').forEach(el => {
        if (el.src !== el.attributes['data-src'].nodeValue) {
          if (el.offsetTop < this.height) {
            console.log(el.offsetTop)
            el.src = el.attributes['data-src'].nodeValue
            // const src = el.src
            // img.src = el.attributes['data-src'].nodeValue
            // img.onload = (e) => {
            //   el.src = el.attributes['data-src'].nodeValue
            // }
            // img.onerror = (e) => {
            //   el.attributes['data-src'].nodeValue = src
          //   }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }
  .img{
    width: 60%;
    height: 100px;
    /*display: inline-block;*/
  }
</style>
