<template>
  <div class="add_article">
    <div class="fsc">
      <DetailsHeader />
      <div class="btns">
        <el-button class="bdc_btn" @click="submit(1)">稍后编辑</el-button>
        <el-button type="primary" @click="submit(2)">提交</el-button>
      </div>
    </div>
    <KzAddArticle
      ref="addRef"
      needimg
      needtype
      :needsource="1"
      :types="typeDate"
      @success="subSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from '@/components/DetailsHeader.vue'
import KzAddArticle from '@/components/KzAddArticle.vue'
import {
  dynamicDetail_api,
  dynamicAdd_api,
  dynamicEdit_api,
  dynamicTypeList_api,
} from '@/api/website'
import { warnMsg } from '@/utils'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const getDetails = async () => {
  const { status, body } = await dynamicDetail_api({ id })
  if (status == 1) {
    if (body.status == 3) {
      warnMsg('请下线文章后再编辑')
      router.replace('/website/inform/dynamic/dynamicdetails?id=' + id)
      return
    }
    addRef.value.setForm({
      title: body.title,
      article_type: Number(body.type_id),
      text: body.content,
      thumb_url: body.thumb_url,
      creator: body.creator,
      source_url: body.source_url,
      source: body.source,
    })
  }
}
id && getDetails()

const addRef = ref()
const aStatus = ref<1 | 2>(1)
const submit = async (status: 1 | 2) => {
  aStatus.value = status
  addRef.value.submit()
}
const subSuccess = async (val: IArticleForm) => {
  const data = {
    content: val.text,
    source: val.source,
    source_url: val.source_url,
    type_id: val.article_type,
    thumb_url: val.thumb_url,
    title: val.title,
    creator: val.creator,
  }
  const { status } =
    aStatus.value === 1
      ? await dynamicEdit_api({
          ...data,
          id,
        })
      : await dynamicAdd_api({
          ...data,
          id,
        })
  if (status === 1) {
    store.setKeepList([])
    router.replace('/website/inform/dynamic')
  }
}

const typeDate = ref<any[]>([])
const typeList = async () => {
  const res = await dynamicTypeList_api()
  if (res.status === 1) {
    typeDate.value = res.body.map((v: any) => {
      return { label: v.name, value: v.id }
    })
    id && getDetails()
  }
}
typeList()
</script>

<style scoped lang="scss"></style>
