import { get, post } from '@/utils/request'

/**
 * @name 获取所有部门
*/
export const getDeptList_api = (): Promise<res> => {
  return get(1,'/manage/dept.list')
}

/**
 * @name 获取全部权限列表
*/
export const getLvList_api = (): Promise<res> => {
  return get(1,'/manage/per.list')
}

/**
 * @name 获取管理员列表
*/
export const getStaffList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/user.page', data)
}

/**
 * @name 启用-禁用
*/
export const setStaffStatus_api = (data:{ bg_uid:number, user_status:number }): Promise<res> => {
  return post(1,'/manage/user/status.up', data, true)
}

/**
 * @name 删除用户
*/
export const delStaff_api = (data:{ bg_uid:number }): Promise<res> => {
  return post(1,'/manage/user.del', data, true)
}

/**
 * @name 添加用户
*/
export const addStaff_api = (data:any): Promise<res> => {
  return post(1,'/manage/user.in', data, true)
}

/**
 * @name 获取指定用户权限列表及姓名部门
*/
export const getStaffInfo_api = (data:{ id:number|string }): Promise<res> => {
  return get(1,'/manage/per/user.do', data)
}

/**
 * @name 修改用户权限列表
*/
export const setStaffLv_api = (data:{ bg_uid:number|string, list:(number|string)[] }): Promise<res> => {
  return post(1,'/manage/per/user.up', data, true)
}