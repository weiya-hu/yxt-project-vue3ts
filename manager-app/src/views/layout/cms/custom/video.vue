<template>
  <div class="mytable">
    <search v-model="inputSearch" @search="searchword" @reset="resetSearch">
      <el-option label="全部" value="null" />
      <el-option label="待处理" value="1" />
      <el-option label="已受理" value="2" />
      <el-option label="被驳回" value="3" />
      <el-option label="已完成" value="4" />
    </search>
    <el-card class="mycard mt20">
      <el-table
        v-loading="loading"
        :data="tableList"
        border
        style="width: 100%"
        row-class-name="my-data-table-row"
      >
        <MyDataTable
          v-for="(item, index) in tableTitle"
          :key="index"
          :type="item.type"
          :width="item.width"
          :lable="item.lable"
          :prop="item.prop"
        />
        <el-table-column width="150" label="操作">
          <template #default="{ row }">
            <div class="fcs">
              <el-link v-if="row.status == 2" type="primary" @click="videoEdit(row.id)"
                >编辑</el-link
              >
              <el-link
                v-if="row.status == 3"
                type="primary"
                @click=";(errorMsg = row.fail_reason), (errorShow = true)"
                >驳回原因</el-link
              >
              <el-link v-if="row.status == 4" type="primary" @click="look(row.id)">详情</el-link>
              <div v-if="row.status == 1">
                <el-link v-if="row.attach_url" type="primary" class="fcss" @click="getData(row.id)"
                  >下载附件</el-link
                >
                <el-link type="primary" class="fcss" @click="pass(row.id)">通过</el-link>
                <el-link type="primary" @click="refuse(row.id)">驳回</el-link>
              </div>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty />
        </template>
      </el-table>
      <MyPage v-model:page="page" v-model:size="size" :total="totle" @change="getList" />
    </el-card>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1" />
    <el-dialog v-model="dialogVisible" title="详情视频" width="500px">
      <div v-if="showImgs" class="img-dialog">
        <video
          v-for="url in showImgs"
          :key="url"
          style="width: 125px; height: 135px"
          cover
          :src="url"
          @click="lookVideo(url)"
        ></video>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="addShow" title="编辑视频" width="380px" @close="close">
      <el-form v-loading="upLoading" :model="addForm">
        <el-form-item label="视频上传" required label-width="90px">
          <MyUpload
            ref="upVideo"
            v-model="addForm.url"
            type="video"
            :max-size="200"
            :exname-list="exnameList1"
            :msg="'只能上传' + exnameList1.join('、') + '视频，不超过200M，推荐尺寸1280*720'"
            @error="upVideoError"
            @success="upSuccess"
          />
        </el-form-item>
        <div class="fcs btns fjend mt20">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" :disabled="!addForm.url" @click="goSubmit">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
    <Refuse v-model="refuseShow" @success="refuseSuccess" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import search from '@/components/Search.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyDialog from '@/components/MyDialog.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import MyUpload from '@/components/MyUpload.vue'
import Refuse from '@/components/Refuse.vue'
import { lookVideo, errMsg } from '@/utils/index'
import {
  videoList_api,
  articlePass_api,
  articleReject_api,
  articleAttach_api,
  articleVideosave_api,
  articleDetail_api,
} from '@/api/cms/custom'

const tableTitle = ref([
  { type: 'text', lable: '需求ID', prop: 'id', width: 120 },
  { type: 'text', lable: '账户名', prop: 'user_name', width: 120 },
  { type: 'text', lable: '客户名称', prop: 'company_name', width: 180 },
  { type: 'text', lable: '标题', prop: 'title', width: 150 },
  { type: 'text-tooltip', lable: '描述', prop: 'detail', width: 120 },
  { type: 'date', lable: '创建日期', prop: 'create_time', width: 110 },
  { type: 'status', lable: '状态', prop: 'status', width: 100 },
])
const loading = ref(false)
const upLoading = ref(false)
const exnameList1 = ['.mp4']
const totle = ref(0)
const size = ref(10)
const page = ref(1)
interface SData {
  id: number | string
  attach_url: string
  create_time: number
  status: number
  fail_reason?: string
}
const tableList = ref<SData[]>([])
const errorShow = ref(false)
const errorMsg = ref('')

const inputSearch = reactive({
  userName: '',
  status: '',
  create_time: '',
})
//  重置
const resetSearch = () => {
  ;(inputSearch.userName = ''), (inputSearch.status = ''), (inputSearch.create_time = '')
  getList()
}
// 搜索
const searchword = (val: any) => {
  page.value = 1
  getList()
}
// 通过
const pass = async (id: string | number) => {
  await articlePass_api({ id })
  getList()
}
// 驳回弹出框
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
  }
  const { status, body } = await articleReject_api(data)
  if (status) {
    refuseShow.value = false
    getList()
  }
}

// 下载附件
const getData = async (id: string) => {
  const res = await articleAttach_api({ id })
  if (res.status == 1) {
    window.location.href = res.body.attach_url
  }
}
// 图片详情
const dialogVisible = ref(false)
const showImgs = ref<string[]>([]) //视频列表
const look = async (id: string) => {
  const res = await articleDetail_api({ id })
  console.log(res)
  // let arr:string[] = []
  if (res.status == 1) {
    showImgs.value = res.body.list
  }
  dialogVisible.value = true
}
// 编辑视频
const editId = ref('')
const addShow = ref(false)
const addForm = reactive({
  url: '',
})
const upVideo = ref()
const videoEdit = (id: string) => {
  addShow.value = true
  editId.value = id
}
const upVideoError = (err: string) => {
  errMsg(err)
  loading.value = false
}
const close = () => {
  upLoading.value = false
  upVideo.value.clear()
  addShow.value = false
  getList()
}
const upSuccess = async (videoUrl: string) => {
  addForm.url = videoUrl
  const res = await articleVideosave_api({
    order_id: editId.value,
    url: addForm.url,
  })
  upLoading.value = false
  close()
  getList()
}
const goSubmit = async () => {
  upLoading.value = true
  upVideo.value.submit()
}
defineExpose({
  getData,
})
// 列表
const getList = async () => {
  loading.value = true
  const res = await videoList_api({
    size: size.value,
    current: page.value,
    ...inputSearch,
    startTime: inputSearch.create_time ? inputSearch.create_time[0] : null,
    endTime: inputSearch.create_time ? inputSearch.create_time[1] : null,
  })
  console.log(res)

  loading.value = false
  if (res.status == 1) {
    totle.value = res.body.total
    tableList.value = res.body.records
  }
}
getList()
</script>

<script lang="ts">
export default { name: 'CustomVideo' }
</script>
<style lang="scss" scoped>
.fcss {
  z-index: 20;
  margin-right: 6px;
}
.mycard {
  padding-top: 20px;
}
.img-dialog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
}
.uptext {
  display: block;
  width: 110px;
  height: 50px;
}
:deep(.videobox) {
  .el-dialog__body {
    padding: 0;
    height: calc(100% - 55px);
  }
}
.show_video {
  width: 100%;
  height: 100%;
}
.sel_pool {
  width: 100px;
  height: 100px;
  border: 1px dashed $colorddd;
  border-radius: 3px;
  .file_name {
    color: var(--el-text-color-regular);
    font-size: 12px;
    line-height: 12px;
    margin-top: 12px;
  }
  .fc {
    .el-icon {
      font-size: 28px;
      color: $colorddd;
    }
  }
  &:hover {
    border-color: $dfcolor;
    color: $dfcolor;
    cursor: pointer;
    .fc {
      .el-icon {
        color: $dfcolor;
      }
    }
    .file_name {
      color: $dfcolor;
    }
  }
  .poolbox {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .el-icon {
      color: #fff;
    }
    .lookicon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .videoicon {
      position: absolute;
      bottom: 50%;
      right: 50%;
      transform: translate(50%, 50%);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
