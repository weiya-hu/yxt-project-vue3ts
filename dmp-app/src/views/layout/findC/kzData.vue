<template>
  <div class="kzdata_page_c" v-loading="loading">

    <div class="top_search">
      <el-form ref="formRef" :model="form">
        <div class="fcs">
          <el-form-item label="行业" prop="industry_id">
            <MyCascader v-model="form.industry_id" type="type" ref="typeCRef"/>
          </el-form-item>
          <el-form-item label="地区" prop="address">
            <MyCascader v-model="form.address" type="address" ref="addrCRef"/>
          </el-form-item>
          <el-form-item label="关键字" prop="keyword">
            <el-input v-model="form.keyword" placeholder="请输入职业、兴趣等关键词" maxlength="15"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="年龄" prop="age">
          <el-radio-group v-model="form.age">
            <el-radio :label="v.id" v-for="v in ageList" :key="v.id">{{v.min ? v.max ? v.min + '岁-' + v.max + '岁' : v.min + '+岁' : '不限'}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-radio-group v-model="form.education">
            <el-radio :label="v.value" v-for="v in educationList" :key="v.id">{{v.id ? v.name : '不限'}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <div>
          <el-button type="primary" @click="search">&emsp;查询&emsp;</el-button>
          <el-button @click="reset">&emsp;重置&emsp;</el-button>
        </div>
      </el-form>
    </div>
    
    <TopBtns :total="total" syncbtn @sync="setSync" ref="topBtnRef" :sync-api="getSyncInfo_api" :sync-disabled="syncDisabled" class="topbtns"/>

    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="100%"
        @selection-change="handleSelectionChange"
        ref="tableRef"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column property="name" label="姓名" width="70"/>
        <el-table-column property="sex" label="性别" width="60">
          <template #default="scope">
            <div>{{ scope.row.sex == 0?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="age" label="年龄" width="70"/>
        <el-table-column property="education" label="学历"  width="130">
          <template #default="scope">{{educationList.find(v => v.id === scope.row.education).name}}</template>
        </el-table-column>
        <el-table-column property="mobiles" label="联系方式"  width="120">
          <template #default="scope">
            <div v-html="scope.row.mobiles"></div>
          </template>
        </el-table-column>
        <el-table-column property="email" label="邮箱" width="180"/>
        <el-table-column property="industry_id" label="从事行业" width="110">
          <template #default="scope">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width:100px" class="fcc">{{getHashStr(scope.row.industry_id,typeHash)}}</div>
              </template>
              <div class="els">{{getHashStr(scope.row.industry_id,typeHash,'last')}}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="job" label="职业" width="120"/>
        <el-table-column property="tags" label="行为兴趣" width="250">
          <template #default="{ row }">
            <el-tag v-for="(v, i) in row.tags" :key="i" class="user_tag" :type="tagTypes[i]">{{v}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column property="address" label="地区" width="140">
          <template #default="scope">
            <el-tooltip effect="dark" placement="top">
              <template #content>
                <div style="width:100px" class="fcc">{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
              </template>
              <div class="els">{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column property="source" label="来源" width="100">
          <template #default="scope">
            <div>{{ getSource(scope.row.source) }}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" :size="50" v-model="searchParams.current" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref,computed  } from 'vue'
import MyPage from "@/components/MyPage.vue";
import TopBtns from "@/components/TopBtns.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { mainStore } from '@/store/index'
import { getHashStr,strToArr,getSource} from '@/utils/index'
import { getSearchWord_api ,getEducationList_api, getUserPageList_api, setSync_api, getSyncInfo_api } from '@/api/findC'
import { errMsg } from '@/utils/index'
import MyCascader from "@/components/MyCascader.vue";

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)
const typeHash = computed(() => store.state.typeHash)

const words = ref([])
const getWord = ()=>{
  getSearchWord_api().then((res:res)=>{
    words.value = res.body
  })
}
// getWord()
const tagTypes = ['', 'success', 'info', 'warning', 'danger',]

interface IData {
  city: number, // 市
  district: number, // 区
  email: string, //邮箱
  id: number,
  mobiles: string, // 联系方式
  name: string, // 姓名
  origin_id: number,
  province: number, // 省
  sex: 0 | 1 | 2, // 性别
  source: 1, // 来源
  tags: any[], // 标签
  job: string, // 职业
  industry_id: string[], // 行业id
  education: number, // 教育id
  age: number, // 年龄
  tel_prefixs: string[], // 固话号码段
  telephone: string, // 固话
}
const total = ref(0)
const loading = ref(false)
const tableData = ref<IData[]>([])
const searchParams = ref({
  size:50,
  current:1,
  source:1
})

const educationList = ref<any[]>([])
const getEducationList = async () => {
  const res = await getEducationList_api()
  res.status === 1 && (educationList.value = res.body)
}
getEducationList()
const ageList = [
  { id: 0 },
  { id: 1, min: 18, max: 23 },
  { id: 2, min: 24, max: 30 },
  { id: 3, min: 31, max: 40 },
  { id: 4, min: 41, max: 49 },
  { id: 5, min: 50 },
]
const form = ref({
  keyword: '', // 关键字
  industry_id: [], // 行业分类id
  address: [], // 地区id
  // province: '', // 省
  // city: '', // 市
  // district: '', // 区
  age: '', // 年龄
  // start_age: '', // 开始年龄
  // end_age: '', // 结束年龄
  education: '', // 学历
})
const formRef = ref()
const reset = () => {
  formRef.value.resetFields()
}
const search = async () => {
  console.log(form.value);
  loading.value = true
  const res = await getUserPageList_api({
    ...searchParams.value,
    keyword: form.value.keyword,
    industry_id: form.value.industry_id.join(),
    province: form.value.address[0] || null,
    city: form.value.address[1] || null,
    district: form.value.address[2] || null,
    start_age: ageList.find(v => v.id === Number(form.value.age))?.min || null,
    end_age: ageList.find(v => v.id === Number(form.value.age))?.max || null,
    education: form.value.education
  })
  loading.value = false
  if(res.status === 1){
    total.value = res.body.total
    tableData.value = res.body.records
  }else{
    errMsg('查询失败')
  }
}

const multipleSelection = ref<(string|number)[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val.map(v => v.id)
}

const changePage =()=>{
  
}

const tableRef = ref()
const clear = () => {
  multipleSelection.value = []
  tableRef.value.clearSelection()
}

const topBtnRef = ref()
const syncDisabled = computed(() => !multipleSelection.value.length)
const setSync = async () => {
  topBtnRef.value.setLoading(true)
  const res = await setSync_api({
    list: multipleSelection.value
  })
  topBtnRef.value.close(res.message)
  clear()
}
</script>

<style scoped lang="scss">
.kzdata_page_c{
  height: 100%;
  .top_search{
    background-color: #fff;
    padding: 30px;
    border-radius: 6px;
    .fcs{
      .el-form-item{
        margin-right: 36px;
      }
    }
  }
  .topbtns{
    padding-top: 30px;
  }
  .mytable{
    height: calc( 100% - 126px );
    .user_tag{
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>