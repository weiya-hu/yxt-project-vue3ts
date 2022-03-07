import { get, post } from '@/utils/request'


//上传记录列表
export const upRecordList = (data:any): Promise<any> => {
  return get('/dmp/upRecord-list',data)
}

//上传记录详情
export const upRecordDetail = (data:any): Promise<any> => {
  return get('/dmp/upRecord-detail',data)
}

//上传客户
export const upRecordAdd = (data:any): Promise<res> => {
  return post('/dmp/upRecord-add',data,true)
}