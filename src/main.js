// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mixin from './mixin'
import '@/assets/css/main.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueJsonp from 'vue-jsonp'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.mixin(mixin)
Vue.use(VueJsonp)
window.eventBus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
