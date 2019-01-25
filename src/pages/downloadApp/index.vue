<template>
  <div class="wrap">
    <img class="logo" src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/invit.jpg" mode="widthFix" alt="">
    <div class="download" @click="tokefu('下载APP','http://page.kamicard.com/download/kami_downloadApp_new.html')">
      <img class="down" src="../../assets/zhanghushouyi_btn.png" mode="widthFix" alt="">
    </div>
    <vue-tab-bar v-if='!SHOW'
      @fetch-index="clickIndexNav"
      :selectNavIndex=selectNavIndex
      :needButton="needButton"
      :handButton="handButton"
      :btnText="btnText">
    </vue-tab-bar>
  </div>
</template>

<script>
import vueTabBar from '../../components/tabBar'
  export default {
    data () {
      return {
        screenHeight:'',
        title: '',
        url:''
      }
    },
    components: {
      vueTabBar
    },
    //页面设置转发功能
    onShareAppMessage: function (res) {
      return {
        title: `轻轻松松下了张5万的白金，你也来试试？
`,
        imageUrl: 'http://download.pcuion.com/app2_0/lijiban.png',
        path: '/pages/index/index'
      }
    },
    onLoad(){

    },
    onShow(){
      this.selectNavIndex = 1
    },
    methods: {   
      tokefu(title,url){
        let pages = getCurrentPages();
        let currPage = pages[pages.length - 1];   //当前页面
        let prevPage = pages[pages.length - 2];  //上一个页面
        currPage.setData({
          urlStr: url
        });
        console.log(title,url)
        wx.navigateTo({ 
            url: `/pages/link/main?title=${title}`
        });
      },
    }
  }
</script>
<style lang='scss' scoped>
.wrap{
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 100rpx;
  .logo{
    width: 100%;
  }
  .download{
    width: 100%;
    position: fixed;
    bottom: 94rpx;
    z-index: 11;
    .down{
      width: 100%;
    }
  }
}

</style>
