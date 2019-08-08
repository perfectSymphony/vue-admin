import './waves.css'


export default {
    bind(el, binding){
        el.addEventListener('click', handleClick(el, binding), false)
    },
    update(){},
    unbind(){}
}