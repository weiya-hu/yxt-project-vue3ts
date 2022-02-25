<template>
  <div class="specific_data_page">
    <div class="fsc topbtns">
      <el-button type="primary" @click="addShow=true">新建数据</el-button>
      <div class="fcs" @click="kfShow=true ">
        <img :src="znkf_i" alt="">
        <div>客服</div>
      </div>
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
            <div>{{getHashStr(scope.row.industry_id,typeHash)}}</div>
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
        <el-table-column property="remarks" label="备注"/>
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <div class="fcs">
              <div class="dfcolor" @click="goDetails(scope.row.id)">详情</div>
              <div class="line"></div>
              <div class="dfcolor" @click="goDel(scope.row.id)">删除</div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>

    <el-dialog v-model="addShow" title="新建数据" width="500px" @close="closeAdd" :before-close="beforeCloseAdd">
      <el-form class="myform" ref="addFormRef" :model="addForm" :rules="addRules" v-loading="upLoading">
        <el-form-item label="行业分类" prop="type">
          <el-cascader
            v-model="addForm.type"
            :options="typeList"
            @change="typeChange"
            :props="typeProps"
            placeholder="请选择行业"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="选择地区" prop="addr">
          <el-cascader
            v-model="addForm.addr"
            :options="addressList"
            @change="addrChange"
            :props="addrProps"
            placeholder="请选择地区"
          ></el-cascader>
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

        <el-form-item label="上传附件" prop="file" required>
          <el-upload 
            :action="hostUrl"
            :auto-upload="false"
            :limit="1"
            :multiple="false"
            :show-file-list="false"
            :data="upData"
            :on-exceed="handleExceed"
            :on-change="upChange"
            :on-success="upSuccess"
            :on-error="upError"
            ref="upload"
            accept=".pdf,.docx,.doc"
          >
            <template #default>
              <div class="upbox">
                <div class="fcc up_lt" :class="addForm.file?'hasfile':''">
                  <div>
                    <el-icon>
                      <document v-if="addForm.file"/>
                      <plus v-else/>
                    </el-icon>
                    <div class="file_name">{{addForm.file||'点击上传'}}</div>
                  </div>
                </div>
              </div>
            </template>
            <template #tip>
              <div class="upbox">
                <div class="up_rt">
                  <div>可适当描述所处的行业现状，以及公司目前采取的运营、渠道、推广等多种获客方式，以便运营人员进一步了解熟悉您的所处的行业及需求，同时也为您提供更好的客户服务。</div>
                  <div class="up_tip dfcolor">附件支持.doc.docx.pdf，大小不超过4M</div>
                </div>
              </div>
            </template>
          </el-upload>
        </el-form-item>
        
        <div class="fcs btns">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="submitAddForm(addFormRef)">提交</el-button>
          <!-- <el-button type="primary" @click="submit">上传</el-button> -->
        </div>
      </el-form>
    </el-dialog>

    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
    <MyDialog v-model="kfShow" type="kf"/>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import znkf_i from '@/assets/images/znkf.png'
import { reactive, ref ,computed } from 'vue'
import { Plus ,Document } from '@element-plus/icons-vue'
import type { UploadFile,ElUploadProgressEvent } from 'element-plus/es/components/upload/src/upload.type'
import type { ElForm } from 'element-plus'
import MyDialog from "@/components/MyDialog.vue";
import MyPage from "@/components/MyPage.vue";
import { Gajax } from '@/utils/request'
import { mainStore } from '@/store/index'
import { getAliToken_api } from '@/api/findB'
import { errMsg,getHash,getHashStr,strToArr} from '@/utils/index'
import { ElMessageBox } from 'element-plus'
import { addDemand_api ,demandList_api,delDemand_api } from '@/api/findB'
import { formatDate } from '@/utils/date'

const store = mainStore()
const typeList = ref<any[]>([])
const typeHash = ref({})
const addressList = ref<any[]>([])
const addressHash = ref({})
store.setTypeList().then((res:any[])=>{
  typeList.value = res
  typeHash.value = getHash(typeList.value,'industryId')
})
store.setAddressList().then((res:any[])=>{
  addressList.value = res
  addressHash.value = getHash(addressList.value,'id')
})
const typeProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'industryId',
  label:'name',
}
const addrProps = {
  expandTrigger: 'hover',
  checkStrictly: true,
  value:'id',
  label:'name',
}

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
  remarks:string,
}
const tableData = ref<SData[]>([])
const page = ref(1)
const total = ref(0)
const getDemandList = ()=>{
  demandList_api({
    current:page.value,
    size:10,
  }).then((res:res)=>{
    tableData.value = res.body
    total.value = res.status
  })
}
getDemandList()
const changePage =()=>{
  console.log(page.value);
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getState = (state:string|number)=>{
  //返回需求状态及颜色类名
  const obj = ref({
    class:'',
    text:'-'
  })
  switch (Number(state)) {
    case 0:
      obj.value = {
        class:'bgc_yellow',
        text:'审核中'
      }
      break;
    case 1:
      obj.value = {
        class:'bgc_df',
        text:'已完结'
      }
      break;
    case 2:
      obj.value = {
        class:'bgc_red',
        text:'被拒绝'
      }
      break;
    default:
      break;
  }
  return obj.value
}

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
      callback(new Error('请添加文件'))
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

const addrChange = (value:any) => {
  console.log(value)
}
const typeChange = (value:any) => {
  console.log(value)
}

const upload = ref()//上传组件ref
const upData:any = ref({})//上传参数
const hostUrl = ref('')//上传地址
const file_exname = ref('')
const handleExceed = (files:any) => {
  //覆盖前一个文件
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const upChange = (file: UploadFile, list: UploadFile[])=>{
  //上传组件状态改变时 添加时效验文件格式大小
  const tmpcnt = file.name.lastIndexOf(".")
  const exname = file.name.substring(tmpcnt + 1)
  const names = ['doc', 'docx', 'pdf',]
  addFormRef.value!.clearValidate('file')
  if(names.indexOf(exname)< 0 ){
    fileErrorType.value = 'type'
    addForm.value.file = ''
    addFormRef.value!.validateField('file', () => null)
  }else if((file.size / 1024 / 1024)>4){
    fileErrorType.value = 'size'
    addForm.value.file = ''
    addFormRef.value!.validateField('file', () => null)
  }else{
    fileErrorType.value = ''
    addFormRef.value!.clearValidate('file')
    addForm.value.file = file.name
    file_exname.value = '.' + exname
  }
}
const upLoading = ref(false)
const filePath = ref('')
const addFormRef = ref<FormInstance>()
const submitAddForm = (formEl: FormInstance | undefined) => {
  //提交添加需求表单
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      upLoading.value = true
      getAliToken_api().then((res:res)=>{
        return new Promise<string>((resolve, reject) => {
          if(res.status == 1){
            hostUrl.value = res.body.host
            upData.value = {
              key:res.body.dir + res.body.uuid + file_exname.value,
              OSSAccessKeyId: res.body.accessid,
              success_action_status: 200,
              policy:res.body.policy,
              signature:res.body.signature,
            }
            resolve(res.body.host + '/' + res.body.dir + res.body.uuid + file_exname.value)
          }else{
            reject()
          }
        })
      }).then((path)=>{
        filePath.value = path
        upload.value!.submit()
      }).catch((error)=>{
        upLoading.value = false
        errMsg('上传失败')
      })
    } else {
      console.log('error submit!');
      return false
    }
  })
}
const upSuccess = (res: ElUploadProgressEvent, file: UploadFile)=>{
  //上传成功再提交表单 //阿里oss上传成功返回res为空，失败err为xml
  console.log('res',res);
  addDemand_api({
    "attachment": filePath.value,//附件地址
    "province": Number(addForm.value.addr[0])||'',//省（区域码）
    "city": Number(addForm.value.addr[1])||'',//市（区域码）
    "district": Number(addForm.value.addr[2])||'',//区（区域码）
    "group_desc": addForm.value.desc,//人群描述
    "group_name": addForm.value.people,//人群名称
    "industry_id": addForm.value.type,//行业ID
  }).then((res1:res)=>{
    if(res1.status == 1){
      closeAdd()
    }else{
      addForm.value.file = ''
      fileErrorType.value = 'none'
      upload.value.clearFiles()
      upLoading.value = false
    }
  })
}
const upError = (err:any, file:any, fileList:any)=>{
  //上传失败时
  console.log('uperr',err);
  addForm.value.file = ''
  fileErrorType.value = 'none'
  upload.value.clearFiles()
  upLoading.value = false
  errMsg('上传失败')
}

const closeAdd = ()=>{
  //关闭添加弹窗
  addShow.value = false
  upLoading.value = false
  fileErrorType.value = 'none'
  upload.value.clearFiles()
  addFormRef.value!.resetFields()
}

const beforeCloseAdd = (done:Function)=>{
  //关闭添加弹窗之前
  if(upLoading.value){
    ElMessageBox.confirm(
      '正在上传中，关闭弹窗可能会导致上传失败，是否继续关闭？',
      'Warning',
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

const kfShow = ref(false)

</script>

<style scoped lang="scss">
.specific_data_page{
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
    .bgc_yellow{
      background-color: $coloryellow;
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
    .dfcolor:hover{
      cursor: pointer;
    }
  }
  .myform{
    .el-select{
      width: 100%;
      :deep(.el-tooltip__trigger){
        width: 100%;
      }
    }
    :deep(.el-cascader){
      width: 100%;
    }
    .upbox{
      .up_lt{
        width: 100px;
        height: 100px;
        border:1px dashed $colorddd;
        flex-shrink: 0;
        position: relative;
        .file_name{
          font-size: 12px;
          line-height: 12px;
        }
        .el-icon{
          font-size: 28px;
          color: $colorddd;
        }
      }
      .hasfile{
        &:hover{
          &::after{
            opacity: 0.6;
          }
        }
        &::after{
          content: '重新选择';
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: rgba(0, 0, 0, 1);
          transition: opacity 0.5s;
          color: #fff;
        }
      }
      .up_rt{
        padding-left: 12px;
        div{
          font-size: 12px;
        }
        color: $color999;
        line-height: 20px;
        text-align: left;
        .up_tip{
          margin-top: 8px;
        }
      }
    }
    .el-form-item__content{
      >div{
        display: flex;
        align-items: center;
      }
    }
    .btns{
      justify-content: flex-end;
    }
    .is-error{
      .upbox{
        .up_lt{
          border-color: var(--el-color-danger);
        }
      }
    }
  }
}
</style>