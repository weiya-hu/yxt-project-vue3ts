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

/**
 * @name 营销学堂文章列表分页
*/
export const getArtList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/customer/marketing/article.page', data)
}

/**
 * @name 营销学堂文章根据id查看
*/
export const getArtDetails_api = (data:{ id:string|number }): Promise<res> => {
  return get(1,'/manage/customer/marketing/article.get', data)
}

/**
 * @name 营销学堂文章添加
*/
export const addArt_api = (data:{ article_type:string|number, status:1|2|3, text:string, title:string }): Promise<res> => {
  return post(1,'/manage/customer/article.in', data, true)
}

/**
 * @name 营销学堂文章根据id删除
*/
export const delArt_api = (data:{ id:string|number }): Promise<res> => {
  return post(1,'/manage/customer/article.del', data, true)
}

/**
 * @name 营销学堂文章上线下线
*/
export const setArt_api = (data:{ id:string|number, status:2|3 }): Promise<res> => {
  return post(1,'/manage/customer/article/up.do', data, true)
}

/**
 * @name 营销学堂视频分页
*/
export const getSchoolVideoList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/customer/marketing/video.page', data)
}

/**
 * @name 新增营销学堂视频
*/
export const addSchoolsVideo_api = (data:{ id:string|number, link_url:string, video_type?:number|string }): Promise<res> => {
  return post(1,'/manage/customer/marketing/video.do', data, true)
}

/**
 * @name 营销学堂视频删除
*/
export const delSchoolVideo_api = (data:{ id:string|number }): Promise<res> => {
  return post(1,'/manage/customer/marketing/video.del', data, true)
}

/**
 * @name 营销学堂视频上下架
*/
export const setSchoolVideo_api = (data:{ id:string|number, status:0|1 }): Promise<res> => {
  return post(1,'/manage/customer/marketing/video/up.do', data, true)
}

/**
 * @name 营销学堂视频列表展示
*/
export const getSchoolTopList_api = (data:{ status:0|1 }): Promise<res> => {
  return get(1,'/manage/customer/marketing/video.list', data)
}

/**
 * @name 客户反馈列表分页
*/
export const getFeedBackList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/customer/feedback.page', data)
}

/**
 * @name 客户反馈状态修改 status 0:未处理,1:已处理
*/
export const setFeedBackStatus_api = (data:{ id:string|number, status:0|1 }): Promise<res> => {
  return post(1,'/manage/customer/feedback/up.do', data, true)
}

/**
 * @name 客户反馈删除接口
*/
export const delFeedBackStatus_api = (data:{ id:string|number }): Promise<res> => {
  return post(1,'/manage/customer/feedback.del', data, true)
}

/**
 * @name 获取客服反馈类型详情
*/
export const getFeedBackType_api = (): Promise<res> => {
  return get(1,'/manage/customer/feedback.list')
}