import { decode } from "punycode";

/**
 * 参数 url
 * 返回object
 */

export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
        '"}'
    )
}


/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 * 该函数是为了防止抖动
 */

export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function() {
        //据上次触发时间间隔
        const last = +new Date() - timestamp

        //上次被包装函数被调用时间间隔 last 小于 设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
                //如果设定为 immediate === true ,因为开始边界已经调用过了，此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function(...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout

        //如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)

        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }
        return result
    }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source){
    if(!source && typeof source !== 'object') throw new Error('error arguments', 'deepClone')

    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if(source[keys] && typeof source[keys] === 'object'){
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}    