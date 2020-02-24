import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
    baseUrl: 'http:/127.0.0.1:8088'
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token },
    baseUrl: 'http:/127.0.0.1:8088'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
