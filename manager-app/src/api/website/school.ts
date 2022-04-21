import { get, post } from '@/utils/request'

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
export const addArt_api = (data:{ article_type:string|number, status:0|1|2, text:string, title:string }): Promise<res> => {
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
export const setArt_api = (data:{ id:string|number, status:0|1 }): Promise<res> => {
  return post(1,'/manage/customer/article/up.do', data, true)
}