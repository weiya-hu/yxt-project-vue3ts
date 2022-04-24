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
import { dynamicDetail_api, dynamicAdd_api, dynamicEdit_api } from '@/api/website'
import { warnMsg } from '@/utils'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const getDetails = async () => {
  const { status, body } = await dynamicDetail_api({ id })
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
const subSuccess = async (val:AForm) => {
  const { status } = id ? await dynamicEdit_api({
    ...val,
    status: aStatus.value,
    id
  }) : await dynamicAdd_api({
    ...val,
    status: aStatus.value
  })
  if(status == 1){
    store.setKeepList([])
    router.replace('/website/service/school')
  }
}

const typeDate =ref([
    {
      value: 1,
      label: '分类一',
    },
    {
      value: 2,
      label: '分类二',
    },
    {
      value: 3,
      label: '分类三',
    },
    {
      value: 4,
      label: '分类四',
    },
    {
      value: 5,
      label: '分类五',
    },
  ])
</script>

<style scoped lang="scss">

</style>