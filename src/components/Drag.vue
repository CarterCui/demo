<template>                   <!--移动端-->
    <div id="webId">

        <div class="xuanfu" id="moveDiv"
             @mousedown="down" @touchstart="down"
             @mousemove="move" @touchmove="move"
             @mouseup="end" @touchend="end"
        >
            <div class="yuanqiu"></div>
        </div>
    </div>
</template>

<script>
// clientY 指的是距离可视页面左上角的距离
// pageY 指的是距离可视页面左上角的距离(不受页面滚动影响)
// screenY 指的是距离屏幕左上角的距离
// layerY 指的是找到它或它父级元素中最近具有定位的左上角距离
// offsetY 指的是距离它自己左上角的距离
export default {
  data () {
    return {
      drage: false,
      position: { x: 0, y: 0 },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: ''
    }
  },

  methods: {
    // 实现移动端拖拽
    down (e) {
      var moveDiv = document.getElementById('moveDiv')
      this.drage = true
      let touch
      if (e.touches) {
        touch = e.touches[0]
      } else {
        touch = e
      }
      this.position.x = touch.clientX // 鼠标位置
      this.position.y = touch.clientY
      this.dx = moveDiv.offsetLeft // 边到边的距离
      this.dy = moveDiv.offsetTop
    },
    move (e) {
      var moveDiv = document.getElementById('moveDiv')
      if (this.drage) {
        let touch
        if (e.touches) {
          touch = e.touches[0]
        } else {
          touch = e
        }
        // 鼠标移动距离
        this.nx = touch.clientX - this.position.x
        this.ny = touch.clientY - this.position.y
        this.xPum = this.dx + this.nx
        this.yPum = this.dy + this.ny
        // 添加限制：只允许在屏幕内拖动
        // 屏幕宽度减去悬浮框宽,页面超出可视高度
        const maxWidth = document.documentElement.clientWidth - 100
        const maxHeight = document.documentElement.clientHeight - 100
        // 屏幕x限制
        if (this.xPum < 0) {
          this.xPum = 0
        } else if (this.xPum > maxWidth) {
          this.xPum = maxWidth
        }
        // 屏幕y限制
        if (this.yPum < 0) {
          this.yPum = 0
        } else if (this.yPum > maxHeight) {
          this.yPum = maxHeight
        }
        moveDiv.style.left = this.xPum + 'px'
        moveDiv.style.top = this.yPum + 'px'
        // 阻止页面的滑动默认事件
        document.addEventListener('touchmove', function () {
          // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
          e.preventDefault() // jq 阻止冒泡事件
          // event.stopPropagation();
          // 如果没有引入jq 就用 stopPropagation()
        }, false)
      }
    },
    end () {
      this.drage = false
    }// 鼠标释放时候的函数
  }
}
</script>

<style scoped>
    *{ touch-action: none}
    #webId { position: relative; }
    .xuanfu {
        height: 100px;
        width: 100px;
        z-index: 999;
        position: fixed;
        top: 0;
        right: 0;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .yuanqiu {
        height: 60%;
        width: 60%;
        border: 1px solid rgba(140, 136, 136, 0.5);
        color: #000000;
        font-size: 14px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        background-color: #ffffff;
    }
</style>
