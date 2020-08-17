import { get, post } from './request'
export function api1 (param) {
  return post('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', param)
}
export function api2 (param) {
  return get('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', param)
}
export function api3 (param, config = {}) {
  const url = 'https://v1.alapi.cn/api/music/search?keyword=' + param.keywords
  return get(url, param, ...config)
}

// export const api3 = p1 => get('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p1)
// export const api4 = p2 => post('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p2)
