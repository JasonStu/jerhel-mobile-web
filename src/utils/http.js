import axios from 'axios'
// import QS from 'qs'
import { Toast } from 'antd-mobile'

// axios.interceptors.request.use(config => {
//   config.data = QS.stringify(config.data)
//   return config
// })

const REQUEST_TIMEOUT = 100000
const BASE_URL = process.env.NODE_ENV === 'production'? window.location.origin : '/herf'

const UPLOAD_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest',
  'channel': 'h5'
}


const request = function({ method = 'post', baseURL = BASE_URL, timeout = REQUEST_TIMEOUT, headers, url, data, success, fail, loading = false }) {
  return new Promise((resolve, reject) => {
    const HEADERS = {
      'Content-Type': 'application/json',
    }
    const defaultParams = {
    }
    const params = data? Object.assign(defaultParams, data) : defaultParams

    let showLoading = null
    if ( loading ) { // 显示数据加载中
      showLoading = new ShowLoading()
    }

    axios({
      method,
      url,
      params: method === 'get' || method === 'GET' ? params : undefined,
      data: method !== 'get' || method === 'GET' ? params : undefined,
      timeout,
      baseURL,
      headers: Object.assign(HEADERS, headers)
    })
    .then(function(response) {
      if ( loading ) {
        showLoading.closeLoading()
        showLoading = null
      }
      success && success(response.data)
      resolve(response.data)

      // 403 token已失效，重新授权获取token
      if ( `${response.data.status}` === '403' ) {
      }

      // 401 清除前端登录态
      if ( `${response.data.status}` === '401' ) {
      }
    })
    .catch(function(error) {
      if ( loading ) {
        showLoading.closeLoading()
        showLoading = null
      }
      if (error.response) {
        if (error.response.data) {
          fail && fail({ msg: error.response.data.msg, status: error.response.status, data: error.response.data })
          reject({ msg: error.response.data.msg, status: error.response.status, data: error.response.data })
        } else {
          fail && fail({ msg: error.message, status: error.response.status })
          reject({ msg: error.message, status: error.response.status })
        }
      } else {
        fail && fail({ msg: error.message })
        reject({ msg: error.message })
      }
    })
  })
}

const upload = function({
  method = 'post',
  baseURL = BASE_URL,
  timeout = REQUEST_TIMEOUT,
  headers,
  url,
  data,
  success,
  fail
}) {
  axios({
    method,
    url,
    data,
    timeout,
    baseURL,
    headers: Object.assign(UPLOAD_HEADERS, headers)
  })
  .then(function(response) {
    success && success(response.data)
  })
  .catch(function(error) {
    if (error.response) {
      if (error.response.data) {
        fail && fail({ msg: error.response.data.msg, status: error.response.status, data: error.response.data })
      } else {
        fail && fail({ msg: error.message, status: error.response.status })
      }
    } else {
      fail && fail({ msg: error.message })
    }
  })
}

// 显示数据加载中 Toast
function ShowLoading () {
  this.timer = null
  this.timer = setTimeout(() => {
    Toast.loading(`加载中...`, 0)
  }, 500)
  this.closeLoading = function () {
    clearTimeout(this.timer)
    this.timer = null
    Toast.hide()
  }
}

export {
  request,
  upload
}