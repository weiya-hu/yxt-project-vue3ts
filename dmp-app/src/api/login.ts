import { get, post } from '@/utils/request'

//获取用户企业认证记录
export const getCompanyInfo = (): Promise<any> => {
  return get('/company/get-company-info')
}

//获取用户权限等级
export const getUserLv = (): Promise<res> => {
  return get('/dmp/permission/get-role')
}

//获取用户信息
export const getUserInfo = (): Promise<any> => {
  return get('/user/public/get-user')
}

//退出登录
export const loginOut_api = (): Promise<any> => {
  return get('/login/login-out',{},true)
}
