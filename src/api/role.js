import request from '@/utils/request'

export function getRoutes(){
    return request({
        url: '/routes',
        type: 'get'
    })
}

export function getRoles(){
    return request({
        url: '/roles',
        method: 'get'
    })
}