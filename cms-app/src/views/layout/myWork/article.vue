<template>
  <div class="m_article">
    
    <TopBtns @add="$router.push('/myWork/articleAdd')"/>

    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID" width="230"/>
        <el-table-column property="thumb_url" label="封面图片" width="160">
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg lookhover" @click="look(row.thumb_url)">
          </template>
        </el-table-column>
        <el-table-column property="title" label="标题">
          <template #default="{row}">
            <el-link v-if="row.status != 4" type="primary" @click="$router.push(row.status == 1 ? '/myWork/articleAdd?id=' + row.id : '/myWork/articleDetails?id=' + row.id)">{{row.title}}</el-link>
            <span v-if="row.status == 4" @click="errorMsg = row.fail_reason;errorShow=true">{{row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期" width="200">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column property="status" label="状态" width="180">
          <template #default="{row}">
            <div class="fcs">
              <div class="dot" :class="getStatus(row.status).className"></div>
              <div class="staus">{{getStatus(row.status).text}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" v-if="row.status == 1" @click="$router.push('/myWork/articleAdd?id='+row.id)">编辑</el-link>
              <el-link type="primary" v-if="row.status == 2 || row.status == 3" @click="$router.push('/myWork/articleDetails?id='+row.id)">查看</el-link>
              <el-link type="primary" v-if="row.status == 4" @click="errorMsg = row.fail_reason;errorShow=true">拒绝原因</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
    <MyDialog v-model="errorShow" :msg="errorMsg" :title="'拒绝原因'" :btn="1"/>
    <el-image-viewer @close="imgShow=false" v-if="imgShow" :url-list="showImgs" :initial-index="showImgIndex"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import TopBtns from "@/components/TopBtns.vue";
import { articleList_api, articleDel_api } from '@/api/myWork'
interface SData {
  id: number|string,
  thumb_url:string,
  title:string,
  create_time:number,
  status:number,
  fail_reason?:string,
}
const page = ref(1)
const total = ref(0)
const tableData = ref<SData[]>([])
const getList =async ()=>{
  const res = await articleList_api({
    size: 10,
    current: page.value
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
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
const getStatus = (type:number|string)=>{
  const obj = ref<{text:string,className:string}>()
  switch (Number(type)) {
    case 2:
      obj.value = {
        text:'待审核',
        className:'cyellow'
      }
      break;
    case 3:
      obj.value = {
        text:'已通过',
        className:'cdf'
      }
      break;
    case 4:
      obj.value = {
        text:'已拒绝',
        className:'cred'
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

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
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

const errorShow = ref(false)
const errorMsg = ref('')

const showImgs = ref<string[]>([])//预览图片列表
const imgShow = ref(false)//预览是否显示
const showImgIndex = ref(0)//首张预览图片
const look = (url:string)=>{
  // window.open(url)
  let arr:string[] = []
  tableData.value.forEach(v=>{
    arr.push(v.thumb_url)
  })
  showImgs.value  = arr
  showImgIndex.value = showImgs.value.findIndex(v=>v==url)
  imgShow.value = true
}

</script>

<script lang="ts">
export default { name:'我的作品库-软文' }
</script>

<style scoped lang="scss">
.m_article{
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
    background-color: $coloryellow;
  }
  .cdf{
    background-color: $dfcolor;
  }
  .cred{
    background-color: $colorred;
  }
}
</style>