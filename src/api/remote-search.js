import request from '@/utils/request'

export function transactionList(query) {
    return request({
        url: '/transaction/list',
        method: 'get',
        params: query
    })
}

export function searchUser(name) {
    return request({
        url: '/search/user',
        method: 'get',
        params: { name }
    })
}