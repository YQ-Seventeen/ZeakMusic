import axios from 'axios'
import Vue from 'vue'
import {
  Indicator,
  Toast
} from 'mint-ui'

const combineUrl = function (url, data) {
  url += '?'
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      url += key + '=' + element + '&'
    }
  }
  url = url.substr(0, url.length - 1)
  return url
}

export default {
  get: function (url, param, callback, headers) {
    Indicator.open()
    axios({
      method: 'get',
      url: combineUrl(url, param),
      headers: headers || {},
      withCredentials: true,
      baseURL: 'http://localhost:3000/'
    }).then((response) => {
      Indicator.close()
      if (callback) {
        if (response['code'] === 200) {
          callback(true, response)
        } else {
          callback(false, response)
        }
      }
    }).catch(err => {
      Indicator.close()
      Toast(err)
    })
  },
  post: function (url, param, callback, headers) {
    Indicator.open()
    console.log(param)
    axios({
      method: 'post',
      url: combineUrl(url, param),
      headers: headers || {},
      withCredentials: true,
      baseURL: 'http://localhost:3000/'
    }).then((response) => {
      Indicator.close()
      if (callback) {
        if (response['code'] === 200) {
          callback(true, response)
        } else {
          callback(false, response)
        }
      }
    }).catch(err => {
      Indicator.close()
      Toast(err)
    })
  }
}
