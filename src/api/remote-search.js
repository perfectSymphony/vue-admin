import request from '@/utils/request'

export function transactionList(query) {
  return request({
    url: '/vue-admin/transaction/list',
    method: 'get',
    params: query
  })
}

export function searchUser(name) {
  return request({
    url: '/vue-admin/search/user',
    method: 'get',
    params: { name }
  })
}
