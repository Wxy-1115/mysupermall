<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    ref="nav"
                    @titleClick="titleClick"/>
    <scroll ref="scroll" 
            class="content" 
            :probe-type="3"
            @scroll="dcontentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"
                          @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detai-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top v-show="showBackTop" @click.native="backClick"/>
  </div>
</template>

<script>
import DetailNavBar from './ChildComps/DetailNavBar.vue'
import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail';
import DetailSwiper from './ChildComps/DetailSwiper.vue';
import DetailBaseInfo from './ChildComps/DetailBaseInfo.vue';
import DetailShopInfo from './ChildComps/DetailShopInfo.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import DetailGoodsInfo from './ChildComps/DetailGoodsInfo.vue';
import DetailParamInfo from './ChildComps/DetailParamInfo.vue';
import DetaiCommentInfo from './ChildComps/DetaiCommentInfo.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

import {itemListenerMixin, showBackTopMixin} from 'comment/mixin';
import DetailBottomBar from './ChildComps/DetailBottomBar.vue';


export default {
  name: 'Detail',
  mixins: [itemListenerMixin, showBackTopMixin],
  beforeCreate(){
  },
  data() {
    return {
      iid: null,
      detailHeight: 0,
      activeIndex: 0,
      itemImageListener: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [0]
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetaiCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  created() {
    this.$nextTick(() => {
      this.getViewHeight()
    })
    // 隐藏底部导航栏
    this.$bus.$emit('mainTabBaNotshow')
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 发送网络请求获取商品信息
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result
      // 获取顶部的轮博数据
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 创建店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详细信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取评论信息
      if(data.rate.cRate !== 0) {
      this.commentInfo = data.rate.list[0]
      }
    })
    // 发送网络请求获取推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs);
    },
    getViewHeight() {
      this.detailHeight = window.innerHeight + 'px'
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },
    dcontentScroll(position) {
      const pageY = -position.y
      const length = this.themeTopYs.length
      // console.log(length);
      for(let i = 0; i < length-1; i++){
        if((this.activeIndex !== i) && ((pageY >= this.themeTopYs[i] && pageY < this.themeTopYs[i+1]))){
          this.activeIndex = i
          this.$refs.nav.currentIndex = this.activeIndex
        }
      }
      this.toBackTop(position)
    },
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // console.log(product);
      this.$store.dispatch('addCart', product).then((res) => {
        console.log(res);
      })
    }
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('imgload', this.itemImageListener)
  }
}
</script>

<style scoped>
#detail{
  position: relative;

  background-color: #fff;
  z-index: 9;
  height: 100%;
  /* overflow: hidden; */
}

.detail-nav{
  position: relative;
  background-color: #fff;
  z-index: 9;
}

.content{
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