<template>
  <div class="up2b">
    <div class="top-button fsc">
      <el-button size="large" type="primary"  class="up-user fcc" @click="addShow = true">添加</el-button>
      <div class="flexr">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column fixed="right" property="operate" label="操作" min-width="100">
          <template #default="{row}">
            <div class="operate-button-pre">
              <div v-if="row.status===3"  class="operate-button marginr" @click="toDetail(row)">查看</div>
              <div v-if="row.status!==1"  class="operate-button marginr" @click="deleteShow=true">删除</div>
              <div v-if="row.status===2"  class="operate-button " @click="reject(row)">驳回原因</div>
              <div v-if="row.status===1">---</div>
            </div>
            
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <div>
      <MyPage v-if="totle" :total="totle" v-model="page" @change="getList"/>
    </div>
    <MyDataUpUser v-model="dialogVisible" @submitSuccess="submitsuccess"/>
    
    <el-dialog v-model="addShow" :width="500" draggable title="添加需求" >
      <div>
        <el-form :model="formValue" v-loading="loading" ref="formRef" :rules="upRule">
          <el-form-item
            label="行业分类"
            required
            prop="industryType"
          >
            <MyCascader type="type" v-model="formValue.industryType"/>
          </el-form-item>
          <el-form-item
            label="地区"
            required
            prop="country"
          >
            <MyCascader type="country" v-model="formValue.country"/>
          </el-form-item>
          <el-form-item
            label="渠道名称"
            required
            prop="name"
          >
            <el-input 
              placeholder="请输入渠道名称"
              v-model="formValue.name"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="渠道描述"
            required
            prop="desc"
          >
            <el-input 
              type="textarea" 
              maxlength="150"
              show-word-limit
              class="input-textarea"
              placeholder="请对寻找的渠道进行简要的描述（比如找分销代理，商业服务，经销贸易等）"
              v-model="formValue.desc"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="上传附件"
            prop="updateFile"
          >
            <MyUpload 
              v-model="formValue.updateFile" 
              @change="upChange" 
              @error="upError" 
              @success="upSuccess" 
              ref="upload"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="flexr">
          <el-button type="primary" @click="addShow=false">取消</el-button>
          <el-button type="primary" @click="addSure">确认</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="deleteShow" title="操作提示" width="400px">
      <div class="msg">是否确认删除？</div>
      <template #footer>
        <div class="flexr">
          <el-button type="primary" @click="deleteShow=false">取消</el-button>
          <el-button type="primary" @click="deleteSure">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import {ref,reactive} from 'vue'
  import MyDataTable from '@/components/MyDataTable.vue'
  import MyPage from '@/components/MyPage.vue'
  import MyCascader from '@/components/MyCascader.vue';
  import {useRouter} from 'vue-router'
  import {channelPage,channelIn,channelDel} from '@/api/seekPathPro'
  import MyEmpty from "@/components/MyEmpty.vue";
  import  MyUpload from '@/components/MyUpload.vue'
  import { ElMessageBox} from 'element-plus'
  import { errMsg} from '@/utils/index'

  interface TableTitleProp{
      type:string,
      lable?:string,
      prop:string,
      width:number,
  }

  let totle=ref(0)
  let page = ref(1)
  let dialogVisible = ref(false)
  let router = useRouter();
  let loading=ref(false)
  let deleteShow = ref(false)
  let addShow = ref(false)
  const formRef = ref()
  const upload = ref()//上传组件ref
  let formValue=ref({
    industryType:[],
    country:[],
    name:'',
    desc:'',
    updateFile:''
  })
  let fileErrorType = ref('none')//上传文件错误类型


  let tableList = ref([
    {id:'dhfkjs',work_type:'互联网',place:'四川省成都市金牛区',path:'医疗',desc:'有关医疗的都合适就好',create_time:1646209666231,status:0},
    {id:'dhfkjs',work_type:'互联网',place:'四川省成都市金牛区',path:'医疗',desc:'有关医疗的都合适就好',create_time:1646209666231,status:1},
    {id:'dhfkjs',work_type:'互联网',place:'四川省成都市金牛区',path:'医疗',desc:'有关医疗的都合适就好',create_time:1646209666231,status:2},
    {id:'dhfkjs',work_type:'互联网',place:'四川省成都市金牛区',path:'医疗',desc:'有关医疗的都合适就好',create_time:1646209666231,status:3},
  ])
  // let tableList = ref([])
  let tableTitle = ref(<TableTitleProp[]>[
    {type:'select',width:100,prop:'select'},
    {type:'text',lable:'ID',prop:'id',width:130},
    {type:'text',lable:'行业分类',prop:'work_type',width:150},
    {type:'text',lable:'地区',prop:'place',width:150},
    {type:'text',lable:'渠道名称',prop:'path',width:150},
    {type:'text',lable:'渠道描述',prop:'desc',width:220},
    {type:'date',lable:'创建日期',prop:'create_time',width:110},
    {type:'status_do',lable:'状态',prop:'status',width:100}
  ])
  const fileVali=(rule:any,value:any,callback:any)=>{
    switch (fileErrorType.value) {
      case 'size':
        callback(new Error('请添加大小不超过4M的文件'))
        break;
      case 'type':
        callback(new Error('请添加 .doc、.docx、.pdf、.xls、.xlsx 格式的文件'))
        break;
      case 'none':
        callback(new Error('请添加文件'))
        break;
      default:
        callback()
        break;
    }
  }
  const upRule= reactive({
    industryType:[{
      required: true,
      message: '请选择行业分类',
      trigger: 'blur',
    }],
    country:[{
      required: true,
      message: '请选择地区',
      trigger: 'blur',
    }],
    name:[{
      required: true,
      message: '请输入人群名称',
      trigger: 'change',
    },{
      required: true,
      message: '请输入人群名称',
      trigger: 'blur',}
    ],
    desc:[{
      required: true,
      message: '请输入人群描述',
      trigger: 'change',
    },{
      required: true,
      message: '请输入人群描述',
      trigger: 'blur',
    }],
    updateFile:[{
      validator:fileVali,
      trigger:'change'
    }]
  })
  
  const getList=async()=>{
    loading.value=true
    let data={
      current:page.value,
      type:1,
      size:10
    }
    const {status,body} = await channelPage(data)
    loading.value=false
    if(status){
      totle.value=body.total
      tableList.value = body.records
    }
  }
  // getList()
  //删除确认按钮
  const deleteSure=()=>{

  }
  //添加确定按钮
  const addSure=()=>{
    formRef.value.validate((valid:any) => {
      if (valid) {
        //表单效验成功再上传
        console.log('submit!')
        loading.value = true
        upload.value.submit()
      } else {
        console.log('error submit!');
        return false
      }
    })
  }

  //去详情
  const toDetail=(row:any)=>{
    router.push({path:'/myData/up2bDetails',query:{id:row.id}})
  }
  //查看拒绝原因
  const reject=(row:any)=>{
    ElMessageBox.alert(row.fail_reason || '找不到类似的渠道', '驳回原因', {
      confirmButtonText: '确认'
    })
  }
  //上传成功后
  const submitsuccess=()=>{
    page.value=1
    getList()
  }
  const upChange = (errorType:string)=>{
    //上传组件状态改变时 添加时效验文件格式大小
    if(errorType){
      fileErrorType.value = errorType
      formValue.value.updateFile = ''
      formRef.value!.validateField('updateFile', () => null)
    }else{
      fileErrorType.value = ''
      formRef.value!.clearValidate('updateFile')
    }
  }
  const upError = (err:any)=>{
    //上传失败时
    console.log('uperr',err);
    formValue.value.updateFile = ''
    fileErrorType.value = 'none'
    upload.value.clear()
    loading.value = false
    errMsg('上传失败')
  }
  const upSuccess = (path:string)=>{
    loading.value = false
    //上传成功再提交表单
    // upRecordAdd({
    //   "attachment": path,//附件地址
    //   "group_desc": formValue.value.personsDesc,//人群描述
    //   "group_name": formValue.value.personsName,//人群名称
    //   "type":route.path === '/myData/up2b'?1:2
    // }).then((res)=>{
    //   if(res.status){
    //     close()
    //     formRef.value.resetFields()
    //     emit('submitSuccess',1)
    //   }else{
    //     formValue.value.updateFile = ''
    //     fileErrorType.value = 'none'
    //     upload.value.clear()
    //   }
    //   loading.value = false
    // }).catch(()=>{
    //   upError('')
    // })
  }
</script>

<style scoped lang="scss">
  .top-button{
    .up-user{
      padding: 11px 16px;
      background: $dfcolor;
      border-radius: 4px;
      font-size: 14px;
      color: #FFFFFF;
      cursor: pointer;
    }
    .union-button{
      padding: 11px 16px;
      background: #FFFFFF;
      border: 1px solid rgba(221,221,221,1);
      border-radius: 4px;
      margin-left: 12px;
      cursor: pointer;
    }
  }
  .mytable{
    margin-top: 20px;
    .operate-button-pre{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }
    .operate-button{
      font-size: 14px;
      color: #2D68EB;
      cursor: pointer;
    }
    .marginr{
      margin-right:8px;
    }
    .msg{
      font-size: 14px;
      color: #333;
    }
  
  }
  .el-overlay{
    background-color: rgba(0,0,0,.1) !important;
  }
  .up-user-title{
    font-size: 16px;
    color: #333333;
    line-height: 16px;
    font-weight: 500;
  }
  .el-dialog .el-dialog__header{
    border: none;
  }

  
</style>