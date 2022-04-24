<template>
  <div class="article_add">
    <DetailsHeader/>
    <div class="addform">
        <div class="fjend btns">
          <el-button size="large" @click="$router.push('/cms/resource')">&ensp;返回&ensp;</el-button>
          <el-button size="large" @click="submit(1)">&ensp;保存&ensp;</el-button>
          <el-button size="large" type="primary" @click="submit(2)" :disabled="!aForm.content||!aForm.title">&ensp;发布&ensp;</el-button>
        </div>
      <div class="form_content" v-loading="upLoading">
         <div class="tip fcs">
            <img :src="tip_i" alt="">
            <span>请注意：根据国家相关法律法规要求，切勿发布任何色情、低俗、涉政等违法违规内容。一旦出现，我们将会根据法规进行审核处理。</span>
        </div>
        <el-form ref="aFormRef" :model="aForm" :rules="aRules" size="large" @submit.prevent :label-position="labelPosition">
            <el-card >
                <el-form-item label="上传封面" prop="thumb_url">
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
            <el-card class="mt20">
              <el-form-item label="摘要" prop="digest">
            <el-input v-model="aForm.digest" placeholder="请输入文章摘要（5~100个字）"></el-input>
          </el-form-item>
          </el-card>
          <el-card class="mt20">
              <el-form-item label="文章标题" prop="title">
            <el-input v-model="aForm.title" placeholder="请输入文章标题（5~30个字）"></el-input>
          </el-form-item>
          </el-card>
          
            <el-card class="mt20">
                <el-form-item label="文章内容" prop="content">
                    <Edit v-model="aForm.content" ref="editRef"/>
                </el-form-item>
            </el-card>
            <el-card class="mt20">
                <el-form-item label="内容设置">
                  <div >
                      <div class="otherURL">
                    <span>第三方URL链接：</span>
                    <el-input placeholder="请输入" v-model="aForm.url"></el-input>
                    <span>第三方URL秘钥：</span>
                    <el-input placeholder="请输入" v-model="aForm.url_key"></el-input>
                  </div>
                  <el-form-item>
                           <span>行业分类：</span>
                            <el-radio-group v-model="aForm.industry_id" >
                                <el-radio :label="item.id" v-for="(item) in industry" :key='item' >{{item.industry_name}}</el-radio>
                            </el-radio-group>
                  </el-form-item>
                    <span>下载设置：</span>
                      <el-radio-group v-model="aForm.down_type" @change="code">
                         <el-radio :label="1">免费下载</el-radio>
                          <el-radio :label="2">弹窗二维码</el-radio>
                      </el-radio-group>
                        <MediaUpload
                          :max="1"
                          v-if="codeShow"
                          @upOneSuccess="upCode"
                          @error="upError"
                          @change="changeCode"
                          @del="aForm.qr_code = ''"
                          :exnameList="exnameList"
                          ref="upload"
                          class="codeClass"
                        />
                  </div>
                </el-form-item>
            </el-card>
        </el-form>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import type { UploadFile, UploadProgressEvent} from 'element-plus'
import MediaUpload from "@/components/MediaUpload.vue";
import Edit from "@/components/Edit.vue";
import tip_i from '@/assets/images/tip.png'
import img_add_i from '@/assets/images/img-add.png'
import { errMsg } from '@/utils/index'
import { getAliToken_api } from '@/api/login'
import { articleLook_api,articleRelease_api,articleIndustry_api,articleSave_api} from '@/api/cms/resource'
import { mainStore } from '@/store/index'
const labelPosition = ref('top')
const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id //有id就是编辑
if(id){
  articleLook_api({id:id as string}).then((res:res)=>{
    console.log(res);    
    aForm.value = res.body
    if(res.body.thumb_url){
      // titleImg.value = res.body.thumb_url
      imgErrorType.value = ''
    }
    if (res.body.down_type==2) {
      codeShow.value=true
    }
  })
}

interface AForm {
  thumb_url:string,
  title:string,
  content:string,
  url:string,
  url_key:string,
  down_type:number,
  industry_id:string,
  digest:string,
  id:string,
  qr_code:string,
  status:number,
}
const codeShow=ref(true)//二维码显示
const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const aForm = ref<AForm>({
  id:'',
  thumb_url:'',
  title:'',
  content:'',
  url:'',
  url_key:'',
  digest:'',
  industry_id:'',
  down_type:0,//1免费下载2不免费下载
  qr_code:'',
  status:1,// 1:保存,2提交
})
//获取行业分类
const industry=ref()
const getIndustry=async()=>{
  const res =await articleIndustry_api()
  industry.value= res.body
  console.log(industry.value);
  
}
getIndustry()
// 二维码
const codeUrl = ref('')//二维码图片
const changeCode = (fileName:string) => {
  aForm.value.qr_code = fileName
}
const upCode = async (url:string) => {
  console.log(url,123);
  
  codeUrl.value=url
}
const aFormRef = ref()
const imgErrorType = ref('none')//封面图片错误类型
const code=()=>{
  if (aForm.value.down_type==2) {
    codeShow.value=true
  }else{
    codeShow.value=false
  }
}
const filePass = (rule:any, value:any, callback:Function)=>{
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
const aRules = {
  thumb_url:[
    { validator: filePass, trigger: 'change'  }
  ],
  title:[
    { required: true, message: '请输入文章标题（5~30个字）', trigger: 'blur' },
    { min: 5, max: 30, message: '长度需要在 5 ~ 30 字之间', trigger: 'blur' }
  ],
  digest:[
    { required: true, message: '请输入文章摘要（5~100个字）', trigger: 'blur' },
    { min: 5, max: 100, message: '长度需要在 5 ~ 100 字之间', trigger: 'blur' }
  ],
  content:[
    { required: true, message: '请输入文章内容', trigger: 'blur' }
  ],
}
const upLoading = ref(false)
const upload = ref()//上传组件ref
const titleImg = ref<string>()//封面图片blob路径
const codeImg = ref<string>()//封面图片blob路径
const imgType = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const timg_exname = ref('')//封面图片后缀名
const upChange = (file: UploadFile, list: UploadFile[])=>{
  //封面图片改变时
  timg_exname.value = file.name.substring(file.name.lastIndexOf("."))
  if(imgType.indexOf(timg_exname.value)< 0 ){
    imgErrorType.value = 'type'
    aFormRef.value!.validateField('thumb_url', () => null)
  }else if(file.size && (file.size / 1024 / 1024)>2){
    imgErrorType.value = 'size'
    aFormRef.value!.validateField('thumb_url', () => null)
  }else{
    imgErrorType.value = ''
    titleImg.value = file.url
    aFormRef.value!.clearValidate('thumb_url')
  }
}
const handleExceed = (files:UploadFile[])=>{
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}


const upSuccess = (res: UploadProgressEvent, file: UploadFile)=>{
  //封面图片上传成功
  titleImg.value = ''
  submitAddForm()
}

const upError = (err:any, file:UploadFile, fileList:UploadFile[])=>{
  titleImg.value = ''
  aForm.value.thumb_url = ''
  upload.value.clearFiles()
  errMsg('封面图片上传失败')
}

const editId=ref('')

const submitAddForm = async ()=>{
  //提交表单
    if(aForm.value.status == 1){
    const res=await articleSave_api({...aForm.value, id,qr_code:codeUrl.value})
     if(res.status == 1 ){
    store.setKeepList([])
    router.replace('/cms/resource')
  }
  }else{
    const res=await articleRelease_api({...aForm.value,id,qr_code:codeUrl.value})
    console.log(res);
     if(res.status == 1 ){
    store.setKeepList([])
    router.replace('/cms/resource')
  }
  }
  
  
  
  upLoading.value = false
 
}
const hostUrl = ref('')//封面图片上传路径
const upData = ref({})//封面图片上传参数
const editRef = ref() // 富文本组件ref
const submit = async (type:number)=>{
  aForm.value.status = type
  //点击保存
  aFormRef.value.validate(async (valid: any) => {
    if (valid) {
      console.log('submit!',codeImg.value)
      upLoading.value = true
      await editRef.value.upImages()
      editRef.value.clearImgs()
      if(!titleImg.value){
        submitAddForm()
        return
      }
      getAliToken_api({site:'official_img'}).then((res:res)=>{
        console.log(res);        
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
          console.log(aForm);
          
        }else{
          errMsg('上传参数获取失败')
        }
      })

    } else {
      console.log('error submit!');
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.article_add{
   
    .el-button{
        margin-left: 40px;
        // color: blue;
        // border-color: blue;
    }
  .el-breadcrumb{
    font-size: 12px;
  }
  .addform{
    // background-color: #fff;
    border-radius: 6px;
    .title{
      padding:21px 50px;
      font-size: 18px;
      font-weight: 600;
      color:$color333;
      border-bottom: 1px solid $coloreee;
      span{
        font-size: 12px;
        font-weight: 400;
        color: $color999;
        margin-left: 22px;
      }
    }
    .form_content{
      padding: 0px 0px 30px;
    }
    .tip{
      position: relative;
      left: 115px;
      top: 465px;
      background-color: #FFF8E5;
      color:$color666;
      border: 1px solid rgba(255,191,0,1);
      border-radius: 2px;
      font-size: 12px;
      height: 30px;
      width: 1056px;
      line-height: 14px;
      padding-left: 12px;
      .el-button{
        margin-left: 0;
      }
      img{
        width: 14px;
        height: 14px;
        margin-right: 8px;
      }
    }
    :deep(.el-form-item__label){
      font-size: 18px;
      font-weight: 600;
      color:$color333;
      padding-right: 30px;
      &::before{
        display: none;
      }
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
    .codebox{
      width: 100px;
      height: 100px;
      margin-left: 100px;
      border-radius: 4px;
      border: 1px dashed rgba(221,221,221,1);
      img{
        background-color: #DDDDDD;
        width: 50px;
        height: 50px;
      }
      .title_img{
        background-color: #fff;
        width: 100%;
        height: 100%;
      }
      &:hover{
        border-color: $dfcolor;
      }
    }
    .is-error{
      .upbox{
        border-color: $colorred;
      }
    }
    .img_tip{
      height: 140px;
      font-size: 12px;
      color: $color999;
      align-items: flex-end;
      margin-left: 20px;
    }
  }
  .otherURL{
    display: flex;
    span{
      width: 113px;
    }
    .el-input{
      z-index: 20;
      margin-right: 20px;
      height: 32px;
      width: 180px;
    }
  }
  .codeClass{
    margin-left: 100px;
  }
}
</style>