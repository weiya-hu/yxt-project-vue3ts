<template>
    <div class="mytable">
      <div @click="$router.push('Customedit')">去详情</div>
         <search @search="searchword" v-model="inputSearch"  @reset="resetSearch">
           <el-option label="待审核" value=2 />
        <el-option label="已通过" value=3 />
        <el-option label="被驳回" value=4 />
         </search>
      <el-table
        :data="tableList"
        style="width: 100%"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column width="150" label="操作">
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary"  v-if="row.status == 2" @click="$router.push('/custom/articleEdit?id='+row.id)">编辑</el-link>
              <!-- <div class="line" v-if="row.status != 1 && row.status != 2"></div> -->
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true" v-if="row.status == 3">驳回原因</el-link>
              <el-link type="primary" v-if="row.status == 4" @click="$router.push('/custom/articleDetails?id='+row.id)">详情</el-link>
              <div v-if="row.status == 1" class="line">
                  <el-link type="primary" >下载附件</el-link>
                  <el-link type="primary" >通过</el-link>
                  <el-link type="primary" >驳回</el-link>
              </div>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
      <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
      <MyPage :total="totle" v-model="page" @change="getList"/>
    </div>
</template>
<script setup  lang="ts">
import { ref ,reactive} from 'vue'
import search from'@/components/Search.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyDialog from "@/components/MyDialog.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { articleList_api } from '@/api/custom'
interface TableTitleProp{
  type:string,
  lable?:string,
  prop:string,
  width:number,
  operatButton?:string[]
}
const tableTitle = ref(<TableTitleProp[]>[
  {type:'select',width:100,prop:'select'},
  {type:'text',lable:'需求ID',prop:'id',width:150},
  {type:'text',lable:'账户名',prop:'username',width:150},
  {type:'text',lable:'客户名称',prop:'companyname',width:150},
  {type:'text',lable:'标题',prop:'title',width:200},
  {type:'text',lable:'描述',prop:'detail',width:190},
  {type:'date',lable:'创建日期',prop:'create_time',width:130},
  {type:'status',lable:'状态',prop:'status',width:100},    
]) 
const loading = ref(false)

const totle = ref(0)
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
}
const getList = async ()=>{
  loading.value = true
  const res = await articleList_api({
    size: 10,
    current: page.value,
  },1)
  console.log(res);
  
  loading.value = false
  if(res.status == 1){
    totle.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()
const searchword = (val:any) => {
  console.log(val.name);
  
}
</script>

<script lang="ts">
export default { name:'个性化内容库-软文' }
</script>
<style lang="">
    
</style>