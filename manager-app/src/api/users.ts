import { get, post } from '@/utils/request'

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
 * @name 获取个人版产品版本列表
*/
export const getUProduct_api = (): Promise<res> => {
  return get(1,'/common/user/product/version.list')
}

/**
 * @name 获取个人已购产品列表
*/
export const getUserProduct_api = (data:{ uid: number | string }): Promise<res> => {
  return get(1,'/common/user/purchased/product.list', data)
}

/**
 * @name 新增个人实例
*/
export const addUProductIns_api = (data:{ uid: number | string, version_id: number | string, left_time: number | string }): Promise<res> => {
  return post(1,'/common/user/instance.in', data, true)
}

/**
 * @name 删除个人实例
*/
export const delUProductIns_api = (data:{ uid: number | string, id: number | string }): Promise<res> => {
  return post(1,'/common/user/instance.del', data, true)
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

/**
 * @name 获取企业版产品版本列表
*/
export const getCProduct_api = (): Promise<res> => {
  return get(1,'/common/company/product/version.list')
}

/**
 * @name 获取企业已购产品列表
*/
export const getCompanyProduct_api = (data:{ cid: number | string }): Promise<res> => {
  return get(1,'/common/company/purchased/product.list', data)
}

/**
 * @name 新增企业实例
*/
export const addCProductIns_api = (data:{ cid: number | string, version_id: number | string, left_time: number | string }): Promise<res> => {
  return post(1,'/common/company/instance.in', data, true)
}

/**
 * @name 删除企业实例
*/
export const delCProductIns_api = (data:{ cid: number | string, id: number | string }): Promise<res> => {
  return post(1,'/common/company/instance.del', data, true)
}