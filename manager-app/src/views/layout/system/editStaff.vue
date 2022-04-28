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
          <el-tree :data="menuList" :props="defaultProps" node-key="permission_id" show-checkbox ref="lvtree"/>
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
import { mainStore } from '@/store/index'

const store = mainStore()
const route = useRoute()
const router = useRouter()
const buid = route.query.id as string

const defaultProps = {
  children: 'children',
  label: 'name',
}
const lvtree = ref()
const menuList = ref<any[]>([])
const getMenuList = async () => {
  const res = await getLvList_api()
  menuList.value = res.body
  getStaffLv()
}
getMenuList()

const uinfo = ref<any>({
  dept_name: [],
  name: "",
  per_list: []
})
const getStaffLv = async () => {
  if(!buid) return
  const res = await getStaffInfo_api({ id: buid })
  uinfo.value = res.body
  // uinfo.value.per_list = uinfo.value.per_list.filter((v:number|string) => !menuList.value.find(j => Number(v) == Number(j.permission_id))) // 剔除一级权限，setCheckedKeys方法会选中一级权限下所有子权限
  const lvList = ref<number[]>([])
  uinfo.value.per_list.forEach((v:number|string) => {
    menuList.value.forEach((j) => {
      j.children.forEach((k:any) => {
        if(k.children){
          k.children.forEach((l:any) => {
            if(l.permission_id == v){
              lvList.value.push(Number(v))
            }
          });
        }else{
          if(k.permission_id == v){
            lvList.value.push(Number(v))
          }
        }
      });
    })
  })
  lvtree.value.setCheckedKeys(lvList.value)
}

const setStaffLv = async () => {
  if(!buid) return
  const id = lvtree.value.getCheckedKeys() // 选中的
  const hid = lvtree.value.getHalfCheckedKeys() // 半选中
  const pidList = id.concat(hid)
  const res = await setStaffLv_api({
    buid,
    list: pidList,
  })
  if(res.status == 1){
    if(store.state.userInfo.buid == buid){
      store.setUserLv().then((userLv:string[])=>{
        if(userLv.indexOf('24') == -1){
          // 24 管理员设置
          router.replace('/index')
          return
        }
        router.back()
      })
      return
    }
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