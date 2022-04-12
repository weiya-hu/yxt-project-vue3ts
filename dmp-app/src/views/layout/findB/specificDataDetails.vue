<template>
  <div class="specific_data_details_page">
    
    <TopBtns :total="total" class="topbtns"/>

    <CompanyTable :data="tableData"/>
    <MyPage :total="total" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import MyPage from "@/components/MyPage.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import TopBtns from "@/components/TopBtns.vue";
import {useRoute} from 'vue-router'
import { demandDetail_api } from '@/api/findB'

const route = useRoute()
const cid = route.query.id

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const changePage =()=>{
  getList()
}

const getList = ()=>{
  demandDetail_api({
    current:page.value,
    size:10,
    id:cid
  }).then((res:res)=>{
    if(res.status==1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
  })
}
getList()
</script>

<style scoped lang="scss">

</style>