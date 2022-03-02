import { get, post } from '@/utils/request'
//个性化需求详情


/**
 * @msg 条件组列表
*/
export const conditionsList_api = (data:any): Promise<res> => {
  return get('/dmp/conditions-list',data)
}
