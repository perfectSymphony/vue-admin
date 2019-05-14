import Mock from 'mockjs'
import param2Obj from '../src/utils'

import user from './user'

const mocks = [
    ...user
]


//前端模拟数据
export function mockXHR() {
    // https://github.com/nuysoft/Mock/issues/300

    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send

    Mock.XHR.prototype.send = function() {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false

            if (this.responseType) {
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap(respond) {
        return function(options) {
            let result = null
            if (respond instanceof Function) {
                const { body, type, url } = options
                // http://expressjs.com/en/4x/api.html#req
                // the HTTP response is res
                result = respond({
                    method: type,
                    body: JSON.parse(body),
                    query: param2Obj(url)
                })
            } else {
                result = respond
            }
            return Mock.mock(result)
        }
    }

    // Mock.mock( rurl, rtype, function( options ) )
    // 记录用于生成响应数据的函数。
    //当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

    for (const i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'GET', XHR2ExpressReqWrap(i.respond))
    }
}


//后台模拟数据

const responseFake = (url, type, respond) => {
    return {
        url: new RegExp(`/mock${url}`),
        type: type || 'GET',
        response(req, res) {
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}

export default mocks.map(route => {
    return responseFake(route.url, route.type, route.response)
})