import { get, post } from '@/utils/request'

const getPath = (type:number) =>{
  // 1 软文 2 图片 3 海报 4 视频
  let pathUrl = ''
  switch (type) {
    case 2:
      pathUrl = 'images'
      break;
    case 3:
      pathUrl = 'posters'
      break;
    case 4:
      pathUrl = 'videos'
      break;
    default:
      pathUrl = 'articles'
      break;
  }
  return pathUrl
}

/**
 * @name 获取个性化分页数据
*/
export const customList_api = (data:PageParams,type:number): Promise<res> => {
  return get('cms', `/cms/${getPath(type)}/diy.page`,data)
}

/**
 * @name 创建个性化数据
*/
export const customAdd_api = (data:any,type:number): Promise<res> => {
  return post('cms', `/cms/${getPath(type)}/diy.in`,data,true)
}

/**
 * @name 删除个性化数据
*/
export const customDel_api = (data:{id:string},type:number): Promise<res> => {
  return post('cms', `/cms/${getPath(type)}/diy.del`,data,true)
}

/**
 * @name 查看已完结
*/
export const customDetails_api = (data:{id:string},type:number): Promise<res> => {
  return get('cms', `/cms/${getPath(type)}/diy/detail.get`,data)
}