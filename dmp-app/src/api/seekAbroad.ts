import { get, post } from '@/utils/request'


//获取需求列表
export const overseasPage = (data:any): Promise<any> => {
  return get('dmp', '/dmp/overseas/demand.page',data)
}

//获取需求详情
export const overseasDetailPage = (data:any): Promise<any> => {
  return get('dmp', '/dmp/overseas/demand/detail.page',data)
}

//删除需求
export const overseasDel = (data:any): Promise<res> => {
  return post('dmp', '/dmp/overseas/demand.del',data,true)
}

//添加需求
export const overseasIn = (data:any): Promise<res> => {
  return post('dmp', '/dmp/overseas/demand.in',data,true)
}

//获取国家名称
export const countryList = (): Promise<res> => {
  return get('dmp', '/dmp/overseas/country.list')
}

/**
 * @name 数据同步
*/
export const setSync_api = (data:{ list:(string|number)[] }): Promise<res> => {
  return post('dmp', '/dmp/overseas/sync.do', data)
}

/**
 * @name 数据同步今日剩余条数
*/
export const getSyncInfo_api = (): Promise<res> => {
  return get('dmp', '/dmp/overseas/sync.get')
}
