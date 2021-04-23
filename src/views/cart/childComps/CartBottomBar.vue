<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <check-button class="check-all" :isChecked="isSelectAll" @click.native="checkAll"></check-button>
      <span class="left-text">全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate"> 
      去计算:({{totalPackages}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
import { mapGetters } from "vuex";

export default {
  components: { CheckButton },
  name: 'CartBottomBar',
  computed:{
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    totalPackages() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((value, item) => {
        return value + item.count
      }, 0)
    },
    isSelectAll() {
      return this.cartList.length !== 0 && this.cartList.every(item => item.checked)
    }
  },
  methods: {
    checkAll() {
      if(!this.isSelectAll){
        this.cartList.forEach(item => item.checked = true)
      }else{
        this.cartList.forEach(item => item.checked = false)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #f2f5f8;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;

    display: flex;

    z-index: 9;
  }
  .bar-left{
    margin: 10px;
    display: flex;
    align-items: center;
  }
  .check-all{
    width: 20px;
    height: 20px;
  }

  .left-text{
    margin-left: 5px;
  }

  .price {
    flex: 1;
    text-align: center;
    line-height: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .calculate{
    line-height: 40px;
    padding: 0 20px;
    background-color: var(--color-tint);
  }
</style>