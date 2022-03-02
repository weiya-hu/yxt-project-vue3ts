<template>
  <div class="up2b-detail mytable">
    <div class="top-tip"> 
      为您找到
      <span class="red-color"> {{total}} </span>
      家符合条件的客户 （
      <span class="red-color">*根据政策与监管法规要求，联系人手机号脱敏展示</span>）
    </div>
    <el-table
      :data="tableList"
      size="large"
      row-class-name="my-data-table-row"
      class="table"
    >
      <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
    </el-table>
    <MyPage :total="total" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyPage from '@/components/MyPage.vue'



let total=ref(1000)
let page = ref(1)
const tableTitle=ref([
  {type:'select',prop:'select',width:30},
  {type:'text',lable:'序号',prop:'num',width:50},
  {type:'text',lable:'企业名称',prop:'name',width:130},
  {type:'text',lable:'联系人',prop:'contact',width:74},
  {type:'text',lable:'联系方式',prop:'phone',width:100},
  {type:'text',lable:'固定电话',prop:'tel',width:110},
  {type:'text',lable:'行业分类',prop:'industry',width:102},
  {type:'text',lable:'地区',prop:'region',width:110},
  {type:'text',lable:'详细地址',prop:'address',width:140},
  {type:'text',lable:'企业类型',prop:'industryType',width:120},
  {type:'text',lable:'统一社会信用代码',prop:'code',width:170},
  {type:'link',lable:'企业官网',prop:'website',width:150},
  {type:'text',lable:'经营范围',prop:'range',width:150},
])
const tableList=ref([
  {num:'01',name:'成华济民城所公司',contact:'王**',phone:'139****1965',tel:'028-98754612',industry:'计算机软件',region:'四川省成都市',address:'四川省成都市金牛区',industryType:'有限责任公司',code:'91500112MA5U3HHH3U',website:'https://fanyi.baidu.com/',range:'研制、开发、销售计算'}
])



const changePage=()=>{}

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