import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login.vue'
import Order from '@/pages/Order/Order.vue'
import MSite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Profile from '@/pages/Profile/Profile.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/order',
      name: 'order',
      component: Order
    }, {
      path: '/msite',
      name: 'MSite',
      component: MSite
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
