<template>
  <div class="wrapper">
    <img class="bgImg" src="http://ioskamidownload.oss-cn-qingdao.aliyuncs.com/xinshoubanka%402x_02.469f2b7.png" alt="" onclick="return false" mode="widthFix"> 
    <div class="novicecard">
      <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="bottomAllLoaded" :auto-fill="false" ref="loadmore" :bottomPullText='bottomText' :bottomDropText="bottomDropText"> -->
        <div class="box">
          <div class="topDiv"></div>
          <div style="margin-top: -86rpx" class="topDiv"></div>
          <div class="firstCard">
            <p>{{firstData ? firstData.creditname : ''}}</p>
            <div class="imgBox">
              <img src="../../assets/huangguan@2x.png" mode="widthFix" alt="">
              <img style="border-radius: 5px" mode="widthFix" :src=photoUrl alt="">
            </div>
            <p>{{firstData ? firstData.creditcontent : ''}}</p>
            <div class="firstDataTips">
                <section v-for="(itemTips, i) in cardTips[0]" :key="i">
                  <span>{{itemTips}}</span>
                </section>
            </div>
            <div class="cardNum" style="font-size:12px; margin-top:20rpx;">
              <span><span style="color:#ff5b3d">{{firstData.cardcount}}</span>人申请</span>
            </div> 
            <div class="button" @click="tokefu(firstData.creditname,firstData.crediturl)">
              <a style="color: #fff; font-size: 15px">立即申请</a></div>
          </div>

          <div class="otherCard" v-for="(item, index) in pageList" :key="index">
            <p style="font-family: pingFangSC-Heavy; color: #363636">{{item.creditname}}</p>
            <div class="otherCardBox">
              <div class="imgBox">
                <img  src="../../assets/huangguan@2x.png" alt="">
                <img style="border-radius: 5px" class="otherCardBox_img" :src=item.creditphotourl alt="" mode="widthFix">
                <div class="cardNum" style="font-size:12px; margin-top:20rpx;">
                  <span><span style="color:#ff5b3d">{{item.cardcount}}</span>人申请</span>
                </div> 
              </div>
              <div>
                <p>{{item.creditcontent}}</p>
                <section v-for="(itemTips, i) in cardTips[index+1]" :key="i">
                  <span>{{itemTips}}</span>
                </section>
                <div class="button" @click="tokefu(item.creditname,item.crediturl)"><a>立即申请</a></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  import {getFilterHotBank} from '../../requestAPI/requestAPI';
  import {getFilterHotBankNew,registerHref,userOperation} from '../../requestAPI/requestAPI';

  export default {
    data () {
      return {
        //分页属性
        filterSearch: {
          bid: 0,		  //银行ID 如果选择全部银行就传0
          yp: '0',		  //信用卡年费，如果选择全部年费就传0
          level: '0', 	//信用卡级别，如果选择全部级别就传0
          type: 2,		//{label: '大额度', value: 1},{label: '新手办卡', value: 2},{label: '审批快', value: 3},{label: '办卡有礼', value: 4},
          page: 0,		//当前页数，默认传1,每页显示10条，接口默认返回20条
          token: 0, 	//校验值，校验规则参数拼接: “bid+yp+level+type+page+kami@2018”进行两次MD5
          creditid:'',
          bankid:'',
        },
        pageList: [],
        bottomAllLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        wrapperHeight: 0,
        bottomText: '上拉加载更多',
        bottomDropText: '释放更新',
        firstData: {},
        photoUrl: '',
        hrefUrl: '',
        isLoading: true,
        screenHeight: '', //当前设备高度
        cardTips:[], //热门信用卡小标签
        credittips:[], //热门信用卡小便签未处理
        regList:{
              mob:'', //手机号、
              chan:'', //渠道号、
              cid:'', //信用卡ID、
              cname:'', //信用卡名称、
        },
        operationList:{   //记录用户操作接口列表
            type:3,                 //办卡点击(h5),
            mobile:'',                 //手机号、
            channelSign:'',         //渠道号、渠道标识(H5)
            typeId:'',              //相应操作数据id（对应数据的id不存在时可以不传）==>信用卡ID
            address:'',	            //链接地址（app不需要；H5需要）
        },
        query:{}
      }
    },
      /*filters: {
            symbolChange: function (value) {
                value = value.replace(/,/g, "         ");
                return value;
                console.log(value);
            }
        },*/
    // created () {
    // },

    // mounted() {
    //   //动态计算页面高度
    //   this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    //   //加载热门信用卡时所需数据
    //   this.loadPageList();
        
    // },
    onLoad(){
      this.query = this.$root.$mp.query
      // this.screenHeight = wx.getSystemInfoSync().windowHeight + 'px'
      // console.log(this.screenHeight)
      this.loadPageList()
    },
    //页面设置转发功能
    onShareAppMessage: function (res) {
      return {
        title: `信用卡还没下?，着急没用，点击查看进度
`,
        imageUrl: 'http://download.pcuion.com/app2_0/jindu3.png',
        path: '/pages/index/index'
      }
    },
    onShow(){
      
    },
    methods: {      
      //查询数据
      loadPageList(){
        this.filterSearch.page = parseInt(this.filterSearch.page) + 1;
        this.filterSearch.token = md5(md5(this.filterSearch.bid + this.filterSearch.yp + this.filterSearch.level + this.filterSearch.type + this.filterSearch.page + 'kami@2018'));  //生成token
        getFilterHotBank(this.filterSearch).then(data => {
          if(data.result.code == 10000){
            this.isLoading = false;
            //将获取到的数据添加到定义的pageList中
            this.pageList = this.pageList.concat(data.data);
            console.log(this.pageList)
            // 为信用卡的tips赋值
            for(let i=0;i<this.pageList.length;i++){
              this.credittips.push(data.data[i].credittips) 
              this.cardTips.push(this.credittips[i].split(','))
              // console.log(this.cardTips)
            }
            //如果是第一次添加，首先拿出第一次数据的第一个元素，并返回新数组，同时将取出的元素赋值给初始化的firstData供页面使用
            if(this.filterSearch.page == 1) {
              this.firstData = this.pageList[0];
              this.pageList = this.pageList.splice(1);
            }
            this.photoUrl = this.firstData ? this.firstData.creditphotourl : '';
            this.hrefUrl = this.firstData ? this.firstData.crediturl : '';
          }else if(data.result.code == 99996) {
            this.bottomText = '没有更多了';
            this.bottomDropText = '没有更多了';
          }
          else {
            Toast('正在加载中。。。');
          }
        }).catch(err => {
          console.log(err);
          Toast('正在加载中。。。');
        });
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
      //统计第一个
      // hotdetailsNumF(creditid,bankid){
      //   this.regList.mob=this.query.mob;
      //   this.regList.chan=this.query.utm_source;
      //   this.regList.cid=this.pageList[0].creditid;
      //   this.regList.cname=this.pageList[0].creditname;
      //   registerHref(this.regList);
      //   this.operationList.mobile=this.query.mob;
      //   this.operationList.channelSign=this.query.utm_source;
      //   this.operationList.typeId=this.pageList[0].creditid;
      //   this.operationList.address=window.location.href;
      //   userOperation(this.operationList);    
      // },
      //统计非第一个
      // hotdetailsNum(index){
      //   this.regList.mob=this.query.mob;
      //   this.regList.chan=this.query.utm_source;
      //   this.regList.cid=this.pageList[index].creditid;
      //   this.regList.cname=this.pageList[index].creditname;
      //   registerHref(this.regList);
      //   this.operationList.mobile=this.query.mob;
      //   this.operationList.channelSign=this.query.utm_source;
      //   this.operationList.typeId=this.pageList[index].creditid;
      //   this.operationList.address=window.location.href;
      //   userOperation(this.operationList);
      // },
        
        // backHistory(){
        //     this.$router.go(-1)
        // }

    },
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
    
  .novicecard{
    position: absolute;
    overflow: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    /*padding-top 20px*/
    .box{
      padding-top: 240rpx;
      box-sizing: border-box;
      padding-bottom: 40rpx;
      .topDiv{
        width: 80%;
        height: 100rpx;
        border-radius: 10px;
        background: #ddd;
        opacity: 0.1;
        margin: 0 auto;
        /*box-shadow 0 0 20px #000*/
      }
      .firstCard{
        background: #fff;
        width: 80%;
        position: relative;
        margin: 0 auto;
        text-align: center;
        box-shadow: 5px 5px 20px #ccc;
        border-radius: 10px;
        padding: 40rpx 0;
        margin-top: -86rpx;
        .imgBox{
          width: 80%;
          position: relative;
          margin: 0 auto;
        }
         
        img:nth-of-type(1){
          position: absolute;
          top: 6rpx;
          left: -4rpx;
          width: 60rpx;
          height: 60rpx;
        }
          
        img:nth-of-type(2){
          width: 90%;
          margin: 40rpx 0;
        }
          
        p:nth-of-type(1){
           /*font-family pingFangSC-Heavy*/
          color: #363636;
        }
         
        p:nth-of-type(2){
           /*font-family pingFangSC-Medium*/
          font-size: 14px;
          color: #555;
          margin-bottom: 20rpx;
        }
         
        p:nth-of-type(3){
          /*font-family pingFangSC-Medium*/
          font-size: 14px;
          color: #555;
        }
          
        .firstDataTips{
          width: 100%;
          display: inline-block;
          position: relative;
          left: 50%;
          margin-left: -50%;
          span{
            display: inline-block;
            padding: 4rpx 10rpx;
            margin-right: 10rpx;
            color: #9a9a9a;
            /*font-family pingFangSC-Medium*/
            font-size: 14px;
            /*background-color #FFF8E4*/
            height: 30rpx;
            line-height: 30rpx;
            /*border-radius 4px
            border: 1px solid #bdbdbd;*/
            margin-top: 10rpx;
            float: left;
            position: relative;
          }
                
          span::after{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 195%;
            height:68rpx;
            border-radius: 8px;
            border:2rpx solid #bdbdbd;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(.5, .5);
            transform: scale(.5, .5);
          }
                  
        }
          
        .button{
          margin-top: 20rpx;
          display: inline-block;
          background: linear-gradient(to right, #8B89FF , #7B5CFF); /* 标准的语法 */
          color: #fff;
          margin-right: 10rpx;
          border: 0;
          width: 320rpx;
          height: 70rpx;
          line-height: 70rpx;
          border-radius: 30px;
          box-shadow: 3px 3px 8px #ddd;
          outline:none;
          position: relative;
          
          /*font-family pingFangSC-Medium*/
        } 
          
      }
        
      .otherCard{
        background: #fff;
        width: 80%;
        box-shadow: 0 0 10px #ccc;
        border-radius: 10px;
        position: relative;
        margin: 40rpx auto;
        padding: 40rpx 0;
        text-align: center;
        box-sizing: border-box;
        img:nth-of-type(1){
          position: absolute;
          top: 79rpx;
          left: 18rpx;
          width: 40rpx;
          height: 40rpx;
        }
          
        img:nth-of-type(2){
          width: 50%;
        }
          
        .otherCardBox{
          padding-top: 20rpx;
          display: flex;
          justify-content: space-between;
          div:nth-of-type(1){
            padding: 0rpx 10rpx;
            width: 50%;
            // position: relative;
            .cardNum {
              // position: absolute;
              width: 100%;
              text-align: center;
              right: 0;
              bottom: -4%;
              font-size: 11px;
              color: #666;
              margin-top: -10rpx;
            }
            /*background url("../../assets/huangguan@2x.png") no-repeat*/
            /*background-position 6% 1%*/
            /*background-size 15px 15px*/
            .otherCardBox_img{
              width: 80%;
              // height: 80%;
            }
          }
            
          div:nth-of-type(2){
            text-align: left;
            padding: 30rpx 0;
            width: 50%;
            p:nth-of-type(1){
              font-size: 13px;
              /*font-family pingFangSC-Medium*/
              color: #555;
              margin-bottom: 16rpx;
              margin-top: -10rpx;
            }
              
            p:nth-of-type(2){
              font-size: 13px;
              /*font-family pingFangSC-Medium*/
              color: #555;
              margin-bottom: 6rpx;
            }
              
            span{
              display: inline-block;
              padding: 4rpx 10rpx;
              margin-right: 6rpx;
              color: #9a9a9a;
              /*font-family pingFangSC-Medium*/
              font-size: 11px;
              /*background-color #FFF8E4*/
              height: 34rpx;
              line-height: 34rpx;
              /*border-radius 4px
              border: 1px solid #bdbdbd;*/
              margin-top: 10rpx;
              max-width: 150rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              float: left;
              position: relative;
            }
                
            span::after{
              content: " ";
              position: absolute;
              left: 0;
              top: 0;
              width: 195%;
              height:68rpx;
              border-radius: 8px;
              border: 2rpx solid #bdbdbd;
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: scale(.5, .5);
              transform: scale(.5, .5);
            }
                  
            .button{
              margin-top: 20rpx;
              display: inline-block;
              background: linear-gradient(to right, #8B89FF , #7B5CFF); /* 标准的语法 */
              color: #fff;
              /*font-family pingFangSC-Medium*/
              border: 0;
              width: 200rpx;
              height: 60rpx;
              text-align: center;
              line-height: 60rpx;
              border-radius: 30px;
              box-shadow: 3px 3px 8px #ddd;
              outline:none;
              position: relative;
              
              a{
                color: #fff;
                font-size: 14px;
              }              
            }              
          }           
        }          
      }      
    }      
  }   
  .wrapper{
    width: 100%;
    // height: 603px;
    position: relative;
   
    .bgImg{
      // min-height: 603px;
      width: 100%;
      height: 100%;
      position: fixed;
      // top: 0;
      // left: 0;
      // right: 0;
      // bottom: 0;
      pointer-events: none;
    }  
  }
  
</style>
