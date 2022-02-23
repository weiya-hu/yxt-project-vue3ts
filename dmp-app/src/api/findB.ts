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

//条件组列表
export const conditionsList_api = (): Promise<res> => {
  return get('/dmp/conditions-list') as Promise<res>
}

//保存条件组
export const subConditions_api = (data:any): Promise<any> => {
  return post('/dmp/conditions-save',data,true)
}

//添加个性化需求
export const addDemand_api = (data:any): Promise<any> => {
  return post('/dmp/demand-add',data,true)
}
