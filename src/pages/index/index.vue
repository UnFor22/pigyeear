<template>
  <!-- 主页 -->
  <div>
    <!-- 新版用户授权获取信息按钮 -->
    <!-- <div v-if="isLogin">
      <button @getuserinfo="onGotUserInfo" @click="tologin" open-type='getUserInfo'>登录</button>
    </div>    -->
    <!-- <open-data type="userNickName"></open-data> -->
    <!-- 不必显示的养卡攻略 -->
    <div v-if="SHOW">
      <div class="cardraiders">
        <div class="header">
          <img src="http://ioskamidownload.oss-cn-qingdao.aliyuncs.com/yangkabeijing%402x.9d34970.png" mode="widthFix" alt="">
        </div>
        <div class="articleList">
          <!--交通银行-->
          <div @click="tocardraidersdetails(jt_title,1)">
            <div class="content">
              <div class="content_left">
                <p>交通银行信用卡养卡攻略</p>
                <p>1.  金额数量尽量多，半年内消费总金额至少在额度30% 以上；</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 3530</span>
              </div>
              <div class="content_right">
                <img src="http://image.sudaizhijia.com/production/20170920/bank/20170920151057-269.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--建设银行-->
          <div  @click="tocardraidersdetails(js_title,2)">
            <div class="content">
              <div class="content_left">
                <p>建设银行信用卡养卡技巧</p>
                <p>1、 经常刷卡消费，次数越多越好，最好每个月刷完差不多所有额度。</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 6680</span>
              </div>
              <div class="content_right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1530103741&di=f9639e4e2b06ca0eedd9d4680fd99b32&src=http://imgsrc.baidu.com/forum/pic/item/7e3e6709c93d70cf4f46d499f8dcd100bba12be1.jpg" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--工商银行-->
          <div @click="tocardraidersdetails(gs_title,3)">
            <div class="content">
              <div class="content_left">
                <p>工商银行-养卡攻略</p>
                <p>1. 多笔消费，比例25/2/1 25笔500元以下，2笔5000 左右，1笔达总卡额度百分之70。（额度太小或者额度较大具体对待）</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 4846</span>
              </div>
              <div class="content_right">
                <img src="http://image.sudaizhijia.com/production/20171012/bank/20171012201435-573.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--农业银行-->
          <div @click="tocardraidersdetails(ny_title,4)">
            <div class="content">
              <div class="content_left">
                <p>农业银行养卡攻略</p>
                <p>由于某些历史原因，农行申卡成功率低，额度普遍偏低，而且提额很难，这已经成为卡右的一大共识。好多卡友咨询如何才能提高农行信用卡的额度，今天给大家分享下农行提额的最实用的几个技巧：</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 5721</span>
              </div>
              <div class="content_right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530113879491&di=5d05f10bd9592aafbb385086f3c39d36&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F07%2F85%2F23%2F59316ca9789ee.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--光大银行-->
          <div @click="tocardraidersdetails(gd_title,5)">
            <div class="content">
              <div class="content_left">
                <p>光大银行养卡技巧</p>
                <p>所谓养卡，就是通过一些"技术手段" ，把信用卡额度提上去。一般来说，初始额度1万的信用卡养到5万的额度就自然〃毕业""了。如果手中有几张额度5万元的信用卡，总额 度也能达到几十万。那么，如何正确地养卡提额呢？下面， 就跟大家分享一些养卡的技巧。</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 5541</span>
              </div>
              <div class="content_right">
                <img src="http://image.sudaizhijia.com/production/20170920/bank/20170920151123-331.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--广发银行-->
          <div @click="tocardraidersdetails(gf_title,6)">
            <div class="content">
              <div class="content_left">
                <p>广发银行养卡技巧</p>
                <p>以卡养卡，就是A卡消费后，从B卡种来获得现金来还A 卡，等到B卡要还款了，再从A卡获得现金来还B卡，如此循环。信用卡以卡养卡，看起来似乎很简单，但是要注意的地方也还是不少，所以想要卡养得好，就得掌握一些养卡技巧。</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 3096</span>
              </div>
              <div class="content_right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530113917489&di=34b853bae2e32f903e336b34020d24db&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F07%2F85%2F23%2F59316cbf452df.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--中国银行-->
          <div @click="tocardraidersdetails(zg_title,7)">
            <div class="content">
              <div class="content_left">
                <p>中国银行提额方法</p>
                <p>信用卡申请之初，持卡人的信用额度都不是很高的，很多人一张卡用了很久还是初始的倍用额度。实际上呢，信用额度是可以提高的，随着收入、资产条件的提高，完全可以提高信用卡额度，以下八种方式助你成功信用卡提额。</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 11562</span>
              </div>
              <div class="content_right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530113946255&di=934a7aeb4e34dafb00b70b7fb004927f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8326cffc1e178a82e50ad11afd03738da977e852.jpg" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--兴业银行-->
          <div @click="tocardraidersdetails(xy_title,8)">
            <div class="content">
              <div class="content_left">
                <p>兴业银行信用卡养卡技巧</p>
                <p>刷好第一笔，多元化消费，真实消费，少套。按时还兴业银行的卡片要多点真实消费，少用鸡，养卡开商户15-20户左右， 一个月能有10到20笔之间，多刷优质商户。这个优质商户的定义包括银行特约商户和高端知名商户</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 5569</span>
              </div>
              <div class="content_right">
                <img src="http://image.sudaizhijia.com/production/20170920/bank/20170920151004-923.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--民生银行-->
          <div @click="tocardraidersdetails(ms_title,9)">
            <div class="content">
              <div class="content_left">
                <p>民生银行信用卡提额攻略</p>
                <p>首次申请提高额度需要使用信用卡满半年以上，保持良好的还款记录，方可申请。首次提额后需要过了6个月以后才可再次申请。对成功提额有帮助的消费方式有：</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 7462</span>
              </div>
              <div class="content_right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530113977790&di=713e4c302531ff87b4783dcdfade2120&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F07%2F85%2F23%2F59316cc45bac5.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>

          <!--华夏银行-->
          <div @click="tocardraidersdetails(hx_title,10)">
            <div class="content">
              <div class="content_left">
                <p>华夏银行养卡</p>
                <p>信用卡养卡，就是有技巧地刷卡，积累良好的刷卡记录，并遵循银行信用卡提额的规则，逐渐提升信用卡额度的过程。信用卡刷卡养卡的目的是为了提升信用卡额度，把低额度信用卡变成大额信用卡，这样持卡人可使用的信用资金就多了，能够满足持卡人资金周转的需求。那么信用卡养卡有哪些技巧呢？</p>
                <span>2018-06-08</span>
                <span><img style="width:30rpx;" src="../../assets/liulan@2x.png" mode="widthFix" alt=""> 9845</span>
              </div>
              <div class="content_right">
                <img src="http://image.sudaizhijia.com/production/20171229/bank/20171229171255-146.png" mode="widthFix" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if='!SHOW' class="card">
    <!-- 蒙版  -->
    <div class="mengban"></div>
    <!-- 开奖页 -->
    <div class="kaijiang" v-if="showkaijiang">
      <img class="main_img" src="../../assets/active/1_1.png" mode="widthFix" alt="">
      <div class="kaijiang_btn" @click="toaward">
        <button open-type='getUserInfo' @click="toaward"></button> 
        <img class="kaijiang_button" mode="widthFix" src="../../assets/active/1_1_open.png" alt="">          
      </div>
      <div class="quxiao" @click="quxiao"></div>
    </div>
    <!-- 奖品页 -->
    <div class="award" v-if="showaward">
      <img class="main_img" src="../../assets/active/2_1.png" mode="widthFix" alt="">
      <div class="award_edu">
        <p>￥{{award}}</p>
      </div>
      <div class="award_btn" @click="tofenxiang">
        <img class="award_button" mode="widthFix" src="../../assets/active/2_1_btn.png" alt=""> 
      </div>
      <div class="quxiao" @click="quxiao"></div>
    </div>
    <!-- 分享好友助力页 -->
    <div class="share" v-if="showshare">
      <div class="share_swiper">
        <swiper :show-indicators="false" interval="3000" autoplay='true' circular='true' vertical='true' style="font-size:14px; height:30rpx; color:rgba(0,0,0,0.4);">
          <swiper-item catchtouchmove="stopTouchMove" v-for="(item, index) in bannerDataTxt" :key="index">
            <img src="../../assets/active/3_1_face.png" alt="">
            <span style="font-size:11px;">{{item.title}}</span>
          </swiper-item>
        </swiper>
      </div>
      <div class="to_share_right">
        <button class="share_button" open-type='share'></button>
        <img class="share_right" mode="widthFix" src="../../assets/active/3_1_send.png" alt="">
      </div>
      <div class="share_main">
        <p>还差<span style="color:red;">X</span>人即可领红包</p>
        <img class="user_img" src="../../assets/active/3_1_bigface.png" alt="">
        <p>助力倒计时 <span class="time">23</span>:<span class="time">46</span>:<span class="time">32</span></p>
        <p>561人已免费领取</p>
      </div>
      <img class="main_img" src="../../assets/active/3_1.png" mode="widthFix" alt="">
      <div class="share_user">
        <li v-for="(item,index) in userArr" :key="index">
          <img style="width:72rpx;" mode="widthFix" :src="item.img" alt="">
          <span style="color:#a9a9a9;">{{item.name}}</span>
        </li>
      </div>
      <div class="share_btn" @click="tofenxiang">
        <button open-type='share'></button>
        <img class="share_button" mode="widthFix" src="../../assets/active/3_1_btn.png" alt=""> 
      </div>
      <div class="quxiao" @click="quxiao"></div>
    </div>
    <!-- 助力完成页 -->
    <div class="complete" v-if="showcomplete">
      <img class="main_img" src="../../assets/active/5_1.png" mode="widthFix" alt="">
      <div class="complete_title">
        <p>你的朋友果然给力</p>
      </div>
      <div class="complete_main">
        <p style="font-size:30px; ">￥588</p>
        <p style="font-size:12px; color:#888;">红包已到达您的账户</p>
      </div>
      <div class="complete_btn" @click="tofenxiang">
        <button open-type='share' class="complete_button"></button>
        <img class="complete_button" src="../../assets/active/2_1_btn.png" alt="">
      </div>
      <div class="complete_tips">
        <span>提现</span>
        <span>晒一晒</span>
      </div>
      <div class="quxiao" @click="quxiao"></div>
    </div>
    <!-- 帮助好友助力页 -->
    <div class="helphe" v-if="showhelphe">
      <img class="main_img" src="../../assets/active/5_1.png" mode="widthFix" alt="">
      <div class="helphe_title">
        <p>帮Ta助力！</p>
      </div>
      <div class="helphe_user">
        <img src="../../assets/active/3_1_bigface.png" mode="widthFix" alt="">
        <p>还差<span style="color:#F3392A">1</span>人</p>
      </div>
      <div class="helphe_btn">
        <img class="helphe_button1" src="../../assets/active/5_1_btn1.png" mode="widthFix" alt="">
        <img class="helphe_button2" src="../../assets/active/5_1_btn2.png" mode="widthFix" alt="">
      </div>
    </div>
      <!-- 功能导航 -->
      <div class="funList">     
        <div @click="toGonglue" style="display: inline-block;">
            <img src='../../assets/yangka.png' alt="">
            <p style="font-size: 14px; color: #333;">养卡攻略</p>
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
        <div v-if="!SHOW" @click="toOnbehalf" style="display: inline-block;">
            <img src='../../assets/daihuan@2x.png' alt="">
            <p style="font-size: 14px; color: #333;">代还</p>
        </div>
      </div>
      
      <!-- 分割线 -->
      <div class="splitLine" style="margin: 0;"></div>
      
      <!-- 需要显示的主体部分 -->
      <div>
      <!-- <div v-if="true"> -->
        <!-- 热门银行 -->
        <div class="hotBanks">
          <div class="hotBanks_header">
            <p class="theme_p" style="color: #363636;"><span class="leftBorder"></span>热门银行</p>          
            <span @click="tofiltercard" style="color: #7370FF;font-size: 12px;">全部卡片<img src="../../assets/cardCenterMore.png" alt="" style="width: 12rpx; height:22rpx; vertical-align: middle; margin-left: 6rpx;margin-top: -2rpx;"></span>
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
          <div class="loading" v-if=isLoading_banner>
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
            <swiper-item class="banneritem" v-for="(item, index) in bannerData" :key="index" >
              <a @click="tokefu('办信用卡',item.picurl)">
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
                  <a @click="toswiperdetails(item.url,index,'光大银行信用卡')">
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
                <li v-for="(item, index) in pageList" :key="index" @click="tokefu(item.creditname,item.crediturl)">   
                  <a style="width: 100%; height: 100%">
                    <img :src=item.creditphotourl mode="widthFix" alt="">
                    <div class="bankContent">
                      <p>{{item.creditname}}</p>
                      <p>{{item.creditcontent}}</p>
                      <span class="itemTipsCss" v-for="(itemTips, i) in cardTips[index]" :key="i">{{itemTips}}</span>
                      <div class="cardNum">
                        <span><span style="color:#ff5b3d">{{item.cardcount}}</span>人申请</span>
                      </div>  
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
    <vue-tab-bar v-if='!SHOW'
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
  import vueTabBar from '../../components/tabBar'
  import {getHotBankInfoList,getContent, getTopicSelect, getBannerImg, getHotCard, getBannerTxt,registerHref,userOperation,getUserOpenid,postUser} from '../../requestAPI/requestAPI';
  export default {
    data(){
      return {
        showmengban: true, // 控制开奖页显隐
        showkaijiang: false,
        showaward: false,
        showshare: false,
        showcomplete: false,
        showhelphe: false,
        helpNum: 0,
        screenHeight:'',
        title: '',
        url:'',
        Url: '',
        urlStr:'',
        awardArr: [18,28,38,48,58], // 奖金池，用户获得的金额从中选取一个
        // minNum: 1, // 红包最低金额
        // maxNum: 4, // 红包最高金额
        award: 0, // 奖金
        awardNum: 1, // 记录第几次领奖金
        userArr:[
          {
            img: require('../../assets/active/3_1_face.png'),
            name: '小二哥'
          },
          {
            img: require('../../assets/active/3_1_face.png'),
            name: '小二二哥'
          },
          {
            img: require('../../assets/active/3_1_face.png'),
            name: '小二聑哥哥'
          },
          {
            img: require('../../assets/active/3_1_face.png'),
            name: '小二'
          },
          {
            img: require('../../assets/active/3_1_face.png'),
            name: '小二'
          }
        ],

        SHOWText: '',
        SHOW: true, // 控制首页显示养卡攻略或真实内容
        jt_title: '交通银行提额攻略:',
        js_title: '建设银行提额攻略',
        gs_title: '工商银行通用攻略：',
        ny_title: '农业银行提额攻略',
        gd_title: '光大银行养卡技巧',
        gf_title: '广发银行养卡技巧',
        zg_title: '中国银行提额方法',
        xy_title: '兴业银行提额方法',
        ms_title: '民生银行提额方法',
        hx_title: '华夏银行提额方法',
        isLogin: true,
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
        isLoading_hotBank: false,
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
        shouqi: require('../../assets/shouqi@2x.png'),
        userInfo:{
          username: '',
          avatarUrl: '',
          gender: '',
          province:'',
          city: '',
          openId: ''
        }
      }
    },
    components: {
      vueTabBar
    },
    methods: {  
      // 将时间戳转化为时间
      getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
      },
      // 获得奖金
      getaward(){
        // 从奖金池中随机选取一个
        let num = Math.ceil(Math.random()*5) -1 
        this.award = this.awardArr[num]
      },
      
      toaward(){
        this.showkaijiang = false
        this.showaward = true
        this.getaward()
        // this.randomNum(this.minNum,this.maxNum)
      },
      tofenxiang(){
        this.showaward = false
        this.showshare = true
      },
      // 跳转到代还页
      toOnbehalf() {
        wx.navigateTo({ 
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
      toswiperdetails(url,index,title){
        switch(index)
        {
        case 0:
          wx.navigateTo({ 
            url: "/pages/activation/main"
          });
          break;
        case 1:
          let pages = getCurrentPages();
          let currPage = pages[pages.length - 1];   //当前页面
          let prevPage = pages[pages.length - 2];  //上一个页面
          currPage.setData({
            urlStr: url
          });
          wx.navigateTo({ 
              url: `/pages/link/main?title=${title}`
          });
          break;
        case 2:
        // console.log(tourl)
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
      // 获取用户信息
      onGotUserInfo: function(e) {
        // console.log(e)
        // console.log(e.mp.detail.userInfo)
        wx.login({
          success (res) {        
            if (res.code) {
              //发起网络请求            
              getUserOpenid(res.code).then(data => {  
                console.log('qqq',data)
                // this.userInfo.openId = data.result.msg
                wx.setStorage({
                  key: 'user',
                  data: {
                    "openId":data.result.msg
                  }
                })
              })      
            } else {            
              // console.log('登录失败！' + res.errMsg)
            }
          }
        })   
        wx.setStorage({
          key: 'userInfo',
          data: {
            "username": e.mp.detail.userInfo.nickName,
            "avatarUrl": e.mp.detail.userInfo.avatarUrl,
            "gender": e.mp.detail.userInfo.gender,
            "province": e.mp.detail.userInfo.province,
            "city": e.mp.detail.userInfo.city
          }
        }) 
        wx.getStorage({
          key: 'userInfo',
          // key: 'user',      
          success (res) {      
            // console.log('aaa',res)
            let userInfo={
              username: '',
              avatarUrl: '',
              gender: '',
              province:'',
              city: '',
              openId: ''
            }
            userInfo.username = res.data.username
            userInfo.avatarUrl = res.data.avatarUrl
            userInfo.gender = res.data.gender
            userInfo.city = res.data.city
            userInfo.province = res.data.province
            wx.getStorage({
              key: 'user',
              success (res) {
                // console.log('bbb',res)
                userInfo.openId = res.data.openId
                console.log(userInfo.openId );   
              }
            })      
            console.log(userInfo)
            postUser(userInfo)
            // .then(data => {  
            //   console.log('111')
            //   console.log(data)
            // })
          }
        })
      },
      // 未显示的跳转到养卡攻略详情页
      tocardraidersdetails(titles,bankNum){
        // console.log(titles,bankNum)
        wx.navigateTo({ 
          url: "/pages/cardraidersdetails/main?title=" + titles + '&bankNo=' + bankNum
        });
      }, 
      // 未显示的跳转到攻略页
      toGonglue(){
        wx.navigateTo({ 
          url: "/pages/cardraiders/main"
        });
      }
    },
    onLoad() {  
      var timestamp = Date.parse(new Date())  
      console.log(timestamp)
      console.log(this.getLocalTime(timestamp))
      
      // 登录后获取用户openID
      wx.login({
        success (res) {        
          if (res.code) {
            //发起网络请求            
            getUserOpenid(res.code).then(data => {  
              // 将用户信息存储到storage中
              wx.setStorage({
                key: 'user',
                data: {
                  "openId":data.result.msg
                }
              })
            })      
          } else {            
            // console.log('登录失败！' + res.errMsg)
          }
        }
      })   
      // 获取用户信息授权
      wx.getUserInfo({
        success: function(res) {
          // 将用户信息存储到storage中
          wx.setStorage({
            key: 'userInfo',
            data: {
              "username": res.userInfo.nickName,
              "avatarUrl":res.userInfo.avatarUrl,
              "gender":res.userInfo.gender,
              "province":res.userInfo.province,
              "city":res.userInfo.city
            }
          })         
        }
      })
      // 从storage中获取用户信息
      wx.getStorage({
        key: 'userInfo',
        // key: 'user',      
        success (res) {      
          // console.log('aaa',res)
          let userInfo={
            username: '',
            avatarUrl: '',
            gender: '',
            province:'',
            city: '',
            openId: ''
          }
          userInfo.username = res.data.username
          userInfo.avatarUrl = res.data.avatarUrl
          userInfo.gender = res.data.gender
          userInfo.city = res.data.city
          userInfo.province = res.data.province
          this.userInfo.openid = 
          wx.getStorage({
            key: 'user',
            success (res) {
              // console.log('bbb',res)
              userInfo.openId = res.data.openId
              console.log(userInfo.openId );   
            }
          })      
          console.log(userInfo)
          postUser(userInfo)
        }
      })
      
    },
    //页面设置转发功能
    onShareAppMessage: function (res) {
      return {
        title: "这可能是2018年你最不想错过的红包活动>>>",
        imageUrl: '../../assets/active/4_1.png',
        path: '/pages/index/index'
      }
    },
    onShow(){
      // 判断助力人数 显示对应页面
      if(this.helpNum == 0) {     
        this.showkaijiang = true
      } else if(this.helpNum == 5) {
        this.showcomplete = true
      }  else {
        this.showshare = true
      }
      // 用于tabbar判断
      this.selectNavIndex = 0
      // this.SHOW = true
        // 用于判断是否显示真正内容
       getContent().then(data => {
        this.SHOWText = data
        // console.log(this.SHOWText)
        if(this.SHOWText === 'abcdefg'){
          this.SHOW = true
        } else {
          this.SHOW = false
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
          // this.isLoading_hotBank = true

         
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
          })
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
          })

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
          }) 
        }
      })    
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
            // console.log('111',this.pageList)
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
  margin-bottom: 100rpx;
  .kaijiang{
    z-index: 10;
    width: 500rpx;
    height: 794rpx;
    position: fixed;
    left: 125rpx;
    top: 10%;
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
    .kaijiang_btn {
      width: 172rpx;
      height: 172rpx;
      position: absolute;
      top: 320rpx;
      // bottom: 0;
      left: 164rpx;
      // right: 0;
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
      .kaijiang_button {
        width: 172rpx;
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
    width: 500rpx;
    height: 794rpx;
    position: fixed;
    left: 125rpx;
    top: 10%;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center;
    .award_edu{
      position: absolute;
      width: 100%;
      top: 24%;
      // left: 40%;
      p{
        font-size: 32px;
        color: #000;
        font-weight: 700;
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .award_btn {
      width: 373rpx;
      height: 77rpx;
      position: absolute;
      top: 60%;
      left: 63.5rpx;
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
    width: 500rpx;
    height: 794rpx;
    position: fixed;
    left: 125rpx;
    top: 10%;
    overflow: hidden;
    display: block;
    clear: both;
    text-align: center; 
    .share_swiper{
      position: relative;
      font-size: 12px;
      margin-top: 10rpx;
      margin-left: 20rpx;
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
        vertical-align: middle;
        width: 36rpx;
        height: 36rpx;
        margin-right: 8rpx;
      }
    }
    .to_share_right{
      margin-top: 10rpx;
      float: right;
      z-index: 12;
      width: 98rpx;
      position: relative;
      .share_button{
        z-index: 12;
        position: absolute;
        top: -10rpx;
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
      z-index: 12;
      position: relative;
      p:nth-of-type(1){
        font-size: 14px;
        margin-top: 100rpx;
        font-weight: 600;
        color: #000;
      }
      .user_img{
        width: 112rpx;
        height: 112rpx;
        margin: 30rpx 0 25rpx;
      }
      p:nth-of-type(2){
        color: #333;
        font-size: 11px;
        .time{
          padding: 5rpx 0;
          box-sizing: border-box;
          margin: 0rpx 10rpx;
          display: inline-block;
          width: 34rpx;
          height: 34rpx;
          color: #fff;
          background-image: url(../../assets/active/3_1_timebg.png);
          // background-size: 20rpx;
        }
      }
      p:nth-of-type(3){
        font-size: 11px;
        margin-top: 10rpx;
        color: #a9a9a9;
        
      }
    }
    .main_img{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
    .share_user{
      position: relative;
      margin-top: 15rpx;
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
        img{
          display: block;
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
    }
    .share_btn {
      width: 373rpx;
      height: 77rpx;
      position: absolute;
      top: 75%;
      left: 63.5rpx;
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
    width: 500rpx;
    height: 794rpx;
    position: fixed;
    left: 125rpx;
    top: 10%;
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
    .complete_title{
      position: relative;
      margin-top: 135rpx;
      p{
        color: #F3392A;
        font-weight: 700;
        font-size: 20px;
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
    .complete_btn {
      width: 373rpx;
      height: 77rpx;
      position: absolute;
      top: 57%;
      left: 63.5rpx;
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
      .complete_button{
        width: 100%;
        height: 100%;
      }
    }
    .complete_tips{
      position: relative;
      margin-top: 260rpx;
      color: gold;
      font-size: 13px;
      span:nth-of-type(1){
        float: left;
        margin-left: 40rpx;
      }
      span:nth-of-type(2){
        float: right;
        margin-right: 40rpx;
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
    width: 500rpx;
    height: 794rpx;
    position: fixed;
    left: 125rpx;
    top: 10%;
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
      margin-top: 80rpx;
      position: relative;
      z-index: 12;
      font-size: 28px;
      font-weight: 700;
      color: #F3392A;
    }
    .helphe_user{
      position: relative;
      z-index: 12;
      img{
        width: 100rpx;
        height: 10rpx;
        margin-top: 50rpx;
      }
      p{
        color: #333;
        font-size: 12px;
        margin-top: 20rpx;
      }
    }
    .helphe_btn {
      width: 373rpx;
      position: absolute;
      top: 450rpx;
      left: 63.5rpx;
      z-index: 11;
      .helphe_button1 {
        width: 373rpx;
      }
      .helphe_button2 {
        width: 373rpx;
      }
      button{
        width: 100%;
        height: 100%;
        padding: 0;
        position: absolute;
        top: 0;
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
        width: 60%;
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
            margin-left: 100rpx;
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
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
</style>
