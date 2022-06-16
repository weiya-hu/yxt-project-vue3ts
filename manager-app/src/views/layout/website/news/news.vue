<template>
  <div class="news-container">
    <div class="ftitle">资讯中心</div>
    <div class="news-handle">
      <el-button class="bdc_btn" @click="drawer2 = true">分类管理</el-button>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="点击将更新从第三方获取的资讯"
        placement="bottom-end"
      >
        <el-button class="bdc_btn update">
          数据源更新
          <img :src="tips" alt="" class="img-tips1" />
        </el-button>
      </el-tooltip>
      <el-button type="primary" @click="$router.push('/website/news/newsadd')">添加</el-button>
    </div>
    <div class="news-search">
      <el-card class="mycard">
        <el-form
          ref="manageRef"
          :inline="true"
          label-position="right"
          :model="newsForm"
          class="demo-form-inline"
          label-width="120px"
          style="max-width: 1250px"
        >
          <div class="topitems">
            <el-form-item label="关键字：" prop="keyword">
              <el-input v-model="newsForm.keyword" placeholder="输入搜索" maxlength="36" />
            </el-form-item>
            <el-form-item label="作者：" prop="author">
              <el-input v-model="newsForm.author" placeholder="输入搜索" maxlength="36" />
            </el-form-item>
            <el-form-item label="分类：" prop="type_id">
              <el-select v-model="newsForm.type_id" placeholder="请选择">
                <el-option
                  v-for="item in draTypeDate"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="状态：" prop="reslut">
              <el-select v-model="newsForm.reslut" placeholder="请选择" @change="getPass">
                <el-option label="草稿" value="0" />
                <el-option label="审核中" value="1" />
                <el-option label="驳回" value="2" />
                <el-option label="已通过" value="-1" />
              </el-select>
            </el-form-item>
            <el-form-item label="审核结果：">
              <el-select
                v-model="searchStatus"
                placeholder="请选择"
                :disabled="Number(newsForm.reslut) != -1"
                @change="changeStatus"
              >
                <el-option label="离线" value="3" />
                <el-option label="在线" value="4" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <div class="check-btns">
                <el-button type="primary" class="btns" @click="wordSearch">查询</el-button>
                <el-button class="bdc_btn" @click="resetForm()">重置</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="news-content">
      <el-card class="mycard" header="资讯列表">
        <template #header>
          <div class="fsc f1">
            <span>资讯列表</span>
            <div class="news-tips">
              <span>线上咨讯：{{ statisticsDate.online }}</span>
              <span>待审核：{{ statisticsDate.audit }}</span>
              <span>今日新增：{{ statisticsDate.increase }}</span>
            </div>
          </div>
        </template>
        <div class="mytable">
          <el-table :data="newsData" border>
            <el-table-column property="title" label="文章标题" width="230" />
            <el-table-column property="creator_name" label="作者" width="180" />
            <el-table-column property="type_name" label="分类" width="160" />
            <el-table-column property="create_time" label="创建时间" width="200">
              <template #default="{ row }">
                <div>{{ formatDate(new Date(Number(row.create_time)), 'yyyy-MM-dd') }}</div>
              </template>
            </el-table-column>
            <el-table-column property="readed" label="查看量" />
            <el-table-column property="collectioned" label="收藏量" />
            <el-table-column property="shared" label="分享数" />
            <el-table-column property="commented" label="评论数" />
            <el-table-column property="source" label="审核结果" width="120">
              <template #default="{ row }">
                <div class="ss">
                  <div
                    class="point"
                    :style="
                      row.state == 1
                        ? 'background:#FFB700'
                        : row.state == 2
                        ? 'background:#E40000'
                        : row.state == 0
                        ? 'background:#51A1FC'
                        : 'background:#24BD13'
                    "
                  ></div>
                  <span>{{
                    row.state == 1
                      ? '审核中'
                      : row.state == 2
                      ? '驳回'
                      : row.state == 0
                      ? '草稿'
                      : '已通过'
                  }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="source" label="状态">
              <template #default="{ row }">
                <div class="ss">
                  <div
                    class="point"
                    :style="row.state == 4 ? 'background: #24BD13;' : 'background:#E40000;'"
                  ></div>
                  <span> {{ row.state == 4 ? '在线' : '离线' }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200" align="center">
              <template #default="{ row }">
                <div class="fcs">
                  <el-link
                    v-if="row.state != 0"
                    type="primary"
                    @click="$router.push('/website/newsdetails?id=' + row.id)"
                    >查看</el-link
                  >

                  <div class="line" v-if="row.state != 0"></div>
                  <el-link v-if="row.state == 4" type="primary" @click="getNewsDown(row.id)"
                    >下线</el-link
                  >
                  <el-link v-if="row.state == 3" type="primary" @click="getNewsUp(row.id)"
                    >上线</el-link
                  >
                  <el-link
                    v-if="row.state == 1"
                    type="primary"
                    @click="$router.push('/website/examine?id=' + row.id)"
                    >审核</el-link
                  >
                  <div class="line" v-if="row.state != 0"></div>
                  <el-link
                    v-if="row.state == 0 || row.state == 3"
                    type="primary"
                    @click="$router.push('/website/news/newsadd?id=' + row.id)"
                    >编辑</el-link
                  >
                  <div class="line"></div>
                  <el-link
                    v-if="row.state == 2 || row.state == 3 || row.state == 0"
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
        <MyPage v-model:page="page" v-model:size="size" :total="total" @change="newsList" />
        <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="getDelDate" />
        <MyDialog
          v-model="newsDelShow"
          :msg="'确认删除分类 “ ' + typeName + ' ” ?'"
          @sure="newsDel"
        />
        <el-dialog v-model="editShow" title="修改名称" width="380px" @close="typeName = ''">
          <el-input v-model="typeName" placeholder="请输入新闻分类名称" />
          <div class="fcs btns fjend mt20">
            <el-button @click="editShow = false">取消</el-button>
            <el-button type="primary" :disabled="!typeName" @click="sureEdit">提交</el-button>
          </div>
        </el-dialog>
      </el-card>
    </div>
    <div class="type-tips">
      <el-drawer v-model="drawer2" :direction="direction" size="480px">
        <template #title>
          <div class="tips-nav">分类管理</div>
        </template>
        <template #default>
          <div class="fjend">
            <el-button type="primary" class="bdc_btn type-add" plain @click="typeAdd"
              >添加</el-button
            >
          </div>
          <div class="dragbox">
            <div v-if="addBox" class="typeAdd">
              <el-input v-model="typeName" class="type-input" clearable="true" />
              <div class="cz">
                <el-button type="primary" class="bdc_btn" plain @click="remove">取消</el-button>
                <el-button type="primary" class="" @click="typeComfirm">确认</el-button>
              </div>
            </div>
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <div v-for="v in typeDate.filter((v:any) => v.top == 1)" class="items">
              <div class="txt">{{ v.name }}</div>
            </div>
            <draggable
              v-model="draTypeDate"
              tag="transition-group"
              item-key="id"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <template #item="{ element }">
                <div class="items">
                  <div class="txt">{{ element.name }}</div>
                  <div class="handle">
                    <div class="fcs fjend imgicon">
                      <el-tooltip effect="dark" content="修改名称" placement="bottom">
                        <el-icon
                          class="chover"
                          size="18px"
                          margin-right="5px"
                          @click="editName(element)"
                          ><edit
                        /></el-icon>
                      </el-tooltip>
                      <el-tooltip effect="dark" content="删除" placement="bottom">
                        <el-icon
                          class="chover"
                          size="18px"
                          margin-right="5px"
                          @click="delName(element)"
                          ><delete
                        /></el-icon>
                      </el-tooltip>
                      <el-tooltip effect="dark" content="拖拽" placement="bottom">
                        <el-icon class="chover" size="18px" margin-right="5px" @change="changeDrag"
                          ><img :src="drag_a" alt=""
                        /></el-icon>
                      </el-tooltip>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </template>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">取消</el-button>
            <el-button type="primary" @click="confirmClick">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { formatDate } from '@/utils/date'
import MyPage from '@/components/MyPage.vue'
import MyEmpty from '@/components/MyEmpty.vue'
import MyDialog from '@/components/MyDialog.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import drag_a from '@/assets/images/drag.png'
import tips from '@/assets/images/news-tips.png'
import draggable from 'vuedraggable'

import {
  news_api,
  statistics_api,
  typeList_api,
  newsUp_api,
  newsDown_api,
  newsDel_api,
  newsTypeAdd_api,
  newsTypeDel_api,
  newsNameEdit_api,
} from '@/api/website'

const page = ref(1)
const total = ref(0)
const size = ref(10)
interface SData {
  size: number
  current: number
  creator_name: string
  keyword: string
  state: number
}
const newsForm = reactive({
  keyword: '',
  author: '',
  type_id: '',
  status: '',
  reslut: '',
})
const searchStatus = ref('')
const getPass = (val: string) => {
  val === '-1' ? (newsForm.status = '3') : (newsForm.status = '')
  searchStatus.value = newsForm.status
}
const changeStatus = (val: string) => {
  newsForm.status = val
}

const newsData = ref<SData[]>([])
const newsList = async () => {
  const res = await news_api({
    current: page.value,
    size: size.value,
    ...newsForm,
  })
  if (res.status === 1) {
    newsData.value = res.body.records
    total.value = res.body.total
  }
}
newsList()
const wordSearch = () => {
  if (newsForm.reslut !== '-1') {
    newsForm.status = newsForm.reslut
  }
  newsList()
}
const statisticsDate = ref<any>({})
const statisticsList = async () => {
  const res = await statistics_api()
  if (res.status === 1) {
    statisticsDate.value = res.body
  }
}
statisticsList()
const typeId = ref<any>({})
const typeName = ref<any>('')
const typeDate = ref<any>({})
const draTypeDate = ref<any>({})
const typeList = async () => {
  const res = await typeList_api()
  if (res.status === 1) {
    typeDate.value = res.body
    draTypeDate.value = typeDate.value.filter((v: any) => v.top == 2)
  }
}

typeList()

const manageRef = ref<any>({})
const resetForm = () => {
  manageRef.value.clearValidate()
  manageRef.value.resetFields()
  searchStatus.value = ''
}

// 分类管理
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('fl')

function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  // ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`
  drawer2.value = false
}
// 分类管理拖拽
const drag = ref(false)
const dragOptions = {
  animation: 200,
  ghostClass: 'ghost',
  disabled: false,
}
const changeDrag = () => {
  console.log('执行拖拽')
}
const addBox = ref(false)
//添加按钮
const typeAdd = () => {
  addBox.value = true
}
const remove = () => {
  addBox.value = false
}
const typeComfirm = async () => {
  const res = await newsTypeAdd_api({ name: typeName.value })
  if (res && res.status === 1) {
    typeList()
    addBox.value = false
    typeName.value = ''
  }
}

const newsDelShow = ref(false)
const delName = (newsType: any) => {
  typeId.value = newsType.id
  typeName.value = newsType.name
  newsDelShow.value = true
}
const newsDel = async () => {
  const res = await newsTypeDel_api({ id: typeId.value })
  if (res.status === 1) {
    newsDelShow.value = false
    typeList()
  }
}

const editShow = ref(false)
const editName = (newsType: any) => {
  typeId.value = newsType.id
  typeName.value = newsType.name
  editShow.value = true
}
const sureEdit = async () => {
  const { status } = await newsNameEdit_api({
    id: typeId.value,
    name: typeName.value,
  })
  if (status === 1) {
    editShow.value = false
    typeList()
  }
}

// 上下线操作
const DownId = ref('')
const getNewsDown = (id: string) => {
  DownId.value = id
  newsDown()
}
const newsDown = async () => {
  const res = await newsDown_api({ id: DownId.value }).then((res) => {
    if (res.status === 1) {
      newsList()
    }
  })
}
const upId = ref('')
const getNewsUp = (id: string) => {
  upId.value = id
  newsUp()
}
const newsUp = async () => {
  const res = await newsUp_api({ id: upId.value }).then((res) => {
    if (res.status === 1) {
      newsList()
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
  newsDel_api({ id: delId.value }).then((res) => {
    if (res.status === 1) {
      newsList()
      delShow.value = false
    }
  })
}
</script>

<style scoped lang="scss">
.news-handle {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 20px;
  img {
    margin-left: 5px;
  }
}

.news-content {
  // padding: 20px;
  .news-tips {
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
    span {
      margin-left: 15px;
    }
  }
}
.line {
  margin-left: -3px;
}
.news-search {
  // padding: 20px;
  margin-bottom: 16px;
}
.topitems {
  margin-top: 25px;
  // width: 1250px;
  .el-input {
    width: 250px;
  }
  .el-select--default {
    width: 250px;
  }

  :deep(.el-select) {
    width: 250px;
  }
  .check-btns {
    display: flex;
    margin-left: 50px;
    width: 1200px;
  }
}

//侧边分类弹窗
.type-tips {
  position: relative;
  :deep(.el-drawer__header) {
    height: 52px;
    background: #dddddd;
    padding: 0;
    margin-bottom: 0;
    .tips-nav {
      margin-left: 24px;
      font-size: 16px;
      font-weight: 500;
      color: #333333;
    }
  }
}
.bbtns {
  position: absolute;
  top: 70px;
  right: 24px;
  .type-add {
    width: 80px;
  }
}
.dragbox {
  padding: 10px;
  // width: 72%;
  .typeAdd {
    // width: 150%;
    height: 56px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #2d68eb;
    margin-bottom: 8px;
    line-height: 56px;
    display: flex;
    flex-direction: row;
    .type-input {
      margin: 13px;
      width: 240px;
      height: 40px;
      background: #ffffff;
      border-radius: 2px;
    }
  }
  .items {
    // width: 372px;
    // width: 150%;
    height: 56px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #dddddd;
    margin-bottom: 8px;
    line-height: 56px;
    display: flex;
    flex-direction: row;
    &:hover {
      border: 1px solid #2d68eb;
    }
    .txt {
      margin-left: 8px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    .handle {
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: flex-end;
      :deep(.el-icon) {
        margin-right: 8px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
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
.update {
  position: relative;
  width: 120px;
  .img-tips1 {
    top: 7px;
    right: 7px;
  }
}
</style>
