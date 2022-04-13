import { get, post } from '@/utils/request'
const contentType = (type:number) =>{
    // 1 软文 2 图库 3 海报 4 视频
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
// 个性化内容库软文列表接口
export const articleList_api = (data:PageParams,type:number): Promise<res> => {
    return get(1,`/manage/${contentType(type)}/diy.page`,data)
  }