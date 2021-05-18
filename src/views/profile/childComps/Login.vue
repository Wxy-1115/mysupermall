<template>
<div class="login">
  <myself>
    <template v-slot:icon>
      <img src="~assets/img/profile/login.svg" class="icon">
    </template>
    <template v-slot:info>
      请登录 / <a href="#">注册</a>
    </template>
  </myself>
</div>
</template>

<script>
import Myself from 'components/common/myself/Myself.vue'
export default {
  name: 'Login',
  components: {
    Myself
  }
 }
</script>

<style scoped>
  .login a{
    color: #fff;
  }
  .icon{
    width: 50px;
    height: 50px;
    margin-left: -1px;
    margin-top: -1px;
  }
  
</style>