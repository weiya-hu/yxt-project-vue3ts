<template>
  <div class="companyreview_page">
    <DetailsHeader/>
    <el-card class="card1 mt20">
      <el-descriptions :column="1">
        <el-descriptions-item label="企业名称">{{info.name}}</el-descriptions-item>
        <el-descriptions-item label="所属行业"></el-descriptions-item>
        <el-descriptions-item label="统一社会信用代码" label-class-name="icode">{{info.code}}</el-descriptions-item>
        <el-descriptions-item label="资质照片"><img :src="info.license" alt="" class="zzimg lookhover"></el-descriptions-item>
        <el-descriptions-item label="证照有效期">{{formatDate(new Date(info.left_time),'yyyy-MM-dd')}}</el-descriptions-item>
        <el-descriptions-item label="联系人">{{info.legal_person}}</el-descriptions-item>
        <el-descriptions-item label="联系电话">{{info.contact}}</el-descriptions-item>
        <el-descriptions-item label="注册地址">{{info.address}}</el-descriptions-item>
        <el-descriptions-item label="官网地址">
          <el-link type="primary" :href="info.url" target="_blank">{{info.url}}</el-link>
        </el-descriptions-item>
        <el-descriptions-item label="经营范围"></el-descriptions-item>
      </el-descriptions>
      <div class="fcc mt20" v-if="info.status == 2">
        <el-popover placement="top" :width="400" trigger="click" v-model:visible="errMsgShow">
          <template #reference>
            <el-button type="danger" size="large" @click="errMsgShow = true">&emsp;审核拒绝&emsp;</el-button>
          </template>
          <el-input v-model="errMsg" maxlength="100" rows="5" placeholder="请输入拒绝原因" show-word-limit type="textarea"/>
          <div class="fcc mt20">
            <el-button type="primary" :disabled="!errMsg" @click="toError">&emsp;确定&emsp;</el-button>
            <el-button @click="closeErr">&emsp;取消&emsp;</el-button>
          </div>
        </el-popover>
        <el-button type="primary" size="large" @click="toPass">&emsp;审核通过&emsp;</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import { getCompanyInfo_api, rejectCompany_api, passCompany_api } from '@/api/users'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const cid = route.query.id as string

const info = ref<any>({})
const getInfo = async () => {
  const res = await getCompanyInfo_api({ cid })
  if(res.status == 1){
    info.value = res.body
  }
}
getInfo()

const errMsgShow = ref(false)
const errMsg = ref('')
const closeErr = () => {
  errMsg.value = ''
  errMsgShow.value = false
}
const toError = async () => {
  const res = await rejectCompany_api({
    cid,
    fail_reason: errMsg.value
  })
  if(res.status == 1){
    store.setKeepList([])
    router.back()
  }
}
const toPass = async () => {
  const res = await passCompany_api({ id: cid })
  if(res.status == 1){
    store.setKeepList([])
    router.back()
  }
}

</script>

<style scoped lang="scss">
.companyreview_page{
  .card1{
    padding: 0 30%;
    :deep(.el-card__body){
      padding-top: 8px;
    }
    :deep(.el-descriptions__cell){
      padding-top: 12px;
      border-bottom: 1px solid $colorddd;
      .el-descriptions__label{
        display: inline-block;
        width: 100px;
      }
    }
    :deep(.icode){
      width: 60px!important;
      padding-right: 40px;
      vertical-align: middle!important;
    }
    .zzimg{
      width: 100px;
      height: 60px;
    }
  }
}
</style>