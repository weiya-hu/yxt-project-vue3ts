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
        <el-descriptions-item label="会员等级" v-if="userInfo.id">{{lvList.find(v => v.id == userInfo.level).name}}</el-descriptions-item>
        <el-descriptions-item label="邀请者">{{userInfo.inviter||'-'}}</el-descriptions-item>
        <el-descriptions-item label="会员积分">{{userInfo.integral}}</el-descriptions-item>
        <el-descriptions-item label="下级用户数">{{userInfo.direct_count}}</el-descriptions-item>
        <!-- <el-descriptions-item label="会员权益"></el-descriptions-item> -->
      </el-descriptions>
    </el-card>
    <el-card class="mycard mt20" header="企业信息">
      <el-descriptions :column="2">
        <el-descriptions-item label="企业名称"></el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card class="mycard mt20" header="产品与服务">
      
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailsHeader from "@/components/DetailsHeader.vue";
import { setUserStatus_api, getUserInfo_api, getLevelList_api, getUserCompanyList_api } from '@/api/users'
import { formatDate } from '@/utils/date'
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, lookImage } from '@/utils/index'

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
    const res = await setUserStatus_api({ id: uid })
    store.setKeepList([])
  }
}

const lvList = ref<any[]>([])
const getLvlist = async () => {
  const res = await getLevelList_api()
  if(res.status == 1) lvList.value = res.body
}
getLvlist()

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
}
</style>