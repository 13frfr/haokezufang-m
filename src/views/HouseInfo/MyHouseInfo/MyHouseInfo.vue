<template>
  <div class="myhouse">
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="200"
    >
      <van-swipe-item v-for="item in housesArr" :key="item">
        <template #default>
          <img :src="imgUrl + item" alt="" />
        </template>
      </van-swipe-item>
    </van-swipe>
    <!-- 租房信息 -->
    <div class="houseDetailInfo">
      <h3>{{ body.title }}</h3>
      <div class="houseDetailTag">
        <span v-for="item in body.tags" :key="item">{{ item }}</span>
      </div>

      <div class="center">
        <van-grid :column-num="3" :border="false">
          <van-grid-item>
            <template #default>
              <span class="money"
                >{{ body.price }}<span class="meter">/月</span></span
              >
              <span class="size">租金</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #text>
              <span class="money">{{ body.roomType }}</span>
              <span class="size">房型</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #text>
              <span class="money"
                >{{ body.size || '暂无' }}<span>/平米</span></span
              >
              <span class="size">面积</span>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <van-grid
        :column-num="2"
        direction="horizontal"
        class="recommend"
        :border="false"
      >
        <van-grid-item>
          <template #default>
            <span class="label">装修:</span>
            <span>精装</span>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #default>
            <span class="label">朝向:</span>
            <span v-for="item in body.oriented" :key="item">{{ item }}</span>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #default>
            <span class="label">楼层:</span>
            <span>{{ body.floor }}</span>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #default>
            <span class="label">类型:</span>
            <span>普通住宅</span>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 地图区域 -->
    <div class="map">
      <!-- 标题 -->
      <van-cell-group>
        <van-cell>
          <template #title>
            <span class="village">小区:</span>
            <span>天象新城</span>
          </template>
        </van-cell>
      </van-cell-group>
      <!-- 地图 -->
      <div class="my-map">
        <baidu-map
          class="map"
          :center="map.center"
          :zoom="map.zoom"
          @ready="handler"
        >
          <!--缩放-->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <!--定位-->
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <!--点-->
          <bm-marker
            :position="map.center"
            :dragging="map.dragging"
            animation="BMAP_ANIMATION_DROP"
          >
            <!--提示信息-->
            <bm-info-window :show="map.show">云端锦医试点</bm-info-window>
          </bm-marker>
        </baidu-map>
      </div>
    </div>
    <!-- 房屋配套 -->
    <div class="util">
      <!-- 标题 -->
      <van-cell-group>
        <van-cell title="房屋配套" />
      </van-cell-group>
    </div>
    <!-- 房源概况 -->
    <div class="message">
      <!-- 标题 -->
      <van-cell-group>
        <van-cell title="房源概况" class="titleHeight" />
      </van-cell-group>
      <div class="person">
        <van-cell-group>
          <van-cell title-style="display:flex;">
            <template #title>
              <img src="http://liufusong.top:8080/img/avatar.png" alt="头像" />
              <div class="up">
                <div>王女士</div>
                <div class="homeowner">已认证房主</div>
              </div>
            </template>
            <van-button
              plain
              type="primary"
              hairline
              size="normal"
              class="email"
              >发消息</van-button
            >
          </van-cell>
        </van-cell-group>
      </div>
      <div class="zi">
        1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
        2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
        3.人车分流，环境优美。
        4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="favorite">
      <!-- 标题 -->
      <van-cell-group>
        <van-cell title="猜你喜欢" />
      </van-cell-group>
      <MyHouse :houses="houseList"></MyHouse>
    </div>
  </div>
</template>

<script>
import { getMyFavorite } from '@/api/house'
import MyHouse from '@/views/Myfavorite/component/MyHouse.vue'
import { getMyFavoriteInfo } from '@/api/user'
export default {
  data () {
    return {
      imgUrl: 'http://liufusong.top:8080',
      housesArr: [],
      body: [],
      houseList: [],
      map: {
        center: { lng: 115.929912, lat: 28.683191 },
        zoom: 15,
        show: true,
        dragging: true
      }
    }
  },
  components: {
    MyHouse
  },
  methods: {
    handler ({ BMap, map }) {
      // const me = this
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log(e.point.lng, e.point.lat)
      })
    },
    async getMyFavorite () {
      const id = this.$route.params.id
      const { data } = await getMyFavorite(id)
      console.log(data)
      this.body = data.body
      this.housesArr = data.body.houseImg
      // console.log(this.$route.params.id)
    },
    async getMyFavoriteInfo () {
      const { data } = await getMyFavoriteInfo()
      // console.log(data.body)
      this.houseList = data.body
    }
  },
  created () {
    this.getMyFavorite()
    this.getMyFavoriteInfo()
  }
}
</script>

<style lang="less" scoped>
.myhouse {
  margin-top: 45px;
  margin-bottom: 50px;
}

.my-swipe {
  img {
    width: 375px;
    height: 234px;
    margin-bottom: 18px;
  }
}

.houseDetailInfo {
  width: 375px;
  height: 266px;
  padding: 15px;
  border-bottom: 10px solid #f6f5f6;
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #333;
  }
  .meter {
    font-size: 12px;
  }
  .houseDetailTag {
    font-size: 12px;
    color: #39becd;
    background: #e1f5f8;
    display: inline-block;
    border-radius: 3px;
    padding: 4px 5px;
    margin-right: 5px;
    line-height: 12px;
  }
  .money {
    color: red;
    font-size: 18px;
    font-weight: bolder;
  }
  .size {
    font-size: 14px;
    color: #999;
  }
  .recommend {
    font-size: 13px;
    height: 52px;

    .label {
      font-size: 13px;
      color: #999;
      margin-right: 10px;
    }
  }
  :deep(.van-grid-item__content--center) {
    justify-content: start;
  }
  .center {
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
  }
}

.map {
  .village {
    font-size: 13px;
    color: #999;
    margin-left: 5px;
  }
  .my-map {
    width: 375px;
    height: 145px;
    background-color: pink;
    .map {
      width: 375px;
      height: 145px;
    }
  }
}
.message {
  width: 375px;
  height: 266px;
  border-bottom: 10px solid #f6f5f6;

  .titleHeight {
    height: 52px;
  }
  .person {
    height: 62px;
    img {
      width: 52px;
      height: 52px;
    }
    .up {
      margin-left: 10px;
      .homeowner {
        color: red;
      }
    }
    .email {
      width: 74px;
      height: 29px;
      margin-top: 10px;
    }
  }
  .zi {
    font-size: 14px;
    height: 132px;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.util {
  width: 375px;
  height: 129px;
  background-color: #ccc;
  border-bottom: 10px solid #f6f5f6;
}
</style>
