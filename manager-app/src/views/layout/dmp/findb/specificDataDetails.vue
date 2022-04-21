<template>
  <div class="specific_data_details_page">
    <DetailsHeader/>
     <div class="mytable-data">
      <el-table
        :data="tableList"
        size="small"
        row-class-name="my-data-table-row"
        v-loading="loading"
        :border="true"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <Mypage v-if="total" :total="total" v-model="page" @change="getList"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from "@/components/DetailsHeader.vue";
import {businessDemandDatail_api} from "@/api/dmp"
import Mypage from "@/components/Mypage.vue";
import MyDataTable from '@/components/MyDataTable.vue';
import MyEmpty from '@/components/MyEmpty.vue';
import {useRoute} from 'vue-router'

const tableTitle = ref([
  {type:'num',lable:'序号',width:60},
  {type:'text',lable:'企业名称',prop:'name',width:130},
  {type:'text',lable:'联系人',prop:'contact',width:100},
  {type:'text',lable:'联系方式',prop:'mobiles',width:110},
  {type:'text',lable:'固定电话',prop:'telephone',width:110},
  {type:'industry_id',lable:'行业分类',prop:'industry_id',width:120},
  {type:'city_id',lable:'地区',prop:'city',width:130},
  {type:'text-tooltip',lable:'详细地址',prop:'address',width:130},
])
const route = useRoute()
let total=ref()
let page = ref(1)
let size = ref(10)
let loading=ref(false)
let tableList = ref([])
const getList=async()=>{
  loading.value=true
  let data={
    current:page.value,
    size:size.value,
    id:route.query.id
  }
  const {status,body} = await businessDemandDatail_api(data)
  loading.value=false
  if(status){
    tableList.value = body.records;
    total.value = body.total
  }
}
getList()
</script>

<style scoped lang="scss">
.mytable-data{
  margin-top: 16px;
  background: #FFFFFF;
  padding: 24px;
}
</style>