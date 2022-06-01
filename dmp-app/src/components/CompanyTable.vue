<template>
  <div class="mytable company_table" :style="{ height: `calc( 100% - ${oheight}px )` }">
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      height="100%"
      ref="tableRef"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column type="index" label="序号" width="60"/>
      <el-table-column property="name" label="企业名称">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:200px" class="fcc">{{scope.row.name}}</div>
            </template>
            <div class="els2">{{ scope.row.name }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column property="contact" label="联系人" width="80"/>
      <el-table-column property="mobiles" label="联系方式" width="110">
        <template #default="scope">
          <div v-html="scope.row.mobiles"></div>
        </template>
      </el-table-column>
      <el-table-column property="telephone" label="固定电话" width="120"/>
      <el-table-column property="industry_id" label="行业分类" width="100">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:100px" class="fcc">{{getHashStr(scope.row.industry_id,typeHash)}}</div>
            </template>
            <div class="els2">{{getHashStr(scope.row.industry_id,typeHash,'last')}}</div>
          </el-tooltip>
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
              <div style="width:200px" class="fcc">{{scope.row.address}}</div>
            </template>
            <div class="els2">{{ scope.row.address }}</div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column property="code" label="统一社会信用代码" width="165"/>
      <el-table-column property="url" label="企业官网">
        <template #default="scope">
          <el-tooltip effect="dark" placement="top">
            <template #content>
              <div style="width:100px">{{ scope.row.url }}</div>
            </template>
            <el-link type="primary" target="_blank" :href="scope.row.url" :underline="false"><span class="els2">{{ scope.row.url }}</span></el-link>
          </el-tooltip>
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
      <el-table-column property="company_type" label="企业类型" width="120" v-if="ctypeArr.length">
        <template #default="scope">
          <div>{{ ctypeArr.find(v => v.id == scope.row.company_type).name }}</div>
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
const ctypeArr = computed(() => store.state.companyType)

const props = withDefaults(defineProps<{
  data:any[]
  oheight?:number,
}>(),{
  oheight:126
})

interface IData {
  [propName: string]: any
}
const multipleSelection = ref<(string|number)[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val.map(v => v.id)
}

const tableRef = ref()
const clear = () => {
  multipleSelection.value = []
  tableRef.value.clearSelection()
}

defineExpose({
  selIdList : multipleSelection, // 选中的id数组
  clear // 清空选中及id数组
})

</script>

<style scoped lang="scss">
</style>