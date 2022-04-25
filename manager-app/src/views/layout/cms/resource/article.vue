<template>
  <div class="tel_data">
    <el-card>
    <el-form inline :model="inputSearch" class="inline_myform" ref="myform" >
      <el-form-item prop="status" label="状态 :">
        <el-select v-model="inputSearch.status" placeholder="请选择">
          <el-option label="草稿" value=1 />
        <el-option label="上架" value=2 />
        <el-option label="下架" value=3 />
        </el-select>
      </el-form-item>
      <el-form-item prop="date" label="创建日期 :">
        <el-date-picker
          v-model="inputSearch.time"
          type="daterange"
          placeholder="请选择"
          format="YYYY-MM-DD"
          value-format="x"
        />
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="$router.push('/cms/resourceedit')">新建</el-button>
        <el-button type="primary" @click="searchword" class="search-query">查询</el-button>
        <el-button @click="resetSearch" class="search-query" >重置</el-button>
      </el-form-item>
    </el-form>
    </el-card>
    <el-card class="mycard mt20"> 
      <div class="mytable">
      <el-table
        border
        draggable
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column property="id" label="ID" width="180" align="center"/>
        <el-table-column property="thumb_url" label="封面图片" width="124" align="center">
           <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
          </template>
        </el-table-column>
        <el-table-column property="title" label="标题" :show-overflow-tooltip="true" width="250" align="center">
          <template #default="{row}">
            <el-link type="primary" @click="$router.push('/cms/resourcedet?id='+row.id)" >{{row.title}}</el-link>
          </template>
        </el-table-column>
        <el-table-column property="industry_name" label="行业分类" width="210" align="center">
          
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" width="200" align="center" >
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="200" align="center">
          <template #default="{row}">
            <div class="fcs fleximg">
              <div class="dot" :class="getStatus(row.status).className"></div>
              <div class="staus">{{getStatus(row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作"  >
          <template #default="{row}">
            <div class="fcs" v-if="row.status == 2">
              <el-link type="primary" @click="down(row.id)">下架</el-link>
            </div>
             <div class="fcs" v-if="row.status == 3">
              <el-link type="primary" @click="up(row.id)">上架</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="$router.push('/cms/resourceedit?id='+row.id)">编辑</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="del(row.id)">删除</el-link>
            </div>
            <div class="fcs" v-if="row.status == 1">
              <el-link type="primary" @click="$router.push('/cms/resourceedit?id='+row.id)">编辑</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="del(row.id)">删除</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model:page="page" @change="getList" v-model:size="size"/>
    </el-card>
    <MyDialog v-model="delShow" :msg="'确认删除吗?'" @sure="sureDel"/>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'驳回原因'" :btn="1"/>
  </div>
</template>

<script setup lang="ts">
import { ref ,reactive} from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import { articleList_api,articleDown_api,articleUp_api,articleDel_api} from '@/api/cms/resource'
interface SData {
  id: number|string,
  thumb_url: string,
  title: string,
  industry_name:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const tableData = ref<SData[]>([])
const page = ref(1)
const total = ref(0)
const size = ref(10)
// 搜索
const inputSearch = reactive({
  status:'',
  time:''
})
const searchword = () => {
  page.value = 1
  getList()
}
// 重置
const resetSearch=()=>{
  inputSearch.status='',
  inputSearch.time=''
  getList()
}
// 获取列表
const getList =async ()=>{
  const res = await articleList_api({
    size: size.value,
    current: page.value,
    ...inputSearch,
    startTime:inputSearch.time[0],
    endTime:inputSearch.time[1],
  })
  console.log(res);
  
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()
// 驳回弹出框
// const open = (id:string|number) => {
//   ElMessageBox.prompt('驳回原因', '提示', {
//     confirmButtonText: '确认',
//     cancelButtonText: '取消',
//   })
//     .then(async ({ value }) => {
//       await videoUpdate_api({
//           fail_reason:value,
//           status:4,
//           id
//   })
//      getList()
//     })
//     .catch(() => {
//       ElMessage({
//         type: 'info',
//         message: '取消驳回',
//       })
//     })
// }
// 下架
const down =async(id:string)=>{
await articleDown_api({id})
 getList()
}
// 上架
const up =async(id:string)=>{
await articleUp_api({id})
 getList()
}
// 删除
const delShow=ref(false)
const delId=ref('')
const del = (id:string)=>{
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  //确认删除
  articleDel_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      getList()
      delShow.value = false
    }
  })
}
const multipleSelection = ref<SData[]>([])
const handleSelectionChange = (val:SData[]) => {
  //表格选择
  multipleSelection.value = val
}
const getStatus = (type:number)=>{
  const obj = ref<{text:string,className:string}>()
  switch (type) {
    case 1:
      obj.value = {
        text:'草稿',
        className:'cbbb'
      }
      break;
    case 2:
      obj.value = {
        text:'上架',
         className:'cdf'
      }
      break;
    case 3:
      obj.value = {
        text:'下架',
         className:'cyellow'
      }
      break;
    default:
      obj.value = {
        text:'草稿',
         className:'cbbb'
      }
      break;
  }
  return obj.value
}
const errorShow = ref(false)
const errorMsg = ref('')
</script>
<script lang="ts">
export default { name:'我的作品库——视频库' }
</script>

<style scoped lang="scss">
.tel_data{
 .firstimg{
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
  .dot{
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .cbbb{
    background-color: $colorbbb;
  }
 .cyellow{
    background-color: #e70207;
  }
  .cdf{
    background-color: #38b227;
  }
  .cred{
    background-color: #fbc40d;
  } 
}
:deep(.videobox){
  .el-dialog__body{
    padding: 0;
    height: calc(100% - 55px);
  }
}
.show_video{
  width: 100%;
  height: 100%;
}
.mycard{
      padding-top: 20px;
    }
    .btns{
          display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    line-height: 32px;
    position: relative;
    font-size: var(--font-size);
    min-width: 0;
    .el-button{
      margin-top: 24px;
    }
    .search-quer{
      margin-left: 14px;
    }
    }
</style>