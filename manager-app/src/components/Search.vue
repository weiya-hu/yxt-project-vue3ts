<template >
    <div>
        <el-form :inline="true" :model="modelValue" class="demo-form-inline" ref="myform" >
    <el-form-item prop="name">
      <el-input v-model="modelValue.userName" placeholder="请输入客户名称" />
    </el-form-item>
    <el-form-item prop="status">
      <el-select v-model="modelValue.status" placeholder="状态">
        <slot></slot>
      </el-select>
    </el-form-item>
    <el-form-item prop="date">
       <el-date-picker v-model="modelValue.create_time" type="date" placeholder="创建日期"  format="YYYY/MM/DD"
        value-format="YYYY/MM/DD"
        />
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="submitForm" size="large">查询</el-button>
      <el-button @click="submitReset" size="large">重置</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>
<script setup lang="ts">
//  头部搜索重置组件
import { reactive, ref} from 'vue'
import type { ElForm } from 'element-plus'
import {errMsg} from '@/utils/index'
const myform = ref<InstanceType<typeof ElForm>>()
const props = withDefaults(defineProps<{
  modelValue:any,
}>(),{})

// 搜索
const emit = defineEmits(['search','reset'])
const submitForm = () => {
  emit('search')
}
// 重置
const submitReset = () => {
  emit('reset')
}
</script>
<style scoped lang="scss">
    
</style>