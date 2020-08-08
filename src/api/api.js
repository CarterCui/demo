import { get, post } from './request'
function api1 (param) {
  return post('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', param)
}
function api2 (param) {
  return get('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', param)
}
export default {
  api1,
  api2
}

// export const api3 = p1 => get('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p1)
// export const api4 = p2 => post('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p2)
