import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'

import 'amfe-flexible'

// 引入字体图标
import '@/assets/fonts/iconfont.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'b5bGl8WIlq3py3kkiB6ZYMi6zy1c0Gib'
})

Vue.use(Lazyload)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
