<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.size"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.info-size{
  width: 100%;
  border-collapse: collapse;
}
.param-info tr{
  height: 42px;
}
.param-info td{
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.param-key{
  width: 95px;
}
.info-param {
  border-top: 1px solid #000;
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>