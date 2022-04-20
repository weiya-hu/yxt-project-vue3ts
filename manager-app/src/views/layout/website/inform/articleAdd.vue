<template>
  <div class="article_Add">
    <div class="fcs">
        <DetailsHeader/>
        <div class="btns">
           <el-button type="primary" class="edit">稍后编辑</el-button>
          <el-button type="primary" @click="">发布</el-button>
        </div>
    </div>
    <div class="content">
      <el-form label-position="top" ref="aFromRef"  :model="aForm" :rules="aRules" size="large" @submit.prevent>
        <el-card class="mycard"  header="上传封面">
          <el-form-item label="" prop="thumb_url">
            <div class="upload fcs">
              <el-upload
                :action="hostUrl"
                :auto-upload="false"
                :limit="1"
                :multiple="false"
                :drag="true"
                :show-file-list="false"
                :data="upData"
                list-type="picture"
                accept=".jpg,.png,.jpeg,.JPG,.PNG,.JPEG"
                ref="upload"
                class="flex"
              >
                <div class="upbox fcc">
                  <img :src="titleImg||aForm.thumb_url" class="title_img" alt="" v-if="titleImg||aForm.thumb_url">
                  <img :src="imgAdd" alt="" v-else>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                </div>
              </el-upload>
              <div class="img_tip flex">仅支持 JPG、PNG 、JPEG等图片格式，大小不超过2M</div>
            </div>
          </el-form-item>
        </el-card>
        <el-card class="mycard" header="标题">
          <el-form-item label="" prop="title">
            <el-input v-model="aForm.title" placeholder="请输入文章标题（5~30个字）" minlength="5" maxlength="30" />
          </el-form-item>
        </el-card>
         <el-card class="mycard" header="分类">
          <el-form-item label="" prop="itemize">
            <el-select v-model="aForm.itemize" placeholder="请选择">
              <el-option
                v-for="item in typeDate"
                :key="item.id"
                :label="item.name"
                :value="item.id"
                />
              </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="">
            <el-row :gutter="20">
              <el-radio-group v-model="aForm.stype">
                <el-radio :label="1">原创</el-radio>
                <el-radio :label="2">非原创</el-radio>
                </el-radio-group>
              <el-input v-model="aForm.source" class="source" placeholder="请输入来源" />
              <el-input v-model="aForm.surl" class="s-url" placeholder="请输入原文链接（选填）" />
            </el-row>
          </el-form-item>
        </el-card>
       <el-card class="mycard" header="正文内容">
          <el-form-item label="" prop="content">
            <Edit v-model="aForm.content" ref="editRef"/>
          </el-form-item>
       </el-card>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import Edit from "@/components/Edit.vue";
import imgAdd from '@/assets/images/img-add.png'
import {typeList_api,dynamicDetail_api,noticeDetail_api} from '@/api/website';

import { mainStore } from '@/store/index'
const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id //有id就是编辑
if(id){
  dynamicDetail_api({id:id as string}).then((res:res)=>{
    aForm.value = res.body
    if(res.body.thumb_url){
      // titleImg.value = res.body.thumb_url
      imgErrorType.value = ''
    }
  })
}

interface AForm {
  thumb_url:string,
  title:string,
  itemize:string,
  content:string,
  source:string,
  stype:string,
  surl:string,
  status:number,
  
}
const aForm = ref<AForm>({
  thumb_url:'',
  title:'',
  itemize:'',
  source:'',
  stype:'',
  surl:'',
  content:'',
  status:1,// 1:草稿(保存),2:待审核(提交)
})
const aFormRef = ref()
const imgErrorType = ref('none')//封面图片错误类型
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
  stype:[
    {required: true, message: '请选择来源', trigger: 'change'}
  ],
  // source:[
  //   { required: true, message: '请输入来源', trigger: 'blur' }
  // ],
  content:[
    { required: true, message: '请输入文章内容', trigger: 'blur' }
  ],
}
const upLoading = ref(false)
const upload = ref()//上传组件ref
const titleImg = ref<string>()//封面图片blob路径
const imgType = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const timg_exname = ref('')//封面图片后缀名



const hostUrl = ref('')//封面图片上传路径
const upData = ref({})//封面图片上传参数
const editRef = ref() // 富文本组件ref

// 分类
const typeDate = ref<any>({})
const typeList = async ()=>{
  const res =await typeList_api()
  if(res.status==1){
    typeDate.value = res.body
    console.log(res);
  }
}
typeList()

</script>

<style scoped lang="scss">
.fcs{
  margin-bottom: 20px;
  .btns{
    display: flex;
    justify-content: flex-end;
    flex: 1;
    .edit{
      background: none;
      color: $dfcolor;
    }
  }
}
.mycard{
  margin-bottom: 10px;
  :deep(.el-form-item__label){
    font-size: 18px;
    font-weight: 600;
  }
  :deep(.el-upload-dragger){
    width: 250px;
    height: 140px;
  }
  .upbox{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 140px;
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
  .img_tip{
    height: 140px;
    font-size: 12px;
    color: $color999;
    align-items: flex-end;
    margin-left: 20px;
  }
  .source{
    margin-left: 10px;
    width:220px;
  }
  .s-url{
    margin-left: 10px;
    width:500px;
  }
}
</style>