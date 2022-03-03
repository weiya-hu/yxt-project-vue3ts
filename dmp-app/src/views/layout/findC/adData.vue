<template>
  <div class="addata_page_c">
    <div class="topbtns fsc">
      <el-button size="large" type="primary" @click="addShow = true">新建数据</el-button>
      <div class="rt fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <PeopleTable :data="tableData" @select="selectTable"/>
    <MyPage :total="1000" v-model="page" @change="changePage"/>

    <AddPeople v-model="addShow"/>

  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import { reactive, ref  } from 'vue'
import MyPage from "@/components/MyPage.vue";
import PeopleTable from "@/components/PeopleTable.vue";
import AddPeople from "@/components/AddPeople.vue";


const page = ref(1)
const total = ref(0)
const router = useRouter()
const goDetails = (id:string)=>{
  router.push('/findC/telDataDetails?id='+id)
}

interface IData {
  id:number,
  name:string,//人群名称
  desc:string,//人群描述
  state:number,//状态
  address:string,//地区
  num:number,//覆盖用户人数
  money:number,//消耗金额 (元)
  create_time:number,//创建日期
  source:number,//来源
  error?:string,//拒绝原因
}

const tableData = ref<IData[]>([
  {
    id:0,
    name:'拓客测试',
    desc:'jjjj',
    state:0,
    address:'重庆',
    num:321,
    money:200.00,
    create_time:1646096359651,
    source:1,
  },
  {
    id:1,
    name:'拓客测试',
    desc:'cccc',
    state:1,
    address:'重庆',
    num:321,
    money:200.00,
    create_time:1646096359651,
    source:1,
  },
  {
    id:2,
    name:'拓客测试',
    desc:'www',
    state:2,
    address:'重庆',
    num:321,
    money:200.00,
    create_time:1646096359651,
    source:2,
    error:'dddddd'
  },
  {
    id:2,
    name:'拓客测试',
    desc:'xxxx',
    state:3,
    address:'重庆',
    num:321,
    money:200.00,
    create_time:1646096359651,
    source:2,
  },
])

const multipleSelection = ref<IData[]>([])
const selectTable = (data:IData[])=>{
  multipleSelection.value = data
  console.log(multipleSelection.value);
}

const changePage =()=>{
  console.log(page.value);
}

const addShow = ref(false)

const submitAddForm = ()=>{

}
</script>

<style scoped lang="scss">
.addata_page_c{
  .topbtns{
    margin-bottom: 20px;
  }
  :deep(.el-form-item__label){
    width: 90px;
  }
  .dot{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .dot_ing{
    background-color: #2BD34E;
  }
  .dot_ok{
    background-color: $dfcolor;
  }
}
</style>