<template>
  <div class="specific_data">
    <Search v-model="inputSearch" @search="searchword" @reset="resetSearch">
      <el-option label="全部" :value="null" />
      <el-option label="待处理" :value="1" />
      <el-option label="已受理" :value="2" />
      <el-option label="被驳回" :value="3" />
      <el-option label="已完成" :value="4" />
    </Search>
    <div class="specific_data-content">
      <div class="mytable-data">
        <el-table
          v-loading="loading"
          :data="tableList"
          size="small"
          row-class-name="my-data-table-row"
          :border="true"
        >
          <MyDataTable
            v-for="(item, index) in tableTitle"
            :key="index"
            :type="item.type"
            :width="item.width"
            :lable="item.lable"
            :prop="item.prop"
          />
          <el-table-column fixed="right" property="operate" label="操作" width="200" align="center">
            <template #default="{ row }">
              <div class="operate-button-pre">
                <el-link  v-if="row.status === 1"  type="primary"  :href="row.attachment"  down-load="附件.zip">下载附件</el-link>
                <el-link v-if="row.status === 1" type="primary" @click="refuse(row)">驳回</el-link>
                <el-link v-if="row.status === 1" type="primary" @click="pass(row)">通过</el-link>
                <el-link  v-if="row.status === 2 || row.status === 4"  type="primary"  @click="upUser(row)"  >上传客户</el-link>
                <el-link v-if="row.status === 3" type="primary" @click="reason(row)" >驳回原因</el-link>
                <el-link  v-if="row.status === 4"  type="primary"  @click="$router.push('/dmp/findb/specificdatadetails?id=' + row.id)"  >详情</el-link  >
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty />
          </template>
        </el-table>
      </div>
      <div class="flexr">
        <Mypage
          v-if="total"
          v-model:page="page"
          v-model:size="size"
          :total="total"
          @change="getList"
        />
      </div>
    </div>
    <Refuse v-model="refuseShow" @success="refuseSuccess" />
    <UpUser v-model="upUserShow" @success="upUserSuccess" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  // eslint-disable-next-line camelcase
  businessDemand_api,
  // eslint-disable-next-line camelcase
  businessDemandPass_api,
  // eslint-disable-next-line camelcase
  businessDemandReject_api,
  businessUpload,
} from '@/api/dmp/findb'
import Mypage from '@/components/Mypage.vue'
import Search from '@/components/Search.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import Refuse from '@/components/refuse.vue'
import UpUser from '@/components/UpUser.vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

const total = ref(0)
const page = ref(1)
const size = ref(10)
const createTime = ref()
const loading = ref(false)
const refuseShow = ref(false)
const upUserShow = ref(false)
const refuseId = ref()
const upUserId = ref()
const inputSearch = reactive({
  userName: '',
  status: '',
  // eslint-disable-next-line camelcase
  create_time: [],
})
const tableTitle = ref([
  { type: 'text', lable: 'ID', prop: 'id', width: 100 },
  { type: 'text', lable: '账户名', prop: 'u_name', width: 100 },
  { type: 'text', lable: '客户名称', prop: 'c_name', width: 150 },
  { type: 'industry_id', lable: '行业分类', prop: 'industry_id', width: 120 },
  { type: 'city_id', lable: '地区', prop: 'city', width: 100 },
  { type: 'text', lable: '人群名称', prop: 'group_name', width: 150 },
  { type: 'text-tooltip', lable: '人群描述', prop: 'group_desc', width: 220 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 110 },
  { type: 'status_do', lable: '状态', prop: 'status', width: 100 },
])
// let tableList = ref([
//   {id: 6,industry_id: "A,04,042",u_name:'123',c_name:'drer',city: 510100,province:510000,district:510117, group_name: "测试1",group_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:0},
//   {id: 6,industry_id: "A,04,042",u_name:'',c_name:'ghgfh',city: 510100,province:510000,district:510117,group_name: "测试1",group_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:1},
//   {id: 6,industry_id: "A,04,042",u_name:'',c_name:'vbcvb',city: 110000,province:110000,district:110101,group_name: "测试1",group_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:2},
//   {id: 6,industry_id: "A,04,042",u_name:'',c_name:'bcvbcvb',city: 110000,province:110000,district:110101,group_name: "测试1",group_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:3},
// ])
const tableList = ref([])

const searchword = () => {
  page.value = 1
  getList()
}

const getList = async () => {
  loading.value = true
  const data = {
    current: page.value,
    size: size.value,
    createTime: createTime.value,
    name: inputSearch.userName,
    status: inputSearch.status,
    startTime: inputSearch.create_time ? inputSearch.create_time[0] : null,
    endTime: inputSearch.create_time ? inputSearch.create_time[1] : null,
  }
  const { status, body } = await businessDemand_api(data)
  loading.value = false
  if (status) {
    tableList.value = body.records
    total.value = body.total
  }
}
getList()
// 重置
const resetSearch = () => {
  // eslint-disable-next-line camelcase
  ;(inputSearch.userName = ''), (inputSearch.status = ''), (inputSearch.create_time = [])
}
//通过按钮
const pass = async (row: any) => {
  ElMessageBox.confirm(`是否确认通过(ID：${row.id})需求?`, '操作提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'success',
  }).then(async () => {
    const data = { id: row.id }
    const { status } = await businessDemandPass_api(data)
    status && getList()
  })
}
//驳回原因按钮
const reason = (row: any) => {
  ElMessageBox.confirm(row.fail_reason, '驳回原因', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
}
//驳回按钮
const refuse = (row: any) => {
  refuseShow.value = true
  refuseId.value = row.id
}
//驳回组件点击确认后
const refuseSuccess = async (val: string) => {
  const data = {
    id: refuseId.value,
    // eslint-disable-next-line camelcase
    fail_reason: val,
  }
  const { status, body } = await businessDemandReject_api(data)
  if (status) {
    refuseShow.value = false
    getList()
  }
}

//上传客户按钮
const upUser = (row: any) => {
  upUserShow.value = true
  upUserId.value = row.id
}

//上传客户点击确认，附件上传成功后
const upUserSuccess = async (val: any) => {
  const { status } = await businessUpload({ ...val, demand_id: upUserId.value })
  status && getList()
}
</script>

<script lang="ts">
export default { name: 'SpecificData' }
</script>

<style scoped lang="scss">
.specific_data {
  .top-search {
    width: 100%;
    padding: 20px;
    background: #ffffff;
    border: 1px solid rgba(221, 221, 221, 1);
    border-radius: 4px;
  }
  .mytable-data {
    .operate-button-pre {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 0 15px;
      :deep(.el-link) {
        margin-right: 20px;
      }
    }
    .operate-button-pre > :deep(.el-link):last-child {
      margin-right: 0;
    }
  }

  .specific_data-content {
    margin-top: 16px;
    background: #ffffff;
    padding: 24px;
    border: 1px solid rgba(221, 221, 221, 1);
  }
}
</style>
