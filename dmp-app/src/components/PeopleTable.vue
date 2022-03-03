<template>
  <div class="mytable people_table">
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50" />
      <el-table-column property="id" label="ID" width="150"/>
      <el-table-column property="name" label="人群名称" width="150"/>
      <el-table-column property="desc" label="人群描述"/>
      <el-table-column property="state" label="状态" width="130">
        <template #default="scope">
          <div class="fcs">
            <div class="dot" :class="scope.row.state == 0?'dot_ing':scope.row.state == 1?'dot_ok':scope.row.state == 2?'dot_err':'dot_close'"></div>
            <div>{{ scope.row.state == 0?'审核中':scope.row.state == 1?'已通过':scope.row.state == 2?'已拒绝':'已完成' }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="address" label="地区"/>
      <el-table-column property="num" label="覆盖用户人数" width="140">
        <template #default="scope">
          <div>{{ scope.row.state == 1?'---':scope.row.num }}</div>
        </template>
      </el-table-column>
      <el-table-column property="money" label="消耗金额 (元)" width="130"/>
      <el-table-column property="create_time" label="创建日期" width="130">
        <template #default="scope">
          <div>{{formatDate(new Date(scope.row.create_time),'yyyy-MM-dd')}}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="来源" width="130">
        <template #default="scope">
          <div>{{ scope.row.source == 1?'号码段':'---' }}</div>
        </template>
      </el-table-column>
      <el-table-column property="source" label="操作" width="150">
        <template #default="scope">
          <div class="fcs" v-if="scope.row.state === 0">
            <el-link type="primary">删除</el-link>
            <div class="line"></div>
            <el-link type="primary">下载附件</el-link>
          </div>
          <div class="fcs" v-if="scope.row.state === 1">
            <el-link type="primary">下载方案</el-link>
          </div>
          <div class="fcs" v-if="scope.row.state === 3">
            <el-link type="primary">查看</el-link>
            <div class="line"></div>
            <el-link type="primary">下载方案</el-link>
          </div>
          <div class="fcs" v-if="scope.row.state === 2">
            <el-link type="primary">删除</el-link>
            <div class="line"></div>
            <el-link type="primary" @click="errorMsg = scope.row.error;errorShow=true">拒绝原因</el-link>
          </div>
        </template>
      </el-table-column>
      <template #empty>
        <MyEmpty/>
      </template>
    </el-table>

    <el-dialog v-model="errorShow" title="拒绝原因" width="400px">
      <div class="fcc msg">{{errorMsg}}</div>
      <template #footer>
        <div class="fcc">
          <el-button type="primary" @click="errorShow=false">我知道了</el-button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
//公司表格
import { ref } from 'vue'
import MyEmpty from "@/components/MyEmpty.vue";
import { formatDate } from '@/utils/date'

const props = defineProps({
  data: Array,
})
const emit = defineEmits(['select'])


interface IData {
  id:number,
  name:string,//人群名称
  desc:string,//人群描述
  state:number,//状态
  address:string,//地区
  num:number,//覆盖用户人数
  money:number,//消耗金额 (元)
  create_time:number,//创建日期
  source:number,//来源
  error?:string,//拒绝原因
}
const handleSelectionChange = (val:IData[]) => {
  emit('select',val)
}
const errorShow = ref(false)
const errorMsg = ref('')
</script>

<style scoped lang="scss">
.people_table{
  .dot{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #2BD34E;
  }
  .dot_err{
    background-color: $colorred;
  }
  .dot_ok{
    background-color: $dfcolor;
  }
  .dot_close{
    background-color: $color999;
  }
  .line{
    height: 14px;
    width: 1px;
    margin: 0 16px;
    background-color: $coloreee;
  }
  .msg{
    font-size: 14px;
    color: #333;
  }
}
</style>