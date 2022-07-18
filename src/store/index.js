import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 获取token
    user: getToken() // 就是这个usertong'guo'pan'duan 仓库里有没有user来判断是在已登录页面还是未登陆页面 现在我要在那个页面获取use了
  },
  mutations: {
    // 修改token
    setUser (state, payLoad) {
      state.user = payLoad
      // token存放在本地存储
      setToken(payLoad)
    }
  }
})
