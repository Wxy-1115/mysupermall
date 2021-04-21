<template>
  <swiper v-if="Object.keys(banners).length !== 0">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>