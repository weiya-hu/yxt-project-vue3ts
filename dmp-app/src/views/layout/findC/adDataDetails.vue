<template>
  <div class="addata_details_c">
    <FindNumber :total="total"/>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="name" label="姓名" />
        <el-table-column property="sex" label="性别" >
          <template #default="scope">
            <div>{{ scope.row.sex == 1?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="tel" label="联系方式" />
        <el-table-column property="email" label="邮箱" />
        <el-table-column property="type" label="从事行业" />
        <el-table-column property="address" label="地区"/>
        <el-table-column property="source" label="来源" >
          <template #default="scope">
            <div>{{ scope.row.source == 1?'广告投放':'---' }}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="1000" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import { formatDate } from '@/utils/date'
import FindNumber from "@/components/FindNumber.vue";
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";

interface IData {
  id:number,
  name:string,//姓名
  sex:number,//性别
  tel:string,//联系方式
  email:string,//邮箱
  type:string,//从事行业
  address:string,//地区
  source:number,//来源
}
const tableData = ref<IData[]>([
  {
    id:0,
    name:'王麻子',
    sex:1,
    tel:'139****1928',
    email:'123456@qq.com',
    type:'计算机',
    address:'重庆',
    source:1,
  },
  {
    id:1,
    name:'张三',
    sex:2,
    tel:'139****1928',
    email:'123456@qq.com',
    type:'计算机',
    address:'重庆',
    source:1,
  },
  {
    id:2,
    name:'王麻子',
    sex:1,
    tel:'139****1928',
    email:'123456@qq.com',
    type:'计算机',
    address:'重庆',
    source:1,
  },
])

const total = ref(0)
const page = ref(1)
const changePage =()=>{
  console.log(page.value);
}
const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}
</script>

<style scoped lang="scss">
.addata_details_c{
  .mytable{
    margin-top: 30px;
  }

}
</style>