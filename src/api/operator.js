import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/operator/list',
    method: 'get',
    params: query,
    baseURL: 'http://127.0.0.1:8088'
  })
}

export function fetchOperator(id) {
  return request({
    url: '/operator/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/operator/pv',
    method: 'get',
    params: { pv }
  })
}

export function createOperator(data) {
  return request({
    url: '/operator/create',
    method: 'post',
    data
  })
}

export function updateOperator(data) {
  return request({
    url: '/operator/update',
    method: 'post',
    data
  })
}
