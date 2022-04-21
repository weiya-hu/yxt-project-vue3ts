import { get, post } from '@/utils/request'
// 获取个性化软文分页数据
export const articleList_api = (data:PageParams): Promise<res> => {
  return get(1,'/manage/cms/res.page',data)
}
//资源内容删除
export const articleDel_api = (data:{id:string}): Promise<res> => {
    return post(1,'/manage/cms/res.del',data,true)
  }
  // 查看资源内容
  export const articleLook_api = (data:{id:string}): Promise<res> => {
    return get(1,'/manage/cms/res.get',data)
  }
  // 保存资源内容
  export const articleSave_api = (data:any): Promise<res> => {
    return post(1,'/manage/cms/res.save',data,true)
  }
  // 查看资源里的文章内容
  export const articleDetail_api = (data:{id:string}): Promise<res> => {
    return get(1,'/manage/cms/res/detail.get',data)
  }
  // 资源内容下架
  export const articleDown_api = (data:{id:string}): Promise<res> => {
    return post(1,'/manage/cms/res/down.do',data,true)
  }
  // 发布资源内容
  export const articleRelease_api = (data:any): Promise<res> => {
    return post(1,'/manage/cms/res/release.do',data,true)
  }
  // 资源内容上架
  export const articleUp_api = (data:{id:string}): Promise<res> => {
    return post(1,'/manage/cms/res/up.do',data,true)
  }
  //获取行业分类
  export const articleIndustry_api = (): Promise<res> => {
    return get(1,'/manage/cms/industry.get')
  }
