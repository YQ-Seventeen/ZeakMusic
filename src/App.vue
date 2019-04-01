<template>
  <div id="app">
    <router-view/>
    <tabbar v-show="showTabbar" :items="items"></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar.vue'

export default {
  name: 'App',
  components: {
    tabbar
  },
  data: () => {
    return {
      items: [{
        name: '发现',
        path: '/find',
        src: require('./assets/images/find.png'),
        ssrc: require('./assets/images/find-s.png')},
      {
        name: '视频',
        path: '/video',
        src: require('./assets/images/video.png'),
        ssrc: require('./assets/images/video-s.png')
      },
      {
        name: '我的',
        path: '/mine',
        src: require('./assets/images/music.png'),
        ssrc: require('./assets/images/music-s.png')
      },
      {
        name: '朋友',
        path: '/friend',
        src: require('./assets/images/friend.png'),
        ssrc: require('./assets/images/friend-s.png')
      },
      {
        name: '账号',
        path: '/account',
        src: require('./assets/images/account.png'),
        ssrc: require('./assets/images/account-s.png')
      }],
      showTabbar: true
    }
  },
  created: function () {
    window.eventBus.$on('tabbarChange', (show) => {
      this.showTabbar = show
    })
  },
  destroyed: function () {
    window.eventBus.$off('tabbarChange')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  /* margin-top: 60px; */
}
</style>
