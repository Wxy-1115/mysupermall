<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button @click.native="checkClick" :is-checked="itemInfo.checked"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">
          <button class="btn" @click="increase">+</button>
          x{{itemInfo.count}}
          <button class="btn" @click="decrease" :disabled="dis">-</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue';
export default {
  components: { 
    CheckButton,
  },
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      dis: false
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    },
    increase() {
      this.itemInfo.count ++
      this.dis = false
    },
    decrease() {
      if(this.itemInfo.count <= 1){
        this.dis = true
      }else{
        this.itemInfo.count --
      }
    }
  }
};
</script>

<style>
#shop-item{
  width: 100vw;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  padding: 5px;
}
.item-img img{
  width: 25vw;
  /* height: 100px; */
  display: block;
  border-radius: 5px;
}
.item-info {
  width: 65vw;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
}
.item-info .item-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item-bottom {
  margin-top: 30px;
  /* position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px; */
  display: flex;
}
.item-bottom .item-price {
  color: orangered;
}
.item-bottom .item-count{
  /* position: relative; */
  /* margin-left: 30px; */
  text-align: right;
  flex: 1;
}
.btn{
  width: 20px;
  height: 20px;
  line-height: 20px;
}

</style>