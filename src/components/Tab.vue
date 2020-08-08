<template>
    <div class="tab">
        <ul class="tab-lists">
            <li class="tab-list" v-for="(item,index) in 4" @click="loadimg(index)" :key="index">111</li>
        </ul>
        <div class="tab-content-lists">
            <div class="tab-content" v-for="(item,index) in TabContent" :key="index"
                 :class="{'active-div':indexTab == index}"
                 :style="{'background':item.background}"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      indexTab: 0,
      TabContent: [
        {background: 'red'},
        {background: 'blue'},
        {background: 'yellow'},
        {background: 'pink'}
      ]
    }
  },
  methods: {
    loadimg (index) {
      this.indexTab = index
    }
  }
}
</script>

<style scoped>
    .tab {
        width: 100%;
        height: 100px;
        background-color: #dc7a7a;
    }

    .tab-lists {
        width: 100%;
        list-style: none;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        box-sizing: border-box;
    }

    .tab-list {
        width: 25%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab-content-lists {
        width: 100%;
        position: relative;
    }

    .tab-content {
        width: 100%;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }

    .active-div {
        display: block;
    }
</style>
