<template>
  <div class="school_page">
    <el-card>
      <el-button-group class="btn_tab">
        <el-button :class="tab == 1 && 'btn_tab_active'" @click="tab = 1">123</el-button>
        <el-button :class="tab == 2 && 'btn_tab_active'" @click="tab = 2">321</el-button>
      </el-button-group>
      <div class="long_line"></div>
      <div class="fsc mycard">
        <div class="el-card__header">文章列表</div>
        <el-button type="primary">添加</el-button>
      </div>
      <div class="mytable">
        <el-table :data="tableData" border draggable>
          <el-table-column prop="title" label="标题"/>
          <el-table-column prop="article_type" label="分类">
          </el-table-column>
          <el-table-column prop="create_time" label="发布时间">
            <template #default="{ row }">{{formatDate(new Date(row.create_time))}}</template>
          </el-table-column>
          <el-table-column prop="title" label="查看量"/>
          <el-table-column prop="status" label="状态">
            <template #default="{ row }">
              <div class="fcs">
                <div class="status_dot" :class="row.status == 1 ? 'sdot_g' : 'sdot_r'"></div>
                <div>{{row.status == 1 ? '已处理' : '未处理'}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="fcs">
                
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getArtList_api, delArt_api, setArt_api } from '@/api/website/school'
import MyEmpty from "@/components/MyEmpty.vue";
import MyPage from "@/components/MyPage.vue";
import MyDialog from "@/components/MyDialog.vue";
import { formatDate } from '@/utils/date'

const tab = ref(1)

const tableData = ref([])
const page = ref(1)
const size = ref(20)
const total = ref(0)
const getList = async () => {
  const res = await getArtList_api({
    size: size.value,
    current: page.value,
  })
  if(res.status == 1){
    tableData.value = res.body.records
    total.value = res.body.total
  }
}
getList()

</script>

<style scoped lang="scss">
.school_page{
  .long_line{
    border-top: 1px solid $coloreee;
    margin-top: -1px;
    margin-bottom: 16px;
  }
  .el-card__header{
    padding-left: 0;
    padding-top: 0;
  }
  .mytable{
    margin-top: 12px;
  }
}
</style>