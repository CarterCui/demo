<template>
    <div style="width: 100%">
        <my-account-time></my-account-time>
        <my-big-glass></my-big-glass>
        <my-circle-circle></my-circle-circle>
        <my-drag></my-drag>
        <my-password-input></my-password-input>
        <my-pop-down></my-pop-down>
        <my-pop-window></my-pop-window>
        <my-run-bar></my-run-bar>
        <my-slider-bar></my-slider-bar>
        <my-slider-shopping></my-slider-shopping>
        <my-stepper></my-stepper>
        <my-stick-top></my-stick-top>
        <my-swiper-one></my-swiper-one>
        <my-swiper-two></my-swiper-two>
        <my-tab></my-tab>
    </div>
</template>

<script>
import AccountTime from '../components/AccountTime'
import BigGlass from '../components/BigGlass'
import CircleCircle from '../components/CircleCircle'
import Drag from '../components/Drag'
import PasswordInput from '../components/PasswordInput'
import PopDown from '../components/PopDown'
import PopWindow from '../components/PopWindow'
import RunBar from '../components/RunBar'
import SliderBar from '../components/SliderBar'
import SliderShopping from '../components/SliderShopping'
import Stepper from '../components/Stepper'
import StickTop from '../components/StickTop'
import Swiper from '../components/Swiper'
import SwiperTwo from '../components/SwiperTwo'
import Tab from '../components/Tab'
export default {
  name: 'components',
  components: {
    'my-account-time': AccountTime,
    'my-big-glass': BigGlass,
    'my-circle-circle': CircleCircle,
    'my-drag': Drag,
    'my-password-input': PasswordInput,
    'my-pop-down': PopDown,
    'my-pop-window': PopWindow,
    'my-run-bar': RunBar,
    'my-slider-bar': SliderBar,
    'my-slider-shopping': SliderShopping,
    'my-stepper': Stepper,
    'my-stick-top': StickTop,
    'my-swiper-one': Swiper,
    'my-swiper-two': SwiperTwo,
    'my-tab': Tab
  }
}
</script>

<style scoped>

</style>
