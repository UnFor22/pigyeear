<template>
  <div class="container" ref="wrapper" :style="{height: wrapperHeight + 'px'}">
    <div class="title">
      <div class="titleTxt">
        <span>温馨提示：</span>
        <span>为了更有效的为您服务，请在添加客服时备注您的手机号+金额</span>
      </div>
      <div style="text-align: center">
        <img mode="widthFix" src="../../assets/active/intoBanner.png" alt="">
      </div>
    </div>

    <div class="funOne">
      <p class="funTitle">方法1：微信号添加卡小秘</p>
      <div class="contentTxt">
        <div class="tipsTxt">
          <p>1、复制微信号：kaxiaomi666</p>
          <p>2、打开微信添加好友</p>
        </div>
        <div class="btn">
          <div @click="copyWX">复制微信号</div>
        </div>
      </div>
    </div>

    <div style="width: 100%; background: #F6F6F6; height: 8px; margin: 20px 0"></div>
    <div class="funTwo" style="padding-bottom: 50px; background: #fff">
      <p class="funTitle">方法2：二维码添加卡小秘</p>
      <div class="contentTxt">
        <img mode="widthFix" style="width: 40%; margin-top: 20px; margin-bottom: 20px" src="http://images.kamicard.com/app2_0/wxqcode.jpg" alt="">
        <!-- <div class="btn" @click="downimg"> -->
          <!-- <a class="saveQRCode">保存二维码</a> -->
        <!-- </div> -->
        <!-- <p style="font-size: 14px; color: #cdcdcd; margin-top: 8px">打开微信扫一扫添加好友</p> -->
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        wrapperHeight: 0,
        message: 'kaxiaomi666',
        // shareUrl: require("../../assets/active/qrcode.png"),
        
      }
    },
    created(){
    },
  
    methods:{

      copyWX() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
        wx.setClipboardData({
          data: 'kaxiaomi666',
          success(res) {
            // wx.getClipboardData({
            //   success(res) {
            //     console.log(res.data) 
            //   }
            // })
          }
        })
      },
      downimg(){
        wx.downloadFile({
          url: 'http://images.kamicard.com/app2_0/wxqcode.jpg', // 仅为示例，并非真实的资源
          success(res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            console.log(res)
            if (res.statusCode === 200) {
              wx.playVoice({
                filePath: res.tempFilePath
              })
            }
          }
        })
  //       wx.saveImageToPhotosAlbum({  
  //         filePath: res.tempFilePath,  
  //         success(res) {  
  //           console.log("保存图片：success");  
  //           wx.showToast({  
  //             title: '保存成功', 
  //             icon: 'success',
  //             duration: 1000 
  //           });  
  //         },  
  //         fail(res) {  
  //           console.log("保存图片：fail");  
  //           console.log(res);  
  //         }  
  //       })  
      }
    }
  }
</script>

<style lang='scss' scoped>
.container{
    background: #fff;
  }
  .title{
    padding: 15px;
  }
  .title img{
    width: 95%;
    margin: 20px 0;
  }
  .titleTxt span{
    font-size: 12px;
  }
  .titleTxt span:nth-of-type(1){
    color: #FF6C54;
  }
  .titleTxt span:nth-of-type(2){
    color: #FDCE77;
  }

  .funOne{
    padding: 0 15px;
  }
  .funTwo{
    padding: 0 15px;
    margin-top: 20px;
  }
  .funTitle{
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .contentTxt{
    text-align: center;
  }

  .tipsTxt{
    width: 50%;
    font-size: 12px;
    color: #c5c5c5;
    display: inline-block;
    margin: 20px 0;
  }

  .tipsTxt p{
    float: left;
    margin-bottom: 5px;
  }

  .btn div{
    display: inline-block;
    width: 50%;
    height: 25px;
    line-height: 25px;
    border: 1px solid #7875FF;
    border-radius: 20px;
    color: #7875FF;
    font-size: 14px;
  }

  .btn a{
    display: inline-block;
    width: 50%;
    height: 25px;
    line-height: 25px;
    border: 1px solid #7875FF;
    border-radius: 20px;
    color: #7875FF;
    font-size: 14px;
    text-decoration: none;
  }
</style>
