<template>
  <div class="m_video">

    <TopBtns @add="addShow = true"/>

    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID" width="230"/>
        <el-table-column property="video" label="视频" >
          <template #default="{row}">
            <video :src="row.video_url" alt="" class="firstimg lookhover" @click="look(row.video_url)"/>
          </template>
        </el-table-column>
        <el-table-column property="source_name" label="视频名" width="250">
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
              <div class="status_dot" :class="getKzMyStatus(row.status).className"></div>
              <div>{{getKzMyStatus(row.status).text}}</div>
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
              <el-link type="primary" @click="look(row.video_url)">查看</el-link>
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
    <el-dialog v-model="addShow" title="上传视频" width="380px" @close="close" custom-class="upimgs" :before-close="beforeCloseAdd">
      <div v-loading="loading">
        <MyUpload
          type="video"
          v-model="fileUrls"
          :max-size="200"
          @error="upError"
          @success="upSuccess" 
          @change="upChange"
          :exnameList="exnameList"
          :msg="'视频尺寸：宽高16:9或9:16；<br/>不超过200M；<br/>支持'+exnameList.join('、')+'格式'"
          ref="upload"
        />
        <div class="fcs btns fjend">
          <el-button @click="close">取消</el-button>
          <el-button v-if="upload" type="primary" @click="goSubmit" :disabled="!fileUrls">提交</el-button>
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
    <el-dialog v-model="lookShow" title="查看视频" fullscreen @close="lookVideo = ''" custom-class="videobox">
      <video :src="lookVideo" controls class="show_video"></video>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import MyUpload from "@/components/MyUpload.vue";
import TopBtns from "@/components/TopBtns.vue";
import { errMsg ,okMsg ,confirm } from '@/utils/index'
import { videoList_api, videoAdd_api, videoDel_api, videoEdit_api } from '@/api/myWork'
import { getKzMyStatus } from '@/utils/index'

interface SData {
  id: number|string,
  video_url:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const page = ref(1)
const total = ref(0)
const tableData = ref<SData[]>([])
const getList =async ()=>{
  const res = await videoList_api({
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
  const res = await videoDel_api({id:delId.value})
  res.status == 1 && getList()
  delShow.value = false
}
const lookShow = ref(false)
const lookVideo = ref('')
const look = (url:string)=>{
  // window.open(url)
  lookVideo.value = url
  lookShow.value = true
}

const errorShow = ref(false)
const errorMsg = ref('')

const addShow = ref(false)
const loading = ref(false)
const exnameList = ['.mp4']
const upload = ref()//上传组件ref
const close = ()=>{
  fileUrls.value = ''
  upload.value.clear()
  addShow.value = false
  loading.value = false
}

const goSubmit = ()=>{
  loading.value = true
  upload.value.submit()
}

const fileUrls = ref('')
const upChange = (errorType:string)=>{
  //上传组件状态改变时
  console.log(errorType);
}
const upSuccess = async (videoUrl:string)=>{
  //上传成功
  const fxname = fileUrls.value.substring(0, fileUrls.value.indexOf(".")) // 文件名
  const res = await videoAdd_api({ thumb_url:videoUrl, source_name:fxname })
  if(res.status == 1){
    okMsg('上传成功')
    close()
    getList()
  }
}
const upError = (err:string)=>{
  //上传失败时
  errMsg(err,0)
  loading.value = false
}

const beforeCloseAdd = (done:Function)=>{
  if(loading.value){
    confirm().then(() => {
      upload.value.doAbort()
      done()
    })
    .catch(() => {})
  }else{
    done()
  }
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
  const { status } = await videoEdit_api({
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
export default { name:'我的作品库-视频库' }
</script>

<style scoped lang="scss">
.m_video{
  .firstimg{
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
}
.upimgs{
  
  .tips{
    color:$color999;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
  }
  .btns{
    margin-top: 20px;
  }
}
.pimg{
  width: 100%;
  height: 100%;
}
:deep(.videobox){
  .el-dialog__body{
    padding: 0;
    height: calc(100% - 55px);
  }
}
.show_video{
  width: 100%;
  height: 100%;
}
</style>