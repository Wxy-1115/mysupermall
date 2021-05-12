<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      message: '',
      isShow: false,
      timer: null
    }
  },
  methods: {
    show(message = "默认显示", time = 1500) {
      clearInterval(this.timer)
      this.message = message
      this.isShow = true
      this.timer = setInterval(() => {
        this.message = ''
        this.isShow = false
      }, time)
    }
  }
}
</script>

<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;

  color: #fff;
  background-color: rgba(0, 0, 0, .75);
  border-radius: 10px;
  z-index: 999;
}
</style>