<template>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column">
        <div>登陆页</div>
        <label for="name">用户名</label>
        <input type="text" id="name" v-model="name">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password">
        <div style="width: 200px;height: 100px;background-color: lightblue" @click="login">登陆</div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  created () {
    if (localStorage.getItem('userid')) {
      console.log(localStorage.getItem('userid'))
      this.$router.push('/store')
    }
  },
  methods: {
    login () {
      if (this.name && this.password) {
        localStorage.setItem('userid', this.name)
        this.$router.push('/store')
      } else if (this.name === '' && this.password === '') {
        alert('请填写用户信息')
      } else if (this.name === '') {
        alert('请填写用户名')
      } else if (this.password === '') {
        alert('请填写密码')
      }
    }
  }
}
</script>

<style scoped>

</style>
