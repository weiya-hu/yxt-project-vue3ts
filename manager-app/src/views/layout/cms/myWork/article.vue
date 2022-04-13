<template>
  <div class="tel_data">
    <search @search="searchword" @reset="resetSearch" v-model="inputSearch">
      <el-option label="待审核" value=2 />
        <el-option label="已通过" value=3 />
        <el-option label="被驳回" value=4 />
        <el-option label="全部" />
    </search>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
         border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="uname" label="账户名"  />
        <el-table-column property="cname" label="客户名称"  />
        <el-table-column property="thumb_url" label="封面图片" >
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
          </template>
        </el-table-column>
        <el-table-column  label="标题" >
        <template #default="{row}">
            <el-link type="primary" @click="$router.push('/cms/myworkdet?id='+row.id)" >{{row.title}}</el-link>
          </template>
          </el-table-column>
        <el-table-column property="create_time" label="创建日期" >
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态"  >
          <template #default="{row}">
            <div class="fcs">
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
              <el-link type="primary" >驳回</el-link>
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
    <Mypage :total="total" v-model="page" @change="changePage"/>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import { formatDate } from '@/utils/date'
import search from'@/components/Search.vue'
import MyEmpty from "@/components/MyEmpty.vue";
import Mypage from "@/components/Mypage.vue";
import MyDialog from "@/components/MyDialog.vue";
import { articleList_api,articleUpdate_api} from '@/api/myWork'
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
const errorShow = ref(false)
const errorMsg = ref('')
// 搜索
const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:''
})
// 重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=''
}
const searchword = () => {
  console.log(inputSearch);
  
  getList()
}
const getList =async ()=>{
  const res = await articleList_api({
    size: 10,
    current: page.value,
    ...inputSearch
  })
  console.log(res);
  
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
const changePage =()=>{
  getList()
}
// 驳回详情
// const getDetail =async(id:string)=>{
// const res = await articleReason_api({ id})
// console.log(res);
// }
// 通过
const pass =async(id:string|number)=>{
const res = await articleUpdate_api({ id,status:3})
 getList()
console.log(res);
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getStatus = (type:number)=>{
  const obj = ref<{text:string,className:string}>()
  switch (type) {
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
    width: 75px;
    height: 48px;
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
    background-color: $coloryellow;
  }
  .cdf{
    background-color: #4bd863;
  }
  .cred{
    background-color: #0079fe;
  } 
}
</style>