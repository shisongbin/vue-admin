import Vue from 'vue'
import Router from 'vue-router'

/* 路由模块 */
import mainRouter from './modules/main'
import homeRouter from './modules/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    mainRouter,
    ...homeRouter
  ]
})
