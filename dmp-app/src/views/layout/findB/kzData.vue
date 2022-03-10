<template>
  <div class="kzdata_page">
    <TopSearch @height-search="heightSearch" @search="wordSearch" :words="words" :hasHeight="true" placeholder="请输入企业名称、联系人、经营范围关键词"/>
    <div class="topbtns fsc">
      <FindNumber class="lt" :total="total"/>
      <div class="rt fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <CompanyTable :data="tableData" v-loading="loading"/>
    <MyPage :total="total" v-model="searchParams.current" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import TopSearch from '@/components/TopSearch.vue'
import MyPage from "@/components/MyPage.vue";
import FindNumber from "@/components/FindNumber.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import { searchByConditions_api,wordSearchList_api,getSearchWord_api } from '@/api/findB'
import { Gajax } from '@/utils/request'
import {okMsg} from '@/utils/index'

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
  size:10,
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
  okMsg('查询成功')
  searchType.value = 1
  loading.value = true
  searchParams.value.current = 1
  word.value = params
  await goSearch()
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
  })
}
const heightParams = ref({})
const heightSearch = (params:any)=>{
  //高级搜索
  okMsg('查询成功')
  loading.value = true
  searchType.value = 2
  searchParams.value.current = 1
  heightParams.value = params
  goHSearch()
}

const goHSearch = ()=>{
  searchByConditions_api({
    ...searchParams.value,
    ...heightParams.value
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
    loading.value = false
  })
}
const changePage =()=>{
  searchType.value == 1?goSearch():goHSearch()
}
</script>

<style scoped lang="scss">
.kzdata_page{
  .topbtns{
    padding: 30px 0 20px 0;
  }
}
</style>