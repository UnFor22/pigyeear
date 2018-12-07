<template>
  <div>
    <div class="progress">
<!--<nav class="navTitle"><img @click="backHistory()" src="../../assets/fanhui@2x.png">进度查询</nav>-->
      <div class="bankHint" v-if="upToType==1">(此处为银行公开信息，方便用户查询信息)</div>
      <ul>
        <li v-for="(item, index) in pageList" :key="index" v-if="item.actphone!=null">
          <div class="navBox" @click="isShowFun(index)">
            <div>
              <img :src="item.logourl" alt=""><span style="color: #5f5f5f; font-size:16px;">{{item.bank_name}}</span>
            </div>
            <div>
              <img src="../../assets/xia@2x.png" alt="">
            </div>
          </div>
          <div class="contentBox" v-show="(isShow && index == i)">
            
            <div class="phone" @click="call(item.actphone)">
              <div>
                <p>{{item.actcall}}</p>
              </div>
              <div>
                <a :href="'tel' + ':' + item.actphone"><img style="width: 60rpx; height: 40rpx" src="../../assets/dianhua@2x.png" alt=""></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getActivation} from '../../requestAPI/requestAPI';

  export default {
    data () {
      return {
        phototUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528106264550&di=635bd54844f92c9672485b5d5f6ba3cc&imgtype=0&src=http%3A%2F%2Fwww.xiazaiba.com%2Fuploadfiles%2Fsub_ico%2F2015%2F0417%2F2015041715312182286.png',

        pageList: [],

        showContent: true,
        i: '',
        isShow: false,

      }
    },

    onLoad () {

      //加载银行列表进度数据
      getActivation().then(data => {
        if(data.result.code == 10000){
          this.pageList = data.data;
            console.log(this.pageList)
        
        }else {
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        // Toast({message:'正在加载中。。。',duration: 500});
      });
        // this.isUpTo();
       
    },

    methods: {
        isShowFun(index) {
            this.pageList.forEach((item, ind) => {
              if(index == ind) {
                this.i = index;
                this.isShow = !this.isShow
              }
              if(this.i != index) {
                this.isShow = false
              }

            });
        },
        
        // 拔打查询电话
        call(phone){
          wx.showModal({
            title: '提示',
            content: '将要拨打电话给'+ phone,
            success (res) {
              if (res.confirm) {
                wx.makePhoneCall({
                  phoneNumber: phone 
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
    },

    computed: {
    },

    components: {
    }
  }
</script>

<style scoped lang='scss'>
.navTitle{
    width:100%;    
    height: 86rpx;
    line-height: 86rpx;
    text-align: center;
    font-size: 18px;
    color: #363636;
    border-bottom: 2rpx solid #C9C9C9;
    background:#fff;
  }
  .navTitle img{
    width: 24rpx;
    position: absolute;
    top: 20rpx;
    left: 5%;
  }
  .bankHint{
    width: 90%;
    height: 62rpx;
    line-height: 62rpx;
    padding-left: 10%;
    // background:url(../../assets/laba@3x.png) no-repeat;
    background-size: 28rpx;
    background-position: 4%;
    background-color: #FFFAF2;
    color: #FDC051;
    font-size: 12px;
  }
  .progress{
    width: 100%;
    background-color: #fff;
    ul{
      li{
        .navBox{
          display: flex;
          justify-content: space-between;
          padding: 20rpx 40rpx;
          border: 2rpx(rgb(232, 232, 232));
          img{
            width: 80rpx;
            height: 80rpx;
            margin-right: 20rpx;
          }     
          div:nth-of-type(1){
            display: flex;
            align-items: center;
          }    
          div:nth-of-type(2){
            display: flex;
            align-items: center;
            img{
              width: 30rpx;
              height: 16rpx;
            }      
          }      
        }
          
        .contentBox{
          img{
            width: 16rpx;
            height: 30rpx;
            margin-right: 20rpx;
          }
            
          .online{
            display: flex;
            justify-content: space-between;
            align-items:center;
            border: 2rpx(rgb(232, 232, 232));
            padding: 20rpx 40rpx;
            div:nth-of-type(1){
              p:nth-of-type(1){
                color: #5f5f5f;
                font-size: 16px;
                /*font-family pingFangSC-Medium*/
                margin-top: 16rpx;
                margin-bottom: 20rpx;
              }
               
              p:nth-of-type(2){
                /*font-family pingFangSC-Medium*/
                font-size: 12px;
                color: #bdbdbd;
                margin-top: 20rpx;
                margin-bottom: 16rpx;
              }       
            }           
          }
            
          .phone{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2rpx(rgb(232, 232, 232));
            padding: 20rpx 40rpx;
            div:nth-of-type(1){
              p:nth-of-type(1){
                margin-top: 16rpx;
                margin-bottom: 20rpx;
                color: #5f5f5f;
                /*font-family pingFangSC-Medium*/
              }
               
              p:nth-of-type(2){
                font-size: 12px;
                color: #bdbdbd;
                /*font-family pingFangSC-Medium*/
                margin-top: 20rpx;
                margin-bottom: 16rpx;
              }      
            }              
          }            
        }          
      }        
    }     
  }  
</style>
