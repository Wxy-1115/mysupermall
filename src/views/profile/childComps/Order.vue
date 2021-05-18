<template>
  <div class="order">
    <nav-bar class="order-nav-bar">
      <template v-slot:left class="left">我的订单</template>
      <template v-slot:right class="right">全部</template>
    </nav-bar>
    <div class="order-sort">
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
  name: 'Order',
  components: { 
    NavBar 
  },

}
</script>

<style>
  .order{
    margin: 5px;
    height: 130px;
    background-color: #fff;
    border-radius: 5px;
  }
  .order-nav-bar .left{
    width: auto;
  }
  .order .right{
    font-size: 14px;
  }
  .order-sort{
    margin: 5px 5px 0;
    border-radius: 5px;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .order-sort a{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .order-sort a span{
    margin-top: 10px;
    font-size: 14px;
  }
</style>