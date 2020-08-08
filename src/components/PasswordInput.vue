<template>
    <div class="passwordInput">
        <div class="password-input-wrap">
            <ul class="password-input-wrap-content" @click="up">
                <li class="password-input-wrap-item" v-for="(item,index) in passwordlength" :key="index">
                    <i :class="{'circle-passwrod': password.length - 1 >= index}"></i>
                    <div :class="{'flicker-line' : password.length == index && pop == true }"></div>
                </li>
            </ul>
        </div>
        <div class="input-wrap" :class="{'input-wrap-active' : pop}">
            <div class="input-wrap-tbody">
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="1" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="2" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="3" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="4" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="5" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="6" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="7" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="8" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="9" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item" @click="popdown">
                    <div class="input-wrap-item-num">
                        <i>1</i>
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num">
                        <input class="input-wrap-item-butt" type="button" value="0" @click="inputToStr">
                    </div>
                </div>
                <div class="input-wrap-item">
                    <div class="input-wrap-item-num" @click="deleteStr">
                        <i>X</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showBorder: false,
      showCursor: false,
      pop: false,
      password: '1',
      passwordlength: 6
    }
  },
  methods: {
    up () {
      this.pop = true
    },
    popdown () {
      this.pop = false
    },
    inputToStr (e) {
      if (this.password.length > this.passwordlength - 1) {
        return
      }
      let val = e.target.value
      this.password = this.password.concat(val.toString())
      console.log(this.password)
    },
    deleteStr () {
      if (this.password.length === 0) {
        return
      }
      this.password = this.password.slice(0, this.password.length - 1)
    }
  }
}
</script>

<style scoped>
    .passwordInput {
        width: 100%;
        height: 70px;
        background-color: lightblue;
        padding: 10px 0;
        box-sizing: border-box;
    }

    .password-input-wrap {
        width: 100%;
        height: 100%;
    }

    .password-input-wrap-content {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
    }

    .password-input-wrap-item {
        list-style: none;
        flex: 1;
        height: 50px;
        background-color: #FFFFFF;
        position: relative;
    }

    .circle-passwrod {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .flicker-line {
        position: absolute;
        width: 1px;
        height: 15px;
        background-color: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: 1s flicker infinite;
    }

    @keyframes flicker {
        0% {
            opacity: 0
        }
        50% {
            opacity: 1
        }
        100% {
            opacity: 0
        }
    }

    .input-wrap {
        width: 100%;
        height: 255px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #CCCCCC;
        position: fixed;
        left: 0;
        z-index: 3000;
        bottom: -255px;
        transition: .3s;
    }

    .input-wrap-active {
        bottom: 0;
    }

    .input-wrap-tbody {
        width: 100%;
        height: 100%;
        padding-top: 6px;
        padding-left: 6px;
        font-size: 0;
    }

    .input-wrap-item {
        display: inline-block;
        width: 117px;
        height: 56px;
        margin-right: 6px;
        margin-bottom: 6px;
        box-sizing: border-box;
        background-color: #FFFFFF;
    }

    .input-wrap-item-num {
        width: 100%;
        height: 100%;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .input-wrap-item-butt {
        width: 100%;
        height: 100%;
        border: none;
        background-color: #FFFFFF;
        transition: .3s;
    }

    .input-wrap-item-butt:active {
        background-color: lightblue;
    }
</style>
