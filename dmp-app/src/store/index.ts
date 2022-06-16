import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getIndustryList_api, getAddreList_api ,getCAndC_api } from '@/api/findB'
import { getUserInfo, getCompanyInfo, getYxtUrl_api, getNowInsList_api, getPowerList_api } from '@/api/login'
import { countryList} from '@/api/seekAbroad'
import { getHash } from '@/utils/index'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    yxtUrl:{} as any,//跳转地址
    userInfo:{} as any,//用户信息
    companyInfo:{} as any,//公司信息
    insid: 0, // 当前实例id
    insListInfo: {} as { [x: string]: { insid: number, name: string, product_id: number }[] }, // 当前用户当前身份下可用实例 { dmp: [...], cms: [...] }
    powerListInfo: {} as any, // 用户权限列表 键为insid，值为对应的权限字符数组
    typeList:[] as any[],//行业分类
    typeHash:{} as any,//行业分类哈希表
    addressList:[] as any[],//地区列表
    addressHash:{} as any,//地区列表哈希表
    keepList:[] as string[],//需要缓存的路由组件列表，须要在组件文件中设置name属性，并且name必须和组件对应的路由的name一致，路由的meta属性中也必须添加keepAlive:true
    companyType:[] as any[],//企业类型
    countryList:[] as any[],//国家列表
  })
  const setTypeList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if(state.typeList.length){
        resolve(state.typeList)
      }else{
        getIndustryList_api().then((res:res)=>{
          state.typeList = res.body
          state.typeHash = getHash(res.body,'industry_id')
          resolve(state.typeList)
        }).catch((error:any)=>{
          reject(error)
        })
      }
    })
  }
  const setAddressList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if(state.addressList.length){
        resolve(state.addressList)
      }else{
        getAddreList_api().then((res:res)=>{
          state.addressList = res.body
          state.addressHash = getHash(res.body,'code')
          resolve(state.addressList)
        }).catch((error:any)=>{
          reject(error)
        })
      }
    })
  }
  const setKeepList = (list:string[])=>{
    state.keepList = list
  }
  const setUserinfo = ()=>{
    return new Promise<boolean>((resolve, reject) => {
      getUserInfo().then((res:res)=>{
        if(res.status == 1){
          state.userInfo = res.body
          resolve(true)
        }else{
          reject(false)
        }
      }).catch(err=>{
        reject(false)
      })
    })
  }
  const setUserPower = ()=>{
    return new Promise((resolve, reject) => {
      getCompanyInfo().then(async (res:res)=>{
        if(res.status == 1){
          state.companyInfo = res.body
          const res1 = await getNowInsList_api()
          state.insListInfo = res1.body
          const res2 = await getPowerList_api()
          state.powerListInfo = res2.body
          resolve(true)
        }else{
          reject(res.message)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  }
  const setInsid = (insid: number) => {
    state.insid = insid
  }
  const getCAndC = ()=>{
    return new Promise<any>((resolve, reject) => {
      getCAndC_api().then((res:res)=>{
        if(res.status == 1){
          state.companyType = res.body.c_type
          resolve(res.body)
        }else{
          reject(res.message)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  }
  const getCountryList = ()=>{
    return new Promise<any[]>((resolve, reject) => {
      countryList().then((res:res)=>{
        if(res.status == 1){
          state.countryList = res.body
          resolve(res.body)
        }else{
          reject(res.message)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  }
  const getYxtUrl = ()=>{
    return new Promise<any>((resolve, reject) => {
      getYxtUrl_api().then((res:res)=>{
        if(res.status == 1){
          state.yxtUrl = res.body
          resolve(res.body)
        }else{
          reject(res.message)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  }
  return {
    state,
    setTypeList,
    setAddressList,
    setKeepList,
    setUserinfo,
    setUserPower,
    setInsid,
    getCAndC,
    getCountryList,
    getYxtUrl
  }
})
