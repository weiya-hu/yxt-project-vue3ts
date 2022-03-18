<template>
  <div>
    <div class="top-button fsc">
      <el-button size="large" type="primary"  class="up-user fcc" @click="dialogVisible = true">创建</el-button>
      <!-- <div class="up-user fcc" @click="dialogVisible = true">上传客户</div> -->
      <div class="flexr">
        <el-button size="large">同步SCRM</el-button>
        <el-button size="large">同步CMS</el-button>
        <el-button size="large">同步DSP系统</el-button>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop'/>
        <el-table-column >
          <template #default="{row}">
            <div class="operate-button" >{{row.status===2?'查看':row.status===0?'失败原因':'---'}}</div>
            <!-- <div v-for="(item,index) in operatButton" :key="index" class="operate-button" @click="operate(index,row)">失败原因</div> -->
            <el-dialog v-model="errorShow" title="失败原因" width="400px">
              <div class="fcc msg">{{row.fail_reason}}</div>
              <!-- <div class="fcc msg">row.fail_reason</div> -->
              <template #footer>
                <div class="fcc">
                  <el-button type="primary" @click="errorShow=false">我知道了</el-button>
                </div>
              </template>
            </el-dialog>
          </template>
        </el-table-column>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <div>
      <MyPage v-if="totle" :total="totle" v-model="page" @change="getList"/>
    </div>
    <MyDataUpUser v-model="dialogVisible" @submitSuccess="submitsuccess"/>
  </div>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import MyDataTable from '@/components/MyDataTable.vue'
import MyPage from '@/components/MyPage.vue'
import MyDataUpUser from '@/components/MyDataUpUser.vue'
import {useRouter} from 'vue-router'
import MyEmpty from "@/components/MyEmpty.vue";
interface TableTitleProp{
      type:string,
      lable?:string,
      prop:string,
      width:number,
      operatButton?:string[]
  }


let dialogVisible=ref(false)
let loading = ref(false)
let totle=ref(0)
let page = ref(1)
let router = useRouter();
let errorShow = ref(false)
let tableList = ref([
  {id:'jhfdj',title:'',desc:'',create_time:1646209666231,status:0},
  {id:'jhfdj',title:'',desc:'',create_time:1643186591566,status:1},
  {id:'jhfdj',title:'',desc:'',create_time:1643186591566,status:2},
])
let tableTitle = ref(<TableTitleProp[]>[
    {type:'select',width:100,prop:'select'},
    {type:'text',lable:'需求ID',prop:'id',width:150},
    {type:'text',lable:'标题',prop:'title',width:200},
    {type:'text',lable:'描述',prop:'desc',width:220},
    {type:'date',lable:'创建日期',prop:'create_time',width:100},
    {type:'status',lable:'状态',prop:'status',width:100},    
  ]) 


const getList=()=>{

}

const submitsuccess=()=>{

}


</script>

<style scoped lang="scss">

</style>