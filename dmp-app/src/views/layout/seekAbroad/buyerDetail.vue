<template>
  <div class="up2b-detail" v-loading="loading">
    <TopBtns :total="total" syncbtn @sync="setSync" ref="topBtnRef" :sync-api="getSyncInfo_api" :sync-disabled="syncDisabled"/>

    <div class="mytable">
      <el-table
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
        height="100%"
        @selection-change="handleSelectionChange"
        ref="tableRef"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>

    <MyPage v-if="total" :size="50" :total="total" v-model="page" @change="getDetailList"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyPage from '@/components/MyPage.vue'
import { overseasDetailPage, setSync_api, getSyncInfo_api } from '@/api/seekAbroad'
import {useRoute} from 'vue-router'
import MyEmpty from "@/components/MyEmpty.vue";
import TopBtns from "@/components/TopBtns.vue";

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
  {type:'text',lable:'公司地址',prop:'address',width:140},
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
    size:50,
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

const multipleSelection = ref<(string|number)[]>([])
const handleSelectionChange = (val:any[]) => {
  multipleSelection.value = val.map(v => v.id)
}

const tableRef = ref()
const clear = () => {
  multipleSelection.value = []
  tableRef.value.clearSelection()
}

const topBtnRef = ref()
const syncDisabled = computed(() => !multipleSelection.value.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await setSync_api({
    list: multipleSelection.value,
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
  .up2b-detail{
    height: 100%;
    .mytable{
      height: calc( 100% - 126px )
    }
  }
</style>