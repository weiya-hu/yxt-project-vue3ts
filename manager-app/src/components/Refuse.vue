<template>
  <div class="refuse">
    <el-dialog v-model="modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">驳回原因</div>
      </template>
      <div>
        <el-form ref="formRef" v-loading="loading" :model="formValue" :rules="upUserRule">
          <el-form-item required prop="reason">
            <el-input
              v-model="formValue.reason"
              placeholder="请简要描述不通过原因"
              clearable
              type="textarea"
              maxlength="300"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" :disabled="!formValue.reason" @click="sure">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
/**
 * 驳回弹框组件
 * @author hwy
 * modelValue控制弹框显示与否，给父组件传success方法传驳回原因
 */
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

//父组件传的值
const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {}
)

//变量
const route = useRoute()
const upUserRule = reactive({
  reason: [
    {
      required: true,
      message: '请输入不通过原因',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入不通过原因',
      trigger: 'blur',
    },
  ],
})
const formValue = ref({
  reason: '',
})
const formRef = ref()
const loading = ref(false)
const refuseDisabled = ref(true)
const emit = defineEmits(['update:modelValue', 'success'])
const close = () => {
  emit('update:modelValue', false)
  formRef.value.resetFields()
}
const sure = () => {
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      emit('success', formValue.value.reason)
    } else {
      // eslint-disable-next-line no-console
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.refuse {
  :deep(.el-dialog) {
    .el-dialog__header {
      height: 52px;
      .up-user-title {
        font-size: 16px;
        color: #333333;
        line-height: 16px;
        font-weight: bold;
      }
    }
    .el-dialog__body {
      padding: 20px 24px;
    }
  }
  :deep(.el-textarea__inner) {
    resize: none;
    width: 452px;
    height: 170px;
    background: #f7f8fa;
    border-radius: 4px;
    padding: 12px 16px;
    color: #333333;
    font-size: 14px;
    border: none;
    box-shadow: none;
  }
  :deep(.el-form-item) {
    margin: 0;
  }
}
</style>
