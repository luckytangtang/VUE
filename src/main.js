// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/User/User'
import IndexPage from '@/Main/IndexPage'
import Manage from '@/Manage/Manage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import Layout from '@/components/layout'
import loginPage from '@/User/loginPage'
import regPage from '@/User/regPage'
import '@/assets/computer.css'
import '@/assets/phone.css'
import AnalysisSecond from '@/Analysis/Analysis'
import apiUrl from  "@/components/Global.vue"
import Manual from '@/Manual/Manual'
import Manual3test from '@/Manual/Manual3test'
import Manualtt from '@/Manual/Manualtt'
import Manual3testcopy from '@/Manual/Manual3testcopy'
Vue.prototype.apiUrl=apiUrl.apiUrl;
require('./mock')
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      //首页
      path: '/index',
      component: IndexPage,
      meta: {
        keepAlive: true
      },
    },
    {
      //论文解析
      path: '/analysis',
      component: AnalysisSecond,
      meta: {
        keepAlive: true,
        // needLogin:true,
        requireAuth: true,
      },
    },
    {
      path:'/tpf',
      component:Manual3test
    },
    {
      path:'/ltt',
      component:Manual3testcopy
    },
    {
      //论文管理
      path: '/management',
      component: Manage,
      meta: {
        keepAlive: true,
        //needLogin:true,
        requireAuth: true,
      },
    },
    {
      //个人中心
      path: '/user',
      component: User,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/',
      component:loginPage,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/manual',
      component:Manual,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/reg',
      component:regPage,
      meta: {
        keepAlive: true
      },
    },
    {
      //关于我们
      path: '/contact',
      component: User,
      meta: {
        keepAlive: true
      },
    }
  ]
})
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      store.dispatch('getUser')
      next()
    } else {
      store.dispatch('logOut')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
//     console.log("需要")
//     if (sessionStorage.getItem("loginuser")) { // 判断当前的token是否存在
//       console.log("存在")
//       next();
//     }
//     else {
//       console.log("跳转至LOGIN")
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     console.log("不需要登录权限")
//     next();
//   }
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
