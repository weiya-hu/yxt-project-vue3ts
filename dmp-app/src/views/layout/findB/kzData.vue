<template>
  <div class="kzdata_page">
    <TopSearch/>
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
import TopSearch from '@/components/TopSearch.vue'
import MyPage from "@/components/MyPage.vue";
import CompanyTable from "@/components/CompanyTable.vue";
import { conditionsList_api } from '@/api/findB'
import { Gajax } from '@/utils/request'

const tableData = ref([
  {
    no: '01',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…研制、开发、销售计算机软件，计算机网络产品…研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '02',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '03',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '04',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '05',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '06',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '07',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '08',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '09',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
  {
    no: '10',
    cname:'成都微特软件有限公司',
    uname:'王**',
    mobile:'139****1928',
    phone:'028-85516572',
    type:'计算机软件',
    addr:'四川省成都市',
    address:'四川省成都市金牛区',
    code:'92510108L39475751L',
    url:'http://www.iy-cd.com/',
    range:'研制、开发、销售计算机软件，计算机网络产品…',
    source:'康洲数智',
  },
])
const page = ref(1)
const changePage =()=>{
  console.log(page.value);
}
</script>

<style scoped lang="scss">
.kzdata_page{
  .btns{
    padding: 30px 0 20px 0;
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