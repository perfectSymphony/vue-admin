import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess(){
    Vue.prototype.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
    })
}

function clipboardError(){
    Vue.prototype.$message({
        message: 'Copy failed',
        type: 'error'
    })
}

/**
 * 文本复制
 * @param {string} text - 要复制的文本 
 * @param {object} event - 用户触发的事件
 * 
 */

export default function handleClipboard(text, e){
    const clipboard = new Clipboard(e.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.off('error')
        clipboard.off('error')
        clipboard.destroy()
    })
    clipboard.onClick(e)
}