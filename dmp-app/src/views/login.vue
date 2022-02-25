<template>
  <div class="login_page">
    <div class="loginbox">
      <el-form :model="user" status-icon :rules="rules" class="demo-form-inline">
        <el-form-item label="用户名" prop="acc">
          <el-input v-model="user.acc" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密&emsp;码" prop="password">
          <el-input v-model="user.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from '@/store'
import { reactive, ref } from 'vue'
import { firstToken, getNewsTypeList_api } from '@/api/login'
import emiter from '@/utils/bus'
import { Gajax } from '@/utils/request'
import { formatDate } from '@/utils/date'

const udata:any = ref({})
firstToken().then((data)=>{
  udata.value  = data
  if(data.state == 1){
  }
})

const data1 = Gajax(firstToken)
data1.getData().then(() => {
  console.log(data1.data, 'res')
})
emiter.on('redo', data1.getData)

const data2 = Gajax(getNewsTypeList_api)
data2.getData().then(() => {
  console.log(data2.data, 'res2')
  data2.data.body[0] = {
    name: '嘻嘻',
  }
})

const user = reactive({
  acc: '',
  password: '',
})
const rules = reactive({
  acc: [{ required: true, message: '请输入用户名！', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
})
const onSubmit = () => {
  console.log(user)
}
</script>

<style lang="scss" scoped>
.login_page {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginbox {
    background-color: $dfcolor;
    width: 300px;
    height: 500px;
    padding: 20px;
  }
}
</style>
