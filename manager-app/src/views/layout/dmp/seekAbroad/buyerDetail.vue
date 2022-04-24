<template>
  <div class="specific_data_details_page">
    <DetailsHeader/>
    <div class="specific_data-content">
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
      <div class="flexr">
        <Mypage v-if="total" :total="total" v-model:page="page" v-model:size="size" @change="getList"/>
      </div>
    </div>
  </div>
</template>

 <script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from "@/components/DetailsHeader.vue";
import {overseasPurchaseDetail_api} from "@/api/dmp/findb"
import Mypage from "@/components/Mypage.vue";
import MyDataTable from '@/components/MyDataTable.vue';
import MyEmpty from '@/components/MyEmpty.vue';
import {useRoute} from 'vue-router'

const tableTitle = ref([
  {type:'num',lable:'序号',width:60},
  {type:'text',lable:'企业名称',prop:'name',width:130},
  {type:'text',lable:'联系人',prop:'contact',width:100},
  {type:'text',lable:'联系方式',prop:'mobiles',width:110},
  {type:'text',lable:'邮箱',prop:'email',width:140},
  // {type:'',lable:'地区',prop:'',width:130},
  {type:'text-tooltip',lable:'公司地址',prop:'address',width:150},
  {type:'link',lable:'企业官网',prop:'url',width:160},
  {type:'text',lable:'HS编码',prop:'code',width:130},
 {type:'text',lable:'数量',prop:'product_number',width:90}, 
  {type:'text',lable:'重量(kg)',prop:'product_weight',width:100},
  {type:'text',lable:'出货港口',prop:'shipment_port',width:120},
  {type:'text',lable:'卸货港口',prop:'unload_port',width:120},
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
  const {status,body} = await overseasPurchaseDetail_api(data)
  loading.value=false
  if(status){
    tableList.value = body.records;
    total.value = body.total
  }
}
getList()
</script>

<style scoped lang="scss">
.specific_data-content{
  margin-top: 16px;
  background: #FFFFFF;
  padding: 24px;
  border: 1px solid rgba(221,221,221,1);
  .mytable-data{
    margin-bottom: 24px;
  }
}
</style>