<template>
  <div class="add_article">
    <div class="fsc">
      <DetailsHeader/>
      <div class="btns">
        <el-button class="bdc_btn" @click="submit(1)">稍后编辑</el-button>
        <el-button type="primary" @click="submit(2)">提交</el-button>
      </div>
    </div>
    <KzAddArticle ref="addRef" needimg needtype :needsource="0"  @success="subSuccess"/>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from "@/components/DetailsHeader.vue";
import KzAddArticle from "@/components/KzAddArticle.vue";
import { noticeDetail_api, noticeAdd_api, noticeEdit_api } from '@/api/website'
import { warnMsg } from '@/utils'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const getDetails = async () => {
  const { status, body } = await noticeDetail_api({ id })
  if(status == 1){
    if(body.status == 3){
      warnMsg('请下线文章后再编辑')
      router.replace('/website/service/articledetails?id=' + id)
      return
    }
    addRef.value.setForm({
      title:body.title,
      article_type:body.type_name,
      text:body.content,
      thumb_url:body.thumb_url,
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
    type_id:val.article_type,
    thumb_url:val.thumb_url,
    title:val.title,
  }
  const { status } = id ? await noticeEdit_api({
    ...data,
    id
  }) : await noticeAdd_api({
    ...data,

  })
  if(status == 1){
    store.setKeepList([])
    router.replace('/website/inform/notice')
  }
}

</script>

<style scoped lang="scss">

</style>