
import axios from 'axios'
import Vue from 'vue'

export default {
  get: function (url, head, param, blk) {
    var p = head || {}
    // Object.assign({},p, {xhrFields: { withCredentials: true }})
    axios({
      method: 'get',
      url: url,
      headers: p,
      withCredentials: true,
      baseURL: 'http://localhost:5000/',
      data: param || {}}).then((response) => {
      if (blk) {
        blk((response['status'] === '200'), response.data)
      }
    })
  },
  jsonp: function (url, param, blk) {
    Vue.jsonp('http://localhost:5000' + url, param).then(reponse => {
      alert('成功')
      if (blk) {
        blk((reponse['status'] === '200'), reponse.data)
      }
    }).catch(err => {
      alert('失败')
      console.log(err)
    })
  }
}
