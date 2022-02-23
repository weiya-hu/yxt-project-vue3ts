import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'
import { getIndustryList_api,getAddreList_api,getAliToken_api} from '@/api/findB'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    typeList:[] as any[],//行业分类
    addressList:[] as any[],//地区列表
    aliToken:{} as any,//阿里oss上传参数
  })
  const setTypeList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if(state.typeList.length){
        resolve(state.typeList)
      }else{
        getIndustryList_api().then((res:res)=>{
          state.typeList = res.body
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
          resolve(state.addressList)
        }).catch((error:any)=>{
          reject(error)
        })
      }
    })
  }
  const setAliToken = () =>{
    return new Promise<any>((resolve, reject) => {
      if(state.aliToken.policy){
        resolve(state.aliToken)
      }else{
        getAliToken_api().then((res:res)=>{
          state.aliToken = res.body
          resolve(state.aliToken)
        }).catch((error:any)=>{
          reject(error)
        })
      }
    })
  }
  return {
    state,
    setTypeList,
    setAddressList,
    setAliToken,
  }
})
