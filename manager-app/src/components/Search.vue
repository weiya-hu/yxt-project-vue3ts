<template >
  <div class="staff_page">
    <el-card>
      <el-form inline :model="modelValue" class="inline_myform" ref="myform">
        <div class="search-pre">
          <el-form-item prop="name" label="客户名称 :">
            <el-input v-model.trim="modelValue.userName" placeholder="请输入" />
          </el-form-item>
          <el-form-item prop="status" label="状态 :">
            <el-select v-model="modelValue.status" placeholder="请选择">
              <slot></slot>
            </el-select>
          </el-form-item>
          <el-form-item prop="date" label="创建日期 :">
            <el-date-picker
              v-model="modelValue.create_time"
              type="daterange"
              placeholder="请选择"
              format="YYYY-MM-DD"
              value-format="x"
            />
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm">查询</el-button>
          <el-button @click="submitReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
//  头部搜索重置组件
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { errMsg } from '@/utils/index'
const myform = ref<InstanceType<typeof ElForm>>()
const props = withDefaults(
  defineProps<{
    modelValue: any
  }>(),
  {}
)

// 搜索
const emit = defineEmits(['search', 'reset'])
const submitForm = () => {
  emit('search')
}
// 重置
const submitReset = () => {
  emit('reset')
}
</script>
<style scoped lang="scss">
.search-pre {
  margin-bottom: 22px;
}
:deep(.el-card.is-always-shadow) {
  box-shadow: none;
}
</style>
