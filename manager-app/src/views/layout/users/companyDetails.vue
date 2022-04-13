<template>
  <div class="companydetails_page">
    <DetailsHeader/>
    <el-card class="mycard mt20">
      <template #header>
        <div class="fsc">
          <span>产品与服务</span>
          <el-button type="primary" @click="show = true">+ 添加</el-button>
        </div>
      </template>
    </el-card>
    <div class="flex mt20">
      <el-card class="mycard mr20 f1" header="用户信息">
        <el-table :data="tableData" border>
          <el-table-column prop="name" label="用户名"/>
          <el-table-column prop="mobile" label="电话"/>
          <el-table-column prop="create_time" label="注册时间">
            <template #default="{row}">{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
        <Mypage :total="total" v-model="page" @change="getList" :size="size"/>
      </el-card>
      <el-card class="card1 f1">
        <el-descriptions :column="1">
          <el-descriptions-item label="企业名称">{{info.name}}</el-descriptions-item>
          <el-descriptions-item label="所属行业" v-if="info.industry_id">{{getHashStr(info.industry_id.split(','),typeHash)}}</el-descriptions-item>
          <el-descriptions-item label="统一社会信用代码" label-class-name="icode">{{info.code}}</el-descriptions-item>
          <el-descriptions-item label="资质照片">
            <img :src="info.license" alt="" class="zzimg lookhover" @click="lookImage([info.license],0)">
          </el-descriptions-item>
          <el-descriptions-item label="证照有效期">{{formatDate(new Date(info.left_time),'yyyy-MM-dd')}}</el-descriptions-item>
          <el-descriptions-item label="联系人">{{info.legal_person}}</el-descriptions-item>
          <el-descriptions-item label="联系电话">{{info.contact}}</el-descriptions-item>
          <el-descriptions-item label="注册地址">{{info.address}}</el-descriptions-item>
          <el-descriptions-item label="官网地址">
            <el-link type="primary" :href="info.url" target="_blank">{{info.url}}</el-link>
          </el-descriptions-item>
          <el-descriptions-item label="经营范围">{{info.business_scope}}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>

    <el-drawer v-model="show" @close="closeDra">
      <template #title><div class="fw600">已购产品</div></template>
      <div class="fjend"><el-button type="primary" @click="addShow = true">新增</el-button></div>
      <div class="addbox" v-show="addShow">
        <el-form :model="addForm" :rules="addRules" ref="addFormRef">
          <el-form-item label="&emsp;产品" prop="id">
            <el-select v-model="addForm.id" placeholder="请选择产品" >
            </el-select>
          </el-form-item>
          <el-form-item label="有效期" prop="time">
            <el-date-picker v-model="addForm.time" placeholder="请选择有效期" />
          </el-form-item>
          <div class="fjend">
            <el-button type="primary">确定</el-button>
            <el-button class="ml20" @click="closeAdd">取消</el-button>
          </div>
        </el-form>
      </div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary">&emsp;确定&emsp;</el-button>
          <el-button @click="closeDra">&emsp;取消&emsp;</el-button>
        </div>
      </template>
    </el-drawer>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import DetailsHeader from "@/components/DetailsHeader.vue";
import { getCompanyUserList_api, getCompanyInfo_api, size } from '@/api/users'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'
import { getHashStr, lookImage } from '@/utils/index'

const store = mainStore()
const typeHash = computed(() => store.state.typeHash)

const route = useRoute()
const cid = route.query.id as string

const tableData = ref([])
const page = ref(1)
const total = ref(0)
const getList = async () => {
  const res = await getCompanyUserList_api({
    size,
    current: page.value,
    cid,
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

const info = ref<any>({})
const getInfo = async () => {
  const res = await getCompanyInfo_api({ cid })
  if(res.status == 1){
    info.value = res.body
  }
}
getInfo()

const show = ref(false)
const addShow = ref(false)
const addFormRef = ref()
const addForm = reactive({
  time:'',
  id:''
})
const addRules = reactive({
  time: [{ required: true, message: '请选择产品！', trigger: 'change' }],
  id: [{ required: true, message: '请选择有效期！', trigger: 'change' }],
})
const closeAdd = () => {
  addFormRef.value.resetFields()
  addShow.value = false
}
const closeDra = () => {
  closeAdd()
  show.value = false
}

</script>

<style scoped lang="scss">
.companydetails_page{
  .card1{
    :deep(.el-card__body){
      padding-top: 8px;
    }
    :deep(.el-descriptions__cell){
      padding-top: 12px;
      border-bottom: 1px solid $colorddd;
      .el-descriptions__label{
        display: inline-block;
        width: 100px;
      }
    }
    :deep(.icode){
      width: 60px!important;
      padding-right: 40px;
      vertical-align: middle!important;
    }
    .zzimg{
      width: 100px;
      height: 60px;
    }
  }
  .fw600{
    font-size: 20px;
  }
  .addbox{
    border: 1px solid $colorddd;
    padding: 16px;
  }
}
</style>