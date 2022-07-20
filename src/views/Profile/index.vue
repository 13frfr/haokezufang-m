<template>
  <div>
    <!-- 已登录 -->
    <div v-if="user">
      <div class="header">
        <img
          class="pic2"
          src="http://liufusong.top:8080/img/avatar.png"
          alt=""
        />
        <div class="login2"></div>
        <div class="photo2">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
          <span class="youke2">游客</span>
        </div>
        <van-cell class="logout-cell" clickable @click="onLogout">
          <template #title>
            <van-button class="tuichu" type="primary" size="mini"
              >退出</van-button
            >
          </template>
        </van-cell>
        <span class="ziliao">编辑个人资料 ></span>
      </div>
      <van-grid :column-num="3" clickable :border="false" vue-router>
        <van-grid-item icon="star-o" text="我的收藏" to="/Myfavorite" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/Myfavorite" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="newspaper-o" text="成为房主" />
        <van-grid-item icon="friends-o" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
      <div class="footer">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else>
      <div class="header">
        <img
          class="pic"
          src="http://liufusong.top:8080/img/profile/bg.png"
          alt=""
        />
        <div class="login"></div>
        <div class="photo">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
          <span class="youke">游客</span>
        </div>
        <van-button class="denglu" type="primary" size="normal" @click="loginIn"
          >去登录</van-button
        >
      </div>
      <div class="body">
        <van-grid :column-num="3">
          <van-grid-item icon="star-o" text="我的收藏" />
          <van-grid-item icon="wap-home-o" text="我的出租" />
          <van-grid-item icon="clock-o" text="看房记录" />
          <van-grid-item icon="newspaper-o" text="成为房主" />
          <van-grid-item icon="friends-o" text="个人资料" />
          <van-grid-item icon="service-o" text="联系我们" />
        </van-grid>
      </div>
      <div class="footer">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// mapState 昨晚我说了他可以获取仓库里的state村的数据 第一步先引入mapSta
import { mapState } from 'vuex'
// 引入api
export default {
  methods: {
    onLogout () {
      // console.log('onLogout');
      // 组件中需要this.$diglog来调用弹框组件
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出？'
        })
        .then(() => {
          // on confirm
          console.log('成功时调用')
          this.$store.commit('setUser', null) // 这个是退出的时候清空token 刚刚那行因为页面是不需要退出登陆之后跳转到账号密码登陆界面所以不要写 ok？
        })
        .catch(() => {
          // on cancel
          console.log('失败时调用')
        })
    },
    loginIn () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['user']) // 现在就是 v-if=user  登录了
  }
}
</script>

<style lang="less" scoped>
.ziliao {
  top: 286px;
  left: 152px;
  position: fixed;
  z-index: 1000;
  font-size: 12px;
}
.header {
  position: relative;
  .pic {
    width: 100%;
    height: 191px;
  }
  .pic2 {
    width: 100%;
  }
  .login {
    position: absolute;
    top: 135px;
    left: 27px;
    width: 320px;
    height: 165px;
    background-color: #fff;
    border: 2px solid #eee;
    box-shadow: 2px 2px 2px 2px #eee;
    margin: 0 auto;
    z-index: 1;
  }
  .login2 {
    position: absolute;
    top: 160px;
    left: 27px;
    width: 320px;
    height: 210px;
    background-color: #fff;
    border: 2px solid #eee;
    box-shadow: 2px 2px 2px 2px #eee;
    margin: 0 auto;
    z-index: 1;
  }
  .photo {
    top: 110px;
    left: 160px;
    position: absolute;
    z-index: 10;
    img {
      width: 60px;
      height: 60px;
    }
    .youke {
      top: 70px;
      left: 15px;
      font-size: 13px;
      position: absolute;
    }
  }
  .photo2 {
    top: 130px;
    left: 160px;
    position: absolute;
    z-index: 10;
    img {
      width: 60px;
      height: 60px;
    }
    .youke2 {
      top: 80px;
      left: 15px;
      font-size: 13px;
      position: absolute;
    }
  }
  .logout-cell {
    text-align: center;
    // top: 230px;
    .tuichu {
      position: fixed;
      top: 236px;
      left: 172px;
      z-index: 100;
    }
  }
  .denglu {
    position: absolute;
    z-index: 100;
    top: 220px;
    left: 153px;
  }
}
.body {
  margin-top: 125px;
}
.footer {
  text-align: center;
  img {
    width: 92%;
  }
}
</style>
