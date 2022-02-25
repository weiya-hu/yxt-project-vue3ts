<template>
  <div class="mypage">
    <el-pagination background layout="prev, pager, next ,jumper" :total="total" :pager-count="9" v-model:currentPage="currentPage" @current-change="change">
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
//分页组件
import { ref } from 'vue'
const props = withDefaults(defineProps<{
  modelValue:number,
  total:number,
}>(),{
  total:0
})
const emit = defineEmits(['update:modelValue','change'])

const currentPage = ref(props.modelValue)
const change = (page:number)=>{
  emit('update:modelValue',page)
  emit('change',page)
}

</script>

<style scoped lang="scss">

</style>