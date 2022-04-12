<template>
  <div class="mypage">
    <el-pagination background layout="prev, pager, next ,jumper" :total="total" :pager-count="9" v-model:currentPage="modelValue" v-model:page-size="size" @current-change="change">
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
/**
 * 分页组件
 * @author chn 
*/
import { ref } from 'vue'
const props = withDefaults(defineProps<{
  modelValue:number, // 当前页
  total:number, // 总数
  size?:number, // 每页条数
}>(),{
  total:0,
  size:10,
})
const emit = defineEmits(['update:modelValue','change'])

const change = (page:number)=>{
  emit('update:modelValue',page)
  emit('change')
}

</script>

<style scoped lang="scss">

</style>