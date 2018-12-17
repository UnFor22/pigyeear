<template>
  <div class="wrap">
    <div class="zhulixiangqing">
      <img mode="widthFix" :src="img" alt="">
      <p>{{userName}}</p>
    </div>
    <div class="zhuli_title">
      <p>累计获得 <span>{{coin}}</span> 金币，共有 <span>{{zhulinum}}</span> 位好友帮你助力!</p>
    </div>
    <div class="zhuli_main">
      <li v-for="(item,index) in userArr" :key="index">
        <img mode="widthFix" :src="item.fheadurl" alt="">
      </li>
    </div>
    <div class="zhuli_erweima">
      <img src="../../assets/active/erweima.png" mode="widthFix" alt="">
    </div>
  </div>
</template>

<script>
import {getTaskInfo,getMore} from '../../requestAPI/requestAPI';
  export default {
    
    data () {
      return {
        zhulinum: '',
        coin: '', 
        img: require('../../assets/active/morentouxiang.png'),
        userArr: [
          
        ],
        userName: ''
      }
    },
    onLoad(){
      let timestamp = Date.parse(new Date()) + "0"
      let xianziatime = timestamp.substring(0,10)
      let that = this
      wx.getStorage({
        key:'openID',
        success:function(res){  
          getTaskInfo({openid: res.data.openId}).then(res=>{
            console.log('详情页活动信息',res)
            that.coin = res.data.coin
            that.img = res.data.headurl
            that.zhulinum = res.data.peoples
            that.userName = decodeURI(res.data.usname)
            // if(res.data.peoplesinfo != ' '){
            //   let json = JSON.parse(res.data.peoplesinfo)
            //   console.log(json)
            //   for(let i = 0; i< json.length; i++){
            //     // that.userArr[i].name = decodeURI(json[i].fname)
            //     that.userArr.push(json[i].fheadurl)
            //     console.log(that.userArr)
            //   }
            // } 
          })
          getMore({openid: res.data.openId}).then(res => {
            console.log(res)
            that.userArr = res.data
          })
        }
      }) 
    },
    onShow(){

    },
    onShareAppMessage: function (res) {
      return {
        title: `论下卡成功率，我没服过谁！`,
        imageUrl: 'http://download.pcuion.com/app2_0/songxianj.png',
        path: '/pages/index/main'
      }
    },
    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
.wrap{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  // height: 100%;
  // height: 1800rpx;
  background: #c03830;
  text-align: center;
  .zhulixiangqing{
    // width: 120rpx;
    // border-radius: 50%;
    // border: 2px solid gold;
    margin-top: 60rpx;
    margin-bottom: 20rpx;
    img{
      width: 120rpx;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-bottom: 10rpx;
    }
    p{
      color: #fff;
      font-size: 18px;
    }
  }
  .zhuli_title{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    margin-bottom: 40rpx;
    p:nth-of-type(1){
      font-weight: 500;
      font-size: 12px;
      color: gold;
      margin-bottom: 10rpx;
      span {
        font-size: 18px;
      }
    }  
  }
  .zhuli_main {
    position: relative;
    width: 535rpx;
    height: 50%;
    margin-left: 107rpx;
    li:nth-of-type(1){
      // margin: 0;
    }
    li {
      float: left;
      margin-left: 2rpx;
      margin-top: 8rpx;
    }
    img{
      width: 67rpx;
      height: 67rpx;
      // height: 84rpx;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  }
  .zhuli_erweima {
    position: absolute;
    bottom: 60rpx;
    left: 275rpx;
    width: 200rpx;
    img{
      width: 100%;
    }
  }
}

</style>
