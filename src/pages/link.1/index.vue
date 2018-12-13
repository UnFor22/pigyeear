<template>
  <div class="wrap">
    <img src="../../assets/zhezhao.png" alt="">
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
    onShareAppMessage: function (res) {
      return {
        title: `论下卡成功率，我没服过谁！`,
        imageUrl: 'http://download.pcuion.com/app2_0/songxianj.png',
        path: '/pages/index/index'
      }
    },
    methods: {
      //获取用户unionid
      onGotUserInfo(e) {
        let that = this;

        if(e.target.userInfo) {
          console.log('用户已经授权');
          this.userInfo.encryptedData = e.target.encryptedData;
          this.userInfo.iv = e.target.iv;

          //判断用户路径参数里是否含有邀请码，若有，则在注册时的对象里添加inviteCode字段
          if(this.invitationCode != '') {
            this.userInfo['inviteCode'] = this.invitationCode;
          }

          if(this.channel != '') {
            this.userInfo['wxappletChannel'] = this.channel;
          }

          //判断用户是否从邀请链接进入，先走判断用户是否为新老用户，
          if(this.isFromInviteBook) {

            wx.login({
              success: function (res) {
                that.userInfo['code'] = res.code;

                //如果是从邀请记账链接进来的时候，首先判断该用户是否是真正意义上的新老用户
                isOldOrNewAPI(that.userInfo).then(response => {
                  if(response.code == '200'){
                    console.log('已注册');
                    //如果用户已经注册，后台返回加密session，存储到Storage中  (X-AUTH-TOKEN)
                    wx.setStorage({
                      key: "session",
                      data: response.result.token
                    });
                    //页面跳转到首页
                    const url = '../../../pages/details/index/main';
                    wx.reLaunch({url});
                  }else if(response.code == '01012'){
                    console.log('未注册');

                    console.log(response.result);

                    let str = JSON.stringify(response.result);

                    const url = `../mobilelogin/main?userInfo=${str}`;
                    wx.navigateTo({url});

                  } else {
                    console.log('服务器异常');
                    wx.showToast({
                      title: '当前网络出错，请稍后重试',
                      icon: 'none',
                      duration: 500
                    });
                  }
                }).catch(error => {
                  console.log('发送失败', error);
                  wx.showToast({
                    title: '当前程序出错，请稍后重试',
                    icon: 'none',
                    duration: 500
                  });
                });

              },
              fail: function (err) {
                console.log(err);
              }
            });

          }else {
            //证明用户已授权
            registeredAPI(this.userInfo).then(response => {
              //成功
              if(response.code == '200') {
                console.log('成功',response);
                //存入用户token
                wx.setStorage({
                  key: "session",
                  data: response.result.token
                });

                //删除内存中的inviteCode
                wx.removeStorage({
                  key: 'invitationCode',
                  success: function(res) {
                    console.log(res.data)
                  }
                });

                //删除内存中的channel
                wx.removeStorage({
                  key: 'channel',
                  success: function(res) {
                    console.log(res.data)
                  }
                });

                //跳转到首页
                const url = '../../../pages/details/index/main';
                wx.reLaunch({url});
              } else {
                //其它错误，参数异常
                console.log(response);
                wx.showModal({
                  title: '提示',
                  content: '网络错误，请重新登录',
                  showCancel: false,
                  confirmText: '好的',
                  success: function(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                })
              }
            })
              .catch((err) => {
                console.log(err);
                wx.showModal({
                  title: '提示',
                  content: '程序错误，请重新登录',
                  showCancel: false,
                  confirmText: '好的',
                  success: function(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                })
              })
          }

        }else {
          console.log('用户拒绝授权');
          //用户拒绝授权
          wx.showModal({
            title: '提示',
            content: '请点击登录按钮开始使用',
            showCancel: false,
            confirmText: '好的',
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          })
        }
      },
      tokefu(){
        // console.log(this.url)
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
