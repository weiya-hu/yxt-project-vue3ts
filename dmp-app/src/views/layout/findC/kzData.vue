<template>
  <div class="kzdata_page_c">
    <TopSearch @height-search="heightSearch" @search="wordSearch" :words="words"/>
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
            <div>{{ scope.row.sex == 1?'男':'女' }}</div>
          </template>
        </el-table-column>
        <el-table-column property="mobiles" label="联系方式"  width="210"/>
        <el-table-column property="email" label="邮箱" width="210"/>
        <el-table-column property="address" label="地区"/>
        <el-table-column property="source" label="来源" width="100">
          <template #default="scope">
            <div class="els2">{{ scope.row.source==1?'康洲数智':'第三方数据' }}</div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="1000" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref  } from 'vue'
import TopSearch from '@/components/TopSearch.vue'
import MyPage from "@/components/MyPage.vue";
import FindNumber from "@/components/FindNumber.vue";
import MyEmpty from "@/components/MyEmpty.vue";
import { getSearchWord_api ,wordSearchList_api } from '@/api/findC'

const words = ref([])
const getWord = ()=>{
  getSearchWord_api().then((res:res)=>{
    words.value = res.body
  })
}
getWord()

const searchParams = ref({
  size:10,
  current:1,
  source:1
})
const searchType = ref(1) //searchType 1普通搜索 2高级搜索
const word = ref('')
const wordSearch = (keyWord:string)=>{
  searchType.value = 1
  word.value = keyWord
  searchParams.value.current = 1
  goSearch()
}
const goSearch = ()=>{
  wordSearchList_api({
    ...searchParams.value,
    str:word.value
  }).then((res:res)=>{
    console.log(res);
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

const page = ref(1)
const total = ref(0)

interface IData {
  id:number,
  name:string,//姓名
  sex:number,//性别
  mobile:string,//联系方式
  email:string,//邮箱
  type:string,//从事行业
  address:string,//地区
  source:number,//来源
}

const tableData = ref<IData[]>([
  {
    id:0,
    name:'王**',
    sex:1,
    mobile:'139****1928',
    email:'jdc31@126.com',
    type:'计算机软件',
    address:'四川省成都市金牛区',
    source:1,
  },
  {
    id:2,
    name:'张**',
    sex:2,
    mobile:'139****1928',
    email:'jdc31@126.com',
    type:'计算机软件',
    address:'四川省成都市金牛区',
    source:1,
  },
  {
    id:3,
    name:'李**',
    sex:1,
    mobile:'139****1928',
    email:'jdc31@126.com',
    type:'计算机软件',
    address:'四川省成都市金牛区',
    source:1,
  },
])

const multipleSelection = ref<IData[]>([])
const handleSelectionChange = (val:IData[]) => {
  multipleSelection.value = val
}

const changePage =()=>{
  console.log(page.value);
}

</script>

<style scoped lang="scss">
.kzdata_page_c{
  .topbtns{
    padding: 30px 0 20px 0;
  }
}
</style>