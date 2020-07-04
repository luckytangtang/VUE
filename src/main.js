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
import Manual3testcopy from '@/Manual/Manual3testcopy'
import Manual3test_1216 from '@/Manual/Manual3test_1216'
import Manual3test_0102 from '@/Manual/Manual3test_0102'
import AnalysisTest from '@/Manual/AnalysisTest'
import ScrollTest from '@/Manual/ScrollTest'
import ManualReader from '@/Manual/components/ManualReader'
import IndexDemoPage from '@/Main/IndexDemoPage'
import DempPaperList from '@/Manage/DemoPaperList'
import AnalysisDemo from '@/Analysis/AnalysisDemo'
import PaperList from '@/Manage/PaperList'
import UserDemo from '@/User/UserDemo'
Vue.prototype.apiUrl=apiUrl.apiUrl;
require('./mock')
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
// mode: 'history',
  base:'/dist',
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
      //首页
      path: '/indexDemo',
      component: IndexDemoPage,
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
      //首页
      path: '/analysisDemo',
      component: AnalysisDemo,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/tpf',
      component:Manual3test,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/scroll',
      component:ScrollTest,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/any',
      component:AnalysisTest,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/ltt',
      component:Manual3testcopy,
    },
    {
      path:'/pdfReader',
      component:ManualReader,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/tess',
      component:Manual3test_1216,
      meta: {
        keepAlive: true
      },
    },
    {
      path:'/c',
      component: Manual3test_0102,
      meta: {
        keepAlive: true
      },
    },
    {
      //论文管理
      path: '/management',
      component: Manage,
      meta: {
        keepAlive: true,
      },
    },
    {
      //论文管理
      path: '/paperList',
      component: PaperList,
      meta: {
        keepAlive: true,
      },
    },
    {
      //论文管理
      path: '/demopaperList',
      component: DempPaperList,
      meta: {
        keepAlive: true,
      },
    },
    {
      //个人中心
      path: '/userdemo',
      component: UserDemo,
      meta: {
        keepAlive: true
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
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
