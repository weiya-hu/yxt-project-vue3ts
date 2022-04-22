<template>
  <div class="feedback_page">
    <el-card class="mycard">
      <template #header>
        <div>反馈列表</div>
      </template>
      <div class="mytable">
        <el-table :data="tableData" border draggable>
          <el-table-column label="类型">
            <template #default="{ row }" v-if="statusType.length">{{statusType.find(v => v.id == row.feedback_type).feedback_type}}</template>
          </el-table-column>
          <el-table-column prop="content" label="反馈内容"/>
          <el-table-column prop="mobile" label="联系电话"/>
          <el-table-column prop="status" label="处理状态">
            <template #default="{ row }">
              <div class="fcs">
                <div class="status_dot" :class="row.status == 1 ? 'sdot_g' : 'sdot_r'"></div>
                <div>{{row.status == 1 ? '已处理' : '未处理'}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="fcs">
                <el-dropdown trigger="click" @command="setStatus">
                  <el-link type="primary">修改状态</el-link>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item :command="[1, row.id]">已处理</el-dropdown-item>
                      <el-dropdown-item :command="[0, row.id]">未处理</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <div class="line"></div>
                <el-link type="primary" @click="del(row.id)">删除</el-link>
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
      </div>
      <MyPage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
    </el-card>
    <MyDialog v-model="delShow" :msg="'此反馈记录删除后无法撤回，请谨慎删除！'" @sure="sureDel"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getFeedBackList_api, setFeedBackStatus_api, delFeedBackStatus_api, getFeedBackType_api } from '@/api/website/service'
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";
import MyPage from "@/components/MyPage.vue";

const statusType = ref<any[]>([])
const getType = async () => {
  const { status, body } = await getFeedBackType_api()
  if(status == 1){
    statusType.value = body
  }
}
getType()

const tableData = ref<any[]>([])
const page = ref(1)
const size = ref(20)
const total = ref(0)
const getList = async () => {
  const { status, body } = await getFeedBackList_api({
    size: size.value,
    current: page.value
  })
  if(status == 1){
    total.value = body.total
    tableData.value = body.records
  }
}
getList()

const setStatus = async (arr:[0|1,string|number]) => {
  const { status } = await setFeedBackStatus_api({
    id: arr[1],
    status: arr[0]
  })
  if(status == 1){
    getList()
  }
}

const delId = ref<string|number>('')
const delShow = ref(false)
const del = (id:number|string) => {
  delId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const res = await delFeedBackStatus_api({ id:delId.value })
  if(res.status == 1){
    delShow.value = false
    getList()
  }
}

</script>

<style scoped lang="scss">

</style>