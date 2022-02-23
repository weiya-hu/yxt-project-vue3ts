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
        <el-table-column property="type" label="行业分类" width="150"/>
        <el-table-column property="addr" label="地区" width="100"/>
        <el-table-column property="people" label="人群名称"/>
        <el-table-column property="desc" label="人群描述"/>
        <el-table-column property="time" label="发起时间" width="155"/>
        <el-table-column property="state" label="状态" width="100">
          <template #default="scope">
            <div class="fcs">
              <div class="dot" :class="getState(scope.row.state).class"></div>
              <div>{{getState(scope.row.state).text}}</div>
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
    <MyPage :total="1000" v-model="page" @change="changePage"/>

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
import { errMsg } from '@/utils/index'
import { ElMessageBox } from 'element-plus'

const store = mainStore()
const typeList = ref<any[]>([])
const addressList = ref<any[]>([])
store.setTypeList().then((res:any[])=>{
  typeList.value = res
})
store.setAddressList().then((res:any[])=>{
  addressList.value = res
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
  id: string,
  type:string,
  addr:string,
  people:string,
  desc:string,
  time:string,
  state:string,
  remarks:string,
}
const tableData :SData[] = [
  {
    id: 'XQ20190324010001',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010002',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '2',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010003',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '3',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010004',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010005',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010006',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010007',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010008',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
  {
    id: 'XQ20190324010009',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },{
    id: 'XQ20190324010010',
    type: '医疗器械',
    addr: '重庆市',
    people:'查找重庆市医疗器械用户',
    desc: '寻找全市从事XX医疗器械渠道服务商',
    time: '2021-04-01 17:27',
    state: '1',
    remarks: '人群描述不清楚',
  },
]
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  multipleSelection.value = val
}
const page = ref(1)
const changePage =()=>{
  console.log(page.value);
}
const getState = (state:string)=>{
  const obj = ref({
    class:'',
    text:'-'
  })
  switch (state) {
    case '1':
      obj.value = {
        class:'bgc_df',
        text:'已完结'
      }
      break;
    case '2':
      obj.value = {
        class:'bgc_yellow',
        text:'待处理'
      }
      break;
    case '3':
      obj.value = {
        class:'bgc_red',
        text:'被退回'
      }
      break
    default:
      break;
  }
  return obj.value
}

type FormInstance = InstanceType<typeof ElForm>
const addForm = ref({
  type:'',
  addr:[],
  people:'',
  desc:'',
  file:'',
})
const fileErrorType = ref('none')
const filePass = (rule:any, value:any, callback:any) => {
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

const handleExceed = (files:any) => {
  //覆盖前一个文件
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const upChange = (file: UploadFile, list: UploadFile[])=>{
  //添加时验证
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
  }
}
const upLoading = ref(false)
const addFormRef = ref<FormInstance>()
const submitAddForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      //表单效验成功再上传
      console.log('submit!')
      upLoading.value = true
      getAliToken_api().then((res:res)=>{
        return new Promise<void>((resolve, reject) => {
          hostUrl.value = res.body.host
          upData.value = {
            key:res.body.dir + res.body.uuid,
            OSSAccessKeyId: res.body.accessid,
            success_action_status: 200,
            policy:res.body.policy,
            signature:res.body.signature,
          }
          resolve()
        })
      }).then(()=>{
        console.log('up');
        upload.value!.submit()
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
  upLoading.value = false
}
const upError = (err:any, file:any, fileList:any)=>{
  console.log('uperr',err);
  upLoading.value = false
  errMsg('上传失败')
}

const closeAdd = ()=>{
  addShow.value = false
  upload.value.clearFiles()
  addFormRef.value!.resetFields()
}

const beforeCloseAdd = (done:Function)=>{
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
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  console.log(delId.value);
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