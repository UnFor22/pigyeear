<template>
   <div class="selectContainer">
     <div class="content">
        <ul>
          <li v-for="(item, index) in pageList" :key="index">
            <div class="topBox">
              <img :src=item.logourl alt="">
              <div>
                <div style="margin-bottom: 20rpx; height: 40rpx">
                  <span style="font-weight: bold; font-size: 17px; color: #363636; ">{{item.rpname}}</span>
                  <span style=" font-size: 12px; background: linear-gradient(to right, #FFA574 , #FF8062); border-radius: 10px; color: #fff; padding: 0px 6rpx;position: relative;top: -4rpx;">{{item.rptips}}</span>
                </div>
                <div style="font-size: 14px; color: #5f5f5f" v-for="(itemTips, i) in item.label.split(',')" :key="i">
                  <span>{{itemTips}}</span>
                </div>
              </div>
                <!--@click="applyon()"-->
              <div class="topBtn" @click="apply(item.rpurl)"><a>立即申请</a></div>
            </div>

            <div class="bottomBox">
              <div style="text-align: left;">
                <p style="color: #FF6147;margin-bottom: 20rpx;">{{item.minmoney}}-{{item.maxmoney}}</p>
                <p style="color: #9a9a9a; font-size: 12px;">额度范围</p>
              </div>
              <div>
                <div v-for="(itemTips, i) in item.lilv.split(',')" :key="i">
                  <p class="tips">{{itemTips}}</p>
                </div>
                <!--<p style="margin-bottom: 10px;">{{item.lilv.replace(/%/, "")}}<span style="font-size: 12px;">%</span></p>-->
                <!--<p style="color: #9a9a9a; font-size: 12px;'">月利率</p>-->
              </div>
              <div style="text-align: right;">
                <p style="margin-bottom: 20rpx">{{item.minday}}-{{item.maxday}}<span style="font-size: 12px;"></span></p>
                <p style="color: #9a9a9a; font-size: 12px;">期限</p>
              </div>
            </div>
          </li>
        </ul>
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

  created () {
    //this.changeParameter();
    //console.log(this.$root.$mp.query) 
  },
  mounted() {
    //动态计算页面高度
    //this.wrapperHeight = document.documentElement.clientHeight - //this.$refs.wrapper.getBoundingClientRect().top;
    //加载热门贷款金额详情页时所需数据
    this.dropPageList();

  },
  methods: {
    //上拉加载
    loadBottom() {
      /*this.dropPageList();*/
        // 若数据已全部获取完毕
        this.allLoaded = true;
      // 固定方法，查询完要调用一次，用于重新定位
      //this.$refs.loadmore.onBottomLoaded();
    },

    //下拉时查询数据
    dropPageList(){
      this.onbehalfFilter.page = parseInt(this.onbehalfFilter.page) + 1;
      getOnBehalf(this.onbehalfFilter).then(data => {
        if(data.result.code == 10000){
          this.pageList = this.pageList.concat(data.data);
        }else if(data.result.code == 99996) {
          this.bottomText = '已经到底了';
          this.bottomDropText = '已经到底了';
        }
        else {
          Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        Toast({message:'正在加载中。。。',duration: 500});
      });
    },
      // back(){
      //     window.history.go(-1)
      // },
      // apply:function(url){
      //     /*AppInters.replacePay('[{"url":"'+url+'"}]')*/
      //     /*console.log(url)*/
      //     if(this.onbehalfsource==0){//从办卡页面跳转的代还
      //       window.location.href=url;
      //     }else{//原生跳转到第三方
      //         /*window.webView.click('[{"url":"'+url+'"}]');*/
      //         if(this.isKami!=undefined){
      //         /*if(this.isKami==1){*/
      //             var system = {};
      //             var p = navigator.platform;
      //             var u = navigator.userAgent;
      //             system.win = p.indexOf("Win") == 0; //证明是Windows
      //             system.mac = p.indexOf("Mac") == 0; //证明是mac
      //             system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); //证明linux
      //             //判断浏览器内核
      //             var browser = {
      //                 versions: function () {
      //                     var u = navigator.userAgent, app = navigator.appVersion;
      //                     return {         //移动终端浏览器版本信息
      //                         trident: u.indexOf('Trident') > -1, //IE内核
      //                         presto: u.indexOf('Presto') > -1, //opera内核
      //                         webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      //                         gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      //                         mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      //                         ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      //                         android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      //                         iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      //                         iPad: u.indexOf('iPad') > -1, //是否iPad
      //                         webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      //                         Win:u.indexOf("Win") == 0, //证明是Windows
      //                         Mac:u.indexOf("Mac") == 0, //证明是mac
      //                         Linux:u.indexOf("Linux")== 0,
      //                     };
      //                 }(),
      //                 language: (navigator.browserLanguage || navigator.language).toLowerCase()
      //             };
      //             //判断是否是移动设备-ios打开
      //             if (browser.versions.ios) {
      //                 window.webkit.messageHandlers.click.postMessage('[{"url":"'+url+'"}]');
      //             } else {//安卓
      //                 window.webView.click('[{"url":"'+url+'"}]');
      //             }
      //         /*}else{
      //             window.location.href="http://page.kamicredit.com/register/kami_downloadRegister.html?"+this.urlUtm;
      //         }*/
      //     }else{//ios旧框架
      //         window.webView.click('[{"url":"'+url+'"}]');
      //     }
      //     }
      // },
      //获取对于组件传递过来的值
      // changeParameter(){
      //     this.onbehalfsource = this.$route.query.onbehalfsource;
      //     this.isKami = this.$route.query.isKami;
      //     this.urlUtm = this.$route.query.utm_source;
      //     /*console.log(this.onbehalfsource);*/
      // },
      //一键导入img
//       toLead(){
// //      if(this.isKami!=undefined){
//         if(this.isKami==1){//kamiAPP
//             var system = {};
//             var p = navigator.platform;
//             var u = navigator.userAgent;
//             system.win = p.indexOf("Win") == 0; //证明是Windows
//             system.mac = p.indexOf("Mac") == 0; //证明是mac
//             system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); //证明linux
//             //判断浏览器内核
//             var browser = {
//                 versions: function () {
//                     var u = navigator.userAgent, app = navigator.appVersion;
//                     return {         //移动终端浏览器版本信息
//                         trident: u.indexOf('Trident') > -1, //IE内核
//                         presto: u.indexOf('Presto') > -1, //opera内核
//                         webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//                         gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//                         mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//                         ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//                         android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
//                         iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//                         iPad: u.indexOf('iPad') > -1, //是否iPad
//                         webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
//                         Win:u.indexOf("Win") == 0, //证明是Windows
//                         Mac:u.indexOf("Mac") == 0, //证明是mac
//                         Linux:u.indexOf("Linux")== 0,
//                     };
//                 }(),
//                 language: (navigator.browserLanguage || navigator.language).toLowerCase()
//             };
//             //判断是否是移动设备-ios打开
//             if (browser.versions.ios) {
//                 window.webkit.messageHandlers.toBill.postMessage(null);
//             } else {
//                 window.webView.toBill();
//             }
//         }else if(this.isKami==0){//非卡秘APP
//             var locationHref = window.location.href;
//             if(locationHref.indexOf('pcuion')>-1){
//                 setTimeout(()=>{
//                     window.location.href="http://page.pcuion.com/register/kami_downloadRegister.html?utm_source="+this.urlUtm;
//                 }, 1000)
//             }else if(locationHref.indexOf('kamicredit')>-1){
//                 setTimeout(()=>{
//                     window.location.href="http://page.kamicredit.com/register/kami_downloadRegister.html?utm_source="+this.urlUtm;
//                 }, 1000)  
//             }else if(locationHref.indexOf('kamicard')>-1){
//                 setTimeout(()=>{
//                     window.location.href="http://page.kamicard.com/register/kami_downloadRegister.html?utm_source="+this.urlUtm;
//                 }, 1000)  
//             }
//         }
// //            }
//       },
  },

  computed: {
  },

  components: {
  }
  
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
