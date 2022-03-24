import { get, post } from '@/utils/request'

/**
 * @name 获取关键词记录
*/
export const getSearchWord_api = (): Promise<res> => {
  return get('/dmp/findC/keywords-record')
}

/**
 * @name 获取康州数据源或第三方数据分页列表
*/
export const wordSearchList_api = (data:PageParams): Promise<res> => {
  return post('/dmp/findC/query-page',data)
}

/**
 * @name 获取运营商
*/
export const getTelList_api = (): Promise<res> => {
  return get('/dim/get-operator')
}

/**
 * @name 新建号码段人群
*/
export const addInset_api = (data:any): Promise<res> => {
  return post('/dmp/findC/inset-number-segment-demand',data,true)
}

/**
 * @name 获取号码段获客人群分页列表
*/
export const getInsetList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/number-segment-demand-page',data)
}

/**
 * @name 查看号码段客户分页列表
*/
export const getInsetUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/number-segment-page',data)
}

/**
 * @name 新建广告投放数据（人群）
*/
export const addAd_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-advert-demand',data,true)
}

/**
 * @name 删除广告投放数据（人群）
*/
export const delAd_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-advert-demand',data,true)
}

/**
 * @name 获取广告投放需求分页列表
*/
export const getAdList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/advert-demand-page',data)
}

/**
 * @name 查看广告投放客户分页列表
*/
export const getAdUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/advert-page',data)
}

/**
 * @name 获取微信号分页列表
*/
export const getWxList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/wechat-demand-page',data)
}

/**
 * @name 查询微信账号（新增需求）
*/
export const addWx_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-wechat-demand',data,true)
}

/**
 * @name 查看微信客户
*/
export const getWxUser_api = (data:any): Promise<res> => {
  return get('/dmp/findC/wechat',data)
}

/**
 * @name 新建百度关键词数据（人群）
 */
export const addBaidu_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-baidu-demand',data,true)
}

/**
 * @name 删除百度关键词数据（人群）
 */
export const delBaidu_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-baidu-demand',data,true)
}

/**
 * @name 获取百度关键词人群分页列表
*/
export const getBaiduList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/baidu-demand-page',data)
}

/**
 * @name 查看百度关键词客户分页列表
*/
export const getBaiduUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/baidu-page',data)
}

/**
 * @name 新建大数据获客数据(人群)
 */
 export const addBig_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-bigdata-demand',data,true)
}

/**
 * @name 删除大数据获客数据（人群）
 */
export const delBig_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-bigdata-demand',data,true)
}

/**
 * @name 获取大数据获客人群分页列表
*/
export const getBigList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/bigData-demand-page',data)
}

/**
 * @name 查看大数据获客客户分页列表
*/
export const getBigUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/bigData-page',data)
}

/**
 * @name 新建400获客数据(人群)
 */
 export const addFour_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-phone-demand',data,true)
}

/**
 * @name 删除400获客数据（人群）
 */
export const delFour_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-phone-demand',data,true)
}

/**
 * @name 获取400获客人群分页列表
*/
export const getFourList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/phone-demand-page',data)
}

/**
 * @name 查看400获客客户分页列表
*/
export const getFourUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/phone-page',data)
}

/**
 * @name 新建竞价获客数据(人群)
 */
 export const addBidding_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-bidding-demand',data,true)
}

/**
 * @name 删除竞价获客数据（人群）
 */
export const delBidding_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-bidding-demand',data,true)
}

/**
 * @name 获取竞价获客人群分页列表
*/
export const getBiddingList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/bidding-demand-page',data)
}

/**
 * @name 查看竞价获客客户分页列表
*/
export const getBiddingUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/bidding-page',data)
}

/**
 * @name 新建短信获客数据(人群)
 */
 export const addMsg_api = (data:any): Promise<res> => {
  return post('/dmp/findC/insert-sms-demand',data,true)
}

/**
 * @name 删除短信获客数据（人群）
 */
export const delMsg_api = (data:any): Promise<res> => {
  return post('/dmp/findC/delete-sms-demand',data,true)
}

/**
 * @name 获取短信获客人群分页列表
*/
export const getMsgList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/sms-demand-page',data)
}

/**
 * @name 查看短信获客客户分页列表
*/
export const getMsgUserList_api = (data:PageParams): Promise<res> => {
  return get('/dmp/findC/sms-page',data)
}