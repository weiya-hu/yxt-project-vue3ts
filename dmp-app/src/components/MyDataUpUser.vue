<template>
  <div class="upload-users"> 
    <el-dialog v-model="modelValue" :width="500" draggable @close="close">
      <template #title>
        <div class="up-user-title">上传客户</div>
      </template>
      <div>
        <el-form :model="formValue" v-loading="loading" ref="upForm" :rules="upUserRule">
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
            required
            prop="updateFile"
          >
            <el-upload 
              :action ="uploadUrl"
              :auto-upload ="false" 
              :data = "uploadData"
              :limit="1"
              :multiple="false"
              accept=".pdf,.docx,.doc"
              v-model ="formValue.updateFile"
              :on-change="uploadChange"
            >
              <template #default>
                <div class="upbox">
                  <div class="fcc up_lt" :class="formValue.updateFile?'hasfile':''">
                    <div>
                      <el-icon>
                        <document v-if="formValue.updateFile"/>
                        <plus v-else/>
                      </el-icon>
                      <div class="file_name">{{ formValue.updateFile ||'点击上传'}}</div>
                    </div>
                  </div>
                </div>
              </template>
              <template #tip>
                <div class="tips">
                  <div>文件支持.doc.docx.pdf，大小不超过2M</div>
                  <div class="tips-download">下载示例模板</div>
                </div>
              </template>
            </el-upload>

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
import { Plus ,Document } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{
  modelValue:boolean,
}>(),{})


let disabled=ref(false)
let formValue=ref({
  personsName:'',
  personsDesc:'',
  updateFile:''
})
let loading = ref(false)
let uploadUrl = ref('')
let uploadData = ref({})
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
    message: '请输入人群描述',
    trigger: 'change'
  }]
}) 




const emit = defineEmits(['update:modelValue'])
const close=()=>{
  emit('update:modelValue',false)
  console.log(props.modelValue)
}
const sure=()=>{
  
}
const uploadChange=()=>{
  
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