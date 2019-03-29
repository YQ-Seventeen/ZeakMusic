import Vue from 'vue'
import Router from 'vue-router'
import accountPage from '@/components/account/accountPage'
import findPage from '@/components/find/findPage'
import friendPage from '@/components/friend/friendPage'
import minePage from '@/components/mine/minePage'
import videoPage from '@/components/video/videoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'find',
      component: findPage
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
