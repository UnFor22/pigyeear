<template>
  <div class="wrap">
    <div class="zhulixiangqing">
      <div class="title">
        <p>活动说明</p>
      </div>
      <div class="time"> 
        <span>活动时间：</span>
        <span>2018.12.15 - 2018.12.31</span>
      </div> <br>
      <div class="main">
        <p>1、抢得红包金币后，需分享5名好友助力拆开，5名好友助力后即可兑换提现~</p>
        <br>
        <p>2、当助力人数超过5人后，每增加1位好友助力可随机获得1-10金币，自动到账，好友多多，金币多多。</p> <br>
        <p>3、活动期间内，可持续分享助力，账户收益金币可累加，助力人不可重复。</p> <br>
        <p>4、如遇参与人数高峰，提现红包发放可能会延迟（72小时到账），详情咨询客服。</p> <br>
        <p>5、活动页面可随时关闭并正常使用小程序内其他功能，点击浮窗可随时观看获利情况。</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import {getTaskInfo,getMore} from '../../requestAPI/requestAPI';
  export default {
    
  
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
