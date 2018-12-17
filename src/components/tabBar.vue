<template>
  <section class="tabBar-wrap">
    <article class="tabBar-box">
      <ul class="tabBar-nav" v-if="navList.length > 0">
        <li class="item" v-for="(item, index) in navList"
            @click="selectNavItem(index,item.pagePath)"
            :key="index">
          <p class="item-images">
            <img style="width:50rpx;" mode="widthFix" :src="selectNavIndex === index ? item.selectedIconPath : item.iconPath" alt="iconPath">
          </p>
          <p :class="selectNavIndex === index ? 'item-text item-text-active' : 'item-text' ">
            {{item.text}}
          </p>
        </li>       
      </ul>
    </article>
  </section>
</template>
<script>
//   import store from '..uex/index'
  export default {
    props: ['selectNavIndex', 'needButton', 'handButton', 'btnText'],
    data() {
      return {
        selectNavIndex: '',
        navList: [
          {
            pagePath: "/pages/index/main",
            iconPath: "/static/bankaNoactive.png",
            selectedIconPath: "/static/bankaActive.png",
            text: "办卡"
          },
          {
            pagePath: "/pages/downloadApp/main",
            iconPath: "/static/shoukuanweidianji@3x.png",
            selectedIconPath: "/static/shoukuan@3x.png",
            text: "更多收益"
          },       
        ],
      }
    },
    methods: {
       selectNavItem(index, pagePath) {
        // console.log(index)
        // console.log(pagePath)
        // console.log(this.selectNavIndex)
        wx.redirectTo({
          url:pagePath
        })
        // if(index){
        //   wx.navigateTo({
        //     url:pagePath
        //   })
        // }else{
          
        // }
        
        
        // this.bindViewTap(pagePath);
      },
       /**
       * tabBar路由跳转
       */
      // bindViewTap(url) {
      //   // 回到顶部
      //   // if (url === '../index/main') {
      //   //   store.commit('setGroupsID', '');
      //   // }
      //   wx.switchTab({
      //     url:url,
      //   })
      // },
      // /*
      //  * 点击导航栏
      //  */
 
    }
  }

</script>
<style lang="scss" scoped>
  .tabBar-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    padding: 10rpx 0;
    box-sizing: border-box;
    border-top: 1px solid #eee;
    background-color: #f8f8f8;
  }

  .tabBar-nav {
    width: 100%;
    display: flex;

    .item {
      flex: 1;
      text-align: center;
    }
    .item-text {
      color: #999;
      font-size: 13px;
      transition: .24s linear;
    }
    .item-text-active {
      color: #b08c4d;
    }
    .item-images {
      width: 50rpx;
      height: 50rpx;
      margin: 0 auto;
      text-align: center;
      transition: .24s linear;
      img {
        // display: inline-block;
        width: 60rpx;
      }
    }
  }

  button {
    border: none;
    outline: none;
  }
</style>