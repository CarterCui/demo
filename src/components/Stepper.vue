<template>
    <div class="stepper">
        <span @click="reduce"> - </span>
        <input type="text" v-model="Number1">
        <span @click="plus"> + </span>
    </div>
</template>

<script>
export default {
  name: 'Stepper',
  data () {
    return {
      Number1: 0
    }
  },
  methods: {
    plus () {
      this.Number1++
    },
    reduce () {
      if (this.Number1 <= 0) {
        return {}
      } else {
        this.Number1--
      }
    }
  }
}
</script>

<style scoped>
    .stepper{
        margin-left: 100px;
    }
    input{
        width: 20px;
        border: 1px solid;
        text-align: center;
    }
</style>
