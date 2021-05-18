<template>
  <nav-bar class="nav-bar">
    <template v-slot:right>设置</template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'ProfileNavBar',
  components: {
    NavBar,
  }
}
</script>

<style scoped>
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ff8198;
    color: #fff;
    margin-bottom: 1px;
  }
</style>