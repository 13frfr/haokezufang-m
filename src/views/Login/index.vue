<template>
  <div>
    <van-nav-bar class="navbar" title="账号登录">
      <template #left>
        <van-icon name="arrow-left" @click="onBack" />
      </template>
    </van-nav-bar>
    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="number"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="end">还没有账号，去注册~</div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: 'hzhmqd',
      password: '123456'
    }
  },
  methods: {
    onBack () {
      this.$router.back()
    },
    async login () {
      this.$toast.loading({
        message: '加载中...',
        // loading 禁止点击页面 这里是不是少了一个没讲你试试
        duration: 0,
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        // 存储token
        this.$store.commit('setUser', res.data.body)
        console.log(res)
        // 路由跳转
        this.$router.push('./profile')
        // 提示成功
        this.$toast.success('登录成功')
      } catch (err) {
        // 提示失败
        // 拿到状态码
        const status = err.response.status
        // 默认失败消息
        let message = '登录错误'
        if (status === 400) {
          message = err.response.data.message
        }
        this.$toast.fail(message)
      }
    }
    // loginIn () {
    //   this.$router.push('/profile')
    // }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
}
.form {
  :deep(.van-button) {
    background-color: #1cb676;
    border: none;
  }
}
.end {
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
}
</style>
