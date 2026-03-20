import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/LoginIndex.vue'
import Layout from '@/views/layout/LayoutIndex.vue'
import Search from '@/views/search/SearchIndex.vue'
import SearchList from '@/views/search/SearchList.vue'
import ProDetail from '@/views/prodetail/ProdetailIndex.vue'
import Pay from '@/views/pay/PayIndex.vue'
import MyOrder from '@/views/myorder/OrderIndex.vue'

import Home from '@/views/layout/HomeLayout.vue'
import Category from '@/views/layout/CategoryLayout.vue'
import Cart from '@/views/layout/CartLayout.vue'
import User from '@/views/layout/UserLayout.vue'

Vue.use(VueRouter)

// const routes = [
// ]

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchList', component: SearchList },
    { path: '/prodetail', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myOrder', component: MyOrder }
  ]
})

// 拦截路径
const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  // 直接写这个函数，表示所有都放行
  // next()
  if(!authUrls.includes(to.path)) {
    next()
    return 
  }

  const token = store.getters.token
  if (token) {
    next()
  }else{
    next('/login')
  }
})

export default router
