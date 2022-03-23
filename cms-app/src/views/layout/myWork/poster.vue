<template>
  <div class="m_poster">
    <div class="fsc m_topbtn">
      <el-button type="primary" size="large" @click="addShow = true">&emsp;创建&emsp;</el-button>
      <div class="fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步官网</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID" width="230"/>
        <el-table-column property="thumb_url" label="海报" >
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
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
              <div class="dot" :class="getStatus(row.status).className"></div>
              <div class="staus">{{getStatus(row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="{row}">
            <div class="fcs" v-if="row.status == 4">
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true">拒绝原因</el-link>
            </div>
            <div class="fcs" v-else>
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
    <el-dialog v-model="addShow" title="上传海报" width="380px" @close="close" custom-class="upimgs">
      <MediaUpload
        :max="1"
        v-if="addShow"
        @upOneSuccess="upOne"
        @error="upError"
        @look="upLook"
        :exnameList="exnameList"
        :msg="'图片尺寸：16:9<br/>建议尺寸：640x1136px、800*2000px、1242px*1242px<br/>支持'+exnameList.join('、')+'等图片格式'"
        ref="upload"
      />
      <div class="fcs btns fjend">
        <el-button @click="close">取消</el-button>
        <el-button v-if="upload" type="primary" @click="goSubmit" :disabled="!upload.imgs.length">提交</el-button>
      </div>
    </el-dialog>
    <el-image-viewer @close="imgShow=false" v-if="imgShow" :url-list="showImgs" :initial-index="showImgIndex"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import MediaUpload from "@/components/MediaUpload.vue";
import { errMsg ,okMsg } from '@/utils/index'
import { posterList_api, posterAdd_api, posterDel_api } from '@/api/myWork'

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
  const res = await posterList_api({
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
const getStatus = (type:number)=>{
  const obj = ref<{text:string,className:string}>()
  switch (type) {
    case 3:
      obj.value = {
        text:'已通过',
        className:'cdf'
      }
      break;
    case 4:
      obj.value = {
        text:'已拒绝',
        className:'cred'
      }
      break;
    default:
      obj.value = {
        text:'待审核',
        className:'cyellow'
      }
      break;
  }
  return obj.value
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
  const res = await posterDel_api({id:delId.value})
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
const exnameList = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const upload = ref()//上传组件ref
const close = ()=>{
  loading.value = false
  // upload.value.clear()
  addShow.value = false
  imgShow.value = false
  showImgs.value = []
  showImgIndex.value = 0
}

const goSubmit = ()=>{
  upload.value.submit()
}

const upNumber = ref(0)
const upOne = async (url:string,length:number)=>{
  //上传单张图片成功后
  const res = await posterAdd_api({thumb_url:url})
  res.status == 1 && upNumber.value++
  if(upNumber.value === length){
    upSuccess()
  }
}
const upSuccess = ()=>{
  //全部上传成功
  okMsg('上传成功')
  close()
  getList()
}
const upError = (err:string)=>{
  //上传失败时
  errMsg(err,0)
  close()
  getList()
}
const upLook = (list:string[],i:number)=>{
  //预览
  showImgs.value  = list
  showImgIndex.value = i
  imgShow.value = true
}


</script>

<script lang="ts">
export default { name:'我的作品库-海报库' }
</script>

<style scoped lang="scss">
.m_poster{
  .m_topbtn{
    margin-bottom: 20px;
  }
  .firstimg{
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
  .dot{
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .cyellow{
    background-color: $coloryellow;
  }
  .cdf{
    background-color: $dfcolor;
  }
  .cred{
    background-color: $colorred;
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
</style>