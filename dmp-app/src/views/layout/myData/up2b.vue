<template>
  <div class="up2b">
    <div class="top-button fsc">
      <div class="up-user fcc" @click="dialogVisible = true">上传客户</div>
      <div class="flexr">
        <div class="union-button">同步SCRM</div>
        <div class="union-button">同步CMS</div>
        <div class="union-button">同步DSP系统</div>
      </div>
    </div>
    <div class="mytable">
      <el-table
        :data="tableList"
        size="large"
        row-class-name="my-data-table-row"
      >
        <MyDataTable v-for="(item,index) in tableTitle" :key="index" :type='item.type' :width='item.width' :lable='item.lable' :prop='item.prop' :operatButton="item.operatButton" @click='operate'/>
      </el-table>
    </div>
    <div>
      <MyPage :total="totle" v-model="page" @change="getList"/>
    </div>
    <MyDataUpUser v-model="dialogVisible"/>
    <!-- <div>{{dialogVisible}}{{page}}</div> -->
  </div>
</template>

<script setup lang="ts">
  import {ref,onMounted} from 'vue'
  import MyDataTable from '@/components/MyDataTable.vue'
  import MyPage from '@/components/MyPage.vue'
  import MyDataUpUser from '@/components/MyDataUpUser.vue'
  import {useRouter} from 'vue-router'
  import {upRecordList} from '@/api/myData'

  onMounted(() => {
    getList()
  })

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
    let data={
      current:page.value,
      type:1,
      size:10
    }
    const {status,body} = await upRecordList(data)
    if(status){
      totle.value=body.total
      tableList.value = body.records
    }
  }
  const operate=(val:number,row:any)=>{
    router.push('/myData/up2bDetails?id='+row.id)
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