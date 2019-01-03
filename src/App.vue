<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')
  },
  //页面设置转发功能
  // onShareAppMessage: function (res) {
  //   return {
  //     title: `111，大神玩卡`,
  //     imageUrl: 'https://head.image.fengniaojizhang.cn/duck/shareLoveMoneyDuck.jpg',
  //     path: `/pages/hotDetails/index`
  //   }
  // },
  // previewImage: function (e) {  
  //       console.log(e)
	// 	var current=e.target.dataset.src;
	// 	wx.previewImage({
	// 	  	current: current, // 当前显示图片的http链接
	// 	  	// urls: this.data.imgalist // 需要预览的图片http链接列表
	// 	})
	// },
}
</script>

<style>
/* .container { */
  /* height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  /* padding: 200rpx 0; */
  /* box-sizing: border-box; */
/* } */
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
</style>
