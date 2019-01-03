<template>
  <div class="wrap">
    <img src="../../assets/zhezhao.png" alt="">
    <button class="tobutton" open-type='contact' @contact="handleContact" @click="tokefu" :session-from="title + ':' + url">  
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        screenHeight:'',
        title: '',
        url:''
      }
    },
    onLoad(){
      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];   //当前页面
      let prevPage = pages[pages.length - 2];  //上一个页面
      this.url = prevPage.data.urlStr
      this.title = this.$root.$mp.query.title
      this.Url = this.title + ':' + this.url 
    },
    onShareAppMessage: function (res) {
      return {
        title: `论成功率，我没服过谁！`,
        imageUrl: 'http://download.pcuion.com/app2_0/songxianj.png',
        path: '/pages/index/index'
      }
    },
    methods: {
      tokefu(){
        // console.log(this.url)
        wx.setClipboardData({
          data: this.url,
          success (res) {  
              wx.hideToast() // 隐藏默认的Toast提示框
                    
            }
        })
      },
      // handleContact(e){
      //   console.log(e)
      // }
    }
  }
</script>

<style lang='scss' scoped>
.wrap{
  position: relative;
  width: 100%;
  height: 100%;
  img{
    position: fixed;
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;/*垂直居中*/
    justify-content: center;/*水平居中*/
  }
  .tobutton {
    width: 100%;
    height: 1800rpx;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }
}
img{
  position: fixed;
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
}
</style>
