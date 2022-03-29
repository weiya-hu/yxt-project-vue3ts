<template>
  <div class="mypage">
    <el-pagination background layout="prev, pager, next ,jumper" :total="total" :pager-count="9" v-model:currentPage="modelValue" @current-change="change">
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
}>(),{
  total:0
})
const emit = defineEmits(['update:modelValue','change'])

const change = (page:number)=>{
  emit('update:modelValue',page)
  emit('change')
}

</script>

<style scoped lang="scss">

</style>