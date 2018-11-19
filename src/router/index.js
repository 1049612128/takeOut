import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login.vue'
import Order from '@/pages/Order/Order.vue'

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
    }
  ]
})
