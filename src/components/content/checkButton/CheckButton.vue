<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  /* width: 22px; */
  /* height: 22px; */
  border-radius: 50%;
  border: 2px solid #aaa;
  align-items: center;
}
.check{
  background-color: var(--color-high-text);
  border: 2px solid var(--color-high-text);
}
</style>