<template>
    <div class="cart">
        <div class="cart-header">
            <div class="cart-header-title">购物清单</div>
            <div class="cart-header-main">
                <div class="cart-info">商品信息</div>
                <div class="cart-price">单价</div>
                <div class="cart-count">数量</div>
                <div class="cart-cost">小计</div>
                <div class="cart-delete">删除</div>
            </div>
        </div>
        <div class="cart-content">
            <div class="cart-content-main" v-for="(item, index) in carList" :key="index">
                <div class="cart-info">
                    <span>{{list[item.id].name}}</span>
                </div>
                <div class="cart-price">
                    ￥ {{item.cost}}
                </div>
                <div class="cart-count">
                    <span class="cart-control-minus"
                          @click="deleCount(index, -1)">-</span>
                    {{item.count}}
                    <span class="cart-control-add"
                          @click="addCount(index, 1)">+</span>
                </div>
                <div class="cart-cost">
                    ￥ {{list[item.id].cost * item.count}}
                </div>
                <div class="cart-delete">
                    <span class="cart-control-delete"
                          @click="handleDelete(index)">删除</span>
                </div>
            </div>
            <div class="cart-empty" v-if="!carList.length">购物车为空</div>
        </div>
        <div class="cart-footer" v-show="carList.length">
            <div class="cart-footer-desc">
                共计 <span>{{count}}</span>
            </div>
            <div class="cart-footer-desc">
                应付总额 <span>{{costAll}}</span>
            </div>
            <div class="cart-footer-desc">
                <div class="cart-control-order"
                     @click="handleOrder">现在结算</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
    }
  },
  computed: {
    carList () {
      return this.$store.state.a.carList
    },
    list () {
      return this.$store.state.a.list
    },
    count () {
      let count = 0
      this.carList.forEach(item => {
        count += item.count
      })
      return count
    },
    costAll () {
      console.log(this.carList)
      let costAll = 0
      this.carList.forEach(item => {
        costAll += item.cost * item.count
      })
      return costAll
    }
  },
  methods: {
    deleCount (index) {
      this.$store.a.commit('dele,参数值')
    },
    addCount (index) {
      this.$store.a.commit('add,参数值')
    },
    handleDelete (index) {
      this.$store.a.commit('add,参数值')
    },
    handleOrder () {}
  }
}
</script>

<style scoped>
    .cart{
        margin: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
    }
    .cart-header-title{
        padding: 16px 32px;
        border-bottom: 1px solid #dddee1;
        border-radius: 10px 10px 0 0;
        background: #f8f8f9;
    }
    .cart-header-main{
        padding: 8px 32px;
        overflow: hidden;
        border-bottom: 1px solid #dddee1;
        background: #eee;
        overflow: hidden;
    }
    .cart-empty{
        text-align: center;
        padding: 32px;
    }
    .cart-header-main div{
        text-align: center;
        float: left;
        font-size: 14px;
    }
    div.cart-info{
        width: 60%;
        text-align: left;
    }
    .cart-price{
        width: 10%;
    }
    .cart-count{
        width: 10%;
    }
    .cart-cost{
        width: 10%;
    }
    .cart-delete {
        width: 10%;
    }
    .cart-content-main{
        padding: 0 32px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px dashed #e9eaec;
        overflow: hidden;
    }
    .cart-content-main div{
        float: left;
    }
    .cart-content-main img{
        width: 40px;
        height: 40px;
        position: relative;
        top: 10px;
    }
    .cart-control-minus, .cart-control-add{
        display: inline-block;
        line-height: 22px;
        text-align: center;
        background: #f8f8f9;
        border-radius: 50%;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        cursor: pointer;
    }
    .cart-control-delete{
        cursor: pointer;
        color: #2d8cf0;
    }
    .cart-control-order{
        display: inline-block;
        padding: 8px 32px;
        border-radius: 6px;
        background: #2d8cf0;
        color: #fff;
        cursor: pointer;
    }
    .cart-footer{
        padding: 32px;
        text-align: right;
    }
    .cart-footer-desc{
        display: inline-block;
        padding: 0 16px;
    }
    .cart-footer-desc span{
        color: #f2352e;
        font-size: 20px;
    }
</style>
