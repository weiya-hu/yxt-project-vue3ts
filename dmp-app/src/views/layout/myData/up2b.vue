<template>
  <div class="up2b">

    <TopBtns @add="dialogVisible = true"/>

    <div class="mytable">
      <el-table
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
        v-loading="loading"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop' :operatButton="item.operatButton" @click='operate'/>
        <template #empty>
          <MyEmpty/>
        </template>
      </el-table>
    </div>
    <div>
      <MyPage v-if="totle" :total="totle" v-model="page" @change="getList"/>
    </div>
    <MyDataUpUser v-model="dialogVisible" @submitSuccess="submitsuccess"/>
    <!-- <div>{{dialogVisible}}{{page}}</div> -->
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import MyDataTable from '@/components/MyDataTable.vue'
  import MyPage from '@/components/MyPage.vue'
  import MyDataUpUser from '@/components/MyDataUpUser.vue'
  import {useRouter} from 'vue-router'
  import {upRecordList} from '@/api/myData'
  import MyEmpty from "@/components/MyEmpty.vue";
  import TopBtns from "@/components/TopBtns.vue";

  interface TableTitleProp{
      type:string,
      lable?:string,
      prop:string,
      width:number,
      operatButton?:string[]
  }

  let totle=ref(0)
  let page = ref(1)
  let dialogVisible = ref(false)
  let router = useRouter();
  let loading=ref(false)


  // let tableList = ref([
  //   {id:'dhfkjs',group_name:'hdskjhv',group_desc:'kjklfjs',status:0,count:2500,create_time:1646209666231},
  //   {id:'dhfkjs',group_name:'hdskjhv',group_desc:'kjklfjs',status:1,count:2500,create_time:1646209666231},
  //   {id:'dhfkjs',group_name:'hdskjhv',group_desc:'kjklfjs',status:2,count:2500,create_time:1646209666231},
  // ])
  let tableList = ref([])
  let tableTitle = ref(<TableTitleProp[]>[
    {type:'select',width:100,prop:'select'},
    {type:'text',lable:'ID',prop:'id',width:150},
    {type:'text',lable:'人群名称',prop:'group_name',width:200},
    {type:'text',lable:'人群描述',prop:'group_desc',width:220},
    {type:'status',lable:'状态',prop:'status',width:100},
    {type:'text',lable:'用户数',prop:'count',width:100},
    {type:'date',lable:'创建日期',prop:'create_time',width:100},
    {type:'operateLook',lable:'操作',width:100,prop:'operate',operatButton:['查看']}
  ])
  
  const getList=async()=>{
    loading.value=true
    let data={
      current:page.value,
      type:1,
      size:10
    }
    const {status,body} = await upRecordList(data)
    loading.value=false
    if(status){
      totle.value=body.total
      tableList.value = body.records
    }
  }
  getList()
  const operate=(val:number,row:any)=>{
    router.push({path:'/myData/up2bDetails',query:{id:row.id}})
  }
  const submitsuccess=()=>{
    page.value=1
    getList()
  }
</script>

<style scoped lang="scss">
  .top-button{
    .up-user{
      padding: 11px 16px;
      background: $dfcolor;
      border-radius: 4px;
      font-size: 14px;
      color: #FFFFFF;
      cursor: pointer;
    }
    .union-button{
      padding: 11px 16px;
      background: #FFFFFF;
      border: 1px solid rgba(221,221,221,1);
      border-radius: 4px;
      margin-left: 12px;
      cursor: pointer;
    }
  }
  .mytable{
    margin-top: 20px;
    
  }
  .up-user-title{
    font-size: 16px;
    color: #333333;
    line-height: 16px;
    font-weight: 500;
  }
  .el-dialog .el-dialog__header{
    border: none;
  }
  
</style>