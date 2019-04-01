import http from '../utils/http'

var mixin = {
  data: function () {
    return {
    }
  },
  methods: {
    changeFoot: function (status) {
      window.eventBus.$emit('tabbarChange', status)
    },
    get: function (url, head, param, blk) {
      http.get(url, head, param, blk)
    },
    jsonp: function (url, param, blk) {
      http.jsonp(url, param, blk)
    }
  }
}

export default mixin
