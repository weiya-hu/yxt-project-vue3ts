<template>
  <div class="media_upload flex" :class="max==1?'one_up':''">
    <el-upload
      drag
      action="#"
      :auto-upload="false"
      :limit="max"
      :multiple="max>1"
      list-type="picture-card"
      :on-exceed="handleExceed"
      :on-change="upChange"
      :on-preview="lookimgs"
      :on-remove="upRemove"
      :accept="exnameList.join(',')"
      ref="upload"
      class="upbox"
      :file-list="imgList.map(v => ({ name:'', url:v }))"
    >
      <div class="fc fcc">
        <el-icon><Plus /></el-icon>
        <div class="file_name">拖拽/点击上传</div>
      </div>
    </el-upload>
    <div class="tips" v-html="msg"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * 图片上传组件
 * @author chn 
*/
import { ref, onMounted, nextTick } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import { getAliToken_api } from '@/api/login'
import { errMsg } from '@/utils/index'
import axios from 'axios'

const props = withDefaults(defineProps<{
  exnameList?:string[],//支持的文件格式数组
  max?:number,//最大上传数
  msg?:string,//描述文字
  maxSize?:number,//最大尺寸 单位M
  imgList?:string[],// 默认上传文件
  needDownload?:boolean // 图片是否需要下载
}>(),{
  exnameList:() => ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG'],
  max:1,
  maxSize:2,
  imgList:() => [],
  needDownload:false,
})

onMounted(() => {
  nextTick(() => {
    if(props.imgList.length && props.max == 1){
      const el = document.querySelector('.el-upload--picture-card') as HTMLElement
      el.style.display = 'none'
    }
  })
})

//upOneSuccess：上传单个图片成功后，返回文件地址和添加图片的个数；error：上传发生错误，返回错误；look：点击预览图片，返回图片blob地址数组和点击的图片下标；change：图片改变时，返回图片名；del：删除图片时触发
const emit = defineEmits(['upOneSuccess','error','look','change','del'])

const imgs = ref<UploadFile[]>([])
const upload = ref()//上传组件ref

const upChange = (file: UploadFile, fileList: UploadFile[])=>{
  if(!file.name) return; // 当前版本elment2.1.7会触发两次on-change
  const exname = file.name.substring(file.name.lastIndexOf("."))
  if(props.exnameList.indexOf(exname) == -1){
    upload.value.handleRemove(file)
    errMsg('图片格式错误！')
    return
  }
  if(file.size && (file.size / 1024 / 1024) > props.maxSize){
    upload.value.handleRemove(file)
    errMsg(`图片文件大小不能超过${props.maxSize}M`)
    return
  }
  imgs.value = fileList
  const el = document.querySelector('.el-upload--picture-card') as HTMLElement
  if(imgs.value.length>=props.max){
    el.style.display = 'none'
  }

  const fxname = file.name.substring(0, file.name.indexOf("."))
  emit('change',fxname)
}
const upRemove = (file: UploadFile, fileList: UploadFile[])=>{
  emit('del')
  imgs.value = fileList;
  (document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
}
const lookimgs = (file: UploadFile)=>{
  let arr:string[] = []
  imgs.value.forEach(v=>{
    arr.push(v.url!)
  })
  emit('look',arr,arr.findIndex(v=>v==file.url))
}

const filePath: string[] = []
const upOneImg = async (file:UploadFile, downloadName?:string)=>{
  //上传单张图片
  const res:res = await getAliToken_api({site:'official_img'})
  if(res.status == 1){
    const exname=file.name.substring(file.name.lastIndexOf("."))
    const fd = new FormData();
    const upData: { [propName: string]: string } = {
      key: res.body.dir + '/' + res.body.uuid + exname,
      OSSAccessKeyId: res.body.accessid,
      success_action_status: '200',
      policy: res.body.policy,
      signature: res.body.signature,
    };
    if(props.needDownload){
      const download_name = downloadName ? (downloadName + exname) : file.name
      upData['Content-Disposition'] = 'attachment; filename=' + encodeURIComponent(download_name) //改变下载文件名
    }
    for (const [key, value] of Object.entries(upData)) {
      fd.append(key, value);
    }
    fd.append("file", file.raw as Blob);
    const response = await axios({
      url: res.body.host,
      method: 'post',
      headers: {
        "Content-Type": "multipart/form-data;",
      },
      data: fd,
    })
    if(response.status == 200){
      const url = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
      filePath.push(url);
      //父组件内部去判断是否全部上传完成，因为上传成功后再走提交接口是个异步操作
      emit('upOneSuccess',url,imgs.value.length)
      return Promise.resolve(url)
    }else{
      return Promise.reject(file.name+'上传失败')
    }
  }else{
    return Promise.reject('获取上传配置失败')
  }
}
const submit = async (downloadName?:string)=>{
  // 一般一张图片才会改名，如果是多张，下载名就用文件名，不用传downloadName
  try {
    for (let i = 0; i < imgs.value.length; i++) {
      const v = imgs.value[i];
      const url = await upOneImg(v, downloadName).catch(err=>{
        throw new Error(err)
      })
    }
  } catch (error:any) {
    emit('error',error)
  }
}
const clear = ()=>{
  //直接调用clearFiles清空方法会导致再次添加直接走on-exceed，或许什么地方有bug，暂时在父组件用v-if解决
  // imgs.value.forEach(v=>{
  //   upload.value.handleRemove(v)
  // });
  // upload.value.clearFiles();
  // (document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
}
const handleExceed = (files:UploadFile[])=>{
  if(props.max > 1){
    
  }else{
    upload.value.clearFiles()
    upload.value.handleStart(files[0])
  }
}

defineExpose({
  submit, // 上传
  clear, // 清除
  imgs, // 图片数组 File
})

</script>

<style scoped lang="scss">
.media_upload{
  :deep(.el-upload-dragger){
    width: 100%;
    height: 100%;
    border: none;
    background-color: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:0;
  }
  .upbox{
    height: 100%;
    :deep(.is-disabled){
      .el-upload--picture-card{
        cursor: not-allowed!important;
      }
    }
    :deep(.el-upload-list--picture-card){
      --el-upload-list-picture-card-size:100px;
      .el-upload-list__item{
        border-radius: 3px;
        margin: 0 20px 20px 0;
        &:nth-child(3n){
          margin: 0;
        }
      }
    }
    :deep(.el-upload--picture-card){
      background-color: #fff;
      width: 100px;
      height: 100px;
      border:1px dashed $colorddd;
      border-radius: 3px;
      // margin: 0 20px 20px 0;
      &:hover{
        border-color: $dfcolor;
        color: $dfcolor;
        .el-icon{
          color: $dfcolor;
        }
      }
    }
    :deep(.el-upload-list__item-status-label){
      display: none;
    }
    .file_name{
      font-size: 12px;
      line-height: 12px;
      margin-top: 12px;
    }
    .el-icon{
      font-size: 28px;
      color: $colorddd;
    }
  }
  .tips{
    color:$color999;
    font-size: 12px;
    line-height: 20px;
    height: 100px;
    display: flex;
    align-items: flex-end;
  }
}
.one_up{
  .tips{
    padding-left: 12px;
  }
  .upbox{
    display: flex;
  }
  :deep(.el-upload-list__item){
    margin: 0!important;
  }
}
</style>