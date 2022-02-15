import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'

export const mainStore = defineStore('mainStore', () => {
  //这样写第一个参数就是$id
  const state = reactive({
    name: '管理员',
  })
  const setName = (data: string) => {
    state.name = data
  }
  return {
    state,
    setName,
  }
})
