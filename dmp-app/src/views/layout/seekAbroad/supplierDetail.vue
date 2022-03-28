<template>
  <div class="up2b-detail mytable">
    <FindNumber class="lt" :total="total"/>
    <el-table
      :data="tableList"
      size="large"
      row-class-name="my-data-table-row"
      class="table"
      v-loading="loading"
    >
      <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
      <template #empty v-if="total">
        <MyEmpty/>
      </template>
    </el-table>
    <MyPage v-if="total" :total="total" v-model="page" @change="getDetailList"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyPage from '@/components/MyPage.vue'
import {overseasDetailPage} from '@/api/seekAbroad'
import {useRoute} from 'vue-router'
import MyEmpty from "@/components/MyEmpty.vue";
import FindNumber from "@/components/FindNumber.vue";

const route = useRoute()


let total=ref(0)
let page = ref(1)
let loading=ref(false)
const tableTitle=ref([
  {type:'select',prop:'select',width:30},
  {type:'num',lable:'序号',prop:'num',width:70},
  {type:'text',lable:'企业名称',prop:'name',width:130},
  {type:'text',lable:'联系人',prop:'contact',width:74},
  {type:'text',lable:'联系方式',prop:'mobiles',width:100},
  {type:'text',lable:'邮箱',prop:'email',width:100},
  {type:'country',lable:'地区',prop:'country_id',width:110},
  {type:'text-tooltip',lable:'公司地址',prop:'address',width:140},
  {type:'link',lable:'企业官网',prop:'url',width:150},
  {type:'text-tooltip',lable:'HS编码',prop:'code',width:120},
  {type:'text',lable:'数量',prop:'product_number',width:90}, 
  {type:'text',lable:'重量（kg）',prop:'product_weight',width:100},
  {type:'text',lable:'出货港口',prop:'shipment_port',width:120},
  {type:'text',lable:'卸货港口',prop:'unload_port',width:120},
])
const tableList=ref([])



const getDetailList=async()=>{
  loading.value=true
  let data={
    current:page.value,
    size:10,
    id:route.query.id
  }
  const {status,body}=await overseasDetailPage(data)
  loading.value=false
  if(status){
    total.value=body.total
    tableList.value=body.records
  }
}
getDetailList()
</script>

<style scoped lang="scss">
  .up2b-detail{
    .top-tip{
      font-size: 14px;
      color: #363636;
      line-height: 14px;
      .red-color{
        color:$colorred ;
      }
    }
    .table{
      margin-top: 30px;
    }
  }
</style>