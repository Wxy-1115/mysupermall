<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control :titles="titles" 
              @tabClick="tabClick"
              ref="tabControl1"
              class="tab-control" 
              v-show="isFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            :style="{height:detailHeight}">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <reconmmend-view :recommends="recommends" />
        <feature></feature>
        <tab-control :titles="titles" 
                     @tabClick="tabClick"
                     ref="tabControl2"/>
        <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="showBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from 'components/common/scroll/Scroll';

import HomeSwiper from "./childComps/HomeSwiper";
import ReconmmendView from "./childComps/ReconmmendView";
import Feature from "./childComps/Feature";

import { getHomeMultidata, getHomeGoods } from "network/home";

import {itemListenerMixin, showBackTopMixin} from 'comment/mixin';

export default {
  name: "Home",
  mixins: [itemListenerMixin, showBackTopMixin],
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    ReconmmendView,
    Feature,
    Scroll,
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
      detailHeight: 0,
      currentType: "pop",
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0,
      itemImageListener: null
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

    this.$nextTick(() => {
      this.getViewHeight()
    })
  },
  mounted() {
    
  },
  activated() { 
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    this.$bus.$on('imgload', this.itemImageListener)
    this.$bus.$emit('mainTabBarShow')
  },
  deactivated() {
    // console.log(this.saveY);
    this.$bus.$off('imgload', this.itemImageListener)
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 监听scroll滚动
    contentScroll(position) {
      // 判断tabControl是否吸顶
      this.isFixed = -position.y > this.tabOffsetTop
      this.saveY = position.y
      this.toBackTop(position)
    },
    // 加载更多
    loadMore() {
      // console.log("currentType");
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      // 获取tabControl的offsettop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    getViewHeight() {
      this.detailHeight = window.innerHeight + 'px'
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
        this.$refs.scroll.finishPullUp()
      });
    },

  },
  
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100%;
  position: relative;
  /* z-index: 9; */
  overflow: hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  z-index: 9;
}
.tab-control {
  position: absolute;
  width: 100%;
  top: 44px; 
  background-color: #fff;
  z-index: 9;
}
.content{
  position: relative;
  top: 44px;
  height: calc(100vh - 93px);
  overflow: hidden;
}
/* .content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
</style>