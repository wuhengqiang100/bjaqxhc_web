import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/device/list',
    method: 'get',
    params: query,
    baseURL: 'http://127.0.0.1:8088'
  })
}

export function fetchDevice(id) {
  return request({
    url: '/device/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/device/pv',
    method: 'get',
    params: { pv }
  })
}

export function createDevice(data) {
  return request({
    url: '/device/create',
    method: 'post',
    data
  })
}

export function updateDevice(data) {
  return request({
    url: '/device/update',
    method: 'post',
    data
  })
}
