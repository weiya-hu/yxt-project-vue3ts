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
  modelValue:number,
  total:number,
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
.mypage{
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>