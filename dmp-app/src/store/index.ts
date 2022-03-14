import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'
import { getIndustryList_api,getAddreList_api} from '@/api/findB'
import { getUserInfo} from '@/api/login'
import { getHash} from '@/utils/index'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    userInfo:{} as any,//用户信息
    typeList:[] as any[],//行业分类
    typeHash:{} as any,//行业分类哈希表
    addressList:[] as any[],//地区列表
    addressHash:{} as any,//地区列表哈希表
    keepList:[] as string[],//需要缓存的路由组件列表，须要在组件文件中设置name属性，并且name必须和组件对应的路由的name一致，路由的meta属性中也必须添加keepAlive:true
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
      })
    })
  }
  return {
    state,
    setTypeList,
    setAddressList,
    setKeepList,
    setUserinfo
  }
})
