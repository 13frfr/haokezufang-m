<template>
  <div>
    <van-tabbar v-model="active" route active-color="#21B97A">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/list">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/news">咨询</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
