<template>
  <el-cascader
    v-model="modelValue"
    :options="typeList"
    @change="change"
    :props="typeProps"
    placeholder="请选择行业"
    v-if="type=='type'"
    class="w100"
    ref="cRef"
  ></el-cascader>
  <el-cascader
    v-model="modelValue"
    :options="addressList"
    @change="change"
    :props="addrProps"
    placeholder="请选择地区"
    v-else
    class="w100"
    ref="cRef"
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
  value:'code',
  label:'name',
}

const change = (value:any) => {
  emit('update:modelValue',value)
}

const cRef = ref()
const getText = ()=>{
  if(cRef.value.getCheckedNodes().length){
    return cRef.value.getCheckedNodes()[0].text
  }else{
    return ''
  }
}
defineExpose({
  getText
})
</script>

<style scoped lang="scss">

</style>