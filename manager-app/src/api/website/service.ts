import { get, post } from '@/utils/request'

/**
 * @name 视频教程分页
*/
export const getTutorialsList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/customer/video.page', data)
}

/**
 * @name 新增视频教程
*/
export const addTutorialsVideo_api = (data:{ id:string|number, link_url:string, video_type?:number|string }): Promise<res> => {
  return post(1,'/manage/customer/video.do', data, true)
}

/**
 * @name 删除视频教程
*/
export const delTutorialsVideo_api = (data:{ id:string|number }): Promise<res> => {
  return post(1,'/manage/customer/video.del', data, true)
}

/**
 * @name 上下架视频教程
*/
export const setTutorialsVideo_api = (data:{ id:string|number, status:0|1 }): Promise<res> => {
  return post(1,'/manage/customer/video/up.do', data, true)
}

/**
 * @name 视频教程列表展示
*/
export const getTopTutorialsList_api = (data:{ status:0|1 }): Promise<res> => {
  return get(1,'/manage/customer/video.list', data)
}

/**
 * @name 管理端常见问题分页
*/
export const getProblemList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/customer/common/problem.page', data)
}

/**
 * @name 管理端常见问题Save接口
*/
export const saveProblem_api = (data:{ answer:string, problem:string, problem_type:number|string, id?:string|number }): Promise<res> => {
  return post(1,'/manage/customer/common/problem.save', data, true)
}

/**
 * @name 管理端常见问题删除接口
*/
export const delProblem_api = (data:{ id:string|number }): Promise<res> => {
  return post(1,'/manage/customer/common/problem.del', data, true)
}