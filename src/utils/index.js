// // function formatNumber (n) {
// //   const str = n.toString()
// //   return str[1] ? str : `0${str}`
// // }

// // export function formatTime (date) {
// //   const year = date.getFullYear()
// //   const month = date.getMonth() + 1
// //   const day = date.getDate()

// //   const hour = date.getHours()
// //   const minute = date.getMinutes()
// //   const second = date.getSeconds()

// //   const t1 = [year, month, day].map(formatNumber).join('/')
// //   const t2 = [hour, minute, second].map(formatNumber).join(':')

// //   return `${t1} ${t2}`
// // }

// // export default {
// //   formatNumber,
// //   formatTime
// // }
// const baseUrl = "https://main.kamicard.com"
// const fetch = {
//   http (url, method, data){
//     return new Promise ((resolve,reject)=>{
//       let token = wx.getStorageSync('token')
//       let header = {
//         'content-type': 'application/json'
//       }
//       if (token) {
//         header.token = token
//       }
//       wx.request({
//         url: baseUrl + url,
//         data,
//         method,
//         // header,
//         success(res) {
//           // console.log(res)
//           // if(res.header.Token){
//             // wx.setStorageSync('token', res.header.Token)
//           // }
//           resolve(res.data)
//         },
//         fail(err) {
//           reject(err)
//         },
//       })
//     })  
//   },
//   get (url,data){
//     return this.http(url,'GET',data)
//   },
//   post(url,data) {
//     return this.http(url, 'POST', data)
//   }
// }
// const login = () => {
//   wx.login({
//     success(res){
//       fetch.post('/login',{
//         code: res.code,
//         appid: "wx974c96e191f3f8ea",
//         secret: '1f8fd294397d8f4b7a442d2ae6c87e52'
//       }).then(res => {
//         console.log(res)
//       })
//     }
//   })
// }
// export {
//   login,
//   fetch
// };
// // exports.fetch = fetch;