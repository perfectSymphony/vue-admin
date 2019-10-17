import Vue from 'vue'

import Cookies from 'js-cookie'

// css初始化样式
import 'normalize.css/normalize.css'

// element-ui
import Element from 'element-ui'
import './styles/element-variables.scss'

// 全局样式
import '@/styles/index.scss'

import App from './App'
import router from './router'
import store from './store'

// i18n
import i18n from './lang'
// 引入icons
import './icons'

// 引入权限控制文件
import './permission'
import './utils/error-log' // error log

import * as filters from './filters'

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // 设置element-ui默认字体大小
  i18n: (key, value) => i18n.t(key, value)
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  // console.log(key)
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  i18n, // 挂载到vue根实例上面
  render: h => h(App)
})
