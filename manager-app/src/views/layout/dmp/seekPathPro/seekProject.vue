<template>
  <div class="specific_data">
    <Search @search="getList"  v-model="inputSearch" @reset="resetSearch">
      <el-option label="全部" :value='null' />
      <el-option label="待处理" value=0 />
      <el-option label="已受理" value=1 />
      <el-option label="被驳回" value=2 />
      <el-option label="已完成" value=3 />
    </Search>
    <div class="mytable-data">
      <el-table
        :data="tableList"
        size="small"
        row-class-name="my-data-table-row"
        v-loading="loading"
        :border="true"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column fixed="right" property="operate" label="操作" min-width="170" align="center">
          <template #default="{row}">
            <div class="operate-button-pre">
              <el-link type="primary" v-if="row.status===0" :href="row.attachment" downLoad="附件.zip">下载附件</el-link>
              <el-link type="primary" v-if="row.status===0" @click="refuse(row)">驳回</el-link>
              <el-link type="primary" v-if="row.status===0" @click="pass(row)">通过</el-link>
              <el-link type="primary" v-if="row.status===1 || row.status===3" @click="upUser(row)">上传客户</el-link>
              <el-link type="primary" v-if="row.status===2" @click="reason(row)">驳回原因</el-link>
              <el-link type="primary" v-if="row.status===3" @click="$router.push('/dmp/seekpathpro/seekprodetail?id='+row.id)">详情</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <Mypage v-if="total" :total="total" v-model:page="page" v-model:size="size" @change="getList"/>
    <Refuse v-model="refuseShow" @success='refuseSuccess'/>
    <UpUser v-model="upUserShow" @success='upUserSuccess'/>
  </div>
</template>

<script setup lang="ts">
import { ref ,reactive} from 'vue'
import {itemPage_api,channelPass_api,channelReject_api} from '@/api/dmp/findb'
import Mypage from "@/components/Mypage.vue";
import Search from '@/components/Search.vue';
import MyDataTable from '@/components/MyDataTable.vue';
import MyEmpty from '@/components/MyEmpty.vue';
import Refuse from '@/components/refuse.vue';
import UpUser from '@/components/UpUser.vue'
import { ElMessageBox} from 'element-plus'
import {useRouter} from 'vue-router'
const router = useRouter();

let total=ref(0)
let page = ref(1)
let size = ref(10)
let loading=ref(false)
let refuseShow=ref(false)
let upUserShow = ref(false)
let refuseId = ref()
let upUserId = ref()
const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:[]
})
const tableTitle = ref([
  {type:'text',lable:'ID',prop:'id',width:100},
  {type:'text',lable:'账户名',prop:'u_name',width:100},
  {type:'text',lable:'客户名称',prop:'c_name',width:100},
  {type:'industry_id',lable:'行业分类',prop:'industry_id',width:120},
  {type:'city_id',lable:'地区',prop:'city',width:100},
  {type:'text',lable:'项目名称',prop:'group_name',width:150},
  {type:'text-tooltip',lable:'项目描述',prop:'group_desc',width:220},
  {type:'date',lable:'创建日期',prop:'create_time',width:110},
  {type:'status_do',lable:'状态',prop:'status',width:100}
])
  let tableList = ref([])

const getList=async()=>{
  loading.value=true
  let data={
    current:page.value,
    size:size.value,
    name:inputSearch.userName,
    status:inputSearch.status,
    startTime:inputSearch.create_time[0],
    endTiem:inputSearch.create_time[1],
  }
  const {status,body} = await itemPage_api(data)
  loading.value=false
  if(status){
    tableList.value = body.records;
    total.value = body.total
  }
}
getList()
// 重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=[]
}
//通过按钮
const pass=async(row:any)=>{
  ElMessageBox.confirm(
    `是否确认通过(ID：${row.id})需求?`,
    '操作提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'success',
    }
  ).then(async() => {
    let data={id:row.id}
    const {status} = await channelPass_api(data)
    status && getList()
  })
}
//驳回原因按钮
const reason=(row:any)=>{
  ElMessageBox.confirm(
    row.fail_reason,
    '驳回原因',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
    }
  )
}
//驳回按钮
const refuse=(row:any)=>{
  refuseShow.value=true
  refuseId.value = row.id
}
//驳回组件点击确认后
const refuseSuccess=async(val:string)=>{
  let data={
    id:refuseId.value,
    fail_reason:val
  }
  const {status,body} = await channelReject_api(data)
  if(status){
    refuseShow.value=false;
    getList()
  }
}

//上传客户按钮
const upUser=(row:any)=>{
  upUserShow.value=true
  upUserId.value = row.id
}

//上传客户点击确认，附件上传成功后
const upUserSuccess = async (val:any)=>{
  console.log(val)
}
</script>

<script lang="ts">
export default { name:'SeekPath' }
</script>

<style scoped lang="scss">
.specific_data{
  .top-search{
    width: 100%;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid rgba(221,221,221,1);
    border-radius: 4px;
  }
  .mytable-data{
    margin-top: 16px;
    background: #FFFFFF;
    padding: 24px;
    .operate-button-pre{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
    }
  }
}


</style>