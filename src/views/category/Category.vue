<template>
  <div class="category">
    <scroll class="contentleft">
      <category-tab-content :categoryList="categoryList" 
                          @itemClick="itemClick"/>
    </scroll>
    <scroll class="content">
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
      maitKey: 0
    }
  },
  created() {
    this.getCategory()
    this.getSubCategory(this.maitKey)
    // this.getCategoryDetail(10062603, 'pop')
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
        this.maitKey = this.categoryList[0].maitKey
        // console.log(this.maitKey);
        // console.log(this.categoryList);
      })
    },

    getSubCategory(maitKey) {
      // 请求maitKey分类数据
      getSubCategory(maitKey).then((res) => {
        console.log(res);
        this.categoryGoodsList = res.data.list
        console.log(this.categoryGoodsList);
      })
    },

    getCategoryDetail(miniWallkey, type) {

      getCategoryDetail(miniWallkey, type).then((result) => {
        // console.log(result);
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