import { get, post } from '@/utils/request'

export const size = 20

/**
 * @name 获取用户分页列表
*/
export const getUserList_api = (data:PageParams): Promise<res> => {
  return get(1,'/common/user/info.page', data)
}

/**
 * @name 获取用户企业列表
*/
export const getUserCompanyList_api = (data:{ id:number|string }): Promise<res> => {
  return get(1,'/common/user/company.list', data)
}

/**
 * @name 获取会员级别列表
*/
export const getLevelList_api = (): Promise<res> => {
  return get(1,'/common/user/level.list')
}

/**
 * @name 获取用户基本信息和会员信息
*/
export const getUserInfo_api = (data:{ id:number|string }): Promise<res> => {
  return get(1,'/common/user/info.get', data)
}

/**
 * @name 停用或启用账号
*/
export const setUserStatus_api = (data:{ id:number|string }): Promise<res> => {
  return post(1,'/common/user/status.up', data, true)
}

/**
 * @name 获取企业分页列表
*/
export const getCompanyList_api = (data:PageParams): Promise<res> => {
  return get(1,'/common/company/info.page', data)
}

/**
 * @name 获取企业用户分页列表
*/
export const getCompanyUserList_api = (data:PageParams): Promise<res> => {
  return get(1,'/common/company/user.page', data)
}

/**
 * @name 获取企业详细信息
*/
export const getCompanyInfo_api = (data:{ cid:number|string }): Promise<res> => {
  return get(1,'/common/company/info.get', data)
}

/**
 * @name 通过企业认证
*/
export const passCompany_api = (data:{ id:number|string }): Promise<res> => {
  return post(1,'/common/company/audit/pass.do', data, true)
}

/**
 * @name 拒绝企业认证
*/
export const rejectCompany_api = (data:{ cid:number|string, fail_reason:string }): Promise<res> => {
  return post(1,'/common/company/audit/refuse.do', data, true)
}