<template >
    <div>
        <el-form :inline="true" :model="formData" class="demo-form-inline" ref="myform" >
    <el-form-item prop="name">
      <el-input v-model="formData.name" placeholder="请输入客户名称" />
    </el-form-item>
    <el-form-item prop="status">
      <el-select v-model="formData.status" placeholder="状态">
        <el-option label="全部" value="1" />
        <el-option label="待处理" value="2" />
        <el-option label="已受理" value="3" />
        <el-option label="被驳回" value="4" />
        <el-option label="已完结" value="5" />
      </el-select>
    </el-form-item>
    <el-form-item prop="date">
       <el-date-picker v-model="formData.date" type="date" placeholder="创建日期" />
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="submitForm">查询</el-button>
      <el-button @click="submitReset">重置</el-button>
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
const formData = reactive({
  name: '',
  status: '',
  date: ''
})
// 搜索
const emit = defineEmits(['search'])
const submitForm = () => {
  const { name, status, date } = formData
  if (formData.name.trim().length <1 || formData.name.trim().length > 36) {
      errMsg('客户名称输入长度须在 1 ~ 36 之间')
      return
  }
    emit('search',formData)
    myform.value?.resetFields()
  console.log(name, status, date)
}
// 重置
const submitReset = () => {
  myform.value?.resetFields()
}
</script>
<style scoped lang="scss">
    
</style>