<template>
  <div class="add_people">

    <el-dialog v-model="modelValue" title="新建数据" width="500px" @close="closeAdd">
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
        

        <el-form-item label="上传附件" prop="tels">
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
//简易的居中布局弹窗 和 客服弹窗
import { reactive, ref  } from 'vue'
import MyCascader from "@/components/MyCascader.vue";
import MyUpload from "@/components/MyUpload.vue";
import type { ElForm } from 'element-plus'

const props = withDefaults(defineProps<{
  modelValue:boolean,
  
}>(),{
  
})
const emit = defineEmits(['update:modelValue'])

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
      // callback(new Error('请添加文件'))
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
const addFormRef = ref<FormInstance>()

const fileErrorType = ref('none')//上传文件错误类型
const upLoading = ref(false)

const upChange = (errorType:string)=>{
  //上传组件状态改变时 添加时效验文件格式大小
  if(errorType){
    fileErrorType.value = errorType
    // addForm.value.file = ''
    addFormRef.value!.validateField('file', () => null)
  }else{
    fileErrorType.value = ''
    addFormRef.value!.clearValidate('file')
  }
}


const closeAdd = ()=>{
  //关闭添加弹窗
  // addShow.value = false
  emit('update:modelValue',false)
}
const upError = ()=>{

}
const upSuccess = ()=>{

}
const submitAddForm = ()=>{

}
</script>

<style scoped lang="scss">
.add_people{
  
}
</style>