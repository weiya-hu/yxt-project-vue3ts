import { get, post } from '@/utils/request'

//获取用户企业认证记录
export const getCompanyInfo = (): Promise<res> => {
  return get('/company/relation/info.get')
}

//发送短信
export const sendSms_api = (data:{ mobile:string, acode:string }): Promise<res> => {
  return post('/login/sms/send.do', data, true)
}

//登录
export const doLogin_api = (data:any): Promise<res> => {
  return post('/login/login.do', data, true)
}

//获取用户权限等级
export const getUserLv = (): Promise<res> => {
  return get('/dmp/permission/get-role')
}

//获取用户信息
export const getUserInfo = (): Promise<res> => {
  return get('/user/public/uinfo.get')
}

//退出登录
export const loginOut_api = (): Promise<res> => {
  return get('/login/out.do',{},true)
}

//获取阿里oss参数 //key 过期时间2s
export const getAliToken_api = (params:{site:string}): Promise<res> => {
  return get('/user/upload.sign',params)
}

//获取行业分类列表
export const getIndustryList_api = (): Promise<res> => {
  return get('/dim/industry.list')
}

//获取地区列表id
export const getAddreList_api = (): Promise<res> => {
  return get('/dim/geo.list')
}

//获取跳转地址
export const getYxtUrl_api = (): Promise<res> => {
  return get('/user/public/env.get')
}