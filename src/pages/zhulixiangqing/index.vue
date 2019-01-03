<template>
  <div class="wrap">
      <!-- <div @click="xiazai" style='position:absolute;bottom:0;left:0; z-index:997;width:100px; height: 100px; '> </div> -->
    <canvas id="canvas" canvas-id='canvas' style="width:750rpx; height:1208rpx;"></canvas> 
    <div class="main" v-if="oneLayout">
        <img src="../../assets/active/more_bg1.jpg" class="main_img" alt="">
        <div class="more_button">
            <div class="toshare">
                <button class="toshare_btn" open-type='share'></button>
                <img src="../../assets/active/more_share.png" mode="widthFix" alt="">
            </div>
            <div class="todownload">
                <button class="todownload_btn" @click="xiazai"></button>
                <img src="../../assets/active/more_down.png" mode="widthFix" alt="">
            </div>
        </div>
        
        <div class="more">
            <div class="zhulixiangqing">
                <img mode="widthFix" :src="img" alt="">
                <p>{{nickName}}</p>
            </div>
            <div class="zhuli_title">
                <p>提现<span>{{tixiannum}}</span>元</p>
                <p>全国排名{{pm}}</p>
            </div>
            <div class="zhuli_main">
                <p>共有<span>{{zhulinum}}</span>位好友接龙</p>
                <div class="first">
                    <li style="float:left;" v-for="(item,index) in userArrOne" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="second">
                    <li style="float:right;" v-for="(item,index) in userArrTow" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="third">
                    <li style="float:left;" v-for="(item,index) in userArrThree" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="four">
                    <li style="float:right;" v-for="(item,index) in userArrFour" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
            </div>
            <div class="zhuli_erweima">
                <img :src="QrCodeImgUrl" alt="" mode="widthFix">
                <p>查看我的财气榜</p>
            </div>
        </div>
    </div>
    <div class="main" v-if="twoLayout">
        <img src="../../assets/active/more_bg2.jpg" class="main_img2" alt="">
        <div class="more_button">
            <div class="toshare">
                <button class="toshare_btn" open-type='share'></button>
                <img src="../../assets/active/more_share.png" mode="widthFix" alt="">
            </div>
            <div class="todownload">
                <button class="todownload_btn" @click="xiazai"></button>
                <img src="../../assets/active/more_down.png" mode="widthFix" alt="">
            </div>
        </div>
        <div class="more">
            <div class="zhulixiangqing">
                <img mode="widthFix" :src="img" alt="">
                <p>{{nickName}}</p>
            </div>
            <div class="zhuli_title">
                <p>提现<span>{{tixiannum}}</span>元</p>
                <p>全国排名<span>{{pm}}</span></p>
            </div>
            
            <div class="zhuli_main">
                <p>共有<span>{{zhulinum}}</span>位好友接龙</p>
                <div class="first">
                    <li style="float:left;" v-for="(item,index) in userArrOne" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="second">
                    <li style="float:right;" v-for="(item,index) in userArrTow" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="third">
                    <li style="float:left;" v-for="(item,index) in userArrThree" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondfour">
                    <li style="float:right;" v-for="(item,index) in userArrFour" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="five">
                    <li style="float:left;" v-for="(item,index) in userArrFive" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="six">
                    <li style="float:right;" v-for="(item,index) in userArrSix" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="seven">
                    <li style="float:left;" v-for="(item,index) in userArrSeven" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="eight">
                    <li style="float:right;" v-for="(item,index) in userArrEight" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
            </div>
            <div class="zhuli_erweima2">
                <img :src="QrCodeImgUrl" alt="" mode="widthFix">
                <p>查看我的财气榜</p>
            </div>
        </div>
    </div>
    <div class="main" v-if="threeLayout">
        <img src="../../assets/active/more_bg3.jpg" class="main_img3" alt="">
        <div class="more_button">
            <div class="toshare">
                <button class="toshare_btn" open-type='share'></button>
                <img src="../../assets/active/more_share.png" mode="widthFix" alt="">
            </div>
            <div class="todownload">
                <button class="todownload_btn" @click="xiazai"></button>
                <img src="../../assets/active/more_down.png" mode="widthFix" alt="">
            </div>
        </div>
        <div class="more">
            <div class="zhulixiangqing">
                <img mode="widthFix" :src="img" alt="">
                <p>{{nickName}}</p>
            </div>
            <div class="zhuli_title">
                <p>提现<span>{{tixiannum}}</span>元</p>
                <p>全国排名<span>{{pm}}</span></p>
            </div>
            
            <div class="zhuli_main">
                <p>共有<span>{{zhulinum}}</span>位好友接龙</p>
                <div class="first">
                    <li style="float:left;" v-for="(item,index) in userArrOne" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="second">
                    <li style="float:right;" v-for="(item,index) in userArrTow" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="third">
                    <li style="float:left;" v-for="(item,index) in userArrThree" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondfour">
                    <li style="float:right;" v-for="(item,index) in userArrFour" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="five">
                    <li style="float:left;" v-for="(item,index) in userArrFive" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="six">
                    <li style="float:right;" v-for="(item,index) in userArrSix" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="seven">
                    <li style="float:left;" v-for="(item,index) in userArrSeven" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondeight">
                    <li style="float:right;" v-for="(item,index) in userArrEight" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="nine">
                    <li style="float:left;" v-for="(item,index) in userArrNine" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="ten">
                    <li style="float:right;" v-for="(item,index) in userArrTen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="eleven">
                    <li style="float:left;" v-for="(item,index) in userArrEleven" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="twelve">
                    <li style="float:right;" v-for="(item,index) in userArrTwelve" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
            </div>
            <div class="zhuli_erweima3">
                <img :src="QrCodeImgUrl" alt="" mode="widthFix">
                <p>查看我的财气榜</p>
            </div>
        </div>
    </div>
    <div class="main" v-if="fourLayout">
        <img src="../../assets/active/more_bg4.jpg" class="main_img4" alt="">
        <div class="more_button">
            <div class="toshare">
                <button class="toshare_btn" open-type='share'></button>
                <img src="../../assets/active/more_share.png" mode="widthFix" alt="">
            </div>
            <div class="todownload">
                <button class="todownload_btn" @click="xiazai"></button>
                <img src="../../assets/active/more_down.png" mode="widthFix" alt="">
            </div>
        </div>
        <div class="more">
            <div class="zhulixiangqing">
                <img mode="widthFix" :src="img" alt="">
                <p>{{nickName}}</p>
            </div>
            <div class="zhuli_title">
                <p>提现<span>{{tixiannum}}</span>元</p>
                <p>全国排名<span>{{pm}}</span></p>
            </div>
            
            <div class="zhuli_main">
                <p>共有<span>{{zhulinum}}</span>位好友接龙</p>
                <div class="first">
                    <li style="float:left;" v-for="(item,index) in userArrOne" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="second">
                    <li style="float:right;" v-for="(item,index) in userArrTow" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="third">
                    <li style="float:left;" v-for="(item,index) in userArrThree" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondfour">
                    <li style="float:right;" v-for="(item,index) in userArrFour" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="five">
                    <li style="float:left;" v-for="(item,index) in userArrFive" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="six">
                    <li style="float:right;" v-for="(item,index) in userArrSix" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="seven">
                    <li style="float:left;" v-for="(item,index) in userArrSeven" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondeight">
                    <li style="float:right;" v-for="(item,index) in userArrEight" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="nine">
                    <li style="float:left;" v-for="(item,index) in userArrNine" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="ten">
                    <li style="float:right;" v-for="(item,index) in userArrTen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="eleven">
                    <li style="float:left;" v-for="(item,index) in userArrEleven" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="Secondtwelve">
                    <li style="float:right;" v-for="(item,index) in userArrTwelve" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="thirteen">
                    <li style="float:left;" v-for="(item,index) in userArrThirteen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="fourteen">
                    <li style="float:right;" v-for="(item,index) in userArrFourteen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="fifteen">
                    <li style="float:left;" v-for="(item,index) in userArrFifteen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
                <div class="sixteen">
                    <li style="float:right;" v-for="(item,index) in userArrSixteen" :key="index">
                        <img mode="widthFix" :src="item" alt="">
                    </li>
                </div>
            </div>
            <div class="zhuli_erweima4">
                <img :src="QrCodeImgUrl" alt="" mode="widthFix">
                <p>查看我的财气榜</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {getTaskInfo, getMore, getQRcode} from '../../requestAPI/requestAPI';
  export default {
    data () {
      return {
        windowW: '',  // 设备宽度
        windowH: '',  // 设备高度
        zhulinum: '', // 帮助用户助力的人数
        coin: '',  // 用户累计金币数
        tixiannum: '', // 可提现金额数
        pm: '',  // 当前用户排名
        img: require('../../assets/active/morentouxiang.png'),
        userArrOne: [],
        userArrTow: [],
        userArrThree: [],
        userArrFour: [],
        userArrFive: [],
        userArrSix: [],
        userArrSeven: [],
        userArrEight: [],
        userArrNine: [],
        userArrTen: [],
        userArrEleven: [],
        userArrTwelve: [],
        userArrThirteen: [],
        userArrFourteen: [],
        userArrFifteen: [],
        userArrSixteen: [],
        userName: '',
        openid: '',

        oneLayout: false,
        twoLayout: false,
        threeLayout: false,
        fourLayout: false,

        userimg: ['https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png'],
        // 画图相关
        avatarUrl: '',
        nickName: '',
        fengniaoID: '',
        QrCodeImgUrl: 'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/piggogo.jpg', // 用户二维码地址
        color1: '',
        color2: '',
        color3: '',
        color4: '',
        color5: '',
        urlDuck: '',  //鸭子图片
        saveUrlDuck: '',
        typeDuck: '',  //鸭子类型
        introDuck: '',  //鸭子简介
        parseDuck: '',  //鸭子详情
        matchImg: '',
        inviteImg: '',
        prurl: '',
      }
    },
    onLoad(){
      let that = this   
    //   wx.showLoading({
    //     title: '正在努力生成中...',
    //     mask: true,
    //   });  
      wx.getStorage({
        key:'openID',
        success:function(res){  
            that.openid = res.data.openId
            let openid = res.data.openId
            getTaskInfo({openid: res.data.openId}).then(res=>{
                // console.log('详情页活动信息',res)
                that.tixiannum = res.data.coin/100
                that.img = res.data.headurl
                that.zhulinum = res.data.peoples
                that.nickName = decodeURI(res.data.usname)
            })
            getMore({openid: res.data.openId}).then(res => {      
                // console.log('more1',res)
                if(res.result.code == 10000){
                    that.userArrOne= []
                    that.userArrTow= []
                    that.userArrThree= []
                    that.userArrFour= []
                    that.userArrFive= []
                    that.userArrSix= []
                    that.userArrSeven= []
                    that.userArrEight= []
                    that.userArrNine= []
                    that.userArrTen= []
                    that.userArrTwelve= []
                    that.userArrEleven= []
                    that.userArrThirteen= []
                    that.userArrFourteen= []
                    that.userArrFifteen= []
                    that.userArrSixteen= []
                    that.userimg = []
                    that.pm = res.data.pm
                    // 没人助力用户，显示22个默认头像
                    if(res.data.peopleinfo == null || res.data.peopleinfo == '')
                    {
                        that.oneLayout = true
                        that.twoLayout = false
                        that.threeLayout = false
                        that.fourLayout = false
                        that.userimg = ['https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        'https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png',
                        ]
                        
                    } else {       
                        // 如果等于42人，可能有第二页数据
                        if (res.data.peopleinfo.length === 42){  
                            // 给头像数组赋上第一页的43个值
                            for(let i = 0; i<res.data.peopleinfo.length; i++){
                                let url = res.data.peopleinfo[i].fheadurl
                                let name = res.data.peopleinfo[i].fname
                                if(url==null || url == ''){
                                    url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                    that.userimg.push(url)
                                } else {
                                    that.userimg.push(url)
                                } 
                            }
                            // 请求第二页的数据
                            getMore({openid: openid,page: 2}).then(res => { 
                                // console.log('第二次',res)
                                // 第二次没有，说明只有43个助力人
                                if(res.data.peopleinfo == null || res.data.peopleinfo == '') {
                                    for(let j=42; j<=45; j++ ){
                                        that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                    }

                                    that.oneLayout = false
                                    that.twoLayout = true
                                    that.threeLayout = false
                                    that.fourLayout = false

                                    that.userArrOne = that.userimg.slice(0,5);
                                    that.userArrTow = that.userimg.slice(5,11);
                                    that.userArrThree = that.userimg.slice(11,17);
                                    that.userArrFour = that.userimg.slice(17,23);
                                    that.userArrFive = that.userimg.slice(23,29);
                                    that.userArrSix = that.userimg.slice(29,35);
                                    that.userArrSeven = that.userimg.slice(35,41);
                                    that.userArrEight = that.userimg.slice(41,46);
                                // 如果人数小于2，显示第二种布局
                                } else{
                                    if(res.data.peopleinfo.length==42){
                                        // console.log('bbb')
                                        // 给头像数组赋上第二页的42个值
                                        for(let i = 0; i<res.data.peopleinfo.length; i++){
                                            let url = res.data.peopleinfo[i].fheadurl
                                            let name = res.data.peopleinfo[i].fname
                                            if(url==null || url == ''){
                                                url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                that.userimg.push(url)
                                            } else {
                                                that.userimg.push(url)
                                            } 
                                        }
                                        // console.log('第二页值已附上')
                                        getMore({openid: openid,page: 3}).then(res => { 
                                            // console.log('第三次',res)
                                            if(res.data.peopleinfo.length> 10) {
                                                for(let i = 0; i<10; i++){
                                                    let url = res.data.peopleinfo[i].fheadurl
                                                    let name = res.data.peopleinfo[i].fname
                                                    if(url==null || url == ''){
                                                        url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                        that.userimg.push(url)
                                                    } else {
                                                        that.userimg.push(url)
                                                    } 
                                                }
    
                                                that.oneLayout = false
                                                that.twoLayout = false
                                                that.threeLayout = false
                                                that.fourLayout = true
                                                console.log(that.userimg)
                                                that.userArrOne = that.userimg.slice(0,5);
                                                that.userArrTow = that.userimg.slice(5,11);
                                                that.userArrThree = that.userimg.slice(11,17);
                                                that.userArrFour = that.userimg.slice(17,23);
                                                that.userArrFive = that.userimg.slice(23,29);
                                                that.userArrSix = that.userimg.slice(29,35);
                                                that.userArrSeven = that.userimg.slice(35,41);
                                                that.userArrEight = that.userimg.slice(41,47);

                                                that.userArrNine = that.userimg.slice(47,53);
                                                that.userArrTen = that.userimg.slice(53,59);
                                                that.userArrEleven = that.userimg.slice(59,65);
                                                that.userArrTwelve = that.userimg.slice(65,71);
                                                that.userArrThirteen = that.userimg.slice(71,77);
                                                that.userArrFourteen = that.userimg.slice(77,83);
                                                that.userArrFifteen = that.userimg.slice(83,89);
                                                that.userArrSixteen = that.userimg.slice(89,94);
                                            } else if(res.data.peopleinfo == null || res.data.peopleinfo == '') {
                                                for(let j=84; j<=93; j++ ){
                                                    that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                                }

                                                that.oneLayout = false
                                                that.twoLayout = false
                                                that.threeLayout = false
                                                that.fourLayout = true
                                                
                                                that.userArrOne = that.userimg.slice(0,5);
                                                that.userArrTow = that.userimg.slice(5,11);
                                                that.userArrThree = that.userimg.slice(11,17);
                                                that.userArrFour = that.userimg.slice(17,23);
                                                that.userArrFive = that.userimg.slice(23,29);
                                                that.userArrSix = that.userimg.slice(29,35);
                                                that.userArrSeven = that.userimg.slice(35,41);
                                                that.userArrEight = that.userimg.slice(41,47);

                                                that.userArrNine = that.userimg.slice(47,53);
                                                that.userArrTen = that.userimg.slice(53,59);
                                                that.userArrEleven = that.userimg.slice(59,65);
                                                that.userArrTwelve = that.userimg.slice(65,71);
                                                that.userArrThirteen = that.userimg.slice(71,77);
                                                that.userArrFourteen = that.userimg.slice(77,83);
                                                that.userArrFifteen = that.userimg.slice(83,89);
                                                that.userArrSixteen = that.userimg.slice(89,94);
                                            
                                            } else if(res.data.peopleinfo.length<= 10){
                                                // console.log('dddd')
                                                for(let i = 0; i<res.data.peopleinfo.length; i++){
                                                    let url = res.data.peopleinfo[i].fheadurl
                                                    let name = res.data.peopleinfo[i].fname
                                                    if(url==null || url == ''){
                                                        url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                        that.userimg.push(url)
                                                    } else {
                                                        that.userimg.push(url)
                                                    } 
                                                }
                                                for(let j=res.data.peopleinfo.length+84; j<= 93; j++ ){
                                                    that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                                }
                                                console.log(that.userimg)
                                                that.oneLayout = false
                                                that.twoLayout = false
                                                that.threeLayout = false
                                                that.fourLayout = true
                                                
                                                that.userArrOne = that.userimg.slice(0,5);
                                                that.userArrTow = that.userimg.slice(5,11);
                                                that.userArrThree = that.userimg.slice(11,17);
                                                that.userArrFour = that.userimg.slice(17,23);
                                                that.userArrFive = that.userimg.slice(23,29);
                                                that.userArrSix = that.userimg.slice(29,35);
                                                that.userArrSeven = that.userimg.slice(35,41);
                                                that.userArrEight = that.userimg.slice(41,47);

                                                that.userArrNine = that.userimg.slice(47,53);
                                                that.userArrTen = that.userimg.slice(53,59);
                                                that.userArrEleven = that.userimg.slice(59,65);
                                                that.userArrTwelve = that.userimg.slice(65,71);
                                                that.userArrThirteen = that.userimg.slice(71,77);
                                                that.userArrFourteen = that.userimg.slice(77,83);
                                                that.userArrFifteen = that.userimg.slice(83,89);
                                                that.userArrSixteen= that.userimg.slice(89,94);
                                            } 
                                        })
                                    } else if(res.data.peopleinfo.length<= 3){
                                        for(let i = 0; i<res.data.peopleinfo.length; i++){
                                            let url = res.data.peopleinfo[i].fheadurl
                                            let name = res.data.peopleinfo[i].fname
                                            if(url==null || url == ''){
                                                url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                that.userimg.push(url)
                                            } else {
                                                that.userimg.push(url)
                                            } 
                                        }
                                        for(let j=res.data.peopleinfo.length+42; j<=45; j++ ){
                                            that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                        }
                                        that.oneLayout = false
                                        that.twoLayout = true
                                        that.threeLayout = false
                                        that.fourLayout = false

                                        that.userArrOne = that.userimg.slice(0,5);
                                        that.userArrTow = that.userimg.slice(5,11);
                                        that.userArrThree = that.userimg.slice(11,17);
                                        that.userArrFour = that.userimg.slice(17,23);
                                        that.userArrFive = that.userimg.slice(23,29);
                                        that.userArrSix = that.userimg.slice(29,35);
                                        that.userArrSeven = that.userimg.slice(35,41);
                                        that.userArrEight = that.userimg.slice(41,46);
                                    // 如果大于2人，小于27人，显示第三种布局
                                    } else if( 3<res.data.peopleinfo.length<= 27) {                                 
                                        for(let i = 0; i<res.data.peopleinfo.length; i++){
                                            let url = res.data.peopleinfo[i].fheadurl
                                            let name = res.data.peopleinfo[i].fname
                                            if(url==null || url == ''){
                                                url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                that.userimg.push(url)
                                            } else {
                                                that.userimg.push(url)
                                            } 
                                        }
                                        for(let j=res.data.peopleinfo.length+42; j<=69; j++ ){
                                            that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                        }

                                        that.oneLayout = false
                                        that.twoLayout = false
                                        that.threeLayout = true
                                        that.fourLayout = false
                                        // console.log(that.userimg)
                                        that.userArrOne = that.userimg.slice(0,5);
                                        that.userArrTow = that.userimg.slice(5,11);
                                        that.userArrThree = that.userimg.slice(11,17);
                                        that.userArrFour = that.userimg.slice(17,23);
                                        that.userArrFive = that.userimg.slice(23,29);
                                        that.userArrSix = that.userimg.slice(29,35);
                                        that.userArrSeven = that.userimg.slice(35,41);
                                        that.userArrEight = that.userimg.slice(41,47);
                                        that.userArrNine = that.userimg.slice(47,53);
                                        that.userArrTen = that.userimg.slice(53,59);
                                        that.userArrEleven = that.userimg.slice(59,65);
                                        that.userArrTwelve = that.userimg.slice(65,70);
                                    // 如果大于27小于43，显示第四种布局
                                    } else if(27<res.data.peopleinfo.length< 42) {
                                        for(let i = 0; i<res.data.peopleinfo.length; i++){
                                            let url = res.data.peopleinfo[i].fheadurl
                                            let name = res.data.peopleinfo[i].fname
                                            if(url==null || url == ''){
                                                url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                                that.userimg.push(url)
                                            } else {
                                                that.userimg.push(url)
                                            } 
                                        }

                                        for(let j=res.data.peopleinfo.length+42; j<=93; j++ ){
                                            that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                                        }
                                        that.oneLayout = false
                                        that.twoLayout = false
                                        that.threeLayout = false
                                        that.fourLayout = true

                                        that.userArrOne = that.userimg.slice(0,5);
                                        that.userArrTow = that.userimg.slice(5,11);
                                        that.userArrThree = that.userimg.slice(11,17);
                                        that.userArrFour = that.userimg.slice(17,23);
                                        that.userArrFive = that.userimg.slice(23,29);
                                        that.userArrSix = that.userimg.slice(29,35);
                                        that.userArrSeven = that.userimg.slice(35,41);
                                        that.userArrEight = that.userimg.slice(41,47);

                                        that.userArrNine = that.userimg.slice(47,53);
                                        that.userArrTen = that.userimg.slice(53,59);
                                        that.userArrEleven = that.userimg.slice(59,65);
                                        that.userArrTwelve = that.userimg.slice(65,71);
                                        that.userArrThirteen = that.userimg.slice(71,77);
                                        that.userArrFourteen = that.userimg.slice(77,83);
                                        that.userArrFifteen = that.userimg.slice(83,89);
                                        that.userArrSixteen = that.userimg.slice(89,94);
                                    
                                    }                                 
                                }                                    
                            })   
                        } else if(res.data.peopleinfo.length <22){
                            that.oneLayout = true
                            that.twoLayout = false
                            that.threeLayout = false
                            that.fourLayout = false
                            // 给头像数组添加上已助力人的头像
                            for(let i = 0; i<res.data.peopleinfo.length; i++){
                                let url = res.data.peopleinfo[i].fheadurl
                                let name = res.data.peopleinfo[i].fname
                                if(url==null || url == ''){
                                    url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                    that.userimg.push(url)
                                } else {
                                    that.userimg.push(url)
                                } 
                                // if(name == 'null' || name == '') {
                                //     that.nickName = '大神玩卡';
                                // }else {
                                //     // this.nickName = option.nickName;
                                // }
                            }
                            // 不足22人添加默认头像
                            for(let j=res.data.peopleinfo.length; j<22; j++ ){
                                that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                            }
                            // console.log(that.userimg)
                            that.userArrOne = that.userimg.slice(0,5);
                            that.userArrTow = that.userimg.slice(5,11);
                            that.userArrThree = that.userimg.slice(11,17);
                            that.userArrFour = that.userimg.slice(17,22);
                        // 大于22人，小于42人，说明只有一页数据，且显示为第二种布局
                        } else if (21<res.data.peopleinfo.length <= 41){                           
                            that.oneLayout = false
                            that.twoLayout = true
                            that.threeLayout = false
                            that.fourLayout = false
                            for(let i = 0; i<res.data.peopleinfo.length; i++){
                                let url = res.data.peopleinfo[i].fheadurl
                                let name = res.data.peopleinfo[i].fname
                                if(url==null || url == ''){
                                    url = "https://wx.qlogo.cn/mmopen/vi_32/jLqE4FVxYElZoggLrVZWicKy7LibD4zdiaZZ0QTSuUMySvM35lYYkvleEFiaO1TnKicTGNX0FAkf7DdM9nQADzGAXXQ/132"
                                    that.userimg.push(url)
                                } else {
                                    that.userimg.push(url)
                                } 
                            }
                            for(let j=res.data.peopleinfo.length; j<=45; j++ ){
                                that.userimg.push('https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/app2_0/moren.png')
                            }
                            
                            that.userArrOne = that.userimg.slice(0,5);
                            that.userArrTow = that.userimg.slice(5,11);
                            that.userArrThree = that.userimg.slice(11,17);
                            that.userArrFour = that.userimg.slice(17,23);
                            that.userArrFive = that.userimg.slice(23,29);
                            that.userArrSix = that.userimg.slice(29,35);
                            that.userArrSeven = that.userimg.slice(35,41);
                            that.userArrEight = that.userimg.slice(41,46);
                        }
                    }
                    
                }
            })  
        }
      }) 
    },
    onShow(){
        let that = this
        // 判断是否超过两小时 
        let timestamp = Date.parse(new Date()) + "0"
        let xianziatime = timestamp.substring(0,10)
        // console.log('现在时间',xianziatime)
        wx.getStorage({
          key: 'time',
          success:function(res){
            // console.log('获取时间storage',res)
            if(xianziatime - res.data.time > 10800) {
              // console.log('超过二十分钟，重新请求')
                wx.getStorage({
                    key:'openID',
                    success:function(res){ 
                        // console.log('获取二维码失败',res) 
                        getQRcode({openid:res.data.openId}).then(res => {
                            // console.log('erweima',res)
                            if(res == null|| res == '' || res == ' '){
                                that.QrCodeImgUrl = "https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/piggogo.jpg"
                            } else if(res.result.code == 10000){
                                that.QrCodeImgUrl = res.result.msg
                            }
                            wx.setStorage({
                                key: 'QRCODE',
                                data: {
                                    "qrcode": that.QrCodeImgUrl
                                }
                            })
                        })
                    }   
                })
            } else {
              // console.log('未超过4小时')
                wx.getStorage({
                    key: 'QRCODE',
                    success:function(res){     
                        // console.log('获取二维码成功',res)   
                        that.QrCodeImgUrl = res.data.qrcode  
                    },
                    fail:function(res){
                        wx.getStorage({
                            key:'openID',
                            success:function(res){ 
                                // console.log('获取二维码失败',res) 
                                getQRcode({openid:res.data.openId}).then(res => {
                                    // console.log('erweima',res)
                                    if(res == null|| res == '' || res == ' '){
                                        that.QrCodeImgUrl = "https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/piggogo.jpg"
                                    } else if(res.result.code == 10000){
                                        that.QrCodeImgUrl = res.result.msg
                                    }
                                    wx.setStorage({
                                        key: 'QRCODE',
                                        data: {
                                            "qrcode": that.QrCodeImgUrl
                                        }
                                    })
                                })
                            }   
                        })          
                    }
                })
            }
          },
          fail:function(res){  
          }
        })    
    },
    onShareAppMessage: function (res) {
      return {
        title: `我正在抢红包，已经获得￥${this.tixiannum}，全国排名${this.pm}，快来支援我~`,
        // imageUrl: 'http://download.pcuion.com/app2_0/songxianj.png',
        path: `/pages/index/main?userId=${this.openid}`
      }
    },
    methods: {
      xiazai() {
        let that = this;
        wx.showLoading({
          title: '努力生成中...'
        });
        
        // console.log('that.userimg',that.userimg)
        // 用户二维码
        let promise1 = new Promise(function (resolve, reject) {
            // console.log(that.QrCodeImgUrl)
            wx.getImageInfo({
                src: that.QrCodeImgUrl,
                success: function (res) {
                    resolve(res);
                    // console.log('res1', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        // 用户头像
        let promise2 = new Promise(function (resolve, reject) {
            // console.log('头像',that.img)
            wx.getImageInfo({
                src: that.img,
                success: function (res) {
                    resolve(res);
                    // console.log('res2', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise3 = new Promise(function (resolve, reject) {
            // console.log(that.userimg)
            wx.getImageInfo({
                src: that.userimg[0],
                success: function (res) {
                    resolve(res);
                    // console.log('res3', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise4 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[1],
                success: function (res) {
                    resolve(res);
                    // console.log('res4', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise5 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[2],
                success: function (res) {
                    resolve(res);
                    // console.log('res5', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise6 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[3],
                success: function (res) {
                    resolve(res);
                    // console.log('res6', res);
                },
                fail: function (err) {
                    // console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise7 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[4],
                success: function (res) {
                    resolve(res);
                    // console.log('res7', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise8 = new Promise(function (resolve, reject) {
            // console.log('that.userimg[5]',that.userimg[5])
            
            wx.getImageInfo({
                src: that.userimg[5],
                
                success: function (res) {
                    // console.log('bbb')
                    resolve(res);
                    // console.log('res8', res);
                },
                fail: function (err) {
                    console.log('err---', err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise9 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[6],
                success: function (res) {
                    resolve(res);
                    // console.log('res9', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise10 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[7],
                success: function (res) {
                    resolve(res);
                    // console.log('res10', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise11 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[8],
                success: function (res) {
                    resolve(res);
                    // console.log('res11', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise12 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[9],
                success: function (res) {
                    resolve(res);
                    // console.log('res12', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise13 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[10],
                success: function (res) {
                    resolve(res);
                    // console.log('res13', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise14 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[11],
                success: function (res) {
                    resolve(res);
                    // console.log('res14', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise15 = new Promise(function (resolve, reject) { 
            
            wx.getImageInfo({
                src: that.userimg[12],
                success: function (res) {
                    resolve(res);
                    // console.log('res15', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })    
        });
        let promise16 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[13],
                success: function (res) {
                    resolve(res);
                    // console.log('res16', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise17 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[14],
                success: function (res) {
                    resolve(res);
                    // console.log('res17', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise18 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[15],
                success: function (res) {
                    resolve(res);
                    // console.log('res18', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise19 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[16],
                success: function (res) {
                    resolve(res);
                    // console.log('res19', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise20 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[17],
                success: function (res) {
                    resolve(res);
                    // console.log('res20', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise21 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[18],
                success: function (res) {
                    resolve(res);
                    // console.log('res21', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise22 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[19],
                success: function (res) {
                    resolve(res);
                    // console.log('res22', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise23 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[20],
                success: function (res) {
                    resolve(res);
                    // console.log('res23', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise24 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: that.userimg[21],
                success: function (res) {
                    resolve(res);
                    // console.log('res24', res);
                },
                fail: function (err) {
                    console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
        let promise25 = new Promise(function (resolve, reject) {
            wx.getImageInfo({
                src: "https://ioskamidownload.oss-cn-qingdao.aliyuncs.com/miniprogram/more_bg.png",
                success: function (res) {
                    resolve(res);
                    // console.log('res25', res);
                },
                fail: function (err) {
                    // console.log(err);
                    wx.hideLoading();
                    wx.showToast({
                        title: '生成失败，请稍后重试',
                        icon: 'none',
                        duration: 1000
                    });
                }
            })
        });
    
        Promise.all([promise1,
            promise2,promise3,promise4,promise5,promise6,promise7,promise8,promise9,promise10,promise11,promise12,promise13,promise14,promise15,promise16,promise17,promise18,promise19,promise20,promise21,promise22,promise23,promise24,promise25
        ]).then(res => {
            // console.log('res',res)
            const ctx = wx.createCanvasContext('canvas');
            // 画用户头像
            
            // 背景图
            ctx.drawImage(res[24].path, 0, 0, 375, 604);

            ctx.setFillStyle('#C18A37');
            ctx.font = '14px 思源黑体';
            ctx.fillText(that.nickName, 160, 98);
            
            ctx.setFillStyle('#C1160F');
            ctx.font = '45px 思源黑体';
            ctx.fillText(that.tixiannum, 141, 165);

            ctx.setFillStyle('#CD3F06');
            ctx.font = '18px 思源黑体';
            ctx.fillText(that.pm, 212, 194);

            ctx.setFillStyle('#C18A37');
            ctx.font = '13px 思源黑体';
            ctx.fillText(that.zhulinum, 172, 268);

            // // 画二维码
            ctx.drawImage(res[0].path, 131, 475,100, 100);
            ctx.restore()
            ctx.setStrokeStyle('#fff');

            // 画用户头像
            ctx.save()
            ctx.arc(188, 53, 28, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[1].path, 160, 25, 55, 55);
            ctx.restore()
            
            // 第一行
            ctx.save()
            ctx.moveTo(130, 277)
            ctx.arc(142, 289, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[2].path, 130, 277, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(158, 277)
            ctx.arc(170, 289, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[3].path, 158, 277, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(186, 277)
            ctx.arc(198,289, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[4].path, 186, 277, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(211, 277)
            ctx.arc(223,289, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[5].path, 211, 277, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(236, 291)
            ctx.arc(248,303, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[6].path, 236, 291, 24, 24);
            ctx.restore()

            // 第二行
            ctx.save()
            ctx.moveTo(226, 317)
            ctx.arc(238,329, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[7].path, 226, 317, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(198, 317)
            ctx.arc(210,329, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[8].path, 198, 317, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(170, 317)
            ctx.arc(182,329, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[9].path, 170, 317, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(142, 317)
            ctx.arc(154,329, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[10].path, 142, 317, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(114, 317)
            ctx.arc(126,329, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[11].path, 114, 317, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(98, 340)
            ctx.arc(110,352, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[12].path, 98, 340, 24, 24);
            ctx.restore()

            // 第三行
            ctx.save()
            ctx.moveTo(111, 368)
            ctx.arc(123,380, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[13].path, 111, 368, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo( 139, 368)
            ctx.arc(151,380, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[14].path, 139, 368, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(166, 368)
            ctx.arc(179,380, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[15].path, 166, 368, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(194, 368)
            ctx.arc(207,380, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[16].path, 194, 368, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(222, 368)
            ctx.arc(235,380, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[17].path, 222, 368, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(238, 390)
            ctx.arc(250,402, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[18].path, 238, 390, 24, 24);
            ctx.restore()
            
            // 第四行
            ctx.save()
            ctx.moveTo(223, 413)
            ctx.arc(235,425, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[19].path, 223, 413, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(195, 413)
            ctx.arc(207,425, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[20].path, 195, 413, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(167, 413)
            ctx.arc(179,425, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[21].path, 167, 413, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(139, 413)
            ctx.arc(151,425, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[22].path, 139, 413, 24, 24);
            ctx.restore()

            ctx.save()
            ctx.moveTo(194, 368)
            ctx.arc(123,425, 12, 0, Math.PI * 2, false);
            ctx.clip();
            ctx.drawImage(res[23].path, 111, 413, 24, 24);
            ctx.restore()
            // console.log('生成即将结束')
            ctx.draw()
            // console.log('生成结束');
            
            wx.hideLoading();
            wx.showModal({
                title: '温馨提示',
                content: '保存图片，去发朋友圈炫耀吧！',
                showCancel : false,
                confirmText: '保存',
                success(res) {
                    if (res.confirm) {
                        // console.log('用户点击确定');
                        that.baocun()
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        })
        
      },
      baocun() {
        let that = this
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 750,
            height: 1208,
            destWidth: 750,
            destHeight: 1208,
            canvasId: 'canvas',
            success: function (res) {
                // console.log('canvas返回',res)
                that.prurl = res.tempFilePath;
                console.log(that.prurl)
                wx.hideLoading();

                //生产环境时 记得这里要加入获取相册授权的代码
                wx.saveImageToPhotosAlbum({
                    filePath: that.prurl,
                    success(res) {
                        wx.showToast({
                            title: '图片已保存到相册',
                            icon: 'none',
                            duration: 1500
                        });
                    }
                })

            },
            fail: function (res) {
                // console.log(res)
            }
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
.wrap{
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
  width: 100%;
  text-align: center;
  height: 100%;
//   height: 1334rpx;
  background: #c73025;
  text-align: center;
  .main{
    //   position: relative;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
  }
  .main_img{
      position: absolute;
      top: 0;
      left: 0;
    //   bottom: 0;
    //   right: 0;  
      width: 750rpx;
      height: 1208rpx;           
  }
  .main_img2{
      position: absolute;
      top: 0;
      left: 0;
    //   bottom: 0;
    //   right: 0;  
      width: 750rpx;
      height: 1486rpx;           
  }
  .main_img3{
      position: absolute;
      top: 0;
      left: 0;
    //   bottom: 0;
    //   right: 0;  
      width: 750rpx;
      height: 1824rpx;           
  }
  .main_img4{
      position: absolute;
      top: 0;
      left: 0;
    //   bottom: 0;
    //   right: 0;  
      width: 750rpx;
      height: 2118rpx;           
  }
  .toshare_btn{
    position: absolute;
    top: -22rpx;
    // left: 103rpx;
    right:-16rpx;
    // bottom:0;
    width: 150rpx;
    height: 110rpx;
    opacity: 0;
    z-index: 20;
  }
  .todownload_btn{
    position: absolute;
    top: -22rpx;
    left: -16rpx;
    width: 150rpx;
    height: 110rpx;
    opacity: 0;
    z-index: 20;
  }
  .toshare{
      position: absolute;
      top: 130rpx;
      right: 107rpx;
      width: 110rpx;
      height: 64rpx;

      img{
          width: 100%;
      }
  }
  .todownload{
        position: absolute;
      top: 130rpx;
      left: 105rpx;
      width: 110rpx;
      height: 64rpx;
      img{
          width: 100%;
      }
  }
  .more{
      position: absolute;
      top: 27rpx;
      left: 0;
      width: 750rpx;
      height: 1061rpx;
      .zhulixiangqing{
        position: absolute;
        top: 24rpx;
        left: 265rpx;
        width: 220rpx;
        // margin-top: 60rpx;
        margin-bottom: 20rpx;
        img{
        width: 110rpx;
        border-radius: 50%;
        //   border: 2px solid #fff;
        margin-bottom: 10rpx;
        }
        p{
        color: #C18A37;
        font-size: 14px;
        }
    }
    .zhuli_title{
        position: absolute;
        top: 211rpx;
        left: 12.5%;
        width: 75%;
        height: 160rpx;
        text-align: center;
        // margin-bottom: 40rpx;
        p:nth-of-type(1){
            font-weight: 600;
            width: 100%;
            font-size: 19px;
            color: #C18A37;
            // margin-left: 102rpx;
            // margin-bottom: 10rpx;
            span {
                font-size: 45px;
                color: #C1160F;
                font-weight: 500;
                // background-image: -webkit-gradient(linear, left 0, right 0, from(#C1160F), to(#F02A22));
                // -webkit-background-clip: text; 
                // -webkit-text-fill-color: transparent; 
            }
        }  
        p:nth-of-type(2){
            margin-top: 17rpx;
            font-weight: 500;
            width: 100%;
            font-size: 18px;
            color: #CD3F06;
            // margin-left: 102rpx;
            // margin-bottom: 10rpx;
            span {
                font-size: 18px;
                color: #CD3F06;
                // background-image: -webkit-gradient(linear, left 0, right 0, from(#C1160F), to(#F02A22));
                // -webkit-background-clip: text; 
                // -webkit-text-fill-color: transparent; 
            }
        }
        img{
            position: absolute;
            top: 108rpx;
            left: 0rpx;
            width: 443rpx;
            height: 79rpx;
        }
    }
    .zhuli_main {
        position: relative;
        top: 500rpx;
        width: 535rpx;
        // height: 250rpx;  
        // height: 50%;
        margin-left: 107rpx;
        .main_bg{
            position: absolute;
            left: 33rpx;
            top: -22rpx;
            width: 369rpx;
            height: 390rpx;
        }
        p{  
            text-align: left;
            position: absolute;
            width: 282rpx;
            left: 178rpx;
            top: -15rpx;
            font-size: 14px;
            font-weight: 600;
            color:goldenrod;
            span {
                font-size: 18px;
                color: #C1160F;
                padding: 0 4px;
                // letter-spacing:4px
            }
        }
        div{
            clear: both;
            display: block;
            overflow: hidden;
            width: 400rpx;
            height: 100rpx;
            li:nth-of-type(1){
            // margin: 0;
            }
            li {
                margin-left: 8rpx;
                // margin-top: 8rpx;
            }
            img{
            width: 49rpx;
            height: 49rpx;
            // height: 84rpx;
            border-radius: 50%;
            // border: 2px solid #fff;
            }
        }
        
        // 奇数行
        div:nth-child(odd){ 
            display: block;
            overflow: hidden;
            clear: both;
            box-sizing: border-box;
            padding-left: 80rpx;
            margin-top: -28rpx;
            // li:last-of-type{
            //     // background: #000;
            //     margin-top: 43rpx;
            //     margin-left: -13rpx;
            // }
        }
        // 偶数行
        div:nth-child(even){ 
            display: block;
            overflow: hidden;
            clear: both;
            margin-top: -28rpx;
            box-sizing: border-box;
            padding-right: 80rpx;
            // li:last-of-type{
            //     // background: #000;
            //     margin-top: 43rpx;
            //     margin-right: -13rpx;
            // }
        }
        .first{
            position: absolute;
            width: 400rpx;
            left: 153rpx;
            top: 58rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 35rpx;
                margin-left: -2rpx;
            }
        }
        .second{
            position: absolute;
            width: 400rpx;
            left: -4rpx;
            top: 145rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 47rpx;
                margin-right: -15rpx;
            }
        }
        .third {
            position: absolute;
            width: 400rpx;
            left: 112rpx;
            top: 238rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 39rpx;
                margin-left: -7rpx;
            }
        }
        .four {
            position: absolute;
            width: 400rpx;
            left: -1rpx;
            top: 329rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 0rpx;
                margin-left: 0rpx;
            }
        }
        .Secondfour {
            position: absolute;
            width: 400rpx;
            left: -1rpx;
            top: 329rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 45rpx;
                margin-right: -15rpx;
            }
        }
        .five {
            position: absolute;
            width: 413rpx;
            left: 122rpx;
            top: 411rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 39rpx;
                margin-left: -13rpx;
            }
        }
        .six{
            position: absolute;
            width: 400rpx;
            left: -4rpx;
            top: 500rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 47rpx;
                margin-right: -23rpx;
            }
        }
        .seven {
            position: absolute;
            width: 400rpx;
            left: 122rpx;
            top: 595rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 39rpx;
                margin-left: -13rpx;
            }
        }
        .eight {
            position: absolute;
            width: 400rpx;
            left: 7rpx;
            top: 678rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 0rpx;
                margin-left: 0rpx;
            }
        }
        .Secondeight {
            position: absolute;
            width: 400rpx;
            left: -1rpx;
            top: 678rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 47rpx;
                margin-right: -15rpx;
            }
        }
        .nine {
            position: absolute;
            width: 400rpx;
            left: 124rpx;
            top: 759rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 48rpx;
                margin-left: -17rpx;
            }
        }
        .ten {
            position: absolute;
            width: 400rpx;
            left: -11rpx;
            top: 841rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 47rpx;
                margin-right: -23rpx;
            }
        }
        .eleven {
            position: absolute;
            width: 400rpx;
            left: 112rpx;
            top: 928rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 46rpx;
                margin-left: -13rpx;
            }
        }
        .twelve {
            position: absolute;
            width: 400rpx;
            left: -16rpx;
            top: 1010rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 0rpx;
                margin-left: 0rpx;
            }
        }
        .Secondtwelve {
            position: absolute;
            width: 400rpx;
            left: -1rpx;
            top: 1010rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 41rpx;
                margin-right: -15rpx;
            }
        }
        .thirteen {
            position: absolute;
            width: 400rpx;
            left: 120rpx;
            top: 1087rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 39rpx;
                margin-left: -13rpx;
            }
        }
        .fourteen {
            position: absolute;
            width: 400rpx;
            left: -11rpx;
            top: 1168rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 47rpx;
                margin-right: -23rpx;
            }
        }
        .fifteen {
            position: absolute;
            width: 400rpx;
            left: 112rpx;
            top: 1255rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 39rpx;
                margin-left: -13rpx;
            }
        }
        .sixteen {
            position: absolute;
            width: 400rpx;
            left: -20rpx;
            top: 1335rpx;
            li:last-of-type{
                // background: #000;
                margin-top: 0rpx;
                margin-left: 0rpx;
            }
        }

    }
    .zhuli_erweima {
        position: absolute;
        bottom: -84rpx;
        left: 295rpx;
        width: 154rpx;
        height: 154rpx;
        border: 1px solid gold;
        img{
            width: 100%;
        }
        p{

            width:160rpx;
            height:24rpx;
            font-size:11px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(227,194,101,1);
            // line-height:56px;
        }
    }
    .zhuli_erweima2 {
        position: absolute;
        bottom: -352rpx;
        left: 295rpx;
        width: 154rpx;
        height: 154rpx;
        border: 1px solid gold;
        img{
            width: 100%;
        }
        p{

            width:160rpx;
            height:24rpx;
            font-size:11px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(227,194,101,1);
            // line-height:56px;
        }
    }
    .zhuli_erweima3 {
        position: absolute;
        bottom: -689rpx;
        left: 295rpx;
        width: 154rpx;
        height: 154rpx;
        border: 1px solid gold;
        img{
            width: 100%;
        }
        p{

            width:160rpx;
            height:24rpx;
            font-size:11px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(227,194,101,1);
            // line-height:56px;
        }
    }
    .zhuli_erweima4 {
        position: absolute;
        bottom: -992rpx;
        left: 295rpx;
        width: 154rpx;
        height: 154rpx;
        border: 1px solid gold;
        img{
            width: 100%;
        }
        p{

            width:160rpx;
            height:24rpx;
            font-size:11px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(227,194,101,1);
            // line-height:56px;
        }
    }
  }
  
}
#canvas{
    position: absolute;
    left: -750rpx;
    top: 0;
    // background: #c03830;
}

</style>
