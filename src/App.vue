<template>
  <div id="nav">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isShow"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
      isShow: true
    }
  },
  updated() {
    // this.isShow = true
  },
  created(){
    // 定义两个主线方法监听底部导航栏显示与隐藏
    this.$bus.$on('mainTabBarShow', ()=>{
      this.isShow = true
    }),
    this.$bus.$on('mainTabBaNotshow', ()=>{
      this.isShow = false
    })
  }
}
</script>
<style>
  @import url('assets/css/base.css');
</style>