<template>
  <div class="addata_details_c">
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="acc" label="好友微信号" />
        <el-table-column property="avater" label="头像" >
          <template #default="scope">
            <el-avatar :size="42"> {{scope.row.avater}} </el-avatar>
          </template>
        </el-table-column>
        <el-table-column property="name" label="昵称" />
        <el-table-column property="sex" label="性别" >
          <template #default="scope">
            <div>{{ scope.row.sex == 1?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="tel" label="联系方式" />
        <el-table-column property="address" label="地区"/>
        <el-table-column property="sign" label="个性签名"/>
        <el-table-column property="create_time" label="创建时间" >
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd hh:mm:ss')}}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";

interface IData {
  id:number,
  acc:string,//好友微信号
  avater:string,//头像
  name:string,//昵称
  sex:number,//性别
  tel:string,//联系方式
  address:string,//地区
  sign:string,//个性签名
  create_time:number,//创建时间
}
const tableData = ref<IData[]>([
  {
    id:0,
    acc:'asdasd',
    avater:'asdsad',
    name:'王麻子',
    sex:1,
    tel:'139****1928',
    address:'重庆',
    sign:'保险理财贷款联系：18659898462…',
    create_time:1646096359651,
  },
])


const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}
</script>

<style scoped lang="scss">

</style>