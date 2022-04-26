<template>
  <div class="phone_data">
    <Search v-model="inputSearch" @search="searchword" @reset="resetSearch">
      <el-option label="全部" value="-1" />
      <el-option label="待处理" value="0" />
      <el-option label="已受理" value="1" />
      <el-option label="已完成" value="2" />
      <el-option label="被驳回" value="3" />
    </Search>
    <el-card class="mycard">
      <div class="mytable">
        <el-table :data="phoneData" border>
          <el-table-column type="selection" width="50" />
          <el-table-column property="id" label="ID" />
          <el-table-column property="user_name" label="账户名" />
          <el-table-column property="company_name" label="客户名称" />
          <el-table-column property="group_name" label="人群名称" />
          <el-table-column property="group_desc" label="人群描述" />
          <el-table-column property="status" label="处理状态">
            <template #default="{ row }">
              <div class="fcs ss">
                <div
                  class="point"
                  :style="
                    row.status == 0
                      ? 'background:#FFBF00'
                      : row.status == 1
                      ? 'background:#24BD13'
                      : row.status == 2
                      ? 'background:#2D68EB'
                      : 'background:#E40000'
                  "
                ></div>
                <div>
                  {{
                    row.status == 0
                      ? '待处理'
                      : row.status == 1
                      ? '已受理'
                      : row.status == 2
                      ? '已完结'
                      : '被驳回'
                  }}
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
                {{ sourceObj[row.source] && sourceObj[row.source] }}
              </div>
            </template>
          </el-table-column>
          <el-table-column property="create_time" label="创建日期">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="220" fixed="right">
            <template #default="{ row }">
              <div class="fcc">
                <el-link
                  v-if="row.status == 2"
                  type="primary"
                  @click="$router.push('/dmp/findc/teldatadetail?id=' + row.id)"
                  >详情</el-link
                >
                <el-link
                  v-if="row.status == 0"
                  type="primary"
                  :href="row.attachment"
                  down-load="附件.zip"
                  >下载附件</el-link
                >
                <div v-if="row.status == 0 || row.status == 2" class="line"></div>
                <el-link v-if="row.status == 0" type="primary" @click="refuse(row.id)"
                  >驳回</el-link
                >
                <div v-if="row.status == 0" class="line"></div>
                <el-link v-if="row.status == 0" type="primary" @click="goPass(row.id)"
                  >通过</el-link
                >
                <el-link
                  v-if="row.status == 1 || row.status == 2"
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
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="phoneList" />
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
import { phoneList_api, phonePass_api, phoneReject_api, phoneUp_api } from '@/api/dmp/findc'
import { ElMessageBox } from 'element-plus'
import Refuse from '@/components/Refuse.vue'
import UpUser from '@/components/UpUser.vue'
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
  phoneList()
}
// 重置
const resetSearch = () => {
  ;(inputSearch.userName = ''), (inputSearch.status = ''), (inputSearch.create_time = '')
  phoneList()
}
interface SData {
  size: number
  current: number
  create_time: number
}
const phoneData = ref<SData[]>([])
const phoneList = async () => {
  const res = await phoneList_api({
    current: page.value,
    size: size.value,
    ...inputSearch,
    name: inputSearch.userName,
    startTime: inputSearch.create_time[0],
    endTime: inputSearch.create_time[1],
  })
  if (res.status === 1) {
    phoneData.value = res.body.records
    total.value = res.body.total
  }
}
phoneList()

//通过
const passId = ref('')
const goPass = (id: string) => {
  passId.value = id
  phonePass()
}
const phonePass = async () => {
  phonePass_api({ id: passId.value }).then(() => {
    phoneList()
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
  const { status, body } = await phoneReject_api(data)
  if (status) {
    refuseShow.value = false
    phoneList()
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
  const res = await phoneUp_api({ ...val, id: upUserId.value })
  if (res.status === 1) {
    phoneList()
  }
}
</script>

<style scoped lang="scss">
.ss {
  margin: 20px 0;
  font-size: 14px;
  .point {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #24bd13;
    border-radius: 50%;
    margin: 7px 15px 3px 0;
  }
}
.mycard {
  margin-top: 10px;
}
</style>
