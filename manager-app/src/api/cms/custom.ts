import { get, post } from '@/utils/request'
// 获取个性化软文分页数据
export const articleList_api = (data: PageParams): Promise<res> => {
  return get(1, '/manage/diy/article.page', data)
}
// 获取详情

export const articleDetail_api = (data: any): Promise<res> => {
  return get(1, '/manage/diy/article.get', data)
}
// 完成编辑软文数据
export const articleEditing_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/article.do', data, true)
}
// 保存编辑软文数据
export const articleSaveedit_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/article.save', data, true)
}
// 个性化数据审核通过
export const articlePass_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/pass.do', data, true)
}
// 个性化数据驳回
export const articleReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/manage/diy/reject.do', data, true)
}
// 下载附件
export const articleAttach_api = (data: { id: string }): Promise<res> => {
  return get(1, '/manage/diy/attach.get', data)
}
// 获取个性化图片分页数据
export const imagesList_api = (data: PageParams): Promise<res> => {
  return get(1, '/manage/diy/image.page', data)
}
// 图片上传
export const articleImagsave_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/image.save', data, true)
}
// 获取个性化海报分页数据
export const posterList_api = (data: PageParams): Promise<res> => {
  return get(1, '/manage/diy/poster.page', data)
}
// 海报上传
export const articlePostersave_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/poster.save', data, true)
}
// 获取个性化海报分页数据
export const videoList_api = (data: PageParams): Promise<res> => {
  return get(1, '/manage/diy/video.page', data)
}
// 视频上传
export const articleVideosave_api = (data: any): Promise<res> => {
  return post(1, '/manage/diy/video.save', data, true)
}
