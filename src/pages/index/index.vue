<template>
  <!-- 主页 -->
  <div> 
    <div class="card">
      <!-- 用于iphone不显示问题 -->
      <div id="zhanwei"></div>
      <!-- 蒙版  -->
      <div class="mengban"></div>
      <!-- 开奖页 -->
      <div class="kaijiang" v-if="showkaijiang">
        <img class="main_img" src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/kaijiang.png" mode="widthFix" alt="">
        
        <div class="kaijiang_btn">
          <button v-if="isshouquan" @click="toaward"></button>
          <button v-else open-type='getUserInfo' lang="zh_CN" @getuserinfo="onGotUserInfo"></button>
          <img class="kaijiang_button" mode="widthFix" src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/open_money.gif" alt="">          
        </div>
        <div class="kaijiang_title1">
          <p>哇 第一个猪年红包</p>
        </div>
        <div class="kaijiang_title2">
          <p>由您开启!</p>
        </div>
       
      </div>
      <!-- 奖品页 -->
      <div class="award" v-if="showaward">
        <img class="main_img" src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/award.png" mode="widthFix" alt="">
        <div class="award_title">
          <p>恭喜您获得￥{{award}}</p>
          <p>100金币=1元红包,可提现</p>
        </div>
        <div class="award_btn" @click="tofenxiang">
          <img class="award_button" mode="widthFix" src="../../assets/active/award_btn.png" alt=""> 
        </div>
        <div class="award_rule" @click="toactiveshuoming">
          <p>查看活动规则>></p>
        </div>
      </div>
      <!-- 分享好友助力页 -->
      <div class="share" v-if="showshare">
        <img class="main_img" src="../../assets/active/bg.jpg" mode="widthFix" alt="">
        <div class="share_swiper">
          <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
            <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in tixianUser" :key="index">
              <img :src="item.img" alt="">
              <span style="font-size:10px; color:#F22216;">{{item.name}}通过好友助力成功提现</span>
            </swiper-item>
          </swiper>
        </div>
        <div class="to_share_right">
          <button class="share_button" open-type='share'></button>
          <img class="share_right" mode="widthFix" src="../../assets/active/share_btn1.png" alt="">
        </div>
        <div class="share_userInfo">
          <div class="share_userimg">
            <img class="user_img" :src="userImg" alt="">
            <p>邀请<span style="font-size:26px;">{{haicharenshu}}</span>人</p>
            <p>即可获得￥{{award}}</p>
          </div>
        </div>
        <div class="share_main">
          <p>距结束：<span class="time">{{times.days}}</span>天<span class="time">{{times.hours}}</span>时<span class="time">{{times.mins}}</span>分<span class="time">{{times.secs}}</span></p>
          <p>{{peoplenum}}人已经兑换提现</p>
        </div>
        <div class="share_user" @click="tozhulixiangqing">
          <li v-for="(item,index) in userArr" :key="index">
            <img mode="widthFix" :src="item.img" alt="">
          </li>
        </div>
        <div class="share_btn" @click="tofenxiang">
          <button open-type='share'></button>
          <img class="share_button" mode="widthFix" src="../../assets/active/share_btn.png" alt=""> 
        </div>
        <div class="share_tips">
          <p>超过5人后，每增加1位好友可累积获得5-60金币不等，好友越多，提现金额越多</p>
        </div>
        
      </div>
      <!-- 助力完成页 -->
      <div class="complete" v-if="showcomplete">
        <img class="main_img" src="../../assets/active/bg.jpg" mode="widthFix" alt="">
        <div class="share_swiper">
          <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
            <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in tixianUser" :key="index">
              <img :src="item.img" alt="">
              <span style="font-size:10px; color:#F22216;">{{item.name}}通过好友助力成功提现</span>
            </swiper-item>
          </swiper>
        </div>
        <div class="to_share_right">
          <button class="share_button" open-type='share'></button>
          <img class="share_right" mode="widthFix" src="../../assets/active/share_btn1.png" alt="">
        </div>
        <div class="complete_title">
          <p>{{complete_ttt}}</p>
          <p>累积获得<span style="font-size:24px; font-weight:600;">￥{{count}}</span>金币</p>
          <img src="../../assets/active/complete_tips.png" mode="widthFix" alt="">
        </div>
        <div class="share_main">
          <p>距结束：<span class="time">{{times.days}}</span>天<span class="time">{{times.hours}}</span>时<span class="time">{{times.mins}}</span>分<span class="time">{{times.secs}}</span>秒</p>
        </div>
        <div class="share_user" @click="tozhulixiangqing">
          <li v-for="(item,index) in userArr" :key="index">
            <img mode="widthFix" :src="item.img" alt="">
            <!-- <span>{{item.name}}</span> -->
          </li>
        </div>
        <div class="complete_more" @click="tozhulixiangqing">
          <p>共有<span style='font-weight: 700;'>{{helpNum}}</span>位好友和你一起接龙</p>
          <p>查看>></p>
        </div>
        <div class="complete_btn">
          <button open-type='share'></button>
          <img class="totixian_button" @click="totixian" mode="widthFix" src="../../assets/active/tixian_button.png" alt="">
          <img class="complete_button" mode="widthFix" src="../../assets/active/complete_btn.png" alt="">
          
        </div>
        <div class="complete_tips">
          <p>账户余额：{{award}}金币</p>    
        </div>   
      </div>
      <!-- 帮助好友助力页 -->
      <div class="helphe" v-if="showhelphe">
        <img class="main_img" src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/helphe.png" mode="widthFix" alt="">
        <div class="helphe_title">
          <img src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/helphe_title.png" mode="widthFix" alt="">
        </div>
        <div class="helphe_user">
          <img class="helphe_userimg" :src="fenxiangImg" mode="widthFix" alt="">
          <p class="helphe_username">{{fenxiangname}}</p>
          <p class="helphe_usertitle">还差<span>1</span>人</p>
          <p class="helphe_usertitle">就可以兑换提现啦</p>
        </div>
        <div class="helphe_btn">  
          <button class="helphe_btn1" v-if="isshouquan"  @click="tosuccess"></button>
          <button class="helphe_btn1" v-else open-type='getUserInfo' lang="zh_CN" @getuserinfo="GotUserInfo"></button>
          <img class="helphe_button1" src="../../assets/active/helphe_btn1.png" mode="widthFix" alt="">
          <button class="helphe_btn2" @click="tokaijiang"></button>
          <img class="helphe_button2" src="../../assets/active/helphe_btn2.png" mode="widthFix" alt="">
        </div>
      
      </div>
      <!-- 助力成功 -->
      <div class="success" v-if="showsuccess">
        <img class="main_img" src="../../assets/active/success.png" mode="widthFix" alt="">
        <div class="success_title">
          <p>接龙成功啦</p>
        </div>
        <div class="success_tips">
          <img src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/success_tips.png" mode="widthFix" alt="">
          <p>小手抖一抖，红包就到手</p>
        </div>
        <div class="success_btn">
          <button @click="tokaijiang(1)"></button>
          <img class="success_button" mode="widthFix" src="../../assets/active/success_btn.png" alt=""> 
        </div>
       
      </div>
      <!-- 新版提现页 -->
      <div class="newtixian" v-if="shownewtixian">
        <img src="../../assets/active/bg.jpg" mode="widthFix" class="main_img" alt="">
        <div class="share_swiper">
          <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
            <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in tixianUser" :key="index">
              <img :src="item.img" alt="">
              <span style="font-size:10px; color:#F22216;">{{item.name}}通过好友助力成功提现</span>
            </swiper-item>
          </swiper>
        </div>
        <div class="to_share_right">
          <button class="share_button" open-type='share'></button>
          <img class="share_right" mode="widthFix" src="../../assets/active/share_btn1.png" alt="">
        </div>
        <div class="tixian_title">
          <p>可兑换现金</p>
          <p>{{tixianNum}}元</p>
          <!-- <img src="../../assets/active/tixian_tips.png" mode="widthFix" alt=""> -->
        </div>
        <div class="newtixian_tips">
          <div class="choose_kefu_tips">
            <!-- <p>A.小额提现</p> -->
            <p>1. 打开APP-我的-猪年发发发-兑换现金；</p>
            <p>2. 系统自动支付，最快3秒到账。</p>
            <p>（加客服微信，有机会获得白金合伙人体验权益）</p>
          </div>     
        </div>
        <div class="newtixian_button">
          <div class="choose_kefu_button" @click="tojiakefu">
            <img src="../../assets/active/kefu_img.png" alt="">
            <p class="choose_kefu_btn">客服咨询</p>       
          </div>
          <!-- <button open-type="launchApp" v-if="fromAPP" app-parameter="wechat" @error="launchAppError" @tap="goAPP">打开APP</button> -->

          <div class="choose_tixian_button">
            <p class="choose_tixian_btn">立即提现</p>
            <button @click="tokefu('下载APP','http://page.kamicard.com/download/kami_downloadApp_new.html')"></button>
          </div>
          
        </div>
        <div class="choose_shuoming" @click="toactiveshuoming()">
          <p>查看活动说明>></p>
        </div>
        
      </div>
      <!-- 提现方式选择页 -->
      <!-- <div class="choose" v-if="showchoose">
        <img class="main_img" src="../../assets/active/choose_bg.jpg" mode="widthFix" alt="">
        <div class="choose_title">
          <p>选择提现方式</p>
        </div>
        <div class="choose_kefu">
          <div class="choose_kefu_tips">
            <p>A.小额提现</p>
            <p>1. 红包金额小于等于5元，48小时内到账；</p>
            <p>2. 加客服微信，给您发送红包，<span>每天限定100人</span>；</p>
            <p>2. 有机会成为APP免费权益体验用户。</p>
          </div>
          <div class="choose_kefu_button" @click="totixian">
            <p>剩余名额：<span>{{leftNumber}}</span>人</p>
            <p class="choose_kefu_btn">小额提现</p>
          </div>
        </div>
        <div class="choose_weixin">
          <div class="choose_weixin_tips">
            <p>B.大额提现</p>
            <p>1. 打开卡秘信用卡APP-我的-猪年发发发-兑换；</p>
            <p>2. 系统自动支付，最快3秒到账。</p>
          </div>
          <div class="choose_weixin_button">
            <p class="choose_weixin_btn">大额提现</p>
            <button @click="tokefu('下载APP','http://page.kamicard.com/download/kami_downloadApp.html')"></button>
          </div>
        </div>
        <div class="choose_shuoming" @click="toactiveshuoming()">
          <p>查看活动说明>></p>
        </div>
      </div> -->
      <!-- 提现 -->
      <div class="tixian" v-if="showtixian">
        <img src="../../assets/active/bg.jpg" mode="widthFix" class="main_img" alt="">
        <div class="share_swiper">
          <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
            <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in tixianUser" :key="index">
              <img :src="item.img" alt="">
              <span style="font-size:10px; color:#F22216;">{{item.name}}通过好友助力成功提现</span>
            </swiper-item>
          </swiper>
        </div>
        <div class="to_share_right">
          <button class="share_button" open-type='share'></button>
          <img class="share_right" mode="widthFix" src="../../assets/active/share_btn1.png" alt="">
        </div>
        <div class="tixian_title">
          <p>可兑换现金</p>
          <p>{{tixianNum}}元</p>
          <img src="../../assets/active/tixian_tips.png" mode="widthFix" alt="">
        </div>
        <div class="tixian_input">
          <p>小提示：首次提现需要绑定手机号</p>
          <div class="tixian_input_phone">
            <input type="text" v-model="phoneNum" placeholder="输入手机号">
          </div>
          <div class="tixian_input_code">
            <input type="text" v-model="QRcode" placeholder="输入验证码">
            <div class="getcode" v-if="codejishi" @click="getcode">点击获取</div>
            <div class="getcode" v-else>{{codeTime}}秒</div>
          </div>
        </div>
        <div class="tixian_btn">
          <button class="phone_button" @click="bindphone()"></button>
          <span>确认</span>
          <img mode="widthFix" class="phone_button" src="../../assets/active/newtixian_btn.png" alt="">
        </div>
        <div class="tixian_tips" @click="toactiveshuoming">
          <p>查看活动说明 >></p>
        </div>
        
      </div>
      <!-- 提现页有手机 -->
      <div class="phone" v-if="showphone">
        <img src="../../assets/active/bg.jpg" mode="widthFix" class="main_img" alt="">
        <div class="share_swiper">
          <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
            <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in tixianUser" :key="index">
              <img :src="item.img" alt="">
              <span style="font-size:10px; color:#F22216;">{{item.name}}通过好友助力成功提现</span>
            </swiper-item>
          </swiper>
        </div>
        <div class="to_share_right">
          <button class="share_button" open-type='share'></button>
          <img class="share_right" mode="widthFix" src="../../assets/active/share_btn1.png" alt="">
        </div>
        <div class="tixian_title">
          <p>可兑换现金</p>
          <p>{{tixianNum}}元</p>
          <img src="../../assets/active/tixian_tips.png" mode="widthFix" alt="">
        </div>
        <div class="phone_num">
          <img src="../../assets/active/havephone_duihao.png" alt="">
          <p>已绑定手机号</p>
          <p>{{mob}}</p>
        </div>
        <div class="phone_btn">
          <button class="phone_button" @click="tonewtixian()"></button>
          <span>确认</span>
          <img mode="widthFix" class="phone_button" src="../../assets/active/newtixian_btn.png" alt="">
        </div>
        <div class="tixian_tips" @click="toactiveshuoming">
          <p>小提示：好友接龙越多，金币越多，兑换现金越多</p>
          <p>查看活动说明 >></p>
        </div>
        
      </div>
      <!-- 新版加客服页 -->
      <div class="newjiakefu" v-if="showjiakefu">
        <img src="../../assets/active/newjiakefu_bg.jpg" mode="widthFix" class="main_img" alt="">
    
        <div class="newjiakefu_erweima">
          <img src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/qrcode.jpg" @tap="previewImage" mode="widthFix" alt="">
          <!-- <img :src="arrCode[0]" @tap="previewImage" mode="widthFix" alt=""> -->
          <p>方法一：点击二维码-长按图片保存-添加客服</p>
        </div>

        <div class="newjiakefu_button">
          <p @click="copywx">点击复制微信号</p>
          <p>方法二：点击复制-微信添加朋友</p>
        </div>
      </div>
      <!-- 加客服页 -->
      <!-- <div class="jiakefu" v-if="showjiakefu">
        <img src="https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/jiakefu.png" mode="widthFix" class="main_img" alt="">
        <div class="jiakefu_title">
          <p>添加客服微信给您发红包</p>
        </div>
        <div class="jiakefu_erweima">
          <img :src="arrCode[0]" @tap="previewImage" mode="widthFix" alt="">
        </div>
        <div class="jiakefu_methods">
          <p>领取方式</p>
        </div>
        <div class="jiakefu_tips">
          <li>
            <img src="../../assets/active/jiakefu_coin.png" mode="widthFix" alt="">
            <p>方法1、点击二维码 -> 长按图片保存 -> 添加客服</p>
          </li>
          <li>
            <img src="../../assets/active/jiakefu_coin.png" mode="widthFix" alt="">
            <p>W-H77777</p>
            <p>点击复制，添加微信号</p>
          </li>
        </div>
      </div> -->
        
    </div>
    <vue-tab-bar 
      @fetch-index="clickIndexNav"
      :selectNavIndex=selectNavIndex
      :needButton="needButton"
      :handButton="handButton"
      :btnText="btnText">
    </vue-tab-bar>
  </div>        
</template>
<script>
  import md5 from 'js-md5';
  import Qs from 'qs';
  import vueTabBar from '../../components/tabBar'
  import {getHotBankInfoList, getContent, getTopicSelect, getBannerImg, getHotCard, getBannerTxt, registerHref, userOperation, getUserOpenid, postUser,postUserInfo, getTaskInfo, startTask, getRWInfo, helpHe, getCode, bandPhone, getLeftNum} from '../../requestAPI/requestAPI';
  import { setInterval, clearInterval } from 'timers';
  import { fail } from 'assert';
  export default {
    data(){
      return {
        showmengban: false, // 控制蒙版页显隐
        showkaijiang: false, // 控制开奖页显隐
        showaward: false,  // 控制奖品页显隐
        showshare: false,  // 控制分享好友页显隐
        showcomplete: false,  // 控制助力完成页显隐
        showhelphe: false,  // 控制帮助助力页显隐
        showsuccess: false,  // 控制助力成功页显隐
        showchoose: false,  // 控制选择提现方式页显隐
        showtixian: false,  // 控制提现页显隐
        showphone: false,  // 控制绑定手机页显隐
        showjiakefu: false,  // 控制加客服页显隐
        shownewtixian: false, // 控制新版提现页显隐
        helpNum: 0,  // 帮助助力人数
        title: '',
        url:'', 
        Url: '',
        urlStr:'',
        startTime: '',   // 记录任务开始时间，暂时没用到
        times:{
          days: '00',
          hours: '',
          mins: '',
          secs: ''
        },  // 助力计时
        award: '', // 奖金

        count: '' , // 累计金币
        userImg: require('../../assets/active/moren.png'), // 用户头像
        userName: '', // 用户昵称
        fenxiangname: '', // 分享者昵称
        iszhuli: '',  // 记录分享者的openid，并根据这个判断是否为帮别人助力的
        complete_ttt: '', // 记录助力完成，根据人数显示不同标语
        peoplenum: '', // 已取现人数
        completezhuli: false, // 记录助力人的活动状态，是否已经帮助力过
        secondxianshi: false, // 记录是否助力完成，并确定是否显示
        isshouquan: false, // 记录用户是否授过权
        phoneNum: '',  // 记录用户电话号码
        QRcode: '',  // 记录用户验证码
        codeTime: 60, 
        codetime: '', // 验证码计时器
        endtime: '',  // 活动结束时间
        codejishi: true, 
        tixianNum: 8.8, //可提现金额数
        haicharenshu: 5,  // 还有几人可以提现
        from: '', // 记录分享者来源
        // 记录帮助助力人信息
        userArr:[
          {
            img:require('../../assets/active/morentouxiang.png'),
            name: '待邀请'
          },
          {
            img:require('../../assets/active/morentouxiang.png'),
            name: '待邀请'
          },
          {
            img:require('../../assets/active/morentouxiang.png'),
            name: '待邀请'
          },
          {
            img:require('../../assets/active/morentouxiang.png'),
            name: '待邀请'
          },
          {
            img:require('../../assets/active/morentouxiang.png'),
            name: '待邀请'
          }
        ],
        // 已提现轮播图用户假数据
        tixianUser:[
          {
            img: require('../../assets/active/face_1.png'),
            name: 'AAA'
          },
          {
            img: require('../../assets/active/face_2.png'),
            name: 'Aimee'
          },{
            img: require('../../assets/active/face_3.png'),
            name: 'Mr. Ma'
          },{
            img: require('../../assets/active/face_4.png'),
            name: 'ohh'
          },{
            img: require('../../assets/active/face_5.png'),
            name: 'pong'
          },{
            img: require('../../assets/active/face_6.png'),
            name: 'Quan、'
          },{
            img: require('../../assets/active/face_7.png'),
            name: '阿甘'
          },{
            img: require('../../assets/active/face_8.png'),
            name: '毛小驴'
          },{
            img: require('../../assets/active/face_9.png'),
            name: '喵咪'
          },{
            img: require('../../assets/active/face_10.png'),
            name: '木公'
          },{
            img: require('../../assets/active/face_11.png'),
            name: '闹腾'
          },{
            img: require('../../assets/active/face_12.png'),
            name: '彭贵宝'
          },{
            img: require('../../assets/active/face_13.png'),
            name: '入魔、'
          },
        ],
        mob: '', // 用户手机号
        computetime: '', // 计时器
        fenxiangImg : '', // 分享者的头像
        arrCode: [
        ],  // 点击客服二维码在新窗口打开 所需数据
       
        isLogin: true,
        isActive :false,
        appear:true,
        tips:true,   
        userInfo:{
          openid: ''
        },
        leftNumber: '', // 选择提现方式页，剩余名额数
        fromAPP: '',  // 从APP跳转到小程序
      }
    },
    // 底部tabbar注册组件
    components: {
      vueTabBar,
    },   
    methods: {  
      // launchAppError(e) {
      //   console.log(e.detail.errMsg)
      // },
      // goAPP(e){
      //   // console.log(e)
      // },
      // 新用户点击开奖获取用户信息，并传到服务器
      onGotUserInfo: function(e) {
        let that = this
        // console.log(e)
        // console.log(e.mp.detail.userInfo)    
        if(e.target.userInfo) {
          // console.log('用户已经授权');
          that.userInfo.username= e.mp.detail.userInfo.nickName,
          that.userInfo.avatarUrl= e.mp.detail.userInfo.avatarUrl,
          that.userInfo.gender= e.mp.detail.userInfo.gender,
          that.userInfo.province= e.mp.detail.userInfo.province,
          that.userInfo.city= e.mp.detail.userInfo.city
          that.userInfo.encrydata= e.mp.detail.encryptedData
          that.userInfo.iv= e.mp.detail.iv
          that.isshouquan = true
          wx.login({
            success (res) {       
              if (res.code) {
                //发起网络请求,获取用户openid           
                getUserOpenid(res.code).then(data => {  
                  // console.log(data)
                  that.userInfo.openid = data.result.msg                   
                  wx.setStorage({
                    key: 'openID',
                    data: {
                      "openId":data.result.msg
                    }
                  })  
                  // 将用户信息传给后台
                  postUserInfo(that.userInfo).then(res=>{
                    // console.log('上传用户信息返回',res)
                    if(res.result.code == 10000){
                      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                         
                    }else if(res.result.code == 99999){
                      wx.showModal({
                        title: '提示',
                        content: '网络错误，请稍后重试！',
                        showCancel: false,
                        confirmText: '好的',
                        success: function(res) {
                          if (res.confirm) {
                            // console.log('用户点击确定');
                          }
                        }
                      })
                    }
                  })        
                })      
              } else {                         
                wx.showModal({
                  title: '提示',
                  content: '网络错误，请稍后重试！',
                  showCancel: false,
                  confirmText: '好的',
                  success: function(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                })
              }
            }
          })  
        } else {
          console.log('用户拒绝授权');
          //用户拒绝授权
          wx.showModal({
            title: '提示',
            content: '只有授权后才能领红包哦！',
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
      // 已授权用户点击开奖，跳转到开奖页
      toaward(){
        let that = this
        wx.getStorage({
          key:'openID',
          success:function(res){ 
            let id = res.data.openId
            startTask({openid: id}).then(res=>{
              // console.log('开始任务',res)
              if(res.result.code == 10000 ){
                getTaskInfo({openid: id}).then(res=>{
                  // console.log('获取任务信息',res)
                  that.award = res.data.coin
                  that.showkaijiang = false
                  that.showmengban = true
                  that.showaward = true
                  that.showshare= false
                  that.showcomplete= false
                  that.showhelphe= false
                  that.showsuccess= false
                  that.showchoose = false
                  that.showtixian= false
                  that.showphone= false
                  that.showjiakefu= false
                })
              } 
            })          
          }
        })
        
      },
      // 跳转到分享好友页
      tofenxiang(){       
        this.gettaskinfo()
        clearInterval(this.computetime)
        this.showaward = false
        this.showshare = true
      },
      // 助力人获取用户信息，并传到服务器
      GotUserInfo(e) {
        let that = this   
        // console.log(e)
        // console.log(e.mp.detail.userInfo)    
        if(e.target.userInfo) {
          // console.log('用户已经授权');
          that.userInfo.username= e.mp.detail.userInfo.nickName,
          that.userInfo.avatarUrl= e.mp.detail.userInfo.avatarUrl,
          that.userInfo.gender= e.mp.detail.userInfo.gender,
          that.userInfo.province= e.mp.detail.userInfo.province,
          that.userInfo.city= e.mp.detail.userInfo.city
          that.userInfo.encrydata= e.mp.detail.encryptedData
          that.userInfo.iv= e.mp.detail.iv
          // that.isshouquan = true
          // console.log('that.userinfo',that.userInfo)
          // 将用户信息传给后台
          postUserInfo(that.userInfo).then(res=>{
            // console.log('上传用户信息返回',res)
            if(res.result.code == 10000){
              // this.showkaijiang = false
              // this.helpHe = true
              // this.showaward = true
              this.isshouquan = true

              // 用户已经上传过信息也会返回99999
            }else if(res.result.code == 99999){
              wx.showModal({
                title: '提示',
                content: '网络错误，请稍后重试！',
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
          // let params = {
          //   tarid: that.iszhuli,
          //   curid: that.userInfo.openid
          // }
          // helpHe(params).then(res => {
          //   console.log(res)
          // })
          // 记录助力人的活动状态，是否已经帮忙助力过
          // this.isshouquan = true
          // this.completezhuli = true   
        } else {
          console.log('用户拒绝授权');
          //用户拒绝授权
          wx.showModal({
            title: '提示',
            content: '只有授权后才能帮好友助力哦！',
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
      // 已授权用户帮别人助力，跳转到助力完成页
      tosuccess(){   
        // console.log('主理人页面的用户信息',this.userInfo)
        // console.log('分享者的openid',this.iszhuli)    
        let that = this  
        wx.getStorage({
          key: 'openID',
          success:function(res){
            let params = {
              tarid: that.iszhuli,
              curid: res.data.openId
            }

            helpHe(params).then(res => {
              // console.log('帮助好友助力接口返回',res)
              if(res.result.code == 10000) {
                // console.log('助力成功')
                wx.showToast({
                  title: '助力成功',
                  icon: 'success',
                  duration: 1000
                })
                that.completezhuli = true
                that.showsuccess = true
                that.showmengban = true 
                that.showkaijiang= false
                that.showaward= false
                that.showshare= false
                that.showcomplete= false
                that.showhelphe= false
                that.showchoose = false
                that.showtixian= false
                that.showphone= false
                that.showjiakefu= false     
                wx.setStorage({
                  key: that.iszhuli,
                  data: {
                    "openId":that.iszhuli
                  }
                }) 
              } else if(res.result.msg == '您已为好友助力过了'){
                // console.log('帮助好友助力，返回99999，已助力过')
                wx.showToast({
                  title: '您已经为好友助力过了,自己也要加油哦！',
                  icon: 'none',
                  duration: 1500
                })
                that.completezhuli = true
                that.showmengban= false 
                that.showkaijiang= false
                that.showaward= false
                that.showshare= false
                that.showcomplete= false
                that.showhelphe= false
                that.showsuccess= false
                that.showchoose = false
                that.showtixian= false
                that.showphone= false
                that.showjiakefu= false
                that.gettaskinfo()
                wx.setStorage({
                  key: that.iszhuli,
                  data: {
                    "openId":that.iszhuli
                  }
                }) 
              } else if(res.result.code == 99998) {
                wx.showToast({
                  title: '不能给自己助力哦！',
                  icon: 'none',
                  duration: 1000
                })
                that.showmengban= false // 控制开奖页显隐
                that.showkaijiang= false
                that.showaward= false
                that.showshare= false
                that.showcomplete= false
                that.showhelphe= false
                that.showsuccess= false
                that.showchoose = false
                that.showtixian= false
                that.showphone= false
                that.showjiakefu= false  
              } else {
                wx.showModal({
                  title: '提示',
                  content: '网络错误，请稍后重试！',
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
          }
        })
      },

      // 从助力完成页跳到开奖页
      tokaijiang(params){
        // if(params == 1) {
        //   this.isshouquan = true
        //   this.showmengban = false
        //   this.showkaijiang = false
        //   this.showcomplete = false
        //   this.showshare = false
        //   this.showhelphe = false  
        //   this.showaward = false
        //   this.showsuccess = false
        //   this.showtixian= false
        //   this.showphone= false
        //   this.showjiakefu= false
        //   this.gettaskinfo()
        // } else {
          this.showkaijiang = false
          // this.showmengban = true
          this.showcomplete = false
          this.showshare = false
          this.showhelphe = false  
          this.showaward = false
          this.showsuccess = false
          this.showchoose = false
          this.showtixian= false
          this.showphone= false
          this.showjiakefu= false
          
          this.getRWstatus(1)
        // }
      },
      // 获取任务信息
      gettaskinfo(open){
        if(open){
          getTaskInfo({openid: open}).then(res=>{
            // console.log('分享者的信息',res)
            this.fenxiangImg = res.data.headurl
            this.fenxiangname = decodeURI(res.data.usname)
            // console.log(this.fenxiangname)
          })
        } else {
          let timestamp = Date.parse(new Date()) + "0"
          let xianziatime = timestamp.substring(0,10)
          let that = this
          // console.log('现在时间',xianziatime)
          wx.getStorage({
            key:'openID',
            success:function(res){  
              getTaskInfo({openid: res.data.openId}).then(res=>{
                // console.log('活动信息',res)
                wx.getStorage({
                  key: 'lingqurenshu',
                  success:function(res){
                    that.peoplenum = res.data.num
                    let num1 = parseInt(res.data.num + 5) 
                    wx.setStorage({
                      key: 'lingqurenshu',
                      data: {
                        "num": num1
                      }
                    })
                  },
                  fail: function(res){
                    that.peoplenum = 54687
                    wx.setStorage({
                      key: 'lingqurenshu',
                      data: {
                        "num": that.peoplenum
                      }
                    })
                  },
                })
                that.award = res.data.coin
                that.count = res.data.addup
                that.startTime = res.data.stime
                if(res.data.headurl == ' '|| res.data.headurl==null ||res.data.headurl == ''){
                  
                } else {
                  that.userImg = res.data.headurl     
                }

                that.helpNum = res.data.peoples
                if(res.data.peoples == 5){
                  that.complete_ttt = '你的好友真给力!'
                } else if(5 <res.data.peoples <= 20) {
                  that.complete_ttt = '你的好友好多呀！'
                } else if(20 <res.data.peoples <= 50) {
                  that.complete_ttt = '哟，你真的很受欢迎！'
                } else if(50 <res.data.peoples <= 100) {
                  that.complete_ttt = '你的人气真让人嫉妒！'
                } else if(100 <res.data.peoples ) {
                  that.complete_ttt = '你的好友遍布天下！'
                } 
                that.userName = decodeURI(res.data.usname)
                that.tixianNum = res.data.coin / 100
                that.mob = res.data.mob
                if(res.data.peoplesinfo != ' '){
                  let json = JSON.parse(res.data.peoplesinfo)
                  // console.log("json",json)
                  for(let i = 0; i< json.length; i++){
                    if(json[i].fheadurl == null || json[i].fheadurl== ''){
                      that.userArr[i].img='https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132'
                    } else{
                      that.userArr[i].name = decodeURI(json[i].fname)
                      that.userArr[i].img = json[i].fheadurl
                    }
                    
                  }
                  // console.log('userArr',that.userArr)
                } 
                if(res.data.peoples >= 5){
                  that.haicharenshu = 0
                  that.showmengban = true
                  that.showcomplete = true
                  that.showaward = false
                  that.showkaijiang = false
                  that.showshare = false
                  that.showhelphe = false
                  that.showsuccess = false 
                  that.showchoose = false
                  that.showtixian= false
                  that.showphone= false
                  that.showjiakefu= false
                  if(that.endtime==null ||that.endtime==''){
                    that.endtime = 1551369600
                  } 
                  
                  let times = that.endtime - xianziatime
                  that.times.secs = parseInt(times%60) 
                  that.times.mins = parseInt(times/60%60)
                  that.times.hours = parseInt(times/3600%24)
                  that.times.days = parseInt(times/86400)
                 
                  if(that.times.secs<10){
                    that.times.secs = "0" + that.times.secs
                  }
                  if(that.times.mins<10){
                    that.times.mins = "0" + that.times.mins
                  }
                  if(that.times.hours<10){
                    that.times.hours = "0" + that.times.hours
                  }

                  that.computetime = setInterval(()=>{
                    // this.times.secs += 1
                    that.times.secs = parseInt(that.times.secs) - 1
                    // console.log('secs',that.times.secs)

                    if(that.times.secs == -1){
                      // console.log('22222')
                      that.times.secs = 59
                      that.times.mins = parseInt(that.times.mins) - 1
                      if(that.times.mins == -1){
                        that.times.mins = 59
                        that.times.hours = parseInt(that.times.hours) - 1
                        if(that.times.hours = -1){
                          that.times.hours = 23
                          that.times.days = parseInt(that.times.days) - 1
                        } else if(that.times.hours<10){
                          that.times.hours = "0"+that.times.hours
                        }
                      } else if(that.times.mins<10){
                        that.times.mins = "0"+that.times.mins
                      }
                    } else if(that.times.secs<10){
                      that.times.secs = "0"+that.times.secs
                    }
                  },1000)
                } else {  
                  that.haicharenshu = 5 - res.data.peoples
                  that.showmengban = true
                  that.showshare = true
                  that.showaward = false
                  that.showkaijiang = false
                  that.showcomplete = false
                  that.showhelphe = false
                  that.showsuccess = false
                  that.showchoose = false
                  that.showtixian= false
                  that.showphone= false
                  that.showjiakefu= false
                  if(that.endtime==null ||that.endtime==''){
                    that.endtime = 1551369600
                  } 
                    let times = that.endtime - xianziatime
                    that.times.secs = parseInt(times%60) 
                    that.times.mins = parseInt(times/60%60)
                    that.times.hours = parseInt(times/3600%24)
                    that.times.days = parseInt(times/86400)
                    // console.log('xianzai',xianziatime)
                    // console.log('times',times)
                    // console.log('secs',that.times.secs)
                    // console.log('mins',that.times.mins)
                    // console.log('hours',that.times.hours)
                    // console.log('days',that.times.days)
                    if(that.times.secs<10){
                      that.times.secs = "0" + that.times.secs
                    }
                    if(that.times.mins<10){
                      that.times.mins = "0" + that.times.mins
                    }
                    if(that.times.hours<10){
                      that.times.hours = "0" + that.times.hours
                    }
                    that.computetime = setInterval(()=>{
                    // this.times.secs += 1
                    that.times.secs = parseInt(that.times.secs) - 1
                    // console.log('secs',that.times.secs)

                    if(that.times.secs == -1){
                      // console.log('22222')
                      that.times.secs = 59
                      that.times.mins = parseInt(that.times.mins) - 1
                      if(that.times.mins == -1){
                        that.times.mins = 59
                        that.times.hours = parseInt(that.times.hours) - 1
                        if(that.times.hours = -1){
                          that.times.hours = 23
                          that.times.days = parseInt(that.times.days) - 1
                        } else if(that.times.hours<10){
                          that.times.hours = "0"+that.times.hours
                        }
                      } else if(that.times.mins<10){
                        that.times.mins = "0"+that.times.mins
                      }
                    } else if(that.times.secs<10){
                      that.times.secs = "0"+that.times.secs
                    }
                  },1000)
                }
              })
            }
          })
        }
      },
      // 获取任务状态
      getRWstatus(option){    
        let that = this 
        if(option){
          // 获取任务状态
          wx.getStorage({
            key:'openID',
            success:function(res){    
              // console.log(res)
              if(res.data.openId){
                let openID = res.data.openId
                // 获取任务状态
                getRWInfo({openid: res.data.openId}).then(res => {  
                  // console.log('任务状态22',res) 
                  // 未授权状态
                  if(res.data.peoplestatus == 0){
                    // console.log('wei授权')          
                    that.isshouquan = false
                    that.showmengban = true
                    that.showkaijiang = true
                    that.showaward = false
                    that.showshare = false
                    that.showcomplete = false
                    that.showhelphe = false
                    that.showsuccess = false
                    that.showjiakefu= false
                    that.showchoose = false
                    that.showtixian= false
                    that.showphone= false
                    // console.log('showkaijiang',that.showkaijiang)
                  } else if(res.data.peoplestatus == 1){
                    // console.log('执行 已授权')
                    that.isshouquan = true
                    // 若任务未激活
                    if(res.data.status == 0){
                      that.showmengban = true
                      that.showkaijiang = true
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showchoose = false
                      that.showtixian= false
                      that.showphone= false
                      // 任务已激活
                    } else if(res.data.status == 1){  
                      // console.log('aaa')
                        clearInterval(that.computetime) 
                        that.showmengban = false
                        that.showkaijiang = false
                        that.showaward = false
                        that.showshare = false
                        that.showcomplete = false
                        that.showhelphe = false
                        that.showsuccess = false
                        that.showjiakefu= false
                        that.showchoose = false
                        that.showtixian= false
                        that.showphone= false
                        that.gettaskinfo()
                      // 任务已完成
                    } else if(res.data.status == 2){
                      that.showmengban = false
                      that.showkaijiang = false
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showtixian= false
                      that.showphone= false
                      // 活动已结束
                    } else if(res.data.status == 3){
                      that.showmengban = false
                      that.showkaijiang = false
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showchoose = false
                      that.showjiakefu= false
                      that.showtixian= false
                      that.showphone= false
                    } 
                  }     
                })
              }else{
            
              }
              
            },
          })
        } else {
          // 获取任务状态
          wx.getStorage({
            key:'openID',
            success:function(res){    
              // console.log('助力人的openid',res)
              if(res.data.openId){
                let openID = res.data.openId
                // 获取任务状态
                getRWInfo({openid: res.data.openId}).then(res => {  
                  // console.log('助力人任务状态',res) 
                  // 未授权状态
                  if(res.data.peoplestatus == 0){
                    // console.log('isshouquan',res.data.peoplestatus)
                    that.isshouquan = false
                    that.showmengban = true
                    that.showkaijiang = true
                    that.showaward = false
                    that.showshare = false
                    that.showcomplete = false
                    that.showhelphe = false
                    that.showsuccess = false
                    that.showjiakefu= false
                    that.showchoose = false
                    that.showtixian= false
                    that.showphone= false

                  } else if(res.data.peoplestatus == 1){
                    // console.log('bbb')
                    that.isshouquan = true
                    // 若任务未激活
                    if(res.data.status == 0){
                      that.showmengban = true
                      that.showkaijiang = true
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showchoose = false
                      that.showtixian= false
                      that.showphone= false
                      // 任务已激活
                    } else if(res.data.status == 1){  
                      // clearInterval(that.computetime) 
                        that.showmengban = false
                        that.showkaijiang = false
                        that.showaward = false
                        that.showshare = false
                        that.showcomplete = false
                        that.showhelphe = false
                        that.showsuccess = false
                        that.showjiakefu= false
                        that.showchoose = false
                        that.showtixian= false
                        that.showphone= false
                        // that.gettaskinfo()
                      // 任务已完成
                    } else if(res.data.status == 2){
                      that.showmengban = false
                      that.showkaijiang = false
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showchoose = false
                      that.showtixian= false
                      that.showphone= false
                      // 活动已结束
                    } else if(res.data.status == 3){
                      that.showmengban = false
                      that.showkaijiang = false
                      that.showaward = false
                      that.showshare = false
                      that.showcomplete = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showchoose = false
                      that.showtixian= false
                      that.showphone= false
                    } 
                  }     
                })
              }else{
    
              }
            },
          })
        } 
      },
      // 从浮窗进入活动页
      toactive(optiom){
        // console.log(this.computetime)
        clearInterval(this.computetime)
        // 助力人，走一波逻辑
        if(this.iszhuli){
          // 助力完成，显示它自己的任务状态
          if(this.completezhuli){
            // console.log('助力完成')
            clearInterval(this.computetime)
            // this.showmengban = true
            this.showkaijiang = false  
            this.showshare = false
            this.showhelphe = false
            this.showaward = false
            this.showcomplete = false
            this.showsuccess = false
            this.showjiakefu= false
            this.showchoose = false
            this.showtixian= false
            this.showphone= false
            this.getRWstatus(1)
          // 助力未完成，显示帮好友助力页面
          } else {
            this.showmengban = true
            this.showkaijiang = false  
            this.showshare = false
            this.showhelphe = true
            this.showkaijiang = false
            this.showaward = false
            this.showcomplete = false
            this.showsuccess = false
            this.showjiakefu= false
            this.showchoose = false
            this.showtixian= false
            this.showphone= false
          }
        // 非助力人，获取任务状态
        } else {
          // this.showkaijiang = true
          // this.showmengban = true
          // 获取任务状态
          this.getRWstatus(1)
          // this.gettaskinfo()
        }
      },
      // 去新版提现页面
      tonewtixian(){
        let that  = this       
        this.showmengban= true, // 控制开奖页显隐
        this.showkaijiang= false,
        this.showaward= false,
        this.showshare= false,
        this.showcomplete= false,
        this.showhelphe= false,
        this.showsuccess= false
        this.showtixian = false
        this.showchoose = false
        this.showphone = false
        this.showjiakefu= false
        this.shownewtixian = true
        // 获取剩余金币和客服头像地址
        getLeftNum().then(res => { 
          // console.log('res',res)
          if(res.result.code == 10000){
            this.leftNumber = res.data.count
            this.arrCode.push(res.data.qrcodeurl)
          } else {
            this.leftNumber = 0
            this.arrCode.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/qrcode.jpg')
          }
        })
      },
      // 去选择提现方式页面
      tochoose(){
        this.showmengban= true, // 控制开奖页显隐
        this.showkaijiang= false,
        this.showaward= false,
        this.showshare= false,
        this.showcomplete= false,
        this.showhelphe= false,
        this.showsuccess= false
        this.showchoose = false
        this.showtixian = false
        this.showphone = false
        this.showjiakefu= false
        this.showchoose = true
        // 获取剩余金币和客服头像地址
        getLeftNum().then(res => { 
          // console.log('res',res)
          if(res.result.code == 10000){
            this.leftNumber = res.data.count
            this.arrCode.push(res.data.qrcodeurl)
          } else {
            this.leftNumber = 0
            this.arrCode.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/qrcode.jpg')
          }
        })
      },
      // 去提现页面
      // totixian(){
      //   let that  = this
      //   if(this.award>500){
      //     wx.showModal({
      //       title: '温馨提示',
      //       content: '您的财富过多（多于5元 ），请使用大额提现~',
      //       showCancel : false,
      //       confirmText: '立即提现',
      //       success(res) {
      //         if (res.confirm) {
      //             // console.log('用户点击确定');
      //             that.tokefu('下载APP','http://page.kamicard.com/download/kami_downloadApp.html')
      //         } else if (res.cancel) {
      //             console.log('用户点击取消')
      //         }
      //       }
      //     })
      //   } else {
      //     if(this.leftNumber==0){
      //       wx.showModal({
      //         title: '温馨提示',
      //         content: '名额已满，继续努力去大额提现吧~',
      //         showCancel : false,
      //         confirmText: '继续助力',
      //         success(res) {
      //           if (res.confirm) {
      //               // console.log('用户点击确定');
      //           } else if (res.cancel) {
      //               console.log('用户点击取消')
      //           }
      //         }
      //       })
      //     } else {
      //       this.showmengban= true, // 控制开奖页显隐
      //       this.showkaijiang= false,
      //       this.showaward= false,
      //       this.showshare= false,
      //       this.showcomplete= false,
      //       this.showhelphe= false,
      //       this.showsuccess= false
      //       this.showtixian = false
      //       this.showchoose = false
      //       this.showphone = false
      //       this.showjiakefu= false

      //       if(this.mob == ' '){
      //         this.showtixian= true
      //         this.showphone = false
      //       } else {
      //         this.showphone = true
      //         this.showtixian= false
      //       }
      //     }  
      //   }
        
      // },
      // 去提现页面
      totixian(){
        let that  = this
        // console.log(this.award)
        if(this.award>=10) {
          this.showmengban= true, // 控制开奖页显隐
          this.showkaijiang= false,
          this.showaward= false,
          this.showshare= false,
          this.showcomplete= false,
          this.showhelphe= false,
          this.showsuccess= false
          this.showtixian = false
          this.showchoose = false
          this.showphone = false
          this.showjiakefu= false

          if(this.mob == ' '){
            this.showtixian= true
            this.showphone = false
          } else {
            this.showphone = true
            this.showtixian= false
          }
        } else {
          that.goshare = true           
          wx.showModal({
            title: '温馨提示',
            content: "只有红包大于1元才能提现哦，您只需再邀请一位好友接龙就可以提现啦！",
            showCancel: false,
            success(res) {
              if (res.confirm) {
                // console.log('用户点击确定')
                // that.onShareAppMessage()
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      },
      // 提现页验证码计时
      getcode(){
        // console.log(this.phoneNum)
        let reg=/^((1[3,5,8][0-9])|(14[5,7])|(166)|(17[0,6,7,8])|(19[7]))\d{8}$/;
        if(!reg.test(this.phoneNum)){
          wx.showToast({
            title: '手机号错误',
            icon: 'loading',
            duration: 500
          })
        } else{
          getCode({mob:this.phoneNum}).then(res => {
            console.log(res)
          })
          this.codejishi = false
          this.codetime = setInterval(()=>{
            // this.times.secs += 1
            this.codeTime = parseInt(this.codeTime) - 1
            
            if(this.codeTime<10){
              this.codeTime = "0"+ this.codeTime
            } 
            if (this.codeTime == "00"){
              this.codejishi = true
              this.codeTime = 60
              clearInterval(this.codetime)
            }
            // console.log(this.codeTime)
          },1000)
        }  
      },  
      // 绑定电话号码
      bindphone(){
        let that = this
        let params ={
          openid: '',
          mob: '',
          code: ''
        }
        params.openid = this.userInfo.openid
        params.mob = this.phoneNum
        params.code = this.QRcode
        // console.log(params)
        if(params.mob=='' ||params.code==''){
          wx.showToast({
            title: '手机号或验证码错误',
            icon: 'none',
            duration: 500
          })
        } else {
          bandPhone(params).then(res => {
            console.log(res)
            if(res.result.code == 10000){
              wx.showToast({
                title: '绑定成功',
                icon: 'success',
                duration: 500
              })
              that.tonewtixian()
            } else {
              wx.showToast({
                title: '手机号或验证码错误',
                icon: 'none',
                duration: 500
              })
            }
          })
        } 
      },
      // 加客服页
      tojiakefu(){
        this.showkaijiang= false,
        this.showaward= false,
        this.showshare= false,
        this.showcomplete= false,
        this.showhelphe= false,
        this.showsuccess= false,
        this.showchoose = false
        this.showtixian= false,
        this.shownewtixian= false,
        this.showphone= false,
        this.showjiakefu= true
        // console.log('arrCode',this.arrCode)
      },
      // 加客服页点击图片在新窗口打开
      previewImage: function (e) { 
        let that = this 
        let current=e.target.dataset.src;
        // console.log(this.arrCode)
        // console.log(current)
		    wx.previewImage({
          current: that.arrCode[0], // 当前显示图片的http链接
          urls: that.arrCode // 需要预览的图片http链接列表
        })
        // wx.getImageInfo({// 获取图片信息（此处可不要）
        //   src: 'http://download.pcuion.com/app2_0/wxqcode.jpg',
        //   success: function (res) {
        //     // console.log(res.width)
        //     // console.log(res.height)
        //   }
        // })

      },
      // 加客服页复制微信号
      copywx(){
        wx.setClipboardData({
          data: 'W-H77777',
          success: function(res) {
            // self.setData({copyTip:true}),
            // wx.showModal({
            // title: '提示',
            // content: '复制成功',
            // success: function(res) {
            //   if (res.confirm) {
            //     console.log('确定')
            //   } else if (res.cancel) {
            //     console.log('取消')
            //   }
            }
      })

      },
      // 跳转到活动说明
      toactiveshuoming() {
        wx.navigateTo({ 
          url: "/pages/activeshuoming/main" 
        });
      },
      // 跳转到助力人详情页
      tozhulixiangqing(){
        wx.navigateTo({ 
          url: "/pages/zhulixiangqing/main" 
        });
      },
      launchAppError(e) {
        console.log(e.detail.errMsg)
      },
      // 跳转到中间页
      tokefu(title,url){
        let pages = getCurrentPages();
        let currPage = pages[pages.length - 1];   //当前页面
        let prevPage = pages[pages.length - 2];  //上一个页面
        currPage.setData({
          urlStr: url
        });
        wx.navigateTo({ 
            url: `/pages/link/main?title=${title}`
        });
      },  
     
      // 设置已领取红包人数
      setlingqurenshu(){
        let that = this
        wx.getStorage({
          key: 'lingqurenshu',
          success:function(res){
            let num1 = parseInt(res.data.num + 5) 
            wx.setStorage({
              key: 'lingqurenshu',
              data: {
                "num": num1
              }
            })
          },
          fail:function(res){
            let num = Math.floor(Math.random()*50000) +50000
            // console.log('num',num)
            // console.log('获取时间失败',res)
            wx.setStorage({
              key: 'lingqurenshu',
              data: {
                "num": num
              }
            })
          }
        })
      },  
      // 判断是否超过两小时
      judgeTime(){
        let that = this
        let timestamp = Date.parse(new Date()) + "0"
        let xianziatime = timestamp.substring(0,10)
        // console.log('现在时间',xianziatime)
        wx.getStorage({
          key: 'time',
          success:function(res){
            // console.log('获取时间storage',res)
            if(xianziatime - res.data.time > 1200) {
              // console.log('超过二十分钟，重新请求')
              wx.setStorage({
                key: 'time',
                data: {
                  "time": xianziatime
                }
              })
              that.getcontent()
            } else {
              // console.log('未超过2小时')
            }
          },
          fail:function(res){
            // console.log('获取时间失败',res)
            that.getcontent()
            wx.setStorage({
              key: 'time',
              data: {
                "time": xianziatime
              }
            })
          }
        })
      },
      // 判断是否显示真正内容
      getcontent(){
        let that = this
        getContent().then(data => {
          // console.log('调用一次',data)
          if(data.end == '' || data.end == null){
            this.endtime = 1551369600
          } else {
            this.endtime = data.end
          }
          wx.setStorage({
            key: 'ENDTIME',
            data: {
              "time": this.endtime
            }
          })
        })   
      },
      
    },
    onLoad(options) {  
      let that = this
      // console.log('option',options)
      const updateManager = wx.getUpdateManager()

      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本自动提现已经准备好，是否重启应用？',
          showCancel : false,
          confirmText: '立即重启',
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        wx.hideLoading();
        wx.showModal({
          title: '升级失败',
          content: '新版本下载失败，请检查网络！',
          showCancel: false
        });

      })
      if(options.from == 3){
        console.log('从APP跳过来的')
        // this.fromAPP = true
      }
      if(options.scene){
        // let scene=decodeURIComponent(options.scene);
        this.iszhuli= options.scene
        //&是我们定义的参数链接方式
        // this.iszhuli=options.scene.split("&")[0];
        // let recommendId=options.scene.split('&')[1];
        //其他逻辑处理。。。。。
      } else {
        this.iszhuli = options.userId; 
        this.from = options.from
      }  
      this.secondxianshi = false 
      this.setlingqurenshu()
      this.judgeTime()
                
    },
    //页面设置转发功能
    onShareAppMessage: function (res) {
      return {
        title: `你的好友正在红包接龙，他已抢到${this.count/100}元，快来支援他！`,
        imageUrl: 'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/share_pig.jpg',
        path: `/pages/index/main?userId=${this.userInfo.openid}&from=1`
      }
    },
    onShow(){ 
      let that = this
      clearInterval(that.computetime)
      this.showmengban = false  
      this.showkaijiang = false
      this.showaward = false
      this.showshare = false
      this.showcomplete = false
      this.showhelphe = false
      this.showsuccess = false
      this.showchoose = false
      this.showjiakefu= false
      this.showtixian= false
      this.shownewtixian= false
      this.showphone = false

      this.arrCode = []
      
      // 是助力人
      if(this.iszhuli){   
        wx.login({
          success (res) {       
            if (res.code) {
              //发起网络请求,获取用户openid           
              getUserOpenid(res.code).then(data => {  
                that.userInfo.openid = data.result.msg                   
                wx.setStorage({
                  key: 'openID',
                  data: {
                    "openId":data.result.msg
                  }
                }) 
                wx.getStorage({
                  key:'openID',
                  success:function(res){
                    // 助力人点击自己的分享
                    if(res.data.openId == that.iszhuli){
                      that.showmengban = false
                      that.showcomplete = false
                      that.showaward = false
                      that.showkaijiang = false
                      that.showshare = false
                      that.showhelphe = false
                      that.showsuccess = false
                      that.showjiakefu= false
                      that.showchoose = false
                      that.showtixian= false
                      that.showphone = false
                      that.completezhuli = true
                      that.gettaskinfo()
                      // 助力人点击别人的分享
                    } else {
                      // 获取助力人的授权状态
                      getRWInfo({openid: res.data.openId}).then(res => { 

                        // 助力人未授权，显示帮好友助力页面，且按钮为获取用户信息功能
                        if(res.data.peoplestatus == 0){
                          // console.log('isshouquan',res.data.peoplestatus)
                          that.isshouquan = false
                          that.showmengban = true
                          that.showkaijiang = false
                          that.showaward = false
                          that.showshare = false
                          that.showcomplete = false
                          that.showhelphe = true
                          that.showsuccess = false
                          that.showjiakefu= false
                          that.showchoose = false
                          that.showtixian= false
                          that.showphone = false
                          that.gettaskinfo(that.iszhuli)
                          // 助力人已授权，显示帮好友助力页面，按钮功能为帮好友助力
                        } else if(res.data.peoplestatus == 1){
                          that.isshouquan = true
                          // console.log('secondxianshi',that.secondxianshi)   
                          if(that.secondxianshi  == true){
                            that.showmengban = false
                            that.showkaijiang = false
                            that.showaward = false
                            that.showshare = false
                            that.showcomplete = false
                            that.showhelphe = false
                            that.showsuccess = false
                            that.showjiakefu= false
                            that.showchoose = false
                            that.showtixian= false
                            that.showphone = false
                            that.gettaskinfo()
                          } else {               
                            wx.getStorage({ 
                              key: that.iszhuli,
                              // 找到了 说明已经帮他授权过
                              success:function(res){
                                // console.log('onload助力')
                                wx.showToast({
                                  title: '您已经为好友助力过了,自己也要加油哦！',
                                  icon: 'none',
                                  duration: 1500
                                })
                                that.isshouquan = true
                                that.showmengban = false
                                that.showshare = false
                                that.showhelphe = false
                                that.showaward = false
                                that.showkaijiang = false
                                that.showsuccess = false
                                that.showjiakefu= false
                                that.showchoose = false
                                that.showtixian= false
                                that.showphone = false
                                that.completezhuli = true
                                that.secondxianshi = true  
                                that.gettaskinfo()
                                // console.log('',that.secondxianshi)
                              },
                              // 没找到，说明未帮人助力过，或缓存被清空
                              fail:function(res){
                                that.isshouquan = true
                                that.showmengban = true
                                that.showshare = false
                                that.showhelphe = true
                                that.showaward = false
                                that.showkaijiang = false
                                that.showshare = false
                                that.showsuccess = false
                                that.showjiakefu= false
                                that.showchoose = false
                                that.showtixian= false
                                that.showphone = false
                                // console.log('助力人的openid',that.iszhuli)
                                that.gettaskinfo(that.iszhuli)

                              } 
                            })  
                          }
                        }
                        
                      })
                    }
                  }
                })  
              })      
            } else {            
              console.log('助力人openid获取失败')
            }   
          }   
        })
      // 不是助力人
      } else {
        wx.login({
          success (res) {       
            if (res.code) {
              //发起网络请求,获取新用户openid           
              getUserOpenid(res.code).then(data => {  
                // console.log(data)
                that.userInfo.openid = data.result.msg                   
                wx.setStorage({
                  key: 'openID',
                  data: {
                    "openId":data.result.msg
                  }
                }) 
                that.getRWstatus(1)
              })      
            } else {               
            }
          }
        })
      }  
     
      // 用于tabbar判断
      this.selectNavIndex = 0
    }, 
    // 触底刷新
    onReachBottom() {
        
    },   
  } 
</script>

<style lang='scss' scoped>

.card {
  overflow: auto;
  background: #760A00;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin-bottom: 100rpx;
  .active_fuchuang{
    position: fixed;
    right: 20rpx;
    bottom: 15%;
    width: 176rpx;
    height: 186rpx;
    z-index: 8;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .kaijiang{
    z-index: 10;
    // max-width: 600rpx;
    width: 750rpx;
    height: 966rpx;
    position: fixed;
    // left: 75rpx;
    top: 24rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 102%;
      top: -12rpx;
      left: -8rpx;
    }
    
    .kaijiang_btn {
      width: 256rpx;
      height: 268rpx;
      position: absolute;
      top: 384rpx;
      // bottom: 0;
      left: 248rpx;
      // right: 0;
      z-index: 11;
      button{
        z-index: 12;
        width: 100%;
        height: 100%;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      .kaijiang_button {
        // width: 160rpx;
        // height: 165rpx;
        width: 80%;
      }
    }
    .kaijiang_title1{
      position: absolute;
      width: 350rpx;
      height: 40rpx;
      left: 202rpx;
      top: 630rpx;
      p{
        color: #FCD514;
        font-size: 21px;
      }
    }
    .kaijiang_title2{
      position: absolute;
      width: 226rpx;
      height: 51rpx;
      left: 264rpx;
      top: 694rpx;
      p{
        color: #FCD514;
        font-family:PingFangSC-Semibold;
        font-weight:500;
        font-size: 26px;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .award{
    z-index: 10;
    width: 613rpx;
    height: 971rpx;
    position: fixed;
    left: 66rpx;
    top: 41rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .award_title{
      position: absolute;
      width: 452rpx;
      top: 570rpx;
      left: 93rpx;
      // right: 93rpx;
      
      p:nth-of-type(1){
        font-size: 29px;
        color: #FCD514;
      }
      p:nth-of-type(2){
        margin-top: 10rpx;
        font-size: 11px;
        color: #FCD514;
      }
    }
    .award_rule{
      position: absolute;
      top: 299rpx;
      left: 506rpx;
      width: 104rpx;
      height: 61rpx;
      img{
        width: 100%;
      }
    }
    .award_rule {
      position: absolute;
      top: 841rpx;
      left: 96rpx;
      width: 453rpx;
      height: 86rpx;
      p{
        display: block;
        position: absolute;
        top: 25rpx;
        left: 0rpx;
        width: 100%;
        font-weight: 500;
        height: 20rpx;
        color: #9C0202;
        font-size: 13px;
        // font-weight: 700;
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .award_btn {
      width: 434rpx;
      height: 76rpx;
      position: absolute;
      top: 724rpx;
      left: 98rpx;
      z-index: 11;
      .award_button{
        width: 100%;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .share{
    z-index: 10;
    width: 604rpx;
    height: 1003rpx;
    position: fixed;
    left: 79rpx;
    top: 5rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center; 
    .share_swiper{
      position: absolute;
      font-size: 10px;
      color: #F22216;
      top: 80rpx;
      left: 60rpx;
      width: 350rpx;
      height: 42rpx;
      z-index: 12;
      text-align: left;
      float: left;    
      swiper-item{
        height: 42rpx;
      }
      img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      position: absolute;
      top: 73rpx;
      right: 34rpx;
      width: 80rpx;
      height: 40rpx;
      z-index: 12;
      .share_button{
        z-index: 12;
        position: absolute;
        top: 0;
        right: 0; 
        height: 60rpx;
        width: 100rpx; 
        opacity: 0;    
        padding: 0;    
      }
      .share_right{
        width: 100%;
        position: absolute;
        top: 0;
        right: -1rpx;
      }
      // img{
      //   height: 20rpx;
      // }
    }
    .share_userInfo{
      position: absolute;
      width: 350rpx;
      height: 260rpx;
      left: 140rpx;
      top: 128rpx;
      .user_img{
        width: 126rpx;
        height: 126rpx;
        border-radius: 50%;
        margin-bottom: 20rpx;
      }
      p{
        font-size: 24px;
        color: #F22216;
        font-weight: 600;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(1){
        margin-top: -15rpx;
        font-size: 24px;
        color: #F22216;
        margin-bottom: 8rpx;
      }
      p:nth-of-type(2){
        // margin-top: -5rpx;
        font-size: 24px;
        color: #F22216;
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .share_main{
      text-align: center;
      width: 400rpx;
      height: 120rpx;
      left: 76rpx;
      top: 532rpx;
      z-index: 12;
      position: absolute;
      p:nth-of-type(1){
        font-size: 12px;
        color: #9C0202;
        .time{
          box-sizing: border-box;
          display: inline-block;
          font-size: 11px;
          width: 44rpx;
          height: 44rpx;
          line-height: 44rpx;
          color: #D71206;
          background-image: url(../../assets/active/timebg.png);
          background-size: 44rpx;
        }  
      }
      p:nth-of-type(2){
        text-align: center;
        padding-left: 36rpx;
        margin-top: 20rpx; 
        color: #9C0202;
        font-size: 11px;
      }
      // .user_img{
      //   border-radius: 50%;
      //   width: 112rpx;
      //   height: 112rpx;
      //   margin: 30rpx 0 25rpx;
      // }
      // p:nth-of-type(2){
      //   color: #333;
      //   font-size: 11px;
      //   .time{
      //     padding: 5rpx 0;
      //     box-sizing: border-box;
      //     margin: 0rpx 10rpx;
      //     display: inline-block;
      //     width: 34rpx;
      //     height: 34rpx;
      //     color: #fff;
      //     background-image: url(../../assets/active/3_1_timebg.png);
      //     // background-size: 20rpx;
      //   }
      // }
      // p:nth-of-type(3){
      //   font-size: 11px;
      //   margin-top: 10rpx;
      //   color: #a9a9a9;
        
      // }
    }
    
    .share_user{
      position: absolute;
      z-index: 8;
      top: 645rpx;
      left: 76rpx;
      width: 452rpx;
      height: 80rpx;
      li:nth-of-type(1){
        margin: 0; 
      }
      li:nth-of-type(5){
        // margin: 0; 
      }
      li{
        float: left;
        margin-left: 12rpx;
        width: 80rpx;
        height: 80rpx;
        img{
          display: block;
          width: 80rpx;
          border-radius: 50%;
        }
        // span{
        //   display: inline-block;
        //   font-size: 11px;
        //   color: #a9a9a9;
        //   width: 66rpx;
        //   overflow: hidden;
        //   white-space: nowrap;
        //   text-overflow: ellipsis;
        // }
      }
    }
    .share_btn {
      width: 469rpx;
      height: 101rpx;
      position: absolute;
      top: 757rpx;
      left: 65rpx;
      z-index: 11;
      button{
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      .share_button{     
        width: 100%;
        height: 100%;
      }
    }
    .share_tips{
      position: absolute;
      bottom: 50rpx;
      left: 75rpx;
      width: 450rpx;
      height: 55rpx;
      text-align: left;
      p{
        line-height: 1.5;
        font-size: 11px;
        color:#FCD514;
      }
    }
    .quxiao{
      position: absolute;
      bottom: -8%;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .complete{
    z-index: 10;
    width: 604rpx;
    height: 1010rpx;
    position: fixed;
    left: 73rpx;
    top: 4rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .share_swiper{
      position: absolute;
      font-size: 10px;
      color: #F22216;
      top: 80rpx;
      left: 61rpx;
      width: 350rpx;
      height: 42rpx;
      z-index: 12;
      text-align: left;
      float: left;    
      swiper-item{
        height: 42rpx;
      }
      img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      position: absolute;
      top: 72rpx;
      right: 34rpx;
      width: 80rpx;
      height: 70rpx;
      z-index: 12;
      .share_button{
        z-index: 12;
        position: absolute;
        top: 0;
        right: 0; 
        height: 60rpx;
        width: 100rpx; 
        opacity: 0;    
        padding: 0;    
      }
      .share_right{
        width: 100%;
        position: absolute;
        top: 0;
        right: -1rpx;
      }
    }
    .share_main{
      text-align: center;
      width: 400rpx;
      height: 50rpx;
      left: 108rpx;
      top: 522rpx;
      z-index: 12;
      position: absolute;
      p:nth-of-type(1){
        font-size: 12px;
        color: #770000;
        .time{
          box-sizing: border-box;
          display: inline-block;
          font-size: 11px;
          width: 44rpx;
          height: 44rpx;
          line-height: 44rpx;
          color: #D71206;
          background-image: url(../../assets/active/timebg.png);
          background-size: 44rpx;
        }  
      }
      p:nth-of-type(2){
        margin-top: 20rpx;
        color: #9C0202;
        font-size: 11px;
      }
      // .user_img{
      //   border-radius: 50%;
      //   width: 112rpx;
      //   height: 112rpx;
      //   margin: 30rpx 0 25rpx;
      // }
      // p:nth-of-type(2){
      //   color: #333;
      //   font-size: 11px;
      //   .time{
      //     padding: 5rpx 0;
      //     box-sizing: border-box;
      //     margin: 0rpx 10rpx;
      //     display: inline-block;
      //     width: 34rpx;
      //     height: 34rpx;
      //     color: #fff;
      //     background-image: url(../../assets/active/3_1_timebg.png);
      //     // background-size: 20rpx;
      //   }
      // }
      // p:nth-of-type(3){
      //   font-size: 11px;
      //   margin-top: 10rpx;
      //   color: #a9a9a9;
        
      // }
    }
    
    .share_user{
      position: absolute;
      top: 600rpx;
      left: 86rpx;
      width: 453rpx;
      height: 80rpx;
      li:nth-of-type(1){
        margin: 0; 
      }
      li:nth-of-type(5){
        // margin: 0; 
      }
      li{
        float: left;
        margin-left: 12rpx;
        width: 80rpx;
        height: 80rpx;
        img{
          display: block;
          width: 80rpx;
          border-radius: 50%;
        }
        // span{
        //   display: inline-block;
        //   font-size: 11px;
        //   color: #a9a9a9;
        //   width: 66rpx;
        //   overflow: hidden;
        //   white-space: nowrap;
        //   text-overflow: ellipsis;
        // }
      }
    }
    .complete_more{
      position: absolute;
      top: 634rpx;
      left: 86rpx;
      width: 453rpx;
      height: 146rpx;
      p:nth-of-type(1){
        display: block;
        position: absolute;
        top: 73rpx;
        left: 0rpx;
        width: 100%;
        font-weight: 500;
        height: 20rpx;
        color: #9C0202;
        font-size: 13px;
        // font-weight: 700;
      }
      p:nth-of-type(2){
        font-weight: 700;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 112rpx;
        // left: 147rpx;
        font-size: 14px;
        color:#FDCD00;
      }
    }
    .complete_btn{
      position: absolute;
      width: 472rpx;
      height: 101rpx;
      top: 812rpx;
      left: 77rpx;
      button{
        padding: 0;
        width: 220rpx;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
      }
      .complete_button{
        width: 220rpx;
        margin-left: 32rpx;
      }
      .totixian_button{
        width: 220rpx;
       
      }
    }
    .complete_title{
      position: absolute;
      width: 100%;
      top: 172rpx;
      // left: 65rpx;
      p:nth-of-type(1){
        color: #F22216;
        font-weight: 600;
        padding-left: 40rpx;
        font-size: 22px;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(2){
        margin-top: 14rpx;
        color: #F22216;
        font-weight: 400;
        font-size: 11px;
        span{
          display: inline-block;
          margin-bottom: -4rpx;
          margin-left: -4rpx;
          // letter-spacing:-2rpx
        }
      }
      img{
        z-index: 10;
        width: 334rpx;
        margin-top: 14rpx;
      }
    }
    .complete_main{
      position: relative;
      margin-top: 40rpx;
      p:nth-of-type(1){
        font-weight: 600;
        margin-top: 10rpx;
      }
      p:nth-of-type(2){
        margin-top: 10rpx;
      }
    }
    .complete_zhuli{
      position: relative;
      margin-top: 15rpx;
      height: 160rpx;
      width: 100%;
      text-align: center;
      li:nth-of-type(1){
        margin-left:30rpx; 
      }
      li:nth-of-type(5){
        margin-right:30rpx; 
      }
      li{
        float: left;
        margin-left: 10rpx;
        width: 80rpx;
        height: 80rpx;
        img{
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        span{
          display: inline-block;
          font-size: 11px;
          color: #a9a9a9;
          width: 66rpx;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .howpeople{
        position: absolute;
        width: 100%;
        bottom: 0;
        p{
          width: 100%;
          text-align: center;
          font-size: 11px;
          color: #F3392A;
        }
      }
    }
    
    .complete_tips{
      position: absolute;
      text-align: center;
      width: 100%;
      top: 928rpx;
      font-weight: 600;
      color: #660000;
      font-size: 15px;
      // .complete_left{
      //   position: absolute;
      //   left: 0;
      //   bottom: -60rpx;
      //   height: 80rpx;
      //   width: 120rpx;
      //   z-index: 9;
      //   opacity: 0;
      // }
      .complete_right{
        position: absolute;
        left: 440rpx;
        bottom: -77rpx;
        height: 80rpx;
        width: 160rpx;
        z-index: 9;
        opacity: 0;
      }
      span:nth-of-type(1){
        position: absolute;
        display: inline-block;
        left: 103rpx;
        bottom: -67rpx;
        height: 40rpx;
        width: 120rpx;
        z-index: 9;
      }
      span:nth-of-type(2){
        position: absolute;
        display: inline-block;
        left: 440rpx;
        bottom: -67rpx;
        height: 40rpx;
        width: 160rpx;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .helphe{
    z-index: 10;
    width: 614rpx;
    height: 1076rpx;
    position: fixed;
    left: 81rpx;
    top: 17rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .helphe_title{  
      position: absolute;
      z-index: 12;
      width: 428rpx;
      height: 56rpx;   
      top: 113rpx;
      left: 83rpx; 
      img{
        width: 100%;
      }
      // position: absolute;
      // width: 428rpx;
      // height: 56rpx;
      // top: 113rpx;
      // left: 83rpx;
      // z-index: 12;
      // font-size: 28px;
      // font-weight: 700;
      // color: #F3392A;
    }
    .helphe_user{
      position: absolute;
      text-align: center;
      width: 100%;
      height: 168rpx;
      top: 209rpx;
      // left: 176rpx;
      z-index: 12;
      .helphe_userimg{
        width: 118rpx;
        height: 118rpx;
        border-radius: 50%;
        margin-bottom: 10rpx;
      }
      .helphe_username{
        position: absolute;
        top: 124rpx;
        left: 196rpx;
        width: 212rpx;
        height: 45rpx;
        line-height: 45rpx;
        z-index: 14;
        color:#FFFFFF;
        font-size: 11px;
        background-image: url(../../assets/active/help_username.png);
        background-size: 212rpx 45rpx;
        // align-items: center;
        // margin-bottom: 20rpx;
      }
      p:nth-of-type(2){
        position: absolute;
        width: 100%;
        top: 172rpx;
        // left: 176rpx;
        font-weight: 600;
        color: #F22216;
        font-size: 15px;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(3){
        position: absolute;
        width: 100%;
        top: 206rpx;
        // left: 176rpx;
        font-weight: 600;
        color: #F22216;
        font-size: 15px;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
    }
    .helphe_btn {
      width: 468rpx;
      height: 216rpx;
      position: absolute;
      top: 678rpx;
      left: 61rpx;
      z-index: 11;
      .helphe_button1 {
        width: 100%;
      }
      .helphe_button2 {
        margin-top: 16rpx;
        width: 100%;
      }
      .helphe_btn1{
        width: 100%;
        height: 100rpx;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      .helphe_btn2{
        width: 100%;
        height: 100rpx;
        padding: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .success{
    z-index: 10;
    width: 614rpx;
    height: 1076rpx;
    position: fixed;
    left: 81rpx;
    top: 17rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 614rpx;
      // height: 1334rpx;
      top: 0rpx;
      left: 0rpx;
      // z-index: 998;
    }
    .success_title{
      position: absolute;
      top: 246rpx;
      left: 103rpx;
      width: 400rpx;
      height: 76rpx;
      font-weight: 700;
      p{
        font-size: 36px;
        font-weight: 700;
        color: #F22216;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      
    }
    .success_tips{
      position: absolute;
      width: 100%;
      height: 120rpx;
      // left: 60rpx;
      text-align: center;
      top: 350rpx;    
      img{
        position: absolute;
        width: 443rpx;
        // height: 1334rpx;
        top: -0rpx;
        left: 84rpx;
      }
      p{
        margin-top: 20rpx;
        position: absolute;
        font-weight: 600;
        width: 100%;
        font-size: 15px;
        color:#F22216;
      }
      // background-size: 1976rpx;
    }
    .success_btn {
      width: 468rpx;
      height: 100rpx;
      position: absolute;
      top: 777rpx;
      left: 60rpx;
      z-index: 11;
      button{
        width: 100%;
        height: 100%;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
      img{
        width: 468rpx;
        height: 100rpx;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .choose{
    z-index: 10;
    width: 640rpx;
    height: 917rpx;
    position: fixed;
    left: 57rpx;
    top: 91rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 614rpx;
      // height: 1334rpx;
      top: 0rpx;
      left: 0rpx;
      // z-index: 998;
    }
    .choose_title{
      position: absolute;
      top: 106rpx;
      left: 51rpx;
      width: 533rpx;
      height: 88rpx;
      line-height: 84rpx;
      background-image: url(../../assets/active/choose_title_bg.png);
      background-size: 533rpx 88rpx;
      p{
        font-size: 18px;
        font-weight: 500;
        color: #760A00;
        font-family:PingFangSC-Regular;
      }   
    }
    .choose_kefu{
      position: absolute;
      top: 216rpx;
      left: 90rpx;
      width: 483rpx;
      height: 76rpx;
      text-align: left;
      // color: #fff;
      font-size: 14px;
      line-height: 1.5;
      font-family:PingFangSC-Semibold;
      p{
        font-size: 11px;
        color:#7E340C;
        line-height: 1.8;
        font-weight: 500;
      }
      p:nth-of-type(1){
        color: #7E340C;
        font-size: 13px;
        font-weight: 600;
        line-height: 2;
      }
      .choose_kefu_button{
        position: absolute;
        top: 173rpx;
        left: 103rpx;
        width: 237rpx;
        text-align: center;
        p{
          color:#D22727;
          font-size: 14px;
          font-family:PingFangSC-Semibold;
        }
        .choose_kefu_btn {
          width: 237rpx;
          height: 66rpx;
          line-height: 60rpx;
          color: #BA0D08;
          font-size: 16px;
          font-family:PingFangSC-Semibold;
          font-weight: 600;
          letter-spacing: 2px;
          background-image: url(../../assets/active/choose_btn.png);
          background-size: 237rpx 66rpx;
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          z-index: 20;
        }
      }
    }
    .choose_weixin{
      position: absolute;
      top: 558rpx;
      left: 90rpx;
      width: 483rpx;
      height: 76rpx;
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      p{
        font-size: 11px;
        color:#7E340C;
        font-weight: 500;
        line-height: 1.8 ;
      }
      p:nth-of-type(1){
        color: #7E340C;
        font-size: 13px;
        font-weight: 600;
        line-height: 2;
      }
      .choose_weixin_button{
        position: absolute;
        top: 146rpx;
        left: 103rpx;
        width: 237rpx;
        text-align: center;
        
        .choose_weixin_btn {
          width: 237rpx;
          height: 66rpx;
          line-height: 60rpx;
          color: #BA0D08;
          font-size: 16px;
          font-family:PingFangSC-Semibold;
          font-weight: 600;
          letter-spacing: 2px;
          background-image: url(../../assets/active/choose_btn.png);
          background-size: 237rpx 66rpx;
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          z-index: 15;
        }
      }
    }
    .choose_shuoming{
      position: absolute;
      top: 793rpx;
      font-size: 13px;
      width: 80%;
      height: 100rpx;
      color: #970202;
      line-height: 100rpx;
      left: 9%;

    }
    
  }
  .tixian{
    z-index: 10;
    width: 616rpx;
    height: 1030rpx;
    position: fixed;
    left: 67rpx;
    top: 13rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .share_swiper{
      position: absolute;
      font-size: 10px;
      color: #F22216;
      top: 80rpx;
      left: 61rpx;
      width: 350rpx;
      height: 42rpx;
      z-index: 12;
      text-align: left;
      float: left;    
      swiper-item{
        height: 42rpx;
      }
      img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      position: absolute;
      top: 69rpx;
      right: 34rpx;
      width: 80rpx;
      height: 70rpx;
      z-index: 12;
      .share_button{
        z-index: 12;
        position: absolute;
        top: 0;
        right: 0; 
        height: 60rpx;
        width: 100rpx; 
        opacity: 0;    
        padding: 0;    
      }
      .share_right{
        width: 100%;
        position: absolute;
        top: 0;
        right: -1rpx;
      }
    }
    .tixian_title{
      position: absolute;
      top: 154rpx;
      left: 19rpx;
      width: 100%;
      text-align: center;
      z-index: 9;
      p:nth-of-type(1){
        font-size: 28px;
        line-height: 57rpx;
        font-family:PingFangSC-Semibold;
        color:rgba(242,34,22,1);
        font-weight: 600;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(2){
        margin-top: 14rpx;
        font-size: 35px;
        font-weight: 600;
        color: #F22216;
        margin-bottom: 6rpx;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      img{
        width: 300rpx;
      }
    }
    .tixian_input{
      position: absolute;
      top: 553rpx;
      left: 97rpx;
      z-index: 9;
      width: 426rpx;
      p{
        color: #fff;
        font-size: 12px;
      }
      .tixian_input_code{
        position: relative;
        .getcode{
          position: absolute;
          z-index: 9;
          line-height: 100rpx;
          height: 100rpx;
          right: 22rpx;
          bottom: -11rpx;
          color: #666;
          font-size: 13px;
        }
      }
      input{
        text-align: left;
        width: 100%;
        height: 77rpx;
        line-height: 80rpx;
        padding-left: 20rpx;
        box-sizing: border-box;
        font-size: 14px;
        background: #fff;
        color: #999;
        // padding-left: 10rpx;
        border-radius: 5px;
        // border: 2px solid #ccc;
        margin-top: 20rpx;
        // margin-left: 10%;
      }
    }
    .tixian_tips{
      width: 440rpx;    
      text-align: center;
      position: absolute;
      z-index: 9;
      box-sizing: border-box;
      // height: 200rpx;
      top: 930rpx;
      left: 91rpx;
      // padding: 0 40rpx;
      // p:nth-of-type(1){
      //   font-size: 10px;
      //   line-height: 1.8;
      //   color: #E9C011;
      // }
      p{
        font-size: 12px;
        line-height: 1.8;
        font-weight: 700;
        color: #E9C011;
      }
    }
    .tixian_btn {
      width: 297rpx;
      height: 89rpx;
      position: absolute;
      top: 812rpx;
      left: 164rpx;
      z-index: 11;
      span{
        text-align: center;
        padding: 0;
        width: 297rpx;
        height: 89rpx;
        line-height: 79rpx;
        letter-spacing: 46rpx;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        position: absolute;
        padding-left: 20rpx;
        top: 0;
        left: 0;
      }
      button{
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 15;
      }
      .phone_button{
        width: 100%;
        height: 100%;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .newtixian{
    z-index: 10;
    width: 616rpx;
    height: 1030rpx;
    position: fixed;
    left: 67rpx;
    top: 13rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .share_swiper{
      position: absolute;
      font-size: 10px;
      color: #F22216;
      top: 80rpx;
      left: 61rpx;
      width: 350rpx;
      height: 42rpx;
      z-index: 12;
      text-align: left;
      float: left;    
      swiper-item{
        height: 42rpx;
      }
      img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      position: absolute;
      top: 66rpx;
      right: 35rpx;
      width: 101rpx;
      height: 70rpx;
      z-index: 12;
      .share_button{
        z-index: 12;
        position: absolute;
        top: 0;
        right: 0; 
        height: 60rpx;
        width: 100rpx; 
        opacity: 0;    
        padding: 0;    
      }
      .share_right{
        width: 100%;
        position: absolute;
        top: 0;
        right: -1rpx;
      }
    }
    .tixian_title{
      position: absolute;
      top: 177rpx;
      left: 19rpx;
      width: 100%;
      text-align: center;
      z-index: 9;
      p:nth-of-type(1){
        font-size: 28px;
        line-height: 57rpx;
        font-family:PingFangSC-Semibold;
        color:#F22216;
        font-weight: 600;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(2){
        margin-top: 14rpx;
        font-size: 35px;
        font-weight: 600;
        color: #F22216;
        margin-bottom: 6rpx;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      img{
        width: 300rpx;
      }
    }
    .newtixian_tips{
      position: absolute;
      top: 542rpx;
      left: 80rpx;
      width: 490rpx;
      height: 76rpx;
      text-align: left;
      line-height: 1.5;
      font-family:PingFangSC-Semibold;
      p{
        font-size: 13px;
        color:#E9C011;
        line-height: 43rpx;
        font-weight: 500;
      }
      p:nth-of-type(3){
        font-size: 11px;
      }
    }
    .newtixian_button{
      position: absolute;
      top: 618rpx;
      left: 90rpx;
      width: 483rpx;
      height: 76rpx;
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      
      .choose_tixian_button{
        position: absolute;
        top:215rpx;
        left: 85rpx;
        width: 274rpx;
        text-align: center;
        
        .choose_tixian_btn {
          width: 274rpx;
          height: 86rpx;
          line-height: 78rpx;
          color: #fff;
          font-size: 17px;
          font-family:PingFangSC-Semibold;
          font-weight: 600;
          letter-spacing: 2px;
          background-image: url(../../assets/active/newtixian_btn.png);
          background-size: 274rpx 86rpx;
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          z-index: 15;
        }
      }
      .choose_kefu_button{
        position: absolute;
        top:70rpx;
        left: 112rpx;
        width: 237rpx;
        text-align: center;
        img{
          width: 50rpx;
          height: 50rpx;
          // box-shadow:-3px 5px 9px 1px rgba(198,162,6,0.3);
          float: left;
        }
        .choose_kefu_btn {
          position: absolute;
          top: -11rpx;
          left: -6rpx;
          float: left;
          // margin-left: 10rpx;
          width: 274rpx;
          height: 86rpx;
          line-height: 78rpx;
          color: #980202;
          font-size: 14px;
          font-family:PingFangSC-Semibold;
          font-weight: 500;
          letter-spacing: 2px;
          background-size: 274rpx 86rpx;
        }
        button{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          z-index: 15;
        }
      }
    }
    .choose_shuoming{
      position: absolute;
      top: 930rpx;
      font-size: 12px;
      width: 80%;
      height: 100rpx;
      color: #E9C011;
      line-height: 100rpx;
      left: 9%;

    }
  }
  .phone{
    z-index: 10;
    width: 616rpx;
    height: 1030rpx;
    position: fixed;
    left: 67rpx;
    top: 13rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
     .share_swiper{
      position: absolute;
      font-size: 10px;
      color: #F22216;
      top: 80rpx;
      left: 61rpx;
      width: 350rpx;
      height: 42rpx;
      z-index: 12;
      text-align: left;
      float: left;    
      swiper-item{
        height: 42rpx;
      }
      img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        width: 30rpx;
        height: 30rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      position: absolute;
      top: 66rpx;
      right: 35rpx;
      width: 101rpx;
      height: 70rpx;
      z-index: 12;
      .share_button{
        z-index: 12;
        position: absolute;
        top: 0;
        right: 0; 
        height: 60rpx;
        width: 100rpx; 
        opacity: 0;    
        padding: 0;    
      }
      .share_right{
        width: 100%;
        position: absolute;
        top: 0;
        right: -1rpx;
      }
    }
    .tixian_title{
      position: absolute;
      top: 163rpx;
      left: 179rpx;
      z-index: 9;
      p:nth-of-type(1){
        font-size: 29px;
        color:#F22216;
        font-weight: 600;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      p:nth-of-type(2){
        margin-top: 14rpx;
        font-size: 35px;
        font-weight: 600;
        color: #F22216;
        margin-bottom: 14rpx;
        text-shadow:0px 3px 5px rgba(187,122,122,0.8);
      }
      img{
        width: 300rpx;
      }
    }
    .phone_num{
      position: absolute;
      width: 190rpx;
      left: 213rpx;
      top: 525rpx;
      img{
        width: 139rpx;
        height: 106rpx;
      }
      p:nth-of-type(1){
        margin-top: 16rpx;
        font-size: 15px;
        color: #FFCE00;
      }
      p:nth-of-type(2){ 
        font-size: 15px;
        margin-top: 4rpx;
        color: #FFCE00;
      }
    }
    .phone_title{
      position: relative;
      padding-top: 80rpx;
      z-index: 9;
      p:nth-of-type(1){
        font-size: 12px;
        font-weight: 600;
      }
      p:nth-of-type(2){
        margin-top: 20rpx;
        font-size: 26px;
        font-weight: 600;
        color: #F3392A;
      }
    }
   
    .tixian_tips{
      width: 440rpx;    
      text-align: center;
      position: absolute;
      z-index: 9;
      box-sizing: border-box;
      // height: 200rpx;
      top: 886rpx;
      left: 91rpx;
      // padding: 0 40rpx;
      p:nth-of-type(1){
        font-size: 10px;
        line-height: 1.8;
        color: #E9C011;
      }
      p:nth-of-type(2){
        font-size: 12px;
        line-height: 1.8;
        color: #E9C011;
        font-weight: 700;
      }
    }
    .phone_btn {
      width: 297rpx;
      height: 89rpx;
      position: absolute;
      top: 750rpx;
      left: 164rpx;
      z-index: 11;
      span{
        text-align: center;
        padding: 0;
        width: 297rpx;
        height: 89rpx;
        line-height: 79rpx;
        letter-spacing: 46rpx;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        position: absolute;
        padding-left: 20rpx;
        top: 0;
        left: 0;
      }
      button{
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 15;
      }
      .phone_button{
        width: 100%;
        height: 100%;
      }
    }
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .jiakefu{
    z-index: 10;
    width: 610rpx;
    height: 1009rpx;
    position: fixed;
    left: 69rpx;
    top: 4rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .jiakefu_title{
      position: absolute;
      width: 314rpx;
      height: 29rpx;
      font-size: 14px;
      color: #F22216;
      top: 100rpx;
      left: 144rpx;
      font-weight: 600;
      font-family: PingFangSC-Semibold;
    }
    .jiakefu_erweima{
      position: absolute;
      top: 145rpx;
      left: 144rpx;
      width: 336rpx;
      height: 318rpx;
      img{
        display: block;
        width: 100%;
      }
    }
    .jiakefu_methods{
      position: absolute;
      top: 692rpx;
      left: 226rpx;
      width: 152rpx;
      height: 35rpx;
      p {
        font-size: 18px;
        color:#FFFFFF;
        font-weight: 600;
      }
    }
    .jiakefu_tips{
      position: absolute;
      top: 763rpx;
      left: 110rpx;
      width: 405rpx;
      height: 67rpx;
      text-align: left;
      li{
        margin-bottom: 20rpx;
        img{
          float: left;
          width: 19rpx;
          display: inline-block;
          height: 19rpx;
          vertical-align: middle;
          margin-top: 10rpx;
          margin-right: 4rpx;
        }
      }
      p:nth-of-type(1){
        font-size: 12px;
        width: 400rpx;
        margin-left: 26rpx;
        color: #fefefe;
        line-height: 1.5;
      }
      p:nth-of-type(2){
        font-size: 12px;
        color: #fefefe;
        line-height: 1.5;
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
  .newjiakefu{
    z-index: 10;
    width: 610rpx;
    height: 1035rpx;
    position: fixed;
    left: 69rpx;
    top: 4rpx;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    
    .newjiakefu_erweima{
      position: absolute;
      top: 128rpx;
      left: 109rpx;
      width: 398rpx;
      
      img{
        display: block;
        width: 318rpx;
        height: 318rpx;
        margin: 0 auto;
      }
      p{
        margin-top: 32rpx;
        width: 398rpx;
        color:#E5180B;
        line-height: 45rpx;
        font-size: 13px;
        font-weight: 600;
      }
    }
    .newjiakefu_button{
      position: absolute;
      top: 804rpx;
      left: 0;
      width: 100%;
      text-align: center;
      // height: 35rpx;
      p:nth-of-type(1) {
        font-size: 18px;
        color:#fefefe;
        font-weight: 600;
        width: 327rpx;
        height: 80rpx;
        line-height: 75rpx;
        margin: 0 auto;
        background-image: url("../../assets/active/jiakefu_btn.png");
        background-size: 327rpx 80rpx;
      }
      p:nth-of-type(2) {
        font-size: 13px;
        color:#fefefe;
        font-weight: 500;
        margin-top: 24rpx;
        // width: 327rpx;
        // height: 80rpx;
        // line-height: 75rpx;
        // margin: 0 auto;
        // background-image: url("../../assets/active/jiakefu_btn.png");
        // background-size: 327rpx 80rpx;
      }
    }
    .jiakefu_tips{
      position: absolute;
      top: 763rpx;
      left: 110rpx;
      width: 405rpx;
      height: 67rpx;
      text-align: left;
      li{
        margin-bottom: 20rpx;
        img{
          float: left;
          width: 19rpx;
          display: inline-block;
          height: 19rpx;
          vertical-align: middle;
          margin-top: 10rpx;
          margin-right: 4rpx;
        }
      }
      p:nth-of-type(1){
        font-size: 12px;
        width: 400rpx;
        margin-left: 26rpx;
        color: #fefefe;
        line-height: 1.5;
      }
      p:nth-of-type(2){
        font-size: 12px;
        color: #fefefe;
        line-height: 1.5;
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    
    .quxiao{
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 20%;
      height: 16%;
    }
  }
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
    .banneritem{
      position: relative;
      
    }
   

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
    padding-bottom: 50rpx;
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
          li{
            display: inline-block;
            border-radius: 10rpx;
            box-shadow: 0px 6rpx 20rpx #eee;
            margin-top: 20rpx;
            margin-bottom: 10rpx;
            padding: 20rpx;
            position: relative;
            width: 85%;
            .imgBox{
              position: absolute;
              right: 0;
              top: 0;
              
              img{
                width: 94rpx;
                height: 94rpx;
              }
            }
            a{
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }             
            img{
              /*position absolute*/
              /*left 10px*/
              // vertical-align: -30%;
              width: 37%;
              // height: 144rpx;
              border-radius: 10rpx;
              margin-right: 30rpx;
            }
            .bankContent{
              line-height: 56rpx;
              width: 100%;
              display: inline-block;
              text-align: left;
              position: relative;
              /*margin-left 10px*/
              .cardNum {
                position: absolute;
                right: 0;
                bottom: -4%;
                font-size: 11px;
                color: #666;
              }
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
    border: 1px solid #bdbdbd;
    border-radius: 6px;
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
    margin-bottom: 200rpx;
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
.cardraiders{
  background: #F6F6F6;
  // padding-bottom: 100rpx;
  .funList{
    background: #fff;
    display: flex;
    flex-wrap: nowrap;
    padding: 40rpx 60rpx 40rpx 0 ;
    text-align: center;
    color: #999;
    margin:  0 0 0rpx 0;
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
  .hotBanks_chaxun{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-left: 2.5%;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
    height: 200rpx;
    // line-height: 160rpx;
    box-sizing: border-box;
    padding: 30rpx 0;
    // margin-left: 20rpx;
    .funListMiddle{
      flex: 1;
      width: 20%;
      justify-content: space-between;
      text-align: center;
      img{
        width: 100rpx;
        height: 100rpx;
      }
      p{
        widows: 100rpx;
        height: 40rpx;
        line-height: 40rpx;
      }
    }
  }
  .hotBanks_header{
      display: flex;
      justify-content: space-between;
      height: 110rpx;
      line-height: 110rpx;
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
  .header{
    text-align: center;
    padding: 20rpx;
    img{
        width: 100%;
    }  
  }
    
  .articleList{
    a:visited{
      color: #363636;
    }   
    .content{
      border:-2rpx(rgb(232, 232, 232));
      display: flex;
      justify-content: space-between;
      padding: 50rpx;
      background: #fff;
      .content_left{
        width: 100%;
        p:nth-of-type(1){
          color: #363636;
          font-size: 16px;
          /*font-family pingFangSC-Medium*/
        }
        
        p:nth-of-type(2){
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          color: #9a9a9a;
          margin: 20rpx 0;
          /*font-family pingFangSC-Medium*/
        }
          
        span{
          color: #9a9a9a;
          font-size: 12px;
          /*font-family pingFangSC-Medium*/
        }
          
        span:nth-of-type(2){
          float: right;
            margin-right: 30rpx;
          /*font-family pingFangSC-Medium*/
        }
          
      }   
      .content_right{
        width: 30%;
        img{
          width: 64%;
          margin-left: 40rpx;
        }      
      }    
    }     
  }    
 }    
.mengban{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #760A00 ;
  z-index: 8;
  .toquxiao{
    position: absolute;
    top: 1015rpx;
    left: 326rpx;
    width: 100rpx;
    height: 100rpx;
    opacity: 0;
    z-index: 16;
  }
  img{
    position: absolute;
    top: 1040rpx;
    left: 351rpx;
    width: 48rpx;
    height: 48rpx;
  }
}
#zhanwei{
  width: 750rpx;
  height: 1334rpx;
}
</style>
