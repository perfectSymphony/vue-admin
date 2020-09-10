import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-admin/routes',
    type: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-admin/roles',
    method: 'get'
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-admin/role/${id}`,
    method: 'delete'
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function addRole(data) {
  return request({
    url: '/vue-admin/role',
    method: 'post',
    data
  })
}
