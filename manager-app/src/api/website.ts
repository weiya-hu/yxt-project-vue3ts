import { get, post } from '@/utils/request'


//获取动态列表
export const dynamic_api = (data:PageParams): Promise<res> => {
  return get(1,'/official/dynamic.page', data)
}
//获取通知列表
export const notice_api = (data:PageParams): Promise<res> => {
    return get(1,'/official/notice.page', data)
  }
//获取搜索新闻列表
export const news_api = (data:PageParams): Promise<res> => {
  return post(1,'/news/condition/info.page', data)
}
//获取新闻统计数据
export const statistics_api = (): Promise<res> => {
  return get(1,'/news/info.agg')
}
// 新闻分类列表
export const typeList_api = (): Promise<res> => {
  return get(1,'/news/type.list')
}
//添加新闻分类
export const newsTypeAdd_api = (data:{name:number}): Promise<res> => {
  return post(1,'/news/type.in',data,true)
}
//删除新闻分类
export const newsTypeDel_api = (data:{id:number}): Promise<res> => {
  return post(1,'/news/type.del',data,true)
}
// 修改分类名称
export const newsNameEdit_api = (data:{id:number,name:string}): Promise<res> => {
  return post(1,'/news/type/name.up',data,true)
}
// 获取动态详情
export const dynamicDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/official/dynamic/detail.get',data)
}
// 获取通知详情
export const noticeDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/official/notice/detail.get',data)
}
// 获取资讯详情
export const newsDetail_api = (data:{id:string}): Promise<res> => {
  return get(1,'/news/info.get',data)
}
// 动态上线
export const dyUp_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/dynamic/upload.do',data,true)
}
// 动态下线
export const dyDown_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/dynamic/download.do',data,true)
}
// 通知上线
export const ntUp_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/notice/upload.do',data,true)
}
// 通知下线
export const ntDown_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/notice/download.do',data,true)
}
//删除动态
export const dyDel_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/dynamic.del',data)
}
//删除通知
export const ntDel_api = (data:{id:string}): Promise<res> => {
  return post(1,'/official/notice.del',data)
}
//删除新闻
export const newsDel_api = (data:{id:string}): Promise<res> => {
  return post(1,'/news/info.del',data)
}

// 新闻上线
export const newsUp_api = (data:{id:string}): Promise<res> => {
  return post(1,'/news/info/upload.do',data,true)
}
// 新闻下线
export const newsDown_api = (data:{id:string}): Promise<res> => {
  return post(1,'/news/info/download.do',data,true)
}
// 新闻审核通过
export const newsPass_api = (data:{id:string}): Promise<res> => {
  return post(1,'/news/info/pass.do',data)
}
// 新闻审核驳回
export const newsReject_api = (data:{id:string,fail_reason:string}): Promise<res> => {
  return post(1,'/news/info/reject.do',data)
}
// 新闻收藏用户
export const collection_api = (data:PageParams): Promise<res> => {
  return get(1,'/news/info/collection.page', data)
}
// 新闻评论列表
export const comment_api = (data:PageParams): Promise<res> => {
  return get(1,'/news/info/comment.page', data)
}
// 新闻分享用户
export const share_api = (data:PageParams): Promise<res> => {
  return get(1,'/news/info/share.page', data)
}
// 评论屏蔽操作
export const newsShield_api = (data:{id:string}): Promise<res> => {
  return post(1,'/news/info/comment/logic.do',data)
}

// 添加动态
export const dynamicAdd_api = (data:any): Promise<res> => {
  return post(1,'/official/dynamic.in',data,true)
}
// 编辑动态
export const dynamicEdit_api = (data:any): Promise<res> => {
  return post(1,'/official/dynamic.up',data,true)
}
// 添加通知
export const noticeAdd_api = (data:any): Promise<res> => {
  return post(1,'/official/notice.in',data,true)
}
// 编辑通知
export const noticeEdit_api = (data:any): Promise<res> => {
  return post(1,'/official/notice.up',data,true)
}
// 添加新闻
export const newsAdd_api = (data:any): Promise<res> => {
  return post(1,'/official/news.in',data,true)
}
// 编辑新闻
export const newsEdit_api = (data:any): Promise<res> => {
  return post(1,'/news/info.up',data,true)
}
