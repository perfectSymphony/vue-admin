import Vue from 'vue'
import store from '@/store'
import { isString, isArray } from '@/utils/validate'
import settings from '@/settings'

// you can set in settings.js
// errorLog:'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed(){
  const env = process.env.NODE_ENV
  if(isString(needErrorLog)){
    return env === needErrorLog
  }
  if(isArray(needErrorLog)){
    return needErrorLog.includes(env)
  }
  return false
}

if(checkNeed()){
  Vue.config.errorHandler = function (err, vm, info, a) {
    // Vue.nextTick, it just a hack
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
     // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    Vue.nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.log(err, info)
    })
  }
}