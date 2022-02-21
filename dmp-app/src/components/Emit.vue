<template>
  <div class="emit">
    <button @click="emit">{{ msg.a }}</button>
    <button @click="changeA(5)">inject:{{ cdata.a }}</button>
    <div>{{ name }}</div>
    <button @click="changefather1">{{ data }}chang1</button>
    <button @click="changefather2">{{ data }}chang2</button>
  </div>
</template>

<script setup lang="ts">
//测试用
import emiter from '@/utils/bus'
import { reactive, inject } from 'vue'
const props = defineProps({
  //获取prors
  name: {
    type: String,
    default: '哒哒哒',
  },
  data: Number,
})
const vemits = defineEmits(['emitchange1', 'emitchange2']) //声明事件 父子组件通讯
const changefather1 = () => {
  vemits('emitchange1')
}
const changefather2 = () => {
  vemits('emitchange2', 2)
}

const cdata: any = inject('mydata') //inject
const changeA = (val: number) => {
  cdata.change(val)
}

const msg = reactive({ a: 123 })
// const msg = { a: 123 }
const emit = () => {
  emiter.emit('hhh', msg) //全局事件
}

defineExpose({
  //导出的数据，父组件就可以通过ref方式获取
  obj: reactive({ a: 123 }),
  changeA,
})
</script>

<style scoped lang="scss">
.emit {
  background-color: $dfcolor;
}
</style>
