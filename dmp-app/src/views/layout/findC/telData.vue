<template>
  <div class="teldata_page_c">
    
    <TopBtns @add="addShow = true"/>
    
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="id" label="ID" width="150"/>
        <el-table-column property="group_name" label="人群名称" width="170"/>
        <el-table-column property="group_desc" label="人群描述"/>
        <el-table-column property="status" label="状态" width="160">
          <template #default="scope">
            <div class="fcs">
              <div class="status_dot" :class="getKzStatus(scope.row.status).className"></div>
              <div>{{getKzStatus(scope.row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="地区">
          <template #default="scope">
            <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
          </template>
        </el-table-column>
        <el-table-column property="count" label="覆盖用户人数" width="140">
          <template #default="scope">
            <div>{{ scope.row.status == 1?scope.row.count:'---' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" width="190">
          <template #default="scope">
            <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源" width="140">
          <template #default="scope">
            <div>{{ getSource(scope.row.source) }}</div>
          </template>
        </el-table-column>
        <el-table-column property="source" label="操作" width="150" fixed="right">
          <template #default="scope">
            <el-link type="primary" @click="goDetails(scope.row.id)" v-if="scope.row.status == 4">查看</el-link>
            <div v-else>---</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>

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
        <el-form-item label="运营商" prop="operator">
          <el-radio-group v-model="addForm.operator" @change="changeOperator">
            <el-radio :label="item.id" v-for="item in operator" :key="item.id">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="号码段" prop="tels">
          <el-select
            v-model="addForm.tels"
            multiple
            placeholder="请选择号码段"
            class="w100"
            :disabled="tels.length==0"
          >
            <el-option
              v-for="(item,index) in tels"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        
        <div class="fcs fjend">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="submitAddForm">提交</el-button>
        </div>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import { reactive, ref ,computed } from 'vue'
import type { ElForm } from 'element-plus'
import { formatDate } from '@/utils/date'
import MyPage from "@/components/MyPage.vue";
import MyCascader from "@/components/MyCascader.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import TopBtns from "@/components/TopBtns.vue";
import { mainStore } from '@/store/index'
import { getHashStr, strToArr, getSource, getKzStatus } from '@/utils/index'
import { addInset_api ,getInsetList_api,getTelList_api} from '@/api/findC'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const router = useRouter()
const goDetails = (id:string)=>{
  router.push('/findC/telDataDetails?id='+id)
}

const page = ref(1)
const total = ref(0)
const getList = ()=>{
  getInsetList_api({
    "current": page.value,
    "size": 10
  }).then((res:res)=>{
    if(res.status == 1){
      tableData.value = res.body.records
      total.value = res.body.total
    }
  })
}
getList()

interface IData {
  id:number,
  group_name:string,//人群名称
  group_desc:string,//人群描述
  status:number,//状态
  address:string,//地区
  count:number,//覆盖用户人数
  create_time:number,//创建日期
  source:number,//来源
  province:number,//省份
  city:number,//城市
  district:number,//区
}

const tableData = ref<IData[]>([])

const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

const changePage =()=>{
  getList()
}

const tels = ref([])
const operator = ref<any>({})
const getOperator = ()=>{
  getTelList_api().then((res:res)=>{
    operator.value = res.body
  })
}
getOperator()
const changeOperator = (val:any)=>{
  tels.value = operator.value[val].segments
}
const addShow = ref(false)
const closeAdd = ()=>{
  //关闭添加弹窗
  tels.value = []
  addShow.value = false
  upLoading.value = false
  addFormRef.value!.resetFields()
}
const addForm = ref({
  people:'',
  desc:'',
  addr:[],
  operator:'',
  tels:[]
})
const addRules = reactive({
  people:[{
    required: true,
    message: '请输入人群名称',
    trigger: 'blur',
  }],
})
const upLoading = ref(false)
type FormInstance = InstanceType<typeof ElForm>
const addFormRef = ref<FormInstance>()
const submitAddForm = () => {
  //提交添加需求表单
  addFormRef.value!.validate((valid) => {
    if (valid) {
      console.log('submit!')
      upLoading.value = true
      addInset_api({
        "city": addForm.value.addr[1]||0,
        "district": addForm.value.addr[2]||0,
        "group_desc": addForm.value.desc,
        "group_name": addForm.value.people,
        "province": addForm.value.addr[0]||0,
        "segment": addForm.value.tels.join()
      }).then((res:res)=>{
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
</script>

<script lang="ts">
export default { name:'号码段获客C' }
</script>

<style scoped lang="scss">
.teldata_page_c{
  .topbtns{
    margin-bottom: 20px;
  }
  :deep(.el-form-item__label){
    width: 90px;
  }
}
</style>