<template>
  <div class="companydetails_page">
    <DetailsHeader/>
    <el-card class="mycard mt20">
      <template #header>
        <div class="fsc f1">
          <span>产品与服务</span>
          <el-button type="primary" @click="show = true">管理</el-button>
        </div>
      </template>
      <div class="pro_list fw fcs">
        <div class="pro_item" v-for="v in companyProList" :key="v.id" :class="getKzProduct(v.product_id).class">
          <div class="p_name fcs">产品：<img :src="v.thumb_url" alt="" v-if="v.thumb_url"/>{{v.product_name}}</div>
          <div class="v_name">版本：{{v.version_name}}</div>
          <div class="time">有效期至：{{formatDate(new Date(v.left_time * 1))}}</div>
        </div>
      </div>
    </el-card>
    <div class="flex mt20">
      <el-card class="mycard mr20 f1" header="用户信息">
        <el-table :data="tableData" :border="true">
          <el-table-column prop="name" label="用户名"/>
          <el-table-column prop="mobile" label="电话"/>
          <el-table-column prop="create_time" label="注册时间">
            <template #default="{row}">{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</template>
          </el-table-column>
          <template #empty>
            <MyEmpty/>
          </template>
        </el-table>
        <Mypage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
      </el-card>
      <el-card class="card1 f1">
        <el-descriptions :column="1">
          <el-descriptions-item label="企业名称">{{info.name}}</el-descriptions-item>
          <el-descriptions-item label="所属行业" v-if="info.industry_id">{{getHashStr(info.industry_id.split(','),typeHash)}}</el-descriptions-item>
          <el-descriptions-item label="统一社会信用代码" label-class-name="icode">{{info.code}}</el-descriptions-item>
          <el-descriptions-item label="资质照片">
            <img :src="info.license[0]" alt="" v-if="info.license && info.license[0]" class="zzimg lookhover" @click="lookImage(info.license,0)">
            <img :src="info.license[1]" alt="" v-if="info.license && info.license[1]" class="zzimg lookhover ml20" @click="lookImage(info.license,1)">
          </el-descriptions-item>
          <el-descriptions-item label="证照有效期" v-if="info.left_time">
            {{info.left_time == 4102415999000 ? '永久' : formatDate(new Date(info.left_time),'yyyy-MM-dd')}}
          </el-descriptions-item>
          <el-descriptions-item label="联系人">{{info.legal_person}}</el-descriptions-item>
          <el-descriptions-item label="联系电话">{{info.contact}}</el-descriptions-item>
          <el-descriptions-item label="注册地址">{{info.address}}</el-descriptions-item>
          <el-descriptions-item label="官网地址">
            <el-link type="primary" :href="'//' + info.url" target="_blank">{{info.url}}</el-link>
          </el-descriptions-item>
          <el-descriptions-item label="经营范围">{{info.business_scope}}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>

    <el-drawer v-model="show" @close="closeDra">
      <template #title><div class="fw600">已购产品</div></template>
      <div class="fjend mb20" v-if="info.status == 3"><el-button type="primary" @click="addShow = true">+ 新增</el-button></div>
      <div class="addbox mb20" v-show="addShow">
        <el-form :model="addForm" :rules="addRules" ref="addFormRef">
          <el-form-item label="&emsp;产品" prop="version_id">
            <el-select v-model="addForm.version_id" placeholder="请选择产品" class="f1">
              <el-option
                v-for="item in proList"
                :key="item.version_id"
                :label="item.version_name"
                :value="item.version_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="有效期" prop="left_time">
            <el-date-picker type="datetime" value-format="x" v-model="addForm.left_time" placeholder="请选择有效期" class="f1"/>
          </el-form-item>
          <div class="fjend">
            <el-button type="primary" @click="sureAdd">确定</el-button>
            <el-button class="ml20" @click="closeAdd">取消</el-button>
          </div>
        </el-form>
      </div>
      <div class="pro_list">
        <div class="pro_item fsc" v-for="v in companyProList" :key="v.id" :class="getKzProduct(v.product_id).class" style="margin-right: 0">
          <div>
            <div class="p_name fcs">产品：<img :src="v.thumb_url" alt="" v-if="v.thumb_url"/>{{v.product_name}}</div>
            <div class="v_name">版本：{{v.version_name}}</div>
            <div class="time">有效期至：{{formatDate(new Date(v.left_time * 1))}}</div>
          </div>
          <div class="rt">
            <el-icon class="chover" size="16px" @click="goDel(v)"><Delete /></el-icon>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="closeDra">&emsp;确定&emsp;</el-button>
          <el-button @click="closeDra">&emsp;取消&emsp;</el-button>
        </div>
      </template>
    </el-drawer>
    <MyDialog v-model="delShow" :msg="'确认删除 “ ' + nowIns.version_name +' ” ?'" @sure="sureDel"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Mypage from "@/components/Mypage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import DetailsHeader from "@/components/DetailsHeader.vue";
import MyDialog from "@/components/MyDialog.vue";
import { getCompanyUserList_api, getCompanyInfo_api, getCProduct_api, getCompanyProduct_api, addCProductIns_api, delCProductIns_api } from '@/api/users'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'
import { getHashStr, lookImage } from '@/utils/index'
import { getKzProduct } from "@/utils/config";
import { Delete } from '@element-plus/icons-vue'

const store = mainStore()
const typeHash = computed(() => store.state.typeHash)

const route = useRoute()
const cid = route.query.id as string

const tableData = ref([])
const page = ref(1)
const size = ref(20)
const total = ref(0)
const getList = async () => {
  const res = await getCompanyUserList_api({
    size: size.value,
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
    res.body.license = res.body.license.split(',')
    info.value = res.body
  }
}
getInfo()

const proList = ref<any[]>([])
const companyProList = ref<any[]>([])
const getProList = async () => {
  const res = await getCProduct_api()
  if(res.status === 1) proList.value = res.body
}
getProList()
const getCompanyProList = async () => {
  const res = await getCompanyProduct_api({ cid })
  if(res.status === 1) companyProList.value = res.body
}
getCompanyProList()

const sureAdd = () => {
  addFormRef.value.validate(async (flag: boolean) => {
    if(flag){
      const res = await addCProductIns_api({
        ...addForm,
        cid
      })
      if(res.status){
        getCompanyProList()
        closeAdd()
      }
    }
  })
}

const delShow = ref(false)
const nowIns = ref<any>({})
const goDel = (item: any) => {
  nowIns.value = item
  delShow.value = true
}
const sureDel = async () => {
  const { status } = await delCProductIns_api({
    cid,
    id: nowIns.value.id
  })
  if(status){
    getCompanyProList()
    delShow.value = false
  }
}

const show = ref(false)
const addShow = ref(false)
const addFormRef = ref()
const addForm = reactive({
  left_time: '',
  version_id: ''
})
const addRules = reactive({
  left_time: [{ required: true, message: '请选择产品！', trigger: 'change' }],
  version_id: [{ required: true, message: '请选择有效期！', trigger: 'change' }],
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