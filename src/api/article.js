import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin/article/list',
    method: 'get',
    params: query
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-admin/article/create',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-adminarticle/pv',
    method: 'get',
    params: { pv }
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-admin/article/update',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-admin/article/detail',
    method: 'get',
    params: { id }
  })
}
