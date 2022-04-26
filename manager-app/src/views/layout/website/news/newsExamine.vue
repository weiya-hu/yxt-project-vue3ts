<template>
  <div class="article_details">
    <div class="fcs">
      <DetailsHeader />
      <div class="btns">
        <el-button type="danger" plain @click="goReject">审核拒绝</el-button>
        <el-button type="success" @click="newsPass">审核通过</el-button>
      </div>
    </div>
    <div class="content">
      <el-card class="mycard">
        <div class="title">{{ body.title }}</div>
        <div class="nav-tips">
          <span>分类：{{ body.type_name }}</span>
          <span>查看量：{{ body.readed }}</span>
          <span>{{ formatDate(new Date(body.create_time), 'yyyy-MM-dd hh:mm:ss') }}</span>
        </div>
      </el-card>
      <div class="news-container">
        <el-card class="mycard">
          <div v-html="body.content"></div>
          <el-dialog v-model="tipShow" title="驳回原因" width="500px">
            <el-input
              v-model="failTips"
              :rows="5"
              type="textarea"
              placeholder="请简要描述不通过原因"
              maxlength="300"
              show-word-limit
            />
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tipShow = false">取消</el-button>
                <el-button type="primary" @click="newsReject">确认</el-button>
              </span>
            </template>
          </el-dialog>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DetailsHeader from '@/components/DetailsHeader.vue'
import { formatDate } from '@/utils/date'
import { newsDetail_api, newsPass_api, newsReject_api } from '@/api/website'

const route = useRoute()
const id = route.query.id as string

interface AForm {
  title: string
  content: string
  create_time: number
  type_name: string
  readed: number
  state: number
}

const body = ref<AForm>({
  title: '',
  content: '',
  create_time: 0,
  type_name: '',
  readed: 0,
  state: 0,
})
const getData = async () => {
  const res = await newsDetail_api({ id })
  res.status == 1 && (body.value = res.body)
}
getData()

// 审核操作

const tipShow = ref(false)
const newsPass = async () => {
  const res = await newsPass_api({ id }).then((res) => {
    if (res.status === 1) {
      window.location.href = '/website/news'
    }
  })
}

const goReject = () => {
  tipShow.value = true
}
const failTips = ref('')
const newsReject = async () => {
  const res = await newsReject_api({
    id,
    fail_reason: failTips.value,
  })
  if (res.status === 1) {
    window.location.href = '/website/news'
  }
}
</script>

<style scoped lang="scss">
.article_details {
  .el-breadcrumb {
    font-size: 12px;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  .content {
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
      p {
        margin: 15px 0;
        width: 70px;
        height: 30px;
        background: #999;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
      }
      .btns {
        width: 100px;
        height: 30px;
        margin: 5px 10px 10px 0;
      }
    }
    .mycard {
      margin-bottom: 10px;
    }
    .comment-card {
      display: flex;
      flex-direction: row;
      .avater {
        margin: 10px;
      }
      .userInfo {
        display: flex;
        flex-direction: column;
        margin: 10px;
        .name {
          font-size: 18px;
        }
        .utime {
          font-size: 12px;
          margin-top: 2px;
        }
        .c-content {
          margin-top: 15px;
        }
      }
      .shield {
        flex: 1;
        justify-content: flex-end;
        display: flex;
      }
    }
  }
}
</style>
