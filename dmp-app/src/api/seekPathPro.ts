import { get, post } from '@/utils/request'


//获取需求列表
export const channelPage = (data:any): Promise<any> => {
  return get('dmp', '/dmp/channel/demand.page',data)
}

//获取需求详情
export const channelDetailPage = (data:any): Promise<any> => {
  return get('dmp', '/dmp/channel/demand/detail.page',data)
}

//删除需求
export const channelDel = (data:any): Promise<res> => {
  return post('dmp', '/dmp/channel/demand.del',data,true)
}

//添加需求
export const channelIn = (data:any): Promise<res> => {
  return post('dmp', '/dmp/channel/demand.in',data,true)
}

/**
 * @name 数据同步
*/
export const setSync_api = (data:{ list:(string|number)[], type:1|2 }): Promise<res> => {
  return post('dmp', data.type == 1 ? '/dmp/channel/sync/channel.do' : '/dmp/channel/sync/project.do', data)
}

/**
 * @name 数据同步今日剩余条数
*/
export const getSyncInfo_api = (): Promise<res> => {
  return get('dmp', '/dmp/channel/sync.get')
}
