<template>
  <div class="login_page fcc">
    <el-tabs v-model="activeName" class="login_tabs">
      <el-tab-pane label="账号密码登录" name="acc">
        <el-form :model="user" :rules="rules" ref="userFormRef" size="large">
          <el-form-item label="手机号" prop="acc">
            <el-input v-model="user.acc" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密&emsp;码" prop="password">
            <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="imgCode">
            <div class="fcs">
              <el-input v-model="user.imgCode" placeholder="请输入验证码" class="yzm_ipt"></el-input>
              <img :src="imgCode" alt="重新获取" @click="T_getImgCode" class="img_code">
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="f1" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="短信登录" name="sms" disabled>
        <el-form :model="telForm" :rules="telRules" ref="telFormRef" size="large">
          <el-form-item label="手机号" prop="tel">
            <el-input v-model="telForm.tel" placeholder="请输入手机号">
              <template #prepend>
                <el-select v-model="acode" style="width: 80px">
                  <el-option :label="'+' + v.value" :value="v.value" v-for="(v,i) in areaNum" :key="i">{{v.name + ' +' + v.value}}</el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="yzm">
            <div class="fcs f1">
              <el-input v-model="telForm.yzm" placeholder="请输入验证码" class="yzm_ipt"></el-input>
              <el-button class="f1" type="primary" @click="getSms" :disabled="smsTime > 0">{{smsTime === 0 ? '获取验证码':smsTime + 'S'}}</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="f1" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { sendSms_api, doLogin_api, getImgCode_api } from '@/api/login'
import areaNum from '@/utils/areaNum'
import { telReg } from '@/utils/index'
import { throttle } from 'lodash'

const router = useRouter()

const activeName = ref('acc')

const imgCode = ref('')
const getImgCode = async () => {
  const res = await getImgCode_api()
  if(res.status == 1){
    imgCode.value = res.body
  }
}
const T_getImgCode = throttle(getImgCode,5000)
T_getImgCode()

const user = reactive({
  acc: '',
  password: '',
  imgCode:''
})
const userFormRef = ref()
const rules = reactive({
  acc: [{ required: true, message: '请输入用户名！', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
  imgCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})

const telForm = reactive({
  tel: '',
  yzm: '',
})
const telFormRef = ref()
const telPass = (rule:any, value:string, callback:any) => {
  if(telReg.test(value)){
    callback()
  }else{
    callback(new Error('请输入正确的手机号码!'))
  }
}
const telRules = reactive({
  tel: [
    { required: true, message: '请输入手机号！', trigger: 'blur' },
    { validator: telPass, trigger: 'blur' },
  ],
  yzm: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
})

const smsTime = ref(0)
const changeTime = () =>{
  const timer = setInterval(()=>{
    if(smsTime.value > 0){
      smsTime.value -- 
    }else{
      clearInterval(timer)
      smsTime.value = 0
      localStorage.removeItem('smstime')
    }
  },1000)
}

const acode = ref('86')
const getSms = () => {
  telFormRef.value.validateField('tel',async (valid:boolean) => {
    if(valid){
      smsTime.value = 120
      changeTime()
      localStorage.setItem('smstime',new Date().getTime().toString())
      const res = await sendSms_api({
        mobile: telForm.tel,
        acode: '+' + acode.value
      })
    }
  })
}

const onSubmit = () => {
  if(activeName.value == 'acc'){
    userFormRef.value.validate(async (valid:boolean) => {
      if(valid){
        const res = await doLogin_api({
          "act": user.acc,
          "captcha": user.imgCode,
          "passwd": user.password
        })
        if(res.status == 1){
          if(res.body == 1){
            router.replace('/index')
          }else{
            router.replace('/index/editpass')
          }
        } 
      }
    })
  }else{
    telFormRef.value.validate(async (valid:boolean) => {
      if(valid){
        // const res = await doLogin_api({
        //   type: 1,
        //   mobile: telForm.tel,
        //   acode: '+' + acode.value,
        //   sms: telForm.yzm,
        // })
        // if(res.status == 1){
        //   router.replace('/index')
        // }
      }
    })
  }
}

const oldtime = Number(localStorage.getItem('smstime'))
if(oldtime){
  const now = new Date().getTime()
  if(now - oldtime < 120000){
    const stime = (120 - ((now - oldtime) / 1000)).toFixed(0)
    smsTime.value = Number(stime)
    changeTime()
  }else{
    localStorage.removeItem('smstime')
  }
}
</script>

<style lang="scss" scoped>
.login_page {
  height: 100%;
  .login_tabs{
    :deep(.el-tabs__nav){
      width: 100%;
      .el-tabs__item{
        width: 50%;
        padding: 0;
        text-align: center;
      }
    }
    .el-input{
      width: 252px;
    }
    .yzm_ipt{
      width: 140px;
      margin-right: 10px;
    }
    .img_code{
      width: 102px;
      height: 32px;
    }
  }
}
</style>