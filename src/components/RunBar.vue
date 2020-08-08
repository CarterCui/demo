<template>
    <div class="guangbo">
        <div class="radio-station">
            <div class="container">
                <div class="ul">
                    <div class="li">小刘同学加入了凹凸实验室</div>
                    <div class="li">小邓同学加入了凹凸实验室</div>
                    <div class="li">小李同学加入了凹凸实验室</div>
                    <div class="li">小王同学加入了凹凸实验室</div>
                    <div class="li">小刘同学加入了凹凸实验室</div>
                </div>
            </div>

        </div>
        <div class="paomadeng">
            <div class="paomadeng-ul">
                <div class="paomadeng-li" style="left: 0">小刘同学加入了凹凸实验室</div>
                <div class="paomadeng-li" style="left: 25%">小邓同学加入了凹凸实验室</div>
                <div class="paomadeng-li" style="left: 50%">小李同学加入了凹凸实验室</div>
                <div class="paomadeng-li" style="left: 75%">小王同学加入了凹凸实验室</div>
                <div class="paomadeng-li" style="left: 100%">小刘同学加入了凹凸实验室</div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  data () {
    return {
      time: 40
    }
  }
}
</script>

<style scoped>
    .radio-station {
        width: 100%;
    }

    .guangbo {
        width: 100%;
        border-radius: 25px;
    }

    @keyframes scrollY{
        0% {
            transform: translate(0, 0)
        }
        100% {
            transform: translate(0, -160px)
        }
    }

    .container {
        width: 100%;
        height: 40px;
        background: #0066ff;
        border-radius: 2em;
        overflow: hidden;
    }

    .ul {
        width: 100%;
        height: 160px;
        animation-name: scrollY;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .li {
        width: 100%;
        line-height: 40px;
        color: #fff;
        text-align: center;
    }
    .paomadeng{
        width: 100%;
        height: 40px;
        background: #0066ff;
        border-radius: 2em;
        overflow: hidden;
    }

    @keyframes scrollX{
        0% {
            transform: translate(0, 0)
        }
        100% {
            transform: translate(-100%, 0)
        }
        0% {
            transform: translate(0, 0)
        }
    }

    .paomadeng-ul{
        width: 500%;
        height: 100%;
        position: relative;
        animation-name: scrollX;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

    }
    .paomadeng-li{
        position: absolute;
        top: 0;
        width: 20%;
        line-height: 40px;
        color: #fff;
        text-align: center;
    }

</style>
