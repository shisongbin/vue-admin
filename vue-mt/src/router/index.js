import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import home from '@/pages/home'
import recent from '@/pages/recent'
import guang from '@/pages/guang'
import order from '@/pages/order'
import me from '@/pages/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
      children:[
        {
          path: '/',
          name: 'main',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/recent',
          name: 'recent',
          component: recent
        },
        {
          path: '/guang',
          name: 'guang',
          component: guang
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/me',
          name: 'me',
          component: me
        }
      ]
    }
  ]
})
