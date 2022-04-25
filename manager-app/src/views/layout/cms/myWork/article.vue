<template>
  <div class="tel_data">
    <search @search="searchword" @reset="resetSearch" v-model="inputSearch">
      <el-option label="待审核" value=2 />
        <el-option label="已通过" value=3 />
        <el-option label="被驳回" value=4 />
    </search>
    <el-card class="mycard mt20">
      <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
         border
        @selection-change="handleSelectionChange"
      >
        <el-table-column property="id" label="ID" align="center" />
        <el-table-column property="uname" label="账户名" width="120" align="center" />
        <el-table-column property="cname" label="客户名称" width="250" align="center">
        </el-table-column>
        <el-table-column property="thumb_url" label="封面图片" width="104" align="center">
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
          </template>
        </el-table-column>
        <el-table-column  label="标题" :show-overflow-tooltip="true" width="350" align="center">
        <template #default="{row}">
            <el-link type="primary" @click="$router.push('/cms/myworkdet?id='+row.id)" >{{row.title}}</el-link>
          </template>
          </el-table-column>
        <el-table-column property="create_time" label="创建日期" align="center">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" align="center" >
          <template #default="{row}">
            <div class="fcs fleximg">
              <div class="dot" :class="getStatus(row.status).className"></div>
              <div class="staus">{{getStatus(row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作"  >
          <template #default="{row}">
            <div class="fcs" v-if="row.status == 3">
              <el-link type="primary" @click="$router.push('/cms/myworkdet?id='+row.id)">详情</el-link>
            </div>
             <div class="fcs" v-if="row.status == 2">
              <el-link type="primary" @click="pass(row.id)">通过</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="refuse(row.id)">驳回</el-link>
            </div>
            <div class="fcs" v-if="row.status == 4">
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true">驳回原因</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
    </el-card>
    
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
    <Refuse v-model="refuseShow" @success='refuseSuccess'/>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive, computed } from 'vue'
import { formatDate } from '@/utils/date'
import search from'@/components/Search.vue'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import Refuse from '@/components/Refuse.vue';
import { articleList_api,articleUpdate_api} from '@/api/cms/myWork'
interface SData {
  id: number|string,
  uname: string,
  cname: string,
  thumb_url:string,
  title:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const tableData = ref<SData[]>([])
const page = ref(1)
const total = ref(0)
const size = ref(10)
const errorShow = ref(false)
const errorMsg = ref('')
// 搜索
const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:'',
})
const searchword = () => {
  page.value = 1
  getList()
}
// 重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=''
  getList()
}

// 获取列表
const getList =async ()=>{
  const res = await articleList_api({
    size: size.value,
    current: page.value,
    ...inputSearch,
    startTime:inputSearch.create_time[0],
    endTime:inputSearch.create_time[1],
  })
  // console.log(res);
  
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
const changePage =()=>{
  getList()
}
// 驳回弹出框
let refuseShow=ref(false)
let refuseId = ref()
const refuse=(id:string)=>{
  refuseShow.value=true
  refuseId.value = id
}
const refuseSuccess=async(val:string)=>{
  let data={
    id:refuseId.value,
    fail_reason:val,
    status:4
  }
  const {status,body} = await  articleUpdate_api(data)
  if(status){
    refuseShow.value=false;
    getList()
  }
}

// 通过
const pass =async(id:string|number)=>{
await articleUpdate_api({ id,status:3,fail_reason:''})
 getList()
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getStatus = (type:number)=>{
  const obj = ref<{text:string,className:string}>()
  switch (Number(type)) {
    case 2:
      obj.value = {
        text:'待审核',
        className:'cred'
      }
      break;
    case 3:
      obj.value = {
        text:'已通过',
        className:'cdf'
      }
      break;
    case 4:
      obj.value = {
        text:'被驳回',
        className:'cyellow '
      }
      break;
    default:
      obj.value = {
        text:'草稿',
        className:'cbbb'
      }
      break;
  }
  return obj.value
}

</script>
<script lang="ts">
export default { name:'我的作品库——软文' }
</script>

<style scoped lang="scss">
.tel_data{
 .firstimg{
    width: 48px;
    height: 48px;
    // object-fit: scale-down;
    border-radius: 4px;
  }
  .dot{
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .cbbb{
    background-color: $colorbbb;
  }
  .cyellow{
    background-color: #e70207;
  }
  .cdf{
    background-color: #38b227;
  }
  .cred{
    background-color: #fbc40d;
  } 
}
.mycard{
      padding-top: 20px;
    }
</style>