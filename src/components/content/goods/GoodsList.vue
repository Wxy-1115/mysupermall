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
  },
  methods: {
    // imgloadList() {
    //   // console.log("imgloadList");
    //   this.$emit('imgloadList')
    // }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  /* padding: 2px; */
}
</style>