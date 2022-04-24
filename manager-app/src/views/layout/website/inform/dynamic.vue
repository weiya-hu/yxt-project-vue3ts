<template>
  <div class="dynamic-container">
    <el-card class="mycard">
      <template #header>
      <div class="fsc f1">
        <span>动态列表</span>
        <el-button  type="primary" class="btns"  @click="$router.push('/website/inform/dynamic/dynamicadd')">添加</el-button>
      </div>
      </template>
      <div class="mytable">
        <el-table :data="dynamicData"  border style="width: 100%">
        <el-table-column property="title" label="文章标题" width="230"/>
        <el-table-column property="type_name" label="分类" width="160"/>
        <el-table-column property="creator" label="来源"/>
        <el-table-column property="time" label="发布时间" width="200">
            <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
            </template>
        </el-table-column>
        <el-table-column property="readed" label="查看量"/>
        <el-table-column property="source" label="状态">
          <template #default="{row}">
            <div class="ss">
              <div class="point" :style="row.status == 0?'background: #51A1FC;':row.status == 1?'background: #E40000;' : 'background:#24BD13;'"></div>
              <span> {{row.status == 0?'草稿':row.status == 1?'离线':'在线'}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
            <template #default="{row}">
            <div class="fcs" >
                <el-link type="primary" @click="$router.push('/website/inform/dynamic/dynamicdetails?id='+row.id)">查看</el-link>
                <div class="line"></div>
               <el-link type="primary"   v-if="row.status == 2" @click="getDyDown(row.id)">下线</el-link>
                <el-link type="primary"  v-if="row.status == 1" @click="getDyUp(row.id)">上线</el-link>
                <div class="line"  v-if="row.status == 1||row.status == 2"></div>
                <el-link type="primary" v-if="row.status == 1||row.status == 0" @click=" ">编辑</el-link>
                <div class="line"></div>
                <el-link type="primary"  v-if="row.status == 1||row.status == 0" @click="getDel(row.id)">删除</el-link>
            </div>
            </template>
        </el-table-column>
        </el-table>
      </div>
      <MyPage :total="total" v-model:page="page" @change="dynamicList" v-model:size="size"/>
      <MyDialog v-model="delShow" :msg="'此动态删除后无法撤回，请谨慎删除！'" @sure="getDelDate"/>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/utils/date';
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import {dynamic_api,dyUp_api,dyDown_api,dyDel_api} from '@/api/website';

const total = ref(0)
const size = ref(10)
const page = ref(1)
interface SData {
  size:number,
  current:number,
}
const dynamicData = ref<SData[]>([])
const dynamicList= async ()=>{
  const res = await dynamic_api({
    current:page.value,
    size:size.value
  })
  if(res.status==1){
    dynamicData.value=res.body.records
    total.value = res.body.total
  }
}
dynamicList()
// 上线
const upId = ref('')
const getDyUp =(id:string)=>{
  upId.value=id
  getUp()
}
const getUp = async()=>{
  const res = await dyUp_api({id:upId.value}).then((res:res)=>{
    if(res.status==1){
      dynamicList()
    }
  })
}
// 下线
const DownId = ref('')
const getDyDown =(id:string)=>{
  DownId.value=id
  getDown()
}
const getDown = async()=>{
  const res = await dyDown_api({id:DownId.value}).then((res:res)=>{
    if(res.status==1){
      dynamicList()
    }
  })
}
// 删除
const delId = ref('')
const delShow = ref(false)
const getDel = (id:string)=>{
  delId.value = id
  delShow.value = true
  console.log(delId);
  
}
const getDelDate = async()=>{
  dyDel_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      dynamicList()
      delShow.value = false
    }
  })
}


</script>

<style scoped lang="scss">

.line{
  margin-left: -3px;
}
 
.ss{
  margin:20px 0;
  font-size: 14px;
  .point{
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  #24BD13;
    border-radius: 50%;
    margin: 7px 15px 3px 0;
  }
} 

</style>