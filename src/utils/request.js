import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url +request url
  withCredentials: true, // send cookie when cross-domain request
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前，做一些事情
    if (store.getters.token) {
      // 使每个请求都携带一个自定义的token
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
     * If you want to get information such as headers or status
     * Please return  response => response
     */

  /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code.
     */
  response => {
    const res = response.data

    // 如果这个状态码不是20000，就认为使error
    if (res.code !== 20000) {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000 // 显示时间
      })

      // 5008: 非法token；5012:其他客户端登录；5014:token过期
      if (res.code === 5008 || res.code === 5012 || res.code === 5014) {
        // 重新登录
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: '警告'
          }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            // 为了重新实例化vue-router对象，避免bug
            location.reload()
          })
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
