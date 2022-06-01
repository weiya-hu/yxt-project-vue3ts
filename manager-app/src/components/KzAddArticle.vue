<template>
  <el-form ref="aFormRef" :model="aForm" :rules="aRules" size="large" @submit.prevent class="add_article_form" v-loading="upLoading">
    <el-card class="mycard mt16" v-if="needimg">
      <div class="form_title">上传封面</div>
      <el-form-item prop="thumb_url" style="margin-bottom:4px">
        <div class="img_upbox flex">
          <el-upload
            drag
            :action="hostUrl"
            :auto-upload="false"
            :limit="1"
            :multiple="false"
            :show-file-list="false"
            :data="upData"
            list-type="picture"
            :on-change="upChange"
            :on-exceed="handleExceed"
            :on-success="upSuccess"
            :on-error="upError"
            accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG"
            ref="upload"
            class="flex"
          >
            <div class="upbox fcc">
              <img :src="titleImg||aForm.thumb_url" class="title_img" alt="" v-if="titleImg||aForm.thumb_url">
              <div class="fc fcc title_text"  v-else>
                <img :src="img_add_i" alt="">
                <div class="fcc">将文件拖到此处，或<span>点击上传</span></div>
              </div>
            </div>
          </el-upload>
          <div class="img_tip flex">仅支持 JPG、PNG 、JPEG等图片格式，大小不超过2M</div>
        </div>
      </el-form-item>
    </el-card>
    <el-card class="mycard mt16">
      <div class="form_title">标题</div>
      <el-form-item prop="title" style="margin-bottom:4px">
        <el-input v-model="aForm.title" placeholder="请输入文章标题（5 ~ 30个字）"></el-input>
      </el-form-item>
      <div class="form_title mt20" v-if="needdigest">摘要</div>
      <el-form-item prop="digest" v-if="needdigest" style="margin-bottom:4px">
        <el-input v-model="aForm.digest" placeholder="请输入摘要"></el-input>
      </el-form-item>
      <div class="form_title mt20" v-if="needtype">分类</div>
      <el-form-item prop="article_type" v-if="needtype" style="margin-bottom:4px">
        <el-select v-model="aForm.article_type" placeholder="请选择文章分类">
          <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </el-form-item>
      <div class="form_title mt20" v-if="needsource">来源</div>
      <div class="fcs" style="margin-bottom:4px" v-if="needsource">
        <el-radio v-model="aForm.source" :label="0">原创</el-radio>
        <el-radio v-model="aForm.source" :label="1">非原创</el-radio>
        <el-form-item prop="creator" style="margin-bottom:0px" v-if="needsource == 1">
          <el-input v-model="aForm.creator" placeholder="请输入来源" style="width:220px" v-if="aForm.source == 1"></el-input>
        </el-form-item>
        <el-input v-model="aForm.source_url" placeholder="请输入原文链接（选填）" class="ml20 f1" v-if="aForm.source == 1 && needsource == 1"></el-input>
      </div>
    </el-card>
    <el-card class="mycard mt16">
      <div class="form_title">正文内容</div>
      <el-form-item prop="text" style="margin-bottom:4px">
        <Edit v-model="aForm.text" ref="editRef"/>
      </el-form-item>
    </el-card>
  </el-form>
</template>

<script setup lang="ts">
/**
 * 添加文章组件
 * @author chn 
*/
import { ref } from 'vue'
import Edit from "@/components/Edit.vue";
import type { UploadFile, UploadProgressEvent } from 'element-plus'
import { getAliToken_api } from '@/api/login'
import { errMsg } from '@/utils'
import img_add_i from '@/assets/images/img-add.png'

const props = withDefaults(defineProps<{
  needimg?:boolean // 是否显示封面图片上传
  needdigest?:boolean // 是否显示摘要
  needtype?:boolean // 是否显示分类
  needsource?:0|1|2 // 是否显示来源 0：不显示来源，1：显示来源并且显示来源输入框，2：显示来源不显示来源输入框
  types?:{ value:number|string, label:string }[] // 分类列表
}>(),{
  needimg:false,
  needdigest:false,
  needtype:false,
  needsource:0,
  types:() => ([
    {
      value: 1,
      label: '分类一',
    },
    {
      value: 2,
      label: '分类二',
    },
    {
      value: 3,
      label: '分类三',
    },
    {
      value: 4,
      label: '分类四',
    },
    {
      value: 5,
      label: '分类五',
    },
  ])
})

// success 上传成功后触发，返回表单内容
const emit = defineEmits(['success'])

const aForm = ref<IArticleForm>({
  thumb_url:'', // 封面图片
  title:'', // 标题
  article_type:'', // 文章分类
  text:'',  // 内容
  source: 0, // 0：原创 1：非原创
  creator:'', // 来源名称（原创不传）
  source_url:'', // 原文链接（原创不传）
})
const aFormRef = ref()
const imgErrorType = ref('none')//封面图片错误类型
const filePass = (rule:any, value:any, callback:Function) => {
  if(!props.needimg){
    callback()
    return
  }
  switch (imgErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过2M的图片'))
      break;
    case 'type':
      callback(new Error('请添加 .JPG、.PNG 、.JPEG 格式的图片'))
      break;
    case 'none':
      callback(new Error('请添加文章封面图片'))
      break;
    default:
      callback()
      break;
  }
}
const creatorPass = (rule:any, value:any, callback:Function) => {
  if(aForm.value.source && props.needsource == 1 && !value){
    callback(new Error('请输入来源'))
    return
  }
  callback()
}
const aRules = {
  thumb_url:[
    { validator: filePass, trigger: 'change'  }
  ],
  title:[
    { required: true, message: '请输入文章标题（5 ~ 30个字）', trigger: 'blur' },
    { min: 5, max: 30, message: '长度需要在 5 ~ 30 字之间', trigger: 'blur' }
  ],
  article_type:[
    { required: props.needtype, message: '请选择文章分类', trigger: 'change' }
  ],
  text:[
    { required: true, message: '请输入文章内容', trigger: 'blur' }
  ],
  creator:[
    { validator: creatorPass, trigger: 'blur'  }
  ],
}

const upload = ref()//上传组件ref
const titleImg = ref<string>()//封面图片blob路径
const imgType = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const timg_exname = ref('')//封面图片后缀名
const upChange = (file: UploadFile, list: UploadFile[])=>{
  //封面图片改变时
  if(!file.name) return;
  timg_exname.value = file.name.substring(file.name.lastIndexOf("."))
  if(imgType.indexOf(timg_exname.value)< 0 ){
    imgErrorType.value = 'type'
    aFormRef.value!.validateField('thumb_url', () => null)
  }else if(file.size && (file.size / 1024 / 1024)>2){
    imgErrorType.value = 'size'
    aFormRef.value!.validateField('thumb_url', () => null)
  }else{
    imgErrorType.value = '';
    file.status == 'ready' && (titleImg.value = file.url);
    aFormRef.value!.clearValidate('thumb_url')
  }
}
const handleExceed = (files:UploadFile[])=>{
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}

const upSuccess = async (res: UploadProgressEvent, file: UploadFile)=>{
  //封面图片上传成功
  titleImg.value = ''
  submitAddForm()
}
const upError = (err:any, file:UploadFile, fileList:UploadFile[])=>{
  titleImg.value = ''
  aForm.value.thumb_url = ''
  upload.value.clearFiles()
  upLoading.value = false
  errMsg('封面图片上传失败')
}

const submitAddForm = async ()=>{
  //提交表单
  upLoading.value = false
  emit('success',aForm.value)
}
const hostUrl = ref('')//封面图片上传路径
const upData = ref({})//封面图片上传参数
const editRef = ref() // 富文本组件ref

const upLoading = ref(false)
const submit = async ()=>{
  //点击提交
  upLoading.value = true
  aFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      await editRef.value.upImages()
      editRef.value.clearImgs()
      if(!titleImg.value || !props.needimg){
        submitAddForm()
        return
      }
      getAliToken_api({site:'official_img'}).then((res:res)=>{
        if(res.status == 1){
          hostUrl.value = res.body.host
          upData.value = {
            key:res.body.dir + '/' + res.body.uuid + timg_exname.value,
            OSSAccessKeyId: res.body.accessid,
            success_action_status: 200,
            policy:res.body.policy,
            signature:res.body.signature,
          }
          aForm.value.thumb_url = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + timg_exname.value
          upload.value!.submit()
        }else{
          upLoading.value = false
          errMsg('上传参数获取失败')
        }
      })
    } else {
      upLoading.value = false
      return false
    }
  })
}

const setForm = (val:IArticleForm) => {
  aForm.value = val
  if(aForm.value.thumb_url){
    imgErrorType.value = ''
  }
}

const validate = () => {
  return new Promise<boolean>((resolve, reject) => {
    aFormRef.value.validate((valid: boolean) => {
      resolve(valid)
    })
  })
}

defineExpose({
  submit, // 上传 返回表单内容或者err
  setForm, // 设置表单内容
  validate // 验证表单
})

</script>

<style scoped lang="scss">
.add_article_form{
  .form_title{
    font-size: 16px;
    color: $color333;
    margin-bottom: 20px;
    padding-top: 10px;
    font-weight: 600;
  }
  :deep(.el-upload-dragger){
    width: 230px;
    height: 128px;
  }
  .upbox{
    width: 230px;
    height: 128px;
    border-radius: 4px;
    .title_text{
      font-size: 12px;
      color: $color999;
      line-height: 1.1;
      span{
        color: $dfcolor;
      }
      img{
        margin-bottom: 5px;
        width: 50px;
        height: 50px;
      }
    }
    .title_img{
      width: 100%;
      height: 100%;
    }
    &:hover{
      border-color: $dfcolor;
    }
  }
  .is-error{
    :deep(.el-upload-dragger){
      border-color: var(--el-color-danger);
    }
  }
  .img_tip{
    font-size: 12px;
    line-height: 1.1;
    color: $color999;
    align-items: flex-end;
    margin-left: 16px;
  }
}
</style>