import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/sectionA'
Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    a: moduleA // store.state.a
  }
})
export default store

// 1.  this.$index.state.全局数据名称
// 2.  import { mapState } from 'vuex'
// computed:{
// ...mapState{['全局数据名称']}
// }  调用方式

// 对数据加工处理形成新数据
// this.$index.getters.名称
// import { mapGetters } from 'vuex'
// computed:{
// ...mapGetters({'名称'})
// }

// 数据计算,函数
// 1. methods:{
// handle(){
// this.$index.commit('add,参数值')
// }
// }
// 2. import { mapMutations } from 'vuex'
// methods:{
// ...mapMutations({'add'})
// }

// 异步
// 1. methods: {
// handle(){
// this.$index.dispatch('函数名')
// }
// 2. import { mapActions } from 'vuex'
// methods:{
// ...mapactions({'add'})
// }
