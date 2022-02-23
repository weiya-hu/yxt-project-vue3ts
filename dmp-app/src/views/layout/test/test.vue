<template>
  <div class="user_page">
    <div>
      <button @click="btn">{{ msgs }}</button>
      <div>provide:{{ a }}</div>
      <button @click="changeEmit">调用子组件方法</button>
      <Emit ref="emitcom" :data="fdata" @emitchange1="change1" @emitchange2="change2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Emit from '@/components/Emit.vue'
import emiter from '@/utils/bus'
import { reactive, computed, watch, ref, provide } from 'vue'

import { mainStore } from '@/store/index'

console.log(mainStore().state) //全局store

const msg = 'user'
const val = reactive({ a: 0 })
const msgs = computed(() => {
  //计算属性
  return msg + val.a
})
const btn = () => {
  val.a < 10 && val.a++
}
watch(val, () => {
  //侦听器
  if (val.a >= 10) {
    alert('max')
  }
})

const getData = (data: any) => {
  console.log(data)
  data.a = 321
}
emiter.on('hhh', getData) //全局事件

const emitcom = ref() //获取子组件
const changeEmit = () => {
  emitcom.value.changeA(3) //调用子组件方法
}

const fdata = ref(789)
const change1 = () => {
  //父子组件通讯
  fdata.value--
}
const change2 = (val: number) => {
  fdata.value -= val
}

const a = ref(10)
const change = (val: number) => {
  a.value += val
}
provide('mydata', {
  //provide
  a,
  change,
})
</script>

<style lang="scss" scoped>
.user_page {
  div {
    font-size: 40px;
  }
}
</style>
