<template>
  <div class="tab-content">
    <div v-for="(item, index) in categoryList" 
        class="list-item" 
        :key="index"
        @click="itemClick(index)"
        :class="{active: currentIndex == index}">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTabContent',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style scoped>

.tab-content{
  width: 30vw;
  background-color: #f3f5f8;
}
.list-item {
  /* float: left; */
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.active {
  border-left: 4px solid var(--color-tint);
  background-color: white;
}

</style>