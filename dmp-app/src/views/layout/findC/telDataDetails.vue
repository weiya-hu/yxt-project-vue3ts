<template>
  <div class="teldata_details_c">
    <FindNumber :total="total"/>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" />
        <el-table-column property="mobiles" label="联系方式" />
        <el-table-column property="address" label="归属地">
          <template #default="scope">
            <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="发送时间" >
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd hh:mm:ss')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源" >
          <template #default="scope">
            <div>{{ getSource(scope.row.source) }}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref ,computed } from 'vue'
import { formatDate } from '@/utils/date'
import FindNumber from "@/components/FindNumber.vue";
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getInsetUserList_api } from '@/api/findC'
import {useRoute} from 'vue-router'
import { mainStore } from '@/store/index'
import { getHashStr,strToArr,getSource} from '@/utils/index'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

interface IData {
  city: number
  create_time: number
  district: number
  id: number
  mobiles: string
  province: number
  status: number
}
const tableData = ref<IData[]>([])

const route = useRoute()
const total = ref(0)
const page = ref(1)
const getList = ()=>{
  getInsetUserList_api({
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
.teldata_details_c{
  .mytable{
    margin-top: 30px;
  }

}
</style>