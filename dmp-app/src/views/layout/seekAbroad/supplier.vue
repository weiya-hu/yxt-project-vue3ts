<template>
  <div class="up2b">
    
    <TopBtns @add="add"/>

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
              <div v-if="row.status===4"  class="operate-button marginr" @click="toDetail(row)">查看</div>
              <div v-if="row.status!==2"  class="operate-button marginr" @click="deleteBt(row)">删除</div>
              <div v-if="row.status===3"  class="operate-button " @click="reject(row)">驳回原因</div>
              <div v-if="row.status===2">---</div>
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
    
    <el-dialog v-model="addShow" :width="500" draggable title="添加需求" :close-on-click-modal="false">
      <div>
        <el-form :model="formValue" v-loading="formLoading" ref="formRef" :rules="upRule">
          <el-form-item
            label="行业分类"
            required
            prop="industryType"
          >
            <MyCascader type="type" v-model="formValue.industryType"/>
          </el-form-item>
          <el-form-item
            label="地区"
            prop="country"
          >
            <el-select v-model="formValue.country" class="m-2" placeholder="请选择地区" size="large" clearable>
              <el-option
                v-for="item in countryList"
                :key="item.code"
                :label="item.country_name"
                :value="item.code"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="采购商品"
            required
            prop="name"
          >
            <el-input 
              placeholder="请输入产品名称"
              v-model="formValue.name"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="描述"
            required
            prop="desc"
          >
            <el-input 
              type="textarea" 
              maxlength="150"
              show-word-limit
              class="input-textarea"
              placeholder="可简要描述对寻找地区的采购服务商的要求。"
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
          <el-button @click="addShow=false">取消</el-button>
          <el-button type="primary" @click="addSure">确认</el-button>
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
  import {overseasPage,overseasIn,overseasDel} from '@/api/seekAbroad'
  import MyEmpty from "@/components/MyEmpty.vue";
  import  MyUpload from '@/components/MyUpload.vue'
  import TopBtns from "@/components/TopBtns.vue";
  import { ElMessageBox} from 'element-plus'
  import { errMsg} from '@/utils/index'
  import { mainStore } from '@/store/index'
  const store = mainStore()

  interface TableTitleProp{
      type:string,
      lable?:string,
      prop:string,
      width:number,
  }

  let totle=ref(0)
  let page = ref(1)
  let router = useRouter();
  let loading=ref(false)
  let formLoading=ref(false)
  let addShow = ref(false)
  const formRef = ref()
  const upload = ref()//上传组件ref
  const countryList = ref()
  let formValue=ref({
    industryType:[],
    country:'',
    name:'',
    desc:'',
    updateFile:''
  })
  let fileErrorType = ref()//上传文件错误类型
  // let tableList = ref([
  //   {id: 6,industry_id: "A,04,042",country_id: "+92",product_name: "测试1",demand_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:0},
  //   {id: 6,industry_id: "A,04,042",country_id: "+92",product_name: "测试1",demand_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:1},
  //   {id: 6,industry_id: "A,04,042",country_id: "+92",product_name: "测试1",demand_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:2},
  //   {id: 6,industry_id: "A,04,042",country_id: "+92",product_name: "测试1",demand_desc: "测试1测试1测试1测试1测试1",create_time:1646209666231,status:3},
  // ])
  let tableList = ref([])
  let tableTitle = ref(<TableTitleProp[]>[
    {type:'select',prop:'select',width:100},
    {type:'text',lable:'ID',prop:'id',width:100},
    {type:'industry_id',lable:'行业分类',prop:'industry_id',width:120},
    {type:'country',lable:'地区',prop:'country_id',width:100},
    {type:'text',lable:'采购商品',prop:'product_name',width:150},
    {type:'text-tooltip',lable:'描述',prop:'demand_desc',width:220},
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
    },{
      required: true,
      message: '请选择地区',
      trigger: 'change',
    }],
    name:[{
      required: true,
      message: '请输入采购商品',
      trigger: 'change',
    },{
      required: true,
      message: '请输入采购商品',
      trigger: 'blur',}
    ],
    desc:[{
      required: true,
      message: '请输入描述',
      trigger: 'change',
    },{
      required: true,
      message: '请输入描述',
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
      type:2,
      size:10
    }
    const {status,body} = await overseasPage(data)
    loading.value=false
    if(status){
      totle.value=body.total
      tableList.value = body.records
    }
  }
  getList()
  const add=()=>{
    addShow.value = true
    countryList.value=store.state.countryList
  }
  //删除按钮
  const deleteBt=(row:any)=>{
    ElMessageBox.confirm(
    '是否确认删除?',
    '操作提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async() => {
      let data={id:row.id}
      const {status} = await overseasDel(data)
      status && getList()

     
    })
  }
  //添加确定按钮
  const addSure=()=>{
    formRef.value.validate((valid:any) => {
      if (valid) {
        //表单效验成功再上传
        console.log('submit!')
        formLoading.value = true
        formValue.value.updateFile ? upload.value.submit() :upSuccess()
        
      } else {
        console.log('error submit!');
        return false
      }
    })
  }

  //去详情
  const toDetail=(row:any)=>{
    router.push({path:'/seekAbroad/supplierDetail',query:{id:row.id}})
  }
  //查看拒绝原因
  const reject=(row:any)=>{
    ElMessageBox.alert(row.fail_reason || '暂没有驳回原因，请联系管理员', '驳回原因', {
      confirmButtonText: '确认'
    })
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
    formLoading.value = false
    errMsg('上传失败')
  }
  const upSuccess = (path?:string)=>{
    //上传成功再提交表单
    overseasIn({
      "attachment": path || '',//附件地址
      "demand_desc": formValue.value.desc,//描述
      "product_name": formValue.value.name,//名称
      "type":2,
      "country_id":formValue.value.country,
      "industry_id": formValue.value.industryType.join(','),
    }).then((res:any)=>{

      if(res.status){
        addShow.value=false
        formRef.value.resetFields()
        page.value=1
        getList()
      }else{
        formValue.value.updateFile = ''
        upload.value.clear()
      }
      formLoading.value = false
    }).catch(()=>{
      formLoading.value = false
      upError('')
    })
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