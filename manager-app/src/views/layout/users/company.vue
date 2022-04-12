<template>
  <div class="company_page">
    <div class="ftitle">企业管理</div>
    <el-card class="mycard" header="企业列表">
      <div class="mytable">
        <el-table :data="tableData" border>
          <el-table-column prop="company_name" label="企业名称"/>
          <el-table-column prop="industry_id" label="所属行业" width="200">
            <template #default="{row}">
              <div>{{getHashStr(row.industry_id.split(','),typeHash,'last')}}</div>
            </template>
          </el-table-column>
          <el-table-column label="注册地">
            <template #default="{row}">
            <div>{{getHashStr(strToArr(row.province, row.city, row.district),addressHash)}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="legal_person" label="联系人"/>
          <el-table-column prop="contact" label="联系电话"/>
          <el-table-column property="user_name" label="认证用户"/>
          <el-table-column property="user_mobile" label="认证用户电话"/>
          <el-table-column property="status" label="认证状态">
            <template #default="{row}">
              {{row.status == 2 ? '认证中' : row.status == 3 ? '认证通过' : '认证失败'}}
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right">
            <template #default="{row}">
              <div class="fcs">
                <el-link type="primary" @click="$router.push('companydetails?id=' + row.id)">详细信息</el-link>
                <span class="line" v-if="row.status == 2"></span>
                <el-link type="primary" v-if="row.status == 2" @click="$router.push('companyreview?id=' + row.id)">认证审核</el-link>
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
      </div>
      <Mypage :total="total" v-model="page" @change="getList" :size="size"/>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getCompanyList_api, size } from '@/api/users'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr } from '@/utils/index'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const getList = async () => {
  const res = await getCompanyList_api({
    size,
    current: page.value,
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

</script>

<script lang="ts">
export default { name:'Company' }
</script>

<style scoped lang="scss">

</style>