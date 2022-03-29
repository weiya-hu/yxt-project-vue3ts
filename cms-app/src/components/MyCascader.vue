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
/**
 * 行业、地区级联选择组件
 * @author chn 
*/
import { mainStore } from '@/store/index'
import { ref ,computed } from 'vue'
const props = withDefaults(defineProps<{
  modelValue:any[], // 绑定值
  type:string // 'type' 行业分类 其他地区分类
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
  value:'industry_id',
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
  getText // 获取当前显示的文字
})
</script>

<style scoped lang="scss">

</style>