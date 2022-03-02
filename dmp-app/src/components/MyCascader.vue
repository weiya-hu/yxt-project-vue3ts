<template>
  <el-cascader
    v-model="arr"
    :options="typeList"
    @change="typeChange"
    :props="typeProps"
    placeholder="请选择行业"
    v-if="type=='type'"
  ></el-cascader>
  <el-cascader
    v-model="arr"
    :options="addressList"
    @change="addrChange"
    :props="addrProps"
    placeholder="请选择地区"
    v-else
  ></el-cascader>
</template>

<script setup lang="ts">
//行业、地区级联选择组件
import { mainStore } from '@/store/index'
import { ref ,computed } from 'vue'
const props = withDefaults(defineProps<{
  modelValue:any[],
  type:string
}>(),{
  type:'type',
})
const emit = defineEmits(['update:modelValue'])

const store = mainStore()
const typeList = computed(() => store.state.typeList)
const addressList = computed(() => store.state.addressList)
const typeProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'industryId',
  label:'name',
}
const addrProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'id',
  label:'name',
}
const arr = ref([])
const addrChange = (value:any) => {
  emit('update:modelValue',value)
}
const typeChange = (value:any) => {
  emit('update:modelValue',value)
}
</script>

<style scoped lang="scss">

</style>