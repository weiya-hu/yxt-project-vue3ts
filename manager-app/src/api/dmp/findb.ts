import { get, post,getWithResponsetype } from '@/utils/request'
import { keysOf } from 'element-plus/lib/utils'
import { has, indexOf } from 'lodash-es'

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

//搜索渠道需求列表
export const channelPage_api = (data:any): Promise<res> => {
  return get(1,'/dmp/channel/condition.page',data)
}

//渠道表单详情
export const channelDetail_api = (data:any): Promise<res> => {
  return get(1,'/dmp/channel/detail.page',data)
}

//渠道通过需求
export const channelPass_api = (data:any): Promise<res> => {
  return post(1,'/dmp/channel/pass.do', data, true)
}

//渠道驳回需求
export const channelReject_api = (data:any): Promise<res> => {
  return post(1,'/dmp/channel/reject.do', data, true)
}

//搜索项目需求列表
export const itemPage_api = (data:any): Promise<res> => {
  return get(1,'/dmp/item/condition.page',data)
}

//项目表单详情
export const itemDetail_api = (data:any): Promise<res> => {
  return get(1,'/dmp/item/detail.page',data)
}

//搜索采购商列表
export const overseasPurchasePage_api = (data:any): Promise<res> => {
  return get(1,'/dmp/overseas/purchase/condition.page',data)
}

//采购商表单详情
export const overseasPurchaseDetail_api = (data:any): Promise<res> => {
  return get(1,'/dmp/overseas/purchase/detail.page',data)
}

//海外审核通过操作
export const overseasPass_api = (data:any): Promise<res> => {
  return post(1,'/dmp/overseas/pass.do', data, true)
}

//海外驳回需求
export const overseasReject_api = (data:any): Promise<res> => {
  return post(1,'/dmp/overseas/reject.do', data, true)
}

//搜索供应商列表
export const overseasSupplyPage_api = (data:any): Promise<res> => {
  return get(1,'/dmp/overseas/supply/condition.page',data)
}

//采购商表单详情
export const overseasSupplyDetail_api = (data:any): Promise<res> => {
  return get(1,'/dmp/overseas/supply/detail.page',data)
}

//DMP下载模板
export const templeteDownload_api=(mode:string,type?:number)=>{
  let urlHash = {
    "business":"/dmp/business/template/download.do",
    "customer":"/dmp/customer/template/download.do",
    "channel":"/dmp/channel/template/download.do",
    "item":"/dmp/item/template/download.do",
    "overseas":"/dmp/overseas/template/download.do"
  }
  let data = type?{type}:{}
  return ():Promise<res> =>{
    return getWithResponsetype(1, urlHash[mode as keyof typeof urlHash], 'blob', data)
  }
}
