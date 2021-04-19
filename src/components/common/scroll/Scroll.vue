<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      // observeDom: true
    })
    // 监听滚动位置
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
      // console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      // console.log("上拉加载更多");
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
      this.scroll.refresh();
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
      // console.log('scrollTo');
    }
  }
}
</script>

<style>

</style>