import { get, post } from '@/utils/request'


/**
 * @name 资源分页数据 
*/
export const articlesList_api = (data:PageParams): Promise<res> => {
  return get('cms', '/cms/res.page',data)
}

/**
 * @name 查看资源内容详情
*/

export const resourceDetail_api = (data:{id:string}): Promise<res> => {
  return get('cms', '/public/res.get',data)
}

/**
 * @name 下载资源内容详情
*/
export const downList_api =(data:{id:string}): Promise<res> => {
  return get('cms', '/cms/res/download.do',data)
}

/**
 * @name 行业分类
*/
export const industryList_api =(): Promise<res> => {
  return get('cms', '/cms/industry.list')
}