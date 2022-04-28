<template>
  <div class="ad_data_details_page">
    <DetailsHeader />
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="tableList" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="mobiles" label="联系方式" />
          <el-table-column property="city_id" label="归属地">
            <template #default="{ row }">
              <el-tooltip effect="dark" placement="top">
                <template #content>
                  <div style="width: 100px">
                    {{
                      row.province > 0 &&
                      getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                    }}
                  </div>
                </template>
                <div>
                  {{
                    row.province > 0 &&
                    getHashStr(strToArr(row.province, row.city, row.district), addressHash)
                  }}
                </div>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column property="create_time" label="发送时间">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd hh:mm:ss') }}</div>
            </template>
          </el-table-column>
          <el-table-column property="source" label="来源">
            <template #default="{ row }">
              <div>
                {{ sourceObj[row.source] && sourceObj[row.source] }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from '@/components/DetailsHeader.vue'
import { mainStore } from '@/store/index'
import { segmentDetail_api } from '@/api/dmp/findc'
import MyPage from '@/components/MyPage.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import { formatDate } from '@/utils/date'
import { useRoute } from 'vue-router'
import { getHash, getHashStr, strToArr } from '@/utils/index'

const sourceObj = {
  1: '康州数智',
  2: '第三方数据',
  3: '号码段',
  4: '广告投放',
  5: '微信好友',
  6: '百度关键词',
  7: '大数据获客',
  8: '400获客',
  9: '竞价获客',
  10: '短信获客',
}
const store = mainStore()
const route = useRoute()
const id = route.query.id as string
const addressHash = ref(store.state.addressHash)

const page = ref(1)
const total = ref(0)
const size = ref(10)

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
  const res = await segmentDetail_api(data)
  if (res.status === 1) {
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
