// 'use strict';
//全局配置fly请求
// var Fly = require("../../node_modules/flyio/dist/npm/wx") 
const Fly = require("flyio/dist/npm/wx");
const Qs = require('qs');
const fly = new Fly;

//配置请求基地址
// const baseURL = 'https://api.fengniaojizhang.com';
// const baseURL = 'https://main.kamicard.com';
const baseURL = 'https://main.pcuion.com';

/**
 * http request 请求拦截器，有token值则配置上token值
 */
fly.interceptors.request.use(
    config => {
      // if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      //   config.headers.Authorization = token;
      // }
    //   let token;
    //   try {
    //     let value = wx.getStorageSync('session');
    //     if (value) {
    //       token = value;
    //       // config.headers.Authorization = 'hxb';
    //       // console.log(config);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   config.headers['X-AUTH-TOKEN']=token;
    //   return config;
    // },
    // error => {
    //   console.log('request error', error);
    //   return Promise.reject(error);
    }
);
/**
 * http response 服务器响应拦截器，这里拦截401等错误，并重新跳入登页重新获取token
 */
fly.interceptors.response.use(
    response => {
      //如果token失效，跳转到登录页
    //   try {
    //     if (response.data.code == '01004') {
    //       // const url = `../../../pages/login/main?keyData=01004`;
    //       // wx.redirectTo({url});
    //       wx.login({
    //         success: function(res) {
    //           let code = res.code;
    //           if(code) {
    //             console.log('获取用户登录凭证：' + code);
  
    //             // ---------发送用户登录凭证-------------
    //             loginAPI(code).then(response => {
    //               console.log('服务器正常返回session', response);
    //               //如果用户未注册
    //               if(response.code == '01034') {
    //                 //存储后台返回的sessionKey
    //                 // this.sessionKey = response.result.key;
    //                 //将页面切换到登录页
    //                 const url = `/pages/login/main?key=${response.result.key}`;
    //                 wx.reLaunch({url});
    //               }
    //               else
    //               if(response.code == '200'){
    //                 //如果用户已经注册，后台返回加密session，存储到Storage中  (X-AUTH-TOKEN)
    //                 wx.setStorage({
    //                   key: "session",
    //                   data: response.result.token
    //                 });
    //                 //页面跳转到首页
    //                 const url = '../../../pages/details/index/main';
    //                 wx.reLaunch({url});
    //               }
    //               else {
    //                 console.log('服务器异常');
    //               }
    //             }).catch(error => {
    //               console.log('发送失败', error);
    //             })
    //             // ------------------------------------
  
    //           }else {
    //             console.log('获取用户登录态失败：' + res);
    //           }
    //         },
    //         fail: function (err) {
    //           console.log('调用登录接口失败', err);
    //         },
    //       });
  
    //     }else if(response.data.code == '01021') {
    //       wx.login({
    //         success: function(res) {
    //           let code = res.code;
    //           if(code) {
    //             console.log('获取用户登录凭证：' + code);
  
    //             // ---------发送用户登录凭证-------------
    //             loginAPI(code).then(response => {
    //               console.log('服务器正常返回session', response);
    //               //如果用户未注册
    //               if(response.code == '01034') {
    //                 //存储后台返回的sessionKey
    //                 // this.sessionKey = response.result.key;
    //                 //将页面切换到登录页
    //                 const url = `/pages/login/main?key=${response.result.key}`;
    //                 wx.reLaunch({url});
    //               } else if(response.code == '200'){
    //                 //如果用户已经注册，后台返回加密session，存储到Storage中  (X-AUTH-TOKEN)
    //                 wx.setStorage({
    //                   key: "session",
    //                   data: response.result.token
    //                 });
    //                 //页面跳转到首页
    //                 const url = '../../../pages/details/index/main';
    //                 wx.reLaunch({url});
    //               } else {
    //                 console.log('服务器异常');
    //               }
    //             }).catch(error => {
    //               console.log('发送失败', error);
    //             })
    //             // ------------------------------------
  
    //           }else {
    //             console.log('获取用户登录态失败：' + res);
    //           }
    //         },
    //         fail: function (err) {
    //           console.log('调用登录接口失败', err);
    //         },
    //       });
    //     }else {
  
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   return response;
    // },
    // error => {
    //   console.log('response error', error);
    //   if (error.response) {
    //     console.log(error.response.status);
    //     switch (error.response.status) {
    //       case 401:
    //         //如果token失效，重新登录
    //         break;
    //     }
    //   }
    //   return Promise.reject(error)
    }
);

/*
 * 发送网络请求
 * @param params  请求参数
 * @returns {Promise<FlyResponse<any>>}
 */

//用户登陆
// export const loginAPI = params => {
//     return fly.post(`${baseURL}/rest/api/v1/loginByWXApplet/wxapplet`, {code: params}).then(res => res.data);
// };
//热门银行
export const getHotBankInfoList = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/gethotbankinfolist`,  {params: {}}).then(res => res.data);
};
//主题精选
export const getTopicSelect = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/TopicSelect`, {params: {}}).then(res => res.data);
  };
  
  //轮播图
  export const getBannerImg = params => {
    return fly.post(`${baseURL}/api.php/lbtimage/index?mid=11`).then(res => res.data);
  };
  
  //轮播文字
  export const getBannerTxt = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/KamiNews`).then(res => res.data);
  };
  
  
  //热门信用卡
  export const getHotCard = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/HotCredit?t=${params.t}&page=${params.page}&token=${params.token}`).then(res => res.data);
  };
  
  
  //热门银行的所有信用卡详情getHotBankInfoList
  export const getHotBankInfoListDetails = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/GetCreditCardDetails?bankid=${params.bankid}&t=${params.t}&page=${params.page}&token=${params.token}`).then(res => res.data);
  };
  
  //筛选银行
  export const getFilterHotBank = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/FilterCredit?bid=${params.bid}&yp=${params.yp}&level=${params.level}&type=${params.type}&page=${params.page}&token=${params.token}`).then(res => res.data);
  };
  
  //贷款筛选
  export const getFilterLoan = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/ShowLoanInfo?minm=${params.minm}&maxm=${params.maxm}&mind=${params.mind}&maxd=${params.maxd}&t=${params.t}&page=${params.page}&token=${params.token}`).then(res => res.data);
  };
  
  //进度查询
  export const getProgress = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/Proact?type=1`).then(res => res.data);
  };
  
  //激活查询
  export const getActivation = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/Proact?type=2`).then(res => res.data);
  };
  
  //代还查询
  export const getOnBehalf = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/Repayment?page=${params.page}`).then(res => res.data);
  };
  
  //第三方跳转统计
  export const registerHref = params => {
      return fly.post(`${baseURL}/api.php/CreditPage/sendCreditStatics`, Qs.stringify(params)).then(res => res.data);
  };
  
  //记录用户操作接口
  export const userOperation = params => {
      return fly.post(`${baseURL}/api.php/user/userOperation`, Qs.stringify(params)).then(res => res.data);
  };
  
  
  export const getApplyOn = params => {
    return fly.post(`${baseURL}/api.php/CreditPage/Repayment?page=1`).then(res => res.data);
  };
  //统计立即购买creditid&bankid
  export const postHotdetailsNum = params => {
      /*console.log(params);*/
    return fly.post(`${baseURL}/api.php/CreditPage/GetCreditStatics?creditid=${params.creditid}&bankid=${params.bankid}`).then(res => res.data);
  };
  //统计立即购买creditid&bankid
  export const getContent = params => {
    /*console.log(params);*/
    return fly.post(`${baseURL}/api.php/CreditPage/getcontent?`).then(res => res.data);
  };
  //统计立即购买creditid&bankid
  export const getUserOpenid = params => {
    return fly.post(`${baseURL}/api.php/msg/getwxcode?code=${params}`).then(res => res.data);
  };

  // 点击 开 激活任务
  export const startTask = params => {
    // console.log('点击开激活任务参数',params)
    return fly.post(`${baseURL}/api.php/userwx/starttask`,  Qs.stringify(params)).then(res => res.data);
  };
  // function urlencode (str) {  
  //   str = (str + '').toString();   
  //   return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
  //   replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
  // } 
  // 小程序用户信息上传
  export const postUserInfo = params => {
    
    console.log('上传信息参数',params)
    return fly.post(`${baseURL}/api.php/userwx/savewxuserinfo`, Qs.stringify(params)).then(res => res.data);
  };  
  // 获取活动进度，状态
  export const getTaskInfo = params => {
    // console.log('获取活动进度参数',params)
    return fly.post(`${baseURL}/api.php/userwx/getaskinfo`, Qs.stringify(params)).then(res => res.data);
  };
  // 获取任务进度，状态
  export const getRWInfo = params => {
    // console.log('获取任务进度参数',params)
    return fly.post(`${baseURL}/api.php/userwx/getrwstatus`, Qs.stringify(params)).then(res => res.data);
  };
  // 帮助好友助力
  export const helpHe = params => {
    // console.log('获取任务进度参数',params)
    return fly.post(`${baseURL}/api.php/userwx/pushpower`, Qs.stringify(params)).then(res => res.data);
  };
  // 获取验证码
  export const getCode = params => {
    // console.log('获取任务进度参数',params)
    return fly.post(`${baseURL}/api.php/userwx/getwxsms`, Qs.stringify(params)).then(res => res.data);
  };
  // 绑定手机
  export const bandPhone = params => {
    // console.log('获取任务进度参数',params)
    return fly.post(`${baseURL}/api.php/userwx/bindmob`, Qs.stringify(params)).then(res => res.data);
  };
  // function urlencode (str) {  
  //   str = (str + '').toString();   

  //   return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
  //   replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
  // } 
   //统计立即购买creditid&bankid
  export const postUser = params => {
    // var g_openid = "";
    // wx.getStorage({
    //   key: 'user',
    //   success (res) { 
    //     // console.log('bbb',res)
    //     params.openId = res.data.openId;
    //     g_openid = urlencode(params.openId);
    //       console.log('11111',params.openId );   
    return fly.post(`${baseURL}/api.php/msg/savewxuserinfo?nickName=${params.username}&avatarUrl=${params.avatarUrl}&wxid=${params.openid}&gender=${params.gender}&province=${params.province}&city=${params.city}`).then(res => res.data);
      // }
    // })  
 //  console.log('params',params); 
 //  console.log('222',g_openid);     
   // return fly.post(`https://main.pcuion.com/api.php/msg/savewxuserinfo?nickName=${params.username}&avatarUrl=${params.avatarUrl}&wxid=${g_openid}&gender=${params.gender}&province=${params.province}&city=${params.city}`).then(res => res.data);  
  };
  