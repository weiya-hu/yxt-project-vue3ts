<template>
  <div class="up-user up-user-hwy">
    <el-dialog v-model="props.modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">上传客户</div>
      </template>
      <div>
        <el-form ref="formRef" v-loading="loading" :model="formValue" :rules="upUserRule">
          <el-form-item
            v-if="props.type === 'money'"
            required
            prop="money"
            label="消耗金额"
            class="use-money"
          >
            <el-input v-model="formValue.money" placeholder="请输入" type="number"></el-input>
            <div class="money-pexl">元</div>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="formValue.upload_type">
              <el-radio :label="1">覆盖原客户</el-radio> />
              <el-radio :label="2">新增客户</el-radio>/>
            </el-radio-group>
            <template #label>
              <div class="up-type">上传方式</div>
            </template>
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="formValue.show_type">
              <el-radio :label="1">全部</el-radio> /> <el-radio :label="2">自定义</el-radio>/>
            </el-radio-group>
            <template #label>
              <div class="up-type">显示数据</div>
            </template>
          </el-form-item>
          <div v-if="formValue.show_type === 2" class="flexr">
            <div class="flexl up-batch">
              每隔
              <el-form-item :required="formValue.show_type === 2" prop="days">
                <el-input v-model="formValue.days" type="number"></el-input>
              </el-form-item>
              日显示数据，直到第
              <el-form-item :required="formValue.show_type === 2" prop="batch">
                <el-input v-model="formValue.batch" type="number"></el-input>
              </el-form-item>
              批次显示结束
            </div>
          </div>
          <el-form-item prop="url">
            <MyUpload
              ref="fileUpRef"
              v-model="formValue.attachment"
              :exname-list="['.xlsx']"
              @change="upFileChange"
              @error="fileUpError"
              @success="fileUpSuccess"
            >
              <template #default>
                <div class="upload-slot">
                  <div>1、文件大小不超过4M</div>
                  <div>2、上传数据格式为Excel</div>
                  <el-link type="primary" :href="templateLink" download="模板.xlsx">
                    下载模板示例
                  </el-link>
                </div>
              </template>
            </MyUpload>
            <template #label>
              <div class="up-type">客户上传</div>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" :disabled="!formValue.attachment" @click="sure">确认</el-button>
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
import MyUpload from '@/components/MyUpload.vue'
import { ElMessage } from 'element-plus'
// eslint-disable-next-line camelcase
import { templeteDownload_api } from '@/api/dmp/findb'

//父组件传的值
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    type?: string //两种类型，一种常规，一种表单里带有消耗金额，commom/money
  }>(),
  {
    type: 'commom',
  }
)

//变量
const route = useRoute()
const upfileErrorType = ref()
const fileVali = (rule: any, value: any, callback: any) => {
  switch (upfileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break
    case 'type':
      callback(new Error('.xlsx 格式的文件'))
      break
    case 'none':
      callback(new Error('请添加文件'))
      break
    default:
      callback()
      break
  }
}
const upUserRule = reactive({
  money: [
    {
      required: true,
      message: '请输入消耗金额',
      trigger: 'change',
    },
    {
      required: true,
      message: '请输入消耗金额',
      trigger: 'blur',
    },
  ],
  days: [
    {
      required: true,
      message: '必填项',
      trigger: 'change',
    },
    {
      required: true,
      message: '必填项',
      trigger: 'blur',
    },
  ],
  batch: [
    {
      required: true,
      message: '必填项',
      trigger: 'change',
    },
    {
      required: true,
      message: '必填项',
      trigger: 'blur',
    },
  ],
  url: [
    {
      validator: fileVali,
      trigger: 'change',
    },
  ],
})
const formValue = ref({
  // eslint-disable-next-line camelcase
  upload_type: 1,
  // eslint-disable-next-line camelcase
  show_type: 1,
  money: null,
  days: null,
  batch: null,
  attachment: '',
})
const templateUrl = {
  '/dmp/findb/specificdata': templeteDownload_api('business'),
  '/dmp/findc/wxdata': templeteDownload_api('customer', 5),
  '/dmp/findc/addata': templeteDownload_api('customer', 4),
  '/dmp/findc/baidudata': templeteDownload_api('customer', 6),
  '/dmp/findc/bigdata': templeteDownload_api('customer', 7),
  '/dmp/findc/teldata': templeteDownload_api('customer', 8),
  '/dmp/findc/biddingdata': templeteDownload_api('customer', 9),
  '/dmp/findc/msgdata': templeteDownload_api('customer', 10),
  '/dmp/seekpathpro/seekpath': templeteDownload_api('channel'),
  '/dmp/seekpathpro/seekpro': templeteDownload_api('item'),
  '/dmp/seekabroad/buyer': templeteDownload_api('overseas'),
  '/dmp/seekabroad/supplier': templeteDownload_api('overseas'),
}
const templateLink = ref('')
const formRef = ref()
const fileUpRef = ref()
const loading = ref(false)
const emit = defineEmits(['update:modelValue', 'success'])
const templeteUrl = () => {
  const path: string = route.path
  templateUrl[path as keyof typeof templateUrl]().then((res: any) => {
    templateLink.value = URL.createObjectURL(res)
  })
}
templeteUrl()
const close = () => {
  emit('update:modelValue', false)
  URL.revokeObjectURL(templateLink.value)
  formRef.value.resetFields()
}
const sure = () => {
  // eslint-disable-next-line no-console
  console.log(formValue.value)
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      fileUpRef.value!.submit()
    } else {
      // eslint-disable-next-line no-console
      console.log('error submit!')
      return false
    }
  })
}
const upFileChange = (val: string) => {
  upfileErrorType.value = val
  formRef.value.validateField('attachment')
}
const fileUpError = (val: any) => {
  ElMessage({
    showClose: true,
    message: '附件上传失败，请稍后再试',
    type: 'error',
    grouping: true,
  })
}
const fileUpSuccess = (val: any) => {
  emit('success', {
    ...formValue.value,
    attachment: val,
    batch: formValue.value.batch !== null ? Number(formValue.value.batch) : null,
    days: Number(formValue.value.days) || null,
    money: Number(formValue.value.money) || null,
  })
  close()
}
</script>

<style scoped lang="scss">
.up-user {
  .upload-slot {
    margin-left: 12px;
    position: relative;
    top: 30px;
    > div {
      font-size: 12px;
      color: #999999;
      line-height: 20px;
    }
    :deep(.el-link__inner) {
      font-size: 12px;
      color: #2d68eb;
      line-height: 12px;
      margin-top: 6px;
    }
  }
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
  :deep(.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before) {
    margin-right: 8px;
  }
  :deep(.el-form-item__label) {
    padding-right: 20px;
  }
  .use-money {
    :deep(.el-input__inner) {
      width: 336px;
    }
    .money-pexl {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .up-type::before {
    content: '*';
    color: var(--el-color-danger);
    margin-right: 8px;
  }
  .up-batch {
    width: 362px;
    height: 48px;
    background: #f7f8fa;
    border-radius: 4px;
    margin-bottom: 12px;
    padding-left: 8px;
    :deep(.el-form-item) {
      margin-bottom: 0;
    }
    :deep(.el-input__inner) {
      width: 32px;
      height: 32px;
      background: #ffffff;
      border: 1px solid rgba(221, 221, 221, 1);
      border-radius: 4px;
      font-size: 14px;
      color: #333333;
      margin: 0 8px;
    }
    :deep(.el-form-item__error) {
      padding-left: 7px;
    }
  }
  :deep(input[type='number']) {
    -moz-appearance: textfield;
  }
}
</style>
