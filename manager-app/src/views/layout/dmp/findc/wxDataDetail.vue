<template>
  <div class="wx_data_details_page">
    <DetailsHeader />
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="tableList" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="wechat_id" label="微信号" />
          <el-table-column property="avatar_url" label="头像">
            <template #default="{ row }">
              <img :src="row.avatar_url" alt="" />
            </template>
          </el-table-column>
          <el-table-column property="nick_name" label="昵称" />
          <el-table-column property="gender" label="性别">
            <template #default="{ row }">
              <div>{{ row.gender == 1 ? '男' : row.gender == 0 ? '未知' : '女' }}</div>
            </template>
          </el-table-column>
          <el-table-column property="phone_number" label="联系方式" />
          <el-table-column property="city_id" label="地区">
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
          <el-table-column property="signature" label="个性签名" />
          <el-table-column property="create_time" label="上传日期">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
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
import { getHash, getHashStr, strToArr } from '@/utils/index'
import { mainStore } from '@/store/index'
import { wxDetail_api } from '@/api/dmp/findc'
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
  const res = await wxDetail_api(data)
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
