<template>
  <div class="fourdata_page_c">
    <div class="topbtns fsc">
      <el-button size="large" type="primary" @click="addShow = true">新建人群</el-button>
      <div class="rt fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <PeopleTable :data="tableData" details="/findC/fourDataDetails" @select="selectTable" @del="sureDel"/>
    <MyPage :total="total" v-model="page" @change="changePage"/>

    <AddPeople v-model="addShow" @success="submitAddForm" ref="addref"/>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyPage from "@/components/MyPage.vue";
import PeopleTable from "@/components/PeopleTable.vue";
import AddPeople from "@/components/AddPeople.vue";
import { addFour_api ,getFourList_api,delFour_api} from '@/api/findC'

const page = ref(1)
const total = ref(0)

const getList = ()=>{
  getFourList_api({
    size: 10,
    current: page.value
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
  })
}
getList()

interface IData {
  id:number,
  group_name:string,//人群名称
  group_desc:string,//人群描述
  status:number,//状态
  address:string,//地区
  count:number,//覆盖用户人数
  money:number,//消耗金额 (元)
  create_time:number,//创建日期
  source:number,//来源
  error?:string,//拒绝原因
  plan_url?:string,//附件地址
}

const tableData = ref<IData[]>([])

const multipleSelection = ref<IData[]>([])
const selectTable = (data:IData[])=>{
  multipleSelection.value = data
  console.log(multipleSelection.value);
}
const sureDel = (id:string)=>{
  delFour_api({id}).then((res:res)=>{
    res.status == 1 && getList()
  })
}

const changePage =()=>{
  getList()
}

const addShow = ref(false)
const addref = ref()
const submitAddForm = (val:any)=>{
  console.log('add submit',val);
  addFour_api({
    "attachment": val.path,
    "city": val.addr[1]||0,
    "district": val.addr[2]||0,
    "group_desc": val.desc,
    "group_name": val.people,
    "province": val.addr[0]||0,
  }).then((res:res)=>{
    if(res.status == 1){
      addShow.value = false
      getList()
    }else{
      addref.value.addError()
    }
  })
}
</script>

<script lang="ts">
export default { name:'400获客C' }
</script>

<style scoped lang="scss">
.fourdata_page_c{
  .topbtns{
    margin-bottom: 20px;
  }
}
</style>