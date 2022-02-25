<template>
  <el-table-column v-if="type==='text'" :property="prop" :label="lable" :min-width="width">
     <template #default="{row}">
      <div class="flexl">
        <div >{{row[prop]?row[prop]:'---'}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='select'" type="selection" :width="width" align="center" />
  <el-table-column v-if="type==='status'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div class="flexl">
        <div :class="row[prop] === 1?'calculating':'calculated'"></div>
        <div >{{row[prop]?'计算完成':'计算中'}}</div>
      </div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='date'" :property="prop" :label="lable" :min-width="width">
    <template #default="{row}">
      <div>{{Format('yyyy-MM-dd',new Date(row[prop])) }}</div>
    </template>
  </el-table-column>
  <el-table-column v-if="type==='operateLook'" :label="lable" :min-width="width">
    <template #default="{row}">
      <div v-for="(item,index) in operatButton" :key="index" class="operate-button" @click="operate(index,row)">{{row.status?item:'---'}}</div>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
  import { ref,toRefs} from 'vue'
  import {Format} from '@/utils/date'
  const props = defineProps({
    type:String,
    lable:String,
    prop:String,
    width:String,
    operatButton:Array
  })

  const emit = defineEmits(['click'])
  const operate=(index,row)=>{
    row.status && emit('click',index)
  }
  const {type,lable,prop,width,operatButton} =toRefs(props)

</script>

<style scoped lang="scss">
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
  .operate-button{
    font-size: 14px;
    color: #2D68EB;
    cursor: pointer;
  }
</style>