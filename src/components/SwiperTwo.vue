<template>
    <div class="carousel">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(image,index) in img' :key='image.color' v-show='index===mark'>
                <a>
                    <div class="pic" :style="{'background-color': image.color }"></div>
                </a>
            </li>
        </transition-group>

        <div class="bullet">
            <span v-for='(item,index) in img.length' :key="index" :class="{'active':index===mark}" @click='change(index)' ></span>
        </div>
        <button class="left-bt" @click="prev" > > </button>
        <button class="left-bt" @click="next" > > </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mark: 0,
      timer: null,
      img: [
        {color: 'red'},
        {color: 'blue'},
        {color: 'green'},
        {color: 'yellow'}
      ]
    }
  },
  created () {
    this.play()
  },
  methods: {
    prev () {
      this.mark--
      if (this.mark === -1) {
        this.mark = this.img.length - 1
      }
    },
    next () {
      this.mark++
      if (this.mark === this.img.length) {
        this.mark = 0
      }
    },
    change (i) {
      this.mark = i
    },
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 3000)
    }
  }
}
</script>

<style scoped>

    .clearfix {
        content: '';
        clear: both;
        display: block;
    }

    .carousel {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    .slide {
        width: 500%;
        height: 300px;
    }

    li {
        width: 100%;
        position: absolute
    }

    .pic {
        width: 100%;
        height: 300px;
    }

    .bullet {
        width: 100%;
        position: absolute;
        bottom: 50px;
        margin: 0 auto;
        text-align: center;
        z-index: 10;
    }

    span {
        width: 20px;
        height: 5px;
        border-radius: 2px;
        background: rgba(0,0,0,.2);
        display: inline-block;
        margin-right: 10px;
    }

    .active {
        background: red;
    }

    .image-enter-active {
        transform: translateX(0);
        transition: all 1s ease;
    }

    .image-leave-active {
        transform: translateX(-100%);
        transition: all 1s ease;
    }

    .image-enter {
        transform: translateX(100%)
    }

    .image-leave {
        transform: translateX(0)
    }

    .left-bt{
        background-color: #FFFFFF;
        border: 1px solid blue
    }
</style>
