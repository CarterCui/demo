<template>
    <div>
        {{stus}}
        <hr>
        <son :stus="stus"></son>
<!--        <son @changeStus="getFromSon"></son>-->
<!--       <child :title.sync="title"></child>-->
<!--        通过sync传值-->
    </div>
</template>

<script>
import Bus from '../../utils/Bus'
import Son from './Son'
export default {
  name: 'app',
  components: {
    'son': Son
  },
  data () {
    return {
      stus: [
        {name: '张三'},
        {name: '李四'}]
    }
  },
  methods: {
    // getFromSon (data) {
    //   this.stus = data
    // }
  },
  created () {
    // 父监听
    Bus.$on('changeStus', (data) => {
      console.log(this)
      this.stus = data
    })
  },
  beforeDestroy () {
    Bus.$off('changeStus')
  }
}
</script>

<style scoped>

</style>
