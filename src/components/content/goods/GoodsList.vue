<template>
  <div class="goods-list">
    <good-list-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  components: { GoodListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  /* padding: 2px; */
}
</style>