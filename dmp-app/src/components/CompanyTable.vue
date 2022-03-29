<template>
  <div class="mytable company_table">
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column type="index" label="序号" width="60"/>
      <el-table-column property="name" label="企业名称" />
      <el-table-column property="contact" label="联系人" width="80"/>
      <el-table-column property="mobiles" label="联系方式"  width="110"/>
      <el-table-column property="telephone" label="固定电话" width="120"/>
      <el-table-column property="industry_id" label="行业分类" width="100">
        <template #default="scope">
          <div>{{getHashStr(scope.row.industry_id,typeHash,'last')}}</div>
        </template>
      </el-table-column>
      <el-table-column property="city" label="地区" width="120">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:100px">{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
            </template>
            <div class="els2">{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column property="address" label="详细地址">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:200px">{{scope.row.address}}</div>
            </template>
            <div class="els2">{{ scope.row.address }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column property="code" label="统一社会信用代码" width="165"/>
      <el-table-column property="url" label="企业官网" >
        <template #default="scope">
          <el-link type="primary" target="_blank" :href="'//'+scope.row.url">{{ scope.row.url }}</el-link>
        </template>
      </el-table-column>
      <el-table-column property="business_scope" label="经营范围" width="200">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:200px">{{scope.row.business_scope}}</div>
            </template>
            <div class="els2">{{ scope.row.business_scope }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" width="100">
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
 * 公司表格
 * @author chn 
*/
import { ref,computed } from 'vue'
import { mainStore } from '@/store/index'
import { getHashStr,strToArr,getSource} from '@/utils/index'
import MyEmpty from "@/components/MyEmpty.vue";
const store = mainStore()
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)
const props = defineProps({
  data: Array,
})

interface IData {
  [propName: string]: any
}
const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

</script>

<style scoped lang="scss">
.company_table{
  :deep(.el-link.is-underline:hover:after){
    border-bottom: none;
  }
}
</style>