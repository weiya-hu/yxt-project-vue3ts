<template>
  <div class="mypage">
    <el-pagination 
      background
      :layout="hideSizes ? 'total, prev, pager, next, jumper' : 'total, sizes, prev, pager, next, jumper'" 
      :total="total" 
      :pager-count="9" 
      v-model:currentPage="my_page" 
      v-model:page-size="my_size" 
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
import { computed } from "vue";
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

const my_page = computed({
  get: () => props.page,
  set: (val) => {
    emit('update:page', val)
  }
})

const my_size = computed({
  get: () => props.size,
  set: (val) => {
    emit('update:size', val)
  }
})

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
.mypage{
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
}
</style>