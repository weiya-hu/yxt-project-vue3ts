import { get, post } from '@/utils/request'

//登录所需接口 //
export const firstToken = (): Promise<any> => {
  return get('/user/public/get-user')
}

export const getNewsTypeList_api = (): Promise<any> => {
  return get('/news/public/type-list')
}
