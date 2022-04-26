<template>
  <div class="article_details">
    <DetailsHeader />
    <div class="content">
      <div class="title">{{ body.title }}</div>
      <div class="nav-tips">
        <span>分类：{{ body.type_name }}</span>
        <span>查看量：{{ body.readed }}</span>
        <span>{{ formatDate(new Date(Number(body.create_time)), 'yyyy-MM-dd hh:mm:ss') }}</span>
        <div class="ss" v-if="body.status != 0">
          <div
            class="point"
            :style="body.status == 2 ? 'background: #E40000;' : 'background:#24BD13;'"
          ></div>
          <span> {{ body.status == 2 ? '在线' : '离线' }}</span>
        </div>
        <div class="btns">
          <el-button v-if="body.status == 1" class="bdc_btn" @click="getUp">上线</el-button>
          <el-button v-if="body.status == 2" class="bdc_btn" @click="getDown">下线</el-button>
          <el-button
            v-if="body.status == 1 || body.status == 0"
            class="bdc_btn"
            @click="
              path === 'dynamic'
                ? $router.push('/website/inform/dynamic/dynamicadd?id=' + id)
                : $router.push('/website/inform/notice/noticeadd?id=' + id)
            "
            >编辑</el-button
          >
          <el-button class="bdc_btn" v-if="body.status == 1 || body.status == 0" @click="getDel(id)"
            >删除</el-button
          >
        </div>
      </div>
      <el-card>
        <div class="txt" v-html="body.content"></div>
      </el-card>
      <MyDialog
        v-model="delShow"
        :msg="
          path == 'dynamic'
            ? '此动态删除后无法撤回，请谨慎删除！'
            : '此通知删除后无法撤回，请谨慎删除！'
        "
        @sure="getDelDate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DetailsHeader from '@/components/DetailsHeader.vue'
import MyDialog from '@/components/MyDialog.vue'
import { formatDate } from '@/utils/date'
import {
  dynamicDetail_api,
  noticeDetail_api,
  dyUp_api,
  dyDown_api,
  ntUp_api,
  ntDown_api,
  dyDel_api,
  ntDel_api,
} from '@/api/website'
const route = useRoute()
const fatherUrl = route.meta.father as string
const path = fatherUrl.split('/')[3]

const id = route.query.id as string
interface AForm {
  title: string
  content: string
  create_time: number
  type_name: string
  readed: number
  status: number
}

const body = ref<AForm>({
  title: '',
  content: '',
  create_time: 0,
  type_name: '',
  readed: 0,
  status: 0,
})
const getData = async () => {
  const res = path == 'dynamic' ? await dynamicDetail_api({ id }) : await noticeDetail_api({ id })
  res.status == 1 && (body.value = res.body)
}
getData()

// 上线
const statusData = ref<any>([])
const getUp = async () => {
  const res = path == 'dynamic' ? await dyUp_api({ id }) : await ntUp_api({ id })
  if (res.status == 1) {
    getData()
  }
}
// 下线
const getDown = async () => {
  const res = path == 'dynamic' ? await dyDown_api({ id }) : await ntDown_api({ id })
  if (res.status == 1) {
    getData()
  }
}

// 删除

const delShow = ref(false)
const getDel = (id: string) => {
  delShow.value = true
}
const getDelDate = async () => {
  const res = path == 'dynamic' ? await dyDel_api({ id }) : await ntDel_api({ id })
  if (res.status == 1) {
    delShow.value = false
    path == 'dynamic'
      ? (window.location.href = '/website/inform/dynamic')
      : (window.location.href = '/website/inform/notice')
  }
}
</script>

<style scoped lang="scss">
.article_details {
  .content {
    font-size: 14px;
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 16%;
    margin-top: 20px;
    .title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      color: $color333;
    }
    .nav-tips {
      margin: 20px 0;
      span {
        margin-right: 50px;
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
      .btns {
        margin: 20px 0;
      }
    }
  }
}
</style>
