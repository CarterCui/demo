<template>
  <div class="upload">
    <div id="upload-bt">
      <label for="upload-file" class="up-bt" :class="uptext ?'up-text':''">上传文件</label>
      <input type="file" id="upload-file" @change="getfile" ref="inputer"
             accept="image/gif,image/jpeg,image/jpg,image/png" value="">
      <img class="shoImg" :src="imgDefault">
    </div>
    <div style="display: flex;width: 100%;padding: 0 30px;box-sizing: border-box;justify-content: space-between">
      <div @click="upfile">提交</div>
      <div @click="delect">重置</div>
    </div>

  </div>
</template>

<script>
import {api1, api2} from '../api/api'
export default {
  data () {
    return {
      formData: [],
      imgSize: NaN,
      imgDefault: require('../assets/relax_littleGame_01.png'),
      uptext: false
    }
  },
  methods: {
    getfile (e) {
      let inputDOM = this.$refs.inputer
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      console.log(this.file)

      this.imgSize = Math.floor(this.file.size / 1024)
      // 计算文件的大小
      // if (this.size > 1024) {
      //   return false
      // } else {
      //   return true
      // }

      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      console.log(this.formData.get('file'))
      // 此时formData就是我们要向后台传的参数了

      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(this.file)
      reader.onload = function (e) {
        that.imgDefault = this.result
      }
      this.uptext = true
    },
    upfile () {
      api2({
        // token: 4DBA46139BB839588B876D4AE8310026C5AE575932C901EC6280CA56AF0D,
      })
        // .post("", this.formData)
        .then((res) => {
          console.log(res, '发送成功')
        }).catch((req) => {
          console.log(req, '发送失败')
        })

      api1({})
        .then((res) => {
          console.log(res, '请求成功')
        }).catch((req) => {
          console.log(req, '请求失败')
        })
    },

    delect () {
      this.imgDefault = require('../assets/relax_littleGame_01.png')
      this.uptext = false
    }
  }
}
</script>

<style scoped>
  #upload-file {
    display: none;
  }

  .up-bt {
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translate(-50%, -50%);
  }

  .up-text{
    display: none;
  }

  .shoImg {
    width: 100%;
    height: 200px;
  }

</style>
