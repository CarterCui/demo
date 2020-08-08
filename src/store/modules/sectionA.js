import products from '../../utils/product'
const moduleA = {
  state: () => ({
    list: [],
    carList: []
  }), // data
  mutations: {
    addCar (state, id) {
      const shopping = state.carList.find(item => item.id === id)
      if (shopping) {
        shopping.count++
      } else {
        state.carList.push({
          id: id,
          cost: state.list[id].cost,
          count: 1
        })
      }
      console.log(state.carList)
    },
    setProductList (state, products) {
      state.list = products
      console.log(state.list)
    }
  }, // 修改state
  actions: {
    getProductList (context) {
      setTimeout(() => {
        context.commit('setProductList', products)
      }, 500)
    }
  },
  getters: {

  }
}
export default moduleA
