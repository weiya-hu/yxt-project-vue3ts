import { get, post } from '@/utils/request'
// 我的作品库软文列表接口
export const articleList_api = (data:PageParams): Promise<res> => {
    return get(1,'/manage/articles.page',data)
  }

//   我的内容库软文查看详情接口
export const articleDetail_api = (data:{id:string}): Promise<res> => {
    return get(1,'/manage/articles/detail.get',data)
  }
//   我的内容库软文审核接口
export const articleUpdate_api = (data:{id:number|string,status: number}): Promise<res> => {
    return post(1,'/manage/articles.up',data,true)
  }
//   我的内容库查看软文驳回原因接口
export const articleReason_api = (data:{id:string}): Promise<res> => {
    return get(1,'/manage/articles/reject.get',data)
  }