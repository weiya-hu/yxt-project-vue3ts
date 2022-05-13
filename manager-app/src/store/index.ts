import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getIndustryList_api, getAddreList_api, getUserInfo, getYxtUrl_api, getUserLv } from '@/api/login'
import { getHash } from '@/utils/index'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    yxtUrl:{} as any,//跳转地址
    userLv:[] as string[],//用户权限数组
    userInfo:{} as any,//用户信息
    typeList:[] as any[],//行业分类
    typeHash:{} as any,//行业分类哈希表
    addressList:[] as any[],//地区列表
    addressHash:{} as any,//地区列表哈希表
    keepList:[] as string[],//需要缓存的路由组件列表，须要在组件文件中设置name属性，并且name必须和组件对应的路由的name一致，路由的meta属性中也必须添加keepAlive:true,下级路由的meta中也要加入father字段为需要缓存的路由的path
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
    return new Promise<any>((resolve, reject) => {
      getUserInfo().then((res:res)=>{
        if(res.status == 1){
          state.userInfo = res.body
          sessionStorage.setItem('islogin', '1')
          resolve(state.userInfo)
        }else{
          state.userInfo = {}
          sessionStorage.removeItem('islogin')
          reject(res.message)
        }
      }).catch(err=>{
        state.userInfo = {}
        sessionStorage.removeItem('islogin')
        reject(err)
      })
    })
  }
  const setUserLv = (lvArr?:string[]) => {
    return new Promise<string[]>((resolve, reject) => {
      if(lvArr){
        state.userLv = lvArr
        resolve(state.userLv)
      }else{
        getUserLv().then((res:res)=>{
          if(res.status == 1){
            state.userLv = res.body.map((v:number|string) => String(v))
            resolve(state.userLv)
          }else{
            reject([])
          }
        }).catch(err=>{
          reject([])
        })
      }
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
    setUserLv,
    getYxtUrl
  }
})
