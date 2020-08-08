<template>
    <div class="drop-down-menu-wrap">
        <div class="drop-down-menu-bt-lists" >
            <div class="drop-down-menu-bt" @click="listUp" :class="{'drop-down-menu-bt-active': show}">
                <span>商品</span>
                <div style="transform:rotate(-90deg);display: inline-block" :class="{'drop-down-menu-bt-change': show}">
                    <span> > </span>
                </div>
            </div>
            <div class="drop-down-menu-bt" @click="listUp" :class="{'drop-down-menu-bt-active': show}">

            </div>
        </div>
        <div class="drop-down-menu-lists" :class="{'drop-down-menu-lists-active' : show}">
            <ul  style="width: 100%;height: 100%">
                <li class="drop-down-menu-list" v-for="(item,index) in AllShopping" :key="index" @click="check(index)">
                    <p class="drop-down-menu-list-text" :class="{'drop-down-menu-list-text-change' : shopping == index}">{{item.text}}</p>
                    <div style="display: none" :class="{'drop-down-menu-list-check' : shopping == index}">/</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      shopping: 0,
      AllShopping: [
        {text: '全部商品'},
        {text: '新款商品'},
        {text: '活动商品'}
      ]
    }
  },
  methods: {
    listUp () {
      this.show = !this.show
    },
    check (index) {
      this.shopping = index
      this.show = false
    }
  }
}
</script>

<style scoped>
    .drop-down-menu-wrap {
        width: 100%;
        background-color: rgb(247, 248, 250);
        padding-bottom: 200px;
        box-sizing: border-box;
    }

    .drop-down-menu-bt-lists {
        display: flex;
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
        box-sizing: border-box;
        text-align: center;
        line-height: 50px;
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08)
    }

    .drop-down-menu-bt{
        width: 50%;
        height: 100%;
    }

    .drop-down-menu-bt-active{
        color: #006eb3;
    }

    .drop-down-menu-bt-change{
        transform: rotate(90deg) !important;
    }

    .drop-down-menu-lists {
        height: 200px;
        width: 100%;
        display: none;
        transition-duration: 0.2s;
        background-color: #FFFFFF;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .drop-down-menu-lists-active{
        display: block;
    }

    .drop-down-menu-list{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .drop-down-menu-list-text{
        width: 50%;
        text-align: center;
        line-height: 50px;
    }

    .drop-down-menu-list-text-change{
        color: #006eb3;
    }

    .drop-down-menu-list-check{
        width: 50%;
        text-align: right;
        color: #006eb3;
        line-height: 50px;
        display: block !important;
    }
</style>
