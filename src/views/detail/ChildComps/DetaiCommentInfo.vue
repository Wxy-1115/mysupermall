<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDAte }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images" />
        </div>
      </div>
    </div>
    <div v-else class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="none">暂无评价</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "comment/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDAte(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy/MM/dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 3px solid rgb(0, 0, 0, 0.1);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  font-size: 13px;
  margin-right: 10px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0, 0.1);
}
.info-user span {
  margin-left: 10px;
  font-size: 15px;
  position: relative;
  top: -15px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
.none{
  margin-bottom: 10px;
  padding: 20px 0;
  color: #777;
  border-bottom: 3px solid #f2f5f8;
}
</style>