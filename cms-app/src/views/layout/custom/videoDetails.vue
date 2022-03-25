<template>
  <div class="video_details">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/custom' }">个性化内容库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/custom/video' }">视频库</el-breadcrumb-item>
      <el-breadcrumb-item>视频详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID"/>
        <el-table-column property="video_url" label="视频">
          <template #default="{row}">
            <video :src="row.video_url" alt="" class="imgitem"></video>
          </template>
        </el-table-column>
        <el-table-column property="create_time" label="创建日期">
          <template #default="{row}">
            <div>{{formatDate(new Date(row.create_time),'yyyy-MM-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="{row}">
            <div class="fcs">
              <el-link type="primary" @click="goDel(row.id)">删除</el-link>
              <div class="line"></div>
              <el-link type="primary" @click="look(row.video_url)">查看</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
    <el-dialog v-model="lookShow" title="查看视频" fullscreen @close="lookVideo = ''" custom-class="videobox">
      <video :src="lookVideo" controls class="show_video"></video>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'
import { customDetails_api } from '@/api/custom'
import { videoDel_api } from '@/api/myWork'
import MyEmpty from "@/components/MyEmpty.vue";
import MyDialog from "@/components/MyDialog.vue";
const route = useRoute()
const id = route.query.id as string

interface IData {
  create_time: number,
  id: string,
  thumb_url: string,
}

const tableData = ref<IData[]>([])
const getList = async ()=>{
  const res = await customDetails_api({id},4)
  res.status == 1 && (tableData.value = res.body)
}
getList()

const delId = ref('')
const delShow = ref(false)
const goDel = (id:string)=>{
  //删除
  delId.value = id
  delShow.value = true
}
const sureDel = ()=>{
  //确认删除
  videoDel_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      getList()
      delShow.value = false
    }
  })
}

const lookShow = ref(false)
const lookVideo = ref('')
const look = (url:string)=>{
  // window.open(url)
  lookVideo.value = url
  lookShow.value = true
}
</script>

<style scoped lang="scss">
.video_details{
  .el-breadcrumb{
    font-size: 12px;
  }
  .mytable{
    margin-top: 20px;
  }
  .imgitem{
    width: 48px;
    height: 48px;
  }
}
:deep(.videobox){
  .el-dialog__body{
    padding: 0;
    height: calc(100% - 55px);
  }
  .show_video{
    width: 100%;
    height: 100%;
  }
}
</style>