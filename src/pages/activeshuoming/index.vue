<template>
  <div class="wrap">
    <div class="zhulixiangqing">
      <div class="title">
        <p>活动说明</p>
      </div>
      <div class="time"> 
        <span>活动截止时间：</span>
        <span>{{Year}}{{Month}}{{Day}}</span>
      </div> <br>
      <div class="main">
        <p>1、抢得红包金币后，需5名好友点击帮忙拆开，5名好友接龙后即可提现~</p>
        <br>
        <p>2、当接龙人数超过5人后，每增加1位好友可随机获得5-60金币，自动到账，好友越多，金币越多，可随时提现。</p> <br>
        <p>3、活动期间内，可持续助力，账户金额可累加，接龙好友不可重复。</p> <br>
        <p>4、红包提现如遇到问题，请咨询客服。</p> <br>
        <p>5、活动页面可随时关闭，点击浮动图标可查看账户金额。</p> 
      </div> 
    </div>
  </div>
</template>

<script>
import {getTaskInfo,getMore} from '../../requestAPI/requestAPI';
  export default {
    data(){
      return {
        time: '',
        Year: '',
        Month: '',
        Day: ''
      }
      
    },
    onLoad(){
      let that = this
      wx.getStorage({
        key:'ENDTIME',
        success:function(res){
          // console.log(res)
          if(res.data == ''||res.data == null ||res.data == {} ){
            // console.log('没找到')
            // that.Year ='2018'
            // that.Month = '12'
            // that.Day = '31'
            that.time = 1551369600
          } else {
            that.time = res.data.time      
          }
          let date = parseInt(that.time *1000) 
          let time = new Date(date);

          that.Year = time.getFullYear() + '-'
          that.Month = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1) + '-';
          that.Day = (time.getDate() < 10 ? '0' + (time.getDate()) : time.getDate()) + ' ';
        },
        fail: function(){      
        }
      })
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
    padding:0 60rpx;
    .title{
      font-size: 20px;
      color: gold;
      text-align: center;
    }
    .time{
      text-align: center;
      font-size: 14px;
      color: #fff;
      line-height: 150%;
      margin-top: 20rpx;
      margin-bottom: 20rpx;
    }
    .main{
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      color: #fff;
      p{
        margin-bottom: 20rpx;
      }
    }
  }
 
}

</style>
