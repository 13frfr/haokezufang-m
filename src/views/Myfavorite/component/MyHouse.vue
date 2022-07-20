<template>
  <div>
    <div>
      <!-- 房屋列表 -->
      <div
        class="dummy-list"
        v-for="(house, index) in houses"
        :key="index"
        @click="houseList(house.houseCode)"
      >
        <!-- 房屋图片 -->
        <div class="dummy-list-img">
          <img :src="imgUrl + house.houseImg" alt="" />
        </div>
        <!-- 房屋信息 -->
        <div class="dummy-list-data">
          <p class="title">{{ house.title }}</p>
          <p class="massage">{{ house.desc }}</p>
          <p class="label">{{ house.tags[0] }}</p>
          <p class="price">{{ house.price }} 元/月</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: 'http://liufusong.top:8080'
    }
  },
  props: {
    houses: {
      type: Array,
      required: true
    }
  },
  methods: {
    houseList (id) {
      this.$router.push(`/HouseInfo/${id}`)
    }
  }
}
</script>

<style scoped lang="less">
.dummy-list {
  display: flex;
  height: 120px;
  //   background-color: pink;
  border-bottom: 1px solid #e5e5e5;
  .dummy-list-img {
    width: 150px;
    height: 100px;
    // margin-right: 10px;
    margin: auto 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .dummy-list-data {
    margin: auto 0;
    padding-left: 10px;
    p {
      padding: 0;
      margin: 0;
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
    }
    .title {
      padding-bottom: 5px;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    }
    .massage {
      padding-bottom: 5px;

      font-size: 14px;
      color: #666;
    }
    .label {
      margin-bottom: 5px;
      font-size: 14px;
      color: #3ec2cf;
      background-color: #e1f5f8;
      width: 50px;
      height: 20px;
      border-radius: 5px;
      text-align: center;
      line-height: 20px;
    }
    .price {
      font-size: 16px;
      font-weight: 700;
      color: #fa735f;
    }
  }
}
</style>
