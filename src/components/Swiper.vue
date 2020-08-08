<template>
    <div class="banner">
        <ul class="banner-wrap">
            <li class="banner-wrap-item " v-for="(item,index) in banner" :key="index"
                :class="{'banner-wrap-item-active':activeNum === index,'banner-wrap-item-next':nextNum === index,'banner-wrap-item-prev': prevNum === index}"
                @touchstart="down" @touchmove="move" @touchend="end"
            >{{item.id}}
            </li>
        </ul>
        <ul class="banner-little-wrap">
            <li class="banner-little-wrap-circle" v-for="(item,index) in 5" :key="index"
                :class="{'banner-little-wrap-circle-active' : activeNum == index}"></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      activeNum: 0,
      nextNum: 1,
      prevNum: NaN,
      banner: [
        {id: '0'},
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'}
      ],
      startX: 0,
      moveX: 0,
      drage: false
    }
  },
  methods: {
    down (e) {
      this.drage = true
      let touch
      if (e.touches) {
        touch = e.touches[0]
      } else {
        touch = e
      }
      this.startX = touch.clientX
    },
    move (e) {
      if (this.drage) {
        let touch
        if (e.touches) {
          touch = e.touches[0]
        } else {
          touch = e
        }
        this.moveX = touch.clientX - this.startX
      }
    },
    end () {
      if (this.drage) {
        this.drage = false
        if (this.moveX < -40) {
          this.prevNum = this.activeNum
          if (this.activeNum >= 0 && this.activeNum <= this.banner.length - 3) {
            this.activeNum++
            this.nextNum = this.activeNum + 1
          } else if (this.activeNum === this.banner.length - 2) {
            this.activeNum++
            this.nextNum = 0
          } else if (this.activeNum === this.banner.length - 1) {
            this.activeNum = 0
            this.nextNum = this.activeNum + 1
          }
        } else if (this.moveX > 40) {
          this.nextNum = this.activeNum
          if (this.activeNum >= 2 && this.activeNum <= this.banner.length - 1) {
            this.activeNum--
            this.prevNum = this.activeNum - 1
          } else if (this.activeNum === 1) {
            this.activeNum--
            this.prevNum = this.banner.length - 1
          } else if (this.activeNum === 0) {
            this.activeNum = this.banner.length - 1
            this.prevNum = this.banner.length - 2
          }
        }
      }
    }
  },
  created () {
    this.prevNum = Number(this.banner.length) - 1
  }
}
</script>

<style scoped>
    .banner {
        width: 100%;
        height: 170px;
        padding: 10px;
        box-sizing: border-box;
    }

    .banner-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .banner-wrap-item {
        list-style: none;
        position: absolute;
        z-index: 10;
        width: 268px;
        height: 120px;
        top: 10px;
        left: 43px;
        background-color: lightcoral;
        transition: .3s ease-out;
    }

    .banner-wrap-item-active {
        z-index: 203;
        width: 335px;
        height: 150px;
        top: 0;
        left: 10px;
    }

    .banner-wrap-item-prev {
        z-index: 202;
        top: 10px;
        left: 0;
    }

    .banner-wrap-item-next {
        z-index: 201;
        top: 10px;
        left: 87px;
    }

    .banner-little-wrap{
        width: 100%;
        height: 5px;
        margin-top: -20px;
        display: flex;
        justify-content: center;
        list-style: none;
        position: relative;
        z-index: 205;
    }

    .banner-little-wrap-circle{
        width: 5px;
        height: 5px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 2.5px;
        margin: 0 5px 0 0;
        transition: .3s ease-out;
    }

    .banner-little-wrap-circle-active{
        width: 15px;
    }
</style>
