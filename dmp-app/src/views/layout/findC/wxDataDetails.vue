<template>
  <div class="wxdata_details_c" v-loading="loading">
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
        <el-table-column property="wechat_id" label="好友微信号" />
        <el-table-column property="avatar_url" label="头像" >
          <template #default="scope">
            <el-avatar :size="42" :src="scope.row.avatar_url"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column property="nick_name" label="昵称" />
        <el-table-column property="gender" label="性别" >
          <template #default="scope">
            <div>{{ scope.row.gender == 0?'未知':scope.row.gender == 1?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="phone_number" label="联系方式" />
        <el-table-column property="address" label="地区">
          <template #default="scope">
            <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="signature" label="个性签名"/>
        <el-table-column property="create_time" label="创建时间" >
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd hh:mm:ss')}}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" :size="50" v-model="page" @change="getList"/>
  </div>
</template>

<script setup lang="ts">
import { ref ,computed } from 'vue'
import { formatDate } from '@/utils/date'
import TopBtns from "@/components/TopBtns.vue";
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getWxUser_api, setSync_api, getSyncInfo_api } from '@/api/findC'
import {useRoute} from 'vue-router'
import { mainStore } from '@/store/index'
import { getHashStr,strToArr} from '@/utils/index'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

interface IData {
  avatar_url: string
  city: number
  country: string
  create_time: number
  district: number
  gender: number
  nick_name: string
  phone_number: string
  province: number
  signature: string
  wechat_id: string
  id: number | string
}
const tableData = ref<IData[]>([])
const route = useRoute()
const page = ref(1)
const total = ref(0)
const loading = ref(false)
const getList = ()=>{
  loading.value = true
  getWxUser_api({
    did: route.query.id,
    size: 50,
    current: page.value
  }).then((res:res)=>{
    if(res.status == 1){
      tableData.value = res.body.records
      total.value = res.body.total
    }
    loading.value = false
  }).catch(()=>{
    loading.value = false
  })
}
getList()
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
.wxdata_details_c{
  height: 100%;
  .mytable{
    height: calc( 100% - 126px )
  }
}
</style>