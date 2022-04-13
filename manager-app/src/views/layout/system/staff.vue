<template>
  <div class="staff_page">
    <div class="page_header">管理员设置</div>

    <el-card>
      <el-form :model="search" inline class="inline_myform">
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="search.userName" placeholder="输入姓名搜索"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="search.mobile" placeholder="输入电话搜索"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="deptId">
          <el-select v-model="search.deptId" placeholder="选择部门搜索">
            <el-option :label="v.dept_name" :value="v.id" v-for="(v,i) in deptList" :key="i"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goSearch">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="mycard mt20">
      <template #header>
        <div class="fsc">
          <span>管理员列表</span>
          <el-button type="primary" @click="$router.push('addstaff')">添加人员</el-button>
        </div>
      </template>
      <div class="mytable">
        <el-table :data="tableData" border>
          <el-table-column prop="user_name" label="姓名"/>
          <el-table-column prop="dept_name" label="所属部门"/>
          <el-table-column prop="mobile" label="电话"/>
          <el-table-column property="log_time" label="最近一次登录">
            <template #default="{row}">
              <div>{{formatDate(new Date(row.log_time),'yyyy-MM-dd hh:mm:ss')}}</div>
            </template>
          </el-table-column>
          <el-table-column property="user_status" label="账号状态">
            <template #default="{row}">
              <el-switch :active-value="1" :inactive-value="0" v-model="row.user_status" @change="changeStaffStatus(row)"/>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{row}">
              <div class="fcs">
                <el-link type="primary" @click="$router.push('editstaff?id=' + row.bg_uid)">修改权限</el-link>
                <span class="line"></span>
                <el-link type="primary" @click="delStaff(row.bg_uid)">删除</el-link>
              </div>
            </template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
      </div>
      <MyPage :total="total" v-model="page" @change="getList" :size="size"/>
    </el-card>

    <MyDialog v-model="delShow" :msg="'确认删除此用户?'" @sure="sureDel"/>
    
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { getDeptList_api, getStaffList_api, setStaffStatus_api, delStaff_api, size } from '@/api/system'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
const deptList = ref<any>([])
const getDeptList = async () => {
  const res = await getDeptList_api()
  if(res.status == 1){
    deptList.value = res.body
  }
}
getDeptList()

const search = reactive({
  userName:'',
  mobile:'',
  deptId:''
})
const goSearch = () => {
  getList()
}
const reset = () => {
  search.userName = ''
  search.deptId = ''
  search.mobile = ''
}

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const getList = async () => {
  const res = await getStaffList_api({
    size,
    current: page.value,
    ...search
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

const changeStaffStatus = async (val:any) => {
  if(val.bg_uid){
    const res = await setStaffStatus_api({
      bg_uid: val.bg_uid,
      user_status: val.user_status
    })
  }
}

const delId = ref(0)
const delShow = ref(false)
const delStaff = (bg_uid:number) => {
  delId.value = bg_uid
  delShow.value = true
}
const sureDel = async () => {
  const res = await delStaff_api({ bg_uid:delId.value })
  if(res.status == 1){
    delShow.value = false
    getList()
  }
}

</script>

<script lang="ts">
export default { name:'Staff' }
</script>

<style scoped lang="scss">

</style>