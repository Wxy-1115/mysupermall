<template>
  <div id="tab-control">
    <div v-for="(item, index) in titles" 
          class="tab-control-item"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
#tab-control{
  display: flex;
  text-align: center;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>