<template>
  <div class="cart">
    <nav-bar class="nav-bar">
        <template v-slot:center>
          <div class="center">
            购物车({{length}})
          </div>
        </template>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex';
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

export default {
  name: 'Cart',
  components: { 
    NavBar,
    CartList,
    CartBottomBar 
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  },
  
}
</script>

<style scoped>
.cart {
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
}
.nav-bar{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  z-index: 9;
}

</style>