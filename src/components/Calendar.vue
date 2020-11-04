<template>
  <div class="calendar">
    <div class="calendar-header">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        {{currentYear}}年{{currentMonth}}月
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
    <div class="calendar-date"
         @touchstart.stop="allTouchStart"
         @touchend.stop="allTouchEnd">
      <div class="calendar-date-weeks">
        <div class="calendar-date-week" v-for="(item,index) in weekList" :key="index">
          {{item.day}}
        </div>
      </div>
      <div class="calendar-date-days"
           :class="{'fadeOut':fadeOut,'fadeIn':fadeIn,'fadeOutR':fadeOutR,'fadeInR':fadeInR}">
        <div class="calendar-date-day" v-for="(date,index) in daysList" :key="index">
          <div class="calendar-date-top"></div>
          <div class="calendar-date-item">{{date.day}}</div>
          <div class="calendar-date-subscript"></div>
        </div>
      </div>
    </div>
    <div class="calendar-label" v-if="false">
      <div class="calendar-label-item" v-for="(labelItem,index) in labelList" :key="index">
        <div class="calendar-label-wrap">
          <div class="label-circle" :style="{backgroundColor: labelItem.color}"></div>
          <p class="label-text" :style="{color: labelItem.color}">{{labelItem.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      weekList: [
        {day: '一'},
        {day: '二'},
        {day: '三'},
        {day: '四'},
        {day: '五'},
        {day: '六'},
        {day: '日'}
      ],
      daysList: [],
      labelList: [
        {color: '#71b602', content: '111111111111111111111111111'},
        {color: '#f59b22', content: '22222222222222222222222'},
        {color: '#333333', content: '32333333333333333'},
        {color: '#d9001b', content: '44444444444444'},
        {color: '#f70ea7', content: '5555555555'},
        {color: '#82539d', content: '66666'}
      ],
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      currentWeek: '',
      prevMonth: '',
      nextMonth: '',
      // 左右滑动的鼠标位置
      positionSX: '',
      positionEX: '',
      fadeOut: false,
      fadeIn: false,
      fadeOutR: false,
      fadeInR: false
    }
  },
  mounted () {
    this.initDate()
  },
  watch: {
    'currentMonth': function (nv) {
      this.prevMonth = nv === 1 ? 12 : nv - 1
      this.nextMonth = nv === 12 ? 1 : nv + 1
    }
  },
  methods: {
    initDate (cur) {
      let date
      if (cur) {
        date = new Date(cur)
      } else {
        const now = new Date()
        const t = this.formatDate(now.getFullYear(), now.getMonth() + 1, 1)
        const d = new Date(t)
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      }
      this.currentDay = date.getDate() // 天
      this.currentWeek = date.getDay() // 星期
      this.currentMonth = date.getMonth() + 1 // 月
      this.currentYear = date.getFullYear() // 年
      this.prevMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1 // 上月
      this.nextMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1 // 下月
      const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      )
      this.daysList.length = 0
      // 上个月
      for (let i = this.currentWeek; i - 1 > 0; i--) {
        const d = new Date(str)
        d.setDate(d.getDate() - i)
        const dayobject = {} // 用一个对象包装Date对象 以便为以后预定功能添加属性
        dayobject.day = ''
        dayobject.status = ''
        this.daysList.push(dayobject) // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 当前月
      let mounthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((this.currentYear % 4 === 0 && this.currentYear % 100 !== 0) || (this.currentYear % 400 === 0 && this.currentYear % 100 === 0)) {
        mounthDays[1] = 28
      }
      for (let i = 1; i <= mounthDays[this.currentMonth]; i++) {
        // const d = new Date(str)
        // d.setDate(d.getDate() + i)
        const dayobject = {}
        dayobject.day = i
        dayobject.status = ''
        this.daysList.push(dayobject)
      }
    },
    // 向下滑监听坐标
    allTouchStart (e) {
      // 开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX
      // 开始y轴坐标
    },
    allTouchEnd (e) {
      // 结束x轴坐标
      this.positionEX = e.changedTouches[0].clientX
      // 结束y轴坐标
      const distanceX = this.positionSX - this.positionEX
      // 判断滑动的方向
      // 判断滑动 的方向
      if (distanceX > 30) {
        this.rightSliding()
      }
      if (distanceX < -30) {
        this.leftSliding()
      }
    },
    rightSliding () {
      this.currentMonth = this.currentMonth + 1
      if (this.currentMonth > 12) {
        this.currentYear = this.currentYear + 1
        this.currentMonth = 1
      }
      this.pick(this.currentYear, this.currentMonth)
      this.fadeOut = true
      this.fadeIn = false
      this.fadeInR = false
      this.fadeOutR = false
      setTimeout(() => {
        this.fadeIn = true
        this.fadeOut = false
        this.fadeOutR = false
        this.fadeInR = false
        this.$forceUpdate()
      }, 100)
    },
    leftSliding () {
      this.currentMonth = this.currentMonth - 1
      if (this.currentMonth < 1) {
        this.currentYear = this.currentYear - 1
        this.currentMonth = 12
      }
      this.pick(this.currentYear, this.currentMonth)
      this.fadeOutR = true
      this.fadeInR = false
      this.fadeOut = false
      this.fadeIn = false
      setTimeout(() => {
        this.fadeInR = true
        this.fadeOutR = false
        this.fadeOut = false
        this.fadeIn = false
        this.$forceUpdate()
      }, 100)
    },
    pick (year, month) {
      const d = new Date(this.formatDate(year, month, 1))
      this.initDate(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    // 补零处理
    formatDate (year, month, day) {
      let y = year
      let m = month
      if (m < 10) m = '0' + m
      let d = day
      if (d < 10) d = '0' + d
      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style scoped>
  .calendar {
    width: 100%;
    height: 300px;
  }
  .calendar-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #f6f6f8;
    border-bottom: 2px solid #f6f6f8;
    box-sizing: border-box;
  }
  .calendar-date{
    width: 100%;
  }
  .calendar-date-weeks{
    width: 100%;
    padding: 0 1%;
    box-sizing: border-box;
    display: flex;
  }
  .calendar-date-week{
    width: 14%;
    text-align: center;
  }
  .calendar-date-days{
    width: 100%;
    padding: 0 1%;
    box-sizing: border-box;
  }
  .calendar-date-day{
    /*display: inline-block;*/
    /*font-size: 0;*/
    width: 14%;
    text-align: center;
    float: left;
  }
  .calendar-date-top{
    width: 100%;
    height: 10px;
  }
  .calendar-date-item{
    width: 50px;
    margin: auto;
    height: 50px;
    font-size: 12px;
    line-height: 50px;
    border-radius: 50%;
    background-color: #17C4FF;
  }
  .calendar-date-subscript{
    width: 100%;
    height: 20px;
  }
  .calendar-label{
    width: 100%;
  }
  .calendar-label-item{
    display: inline-block;
    margin-right: 20px;
    height: 50px;
  }
  .calendar-label-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .label-circle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
  }
  .label-text{
    display: inline-block;
    line-height: 50px;
  }

   .fadeOut {
    animation-name: fadeOut;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
  }

   .fadeOutR {
    animation-name: fadeOutR;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
  }

   .fadeIn {
    animation-name: fadeIn;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
  }

   .fadeInR {
    animation-name: fadeInR;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
  }

  @keyframes fadeOut {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      transform: translateX(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeOutR {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(50%);
      opacity: 0;
    }
  }

  @keyframes fadeInR {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
