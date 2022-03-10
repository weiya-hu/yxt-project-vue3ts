<template>
  <div class="msgdata_details_c">
    <FindNumber :total="total"/>
    <UserTable :data="tableData" @select="handleSelectionChange"/>
    <MyPage :total="total" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FindNumber from "@/components/FindNumber.vue";
import MyPage from "@/components/MyPage.vue";
import UserTable from "@/components/UserTable.vue";
import { getMsgUserList_api } from '@/api/findC'
import {useRoute} from 'vue-router'

interface IData {
  id:number,
  name:string,//姓名
  sex:number,//性别
  tel:string,//联系方式
  email:string,//邮箱
  type:string,//从事行业
  address:string,//地区
  source:number,//来源
}
const tableData = ref<IData[]>()
const total = ref(0)
const page = ref(1)
const route = useRoute()
const getList = ()=>{
  getMsgUserList_api({
    size: 10,
    current: page.value,
    did:route.query.id
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
  })
}
getList()
const changePage =()=>{
  getList()
}
const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}
</script>

<style scoped lang="scss">
.msgdata_details_c{
  .mytable{
    margin-top: 30px;
  }

}
</style>