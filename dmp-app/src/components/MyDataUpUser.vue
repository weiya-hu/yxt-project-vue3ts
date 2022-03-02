<template>
  <div class="upload-users"> 
    <el-dialog v-model="modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">上传客户</div>
      </template>
      <div>
        <el-form :model="formValue" v-loading="loading" ref="formRef" :rules="upUserRule">
          <el-form-item
            label="人群名称"
            required
            prop="personsName"
          >
            <el-input 
              placeholder="请输入人群名称"
              v-model="formValue.personsName"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="人群描述"
            required
            prop="personsDesc"
          >
            <el-input 
              type="textarea" 
              maxlength="150"
              show-word-limit
              class="input-textarea"
              placeholder="请对人群进行简单的描述"
              v-model="formValue.personsDesc"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="文件上传"
            prop="updateFile"
            required
          >
            <MyUpload 
              v-model="formValue.updateFile" 
              downLink="jkljl"
              @change="upChange" 
              @error="upError" 
              @success="upSuccess" 
              :exnameList="['doc', 'docx', 'pdf']"
              ref="upload"
            />
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
import { reactive,ref} from 'vue'
import  MyUpload from '@/components/MyUpload.vue'
import { errMsg} from '@/utils/index'
//父组件传的值
const props = withDefaults(defineProps<{
  modelValue:boolean,
}>(),{})

//变量
const fileVali=(rule:any,value:any,callback:any)=>{
  switch (fileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break;
    case 'type':
      callback(new Error('请添加 .doc、.docx、.pdf 格式的文件'))
      break;
    case 'none':
      callback(new Error('请添加文件'))
      break;
    default:
      callback()
      break;
  }
}
const upUserRule= reactive({
  personsName:[{
    required: true,
    message: '请输入人群名称',
    trigger: 'blur',
  }],
  personsDesc:[{
    required: true,
    message: '请输入人群描述',
    trigger: 'blur',
  }],
  updateFile:[{
    required: true,
    message: '请添加文件',
    trigger: 'blur',
  },{
    validator:fileVali,
    trigger:'change'
  }]
})

let fileErrorType = ref('none')//上传文件错误类型
const formRef = ref()
const upload = ref()//上传组件ref
let formValue=ref({
  personsName:'',
  personsDesc:'',
  updateFile:''
})
let loading = ref(false)
 

//方法
const emit = defineEmits(['update:modelValue'])
const close=()=>{
  emit('update:modelValue',false)
  console.log(props.modelValue)
}
const sure=()=>{
  formRef.value.validate((valid:any) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      loading.value = true
      upload.value.submit()
    } else {
      console.log('error submit!');
      return false
    }
  })
}
const upChange = (errorType:string)=>{
  //上传组件状态改变时 添加时效验文件格式大小
  if(errorType){
    fileErrorType.value = errorType
    formValue.value.updateFile = ''
    formRef.value!.validateField('file', () => null)
  }else{
    fileErrorType.value = ''
    formRef.value!.clearValidate('updateFile')
  }
}
const upError = (err:any)=>{
  //上传失败时
  console.log('uperr',err);
  formValue.value.updateFile = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  loading.value = false
  errMsg('上传失败')
}
const upSuccess = (path:string)=>{
  console.log(path)
  loading.value = false
  //上传成功再提交表单
  // addDemand_api({
  //   "attachment": path,//附件地址
  //   "province": Number(addForm.value.addr[0])||'',//省（区域码）
  //   "city": Number(addForm.value.addr[1])||'',//市（区域码）
  //   "district": Number(addForm.value.addr[2])||'',//区（区域码）
  //   "group_desc": addForm.value.desc,//人群描述
  //   "group_name": addForm.value.people,//人群名称
  //   "industry_id": addForm.value.type.join(','),//行业ID
  // }).then((res1:res)=>{
  //   if(res1.status == 1){
  //     closeAdd()
  //     getDemandList()
  //   }else{
  //     formValue.value.updateFile = ''
  //     fileErrorType.value = 'none'
  //     upload.value.clear()
  //     loading.value = false
  //   }
  // }).catch(()=>{
  //   upError('')
  // })
}

</script>

<style scoped lang="scss">
.upload-users{
  .upbox{
    .up_lt{
      width: 100px;
      height: 100px;
      border:1px dashed $colorddd;
      flex-shrink: 0;
      position: relative;
      .file_name{
        font-size: 12px;
        line-height: 12px;
      }
      .el-icon{
        font-size: 28px;
        color: $colorddd;
      }
    }
    
    .up_rt{
      padding-left: 12px;
      div{
        font-size: 12px;
      }
      color: $color999;
      line-height: 20px;
      text-align: left;
      .up_tip{
        margin-top: 8px;
      }
    }
  }
  .tips{
    margin-left: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction:column;
    >div{
      font-size: 12px;
      color: $color999;
      line-height: 12px;
    }
    .tips-download{
      color: $dfcolor;
      margin-top:12px;
      cursor: pointer;
    }
  }
}  

</style>