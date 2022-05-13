<template>
  <div class="editpass_page">
    <DetailsHeader/>
    <el-card class="fcc mt20 pt20">
      <el-form :model="passForm" :rules="rules" ref="passFormRef" size="large">
        <el-form-item label="原密码：&emsp;" prop="oldPass">
          <el-input v-model="passForm.oldPass" placeholder="请输入原密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="新密码：&emsp;" prop="pass">
          <el-input v-model="passForm.pass" placeholder="请输入新密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input v-model="passForm.checkPass" placeholder="请再次输入新密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="f1" type="primary" @click="onSubmit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import DetailsHeader from "@/components/DetailsHeader.vue";
import type { FormInstance } from 'element-plus'
import { editPass_api, loginOut_api } from '@/api/login'
import { useRouter } from 'vue-router'
import { passReg } from '@/utils/index'

const router = useRouter()

const passFormRef = ref<FormInstance>()

const passForm = reactive({
  oldPass:'',
  pass: '',
  checkPass: '',
})

const validatePass = (rule: any, value: any, callback: any) => {
  if (value && passForm.pass !== '') {
    if (!passFormRef.value) return
    passFormRef.value.validateField('pass', () => null)
  }
  callback()
}
const validatePass1 = (rule: any, value: any, callback: any) => {
  if(value === passForm.oldPass){
    callback(new Error('新旧密码不能相同！'))
  } else if(!passReg.test(value)){
    callback(new Error('密码只能由数字及字母组成'))
  } else {
    if (passForm.checkPass !== '') {
      if (!passFormRef.value) return
      passFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== passForm.pass) {
    callback(new Error('两次密码输入不一致！'))
  } else {
    callback()
  }
}

const rules = reactive({
  oldPass: [
    { required: true, message: '请输入原密码！', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ],
  pass: [
    { required: true, message: '请输入新密码！', trigger: 'blur' },
    { min: 6, max:12, message: '密码长度须在6~12个字符！', trigger: 'blur' },
    { validator: validatePass1, trigger: 'blur' },
  ],
  checkPass: [
    { required: true, message: '请再次输入新密码！', trigger: 'blur' },
    { validator: validatePass2, trigger: 'blur' }
  ],
})

const onSubmit = () => {
  passFormRef.value!.validate(async (valid:boolean) => {
    if(valid){
      const res = await editPass_api({
        old_passwd:passForm.oldPass,
        one_passwd:passForm.pass,
        two_passwd:passForm.checkPass,
      })
      if(res.status == 1){
        loginOut_api().then((res1:res)=>{
          if(res1.status == 1){
            sessionStorage.removeItem('islogin')
            router.replace('/login')
          }
        })
      }
    }
  })
}
</script>

<style scoped lang="scss">

</style>