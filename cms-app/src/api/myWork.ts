import { get, post } from '@/utils/request'

/**
 * @name 我的内容库软文列表分页接口
*/
export const articleList_api = (data:PageParams): Promise<res> => {
  return get('cms', '/cms/articles.page',data)
}

/**
 * @name 我的内容库新增接口(软文)
*/
export const articleAdd_api = (data:any): Promise<res> => {
  return post('cms', '/cms/articles.in',data,true)
}

/**
 * @name 我的内容库软文查看详情接口(软文)
*/
export const articleDetail_api = (data:{id:string}): Promise<res> => {
  return get('cms', '/cms/articles/detail.get',data)
}

/**
 * @name 我的内容库删除接口(软文)
*/
export const articleDel_api = (data:{id:string}): Promise<res> => {
  return post('cms', '/cms/articles.del',data,true)
}

/**
 * @name 我的内容库修改接口(软文)
*/
export const articleUpdate_api = (data:any): Promise<res> => {
  return post('cms', '/cms/articles.up',data,true)
}

/**
 * @name 我的内容库图片列表分页接口
*/
export const imagesList_api = (data:PageParams): Promise<res> => {
  return get('cms', '/cms/images.page',data)
}

/**
 * @name 我的内容库新增接口(图片)
*/
export const imagesAdd_api = (data:{ thumb_url:string, source_name?:string }): Promise<res> => {
  return post('cms', '/cms/images.in', data)
}

/**
 * @name 我的内容库修改图片名称接口
*/
export const imagesEdit_api = (data:{ id:string|number, source_name:string }): Promise<res> => {
  return post('cms', '/cms/images.up', data, true)
}

/**
 * @name 我的内容库删除接口(图片)
*/
export const imagesDel_api = (data:{id:string}): Promise<res> => {
  return post('cms', '/cms/images.del',data,true)
}

/**
 * @name 我的内容库海报列表分页接口
*/
export const posterList_api = (data:PageParams): Promise<res> => {
  return get('cms', '/cms/posters.page',data)
}

/**
 * @name 我的内容库新增接口(海报)
*/
export const posterAdd_api = (data:{ thumb_url:string, source_name?:string }): Promise<res> => {
  return post('cms', '/cms/posters.in',data)
}

/**
 * @name 我的内容库修改海报名称接口
*/
export const posterEdit_api = (data:{ id:string|number, source_name:string }): Promise<res> => {
  return post('cms', '/cms/posters.up', data, true)
}

/**
 * @name 我的内容库删除接口(海报)
*/
export const posterDel_api = (data:{id:string}): Promise<res> => {
  return post('cms', '/cms/posters.del',data,true)
}

/**
 * @name 我的内容库视频列表分页接口
*/
export const videoList_api = (data:PageParams): Promise<res> => {
  return get('cms', '/cms/videos.page',data)
}

/**
 * @name 我的内容库新增接口(视频)
*/
export const videoAdd_api = (data:{ thumb_url:string, source_name?:string }): Promise<res> => {
  return post('cms', '/cms/videos.in',data)
}

/**
 * @name 我的内容库修改海报名称接口
*/
export const videoEdit_api = (data:{ id:string|number, source_name:string }): Promise<res> => {
  return post('cms', '/cms/videos.up', data, true)
}

/**
 * @name 我的内容库删除接口(视频)
*/
export const videoDel_api = (data:{id:string}): Promise<res> => {
  return post('cms', '/cms/videos.del',data,true)
}