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
//客户表格
import { ref,computed } from 'vue'
import MyEmpty from "@/components/MyEmpty.vue";
import { formatDate } from '@/utils/date'
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
  id:number,
  group_name:string,//人群名称
  group_desc:string,//人群描述
  status:number,//状态
  address:string,//地区
  count:number,//覆盖用户人数
  money:number,//消耗金额 (元)
  create_time:number,//创建日期
  plan_url:string,//附件地址
  source:number,//来源
  province:number,//省份
  city:number,//城市
  district:number,//区
  error?:string,//拒绝原因
}
const handleSelectionChange = (val:IData[]) => {
  emit('select',val)
}

</script>

<style scoped lang="scss">

</style>