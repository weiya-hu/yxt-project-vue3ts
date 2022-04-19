import { get, post } from '@/utils/request'

/**
 * @name 横幅列表展示
*/
export const getBannerList_api = (data:{ sectionType:number }): Promise<res> => {
  return get(1,'/manage/banner.list', data)
}

/**
 * @name 横幅上下架
*/
export const setBanner_api = (data:{ id:string|number, section_type:number, status:0|1, link_url?:string}): Promise<res> => {
  return post(1,'/manage/banner/up.do', data, true)
}