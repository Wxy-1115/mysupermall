<template>
  <div class="register">
  <myself>
    <template v-slot:icon>
      <img src="~assets/img/profile/1.jpeg" class="icon">
    </template>
    <template v-slot:info class="info">
      <h3>阳光划过天际 你是否还想起我</h3>
      <span class="memebers">
        <img src="~assets/img/profile/members.svg">时尚小萌
      </span>
    </template>
  </myself>
</div>
</template>

<script>
import Myself from 'components/common/myself/Myself.vue'

export default {
  name: 'Register',
  components: {
    Myself
  }
}
</script>

<style scoped>
  .icon{
    width: 50px;
    height: 50px;
    margin-left: -1px;
    margin-top: -1px;
  }
  .info h3{
    margin-top: 10px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .memebers{
    position: relative;
    display: inline-block;
    margin-top: 5px;
    text-indent: 20px;
    width: 80px;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    font-size: 10px;
    background-image: linear-gradient(to right, rgb(255, 166, 0) , rgb(251, 255, 0));
    border-radius: 10px;
  }
  .memebers img{
    position: absolute;
    left: 0;
  }
</style>