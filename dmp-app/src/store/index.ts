import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'
import { getIndustryList_api,getAddreList_api} from '@/api/findB'
import { getHash} from '@/utils/index'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    typeList:[] as any[],//行业分类
    typeHash:{} as any,//行业分类哈希表
    addressList:[] as any[],//地区列表
    addressHash:{} as any,//地区列表哈希表
  })
  const setTypeList = () => {
    return new Promise<any[]>((resolve, reject) => {
      if(state.typeList.length){
        resolve(state.typeList)
      }else{
        getIndustryList_api().then((res:res)=>{
          state.typeList = res.body
          state.typeHash = getHash(res.body,'industryId')
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
  return {
    state,
    setTypeList,
    setAddressList,
  }
})
