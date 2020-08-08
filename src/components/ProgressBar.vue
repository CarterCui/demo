<template>
    <div class="slider">
        <input id="snrPollInterval" type="range" min="0" max="100" v-model="size" >
        {{size}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      size: 0
    }
  },
  methods: {
    SliderSize () {
    }
  },
  created () {
    this.SliderSize()
  }
}
</script>

<style scoped>
    #snrPollInterval[type="range"] {
        -webkit-appearance: none; /*去除默认样式*/
        margin-top: 42px;
        background-color: #ebeff4;
        border-radius: 2px;
        width: 80% !important;
        margin-left: 10%;
        height:4px;
        padding: 0;
        border: none;

    }
    #snrPollInterval[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;/*去除默认样式*/
        cursor: default;
        top: 0;
        height: 10px;
        width: 10px;
        transform: translateY(0px);
        background: #fff;
        border-radius: 50%;
        border: 2px solid #006eb3;

    }

</style>
