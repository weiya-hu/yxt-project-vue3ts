<template>
    <div class="mytable">
         <search @search="searchword" v-model="inputSearch"  @reset="resetSearch">
           <el-option label="待处理" value=1 />
           <el-option label="已受理" value=2 />
        <el-option label="被驳回" value=3 />
        <el-option label="已完成" value=4 />
         </search>
        <el-card class="mycard mt20">
            <el-table
        :data="tableList"
        border
        style="width: 100%"
        row-class-name="my-data-table-row"
        v-loading="loading">
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column width="150" label="操作" >
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary"  v-if="row.status == 2" @click="$router.push('/cms/customedit?id='+row.id)">编辑</el-link>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true" v-if="row.status == 3">驳回原因</el-link>
              <el-link type="primary" v-if="row.status == 4" @click="$router.push('/cms/customdet?id='+row.id)">详情</el-link>
              <div v-if="row.status == 1" >
                  <el-link type="primary" class="fcss" @click="getData(row.id) ">下载附件</el-link>                  
                  <el-link type="primary" class="fcss" @click="pass(row.id)">通过</el-link>                  
                  <el-link type="primary" @click="open(row.id)">驳回</el-link>
              </div>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
      <MyPage :total="totle" v-model:page="page" @change="getList" v-model:size="size"/>
        </el-card>

      <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
    </div>
</template>
<script setup  lang="ts">
import { ref ,reactive} from 'vue'
import search from'@/components/Search.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyDialog from "@/components/MyDialog.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { articleList_api,articlePass_api,articleAttach_api ,articleReject_api} from '@/api/custom'
interface TableTitleProp{
  type:string,
  lable?:string,
  prop:string,
  width:number,
  operatButton?:string[]
}
const tableTitle = ref(<TableTitleProp[]>[
  {type:'text',lable:'需求ID',prop:'id',width:120},
  {type:'text',lable:'账户名',prop:'user_name',width:120},
  {type:'text',lable:'客户名称',prop:'company_name',width:180},
  {type:'text',lable:'标题',prop:'title',width:150},
  {type:'text',lable:'描述',prop:'detail',width:120},
  {type:'date',lable:'创建日期',prop:'create_time',width:110},
  {type:'status',lable:'状态',prop:'status',width:100},    
]) 
const loading = ref(false)

const totle = ref(0)
const size = ref(20)
const page = ref(1)
const tableList = ref([])
const errorShow = ref(false)
const errorMsg = ref('')

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
  getList()
}
// 搜索
const searchword = (val:any) => {
  getList()
}
// 通过
const pass =async(id:string|number)=>{
await articlePass_api({ id})
 getList()
}
// 驳回弹出框
const open = (id:string|number) => {
  ElMessageBox.prompt('驳回原因', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
    .then(async ({ value }) => {
      await articleReject_api({
          fail_reason:value,
          id
  })
     getList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消驳回',
      })
    })
}
// 下载附件
const getData = async (id:string)=>{
  const res = await articleAttach_api({ id})
  console.log(res);
  console.log(id);
  if(res.status == 1){
     window.location.href = res.body.attach_url
  }
}

defineExpose({
  getData
})
// 列表
const getList = async ()=>{
  loading.value = true
  const res = await articleList_api({
    size: size.value,
    current: page.value,
    ...inputSearch
  })
  console.log(res);
  
  loading.value = false
  if(res.status == 1){
    totle.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()

</script>

<script lang="ts">
export default { name:'个性化内容库-软文' }
</script>
<style lang="scss" scoped>
    .fcss{
      z-index: 20;
      margin-right: 6px;
    }
    .mycard{
      padding-top: 20px;
    }
</style>