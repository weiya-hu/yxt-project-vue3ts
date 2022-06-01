<template>
  <div class="article_details">
    <DetailsHeader/>
    <KzArticleDetails :info="info" :type-obj="artTypeList">
      <template #btns>
        <el-button class="bdc_btn" v-if="info.status != 1" @click="setStatus">{{info.status == 2 ? '上线' : '下线'}}</el-button>
        <el-button class="bdc_btn" v-if="info.status != 3" @click="$router.push('addarticle?id=' + info.id)">编辑</el-button>
        <el-button class="bdc_btn" v-if="info.status != 3" @click="del(info.id)">删除</el-button>
      </template>
    </KzArticleDetails>
    <MyDialog v-model="delShow" :msg="'此文章删除后无法撤回，请谨慎删除！'" @sure="sureDel"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from "@/components/DetailsHeader.vue";
import KzArticleDetails from "@/components/KzArticleDetails.vue";
import { getArtTypeList_api, getArtDetails_api, setArt_api, delArt_api } from '@/api/website/service'
import MyDialog from "@/components/MyDialog.vue";

const route = useRoute()
const router = useRouter()
const id = route.query.id as string

const artTypeList = ref<Record<number, string>>({})
const getArtTypeList = async () => {
  const { status, body } = await getArtTypeList_api()
  if(status == 1){
    artTypeList.value = body
    getInfo()
  }
}
getArtTypeList()

const info = ref<any>({})
const getInfo = async () => {
  const { status , body } = await getArtDetails_api({ id })
  if(status == 1){
    info.value = body
  }
}

const store = mainStore()
const setStatus = async () => {
  const res = await setArt_api({ id, status:info.value.status == 2 ? 3 : 2 })
  if(res.status == 1){
    getInfo()
    store.setKeepList([])
  }
}

const delId = ref<string|number>('')
const delShow = ref(false)
const del = (id:number|string) => {
  delId.value = id
  delShow.value = true
}
const sureDel = async () => {
  const res = await delArt_api({ id:delId.value })
  if(res.status == 1){
    delShow.value = false
    store.setKeepList([])
    router.back()
  }
}

</script>

<style scoped lang="scss">

</style>