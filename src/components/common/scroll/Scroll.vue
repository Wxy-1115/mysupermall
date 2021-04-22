<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      useTransition: false,
      mouseWheel: true,
      // observeDOM: true
    });
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
        // console.log(position);
      });
    }
    // 监听scroll滚到到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("pullingUp");
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
      // console.log('scrollTo');
    },
    // 重新加载scroll高度
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log("刷新");
    },
    // 完成上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
};
</script>

<style>
</style>