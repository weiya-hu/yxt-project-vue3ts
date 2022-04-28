<template>
  <div class="article_add">
    <DetailsHeader />
    <el-card>
      <div class="content">
        <div class="title">{{ body.title }}</div>
        <div v-html="body.content"></div>
        <div class="fjend btns twos">
          <el-button class="bdc_btn" @click="$router.push('/cms/resource')">返回</el-button>
          <el-button type="primary" @click="$router.push(`/cms/resourceedit?id=${id}`)"
            >编辑</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DetailsHeader from '@/components/DetailsHeader.vue'
import { articleDetail_api } from '@/api/cms/resource'
const route = useRoute()
const id = route.query.id as string
const body = ref<{ title: string; content: string }>({
  title: '',
  content: '',
})
const getData = async () => {
  const res = await articleDetail_api({ id })
  console.log(res)
  res.status == 1 && (body.value = res.body)
}
getData()
</script>

<script lang="ts">
export default { name: '资源内容库软文详情' }
</script>

<style scoped lang="scss">
.article_add {
  .content {
    background-color: #fff;
    border-radius: 6px;
    padding: 32px 50px;
    margin-top: 20px;
    overflow: hidden;
    .title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      color: $color333;
    }
    .twos {
      margin-top: 20px;
    }
  }
}
</style>
