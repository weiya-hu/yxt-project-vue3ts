import { get, post } from '@/utils/request'

//获取地区列表
export const getDimGeo_api = (): Promise<res> => {
  return get(1,'/common/dim/geo/tree.list')
}

//获取行业列表
export const getDimIndustry_api = (): Promise<res> => {
  return get(1,'/common/dim/industry/tree.list')
}

//找B端个性化数据表单列表
export const businessDemand_api = (data:any): Promise<res> => {
  return get(1,'/dmp/business/demand/condition.page',data)
}

//找B端个性化数据需求表单详情
export const businessDemandDatail_api = (data:any): Promise<res> => {
  return get(1,'/dmp/business/demand/detail.page',data)
}

//找B端个性化通过需求
export const businessDemandPass_api = (data:any): Promise<res> => {
  return post(1,'/dmp/business/demand/pass.do', data, true)
}

//找B端个性化驳回需求
export const businessDemandReject_api = (data:any): Promise<res> => {
  return post(1,'/dmp/business/demand/reject.do', data, true)
}