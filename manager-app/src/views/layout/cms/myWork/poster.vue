<template>
  <div class="tel_data">
    <DetailsHeader/>
    <search @search="searchword"></search>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="70" align="center"/>
        <el-table-column property="id" label="ID" width="180" align="center"/>
        <el-table-column property="user_name" label="账户名" width="180" align="center"/>
        <el-table-column property="company_name" label="客户名称" width="180" align="center"/>
        <el-table-column property="thumb_url" label="海报" width="210" align="center">
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" width="200" align="center">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="200" align="center">
          <template #default="{row}">
            <div class="fcs">
              <div class="dot" :class="getStatus(row.status).className"></div>
              <div class="staus">{{getStatus(row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作"  align="center">
          <template #default="{row}">
            <div class="fcs" v-if="row.status == 1">
              <!-- <el-link type="primary" @click="goDel(row.id)">删除</el-link> -->
              <div class="line"></div>
              <el-link type="primary" @click="$router.push('/myWork/articleAdd?id='+row.id)">编辑</el-link>
            </div>
            <div class="fcs" v-if="row.status == 2 || row.status == 3">
              <!-- <el-link type="primary" @click="goDel(row.id)">删除</el-link> -->
              <div class="line"></div>
              <el-link type="primary" @click="$router.push('/myWork/articleDetails?id='+row.id)">查看</el-link>
            </div>
            <div class="fcs" v-if="row.status == 4">
              <!-- <el-link type="primary" @click="goDel(row.id)">删除</el-link> -->
              <div class="line"></div>
              <el-link type="primary" @click="errorMsg = row.fail_reason;errorShow=true">拒绝原因</el-link>
            </div>
          </template>
        </el-table-column>
        <!-- <template #empty>
          <MyEmpty/>
        </template> -->
      </el-table>
    </div>
    <Mypage :total="50" v-model="page"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import DetailsHeader from "@/components/DetailsHeader.vue"
import search from'@/components/Search.vue'
import Mypage from "@/components/Mypage.vue";
interface SData {
  id: number|string,
  user_name: string,
  company_name: string,
  thumb_url:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const tableData = ref<SData[]>([])
const page = ref(1)
// 搜索
const searchword = (val:any) => {
  console.log(val.name);
  
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getStatus = (type:number)=>{
  const obj = ref<{text:string,className:string}>()
  switch (type) {
    case 2:
      obj.value = {
        text:'待审核',
        className:'cyellow'
      }
      break;
    case 3:
      obj.value = {
        text:'已通过',
        className:'cdf'
      }
      break;
    case 4:
      obj.value = {
        text:'已拒绝',
        className:'cred'
      }
      break;
    default:
      obj.value = {
        text:'草稿',
        className:'cbbb'
      }
      break;
  }
  return obj.value
}
const errorShow = ref(false)
const errorMsg = ref('')
</script>
<script lang="ts">
export default { name:'TelData' }
</script>

<style scoped lang="scss">
.tel_data{
 .firstimg{
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
  .dot{
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .cbbb{
    background-color: $colorbbb;
  }
  .cyellow{
    background-color: $coloryellow;
  }
  .cdf{
    background-color: $dfcolor;
  }
  .cred{
    background-color: $colorred;
  } 
}
</style>