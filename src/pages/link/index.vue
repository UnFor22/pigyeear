<template>
  <web-view src="http://baidu.com"></web-view>
</template>

<script>
  export default {
    data(){
      linkUrl:''
    },
    onLoad(option){
      // this.linkUrl = option.url
      // console.log(option.url);
      // console.log(option.url2);


      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];   //当前页面
      let prevPage = pages[pages.length - 2];  //上一个页面
      // console.log(prevPage.data.urlStr);
      this.linkUrl = prevPage.data.urlStr;

      // console.log(this.$root.$mp.query)
      // console.log('this.linkUrl', this.linkUrl)
    },
  computed: {
  },
  methods: {
    
  }
}
</script>

<style>

</style>
