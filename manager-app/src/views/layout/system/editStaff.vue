<template>
  <div class="editstaff_page">
    <div class="fsc">
      <DetailsHeader/>
      <el-button type="primary" @click="setStaffLv" size="large">确认修改</el-button>
    </div>
    <el-card class="mt20">
      <div class="flex">
        <div class="lt">
          <div class="fw600 pl20">修改对象</div>
          <div class="fsc mt20 bgceee">
            <div>{{uinfo.name}}</div>
            <span>{{uinfo.dept_name.join()}}</span>
          </div>
        </div>
        <div class="rt f1 ml20">
          <div class="fw600 mb20 pt20">修改权限</div>
          <el-tree :data="menuList" :props="defaultProps" node-key="pid" show-checkbox :default-checked-keys="uinfo.per_list" ref="lvtree"/>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailsHeader from "@/components/DetailsHeader.vue";
import { useRoute, useRouter } from 'vue-router'
import { getLvList_api, getStaffInfo_api, setStaffLv_api } from '@/api/system'
const route = useRoute()
const router = useRouter()
const bg_uid = route.query.id as string

const defaultProps = {
  children: 'children',
  label: 'name',
}
const lvtree = ref()
const menuList = ref<any[]>([])
const getMenuList = async () => {
  const res = await getLvList_api()
  menuList.value = res.body
}
getMenuList()

const uinfo = ref<any>({
  dept_name: [],
  name: "",
  per_list: []
})
const getStaffLv = async () => {
  if(!bg_uid) return
  const res = await getStaffInfo_api({ id: bg_uid })
  uinfo.value = res.body
}
getStaffLv()

const setStaffLv = async () => {
  if(!bg_uid) return
  const id = lvtree.value.getCheckedKeys() // 选中的
  const hid = lvtree.value.getHalfCheckedKeys() // 半选中
  const pid = id.concat(hid)
  const res = await setStaffLv_api({
    bg_uid,
    list: pid
  })
  if(res.status == 1){
    router.back()
  }
}
</script>

<style scoped lang="scss">
.editstaff_page{
  .fw600{
    font-size: 18px;
  }
  .lt{
    border: 1px solid $color666;
    padding: 20px 0;
    width: 300px;
    .bgceee{
      background-color: $coloreee;
      height: 50px;
      padding: 0 20px;
      span{
        color:$color999
      }
    }
  }
}
</style>