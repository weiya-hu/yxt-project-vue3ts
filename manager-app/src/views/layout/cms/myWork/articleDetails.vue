<template>
  <div class="article_details">
    <DetailsHeader/>
    <el-card>
      <div class="content">
      <div class="title">{{body.title}}</div>
      <div v-html="body.content"></div>
    </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import {articleDetail_api } from '@/api/cms/myWork'
// import Mypage from "@/components/、Mypage.vue";
// const page = ref(1)
const route = useRoute()
const id = route.query.id as string
const body = ref<{title:string,content:string}>({
  title:'',
  content:''
})
const getData = async ()=>{
  const res = await articleDetail_api({id})
  console.log(res)
  res.status == 1 && (body.value = res.body)
}
getData()
</script>

<script lang="ts">
export default { name:'我的作品库软文详情' }
</script>

<style scoped lang="scss">
.article_details{
  .content{
    background-color: #fff;
    border-radius: 6px;
    padding: 32px 50px;
    margin-top: 20px;
    overflow: hidden;
    .title{
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      color: $color333;
    }
  }
}
</style>