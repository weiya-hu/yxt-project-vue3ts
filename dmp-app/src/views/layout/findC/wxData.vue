<template>
  <div class="wx_data">

    <div class="topbtns fsc">
      <el-button size="large" type="primary" @click="addShow = true">新建数据</el-button>
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
        <el-table-column property="acc" label="好友微信号"/>
        <el-table-column property="status" label="处理状态">
          <template #default="scope">
            <div class="fcs">
              <div class="dot" :class="scope.row.status == 0?'dot_ing':scope.row.status == 1?'dot_ok':'dot_err'"></div>
              <div>{{scope.row.status == 0?'审核中':scope.row.status == 1?'已通过':'已拒绝'}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="money" label="消耗金额"/>
        <el-table-column property="source" label="来源">
          <template #default="scope">
            <div>{{scope.row.source == 1?'微信好友':'---'}}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="来源">
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-link type="primary" @click="goDetails(scope.row.id)">查看</el-link>
          </template>
        </el-table-column>
        
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>
    
    <el-dialog v-model="addShow" title="新建数据" width="500px" @close="closeAdd">
      <div class="fcs tips">
        <img :src="warning_i" alt="">
        <div>根据输入好友微信号，系统可获取好友更多信息。</div>
      </div>
      <el-form class="myform no_margin" :model="Addform" :rules="addRules" ref="addFormRef">
        <el-form-item label="好友微信号" prop="acc">
          <el-input v-model="Addform.acc" placeholder="请输入好友微信号"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="flex fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" :disabled="!Addform.acc" @click="goAdd">提交</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import { formatDate } from '@/utils/date'
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import {useRouter} from 'vue-router'
import warning_i from '@/assets/images/warning.png'
const addShow = ref(false)
const Addform = ref({
  acc:''
})
const addFormRef = ref()
const addRules = reactive({
  acc:[{
    required: true,
    message: '请输入好友微信号',
    trigger: 'blur',
  }],
})
const closeAdd = ()=>{
  addFormRef.value.resetFields()
}
const goAdd = ()=>{

}

interface SData {
  id: number|string,
  acc:string,
  status:number,
  money:number,
  create_time:number,
  source:number,
}
const tableData = ref([
  {
    id: 0,
    acc:'jdc313',
    status:0,
    money:0.01,
    create_time:1646096359651,
    source:1,
  },
  {
    id: 0,
    acc:'jdc313',
    status:1,
    money:0.01,
    create_time:1646091359651,
    source:1,
  },
  {
    id: 0,
    acc:'jdc313',
    status:2,
    money:0.01,
    create_time:1646096359651,
    source:1,
  },
])
const page = ref(1)
const total = ref(0)
const changePage =()=>{
  console.log(page.value);
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}

const router = useRouter()
const goDetails = (id:string)=>{
  router.push('/findC/wxDataDetails?id='+id)
}

</script>

<style scoped lang="scss">
.wx_data{
  .topbtns{
    margin-bottom: 20px;
  }
  .dot{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #2BD34E;
  }
  .dot_err{
    background-color: $colorred;
  }
  .dot_ok{
    background-color: $dfcolor;
  }
}
.no_margin{
  .el-form-item{
    margin-bottom: 0;
  }
}
.tips{
  margin-bottom: 20px;
  height: 30px;
  border: 1px solid #B3CAF9;
  background-color: #EDF5FF;
  border-radius: 2px;
  padding-left: 12px;
  img{
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
}
</style>