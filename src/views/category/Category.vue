<template>
  <div class="category">
    <scroll class="contentleft">
      <category-tab-content :categoryList="categoryList" 
                          @itemClick="itemClick"/>
    </scroll>
    <scroll class="content" ref="scroll">
      <category-goods-list :goodsList="categoryGoodsList"/>
    </scroll>
  </div>
</template>

<script>

import { getCategory, getSubCategory, getCategoryDetail } from "network/category";
import CategoryTabContent from './ChildComps/CategoryTabContent.vue';
import CategoryGoodsList from './ChildComps/CategoryGoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';

export default {
  name: 'Category',
  components: {
    CategoryTabContent,
    CategoryGoodsList,
    Scroll
  },
  data() {
    return {
      categoryList: [],
      categoryGoodsList: [],
      maitKey: 3627,
      miniWallkey: 10062603
    }
  },
  created() {
    this.getCategory()
    this.getSubCategory(this.maitKey)
    // this.getCategoryDetail(50003, 'pop')
  },
  activated() { 
    this.$refs.scroll.refresh()
    this.$bus.$emit('mainTabBarShow')
  },
  methods: {
    itemClick(index) {
      this.maitKey = this.categoryList[index].maitKey
      this.getSubCategory(this.maitKey)
    },

    getCategory() {
      // 获取分类数据
      getCategory().then((res) => {
        const goods = res.data.category
        this.categoryList = goods.list
      })
    },

    getSubCategory(maitKey) {
      // 请求maitKey分类数据
      getSubCategory(maitKey).then((res) => {
        // console.log(res);
        this.categoryGoodsList = res.data.list
        // console.log(this.categoryGoodsList);
      })
    },

    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        // console.log(res);
      })
    }
  }
};
</script>

<style scoped>
.content{
  position: fixed;
  right: 0;
  top: 0;
  width: 70vw;
  height: calc(100vh - 49px);
}
.contentleft{
  height: calc(100vh - 49px);
}
</style>