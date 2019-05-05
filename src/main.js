import Vue from 'vue'

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

Vue.config.productionTip = false


Vue.use(Element)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})