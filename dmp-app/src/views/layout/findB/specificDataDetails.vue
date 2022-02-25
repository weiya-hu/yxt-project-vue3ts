<template>
  <div class="specific_data_details_page">
    <div class="btns fsc">
      <div class="lt">
        为您找到<span>&ensp;2500&ensp;</span>家符合条件的客户（<span>*根据政策与监管法规要求，联系人手机号脱敏展示</span>）
      </div>
      <div class="rt fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <CompanyTable :data="tableData"/>
    <MyPage :total="1000" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import MyPage from "@/components/MyPage.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import {useRoute} from 'vue-router'
import { demandDetail_api } from '@/api/findB'

const route = useRoute()
const cid = route.query.id

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const changePage =()=>{
  console.log(page.value);
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
.specific_data_details_page{
  .btns{
    padding-bottom: 20px;
    .lt{
      font-size: 14px;
      color: #363636;
      span{
        color: #E40000;
      }
    }
  }
}
</style>