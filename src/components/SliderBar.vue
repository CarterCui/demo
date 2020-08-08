<template>
    <div class="add">
        <ul class="header-bar" id="header-bar">
            <li v-for="(item,index) in headerTitle" :key="index" style="list-style: none;margin-left: 10px"
                :class="{'active':indexTap == index}" @click="loading(index)" class="nav" @touchdown="start(index)" @touchend="end(index)">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      touch: false,
      indexTap: 0,
      headerTitle: [
        {id: 0, title: 111111111111111},
        {id: 1, title: 111111111},
        {id: 2, title: 111111111111},
        {id: 3, title: 1111111111},
        {id: 4, title: 1111111111111111},
        {id: 5, title: 1111111111},
        {id: 6, title: 11111111},
        {id: 7, title: 111111111111}
      ]
    }
  },
  methods: {
    // 移动端
    start () {
      this.touch = true
    },
    end (index) {
      if (this.touch) {
        this.touch = false
      }
      this.indexTap = index
      // 可视宽
      var windowWidth = document.documentElement.clientWidth
      console.log(windowWidth)
      var nav = document.querySelectorAll('.nav')
      var e = nav[index]
      // 对象宽
      var itemWidth = e.offsetWidth
      console.log(itemWidth)
      var moveX = e.offsetLeft
      console.log(moveX)
      // 目标居中的距离 = (当前元素距离左边的相对距离 / 2) + (视口距离 / 2)
      var left = moveX - (windowWidth / 2) + (itemWidth / 2)
      console.log(left)
      var bar = document.getElementById('header-bar')
      bar.scrollLeft = left

      // 页可见区域宽： document.body.clientWidth;
      // 网页可见区域高： document.body.clientHeight;
      // 网页可见区域宽： document.body.offsetWidth (包括边线的宽);
      // 网页可见区域高： document.body.offsetHeight (包括边线的宽);
      // 网页正文全文宽： document.body.scrollWidth;
      // 网页正文全文高： document.body.scrollHeight;
      // 网页被卷去的高： document.body.scrollTop;
      // 网页被卷去的左： document.body.scrollLeft;
      // 网页正文部分上： window.screenTop;
      // 网页正文部分左： window.screenLeft;
      // 屏幕分辨率的高： window.screen.height;
      // 屏幕分辨率的宽： window.screen.width;
      // 屏幕可用工作区高度： window.screen.availHeight;
    }
  }
}
</script>

<style scoped>
    .add ul::-webkit-scrollbar {
        display: none;
    }

    .active {
        color: #cd1845;
        font-weight: bolder;
    }

    .add ul {
        display: flex;
        align-items: center;
        overflow: auto;
        padding-left: 0;
        list-style: none;
        animation:mymove 5s;
    }

    .add li {
        text-align: center;
        font-size: 16px;
        /*-ms-flex-negative: 0;*/
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
    }

    /*@keyframes mymove {*/
    /*}*/
</style>
