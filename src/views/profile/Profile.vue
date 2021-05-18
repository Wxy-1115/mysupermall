<template>
  <div class="profile">
    <profil-nav-bar/>
    <scroll class="profile-scroll">
      <div class="user">
        <login v-if="isLogin"/>
        <register v-else/>
      </div>
      <sort/>
      <order/>
      <tools/>
      <div class="line">精品推荐</div>
      <goods-list :goods="recommend" class="profile-list"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'

import Login from './childComps/Login.vue'
import Order from './childComps/Order.vue'
import ProfilNavBar from './childComps/ProfilNavBar.vue'
import Register from './childComps/Register.vue'
import Sort from './childComps/Sort.vue'
import Tools from './childComps/tools.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import { getRecommend } from "network/detail";

export default {
  name: 'Profile',
  components: {
    Login,
    ProfilNavBar,
    Register,
    Sort,
    Order,
    Scroll,
    Tools,
    GoodsList
  },
  data() {
    return {
      isLogin: false,
      recommend: []
    }
  },
  created(){
    // 发送网络请求获取推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
  }
}
</script>

<style scoped>
  .profile{
    width: 100%;
    background-color: #f2f5f8;
  }
  .profile-scroll{
    margin-top: 44px;
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .split{
    margin: 20px;
  }
  .line{
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
  }
</style>>