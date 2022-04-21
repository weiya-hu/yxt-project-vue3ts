import { get, post } from '@/utils/request'

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
