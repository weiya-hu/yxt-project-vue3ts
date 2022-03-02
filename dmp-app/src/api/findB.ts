import { get, post } from '@/utils/request'

//获取阿里oss参数 //key 过期时间2s
export const getAliToken_api = (): Promise<any> => {
  return get('/user/upload-policy')
}

//获取行业分类列表
export const getIndustryList_api = (): Promise<any> => {
  return get('/dim/get-industry')
}

//获取地区列表id
export const getAddreList_api = (): Promise<any> => {
  return get('/dim/get-geo')
}

//联系方式与企业类型
export const getCAndC_api = (): Promise<res> => {
  return get('/dmp/contact-ctype')
}

//条件组列表
export const conditionsList_api = (data:any): Promise<res> => {
  return get('/dmp/conditions-list',data)
}

//保存条件组
export const subConditions_api = (data:any): Promise<res> => {
  return post('/dmp/conditions-save',data,true)
}

//删除条件组
export const delConditions_api = (data:any): Promise<res> => {
  return post('/dmp/conditions-delete',data,true)
}

//条件组搜索（高级搜索）
export const searchByConditions_api = (data:any): Promise<res> => {
  return post('/dmp/conditions-search',data,true)
}

//个性化需求列表
export const demandList_api = (data:any): Promise<res> => {
  return get('/dmp/demand-list',data)
}

//添加个性化需求
export const addDemand_api = (data:any): Promise<res> => {
  return post('/dmp/demand-add',data,true)
}

//删除个性化需求
export const delDemand_api = (data:any): Promise<res> => {
  return post('/dmp/demand-delete',data,true)
}

//个性化需求详情
export const demandDetail_api = (data:any): Promise<res> => {
  return get('/dmp/demand-detail',data)
}