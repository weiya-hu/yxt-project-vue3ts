<template>
  <div class="otherdata_page_c">
    <TopSearch @height-search="heightSearch" @search="wordSearch" :words="words" :hasHeight="false" placeholder="请输入电话号码、姓名查询"/>
    <div class="topbtns fsc">
      <FindNumber class="lt" :total="total"/>
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
        <el-table-column property="name" label="姓名" width="150"/>
        <el-table-column property="sex" label="性别" width="150">
          <template #default="scope">
            <div>{{ scope.row.sex == 0?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="mobiles" label="联系方式"  width="210"/>
        <el-table-column property="email" label="邮箱" width="210"/>
        <el-table-column property="address" label="地区">
          <template #default="scope">
            <div>{{getHashStr(strToArr(scope.row.province,scope.row.city,scope.row.district),addressHash)}}</div>
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
    <MyPage :total="total" v-model="searchParams.current" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { ref,computed  } from 'vue'
import TopSearch from '@/components/TopSearch.vue'
import MyPage from "@/components/MyPage.vue";
import FindNumber from "@/components/FindNumber.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { mainStore } from '@/store/index'
import { getHashStr,strToArr,getSource} from '@/utils/index'
import { getSearchWord_api ,wordSearchList_api } from '@/api/findC'
import {okMsg} from '@/utils/index'

const store = mainStore()
const addressHash = computed(() => store.state.addressHash)

const words = ref([])
const getWord = ()=>{
  getSearchWord_api().then((res:res)=>{
    words.value = res.body
  })
}
getWord()

interface IData {
  city: number, // 市
  district: number, // 区
  email: string, //邮箱
  id: number,
  mobiles: string, // 联系方式
  name: string, // 姓名
  origin_id: number,
  province: number, // 省
  sex: 0, // 性别
  source: 1, // 来源
  tags: any[], 
  tel_prefixs: string[], // 固话号码段
  telephone: string, // 固话
}
const total = ref(0)
const tableData = ref<IData[]>()
const searchParams = ref({
  size:10,
  current:1,
  source:2
})
const searchType = ref(1) //searchType 1普通搜索 2高级搜索
const word = ref('')
const wordSearch = async (keyWord:string)=>{
  okMsg('查询成功')
  searchType.value = 1
  word.value = keyWord
  searchParams.value.current = 1
  await goSearch()
  getWord()
}
const goSearch = async ()=>{
  await wordSearchList_api({
    ...searchParams.value,
    str:word.value
  }).then((res:res)=>{
    if(res.status == 1){
      total.value = res.body.total
      tableData.value = res.body.records
    }
  })
}

const heightSearch = (params:any)=>{
  searchType.value = 2
  searchParams.value ={
    ...searchParams.value,
    ...params
  }
  console.log(searchParams.value);
  goheightSearch()
}

const goheightSearch = ()=>{
  
}

const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

const changePage =()=>{
  searchType.value == 1?goSearch():goheightSearch()
}

</script>

<style scoped lang="scss">
.otherdata_page_c{
  .topbtns{
    padding: 30px 0 20px 0;
  }
}
</style>