import { get, post } from '@/utils/request'

//获取阿里oss参数 //key 过期时间2s
export const getAliToken_api = (params:{site:string}): Promise<any> => {
  return get('/user/upload.sign',params)
}

//获取行业分类列表
export const getIndustryList_api = (): Promise<any> => {
  return get('/dim/industry.list')
}

//获取地区列表id
export const getAddreList_api = (): Promise<any> => {
  return get('/dim/geo.list')
}

//联系方式与企业类型
export const getCAndC_api = (): Promise<res> => {
  return get('/dmp/business/condition/check.list')
}

//关键词搜索
export const wordSearchList_api = (data:any): Promise<res> => {
  return post('/dmp/business/keyword/company.page',data)
}

//关键词记录
export const getSearchWord_api = (): Promise<res> => {
  return get('/dmp/business/keyword.list')
}

//条件组列表
export const conditionsList_api = (data:any): Promise<res> => {
  return get('/dmp/business/condition.list',data)
}

//保存条件组
export const subConditions_api = (data:any): Promise<res> => {
  return post('/dmp/business/condition.in',data,true)
}

//删除条件组
export const delConditions_api = (data:any): Promise<res> => {
  return post('/dmp/business/condition.del',data,true)
}

//条件组搜索（高级搜索）
export const searchByConditions_api = (data:any): Promise<res> => {
  return post('/dmp/business/condition/company.page',data)
}

//个性化需求列表
export const demandList_api = (data:any): Promise<res> => {
  return get('/dmp/business/demand.page',data)
}

//添加个性化需求
export const addDemand_api = (data:any): Promise<res> => {
  return post('/dmp/business/demand.in',data,true)
}

//删除个性化需求
export const delDemand_api = (data:any): Promise<res> => {
  return post('/dmp/business/demand.del',data,true)
}

//个性化需求详情
export const demandDetail_api = (data:any): Promise<res> => {
  return get('/dmp/business/demand/detail.page',data)
}