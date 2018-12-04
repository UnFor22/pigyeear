<template>
  <div>
    <div class="card">
      <!-- 功能导航 -->
      <div class="funList">
        <div @click="toOnbehalf" style="display: inline-block;">
            <img src='../../assets/daihuan@2x.png' alt="">
            <p style="font-size: 14px; color: #333;">代还</p>
        </div>
        <div v-if="isCredit==true" class="funListMiddle" @click="toProgresscheck" style="display: inline-block;">
            <img src='../../assets/quxian.png' alt="">
            <img src='../../assets/hot.gif' alt="" class="hotGif">
            <p style="font-size: 14px; color: #333;">取现</p>
        </div>
        <div class="funListMiddle" @click="toprogresscheck" style="display: inline-block;">
            <img src='../../assets/chaxun.png' alt="">
            <p style="font-size: 14px; color: #333;">进度查询</p>
        </div>
        <div class="funListMiddle" @click="toActivation" style="display: inline-block;">
          <img src='../../assets/jihuo.png' alt="">
          <p style="font-size: 14px; color: #333;">激活</p>
        </div>
      </div>
      
      <!-- 分割线 -->
      <div class="splitLine" style="margin: 0;"></div>
      <!-- 热门银行 -->
      <div class="hotBanks">
        <div class="hotBanks_header">
          <p class="theme_p" style="color: #363636;"><span class="leftBorder"></span>热门银行</p>
          
          <span @click="tofiltercard" style="color: #7370FF;font-size: 12px;">信用卡中心<img src="../../assets/cardCenterMore.png" alt="" style="width: 12rpx; height:22rpx; vertical-align: middle; margin-left: 6rpx;margin-top: -2rpx;"></span>

        </div>
        <div class="hotBanks_content">
          <!-- loading图 -->
          <div class="loading" v-if=isLoading_hotBank>
              <img src="../../assets/loading22.gif" alt="">
          </div>
          <ul>
            
            <li v-for="(item,index) in showList" @click="toHotbank(item)" :key="index">
              
                <span v-if="item.banktips!=''"  :class="{tips}">{{item.banktips}}</span>
                <div>
                  <img :src=item.banklogo alt="">
                  <p>{{item.bankname}}</p>
                  <p style="color: #999;">{{item.bankcontent}}</p>
                </div>
              
            </li> 
            <!-- <router-view></router-view> -->
          </ul>
          <div v-if="!showGD" class="moreItem" style="height:64rpx" @click="toggleShowList">{{word1}}<img :src=gengduo style="width: 28rpx; height:15rpx; vertical-align: middle; margin-left: 10rpx" alt=""></div>
          <div v-else class="moreItem" style="height:64rpx" @click="toggleShowList">{{word2}}<img :src=shouqi style="width: 28rpx; height:15rpx; vertical-align: middle; margin-left: 10rpx" alt=""></div>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="splitLine2" ></div>
      <!--主题精选-->
      <div class="theme">
        <p class="theme_p" style="color: #363636;"><span class="leftBorder"></span>主题精选</p>
        <!-- loading -->
        <div class="loading" v-if=isLoading_hotBank>
            <img src="../../assets/loading22.gif" alt="">
        </div>
        <div class="theme_content">
          <div class="theme_div" style="display: inline-block;" @click="toNovicecard">
              <div style="display: inline-block; margin-left:8rpx; margin-top: 6rpx;">
                <p>{{noviceCard.topicname}}</p>
                <p style="color: #9a9a9a; font-size: 11px">{{noviceCard.topiccontent}}</p>
              </div>
              <img src='../../assets/xinshoubanka@3x.png' alt="" style="width:margin-right: 14rpx;">
          </div>
          <div class="theme_verticalline"></div>
          <div class="theme_div" style="display: inline-block;" @click="tolargemonute">
              <div style="display: inline-block;margin-top: 6rpx;">
                <p>{{bigQuota.topicname}}</p>
                <p style="color: #9a9a9a; font-size: 11px">{{bigQuota.topiccontent}}</p>
              </div>
              <img src='../../assets/daedu@3x.png' alt="">
          </div>
            <div class="theme_transverseline" style="margin-left: 2%;"></div>
            <div class="theme_transverseline" style="margin-right: 2%;"></div>

          <div class="theme_div" style="display: inline-block;" @click="tofastproval">
              <div style="display: inline-block;margin-left:8rpx;margin-top: 6rpx;">
                <p>{{fastApproval.topicname}}</p>
                <p style="color: #9a9a9a; font-size: 11px">{{fastApproval.topiccontent}}</p>
              </div>
              <img src='../../assets/shenpikuai@3x.png' alt="" style="margin-right: 14rpx;">
          </div>
          <div class="theme_verticalline" style="margin-top: -10rpx;"></div>
          <div class="theme_div" style="display: inline-block;" @click="topolitecard">
              <div style="display: inline-block;margin-top: 6rpx;">
                <p>{{politeCard.topicname}}</p>
                <p style="color: #9a9a9a; font-size: 11px">{{politeCard.topiccontent}}</p>
              </div>
              <img src='../../assets/liwu@3x.png' alt="">
          </div>

        </div>
      </div>
       <!--轮播图-->
      <div class="banner">
        <div class="loading" v-if=isLoading_hotBank>
            <img src="../../assets/loading22.gif" alt="">
        </div>
        <swiper style="height:150rpx" autoplay='true' interval="2000">
          <swiper-item v-for="(item, index) in bannerData" :key="index" >
            <a @click="hotdetailsNum(item.picurl)">
              <img style="width:740rpx; height:150rpx;" :src=item.pic_url alt="">
            </a>
          </swiper-item>
        </swiper>

        <div class="lamititleswiper" style="width: 100%; height: 30rpx;margin-top:30rpx">
          <!--<span class="todayTitle">卡秘头条</span>-->
          <div style="float:left">
            <img id="kamiTitlePic" src="../../assets/kamititle.png">
          </div>
          <div style="margin-left:160rpx;">
            <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
              <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in bannerDataTxt" :key="index">
                <a @click="toswiperdetails(item.url,index)">
                  <span>{{item.title}}</span>
                </a>
              </swiper-item>
            </swiper>
          </div>
        </div>
      </div>

      <div class="splitLine"></div>
      <!--热门信用卡-->
      <div class="hotCard" ref="test">
        <p class="hotCard_p" style="color: #363636;"><span class="leftBorder"></span>热门信用卡</p>
        <div class="hotCard_content">
          <div class="loading" v-if=isLoading_hotCard>
              <img src="../../assets/loading22.gif" alt="">
          </div>
            <ul>
              <li v-for="(item, index) in pageList" :key="index" @click="hotdetailsNum(item.crediturl)">
                <a style="width: 100%; height: 100%">
                  <img :src=item.creditphotourl alt="">
                  <div>
                    <p>{{item.creditname}}</p>
                    <p>{{item.creditcontent}}</p>
                    <span class="itemTipsCss" v-for="(itemTips, i) in cardTips[index]" :key="i">{{itemTips}}</span>
                  </div>
                </a>
                <div class="imgBox">
                  <img v-if="index==0" :src=back_img1 alt="">
                  <img v-if="index==1" :src=back_img2 alt="">
                  <img v-if="index==2" :src=back_img3 alt="">
                </div>
              </li>
            </ul>

        </div>
        
        <div class="noMore" v-if="!ReachBotton">
          <p>{{bottomText}}</p>
        </div>
      </div>
    </div>
  </div>
         
</template>

<script>
  import md5 from 'js-md5';
  import {getHotBankInfoList, getTopicSelect, getBannerImg, getHotCard, getBannerTxt,registerHref,userOperation} from '../../requestAPI/requestAPI';
  export default {
    data(){
      return {
        isActive :false,
        appear:true,
        tips:true,
        phototUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528106264550&di=635bd54844f92c9672485b5d5f6ba3cc&imgtype=0&src=http%3A%2F%2Fwww.xiazaiba.com%2Fuploadfiles%2Fsub_ico%2F2015%2F0417%2F2015041715312182286.png',
        cardUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528122362532&di=a15d3f52f9a40864816db75d76e4930b&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F006iRLaxzy73UJHuEO763%26690',
        hotBanks: [], //热门银行
        noviceCard: [], //新手办卡
        bigQuota: [],  //大额度
        fastApproval: [], //审批快
        politeCard: [], //办卡有礼
        bannerData: [], //轮播图
        bannerDataTxt: [], //轮播文字
        //分页属性
        
        showList:[], //循环显示银行卡
        cardTips:[], //热门信用卡小标签
        credittips:[], //热门信用卡小便签未处理
        searchCondition:{
          t: '',
          page: 0,
          token: '',
          creditid: '',
        },
        pageList: [],
        bottomAllLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        wrapperHeight: 0,
        bottomText: '上拉加载更多',
        bottomDropText: '释放更新',
        showAll: false,　//标记数据是否需要完全显示的属性
        isLoading_hotBank: true,
        isLoading_theme: true,
        isLoading_banner: true,
        isLoading_hotCard: true,
        animate:false,
        translate: 0,
        scrollIcon:'',
        isScrollIcon:'',
        creditHref:'',
        isCredit:'',
        ReachBotton:true,
        regList:{
          mob:'', //手机号、
          chan:'', //渠道号、
          cid:'', //信用卡ID、
          cname:'', //信用卡名称、
        },
        urlList:{    //url拼接参数
          urlAll:'',             //所有参数
          urlUtm:'',             //通道
          urlCredit:'',          //取现
          urlType:'',            //下载
          urlMob:'',             //手机号
          urlKami:'',            //是否为kamiApp跳转标识符
        },
        onbehalfsource:0,          //0:办卡页面跳转代还-立即申请非原生跳转
        isKami:'',          //1:卡秘App-办卡页面-代还-一键导入-账单 0:非卡秘App-办卡页面-代还-一键导入-注册下载页
        operationList:{   //记录用户操作接口列表
            type:3,                 //办卡点击(h5),
            mobile:'',                 //手机号、
            channelSign:'',         //渠道号、渠道标识(H5)
            typeId:'',              //相应操作数据id（对应数据的id不存在时可以不传）==>信用卡ID
            address:'',	            //链接地址（app不需要；H5需要）
        },
        backgroundI1:{
          background:"url("+require('../../assets/1@3x.png')+")",
        },
        back_img1: require('../../assets/1@3x.png'),
        back_img2: require('../../assets/2@3x.png'),
        back_img3: require('../../assets/3@3x.png'),
        showGD: false, // 控制更多和收起
        word1: '更多',
        word2: '收起',
        gengduo: require('../../assets/gengduo@2x.png'),
        shouqi: require('../../assets/shouqi@2x.png')
      }
    },
    
    methods: {
      // 跳转到代还页
      toOnbehalf() {
        wx.navigateTo({ 
          // url: '../workingMode/workingMode?workModeAndPriceList=' + JSON.stringify(workModeAndPriceList) + '&deviceId=' + deviceId,
          url: "/pages/onBehalf/main" + '?utm_source='
           + this.urlList.urlUtm + '&mob' + this.urlList.urlMob 
        });
      },
      // 跳转到进度查询页
      toprogresscheck() {
        wx.navigateTo({ 
          url: "/pages/progresscheck/main" 
        });
      },
      // 跳转到激活页
      toActivation() {
        wx.navigateTo({ 
          url: "/pages/activation/main" 
        });
      },

      // 跳转到信用卡中心
      tofiltercard(){
        wx.navigateTo({ 
          url: "/pages/filtercard/main" 
        });
      },
      // 跳转到热门银行详情页
      toHotbank(item){
        wx.navigateTo({ 
          url: "/pages/hotDetails/main?utm_source=" + this.urlList.urlUtm + '&mob=' + this.urlList.urlMob + '&bankid=' + item.bankid + '&bankname=' + item.bankname + '&bankcontent=' + item.bankcontent + '&logo=' + item.banklogo   
        });
      },
      // 跳转到新手办卡页
      toNovicecard(){
        wx.navigateTo({ 
          url: "/pages/noviceCard/main?utm_source=" + this.urlList.urlUtm + '&mob' + this.urlList.urlMob
        });
      },
      // 跳转到大额度页
      tolargemonute(){
        wx.navigateTo({ 
          url: "/pages/largemounte/main?utm_source=" + this.urlList.urlUtm + '&mob' + this.urlList.urlMob
        });
      },
      // 跳转到审批快页
      tofastproval(){
        wx.navigateTo({ 
          url: "/pages/fastapproval/main?utm_source=" + this.urlList.urlUtm + '&mob' + this.urlList.urlMob
        });
      },
      // 跳转到办卡有礼页
      topolitecard(){
        wx.navigateTo({ 
          url: "/pages/politecard/main?utm_source=" + this.urlList.urlUtm + '&mob' + this.urlList.urlMob
        });
      },
      // 跳转到轮播图详细页
      toswiperdetails(tourl,index){
        switch(index)
        {
        case 0:
          wx.navigateTo({ 
            url: "/pages/activation/main"
          });
          break;
        case 1:
          wx.setClipboardData({
            data: tourl,
            success (res) {  
              wx.hideToast() // 隐藏默认的Toast提示框
              wx.showModal({
                title: '提示',
                content: '您要办理的信用卡链接已复制，请到手机浏览器地址栏粘贴打开即可申请办卡。',
                showCancel: false, //不显示取消按钮     
                confirmText: '知道了'  
              })            
            }
          })
          break;
        case 2:
        console.log(tourl)
          wx.navigateTo({ 
            url: "/pages/cardraiders/main"
          });
          break;
        }
      },
      // 禁止小的轮播文字滑动
      stopTouchMove(){
        return false
      },
      // 切换showList的值
      toggleShowList(){
        this.showAll=!this.showAll
        this.showGD = !this.showGD
        if(this.showAll){
          this.showList = []
          this.showList = this.hotBanks
        }else{
          if(this.hotBanks.length > 6){
            this.showList = []
            for(let i = 0; i < 6; i++){
              this.showList.push(this.hotBanks[i]);
            }
          }else{
            this.showList = this.hotBanks;
          }
        }
      },
      // 页面加载时查询数据
      loadPageList(){
        this.searchCondition.t = (new Date()).valueOf();  //获取当前时间戳
        this.searchCondition.token = md5(md5((new Date()).valueOf() + '@kami2018'));  //生成token
        this.searchCondition.page = 1;
        getHotCard(this.searchCondition).then(data => {
          if(data.result.code == 10000){
            for(let j = 0; j< data.data.length; j++){
              this.pageList.push(data.data[j]);
            }
            // console.log(this.pageList)
            this.isLoading_hotCard = false;
            // 为信用卡的tips赋值
            for(let i=0;i<this.pageList.length;i++){
              this.credittips.push(data.data[i].credittips) 
              this.cardTips.push(this.credittips[i].split(','))
              // this.cardTips.push(this.pageList.credittips.split(',')) 
            }
          }else if(data.result.code == 99996) {
            this.bottomText = '没有更多了';
            this.bottomDropText = '没有更多了';
            this.ReachBotton=false
          }
         /* else {
            Toast({message:'正在加载中。。。',duration: 500});
          }*/
        }).catch(err => {
          console.log(err);
         /* Toast({message:'正在加载中。。。',duration: 500});*/
        });
      },
      //统计热门银行点击量
      hotdetailsNum(index){
          this.regList.mob=this.urlList.urlMob;
          this.regList.chan=this.urlList.urlUtm;
          this.regList.cid=this.pageList[index].creditid;
          this.regList.cname=this.pageList[index].creditname;
          registerHref(this.regList);
          this.operationList.mobile=this.$route.query.mob;
          this.operationList.channelSign=this.$route.query.utm_source;
          this.operationList.typeId=this.pageList[index].creditid;
          this.operationList.address=window.location.href;
          userOperation(this.operationList);
      },
      // 把banner的办卡链接复制到剪切板
      hotdetailsNum(linkUrl){
        // console.log('linkUrl', linkUrl)
        wx.setClipboardData({
          data: linkUrl,
          success (res) {  
            wx.hideToast() // 隐藏默认的Toast提示框
            wx.showModal({
              title: '提示',
              content: '您要办理的信用卡链接已复制，请到手机浏览器地址栏粘贴打开即可申请办卡。',
              showCancel: false, //不显示取消按钮     
              confirmText: '知道了'
            })            
          }
        })
        
      },
    },
    onLoad() {  
      //加载主题精选时所需数据
      getTopicSelect().then(data => {
        if(data.result.code == 10000){
          this.noviceCard = data.data[0];
          this.bigQuota = data.data[1];
          this.fastApproval = data.data[2];
          this.politeCard = data.data[3];
          this.isLoading_theme = false;
        }else {
          this.isLoading_theme = false;
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        this.isLoading_theme = false;
        // Toast({message:'正在加载中。。。',duration: 500});
      });
      //加载轮播图时所需数据
      getBannerImg().then(data => {
        if(data.result.code == 10000){
          this.bannerData = data.data;
          // console.log(this.bannerData)
          this.isLoading_banner = false;
        }else {
          this.isLoading_banner = false;
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        this.isLoading_banner = false;
        // Toast({message:'正在加载中。。。',duration: 500});
      });

      //加载轮播文字时所需数据
      getBannerTxt().then(data => {
        if(data.result.code == 10000){
          this.bannerDataTxt = data.data;
          // console.log(this.bannerDataTxt)
          this.isLoading_banner = false;
        }else {
          this.isLoading_banner = false;
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        this.isLoading_banner = false;
        // Toast({message:'正在加载中。。。',duration: 500});
      });         
    },
    onShow(){
      this.showGD = false
      this.showAll = false
      this.showList = []
      // 页面展示时，清空热门信用卡数据，并重新请求
      this.isLoading_hotCard = false
      this.pageList = []
      this.loadPageList();

      this.word= '更多'
      this.isLoading_hotBank = true
      this.imgUrl= require('../../assets/gengduo@2x.png')
       // 获取热门银行所需数据
      getHotBankInfoList().then(data => {
        if(data.result.code == 10000){
          this.hotBanks = data.data;
          // 第一次请求页面，给热门银行6个值
          if(this.hotBanks.length > 6){
            for(let i = 0; i < 6; i++){
              this.showList.push(this.hotBanks[i]);
            }
          }else{
            this.showList = this.hotBanks;
          }
          this.isLoading_hotBank = false;
        }else {
          this.isLoading_hotBank = false;
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err=>{
        console.log(err)
        this.isLoading_hotBank = false;
        // Toast({message:'正在加载中。。。',duration: 500});
      });
    },
    // 触底刷新
    onReachBottom() {
        if(this.isLoading_hotCard){
          this.loadPageList()
          return false
        }else{  
          this.searchCondition.page = parseInt(this.searchCondition.page + 1);
        }   
      //查询数据
        this.searchCondition.t = (new Date()).valueOf();  //获取当前时间戳
        this.searchCondition.token = md5(md5((new Date()).valueOf() + '@kami2018')); 
        // 获取热门信用卡的信息
        getHotCard(this.searchCondition).then(data => {      
          if(data.result.code == 10000){
            for(let j = 0; j< data.data.length; j++){
              this.pageList.push(data.data[j]);
              this.credittips.push(data.data[j].credittips)
            }
            console.log('111',this.pageList)
            // 为信用卡的tips赋值
            for(let i=0;i<this.pageList.length;i++){
              this.cardTips.push(this.credittips[i].split(','))
              // this.cardTips.push(this.pageList.credittips.split(',')) 
            }
            this.isLoading_hotCard = false;
            // console.log(this.credittips)
            // console.log(this.cardTips)
          }else if(data.result.code == 99996) {
            this.bottomText = '没有更多了';
            this.bottomDropText = '没有更多了';
            this.ReachBotton=false
          }
          else if(data.result.code == 99999){
            // this.loadPageList()
          }
        }).catch(err => {
          console.log(err);
         /* Toast({message:'正在加载中。。。',duration: 500});*/
        });
      
    },
    
  }
 
</script>

<style lang='scss' scoped>
.card {
  overflow: auto;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  .splitLine{
    width: 100%;
    height: 16rpx;
    background-color: #F6F6F6;
    margin: 40rpx 0;
  }
  .splitLine2{
    width: 100%;
    height: 16rpx;
    background-color: #F6F6F6;
    margin-bottom: 40rpx;
  }
  .funList{
    display: flex;
    flex-wrap: nowrap;
    padding: 0 60rpx;
    text-align: center;
    color: #999;
    margin: 40rpx 0;
    div{
      width: 100%;
    } 
    img{
      width: 100rpx;
      height: 100rpx;
      margin-bottom: 16rpx;
    }    
    .funListMiddle{
      position: relative;
      .hotGif {
        width: 74rpx;
        height: 48rpx;
        margin: 0;
        position: absolute;
        top: -10rpx;
        right: 4rpx;
      }
    } 
  }
  .hotBanks{
    width: 100%;
    .hotBanks_header{
      display: flex;
      justify-content: space-between;
      height: 134rpx;
      line-height: 134rpx;
      padding: 0 30rpx;
      .theme_p{
        /*font-weight bold*/
      } 
      .leftBorder{
        display: inline-block;
        position: relative;
        top: 4rpx;
        height: 30rpx;
        border-left: 6rpx solid #7370FF;
        margin-right: 20rpx;
      }
    }    
    .hotBanks_content{
      /*margin-top 20rpx*/
      width: 100%;
      text-align: center;
      /*padding-bottom 20rpx*/
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /*height 580rpx*/
        overflow: hidden;
        clear: both;
        li{
          width: 33.333%;
          text-align: center;
          margin-bottom: 30rpx;
          position: relative;
          .tips{
            position: absolute;
            top: -12rpx;
            left: 120rpx;
            font-size: 40rpx;
            /*background-color #F43C2A*/
            background: linear-gradient(to right, #FE743C , #F3392A); /* 标准的语法 */
            border-radius: 44rpx;
            padding: 4rpx 6%;
            border: 2rpx solid #fff;
            color: #fff;
            box-shadow: 0 0 40rpx rgba(243, 57, 42, 0.1);
            -webkit-transform: scale(0.5);
          }  
          img{
            width: 90rpx;
            height: 90rpx;
            border-radius: 100rpx;
          }
           
          p:nth-of-type(1){
            /*font-weight*/
            color: #333;
            /*font-family pingFangSC-Medium
            font-weight normal*/
            font-size: 28rpx;
            margin: 20rpx 0 10rpx;
          }
           
          p:nth-of-type(2){
            /*font-family pingFangSC-Regular*/
            font-size: 12px;
            margin: 10rpx 0; 
          }   
        }     
      }
        
      .moreItem{
        width: 100%;
        margin-top: 10rpx;
        font-size: 14px;
        color: #6c6c6c;
        /*font-family pingFangSC-Medium*/   
      }   
    }    
  }
  .theme{
    /*width 100%*/
    .theme_p{
      /*font-weight bold*/
      /*position relative*/
      padding: 50rpx 30rpx;
      margin-top: -40rpx;
      .leftBorder{
        display: inline-block;
        position: relative;
        top: 4rpx;
        height: 30rpx;
        border-left: 6rpx solid #7370FF;
        margin-right: 20rpx;
      }   
    } 
    .theme_content{
      margin: 0 4%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 30rpx rgba(209,209,209,0.22);
      border-radius: 10rpx;

      /*text-align center*/
      .theme_div{
        // display: inline-block;
        width: 44%;
        padding: 0 16rpx;
        margin: 32rpx 0;
        text-align: left;
        p{
          margin: 10rpx 0;
        }
        p:nth-of-type(1){
          /*font-weight bold*/
          font-size: 26rpx;
          color: #363636;
          /*font-family pingFangSC-Medium
          font-weight normal*/
          /*margin-top 20rpx*/
        }
         
        p:nth-of-type(2){
          font-size: 22rpx;
          /*font-family pingFangSC-Regular*/
        }
        img{
          width: 90rpx;
          height: 90rpx;
          float: right;
          margin-right: 10rpx;
        }    
      }
        
    }
      /*padding 0 30rpx*/
  }
  .banner{
    width: 100%;
    /*height 250rpx*/
    margin-top: 30rpx;
    div:nth-of-type(3){
      display: flex;
      justify-content: flex-start;
      /*margin-top 15px*/
    }

    // .lamititleswiper{
    //   clear: both;
    //   overflow: hidden;
    //   display: block;
    //   .kamiTtile {
    //     float: left;
    //   }
    //   .swiperwrap {
    //     float: right;
    //   }
    // }

    .todayTitle{
      text-align: center;
      margin-left: 20rpx;
      width: 20%;
      display: inline-block;
      /*padding 0 5px*/
      color: #fff;
      font-size: 24rpx;
      font-style: italic;
      font-weight: bold;
      background: linear-gradient(to right, #FF6D3B , #FFB152); /* 标准的语法 */
      height: 36rpx;
      line-height: 36rpx;
      border-radius: 36rpx;
    }
    img{
      width: 100%;
      height: 100%;
    }  
  }
  .hotCard {
    .hotCard_p{
      padding: 50rpx 30rpx;
      margin-top: -40rpx;
      .leftBorder{
        display: inline-block;
        position: relative;
        top: 4rpx;
        height: 30rpx;
        border-left: 6rpx solid #7370FF;
        margin-right: 20rpx;
      }  
    }   
    .hotCard_content{
       ul{
          text-align: center;   
          // li:nth-of-type(2){
          //   .imgBox{
          //     position: absolute;
          //     width: 94rpx;
          //     height: 94rpx;
          //     right: 0;
          //     top: -24rpx;
          //     background: url(../../assets/2@3x.png) no-repeat;
          //     background-size: 94rpx;
          //   }   
          // }
            
          // li:nth-of-type(3){
          //   .imgBox{
          //     position: absolute;
          //     width: 94rpx;
          //     height: 94rpx;
          //     right: 0;
          //     top: -24rpx;
          //     background: url('') no-repeat;
          //     background-size: 94rpx;
          //   }
          // }       
          li{
            display: inline-block;
            border-radius: 10rpx;
            box-shadow: 0px 6rpx 20rpx #eee;
            margin-top: 20rpx;
            margin-bottom: 10rpx;
            padding: 20rpx;
            position: relative;
            width: 85%;
                  
            a{
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
              
            .imgBox{
              position: absolute;
              width: 94rpx;
              height: 94rpx;
              right: 0;
              top: -0;
              img{
                width: 94rpx;
                height: 94rpx;
              }
            }  
            img{
              /*position absolute*/
              /*left 10px*/
              vertical-align: -30%;
              width: 37%;
              height: 144rpx;
              border-radius: 10rpx;
              margin-right: 30rpx;
            }
            div{
              line-height: 56rpx;
              display: inline-block;
              text-align: left;
              /*margin-left 10px*/
              p:nth-of-type(1){
                 /*font-family  pingFangSC-Medium
                font-weight normal*/
                color: #363636;
                font-size: 15px;
                max-width: 350rpx;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                /*font-weight bold*/
              }
               
              p:nth-of-type(2){
                /*font-family pingFangSC-Medium*/
                font-size: 13px;
                color: #9a9a9a;
                margin-top: -8rpx;
                max-width: 350rpx;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
                
            //  .itemTipsCss{
            //    display: inline-block;
            //     padding: 4rpx 10rpx;
            //     margin-right: 6rpx;
            //     color: #9a9a9a;
            //     /*font-family pingFangSC-Medium*/
            //     font-size: 11px;
            //     /*background-color #FFF8E4*/
            //     height: 30rpx;
            //     line-height: 30rpx;
            //     /*border-radius 4px
            //     border: .5px solid #bdbdbd;*/
            //     margin-top: 10rpx;
            //     max-width: 150rpx;
            //     overflow: hidden;
            //     white-space: nowrap;
            //     text-overflow: ellipsis;
            //     position: relative;
            //  }
                
            //  .itemTipsCss::after{
            //    content: "  ";
            //       position: absolute;
            //       left: 0;
            //       top: 0;
            //       z-index:-1;
            //       width: 195%;
            //       height:68rpx;
            //       border-radius: 16rpx;
            //       border:2rpx solid #bdbdbd;
            //       -webkit-transform-origin: 0 0;
            //       transform-origin: 0 0;
            //       -webkit-transform: scale(.5, .5);
            //       transform: scale(.5, .5);
            //  }     
            }     
          }    
       }   
    }    
  }    
}
#kamiTitlePic{
    width: 137rpx;
    height: 64rpx;
    margin-top: -10rpx;
    margin-left: 20rpx;
}
#theme-swiper1{
  width: 750rpx;
}
#box{
  height: 40rpx;
  line-height: 40rpx;
  overflow: hidden;
  transition: all 2s;
}
.anim{
  transition: all 1s;
}
#box li{
    /*line-height: 20px;*/
    /*padding-left:5px;*/
    font-size:12px;
}
.theme_transverseline{
    width: 45%;
    height: 2rpx;
    background: url(../../assets/hengxian.png) no-repeat;
    transform: scaley(0.6);
}
.theme_verticalline{
    width: 2rpx;
    height: 100rpx;
    background: url(../../assets/shuxian.png) no-repeat;
    margin-top: 10rpx;
    transform: scalex(0.6);
}
.itemTipsCss{
    max-width: 150rpx;
    height: 30rpx;
    line-height: 30rpx;
    padding: 2rpx 2rpx;
    margin-right: 6rpx;
    margin-top: 4rpx;
    font-size: 11px;
    overflow: hidden;
    white-space: nowrap;
    border: 2rpx solid #bdbdbd;
    border-radius: 8px;
    text-overflow: ellipsis;
    float:left;
    color: #9a9a9a;
    /*-webkit-transform: scale(0.5)*/
    /*transform: scale(0.5);*/
}
.itemTipsCss::after{
    content: "";
    width: 195%;
    height: 30rpx;
    line-height: 30rpx;
    padding: 4rpx;
    // margin-top: -40rpx;
    // margin-left: -57%;
    font-size: 11px;
    border: 2rpx solid #bdbdbd;
    border-radius: 8px;
    float: left;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}
.loading{
    margin-bottom: 100rpx;
    display: flex;
    justify-content: center;
    img{
      width: 50rpx;
      height: 50rpx;
    }
}
.noMore{
  text-align: center;
  p{
    font-size: 13px;
    line-height: 2;
    color:#666;
  }
} 
</style>
