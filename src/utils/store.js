import { validatenull } from '@/utils/validate'

/**
 * 存储localStorage
 */
export const setStore = (params) => {
  const {
    name,
    value,
    type
  } = params
  const obj = {
    dataType: typeof (value),
    value: value,
    type: type,
    datetime: new Date().getTime()
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}

/**
 * 获取localStorage
 */
export const getStore = (params) => {
  const {
    name
  } = params
  let obj = {}
  let value
  obj = window.localStorage.getItem(name)
  if (validatenull(obj)) obj = window.sessionStorage.getItem(name)
  if (validatenull(obj)) return
  obj = JSON.parse(obj)
  if (obj.dataType === 'string') {
    value = obj.value
  } else if (obj.dataType === 'number') {
    value = Number(obj.value)
  } else if (obj.dataType === 'boolean') {
    value = !!(obj.value)
  } else if (obj.dataType === 'object') {
    value = obj.value
  }
  return value
}
/**
 * 删除localStorage
 */
export const removeStore = params => {
  const {
    name
  } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}
