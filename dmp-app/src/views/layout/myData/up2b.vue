<template>
  <div class="top-button fsc">
    <div class="up-user fcc">上传客户</div>
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
    <MyPage :total="totle" v-model="page" @change="changePage"/>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import MyDataTable from '@/components/MyDataTable.vue'
  import MyPage from '@/components/MyPage.vue'


  interface TableTitleProp{
      type:string,
      lable?:string,
      prop?:string,
      width:string,
      operatButton?:string[]
    }

  let totle=ref(1000)
  let page = ref(1)

  let tableList = ref([
    {id:'gfhjdgf',personsName:'',status:0,date:1645605329000},
    {id:'gfhjdgf',personsName:'djfhjs ',status:1,date:1645605329000},
    {id:'gfhjdgf',personsName:'djf电风扇hjs ',personsDes:'技术的开始抠脚大汉空间按时卡死',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djfhjs打包发货就是 ',personsDes:'技术的开始抠脚大汉空间按',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djf地方hjs ',personsDes:'技术的开始抠脚大汉空间按时卡死就是',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djf 发达hjs ',personsDes:'技术的开始抠脚大汉空间按时',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djfhjs ',personsDes:'技术的开始抠脚大汉空间按时',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djf 的hjs ',personsDes:'技术的开始抠脚大汉空间按',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djf 阿萨德hjs ',personsDes:'技术的开始抠脚大汉空间按',status:1,userNum:'2550',date:1645605329000},
    {id:'gfhjdgf',personsName:'djf实打实  hjs ',personsDes:'技术的开始抠脚大汉空间按时卡',status:1,userNum:'2550',date:1645605329000},
  ])
  let tableTitle = ref(<TableTitleProp[]>[
    {type:'select',width:'100'},
    {type:'text',lable:'ID',prop:'id',width:'150'},
    {type:'text',lable:'人群名称',prop:'personsName',width:'200'},
    {type:'text',lable:'人群描述',prop:'personsDes',width:'220'},
    {type:'status',lable:'状态',prop:'status',width:'100'},
    {type:'text',lable:'用户数',prop:'userNum',width:'100'},
    {type:'date',lable:'创建日期',prop:'date',width:'100'},
    {type:'operateLook',lable:'操作',width:'100',prop:'operate',operatButton:['查看']}
  ])
  
  const operate=(val)=>{console.log(val)}
  const changePage=(val)=>{console.log(val);page.value=val}
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
  
</style>