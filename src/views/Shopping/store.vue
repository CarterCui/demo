<template>
    <div>
        <div style="width: 100%;height: 50px;background-color: #2d8cf0;display: flex;justify-content: space-between;align-items: center">
            <div>1111111</div>
            <div style="display: flex;justify-content: right;align-items: center;">
                <div @click="outLogin" style="margin: 0 20px;cursor: pointer">退出</div>
                <div style="margin: 0 20px">{{name}}</div>
                <div @click="toCar" style="margin: 0 20px;cursor: pointer">购物车{{count}}</div>
            </div>
        </div>
        <div style="width: 80%;margin: 10px auto">
            <div style="display: inline-block;width: 200px;height: 300px" v-for="item in changeList" :key="item.id">
                <div style="width: 200px;height: 300px;background-color: #2d8cf0;display: flex;justify-content: left;flex-direction: column;
                border: 1px solid black;box-sizing: border-box">
                    <div>名字{{item.name}}</div>
                    <div>价格{{item.price}}</div>
                    <div>编号{{item.id}}</div>
                    <div @click="addCar(item.id)">加入购物车</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'store',
  data () {
    return {
      name: '',
      carList: []
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    list () {
      return this.$store.state.a.list
    },
    count () {
      let count = 0
      this.$store.state.a.carList.forEach(item => {
        count += item.count
      })
      return count
    },
    changeList () {
      let list = [...this.list]
      console.log(list)
      // 品牌过滤
      if (this.filterBrand !== '') {
        list = list.filter(item => item.brand === this.filterBrand)
      }
      // 颜色过滤
      if (this.filterColor !== '') {
        list = list.filter(item => item.color === this.filterColor)
      }
      // 排序
      if (this.order !== '') {
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales)
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost)
        } else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost)
        }
      }
      return list
    }
  },
  mounted () {
    this.name = localStorage.getItem('userid')
    this.$store.dispatch('getProductList')
  },
  methods: {
    outLogin () {
      localStorage.removeItem('userid')
      this.$router.push('/login')
    },
    toCar () {
      this.$router.push('/car')
    },
    addCar (id) {
      this.$store.commit('addCar', id)
    }
  }

}
</script>

<style scoped>

</style>
