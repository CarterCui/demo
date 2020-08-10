<template>
    <div>
        <button @click="change">改变父元素属性</button>
        子组件:{{stus}}
    </div>
</template>

<script>
import Bus from '../../utils/Bus'
export default {
  props: ['stus'],
  data () {
    return {}
  },
  methods: {
    change () {
      // 该机制其实就是保存父组件的函数
      Bus.$emit('changeStus', [1, 2, 3])
      // this.$emit('changeStus', [1, 2, 3])

      // 2 this.$emit('updata:title','hello')
    }
  }
}
</script>

<style scoped>

</style>
