<template>
  <div class="teldata_details_c" v-loading="loading">
    <TopBtns :total="total" syncbtn @sync="setSync" ref="topBtnRef" :sync-api="getSyncInfo_api" :sync-disabled="syncDisabled" class="topbtns"/>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="100%"
        @selection-change="handleSelectionChange"
        ref="tableRef"
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
    <MyPage :total="total" :size="50" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref ,computed } from 'vue'
import { formatDate } from '@/utils/date'
import TopBtns from "@/components/TopBtns.vue";
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getInsetUserList_api, setSync_api, getSyncInfo_api } from '@/api/findC'
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
const loading = ref(false)
const getList = ()=>{
  loading.value = true
  getInsetUserList_api({
    size: 50,
    current: page.value,
    did:route.query.id
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
    loading.value = false
  }).catch(()=>{
    loading.value = false
  })
}
getList()

const changePage =()=>{
  getList()
}
const multipleSelection = ref<(string|number)[]>([])
const handleSelectionChange = (val:IData[]) => {
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
    list: multipleSelection.value
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
.teldata_details_c{
  height: 100%;
  .mytable{
    height: calc( 100% - 126px )
  }
}
</style>