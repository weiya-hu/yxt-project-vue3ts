<template>
  <div class="ad_data_details_page">
    <DetailsHeader />
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="tableList" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="name" label="称呼" />
          <el-table-column property="gender" label="性别">
            <template #default="{ row }">
              <div>{{ row.gender == 1 ? '男' : row.gender == 0 ? '未知' : '女' }}</div>
            </template>
          </el-table-column>
          <el-table-column property="mobiles" label="联系方式" />

          <el-table-column property="create_time" label="提交时间">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd hh:mm:ss') }}</div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty />
          </template>
        </el-table>
      </div>
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from '@/components/DetailsHeader.vue'
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { biddingDetail_api } from '@/api/dmp/findc'
import MyPage from '@/components/MyPage.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import { formatDate } from '@/utils/date'
import { useRoute } from 'vue-router'

const store = mainStore()
const route = useRoute()
const id = route.query.id as string

const page = ref(1)
const total = ref(0)
const size = ref(10)
const addressHash = ref(store.state.addressHash)

interface SData {
  size: number
  current: number
  id: string
}
const tableList = ref<SData[]>([])
const getList = async () => {
  const data = {
    current: page.value,
    size: size.value,
    id: route.query.id,
  }
  const res = await biddingDetail_api(data)
  if (res.status == 1) {
    tableList.value = res.body.records
    total.value = res.body.total
  }
}
getList()
</script>

<style scoped lang="scss">
.mycard {
  margin-top: 20px;
}
</style>
