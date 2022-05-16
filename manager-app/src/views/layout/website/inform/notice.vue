<template>
  <div class="notice-container">
    <el-card class="mycard">
      <template #header>
        <div class="fsc f1">
          <span>通知公告列表</span>
          <el-button type="primary" @click="$router.push('/website/inform/notice/noticeadd')"
            >添加</el-button
          >
        </div>
      </template>
      <div class="mytable">
        <el-table :data="noticeData" border style="width: 100%">
          <el-table-column property="title" label="标题" width="230" />
          <el-table-column property="type_name" label="分类" width="160" />
          <el-table-column property="time" label="发布时间" width="200">
            <template #default="{ row }">
              <div>{{ formatDate(new Date(row.create_time), 'yyyy-MM-dd') }}</div>
            </template>
          </el-table-column>
          <el-table-column property="readed" label="查看量" />
          <el-table-column property="source" label="状态">
            <template #default="{ row }">
              <div class="ss">
                <div
                  class="point"
                  :style="
                    row.status == 1
                      ? 'background: #51A1FC;'
                      : row.status == 2
                      ? 'background: #E40000;'
                      : 'background:#24BD13;'
                  "
                ></div>
                <span> {{ row.status == 1 ? '草稿' : row.status == 2 ? '离线' : '在线' }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template #default="{ row }">
              <div class="fcs">
                <el-link
                  type="primary"
                  @click="$router.push('/website/inform/notice/noticedetails?id=' + row.id)"
                  >查看</el-link
                >
                <div class="line"></div>
                <el-link v-if="row.status == 3" type="primary" @click="getNtDown(row.id)"
                  >下线</el-link
                >
                <el-link v-if="row.status == 2" type="primary" @click="getNtUp(row.id)"
                  >上线</el-link
                >
                <div v-if="row.status == 2 || row.status == 3" class="line"></div>
                <el-link
                  v-if="row.status == 2 || row.status == 1"
                  type="primary"
                  @click="$router.push('/website/inform/notice/noticeadd?id=' + row.id)"
                  >编辑</el-link
                >
                <div class="line"></div>
                <el-link
                  v-if="row.status == 2 || row.status == 1"
                  type="primary"
                  @click="getDel(row.id)"
                  >删除</el-link
                >
              </div>
            </template>
          </el-table-column>
           <template #empty>
            <MyEmpty />
          </template>
        </el-table>
      </div>
      <MyPage v-model:page="page" v-model:size="size" :total="total" @change="noticeList" />
      <MyDialog v-model="delShow" :msg="'此通知删除后无法撤回，请谨慎删除！'" @sure="getDelDate" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import MyPage from '@/components/MyPage.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import MyDialog from '@/components/MyDialog.vue'
import { notice_api, ntUp_api, ntDown_api, ntDel_api } from '@/api/website'

const size = ref(10)
const total = ref(0)
const page = ref(1)
interface SData {
  size: number
  current: number
}
const noticeData = ref<SData[]>([])
const noticeList = async () => {
  const res = await notice_api({
    current: page.value,
    size: size.value,
  })
  if (res.status == 1) {
    noticeData.value = res.body.records
    total.value = res.body.total
  }
}
noticeList()

// 上线
const upId = ref('')
const getNtUp = (id: string) => {
  upId.value = id
  getUp()
}

const getUp = async () => {
  const res = await ntUp_api({ id: upId.value }).then((res) => {
    if (res.status == 1) {
      noticeList()
    }
  })
}
// 下线
const DownId = ref('')
const getNtDown = (id: string) => {
  DownId.value = id
  getDown()
}
const getDown = async () => {
  const res = await ntDown_api({ id: DownId.value }).then((res) => {
    if (res.status === 1) {
      noticeList()
    }
  })
}
// 删除
const delId = ref('')
const delShow = ref(false)
const getDel = (id: string) => {
  delId.value = id
  delShow.value = true
}
const getDelDate = async () => {
  ntDel_api({ id: delId.value }).then((res) => {
    if (res.status === 1) {
      noticeList()
      delShow.value = false
    }
  })
}
</script>

<style scoped lang="scss">
.line {
  margin-left: -3px;
}

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
</style>
