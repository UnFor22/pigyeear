<template>
  <div class="wrap">
    <img src="../../assets/zhezhao.jpg" alt="">
    <button class="tobutton" open-type='contact' @click="tokefu" :session-from="title + ':' + url">  
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
    methods: {
      tokefu(){
        console.log(this.url)
        wx.setClipboardData({
          data: this.url,
          success (res) {  
              wx.hideToast() // 隐藏默认的Toast提示框
              // wx.showModal({
              //   title: '提示',
              //   content: '您要办理的信用卡链接已复制，请到手机浏览器地址栏粘贴打开即可申请办卡。',
              //   showCancel: false, //不显示取消按钮     
              //   confirmText: '知道了'   
              // })            
            }
        })
      }
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
