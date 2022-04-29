<template>
  <div class="ad_data">
    <Search v-model="inputSearch" @search="searchword" @reset="resetSearch">
      <el-option label="全部" value="null" />
      <el-option label="待处理" value="1" />
      <el-option label="已受理" value="2" />
      <el-option label="被驳回" value="3" />
      <el-option label="已完成" value="4" />
    </Search>
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="adData" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="id" label="ID" />
          <el-table-column property="user_name" label="账户名" />
          <el-table-column property="company_name" label="客户名称" />
          <el-table-column property="group_name" label="人群名称" />
          <el-table-column property="group_desc" label="人群描述" />
          <el-table-column property="status" label="处理状态">
            <template #default="{ row }">
              <div class="fcs">
                <div class="status_dot" :class="getKzStatus(row.status).className"></div>
                <div>
                  {{ getKzStatus(row.status).text }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column property="count" label="覆盖用户人数" />
          <el-table-column property="money" label="消费金额（元）">
            <template #default="{ row }">
              <div>{{ Number(row.money).toFixed(2) }}</div>
            </template>
          </el-table-column>

          <el-table-column property="source" label="来源">
            <template #default="{ row }">
              <div>
                {{ getSource(row.source) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column property="create_time" label="创建日期">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="220">
            <template #default="{ row }">
              <div class="fcs">
                <el-link
                  v-if="row.status == 4"
                  type="primary"
                  @click="$router.push('/dmp/findc/addatadetail?id=' + row.id)"
                  >详情</el-link
                >
                <el-link
                  v-if="row.status == 1"
                  type="primary"
                  :href="row.attachment"
                  down-load="附件.zip"
                  >下载附件</el-link
                >
                <div v-if="row.status == 1 || row.status == 4" class="line"></div>
                <el-link v-if="row.status == 1" type="primary" @click="refuse(row.id)"
                  >驳回</el-link
                >
                <div v-if="row.status == 1" class="line"></div>
                <el-link v-if="row.status == 1" type="primary" @click="goPass(row.id)"
                  >通过</el-link
                >
                <el-link
                  v-if="row.status == 2 || row.status == 4"
                  type="primary"
                  @click="upUser(row.id)"
                  >上传客户</el-link
                >
                <el-link v-if="row.status == 3" type="primary" @click="goFail(row)"
                  >驳回原因</el-link
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="adList" />
      <Refuse v-model="refuseShow" @success="refuseSuccess" />
      <UpUser v-model="upUserShow" type="money" @success="upUserSuccess" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Search from '@/components/Search.vue'
import { formatDate } from '@/utils/date'
import MyPage from '@/components/MyPage.vue'
import { adList_api, adPass_api, adReject_api, adUp_api } from '@/api/dmp/findc'
import { ElMessageBox } from 'element-plus'
import Refuse from '@/components/Refuse.vue'
import UpUser from '@/components/UpUser.vue'
import { getKzStatus, getSource } from '@/utils/index'

const page = ref(1)
const total = ref(0)
const size = ref(10)
// 搜索
const inputSearch = reactive({
  userName: '',
  status: '',
  create_time: '',
})
// 查询
const searchword = () => {
  adList()
}
// 重置
const resetSearch = () => {
  ;(inputSearch.userName = ''), (inputSearch.status = ''), (inputSearch.create_time = '')
  adList()
}
interface SData {
  size: number
  current: number
  create_time: number
}
const adData = ref<SData[]>([])
const adList = async () => {
  const res = await adList_api({
    current: page.value,
    size: size.value,
    ...inputSearch,
    name: inputSearch.userName,
    startTime: inputSearch.create_time[0],
    endTime: inputSearch.create_time[1],
  })
  if (res.status === 1) {
    adData.value = res.body.records
    total.value = res.body.total
  }
}
adList()

//通过
const passId = ref('')
const goPass = (id: string) => {
  passId.value = id
  adPass()
}
const adPass = async () => {
  adPass_api({ id: passId.value }).then(() => {
    adList()
  })
}
//驳回按钮
const refuseShow = ref(false)
const upUserShow = ref(false)
const refuseId = ref()
const refuse = (id: string) => {
  refuseShow.value = true
  refuseId.value = id
}
//驳回组件点击确认后
const refuseSuccess = async (val: string) => {
  const data = {
    id: refuseId.value,
    fail_reason: val,
  }
  const { status, body } = await adReject_api(data)
  if (status) {
    refuseShow.value = false
    adList()
  }
}
// 驳回原因
const goFail = (row: any) => {
  ElMessageBox.confirm(row.fail_reason, '驳回原因', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
}

//上传客户按钮
const upUserId = ref('')
const upUser = (id: string) => {
  upUserShow.value = true
  upUserId.value = id
}

//上传客户点击确认，附件上传成功后
const upUserSuccess = async (val: any) => {
  const res = await adUp_api({ ...val, id: upUserId.value })
  if (res.status === 1) {
    adList()
  }
}
</script>

<style scoped lang="scss">
.mycard {
  margin-top: 10px;
}
</style>
