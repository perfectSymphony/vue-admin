export default {
    bind(el, binding, vnode){
        // console.log(el)
        // console.log(binding)
        // console.log(vnode)
        const dialogHeaderEl = el.querySelector('.el-dialog__header')
        const dragDom = el.querySelector('.el-dialog')
        // cssText 的本质就是设置 HTML 元素的 style 属性值
        // cursor:move;   此光标指示某对象可被移动
        dialogHeaderEl.style.cssText += ';cursor:move;'
        dragDom.style.cssText += ';top: 0px;'

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);

        // 类似 ele.style.border 的形式的，该方法只能获取到行内样式,获取不了外部的样式

        // 获取外部样式的方法:
        // currentStyle:该属性只兼容IE,不兼容火狐和谷歌
        // 写法:ele.currentStyle["attr"]或者ele.currentStyle.attr;

        // getComputedStyle:该属性是兼容火狐谷歌,不兼容IE
        // 写法:window.getComputedStyle(ele,null)[attr]获取是window.getComputedStyle(ele,null).attr
        const getStyle = (function(){
            if (window.document.currentStyle) {
                return (dom, attr) => dom.currentStyle[attr]
            } else {
                return (dom, attr) => getComputedStyle(dom, false)[attr]
            }
        })()

        dialogHeaderEl.onmousedown =(e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft
            const disY = e.clientY - dialogHeaderEl.offsetTop

            const dragDomWidth = dragDom.offsetWidth
            const dragDomHeight = dragDom.offsetHeight

            const screenWidth = document.body.clientWidth
            const screenHeight = document.body.clientHeight

            const minDragDomLeft = dragDom.OffsetLeft
            const maxDragDomLeft = screenWidth - minDragDomLeft - dragDomWidth

            const minDragDomTop = dragDom.offsetTop
            const maxDragDomTop = screenHeight - minDragDomTop - dragDomHeight

            // 获取到的值带px 正则匹配替换
            let styL = getStyle(dragDom, 'left')
            let styT = getStyle(dragDom, 'top')

            if(styL.includes('%')){
                styL = +document.body.clientWidth * (+styleL.replace(/\%/g, '') / 100)
                styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
            } else {
                styL = +styL.replace(/\px/g, '')
                styT = +styT.replace(/\px/g, '')
            }

            document.onmousemove = function(e){
                // 通过事件委托，计算移动的距离
                let left = e.clientX - disX
                let top = e.clientY - disY

                // 边界处理
                if(-(left) > minDragDomLeft){
                    left = -minDragDomLeft
                } else if(left > maxDragDomLeft){
                    left = maxDragDomLeft
                }

                if(-(top) > minDragDomTop){
                    top = -minDragDomTop
                } else if(top > maxDragDomTop){
                    top = maxDragDomTop
                }

                // 移动当前元素
                dragDom.style.cssText += `;left: ${ left + styL }px;top: ${ top + styT }px;`

                //触发拖拽事件
                vnode.child.$emit('dragDialog')
            }

            document.onmouseup = function(e){
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
}