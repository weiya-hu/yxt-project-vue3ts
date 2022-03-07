<template>
  <div class="specific_data_page">
    <div class="fsc topbtns">
      <el-button type="primary" @click="addShow=true">新建数据</el-button>
    </div>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" width="165"/>
        <el-table-column property="type" label="行业分类" width="150">
          <template #default="scope">
            <div>{{getHashStr(scope.row.industry_id.split(','),typeHash,'last')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="addr" label="地区" width="180">
          <template #default="scope">
            <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="group_name" label="人群名称"/>
        <el-table-column property="group_desc" label="人群描述"/>
        <el-table-column property="create_time" label="发起时间" width="155">
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="100">
          <template #default="scope">
            <div class="fcs">
              <div class="dot" :class="getState(scope.row.status).class"></div>
              <div>{{getState(scope.row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column property="remarks" label="备注"/> -->
        <el-table-column label="操作" width="150">
          <!-- <template #default="scope">
            <div class="fcs">
              <el-link type="primary" @click="goDetails(scope.row.id)">详情</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
            </div>
          </template> -->

          <template #default="scope">
            <div class="fcs" v-if="scope.row.status === 0">
              <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
              <div class="line" v-if="scope.row.attachment"></div>
              <el-link type="primary" v-if="scope.row.attachment" :href="scope.row.attachment">下载附件</el-link>
            </div>
            <div class="fcs" v-if="scope.row.status === 1">
              <el-link type="primary" @click="goDetails(scope.row.id)">详情</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
            </div>
            <div class="fcs" v-if="scope.row.status === 2">
              <el-link type="primary" @click="goDel(scope.row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="errorMsg = scope.row.fail_reason;errorShow=true">拒绝原因</el-link>
            </div>
          </template>

        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>

    <el-dialog v-model="addShow" title="新建数据" width="500px" @close="closeAdd" :before-close="beforeCloseAdd">
      <el-form class="myform" ref="addFormRef" :model="addForm" :rules="addRules" v-loading="upLoading">
        <el-form-item label="行业分类" prop="type">
          <MyCascader v-model="addForm.type" type="type"/>
        </el-form-item>
        <el-form-item label="选择地区" prop="addr">
          <MyCascader v-model="addForm.addr" type="address"/>
        </el-form-item>
        <el-form-item label="人群名称" prop="people">
          <el-input v-model="addForm.people" placeholder="请输入人群名称"></el-input>
        </el-form-item>
        <el-form-item label="人群描述" prop="desc">
          <el-input 
            v-model="addForm.desc" 
            placeholder="可对人群进行简单的描述"
            type="textarea"
            maxlength="150"
            show-word-limit
            rows="4"
            resize="none"
          ></el-input>
        </el-form-item>

        <el-form-item label="上传附件" prop="file">
          <MyUpload v-model="addForm.file" @change="upChange" @error="upError" @success="upSuccess" ref="upload"/>
        </el-form-item>
        
        <div class="fcs btns fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="submitAddForm(addFormRef)">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

    <el-dialog v-model="errorShow" title="拒绝原因" width="400px">
      <div class="fcc msg">{{errorMsg}}</div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="errorShow=false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import { reactive, ref ,computed } from 'vue'
import type { ElForm } from 'element-plus'
import MyDialog from "@/components/MyDialog.vue";
import MyPage from "@/components/MyPage.vue";
import MyUpload from "@/components/MyUpload.vue";
import MyCascader from "@/components/MyCascader.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { mainStore } from '@/store/index'
import { errMsg,getHashStr,strToArr} from '@/utils/index'
import { ElMessageBox } from 'element-plus'
import { addDemand_api ,demandList_api,delDemand_api } from '@/api/findB'
import { formatDate } from '@/utils/date'

const store = mainStore()
const typeHash = computed(() => store.state.typeHash)
const addressHash = computed(() => store.state.addressHash)

const router = useRouter()
const goDetails = (id:string)=>{
  router.push('/findB/specificDataDetails?id='+id)
}
interface SData {
  id: number|string,
  industry_id:string,
  addr:string,
  group_name:string,
  group_desc:string,
  create_time:string,
  status:string,
  fail_reason:string,
}
const tableData = ref<SData[]>([])
const page = ref(1)
const total = ref(0)
const getDemandList = ()=>{
  demandList_api({
    current:page.value,
    size:10,
  }).then((res:res)=>{
    if(res.status == 1){
      tableData.value = res.body.records
      total.value = res.body.total
    }
  })
}
getDemandList()
const changePage =()=>{
  getDemandList()
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getState = (status:string|number)=>{
  //返回需求状态及颜色类名
  const obj = ref({
    class:'',
    text:'-'
  })
  switch (Number(status)) {
    case 0:
      obj.value = {
        class:'bgc_green',
        text:'审核中'
      }
      break;
    case 1:
      obj.value = {
        class:'bgc_df',
        text:'已通过'
      }
      break;
    case 2:
      obj.value = {
        class:'bgc_red',
        text:'已拒绝'
      }
      break;
    default:
      break;
  }
  return obj.value
}
const errorShow = ref(false)
const errorMsg = ref('')

type FormInstance = InstanceType<typeof ElForm>
const addForm = ref({
  type:[],
  addr:[],
  people:'',
  desc:'',
  file:'',
})
const fileErrorType = ref('none')//上传文件错误类型
const filePass = (rule:any, value:any, callback:any) => {
  //上传文件错误提示
  switch (fileErrorType.value) {
    case 'size':
      callback(new Error('请添加大小不超过4M的文件'))
      break;
    case 'type':
      callback(new Error('请添加 .doc、.docx、.pdf 格式的文件'))
      break;
    case 'none':
      // callback(new Error('请添加文件'))
      callback()
      break;
    default:
      callback()
      break;
  }
}
const addRules = reactive({
  type: [{
    required: true,
    message: '请选择行业',
    trigger: 'change',
  }],
  addr:[{
    required: true,
    message: '请选择地区',
    trigger: 'change',
  }],
  people:[{
    required: true,
    message: '请输入人群名称',
    trigger: 'blur',
  }],
  desc:[{
    required: true,
    message: '请输入人群描述',
    trigger: 'blur',
  }],
  file:[{
    validator: filePass,
    trigger: 'change' 
  }]
})

const addShow = ref(false)

const upload = ref()//上传组件ref
const upChange = (errorType:string)=>{
  //上传组件状态改变时 添加时效验文件格式大小
  if(errorType){
    fileErrorType.value = errorType
    addForm.value.file = ''
    addFormRef.value!.validateField('file', () => null)
  }else{
    fileErrorType.value = ''
    addFormRef.value!.clearValidate('file')
  }
}
const upLoading = ref(false)
const addFormRef = ref<FormInstance>()
const submitAddForm = (formEl: FormInstance | undefined) => {
  //提交添加需求表单
  if (!formEl) return
  fileErrorType.value = 'none' //不是必传文件时，先清空再验证
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upLoading.value = true
      if(addForm.value.file){
        //表单效验成功再上传
        upload.value.submit()
      }else{
        //没有文件并且不是必传文件时，就直接提交
        upSuccess('')
      }
    } else {
      console.log('error submit!');
      return false
    }
  })
}

const upSuccess = (path:string)=>{
  //上传成功再提交表单
  addDemand_api({
    "attachment": path,//附件地址
    "province": Number(addForm.value.addr[0])||'',//省（区域码）
    "city": Number(addForm.value.addr[1])||'',//市（区域码）
    "district": Number(addForm.value.addr[2])||'',//区（区域码）
    "group_desc": addForm.value.desc,//人群描述
    "group_name": addForm.value.people,//人群名称
    "industry_id": addForm.value.type.join(','),//行业ID
  }).then((res1:res)=>{
    if(res1.status == 1){
      closeAdd()
      getDemandList()
    }else{
      addForm.value.file = ''
      fileErrorType.value = 'none'
      upload.value.clear()
      upLoading.value = false
    }
  }).catch(()=>{
    upError('')
  })
}
const upError = (err:any)=>{
  //上传失败时
  console.log('uperr',err);
  addForm.value.file = ''
  fileErrorType.value = 'none'
  upload.value.clear()
  upLoading.value = false
  errMsg('上传失败')
}

const closeAdd = ()=>{
  //关闭添加弹窗
  addShow.value = false
  upLoading.value = false
  fileErrorType.value = 'none'
  upload.value.clear()
  addFormRef.value!.resetFields()
}

const beforeCloseAdd = (done:Function)=>{
  //关闭添加弹窗之前
  if(upLoading.value){
    ElMessageBox.confirm(
      '正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？',
      '温馨提示',
      {
        confirmButtonText: '取消',
        cancelButtonText: '确定',
        type: 'warning',
      }
    )
    .then(() => {
    })
    .catch(() => {
      done()
    })
  }else{
    done()
  }
}

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
  //删除需求
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  //确认删除需求
  console.log(delId.value);
  delDemand_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      delShow.value = false
      getDemandList()
    }
  })
}

</script>

<style scoped lang="scss">
.specific_data_page{
  .myform{
    :deep(.el-form-item__label){
      width: 90px;
    }
  }
  .topbtns{
    margin-bottom: 20px;
    font-size: 14px;
    color: $dfcolor;
    img{
      width: 32px;
      height: 32px;
      margin-right: 4px;
    }
    .fcs:hover{
      cursor: pointer;
    }
  }
  .mytable{
    .dot{
      width: 8px;
      height: 8px;
      margin-right: 8px;
      border-radius: 50%;
    }
    .bgc_df{
      background-color: $dfcolor;
    }
    .bgc_green{
      background-color: #2BD34E;
    }
    .bgc_red{
      background-color: $colorred;
    }
    .line{
      height: 14px;
      width: 1px;
      margin: 0 16px;
      background-color: $coloreee;
    }
  }
}
</style>