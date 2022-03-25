<template>
  <div class="poster_details">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/custom' }">个性化内容库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/custom/poster' }">海报库</el-breadcrumb-item>
      <el-breadcrumb-item>海报详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mytable">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="selection" width="50"/>
        <el-table-column property="id" label="ID"/>
        <el-table-column property="thumb_url" label="海报">
          <template #default="{row}">
            <img :src="row.thumb_url" alt="" class="imgitem">
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
              <el-link type="primary" @click="look(row.thumb_url)">查看</el-link>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <el-image-viewer @close="imgShow=false" v-if="imgShow" :url-list="showImgs" :initial-index="showImgIndex"/>
    <MyDialog v-model="delShow" :msg="'确认删除这条数据吗?'" @sure="sureDel"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatDate } from '@/utils/date'
import { customDetails_api } from '@/api/custom'
import { posterDel_api } from '@/api/myWork'
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
  const res = await customDetails_api({id},3)
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
  posterDel_api({id:delId.value}).then((res:res)=>{
    if(res.status == 1){
      getList()
      delShow.value = false
    }
  })
}

const showImgs = ref<string[]>([])//预览图片列表
const imgShow = ref(false)//预览是否显示
const showImgIndex = ref(0)//首张预览图片
const look = (url:string)=>{
  let arr:string[] = []
  tableData.value.forEach(v=>{
    arr.push(v.thumb_url)
  })
  showImgs.value  = arr
  showImgIndex.value = showImgs.value.findIndex(v=>v==url)
  imgShow.value = true
}
</script>

<style scoped lang="scss">
.poster_details{
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
</style>