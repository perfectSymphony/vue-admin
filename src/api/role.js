import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/routes',
    type: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}

export function updateRole(id, data) {
  return request({
    url: `/role/${id}`,
    method: 'put',
    data
  })
}

export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}
