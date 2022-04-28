<template>
  <div class="m_poster">

    <TopBtns @add="addShow = true"/>

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
            <img :src="row.thumb_url" alt="" class="firstimg lookhover" @click="look(row.thumb_url)">
          </template>
        </el-table-column>
        <el-table-column property="source_name" label="海报名" width="250">
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
    <el-dialog v-model="addShow" title="上传海报" width="380px" @close="close" custom-class="upimgs">
      <div v-loading="loading">
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
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import MediaUpload from "@/components/MediaUpload.vue";
import TopBtns from "@/components/TopBtns.vue";
import { errMsg ,okMsg } from '@/utils/index'
import { posterList_api, posterAdd_api, posterDel_api, posterEdit_api } from '@/api/myWork'
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
const upOne = async (url:string, length:number, fxname:string)=>{
  //上传单张图片成功后
  const res = await posterAdd_api({ thumb_url:url, source_name:fxname })
  res.status == 1 && upNumber.value++
  if(upNumber.value === length){
    upSuccess()
  }
}
const upSuccess = ()=>{
  //全部上传成功
  okMsg('上传成功')
  upNumber.value = 0
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

const editShow = ref(false)
const editId = ref<number|string>('')
const editName = ref('')
const showEdit = (id:number|string, name:string) => {
  editId.value = id
  editName.value = name
  editShow.value = true
}
const sureEdit = async () => {
  const { status } = await posterEdit_api({
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
export default { name:'我的作品库-海报库' }
</script>

<style scoped lang="scss">
.m_poster{
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
</style>