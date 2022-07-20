<template>
  <div>
    <van-nav-bar left-arrow @click-left="onback" />
    <MyHouseInfo></MyHouseInfo>
    <div class="footer">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item text="在线咨询" />
        <van-grid-item text="电话预约" class="foot" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import MyHouseInfo from './MyHouseInfo/MyHouseInfo.vue'
export default {
  data () {
    return {
      imgUrl: 'http://liufusong.top:8080'
    }
  },
  components: {
    MyHouseInfo
  },
  methods: {
    onback () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-icon-arrow-left {
    color: #fff;
    margin-left: 5px;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
:deep(.foot) {
  background-color: #21b97a;
}
</style>
