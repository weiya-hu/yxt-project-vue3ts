<template>
  <div class="kzdata_page">
    <TopSearch @height-search="heightSearch" @search="wordSearch" :words="words" :hasHeight="true" placeholder="请输入企业名称、联系人、经营范围关键词"/>
    
    <TopBtns :total="total" class="topbtns"/>

    <CompanyTable :data="tableData" v-loading="loading"/>
    <MyPage :total="total" v-model="searchParams.current" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import TopSearch from '@/components/TopSearch.vue'
import MyPage from "@/components/MyPage.vue";
import TopBtns from "@/components/TopBtns.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import { searchByConditions_api,wordSearchList_api,getSearchWord_api } from '@/api/findB'
import { Gajax } from '@/utils/request'
import {okMsg,errMsg} from '@/utils/index'

const words = ref([])
const getWord = ()=>{
  getSearchWord_api().then((res:res)=>{
    words.value = res.body
  })
}
getWord()

interface Params {
  size:number,
  current:number,
  source:number,
}
const searchParams = ref<Params>({
  size:50,
  current:1,
  source:1
})
const total = ref(0)
const tableData = ref([])
const loading = ref(false)
const searchType = ref(1) //1 关键词，2 条件组
const word = ref('')
const wordSearch = async (params:string)=>{
  //关键词搜索
  searchType.value = 1
  loading.value = true
  searchParams.value.current = 1
  word.value = params
  await goSearch()
  // okMsg('查询成功')
  getWord()
}
const goSearch = async ()=>{
  await wordSearchList_api({
    ...searchParams.value,
    keywords:word.value
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
    loading.value = false
  }).catch(()=>{
    errMsg('查询失败')
    loading.value = false
  })
}
const heightParams = ref({})
const heightSearch = async (params:any)=>{
  //高级搜索
  loading.value = true
  searchType.value = 2
  searchParams.value.current = 1
  heightParams.value = params
  await goHSearch()
  // okMsg('查询成功')
}

const goHSearch = async ()=>{
  await searchByConditions_api({
    ...searchParams.value,
    ...heightParams.value
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
    loading.value = false
  }).catch(()=>{
    errMsg('查询失败')
    loading.value = false
  })
}
const changePage =()=>{
  searchType.value == 1?goSearch():goHSearch()
}
</script>

<style scoped lang="scss">
.kzdata_page{
  height: 100%;
  .topbtns{
    padding-top: 30px;
  }
}
</style>