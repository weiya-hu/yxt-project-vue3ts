<template>
  <div class="article_details">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' + path }">{{path == 'myWork' ? '我的作品库' : '个性化内容库' }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' + path + '/article' }">软文</el-breadcrumb-item>
      <el-breadcrumb-item>软文详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="title">{{body.title}}</div>
      <div v-html="body.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import { articleDetail_api } from '@/api/myWork'
import { customDetails_api } from '@/api/custom'
const route = useRoute()
const fatherUrl = route.meta.father as string
const path = fatherUrl.split('/')[1]

const id = route.query.id as string
const body = ref<{title:string,content:string}>({
  title:'',
  content:''
})
const getData = async ()=>{
  const res = path == 'myWork' ? await articleDetail_api({id}) : await customDetails_api({id},1)
  res.status == 1 && (body.value = res.body)
}
getData()

</script>

<style scoped lang="scss">
.article_details{
  .el-breadcrumb{
    font-size: 12px;
  }
  .content{
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 16%;
    margin-top: 20px;
    .title{
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      color: $color333;
    }
  }
}
</style>