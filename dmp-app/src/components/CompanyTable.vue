<template>
  <div class="mytable">
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column property="no" label="序号" width="60"/>
      <el-table-column property="cname" label="企业名称" />
      <el-table-column property="uname" label="联系人" width="80"/>
      <el-table-column property="mobile" label="联系方式"  width="110"/>
      <el-table-column property="phone" label="固定电话" width="120"/>
      <el-table-column property="type" label="行业分类" width="100"/>
      <el-table-column property="addr" label="地区" width="120"/>
      <el-table-column property="address" label="详细地址"/>
      <el-table-column property="code" label="统一社会信用代码" width="165"/>
      <el-table-column property="url" label="企业官网" >
        <template #default="scope">
          <el-link type="primary" :href="scope.row.url">{{ scope.row.url }}</el-link>
        </template>
      </el-table-column>
      <el-table-column property="range" label="经营范围" width="200">
        <template #default="scope">
          <div class="els2">{{ scope.row.range }}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" width="100"/>
    </el-table>
  </div>
</template>

<script setup lang="ts">
//公司表格
import { ref } from 'vue'

const props = defineProps({
  data: Array,
})

interface IData {
  no: string,
  cname:string,
  uname:string,
  mobile:string,
  phone:string,
  type:string,
  addr:string,
  address:string,
  code:string,
  url:string,
  range:string,
  source:string,
}
const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

</script>

<style scoped lang="scss">

</style>