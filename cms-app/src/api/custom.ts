import { get, post } from '@/utils/request'

/**
 * @name 获取个性化分页数据
*/
export const customList_api = (data:PageParams): Promise<res> => {
  return get('/cms/diy/page',data)
}

/**
 * @name 创建个性化数据
*/
export const customAdd_api = (data:any): Promise<res> => {
  return post('/cms/diy/save',data,true)
}

/**
 * @name 删除个性化数据
*/
export const customDel_api = (data:{id:string}): Promise<res> => {
  return post('/cms/diy/delete',data,true)
}

/**
 * @name 查看已完结
*/
export const customDetails_api = (data:{id:string}): Promise<res> => {
  return get('/cms/diy/getAuditReturn',data)
}