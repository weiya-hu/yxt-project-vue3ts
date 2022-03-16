<template>
  <el-table-column v-if="type==='text'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
      <div class="flexl">
        <div >{{prop && row[prop]?row[prop]:'---'}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='text-tooltip'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
      <div class="flexl">
        <el-tooltip
        class="box-item"
        effect="dark"
        placement="top-start"
      >
        <template #content><div class="text-tooltip-style">{{row[prop] || '---'}}</div></template>
        <div class="text-style">{{prop && row[prop]?row[prop]:'---'}}</div>
      </el-tooltip>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='num'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row,$index}">
      <div class="flexl">
        <div v-if="row">{{$index+1}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='link'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
        <el-link type="primary" :href="row[prop]">{{ row[prop] }}</el-link>
      </template>
  </el-table-column>
  <el-table-column v-if="type==='select'" type="selection" :width="width" align="center" />
  <el-table-column v-if="type==='status'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div class="flexl">
        <div :class="row.status === 2?'calculated':row.status === 0?'calculat-false':'calculating'"></div>
        <div >{{row.status===2?'计算完成':(row.status===0?'处理失败':'计算中')}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='date'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div>{{Format('yyyy-MM-dd',new Date(row[prop])) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='city'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div>{{row.province}}{{row.city}}{{row.district}}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='operateLook'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div v-for="(item,index) in operatButton" :key="index" class="operate-button" @click="operate(index,row)">{{row.status===2?item:row.status===0?'失败原因':'---'}}</div>
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
  
</template>

<script setup lang="ts">
  import { toRefs,ref} from 'vue'
  import {Format} from '@/utils/date'
  const props = withDefaults(defineProps<{
    type:string,
    lable?:string,
    prop:string,
    width:number,
    operatButton?:string[]
  }>(),{})

  const errorShow = ref(false)


  const emit = defineEmits(['click'])
  const operate=(index:number,row:any)=>{
    (row.status===2) && emit('click',index,row);

    (row.status===0) && (errorShow.value = true)
    //  errorShow.value = true

  }
  const {type,lable,prop,width,operatButton} =toRefs(props)

</script>

<style scoped lang="scss">
  .text-style{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .text-tooltip-style{
    width: 150px !important;
    white-space: wrap;
  }
  .calculating{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2BD34E;
    margin-right: 8px;
  }
  .calculated{
    width: 8px;
    height: 8px;
    background: #2D68EB;
    border-radius: 50%;
    margin-right: 8px;
  }
  .calculat-false{
    width: 8px;
    height: 8px;
    background: #e40000;
    border-radius: 50%;
    margin-right: 8px;
  }
  .operate-button{
    font-size: 14px;
    color: #2D68EB;
    cursor: pointer;
  }
  .msg{
    font-size: 14px;
    color: #333;
  }
  .el-overlay{
    background-color: rgba(0,0,0,.1) !important;
  }
 
</style>