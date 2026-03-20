import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/LoginIndex.vue'
import Layout from '@/views/layout/LayoutIndex.vue'
import Search from '@/views/search/SearchIndex.vue'
import SearchList from '@/views/search/SearchList.vue'
import ProDetail from '@/views/prodetail/ProdetailIndex.vue'
import Pay from '@/views/pay/PayIndex.vue'
import MyOrder from '@/views/myorder/OrderIndex.vue'

Vue.use(VueRouter)

// const routes = [
// ]

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout },
    { path: '/search', component: Search },
    { path: '/searchList', component: SearchList },
    { path: '/prodetail', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myOrder', component: MyOrder }

  ]
})

export default router
