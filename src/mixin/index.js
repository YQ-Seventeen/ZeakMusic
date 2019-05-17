import http from '../utils/http'
import { Indicator } from 'mint-ui'
var mixin = {
  data: function () {
    return {
    }
  },
  methods: {
    showLoading: function (msg) {
      Indicator.open(msg)
    },
    stopLoading: function (msg) {
      Indicator.close()
    },
    changeFoot: function (status) {
      window.eventBus.$emit('tabbarChange', status)
    },
    get: function (url, param, callback, headers) {
      Indicator.open()
      http.get(url, param, callback, headers)
    },
    post: function (url, param, callback, headers) {
      Indicator.open()
      http.post(url, param, callback, headers)
    },
    jsonp: function (url, param, callback) {
      http.jsonp(url, param, callback)
    }
  }
}

export default mixin
