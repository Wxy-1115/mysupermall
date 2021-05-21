<template>
  <goods-list :goods="goodsList" class="category-goods-list"/>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
  components: { GoodsList },
  name: 'CategoryGoodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .category-goods-list .goods-item .goods-info .cfav::before{
    content: none;
  }
</style>