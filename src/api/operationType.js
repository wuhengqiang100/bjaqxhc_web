import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/operationType/list',
    method: 'get',
    params: query,
    baseURL: 'http://127.0.0.1:8088'
  })
}



export function updateUseFlag(id) {
  return request({
    url: '/operationType/updateUseFlag',
    method: 'post',
    params: { id },
    baseURL: 'http://127.0.0.1:8088'
  })
}


export function createOperationType(data) {
  return request({
    url: '/operationType/create',
    method: 'post',
    data,
    baseURL: 'http://127.0.0.1:8088'
  })
}

export function updateOperationType(data) {
  return request({
    url: '/operationType/update',
    method: 'post',
    data,
    baseURL: 'http://127.0.0.1:8088'
  })
}


export function fetchOperationType(id) {
  return request({
    url: '/operationType/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/operationType/pv',
    method: 'get',
    params: { pv }
  })
}

export function fetchMachineTypeList() {
  return request({
    url: '/operationType/listOption',
    method: 'get',
    baseURL: 'http://127.0.0.1:8088'
  })
}