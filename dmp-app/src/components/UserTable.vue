<template>
  <div class="mytable user_table">
    <el-table
      :data="data"
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
      <el-table-column property="mobiles" label="联系方式" />
      <el-table-column property="email" label="邮箱" />
      <el-table-column property="type" label="从事行业">
        <template #default="scope">
          <div>{{getHashStr(scope.row.industry_id.split(','),typeHash,'last')}}</div>
        </template>
      </el-table-column>
      <el-table-column label="地区">
        <template #default="scope">
          <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" >
        <template #default="scope">
          <div>{{ getSource(scope.row.source) }}</div>
        </template>
      </el-table-column>
      <template #empty>
        <MyEmpty/>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
/**
 * 客户表格
 * @author chn 
*/
import { ref,computed } from 'vue'
import MyEmpty from "@/components/MyEmpty.vue";
import { mainStore } from '@/store/index'
import {getHashStr,strToArr,getSource} from '@/utils/index'
const store = mainStore()
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)
const props = defineProps({
  data: Array,
})
const emit = defineEmits(['select'])
// select 选择时触发，返回选择数据；del 确认删除时触发，返回id

interface IData {
  city: number
  create_time: number
  district: number
  email: string
  id: number
  industry_id: string
  mobiles: string
  name: string
  province: number
  sex: number
  source: number
}
const handleSelectionChange = (val:IData[]) => {
  emit('select',val)
}

</script>

<style scoped lang="scss">

</style>