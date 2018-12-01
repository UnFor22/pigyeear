<template>
  <div>
<!--      <nav class="navTitle"><img @click="backHistory()" src="../../assets/fanhui@2x.png">{{this.bankname}}</nav>-->
    <div class="hotdetails">
    
      <!--银行卡头部-->
      <div class="header">
        <img :src=logo alt="">
        <div>
          <p style="width: 100%">{{bankname}}</p>
          <p style="width: 100%">{{bankcontent}}</p>
        </div>
      </div>

      <!--对应的银行卡-->
      <div class="content">
        <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="bottomAllLoaded" :auto-fill="false" ref="loadmore" :bottomPullText='bottomText' :bottomDropText="bottomDropText"> -->
          <ul>
            <li v-for="(item, index) in pageList" :key="index" @click="toBanka(item.crediturl)">
                <!--:href=item.crediturl-->
              <div style="text-align: left" class="leftBox">
                <img :src="item.creditphotourl"  alt="">
                <div class="creditRight">
                  <p>{{item.creditname}}</p>
                  <p>{{item.creditcontent}}</p>
                  <!-- <div v-for="(itemTips, i) in item.credittips.split(',')" :key="i">
                    <div class="tips">{{itemTips}}</div>
                  </div> -->
                  <div class="itemTipsCss" v-for="(itemTips, i) in cardTips[index]" :key="i">{{itemTips}}</div>
                </div>
              </div>
              <div class="button"><a style="color: #ff5b3d">立即申请</a></div>
            </li>
          </ul>
        <!-- </mt-loadmore> -->
      </div>

    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  import {getHotBankInfoListDetails,registerHref,userOperation} from '../../requestAPI/requestAPI';

export default {
  data () {
    return {
      phototUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528106264550&di=635bd54844f92c9672485b5d5f6ba3cc&imgtype=0&src=http%3A%2F%2Fwww.xiazaiba.com%2Fuploadfiles%2Fsub_ico%2F2015%2F0417%2F2015041715312182286.png',
      cardUrl: '',

      //分页属性
      searchCondition:{
        bankid: '',
        t: '',
        page: 0,
        token: '',
        creditid: '',
        w:'',
      },
      pageList: [],
      cardTips:[], //热门信用卡小标签
      credittips:[], //热门信用卡小便签未处理
      bottomAllLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      // scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      wrapperHeight: 0,
      bottomText: '上拉加载更多',
      bottomDropText: '释放更新',

      bankname: '',
      bankcontent: '',
      logo: '',
      bankid: '', 
      regList:{
        mob:'', //手机号、
        chan:'', //渠道号、
        cid:'', //信用卡ID、
        cname:'', //信用卡名称、
      },
      operationList:{
          type:3,                 //办卡点击(h5),
          mobile:'',                 //手机号、
          channelSign:'',         //渠道号、渠道标识(H5)
          typeId:'',              //相应操作数据id（对应数据的id不存在时可以不传）==>信用卡ID
          address:'',	            //链接地址（app不需要；H5需要）
      },
      query:{

      }
    }
  },
  onLoad(){
    this.query = this.$root.$mp.query
    // console.log('onLoad',this.pageList)
    this.changeParameter();
    // this.loadPageList();
  },
  onShow(){
    this.credittips = [];
    this.cardTips = [];
    this.pageList=[];
    this.searchCondition.page = 0;
    this.loadPageList(); 
  },
  // onHide(){
  //   console.log('onHide',this.pageList)
  //   this.pageList=[]
  // },
  onUnload(){
    // this.pageList=[]
  },
  // 触底刷新
  onReachBottom() {
    
    // this.loadPageList();
  },
  // mounted() {
  //   // console.log(this.$root.$mp.query)
  //   this.query = this.$root.$mp.query
  //   // this.bankname = this.query.bankname;
  //   // this.bankcontent = this.query.bankcontent;
  //   // this.logo = this.query.logo;
  //   // console.log(this.query)
  //   // //动态计算页面高度
  //   // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  //   // //加载热门银行详情页时所需数据
  //   this.changeParameter();
  //   this.loadPageList();  
  //   // this.changeParameter(); 
  // },

  methods: {
    // 获取对于组件传递过来的值
    changeParameter() {
      console.log(this.query)
      this.bankname = this.query.bankname;
      // console.log(this.bankname)
      this.bankcontent = this.query.bankcontent;
      this.logo = this.query.logo;
      this.searchCondition.bankid = this.query.bankid;
      this.bankid = this.query.bankid;
      // gio('page.set', {'bankname': this.bankname});     
    },
    //
    toBanka(linkUrl){
      // console.log('linkUrl', linkUrl)
      let str = linkUrl.split('?')[0];
      let str2 = linkUrl.split('?')[1];


      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];   //当前页面
      let prevPage = pages[pages.length - 2];  //上一个页面
      currPage.setData({
        urlStr: linkUrl
      });


      // console.log('str2', str2)
      wx.navigateTo({ 
          url: `/pages/link/main?url=${str}&url2=${str2}`
      });
    },

    //查询数据
    loadPageList(){
      this.searchCondition.t = (new Date()).valueOf();  //获取当前时间戳
      this.searchCondition.token = md5(md5(this.searchCondition.bankid + this.searchCondition.t + 'kami2018@'));  //生成token
      this.searchCondition.page = parseInt(this.searchCondition.page) + 1;
      getHotBankInfoListDetails(this.searchCondition).then(data => {
        console.log(data)
        if(data.result.code == 10000){
          this.pageList = data.data;
          // 为信用卡的tips赋值
          for(let i=0;i<this.pageList.length;i++){
            this.credittips.push(data.data[i].credittips) 
            this.cardTips.push(this.credittips[i].split(','))
          }
        }else if(data.result.code == 99996) {
          this.bottomText = '已经到底了';
          this.bottomDropText = '已经到底了';
        }
        else {
          // Toast({message:data.result.msg,duration: 1500});
        }
      }).catch(err => {
        console.log(err);
        // Toast({message:'异常',duration: 500});
      });
    },
    //统计银行申请
    // hotdetailsNum(index){
    //       this.regList.mob=this.$route.query.mob;
    //       this.regList.chan=this.$route.query.utm_source;
    //       this.regList.cid=this.pageList[index].creditid;
    //       this.regList.cname=this.pageList[index].creditname;
    //       registerHref(this.regList);
    //       this.operationList.mobile=this.$route.query.mob;
    //       this.operationList.channelSign=this.$route.query.utm_source;
    //       this.operationList.typeId=this.pageList[index].creditid;
    //       this.operationList.address=window.location.href;
    //       userOperation(this.operationList);
    // },
    // backHistory(){
    //       this.$router.go(-1)
    //   }

  },

  //监视页面数据是否更新
  // watch: {
  //   '$route' (to, from) {

  //     this.searchCondition.bankid = this.$route.query.bankid;
  //     this.searchCondition.t = (new Date()).valueOf();  //获取当前时间戳
  //     this.searchCondition.token = md5(md5(this.searchCondition.bankid + (new Date()).valueOf() + 'kami2018@'));  //生成token
  //     getHotBankInfoListDetails(this.searchCondition).then(data => {
  //       if(data.result.code == 10000){
  //         this.pageList = this.pageList.concat(data.data);
  //       }else if(data.result.code == 99996) {
  //         this.bottomText = '已经到底了';
  //         this.bottomDropText = '已经到底了';
  //       }
  //       else {
  //         Toast({message:data.result.msg,duration: 1500});
  //       }
  //     }).catch(err => {
  //       console.log(err);
  //       Toast({message:'加载异常',duration: 1500});
  //     });

  //     this.changeParameter();
  //   }
  // },

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
.hotdetails{
  /*width 100%*/
  overflow: auto;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;
  .header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30rpx;
    padding-left: 3%;
    border:-2rpx(rgb(232, 232, 232));
    img{
      margin-bottom: 30rpx;
      margin-right: 30rpx;
      width: 100rpx;
      height: 100rpx;
    }
    div{
      margin-bottom: 20rpx;
      p:nth-of-type(1){
         color: #363636;
        /*font-family pingFangSC-Heavy*/
        margin-bottom: 10rpx;
      } 
      p:nth-of-type(2){
        font-size: 12px;
        color: #9a9a9a;
        /*font-family pingFangSC-Medium*/
        margin-top: 10rpx;
      }     
    }     
  }
    
  .content{
    /*padding 0 10px*/
    ul{
      text-align: center;
      /*margin-top 10px*/
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        /*margin-top 10px*/
        /*margin-bottom 10px*/
        padding: 40rpx 10rpx;
        border:-2rpx(rgb(232, 232, 232));
        position: relative;
        .leftBox{
          margin-left: 2%;
          width:100%;
        }
          
        /*display flex*/
        /*align-items center*/
        /*vertical-align -30%*/
        .button{
          display: inline-block;
          width: 20%;
          height: 56rpx;
          line-height: 56rpx;

          border-radius: 40rpx;
          outline:none;
          font-size: 12px;
          position: absolute;
          right: 3%;
          top: 36%;
          background-color: #fff;
          border: 2rpx solid #ff5b3d;
          a{
            display: inline-block;
            width: 105%;
          }
            
        }
          
        img{
          width: 214rpx;
          height: 144rpx;
          border-radius: 5px;
          margin-right: 20rpx;
          vertical-align: -10%;
          float: left;
        }    
        .creditRight{
           /*line-height 28px*/
          /*margin-left 7px*/
          display: inline-block;
          float: left;
          height: 144rpx;
          width:48%;

          p:nth-of-type(1){
            width: 80%;
            /*font-family  pingFangSC-Heavy */
            color: #363636;
            font-size: 15px;
            margin-bottom: 10rpx;
            margin-top: 4rpx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
           
          p:nth-of-type(2){
            /*font-family pingFangSC-Medium*/
            font-size: 26rpx;
            width: 75%;
            line-height: 30rpx ;
            color: #9a9a9a;
            /*margin-top -4px*/
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 36rpx;
          }
            
          .tips{
            /*display inline-block*/
            padding: 4rpx 10rpx;
            color: #9a9a9a;
            font-size: 11px;
            /*background-color #FFF8E4*/
            /*height 17px
            line-height 15px*/
            /*border-radius 4px*/
            /*margin-bottom 3px*/
            margin-right: 10rpx;
            /*max-width 37%*/
            float: left;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /*border: .5px solid #bdbdbd;*/
            /*font-family pingFangSC-Medium*/
            position: relative;
            .tips::after{
              content: "  ";
              position: absolute;
              left: 0;
              top: 0;
              z-index:-1;
              width: 195%;
              height:56rpx;
              border-radius: 8px;
              border:2rpx solid #bdbdbd;
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: scale(.5, .5);
              transform: scale(.5, .5);
            }           
          }            
        }           
      }   
    }  
  }
}
.itemTipsCss{
  padding: 2px 5px;
  color: #9a9a9a;
  font-size: 11px;
  margin-right: 5px;
  float: left;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* border: .5px solid #bdbdbd; */
  position: relative;
}
// .button{
//     display: inline-block;
//     /* background: linear-gradient(to right, #8B89FF , #7B5CFF); */
//     width: 150rpx;
//     height: 56rpx;
//     line-height: 56rpx;
//     border-radius: 20px;
//     /* box-shadow: 3px 3px 8px #ddd; */
//     outline: none;
//     font-size: 12px;
//     position: absolute;
//     right: 3%;
//     top: 36%;
//     background-color: #fff;
//     border: 2rpx solid #ff5b3d;
// }
</style>
