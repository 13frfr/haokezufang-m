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
        <van-button block type="info" native-type="submit" @click="loginIn"
          >登录</van-button
        >
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
      const res = await login(this.username, this.password)
      console.log(res)
    },
    loginIn () {
      this.$router.push('/profile')
    }
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
