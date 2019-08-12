import drag from './drag'

// 注册
// Vue.directive( id, [definition] )
const install = function(Vue){
    Vue.directive('el-drag-dialog', drag)
}

if(window.Vue){
    window['el-drag-dialog'] = drag
    Vue.use(install)
}

drag.install = install

export default drag