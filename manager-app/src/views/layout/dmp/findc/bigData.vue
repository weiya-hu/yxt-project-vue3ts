<template>
  <div class="bigdata_data">
    <search @search="searchword" @reset="resetSearch" v-model="inputSearch">
      <el-option label="待审核" value=2 />
        <el-option label="已通过" value=3 />
        <el-option label="被驳回" value=4 />
    </search>
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="bigdataData" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="id" label="ID"/>
          <el-table-column property="user_name" label="账户名"/>
          <el-table-column property="company_name" label="客户名称"/>
          <el-table-column property="group_name" label="人群名称"/>
          <el-table-column property="group_desc" label="人群描述"/>
           <el-table-column property="status" label="处理状态">
            <template #default="{row}">
              <div class="fcs ss">
                <div class="point" :style="row.status == 0?'background:#FFBF00':row.status == 1?'background:#24BD13':row.status == 2?'background:#2D68EB':'background:#E40000'"></div>
                <div>{{row.status == 0?'待处理':row.status == 1?'已受理':row.status == 2?'已完结':'被驳回'}}</div>
              </div>
            </template>
          </el-table-column>
           <el-table-column property="count" label="覆盖用户人数"/>
          <el-table-column property="money" label="消费金额（元）">
            <template #default="{row}">
              <div>{{Number(row.money).toFixed(2)}}</div>
            </template>
          </el-table-column>
         
          <el-table-column property="source" label="来源">
             <template #default="{row}">
              <div>{{row.source==1?'康州数智':row.source==2?'第三方数据':row.source==3?'号码段':
                row.source==4?'广告投放':row.source==5?'微信好友':row.source==6?'百度关键词':
                row.source==7?'大数据获客':row.source==8?'400获客':row.source==9?'竞价获客':'短信获客'}}</div>
            </template>
          </el-table-column>
          <el-table-column property="create_time" label="创建日期">
            <template #default="{row}">
              <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作"  width="220" fixed="right">
             <template #default="{row}">
              <div class="fcc" >
                <el-link type="primary" v-if="row.status == 2" @click="$router.push('/dmp/findc/bigdatadata?id='+row.id)">详情</el-link>
                <el-link type="primary"  v-if="row.status == 0" @click="">下载附件</el-link>
                <div class="line" v-if="row.status == 0||row.status == 2"></div>
                <el-link type="primary" @click="refuse(row.id)" v-if="row.status == 0">驳回</el-link>
                <div class="line" v-if="row.status == 0"></div>
                <el-link type="primary" v-if="row.status == 0" @click="goPass(row.id)">通过</el-link>
                <el-link type="primary"  @click="" v-if="row.status == 1||row.status==2">上传客户</el-link>
                <el-link type="primary"  v-if="row.status == 3" @click="goFail(row)">驳回原因</el-link>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <MyPage :total="total" v-model:page="page" @change="bigdataList" v-model:size="size"/>
     <Refuse v-model="refuseShow" @success='refuseSuccess'/>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import search from'@/components/Search.vue'
import { formatDate } from '@/utils/date';
import MyPage from "@/components/MyPage.vue";
import { bigdataList_api,bigdataPass_api,bigdataReject_api} from '@/api/dmp/findc'
import { ElMessageBox} from 'element-plus'
import Refuse from '@/components/Refuse.vue';
const page = ref(1)
const total = ref(0)
const size = ref(10)
// 搜索
const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:''
})
// 查询
const searchword = () => {
  bigdataList()
}
// 重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=''
   bigdataList()
}
interface SData {
  size:number,
  current:number,
  create_time:number,
}
const bigdataData = ref<SData[]>([])
const bigdataList = async ()=>{
  const res = await bigdataList_api({
    current:page.value,
    size:size.value,
    ...inputSearch,
    // startTime:inputSearch.create_time[0],
    // endTime:inputSearch.create_time[1],
  })
  if(res.status==1){
    bigdataData.value=res.body.records
    total.value = res.body.total
  }
}
bigdataList()


//通过
const passId = ref('')
const goPass=(id:string)=>{
  passId.value=id
  bigdataPass()
}
const bigdataPass = async() => {
  bigdataPass_api({id:passId.value}).then((res:res)=>{
    bigdataList()
  })
}
//驳回按钮
let refuseShow=ref(false)
let upUserShow = ref(false)
let refuseId = ref()
const refuse=(id:string)=>{
  refuseShow.value=true
  refuseId.value = id
}
//驳回组件点击确认后
const refuseSuccess=async(val:string)=>{
  let data={
    id:refuseId.value,
    fail_reason:val
  }
  const {status,body} = await bigdataReject_api(data)
  if(status){
    refuseShow.value=false;
    bigdataList()
  }
}
// 驳回原因
const goFail=(row:any)=>{
   ElMessageBox.confirm(
    row.fail_reason,
    '驳回原因',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
    }
  )
}
</script>

<style scoped lang="scss">
.ss{
  margin:20px 0;
  font-size: 14px;
  .point{
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  #24BD13;
    border-radius: 50%;
    margin: 7px 15px 3px 0;
  }
}
.mycard{
  margin-top: 10px;
}
</style>