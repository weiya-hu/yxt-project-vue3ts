<template>
  <div class="add_article">
    <div class="fsc">
      <DetailsHeader/>
      <div class="btns">
        <el-button class="bdc_btn" @click="submit(1)">稍后编辑</el-button>
        <el-button type="primary" @click="submit(2)">提交</el-button>
      </div>
    </div>
    <KzAddArticle ref="addRef" needimg needtype :needsource="1"  @success="subSuccess" :types="typeDate"/>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from "@/components/DetailsHeader.vue";
import KzAddArticle from "@/components/KzAddArticle.vue";
import { newsDetail_api, newsAdd_api, newsEdit_api,typeList_api } from '@/api/website'
import { warnMsg } from '@/utils'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const getDetails = async () => {
  const { status, body } = await newsDetail_api({ id })
  if(status == 1){
    if(body.status == 3){
      warnMsg('请下线文章后再编辑')
      router.replace('/website/newsdetails?id=' + id)
      return
    }
    addRef.value.setForm({
      title:body.title,
      article_type:body.article_type,
      text:body.text,
      thumb_url:body.thumb_url,
      source:body.source
      
    })
  }
}
id && getDetails()

const addRef = ref()
const aStatus = ref<1|2>(1)
const submit = async (status:1|2) => {
  aStatus.value = status
  addRef.value.submit()
}
const subSuccess = async (val:AForm) => {
  const data ={
    content:val.text,
    source_url:val.source_url,
    type_id:val.article_type,
    thumb_url:val.thumb_url,
    title:val.title
  }
  const { status } = id ? await newsEdit_api({
    ...data,
    status: aStatus.value,
    id
  }) : await newsAdd_api({
    ...data,
    status: aStatus.value
  })
  if(status == 1){
    router.replace('/website/news')
  }
}

const typeDate = ref<any>({})
const typeList = async ()=>{
  const res =await typeList_api()
  if(res.status==1){
    typeDate.value = res.body.map((v:any) => {
      return { label:v.name, value:v.id }
    })
  }
}
typeList()
</script>

<style scoped lang="scss">

</style>