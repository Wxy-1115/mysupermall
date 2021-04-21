import { debounce } from 'comment/utils'

export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImageListener = () => {
      newRefresh()
    }
    // 监听item中图片加载完毕
    this.$bus.$on('imgload', this.itemImageListener)
  }
}