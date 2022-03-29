<template>
  <div class="add_people">

    <el-dialog v-model="modelValue" title="新建数据" width="500px" @close="closeAdd" :before-close="beforeCloseAdd">
      <el-form class="myform" ref="addFormRef" :model="addForm" :rules="addRules" v-loading="upLoading">
        <el-form-item label="人群名称" prop="people">
          <el-input v-model="addForm.people" placeholder="请输入人群名称"></el-input>
        </el-form-item>
        <el-form-item label="选择地区" prop="addr">
          <MyCascader v-model="addForm.addr" type="address"/>
        </el-form-item>
        <el-form-item label="人群描述" prop="desc">
          <el-input 
            v-model="addForm.desc" 
            placeholder="可对人群进行简单的描述"
            type="textarea"
            maxlength="150"
            show-word-limit
            rows="4"
            resize="none"
          ></el-input>
        </el-form-item>
        

        <el-form-item label="上传附件" prop="file">
          <MyUpload v-model="addForm.file" @change="upChange" @error="upError" @success="upSuccess" ref="upload"/>
        </el-form-item>
        
        <div class="fcs fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="submitAddForm">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
/**
 * 添加人群表单
 * @author chn 
*/
import { reactive, ref  } from 'vue'
import MyCascader from "@/components/MyCascader.vue";
import MyUpload from "@/components/MyUpload.vue";
import type { ElForm } from 'element-plus'
import { errMsg } from '@/utils/index'
import { ElMessageBox } from 'element-plus'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue','success'])
//modelValue 控制显隐藏，success返回表单效验成功后的参数

interface AddForm {
  people:string,
  desc:string,
  addr:any[],
  file:string
}
const addForm = ref<AddForm>({
  people:'',
  desc:'',
  addr:[],
  file:''
})
const fileErrorType = ref('none')//上传文件错误类型
const filePass = (rule:any, value:any, callback:any) => {
  //上传文件错误提示
  switch (fileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break;
    case 'type':
      callback(new Error('请添加 .doc、.docx、.pdf 格式的文件'))
      break;
    case 'none':
      callback()
      break;
    default:
      callback()
      break;
  }
}
const addRules = reactive({
  people:[{
    required: true,
    message: '请输入人群名称',
    trigger: 'blur',
  }],
  desc:[{
    required: true,
    message: '请输入人群描述',
    trigger: 'blur',
  }],
  addr:[{
    required: true,
    message: '请选择地区',
    trigger: 'change',
  }],
  file:[{
    validator: filePass,
    trigger: 'change' 
  }]
})
type FormInstance = InstanceType<typeof ElForm>
const addFormRef = ref<FormInstance>()//表单ref
const upload = ref()//上传组件ref

const upLoading = ref(false)

const upChange = (errorType:string)=>{
  //上传组件状态改变时 添加时效验文件格式大小
  if(errorType){
    fileErrorType.value = errorType
    addForm.value.file = ''
    addFormRef.value!.validateField('file', () => null)
  }else{
    fileErrorType.value = ''
    addFormRef.value!.clearValidate('file')
  }
}

const upSuccess = (path:string)=>{
  //上传成功后
  emit('success',{
    ...addForm.value,
    path
  })
}
const submitAddForm = ()=>{
  fileErrorType.value = 'none' //不是必传文件时，先清空再验证
  addFormRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upLoading.value = true
      if(addForm.value.file){
        //表单效验成功再上传
        upload.value.submit()
      }else{
        //没有文件并且不是必传文件时，就直接提交
        upSuccess('')
      }
    } else {
      console.log('error submit!');
      return false
    }
  })
}
const upError = (err:any)=>{
  //上传失败时
  console.log('uperr',err);
  addForm.value.file = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  upLoading.value = false
  errMsg('上传失败')
}

const beforeCloseAdd = (done:Function)=>{
  //关闭添加弹窗之前
  if(upLoading.value){
    ElMessageBox.confirm(
      '正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？',
      '温馨提示',
      {
        confirmButtonText: '取消',
        cancelButtonText: '确定',
        type: 'warning',
      }
    )
    .then(() => {
    })
    .catch(() => {
      done()
    })
  }else{
    done()
  }
}
const closeAdd = ()=>{
  //关闭添加弹窗
  upLoading.value = false
  fileErrorType.value = 'none'
  upload.value.clear()
  addFormRef.value!.resetFields()
  emit('update:modelValue',false)
}

const addError = ()=>{
  upLoading.value = false
}
defineExpose({
  addError
})
</script>

<style scoped lang="scss">
.add_people{
  .myform{
    :deep(.el-form-item__label){
      width: 90px;
    }
  }
}
</style>