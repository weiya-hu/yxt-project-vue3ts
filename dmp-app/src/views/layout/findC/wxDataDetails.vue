<template>
  <div class="addata_details_c">
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
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
  </div>
</template>

<script setup lang="ts">
import { ref ,computed } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import { getWxUser_api } from '@/api/findC'
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
}
const tableData = ref<IData[]>([])
const route = useRoute()
const getList = ()=>{
  getWxUser_api({wechat_id:route.query.id}).then((res:res)=>{
    if(res.status == 1){
      res.body.wechat_id && (tableData.value[0] = res.body)
    }
  })
}
getList()
const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}
</script>

<style scoped lang="scss">

</style>