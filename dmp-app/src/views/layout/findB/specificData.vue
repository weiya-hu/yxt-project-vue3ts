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

    <el-dialog v-model="addShow" title="新建数据" width="500px" @closed="closeAdd">
      <el-form class="myform" ref="addFormRef" :model="addForm" :rules="addRules">
        <el-form-item label="行业分类" prop="type">
          <el-select v-model="addForm.type" placeholder="请选择行业">
            <el-option label="计算机行业" value="1"></el-option>
            <el-option label="医药行业" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择地区" prop="addr">
          <el-cascader
            v-model="addForm.addr"
            :options="options"
            @change="addrChange"
            :props="{
              expandTrigger: 'hover',
            }"
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

        <el-form-item label="上传附件" prop="file">
          <el-upload 
            action="https://jsonplaceholder.typicode.com/posts/" 
            :auto-upload="false"
            :limit="1"
            :on-exceed="handleExceed"
            :on-change="upChange"
            ref="upload"
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
          <el-button @click="addShow=false">取消</el-button>
          <el-button type="primary" @click="submitAddForm(addFormRef)">提交</el-button>
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
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
import type { ElForm } from 'element-plus'
import MyDialog from "@/components/MyDialog.vue";
import MyPage from "@/components/MyPage.vue";
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
    required: true,
    message: '请添加文件',
    trigger: 'change',
  }],
})

const addShow = ref(false)
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
const addrChange = (value:any) => {
  console.log(value)
}
const addFormRef = ref<FormInstance>()
const submitAddForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upload.value.submit()
    } else {
      console.log('error submit!');
      return false
    }
  })
}

const closeAdd = ()=>{
  upload.value.clearFiles()
  addFormRef.value!.resetFields()
}

const upload = ref()
const handleExceed = (files:any) => {
  upload.value.clearFiles()
  upload.value.handleStart(files[0])
}
const upChange = (file: UploadFile, list: UploadFile[])=>{
  addForm.value.file = file.name
  addFormRef.value!.clearValidate('file')
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
    :deep(.el-upload-list ){
      display: none;
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