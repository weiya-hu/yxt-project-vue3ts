<template>
  <div class="userinfo_page">
    <DetailsHeader/>
    <el-card class="mycard mt20" header="基本信息">
      <el-descriptions :column="2">
        <el-descriptions-item label="用户名">{{userInfo.name}}</el-descriptions-item>
        <el-descriptions-item label="头像" class-name="avater_item" label-class-name="avater_item_label">
          <el-avatar :size="50" :src="userInfo.head" class="lookhover" @click="lookImage([userInfo.head],0)"/>
        </el-descriptions-item>
        <el-descriptions-item label="真实姓名">{{userInfo.real_name||'-'}}</el-descriptions-item>
        <el-descriptions-item label="性别">{{userInfo.sex == 1 ? '男' : userInfo.sex == 2 ? '女' : '未知'}}</el-descriptions-item>
        <el-descriptions-item label="手机号码">{{userInfo.mobile}}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{userInfo.email||'-'}}</el-descriptions-item>
        <el-descriptions-item label="地区" v-if="userInfo.id">{{getHashStr(strToArr(userInfo.province, userInfo.city, userInfo.district), addressHash)}}</el-descriptions-item>
        <el-descriptions-item label="出生日期">{{userInfo.birth}}</el-descriptions-item>
        <el-descriptions-item label="注册时间">{{formatDate(new Date(userInfo.create_time),'yyyy-MM-dd')}}</el-descriptions-item>
        <el-descriptions-item label="账号状态">
          <el-switch v-if="userInfo.id" :active-value="1" :inactive-value="0" v-model="userInfo.status" @change="changeStaffStatus"/>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card class="mycard mt20" header="会员信息">
      <el-descriptions :column="2">
        <el-descriptions-item label="邀请码">{{userInfo.invite_code}}</el-descriptions-item>
        <el-descriptions-item label="会员等级" v-if="userInfo.level && lvList.length">{{lvList.find(v => v.id == userInfo.level).name}}</el-descriptions-item>
        <el-descriptions-item label="邀请者">{{userInfo.inviter||'-'}}</el-descriptions-item>
        <el-descriptions-item label="会员积分">{{userInfo.integral}}</el-descriptions-item>
        <el-descriptions-item label="下级用户数">{{userInfo.direct_count}}</el-descriptions-item>
        <!-- <el-descriptions-item label="会员权益"></el-descriptions-item> -->
      </el-descriptions>
    </el-card>
    <el-card class="mycard mt20" header="企业信息">
      <el-descriptions :column="2" v-for="(v, i) in companyInfo" :key="i">
        <el-descriptions-item label="企业名称">
          <el-link type="primary" class="lineh1" @click="$router.push('/users/companydetails?id=' + v.id)">{{v.name}}</el-link>
          <el-tag class="ml20" v-if="v.type == 1">管理员</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card class="mycard mt20" header="产品与服务">
      <template #header>
        <div class="fsc f1">
          <span>产品与服务</span>
          <el-button type="primary" @click="show = true">管理</el-button>
        </div>
      </template>
      <div class="pro_list fw fcs">
        <div class="pro_item" v-for="v in userProList" :key="v.id" :class="getKzProduct(v.product_id).class">
          <div class="p_name fcs">产品：<img :src="v.thumb_url" alt="" v-if="v.thumb_url"/>{{v.product_name}}</div>
          <div class="v_name">版本：{{v.version_name}}</div>
          <div class="time">有效期至：{{formatDate(new Date(v.left_time * 1))}}</div>
        </div>
      </div>
    </el-card>

    <el-drawer v-model="show" @close="closeDra">
      <template #title><div class="fw600">已购产品</div></template>
      <div class="fjend mb20" v-if="userInfo.status === 1"><el-button type="primary" @click="addShow = true">+ 新增</el-button></div>
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
        <div class="pro_item fsc" v-for="v in userProList" :key="v.id" :class="getKzProduct(v.product_id).class" style="margin-right: 0">
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
import DetailsHeader from "@/components/DetailsHeader.vue";
import MyDialog from "@/components/MyDialog.vue";
import { setUserStatus_api, getUserInfo_api, getLevelList_api, getUserCompanyList_api, getUProduct_api, getUserProduct_api, addUProductIns_api, delUProductIns_api } from '@/api/users'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, lookImage } from '@/utils/index'
import { getKzProduct } from "@/utils/config";
import { Delete } from '@element-plus/icons-vue'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const route = useRoute()
const uid = route.query.id as string

const userInfo = ref<any>({})
const companyInfo = ref<any>({})
const getUserInfo = async () => {
  if(uid){
    const res = await getUserInfo_api({ id: uid })
    if(res.status == 1){
      userInfo.value = res.body
    }
    const res1 = await getUserCompanyList_api({ id: uid })
    if(res1.status == 1){
      companyInfo.value = res1.body
    }
  }
}
getUserInfo()

const changeStaffStatus = async () => {
  if(userInfo.value.id){
    await setUserStatus_api({ id: uid })
    store.setKeepList([])
  }
}

const lvList = ref<any[]>([])
const getLvlist = async () => {
  const res = await getLevelList_api()
  if(res.status == 1) lvList.value = res.body
}
getLvlist()

const proList = ref<any[]>([])
const userProList = ref<any[]>([])
const getProList = async () => {
  const res = await getUProduct_api()
  if(res.status === 1) proList.value = res.body
}
getProList()
const getUserProList = async () => {
  const res = await getUserProduct_api({ uid })
  if(res.status === 1) userProList.value = res.body
}
getUserProList()

const sureAdd = () => {
  addFormRef.value.validate(async (flag: boolean) => {
    if(flag){
      const res = await addUProductIns_api({
        ...addForm,
        uid
      })
      if(res.status){
        getUserProList()
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
  const { status } = await delUProductIns_api({
    uid,
    id: nowIns.value.id
  })
  if(status){
    getUserProList()
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
.userinfo_page{
  :deep(.avater_item){
    display: inline-flex;
    height: 50px;
    vertical-align: top;
    position: relative;
    border-left: none;
    &::after{
      content: '';
      position: absolute;
      height: 16px;
      width: 1px;
      left: 0;
      background-color: $color999;
      top: 50%;
      transform: translate(0,-50%);
    }
  }
  :deep(.avater_item_label){
    display: inline-flex;
    height: 50px;
    vertical-align: top;
    align-items: center;
  }
  .mycard{
    :deep(.el-card__body){
      padding-bottom: 8px;
    }
  }
  .lineh1{
    line-height: 1;
    vertical-align: baseline;
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