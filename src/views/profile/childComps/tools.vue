<template>
  <div class="tools">
    <nav-bar class="tools-nav-bar">
      <template v-slot:left class="left">我的工具</template>
    </nav-bar>
    <div class="tools-sort">
      <a href="#">
        <img src="~assets/img/order/paid.svg" alt="">
        <span>待付款</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/delivery.svg" alt="">
        <span>待发货</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/takeDelivery.svg" alt="">
        <span>待收货</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/assess.svg" alt="">
        <span>评价</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/drawback.svg" alt="">
        <span>退款售后</span>
      </a>
        <a href="#">
        <img src="~assets/img/order/paid.svg" alt="">
        <span>待付款</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/delivery.svg" alt="">
        <span>待发货</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/takeDelivery.svg" alt="">
        <span>待收货</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/assess.svg" alt="">
        <span>评价</span>
      </a>
      <a href="#">
        <img src="~assets/img/order/drawback.svg" alt="">
        <span>退款售后</span>
      </a>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'Tools',
  components: { 
    NavBar 
  },

}
</script>

<style>
  .tools{
    margin: 5px;
    background-color: #fff;
    border-radius: 5px;
  }
  .tools .left{
    width: auto;
  }
  .tools-sort{
    margin: 5px 5px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fff;
  }
  .tools-sort a{
    margin-bottom: 20px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .tools-sort a span{
    margin-top: 10px;
    font-size: 14px;
  }
</style>