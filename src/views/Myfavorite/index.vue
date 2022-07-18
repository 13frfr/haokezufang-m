<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="goMy" />
    <MyHouse :houses="houseList"></MyHouse>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getMyFavorite } from '@/api/user'
import MyHouse from '@/views/Myfavorite/component/MyHouse.vue'
export default {
  data () {
    return {
      houseList: []
    }
  },
  created () {
    if (this.user) {
      this.getMyFavorite()
    }
  },
  methods: {
    goMy () {
      this.$router.back()
    },
    async getMyFavorite () {
      const { data } = await getMyFavorite()
      // console.log(data.body)
      this.houseList = data.body
    }
  },
  computed: {
    ...mapState(['user'])
  },
  components: {
    MyHouse
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
    justify-content: center;
    font-size: 18px;
    white-space: nowrap;
  }
  .van-icon-arrow-left {
    color: #fff;
    margin-left: 5px;
  }
}
</style>
