import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/nextOne',
    // },
    // 重定向
    {
      path: '/',
      component: resolve => require(['../components/imgLazy'], resolve)
    },
    {
      path: '/scroll',
      component: resolve => require(['../components/Scroll'], resolve)
    },
    {
      path: '/comp',
      name: 'Comp',
      component: resolve => require(['../views/components'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/Shopping/login'], resolve)
    },
    {
      path: '/store',
      name: 'Store',
      component: resolve => require(['../views/Shopping/store'], resolve)
    },
    {
      path: '/car',
      name: 'Car',
      component: resolve => require(['../views/Shopping/car'], resolve)
    },
    {
      path: '/*',
      component: resolve => require(['../views/Shopping/login'], resolve)
    }
  ]
})
