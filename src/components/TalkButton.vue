<template>
    <div class="button"  @touchstart="down" @touchend="end">
      <div class="circle" :class="onclick ?'circle-active':''"></div>
      <div class="bg-color" :class="onclick ?'bg-color-active':''"></div>
    </div>
</template>

<script>
export default {
  name: 'Talk',
  data () {
    return {
      onclick: false,
      loop: null
    }
  },
  methods: {
    down () {
      clearTimeout(this.loop)
      this.loop = setTimeout(() => {
        console.log('长按了')
        this.onclick = true
      }, 1000)
    },
    end () {
      if (this.onclick) {
        this.onclick = false
        clearTimeout(this.loop)
      }
    }
  }
}
</script>

<style scoped>
  .button{
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 50px auto;
    background-color: #999999;
  }
  .bg-color{
    position: absolute;
    z-index: -2;
    left: 0;
    top: 0;
    transform: translate(-25%,-25%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: radial-gradient(dodgerblue,transparent);
  }
  .bg-color-active{
    animation: talk 2s infinite ease-in-out;
  }
  .circle{
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    /*transform: translate(-50%,-50%);*/
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #ebeff4;
    border: 5px solid lightblue;
  }
  .circle-active{
    animation: circle 2s infinite ease-in-out;
  }
  @keyframes talk{
    0%{
      background-image: radial-gradient(lightblue,rgba(0,0,0,0));
      transform: translate(-25%,-25%) scale(1);
    }
    100%{
      position: absolute;
      z-index: -2;
      left: 0;
      top: 0;
      background-image: radial-gradient(rgba(200,200,250,1),rgba(0,0,0,0));
      transform: translate(-25%,-25%) scale(1.2);
    }
  }
  @keyframes circle {
    0%{
      transform: scale(1);
    }
    90%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(0);
    }
  }
</style>
