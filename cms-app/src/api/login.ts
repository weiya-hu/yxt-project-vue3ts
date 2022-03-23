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

//获取阿里oss参数 //key 过期时间2s
export const getAliToken_api = (params:{site:string}): Promise<any> => {
  return get('/user/upload.sign',params)
}

//获取行业分类列表
export const getIndustryList_api = (): Promise<any> => {
  return get('/dim/get-industry')
}

//获取地区列表id
export const getAddreList_api = (): Promise<any> => {
  return get('/dim/get-geo')
}