<template>
  <div class="m_images">
    
    <TopBtns @add="addShow = true"/>

    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID" width="230"/>
        <el-table-column property="thumb_url" label="图片" >
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg lookhover" @click="look(row.thumb_url)">
          </template>
        </el-table-column>
        <el-table-column property="source_name" label="图片名" width="250">
          <template #default="{row}">
            <div class="els">{{row.source_name}}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" width="200">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="180">
          <template #default="{row}">
            <div class="fcs">
              <div class="status_dot" :class="KZ_MY_STATUS[row.status].className"></div>
              <div>{{KZ_MY_STATUS[row.status].text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="240">
          <template #default="{row}">
            <div class="fcs" v-if="row.status == 4">
              <el-link type="primary" @click="showEdit(row.id, row.source_name)">修改名称</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true">拒绝原因</el-link>
            </div>
            <div class="fcs" v-else>
              <el-link type="primary" @click="showEdit(row.id, row.source_name)">修改名称</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="look(row.thumb_url)">查看</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'拒绝原因'" :btn="1"/>
    <el-dialog v-model="addShow" title="上传图片" width="380px" @close="close" custom-class="upimgs">
      <div v-loading="loading">
        <el-upload
          action="#"
          :auto-upload="false"
          :limit="9"
          :multiple="true"
          list-type="picture-card"
          :on-change="upChange"
          :on-preview="lookimgs"
          :on-remove="upRemove"
          :accept="imgTypes.join(',')"
          ref="upload"
          class="upbox"
        >
          <div class="fc fcc">
            <el-icon><Plus /></el-icon>
            <div class="file_name">点击上传</div>
          </div>
        </el-upload>
        <div class="tips">图片尺寸16:9，建议尺寸：220*160≤尺寸≤1920*890；支持JPG、PNG 、JPEG等格式；一次最多上传9张</div>
        <div class="fcs btns fjend">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="goSubmit" :disabled="!imgs.length">提交</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog v-model="editShow" title="修改名称" width="380px">
      <el-form>
        <el-form-item label="输入名称">
          <el-input v-model="editName" placeholder="请输入名称"/>
        </el-form-item>
      </el-form>
      <div class="flex fjend">
        <el-button type="primary" :disabled="!editName" @click="sureEdit">确定</el-button>
      </div>
    </el-dialog>
    <el-image-viewer @close="imgShow=false" v-if="imgShow" :url-list="showImgs" :initial-index="showImgIndex"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile, UploadUserFile } from 'element-plus'
import { getAliToken_api } from '@/api/login'
import axios from 'axios'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import TopBtns from "@/components/TopBtns.vue";
import { errMsg ,okMsg } from '@/utils/index'
import { imagesList_api, imagesAdd_api, imagesDel_api, imagesEdit_api } from '@/api/myWork'
import { KZ_MY_STATUS } from '@/utils/index'

interface SData {
  id: number|string,
  thumb_url:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const page = ref(1)
const total = ref(0)
const tableData = ref<SData[]>([])
const getList =async ()=>{
  const res = await imagesList_api({
    size: 10,
    current: page.value
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
const changePage =()=>{
  getList()
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = async ()=>{
  //确认删除
  const res = await imagesDel_api({id:delId.value})
  res.status == 1 && getList()
  delShow.value = false
}

const showImgs = ref<string[]>([])//预览图片列表
const imgShow = ref(false)//预览是否显示
const showImgIndex = ref(0)//首张预览图片
const look = (url:string)=>{
  // window.open(url)
  let arr:string[] = []
  tableData.value.forEach(v=>{
    arr.push(v.thumb_url)
  })
  showImgs.value  = arr
  showImgIndex.value = showImgs.value.findIndex(v=>v==url)
  imgShow.value = true
}

const errorShow = ref(false)
const errorMsg = ref('')

const addShow = ref(false)
const loading = ref(false)
const imgs = ref<UploadFile[]>([])
const upload = ref()//上传组件ref
let filePath: string[] = []//上传成功后的文件地址
const close = ()=>{
  upload.value.clearFiles()
  addShow.value = false
  loading.value = false
  imgs.value = []
  showImgs.value = []
  imgShow.value = false
  showImgIndex.value = 0
  filePath = []
}
const upOneImg = async (file:UploadFile)=>{
  //上传单张图片
  const res:res = await getAliToken_api({site:'cms_image'})
  if(res.status == 1){
    const exname=file.name.substring(file.name.lastIndexOf(".")) // 后缀名
    const fxname = file.name.substring(0, file.name.indexOf(".")) // 图片名
    const fd = new FormData();
    const upData = {
      key: res.body.dir + '/' + res.body.uuid + exname,
      OSSAccessKeyId: res.body.accessid,
      success_action_status: 200,
      policy: res.body.policy,
      signature: res.body.signature,
    };
    for (const [key, value] of Object.entries(upData)) {
      fd.append(key, value as string);
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
      const oneUrl = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
      filePath.push(oneUrl)
      const oneRes:res = await imagesAdd_api({ thumb_url: oneUrl, source_name: fxname.slice(0,30) })
      if(oneRes.status == 1){
        return Promise.resolve(oneUrl)
      }
    }
    return Promise.reject(file.name+'上传失败')
  }else{
    return Promise.reject('获取上传配置失败')
  }
}
const goSubmit =async ()=>{
  loading.value = true
  try {
    for (let i = 0; i < imgs.value.length; i++) {
      const v = imgs.value[i];
      const url = await upOneImg(v).catch(err=>{
        throw new Error(err)
      })
      if(filePath.length == imgs.value.length){
        okMsg('上传成功')
        close()
        getList()
        break
      }
    }
  } catch (error:any) {
    errMsg(error,0)
    close()
    getList()
  }
}
const imgTypes = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const upChange = (file: UploadFile, fileList: UploadFile[])=>{
  const exname=file.name.substring(file.name.lastIndexOf("."))
  if(imgTypes.indexOf(exname) == -1){
    upload.value.handleRemove(file)
    errMsg('图片格式错误！')
    return
  }
  if(file.size && (file.size / 1024 / 1024) > 10){
    upload.value.handleRemove(file)
    errMsg('图片文件大小不能超过10M')
    return
  }
  imgs.value = fileList
  if(imgs.value.length>=9){
    (document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'none'
  }
  console.log(imgs.value);
}
const upRemove = (file: UploadFile, fileList: UploadFile[])=>{
  imgs.value = fileList;
  (document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
  console.log(imgs.value);
}
const lookimgs = (file: UploadFile)=>{
  let arr:string[] = []
  imgs.value.forEach(v=>{
    arr.push(v.url!)
  })
  showImgs.value  = arr
  showImgIndex.value = showImgs.value.findIndex(v=>v==file.url)
  imgShow.value = true
}

const editShow = ref(false)
const editId = ref<number|string>('')
const editName = ref('')
const showEdit = (id:number|string, name:string) => {
  editId.value = id
  editName.value = name
  editShow.value = true
}
const sureEdit = async () => {
  const { status } = await imagesEdit_api({
    id: editId.value,
    source_name: editName.value
  })
  if(status == 1){
    editShow.value = false
    getList()
  }
}

</script>

<script lang="ts">
export default { name:'我的作品库-图片库' }
</script>

<style scoped lang="scss">
.m_images{
  .m_topbtn{
    margin-bottom: 20px;
  }
  .firstimg{
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
}
.upimgs{
  .upbox{
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
      margin-bottom: 20px;
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
    margin-bottom: 20px;
  }
}
.pimg{
  width: 100%;
  height: 100%;
}
</style>