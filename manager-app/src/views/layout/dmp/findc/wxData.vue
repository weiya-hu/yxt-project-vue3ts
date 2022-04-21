<template>
  <div class="wx_data">
    <div @click="$router.push('wxdatadetails')">去详情</div>
    <search @search="searchword" @reset="resetSearch" v-model="inputSearch">
      <el-option label="待审核" value=2 />
        <el-option label="已通过" value=3 />
        <el-option label="被驳回" value=4 />
    </search>
    <el-card>
       <MyPage :total="total" v-model:page="page" @change="wxList" v-model:size="size"/>
    </el-card>
    
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import search from'@/components/Search.vue'
import Mypage from "@/components/Mypage.vue";
const page = ref(1)
const total = ref(0)
const size = ref(10)
</script>

<script lang="ts">
export default { name:'WxData' }

const wxList = ()=>{

}
// 搜索
const inputSearch = reactive({
  userName:'',
  status:'',
  create_time:''
})
// 查询
const searchword = () => {
  wxList()
}
// 重置
const resetSearch=()=>{
  inputSearch.userName='',
  inputSearch.status='',
  inputSearch.create_time=''
   wxList()
}
</script>

<style scoped lang="scss">

</style>