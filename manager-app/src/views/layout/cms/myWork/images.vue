<template>
  <div class="tel_data">
    <search v-model="inputSearch" @search="searchword" @reset="resetSearch">
      <el-option label="全部" value="null" />
      <el-option label="待审核" value="2" />
      <el-option label="已通过" value="3" />
      <el-option label="被驳回" value="4" />
    </search>
    <el-card class="mycard mt20">
      <div class="mytable">
        <el-table
          border
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column property="id" label="ID" width="178" align="center" />
          <el-table-column property="uname" label="账户名" width="152" align="center" />
          <el-table-column property="cname" label="客户名称" width="300" align="center" />
          <el-table-column property="thumb_url" label="图片" width="124" align="center">
            <template #default="{ row }">
              <img
                :src="row.thumb_url"
                alt=""
                class="firstimg"
                @click="lookImage([row.thumb_url], 0)"
              />
            </template>
          </el-table-column>
          <el-table-column property="create_time" label="创建日期" width="230" align="center">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
            </template>
          </el-table-column>
          <el-table-column property="status" label="状态" width="220" align="center">
            <template #default="{ row }">
              <div class="fcs fleximg">
                <div class="dot" :class="getStatus(row.status).className"></div>
                <div class="staus">{{ getStatus(row.status).text }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <div v-if="row.status == 3" class="fcs">
                <el-link type="primary" @click="lookImage([row.thumb_url], 0)">详情</el-link>
              </div>
              <div v-if="row.status == 2" class="fcs">
                <el-link type="primary" @click="pass(row.id)">通过</el-link>
                <div class="line"></div>
                <el-link type="primary" @click="refuse(row.id)">驳回</el-link>
              </div>
              <div v-if="row.status == 4" class="fcs">
                <el-link type="primary" @click=";(errorMsg = row.fail_reason), (errorShow = true)"
                  >驳回原因</el-link
                >
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty />
          </template>
        </el-table>
      </div>
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="getList" />
    </el-card>

    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1" />
    <Refuse v-model="refuseShow" @success="refuseSuccess" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from '@/components/MyEmpty.vue'
import search from '@/components/Search.vue'
import MyPage from '@/components/MyPage.vue'
import MyDialog from '@/components/MyDialog.vue'
import { lookImage } from '@/utils/index'
import Refuse from '@/components/Refuse.vue'
import { imagesList_api, imagesUpdate_api, imagesDetail_api } from '@/api/cms/myWork'
interface SData {
  id: number | string
  uname: string
  cname: string
  thumb_url: string
  create_time: number
  status: number
  fail_reason?: string
}
const tableData = ref<SData[]>([])
const page = ref(1)
const total = ref(0)
const size = ref(10)
// 搜索
const inputSearch = reactive({
  userName: '',
  status: '',
  create_time: '',
})
const searchword = () => {
  page.value = 1
  getList()
}
// 重置
const resetSearch = () => {
  ;(inputSearch.userName = ''), (inputSearch.status = ''), (inputSearch.create_time = '')
  getList()
}
//驳回组件
const refuseShow = ref(false)
const refuseId = ref()
const refuse = (id: string) => {
  refuseShow.value = true
  refuseId.value = id
}
const refuseSuccess = async (val: string) => {
  const data = {
    id: refuseId.value,
    fail_reason: val,
    status: 4,
  }
  const { status, body } = await imagesUpdate_api(data)
  if (status) {
    refuseShow.value = false
    getList()
  }
}

// 通过
const pass = async (id: string | number) => {
  await imagesUpdate_api({ id, status: 3, fail_reason: '' })
  getList()
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val: SData[]) => {
  //表格选择
  multipleSelection.value = val
}
// 获取列表
const getList = async () => {
  const res = await imagesList_api({
    size: size.value,
    current: page.value,
    ...inputSearch,
    startTime: inputSearch.create_time ? inputSearch.create_time[0] : null,
    endTime: inputSearch.create_time ? inputSearch.create_time[1] : null,
  })
  console.log(res)
  if (res.status == 1) {
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
const getStatus = (type: number) => {
  const obj = ref<{ text: string; className: string }>()
  switch (type) {
    case 2:
      obj.value = {
        text: '待审核',
        className: 'cred',
      }
      break
    case 3:
      obj.value = {
        text: '已通过',
        className: 'cdf',
      }
      break
    case 4:
      obj.value = {
        text: '被驳回',
        className: 'cyellow ',
      }
      break
    default:
      obj.value = {
        text: '草稿',
        className: 'cbbb',
      }
      break
  }
  return obj.value
}
const errorShow = ref(false)
const errorMsg = ref('')
</script>
<script lang="ts">
export default { name: 'MyworkImages' }
</script>

<style scoped lang="scss">
.tel_data {
  .firstimg {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
  .dot {
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .cbbb {
    background-color: $colorbbb;
  }
  .cyellow {
    background-color: #e70207;
  }
  .cdf {
    background-color: #38b227;
  }
  .cred {
    background-color: #fbc40d;
  }
}
.mycard {
  padding-top: 20px;
}
</style>
