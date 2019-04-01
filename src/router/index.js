import Vue from 'vue'
import Router from 'vue-router'
import accountPage from '@/components/account/accountPage'
import findPage from '@/components/find/findPage'
import friendPage from '@/components/friend/friendPage'
import minePage from '@/components/mine/minePage'
import videoPage from '@/components/video/videoPage'
import loginPage from '@/components/login/loginPage'
Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/find',
      name: 'find',
      component: findPage
    },
    {
      path: '/account',
      name: 'account',
      component: accountPage
    },
    {
      path: '/friend',
      name: 'friend',
      component: friendPage
    },
    {
      path: '/mine',
      name: 'mine',
      component: minePage
    },
    {
      path: '/video',
      name: 'video',
      component: videoPage
    }
  ]
})

export default route

route.beforeEach((to, from, next) => {
  // ...
  let isLogin = localStorage.getItem('loginDto')
  const needloginArr = ['find', 'video', 'mine', 'friend', 'account']

  if (needloginArr.indexOf(to.name) >= 0) {
    if (!isLogin) {
      next({path: '/login'})
      return
    }
  }
  if (to.name === 'login') {
    if (isLogin) {
      next({path: './find'})
      return
    }
  }
  next()
})
