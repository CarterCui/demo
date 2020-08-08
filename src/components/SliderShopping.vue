<template>
    <div style="width: 300px;height: 100px;position: relative">
        <div class="shopping-slidder"
             :class="show ? 'shopping-slid-left':'shopping-slid-none'"
             @touchstart="down"
             @touchmove="move"
             @touchend="end"
        >
            <div :class="{'shopping-slider-left' : show}"></div>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      show: false,
      drage: false,
      moveX: NaN
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
        if (this.moveX > 0) {
          this.show = false
        } else if (this.moveX < 0) {
          this.show = true
        }
      }
    }
  }
}
</script>

<style scoped>
    .shopping-slid-left{
        margin-left: 0px !important;
    }
    .shopping-slider-left{
        right: 0 !important;
    }

    .shopping-slidder{
        position: absolute;
        width: 300px;
        height: 100px;
        border-radius: 7px;
        background-color: #006eb3;
        overflow-x: auto;
        cursor: pointer;
        transition: .3s ease-in-out;
    }
    .shopping-slidder::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

    .shopping-slidder div:nth-of-type(1){
        position: absolute;
        right: -100px;
        top: 0;
        width: 100px;
        height: 100%;
        border-radius: 7px;
        background-color: #dc7a7a;
        transition: .1s;
    }

</style>
