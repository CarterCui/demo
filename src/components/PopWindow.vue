<template>
    <div class="dialogup">
        <div :class="{'showdialog':dialogs}" @click="PopWindow">button</div>
        <div class="up-window" :class="{'showdialog':dialogs}">
            <div class="up-close" @click="dialogs = false">X</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialogs: false
    }
  },
  methods: {
    PopWindow () {
      this.dialogs = true
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0.3)'
    }
  }
}
</script>

<style scoped>
    .dialogup {
        width: 100%;
        margin-bottom: 100px;
    }
    .up-window {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        display: none;
    }
    .up-close {
        position: absolute;
        right: 0;
        top: 0;
    }
    .showdialog{
        display: block;
    }
</style>
