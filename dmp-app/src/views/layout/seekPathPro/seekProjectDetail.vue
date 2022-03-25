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
import {channelDetailPage} from '@/api/seekPathPro'
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
  {type:'text',lable:'固定电话',prop:'telephone',width:100},
  {type:'industry_id',lable:'行业分类',prop:'industry_id',width:100},
  {type:'city_id',lable:'地区',prop:'city',width:110},
  {type:'text',lable:'详细地址',prop:'address',width:140},
  {type:'company_type',lable:'企业类型',prop:'company_type',width:120},
  {type:'text',lable:'统一社会信用代码',prop:'code',width:170},
  {type:'link',lable:'企业官网',prop:'url',width:150},
  {type:'text-tooltip',lable:'经营范围',prop:'business_scope',width:200},
  {type:'text',lable:'项目名称',prop:'item_name',width:100},
  {type:'text-tooltip',lable:'项目介绍',prop:'item_desc',width:150},
  {type:'text',lable:'招标金额（万元）',prop:'amount',width:100},
  {type:'date',lable:'截止日期',prop:'left_time',width:120},
  {type:'link',lable:'项目附件',prop:'attachment',width:120},
])
const tableList=ref([])



const getDetailList=async()=>{
  loading.value=true
  let data={
    current:page.value,
    size:10,
    id:route.query.id
  }
  const {status,body}=await channelDetailPage(data)
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