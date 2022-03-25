<template>
  <div class="custom_article">
    <div class="top-button fsc">
      <el-button size="large" type="primary"  class="up-user fcc" @click="dialogVisible = true">&ensp;&ensp;创建&ensp;&ensp;</el-button>
      <div class="flexr">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableList"
        style="width: 100%"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column width="150">
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary" @click="goDel(row.id)" v-if="row.status != 2">删除</el-link>
              <div class="line" v-if="row.status != 1 && row.status != 2"></div>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true" v-if="row.status == 3">驳回原因</el-link>
              <el-link type="primary" v-if="row.status == 4" @click="$router.push('/custom/articleDetails?id='+row.id)">查看</el-link>
              <div v-if="row.status == 2">---</div>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
    <MyPage :total="totle" v-model="page" @change="getList"/>
    <MyDataUpUser v-model="dialogVisible" @submitSuccess="submitsuccess" :type="1"/>
  </div>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataUpUser from '@/components/MyDataUpUser.vue'
import MyDialog from "@/components/MyDialog.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { customList_api, customDel_api } from '@/api/custom'
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
  {type:'text',lable:'标题',prop:'title',width:200},
  {type:'text',lable:'描述',prop:'detail',width:220},
  {type:'date',lable:'创建日期',prop:'create_time',width:100},
  {type:'status',lable:'状态',prop:'status',width:100},    
]) 
const dialogVisible = ref(false)
const loading = ref(false)

const totle = ref(0)
const page = ref(1)
const tableList = ref([])
const getList = async ()=>{
  loading.value = true
  const res = await customList_api({
    size: 10,
    current: page.value,
  },1)
  loading.value = false
  if(res.status == 1){
    totle.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()

const submitsuccess = ()=>{
  dialogVisible.value = false
  getList()
}

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  //确认删除
  customDel_api({id:delId.value},1).then((res:res)=>{
    if(res.status == 1){
      getList()
      delShow.value = false
    }
  })
}

const errorShow = ref(false)
const errorMsg = ref('')

</script>

<script lang="ts">
export default { name:'个性化内容库-软文' }
</script>

<style scoped lang="scss">
.custom_article{
  .top-button{
    margin-bottom: 20px;
  }
}
</style>