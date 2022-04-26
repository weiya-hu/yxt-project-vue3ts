<template>
  <div class="specific_data_details_page" v-loading="loading">
    
    <TopBtns :total="total" @sync="setSync" ref="topBtnRef" :sync-api="getSyncInfo_api" :sync-disabled="syncDisabled" class="topbtns"/>

    <CompanyTable :data="tableData" ref="tableRef"/>
    <MyPage :total="total" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MyPage from "@/components/MyPage.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import TopBtns from "@/components/TopBtns.vue";
import { useRoute } from 'vue-router'
import { demandDetail_api, SetSync_api, getSyncInfo_api } from '@/api/findB'

const route = useRoute()
const cid = route.query.id

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const loading = ref(false)
const changePage =()=>{
  getList()
}

const getList = ()=>{
  loading.value = true
  demandDetail_api({
    current:page.value,
    size:10,
    id:cid
  }).then((res:res)=>{
    if(res.status==1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
    loading.value = false
  }).catch(()=>{
    loading.value = false
  })
}
getList()

const topBtnRef = ref()
const tableRef = ref()
const syncDisabled =  computed(() => tableRef.value && !tableRef.value.selIdList.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await SetSync_api({
    list: tableRef.value.selIdList
  })
  topBtnRef.value.close()
  tableRef.value.clear()
}
</script>

<style scoped lang="scss">

</style>