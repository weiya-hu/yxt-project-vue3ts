<template>
  <div class="up-user"> 
    <el-dialog v-model="modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">上传客户</div>
      </template>
      <div>
        <el-form :model="formValue" v-loading="loading" ref="formRef" :rules="upUserRule">
          <el-form-item
            required
            prop="money"
            label="消耗金额"
          >
            <el-input 
              placeholder="请输入"
              v-model="formValue.money"
              clearable
            ></el-input>
            元
          </el-form-item> 
          <el-form-item
            label="上传方式"
            required
          >
            <el-radio-group v-model="formValue.type">
              <el-radio :label="1">覆盖原客户</el-radio> />
              <el-radio :label="2">新增客户</el-radio>/>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="显示数据"
            required
          >
            <el-radio-group v-model="formValue.showData">
              <el-radio :label="1">全部</el-radio> />
              <el-radio :label="2">自定义</el-radio>/>
            </el-radio-group>
          </el-form-item>
          <div v-if="formValue.showData===2" class="flexl">
            每隔
            <el-form-item
            >
              <el-input 
                v-model="formValue.day"
              ></el-input>
            </el-form-item>
            日显示数据，直到第
            <el-form-item
            >
              <el-input 
                v-model="formValue.num"
              ></el-input>
            </el-form-item>
            批次显示结束
          </div>
          <el-form-item
            required
            label="客户上传"
          >
            <MyUpload 
              v-model="formValue.url"
              :exnameList="['.xlsx']"
            >
            <template v-slot>
              <div class="upload-slot">
                <div>1、文件大小不超过4M</div>
                <div>2、上传数据格式为Excel</div>
                <el-link type="primary" :href="templateLink" download="模板.xlsx">下载模板示例</el-link>
              </div>
            </template>
            </MyUpload>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="sure" :disabled="!formValue.url">确认</el-button>
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
import { reactive,ref} from 'vue'
import {useRoute} from 'vue-router'
import MyUpload from '@/components/MyUpload.vue'

//父组件传的值 
const props = withDefaults(defineProps<{
  modelValue:boolean,
  type?:string,//两种类型，一种常规，一种表单里带有消耗金额，commom/money
}>(),{
  type:'commom'
})

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
  type:1,
  showData:1,
  money:'',
  day:'',
  num:'',
  url:''
})
const myUploadmsg= ref(
  "<div>dskfjdsklf </div>"
)
const templateLink= ref('hjghj')
const formRef = ref()
const loading = ref(false)
const refuseDisabled = ref(true)
const emit = defineEmits(['update:modelValue','success'])
const close=()=>{
  emit('update:modelValue',false)
  formRef.value.resetFields()
}
const sure=()=>{
  console.log(formValue.value)
  formRef.value.validate(async(valid:any) => {
    if (valid) {
      emit('success',formValue.value)
    } else {
      console.log('error submit!');
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.up-user{
  .upload-slot{
    margin-left: 12px;
    position: relative;
    top: 30px;
    >div{
      font-size: 12px;
      color: #999999;
      line-height: 20px;
    }
    :deep(.el-link__inner){
      font-size: 12px;
      color: #2D68EB;
      line-height: 12px;
      margin-top: 6px;
    }
  }
  :deep(.el-dialog){
    .el-dialog__header{
      height: 52px;
      .up-user-title{
        font-size: 16px;
        color: #333333;
        line-height: 16px;
        font-weight: bold;
      }
    }
    .el-dialog__body{
      padding: 20px 24px;
    }
  }
  :deep(.el-textarea__inner){
    resize: none;
    width: 452px;
    height: 170px;
    background: #F7F8FA;
    border-radius: 4px;
    padding: 12px 16px;
    color: #333333;
    font-size: 14px;
    border: none  ;
    box-shadow: none;
  }
  // :deep(.el-form-item){
  //   margin: 0;
  // }
  :deep(.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before){
    margin-right: 8px;
  }
  :deep(.el-form-item__label){
    padding-right: 20px;
  }
}
</style>