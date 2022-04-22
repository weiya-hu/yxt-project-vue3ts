<template>
  <div class="article_details">
    <DetailsHeader/>
    <KzArticleDetails :info="info">
      <template #btns>
        <el-button class="bdc_btn" v-if="info.status != 1" @click="setStatus">{{info.status == 2 ? '上线' : '下线'}}</el-button>
      </template>
    </KzArticleDetails>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mainStore } from '@/store/index'
import DetailsHeader from "@/components/DetailsHeader.vue";
import KzArticleDetails from "@/components/KzArticleDetails.vue";
import { getArtDetails_api, setArt_api } from '@/api/website/service'

const route = useRoute()
const id = route.query.id as string

const info = ref<any>({})
const getInfo = async () => {
  const { status , body } = await getArtDetails_api({ id })
  if(status == 1){
    info.value = body
  }
}
getInfo()

const store = mainStore()
const setStatus = async () => {
  const res = await setArt_api({ id, status:info.value.status == 2 ? 3 : 2 })
  if(res.status == 1){
    getInfo()
    store.setKeepList([])
  }
}

</script>

<style scoped lang="scss">

</style>