<template>
   <div class="selectContainer">
     <div class="content">
        <ul>
          <li v-for="(item, index) in pageList" :key="index" @click="hotdetailsNum(item.rpurl)">
            <div class="topBox">
              <img :src=item.logourl alt="">
              <div>
                <div style="margin-bottom: 20rpx; height: 40rpx">
                  <span style="font-weight: bold; font-size: 17px; color: #363636; ">{{item.rpname}}</span>
                  <span style=" font-size: 12px; background: linear-gradient(to right, #FFA574 , #FF8062); border-radius: 10px; color: #fff; padding: 0px 6rpx;position: relative;top: -4rpx;">{{item.rptips}}</span>
                </div>
                <div style="font-size: 14px; color: #5f5f5f">
                  <span>{{item.label}}</span>
                </div>
              </div>
              <div class="topBtn" @click="hotdetailsNum(item.rpurl)"><a>立即申请</a></div>
            </div>

            <div class="bottomBox">
              <div style="text-align: left;">
                <p style="color: #FF6147;margin-bottom: 20rpx;">{{item.minmoney}}-{{item.maxmoney}}</p>
                <p style="color: #9a9a9a; font-size: 12px;">额度范围</p>
              </div>
              <div>
                <div v-for='(itemTips, i) in rates[index]' :key="i" >
                  <p>{{itemTips}}</p>
                </div>
              </div>
              <div style="text-align: right;">
                <p style="margin-bottom: 20rpx">{{item.minday}}-{{item.maxday}}<span style="font-size: 12px;"></span></p>
                <p style="color: #9a9a9a; font-size: 12px;">期限</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="import">
          <div @click="toLead"><a><img src="../../assets/onBtntoImport.png" mode="widthFix"></a></div>
        </div>
     </div>
   </div>
</template>

<script>
  import md5 from 'js-md5';
  import {getOnBehalf,getApplyOn} from '../../requestAPI/requestAPI';

//定义一个判断是否为数组的方法
  function isArrayFn(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
export default {
  data () {
    return {
      onbehalfFilter: {
        page: 0,		//当前页数，默认传1,每页显示10条，接口默认返回20条
      },
      pageList: [],
      urlList: [],
      lilvs:[], // 日/月利率未处理
      rates:[],  // 日/月利率
      bottomAllLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      // scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      wrapperHeight: 0,
      bottomText: '上拉加载更多',
      bottomDropText: '释放更新',
      onbehalfsource:'',     //0:办卡页面跳转代还-立即申请非原生跳转
      isKami:'',          //1:卡秘App-办卡页面-代还-一键导入-账单 0:非卡秘App-办卡页面-代还-一键导入-注册下载页
      urlUtm:'',
    }
  },

  onLoad() {
    //加载热门贷款金额详情页时所需数据
    this.dropPageList();
  },
  methods: {
    //下拉时查询数据
    dropPageList(){
      this.onbehalfFilter.page = parseInt(this.onbehalfFilter.page) + 1;
      getOnBehalf(this.onbehalfFilter).then(data => {
        if(data.result.code == 10000){
          this.pageList = data.data;
          // console.log(this.pageList)
          // 为日/月利率赋值
          for(let i=0;i<this.pageList.length;i++){
            this.lilvs.push(data.data[i].lilv) 
            this.rates.push(this.lilvs[i].split(','))
            // this.cardTips.push(this.pageList.credittips.split(',')) 
          }
          // console.log('this.lilvs',this.lilvs)
          // console.log('this.rates',this.rates)
        }else if(data.result.code == 99996) {
          this.bottomText = '已经到底了';
          this.bottomDropText = '已经到底了';
        }
        else {
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        // Toast({message:'正在加载中。。。',duration: 500});
      });
    },
    // 把办卡链接复制到剪切板
    hotdetailsNum(linkUrl){
      // console.log('linkUrl', linkUrl)
      wx.setClipboardData({
        data: linkUrl,
        success (res) {  
            wx.hideToast() // 隐藏默认的Toast提示框
            wx.showModal({
              title: '提示',
              content: '您所要办的信用卡链接已复制到剪切板，打开浏览器粘贴后即可打开。',
              showCancel: false, //不显示取消按钮     
            })            
          }
      })
    },
  },
}
</script>

<style scoped lang='scss'>
.selectContainer{
  background-color: #F6F6F6;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .content{
    padding: 0 20rpx;
    ul{
      li{
        /*border-1px(rgba(7,17,27,0.5))*/
        background-color: #fff;
        border-radius: 12px;
        margin-top: 20rpx;
        margin-bottom: 10rpx;
        padding: 30rpx;
        .topBox{
          position: relative;
          display: flex;
          align-items: center;
          /*justify-content space-between*/
          img{
            width: 100rpx;
            height: 100rpx;
            margin-right: 10rpx;
          }
            
          .topBtn{
            position: absolute;
            right: 0;
            display: inline-block;
            /*background: linear-gradient(to right, #8B89FF , #7B5CFF);*/ /* 标准的语法 */
            background-color: #fff;
            margin-right: 10rpx;
            /*font-family: pingFangSC-Medium "微软雅黑"*/
            border: 2rpx solid #FF8163;
            width: 150rpx;
            height: 56rpx;
            text-align: center;
            line-height: 56rpx;
            border-radius: 60rpx;
            /*box-shadow: 3px 3px 8px #ddd;*/
            outline:none;
            font-size: 12px;
            a{
              color: #FF8163;
            }
          } 
            
        }
          
        .bottomBox{
          background-color: #FAFAFA;
          display: flex;
          justify-content: space-between;
          margin-top: 20rpx;
          border-radius: 5px;
          padding: 20rpx;
          div{
            text-align: center;
            div:nth-child(2) p{
              color: #9a9a9a; 
              font-size: 24rpx;
              margin-top: 20rpx;
            }       
          }            
        }        
      }       
    }        
  }   
  .import img{
      width:100%;
  }
}
    
input,button,select,textarea{outline:none;}
</style>
