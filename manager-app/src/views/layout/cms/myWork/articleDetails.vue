<template>
  <div class="article_details">
    <!-- <div @click="$router.push('myWorkdet')">去详情</div> -->
    <DetailsHeader/>
    <div class="content">
      <div class="title">{{body.title}}</div>
      <div v-html="body.content"></div>
    </div>
  </div>
    <!-- <Mypage :total="50" v-model="page"/> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
// import Mypage from "@/components/、Mypage.vue";
// const page = ref(1)
const route = useRoute()
const id = route.query.id as string
const body = ref<{title:string,content:string}>({
  title:'',
  content:''
})
// const getData = async ()=>{
//   const res = path == 'myWork' ? await articleDetail_api({id}) : await customDetails_api({id},1)
//   res.status == 1 && (body.value = res.body)
// }
// getData()
</script>

<script lang="ts">
export default { name:'TelData' }
</script>

<style scoped lang="scss">
.article_details{
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