import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/Profile')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/List')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/News')
      }
    ]
  },
  {
    path: '/myfavorite',
    component: () => import('@/views/Myfavorite')
  },
  {
    path: '/houses',
    component: () => import('@/views/houses')
  },
  {
    path: '/HouseInfo/:id',
    component: () => import('@/views/HouseInfo')
  }
]

const router = new VueRouter({
  routes
})

export default router
