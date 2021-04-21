<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"
                          @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detai-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommend"/>
    </scroll>
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

import {itemListenerMixin} from 'comment/mixin';

export default {
  name: 'Detail',
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      detailHeight: 0,
      itemImageListener: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
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
    GoodsList
  },
  created() {
    this.$nextTick(() => {
      this.getViewHeight()
    })
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
    },
    getViewHeight() {
      this.detailHeight = window.innerHeight + 'px'
    },
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
  height: 100vh;
}

.detail-nav{
  position: relative;
  background-color: #fff;
  z-index: 9;
}

.content{
  height: calc(100vh - 44px); 
}
/* .content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 0;
  left: 0;
  right: 0;
} */

</style>