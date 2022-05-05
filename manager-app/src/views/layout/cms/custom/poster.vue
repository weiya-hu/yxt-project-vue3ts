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
              <el-link
                v-if="row.status == 2"
                type="primary"
                @click="imageEit(row.id, row.attach_url)"
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
                <el-link
                  v-if="row.attach_url"
                  type="primary"
                  class="fcss"
                  :href="row.attach_url"
                  down-load="附件.zip"
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
    <el-dialog v-model="dialogVisible" title="详情海报" width="500px">
      <div v-if="showImgs" class="img-dialog">
        <el-image
          v-for="(url, index) in showImgs"
          :key="url"
          style="width: 125px; height: 135px; margin-top: 10px"
          fit
          :src="url"
          :preview-src-list="showImgs"
          :initial-index="index"
        >
          <template #error>
            <div class="image-slot">
              <h3>暂无数据</h3>
            </div>
          </template>
        </el-image>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog
      v-model="addShow"
      title="编辑海报"
      width="510px"
      custom-class="upimgs"
      @close="close"
    >
      <el-form :model="addForm">
        <el-form-item label="海报上传" label-width="90px">
          <el-upload
            ref="upload"
            action="#"
            :auto-upload="false"
            :limit="9"
            :multiple="true"
            list-type="picture-card"
            :on-change="upChange"
            :on-preview="lookimgs"
            :on-remove="upRemove"
            :accept="imgTypes.join(',')"
            class="upbox"
          >
            <div class="fc fcc">
              <el-icon><Plus /></el-icon>
              <div class="file_name">点击上传</div>
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="uptext">
        图片尺寸16:9，建议尺寸：220*160≤尺寸≤1920*890；支持JPG、PNG 、JPEG等格式；一次最多上传9张
      </div>
      <div class="fcs btns fjend">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" :disabled="!imgs.length" @click="goSubmit">提交</el-button>
      </div>
    </el-dialog>
    <el-image-viewer
      v-if="imgShow"
      :url-list="showImgs"
      :initial-index="showImgIndex"
      @close="imgShow = false"
    />
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
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import Refuse from '@/components/Refuse.vue'
import axios from 'axios'
import { errMsg, okMsg } from '@/utils/index'
import { getAliToken_api } from '@/api/login'
import {
  posterList_api,
  articlePass_api,
  articleReject_api,
  articleAttach_api,
  articlePostersave_api,
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
const addForm = reactive({})
const loading = ref(false)
const size = ref(10)
const totle = ref(0)
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
// 重置
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
    status: 4,
  }
  const { status, body } = await articleReject_api(data)
  if (status) {
    refuseShow.value = false
    getList()
  }
}

// 图片详情
const dialogVisible = ref(false)
const showImgs = ref<string[]>([]) //预览图片列表
const look = async (id: string) => {
  const res = await articleDetail_api({ id })
  console.log(res)
  const arr: string[] = []
  if (res.status == 1) {
    showImgs.value = res.body.list
  }
  dialogVisible.value = true
}
// 编辑图片
const addShow = ref(false)
const imgs = ref<UploadFile[]>([])
const upload = ref() //上传组件ref
const imgShow = ref(false) //预览是否显示
const showImgIndex = ref(0) //首张预览图片
let filePath: string[] = [] //上传成功后的文件地址
const editId = ref('')
const imageEit = (id: string, urls: any[]) => {
  addShow.value = true
  editId.value = id
}
const imgTypes = ['.jpg', '.png', '.jpeg', '.JPG', '.PNG', '.JPEG']
const upChange = (file: UploadFile, fileList: UploadFile[]) => {
  if (!file.name) return
  const exname = file.name.substring(file.name.lastIndexOf('.'))
  if (imgTypes.indexOf(exname) == -1) {
    upload.value.handleRemove(file)
    errMsg('图片格式错误！')
    return
  }
  imgs.value = fileList
  if (imgs.value.length >= 9) {
    ;(document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'none'
  }
  console.log(imgs.value)
}
const upRemove = (file: UploadFile, fileList: UploadFile[]) => {
  imgs.value = fileList
  ;(document.querySelector('.el-upload--picture-card') as HTMLElement).style.display = 'inline-flex'
  console.log(imgs.value)
}
const lookimgs = (file: UploadFile) => {
  const arr: string[] = []
  imgs.value.forEach((v) => {
    arr.push(v.url!)
  })
  showImgs.value = arr
  showImgIndex.value = showImgs.value.findIndex((v) => v == file.url)
  imgShow.value = true
}
const close = () => {
  upload.value.clearFiles()
  addShow.value = false
  loading.value = false
  imgs.value = []
  showImgs.value = []
  imgShow.value = false
  showImgIndex.value = 0
  filePath = []
}
const upOneImg = async (file: UploadFile, order_id: string, urls: any[]) => {
  //上传单张图片
  const res: res = await getAliToken_api({ site: 'official_img' })
  if (res.status == 1) {
    const exname = file.name.substring(file.name.lastIndexOf('.'))
    const fd = new FormData()
    const upData = {
      key: res.body.dir + '/' + res.body.uuid + exname,
      OSSAccessKeyId: res.body.accessid,
      success_action_status: 200,
      policy: res.body.policy,
      signature: res.body.signature,
    }
    for (const [key, value] of Object.entries(upData)) {
      fd.append(key, value as string)
    }
    fd.append('file', file.raw as Blob)
    const response = await axios({
      url: res.body.host,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
      data: fd,
    })
    if (response.status == 200) {
      const oneUrl = res.body.host + '/' + res.body.dir + '/' + res.body.uuid + exname
      filePath.push(oneUrl)
      // const oneRes:res = await articlePostersave_api({rls: oneUrl,order_id:id})
      return Promise.resolve(oneUrl)
    }
    return Promise.reject(file.name + '上传失败')
  }
  return Promise.reject('获取上传配置失败')
}
const goSubmit = async (order_id: string, urls: any[]) => {
  loading.value = true
  try {
    for (let i = 0; i < imgs.value.length; i++) {
      const v = imgs.value[i]
      const url = await upOneImg(v, order_id, urls)
        .catch((err) => {
          throw new Error(err)
        })
        .then(() => {
          if (filePath.length == imgs.value.length) {
            articlePostersave_api({ urls: filePath, order_id: editId.value }).then((res: res) => {
              okMsg('上传成功')
              close()
              getList()
            })
          }
        })
    }
  } catch (error: any) {
    errMsg(error, 0)
    close()
    getList()
  }
}
// 列表
const getList = async () => {
  loading.value = true
  const res = await posterList_api({
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
export default { name: 'CustomPoster' }
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
  width: 112px;
  margin-left: 90px;
}
:deep(.el-upload-list__item) {
  width: 115px;
  height: 115px;
}
:deep(.el-upload--picture-card) {
  width: 115px;
  height: 115px;
}
:deep(.el-form-item__label) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
