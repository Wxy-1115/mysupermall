<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList"
                      :itemInfo="item"
                      :key="index"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import { mapGetters } from "vuex";
import CartListItem from './CartListItem.vue';

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() { 
    // console.log("refresh");
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  position: fixed;
  top: 44px;
  height: calc(100vh - 93px - 40px);
  overflow: hidden;
}
.content{
  /* position: relative; */
  /* top: 44px; */
  height: 100%;
  overflow: hidden;
}
</style>