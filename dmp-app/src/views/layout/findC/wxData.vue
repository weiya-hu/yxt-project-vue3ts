<template>
  <div class="wx_data">

    <TopBtns @add="addShow = true"/>

    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="wechat_id" label="好友微信号"/>
        <el-table-column property="status" label="处理状态">
          <template #default="scope">
            <div class="fcs">
              <div class="dot" :class="scope.row.status == 0?'dot_ing':scope.row.status == 1?'dot_ok':'dot_err'"></div>
              <div>{{scope.row.status == 0?'审核中':scope.row.status == 1?'已通过':'已拒绝'}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="money" label="消耗金额">
          <template #default="scope">
            <div>{{Number(scope.row.money).toFixed(2)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源">
          <template #default="scope">
            <div>{{getSource(scope.row.source)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="来源">
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-link type="primary" @click="goDetails(scope.row.id)" v-if="scope.row.status == 1">查看</el-link>
            <el-link type="primary" @click="errorMsg = scope.row.fail_reason;errorShow=true" v-if="scope.row.status == 2">拒绝原因</el-link>
            <div v-if="scope.row.status == 0 ">---</div>
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

    <el-dialog v-model="errorShow" title="拒绝原因" width="400px">
      <div class="fcc msg">{{errorMsg}}</div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="errorShow=false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import type { ElForm } from 'element-plus'
import { formatDate } from '@/utils/date'
import MyPage from "@/components/MyPage.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import TopBtns from "@/components/TopBtns.vue";
import {useRouter} from 'vue-router'
import warning_i from '@/assets/images/warning.png'
import { getWxList_api ,addWx_api} from '@/api/findC'
import {getSource} from '@/utils/index'

interface SData {
  wechat_id:string,
  status:number,
  money:number,
  create_time:number,
  source:number,
}
const tableData = ref([])
const page = ref(1)
const total = ref(0)
const getList = ()=>{
  getWxList_api({
    size: 10,
    current: page.value
  }).then((res:res)=>{
    if(res.status == 1){
      tableData.value = res.body.records
      total.value = res.body.total
    }
  })
}
getList()
const changePage =()=>{
  getList()
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

const addShow = ref(false)
const upLoading = ref(false)
const Addform = ref({
  acc:''
})
type FormInstance = InstanceType<typeof ElForm>
const addFormRef = ref<FormInstance>()
const addRules = reactive({
  acc:[{
    required: true,
    message: '请输入好友微信号',
    trigger: 'blur',
  }],
})
const closeAdd = ()=>{
  upLoading.value = false
  addShow.value = false
  addFormRef.value!.resetFields()
}
const goAdd = ()=>{
  //提交添加需求表单
  addFormRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upLoading.value = true
      addWx_api({wechat_id:Addform.value.acc}).then((res:res)=>{
        if(res.status == 1){
          closeAdd()
          getList()
        }
        upLoading.value = false
      })
    } else {
      console.log('error submit!');
      return false
    }
  })
}

const errorShow = ref(false)
const errorMsg = ref('')

</script>

<script lang="ts">
export default { name:'微信获客C' }
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