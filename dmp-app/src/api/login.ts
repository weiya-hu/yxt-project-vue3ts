import { get, post } from '@/utils/request'

//获取用户企业认证记录
export const getCompanyInfo = (): Promise<any> => {
  return get('user', '/company/relation/info.get')
}

//获取用户信息
export const getUserInfo = (): Promise<any> => {
  return get('user', '/public/uinfo.get')
}

//退出登录
export const loginOut_api = (): Promise<any> => {
  return get('user', '/login/out.do',{},true)
}

//获取跳转地址
export const getYxtUrl_api = (): Promise<any> => {
  return get('user', '/public/env.get')
}

// //获取DMP用户角色
// export const getDmpUserRole_api = (): Promise<any> => {
//   return get('dmp', '/dmp/permission/get-role')
// }

/**
 * @name 获取当前用户当前身份下所有可用实例
 */
 export const getNowInsList_api = () => {
  return get('user ', '/web/usable/product/instance.list')
}

/**
 * @name 获取当前用户所有权限
 */
 export const getPowerList_api = () => {
  return get('user ', '/user/permission.get')
}