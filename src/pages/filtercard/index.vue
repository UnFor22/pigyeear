<template>  
  <div>   
    <div class="selectContainer">
      <!--下拉选择-->
      <div class="select">
        <!--选择项-->
        <div class="selectItem">
          <div class="inputWrapper" @click.stop="hideBankOther" @click="showAllB=!showAllB">
            <input disabled="disabled" style=" font-size:16px;color: #363636; background: #fff" type="text" readonly placeholder="银行" :value="selectedBank" :class="{invalidB: this.invalidB}"><img :src=imgUrlB alt="">
          </div>
          <div class="inputWrapper" @click.stop="hideFeeOther" @click="showAllF=!showAllF">
            <input disabled="disabled" style="font-size:16px;color: #363636; background: #fff" type="text" readonly placeholder="年费" :value="selectedFee" :class="{invalidF: this.invalidF}"><img :src=imgUrlF alt="">
          </div>
          <div class="inputWrapper" @click.stop="hideGradeOther" @click="showAllG=!showAllG">
            <input disabled="disabled" style="font-size:16px;color: #363636; background: #fff" type="text" readonly placeholder="等级" :value="selectedGrade" :class="{invalidG: this.invalidG}"><img :src=imgUrlG alt="">
          </div>
          <div class="inputWrapper" @click.stop="hideClassOther" @click="showAllC=!showAllC">
            <input disabled="disabled" style="font-size:16px;color: #363636; background: #fff" type="text" readonly placeholder="分类" :value="selectedClass" :class="{invalidC: this.invalidC}"><img :src=imgUrlC alt="">
          </div>
        </div>
      </div>

      <div class="ulClass">
        <!--各个选择项对应的详情-->
        <ul class="options" v-show="showBank"  style="font-size: 14px">
          <li v-for="(item, index) in options_bank" :key="index" @click.stop="chooseBank(item.bankname, item.bankid, index)" :class="{activeBC: index == isActiveBC}">{{item.bankname}}<!--<span :class="{activeB: index == isActiveB}"></span>--></li>
        </ul>
        <ul class="options" v-show="showFee"  style="font-size: 14px">
          <li v-for="(item, index) in options_fee" :key="index" @click.stop="chooseFee(item.label, item.value, index)" :class="{activeFC: index == isActiveFC}">{{item.label}}<!--<span :class="{activeF: index == isActiveF}"></span>--></li>
        </ul>
        <ul class="options" v-show="showGrade"  style="font-size: 14px">
          <li v-for="(item, index) in options_grade" :key="index" @click.stop="chooseGrade(item.label, item.value, index)" :class="{activeGC: index == isActiveGC}">{{item.label}}<!--<span :class="{activeG: index == isActiveG}"></span>--></li>
        </ul>
        <ul class="options" v-show="showClass"  style="font-size: 14px">
          <li v-for="(item, index) in options_class" :key="index" @click.stop="chooseClass(item.label, item.value, index)" :class="{activeCC: index == isActiveCC}">{{item.label}}<!--<span :class="{activeC: index == isActiveC}"></span>--></li>
        </ul>
      </div>

      <!--遮罩层-->
      <div class="overlayer" v-show="isShow_bank" @click="isShow_bank = !isShow_bank"></div>
      <div class="overlayer" v-show="isShow_fee" @click="isShow_fee = !isShow_fee"></div>
      <div class="overlayer" v-show="isShow_grade" @click="isShow_grade = !isShow_grade"></div>
      <div class="overlayer" v-show="isShow_class" @click="isShow_class = !isShow_class"></div>

      <!--筛选出来的数据展示-->
      <div class="content">
        <div :bottom-method="loadBottom" :bottom-all-loaded="bottomAllLoaded" :auto-fill="false" ref="loadmore" :bottomPullText='bottomText' :bottomDropText="bottomDropText">
          <ul>
            <li v-for="(item, index) in pageList" @click="tokefu(item.creditname,item.crediturl)" :key="index">
              <div class="leftBox" style="display: inline-block;width: 100%;">
                <img :src="item.creditphotourl" alt="">
                <div class="creditRight" style="text-align: left;">
                  <p>{{item.creditname}}</p>
                  <p>{{item.creditcontent}}</p>
                  <section v-for="(itemTips, i) in cardTips[index]" :key="i">
                    <div class="tips">{{itemTips}}</div>
                  </section>
                  <div class="cardNum">
                    <span><span style="color:#ff5b3d">{{item.cardcount}}</span>人申请</span>
                  </div>
                </div>
              </div>  
              <div class="rightBox"><span style="color: #ff5b3d">立即申请</span></div>

            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import md5 from 'js-md5';
  import {getFilterHotBank, getHotBankInfoList,registerHref,userOperation} from '../../requestAPI/requestAPI';
  export default {
    data () {
      return {
        cardUrl: '',

        //银行选择项列表
        options_bank: [],
        //年费选择项列表
        options_fee: [
          {label: '全部', value: '0'},
          {label: '免首年，交易免', value: '1'},
          {label: '终身免年费', value: '2'},
          {label: '有年费', value: '3'},
        ],
        cardTips:[], //热门信用卡小标签
        credittips:[], //热门信用卡小便签未处理
        //等级选择项列表
        options_grade: [
          {label: '全部等级', value: 0},
          {label: '普卡', value: 1},
          {label: '金卡', value: 2},
          {label: '白金卡', value: 3},
        ],
        //类别选择项列表
        options_class: [
          {label: '全部', value: 0},
          {label: '大额度', value: 1},
          {label: '新手办卡', value: 2},
          {label: '审批快', value: 3},
          {label: '办卡有礼', value: 4},
          {label: '商超购物', value: 5},
          {label: '商旅', value: 6},
          {label: '航空', value: 7},
          {label: '境外', value: 8},
          {label: '有车一族', value: 9},
          {label: '女人', value: 10},
          {label: '卡通游戏', value: 11},
          {label: '联名卡', value: 12},
          {label: '其它', value: 13},
        ],

        showBank: false,  //是否显示银行对应的选项
        showFee: false, //是否显示年费对应的选项
        showGrade: false, //是否显示等级对应的选项
        showClass: false, //是否显示类别对应的选项

        selectedBank: '', //初始化银行选项input的value值
        selectedFee: '',  //初始化年费选项input的value值
        selectedGrade: '',  //初始化等级选项input的value值
        selectedClass: '',  //初始化类别选项input的value值

        filterSearch: {
          bid: 0,		  //银行ID 如果选择全部银行就传0
          yp: '0',		  //信用卡年费，如果选择全部年费就传0
          level: '0', 	//信用卡级别，如果选择全部级别就传0
          type: '0',		//信用卡类型，如果选择全部类型就传0
          page: 0,		//当前页数，默认传1,每页显示10条，接口默认返回20条
          token: 0, 	//校验值，校验规则参数拼接: “bid+yp+level+type+page+kami@2018”进行两次MD5
        },

        pageList: [],
        bottomAllLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        wrapperHeight: 0,
        bottomText: '上拉加载更多',
        bottomDropText: '释放更新',

        isShow_bank: false, //初始化银行的遮罩
        isShow_fee: false,
        isShow_grade: false,
        isShow_class: false,
        isActiveB: -1,  //初始化银行对应选中某一项时的样式
        isActiveF: -1,
        isActiveG: -1,
        isActiveC: -1,
        invalidB: false,
        invalidF: false,
        invalidG: false,
        invalidC: false,
        showAllB: false,  //是否显示银行对应某一项的自定义样式
        showAllF: false,
        showAllG: false,
        showAllC: false,
        isActiveBC: -1,
        isActiveFC: -1,
        isActiveGC: -1,
        isActiveCC: -1,

        isHide: true,
        regList:{
          mob:'', //手机号、
          chan:'', //渠道号、
          cid:'', //信用卡ID、
          cname:'', //信用卡名称、
        },
        operationList:{      //记录用户操作接口列表
            type:3,                 //办卡点击(h5),
            mobile:'',                 //手机号、
            channelSign:'',         //渠道号、渠道标识(H5)
            typeId:'',              //相应操作数据id（对应数据的id不存在时可以不传）==>信用卡ID
            address:'',	            //链接地址（app不需要；H5需要）
        },

      }
    },
    onLoad() {
       let bank = {
        bankid: 0,
        bankname: "全部银行",
        bankabbr: "全部银行",
        bankcontent: "全部银行",
        banklogo: "https://api.51datakey.com/h5/logo/bank/gs-2x.png",
        banktips: "最热",
        bankurl: "https://www.baidu.com/",
        endtime: "0",
        islight: "1",
        isuse: "1",
        showtime: "0",
        weight: "44"
      };

      //加载热门银行时所需数据
      getHotBankInfoList().then(data => {
        if(data.result.code == 10000){
          data.data.unshift(bank);
          this.options_bank = data.data;
        }else {
          // Toast({message:'正在加载中。。。',duration: 500});
        }
      }).catch(err => {
        console.log(err);
        // Toast({message:'正在加载中。。。',duration: 500});
      });

      this.loadPageList();
    },
    //页面设置转发功能
    onShareAppMessage: function (res) {
      return {
        title: `论下卡成功率，我没服过谁！`,
        imageUrl: 'http://download.pcuion.com/app2_0/songxianj.png',
        path: '/pages/index/index'
      }
    },
    onShow(){

    },
    // 触底刷新
    onReachBottom() { 
      this.filterSearch.page = this.filterSearch.page + 1
      this.dropPageList(this.filterSearch.page);
    },
    methods: {
      //下拉时查询数据
      dropPageList(){
        this.filterSearch.page = parseInt(this.filterSearch.page);
        this.filterSearch.token = md5(md5(this.filterSearch.bid + this.filterSearch.yp + this.filterSearch.level + this.filterSearch.type + this.filterSearch.page + 'kami@2018'));  //生成token
        getFilterHotBank(this.filterSearch).then(data => {
          if(data.result.code == 10000){
            this.pageList = this.pageList.concat(data.data);
            for(let i=0;i<data.data.length;i++){
              this.credittips.push(data.data[i].credittips)  
            }
            // console.log(this.pageList)
            this.cardTips = [];
            for(let j = 0; j<this.credittips.length; j++){
              this.cardTips.push(this.credittips[j].split(','))
            }
            // console.log('触底刷新',this.pageList)
            // console.log('触底刷新的credittips',this.credittips)            
            // console.log('触底刷新的cardTips',this.cardTips)    
          }else if(data.result.code == 99996) {
            this.bottomText = '已经到底了';
            this.bottomDropText = '已经到底了';
          }
          else {
            // Toast('正在加载中。。。');
          }
        }).catch(err => {
          console.log(err);
          // Toast('正在加载中。。。');
        });
      },

      //页面正常加载和用户选择加载数据
      loadPageList(){       
        this.filterSearch.page = parseInt(1);
        this.filterSearch.token = md5(md5(this.filterSearch.bid + this.filterSearch.yp + this.filterSearch.level + this.filterSearch.type + this.filterSearch.page + 'kami@2018'));  //生成token
        getFilterHotBank(this.filterSearch).then(data => {
          if(data.result.code == 10000){
            this.cardTips=[]
            this.credittips=[]
            this.pageList = data.data;
            for(let i=0;i<this.pageList.length;i++){
              this.credittips.push(this.pageList[i].credittips)  
              this.cardTips.push(this.credittips[i].split(','))
            }         
            // console.log('选择或初次加载pageList',this.pageList)
            // console.log('选择或初次加载的credittips',this.credittips)            
            // console.log('选择或初次加载的cardTips',this.cardTips)            
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
      //银行选择列
      chooseBank(label, value, index) {
        this.isShow_bank = false;
        this.clickoutside();
        this.isActiveB = index;
        this.isActiveBC = index;
        if (label !== this.selectedBank) {
          this.selectedBank = label;
          this.filterSearch.bid = value;
          this.filterSearch.page = 0;
          this.loadPageList();
        }
      },
      //年费选择列
      chooseFee(label, value, index) {
        this.isShow_fee = false;
        this.clickoutside();
        this.isActiveF = index;
        this.isActiveFC = index;
        if (label !== this.selectedFee) {
          this.selectedFee = label;
          if(value == 0) {
            this.filterSearch.yp = '0';
            this.filterSearch.page = 0;
            this.loadPageList();
          }else {
            this.filterSearch.yp = value;
            this.filterSearch.page = 0;
            this.loadPageList();
          }
        }

      },
      //等级选择列
      chooseGrade(label, value, index) {
        this.isShow_grade = false;
        this.clickoutside();
        this.isActiveG = index;
        this.isActiveGC = index;
        if (label !== this.selectedGrade) {
          this.selectedGrade = label;
          if(value == 0) {
            this.filterSearch.level = '0';
            this.filterSearch.page = 0;
            this.loadPageList();
          }else {
            this.filterSearch.level = value;
            this.filterSearch.page = 0;
            this.loadPageList();
          }
        }
      },
      //分类选择列
      chooseClass(label, value, index) {
        this.isShow_class = false;
        this.clickoutside();
        this.isActiveC = index;
        this.isActiveCC = index;
        if (label !== this.selectedClass) {
          this.selectedClass = label;
          if(value == 0) {
            this.filterSearch.type = '0';
            this.filterSearch.page = 0;
            this.loadPageList();
          }else {
            this.filterSearch.type = value;
            this.filterSearch.page = 0;
            this.loadPageList();
          }
        }
      },
      //隐藏银行之外的选择项
      hideBankOther() {
        if(!this.isShow_bank) {
          this.isHide = false;
        } else {
          this.isHide = !this.isHide
        }

        this.invalidB = !this.invalidB;
        this.invalidF = false;
        this.invalidG = false;
        this.invalidC = false;
        this.isShow_bank = !this.isShow_bank;
        this.isShow_fee = false;
        this.isShow_grade = false;
        this.isShow_class = false;
        this.showBank = !this.showBank;
        this.showFee = false;
        this.showGrade = false;
        this.showClass = false;
        this.showAllF = false;
        this.showAllG = false;
        this.showAllC = false;

      },
      //隐藏年费之外的选择项
      hideFeeOther() {
        if(!this.isShow_fee) {
          this.isHide = false;
        } else {
          this.isHide = !this.isHide
        }
        this.invalidF = !this.invalidF;
        this.invalidB = false;
        this.invalidG = false;
        this.invalidC = false;
        this.isShow_fee = !this.isShow_fee;
        this.isShow_bank = false;
        this.isShow_grade = false;
        this.isShow_class = false;
        this.showFee = !this.showFee;
        this.showBank = false;
        this.showGrade = false;
        this.showClass = false;
        this.showAllB = false;
        this.showAllG = false;
        this.showAllC = false;
      },
      //隐藏等级之外的选择项
      hideGradeOther() {
        if(!this.isShow_grade) {
          this.isHide = false;
        } else {
          this.isHide = !this.isHide
        }

        this.invalidG = !this.invalidG;
        this.invalidF = false;
        this.invalidB = false;
        this.invalidC = false;
        this.isShow_grade = !this.isShow_grade;
        this.isShow_bank = false;
        this.isShow_fee = false;
        this.isShow_class = false;
        this.showGrade = !this.showGrade;
        this.showBank = false;
        this.showFee = false;
        this.showClass = false;
        this.showAllB = false;
        this.showAllF = false;
        this.showAllC = false;
      },
      //隐藏类别之外的选择项
      hideClassOther() {
        if(!this.isShow_class) {
          this.isHide = false;
        } else {
          this.isHide = !this.isHide
        }

        this.invalidC = !this.invalidC;
        this.invalidF = false;
        this.invalidG = false;
        this.invalidB = false;
        this.isShow_class = !this.isShow_class;
        this.isShow_bank = false;
        this.isShow_fee = false;
        this.isShow_grade = false;
        this.showClass = !this.showClass;
        this.showBank = false;
        this.showFee = false;
        this.showGrade = false;
        this.showAllB = false;
        this.showAllF = false;
        this.showAllG = false;
      },
      //点击空白地隐藏所有
      clickoutside() {

        this.isHide = true

        this.invalidB = false;
        this.invalidF = false;
        this.invalidG = false;
        this.invalidC = false;
        this.showBank = false;
        this.showFee = false;
        this.showGrade = false;
        this.showClass = false;
        this.isShow_bank = false;
        this.isShow_fee = false;
        this.isShow_grade = false;
        this.isShow_class = false;
        this.showAllB = false;
        this.showAllF = false;
        this.showAllG = false;
        this.showAllC = false;
      },
      // //统计立即申请点击
      // hotdetailsNum(index){
      //     this.regList.mob=this.$route.query.mob;
      //     this.regList.chan=this.$route.query.utm_source;
      //     this.regList.cid=this.pageList[index].creditid;
      //     this.regList.cname=this.pageList[index].creditname;
      //     registerHref(this.regList);
      //     this.operationList.mobile=this.$route.query.mob;
      //     this.operationList.channelSign=this.$route.query.utm_source;
      //     this.operationList.typeId=this.pageList[index].creditid;
      //     this.operationList.address=window.location.href;
      //     userOperation(this.operationList);
      // },
    },


    //自定义指令隐藏
    // directives : {
    //   clickOut: {
    //     bind: function(el, binding) {
    //       function handler(e) {
    //         if (el.contains(el.target)) return false;
    //         if (binding.expression) {
    //           binding.value()
    //         }
    //       }
    //       el.handler = handler;
    //       document.addEventListener('click', el.handler)
    //     },
    //     unbind: function(el) {
    //       document.removeEventListener('click', el.handler)
    //     }
    //   }
    // },

    computed: {

      //对图片进行处理
      imgUrlB() {
        if(this.showAllB === false) {
          return require('../../assets/xiala@2x.png');
        }else {
          return require('../../assets/xialaxuanzhong@2x.png');
        }
      },

      imgUrlF() {
        if(this.showAllF === false) {
          return require('../../assets/xiala@2x.png');
        }else {
          return require('../../assets/xialaxuanzhong@2x.png');
        }
      },

      imgUrlG() {
        if(this.showAllG === false) {
          return require('../../assets/xiala@2x.png');
        }else {
          return require('../../assets/xialaxuanzhong@2x.png');
        }
      },

      imgUrlC() {
        if(this.showAllC === false) {
          return require('../../assets/xiala@2x.png');
        }else {
          return require('../../assets/xialaxuanzhong@2x.png');
        }
      },
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
    position: fixed;
    top: 0;
    background:#fff;
  }
  .navTitle img{
    width: 24rpx;
    position: absolute;
    top: 20rpx;
    left: 5%;
  }
  .selectContainer{
    /*overflow auto*/
    /*-webkit-overflow-scrolling touch;*/
    /*遮罩层*/
    .overlayer{
      position: fixed;
      top: 88rpx;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: rgba(0, 0, 0, 0.5);
    }
    .select{
      border-bottom: 1px solid #f2f2f2;
      height:100rpx;
      line-height: 100rpx;
      background: #fff;
      z-index: 12;
      position: fixed;
    /*加title*/  
      /*top 44px*/
      /*position absolute*/
      /*top 0*/
      .selectItem{
        display: flex;
        justify-content: center;
        align-items: center;
        .inputWrapper{
          display: flex;
          height: 100rpx;
          line-height: 100rpx;
          align-items: center;
          width: 17.5%;
          padding-left: 7%;
          img{
            width: 10%;
            height: 8%;
            margin-left: 4rpx;
          }
           
          input{
            width: 49%;
            /*height 50px*/
            overflow: hidden;
            
            // letter-spacing: 10rpx;
            /*text-overflow: ellipsis;*/
            white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
          }
           
          input::-webkit-input-placeholder{
            color: #363636;
            /*font-family pingFangSC-Medium*/
            font-size: 16px;
          }
                 
          .invalidB::-webkit-input-placeholder{
            color: #7370ff;
          }
            
          .invalidB::placeholder{
            color: #7370ff;
          }
           
          /*.invalidB:-ms-input-placeholder,textarea:-ms-input-placeholder
            color: #7370ff;
          .invalidB::-moz-placeholder,textarea::-moz-input-placeholder
            color: #7370ff;*/
          .invalidF::-webkit-input-placeholder{
            color: #7370ff;
          }
            
          .invalidG::-webkit-input-placeholder{
            color: #7370ff;
          }
            
          .invalidC::-webkit-input-placeholder{
            color: #7370ff;
          }           
        }          
      }        
    }
      
    .ulClass{
      position:relative;
      top: 88rpx;
      /*加title*/
      /*top 90px*/
      ul{
        /*margin-top 49px*/
        padding-bottom: 30rpx;
        padding-left: 4%;
        width: 96%;
        height: auto;
        float: left;
        background-color: #fff;
        li{
          /*display flex*/
          justify-content: space-between;
          border:-2rpx(rgb(232, 232, 232));
          background: #fff;
          border:2rpx solid #bab7b7;
          border-radius:20px;
          /*padding 5px 35px*/
          color: #bab7b7;
          /*font-family pingFangSC-Medium*/
          font-size: 15px;
          height: 60rpx;
          line-height: 60rpx;
          width: 30%;
          float: left;
          text-align: center;
          margin: 30rpx 2% 0 0;
          overflow: hidden;
          .activeB{
            width: 40rpx;
            height: 40rpx;
            display: block;
            float: right;
            margin: 20rpx 20rpx 0 0;
            background: url("../../assets/xuanzhong@2x.png") no-repeat;
            background-position: 100% 100%;
            background-size: 40rpx 40rpx;
          }
            
          .activeF{
            width: 40rpx;
            height: 40rpx;
            display: block;
            float: right;
            margin: 20rpx 20rpx 0 0;
            background: url("../../assets/xuanzhong@2x.png") no-repeat;
            background-position: 100% 100%;
            background-size: 40rpx 40rpx;
          }
            
          .activeG{
            width: 40rpx;
            height: 40rpx;
            display: block;
            float: right;
            margin: 20rpx 20rpx 0 0;
            background: url("../../assets/xuanzhong@2x.png") no-repeat;
            background-position: 100% 100%;
            background-size: 40rpx 40rpx;
          }
            
          .activeC{
            width: 40rpx;
            height: 40rpx;
            display: block;
            float: right;
            margin: 20rpx 20rpx 0 0;
            background: url("../../assets/xuanzhong@2x.png") no-repeat;
            background-position: 100% 100%;
            background-size: 40rpx 40rpx;
          } 
           
        }
          
        .activeBC{
          border:2rpx solid #7370ff;
          color: #7370ff;
        }
          
        .activeFC{
          border:2rpx solid #7370ff;
          color: #7370ff;
        }
          
        .activeGC{
          border:2rpx solid #7370ff;
          color: #7370ff;
        }          
        .activeCC{
          border:2rpx solid #7370ff;
          color: #7370ff;
        }          
      }       
    }
      
    .content{
      -webkit-overflow-scrolling: touch;
      width: 100%;
      /*margin-top 30px*/
      position: absolute;
      top: 88rpx;
      /*加title*/
      /*top 90px*/
      z-index: -2;
      background-color: #fff;
      ul{
        text-align: center;
        /*margin-top 20px*/
        li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          /*margin-top 10px*/
          /*margin-bottom 10px*/
          padding: 40rpx 0;
          border-bottom: 1px solid #f2f2f2;
          
          .leftBox{
            margin-left: 2%;
            width: 100%;
            text-align: left;
            width: 100%;
            position: relative;
            .cardNum {
              position: absolute;
              text-align: center;
              width: 20%;
              right: 3%;
              bottom: 0;
              font-size: 11px;
              color: #666;
            } 
          }
          
          .rightBox{
            position: absolute;
            display: inline-block;
            width: 20%;
            height: 56rpx;
            line-height: 56rpx;
            border-radius: 20px;
            outline:none;
            font-size: 12px;
            position: absolute;
            right: 3%;
            top: 36%;
            border: 1px solid #ff5b3d;
            background-color: #fff;  
            span{
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
            section{
              float: left;
            }
          } 
            
          .creditRight{
            /*line-height 28px*/
            /*margin-left 7px*/
            display: inline-block;
            float: left;
            height: 144rpx;
            width:50%;
            
            p:nth-of-type(1){
              
              /*font-family  pingFangSC-Heavy*/
              color: #363636;
              font-size: 15px;
              width: 80%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-top: 4rpx;
              margin-bottom: 10rpx;
            } 
            p:nth-of-type(2){
              /*font-family pingFangSC-Medium*/
              font-size: 13px;
              color: #9a9a9a;
              /*margin-top -4px*/
              width: 75%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 20rpx;
            }
              
            .tips{
              padding: 4rpx 10rpx;
              color: #9a9a9a;
              border: 1px solid #bdbdbd;
              border-radius: 6px;
              font-size: 11px;
              /*font-family pingFangSC-Medium*/
              margin-right: 10rpx;
              /*max-width 37%*/
              float: left;
              text-align: center;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              /*border: .5px solid #bdbdbd;*/
              position: relative;
            }
             
            .tips::after{
              content: "  ";
              position: absolute;
              left: 0;
              top: 0;
              z-index:-1;
              width: 195%;
              height:50rpx;
              border-radius: 8px;
              // border: 2rpx solid #bdbdbd;
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
</style>
