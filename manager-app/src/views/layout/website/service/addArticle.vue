<template>
  <div class="add_article">
    <div class="fsc">
      <DetailsHeader/>
      <div class="btns">
        <el-button class="bdc_btn" @click="submit(1)">稍后编辑</el-button>
        <el-button type="primary" @click="submit(2)">提交</el-button>
      </div>
    </div>

    <KzAddArticle ref="addRef" needtype @success="subSuccess"/>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from "@/components/DetailsHeader.vue";
import KzAddArticle from "@/components/KzAddArticle.vue";
import { getArtDetails_api, addArt_api, editArt_api } from '@/api/website/service'
import { warnMsg } from '@/utils'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const getDetails = async () => {
  const { status, body } = await getArtDetails_api({ id })
  if(status == 1){
    if(body.status == 3){
      warnMsg('请下线文章后再编辑')
      router.replace('/website/service/articledetails?id=' + id)
      return
    }
    addRef.value.setForm({
      title:body.title,
      article_type:body.article_type,
      text:body.text,
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
const subSuccess = async (val:IArticleForm) => {
  const { status } = id ? await editArt_api({
    ...val,
    status: aStatus.value,
    id
  }) : await addArt_api({
    ...val,
    status: aStatus.value
  })
  if(status == 1){
    store.setKeepList([])
    router.replace('/website/service/school')
  }
}

</script>

<style scoped lang="scss">

</style>