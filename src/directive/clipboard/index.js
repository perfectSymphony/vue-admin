import Clipboard from './clipboard'

const install = function(Vue){
    Vue.directive('Clipboard', Clipboard)
}
if(window.Vue){
    window.clipboard = clipboard
    Vue.use(install) // eslint-disable-line
}

Clipboard.install = install

export default Clipboard