<template>
  <div class="teldata_page_c">
    <div class="btns fsc">
      <el-button size="large" type="primary" @click="addShow = true">新建人群</el-button>
      <div class="rt fcs">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" width="150"/>
        <el-table-column property="name" label="人群名称" width="170"/>
        <el-table-column property="desc" label="人群描述"/>
        <el-table-column property="state" label="状态" width="160">
          <template #default="scope">
            <div class="fcs">
              <div class="dot" :class="scope.row.state == 1?'dot_ing':'dot_ok'"></div>
              <div>{{ scope.row.state == 1?'计算中':'计算完成' }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="address" label="地区"/>
        <el-table-column property="num" label="覆盖用户人数" width="140">
          <template #default="scope">
            <div>{{ scope.row.state == 1?'---':scope.row.num }}</div>
          </template>
        </el-table-column>
        <el-table-column property="time" label="创建日期" width="190">
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源" width="140">
          <template #default="scope">
            <div>{{ scope.row.source == 1?'号码段':'---' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="操作" width="150">
          <template #default="scope">
            <el-link type="primary" @click="goDetails(scope.row.id)">详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <MyPage :total="1000" v-model="page" @change="changePage"/>

    <el-dialog v-model="addShow" title="新建数据" width="500px" @close="closeAdd">
      <el-form class="myform" ref="addFormRef" :model="addForm" :rules="addRules" v-loading="upLoading">
        <el-form-item label="人群名称" prop="people">
          <el-input v-model="addForm.people" placeholder="请输入人群名称"></el-input>
        </el-form-item>
        <el-form-item label="选择地区" prop="addr">
          <MyCascader v-model="addForm.addr" type="address"/>
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
        
        <div class="fcs btns fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="submitAddForm">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import MyPage from "@/components/MyPage.vue";
import { formatDate } from '@/utils/date'
import MyCascader from "@/components/MyCascader.vue";

const page = ref(1)
const total = ref(0)

interface IData {
  id:number,
  name:string,//人群名称
  desc:string,//人群描述
  state:number,//状态
  address:string,//地区
  num:number,//覆盖用户人数
  create_time:number,//创建日期
  source:number,//来源
}

const tableData = ref<IData[]>([
  {
    id:0,
    name:'拓客测试',
    desc:'139****1928',
    state:1,
    address:'全国',
    num:321,
    create_time:1646096359651,
    source:1,
  },
  {
    id:1,
    name:'拓客测试',
    desc:'139****1928',
    state:2,
    address:'重庆',
    num:321,
    create_time:1646096359651,
    source:1,
  },
  {
    id:2,
    name:'拓客测试',
    desc:'139****1928',
    state:1,
    address:'全国',
    num:321,
    create_time:1646096359651,
    source:2,
  },
])

const goDetails = (id:number)=>{
  console.log(id);
}

const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

const changePage =()=>{
  console.log(page.value);
}

const addShow = ref(false)
const closeAdd = ()=>{
  //关闭添加弹窗
  addShow.value = false
  
}
const addForm = ref({
  people:'',
  desc:'',
  addr:[],
  
})
const addRules = reactive({
  people:[{
    required: true,
    message: '请输入人群名称',
    trigger: 'blur',
  }],
  addr:[{
    required: true,
    message: '请选择地区',
    trigger: 'change',
  }],
  desc:[{
    required: true,
    message: '请输入人群描述',
    trigger: 'blur',
  }],
  
})
const upLoading = ref(false)
const submitAddForm = ()=>{

}
</script>

<style scoped lang="scss">
.teldata_page_c{
  .btns{
    padding-bottom:20px;
  }
}
</style>