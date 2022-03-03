<template>
  <div class="teldata_details_c">
    <FindNumber :total="total"/>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="tel" label="联系方式" />
        <el-table-column property="address" label="归属地"/>
        <el-table-column property="create_time" label="发送时间" >
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd hh:mm:ss')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源" >
          <template #default="scope">
            <div>{{ scope.row.source == 1?'号码段':'---' }}</div>
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
  tel:string,//联系方式
  address:string,//归属地
  create_time:number,//发送时间
  source:number,//来源
}
const tableData = ref<IData[]>([
  {
    id:0,
    tel:'139****1928',
    address:'重庆',
    create_time:1646096359651,
    source:1,
  },
  {
    id:1,
    tel:'139****1928',
    address:'重庆',
    create_time:1646096359651,
    source:1,
  },
  {
    id:2,
    tel:'139****1928',
    address:'重庆',
    create_time:1646096359651,
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
.teldata_details_c{
  .mytable{
    margin-top: 30px;
  }

}
</style>