// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import store from './Store'
import axios from 'axios'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'

Vue.component('chart', ECharts)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('userid')
//   if (!role && to.path !== '/login') {
//     next('/login')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('ms__username');
//   console.log(role)
//   if (!role && to.path !== '/login') {
//     next('/login');
//   } else if (to.meta.permission) {
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === 'admin' ? next() : next('/403');
//   }else {
//       next();
//     }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
