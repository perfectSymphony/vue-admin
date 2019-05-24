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