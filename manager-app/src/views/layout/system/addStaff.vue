<template>
  <div class="addstaff_page">
    <div class="fsc">
      <DetailsHeader/>
      <el-button type="primary" @click="sureAdd" size="large">确认添加</el-button>
    </div>
    <div class="flex mt20">
      <el-card class="mycard mr20 f1" style="height:100%">
        <template #header>
          <div class="fcc mb20">基本信息</div>
        </template>
        <div class="fcc">
          <el-form :model="info" :rules="rules" ref="addFormRef">
            <el-form-item label="姓&emsp;名：" prop="name">
              <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号：" prop="mobile">
              <el-input v-model="info.mobile" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item label="部&emsp;门：" prop="dept_id">
              <el-select v-model="info.dept_id" placeholder="请选择部门">
                <el-option :label="v.dept_name" :value="v.id" v-for="(v,i) in deptList" :key="i"/>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <el-card class="mycard f1">
        <template #header>
          <div class="fcc mb20">权限</div>
        </template>
        <el-tree :data="menuList" :props="defaultProps" node-key="pid" show-checkbox ref="lvtree"/>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import DetailsHeader from "@/components/DetailsHeader.vue";
import { getDeptList_api, getLvList_api, addStaff_api } from '@/api/system'
import { useRouter } from 'vue-router'
import { mainStore } from '@/store/index'
import { telReg } from '@/utils/index'
const deptList = ref<any>([])
const getDeptList = async () => {
  const res = await getDeptList_api()
  if(res.status == 1){
    deptList.value = res.body
  }
}
getDeptList()
const info = reactive({
  name:'',
  mobile:'',
  dept_id:''
})
const telPass = (rule:any, value:string, callback:any) => {
  if(telReg.test(value)){
    callback()
  }else{
    callback(new Error('请输入正确的手机号码!'))
  }
}
const rules = reactive({
  name: [
    { required: true, message: '请输入姓名！', trigger: 'blur' },
    { min: 1, max:12, message: '姓名长度须在1~12个字符！', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: telPass, trigger: 'blur' },
  ],
  dept_id: [{ required: true, message: '请选择部门!', trigger: 'blur' }],
})
const addFormRef = ref()

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

const store = mainStore()
const router = useRouter()
const sureAdd = () => {
  addFormRef.value.validate(async (valid:boolean) => {
    if(valid){
      const id = lvtree.value.getCheckedKeys() // 选中的
      const hid = lvtree.value.getHalfCheckedKeys() // 半选中
      const pid = id.concat(hid)
      const res = await addStaff_api({
        ...info,pid
      })
      if(res.status == 1){
        store.setKeepList([])
        router.back()
      }
    }
  })
}
</script>

<style scoped lang="scss">

</style>