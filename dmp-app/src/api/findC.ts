import { get, post } from '@/utils/request'

/**
 * @name 获取关键词记录
*/
export const getSearchWord_api = (): Promise<res> => {
  return get('dmp', '/dmp/customer/keyword/record.list')
}

/**
 * @name 获取康洲数据源或第三方数据分页列表
*/
export const wordSearchList_api = (data:PageParams): Promise<res> => {
  return post('dmp', '/dmp/customer/source.page',data)
}

/**
 * @name 获取运营商
*/
export const getTelList_api = (): Promise<res> => {
  return get('dmp', '/dim/provider.list')
}

/**
 * @name 新建号码段人群
*/
export const addInset_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/segment/demand.in',data,true)
}

/**
 * @name 获取号码段获客人群分页列表
*/
export const getInsetList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/segment/demand.page',data)
}

/**
 * @name 查看号码段客户分页列表
*/
export const getInsetUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/segment.page',data)
}

/**
 * @name 新建广告投放数据（人群）
*/
export const addAd_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/advert/demand.in',data,true)
}

/**
 * @name 删除广告投放数据（人群）
*/
export const delAd_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/advert/demand.del',data,true)
}

/**
 * @name 获取广告投放需求分页列表
*/
export const getAdList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/advert/demand.page',data)
}

/**
 * @name 查看广告投放客户分页列表
*/
export const getAdUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/advert.page',data)
}

/**
 * @name 获取微信号分页列表
*/
export const getWxList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/wechat/demand.page',data)
}

/**
 * @name 查询微信账号（新增需求）
*/
export const addWx_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/wechat/demand.in',data,true)
}

/**
 * @name 查看微信客户
*/
export const getWxUser_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/wechat.page',data)
}

/**
 * @name 新建百度关键词数据（人群）
 */
export const addBaidu_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/baidu/demand.in',data,true)
}

/**
 * @name 删除百度关键词数据（人群）
 */
export const delBaidu_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/baidu/demand.del',data,true)
}

/**
 * @name 获取百度关键词人群分页列表
*/
export const getBaiduList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/baidu/demand.page',data)
}

/**
 * @name 查看百度关键词客户分页列表
*/
export const getBaiduUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/baidu.page',data)
}

/**
 * @name 新建大数据获客数据(人群)
 */
 export const addBig_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/bigdata/demand.in',data,true)
}

/**
 * @name 删除大数据获客数据（人群）
 */
export const delBig_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/bigdata/demand.del',data,true)
}

/**
 * @name 获取大数据获客人群分页列表
*/
export const getBigList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/bigdata/demand.page',data)
}

/**
 * @name 查看大数据获客客户分页列表
*/
export const getBigUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/bigdata.page',data)
}

/**
 * @name 新建400获客数据(人群)
 */
 export const addFour_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/phone/demand.in',data,true)
}

/**
 * @name 删除400获客数据（人群）
 */
export const delFour_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/phone/demand.del',data,true)
}

/**
 * @name 获取400获客人群分页列表
*/
export const getFourList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/phone/demand.page',data)
}

/**
 * @name 查看400获客客户分页列表
*/
export const getFourUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/phone.page',data)
}

/**
 * @name 新建竞价获客数据(人群)
 */
 export const addBidding_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/bidding/demand.in',data,true)
}

/**
 * @name 删除竞价获客数据（人群）
 */
export const delBidding_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/bidding/demand.del',data,true)
}

/**
 * @name 获取竞价获客人群分页列表
*/
export const getBiddingList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/bidding/demand.page',data)
}

/**
 * @name 查看竞价获客客户分页列表
*/
export const getBiddingUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/bidding.page',data)
}

/**
 * @name 新建短信获客数据(人群)
 */
 export const addMsg_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/sms/demand.in',data,true)
}

/**
 * @name 删除短信获客数据（人群）
 */
export const delMsg_api = (data:any): Promise<res> => {
  return post('dmp', '/dmp/customer/sms/demand.del',data,true)
}

/**
 * @name 获取短信获客人群分页列表
*/
export const getMsgList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/sms/demand.page',data)
}

/**
 * @name 查看短信获客客户分页列表
*/
export const getMsgUserList_api = (data:PageParams): Promise<res> => {
  return get('dmp', '/dmp/customer/sms.page',data)
}

/**
 * @name 数据同步
*/
export const SetSync_api = (data:{ list:(string|number)[] }): Promise<res> => {
  return post('dmp', '/dmp/customer/sync.do', data, true)
}

/**
 * @name 数据同步今日剩余条数
*/
export const getSyncInfo_api = (): Promise<res> => {
  return get('dmp', '/dmp/customer/sync.get')
}