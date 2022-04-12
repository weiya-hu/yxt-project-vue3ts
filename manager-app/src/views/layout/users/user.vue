<template>
  <div class="user_page">
    <div class="ftitle">用户管理</div>
    <el-card class="mycard" header="用户列表">
      <div class="mytable">
        <el-table :data="tableData" border>
          <el-table-column prop="name" label="用户名"/>
          <el-table-column prop="real_name" label="真实姓名">
            <template #default="{row}">{{row.real_name||'-'}}</template>
          </el-table-column>
          <el-table-column prop="mobile" label="电话"/>
          <el-table-column property="create_time" label="注册时间">
            <template #default="{row}">
              <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="level" label="会员等级">
            <template #default="{row}"><span v-if="row.level&&lvList.length">{{lvList.find(v => v.id == row.level).name}}</span></template>
          </el-table-column>
          <el-table-column property="status" label="账号状态">
            <template #default="{row}">
              <el-switch v-if="row.id" :active-value="1" :inactive-value="0" v-model="row.status" @change="changeStaffStatus(row)"/>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{row}">
              <div class="fcs">
                <el-link type="primary" @click="$router.push('userinfo?id=' + row.id)">详细信息</el-link>
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
      </div>
      <Mypage :total="total" v-model="page" @change="getList" :size="size"/>
    </el-card>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { formatDate } from '@/utils/date'
import { getUserList_api, setUserStatus_api, getLevelList_api, size } from '@/api/users'

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const getList = async () => {
  const res = await getUserList_api({
    size,
    current: page.value,
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

const changeStaffStatus = async (val:any) => {
  if(val.id){
    const res = await setUserStatus_api({ id:val.id })
  }
}

const lvList = ref<any[]>([])
const getLvlist = async () => {
  const res = await getLevelList_api()
  if(res.status == 1) lvList.value = res.body
}
getLvlist()

</script>

<script lang="ts">
export default { name:'User' }
</script>

<style scoped lang="scss">
.items{
  background-color: #fff;
  width: 200px;
  height: 30px;
  margin-bottom: 5px;
}
.ghost{
  opacity: 0.5;
}
</style>