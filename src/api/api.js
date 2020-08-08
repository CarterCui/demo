import { get, post } from './http'
export const api1 = p1 => get('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p1)
export const api2 = p2 => post('http://cbt.shangjin618.com/lianxin-botsupport-server/common/fileUpload', p2)
