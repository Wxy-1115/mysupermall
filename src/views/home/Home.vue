<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
        <home-swiper :banners="banners" />
        <reconmmend-view :recommends="recommends" />
        <feature></feature>
        <tab-control
          class="tab-control"
          :titles="titles"
          @tabClick="tabClick"/>
        <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="showBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from 'components/content/backTop/BackTop';

import HomeSwiper from "./childComps/HomeSwiper";
import ReconmmendView from "./childComps/ReconmmendView";
import Feature from "./childComps/Feature";

import { getHomeMultidata, getHomeGoods } from "network/home";

import Scroll from 'components/common/scroll/Scroll';

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    ReconmmendView,
    Feature,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      showBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*
     *事件监听相关方法
     */
    tabClick(index) {
      // console.log(index);
      // switch (index) {
      //   case 0:
      //     this.currentType = 'pop'
      //     break
      //   case 1:
      //     this.currentType = 'new'
      //     break
      //   case 2:
      //     this.currentType = 'sell'
      //     break
      // }
      this.currentType = Object.keys(this.goods)[index];
    },
    backClick() {
      // console.log("backClick");
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 回到顶部
    contentScroll(position) {
      this.showBackTop = false
      if(position.y < -1000){
        this.showBackTop = true
      }
    },
    // 加载更多
    loadMore() {
      console.log("加载更多");
      this.getHomeGoods(this.currentType)
    },
    /*
     *网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods[type]);
      });
    },

  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  z-index: 9;
}
#tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
/* .content{
  height: calc(100% - 44px);
} */
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>