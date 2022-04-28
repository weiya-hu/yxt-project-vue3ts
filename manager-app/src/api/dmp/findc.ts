import { get, post } from '@/utils/request'

//获取微信获客分页列表
export const wxList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/wechat/demand.page', data)
}
// 通过微信获客
export const wxPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/wechat/demand/pass.do', data)
}
//获取微信获客详情
export const wxDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/wechat.page', data)
}
// 驳回微信投放
export const wxReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/wechat/demand/reject.do', data)
}
// 上传微信获客客户
export const wxUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/wechat/upload.do', data)
}
//获取广告投放分页列表
export const adList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/advert/demand.page', data)
}
// 通过广告投放
export const adPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/advert/demand/pass.do', data)
}
//获取广告投放详情
export const adDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/advert.page', data)
}
// 驳回广告投放
export const adReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/advert/demand/reject.do', data)
}
// 上传广告投放客户
export const adUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/advert/upload.do', data)
}
//获取百度关键词获客分页列表
export const baiduList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/baidu/demand.page', data)
}
// 通过百度关键词获客
export const baiduPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/baidu/demand/pass.do', data)
}
//获取百度关键词详情
export const baiduDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/baidu.page', data)
}
// 驳回百度关键词
export const baiduReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/baidu/demand/reject.do', data)
}
// 上传百度关键词客户
export const baiduUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/baidu/upload.do', data)
}
//获取大数据获客分页列表
export const bigdataList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/bigdata/demand.page', data)
}
// 通过大数据获客
export const bigdataPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/bigdata/demand/pass.do', data)
}
//获取大数据详情
export const bigdataDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/bigdata.page', data)
}
// 驳回大数据
export const bigdataReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/bigdata/demand/reject.do', data)
}
// 上传大数据获客客户
export const bigdataUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/bigdata/upload.do', data)
}
//获取400获客分页列表
export const phoneList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/phone/demand.page', data)
}
// 通过400获客
export const phonePass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/phone/demand/pass.do', data)
}
//获取400详情
export const phoneDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/phone.page', data)
}
// 驳回400
export const phoneReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/phone/demand/reject.do', data)
}
// 上传400获客客户
export const phoneUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/phone/upload.do', data)
}
//获取竞价获客分页列表
export const biddingList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/bidding/demand.page', data)
}
// 通过竞价获客
export const biddingPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/bidding/demand/pass.do', data)
}
//获取竞价详情
export const biddingDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/bidding.page', data)
}
// 驳回竞价
export const biddingReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/bidding/demand/reject.do', data)
}
// 上传竞价获客客户
export const biddingUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/bidding/upload.do', data)
}
//获取短信获客分页列表
export const smsList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/sms/demand.page', data)
}
// 通过短信获客
export const smsPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/sms/demand/pass.do', data)
}
//获取短信详情
export const smsDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/sms.page', data)
}
// 驳回短信
export const smsReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/sms/demand/reject.do', data)
}
// 上传短信获客客户
export const smsUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/sms/upload.do', data)
}
//获取号码段获客分页列表
export const segmentList_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/number/segment/demand.page', data)
}
// 通过号码段获客
export const segmentPass_api = (data: { id: string }): Promise<res> => {
  return post(1, '/dmp/customer/number/segment/demand/pass.do', data)
}
//获取号码段详情
export const segmentDetail_api = (data: PageParams): Promise<res> => {
  return get(1, '/dmp/customer/number/segment.page', data)
}
// 驳回号码段
export const segmentReject_api = (data: { id: string; fail_reason: string }): Promise<res> => {
  return post(1, '/dmp/customer/number/segment/demand/reject.do', data)
}
// 上传号码段获客客户
export const segmentUp_api = (data: any): Promise<res> => {
  return post(1, '/dmp/customer/number/segment/upload.do', data)
}
