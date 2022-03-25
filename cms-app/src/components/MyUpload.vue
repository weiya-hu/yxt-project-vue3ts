<template>
  <el-upload 
    :action="hostUrl"
    :auto-upload="false"
    :limit="1"
    :multiple="false"
    :show-file-list="false"
    :data="upData"
    :on-exceed="handleExceed"
    :on-change="upChange"
    :on-success="upSuccess"
    :on-error="upError"
    ref="upload"
    :accept="exnameList.join(',')"
    class="my_upload"
  >
    <template #default>
      <div class="upbox">
        <div class="upvideo up_lt" v-if="type=='video' && modelValue">
          <video :src="videoBlobUrl" controls></video>
        </div>
        <div class="fcc up_lt" :class="modelValue?'hasfile':''" v-else>
          <div class="fcc fc">
            <el-icon>
              <document v-if="modelValue"/>
              <plus v-else/>
            </el-icon>
            <div class="file_name">{{modelValue||'点击上传'}}</div>
          </div>
        </div>
      </div>
    </template>
    <template #tip>
      <div class="upbox">
        <div class="up_rt">
          <div v-html="msg||'可适当描述所处的行业现状，以及公司目前采取的运营、渠道、推广等多种获客方式，以便运营人员进一步了解熟悉您的所处的行业及需求，同时也为您提供更好的客户服务。'"></div>
          <div class="up_tip dfcolor fcs" v-if="downLink"><el-link type="primary" :href="downLink" @click="handlink" download="模板.xlsx">下载模板示例</el-link>（上传附件大小不超过{{maxSize}}M）</div>
          <div class="up_tip dfcolor" v-if="!downLink && type != 'video'">附件支持 {{exnameList.join(' ')}}，大小不超过{{maxSize}}M</div>
        </div>
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
//上传组件
import { ref } from 'vue'
import { Plus ,Document } from '@element-plus/icons-vue'
import type { UploadFile, UploadProgressEvent} from 'element-plus'
import { getAliToken_api } from '@/api/login'
import { errMsg } from '@/utils'

const props = withDefaults(defineProps<{
  modelValue:string,//文件名
  exnameList?:string[],//支持的文件格式数组
  downLink?:string,//下载模板链接
  msg?:string,//描述文字
  type?:string,//类型 video||''
  maxSize?:number,//最大尺寸 单位M
}>(),{
  modelValue:'',
  exnameList:()=>['.zip', '.rar', '.7z'],
  maxSize:4
})

//change 文件改变时，返回错误类型； error 上传错误时，返回错误；success 上传成功后，返回文件地址
const emit = defineEmits(['update:modelValue','change','error','success'])

const upload = ref()//上传组件ref
const upData:any = ref({})//上传参数
const hostUrl = ref('')//上传地址
const file_exname = ref('')//后缀名
const filePath = ref('')//上传成功后的文件地址
const videoBlobUrl = ref('')
const handleExceed = (files:any) => {
  //覆盖前一个文件
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const nowFile = ref<UploadFile>()
const upChange = (file: UploadFile, list: UploadFile[])=>{
  //上传组件状态改变时 添加时效验文件格式大小
  nowFile.value = file
  const tmpcnt = file.name.lastIndexOf(".")
  const exname = file.name.substring(tmpcnt)
  // const names = ['.doc', '.docx', '.pdf']
  const names = props.exnameList
  if(names.indexOf(exname)< 0 ){
    emit('change','type')
  }else if(file.size && (file.size / 1024 / 1024) > props.maxSize){
    emit('change','size')
  }else{
    emit('change','')
    emit('update:modelValue',file.name)
    file_exname.value = exname
    if(props.type == 'video'){
      videoBlobUrl.value = URL.createObjectURL(file.raw as Blob)
    }
  }
}

const submit = ()=>{
  getAliToken_api({site:props.type=='video'?'cms_video':'cms_attach'}).then((res:res)=>{
    return new Promise<string>((resolve, reject) => {
      if(res.status == 1){
        hostUrl.value = res.body.host
        upData.value = {
          key:res.body.dir + res.body.uuid + file_exname.value,
          OSSAccessKeyId: res.body.accessid,
          success_action_status: 200,
          policy:res.body.policy,
          signature:res.body.signature,
          'Content-Disposition': 'attachment; filename=' + encodeURIComponent(props.modelValue) //改变下载文件名
        }
        resolve(res.body.host + '/' + res.body.dir + res.body.uuid + file_exname.value)
      }else{
        reject(res.message)
      }
    })
  }).then((path)=>{
    filePath.value = path
    upload.value!.submit()
  }).catch((error)=>{
    emit('error',error)
  })
}

const upSuccess = (res: UploadProgressEvent, file: UploadFile)=>{
  //上传成功再提交表单 //阿里oss上传成功返回res为空，失败err为xml
  emit('success',filePath.value)
}

const upError = (err:any, file:any, fileList:any)=>{
  //上传失败时
  clear()
  emit('error',err)
}

const clear = ()=>{
  //清除文件
  upload.value.clearFiles()
  emit('update:modelValue','')
  videoBlobUrl.value = ''
}

const handlink = ()=>{
  console.log(props.downLink);
}

const doAbort = ()=>{
  upload.value.abort(nowFile.value)
  errMsg('取消上传')
}

defineExpose({
  submit, // 上传
  clear, // 清除
  doAbort // 取消上传
})
</script>

<style scoped lang="scss">
.my_upload{
  display: flex;
  .upbox{
    .upvideo{
      video{
        width: 100%;
        height: 100%;
      }
    }
    .up_lt{
      width: 100px;
      height: 100px;
      border:1px dashed $colorddd;
      flex-shrink: 0;
      position: relative;
      border-radius: 3px;
      // margin-bottom: 20px;
      box-sizing: border-box;
      .file_name{
        font-size: 12px;
        line-height: 12px;
        margin-top: 12px;
      }
      .el-icon{
        font-size: 28px;
        color: $colorddd;
      }
      &:hover{
        .file_name{
          color: $dfcolor;
        }
      }
    }
    .hasfile{
      &:hover{
        &::after{
          opacity: 0.6;
        }
      }
      &::after{
        content: '重新选择';
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: rgba(0, 0, 0, 1);
        transition: opacity 0.5s;
        color: #fff;
      }
    }
    .up_rt{
      // padding-left: 20px;
      padding-left: 12px;
      height: 100px;
      display: flex;
      align-items: flex-end;
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
  :deep(.el-link--inner){
    font-size: 12px;
  }
}
.is-error{
  .upbox{
    .up_lt{
      border-color: var(--el-color-danger);
    }
  }
}
</style>