<template>
  <div class="myself">
    <div class="icon"><slot name="icon"></slot></div>
    <div class="info"><slot name="info"></slot></div>
    <div class="other"><slot name="other"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Myself'
}
</script>

<style scoped>
  .myself {
    display: flex;
    padding: 25px;
    height: 100px;
    background-color: #ff8198;
    overflow: hidden;
  }
  .icon {
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
  .info {
    max-width: 150px;
    height: 50px;
    margin-left: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
</style>