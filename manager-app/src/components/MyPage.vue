<template>
  <div class="mypage">
    <el-pagination 
      background
      :layout="hideSizes ? 'total, prev, pager, next, jumper' : 'total, sizes, prev, pager, next, jumper' " 
      :total="total" 
      :pager-count="9" 
      v-model:currentPage="page" 
      v-model:page-size="size" 
      @current-change="change"
      @size-change="changeSize"
      :page-sizes="[10, 20, 30]"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
/**
 * 分页组件
 * @author chn 
*/
const props = withDefaults(defineProps<{
  page:number, // 当前页
  total:number, // 总数
  size?:number, // 每页条数
  hideSizes?:boolean // 是否隐藏条数选择
}>(),{
  total:0,
  size:10,
  hideSizes:false
})
const emit = defineEmits(['update:page','change','update:size'])

const change = (page:number) => {
  emit('update:page',page)
  emit('change')
}
const changeSize = (size: number) => {
  emit('update:size',size)
  emit('change')
}

</script>

<style scoped lang="scss">

</style>