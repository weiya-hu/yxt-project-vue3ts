import { get, post } from '@/utils/request'

//获取用户企业认证记录
export const getCompanyInfo = (): Promise<res> => {
  return get(0,'/company/relation/info.get')
}

//发送短信
export const sendSms_api = (data:{ mobile:string, acode:string }): Promise<res> => {
  return post(0,'/login/sms/send.do', data, true)
}

//获取图形验证码
export const getImgCode_api = (): Promise<res> => {
  return get(1,'/public/captcha.get')
}

//登录
export const doLogin_api = (data:any): Promise<res> => {
  return post(1,'/public/login.do', data, true)
}

//获取当前用户权限列表
export const getUserLv = (): Promise<res> => {
  return get(1,'/manage/per/user.list')
}

//获取当前用户信息(部门和名称)
export const getUserInfo = (): Promise<res> => {
  return get(1,'/manage/user.get')
}

//退出登录
export const loginOut_api = (): Promise<res> => {
  return get(1,'/public/out.do',{},true)
}

//获取阿里oss参数 //key 过期时间2s
export const getAliToken_api = (params:{site:string}): Promise<res> => {
  return get(0,'/user/upload.sign',params)
}

//获取行业分类列表
export const getIndustryList_api = (): Promise<res> => {
  return get(0,'/dim/industry.list')
}

//获取地区列表id
export const getAddreList_api = (): Promise<res> => {
  return get(0,'/dim/geo.list')
}

//获取跳转地址
export const getYxtUrl_api = (): Promise<res> => {
  return get(0,'/user/public/env.get')
}