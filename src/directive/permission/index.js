
// 向外暴露API
import permission from './permission'

//使用install 的目的是 确保多次引用的情况下只加载一次
// 1、添加全局方法或属性
const install = function(Vue){
    Vue.directive('permission', permission)
}

// Vue 是全局变量时， 自动调用 Vue.use()
// 2、添加全局资源
if(window.Vue){
    window['permission'] = permission
    Vue.use(install);
}

export default permission