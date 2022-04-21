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
export const articleUpdate_api = (data:{id:number|string,status: number,fail_reason:string}): Promise<res> => {
    return post(1,'/manage/articles.up',data,true)
  }
//   我的内容库查看软文驳回原因接口
export const articleReason_api = (data:{id:string}): Promise<res> => {
    return get(1,'/manage/articles/reject.get',data)
  }
  // 我的内容库图片分页数据
  export const imagesList_api = (data:PageParams): Promise<res> => {
    return get(1,'/manage/images.page',data)
  }
  //   我的内容库软文审核接口
export const imagesUpdate_api = (data:{id:number|string,status: number,fail_reason:string}): Promise<res> => {
  return post(1,'/manage/images.up',data,true)
}
// 我的内容库图片查看详情接口
export const imagesDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/images/detail.get',data)
}
// 我的内容库查看图片驳回原因接口
export const imagesReason_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/images/reject.get',data)
}
// 我的内容库海报分页数据
export const posterList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/posters.page',data)
}
//   我的内容库海报审核接口
export const posterUpdate_api = (data:{id:number|string,status: number,fail_reason:string}): Promise<res> => {
  return post(1,'/manage/posters.up',data,true)
}
// 我的内容库海报查看详情接口
export const posterDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/posters/detail.get',data)
}
// 我的内容库查看海报驳回原因接口
export const posterReason_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/posters/reject.get',data)
}

// 我的内容库视频分页数据
export const videoList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/videos.page',data)
}
//   我的内容库视频审核接口
export const videoUpdate_api = (data:{id:number|string,status: number,fail_reason:string}): Promise<res> => {
  return post(1,'/manage/videos.up',data,true)
}
// 我的内容库视频查看详情接口
export const videoDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/videos/detail.get',data)
}
// 我的内容库查看视频驳回原因接口
export const videoReason_api = (data:{id:string}): Promise<res> => {
  return get(1,'/manage/videos/reject.get',data)
}
