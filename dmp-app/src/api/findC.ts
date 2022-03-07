import { get, post } from '@/utils/request'
import { debug } from 'console'

/**
 * @name 获取关键词记录
*/
export const getSearchWord_api = (): Promise<res> => {
  return get('/dmp/findC/keywords-record')
}

/**
 * @name 获取康州数据源或第三方数据分页列表
*/
export const wordSearchList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/query-page',data)
}

/**
 * @name 新建号码段人群
*/
export const addInset_api = (data:any): Promise<res> => {
  return post('/dmp/findC/inset-number-segment-demand',data,true)
}

/**
 * @name 获取号码段获客人群分页列表
*/
export const getInsetList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/number-segment-demand-page',data)
}

/**
 * @name 查看号码段客户分页列表
*/
export const getInsetDetailsList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/number-segment-page',data)
}

/**
 * @name 新建广告投放数据（人群）
*/
export const addAd_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-advert-demand',data,true)
}

/**
 * @name 获取广告投放需求分页列表
*/
export const getAdList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/advert-demand-page',data)
}