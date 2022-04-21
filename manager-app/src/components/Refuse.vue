<template>
  <div class="upload-users"> 
    <el-dialog v-model="modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">驳回原因</div>
      </template>
      <div>
        <el-form :model="formValue" v-loading="loading" ref="formRef" :rules="upUserRule">
          <el-form-item
            required
            prop="reason"
          >
            <el-input 
              placeholder="请简要描述不通过原因"
              v-model="formValue.reason"
              clearable
              type="textarea"
              maxlength="150"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure">上传</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref,onMounted} from 'vue'
import {useRoute} from 'vue-router'
//父组件传的值
const props = withDefaults(defineProps<{
  modelValue:boolean,
}>(),{})

//变量
const route = useRoute()
const upUserRule= reactive({
  reason:[{
    required: true,
    message: '请输入不通过原因',
    trigger: 'change',
  },{
    required: true,
    message: '请输入不通过原因',
    trigger: 'blur',}
  ],
})
const formValue=ref({
  reason:''
})
const formRef = ref()
const loading = ref(false)
const emit = defineEmits(['update:modelValue','success'])
const close=()=>{
  emit('update:modelValue',false)
}
const sure=()=>{
  formRef.value.validate((valid:any) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
    } else {
      console.log('error submit!');
      return false
    }
  })
}

</script>

<style scoped lang="scss">

</style>