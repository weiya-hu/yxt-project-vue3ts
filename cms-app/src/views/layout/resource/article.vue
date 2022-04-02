<template>
  <div class="resource_article">
    <div class="myNav">
    <div class="tips">行业分类</div>
      <el-select v-model="value" class="article_sel" placeholder="请选择">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" size="large"  class="cx" @click="wordSearch">&emsp;查询&emsp;</el-button>
    </div>
    <div class="mytable">
     <el-table :data="tableData">
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID" width="230"/>
       <el-table-column property="thumb_url" label="封面图片" width="160">
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="firstimg">
          </template>
        </el-table-column>
        <el-table-column property="title" label="标题"/>
         <el-table-column property="source" label="来源">康州数智</el-table-column>
        <el-table-column property="time" label="时间" width="200">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{row}">
            <div class="fcs">
              <MyShare :share-id="row.id">
                <el-link type="primary" @click="goShare(row.id)">分享</el-link>
              </MyShare>
              <div class="line"></div>
              <el-link type="primary"  @click="downLoad(row.id) ">下载</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="$router.push('/resource/articleDetails?id='+row.id)">查看</el-link>
            </div>
          </template>
        </el-table-column>
     </el-table>
    </div>
    <MyPage :total="total" v-model="page" @change="changePage"/>
    <MyDown v-model="kfShow" type='down' ref="myDownRef"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyShare from '@/components/MyShare.vue';
import MyPage from "@/components/MyPage.vue";
import MyDown from "@/components/MyDown.vue";
import { formatDate } from '@/utils/date';
import { articlesList_api } from '@/api/resource'


const kfShow = ref(false)
const options = ref([
  {
          value: '选项1',
          label: '医疗器械1'
        }, {
          value: '选项2',
          label: '医疗器械2'
        }, {
          value: '选项3',
          label: '食品安全'
        }, {
          value: '选项4',
          label: '医疗器械3'
        }, {
          value: '选项5',
          label: '医疗器械4'
        }
])

const value = ref()
const page = ref(1)
const total = ref(0)

interface SData {
  id: number|string,
  industry_id:string,
  size:number,
  current:number,
}
const tableData = ref<SData[]>([])
// 查询功能
const wordSearch =()=>{
  console.log('查询功能')
}
const shareId = ref('')//要分享的id
const goShare=(id:string)=>{
  shareId.value = id
}
const myDownRef = ref()
const downLoad = (id:string)=>{
  kfShow.value=true
  myDownRef.value.getData(id)

}
const getList = async ()=>{
  const res = await articlesList_api({
    current: page.value,
    size: 10,
    industryId:value.value,
    type:1,
  })
  if(res.status == 1){
    total.value = res.body.total
    tableData.value = res.body.records 
  }
}
getList()
const changePage = ()=>{
  console.log(page.value);
}
</script>
<style scoped lang="scss">
.resource_article{
  .tips{
    display: inline;
    margin-left: 20px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
  }
  .article_sel{
    margin: 0 40px 0 20px;
    width: 270px;
    height: 36px;
    border-radius: 3px;
  }
  .cx{
    width: 92px;
    height: 32px;
  }
 
}
</style>