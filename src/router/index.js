import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login.vue'
import Order from '@/pages/Order/Order.vue'
import MSite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Shop from '@/pages/Shop/Shop.vue'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta: {
        showFooter: true
      }
    }, {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/shop',
      component: Shop,
      children: [{
        path: '/shop/goods',
        component: ShopGoods
      }, {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/info',
        component: ShopInfo
      }, {
        path: '',
        redirect: '/shop/goods'
      } ]
    }
  ]
})
