<template>
  <div class="sort">
    <a href="#">
      <img src="~assets/img/profile/personal.svg" alt="">
      <span>个人主页</span>
    </a>
    <a href="#">
      <img src="~assets/img/profile/members2.svg" alt="">
      <span>会员中心</span>
    </a>
    <a href="#">
      <img src="~assets/img/profile/collect.svg" alt="">
      <span>收藏</span>
    </a>
    <a href="#">
      <img src="~assets/img/profile/attention.svg" alt="">
      <span>关注</span>
    </a>
    <a href="#">
      <img src="~assets/img/profile/footer.svg" alt="">
      <span>足迹</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Sort'
}
</script>

<style scoped>
  .sort{
    margin: 5px 5px 0;
    border-radius: 5px;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .sort a{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sort a span{
    margin-top: 10px;
    font-size: 14px;
  }
</style>